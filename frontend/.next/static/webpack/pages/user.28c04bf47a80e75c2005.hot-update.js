webpackHotUpdate_N_E("pages/user",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9hdXRoLmpzIl0sIm5hbWVzIjpbInNldENvb2tpZSIsImtleSIsInZhbHVlIiwiY29va2llIiwic2V0IiwiZXhwaXJlcyIsInJlbW92ZUNvb2tpZSIsInJlbW92ZSIsImdldENvb2tpZSIsInJlcSIsImdldENvb2tpZUZyb21Ccm93c2VyIiwiZ2V0Q29va2llRnJvbVNlcnZlciIsImdldCIsImhlYWRlcnMiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJzcGxpdCIsImZpbmQiLCJjIiwidHJpbSIsInN0YXJ0c1dpdGgiLCJ0b2tlblZhbHVlIiwic2V0TG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1vdmVMb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiYXV0aGVudGljYXRlIiwicmVzcG9uc2UiLCJuZXh0IiwiZGF0YSIsInVzZXIiLCJpc0F1dGgiLCJjb29raWVDaGVja2VkIiwiZ2V0SXRlbSIsInBhcnNlIiwibG9nb3V0IiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3JDLFlBQXFCO0FBQ2pCQyxvREFBTSxDQUFDQyxHQUFQLENBQVdILEdBQVgsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ25CRyxhQUFPLEVBQUU7QUFEVSxLQUF2QjtBQUdIO0FBQ0osQ0FOTSxDLENBUVA7O0FBQ08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUwsR0FBRyxFQUFJO0FBQy9CLFlBQXFCO0FBQ2pCRSxvREFBTSxDQUFDSSxNQUFQLENBQWNOLEdB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QVo7QUFDSCxDQUpNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIuMjhjMDRiZjQ3YTgwZTc1YzIwMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vLyBzZXQgaW4gY29va2llXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwge1xyXG4gICAgICAgICAgICBleHBpcmVzOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyByZW1vdmUgZnJvbSBjb29raWVcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IGtleSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgY29va2llLnJlbW92ZShrZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gZ2V0IGZyb20gY29va2llIHN1Y2ggYXMgc3RvcmVkIHRva2VuXHJcbi8vIHdpbGwgYmUgdXNlZnVsIHdoZW4gd2UgbmVlZCB0byBtYWtlIHJlcXVlc3QgdG8gc2VydmVyIHdpdGggYXV0aCB0b2tlblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKGtleSwgcmVxKSA9PiB7XHJcbiAgICAvLyBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGNvb2tpZS5nZXQoa2V5KTtcclxuICAgIC8vIH1cclxuICAgIHJldHVybiBwcm9jZXNzLmJyb3dzZXIgPyBnZXRDb29raWVGcm9tQnJvd3NlcihrZXkpIDogZ2V0Q29va2llRnJvbVNlcnZlcihrZXksIHJlcSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llRnJvbUJyb3dzZXIgPSBrZXkgPT4ge1xyXG4gICAgcmV0dXJuIGNvb2tpZS5nZXQoa2V5KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWVGcm9tU2VydmVyID0gKGtleSwgcmVxKSA9PiB7XHJcbiAgICBpZiAoIXJlcS5oZWFkZXJzLmNvb2tpZSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygncmVxLmhlYWRlcnMuY29va2llJywgcmVxLmhlYWRlcnMuY29va2llKTtcclxuICAgIGxldCB0b2tlbiA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdCgnOycpLmZpbmQoYyA9PiBjLnRyaW0oKS5zdGFydHNXaXRoKGAke2tleX09YCkpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBsZXQgdG9rZW5WYWx1ZSA9IHRva2VuLnNwbGl0KCc9JylbMV07XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0Q29va2llRnJvbVNlcnZlcicsIHRva2VuVmFsdWUpO1xyXG4gICAgcmV0dXJuIHRva2VuVmFsdWU7XHJcbn07XHJcblxyXG4vLyBzZXQgaW4gbG9jYWxzdG9hcmdlXHJcbmV4cG9ydCBjb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIHJlbW92ZSBmcm9tIGxvY2Fsc3RvcmFnZVxyXG5leHBvcnQgY29uc3QgcmVtb3ZlTG9jYWxTdG9yYWdlID0ga2V5ID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gYXV0aGVudGljYXRlIHVzZXIgYnkgcGFzc2luZyBkYXRhIHRvIGNvb2tpZSBhbmQgbG9jYWxzdG9yYWdlIGR1cmluZyBzaWduaW5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChyZXNwb25zZSwgbmV4dCkgPT4ge1xyXG4gICAgc2V0Q29va2llKCd0b2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG4gICAgc2V0TG9jYWxTdG9yYWdlKCd1c2VyJywgcmVzcG9uc2UuZGF0YS51c2VyKTtcclxuICAgIG5leHQoKTtcclxufTtcclxuXHJcbi8vIGFjY2VzcyB1c2VyIGluZm8gZnJvbSBsb2NhbHN0b3JhZ2VcclxuZXhwb3J0IGNvbnN0IGlzQXV0aCA9ICgpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBjb25zdCBjb29raWVDaGVja2VkID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG4gICAgICAgIGlmIChjb29raWVDaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVDb29raWUoJ3Rva2VuJyk7XHJcbiAgICByZW1vdmVMb2NhbFN0b3JhZ2UoJ3VzZXInKTtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==