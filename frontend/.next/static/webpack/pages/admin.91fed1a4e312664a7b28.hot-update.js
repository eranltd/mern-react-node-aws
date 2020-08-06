webpackHotUpdate_N_E("pages/admin",{

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _withAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withAdmin */ "./pages/withAdmin.js");
var _this = undefined,
    _jsxFileName = "C:\\Projects\\mern-react-node-aws\\frontend\\pages\\admin\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Admin = function Admin(_ref) {
  var user = _ref.user;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 29
    }
  }, JSON.stringify(user));
};

_c = Admin;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_withAdmin__WEBPACK_IMPORTED_MODULE_2__["default"])(Admin));

var _c, _c2;

$RefreshReg$(_c, "Admin");
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

/***/ "./pages/withAdmin.js":
/*!****************************!*\
  !*** ./pages/withAdmin.js ***!
  \****************************/
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
    _jsxFileName = "C:\\Projects\\mern-react-node-aws\\frontend\\pages\\withAdmin.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var withAdmin = function withAdmin(Page) {
  var WithAdminUser = function WithAdminUser(props) {
    return __jsx(Page, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 36
      }
    }));
  };

  WithAdminUser.getInitialProps = /*#__PURE__*/function () {
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
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_6__["API"], "/admin"), {
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

  return WithAdminUser;
};

/* harmony default export */ __webpack_exports__["default"] = (withAdmin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dpdGhBZG1pbi5qcyJdLCJuYW1lcyI6WyJBZG1pbiIsInVzZXIiLCJKU09OIiwic3RyaW5naWZ5Iiwid2l0aEFkbWluIiwiUGFnZSIsIldpdGhBZG1pblVzZXIiLCJwcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJ0b2tlbiIsImdldENvb2tpZSIsInJlcSIsImF4aW9zIiwiZ2V0IiwiQVBJIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJjb250ZW50VHlwZSIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1cyIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUFjLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZixDQUFULENBQWQ7QUFBQSxDQUFkOztLQUFNRCxLO0FBRVMscUVBQUFJLDBEQUFTLENBQUNKLEtBQUQsQ0FBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBOztBQUVBLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLElBQUksRUFBSTtBQUN0QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUs7QUFBQSxXQUFJLE1BQUMsSUFBRCx5RkFBVUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUo7QUFBQSxHQUEzQjs7QUFDQUQsZUFBYSxDQUFDRSxlQUFkO0FBQUEsZ01BQWdDLGlCQUFNQyxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkMsbUJBRHNCLEdBQ2RDLCtEQUFTLENBQUMsT0FBRCxFQUFVRixPQUFPLENBQUNHLEdBQWxCLENBREs7QUFFeEJYLGtCQUZ3QixHQUVqQixJQUZpQjs7QUFBQSxtQkFJeEJTLEtBSndCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFNR0csNENBQUssQ0FBQ0MsR0FBTixXQUFhQywyQ0FBYixhQUEwQjtBQUM3Q0MsdUJBQU8sRUFBRTtBQUNMQywrQkFBYSxtQkFBWVAsS0FBWixDQURSO0FBRUxRLDZCQUFXLEVBQUU7QUFGUjtBQURvQyxlQUExQixDQU5IOztBQUFBO0FBTWRDLHNCQU5jO0FBWXBCbEIsa0JBQUksR0FBR2tCLFFBQVEsQ0FBQ0MsSUFBaEI7QUFab0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBY3BCLGtCQUFJLFlBQU1ELFFBQU4sQ0FBZUUsTUFBZixLQUEwQixHQUE5QixFQUFtQztBQUMvQnBCLG9CQUFJLEdBQUcsSUFBUDtBQUNIOztBQWhCbUI7QUFBQSxvQkFvQnhCQSxJQUFJLEtBQUssSUFwQmU7QUFBQTtBQUFBO0FBQUE7O0FBcUJ4QjtBQUNBUSxxQkFBTyxDQUFDYSxHQUFSLENBQVlDLFNBQVosQ0FBc0IsR0FBdEIsRUFBMkI7QUFDdkJDLHdCQUFRLEVBQUU7QUFEYSxlQUEzQjtBQUdBZixxQkFBTyxDQUFDYSxHQUFSLENBQVlHLEdBQVo7QUF6QndCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUJBNEJoQnBCLElBQUksQ0FBQ0csZUE1Qlc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkE0QmFILElBQUksQ0FBQ0csZUFBTCxDQUFxQkMsT0FBckIsQ0E1QmI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0QkE0QjZDLEVBNUI3Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNkJwQlIsb0JBQUksRUFBSkEsSUE3Qm9CO0FBOEJwQlMscUJBQUssRUFBTEE7QUE5Qm9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUNBLFNBQU9KLGFBQVA7QUFDSCxDQXRDRDs7QUF3Q2VGLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLjkxZmVkMWE0ZTMxMjY2NGE3YjI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHdpdGhBZG1pbiBmcm9tICcuLi93aXRoQWRtaW4nO1xyXG5cclxuY29uc3QgQWRtaW4gPSAoeyB1c2VyIH0pID0+IDxMYXlvdXQ+e0pTT04uc3RyaW5naWZ5KHVzZXIpfTwvTGF5b3V0PjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBZG1pbihBZG1pbik7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uL2hlbHBlcnMvYXV0aCc7XHJcblxyXG5jb25zdCB3aXRoQWRtaW4gPSBQYWdlID0+IHtcclxuICAgIGNvbnN0IFdpdGhBZG1pblVzZXIgPSBwcm9wcyA9PiA8UGFnZSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgV2l0aEFkbWluVXNlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nLCBjb250ZXh0LnJlcSk7XHJcbiAgICAgICAgbGV0IHVzZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vYWRtaW5gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gcmVkaXJlY3RcclxuICAgICAgICAgICAgY29udGV4dC5yZXMud3JpdGVIZWFkKDMwMiwge1xyXG4gICAgICAgICAgICAgICAgTG9jYXRpb246ICcvJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29udGV4dC5yZXMuZW5kKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLihQYWdlLmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IFBhZ2UuZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIDoge30pLFxyXG4gICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gV2l0aEFkbWluVXNlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBZG1pbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==