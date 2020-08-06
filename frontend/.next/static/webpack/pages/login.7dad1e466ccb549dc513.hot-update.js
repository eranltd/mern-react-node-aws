webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/alerts */ "./helpers/alerts.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/auth */ "./helpers/auth.js");




var _this = undefined,
    _jsxFileName = "C:\\Projects\\mern-react-node-aws\\frontend\\pages\\login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Login = function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    email: 'eranltd@gmail.com',
    password: '7Wm6pWa5MkwafRE',
    error: '',
    success: '',
    buttonText: 'Login'
  }),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["isAuth"])() && next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
  }, []);
  var email = state.email,
      password = state.password,
      error = state.error,
      success = state.success,
      buttonText = state.buttonText;

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "success", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "buttonText", 'Login'), _objectSpread2)));
    };
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setState(_objectSpread(_objectSpread({}, state), {}, {
                buttonText: 'Logging in'
              }));
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/login"), {
                email: email,
                password: password
              });

            case 5:
              response = _context.sent;
              // console.log(response); // data > token / user
              Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["authenticate"])(response, function () {
                return Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["isAuth"])() && Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["isAuth"])().role === 'admin' ? next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/admin') : next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/user');
              });
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                buttonText: 'Login',
                error: _context.t0.response.data.error
              }));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var loginForm = function loginForm() {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, __jsx("input", {
      value: email,
      onChange: handleChange('email'),
      type: "email",
      className: "form-control",
      placeholder: "Type your email",
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx("input", {
      value: password,
      onChange: handleChange('password'),
      type: "password",
      className: "form-control",
      placeholder: "Type your password",
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: "btn btn-outline-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, buttonText)));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-6 offset-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "Login"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), success && Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_8__["showSuccessMessage"])(success), error && Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_8__["showErrorMessage"])(error), loginForm()));
};

_s(Login, "3nvf9LEwdB0XWTrEnoVgGZlCjqY=");

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsInN1Y2Nlc3MiLCJidXR0b25UZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImlzQXV0aCIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJBUEkiLCJyZXNwb25zZSIsImF1dGhlbnRpY2F0ZSIsInJvbGUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxvZ2luRm9ybSIsInNob3dTdWNjZXNzTWVzc2FnZSIsInNob3dFcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDO0FBQy9CQyxTQUFLLEVBQUUsbUJBRHdCO0FBRS9CQyxZQUFRLEVBQUUsaUJBRnFCO0FBRy9CQyxTQUFLLEVBQUUsRUFId0I7QUFJL0JDLFdBQU8sRUFBRSxFQUpzQjtBQUsvQkMsY0FBVSxFQUFFO0FBTG1CLEdBQUQsQ0FEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFTaEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxpRUFBTSxNQUFNQyxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUFaO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQVRnQixNQWFSVixLQWJRLEdBYXdDSyxLQWJ4QyxDQWFSTCxLQWJRO0FBQUEsTUFhREMsUUFiQyxHQWF3Q0ksS0FieEMsQ0FhREosUUFiQztB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QUE0QkEsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tELE9BQU8sSUFBSXlCLDBFQUFrQixDQUFDekIsT0FBRCxDQUhsQyxFQUlLRCxLQUFLLElBQUkyQix3RUFBZ0IsQ0FBQzNCLEtBQUQsQ0FKOUIsRUFLS3lCLFNBQVMsRUFMZCxDQURKLENBREo7QUFXSCxDQTVFRDs7R0FBTTdCLEs7O0tBQUFBLEs7QUE4RVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjdkYWQxZTQ2NmNjYjU0OWRjNTEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHNob3dTdWNjZXNzTWVzc2FnZSwgc2hvd0Vycm9yTWVzc2FnZSB9IGZyb20gJy4uL2hlbHBlcnMvYWxlcnRzJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgYXV0aGVudGljYXRlLCBpc0F1dGggfSBmcm9tICcuLi9oZWxwZXJzL2F1dGgnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJ2VyYW5sdGRAZ21haWwuY29tJyxcclxuICAgICAgICBwYXNzd29yZDogJzdXbTZwV2E1TWt3YWZSRScsXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6ICcnLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6ICdMb2dpbidcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaXNBdXRoKCkgJiYgUm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIHN1Y2Nlc3MsIGJ1dHRvblRleHQgfSA9IHN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6ICcnLCBzdWNjZXNzOiAnJywgYnV0dG9uVGV4dDogJ0xvZ2luJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGJ1dHRvblRleHQ6ICdMb2dnaW5nIGluJyB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJfS9sb2dpbmAsIHtcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTsgLy8gZGF0YSA+IHRva2VuIC8gdXNlclxyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGUocmVzcG9uc2UsICgpID0+XHJcbiAgICAgICAgICAgICAgICBpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAnYWRtaW4nID8gUm91dGVyLnB1c2goJy9hZG1pbicpIDogUm91dGVyLnB1c2goJy91c2VyJylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGJ1dHRvblRleHQ6ICdMb2dpbicsIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIj57YnV0dG9uVGV4dH08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHtzdWNjZXNzICYmIHNob3dTdWNjZXNzTWVzc2FnZShzdWNjZXNzKX1cclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiBzaG93RXJyb3JNZXNzYWdlKGVycm9yKX1cclxuICAgICAgICAgICAgICAgIHtsb2dpbkZvcm0oKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=