const config = require('../config');
const respond = require('koa-respond');
const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const mongoose = require('mongoose');
const loadRoutes = require('./routes');
const Logger = require('./lib/logger');
const AuthIgnoreList = require('./constants/auth-ignore-list');
const authMiddleware = require('./middleware/auth');

mongoose.Promise = global.Promise;

const app = new Koa();

const log = Logger(app, { isDev: config.DEV });

if (config.SHOW_HELLO) {
  app.use(async (ctx, next) => {
    if (ctx.path === '/') {
      ctx.body = 'TLC Backend v0.1'
    } else {
      await next();
    }
  });
}

app.use(respond());
app.use(bodyParser());
app.use(authMiddleware({
  secretKey: config.TOKEN_SIGN_SECRET,
  getIgnore: AuthIgnoreList.getIgnore,
  postIgnore: AuthIgnoreList.postIgnore,
  putIgnore: AuthIgnoreList.putIgnore
}));

loadRoutes(app);

async function run() {
  await mongoose.connect(`mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`, {
    useMongoClient: true
  });

  log.info('Connected to database!');

  app.listen(config.PORT, () => {
    log.info(`Listening on port ${config.PORT}`);
  });
}
 
run().catch(e => log.error(e));
