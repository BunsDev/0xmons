(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fortmatic-4c6d4c48-js"], {
    /***/
    "j0q9":
    /*!*****************************************************************!*\
      !*** ./node_modules/bnc-onboard/dist/esm/fortmatic-4c6d4c48.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function j0q9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! regenerator-runtime/runtime */
      "ls82");
      /* harmony import */


      var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _onboard_c11b1ecb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./onboard-c11b1ecb.js */
      "CA1r");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! bnc-sdk */
      "/TMw");
      /* harmony import */


      var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! bowser */
      "M39V");
      /* harmony import */


      var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);

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

      var fortmaticIcon = "\n  <svg \n    height=\"40\" \n    viewBox=\"0 0 40 40\" \n    width=\"40\" \n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <path d=\"m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z\" \n      fill=\"#617bff\" \n      fill-rule=\"evenodd\" \n      transform=\"translate(-2725 -1155)\"/>\n  </svg>\n";

      function fortmatic(options) {
        var apiKey = options.apiKey,
            networkId = options.networkId,
            preferred = options.preferred,
            label = options.label,
            iconSrc = options.iconSrc,
            svg = options.svg;
        return {
          name: label || 'Fortmatic',
          svg: svg || fortmaticIcon,
          iconSrc: iconSrc,
          wallet: function () {
            var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(helpers) {
              var _yield$import, Fortmatic, instance, provider, BigNumber, getAddress, enabled;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return __webpack_require__.e(
                      /*! import() | fortmatic */
                      "fortmatic").then(__webpack_require__.t.bind(null,
                      /*! fortmatic */
                      "n8m1", 7));

                    case 2:
                      _yield$import = _context2.sent;
                      Fortmatic = _yield$import["default"];
                      instance = new Fortmatic(apiKey, networkId === 1 ? undefined : Object(_onboard_c11b1ecb_js__WEBPACK_IMPORTED_MODULE_1__["n"])(networkId));
                      provider = instance.getProvider();
                      BigNumber = helpers.BigNumber, getAddress = helpers.getAddress;
                      return _context2.abrupt("return", {
                        provider: provider,
                        instance: instance,
                        "interface": {
                          name: 'Fortmatic',
                          connect: function connect() {
                            return instance.user.login().then(function (res) {
                              enabled = true;
                              return res;
                            });
                          },
                          disconnect: function disconnect() {
                            return instance.user.logout();
                          },
                          address: {
                            get: function get() {
                              return enabled ? getAddress(provider) : Promise.resolve();
                            }
                          },
                          network: {
                            get: function get() {
                              return Promise.resolve(networkId);
                            }
                          },
                          balance: {
                            get: function () {
                              var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        return _context.abrupt("return", enabled && instance.user.getBalances().then(function (res) {
                                          return res[0] ? BigNumber(res[0].crypto_amount).times(BigNumber('1000000000000000000')).toString(10) : null;
                                        }));

                                      case 1:
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
                          dashboard: function dashboard() {
                            return instance.user.settings();
                          }
                        }
                      });

                    case 8:
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
          type: 'sdk',
          desktop: true,
          mobile: true,
          preferred: preferred
        };
      }
      /* harmony default export */


      __webpack_exports__["default"] = fortmatic;
      /***/
    }
  }]);
})();
//# sourceMappingURL=fortmatic-4c6d4c48-js-es5.js.map