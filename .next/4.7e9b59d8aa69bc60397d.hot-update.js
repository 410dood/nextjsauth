webpackHotUpdate(4,{

/***/ "./pages/secret.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_secure_template__ = __webpack_require__("./static/secure-template.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stripe_checkout__ = __webpack_require__("./node_modules/react-stripe-checkout/dist/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_stripe_checkout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_stripe_checkout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
var _this = this,
    _jsxFileName = "/Users/williamdoody/dev/projects/chatwithauth/pages/secret.js";





 // import {StripePublishableKey} from '../settings';

var StripePublishableKey = 'k_test_wpLL5Va4uYLNa9cNmqo94381';
var name = 'billsbroke';
var price = '100';

var Secret = function Secret(_ref) {
  var loggedInUser = _ref.loggedInUser;
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_stripe_checkout___default.a, {
    stripeKey: StripePublishableKey,
    token: _this.onToken,
    name: name,
    amount: 100,
    email: loggedInUser.email,
    desktopShowModal: showModal || null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default.a, {
    variant: "raised",
    color: "primary",
    style: styleBuyButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Buy book for $", price), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
    style: {
      verticalAlign: 'middle',
      fontSize: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, book.textNearButton), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }));
};

Secret.propTypes = {
  loggedInUser: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__static_secure_template__["a" /* default */])(Secret)); //     <div>
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/secret")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.7e9b59d8aa69bc60397d.hot-update.js.map