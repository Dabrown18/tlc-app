const env = process.env.NODE_ENV || 'development';

module.exports = Object.assign({}, require('./all'), require(`./${env}`));