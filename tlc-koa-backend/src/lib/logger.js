const path = require('path');
const bunyan = require('bunyan');
const koaBunyanLogger = require('koa-bunyan-logger');

module.exports = (koaApp, opts = {}) => {
  const errorLogPath = opts.errorLogPath || path.resolve(__dirname, '../../logs');
  const streams = [
    {
      level: 'error',
      path: `${errorLogPath}/error.log`
    }
  ];

  if (opts.isDev) {
    streams.push({
      level: 'debug',
      stream: process.stdout
    });
  }

  const logger = bunyan.createLogger({
    name: opts.name || 'tlc',
    streams
  });

  koaApp.use(koaBunyanLogger());

  if (opts.isDev) {
    // This is too verbose. The custom middleware below seems to be enough for now.
    // koaApp.use(koaBunyanLogger.requestLogger());

    koaApp.use((ctx, next) => {
      ctx.log.info('Got a %s request from %s for %s', ctx.request.method, ctx.request.ip, ctx.path);
      return next();
    });
  }

  return logger;
};