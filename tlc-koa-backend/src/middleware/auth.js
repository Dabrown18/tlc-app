const jwt = require('jsonwebtoken');

module.exports = (options  = {}) => {
  return async(ctx, next) => {
    const { getIgnore, postIgnore, putIgnore } = options;

    if (getIgnore && getIgnore.length > 0) {
      for (let i = 0; i < getIgnore.length; i++) {
        if (getIgnore[i].test(ctx.path) && ctx.method === 'GET') {
          ctx.log.info('Auth middleware - Path ignored: %s', ctx.path);
          return await next();
        }
      }
    }

    if (postIgnore && postIgnore.length > 0) {
      for (let i = 0; i < postIgnore.length; i++) {
        if (postIgnore[i].test(ctx.path) && ctx.method === 'POST') {
          ctx.log.info('Auth middleware - Path ignored: %s', ctx.path);
          return await next();
        }
      }
    }

    if (putIgnore && putIgnore.length > 0) {
      for (let i = 0; i < putIgnore.length; i++) {
        if (putIgnore[i].test(ctx.path) && ctx.method === 'PUT') {
          ctx.log.info('Auth middleware - Path ignored: %s', ctx.path);
          return await next();
        }
      }
    }

    const token = ctx.req.headers['authorization'];
    if (token) {
      const verify = () => new Promise((resolve) => {
        jwt.verify(token, options.secretKey, function(err, decoded) {
          if (err) {
            if (err.name === 'TokenExpiredError') {
              ctx.log.warn(`Auth middleware - TokenExpiredError`);
              ctx.status = 401;
              ctx.body = {
                status: 401,
                message: 'Token expired!',
                expiredAt: err.expiredAt
              };
            } else if (err.name === 'JsonWebTokenError') {
              ctx.log.warn(`Auth middleware - JsonWebTokenError`);
              ctx.status = 401;
              ctx.body = {
                status: 401,
                message: 'Invalid Auth Token!'
              };
            }
            resolve(false);
          }
          ctx.user = decoded;
          resolve(true);
        });
      });
      if (await verify()) {
        return await next();
      }
    } else {
      ctx.log.warn(`Auth middleware - Missing token`);
      ctx.status = 401;
      ctx.body = {
        status: 401,
        message: 'Please give the auth token!'
      };
    }
  }
};