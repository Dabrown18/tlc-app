const fs = require('fs');

module.exports = {
  fileAsBase64(filepath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, { encoding: 'base64' }, function(err, data) {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }
};
