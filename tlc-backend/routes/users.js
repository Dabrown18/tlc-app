const express = require('express');
const router = express.Router();

const FollowersController = require('../controllers/followers');

const getFollowers = FollowersController().getFollowers;
const getFollowing = FollowersController().getFollowing;
``

/* GET listing. of users */
router.get('/:userId/followers', function(req, res, next) {

  // Comment out this line:
  //res.send('respond with a resource');

  var userId = req.params.userId;


  getFollowers(userId).then((crateResponse) => {
      // And insert something like this instead:
    console.log('did we ever get here on this attempt?');
    console.log('crate response is ' + crateResponse);
    res.json(crateResponse);
  });

});

/* Get all users USER is following */
router.get('/:userId/following', function(req, res, next) {
  var userId = req.params.userId;

  getFollowing(userId).then((crateResponse) => {
    console.log('did we ever get here?');
    console.log('crate is responding ' + crateResponse);
    res.json(crateResponse);
  });

});

module.exports = router;