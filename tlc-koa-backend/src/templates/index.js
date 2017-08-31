const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const loadTemplate = (t) => {
  return _.template(fs.readFileSync(path.resolve(__dirname, `./${t}`)))
};

fs.readdirSync(__dirname).forEach(function(file) {
  if (file !== 'index.js') {
    const templateName = file;
    const templateKey = file.split('.')[0];
    exports[templateKey] = loadTemplate(templateName);
  }
});