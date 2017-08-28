const config = require('./config');
const Koa = require('koa');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const app = new Koa();

if (config.SHOW_HELLO) {
  app.use(async (ctx, next) => {
    if (ctx.path === '/') {
      ctx.body = 'TLC Backend v0.1'
    } else {
      await next();
    }
  });
}

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
