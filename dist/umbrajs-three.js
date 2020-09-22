(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
  typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.UmbraRuntime = {}, global.THREE));
}(this, (function (exports, THREE) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _typeof$1(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof$1 = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof$1 = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof$1(obj);
  }

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

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray$1(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var UmbraNativeAPI = function () {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;

    return function (UmbraNativeAPI) {
      UmbraNativeAPI = UmbraNativeAPI || {};
      var c;
      c || (c = typeof UmbraNativeAPI !== 'undefined' ? UmbraNativeAPI : {});
      var n = {},
          r;

      for (r in c) {
        c.hasOwnProperty(r) && (n[r] = c[r]);
      }

      var aa = "./this.program";

      function ba(a, b) {
        throw b;
      }

      var v = "";
      document.currentScript && (v = document.currentScript.src);
      _scriptDir && (v = _scriptDir);
      0 !== v.indexOf("blob:") ? v = v.substr(0, v.lastIndexOf("/") + 1) : v = "";
      var ca = c.print || console.log.bind(console),
          w = c.printErr || console.warn.bind(console);

      for (r in n) {
        n.hasOwnProperty(r) && (c[r] = n[r]);
      }

      n = null;
      c.thisProgram && (aa = c.thisProgram);
      c.quit && (ba = c.quit);

      function da(a, b) {
        b || (b = 16);
        return Math.ceil(a / b) * b;
      }

      function ea(a) {
        fa || (fa = {});
        fa[a] || (fa[a] = 1, w(a));
      }

      var fa, y;
      c.wasmBinary && (y = c.wasmBinary);
      var ha;
      c.noExitRuntime && (ha = c.noExitRuntime);
      "object" !== (typeof WebAssembly === "undefined" ? "undefined" : _typeof$1(WebAssembly)) && w("no native wasm support detected");
      var z,
          ia = new WebAssembly.Table({
        initial: 271,
        maximum: 271,
        element: "anyfunc"
      }),
          A = !1;

      function ja(a, b) {
        a || B("Assertion failed: " + b);
      }

      function ka(a) {
        var b = c["_" + a];
        ja(b, "Cannot call unknown function " + a + ", make sure it is exported");
        return b;
      }

      function la(a, b, d, e) {
        var f = {
          string: function string(a) {
            var b = 0;

            if (null !== a && void 0 !== a && 0 !== a) {
              var d = (a.length << 2) + 1;
              b = ma(d);
              na(a, b, d);
            }

            return b;
          },
          array: function array(a) {
            var b = ma(a.length);
            C.set(a, b);
            return b;
          }
        },
            g = ka(a),
            k = [];
        a = 0;
        if (e) for (var h = 0; h < e.length; h++) {
          var l = f[d[h]];
          l ? (0 === a && (a = oa()), k[h] = l(e[h])) : k[h] = e[h];
        }
        d = g.apply(null, k);

        d = function (a) {
          return "string" === b ? D(a) : "boolean" === b ? !!a : a;
        }(d);

        0 !== a && pa(a);
        return d;
      }

      var qa = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

      function ra(a, b, d) {
        var e = b + d;

        for (d = b; a[d] && !(d >= e);) {
          ++d;
        }

        if (16 < d - b && a.subarray && qa) return qa.decode(a.subarray(b, d));

        for (e = ""; b < d;) {
          var f = a[b++];

          if (f & 128) {
            var g = a[b++] & 63;
            if (192 == (f & 224)) e += String.fromCharCode((f & 31) << 6 | g);else {
              var k = a[b++] & 63;
              f = 224 == (f & 240) ? (f & 15) << 12 | g << 6 | k : (f & 7) << 18 | g << 12 | k << 6 | a[b++] & 63;
              65536 > f ? e += String.fromCharCode(f) : (f -= 65536, e += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
            }
          } else e += String.fromCharCode(f);
        }

        return e;
      }

      function D(a) {
        return a ? ra(_E, a, void 0) : "";
      }

      function na(a, b, d) {
        var e = _E;

        if (0 < d) {
          d = b + d - 1;

          for (var f = 0; f < a.length; ++f) {
            var g = a.charCodeAt(f);

            if (55296 <= g && 57343 >= g) {
              var k = a.charCodeAt(++f);
              g = 65536 + ((g & 1023) << 10) | k & 1023;
            }

            if (127 >= g) {
              if (b >= d) break;
              e[b++] = g;
            } else {
              if (2047 >= g) {
                if (b + 1 >= d) break;
                e[b++] = 192 | g >> 6;
              } else {
                if (65535 >= g) {
                  if (b + 2 >= d) break;
                  e[b++] = 224 | g >> 12;
                } else {
                  if (b + 3 >= d) break;
                  e[b++] = 240 | g >> 18;
                  e[b++] = 128 | g >> 12 & 63;
                }

                e[b++] = 128 | g >> 6 & 63;
              }

              e[b++] = 128 | g & 63;
            }
          }

          e[b] = 0;
        }
      }

      "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");

      function sa(a) {
        0 < a % 65536 && (a += 65536 - a % 65536);
        return a;
      }

      var ta, C, _E, ua, va, F, G, wa, xa;

      function ya(a) {
        ta = a;
        c.HEAP8 = C = new Int8Array(a);
        c.HEAP16 = ua = new Int16Array(a);
        c.HEAP32 = F = new Int32Array(a);
        c.HEAPU8 = _E = new Uint8Array(a);
        c.HEAPU16 = va = new Uint16Array(a);
        c.HEAPU32 = G = new Uint32Array(a);
        c.HEAPF32 = wa = new Float32Array(a);
        c.HEAPF64 = xa = new Float64Array(a);
      }

      var Aa = c.TOTAL_MEMORY || 134217728;
      c.wasmMemory ? z = c.wasmMemory : z = new WebAssembly.Memory({
        initial: Aa / 65536
      });
      z && (ta = z.buffer);
      Aa = ta.byteLength;
      ya(ta);
      F[7348] = 5272432;

      function Ba(a) {
        for (; 0 < a.length;) {
          var b = a.shift();
          if ("function" == typeof b) b();else {
            var d = b.Ob;
            "number" === typeof d ? void 0 === b.Lb ? c.dynCall_v(d) : c.dynCall_vi(d, b.Lb) : d(void 0 === b.Lb ? null : b.Lb);
          }
        }
      }

      var Ca = [],
          Da = [],
          Ea = [],
          Fa = [],
          Ga = [];

      function Ha() {
        var a = c.preRun.shift();
        Ca.unshift(a);
      }

      var H = 0,
          Ja = null;
      c.preloadedImages = {};
      c.preloadedAudios = {};

      function B(a) {
        if (c.onAbort) c.onAbort(a);
        ca(a);
        w(a);
        A = !0;
        throw new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
      }

      function Ka() {
        var a = I;
        return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,");
      }

      var I = "umbra.wasm";

      if (!Ka()) {
        var La = I;
        I = c.locateFile ? c.locateFile(La, v) : v + La;
      }

      function Ma() {
        try {
          if (y) return new Uint8Array(y);
          throw "both async and sync fetching of the wasm failed";
        } catch (a) {
          B(a);
        }
      }

      function Na() {
        return y || "function" !== typeof fetch ? new Promise(function (a) {
          a(Ma());
        }) : fetch(I, {
          credentials: "same-origin"
        }).then(function (a) {
          if (!a.ok) throw "failed to load wasm binary file at '" + I + "'";
          return a.arrayBuffer();
        })["catch"](function () {
          return Ma();
        });
      }

      var Pa = {
        7972: function _() {
          alert("Uploads are not supported.");
        },
        9162: function _() {
          alert("Invalid http method.");
        },
        9394: function _(a, b, d, e, f, g, k, h, l, p, u) {
          return Oa(a, b, d, e, f, g, k, h, l, p, u);
        }
      },
          Qa = [];
      Da.push({
        Ob: function Ob() {
          Ra();
        }
      });

      function Sa(a, b) {
        Fa.unshift({
          Ob: a,
          Lb: b
        });
      }

      var Ta = [null, [], []];

      function Ua(a, b) {
        var d = Ta[a];
        0 === b || 10 === b ? ((1 === a ? ca : w)(ra(d, 0)), d.length = 0) : d.push(b);
      }

      var J = 0;

      function Va() {
        J += 4;
        return F[J - 4 >> 2];
      }

      var Wa = {},
          Xa = {};

      function Ya(a) {
        for (; a.length;) {
          var b = a.pop();
          a.pop()(b);
        }
      }

      function Za(a) {
        return this.fromWireType(G[a >> 2]);
      }

      var K = {},
          L = {},
          $a = {};

      function ab(a) {
        if (void 0 === a) return "_unknown";
        a = a.replace(/[^a-zA-Z0-9_]/g, "$");
        var b = a.charCodeAt(0);
        return 48 <= b && 57 >= b ? "_" + a : a;
      }

      function bb(a, b) {
        a = ab(a);
        return new Function("body", "return function " + a + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(b);
      }

      function cb(a) {
        var b = Error,
            d = bb(a, function (b) {
          this.name = a;
          this.message = b;
          b = Error(b).stack;
          void 0 !== b && (this.stack = this.toString() + "\n" + b.replace(/^Error(:[^\n]*)?\n/, ""));
        });
        d.prototype = Object.create(b.prototype);
        d.prototype.constructor = d;

        d.prototype.toString = function () {
          return void 0 === this.message ? this.name : this.name + ": " + this.message;
        };

        return d;
      }

      var db = void 0;

      function eb(a, b, d) {
        function e(b) {
          b = d(b);
          if (b.length !== a.length) throw new db("Mismatched type converter count");

          for (var e = 0; e < a.length; ++e) {
            M(a[e], b[e]);
          }
        }

        a.forEach(function (a) {
          $a[a] = b;
        });
        var f = Array(b.length),
            g = [],
            k = 0;
        b.forEach(function (a, b) {
          L.hasOwnProperty(a) ? f[b] = L[a] : (g.push(a), K.hasOwnProperty(a) || (K[a] = []), K[a].push(function () {
            f[b] = L[a];
            ++k;
            k === g.length && e(f);
          }));
        });
        0 === g.length && e(f);
      }

      function fb(a) {
        switch (a) {
          case 1:
            return 0;

          case 2:
            return 1;

          case 4:
            return 2;

          case 8:
            return 3;

          default:
            throw new TypeError("Unknown type size: " + a);
        }
      }

      var gb = void 0;

      function N(a) {
        for (var b = ""; _E[a];) {
          b += gb[_E[a++]];
        }

        return b;
      }

      var hb = void 0;

      function P(a) {
        throw new hb(a);
      }

      function M(a, b, d) {
        d = d || {};
        if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
        var e = b.name;
        a || P('type "' + e + '" must have a positive integer typeid pointer');

        if (L.hasOwnProperty(a)) {
          if (d.Yb) return;
          P("Cannot register type '" + e + "' twice");
        }

        L[a] = b;
        delete $a[a];
        K.hasOwnProperty(a) && (b = K[a], delete K[a], b.forEach(function (a) {
          a();
        }));
      }

      var ib = [],
          Q = [{}, {
        value: void 0
      }, {
        value: null
      }, {
        value: !0
      }, {
        value: !1
      }];

      function jb(a) {
        4 < a && 0 === --Q[a].Pb && (Q[a] = void 0, ib.push(a));
      }

      function R(a) {
        switch (a) {
          case void 0:
            return 1;

          case null:
            return 2;

          case !0:
            return 3;

          case !1:
            return 4;

          default:
            var b = ib.length ? ib.pop() : Q.length;
            Q[b] = {
              Pb: 1,
              value: a
            };
            return b;
        }
      }

      function kb(a) {
        if (null === a) return "null";

        var b = _typeof$1(a);

        return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
      }

      function lb(a, b) {
        switch (b) {
          case 2:
            return function (a) {
              return this.fromWireType(wa[a >> 2]);
            };

          case 3:
            return function (a) {
              return this.fromWireType(xa[a >> 3]);
            };

          default:
            throw new TypeError("Unknown float type: " + a);
        }
      }

      function mb(a) {
        var b = Function;
        if (!(b instanceof Function)) throw new TypeError("new_ called with constructor type " + _typeof$1(b) + " which is not a function");
        var d = bb(b.name || "unknownFunctionName", function () {});
        d.prototype = b.prototype;
        d = new d();
        a = b.apply(d, a);
        return a instanceof Object ? a : d;
      }

      function nb(a, b) {
        var d = c;

        if (void 0 === d[a].Jb) {
          var e = d[a];

          d[a] = function () {
            d[a].Jb.hasOwnProperty(arguments.length) || P("Function '" + b + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + d[a].Jb + ")!");
            return d[a].Jb[arguments.length].apply(this, arguments);
          };

          d[a].Jb = [];
          d[a].Jb[e.Sb] = e;
        }
      }

      function ob(a, b, d) {
        c.hasOwnProperty(a) ? ((void 0 === d || void 0 !== c[a].Jb && void 0 !== c[a].Jb[d]) && P("Cannot register public name '" + a + "' twice"), nb(a, a), c.hasOwnProperty(d) && P("Cannot register multiple overloads of a function with the same number of arguments (" + d + ")!"), c[a].Jb[d] = b) : (c[a] = b, void 0 !== d && (c[a].rc = d));
      }

      function pb(a, b) {
        for (var d = [], e = 0; e < a; e++) {
          d.push(F[(b >> 2) + e]);
        }

        return d;
      }

      function qb(a, b) {
        a = N(a);
        if (void 0 !== c["FUNCTION_TABLE_" + a]) var d = c["FUNCTION_TABLE_" + a][b];else if ("undefined" !== typeof FUNCTION_TABLE) d = FUNCTION_TABLE[b];else {
          d = c["dynCall_" + a];
          void 0 === d && (d = c["dynCall_" + a.replace(/f/g, "d")], void 0 === d && P("No dynCall invoker for signature: " + a));

          for (var e = [], f = 1; f < a.length; ++f) {
            e.push("a" + f);
          }

          f = "return function " + ("dynCall_" + a + "_" + b) + "(" + e.join(", ") + ") {\n";
          f += "    return dynCall(rawFunction" + (e.length ? ", " : "") + e.join(", ") + ");\n";
          d = new Function("dynCall", "rawFunction", f + "};\n")(d, b);
        }
        "function" !== typeof d && P("unknown function pointer with signature " + a + ": " + b);
        return d;
      }

      var rb = void 0;

      function sb(a) {
        a = tb(a);
        var b = N(a);
        S(a);
        return b;
      }

      function ub(a, b) {
        function d(a) {
          f[a] || L[a] || ($a[a] ? $a[a].forEach(d) : (e.push(a), f[a] = !0));
        }

        var e = [],
            f = {};
        b.forEach(d);
        throw new rb(a + ": " + e.map(sb).join([", "]));
      }

      function vb(a, b, d) {
        switch (b) {
          case 0:
            return d ? function (a) {
              return C[a];
            } : function (a) {
              return _E[a];
            };

          case 1:
            return d ? function (a) {
              return ua[a >> 1];
            } : function (a) {
              return va[a >> 1];
            };

          case 2:
            return d ? function (a) {
              return F[a >> 2];
            } : function (a) {
              return G[a >> 2];
            };

          default:
            throw new TypeError("Unknown integer type: " + a);
        }
      }

      function T(a) {
        a || P("Cannot use deleted val. handle = " + a);
        return Q[a].value;
      }

      function wb(a, b) {
        var d = L[a];
        void 0 === d && P(b + " has unknown type " + sb(a));
        return d;
      }

      var xb = {};

      function yb(a) {
        var b = xb[a];
        return void 0 === b ? N(a) : b;
      }

      var zb = [];

      function Ab(a) {
        var b = zb.length;
        zb.push(a);
        return b;
      }

      function Bb(a, b) {
        for (var d = Array(a), e = 0; e < a; ++e) {
          d[e] = wb(F[(b >> 2) + e], "parameter " + e);
        }

        return d;
      }

      function Cb(a, b) {
        Db = a;
        Eb = b;
        if (Fb) if (0 == a) U = function U() {
          var a = Math.max(0, Gb + b - V()) | 0;
          setTimeout(_Hb, a);
        }, Ib = "timeout";else if (1 == a) U = function U() {
          Jb(_Hb);
        }, Ib = "rAF";else if (2 == a) {
          if ("undefined" === typeof setImmediate) {
            var d = [];
            addEventListener("message", function (a) {
              if ("setimmediate" === a.data || "setimmediate" === a.data.target) a.stopPropagation(), d.shift()();
            }, !0);

            setImmediate = function setImmediate(a) {
              d.push(a);
              postMessage("setimmediate", "*");
            };
          }

          U = function U() {
            setImmediate(_Hb);
          };

          Ib = "immediate";
        }
      }

      function V() {
        B();
      }

      function Kb(a) {
        var b = Lb;
        ha = !0;
        ja(!Fb, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
        Fb = a;
        Lb = b;
        var d = "undefined" !== typeof b ? function () {
          c.dynCall_vi(a, b);
        } : function () {
          c.dynCall_v(a);
        };
        var e = W;

        _Hb = function Hb() {
          if (!A) if (0 < Mb.length) {
            var a = Date.now(),
                b = Mb.shift();
            b.Ob(b.Lb);

            if (false) {
              var k;
            }

            console.log('main loop blocker "' + b.name + '" took ' + (Date.now() - a) + " ms");
            c.setStatus && (a = c.statusMessage || "Please wait...", b = Nb, k = Ob.lc, b ? b < k ? c.setStatus(a + " (" + (k - b) + "/" + k + ")") : c.setStatus(a) : c.setStatus(""));
            e < W || setTimeout(_Hb, 0);
          } else if (!(e < W)) if (Pb = Pb + 1 | 0, 1 == Db && 1 < Eb && 0 != Pb % Eb) U();else {
            0 == Db && (Gb = V());
            "timeout" === Ib && c.Mb && (w("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), Ib = "");

            a: if (!(A || c.preMainLoop && !1 === c.preMainLoop())) {
              try {
                d();
              } catch (l) {
                if (l instanceof Qb) break a;
                l && "object" === _typeof$1(l) && l.stack && w("exception thrown: " + [l, l.stack]);
                throw l;
              }

              c.postMainLoop && c.postMainLoop();
            }

            e < W || ("object" === (typeof SDL === "undefined" ? "undefined" : _typeof$1(SDL)) && SDL.audio && SDL.audio.$b && SDL.audio.$b(), U());
          }
        };
      }

      var U = null,
          Ib = "",
          W = 0,
          Fb = null,
          Lb = 0,
          Db = 0,
          Eb = 0,
          Pb = 0,
          Mb = [],
          Ob = {},
          Gb,
          _Hb,
          Nb,
          Rb = !1,
          Sb = !1,
          Tb = [];

      function Vb() {
        function a() {
          Sb = document.pointerLockElement === c.canvas || document.mozPointerLockElement === c.canvas || document.webkitPointerLockElement === c.canvas || document.msPointerLockElement === c.canvas;
        }

        c.preloadPlugins || (c.preloadPlugins = []);

        if (!Wb) {
          Wb = !0;

          try {
            Xb = !0;
          } catch (d) {
            Xb = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
          }

          Yb = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Xb ? null : console.log("warning: no BlobBuilder");
          Zb = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
          c.Rb || "undefined" !== typeof Zb || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), c.Rb = !0);
          c.preloadPlugins.push({
            canHandle: function canHandle(a) {
              return !c.Rb && /\.(jpg|jpeg|png|bmp)$/i.test(a);
            },
            handle: function handle(a, b, f, g) {
              var d = null;
              if (Xb) try {
                d = new Blob([a], {
                  type: $b(b)
                }), d.size !== a.length && (d = new Blob([new Uint8Array(a).buffer], {
                  type: $b(b)
                }));
              } catch (p) {
                ea("Blob constructor present but fails: " + p + "; falling back to blob builder");
              }
              d || (d = new Yb(), d.append(new Uint8Array(a).buffer), d = d.getBlob());
              var e = Zb.createObjectURL(d),
                  l = new Image();

              l.onload = function () {
                ja(l.complete, "Image " + b + " could not be decoded");
                var d = document.createElement("canvas");
                d.width = l.width;
                d.height = l.height;
                d.getContext("2d").drawImage(l, 0, 0);
                c.preloadedImages[b] = d;
                Zb.revokeObjectURL(e);
                f && f(a);
              };

              l.onerror = function () {
                console.log("Image " + e + " could not be decoded");
                g && g();
              };

              l.src = e;
            }
          });
          c.preloadPlugins.push({
            canHandle: function canHandle(a) {
              return !c.qc && a.substr(-4) in {
                ".ogg": 1,
                ".wav": 1,
                ".mp3": 1
              };
            },
            handle: function handle(a, b, f, g) {
              function d(d) {
                l || (l = !0, c.preloadedAudios[b] = d, f && f(a));
              }

              function e() {
                l || (l = !0, c.preloadedAudios[b] = new Audio(), g && g());
              }

              var l = !1;

              if (Xb) {
                try {
                  var p = new Blob([a], {
                    type: $b(b)
                  });
                } catch (q) {
                  return e();
                }

                p = Zb.createObjectURL(p);
                var u = new Audio();
                u.addEventListener("canplaythrough", function () {
                  d(u);
                }, !1);

                u.onerror = function () {
                  if (!l) {
                    console.log("warning: browser could not fully decode audio " + b + ", trying slower base64 approach");

                    for (var e = "", f = 0, g = 0, h = 0; h < a.length; h++) {
                      for (f = f << 8 | a[h], g += 8; 6 <= g;) {
                        var k = f >> g - 6 & 63;
                        g -= 6;
                        e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[k];
                      }
                    }

                    2 == g ? (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 3) << 4], e += "==") : 4 == g && (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 15) << 2], e += "=");
                    u.src = "data:audio/x-" + b.substr(-3) + ";base64," + e;
                    d(u);
                  }
                };

                u.src = p;
                ac(function () {
                  d(u);
                });
              } else return e();
            }
          });
          var b = c.canvas;
          b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function () {}, b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {}, b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), c.elementPointerLock && b.addEventListener("click", function (a) {
            !Sb && c.canvas.requestPointerLock && (c.canvas.requestPointerLock(), a.preventDefault());
          }, !1));
        }
      }

      function bc(a, b, d, e) {
        if (b && c.Mb && a == c.canvas) return c.Mb;
        var f;

        if (b) {
          var g = {
            antialias: !1,
            alpha: !1,
            oc: 1
          };
          if (e) for (var k in e) {
            g[k] = e[k];
          }
          if ("undefined" !== typeof GL && (f = GL.ic(a, g))) var h = GL.getContext(f).gc;
        } else h = a.getContext("2d");

        if (!h) return null;
        d && (b || ja("undefined" === typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), c.Mb = h, b && GL.pc(f), c.sc = b, Tb.forEach(function (a) {
          a();
        }), Vb());
        return h;
      }

      var cc = !1,
          dc = void 0,
          Y = void 0;

      function ec(a, b, d) {
        function e() {
          Rb = !1;
          var a = f.parentNode;
          (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a ? (f.exitFullscreen = fc, dc && f.requestPointerLock(), Rb = !0, Y ? ("undefined" != typeof SDL && (F[SDL.screen >> 2] = G[SDL.screen >> 2] | 8388608), gc(c.canvas), hc()) : gc(f)) : (a.parentNode.insertBefore(f, a), a.parentNode.removeChild(a), Y ? ("undefined" != typeof SDL && (F[SDL.screen >> 2] = G[SDL.screen >> 2] & -8388609), gc(c.canvas), hc()) : gc(f));
          if (c.onFullScreen) c.onFullScreen(Rb);
          if (c.onFullscreen) c.onFullscreen(Rb);
        }

        dc = a;
        Y = b;
        "undefined" === typeof dc && (dc = !0);
        "undefined" === typeof Y && (Y = !1);
        var f = c.canvas;
        cc || (cc = !0, document.addEventListener("fullscreenchange", e, !1), document.addEventListener("mozfullscreenchange", e, !1), document.addEventListener("webkitfullscreenchange", e, !1), document.addEventListener("MSFullscreenChange", e, !1));
        var g = document.createElement("div");
        f.parentNode.insertBefore(g, f);
        g.appendChild(f);
        g.requestFullscreen = g.requestFullscreen || g.mozRequestFullScreen || g.msRequestFullscreen || (g.webkitRequestFullscreen ? function () {
          g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null) || (g.webkitRequestFullScreen ? function () {
          g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null);
        d ? g.requestFullscreen({
          tc: d
        }) : g.requestFullscreen();
      }

      function jc(a, b, d) {
        w("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");

        jc = function jc(a, b, d) {
          ec(a, b, d);
        };

        ec(a, b, d);
      }

      function fc() {
        if (!Rb) return !1;
        (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {}).apply(document, []);
        return !0;
      }

      var kc = 0;

      function Jb(a) {
        if ("function" === typeof requestAnimationFrame) requestAnimationFrame(a);else {
          var b = Date.now();
          if (0 === kc) kc = b + 1E3 / 60;else for (; b + 2 >= kc;) {
            kc += 1E3 / 60;
          }
          setTimeout(a, Math.max(kc - b, 0));
        }
      }

      function ac(a) {
        ha = !0;
        setTimeout(function () {
          A || a();
        }, 1E4);
      }

      function $b(a) {
        return {
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          png: "image/png",
          bmp: "image/bmp",
          ogg: "audio/ogg",
          wav: "audio/wav",
          mp3: "audio/mpeg"
        }[a.substr(a.lastIndexOf(".") + 1)];
      }

      var lc = [];

      function hc() {
        var a = c.canvas;
        lc.forEach(function (b) {
          b(a.width, a.height);
        });
      }

      function gc(a, b, d) {
        b && d ? (a.fc = b, a.Xb = d) : (b = a.fc, d = a.Xb);
        var e = b,
            f = d;
        c.forcedAspectRatio && 0 < c.forcedAspectRatio && (e / f < c.forcedAspectRatio ? e = Math.round(f * c.forcedAspectRatio) : f = Math.round(e / c.forcedAspectRatio));

        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
          var g = Math.min(screen.width / e, screen.height / f);
          e = Math.round(e * g);
          f = Math.round(f * g);
        }

        Y ? (a.width != e && (a.width = e), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != d && (a.height = d), "undefined" != typeof a.style && (e != b || f != d ? (a.style.setProperty("width", e + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
      }

      var Z = {},
          mc = 0;

      function nc() {
        var a = mc;
        mc++;
        return a;
      }

      var Wb, Xb, Yb, Zb;

      function oc() {
        if ("undefined" !== typeof indexedDB) return indexedDB;
        var a = null;
        "object" === (typeof window === "undefined" ? "undefined" : _typeof$1(window)) && (a = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
        ja(a, "IDBStore used, but indexedDB not supported");
        return a;
      }

      var pc = {};

      function qc(a, b) {
        var d = pc[a];
        if (d) b(null, d);else {
          try {
            var e = oc().open(a, 22);
          } catch (f) {
            b(f);
            return;
          }

          e.onupgradeneeded = function (a) {
            var b = a.target.result;
            a = a.target.transaction;
            b.objectStoreNames.contains("FILE_DATA") ? a.objectStore("FILE_DATA") : b.createObjectStore("FILE_DATA");
          };

          e.onsuccess = function () {
            d = e.result;
            pc[a] = d;
            b(null, d);
          };

          e.onerror = function (a) {
            b(this.error);
            a.preventDefault();
          };
        }
      }

      function rc(a, b, d) {
        qc(a, function (a, f) {
          if (a) return d(a);
          a = f.transaction(["FILE_DATA"], b);

          a.onerror = function (a) {
            d(this.error || "unknown error");
            a.preventDefault();
          };

          a = a.objectStore("FILE_DATA");
          d(null, a);
        });
      }

      function sc(a, b, d) {
        rc(a, "readonly", function (a, f) {
          if (a) return d(a);
          a = f.get(b);

          a.onsuccess = function (a) {
            return (a = a.target.result) ? d(null, a) : d("file " + b + " not found");
          };

          a.onerror = function (a) {
            d(a);
          };
        });
      }

      function tc(a, b, d, e) {
        rc(a, "readwrite", function (a, g) {
          if (a) return e(a);
          a = g.put(d, b);

          a.onsuccess = function () {
            e();
          };

          a.onerror = function (a) {
            e(a);
          };
        });
      }

      var uc = {};

      function vc() {
        if (!wc) {
          var a = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG: ("object" === (typeof navigator === "undefined" ? "undefined" : _typeof$1(navigator)) && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
            _: aa
          },
              b;

          for (b in uc) {
            a[b] = uc[b];
          }

          var d = [];

          for (b in a) {
            d.push(b + "=" + a[b]);
          }

          wc = d;
        }

        return wc;
      }

      var wc;

      function xc(a) {
        if (!ha && (A = !0, Ba(Fa), c.onExit)) c.onExit(a);
        ba(a, new Qb(a));
      }

      c._exit = xc;
      na("GMT", 29456, 4);
      db = c.InternalError = cb("InternalError");

      for (var yc = Array(256), zc = 0; 256 > zc; ++zc) {
        yc[zc] = String.fromCharCode(zc);
      }

      gb = yc;
      hb = c.BindingError = cb("BindingError");

      c.count_emval_handles = function () {
        for (var a = 0, b = 5; b < Q.length; ++b) {
          void 0 !== Q[b] && ++a;
        }

        return a;
      };

      c.get_first_emval = function () {
        for (var a = 5; a < Q.length; ++a) {
          if (void 0 !== Q[a]) return Q[a];
        }

        return null;
      };

      rb = c.UnboundTypeError = cb("UnboundTypeError");

      c.requestFullScreen = function (a, b, d) {
        w("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");
        c.requestFullScreen = c.requestFullscreen;
        jc(a, b, d);
      };

      c.requestFullscreen = function (a, b, d) {
        ec(a, b, d);
      };

      c.requestAnimationFrame = function (a) {
        Jb(a);
      };

      c.setCanvasSize = function (a, b, d) {
        gc(c.canvas, a, b);
        d || hc();
      };

      c.pauseMainLoop = function () {
        U = null;
        W++;
      };

      c.resumeMainLoop = function () {
        W++;
        var a = Db,
            b = Eb,
            d = Fb;
        Fb = null;
        Kb(d);
        Cb(a, b);
        U();
      };

      c.getUserMedia = function () {
        window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
        window.getUserMedia(void 0);
      };

      c.createContext = function (a, b, d, e) {
        return bc(a, b, d, e);
      };

      "undefined" !== typeof dateNow ? V = dateNow : "object" === (typeof performance === "undefined" ? "undefined" : _typeof$1(performance)) && performance && "function" === typeof performance.now ? V = function V() {
        return performance.now();
      } : V = Date.now;
      Fa.push(function () {
        var a = c._fflush;
        a && a(0);
        Ta[1].length && Ua(1, 10);
        Ta[2].length && Ua(2, 10);
      });

      var Dc = {
        W: function W() {
          w("missing function: _ZN5Umbra13MiniSceneCopy7connectERK20UmbraSceneCopySource");
          B(-1);
        },
        V: function V() {
          w("missing function: _ZN5Umbra13MiniSceneCopy9getStatusEPf");
          B(-1);
        },
        X: function X() {
          w("missing function: _ZN5Umbra13MiniSceneCopyC1ERNS_11MiniRuntimeERK25UmbraSceneCopyDestinationPK20UmbraEnvironmentInfoRKN5Eigen6MatrixIfLi3ELi1ELi0ELi3ELi1EEEfi");
          B(-1);
        },
        C: function C() {
          return Sa.apply(null, arguments);
        },
        O: function O() {},
        R: function R(a, b) {
          J = b;

          try {
            var d = D(Va()),
                e = Va();
            return Wa.kc((void 0).stat, d, e);
          } catch (f) {
            return B(f), -f.Nb;
          }
        },
        w: function w(a, b) {
          J = b;
          return 0;
        },
        Q: function Q(a, b) {
          J = b;

          try {
            var d = D(Va()),
                e = Va(),
                f = Va();
            return (void 0).open(d, e, f).mc;
          } catch (g) {
            return B(g), -g.Nb;
          }
        },
        P: function P(a, b) {
          J = b;
          return 0;
        },
        s: function s() {},
        A: function A(a) {
          var b = Xa[a];
          delete Xa[a];
          var d = b.ac,
              e = b.bc,
              f = b.Qb,
              g = f.map(function (a) {
            return a.Wb;
          }).concat(f.map(function (a) {
            return a.dc;
          }));
          eb([a], g, function (a) {
            var g = {};
            f.forEach(function (b, d) {
              var e = a[d],
                  h = b.Ub,
                  k = b.Vb,
                  l = a[d + f.length],
                  p = b.cc,
                  za = b.ec;
              g[b.Tb] = {
                read: function read(a) {
                  return e.fromWireType(h(k, a));
                },
                write: function write(a, b) {
                  var d = [];
                  p(za, a, l.toWireType(d, b));
                  Ya(d);
                }
              };
            });
            return [{
              name: b.name,
              fromWireType: function fromWireType(a) {
                var b = {},
                    d;

                for (d in g) {
                  b[d] = g[d].read(a);
                }

                e(a);
                return b;
              },
              toWireType: function toWireType(a, b) {
                for (var f in g) {
                  if (!(f in b)) throw new TypeError("Missing field");
                }

                var h = d();

                for (f in g) {
                  g[f].write(h, b[f]);
                }

                null !== a && a.push(e, h);
                return h;
              },
              argPackAdvance: 8,
              readValueFromPointer: Za,
              Kb: e
            }];
          });
        },
        I: function I(a, b, d, e, f) {
          var g = fb(d);
          b = N(b);
          M(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              return !!a;
            },
            toWireType: function toWireType(a, b) {
              return b ? e : f;
            },
            argPackAdvance: 8,
            readValueFromPointer: function readValueFromPointer(a) {
              if (1 === d) var e = C;else if (2 === d) e = ua;else if (4 === d) e = F;else throw new TypeError("Unknown boolean type size: " + b);
              return this.fromWireType(e[a >> g]);
            },
            Kb: null
          });
        },
        k: function k(a, b, d) {
          a = N(a);
          eb([], [b], function (b) {
            b = b[0];
            c[a] = b.fromWireType(d);
            return [];
          });
        },
        G: function G(a, b) {
          b = N(b);
          M(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              var b = Q[a].value;
              jb(a);
              return b;
            },
            toWireType: function toWireType(a, b) {
              return R(b);
            },
            argPackAdvance: 8,
            readValueFromPointer: Za,
            Kb: null
          });
        },
        u: function u(a, b, d) {
          d = fb(d);
          b = N(b);
          M(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              return a;
            },
            toWireType: function toWireType(a, b) {
              if ("number" !== typeof b && "boolean" !== typeof b) throw new TypeError('Cannot convert "' + kb(b) + '" to ' + this.name);
              return b;
            },
            argPackAdvance: 8,
            readValueFromPointer: lb(b, d),
            Kb: null
          });
        },
        e: function e(a, b, d, _e, f, g) {
          var k = pb(b, d);
          a = N(a);
          f = qb(_e, f);
          ob(a, function () {
            ub("Cannot call " + a + " due to unbound types", k);
          }, b - 1);
          eb([], k, function (d) {
            var e = a,
                h = a;
            d = [d[0], null].concat(d.slice(1));
            var k = f,
                q = d.length;
            2 > q && P("argTypes array size mismatch! Must at least get return value and 'this' types!");

            for (var t = null !== d[1] && !1, x = !1, m = 1; m < d.length; ++m) {
              if (null !== d[m] && void 0 === d[m].Kb) {
                x = !0;
                break;
              }
            }

            var za = "void" !== d[0].name,
                O = "",
                X = "";

            for (m = 0; m < q - 2; ++m) {
              O += (0 !== m ? ", " : "") + "arg" + m, X += (0 !== m ? ", " : "") + "arg" + m + "Wired";
            }

            h = "return function " + ab(h) + "(" + O + ") {\nif (arguments.length !== " + (q - 2) + ") {\nthrowBindingError('function " + h + " called with ' + arguments.length + ' arguments, expected " + (q - 2) + " args!');\n}\n";
            x && (h += "var destructors = [];\n");
            var Ub = x ? "destructors" : "null";
            O = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
            k = [P, k, g, Ya, d[0], d[1]];
            t && (h += "var thisWired = classParam.toWireType(" + Ub + ", this);\n");

            for (m = 0; m < q - 2; ++m) {
              h += "var arg" + m + "Wired = argType" + m + ".toWireType(" + Ub + ", arg" + m + "); // " + d[m + 2].name + "\n", O.push("argType" + m), k.push(d[m + 2]);
            }

            t && (X = "thisWired" + (0 < X.length ? ", " : "") + X);
            h += (za ? "var rv = " : "") + "invoker(fn" + (0 < X.length ? ", " : "") + X + ");\n";
            if (x) h += "runDestructors(destructors);\n";else for (m = t ? 1 : 2; m < d.length; ++m) {
              q = 1 === m ? "thisWired" : "arg" + (m - 2) + "Wired", null !== d[m].Kb && (h += q + "_dtor(" + q + "); // " + d[m].name + "\n", O.push(q + "_dtor"), k.push(d[m].Kb));
            }
            za && (h += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
            O.push(h + "}\n");
            d = mb(O).apply(null, k);
            m = b - 1;
            if (!c.hasOwnProperty(e)) throw new db("Replacing nonexistant public symbol");
            void 0 !== c[e].Jb && void 0 !== m ? c[e].Jb[m] = d : (c[e] = d, c[e].Sb = m);
            return [];
          });
        },
        o: function o(a, b, d, e, f) {
          function g(a) {
            return a;
          }

          b = N(b);
          -1 === f && (f = 4294967295);
          var k = fb(d);

          if (0 === e) {
            var h = 32 - 8 * d;

            g = function g(a) {
              return a << h >>> h;
            };
          }

          var l = -1 != b.indexOf("unsigned");
          M(a, {
            name: b,
            fromWireType: g,
            toWireType: function toWireType(a, d) {
              if ("number" !== typeof d && "boolean" !== typeof d) throw new TypeError('Cannot convert "' + kb(d) + '" to ' + this.name);
              if (d < e || d > f) throw new TypeError('Passing a number "' + kb(d) + '" from JS side to C/C++ side to an argument of type "' + b + '", which is outside the valid range [' + e + ", " + f + "]!");
              return l ? d >>> 0 : d | 0;
            },
            argPackAdvance: 8,
            readValueFromPointer: vb(b, k, 0 !== e),
            Kb: null
          });
        },
        m: function m(a, b, d) {
          function e(a) {
            a >>= 2;
            var b = G;
            return new f(b.buffer, b[a + 1], b[a]);
          }

          var f = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
          d = N(d);
          M(a, {
            name: d,
            fromWireType: e,
            argPackAdvance: 8,
            readValueFromPointer: e
          }, {
            Yb: !0
          });
        },
        v: function v(a, b) {
          b = N(b);
          var d = "std::string" === b;
          M(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              var b = G[a >> 2];

              if (d) {
                var e = _E[a + 4 + b],
                    k = 0;
                0 != e && (k = e, _E[a + 4 + b] = 0);
                var h = a + 4;

                for (e = 0; e <= b; ++e) {
                  var l = a + 4 + e;

                  if (0 == _E[l]) {
                    h = D(h);
                    if (void 0 === p) var p = h;else p += String.fromCharCode(0), p += h;
                    h = l + 1;
                  }
                }

                0 != k && (_E[a + 4 + b] = k);
              } else {
                p = Array(b);

                for (e = 0; e < b; ++e) {
                  p[e] = String.fromCharCode(_E[a + 4 + e]);
                }

                p = p.join("");
              }

              S(a);
              return p;
            },
            toWireType: function toWireType(a, b) {
              b instanceof ArrayBuffer && (b = new Uint8Array(b));
              var e = "string" === typeof b;
              e || b instanceof Uint8Array || b instanceof Uint8ClampedArray || b instanceof Int8Array || P("Cannot pass non-string to std::string");
              var f = (d && e ? function () {
                for (var a = 0, d = 0; d < b.length; ++d) {
                  var e = b.charCodeAt(d);
                  55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | b.charCodeAt(++d) & 1023);
                  127 >= e ? ++a : a = 2047 >= e ? a + 2 : 65535 >= e ? a + 3 : a + 4;
                }

                return a;
              } : function () {
                return b.length;
              })(),
                  h = Ac(4 + f + 1);
              G[h >> 2] = f;
              if (d && e) na(b, h + 4, f + 1);else if (e) for (e = 0; e < f; ++e) {
                var l = b.charCodeAt(e);
                255 < l && (S(h), P("String has UTF-16 code units that do not fit in 8 bits"));
                _E[h + 4 + e] = l;
              } else for (e = 0; e < f; ++e) {
                _E[h + 4 + e] = b[e];
              }
              null !== a && a.push(S, h);
              return h;
            },
            argPackAdvance: 8,
            readValueFromPointer: Za,
            Kb: function Kb(a) {
              S(a);
            }
          });
        },
        H: function H(a, b, d) {
          d = N(d);

          if (2 === b) {
            var e = function e() {
              return va;
            };

            var f = 1;
          } else 4 === b && (e = function e() {
            return G;
          }, f = 2);

          M(a, {
            name: d,
            fromWireType: function fromWireType(a) {
              for (var b = e(), d = G[a >> 2], g = Array(d), p = a + 4 >> f, u = 0; u < d; ++u) {
                g[u] = String.fromCharCode(b[p + u]);
              }

              S(a);
              return g.join("");
            },
            toWireType: function toWireType(a, d) {
              var g = d.length,
                  k = Ac(4 + g * b),
                  p = e();
              G[k >> 2] = g;

              for (var u = k + 4 >> f, q = 0; q < g; ++q) {
                p[u + q] = d.charCodeAt(q);
              }

              null !== a && a.push(S, k);
              return k;
            },
            argPackAdvance: 8,
            readValueFromPointer: Za,
            Kb: function Kb(a) {
              S(a);
            }
          });
        },
        B: function B(a, b, d, e, f, g) {
          Xa[a] = {
            name: N(b),
            ac: qb(d, e),
            bc: qb(f, g),
            Qb: []
          };
        },
        q: function q(a, b, d, e, f, g, k, h, l, p) {
          Xa[a].Qb.push({
            Tb: N(b),
            Wb: d,
            Ub: qb(e, f),
            Vb: g,
            dc: k,
            cc: qb(h, l),
            ec: p
          });
        },
        J: function J(a, b) {
          b = N(b);
          M(a, {
            Zb: !0,
            name: b,
            argPackAdvance: 0,
            fromWireType: function fromWireType() {},
            toWireType: function toWireType() {}
          });
        },
        h: function h(a, b, d) {
          a = T(a);
          b = wb(b, "emval::as");
          var e = [],
              f = R(e);
          F[d >> 2] = f;
          return b.toWireType(e, a);
        },
        i: function i(a, b, d, e) {
          a = zb[a];
          b = T(b);
          d = yb(d);
          a(b, d, null, e);
        },
        a: jb,
        j: function j(a, b) {
          b = Bb(a, b);

          for (var d = b[0], e = d.name + "_$" + b.slice(1).map(function (a) {
            return a.name;
          }).join("_") + "$", f = ["retType"], g = [d], k = "", h = 0; h < a - 1; ++h) {
            k += (0 !== h ? ", " : "") + "arg" + h, f.push("argType" + h), g.push(b[1 + h]);
          }

          e = "return function " + ab("methodCaller_" + e) + "(handle, name, destructors, args) {\n";
          var l = 0;

          for (h = 0; h < a - 1; ++h) {
            e += "    var arg" + h + " = argType" + h + ".readValueFromPointer(args" + (l ? "+" + l : "") + ");\n", l += b[h + 1].argPackAdvance;
          }

          e += "    var rv = handle[name](" + k + ");\n";

          for (h = 0; h < a - 1; ++h) {
            b[h + 1].deleteObject && (e += "    argType" + h + ".deleteObject(arg" + h + ");\n");
          }

          d.Zb || (e += "    return retType.toWireType(destructors, rv);\n");
          f.push(e + "};\n");
          a = mb(f).apply(null, g);
          return Ab(a);
        },
        f: function f(a, b) {
          a = T(a);
          b = T(b);
          return R(a[b]);
        },
        p: function p(a) {
          4 < a && (Q[a].Pb += 1);
        },
        n: function n() {
          return R([]);
        },
        b: function b(a) {
          return R(yb(a));
        },
        l: function l() {
          return R({});
        },
        g: function g(a) {
          Ya(Q[a].value);
          jb(a);
        },
        d: function d(a, b, _d) {
          a = T(a);
          b = T(b);
          _d = T(_d);
          a[b] = _d;
        },
        c: function c(a, b) {
          a = wb(a, "_emval_take_value");
          a = a.readValueFromPointer(b);
          return R(a);
        },
        S: function S() {
          B();
        },
        r: function r(a, b, d) {
          a: for (Qa.length = 0;;) {
            var e = _E[b++];

            if (!e) {
              b = Qa;
              break a;
            }

            100 === e || 102 === e ? (d = da(d, 8), Qa.push(xa[d >> 3]), d += 8) : 105 === e && (d = da(d, 4), Qa.push(F[d >> 2]), d += 4);
          }

          return Pa[a].apply(null, b);
        },
        z: function z(a) {
          (a = Z[a]) && a.abort();
        },
        Z: V,
        y: function y(a, b, d, e, f) {
          sc(D(a), D(b), function (a, b) {
            a ? f && Bc(f, d) : (a = Ac(b.length), _E.set(b, a), Cc(e, d, a, b.length), S(a));
          });
        },
        Y: function Y(a, b, d, e, f, g, k) {
          tc(D(a), D(b), new Uint8Array(_E.subarray(d, d + e)), function (a) {
            a ? k && Bc(k, f) : g && Bc(g, f);
          });
        },
        E: function E(a, b, d) {
          _E.set(_E.subarray(b, b + d), a);
        },
        F: function F(a) {
          if (2147418112 < a) return !1;

          for (var b = Math.max(C.length, 16777216); b < a;) {
            536870912 >= b ? b = sa(2 * b) : b = Math.min(sa((3 * b + 2147483648) / 4), 2147418112);
          }

          a: {
            try {
              z.grow(b - ta.byteLength + 65535 >> 16);
              ya(z.buffer);
              var d = 1;
              break a;
            } catch (e) {}

            d = void 0;
          }

          return d ? !0 : !1;
        },
        K: function K(a, b) {
          var d = 0;
          vc().forEach(function (e, f) {
            var g = b + d;
            f = F[a + 4 * f >> 2] = g;

            for (g = 0; g < e.length; ++g) {
              C[f++ >> 0] = e.charCodeAt(g);
            }

            C[f >> 0] = 0;
            d += e.length + 1;
          });
          return 0;
        },
        L: function L(a, b) {
          var d = vc();
          F[a >> 2] = d.length;
          var e = 0;
          d.forEach(function (a) {
            e += a.length + 1;
          });
          F[b >> 2] = e;
          return 0;
        },
        _: xc,
        x: function x() {
          return 0;
        },
        N: function N(a, b, d, e) {
          try {
            var f = Wa.nc(a),
                g = Wa.jc(f, b, d);
            F[e >> 2] = g;
            return 0;
          } catch (k) {
            return B(k), k.Nb;
          }
        },
        D: function D() {
          return 0;
        },
        M: function M(a, b, d, e) {
          try {
            for (var f = 0, g = 0; g < d; g++) {
              for (var k = F[b + 8 * g >> 2], h = F[b + (8 * g + 4) >> 2], l = 0; l < h; l++) {
                Ua(a, _E[k + l]);
              }

              f += h;
            }

            F[e >> 2] = f;
            return 0;
          } catch (p) {
            return B(p), p.Nb;
          }
        },
        T: function T(a) {
          a = new Date(1E3 * F[a >> 2]);
          F[7352] = a.getUTCSeconds();
          F[7353] = a.getUTCMinutes();
          F[7354] = a.getUTCHours();
          F[7355] = a.getUTCDate();
          F[7356] = a.getUTCMonth();
          F[7357] = a.getUTCFullYear() - 1900;
          F[7358] = a.getUTCDay();
          F[7361] = 0;
          F[7360] = 0;
          F[7359] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
          F[7362] = 29456;
          return 29408;
        },
        memory: z,
        t: function t() {},
        table: ia,
        U: function U(a) {
          var b = Date.now() / 1E3 | 0;
          a && (F[a >> 2] = b);
          return b;
        }
      },
          Ec = function () {
        function a(a) {
          c.asm = a.exports;
          H--;
          c.monitorRunDependencies && c.monitorRunDependencies(H);
          0 == H && (Ja && (a = Ja, Ja = null, a()));
        }

        function b(b) {
          a(b.instance);
        }

        function d(a) {
          return Na().then(function (a) {
            return WebAssembly.instantiate(a, e);
          }).then(a, function (a) {
            w("failed to asynchronously prepare wasm: " + a);
            B(a);
          });
        }

        var e = {
          env: Dc,
          wasi_unstable: Dc
        };
        H++;
        c.monitorRunDependencies && c.monitorRunDependencies(H);
        if (c.instantiateWasm) try {
          return c.instantiateWasm(e, a);
        } catch (f) {
          return w("Module.instantiateWasm callback failed with error: " + f), !1;
        }

        (function () {
          if (y || "function" !== typeof WebAssembly.instantiateStreaming || Ka() || "function" !== typeof fetch) return d(b);
          fetch(I, {
            credentials: "same-origin"
          }).then(function (a) {
            return WebAssembly.instantiateStreaming(a, e).then(b, function (a) {
              w("wasm streaming compile failed: " + a);
              w("falling back to ArrayBuffer instantiation");
              d(b);
            });
          });
        })();

        return {};
      }();

      c.asm = Ec;

      var Ra = c.___wasm_call_ctors = function () {
        return c.asm.$.apply(null, arguments);
      };

      c._UmbraMeshLoadGetInfo = function () {
        return c.asm.aa.apply(null, arguments);
      };

      c._UmbraMeshLoadGetSerializedSize = function () {
        return c.asm.ba.apply(null, arguments);
      };

      c._UmbraMeshLoadSerialize = function () {
        return c.asm.ca.apply(null, arguments);
      };

      c._UmbraAssetLoadGetType = function () {
        return c.asm.da.apply(null, arguments);
      };

      c._UmbraTextureLoadGetInfo = function () {
        return c.asm.ea.apply(null, arguments);
      };

      c._UmbraTextureLoadGetSerializedSize = function () {
        return c.asm.fa.apply(null, arguments);
      };

      c._UmbraTextureLoadSerialize = function () {
        return c.asm.ga.apply(null, arguments);
      };

      c._UmbraGeodeticToEcef = function () {
        return c.asm.ha.apply(null, arguments);
      };

      c._UmbraEcefToGeodetic = function () {
        return c.asm.ia.apply(null, arguments);
      };

      c._UmbraTextureGetMipmapLevelByteSize = function () {
        return c.asm.ja.apply(null, arguments);
      };

      c._UmbraTextureGetMipmapLevelOffset = function () {
        return c.asm.ka.apply(null, arguments);
      };

      var Ac = c._malloc = function () {
        return c.asm.la.apply(null, arguments);
      };

      c._UmbraMeshLoadFinishExternal = function () {
        return c.asm.ma.apply(null, arguments);
      };

      var S = c._free = function () {
        return c.asm.na.apply(null, arguments);
      };

      c._UmbraConfigInit = function () {
        return c.asm.oa.apply(null, arguments);
      };

      c._UmbraSetAllocator = function () {
        return c.asm.pa.apply(null, arguments);
      };

      c._UmbraSetLogger = function () {
        return c.asm.qa.apply(null, arguments);
      };

      c._UmbraSetHttp = function () {
        return c.asm.ra.apply(null, arguments);
      };

      c._UmbraClientCreate = function () {
        return c.asm.sa.apply(null, arguments);
      };

      c._UmbraClientDestroy = function () {
        return c.asm.ta.apply(null, arguments);
      };

      c._UmbraGetLibraryInfo = function () {
        return c.asm.ua.apply(null, arguments);
      };

      c._UmbraEnvironmentInfoDefaults = function () {
        return c.asm.va.apply(null, arguments);
      };

      c._UmbraRuntimeCreate = function () {
        return c.asm.wa.apply(null, arguments);
      };

      c._UmbraRuntimeDestroy = function () {
        return c.asm.xa.apply(null, arguments);
      };

      c._UmbraRuntimeUpdate = function () {
        return c.asm.ya.apply(null, arguments);
      };

      c._UmbraRuntimeGetStreamingState = function () {
        return c.asm.za.apply(null, arguments);
      };

      c._UmbraRuntimeNextAssetUnload = function () {
        return c.asm.Aa.apply(null, arguments);
      };

      c._UmbraAssetUnloadFinish = function () {
        return c.asm.Ba.apply(null, arguments);
      };

      c._UmbraAssetUnloadGetType = function () {
        return c.asm.Ca.apply(null, arguments);
      };

      c._UmbraAssetUnloadGetUserPointer = function () {
        return c.asm.Da.apply(null, arguments);
      };

      c._UmbraRuntimeNextAssetLoad = function () {
        return c.asm.Ea.apply(null, arguments);
      };

      c._UmbraAssetLoadPrepare = function () {
        return c.asm.Fa.apply(null, arguments);
      };

      c._UmbraAssetLoadFinish = function () {
        return c.asm.Ga.apply(null, arguments);
      };

      c._UmbraAssetLoadAbortRequested = function () {
        return c.asm.Ha.apply(null, arguments);
      };

      c._UmbraVertexAttributeGetElementByteSize = function () {
        return c.asm.Ia.apply(null, arguments);
      };

      c._UmbraMeshLoadGetData = function () {
        return c.asm.Ja.apply(null, arguments);
      };

      c._UmbraMeshStreamSetBuffers = function () {
        return c.asm.Ka.apply(null, arguments);
      };

      c._UmbraMeshStreamDone = function () {
        return c.asm.La.apply(null, arguments);
      };

      c._UmbraMeshStreamNext = function () {
        return c.asm.Ma.apply(null, arguments);
      };

      c._UmbraMaterialLoadGetInfo = function () {
        return c.asm.Na.apply(null, arguments);
      };

      c._UmbraTextureLoadGetData = function () {
        return c.asm.Oa.apply(null, arguments);
      };

      c._UmbraTextureMetaDataLoadGetData = function () {
        return c.asm.Pa.apply(null, arguments);
      };

      c._UmbraTextureMetaDataGetClassificationCount = function () {
        return c.asm.Qa.apply(null, arguments);
      };

      c._UmbraTextureMetaDataGetClassification = function () {
        return c.asm.Ra.apply(null, arguments);
      };

      c._UmbraTextureMetaDataGetClassificationAmount = function () {
        return c.asm.Sa.apply(null, arguments);
      };

      c._UmbraSceneCreate = function () {
        return c.asm.Ta.apply(null, arguments);
      };

      c._UmbraSceneCreatePublic = function () {
        return c.asm.Ua.apply(null, arguments);
      };

      c._UmbraSceneCreateLocal = function () {
        return c.asm.Va.apply(null, arguments);
      };

      c._UmbraSceneDestroy = function () {
        return c.asm.Wa.apply(null, arguments);
      };

      c._UmbraSceneGetConnectionStatus = function () {
        return c.asm.Xa.apply(null, arguments);
      };

      c._UmbraSceneGetInfo = function () {
        return c.asm.Ya.apply(null, arguments);
      };

      c._UmbraSceneSetTransform = function () {
        return c.asm.Za.apply(null, arguments);
      };

      c._UmbraSceneCopyCreate = function () {
        return c.asm._a.apply(null, arguments);
      };

      c._UmbraSceneCopyDestroy = function () {
        return c.asm.$a.apply(null, arguments);
      };

      c._UmbraSceneCopyGetStatus = function () {
        return c.asm.ab.apply(null, arguments);
      };

      c._UmbraSceneCopyGetError = function () {
        return c.asm.bb.apply(null, arguments);
      };

      c._UmbraViewCreate = function () {
        return c.asm.cb.apply(null, arguments);
      };

      c._UmbraViewDestroy = function () {
        return c.asm.db.apply(null, arguments);
      };

      c._UmbraViewUpdateRendering = function () {
        return c.asm.eb.apply(null, arguments);
      };

      c._UmbraViewUpdateFilter = function () {
        return c.asm.fb.apply(null, arguments);
      };

      c._UmbraViewGetCompleted = function () {
        return c.asm.gb.apply(null, arguments);
      };

      c._UmbraViewResetRenderables = function () {
        return c.asm.hb.apply(null, arguments);
      };

      c._UmbraViewNextRenderables = function () {
        return c.asm.ib.apply(null, arguments);
      };

      c._UmbraViewRayQuery = function () {
        return c.asm.jb.apply(null, arguments);
      };

      c._UmbraSendInternalMessage = function () {
        return c.asm.kb.apply(null, arguments);
      };

      var tb = c.___getTypeName = function () {
        return c.asm.lb.apply(null, arguments);
      };

      c.___embind_register_native_and_builtin_types = function () {
        return c.asm.mb.apply(null, arguments);
      };

      var oa = c.stackSave = function () {
        return c.asm.nb.apply(null, arguments);
      },
          ma = c.stackAlloc = function () {
        return c.asm.ob.apply(null, arguments);
      },
          pa = c.stackRestore = function () {
        return c.asm.pb.apply(null, arguments);
      },
          Bc = c.dynCall_vi = function () {
        return c.asm.qb.apply(null, arguments);
      };

      c.dynCall_v = function () {
        return c.asm.rb.apply(null, arguments);
      };

      c.dynCall_iiiiiiiiii = function () {
        return c.asm.sb.apply(null, arguments);
      };

      c.dynCall_viiiiiiiii = function () {
        return c.asm.tb.apply(null, arguments);
      };

      c.dynCall_iiiii = function () {
        return c.asm.ub.apply(null, arguments);
      };

      c.dynCall_iiii = function () {
        return c.asm.vb.apply(null, arguments);
      };

      c.dynCall_iii = function () {
        return c.asm.wb.apply(null, arguments);
      };

      c.dynCall_ii = function () {
        return c.asm.xb.apply(null, arguments);
      };

      c.dynCall_vii = function () {
        return c.asm.yb.apply(null, arguments);
      };

      c.dynCall_iiiiii = function () {
        return c.asm.zb.apply(null, arguments);
      };

      c.dynCall_viiiii = function () {
        return c.asm.Ab.apply(null, arguments);
      };

      c.dynCall_iiiiiiii = function () {
        return c.asm.Bb.apply(null, arguments);
      };

      c.dynCall_viiiiiii = function () {
        return c.asm.Cb.apply(null, arguments);
      };

      c.dynCall_i = function () {
        return c.asm.Db.apply(null, arguments);
      };

      var Cc = c.dynCall_viii = function () {
        return c.asm.Eb.apply(null, arguments);
      };

      c.dynCall_viiii = function () {
        return c.asm.Fb.apply(null, arguments);
      };

      c.dynCall_jiji = function () {
        return c.asm.Gb.apply(null, arguments);
      };

      c.dynCall_iidiiii = function () {
        return c.asm.Hb.apply(null, arguments);
      };

      c.dynCall_viiiiii = function () {
        return c.asm.Ib.apply(null, arguments);
      };

      c.asm = Ec;

      c.cwrap = function (a, b, d, e) {
        d = d || [];
        var f = d.every(function (a) {
          return "number" === a;
        });
        return "string" !== b && f && !e ? ka(a) : function () {
          return la(a, b, d, arguments);
        };
      };

      var Fc;

      c.then = function (a) {
        if (Fc) a(c);else {
          var b = c.onRuntimeInitialized;

          c.onRuntimeInitialized = function () {
            b && b();
            a(c);
          };
        }
        return c;
      };

      function Qb(a) {
        this.name = "ExitStatus";
        this.message = "Program terminated with exit(" + a + ")";
        this.status = a;
      }

      Ja = function Gc() {
        Fc || Hc();
        Fc || (Ja = Gc);
      };

      function Hc() {
        function a() {
          if (!Fc && (Fc = !0, !A)) {
            Ba(Da);
            Ba(Ea);
            if (c.onRuntimeInitialized) c.onRuntimeInitialized();
            if (c.postRun) for ("function" == typeof c.postRun && (c.postRun = [c.postRun]); c.postRun.length;) {
              var a = c.postRun.shift();
              Ga.unshift(a);
            }
            Ba(Ga);
          }
        }

        if (!(0 < H)) {
          if (c.preRun) for ("function" == typeof c.preRun && (c.preRun = [c.preRun]); c.preRun.length;) {
            Ha();
          }
          Ba(Ca);
          0 < H || (c.setStatus ? (c.setStatus("Running..."), setTimeout(function () {
            setTimeout(function () {
              c.setStatus("");
            }, 1);
            a();
          }, 1)) : a());
        }
      }

      c.run = Hc;
      if (c.preInit) for ("function" == typeof c.preInit && (c.preInit = [c.preInit]); 0 < c.preInit.length;) {
        c.preInit.pop()();
      }
      Hc();
      c.maxBytesDownloaded = 0;
      c.minBytesDownloaded = 0;
      c.URLsDownloaded = new Set([]);
      c.wgetRequests = Z;

      function Oa(a, b, d, e, f, g, k, h, l, p, u) {
        var q = D(a);
        b = D(b);
        g = D(g);
        var t = new XMLHttpRequest();
        t.open(b, q, !0);
        if ("GET" != b || 0 != g.length) t.withCredentials = !0;
        t.responseType = "arraybuffer";
        var x = nc();

        t.onload = function () {
          if (200 == t.status) {
            var b = new Uint8Array(t.response),
                g = c.URLsDownloaded;
            c.maxBytesDownloaded += t.response.byteLength;
            g.has(a) || (g.add(a), c.minBytesDownloaded += t.response.byteLength);
            p ? b.length != u ? c.dynCall_viii(f, x, d, 0) : (_E.set(b, p), c.dynCall_viiii(e, x, d, null, 0)) : (g = Ac(b.length), _E.set(b, g), c.dynCall_viiii(e, x, d, g, b.length), S(g));
          } else c.dynCall_viii(f, x, d, t.status);

          delete Z[x];
        };

        t.onerror = function () {
          c.dynCall_viii(f, x, d, t.status);
          delete Z[x];
        };

        t.onabort = function () {
          delete Z[x];
        };

        0 != g.length && t.setRequestHeader("Authorization", "Basic " + btoa(g + ":"));
        l = D(l).split("\n");
        if (2 <= l.length) for (q = 0; q < l.length; q += 2) {
          t.setRequestHeader(l[q], l[q + 1]);
        }
        "POST" == b ? t.send(C.slice(k, k + h)) : t.send(null);
        Z[x] = t;
        return x;
      }
      return UmbraNativeAPI;
    };
  }();

  // Generated at 2020-08-18 15:23:39
  var MatrixFormat;

  (function (MatrixFormat) {
    MatrixFormat[MatrixFormat["ColumnMajor"] = 0] = "ColumnMajor";
    MatrixFormat[MatrixFormat["RowMajor"] = 1] = "RowMajor";
    MatrixFormat[MatrixFormat["Count"] = 2] = "Count";
  })(MatrixFormat || (MatrixFormat = {}));

  var TextureType;

  (function (TextureType) {
    TextureType[TextureType["Diffuse"] = 0] = "Diffuse";
    TextureType[TextureType["Normal"] = 1] = "Normal";
    TextureType[TextureType["Specular"] = 2] = "Specular";
    TextureType[TextureType["MetaIndex"] = 3] = "MetaIndex";
    TextureType[TextureType["Count"] = 4] = "Count";
  })(TextureType || (TextureType = {}));

  var TextureFormat;

  (function (TextureFormat) {
    TextureFormat[TextureFormat["RGBA32"] = 0] = "RGBA32";
    TextureFormat[TextureFormat["RGB24"] = 1] = "RGB24";
    TextureFormat[TextureFormat["BC1"] = 2] = "BC1";
    TextureFormat[TextureFormat["BC3"] = 3] = "BC3";
    TextureFormat[TextureFormat["BC4"] = 4] = "BC4";
    TextureFormat[TextureFormat["BC5"] = 5] = "BC5";
    TextureFormat[TextureFormat["ETC1_RGB"] = 6] = "ETC1_RGB";
    TextureFormat[TextureFormat["RGBA_FLOAT32"] = 7] = "RGBA_FLOAT32";
    TextureFormat[TextureFormat["UNC1"] = 8] = "UNC1";
    TextureFormat[TextureFormat["JPEG"] = 9] = "JPEG";
    TextureFormat[TextureFormat["PNG"] = 10] = "PNG";
    TextureFormat[TextureFormat["BMP"] = 11] = "BMP";
    TextureFormat[TextureFormat["PSD"] = 12] = "PSD";
    TextureFormat[TextureFormat["TGA"] = 13] = "TGA";
    TextureFormat[TextureFormat["GIF"] = 14] = "GIF";
    TextureFormat[TextureFormat["HDR"] = 15] = "HDR";
    TextureFormat[TextureFormat["PIC"] = 16] = "PIC";
    TextureFormat[TextureFormat["PNM"] = 17] = "PNM";
    TextureFormat[TextureFormat["ASTC_4X4"] = 18] = "ASTC_4X4";
    TextureFormat[TextureFormat["ASTC_5X4"] = 19] = "ASTC_5X4";
    TextureFormat[TextureFormat["ASTC_5X5"] = 20] = "ASTC_5X5";
    TextureFormat[TextureFormat["ASTC_6X5"] = 21] = "ASTC_6X5";
    TextureFormat[TextureFormat["ASTC_6X6"] = 22] = "ASTC_6X6";
    TextureFormat[TextureFormat["ASTC_8X5"] = 23] = "ASTC_8X5";
    TextureFormat[TextureFormat["ASTC_8X6"] = 24] = "ASTC_8X6";
    TextureFormat[TextureFormat["ASTC_10X5"] = 25] = "ASTC_10X5";
    TextureFormat[TextureFormat["ASTC_10X6"] = 26] = "ASTC_10X6";
    TextureFormat[TextureFormat["ASTC_8X8"] = 27] = "ASTC_8X8";
    TextureFormat[TextureFormat["ASTC_10X8"] = 28] = "ASTC_10X8";
    TextureFormat[TextureFormat["ASTC_10X10"] = 29] = "ASTC_10X10";
    TextureFormat[TextureFormat["ASTC_12X10"] = 30] = "ASTC_12X10";
    TextureFormat[TextureFormat["ASTC_12X12"] = 31] = "ASTC_12X12";
    TextureFormat[TextureFormat["ARGB32"] = 32] = "ARGB32";
    TextureFormat[TextureFormat["R8"] = 33] = "R8";
    TextureFormat[TextureFormat["PVRTC1_RGB4"] = 34] = "PVRTC1_RGB4";
    TextureFormat[TextureFormat["PVRTC1_RGBA4"] = 35] = "PVRTC1_RGBA4";
    TextureFormat[TextureFormat["UINT8"] = 36] = "UINT8";
    TextureFormat[TextureFormat["UINT16"] = 37] = "UINT16";
    TextureFormat[TextureFormat["UINT32"] = 38] = "UINT32";
    TextureFormat[TextureFormat["RGB565"] = 39] = "RGB565";
    TextureFormat[TextureFormat["RG8"] = 40] = "RG8";
    TextureFormat[TextureFormat["RG16F"] = 41] = "RG16F";
    TextureFormat[TextureFormat["OPENEXR"] = 42] = "OPENEXR";
    TextureFormat[TextureFormat["RGBA_FLOAT16"] = 43] = "RGBA_FLOAT16";
    TextureFormat[TextureFormat["RGB_FLOAT16"] = 44] = "RGB_FLOAT16";
    TextureFormat[TextureFormat["RGB_FLOAT32"] = 45] = "RGB_FLOAT32";
    TextureFormat[TextureFormat["BC6H"] = 46] = "BC6H";
    TextureFormat[TextureFormat["BC7"] = 47] = "BC7";
    TextureFormat[TextureFormat["Count"] = 48] = "Count";
  })(TextureFormat || (TextureFormat = {}));

  var ColorSpace;

  (function (ColorSpace) {
    ColorSpace[ColorSpace["Linear"] = 0] = "Linear";
    ColorSpace[ColorSpace["SRGB"] = 1] = "SRGB";
    ColorSpace[ColorSpace["Count"] = 2] = "Count";
  })(ColorSpace || (ColorSpace = {}));

  var VertexAttribute;

  (function (VertexAttribute) {
    VertexAttribute[VertexAttribute["Position"] = 0] = "Position";
    VertexAttribute[VertexAttribute["TextureCoordinate"] = 1] = "TextureCoordinate";
    VertexAttribute[VertexAttribute["Normal"] = 2] = "Normal";
    VertexAttribute[VertexAttribute["Tangent"] = 3] = "Tangent";
    VertexAttribute[VertexAttribute["Count"] = 4] = "Count";
  })(VertexAttribute || (VertexAttribute = {}));

  var BufferFlags;

  (function (BufferFlags) {
    BufferFlags[BufferFlags["UncachedMemory"] = 1] = "UncachedMemory";
  })(BufferFlags || (BufferFlags = {}));

  var LogLevel;

  (function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Count"] = 4] = "Count";
  })(LogLevel || (LogLevel = {}));

  var TransferStatus;

  (function (TransferStatus) {
    TransferStatus[TransferStatus["Inactive"] = 0] = "Inactive";
    TransferStatus[TransferStatus["Active"] = 1] = "Active";
    TransferStatus[TransferStatus["Complete"] = 2] = "Complete";
    TransferStatus[TransferStatus["Error"] = 3] = "Error";
    TransferStatus[TransferStatus["Count"] = 4] = "Count";
  })(TransferStatus || (TransferStatus = {}));

  var HeaderError;

  (function (HeaderError) {
    HeaderError[HeaderError["Found"] = 0] = "Found";
    HeaderError[HeaderError["Not_Found"] = 1] = "Not_Found";
    HeaderError[HeaderError["Transfer_Not_Complete"] = 2] = "Transfer_Not_Complete";
    HeaderError[HeaderError["Buffer_Too_Small"] = 3] = "Buffer_Too_Small";
    HeaderError[HeaderError["Count"] = 4] = "Count";
  })(HeaderError || (HeaderError = {}));

  var HttpMethod;

  (function (HttpMethod) {
    HttpMethod[HttpMethod["Get"] = 0] = "Get";
    HttpMethod[HttpMethod["Post"] = 1] = "Post";
    HttpMethod[HttpMethod["Put"] = 2] = "Put";
    HttpMethod[HttpMethod["Delete"] = 3] = "Delete";
    HttpMethod[HttpMethod["Count"] = 4] = "Count";
  })(HttpMethod || (HttpMethod = {}));

  var LibraryInfo;

  (function (LibraryInfo) {
    LibraryInfo[LibraryInfo["Version"] = 0] = "Version";
    LibraryInfo[LibraryInfo["Copyright"] = 1] = "Copyright";
    LibraryInfo[LibraryInfo["BuildTime"] = 2] = "BuildTime";
    LibraryInfo[LibraryInfo["BuildId"] = 3] = "BuildId";
    LibraryInfo[LibraryInfo["Count"] = 4] = "Count";
  })(LibraryInfo || (LibraryInfo = {}));

  var InvalidUserPointer;

  (function (InvalidUserPointer) {
    InvalidUserPointer[InvalidUserPointer["InvalidUserPointer"] = 0] = "InvalidUserPointer";
  })(InvalidUserPointer || (InvalidUserPointer = {}));

  var TextureSupportFlags;

  (function (TextureSupportFlags) {
    TextureSupportFlags[TextureSupportFlags["None"] = 0] = "None";
    TextureSupportFlags[TextureSupportFlags["BC1"] = 1] = "BC1";
    TextureSupportFlags[TextureSupportFlags["BC2"] = 2] = "BC2";
    TextureSupportFlags[TextureSupportFlags["BC3"] = 4] = "BC3";
    TextureSupportFlags[TextureSupportFlags["BC4"] = 8] = "BC4";
    TextureSupportFlags[TextureSupportFlags["BC5"] = 16] = "BC5";
    TextureSupportFlags[TextureSupportFlags["BC6H"] = 32] = "BC6H";
    TextureSupportFlags[TextureSupportFlags["BC7"] = 64] = "BC7";
    TextureSupportFlags[TextureSupportFlags["ASTC"] = 128] = "ASTC";
    TextureSupportFlags[TextureSupportFlags["ETC1"] = 256] = "ETC1";
    TextureSupportFlags[TextureSupportFlags["ETC2"] = 512] = "ETC2";
    TextureSupportFlags[TextureSupportFlags["EAC_R"] = 1024] = "EAC_R";
    TextureSupportFlags[TextureSupportFlags["EAC_RG"] = 2048] = "EAC_RG";
    TextureSupportFlags[TextureSupportFlags["PVRTC1"] = 4096] = "PVRTC1";
    TextureSupportFlags[TextureSupportFlags["PVRTC2"] = 8192] = "PVRTC2";
    TextureSupportFlags[TextureSupportFlags["ATC"] = 16384] = "ATC";
    TextureSupportFlags[TextureSupportFlags["HalfFloat"] = 32768] = "HalfFloat";
    TextureSupportFlags[TextureSupportFlags["Float"] = 65536] = "Float";
    TextureSupportFlags[TextureSupportFlags["All"] = 2147483647] = "All";
  })(TextureSupportFlags || (TextureSupportFlags = {}));

  var RuntimeFlags;

  (function (RuntimeFlags) {
    RuntimeFlags[RuntimeFlags["NeverUnload"] = 1] = "NeverUnload";
    RuntimeFlags[RuntimeFlags["ExclusiveRendering"] = 2] = "ExclusiveRendering";
    RuntimeFlags[RuntimeFlags["EnableRayQueries"] = 4] = "EnableRayQueries";
  })(RuntimeFlags || (RuntimeFlags = {}));

  var ConnectionStatus;

  (function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["Connected"] = 0] = "Connected";
    ConnectionStatus[ConnectionStatus["Connecting"] = 1] = "Connecting";
    ConnectionStatus[ConnectionStatus["ConnectionError"] = 2] = "ConnectionError";
    ConnectionStatus[ConnectionStatus["Count"] = 3] = "Count";
  })(ConnectionStatus || (ConnectionStatus = {}));

  var DepthRange;

  (function (DepthRange) {
    DepthRange[DepthRange["ZeroToOne"] = 0] = "ZeroToOne";
    DepthRange[DepthRange["MinusOneToOne"] = 1] = "MinusOneToOne";
    DepthRange[DepthRange["Count"] = 2] = "Count";
  })(DepthRange || (DepthRange = {}));

  var FilterShapeType;

  (function (FilterShapeType) {
    FilterShapeType[FilterShapeType["Sphere"] = 0] = "Sphere";
    FilterShapeType[FilterShapeType["Cylinder"] = 1] = "Cylinder";
    FilterShapeType[FilterShapeType["None"] = 2] = "None";
    FilterShapeType[FilterShapeType["Count"] = 3] = "Count";
  })(FilterShapeType || (FilterShapeType = {}));

  var SceneCopyStatus;

  (function (SceneCopyStatus) {
    SceneCopyStatus[SceneCopyStatus["InProgress"] = 0] = "InProgress";
    SceneCopyStatus[SceneCopyStatus["Done"] = 1] = "Done";
    SceneCopyStatus[SceneCopyStatus["Error"] = 2] = "Error";
    SceneCopyStatus[SceneCopyStatus["Count"] = 3] = "Count";
  })(SceneCopyStatus || (SceneCopyStatus = {}));

  var SceneCopyDestinationType;

  (function (SceneCopyDestinationType) {
    SceneCopyDestinationType[SceneCopyDestinationType["File"] = 0] = "File";
    SceneCopyDestinationType[SceneCopyDestinationType["Directory"] = 1] = "Directory";
    SceneCopyDestinationType[SceneCopyDestinationType["Cloud"] = 2] = "Cloud";
    SceneCopyDestinationType[SceneCopyDestinationType["FormatObj"] = 3] = "FormatObj";
    SceneCopyDestinationType[SceneCopyDestinationType["Count"] = 4] = "Count";
  })(SceneCopyDestinationType || (SceneCopyDestinationType = {}));

  var SceneCopySourceType;

  (function (SceneCopySourceType) {
    SceneCopySourceType[SceneCopySourceType["Directory"] = 0] = "Directory";
    SceneCopySourceType[SceneCopySourceType["Cloud"] = 1] = "Cloud";
    SceneCopySourceType[SceneCopySourceType["Count"] = 2] = "Count";
  })(SceneCopySourceType || (SceneCopySourceType = {}));

  var AssetType;

  (function (AssetType) {
    AssetType[AssetType["Material"] = 0] = "Material";
    AssetType[AssetType["Texture"] = 1] = "Texture";
    AssetType[AssetType["Mesh"] = 2] = "Mesh";
    AssetType[AssetType["Count"] = 3] = "Count";
  })(AssetType || (AssetType = {}));

  var AssetLoadResult;

  (function (AssetLoadResult) {
    AssetLoadResult[AssetLoadResult["Failure"] = 0] = "Failure";
    AssetLoadResult[AssetLoadResult["OutOfMemory"] = 1] = "OutOfMemory";
    AssetLoadResult[AssetLoadResult["Aborted"] = 2] = "Aborted";
    AssetLoadResult[AssetLoadResult["Success"] = 3] = "Success";
    AssetLoadResult[AssetLoadResult["Count"] = 4] = "Count";
  })(AssetLoadResult || (AssetLoadResult = {}));

  var RayQueryFlags;

  (function (RayQueryFlags) {
    RayQueryFlags[RayQueryFlags["BackfaceCulling"] = 1] = "BackfaceCulling";
  })(RayQueryFlags || (RayQueryFlags = {}));

  var Primitive = {
    Int8: 'Int8',
    Int16: 'Int16',
    Int32: 'Int32',
    Uint8: 'Uint8',
    Uint16: 'Uint16',
    Uint32: 'Uint32',
    Float32: 'Float32',
    Float64: 'Float64'
  };



  var Assets = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get AssetType () { return AssetType; },
    get AssetLoadResult () { return AssetLoadResult; }
  });

  class WorkerPool {
    constructor(numWorkers, workerScriptURL) {
      var _this = this;

      // Array of web workers
      this.workers = []; // Array of corresponding worker queues

      this.infos = [];
      this.aborted = false;

      if (!window['Worker']) {
        console.error('WebWorker support required');
        return;
      }

      var _loop = function _loop(i) {
        var worker = new Worker(workerScriptURL);

        worker.onmessage = function (msg) {
          var _this$infos$i$queue$s = _this.infos[i].queue.shift(),
              userData = _this$infos$i$queue$s.userData,
              resolve = _this$infos$i$queue$s.resolve;

          if (_this.aborted) {
            return;
          }

          if (!msg.data['finalResponse']) {
            console.error('emscripten_worker_respond_provisionally is not supported');
            return;
          }

          resolve({
            buffer: msg.data.data,
            userData: userData
          });
        };

        worker.onerror = function (msg) {
          console.error("Worker call failed. Is worker's script URL \"".concat(workerScriptURL, "\" correct? Message:"), msg.message); // The queue is empty if "onerror" was called for worker load failure, so we need this check.

          if (_this.infos[i].queue.length > 0) {
            var _this$infos$i$queue$s2 = _this.infos[i].queue.shift(),
                userData = _this$infos$i$queue$s2.userData,
                reject = _this$infos$i$queue$s2.reject;

            reject({
              userData: userData,
              error: msg
            });
          }
        };

        var info = {
          queue: []
        };

        _this.workers.push(worker);

        _this.infos.push(info);
      };

      for (var i = 0; i < numWorkers; i++) {
        _loop(i);
      }
    }

    destroy() {
      this.aborted = true;

      for (var w of this.workers) {
        w.terminate();
      }
    }
    /**
     * Sends a binary message to a WebWorker.
     */


    callWorker(id, funcName, message, userData) {
      var _this2 = this;

      var transferObject = {
        funcName: funcName,
        callbackId: '',
        data: message
      }; // We transfer the ownership of "message" to the worker. This means it can't point
      // to a view of the Emscripten heap because the whole heap would get transferred!

      this.workers[id].postMessage(transferObject, [message.buffer]); // The promise will settle when a worker response triggers "onmessage" callback
      // above and calls one the "resolve" and "reject" functions off the queue.
      // The worker is guaranteed to handle and respond to messages in order, so this
      // all works out nicely.

      return new Promise(function (resolve, reject) {
        _this2.infos[id].queue.push({
          resolve: resolve,
          reject: reject,
          userData: userData
        });
      });
    }

    findMostAvailableWorker() {
      var best_id = -1;
      var best = 1e9;

      for (var i = 0; i < this.workers.length; i++) {
        if (this.infos[i].queue.length < best) {
          best_id = i;
          best = this.infos[i].queue.length;
        }
      }

      return best_id;
    }

    shortestQueueLength() {
      var shortest = 1e9;

      for (var info of this.infos) {
        shortest = Math.min(shortest, info.queue.length);
      }

      return shortest;
    }

    numLoadsPending() {
      var sum = 0;

      for (var info of this.infos) {
        sum += info.queue.length;
      }

      return sum;
    }

    numWorkers() {
      return this.workers.length;
    }

  }

  var MAX_LIGHTS = 32;
  var MAX_NUM_WORKERS = 8;

  function assertInteger(x) {
    if (!Number.isInteger(x)) {
      throw new Error('Value was not integer: ' + x.toString());
    }
  }

  function isArrayLike(x) {
    return Array.isArray(x) || ArrayBuffer.isView(x) && !(x instanceof DataView);
  }

  function hardwareConcurrency() {
    if ('hardwareConcurrency' in navigator) {
      return navigator.hardwareConcurrency;
    }

    return 1;
  }
  /**
   * We need to use a factory here since the native API classes depend on the Emscripten generated wasm code
   * that can't be loaded as a regular ES6 module. The "Module" object allows access to C++ functions and the
   * Emscripten heap.
   */


  var create = function create(Module) {
    var primitiveToArrayType = new Map([[Primitive.Int8, Int8Array], [Primitive.Int16, Int16Array], [Primitive.Int32, Int32Array], [Primitive.Uint8, Uint8Array], [Primitive.Uint16, Uint16Array], [Primitive.Uint32, Uint32Array], [Primitive.Float32, Float32Array], [Primitive.Float64, Float64Array]]); // gl.texImage2D expects these texture "type" and typed array combinations.
    // See https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D

    var textureFormatToPrimitive = new Map([[TextureFormat.RGB565, Primitive.Uint16], [TextureFormat.RGBA32, Primitive.Uint8], [TextureFormat.RG8, Primitive.Uint8], [TextureFormat.RG16F, Primitive.Uint16], [TextureFormat.RGB_FLOAT32, Primitive.Float32], [TextureFormat.RGB24, Primitive.Uint8], [TextureFormat.UINT32, Primitive.Uint32]]);
    /**
     * A Buffer is a block of memory in the Emscripten heap. Typed arrays may get detached when Emscripten
     * memory growth happens, so any JS code that wants to read from the heap needs to create its typed views
     * right before they are used.
     *
     * The views are safe to use during synchronous execution, but for example a 'yield' in a generator may
     * trigger memory growth before the caller gets the returned value.
     */

    class Buffer {
      constructor(size) {
        if (size === 0) {
          throw new Error('Buffer size was zero');
        }

        this.ptr = Module.umbraAlloc(size);

        if (this.ptr === 0) {
          throw new Error("Allocation of ".concat(size, " bytes failed."));
        }

        this.size = size; // In bytes
      }

      destroy() {
        Module.umbraFree(this.ptr);
        this.ptr = 0;
        this.size = 0;
      }
      /**
       * A destructive resize operation that never shrinks the buffer.
       * NOTE: Does *not* copy the old data over.
       */


      ensureSize(newSize) {
        if (this.size < newSize) {
          this.destroy();
          this.ptr = Module.umbraAlloc(newSize);

          if (this.ptr === 0) {
            throw new Error("Buffer growth to ".concat(newSize, " bytes failed."));
          }

          this.size = newSize;
        }
      }

      floats() {
        return new Float32Array(Module.HEAPF32.buffer, this.ptr, this.size / 4);
      }

      bytes() {
        return new Uint8Array(Module.HEAPU8.buffer, this.ptr, this.size);
      }

    }
    /**
     * A HeapView holds a reference to a block of Emscripten heap memory.
     * Calling getArray() returns a typed view into the block. This class is needed because
     * regular TypedArray views into the heap get neutered (become unusable) at memory growth,
     * so we can't safely pass them to the application.
     */


    class HeapView {
      constructor(ptr, size, type) {
        this.primitiveToHeap = new Map([[Primitive.Int8, 'HEAP8'], [Primitive.Int16, 'HEAP16'], [Primitive.Int32, 'HEAP32'], [Primitive.Uint8, 'HEAPU8'], [Primitive.Uint16, 'HEAPU16'], [Primitive.Uint32, 'HEAPU32'], [Primitive.Float32, 'HEAPF32'], [Primitive.Float64, 'HEAPF64']]);
        this.ptr = ptr;
        this.size = size; // Find out which Emscripten heap view we need to use and which TypedArray constructor to call.

        if (this.primitiveToHeap.has(type) && primitiveToArrayType.has(type)) {
          this.heapName = this.primitiveToHeap.get(type);
          this.arrayType = primitiveToArrayType.get(type);
        } else {
          throw new TypeError("BufferView constructor got invalid type '".concat(type, "'"));
        }
      }

      getArray() {
        // eslint-disable-next-line new-cap
        return new this.arrayType(Module[this.heapName].buffer, this.ptr, this.size / this.arrayType.BYTES_PER_ELEMENT);
      }

    } // Struct field offsets are required for zero-copy interop


    var renderableStructOffsets = Module.getRenderableMemberOffsets();

    function copyMat4(buf, elements) {
      for (var i = 0; i < 16; i++) {
        buf[i] = elements[i];
      }
    }

    function copyVec3(buf, elements) {
      buf[0] = elements[0];
      buf[1] = elements[1];
      buf[2] = elements[2];
    }

    class Client {
      constructor() {
        this.configPtr = Module.umbraAlloc(Module.CONFIG_SIZE);
        Module.configInit(this.configPtr);
        this.ptr = Module.clientCreate('UmbraJS', this.configPtr);
      }

      destroy() {
        Module.clientDestroy(this.ptr);
        Module.umbraFree(this.configPtr);
        this.ptr = 0;
      }

    }

    class NativeScene {
      constructor(ptr) {
        this.matrixBuffer = new Buffer(16 * 4);
        this.infoBuffer = new Buffer(Module.sceneInfoSize);
        this.ptr = ptr;
      }

      destroy() {
        this.matrixBuffer.destroy();
        this.infoBuffer.destroy();
        Module.sceneDestroy(this.ptr);
        this.ptr = 0;
      }

      connectionStatus() {
        return Module.sceneGetConnectionStatus(this.ptr);
      }

      getInfo() {
        Module.sceneGetInfo(this.ptr, this.infoBuffer.ptr);
        return Module.deserializeSceneInfo(this.infoBuffer.ptr);
      }

      isConnected() {
        return this.connectionStatus() === ConnectionStatus.Connected;
      }

      setTransform(matrix) {
        if (!isArrayLike(matrix)) {
          throw new TypeError('Matrix should be an array');
        }

        if (matrix.length !== 16) {
          throw new TypeError('Matrix should be of size 4x4');
        }

        copyMat4(this.matrixBuffer.floats(), matrix);
        Module.sceneSetTransform(this.ptr, this.matrixBuffer.ptr);
      }

    }

    class View {
      constructor(ptr, runtimeAssets) {
        this.ptr = ptr;
        this.matrixBuffer = new Buffer(16 * 4);
        this.vectorBuffer = new Buffer(4 * 4);
        this.lightBuffer = new Buffer(MAX_LIGHTS * 3 * 4);
        this.temp = undefined;
        this.runtimeAssets = runtimeAssets;
      }

      destroy() {
        this.matrixBuffer.destroy();
        this.vectorBuffer.destroy();
        this.lightBuffer.destroy();

        if (this.temp) {
          this.temp.destroy();
        }

        Module.viewDestroy(this.ptr);
        this.ptr = 0;
      }

      setCamera(worldToClip, positionVector, quality) {
        var lights = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var depthRange = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DepthRange.MinusOneToOne;
        var matrixFormat = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : MatrixFormat.ColumnMajor;

        if (!isArrayLike(worldToClip)) {
          throw new TypeError('Camera matrix should be an array');
        }

        if (!isArrayLike(positionVector)) {
          throw new TypeError('Position should be an array');
        }

        if (typeof quality !== 'number') {
          throw new TypeError('Quality should be a number');
        }

        if (worldToClip.length !== 16) {
          throw new TypeError('WorldToClip matrix should be of size 4x4');
        }

        if (positionVector.length !== 3) {
          throw new TypeError('Position vector should be of length 3');
        }

        copyMat4(this.matrixBuffer.floats(), worldToClip);
        copyVec3(this.vectorBuffer.floats(), positionVector);

        if (lights) {
          if (lights.length > MAX_LIGHTS) {
            throw new Error('Too many lights given');
          }

          var buffer = this.lightBuffer.floats();

          for (var i = 0; i < lights.length; i++) {
            buffer[3 * i + 0] = lights[i][0];
            buffer[3 * i + 1] = lights[i][1];
            buffer[3 * i + 2] = lights[i][2];
          }
        }

        Module.viewUpdateRendering(this.ptr, this.matrixBuffer.ptr, this.vectorBuffer.ptr, depthRange, matrixFormat, quality, this.lightBuffer.ptr, lights.length);
      }

      getVisible(batchSize) {
        assertInteger(batchSize);
        var bufferSize = batchSize * Module.renderableSize; // Check if we should enlarge or allocate the temp buffer

        if (!this.temp || this.temp.size < bufferSize) {
          if (this.temp) {
            this.temp.destroy();
          }

          this.temp = new Buffer(bufferSize);
        }

        var temp = this.temp;
        var strideInWords = Module.renderableSize / 4;
        var bufferWordSize = bufferSize / 4;
        assertInteger(strideInWords);
        assertInteger(bufferWordSize);

        var getView = function getView(arrayType, heap, ptr, ofs) {
          assertInteger(ofs / 4); // eslint-disable-next-line new-cap

          return new arrayType(heap.buffer, ptr + ofs, bufferWordSize - ofs / 4);
        };

        var meshIDs = getView(Uint32Array, Module.HEAPU32, temp.ptr, renderableStructOffsets['mesh']);
        var lodLevels = getView(Int32Array, Module.HEAP32, temp.ptr, renderableStructOffsets['lodLevel']);
        var masks = getView(Uint32Array, Module.HEAPU32, temp.ptr, renderableStructOffsets['visibilityMask']); // const transforms = getView(Float32Array, Module.HEAPF32, temp.ofs, offsets['transform'])

        var scenePointers = getView(Uint32Array, Module.HEAPU32, temp.ptr, renderableStructOffsets['scene']);
        var count = Module.viewNextRenderables(this.ptr, temp.ptr, batchSize);
        var output = [];

        for (var i = 0; i < count; i++) {
          var id = meshIDs[strideInWords * i];
          var lod = lodLevels[strideInWords * i];
          var mask = masks[strideInWords * i];
          var scenePtr = scenePointers[strideInWords * i]; // TODO extract individual transforms too

          output.push({
            id: id,
            mesh: this.runtimeAssets.get(id),
            lod: lod,
            mask: mask,
            scenePtr: scenePtr
          });
        }

        return output;
      }

    }

    class AssetLoad {
      constructor(ptr, assetUserPointer) {
        this.ptr = ptr;
        this.assetType = Module.assetLoadGetType(this.ptr);
        this.type = 'Load' + AssetType[this.assetType];
        this.data = {}; // Type specific asset data set from the outside

        this.assetUserPointer = assetUserPointer;
      }

      prepare() {
        Module.assetLoadPrepare(this.ptr, this.assetUserPointer);
      }

      finish(result) {
        Module.assetLoadFinish(this.ptr, result);
      }

    }

    class AssetUnload {
      constructor(ptr) {
        this.ptr = ptr;
        this.assetType = Module.assetUnloadGetType(this.ptr);
        this.type = 'Unload' + AssetType[this.assetType];
        this.userPointer = Module.assetUnloadGetUserPointer(this.ptr);
      }

      finish() {
        Module.assetUnloadFinish(this.ptr);
      }

    }

    class Runtime {
      constructor(client, _ref, _ref2) {
        var _ref$features = _ref.features,
            features = _ref$features === void 0 ? {
          textureSupportMask: 0,
          formats: [],
          srgb: false,
          halfFloat: false
        } : _ref$features,
            _ref$flags = _ref.flags,
            flags = _ref$flags === void 0 ? 0 : _ref$flags;
        var workerScriptURL = _ref2.workerScriptURL,
            _ref2$numWorkers = _ref2.numWorkers,
            numWorkers = _ref2$numWorkers === void 0 ? 0 : _ref2$numWorkers;
        this.assets = new Map();
        this.nextId = 1;
        this.tempTextureBuffer = new Buffer(1024 * 1024);
        this.tempStreamingStateBuffer = new Buffer(Module.streamingStateSize);
        this.tempDispatchBuffer = new Buffer(1);
        this.stats = {
          numUpdates: 0,
          meshPipelineMemoryUse: 0,
          texturePipelineMemoryUse: 0,
          numWorkerLoadsPending: 0,
          perFrameLoadedTextures: 0,
          perFrameLoadedTextureBytes: 0,
          perFrameLoadedMeshes: 0,
          perFrameLoadedMeshBytes: 0,
          numInstantUnloads: 0,
          assetLoadTimes: new Map()
        };
        this.limits = {
          // A soft upper limit in bytes
          streamingPipeSizeLimit: 1 << 19,
          // A maximum of number loads per worker queue
          maxWorkQueueLength: 10
        };
        this.loadPromises = new Map();
        /**
         * If no normal map formats are supported then force support for
         * BC5 so that textures get transcoded into an uncompressed format.
         */

        var normalFormats = TextureSupportFlags.ETC1 | TextureSupportFlags.ASTC | TextureSupportFlags.PVRTC1 | TextureSupportFlags.BC5;
        var textureSupportMask = features.textureSupportMask;

        if (!(textureSupportMask & normalFormats)) {
          textureSupportMask |= TextureSupportFlags.BC5 | TextureSupportFlags.BC4;
        }

        this.client = client;
        var infoPtr = Module.serializeEnvironmentInfo({
          textureSupportFlags: textureSupportMask,
          localCacheDirectory: null,
          localCacheMaximumByteSize: 0
        }, 0);
        this.ptr = Module.runtimeCreate(client.ptr, infoPtr, flags);
        Module.umbraFree(infoPtr);
        this.platformFeatures = features;
        var scratchSize = Math.max(Module.meshInfoSize, Module.materialInfoSize, Module.textureInfoSize, Module.byteBufferSize);
        this.scratch = new Buffer(scratchSize);
        this.debug = {
          textureFormatsInUse: new Set(),
          platformFeatures: features,
          trackInstantUnloads: false
        }; // Pick the number of workers with the same heuristic as the Web Player

        if (numWorkers == 0) {
          numWorkers = Math.min(Math.max(1, hardwareConcurrency() - 2), MAX_NUM_WORKERS);
        }

        this.workerPool = new WorkerPool(numWorkers, workerScriptURL);
      }

      destroy() {
        this.workerPool.destroy();
        this.tempTextureBuffer.destroy();
        this.tempStreamingStateBuffer.destroy();
        this.tempDispatchBuffer.destroy();
        this.scratch.destroy();
        Module.runtimeDestroy(this.ptr);
        this.client.destroy();
        this.ptr = 0;
      }

      createScenePublic(publicKey) {
        var scenePtr = Module.sceneCreatePublic(this.ptr, publicKey);

        if (!scenePtr) {
          return undefined;
        }

        return new NativeScene(scenePtr);
      }

      createSceneLocal(url) {
        var scenePtr = Module.sceneCreateLocal(this.ptr, url);

        if (!scenePtr) {
          return undefined;
        }

        return new NativeScene(scenePtr);
      }

      setHandlers(handlers) {
        this.handlers = handlers;
      }

      createView() {
        var viewPtr = Module.viewCreate(this.ptr);
        return new View(viewPtr, this.assets);
      }

      update() {
        Module.runtimeUpdate(this.ptr);
      }

      *getAssetUnloads() {
        var p = Module.runtimeNextAssetUnload(this.ptr);

        while (p !== 0) {
          var unload = new AssetUnload(p);
          unload.data = this.assets.get(unload.userPointer);
          yield unload;
          p = Module.runtimeNextAssetUnload(this.ptr);
        }
      }

      dispatchTextureLoad(load) {
        var _this = this;

        return _asyncToGenerator(function* () {
          var infoPtr = _this.scratch.ptr;
          Module.textureLoadGetInfo(load.ptr, infoPtr);
          var texture = Module.deserializeTextureInfo(infoPtr);

          var needsTranscoding = _this.formatNeedsTranscoding(texture.format);

          load.prepare();
          var textureData;
          var uncompressedTexturePtr = 0;

          if (needsTranscoding) {
            var serSize = Module.textureLoadGetSerializedSize(load.ptr);
            var headerSize = Module.textureLoadDispatchHeaderSize;
            var textureLoadDispatchSize = serSize + headerSize;

            _this.tempDispatchBuffer.ensureSize(textureLoadDispatchSize);

            var dispatchBuffer = _this.tempDispatchBuffer;
            var desc = Module.convertAssetLoadToTextureDispatch(load.ptr, load.assetUserPointer, _this.platformFeatures.textureSupportMask, _this.platformFeatures.srgb, dispatchBuffer.ptr, textureLoadDispatchSize);

            if (typeof desc === 'undefined') {
              load.finish(AssetLoadResult.Failure);
              throw new Error('convertAssetLoadToTextureDispatch failed');
            } // We can't tell how big the transcoded texture will be but we assume it will be pretty
            // much the same size as the input. Since both input and output textures can still stay
            // allocated simultaneously, multiply the size with two two get a peak memory use estimate.


            var memoryUseEstimate = textureLoadDispatchSize * 2;
            _this.stats.texturePipelineMemoryUse += memoryUseEstimate;

            var best = _this.workerPool.findMostAvailableWorker();

            var buffer; // Launch the async worker transcode task

            try {
              ;

              var _ref3 = yield _this.workerPool.callWorker(best, 'loadTexture', new Uint8Array(dispatchBuffer.bytes()), // Copy the dispatch buffer
              {
                load: load,
                memoryUse: memoryUseEstimate
              });

              buffer = _ref3.buffer;
            } catch (_ref4) {
              var error = _ref4.error;
              load.finish(AssetLoadResult.Failure);
              throw error;
            }

            _this.stats.texturePipelineMemoryUse -= memoryUseEstimate;
            _this.stats.perFrameLoadedTextures += 1;
            _this.stats.perFrameLoadedTextureBytes += serSize;
            uncompressedTexturePtr = Module.umbraAlloc(buffer.byteLength); // Int8Array.set(ArrayBuffer, ofs) works but ArrayBuffer is missing .length so we force the type

            Module.HEAP8.set(buffer, uncompressedTexturePtr);
            buffer = undefined;
            var result = Module.deserializeTextureLoadResult(uncompressedTexturePtr);
            var umbraTexture = result.textureInfo;
            var datatype = Primitive.Uint8;

            if (textureFormatToPrimitive.has(umbraTexture.format)) {
              datatype = textureFormatToPrimitive.get(umbraTexture.format);
            } else {
              console.warn("Used default datatype for texture format ".concat(TextureFormat[umbraTexture.format]));
            }

            var pixelData = new HeapView(uncompressedTexturePtr + Module.textureLoadResultHeaderSize, umbraTexture.dataByteSize, datatype);
            textureData = {
              info: umbraTexture,
              buffer: pixelData
            };
          } else {
            // No transcoding needed
            var _buffer = _this.tempTextureBuffer;

            _buffer.ensureSize(texture.dataByteSize);

            Module.serializeByteBuffer({
              ptr: _buffer.ptr,
              byteSize: texture.dataByteSize,
              flags: 0
            }, _this.scratch.ptr);

            if (!Module.textureLoadGetData(load.ptr, _this.scratch.ptr)) {
              load.finish(AssetLoadResult.Failure);
              throw new Error("textureLoadGetData failed: ".concat(load.ptr, ", ").concat(_buffer.ptr, ", ").concat(texture.dataByteSize, "/").concat(_buffer.size));
            }

            var bufferView = new HeapView(_buffer.ptr, texture.dataByteSize, Primitive.Uint8);
            textureData = {
              info: texture,
              buffer: bufferView
            };
          }

          try {
            // The handler must copy texture data if it wants to keep it for later.
            var _result = _this.handlers['LoadTexture'](textureData, load.assetUserPointer);

            load.finish(_result);

            if (_result === AssetLoadResult.Success) {
              _this.debug.textureFormatsInUse.add(textureData.info.format);

              if (_this.debug.trackInstantUnloads) {
                _this.stats.assetLoadTimes.set(load.assetUserPointer, _this.stats.numUpdates);
              }
            }

            return _result;
          } catch (error) {
            load.finish(AssetLoadResult.Failure);
            console.error(error);
            throw error;
          } finally {
            if (uncompressedTexturePtr > 0) {
              Module.umbraFree(uncompressedTexturePtr);
            }
          }
        })();
      }

      dispatchMaterialLoad(load) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
          load.prepare();
          Module.materialLoadGetInfo(load.ptr, _this2.scratch.ptr);
          var info = Module.deserializeMaterialInfo(_this2.scratch.ptr);
          var texturePtrs = info.textures.filter(function (ptr) {
            return ptr !== Module.INVALID_USERPOINTER;
          }); // All texture loads have been started by now so the promises should exist.

          var pending = texturePtrs.map(function (id) {
            return _this2.loadPromises.get(id);
          }); // Catches errors and saves the texture load statuses to a list. All texture
          // promises are waited for before we check for errors.

          var texturePromises = pending.map(function (p) {
            return p["catch"](function (e) {
              return e;
            });
          });
          var resultsAndErrors = yield Promise.all(texturePromises); // We waited for every dependency to finish so that we can now safely remove them
          // from "pendingAssetLoads" all at once. This is done even if some of them failed.

          texturePtrs.forEach(function (id) {
            return _this2.loadPromises["delete"](id);
          });

          for (var result of resultsAndErrors) {
            if (result instanceof Error) {
              load.finish(AssetLoadResult.Failure);
              throw result;
            }
          } // Now we know all dependencies resolved so the type can be updated.


          var results = resultsAndErrors;

          for (var _result2 of results) {
            if (_result2 !== AssetLoadResult.Success) {
              load.finish(AssetLoadResult.Aborted);
              return AssetLoadResult.Aborted;
            }
          } // Texture loads were successful so we can fetch the objects uploaded by user.


          var textureObjects = texturePtrs.map(function (id) {
            return _this2.assets.get(id);
          });
          var materialData = {
            transparent: info.transparent,
            textures: textureObjects
          };

          try {
            var _result3 = _this2.handlers['LoadMaterial'](materialData, load.assetUserPointer);

            load.finish(_result3);
            return _result3; // resolves the promise stored in "pendingAssetLoads[load.assetUserPointer]"
          } catch (error) {
            load.finish(AssetLoadResult.Failure);
            console.error(error);
            throw error;
          }
        })();
      }

      dispatchMeshLoad(load) {
        var _this3 = this;

        return _asyncToGenerator(function* () {
          Module.meshLoadGetInfo(load.ptr, _this3.scratch.ptr);
          var info = Module.deserializeMeshInfo(_this3.scratch.ptr);
          load.prepare();
          var serializedSize = Module.meshLoadGetSerializedSize(load.ptr);
          var dispatchSize = Module.meshLoadDispatchHeaderSize + serializedSize;

          _this3.tempDispatchBuffer.ensureSize(dispatchSize);

          var buf = _this3.tempDispatchBuffer;

          if ((buf.ptr & 0x0f) != 0) {
            console.error("buf.ptr wasn't aligned: ".concat(buf.ptr));
          }

          var desc = Module.convertAssetLoadToMeshDispatch(load.ptr, load.assetUserPointer, buf.ptr, dispatchSize);
          var materialUserPointer = info.material;

          var materialPromise = _this3.loadPromises.get(materialUserPointer);

          if (typeof materialPromise === 'undefined') {
            load.finish(AssetLoadResult.Failure);
            throw new Error("Material UserPointer ".concat(materialUserPointer, " didn't have a promise!"));
          } // Start async mesh decompression before waiting for "materialPromise" to finish.
          // This way both texture transcoding and mesh decompression can run in parallel.
          // Increase tracked memory use here and decrease it in the finish callback.


          var memoryUse = dispatchSize + desc.byteSize + Module.meshLoadResultHeaderSize;
          _this3.stats.meshPipelineMemoryUse += memoryUse;

          var workerId = _this3.workerPool.findMostAvailableWorker();

          var buffer;

          try {
            // NOTE: We need to copy "buf" here because if "callWorker()" transfers the ownership
            // its a must, and even if it doesn't, then it's much faster to transfer a small copy
            // because otherwise the _whole heap_ would get copied over to a worker.
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=169705
            ;

            var _ref5 = yield _this3.workerPool.callWorker(workerId, 'loadMesh', new Uint8Array(buf.bytes()), {});

            buffer = _ref5.buffer;
          } catch (_ref6) {
            var error = _ref6.error;
            load.finish(AssetLoadResult.Failure);
            throw error;
          } finally {
            _this3.stats.meshPipelineMemoryUse -= memoryUse;
            _this3.stats.perFrameLoadedMeshes += 1;
            _this3.stats.perFrameLoadedMeshBytes += serializedSize;
          }

          var bufferByteSize = buffer.length * buffer.BYTES_PER_ELEMENT;
          var ptr = Module.umbraAlloc(bufferByteSize);
          Module.HEAP8.set(buffer, ptr);
          buffer = undefined; // we don't use "buffer" after we've copied it to the heap

          var obj = Module.deserializeMeshLoadResult(ptr);
          var failed = false;
          var failureMessage; // These errors should never happen

          if (obj.result !== AssetLoadResult.Success) {
            failureMessage = "Asset load failed with ".concat(AssetLoadResult[obj.result]);
            failed = true;
          }

          if (obj.assetLoad !== load.ptr) {
            failureMessage = "Asset load ptr didn't match ".concat(obj.assetLoad, " vs ").concat(load.ptr);
            failed = true;
          }

          if (failed) {
            Module.umbraFree(ptr);
            load.finish(AssetLoadResult.Failure);
            throw Error(failureMessage);
          }

          var basePtr = ptr + Module.meshLoadResultHeaderSize;
          var bufferDescs = Module.meshLoadResultBuildUmbraBuffers(ptr, basePtr);
          var attributeArrayType = {
            position: Primitive.Float32,
            uv: Primitive.Float32,
            normal: Primitive.Float32,
            tangent: Primitive.Float32,
            index: bufferDescs.index.elementByteSize === 2 ? Primitive.Uint16 : Primitive.Uint32
          };
          var meshAttributes = {};

          for (var name of Object.keys(bufferDescs)) {
            var vbuf = {};
            var elemBuf = bufferDescs[name];
            var attributeArraySize = elemBuf.elementCapacity * elemBuf.elementStride;
            vbuf['data'] = new HeapView(elemBuf.ptr, attributeArraySize, attributeArrayType[name]);
            vbuf['desc'] = elemBuf;
            meshAttributes[name] = vbuf;
          } // Wait for material load to finish (its textures may take time) and
          // only then call the handler.


          var result = AssetLoadResult.Failure;

          try {
            result = yield materialPromise;
          } catch (error) {
            load.finish(AssetLoadResult.Aborted);
            Module.umbraFree(ptr);
            throw error;
          } // Material load failing is normal (e.g. when out of VRAM) so we don't throw any errors
          // when it happens, we just abort this mesh since it obviously can't be used.


          if (result !== AssetLoadResult.Success) {
            load.finish(AssetLoadResult.Aborted);
            Module.umbraFree(ptr);
            return AssetLoadResult.Aborted;
          }

          var materialAsset = _this3.assets.get(materialUserPointer);

          if (typeof materialAsset === 'undefined') {
            load.finish(AssetLoadResult.Aborted);
            Module.umbraFree(ptr);
            throw new Error("Material ".concat(materialUserPointer, " had no asset object."));
          }

          var meshData = {
            buffers: meshAttributes,
            material: materialAsset,
            bounds: [info.bounds.mn, info.bounds.mx]
          };
          var status = AssetLoadResult.Failure;

          try {
            status = _this3.handlers['LoadMesh'](meshData, load.assetUserPointer);

            if (status === AssetLoadResult.Success) {
              Module.meshLoadFinishExternalWithLoadResultHeader(load.ptr, ptr, basePtr);
            } else {
              load.finish(status);
              return status;
            }
          } catch (error) {
            // Handler threw an exception
            load.finish(AssetLoadResult.Failure);
            throw error;
          } finally {
            Module.umbraFree(ptr);
          }

          return status;
        })();
      }

      loadAssets(timeLimit) {
        var startTime = performance.now(); // First go and free up all pending assets

        for (var unload of this.getAssetUnloads()) {
          if (this.debug.trackInstantUnloads) {
            var created = this.stats.assetLoadTimes.get(unload.userPointer);
            var wasAlive = this.stats.numUpdates - created;

            if (wasAlive < 3) {
              this.stats.numInstantUnloads += 1;
            }
          } // Find the user-supplied asset object


          var asset = this.assets.get(unload.userPointer); // Delete the promise used to wait for this asset. We can't delete the promise earlier
          // because multiple meshes may need to wait on a single material, so we must keep its promise alive.

          this.loadPromises["delete"](unload.userPointer); // Call the application handler

          this.handlers[unload.type](asset, unload.userPointer);
          unload.finish();

          if (performance.now() - startTime > timeLimit) {
            break;
          }
        } // Process load jobs if there's still time left

        do {
          var loadPtr = Module.runtimeNextAssetLoad(this.ptr); // No more jobs to process?

          if (loadPtr === 0) {
            break;
          }

          var promise = void 0; // Assign the newly created AssetLoad its own user pointer right away
          // so that we can call load.prepare() before handing it out to user.

          var load = new AssetLoad(loadPtr, this.getNextUserPointer());

          if (load.type === 'LoadTexture') {
            promise = this.dispatchTextureLoad(load);
          } else if (load.type === 'LoadMaterial') {
            promise = this.dispatchMaterialLoad(load);
          } else if (load.type === 'LoadMesh') {
            // No-one waits for mesh loads to finish so we don't save its promise
            this.dispatchMeshLoad(load);
          }

          if (typeof promise !== 'undefined') {
            this.loadPromises.set(load.assetUserPointer, promise);
          }
          // This causes a bubble in the pipeline if a very large decompression
          // job consumes all the pipeline memory. On the other hand, this shouldn't
          // happen as we crash if too much memory is used anyway.

          var pipelineMemoryUsed = this.stats.meshPipelineMemoryUse + this.stats.texturePipelineMemoryUse;
          var shortest = this.workerPool.shortestQueueLength();

          if (shortest > 0 && pipelineMemoryUsed >= this.limits.streamingPipeSizeLimit) {
            break;
          } // Don't queue any new loads if the workers are falling behind. If an async load
          // is finished too late, it may be get instantly unloaded anyway if the camera moved.


          if (shortest >= this.limits.maxWorkQueueLength) {
            break;
          }
        } while (performance.now() - startTime < timeLimit);

        this.stats.numUpdates += 1;
        this.stats.numWorkerLoadsPending = this.workerPool.numLoadsPending();
        this.stats.perFrameLoadedTextures = 0;
        this.stats.perFrameLoadedTextureBytes = 0;
        this.stats.perFrameLoadedMeshes = 0;
        this.stats.perFrameLoadedMeshBytes = 0;
      }

      getNextUserPointer() {
        // AssetJob IDs are just an increasing 32-bit series
        var userPtr = this.nextId;
        this.nextId = this.nextId + 1 | 0;

        if (this.nextId === 0) {
          this.nextId = 1;
        }

        return userPtr;
      }

      addAsset(assetID, asset) {
        this.assets.set(assetID, asset);
      }
      /**
       * Removes the asset reference of the stream out job.
       * Assumes the caller has already freed their own asset resources.
       */


      removeAsset(id) {
        if (this.assets.has(id)) {
          this.assets["delete"](id);
        }
      }

      formatNeedsTranscoding(format) {
        var flags = this.platformFeatures.textureSupportMask;

        switch (format) {
          case TextureFormat.BC1:
            if (flags & TextureSupportFlags.BC1) {
              return false;
            }

            break;

          case TextureFormat.BC3:
            if (flags & TextureSupportFlags.BC3) {
              return false;
            }

            break;

          case TextureFormat.BC4:
            if (flags & TextureSupportFlags.BC4) {
              return false;
            }

            break;

          case TextureFormat.BC5:
            if (flags & TextureSupportFlags.BC5) {
              return false;
            }

            break;

          default:
            return false;
        }

        return true;
      }

      getStreamingState() {
        Module.runtimeGetStreamingState(this.ptr, this.tempStreamingStateBuffer.ptr);
        return Module.deserializeStreamingState(this.tempStreamingStateBuffer.ptr);
      }

      getStreamingProgress() {
        var state = this.getStreamingState();

        if (state.numResidentTiles == 0) {
          return 0.0;
        }

        return state.numResidentTilesLoaded / state.numResidentTiles;
      }

      getNumberOfWorkers() {
        return this.workerPool.numWorkers();
      }

    } // Expose only runtime for instantiation


    return {
      createRuntime: function createRuntime(config) {
        return new Runtime(new Client(), config, Module.umbraLibraryConfig);
      }
    };
  };

  // Generated at 2020-08-18 15:23:39
  function wrapNativeFunctions(Module) {
    Object.assign(Module, {
      configInit: Module.cwrap('UmbraConfigInit', null, ['number']),
      clientCreate: Module.cwrap('UmbraClientCreate', 'number', ['string', 'number']),
      clientDestroy: Module.cwrap('UmbraClientDestroy', null, ['number']),
      getLibraryInfo: Module.cwrap('UmbraGetLibraryInfo', 'string', ['number']),
      environmentInfoDefaults: Module.cwrap('UmbraEnvironmentInfoDefaults', null, ['number']),
      runtimeCreate: Module.cwrap('UmbraRuntimeCreate', 'number', ['number', 'number', 'number']),
      runtimeUpdate: Module.cwrap('UmbraRuntimeUpdate', null, ['number']),
      runtimeGetStreamingState: Module.cwrap('UmbraRuntimeGetStreamingState', null, ['number', 'number']),
      runtimeDestroy: Module.cwrap('UmbraRuntimeDestroy', null, ['number']),
      sceneCreate: Module.cwrap('UmbraSceneCreate', 'number', ['number', 'string', 'string']),
      sceneCreatePublic: Module.cwrap('UmbraSceneCreatePublic', 'number', ['number', 'string']),
      sceneCreateLocal: Module.cwrap('UmbraSceneCreateLocal', 'number', ['number', 'string']),
      sceneGetConnectionStatus: Module.cwrap('UmbraSceneGetConnectionStatus', 'number', ['number']),
      sceneGetInfo: Module.cwrap('UmbraSceneGetInfo', 'number', ['number', 'number']),
      sceneSetTransform: Module.cwrap('UmbraSceneSetTransform', null, ['number', 'number']),
      sceneDestroy: Module.cwrap('UmbraSceneDestroy', null, ['number']),
      viewCreate: Module.cwrap('UmbraViewCreate', 'number', ['number']),
      viewUpdateRendering: Module.cwrap('UmbraViewUpdateRendering', null, ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']),
      viewUpdateFilter: Module.cwrap('UmbraViewUpdateFilter', null, ['number', 'number']),
      viewGetCompleted: Module.cwrap('UmbraViewGetCompleted', 'number', ['number']),
      viewNextRenderables: Module.cwrap('UmbraViewNextRenderables', 'number', ['number', 'number', 'number']),
      viewResetRenderables: Module.cwrap('UmbraViewResetRenderables', null, ['number']),
      viewDestroy: Module.cwrap('UmbraViewDestroy', null, ['number']),
      viewRayQuery: Module.cwrap('UmbraViewRayQuery', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
      sceneCopyCreate: Module.cwrap('UmbraSceneCopyCreate', 'number', ['number', 'number', 'number', 'number', 'number']),
      sceneCopyGetStatus: Module.cwrap('UmbraSceneCopyGetStatus', 'number', ['number', 'number']),
      sceneCopyGetError: Module.cwrap('UmbraSceneCopyGetError', 'string', ['number']),
      sceneCopyDestroy: Module.cwrap('UmbraSceneCopyDestroy', null, ['number']),
      vertexAttributeGetElementByteSize: Module.cwrap('UmbraVertexAttributeGetElementByteSize', 'number', ['number']),
      runtimeNextAssetLoad: Module.cwrap('UmbraRuntimeNextAssetLoad', 'number', ['number']),
      assetLoadGetType: Module.cwrap('UmbraAssetLoadGetType', 'number', ['number']),
      assetLoadPrepare: Module.cwrap('UmbraAssetLoadPrepare', null, ['number', 'number']),
      assetLoadAbortRequested: Module.cwrap('UmbraAssetLoadAbortRequested', 'number', ['number']),
      assetLoadFinish: Module.cwrap('UmbraAssetLoadFinish', null, ['number', 'number']),
      meshLoadFinishExternal: Module.cwrap('UmbraMeshLoadFinishExternal', null, ['number', 'number', 'number', 'number']),
      meshLoadGetInfo: Module.cwrap('UmbraMeshLoadGetInfo', null, ['number', 'number']),
      meshLoadGetData: Module.cwrap('UmbraMeshLoadGetData', 'number', ['number', 'number', 'number']),
      meshStreamSetBuffers: Module.cwrap('UmbraMeshStreamSetBuffers', 'number', ['number', 'number', 'number']),
      meshStreamNext: Module.cwrap('UmbraMeshStreamNext', 'number', ['number', 'number', 'number']),
      meshStreamDone: Module.cwrap('UmbraMeshStreamDone', 'number', ['number']),
      meshLoadGetSerializedSize: Module.cwrap('UmbraMeshLoadGetSerializedSize', 'number', ['number']),
      textureGetMipmapLevelByteSize: Module.cwrap('UmbraTextureGetMipmapLevelByteSize', 'number', ['number', 'number']),
      textureGetMipmapLevelOffset: Module.cwrap('UmbraTextureGetMipmapLevelOffset', 'number', ['number', 'number']),
      textureLoadGetInfo: Module.cwrap('UmbraTextureLoadGetInfo', null, ['number', 'number']),
      textureLoadGetData: Module.cwrap('UmbraTextureLoadGetData', 'number', ['number', 'number']),
      textureLoadGetSerializedSize: Module.cwrap('UmbraTextureLoadGetSerializedSize', 'number', ['number']),
      textureMetaDataLoadGetData: Module.cwrap('UmbraTextureMetaDataLoadGetData', 'number', ['number', 'number']),
      textureMetaDataGetClassificationCount: Module.cwrap('UmbraTextureMetaDataGetClassificationCount', 'number', ['number', 'number']),
      textureMetaDataGetClassification: Module.cwrap('UmbraTextureMetaDataGetClassification', 'number', ['number', 'number', 'number']),
      textureMetaDataGetClassificationAmount: Module.cwrap('UmbraTextureMetaDataGetClassificationAmount', 'number', ['number', 'number', 'number']),
      materialLoadGetInfo: Module.cwrap('UmbraMaterialLoadGetInfo', null, ['number', 'number']),
      runtimeNextAssetUnload: Module.cwrap('UmbraRuntimeNextAssetUnload', 'number', ['number']),
      assetUnloadGetType: Module.cwrap('UmbraAssetUnloadGetType', 'number', ['number']),
      assetUnloadGetUserPointer: Module.cwrap('UmbraAssetUnloadGetUserPointer', 'number', ['number']),
      assetUnloadFinish: Module.cwrap('UmbraAssetUnloadFinish', null, ['number']),
      sendInternalMessage: Module.cwrap('UmbraSendInternalMessage', 'number', ['number', 'number'])
    });
  }

  var umbrajsScriptDir = '';

  if (typeof document !== 'undefined' && document.currentScript) {
    var dir = document.currentScript.src;

    if (dir !== 'undefined') {
      umbrajsScriptDir = dir.substr(0, dir.lastIndexOf('/') + 1);
    }
  }
  /**
   * Returns a library instance that uses the Emscripten resources of "Module".
   */


  function instantiate(Module, config) {
    var lib = {};
    /**
     * Queries supported texture formats and also enables the relevant WebGL extensions.
     */

    lib.getPlatformFeatures = function (gl) {
      var flags = 0; // We accumulate a texture format bitmask here

      var formats = new Set(); // Will hold all supported format names

      var supportsSRGB = false;
      var supportsHalfFloat = false;
      /**
       * We fetch all extension strings and strip off possible vendor prefixes of WEBGL
       * extensions. However, when we enable the extension we need the original full string.
       * Here 'extStrings' holds a mapping from a shortened to a full extension string.
       */

      var extStrings = new Map([]); // Full strings

      var extNames = []; // Shortened strings

      var allExtensions = gl.getSupportedExtensions();

      for (var full of allExtensions) {
        var shortened = full.replace(/^(.*)_WEBGL_/, 'WEBGL_');
        extStrings.set(shortened, full);
        extNames.push(shortened);
      }

      var mapping = new Map([['WEBGL_compressed_texture_s3tc', {
        mask: TextureSupportFlags.BC1 | TextureSupportFlags.BC2 | TextureSupportFlags.BC3,
        names: ['bc1', 'bc2', 'bc3']
      }], ['WEBGL_compressed_texture_s3tc_srgb', {
        mask: TextureSupportFlags.BC1 | TextureSupportFlags.BC2 | TextureSupportFlags.BC3,
        names: ['bc1', 'bc2', 'bc3']
      }], ['WEBGL_compressed_texture_rgtc', {
        mask: TextureSupportFlags.BC4 | TextureSupportFlags.BC5,
        names: ['bc4', 'bc5']
      }], ['WEBGL_compressed_texture_pvrtc', {
        mask: TextureSupportFlags.PVRTC1,
        names: ['pvrtc1_rgb4', 'pvrtc1_rgba4']
      }], ['WEBGL_compressed_texture_etc1', {
        mask: TextureSupportFlags.ETC1,
        names: ['etc1_rgb']
      }], ['WEBGL_compressed_texture_astc', {
        mask: TextureSupportFlags.ASTC,
        names: ['astc_4x4']
      }]]);

      for (var key of mapping.keys()) {
        if (extNames.includes(key)) {
          gl.getExtension(extStrings.get(key));
          var value = mapping.get(key);
          flags |= value.mask;
          value.names.forEach(function (name) {
            return formats.add(name);
          });
        }
      }

      if (extNames.includes('WEBGL_compressed_texture_s3tc_srgb')) {
        supportsSRGB = true;
      }

      if (extNames.includes('EXT_sRGB')) {
        gl.getExtension(extStrings.get('EXT_sRGB'));
        supportsSRGB = true;
      }

      if (extNames.includes('OES_texture_half_float')) {
        gl.getExtension(extStrings.get('OES_texture_half_float'));
        supportsHalfFloat = true;
      }

      return {
        textureSupportMask: flags,
        formats: _toConsumableArray$1(formats),
        srgb: supportsSRGB,
        halfFloat: supportsHalfFloat
      };
    }; // Access to the Emscripten module is needed for deinitialization


    lib.nativeModule = Module;
    lib.nativeModule['umbraLibraryConfig'] = config; // Allow access to Runtime class

    lib.createRuntime = create(Module).createRuntime;

    lib.getStreamingInfo = function () {
      return {
        minBytesDownloaded: lib.nativeModule.minBytesDownloaded,
        maxBytesDownloaded: lib.nativeModule.maxBytesDownloaded
      };
    };

    lib.getLibraryInfo = function () {
      return {
        version: Module.getLibraryInfo(LibraryInfo.Version),
        copyright: Module.getLibraryInfo(LibraryInfo.Copyright),
        buildTime: Module.getLibraryInfo(LibraryInfo.BuildTime),
        buildID: Module.getLibraryInfo(LibraryInfo.BuildId)
      };
    };

    lib.abortDownloads = function () {
      Object.values(Module.wgetRequests).forEach(function (req) {
        req.abort();
      });
    };

    return lib;
  }
  /**
   * Compiles the WebAssembly and code and initializes the Emscripten environment.
   * Returns a Promise that resolves with the library instance ready for use.
   */


  var initUmbra = function initUmbra(config) {
    var defaults = {
      wasmURL: umbrajsScriptDir + 'umbra.wasm',
      workerScriptURL: umbrajsScriptDir + 'UmbraAssetWorker.js'
    };
    config = Object.assign(defaults, config);
    return new Promise(function (resolve, reject) {
      try {
        var redirectWasmURL = function redirectWasmURL(path, prefix) {
          // The main WASM file's URL must be changed here because it's loaded during startup
          // using Emscripten's "locateFile()" API using a hardcoded 'umbra.wasm' path.
          if (path.endsWith('umbra.wasm')) {
            return config.wasmURL;
          }

          return prefix + path;
        };

        UmbraNativeAPI({
          locateFile: redirectWasmURL
        }).then(function (Module) {
          // A workaround for https://github.com/emscripten-core/emscripten/issues/5820
          delete Module['then'];

          Module['onAbort'] = function (what) {
            reject(what);
          };

          wrapNativeFunctions(Module);
          resolve(instantiate(Module, config));
        });
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * Deinitializes the Emscripten environment.
   *
   * NOTE: We assume here that async IndexedDB loads and stores have already finished.
   * This is the case if Umbra.update() was *not* called before deinitUmbra() on the
   * same frame.
   */

  var deinitUmbra = function deinitUmbra(Umbra) {
    // Pending requests must be aborted so that native handlers won't get called
    Umbra.abortDownloads();
    var privateUmbra = Umbra; // Emscripten's exit(0) call throws an ExitStatus exception

    try {
      privateUmbra.nativeModule._exit(0);
    } catch (e) {
      if (e.name !== 'ExitStatus') {
        throw e;
      }
    }
  };

  var _ThreeFormats;

  function makeFormat(format, type, compressed) {
    return {
      format: format,
      type: type,
      compressed: compressed
    };
  } // prettier-ignore


  var ThreeFormats = (_ThreeFormats = {}, _defineProperty(_ThreeFormats, TextureFormat.RGB24, makeFormat(THREE.RGBFormat, THREE.UnsignedByteType, false)), _defineProperty(_ThreeFormats, TextureFormat.RGBA32, makeFormat(THREE.RGBAFormat, THREE.UnsignedByteType, false)), _defineProperty(_ThreeFormats, TextureFormat.RGB565, makeFormat(THREE.RGBFormat, THREE.UnsignedShort565Type, false)), _defineProperty(_ThreeFormats, TextureFormat.RG8, makeFormat(THREE.LuminanceAlphaFormat, THREE.UnsignedByteType, false)), _defineProperty(_ThreeFormats, TextureFormat.RG16F, makeFormat(THREE.LuminanceAlphaFormat, THREE.HalfFloatType, false)), _defineProperty(_ThreeFormats, TextureFormat.BC1, makeFormat(THREE.RGBA_S3TC_DXT1_Format, THREE.UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.BC3, makeFormat(THREE.RGBA_S3TC_DXT5_Format, THREE.UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.ETC1_RGB, makeFormat(THREE.RGB_ETC1_Format, THREE.UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.ASTC_4X4, makeFormat(THREE.RGBA_ASTC_4x4_Format, THREE.UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.PVRTC1_RGB4, makeFormat(THREE.RGB_PVRTC_4BPPV1_Format, THREE.UnsignedByteType, true)), _ThreeFormats);

  var normalmapChunk = "\n#ifdef USE_NORMALMAP\n#ifdef USE_TANGENT\n\nvec3 tangentToWorld2 = normal;\nvec3 tangentToWorld0 = normalize(tangent - tangentToWorld2 * dot(tangentToWorld2, tangent));\n\n#ifdef UMBRA_FLIP_TANGENT\nvec3 tangentToWorld1 = normalize(cross(tangentToWorld0, tangentToWorld2));\n#else\nvec3 tangentToWorld1 = normalize(cross(tangentToWorld2, tangentToWorld0));\n#endif\n\n#if defined(UMBRA_TEXTURE_SUPPORT_BC5) || defined(UMBRA_TEXTURE_SUPPORT_ASTC)\nnormal.xy = texture2D(normalMap, vUv).xy * 2.0 - 1.0;\nnormal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));\n#elif defined(UMBRA_TEXTURE_SUPPORT_BC3)\nnormal.xy = texture2D(normalMap, vUv).yw * 2.0 - 1.0;\nnormal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));\n#else\nnormal.xyz = texture2D(normalMap, vUv).xyz;\nnormal.xy *= 2.0;\nnormal.xy -= 1.0;\nnormal = normalize(normal);\n#endif\n\nnormal = tangentToWorld0 * normal.x + tangentToWorld1 * normal.y + tangentToWorld2 * normal.z;\nnormal = normalize(normal);\n#endif\n#endif\n\n";
  var metalnessMapChunk = "\nfloat metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\nvec4 texelMetalness = texture2D( metalnessMap, vUv );\nmetalnessFactor *= texelMetalness.r;\n#endif\n"; // The BSDF function (see 'bsdfs.glsl') squares the roughness so we don't need to do it here.

  var roughnessMapChunk = "\nfloat roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\nvec4 texelRoughness = texture2D( roughnessMap, vUv );\nfloat roughness = 1.0 - texelRoughness.g;\nroughnessFactor *= roughness;\n#endif\n";
  /**
   * ShaderPatcher is a preprocessor class that replaces the default PBR texture read
   * shader chunks with the correct Umbra versions. Doing it this way instead of completely
   * custom shaders allows the application to use its own materials with Umbra scenes.
   */

  class ShaderPatcher {
    constructor(formats) {
      this.flipTangent = void 0;
      this.defines = void 0;

      /*
       * World space transform can swap handedness which isn't handled by three.js in tangent space
       * normal maps so we need to be able to flip them ourselves.
       */
      this.flipTangent = false; // Texture format feature flags

      this.defines = '';

      if (formats.indexOf('bc3') > -1) {
        this.defines += '#define UMBRA_TEXTURE_SUPPORT_BC3\n';
      }

      if (formats.indexOf('bc5') > -1) {
        this.defines += '#define UMBRA_TEXTURE_SUPPORT_BC5\n';
      }

      if (formats.indexOf('astc_4x4') > -1) {
        this.defines += '#define UMBRA_TEXTURE_SUPPORT_ASTC\n';
      }
    }

    process(shader, renderer) {
      var frag = shader.fragmentShader;

      if (this.flipTangent) {
        frag = '#define UMBRA_FLIP_TANGENT\n' + frag;
      }

      frag = this.defines + frag;
      frag = frag.replace('#include <normal_fragment_maps>', normalmapChunk);
      frag = frag.replace('#include <metalnessmap_fragment>', metalnessMapChunk);
      frag = frag.replace('#include <roughnessmap_fragment>', roughnessMapChunk);
      shader.fragmentShader = frag;
    }

  }

  class ObjectPool {
    constructor() {
      this.usedList = [];
      this.freeList = [];
    }

    // Tries to find an object matching "predicate", if any given.
    // Constructs a new object with "makeFunc" if none were found.
    allocate(makeFunc, predicate) {
      var obj;

      if (this.freeList.length > 0) {
        // If no predicate given we always take the last one
        if (typeof predicate === 'undefined') {
          obj = this.freeList.pop();
        } else {
          for (var i = 0; i < this.freeList.length; i++) {
            var elem = this.freeList[i];

            if (predicate(elem)) {
              obj = elem;
              this.freeList.splice(i, 1);
              break;
            }
          }
        }
      }

      if (!obj) {
        obj = makeFunc();
      }

      this.usedList.push(obj);
      return obj;
    }

    freeAll(clearFunc) {
      for (var i = 0; i < this.usedList.length; i++) {
        if (clearFunc) {
          clearFunc(this.usedList[i]);
        }

        this.freeList.push(this.usedList[i]);
      }

      this.usedList.length = 0;
    }

    clear() {
      this.usedList.length = 0;
      this.freeList.length = 0;
    }

  }

  class UmbraScene extends THREE.Object3D {
    // User editable config
    // Event callbacks
    // We need to present ourselves as a LOD object to get the update() call
    set quality(value) {
      console.error("UmbraScene.quality is not supported any more. Use camera.umbraQuality instead.");
    }

    // UmbraScene should be instantiated using Umbra.createScene()
    constructor(runtime, scene, sharedState, _renderer, features) {
      var _this;

      var onDispose = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
      super();
      _this = this;
      this.material = new THREE.MeshBasicMaterial();
      this.wireframe = false;
      this.freeze = false;
      this.onConnected = void 0;
      this.onConnectionError = void 0;
      this.onDisconnected = void 0;
      this.onConnectionChanged = void 0;
      this.onMeshChanged = void 0;
      this.isLOD = true;
      this.autoUpdate = true;
      this.name = 'UmbraScene';
      this.renderer = void 0;
      this.materialPool = new ObjectPool();
      this.shaderPatcher = void 0;
      this.sharedState = void 0;
      this.stats = {
        numVisible: 0,
        numShadowCasters: 0,
        numCachedMaterials: 0,
        numAssets: 0
      };
      this.diagnostics = {
        missingNormals: {
          checked: false,
          message: 'Property umbraScene.opaqueMaterial has been deprecated. Use umbraScene.material instead.'
        },
        deprecatedMaterial: {
          checked: false,
          message: 'UmbraScene has no normals so it will appear black.'
        },
        report: function report(field) {
          if (!_this.diagnostics[field].checked) {
            _this.diagnostics[field].checked = true;
            console.warn(_this.diagnostics[field].message);
          }
        }
      };
      this.umbra = void 0;
      this.onDispose = void 0;
      this.oldState = {
        status: undefined,
        visibleIDs: new Set()
      };

      this.update = function (camera) {
        var _this2 = this;

        if (this.freeze) {
          return;
        }

        if (this.umbra.nativeScene.ptr === 0) {
          console.warn('Renderer tried to update a disposed UmbraScene');
          return;
        }

        var view = this.sharedState.cameraToView.get(camera);

        if (!view) {
          view = this.umbra.runtime.createView();
          this.sharedState.cameraToView.set(camera, view);
        }

        this.sharedState.viewLastUseFrame.set(view, this.renderer.info.render.frame);
        this.umbra.nativeScene.setTransform(this.matrixWorld.elements); // If we are using a PBR material then we might need to flip the tangent vector

        if (this.isPBREnabled()) {
          // TODO(pvaananen): Would be nice to avoid recalculating the determinant every frame.
          var flip = this.matrixWorld.determinant() < 0;

          if (flip !== this.shaderPatcher.flipTangent) {
            this.shaderPatcher.flipTangent = flip;
            this.materialPool.clear();
          }
        }

        this.stats.numVisible = 0;
        this.stats.numAssets = this.umbra.runtime.assets.size;
        /**
         * Next we find the visible Umbra meshes and add them to the scene graph.
         * This is pretty tricky, because we want more meshes to show up in the shadow map pass
         * than in the main camera render pass. This is why 'mesh.castShadow' doesn't help here
         * since it does the exact opposite.
         *
         * We use a workaround that first adds the common meshes as children of the Umbra scene
         * object but stashes the shadow caster meshes (visible only from lights) to an extra
         * list 'shadowCasters'.
         *
         * The trick is that after the children, we add a 'proxy' object that presents itself
         * as a 'LOD' object. As a consequence it gets its own update() call, and there we go
         * and add the shadow casters also to the children list. At this point the opaque
         * renderable objects were already collected to their own render list, so 'children'
         * is safe to modify.
         *
         * In essence, the flow is the following.
         *
         *    three.js                           scene object (this)
         *    --------                           ------------------
         *    Starts traversing three.js scene graph
         *    Calls scene.update(cam) ---------> Updates views
         *                                       Fetches a list of renderables
         *                                       Adds common meshes to this.children
         *    Adds scene.children to
         *      the render list
         *    Starts rendering scene.children
         *    Calls proxy.update(cam) ---------> Proxy goes and adds shadow casters to this.children
         *    Starts the shadow pass
         *    Adds scene.children to shadow
         *      render list
         *    Renders the shadow pass
         *    Renders the opaque pass
         *    Renders the transparent pass
         *
         * As you can see, the 'this.children' list is mutated halfway through the renderer's
         * scene graph traversal so that different object list ends up to the shadow pass render code.
         */
        // First filter away last frame's meshes

        var newChildren = [];

        for (var i = 0; i < this.children.length; i++) {
          if (!this.children[i].isUmbraMesh) {
            newChildren.push(this.children[i]);
          }
        }

        this.children = newChildren;
        var shadowCasters = [];
        var proxy = new THREE.Object3D();
        proxy.isLOD = true;
        proxy.autoUpdate = true;

        proxy.update = function (cam) {
          // Remove the proxy itself
          _this2.children.pop(); // Add the shadow casters


          for (var _i = 0; _i < shadowCasters.length; _i++) {
            _this2.children.push(shadowCasters[_i]);
          }
        };

        this.materialPool.freeAll(function (mat) {
          // Remove references to textures so GC can release the three.js objects
          delete mat.map;
          delete mat.normalMap;
          delete mat.metalnessMap;
          delete mat.roughnessMap;
        });
        var visible = [];
        var visibleIDs = new Set(); // On the first frame the view didn't yet exist when UmbrajsThreeInternal collected a list of renderables,
        // so the list in "viewRenderables" may be missing.

        if (this.sharedState.viewRenderables.has(view)) {
          visible = this.sharedState.viewRenderables.get(view);
        }

        var _loop = function _loop(_i2) {
          // Each view's list includes renderables of all UmbraScenes, so we need to pick only the relevant ones here.
          if (visible[_i2].scenePtr !== _this2.umbra.nativeScene.ptr) {
            return "continue";
          }

          var _ref = visible[_i2].mesh,
              materialDesc = _ref.materialDesc,
              geometry = _ref.geometry;
          visibleIDs.add(visible[_i2].id);
          _this2.stats.numVisible += 1;
          var isTransparent = materialDesc.transparent || _this2.material.transparent; // Fetch a new material from the pool if we already have free ones. This avoids
          // extra allocations and more importantly 'onBeforeCompile' calls.

          var material = _this2.materialPool.allocate(function () {
            return _this2.material.clone();
          }, function (mat) {
            return mat.transparent === isTransparent;
          });

          material.wireframe = _this2.wireframe;
          material.opacity = _this2.material.opacity;
          material.transparent = isTransparent;

          material.onBeforeCompile = function (shader, renderer) {
            /**
             * If the original material already had a custom preprocessor callback we need to call
             * that first. We need to use 'apply' in case the callback uses 'this' reference to
             * access some material properties.
             */
            if (_this2.material.onBeforeCompile) {
              _this2.material.onBeforeCompile.apply(material, [shader, renderer]);
            }

            _this2.shaderPatcher.process(shader, renderer);
          };

          var diffuseMap = materialDesc.textures[TextureType.Diffuse];
          var normalMap = materialDesc.textures[TextureType.Normal];
          var metalglossMap = materialDesc.textures[TextureType.Specular];

          if (diffuseMap && diffuseMap.isTexture) {
            material.map = diffuseMap;
          }

          if (normalMap && normalMap.isTexture) {
            material.normalMap = normalMap;
            material.vertexTangents = true;
            material.normalMapType = THREE.TangentSpaceNormalMap;
          }

          if (metalglossMap && metalglossMap.isTexture) {
            material.metalnessMap = metalglossMap;
            material.metalness = 1.0;
            material.roughnessMap = metalglossMap;
            material.roughness = 1.0;
          }
          /**
           * We instatiate new Mesh objects each frame but the constructor is very cheap
           * and the references should live for a very short time since 'this.children'
           * gets cleared every frame.
           */


          var mesh = new THREE.Mesh(geometry, material);
          mesh.isUmbraMesh = true;
          mesh.matrixWorld.copy(_this2.matrixWorld);
          mesh.castShadow = _this2.castShadow;
          mesh.receiveShadow = _this2.receiveShadow;
          mesh.visible = true;

          _this2.children.push(mesh); // TODO(pvaananen): Does this check work with multiple cameras?


          if ((visible[_i2].mask & 0x01) === 0) {
            shadowCasters.push(mesh);
            mesh.frustumCulled = true;
          } else {
            _this2.children.push(mesh);

            mesh.frustumCulled = false;
          }
        };

        for (var _i2 = 0; _i2 < visible.length; _i2++) {
          var _ret = _loop(_i2);

          if (_ret === "continue") continue;
        } // Emit a warning if normals are required but missing


        if (!this.diagnostics.missingNormals.checked && this.isPBREnabled()) {
          for (var _i3 = 0; _i3 < this.children.length; _i3++) {
            if (!this.children[_i3].isUmbraMesh) {
              continue;
            }

            if (!('normal' in this.children[_i3].geometry.attributes)) {
              this.diagnostics.report('missingNormals');
              break;
            }
          }
        }

        this.stats.numShadowCasters = shadowCasters.length;
        this.stats.numCachedMaterials = this.materialPool.usedList.length + this.materialPool.freeList.length;

        if (shadowCasters.length > 0) {
          this.children.push(proxy);
        }

        this.updateStreamingEvents(visibleIDs);
      };

      this.renderer = _renderer;
      this.sharedState = sharedState;
      this.shaderPatcher = new ShaderPatcher(features.formats);
      this.onDispose = onDispose; // We need to flip the Z-axis since scenes are stored in "left-handed Y is up" coordinate system

      this.scale.set(1.0, 1.0, -1.0); // Add API objects under their own object for clarity

      this.umbra = {
        runtime: runtime,
        nativeScene: scene
      };
    }

    get opaqueMaterial() {
      this.diagnostics.report('deprecatedMaterial');
      return this.material;
    }

    set opaqueMaterial(mat) {
      this.diagnostics.report('deprecatedMaterial');
      this.material = mat;
    }

    getInfo() {
      var info = {
        connected: this.umbra.nativeScene.isConnected()
      };

      if (info.connected) {
        info['sceneInfo'] = this.umbra.nativeScene.getInfo();
      }

      Object.assign(info, this.stats);
      return info;
    }

    getBounds() {
      if (!this.umbra.nativeScene.isConnected()) {
        return undefined;
      }

      var info = this.umbra.nativeScene.getInfo();
      var bounds = info.bounds;
      var min = bounds.mn;
      var max = bounds.mx;
      var box = new THREE.Box3(new THREE.Vector3(min[0], min[1], min[2]), new THREE.Vector3(max[0], max[1], max[2]));
      return box;
    }

    getCenter() {
      var bounds = this.getBounds();
      bounds.applyMatrix4(this.matrixWorld);
      var center = new THREE.Vector3();
      bounds.getCenter(center);
      return center;
    }

    updateStreamingEvents(visibleIDs) {
      var then = this.oldState.visibleIDs;
      var now = visibleIDs;

      if (this.onMeshChanged) {
        if (then.size !== now.size) {
          this.onMeshChanged();
        } else {
          for (var id of now) {
            if (!then.has(id)) {
              this.onMeshChanged();
              break;
            }
          }
        }
      }

      this.oldState.visibleIDs = visibleIDs;
    } // This gets called by ThreejsIntegration's periodic update handler


    updateNetworkEvents() {
      var status = this.umbra.nativeScene.connectionStatus();

      if (this.oldState.status !== status) {
        if (this.onConnectionChanged) {
          this.onConnectionChanged(status);
        }

        switch (status) {
          case ConnectionStatus.ConnectionError:
            if (this.onConnectionError) {
              this.onConnectionError('Could not connect');
            }

            break;

          case ConnectionStatus.Connected:
            if (this.onConnected) {
              this.onConnected();
            }

            break;

          case ConnectionStatus.Connecting:
            if (this.onDisconnected) {
              this.onDisconnected();
            }

            break;
        }
      }

      this.oldState.status = status;
    }

    dispose() {
      if (this.onDispose) {
        this.onDispose(this);
      } // Remove all Umbra meshes from children


      this.children = this.children.filter(function (x) {
        return !x.isUmbraMesh;
      }); // Dispose all cached materials

      this.materialPool.freeAll(function (mat) {
        return mat.dispose();
      }); // We don't dispose mesh geometries here because they are managed by the Runtime, and
      // Views are managed by UmbrajsThreeInternal.

      this.umbra.nativeScene.destroy(); // Runtime must be manually freed by the user with .dispose() of the API object
    }

    isPBREnabled() {
      return 'normalMapType' in this.material;
    }

  }

  class Loader extends THREE.Loader {
    constructor(Umbra, manager) {
      super(manager);
      this.Umbra = void 0;
      this.Umbra = Umbra;
    }

    load(url, onLoad, onProgress, onError) {
      var model = this.Umbra.createScene(url);

      if (onError) {
        model.onConnectionError = function (err) {
          onError(err);
        };
      }

      model.onConnected = function () {
        delete model.onConnectionError;

        if (onProgress) {
          onProgress(1.0);
        }

        onLoad(model);
      };
    }

  }

  function makeBoundingSphere(aabb) {
    var min = aabb[0];
    var max = aabb[1];
    var size = new THREE.Vector3(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
    var pos = new THREE.Vector3(min[0] + size.x * 0.5, min[1] + size.y * 0.5, min[2] + size.z * 0.5);
    return new THREE.Sphere(pos, size.length());
  }

  class UmbrajsThreeInternal {
    // Upper VRAM memory use limit in bytes
    // Upper total download size limit in bytes. Turned off by default.
    // This gets lowered automatically if memory limit is hit
    // An instance of the umbrajs library for debugging
    get memoryUsed() {
      return this.textureMemoryUsed + this.meshMemoryUsed;
    }

    // This class should be instantiated via initUmbra()
    constructor(umbrajs, renderer) {
      var _this = this;

      this.memoryLimit = 500 * 1024 * 1024;
      this.downloadLimit = 0;
      this.qualityFactor = 1.0;
      this.onStreamingUpdate = void 0;
      this.onStreamingComplete = void 0;
      this.umbrajs = void 0;
      this.runtime = void 0;
      this.features = void 0;
      this.renderer = void 0;
      this.updateTask = undefined;
      this.assetSizes = new Map();
      this.textureMemoryUsed = 0;
      this.meshMemoryUsed = 0;
      this.lastQualityLowerFrame = -1;
      this.umbraScenes = new Set();
      this.oldState = {
        progress: 0,
        downloadLimitReached: false
      };
      this.sharedState = {
        cameraToView: new Map(),
        viewRenderables: new Map(),
        viewLastUseFrame: new Map()
      };
      this.tempVector = new THREE.Vector3();
      this.dirVector = new THREE.Vector3();
      this.matrixWorldInverse = new THREE.Matrix4();
      this.projScreenMatrix = new THREE.Matrix4();
      this.cameraWorldPosition = new THREE.Vector3();
      this.handlers = {
        LoadMaterial: function LoadMaterial(data, assetID) {
          var material = data;
          material.transparent = data.transparent ? true : false;

          _this.runtime.addAsset(assetID, material);

          return Assets.AssetLoadResult.Success;
        },
        UnloadMaterial: function UnloadMaterial(asset, assetID) {
          _this.runtime.removeAsset(assetID);
        },
        LoadTexture: function LoadTexture(data, assetID) {
          var info = data.info;
          var buffer = data.buffer;
          var glformat;

          if (ThreeFormats.hasOwnProperty(info.format)) {
            glformat = ThreeFormats[info.format];
          }

          if (!glformat) {
            // Add a dummy object for unknown formats. They will appear as a solid black color.
            console.log('Unknown texture format', info.format);

            _this.runtime.addAsset(assetID, {
              isTexture: false
            });

            return Assets.AssetLoadResult.Success;
          }

          if (!_this.canFitInMemory(buffer.size)) {
            _this.adjustQuality(0.8);

            return Assets.AssetLoadResult.OutOfMemory;
          }

          var tex = _this.makeTexture(info, buffer, glformat);
          /**
           * A workaround for the case where we directly output colors in gamma space.
           * We make diffuse textures linear to avoid gamma expansion at texture fetch time.
           * This is slightly wrong because texture filtering and shading will be done
           * in gamma space, but this behavior is what people usually expect.
           */


          var gammaOutput = false;

          if ('outputEncoding' in _this.renderer) {
            // three.js version 112 and after
            gammaOutput = _this.renderer['outputEncoding'] === THREE.sRGBEncoding;
          } else if ('gammaOutput' in _this.renderer) {
            // three.js prior to version 112
            gammaOutput = _this.renderer['gammaOutput'];
          }

          if (info.type === TextureType.Diffuse && !gammaOutput) {
            tex.encoding = THREE.LinearEncoding;
          } else {
            tex.encoding = info.colorSpace === ColorSpace.Linear ? THREE.LinearEncoding : THREE.sRGBEncoding;
          }

          tex.needsUpdate = true;
          _this.textureMemoryUsed += buffer.size;

          _this.assetSizes.set(tex, buffer.size);

          _this.runtime.addAsset(assetID, tex);

          return Assets.AssetLoadResult.Success;
        },
        UnloadTexture: function UnloadTexture(texture, assetID) {
          // Free texture data only if it's not a dummy texture
          if (texture.isTexture) {
            texture.dispose();
          }

          if (_this.assetSizes.has(texture)) {
            _this.textureMemoryUsed -= _this.assetSizes.get(texture);

            _this.assetSizes["delete"](texture);
          }

          _this.runtime.removeAsset(assetID);
        },
        LoadMesh: function LoadMesh(data, assetID) {
          /**
           * LoadMesh gives us all the vertex data in load.data.buffers.
           * The buffers are only valid during this handler, and the memory will be
           * reused for other meshes later. Therefore we make copies of the arrays
           * for three.js which is something we would have to do anyway.
           */
          var attribs = {
            position: {
              components: 3
            },
            normal: {
              components: 3
            },
            uv: {
              components: 2
            },
            tangent: {
              components: 3
            }
          };
          var totalSize = 0;
          Object.keys(attribs).map(function (name) {
            return data.buffers[name];
          }).forEach(function (buffer) {
            if (buffer) {
              totalSize += buffer.data.size;
            }
          });

          if (!_this.canFitInMemory(totalSize)) {
            _this.adjustQuality(0.8);

            return Assets.AssetLoadResult.OutOfMemory;
          }

          var geometry = new THREE.BufferGeometry();
          var indexArray = data.buffers['index'].data.getArray();
          var indices = Array.from(indexArray);
          geometry.setIndex(indices);
          geometry.boundingSphere = makeBoundingSphere(data.bounds);
          Object.keys(attribs).forEach(function (name) {
            var buffer = data.buffers[name];

            if (buffer) {
              var view = buffer.data;
              var array = view.getArray();
              var attrib = new THREE.Float32BufferAttribute(array.slice(), attribs[name].components);

              if ('setAttribute' in geometry) {
                // three.js v112
                geometry['setAttribute'](name, attrib);
              } else {
                // three.js prior to v112
                geometry['addAttribute'](name, attrib);
              }
            }
          });
          var mesh = {
            geometry: geometry,
            materialDesc: data.material
          };
          _this.meshMemoryUsed += totalSize;

          _this.assetSizes.set(mesh, totalSize);

          _this.runtime.addAsset(assetID, mesh);

          return Assets.AssetLoadResult.Success;
        },
        UnloadMesh: function UnloadMesh(mesh, assetID) {
          if (_this.assetSizes.has(mesh)) {
            _this.meshMemoryUsed -= _this.assetSizes.get(mesh);

            _this.assetSizes["delete"](mesh);
          } // Tell Umbra's runtime that this asset doesn't exist anymore


          _this.runtime.removeAsset(assetID); // Release three.js's resources


          mesh.geometry.dispose();
        }
      };
      var context; // three.js r106 has no 'getContext'

      if ('getContext' in renderer) {
        context = renderer.getContext();
      } else {
        context = renderer.context;
      } // Query GL Context for supported extenions and fill platform features with that info


      var features = umbrajs.getPlatformFeatures(context); // Three.js does not support BC5 compressed formats so we manually disable them.

      features.textureSupportMask &= ~TextureSupportFlags.BC5;
      this.umbrajs = umbrajs;
      this.runtime = umbrajs.createRuntime({
        features: features
      });
      this.runtime.setHandlers(this.handlers);
      this.renderer = renderer;
      this.features = features;
      this.startEventUpdate(1000 / 60);
    }

    startEventUpdate(interval) {
      var _this2 = this;

      this.stopEventUpdate();
      this.updateTask = window.setInterval(function () {
        _this2.updateEvents();

        _this2.umbraScenes.forEach(function (m) {
          return m.updateNetworkEvents();
        });
      }, interval);
    }

    stopEventUpdate() {
      if (typeof this.updateTask !== 'undefined') {
        window.clearInterval(this.updateTask);
        delete this.updateTask;
      }
    }

    findLights(umbraScene) {
      var parentScene;
      umbraScene.traverseAncestors(function (obj) {
        if (obj['isScene']) {
          parentScene = obj;
        }
      });

      if (!parentScene || parentScene && !parentScene.isScene) {
        return new Set();
      }

      var lights = new Set();
      parentScene.traverseVisible(function (obj) {
        if (obj['isDirectionalLight'] && obj['castShadow']) {
          lights.add(obj);
        }
      });
      return lights;
    }

    pruneOldViews(frame) {
      /**
       * We get no notification when cameras are removed from the scene graph
       * so we'll go and remove views based on their age.
       */
      for (var _ref of this.sharedState.viewLastUseFrame) {
        var _ref2 = _slicedToArray(_ref, 2);

        var view = _ref2[0];
        var lastUsed = _ref2[1];

        if (frame - lastUsed < 600) {
          continue;
        }

        for (var _ref3 of this.sharedState.cameraToView) {
          var _ref4 = _slicedToArray(_ref3, 2);

          var cam = _ref4[0];
          var view2 = _ref4[1];

          if (view2 === view) {
            this.sharedState.cameraToView["delete"](cam);
            break;
          }
        }

        view.destroy();
        this.sharedState.viewLastUseFrame["delete"](view);
      }
    }

    updateViews() {
      var shared = this.sharedState;
      var lights = new Set();

      if (this.renderer.shadowMap.enabled) {
        for (var umbraScene of this.umbraScenes) {
          for (var light of this.findLights(umbraScene)) {
            lights.add(light);
          }
        }
      }

      var dir = this.dirVector;
      var vector3 = this.tempVector;
      var lightDirections = Array.from(lights).map(function (light) {
        dir.setFromMatrixPosition(light.target.matrixWorld);
        vector3.setFromMatrixPosition(light.matrixWorld);
        dir.sub(vector3);
        return [dir.x, dir.y, dir.z];
      }, lights);
      this.pruneOldViews(this.renderer.info.render.frame);

      for (var _ref5 of shared.cameraToView) {
        var _ref6 = _slicedToArray(_ref5, 2);

        var threeCamera = _ref6[0];
        var view = _ref6[1];
        var camera = threeCamera;
        this.matrixWorldInverse.getInverse(camera.matrixWorld);
        this.projScreenMatrix.multiplyMatrices(camera.projectionMatrix, this.matrixWorldInverse); // By default we stream in meshes around the camera, but user can override it.

        if ('umbraStreamingPosition' in camera) {
          this.cameraWorldPosition.copy(camera.umbraStreamingPosition);
        } else {
          camera.getWorldPosition(this.cameraWorldPosition);
        }

        var quality = 0.5;

        if ('umbraQuality' in camera) {
          quality = camera.umbraQuality;
        }

        var pos = this.cameraWorldPosition;
        view.setCamera(this.projScreenMatrix.elements, [pos.x, pos.y, pos.z], quality * this.qualityFactor, lightDirections);
        var list = [];

        if (shared.viewRenderables.has(view)) {
          list = shared.viewRenderables.get(view);
          list.length = 0;
        } else {
          shared.viewRenderables.set(view, list);
        }

        var batchSize = 500;
        var visible = [];

        do {
          var _list;

          visible = view.getVisible(batchSize);

          (_list = list).push.apply(_list, _toConsumableArray(visible));
        } while (visible.length === batchSize);
      }
    }

    update() {
      var timeBudget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
      var downloadLimitReached = this.downloadLimit !== 0 && this.getStats().maxBytesDownloaded >= this.downloadLimit; // If the limit is reached we freeze all updates. Streaming will stop completely.

      if (downloadLimitReached) {
        if (!this.oldState.downloadLimitReached) {
          this.umbrajs.abortDownloads();
        }
      } else {
        var start = performance.now();
        this.runtime.update();
        var updateTook = performance.now() - start;
        this.runtime.loadAssets(timeBudget - updateTook);
        this.updateViews();
      }

      this.oldState.downloadLimitReached = downloadLimitReached;

      if (this.memoryUsed / this.memoryLimit < 0.25) {
        this.adjustQuality(1.1);
      }
    }

    createScene(link) {
      var _this3 = this;

      var url;

      if (typeof link === 'string') {
        url = link;
      } else if (_typeof(link) === 'object') {
        if ('token' in link) {
          console.warn('Connection with {token, projectID, modelID} is deprecated. Use {key, project, model} or a string locator instad.');
          link.key = link['token'];
          link.project = link['projectID'];
          link.model = link['modelID'];
        }

        if (!('key' in link && 'project' in link && 'model' in link)) {
          throw new Error('createScene() expects an object with properties "key", "project", and "model"');
        }

        url = "key=".concat(link.key, "&project=").concat(link.project, "&model=").concat(link.model);
      } else {
        throw new TypeError('expected either string or an object argument');
      }

      var umbraScene = new UmbraScene(this.runtime, this.runtime.createScenePublic(url), this.sharedState, this.renderer, this.features, function (s) {
        return _this3.umbraScenes["delete"](s);
      });
      this.umbraScenes.add(umbraScene);
      return umbraScene;
    }

    createSceneWithURL(url) {
      var _this4 = this;

      var scene = this.runtime.createSceneLocal(url);
      var umbraScene = new UmbraScene(this.runtime, scene, this.sharedState, this.renderer, this.features, function (s) {
        return _this4.umbraScenes["delete"](s);
      });
      this.umbraScenes.add(umbraScene);
      return umbraScene;
    }
    /**
     * Returns streaming information. We can't tell which files came from the browser cache
     * so we report lower and upper limits of the true download size.
     *
     * The returned object has the following fields:
     *
     *  'maxBytesDownloaded' an upper limit assuming no file was cached,
     *  'minBytesDownloaded' the corresponding lower limit assuming all duplicates came from cache.
     *  'textureMemoryUse' the number of bytes used by texture assets
     *  'meshMemoryUse' the number of bytes used by mesh assets
     *
     */


    getStats() {
      return Object.assign(this.umbrajs.getStreamingInfo(), {
        textureMemoryUsed: this.textureMemoryUsed,
        meshMemoryUsed: this.meshMemoryUsed
      });
    }

    canFitInMemory(bytes) {
      return this.memoryUsed + bytes < this.memoryLimit;
    }

    adjustQuality(factor) {
      if (this.renderer.info.render.frame == this.lastQualityLowerFrame) {
        return;
      }

      this.qualityFactor = Math.max(0, Math.min(1, this.qualityFactor * factor));
      this.lastQualityLowerFrame = this.renderer.info.render.frame;
    } // Converts a texture descriptor and a pixel buffer to a three.js compatible texture


    makeTexture(info, buffer, glformat) {
      var pixelData = buffer.getArray().slice();
      var tex;

      if (glformat.compressed) {
        var mip = {
          width: info.width,
          height: info.height,
          data: pixelData
        };
        tex = new THREE.CompressedTexture([mip], info.width, info.height);
      } else {
        tex = new THREE.DataTexture(pixelData, info.width, info.height);
      }

      tex.format = glformat.format;
      tex.type = glformat.type;
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.anisotropy = 0;
      return tex;
    } // AssetLoad handlers that create and remove materials, textures, and meshes


    updateEvents() {
      var progress = this.getStreamingProgress();

      if (this.oldState.progress != progress) {
        if (this.onStreamingUpdate) {
          this.onStreamingUpdate(progress);
        }

        if (progress === 1.0 && this.onStreamingComplete) {
          this.onStreamingComplete();
        }
      }

      this.oldState.progress = progress;
    }

    getStreamingProgress() {
      return this.runtime.getStreamingProgress();
    }

    dispose() {
      this.stopEventUpdate();

      for (var view of this.sharedState.cameraToView.values()) {
        view.destroy();
      }

      this.umbraScenes.forEach(function (m) {
        return m.dispose();
      });
      this.sharedState.cameraToView.clear();
      this.umbraScenes.clear();
      this.runtime.assets.forEach(function (asset, userPtr) {
        if ('geometry' in asset) {
          asset.geometry.dispose();
        }

        if ('dispose' in asset) {
          asset.dispose();
        }
      });
      this.assetSizes.clear();
      this.textureMemoryUsed = 0;
      this.meshMemoryUsed = 0;
      this.runtime.destroy();
      this.runtime = undefined;
      deinitUmbra(this.umbrajs);
    }

  }

  function initWithThreeJS(renderer, userConfig) {
    if (!renderer) {
      throw new TypeError('"renderer" should be of type THREE.WebGLRenderer');
    }

    return initUmbra(userConfig).then(function (Umbra) {
      return new UmbrajsThreeInternal(Umbra, renderer);
    });
  } // Hide the library object constructor by wrapping it in an interface

  exports.Loader = Loader;
  exports.Scene = UmbraScene;
  exports.initWithThreeJS = initWithThreeJS;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=umbrajs-three.js.map
