(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trust-4cbe3e93-js"], {
    /***/
    "6m2e":
    /*!*************************************************************!*\
      !*** ./node_modules/bnc-onboard/dist/esm/trust-4cbe3e93.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function m2e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./content-eeaca1cc.js */
      "36aJ");

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      var trustIcon = "\n  <svg height=\"40\" \n    viewBox=\"0 0 40 40\" \n    width=\"40\" \n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <path d=\"m1.36250526 6.825c-1.36250526 2.675-1.36250526 6.175-1.36250526 13.175s0 10.5 1.36250526 13.1750526c1.2 2.35 3.11249474 4.2624211 5.46249474 5.4624211 2.675 1.3625263 6.175 1.3625263 13.175 1.3625263s10.5 0 13.1750526-1.3625263c2.35-1.2 4.2624211-3.1124211 5.4624211-5.4624211 1.3625263-2.6750526 1.3625263-6.1750526 1.3625263-13.1750526s0-10.5-1.3625263-13.175c-1.2-2.35-3.1124211-4.26249474-5.4624211-5.46249474-2.6750526-1.36250526-6.1750526-1.36250526-13.1750526-1.36250526s-10.5 0-13.175 1.36250526c-2.35 1.2-4.26249474 3.11249474-5.46249474 5.46249474zm28.61875794 3.9624737c.35 0 .6812631.1437895.9250526.3875789.2436842.25.3812631.5874737.3751557.9311579-.0626294 3.7250527-.2064189 6.5750527-.4751557 8.8312632-.2625263 2.2563158-.6563158 3.9312631-1.25 5.2875789-.4.9062106-.8937895 1.6562106-1.4750526 2.2936842-.7812632.8437895-1.6749474 1.4563158-2.65 2.037579-.4168421.2492631-.8502106.4953684-1.3048421.7535789-.97.5508421-2.0365264 1.1565264-3.2451579 1.9651579-.4374737.2936842-1.0062106.2936842-1.4436843 0-1.2271578-.8181052-2.3077894-1.4312631-3.2866315-1.9865263-.2176842-.1234737-.4303158-.2441052-.6384211-.3634737-1.1436842-.6625263-2.1749474-1.2937894-3.0749474-2.2063158-.6-.6-1.1187368-1.3312631-1.5312631-2.2-.5625158-1.1625263-.94376843-2.5687368-1.22501054-4.3874736-.37501052-2.4312632-.56250526-5.6125264-.63146616-10.0250527-.0060391-.3436842.12521353-.6811579.3689609-.9311579.24374737-.2437894.5812526-.3875789.9312526-.3875789h.5375263c1.6562106.0063158 5.3124211-.1562105 8.4749474-2.61871581.4687369-.36250526 1.1250526-.36250526 1.5937895 0 3.1625263 2.46250531 6.8187368 2.62503161 8.4812631 2.61871581zm-2.9062106 14.6063158c.4062106-.837579.7437895-1.9937895 1-3.6563158.3062106-1.9874737.4937895-4.6874737.5812632-8.3624211-1.95-.0563158-5.3-.4312631-8.4937895-2.5812631-3.1936842 2.1436842-6.5436842 2.5187368-8.4874737 2.5812631.0687369 3.0374737.2062106 5.4.4249474 7.2562106.25 2.1125263.6063158 3.5437894 1.05 4.55.2937895.6687368.6188421 1.15 1.0063158 1.5749473.5187368.5688421 1.1749474 1.037579 2.0687368 1.5750527.3707369.222421.7794737.4537894 1.2244211.7056842.7927368.4486315 1.7003158.9623158 2.7130526 1.6068421.9941053-.634 1.8886316-1.1424211 2.6721053-1.5877895.2362105-.1342105.4622105-.2627368.6778947-.3872632 1.1-.6312631 1.9125263-1.1562105 2.5187369-1.7687368.4063157-.4187368.7375789-.8749474 1.0437894-1.5062105z\" fill=\"#3375bb\" fill-rule=\"evenodd\"/>\n  </svg>\n";

      function trust(options) {
        var preferred = options.preferred,
            label = options.label,
            iconSrc = options.iconSrc,
            svg = options.svg,
            rpcUrl = options.rpcUrl;
        return {
          name: label || 'Trust',
          svg: svg || trustIcon,
          iconSrc: iconSrc,
          wallet: function () {
            var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(helpers) {
              var getProviderName, getAddress, getNetwork, getBalance, trustProvider, isTrust, createProvider, provider, warned;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      getProviderName = helpers.getProviderName, getAddress = helpers.getAddress, getNetwork = helpers.getNetwork, getBalance = helpers.getBalance;
                      trustProvider = window.ethereum || window.web3 && window.web3.currentProvider;
                      isTrust = getProviderName(trustProvider) === 'Trust';

                      if (!(isTrust && rpcUrl)) {
                        _context2.next = 7;
                        break;
                      }

                      _context2.next = 6;
                      return Promise.all(
                      /*! import() | providerEngine-597c2212-js */
                      [__webpack_require__.e("default~authereum~providerEngine-597c2212-js~walletconnect-web3-provider"), __webpack_require__.e("default~providerEngine-597c2212-js~walletconnect-web3-provider"), __webpack_require__.e("common"), __webpack_require__.e("providerEngine-597c2212-js")]).then(__webpack_require__.bind(null,
                      /*! ./providerEngine-597c2212.js */
                      "J3L4"));

                    case 6:
                      createProvider = _context2.sent["default"];

                    case 7:
                      provider = createProvider ? createProvider({
                        rpcUrl: rpcUrl
                      }) : null;
                      warned = false;
                      return _context2.abrupt("return", {
                        provider: trustProvider,
                        "interface": isTrust ? {
                          address: {
                            get: function get() {
                              return getAddress(trustProvider);
                            }
                          },
                          network: {
                            get: function get() {
                              return getNetwork(trustProvider);
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
                                          console.warn('The Trust provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the Trust wallet initialization object to get the balance.');
                                          warned = true;
                                        }

                                        return _context.abrupt("return", null);

                                      case 3:
                                        _context.next = 5;
                                        return getAddress(trustProvider);

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
                          name: getProviderName(trustProvider)
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
          link: "https://link.trustwallet.com/open_url?coin_id=60&url=".concat(window.location.href),
          installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__["m"],
          mobile: true,
          preferred: preferred
        };
      }
      /* harmony default export */


      __webpack_exports__["default"] = trust;
      /***/
    }
  }]);
})();
//# sourceMappingURL=trust-4cbe3e93-js-es5.js.map