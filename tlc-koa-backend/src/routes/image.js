/**
 * This route is intended for development purposes.
 * In production image serving should be done through NGINX.
 * Ideally some assets should be served through S3/CloudFront.
 */

const router = require('koa-router')();
const send   = require('koa-send');
const config = require('../../config');

async function serveImage(ctx) {
  const { filename } = ctx.params;
  await send(ctx, filename, { root: config.PICTURE_UPLOAD_DIR });
}

router
  .get('/images/:filename', serveImage);

module.exports = router;