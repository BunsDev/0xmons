(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unilogin-provider"], {
    /***/
    "SI8O":
    /*!***********************************************************!*\
      !*** ./node_modules/@unilogin/provider/dist/umd/index.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function SI8O(module, exports, __webpack_require__) {
      !function (t, n) {
        true ? module.exports = n() : undefined;
      }(this, function () {
        "use strict";

        var _t = function t() {
          return (_t = Object.assign || function (t) {
            for (var n, e = 1, r = arguments.length; e < r; e++) {
              for (var o in n = arguments[e]) {
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              }
            }

            return t;
          }).apply(this, arguments);
        };

        function n(t, n, e, r) {
          return new (e || (e = Promise))(function (o, i) {
            function s(t) {
              try {
                u(r.next(t));
              } catch (t) {
                i(t);
              }
            }

            function a(t) {
              try {
                u(r["throw"](t));
              } catch (t) {
                i(t);
              }
            }

            function u(t) {
              t.done ? o(t.value) : new e(function (n) {
                n(t.value);
              }).then(s, a);
            }

            u((r = r.apply(t, n || [])).next());
          });
        }

        function e(t, n) {
          var e,
              r,
              o,
              i,
              s = {
            label: 0,
            sent: function sent() {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
          return i = {
            next: a(0),
            "throw": a(1),
            "return": a(2)
          }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this;
          }), i;

          function a(i) {
            return function (a) {
              return function (i) {
                if (e) throw new TypeError("Generator is already executing.");

                for (; s;) {
                  try {
                    if (e = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                      case 0:
                      case 1:
                        o = i;
                        break;

                      case 4:
                        return s.label++, {
                          value: i[1],
                          done: !1
                        };

                      case 5:
                        s.label++, r = i[1], i = [0];
                        continue;

                      case 7:
                        i = s.ops.pop(), s.trys.pop();
                        continue;

                      default:
                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                          s = 0;
                          continue;
                        }

                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                          s.label = i[1];
                          break;
                        }

                        if (6 === i[0] && s.label < o[1]) {
                          s.label = o[1], o = i;
                          break;
                        }

                        if (o && s.label < o[2]) {
                          s.label = o[2], s.ops.push(i);
                          break;
                        }

                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }

                    i = n.call(t, s);
                  } catch (t) {
                    i = [6, t], r = 0;
                  } finally {
                    e = o = 0;
                  }
                }

                if (5 & i[0]) throw i[1];
                return {
                  value: i[0] ? i[1] : void 0,
                  done: !0
                };
              }([i, a]);
            };
          }
        }

        var _r,
            o = {
          error: function error(t) {
            return {
              error: t
            };
          },
          ok: function ok(t) {
            return {
              ok: t
            };
          },
          isError: function isError(t) {
            return Object.hasOwnProperty.call(t, "error");
          },
          isOk: function isOk(t) {
            return Object.hasOwnProperty.call(t, "ok");
          }
        },
            i = function i(t) {
          return function (n, e) {
            return n === t ? o.ok(t) : o.error([{
              path: e,
              expected: "exactly " + JSON.stringify(t)
            }]);
          };
        },
            s = /^-?\d*(\.\d+)?$/,
            a = function a(t, n) {
          return function (t) {
            return "number" == typeof t && !isNaN(t);
          }(t) ? o.ok(t) : function (t) {
            return "string" == typeof t && "" !== t && s.test(t);
          }(t) ? o.ok(+t) : o.error([{
            path: n,
            expected: "number"
          }]);
        },
            u = function u(t) {
          return function (n, e) {
            if ("object" != typeof n || null === n) return o.error([{
              path: e,
              expected: "object"
            }]);
            var r = {},
                i = [];

            for (var s in t) {
              if (Object.hasOwnProperty.call(t, s)) {
                var a = t[s](n[s], e + "." + s);
                o.isOk(a) ? r[s] = a.ok : i.push.apply(i, a.error);
              }
            }

            return i.length > 0 ? o.error(i) : o.ok(r);
          };
        },
            c = function c(t) {
          return function (n, e) {
            return null == n ? o.ok(void 0) : t(n, e);
          };
        },
            f = (_r = function r(t, n) {
          return (_r = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (t, n) {
            t.__proto__ = n;
          } || function (t, n) {
            for (var e in n) {
              n.hasOwnProperty(e) && (t[e] = n[e]);
            }
          })(t, n);
        }, function (t, n) {
          function e() {
            this.constructor = t;
          }

          _r(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e());
        });

        !function (t) {
          function n(e, r) {
            var o = t.call(this, r || "Cannot cast") || this;
            return o.errors = e, Object.setPrototypeOf(o, n.prototype), o;
          }

          f(n, t);
        }(TypeError);

        var l,
            p,
            d = function () {
          function t(t, n) {
            this.sendMessage = t, this.handler = n, this.nextId = 0, this.callbacks = {};
          }

          return t.prototype.handleMessage = function (t) {
            var n = function (t, n, e) {
              var r = n(t, "");
              return o.isOk(r) ? r.ok : e;
            }(t, h, void 0);

            n && this.handleRpc(n);
          }, t.prototype.send = function (t, n) {
            var e = this.getId();
            this.callbacks[e] = n, this.sendRpc({
              protocolId: "UNIVERSAL_LOGIN",
              id: e,
              isRequest: !0,
              payload: t
            });
          }, t.prototype.getId = function () {
            return this.nextId++;
          }, t.prototype.handleRpc = function (t) {
            t.isRequest ? this.handleRequest(t) : this.handleResponse(t);
          }, t.prototype.handleResponse = function (t) {
            var n,
                e,
                r = this.callbacks[t.id];
            delete this.callbacks[t.id], void 0 !== t.error ? null === (n = r) || void 0 === n || n(t.error, void 0) : null === (e = r) || void 0 === e || e(null, t.response);
          }, t.prototype.handleRequest = function (t) {
            this.handler(t.payload, this.getCallbackHandler(t.id));
          }, t.prototype.getCallbackHandler = function (t) {
            var n = this;
            return function (e, r) {
              e ? n.sendRpc({
                protocolId: "UNIVERSAL_LOGIN",
                id: t,
                isRequest: !1,
                error: e
              }) : n.sendRpc({
                protocolId: "UNIVERSAL_LOGIN",
                id: t,
                isRequest: !1,
                response: r
              });
            };
          }, t.prototype.sendRpc = function (t) {
            this.sendMessage(t);
          }, t;
        }(),
            h = (l = [u({
          protocolId: i("UNIVERSAL_LOGIN"),
          id: a,
          isRequest: i(!0),
          payload: o.ok
        }), u({
          protocolId: i("UNIVERSAL_LOGIN"),
          id: a,
          isRequest: i(!1),
          error: c(o.ok),
          response: c(o.ok)
        })], p = "RpcMessage", function (t, n) {
          if (0 === l.length) return o.ok(t);

          for (var e = 0, r = l; e < r.length; e++) {
            var i = (0, r[e])(t, n);
            if (o.isOk(i)) return i;
          }

          return o.error([{
            path: n,
            expected: p
          }]);
        }),
            y = {
          backendUrl: "https://universal-provider-backend.netlify.com",
          logoUrl: "https://universalloginsdk.readthedocs.io/en/latest/_images/logo.png",
          ulButtonId: "unilogin-button",
          disabledDialogs: []
        };

        function b() {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n];
          }

          return function (n) {
            return t.reduce(function (t, n) {
              return n(t);
            }, n);
          };
        }

        var v = function () {
          function t() {}

          return t.prototype.pipe = function () {
            for (var t = [], n = 0; n < arguments.length; n++) {
              t[n] = arguments[n];
            }

            return b.apply(void 0, t)(this);
          }, t;
        }(),
            g = function () {
          var _t2 = function t(n, e) {
            return (_t2 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, n) {
              t.__proto__ = n;
            } || function (t, n) {
              for (var e in n) {
                n.hasOwnProperty(e) && (t[e] = n[e]);
              }
            })(n, e);
          };

          return function (n, e) {
            function r() {
              this.constructor = n;
            }

            _t2(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          };
        }(),
            _ = function (t) {
          function n(n) {
            var e = t.call(this) || this;
            return e.subscribers = new Set(), e.value = n, e;
          }

          return g(n, t), n.prototype.get = function () {
            return this.value;
          }, n.prototype.set = function (t) {
            this.value = t, this.subscribers.forEach(function (t) {
              return t();
            });
          }, n.prototype.subscribe = function (t) {
            var n = this;
            return this.subscribers.add(t), function () {
              return n.subscribers["delete"](t);
            };
          }, n;
        }(v);

        (function () {
          var _t3 = function t(n, e) {
            return (_t3 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, n) {
              t.__proto__ = n;
            } || function (t, n) {
              for (var e in n) {
                n.hasOwnProperty(e) && (t[e] = n[e]);
              }
            })(n, e);
          };
        })(), function () {
          var _t4 = function t(n, e) {
            return (_t4 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, n) {
              t.__proto__ = n;
            } || function (t, n) {
              for (var e in n) {
                n.hasOwnProperty(e) && (t[e] = n[e]);
              }
            })(n, e);
          };
        }();
        (function () {
          var _t5 = function t(n, e) {
            return (_t5 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, n) {
              t.__proto__ = n;
            } || function (t, n) {
              for (var e in n) {
                n.hasOwnProperty(e) && (t[e] = n[e]);
              }
            })(n, e);
          };
        })(), function () {
          var _t6 = function t(n, e) {
            return (_t6 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, n) {
              t.__proto__ = n;
            } || function (t, n) {
              for (var e in n) {
                n.hasOwnProperty(e) && (t[e] = n[e]);
              }
            })(n, e);
          };
        }(), function () {
          var _t7 = function t(n, e) {
            return (_t7 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, n) {
              t.__proto__ = n;
            } || function (t, n) {
              for (var e in n) {
                n.hasOwnProperty(e) && (t[e] = n[e]);
              }
            })(n, e);
          };
        }();

        var m = function m() {
          var t = window.innerWidth,
              n = window.innerHeight;
          return t <= 512 || n <= 512 ? "phone" : t <= 1024 ? "tablet" : "laptop";
        },
            w = function w() {
          var t = k();
          if (!t) return null;
          var n = document.URL.split("#")[0];
          return "/" === n[n.length - 1] && "/" === t[0] ? n.slice(0, -1) + t : n + t;
        },
            k = function k() {
          for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
            if ("icon" === t[n].getAttribute("rel") || "shortcut icon" === t[n].getAttribute("rel")) return t[n].getAttribute("href");
          }
        };

        function O(t, n, e, r, o) {
          return t + "?" + function (t) {
            return Object.entries(t).map(function (t) {
              var n,
                  e,
                  r = function (t, n) {
                var e = "function" == typeof Symbol && t[Symbol.iterator];
                if (!e) return t;
                var r,
                    o,
                    i = e.call(t),
                    s = [];

                try {
                  for (; (void 0 === n || n-- > 0) && !(r = i.next()).done;) {
                    s.push(r.value);
                  }
                } catch (t) {
                  o = {
                    error: t
                  };
                } finally {
                  try {
                    r && !r.done && (e = i["return"]) && e.call(i);
                  } finally {
                    if (o) throw o.error;
                  }
                }

                return s;
              }(t, 2),
                  o = r[0],
                  i = r[1];

              return encodeURIComponent(o) + "=" + encodeURIComponent(null != (e = null === (n = i) || void 0 === n ? void 0 : n.toString()) ? e : "");
            }).join("&");
          }({
            picker: n,
            network: o,
            sdkConfig: JSON.stringify(e),
            disabledDialogs: r
          });
        }

        return function () {
          function r(n) {
            var e = this;
            this.config = n, this.isReady = new _(!1), this.hasNotifications = !1, this.isUniLogin = !0, this.boundOpenDashboard = this.openDashboard.bind(this), this.getNotificationsIndicator = function () {
              return document.getElementById(e.config.ulButtonId + "-notifications");
            };

            var r,
                o,
                i = _t({
              applicationInfo: {
                applicationName: document.title,
                logo: w() || "none",
                type: m()
              }
            }, n.sdkConfig);

            this.iframe = (r = O(n.backendUrl, n.enablePicker, i, n.disabledDialogs, n.network), o = document.createElement("iframe"), Object.assign(o.style, {
              position: "fixed",
              width: "100%",
              height: "100%",
              left: "0",
              top: "0",
              background: "none transparent",
              border: "none",
              display: "none",
              "z-index": "100000"
            }), o.setAttribute("src", r), document.getElementsByTagName("body")[0].appendChild(o), o), this.bridge = new d(function (t) {
              return e.iframe.contentWindow.postMessage(t, "*");
            }, this.handleRpc.bind(this)), window.addEventListener("message", function (t) {
              return e.bridge.handleMessage(t.data);
            }), this.observeDomForUlButtons();
          }

          return r.prototype.observeDomForUlButtons = function () {
            var t = this;
            new MutationObserver(function (n) {
              var e, r;

              try {
                for (var o = function (t) {
                  var n = "function" == typeof Symbol && t[Symbol.iterator],
                      e = 0;
                  return n ? n.call(t) : {
                    next: function next() {
                      return t && e >= t.length && (t = void 0), {
                        value: t && t[e++],
                        done: !t
                      };
                    }
                  };
                }(n), i = o.next(); !i.done; i = o.next()) {
                  var s = i.value;
                  s.target instanceof Element && s.target.querySelectorAll("button#" + t.config.ulButtonId).forEach(function (n) {
                    n instanceof HTMLButtonElement && t.initUlButton(n);
                  });
                }
              } catch (t) {
                e = {
                  error: t
                };
              } finally {
                try {
                  i && !i.done && (r = o["return"]) && r.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
            }).observe(document.body, {
              childList: !0,
              subtree: !0
            });
          }, r.prototype.handleRpc = function (t, n) {
            switch (t.method) {
              case "ul_set_iframe_visibility":
                this.setIframeVisibility(t.params[0]);
                break;

              case "ul_ready":
                this.isReady.set(!0);
                break;

              case "ul_set_notification_indicator":
                this.hasNotifications = t.params[0], this.setNotificationsIndicatorVisibility(this.hasNotifications);
                break;

              default:
                this.sendUpstream(t, n);
            }
          }, r.prototype.setNotificationsIndicatorVisibility = function (t) {
            var n = this.getNotificationsIndicator();
            n && (n.style.display = t ? "block" : "none");
          }, r.prototype.sendUpstream = function (t, n) {
            var e = this.config.upstream;
            if (!e) throw new TypeError();
            e.sendAsync ? e.sendAsync(t, n) : e.send(t, n);
          }, r.prototype.setIframeVisibility = function (t) {
            this.iframe.style.display = t ? "unset" : "none";
          }, r.getInstance = function (t) {
            return r.instance || (r.instance = new r(t)), r.instance;
          }, r.create = function (n, e, o) {
            return r.getInstance(_t(_t({
              enablePicker: !1,
              network: n.toString(),
              sdkConfig: e
            }, y), o));
          }, r.createPicker = function (n, e, o) {
            return r.getInstance(_t(_t(_t(_t({
              enablePicker: !0
            }, function (t) {
              if (void 0 === t) throw new Error("Either a provider or a network name must be passed as a first argument");
              return "string" == typeof t ? {
                network: t.toString()
              } : {
                upstream: t
              };
            }(n)), {
              sdkConfig: e
            }), y), o));
          }, r.prototype.promisifyJsonRpcRequest = function (t) {
            return n(this, void 0, void 0, function () {
              var n = this;
              return e(this, function (e) {
                return [2, new Promise(function (e, r) {
                  return n.send(t, function (t, n) {
                    return t ? r(t) : e(n);
                  });
                })];
              });
            });
          }, r.prototype.handleBatchRequest = function (t, r) {
            return n(this, void 0, void 0, function () {
              var n,
                  o,
                  i = this;
              return e(this, function (e) {
                switch (e.label) {
                  case 0:
                    return e.trys.push([0, 2,, 3]), [4, Promise.all(t.map(function (t) {
                      return i.promisifyJsonRpcRequest(t);
                    }))];

                  case 1:
                    return n = e.sent(), r(void 0, n), [3, 3];

                  case 2:
                    return o = e.sent(), r(o, void 0), [3, 3];

                  case 3:
                    return [2];
                }
              });
            });
          }, r.prototype.send = function (t, r) {
            return n(this, void 0, void 0, function () {
              return e(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.waitUntilReady()];

                  case 1:
                    return n.sent(), Array.isArray(t) ? this.handleBatchRequest(t, r) : this.bridge.send(t, r), [2];
                }
              });
            });
          }, r.prototype.sendAsync = function (t, r) {
            return n(this, void 0, void 0, function () {
              return e(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.send(t, r)];

                  case 1:
                    return n.sent(), [2];
                }
              });
            });
          }, r.prototype.enable = function () {
            return n(this, void 0, void 0, function () {
              var t, n, r;
              return e(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.promisifyJsonRpcRequest({
                      id: 1,
                      jsonRpc: "2.0",
                      method: "eth_requestAccounts"
                    })];

                  case 1:
                    return t = e.sent(), n = t.result, (r = t.error) ? [2, Promise.reject(r)] : [2, Promise.resolve(n)];
                }
              });
            });
          }, r.prototype.setDashboardVisibility = function (t) {
            this.send({
              method: "ul_set_dashboard_visibility",
              params: [t]
            }, function () {});
          }, r.prototype.openDashboard = function () {
            this.setDashboardVisibility(!0);
          }, r.prototype.closeDashboard = function () {
            this.setDashboardVisibility(!1);
          }, r.prototype.waitUntilReady = function () {
            return this.isReady.pipe((t = Boolean, function (n) {
              return new Promise(function (e) {
                return n.pipe((r = function r(n) {
                  t(n) && e(n);
                }, function (t) {
                  return r(t.get()), t.subscribe(function () {
                    return r(t.get());
                  });
                }));
                var r;
              });
            }));
            var t;
          }, r.prototype.initUlButton = function (t) {
            Object.assign(t.style, {
              display: "inline-block",
              background: "none",
              border: "none",
              cursor: "pointer",
              position: "relative",
              width: "60px",
              height: "60px",
              marginRight: "15px",
              padding: "0"
            }), t.innerHTML = '\n      <img style="width: 100%; height: 100%;" src="' + this.config.logoUrl + '" alt="U" >\n      <div id="' + this.config.ulButtonId + '-notifications"></div>\n    ', Object.assign(this.getNotificationsIndicator().style, {
              display: this.hasNotifications ? "block" : "none",
              position: "absolute",
              top: "0px",
              right: "-11px",
              width: "15px",
              height: "15px",
              background: "#0FB989",
              "box-shadow": "0px 5px 4px rgba(0, 0, 0, 0.14516)",
              "border-radius": "50%"
            }), t.addEventListener("click", this.boundOpenDashboard);
          }, r;
        }();
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=unilogin-provider-es5.js.map