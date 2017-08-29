const fs = require('fs');

module.exports = (app) => {
  fs.readdirSync(__dirname).forEach(function(file) {
    if (file !== 'index.js') {
      var moduleName = file.split('.')[0];

      const route = require(`./${moduleName}`);
      app
        .use(route.routes())
        .use(route.allowedMethods());
    }
  });
}