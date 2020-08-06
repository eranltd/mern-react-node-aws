webpackHotUpdate_N_E("pages/admin",{

/***/ "./helpers/auth.js":
/*!*************************!*\
  !*** ./helpers/auth.js ***!
  \*************************/
/*! exports provided: setCookie, removeCookie, getCookie, getCookieFromBrowser, getCookieFromServer, setLocalStorage, removeLocalStorage, authenticate, isAuth, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookieFromBrowser", function() { return getCookieFromBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookieFromServer", function() { return getCookieFromServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalStorage", function() { return removeLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuth", function() { return isAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

 // set in cookie

var setCookie = function setCookie(key, value) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(key, value, {
      expires: 1
    });
  }
}; // remove from cookie

var removeCookie = function removeCookie(key) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(key);
  }
}; // get from cookie such as stored token
// will be useful when we need to make request to server with auth token

var getCookie = function getCookie(key, req) {
  // if (process.browser) {
  //     return cookie.get(key);
  // }
  return true ? getCookieFromBrowser(key) : undefined;
};
var getCookieFromBrowser = function getCookieFromBrowser(key) {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};
var getCookieFromServer = function getCookieFromServer(key, req) {
  if (!req.headers.cookie) {
    return undefined;
  }

  console.log('req.headers.cookie', req.headers.cookie);
  var token = req.headers.cookie.split(';').find(function (c) {
    return c.trim().startsWith("".concat(key, "="));
  });

  if (!token) {
    return undefined;
  }

  var tokenValue = token.split('=')[1];
  console.log('getCookieFromServer', tokenValue);
  return tokenValue;
}; // set in localstoarge

var setLocalStorage = function setLocalStorage(key, value) {
  if (true) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}; // remove from localstorage

var removeLocalStorage = function removeLocalStorage(key) {
  if (true) {
    localStorage.removeItem(key);
  }
}; // authenticate user by passing data to cookie and localstorage during signin

var authenticate = function authenticate(response, next) {
  setCookie('token', response.data.token);
  setLocalStorage('user', response.data.user);
  next();
}; // access user info from localstorage

var isAuth = function isAuth() {
  if (true) {
    var cookieChecked = getCookie('token');

    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      } else {
        return false;
      }
    }
  }
};
var logout = function logout() {
  removeCookie('token');
  removeLocalStorage('user');
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9hdXRoLmpzIl0sIm5hbWVzIjpbInNldENvb2tpZSIsImtleSIsInZhbHVlIiwiY29va2llIiwic2V0IiwiZXhwaXJlcyIsInJlbW92ZUNvb2tpZSIsInJlbW92ZSIsImdldENvb2tpZSIsInJlcSIsImdldENvb2tpZUZyb21Ccm93c2VyIiwiZ2V0Q29va2llRnJvbVNlcnZlciIsImdldCIsImhlYWRlcnMiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJzcGxpdCIsImZpbmQiLCJjIiwidHJpbSIsInN0YXJ0c1dpdGgiLCJ0b2tlblZhbHVlIiwic2V0TG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1vdmVMb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiYXV0aGVudGljYXRlIiwicmVzcG9uc2UiLCJuZXh0IiwiZGF0YSIsInVzZXIiLCJpc0F1dGgiLCJjb29raWVDaGVja2VkIiwiZ2V0SXRlbSIsInBhcnNlIiwibG9nb3V0IiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3JDLFlBQXFCO0FBQ2pCQyxvREFBTSxDQUFDQyxHQUFQLENBQVdILEdBQVgsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ25CRyxhQUFPLEVBQUU7QUFEVSxLQUF2QjtBQUdIO0FBQ0osQ0FOTSxDLENBUVA7O0FBQ08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUwsR0FBRyxFQUFJO0FBQy9CLFlBQXFCO0FBQ2pCRSxvREFBTSxDQUFDSSxNQUFQLENBQWNOLEdB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QVo7QUFDSCxDQUpNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLjI4YzA0YmY0N2E4MGU3NWMyMDA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuLy8gc2V0IGluIGNvb2tpZVxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBjb29raWUuc2V0KGtleSwgdmFsdWUsIHtcclxuICAgICAgICAgICAgZXhwaXJlczogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gcmVtb3ZlIGZyb20gY29va2llXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSBrZXkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoa2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIGdldCBmcm9tIGNvb2tpZSBzdWNoIGFzIHN0b3JlZCB0b2tlblxyXG4vLyB3aWxsIGJlIHVzZWZ1bCB3aGVuIHdlIG5lZWQgdG8gbWFrZSByZXF1ZXN0IHRvIHNlcnZlciB3aXRoIGF1dGggdG9rZW5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXksIHJlcSkgPT4ge1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgLy8gICAgIHJldHVybiBjb29raWUuZ2V0KGtleSk7XHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5icm93c2VyID8gZ2V0Q29va2llRnJvbUJyb3dzZXIoa2V5KSA6IGdldENvb2tpZUZyb21TZXJ2ZXIoa2V5LCByZXEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZUZyb21Ccm93c2VyID0ga2V5ID0+IHtcclxuICAgIHJldHVybiBjb29raWUuZ2V0KGtleSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llRnJvbVNlcnZlciA9IChrZXksIHJlcSkgPT4ge1xyXG4gICAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ3JlcS5oZWFkZXJzLmNvb2tpZScsIHJlcS5oZWFkZXJzLmNvb2tpZSk7XHJcbiAgICBsZXQgdG9rZW4gPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsnKS5maW5kKGMgPT4gYy50cmltKCkuc3RhcnRzV2l0aChgJHtrZXl9PWApKTtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgbGV0IHRva2VuVmFsdWUgPSB0b2tlbi5zcGxpdCgnPScpWzFdO1xyXG4gICAgY29uc29sZS5sb2coJ2dldENvb2tpZUZyb21TZXJ2ZXInLCB0b2tlblZhbHVlKTtcclxuICAgIHJldHVybiB0b2tlblZhbHVlO1xyXG59O1xyXG5cclxuLy8gc2V0IGluIGxvY2Fsc3RvYXJnZVxyXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxTdG9yYWdlID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyByZW1vdmUgZnJvbSBsb2NhbHN0b3JhZ2VcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUxvY2FsU3RvcmFnZSA9IGtleSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIGF1dGhlbnRpY2F0ZSB1c2VyIGJ5IHBhc3NpbmcgZGF0YSB0byBjb29raWUgYW5kIGxvY2Fsc3RvcmFnZSBkdXJpbmcgc2lnbmluXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSAocmVzcG9uc2UsIG5leHQpID0+IHtcclxuICAgIHNldENvb2tpZSgndG9rZW4nLCByZXNwb25zZS5kYXRhLnRva2VuKTtcclxuICAgIHNldExvY2FsU3RvcmFnZSgndXNlcicsIHJlc3BvbnNlLmRhdGEudXNlcik7XHJcbiAgICBuZXh0KCk7XHJcbn07XHJcblxyXG4vLyBhY2Nlc3MgdXNlciBpbmZvIGZyb20gbG9jYWxzdG9yYWdlXHJcbmV4cG9ydCBjb25zdCBpc0F1dGggPSAoKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llQ2hlY2tlZCA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuICAgICAgICBpZiAoY29va2llQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlQ29va2llKCd0b2tlbicpO1xyXG4gICAgcmVtb3ZlTG9jYWxTdG9yYWdlKCd1c2VyJyk7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=