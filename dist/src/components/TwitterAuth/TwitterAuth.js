"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _twitter_auth = _interopRequireDefault(require("./assets/image/twitter_auth.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TwitterAuth =
/*#__PURE__*/
function (_Component) {
  _inherits(TwitterAuth, _Component);

  function TwitterAuth(props) {
    var _this;

    _classCallCheck(this, TwitterAuth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TwitterAuth).call(this, props));
    _this.state = {
      token: "",
      currentUser: null,
      message: ""
    };

    if (!_app.default.apps.length) {
      _app.default.initializeApp(_this.props.config);
    }

    return _this;
  }

  _createClass(TwitterAuth, [{
    key: "handleLogin",
    value: function handleLogin() {
      var provider = new _app.default.auth.TwitterAuthProvider();

      _app.default.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken; // The signed-in user info.

        var user = result.user;
        console.log(user); // ...
      }).catch(function (error) {
        // Handle Errors here.
        console.log(error); // ...
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("button", {
        onClick: this.handleLogin
      }, _react.default.createElement("img", {
        alt: "twitter_auth",
        src: _twitter_auth.default
      })));
    }
  }]);

  return TwitterAuth;
}(_react.Component);

var _default = TwitterAuth;
exports.default = _default;

//# sourceMappingURL=TwitterAuth.jsx.map