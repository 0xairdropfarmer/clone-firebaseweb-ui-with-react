'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
require('@babel/preset-env');
require('@babel/preset-react');
require('@babel/plugin-proposal-class-properties');
require('@babel/plugin-proposal-export-default-from');
require('@babel/plugin-proposal-export-namespace-from');
require('@babel/plugin-proposal-object-rest-spread');

var baseCompile = require('../../internal/babelBaseCompiler');
var compiledFileTypes = ['js', 'jsx'];

var compile = function compile(files, distPath) {
  return baseCompile(files, distPath, __dirname, compiledFileTypes);
};

exports.default = {
  compile: compile
};
module.exports = exports['default'];

//# sourceMappingURL=index.js.map