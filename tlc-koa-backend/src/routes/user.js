const fs       = require('fs');
const AWS      = require('aws-sdk');
const router   = require('koa-router')();
const multer   = require('koa-multer');
const multerS3 = require('multer-s3');
const uuid     = require('uuid/v4');
const UserService = require('../services/user-service');
const ValidatorService = require('../services/validator-service');
const StoryService     = require('../services/story-service');
const config = require('../../config');

const s3 = new AWS.S3();

const uploadMiddleware = multer({
  storage: multerS3({
    s3,
    bucket: 'theladieschampion-dev',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      console.log('file', file);
      cb(null, `images/profile/${uuid()}`);
    }
  }),

  limits: {
    fileSize: config.MAX_IMAGE_SIZE
  }
});

async function getUser(ctx) {
  try {
    const { id } = ctx.params;

    if (!(await UserService.canUserViewUser(ctx.user.id, id))) {
      return ctx.unauthorized({
        error: 'You do not have permissions to view this user info'
      });
    }

    const user = await UserService.getById(id);
    ctx.body = {
      status: 1,
      user: UserService.stripSensitiveInfo(user)
    };
  } catch( e ) {
    ctx.log.error('Error on getUser()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function updateUser(ctx) {
  try {
    const { id } = ctx.params;
    const {
      username,
      firstName,
      lastName,
      occupation,
      webAddress,
      facebook,
      instagram,
      twitter,
      patreon,
      snapchat
    } = ctx.request.body;

    if (ctx.user.id !== id) {
      return ctx.unauthorized({
        error: 'You do not have permissions to update this user info'
      });
    }

    let oldUser = await UserService.getById(id);

    if (!oldUser) {
      return ctx.notFound({
        error: 'User does not exist'
      });
    }

    if (oldUser.username.toLowerCase() !== username.trim().toLowerCase()) {
      if (await UserService.getByUsername(username)) {
        return ctx.badRequest({
          error: 'Username already taken'
        });
      }
    }

    if (webAddress && !ValidatorService.isValidUrl(webAddress)) {
      return ctx.badRequest({
        error: 'Web address is invalid'
      });
    }

    if (twitter && !ValidatorService.isValidTwitterUrl(twitter)) {
      return ctx.badRequest({
        error: 'Twitter url is invalid'
      });
    }

    if (patreon && !ValidatorService.isValidPatreonUrl(patreon)) {
      return ctx.badRequest({
        error: 'Patreon url is invalid'
      });
    }

    if (facebook && !ValidatorService.isValidFacebookUrl(facebook)) {
      return ctx.badRequest({
        error: 'Facebook url is invalid'
      });
    }

    if (instagram && !ValidatorService.isValidInstagramUrl(instagram)) {
      return ctx.badRequest({
        error: 'Instagram url is invalid'
      });
    }

    if (snapchat && !ValidatorService.isValidSnapchatUsername(snapchat)) {
      return ctx.badRequest({
        error: 'Snapchat username is invalid'
      });
    }

    const user = await UserService.updateUser(id, {
      username,
      firstName,
      lastName,
      occupation,
      webAddress,
      facebook,
      instagram,
      twitter,
      patreon,
      snapchat
    });

    ctx.body = {
      status: 1,
      user: UserService.stripSensitiveInfo(user)
    };
  } catch( e ) {
    ctx.log.error('Error on updateUser()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function tempDeleteUser(ctx) {
  try {
    const { username } = ctx.params;

    const user = await UserService.getByUsername(username);

    if (user) {
      await UserService.deleteUser(user._id);

      return ctx.ok({
        status: 1
      });
    }

    ctx.notFound({
      error: 'User does not exist'
    });
  } catch( e ) {
    ctx.log.error('Error on tempDeleteUser()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function updateProfilePicture(ctx) {
  try {
    const { originalname, location, mimetype, size } = ctx.req.file;
    const { id } = ctx.params;

    const profilePictureData = await UserService.getProfilePictureData(id);

    // It is important to delete the old picture file.
    // Even when we move to S3, we will need to invoke an API call to delete the file there.
    //fs.unlink(`${config.PICTURE_UPLOAD_DIR}/${profilePictureData.filename}`);

    const result = await UserService.updateProfilePicture(id, location, originalname, mimetype, size);

    ctx.ok({
      status: 1,
      result
    })
  } catch( e ) {
    ctx.log.error('Error on updateProfilePicture()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function updateUserCategories(ctx) {
  try {
    const { id } = ctx.params;
    const { categories } = ctx.request.body;

    if (ctx.user.id !== id) {
      return ctx.unauthorized({
        error: 'You do not have permissions to update this user info'
      });
    }

    const user = await UserService.updateUser(id, { categories });

    ctx.body = {
      status: 1
    };
  } catch( e ) {
    ctx.log.error('Error on updateUserCategories()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function getUserStories(ctx) {
  try {
    const { id } = ctx.params;

    const user = await UserService.getById(id);
    if (!user) {
      return ctx.notFound({
        error: 'User not found'
      });
    }

    if (!StoryService.canUserViewOtherUserStories(ctx.user.id, id)) {
      return ctx.unauthorized({
        error: 'You cannot view the given user stories'
      });
    }

    const stories = (await StoryService.getUserStories(id))
      .map(s => StoryService.stripSensitiveInfo(s));

    ctx.ok({
      status: 1,
      stories
    })

  } catch( e ) {
    ctx.log.error('Error on getUserStories()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

router
  .get('/users/:id', getUser)
  .put('/users/:id/profile', updateUser)
  .post('/users/:id/profile/picture', uploadMiddleware.single('profilePicture'), updateProfilePicture)
  .put('/users/:id/profile/categories', updateUserCategories)
  .get('/users/:id/stories', getUserStories);


// TODO: This should either active on DEV or removed in the future. SHOULD NOT BE ENABLED ON PRODUCTION
if (config.DEV) {
  router.get('/temp-delete-user/:username', tempDeleteUser);
}

module.exports = router;