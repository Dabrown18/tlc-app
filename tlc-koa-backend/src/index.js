const config = require('../config');
const logger = require('koa-logger');
const respond = require('koa-respond');
const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const mongoose = require('mongoose');
const loadRoutes = require('./routes');

mongoose.Promise = global.Promise;

const app = new Koa();

if (config.DEV) {
  app.use(logger());
}

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

loadRoutes(app);

async function run() {
  await mongoose.connect(`mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`, {
    useMongoClient: true
  });

  console.log('Connected to database!');

  app.listen(config.PORT, () => {
    console.log(`Listening on port ${config.PORT}`);
  });
}
 
run().catch(e => console.error(e.stack));
