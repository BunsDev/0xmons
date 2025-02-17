(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["huobiwallet-6c8af352-js"],{

/***/ "4WGN":
/*!*******************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/huobiwallet-6c8af352.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-eeaca1cc.js */ "36aJ");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var huobiwalletIcon = "\n    <svg id=\"\u56FE\u5C42_1\" data-name=\"\u56FE\u5C42 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 1024 1024\">\n        <defs>\n            <style>.cls-1{fill:#2d65f8;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#173fff;}.cls-3{fill:#fcfcff;}.cls-4{fill:#fff;}</style>\n        </defs>\n        <title>huobi wallet icon</title>\n        <path class=\"cls-1\" d=\"M292.28,0H552Q742.79,27,858.24,122.88T1024,392V731.72c0,101.63-10.58,138.48-30.45,175.64a207.13,207.13,0,0,1-86.19,86.19c-37.16,19.87-74,30.45-175.64,30.45H292.28c-101.63,0-138.48-10.58-175.64-30.45a207.13,207.13,0,0,1-86.19-86.19C10.58,870.2,0,833.35,0,731.72V292.28C0,190.65,10.58,153.8,30.45,116.64a207.13,207.13,0,0,1,86.19-86.19C153.8,10.58,190.65,0,292.28,0Z\"/>\n        <path class=\"cls-2\" d=\"M993.55,116.64a207.13,207.13,0,0,0-86.19-86.19C870.21,10.58,833.35,0,731.72,0H552Q742.79,27,858.24,122.88T1024,392V292.28C1024,190.65,1013.42,153.8,993.55,116.64Z\"/>\n        <path class=\"cls-3\" d=\"M591.8,382.71c0-97.43-48-181.13-84.48-208.41,0,0-2.78-1.53-2.59,2.3-3,188-100.19,239-153.65,307.63-123.27,158.45-8.6,332.23,108.14,364.18,65.35,18-15.06-31.95-25.4-136.86C421.21,584.73,591.8,487.81,591.8,382.71Z\"/>\n        <path class=\"cls-4\" d=\"M643.64,445.69c-.78-.51-1.81-.9-2.53.32-2.07,23.74-26.56,74.42-57.67,121C478.07,725,538.08,801.1,571.91,842.18c19.44,23.74,0,0,49-24.25,60.52-36.26,99.8-98.95,105.62-168.62A242.5,242.5,0,0,0,643.64,445.69Z\"/>\n    </svg>";

function huobiwallet(options) {
  var preferred = options.preferred,
      label = options.label,
      svg = options.svg,
      rpcUrl = options.rpcUrl;
  return {
    name: label || 'Huobi Wallet',
    svg: svg || huobiwalletIcon,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(helpers) {
        var getProviderName, getAddress, getNetwork, getBalance, huobiwalletProvider, isHuobiWallet, createProvider, provider, warned;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                getProviderName = helpers.getProviderName, getAddress = helpers.getAddress, getNetwork = helpers.getNetwork, getBalance = helpers.getBalance;
                huobiwalletProvider = window.ethereum || window.web3 && window.web3.currentProvider;
                isHuobiWallet = getProviderName(huobiwalletProvider) === 'huobiwallet';

                if (!(isHuobiWallet && rpcUrl)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return Promise.all(/*! import() | providerEngine-597c2212-js */[__webpack_require__.e("default~authereum~providerEngine-597c2212-js~walletconnect-web3-provider"), __webpack_require__.e("default~providerEngine-597c2212-js~walletconnect-web3-provider"), __webpack_require__.e("common"), __webpack_require__.e("providerEngine-597c2212-js")]).then(__webpack_require__.bind(null, /*! ./providerEngine-597c2212.js */ "J3L4"));

              case 6:
                createProvider = _context2.sent["default"];

              case 7:
                provider = createProvider ? createProvider({
                  rpcUrl: rpcUrl
                }) : null;
                warned = false;
                return _context2.abrupt("return", {
                  provider: huobiwalletProvider,
                  "interface": isHuobiWallet ? {
                    address: {
                      get: function get() {
                        return getAddress(huobiwalletProvider);
                      }
                    },
                    network: {
                      get: function get() {
                        return getNetwork(huobiwalletProvider);
                      }
                    },
                    balance: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (provider) {
                                    _context.next = 3;
                                    break;
                                  }

                                  if (!warned) {
                                    console.warn('The Huobi Wallet provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the Huobi Wallet initialization object to get the balance.');
                                    warned = true;
                                  }

                                  return _context.abrupt("return", null);

                                case 3:
                                  _context.next = 5;
                                  return getAddress(huobiwalletProvider);

                                case 5:
                                  address = _context.sent;
                                  return _context.abrupt("return", getBalance(provider, address));

                                case 7:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        function get() {
                          return _get.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    name: getProviderName(huobiwalletProvider)
                  } : null
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'injected',
    link: 'https://www.huobiwallet.com',
    installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__["m"],
    mobile: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (huobiwallet);

/***/ })

}]);
//# sourceMappingURL=huobiwallet-6c8af352-js-es2015.js.map