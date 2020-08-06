webpackHotUpdate_N_E("pages/user",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/user/index.js":
/*!*****************************!*\
  !*** ./pages/user/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/auth */ "./helpers/auth.js");
/* harmony import */ var _withUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../withUser */ "./pages/withUser.js");
var _this = undefined,
    _jsxFileName = "C:\\Projects\\mern-react-node-aws\\frontend\\pages\\user\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var User = function User(_ref) {
  var user = _ref.user;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 28
    }
  }, JSON.stringify(user));
};

_c = User;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_withUser__WEBPACK_IMPORTED_MODULE_5__["default"])(User));

var _c, _c2;

$RefreshReg$(_c, "User");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/withUser.js":
/*!***************************!*\
  !*** ./pages/withUser.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/auth */ "./helpers/auth.js");





var _this = undefined,
    _jsxFileName = "C:\\Projects\\mern-react-node-aws\\frontend\\pages\\withUser.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var withUser = function withUser(Page) {
  var WithAuthUser = function WithAuthUser(props) {
    return __jsx(Page, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 35
      }
    }));
  };

  WithAuthUser.getInitialProps = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
      var token, user, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_7__["getCookie"])('token', context.req);
              user = null;

              if (!token) {
                _context.next = 13;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_6__["API"], "/user"), {
                headers: {
                  authorization: "Bearer ".concat(token),
                  contentType: 'application/json'
                }
              });

            case 6:
              response = _context.sent;
              user = response.data;
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);

              if (_context.t0.response.status === 401) {
                user = null;
              }

            case 13:
              if (!(user === null)) {
                _context.next = 18;
                break;
              }

              // redirect
              context.res.writeHead(302, {
                Location: '/'
              });
              context.res.end();
              _context.next = 33;
              break;

            case 18:
              _context.t1 = _objectSpread;
              _context.t2 = _objectSpread;
              _context.t3 = {};

              if (!Page.getInitialProps) {
                _context.next = 27;
                break;
              }

              _context.next = 24;
              return Page.getInitialProps(context);

            case 24:
              _context.t4 = _context.sent;
              _context.next = 28;
              break;

            case 27:
              _context.t4 = {};

            case 28:
              _context.t5 = _context.t4;
              _context.t6 = (0, _context.t2)(_context.t3, _context.t5);
              _context.t7 = {};
              _context.t8 = {
                user: user,
                token: token
              };
              return _context.abrupt("return", (0, _context.t1)(_context.t6, _context.t7, _context.t8));

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return WithAuthUser;
};

/* harmony default export */ __webpack_exports__["default"] = (withUser);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2l0aFVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsInVzZXIiLCJKU09OIiwic3RyaW5naWZ5Iiwid2l0aFVzZXIiLCJQYWdlIiwiV2l0aEF1dGhVc2VyIiwicHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwidG9rZW4iLCJnZXRDb29raWUiLCJyZXEiLCJheGlvcyIsImdldCIsIkFQSSIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiY29udGVudFR5cGUiLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXMiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUFjLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZixDQUFULENBQWQ7QUFBQSxDQUFiOztLQUFNRCxJO0FBRVMscUVBQUFJLHlEQUFRLENBQUNKLElBQUQsQ0FBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBOztBQUVBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLElBQUksRUFBSTtBQUNyQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLO0FBQUEsV0FBSSxNQUFDLElBQUQseUZBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFKO0FBQUEsR0FBMUI7O0FBQ0FELGNBQVksQ0FBQ0UsZUFBYjtBQUFBLGdNQUErQixpQkFBTUMsT0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJDLG1CQURxQixHQUNiQywrREFBUyxDQUFDLE9BQUQsRUFBVUYsT0FBTyxDQUFDRyxHQUFsQixDQURJO0FBRXZCWCxrQkFGdUIsR0FFaEIsSUFGZ0I7O0FBQUEsbUJBSXZCUyxLQUp1QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBTUlHLDRDQUFLLENBQUNDLEdBQU4sV0FBYUMsMkNBQWIsWUFBeUI7QUFDNUNDLHVCQUFPLEVBQUU7QUFDTEMsK0JBQWEsbUJBQVlQLEtBQVosQ0FEUjtBQUVMUSw2QkFBVyxFQUFFO0FBRlI7QUFEbUMsZUFBekIsQ0FOSjs7QUFBQTtBQU1iQyxzQkFOYTtBQVluQmxCLGtCQUFJLEdBQUdrQixRQUFRLENBQUNDLElBQWhCO0FBWm1CO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWNuQixrQkFBSSxZQUFNRCxRQUFOLENBQWVFLE1BQWYsS0FBMEIsR0FBOUIsRUFBbUM7QUFDL0JwQixvQkFBSSxHQUFHLElBQVA7QUFDSDs7QUFoQmtCO0FBQUEsb0JBb0J2QkEsSUFBSSxLQUFLLElBcEJjO0FBQUE7QUFBQTtBQUFBOztBQXFCdkI7QUFDQVEscUJBQU8sQ0FBQ2EsR0FBUixDQUFZQyxTQUFaLENBQXNCLEdBQXRCLEVBQTJCO0FBQ3ZCQyx3QkFBUSxFQUFFO0FBRGEsZUFBM0I7QUFHQWYscUJBQU8sQ0FBQ2EsR0FBUixDQUFZRyxHQUFaO0FBekJ1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLG1CQTRCZnBCLElBQUksQ0FBQ0csZUE1QlU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkE0QmNILElBQUksQ0FBQ0csZUFBTCxDQUFxQkMsT0FBckIsQ0E1QmQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0QkE0QjhDLEVBNUI5Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNkJuQlIsb0JBQUksRUFBSkEsSUE3Qm1CO0FBOEJuQlMscUJBQUssRUFBTEE7QUE5Qm1CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUNBLFNBQU9KLFlBQVA7QUFDSCxDQXRDRDs7QUF3Q2VGLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIuZTVmMjU2MjU4NjY4MmE4ZDZkMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXV0aCc7XHJcbmltcG9ydCB3aXRoVXNlciBmcm9tICcuLi93aXRoVXNlcic7XHJcblxyXG5jb25zdCBVc2VyID0gKHsgdXNlciB9KSA9PiA8TGF5b3V0PntKU09OLnN0cmluZ2lmeSh1c2VyKX08L0xheW91dD47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXNlcihVc2VyKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vaGVscGVycy9hdXRoJztcclxuXHJcbmNvbnN0IHdpdGhVc2VyID0gUGFnZSA9PiB7XHJcbiAgICBjb25zdCBXaXRoQXV0aFVzZXIgPSBwcm9wcyA9PiA8UGFnZSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgV2l0aEF1dGhVc2VyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicsIGNvbnRleHQucmVxKTtcclxuICAgICAgICBsZXQgdXNlciA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJfS91c2VyYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIHJlZGlyZWN0XHJcbiAgICAgICAgICAgIGNvbnRleHQucmVzLndyaXRlSGVhZCgzMDIsIHtcclxuICAgICAgICAgICAgICAgIExvY2F0aW9uOiAnLydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQucmVzLmVuZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi4oUGFnZS5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBQYWdlLmdldEluaXRpYWxQcm9wcyhjb250ZXh0KSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFdpdGhBdXRoVXNlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhVc2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9