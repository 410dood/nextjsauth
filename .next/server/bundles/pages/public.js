module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return domain; });
var clientID = process.env.CLIENTID || 'tvVNrCD9w2qChzBM8NrAdktDgpdDfk8b'; // your clientID

var domain = process.env.DOMAIN || 'doodcoin.auth0.com'; // your domain

var StripePublishableKey = process.env.StripePublishableKey || 'k_test_wpLL5Va4uYLNa9cNmqo94381';


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saveToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTokenForBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTokenForServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return verifyToken; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__(2);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






function getJWK() {
  return _getJWK.apply(this, arguments);
}

function _getJWK() {
  _getJWK = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
    var res, jwk;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()("https://".concat(__WEBPACK_IMPORTED_MODULE_4__settings__["b" /* domain */], "/.well-known/jwks.json"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            jwk = _context.sent;
            return _context.abrupt("return", jwk);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getJWK.apply(this, arguments);
}

function saveToken(jwtToken, accessToken) {
  __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.set('user', __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.decode(jwtToken));
  __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.set('jwtToken', jwtToken);
}

;

function deleteToken() {
  __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.remove('user');
  __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.remove('jwtToken');
}

;

function verifyToken(_x) {
  return _verifyToken.apply(this, arguments);
}

function _verifyToken() {
  _verifyToken = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(token) {
    var decodedToken, jwk, cert;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!token) {
              _context2.next = 18;
              break;
            }

            decodedToken = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.decode(token, {
              complete: true
            });
            _context2.next = 4;
            return getJWK();

          case 4:
            jwk = _context2.sent;
            cert = jwk.keys[0].x5c[0];
            cert = cert.match(/.{1,64}/g).join('\n');
            cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n");

            if (!(jwk.keys[0].kid === decodedToken.header.kid)) {
              _context2.next = 18;
              break;
            }

            _context2.prev = 9;
            __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.verify(token, cert);
            return _context2.abrupt("return", true);

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](9);
            console.error(_context2.t0);
            return _context2.abrupt("return", false);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[9, 14]]);
  }));
  return _verifyToken.apply(this, arguments);
}

function getTokenForBrowser() {
  return _getTokenForBrowser.apply(this, arguments);
}

function _getTokenForBrowser() {
  _getTokenForBrowser = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
    var token, validToken;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.getJSON('jwtToken');
            _context3.next = 3;
            return verifyToken(token);

          case 3:
            validToken = _context3.sent;

            if (!validToken) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.getJSON('user'));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _getTokenForBrowser.apply(this, arguments);
}

function getTokenForServer(_x2) {
  return _getTokenForServer.apply(this, arguments);
}

function _getTokenForServer() {
  _getTokenForServer = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(req) {
    var jwtFromCookie, token, validToken;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.headers.cookie) {
              _context4.next = 13;
              break;
            }

            jwtFromCookie = req.headers.cookie.split(';').find(function (c) {
              return c.trim().startsWith('jwtToken=');
            });

            if (jwtFromCookie) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", undefined);

          case 4:
            token = jwtFromCookie.split('=')[1];
            _context4.next = 7;
            return verifyToken(token);

          case 7:
            validToken = _context4.sent;

            if (!validToken) {
              _context4.next = 12;
              break;
            }

            return _context4.abrupt("return", __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.decode(token));

          case 12:
            return _context4.abrupt("return", undefined);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _getTokenForServer.apply(this, arguments);
}



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);





var Header = function Header(_ref) {
  var isLoggedIn = _ref.isLoggedIn;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-1300051281"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1300051281",
    css: ["ul.jsx-1300051281{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333;}", "li.jsx-1300051281{float:left;}", "li.jsx-1300051281 a.jsx-1300051281{display:block;color:white;text-align:center;padding:14px 16px;-webkit-text-decoration:none;text-decoration:none;}", "li.jsx-1300051281 a.jsx-1300051281:hover{background-color:#111;}"]
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    className: "jsx-1300051281"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: "jsx-1300051281"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-1300051281"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: "jsx-1300051281"
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-1300051281"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/public"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: "jsx-1300051281"
  }, "Public"))), isLoggedIn ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-1300051281"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/secret"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: "jsx-1300051281"
  }, "Secret"))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-1300051281"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/login"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: "jsx-1300051281"
  }, "Login"))), isLoggedIn ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-1300051281"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/logout"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: "jsx-1300051281"
  }, "Logout"))) : '')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    className: "jsx-1300051281"
  }, "Auth0 & Next.js"));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_auth__ = __webpack_require__(3);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/* harmony default export */ __webpack_exports__["a"] = (function (Page) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(Template, _React$Component);

      function Template() {
        _classCallCheck(this, Template);

        return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
      }

      _createClass(Template, [{
        key: "render",
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], this.props), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Page, this.props));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
            var req, loggedInUser, pageProperties;
            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    req = _ref.req;

                    if (!process.browser) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_3__static_auth__["b" /* getTokenForBrowser */])();

                  case 4:
                    _context.t0 = _context.sent;
                    _context.next = 10;
                    break;

                  case 7:
                    _context.next = 9;
                    return Object(__WEBPACK_IMPORTED_MODULE_3__static_auth__["c" /* getTokenForServer */])(req);

                  case 9:
                    _context.t0 = _context.sent;

                  case 10:
                    loggedInUser = _context.t0;
                    _context.next = 13;
                    return Page.getInitialProps;

                  case 13:
                    _context.t1 = _context.sent;

                    if (!_context.t1) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 17;
                    return Page.getInitialProps(req);

                  case 17:
                    _context.t1 = _context.sent;

                  case 18:
                    pageProperties = _context.t1;
                    return _context.abrupt("return", _objectSpread({}, pageProperties, {
                      loggedInUser: loggedInUser,
                      isLoggedIn: !!loggedInUser
                    }));

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return Template;
    }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component)
  );
});

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_template_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



var Public = function Public() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", null, "This page is visible to everyone!"));
}; //
//     <div>
//     Hi { loggedInUser.nickname }! <img src={ loggedInUser.picture } width="100px" />
// <div>
// <style jsx>{`
//          pre {
//            width: 500px;
//            background: #ddd;
//            white-space: pre-wrap;
//          }
//        `}
// </style>
// <pre>{ JSON.stringify(loggedInUser, null, 2) }</pre>
// </div>
// </div>


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__static_template_js__["a" /* default */])(Public));

/***/ })
/******/ ]);