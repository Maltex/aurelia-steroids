var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';
var appgyverRoot = '../www/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  appgyverRoot: appgyverRoot,
  appgyverSource: appgyverRoot + '/dist',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  appBuild: outputRoot + 'app-build.js',
  appAurelia: outputRoot + 'aurelia.js',
  jspm: 'jspm_packages'
};
