webpackHotUpdate(4,{

/***/ "./pages/secret.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_secure_template__ = __webpack_require__("./static/secure-template.js");
var _jsxFileName = "/Users/williamdoody/dev/projects/chatwithauth/pages/secret.js";





var Secret = function Secret(_ref) {
  var loggedInUser = _ref.loggedInUser;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Hi ", loggedInUser.nickname, "! ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: loggedInUser.picture,
    width: "100px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-2688749504"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2688749504",
    css: "pre.jsx-2688749504{width:500px;background:#ddd;white-space:pre-wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlY3JldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPd0IsQUFHd0IsWUFDSSxnQkFDSyxxQkFDdkIiLCJmaWxlIjoicGFnZXMvc2VjcmV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93aWxsaWFtZG9vZHkvZGV2L3Byb2plY3RzL2NoYXR3aXRoYXV0aCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2VjdXJlVGVtcGxhdGUgZnJvbSAnLi4vc3RhdGljL3NlY3VyZS10ZW1wbGF0ZSc7XG5cbmNvbnN0IFNlY3JldCA9ICh7IGxvZ2dlZEluVXNlciB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgSGkgeyBsb2dnZWRJblVzZXIubmlja25hbWUgfSEgPGltZyBzcmM9eyBsb2dnZWRJblVzZXIucGljdHVyZSB9IHdpZHRoPVwiMTAwcHhcIiAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICB9XG4gICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8cHJlPnsgSlNPTi5zdHJpbmdpZnkobG9nZ2VkSW5Vc2VyLCBudWxsLCAyKSB9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuKVxuXG5TZWNyZXQucHJvcFR5cGVzID0ge1xuICAgIGxvZ2dlZEluVXNlcjogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdXJlVGVtcGxhdGUoU2VjcmV0KTsiXX0= */\n/*@ sourceURL=pages/secret.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-2688749504"
  }, JSON.stringify(loggedInUser, null, 2))));
};

Secret.propTypes = {
  loggedInUser: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__static_secure_template__["a" /* default */])(Secret));
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
//# sourceMappingURL=4.ceb8b671e0e3a8c9b373.hot-update.js.map