'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _groupBy = require('../../src/object/groupBy');

var _groupBy2 = _interopRequireDefault(_groupBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should();

describe('group-by', function () {
  it('the groupBy function should exist', function () {
    return should.exist(_groupBy2.default);
  });

  it('should group by the floored value (4, 6)', function () {
    (0, _groupBy2.default)([6.1, 4.2, 6.3], Math.floor).should.be.deep.equal({ '4': [4.2], '6': [6.1, 6.3] });
  });
});

//# sourceMappingURL=groupBy.spec.js.map