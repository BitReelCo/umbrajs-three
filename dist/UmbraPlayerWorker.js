var e;
var g;
g || (g = typeof Module !== 'undefined' ? Module : {});
var l = {}, n;
for (n in g) {
  g.hasOwnProperty(n) && (l[n] = g[n]);
}
var aa = "./this.program", p = !1, u = !1, v = !1, ca = !1, da = !1;
p = "object" === typeof window;
u = "function" === typeof importScripts;
v = (ca = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node) && !p && !u;
da = !p && !v && !u;
var w = "", ea, fa, x, ha, ia;
if (v) {
  w = __dirname + "/", ea = function(a, b) {
    ha || (ha = require("fs"));
    ia || (ia = require("path"));
    a = ia.normalize(a);
    return ha.readFileSync(a, b ? null : "utf8");
  }, x = function(a) {
    a = ea(a, !0);
    a.buffer || (a = new Uint8Array(a));
    assert(a.buffer);
    return a;
  }, 1 < process.argv.length && (aa = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), "undefined" !== typeof module && (module.exports = g), process.on("uncaughtException", function(a) {
    throw a;
  }), process.on("unhandledRejection", y), g.inspect = function() {
    return "[Emscripten Module object]";
  };
} else {
  if (da) {
    "undefined" != typeof read && (ea = function(a) {
      return read(a);
    }), x = function(a) {
      if ("function" === typeof readbuffer) {
        return new Uint8Array(readbuffer(a));
      }
      a = read(a, "binary");
      assert("object" === typeof a);
      return a;
    }, "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
  } else {
    if (p || u) {
      u ? w = self.location.href : document.currentScript && (w = document.currentScript.src), w = 0 !== w.indexOf("blob:") ? w.substr(0, w.lastIndexOf("/") + 1) : "", ea = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText;
      }, u && (x = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.responseType = "arraybuffer";
        b.send(null);
        return new Uint8Array(b.response);
      }), fa = function(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function() {
          200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
        };
        d.onerror = c;
        d.send(null);
      };
    }
  }
}
var ja = g.print || console.log.bind(console), A = g.printErr || console.warn.bind(console);
for (n in l) {
  l.hasOwnProperty(n) && (g[n] = l[n]);
}
l = null;
g.thisProgram && (aa = g.thisProgram);
function ka(a) {
  la || (la = {});
  la[a] || (la[a] = 1, A(a));
}
var la, B;
g.wasmBinary && (B = g.wasmBinary);
"object" !== typeof WebAssembly && A("no native wasm support detected");
var C, ma = new WebAssembly.Table({initial:401, maximum:401, element:"anyfunc"}), F = !1;
function assert(a, b) {
  a || y("Assertion failed: " + b);
}
var na = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function G(a, b, c) {
  var d = b + c;
  for (c = b; a[c] && !(c >= d);) {
    ++c;
  }
  if (16 < c - b && a.subarray && na) {
    return na.decode(a.subarray(b, c));
  }
  for (d = ""; b < c;) {
    var f = a[b++];
    if (f & 128) {
      var h = a[b++] & 63;
      if (192 == (f & 224)) {
        d += String.fromCharCode((f & 31) << 6 | h);
      } else {
        var k = a[b++] & 63;
        f = 224 == (f & 240) ? (f & 15) << 12 | h << 6 | k : (f & 7) << 18 | h << 12 | k << 6 | a[b++] & 63;
        65536 > f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
      }
    } else {
      d += String.fromCharCode(f);
    }
  }
  return d;
}
function H(a) {
  return a ? G(I, a, void 0) : "";
}
"undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
function oa(a) {
  0 < a % 65536 && (a += 65536 - a % 65536);
  return a;
}
var buffer, J, I, K;
function pa(a) {
  buffer = a;
  g.HEAP8 = J = new Int8Array(a);
  g.HEAP16 = new Int16Array(a);
  g.HEAP32 = K = new Int32Array(a);
  g.HEAPU8 = I = new Uint8Array(a);
  g.HEAPU16 = new Uint16Array(a);
  g.HEAPU32 = new Uint32Array(a);
  g.HEAPF32 = new Float32Array(a);
  g.HEAPF64 = new Float64Array(a);
}
var qa = g.TOTAL_MEMORY || 16777216;
g.wasmMemory ? C = g.wasmMemory : C = new WebAssembly.Memory({initial:qa / 65536});
C && (buffer = C.buffer);
qa = buffer.byteLength;
pa(buffer);
K[7860] = 5274480;
function ra(a) {
  for (; 0 < a.length;) {
    var b = a.shift();
    if ("function" == typeof b) {
      b();
    } else {
      var c = b.m;
      "number" === typeof c ? void 0 === b.s ? g.dynCall_v(c) : g.dynCall_vi(c, b.s) : c(void 0 === b.s ? null : b.s);
    }
  }
}
var sa = [], ta = [], ua = [], va = [], wa = [], xa = !1;
function ya() {
  var a = g.preRun.shift();
  sa.unshift(a);
}
var za = Math.abs, Aa = Math.ceil, Ba = Math.floor, Ca = Math.min, L = 0, Da = null, M = null;
function Ea() {
  L++;
  g.monitorRunDependencies && g.monitorRunDependencies(L);
}
function Fa() {
  L--;
  g.monitorRunDependencies && g.monitorRunDependencies(L);
  if (0 == L && (null !== Da && (clearInterval(Da), Da = null), M)) {
    var a = M;
    M = null;
    a();
  }
}
g.preloadedImages = {};
g.preloadedAudios = {};
function y(a) {
  if (g.onAbort) {
    g.onAbort(a);
  }
  ja(a);
  A(a);
  F = !0;
  throw new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
}
function Ga() {
  var a = N;
  return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,");
}
var N = "UmbraPlayerWorker.wasm";
if (!Ga()) {
  var Ha = N;
  N = g.locateFile ? g.locateFile(Ha, w) : w + Ha;
}
function Ia() {
  try {
    if (B) {
      return new Uint8Array(B);
    }
    if (x) {
      return x(N);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (a) {
    y(a);
  }
}
function Ja() {
  return B || !p && !u || "function" !== typeof fetch ? new Promise(function(a) {
    a(Ia());
  }) : fetch(N, {credentials:"same-origin"}).then(function(a) {
    if (!a.ok) {
      throw "failed to load wasm binary file at '" + N + "'";
    }
    return a.arrayBuffer();
  }).catch(function() {
    return Ia();
  });
}
var P, Ka;
ta.push({m:function() {
  La();
}});
function Na(a, b) {
  va.unshift({m:a, s:b});
}
function Oa(a, b) {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var f = a[d];
    "." === f ? a.splice(d, 1) : ".." === f ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}
function Pa(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = Oa(a.split("/").filter(function(a) {
    return !!a;
  }), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}
function Qa(a) {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}
function Ra(a) {
  if ("/" === a) {
    return "/";
  }
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}
function Sa() {
  for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
    b = 0 <= c ? arguments[c] : "/";
    if ("string" !== typeof b) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!b) {
      return "";
    }
    a = b + "/" + a;
    b = "/" === b.charAt(0);
  }
  a = Oa(a.split("/").filter(function(a) {
    return !!a;
  }), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
var Ta = [];
function Ua(a, b) {
  Ta[a] = {input:[], output:[], D:b};
  Va(a, Wa);
}
var Wa = {open:function(a) {
  var b = Ta[a.node.rdev];
  if (!b) {
    throw new Q(43);
  }
  a.tty = b;
  a.seekable = !1;
}, close:function(a) {
  a.tty.D.flush(a.tty);
}, flush:function(a) {
  a.tty.D.flush(a.tty);
}, read:function(a, b, c, d) {
  if (!a.tty || !a.tty.D.ta) {
    throw new Q(60);
  }
  for (var f = 0, h = 0; h < d; h++) {
    try {
      var k = a.tty.D.ta(a.tty);
    } catch (m) {
      throw new Q(29);
    }
    if (void 0 === k && 0 === f) {
      throw new Q(6);
    }
    if (null === k || void 0 === k) {
      break;
    }
    f++;
    b[c + h] = k;
  }
  f && (a.node.timestamp = Date.now());
  return f;
}, write:function(a, b, c, d) {
  if (!a.tty || !a.tty.D.ja) {
    throw new Q(60);
  }
  try {
    for (var f = 0; f < d; f++) {
      a.tty.D.ja(a.tty, b[c + f]);
    }
  } catch (h) {
    throw new Q(29);
  }
  d && (a.node.timestamp = Date.now());
  return f;
}}, Ya = {ta:function(a) {
  if (!a.input.length) {
    var b = null;
    if (v) {
      var c = Buffer.Ea ? Buffer.Ea(256) : new Buffer(256), d = 0;
      try {
        d = ha.readSync(process.stdin.fd, c, 0, 256, null);
      } catch (f) {
        if (-1 != f.toString().indexOf("EOF")) {
          d = 0;
        } else {
          throw f;
        }
      }
      0 < d ? b = c.slice(0, d).toString("utf-8") : b = null;
    } else {
      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
    }
    if (!b) {
      return null;
    }
    a.input = Xa(b, !0);
  }
  return a.input.shift();
}, ja:function(a, b) {
  null === b || 10 === b ? (ja(G(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (ja(G(a.output, 0)), a.output = []);
}}, Za = {ja:function(a, b) {
  null === b || 10 === b ? (A(G(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, flush:function(a) {
  a.output && 0 < a.output.length && (A(G(a.output, 0)), a.output = []);
}}, R = {j:null, o:function() {
  return R.createNode(null, "/", 16895, 0);
}, createNode:function(a, b, c, d) {
  if (24576 === (c & 61440) || 4096 === (c & 61440)) {
    throw new Q(63);
  }
  R.j || (R.j = {dir:{node:{u:R.f.u, l:R.f.l, lookup:R.f.lookup, R:R.f.R, rename:R.f.rename, unlink:R.f.unlink, rmdir:R.f.rmdir, readdir:R.f.readdir, symlink:R.f.symlink}, stream:{v:R.g.v}}, file:{node:{u:R.f.u, l:R.f.l}, stream:{v:R.g.v, read:R.g.read, write:R.g.write, na:R.g.na, va:R.g.va, X:R.g.X}}, link:{node:{u:R.f.u, l:R.f.l, readlink:R.f.readlink}, stream:{}}, oa:{node:{u:R.f.u, l:R.f.l}, stream:$a}});
  c = ab(a, b, c, d);
  16384 === (c.mode & 61440) ? (c.f = R.j.dir.node, c.g = R.j.dir.stream, c.c = {}) : 32768 === (c.mode & 61440) ? (c.f = R.j.file.node, c.g = R.j.file.stream, c.h = 0, c.c = null) : 40960 === (c.mode & 61440) ? (c.f = R.j.link.node, c.g = R.j.link.stream) : 8192 === (c.mode & 61440) && (c.f = R.j.oa.node, c.g = R.j.oa.stream);
  c.timestamp = Date.now();
  a && (a.c[b] = c);
  return c;
}, lb:function(a) {
  if (a.c && a.c.subarray) {
    for (var b = [], c = 0; c < a.h; ++c) {
      b.push(a.c[c]);
    }
    return b;
  }
  return a.c;
}, mb:function(a) {
  return a.c ? a.c.subarray ? a.c.subarray(0, a.h) : new Uint8Array(a.c) : new Uint8Array;
}, pa:function(a, b) {
  var c = a.c ? a.c.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) | 0), 0 != c && (b = Math.max(b, 256)), c = a.c, a.c = new Uint8Array(b), 0 < a.h && a.c.set(c.subarray(0, a.h), 0));
}, Pa:function(a, b) {
  if (a.h != b) {
    if (0 == b) {
      a.c = null, a.h = 0;
    } else {
      if (!a.c || a.c.subarray) {
        var c = a.c;
        a.c = new Uint8Array(new ArrayBuffer(b));
        c && a.c.set(c.subarray(0, Math.min(b, a.h)));
      } else {
        if (a.c || (a.c = []), a.c.length > b) {
          a.c.length = b;
        } else {
          for (; a.c.length < b;) {
            a.c.push(0);
          }
        }
      }
      a.h = b;
    }
  }
}, f:{u:function(a) {
  var b = {};
  b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
  b.ino = a.id;
  b.mode = a.mode;
  b.nlink = 1;
  b.uid = 0;
  b.gid = 0;
  b.rdev = a.rdev;
  16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.h : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.atime = new Date(a.timestamp);
  b.mtime = new Date(a.timestamp);
  b.ctime = new Date(a.timestamp);
  b.Fa = 4096;
  b.blocks = Math.ceil(b.size / b.Fa);
  return b;
}, l:function(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  void 0 !== b.size && R.Pa(a, b.size);
}, lookup:function() {
  throw bb[44];
}, R:function(a, b, c, d) {
  return R.createNode(a, b, c, d);
}, rename:function(a, b, c) {
  if (16384 === (a.mode & 61440)) {
    try {
      var d = cb(b, c);
    } catch (h) {
    }
    if (d) {
      for (var f in d.c) {
        throw new Q(55);
      }
    }
  }
  delete a.parent.c[a.name];
  a.name = c;
  b.c[c] = a;
  a.parent = b;
}, unlink:function(a, b) {
  delete a.c[b];
}, rmdir:function(a, b) {
  var c = cb(a, b), d;
  for (d in c.c) {
    throw new Q(55);
  }
  delete a.c[b];
}, readdir:function(a) {
  var b = [".", ".."], c;
  for (c in a.c) {
    a.c.hasOwnProperty(c) && b.push(c);
  }
  return b;
}, symlink:function(a, b, c) {
  a = R.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink:function(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new Q(28);
  }
  return a.link;
}}, g:{read:function(a, b, c, d, f) {
  var h = a.node.c;
  if (f >= a.node.h) {
    return 0;
  }
  a = Math.min(a.node.h - f, d);
  if (8 < a && h.subarray) {
    b.set(h.subarray(f, f + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = h[f + d];
    }
  }
  return a;
}, write:function(a, b, c, d, f, h) {
  b.buffer === J.buffer && (h = !1);
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.c || a.c.subarray)) {
    if (h) {
      return a.c = b.subarray(c, c + d), a.h = d;
    }
    if (0 === a.h && 0 === f) {
      return a.c = new Uint8Array(b.subarray(c, c + d)), a.h = d;
    }
    if (f + d <= a.h) {
      return a.c.set(b.subarray(c, c + d), f), d;
    }
  }
  R.pa(a, f + d);
  if (a.c.subarray && b.subarray) {
    a.c.set(b.subarray(c, c + d), f);
  } else {
    for (h = 0; h < d; h++) {
      a.c[f + h] = b[c + h];
    }
  }
  a.h = Math.max(a.h, f + d);
  return d;
}, v:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.h);
  if (0 > b) {
    throw new Q(28);
  }
  return b;
}, na:function(a, b, c) {
  R.pa(a.node, b + c);
  a.node.h = Math.max(a.node.h, b + c);
}, va:function(a, b, c, d, f, h, k) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new Q(43);
  }
  c = a.node.c;
  if (k & 2 || c.buffer !== b.buffer) {
    if (0 < f || f + d < a.node.h) {
      c.subarray ? c = c.subarray(f, f + d) : c = Array.prototype.slice.call(c, f, f + d);
    }
    a = !0;
    f = b.buffer == J.buffer;
    d = db(d);
    if (!d) {
      throw new Q(48);
    }
    (f ? J : b).set(c, d);
  } else {
    a = !1, d = c.byteOffset;
  }
  return {wb:d, Da:a};
}, X:function(a, b, c, d, f) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new Q(43);
  }
  if (f & 2) {
    return 0;
  }
  R.g.write(a, b, 0, d, c, !1);
  return 0;
}}}, eb = null, fb = {}, S = [], gb = 1, T = null, hb = !0, ib = {}, Q = null, bb = {};
function U(a, b) {
  a = Sa("/", a);
  b = b || {};
  if (!a) {
    return {path:"", node:null};
  }
  var c = {ra:!0, ka:0}, d;
  for (d in c) {
    void 0 === b[d] && (b[d] = c[d]);
  }
  if (8 < b.ka) {
    throw new Q(32);
  }
  a = Oa(a.split("/").filter(function(a) {
    return !!a;
  }), !1);
  var f = eb;
  c = "/";
  for (d = 0; d < a.length; d++) {
    var h = d === a.length - 1;
    if (h && b.parent) {
      break;
    }
    f = cb(f, a[d]);
    c = Pa(c + "/" + a[d]);
    f.S && (!h || h && b.ra) && (f = f.S.root);
    if (!h || b.qa) {
      for (h = 0; 40960 === (f.mode & 61440);) {
        if (f = jb(c), c = Sa(Qa(c), f), f = U(c, {ka:b.ka}).node, 40 < h++) {
          throw new Q(32);
        }
      }
    }
  }
  return {path:c, node:f};
}
function kb(a) {
  for (var b;;) {
    if (a === a.parent) {
      return a = a.o.wa, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent;
  }
}
function lb(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % T.length;
}
function mb(a) {
  var b = lb(a.parent.id, a.name);
  a.Oa = T[b];
  T[b] = a;
}
function cb(a, b) {
  var c;
  if (c = (c = nb(a, "x")) ? c : a.f.lookup ? 0 : 2) {
    throw new Q(c, a);
  }
  for (c = T[lb(a.id, b)]; c; c = c.Oa) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return a.f.lookup(a, b);
}
function ab(a, b, c, d) {
  V || (V = function(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.o = a.o;
    this.S = null;
    this.id = gb++;
    this.name = b;
    this.mode = c;
    this.f = {};
    this.g = {};
    this.rdev = d;
  }, V.prototype = {}, Object.defineProperties(V.prototype, {read:{get:function() {
    return 365 === (this.mode & 365);
  }, set:function(a) {
    a ? this.mode |= 365 : this.mode &= -366;
  }}, write:{get:function() {
    return 146 === (this.mode & 146);
  }, set:function(a) {
    a ? this.mode |= 146 : this.mode &= -147;
  }}}));
  a = new V(a, b, c, d);
  mb(a);
  return a;
}
var ob = {r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218};
function pb(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function nb(a, b) {
  if (hb) {
    return 0;
  }
  if (-1 === b.indexOf("r") || a.mode & 292) {
    if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function qb(a, b) {
  try {
    return cb(a, b), 20;
  } catch (c) {
  }
  return nb(a, "wx");
}
function rb() {
  var a = 4096;
  for (var b = 0; b <= a; b++) {
    if (!S[b]) {
      return b;
    }
  }
  throw new Q(33);
}
function sb(a) {
  W || (W = function() {
  }, W.prototype = {}, Object.defineProperties(W.prototype, {object:{get:function() {
    return this.node;
  }, set:function(a) {
    this.node = a;
  }}}));
  var b = new W, c;
  for (c in a) {
    b[c] = a[c];
  }
  a = b;
  b = rb();
  a.fd = b;
  return S[b] = a;
}
var $a = {open:function(a) {
  a.g = fb[a.node.rdev].g;
  a.g.open && a.g.open(a);
}, v:function() {
  throw new Q(70);
}};
function Va(a, b) {
  fb[a] = {g:b};
}
function tb(a, b) {
  var c = "/" === b, d = !b;
  if (c && eb) {
    throw new Q(10);
  }
  if (!c && !d) {
    var f = U(b, {ra:!1});
    b = f.path;
    f = f.node;
    if (f.S) {
      throw new Q(10);
    }
    if (16384 !== (f.mode & 61440)) {
      throw new Q(54);
    }
  }
  b = {type:a, ub:{}, wa:b, Na:[]};
  a = a.o(b);
  a.o = b;
  b.root = a;
  c ? eb = a : f && (f.S = b, f.o && f.o.Na.push(b));
}
function ub(a, b, c) {
  var d = U(a, {parent:!0}).node;
  a = Ra(a);
  if (!a || "." === a || ".." === a) {
    throw new Q(28);
  }
  var f = qb(d, a);
  if (f) {
    throw new Q(f);
  }
  if (!d.f.R) {
    throw new Q(63);
  }
  return d.f.R(d, a, b, c);
}
function X(a) {
  ub(a, 16895, 0);
}
function vb(a, b, c) {
  "undefined" === typeof c && (c = b, b = 438);
  ub(a, b | 8192, c);
}
function wb(a, b) {
  if (!Sa(a)) {
    throw new Q(44);
  }
  var c = U(b, {parent:!0}).node;
  if (!c) {
    throw new Q(44);
  }
  b = Ra(b);
  var d = qb(c, b);
  if (d) {
    throw new Q(d);
  }
  if (!c.f.symlink) {
    throw new Q(63);
  }
  c.f.symlink(c, b, a);
}
function jb(a) {
  a = U(a).node;
  if (!a) {
    throw new Q(44);
  }
  if (!a.f.readlink) {
    throw new Q(28);
  }
  return Sa(kb(a.parent), a.f.readlink(a));
}
function xb(a, b) {
  if ("" === a) {
    throw new Q(44);
  }
  if ("string" === typeof b) {
    var c = ob[b];
    if ("undefined" === typeof c) {
      throw Error("Unknown file open mode: " + b);
    }
    b = c;
  }
  var d = b & 64 ? ("undefined" === typeof d ? 438 : d) & 4095 | 32768 : 0;
  if ("object" === typeof a) {
    var f = a;
  } else {
    a = Pa(a);
    try {
      f = U(a, {qa:!(b & 131072)}).node;
    } catch (k) {
    }
  }
  c = !1;
  if (b & 64) {
    if (f) {
      if (b & 128) {
        throw new Q(20);
      }
    } else {
      f = ub(a, d, 0), c = !0;
    }
  }
  if (!f) {
    throw new Q(44);
  }
  8192 === (f.mode & 61440) && (b &= -513);
  if (b & 65536 && 16384 !== (f.mode & 61440)) {
    throw new Q(54);
  }
  if (!c && (d = f ? 40960 === (f.mode & 61440) ? 32 : 16384 === (f.mode & 61440) && ("r" !== pb(b) || b & 512) ? 31 : nb(f, pb(b)) : 44)) {
    throw new Q(d);
  }
  if (b & 512) {
    d = f;
    var h;
    "string" === typeof d ? h = U(d, {qa:!0}).node : h = d;
    if (!h.f.l) {
      throw new Q(63);
    }
    if (16384 === (h.mode & 61440)) {
      throw new Q(31);
    }
    if (32768 !== (h.mode & 61440)) {
      throw new Q(28);
    }
    if (d = nb(h, "w")) {
      throw new Q(d);
    }
    h.f.l(h, {size:0, timestamp:Date.now()});
  }
  b &= -641;
  f = sb({node:f, path:kb(f), flags:b, seekable:!0, position:0, g:f.g, bb:[], error:!1});
  f.g.open && f.g.open(f);
  !g.logReadFiles || b & 1 || (yb || (yb = {}), a in yb || (yb[a] = 1, console.log("FS.trackingDelegate error on read file: " + a)));
  try {
    ib.onOpenFile && (f = 0, 1 !== (b & 2097155) && (f |= 1), 0 !== (b & 2097155) && (f |= 2), ib.onOpenFile(a, f));
  } catch (k) {
    console.log("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + k.message);
  }
}
function zb(a, b, c) {
  if (null === a.fd) {
    throw new Q(8);
  }
  if (!a.seekable || !a.g.v) {
    throw new Q(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new Q(28);
  }
  a.position = a.g.v(a, b, c);
  a.bb = [];
}
function Ab() {
  Q || (Q = function(a, b) {
    this.node = b;
    this.Ua = function(a) {
      this.I = a;
    };
    this.Ua(a);
    this.message = "FS error";
  }, Q.prototype = Error(), Q.prototype.constructor = Q, [44].forEach(function(a) {
    bb[a] = new Q(a);
    bb[a].stack = "<generic error, no stack>";
  }));
}
var Bb;
function Cb(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}
function Y(a, b, c) {
  a = Pa("/dev/" + a);
  var d = Cb(!!b, !!c);
  Db || (Db = 64);
  var f = Db++ << 8 | 0;
  Va(f, {open:function(a) {
    a.seekable = !1;
  }, close:function() {
    c && c.buffer && c.buffer.length && c(10);
  }, read:function(a, c, d, f) {
    for (var h = 0, k = 0; k < f; k++) {
      try {
        var m = b();
      } catch (z) {
        throw new Q(29);
      }
      if (void 0 === m && 0 === h) {
        throw new Q(6);
      }
      if (null === m || void 0 === m) {
        break;
      }
      h++;
      c[d + k] = m;
    }
    h && (a.node.timestamp = Date.now());
    return h;
  }, write:function(a, b, d, f) {
    for (var h = 0; h < f; h++) {
      try {
        c(b[d + h]);
      } catch (r) {
        throw new Q(29);
      }
    }
    f && (a.node.timestamp = Date.now());
    return h;
  }});
  vb(a, d, f);
}
var Db, Eb = {}, V, W, yb, Fb = {}, Gb = 0;
function Hb() {
  Gb += 4;
  return K[Gb - 4 >> 2];
}
function Ib(a) {
  void 0 === a && (a = Hb());
  a = S[a];
  if (!a) {
    throw new Q(8);
  }
  return a;
}
function Jb(a, b) {
  e.b.Z = a;
  e.b.$ = b;
  if (e.b.m) {
    if (0 == a) {
      e.b.A = function() {
        var a = Math.max(0, e.b.Xa + b - Z()) | 0;
        setTimeout(e.b.Y, a);
      }, e.b.method = "timeout";
    } else {
      if (1 == a) {
        e.b.A = function() {
          e.requestAnimationFrame(e.b.Y);
        }, e.b.method = "rAF";
      } else {
        if (2 == a) {
          if ("undefined" === typeof setImmediate) {
            var c = [];
            addEventListener("message", function(a) {
              if ("setimmediate" === a.data || "setimmediate" === a.data.target) {
                a.stopPropagation(), c.shift()();
              }
            }, !0);
            setImmediate = function(a) {
              c.push(a);
              u ? (void 0 === g.setImmediates && (g.setImmediates = []), g.setImmediates.push(a), postMessage({target:"setimmediate"})) : postMessage("setimmediate", "*");
            };
          }
          e.b.A = function() {
            setImmediate(e.b.Y);
          };
          e.b.method = "immediate";
        }
      }
    }
  }
}
function Z() {
  y();
}
function Kb(a) {
  var b = e.b.s;
  assert(!e.b.m, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  e.b.m = a;
  e.b.s = b;
  var c = "undefined" !== typeof b ? function() {
    g.dynCall_vi(a, b);
  } : function() {
    g.dynCall_v(a);
  };
  var d = e.b.B;
  e.b.Y = function() {
    if (!F) {
      if (0 < e.b.Aa.length) {
        var a = Date.now(), b = e.b.Aa.shift();
        b.m(b.s);
        if (e.b.la) {
          var k = e.b.la, m = 0 == k % 1 ? k - 1 : Math.floor(k);
          e.b.la = b.ib ? m : (8 * k + (m + 0.5)) / 9;
        }
        console.log('main loop blocker "' + b.name + '" took ' + (Date.now() - a) + " ms");
        e.b.cb();
        d < e.b.B || setTimeout(e.b.Y, 0);
      } else {
        d < e.b.B || (e.b.fa = e.b.fa + 1 | 0, 1 == e.b.Z && 1 < e.b.$ && 0 != e.b.fa % e.b.$ ? e.b.A() : (0 == e.b.Z && (e.b.Xa = Z()), "timeout" === e.b.method && g.ea && (A("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), e.b.method = ""), e.b.Ra(c), d < e.b.B || e.b.A()));
      }
    }
  };
}
e = {b:{A:null, method:"", B:0, m:null, s:0, Z:0, $:0, fa:0, Aa:[], pause:function() {
  e.b.A = null;
  e.b.B++;
}, resume:function() {
  e.b.B++;
  var a = e.b.Z, b = e.b.$, c = e.b.m;
  e.b.m = null;
  Kb(c);
  Jb(a, b);
  e.b.A();
}, cb:function() {
  if (g.setStatus) {
    var a = g.statusMessage || "Please wait...", b = e.b.la, c = e.b.kb;
    b ? b < c ? g.setStatus(a + " (" + (c - b) + "/" + c + ")") : g.setStatus(a) : g.setStatus("");
  }
}, Ra:function(a) {
  if (!(F || g.preMainLoop && !1 === g.preMainLoop())) {
    try {
      a();
    } catch (b) {
      throw b && "object" === typeof b && b.stack && A("exception thrown: " + [b, b.stack]), b;
    }
    g.postMainLoop && g.postMainLoop();
  }
}}, J:!1, ia:!1, Ma:[], workers:[], Ka:function() {
  function a() {
    e.ia = document.pointerLockElement === g.canvas || document.mozPointerLockElement === g.canvas || document.webkitPointerLockElement === g.canvas || document.msPointerLockElement === g.canvas;
  }
  g.preloadPlugins || (g.preloadPlugins = []);
  if (!e.La) {
    e.La = !0;
    try {
      e.O = !0;
    } catch (c) {
      e.O = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
    }
    e.BlobBuilder = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : e.O ? null : console.log("warning: no BlobBuilder");
    e.N = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
    g.za || "undefined" !== typeof e.N || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), g.za = !0);
    g.preloadPlugins.push({canHandle:function(a) {
      return !g.za && /\.(jpg|jpeg|png|bmp)$/i.test(a);
    }, handle:function(a, b, f, h) {
      var c = null;
      if (e.O) {
        try {
          c = new Blob([a], {type:e.ga(b)}), c.size !== a.length && (c = new Blob([(new Uint8Array(a)).buffer], {type:e.ga(b)}));
        } catch (q) {
          ka("Blob constructor present but fails: " + q + "; falling back to blob builder");
        }
      }
      c || (c = new e.BlobBuilder, c.append((new Uint8Array(a)).buffer), c = c.getBlob());
      var d = e.N.createObjectURL(c), t = new Image;
      t.onload = function() {
        assert(t.complete, "Image " + b + " could not be decoded");
        var c = document.createElement("canvas");
        c.width = t.width;
        c.height = t.height;
        c.getContext("2d").drawImage(t, 0, 0);
        g.preloadedImages[b] = c;
        e.N.revokeObjectURL(d);
        f && f(a);
      };
      t.onerror = function() {
        console.log("Image " + d + " could not be decoded");
        h && h();
      };
      t.src = d;
    }});
    g.preloadPlugins.push({canHandle:function(a) {
      return !g.tb && a.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1};
    }, handle:function(a, b, f, h) {
      function c(c) {
        t || (t = !0, g.preloadedAudios[b] = c, f && f(a));
      }
      function d() {
        t || (t = !0, g.preloadedAudios[b] = new Audio, h && h());
      }
      var t = !1;
      if (e.O) {
        try {
          var q = new Blob([a], {type:e.ga(b)});
        } catch (D) {
          return d();
        }
        q = e.N.createObjectURL(q);
        var r = new Audio;
        r.addEventListener("canplaythrough", function() {
          c(r);
        }, !1);
        r.onerror = function() {
          if (!t) {
            console.log("warning: browser could not fully decode audio " + b + ", trying slower base64 approach");
            for (var d = "", f = 0, h = 0, k = 0; k < a.length; k++) {
              for (f = f << 8 | a[k], h += 8; 6 <= h;) {
                var m = f >> h - 6 & 63;
                h -= 6;
                d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[m];
              }
            }
            2 == h ? (d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 3) << 4], d += "==") : 4 == h && (d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 15) << 2], d += "=");
            r.src = "data:audio/x-" + b.substr(-3) + ";base64," + d;
            c(r);
          }
        };
        r.src = q;
        e.Sa(function() {
          c(r);
        }, 10000);
      } else {
        return d();
      }
    }});
    var b = g.canvas;
    b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function() {
    }, b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {
    }, b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), g.elementPointerLock && b.addEventListener("click", function(a) {
      !e.ia && g.canvas.requestPointerLock && (g.canvas.requestPointerLock(), a.preventDefault());
    }, !1));
  }
}, createContext:function(a, b, c, d) {
  if (b && g.ea && a == g.canvas) {
    return g.ea;
  }
  var f;
  if (b) {
    var h = {antialias:!1, alpha:!1, qb:1};
    if (d) {
      for (var k in d) {
        h[k] = d[k];
      }
    }
    if ("undefined" !== typeof GL && (f = GL.createContext(a, h))) {
      var m = GL.getContext(f).fb;
    }
  } else {
    m = a.getContext("2d");
  }
  if (!m) {
    return null;
  }
  c && (b || assert("undefined" === typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), g.ea = m, b && GL.rb(f), g.Db = b, e.Ma.forEach(function(a) {
    a();
  }), e.Ka());
  return m;
}, jb:function() {
}, sa:!1, P:void 0, F:void 0, requestFullscreen:function(a, b, c) {
  function d() {
    e.J = !1;
    var a = f.parentNode;
    (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a ? (f.exitFullscreen = e.exitFullscreen, e.P && f.requestPointerLock(), e.J = !0, e.F ? e.Va() : e.M(f)) : (a.parentNode.insertBefore(f, a), a.parentNode.removeChild(a), e.F ? e.Wa() : e.M(f));
    if (g.onFullScreen) {
      g.onFullScreen(e.J);
    }
    if (g.onFullscreen) {
      g.onFullscreen(e.J);
    }
  }
  e.P = a;
  e.F = b;
  e.Ca = c;
  "undefined" === typeof e.P && (e.P = !0);
  "undefined" === typeof e.F && (e.F = !1);
  "undefined" === typeof e.Ca && (e.Ca = null);
  var f = g.canvas;
  e.sa || (e.sa = !0, document.addEventListener("fullscreenchange", d, !1), document.addEventListener("mozfullscreenchange", d, !1), document.addEventListener("webkitfullscreenchange", d, !1), document.addEventListener("MSFullscreenChange", d, !1));
  var h = document.createElement("div");
  f.parentNode.insertBefore(h, f);
  h.appendChild(f);
  h.requestFullscreen = h.requestFullscreen || h.mozRequestFullScreen || h.msRequestFullscreen || (h.webkitRequestFullscreen ? function() {
    h.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null) || (h.webkitRequestFullScreen ? function() {
    h.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null);
  c ? h.requestFullscreen({Eb:c}) : h.requestFullscreen();
}, Ba:function(a, b, c) {
  A("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");
  e.Ba = function(a, b, c) {
    return e.requestFullscreen(a, b, c);
  };
  return e.requestFullscreen(a, b, c);
}, exitFullscreen:function() {
  if (!e.J) {
    return !1;
  }
  (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {
  }).apply(document, []);
  return !0;
}, C:0, Ga:function(a) {
  var b = Date.now();
  if (0 === e.C) {
    e.C = b + 1000 / 60;
  } else {
    for (; b + 2 >= e.C;) {
      e.C += 1000 / 60;
    }
  }
  setTimeout(a, Math.max(e.C - b, 0));
}, requestAnimationFrame:function(a) {
  if ("function" === typeof requestAnimationFrame) {
    requestAnimationFrame(a);
  } else {
    var b = e.Ga;
    b(a);
  }
}, yb:function(a) {
  return function() {
    if (!F) {
      return a.apply(null, arguments);
    }
  };
}, H:!0, K:[], vb:function() {
  e.H = !1;
}, xb:function() {
  e.H = !0;
  if (0 < e.K.length) {
    var a = e.K;
    e.K = [];
    a.forEach(function(a) {
      a();
    });
  }
}, zb:function(a) {
  return e.requestAnimationFrame(function() {
    F || (e.H ? a() : e.K.push(a));
  });
}, Sa:function(a, b) {
  return setTimeout(function() {
    F || (e.H ? a() : e.K.push(a));
  }, b);
}, Ab:function(a, b) {
  return setInterval(function() {
    F || e.H && a();
  }, b);
}, ga:function(a) {
  return {jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)];
}, getUserMedia:function(a) {
  window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.getUserMedia(a);
}, Ha:function(a) {
  return a.movementX || a.mozMovementX || a.webkitMovementX || 0;
}, Ia:function(a) {
  return a.movementY || a.mozMovementY || a.webkitMovementY || 0;
}, nb:function(a) {
  switch(a.type) {
    case "DOMMouseScroll":
      var b = a.detail / 3;
      break;
    case "mousewheel":
      b = a.wheelDelta / 120;
      break;
    case "wheel":
      b = a.deltaY;
      switch(a.deltaMode) {
        case 0:
          b /= 100;
          break;
        case 1:
          b /= 3;
          break;
        case 2:
          b *= 80;
          break;
        default:
          throw "unrecognized mouse wheel delta mode: " + a.deltaMode;
      }break;
    default:
      throw "unrecognized mouse wheel event: " + a.type;
  }
  return b;
}, V:0, W:0, T:0, U:0, touches:{}, ua:{}, hb:function(a) {
  if (e.ia) {
    "mousemove" != a.type && "mozMovementX" in a ? e.T = e.U = 0 : (e.T = e.Ha(a), e.U = e.Ia(a)), e.V += e.T, e.W += e.U;
  } else {
    var b = g.canvas.getBoundingClientRect(), c = g.canvas.width, d = g.canvas.height, f = "undefined" !== typeof window.scrollX ? window.scrollX : window.pageXOffset, h = "undefined" !== typeof window.scrollY ? window.scrollY : window.pageYOffset;
    if ("touchstart" === a.type || "touchend" === a.type || "touchmove" === a.type) {
      var k = a.Cb;
      if (void 0 !== k) {
        if (f = k.pageX - (f + b.left), h = k.pageY - (h + b.top), f *= c / b.width, h *= d / b.height, b = {x:f, y:h}, "touchstart" === a.type) {
          e.ua[k.identifier] = b, e.touches[k.identifier] = b;
        } else {
          if ("touchend" === a.type || "touchmove" === a.type) {
            (a = e.touches[k.identifier]) || (a = b), e.ua[k.identifier] = a, e.touches[k.identifier] = b;
          }
        }
      }
    } else {
      k = a.pageX - (f + b.left), a = a.pageY - (h + b.top), k *= c / b.width, a *= d / b.height, e.T = k - e.V, e.U = a - e.W, e.V = k, e.W = a;
    }
  }
}, gb:function(a, b, c, d) {
  var f = d ? "" : "al " + a;
  fa(a, function(c) {
    assert(c, 'Loading data file "' + a + '" failed (no arrayBuffer).');
    b(new Uint8Array(c));
    f && Fa();
  }, function() {
    if (c) {
      c();
    } else {
      throw 'Loading data file "' + a + '" failed.';
    }
  });
  f && Ea();
}, Qa:[], ma:function() {
  var a = g.canvas;
  e.Qa.forEach(function(b) {
    b(a.width, a.height);
  });
}, Ta:function(a, b, c) {
  e.M(g.canvas, a, b);
  c || e.ma();
}, Hb:0, Gb:0, Va:function() {
  e.M(g.canvas);
  e.ma();
}, Wa:function() {
  e.M(g.canvas);
  e.ma();
}, M:function(a, b, c) {
  b && c ? (a.eb = b, a.Ja = c) : (b = a.eb, c = a.Ja);
  var d = b, f = c;
  g.forcedAspectRatio && 0 < g.forcedAspectRatio && (d / f < g.forcedAspectRatio ? d = Math.round(f * g.forcedAspectRatio) : f = Math.round(d / g.forcedAspectRatio));
  if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
    var h = Math.min(screen.width / d, screen.height / f);
    d = Math.round(d * h);
    f = Math.round(f * h);
  }
  e.F ? (a.width != d && (a.width = d), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || f != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
}, Fb:{}, ya:0, ob:function() {
  var a = e.ya;
  e.ya++;
  return a;
}};
var Lb = {};
function Mb() {
  if (!Nb) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:aa}, b;
    for (b in Lb) {
      a[b] = Lb[b];
    }
    var c = [];
    for (b in a) {
      c.push(b + "=" + a[b]);
    }
    Nb = c;
  }
  return Nb;
}
var Nb;
function Ob(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
function Pb(a, b) {
  for (var c = 0, d = 0; d <= b; c += a[d++]) {
  }
  return c;
}
var Qb = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Rb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Sb(a, b) {
  for (a = new Date(a.getTime()); 0 < b;) {
    var c = a.getMonth(), d = (Ob(a.getFullYear()) ? Qb : Rb)[c];
    if (b > d - a.getDate()) {
      b -= d - a.getDate() + 1, a.setDate(1), 11 > c ? a.setMonth(c + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
    } else {
      a.setDate(a.getDate() + b);
      break;
    }
  }
  return a;
}
function Tb(a, b, c, d) {
  function f(a, b, c) {
    for (a = "number" === typeof a ? a.toString() : a || ""; a.length < b;) {
      a = c[0] + a;
    }
    return a;
  }
  function h(a, b) {
    return f(a, b, "0");
  }
  function k(a, b) {
    function c(a) {
      return 0 > a ? -1 : 0 < a ? 1 : 0;
    }
    var d;
    0 === (d = c(a.getFullYear() - b.getFullYear())) && 0 === (d = c(a.getMonth() - b.getMonth())) && (d = c(a.getDate() - b.getDate()));
    return d;
  }
  function m(a) {
    switch(a.getDay()) {
      case 0:
        return new Date(a.getFullYear() - 1, 11, 29);
      case 1:
        return a;
      case 2:
        return new Date(a.getFullYear(), 0, 3);
      case 3:
        return new Date(a.getFullYear(), 0, 2);
      case 4:
        return new Date(a.getFullYear(), 0, 1);
      case 5:
        return new Date(a.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(a.getFullYear() - 1, 11, 30);
    }
  }
  function t(a) {
    a = Sb(new Date(a.i + 1900, 0, 1), a.da);
    var b = m(new Date(a.getFullYear() + 1, 0, 4));
    return 0 >= k(m(new Date(a.getFullYear(), 0, 4)), a) ? 0 >= k(b, a) ? a.getFullYear() + 1 : a.getFullYear() : a.getFullYear() - 1;
  }
  var q = K[d + 40 >> 2];
  d = {$a:K[d >> 2], Za:K[d + 4 >> 2], aa:K[d + 8 >> 2], L:K[d + 12 >> 2], G:K[d + 16 >> 2], i:K[d + 20 >> 2], ba:K[d + 24 >> 2], da:K[d + 28 >> 2], Bb:K[d + 32 >> 2], Ya:K[d + 36 >> 2], ab:q ? H(q) : ""};
  c = H(c);
  q = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y"};
  for (var r in q) {
    c = c.replace(new RegExp(r, "g"), q[r]);
  }
  var D = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), z = "January February March April May June July August September October November December".split(" ");
  q = {"%a":function(a) {
    return D[a.ba].substring(0, 3);
  }, "%A":function(a) {
    return D[a.ba];
  }, "%b":function(a) {
    return z[a.G].substring(0, 3);
  }, "%B":function(a) {
    return z[a.G];
  }, "%C":function(a) {
    return h((a.i + 1900) / 100 | 0, 2);
  }, "%d":function(a) {
    return h(a.L, 2);
  }, "%e":function(a) {
    return f(a.L, 2, " ");
  }, "%g":function(a) {
    return t(a).toString().substring(2);
  }, "%G":function(a) {
    return t(a);
  }, "%H":function(a) {
    return h(a.aa, 2);
  }, "%I":function(a) {
    a = a.aa;
    0 == a ? a = 12 : 12 < a && (a -= 12);
    return h(a, 2);
  }, "%j":function(a) {
    return h(a.L + Pb(Ob(a.i + 1900) ? Qb : Rb, a.G - 1), 3);
  }, "%m":function(a) {
    return h(a.G + 1, 2);
  }, "%M":function(a) {
    return h(a.Za, 2);
  }, "%n":function() {
    return "\n";
  }, "%p":function(a) {
    return 0 <= a.aa && 12 > a.aa ? "AM" : "PM";
  }, "%S":function(a) {
    return h(a.$a, 2);
  }, "%t":function() {
    return "\t";
  }, "%u":function(a) {
    return a.ba || 7;
  }, "%U":function(a) {
    var b = new Date(a.i + 1900, 0, 1), c = 0 === b.getDay() ? b : Sb(b, 7 - b.getDay());
    a = new Date(a.i + 1900, a.G, a.L);
    return 0 > k(c, a) ? h(Math.ceil((31 - c.getDate() + (Pb(Ob(a.getFullYear()) ? Qb : Rb, a.getMonth() - 1) - 31) + a.getDate()) / 7), 2) : 0 === k(c, b) ? "01" : "00";
  }, "%V":function(a) {
    var b = m(new Date(a.i + 1900, 0, 4)), c = m(new Date(a.i + 1901, 0, 4)), d = Sb(new Date(a.i + 1900, 0, 1), a.da);
    return 0 > k(d, b) ? "53" : 0 >= k(c, d) ? "01" : h(Math.ceil((b.getFullYear() < a.i + 1900 ? a.da + 32 - b.getDate() : a.da + 1 - b.getDate()) / 7), 2);
  }, "%w":function(a) {
    return a.ba;
  }, "%W":function(a) {
    var b = new Date(a.i, 0, 1), c = 1 === b.getDay() ? b : Sb(b, 0 === b.getDay() ? 1 : 7 - b.getDay() + 1);
    a = new Date(a.i + 1900, a.G, a.L);
    return 0 > k(c, a) ? h(Math.ceil((31 - c.getDate() + (Pb(Ob(a.getFullYear()) ? Qb : Rb, a.getMonth() - 1) - 31) + a.getDate()) / 7), 2) : 0 === k(c, b) ? "01" : "00";
  }, "%y":function(a) {
    return (a.i + 1900).toString().substring(2);
  }, "%Y":function(a) {
    return a.i + 1900;
  }, "%z":function(a) {
    a = a.Ya;
    var b = 0 <= a;
    a = Math.abs(a) / 60;
    return (b ? "+" : "-") + String("0000" + (a / 60 * 100 + a % 60)).slice(-4);
  }, "%Z":function(a) {
    return a.ab;
  }, "%%":function() {
    return "%";
  }};
  for (r in q) {
    0 <= c.indexOf(r) && (c = c.replace(new RegExp(r, "g"), q[r](d)));
  }
  r = Xa(c, !1);
  if (r.length > b) {
    return 0;
  }
  J.set(r, a);
  return r.length - 1;
}
Ab();
T = Array(4096);
tb(R, "/");
X("/tmp");
X("/home");
X("/home/web_user");
(function() {
  X("/dev");
  Va(259, {read:function() {
    return 0;
  }, write:function(a, b, c, k) {
    return k;
  }});
  vb("/dev/null", 259);
  Ua(1280, Ya);
  Ua(1536, Za);
  vb("/dev/tty", 1280);
  vb("/dev/tty1", 1536);
  if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
    var a = new Uint8Array(1);
    var b = function() {
      crypto.getRandomValues(a);
      return a[0];
    };
  } else {
    if (v) {
      try {
        var c = require("crypto");
        b = function() {
          return c.randomBytes(1)[0];
        };
      } catch (d) {
      }
    }
  }
  b || (b = function() {
    y("random_device");
  });
  Y("random", b);
  Y("urandom", b);
  X("/dev/shm");
  X("/dev/shm/tmp");
})();
X("/proc");
X("/proc/self");
X("/proc/self/fd");
tb({o:function() {
  var a = ab("/proc/self", "fd", 16895, 73);
  a.f = {lookup:function(a, c) {
    var b = S[+c];
    if (!b) {
      throw new Q(8);
    }
    a = {parent:null, o:{wa:"fake"}, f:{readlink:function() {
      return b.path;
    }}};
    return a.parent = a;
  }};
  return a;
}}, "/proc/self/fd");
g.requestFullScreen = function(a, b, c) {
  A("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");
  g.requestFullScreen = g.requestFullscreen;
  e.Ba(a, b, c);
};
g.requestFullscreen = function(a, b, c) {
  e.requestFullscreen(a, b, c);
};
g.requestAnimationFrame = function(a) {
  e.requestAnimationFrame(a);
};
g.setCanvasSize = function(a, b, c) {
  e.Ta(a, b, c);
};
g.pauseMainLoop = function() {
  e.b.pause();
};
g.resumeMainLoop = function() {
  e.b.resume();
};
g.getUserMedia = function() {
  e.getUserMedia();
};
g.createContext = function(a, b, c, d) {
  return e.createContext(a, b, c, d);
};
v ? Z = function() {
  var a = process.hrtime();
  return 1e3 * a[0] + a[1] / 1e6;
} : "undefined" !== typeof dateNow ? Z = dateNow : "object" === typeof performance && performance && "function" === typeof performance.now ? Z = function() {
  return performance.now();
} : Z = Date.now;
function Xa(a, b) {
  for (var c = 0, d = 0; d < a.length; ++d) {
    var f = a.charCodeAt(d);
    55296 <= f && 57343 >= f && (f = 65536 + ((f & 1023) << 10) | a.charCodeAt(++d) & 1023);
    127 >= f ? ++c : c = 2047 >= f ? c + 2 : 65535 >= f ? c + 3 : c + 4;
  }
  c = Array(c + 1);
  var h = c.length;
  d = 0;
  if (0 < h) {
    f = d;
    h = d + h - 1;
    for (var k = 0; k < a.length; ++k) {
      var m = a.charCodeAt(k);
      if (55296 <= m && 57343 >= m) {
        var t = a.charCodeAt(++k);
        m = 65536 + ((m & 1023) << 10) | t & 1023;
      }
      if (127 >= m) {
        if (d >= h) {
          break;
        }
        c[d++] = m;
      } else {
        if (2047 >= m) {
          if (d + 1 >= h) {
            break;
          }
          c[d++] = 192 | m >> 6;
        } else {
          if (65535 >= m) {
            if (d + 2 >= h) {
              break;
            }
            c[d++] = 224 | m >> 12;
          } else {
            if (d + 3 >= h) {
              break;
            }
            c[d++] = 240 | m >> 18;
            c[d++] = 128 | m >> 12 & 63;
          }
          c[d++] = 128 | m >> 6 & 63;
        }
        c[d++] = 128 | m & 63;
      }
    }
    c[d] = 0;
    a = d - f;
  } else {
    a = 0;
  }
  b && (c.length = a);
  return c;
}
var Xb = {__assert_fail:function(a, b, c, d) {
  y("Assertion failed: " + H(a) + ", at: " + [b ? H(b) : "unknown filename", c, d ? H(d) : "unknown function"]);
}, __cxa_atexit:function() {
  return Na.apply(null, arguments);
}, __lock:function() {
}, __map_file:function() {
  g.___errno_location && (K[g.___errno_location() >> 2] = 63);
  return -1;
}, __syscall91:function(a, b) {
  Gb = b;
  try {
    var c = Hb(), d = Hb();
    if (-1 === c || 0 === d) {
      var f = -28;
    } else {
      var h = Fb[c];
      if (h && d === h.pb) {
        var k = S[h.fd], m = h.flags, t = new Uint8Array(I.subarray(c, c + d));
        k && k.g.X && k.g.X(k, t, 0, d, m);
        Fb[c] = null;
        h.Da && Ub(h.sb);
      }
      f = 0;
    }
    return f;
  } catch (q) {
    return "undefined" !== typeof Eb && q instanceof Q || y(q), -q.I;
  }
}, __unlock:function() {
}, abort:function() {
  y();
}, emscripten_get_sbrk_ptr:function() {
  return 31440;
}, emscripten_memcpy_big:function(a, b, c) {
  I.set(I.subarray(b, b + c), a);
}, emscripten_resize_heap:function(a) {
  if (2147418112 < a) {
    return !1;
  }
  for (var b = Math.max(J.length, 16777216); b < a;) {
    536870912 >= b ? b = oa(2 * b) : b = Math.min(oa((3 * b + 2147483648) / 4), 2147418112);
  }
  a: {
    try {
      C.grow(b - buffer.byteLength + 65535 >> 16);
      pa(C.buffer);
      var c = 1;
      break a;
    } catch (d) {
    }
    c = void 0;
  }
  return c ? !0 : !1;
}, emscripten_worker_respond:function(a, b) {
  if (Vb) {
    throw "already responded with final response!";
  }
  Vb = !0;
  b = {callbackId:Wb, finalResponse:!0, data:a ? new Uint8Array(I.subarray(a, a + b)) : 0};
  a ? postMessage(b, [b.data.buffer]) : postMessage(b);
}, environ_get:function(a, b) {
  var c = 0;
  Mb().forEach(function(d, f) {
    var h = b + c;
    f = K[a + 4 * f >> 2] = h;
    for (h = 0; h < d.length; ++h) {
      J[f++ >> 0] = d.charCodeAt(h);
    }
    J[f >> 0] = 0;
    c += d.length + 1;
  });
  return 0;
}, environ_sizes_get:function(a, b) {
  var c = Mb();
  K[a >> 2] = c.length;
  var d = 0;
  c.forEach(function(a) {
    d += a.length + 1;
  });
  K[b >> 2] = d;
  return 0;
}, fd_close:function(a) {
  try {
    var b = Ib(a);
    if (null === b.fd) {
      throw new Q(8);
    }
    b.ha && (b.ha = null);
    try {
      b.g.close && b.g.close(b);
    } catch (c) {
      throw c;
    } finally {
      S[b.fd] = null;
    }
    b.fd = null;
    return 0;
  } catch (c) {
    return "undefined" !== typeof Eb && c instanceof Q || y(c), c.I;
  }
}, fd_read:function(a, b, c, d) {
  try {
    a: {
      for (var f = Ib(a), h = a = 0; h < c; h++) {
        var k = K[b + (8 * h + 4) >> 2], m = f, t = K[b + 8 * h >> 2], q = k, r = void 0, D = J;
        if (0 > q || 0 > r) {
          throw new Q(28);
        }
        if (null === m.fd) {
          throw new Q(8);
        }
        if (1 === (m.flags & 2097155)) {
          throw new Q(8);
        }
        if (16384 === (m.node.mode & 61440)) {
          throw new Q(31);
        }
        if (!m.g.read) {
          throw new Q(28);
        }
        var z = "undefined" !== typeof r;
        if (!z) {
          r = m.position;
        } else {
          if (!m.seekable) {
            throw new Q(70);
          }
        }
        var ba = m.g.read(m, D, t, q, r);
        z || (m.position += ba);
        var O = ba;
        if (0 > O) {
          var E = -1;
          break a;
        }
        a += O;
        if (O < k) {
          break;
        }
      }
      E = a;
    }
    K[d >> 2] = E;
    return 0;
  } catch (Ma) {
    return "undefined" !== typeof Eb && Ma instanceof Q || y(Ma), Ma.I;
  }
}, fd_seek:function(a, b, c, d, f) {
  try {
    var h = Ib(a);
    a = 4294967296 * c + (b >>> 0);
    if (-9007199254740992 >= a || 9007199254740992 <= a) {
      return -61;
    }
    zb(h, a, d);
    Ka = [h.position >>> 0, (P = h.position, 1.0 <= +za(P) ? 0.0 < P ? (Ca(+Ba(P / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+Aa((P - +(~~P >>> 0)) / 4294967296.0) >>> 0 : 0)];
    K[f >> 2] = Ka[0];
    K[f + 4 >> 2] = Ka[1];
    h.ha && 0 === a && 0 === d && (h.ha = null);
    return 0;
  } catch (k) {
    return "undefined" !== typeof Eb && k instanceof Q || y(k), k.I;
  }
}, fd_write:function(a, b, c, d) {
  try {
    a: {
      for (var f = Ib(a), h = a = 0; h < c; h++) {
        var k = f, m = K[b + 8 * h >> 2], t = K[b + (8 * h + 4) >> 2], q = void 0, r = J;
        if (0 > t || 0 > q) {
          throw new Q(28);
        }
        if (null === k.fd) {
          throw new Q(8);
        }
        if (0 === (k.flags & 2097155)) {
          throw new Q(8);
        }
        if (16384 === (k.node.mode & 61440)) {
          throw new Q(31);
        }
        if (!k.g.write) {
          throw new Q(28);
        }
        k.flags & 1024 && zb(k, 0, 2);
        var D = "undefined" !== typeof q;
        if (!D) {
          q = k.position;
        } else {
          if (!k.seekable) {
            throw new Q(70);
          }
        }
        var z = k.g.write(k, r, m, t, q, void 0);
        D || (k.position += z);
        try {
          if (k.path && ib.onWriteToFile) {
            ib.onWriteToFile(k.path);
          }
        } catch (E) {
          console.log("FS.trackingDelegate['onWriteToFile']('" + k.path + "') threw an exception: " + E.message);
        }
        var ba = z;
        if (0 > ba) {
          var O = -1;
          break a;
        }
        a += ba;
      }
      O = a;
    }
    K[d >> 2] = O;
    return 0;
  } catch (E) {
    return "undefined" !== typeof Eb && E instanceof Q || y(E), E.I;
  }
}, memory:C, setTempRet0:function() {
}, strftime_l:function(a, b, c, d) {
  return Tb(a, b, c, d);
}, table:ma}, Yb = function() {
  function a(a) {
    g.asm = a.exports;
    Fa();
  }
  function b(b) {
    a(b.instance);
  }
  function c(a) {
    return Ja().then(function(a) {
      return WebAssembly.instantiate(a, d);
    }).then(a, function(a) {
      A("failed to asynchronously prepare wasm: " + a);
      y(a);
    });
  }
  var d = {env:Xb, wasi_unstable:Xb};
  Ea();
  if (g.instantiateWasm) {
    try {
      return g.instantiateWasm(d, a);
    } catch (f) {
      return A("Module.instantiateWasm callback failed with error: " + f), !1;
    }
  }
  (function() {
    if (B || "function" !== typeof WebAssembly.instantiateStreaming || Ga() || "function" !== typeof fetch) {
      return c(b);
    }
    fetch(N, {credentials:"same-origin"}).then(function(a) {
      return WebAssembly.instantiateStreaming(a, d).then(b, function(a) {
        A("wasm streaming compile failed: " + a);
        A("falling back to ArrayBuffer instantiation");
        c(b);
      });
    });
  })();
  return {};
}();
g.asm = Yb;
var La = g.___wasm_call_ctors = function() {
  return g.asm.__wasm_call_ctors.apply(null, arguments);
};
g._loadMesh = function() {
  return g.asm.loadMesh.apply(null, arguments);
};
g._UmbraExternalAssetLoaderCreate = function() {
  return g.asm.UmbraExternalAssetLoaderCreate.apply(null, arguments);
};
g._UmbraExternalMeshLoadGetData = function() {
  return g.asm.UmbraExternalMeshLoadGetData.apply(null, arguments);
};
g._loadTexture = function() {
  return g.asm.loadTexture.apply(null, arguments);
};
g._UmbraExternalTextureLoadGetData = function() {
  return g.asm.UmbraExternalTextureLoadGetData.apply(null, arguments);
};
g._UmbraExternalAssetLoaderDestroy = function() {
  return g.asm.UmbraExternalAssetLoaderDestroy.apply(null, arguments);
};
g._UmbraExternalMeshStreamSetSourceBuffer = function() {
  return g.asm.UmbraExternalMeshStreamSetSourceBuffer.apply(null, arguments);
};
g._UmbraExternalMeshStreamSetDestinationBuffers = function() {
  return g.asm.UmbraExternalMeshStreamSetDestinationBuffers.apply(null, arguments);
};
g._UmbraExternalMeshStreamDone = function() {
  return g.asm.UmbraExternalMeshStreamDone.apply(null, arguments);
};
g._UmbraExternalMeshStreamNext = function() {
  return g.asm.UmbraExternalMeshStreamNext.apply(null, arguments);
};
g.___errno_location = function() {
  return g.asm.__errno_location.apply(null, arguments);
};
var Ub = g._free = function() {
  return g.asm.free.apply(null, arguments);
}, db = g._malloc = function() {
  return g.asm.malloc.apply(null, arguments);
};
g.__get_tzname = function() {
  return g.asm._get_tzname.apply(null, arguments);
};
g.__get_daylight = function() {
  return g.asm._get_daylight.apply(null, arguments);
};
g.__get_timezone = function() {
  return g.asm._get_timezone.apply(null, arguments);
};
g._setThrew = function() {
  return g.asm.setThrew.apply(null, arguments);
};
g.stackSave = function() {
  return g.asm.stackSave.apply(null, arguments);
};
g.stackAlloc = function() {
  return g.asm.stackAlloc.apply(null, arguments);
};
g.stackRestore = function() {
  return g.asm.stackRestore.apply(null, arguments);
};
g.__growWasmMemory = function() {
  return g.asm.__growWasmMemory.apply(null, arguments);
};
g.dynCall_iiii = function() {
  return g.asm.dynCall_iiii.apply(null, arguments);
};
g.dynCall_ii = function() {
  return g.asm.dynCall_ii.apply(null, arguments);
};
g.dynCall_vi = function() {
  return g.asm.dynCall_vi.apply(null, arguments);
};
g.dynCall_vii = function() {
  return g.asm.dynCall_vii.apply(null, arguments);
};
g.dynCall_iiiii = function() {
  return g.asm.dynCall_iiiii.apply(null, arguments);
};
g.dynCall_iii = function() {
  return g.asm.dynCall_iii.apply(null, arguments);
};
g.dynCall_iidiiii = function() {
  return g.asm.dynCall_iidiiii.apply(null, arguments);
};
g.dynCall_jiji = function() {
  return g.asm.dynCall_jiji.apply(null, arguments);
};
g.dynCall_viiiiii = function() {
  return g.asm.dynCall_viiiiii.apply(null, arguments);
};
g.dynCall_viiiii = function() {
  return g.asm.dynCall_viiiii.apply(null, arguments);
};
g.dynCall_viiii = function() {
  return g.asm.dynCall_viiii.apply(null, arguments);
};
g.dynCall_viijii = function() {
  return g.asm.dynCall_viijii.apply(null, arguments);
};
g.dynCall_iiiiiiiii = function() {
  return g.asm.dynCall_iiiiiiiii.apply(null, arguments);
};
g.dynCall_iiiiii = function() {
  return g.asm.dynCall_iiiiii.apply(null, arguments);
};
g.dynCall_iiiiiiii = function() {
  return g.asm.dynCall_iiiiiiii.apply(null, arguments);
};
g.dynCall_iiiiiii = function() {
  return g.asm.dynCall_iiiiiii.apply(null, arguments);
};
g.dynCall_iiiiiijj = function() {
  return g.asm.dynCall_iiiiiijj.apply(null, arguments);
};
g.dynCall_iiiiij = function() {
  return g.asm.dynCall_iiiiij.apply(null, arguments);
};
g.dynCall_iiiiid = function() {
  return g.asm.dynCall_iiiiid.apply(null, arguments);
};
g.dynCall_iiiiijj = function() {
  return g.asm.dynCall_iiiiijj.apply(null, arguments);
};
g.dynCall_v = function() {
  return g.asm.dynCall_v.apply(null, arguments);
};
g.asm = Yb;
var Zb;
M = function $b() {
  Zb || ac();
  Zb || (M = $b);
};
function ac() {
  function a() {
    if (!Zb && (Zb = !0, !F)) {
      xa = !0;
      g.noFSInit || Bb || (Bb = !0, Ab(), g.stdin = g.stdin, g.stdout = g.stdout, g.stderr = g.stderr, g.stdin ? Y("stdin", g.stdin) : wb("/dev/tty", "/dev/stdin"), g.stdout ? Y("stdout", null, g.stdout) : wb("/dev/tty", "/dev/stdout"), g.stderr ? Y("stderr", null, g.stderr) : wb("/dev/tty1", "/dev/stderr"), xb("/dev/stdin", "r"), xb("/dev/stdout", "w"), xb("/dev/stderr", "w"));
      ra(ta);
      hb = !1;
      ra(ua);
      if (g.onRuntimeInitialized) {
        g.onRuntimeInitialized();
      }
      if (g.postRun) {
        for ("function" == typeof g.postRun && (g.postRun = [g.postRun]); g.postRun.length;) {
          var a = g.postRun.shift();
          wa.unshift(a);
        }
      }
      ra(wa);
    }
  }
  if (!(0 < L)) {
    if (g.preRun) {
      for ("function" == typeof g.preRun && (g.preRun = [g.preRun]); g.preRun.length;) {
        ya();
      }
    }
    ra(sa);
    0 < L || (g.setStatus ? (g.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        g.setStatus("");
      }, 1);
      a();
    }, 1)) : a());
  }
}
g.run = ac;
if (g.preInit) {
  for ("function" == typeof g.preInit && (g.preInit = [g.preInit]); 0 < g.preInit.length;) {
    g.preInit.pop()();
  }
}
ac();
var Vb = !1, Wb = -1;
(function() {
  function a() {
    if (c && xa) {
      var a = c;
      c = null;
      a.forEach(function(a) {
        onmessage(a);
      });
    }
  }
  function b() {
    a();
    c && setTimeout(b, 100);
  }
  var c = null, d = 0, f = 0;
  onmessage = function(h) {
    if (xa) {
      a();
      var k = g["_" + h.data.funcName];
      if (!k) {
        throw "invalid worker function to call: " + h.data.funcName;
      }
      var m = h.data.data;
      if (m) {
        m.byteLength || (m = new Uint8Array(m));
        if (!d || f < m.length) {
          d && Ub(d), f = m.length, d = db(m.length);
        }
        I.set(m, d);
      }
      Vb = !1;
      Wb = h.data.callbackId;
      m ? k(d, m.length) : k(0, 0);
    } else {
      c || (c = [], setTimeout(b, 100)), c.push(h);
    }
  };
})();

