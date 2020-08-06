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
    password: 'rrrrrr',
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

_s(Login, "n/OXTickyvqRjR8aUIXv0SGzP7E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsInN1Y2Nlc3MiLCJidXR0b25UZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImlzQXV0aCIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJBUEkiLCJyZXNwb25zZSIsImF1dGhlbnRpY2F0ZSIsInJvbGUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxvZ2luRm9ybSIsInNob3dTdWNjZXNzTWVzc2FnZSIsInNob3dFcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDO0FBQy9CQyxTQUFLLEVBQUUsbUJBRHdCO0FBRS9CQyxZQUFRLEVBQUUsUUFGcUI7QUFHL0JDLFNBQUssRUFBRSxFQUh3QjtBQUkvQkMsV0FBTyxFQUFFLEVBSnNCO0FBSy9CQyxjQUFVLEVBQUU7QUFMbUIsR0FBRCxDQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQVNoQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGlFQUFNLE1BQU1DLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLENBQVo7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBVGdCLE1BYVJWLEtBYlEsR0Fhd0NLLEtBYnhDLENBYVJMLEtBYlE7QUFBQSxNQWFEQyxRQWJDLEdBYXdDSSxLQWJ4QyxDQWFESixRQWJDO0FB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QTRCQSxTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHS0QsT0FBTyxJQUFJeUIsMEVBQWtCLENBQUN6QixPQUFELENBSGxDLEVBSUtELEtBQUssSUFBSTJCLHdFQUFnQixDQUFDM0IsS0FBRCxDQUo5QixFQUtLeUIsU0FBUyxFQUxkLENBREosQ0FESjtBQVdILENBNUVEOztHQUFNN0IsSzs7S0FBQUEsSztBQThFU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNjhhODUxNjBkNjIwNjdjYTc3NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgc2hvd1N1Y2Nlc3NNZXNzYWdlLCBzaG93RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vaGVscGVycy9hbGVydHMnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGUsIGlzQXV0aCB9IGZyb20gJy4uL2hlbHBlcnMvYXV0aCc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnZXJhbmx0ZEBnbWFpbC5jb20nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAncnJycnJyJyxcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgc3VjY2VzczogJycsXHJcbiAgICAgICAgYnV0dG9uVGV4dDogJ0xvZ2luJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpc0F1dGgoKSAmJiBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgc3VjY2VzcywgYnV0dG9uVGV4dCB9ID0gc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogJycsIHN1Y2Nlc3M6ICcnLCBidXR0b25UZXh0OiAnTG9naW4nIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgYnV0dG9uVGV4dDogJ0xvZ2dpbmcgaW4nIH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUEl9L2xvZ2luYCwge1xyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpOyAvLyBkYXRhID4gdG9rZW4gLyB1c2VyXHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0ZShyZXNwb25zZSwgKCkgPT5cclxuICAgICAgICAgICAgICAgIGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09ICdhZG1pbicgPyBSb3V0ZXIucHVzaCgnL2FkbWluJykgOiBSb3V0ZXIucHVzaCgnL3VzZXInKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgYnV0dG9uVGV4dDogJ0xvZ2luJywgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZ1wiPntidXR0b25UZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge3N1Y2Nlc3MgJiYgc2hvd1N1Y2Nlc3NNZXNzYWdlKHN1Y2Nlc3MpfVxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIHNob3dFcnJvck1lc3NhZ2UoZXJyb3IpfVxyXG4gICAgICAgICAgICAgICAge2xvZ2luRm9ybSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==