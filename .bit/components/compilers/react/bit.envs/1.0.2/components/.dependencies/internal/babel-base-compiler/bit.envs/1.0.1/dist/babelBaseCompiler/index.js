'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('@babel/core');

var _vinyl = require('vinyl');

var _vinyl2 = _interopRequireDefault(_vinyl);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bitUtilsObject = require('@bit/bit.utils.object.group-by');

var _bitUtilsObject2 = _interopRequireDefault(_bitUtilsObject);

var _getBabelOptions = require('../getBabelOptions');

var _getBabelOptions2 = _interopRequireDefault(_getBabelOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getDistFile = function _getDistFile(file, distPath, content) {
    var distFile = file.clone();
    distFile.base = distPath;
    distFile.path = _path2.default.join(distPath, file.relative);

    if (content) {
        distFile.contents = content;
    }

    return distFile;
};

var _runBabel = function _runBabel(file, options, distPath) {
    var _transform = (0, _core.transform)(file.contents.toString(), options),
        code = _transform.code,
        map = _transform.map;

    var mappings = new _vinyl2.default({
        contents: new Buffer(map.mappings),
        base: distPath,
        path: _path2.default.join(distPath, file.relative)
    });
    mappings.basename = file.basename + '.map';
    file.basename = _path2.default.parse(file.basename).name + '.js';

    var fileContent = code ? new Buffer(code + '\n\n//# sourceMappingURL=' + mappings.basename) : new Buffer(code);
    var distFile = _getDistFile(file, distPath, fileContent);

    return [mappings, distFile];
};

var baseCompile = function baseCompile(files, distPath, compilerPath, compiledFileTypes) {
    // Get babel options from .babelrc file in actual compiler dir
    var options = (0, _getBabelOptions2.default)(compilerPath);

    // Divide files by whether we should compile them, according to file type.
    var filesByToCompile = (0, _bitUtilsObject2.default)(files, function (file) {
        return compiledFileTypes.indexOf(file.extname.replace('.', '')) > -1;
    });

    // Compile the ones we should
    var compiled = !filesByToCompile.true || filesByToCompile.true.length === 0 ? [] : filesByToCompile.true.map(function (file) {
        return _runBabel(file, options, distPath);
    }).reduce(function (a, b) {
        return a.concat(b);
    });

    // We also need the non-compiled files as dist files
    var nonCompiled = !filesByToCompile.false ? [] : filesByToCompile.false.map(function (file) {
        return _getDistFile(file, distPath);
    });

    // Compiler returns compiled AND non compiled dist files together
    return compiled.concat(nonCompiled);;
};

exports.default = baseCompile;
module.exports = exports['default'];

//# sourceMappingURL=index.js.map