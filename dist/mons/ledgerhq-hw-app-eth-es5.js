(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ledgerhq-hw-app-eth"], {
    /***/
    "HRdN":
    /*!*********************************************************!*\
      !*** ./node_modules/@ledgerhq/hw-app-eth/lib-es/Eth.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function HRdN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "default", function () {
          return Eth;
        });
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./utils */
        "pn0g");
        /* harmony import */


        var _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @ledgerhq/errors */
        "qPxQ");
        /* harmony import */


        var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! bignumber.js */
        "kB5k");
        /* harmony import */


        var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var rlp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! rlp */
        "o8pB");
        /* harmony import */


        var rlp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rlp__WEBPACK_IMPORTED_MODULE_3__);
        /********************************************************************************
         *   Ledger Node JS API
         *   (c) 2016-2017 Ledger
         *
         *  Licensed under the Apache License, Version 2.0 (the "License");
         *  you may not use this file except in compliance with the License.
         *  You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         *  Unless required by applicable law or agreed to in writing, software
         *  distributed under the License is distributed on an "AS IS" BASIS,
         *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         *  See the License for the specific language governing permissions and
         *  limitations under the License.
         ********************************************************************************/
        // FIXME drop:


        function hexBuffer(str) {
          return Buffer.from(str.startsWith("0x") ? str.slice(2) : str, "hex");
        }

        function maybeHexBuffer(str) {
          if (!str) return null;
          return hexBuffer(str);
        }

        var remapTransactionRelatedErrors = function remapTransactionRelatedErrors(e) {
          if (e && e.statusCode === 0x6a80) {
            return new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["EthAppPleaseEnableContractData"]("Please enable Contract data on the Ethereum app Settings");
          }

          return e;
        };
        /**
         * Ethereum API
         *
         * @example
         * import Eth from "@ledgerhq/hw-app-eth";
         * const eth = new Eth(transport)
         */


        var Eth = /*#__PURE__*/function () {
          function Eth(transport) {
            var scrambleKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "w0w";

            _classCallCheck(this, Eth);

            this.transport = void 0;
            this.transport = transport;
            transport.decorateAppAPIMethods(this, ["getAddress", "provideERC20TokenInformation", "signTransaction", "signPersonalMessage", "getAppConfiguration", "starkGetPublicKey", "starkSignOrder", "starkSignTransfer", "starkProvideQuantum"], scrambleKey);
          }
          /**
           * get Ethereum address for a given BIP 32 path.
           * @param path a path in BIP 32 format
           * @option boolDisplay optionally enable or not the display
           * @option boolChaincode optionally enable or not the chaincode request
           * @return an object with a publicKey, address and (optionally) chainCode
           * @example
           * eth.getAddress("44'/60'/0'/0/0").then(o => o.address)
           */


          _createClass(Eth, [{
            key: "getAddress",
            value: function getAddress(path, boolDisplay, boolChaincode) {
              var paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
              var buffer = Buffer.alloc(1 + paths.length * 4);
              buffer[0] = paths.length;
              paths.forEach(function (element, index) {
                buffer.writeUInt32BE(element, 1 + 4 * index);
              });
              return this.transport.send(0xe0, 0x02, boolDisplay ? 0x01 : 0x00, boolChaincode ? 0x01 : 0x00, buffer).then(function (response) {
                var result = {};
                var publicKeyLength = response[0];
                var addressLength = response[1 + publicKeyLength];
                result.publicKey = response.slice(1, 1 + publicKeyLength).toString("hex");
                result.address = "0x" + response.slice(1 + publicKeyLength + 1, 1 + publicKeyLength + 1 + addressLength).toString("ascii");

                if (boolChaincode) {
                  result.chainCode = response.slice(1 + publicKeyLength + 1 + addressLength, 1 + publicKeyLength + 1 + addressLength + 32).toString("hex");
                }

                return result;
              });
            }
            /**
             * This commands provides a trusted description of an ERC 20 token
             * to associate a contract address with a ticker and number of decimals.
             *
             * It shall be run immediately before performing a transaction involving a contract
             * calling this contract address to display the proper token information to the user if necessary.
             *
             * @param {*} info: a blob from "erc20.js" utilities that contains all token information.
             *
             * @example
             * import { byContractAddress } from "@ledgerhq/hw-app-eth/erc20"
             * const zrxInfo = byContractAddress("0xe41d2489571d322189246dafa5ebde1f4699f498")
             * if (zrxInfo) await appEth.provideERC20TokenInformation(zrxInfo)
             * const signed = await appEth.signTransaction(path, rawTxHex)
             */

          }, {
            key: "provideERC20TokenInformation",
            value: function provideERC20TokenInformation(_ref) {
              var data = _ref.data;
              return this.transport.send(0xe0, 0x0a, 0x00, 0x00, data).then(function () {
                return true;
              }, function (e) {
                if (e && e.statusCode === 0x6d00) {
                  // this case happen for older version of ETH app, since older app version had the ERC20 data hardcoded, it's fine to assume it worked.
                  // we return a flag to know if the call was effective or not
                  return false;
                }

                throw e;
              });
            }
            /**
             * You can sign a transaction and retrieve v, r, s given the raw transaction and the BIP 32 path of the account to sign
             * @example
             eth.signTransaction("44'/60'/0'/0/0", "e8018504e3b292008252089428ee52a8f3d6e5d15f8b131996950d7f296c7952872bd72a2487400080").then(result => ...)
             */

          }, {
            key: "signTransaction",
            value: function signTransaction(path, rawTxHex) {
              var _this = this;

              var paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
              var offset = 0;
              var rawTx = Buffer.from(rawTxHex, "hex");
              var toSend = [];
              var response; // Check if the TX is encoded following EIP 155

              var rlpTx = Object(rlp__WEBPACK_IMPORTED_MODULE_3__["decode"])(rawTx);
              var rlpOffset = 0;

              if (rlpTx.length > 6) {
                var rlpVrs = Object(rlp__WEBPACK_IMPORTED_MODULE_3__["encode"])(rlpTx.slice(-3));
                rlpOffset = rawTx.length - (rlpVrs.length - 1);
              }

              var _loop = function _loop() {
                var maxChunkSize = offset === 0 ? 150 - 1 - paths.length * 4 : 150;
                var chunkSize = offset + maxChunkSize > rawTx.length ? rawTx.length - offset : maxChunkSize;

                if (rlpOffset != 0 && offset + chunkSize == rlpOffset) {
                  // Make sure that the chunk doesn't end right on the EIP 155 marker if set
                  chunkSize--;
                }

                var buffer = Buffer.alloc(offset === 0 ? 1 + paths.length * 4 + chunkSize : chunkSize);

                if (offset === 0) {
                  buffer[0] = paths.length;
                  paths.forEach(function (element, index) {
                    buffer.writeUInt32BE(element, 1 + 4 * index);
                  });
                  rawTx.copy(buffer, 1 + 4 * paths.length, offset, offset + chunkSize);
                } else {
                  rawTx.copy(buffer, 0, offset, offset + chunkSize);
                }

                toSend.push(buffer);
                offset += chunkSize;
              };

              while (offset !== rawTx.length) {
                _loop();
              }

              return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["foreach"])(toSend, function (data, i) {
                return _this.transport.send(0xe0, 0x04, i === 0 ? 0x00 : 0x80, 0x00, data).then(function (apduResponse) {
                  response = apduResponse;
                });
              }).then(function () {
                var v = response.slice(0, 1).toString("hex");
                var r = response.slice(1, 1 + 32).toString("hex");
                var s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
                return {
                  v: v,
                  r: r,
                  s: s
                };
              }, function (e) {
                throw remapTransactionRelatedErrors(e);
              });
            }
            /**
             */

          }, {
            key: "getAppConfiguration",
            value: function getAppConfiguration() {
              return this.transport.send(0xe0, 0x06, 0x00, 0x00).then(function (response) {
                var result = {};
                result.arbitraryDataEnabled = response[0] & 0x01;
                result.erc20ProvisioningNecessary = response[0] & 0x02;
                result.starkEnabled = response[0] & 0x04;
                result.version = "" + response[1] + "." + response[2] + "." + response[3];
                return result;
              });
            }
            /**
            * You can sign a message according to eth_sign RPC call and retrieve v, r, s given the message and the BIP 32 path of the account to sign.
            * @example
            eth.signPersonalMessage("44'/60'/0'/0/0", Buffer.from("test").toString("hex")).then(result => {
            var v = result['v'] - 27;
            v = v.toString(16);
            if (v.length < 2) {
              v = "0" + v;
            }
            console.log("Signature 0x" + result['r'] + result['s'] + v);
            })
             */

          }, {
            key: "signPersonalMessage",
            value: function signPersonalMessage(path, messageHex) {
              var _this2 = this;

              var paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
              var offset = 0;
              var message = Buffer.from(messageHex, "hex");
              var toSend = [];
              var response;

              var _loop2 = function _loop2() {
                var maxChunkSize = offset === 0 ? 150 - 1 - paths.length * 4 - 4 : 150;
                var chunkSize = offset + maxChunkSize > message.length ? message.length - offset : maxChunkSize;
                var buffer = Buffer.alloc(offset === 0 ? 1 + paths.length * 4 + 4 + chunkSize : chunkSize);

                if (offset === 0) {
                  buffer[0] = paths.length;
                  paths.forEach(function (element, index) {
                    buffer.writeUInt32BE(element, 1 + 4 * index);
                  });
                  buffer.writeUInt32BE(message.length, 1 + 4 * paths.length);
                  message.copy(buffer, 1 + 4 * paths.length + 4, offset, offset + chunkSize);
                } else {
                  message.copy(buffer, 0, offset, offset + chunkSize);
                }

                toSend.push(buffer);
                offset += chunkSize;
              };

              while (offset !== message.length) {
                _loop2();
              }

              return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["foreach"])(toSend, function (data, i) {
                return _this2.transport.send(0xe0, 0x08, i === 0 ? 0x00 : 0x80, 0x00, data).then(function (apduResponse) {
                  response = apduResponse;
                });
              }).then(function () {
                var v = response[0];
                var r = response.slice(1, 1 + 32).toString("hex");
                var s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
                return {
                  v: v,
                  r: r,
                  s: s
                };
              });
            }
            /**
            * Sign a prepared message following web3.eth.signTypedData specification. The host computes the domain separator and hashStruct(message)
            * @example
            eth.signEIP712HashedMessage("44'/60'/0'/0/0", Buffer.from("0101010101010101010101010101010101010101010101010101010101010101").toString("hex"), Buffer.from("0202020202020202020202020202020202020202020202020202020202020202").toString("hex")).then(result => {
            var v = result['v'] - 27;
            v = v.toString(16);
            if (v.length < 2) {
              v = "0" + v;
            }
            console.log("Signature 0x" + result['r'] + result['s'] + v);
            })
             */

          }, {
            key: "signEIP712HashedMessage",
            value: function signEIP712HashedMessage(path, domainSeparatorHex, hashStructMessageHex) {
              var domainSeparator = hexBuffer(domainSeparatorHex);
              var hashStruct = hexBuffer(hashStructMessageHex);
              var paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
              var buffer = Buffer.alloc(1 + paths.length * 4 + 32 + 32, 0);
              var offset = 0;
              buffer[0] = paths.length;
              paths.forEach(function (element, index) {
                buffer.writeUInt32BE(element, 1 + 4 * index);
              });
              offset = 1 + 4 * paths.length;
              domainSeparator.copy(buffer, offset);
              offset += 32;
              hashStruct.copy(buffer, offset);
              return this.transport.send(0xe0, 0x0c, 0x00, 0x00, buffer).then(function (response) {
                var v = response[0];
                var r = response.slice(1, 1 + 32).toString("hex");
                var s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
                return {
                  v: v,
                  r: r,
                  s: s
                };
              });
            }
            /**
             * get Stark public key for a given BIP 32 path.
             * @param path a path in BIP 32 format
             * @option boolDisplay optionally enable or not the display
             * @return the Stark public key
             */

          }, {
            key: "starkGetPublicKey",
            value: function starkGetPublicKey(path, boolDisplay) {
              var paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
              var buffer = Buffer.alloc(1 + paths.length * 4);
              buffer[0] = paths.length;
              paths.forEach(function (element, index) {
                buffer.writeUInt32BE(element, 1 + 4 * index);
              });
              return this.transport.send(0xf0, 0x02, boolDisplay ? 0x01 : 0x00, 0x00, buffer).then(function (response) {
                return response.slice(0, response.length - 2);
              });
            }
            /**
             * sign a Stark order
             * @param path a path in BIP 32 format
             * @option sourceTokenAddress contract address of the source token (not present for ETH)
             * @param sourceQuantization quantization used for the source token
             * @option destinationTokenAddress contract address of the destination token (not present for ETH)
             * @param destinationQuantization quantization used for the destination token
             * @param sourceVault ID of the source vault
             * @param destinationVault ID of the destination vault
             * @param amountSell amount to sell
             * @param amountBuy amount to buy
             * @param nonce transaction nonce
             * @param timestamp transaction validity timestamp
             * @return the signature
             */

          }, {
            key: "starkSignOrder",
            value: function starkSignOrder(path, sourceTokenAddress, sourceQuantization, destinationTokenAddress, destinationQuantization, sourceVault, destinationVault, amountSell, amountBuy, nonce, timestamp) {
              var sourceTokenAddressHex = maybeHexBuffer(sourceTokenAddress);
              var destinationTokenAddressHex = maybeHexBuffer(destinationTokenAddress);
              var paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
              var buffer = Buffer.alloc(1 + paths.length * 4 + 20 + 32 + 20 + 32 + 4 + 4 + 8 + 8 + 4 + 4, 0);
              var offset = 0;
              buffer[0] = paths.length;
              paths.forEach(function (element, index) {
                buffer.writeUInt32BE(element, 1 + 4 * index);
              });
              offset = 1 + 4 * paths.length;

              if (sourceTokenAddressHex) {
                sourceTokenAddressHex.copy(buffer, offset);
              }

              offset += 20;
              Buffer.from(sourceQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
              offset += 32;

              if (destinationTokenAddressHex) {
                destinationTokenAddressHex.copy(buffer, offset);
              }

              offset += 20;
              Buffer.from(destinationQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
              offset += 32;
              buffer.writeUInt32BE(sourceVault, offset);
              offset += 4;
              buffer.writeUInt32BE(destinationVault, offset);
              offset += 4;
              Buffer.from(amountSell.toString(16).padStart(16, "0"), "hex").copy(buffer, offset);
              offset += 8;
              Buffer.from(amountBuy.toString(16).padStart(16, "0"), "hex").copy(buffer, offset);
              offset += 8;
              buffer.writeUInt32BE(nonce, offset);
              offset += 4;
              buffer.writeUInt32BE(timestamp, offset);
              return this.transport.send(0xf0, 0x04, 0x01, 0x00, buffer).then(function (response) {
                var r = response.slice(1, 1 + 32).toString("hex");
                var s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
                return {
                  r: r,
                  s: s
                };
              });
            }
            /**
             * sign a Stark transfer
             * @param path a path in BIP 32 format
             * @option transferTokenAddress contract address of the token to be transferred (not present for ETH)
             * @param transferQuantization quantization used for the token to be transferred
             * @param targetPublicKey target Stark public key
             * @param sourceVault ID of the source vault
             * @param destinationVault ID of the destination vault
             * @param amountTransfer amount to transfer
             * @param nonce transaction nonce
             * @param timestamp transaction validity timestamp
             * @return the signature
             */

          }, {
            key: "starkSignTransfer",
            value: function starkSignTransfer(path, transferTokenAddress, transferQuantization, targetPublicKey, sourceVault, destinationVault, amountTransfer, nonce, timestamp) {
              var transferTokenAddressHex = maybeHexBuffer(transferTokenAddress);
              var targetPublicKeyHex = hexBuffer(targetPublicKey);
              var paths = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitPath"])(path);
              var buffer = Buffer.alloc(1 + paths.length * 4 + 20 + 32 + 32 + 4 + 4 + 8 + 4 + 4, 0);
              var offset = 0;
              buffer[0] = paths.length;
              paths.forEach(function (element, index) {
                buffer.writeUInt32BE(element, 1 + 4 * index);
              });
              offset = 1 + 4 * paths.length;

              if (transferTokenAddressHex) {
                transferTokenAddressHex.copy(buffer, offset);
              }

              offset += 20;
              Buffer.from(transferQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, offset);
              offset += 32;
              targetPublicKeyHex.copy(buffer, offset);
              offset += 32;
              buffer.writeUInt32BE(sourceVault, offset);
              offset += 4;
              buffer.writeUInt32BE(destinationVault, offset);
              offset += 4;
              Buffer.from(amountTransfer.toString(16).padStart(16, "0"), "hex").copy(buffer, offset);
              offset += 8;
              buffer.writeUInt32BE(nonce, offset);
              offset += 4;
              buffer.writeUInt32BE(timestamp, offset);
              return this.transport.send(0xf0, 0x04, 0x02, 0x00, buffer).then(function (response) {
                var r = response.slice(1, 1 + 32).toString("hex");
                var s = response.slice(1 + 32, 1 + 32 + 32).toString("hex");
                return {
                  r: r,
                  s: s
                };
              });
            }
            /**
             * provide quantization information before singing a deposit or withdrawal Stark powered contract call
             *
             * It shall be run following a provideERC20TokenInformation call for the given contract
             *
             * @param operationContract contract address of the token to be transferred (not present for ETH)
             * @param operationQuantization quantization used for the token to be transferred
             */

          }, {
            key: "starkProvideQuantum",
            value: function starkProvideQuantum(operationContract, operationQuantization) {
              var operationContractHex = maybeHexBuffer(operationContract);
              var buffer = Buffer.alloc(20 + 32, 0);

              if (operationContractHex) {
                operationContractHex.copy(buffer, 0);
              }

              Buffer.from(operationQuantization.toString(16).padStart(64, "0"), "hex").copy(buffer, 20);
              return this.transport.send(0xf0, 0x08, 0x00, 0x00, buffer).then(function () {
                return true;
              }, function (e) {
                if (e && e.statusCode === 0x6d00) {
                  // this case happen for ETH application versions not supporting Stark extensions
                  return false;
                }

                throw e;
              });
            }
          }]);

          return Eth;
        }(); //# sourceMappingURL=Eth.js.map

        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "pn0g":
    /*!***********************************************************!*\
      !*** ./node_modules/@ledgerhq/hw-app-eth/lib-es/utils.js ***!
      \***********************************************************/

    /*! exports provided: defer, splitPath, eachSeries, foreach, doIf, asyncWhile */

    /***/
    function pn0g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defer", function () {
        return defer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "splitPath", function () {
        return splitPath;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "eachSeries", function () {
        return eachSeries;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "foreach", function () {
        return foreach;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doIf", function () {
        return doIf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "asyncWhile", function () {
        return asyncWhile;
      });
      /********************************************************************************
       *   Ledger Node JS API
       *   (c) 2016-2017 Ledger
       *
       *  Licensed under the Apache License, Version 2.0 (the "License");
       *  you may not use this file except in compliance with the License.
       *  You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       *  Unless required by applicable law or agreed to in writing, software
       *  distributed under the License is distributed on an "AS IS" BASIS,
       *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       *  See the License for the specific language governing permissions and
       *  limitations under the License.
       ********************************************************************************/


      function defer() {
        var resolve, reject;
        var promise = new Promise(function (success, failure) {
          resolve = success;
          reject = failure;
        });
        if (!resolve || !reject) throw "defer() error"; // this never happens and is just to make flow happy

        return {
          promise: promise,
          resolve: resolve,
          reject: reject
        };
      } // TODO use bip32-path library


      function splitPath(path) {
        var result = [];
        var components = path.split("/");
        components.forEach(function (element) {
          var number = parseInt(element, 10);

          if (isNaN(number)) {
            return; // FIXME shouldn't it throws instead?
          }

          if (element.length > 1 && element[element.length - 1] === "'") {
            number += 0x80000000;
          }

          result.push(number);
        });
        return result;
      } // TODO use async await


      function eachSeries(arr, fun) {
        return arr.reduce(function (p, e) {
          return p.then(function () {
            return fun(e);
          });
        }, Promise.resolve());
      }

      function foreach(arr, callback) {
        function iterate(index, array, result) {
          if (index >= array.length) {
            return result;
          } else return callback(array[index], index).then(function (res) {
            result.push(res);
            return iterate(index + 1, array, result);
          });
        }

        return Promise.resolve().then(function () {
          return iterate(0, arr, []);
        });
      }

      function doIf(condition, callback) {
        return Promise.resolve().then(function () {
          if (condition) {
            return callback();
          }
        });
      }

      function asyncWhile(predicate, callback) {
        function iterate(result) {
          if (!predicate()) {
            return result;
          } else {
            return callback().then(function (res) {
              result.push(res);
              return iterate(result);
            });
          }
        }

        return Promise.resolve([]).then(iterate);
      } //# sourceMappingURL=utils.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=ledgerhq-hw-app-eth-es5.js.map