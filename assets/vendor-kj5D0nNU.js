let El, kl, Tl, Sl, wl, tr;
let __tla = (async () => {
  wl = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function ws(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var c = e.default;
    if (typeof c == "function") {
      var d = function a() {
        return this instanceof a ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
      };
      d.prototype = c.prototype;
    } else d = {};
    return Object.defineProperty(d, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(a) {
      var v = Object.getOwnPropertyDescriptor(e, a);
      Object.defineProperty(d, a, v.get ? v : {
        enumerable: true,
        get: function() {
          return e[a];
        }
      });
    }), d;
  }
  var Ht = {}, Vr = {}, ni;
  function _s() {
    if (ni) return Vr;
    ni = 1, Vr.byteLength = r, Vr.toByteArray = p, Vr.fromByteArray = m;
    for (var e = [], c = [], d = typeof Uint8Array < "u" ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", v = 0, o = a.length; v < o; ++v) e[v] = a[v], c[a.charCodeAt(v)] = v;
    c[45] = 62, c[95] = 63;
    function n(f) {
      var h = f.length;
      if (h % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var l = f.indexOf("=");
      l === -1 && (l = h);
      var w = l === h ? 0 : 4 - l % 4;
      return [
        l,
        w
      ];
    }
    function r(f) {
      var h = n(f), l = h[0], w = h[1];
      return (l + w) * 3 / 4 - w;
    }
    function u(f, h, l) {
      return (h + l) * 3 / 4 - l;
    }
    function p(f) {
      var h, l = n(f), w = l[0], y = l[1], E = new d(u(f, w, y)), _ = 0, S = y > 0 ? w - 4 : w, I;
      for (I = 0; I < S; I += 4) h = c[f.charCodeAt(I)] << 18 | c[f.charCodeAt(I + 1)] << 12 | c[f.charCodeAt(I + 2)] << 6 | c[f.charCodeAt(I + 3)], E[_++] = h >> 16 & 255, E[_++] = h >> 8 & 255, E[_++] = h & 255;
      return y === 2 && (h = c[f.charCodeAt(I)] << 2 | c[f.charCodeAt(I + 1)] >> 4, E[_++] = h & 255), y === 1 && (h = c[f.charCodeAt(I)] << 10 | c[f.charCodeAt(I + 1)] << 4 | c[f.charCodeAt(I + 2)] >> 2, E[_++] = h >> 8 & 255, E[_++] = h & 255), E;
    }
    function s(f) {
      return e[f >> 18 & 63] + e[f >> 12 & 63] + e[f >> 6 & 63] + e[f & 63];
    }
    function b(f, h, l) {
      for (var w, y = [], E = h; E < l; E += 3) w = (f[E] << 16 & 16711680) + (f[E + 1] << 8 & 65280) + (f[E + 2] & 255), y.push(s(w));
      return y.join("");
    }
    function m(f) {
      for (var h, l = f.length, w = l % 3, y = [], E = 16383, _ = 0, S = l - w; _ < S; _ += E) y.push(b(f, _, _ + E > S ? S : _ + E));
      return w === 1 ? (h = f[l - 1], y.push(e[h >> 2] + e[h << 4 & 63] + "==")) : w === 2 && (h = (f[l - 2] << 8) + f[l - 1], y.push(e[h >> 10] + e[h >> 4 & 63] + e[h << 2 & 63] + "=")), y.join("");
    }
    return Vr;
  }
  var yt = {};
  var ii;
  function Es() {
    return ii || (ii = 1, yt.read = function(e, c, d, a, v) {
      var o, n, r = v * 8 - a - 1, u = (1 << r) - 1, p = u >> 1, s = -7, b = d ? v - 1 : 0, m = d ? -1 : 1, f = e[c + b];
      for (b += m, o = f & (1 << -s) - 1, f >>= -s, s += r; s > 0; o = o * 256 + e[c + b], b += m, s -= 8) ;
      for (n = o & (1 << -s) - 1, o >>= -s, s += a; s > 0; n = n * 256 + e[c + b], b += m, s -= 8) ;
      if (o === 0) o = 1 - p;
      else {
        if (o === u) return n ? NaN : (f ? -1 : 1) * (1 / 0);
        n = n + Math.pow(2, a), o = o - p;
      }
      return (f ? -1 : 1) * n * Math.pow(2, o - a);
    }, yt.write = function(e, c, d, a, v, o) {
      var n, r, u, p = o * 8 - v - 1, s = (1 << p) - 1, b = s >> 1, m = v === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = a ? 0 : o - 1, h = a ? 1 : -1, l = c < 0 || c === 0 && 1 / c < 0 ? 1 : 0;
      for (c = Math.abs(c), isNaN(c) || c === 1 / 0 ? (r = isNaN(c) ? 1 : 0, n = s) : (n = Math.floor(Math.log(c) / Math.LN2), c * (u = Math.pow(2, -n)) < 1 && (n--, u *= 2), n + b >= 1 ? c += m / u : c += m * Math.pow(2, 1 - b), c * u >= 2 && (n++, u /= 2), n + b >= s ? (r = 0, n = s) : n + b >= 1 ? (r = (c * u - 1) * Math.pow(2, v), n = n + b) : (r = c * Math.pow(2, b - 1) * Math.pow(2, v), n = 0)); v >= 8; e[d + f] = r & 255, f += h, r /= 256, v -= 8) ;
      for (n = n << v | r, p += v; p > 0; e[d + f] = n & 255, f += h, n /= 256, p -= 8) ;
      e[d + f - h] |= l * 128;
    }), yt;
  }
  var oi;
  tr = function() {
    return oi || (oi = 1, function(e) {
      const c = _s(), d = Es(), a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      e.Buffer = r, e.SlowBuffer = E, e.INSPECT_MAX_BYTES = 50;
      const v = 2147483647;
      e.kMaxLength = v, r.TYPED_ARRAY_SUPPORT = o(), !r.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function o() {
        try {
          const T = new Uint8Array(1), i = {
            foo: function() {
              return 42;
            }
          };
          return Object.setPrototypeOf(i, Uint8Array.prototype), Object.setPrototypeOf(T, i), T.foo() === 42;
        } catch {
          return false;
        }
      }
      Object.defineProperty(r.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (r.isBuffer(this)) return this.buffer;
        }
      }), Object.defineProperty(r.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (r.isBuffer(this)) return this.byteOffset;
        }
      });
      function n(T) {
        if (T > v) throw new RangeError('The value "' + T + '" is invalid for option "size"');
        const i = new Uint8Array(T);
        return Object.setPrototypeOf(i, r.prototype), i;
      }
      function r(T, i, t) {
        if (typeof T == "number") {
          if (typeof i == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
          return b(T);
        }
        return u(T, i, t);
      }
      r.poolSize = 8192;
      function u(T, i, t) {
        if (typeof T == "string") return m(T, i);
        if (ArrayBuffer.isView(T)) return h(T);
        if (T == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof T);
        if (be(T, ArrayBuffer) || T && be(T.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (be(T, SharedArrayBuffer) || T && be(T.buffer, SharedArrayBuffer))) return l(T, i, t);
        if (typeof T == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const g = T.valueOf && T.valueOf();
        if (g != null && g !== T) return r.from(g, i, t);
        const k = w(T);
        if (k) return k;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof T[Symbol.toPrimitive] == "function") return r.from(T[Symbol.toPrimitive]("string"), i, t);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof T);
      }
      r.from = function(T, i, t) {
        return u(T, i, t);
      }, Object.setPrototypeOf(r.prototype, Uint8Array.prototype), Object.setPrototypeOf(r, Uint8Array);
      function p(T) {
        if (typeof T != "number") throw new TypeError('"size" argument must be of type number');
        if (T < 0) throw new RangeError('The value "' + T + '" is invalid for option "size"');
      }
      function s(T, i, t) {
        return p(T), T <= 0 ? n(T) : i !== void 0 ? typeof t == "string" ? n(T).fill(i, t) : n(T).fill(i) : n(T);
      }
      r.alloc = function(T, i, t) {
        return s(T, i, t);
      };
      function b(T) {
        return p(T), n(T < 0 ? 0 : y(T) | 0);
      }
      r.allocUnsafe = function(T) {
        return b(T);
      }, r.allocUnsafeSlow = function(T) {
        return b(T);
      };
      function m(T, i) {
        if ((typeof i != "string" || i === "") && (i = "utf8"), !r.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
        const t = _(T, i) | 0;
        let g = n(t);
        const k = g.write(T, i);
        return k !== t && (g = g.slice(0, k)), g;
      }
      function f(T) {
        const i = T.length < 0 ? 0 : y(T.length) | 0, t = n(i);
        for (let g = 0; g < i; g += 1) t[g] = T[g] & 255;
        return t;
      }
      function h(T) {
        if (be(T, Uint8Array)) {
          const i = new Uint8Array(T);
          return l(i.buffer, i.byteOffset, i.byteLength);
        }
        return f(T);
      }
      function l(T, i, t) {
        if (i < 0 || T.byteLength < i) throw new RangeError('"offset" is outside of buffer bounds');
        if (T.byteLength < i + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let g;
        return i === void 0 && t === void 0 ? g = new Uint8Array(T) : t === void 0 ? g = new Uint8Array(T, i) : g = new Uint8Array(T, i, t), Object.setPrototypeOf(g, r.prototype), g;
      }
      function w(T) {
        if (r.isBuffer(T)) {
          const i = y(T.length) | 0, t = n(i);
          return t.length === 0 || T.copy(t, 0, 0, i), t;
        }
        if (T.length !== void 0) return typeof T.length != "number" || Ne(T.length) ? n(0) : f(T);
        if (T.type === "Buffer" && Array.isArray(T.data)) return f(T.data);
      }
      function y(T) {
        if (T >= v) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + v.toString(16) + " bytes");
        return T | 0;
      }
      function E(T) {
        return +T != T && (T = 0), r.alloc(+T);
      }
      r.isBuffer = function(i) {
        return i != null && i._isBuffer === true && i !== r.prototype;
      }, r.compare = function(i, t) {
        if (be(i, Uint8Array) && (i = r.from(i, i.offset, i.byteLength)), be(t, Uint8Array) && (t = r.from(t, t.offset, t.byteLength)), !r.isBuffer(i) || !r.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (i === t) return 0;
        let g = i.length, k = t.length;
        for (let B = 0, H = Math.min(g, k); B < H; ++B) if (i[B] !== t[B]) {
          g = i[B], k = t[B];
          break;
        }
        return g < k ? -1 : k < g ? 1 : 0;
      }, r.isEncoding = function(i) {
        switch (String(i).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      }, r.concat = function(i, t) {
        if (!Array.isArray(i)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (i.length === 0) return r.alloc(0);
        let g;
        if (t === void 0) for (t = 0, g = 0; g < i.length; ++g) t += i[g].length;
        const k = r.allocUnsafe(t);
        let B = 0;
        for (g = 0; g < i.length; ++g) {
          let H = i[g];
          if (be(H, Uint8Array)) B + H.length > k.length ? (r.isBuffer(H) || (H = r.from(H)), H.copy(k, B)) : Uint8Array.prototype.set.call(k, H, B);
          else if (r.isBuffer(H)) H.copy(k, B);
          else throw new TypeError('"list" argument must be an Array of Buffers');
          B += H.length;
        }
        return k;
      };
      function _(T, i) {
        if (r.isBuffer(T)) return T.length;
        if (ArrayBuffer.isView(T) || be(T, ArrayBuffer)) return T.byteLength;
        if (typeof T != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof T);
        const t = T.length, g = arguments.length > 2 && arguments[2] === true;
        if (!g && t === 0) return 0;
        let k = false;
        for (; ; ) switch (i) {
          case "ascii":
          case "latin1":
          case "binary":
            return t;
          case "utf8":
          case "utf-8":
            return fe(T).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return t * 2;
          case "hex":
            return t >>> 1;
          case "base64":
            return Oe(T).length;
          default:
            if (k) return g ? -1 : fe(T).length;
            i = ("" + i).toLowerCase(), k = true;
        }
      }
      r.byteLength = _;
      function S(T, i, t) {
        let g = false;
        if ((i === void 0 || i < 0) && (i = 0), i > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, i >>>= 0, t <= i)) return "";
        for (T || (T = "utf8"); ; ) switch (T) {
          case "hex":
            return O(this, i, t);
          case "utf8":
          case "utf-8":
            return G(this, i, t);
          case "ascii":
            return re(this, i, t);
          case "latin1":
          case "binary":
            return D(this, i, t);
          case "base64":
            return C(this, i, t);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return K(this, i, t);
          default:
            if (g) throw new TypeError("Unknown encoding: " + T);
            T = (T + "").toLowerCase(), g = true;
        }
      }
      r.prototype._isBuffer = true;
      function I(T, i, t) {
        const g = T[i];
        T[i] = T[t], T[t] = g;
      }
      r.prototype.swap16 = function() {
        const i = this.length;
        if (i % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < i; t += 2) I(this, t, t + 1);
        return this;
      }, r.prototype.swap32 = function() {
        const i = this.length;
        if (i % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < i; t += 4) I(this, t, t + 3), I(this, t + 1, t + 2);
        return this;
      }, r.prototype.swap64 = function() {
        const i = this.length;
        if (i % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < i; t += 8) I(this, t, t + 7), I(this, t + 1, t + 6), I(this, t + 2, t + 5), I(this, t + 3, t + 4);
        return this;
      }, r.prototype.toString = function() {
        const i = this.length;
        return i === 0 ? "" : arguments.length === 0 ? G(this, 0, i) : S.apply(this, arguments);
      }, r.prototype.toLocaleString = r.prototype.toString, r.prototype.equals = function(i) {
        if (!r.isBuffer(i)) throw new TypeError("Argument must be a Buffer");
        return this === i ? true : r.compare(this, i) === 0;
      }, r.prototype.inspect = function() {
        let i = "";
        const t = e.INSPECT_MAX_BYTES;
        return i = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (i += " ... "), "<Buffer " + i + ">";
      }, a && (r.prototype[a] = r.prototype.inspect), r.prototype.compare = function(i, t, g, k, B) {
        if (be(i, Uint8Array) && (i = r.from(i, i.offset, i.byteLength)), !r.isBuffer(i)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof i);
        if (t === void 0 && (t = 0), g === void 0 && (g = i ? i.length : 0), k === void 0 && (k = 0), B === void 0 && (B = this.length), t < 0 || g > i.length || k < 0 || B > this.length) throw new RangeError("out of range index");
        if (k >= B && t >= g) return 0;
        if (k >= B) return -1;
        if (t >= g) return 1;
        if (t >>>= 0, g >>>= 0, k >>>= 0, B >>>= 0, this === i) return 0;
        let H = B - k, X = g - t;
        const oe = Math.min(H, X), ne = this.slice(k, B), se = i.slice(t, g);
        for (let ce = 0; ce < oe; ++ce) if (ne[ce] !== se[ce]) {
          H = ne[ce], X = se[ce];
          break;
        }
        return H < X ? -1 : X < H ? 1 : 0;
      };
      function A(T, i, t, g, k) {
        if (T.length === 0) return -1;
        if (typeof t == "string" ? (g = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, Ne(t) && (t = k ? 0 : T.length - 1), t < 0 && (t = T.length + t), t >= T.length) {
          if (k) return -1;
          t = T.length - 1;
        } else if (t < 0) if (k) t = 0;
        else return -1;
        if (typeof i == "string" && (i = r.from(i, g)), r.isBuffer(i)) return i.length === 0 ? -1 : L(T, i, t, g, k);
        if (typeof i == "number") return i = i & 255, typeof Uint8Array.prototype.indexOf == "function" ? k ? Uint8Array.prototype.indexOf.call(T, i, t) : Uint8Array.prototype.lastIndexOf.call(T, i, t) : L(T, [
          i
        ], t, g, k);
        throw new TypeError("val must be string, number or Buffer");
      }
      function L(T, i, t, g, k) {
        let B = 1, H = T.length, X = i.length;
        if (g !== void 0 && (g = String(g).toLowerCase(), g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")) {
          if (T.length < 2 || i.length < 2) return -1;
          B = 2, H /= 2, X /= 2, t /= 2;
        }
        function oe(se, ce) {
          return B === 1 ? se[ce] : se.readUInt16BE(ce * B);
        }
        let ne;
        if (k) {
          let se = -1;
          for (ne = t; ne < H; ne++) if (oe(T, ne) === oe(i, se === -1 ? 0 : ne - se)) {
            if (se === -1 && (se = ne), ne - se + 1 === X) return se * B;
          } else se !== -1 && (ne -= ne - se), se = -1;
        } else for (t + X > H && (t = H - X), ne = t; ne >= 0; ne--) {
          let se = true;
          for (let ce = 0; ce < X; ce++) if (oe(T, ne + ce) !== oe(i, ce)) {
            se = false;
            break;
          }
          if (se) return ne;
        }
        return -1;
      }
      r.prototype.includes = function(i, t, g) {
        return this.indexOf(i, t, g) !== -1;
      }, r.prototype.indexOf = function(i, t, g) {
        return A(this, i, t, g, true);
      }, r.prototype.lastIndexOf = function(i, t, g) {
        return A(this, i, t, g, false);
      };
      function q(T, i, t, g) {
        t = Number(t) || 0;
        const k = T.length - t;
        g ? (g = Number(g), g > k && (g = k)) : g = k;
        const B = i.length;
        g > B / 2 && (g = B / 2);
        let H;
        for (H = 0; H < g; ++H) {
          const X = parseInt(i.substr(H * 2, 2), 16);
          if (Ne(X)) return H;
          T[t + H] = X;
        }
        return H;
      }
      function x(T, i, t, g) {
        return me(fe(i, T.length - t), T, t, g);
      }
      function R(T, i, t, g) {
        return me(ge(i), T, t, g);
      }
      function z(T, i, t, g) {
        return me(Oe(i), T, t, g);
      }
      function F(T, i, t, g) {
        return me(xe(i, T.length - t), T, t, g);
      }
      r.prototype.write = function(i, t, g, k) {
        if (t === void 0) k = "utf8", g = this.length, t = 0;
        else if (g === void 0 && typeof t == "string") k = t, g = this.length, t = 0;
        else if (isFinite(t)) t = t >>> 0, isFinite(g) ? (g = g >>> 0, k === void 0 && (k = "utf8")) : (k = g, g = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const B = this.length - t;
        if ((g === void 0 || g > B) && (g = B), i.length > 0 && (g < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        k || (k = "utf8");
        let H = false;
        for (; ; ) switch (k) {
          case "hex":
            return q(this, i, t, g);
          case "utf8":
          case "utf-8":
            return x(this, i, t, g);
          case "ascii":
          case "latin1":
          case "binary":
            return R(this, i, t, g);
          case "base64":
            return z(this, i, t, g);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return F(this, i, t, g);
          default:
            if (H) throw new TypeError("Unknown encoding: " + k);
            k = ("" + k).toLowerCase(), H = true;
        }
      }, r.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function C(T, i, t) {
        return i === 0 && t === T.length ? c.fromByteArray(T) : c.fromByteArray(T.slice(i, t));
      }
      function G(T, i, t) {
        t = Math.min(T.length, t);
        const g = [];
        let k = i;
        for (; k < t; ) {
          const B = T[k];
          let H = null, X = B > 239 ? 4 : B > 223 ? 3 : B > 191 ? 2 : 1;
          if (k + X <= t) {
            let oe, ne, se, ce;
            switch (X) {
              case 1:
                B < 128 && (H = B);
                break;
              case 2:
                oe = T[k + 1], (oe & 192) === 128 && (ce = (B & 31) << 6 | oe & 63, ce > 127 && (H = ce));
                break;
              case 3:
                oe = T[k + 1], ne = T[k + 2], (oe & 192) === 128 && (ne & 192) === 128 && (ce = (B & 15) << 12 | (oe & 63) << 6 | ne & 63, ce > 2047 && (ce < 55296 || ce > 57343) && (H = ce));
                break;
              case 4:
                oe = T[k + 1], ne = T[k + 2], se = T[k + 3], (oe & 192) === 128 && (ne & 192) === 128 && (se & 192) === 128 && (ce = (B & 15) << 18 | (oe & 63) << 12 | (ne & 63) << 6 | se & 63, ce > 65535 && ce < 1114112 && (H = ce));
            }
          }
          H === null ? (H = 65533, X = 1) : H > 65535 && (H -= 65536, g.push(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), g.push(H), k += X;
        }
        return ee(g);
      }
      const Q = 4096;
      function ee(T) {
        const i = T.length;
        if (i <= Q) return String.fromCharCode.apply(String, T);
        let t = "", g = 0;
        for (; g < i; ) t += String.fromCharCode.apply(String, T.slice(g, g += Q));
        return t;
      }
      function re(T, i, t) {
        let g = "";
        t = Math.min(T.length, t);
        for (let k = i; k < t; ++k) g += String.fromCharCode(T[k] & 127);
        return g;
      }
      function D(T, i, t) {
        let g = "";
        t = Math.min(T.length, t);
        for (let k = i; k < t; ++k) g += String.fromCharCode(T[k]);
        return g;
      }
      function O(T, i, t) {
        const g = T.length;
        (!i || i < 0) && (i = 0), (!t || t < 0 || t > g) && (t = g);
        let k = "";
        for (let B = i; B < t; ++B) k += Me[T[B]];
        return k;
      }
      function K(T, i, t) {
        const g = T.slice(i, t);
        let k = "";
        for (let B = 0; B < g.length - 1; B += 2) k += String.fromCharCode(g[B] + g[B + 1] * 256);
        return k;
      }
      r.prototype.slice = function(i, t) {
        const g = this.length;
        i = ~~i, t = t === void 0 ? g : ~~t, i < 0 ? (i += g, i < 0 && (i = 0)) : i > g && (i = g), t < 0 ? (t += g, t < 0 && (t = 0)) : t > g && (t = g), t < i && (t = i);
        const k = this.subarray(i, t);
        return Object.setPrototypeOf(k, r.prototype), k;
      };
      function V(T, i, t) {
        if (T % 1 !== 0 || T < 0) throw new RangeError("offset is not uint");
        if (T + i > t) throw new RangeError("Trying to access beyond buffer length");
      }
      r.prototype.readUintLE = r.prototype.readUIntLE = function(i, t, g) {
        i = i >>> 0, t = t >>> 0, g || V(i, t, this.length);
        let k = this[i], B = 1, H = 0;
        for (; ++H < t && (B *= 256); ) k += this[i + H] * B;
        return k;
      }, r.prototype.readUintBE = r.prototype.readUIntBE = function(i, t, g) {
        i = i >>> 0, t = t >>> 0, g || V(i, t, this.length);
        let k = this[i + --t], B = 1;
        for (; t > 0 && (B *= 256); ) k += this[i + --t] * B;
        return k;
      }, r.prototype.readUint8 = r.prototype.readUInt8 = function(i, t) {
        return i = i >>> 0, t || V(i, 1, this.length), this[i];
      }, r.prototype.readUint16LE = r.prototype.readUInt16LE = function(i, t) {
        return i = i >>> 0, t || V(i, 2, this.length), this[i] | this[i + 1] << 8;
      }, r.prototype.readUint16BE = r.prototype.readUInt16BE = function(i, t) {
        return i = i >>> 0, t || V(i, 2, this.length), this[i] << 8 | this[i + 1];
      }, r.prototype.readUint32LE = r.prototype.readUInt32LE = function(i, t) {
        return i = i >>> 0, t || V(i, 4, this.length), (this[i] | this[i + 1] << 8 | this[i + 2] << 16) + this[i + 3] * 16777216;
      }, r.prototype.readUint32BE = r.prototype.readUInt32BE = function(i, t) {
        return i = i >>> 0, t || V(i, 4, this.length), this[i] * 16777216 + (this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3]);
      }, r.prototype.readBigUInt64LE = Ie(function(i) {
        i = i >>> 0, J(i, "offset");
        const t = this[i], g = this[i + 7];
        (t === void 0 || g === void 0) && te(i, this.length - 8);
        const k = t + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24, B = this[++i] + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + g * 2 ** 24;
        return BigInt(k) + (BigInt(B) << BigInt(32));
      }), r.prototype.readBigUInt64BE = Ie(function(i) {
        i = i >>> 0, J(i, "offset");
        const t = this[i], g = this[i + 7];
        (t === void 0 || g === void 0) && te(i, this.length - 8);
        const k = t * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i], B = this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + g;
        return (BigInt(k) << BigInt(32)) + BigInt(B);
      }), r.prototype.readIntLE = function(i, t, g) {
        i = i >>> 0, t = t >>> 0, g || V(i, t, this.length);
        let k = this[i], B = 1, H = 0;
        for (; ++H < t && (B *= 256); ) k += this[i + H] * B;
        return B *= 128, k >= B && (k -= Math.pow(2, 8 * t)), k;
      }, r.prototype.readIntBE = function(i, t, g) {
        i = i >>> 0, t = t >>> 0, g || V(i, t, this.length);
        let k = t, B = 1, H = this[i + --k];
        for (; k > 0 && (B *= 256); ) H += this[i + --k] * B;
        return B *= 128, H >= B && (H -= Math.pow(2, 8 * t)), H;
      }, r.prototype.readInt8 = function(i, t) {
        return i = i >>> 0, t || V(i, 1, this.length), this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i];
      }, r.prototype.readInt16LE = function(i, t) {
        i = i >>> 0, t || V(i, 2, this.length);
        const g = this[i] | this[i + 1] << 8;
        return g & 32768 ? g | 4294901760 : g;
      }, r.prototype.readInt16BE = function(i, t) {
        i = i >>> 0, t || V(i, 2, this.length);
        const g = this[i + 1] | this[i] << 8;
        return g & 32768 ? g | 4294901760 : g;
      }, r.prototype.readInt32LE = function(i, t) {
        return i = i >>> 0, t || V(i, 4, this.length), this[i] | this[i + 1] << 8 | this[i + 2] << 16 | this[i + 3] << 24;
      }, r.prototype.readInt32BE = function(i, t) {
        return i = i >>> 0, t || V(i, 4, this.length), this[i] << 24 | this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3];
      }, r.prototype.readBigInt64LE = Ie(function(i) {
        i = i >>> 0, J(i, "offset");
        const t = this[i], g = this[i + 7];
        (t === void 0 || g === void 0) && te(i, this.length - 8);
        const k = this[i + 4] + this[i + 5] * 2 ** 8 + this[i + 6] * 2 ** 16 + (g << 24);
        return (BigInt(k) << BigInt(32)) + BigInt(t + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24);
      }), r.prototype.readBigInt64BE = Ie(function(i) {
        i = i >>> 0, J(i, "offset");
        const t = this[i], g = this[i + 7];
        (t === void 0 || g === void 0) && te(i, this.length - 8);
        const k = (t << 24) + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i];
        return (BigInt(k) << BigInt(32)) + BigInt(this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + g);
      }), r.prototype.readFloatLE = function(i, t) {
        return i = i >>> 0, t || V(i, 4, this.length), d.read(this, i, true, 23, 4);
      }, r.prototype.readFloatBE = function(i, t) {
        return i = i >>> 0, t || V(i, 4, this.length), d.read(this, i, false, 23, 4);
      }, r.prototype.readDoubleLE = function(i, t) {
        return i = i >>> 0, t || V(i, 8, this.length), d.read(this, i, true, 52, 8);
      }, r.prototype.readDoubleBE = function(i, t) {
        return i = i >>> 0, t || V(i, 8, this.length), d.read(this, i, false, 52, 8);
      };
      function Z(T, i, t, g, k, B) {
        if (!r.isBuffer(T)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (i > k || i < B) throw new RangeError('"value" argument is out of bounds');
        if (t + g > T.length) throw new RangeError("Index out of range");
      }
      r.prototype.writeUintLE = r.prototype.writeUIntLE = function(i, t, g, k) {
        if (i = +i, t = t >>> 0, g = g >>> 0, !k) {
          const X = Math.pow(2, 8 * g) - 1;
          Z(this, i, t, g, X, 0);
        }
        let B = 1, H = 0;
        for (this[t] = i & 255; ++H < g && (B *= 256); ) this[t + H] = i / B & 255;
        return t + g;
      }, r.prototype.writeUintBE = r.prototype.writeUIntBE = function(i, t, g, k) {
        if (i = +i, t = t >>> 0, g = g >>> 0, !k) {
          const X = Math.pow(2, 8 * g) - 1;
          Z(this, i, t, g, X, 0);
        }
        let B = g - 1, H = 1;
        for (this[t + B] = i & 255; --B >= 0 && (H *= 256); ) this[t + B] = i / H & 255;
        return t + g;
      }, r.prototype.writeUint8 = r.prototype.writeUInt8 = function(i, t, g) {
        return i = +i, t = t >>> 0, g || Z(this, i, t, 1, 255, 0), this[t] = i & 255, t + 1;
      }, r.prototype.writeUint16LE = r.prototype.writeUInt16LE = function(i, t, g) {
        return i = +i, t = t >>> 0, g || Z(this, i, t, 2, 65535, 0), this[t] = i & 255, this[t + 1] = i >>> 8, t + 2;
      }, r.prototype.writeUint16BE = r.prototype.writeUInt16BE = function(i, t, g) {
        return i = +i, t = t >>> 0, g || Z(this, i, t, 2, 65535, 0), this[t] = i >>> 8, this[t + 1] = i & 255, t + 2;
      }, r.prototype.writeUint32LE = r.prototype.writeUInt32LE = function(i, t, g) {
        return i = +i, t = t >>> 0, g || Z(this, i, t, 4, 4294967295, 0), this[t + 3] = i >>> 24, this[t + 2] = i >>> 16, this[t + 1] = i >>> 8, this[t] = i & 255, t + 4;
      }, r.prototype.writeUint32BE = r.prototype.writeUInt32BE = function(i, t, g) {
        return i = +i, t = t >>> 0, g || Z(this, i, t, 4, 4294967295, 0), this[t] = i >>> 24, this[t + 1] = i >>> 16, this[t + 2] = i >>> 8, this[t + 3] = i & 255, t + 4;
      };
      function ue(T, i, t, g, k) {
        U(i, g, k, T, t, 7);
        let B = Number(i & BigInt(4294967295));
        T[t++] = B, B = B >> 8, T[t++] = B, B = B >> 8, T[t++] = B, B = B >> 8, T[t++] = B;
        let H = Number(i >> BigInt(32) & BigInt(4294967295));
        return T[t++] = H, H = H >> 8, T[t++] = H, H = H >> 8, T[t++] = H, H = H >> 8, T[t++] = H, t;
      }
      function M(T, i, t, g, k) {
        U(i, g, k, T, t, 7);
        let B = Number(i & BigInt(4294967295));
        T[t + 7] = B, B = B >> 8, T[t + 6] = B, B = B >> 8, T[t + 5] = B, B = B >> 8, T[t + 4] = B;
        let H = Number(i >> BigInt(32) & BigInt(4294967295));
        return T[t + 3] = H, H = H >> 8, T[t + 2] = H, H = H >> 8, T[t + 1] = H, H = H >> 8, T[t] = H, t + 8;
      }
      r.prototype.writeBigUInt64LE = Ie(function(i, t = 0) {
        return ue(this, i, t, BigInt(0), BigInt("0xffffffffffffffff"));
      }), r.prototype.writeBigUInt64BE = Ie(function(i, t = 0) {
        return M(this, i, t, BigInt(0), BigInt("0xffffffffffffffff"));
      }), r.prototype.writeIntLE = function(i, t, g, k) {
        if (i = +i, t = t >>> 0, !k) {
          const oe = Math.pow(2, 8 * g - 1);
          Z(this, i, t, g, oe - 1, -oe);
        }
        let B = 0, H = 1, X = 0;
        for (this[t] = i & 255; ++B < g && (H *= 256); ) i < 0 && X === 0 && this[t + B - 1] !== 0 && (X = 1), this[t + B] = (i / H >> 0) - X & 255;
        return t + g;
      }, r.prototype.writeIntBE = function(i, t, g, k) {
        if (i = +i, t = t >>> 0, !k) {
          const oe = Math.pow(2, 8 * g - 1);
          Z(this, i, t, g, oe - 1, -oe);
        }
        let B = g - 1, H = 1, X = 0;
        for (this[t + B] = i & 255; --B >= 0 && (H *= 256); ) i < 0 && X === 0 && this[t + B + 1] !== 0 && (X = 1), this[t + B] = (i / H >> 0) - X & 255;
        return t + g;
      }, r.prototype.writeInt8 = function(i, t, g) {
        return i = +i, t = t >>> 0, g || Z(this, i, t, 1, 127, -128), i < 0 && (i = 255 + i + 1), this[t] = i & 255, t + 1;
      }, r.prototype.writeInt16LE = function(i, t, g) {
        return i = +i, t = t >>> 0, g || Z(this, i, t, 2, 32767, -32768), this[t] = i & 255, this[t + 1] = i >>> 8, t + 2;
      }, r.prototype.writeInt16BE = function(i, t, g) {
        return i = +i, t = t >>> 0, g || Z(this, i, t, 2, 32767, -32768), this[t] = i >>> 8, this[t + 1] = i & 255, t + 2;
      }, r.prototype.writeInt32LE = function(i, t, g) {
        return i = +i, t = t >>> 0, g || Z(this, i, t, 4, 2147483647, -2147483648), this[t] = i & 255, this[t + 1] = i >>> 8, this[t + 2] = i >>> 16, this[t + 3] = i >>> 24, t + 4;
      }, r.prototype.writeInt32BE = function(i, t, g) {
        return i = +i, t = t >>> 0, g || Z(this, i, t, 4, 2147483647, -2147483648), i < 0 && (i = 4294967295 + i + 1), this[t] = i >>> 24, this[t + 1] = i >>> 16, this[t + 2] = i >>> 8, this[t + 3] = i & 255, t + 4;
      }, r.prototype.writeBigInt64LE = Ie(function(i, t = 0) {
        return ue(this, i, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      }), r.prototype.writeBigInt64BE = Ie(function(i, t = 0) {
        return M(this, i, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function Y(T, i, t, g, k, B) {
        if (t + g > T.length) throw new RangeError("Index out of range");
        if (t < 0) throw new RangeError("Index out of range");
      }
      function N(T, i, t, g, k) {
        return i = +i, t = t >>> 0, k || Y(T, i, t, 4), d.write(T, i, t, g, 23, 4), t + 4;
      }
      r.prototype.writeFloatLE = function(i, t, g) {
        return N(this, i, t, true, g);
      }, r.prototype.writeFloatBE = function(i, t, g) {
        return N(this, i, t, false, g);
      };
      function j(T, i, t, g, k) {
        return i = +i, t = t >>> 0, k || Y(T, i, t, 8), d.write(T, i, t, g, 52, 8), t + 8;
      }
      r.prototype.writeDoubleLE = function(i, t, g) {
        return j(this, i, t, true, g);
      }, r.prototype.writeDoubleBE = function(i, t, g) {
        return j(this, i, t, false, g);
      }, r.prototype.copy = function(i, t, g, k) {
        if (!r.isBuffer(i)) throw new TypeError("argument should be a Buffer");
        if (g || (g = 0), !k && k !== 0 && (k = this.length), t >= i.length && (t = i.length), t || (t = 0), k > 0 && k < g && (k = g), k === g || i.length === 0 || this.length === 0) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (g < 0 || g >= this.length) throw new RangeError("Index out of range");
        if (k < 0) throw new RangeError("sourceEnd out of bounds");
        k > this.length && (k = this.length), i.length - t < k - g && (k = i.length - t + g);
        const B = k - g;
        return this === i && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, g, k) : Uint8Array.prototype.set.call(i, this.subarray(g, k), t), B;
      }, r.prototype.fill = function(i, t, g, k) {
        if (typeof i == "string") {
          if (typeof t == "string" ? (k = t, t = 0, g = this.length) : typeof g == "string" && (k = g, g = this.length), k !== void 0 && typeof k != "string") throw new TypeError("encoding must be a string");
          if (typeof k == "string" && !r.isEncoding(k)) throw new TypeError("Unknown encoding: " + k);
          if (i.length === 1) {
            const H = i.charCodeAt(0);
            (k === "utf8" && H < 128 || k === "latin1") && (i = H);
          }
        } else typeof i == "number" ? i = i & 255 : typeof i == "boolean" && (i = Number(i));
        if (t < 0 || this.length < t || this.length < g) throw new RangeError("Out of range index");
        if (g <= t) return this;
        t = t >>> 0, g = g === void 0 ? this.length : g >>> 0, i || (i = 0);
        let B;
        if (typeof i == "number") for (B = t; B < g; ++B) this[B] = i;
        else {
          const H = r.isBuffer(i) ? i : r.from(i, k), X = H.length;
          if (X === 0) throw new TypeError('The value "' + i + '" is invalid for argument "value"');
          for (B = 0; B < g - t; ++B) this[B + t] = H[B % X];
        }
        return this;
      };
      const W = {};
      function $(T, i, t) {
        W[T] = class extends t {
          constructor() {
            super(), Object.defineProperty(this, "message", {
              value: i.apply(this, arguments),
              writable: true,
              configurable: true
            }), this.name = `${this.name} [${T}]`, this.stack, delete this.name;
          }
          get code() {
            return T;
          }
          set code(k) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value: k,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${T}]: ${this.message}`;
          }
        };
      }
      $("ERR_BUFFER_OUT_OF_BOUNDS", function(T) {
        return T ? `${T} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError), $("ERR_INVALID_ARG_TYPE", function(T, i) {
        return `The "${T}" argument must be of type number. Received type ${typeof i}`;
      }, TypeError), $("ERR_OUT_OF_RANGE", function(T, i, t) {
        let g = `The value of "${T}" is out of range.`, k = t;
        return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? k = ie(String(t)) : typeof t == "bigint" && (k = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (k = ie(k)), k += "n"), g += ` It must be ${i}. Received ${k}`, g;
      }, RangeError);
      function ie(T) {
        let i = "", t = T.length;
        const g = T[0] === "-" ? 1 : 0;
        for (; t >= g + 4; t -= 3) i = `_${T.slice(t - 3, t)}${i}`;
        return `${T.slice(0, t)}${i}`;
      }
      function P(T, i, t) {
        J(i, "offset"), (T[i] === void 0 || T[i + t] === void 0) && te(i, T.length - (t + 1));
      }
      function U(T, i, t, g, k, B) {
        if (T > t || T < i) {
          const H = typeof i == "bigint" ? "n" : "";
          let X;
          throw i === 0 || i === BigInt(0) ? X = `>= 0${H} and < 2${H} ** ${(B + 1) * 8}${H}` : X = `>= -(2${H} ** ${(B + 1) * 8 - 1}${H}) and < 2 ** ${(B + 1) * 8 - 1}${H}`, new W.ERR_OUT_OF_RANGE("value", X, T);
        }
        P(g, k, B);
      }
      function J(T, i) {
        if (typeof T != "number") throw new W.ERR_INVALID_ARG_TYPE(i, "number", T);
      }
      function te(T, i, t) {
        throw Math.floor(T) !== T ? (J(T, t), new W.ERR_OUT_OF_RANGE("offset", "an integer", T)) : i < 0 ? new W.ERR_BUFFER_OUT_OF_BOUNDS() : new W.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${i}`, T);
      }
      const le = /[^+/0-9A-Za-z-_]/g;
      function ae(T) {
        if (T = T.split("=")[0], T = T.trim().replace(le, ""), T.length < 2) return "";
        for (; T.length % 4 !== 0; ) T = T + "=";
        return T;
      }
      function fe(T, i) {
        i = i || 1 / 0;
        let t;
        const g = T.length;
        let k = null;
        const B = [];
        for (let H = 0; H < g; ++H) {
          if (t = T.charCodeAt(H), t > 55295 && t < 57344) {
            if (!k) {
              if (t > 56319) {
                (i -= 3) > -1 && B.push(239, 191, 189);
                continue;
              } else if (H + 1 === g) {
                (i -= 3) > -1 && B.push(239, 191, 189);
                continue;
              }
              k = t;
              continue;
            }
            if (t < 56320) {
              (i -= 3) > -1 && B.push(239, 191, 189), k = t;
              continue;
            }
            t = (k - 55296 << 10 | t - 56320) + 65536;
          } else k && (i -= 3) > -1 && B.push(239, 191, 189);
          if (k = null, t < 128) {
            if ((i -= 1) < 0) break;
            B.push(t);
          } else if (t < 2048) {
            if ((i -= 2) < 0) break;
            B.push(t >> 6 | 192, t & 63 | 128);
          } else if (t < 65536) {
            if ((i -= 3) < 0) break;
            B.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
          } else if (t < 1114112) {
            if ((i -= 4) < 0) break;
            B.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
          } else throw new Error("Invalid code point");
        }
        return B;
      }
      function ge(T) {
        const i = [];
        for (let t = 0; t < T.length; ++t) i.push(T.charCodeAt(t) & 255);
        return i;
      }
      function xe(T, i) {
        let t, g, k;
        const B = [];
        for (let H = 0; H < T.length && !((i -= 2) < 0); ++H) t = T.charCodeAt(H), g = t >> 8, k = t % 256, B.push(k), B.push(g);
        return B;
      }
      function Oe(T) {
        return c.toByteArray(ae(T));
      }
      function me(T, i, t, g) {
        let k;
        for (k = 0; k < g && !(k + t >= i.length || k >= T.length); ++k) i[k + t] = T[k];
        return k;
      }
      function be(T, i) {
        return T instanceof i || T != null && T.constructor != null && T.constructor.name != null && T.constructor.name === i.name;
      }
      function Ne(T) {
        return T !== T;
      }
      const Me = function() {
        const T = "0123456789abcdef", i = new Array(256);
        for (let t = 0; t < 16; ++t) {
          const g = t * 16;
          for (let k = 0; k < 16; ++k) i[g + k] = T[t] + T[k];
        }
        return i;
      }();
      function Ie(T) {
        return typeof BigInt > "u" ? Ye : T;
      }
      function Ye() {
        throw new Error("BigInt not supported");
      }
    }(Ht)), Ht;
  };
  var De = {}, $e = {}, ve = {}, Ue = {}, Ct = {}, Gr = {}, ai;
  function ks() {
    return ai || (ai = 1, Object.defineProperty(Gr, "__esModule", {
      value: true
    }), Gr.crypto = void 0, Gr.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0), Gr;
  }
  var si;
  function qr() {
    return si || (si = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.Hash = e.nextTick = e.swap32IfBE = e.byteSwapIfBE = e.swap8IfBE = e.isLE = void 0, e.isBytes = d, e.anumber = a, e.abytes = v, e.ahash = o, e.aexists = n, e.aoutput = r, e.u8 = u, e.u32 = p, e.clean = s, e.createView = b, e.rotr = m, e.rotl = f, e.byteSwap = h, e.byteSwap32 = l, e.bytesToHex = E, e.hexToBytes = I, e.asyncLoop = L, e.utf8ToBytes = q, e.bytesToUtf8 = x, e.toBytes = R, e.kdfInputToBytes = z, e.concatBytes = F, e.checkOpts = C, e.createHasher = Q, e.createOptHasher = ee, e.createXOFer = re, e.randomBytes = D;
      const c = ks();
      function d(O) {
        return O instanceof Uint8Array || ArrayBuffer.isView(O) && O.constructor.name === "Uint8Array";
      }
      function a(O) {
        if (!Number.isSafeInteger(O) || O < 0) throw new Error("positive integer expected, got " + O);
      }
      function v(O, ...K) {
        if (!d(O)) throw new Error("Uint8Array expected");
        if (K.length > 0 && !K.includes(O.length)) throw new Error("Uint8Array expected of length " + K + ", got length=" + O.length);
      }
      function o(O) {
        if (typeof O != "function" || typeof O.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
        a(O.outputLen), a(O.blockLen);
      }
      function n(O, K = true) {
        if (O.destroyed) throw new Error("Hash instance has been destroyed");
        if (K && O.finished) throw new Error("Hash#digest() has already been called");
      }
      function r(O, K) {
        v(O);
        const V = K.outputLen;
        if (O.length < V) throw new Error("digestInto() expects output buffer of length at least " + V);
      }
      function u(O) {
        return new Uint8Array(O.buffer, O.byteOffset, O.byteLength);
      }
      function p(O) {
        return new Uint32Array(O.buffer, O.byteOffset, Math.floor(O.byteLength / 4));
      }
      function s(...O) {
        for (let K = 0; K < O.length; K++) O[K].fill(0);
      }
      function b(O) {
        return new DataView(O.buffer, O.byteOffset, O.byteLength);
      }
      function m(O, K) {
        return O << 32 - K | O >>> K;
      }
      function f(O, K) {
        return O << K | O >>> 32 - K >>> 0;
      }
      e.isLE = new Uint8Array(new Uint32Array([
        287454020
      ]).buffer)[0] === 68;
      function h(O) {
        return O << 24 & 4278190080 | O << 8 & 16711680 | O >>> 8 & 65280 | O >>> 24 & 255;
      }
      e.swap8IfBE = e.isLE ? (O) => O : (O) => h(O), e.byteSwapIfBE = e.swap8IfBE;
      function l(O) {
        for (let K = 0; K < O.length; K++) O[K] = h(O[K]);
        return O;
      }
      e.swap32IfBE = e.isLE ? (O) => O : l;
      const w = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", y = Array.from({
        length: 256
      }, (O, K) => K.toString(16).padStart(2, "0"));
      function E(O) {
        if (v(O), w) return O.toHex();
        let K = "";
        for (let V = 0; V < O.length; V++) K += y[O[V]];
        return K;
      }
      const _ = {
        _0: 48,
        _9: 57,
        A: 65,
        F: 70,
        a: 97,
        f: 102
      };
      function S(O) {
        if (O >= _._0 && O <= _._9) return O - _._0;
        if (O >= _.A && O <= _.F) return O - (_.A - 10);
        if (O >= _.a && O <= _.f) return O - (_.a - 10);
      }
      function I(O) {
        if (typeof O != "string") throw new Error("hex string expected, got " + typeof O);
        if (w) return Uint8Array.fromHex(O);
        const K = O.length, V = K / 2;
        if (K % 2) throw new Error("hex string expected, got unpadded hex of length " + K);
        const Z = new Uint8Array(V);
        for (let ue = 0, M = 0; ue < V; ue++, M += 2) {
          const Y = S(O.charCodeAt(M)), N = S(O.charCodeAt(M + 1));
          if (Y === void 0 || N === void 0) {
            const j = O[M] + O[M + 1];
            throw new Error('hex string expected, got non-hex character "' + j + '" at index ' + M);
          }
          Z[ue] = Y * 16 + N;
        }
        return Z;
      }
      const A = async () => {
      };
      e.nextTick = A;
      async function L(O, K, V) {
        let Z = Date.now();
        for (let ue = 0; ue < O; ue++) {
          V(ue);
          const M = Date.now() - Z;
          M >= 0 && M < K || (await (0, e.nextTick)(), Z += M);
        }
      }
      function q(O) {
        if (typeof O != "string") throw new Error("string expected");
        return new Uint8Array(new TextEncoder().encode(O));
      }
      function x(O) {
        return new TextDecoder().decode(O);
      }
      function R(O) {
        return typeof O == "string" && (O = q(O)), v(O), O;
      }
      function z(O) {
        return typeof O == "string" && (O = q(O)), v(O), O;
      }
      function F(...O) {
        let K = 0;
        for (let Z = 0; Z < O.length; Z++) {
          const ue = O[Z];
          v(ue), K += ue.length;
        }
        const V = new Uint8Array(K);
        for (let Z = 0, ue = 0; Z < O.length; Z++) {
          const M = O[Z];
          V.set(M, ue), ue += M.length;
        }
        return V;
      }
      function C(O, K) {
        if (K !== void 0 && {}.toString.call(K) !== "[object Object]") throw new Error("options should be object or undefined");
        return Object.assign(O, K);
      }
      class G {
      }
      e.Hash = G;
      function Q(O) {
        const K = (Z) => O().update(R(Z)).digest(), V = O();
        return K.outputLen = V.outputLen, K.blockLen = V.blockLen, K.create = () => O(), K;
      }
      function ee(O) {
        const K = (Z, ue) => O(ue).update(R(Z)).digest(), V = O({});
        return K.outputLen = V.outputLen, K.blockLen = V.blockLen, K.create = (Z) => O(Z), K;
      }
      function re(O) {
        const K = (Z, ue) => O(ue).update(R(Z)).digest(), V = O({});
        return K.outputLen = V.outputLen, K.blockLen = V.blockLen, K.create = (Z) => O(Z), K;
      }
      e.wrapConstructor = Q, e.wrapConstructorWithOpts = ee, e.wrapXOFConstructorWithOpts = re;
      function D(O = 32) {
        if (c.crypto && typeof c.crypto.getRandomValues == "function") return c.crypto.getRandomValues(new Uint8Array(O));
        if (c.crypto && typeof c.crypto.randomBytes == "function") return Uint8Array.from(c.crypto.randomBytes(O));
        throw new Error("crypto.getRandomValues must be defined");
      }
    }(Ct)), Ct;
  }
  var ui;
  function La() {
    if (ui) return Ue;
    ui = 1, Object.defineProperty(Ue, "__esModule", {
      value: true
    }), Ue.SHA512_IV = Ue.SHA384_IV = Ue.SHA224_IV = Ue.SHA256_IV = Ue.HashMD = void 0, Ue.setBigUint64 = c, Ue.Chi = d, Ue.Maj = a;
    const e = qr();
    function c(o, n, r, u) {
      if (typeof o.setBigUint64 == "function") return o.setBigUint64(n, r, u);
      const p = BigInt(32), s = BigInt(4294967295), b = Number(r >> p & s), m = Number(r & s), f = u ? 4 : 0, h = u ? 0 : 4;
      o.setUint32(n + f, b, u), o.setUint32(n + h, m, u);
    }
    function d(o, n, r) {
      return o & n ^ ~o & r;
    }
    function a(o, n, r) {
      return o & n ^ o & r ^ n & r;
    }
    class v extends e.Hash {
      constructor(n, r, u, p) {
        super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = n, this.outputLen = r, this.padOffset = u, this.isLE = p, this.buffer = new Uint8Array(n), this.view = (0, e.createView)(this.buffer);
      }
      update(n) {
        (0, e.aexists)(this), n = (0, e.toBytes)(n), (0, e.abytes)(n);
        const { view: r, buffer: u, blockLen: p } = this, s = n.length;
        for (let b = 0; b < s; ) {
          const m = Math.min(p - this.pos, s - b);
          if (m === p) {
            const f = (0, e.createView)(n);
            for (; p <= s - b; b += p) this.process(f, b);
            continue;
          }
          u.set(n.subarray(b, b + m), this.pos), this.pos += m, b += m, this.pos === p && (this.process(r, 0), this.pos = 0);
        }
        return this.length += n.length, this.roundClean(), this;
      }
      digestInto(n) {
        (0, e.aexists)(this), (0, e.aoutput)(n, this), this.finished = true;
        const { buffer: r, view: u, blockLen: p, isLE: s } = this;
        let { pos: b } = this;
        r[b++] = 128, (0, e.clean)(this.buffer.subarray(b)), this.padOffset > p - b && (this.process(u, 0), b = 0);
        for (let w = b; w < p; w++) r[w] = 0;
        c(u, p - 8, BigInt(this.length * 8), s), this.process(u, 0);
        const m = (0, e.createView)(n), f = this.outputLen;
        if (f % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const h = f / 4, l = this.get();
        if (h > l.length) throw new Error("_sha2: outputLen bigger than state");
        for (let w = 0; w < h; w++) m.setUint32(4 * w, l[w], s);
      }
      digest() {
        const { buffer: n, outputLen: r } = this;
        this.digestInto(n);
        const u = n.slice(0, r);
        return this.destroy(), u;
      }
      _cloneInto(n) {
        n || (n = new this.constructor()), n.set(...this.get());
        const { blockLen: r, buffer: u, length: p, finished: s, destroyed: b, pos: m } = this;
        return n.destroyed = b, n.finished = s, n.length = p, n.pos = m, p % r && n.buffer.set(u), n;
      }
      clone() {
        return this._cloneInto();
      }
    }
    return Ue.HashMD = v, Ue.SHA256_IV = Uint32Array.from([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]), Ue.SHA224_IV = Uint32Array.from([
      3238371032,
      914150663,
      812702999,
      4144912697,
      4290775857,
      1750603025,
      1694076839,
      3204075428
    ]), Ue.SHA384_IV = Uint32Array.from([
      3418070365,
      3238371032,
      1654270250,
      914150663,
      2438529370,
      812702999,
      355462360,
      4144912697,
      1731405415,
      4290775857,
      2394180231,
      1750603025,
      3675008525,
      1694076839,
      1203062813,
      3204075428
    ]), Ue.SHA512_IV = Uint32Array.from([
      1779033703,
      4089235720,
      3144134277,
      2227873595,
      1013904242,
      4271175723,
      2773480762,
      1595750129,
      1359893119,
      2917565137,
      2600822924,
      725511199,
      528734635,
      4215389547,
      1541459225,
      327033209
    ]), Ue;
  }
  var de = {}, ci;
  function Ss() {
    if (ci) return de;
    ci = 1, Object.defineProperty(de, "__esModule", {
      value: true
    }), de.toBig = de.shrSL = de.shrSH = de.rotrSL = de.rotrSH = de.rotrBL = de.rotrBH = de.rotr32L = de.rotr32H = de.rotlSL = de.rotlSH = de.rotlBL = de.rotlBH = de.add5L = de.add5H = de.add4L = de.add4H = de.add3L = de.add3H = void 0, de.add = y, de.fromBig = d, de.split = a;
    const e = BigInt(2 ** 32 - 1), c = BigInt(32);
    function d(x, R = false) {
      return R ? {
        h: Number(x & e),
        l: Number(x >> c & e)
      } : {
        h: Number(x >> c & e) | 0,
        l: Number(x & e) | 0
      };
    }
    function a(x, R = false) {
      const z = x.length;
      let F = new Uint32Array(z), C = new Uint32Array(z);
      for (let G = 0; G < z; G++) {
        const { h: Q, l: ee } = d(x[G], R);
        [F[G], C[G]] = [
          Q,
          ee
        ];
      }
      return [
        F,
        C
      ];
    }
    const v = (x, R) => BigInt(x >>> 0) << c | BigInt(R >>> 0);
    de.toBig = v;
    const o = (x, R, z) => x >>> z;
    de.shrSH = o;
    const n = (x, R, z) => x << 32 - z | R >>> z;
    de.shrSL = n;
    const r = (x, R, z) => x >>> z | R << 32 - z;
    de.rotrSH = r;
    const u = (x, R, z) => x << 32 - z | R >>> z;
    de.rotrSL = u;
    const p = (x, R, z) => x << 64 - z | R >>> z - 32;
    de.rotrBH = p;
    const s = (x, R, z) => x >>> z - 32 | R << 64 - z;
    de.rotrBL = s;
    const b = (x, R) => R;
    de.rotr32H = b;
    const m = (x, R) => x;
    de.rotr32L = m;
    const f = (x, R, z) => x << z | R >>> 32 - z;
    de.rotlSH = f;
    const h = (x, R, z) => R << z | x >>> 32 - z;
    de.rotlSL = h;
    const l = (x, R, z) => R << z - 32 | x >>> 64 - z;
    de.rotlBH = l;
    const w = (x, R, z) => x << z - 32 | R >>> 64 - z;
    de.rotlBL = w;
    function y(x, R, z, F) {
      const C = (R >>> 0) + (F >>> 0);
      return {
        h: x + z + (C / 2 ** 32 | 0) | 0,
        l: C | 0
      };
    }
    const E = (x, R, z) => (x >>> 0) + (R >>> 0) + (z >>> 0);
    de.add3L = E;
    const _ = (x, R, z, F) => R + z + F + (x / 2 ** 32 | 0) | 0;
    de.add3H = _;
    const S = (x, R, z, F) => (x >>> 0) + (R >>> 0) + (z >>> 0) + (F >>> 0);
    de.add4L = S;
    const I = (x, R, z, F, C) => R + z + F + C + (x / 2 ** 32 | 0) | 0;
    de.add4H = I;
    const A = (x, R, z, F, C) => (x >>> 0) + (R >>> 0) + (z >>> 0) + (F >>> 0) + (C >>> 0);
    de.add5L = A;
    const L = (x, R, z, F, C, G) => R + z + F + C + G + (x / 2 ** 32 | 0) | 0;
    de.add5H = L;
    const q = {
      fromBig: d,
      split: a,
      toBig: v,
      shrSH: o,
      shrSL: n,
      rotrSH: r,
      rotrSL: u,
      rotrBH: p,
      rotrBL: s,
      rotr32H: b,
      rotr32L: m,
      rotlSH: f,
      rotlSL: h,
      rotlBH: l,
      rotlBL: w,
      add: y,
      add3L: E,
      add3H: _,
      add4L: S,
      add4H: I,
      add5H: L,
      add5L: A
    };
    return de.default = q, de;
  }
  var li;
  function ja() {
    if (li) return ve;
    li = 1, Object.defineProperty(ve, "__esModule", {
      value: true
    }), ve.sha512_224 = ve.sha512_256 = ve.sha384 = ve.sha512 = ve.sha224 = ve.sha256 = ve.SHA512_256 = ve.SHA512_224 = ve.SHA384 = ve.SHA512 = ve.SHA224 = ve.SHA256 = void 0;
    const e = La(), c = Ss(), d = qr(), a = Uint32Array.from([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]), v = new Uint32Array(64);
    class o extends e.HashMD {
      constructor(_ = 32) {
        super(64, _, 8, false), this.A = e.SHA256_IV[0] | 0, this.B = e.SHA256_IV[1] | 0, this.C = e.SHA256_IV[2] | 0, this.D = e.SHA256_IV[3] | 0, this.E = e.SHA256_IV[4] | 0, this.F = e.SHA256_IV[5] | 0, this.G = e.SHA256_IV[6] | 0, this.H = e.SHA256_IV[7] | 0;
      }
      get() {
        const { A: _, B: S, C: I, D: A, E: L, F: q, G: x, H: R } = this;
        return [
          _,
          S,
          I,
          A,
          L,
          q,
          x,
          R
        ];
      }
      set(_, S, I, A, L, q, x, R) {
        this.A = _ | 0, this.B = S | 0, this.C = I | 0, this.D = A | 0, this.E = L | 0, this.F = q | 0, this.G = x | 0, this.H = R | 0;
      }
      process(_, S) {
        for (let C = 0; C < 16; C++, S += 4) v[C] = _.getUint32(S, false);
        for (let C = 16; C < 64; C++) {
          const G = v[C - 15], Q = v[C - 2], ee = (0, d.rotr)(G, 7) ^ (0, d.rotr)(G, 18) ^ G >>> 3, re = (0, d.rotr)(Q, 17) ^ (0, d.rotr)(Q, 19) ^ Q >>> 10;
          v[C] = re + v[C - 7] + ee + v[C - 16] | 0;
        }
        let { A: I, B: A, C: L, D: q, E: x, F: R, G: z, H: F } = this;
        for (let C = 0; C < 64; C++) {
          const G = (0, d.rotr)(x, 6) ^ (0, d.rotr)(x, 11) ^ (0, d.rotr)(x, 25), Q = F + G + (0, e.Chi)(x, R, z) + a[C] + v[C] | 0, re = ((0, d.rotr)(I, 2) ^ (0, d.rotr)(I, 13) ^ (0, d.rotr)(I, 22)) + (0, e.Maj)(I, A, L) | 0;
          F = z, z = R, R = x, x = q + Q | 0, q = L, L = A, A = I, I = Q + re | 0;
        }
        I = I + this.A | 0, A = A + this.B | 0, L = L + this.C | 0, q = q + this.D | 0, x = x + this.E | 0, R = R + this.F | 0, z = z + this.G | 0, F = F + this.H | 0, this.set(I, A, L, q, x, R, z, F);
      }
      roundClean() {
        (0, d.clean)(v);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, d.clean)(this.buffer);
      }
    }
    ve.SHA256 = o;
    class n extends o {
      constructor() {
        super(28), this.A = e.SHA224_IV[0] | 0, this.B = e.SHA224_IV[1] | 0, this.C = e.SHA224_IV[2] | 0, this.D = e.SHA224_IV[3] | 0, this.E = e.SHA224_IV[4] | 0, this.F = e.SHA224_IV[5] | 0, this.G = e.SHA224_IV[6] | 0, this.H = e.SHA224_IV[7] | 0;
      }
    }
    ve.SHA224 = n;
    const r = c.split([
      "0x428a2f98d728ae22",
      "0x7137449123ef65cd",
      "0xb5c0fbcfec4d3b2f",
      "0xe9b5dba58189dbbc",
      "0x3956c25bf348b538",
      "0x59f111f1b605d019",
      "0x923f82a4af194f9b",
      "0xab1c5ed5da6d8118",
      "0xd807aa98a3030242",
      "0x12835b0145706fbe",
      "0x243185be4ee4b28c",
      "0x550c7dc3d5ffb4e2",
      "0x72be5d74f27b896f",
      "0x80deb1fe3b1696b1",
      "0x9bdc06a725c71235",
      "0xc19bf174cf692694",
      "0xe49b69c19ef14ad2",
      "0xefbe4786384f25e3",
      "0x0fc19dc68b8cd5b5",
      "0x240ca1cc77ac9c65",
      "0x2de92c6f592b0275",
      "0x4a7484aa6ea6e483",
      "0x5cb0a9dcbd41fbd4",
      "0x76f988da831153b5",
      "0x983e5152ee66dfab",
      "0xa831c66d2db43210",
      "0xb00327c898fb213f",
      "0xbf597fc7beef0ee4",
      "0xc6e00bf33da88fc2",
      "0xd5a79147930aa725",
      "0x06ca6351e003826f",
      "0x142929670a0e6e70",
      "0x27b70a8546d22ffc",
      "0x2e1b21385c26c926",
      "0x4d2c6dfc5ac42aed",
      "0x53380d139d95b3df",
      "0x650a73548baf63de",
      "0x766a0abb3c77b2a8",
      "0x81c2c92e47edaee6",
      "0x92722c851482353b",
      "0xa2bfe8a14cf10364",
      "0xa81a664bbc423001",
      "0xc24b8b70d0f89791",
      "0xc76c51a30654be30",
      "0xd192e819d6ef5218",
      "0xd69906245565a910",
      "0xf40e35855771202a",
      "0x106aa07032bbd1b8",
      "0x19a4c116b8d2d0c8",
      "0x1e376c085141ab53",
      "0x2748774cdf8eeb99",
      "0x34b0bcb5e19b48a8",
      "0x391c0cb3c5c95a63",
      "0x4ed8aa4ae3418acb",
      "0x5b9cca4f7763e373",
      "0x682e6ff3d6b2b8a3",
      "0x748f82ee5defb2fc",
      "0x78a5636f43172f60",
      "0x84c87814a1f0ab72",
      "0x8cc702081a6439ec",
      "0x90befffa23631e28",
      "0xa4506cebde82bde9",
      "0xbef9a3f7b2c67915",
      "0xc67178f2e372532b",
      "0xca273eceea26619c",
      "0xd186b8c721c0c207",
      "0xeada7dd6cde0eb1e",
      "0xf57d4f7fee6ed178",
      "0x06f067aa72176fba",
      "0x0a637dc5a2c898a6",
      "0x113f9804bef90dae",
      "0x1b710b35131c471b",
      "0x28db77f523047d84",
      "0x32caab7b40c72493",
      "0x3c9ebe0a15c9bebc",
      "0x431d67c49c100d4c",
      "0x4cc5d4becb3e42b6",
      "0x597f299cfc657e2a",
      "0x5fcb6fab3ad6faec",
      "0x6c44198c4a475817"
    ].map((E) => BigInt(E))), u = r[0], p = r[1], s = new Uint32Array(80), b = new Uint32Array(80);
    class m extends e.HashMD {
      constructor(_ = 64) {
        super(128, _, 16, false), this.Ah = e.SHA512_IV[0] | 0, this.Al = e.SHA512_IV[1] | 0, this.Bh = e.SHA512_IV[2] | 0, this.Bl = e.SHA512_IV[3] | 0, this.Ch = e.SHA512_IV[4] | 0, this.Cl = e.SHA512_IV[5] | 0, this.Dh = e.SHA512_IV[6] | 0, this.Dl = e.SHA512_IV[7] | 0, this.Eh = e.SHA512_IV[8] | 0, this.El = e.SHA512_IV[9] | 0, this.Fh = e.SHA512_IV[10] | 0, this.Fl = e.SHA512_IV[11] | 0, this.Gh = e.SHA512_IV[12] | 0, this.Gl = e.SHA512_IV[13] | 0, this.Hh = e.SHA512_IV[14] | 0, this.Hl = e.SHA512_IV[15] | 0;
      }
      get() {
        const { Ah: _, Al: S, Bh: I, Bl: A, Ch: L, Cl: q, Dh: x, Dl: R, Eh: z, El: F, Fh: C, Fl: G, Gh: Q, Gl: ee, Hh: re, Hl: D } = this;
        return [
          _,
          S,
          I,
          A,
          L,
          q,
          x,
          R,
          z,
          F,
          C,
          G,
          Q,
          ee,
          re,
          D
        ];
      }
      set(_, S, I, A, L, q, x, R, z, F, C, G, Q, ee, re, D) {
        this.Ah = _ | 0, this.Al = S | 0, this.Bh = I | 0, this.Bl = A | 0, this.Ch = L | 0, this.Cl = q | 0, this.Dh = x | 0, this.Dl = R | 0, this.Eh = z | 0, this.El = F | 0, this.Fh = C | 0, this.Fl = G | 0, this.Gh = Q | 0, this.Gl = ee | 0, this.Hh = re | 0, this.Hl = D | 0;
      }
      process(_, S) {
        for (let V = 0; V < 16; V++, S += 4) s[V] = _.getUint32(S), b[V] = _.getUint32(S += 4);
        for (let V = 16; V < 80; V++) {
          const Z = s[V - 15] | 0, ue = b[V - 15] | 0, M = c.rotrSH(Z, ue, 1) ^ c.rotrSH(Z, ue, 8) ^ c.shrSH(Z, ue, 7), Y = c.rotrSL(Z, ue, 1) ^ c.rotrSL(Z, ue, 8) ^ c.shrSL(Z, ue, 7), N = s[V - 2] | 0, j = b[V - 2] | 0, W = c.rotrSH(N, j, 19) ^ c.rotrBH(N, j, 61) ^ c.shrSH(N, j, 6), $ = c.rotrSL(N, j, 19) ^ c.rotrBL(N, j, 61) ^ c.shrSL(N, j, 6), ie = c.add4L(Y, $, b[V - 7], b[V - 16]), P = c.add4H(ie, M, W, s[V - 7], s[V - 16]);
          s[V] = P | 0, b[V] = ie | 0;
        }
        let { Ah: I, Al: A, Bh: L, Bl: q, Ch: x, Cl: R, Dh: z, Dl: F, Eh: C, El: G, Fh: Q, Fl: ee, Gh: re, Gl: D, Hh: O, Hl: K } = this;
        for (let V = 0; V < 80; V++) {
          const Z = c.rotrSH(C, G, 14) ^ c.rotrSH(C, G, 18) ^ c.rotrBH(C, G, 41), ue = c.rotrSL(C, G, 14) ^ c.rotrSL(C, G, 18) ^ c.rotrBL(C, G, 41), M = C & Q ^ ~C & re, Y = G & ee ^ ~G & D, N = c.add5L(K, ue, Y, p[V], b[V]), j = c.add5H(N, O, Z, M, u[V], s[V]), W = N | 0, $ = c.rotrSH(I, A, 28) ^ c.rotrBH(I, A, 34) ^ c.rotrBH(I, A, 39), ie = c.rotrSL(I, A, 28) ^ c.rotrBL(I, A, 34) ^ c.rotrBL(I, A, 39), P = I & L ^ I & x ^ L & x, U = A & q ^ A & R ^ q & R;
          O = re | 0, K = D | 0, re = Q | 0, D = ee | 0, Q = C | 0, ee = G | 0, { h: C, l: G } = c.add(z | 0, F | 0, j | 0, W | 0), z = x | 0, F = R | 0, x = L | 0, R = q | 0, L = I | 0, q = A | 0;
          const J = c.add3L(W, ie, U);
          I = c.add3H(J, j, $, P), A = J | 0;
        }
        ({ h: I, l: A } = c.add(this.Ah | 0, this.Al | 0, I | 0, A | 0)), { h: L, l: q } = c.add(this.Bh | 0, this.Bl | 0, L | 0, q | 0), { h: x, l: R } = c.add(this.Ch | 0, this.Cl | 0, x | 0, R | 0), { h: z, l: F } = c.add(this.Dh | 0, this.Dl | 0, z | 0, F | 0), { h: C, l: G } = c.add(this.Eh | 0, this.El | 0, C | 0, G | 0), { h: Q, l: ee } = c.add(this.Fh | 0, this.Fl | 0, Q | 0, ee | 0), { h: re, l: D } = c.add(this.Gh | 0, this.Gl | 0, re | 0, D | 0), { h: O, l: K } = c.add(this.Hh | 0, this.Hl | 0, O | 0, K | 0), this.set(I, A, L, q, x, R, z, F, C, G, Q, ee, re, D, O, K);
      }
      roundClean() {
        (0, d.clean)(s, b);
      }
      destroy() {
        (0, d.clean)(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }
    ve.SHA512 = m;
    class f extends m {
      constructor() {
        super(48), this.Ah = e.SHA384_IV[0] | 0, this.Al = e.SHA384_IV[1] | 0, this.Bh = e.SHA384_IV[2] | 0, this.Bl = e.SHA384_IV[3] | 0, this.Ch = e.SHA384_IV[4] | 0, this.Cl = e.SHA384_IV[5] | 0, this.Dh = e.SHA384_IV[6] | 0, this.Dl = e.SHA384_IV[7] | 0, this.Eh = e.SHA384_IV[8] | 0, this.El = e.SHA384_IV[9] | 0, this.Fh = e.SHA384_IV[10] | 0, this.Fl = e.SHA384_IV[11] | 0, this.Gh = e.SHA384_IV[12] | 0, this.Gl = e.SHA384_IV[13] | 0, this.Hh = e.SHA384_IV[14] | 0, this.Hl = e.SHA384_IV[15] | 0;
      }
    }
    ve.SHA384 = f;
    const h = Uint32Array.from([
      2352822216,
      424955298,
      1944164710,
      2312950998,
      502970286,
      855612546,
      1738396948,
      1479516111,
      258812777,
      2077511080,
      2011393907,
      79989058,
      1067287976,
      1780299464,
      286451373,
      2446758561
    ]), l = Uint32Array.from([
      573645204,
      4230739756,
      2673172387,
      3360449730,
      596883563,
      1867755857,
      2520282905,
      1497426621,
      2519219938,
      2827943907,
      3193839141,
      1401305490,
      721525244,
      746961066,
      246885852,
      2177182882
    ]);
    class w extends m {
      constructor() {
        super(28), this.Ah = h[0] | 0, this.Al = h[1] | 0, this.Bh = h[2] | 0, this.Bl = h[3] | 0, this.Ch = h[4] | 0, this.Cl = h[5] | 0, this.Dh = h[6] | 0, this.Dl = h[7] | 0, this.Eh = h[8] | 0, this.El = h[9] | 0, this.Fh = h[10] | 0, this.Fl = h[11] | 0, this.Gh = h[12] | 0, this.Gl = h[13] | 0, this.Hh = h[14] | 0, this.Hl = h[15] | 0;
      }
    }
    ve.SHA512_224 = w;
    class y extends m {
      constructor() {
        super(32), this.Ah = l[0] | 0, this.Al = l[1] | 0, this.Bh = l[2] | 0, this.Bl = l[3] | 0, this.Ch = l[4] | 0, this.Cl = l[5] | 0, this.Dh = l[6] | 0, this.Dl = l[7] | 0, this.Eh = l[8] | 0, this.El = l[9] | 0, this.Fh = l[10] | 0, this.Fl = l[11] | 0, this.Gh = l[12] | 0, this.Gl = l[13] | 0, this.Hh = l[14] | 0, this.Hl = l[15] | 0;
      }
    }
    return ve.SHA512_256 = y, ve.sha256 = (0, d.createHasher)(() => new o()), ve.sha224 = (0, d.createHasher)(() => new n()), ve.sha512 = (0, d.createHasher)(() => new m()), ve.sha384 = (0, d.createHasher)(() => new f()), ve.sha512_256 = (0, d.createHasher)(() => new y()), ve.sha512_224 = (0, d.createHasher)(() => new w()), ve;
  }
  var fi;
  function ht() {
    if (fi) return $e;
    fi = 1, Object.defineProperty($e, "__esModule", {
      value: true
    }), $e.sha224 = $e.SHA224 = $e.sha256 = $e.SHA256 = void 0;
    const e = ja();
    return $e.SHA256 = e.SHA256, $e.sha256 = e.sha256, $e.SHA224 = e.SHA224, $e.sha224 = e.sha224, $e;
  }
  var Se = {}, di;
  function qa() {
    if (di) return Se;
    di = 1, Object.defineProperty(Se, "__esModule", {
      value: true
    }), Se.sha512_256 = Se.SHA512_256 = Se.sha512_224 = Se.SHA512_224 = Se.sha384 = Se.SHA384 = Se.sha512 = Se.SHA512 = void 0;
    const e = ja();
    return Se.SHA512 = e.SHA512, Se.sha512 = e.sha512, Se.SHA384 = e.SHA384, Se.sha384 = e.sha384, Se.SHA512_224 = e.SHA512_224, Se.sha512_224 = e.sha512_224, Se.SHA512_256 = e.SHA512_256, Se.sha512_256 = e.sha512_256, Se;
  }
  var $r = {}, Lt = {}, hi;
  function Fa() {
    return hi || (hi = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.hmac = e.HMAC = void 0;
      const c = qr();
      class d extends c.Hash {
        constructor(o, n) {
          super(), this.finished = false, this.destroyed = false, (0, c.ahash)(o);
          const r = (0, c.toBytes)(n);
          if (this.iHash = o.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
          this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
          const u = this.blockLen, p = new Uint8Array(u);
          p.set(r.length > u ? o.create().update(r).digest() : r);
          for (let s = 0; s < p.length; s++) p[s] ^= 54;
          this.iHash.update(p), this.oHash = o.create();
          for (let s = 0; s < p.length; s++) p[s] ^= 106;
          this.oHash.update(p), (0, c.clean)(p);
        }
        update(o) {
          return (0, c.aexists)(this), this.iHash.update(o), this;
        }
        digestInto(o) {
          (0, c.aexists)(this), (0, c.abytes)(o, this.outputLen), this.finished = true, this.iHash.digestInto(o), this.oHash.update(o), this.oHash.digestInto(o), this.destroy();
        }
        digest() {
          const o = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(o), o;
        }
        _cloneInto(o) {
          o || (o = Object.create(Object.getPrototypeOf(this), {}));
          const { oHash: n, iHash: r, finished: u, destroyed: p, blockLen: s, outputLen: b } = this;
          return o = o, o.finished = u, o.destroyed = p, o.blockLen = s, o.outputLen = b, o.oHash = n._cloneInto(o.oHash), o.iHash = r._cloneInto(o.iHash), o;
        }
        clone() {
          return this._cloneInto();
        }
        destroy() {
          this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
        }
      }
      e.HMAC = d;
      const a = (v, o, n) => new d(v, o).update(n).digest();
      e.hmac = a, e.hmac.create = (v, o) => new d(v, o);
    }(Lt)), Lt;
  }
  var pi;
  function Ts() {
    if (pi) return $r;
    pi = 1, Object.defineProperty($r, "__esModule", {
      value: true
    }), $r.pbkdf2 = v, $r.pbkdf2Async = o;
    const e = Fa(), c = qr();
    function d(n, r, u, p) {
      (0, c.ahash)(n);
      const s = (0, c.checkOpts)({
        dkLen: 32,
        asyncTick: 10
      }, p), { c: b, dkLen: m, asyncTick: f } = s;
      if ((0, c.anumber)(b), (0, c.anumber)(m), (0, c.anumber)(f), b < 1) throw new Error("iterations (c) should be >= 1");
      const h = (0, c.kdfInputToBytes)(r), l = (0, c.kdfInputToBytes)(u), w = new Uint8Array(m), y = e.hmac.create(n, h), E = y._cloneInto().update(l);
      return {
        c: b,
        dkLen: m,
        asyncTick: f,
        DK: w,
        PRF: y,
        PRFSalt: E
      };
    }
    function a(n, r, u, p, s) {
      return n.destroy(), r.destroy(), p && p.destroy(), (0, c.clean)(s), u;
    }
    function v(n, r, u, p) {
      const { c: s, dkLen: b, DK: m, PRF: f, PRFSalt: h } = d(n, r, u, p);
      let l;
      const w = new Uint8Array(4), y = (0, c.createView)(w), E = new Uint8Array(f.outputLen);
      for (let _ = 1, S = 0; S < b; _++, S += f.outputLen) {
        const I = m.subarray(S, S + f.outputLen);
        y.setInt32(0, _, false), (l = h._cloneInto(l)).update(w).digestInto(E), I.set(E.subarray(0, I.length));
        for (let A = 1; A < s; A++) {
          f._cloneInto(l).update(E).digestInto(E);
          for (let L = 0; L < I.length; L++) I[L] ^= E[L];
        }
      }
      return a(f, h, m, l, E);
    }
    async function o(n, r, u, p) {
      const { c: s, dkLen: b, asyncTick: m, DK: f, PRF: h, PRFSalt: l } = d(n, r, u, p);
      let w;
      const y = new Uint8Array(4), E = (0, c.createView)(y), _ = new Uint8Array(h.outputLen);
      for (let S = 1, I = 0; I < b; S++, I += h.outputLen) {
        const A = f.subarray(I, I + h.outputLen);
        E.setInt32(0, S, false), (w = l._cloneInto(w)).update(y).digestInto(_), A.set(_.subarray(0, A.length)), await (0, c.asyncLoop)(s - 1, m, () => {
          h._cloneInto(w).update(_).digestInto(_);
          for (let L = 0; L < A.length; L++) A[L] ^= _[L];
        });
      }
      return a(h, l, f, w, _);
    }
    return $r;
  }
  var He = {};
  const xs = JSON.parse('["abdikace","abeceda","adresa","agrese","akce","aktovka","alej","alkohol","amputace","ananas","andulka","anekdota","anketa","antika","anulovat","archa","arogance","asfalt","asistent","aspirace","astma","astronom","atlas","atletika","atol","autobus","azyl","babka","bachor","bacil","baculka","badatel","bageta","bagr","bahno","bakterie","balada","baletka","balkon","balonek","balvan","balza","bambus","bankomat","barbar","baret","barman","baroko","barva","baterka","batoh","bavlna","bazalka","bazilika","bazuka","bedna","beran","beseda","bestie","beton","bezinka","bezmoc","beztak","bicykl","bidlo","biftek","bikiny","bilance","biograf","biolog","bitva","bizon","blahobyt","blatouch","blecha","bledule","blesk","blikat","blizna","blokovat","bloudit","blud","bobek","bobr","bodlina","bodnout","bohatost","bojkot","bojovat","bokorys","bolest","borec","borovice","bota","boubel","bouchat","bouda","boule","bourat","boxer","bradavka","brambora","branka","bratr","brepta","briketa","brko","brloh","bronz","broskev","brunetka","brusinka","brzda","brzy","bublina","bubnovat","buchta","buditel","budka","budova","bufet","bujarost","bukvice","buldok","bulva","bunda","bunkr","burza","butik","buvol","buzola","bydlet","bylina","bytovka","bzukot","capart","carevna","cedr","cedule","cejch","cejn","cela","celer","celkem","celnice","cenina","cennost","cenovka","centrum","cenzor","cestopis","cetka","chalupa","chapadlo","charita","chata","chechtat","chemie","chichot","chirurg","chlad","chleba","chlubit","chmel","chmura","chobot","chochol","chodba","cholera","chomout","chopit","choroba","chov","chrapot","chrlit","chrt","chrup","chtivost","chudina","chutnat","chvat","chvilka","chvost","chyba","chystat","chytit","cibule","cigareta","cihelna","cihla","cinkot","cirkus","cisterna","citace","citrus","cizinec","cizost","clona","cokoliv","couvat","ctitel","ctnost","cudnost","cuketa","cukr","cupot","cvaknout","cval","cvik","cvrkot","cyklista","daleko","dareba","datel","datum","dcera","debata","dechovka","decibel","deficit","deflace","dekl","dekret","demokrat","deprese","derby","deska","detektiv","dikobraz","diktovat","dioda","diplom","disk","displej","divadlo","divoch","dlaha","dlouho","dluhopis","dnes","dobro","dobytek","docent","dochutit","dodnes","dohled","dohoda","dohra","dojem","dojnice","doklad","dokola","doktor","dokument","dolar","doleva","dolina","doma","dominant","domluvit","domov","donutit","dopad","dopis","doplnit","doposud","doprovod","dopustit","dorazit","dorost","dort","dosah","doslov","dostatek","dosud","dosyta","dotaz","dotek","dotknout","doufat","doutnat","dovozce","dozadu","doznat","dozorce","drahota","drak","dramatik","dravec","draze","drdol","drobnost","drogerie","drozd","drsnost","drtit","drzost","duben","duchovno","dudek","duha","duhovka","dusit","dusno","dutost","dvojice","dvorec","dynamit","ekolog","ekonomie","elektron","elipsa","email","emise","emoce","empatie","epizoda","epocha","epopej","epos","esej","esence","eskorta","eskymo","etiketa","euforie","evoluce","exekuce","exkurze","expedice","exploze","export","extrakt","facka","fajfka","fakulta","fanatik","fantazie","farmacie","favorit","fazole","federace","fejeton","fenka","fialka","figurant","filozof","filtr","finance","finta","fixace","fjord","flanel","flirt","flotila","fond","fosfor","fotbal","fotka","foton","frakce","freska","fronta","fukar","funkce","fyzika","galeje","garant","genetika","geolog","gilotina","glazura","glejt","golem","golfista","gotika","graf","gramofon","granule","grep","gril","grog","groteska","guma","hadice","hadr","hala","halenka","hanba","hanopis","harfa","harpuna","havran","hebkost","hejkal","hejno","hejtman","hektar","helma","hematom","herec","herna","heslo","hezky","historik","hladovka","hlasivky","hlava","hledat","hlen","hlodavec","hloh","hloupost","hltat","hlubina","hluchota","hmat","hmota","hmyz","hnis","hnojivo","hnout","hoblina","hoboj","hoch","hodiny","hodlat","hodnota","hodovat","hojnost","hokej","holinka","holka","holub","homole","honitba","honorace","horal","horda","horizont","horko","horlivec","hormon","hornina","horoskop","horstvo","hospoda","hostina","hotovost","houba","houf","houpat","houska","hovor","hradba","hranice","hravost","hrazda","hrbolek","hrdina","hrdlo","hrdost","hrnek","hrobka","hromada","hrot","hrouda","hrozen","hrstka","hrubost","hryzat","hubenost","hubnout","hudba","hukot","humr","husita","hustota","hvozd","hybnost","hydrant","hygiena","hymna","hysterik","idylka","ihned","ikona","iluze","imunita","infekce","inflace","inkaso","inovace","inspekce","internet","invalida","investor","inzerce","ironie","jablko","jachta","jahoda","jakmile","jakost","jalovec","jantar","jarmark","jaro","jasan","jasno","jatka","javor","jazyk","jedinec","jedle","jednatel","jehlan","jekot","jelen","jelito","jemnost","jenom","jepice","jeseter","jevit","jezdec","jezero","jinak","jindy","jinoch","jiskra","jistota","jitrnice","jizva","jmenovat","jogurt","jurta","kabaret","kabel","kabinet","kachna","kadet","kadidlo","kahan","kajak","kajuta","kakao","kaktus","kalamita","kalhoty","kalibr","kalnost","kamera","kamkoliv","kamna","kanibal","kanoe","kantor","kapalina","kapela","kapitola","kapka","kaple","kapota","kapr","kapusta","kapybara","karamel","karotka","karton","kasa","katalog","katedra","kauce","kauza","kavalec","kazajka","kazeta","kazivost","kdekoliv","kdesi","kedluben","kemp","keramika","kino","klacek","kladivo","klam","klapot","klasika","klaun","klec","klenba","klepat","klesnout","klid","klima","klisna","klobouk","klokan","klopa","kloub","klubovna","klusat","kluzkost","kmen","kmitat","kmotr","kniha","knot","koalice","koberec","kobka","kobliha","kobyla","kocour","kohout","kojenec","kokos","koktejl","kolaps","koleda","kolize","kolo","komando","kometa","komik","komnata","komora","kompas","komunita","konat","koncept","kondice","konec","konfese","kongres","konina","konkurs","kontakt","konzerva","kopanec","kopie","kopnout","koprovka","korbel","korektor","kormidlo","koroptev","korpus","koruna","koryto","korzet","kosatec","kostka","kotel","kotleta","kotoul","koukat","koupelna","kousek","kouzlo","kovboj","koza","kozoroh","krabice","krach","krajina","kralovat","krasopis","kravata","kredit","krejcar","kresba","kreveta","kriket","kritik","krize","krkavec","krmelec","krmivo","krocan","krok","kronika","kropit","kroupa","krovka","krtek","kruhadlo","krupice","krutost","krvinka","krychle","krypta","krystal","kryt","kudlanka","kufr","kujnost","kukla","kulajda","kulich","kulka","kulomet","kultura","kuna","kupodivu","kurt","kurzor","kutil","kvalita","kvasinka","kvestor","kynolog","kyselina","kytara","kytice","kytka","kytovec","kyvadlo","labrador","lachtan","ladnost","laik","lakomec","lamela","lampa","lanovka","lasice","laso","lastura","latinka","lavina","lebka","leckdy","leden","lednice","ledovka","ledvina","legenda","legie","legrace","lehce","lehkost","lehnout","lektvar","lenochod","lentilka","lepenka","lepidlo","letadlo","letec","letmo","letokruh","levhart","levitace","levobok","libra","lichotka","lidojed","lidskost","lihovina","lijavec","lilek","limetka","linie","linka","linoleum","listopad","litina","litovat","lobista","lodivod","logika","logoped","lokalita","loket","lomcovat","lopata","lopuch","lord","losos","lotr","loudal","louh","louka","louskat","lovec","lstivost","lucerna","lucifer","lump","lusk","lustrace","lvice","lyra","lyrika","lysina","madam","madlo","magistr","mahagon","majetek","majitel","majorita","makak","makovice","makrela","malba","malina","malovat","malvice","maminka","mandle","manko","marnost","masakr","maskot","masopust","matice","matrika","maturita","mazanec","mazivo","mazlit","mazurka","mdloba","mechanik","meditace","medovina","melasa","meloun","mentolka","metla","metoda","metr","mezera","migrace","mihnout","mihule","mikina","mikrofon","milenec","milimetr","milost","mimika","mincovna","minibar","minomet","minulost","miska","mistr","mixovat","mladost","mlha","mlhovina","mlok","mlsat","mluvit","mnich","mnohem","mobil","mocnost","modelka","modlitba","mohyla","mokro","molekula","momentka","monarcha","monokl","monstrum","montovat","monzun","mosaz","moskyt","most","motivace","motorka","motyka","moucha","moudrost","mozaika","mozek","mozol","mramor","mravenec","mrkev","mrtvola","mrzet","mrzutost","mstitel","mudrc","muflon","mulat","mumie","munice","muset","mutace","muzeum","muzikant","myslivec","mzda","nabourat","nachytat","nadace","nadbytek","nadhoz","nadobro","nadpis","nahlas","nahnat","nahodile","nahradit","naivita","najednou","najisto","najmout","naklonit","nakonec","nakrmit","nalevo","namazat","namluvit","nanometr","naoko","naopak","naostro","napadat","napevno","naplnit","napnout","naposled","naprosto","narodit","naruby","narychlo","nasadit","nasekat","naslepo","nastat","natolik","navenek","navrch","navzdory","nazvat","nebe","nechat","necky","nedaleko","nedbat","neduh","negace","nehet","nehoda","nejen","nejprve","neklid","nelibost","nemilost","nemoc","neochota","neonka","nepokoj","nerost","nerv","nesmysl","nesoulad","netvor","neuron","nevina","nezvykle","nicota","nijak","nikam","nikdy","nikl","nikterak","nitro","nocleh","nohavice","nominace","nora","norek","nositel","nosnost","nouze","noviny","novota","nozdra","nuda","nudle","nuget","nutit","nutnost","nutrie","nymfa","obal","obarvit","obava","obdiv","obec","obehnat","obejmout","obezita","obhajoba","obilnice","objasnit","objekt","obklopit","oblast","oblek","obliba","obloha","obluda","obnos","obohatit","obojek","obout","obrazec","obrna","obruba","obrys","obsah","obsluha","obstarat","obuv","obvaz","obvinit","obvod","obvykle","obyvatel","obzor","ocas","ocel","ocenit","ochladit","ochota","ochrana","ocitnout","odboj","odbyt","odchod","odcizit","odebrat","odeslat","odevzdat","odezva","odhadce","odhodit","odjet","odjinud","odkaz","odkoupit","odliv","odluka","odmlka","odolnost","odpad","odpis","odplout","odpor","odpustit","odpykat","odrazka","odsoudit","odstup","odsun","odtok","odtud","odvaha","odveta","odvolat","odvracet","odznak","ofina","ofsajd","ohlas","ohnisko","ohrada","ohrozit","ohryzek","okap","okenice","oklika","okno","okouzlit","okovy","okrasa","okres","okrsek","okruh","okupant","okurka","okusit","olejnina","olizovat","omak","omeleta","omezit","omladina","omlouvat","omluva","omyl","onehdy","opakovat","opasek","operace","opice","opilost","opisovat","opora","opozice","opravdu","oproti","orbital","orchestr","orgie","orlice","orloj","ortel","osada","oschnout","osika","osivo","oslava","oslepit","oslnit","oslovit","osnova","osoba","osolit","ospalec","osten","ostraha","ostuda","ostych","osvojit","oteplit","otisk","otop","otrhat","otrlost","otrok","otruby","otvor","ovanout","ovar","oves","ovlivnit","ovoce","oxid","ozdoba","pachatel","pacient","padouch","pahorek","pakt","palanda","palec","palivo","paluba","pamflet","pamlsek","panenka","panika","panna","panovat","panstvo","pantofle","paprika","parketa","parodie","parta","paruka","paryba","paseka","pasivita","pastelka","patent","patrona","pavouk","pazneht","pazourek","pecka","pedagog","pejsek","peklo","peloton","penalta","pendrek","penze","periskop","pero","pestrost","petarda","petice","petrolej","pevnina","pexeso","pianista","piha","pijavice","pikle","piknik","pilina","pilnost","pilulka","pinzeta","pipeta","pisatel","pistole","pitevna","pivnice","pivovar","placenta","plakat","plamen","planeta","plastika","platit","plavidlo","plaz","plech","plemeno","plenta","ples","pletivo","plevel","plivat","plnit","plno","plocha","plodina","plomba","plout","pluk","plyn","pobavit","pobyt","pochod","pocit","poctivec","podat","podcenit","podepsat","podhled","podivit","podklad","podmanit","podnik","podoba","podpora","podraz","podstata","podvod","podzim","poezie","pohanka","pohnutka","pohovor","pohroma","pohyb","pointa","pojistka","pojmout","pokazit","pokles","pokoj","pokrok","pokuta","pokyn","poledne","polibek","polknout","poloha","polynom","pomalu","pominout","pomlka","pomoc","pomsta","pomyslet","ponechat","ponorka","ponurost","popadat","popel","popisek","poplach","poprosit","popsat","popud","poradce","porce","porod","porucha","poryv","posadit","posed","posila","poskok","poslanec","posoudit","pospolu","postava","posudek","posyp","potah","potkan","potlesk","potomek","potrava","potupa","potvora","poukaz","pouto","pouzdro","povaha","povidla","povlak","povoz","povrch","povstat","povyk","povzdech","pozdrav","pozemek","poznatek","pozor","pozvat","pracovat","prahory","praktika","prales","praotec","praporek","prase","pravda","princip","prkno","probudit","procento","prodej","profese","prohra","projekt","prolomit","promile","pronikat","propad","prorok","prosba","proton","proutek","provaz","prskavka","prsten","prudkost","prut","prvek","prvohory","psanec","psovod","pstruh","ptactvo","puberta","puch","pudl","pukavec","puklina","pukrle","pult","pumpa","punc","pupen","pusa","pusinka","pustina","putovat","putyka","pyramida","pysk","pytel","racek","rachot","radiace","radnice","radon","raft","ragby","raketa","rakovina","rameno","rampouch","rande","rarach","rarita","rasovna","rastr","ratolest","razance","razidlo","reagovat","reakce","recept","redaktor","referent","reflex","rejnok","reklama","rekord","rekrut","rektor","reputace","revize","revma","revolver","rezerva","riskovat","riziko","robotika","rodokmen","rohovka","rokle","rokoko","romaneto","ropovod","ropucha","rorejs","rosol","rostlina","rotmistr","rotoped","rotunda","roubenka","roucho","roup","roura","rovina","rovnice","rozbor","rozchod","rozdat","rozeznat","rozhodce","rozinka","rozjezd","rozkaz","rozloha","rozmar","rozpad","rozruch","rozsah","roztok","rozum","rozvod","rubrika","ruchadlo","rukavice","rukopis","ryba","rybolov","rychlost","rydlo","rypadlo","rytina","ryzost","sadista","sahat","sako","samec","samizdat","samota","sanitka","sardinka","sasanka","satelit","sazba","sazenice","sbor","schovat","sebranka","secese","sedadlo","sediment","sedlo","sehnat","sejmout","sekera","sekta","sekunda","sekvoje","semeno","seno","servis","sesadit","seshora","seskok","seslat","sestra","sesuv","sesypat","setba","setina","setkat","setnout","setrvat","sever","seznam","shoda","shrnout","sifon","silnice","sirka","sirotek","sirup","situace","skafandr","skalisko","skanzen","skaut","skeptik","skica","skladba","sklenice","sklo","skluz","skoba","skokan","skoro","skripta","skrz","skupina","skvost","skvrna","slabika","sladidlo","slanina","slast","slavnost","sledovat","slepec","sleva","slezina","slib","slina","sliznice","slon","sloupek","slovo","sluch","sluha","slunce","slupka","slza","smaragd","smetana","smilstvo","smlouva","smog","smrad","smrk","smrtka","smutek","smysl","snad","snaha","snob","sobota","socha","sodovka","sokol","sopka","sotva","souboj","soucit","soudce","souhlas","soulad","soumrak","souprava","soused","soutok","souviset","spalovna","spasitel","spis","splav","spodek","spojenec","spolu","sponzor","spornost","spousta","sprcha","spustit","sranda","sraz","srdce","srna","srnec","srovnat","srpen","srst","srub","stanice","starosta","statika","stavba","stehno","stezka","stodola","stolek","stopa","storno","stoupat","strach","stres","strhnout","strom","struna","studna","stupnice","stvol","styk","subjekt","subtropy","suchar","sudost","sukno","sundat","sunout","surikata","surovina","svah","svalstvo","svetr","svatba","svazek","svisle","svitek","svoboda","svodidlo","svorka","svrab","sykavka","sykot","synek","synovec","sypat","sypkost","syrovost","sysel","sytost","tabletka","tabule","tahoun","tajemno","tajfun","tajga","tajit","tajnost","taktika","tamhle","tampon","tancovat","tanec","tanker","tapeta","tavenina","tazatel","technika","tehdy","tekutina","telefon","temnota","tendence","tenista","tenor","teplota","tepna","teprve","terapie","termoska","textil","ticho","tiskopis","titulek","tkadlec","tkanina","tlapka","tleskat","tlukot","tlupa","tmel","toaleta","topinka","topol","torzo","touha","toulec","tradice","traktor","tramp","trasa","traverza","trefit","trest","trezor","trhavina","trhlina","trochu","trojice","troska","trouba","trpce","trpitel","trpkost","trubec","truchlit","truhlice","trus","trvat","tudy","tuhnout","tuhost","tundra","turista","turnaj","tuzemsko","tvaroh","tvorba","tvrdost","tvrz","tygr","tykev","ubohost","uboze","ubrat","ubrousek","ubrus","ubytovna","ucho","uctivost","udivit","uhradit","ujednat","ujistit","ujmout","ukazatel","uklidnit","uklonit","ukotvit","ukrojit","ulice","ulita","ulovit","umyvadlo","unavit","uniforma","uniknout","upadnout","uplatnit","uplynout","upoutat","upravit","uran","urazit","usednout","usilovat","usmrtit","usnadnit","usnout","usoudit","ustlat","ustrnout","utahovat","utkat","utlumit","utonout","utopenec","utrousit","uvalit","uvolnit","uvozovka","uzdravit","uzel","uzenina","uzlina","uznat","vagon","valcha","valoun","vana","vandal","vanilka","varan","varhany","varovat","vcelku","vchod","vdova","vedro","vegetace","vejce","velbloud","veletrh","velitel","velmoc","velryba","venkov","veranda","verze","veselka","veskrze","vesnice","vespodu","vesta","veterina","veverka","vibrace","vichr","videohra","vidina","vidle","vila","vinice","viset","vitalita","vize","vizitka","vjezd","vklad","vkus","vlajka","vlak","vlasec","vlevo","vlhkost","vliv","vlnovka","vloupat","vnucovat","vnuk","voda","vodivost","vodoznak","vodstvo","vojensky","vojna","vojsko","volant","volba","volit","volno","voskovka","vozidlo","vozovna","vpravo","vrabec","vracet","vrah","vrata","vrba","vrcholek","vrhat","vrstva","vrtule","vsadit","vstoupit","vstup","vtip","vybavit","vybrat","vychovat","vydat","vydra","vyfotit","vyhledat","vyhnout","vyhodit","vyhradit","vyhubit","vyjasnit","vyjet","vyjmout","vyklopit","vykonat","vylekat","vymazat","vymezit","vymizet","vymyslet","vynechat","vynikat","vynutit","vypadat","vyplatit","vypravit","vypustit","vyrazit","vyrovnat","vyrvat","vyslovit","vysoko","vystavit","vysunout","vysypat","vytasit","vytesat","vytratit","vyvinout","vyvolat","vyvrhel","vyzdobit","vyznat","vzadu","vzbudit","vzchopit","vzdor","vzduch","vzdychat","vzestup","vzhledem","vzkaz","vzlykat","vznik","vzorek","vzpoura","vztah","vztek","xylofon","zabrat","zabydlet","zachovat","zadarmo","zadusit","zafoukat","zahltit","zahodit","zahrada","zahynout","zajatec","zajet","zajistit","zaklepat","zakoupit","zalepit","zamezit","zamotat","zamyslet","zanechat","zanikat","zaplatit","zapojit","zapsat","zarazit","zastavit","zasunout","zatajit","zatemnit","zatknout","zaujmout","zavalit","zavelet","zavinit","zavolat","zavrtat","zazvonit","zbavit","zbrusu","zbudovat","zbytek","zdaleka","zdarma","zdatnost","zdivo","zdobit","zdroj","zdvih","zdymadlo","zelenina","zeman","zemina","zeptat","zezadu","zezdola","zhatit","zhltnout","zhluboka","zhotovit","zhruba","zima","zimnice","zjemnit","zklamat","zkoumat","zkratka","zkumavka","zlato","zlehka","zloba","zlom","zlost","zlozvyk","zmapovat","zmar","zmatek","zmije","zmizet","zmocnit","zmodrat","zmrzlina","zmutovat","znak","znalost","znamenat","znovu","zobrazit","zotavit","zoubek","zoufale","zplodit","zpomalit","zprava","zprostit","zprudka","zprvu","zrada","zranit","zrcadlo","zrnitost","zrno","zrovna","zrychlit","zrzavost","zticha","ztratit","zubovina","zubr","zvednout","zvenku","zvesela","zvon","zvrat","zvukovod","zvyk"]'), Is = JSON.parse('["\u7684","\u4E00","\u662F","\u5728","\u4E0D","\u4E86","\u6709","\u548C","\u4EBA","\u8FD9","\u4E2D","\u5927","\u4E3A","\u4E0A","\u4E2A","\u56FD","\u6211","\u4EE5","\u8981","\u4ED6","\u65F6","\u6765","\u7528","\u4EEC","\u751F","\u5230","\u4F5C","\u5730","\u4E8E","\u51FA","\u5C31","\u5206","\u5BF9","\u6210","\u4F1A","\u53EF","\u4E3B","\u53D1","\u5E74","\u52A8","\u540C","\u5DE5","\u4E5F","\u80FD","\u4E0B","\u8FC7","\u5B50","\u8BF4","\u4EA7","\u79CD","\u9762","\u800C","\u65B9","\u540E","\u591A","\u5B9A","\u884C","\u5B66","\u6CD5","\u6240","\u6C11","\u5F97","\u7ECF","\u5341","\u4E09","\u4E4B","\u8FDB","\u7740","\u7B49","\u90E8","\u5EA6","\u5BB6","\u7535","\u529B","\u91CC","\u5982","\u6C34","\u5316","\u9AD8","\u81EA","\u4E8C","\u7406","\u8D77","\u5C0F","\u7269","\u73B0","\u5B9E","\u52A0","\u91CF","\u90FD","\u4E24","\u4F53","\u5236","\u673A","\u5F53","\u4F7F","\u70B9","\u4ECE","\u4E1A","\u672C","\u53BB","\u628A","\u6027","\u597D","\u5E94","\u5F00","\u5B83","\u5408","\u8FD8","\u56E0","\u7531","\u5176","\u4E9B","\u7136","\u524D","\u5916","\u5929","\u653F","\u56DB","\u65E5","\u90A3","\u793E","\u4E49","\u4E8B","\u5E73","\u5F62","\u76F8","\u5168","\u8868","\u95F4","\u6837","\u4E0E","\u5173","\u5404","\u91CD","\u65B0","\u7EBF","\u5185","\u6570","\u6B63","\u5FC3","\u53CD","\u4F60","\u660E","\u770B","\u539F","\u53C8","\u4E48","\u5229","\u6BD4","\u6216","\u4F46","\u8D28","\u6C14","\u7B2C","\u5411","\u9053","\u547D","\u6B64","\u53D8","\u6761","\u53EA","\u6CA1","\u7ED3","\u89E3","\u95EE","\u610F","\u5EFA","\u6708","\u516C","\u65E0","\u7CFB","\u519B","\u5F88","\u60C5","\u8005","\u6700","\u7ACB","\u4EE3","\u60F3","\u5DF2","\u901A","\u5E76","\u63D0","\u76F4","\u9898","\u515A","\u7A0B","\u5C55","\u4E94","\u679C","\u6599","\u8C61","\u5458","\u9769","\u4F4D","\u5165","\u5E38","\u6587","\u603B","\u6B21","\u54C1","\u5F0F","\u6D3B","\u8BBE","\u53CA","\u7BA1","\u7279","\u4EF6","\u957F","\u6C42","\u8001","\u5934","\u57FA","\u8D44","\u8FB9","\u6D41","\u8DEF","\u7EA7","\u5C11","\u56FE","\u5C71","\u7EDF","\u63A5","\u77E5","\u8F83","\u5C06","\u7EC4","\u89C1","\u8BA1","\u522B","\u5979","\u624B","\u89D2","\u671F","\u6839","\u8BBA","\u8FD0","\u519C","\u6307","\u51E0","\u4E5D","\u533A","\u5F3A","\u653E","\u51B3","\u897F","\u88AB","\u5E72","\u505A","\u5FC5","\u6218","\u5148","\u56DE","\u5219","\u4EFB","\u53D6","\u636E","\u5904","\u961F","\u5357","\u7ED9","\u8272","\u5149","\u95E8","\u5373","\u4FDD","\u6CBB","\u5317","\u9020","\u767E","\u89C4","\u70ED","\u9886","\u4E03","\u6D77","\u53E3","\u4E1C","\u5BFC","\u5668","\u538B","\u5FD7","\u4E16","\u91D1","\u589E","\u4E89","\u6D4E","\u9636","\u6CB9","\u601D","\u672F","\u6781","\u4EA4","\u53D7","\u8054","\u4EC0","\u8BA4","\u516D","\u5171","\u6743","\u6536","\u8BC1","\u6539","\u6E05","\u7F8E","\u518D","\u91C7","\u8F6C","\u66F4","\u5355","\u98CE","\u5207","\u6253","\u767D","\u6559","\u901F","\u82B1","\u5E26","\u5B89","\u573A","\u8EAB","\u8F66","\u4F8B","\u771F","\u52A1","\u5177","\u4E07","\u6BCF","\u76EE","\u81F3","\u8FBE","\u8D70","\u79EF","\u793A","\u8BAE","\u58F0","\u62A5","\u6597","\u5B8C","\u7C7B","\u516B","\u79BB","\u534E","\u540D","\u786E","\u624D","\u79D1","\u5F20","\u4FE1","\u9A6C","\u8282","\u8BDD","\u7C73","\u6574","\u7A7A","\u5143","\u51B5","\u4ECA","\u96C6","\u6E29","\u4F20","\u571F","\u8BB8","\u6B65","\u7FA4","\u5E7F","\u77F3","\u8BB0","\u9700","\u6BB5","\u7814","\u754C","\u62C9","\u6797","\u5F8B","\u53EB","\u4E14","\u7A76","\u89C2","\u8D8A","\u7EC7","\u88C5","\u5F71","\u7B97","\u4F4E","\u6301","\u97F3","\u4F17","\u4E66","\u5E03","\u590D","\u5BB9","\u513F","\u987B","\u9645","\u5546","\u975E","\u9A8C","\u8FDE","\u65AD","\u6DF1","\u96BE","\u8FD1","\u77FF","\u5343","\u5468","\u59D4","\u7D20","\u6280","\u5907","\u534A","\u529E","\u9752","\u7701","\u5217","\u4E60","\u54CD","\u7EA6","\u652F","\u822C","\u53F2","\u611F","\u52B3","\u4FBF","\u56E2","\u5F80","\u9178","\u5386","\u5E02","\u514B","\u4F55","\u9664","\u6D88","\u6784","\u5E9C","\u79F0","\u592A","\u51C6","\u7CBE","\u503C","\u53F7","\u7387","\u65CF","\u7EF4","\u5212","\u9009","\u6807","\u5199","\u5B58","\u5019","\u6BDB","\u4EB2","\u5FEB","\u6548","\u65AF","\u9662","\u67E5","\u6C5F","\u578B","\u773C","\u738B","\u6309","\u683C","\u517B","\u6613","\u7F6E","\u6D3E","\u5C42","\u7247","\u59CB","\u5374","\u4E13","\u72B6","\u80B2","\u5382","\u4EAC","\u8BC6","\u9002","\u5C5E","\u5706","\u5305","\u706B","\u4F4F","\u8C03","\u6EE1","\u53BF","\u5C40","\u7167","\u53C2","\u7EA2","\u7EC6","\u5F15","\u542C","\u8BE5","\u94C1","\u4EF7","\u4E25","\u9996","\u5E95","\u6DB2","\u5B98","\u5FB7","\u968F","\u75C5","\u82CF","\u5931","\u5C14","\u6B7B","\u8BB2","\u914D","\u5973","\u9EC4","\u63A8","\u663E","\u8C08","\u7F6A","\u795E","\u827A","\u5462","\u5E2D","\u542B","\u4F01","\u671B","\u5BC6","\u6279","\u8425","\u9879","\u9632","\u4E3E","\u7403","\u82F1","\u6C27","\u52BF","\u544A","\u674E","\u53F0","\u843D","\u6728","\u5E2E","\u8F6E","\u7834","\u4E9A","\u5E08","\u56F4","\u6CE8","\u8FDC","\u5B57","\u6750","\u6392","\u4F9B","\u6CB3","\u6001","\u5C01","\u53E6","\u65BD","\u51CF","\u6811","\u6EB6","\u600E","\u6B62","\u6848","\u8A00","\u58EB","\u5747","\u6B66","\u56FA","\u53F6","\u9C7C","\u6CE2","\u89C6","\u4EC5","\u8D39","\u7D27","\u7231","\u5DE6","\u7AE0","\u65E9","\u671D","\u5BB3","\u7EED","\u8F7B","\u670D","\u8BD5","\u98DF","\u5145","\u5175","\u6E90","\u5224","\u62A4","\u53F8","\u8DB3","\u67D0","\u7EC3","\u5DEE","\u81F4","\u677F","\u7530","\u964D","\u9ED1","\u72AF","\u8D1F","\u51FB","\u8303","\u7EE7","\u5174","\u4F3C","\u4F59","\u575A","\u66F2","\u8F93","\u4FEE","\u6545","\u57CE","\u592B","\u591F","\u9001","\u7B14","\u8239","\u5360","\u53F3","\u8D22","\u5403","\u5BCC","\u6625","\u804C","\u89C9","\u6C49","\u753B","\u529F","\u5DF4","\u8DDF","\u867D","\u6742","\u98DE","\u68C0","\u5438","\u52A9","\u5347","\u9633","\u4E92","\u521D","\u521B","\u6297","\u8003","\u6295","\u574F","\u7B56","\u53E4","\u5F84","\u6362","\u672A","\u8DD1","\u7559","\u94A2","\u66FE","\u7AEF","\u8D23","\u7AD9","\u7B80","\u8FF0","\u94B1","\u526F","\u5C3D","\u5E1D","\u5C04","\u8349","\u51B2","\u627F","\u72EC","\u4EE4","\u9650","\u963F","\u5BA3","\u73AF","\u53CC","\u8BF7","\u8D85","\u5FAE","\u8BA9","\u63A7","\u5DDE","\u826F","\u8F74","\u627E","\u5426","\u7EAA","\u76CA","\u4F9D","\u4F18","\u9876","\u7840","\u8F7D","\u5012","\u623F","\u7A81","\u5750","\u7C89","\u654C","\u7565","\u5BA2","\u8881","\u51B7","\u80DC","\u7EDD","\u6790","\u5757","\u5242","\u6D4B","\u4E1D","\u534F","\u8BC9","\u5FF5","\u9648","\u4ECD","\u7F57","\u76D0","\u53CB","\u6D0B","\u9519","\u82E6","\u591C","\u5211","\u79FB","\u9891","\u9010","\u9760","\u6DF7","\u6BCD","\u77ED","\u76AE","\u7EC8","\u805A","\u6C7D","\u6751","\u4E91","\u54EA","\u65E2","\u8DDD","\u536B","\u505C","\u70C8","\u592E","\u5BDF","\u70E7","\u8FC5","\u5883","\u82E5","\u5370","\u6D32","\u523B","\u62EC","\u6FC0","\u5B54","\u641E","\u751A","\u5BA4","\u5F85","\u6838","\u6821","\u6563","\u4FB5","\u5427","\u7532","\u6E38","\u4E45","\u83DC","\u5473","\u65E7","\u6A21","\u6E56","\u8D27","\u635F","\u9884","\u963B","\u6BEB","\u666E","\u7A33","\u4E59","\u5988","\u690D","\u606F","\u6269","\u94F6","\u8BED","\u6325","\u9152","\u5B88","\u62FF","\u5E8F","\u7EB8","\u533B","\u7F3A","\u96E8","\u5417","\u9488","\u5218","\u554A","\u6025","\u5531","\u8BEF","\u8BAD","\u613F","\u5BA1","\u9644","\u83B7","\u8336","\u9C9C","\u7CAE","\u65A4","\u5B69","\u8131","\u786B","\u80A5","\u5584","\u9F99","\u6F14","\u7236","\u6E10","\u8840","\u6B22","\u68B0","\u638C","\u6B4C","\u6C99","\u521A","\u653B","\u8C13","\u76FE","\u8BA8","\u665A","\u7C92","\u4E71","\u71C3","\u77DB","\u4E4E","\u6740","\u836F","\u5B81","\u9C81","\u8D35","\u949F","\u7164","\u8BFB","\u73ED","\u4F2F","\u9999","\u4ECB","\u8FEB","\u53E5","\u4E30","\u57F9","\u63E1","\u5170","\u62C5","\u5F26","\u86CB","\u6C89","\u5047","\u7A7F","\u6267","\u7B54","\u4E50","\u8C01","\u987A","\u70DF","\u7F29","\u5F81","\u8138","\u559C","\u677E","\u811A","\u56F0","\u5F02","\u514D","\u80CC","\u661F","\u798F","\u4E70","\u67D3","\u4E95","\u6982","\u6162","\u6015","\u78C1","\u500D","\u7956","\u7687","\u4FC3","\u9759","\u8865","\u8BC4","\u7FFB","\u8089","\u8DF5","\u5C3C","\u8863","\u5BBD","\u626C","\u68C9","\u5E0C","\u4F24","\u64CD","\u5782","\u79CB","\u5B9C","\u6C22","\u5957","\u7763","\u632F","\u67B6","\u4EAE","\u672B","\u5BAA","\u5E86","\u7F16","\u725B","\u89E6","\u6620","\u96F7","\u9500","\u8BD7","\u5EA7","\u5C45","\u6293","\u88C2","\u80DE","\u547C","\u5A18","\u666F","\u5A01","\u7EFF","\u6676","\u539A","\u76DF","\u8861","\u9E21","\u5B59","\u5EF6","\u5371","\u80F6","\u5C4B","\u4E61","\u4E34","\u9646","\u987E","\u6389","\u5440","\u706F","\u5C81","\u63AA","\u675F","\u8010","\u5267","\u7389","\u8D75","\u8DF3","\u54E5","\u5B63","\u8BFE","\u51EF","\u80E1","\u989D","\u6B3E","\u7ECD","\u5377","\u9F50","\u4F1F","\u84B8","\u6B96","\u6C38","\u5B97","\u82D7","\u5DDD","\u7089","\u5CA9","\u5F31","\u96F6","\u6768","\u594F","\u6CBF","\u9732","\u6746","\u63A2","\u6ED1","\u9547","\u996D","\u6D53","\u822A","\u6000","\u8D76","\u5E93","\u593A","\u4F0A","\u7075","\u7A0E","\u9014","\u706D","\u8D5B","\u5F52","\u53EC","\u9F13","\u64AD","\u76D8","\u88C1","\u9669","\u5EB7","\u552F","\u5F55","\u83CC","\u7EAF","\u501F","\u7CD6","\u76D6","\u6A2A","\u7B26","\u79C1","\u52AA","\u5802","\u57DF","\u67AA","\u6DA6","\u5E45","\u54C8","\u7ADF","\u719F","\u866B","\u6CFD","\u8111","\u58E4","\u78B3","\u6B27","\u904D","\u4FA7","\u5BE8","\u6562","\u5F7B","\u8651","\u659C","\u8584","\u5EAD","\u7EB3","\u5F39","\u9972","\u4F38","\u6298","\u9EA6","\u6E7F","\u6697","\u8377","\u74E6","\u585E","\u5E8A","\u7B51","\u6076","\u6237","\u8BBF","\u5854","\u5947","\u900F","\u6881","\u5200","\u65CB","\u8FF9","\u5361","\u6C2F","\u9047","\u4EFD","\u6BD2","\u6CE5","\u9000","\u6D17","\u6446","\u7070","\u5F69","\u5356","\u8017","\u590F","\u62E9","\u5FD9","\u94DC","\u732E","\u786C","\u4E88","\u7E41","\u5708","\u96EA","\u51FD","\u4EA6","\u62BD","\u7BC7","\u9635","\u9634","\u4E01","\u5C3A","\u8FFD","\u5806","\u96C4","\u8FCE","\u6CDB","\u7238","\u697C","\u907F","\u8C0B","\u5428","\u91CE","\u732A","\u65D7","\u7D2F","\u504F","\u5178","\u9986","\u7D22","\u79E6","\u8102","\u6F6E","\u7237","\u8C46","\u5FFD","\u6258","\u60CA","\u5851","\u9057","\u6108","\u6731","\u66FF","\u7EA4","\u7C97","\u503E","\u5C1A","\u75DB","\u695A","\u8C22","\u594B","\u8D2D","\u78E8","\u541B","\u6C60","\u65C1","\u788E","\u9AA8","\u76D1","\u6355","\u5F1F","\u66B4","\u5272","\u8D2F","\u6B8A","\u91CA","\u8BCD","\u4EA1","\u58C1","\u987F","\u5B9D","\u5348","\u5C18","\u95FB","\u63ED","\u70AE","\u6B8B","\u51AC","\u6865","\u5987","\u8B66","\u7EFC","\u62DB","\u5434","\u4ED8","\u6D6E","\u906D","\u5F90","\u60A8","\u6447","\u8C37","\u8D5E","\u7BB1","\u9694","\u8BA2","\u7537","\u5439","\u56ED","\u7EB7","\u5510","\u8D25","\u5B8B","\u73BB","\u5DE8","\u8015","\u5766","\u8363","\u95ED","\u6E7E","\u952E","\u51E1","\u9A7B","\u9505","\u6551","\u6069","\u5265","\u51DD","\u78B1","\u9F7F","\u622A","\u70BC","\u9EBB","\u7EBA","\u7981","\u5E9F","\u76DB","\u7248","\u7F13","\u51C0","\u775B","\u660C","\u5A5A","\u6D89","\u7B52","\u5634","\u63D2","\u5CB8","\u6717","\u5E84","\u8857","\u85CF","\u59D1","\u8D38","\u8150","\u5974","\u5566","\u60EF","\u4E58","\u4F19","\u6062","\u5300","\u7EB1","\u624E","\u8FA9","\u8033","\u5F6A","\u81E3","\u4EBF","\u7483","\u62B5","\u8109","\u79C0","\u8428","\u4FC4","\u7F51","\u821E","\u5E97","\u55B7","\u7EB5","\u5BF8","\u6C57","\u6302","\u6D2A","\u8D3A","\u95EA","\u67EC","\u7206","\u70EF","\u6D25","\u7A3B","\u5899","\u8F6F","\u52C7","\u50CF","\u6EDA","\u5398","\u8499","\u82B3","\u80AF","\u5761","\u67F1","\u8361","\u817F","\u4EEA","\u65C5","\u5C3E","\u8F67","\u51B0","\u8D21","\u767B","\u9ECE","\u524A","\u94BB","\u52D2","\u9003","\u969C","\u6C28","\u90ED","\u5CF0","\u5E01","\u6E2F","\u4F0F","\u8F68","\u4EA9","\u6BD5","\u64E6","\u83AB","\u523A","\u6D6A","\u79D8","\u63F4","\u682A","\u5065","\u552E","\u80A1","\u5C9B","\u7518","\u6CE1","\u7761","\u7AE5","\u94F8","\u6C64","\u9600","\u4F11","\u6C47","\u820D","\u7267","\u7ED5","\u70B8","\u54F2","\u78F7","\u7EE9","\u670B","\u6DE1","\u5C16","\u542F","\u9677","\u67F4","\u5448","\u5F92","\u989C","\u6CEA","\u7A0D","\u5FD8","\u6CF5","\u84DD","\u62D6","\u6D1E","\u6388","\u955C","\u8F9B","\u58EE","\u950B","\u8D2B","\u865A","\u5F2F","\u6469","\u6CF0","\u5E7C","\u5EF7","\u5C0A","\u7A97","\u7EB2","\u5F04","\u96B6","\u7591","\u6C0F","\u5BAB","\u59D0","\u9707","\u745E","\u602A","\u5C24","\u7434","\u5FAA","\u63CF","\u819C","\u8FDD","\u5939","\u8170","\u7F18","\u73E0","\u7A77","\u68EE","\u679D","\u7AF9","\u6C9F","\u50AC","\u7EF3","\u5FC6","\u90A6","\u5269","\u5E78","\u6D46","\u680F","\u62E5","\u7259","\u8D2E","\u793C","\u6EE4","\u94A0","\u7EB9","\u7F62","\u62CD","\u54B1","\u558A","\u8896","\u57C3","\u52E4","\u7F5A","\u7126","\u6F5C","\u4F0D","\u58A8","\u6B32","\u7F1D","\u59D3","\u520A","\u9971","\u4EFF","\u5956","\u94DD","\u9B3C","\u4E3D","\u8DE8","\u9ED8","\u6316","\u94FE","\u626B","\u559D","\u888B","\u70AD","\u6C61","\u5E55","\u8BF8","\u5F27","\u52B1","\u6885","\u5976","\u6D01","\u707E","\u821F","\u9274","\u82EF","\u8BBC","\u62B1","\u6BC1","\u61C2","\u5BD2","\u667A","\u57D4","\u5BC4","\u5C4A","\u8DC3","\u6E21","\u6311","\u4E39","\u8270","\u8D1D","\u78B0","\u62D4","\u7239","\u6234","\u7801","\u68A6","\u82BD","\u7194","\u8D64","\u6E14","\u54ED","\u656C","\u9897","\u5954","\u94C5","\u4EF2","\u864E","\u7A00","\u59B9","\u4E4F","\u73CD","\u7533","\u684C","\u9075","\u5141","\u9686","\u87BA","\u4ED3","\u9B4F","\u9510","\u6653","\u6C2E","\u517C","\u9690","\u788D","\u8D6B","\u62E8","\u5FE0","\u8083","\u7F38","\u7275","\u62A2","\u535A","\u5DE7","\u58F3","\u5144","\u675C","\u8BAF","\u8BDA","\u78A7","\u7965","\u67EF","\u9875","\u5DE1","\u77E9","\u60B2","\u704C","\u9F84","\u4F26","\u7968","\u5BFB","\u6842","\u94FA","\u5723","\u6050","\u6070","\u90D1","\u8DA3","\u62AC","\u8352","\u817E","\u8D34","\u67D4","\u6EF4","\u731B","\u9614","\u8F86","\u59BB","\u586B","\u64A4","\u50A8","\u7B7E","\u95F9","\u6270","\u7D2B","\u7802","\u9012","\u620F","\u540A","\u9676","\u4F10","\u5582","\u7597","\u74F6","\u5A46","\u629A","\u81C2","\u6478","\u5FCD","\u867E","\u8721","\u90BB","\u80F8","\u5DE9","\u6324","\u5076","\u5F03","\u69FD","\u52B2","\u4E73","\u9093","\u5409","\u4EC1","\u70C2","\u7816","\u79DF","\u4E4C","\u8230","\u4F34","\u74DC","\u6D45","\u4E19","\u6682","\u71E5","\u6A61","\u67F3","\u8FF7","\u6696","\u724C","\u79E7","\u80C6","\u8BE6","\u7C27","\u8E0F","\u74F7","\u8C31","\u5446","\u5BBE","\u7CCA","\u6D1B","\u8F89","\u6124","\u7ADE","\u9699","\u6012","\u7C98","\u4E43","\u7EEA","\u80A9","\u7C4D","\u654F","\u6D82","\u7199","\u7686","\u4FA6","\u60AC","\u6398","\u4EAB","\u7EA0","\u9192","\u72C2","\u9501","\u6DC0","\u6068","\u7272","\u9738","\u722C","\u8D4F","\u9006","\u73A9","\u9675","\u795D","\u79D2","\u6D59","\u8C8C","\u5F79","\u5F7C","\u6089","\u9E2D","\u8D8B","\u51E4","\u6668","\u755C","\u8F88","\u79E9","\u5375","\u7F72","\u68AF","\u708E","\u6EE9","\u68CB","\u9A71","\u7B5B","\u5CE1","\u5192","\u5565","\u5BFF","\u8BD1","\u6D78","\u6CC9","\u5E3D","\u8FDF","\u7845","\u7586","\u8D37","\u6F0F","\u7A3F","\u51A0","\u5AE9","\u80C1","\u82AF","\u7262","\u53DB","\u8680","\u5965","\u9E23","\u5CAD","\u7F8A","\u51ED","\u4E32","\u5858","\u7ED8","\u9175","\u878D","\u76C6","\u9521","\u5E99","\u7B79","\u51BB","\u8F85","\u6444","\u88AD","\u7B4B","\u62D2","\u50DA","\u65F1","\u94BE","\u9E1F","\u6F06","\u6C88","\u7709","\u758F","\u6DFB","\u68D2","\u7A57","\u785D","\u97E9","\u903C","\u626D","\u4FA8","\u51C9","\u633A","\u7897","\u683D","\u7092","\u676F","\u60A3","\u998F","\u529D","\u8C6A","\u8FBD","\u52C3","\u9E3F","\u65E6","\u540F","\u62DC","\u72D7","\u57CB","\u8F8A","\u63A9","\u996E","\u642C","\u9A82","\u8F9E","\u52FE","\u6263","\u4F30","\u848B","\u7ED2","\u96FE","\u4E08","\u6735","\u59C6","\u62DF","\u5B87","\u8F91","\u9655","\u96D5","\u507F","\u84C4","\u5D07","\u526A","\u5021","\u5385","\u54AC","\u9A76","\u85AF","\u5237","\u65A5","\u756A","\u8D4B","\u5949","\u4F5B","\u6D47","\u6F2B","\u66FC","\u6247","\u9499","\u6843","\u6276","\u4ED4","\u8FD4","\u4FD7","\u4E8F","\u8154","\u978B","\u68F1","\u8986","\u6846","\u6084","\u53D4","\u649E","\u9A97","\u52D8","\u65FA","\u6CB8","\u5B64","\u5410","\u5B5F","\u6E20","\u5C48","\u75BE","\u5999","\u60DC","\u4EF0","\u72E0","\u80C0","\u8C10","\u629B","\u9709","\u6851","\u5C97","\u561B","\u8870","\u76D7","\u6E17","\u810F","\u8D56","\u6D8C","\u751C","\u66F9","\u9605","\u808C","\u54E9","\u5389","\u70C3","\u7EAC","\u6BC5","\u6628","\u4F2A","\u75C7","\u716E","\u53F9","\u9489","\u642D","\u830E","\u7B3C","\u9177","\u5077","\u5F13","\u9525","\u6052","\u6770","\u5751","\u9F3B","\u7FFC","\u7EB6","\u53D9","\u72F1","\u902E","\u7F50","\u7EDC","\u68DA","\u6291","\u81A8","\u852C","\u5BFA","\u9AA4","\u7A46","\u51B6","\u67AF","\u518C","\u5C38","\u51F8","\u7EC5","\u576F","\u727A","\u7130","\u8F70","\u6B23","\u664B","\u7626","\u5FA1","\u952D","\u9526","\u4E27","\u65EC","\u953B","\u5784","\u641C","\u6251","\u9080","\u4EAD","\u916F","\u8FC8","\u8212","\u8106","\u9176","\u95F2","\u5FE7","\u915A","\u987D","\u7FBD","\u6DA8","\u5378","\u4ED7","\u966A","\u8F9F","\u60E9","\u676D","\u59DA","\u809A","\u6349","\u98D8","\u6F02","\u6606","\u6B3A","\u543E","\u90CE","\u70F7","\u6C41","\u5475","\u9970","\u8427","\u96C5","\u90AE","\u8FC1","\u71D5","\u6492","\u59FB","\u8D74","\u5BB4","\u70E6","\u503A","\u5E10","\u6591","\u94C3","\u65E8","\u9187","\u8463","\u997C","\u96CF","\u59FF","\u62CC","\u5085","\u8179","\u59A5","\u63C9","\u8D24","\u62C6","\u6B6A","\u8461","\u80FA","\u4E22","\u6D69","\u5FBD","\u6602","\u57AB","\u6321","\u89C8","\u8D2A","\u6170","\u7F34","\u6C6A","\u614C","\u51AF","\u8BFA","\u59DC","\u8C0A","\u51F6","\u52A3","\u8BEC","\u8000","\u660F","\u8EBA","\u76C8","\u9A91","\u4E54","\u6EAA","\u4E1B","\u5362","\u62B9","\u95F7","\u54A8","\u522E","\u9A7E","\u7F06","\u609F","\u6458","\u94D2","\u63B7","\u9887","\u5E7B","\u67C4","\u60E0","\u60E8","\u4F73","\u4EC7","\u814A","\u7A9D","\u6DA4","\u5251","\u77A7","\u5821","\u6CFC","\u8471","\u7F69","\u970D","\u635E","\u80CE","\u82CD","\u6EE8","\u4FE9","\u6345","\u6E58","\u780D","\u971E","\u90B5","\u8404","\u75AF","\u6DEE","\u9042","\u718A","\u7CAA","\u70D8","\u5BBF","\u6863","\u6208","\u9A73","\u5AC2","\u88D5","\u5F99","\u7BAD","\u6350","\u80A0","\u6491","\u6652","\u8FA8","\u6BBF","\u83B2","\u644A","\u6405","\u9171","\u5C4F","\u75AB","\u54C0","\u8521","\u5835","\u6CAB","\u76B1","\u7545","\u53E0","\u9601","\u83B1","\u6572","\u8F96","\u94A9","\u75D5","\u575D","\u5DF7","\u997F","\u7978","\u4E18","\u7384","\u6E9C","\u66F0","\u903B","\u5F6D","\u5C1D","\u537F","\u59A8","\u8247","\u541E","\u97E6","\u6028","\u77EE","\u6B47"]'), As = JSON.parse('["\u7684","\u4E00","\u662F","\u5728","\u4E0D","\u4E86","\u6709","\u548C","\u4EBA","\u9019","\u4E2D","\u5927","\u70BA","\u4E0A","\u500B","\u570B","\u6211","\u4EE5","\u8981","\u4ED6","\u6642","\u4F86","\u7528","\u5011","\u751F","\u5230","\u4F5C","\u5730","\u65BC","\u51FA","\u5C31","\u5206","\u5C0D","\u6210","\u6703","\u53EF","\u4E3B","\u767C","\u5E74","\u52D5","\u540C","\u5DE5","\u4E5F","\u80FD","\u4E0B","\u904E","\u5B50","\u8AAA","\u7522","\u7A2E","\u9762","\u800C","\u65B9","\u5F8C","\u591A","\u5B9A","\u884C","\u5B78","\u6CD5","\u6240","\u6C11","\u5F97","\u7D93","\u5341","\u4E09","\u4E4B","\u9032","\u8457","\u7B49","\u90E8","\u5EA6","\u5BB6","\u96FB","\u529B","\u88E1","\u5982","\u6C34","\u5316","\u9AD8","\u81EA","\u4E8C","\u7406","\u8D77","\u5C0F","\u7269","\u73FE","\u5BE6","\u52A0","\u91CF","\u90FD","\u5169","\u9AD4","\u5236","\u6A5F","\u7576","\u4F7F","\u9EDE","\u5F9E","\u696D","\u672C","\u53BB","\u628A","\u6027","\u597D","\u61C9","\u958B","\u5B83","\u5408","\u9084","\u56E0","\u7531","\u5176","\u4E9B","\u7136","\u524D","\u5916","\u5929","\u653F","\u56DB","\u65E5","\u90A3","\u793E","\u7FA9","\u4E8B","\u5E73","\u5F62","\u76F8","\u5168","\u8868","\u9593","\u6A23","\u8207","\u95DC","\u5404","\u91CD","\u65B0","\u7DDA","\u5167","\u6578","\u6B63","\u5FC3","\u53CD","\u4F60","\u660E","\u770B","\u539F","\u53C8","\u9EBC","\u5229","\u6BD4","\u6216","\u4F46","\u8CEA","\u6C23","\u7B2C","\u5411","\u9053","\u547D","\u6B64","\u8B8A","\u689D","\u53EA","\u6C92","\u7D50","\u89E3","\u554F","\u610F","\u5EFA","\u6708","\u516C","\u7121","\u7CFB","\u8ECD","\u5F88","\u60C5","\u8005","\u6700","\u7ACB","\u4EE3","\u60F3","\u5DF2","\u901A","\u4E26","\u63D0","\u76F4","\u984C","\u9EE8","\u7A0B","\u5C55","\u4E94","\u679C","\u6599","\u8C61","\u54E1","\u9769","\u4F4D","\u5165","\u5E38","\u6587","\u7E3D","\u6B21","\u54C1","\u5F0F","\u6D3B","\u8A2D","\u53CA","\u7BA1","\u7279","\u4EF6","\u9577","\u6C42","\u8001","\u982D","\u57FA","\u8CC7","\u908A","\u6D41","\u8DEF","\u7D1A","\u5C11","\u5716","\u5C71","\u7D71","\u63A5","\u77E5","\u8F03","\u5C07","\u7D44","\u898B","\u8A08","\u5225","\u5979","\u624B","\u89D2","\u671F","\u6839","\u8AD6","\u904B","\u8FB2","\u6307","\u5E7E","\u4E5D","\u5340","\u5F37","\u653E","\u6C7A","\u897F","\u88AB","\u5E79","\u505A","\u5FC5","\u6230","\u5148","\u56DE","\u5247","\u4EFB","\u53D6","\u64DA","\u8655","\u968A","\u5357","\u7D66","\u8272","\u5149","\u9580","\u5373","\u4FDD","\u6CBB","\u5317","\u9020","\u767E","\u898F","\u71B1","\u9818","\u4E03","\u6D77","\u53E3","\u6771","\u5C0E","\u5668","\u58D3","\u5FD7","\u4E16","\u91D1","\u589E","\u722D","\u6FDF","\u968E","\u6CB9","\u601D","\u8853","\u6975","\u4EA4","\u53D7","\u806F","\u4EC0","\u8A8D","\u516D","\u5171","\u6B0A","\u6536","\u8B49","\u6539","\u6E05","\u7F8E","\u518D","\u63A1","\u8F49","\u66F4","\u55AE","\u98A8","\u5207","\u6253","\u767D","\u6559","\u901F","\u82B1","\u5E36","\u5B89","\u5834","\u8EAB","\u8ECA","\u4F8B","\u771F","\u52D9","\u5177","\u842C","\u6BCF","\u76EE","\u81F3","\u9054","\u8D70","\u7A4D","\u793A","\u8B70","\u8072","\u5831","\u9B25","\u5B8C","\u985E","\u516B","\u96E2","\u83EF","\u540D","\u78BA","\u624D","\u79D1","\u5F35","\u4FE1","\u99AC","\u7BC0","\u8A71","\u7C73","\u6574","\u7A7A","\u5143","\u6CC1","\u4ECA","\u96C6","\u6EAB","\u50B3","\u571F","\u8A31","\u6B65","\u7FA4","\u5EE3","\u77F3","\u8A18","\u9700","\u6BB5","\u7814","\u754C","\u62C9","\u6797","\u5F8B","\u53EB","\u4E14","\u7A76","\u89C0","\u8D8A","\u7E54","\u88DD","\u5F71","\u7B97","\u4F4E","\u6301","\u97F3","\u773E","\u66F8","\u5E03","\u590D","\u5BB9","\u5152","\u9808","\u969B","\u5546","\u975E","\u9A57","\u9023","\u65B7","\u6DF1","\u96E3","\u8FD1","\u7926","\u5343","\u9031","\u59D4","\u7D20","\u6280","\u5099","\u534A","\u8FA6","\u9752","\u7701","\u5217","\u7FD2","\u97FF","\u7D04","\u652F","\u822C","\u53F2","\u611F","\u52DE","\u4FBF","\u5718","\u5F80","\u9178","\u6B77","\u5E02","\u514B","\u4F55","\u9664","\u6D88","\u69CB","\u5E9C","\u7A31","\u592A","\u6E96","\u7CBE","\u503C","\u865F","\u7387","\u65CF","\u7DAD","\u5283","\u9078","\u6A19","\u5BEB","\u5B58","\u5019","\u6BDB","\u89AA","\u5FEB","\u6548","\u65AF","\u9662","\u67E5","\u6C5F","\u578B","\u773C","\u738B","\u6309","\u683C","\u990A","\u6613","\u7F6E","\u6D3E","\u5C64","\u7247","\u59CB","\u537B","\u5C08","\u72C0","\u80B2","\u5EE0","\u4EAC","\u8B58","\u9069","\u5C6C","\u5713","\u5305","\u706B","\u4F4F","\u8ABF","\u6EFF","\u7E23","\u5C40","\u7167","\u53C3","\u7D05","\u7D30","\u5F15","\u807D","\u8A72","\u9435","\u50F9","\u56B4","\u9996","\u5E95","\u6DB2","\u5B98","\u5FB7","\u96A8","\u75C5","\u8607","\u5931","\u723E","\u6B7B","\u8B1B","\u914D","\u5973","\u9EC3","\u63A8","\u986F","\u8AC7","\u7F6A","\u795E","\u85DD","\u5462","\u5E2D","\u542B","\u4F01","\u671B","\u5BC6","\u6279","\u71DF","\u9805","\u9632","\u8209","\u7403","\u82F1","\u6C27","\u52E2","\u544A","\u674E","\u53F0","\u843D","\u6728","\u5E6B","\u8F2A","\u7834","\u4E9E","\u5E2B","\u570D","\u6CE8","\u9060","\u5B57","\u6750","\u6392","\u4F9B","\u6CB3","\u614B","\u5C01","\u53E6","\u65BD","\u6E1B","\u6A39","\u6EB6","\u600E","\u6B62","\u6848","\u8A00","\u58EB","\u5747","\u6B66","\u56FA","\u8449","\u9B5A","\u6CE2","\u8996","\u50C5","\u8CBB","\u7DCA","\u611B","\u5DE6","\u7AE0","\u65E9","\u671D","\u5BB3","\u7E8C","\u8F15","\u670D","\u8A66","\u98DF","\u5145","\u5175","\u6E90","\u5224","\u8B77","\u53F8","\u8DB3","\u67D0","\u7DF4","\u5DEE","\u81F4","\u677F","\u7530","\u964D","\u9ED1","\u72AF","\u8CA0","\u64CA","\u8303","\u7E7C","\u8208","\u4F3C","\u9918","\u5805","\u66F2","\u8F38","\u4FEE","\u6545","\u57CE","\u592B","\u5920","\u9001","\u7B46","\u8239","\u4F54","\u53F3","\u8CA1","\u5403","\u5BCC","\u6625","\u8077","\u89BA","\u6F22","\u756B","\u529F","\u5DF4","\u8DDF","\u96D6","\u96DC","\u98DB","\u6AA2","\u5438","\u52A9","\u6607","\u967D","\u4E92","\u521D","\u5275","\u6297","\u8003","\u6295","\u58DE","\u7B56","\u53E4","\u5F91","\u63DB","\u672A","\u8DD1","\u7559","\u92FC","\u66FE","\u7AEF","\u8CAC","\u7AD9","\u7C21","\u8FF0","\u9322","\u526F","\u76E1","\u5E1D","\u5C04","\u8349","\u885D","\u627F","\u7368","\u4EE4","\u9650","\u963F","\u5BA3","\u74B0","\u96D9","\u8ACB","\u8D85","\u5FAE","\u8B93","\u63A7","\u5DDE","\u826F","\u8EF8","\u627E","\u5426","\u7D00","\u76CA","\u4F9D","\u512A","\u9802","\u790E","\u8F09","\u5012","\u623F","\u7A81","\u5750","\u7C89","\u6575","\u7565","\u5BA2","\u8881","\u51B7","\u52DD","\u7D55","\u6790","\u584A","\u5291","\u6E2C","\u7D72","\u5354","\u8A34","\u5FF5","\u9673","\u4ECD","\u7F85","\u9E7D","\u53CB","\u6D0B","\u932F","\u82E6","\u591C","\u5211","\u79FB","\u983B","\u9010","\u9760","\u6DF7","\u6BCD","\u77ED","\u76AE","\u7D42","\u805A","\u6C7D","\u6751","\u96F2","\u54EA","\u65E2","\u8DDD","\u885B","\u505C","\u70C8","\u592E","\u5BDF","\u71D2","\u8FC5","\u5883","\u82E5","\u5370","\u6D32","\u523B","\u62EC","\u6FC0","\u5B54","\u641E","\u751A","\u5BA4","\u5F85","\u6838","\u6821","\u6563","\u4FB5","\u5427","\u7532","\u904A","\u4E45","\u83DC","\u5473","\u820A","\u6A21","\u6E56","\u8CA8","\u640D","\u9810","\u963B","\u6BEB","\u666E","\u7A69","\u4E59","\u5ABD","\u690D","\u606F","\u64F4","\u9280","\u8A9E","\u63EE","\u9152","\u5B88","\u62FF","\u5E8F","\u7D19","\u91AB","\u7F3A","\u96E8","\u55CE","\u91DD","\u5289","\u554A","\u6025","\u5531","\u8AA4","\u8A13","\u9858","\u5BE9","\u9644","\u7372","\u8336","\u9BAE","\u7CE7","\u65A4","\u5B69","\u812B","\u786B","\u80A5","\u5584","\u9F8D","\u6F14","\u7236","\u6F38","\u8840","\u6B61","\u68B0","\u638C","\u6B4C","\u6C99","\u525B","\u653B","\u8B02","\u76FE","\u8A0E","\u665A","\u7C92","\u4E82","\u71C3","\u77DB","\u4E4E","\u6BBA","\u85E5","\u5BE7","\u9B6F","\u8CB4","\u9418","\u7164","\u8B80","\u73ED","\u4F2F","\u9999","\u4ECB","\u8FEB","\u53E5","\u8C50","\u57F9","\u63E1","\u862D","\u64D4","\u5F26","\u86CB","\u6C89","\u5047","\u7A7F","\u57F7","\u7B54","\u6A02","\u8AB0","\u9806","\u7159","\u7E2E","\u5FB5","\u81C9","\u559C","\u677E","\u8173","\u56F0","\u7570","\u514D","\u80CC","\u661F","\u798F","\u8CB7","\u67D3","\u4E95","\u6982","\u6162","\u6015","\u78C1","\u500D","\u7956","\u7687","\u4FC3","\u975C","\u88DC","\u8A55","\u7FFB","\u8089","\u8E10","\u5C3C","\u8863","\u5BEC","\u63DA","\u68C9","\u5E0C","\u50B7","\u64CD","\u5782","\u79CB","\u5B9C","\u6C2B","\u5957","\u7763","\u632F","\u67B6","\u4EAE","\u672B","\u61B2","\u6176","\u7DE8","\u725B","\u89F8","\u6620","\u96F7","\u92B7","\u8A69","\u5EA7","\u5C45","\u6293","\u88C2","\u80DE","\u547C","\u5A18","\u666F","\u5A01","\u7DA0","\u6676","\u539A","\u76DF","\u8861","\u96DE","\u5B6B","\u5EF6","\u5371","\u81A0","\u5C4B","\u9109","\u81E8","\u9678","\u9867","\u6389","\u5440","\u71C8","\u6B72","\u63AA","\u675F","\u8010","\u5287","\u7389","\u8D99","\u8DF3","\u54E5","\u5B63","\u8AB2","\u51F1","\u80E1","\u984D","\u6B3E","\u7D39","\u5377","\u9F4A","\u5049","\u84B8","\u6B96","\u6C38","\u5B97","\u82D7","\u5DDD","\u7210","\u5CA9","\u5F31","\u96F6","\u694A","\u594F","\u6CBF","\u9732","\u687F","\u63A2","\u6ED1","\u93AE","\u98EF","\u6FC3","\u822A","\u61F7","\u8D95","\u5EAB","\u596A","\u4F0A","\u9748","\u7A05","\u9014","\u6EC5","\u8CFD","\u6B78","\u53EC","\u9F13","\u64AD","\u76E4","\u88C1","\u96AA","\u5EB7","\u552F","\u9304","\u83CC","\u7D14","\u501F","\u7CD6","\u84CB","\u6A6B","\u7B26","\u79C1","\u52AA","\u5802","\u57DF","\u69CD","\u6F64","\u5E45","\u54C8","\u7ADF","\u719F","\u87F2","\u6FA4","\u8166","\u58E4","\u78B3","\u6B50","\u904D","\u5074","\u5BE8","\u6562","\u5FB9","\u616E","\u659C","\u8584","\u5EAD","\u7D0D","\u5F48","\u98FC","\u4F38","\u6298","\u9EA5","\u6FD5","\u6697","\u8377","\u74E6","\u585E","\u5E8A","\u7BC9","\u60E1","\u6236","\u8A2A","\u5854","\u5947","\u900F","\u6881","\u5200","\u65CB","\u8DE1","\u5361","\u6C2F","\u9047","\u4EFD","\u6BD2","\u6CE5","\u9000","\u6D17","\u64FA","\u7070","\u5F69","\u8CE3","\u8017","\u590F","\u64C7","\u5FD9","\u9285","\u737B","\u786C","\u4E88","\u7E41","\u5708","\u96EA","\u51FD","\u4EA6","\u62BD","\u7BC7","\u9663","\u9670","\u4E01","\u5C3A","\u8FFD","\u5806","\u96C4","\u8FCE","\u6CDB","\u7238","\u6A13","\u907F","\u8B00","\u5678","\u91CE","\u8C6C","\u65D7","\u7D2F","\u504F","\u5178","\u9928","\u7D22","\u79E6","\u8102","\u6F6E","\u723A","\u8C46","\u5FFD","\u6258","\u9A5A","\u5851","\u907A","\u6108","\u6731","\u66FF","\u7E96","\u7C97","\u50BE","\u5C1A","\u75DB","\u695A","\u8B1D","\u596E","\u8CFC","\u78E8","\u541B","\u6C60","\u65C1","\u788E","\u9AA8","\u76E3","\u6355","\u5F1F","\u66B4","\u5272","\u8CAB","\u6B8A","\u91CB","\u8A5E","\u4EA1","\u58C1","\u9813","\u5BF6","\u5348","\u5875","\u805E","\u63ED","\u70AE","\u6B98","\u51AC","\u6A4B","\u5A66","\u8B66","\u7D9C","\u62DB","\u5433","\u4ED8","\u6D6E","\u906D","\u5F90","\u60A8","\u6416","\u8C37","\u8D0A","\u7BB1","\u9694","\u8A02","\u7537","\u5439","\u5712","\u7D1B","\u5510","\u6557","\u5B8B","\u73BB","\u5DE8","\u8015","\u5766","\u69AE","\u9589","\u7063","\u9375","\u51E1","\u99D0","\u934B","\u6551","\u6069","\u525D","\u51DD","\u9E7C","\u9F52","\u622A","\u7149","\u9EBB","\u7D21","\u7981","\u5EE2","\u76DB","\u7248","\u7DE9","\u6DE8","\u775B","\u660C","\u5A5A","\u6D89","\u7B52","\u5634","\u63D2","\u5CB8","\u6717","\u838A","\u8857","\u85CF","\u59D1","\u8CBF","\u8150","\u5974","\u5566","\u6163","\u4E58","\u5925","\u6062","\u52FB","\u7D17","\u624E","\u8FAF","\u8033","\u5F6A","\u81E3","\u5104","\u7483","\u62B5","\u8108","\u79C0","\u85A9","\u4FC4","\u7DB2","\u821E","\u5E97","\u5674","\u7E31","\u5BF8","\u6C57","\u639B","\u6D2A","\u8CC0","\u9583","\u67EC","\u7206","\u70EF","\u6D25","\u7A3B","\u7246","\u8EDF","\u52C7","\u50CF","\u6EFE","\u5398","\u8499","\u82B3","\u80AF","\u5761","\u67F1","\u76EA","\u817F","\u5100","\u65C5","\u5C3E","\u8ECB","\u51B0","\u8CA2","\u767B","\u9ECE","\u524A","\u947D","\u52D2","\u9003","\u969C","\u6C28","\u90ED","\u5CF0","\u5E63","\u6E2F","\u4F0F","\u8ECC","\u755D","\u7562","\u64E6","\u83AB","\u523A","\u6D6A","\u79D8","\u63F4","\u682A","\u5065","\u552E","\u80A1","\u5CF6","\u7518","\u6CE1","\u7761","\u7AE5","\u9444","\u6E6F","\u95A5","\u4F11","\u532F","\u820D","\u7267","\u7E5E","\u70B8","\u54F2","\u78F7","\u7E3E","\u670B","\u6DE1","\u5C16","\u555F","\u9677","\u67F4","\u5448","\u5F92","\u984F","\u6DDA","\u7A0D","\u5FD8","\u6CF5","\u85CD","\u62D6","\u6D1E","\u6388","\u93E1","\u8F9B","\u58EF","\u92D2","\u8CA7","\u865B","\u5F4E","\u6469","\u6CF0","\u5E7C","\u5EF7","\u5C0A","\u7A97","\u7DB1","\u5F04","\u96B8","\u7591","\u6C0F","\u5BAE","\u59D0","\u9707","\u745E","\u602A","\u5C24","\u7434","\u5FAA","\u63CF","\u819C","\u9055","\u593E","\u8170","\u7DE3","\u73E0","\u7AAE","\u68EE","\u679D","\u7AF9","\u6E9D","\u50AC","\u7E69","\u61B6","\u90A6","\u5269","\u5E78","\u6F3F","\u6B04","\u64C1","\u7259","\u8CAF","\u79AE","\u6FFE","\u9209","\u7D0B","\u7F77","\u62CD","\u54B1","\u558A","\u8896","\u57C3","\u52E4","\u7F70","\u7126","\u6F5B","\u4F0D","\u58A8","\u6B32","\u7E2B","\u59D3","\u520A","\u98FD","\u4EFF","\u734E","\u92C1","\u9B3C","\u9E97","\u8DE8","\u9ED8","\u6316","\u93C8","\u6383","\u559D","\u888B","\u70AD","\u6C61","\u5E55","\u8AF8","\u5F27","\u52F5","\u6885","\u5976","\u6F54","\u707D","\u821F","\u9451","\u82EF","\u8A1F","\u62B1","\u6BC0","\u61C2","\u5BD2","\u667A","\u57D4","\u5BC4","\u5C46","\u8E8D","\u6E21","\u6311","\u4E39","\u8271","\u8C9D","\u78B0","\u62D4","\u7239","\u6234","\u78BC","\u5922","\u82BD","\u7194","\u8D64","\u6F01","\u54ED","\u656C","\u9846","\u5954","\u925B","\u4EF2","\u864E","\u7A00","\u59B9","\u4E4F","\u73CD","\u7533","\u684C","\u9075","\u5141","\u9686","\u87BA","\u5009","\u9B4F","\u92B3","\u66C9","\u6C2E","\u517C","\u96B1","\u7919","\u8D6B","\u64A5","\u5FE0","\u8085","\u7F38","\u727D","\u6436","\u535A","\u5DE7","\u6BBC","\u5144","\u675C","\u8A0A","\u8AA0","\u78A7","\u7965","\u67EF","\u9801","\u5DE1","\u77E9","\u60B2","\u704C","\u9F61","\u502B","\u7968","\u5C0B","\u6842","\u92EA","\u8056","\u6050","\u6070","\u912D","\u8DA3","\u62AC","\u8352","\u9A30","\u8CBC","\u67D4","\u6EF4","\u731B","\u95CA","\u8F1B","\u59BB","\u586B","\u64A4","\u5132","\u7C3D","\u9B27","\u64FE","\u7D2B","\u7802","\u905E","\u6232","\u540A","\u9676","\u4F10","\u9935","\u7642","\u74F6","\u5A46","\u64AB","\u81C2","\u6478","\u5FCD","\u8766","\u881F","\u9130","\u80F8","\u978F","\u64E0","\u5076","\u68C4","\u69FD","\u52C1","\u4E73","\u9127","\u5409","\u4EC1","\u721B","\u78DA","\u79DF","\u70CF","\u8266","\u4F34","\u74DC","\u6DFA","\u4E19","\u66AB","\u71E5","\u6A61","\u67F3","\u8FF7","\u6696","\u724C","\u79E7","\u81BD","\u8A73","\u7C27","\u8E0F","\u74F7","\u8B5C","\u5446","\u8CD3","\u7CCA","\u6D1B","\u8F1D","\u61A4","\u7AF6","\u9699","\u6012","\u7C98","\u4E43","\u7DD2","\u80A9","\u7C4D","\u654F","\u5857","\u7199","\u7686","\u5075","\u61F8","\u6398","\u4EAB","\u7CFE","\u9192","\u72C2","\u9396","\u6DC0","\u6068","\u7272","\u9738","\u722C","\u8CDE","\u9006","\u73A9","\u9675","\u795D","\u79D2","\u6D59","\u8C8C","\u5F79","\u5F7C","\u6089","\u9D28","\u8DA8","\u9CF3","\u6668","\u755C","\u8F29","\u79E9","\u5375","\u7F72","\u68AF","\u708E","\u7058","\u68CB","\u9A45","\u7BE9","\u5CFD","\u5192","\u5565","\u58FD","\u8B6F","\u6D78","\u6CC9","\u5E3D","\u9072","\u77FD","\u7586","\u8CB8","\u6F0F","\u7A3F","\u51A0","\u5AE9","\u8105","\u82AF","\u7262","\u53DB","\u8755","\u5967","\u9CF4","\u5DBA","\u7F8A","\u6191","\u4E32","\u5858","\u7E6A","\u9175","\u878D","\u76C6","\u932B","\u5EDF","\u7C4C","\u51CD","\u8F14","\u651D","\u8972","\u7B4B","\u62D2","\u50DA","\u65F1","\u9240","\u9CE5","\u6F06","\u6C88","\u7709","\u758F","\u6DFB","\u68D2","\u7A57","\u785D","\u97D3","\u903C","\u626D","\u50D1","\u6DBC","\u633A","\u7897","\u683D","\u7092","\u676F","\u60A3","\u993E","\u52F8","\u8C6A","\u907C","\u52C3","\u9D3B","\u65E6","\u540F","\u62DC","\u72D7","\u57CB","\u8F25","\u63A9","\u98F2","\u642C","\u7F75","\u8FAD","\u52FE","\u6263","\u4F30","\u8523","\u7D68","\u9727","\u4E08","\u6735","\u59C6","\u64EC","\u5B87","\u8F2F","\u965D","\u96D5","\u511F","\u84C4","\u5D07","\u526A","\u5021","\u5EF3","\u54AC","\u99DB","\u85AF","\u5237","\u65A5","\u756A","\u8CE6","\u5949","\u4F5B","\u6F86","\u6F2B","\u66FC","\u6247","\u9223","\u6843","\u6276","\u4ED4","\u8FD4","\u4FD7","\u8667","\u8154","\u978B","\u68F1","\u8986","\u6846","\u6084","\u53D4","\u649E","\u9A19","\u52D8","\u65FA","\u6CB8","\u5B64","\u5410","\u5B5F","\u6E20","\u5C48","\u75BE","\u5999","\u60DC","\u4EF0","\u72E0","\u8139","\u8AE7","\u62CB","\u9EF4","\u6851","\u5D17","\u561B","\u8870","\u76DC","\u6EF2","\u81DF","\u8CF4","\u6E67","\u751C","\u66F9","\u95B1","\u808C","\u54E9","\u53B2","\u70F4","\u7DEF","\u6BC5","\u6628","\u507D","\u75C7","\u716E","\u5606","\u91D8","\u642D","\u8396","\u7C60","\u9177","\u5077","\u5F13","\u9310","\u6046","\u5091","\u5751","\u9F3B","\u7FFC","\u7DB8","\u6558","\u7344","\u902E","\u7F50","\u7D61","\u68DA","\u6291","\u81A8","\u852C","\u5BFA","\u9A5F","\u7A46","\u51B6","\u67AF","\u518A","\u5C4D","\u51F8","\u7D33","\u576F","\u72A7","\u7130","\u8F5F","\u6B23","\u6649","\u7626","\u79A6","\u9320","\u9326","\u55AA","\u65EC","\u935B","\u58DF","\u641C","\u64B2","\u9080","\u4EAD","\u916F","\u9081","\u8212","\u8106","\u9176","\u9592","\u6182","\u915A","\u9811","\u7FBD","\u6F32","\u5378","\u4ED7","\u966A","\u95E2","\u61F2","\u676D","\u59DA","\u809A","\u6349","\u98C4","\u6F02","\u6606","\u6B3A","\u543E","\u90CE","\u70F7","\u6C41","\u5475","\u98FE","\u856D","\u96C5","\u90F5","\u9077","\u71D5","\u6492","\u59FB","\u8D74","\u5BB4","\u7169","\u50B5","\u5E33","\u6591","\u9234","\u65E8","\u9187","\u8463","\u9905","\u96DB","\u59FF","\u62CC","\u5085","\u8179","\u59A5","\u63C9","\u8CE2","\u62C6","\u6B6A","\u8461","\u80FA","\u4E1F","\u6D69","\u5FBD","\u6602","\u588A","\u64CB","\u89BD","\u8CAA","\u6170","\u7E73","\u6C6A","\u614C","\u99AE","\u8AFE","\u59DC","\u8ABC","\u5147","\u52A3","\u8AA3","\u8000","\u660F","\u8EBA","\u76C8","\u9A0E","\u55AC","\u6EAA","\u53E2","\u76E7","\u62B9","\u60B6","\u8AEE","\u522E","\u99D5","\u7E9C","\u609F","\u6458","\u927A","\u64F2","\u9817","\u5E7B","\u67C4","\u60E0","\u6158","\u4F73","\u4EC7","\u81D8","\u7AA9","\u6ECC","\u528D","\u77A7","\u5821","\u6F51","\u8525","\u7F69","\u970D","\u6488","\u80CE","\u84BC","\u6FF1","\u5006","\u6345","\u6E58","\u780D","\u971E","\u90B5","\u8404","\u760B","\u6DEE","\u9042","\u718A","\u7CDE","\u70D8","\u5BBF","\u6A94","\u6208","\u99C1","\u5AC2","\u88D5","\u5F99","\u7BAD","\u6350","\u8178","\u6490","\u66EC","\u8FA8","\u6BBF","\u84EE","\u6524","\u652A","\u91AC","\u5C4F","\u75AB","\u54C0","\u8521","\u5835","\u6CAB","\u76BA","\u66A2","\u758A","\u95A3","\u840A","\u6572","\u8F44","\u9264","\u75D5","\u58E9","\u5DF7","\u9913","\u798D","\u4E18","\u7384","\u6E9C","\u66F0","\u908F","\u5F6D","\u5617","\u537F","\u59A8","\u8247","\u541E","\u97CB","\u6028","\u77EE","\u6B47"]'), Bs = JSON.parse('["\u1100\u1161\u1100\u1167\u11A8","\u1100\u1161\u1101\u1173\u11B7","\u1100\u1161\u1102\u1161\u11AB","\u1100\u1161\u1102\u1173\u11BC","\u1100\u1161\u1103\u1173\u11A8","\u1100\u1161\u1105\u1173\u110E\u1175\u11B7","\u1100\u1161\u1106\u116E\u11B7","\u1100\u1161\u1107\u1161\u11BC","\u1100\u1161\u1109\u1161\u11BC","\u1100\u1161\u1109\u1173\u11B7","\u1100\u1161\u110B\u116E\u11AB\u1103\u1166","\u1100\u1161\u110B\u1173\u11AF","\u1100\u1161\u110B\u1175\u1103\u1173","\u1100\u1161\u110B\u1175\u11B8","\u1100\u1161\u110C\u1161\u11BC","\u1100\u1161\u110C\u1165\u11BC","\u1100\u1161\u110C\u1169\u11A8","\u1100\u1161\u110C\u116E\u11A8","\u1100\u1161\u11A8\u110B\u1169","\u1100\u1161\u11A8\u110C\u1161","\u1100\u1161\u11AB\u1100\u1167\u11A8","\u1100\u1161\u11AB\u1107\u116E","\u1100\u1161\u11AB\u1109\u1165\u11B8","\u1100\u1161\u11AB\u110C\u1161\u11BC","\u1100\u1161\u11AB\u110C\u1165\u11B8","\u1100\u1161\u11AB\u1111\u1161\u11AB","\u1100\u1161\u11AF\u1103\u1173\u11BC","\u1100\u1161\u11AF\u1107\u1175","\u1100\u1161\u11AF\u1109\u1162\u11A8","\u1100\u1161\u11AF\u110C\u1173\u11BC","\u1100\u1161\u11B7\u1100\u1161\u11A8","\u1100\u1161\u11B7\u1100\u1175","\u1100\u1161\u11B7\u1109\u1169","\u1100\u1161\u11B7\u1109\u116E\u1109\u1165\u11BC","\u1100\u1161\u11B7\u110C\u1161","\u1100\u1161\u11B7\u110C\u1165\u11BC","\u1100\u1161\u11B8\u110C\u1161\u1100\u1175","\u1100\u1161\u11BC\u1102\u1161\u11B7","\u1100\u1161\u11BC\u1103\u1161\u11BC","\u1100\u1161\u11BC\u1103\u1169","\u1100\u1161\u11BC\u1105\u1167\u11A8\u1112\u1175","\u1100\u1161\u11BC\u1107\u1167\u11AB","\u1100\u1161\u11BC\u1107\u116E\u11A8","\u1100\u1161\u11BC\u1109\u1161","\u1100\u1161\u11BC\u1109\u116E\u1105\u1163\u11BC","\u1100\u1161\u11BC\u110B\u1161\u110C\u1175","\u1100\u1161\u11BC\u110B\u116F\u11AB\u1103\u1169","\u1100\u1161\u11BC\u110B\u1174","\u1100\u1161\u11BC\u110C\u1166","\u1100\u1161\u11BC\u110C\u1169","\u1100\u1161\u11C0\u110B\u1175","\u1100\u1162\u1100\u116E\u1105\u1175","\u1100\u1162\u1102\u1161\u1105\u1175","\u1100\u1162\u1107\u1161\u11BC","\u1100\u1162\u1107\u1167\u11AF","\u1100\u1162\u1109\u1165\u11AB","\u1100\u1162\u1109\u1165\u11BC","\u1100\u1162\u110B\u1175\u11AB","\u1100\u1162\u11A8\u1100\u116A\u11AB\u110C\u1165\u11A8","\u1100\u1165\u1109\u1175\u11AF","\u1100\u1165\u110B\u1162\u11A8","\u1100\u1165\u110B\u116E\u11AF","\u1100\u1165\u110C\u1175\u11BA","\u1100\u1165\u1111\u116E\u11B7","\u1100\u1165\u11A8\u110C\u1165\u11BC","\u1100\u1165\u11AB\u1100\u1161\u11BC","\u1100\u1165\u11AB\u1106\u116E\u11AF","\u1100\u1165\u11AB\u1109\u1165\u11AF","\u1100\u1165\u11AB\u110C\u1169","\u1100\u1165\u11AB\u110E\u116E\u11A8","\u1100\u1165\u11AF\u110B\u1173\u11B7","\u1100\u1165\u11B7\u1109\u1161","\u1100\u1165\u11B7\u1110\u1169","\u1100\u1166\u1109\u1175\u1111\u1161\u11AB","\u1100\u1166\u110B\u1175\u11B7","\u1100\u1167\u110B\u116E\u11AF","\u1100\u1167\u11AB\u1112\u1162","\u1100\u1167\u11AF\u1100\u116A","\u1100\u1167\u11AF\u1100\u116E\u11A8","\u1100\u1167\u11AF\u1105\u1169\u11AB","\u1100\u1167\u11AF\u1109\u1165\u11A8","\u1100\u1167\u11AF\u1109\u1173\u11BC","\u1100\u1167\u11AF\u1109\u1175\u11B7","\u1100\u1167\u11AF\u110C\u1165\u11BC","\u1100\u1167\u11AF\u1112\u1169\u11AB","\u1100\u1167\u11BC\u1100\u1168","\u1100\u1167\u11BC\u1100\u1169","\u1100\u1167\u11BC\u1100\u1175","\u1100\u1167\u11BC\u1105\u1167\u11A8","\u1100\u1167\u11BC\u1107\u1169\u11A8\u1100\u116E\u11BC","\u1100\u1167\u11BC\u1107\u1175","\u1100\u1167\u11BC\u1109\u1161\u11BC\u1103\u1169","\u1100\u1167\u11BC\u110B\u1167\u11BC","\u1100\u1167\u11BC\u110B\u116E","\u1100\u1167\u11BC\u110C\u1162\u11BC","\u1100\u1167\u11BC\u110C\u1166","\u1100\u1167\u11BC\u110C\u116E","\u1100\u1167\u11BC\u110E\u1161\u11AF","\u1100\u1167\u11BC\u110E\u1175","\u1100\u1167\u11BC\u1112\u1163\u11BC","\u1100\u1167\u11BC\u1112\u1165\u11B7","\u1100\u1168\u1100\u1169\u11A8","\u1100\u1168\u1103\u1161\u11AB","\u1100\u1168\u1105\u1161\u11AB","\u1100\u1168\u1109\u1161\u11AB","\u1100\u1168\u1109\u1169\u11A8","\u1100\u1168\u110B\u1163\u11A8","\u1100\u1168\u110C\u1165\u11AF","\u1100\u1168\u110E\u1173\u11BC","\u1100\u1168\u1112\u116C\u11A8","\u1100\u1169\u1100\u1162\u11A8","\u1100\u1169\u1100\u116E\u1105\u1167","\u1100\u1169\u1100\u116E\u11BC","\u1100\u1169\u1100\u1173\u11B8","\u1100\u1169\u1103\u1173\u11BC\u1112\u1161\u11A8\u1109\u1162\u11BC","\u1100\u1169\u1106\u116E\u1109\u1175\u11AB","\u1100\u1169\u1106\u1175\u11AB","\u1100\u1169\u110B\u1163\u11BC\u110B\u1175","\u1100\u1169\u110C\u1161\u11BC","\u1100\u1169\u110C\u1165\u11AB","\u1100\u1169\u110C\u1175\u11B8","\u1100\u1169\u110E\u116E\u11BA\u1100\u1161\u1105\u116E","\u1100\u1169\u1110\u1169\u11BC","\u1100\u1169\u1112\u1163\u11BC","\u1100\u1169\u11A8\u1109\u1175\u11A8","\u1100\u1169\u11AF\u1106\u1169\u11A8","\u1100\u1169\u11AF\u110D\u1161\u1100\u1175","\u1100\u1169\u11AF\u1111\u1173","\u1100\u1169\u11BC\u1100\u1161\u11AB","\u1100\u1169\u11BC\u1100\u1162","\u1100\u1169\u11BC\u1100\u1167\u11A8","\u1100\u1169\u11BC\u1100\u116E\u11AB","\u1100\u1169\u11BC\u1100\u1173\u11B8","\u1100\u1169\u11BC\u1100\u1175","\u1100\u1169\u11BC\u1103\u1169\u11BC","\u1100\u1169\u11BC\u1106\u116E\u110B\u116F\u11AB","\u1100\u1169\u11BC\u1107\u116E","\u1100\u1169\u11BC\u1109\u1161","\u1100\u1169\u11BC\u1109\u1175\u11A8","\u1100\u1169\u11BC\u110B\u1165\u11B8","\u1100\u1169\u11BC\u110B\u1167\u11AB","\u1100\u1169\u11BC\u110B\u116F\u11AB","\u1100\u1169\u11BC\u110C\u1161\u11BC","\u1100\u1169\u11BC\u110D\u1161","\u1100\u1169\u11BC\u110E\u1162\u11A8","\u1100\u1169\u11BC\u1110\u1169\u11BC","\u1100\u1169\u11BC\u1111\u1169","\u1100\u1169\u11BC\u1112\u1161\u11BC","\u1100\u1169\u11BC\u1112\u1172\u110B\u1175\u11AF","\u1100\u116A\u1106\u1169\u11A8","\u1100\u116A\u110B\u1175\u11AF","\u1100\u116A\u110C\u1161\u11BC","\u1100\u116A\u110C\u1165\u11BC","\u1100\u116A\u1112\u1161\u11A8","\u1100\u116A\u11AB\u1100\u1162\u11A8","\u1100\u116A\u11AB\u1100\u1168","\u1100\u116A\u11AB\u1100\u116A\u11BC","\u1100\u116A\u11AB\u1102\u1167\u11B7","\u1100\u116A\u11AB\u1105\u1161\u11B7","\u1100\u116A\u11AB\u1105\u1167\u11AB","\u1100\u116A\u11AB\u1105\u1175","\u1100\u116A\u11AB\u1109\u1173\u11B8","\u1100\u116A\u11AB\u1109\u1175\u11B7","\u1100\u116A\u11AB\u110C\u1165\u11B7","\u1100\u116A\u11AB\u110E\u1161\u11AF","\u1100\u116A\u11BC\u1100\u1167\u11BC","\u1100\u116A\u11BC\u1100\u1169","\u1100\u116A\u11BC\u110C\u1161\u11BC","\u1100\u116A\u11BC\u110C\u116E","\u1100\u116C\u1105\u1169\u110B\u116E\u11B7","\u1100\u116C\u11BC\u110C\u1161\u11BC\u1112\u1175","\u1100\u116D\u1100\u116A\u1109\u1165","\u1100\u116D\u1106\u116E\u11AB","\u1100\u116D\u1107\u1169\u11A8","\u1100\u116D\u1109\u1175\u11AF","\u1100\u116D\u110B\u1163\u11BC","\u1100\u116D\u110B\u1172\u11A8","\u1100\u116D\u110C\u1161\u11BC","\u1100\u116D\u110C\u1175\u11A8","\u1100\u116D\u1110\u1169\u11BC","\u1100\u116D\u1112\u116A\u11AB","\u1100\u116D\u1112\u116E\u11AB","\u1100\u116E\u1100\u1167\u11BC","\u1100\u116E\u1105\u1173\u11B7","\u1100\u116E\u1106\u1165\u11BC","\u1100\u116E\u1107\u1167\u11AF","\u1100\u116E\u1107\u116E\u11AB","\u1100\u116E\u1109\u1165\u11A8","\u1100\u116E\u1109\u1165\u11BC","\u1100\u116E\u1109\u1169\u11A8","\u1100\u116E\u110B\u1167\u11A8","\u1100\u116E\u110B\u1175\u11B8","\u1100\u116E\u110E\u1165\u11BC","\u1100\u116E\u110E\u1166\u110C\u1165\u11A8","\u1100\u116E\u11A8\u1100\u1161","\u1100\u116E\u11A8\u1100\u1175","\u1100\u116E\u11A8\u1102\u1162","\u1100\u116E\u11A8\u1105\u1175\u11B8","\u1100\u116E\u11A8\u1106\u116E\u11AF","\u1100\u116E\u11A8\u1106\u1175\u11AB","\u1100\u116E\u11A8\u1109\u116E","\u1100\u116E\u11A8\u110B\u1165","\u1100\u116E\u11A8\u110B\u116A\u11BC","\u1100\u116E\u11A8\u110C\u1165\u11A8","\u1100\u116E\u11A8\u110C\u1166","\u1100\u116E\u11A8\u1112\u116C","\u1100\u116E\u11AB\u1103\u1162","\u1100\u116E\u11AB\u1109\u1161","\u1100\u116E\u11AB\u110B\u1175\u11AB","\u1100\u116E\u11BC\u1100\u1173\u11A8\u110C\u1165\u11A8","\u1100\u116F\u11AB\u1105\u1175","\u1100\u116F\u11AB\u110B\u1171","\u1100\u116F\u11AB\u1110\u116E","\u1100\u1171\u1100\u116E\u11A8","\u1100\u1171\u1109\u1175\u11AB","\u1100\u1172\u110C\u1165\u11BC","\u1100\u1172\u110E\u1175\u11A8","\u1100\u1172\u11AB\u1112\u1167\u11BC","\u1100\u1173\u1102\u1161\u11AF","\u1100\u1173\u1102\u1163\u11BC","\u1100\u1173\u1102\u1173\u11AF","\u1100\u1173\u1105\u1165\u1102\u1161","\u1100\u1173\u1105\u116E\u11B8","\u1100\u1173\u1105\u1173\u11BA","\u1100\u1173\u1105\u1175\u11B7","\u1100\u1173\u110C\u1166\u1109\u1165\u110B\u1163","\u1100\u1173\u1110\u1169\u1105\u1169\u11A8","\u1100\u1173\u11A8\u1107\u1169\u11A8","\u1100\u1173\u11A8\u1112\u1175","\u1100\u1173\u11AB\u1100\u1165","\u1100\u1173\u11AB\u1100\u116D","\u1100\u1173\u11AB\u1105\u1162","\u1100\u1173\u11AB\u1105\u1169","\u1100\u1173\u11AB\u1106\u116E","\u1100\u1173\u11AB\u1107\u1169\u11AB","\u1100\u1173\u11AB\u110B\u116F\u11AB","\u1100\u1173\u11AB\u110B\u1172\u11A8","\u1100\u1173\u11AB\u110E\u1165","\u1100\u1173\u11AF\u110A\u1175","\u1100\u1173\u11AF\u110C\u1161","\u1100\u1173\u11B7\u1100\u1161\u11BC\u1109\u1161\u11AB","\u1100\u1173\u11B7\u1100\u1169","\u1100\u1173\u11B7\u1102\u1167\u11AB","\u1100\u1173\u11B7\u1106\u1166\u1103\u1161\u11AF","\u1100\u1173\u11B7\u110B\u1162\u11A8","\u1100\u1173\u11B7\u110B\u1167\u11AB","\u1100\u1173\u11B7\u110B\u116D\u110B\u1175\u11AF","\u1100\u1173\u11B7\u110C\u1175","\u1100\u1173\u11BC\u110C\u1165\u11BC\u110C\u1165\u11A8","\u1100\u1175\u1100\u1161\u11AB","\u1100\u1175\u1100\u116A\u11AB","\u1100\u1175\u1102\u1167\u11B7","\u1100\u1175\u1102\u1173\u11BC","\u1100\u1175\u1103\u1169\u11A8\u1100\u116D","\u1100\u1175\u1103\u116E\u11BC","\u1100\u1175\u1105\u1169\u11A8","\u1100\u1175\u1105\u1173\u11B7","\u1100\u1175\u1107\u1165\u11B8","\u1100\u1175\u1107\u1169\u11AB","\u1100\u1175\u1107\u116E\u11AB","\u1100\u1175\u1108\u1173\u11B7","\u1100\u1175\u1109\u116E\u11A8\u1109\u1161","\u1100\u1175\u1109\u116E\u11AF","\u1100\u1175\u110B\u1165\u11A8","\u1100\u1175\u110B\u1165\u11B8","\u1100\u1175\u110B\u1169\u11AB","\u1100\u1175\u110B\u116E\u11AB","\u1100\u1175\u110B\u116F\u11AB","\u1100\u1175\u110C\u1165\u11A8","\u1100\u1175\u110C\u116E\u11AB","\u1100\u1175\u110E\u1175\u11B7","\u1100\u1175\u1112\u1169\u11AB","\u1100\u1175\u1112\u116C\u11A8","\u1100\u1175\u11AB\u1100\u1173\u11B8","\u1100\u1175\u11AB\u110C\u1161\u11BC","\u1100\u1175\u11AF\u110B\u1175","\u1100\u1175\u11B7\u1107\u1161\u11B8","\u1100\u1175\u11B7\u110E\u1175","\u1100\u1175\u11B7\u1111\u1169\u1100\u1169\u11BC\u1112\u1161\u11BC","\u1101\u1161\u11A8\u1103\u116E\u1100\u1175","\u1101\u1161\u11B7\u1108\u1161\u11A8","\u1101\u1162\u1103\u1161\u11AF\u110B\u1173\u11B7","\u1101\u1162\u1109\u1169\u1100\u1173\u11B7","\u1101\u1165\u11B8\u110C\u1175\u11AF","\u1101\u1169\u11A8\u1103\u1162\u1100\u1175","\u1101\u1169\u11BE\u110B\u1175\u11C1","\u1102\u1161\u1103\u1173\u11AF\u110B\u1175","\u1102\u1161\u1105\u1161\u11AB\u1112\u1175","\u1102\u1161\u1106\u1165\u110C\u1175","\u1102\u1161\u1106\u116E\u11AF","\u1102\u1161\u110E\u1175\u11B7\u1107\u1161\u11AB","\u1102\u1161\u1112\u1173\u11AF","\u1102\u1161\u11A8\u110B\u1167\u11B8","\u1102\u1161\u11AB\u1107\u1161\u11BC","\u1102\u1161\u11AF\u1100\u1162","\u1102\u1161\u11AF\u110A\u1175","\u1102\u1161\u11AF\u110D\u1161","\u1102\u1161\u11B7\u1102\u1167","\u1102\u1161\u11B7\u1103\u1162\u1106\u116E\u11AB","\u1102\u1161\u11B7\u1106\u1162","\u1102\u1161\u11B7\u1109\u1161\u11AB","\u1102\u1161\u11B7\u110C\u1161","\u1102\u1161\u11B7\u1111\u1167\u11AB","\u1102\u1161\u11B7\u1112\u1161\u11A8\u1109\u1162\u11BC","\u1102\u1161\u11BC\u1107\u1175","\u1102\u1161\u11C0\u1106\u1161\u11AF","\u1102\u1162\u1102\u1167\u11AB","\u1102\u1162\u110B\u116D\u11BC","\u1102\u1162\u110B\u1175\u11AF","\u1102\u1162\u11B7\u1107\u1175","\u1102\u1162\u11B7\u1109\u1162","\u1102\u1162\u11BA\u1106\u116E\u11AF","\u1102\u1162\u11BC\u1103\u1169\u11BC","\u1102\u1162\u11BC\u1106\u1167\u11AB","\u1102\u1162\u11BC\u1107\u1161\u11BC","\u1102\u1162\u11BC\u110C\u1161\u11BC\u1100\u1169","\u1102\u1166\u11A8\u1110\u1161\u110B\u1175","\u1102\u1166\u11BA\u110D\u1162","\u1102\u1169\u1103\u1169\u11BC","\u1102\u1169\u1105\u1161\u11AB\u1109\u1162\u11A8","\u1102\u1169\u1105\u1167\u11A8","\u1102\u1169\u110B\u1175\u11AB","\u1102\u1169\u11A8\u110B\u1173\u11B7","\u1102\u1169\u11A8\u110E\u1161","\u1102\u1169\u11A8\u1112\u116A","\u1102\u1169\u11AB\u1105\u1175","\u1102\u1169\u11AB\u1106\u116E\u11AB","\u1102\u1169\u11AB\u110C\u1162\u11BC","\u1102\u1169\u11AF\u110B\u1175","\u1102\u1169\u11BC\u1100\u116E","\u1102\u1169\u11BC\u1103\u1161\u11B7","\u1102\u1169\u11BC\u1106\u1175\u11AB","\u1102\u1169\u11BC\u1107\u116E","\u1102\u1169\u11BC\u110B\u1165\u11B8","\u1102\u1169\u11BC\u110C\u1161\u11BC","\u1102\u1169\u11BC\u110E\u1169\u11AB","\u1102\u1169\u11C1\u110B\u1175","\u1102\u116E\u11AB\u1103\u1169\u11BC\u110C\u1161","\u1102\u116E\u11AB\u1106\u116E\u11AF","\u1102\u116E\u11AB\u110A\u1165\u11B8","\u1102\u1172\u110B\u116D\u11A8","\u1102\u1173\u1101\u1175\u11B7","\u1102\u1173\u11A8\u1103\u1162","\u1102\u1173\u11BC\u1103\u1169\u11BC\u110C\u1165\u11A8","\u1102\u1173\u11BC\u1105\u1167\u11A8","\u1103\u1161\u1107\u1161\u11BC","\u1103\u1161\u110B\u1163\u11BC\u1109\u1165\u11BC","\u1103\u1161\u110B\u1173\u11B7","\u1103\u1161\u110B\u1175\u110B\u1165\u1110\u1173","\u1103\u1161\u1112\u1162\u11BC","\u1103\u1161\u11AB\u1100\u1168","\u1103\u1161\u11AB\u1100\u1169\u11AF","\u1103\u1161\u11AB\u1103\u1169\u11A8","\u1103\u1161\u11AB\u1106\u1161\u11BA","\u1103\u1161\u11AB\u1109\u116E\u11AB","\u1103\u1161\u11AB\u110B\u1165","\u1103\u1161\u11AB\u110B\u1171","\u1103\u1161\u11AB\u110C\u1165\u11B7","\u1103\u1161\u11AB\u110E\u1166","\u1103\u1161\u11AB\u110E\u116E","\u1103\u1161\u11AB\u1111\u1167\u11AB","\u1103\u1161\u11AB\u1111\u116E\u11BC","\u1103\u1161\u11AF\u1100\u1163\u11AF","\u1103\u1161\u11AF\u1105\u1165","\u1103\u1161\u11AF\u1105\u1167\u11A8","\u1103\u1161\u11AF\u1105\u1175","\u1103\u1161\u11B0\u1100\u1169\u1100\u1175","\u1103\u1161\u11B7\u1103\u1161\u11BC","\u1103\u1161\u11B7\u1107\u1162","\u1103\u1161\u11B7\u110B\u116D","\u1103\u1161\u11B7\u110B\u1175\u11B7","\u1103\u1161\u11B8\u1107\u1167\u11AB","\u1103\u1161\u11B8\u110C\u1161\u11BC","\u1103\u1161\u11BC\u1100\u1173\u11AB","\u1103\u1161\u11BC\u1107\u116E\u11AB\u1100\u1161\u11AB","\u1103\u1161\u11BC\u110B\u1167\u11AB\u1112\u1175","\u1103\u1161\u11BC\u110C\u1161\u11BC","\u1103\u1162\u1100\u1172\u1106\u1169","\u1103\u1162\u1102\u1161\u11BD","\u1103\u1162\u1103\u1161\u11AB\u1112\u1175","\u1103\u1162\u1103\u1161\u11B8","\u1103\u1162\u1103\u1169\u1109\u1175","\u1103\u1162\u1105\u1163\u11A8","\u1103\u1162\u1105\u1163\u11BC","\u1103\u1162\u1105\u1172\u11A8","\u1103\u1162\u1106\u116E\u11AB","\u1103\u1162\u1107\u116E\u1107\u116E\u11AB","\u1103\u1162\u1109\u1175\u11AB","\u1103\u1162\u110B\u1173\u11BC","\u1103\u1162\u110C\u1161\u11BC","\u1103\u1162\u110C\u1165\u11AB","\u1103\u1162\u110C\u1165\u11B8","\u1103\u1162\u110C\u116E\u11BC","\u1103\u1162\u110E\u1162\u11A8","\u1103\u1162\u110E\u116E\u11AF","\u1103\u1162\u110E\u116E\u11BC","\u1103\u1162\u1110\u1169\u11BC\u1105\u1167\u11BC","\u1103\u1162\u1112\u1161\u11A8","\u1103\u1162\u1112\u1161\u11AB\u1106\u1175\u11AB\u1100\u116E\u11A8","\u1103\u1162\u1112\u1161\u11B8\u1109\u1175\u11AF","\u1103\u1162\u1112\u1167\u11BC","\u1103\u1165\u11BC\u110B\u1165\u1105\u1175","\u1103\u1166\u110B\u1175\u1110\u1173","\u1103\u1169\u1103\u1162\u110E\u1166","\u1103\u1169\u1103\u1165\u11A8","\u1103\u1169\u1103\u116E\u11A8","\u1103\u1169\u1106\u1161\u11BC","\u1103\u1169\u1109\u1165\u1100\u116A\u11AB","\u1103\u1169\u1109\u1175\u11B7","\u1103\u1169\u110B\u116E\u11B7","\u1103\u1169\u110B\u1175\u11B8","\u1103\u1169\u110C\u1161\u1100\u1175","\u1103\u1169\u110C\u1165\u1112\u1175","\u1103\u1169\u110C\u1165\u11AB","\u1103\u1169\u110C\u116E\u11BC","\u1103\u1169\u110E\u1161\u11A8","\u1103\u1169\u11A8\u1100\u1161\u11B7","\u1103\u1169\u11A8\u1105\u1175\u11B8","\u1103\u1169\u11A8\u1109\u1165","\u1103\u1169\u11A8\u110B\u1175\u11AF","\u1103\u1169\u11A8\u110E\u1161\u11BC\u110C\u1165\u11A8","\u1103\u1169\u11BC\u1112\u116A\u110E\u1162\u11A8","\u1103\u1171\u11BA\u1106\u1169\u1109\u1173\u11B8","\u1103\u1171\u11BA\u1109\u1161\u11AB","\u1104\u1161\u11AF\u110B\u1161\u110B\u1175","\u1106\u1161\u1102\u116E\u1105\u1161","\u1106\u1161\u1102\u1173\u11AF","\u1106\u1161\u1103\u1161\u11BC","\u1106\u1161\u1105\u1161\u1110\u1169\u11AB","\u1106\u1161\u1105\u1167\u11AB","\u1106\u1161\u1106\u116E\u1105\u1175","\u1106\u1161\u1109\u1161\u110C\u1175","\u1106\u1161\u110B\u1163\u11A8","\u1106\u1161\u110B\u116D\u1102\u1166\u110C\u1173","\u1106\u1161\u110B\u1173\u11AF","\u1106\u1161\u110B\u1173\u11B7","\u1106\u1161\u110B\u1175\u110F\u1173","\u1106\u1161\u110C\u116E\u11BC","\u1106\u1161\u110C\u1175\u1106\u1161\u11A8","\u1106\u1161\u110E\u1161\u11AB\u1100\u1161\u110C\u1175","\u1106\u1161\u110E\u1161\u11AF","\u1106\u1161\u1112\u1173\u11AB","\u1106\u1161\u11A8\u1100\u1165\u11AF\u1105\u1175","\u1106\u1161\u11A8\u1102\u1162","\u1106\u1161\u11A8\u1109\u1161\u11BC","\u1106\u1161\u11AB\u1102\u1161\u11B7","\u1106\u1161\u11AB\u1103\u116E","\u1106\u1161\u11AB\u1109\u1166","\u1106\u1161\u11AB\u110B\u1163\u11A8","\u1106\u1161\u11AB\u110B\u1175\u11AF","\u1106\u1161\u11AB\u110C\u1165\u11B7","\u1106\u1161\u11AB\u110C\u1169\u11A8","\u1106\u1161\u11AB\u1112\u116A","\u1106\u1161\u11AD\u110B\u1175","\u1106\u1161\u11AF\u1100\u1175","\u1106\u1161\u11AF\u110A\u1173\u11B7","\u1106\u1161\u11AF\u1110\u116E","\u1106\u1161\u11B7\u1103\u1162\u1105\u1169","\u1106\u1161\u11BC\u110B\u116F\u11AB\u1100\u1167\u11BC","\u1106\u1162\u1102\u1167\u11AB","\u1106\u1162\u1103\u1161\u11AF","\u1106\u1162\u1105\u1167\u11A8","\u1106\u1162\u1107\u1165\u11AB","\u1106\u1162\u1109\u1173\u110F\u1165\u11B7","\u1106\u1162\u110B\u1175\u11AF","\u1106\u1162\u110C\u1161\u11BC","\u1106\u1162\u11A8\u110C\u116E","\u1106\u1165\u11A8\u110B\u1175","\u1106\u1165\u11AB\u110C\u1165","\u1106\u1165\u11AB\u110C\u1175","\u1106\u1165\u11AF\u1105\u1175","\u1106\u1166\u110B\u1175\u11AF","\u1106\u1167\u1102\u1173\u1105\u1175","\u1106\u1167\u110E\u1175\u11AF","\u1106\u1167\u11AB\u1103\u1161\u11B7","\u1106\u1167\u11AF\u110E\u1175","\u1106\u1167\u11BC\u1103\u1161\u11AB","\u1106\u1167\u11BC\u1105\u1167\u11BC","\u1106\u1167\u11BC\u110B\u1168","\u1106\u1167\u11BC\u110B\u1174","\u1106\u1167\u11BC\u110C\u1165\u11AF","\u1106\u1167\u11BC\u110E\u1175\u11BC","\u1106\u1167\u11BC\u1112\u1161\u11B7","\u1106\u1169\u1100\u1173\u11B7","\u1106\u1169\u1102\u1175\u1110\u1165","\u1106\u1169\u1103\u1166\u11AF","\u1106\u1169\u1103\u1173\u11AB","\u1106\u1169\u1107\u1165\u11B7","\u1106\u1169\u1109\u1173\u11B8","\u1106\u1169\u110B\u1163\u11BC","\u1106\u1169\u110B\u1175\u11B7","\u1106\u1169\u110C\u1169\u1105\u1175","\u1106\u1169\u110C\u1175\u11B8","\u1106\u1169\u1110\u116E\u11BC\u110B\u1175","\u1106\u1169\u11A8\u1100\u1165\u11AF\u110B\u1175","\u1106\u1169\u11A8\u1105\u1169\u11A8","\u1106\u1169\u11A8\u1109\u1161","\u1106\u1169\u11A8\u1109\u1169\u1105\u1175","\u1106\u1169\u11A8\u1109\u116E\u11B7","\u1106\u1169\u11A8\u110C\u1165\u11A8","\u1106\u1169\u11A8\u1111\u116D","\u1106\u1169\u11AF\u1105\u1162","\u1106\u1169\u11B7\u1106\u1162","\u1106\u1169\u11B7\u1106\u116E\u1100\u1166","\u1106\u1169\u11B7\u1109\u1161\u11AF","\u1106\u1169\u11B7\u1109\u1169\u11A8","\u1106\u1169\u11B7\u110C\u1175\u11BA","\u1106\u1169\u11B7\u1110\u1169\u11BC","\u1106\u1169\u11B8\u1109\u1175","\u1106\u116E\u1100\u116A\u11AB\u1109\u1175\u11B7","\u1106\u116E\u1100\u116E\u11BC\u1112\u116A","\u1106\u116E\u1103\u1165\u110B\u1171","\u1106\u116E\u1103\u1165\u11B7","\u1106\u116E\u1105\u1173\u11C1","\u1106\u116E\u1109\u1173\u11AB","\u1106\u116E\u110B\u1165\u11BA","\u1106\u116E\u110B\u1167\u11A8","\u1106\u116E\u110B\u116D\u11BC","\u1106\u116E\u110C\u1169\u1100\u1165\u11AB","\u1106\u116E\u110C\u1175\u1100\u1162","\u1106\u116E\u110E\u1165\u11A8","\u1106\u116E\u11AB\u1100\u116E","\u1106\u116E\u11AB\u1103\u1173\u11A8","\u1106\u116E\u11AB\u1107\u1165\u11B8","\u1106\u116E\u11AB\u1109\u1165","\u1106\u116E\u11AB\u110C\u1166","\u1106\u116E\u11AB\u1112\u1161\u11A8","\u1106\u116E\u11AB\u1112\u116A","\u1106\u116E\u11AF\u1100\u1161","\u1106\u116E\u11AF\u1100\u1165\u11AB","\u1106\u116E\u11AF\u1100\u1167\u11AF","\u1106\u116E\u11AF\u1100\u1169\u1100\u1175","\u1106\u116E\u11AF\u1105\u1169\u11AB","\u1106\u116E\u11AF\u1105\u1175\u1112\u1161\u11A8","\u1106\u116E\u11AF\u110B\u1173\u11B7","\u1106\u116E\u11AF\u110C\u1175\u11AF","\u1106\u116E\u11AF\u110E\u1166","\u1106\u1175\u1100\u116E\u11A8","\u1106\u1175\u1103\u1175\u110B\u1165","\u1106\u1175\u1109\u1161\u110B\u1175\u11AF","\u1106\u1175\u1109\u116E\u11AF","\u1106\u1175\u110B\u1167\u11A8","\u1106\u1175\u110B\u116D\u11BC\u1109\u1175\u11AF","\u1106\u1175\u110B\u116E\u11B7","\u1106\u1175\u110B\u1175\u11AB","\u1106\u1175\u1110\u1175\u11BC","\u1106\u1175\u1112\u1169\u11AB","\u1106\u1175\u11AB\u1100\u1161\u11AB","\u1106\u1175\u11AB\u110C\u1169\u11A8","\u1106\u1175\u11AB\u110C\u116E","\u1106\u1175\u11AE\u110B\u1173\u11B7","\u1106\u1175\u11AF\u1100\u1161\u1105\u116E","\u1106\u1175\u11AF\u1105\u1175\u1106\u1175\u1110\u1165","\u1106\u1175\u11C0\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u1100\u1161\u110C\u1175","\u1107\u1161\u1100\u116E\u1102\u1175","\u1107\u1161\u1102\u1161\u1102\u1161","\u1107\u1161\u1102\u1173\u11AF","\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u1103\u1161\u11BA\u1100\u1161","\u1107\u1161\u1105\u1161\u11B7","\u1107\u1161\u110B\u1175\u1105\u1165\u1109\u1173","\u1107\u1161\u1110\u1161\u11BC","\u1107\u1161\u11A8\u1106\u116E\u11AF\u1100\u116A\u11AB","\u1107\u1161\u11A8\u1109\u1161","\u1107\u1161\u11A8\u1109\u116E","\u1107\u1161\u11AB\u1103\u1162","\u1107\u1161\u11AB\u1103\u1173\u1109\u1175","\u1107\u1161\u11AB\u1106\u1161\u11AF","\u1107\u1161\u11AB\u1107\u1161\u11AF","\u1107\u1161\u11AB\u1109\u1165\u11BC","\u1107\u1161\u11AB\u110B\u1173\u11BC","\u1107\u1161\u11AB\u110C\u1161\u11BC","\u1107\u1161\u11AB\u110C\u116E\u11A8","\u1107\u1161\u11AB\u110C\u1175","\u1107\u1161\u11AB\u110E\u1161\u11AB","\u1107\u1161\u11AE\u110E\u1175\u11B7","\u1107\u1161\u11AF\u1100\u1161\u1105\u1161\u11A8","\u1107\u1161\u11AF\u1100\u1165\u11AF\u110B\u1173\u11B7","\u1107\u1161\u11AF\u1100\u1167\u11AB","\u1107\u1161\u11AF\u1103\u1161\u11AF","\u1107\u1161\u11AF\u1105\u1166","\u1107\u1161\u11AF\u1106\u1169\u11A8","\u1107\u1161\u11AF\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u11AF\u1109\u1162\u11BC","\u1107\u1161\u11AF\u110B\u1173\u11B7","\u1107\u1161\u11AF\u110C\u1161\u1100\u116E\u11A8","\u1107\u1161\u11AF\u110C\u1165\u11AB","\u1107\u1161\u11AF\u1110\u1169\u11B8","\u1107\u1161\u11AF\u1111\u116D","\u1107\u1161\u11B7\u1112\u1161\u1102\u1173\u11AF","\u1107\u1161\u11B8\u1100\u1173\u1105\u1173\u11BA","\u1107\u1161\u11B8\u1106\u1161\u11BA","\u1107\u1161\u11B8\u1109\u1161\u11BC","\u1107\u1161\u11B8\u1109\u1169\u11C0","\u1107\u1161\u11BC\u1100\u1173\u11B7","\u1107\u1161\u11BC\u1106\u1167\u11AB","\u1107\u1161\u11BC\u1106\u116E\u11AB","\u1107\u1161\u11BC\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u11BC\u1107\u1165\u11B8","\u1107\u1161\u11BC\u1109\u1169\u11BC","\u1107\u1161\u11BC\u1109\u1175\u11A8","\u1107\u1161\u11BC\u110B\u1161\u11AB","\u1107\u1161\u11BC\u110B\u116E\u11AF","\u1107\u1161\u11BC\u110C\u1175","\u1107\u1161\u11BC\u1112\u1161\u11A8","\u1107\u1161\u11BC\u1112\u1162","\u1107\u1161\u11BC\u1112\u1163\u11BC","\u1107\u1162\u1100\u1167\u11BC","\u1107\u1162\u1101\u1169\u11B8","\u1107\u1162\u1103\u1161\u11AF","\u1107\u1162\u1103\u1173\u1106\u1175\u11AB\u1110\u1165\u11AB","\u1107\u1162\u11A8\u1103\u116E\u1109\u1161\u11AB","\u1107\u1162\u11A8\u1109\u1162\u11A8","\u1107\u1162\u11A8\u1109\u1165\u11BC","\u1107\u1162\u11A8\u110B\u1175\u11AB","\u1107\u1162\u11A8\u110C\u1166","\u1107\u1162\u11A8\u1112\u116A\u110C\u1165\u11B7","\u1107\u1165\u1105\u1173\u11BA","\u1107\u1165\u1109\u1165\u11BA","\u1107\u1165\u1110\u1173\u11AB","\u1107\u1165\u11AB\u1100\u1162","\u1107\u1165\u11AB\u110B\u1167\u11A8","\u1107\u1165\u11AB\u110C\u1175","\u1107\u1165\u11AB\u1112\u1169","\u1107\u1165\u11AF\u1100\u1173\u11B7","\u1107\u1165\u11AF\u1105\u1166","\u1107\u1165\u11AF\u110A\u1165","\u1107\u1165\u11B7\u110B\u1171","\u1107\u1165\u11B7\u110B\u1175\u11AB","\u1107\u1165\u11B7\u110C\u116C","\u1107\u1165\u11B8\u1105\u1172\u11AF","\u1107\u1165\u11B8\u110B\u116F\u11AB","\u1107\u1165\u11B8\u110C\u1165\u11A8","\u1107\u1165\u11B8\u110E\u1175\u11A8","\u1107\u1166\u110B\u1175\u110C\u1175\u11BC","\u1107\u1166\u11AF\u1110\u1173","\u1107\u1167\u11AB\u1100\u1167\u11BC","\u1107\u1167\u11AB\u1103\u1169\u11BC","\u1107\u1167\u11AB\u1106\u1167\u11BC","\u1107\u1167\u11AB\u1109\u1175\u11AB","\u1107\u1167\u11AB\u1112\u1169\u1109\u1161","\u1107\u1167\u11AB\u1112\u116A","\u1107\u1167\u11AF\u1103\u1169","\u1107\u1167\u11AF\u1106\u1167\u11BC","\u1107\u1167\u11AF\u110B\u1175\u11AF","\u1107\u1167\u11BC\u1109\u1175\u11AF","\u1107\u1167\u11BC\u110B\u1161\u1105\u1175","\u1107\u1167\u11BC\u110B\u116F\u11AB","\u1107\u1169\u1100\u116A\u11AB","\u1107\u1169\u1102\u1165\u1109\u1173","\u1107\u1169\u1105\u1161\u1109\u1162\u11A8","\u1107\u1169\u1105\u1161\u11B7","\u1107\u1169\u1105\u1173\u11B7","\u1107\u1169\u1109\u1161\u11BC","\u1107\u1169\u110B\u1161\u11AB","\u1107\u1169\u110C\u1161\u1100\u1175","\u1107\u1169\u110C\u1161\u11BC","\u1107\u1169\u110C\u1165\u11AB","\u1107\u1169\u110C\u1169\u11AB","\u1107\u1169\u1110\u1169\u11BC","\u1107\u1169\u1111\u1167\u11AB\u110C\u1165\u11A8","\u1107\u1169\u1112\u1165\u11B7","\u1107\u1169\u11A8\u1103\u1169","\u1107\u1169\u11A8\u1109\u1161","\u1107\u1169\u11A8\u1109\u116E\u11BC\u110B\u1161","\u1107\u1169\u11A8\u1109\u1173\u11B8","\u1107\u1169\u11A9\u110B\u1173\u11B7","\u1107\u1169\u11AB\u1100\u1167\u11A8\u110C\u1165\u11A8","\u1107\u1169\u11AB\u1105\u1162","\u1107\u1169\u11AB\u1107\u116E","\u1107\u1169\u11AB\u1109\u1161","\u1107\u1169\u11AB\u1109\u1165\u11BC","\u1107\u1169\u11AB\u110B\u1175\u11AB","\u1107\u1169\u11AB\u110C\u1175\u11AF","\u1107\u1169\u11AF\u1111\u1166\u11AB","\u1107\u1169\u11BC\u1109\u1161","\u1107\u1169\u11BC\u110C\u1175","\u1107\u1169\u11BC\u1110\u116E","\u1107\u116E\u1100\u1173\u11AB","\u1107\u116E\u1101\u1173\u1105\u1165\u110B\u116E\u11B7","\u1107\u116E\u1103\u1161\u11B7","\u1107\u116E\u1103\u1169\u11BC\u1109\u1161\u11AB","\u1107\u116E\u1106\u116E\u11AB","\u1107\u116E\u1107\u116E\u11AB","\u1107\u116E\u1109\u1161\u11AB","\u1107\u116E\u1109\u1161\u11BC","\u1107\u116E\u110B\u1165\u11BF","\u1107\u116E\u110B\u1175\u11AB","\u1107\u116E\u110C\u1161\u11A8\u110B\u116D\u11BC","\u1107\u116E\u110C\u1161\u11BC","\u1107\u116E\u110C\u1165\u11BC","\u1107\u116E\u110C\u1169\u11A8","\u1107\u116E\u110C\u1175\u1105\u1165\u11AB\u1112\u1175","\u1107\u116E\u110E\u1175\u11AB","\u1107\u116E\u1110\u1161\u11A8","\u1107\u116E\u1111\u116E\u11B7","\u1107\u116E\u1112\u116C\u110C\u1161\u11BC","\u1107\u116E\u11A8\u1107\u116E","\u1107\u116E\u11A8\u1112\u1161\u11AB","\u1107\u116E\u11AB\u1102\u1169","\u1107\u116E\u11AB\u1105\u1163\u11BC","\u1107\u116E\u11AB\u1105\u1175","\u1107\u116E\u11AB\u1106\u1167\u11BC","\u1107\u116E\u11AB\u1109\u1165\u11A8","\u1107\u116E\u11AB\u110B\u1163","\u1107\u116E\u11AB\u110B\u1171\u1100\u1175","\u1107\u116E\u11AB\u1111\u1175\u11AF","\u1107\u116E\u11AB\u1112\u1169\u11BC\u1109\u1162\u11A8","\u1107\u116E\u11AF\u1100\u1169\u1100\u1175","\u1107\u116E\u11AF\u1100\u116A","\u1107\u116E\u11AF\u1100\u116D","\u1107\u116E\u11AF\u1101\u1169\u11BE","\u1107\u116E\u11AF\u1106\u1161\u11AB","\u1107\u116E\u11AF\u1107\u1165\u11B8","\u1107\u116E\u11AF\u1107\u1175\u11BE","\u1107\u116E\u11AF\u110B\u1161\u11AB","\u1107\u116E\u11AF\u110B\u1175\u110B\u1175\u11A8","\u1107\u116E\u11AF\u1112\u1162\u11BC","\u1107\u1173\u1105\u1162\u11AB\u1103\u1173","\u1107\u1175\u1100\u1173\u11A8","\u1107\u1175\u1102\u1161\u11AB","\u1107\u1175\u1102\u1175\u11AF","\u1107\u1175\u1103\u116E\u11AF\u1100\u1175","\u1107\u1175\u1103\u1175\u110B\u1169","\u1107\u1175\u1105\u1169\u1109\u1169","\u1107\u1175\u1106\u1161\u11AB","\u1107\u1175\u1106\u1167\u11BC","\u1107\u1175\u1106\u1175\u11AF","\u1107\u1175\u1107\u1161\u1105\u1161\u11B7","\u1107\u1175\u1107\u1175\u11B7\u1107\u1161\u11B8","\u1107\u1175\u1109\u1161\u11BC","\u1107\u1175\u110B\u116D\u11BC","\u1107\u1175\u110B\u1172\u11AF","\u1107\u1175\u110C\u116E\u11BC","\u1107\u1175\u1110\u1161\u1106\u1175\u11AB","\u1107\u1175\u1111\u1161\u11AB","\u1107\u1175\u11AF\u1103\u1175\u11BC","\u1107\u1175\u11BA\u1106\u116E\u11AF","\u1107\u1175\u11BA\u1107\u1161\u11BC\u110B\u116E\u11AF","\u1107\u1175\u11BA\u110C\u116E\u11AF\u1100\u1175","\u1107\u1175\u11BE\u1101\u1161\u11AF","\u1108\u1161\u11AF\u1100\u1161\u11AB\u1109\u1162\u11A8","\u1108\u1161\u11AF\u1105\u1162","\u1108\u1161\u11AF\u1105\u1175","\u1109\u1161\u1100\u1165\u11AB","\u1109\u1161\u1100\u1168\u110C\u1165\u11AF","\u1109\u1161\u1102\u1161\u110B\u1175","\u1109\u1161\u1102\u1163\u11BC","\u1109\u1161\u1105\u1161\u11B7","\u1109\u1161\u1105\u1161\u11BC","\u1109\u1161\u1105\u1175\u11B8","\u1109\u1161\u1106\u1169\u1102\u1175\u11B7","\u1109\u1161\u1106\u116E\u11AF","\u1109\u1161\u1107\u1161\u11BC","\u1109\u1161\u1109\u1161\u11BC","\u1109\u1161\u1109\u1162\u11BC\u1112\u116A\u11AF","\u1109\u1161\u1109\u1165\u11AF","\u1109\u1161\u1109\u1173\u11B7","\u1109\u1161\u1109\u1175\u11AF","\u1109\u1161\u110B\u1165\u11B8","\u1109\u1161\u110B\u116D\u11BC","\u1109\u1161\u110B\u116F\u11AF","\u1109\u1161\u110C\u1161\u11BC","\u1109\u1161\u110C\u1165\u11AB","\u1109\u1161\u110C\u1175\u11AB","\u1109\u1161\u110E\u1169\u11AB","\u1109\u1161\u110E\u116E\u11AB\u1100\u1175","\u1109\u1161\u1110\u1161\u11BC","\u1109\u1161\u1110\u116E\u1105\u1175","\u1109\u1161\u1112\u1173\u11AF","\u1109\u1161\u11AB\u1100\u1175\u11AF","\u1109\u1161\u11AB\u1107\u116E\u110B\u1175\u11AB\u1100\u116A","\u1109\u1161\u11AB\u110B\u1165\u11B8","\u1109\u1161\u11AB\u110E\u1162\u11A8","\u1109\u1161\u11AF\u1105\u1175\u11B7","\u1109\u1161\u11AF\u110B\u1175\u11AB","\u1109\u1161\u11AF\u110D\u1161\u11A8","\u1109\u1161\u11B7\u1100\u1168\u1110\u1161\u11BC","\u1109\u1161\u11B7\u1100\u116E\u11A8","\u1109\u1161\u11B7\u1109\u1175\u11B8","\u1109\u1161\u11B7\u110B\u116F\u11AF","\u1109\u1161\u11B7\u110E\u1169\u11AB","\u1109\u1161\u11BC\u1100\u116A\u11AB","\u1109\u1161\u11BC\u1100\u1173\u11B7","\u1109\u1161\u11BC\u1103\u1162","\u1109\u1161\u11BC\u1105\u1172","\u1109\u1161\u11BC\u1107\u1161\u11AB\u1100\u1175","\u1109\u1161\u11BC\u1109\u1161\u11BC","\u1109\u1161\u11BC\u1109\u1175\u11A8","\u1109\u1161\u11BC\u110B\u1165\u11B8","\u1109\u1161\u11BC\u110B\u1175\u11AB","\u1109\u1161\u11BC\u110C\u1161","\u1109\u1161\u11BC\u110C\u1165\u11B7","\u1109\u1161\u11BC\u110E\u1165","\u1109\u1161\u11BC\u110E\u116E","\u1109\u1161\u11BC\u1110\u1162","\u1109\u1161\u11BC\u1111\u116D","\u1109\u1161\u11BC\u1111\u116E\u11B7","\u1109\u1161\u11BC\u1112\u116A\u11BC","\u1109\u1162\u1107\u1167\u11A8","\u1109\u1162\u11A8\u1101\u1161\u11AF","\u1109\u1162\u11A8\u110B\u1167\u11AB\u1111\u1175\u11AF","\u1109\u1162\u11BC\u1100\u1161\u11A8","\u1109\u1162\u11BC\u1106\u1167\u11BC","\u1109\u1162\u11BC\u1106\u116E\u11AF","\u1109\u1162\u11BC\u1107\u1161\u11BC\u1109\u1169\u11BC","\u1109\u1162\u11BC\u1109\u1161\u11AB","\u1109\u1162\u11BC\u1109\u1165\u11AB","\u1109\u1162\u11BC\u1109\u1175\u11AB","\u1109\u1162\u11BC\u110B\u1175\u11AF","\u1109\u1162\u11BC\u1112\u116A\u11AF","\u1109\u1165\u1105\u1161\u11B8","\u1109\u1165\u1105\u1173\u11AB","\u1109\u1165\u1106\u1167\u11BC","\u1109\u1165\u1106\u1175\u11AB","\u1109\u1165\u1107\u1175\u1109\u1173","\u1109\u1165\u110B\u1163\u11BC","\u1109\u1165\u110B\u116E\u11AF","\u1109\u1165\u110C\u1165\u11A8","\u1109\u1165\u110C\u1165\u11B7","\u1109\u1165\u110D\u1169\u11A8","\u1109\u1165\u110F\u1173\u11AF","\u1109\u1165\u11A8\u1109\u1161","\u1109\u1165\u11A8\u110B\u1172","\u1109\u1165\u11AB\u1100\u1165","\u1109\u1165\u11AB\u1106\u116E\u11AF","\u1109\u1165\u11AB\u1107\u1162","\u1109\u1165\u11AB\u1109\u1162\u11BC","\u1109\u1165\u11AB\u1109\u116E","\u1109\u1165\u11AB\u110B\u116F\u11AB","\u1109\u1165\u11AB\u110C\u1161\u11BC","\u1109\u1165\u11AB\u110C\u1165\u11AB","\u1109\u1165\u11AB\u1110\u1162\u11A8","\u1109\u1165\u11AB\u1111\u116E\u11BC\u1100\u1175","\u1109\u1165\u11AF\u1100\u1165\u110C\u1175","\u1109\u1165\u11AF\u1102\u1161\u11AF","\u1109\u1165\u11AF\u1105\u1165\u11BC\u1110\u1161\u11BC","\u1109\u1165\u11AF\u1106\u1167\u11BC","\u1109\u1165\u11AF\u1106\u116E\u11AB","\u1109\u1165\u11AF\u1109\u1161","\u1109\u1165\u11AF\u110B\u1161\u11A8\u1109\u1161\u11AB","\u1109\u1165\u11AF\u110E\u1175","\u1109\u1165\u11AF\u1110\u1161\u11BC","\u1109\u1165\u11B8\u110A\u1175","\u1109\u1165\u11BC\u1100\u1169\u11BC","\u1109\u1165\u11BC\u1103\u1161\u11BC","\u1109\u1165\u11BC\u1106\u1167\u11BC","\u1109\u1165\u11BC\u1107\u1167\u11AF","\u1109\u1165\u11BC\u110B\u1175\u11AB","\u1109\u1165\u11BC\u110C\u1161\u11BC","\u1109\u1165\u11BC\u110C\u1165\u11A8","\u1109\u1165\u11BC\u110C\u1175\u11AF","\u1109\u1165\u11BC\u1112\u1161\u11B7","\u1109\u1166\u1100\u1173\u11B7","\u1109\u1166\u1106\u1175\u1102\u1161","\u1109\u1166\u1109\u1161\u11BC","\u1109\u1166\u110B\u116F\u11AF","\u1109\u1166\u110C\u1169\u11BC\u1103\u1162\u110B\u116A\u11BC","\u1109\u1166\u1110\u1161\u11A8","\u1109\u1166\u11AB\u1110\u1165","\u1109\u1166\u11AB\u1110\u1175\u1106\u1175\u1110\u1165","\u1109\u1166\u11BA\u110D\u1162","\u1109\u1169\u1100\u1172\u1106\u1169","\u1109\u1169\u1100\u1173\u11A8\u110C\u1165\u11A8","\u1109\u1169\u1100\u1173\u11B7","\u1109\u1169\u1102\u1161\u1100\u1175","\u1109\u1169\u1102\u1167\u11AB","\u1109\u1169\u1103\u1173\u11A8","\u1109\u1169\u1106\u1161\u11BC","\u1109\u1169\u1106\u116E\u11AB","\u1109\u1169\u1109\u1165\u11AF","\u1109\u1169\u1109\u1169\u11A8","\u1109\u1169\u110B\u1161\u1100\u116A","\u1109\u1169\u110B\u116D\u11BC","\u1109\u1169\u110B\u116F\u11AB","\u1109\u1169\u110B\u1173\u11B7","\u1109\u1169\u110C\u116E\u11BC\u1112\u1175","\u1109\u1169\u110C\u1175\u1111\u116E\u11B7","\u1109\u1169\u110C\u1175\u11AF","\u1109\u1169\u1111\u116E\u11BC","\u1109\u1169\u1112\u1167\u11BC","\u1109\u1169\u11A8\u1103\u1161\u11B7","\u1109\u1169\u11A8\u1103\u1169","\u1109\u1169\u11A8\u110B\u1169\u11BA","\u1109\u1169\u11AB\u1100\u1161\u1105\u1161\u11A8","\u1109\u1169\u11AB\u1100\u1175\u11AF","\u1109\u1169\u11AB\u1102\u1167","\u1109\u1169\u11AB\u1102\u1175\u11B7","\u1109\u1169\u11AB\u1103\u1173\u11BC","\u1109\u1169\u11AB\u1106\u1169\u11A8","\u1109\u1169\u11AB\u1108\u1167\u11A8","\u1109\u1169\u11AB\u1109\u1175\u11AF","\u1109\u1169\u11AB\u110C\u1175\u11AF","\u1109\u1169\u11AB\u1110\u1169\u11B8","\u1109\u1169\u11AB\u1112\u1162","\u1109\u1169\u11AF\u110C\u1175\u11A8\u1112\u1175","\u1109\u1169\u11B7\u110A\u1175","\u1109\u1169\u11BC\u110B\u1161\u110C\u1175","\u1109\u1169\u11BC\u110B\u1175","\u1109\u1169\u11BC\u1111\u1167\u11AB","\u1109\u116C\u1100\u1169\u1100\u1175","\u1109\u116D\u1111\u1175\u11BC","\u1109\u116E\u1100\u1165\u11AB","\u1109\u116E\u1102\u1167\u11AB","\u1109\u116E\u1103\u1161\u11AB","\u1109\u116E\u1103\u1169\u11BA\u1106\u116E\u11AF","\u1109\u116E\u1103\u1169\u11BC\u110C\u1165\u11A8","\u1109\u116E\u1106\u1167\u11AB","\u1109\u116E\u1106\u1167\u11BC","\u1109\u116E\u1107\u1161\u11A8","\u1109\u116E\u1109\u1161\u11BC","\u1109\u116E\u1109\u1165\u11A8","\u1109\u116E\u1109\u116E\u11AF","\u1109\u116E\u1109\u1175\u1105\u1169","\u1109\u116E\u110B\u1165\u11B8","\u1109\u116E\u110B\u1167\u11B7","\u1109\u116E\u110B\u1167\u11BC","\u1109\u116E\u110B\u1175\u11B8","\u1109\u116E\u110C\u116E\u11AB","\u1109\u116E\u110C\u1175\u11B8","\u1109\u116E\u110E\u116E\u11AF","\u1109\u116E\u110F\u1165\u11BA","\u1109\u116E\u1111\u1175\u11AF","\u1109\u116E\u1112\u1161\u11A8","\u1109\u116E\u1112\u1165\u11B7\u1109\u1162\u11BC","\u1109\u116E\u1112\u116A\u1100\u1175","\u1109\u116E\u11A8\u1102\u1167","\u1109\u116E\u11A8\u1109\u1169","\u1109\u116E\u11A8\u110C\u1166","\u1109\u116E\u11AB\u1100\u1161\u11AB","\u1109\u116E\u11AB\u1109\u1165","\u1109\u116E\u11AB\u1109\u116E","\u1109\u116E\u11AB\u1109\u1175\u11A8\u1100\u1161\u11AB","\u1109\u116E\u11AB\u110B\u1171","\u1109\u116E\u11AE\u1100\u1161\u1105\u1161\u11A8","\u1109\u116E\u11AF\u1107\u1167\u11BC","\u1109\u116E\u11AF\u110C\u1175\u11B8","\u1109\u116E\u11BA\u110C\u1161","\u1109\u1173\u1102\u1175\u11B7","\u1109\u1173\u1106\u116E\u11AF","\u1109\u1173\u1109\u1173\u1105\u1169","\u1109\u1173\u1109\u1173\u11BC","\u1109\u1173\u110B\u1170\u1110\u1165","\u1109\u1173\u110B\u1171\u110E\u1175","\u1109\u1173\u110F\u1166\u110B\u1175\u1110\u1173","\u1109\u1173\u1110\u1172\u1103\u1175\u110B\u1169","\u1109\u1173\u1110\u1173\u1105\u1166\u1109\u1173","\u1109\u1173\u1111\u1169\u110E\u1173","\u1109\u1173\u11AF\u110D\u1165\u11A8","\u1109\u1173\u11AF\u1111\u1173\u11B7","\u1109\u1173\u11B8\u1100\u116A\u11AB","\u1109\u1173\u11B8\u1100\u1175","\u1109\u1173\u11BC\u1100\u1162\u11A8","\u1109\u1173\u11BC\u1105\u1175","\u1109\u1173\u11BC\u1107\u116E","\u1109\u1173\u11BC\u110B\u116D\u11BC\u110E\u1161","\u1109\u1173\u11BC\u110C\u1175\u11AB","\u1109\u1175\u1100\u1161\u11A8","\u1109\u1175\u1100\u1161\u11AB","\u1109\u1175\u1100\u1169\u11AF","\u1109\u1175\u1100\u1173\u11B7\u110E\u1175","\u1109\u1175\u1102\u1161\u1105\u1175\u110B\u1169","\u1109\u1175\u1103\u1162\u11A8","\u1109\u1175\u1105\u1175\u110C\u1173","\u1109\u1175\u1106\u1166\u11AB\u1110\u1173","\u1109\u1175\u1106\u1175\u11AB","\u1109\u1175\u1107\u116E\u1106\u1169","\u1109\u1175\u1109\u1165\u11AB","\u1109\u1175\u1109\u1165\u11AF","\u1109\u1175\u1109\u1173\u1110\u1166\u11B7","\u1109\u1175\u110B\u1161\u1107\u1165\u110C\u1175","\u1109\u1175\u110B\u1165\u1106\u1165\u1102\u1175","\u1109\u1175\u110B\u116F\u11AF","\u1109\u1175\u110B\u1175\u11AB","\u1109\u1175\u110B\u1175\u11AF","\u1109\u1175\u110C\u1161\u11A8","\u1109\u1175\u110C\u1161\u11BC","\u1109\u1175\u110C\u1165\u11AF","\u1109\u1175\u110C\u1165\u11B7","\u1109\u1175\u110C\u116E\u11BC","\u1109\u1175\u110C\u1173\u11AB","\u1109\u1175\u110C\u1175\u11B8","\u1109\u1175\u110E\u1165\u11BC","\u1109\u1175\u1112\u1161\u11B8","\u1109\u1175\u1112\u1165\u11B7","\u1109\u1175\u11A8\u1100\u116E","\u1109\u1175\u11A8\u1100\u1175","\u1109\u1175\u11A8\u1103\u1161\u11BC","\u1109\u1175\u11A8\u1105\u1163\u11BC","\u1109\u1175\u11A8\u1105\u116D\u1111\u116E\u11B7","\u1109\u1175\u11A8\u1106\u116E\u11AF","\u1109\u1175\u11A8\u1108\u1161\u11BC","\u1109\u1175\u11A8\u1109\u1161","\u1109\u1175\u11A8\u1109\u1162\u11BC\u1112\u116A\u11AF","\u1109\u1175\u11A8\u110E\u1169","\u1109\u1175\u11A8\u1110\u1161\u11A8","\u1109\u1175\u11A8\u1111\u116E\u11B7","\u1109\u1175\u11AB\u1100\u1169","\u1109\u1175\u11AB\u1100\u1172","\u1109\u1175\u11AB\u1102\u1167\u11B7","\u1109\u1175\u11AB\u1106\u116E\u11AB","\u1109\u1175\u11AB\u1107\u1161\u11AF","\u1109\u1175\u11AB\u1107\u1175","\u1109\u1175\u11AB\u1109\u1161","\u1109\u1175\u11AB\u1109\u1166","\u1109\u1175\u11AB\u110B\u116D\u11BC","\u1109\u1175\u11AB\u110C\u1166\u1111\u116E\u11B7","\u1109\u1175\u11AB\u110E\u1165\u11BC","\u1109\u1175\u11AB\u110E\u1166","\u1109\u1175\u11AB\u1112\u116A","\u1109\u1175\u11AF\u1100\u1161\u11B7","\u1109\u1175\u11AF\u1102\u1162","\u1109\u1175\u11AF\u1105\u1167\u11A8","\u1109\u1175\u11AF\u1105\u1168","\u1109\u1175\u11AF\u1106\u1161\u11BC","\u1109\u1175\u11AF\u1109\u116E","\u1109\u1175\u11AF\u1109\u1173\u11B8","\u1109\u1175\u11AF\u1109\u1175","\u1109\u1175\u11AF\u110C\u1161\u11BC","\u1109\u1175\u11AF\u110C\u1165\u11BC","\u1109\u1175\u11AF\u110C\u1175\u11AF\u110C\u1165\u11A8","\u1109\u1175\u11AF\u110E\u1165\u11AB","\u1109\u1175\u11AF\u110E\u1166","\u1109\u1175\u11AF\u110F\u1165\u11BA","\u1109\u1175\u11AF\u1110\u1162","\u1109\u1175\u11AF\u1111\u1162","\u1109\u1175\u11AF\u1112\u1165\u11B7","\u1109\u1175\u11AF\u1112\u1167\u11AB","\u1109\u1175\u11B7\u1105\u1175","\u1109\u1175\u11B7\u1107\u116E\u1105\u1173\u11B7","\u1109\u1175\u11B7\u1109\u1161","\u1109\u1175\u11B7\u110C\u1161\u11BC","\u1109\u1175\u11B7\u110C\u1165\u11BC","\u1109\u1175\u11B7\u1111\u1161\u11AB","\u110A\u1161\u11BC\u1103\u116E\u11BC\u110B\u1175","\u110A\u1175\u1105\u1173\u11B7","\u110A\u1175\u110B\u1161\u11BA","\u110B\u1161\u1100\u1161\u110A\u1175","\u110B\u1161\u1102\u1161\u110B\u116E\u11AB\u1109\u1165","\u110B\u1161\u1103\u1173\u1102\u1175\u11B7","\u110B\u1161\u1103\u1173\u11AF","\u110B\u1161\u1109\u1171\u110B\u116E\u11B7","\u110B\u1161\u1109\u1173\u1111\u1161\u11AF\u1110\u1173","\u110B\u1161\u1109\u1175\u110B\u1161","\u110B\u1161\u110B\u116E\u11AF\u1105\u1165","\u110B\u1161\u110C\u1165\u110A\u1175","\u110B\u1161\u110C\u116E\u11B7\u1106\u1161","\u110B\u1161\u110C\u1175\u11A8","\u110B\u1161\u110E\u1175\u11B7","\u110B\u1161\u1111\u1161\u1110\u1173","\u110B\u1161\u1111\u1173\u1105\u1175\u110F\u1161","\u110B\u1161\u1111\u1173\u11B7","\u110B\u1161\u1112\u1169\u11B8","\u110B\u1161\u1112\u1173\u11AB","\u110B\u1161\u11A8\u1100\u1175","\u110B\u1161\u11A8\u1106\u1169\u11BC","\u110B\u1161\u11A8\u1109\u116E","\u110B\u1161\u11AB\u1100\u1162","\u110B\u1161\u11AB\u1100\u1167\u11BC","\u110B\u1161\u11AB\u1100\u116A","\u110B\u1161\u11AB\u1102\u1162","\u110B\u1161\u11AB\u1102\u1167\u11BC","\u110B\u1161\u11AB\u1103\u1169\u11BC","\u110B\u1161\u11AB\u1107\u1161\u11BC","\u110B\u1161\u11AB\u1107\u116E","\u110B\u1161\u11AB\u110C\u116E","\u110B\u1161\u11AF\u1105\u116E\u1106\u1175\u1102\u1172\u11B7","\u110B\u1161\u11AF\u110F\u1169\u110B\u1169\u11AF","\u110B\u1161\u11B7\u1109\u1175","\u110B\u1161\u11B7\u110F\u1165\u11BA","\u110B\u1161\u11B8\u1105\u1167\u11A8","\u110B\u1161\u11C1\u1102\u1161\u11AF","\u110B\u1161\u11C1\u1106\u116E\u11AB","\u110B\u1162\u110B\u1175\u11AB","\u110B\u1162\u110C\u1165\u11BC","\u110B\u1162\u11A8\u1109\u116E","\u110B\u1162\u11AF\u1107\u1165\u11B7","\u110B\u1163\u1100\u1161\u11AB","\u110B\u1163\u1103\u1161\u11AB","\u110B\u1163\u110B\u1169\u11BC","\u110B\u1163\u11A8\u1100\u1161\u11AB","\u110B\u1163\u11A8\u1100\u116E\u11A8","\u110B\u1163\u11A8\u1109\u1169\u11A8","\u110B\u1163\u11A8\u1109\u116E","\u110B\u1163\u11A8\u110C\u1165\u11B7","\u110B\u1163\u11A8\u1111\u116E\u11B7","\u110B\u1163\u11A8\u1112\u1169\u11AB\u1102\u1167","\u110B\u1163\u11BC\u1102\u1167\u11B7","\u110B\u1163\u11BC\u1105\u1167\u11A8","\u110B\u1163\u11BC\u1106\u1161\u11AF","\u110B\u1163\u11BC\u1107\u1162\u110E\u116E","\u110B\u1163\u11BC\u110C\u116E","\u110B\u1163\u11BC\u1111\u1161","\u110B\u1165\u1103\u116E\u11B7","\u110B\u1165\u1105\u1167\u110B\u116E\u11B7","\u110B\u1165\u1105\u1173\u11AB","\u110B\u1165\u110C\u1166\u11BA\u1107\u1161\u11B7","\u110B\u1165\u110D\u1162\u11BB\u1103\u1173\u11AB","\u110B\u1165\u110D\u1165\u1103\u1161\u1100\u1161","\u110B\u1165\u110D\u1165\u11AB\u110C\u1175","\u110B\u1165\u11AB\u1102\u1175","\u110B\u1165\u11AB\u1103\u1165\u11A8","\u110B\u1165\u11AB\u1105\u1169\u11AB","\u110B\u1165\u11AB\u110B\u1165","\u110B\u1165\u11AF\u1100\u116E\u11AF","\u110B\u1165\u11AF\u1105\u1173\u11AB","\u110B\u1165\u11AF\u110B\u1173\u11B7","\u110B\u1165\u11AF\u1111\u1175\u11BA","\u110B\u1165\u11B7\u1106\u1161","\u110B\u1165\u11B8\u1106\u116E","\u110B\u1165\u11B8\u110C\u1169\u11BC","\u110B\u1165\u11B8\u110E\u1166","\u110B\u1165\u11BC\u1103\u1165\u11BC\u110B\u1175","\u110B\u1165\u11BC\u1106\u1161\u11BC","\u110B\u1165\u11BC\u1110\u1165\u1105\u1175","\u110B\u1165\u11BD\u1100\u1173\u110C\u1166","\u110B\u1166\u1102\u1165\u110C\u1175","\u110B\u1166\u110B\u1165\u110F\u1165\u11AB","\u110B\u1166\u11AB\u110C\u1175\u11AB","\u110B\u1167\u1100\u1165\u11AB","\u110B\u1167\u1100\u1169\u1109\u1162\u11BC","\u110B\u1167\u1100\u116A\u11AB","\u110B\u1167\u1100\u116E\u11AB","\u110B\u1167\u1100\u116F\u11AB","\u110B\u1167\u1103\u1162\u1109\u1162\u11BC","\u110B\u1167\u1103\u1165\u11B2","\u110B\u1167\u1103\u1169\u11BC\u1109\u1162\u11BC","\u110B\u1167\u1103\u1173\u11AB","\u110B\u1167\u1105\u1169\u11AB","\u110B\u1167\u1105\u1173\u11B7","\u110B\u1167\u1109\u1165\u11BA","\u110B\u1167\u1109\u1165\u11BC","\u110B\u1167\u110B\u116A\u11BC","\u110B\u1167\u110B\u1175\u11AB","\u110B\u1167\u110C\u1165\u11AB\u1112\u1175","\u110B\u1167\u110C\u1175\u11A8\u110B\u116F\u11AB","\u110B\u1167\u1112\u1161\u11A8\u1109\u1162\u11BC","\u110B\u1167\u1112\u1162\u11BC","\u110B\u1167\u11A8\u1109\u1161","\u110B\u1167\u11A8\u1109\u1175","\u110B\u1167\u11A8\u1112\u1161\u11AF","\u110B\u1167\u11AB\u1100\u1167\u11AF","\u110B\u1167\u11AB\u1100\u116E","\u110B\u1167\u11AB\u1100\u1173\u11A8","\u110B\u1167\u11AB\u1100\u1175","\u110B\u1167\u11AB\u1105\u1161\u11A8","\u110B\u1167\u11AB\u1109\u1165\u11AF","\u110B\u1167\u11AB\u1109\u1166","\u110B\u1167\u11AB\u1109\u1169\u11A8","\u110B\u1167\u11AB\u1109\u1173\u11B8","\u110B\u1167\u11AB\u110B\u1162","\u110B\u1167\u11AB\u110B\u1168\u110B\u1175\u11AB","\u110B\u1167\u11AB\u110B\u1175\u11AB","\u110B\u1167\u11AB\u110C\u1161\u11BC","\u110B\u1167\u11AB\u110C\u116E","\u110B\u1167\u11AB\u110E\u116E\u11AF","\u110B\u1167\u11AB\u1111\u1175\u11AF","\u110B\u1167\u11AB\u1112\u1161\u11B8","\u110B\u1167\u11AB\u1112\u1172","\u110B\u1167\u11AF\u1100\u1175","\u110B\u1167\u11AF\u1106\u1162","\u110B\u1167\u11AF\u1109\u116C","\u110B\u1167\u11AF\u1109\u1175\u11B7\u1112\u1175","\u110B\u1167\u11AF\u110C\u1165\u11BC","\u110B\u1167\u11AF\u110E\u1161","\u110B\u1167\u11AF\u1112\u1173\u11AF","\u110B\u1167\u11B7\u1105\u1167","\u110B\u1167\u11B8\u1109\u1165","\u110B\u1167\u11BC\u1100\u116E\u11A8","\u110B\u1167\u11BC\u1102\u1161\u11B7","\u110B\u1167\u11BC\u1109\u1161\u11BC","\u110B\u1167\u11BC\u110B\u1163\u11BC","\u110B\u1167\u11BC\u110B\u1167\u11A8","\u110B\u1167\u11BC\u110B\u116E\u11BC","\u110B\u1167\u11BC\u110B\u116F\u11AB\u1112\u1175","\u110B\u1167\u11BC\u1112\u1161","\u110B\u1167\u11BC\u1112\u1163\u11BC","\u110B\u1167\u11BC\u1112\u1169\u11AB","\u110B\u1167\u11BC\u1112\u116A","\u110B\u1167\u11C1\u1100\u116E\u1105\u1175","\u110B\u1167\u11C1\u1107\u1161\u11BC","\u110B\u1167\u11C1\u110C\u1175\u11B8","\u110B\u1168\u1100\u1161\u11B7","\u110B\u1168\u1100\u1173\u11B7","\u110B\u1168\u1107\u1161\u11BC","\u110B\u1168\u1109\u1161\u11AB","\u110B\u1168\u1109\u1161\u11BC","\u110B\u1168\u1109\u1165\u11AB","\u110B\u1168\u1109\u116E\u11AF","\u110B\u1168\u1109\u1173\u11B8","\u110B\u1168\u1109\u1175\u11A8\u110C\u1161\u11BC","\u110B\u1168\u110B\u1163\u11A8","\u110B\u1168\u110C\u1165\u11AB","\u110B\u1168\u110C\u1165\u11AF","\u110B\u1168\u110C\u1165\u11BC","\u110B\u1168\u110F\u1165\u11AB\u1103\u1162","\u110B\u1168\u11BA\u1102\u1161\u11AF","\u110B\u1169\u1102\u1173\u11AF","\u110B\u1169\u1105\u1161\u11A8","\u110B\u1169\u1105\u1162\u11BA\u1103\u1169\u11BC\u110B\u1161\u11AB","\u110B\u1169\u1105\u1166\u11AB\u110C\u1175","\u110B\u1169\u1105\u1169\u110C\u1175","\u110B\u1169\u1105\u1173\u11AB\u1107\u1161\u11AF","\u110B\u1169\u1107\u1173\u11AB","\u110B\u1169\u1109\u1175\u11B8","\u110B\u1169\u110B\u1167\u11B7","\u110B\u1169\u110B\u116F\u11AF","\u110B\u1169\u110C\u1165\u11AB","\u110B\u1169\u110C\u1175\u11A8","\u110B\u1169\u110C\u1175\u11BC\u110B\u1165","\u110B\u1169\u1111\u1166\u1105\u1161","\u110B\u1169\u1111\u1175\u1109\u1173\u1110\u1166\u11AF","\u110B\u1169\u1112\u1175\u1105\u1167","\u110B\u1169\u11A8\u1109\u1161\u11BC","\u110B\u1169\u11A8\u1109\u116E\u1109\u116E","\u110B\u1169\u11AB\u1100\u1161\u11BD","\u110B\u1169\u11AB\u1105\u1161\u110B\u1175\u11AB","\u110B\u1169\u11AB\u1106\u1169\u11B7","\u110B\u1169\u11AB\u110C\u1169\u11BC\u110B\u1175\u11AF","\u110B\u1169\u11AB\u1110\u1169\u11BC","\u110B\u1169\u11AF\u1100\u1161\u110B\u1173\u11AF","\u110B\u1169\u11AF\u1105\u1175\u11B7\u1111\u1175\u11A8","\u110B\u1169\u11AF\u1112\u1162","\u110B\u1169\u11BA\u110E\u1161\u1105\u1175\u11B7","\u110B\u116A\u110B\u1175\u1109\u1167\u110E\u1173","\u110B\u116A\u110B\u1175\u11AB","\u110B\u116A\u11AB\u1109\u1165\u11BC","\u110B\u116A\u11AB\u110C\u1165\u11AB","\u110B\u116A\u11BC\u1107\u1175","\u110B\u116A\u11BC\u110C\u1161","\u110B\u116B\u1102\u1163\u1112\u1161\u1106\u1167\u11AB","\u110B\u116B\u11AB\u110C\u1175","\u110B\u116C\u1100\u1161\u11BA\u110C\u1175\u11B8","\u110B\u116C\u1100\u116E\u11A8","\u110B\u116C\u1105\u1169\u110B\u116E\u11B7","\u110B\u116C\u1109\u1161\u11B7\u110E\u1169\u11AB","\u110B\u116C\u110E\u116E\u11AF","\u110B\u116C\u110E\u1175\u11B7","\u110B\u116C\u1112\u1161\u11AF\u1106\u1165\u1102\u1175","\u110B\u116C\u11AB\u1107\u1161\u11AF","\u110B\u116C\u11AB\u1109\u1169\u11AB","\u110B\u116C\u11AB\u110D\u1169\u11A8","\u110B\u116D\u1100\u1173\u11B7","\u110B\u116D\u110B\u1175\u11AF","\u110B\u116D\u110C\u1173\u11B7","\u110B\u116D\u110E\u1165\u11BC","\u110B\u116D\u11BC\u1100\u1175","\u110B\u116D\u11BC\u1109\u1165","\u110B\u116D\u11BC\u110B\u1165","\u110B\u116E\u1109\u1161\u11AB","\u110B\u116E\u1109\u1165\u11AB","\u110B\u116E\u1109\u1173\u11BC","\u110B\u116E\u110B\u1167\u11AB\u1112\u1175","\u110B\u116E\u110C\u1165\u11BC","\u110B\u116E\u110E\u1166\u1100\u116E\u11A8","\u110B\u116E\u1111\u1167\u11AB","\u110B\u116E\u11AB\u1103\u1169\u11BC","\u110B\u116E\u11AB\u1106\u1167\u11BC","\u110B\u116E\u11AB\u1107\u1161\u11AB","\u110B\u116E\u11AB\u110C\u1165\u11AB","\u110B\u116E\u11AB\u1112\u1162\u11BC","\u110B\u116E\u11AF\u1109\u1161\u11AB","\u110B\u116E\u11AF\u110B\u1173\u11B7","\u110B\u116E\u11B7\u110C\u1175\u11A8\u110B\u1175\u11B7","\u110B\u116E\u11BA\u110B\u1165\u1105\u1173\u11AB","\u110B\u116E\u11BA\u110B\u1173\u11B7","\u110B\u116F\u1102\u1161\u11A8","\u110B\u116F\u11AB\u1100\u1169","\u110B\u116F\u11AB\u1105\u1162","\u110B\u116F\u11AB\u1109\u1165","\u110B\u116F\u11AB\u1109\u116E\u11BC\u110B\u1175","\u110B\u116F\u11AB\u110B\u1175\u11AB","\u110B\u116F\u11AB\u110C\u1161\u11BC","\u110B\u116F\u11AB\u1111\u1175\u1109\u1173","\u110B\u116F\u11AF\u1100\u1173\u11B8","\u110B\u116F\u11AF\u1103\u1173\u110F\u1165\u11B8","\u110B\u116F\u11AF\u1109\u1166","\u110B\u116F\u11AF\u110B\u116D\u110B\u1175\u11AF","\u110B\u1170\u110B\u1175\u1110\u1165","\u110B\u1171\u1107\u1161\u11AB","\u110B\u1171\u1107\u1165\u11B8","\u110B\u1171\u1109\u1165\u11BC","\u110B\u1171\u110B\u116F\u11AB","\u110B\u1171\u1112\u1165\u11B7","\u110B\u1171\u1112\u1167\u11B8","\u110B\u1171\u11BA\u1109\u1161\u1105\u1161\u11B7","\u110B\u1172\u1102\u1161\u11AB\u1112\u1175","\u110B\u1172\u1105\u1165\u11B8","\u110B\u1172\u1106\u1167\u11BC","\u110B\u1172\u1106\u116E\u11AF","\u110B\u1172\u1109\u1161\u11AB","\u110B\u1172\u110C\u1165\u11A8","\u110B\u1172\u110E\u1175\u110B\u116F\u11AB","\u110B\u1172\u1112\u1161\u11A8","\u110B\u1172\u1112\u1162\u11BC","\u110B\u1172\u1112\u1167\u11BC","\u110B\u1172\u11A8\u1100\u116E\u11AB","\u110B\u1172\u11A8\u1109\u1161\u11BC","\u110B\u1172\u11A8\u1109\u1175\u11B8","\u110B\u1172\u11A8\u110E\u1166","\u110B\u1173\u11AB\u1112\u1162\u11BC","\u110B\u1173\u11B7\u1105\u1167\u11A8","\u110B\u1173\u11B7\u1105\u116D","\u110B\u1173\u11B7\u1107\u1161\u11AB","\u110B\u1173\u11B7\u1109\u1165\u11BC","\u110B\u1173\u11B7\u1109\u1175\u11A8","\u110B\u1173\u11B7\u110B\u1161\u11A8","\u110B\u1173\u11B7\u110C\u116E","\u110B\u1174\u1100\u1167\u11AB","\u110B\u1174\u1102\u1169\u11AB","\u110B\u1174\u1106\u116E\u11AB","\u110B\u1174\u1107\u1169\u11A8","\u110B\u1174\u1109\u1175\u11A8","\u110B\u1174\u1109\u1175\u11B7","\u110B\u1174\u110B\u116C\u1105\u1169","\u110B\u1174\u110B\u116D\u11A8","\u110B\u1174\u110B\u116F\u11AB","\u110B\u1174\u1112\u1161\u11A8","\u110B\u1175\u1100\u1165\u11BA","\u110B\u1175\u1100\u1169\u11BA","\u110B\u1175\u1102\u1167\u11B7","\u110B\u1175\u1102\u1169\u11B7","\u110B\u1175\u1103\u1161\u11AF","\u110B\u1175\u1103\u1162\u1105\u1169","\u110B\u1175\u1103\u1169\u11BC","\u110B\u1175\u1105\u1165\u11C2\u1100\u1166","\u110B\u1175\u1105\u1167\u11A8\u1109\u1165","\u110B\u1175\u1105\u1169\u11AB\u110C\u1165\u11A8","\u110B\u1175\u1105\u1173\u11B7","\u110B\u1175\u1106\u1175\u11AB","\u110B\u1175\u1107\u1161\u11AF\u1109\u1169","\u110B\u1175\u1107\u1167\u11AF","\u110B\u1175\u1107\u116E\u11AF","\u110B\u1175\u1108\u1161\u11AF","\u110B\u1175\u1109\u1161\u11BC","\u110B\u1175\u1109\u1165\u11BC","\u110B\u1175\u1109\u1173\u11AF","\u110B\u1175\u110B\u1163\u1100\u1175","\u110B\u1175\u110B\u116D\u11BC","\u110B\u1175\u110B\u116E\u11BA","\u110B\u1175\u110B\u116F\u11AF","\u110B\u1175\u110B\u1173\u11A8\u1100\u1169","\u110B\u1175\u110B\u1175\u11A8","\u110B\u1175\u110C\u1165\u11AB","\u110B\u1175\u110C\u116E\u11BC","\u110B\u1175\u1110\u1173\u11AE\u1102\u1161\u11AF","\u110B\u1175\u1110\u1173\u11AF","\u110B\u1175\u1112\u1169\u11AB","\u110B\u1175\u11AB\u1100\u1161\u11AB","\u110B\u1175\u11AB\u1100\u1167\u11A8","\u110B\u1175\u11AB\u1100\u1169\u11BC","\u110B\u1175\u11AB\u1100\u116E","\u110B\u1175\u11AB\u1100\u1173\u11AB","\u110B\u1175\u11AB\u1100\u1175","\u110B\u1175\u11AB\u1103\u1169","\u110B\u1175\u11AB\u1105\u1172","\u110B\u1175\u11AB\u1106\u116E\u11AF","\u110B\u1175\u11AB\u1109\u1162\u11BC","\u110B\u1175\u11AB\u1109\u116B","\u110B\u1175\u11AB\u110B\u1167\u11AB","\u110B\u1175\u11AB\u110B\u116F\u11AB","\u110B\u1175\u11AB\u110C\u1162","\u110B\u1175\u11AB\u110C\u1169\u11BC","\u110B\u1175\u11AB\u110E\u1165\u11AB","\u110B\u1175\u11AB\u110E\u1166","\u110B\u1175\u11AB\u1110\u1165\u1102\u1166\u11BA","\u110B\u1175\u11AB\u1112\u1161","\u110B\u1175\u11AB\u1112\u1167\u11BC","\u110B\u1175\u11AF\u1100\u1169\u11B8","\u110B\u1175\u11AF\u1100\u1175","\u110B\u1175\u11AF\u1103\u1161\u11AB","\u110B\u1175\u11AF\u1103\u1162","\u110B\u1175\u11AF\u1103\u1173\u11BC","\u110B\u1175\u11AF\u1107\u1161\u11AB","\u110B\u1175\u11AF\u1107\u1169\u11AB","\u110B\u1175\u11AF\u1107\u116E","\u110B\u1175\u11AF\u1109\u1161\u11BC","\u110B\u1175\u11AF\u1109\u1162\u11BC","\u110B\u1175\u11AF\u1109\u1169\u11AB","\u110B\u1175\u11AF\u110B\u116D\u110B\u1175\u11AF","\u110B\u1175\u11AF\u110B\u116F\u11AF","\u110B\u1175\u11AF\u110C\u1165\u11BC","\u110B\u1175\u11AF\u110C\u1169\u11BC","\u110B\u1175\u11AF\u110C\u116E\u110B\u1175\u11AF","\u110B\u1175\u11AF\u110D\u1175\u11A8","\u110B\u1175\u11AF\u110E\u1166","\u110B\u1175\u11AF\u110E\u1175","\u110B\u1175\u11AF\u1112\u1162\u11BC","\u110B\u1175\u11AF\u1112\u116C\u110B\u116D\u11BC","\u110B\u1175\u11B7\u1100\u1173\u11B7","\u110B\u1175\u11B7\u1106\u116E","\u110B\u1175\u11B8\u1103\u1162","\u110B\u1175\u11B8\u1105\u1167\u11A8","\u110B\u1175\u11B8\u1106\u1161\u11BA","\u110B\u1175\u11B8\u1109\u1161","\u110B\u1175\u11B8\u1109\u116E\u11AF","\u110B\u1175\u11B8\u1109\u1175","\u110B\u1175\u11B8\u110B\u116F\u11AB","\u110B\u1175\u11B8\u110C\u1161\u11BC","\u110B\u1175\u11B8\u1112\u1161\u11A8","\u110C\u1161\u1100\u1161\u110B\u116D\u11BC","\u110C\u1161\u1100\u1167\u11A8","\u110C\u1161\u1100\u1173\u11A8","\u110C\u1161\u1103\u1169\u11BC","\u110C\u1161\u1105\u1161\u11BC","\u110C\u1161\u1107\u116E\u1109\u1175\u11B7","\u110C\u1161\u1109\u1175\u11A8","\u110C\u1161\u1109\u1175\u11AB","\u110C\u1161\u110B\u1167\u11AB","\u110C\u1161\u110B\u116F\u11AB","\u110C\u1161\u110B\u1172\u11AF","\u110C\u1161\u110C\u1165\u11AB\u1100\u1165","\u110C\u1161\u110C\u1165\u11BC","\u110C\u1161\u110C\u1169\u11AB\u1109\u1175\u11B7","\u110C\u1161\u1111\u1161\u11AB","\u110C\u1161\u11A8\u1100\u1161","\u110C\u1161\u11A8\u1102\u1167\u11AB","\u110C\u1161\u11A8\u1109\u1165\u11BC","\u110C\u1161\u11A8\u110B\u1165\u11B8","\u110C\u1161\u11A8\u110B\u116D\u11BC","\u110C\u1161\u11A8\u110B\u1173\u11AB\u1104\u1161\u11AF","\u110C\u1161\u11A8\u1111\u116E\u11B7","\u110C\u1161\u11AB\u1103\u1175","\u110C\u1161\u11AB\u1104\u1173\u11A8","\u110C\u1161\u11AB\u110E\u1175","\u110C\u1161\u11AF\u1106\u1169\u11BA","\u110C\u1161\u11B7\u1101\u1161\u11AB","\u110C\u1161\u11B7\u1109\u116E\u1112\u1161\u11B7","\u110C\u1161\u11B7\u1109\u1175","\u110C\u1161\u11B7\u110B\u1169\u11BA","\u110C\u1161\u11B7\u110C\u1161\u1105\u1175","\u110C\u1161\u11B8\u110C\u1175","\u110C\u1161\u11BC\u1100\u116A\u11AB","\u110C\u1161\u11BC\u1100\u116E\u11AB","\u110C\u1161\u11BC\u1100\u1175\u1100\u1161\u11AB","\u110C\u1161\u11BC\u1105\u1162","\u110C\u1161\u11BC\u1105\u1168","\u110C\u1161\u11BC\u1105\u1173","\u110C\u1161\u11BC\u1106\u1161","\u110C\u1161\u11BC\u1106\u1167\u11AB","\u110C\u1161\u11BC\u1106\u1169","\u110C\u1161\u11BC\u1106\u1175","\u110C\u1161\u11BC\u1107\u1175","\u110C\u1161\u11BC\u1109\u1161","\u110C\u1161\u11BC\u1109\u1169","\u110C\u1161\u11BC\u1109\u1175\u11A8","\u110C\u1161\u11BC\u110B\u1162\u110B\u1175\u11AB","\u110C\u1161\u11BC\u110B\u1175\u11AB","\u110C\u1161\u11BC\u110C\u1165\u11B7","\u110C\u1161\u11BC\u110E\u1161","\u110C\u1161\u11BC\u1112\u1161\u11A8\u1100\u1173\u11B7","\u110C\u1162\u1102\u1173\u11BC","\u110C\u1162\u1108\u1161\u11AF\u1105\u1175","\u110C\u1162\u1109\u1161\u11AB","\u110C\u1162\u1109\u1162\u11BC","\u110C\u1162\u110C\u1161\u11A8\u1102\u1167\u11AB","\u110C\u1162\u110C\u1165\u11BC","\u110C\u1162\u110E\u1162\u1100\u1175","\u110C\u1162\u1111\u1161\u11AB","\u110C\u1162\u1112\u1161\u11A8","\u110C\u1162\u1112\u116A\u11AF\u110B\u116D\u11BC","\u110C\u1165\u1100\u1165\u11BA","\u110C\u1165\u1100\u1169\u1105\u1175","\u110C\u1165\u1100\u1169\u11BA","\u110C\u1165\u1102\u1167\u11A8","\u110C\u1165\u1105\u1165\u11AB","\u110C\u1165\u1105\u1165\u11C2\u1100\u1166","\u110C\u1165\u1107\u1165\u11AB","\u110C\u1165\u110B\u116E\u11AF","\u110C\u1165\u110C\u1165\u11AF\u1105\u1169","\u110C\u1165\u110E\u116E\u11A8","\u110C\u1165\u11A8\u1100\u1173\u11A8","\u110C\u1165\u11A8\u1103\u1161\u11BC\u1112\u1175","\u110C\u1165\u11A8\u1109\u1165\u11BC","\u110C\u1165\u11A8\u110B\u116D\u11BC","\u110C\u1165\u11A8\u110B\u1173\u11BC","\u110C\u1165\u11AB\u1100\u1162","\u110C\u1165\u11AB\u1100\u1169\u11BC","\u110C\u1165\u11AB\u1100\u1175","\u110C\u1165\u11AB\u1103\u1161\u11AF","\u110C\u1165\u11AB\u1105\u1161\u1103\u1169","\u110C\u1165\u11AB\u1106\u1161\u11BC","\u110C\u1165\u11AB\u1106\u116E\u11AB","\u110C\u1165\u11AB\u1107\u1161\u11AB","\u110C\u1165\u11AB\u1107\u116E","\u110C\u1165\u11AB\u1109\u1166","\u110C\u1165\u11AB\u1109\u1175","\u110C\u1165\u11AB\u110B\u116D\u11BC","\u110C\u1165\u11AB\u110C\u1161","\u110C\u1165\u11AB\u110C\u1162\u11BC","\u110C\u1165\u11AB\u110C\u116E","\u110C\u1165\u11AB\u110E\u1165\u11AF","\u110C\u1165\u11AB\u110E\u1166","\u110C\u1165\u11AB\u1110\u1169\u11BC","\u110C\u1165\u11AB\u1112\u1167","\u110C\u1165\u11AB\u1112\u116E","\u110C\u1165\u11AF\u1103\u1162","\u110C\u1165\u11AF\u1106\u1161\u11BC","\u110C\u1165\u11AF\u1107\u1161\u11AB","\u110C\u1165\u11AF\u110B\u1163\u11A8","\u110C\u1165\u11AF\u110E\u1161","\u110C\u1165\u11B7\u1100\u1165\u11B7","\u110C\u1165\u11B7\u1109\u116E","\u110C\u1165\u11B7\u1109\u1175\u11B7","\u110C\u1165\u11B7\u110B\u116F\u11AB","\u110C\u1165\u11B7\u110C\u1165\u11B7","\u110C\u1165\u11B7\u110E\u1161","\u110C\u1165\u11B8\u1100\u1173\u11AB","\u110C\u1165\u11B8\u1109\u1175","\u110C\u1165\u11B8\u110E\u1169\u11A8","\u110C\u1165\u11BA\u1100\u1161\u1105\u1161\u11A8","\u110C\u1165\u11BC\u1100\u1165\u110C\u1161\u11BC","\u110C\u1165\u11BC\u1103\u1169","\u110C\u1165\u11BC\u1105\u1172\u110C\u1161\u11BC","\u110C\u1165\u11BC\u1105\u1175","\u110C\u1165\u11BC\u1106\u1161\u11AF","\u110C\u1165\u11BC\u1106\u1167\u11AB","\u110C\u1165\u11BC\u1106\u116E\u11AB","\u110C\u1165\u11BC\u1107\u1161\u11AB\u1103\u1162","\u110C\u1165\u11BC\u1107\u1169","\u110C\u1165\u11BC\u1107\u116E","\u110C\u1165\u11BC\u1107\u1175","\u110C\u1165\u11BC\u1109\u1161\u11BC","\u110C\u1165\u11BC\u1109\u1165\u11BC","\u110C\u1165\u11BC\u110B\u1169","\u110C\u1165\u11BC\u110B\u116F\u11AB","\u110C\u1165\u11BC\u110C\u1161\u11BC","\u110C\u1165\u11BC\u110C\u1175","\u110C\u1165\u11BC\u110E\u1175","\u110C\u1165\u11BC\u1112\u116A\u11A8\u1112\u1175","\u110C\u1166\u1100\u1169\u11BC","\u110C\u1166\u1100\u116A\u110C\u1165\u11B7","\u110C\u1166\u1103\u1162\u1105\u1169","\u110C\u1166\u1106\u1169\u11A8","\u110C\u1166\u1107\u1161\u11AF","\u110C\u1166\u1107\u1165\u11B8","\u110C\u1166\u1109\u1161\u11BA\u1102\u1161\u11AF","\u110C\u1166\u110B\u1161\u11AB","\u110C\u1166\u110B\u1175\u11AF","\u110C\u1166\u110C\u1161\u11A8","\u110C\u1166\u110C\u116E\u1103\u1169","\u110C\u1166\u110E\u116E\u11AF","\u110C\u1166\u1111\u116E\u11B7","\u110C\u1166\u1112\u1161\u11AB","\u110C\u1169\u1100\u1161\u11A8","\u110C\u1169\u1100\u1165\u11AB","\u110C\u1169\u1100\u1173\u11B7","\u110C\u1169\u1100\u1175\u11BC","\u110C\u1169\u1106\u1167\u11BC","\u110C\u1169\u1106\u1175\u1105\u116D","\u110C\u1169\u1109\u1161\u11BC","\u110C\u1169\u1109\u1165\u11AB","\u110C\u1169\u110B\u116D\u11BC\u1112\u1175","\u110C\u1169\u110C\u1165\u11AF","\u110C\u1169\u110C\u1165\u11BC","\u110C\u1169\u110C\u1175\u11A8","\u110C\u1169\u11AB\u1103\u1162\u11BA\u1106\u1161\u11AF","\u110C\u1169\u11AB\u110C\u1162","\u110C\u1169\u11AF\u110B\u1165\u11B8","\u110C\u1169\u11AF\u110B\u1173\u11B7","\u110C\u1169\u11BC\u1100\u116D","\u110C\u1169\u11BC\u1105\u1169","\u110C\u1169\u11BC\u1105\u1172","\u110C\u1169\u11BC\u1109\u1169\u1105\u1175","\u110C\u1169\u11BC\u110B\u1165\u11B8\u110B\u116F\u11AB","\u110C\u1169\u11BC\u110C\u1169\u11BC","\u110C\u1169\u11BC\u1112\u1161\u11B8","\u110C\u116A\u1109\u1165\u11A8","\u110C\u116C\u110B\u1175\u11AB","\u110C\u116E\u1100\u116A\u11AB\u110C\u1165\u11A8","\u110C\u116E\u1105\u1173\u11B7","\u110C\u116E\u1106\u1161\u11AF","\u110C\u116E\u1106\u1165\u1102\u1175","\u110C\u116E\u1106\u1165\u11A8","\u110C\u116E\u1106\u116E\u11AB","\u110C\u116E\u1106\u1175\u11AB","\u110C\u116E\u1107\u1161\u11BC","\u110C\u116E\u1107\u1167\u11AB","\u110C\u116E\u1109\u1175\u11A8","\u110C\u116E\u110B\u1175\u11AB","\u110C\u116E\u110B\u1175\u11AF","\u110C\u116E\u110C\u1161\u11BC","\u110C\u116E\u110C\u1165\u11AB\u110C\u1161","\u110C\u116E\u1110\u1162\u11A8","\u110C\u116E\u11AB\u1107\u1175","\u110C\u116E\u11AF\u1100\u1165\u1105\u1175","\u110C\u116E\u11AF\u1100\u1175","\u110C\u116E\u11AF\u1106\u116E\u1102\u1174","\u110C\u116E\u11BC\u1100\u1161\u11AB","\u110C\u116E\u11BC\u1100\u1168\u1107\u1161\u11BC\u1109\u1169\u11BC","\u110C\u116E\u11BC\u1100\u116E\u11A8","\u110C\u116E\u11BC\u1102\u1167\u11AB","\u110C\u116E\u11BC\u1103\u1161\u11AB","\u110C\u116E\u11BC\u1103\u1169\u11A8","\u110C\u116E\u11BC\u1107\u1161\u11AB","\u110C\u116E\u11BC\u1107\u116E","\u110C\u116E\u11BC\u1109\u1166","\u110C\u116E\u11BC\u1109\u1169\u1100\u1175\u110B\u1165\u11B8","\u110C\u116E\u11BC\u1109\u116E\u11AB","\u110C\u116E\u11BC\u110B\u1161\u11BC","\u110C\u116E\u11BC\u110B\u116D","\u110C\u116E\u11BC\u1112\u1161\u11A8\u1100\u116D","\u110C\u1173\u11A8\u1109\u1165\u11A8","\u110C\u1173\u11A8\u1109\u1175","\u110C\u1173\u11AF\u1100\u1165\u110B\u116E\u11B7","\u110C\u1173\u11BC\u1100\u1161","\u110C\u1173\u11BC\u1100\u1165","\u110C\u1173\u11BC\u1100\u116F\u11AB","\u110C\u1173\u11BC\u1109\u1161\u11BC","\u110C\u1173\u11BC\u1109\u1166","\u110C\u1175\u1100\u1161\u11A8","\u110C\u1175\u1100\u1161\u11B8","\u110C\u1175\u1100\u1167\u11BC","\u110C\u1175\u1100\u1173\u11A8\u1112\u1175","\u110C\u1175\u1100\u1173\u11B7","\u110C\u1175\u1100\u1173\u11B8","\u110C\u1175\u1102\u1173\u11BC","\u110C\u1175\u1105\u1173\u11B7\u1100\u1175\u11AF","\u110C\u1175\u1105\u1175\u1109\u1161\u11AB","\u110C\u1175\u1107\u1161\u11BC","\u110C\u1175\u1107\u116E\u11BC","\u110C\u1175\u1109\u1175\u11A8","\u110C\u1175\u110B\u1167\u11A8","\u110C\u1175\u110B\u116E\u1100\u1162","\u110C\u1175\u110B\u116F\u11AB","\u110C\u1175\u110C\u1165\u11A8","\u110C\u1175\u110C\u1165\u11B7","\u110C\u1175\u110C\u1175\u11AB","\u110C\u1175\u110E\u116E\u11AF","\u110C\u1175\u11A8\u1109\u1165\u11AB","\u110C\u1175\u11A8\u110B\u1165\u11B8","\u110C\u1175\u11A8\u110B\u116F\u11AB","\u110C\u1175\u11A8\u110C\u1161\u11BC","\u110C\u1175\u11AB\u1100\u1173\u11B8","\u110C\u1175\u11AB\u1103\u1169\u11BC","\u110C\u1175\u11AB\u1105\u1169","\u110C\u1175\u11AB\u1105\u116D","\u110C\u1175\u11AB\u1105\u1175","\u110C\u1175\u11AB\u110D\u1161","\u110C\u1175\u11AB\u110E\u1161\u11AF","\u110C\u1175\u11AB\u110E\u116E\u11AF","\u110C\u1175\u11AB\u1110\u1169\u11BC","\u110C\u1175\u11AB\u1112\u1162\u11BC","\u110C\u1175\u11AF\u1106\u116E\u11AB","\u110C\u1175\u11AF\u1107\u1167\u11BC","\u110C\u1175\u11AF\u1109\u1165","\u110C\u1175\u11B7\u110C\u1161\u11A8","\u110C\u1175\u11B8\u1103\u1161\u11AB","\u110C\u1175\u11B8\u110B\u1161\u11AB","\u110C\u1175\u11B8\u110C\u116E\u11BC","\u110D\u1161\u110C\u1173\u11BC","\u110D\u1175\u1101\u1165\u1100\u1175","\u110E\u1161\u1102\u1161\u11B7","\u110E\u1161\u1105\u1161\u1105\u1175","\u110E\u1161\u1105\u1163\u11BC","\u110E\u1161\u1105\u1175\u11B7","\u110E\u1161\u1107\u1167\u11AF","\u110E\u1161\u1109\u1165\u11AB","\u110E\u1161\u110E\u1173\u11B7","\u110E\u1161\u11A8\u1100\u1161\u11A8","\u110E\u1161\u11AB\u1106\u116E\u11AF","\u110E\u1161\u11AB\u1109\u1165\u11BC","\u110E\u1161\u11B7\u1100\u1161","\u110E\u1161\u11B7\u1100\u1175\u1105\u1173\u11B7","\u110E\u1161\u11B7\u1109\u1162","\u110E\u1161\u11B7\u1109\u1165\u11A8","\u110E\u1161\u11B7\u110B\u1167","\u110E\u1161\u11B7\u110B\u116C","\u110E\u1161\u11B7\u110C\u1169","\u110E\u1161\u11BA\u110C\u1161\u11AB","\u110E\u1161\u11BC\u1100\u1161","\u110E\u1161\u11BC\u1100\u1169","\u110E\u1161\u11BC\u1100\u116E","\u110E\u1161\u11BC\u1106\u116E\u11AB","\u110E\u1161\u11BC\u1107\u1161\u11A9","\u110E\u1161\u11BC\u110C\u1161\u11A8","\u110E\u1161\u11BC\u110C\u1169","\u110E\u1162\u1102\u1165\u11AF","\u110E\u1162\u110C\u1165\u11B7","\u110E\u1162\u11A8\u1100\u1161\u1107\u1161\u11BC","\u110E\u1162\u11A8\u1107\u1161\u11BC","\u110E\u1162\u11A8\u1109\u1161\u11BC","\u110E\u1162\u11A8\u110B\u1175\u11B7","\u110E\u1162\u11B7\u1111\u1175\u110B\u1165\u11AB","\u110E\u1165\u1107\u1165\u11AF","\u110E\u1165\u110B\u1173\u11B7","\u110E\u1165\u11AB\u1100\u116E\u11A8","\u110E\u1165\u11AB\u1103\u116E\u11BC","\u110E\u1165\u11AB\u110C\u1161\u11BC","\u110E\u1165\u11AB\u110C\u1162","\u110E\u1165\u11AB\u110E\u1165\u11AB\u1112\u1175","\u110E\u1165\u11AF\u1103\u1169","\u110E\u1165\u11AF\u110C\u1165\u1112\u1175","\u110E\u1165\u11AF\u1112\u1161\u11A8","\u110E\u1165\u11BA\u1102\u1161\u11AF","\u110E\u1165\u11BA\u110D\u1162","\u110E\u1165\u11BC\u1102\u1167\u11AB","\u110E\u1165\u11BC\u1107\u1161\u110C\u1175","\u110E\u1165\u11BC\u1109\u1169","\u110E\u1165\u11BC\u110E\u116E\u11AB","\u110E\u1166\u1100\u1168","\u110E\u1166\u1105\u1167\u11A8","\u110E\u1166\u110B\u1169\u11AB","\u110E\u1166\u110B\u1172\u11A8","\u110E\u1166\u110C\u116E\u11BC","\u110E\u1166\u1112\u1165\u11B7","\u110E\u1169\u1103\u1173\u11BC\u1112\u1161\u11A8\u1109\u1162\u11BC","\u110E\u1169\u1107\u1161\u11AB","\u110E\u1169\u1107\u1161\u11B8","\u110E\u1169\u1109\u1161\u11BC\u1112\u116A","\u110E\u1169\u1109\u116E\u11AB","\u110E\u1169\u110B\u1167\u1105\u1173\u11B7","\u110E\u1169\u110B\u116F\u11AB","\u110E\u1169\u110C\u1165\u1102\u1167\u11A8","\u110E\u1169\u110C\u1165\u11B7","\u110E\u1169\u110E\u1165\u11BC","\u110E\u1169\u110F\u1169\u11AF\u1105\u1175\u11BA","\u110E\u1169\u11BA\u1107\u116E\u11AF","\u110E\u1169\u11BC\u1100\u1161\u11A8","\u110E\u1169\u11BC\u1105\u1175","\u110E\u1169\u11BC\u110C\u1161\u11BC","\u110E\u116A\u11AF\u110B\u1167\u11BC","\u110E\u116C\u1100\u1173\u11AB","\u110E\u116C\u1109\u1161\u11BC","\u110E\u116C\u1109\u1165\u11AB","\u110E\u116C\u1109\u1175\u11AB","\u110E\u116C\u110B\u1161\u11A8","\u110E\u116C\u110C\u1169\u11BC","\u110E\u116E\u1109\u1165\u11A8","\u110E\u116E\u110B\u1165\u11A8","\u110E\u116E\u110C\u1175\u11AB","\u110E\u116E\u110E\u1165\u11AB","\u110E\u116E\u110E\u1173\u11A8","\u110E\u116E\u11A8\u1100\u116E","\u110E\u116E\u11A8\u1109\u1169","\u110E\u116E\u11A8\u110C\u1166","\u110E\u116E\u11A8\u1112\u1161","\u110E\u116E\u11AF\u1100\u1173\u11AB","\u110E\u116E\u11AF\u1107\u1161\u11AF","\u110E\u116E\u11AF\u1109\u1161\u11AB","\u110E\u116E\u11AF\u1109\u1175\u11AB","\u110E\u116E\u11AF\u110B\u1167\u11AB","\u110E\u116E\u11AF\u110B\u1175\u11B8","\u110E\u116E\u11AF\u110C\u1161\u11BC","\u110E\u116E\u11AF\u1111\u1161\u11AB","\u110E\u116E\u11BC\u1100\u1167\u11A8","\u110E\u116E\u11BC\u1100\u1169","\u110E\u116E\u11BC\u1103\u1169\u11AF","\u110E\u116E\u11BC\u1107\u116E\u11AB\u1112\u1175","\u110E\u116E\u11BC\u110E\u1165\u11BC\u1103\u1169","\u110E\u1171\u110B\u1165\u11B8","\u110E\u1171\u110C\u1175\u11A8","\u110E\u1171\u1112\u1163\u11BC","\u110E\u1175\u110B\u1163\u11A8","\u110E\u1175\u11AB\u1100\u116E","\u110E\u1175\u11AB\u110E\u1165\u11A8","\u110E\u1175\u11AF\u1109\u1175\u11B8","\u110E\u1175\u11AF\u110B\u116F\u11AF","\u110E\u1175\u11AF\u1111\u1161\u11AB","\u110E\u1175\u11B7\u1103\u1162","\u110E\u1175\u11B7\u1106\u116E\u11A8","\u110E\u1175\u11B7\u1109\u1175\u11AF","\u110E\u1175\u11BA\u1109\u1169\u11AF","\u110E\u1175\u11BC\u110E\u1161\u11AB","\u110F\u1161\u1106\u1166\u1105\u1161","\u110F\u1161\u110B\u116E\u11AB\u1110\u1165","\u110F\u1161\u11AF\u1100\u116E\u11A8\u1109\u116E","\u110F\u1162\u1105\u1175\u11A8\u1110\u1165","\u110F\u1162\u11B7\u1111\u1165\u1109\u1173","\u110F\u1162\u11B7\u1111\u1166\u110B\u1175\u11AB","\u110F\u1165\u1110\u1173\u11AB","\u110F\u1165\u11AB\u1103\u1175\u1109\u1167\u11AB","\u110F\u1165\u11AF\u1105\u1165","\u110F\u1165\u11B7\u1111\u1172\u1110\u1165","\u110F\u1169\u1101\u1175\u1105\u1175","\u110F\u1169\u1106\u1175\u1103\u1175","\u110F\u1169\u11AB\u1109\u1165\u1110\u1173","\u110F\u1169\u11AF\u1105\u1161","\u110F\u1169\u11B7\u1111\u1173\u11AF\u1105\u1166\u11A8\u1109\u1173","\u110F\u1169\u11BC\u1102\u1161\u1106\u116E\u11AF","\u110F\u116B\u1100\u1161\u11B7","\u110F\u116E\u1103\u1166\u1110\u1161","\u110F\u1173\u1105\u1175\u11B7","\u110F\u1173\u11AB\u1100\u1175\u11AF","\u110F\u1173\u11AB\u1104\u1161\u11AF","\u110F\u1173\u11AB\u1109\u1169\u1105\u1175","\u110F\u1173\u11AB\u110B\u1161\u1103\u1173\u11AF","\u110F\u1173\u11AB\u110B\u1165\u1106\u1165\u1102\u1175","\u110F\u1173\u11AB\u110B\u1175\u11AF","\u110F\u1173\u11AB\u110C\u1165\u11AF","\u110F\u1173\u11AF\u1105\u1162\u1109\u1175\u11A8","\u110F\u1173\u11AF\u1105\u1165\u11B8","\u110F\u1175\u11AF\u1105\u1169","\u1110\u1161\u110B\u1175\u11B8","\u1110\u1161\u110C\u1161\u1100\u1175","\u1110\u1161\u11A8\u1100\u116E","\u1110\u1161\u11A8\u110C\u1161","\u1110\u1161\u11AB\u1109\u1162\u11BC","\u1110\u1162\u1100\u116F\u11AB\u1103\u1169","\u1110\u1162\u110B\u1163\u11BC","\u1110\u1162\u1111\u116E\u11BC","\u1110\u1162\u11A8\u1109\u1175","\u1110\u1162\u11AF\u1105\u1165\u11AB\u1110\u1173","\u1110\u1165\u1102\u1165\u11AF","\u1110\u1165\u1106\u1175\u1102\u1165\u11AF","\u1110\u1166\u1102\u1175\u1109\u1173","\u1110\u1166\u1109\u1173\u1110\u1173","\u1110\u1166\u110B\u1175\u1107\u1173\u11AF","\u1110\u1166\u11AF\u1105\u1166\u1107\u1175\u110C\u1165\u11AB","\u1110\u1169\u1105\u1169\u11AB","\u1110\u1169\u1106\u1161\u1110\u1169","\u1110\u1169\u110B\u116D\u110B\u1175\u11AF","\u1110\u1169\u11BC\u1100\u1168","\u1110\u1169\u11BC\u1100\u116A","\u1110\u1169\u11BC\u1105\u1169","\u1110\u1169\u11BC\u1109\u1175\u11AB","\u1110\u1169\u11BC\u110B\u1167\u11A8","\u1110\u1169\u11BC\u110B\u1175\u11AF","\u1110\u1169\u11BC\u110C\u1161\u11BC","\u1110\u1169\u11BC\u110C\u1166","\u1110\u1169\u11BC\u110C\u1173\u11BC","\u1110\u1169\u11BC\u1112\u1161\u11B8","\u1110\u1169\u11BC\u1112\u116A","\u1110\u116C\u1100\u1173\u11AB","\u1110\u116C\u110B\u116F\u11AB","\u1110\u116C\u110C\u1175\u11A8\u1100\u1173\u11B7","\u1110\u1171\u1100\u1175\u11B7","\u1110\u1173\u1105\u1165\u11A8","\u1110\u1173\u11A8\u1100\u1173\u11B8","\u1110\u1173\u11A8\u1107\u1167\u11AF","\u1110\u1173\u11A8\u1109\u1165\u11BC","\u1110\u1173\u11A8\u1109\u116E","\u1110\u1173\u11A8\u110C\u1175\u11BC","\u1110\u1173\u11A8\u1112\u1175","\u1110\u1173\u11AB\u1110\u1173\u11AB\u1112\u1175","\u1110\u1175\u1109\u1167\u110E\u1173","\u1111\u1161\u1105\u1161\u11AB\u1109\u1162\u11A8","\u1111\u1161\u110B\u1175\u11AF","\u1111\u1161\u110E\u116E\u11AF\u1109\u1169","\u1111\u1161\u11AB\u1100\u1167\u11AF","\u1111\u1161\u11AB\u1103\u1161\u11AB","\u1111\u1161\u11AB\u1106\u1162","\u1111\u1161\u11AB\u1109\u1161","\u1111\u1161\u11AF\u1109\u1175\u11B8","\u1111\u1161\u11AF\u110B\u116F\u11AF","\u1111\u1161\u11B8\u1109\u1169\u11BC","\u1111\u1162\u1109\u1167\u11AB","\u1111\u1162\u11A8\u1109\u1173","\u1111\u1162\u11A8\u1109\u1175\u1106\u1175\u11AF\u1105\u1175","\u1111\u1162\u11AB\u1110\u1175","\u1111\u1165\u1109\u1166\u11AB\u1110\u1173","\u1111\u1166\u110B\u1175\u11AB\u1110\u1173","\u1111\u1167\u11AB\u1100\u1167\u11AB","\u1111\u1167\u11AB\u110B\u1174","\u1111\u1167\u11AB\u110C\u1175","\u1111\u1167\u11AB\u1112\u1175","\u1111\u1167\u11BC\u1100\u1161","\u1111\u1167\u11BC\u1100\u1172\u11AB","\u1111\u1167\u11BC\u1109\u1162\u11BC","\u1111\u1167\u11BC\u1109\u1169","\u1111\u1167\u11BC\u110B\u1163\u11BC","\u1111\u1167\u11BC\u110B\u1175\u11AF","\u1111\u1167\u11BC\u1112\u116A","\u1111\u1169\u1109\u1173\u1110\u1165","\u1111\u1169\u110B\u1175\u11AB\u1110\u1173","\u1111\u1169\u110C\u1161\u11BC","\u1111\u1169\u1112\u1161\u11B7","\u1111\u116D\u1106\u1167\u11AB","\u1111\u116D\u110C\u1165\u11BC","\u1111\u116D\u110C\u116E\u11AB","\u1111\u116D\u1112\u1167\u11AB","\u1111\u116E\u11B7\u1106\u1169\u11A8","\u1111\u116E\u11B7\u110C\u1175\u11AF","\u1111\u116E\u11BC\u1100\u1167\u11BC","\u1111\u116E\u11BC\u1109\u1169\u11A8","\u1111\u116E\u11BC\u1109\u1173\u11B8","\u1111\u1173\u1105\u1161\u11BC\u1109\u1173","\u1111\u1173\u1105\u1175\u11AB\u1110\u1165","\u1111\u1173\u11AF\u1105\u1161\u1109\u1173\u1110\u1175\u11A8","\u1111\u1175\u1100\u1169\u11AB","\u1111\u1175\u1106\u1161\u11BC","\u1111\u1175\u110B\u1161\u1102\u1169","\u1111\u1175\u11AF\u1105\u1173\u11B7","\u1111\u1175\u11AF\u1109\u116E","\u1111\u1175\u11AF\u110B\u116D","\u1111\u1175\u11AF\u110C\u1161","\u1111\u1175\u11AF\u1110\u1169\u11BC","\u1111\u1175\u11BC\u1100\u1168","\u1112\u1161\u1102\u1173\u1102\u1175\u11B7","\u1112\u1161\u1102\u1173\u11AF","\u1112\u1161\u1103\u1173\u110B\u1170\u110B\u1165","\u1112\u1161\u1105\u116E\u11BA\u1107\u1161\u11B7","\u1112\u1161\u1107\u1161\u11AB\u1100\u1175","\u1112\u1161\u1109\u116E\u11A8\u110C\u1175\u11B8","\u1112\u1161\u1109\u116E\u11AB","\u1112\u1161\u110B\u1167\u1110\u1173\u11AB","\u1112\u1161\u110C\u1175\u1106\u1161\u11AB","\u1112\u1161\u110E\u1165\u11AB","\u1112\u1161\u1111\u116E\u11B7","\u1112\u1161\u1111\u1175\u11AF","\u1112\u1161\u11A8\u1100\u116A","\u1112\u1161\u11A8\u1100\u116D","\u1112\u1161\u11A8\u1100\u1173\u11B8","\u1112\u1161\u11A8\u1100\u1175","\u1112\u1161\u11A8\u1102\u1167\u11AB","\u1112\u1161\u11A8\u1105\u1167\u11A8","\u1112\u1161\u11A8\u1107\u1165\u11AB","\u1112\u1161\u11A8\u1107\u116E\u1106\u1169","\u1112\u1161\u11A8\u1107\u1175","\u1112\u1161\u11A8\u1109\u1162\u11BC","\u1112\u1161\u11A8\u1109\u116E\u11AF","\u1112\u1161\u11A8\u1109\u1173\u11B8","\u1112\u1161\u11A8\u110B\u116D\u11BC\u1111\u116E\u11B7","\u1112\u1161\u11A8\u110B\u116F\u11AB","\u1112\u1161\u11A8\u110B\u1171","\u1112\u1161\u11A8\u110C\u1161","\u1112\u1161\u11A8\u110C\u1165\u11B7","\u1112\u1161\u11AB\u1100\u1168","\u1112\u1161\u11AB\u1100\u1173\u11AF","\u1112\u1161\u11AB\u1101\u1165\u1107\u1165\u11AB\u110B\u1166","\u1112\u1161\u11AB\u1102\u1161\u11BD","\u1112\u1161\u11AB\u1102\u116E\u11AB","\u1112\u1161\u11AB\u1103\u1169\u11BC\u110B\u1161\u11AB","\u1112\u1161\u11AB\u1104\u1162","\u1112\u1161\u11AB\u1105\u1161\u1109\u1161\u11AB","\u1112\u1161\u11AB\u1106\u1161\u1103\u1175","\u1112\u1161\u11AB\u1106\u116E\u11AB","\u1112\u1161\u11AB\u1107\u1165\u11AB","\u1112\u1161\u11AB\u1107\u1169\u11A8","\u1112\u1161\u11AB\u1109\u1175\u11A8","\u1112\u1161\u11AB\u110B\u1167\u1105\u1173\u11B7","\u1112\u1161\u11AB\u110D\u1169\u11A8","\u1112\u1161\u11AF\u1106\u1165\u1102\u1175","\u1112\u1161\u11AF\u110B\u1161\u1107\u1165\u110C\u1175","\u1112\u1161\u11AF\u110B\u1175\u11AB","\u1112\u1161\u11B7\u1101\u1166","\u1112\u1161\u11B7\u1107\u116E\u1105\u1169","\u1112\u1161\u11B8\u1100\u1167\u11A8","\u1112\u1161\u11B8\u1105\u1175\u110C\u1165\u11A8","\u1112\u1161\u11BC\u1100\u1169\u11BC","\u1112\u1161\u11BC\u1100\u116E","\u1112\u1161\u11BC\u1109\u1161\u11BC","\u1112\u1161\u11BC\u110B\u1174","\u1112\u1162\u1100\u1167\u11AF","\u1112\u1162\u1100\u116E\u11AB","\u1112\u1162\u1103\u1161\u11B8","\u1112\u1162\u1103\u1161\u11BC","\u1112\u1162\u1106\u116E\u11AF","\u1112\u1162\u1109\u1165\u11A8","\u1112\u1162\u1109\u1165\u11AF","\u1112\u1162\u1109\u116E\u110B\u116D\u11A8\u110C\u1161\u11BC","\u1112\u1162\u110B\u1161\u11AB","\u1112\u1162\u11A8\u1109\u1175\u11B7","\u1112\u1162\u11AB\u1103\u1173\u1107\u1162\u11A8","\u1112\u1162\u11B7\u1107\u1165\u1100\u1165","\u1112\u1162\u11BA\u1107\u1167\u11C0","\u1112\u1162\u11BA\u1109\u1161\u11AF","\u1112\u1162\u11BC\u1103\u1169\u11BC","\u1112\u1162\u11BC\u1107\u1169\u11A8","\u1112\u1162\u11BC\u1109\u1161","\u1112\u1162\u11BC\u110B\u116E\u11AB","\u1112\u1162\u11BC\u110B\u1171","\u1112\u1163\u11BC\u1100\u1175","\u1112\u1163\u11BC\u1109\u1161\u11BC","\u1112\u1163\u11BC\u1109\u116E","\u1112\u1165\u1105\u1161\u11A8","\u1112\u1165\u110B\u116D\u11BC","\u1112\u1166\u11AF\u1100\u1175","\u1112\u1167\u11AB\u1100\u116A\u11AB","\u1112\u1167\u11AB\u1100\u1173\u11B7","\u1112\u1167\u11AB\u1103\u1162","\u1112\u1167\u11AB\u1109\u1161\u11BC","\u1112\u1167\u11AB\u1109\u1175\u11AF","\u1112\u1167\u11AB\u110C\u1161\u11BC","\u1112\u1167\u11AB\u110C\u1162","\u1112\u1167\u11AB\u110C\u1175","\u1112\u1167\u11AF\u110B\u1162\u11A8","\u1112\u1167\u11B8\u1105\u1167\u11A8","\u1112\u1167\u11BC\u1107\u116E","\u1112\u1167\u11BC\u1109\u1161","\u1112\u1167\u11BC\u1109\u116E","\u1112\u1167\u11BC\u1109\u1175\u11A8","\u1112\u1167\u11BC\u110C\u1166","\u1112\u1167\u11BC\u1110\u1162","\u1112\u1167\u11BC\u1111\u1167\u11AB","\u1112\u1168\u1110\u1162\u11A8","\u1112\u1169\u1100\u1175\u1109\u1175\u11B7","\u1112\u1169\u1102\u1161\u11B7","\u1112\u1169\u1105\u1161\u11BC\u110B\u1175","\u1112\u1169\u1107\u1161\u11A8","\u1112\u1169\u1110\u1166\u11AF","\u1112\u1169\u1112\u1173\u11B8","\u1112\u1169\u11A8\u1109\u1175","\u1112\u1169\u11AF\u1105\u1169","\u1112\u1169\u11B7\u1111\u1166\u110B\u1175\u110C\u1175","\u1112\u1169\u11BC\u1107\u1169","\u1112\u1169\u11BC\u1109\u116E","\u1112\u1169\u11BC\u110E\u1161","\u1112\u116A\u1106\u1167\u11AB","\u1112\u116A\u1107\u116E\u11AB","\u1112\u116A\u1109\u1161\u11AF","\u1112\u116A\u110B\u116D\u110B\u1175\u11AF","\u1112\u116A\u110C\u1161\u11BC","\u1112\u116A\u1112\u1161\u11A8","\u1112\u116A\u11A8\u1107\u1169","\u1112\u116A\u11A8\u110B\u1175\u11AB","\u1112\u116A\u11A8\u110C\u1161\u11BC","\u1112\u116A\u11A8\u110C\u1165\u11BC","\u1112\u116A\u11AB\u1100\u1161\u11B8","\u1112\u116A\u11AB\u1100\u1167\u11BC","\u1112\u116A\u11AB\u110B\u1167\u11BC","\u1112\u116A\u11AB\u110B\u1172\u11AF","\u1112\u116A\u11AB\u110C\u1161","\u1112\u116A\u11AF\u1100\u1175","\u1112\u116A\u11AF\u1103\u1169\u11BC","\u1112\u116A\u11AF\u1107\u1161\u11AF\u1112\u1175","\u1112\u116A\u11AF\u110B\u116D\u11BC","\u1112\u116A\u11AF\u110D\u1161\u11A8","\u1112\u116C\u1100\u1167\u11AB","\u1112\u116C\u1100\u116A\u11AB","\u1112\u116C\u1107\u1169\u11A8","\u1112\u116C\u1109\u1162\u11A8","\u1112\u116C\u110B\u116F\u11AB","\u1112\u116C\u110C\u1161\u11BC","\u1112\u116C\u110C\u1165\u11AB","\u1112\u116C\u11BA\u1109\u116E","\u1112\u116C\u11BC\u1103\u1161\u11AB\u1107\u1169\u1103\u1169","\u1112\u116D\u110B\u1172\u11AF\u110C\u1165\u11A8","\u1112\u116E\u1107\u1161\u11AB","\u1112\u116E\u110E\u116E\u11BA\u1100\u1161\u1105\u116E","\u1112\u116E\u11AB\u1105\u1167\u11AB","\u1112\u116F\u11AF\u110A\u1175\u11AB","\u1112\u1172\u1109\u1175\u11A8","\u1112\u1172\u110B\u1175\u11AF","\u1112\u1172\u11BC\u1102\u1162","\u1112\u1173\u1105\u1173\u11B7","\u1112\u1173\u11A8\u1107\u1162\u11A8","\u1112\u1173\u11A8\u110B\u1175\u11AB","\u1112\u1173\u11AB\u110C\u1165\u11A8","\u1112\u1173\u11AB\u1112\u1175","\u1112\u1173\u11BC\u1106\u1175","\u1112\u1173\u11BC\u1107\u116E\u11AB","\u1112\u1174\u1100\u1169\u11A8","\u1112\u1174\u1106\u1161\u11BC","\u1112\u1174\u1109\u1162\u11BC","\u1112\u1174\u11AB\u1109\u1162\u11A8","\u1112\u1175\u11B7\u1101\u1165\u11BA"]'), Ps = JSON.parse('["abaisser","abandon","abdiquer","abeille","abolir","aborder","aboutir","aboyer","abrasif","abreuver","abriter","abroger","abrupt","absence","absolu","absurde","abusif","abyssal","acade\u0301mie","acajou","acarien","accabler","accepter","acclamer","accolade","accroche","accuser","acerbe","achat","acheter","aciduler","acier","acompte","acque\u0301rir","acronyme","acteur","actif","actuel","adepte","ade\u0301quat","adhe\u0301sif","adjectif","adjuger","admettre","admirer","adopter","adorer","adoucir","adresse","adroit","adulte","adverbe","ae\u0301rer","ae\u0301ronef","affaire","affecter","affiche","affreux","affubler","agacer","agencer","agile","agiter","agrafer","agre\u0301able","agrume","aider","aiguille","ailier","aimable","aisance","ajouter","ajuster","alarmer","alchimie","alerte","alge\u0300bre","algue","alie\u0301ner","aliment","alle\u0301ger","alliage","allouer","allumer","alourdir","alpaga","altesse","alve\u0301ole","amateur","ambigu","ambre","ame\u0301nager","amertume","amidon","amiral","amorcer","amour","amovible","amphibie","ampleur","amusant","analyse","anaphore","anarchie","anatomie","ancien","ane\u0301antir","angle","angoisse","anguleux","animal","annexer","annonce","annuel","anodin","anomalie","anonyme","anormal","antenne","antidote","anxieux","apaiser","ape\u0301ritif","aplanir","apologie","appareil","appeler","apporter","appuyer","aquarium","aqueduc","arbitre","arbuste","ardeur","ardoise","argent","arlequin","armature","armement","armoire","armure","arpenter","arracher","arriver","arroser","arsenic","arte\u0301riel","article","aspect","asphalte","aspirer","assaut","asservir","assiette","associer","assurer","asticot","astre","astuce","atelier","atome","atrium","atroce","attaque","attentif","attirer","attraper","aubaine","auberge","audace","audible","augurer","aurore","automne","autruche","avaler","avancer","avarice","avenir","averse","aveugle","aviateur","avide","avion","aviser","avoine","avouer","avril","axial","axiome","badge","bafouer","bagage","baguette","baignade","balancer","balcon","baleine","balisage","bambin","bancaire","bandage","banlieue","bannie\u0300re","banquier","barbier","baril","baron","barque","barrage","bassin","bastion","bataille","bateau","batterie","baudrier","bavarder","belette","be\u0301lier","belote","be\u0301ne\u0301fice","berceau","berger","berline","bermuda","besace","besogne","be\u0301tail","beurre","biberon","bicycle","bidule","bijou","bilan","bilingue","billard","binaire","biologie","biopsie","biotype","biscuit","bison","bistouri","bitume","bizarre","blafard","blague","blanchir","blessant","blinder","blond","bloquer","blouson","bobard","bobine","boire","boiser","bolide","bonbon","bondir","bonheur","bonifier","bonus","bordure","borne","botte","boucle","boueux","bougie","boulon","bouquin","bourse","boussole","boutique","boxeur","branche","brasier","brave","brebis","bre\u0300che","breuvage","bricoler","brigade","brillant","brioche","brique","brochure","broder","bronzer","brousse","broyeur","brume","brusque","brutal","bruyant","buffle","buisson","bulletin","bureau","burin","bustier","butiner","butoir","buvable","buvette","cabanon","cabine","cachette","cadeau","cadre","cafe\u0301ine","caillou","caisson","calculer","calepin","calibre","calmer","calomnie","calvaire","camarade","came\u0301ra","camion","campagne","canal","caneton","canon","cantine","canular","capable","caporal","caprice","capsule","capter","capuche","carabine","carbone","caresser","caribou","carnage","carotte","carreau","carton","cascade","casier","casque","cassure","causer","caution","cavalier","caverne","caviar","ce\u0301dille","ceinture","ce\u0301leste","cellule","cendrier","censurer","central","cercle","ce\u0301re\u0301bral","cerise","cerner","cerveau","cesser","chagrin","chaise","chaleur","chambre","chance","chapitre","charbon","chasseur","chaton","chausson","chavirer","chemise","chenille","che\u0301quier","chercher","cheval","chien","chiffre","chignon","chime\u0300re","chiot","chlorure","chocolat","choisir","chose","chouette","chrome","chute","cigare","cigogne","cimenter","cine\u0301ma","cintrer","circuler","cirer","cirque","citerne","citoyen","citron","civil","clairon","clameur","claquer","classe","clavier","client","cligner","climat","clivage","cloche","clonage","cloporte","cobalt","cobra","cocasse","cocotier","coder","codifier","coffre","cogner","cohe\u0301sion","coiffer","coincer","cole\u0300re","colibri","colline","colmater","colonel","combat","come\u0301die","commande","compact","concert","conduire","confier","congeler","connoter","consonne","contact","convexe","copain","copie","corail","corbeau","cordage","corniche","corpus","correct","corte\u0300ge","cosmique","costume","coton","coude","coupure","courage","couteau","couvrir","coyote","crabe","crainte","cravate","crayon","cre\u0301ature","cre\u0301diter","cre\u0301meux","creuser","crevette","cribler","crier","cristal","crite\u0300re","croire","croquer","crotale","crucial","cruel","crypter","cubique","cueillir","cuille\u0300re","cuisine","cuivre","culminer","cultiver","cumuler","cupide","curatif","curseur","cyanure","cycle","cylindre","cynique","daigner","damier","danger","danseur","dauphin","de\u0301battre","de\u0301biter","de\u0301border","de\u0301brider","de\u0301butant","de\u0301caler","de\u0301cembre","de\u0301chirer","de\u0301cider","de\u0301clarer","de\u0301corer","de\u0301crire","de\u0301cupler","de\u0301dale","de\u0301ductif","de\u0301esse","de\u0301fensif","de\u0301filer","de\u0301frayer","de\u0301gager","de\u0301givrer","de\u0301glutir","de\u0301grafer","de\u0301jeuner","de\u0301lice","de\u0301loger","demander","demeurer","de\u0301molir","de\u0301nicher","de\u0301nouer","dentelle","de\u0301nuder","de\u0301part","de\u0301penser","de\u0301phaser","de\u0301placer","de\u0301poser","de\u0301ranger","de\u0301rober","de\u0301sastre","descente","de\u0301sert","de\u0301signer","de\u0301sobe\u0301ir","dessiner","destrier","de\u0301tacher","de\u0301tester","de\u0301tourer","de\u0301tresse","devancer","devenir","deviner","devoir","diable","dialogue","diamant","dicter","diffe\u0301rer","dige\u0301rer","digital","digne","diluer","dimanche","diminuer","dioxyde","directif","diriger","discuter","disposer","dissiper","distance","divertir","diviser","docile","docteur","dogme","doigt","domaine","domicile","dompter","donateur","donjon","donner","dopamine","dortoir","dorure","dosage","doseur","dossier","dotation","douanier","double","douceur","douter","doyen","dragon","draper","dresser","dribbler","droiture","duperie","duplexe","durable","durcir","dynastie","e\u0301blouir","e\u0301carter","e\u0301charpe","e\u0301chelle","e\u0301clairer","e\u0301clipse","e\u0301clore","e\u0301cluse","e\u0301cole","e\u0301conomie","e\u0301corce","e\u0301couter","e\u0301craser","e\u0301cre\u0301mer","e\u0301crivain","e\u0301crou","e\u0301cume","e\u0301cureuil","e\u0301difier","e\u0301duquer","effacer","effectif","effigie","effort","effrayer","effusion","e\u0301galiser","e\u0301garer","e\u0301jecter","e\u0301laborer","e\u0301largir","e\u0301lectron","e\u0301le\u0301gant","e\u0301le\u0301phant","e\u0301le\u0300ve","e\u0301ligible","e\u0301litisme","e\u0301loge","e\u0301lucider","e\u0301luder","emballer","embellir","embryon","e\u0301meraude","e\u0301mission","emmener","e\u0301motion","e\u0301mouvoir","empereur","employer","emporter","emprise","e\u0301mulsion","encadrer","enche\u0300re","enclave","encoche","endiguer","endosser","endroit","enduire","e\u0301nergie","enfance","enfermer","enfouir","engager","engin","englober","e\u0301nigme","enjamber","enjeu","enlever","ennemi","ennuyeux","enrichir","enrobage","enseigne","entasser","entendre","entier","entourer","entraver","e\u0301nume\u0301rer","envahir","enviable","envoyer","enzyme","e\u0301olien","e\u0301paissir","e\u0301pargne","e\u0301patant","e\u0301paule","e\u0301picerie","e\u0301pide\u0301mie","e\u0301pier","e\u0301pilogue","e\u0301pine","e\u0301pisode","e\u0301pitaphe","e\u0301poque","e\u0301preuve","e\u0301prouver","e\u0301puisant","e\u0301querre","e\u0301quipe","e\u0301riger","e\u0301rosion","erreur","e\u0301ruption","escalier","espadon","espe\u0300ce","espie\u0300gle","espoir","esprit","esquiver","essayer","essence","essieu","essorer","estime","estomac","estrade","e\u0301tage\u0300re","e\u0301taler","e\u0301tanche","e\u0301tatique","e\u0301teindre","e\u0301tendoir","e\u0301ternel","e\u0301thanol","e\u0301thique","ethnie","e\u0301tirer","e\u0301toffer","e\u0301toile","e\u0301tonnant","e\u0301tourdir","e\u0301trange","e\u0301troit","e\u0301tude","euphorie","e\u0301valuer","e\u0301vasion","e\u0301ventail","e\u0301vidence","e\u0301viter","e\u0301volutif","e\u0301voquer","exact","exage\u0301rer","exaucer","exceller","excitant","exclusif","excuse","exe\u0301cuter","exemple","exercer","exhaler","exhorter","exigence","exiler","exister","exotique","expe\u0301dier","explorer","exposer","exprimer","exquis","extensif","extraire","exulter","fable","fabuleux","facette","facile","facture","faiblir","falaise","fameux","famille","farceur","farfelu","farine","farouche","fasciner","fatal","fatigue","faucon","fautif","faveur","favori","fe\u0301brile","fe\u0301conder","fe\u0301de\u0301rer","fe\u0301lin","femme","fe\u0301mur","fendoir","fe\u0301odal","fermer","fe\u0301roce","ferveur","festival","feuille","feutre","fe\u0301vrier","fiasco","ficeler","fictif","fide\u0300le","figure","filature","filetage","filie\u0300re","filleul","filmer","filou","filtrer","financer","finir","fiole","firme","fissure","fixer","flairer","flamme","flasque","flatteur","fle\u0301au","fle\u0300che","fleur","flexion","flocon","flore","fluctuer","fluide","fluvial","folie","fonderie","fongible","fontaine","forcer","forgeron","formuler","fortune","fossile","foudre","fouge\u0300re","fouiller","foulure","fourmi","fragile","fraise","franchir","frapper","frayeur","fre\u0301gate","freiner","frelon","fre\u0301mir","fre\u0301ne\u0301sie","fre\u0300re","friable","friction","frisson","frivole","froid","fromage","frontal","frotter","fruit","fugitif","fuite","fureur","furieux","furtif","fusion","futur","gagner","galaxie","galerie","gambader","garantir","gardien","garnir","garrigue","gazelle","gazon","ge\u0301ant","ge\u0301latine","ge\u0301lule","gendarme","ge\u0301ne\u0301ral","ge\u0301nie","genou","gentil","ge\u0301ologie","ge\u0301ome\u0300tre","ge\u0301ranium","germe","gestuel","geyser","gibier","gicler","girafe","givre","glace","glaive","glisser","globe","gloire","glorieux","golfeur","gomme","gonfler","gorge","gorille","goudron","gouffre","goulot","goupille","gourmand","goutte","graduel","graffiti","graine","grand","grappin","gratuit","gravir","grenat","griffure","griller","grimper","grogner","gronder","grotte","groupe","gruger","grutier","gruye\u0300re","gue\u0301pard","guerrier","guide","guimauve","guitare","gustatif","gymnaste","gyrostat","habitude","hachoir","halte","hameau","hangar","hanneton","haricot","harmonie","harpon","hasard","he\u0301lium","he\u0301matome","herbe","he\u0301risson","hermine","he\u0301ron","he\u0301siter","heureux","hiberner","hibou","hilarant","histoire","hiver","homard","hommage","homoge\u0300ne","honneur","honorer","honteux","horde","horizon","horloge","hormone","horrible","houleux","housse","hublot","huileux","humain","humble","humide","humour","hurler","hydromel","hygie\u0300ne","hymne","hypnose","idylle","ignorer","iguane","illicite","illusion","image","imbiber","imiter","immense","immobile","immuable","impact","impe\u0301rial","implorer","imposer","imprimer","imputer","incarner","incendie","incident","incliner","incolore","indexer","indice","inductif","ine\u0301dit","ineptie","inexact","infini","infliger","informer","infusion","inge\u0301rer","inhaler","inhiber","injecter","injure","innocent","inoculer","inonder","inscrire","insecte","insigne","insolite","inspirer","instinct","insulter","intact","intense","intime","intrigue","intuitif","inutile","invasion","inventer","inviter","invoquer","ironique","irradier","irre\u0301el","irriter","isoler","ivoire","ivresse","jaguar","jaillir","jambe","janvier","jardin","jauger","jaune","javelot","jetable","jeton","jeudi","jeunesse","joindre","joncher","jongler","joueur","jouissif","journal","jovial","joyau","joyeux","jubiler","jugement","junior","jupon","juriste","justice","juteux","juve\u0301nile","kayak","kimono","kiosque","label","labial","labourer","lace\u0301rer","lactose","lagune","laine","laisser","laitier","lambeau","lamelle","lampe","lanceur","langage","lanterne","lapin","largeur","larme","laurier","lavabo","lavoir","lecture","le\u0301gal","le\u0301ger","le\u0301gume","lessive","lettre","levier","lexique","le\u0301zard","liasse","libe\u0301rer","libre","licence","licorne","lie\u0300ge","lie\u0300vre","ligature","ligoter","ligue","limer","limite","limonade","limpide","line\u0301aire","lingot","lionceau","liquide","lisie\u0300re","lister","lithium","litige","littoral","livreur","logique","lointain","loisir","lombric","loterie","louer","lourd","loutre","louve","loyal","lubie","lucide","lucratif","lueur","lugubre","luisant","lumie\u0300re","lunaire","lundi","luron","lutter","luxueux","machine","magasin","magenta","magique","maigre","maillon","maintien","mairie","maison","majorer","malaxer","male\u0301fice","malheur","malice","mallette","mammouth","mandater","maniable","manquant","manteau","manuel","marathon","marbre","marchand","mardi","maritime","marqueur","marron","marteler","mascotte","massif","mate\u0301riel","matie\u0300re","matraque","maudire","maussade","mauve","maximal","me\u0301chant","me\u0301connu","me\u0301daille","me\u0301decin","me\u0301diter","me\u0301duse","meilleur","me\u0301lange","me\u0301lodie","membre","me\u0301moire","menacer","mener","menhir","mensonge","mentor","mercredi","me\u0301rite","merle","messager","mesure","me\u0301tal","me\u0301te\u0301ore","me\u0301thode","me\u0301tier","meuble","miauler","microbe","miette","mignon","migrer","milieu","million","mimique","mince","mine\u0301ral","minimal","minorer","minute","miracle","miroiter","missile","mixte","mobile","moderne","moelleux","mondial","moniteur","monnaie","monotone","monstre","montagne","monument","moqueur","morceau","morsure","mortier","moteur","motif","mouche","moufle","moulin","mousson","mouton","mouvant","multiple","munition","muraille","mure\u0300ne","murmure","muscle","muse\u0301um","musicien","mutation","muter","mutuel","myriade","myrtille","myste\u0300re","mythique","nageur","nappe","narquois","narrer","natation","nation","nature","naufrage","nautique","navire","ne\u0301buleux","nectar","ne\u0301faste","ne\u0301gation","ne\u0301gliger","ne\u0301gocier","neige","nerveux","nettoyer","neurone","neutron","neveu","niche","nickel","nitrate","niveau","noble","nocif","nocturne","noirceur","noisette","nomade","nombreux","nommer","normatif","notable","notifier","notoire","nourrir","nouveau","novateur","novembre","novice","nuage","nuancer","nuire","nuisible","nume\u0301ro","nuptial","nuque","nutritif","obe\u0301ir","objectif","obliger","obscur","observer","obstacle","obtenir","obturer","occasion","occuper","oce\u0301an","octobre","octroyer","octupler","oculaire","odeur","odorant","offenser","officier","offrir","ogive","oiseau","oisillon","olfactif","olivier","ombrage","omettre","onctueux","onduler","one\u0301reux","onirique","opale","opaque","ope\u0301rer","opinion","opportun","opprimer","opter","optique","orageux","orange","orbite","ordonner","oreille","organe","orgueil","orifice","ornement","orque","ortie","osciller","osmose","ossature","otarie","ouragan","ourson","outil","outrager","ouvrage","ovation","oxyde","oxyge\u0300ne","ozone","paisible","palace","palmare\u0300s","palourde","palper","panache","panda","pangolin","paniquer","panneau","panorama","pantalon","papaye","papier","papoter","papyrus","paradoxe","parcelle","paresse","parfumer","parler","parole","parrain","parsemer","partager","parure","parvenir","passion","paste\u0300que","paternel","patience","patron","pavillon","pavoiser","payer","paysage","peigne","peintre","pelage","pe\u0301lican","pelle","pelouse","peluche","pendule","pe\u0301ne\u0301trer","pe\u0301nible","pensif","pe\u0301nurie","pe\u0301pite","pe\u0301plum","perdrix","perforer","pe\u0301riode","permuter","perplexe","persil","perte","peser","pe\u0301tale","petit","pe\u0301trir","peuple","pharaon","phobie","phoque","photon","phrase","physique","piano","pictural","pie\u0300ce","pierre","pieuvre","pilote","pinceau","pipette","piquer","pirogue","piscine","piston","pivoter","pixel","pizza","placard","plafond","plaisir","planer","plaque","plastron","plateau","pleurer","plexus","pliage","plomb","plonger","pluie","plumage","pochette","poe\u0301sie","poe\u0300te","pointe","poirier","poisson","poivre","polaire","policier","pollen","polygone","pommade","pompier","ponctuel","ponde\u0301rer","poney","portique","position","posse\u0301der","posture","potager","poteau","potion","pouce","poulain","poumon","pourpre","poussin","pouvoir","prairie","pratique","pre\u0301cieux","pre\u0301dire","pre\u0301fixe","pre\u0301lude","pre\u0301nom","pre\u0301sence","pre\u0301texte","pre\u0301voir","primitif","prince","prison","priver","proble\u0300me","proce\u0301der","prodige","profond","progre\u0300s","proie","projeter","prologue","promener","propre","prospe\u0300re","prote\u0301ger","prouesse","proverbe","prudence","pruneau","psychose","public","puceron","puiser","pulpe","pulsar","punaise","punitif","pupitre","purifier","puzzle","pyramide","quasar","querelle","question","quie\u0301tude","quitter","quotient","racine","raconter","radieux","ragondin","raideur","raisin","ralentir","rallonge","ramasser","rapide","rasage","ratisser","ravager","ravin","rayonner","re\u0301actif","re\u0301agir","re\u0301aliser","re\u0301animer","recevoir","re\u0301citer","re\u0301clamer","re\u0301colter","recruter","reculer","recycler","re\u0301diger","redouter","refaire","re\u0301flexe","re\u0301former","refrain","refuge","re\u0301galien","re\u0301gion","re\u0301glage","re\u0301gulier","re\u0301ite\u0301rer","rejeter","rejouer","relatif","relever","relief","remarque","reme\u0300de","remise","remonter","remplir","remuer","renard","renfort","renifler","renoncer","rentrer","renvoi","replier","reporter","reprise","reptile","requin","re\u0301serve","re\u0301sineux","re\u0301soudre","respect","rester","re\u0301sultat","re\u0301tablir","retenir","re\u0301ticule","retomber","retracer","re\u0301union","re\u0301ussir","revanche","revivre","re\u0301volte","re\u0301vulsif","richesse","rideau","rieur","rigide","rigoler","rincer","riposter","risible","risque","rituel","rival","rivie\u0300re","rocheux","romance","rompre","ronce","rondin","roseau","rosier","rotatif","rotor","rotule","rouge","rouille","rouleau","routine","royaume","ruban","rubis","ruche","ruelle","rugueux","ruiner","ruisseau","ruser","rustique","rythme","sabler","saboter","sabre","sacoche","safari","sagesse","saisir","salade","salive","salon","saluer","samedi","sanction","sanglier","sarcasme","sardine","saturer","saugrenu","saumon","sauter","sauvage","savant","savonner","scalpel","scandale","sce\u0301le\u0301rat","sce\u0301nario","sceptre","sche\u0301ma","science","scinder","score","scrutin","sculpter","se\u0301ance","se\u0301cable","se\u0301cher","secouer","se\u0301cre\u0301ter","se\u0301datif","se\u0301duire","seigneur","se\u0301jour","se\u0301lectif","semaine","sembler","semence","se\u0301minal","se\u0301nateur","sensible","sentence","se\u0301parer","se\u0301quence","serein","sergent","se\u0301rieux","serrure","se\u0301rum","service","se\u0301same","se\u0301vir","sevrage","sextuple","side\u0301ral","sie\u0300cle","sie\u0301ger","siffler","sigle","signal","silence","silicium","simple","since\u0300re","sinistre","siphon","sirop","sismique","situer","skier","social","socle","sodium","soigneux","soldat","soleil","solitude","soluble","sombre","sommeil","somnoler","sonde","songeur","sonnette","sonore","sorcier","sortir","sosie","sottise","soucieux","soudure","souffle","soulever","soupape","source","soutirer","souvenir","spacieux","spatial","spe\u0301cial","sphe\u0300re","spiral","stable","station","sternum","stimulus","stipuler","strict","studieux","stupeur","styliste","sublime","substrat","subtil","subvenir","succe\u0300s","sucre","suffixe","sugge\u0301rer","suiveur","sulfate","superbe","supplier","surface","suricate","surmener","surprise","sursaut","survie","suspect","syllabe","symbole","syme\u0301trie","synapse","syntaxe","syste\u0300me","tabac","tablier","tactile","tailler","talent","talisman","talonner","tambour","tamiser","tangible","tapis","taquiner","tarder","tarif","tartine","tasse","tatami","tatouage","taupe","taureau","taxer","te\u0301moin","temporel","tenaille","tendre","teneur","tenir","tension","terminer","terne","terrible","te\u0301tine","texte","the\u0300me","the\u0301orie","the\u0301rapie","thorax","tibia","tie\u0300de","timide","tirelire","tiroir","tissu","titane","titre","tituber","toboggan","tole\u0301rant","tomate","tonique","tonneau","toponyme","torche","tordre","tornade","torpille","torrent","torse","tortue","totem","toucher","tournage","tousser","toxine","traction","trafic","tragique","trahir","train","trancher","travail","tre\u0300fle","tremper","tre\u0301sor","treuil","triage","tribunal","tricoter","trilogie","triomphe","tripler","triturer","trivial","trombone","tronc","tropical","troupeau","tuile","tulipe","tumulte","tunnel","turbine","tuteur","tutoyer","tuyau","tympan","typhon","typique","tyran","ubuesque","ultime","ultrason","unanime","unifier","union","unique","unitaire","univers","uranium","urbain","urticant","usage","usine","usuel","usure","utile","utopie","vacarme","vaccin","vagabond","vague","vaillant","vaincre","vaisseau","valable","valise","vallon","valve","vampire","vanille","vapeur","varier","vaseux","vassal","vaste","vecteur","vedette","ve\u0301ge\u0301tal","ve\u0301hicule","veinard","ve\u0301loce","vendredi","ve\u0301ne\u0301rer","venger","venimeux","ventouse","verdure","ve\u0301rin","vernir","verrou","verser","vertu","veston","ve\u0301te\u0301ran","ve\u0301tuste","vexant","vexer","viaduc","viande","victoire","vidange","vide\u0301o","vignette","vigueur","vilain","village","vinaigre","violon","vipe\u0300re","virement","virtuose","virus","visage","viseur","vision","visqueux","visuel","vital","vitesse","viticole","vitrine","vivace","vivipare","vocation","voguer","voile","voisin","voiture","volaille","volcan","voltiger","volume","vorace","vortex","voter","vouloir","voyage","voyelle","wagon","xe\u0301non","yacht","ze\u0300bre","ze\u0301nith","zeste","zoologie"]'), Os = JSON.parse('["abaco","abbaglio","abbinato","abete","abisso","abolire","abrasivo","abrogato","accadere","accenno","accusato","acetone","achille","acido","acqua","acre","acrilico","acrobata","acuto","adagio","addebito","addome","adeguato","aderire","adipe","adottare","adulare","affabile","affetto","affisso","affranto","aforisma","afoso","africano","agave","agente","agevole","aggancio","agire","agitare","agonismo","agricolo","agrumeto","aguzzo","alabarda","alato","albatro","alberato","albo","albume","alce","alcolico","alettone","alfa","algebra","aliante","alibi","alimento","allagato","allegro","allievo","allodola","allusivo","almeno","alogeno","alpaca","alpestre","altalena","alterno","alticcio","altrove","alunno","alveolo","alzare","amalgama","amanita","amarena","ambito","ambrato","ameba","america","ametista","amico","ammasso","ammenda","ammirare","ammonito","amore","ampio","ampliare","amuleto","anacardo","anagrafe","analista","anarchia","anatra","anca","ancella","ancora","andare","andrea","anello","angelo","angolare","angusto","anima","annegare","annidato","anno","annuncio","anonimo","anticipo","anzi","apatico","apertura","apode","apparire","appetito","appoggio","approdo","appunto","aprile","arabica","arachide","aragosta","araldica","arancio","aratura","arazzo","arbitro","archivio","ardito","arenile","argento","argine","arguto","aria","armonia","arnese","arredato","arringa","arrosto","arsenico","arso","artefice","arzillo","asciutto","ascolto","asepsi","asettico","asfalto","asino","asola","aspirato","aspro","assaggio","asse","assoluto","assurdo","asta","astenuto","astice","astratto","atavico","ateismo","atomico","atono","attesa","attivare","attorno","attrito","attuale","ausilio","austria","autista","autonomo","autunno","avanzato","avere","avvenire","avviso","avvolgere","azione","azoto","azzimo","azzurro","babele","baccano","bacino","baco","badessa","badilata","bagnato","baita","balcone","baldo","balena","ballata","balzano","bambino","bandire","baraonda","barbaro","barca","baritono","barlume","barocco","basilico","basso","batosta","battuto","baule","bava","bavosa","becco","beffa","belgio","belva","benda","benevole","benigno","benzina","bere","berlina","beta","bibita","bici","bidone","bifido","biga","bilancia","bimbo","binocolo","biologo","bipede","bipolare","birbante","birra","biscotto","bisesto","bisnonno","bisonte","bisturi","bizzarro","blando","blatta","bollito","bonifico","bordo","bosco","botanico","bottino","bozzolo","braccio","bradipo","brama","branca","bravura","bretella","brevetto","brezza","briglia","brillante","brindare","broccolo","brodo","bronzina","brullo","bruno","bubbone","buca","budino","buffone","buio","bulbo","buono","burlone","burrasca","bussola","busta","cadetto","caduco","calamaro","calcolo","calesse","calibro","calmo","caloria","cambusa","camerata","camicia","cammino","camola","campale","canapa","candela","cane","canino","canotto","cantina","capace","capello","capitolo","capogiro","cappero","capra","capsula","carapace","carcassa","cardo","carisma","carovana","carretto","cartolina","casaccio","cascata","caserma","caso","cassone","castello","casuale","catasta","catena","catrame","cauto","cavillo","cedibile","cedrata","cefalo","celebre","cellulare","cena","cenone","centesimo","ceramica","cercare","certo","cerume","cervello","cesoia","cespo","ceto","chela","chiaro","chicca","chiedere","chimera","china","chirurgo","chitarra","ciao","ciclismo","cifrare","cigno","cilindro","ciottolo","circa","cirrosi","citrico","cittadino","ciuffo","civetta","civile","classico","clinica","cloro","cocco","codardo","codice","coerente","cognome","collare","colmato","colore","colposo","coltivato","colza","coma","cometa","commando","comodo","computer","comune","conciso","condurre","conferma","congelare","coniuge","connesso","conoscere","consumo","continuo","convegno","coperto","copione","coppia","copricapo","corazza","cordata","coricato","cornice","corolla","corpo","corredo","corsia","cortese","cosmico","costante","cottura","covato","cratere","cravatta","creato","credere","cremoso","crescita","creta","criceto","crinale","crisi","critico","croce","cronaca","crostata","cruciale","crusca","cucire","cuculo","cugino","cullato","cupola","curatore","cursore","curvo","cuscino","custode","dado","daino","dalmata","damerino","daniela","dannoso","danzare","datato","davanti","davvero","debutto","decennio","deciso","declino","decollo","decreto","dedicato","definito","deforme","degno","delegare","delfino","delirio","delta","demenza","denotato","dentro","deposito","derapata","derivare","deroga","descritto","deserto","desiderio","desumere","detersivo","devoto","diametro","dicembre","diedro","difeso","diffuso","digerire","digitale","diluvio","dinamico","dinnanzi","dipinto","diploma","dipolo","diradare","dire","dirotto","dirupo","disagio","discreto","disfare","disgelo","disposto","distanza","disumano","dito","divano","divelto","dividere","divorato","doblone","docente","doganale","dogma","dolce","domato","domenica","dominare","dondolo","dono","dormire","dote","dottore","dovuto","dozzina","drago","druido","dubbio","dubitare","ducale","duna","duomo","duplice","duraturo","ebano","eccesso","ecco","eclissi","economia","edera","edicola","edile","editoria","educare","egemonia","egli","egoismo","egregio","elaborato","elargire","elegante","elencato","eletto","elevare","elfico","elica","elmo","elsa","eluso","emanato","emblema","emesso","emiro","emotivo","emozione","empirico","emulo","endemico","enduro","energia","enfasi","enoteca","entrare","enzima","epatite","epilogo","episodio","epocale","eppure","equatore","erario","erba","erboso","erede","eremita","erigere","ermetico","eroe","erosivo","errante","esagono","esame","esanime","esaudire","esca","esempio","esercito","esibito","esigente","esistere","esito","esofago","esortato","esoso","espanso","espresso","essenza","esso","esteso","estimare","estonia","estroso","esultare","etilico","etnico","etrusco","etto","euclideo","europa","evaso","evidenza","evitato","evoluto","evviva","fabbrica","faccenda","fachiro","falco","famiglia","fanale","fanfara","fango","fantasma","fare","farfalla","farinoso","farmaco","fascia","fastoso","fasullo","faticare","fato","favoloso","febbre","fecola","fede","fegato","felpa","feltro","femmina","fendere","fenomeno","fermento","ferro","fertile","fessura","festivo","fetta","feudo","fiaba","fiducia","fifa","figurato","filo","finanza","finestra","finire","fiore","fiscale","fisico","fiume","flacone","flamenco","flebo","flemma","florido","fluente","fluoro","fobico","focaccia","focoso","foderato","foglio","folata","folclore","folgore","fondente","fonetico","fonia","fontana","forbito","forchetta","foresta","formica","fornaio","foro","fortezza","forzare","fosfato","fosso","fracasso","frana","frassino","fratello","freccetta","frenata","fresco","frigo","frollino","fronde","frugale","frutta","fucilata","fucsia","fuggente","fulmine","fulvo","fumante","fumetto","fumoso","fune","funzione","fuoco","furbo","furgone","furore","fuso","futile","gabbiano","gaffe","galateo","gallina","galoppo","gambero","gamma","garanzia","garbo","garofano","garzone","gasdotto","gasolio","gastrico","gatto","gaudio","gazebo","gazzella","geco","gelatina","gelso","gemello","gemmato","gene","genitore","gennaio","genotipo","gergo","ghepardo","ghiaccio","ghisa","giallo","gilda","ginepro","giocare","gioiello","giorno","giove","girato","girone","gittata","giudizio","giurato","giusto","globulo","glutine","gnomo","gobba","golf","gomito","gommone","gonfio","gonna","governo","gracile","grado","grafico","grammo","grande","grattare","gravoso","grazia","greca","gregge","grifone","grigio","grinza","grotta","gruppo","guadagno","guaio","guanto","guardare","gufo","guidare","ibernato","icona","identico","idillio","idolo","idra","idrico","idrogeno","igiene","ignaro","ignorato","ilare","illeso","illogico","illudere","imballo","imbevuto","imbocco","imbuto","immane","immerso","immolato","impacco","impeto","impiego","importo","impronta","inalare","inarcare","inattivo","incanto","incendio","inchino","incisivo","incluso","incontro","incrocio","incubo","indagine","india","indole","inedito","infatti","infilare","inflitto","ingaggio","ingegno","inglese","ingordo","ingrosso","innesco","inodore","inoltrare","inondato","insano","insetto","insieme","insonnia","insulina","intasato","intero","intonaco","intuito","inumidire","invalido","invece","invito","iperbole","ipnotico","ipotesi","ippica","iride","irlanda","ironico","irrigato","irrorare","isolato","isotopo","isterico","istituto","istrice","italia","iterare","labbro","labirinto","lacca","lacerato","lacrima","lacuna","laddove","lago","lampo","lancetta","lanterna","lardoso","larga","laringe","lastra","latenza","latino","lattuga","lavagna","lavoro","legale","leggero","lembo","lentezza","lenza","leone","lepre","lesivo","lessato","lesto","letterale","leva","levigato","libero","lido","lievito","lilla","limatura","limitare","limpido","lineare","lingua","liquido","lira","lirica","lisca","lite","litigio","livrea","locanda","lode","logica","lombare","londra","longevo","loquace","lorenzo","loto","lotteria","luce","lucidato","lumaca","luminoso","lungo","lupo","luppolo","lusinga","lusso","lutto","macabro","macchina","macero","macinato","madama","magico","maglia","magnete","magro","maiolica","malafede","malgrado","malinteso","malsano","malto","malumore","mana","mancia","mandorla","mangiare","manifesto","mannaro","manovra","mansarda","mantide","manubrio","mappa","maratona","marcire","maretta","marmo","marsupio","maschera","massaia","mastino","materasso","matricola","mattone","maturo","mazurca","meandro","meccanico","mecenate","medesimo","meditare","mega","melassa","melis","melodia","meninge","meno","mensola","mercurio","merenda","merlo","meschino","mese","messere","mestolo","metallo","metodo","mettere","miagolare","mica","micelio","michele","microbo","midollo","miele","migliore","milano","milite","mimosa","minerale","mini","minore","mirino","mirtillo","miscela","missiva","misto","misurare","mitezza","mitigare","mitra","mittente","mnemonico","modello","modifica","modulo","mogano","mogio","mole","molosso","monastero","monco","mondina","monetario","monile","monotono","monsone","montato","monviso","mora","mordere","morsicato","mostro","motivato","motosega","motto","movenza","movimento","mozzo","mucca","mucosa","muffa","mughetto","mugnaio","mulatto","mulinello","multiplo","mummia","munto","muovere","murale","musa","muscolo","musica","mutevole","muto","nababbo","nafta","nanometro","narciso","narice","narrato","nascere","nastrare","naturale","nautica","naviglio","nebulosa","necrosi","negativo","negozio","nemmeno","neofita","neretto","nervo","nessuno","nettuno","neutrale","neve","nevrotico","nicchia","ninfa","nitido","nobile","nocivo","nodo","nome","nomina","nordico","normale","norvegese","nostrano","notare","notizia","notturno","novella","nucleo","nulla","numero","nuovo","nutrire","nuvola","nuziale","oasi","obbedire","obbligo","obelisco","oblio","obolo","obsoleto","occasione","occhio","occidente","occorrere","occultare","ocra","oculato","odierno","odorare","offerta","offrire","offuscato","oggetto","oggi","ognuno","olandese","olfatto","oliato","oliva","ologramma","oltre","omaggio","ombelico","ombra","omega","omissione","ondoso","onere","onice","onnivoro","onorevole","onta","operato","opinione","opposto","oracolo","orafo","ordine","orecchino","orefice","orfano","organico","origine","orizzonte","orma","ormeggio","ornativo","orologio","orrendo","orribile","ortensia","ortica","orzata","orzo","osare","oscurare","osmosi","ospedale","ospite","ossa","ossidare","ostacolo","oste","otite","otre","ottagono","ottimo","ottobre","ovale","ovest","ovino","oviparo","ovocito","ovunque","ovviare","ozio","pacchetto","pace","pacifico","padella","padrone","paese","paga","pagina","palazzina","palesare","pallido","palo","palude","pandoro","pannello","paolo","paonazzo","paprica","parabola","parcella","parere","pargolo","pari","parlato","parola","partire","parvenza","parziale","passivo","pasticca","patacca","patologia","pattume","pavone","peccato","pedalare","pedonale","peggio","peloso","penare","pendice","penisola","pennuto","penombra","pensare","pentola","pepe","pepita","perbene","percorso","perdonato","perforare","pergamena","periodo","permesso","perno","perplesso","persuaso","pertugio","pervaso","pesatore","pesista","peso","pestifero","petalo","pettine","petulante","pezzo","piacere","pianta","piattino","piccino","picozza","piega","pietra","piffero","pigiama","pigolio","pigro","pila","pilifero","pillola","pilota","pimpante","pineta","pinna","pinolo","pioggia","piombo","piramide","piretico","pirite","pirolisi","pitone","pizzico","placebo","planare","plasma","platano","plenario","pochezza","poderoso","podismo","poesia","poggiare","polenta","poligono","pollice","polmonite","polpetta","polso","poltrona","polvere","pomice","pomodoro","ponte","popoloso","porfido","poroso","porpora","porre","portata","posa","positivo","possesso","postulato","potassio","potere","pranzo","prassi","pratica","precluso","predica","prefisso","pregiato","prelievo","premere","prenotare","preparato","presenza","pretesto","prevalso","prima","principe","privato","problema","procura","produrre","profumo","progetto","prolunga","promessa","pronome","proposta","proroga","proteso","prova","prudente","prugna","prurito","psiche","pubblico","pudica","pugilato","pugno","pulce","pulito","pulsante","puntare","pupazzo","pupilla","puro","quadro","qualcosa","quasi","querela","quota","raccolto","raddoppio","radicale","radunato","raffica","ragazzo","ragione","ragno","ramarro","ramingo","ramo","randagio","rantolare","rapato","rapina","rappreso","rasatura","raschiato","rasente","rassegna","rastrello","rata","ravveduto","reale","recepire","recinto","recluta","recondito","recupero","reddito","redimere","regalato","registro","regola","regresso","relazione","remare","remoto","renna","replica","reprimere","reputare","resa","residente","responso","restauro","rete","retina","retorica","rettifica","revocato","riassunto","ribadire","ribelle","ribrezzo","ricarica","ricco","ricevere","riciclato","ricordo","ricreduto","ridicolo","ridurre","rifasare","riflesso","riforma","rifugio","rigare","rigettato","righello","rilassato","rilevato","rimanere","rimbalzo","rimedio","rimorchio","rinascita","rincaro","rinforzo","rinnovo","rinomato","rinsavito","rintocco","rinuncia","rinvenire","riparato","ripetuto","ripieno","riportare","ripresa","ripulire","risata","rischio","riserva","risibile","riso","rispetto","ristoro","risultato","risvolto","ritardo","ritegno","ritmico","ritrovo","riunione","riva","riverso","rivincita","rivolto","rizoma","roba","robotico","robusto","roccia","roco","rodaggio","rodere","roditore","rogito","rollio","romantico","rompere","ronzio","rosolare","rospo","rotante","rotondo","rotula","rovescio","rubizzo","rubrica","ruga","rullino","rumine","rumoroso","ruolo","rupe","russare","rustico","sabato","sabbiare","sabotato","sagoma","salasso","saldatura","salgemma","salivare","salmone","salone","saltare","saluto","salvo","sapere","sapido","saporito","saraceno","sarcasmo","sarto","sassoso","satellite","satira","satollo","saturno","savana","savio","saziato","sbadiglio","sbalzo","sbancato","sbarra","sbattere","sbavare","sbendare","sbirciare","sbloccato","sbocciato","sbrinare","sbruffone","sbuffare","scabroso","scadenza","scala","scambiare","scandalo","scapola","scarso","scatenare","scavato","scelto","scenico","scettro","scheda","schiena","sciarpa","scienza","scindere","scippo","sciroppo","scivolo","sclerare","scodella","scolpito","scomparto","sconforto","scoprire","scorta","scossone","scozzese","scriba","scrollare","scrutinio","scuderia","scultore","scuola","scuro","scusare","sdebitare","sdoganare","seccatura","secondo","sedano","seggiola","segnalato","segregato","seguito","selciato","selettivo","sella","selvaggio","semaforo","sembrare","seme","seminato","sempre","senso","sentire","sepolto","sequenza","serata","serbato","sereno","serio","serpente","serraglio","servire","sestina","setola","settimana","sfacelo","sfaldare","sfamato","sfarzoso","sfaticato","sfera","sfida","sfilato","sfinge","sfocato","sfoderare","sfogo","sfoltire","sforzato","sfratto","sfruttato","sfuggito","sfumare","sfuso","sgabello","sgarbato","sgonfiare","sgorbio","sgrassato","sguardo","sibilo","siccome","sierra","sigla","signore","silenzio","sillaba","simbolo","simpatico","simulato","sinfonia","singolo","sinistro","sino","sintesi","sinusoide","sipario","sisma","sistole","situato","slitta","slogatura","sloveno","smarrito","smemorato","smentito","smeraldo","smilzo","smontare","smottato","smussato","snellire","snervato","snodo","sobbalzo","sobrio","soccorso","sociale","sodale","soffitto","sogno","soldato","solenne","solido","sollazzo","solo","solubile","solvente","somatico","somma","sonda","sonetto","sonnifero","sopire","soppeso","sopra","sorgere","sorpasso","sorriso","sorso","sorteggio","sorvolato","sospiro","sosta","sottile","spada","spalla","spargere","spatola","spavento","spazzola","specie","spedire","spegnere","spelatura","speranza","spessore","spettrale","spezzato","spia","spigoloso","spillato","spinoso","spirale","splendido","sportivo","sposo","spranga","sprecare","spronato","spruzzo","spuntino","squillo","sradicare","srotolato","stabile","stacco","staffa","stagnare","stampato","stantio","starnuto","stasera","statuto","stelo","steppa","sterzo","stiletto","stima","stirpe","stivale","stizzoso","stonato","storico","strappo","stregato","stridulo","strozzare","strutto","stuccare","stufo","stupendo","subentro","succoso","sudore","suggerito","sugo","sultano","suonare","superbo","supporto","surgelato","surrogato","sussurro","sutura","svagare","svedese","sveglio","svelare","svenuto","svezia","sviluppo","svista","svizzera","svolta","svuotare","tabacco","tabulato","tacciare","taciturno","tale","talismano","tampone","tannino","tara","tardivo","targato","tariffa","tarpare","tartaruga","tasto","tattico","taverna","tavolata","tazza","teca","tecnico","telefono","temerario","tempo","temuto","tendone","tenero","tensione","tentacolo","teorema","terme","terrazzo","terzetto","tesi","tesserato","testato","tetro","tettoia","tifare","tigella","timbro","tinto","tipico","tipografo","tiraggio","tiro","titanio","titolo","titubante","tizio","tizzone","toccare","tollerare","tolto","tombola","tomo","tonfo","tonsilla","topazio","topologia","toppa","torba","tornare","torrone","tortora","toscano","tossire","tostatura","totano","trabocco","trachea","trafila","tragedia","tralcio","tramonto","transito","trapano","trarre","trasloco","trattato","trave","treccia","tremolio","trespolo","tributo","tricheco","trifoglio","trillo","trincea","trio","tristezza","triturato","trivella","tromba","trono","troppo","trottola","trovare","truccato","tubatura","tuffato","tulipano","tumulto","tunisia","turbare","turchino","tuta","tutela","ubicato","uccello","uccisore","udire","uditivo","uffa","ufficio","uguale","ulisse","ultimato","umano","umile","umorismo","uncinetto","ungere","ungherese","unicorno","unificato","unisono","unitario","unte","uovo","upupa","uragano","urgenza","urlo","usanza","usato","uscito","usignolo","usuraio","utensile","utilizzo","utopia","vacante","vaccinato","vagabondo","vagliato","valanga","valgo","valico","valletta","valoroso","valutare","valvola","vampata","vangare","vanitoso","vano","vantaggio","vanvera","vapore","varano","varcato","variante","vasca","vedetta","vedova","veduto","vegetale","veicolo","velcro","velina","velluto","veloce","venato","vendemmia","vento","verace","verbale","vergogna","verifica","vero","verruca","verticale","vescica","vessillo","vestale","veterano","vetrina","vetusto","viandante","vibrante","vicenda","vichingo","vicinanza","vidimare","vigilia","vigneto","vigore","vile","villano","vimini","vincitore","viola","vipera","virgola","virologo","virulento","viscoso","visione","vispo","vissuto","visura","vita","vitello","vittima","vivanda","vivido","viziare","voce","voga","volatile","volere","volpe","voragine","vulcano","zampogna","zanna","zappato","zattera","zavorra","zefiro","zelante","zelo","zenzero","zerbino","zibetto","zinco","zircone","zitto","zolla","zotico","zucchero","zufolo","zulu","zuppa"]'), Rs = JSON.parse('["a\u0301baco","abdomen","abeja","abierto","abogado","abono","aborto","abrazo","abrir","abuelo","abuso","acabar","academia","acceso","accio\u0301n","aceite","acelga","acento","aceptar","a\u0301cido","aclarar","acne\u0301","acoger","acoso","activo","acto","actriz","actuar","acudir","acuerdo","acusar","adicto","admitir","adoptar","adorno","aduana","adulto","ae\u0301reo","afectar","aficio\u0301n","afinar","afirmar","a\u0301gil","agitar","agoni\u0301a","agosto","agotar","agregar","agrio","agua","agudo","a\u0301guila","aguja","ahogo","ahorro","aire","aislar","ajedrez","ajeno","ajuste","alacra\u0301n","alambre","alarma","alba","a\u0301lbum","alcalde","aldea","alegre","alejar","alerta","aleta","alfiler","alga","algodo\u0301n","aliado","aliento","alivio","alma","almeja","almi\u0301bar","altar","alteza","altivo","alto","altura","alumno","alzar","amable","amante","amapola","amargo","amasar","a\u0301mbar","a\u0301mbito","ameno","amigo","amistad","amor","amparo","amplio","ancho","anciano","ancla","andar","ande\u0301n","anemia","a\u0301ngulo","anillo","a\u0301nimo","ani\u0301s","anotar","antena","antiguo","antojo","anual","anular","anuncio","an\u0303adir","an\u0303ejo","an\u0303o","apagar","aparato","apetito","apio","aplicar","apodo","aporte","apoyo","aprender","aprobar","apuesta","apuro","arado","aran\u0303a","arar","a\u0301rbitro","a\u0301rbol","arbusto","archivo","arco","arder","ardilla","arduo","a\u0301rea","a\u0301rido","aries","armoni\u0301a","arne\u0301s","aroma","arpa","arpo\u0301n","arreglo","arroz","arruga","arte","artista","asa","asado","asalto","ascenso","asegurar","aseo","asesor","asiento","asilo","asistir","asno","asombro","a\u0301spero","astilla","astro","astuto","asumir","asunto","atajo","ataque","atar","atento","ateo","a\u0301tico","atleta","a\u0301tomo","atraer","atroz","atu\u0301n","audaz","audio","auge","aula","aumento","ausente","autor","aval","avance","avaro","ave","avellana","avena","avestruz","avio\u0301n","aviso","ayer","ayuda","ayuno","azafra\u0301n","azar","azote","azu\u0301car","azufre","azul","baba","babor","bache","bahi\u0301a","baile","bajar","balanza","balco\u0301n","balde","bambu\u0301","banco","banda","ban\u0303o","barba","barco","barniz","barro","ba\u0301scula","basto\u0301n","basura","batalla","bateri\u0301a","batir","batuta","bau\u0301l","bazar","bebe\u0301","bebida","bello","besar","beso","bestia","bicho","bien","bingo","blanco","bloque","blusa","boa","bobina","bobo","boca","bocina","boda","bodega","boina","bola","bolero","bolsa","bomba","bondad","bonito","bono","bonsa\u0301i","borde","borrar","bosque","bote","boti\u0301n","bo\u0301veda","bozal","bravo","brazo","brecha","breve","brillo","brinco","brisa","broca","broma","bronce","brote","bruja","brusco","bruto","buceo","bucle","bueno","buey","bufanda","bufo\u0301n","bu\u0301ho","buitre","bulto","burbuja","burla","burro","buscar","butaca","buzo\u0301n","caballo","cabeza","cabina","cabra","cacao","cada\u0301ver","cadena","caer","cafe\u0301","cai\u0301da","caima\u0301n","caja","cajo\u0301n","cal","calamar","calcio","caldo","calidad","calle","calma","calor","calvo","cama","cambio","camello","camino","campo","ca\u0301ncer","candil","canela","canguro","canica","canto","can\u0303a","can\u0303o\u0301n","caoba","caos","capaz","capita\u0301n","capote","captar","capucha","cara","carbo\u0301n","ca\u0301rcel","careta","carga","carin\u0303o","carne","carpeta","carro","carta","casa","casco","casero","caspa","castor","catorce","catre","caudal","causa","cazo","cebolla","ceder","cedro","celda","ce\u0301lebre","celoso","ce\u0301lula","cemento","ceniza","centro","cerca","cerdo","cereza","cero","cerrar","certeza","ce\u0301sped","cetro","chacal","chaleco","champu\u0301","chancla","chapa","charla","chico","chiste","chivo","choque","choza","chuleta","chupar","ciclo\u0301n","ciego","cielo","cien","cierto","cifra","cigarro","cima","cinco","cine","cinta","cipre\u0301s","circo","ciruela","cisne","cita","ciudad","clamor","clan","claro","clase","clave","cliente","clima","cli\u0301nica","cobre","coccio\u0301n","cochino","cocina","coco","co\u0301digo","codo","cofre","coger","cohete","coji\u0301n","cojo","cola","colcha","colegio","colgar","colina","collar","colmo","columna","combate","comer","comida","co\u0301modo","compra","conde","conejo","conga","conocer","consejo","contar","copa","copia","corazo\u0301n","corbata","corcho","cordo\u0301n","corona","correr","coser","cosmos","costa","cra\u0301neo","cra\u0301ter","crear","crecer","crei\u0301do","crema","cri\u0301a","crimen","cripta","crisis","cromo","cro\u0301nica","croqueta","crudo","cruz","cuadro","cuarto","cuatro","cubo","cubrir","cuchara","cuello","cuento","cuerda","cuesta","cueva","cuidar","culebra","culpa","culto","cumbre","cumplir","cuna","cuneta","cuota","cupo\u0301n","cu\u0301pula","curar","curioso","curso","curva","cutis","dama","danza","dar","dardo","da\u0301til","deber","de\u0301bil","de\u0301cada","decir","dedo","defensa","definir","dejar","delfi\u0301n","delgado","delito","demora","denso","dental","deporte","derecho","derrota","desayuno","deseo","desfile","desnudo","destino","desvi\u0301o","detalle","detener","deuda","di\u0301a","diablo","diadema","diamante","diana","diario","dibujo","dictar","diente","dieta","diez","difi\u0301cil","digno","dilema","diluir","dinero","directo","dirigir","disco","disen\u0303o","disfraz","diva","divino","doble","doce","dolor","domingo","don","donar","dorado","dormir","dorso","dos","dosis","drago\u0301n","droga","ducha","duda","duelo","duen\u0303o","dulce","du\u0301o","duque","durar","dureza","duro","e\u0301bano","ebrio","echar","eco","ecuador","edad","edicio\u0301n","edificio","editor","educar","efecto","eficaz","eje","ejemplo","elefante","elegir","elemento","elevar","elipse","e\u0301lite","elixir","elogio","eludir","embudo","emitir","emocio\u0301n","empate","empen\u0303o","empleo","empresa","enano","encargo","enchufe","enci\u0301a","enemigo","enero","enfado","enfermo","engan\u0303o","enigma","enlace","enorme","enredo","ensayo","ensen\u0303ar","entero","entrar","envase","envi\u0301o","e\u0301poca","equipo","erizo","escala","escena","escolar","escribir","escudo","esencia","esfera","esfuerzo","espada","espejo","espi\u0301a","esposa","espuma","esqui\u0301","estar","este","estilo","estufa","etapa","eterno","e\u0301tica","etnia","evadir","evaluar","evento","evitar","exacto","examen","exceso","excusa","exento","exigir","exilio","existir","e\u0301xito","experto","explicar","exponer","extremo","fa\u0301brica","fa\u0301bula","fachada","fa\u0301cil","factor","faena","faja","falda","fallo","falso","faltar","fama","familia","famoso","farao\u0301n","farmacia","farol","farsa","fase","fatiga","fauna","favor","fax","febrero","fecha","feliz","feo","feria","feroz","fe\u0301rtil","fervor","festi\u0301n","fiable","fianza","fiar","fibra","ficcio\u0301n","ficha","fideo","fiebre","fiel","fiera","fiesta","figura","fijar","fijo","fila","filete","filial","filtro","fin","finca","fingir","finito","firma","flaco","flauta","flecha","flor","flota","fluir","flujo","flu\u0301or","fobia","foca","fogata","fogo\u0301n","folio","folleto","fondo","forma","forro","fortuna","forzar","fosa","foto","fracaso","fra\u0301gil","franja","frase","fraude","frei\u0301r","freno","fresa","fri\u0301o","frito","fruta","fuego","fuente","fuerza","fuga","fumar","funcio\u0301n","funda","furgo\u0301n","furia","fusil","fu\u0301tbol","futuro","gacela","gafas","gaita","gajo","gala","galeri\u0301a","gallo","gamba","ganar","gancho","ganga","ganso","garaje","garza","gasolina","gastar","gato","gavila\u0301n","gemelo","gemir","gen","ge\u0301nero","genio","gente","geranio","gerente","germen","gesto","gigante","gimnasio","girar","giro","glaciar","globo","gloria","gol","golfo","goloso","golpe","goma","gordo","gorila","gorra","gota","goteo","gozar","grada","gra\u0301fico","grano","grasa","gratis","grave","grieta","grillo","gripe","gris","grito","grosor","gru\u0301a","grueso","grumo","grupo","guante","guapo","guardia","guerra","gui\u0301a","guin\u0303o","guion","guiso","guitarra","gusano","gustar","haber","ha\u0301bil","hablar","hacer","hacha","hada","hallar","hamaca","harina","haz","hazan\u0303a","hebilla","hebra","hecho","helado","helio","hembra","herir","hermano","he\u0301roe","hervir","hielo","hierro","hi\u0301gado","higiene","hijo","himno","historia","hocico","hogar","hoguera","hoja","hombre","hongo","honor","honra","hora","hormiga","horno","hostil","hoyo","hueco","huelga","huerta","hueso","huevo","huida","huir","humano","hu\u0301medo","humilde","humo","hundir","huraca\u0301n","hurto","icono","ideal","idioma","i\u0301dolo","iglesia","iglu\u0301","igual","ilegal","ilusio\u0301n","imagen","ima\u0301n","imitar","impar","imperio","imponer","impulso","incapaz","i\u0301ndice","inerte","infiel","informe","ingenio","inicio","inmenso","inmune","innato","insecto","instante","intere\u0301s","i\u0301ntimo","intuir","inu\u0301til","invierno","ira","iris","ironi\u0301a","isla","islote","jabali\u0301","jabo\u0301n","jamo\u0301n","jarabe","jardi\u0301n","jarra","jaula","jazmi\u0301n","jefe","jeringa","jinete","jornada","joroba","joven","joya","juerga","jueves","juez","jugador","jugo","juguete","juicio","junco","jungla","junio","juntar","ju\u0301piter","jurar","justo","juvenil","juzgar","kilo","koala","labio","lacio","lacra","lado","ladro\u0301n","lagarto","la\u0301grima","laguna","laico","lamer","la\u0301mina","la\u0301mpara","lana","lancha","langosta","lanza","la\u0301piz","largo","larva","la\u0301stima","lata","la\u0301tex","latir","laurel","lavar","lazo","leal","leccio\u0301n","leche","lector","leer","legio\u0301n","legumbre","lejano","lengua","lento","len\u0303a","leo\u0301n","leopardo","lesio\u0301n","letal","letra","leve","leyenda","libertad","libro","licor","li\u0301der","lidiar","lienzo","liga","ligero","lima","li\u0301mite","limo\u0301n","limpio","lince","lindo","li\u0301nea","lingote","lino","linterna","li\u0301quido","liso","lista","litera","litio","litro","llaga","llama","llanto","llave","llegar","llenar","llevar","llorar","llover","lluvia","lobo","locio\u0301n","loco","locura","lo\u0301gica","logro","lombriz","lomo","lonja","lote","lucha","lucir","lugar","lujo","luna","lunes","lupa","lustro","luto","luz","maceta","macho","madera","madre","maduro","maestro","mafia","magia","mago","mai\u0301z","maldad","maleta","malla","malo","mama\u0301","mambo","mamut","manco","mando","manejar","manga","maniqui\u0301","manjar","mano","manso","manta","man\u0303ana","mapa","ma\u0301quina","mar","marco","marea","marfil","margen","marido","ma\u0301rmol","marro\u0301n","martes","marzo","masa","ma\u0301scara","masivo","matar","materia","matiz","matriz","ma\u0301ximo","mayor","mazorca","mecha","medalla","medio","me\u0301dula","mejilla","mejor","melena","melo\u0301n","memoria","menor","mensaje","mente","menu\u0301","mercado","merengue","me\u0301rito","mes","meso\u0301n","meta","meter","me\u0301todo","metro","mezcla","miedo","miel","miembro","miga","mil","milagro","militar","millo\u0301n","mimo","mina","minero","mi\u0301nimo","minuto","miope","mirar","misa","miseria","misil","mismo","mitad","mito","mochila","mocio\u0301n","moda","modelo","moho","mojar","molde","moler","molino","momento","momia","monarca","moneda","monja","monto","mon\u0303o","morada","morder","moreno","morir","morro","morsa","mortal","mosca","mostrar","motivo","mover","mo\u0301vil","mozo","mucho","mudar","mueble","muela","muerte","muestra","mugre","mujer","mula","muleta","multa","mundo","mun\u0303eca","mural","muro","mu\u0301sculo","museo","musgo","mu\u0301sica","muslo","na\u0301car","nacio\u0301n","nadar","naipe","naranja","nariz","narrar","nasal","natal","nativo","natural","na\u0301usea","naval","nave","navidad","necio","ne\u0301ctar","negar","negocio","negro","neo\u0301n","nervio","neto","neutro","nevar","nevera","nicho","nido","niebla","nieto","nin\u0303ez","nin\u0303o","ni\u0301tido","nivel","nobleza","noche","no\u0301mina","noria","norma","norte","nota","noticia","novato","novela","novio","nube","nuca","nu\u0301cleo","nudillo","nudo","nuera","nueve","nuez","nulo","nu\u0301mero","nutria","oasis","obeso","obispo","objeto","obra","obrero","observar","obtener","obvio","oca","ocaso","oce\u0301ano","ochenta","ocho","ocio","ocre","octavo","octubre","oculto","ocupar","ocurrir","odiar","odio","odisea","oeste","ofensa","oferta","oficio","ofrecer","ogro","oi\u0301do","oi\u0301r","ojo","ola","oleada","olfato","olivo","olla","olmo","olor","olvido","ombligo","onda","onza","opaco","opcio\u0301n","o\u0301pera","opinar","oponer","optar","o\u0301ptica","opuesto","oracio\u0301n","orador","oral","o\u0301rbita","orca","orden","oreja","o\u0301rgano","orgi\u0301a","orgullo","oriente","origen","orilla","oro","orquesta","oruga","osadi\u0301a","oscuro","osezno","oso","ostra","oton\u0303o","otro","oveja","o\u0301vulo","o\u0301xido","oxi\u0301geno","oyente","ozono","pacto","padre","paella","pa\u0301gina","pago","pai\u0301s","pa\u0301jaro","palabra","palco","paleta","pa\u0301lido","palma","paloma","palpar","pan","panal","pa\u0301nico","pantera","pan\u0303uelo","papa\u0301","papel","papilla","paquete","parar","parcela","pared","parir","paro","pa\u0301rpado","parque","pa\u0301rrafo","parte","pasar","paseo","pasio\u0301n","paso","pasta","pata","patio","patria","pausa","pauta","pavo","payaso","peato\u0301n","pecado","pecera","pecho","pedal","pedir","pegar","peine","pelar","peldan\u0303o","pelea","peligro","pellejo","pelo","peluca","pena","pensar","pen\u0303o\u0301n","peo\u0301n","peor","pepino","pequen\u0303o","pera","percha","perder","pereza","perfil","perico","perla","permiso","perro","persona","pesa","pesca","pe\u0301simo","pestan\u0303a","pe\u0301talo","petro\u0301leo","pez","pezun\u0303a","picar","picho\u0301n","pie","piedra","pierna","pieza","pijama","pilar","piloto","pimienta","pino","pintor","pinza","pin\u0303a","piojo","pipa","pirata","pisar","piscina","piso","pista","pito\u0301n","pizca","placa","plan","plata","playa","plaza","pleito","pleno","plomo","pluma","plural","pobre","poco","poder","podio","poema","poesi\u0301a","poeta","polen","polici\u0301a","pollo","polvo","pomada","pomelo","pomo","pompa","poner","porcio\u0301n","portal","posada","poseer","posible","poste","potencia","potro","pozo","prado","precoz","pregunta","premio","prensa","preso","previo","primo","pri\u0301ncipe","prisio\u0301n","privar","proa","probar","proceso","producto","proeza","profesor","programa","prole","promesa","pronto","propio","pro\u0301ximo","prueba","pu\u0301blico","puchero","pudor","pueblo","puerta","puesto","pulga","pulir","pulmo\u0301n","pulpo","pulso","puma","punto","pun\u0303al","pun\u0303o","pupa","pupila","pure\u0301","quedar","queja","quemar","querer","queso","quieto","qui\u0301mica","quince","quitar","ra\u0301bano","rabia","rabo","racio\u0301n","radical","rai\u0301z","rama","rampa","rancho","rango","rapaz","ra\u0301pido","rapto","rasgo","raspa","rato","rayo","raza","razo\u0301n","reaccio\u0301n","realidad","reban\u0303o","rebote","recaer","receta","rechazo","recoger","recreo","recto","recurso","red","redondo","reducir","reflejo","reforma","refra\u0301n","refugio","regalo","regir","regla","regreso","rehe\u0301n","reino","rei\u0301r","reja","relato","relevo","relieve","relleno","reloj","remar","remedio","remo","rencor","rendir","renta","reparto","repetir","reposo","reptil","res","rescate","resina","respeto","resto","resumen","retiro","retorno","retrato","reunir","reve\u0301s","revista","rey","rezar","rico","riego","rienda","riesgo","rifa","ri\u0301gido","rigor","rinco\u0301n","rin\u0303o\u0301n","ri\u0301o","riqueza","risa","ritmo","rito","rizo","roble","roce","rociar","rodar","rodeo","rodilla","roer","rojizo","rojo","romero","romper","ron","ronco","ronda","ropa","ropero","rosa","rosca","rostro","rotar","rubi\u0301","rubor","rudo","rueda","rugir","ruido","ruina","ruleta","rulo","rumbo","rumor","ruptura","ruta","rutina","sa\u0301bado","saber","sabio","sable","sacar","sagaz","sagrado","sala","saldo","salero","salir","salmo\u0301n","salo\u0301n","salsa","salto","salud","salvar","samba","sancio\u0301n","sandi\u0301a","sanear","sangre","sanidad","sano","santo","sapo","saque","sardina","sarte\u0301n","sastre","sata\u0301n","sauna","saxofo\u0301n","seccio\u0301n","seco","secreto","secta","sed","seguir","seis","sello","selva","semana","semilla","senda","sensor","sen\u0303al","sen\u0303or","separar","sepia","sequi\u0301a","ser","serie","sermo\u0301n","servir","sesenta","sesio\u0301n","seta","setenta","severo","sexo","sexto","sidra","siesta","siete","siglo","signo","si\u0301laba","silbar","silencio","silla","si\u0301mbolo","simio","sirena","sistema","sitio","situar","sobre","socio","sodio","sol","solapa","soldado","soledad","so\u0301lido","soltar","solucio\u0301n","sombra","sondeo","sonido","sonoro","sonrisa","sopa","soplar","soporte","sordo","sorpresa","sorteo","soste\u0301n","so\u0301tano","suave","subir","suceso","sudor","suegra","suelo","suen\u0303o","suerte","sufrir","sujeto","sulta\u0301n","sumar","superar","suplir","suponer","supremo","sur","surco","suren\u0303o","surgir","susto","sutil","tabaco","tabique","tabla","tabu\u0301","taco","tacto","tajo","talar","talco","talento","talla","talo\u0301n","taman\u0303o","tambor","tango","tanque","tapa","tapete","tapia","tapo\u0301n","taquilla","tarde","tarea","tarifa","tarjeta","tarot","tarro","tarta","tatuaje","tauro","taza","tazo\u0301n","teatro","techo","tecla","te\u0301cnica","tejado","tejer","tejido","tela","tele\u0301fono","tema","temor","templo","tenaz","tender","tener","tenis","tenso","teori\u0301a","terapia","terco","te\u0301rmino","ternura","terror","tesis","tesoro","testigo","tetera","texto","tez","tibio","tiburo\u0301n","tiempo","tienda","tierra","tieso","tigre","tijera","tilde","timbre","ti\u0301mido","timo","tinta","ti\u0301o","ti\u0301pico","tipo","tira","tiro\u0301n","tita\u0301n","ti\u0301tere","ti\u0301tulo","tiza","toalla","tobillo","tocar","tocino","todo","toga","toldo","tomar","tono","tonto","topar","tope","toque","to\u0301rax","torero","tormenta","torneo","toro","torpedo","torre","torso","tortuga","tos","tosco","toser","to\u0301xico","trabajo","tractor","traer","tra\u0301fico","trago","traje","tramo","trance","trato","trauma","trazar","tre\u0301bol","tregua","treinta","tren","trepar","tres","tribu","trigo","tripa","triste","triunfo","trofeo","trompa","tronco","tropa","trote","trozo","truco","trueno","trufa","tuberi\u0301a","tubo","tuerto","tumba","tumor","tu\u0301nel","tu\u0301nica","turbina","turismo","turno","tutor","ubicar","u\u0301lcera","umbral","unidad","unir","universo","uno","untar","un\u0303a","urbano","urbe","urgente","urna","usar","usuario","u\u0301til","utopi\u0301a","uva","vaca","vaci\u0301o","vacuna","vagar","vago","vaina","vajilla","vale","va\u0301lido","valle","valor","va\u0301lvula","vampiro","vara","variar","varo\u0301n","vaso","vecino","vector","vehi\u0301culo","veinte","vejez","vela","velero","veloz","vena","vencer","venda","veneno","vengar","venir","venta","venus","ver","verano","verbo","verde","vereda","verja","verso","verter","vi\u0301a","viaje","vibrar","vicio","vi\u0301ctima","vida","vi\u0301deo","vidrio","viejo","viernes","vigor","vil","villa","vinagre","vino","vin\u0303edo","violi\u0301n","viral","virgo","virtud","visor","vi\u0301spera","vista","vitamina","viudo","vivaz","vivero","vivir","vivo","volca\u0301n","volumen","volver","voraz","votar","voto","voz","vuelo","vulgar","yacer","yate","yegua","yema","yerno","yeso","yodo","yoga","yogur","zafiro","zanja","zapato","zarza","zona","zorro","zumo","zurdo"]'), Us = JSON.parse('["\u3042\u3044\u3053\u304F\u3057\u3093","\u3042\u3044\u3055\u3064","\u3042\u3044\u305F\u3099","\u3042\u304A\u305D\u3099\u3089","\u3042\u304B\u3061\u3083\u3093","\u3042\u304D\u308B","\u3042\u3051\u304B\u3099\u305F","\u3042\u3051\u308B","\u3042\u3053\u304B\u3099\u308C\u308B","\u3042\u3055\u3044","\u3042\u3055\u3072","\u3042\u3057\u3042\u3068","\u3042\u3057\u3099\u308F\u3046","\u3042\u3059\u3099\u304B\u308B","\u3042\u3059\u3099\u304D","\u3042\u305D\u3075\u3099","\u3042\u305F\u3048\u308B","\u3042\u305F\u305F\u3081\u308B","\u3042\u305F\u308A\u307E\u3048","\u3042\u305F\u308B","\u3042\u3064\u3044","\u3042\u3064\u304B\u3046","\u3042\u3063\u3057\u3085\u304F","\u3042\u3064\u307E\u308A","\u3042\u3064\u3081\u308B","\u3042\u3066\u306A","\u3042\u3066\u306F\u307E\u308B","\u3042\u3072\u308B","\u3042\u3075\u3099\u3089","\u3042\u3075\u3099\u308B","\u3042\u3075\u308C\u308B","\u3042\u307E\u3044","\u3042\u307E\u3068\u3099","\u3042\u307E\u3084\u304B\u3059","\u3042\u307E\u308A","\u3042\u307F\u3082\u306E","\u3042\u3081\u308A\u304B","\u3042\u3084\u307E\u308B","\u3042\u3086\u3080","\u3042\u3089\u3044\u304F\u3099\u307E","\u3042\u3089\u3057","\u3042\u3089\u3059\u3057\u3099","\u3042\u3089\u305F\u3081\u308B","\u3042\u3089\u3086\u308B","\u3042\u3089\u308F\u3059","\u3042\u308A\u304B\u3099\u3068\u3046","\u3042\u308F\u305B\u308B","\u3042\u308F\u3066\u308B","\u3042\u3093\u3044","\u3042\u3093\u304B\u3099\u3044","\u3042\u3093\u3053","\u3042\u3093\u305B\u3099\u3093","\u3042\u3093\u3066\u3044","\u3042\u3093\u306A\u3044","\u3042\u3093\u307E\u308A","\u3044\u3044\u305F\u3099\u3059","\u3044\u304A\u3093","\u3044\u304B\u3099\u3044","\u3044\u304B\u3099\u304F","\u3044\u304D\u304A\u3044","\u3044\u304D\u306A\u308A","\u3044\u304D\u3082\u306E","\u3044\u304D\u308B","\u3044\u304F\u3057\u3099","\u3044\u304F\u3075\u3099\u3093","\u3044\u3051\u306F\u3099\u306A","\u3044\u3051\u3093","\u3044\u3053\u3046","\u3044\u3053\u304F","\u3044\u3053\u3064","\u3044\u3055\u307E\u3057\u3044","\u3044\u3055\u3093","\u3044\u3057\u304D","\u3044\u3057\u3099\u3085\u3046","\u3044\u3057\u3099\u3087\u3046","\u3044\u3057\u3099\u308F\u308B","\u3044\u3059\u3099\u307F","\u3044\u3059\u3099\u308C","\u3044\u305B\u3044","\u3044\u305B\u3048\u3072\u3099","\u3044\u305B\u304B\u3044","\u3044\u305B\u304D","\u3044\u305B\u3099\u3093","\u3044\u305D\u3046\u308D\u3046","\u3044\u305D\u304B\u3099\u3057\u3044","\u3044\u305F\u3099\u3044","\u3044\u305F\u3099\u304F","\u3044\u305F\u3059\u3099\u3089","\u3044\u305F\u307F","\u3044\u305F\u308A\u3042","\u3044\u3061\u304A\u3046","\u3044\u3061\u3057\u3099","\u3044\u3061\u3068\u3099","\u3044\u3061\u306F\u3099","\u3044\u3061\u3075\u3099","\u3044\u3061\u308A\u3085\u3046","\u3044\u3064\u304B","\u3044\u3063\u3057\u3085\u3093","\u3044\u3063\u305B\u3044","\u3044\u3063\u305D\u3046","\u3044\u3063\u305F\u3093","\u3044\u3063\u3061","\u3044\u3063\u3066\u3044","\u3044\u3063\u307B\u309A\u3046","\u3044\u3066\u3055\u3099","\u3044\u3066\u3093","\u3044\u3068\u3099\u3046","\u3044\u3068\u3053","\u3044\u306A\u3044","\u3044\u306A\u304B","\u3044\u306D\u3080\u308A","\u3044\u306E\u3061","\u3044\u306E\u308B","\u3044\u306F\u3064","\u3044\u306F\u3099\u308B","\u3044\u306F\u3093","\u3044\u3072\u3099\u304D","\u3044\u3072\u3093","\u3044\u3075\u304F","\u3044\u3078\u3093","\u3044\u307B\u3046","\u3044\u307F\u3093","\u3044\u3082\u3046\u3068","\u3044\u3082\u305F\u308C","\u3044\u3082\u308A","\u3044\u3084\u304B\u3099\u308B","\u3044\u3084\u3059","\u3044\u3088\u304B\u3093","\u3044\u3088\u304F","\u3044\u3089\u3044","\u3044\u3089\u3059\u3068","\u3044\u308A\u304F\u3099\u3061","\u3044\u308A\u3087\u3046","\u3044\u308C\u3044","\u3044\u308C\u3082\u306E","\u3044\u308C\u308B","\u3044\u308D\u3048\u3093\u3072\u309A\u3064","\u3044\u308F\u3044","\u3044\u308F\u3046","\u3044\u308F\u304B\u3093","\u3044\u308F\u306F\u3099","\u3044\u308F\u3086\u308B","\u3044\u3093\u3051\u3099\u3093\u307E\u3081","\u3044\u3093\u3055\u3064","\u3044\u3093\u3057\u3087\u3046","\u3044\u3093\u3088\u3046","\u3046\u3048\u304D","\u3046\u3048\u308B","\u3046\u304A\u3055\u3099","\u3046\u304B\u3099\u3044","\u3046\u304B\u3075\u3099","\u3046\u304B\u3078\u3099\u308B","\u3046\u304D\u308F","\u3046\u304F\u3089\u3044\u306A","\u3046\u304F\u308C\u308C","\u3046\u3051\u305F\u307E\u308F\u308B","\u3046\u3051\u3064\u3051","\u3046\u3051\u3068\u308B","\u3046\u3051\u3082\u3064","\u3046\u3051\u308B","\u3046\u3053\u3099\u304B\u3059","\u3046\u3053\u3099\u304F","\u3046\u3053\u3093","\u3046\u3055\u304D\u3099","\u3046\u3057\u306A\u3046","\u3046\u3057\u308D\u304B\u3099\u307F","\u3046\u3059\u3044","\u3046\u3059\u304D\u3099","\u3046\u3059\u304F\u3099\u3089\u3044","\u3046\u3059\u3081\u308B","\u3046\u305B\u3064","\u3046\u3061\u3042\u308F\u305B","\u3046\u3061\u304B\u3099\u308F","\u3046\u3061\u304D","\u3046\u3061\u3085\u3046","\u3046\u3063\u304B\u308A","\u3046\u3064\u304F\u3057\u3044","\u3046\u3063\u305F\u3048\u308B","\u3046\u3064\u308B","\u3046\u3068\u3099\u3093","\u3046\u306A\u304D\u3099","\u3046\u306A\u3057\u3099","\u3046\u306A\u3059\u3099\u304F","\u3046\u306A\u308B","\u3046\u306D\u308B","\u3046\u306E\u3046","\u3046\u3075\u3099\u3051\u3099","\u3046\u3075\u3099\u3053\u3099\u3048","\u3046\u307E\u308C\u308B","\u3046\u3081\u308B","\u3046\u3082\u3046","\u3046\u3084\u307E\u3046","\u3046\u3088\u304F","\u3046\u3089\u304B\u3099\u3048\u3059","\u3046\u3089\u304F\u3099\u3061","\u3046\u3089\u306A\u3044","\u3046\u308A\u3042\u3051\u3099","\u3046\u308A\u304D\u308C","\u3046\u308B\u3055\u3044","\u3046\u308C\u3057\u3044","\u3046\u308C\u3086\u304D","\u3046\u308C\u308B","\u3046\u308D\u3053","\u3046\u308F\u304D","\u3046\u308F\u3055","\u3046\u3093\u3053\u3046","\u3046\u3093\u3061\u3093","\u3046\u3093\u3066\u3093","\u3046\u3093\u3068\u3099\u3046","\u3048\u3044\u3048\u3093","\u3048\u3044\u304B\u3099","\u3048\u3044\u304D\u3087\u3046","\u3048\u3044\u3053\u3099","\u3048\u3044\u305B\u3044","\u3048\u3044\u3075\u3099\u3093","\u3048\u3044\u3088\u3046","\u3048\u3044\u308F","\u3048\u304A\u308A","\u3048\u304B\u3099\u304A","\u3048\u304B\u3099\u304F","\u3048\u304D\u305F\u3044","\u3048\u304F\u305B\u308B","\u3048\u3057\u3083\u304F","\u3048\u3059\u3066","\u3048\u3064\u3089\u3093","\u3048\u306E\u304F\u3099","\u3048\u307B\u3046\u307E\u304D","\u3048\u307B\u3093","\u3048\u307E\u304D","\u3048\u3082\u3057\u3099","\u3048\u3082\u306E","\u3048\u3089\u3044","\u3048\u3089\u3075\u3099","\u3048\u308A\u3042","\u3048\u3093\u3048\u3093","\u3048\u3093\u304B\u3044","\u3048\u3093\u304D\u3099","\u3048\u3093\u3051\u3099\u304D","\u3048\u3093\u3057\u3085\u3046","\u3048\u3093\u305B\u3099\u3064","\u3048\u3093\u305D\u304F","\u3048\u3093\u3061\u3087\u3046","\u3048\u3093\u3068\u3064","\u304A\u3044\u304B\u3051\u308B","\u304A\u3044\u3053\u3059","\u304A\u3044\u3057\u3044","\u304A\u3044\u3064\u304F","\u304A\u3046\u3048\u3093","\u304A\u3046\u3055\u307E","\u304A\u3046\u3057\u3099","\u304A\u3046\u305B\u3064","\u304A\u3046\u305F\u3044","\u304A\u3046\u3075\u304F","\u304A\u3046\u3078\u3099\u3044","\u304A\u3046\u3088\u3046","\u304A\u3048\u308B","\u304A\u304A\u3044","\u304A\u304A\u3046","\u304A\u304A\u3068\u3099\u304A\u308A","\u304A\u304A\u3084","\u304A\u304A\u3088\u305D","\u304A\u304B\u3048\u308A","\u304A\u304B\u3059\u3099","\u304A\u304B\u3099\u3080","\u304A\u304B\u308F\u308A","\u304A\u304D\u3099\u306A\u3046","\u304A\u304D\u308B","\u304A\u304F\u3055\u307E","\u304A\u304F\u3057\u3099\u3087\u3046","\u304A\u304F\u308A\u304B\u3099\u306A","\u304A\u304F\u308B","\u304A\u304F\u308C\u308B","\u304A\u3053\u3059","\u304A\u3053\u306A\u3046","\u304A\u3053\u308B","\u304A\u3055\u3048\u308B","\u304A\u3055\u306A\u3044","\u304A\u3055\u3081\u308B","\u304A\u3057\u3044\u308C","\u304A\u3057\u3048\u308B","\u304A\u3057\u3099\u304D\u3099","\u304A\u3057\u3099\u3055\u3093","\u304A\u3057\u3083\u308C","\u304A\u305D\u3089\u304F","\u304A\u305D\u308F\u308B","\u304A\u305F\u304B\u3099\u3044","\u304A\u305F\u304F","\u304A\u305F\u3099\u3084\u304B","\u304A\u3061\u3064\u304F","\u304A\u3063\u3068","\u304A\u3064\u308A","\u304A\u3066\u3099\u304B\u3051","\u304A\u3068\u3057\u3082\u306E","\u304A\u3068\u306A\u3057\u3044","\u304A\u3068\u3099\u308A","\u304A\u3068\u3099\u308D\u304B\u3059","\u304A\u306F\u3099\u3055\u3093","\u304A\u307E\u3044\u308A","\u304A\u3081\u3066\u3099\u3068\u3046","\u304A\u3082\u3044\u3066\u3099","\u304A\u3082\u3046","\u304A\u3082\u305F\u3044","\u304A\u3082\u3061\u3083","\u304A\u3084\u3064","\u304A\u3084\u3086\u3072\u3099","\u304A\u3088\u307B\u3099\u3059","\u304A\u3089\u3093\u305F\u3099","\u304A\u308D\u3059","\u304A\u3093\u304B\u3099\u304F","\u304A\u3093\u3051\u3044","\u304A\u3093\u3057\u3083","\u304A\u3093\u305B\u3093","\u304A\u3093\u305F\u3099\u3093","\u304A\u3093\u3061\u3085\u3046","\u304A\u3093\u3068\u3099\u3051\u3044","\u304B\u3042\u3064","\u304B\u3044\u304B\u3099","\u304B\u3099\u3044\u304D","\u304B\u3099\u3044\u3051\u3093","\u304B\u3099\u3044\u3053\u3046","\u304B\u3044\u3055\u3064","\u304B\u3044\u3057\u3083","\u304B\u3044\u3059\u3044\u3088\u304F","\u304B\u3044\u305B\u3099\u3093","\u304B\u3044\u305D\u3099\u3046\u3068\u3099","\u304B\u3044\u3064\u3046","\u304B\u3044\u3066\u3093","\u304B\u3044\u3068\u3046","\u304B\u3044\u3075\u304F","\u304B\u3099\u3044\u3078\u304D","\u304B\u3044\u307B\u3046","\u304B\u3044\u3088\u3046","\u304B\u3099\u3044\u3089\u3044","\u304B\u3044\u308F","\u304B\u3048\u308B","\u304B\u304A\u308A","\u304B\u304B\u3048\u308B","\u304B\u304B\u3099\u304F","\u304B\u304B\u3099\u3057","\u304B\u304B\u3099\u307F","\u304B\u304F\u3053\u3099","\u304B\u304F\u3068\u304F","\u304B\u3055\u3099\u308B","\u304B\u3099\u305D\u3099\u3046","\u304B\u305F\u3044","\u304B\u305F\u3061","\u304B\u3099\u3061\u3087\u3046","\u304B\u3099\u3063\u304D\u3085\u3046","\u304B\u3099\u3063\u3053\u3046","\u304B\u3099\u3063\u3055\u3093","\u304B\u3099\u3063\u3057\u3087\u3046","\u304B\u306A\u3055\u3099\u308F\u3057","\u304B\u306E\u3046","\u304B\u3099\u306F\u304F","\u304B\u3075\u3099\u304B","\u304B\u307B\u3046","\u304B\u307B\u3053\u3099","\u304B\u307E\u3046","\u304B\u307E\u307B\u3099\u3053","\u304B\u3081\u308C\u304A\u3093","\u304B\u3086\u3044","\u304B\u3088\u3046\u3072\u3099","\u304B\u3089\u3044","\u304B\u308B\u3044","\u304B\u308D\u3046","\u304B\u308F\u304F","\u304B\u308F\u3089","\u304B\u3099\u3093\u304B","\u304B\u3093\u3051\u3044","\u304B\u3093\u3053\u3046","\u304B\u3093\u3057\u3083","\u304B\u3093\u305D\u3046","\u304B\u3093\u305F\u3093","\u304B\u3093\u3061","\u304B\u3099\u3093\u306F\u3099\u308B","\u304D\u3042\u3044","\u304D\u3042\u3064","\u304D\u3044\u308D","\u304D\u3099\u3044\u3093","\u304D\u3046\u3044","\u304D\u3046\u3093","\u304D\u3048\u308B","\u304D\u304A\u3046","\u304D\u304A\u304F","\u304D\u304A\u3061","\u304D\u304A\u3093","\u304D\u304B\u3044","\u304D\u304B\u304F","\u304D\u304B\u3093\u3057\u3083","\u304D\u304D\u3066","\u304D\u304F\u306F\u3099\u308A","\u304D\u304F\u3089\u3051\u3099","\u304D\u3051\u3093\u305B\u3044","\u304D\u3053\u3046","\u304D\u3053\u3048\u308B","\u304D\u3053\u304F","\u304D\u3055\u3044","\u304D\u3055\u304F","\u304D\u3055\u307E","\u304D\u3055\u3089\u304D\u3099","\u304D\u3099\u3057\u3099\u304B\u304B\u3099\u304F","\u304D\u3099\u3057\u304D","\u304D\u3099\u3057\u3099\u305F\u3044\u3051\u3093","\u304D\u3099\u3057\u3099\u306B\u3063\u3066\u3044","\u304D\u3099\u3057\u3099\u3085\u3064\u3057\u3083","\u304D\u3059\u3046","\u304D\u305B\u3044","\u304D\u305B\u304D","\u304D\u305B\u3064","\u304D\u305D\u3046","\u304D\u305D\u3099\u304F","\u304D\u305D\u3099\u3093","\u304D\u305F\u3048\u308B","\u304D\u3061\u3087\u3046","\u304D\u3064\u3048\u3093","\u304D\u3099\u3063\u3061\u308A","\u304D\u3064\u3064\u304D","\u304D\u3064\u306D","\u304D\u3066\u3044","\u304D\u3068\u3099\u3046","\u304D\u3068\u3099\u304F","\u304D\u306A\u3044","\u304D\u306A\u304B\u3099","\u304D\u306A\u3053","\u304D\u306C\u3053\u3099\u3057","\u304D\u306D\u3093","\u304D\u306E\u3046","\u304D\u306E\u3057\u305F","\u304D\u306F\u304F","\u304D\u3072\u3099\u3057\u3044","\u304D\u3072\u3093","\u304D\u3075\u304F","\u304D\u3075\u3099\u3093","\u304D\u307B\u3099\u3046","\u304D\u307B\u3093","\u304D\u307E\u308B","\u304D\u307F\u3064","\u304D\u3080\u3059\u3099\u304B\u3057\u3044","\u304D\u3081\u308B","\u304D\u3082\u305F\u3099\u3081\u3057","\u304D\u3082\u3061","\u304D\u3082\u306E","\u304D\u3083\u304F","\u304D\u3084\u304F","\u304D\u3099\u3085\u3046\u306B\u304F","\u304D\u3088\u3046","\u304D\u3087\u3046\u308A\u3085\u3046","\u304D\u3089\u3044","\u304D\u3089\u304F","\u304D\u308A\u3093","\u304D\u308C\u3044","\u304D\u308C\u3064","\u304D\u308D\u304F","\u304D\u3099\u308D\u3093","\u304D\u308F\u3081\u308B","\u304D\u3099\u3093\u3044\u308D","\u304D\u3093\u304B\u304F\u3057\u3099","\u304D\u3093\u3057\u3099\u3087","\u304D\u3093\u3088\u3046\u3072\u3099","\u304F\u3099\u3042\u3044","\u304F\u3044\u3059\u3099","\u304F\u3046\u304B\u3093","\u304F\u3046\u304D","\u304F\u3046\u304F\u3099\u3093","\u304F\u3046\u3053\u3046","\u304F\u3099\u3046\u305B\u3044","\u304F\u3046\u305D\u3046","\u304F\u3099\u3046\u305F\u3089","\u304F\u3046\u3075\u304F","\u304F\u3046\u307B\u3099","\u304F\u304B\u3093","\u304F\u304D\u3087\u3046","\u304F\u3051\u3099\u3093","\u304F\u3099\u3053\u3046","\u304F\u3055\u3044","\u304F\u3055\u304D","\u304F\u3055\u306F\u3099\u306A","\u304F\u3055\u308B","\u304F\u3057\u3083\u307F","\u304F\u3057\u3087\u3046","\u304F\u3059\u306E\u304D","\u304F\u3059\u308A\u3086\u3072\u3099","\u304F\u305B\u3051\u3099","\u304F\u305B\u3093","\u304F\u3099\u305F\u3044\u3066\u304D","\u304F\u305F\u3099\u3055\u308B","\u304F\u305F\u3072\u3099\u308C\u308B","\u304F\u3061\u3053\u307F","\u304F\u3061\u3055\u304D","\u304F\u3064\u3057\u305F","\u304F\u3099\u3063\u3059\u308A","\u304F\u3064\u308D\u304F\u3099","\u304F\u3068\u3046\u3066\u3093","\u304F\u3068\u3099\u304F","\u304F\u306A\u3093","\u304F\u306D\u304F\u306D","\u304F\u306E\u3046","\u304F\u3075\u3046","\u304F\u307F\u3042\u308F\u305B","\u304F\u307F\u305F\u3066\u308B","\u304F\u3081\u308B","\u304F\u3084\u304F\u3057\u3087","\u304F\u3089\u3059","\u304F\u3089\u3078\u3099\u308B","\u304F\u308B\u307E","\u304F\u308C\u308B","\u304F\u308D\u3046","\u304F\u308F\u3057\u3044","\u304F\u3099\u3093\u304B\u3093","\u304F\u3099\u3093\u3057\u3087\u304F","\u304F\u3099\u3093\u305F\u3044","\u304F\u3099\u3093\u3066","\u3051\u3042\u306A","\u3051\u3044\u304B\u304F","\u3051\u3044\u3051\u3093","\u3051\u3044\u3053","\u3051\u3044\u3055\u3064","\u3051\u3099\u3044\u3057\u3099\u3085\u3064","\u3051\u3044\u305F\u3044","\u3051\u3099\u3044\u306E\u3046\u3057\u3099\u3093","\u3051\u3044\u308C\u304D","\u3051\u3044\u308D","\u3051\u304A\u3068\u3059","\u3051\u304A\u308A\u3082\u306E","\u3051\u3099\u304D\u304B","\u3051\u3099\u304D\u3051\u3099\u3093","\u3051\u3099\u304D\u305F\u3099\u3093","\u3051\u3099\u304D\u3061\u3093","\u3051\u3099\u304D\u3068\u3064","\u3051\u3099\u304D\u306F","\u3051\u3099\u304D\u3084\u304F","\u3051\u3099\u3053\u3046","\u3051\u3099\u3053\u304F\u3057\u3099\u3087\u3046","\u3051\u3099\u3055\u3099\u3044","\u3051\u3055\u304D","\u3051\u3099\u3055\u3099\u3093","\u3051\u3057\u304D","\u3051\u3057\u3053\u3099\u3080","\u3051\u3057\u3087\u3046","\u3051\u3099\u3059\u3068","\u3051\u305F\u306F\u3099","\u3051\u3061\u3083\u3063\u3075\u309A","\u3051\u3061\u3089\u3059","\u3051\u3064\u3042\u3064","\u3051\u3064\u3044","\u3051\u3064\u3048\u304D","\u3051\u3063\u3053\u3093","\u3051\u3064\u3057\u3099\u3087","\u3051\u3063\u305B\u304D","\u3051\u3063\u3066\u3044","\u3051\u3064\u307E\u3064","\u3051\u3099\u3064\u3088\u3046\u3072\u3099","\u3051\u3099\u3064\u308C\u3044","\u3051\u3064\u308D\u3093","\u3051\u3099\u3068\u3099\u304F","\u3051\u3068\u306F\u3099\u3059","\u3051\u3068\u308B","\u3051\u306A\u3051\u3099","\u3051\u306A\u3059","\u3051\u306A\u307F","\u3051\u306C\u304D","\u3051\u3099\u306D\u3064","\u3051\u306D\u3093","\u3051\u306F\u3044","\u3051\u3099\u3072\u3093","\u3051\u3075\u3099\u304B\u3044","\u3051\u3099\u307B\u3099\u304F","\u3051\u307E\u308A","\u3051\u307F\u304B\u308B","\u3051\u3080\u3057","\u3051\u3080\u308A","\u3051\u3082\u306E","\u3051\u3089\u3044","\u3051\u308D\u3051\u308D","\u3051\u308F\u3057\u3044","\u3051\u3093\u3044","\u3051\u3093\u3048\u3064","\u3051\u3093\u304A","\u3051\u3093\u304B","\u3051\u3099\u3093\u304D","\u3051\u3093\u3051\u3099\u3093","\u3051\u3093\u3053\u3046","\u3051\u3093\u3055\u304F","\u3051\u3093\u3057\u3085\u3046","\u3051\u3093\u3059\u3046","\u3051\u3099\u3093\u305D\u3046","\u3051\u3093\u3061\u304F","\u3051\u3093\u3066\u3044","\u3051\u3093\u3068\u3046","\u3051\u3093\u306A\u3044","\u3051\u3093\u306B\u3093","\u3051\u3099\u3093\u3075\u3099\u3064","\u3051\u3093\u307E","\u3051\u3093\u307F\u3093","\u3051\u3093\u3081\u3044","\u3051\u3093\u3089\u3093","\u3051\u3093\u308A","\u3053\u3042\u304F\u307E","\u3053\u3044\u306C","\u3053\u3044\u3072\u3099\u3068","\u3053\u3099\u3046\u3044","\u3053\u3046\u3048\u3093","\u3053\u3046\u304A\u3093","\u3053\u3046\u304B\u3093","\u3053\u3099\u3046\u304D\u3085\u3046","\u3053\u3099\u3046\u3051\u3044","\u3053\u3046\u3053\u3046","\u3053\u3046\u3055\u3044","\u3053\u3046\u3057\u3099","\u3053\u3046\u3059\u3044","\u3053\u3099\u3046\u305B\u3044","\u3053\u3046\u305D\u304F","\u3053\u3046\u305F\u3044","\u3053\u3046\u3061\u3083","\u3053\u3046\u3064\u3046","\u3053\u3046\u3066\u3044","\u3053\u3046\u3068\u3099\u3046","\u3053\u3046\u306A\u3044","\u3053\u3046\u306F\u3044","\u3053\u3099\u3046\u307B\u3046","\u3053\u3099\u3046\u307E\u3093","\u3053\u3046\u3082\u304F","\u3053\u3046\u308A\u3064","\u3053\u3048\u308B","\u3053\u304A\u308A","\u3053\u3099\u304B\u3044","\u3053\u3099\u304B\u3099\u3064","\u3053\u3099\u304B\u3093","\u3053\u304F\u3053\u3099","\u3053\u304F\u3055\u3044","\u3053\u304F\u3068\u3046","\u3053\u304F\u306A\u3044","\u3053\u304F\u306F\u304F","\u3053\u304F\u3099\u307E","\u3053\u3051\u3044","\u3053\u3051\u308B","\u3053\u3053\u306E\u304B","\u3053\u3053\u308D","\u3053\u3055\u3081","\u3053\u3057\u3064","\u3053\u3059\u3046","\u3053\u305B\u3044","\u3053\u305B\u304D","\u3053\u305B\u3099\u3093","\u3053\u305D\u305F\u3099\u3066","\u3053\u305F\u3044","\u3053\u305F\u3048\u308B","\u3053\u305F\u3064","\u3053\u3061\u3087\u3046","\u3053\u3063\u304B","\u3053\u3064\u3053\u3064","\u3053\u3064\u306F\u3099\u3093","\u3053\u3064\u3075\u3099","\u3053\u3066\u3044","\u3053\u3066\u3093","\u3053\u3068\u304B\u3099\u3089","\u3053\u3068\u3057","\u3053\u3068\u306F\u3099","\u3053\u3068\u308A","\u3053\u306A\u3053\u3099\u306A","\u3053\u306D\u3053\u306D","\u3053\u306E\u307E\u307E","\u3053\u306E\u307F","\u3053\u306E\u3088","\u3053\u3099\u306F\u3093","\u3053\u3072\u3064\u3057\u3099","\u3053\u3075\u3046","\u3053\u3075\u3093","\u3053\u307B\u3099\u308C\u308B","\u3053\u3099\u307E\u3042\u3075\u3099\u3089","\u3053\u307E\u304B\u3044","\u3053\u3099\u307E\u3059\u308A","\u3053\u307E\u3064\u306A","\u3053\u307E\u308B","\u3053\u3080\u304D\u3099\u3053","\u3053\u3082\u3057\u3099","\u3053\u3082\u3061","\u3053\u3082\u306E","\u3053\u3082\u3093","\u3053\u3084\u304F","\u3053\u3084\u307E","\u3053\u3086\u3046","\u3053\u3086\u3072\u3099","\u3053\u3088\u3044","\u3053\u3088\u3046","\u3053\u308A\u308B","\u3053\u308C\u304F\u3057\u3087\u3093","\u3053\u308D\u3063\u3051","\u3053\u308F\u3082\u3066","\u3053\u308F\u308C\u308B","\u3053\u3093\u3044\u3093","\u3053\u3093\u304B\u3044","\u3053\u3093\u304D","\u3053\u3093\u3057\u3085\u3046","\u3053\u3093\u3059\u3044","\u3053\u3093\u305F\u3099\u3066","\u3053\u3093\u3068\u3093","\u3053\u3093\u306A\u3093","\u3053\u3093\u3072\u3099\u306B","\u3053\u3093\u307B\u309A\u3093","\u3053\u3093\u307E\u3051","\u3053\u3093\u3084","\u3053\u3093\u308C\u3044","\u3053\u3093\u308F\u304F","\u3055\u3099\u3044\u3048\u304D","\u3055\u3044\u304B\u3044","\u3055\u3044\u304D\u3093","\u3055\u3099\u3044\u3051\u3099\u3093","\u3055\u3099\u3044\u3053","\u3055\u3044\u3057\u3087","\u3055\u3044\u305B\u3044","\u3055\u3099\u3044\u305F\u304F","\u3055\u3099\u3044\u3061\u3085\u3046","\u3055\u3044\u3066\u304D","\u3055\u3099\u3044\u308A\u3087\u3046","\u3055\u3046\u306A","\u3055\u304B\u3044\u3057","\u3055\u304B\u3099\u3059","\u3055\u304B\u306A","\u3055\u304B\u307F\u3061","\u3055\u304B\u3099\u308B","\u3055\u304D\u3099\u3087\u3046","\u3055\u304F\u3057","\u3055\u304F\u3072\u3093","\u3055\u304F\u3089","\u3055\u3053\u304F","\u3055\u3053\u3064","\u3055\u3059\u3099\u304B\u308B","\u3055\u3099\u305B\u304D","\u3055\u305F\u3093","\u3055\u3064\u3048\u3044","\u3055\u3099\u3064\u304A\u3093","\u3055\u3099\u3063\u304B","\u3055\u3099\u3064\u304B\u3099\u304F","\u3055\u3063\u304D\u3087\u304F","\u3055\u3099\u3063\u3057","\u3055\u3064\u3057\u3099\u3093","\u3055\u3099\u3063\u305D\u3046","\u3055\u3064\u305F\u306F\u3099","\u3055\u3064\u307E\u3044\u3082","\u3055\u3066\u3044","\u3055\u3068\u3044\u3082","\u3055\u3068\u3046","\u3055\u3068\u304A\u3084","\u3055\u3068\u3057","\u3055\u3068\u308B","\u3055\u306E\u3046","\u3055\u306F\u3099\u304F","\u3055\u3072\u3099\u3057\u3044","\u3055\u3078\u3099\u3064","\u3055\u307B\u3046","\u3055\u307B\u3068\u3099","\u3055\u307E\u3059","\u3055\u307F\u3057\u3044","\u3055\u307F\u305F\u3099\u308C","\u3055\u3080\u3051","\u3055\u3081\u308B","\u3055\u3084\u3048\u3093\u3068\u3099\u3046","\u3055\u3086\u3046","\u3055\u3088\u3046","\u3055\u3088\u304F","\u3055\u3089\u305F\u3099","\u3055\u3099\u308B\u305D\u306F\u3099","\u3055\u308F\u3084\u304B","\u3055\u308F\u308B","\u3055\u3093\u3044\u3093","\u3055\u3093\u304B","\u3055\u3093\u304D\u3083\u304F","\u3055\u3093\u3053\u3046","\u3055\u3093\u3055\u3044","\u3055\u3099\u3093\u3057\u3087","\u3055\u3093\u3059\u3046","\u3055\u3093\u305B\u3044","\u3055\u3093\u305D","\u3055\u3093\u3061","\u3055\u3093\u307E","\u3055\u3093\u307F","\u3055\u3093\u3089\u3093","\u3057\u3042\u3044","\u3057\u3042\u3051\u3099","\u3057\u3042\u3055\u3063\u3066","\u3057\u3042\u308F\u305B","\u3057\u3044\u304F","\u3057\u3044\u3093","\u3057\u3046\u3061","\u3057\u3048\u3044","\u3057\u304A\u3051","\u3057\u304B\u3044","\u3057\u304B\u304F","\u3057\u3099\u304B\u3093","\u3057\u3053\u3099\u3068","\u3057\u3059\u3046","\u3057\u3099\u305F\u3099\u3044","\u3057\u305F\u3046\u3051","\u3057\u305F\u304D\u3099","\u3057\u305F\u3066","\u3057\u305F\u307F","\u3057\u3061\u3087\u3046","\u3057\u3061\u308A\u3093","\u3057\u3063\u304B\u308A","\u3057\u3064\u3057\u3099","\u3057\u3064\u3082\u3093","\u3057\u3066\u3044","\u3057\u3066\u304D","\u3057\u3066\u3064","\u3057\u3099\u3066\u3093","\u3057\u3099\u3068\u3099\u3046","\u3057\u306A\u304D\u3099\u308C","\u3057\u306A\u3082\u306E","\u3057\u306A\u3093","\u3057\u306D\u307E","\u3057\u306D\u3093","\u3057\u306E\u304F\u3099","\u3057\u306E\u3075\u3099","\u3057\u306F\u3044","\u3057\u306F\u3099\u304B\u308A","\u3057\u306F\u3064","\u3057\u306F\u3089\u3044","\u3057\u306F\u3093","\u3057\u3072\u3087\u3046","\u3057\u3075\u304F","\u3057\u3099\u3075\u3099\u3093","\u3057\u3078\u3044","\u3057\u307B\u3046","\u3057\u307B\u3093","\u3057\u307E\u3046","\u3057\u307E\u308B","\u3057\u307F\u3093","\u3057\u3080\u3051\u308B","\u3057\u3099\u3080\u3057\u3087","\u3057\u3081\u3044","\u3057\u3081\u308B","\u3057\u3082\u3093","\u3057\u3083\u3044\u3093","\u3057\u3083\u3046\u3093","\u3057\u3083\u304A\u3093","\u3057\u3099\u3083\u304B\u3099\u3044\u3082","\u3057\u3084\u304F\u3057\u3087","\u3057\u3083\u304F\u307B\u3046","\u3057\u3083\u3051\u3093","\u3057\u3083\u3053","\u3057\u3083\u3055\u3099\u3044","\u3057\u3083\u3057\u3093","\u3057\u3083\u305B\u3093","\u3057\u3083\u305D\u3046","\u3057\u3083\u305F\u3044","\u3057\u3083\u3061\u3087\u3046","\u3057\u3083\u3063\u304D\u3093","\u3057\u3099\u3083\u307E","\u3057\u3083\u308A\u3093","\u3057\u3083\u308C\u3044","\u3057\u3099\u3086\u3046","\u3057\u3099\u3085\u3046\u3057\u3087","\u3057\u3085\u304F\u306F\u304F","\u3057\u3099\u3085\u3057\u3093","\u3057\u3085\u3063\u305B\u304D","\u3057\u3085\u307F","\u3057\u3085\u3089\u306F\u3099","\u3057\u3099\u3085\u3093\u306F\u3099\u3093","\u3057\u3087\u3046\u304B\u3044","\u3057\u3087\u304F\u305F\u304F","\u3057\u3087\u3063\u3051\u3093","\u3057\u3087\u3068\u3099\u3046","\u3057\u3087\u3082\u3064","\u3057\u3089\u305B\u308B","\u3057\u3089\u3078\u3099\u308B","\u3057\u3093\u304B","\u3057\u3093\u3053\u3046","\u3057\u3099\u3093\u3057\u3099\u3083","\u3057\u3093\u305B\u3044\u3057\u3099","\u3057\u3093\u3061\u304F","\u3057\u3093\u308A\u3093","\u3059\u3042\u3051\u3099","\u3059\u3042\u3057","\u3059\u3042\u306A","\u3059\u3099\u3042\u3093","\u3059\u3044\u3048\u3044","\u3059\u3044\u304B","\u3059\u3044\u3068\u3046","\u3059\u3099\u3044\u3075\u3099\u3093","\u3059\u3044\u3088\u3046\u3072\u3099","\u3059\u3046\u304B\u3099\u304F","\u3059\u3046\u3057\u3099\u3064","\u3059\u3046\u305B\u3093","\u3059\u304A\u3068\u3099\u308A","\u3059\u304D\u307E","\u3059\u304F\u3046","\u3059\u304F\u306A\u3044","\u3059\u3051\u308B","\u3059\u3053\u3099\u3044","\u3059\u3053\u3057","\u3059\u3099\u3055\u3093","\u3059\u3059\u3099\u3057\u3044","\u3059\u3059\u3080","\u3059\u3059\u3081\u308B","\u3059\u3063\u304B\u308A","\u3059\u3099\u3063\u3057\u308A","\u3059\u3099\u3063\u3068","\u3059\u3066\u304D","\u3059\u3066\u308B","\u3059\u306D\u308B","\u3059\u306E\u3053","\u3059\u306F\u305F\u3099","\u3059\u306F\u3099\u3089\u3057\u3044","\u3059\u3099\u3072\u3087\u3046","\u3059\u3099\u3075\u3099\u306C\u308C","\u3059\u3075\u3099\u308A","\u3059\u3075\u308C","\u3059\u3078\u3099\u3066","\u3059\u3078\u3099\u308B","\u3059\u3099\u307B\u3046","\u3059\u307B\u3099\u3093","\u3059\u307E\u3044","\u3059\u3081\u3057","\u3059\u3082\u3046","\u3059\u3084\u304D","\u3059\u3089\u3059\u3089","\u3059\u308B\u3081","\u3059\u308C\u3061\u304B\u3099\u3046","\u3059\u308D\u3063\u3068","\u3059\u308F\u308B","\u3059\u3093\u305B\u3099\u3093","\u3059\u3093\u307B\u309A\u3046","\u305B\u3042\u3075\u3099\u3089","\u305B\u3044\u304B\u3064","\u305B\u3044\u3051\u3099\u3093","\u305B\u3044\u3057\u3099","\u305B\u3044\u3088\u3046","\u305B\u304A\u3046","\u305B\u304B\u3044\u304B\u3093","\u305B\u304D\u306B\u3093","\u305B\u304D\u3080","\u305B\u304D\u3086","\u305B\u304D\u3089\u3093\u3046\u3093","\u305B\u3051\u3093","\u305B\u3053\u3046","\u305B\u3059\u3057\u3099","\u305B\u305F\u3044","\u305B\u305F\u3051","\u305B\u3063\u304B\u304F","\u305B\u3063\u304D\u3083\u304F","\u305B\u3099\u3063\u304F","\u305B\u3063\u3051\u3093","\u305B\u3063\u3053\u3064","\u305B\u3063\u3055\u305F\u304F\u307E","\u305B\u3064\u305D\u3099\u304F","\u305B\u3064\u305F\u3099\u3093","\u305B\u3064\u3066\u3099\u3093","\u305B\u3063\u306F\u309A\u3093","\u305B\u3064\u3072\u3099","\u305B\u3064\u3075\u3099\u3093","\u305B\u3064\u3081\u3044","\u305B\u3064\u308A\u3064","\u305B\u306A\u304B","\u305B\u306E\u3072\u3099","\u305B\u306F\u306F\u3099","\u305B\u3072\u3099\u308D","\u305B\u307B\u3099\u306D","\u305B\u307E\u3044","\u305B\u307E\u308B","\u305B\u3081\u308B","\u305B\u3082\u305F\u308C","\u305B\u308A\u3075","\u305B\u3099\u3093\u3042\u304F","\u305B\u3093\u3044","\u305B\u3093\u3048\u3044","\u305B\u3093\u304B","\u305B\u3093\u304D\u3087","\u305B\u3093\u304F","\u305B\u3093\u3051\u3099\u3093","\u305B\u3099\u3093\u3053\u3099","\u305B\u3093\u3055\u3044","\u305B\u3093\u3057\u3085","\u305B\u3093\u3059\u3044","\u305B\u3093\u305B\u3044","\u305B\u3093\u305D\u3099","\u305B\u3093\u305F\u304F","\u305B\u3093\u3061\u3087\u3046","\u305B\u3093\u3066\u3044","\u305B\u3093\u3068\u3046","\u305B\u3093\u306C\u304D","\u305B\u3093\u306D\u3093","\u305B\u3093\u306F\u309A\u3044","\u305B\u3099\u3093\u3075\u3099","\u305B\u3099\u3093\u307B\u309A\u3046","\u305B\u3093\u3080","\u305B\u3093\u3081\u3093\u3057\u3099\u3087","\u305B\u3093\u3082\u3093","\u305B\u3093\u3084\u304F","\u305B\u3093\u3086\u3046","\u305B\u3093\u3088\u3046","\u305B\u3099\u3093\u3089","\u305B\u3099\u3093\u308A\u3083\u304F","\u305B\u3093\u308C\u3044","\u305B\u3093\u308D","\u305D\u3042\u304F","\u305D\u3044\u3068\u3051\u3099\u308B","\u305D\u3044\u306D","\u305D\u3046\u304B\u3099\u3093\u304D\u3087\u3046","\u305D\u3046\u304D","\u305D\u3046\u3053\u3099","\u305D\u3046\u3057\u3093","\u305D\u3046\u305F\u3099\u3093","\u305D\u3046\u306A\u3093","\u305D\u3046\u3072\u3099","\u305D\u3046\u3081\u3093","\u305D\u3046\u308A","\u305D\u3048\u3082\u306E","\u305D\u3048\u3093","\u305D\u304B\u3099\u3044","\u305D\u3051\u3099\u304D","\u305D\u3053\u3046","\u305D\u3053\u305D\u3053","\u305D\u3055\u3099\u3044","\u305D\u3057\u306A","\u305D\u305B\u3044","\u305D\u305B\u3093","\u305D\u305D\u304F\u3099","\u305D\u305F\u3099\u3066\u308B","\u305D\u3064\u3046","\u305D\u3064\u3048\u3093","\u305D\u3063\u304B\u3093","\u305D\u3064\u304D\u3099\u3087\u3046","\u305D\u3063\u3051\u3064","\u305D\u3063\u3053\u3046","\u305D\u3063\u305B\u3093","\u305D\u3063\u3068","\u305D\u3068\u304B\u3099\u308F","\u305D\u3068\u3064\u3099\u3089","\u305D\u306A\u3048\u308B","\u305D\u306A\u305F","\u305D\u3075\u307B\u3099","\u305D\u307B\u3099\u304F","\u305D\u307B\u3099\u308D","\u305D\u307E\u3064","\u305D\u307E\u308B","\u305D\u3080\u304F","\u305D\u3080\u308A\u3048","\u305D\u3081\u308B","\u305D\u3082\u305D\u3082","\u305D\u3088\u304B\u305B\u3099","\u305D\u3089\u307E\u3081","\u305D\u308D\u3046","\u305D\u3093\u304B\u3044","\u305D\u3093\u3051\u3044","\u305D\u3093\u3055\u3099\u3044","\u305D\u3093\u3057\u3064","\u305D\u3093\u305D\u3099\u304F","\u305D\u3093\u3061\u3087\u3046","\u305D\u3099\u3093\u3072\u3099","\u305D\u3099\u3093\u3075\u3099\u3093","\u305D\u3093\u307F\u3093","\u305F\u3042\u3044","\u305F\u3044\u3044\u3093","\u305F\u3044\u3046\u3093","\u305F\u3044\u3048\u304D","\u305F\u3044\u304A\u3046","\u305F\u3099\u3044\u304B\u3099\u304F","\u305F\u3044\u304D","\u305F\u3044\u304F\u3099\u3046","\u305F\u3044\u3051\u3093","\u305F\u3044\u3053","\u305F\u3044\u3055\u3099\u3044","\u305F\u3099\u3044\u3057\u3099\u3087\u3046\u3075\u3099","\u305F\u3099\u3044\u3059\u304D","\u305F\u3044\u305B\u3064","\u305F\u3044\u305D\u3046","\u305F\u3099\u3044\u305F\u3044","\u305F\u3044\u3061\u3087\u3046","\u305F\u3044\u3066\u3044","\u305F\u3099\u3044\u3068\u3099\u3053\u308D","\u305F\u3044\u306A\u3044","\u305F\u3044\u306D\u3064","\u305F\u3044\u306E\u3046","\u305F\u3044\u306F\u3093","\u305F\u3099\u3044\u3072\u3087\u3046","\u305F\u3044\u3075\u3046","\u305F\u3044\u3078\u3093","\u305F\u3044\u307B","\u305F\u3044\u307E\u3064\u306F\u3099\u306A","\u305F\u3044\u307F\u3093\u304F\u3099","\u305F\u3044\u3080","\u305F\u3044\u3081\u3093","\u305F\u3044\u3084\u304D","\u305F\u3044\u3088\u3046","\u305F\u3044\u3089","\u305F\u3044\u308A\u3087\u304F","\u305F\u3044\u308B","\u305F\u3044\u308F\u3093","\u305F\u3046\u3048","\u305F\u3048\u308B","\u305F\u304A\u3059","\u305F\u304A\u308B","\u305F\u304A\u308C\u308B","\u305F\u304B\u3044","\u305F\u304B\u306D","\u305F\u304D\u3072\u3099","\u305F\u304F\u3055\u3093","\u305F\u3053\u304F","\u305F\u3053\u3084\u304D","\u305F\u3055\u3044","\u305F\u3057\u3055\u3099\u3093","\u305F\u3099\u3057\u3099\u3083\u308C","\u305F\u3059\u3051\u308B","\u305F\u3059\u3099\u3055\u308F\u308B","\u305F\u305D\u304B\u3099\u308C","\u305F\u305F\u304B\u3046","\u305F\u305F\u304F","\u305F\u305F\u3099\u3057\u3044","\u305F\u305F\u307F","\u305F\u3061\u306F\u3099\u306A","\u305F\u3099\u3063\u304B\u3044","\u305F\u3099\u3063\u304D\u3083\u304F","\u305F\u3099\u3063\u3053","\u305F\u3099\u3063\u3057\u3085\u3064","\u305F\u3099\u3063\u305F\u3044","\u305F\u3066\u308B","\u305F\u3068\u3048\u308B","\u305F\u306A\u306F\u3099\u305F","\u305F\u306B\u3093","\u305F\u306C\u304D","\u305F\u306E\u3057\u307F","\u305F\u306F\u3064","\u305F\u3075\u3099\u3093","\u305F\u3078\u3099\u308B","\u305F\u307B\u3099\u3046","\u305F\u307E\u3053\u3099","\u305F\u307E\u308B","\u305F\u3099\u3080\u308B","\u305F\u3081\u3044\u304D","\u305F\u3081\u3059","\u305F\u3081\u308B","\u305F\u3082\u3064","\u305F\u3084\u3059\u3044","\u305F\u3088\u308B","\u305F\u3089\u3059","\u305F\u308A\u304D\u307B\u3093\u304B\u3099\u3093","\u305F\u308A\u3087\u3046","\u305F\u308A\u308B","\u305F\u308B\u3068","\u305F\u308C\u308B","\u305F\u308C\u3093\u3068","\u305F\u308D\u3063\u3068","\u305F\u308F\u3080\u308C\u308B","\u305F\u3099\u3093\u3042\u3064","\u305F\u3093\u3044","\u305F\u3093\u304A\u3093","\u305F\u3093\u304B","\u305F\u3093\u304D","\u305F\u3093\u3051\u3093","\u305F\u3093\u3053\u3099","\u305F\u3093\u3055\u3093","\u305F\u3093\u3057\u3099\u3087\u3046\u3072\u3099","\u305F\u3099\u3093\u305B\u3044","\u305F\u3093\u305D\u304F","\u305F\u3093\u305F\u3044","\u305F\u3099\u3093\u3061","\u305F\u3093\u3066\u3044","\u305F\u3093\u3068\u3046","\u305F\u3099\u3093\u306A","\u305F\u3093\u306B\u3093","\u305F\u3099\u3093\u306D\u3064","\u305F\u3093\u306E\u3046","\u305F\u3093\u3072\u309A\u3093","\u305F\u3099\u3093\u307B\u3099\u3046","\u305F\u3093\u307E\u3064","\u305F\u3093\u3081\u3044","\u305F\u3099\u3093\u308C\u3064","\u305F\u3099\u3093\u308D","\u305F\u3099\u3093\u308F","\u3061\u3042\u3044","\u3061\u3042\u3093","\u3061\u3044\u304D","\u3061\u3044\u3055\u3044","\u3061\u3048\u3093","\u3061\u304B\u3044","\u3061\u304B\u3089","\u3061\u304D\u3085\u3046","\u3061\u304D\u3093","\u3061\u3051\u3044\u3059\u3099","\u3061\u3051\u3093","\u3061\u3053\u304F","\u3061\u3055\u3044","\u3061\u3057\u304D","\u3061\u3057\u308A\u3087\u3046","\u3061\u305B\u3044","\u3061\u305D\u3046","\u3061\u305F\u3044","\u3061\u305F\u3093","\u3061\u3061\u304A\u3084","\u3061\u3064\u3057\u3099\u3087","\u3061\u3066\u304D","\u3061\u3066\u3093","\u3061\u306C\u304D","\u3061\u306C\u308A","\u3061\u306E\u3046","\u3061\u3072\u3087\u3046","\u3061\u3078\u3044\u305B\u3093","\u3061\u307B\u3046","\u3061\u307E\u305F","\u3061\u307F\u3064","\u3061\u307F\u3068\u3099\u308D","\u3061\u3081\u3044\u3068\u3099","\u3061\u3083\u3093\u3053\u306A\u3078\u3099","\u3061\u3085\u3046\u3044","\u3061\u3086\u308A\u3087\u304F","\u3061\u3087\u3046\u3057","\u3061\u3087\u3055\u304F\u3051\u3093","\u3061\u3089\u3057","\u3061\u3089\u307F","\u3061\u308A\u304B\u3099\u307F","\u3061\u308A\u3087\u3046","\u3061\u308B\u3068\u3099","\u3061\u308F\u308F","\u3061\u3093\u305F\u3044","\u3061\u3093\u3082\u304F","\u3064\u3044\u304B","\u3064\u3044\u305F\u3061","\u3064\u3046\u304B","\u3064\u3046\u3057\u3099\u3087\u3046","\u3064\u3046\u306F\u3093","\u3064\u3046\u308F","\u3064\u304B\u3046","\u3064\u304B\u308C\u308B","\u3064\u304F\u306D","\u3064\u304F\u308B","\u3064\u3051\u306D","\u3064\u3051\u308B","\u3064\u3053\u3099\u3046","\u3064\u305F\u3048\u308B","\u3064\u3064\u3099\u304F","\u3064\u3064\u3057\u3099","\u3064\u3064\u3080","\u3064\u3068\u3081\u308B","\u3064\u306A\u304B\u3099\u308B","\u3064\u306A\u307F","\u3064\u306D\u3064\u3099\u306D","\u3064\u306E\u308B","\u3064\u3075\u3099\u3059","\u3064\u307E\u3089\u306A\u3044","\u3064\u307E\u308B","\u3064\u307F\u304D","\u3064\u3081\u305F\u3044","\u3064\u3082\u308A","\u3064\u3082\u308B","\u3064\u3088\u3044","\u3064\u308B\u307B\u3099","\u3064\u308B\u307F\u304F","\u3064\u308F\u3082\u306E","\u3064\u308F\u308A","\u3066\u3042\u3057","\u3066\u3042\u3066","\u3066\u3042\u307F","\u3066\u3044\u304A\u3093","\u3066\u3044\u304B","\u3066\u3044\u304D","\u3066\u3044\u3051\u3044","\u3066\u3044\u3053\u304F","\u3066\u3044\u3055\u3064","\u3066\u3044\u3057","\u3066\u3044\u305B\u3044","\u3066\u3044\u305F\u3044","\u3066\u3044\u3068\u3099","\u3066\u3044\u306D\u3044","\u3066\u3044\u3072\u3087\u3046","\u3066\u3044\u3078\u3093","\u3066\u3044\u307B\u3099\u3046","\u3066\u3046\u3061","\u3066\u304A\u304F\u308C","\u3066\u304D\u3068\u3046","\u3066\u304F\u3072\u3099","\u3066\u3099\u3053\u307B\u3099\u3053","\u3066\u3055\u304D\u3099\u3087\u3046","\u3066\u3055\u3051\u3099","\u3066\u3059\u308A","\u3066\u305D\u3046","\u3066\u3061\u304B\u3099\u3044","\u3066\u3061\u3087\u3046","\u3066\u3064\u304B\u3099\u304F","\u3066\u3064\u3064\u3099\u304D","\u3066\u3099\u3063\u306F\u309A","\u3066\u3064\u307B\u3099\u3046","\u3066\u3064\u3084","\u3066\u3099\u306C\u304B\u3048","\u3066\u306C\u304D","\u3066\u306C\u304F\u3099\u3044","\u3066\u306E\u3072\u3089","\u3066\u306F\u3044","\u3066\u3075\u3099\u304F\u308D","\u3066\u3075\u305F\u3099","\u3066\u307B\u3068\u3099\u304D","\u3066\u307B\u3093","\u3066\u307E\u3048","\u3066\u307E\u304D\u3059\u3099\u3057","\u3066\u307F\u3057\u3099\u304B","\u3066\u307F\u3084\u3051\u3099","\u3066\u3089\u3059","\u3066\u308C\u3072\u3099","\u3066\u308F\u3051","\u3066\u308F\u305F\u3057","\u3066\u3099\u3093\u3042\u3064","\u3066\u3093\u3044\u3093","\u3066\u3093\u304B\u3044","\u3066\u3093\u304D","\u3066\u3093\u304F\u3099","\u3066\u3093\u3051\u3093","\u3066\u3093\u3053\u3099\u304F","\u3066\u3093\u3055\u3044","\u3066\u3093\u3057","\u3066\u3093\u3059\u3046","\u3066\u3099\u3093\u3061","\u3066\u3093\u3066\u304D","\u3066\u3093\u3068\u3046","\u3066\u3093\u306A\u3044","\u3066\u3093\u3075\u309A\u3089","\u3066\u3093\u307B\u3099\u3046\u305F\u3099\u3044","\u3066\u3093\u3081\u3064","\u3066\u3093\u3089\u3093\u304B\u3044","\u3066\u3099\u3093\u308A\u3087\u304F","\u3066\u3099\u3093\u308F","\u3068\u3099\u3042\u3044","\u3068\u3044\u308C","\u3068\u3099\u3046\u304B\u3093","\u3068\u3046\u304D\u3085\u3046","\u3068\u3099\u3046\u304F\u3099","\u3068\u3046\u3057","\u3068\u3046\u3080\u304D\u3099","\u3068\u304A\u3044","\u3068\u304A\u304B","\u3068\u304A\u304F","\u3068\u304A\u3059","\u3068\u304A\u308B","\u3068\u304B\u3044","\u3068\u304B\u3059","\u3068\u304D\u304A\u308A","\u3068\u304D\u3068\u3099\u304D","\u3068\u304F\u3044","\u3068\u304F\u3057\u3085\u3046","\u3068\u304F\u3066\u3093","\u3068\u304F\u306B","\u3068\u304F\u3078\u3099\u3064","\u3068\u3051\u3044","\u3068\u3051\u308B","\u3068\u3053\u3084","\u3068\u3055\u304B","\u3068\u3057\u3087\u304B\u3093","\u3068\u305D\u3046","\u3068\u305F\u3093","\u3068\u3061\u3085\u3046","\u3068\u3063\u304D\u3085\u3046","\u3068\u3063\u304F\u3093","\u3068\u3064\u305B\u3099\u3093","\u3068\u3064\u306B\u3085\u3046","\u3068\u3068\u3099\u3051\u308B","\u3068\u3068\u306E\u3048\u308B","\u3068\u306A\u3044","\u3068\u306A\u3048\u308B","\u3068\u306A\u308A","\u3068\u306E\u3055\u307E","\u3068\u306F\u3099\u3059","\u3068\u3099\u3075\u3099\u304B\u3099\u308F","\u3068\u307B\u3046","\u3068\u307E\u308B","\u3068\u3081\u308B","\u3068\u3082\u305F\u3099\u3061","\u3068\u3082\u308B","\u3068\u3099\u3088\u3046\u3072\u3099","\u3068\u3089\u3048\u308B","\u3068\u3093\u304B\u3064","\u3068\u3099\u3093\u3075\u3099\u308A","\u306A\u3044\u304B\u304F","\u306A\u3044\u3053\u3046","\u306A\u3044\u3057\u3087","\u306A\u3044\u3059","\u306A\u3044\u305B\u3093","\u306A\u3044\u305D\u3046","\u306A\u304A\u3059","\u306A\u304B\u3099\u3044","\u306A\u304F\u3059","\u306A\u3051\u3099\u308B","\u306A\u3053\u3046\u3068\u3099","\u306A\u3055\u3051","\u306A\u305F\u3066\u3099\u3053\u3053","\u306A\u3063\u3068\u3046","\u306A\u3064\u3084\u3059\u307F","\u306A\u306A\u304A\u3057","\u306A\u306B\u3053\u3099\u3068","\u306A\u306B\u3082\u306E","\u306A\u306B\u308F","\u306A\u306E\u304B","\u306A\u3075\u305F\u3099","\u306A\u307E\u3044\u304D","\u306A\u307E\u3048","\u306A\u307E\u307F","\u306A\u307F\u305F\u3099","\u306A\u3081\u3089\u304B","\u306A\u3081\u308B","\u306A\u3084\u3080","\u306A\u3089\u3046","\u306A\u3089\u3072\u3099","\u306A\u3089\u3075\u3099","\u306A\u308C\u308B","\u306A\u308F\u3068\u3072\u3099","\u306A\u308F\u306F\u3099\u308A","\u306B\u3042\u3046","\u306B\u3044\u304B\u3099\u305F","\u306B\u3046\u3051","\u306B\u304A\u3044","\u306B\u304B\u3044","\u306B\u304B\u3099\u3066","\u306B\u304D\u3072\u3099","\u306B\u304F\u3057\u307F","\u306B\u304F\u307E\u3093","\u306B\u3051\u3099\u308B","\u306B\u3055\u3093\u304B\u305F\u3093\u305D","\u306B\u3057\u304D","\u306B\u305B\u3082\u306E","\u306B\u3061\u3057\u3099\u3087\u3046","\u306B\u3061\u3088\u3046\u3072\u3099","\u306B\u3063\u304B","\u306B\u3063\u304D","\u306B\u3063\u3051\u3044","\u306B\u3063\u3053\u3046","\u306B\u3063\u3055\u3093","\u306B\u3063\u3057\u3087\u304F","\u306B\u3063\u3059\u3046","\u306B\u3063\u305B\u304D","\u306B\u3063\u3066\u3044","\u306B\u306A\u3046","\u306B\u307B\u3093","\u306B\u307E\u3081","\u306B\u3082\u3064","\u306B\u3084\u308A","\u306B\u3085\u3046\u3044\u3093","\u306B\u308A\u3093\u3057\u3083","\u306B\u308F\u3068\u308A","\u306B\u3093\u3044","\u306B\u3093\u304B","\u306B\u3093\u304D","\u306B\u3093\u3051\u3099\u3093","\u306B\u3093\u3057\u304D","\u306B\u3093\u3059\u3099\u3046","\u306B\u3093\u305D\u3046","\u306B\u3093\u305F\u3044","\u306B\u3093\u3061","\u306B\u3093\u3066\u3044","\u306B\u3093\u306B\u304F","\u306B\u3093\u3075\u309A","\u306B\u3093\u307E\u308A","\u306B\u3093\u3080","\u306B\u3093\u3081\u3044","\u306B\u3093\u3088\u3046","\u306C\u3044\u304F\u304D\u3099","\u306C\u304B\u3059","\u306C\u304F\u3099\u3044\u3068\u308B","\u306C\u304F\u3099\u3046","\u306C\u304F\u3082\u308A","\u306C\u3059\u3080","\u306C\u307E\u3048\u3072\u3099","\u306C\u3081\u308A","\u306C\u3089\u3059","\u306C\u3093\u3061\u3083\u304F","\u306D\u3042\u3051\u3099","\u306D\u3044\u304D","\u306D\u3044\u308B","\u306D\u3044\u308D","\u306D\u304F\u3099\u305B","\u306D\u304F\u305F\u3044","\u306D\u304F\u3089","\u306D\u3053\u305B\u3099","\u306D\u3053\u3080","\u306D\u3055\u3051\u3099","\u306D\u3059\u3053\u3099\u3059","\u306D\u305D\u3078\u3099\u308B","\u306D\u305F\u3099\u3093","\u306D\u3064\u3044","\u306D\u3063\u3057\u3093","\u306D\u3064\u305D\u3099\u3046","\u306D\u3063\u305F\u3044\u304D\u3099\u3087","\u306D\u3075\u3099\u305D\u304F","\u306D\u3075\u305F\u3099","\u306D\u307B\u3099\u3046","\u306D\u307B\u308A\u306F\u307B\u308A","\u306D\u307E\u304D","\u306D\u307E\u308F\u3057","\u306D\u307F\u307F","\u306D\u3080\u3044","\u306D\u3080\u305F\u3044","\u306D\u3082\u3068","\u306D\u3089\u3046","\u306D\u308F\u3055\u3099","\u306D\u3093\u3044\u308A","\u306D\u3093\u304A\u3057","\u306D\u3093\u304B\u3093","\u306D\u3093\u304D\u3093","\u306D\u3093\u304F\u3099","\u306D\u3093\u3055\u3099","\u306D\u3093\u3057","\u306D\u3093\u3061\u3083\u304F","\u306D\u3093\u3068\u3099","\u306D\u3093\u3072\u309A","\u306D\u3093\u3075\u3099\u3064","\u306D\u3093\u307E\u3064","\u306D\u3093\u308A\u3087\u3046","\u306D\u3093\u308C\u3044","\u306E\u3044\u3059\u3099","\u306E\u304A\u3064\u3099\u307E","\u306E\u304B\u3099\u3059","\u306E\u304D\u306A\u307F","\u306E\u3053\u304D\u3099\u308A","\u306E\u3053\u3059","\u306E\u3053\u308B","\u306E\u305B\u308B","\u306E\u305D\u3099\u304F","\u306E\u305D\u3099\u3080","\u306E\u305F\u307E\u3046","\u306E\u3061\u307B\u3068\u3099","\u306E\u3063\u304F","\u306E\u306F\u3099\u3059","\u306E\u306F\u3089","\u306E\u3078\u3099\u308B","\u306E\u307B\u3099\u308B","\u306E\u307F\u3082\u306E","\u306E\u3084\u307E","\u306E\u3089\u3044\u306C","\u306E\u3089\u306D\u3053","\u306E\u308A\u3082\u306E","\u306E\u308A\u3086\u304D","\u306E\u308C\u3093","\u306E\u3093\u304D","\u306F\u3099\u3042\u3044","\u306F\u3042\u304F","\u306F\u3099\u3042\u3055\u3093","\u306F\u3099\u3044\u304B","\u306F\u3099\u3044\u304F","\u306F\u3044\u3051\u3093","\u306F\u3044\u3053\u3099","\u306F\u3044\u3057\u3093","\u306F\u3044\u3059\u3044","\u306F\u3044\u305B\u3093","\u306F\u3044\u305D\u3046","\u306F\u3044\u3061","\u306F\u3099\u3044\u306F\u3099\u3044","\u306F\u3044\u308C\u3064","\u306F\u3048\u308B","\u306F\u304A\u308B","\u306F\u304B\u3044","\u306F\u3099\u304B\u308A","\u306F\u304B\u308B","\u306F\u304F\u3057\u3085","\u306F\u3051\u3093","\u306F\u3053\u3075\u3099","\u306F\u3055\u307F","\u306F\u3055\u3093","\u306F\u3057\u3053\u3099","\u306F\u3099\u3057\u3087","\u306F\u3057\u308B","\u306F\u305B\u308B","\u306F\u309A\u305D\u3053\u3093","\u306F\u305D\u3093","\u306F\u305F\u3093","\u306F\u3061\u307F\u3064","\u306F\u3064\u304A\u3093","\u306F\u3063\u304B\u304F","\u306F\u3064\u3099\u304D","\u306F\u3063\u304D\u308A","\u306F\u3063\u304F\u3064","\u306F\u3063\u3051\u3093","\u306F\u3063\u3053\u3046","\u306F\u3063\u3055\u3093","\u306F\u3063\u3057\u3093","\u306F\u3063\u305F\u3064","\u306F\u3063\u3061\u3085\u3046","\u306F\u3063\u3066\u3093","\u306F\u3063\u3072\u309A\u3087\u3046","\u306F\u3063\u307B\u309A\u3046","\u306F\u306A\u3059","\u306F\u306A\u3072\u3099","\u306F\u306B\u304B\u3080","\u306F\u3075\u3099\u3089\u3057","\u306F\u307F\u304B\u3099\u304D","\u306F\u3080\u304B\u3046","\u306F\u3081\u3064","\u306F\u3084\u3044","\u306F\u3084\u3057","\u306F\u3089\u3046","\u306F\u308D\u3046\u3043\u3093","\u306F\u308F\u3044","\u306F\u3093\u3044","\u306F\u3093\u3048\u3044","\u306F\u3093\u304A\u3093","\u306F\u3093\u304B\u304F","\u306F\u3093\u304D\u3087\u3046","\u306F\u3099\u3093\u304F\u3099\u307F","\u306F\u3093\u3053","\u306F\u3093\u3057\u3083","\u306F\u3093\u3059\u3046","\u306F\u3093\u305F\u3099\u3093","\u306F\u309A\u3093\u3061","\u306F\u309A\u3093\u3064","\u306F\u3093\u3066\u3044","\u306F\u3093\u3068\u3057","\u306F\u3093\u306E\u3046","\u306F\u3093\u306F\u309A","\u306F\u3093\u3075\u3099\u3093","\u306F\u3093\u3078\u309A\u3093","\u306F\u3093\u307B\u3099\u3046\u304D","\u306F\u3093\u3081\u3044","\u306F\u3093\u3089\u3093","\u306F\u3093\u308D\u3093","\u3072\u3044\u304D","\u3072\u3046\u3093","\u3072\u3048\u308B","\u3072\u304B\u304F","\u3072\u304B\u308A","\u3072\u304B\u308B","\u3072\u304B\u3093","\u3072\u304F\u3044","\u3072\u3051\u3064","\u3072\u3053\u3046\u304D","\u3072\u3053\u304F","\u3072\u3055\u3044","\u3072\u3055\u3057\u3075\u3099\u308A","\u3072\u3055\u3093","\u3072\u3099\u3057\u3099\u3085\u3064\u304B\u3093","\u3072\u3057\u3087","\u3072\u305D\u304B","\u3072\u305D\u3080","\u3072\u305F\u3080\u304D","\u3072\u305F\u3099\u308A","\u3072\u305F\u308B","\u3072\u3064\u304D\u3099","\u3072\u3063\u3053\u3057","\u3072\u3063\u3057","\u3072\u3064\u3057\u3099\u3085\u3072\u3093","\u3072\u3063\u3059","\u3072\u3064\u305B\u3099\u3093","\u3072\u309A\u3063\u305F\u308A","\u3072\u309A\u3063\u3061\u308A","\u3072\u3064\u3088\u3046","\u3072\u3066\u3044","\u3072\u3068\u3053\u3099\u307F","\u3072\u306A\u307E\u3064\u308A","\u3072\u306A\u3093","\u3072\u306D\u308B","\u3072\u306F\u3093","\u3072\u3072\u3099\u304F","\u3072\u3072\u3087\u3046","\u3072\u307B\u3046","\u3072\u307E\u308F\u308A","\u3072\u307E\u3093","\u3072\u307F\u3064","\u3072\u3081\u3044","\u3072\u3081\u3057\u3099\u3057","\u3072\u3084\u3051","\u3072\u3084\u3059","\u3072\u3088\u3046","\u3072\u3099\u3087\u3046\u304D","\u3072\u3089\u304B\u3099\u306A","\u3072\u3089\u304F","\u3072\u308A\u3064","\u3072\u308A\u3087\u3046","\u3072\u308B\u307E","\u3072\u308B\u3084\u3059\u307F","\u3072\u308C\u3044","\u3072\u308D\u3044","\u3072\u308D\u3046","\u3072\u308D\u304D","\u3072\u308D\u3086\u304D","\u3072\u3093\u304B\u304F","\u3072\u3093\u3051\u3064","\u3072\u3093\u3053\u3093","\u3072\u3093\u3057\u3085","\u3072\u3093\u305D\u3046","\u3072\u309A\u3093\u3061","\u3072\u3093\u306F\u309A\u3093","\u3072\u3099\u3093\u307B\u3099\u3046","\u3075\u3042\u3093","\u3075\u3044\u3046\u3061","\u3075\u3046\u3051\u3044","\u3075\u3046\u305B\u3093","\u3075\u309A\u3046\u305F\u308D\u3046","\u3075\u3046\u3068\u3046","\u3075\u3046\u3075","\u3075\u3048\u308B","\u3075\u304A\u3093","\u3075\u304B\u3044","\u3075\u304D\u3093","\u3075\u304F\u3055\u3099\u3064","\u3075\u304F\u3075\u3099\u304F\u308D","\u3075\u3053\u3046","\u3075\u3055\u3044","\u3075\u3057\u304D\u3099","\u3075\u3057\u3099\u307F","\u3075\u3059\u307E","\u3075\u305B\u3044","\u3075\u305B\u304F\u3099","\u3075\u305D\u304F","\u3075\u3099\u305F\u306B\u304F","\u3075\u305F\u3093","\u3075\u3061\u3087\u3046","\u3075\u3064\u3046","\u3075\u3064\u304B","\u3075\u3063\u304B\u3064","\u3075\u3063\u304D","\u3075\u3063\u3053\u304F","\u3075\u3099\u3068\u3099\u3046","\u3075\u3068\u308B","\u3075\u3068\u3093","\u3075\u306E\u3046","\u3075\u306F\u3044","\u3075\u3072\u3087\u3046","\u3075\u3078\u3093","\u3075\u307E\u3093","\u3075\u307F\u3093","\u3075\u3081\u3064","\u3075\u3081\u3093","\u3075\u3088\u3046","\u3075\u308A\u3053","\u3075\u308A\u308B","\u3075\u308B\u3044","\u3075\u3093\u3044\u304D","\u3075\u3099\u3093\u304B\u3099\u304F","\u3075\u3099\u3093\u304F\u3099","\u3075\u3093\u3057\u3064","\u3075\u3099\u3093\u305B\u304D","\u3075\u3093\u305D\u3046","\u3075\u3099\u3093\u307B\u309A\u3046","\u3078\u3044\u3042\u3093","\u3078\u3044\u304A\u3093","\u3078\u3044\u304B\u3099\u3044","\u3078\u3044\u304D","\u3078\u3044\u3051\u3099\u3093","\u3078\u3044\u3053\u3046","\u3078\u3044\u3055","\u3078\u3044\u3057\u3083","\u3078\u3044\u305B\u3064","\u3078\u3044\u305D","\u3078\u3044\u305F\u304F","\u3078\u3044\u3066\u3093","\u3078\u3044\u306D\u3064","\u3078\u3044\u308F","\u3078\u304D\u304B\u3099","\u3078\u3053\u3080","\u3078\u3099\u306B\u3044\u308D","\u3078\u3099\u306B\u3057\u3087\u3046\u304B\u3099","\u3078\u3089\u3059","\u3078\u3093\u304B\u3093","\u3078\u3099\u3093\u304D\u3087\u3046","\u3078\u3099\u3093\u3053\u3099\u3057","\u3078\u3093\u3055\u3044","\u3078\u3093\u305F\u3044","\u3078\u3099\u3093\u308A","\u307B\u3042\u3093","\u307B\u3044\u304F","\u307B\u3099\u3046\u304D\u3099\u3087","\u307B\u3046\u3053\u304F","\u307B\u3046\u305D\u3046","\u307B\u3046\u307B\u3046","\u307B\u3046\u3082\u3093","\u307B\u3046\u308A\u3064","\u307B\u3048\u308B","\u307B\u304A\u3093","\u307B\u304B\u3093","\u307B\u304D\u3087\u3046","\u307B\u3099\u304D\u3093","\u307B\u304F\u308D","\u307B\u3051\u3064","\u307B\u3051\u3093","\u307B\u3053\u3046","\u307B\u3053\u308B","\u307B\u3057\u3044","\u307B\u3057\u3064","\u307B\u3057\u3085","\u307B\u3057\u3087\u3046","\u307B\u305B\u3044","\u307B\u305D\u3044","\u307B\u305D\u304F","\u307B\u305F\u3066","\u307B\u305F\u308B","\u307B\u309A\u3061\u3075\u3099\u304F\u308D","\u307B\u3063\u304D\u3087\u304F","\u307B\u3063\u3055","\u307B\u3063\u305F\u3093","\u307B\u3068\u3093\u3068\u3099","\u307B\u3081\u308B","\u307B\u3093\u3044","\u307B\u3093\u304D","\u307B\u3093\u3051","\u307B\u3093\u3057\u3064","\u307B\u3093\u3084\u304F","\u307E\u3044\u306B\u3061","\u307E\u304B\u3044","\u307E\u304B\u305B\u308B","\u307E\u304B\u3099\u308B","\u307E\u3051\u308B","\u307E\u3053\u3068","\u307E\u3055\u3064","\u307E\u3057\u3099\u3081","\u307E\u3059\u304F","\u307E\u305B\u3099\u308B","\u307E\u3064\u308A","\u307E\u3068\u3081","\u307E\u306A\u3075\u3099","\u307E\u306C\u3051","\u307E\u306D\u304F","\u307E\u307B\u3046","\u307E\u3082\u308B","\u307E\u3086\u3051\u3099","\u307E\u3088\u3046","\u307E\u308D\u3084\u304B","\u307E\u308F\u3059","\u307E\u308F\u308A","\u307E\u308F\u308B","\u307E\u3093\u304B\u3099","\u307E\u3093\u304D\u3064","\u307E\u3093\u305D\u3099\u304F","\u307E\u3093\u306A\u304B","\u307F\u3044\u3089","\u307F\u3046\u3061","\u307F\u3048\u308B","\u307F\u304B\u3099\u304F","\u307F\u304B\u305F","\u307F\u304B\u3093","\u307F\u3051\u3093","\u307F\u3053\u3093","\u307F\u3057\u3099\u304B\u3044","\u307F\u3059\u3044","\u307F\u3059\u3048\u308B","\u307F\u305B\u308B","\u307F\u3063\u304B","\u307F\u3064\u304B\u308B","\u307F\u3064\u3051\u308B","\u307F\u3066\u3044","\u307F\u3068\u3081\u308B","\u307F\u306A\u3068","\u307F\u306A\u307F\u304B\u3055\u3044","\u307F\u306D\u3089\u308B","\u307F\u306E\u3046","\u307F\u306E\u304B\u3099\u3059","\u307F\u307B\u3093","\u307F\u3082\u3068","\u307F\u3084\u3051\u3099","\u307F\u3089\u3044","\u307F\u308A\u3087\u304F","\u307F\u308F\u304F","\u307F\u3093\u304B","\u307F\u3093\u305D\u3099\u304F","\u3080\u3044\u304B","\u3080\u3048\u304D","\u3080\u3048\u3093","\u3080\u304B\u3044","\u3080\u304B\u3046","\u3080\u304B\u3048","\u3080\u304B\u3057","\u3080\u304D\u3099\u3061\u3083","\u3080\u3051\u308B","\u3080\u3051\u3099\u3093","\u3080\u3055\u307B\u3099\u308B","\u3080\u3057\u3042\u3064\u3044","\u3080\u3057\u306F\u3099","\u3080\u3057\u3099\u3085\u3093","\u3080\u3057\u308D","\u3080\u3059\u3046","\u3080\u3059\u3053","\u3080\u3059\u3075\u3099","\u3080\u3059\u3081","\u3080\u305B\u308B","\u3080\u305B\u3093","\u3080\u3061\u3085\u3046","\u3080\u306A\u3057\u3044","\u3080\u306E\u3046","\u3080\u3084\u307F","\u3080\u3088\u3046","\u3080\u3089\u3055\u304D","\u3080\u308A\u3087\u3046","\u3080\u308D\u3093","\u3081\u3044\u3042\u3093","\u3081\u3044\u3046\u3093","\u3081\u3044\u3048\u3093","\u3081\u3044\u304B\u304F","\u3081\u3044\u304D\u3087\u304F","\u3081\u3044\u3055\u3044","\u3081\u3044\u3057","\u3081\u3044\u305D\u3046","\u3081\u3044\u3075\u3099\u3064","\u3081\u3044\u308C\u3044","\u3081\u3044\u308F\u304F","\u3081\u304F\u3099\u307E\u308C\u308B","\u3081\u3055\u3099\u3059","\u3081\u3057\u305F","\u3081\u3059\u3099\u3089\u3057\u3044","\u3081\u305F\u3099\u3064","\u3081\u307E\u3044","\u3081\u3084\u3059","\u3081\u3093\u304D\u3087","\u3081\u3093\u305B\u304D","\u3081\u3093\u3068\u3099\u3046","\u3082\u3046\u3057\u3042\u3051\u3099\u308B","\u3082\u3046\u3068\u3099\u3046\u3051\u3093","\u3082\u3048\u308B","\u3082\u304F\u3057","\u3082\u304F\u3066\u304D","\u3082\u304F\u3088\u3046\u3072\u3099","\u3082\u3061\u308D\u3093","\u3082\u3068\u3099\u308B","\u3082\u3089\u3046","\u3082\u3093\u304F","\u3082\u3093\u305F\u3099\u3044","\u3084\u304A\u3084","\u3084\u3051\u308B","\u3084\u3055\u3044","\u3084\u3055\u3057\u3044","\u3084\u3059\u3044","\u3084\u3059\u305F\u308D\u3046","\u3084\u3059\u307F","\u3084\u305B\u308B","\u3084\u305D\u3046","\u3084\u305F\u3044","\u3084\u3061\u3093","\u3084\u3063\u3068","\u3084\u3063\u306F\u309A\u308A","\u3084\u3075\u3099\u308B","\u3084\u3081\u308B","\u3084\u3084\u3053\u3057\u3044","\u3084\u3088\u3044","\u3084\u308F\u3089\u304B\u3044","\u3086\u3046\u304D","\u3086\u3046\u3072\u3099\u3093\u304D\u3087\u304F","\u3086\u3046\u3078\u3099","\u3086\u3046\u3081\u3044","\u3086\u3051\u3064","\u3086\u3057\u3085\u3064","\u3086\u305B\u3093","\u3086\u305D\u3046","\u3086\u305F\u304B","\u3086\u3061\u3083\u304F","\u3086\u3066\u3099\u308B","\u3086\u306B\u3085\u3046","\u3086\u3072\u3099\u308F","\u3086\u3089\u3044","\u3086\u308C\u308B","\u3088\u3046\u3044","\u3088\u3046\u304B","\u3088\u3046\u304D\u3085\u3046","\u3088\u3046\u3057\u3099","\u3088\u3046\u3059","\u3088\u3046\u3061\u3048\u3093","\u3088\u304B\u305B\u3099","\u3088\u304B\u3093","\u3088\u304D\u3093","\u3088\u304F\u305B\u3044","\u3088\u304F\u307B\u3099\u3046","\u3088\u3051\u3044","\u3088\u3053\u3099\u308C\u308B","\u3088\u3055\u3093","\u3088\u3057\u3085\u3046","\u3088\u305D\u3046","\u3088\u305D\u304F","\u3088\u3063\u304B","\u3088\u3066\u3044","\u3088\u3068\u3099\u304B\u3099\u308F\u304F","\u3088\u306D\u3064","\u3088\u3084\u304F","\u3088\u3086\u3046","\u3088\u308D\u3053\u3075\u3099","\u3088\u308D\u3057\u3044","\u3089\u3044\u3046","\u3089\u304F\u304B\u3099\u304D","\u3089\u304F\u3053\u3099","\u3089\u304F\u3055\u3064","\u3089\u304F\u305F\u3099","\u3089\u3057\u3093\u306F\u3099\u3093","\u3089\u305B\u3093","\u3089\u305D\u3099\u304F","\u3089\u305F\u3044","\u3089\u3063\u304B","\u3089\u308C\u3064","\u308A\u3048\u304D","\u308A\u304B\u3044","\u308A\u304D\u3055\u304F","\u308A\u304D\u305B\u3064","\u308A\u304F\u304F\u3099\u3093","\u308A\u304F\u3064","\u308A\u3051\u3093","\u308A\u3053\u3046","\u308A\u305B\u3044","\u308A\u305D\u3046","\u308A\u305D\u304F","\u308A\u3066\u3093","\u308A\u306D\u3093","\u308A\u3086\u3046","\u308A\u3085\u3046\u304B\u3099\u304F","\u308A\u3088\u3046","\u308A\u3087\u3046\u308A","\u308A\u3087\u304B\u3093","\u308A\u3087\u304F\u3061\u3083","\u308A\u3087\u3053\u3046","\u308A\u308A\u304F","\u308A\u308C\u304D","\u308A\u308D\u3093","\u308A\u3093\u3053\u3099","\u308B\u3044\u3051\u3044","\u308B\u3044\u3055\u3044","\u308B\u3044\u3057\u3099","\u308B\u3044\u305B\u304D","\u308B\u3059\u306F\u3099\u3093","\u308B\u308A\u304B\u3099\u308F\u3089","\u308C\u3044\u304B\u3093","\u308C\u3044\u304D\u3099","\u308C\u3044\u305B\u3044","\u308C\u3044\u305D\u3099\u3046\u3053","\u308C\u3044\u3068\u3046","\u308C\u3044\u307B\u3099\u3046","\u308C\u304D\u3057","\u308C\u304D\u305F\u3099\u3044","\u308C\u3093\u3042\u3044","\u308C\u3093\u3051\u3044","\u308C\u3093\u3053\u3093","\u308C\u3093\u3055\u3044","\u308C\u3093\u3057\u3085\u3046","\u308C\u3093\u305D\u3099\u304F","\u308C\u3093\u3089\u304F","\u308D\u3046\u304B","\u308D\u3046\u3053\u3099","\u308D\u3046\u3057\u3099\u3093","\u308D\u3046\u305D\u304F","\u308D\u304F\u304B\u3099","\u308D\u3053\u3064","\u308D\u3057\u3099\u3046\u3089","\u308D\u3057\u3085\u3064","\u308D\u305B\u3093","\u308D\u3066\u3093","\u308D\u3081\u3093","\u308D\u308C\u3064","\u308D\u3093\u304D\u3099","\u308D\u3093\u306F\u309A","\u308D\u3093\u3075\u3099\u3093","\u308D\u3093\u308A","\u308F\u304B\u3059","\u308F\u304B\u3081","\u308F\u304B\u3084\u307E","\u308F\u304B\u308C\u308B","\u308F\u3057\u3064","\u308F\u3057\u3099\u307E\u3057","\u308F\u3059\u308C\u3082\u306E","\u308F\u3089\u3046","\u308F\u308C\u308B"]'), zs = JSON.parse('["abacate","abaixo","abalar","abater","abduzir","abelha","aberto","abismo","abotoar","abranger","abreviar","abrigar","abrupto","absinto","absoluto","absurdo","abutre","acabado","acalmar","acampar","acanhar","acaso","aceitar","acelerar","acenar","acervo","acessar","acetona","achatar","acidez","acima","acionado","acirrar","aclamar","aclive","acolhida","acomodar","acoplar","acordar","acumular","acusador","adaptar","adega","adentro","adepto","adequar","aderente","adesivo","adeus","adiante","aditivo","adjetivo","adjunto","admirar","adorar","adquirir","adubo","adverso","advogado","aeronave","afastar","aferir","afetivo","afinador","afivelar","aflito","afluente","afrontar","agachar","agarrar","agasalho","agenciar","agilizar","agiota","agitado","agora","agradar","agreste","agrupar","aguardar","agulha","ajoelhar","ajudar","ajustar","alameda","alarme","alastrar","alavanca","albergue","albino","alcatra","aldeia","alecrim","alegria","alertar","alface","alfinete","algum","alheio","aliar","alicate","alienar","alinhar","aliviar","almofada","alocar","alpiste","alterar","altitude","alucinar","alugar","aluno","alusivo","alvo","amaciar","amador","amarelo","amassar","ambas","ambiente","ameixa","amenizar","amido","amistoso","amizade","amolador","amontoar","amoroso","amostra","amparar","ampliar","ampola","anagrama","analisar","anarquia","anatomia","andaime","anel","anexo","angular","animar","anjo","anomalia","anotado","ansioso","anterior","anuidade","anunciar","anzol","apagador","apalpar","apanhado","apego","apelido","apertada","apesar","apetite","apito","aplauso","aplicada","apoio","apontar","aposta","aprendiz","aprovar","aquecer","arame","aranha","arara","arcada","ardente","areia","arejar","arenito","aresta","argiloso","argola","arma","arquivo","arraial","arrebate","arriscar","arroba","arrumar","arsenal","arterial","artigo","arvoredo","asfaltar","asilado","aspirar","assador","assinar","assoalho","assunto","astral","atacado","atadura","atalho","atarefar","atear","atender","aterro","ateu","atingir","atirador","ativo","atoleiro","atracar","atrevido","atriz","atual","atum","auditor","aumentar","aura","aurora","autismo","autoria","autuar","avaliar","avante","avaria","avental","avesso","aviador","avisar","avulso","axila","azarar","azedo","azeite","azulejo","babar","babosa","bacalhau","bacharel","bacia","bagagem","baiano","bailar","baioneta","bairro","baixista","bajular","baleia","baliza","balsa","banal","bandeira","banho","banir","banquete","barato","barbado","baronesa","barraca","barulho","baseado","bastante","batata","batedor","batida","batom","batucar","baunilha","beber","beijo","beirada","beisebol","beldade","beleza","belga","beliscar","bendito","bengala","benzer","berimbau","berlinda","berro","besouro","bexiga","bezerro","bico","bicudo","bienal","bifocal","bifurcar","bigorna","bilhete","bimestre","bimotor","biologia","biombo","biosfera","bipolar","birrento","biscoito","bisneto","bispo","bissexto","bitola","bizarro","blindado","bloco","bloquear","boato","bobagem","bocado","bocejo","bochecha","boicotar","bolada","boletim","bolha","bolo","bombeiro","bonde","boneco","bonita","borbulha","borda","boreal","borracha","bovino","boxeador","branco","brasa","braveza","breu","briga","brilho","brincar","broa","brochura","bronzear","broto","bruxo","bucha","budismo","bufar","bule","buraco","busca","busto","buzina","cabana","cabelo","cabide","cabo","cabrito","cacau","cacetada","cachorro","cacique","cadastro","cadeado","cafezal","caiaque","caipira","caixote","cajado","caju","calafrio","calcular","caldeira","calibrar","calmante","calota","camada","cambista","camisa","camomila","campanha","camuflar","canavial","cancelar","caneta","canguru","canhoto","canivete","canoa","cansado","cantar","canudo","capacho","capela","capinar","capotar","capricho","captador","capuz","caracol","carbono","cardeal","careca","carimbar","carneiro","carpete","carreira","cartaz","carvalho","casaco","casca","casebre","castelo","casulo","catarata","cativar","caule","causador","cautelar","cavalo","caverna","cebola","cedilha","cegonha","celebrar","celular","cenoura","censo","centeio","cercar","cerrado","certeiro","cerveja","cetim","cevada","chacota","chaleira","chamado","chapada","charme","chatice","chave","chefe","chegada","cheiro","cheque","chicote","chifre","chinelo","chocalho","chover","chumbo","chutar","chuva","cicatriz","ciclone","cidade","cidreira","ciente","cigana","cimento","cinto","cinza","ciranda","circuito","cirurgia","citar","clareza","clero","clicar","clone","clube","coado","coagir","cobaia","cobertor","cobrar","cocada","coelho","coentro","coeso","cogumelo","coibir","coifa","coiote","colar","coleira","colher","colidir","colmeia","colono","coluna","comando","combinar","comentar","comitiva","comover","complexo","comum","concha","condor","conectar","confuso","congelar","conhecer","conjugar","consumir","contrato","convite","cooperar","copeiro","copiador","copo","coquetel","coragem","cordial","corneta","coronha","corporal","correio","cortejo","coruja","corvo","cosseno","costela","cotonete","couro","couve","covil","cozinha","cratera","cravo","creche","credor","creme","crer","crespo","criada","criminal","crioulo","crise","criticar","crosta","crua","cruzeiro","cubano","cueca","cuidado","cujo","culatra","culminar","culpar","cultura","cumprir","cunhado","cupido","curativo","curral","cursar","curto","cuspir","custear","cutelo","damasco","datar","debater","debitar","deboche","debulhar","decalque","decimal","declive","decote","decretar","dedal","dedicado","deduzir","defesa","defumar","degelo","degrau","degustar","deitado","deixar","delator","delegado","delinear","delonga","demanda","demitir","demolido","dentista","depenado","depilar","depois","depressa","depurar","deriva","derramar","desafio","desbotar","descanso","desenho","desfiado","desgaste","desigual","deslize","desmamar","desova","despesa","destaque","desviar","detalhar","detentor","detonar","detrito","deusa","dever","devido","devotado","dezena","diagrama","dialeto","didata","difuso","digitar","dilatado","diluente","diminuir","dinastia","dinheiro","diocese","direto","discreta","disfarce","disparo","disquete","dissipar","distante","ditador","diurno","diverso","divisor","divulgar","dizer","dobrador","dolorido","domador","dominado","donativo","donzela","dormente","dorsal","dosagem","dourado","doutor","drenagem","drible","drogaria","duelar","duende","dueto","duplo","duquesa","durante","duvidoso","eclodir","ecoar","ecologia","edificar","edital","educado","efeito","efetivar","ejetar","elaborar","eleger","eleitor","elenco","elevador","eliminar","elogiar","embargo","embolado","embrulho","embutido","emenda","emergir","emissor","empatia","empenho","empinado","empolgar","emprego","empurrar","emulador","encaixe","encenado","enchente","encontro","endeusar","endossar","enfaixar","enfeite","enfim","engajado","engenho","englobar","engomado","engraxar","enguia","enjoar","enlatar","enquanto","enraizar","enrolado","enrugar","ensaio","enseada","ensino","ensopado","entanto","enteado","entidade","entortar","entrada","entulho","envergar","enviado","envolver","enxame","enxerto","enxofre","enxuto","epiderme","equipar","ereto","erguido","errata","erva","ervilha","esbanjar","esbelto","escama","escola","escrita","escuta","esfinge","esfolar","esfregar","esfumado","esgrima","esmalte","espanto","espelho","espiga","esponja","espreita","espumar","esquerda","estaca","esteira","esticar","estofado","estrela","estudo","esvaziar","etanol","etiqueta","euforia","europeu","evacuar","evaporar","evasivo","eventual","evidente","evoluir","exagero","exalar","examinar","exato","exausto","excesso","excitar","exclamar","executar","exemplo","exibir","exigente","exonerar","expandir","expelir","expirar","explanar","exposto","expresso","expulsar","externo","extinto","extrato","fabricar","fabuloso","faceta","facial","fada","fadiga","faixa","falar","falta","familiar","fandango","fanfarra","fantoche","fardado","farelo","farinha","farofa","farpa","fartura","fatia","fator","favorita","faxina","fazenda","fechado","feijoada","feirante","felino","feminino","fenda","feno","fera","feriado","ferrugem","ferver","festejar","fetal","feudal","fiapo","fibrose","ficar","ficheiro","figurado","fileira","filho","filme","filtrar","firmeza","fisgada","fissura","fita","fivela","fixador","fixo","flacidez","flamingo","flanela","flechada","flora","flutuar","fluxo","focal","focinho","fofocar","fogo","foguete","foice","folgado","folheto","forjar","formiga","forno","forte","fosco","fossa","fragata","fralda","frango","frasco","fraterno","freira","frente","fretar","frieza","friso","fritura","fronha","frustrar","fruteira","fugir","fulano","fuligem","fundar","fungo","funil","furador","furioso","futebol","gabarito","gabinete","gado","gaiato","gaiola","gaivota","galega","galho","galinha","galocha","ganhar","garagem","garfo","gargalo","garimpo","garoupa","garrafa","gasoduto","gasto","gata","gatilho","gaveta","gazela","gelado","geleia","gelo","gemada","gemer","gemido","generoso","gengiva","genial","genoma","genro","geologia","gerador","germinar","gesso","gestor","ginasta","gincana","gingado","girafa","girino","glacial","glicose","global","glorioso","goela","goiaba","golfe","golpear","gordura","gorjeta","gorro","gostoso","goteira","governar","gracejo","gradual","grafite","gralha","grampo","granada","gratuito","graveto","graxa","grego","grelhar","greve","grilo","grisalho","gritaria","grosso","grotesco","grudado","grunhido","gruta","guache","guarani","guaxinim","guerrear","guiar","guincho","guisado","gula","guloso","guru","habitar","harmonia","haste","haver","hectare","herdar","heresia","hesitar","hiato","hibernar","hidratar","hiena","hino","hipismo","hipnose","hipoteca","hoje","holofote","homem","honesto","honrado","hormonal","hospedar","humorado","iate","ideia","idoso","ignorado","igreja","iguana","ileso","ilha","iludido","iluminar","ilustrar","imagem","imediato","imenso","imersivo","iminente","imitador","imortal","impacto","impedir","implante","impor","imprensa","impune","imunizar","inalador","inapto","inativo","incenso","inchar","incidir","incluir","incolor","indeciso","indireto","indutor","ineficaz","inerente","infantil","infestar","infinito","inflamar","informal","infrator","ingerir","inibido","inicial","inimigo","injetar","inocente","inodoro","inovador","inox","inquieto","inscrito","inseto","insistir","inspetor","instalar","insulto","intacto","integral","intimar","intocado","intriga","invasor","inverno","invicto","invocar","iogurte","iraniano","ironizar","irreal","irritado","isca","isento","isolado","isqueiro","italiano","janeiro","jangada","janta","jararaca","jardim","jarro","jasmim","jato","javali","jazida","jejum","joaninha","joelhada","jogador","joia","jornal","jorrar","jovem","juba","judeu","judoca","juiz","julgador","julho","jurado","jurista","juro","justa","labareda","laboral","lacre","lactante","ladrilho","lagarta","lagoa","laje","lamber","lamentar","laminar","lampejo","lanche","lapidar","lapso","laranja","lareira","largura","lasanha","lastro","lateral","latido","lavanda","lavoura","lavrador","laxante","lazer","lealdade","lebre","legado","legendar","legista","leigo","leiloar","leitura","lembrete","leme","lenhador","lentilha","leoa","lesma","leste","letivo","letreiro","levar","leveza","levitar","liberal","libido","liderar","ligar","ligeiro","limitar","limoeiro","limpador","linda","linear","linhagem","liquidez","listagem","lisura","litoral","livro","lixa","lixeira","locador","locutor","lojista","lombo","lona","longe","lontra","lorde","lotado","loteria","loucura","lousa","louvar","luar","lucidez","lucro","luneta","lustre","lutador","luva","macaco","macete","machado","macio","madeira","madrinha","magnata","magreza","maior","mais","malandro","malha","malote","maluco","mamilo","mamoeiro","mamute","manada","mancha","mandato","manequim","manhoso","manivela","manobrar","mansa","manter","manusear","mapeado","maquinar","marcador","maresia","marfim","margem","marinho","marmita","maroto","marquise","marreco","martelo","marujo","mascote","masmorra","massagem","mastigar","matagal","materno","matinal","matutar","maxilar","medalha","medida","medusa","megafone","meiga","melancia","melhor","membro","memorial","menino","menos","mensagem","mental","merecer","mergulho","mesada","mesclar","mesmo","mesquita","mestre","metade","meteoro","metragem","mexer","mexicano","micro","migalha","migrar","milagre","milenar","milhar","mimado","minerar","minhoca","ministro","minoria","miolo","mirante","mirtilo","misturar","mocidade","moderno","modular","moeda","moer","moinho","moita","moldura","moleza","molho","molinete","molusco","montanha","moqueca","morango","morcego","mordomo","morena","mosaico","mosquete","mostarda","motel","motim","moto","motriz","muda","muito","mulata","mulher","multar","mundial","munido","muralha","murcho","muscular","museu","musical","nacional","nadador","naja","namoro","narina","narrado","nascer","nativa","natureza","navalha","navegar","navio","neblina","nebuloso","negativa","negociar","negrito","nervoso","neta","neural","nevasca","nevoeiro","ninar","ninho","nitidez","nivelar","nobreza","noite","noiva","nomear","nominal","nordeste","nortear","notar","noticiar","noturno","novelo","novilho","novo","nublado","nudez","numeral","nupcial","nutrir","nuvem","obcecado","obedecer","objetivo","obrigado","obscuro","obstetra","obter","obturar","ocidente","ocioso","ocorrer","oculista","ocupado","ofegante","ofensiva","oferenda","oficina","ofuscado","ogiva","olaria","oleoso","olhar","oliveira","ombro","omelete","omisso","omitir","ondulado","oneroso","ontem","opcional","operador","oponente","oportuno","oposto","orar","orbitar","ordem","ordinal","orfanato","orgasmo","orgulho","oriental","origem","oriundo","orla","ortodoxo","orvalho","oscilar","ossada","osso","ostentar","otimismo","ousadia","outono","outubro","ouvido","ovelha","ovular","oxidar","oxigenar","pacato","paciente","pacote","pactuar","padaria","padrinho","pagar","pagode","painel","pairar","paisagem","palavra","palestra","palheta","palito","palmada","palpitar","pancada","panela","panfleto","panqueca","pantanal","papagaio","papelada","papiro","parafina","parcial","pardal","parede","partida","pasmo","passado","pastel","patamar","patente","patinar","patrono","paulada","pausar","peculiar","pedalar","pedestre","pediatra","pedra","pegada","peitoral","peixe","pele","pelicano","penca","pendurar","peneira","penhasco","pensador","pente","perceber","perfeito","pergunta","perito","permitir","perna","perplexo","persiana","pertence","peruca","pescado","pesquisa","pessoa","petiscar","piada","picado","piedade","pigmento","pilastra","pilhado","pilotar","pimenta","pincel","pinguim","pinha","pinote","pintar","pioneiro","pipoca","piquete","piranha","pires","pirueta","piscar","pistola","pitanga","pivete","planta","plaqueta","platina","plebeu","plumagem","pluvial","pneu","poda","poeira","poetisa","polegada","policiar","poluente","polvilho","pomar","pomba","ponderar","pontaria","populoso","porta","possuir","postal","pote","poupar","pouso","povoar","praia","prancha","prato","praxe","prece","predador","prefeito","premiar","prensar","preparar","presilha","pretexto","prevenir","prezar","primata","princesa","prisma","privado","processo","produto","profeta","proibido","projeto","prometer","propagar","prosa","protetor","provador","publicar","pudim","pular","pulmonar","pulseira","punhal","punir","pupilo","pureza","puxador","quadra","quantia","quarto","quase","quebrar","queda","queijo","quente","querido","quimono","quina","quiosque","rabanada","rabisco","rachar","racionar","radial","raiar","rainha","raio","raiva","rajada","ralado","ramal","ranger","ranhura","rapadura","rapel","rapidez","raposa","raquete","raridade","rasante","rascunho","rasgar","raspador","rasteira","rasurar","ratazana","ratoeira","realeza","reanimar","reaver","rebaixar","rebelde","rebolar","recado","recente","recheio","recibo","recordar","recrutar","recuar","rede","redimir","redonda","reduzida","reenvio","refinar","refletir","refogar","refresco","refugiar","regalia","regime","regra","reinado","reitor","rejeitar","relativo","remador","remendo","remorso","renovado","reparo","repelir","repleto","repolho","represa","repudiar","requerer","resenha","resfriar","resgatar","residir","resolver","respeito","ressaca","restante","resumir","retalho","reter","retirar","retomada","retratar","revelar","revisor","revolta","riacho","rica","rigidez","rigoroso","rimar","ringue","risada","risco","risonho","robalo","rochedo","rodada","rodeio","rodovia","roedor","roleta","romano","roncar","rosado","roseira","rosto","rota","roteiro","rotina","rotular","rouco","roupa","roxo","rubro","rugido","rugoso","ruivo","rumo","rupestre","russo","sabor","saciar","sacola","sacudir","sadio","safira","saga","sagrada","saibro","salada","saleiro","salgado","saliva","salpicar","salsicha","saltar","salvador","sambar","samurai","sanar","sanfona","sangue","sanidade","sapato","sarda","sargento","sarjeta","saturar","saudade","saxofone","sazonal","secar","secular","seda","sedento","sediado","sedoso","sedutor","segmento","segredo","segundo","seiva","seleto","selvagem","semanal","semente","senador","senhor","sensual","sentado","separado","sereia","seringa","serra","servo","setembro","setor","sigilo","silhueta","silicone","simetria","simpatia","simular","sinal","sincero","singular","sinopse","sintonia","sirene","siri","situado","soberano","sobra","socorro","sogro","soja","solda","soletrar","solteiro","sombrio","sonata","sondar","sonegar","sonhador","sono","soprano","soquete","sorrir","sorteio","sossego","sotaque","soterrar","sovado","sozinho","suavizar","subida","submerso","subsolo","subtrair","sucata","sucesso","suco","sudeste","sufixo","sugador","sugerir","sujeito","sulfato","sumir","suor","superior","suplicar","suposto","suprimir","surdina","surfista","surpresa","surreal","surtir","suspiro","sustento","tabela","tablete","tabuada","tacho","tagarela","talher","talo","talvez","tamanho","tamborim","tampa","tangente","tanto","tapar","tapioca","tardio","tarefa","tarja","tarraxa","tatuagem","taurino","taxativo","taxista","teatral","tecer","tecido","teclado","tedioso","teia","teimar","telefone","telhado","tempero","tenente","tensor","tentar","termal","terno","terreno","tese","tesoura","testado","teto","textura","texugo","tiara","tigela","tijolo","timbrar","timidez","tingido","tinteiro","tiragem","titular","toalha","tocha","tolerar","tolice","tomada","tomilho","tonel","tontura","topete","tora","torcido","torneio","torque","torrada","torto","tostar","touca","toupeira","toxina","trabalho","tracejar","tradutor","trafegar","trajeto","trama","trancar","trapo","traseiro","tratador","travar","treino","tremer","trepidar","trevo","triagem","tribo","triciclo","tridente","trilogia","trindade","triplo","triturar","triunfal","trocar","trombeta","trova","trunfo","truque","tubular","tucano","tudo","tulipa","tupi","turbo","turma","turquesa","tutelar","tutorial","uivar","umbigo","unha","unidade","uniforme","urologia","urso","urtiga","urubu","usado","usina","usufruir","vacina","vadiar","vagaroso","vaidoso","vala","valente","validade","valores","vantagem","vaqueiro","varanda","vareta","varrer","vascular","vasilha","vassoura","vazar","vazio","veado","vedar","vegetar","veicular","veleiro","velhice","veludo","vencedor","vendaval","venerar","ventre","verbal","verdade","vereador","vergonha","vermelho","verniz","versar","vertente","vespa","vestido","vetorial","viaduto","viagem","viajar","viatura","vibrador","videira","vidraria","viela","viga","vigente","vigiar","vigorar","vilarejo","vinco","vinheta","vinil","violeta","virada","virtude","visitar","visto","vitral","viveiro","vizinho","voador","voar","vogal","volante","voleibol","voltagem","volumoso","vontade","vulto","vuvuzela","xadrez","xarope","xeque","xeretar","xerife","xingar","zangado","zarpar","zebu","zelador","zombar","zoologia","zumbido"]'), Ns = JSON.parse('["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"]');
  var mi;
  function bi() {
    if (mi) return He;
    mi = 1, Object.defineProperty(He, "__esModule", {
      value: true
    });
    const e = {};
    He.wordlists = e;
    let c;
    He._default = c;
    try {
      He._default = c = xs, e.czech = c;
    } catch {
    }
    try {
      He._default = c = Is, e.chinese_simplified = c;
    } catch {
    }
    try {
      He._default = c = As, e.chinese_traditional = c;
    } catch {
    }
    try {
      He._default = c = Bs, e.korean = c;
    } catch {
    }
    try {
      He._default = c = Ps, e.french = c;
    } catch {
    }
    try {
      He._default = c = Os, e.italian = c;
    } catch {
    }
    try {
      He._default = c = Rs, e.spanish = c;
    } catch {
    }
    try {
      He._default = c = Us, e.japanese = c, e.JA = c;
    } catch {
    }
    try {
      He._default = c = zs, e.portuguese = c;
    } catch {
    }
    try {
      He._default = c = Ns, e.english = c, e.EN = c;
    } catch {
    }
    return He;
  }
  var gi;
  El = function() {
    if (gi) return De;
    gi = 1, Object.defineProperty(De, "__esModule", {
      value: true
    });
    const e = ht(), c = qa(), d = Ts(), a = qr(), v = bi();
    let o = v._default;
    const n = "Invalid mnemonic", r = "Invalid entropy", u = "Invalid mnemonic checksum", p = `A wordlist is required but a default could not be found.
Please pass a 2048 word array explicitly.`;
    function s(x) {
      return (x || "").normalize("NFKD");
    }
    function b(x, R, z) {
      for (; x.length < z; ) x = R + x;
      return x;
    }
    function m(x) {
      return parseInt(x, 2);
    }
    function f(x) {
      return x.map((R) => b(R.toString(2), "0", 8)).join("");
    }
    function h(x) {
      const z = x.length * 8 / 32, F = e.sha256(Uint8Array.from(x));
      return f(Array.from(F)).slice(0, z);
    }
    function l(x) {
      return "mnemonic" + (x || "");
    }
    function w(x, R) {
      const z = Uint8Array.from(Buffer.from(s(x), "utf8")), F = Uint8Array.from(Buffer.from(l(s(R)), "utf8")), C = d.pbkdf2(c.sha512, z, F, {
        c: 2048,
        dkLen: 64
      });
      return Buffer.from(C);
    }
    De.mnemonicToSeedSync = w;
    function y(x, R) {
      const z = Uint8Array.from(Buffer.from(s(x), "utf8")), F = Uint8Array.from(Buffer.from(l(s(R)), "utf8"));
      return d.pbkdf2Async(c.sha512, z, F, {
        c: 2048,
        dkLen: 64
      }).then((C) => Buffer.from(C));
    }
    De.mnemonicToSeed = y;
    function E(x, R) {
      if (R = R || o, !R) throw new Error(p);
      const z = s(x).split(" ");
      if (z.length % 3 !== 0) throw new Error(n);
      const F = z.map((O) => {
        const K = R.indexOf(O);
        if (K === -1) throw new Error(n);
        return b(K.toString(2), "0", 11);
      }).join(""), C = Math.floor(F.length / 33) * 32, G = F.slice(0, C), Q = F.slice(C), ee = G.match(/(.{1,8})/g).map(m);
      if (ee.length < 16) throw new Error(r);
      if (ee.length > 32) throw new Error(r);
      if (ee.length % 4 !== 0) throw new Error(r);
      const re = Buffer.from(ee);
      if (h(re) !== Q) throw new Error(u);
      return re.toString("hex");
    }
    De.mnemonicToEntropy = E;
    function _(x, R) {
      if (Buffer.isBuffer(x) || (x = Buffer.from(x, "hex")), R = R || o, !R) throw new Error(p);
      if (x.length < 16) throw new TypeError(r);
      if (x.length > 32) throw new TypeError(r);
      if (x.length % 4 !== 0) throw new TypeError(r);
      const z = f(Array.from(x)), F = h(x), Q = (z + F).match(/(.{1,11})/g).map((ee) => {
        const re = m(ee);
        return R[re];
      });
      return R[0] === "\u3042\u3044\u3053\u304F\u3057\u3093" ? Q.join("\u3000") : Q.join(" ");
    }
    De.entropyToMnemonic = _;
    function S(x, R, z) {
      if (x = x || 128, x % 32 !== 0) throw new TypeError(r);
      return R = R || ((F) => Buffer.from(a.randomBytes(F))), _(R(x / 8), z);
    }
    De.generateMnemonic = S;
    function I(x, R) {
      try {
        E(x, R);
      } catch {
        return false;
      }
      return true;
    }
    De.validateMnemonic = I;
    function A(x) {
      const R = v.wordlists[x];
      if (R) o = R;
      else throw new Error('Could not find wordlist for language "' + x + '"');
    }
    De.setDefaultWordlist = A;
    function L() {
      if (!o) throw new Error("No Default Wordlist set");
      return Object.keys(v.wordlists).filter((x) => x === "JA" || x === "EN" ? false : v.wordlists[x].every((R, z) => R === o[z]))[0];
    }
    De.getDefaultWordlist = L;
    var q = bi();
    return De.wordlists = q.wordlists, De;
  };
  var jt = {}, Ce = {}, Qe = {}, yi;
  function Xe() {
    return yi || (yi = 1, Object.defineProperty(Qe, "__esModule", {
      value: true
    }), Qe.testnet = Qe.regtest = Qe.bitcoin = void 0, Qe.bitcoin = {
      messagePrefix: `Bitcoin Signed Message:
`,
      bech32: "bc",
      bip32: {
        public: 76067358,
        private: 76066276
      },
      pubKeyHash: 0,
      scriptHash: 5,
      wif: 128
    }, Qe.regtest = {
      messagePrefix: `Bitcoin Signed Message:
`,
      bech32: "bcrt",
      bip32: {
        public: 70617039,
        private: 70615956
      },
      pubKeyHash: 111,
      scriptHash: 196,
      wif: 239
    }, Qe.testnet = {
      messagePrefix: `Bitcoin Signed Message:
`,
      bech32: "tb",
      bip32: {
        public: 70617039,
        private: 70615956
      },
      pubKeyHash: 111,
      scriptHash: 196,
      wif: 239
    }), Qe;
  }
  var qt = {}, Xr = {}, Ft = {}, Ze = {}, vi;
  function Ma() {
    if (vi) return Ze;
    vi = 1, Object.defineProperty(Ze, "__esModule", {
      value: true
    }), Ze.encode = Ze.decode = Ze.check = void 0;
    function e(a) {
      if (a.length < 8 || a.length > 72 || a[0] !== 48 || a[1] !== a.length - 2 || a[2] !== 2) return false;
      const v = a[3];
      if (v === 0 || 5 + v >= a.length || a[4 + v] !== 2) return false;
      const o = a[5 + v];
      return !(o === 0 || 6 + v + o !== a.length || a[4] & 128 || v > 1 && a[4] === 0 && !(a[5] & 128) || a[v + 6] & 128 || o > 1 && a[v + 6] === 0 && !(a[v + 7] & 128));
    }
    Ze.check = e;
    function c(a) {
      if (a.length < 8) throw new Error("DER sequence length is too short");
      if (a.length > 72) throw new Error("DER sequence length is too long");
      if (a[0] !== 48) throw new Error("Expected DER sequence");
      if (a[1] !== a.length - 2) throw new Error("DER sequence length is invalid");
      if (a[2] !== 2) throw new Error("Expected DER integer");
      const v = a[3];
      if (v === 0) throw new Error("R length is zero");
      if (5 + v >= a.length) throw new Error("R length is too long");
      if (a[4 + v] !== 2) throw new Error("Expected DER integer (2)");
      const o = a[5 + v];
      if (o === 0) throw new Error("S length is zero");
      if (6 + v + o !== a.length) throw new Error("S length is invalid");
      if (a[4] & 128) throw new Error("R value is negative");
      if (v > 1 && a[4] === 0 && !(a[5] & 128)) throw new Error("R value excessively padded");
      if (a[v + 6] & 128) throw new Error("S value is negative");
      if (o > 1 && a[v + 6] === 0 && !(a[v + 7] & 128)) throw new Error("S value excessively padded");
      return {
        r: a.slice(4, 4 + v),
        s: a.slice(6 + v)
      };
    }
    Ze.decode = c;
    function d(a, v) {
      const o = a.length, n = v.length;
      if (o === 0) throw new Error("R length is zero");
      if (n === 0) throw new Error("S length is zero");
      if (o > 33) throw new Error("R length is too long");
      if (n > 33) throw new Error("S length is too long");
      if (a[0] & 128) throw new Error("R value is negative");
      if (v[0] & 128) throw new Error("S value is negative");
      if (o > 1 && a[0] === 0 && !(a[1] & 128)) throw new Error("R value excessively padded");
      if (n > 1 && v[0] === 0 && !(v[1] & 128)) throw new Error("S value excessively padded");
      const r = Buffer.allocUnsafe(6 + o + n);
      return r[0] = 48, r[1] = r.length - 2, r[2] = 2, r[3] = a.length, a.copy(r, 4), r[4 + o] = 2, r[5 + o] = v.length, v.copy(r, 6 + o), r;
    }
    return Ze.encode = d, Ze;
  }
  var kr = {}, wi;
  function Kn() {
    if (wi) return kr;
    wi = 1, Object.defineProperty(kr, "__esModule", {
      value: true
    }), kr.REVERSE_OPS = kr.OPS = void 0;
    const e = {
      OP_FALSE: 0,
      OP_0: 0,
      OP_PUSHDATA1: 76,
      OP_PUSHDATA2: 77,
      OP_PUSHDATA4: 78,
      OP_1NEGATE: 79,
      OP_RESERVED: 80,
      OP_TRUE: 81,
      OP_1: 81,
      OP_2: 82,
      OP_3: 83,
      OP_4: 84,
      OP_5: 85,
      OP_6: 86,
      OP_7: 87,
      OP_8: 88,
      OP_9: 89,
      OP_10: 90,
      OP_11: 91,
      OP_12: 92,
      OP_13: 93,
      OP_14: 94,
      OP_15: 95,
      OP_16: 96,
      OP_NOP: 97,
      OP_VER: 98,
      OP_IF: 99,
      OP_NOTIF: 100,
      OP_VERIF: 101,
      OP_VERNOTIF: 102,
      OP_ELSE: 103,
      OP_ENDIF: 104,
      OP_VERIFY: 105,
      OP_RETURN: 106,
      OP_TOALTSTACK: 107,
      OP_FROMALTSTACK: 108,
      OP_2DROP: 109,
      OP_2DUP: 110,
      OP_3DUP: 111,
      OP_2OVER: 112,
      OP_2ROT: 113,
      OP_2SWAP: 114,
      OP_IFDUP: 115,
      OP_DEPTH: 116,
      OP_DROP: 117,
      OP_DUP: 118,
      OP_NIP: 119,
      OP_OVER: 120,
      OP_PICK: 121,
      OP_ROLL: 122,
      OP_ROT: 123,
      OP_SWAP: 124,
      OP_TUCK: 125,
      OP_CAT: 126,
      OP_SUBSTR: 127,
      OP_LEFT: 128,
      OP_RIGHT: 129,
      OP_SIZE: 130,
      OP_INVERT: 131,
      OP_AND: 132,
      OP_OR: 133,
      OP_XOR: 134,
      OP_EQUAL: 135,
      OP_EQUALVERIFY: 136,
      OP_RESERVED1: 137,
      OP_RESERVED2: 138,
      OP_1ADD: 139,
      OP_1SUB: 140,
      OP_2MUL: 141,
      OP_2DIV: 142,
      OP_NEGATE: 143,
      OP_ABS: 144,
      OP_NOT: 145,
      OP_0NOTEQUAL: 146,
      OP_ADD: 147,
      OP_SUB: 148,
      OP_MUL: 149,
      OP_DIV: 150,
      OP_MOD: 151,
      OP_LSHIFT: 152,
      OP_RSHIFT: 153,
      OP_BOOLAND: 154,
      OP_BOOLOR: 155,
      OP_NUMEQUAL: 156,
      OP_NUMEQUALVERIFY: 157,
      OP_NUMNOTEQUAL: 158,
      OP_LESSTHAN: 159,
      OP_GREATERTHAN: 160,
      OP_LESSTHANOREQUAL: 161,
      OP_GREATERTHANOREQUAL: 162,
      OP_MIN: 163,
      OP_MAX: 164,
      OP_WITHIN: 165,
      OP_RIPEMD160: 166,
      OP_SHA1: 167,
      OP_SHA256: 168,
      OP_HASH160: 169,
      OP_HASH256: 170,
      OP_CODESEPARATOR: 171,
      OP_CHECKSIG: 172,
      OP_CHECKSIGVERIFY: 173,
      OP_CHECKMULTISIG: 174,
      OP_CHECKMULTISIGVERIFY: 175,
      OP_NOP1: 176,
      OP_NOP2: 177,
      OP_CHECKLOCKTIMEVERIFY: 177,
      OP_NOP3: 178,
      OP_CHECKSEQUENCEVERIFY: 178,
      OP_NOP4: 179,
      OP_NOP5: 180,
      OP_NOP6: 181,
      OP_NOP7: 182,
      OP_NOP8: 183,
      OP_NOP9: 184,
      OP_NOP10: 185,
      OP_CHECKSIGADD: 186,
      OP_PUBKEYHASH: 253,
      OP_PUBKEY: 254,
      OP_INVALIDOPCODE: 255
    };
    kr.OPS = e;
    const c = {};
    kr.REVERSE_OPS = c;
    for (const d of Object.keys(e)) {
      const a = e[d];
      c[a] = d;
    }
    return kr;
  }
  var er = {}, _i;
  function Hs() {
    if (_i) return er;
    _i = 1, Object.defineProperty(er, "__esModule", {
      value: true
    }), er.decode = er.encode = er.encodingLength = void 0;
    const e = Kn();
    function c(v) {
      return v < e.OPS.OP_PUSHDATA1 ? 1 : v <= 255 ? 2 : v <= 65535 ? 3 : 5;
    }
    er.encodingLength = c;
    function d(v, o, n) {
      const r = c(o);
      return r === 1 ? v.writeUInt8(o, n) : r === 2 ? (v.writeUInt8(e.OPS.OP_PUSHDATA1, n), v.writeUInt8(o, n + 1)) : r === 3 ? (v.writeUInt8(e.OPS.OP_PUSHDATA2, n), v.writeUInt16LE(o, n + 1)) : (v.writeUInt8(e.OPS.OP_PUSHDATA4, n), v.writeUInt32LE(o, n + 1)), r;
    }
    er.encode = d;
    function a(v, o) {
      const n = v.readUInt8(o);
      let r, u;
      if (n < e.OPS.OP_PUSHDATA1) r = n, u = 1;
      else if (n === e.OPS.OP_PUSHDATA1) {
        if (o + 2 > v.length) return null;
        r = v.readUInt8(o + 1), u = 2;
      } else if (n === e.OPS.OP_PUSHDATA2) {
        if (o + 3 > v.length) return null;
        r = v.readUInt16LE(o + 1), u = 3;
      } else {
        if (o + 5 > v.length) return null;
        if (n !== e.OPS.OP_PUSHDATA4) throw new Error("Unexpected opcode");
        r = v.readUInt32LE(o + 1), u = 5;
      }
      return {
        opcode: n,
        number: r,
        size: u
      };
    }
    return er.decode = a, er;
  }
  var Sr = {}, Ei;
  function Cs() {
    if (Ei) return Sr;
    Ei = 1, Object.defineProperty(Sr, "__esModule", {
      value: true
    }), Sr.encode = Sr.decode = void 0;
    function e(a, v, o) {
      v = v || 4, o = o === void 0 ? true : o;
      const n = a.length;
      if (n === 0) return 0;
      if (n > v) throw new TypeError("Script number overflow");
      if (o && (a[n - 1] & 127) === 0 && (n <= 1 || (a[n - 2] & 128) === 0)) throw new Error("Non-minimally encoded script number");
      if (n === 5) {
        const u = a.readUInt32LE(0), p = a.readUInt8(4);
        return p & 128 ? -((p & -129) * 4294967296 + u) : p * 4294967296 + u;
      }
      let r = 0;
      for (let u = 0; u < n; ++u) r |= a[u] << 8 * u;
      return a[n - 1] & 128 ? -(r & ~(128 << 8 * (n - 1))) : r;
    }
    Sr.decode = e;
    function c(a) {
      return a > 2147483647 ? 5 : a > 8388607 ? 4 : a > 32767 ? 3 : a > 127 ? 2 : a > 0 ? 1 : 0;
    }
    function d(a) {
      let v = Math.abs(a);
      const o = c(v), n = Buffer.allocUnsafe(o), r = a < 0;
      for (let u = 0; u < o; ++u) n.writeUInt8(v & 255, u), v >>= 8;
      return n[o - 1] & 128 ? n.writeUInt8(r ? 128 : 0, o - 1) : r && (n[o - 1] |= 128), n;
    }
    return Sr.encode = d, Sr;
  }
  var Tr = {}, Mt = {}, Dt, ki;
  function Wn() {
    if (ki) return Dt;
    ki = 1;
    var e = {
      Array: function(d) {
        return d != null && d.constructor === Array;
      },
      Boolean: function(d) {
        return typeof d == "boolean";
      },
      Function: function(d) {
        return typeof d == "function";
      },
      Nil: function(d) {
        return d == null;
      },
      Number: function(d) {
        return typeof d == "number";
      },
      Object: function(d) {
        return typeof d == "object";
      },
      String: function(d) {
        return typeof d == "string";
      },
      "": function() {
        return true;
      }
    };
    e.Null = e.Nil;
    for (var c in e) e[c].toJSON = (function(d) {
      return d;
    }).bind(null, c);
    return Dt = e, Dt;
  }
  var Kt, Si;
  function Da() {
    if (Si) return Kt;
    Si = 1;
    var e = Wn();
    function c(m) {
      return m.name || m.toString().match(/function (.*?)\s*\(/)[1];
    }
    function d(m) {
      return e.Nil(m) ? "" : c(m.constructor);
    }
    function a(m) {
      return e.Function(m) ? "" : e.String(m) ? JSON.stringify(m) : m && e.Object(m) ? "" : m;
    }
    function v(m, f) {
      Error.captureStackTrace && Error.captureStackTrace(m, f);
    }
    function o(m) {
      return e.Function(m) ? m.toJSON ? m.toJSON() : c(m) : e.Array(m) ? "Array" : m && e.Object(m) ? "Object" : m !== void 0 ? m : "";
    }
    function n(m, f, h) {
      var l = a(f);
      return "Expected " + o(m) + ", got" + (h !== "" ? " " + h : "") + (l !== "" ? " " + l : "");
    }
    function r(m, f, h) {
      h = h || d(f), this.message = n(m, f, h), v(this, r), this.__type = m, this.__value = f, this.__valueTypeName = h;
    }
    r.prototype = Object.create(Error.prototype), r.prototype.constructor = r;
    function u(m, f, h, l, w) {
      var y = '" of type ';
      return f === "key" && (y = '" with key type '), n('property "' + o(h) + y + o(m), l, w);
    }
    function p(m, f, h, l, w) {
      m ? (w = w || d(l), this.message = u(m, h, f, l, w)) : this.message = 'Unexpected property "' + f + '"', v(this, r), this.__label = h, this.__property = f, this.__type = m, this.__value = l, this.__valueTypeName = w;
    }
    p.prototype = Object.create(Error.prototype), p.prototype.constructor = r;
    function s(m, f) {
      return new r(m, {}, f);
    }
    function b(m, f, h) {
      return m instanceof p ? (f = f + "." + m.__property, m = new p(m.__type, f, m.__label, m.__value, m.__valueTypeName)) : m instanceof r && (m = new p(m.__type, f, h, m.__value, m.__valueTypeName)), v(m), m;
    }
    return Kt = {
      TfTypeError: r,
      TfPropertyTypeError: p,
      tfCustomError: s,
      tfSubError: b,
      tfJSON: o,
      getValueTypeName: d
    }, Kt;
  }
  var Wt, Ti;
  function Ls() {
    if (Ti) return Wt;
    Ti = 1;
    var e = Wn(), c = Da();
    function d(A) {
      return Buffer.isBuffer(A);
    }
    function a(A) {
      return typeof A == "string" && /^([0-9a-f]{2})+$/i.test(A);
    }
    function v(A, L) {
      var q = A.toJSON();
      function x(R) {
        if (!A(R)) return false;
        if (R.length === L) return true;
        throw c.tfCustomError(q + "(Length: " + L + ")", q + "(Length: " + R.length + ")");
      }
      return x.toJSON = function() {
        return q;
      }, x;
    }
    var o = v.bind(null, e.Array), n = v.bind(null, d), r = v.bind(null, a), u = v.bind(null, e.String);
    function p(A, L, q) {
      q = q || e.Number;
      function x(R, z) {
        return q(R, z) && R > A && R < L;
      }
      return x.toJSON = function() {
        return `${q.toJSON()} between [${A}, ${L}]`;
      }, x;
    }
    var s = Math.pow(2, 53) - 1;
    function b(A) {
      return typeof A == "number" && isFinite(A);
    }
    function m(A) {
      return A << 24 >> 24 === A;
    }
    function f(A) {
      return A << 16 >> 16 === A;
    }
    function h(A) {
      return (A | 0) === A;
    }
    function l(A) {
      return typeof A == "number" && A >= -s && A <= s && Math.floor(A) === A;
    }
    function w(A) {
      return (A & 255) === A;
    }
    function y(A) {
      return (A & 65535) === A;
    }
    function E(A) {
      return A >>> 0 === A;
    }
    function _(A) {
      return typeof A == "number" && A >= 0 && A <= s && Math.floor(A) === A;
    }
    var S = {
      ArrayN: o,
      Buffer: d,
      BufferN: n,
      Finite: b,
      Hex: a,
      HexN: r,
      Int8: m,
      Int16: f,
      Int32: h,
      Int53: l,
      Range: p,
      StringN: u,
      UInt8: w,
      UInt16: y,
      UInt32: E,
      UInt53: _
    };
    for (var I in S) S[I].toJSON = (function(A) {
      return A;
    }).bind(null, I);
    return Wt = S, Wt;
  }
  var Vt, xi;
  function Ka() {
    if (xi) return Vt;
    xi = 1;
    var e = Da(), c = Wn(), d = e.tfJSON, a = e.TfTypeError, v = e.TfPropertyTypeError, o = e.tfSubError, n = e.getValueTypeName, r = {
      arrayOf: function(f, h) {
        f = u(f), h = h || {};
        function l(w, y) {
          return !c.Array(w) || c.Nil(w) || h.minLength !== void 0 && w.length < h.minLength || h.maxLength !== void 0 && w.length > h.maxLength || h.length !== void 0 && w.length !== h.length ? false : w.every(function(E, _) {
            try {
              return p(f, E, y);
            } catch (S) {
              throw o(S, _);
            }
          });
        }
        return l.toJSON = function() {
          var w = "[" + d(f) + "]";
          return h.length !== void 0 ? w += "{" + h.length + "}" : (h.minLength !== void 0 || h.maxLength !== void 0) && (w += "{" + (h.minLength === void 0 ? 0 : h.minLength) + "," + (h.maxLength === void 0 ? 1 / 0 : h.maxLength) + "}"), w;
        }, l;
      },
      maybe: function m(f) {
        f = u(f);
        function h(l, w) {
          return c.Nil(l) || f(l, w, m);
        }
        return h.toJSON = function() {
          return "?" + d(f);
        }, h;
      },
      map: function(f, h) {
        f = u(f), h && (h = u(h));
        function l(w, y) {
          if (!c.Object(w) || c.Nil(w)) return false;
          for (var E in w) {
            try {
              h && p(h, E, y);
            } catch (S) {
              throw o(S, E, "key");
            }
            try {
              var _ = w[E];
              p(f, _, y);
            } catch (S) {
              throw o(S, E);
            }
          }
          return true;
        }
        return h ? l.toJSON = function() {
          return "{" + d(h) + ": " + d(f) + "}";
        } : l.toJSON = function() {
          return "{" + d(f) + "}";
        }, l;
      },
      object: function(f) {
        var h = {};
        for (var l in f) h[l] = u(f[l]);
        function w(y, E) {
          if (!c.Object(y) || c.Nil(y)) return false;
          var _;
          try {
            for (_ in h) {
              var S = h[_], I = y[_];
              p(S, I, E);
            }
          } catch (A) {
            throw o(A, _);
          }
          if (E) {
            for (_ in y) if (!h[_]) throw new v(void 0, _);
          }
          return true;
        }
        return w.toJSON = function() {
          return d(h);
        }, w;
      },
      anyOf: function() {
        var f = [].slice.call(arguments).map(u);
        function h(l, w) {
          return f.some(function(y) {
            try {
              return p(y, l, w);
            } catch {
              return false;
            }
          });
        }
        return h.toJSON = function() {
          return f.map(d).join("|");
        }, h;
      },
      allOf: function() {
        var f = [].slice.call(arguments).map(u);
        function h(l, w) {
          return f.every(function(y) {
            try {
              return p(y, l, w);
            } catch {
              return false;
            }
          });
        }
        return h.toJSON = function() {
          return f.map(d).join(" & ");
        }, h;
      },
      quacksLike: function(f) {
        function h(l) {
          return f === n(l);
        }
        return h.toJSON = function() {
          return f;
        }, h;
      },
      tuple: function() {
        var f = [].slice.call(arguments).map(u);
        function h(l, w) {
          return c.Nil(l) || c.Nil(l.length) || w && l.length !== f.length ? false : f.every(function(y, E) {
            try {
              return p(y, l[E], w);
            } catch (_) {
              throw o(_, E);
            }
          });
        }
        return h.toJSON = function() {
          return "(" + f.map(d).join(", ") + ")";
        }, h;
      },
      value: function(f) {
        function h(l) {
          return l === f;
        }
        return h.toJSON = function() {
          return f;
        }, h;
      }
    };
    r.oneOf = r.anyOf;
    function u(m) {
      if (c.String(m)) return m[0] === "?" ? r.maybe(m.slice(1)) : c[m] || r.quacksLike(m);
      if (m && c.Object(m)) {
        if (c.Array(m)) {
          if (m.length !== 1) throw new TypeError("Expected compile() parameter of type Array of length 1");
          return r.arrayOf(m[0]);
        }
        return r.object(m);
      } else if (c.Function(m)) return m;
      return r.value(m);
    }
    function p(m, f, h, l) {
      if (c.Function(m)) {
        if (m(f, h)) return true;
        throw new a(l || m, f);
      }
      return p(u(m), f, h);
    }
    for (var s in c) p[s] = c[s];
    for (s in r) p[s] = r[s];
    var b = Ls();
    for (s in b) p[s] = b[s];
    return p.compile = u, p.TfTypeError = a, p.TfPropertyTypeError = v, Vt = p, Vt;
  }
  var Ii;
  function ze() {
    return Ii || (Ii = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.oneOf = e.Null = e.BufferN = e.Function = e.UInt32 = e.UInt8 = e.tuple = e.maybe = e.Hex = e.Buffer = e.String = e.Boolean = e.Array = e.Number = e.Hash256bit = e.Hash160bit = e.Buffer256bit = e.isTaptree = e.isTapleaf = e.TAPLEAF_VERSION_MASK = e.Satoshi = e.isPoint = e.stacksEqual = e.typeforce = void 0;
      const c = tr();
      e.typeforce = Ka();
      const d = c.Buffer.alloc(32, 0), a = c.Buffer.from("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f", "hex");
      function v(s, b) {
        return s.length !== b.length ? false : s.every((m, f) => m.equals(b[f]));
      }
      e.stacksEqual = v;
      function o(s) {
        if (!c.Buffer.isBuffer(s) || s.length < 33) return false;
        const b = s[0], m = s.slice(1, 33);
        if (m.compare(d) === 0 || m.compare(a) >= 0) return false;
        if ((b === 2 || b === 3) && s.length === 33) return true;
        const f = s.slice(33);
        return f.compare(d) === 0 || f.compare(a) >= 0 ? false : b === 4 && s.length === 65;
      }
      e.isPoint = o;
      const n = 21 * 1e14;
      function r(s) {
        return e.typeforce.UInt53(s) && s <= n;
      }
      e.Satoshi = r, e.TAPLEAF_VERSION_MASK = 254;
      function u(s) {
        return !s || !("output" in s) || !c.Buffer.isBuffer(s.output) ? false : s.version !== void 0 ? (s.version & e.TAPLEAF_VERSION_MASK) === s.version : true;
      }
      e.isTapleaf = u;
      function p(s) {
        return (0, e.Array)(s) ? s.length !== 2 ? false : s.every((b) => p(b)) : u(s);
      }
      e.isTaptree = p, e.Buffer256bit = e.typeforce.BufferN(32), e.Hash160bit = e.typeforce.BufferN(20), e.Hash256bit = e.typeforce.BufferN(32), e.Number = e.typeforce.Number, e.Array = e.typeforce.Array, e.Boolean = e.typeforce.Boolean, e.String = e.typeforce.String, e.Buffer = e.typeforce.Buffer, e.Hex = e.typeforce.Hex, e.maybe = e.typeforce.maybe, e.tuple = e.typeforce.tuple, e.UInt8 = e.typeforce.UInt8, e.UInt32 = e.typeforce.UInt32, e.Function = e.typeforce.Function, e.BufferN = e.typeforce.BufferN, e.Null = e.typeforce.Null, e.oneOf = e.typeforce.oneOf;
    }(Mt)), Mt;
  }
  var Ai;
  function js() {
    if (Ai) return Tr;
    Ai = 1, Object.defineProperty(Tr, "__esModule", {
      value: true
    }), Tr.encode = Tr.decode = void 0;
    const e = Ma(), c = je(), d = ze(), { typeforce: a } = d, v = Buffer.alloc(1, 0);
    function o(p) {
      let s = 0;
      for (; p[s] === 0; ) ++s;
      return s === p.length ? v : (p = p.slice(s), p[0] & 128 ? Buffer.concat([
        v,
        p
      ], 1 + p.length) : p);
    }
    function n(p) {
      p[0] === 0 && (p = p.slice(1));
      const s = Buffer.alloc(32, 0), b = Math.max(0, 32 - p.length);
      return p.copy(s, b), s;
    }
    function r(p) {
      const s = p.readUInt8(p.length - 1);
      if (!(0, c.isDefinedHashType)(s)) throw new Error("Invalid hashType " + s);
      const b = e.decode(p.slice(0, -1)), m = n(b.r), f = n(b.s);
      return {
        signature: Buffer.concat([
          m,
          f
        ], 64),
        hashType: s
      };
    }
    Tr.decode = r;
    function u(p, s) {
      if (a({
        signature: d.BufferN(64),
        hashType: d.UInt8
      }, {
        signature: p,
        hashType: s
      }), !(0, c.isDefinedHashType)(s)) throw new Error("Invalid hashType " + s);
      const b = Buffer.allocUnsafe(1);
      b.writeUInt8(s, 0);
      const m = o(p.slice(0, 32)), f = o(p.slice(32, 64));
      return Buffer.concat([
        e.encode(m, f),
        b
      ]);
    }
    return Tr.encode = u, Tr;
  }
  var Bi;
  function je() {
    return Bi || (Bi = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.signature = e.number = e.isCanonicalScriptSignature = e.isDefinedHashType = e.isCanonicalPubKey = e.toStack = e.fromASM = e.toASM = e.decompile = e.compile = e.countNonPushOnlyOPs = e.isPushOnly = e.OPS = void 0;
      const c = Ma(), d = Kn();
      Object.defineProperty(e, "OPS", {
        enumerable: true,
        get: function() {
          return d.OPS;
        }
      });
      const a = Hs(), v = Cs(), o = js(), n = ze(), { typeforce: r } = n, u = d.OPS.OP_RESERVED;
      function p(x) {
        return n.Number(x) && (x === d.OPS.OP_0 || x >= d.OPS.OP_1 && x <= d.OPS.OP_16 || x === d.OPS.OP_1NEGATE);
      }
      function s(x) {
        return n.Buffer(x) || p(x);
      }
      function b(x) {
        return n.Array(x) && x.every(s);
      }
      e.isPushOnly = b;
      function m(x) {
        return x.length - x.filter(s).length;
      }
      e.countNonPushOnlyOPs = m;
      function f(x) {
        if (x.length === 0) return d.OPS.OP_0;
        if (x.length === 1) {
          if (x[0] >= 1 && x[0] <= 16) return u + x[0];
          if (x[0] === 129) return d.OPS.OP_1NEGATE;
        }
      }
      function h(x) {
        return Buffer.isBuffer(x);
      }
      function l(x) {
        return n.Array(x);
      }
      function w(x) {
        return Buffer.isBuffer(x);
      }
      function y(x) {
        if (h(x)) return x;
        r(n.Array, x);
        const R = x.reduce((C, G) => w(G) ? G.length === 1 && f(G) !== void 0 ? C + 1 : C + a.encodingLength(G.length) + G.length : C + 1, 0), z = Buffer.allocUnsafe(R);
        let F = 0;
        if (x.forEach((C) => {
          if (w(C)) {
            const G = f(C);
            if (G !== void 0) {
              z.writeUInt8(G, F), F += 1;
              return;
            }
            F += a.encode(z, C.length, F), C.copy(z, F), F += C.length;
          } else z.writeUInt8(C, F), F += 1;
        }), F !== z.length) throw new Error("Could not decode chunks");
        return z;
      }
      e.compile = y;
      function E(x) {
        if (l(x)) return x;
        r(n.Buffer, x);
        const R = [];
        let z = 0;
        for (; z < x.length; ) {
          const F = x[z];
          if (F > d.OPS.OP_0 && F <= d.OPS.OP_PUSHDATA4) {
            const C = a.decode(x, z);
            if (C === null || (z += C.size, z + C.number > x.length)) return null;
            const G = x.slice(z, z + C.number);
            z += C.number;
            const Q = f(G);
            Q !== void 0 ? R.push(Q) : R.push(G);
          } else R.push(F), z += 1;
        }
        return R;
      }
      e.decompile = E;
      function _(x) {
        if (h(x) && (x = E(x)), !x) throw new Error("Could not convert invalid chunks to ASM");
        return x.map((R) => {
          if (w(R)) {
            const z = f(R);
            if (z === void 0) return R.toString("hex");
            R = z;
          }
          return d.REVERSE_OPS[R];
        }).join(" ");
      }
      e.toASM = _;
      function S(x) {
        return r(n.String, x), y(x.split(" ").map((R) => d.OPS[R] !== void 0 ? d.OPS[R] : (r(n.Hex, R), Buffer.from(R, "hex"))));
      }
      e.fromASM = S;
      function I(x) {
        return x = E(x), r(b, x), x.map((R) => w(R) ? R : R === d.OPS.OP_0 ? Buffer.allocUnsafe(0) : v.encode(R - u));
      }
      e.toStack = I;
      function A(x) {
        return n.isPoint(x);
      }
      e.isCanonicalPubKey = A;
      function L(x) {
        const R = x & -129;
        return R > 0 && R < 4;
      }
      e.isDefinedHashType = L;
      function q(x) {
        return !Buffer.isBuffer(x) || !L(x[x.length - 1]) ? false : c.check(x.slice(0, -1));
      }
      e.isCanonicalScriptSignature = q, e.number = v, e.signature = o;
    }(Ft)), Ft;
  }
  var xr = {}, Pi;
  function yr() {
    if (Pi) return xr;
    Pi = 1, Object.defineProperty(xr, "__esModule", {
      value: true
    }), xr.value = xr.prop = void 0;
    function e(d, a, v) {
      Object.defineProperty(d, a, {
        configurable: true,
        enumerable: true,
        get() {
          const o = v.call(this);
          return this[a] = o, o;
        },
        set(o) {
          Object.defineProperty(this, a, {
            configurable: true,
            enumerable: true,
            value: o,
            writable: true
          });
        }
      });
    }
    xr.prop = e;
    function c(d) {
      let a;
      return () => (a !== void 0 || (a = d()), a);
    }
    return xr.value = c, xr;
  }
  var Oi;
  function qs() {
    if (Oi) return Xr;
    Oi = 1, Object.defineProperty(Xr, "__esModule", {
      value: true
    }), Xr.p2data = void 0;
    const e = Xe(), c = je(), d = ze(), a = yr(), v = c.OPS;
    function o(n, r) {
      if (!n.data && !n.output) throw new TypeError("Not enough data");
      r = Object.assign({
        validate: true
      }, r || {}), (0, d.typeforce)({
        network: d.typeforce.maybe(d.typeforce.Object),
        output: d.typeforce.maybe(d.typeforce.Buffer),
        data: d.typeforce.maybe(d.typeforce.arrayOf(d.typeforce.Buffer))
      }, n);
      const p = {
        name: "embed",
        network: n.network || e.bitcoin
      };
      if (a.prop(p, "output", () => {
        if (n.data) return c.compile([
          v.OP_RETURN
        ].concat(n.data));
      }), a.prop(p, "data", () => {
        if (n.output) return c.decompile(n.output).slice(1);
      }), r.validate && n.output) {
        const s = c.decompile(n.output);
        if (s[0] !== v.OP_RETURN) throw new TypeError("Output is invalid");
        if (!s.slice(1).every(d.typeforce.Buffer)) throw new TypeError("Output is invalid");
        if (n.data && !(0, d.stacksEqual)(n.data, p.data)) throw new TypeError("Data mismatch");
      }
      return Object.assign(p, n);
    }
    return Xr.p2data = o, Xr;
  }
  var Yr = {}, Ri;
  function Fs() {
    if (Ri) return Yr;
    Ri = 1, Object.defineProperty(Yr, "__esModule", {
      value: true
    }), Yr.p2ms = void 0;
    const e = Xe(), c = je(), d = ze(), a = yr(), v = c.OPS, o = v.OP_RESERVED;
    function n(r, u) {
      if (!r.input && !r.output && !(r.pubkeys && r.m !== void 0) && !r.signatures) throw new TypeError("Not enough data");
      u = Object.assign({
        validate: true
      }, u || {});
      function p(l) {
        return c.isCanonicalScriptSignature(l) || (u.allowIncomplete && l === v.OP_0) !== void 0;
      }
      (0, d.typeforce)({
        network: d.typeforce.maybe(d.typeforce.Object),
        m: d.typeforce.maybe(d.typeforce.Number),
        n: d.typeforce.maybe(d.typeforce.Number),
        output: d.typeforce.maybe(d.typeforce.Buffer),
        pubkeys: d.typeforce.maybe(d.typeforce.arrayOf(d.isPoint)),
        signatures: d.typeforce.maybe(d.typeforce.arrayOf(p)),
        input: d.typeforce.maybe(d.typeforce.Buffer)
      }, r);
      const b = {
        network: r.network || e.bitcoin
      };
      let m = [], f = false;
      function h(l) {
        f || (f = true, m = c.decompile(l), b.m = m[0] - o, b.n = m[m.length - 2] - o, b.pubkeys = m.slice(1, -2));
      }
      if (a.prop(b, "output", () => {
        if (r.m && b.n && r.pubkeys) return c.compile([].concat(o + r.m, r.pubkeys, o + b.n, v.OP_CHECKMULTISIG));
      }), a.prop(b, "m", () => {
        if (b.output) return h(b.output), b.m;
      }), a.prop(b, "n", () => {
        if (b.pubkeys) return b.pubkeys.length;
      }), a.prop(b, "pubkeys", () => {
        if (r.output) return h(r.output), b.pubkeys;
      }), a.prop(b, "signatures", () => {
        if (r.input) return c.decompile(r.input).slice(1);
      }), a.prop(b, "input", () => {
        if (r.signatures) return c.compile([
          v.OP_0
        ].concat(r.signatures));
      }), a.prop(b, "witness", () => {
        if (b.input) return [];
      }), a.prop(b, "name", () => {
        if (!(!b.m || !b.n)) return `p2ms(${b.m} of ${b.n})`;
      }), u.validate) {
        if (r.output) {
          if (h(r.output), !d.typeforce.Number(m[0])) throw new TypeError("Output is invalid");
          if (!d.typeforce.Number(m[m.length - 2])) throw new TypeError("Output is invalid");
          if (m[m.length - 1] !== v.OP_CHECKMULTISIG) throw new TypeError("Output is invalid");
          if (b.m <= 0 || b.n > 16 || b.m > b.n || b.n !== m.length - 3) throw new TypeError("Output is invalid");
          if (!b.pubkeys.every((l) => (0, d.isPoint)(l))) throw new TypeError("Output is invalid");
          if (r.m !== void 0 && r.m !== b.m) throw new TypeError("m mismatch");
          if (r.n !== void 0 && r.n !== b.n) throw new TypeError("n mismatch");
          if (r.pubkeys && !(0, d.stacksEqual)(r.pubkeys, b.pubkeys)) throw new TypeError("Pubkeys mismatch");
        }
        if (r.pubkeys) {
          if (r.n !== void 0 && r.n !== r.pubkeys.length) throw new TypeError("Pubkey count mismatch");
          if (b.n = r.pubkeys.length, b.n < b.m) throw new TypeError("Pubkey count cannot be less than m");
        }
        if (r.signatures) {
          if (r.signatures.length < b.m) throw new TypeError("Not enough signatures provided");
          if (r.signatures.length > b.m) throw new TypeError("Too many signatures provided");
        }
        if (r.input) {
          if (r.input[0] !== v.OP_0) throw new TypeError("Input is invalid");
          if (b.signatures.length === 0 || !b.signatures.every(p)) throw new TypeError("Input has invalid signature(s)");
          if (r.signatures && !(0, d.stacksEqual)(r.signatures, b.signatures)) throw new TypeError("Signature mismatch");
          if (r.m !== void 0 && r.m !== r.signatures.length) throw new TypeError("Signature count mismatch");
        }
      }
      return Object.assign(b, r);
    }
    return Yr.p2ms = n, Yr;
  }
  var Jr = {}, Ui;
  function Ms() {
    if (Ui) return Jr;
    Ui = 1, Object.defineProperty(Jr, "__esModule", {
      value: true
    }), Jr.p2pk = void 0;
    const e = Xe(), c = je(), d = ze(), a = yr(), v = c.OPS;
    function o(n, r) {
      if (!n.input && !n.output && !n.pubkey && !n.input && !n.signature) throw new TypeError("Not enough data");
      r = Object.assign({
        validate: true
      }, r || {}), (0, d.typeforce)({
        network: d.typeforce.maybe(d.typeforce.Object),
        output: d.typeforce.maybe(d.typeforce.Buffer),
        pubkey: d.typeforce.maybe(d.isPoint),
        signature: d.typeforce.maybe(c.isCanonicalScriptSignature),
        input: d.typeforce.maybe(d.typeforce.Buffer)
      }, n);
      const u = a.value(() => c.decompile(n.input)), s = {
        name: "p2pk",
        network: n.network || e.bitcoin
      };
      if (a.prop(s, "output", () => {
        if (n.pubkey) return c.compile([
          n.pubkey,
          v.OP_CHECKSIG
        ]);
      }), a.prop(s, "pubkey", () => {
        if (n.output) return n.output.slice(1, -1);
      }), a.prop(s, "signature", () => {
        if (n.input) return u()[0];
      }), a.prop(s, "input", () => {
        if (n.signature) return c.compile([
          n.signature
        ]);
      }), a.prop(s, "witness", () => {
        if (s.input) return [];
      }), r.validate) {
        if (n.output) {
          if (n.output[n.output.length - 1] !== v.OP_CHECKSIG) throw new TypeError("Output is invalid");
          if (!(0, d.isPoint)(s.pubkey)) throw new TypeError("Output pubkey is invalid");
          if (n.pubkey && !n.pubkey.equals(s.pubkey)) throw new TypeError("Pubkey mismatch");
        }
        if (n.signature && n.input && !n.input.equals(s.input)) throw new TypeError("Signature mismatch");
        if (n.input) {
          if (u().length !== 1) throw new TypeError("Input is invalid");
          if (!c.isCanonicalScriptSignature(s.signature)) throw new TypeError("Input has invalid signature");
        }
      }
      return Object.assign(s, n);
    }
    return Jr.p2pk = o, Jr;
  }
  var Qr = {}, Gt = {}, Ir = {}, Le = {}, zi;
  function Wa() {
    if (zi) return Le;
    zi = 1, Object.defineProperty(Le, "__esModule", {
      value: true
    }), Le.ripemd160 = Le.RIPEMD160 = Le.md5 = Le.MD5 = Le.sha1 = Le.SHA1 = void 0;
    const e = La(), c = qr(), d = Uint32Array.from([
      1732584193,
      4023233417,
      2562383102,
      271733878,
      3285377520
    ]), a = new Uint32Array(80);
    class v extends e.HashMD {
      constructor() {
        super(64, 20, 8, false), this.A = d[0] | 0, this.B = d[1] | 0, this.C = d[2] | 0, this.D = d[3] | 0, this.E = d[4] | 0;
      }
      get() {
        const { A: x, B: R, C: z, D: F, E: C } = this;
        return [
          x,
          R,
          z,
          F,
          C
        ];
      }
      set(x, R, z, F, C) {
        this.A = x | 0, this.B = R | 0, this.C = z | 0, this.D = F | 0, this.E = C | 0;
      }
      process(x, R) {
        for (let ee = 0; ee < 16; ee++, R += 4) a[ee] = x.getUint32(R, false);
        for (let ee = 16; ee < 80; ee++) a[ee] = (0, c.rotl)(a[ee - 3] ^ a[ee - 8] ^ a[ee - 14] ^ a[ee - 16], 1);
        let { A: z, B: F, C, D: G, E: Q } = this;
        for (let ee = 0; ee < 80; ee++) {
          let re, D;
          ee < 20 ? (re = (0, e.Chi)(F, C, G), D = 1518500249) : ee < 40 ? (re = F ^ C ^ G, D = 1859775393) : ee < 60 ? (re = (0, e.Maj)(F, C, G), D = 2400959708) : (re = F ^ C ^ G, D = 3395469782);
          const O = (0, c.rotl)(z, 5) + re + Q + D + a[ee] | 0;
          Q = G, G = C, C = (0, c.rotl)(F, 30), F = z, z = O;
        }
        z = z + this.A | 0, F = F + this.B | 0, C = C + this.C | 0, G = G + this.D | 0, Q = Q + this.E | 0, this.set(z, F, C, G, Q);
      }
      roundClean() {
        (0, c.clean)(a);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0), (0, c.clean)(this.buffer);
      }
    }
    Le.SHA1 = v, Le.sha1 = (0, c.createHasher)(() => new v());
    const o = Math.pow(2, 32), n = Array.from({
      length: 64
    }, (q, x) => Math.floor(o * Math.abs(Math.sin(x + 1)))), r = d.slice(0, 4), u = new Uint32Array(16);
    class p extends e.HashMD {
      constructor() {
        super(64, 16, 8, true), this.A = r[0] | 0, this.B = r[1] | 0, this.C = r[2] | 0, this.D = r[3] | 0;
      }
      get() {
        const { A: x, B: R, C: z, D: F } = this;
        return [
          x,
          R,
          z,
          F
        ];
      }
      set(x, R, z, F) {
        this.A = x | 0, this.B = R | 0, this.C = z | 0, this.D = F | 0;
      }
      process(x, R) {
        for (let Q = 0; Q < 16; Q++, R += 4) u[Q] = x.getUint32(R, true);
        let { A: z, B: F, C, D: G } = this;
        for (let Q = 0; Q < 64; Q++) {
          let ee, re, D;
          Q < 16 ? (ee = (0, e.Chi)(F, C, G), re = Q, D = [
            7,
            12,
            17,
            22
          ]) : Q < 32 ? (ee = (0, e.Chi)(G, F, C), re = (5 * Q + 1) % 16, D = [
            5,
            9,
            14,
            20
          ]) : Q < 48 ? (ee = F ^ C ^ G, re = (3 * Q + 5) % 16, D = [
            4,
            11,
            16,
            23
          ]) : (ee = C ^ (F | ~G), re = 7 * Q % 16, D = [
            6,
            10,
            15,
            21
          ]), ee = ee + z + n[Q] + u[re], z = G, G = C, C = F, F = F + (0, c.rotl)(ee, D[Q % 4]);
        }
        z = z + this.A | 0, F = F + this.B | 0, C = C + this.C | 0, G = G + this.D | 0, this.set(z, F, C, G);
      }
      roundClean() {
        (0, c.clean)(u);
      }
      destroy() {
        this.set(0, 0, 0, 0), (0, c.clean)(this.buffer);
      }
    }
    Le.MD5 = p, Le.md5 = (0, c.createHasher)(() => new p());
    const s = Uint8Array.from([
      7,
      4,
      13,
      1,
      10,
      6,
      15,
      3,
      12,
      0,
      9,
      5,
      2,
      14,
      11,
      8
    ]), b = Uint8Array.from(new Array(16).fill(0).map((q, x) => x)), m = b.map((q) => (9 * q + 5) % 16), f = (() => {
      const R = [
        [
          b
        ],
        [
          m
        ]
      ];
      for (let z = 0; z < 4; z++) for (let F of R) F.push(F[z].map((C) => s[C]));
      return R;
    })(), h = f[0], l = f[1], w = [
      [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8
      ],
      [
        12,
        13,
        11,
        15,
        6,
        9,
        9,
        7,
        12,
        15,
        11,
        13,
        7,
        8,
        7,
        7
      ],
      [
        13,
        15,
        14,
        11,
        7,
        7,
        6,
        8,
        13,
        14,
        13,
        12,
        5,
        5,
        6,
        9
      ],
      [
        14,
        11,
        12,
        14,
        8,
        6,
        5,
        5,
        15,
        12,
        15,
        14,
        9,
        9,
        8,
        6
      ],
      [
        15,
        12,
        13,
        13,
        9,
        5,
        8,
        6,
        14,
        11,
        12,
        11,
        8,
        6,
        5,
        5
      ]
    ].map((q) => Uint8Array.from(q)), y = h.map((q, x) => q.map((R) => w[x][R])), E = l.map((q, x) => q.map((R) => w[x][R])), _ = Uint32Array.from([
      0,
      1518500249,
      1859775393,
      2400959708,
      2840853838
    ]), S = Uint32Array.from([
      1352829926,
      1548603684,
      1836072691,
      2053994217,
      0
    ]);
    function I(q, x, R, z) {
      return q === 0 ? x ^ R ^ z : q === 1 ? x & R | ~x & z : q === 2 ? (x | ~R) ^ z : q === 3 ? x & z | R & ~z : x ^ (R | ~z);
    }
    const A = new Uint32Array(16);
    class L extends e.HashMD {
      constructor() {
        super(64, 20, 8, true), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
      }
      get() {
        const { h0: x, h1: R, h2: z, h3: F, h4: C } = this;
        return [
          x,
          R,
          z,
          F,
          C
        ];
      }
      set(x, R, z, F, C) {
        this.h0 = x | 0, this.h1 = R | 0, this.h2 = z | 0, this.h3 = F | 0, this.h4 = C | 0;
      }
      process(x, R) {
        for (let V = 0; V < 16; V++, R += 4) A[V] = x.getUint32(R, true);
        let z = this.h0 | 0, F = z, C = this.h1 | 0, G = C, Q = this.h2 | 0, ee = Q, re = this.h3 | 0, D = re, O = this.h4 | 0, K = O;
        for (let V = 0; V < 5; V++) {
          const Z = 4 - V, ue = _[V], M = S[V], Y = h[V], N = l[V], j = y[V], W = E[V];
          for (let $ = 0; $ < 16; $++) {
            const ie = (0, c.rotl)(z + I(V, C, Q, re) + A[Y[$]] + ue, j[$]) + O | 0;
            z = O, O = re, re = (0, c.rotl)(Q, 10) | 0, Q = C, C = ie;
          }
          for (let $ = 0; $ < 16; $++) {
            const ie = (0, c.rotl)(F + I(Z, G, ee, D) + A[N[$]] + M, W[$]) + K | 0;
            F = K, K = D, D = (0, c.rotl)(ee, 10) | 0, ee = G, G = ie;
          }
        }
        this.set(this.h1 + Q + D | 0, this.h2 + re + K | 0, this.h3 + O + F | 0, this.h4 + z + G | 0, this.h0 + C + ee | 0);
      }
      roundClean() {
        (0, c.clean)(A);
      }
      destroy() {
        this.destroyed = true, (0, c.clean)(this.buffer), this.set(0, 0, 0, 0, 0);
      }
    }
    return Le.RIPEMD160 = L, Le.ripemd160 = (0, c.createHasher)(() => new L()), Le;
  }
  var Ni;
  function Va() {
    if (Ni) return Ir;
    Ni = 1, Object.defineProperty(Ir, "__esModule", {
      value: true
    }), Ir.ripemd160 = Ir.RIPEMD160 = void 0;
    const e = Wa();
    return Ir.RIPEMD160 = e.RIPEMD160, Ir.ripemd160 = e.ripemd160, Ir;
  }
  var Ar = {}, Hi;
  function Ds() {
    if (Hi) return Ar;
    Hi = 1, Object.defineProperty(Ar, "__esModule", {
      value: true
    }), Ar.sha1 = Ar.SHA1 = void 0;
    const e = Wa();
    return Ar.SHA1 = e.SHA1, Ar.sha1 = e.sha1, Ar;
  }
  var Ci;
  function nr() {
    return Ci || (Ci = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.taggedHash = e.TAGGED_HASH_PREFIXES = e.TAGS = e.hash256 = e.hash160 = e.sha256 = e.sha1 = e.ripemd160 = void 0;
      const c = Va(), d = Ds(), a = ht();
      function v(s) {
        return Buffer.from((0, c.ripemd160)(Uint8Array.from(s)));
      }
      e.ripemd160 = v;
      function o(s) {
        return Buffer.from((0, d.sha1)(Uint8Array.from(s)));
      }
      e.sha1 = o;
      function n(s) {
        return Buffer.from((0, a.sha256)(Uint8Array.from(s)));
      }
      e.sha256 = n;
      function r(s) {
        return Buffer.from((0, c.ripemd160)((0, a.sha256)(Uint8Array.from(s))));
      }
      e.hash160 = r;
      function u(s) {
        return Buffer.from((0, a.sha256)((0, a.sha256)(Uint8Array.from(s))));
      }
      e.hash256 = u, e.TAGS = [
        "BIP0340/challenge",
        "BIP0340/aux",
        "BIP0340/nonce",
        "TapLeaf",
        "TapBranch",
        "TapSighash",
        "TapTweak",
        "KeyAgg list",
        "KeyAgg coefficient"
      ], e.TAGGED_HASH_PREFIXES = {
        "BIP0340/challenge": Buffer.from([
          123,
          181,
          45,
          122,
          159,
          239,
          88,
          50,
          62,
          177,
          191,
          122,
          64,
          125,
          179,
          130,
          210,
          243,
          242,
          216,
          27,
          177,
          34,
          79,
          73,
          254,
          81,
          143,
          109,
          72,
          211,
          124,
          123,
          181,
          45,
          122,
          159,
          239,
          88,
          50,
          62,
          177,
          191,
          122,
          64,
          125,
          179,
          130,
          210,
          243,
          242,
          216,
          27,
          177,
          34,
          79,
          73,
          254,
          81,
          143,
          109,
          72,
          211,
          124
        ]),
        "BIP0340/aux": Buffer.from([
          241,
          239,
          78,
          94,
          192,
          99,
          202,
          218,
          109,
          148,
          202,
          250,
          157,
          152,
          126,
          160,
          105,
          38,
          88,
          57,
          236,
          193,
          31,
          151,
          45,
          119,
          165,
          46,
          216,
          193,
          204,
          144,
          241,
          239,
          78,
          94,
          192,
          99,
          202,
          218,
          109,
          148,
          202,
          250,
          157,
          152,
          126,
          160,
          105,
          38,
          88,
          57,
          236,
          193,
          31,
          151,
          45,
          119,
          165,
          46,
          216,
          193,
          204,
          144
        ]),
        "BIP0340/nonce": Buffer.from([
          7,
          73,
          119,
          52,
          167,
          155,
          203,
          53,
          91,
          155,
          140,
          125,
          3,
          79,
          18,
          28,
          244,
          52,
          215,
          62,
          247,
          45,
          218,
          25,
          135,
          0,
          97,
          251,
          82,
          191,
          235,
          47,
          7,
          73,
          119,
          52,
          167,
          155,
          203,
          53,
          91,
          155,
          140,
          125,
          3,
          79,
          18,
          28,
          244,
          52,
          215,
          62,
          247,
          45,
          218,
          25,
          135,
          0,
          97,
          251,
          82,
          191,
          235,
          47
        ]),
        TapLeaf: Buffer.from([
          174,
          234,
          143,
          220,
          66,
          8,
          152,
          49,
          5,
          115,
          75,
          88,
          8,
          29,
          30,
          38,
          56,
          211,
          95,
          28,
          181,
          64,
          8,
          212,
          211,
          87,
          202,
          3,
          190,
          120,
          233,
          238,
          174,
          234,
          143,
          220,
          66,
          8,
          152,
          49,
          5,
          115,
          75,
          88,
          8,
          29,
          30,
          38,
          56,
          211,
          95,
          28,
          181,
          64,
          8,
          212,
          211,
          87,
          202,
          3,
          190,
          120,
          233,
          238
        ]),
        TapBranch: Buffer.from([
          25,
          65,
          161,
          242,
          229,
          110,
          185,
          95,
          162,
          169,
          241,
          148,
          190,
          92,
          1,
          247,
          33,
          111,
          51,
          237,
          130,
          176,
          145,
          70,
          52,
          144,
          208,
          91,
          245,
          22,
          160,
          21,
          25,
          65,
          161,
          242,
          229,
          110,
          185,
          95,
          162,
          169,
          241,
          148,
          190,
          92,
          1,
          247,
          33,
          111,
          51,
          237,
          130,
          176,
          145,
          70,
          52,
          144,
          208,
          91,
          245,
          22,
          160,
          21
        ]),
        TapSighash: Buffer.from([
          244,
          10,
          72,
          223,
          75,
          42,
          112,
          200,
          180,
          146,
          75,
          242,
          101,
          70,
          97,
          237,
          61,
          149,
          253,
          102,
          163,
          19,
          235,
          135,
          35,
          117,
          151,
          198,
          40,
          228,
          160,
          49,
          244,
          10,
          72,
          223,
          75,
          42,
          112,
          200,
          180,
          146,
          75,
          242,
          101,
          70,
          97,
          237,
          61,
          149,
          253,
          102,
          163,
          19,
          235,
          135,
          35,
          117,
          151,
          198,
          40,
          228,
          160,
          49
        ]),
        TapTweak: Buffer.from([
          232,
          15,
          225,
          99,
          156,
          156,
          160,
          80,
          227,
          175,
          27,
          57,
          193,
          67,
          198,
          62,
          66,
          156,
          188,
          235,
          21,
          217,
          64,
          251,
          181,
          197,
          161,
          244,
          175,
          87,
          197,
          233,
          232,
          15,
          225,
          99,
          156,
          156,
          160,
          80,
          227,
          175,
          27,
          57,
          193,
          67,
          198,
          62,
          66,
          156,
          188,
          235,
          21,
          217,
          64,
          251,
          181,
          197,
          161,
          244,
          175,
          87,
          197,
          233
        ]),
        "KeyAgg list": Buffer.from([
          72,
          28,
          151,
          28,
          60,
          11,
          70,
          215,
          240,
          178,
          117,
          174,
          89,
          141,
          78,
          44,
          126,
          215,
          49,
          156,
          89,
          74,
          92,
          110,
          199,
          158,
          160,
          212,
          153,
          2,
          148,
          240,
          72,
          28,
          151,
          28,
          60,
          11,
          70,
          215,
          240,
          178,
          117,
          174,
          89,
          141,
          78,
          44,
          126,
          215,
          49,
          156,
          89,
          74,
          92,
          110,
          199,
          158,
          160,
          212,
          153,
          2,
          148,
          240
        ]),
        "KeyAgg coefficient": Buffer.from([
          191,
          201,
          4,
          3,
          77,
          28,
          136,
          232,
          200,
          14,
          34,
          229,
          61,
          36,
          86,
          109,
          100,
          130,
          78,
          214,
          66,
          114,
          129,
          192,
          145,
          0,
          249,
          77,
          205,
          82,
          201,
          129,
          191,
          201,
          4,
          3,
          77,
          28,
          136,
          232,
          200,
          14,
          34,
          229,
          61,
          36,
          86,
          109,
          100,
          130,
          78,
          214,
          66,
          114,
          129,
          192,
          145,
          0,
          249,
          77,
          205,
          82,
          201,
          129
        ])
      };
      function p(s, b) {
        return n(Buffer.concat([
          e.TAGGED_HASH_PREFIXES[s],
          b
        ]));
      }
      e.taggedHash = p;
    }(Gt)), Gt;
  }
  var $t, Li;
  function Ks() {
    if (Li) return $t;
    Li = 1;
    function e(c) {
      if (c.length >= 255) throw new TypeError("Alphabet too long");
      for (var d = new Uint8Array(256), a = 0; a < d.length; a++) d[a] = 255;
      for (var v = 0; v < c.length; v++) {
        var o = c.charAt(v), n = o.charCodeAt(0);
        if (d[n] !== 255) throw new TypeError(o + " is ambiguous");
        d[n] = v;
      }
      var r = c.length, u = c.charAt(0), p = Math.log(r) / Math.log(256), s = Math.log(256) / Math.log(r);
      function b(h) {
        if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (h.length === 0) return "";
        for (var l = 0, w = 0, y = 0, E = h.length; y !== E && h[y] === 0; ) y++, l++;
        for (var _ = (E - y) * s + 1 >>> 0, S = new Uint8Array(_); y !== E; ) {
          for (var I = h[y], A = 0, L = _ - 1; (I !== 0 || A < w) && L !== -1; L--, A++) I += 256 * S[L] >>> 0, S[L] = I % r >>> 0, I = I / r >>> 0;
          if (I !== 0) throw new Error("Non-zero carry");
          w = A, y++;
        }
        for (var q = _ - w; q !== _ && S[q] === 0; ) q++;
        for (var x = u.repeat(l); q < _; ++q) x += c.charAt(S[q]);
        return x;
      }
      function m(h) {
        if (typeof h != "string") throw new TypeError("Expected String");
        if (h.length === 0) return new Uint8Array();
        for (var l = 0, w = 0, y = 0; h[l] === u; ) w++, l++;
        for (var E = (h.length - l) * p + 1 >>> 0, _ = new Uint8Array(E); h[l]; ) {
          var S = h.charCodeAt(l);
          if (S > 255) return;
          var I = d[S];
          if (I === 255) return;
          for (var A = 0, L = E - 1; (I !== 0 || A < y) && L !== -1; L--, A++) I += r * _[L] >>> 0, _[L] = I % 256 >>> 0, I = I / 256 >>> 0;
          if (I !== 0) throw new Error("Non-zero carry");
          y = A, l++;
        }
        for (var q = E - y; q !== E && _[q] === 0; ) q++;
        for (var x = new Uint8Array(w + (E - q)), R = w; q !== E; ) x[R++] = _[q++];
        return x;
      }
      function f(h) {
        var l = m(h);
        if (l) return l;
        throw new Error("Non-base" + r + " character");
      }
      return {
        encode: b,
        decodeUnsafe: m,
        decode: f
      };
    }
    return $t = e, $t;
  }
  var Xt, ji;
  function Ws() {
    return ji || (ji = 1, Xt = Ks()("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")), Xt;
  }
  var Yt, qi;
  function Vs() {
    if (qi) return Yt;
    qi = 1;
    var e = Ws();
    return Yt = function(c) {
      function d(n) {
        var r = Uint8Array.from(n), u = c(r), p = r.length + 4, s = new Uint8Array(p);
        return s.set(r, 0), s.set(u.subarray(0, 4), r.length), e.encode(s, p);
      }
      function a(n) {
        var r = n.slice(0, -4), u = n.slice(-4), p = c(r);
        if (!(u[0] ^ p[0] | u[1] ^ p[1] | u[2] ^ p[2] | u[3] ^ p[3])) return r;
      }
      function v(n) {
        var r = e.decodeUnsafe(n);
        if (r) return a(r);
      }
      function o(n) {
        var r = e.decode(n), u = a(r);
        if (!u) throw new Error("Invalid checksum");
        return u;
      }
      return {
        encode: d,
        decode: o,
        decodeUnsafe: v
      };
    }, Yt;
  }
  var Jt, Fi;
  function Vn() {
    if (Fi) return Jt;
    Fi = 1;
    var { sha256: e } = ht(), c = Vs();
    function d(a) {
      return e(e(a));
    }
    return Jt = c(d), Jt;
  }
  var Mi;
  function Gs() {
    if (Mi) return Qr;
    Mi = 1, Object.defineProperty(Qr, "__esModule", {
      value: true
    }), Qr.p2pkh = void 0;
    const e = nr(), c = Xe(), d = je(), a = ze(), v = yr(), o = Vn(), n = d.OPS;
    function r(u, p) {
      if (!u.address && !u.hash && !u.output && !u.pubkey && !u.input) throw new TypeError("Not enough data");
      p = Object.assign({
        validate: true
      }, p || {}), (0, a.typeforce)({
        network: a.typeforce.maybe(a.typeforce.Object),
        address: a.typeforce.maybe(a.typeforce.String),
        hash: a.typeforce.maybe(a.typeforce.BufferN(20)),
        output: a.typeforce.maybe(a.typeforce.BufferN(25)),
        pubkey: a.typeforce.maybe(a.isPoint),
        signature: a.typeforce.maybe(d.isCanonicalScriptSignature),
        input: a.typeforce.maybe(a.typeforce.Buffer)
      }, u);
      const s = v.value(() => {
        const h = Buffer.from(o.decode(u.address)), l = h.readUInt8(0), w = h.slice(1);
        return {
          version: l,
          hash: w
        };
      }), b = v.value(() => d.decompile(u.input)), m = u.network || c.bitcoin, f = {
        name: "p2pkh",
        network: m
      };
      if (v.prop(f, "address", () => {
        if (!f.hash) return;
        const h = Buffer.allocUnsafe(21);
        return h.writeUInt8(m.pubKeyHash, 0), f.hash.copy(h, 1), o.encode(h);
      }), v.prop(f, "hash", () => {
        if (u.output) return u.output.slice(3, 23);
        if (u.address) return s().hash;
        if (u.pubkey || f.pubkey) return e.hash160(u.pubkey || f.pubkey);
      }), v.prop(f, "output", () => {
        if (f.hash) return d.compile([
          n.OP_DUP,
          n.OP_HASH160,
          f.hash,
          n.OP_EQUALVERIFY,
          n.OP_CHECKSIG
        ]);
      }), v.prop(f, "pubkey", () => {
        if (u.input) return b()[1];
      }), v.prop(f, "signature", () => {
        if (u.input) return b()[0];
      }), v.prop(f, "input", () => {
        if (u.pubkey && u.signature) return d.compile([
          u.signature,
          u.pubkey
        ]);
      }), v.prop(f, "witness", () => {
        if (f.input) return [];
      }), p.validate) {
        let h = Buffer.from([]);
        if (u.address) {
          if (s().version !== m.pubKeyHash) throw new TypeError("Invalid version or Network mismatch");
          if (s().hash.length !== 20) throw new TypeError("Invalid address");
          h = s().hash;
        }
        if (u.hash) {
          if (h.length > 0 && !h.equals(u.hash)) throw new TypeError("Hash mismatch");
          h = u.hash;
        }
        if (u.output) {
          if (u.output.length !== 25 || u.output[0] !== n.OP_DUP || u.output[1] !== n.OP_HASH160 || u.output[2] !== 20 || u.output[23] !== n.OP_EQUALVERIFY || u.output[24] !== n.OP_CHECKSIG) throw new TypeError("Output is invalid");
          const l = u.output.slice(3, 23);
          if (h.length > 0 && !h.equals(l)) throw new TypeError("Hash mismatch");
          h = l;
        }
        if (u.pubkey) {
          const l = e.hash160(u.pubkey);
          if (h.length > 0 && !h.equals(l)) throw new TypeError("Hash mismatch");
          h = l;
        }
        if (u.input) {
          const l = b();
          if (l.length !== 2) throw new TypeError("Input is invalid");
          if (!d.isCanonicalScriptSignature(l[0])) throw new TypeError("Input has invalid signature");
          if (!(0, a.isPoint)(l[1])) throw new TypeError("Input has invalid pubkey");
          if (u.signature && !u.signature.equals(l[0])) throw new TypeError("Signature mismatch");
          if (u.pubkey && !u.pubkey.equals(l[1])) throw new TypeError("Pubkey mismatch");
          const w = e.hash160(l[1]);
          if (h.length > 0 && !h.equals(w)) throw new TypeError("Hash mismatch");
        }
      }
      return Object.assign(f, u);
    }
    return Qr.p2pkh = r, Qr;
  }
  var Zr = {}, Di;
  function $s() {
    if (Di) return Zr;
    Di = 1, Object.defineProperty(Zr, "__esModule", {
      value: true
    }), Zr.p2sh = void 0;
    const e = nr(), c = Xe(), d = je(), a = ze(), v = yr(), o = Vn(), n = d.OPS;
    function r(u, p) {
      if (!u.address && !u.hash && !u.output && !u.redeem && !u.input) throw new TypeError("Not enough data");
      p = Object.assign({
        validate: true
      }, p || {}), (0, a.typeforce)({
        network: a.typeforce.maybe(a.typeforce.Object),
        address: a.typeforce.maybe(a.typeforce.String),
        hash: a.typeforce.maybe(a.typeforce.BufferN(20)),
        output: a.typeforce.maybe(a.typeforce.BufferN(23)),
        redeem: a.typeforce.maybe({
          network: a.typeforce.maybe(a.typeforce.Object),
          output: a.typeforce.maybe(a.typeforce.Buffer),
          input: a.typeforce.maybe(a.typeforce.Buffer),
          witness: a.typeforce.maybe(a.typeforce.arrayOf(a.typeforce.Buffer))
        }),
        input: a.typeforce.maybe(a.typeforce.Buffer),
        witness: a.typeforce.maybe(a.typeforce.arrayOf(a.typeforce.Buffer))
      }, u);
      let s = u.network;
      s || (s = u.redeem && u.redeem.network || c.bitcoin);
      const b = {
        network: s
      }, m = v.value(() => {
        const l = Buffer.from(o.decode(u.address)), w = l.readUInt8(0), y = l.slice(1);
        return {
          version: w,
          hash: y
        };
      }), f = v.value(() => d.decompile(u.input)), h = v.value(() => {
        const l = f(), w = l[l.length - 1];
        return {
          network: s,
          output: w === n.OP_FALSE ? Buffer.from([]) : w,
          input: d.compile(l.slice(0, -1)),
          witness: u.witness || []
        };
      });
      if (v.prop(b, "address", () => {
        if (!b.hash) return;
        const l = Buffer.allocUnsafe(21);
        return l.writeUInt8(b.network.scriptHash, 0), b.hash.copy(l, 1), o.encode(l);
      }), v.prop(b, "hash", () => {
        if (u.output) return u.output.slice(2, 22);
        if (u.address) return m().hash;
        if (b.redeem && b.redeem.output) return e.hash160(b.redeem.output);
      }), v.prop(b, "output", () => {
        if (b.hash) return d.compile([
          n.OP_HASH160,
          b.hash,
          n.OP_EQUAL
        ]);
      }), v.prop(b, "redeem", () => {
        if (u.input) return h();
      }), v.prop(b, "input", () => {
        if (!(!u.redeem || !u.redeem.input || !u.redeem.output)) return d.compile([].concat(d.decompile(u.redeem.input), u.redeem.output));
      }), v.prop(b, "witness", () => {
        if (b.redeem && b.redeem.witness) return b.redeem.witness;
        if (b.input) return [];
      }), v.prop(b, "name", () => {
        const l = [
          "p2sh"
        ];
        return b.redeem !== void 0 && b.redeem.name !== void 0 && l.push(b.redeem.name), l.join("-");
      }), p.validate) {
        let l = Buffer.from([]);
        if (u.address) {
          if (m().version !== s.scriptHash) throw new TypeError("Invalid version or Network mismatch");
          if (m().hash.length !== 20) throw new TypeError("Invalid address");
          l = m().hash;
        }
        if (u.hash) {
          if (l.length > 0 && !l.equals(u.hash)) throw new TypeError("Hash mismatch");
          l = u.hash;
        }
        if (u.output) {
          if (u.output.length !== 23 || u.output[0] !== n.OP_HASH160 || u.output[1] !== 20 || u.output[22] !== n.OP_EQUAL) throw new TypeError("Output is invalid");
          const y = u.output.slice(2, 22);
          if (l.length > 0 && !l.equals(y)) throw new TypeError("Hash mismatch");
          l = y;
        }
        const w = (y) => {
          if (y.output) {
            const E = d.decompile(y.output);
            if (!E || E.length < 1) throw new TypeError("Redeem.output too short");
            if (y.output.byteLength > 520) throw new TypeError("Redeem.output unspendable if larger than 520 bytes");
            if (d.countNonPushOnlyOPs(E) > 201) throw new TypeError("Redeem.output unspendable with more than 201 non-push ops");
            const _ = e.hash160(y.output);
            if (l.length > 0 && !l.equals(_)) throw new TypeError("Hash mismatch");
            l = _;
          }
          if (y.input) {
            const E = y.input.length > 0, _ = y.witness && y.witness.length > 0;
            if (!E && !_) throw new TypeError("Empty input");
            if (E && _) throw new TypeError("Input and witness provided");
            if (E) {
              const S = d.decompile(y.input);
              if (!d.isPushOnly(S)) throw new TypeError("Non push-only scriptSig");
            }
          }
        };
        if (u.input) {
          const y = f();
          if (!y || y.length < 1) throw new TypeError("Input too short");
          if (!Buffer.isBuffer(h().output)) throw new TypeError("Input is invalid");
          w(h());
        }
        if (u.redeem) {
          if (u.redeem.network && u.redeem.network !== s) throw new TypeError("Network mismatch");
          if (u.input) {
            const y = h();
            if (u.redeem.output && !u.redeem.output.equals(y.output)) throw new TypeError("Redeem.output mismatch");
            if (u.redeem.input && !u.redeem.input.equals(y.input)) throw new TypeError("Redeem.input mismatch");
          }
          w(u.redeem);
        }
        if (u.witness && u.redeem && u.redeem.witness && !(0, a.stacksEqual)(u.redeem.witness, u.witness)) throw new TypeError("Witness and redeem.witness mismatch");
      }
      return Object.assign(b, u);
    }
    return Zr.p2sh = r, Zr;
  }
  var et = {}, Br = {}, Ki;
  function Ut() {
    if (Ki) return Br;
    Ki = 1, Object.defineProperty(Br, "__esModule", {
      value: true
    }), Br.bech32m = Br.bech32 = void 0;
    const e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", c = {};
    for (let p = 0; p < e.length; p++) {
      const s = e.charAt(p);
      c[s] = p;
    }
    function d(p) {
      const s = p >> 25;
      return (p & 33554431) << 5 ^ -(s >> 0 & 1) & 996825010 ^ -(s >> 1 & 1) & 642813549 ^ -(s >> 2 & 1) & 513874426 ^ -(s >> 3 & 1) & 1027748829 ^ -(s >> 4 & 1) & 705979059;
    }
    function a(p) {
      let s = 1;
      for (let b = 0; b < p.length; ++b) {
        const m = p.charCodeAt(b);
        if (m < 33 || m > 126) return "Invalid prefix (" + p + ")";
        s = d(s) ^ m >> 5;
      }
      s = d(s);
      for (let b = 0; b < p.length; ++b) {
        const m = p.charCodeAt(b);
        s = d(s) ^ m & 31;
      }
      return s;
    }
    function v(p, s, b, m) {
      let f = 0, h = 0;
      const l = (1 << b) - 1, w = [];
      for (let y = 0; y < p.length; ++y) for (f = f << s | p[y], h += s; h >= b; ) h -= b, w.push(f >> h & l);
      if (m) h > 0 && w.push(f << b - h & l);
      else {
        if (h >= s) return "Excess padding";
        if (f << b - h & l) return "Non-zero padding";
      }
      return w;
    }
    function o(p) {
      return v(p, 8, 5, true);
    }
    function n(p) {
      const s = v(p, 5, 8, false);
      if (Array.isArray(s)) return s;
    }
    function r(p) {
      const s = v(p, 5, 8, false);
      if (Array.isArray(s)) return s;
      throw new Error(s);
    }
    function u(p) {
      let s;
      p === "bech32" ? s = 1 : s = 734539939;
      function b(l, w, y) {
        if (y = y || 90, l.length + 7 + w.length > y) throw new TypeError("Exceeds length limit");
        l = l.toLowerCase();
        let E = a(l);
        if (typeof E == "string") throw new Error(E);
        let _ = l + "1";
        for (let S = 0; S < w.length; ++S) {
          const I = w[S];
          if (I >> 5 !== 0) throw new Error("Non 5-bit word");
          E = d(E) ^ I, _ += e.charAt(I);
        }
        for (let S = 0; S < 6; ++S) E = d(E);
        E ^= s;
        for (let S = 0; S < 6; ++S) {
          const I = E >> (5 - S) * 5 & 31;
          _ += e.charAt(I);
        }
        return _;
      }
      function m(l, w) {
        if (w = w || 90, l.length < 8) return l + " too short";
        if (l.length > w) return "Exceeds length limit";
        const y = l.toLowerCase(), E = l.toUpperCase();
        if (l !== y && l !== E) return "Mixed-case string " + l;
        l = y;
        const _ = l.lastIndexOf("1");
        if (_ === -1) return "No separator character for " + l;
        if (_ === 0) return "Missing prefix for " + l;
        const S = l.slice(0, _), I = l.slice(_ + 1);
        if (I.length < 6) return "Data too short";
        let A = a(S);
        if (typeof A == "string") return A;
        const L = [];
        for (let q = 0; q < I.length; ++q) {
          const x = I.charAt(q), R = c[x];
          if (R === void 0) return "Unknown character " + x;
          A = d(A) ^ R, !(q + 6 >= I.length) && L.push(R);
        }
        return A !== s ? "Invalid checksum for " + l : {
          prefix: S,
          words: L
        };
      }
      function f(l, w) {
        const y = m(l, w);
        if (typeof y == "object") return y;
      }
      function h(l, w) {
        const y = m(l, w);
        if (typeof y == "object") return y;
        throw new Error(y);
      }
      return {
        decodeUnsafe: f,
        decode: h,
        encode: b,
        toWords: o,
        fromWordsUnsafe: n,
        fromWords: r
      };
    }
    return Br.bech32 = u("bech32"), Br.bech32m = u("bech32m"), Br;
  }
  var Wi;
  function Xs() {
    if (Wi) return et;
    Wi = 1, Object.defineProperty(et, "__esModule", {
      value: true
    }), et.p2wpkh = void 0;
    const e = nr(), c = Xe(), d = je(), a = ze(), v = yr(), o = Ut(), n = d.OPS, r = Buffer.alloc(0);
    function u(p, s) {
      if (!p.address && !p.hash && !p.output && !p.pubkey && !p.witness) throw new TypeError("Not enough data");
      s = Object.assign({
        validate: true
      }, s || {}), (0, a.typeforce)({
        address: a.typeforce.maybe(a.typeforce.String),
        hash: a.typeforce.maybe(a.typeforce.BufferN(20)),
        input: a.typeforce.maybe(a.typeforce.BufferN(0)),
        network: a.typeforce.maybe(a.typeforce.Object),
        output: a.typeforce.maybe(a.typeforce.BufferN(22)),
        pubkey: a.typeforce.maybe(a.isPoint),
        signature: a.typeforce.maybe(d.isCanonicalScriptSignature),
        witness: a.typeforce.maybe(a.typeforce.arrayOf(a.typeforce.Buffer))
      }, p);
      const b = v.value(() => {
        const h = o.bech32.decode(p.address), l = h.words.shift(), w = o.bech32.fromWords(h.words);
        return {
          version: l,
          prefix: h.prefix,
          data: Buffer.from(w)
        };
      }), m = p.network || c.bitcoin, f = {
        name: "p2wpkh",
        network: m
      };
      if (v.prop(f, "address", () => {
        if (!f.hash) return;
        const h = o.bech32.toWords(f.hash);
        return h.unshift(0), o.bech32.encode(m.bech32, h);
      }), v.prop(f, "hash", () => {
        if (p.output) return p.output.slice(2, 22);
        if (p.address) return b().data;
        if (p.pubkey || f.pubkey) return e.hash160(p.pubkey || f.pubkey);
      }), v.prop(f, "output", () => {
        if (f.hash) return d.compile([
          n.OP_0,
          f.hash
        ]);
      }), v.prop(f, "pubkey", () => {
        if (p.pubkey) return p.pubkey;
        if (p.witness) return p.witness[1];
      }), v.prop(f, "signature", () => {
        if (p.witness) return p.witness[0];
      }), v.prop(f, "input", () => {
        if (f.witness) return r;
      }), v.prop(f, "witness", () => {
        if (p.pubkey && p.signature) return [
          p.signature,
          p.pubkey
        ];
      }), s.validate) {
        let h = Buffer.from([]);
        if (p.address) {
          if (m && m.bech32 !== b().prefix) throw new TypeError("Invalid prefix or Network mismatch");
          if (b().version !== 0) throw new TypeError("Invalid address version");
          if (b().data.length !== 20) throw new TypeError("Invalid address data");
          h = b().data;
        }
        if (p.hash) {
          if (h.length > 0 && !h.equals(p.hash)) throw new TypeError("Hash mismatch");
          h = p.hash;
        }
        if (p.output) {
          if (p.output.length !== 22 || p.output[0] !== n.OP_0 || p.output[1] !== 20) throw new TypeError("Output is invalid");
          if (h.length > 0 && !h.equals(p.output.slice(2))) throw new TypeError("Hash mismatch");
          h = p.output.slice(2);
        }
        if (p.pubkey) {
          const l = e.hash160(p.pubkey);
          if (h.length > 0 && !h.equals(l)) throw new TypeError("Hash mismatch");
          if (h = l, !(0, a.isPoint)(p.pubkey) || p.pubkey.length !== 33) throw new TypeError("Invalid pubkey for p2wpkh");
        }
        if (p.witness) {
          if (p.witness.length !== 2) throw new TypeError("Witness is invalid");
          if (!d.isCanonicalScriptSignature(p.witness[0])) throw new TypeError("Witness has invalid signature");
          if (!(0, a.isPoint)(p.witness[1]) || p.witness[1].length !== 33) throw new TypeError("Witness has invalid pubkey");
          if (p.signature && !p.signature.equals(p.witness[0])) throw new TypeError("Signature mismatch");
          if (p.pubkey && !p.pubkey.equals(p.witness[1])) throw new TypeError("Pubkey mismatch");
          const l = e.hash160(p.witness[1]);
          if (h.length > 0 && !h.equals(l)) throw new TypeError("Hash mismatch");
        }
      }
      return Object.assign(f, p);
    }
    return et.p2wpkh = u, et;
  }
  var rt = {}, Vi;
  function Ys() {
    if (Vi) return rt;
    Vi = 1, Object.defineProperty(rt, "__esModule", {
      value: true
    }), rt.p2wsh = void 0;
    const e = nr(), c = Xe(), d = je(), a = ze(), v = yr(), o = Ut(), n = d.OPS, r = Buffer.alloc(0);
    function u(s) {
      return !!(Buffer.isBuffer(s) && s.length === 65 && s[0] === 4 && (0, a.isPoint)(s));
    }
    function p(s, b) {
      if (!s.address && !s.hash && !s.output && !s.redeem && !s.witness) throw new TypeError("Not enough data");
      b = Object.assign({
        validate: true
      }, b || {}), (0, a.typeforce)({
        network: a.typeforce.maybe(a.typeforce.Object),
        address: a.typeforce.maybe(a.typeforce.String),
        hash: a.typeforce.maybe(a.typeforce.BufferN(32)),
        output: a.typeforce.maybe(a.typeforce.BufferN(34)),
        redeem: a.typeforce.maybe({
          input: a.typeforce.maybe(a.typeforce.Buffer),
          network: a.typeforce.maybe(a.typeforce.Object),
          output: a.typeforce.maybe(a.typeforce.Buffer),
          witness: a.typeforce.maybe(a.typeforce.arrayOf(a.typeforce.Buffer))
        }),
        input: a.typeforce.maybe(a.typeforce.BufferN(0)),
        witness: a.typeforce.maybe(a.typeforce.arrayOf(a.typeforce.Buffer))
      }, s);
      const m = v.value(() => {
        const w = o.bech32.decode(s.address), y = w.words.shift(), E = o.bech32.fromWords(w.words);
        return {
          version: y,
          prefix: w.prefix,
          data: Buffer.from(E)
        };
      }), f = v.value(() => d.decompile(s.redeem.input));
      let h = s.network;
      h || (h = s.redeem && s.redeem.network || c.bitcoin);
      const l = {
        network: h
      };
      if (v.prop(l, "address", () => {
        if (!l.hash) return;
        const w = o.bech32.toWords(l.hash);
        return w.unshift(0), o.bech32.encode(h.bech32, w);
      }), v.prop(l, "hash", () => {
        if (s.output) return s.output.slice(2);
        if (s.address) return m().data;
        if (l.redeem && l.redeem.output) return e.sha256(l.redeem.output);
      }), v.prop(l, "output", () => {
        if (l.hash) return d.compile([
          n.OP_0,
          l.hash
        ]);
      }), v.prop(l, "redeem", () => {
        if (s.witness) return {
          output: s.witness[s.witness.length - 1],
          input: r,
          witness: s.witness.slice(0, -1)
        };
      }), v.prop(l, "input", () => {
        if (l.witness) return r;
      }), v.prop(l, "witness", () => {
        if (s.redeem && s.redeem.input && s.redeem.input.length > 0 && s.redeem.output && s.redeem.output.length > 0) {
          const w = d.toStack(f());
          return l.redeem = Object.assign({
            witness: w
          }, s.redeem), l.redeem.input = r, [].concat(w, s.redeem.output);
        }
        if (s.redeem && s.redeem.output && s.redeem.witness) return [].concat(s.redeem.witness, s.redeem.output);
      }), v.prop(l, "name", () => {
        const w = [
          "p2wsh"
        ];
        return l.redeem !== void 0 && l.redeem.name !== void 0 && w.push(l.redeem.name), w.join("-");
      }), b.validate) {
        let w = Buffer.from([]);
        if (s.address) {
          if (m().prefix !== h.bech32) throw new TypeError("Invalid prefix or Network mismatch");
          if (m().version !== 0) throw new TypeError("Invalid address version");
          if (m().data.length !== 32) throw new TypeError("Invalid address data");
          w = m().data;
        }
        if (s.hash) {
          if (w.length > 0 && !w.equals(s.hash)) throw new TypeError("Hash mismatch");
          w = s.hash;
        }
        if (s.output) {
          if (s.output.length !== 34 || s.output[0] !== n.OP_0 || s.output[1] !== 32) throw new TypeError("Output is invalid");
          const y = s.output.slice(2);
          if (w.length > 0 && !w.equals(y)) throw new TypeError("Hash mismatch");
          w = y;
        }
        if (s.redeem) {
          if (s.redeem.network && s.redeem.network !== h) throw new TypeError("Network mismatch");
          if (s.redeem.input && s.redeem.input.length > 0 && s.redeem.witness && s.redeem.witness.length > 0) throw new TypeError("Ambiguous witness source");
          if (s.redeem.output) {
            const y = d.decompile(s.redeem.output);
            if (!y || y.length < 1) throw new TypeError("Redeem.output is invalid");
            if (s.redeem.output.byteLength > 3600) throw new TypeError("Redeem.output unspendable if larger than 3600 bytes");
            if (d.countNonPushOnlyOPs(y) > 201) throw new TypeError("Redeem.output unspendable with more than 201 non-push ops");
            const E = e.sha256(s.redeem.output);
            if (w.length > 0 && !w.equals(E)) throw new TypeError("Hash mismatch");
            w = E;
          }
          if (s.redeem.input && !d.isPushOnly(f())) throw new TypeError("Non push-only scriptSig");
          if (s.witness && s.redeem.witness && !(0, a.stacksEqual)(s.witness, s.redeem.witness)) throw new TypeError("Witness and redeem.witness mismatch");
          if (s.redeem.input && f().some(u) || s.redeem.output && (d.decompile(s.redeem.output) || []).some(u)) throw new TypeError("redeem.input or redeem.output contains uncompressed pubkey");
        }
        if (s.witness && s.witness.length > 0) {
          const y = s.witness[s.witness.length - 1];
          if (s.redeem && s.redeem.output && !s.redeem.output.equals(y)) throw new TypeError("Witness and redeem.output mismatch");
          if (s.witness.some(u) || (d.decompile(y) || []).some(u)) throw new TypeError("Witness contains uncompressed pubkey");
        }
      }
      return Object.assign(l, s);
    }
    return rt.p2wsh = p, rt;
  }
  var tt = {}, Pr = {}, Gi;
  function Gn() {
    if (Gi) return Pr;
    Gi = 1, Object.defineProperty(Pr, "__esModule", {
      value: true
    }), Pr.getEccLib = Pr.initEccLib = void 0;
    const e = {};
    function c(r, u) {
      r ? r !== e.eccLib && ((u == null ? void 0 : u.DANGER_DO_NOT_VERIFY_ECCLIB) || v(r), e.eccLib = r) : e.eccLib = r;
    }
    Pr.initEccLib = c;
    function d() {
      if (!e.eccLib) throw new Error("No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance");
      return e.eccLib;
    }
    Pr.getEccLib = d;
    const a = (r) => Buffer.from(r, "hex");
    function v(r) {
      o(typeof r.isXOnlyPoint == "function"), o(r.isXOnlyPoint(a("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), o(r.isXOnlyPoint(a("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e"))), o(r.isXOnlyPoint(a("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9"))), o(r.isXOnlyPoint(a("0000000000000000000000000000000000000000000000000000000000000001"))), o(!r.isXOnlyPoint(a("0000000000000000000000000000000000000000000000000000000000000000"))), o(!r.isXOnlyPoint(a("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"))), o(typeof r.xOnlyPointAddTweak == "function"), n.forEach((u) => {
        const p = r.xOnlyPointAddTweak(a(u.pubkey), a(u.tweak));
        u.result === null ? o(p === null) : (o(p !== null), o(p.parity === u.parity), o(Buffer.from(p.xOnlyPubkey).equals(a(u.result))));
      });
    }
    function o(r) {
      if (!r) throw new Error("ecc library invalid");
    }
    const n = [
      {
        pubkey: "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        tweak: "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
        parity: -1,
        result: null
      },
      {
        pubkey: "1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b",
        tweak: "a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac",
        parity: 1,
        result: "e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf"
      },
      {
        pubkey: "2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991",
        tweak: "823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47",
        parity: 0,
        result: "9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c"
      }
    ];
    return Pr;
  }
  var Qt = {}, Ae = {}, vt = {
    exports: {}
  };
  var $i;
  function Fe() {
    return $i || ($i = 1, function(e, c) {
      var d = tr(), a = d.Buffer;
      function v(n, r) {
        for (var u in n) r[u] = n[u];
      }
      a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = d : (v(d, c), c.Buffer = o);
      function o(n, r, u) {
        return a(n, r, u);
      }
      o.prototype = Object.create(a.prototype), v(a, o), o.from = function(n, r, u) {
        if (typeof n == "number") throw new TypeError("Argument must not be a number");
        return a(n, r, u);
      }, o.alloc = function(n, r, u) {
        if (typeof n != "number") throw new TypeError("Argument must be a number");
        var p = a(n);
        return r !== void 0 ? typeof u == "string" ? p.fill(r, u) : p.fill(r) : p.fill(0), p;
      }, o.allocUnsafe = function(n) {
        if (typeof n != "number") throw new TypeError("Argument must be a number");
        return a(n);
      }, o.allocUnsafeSlow = function(n) {
        if (typeof n != "number") throw new TypeError("Argument must be a number");
        return d.SlowBuffer(n);
      };
    }(vt, vt.exports)), vt.exports;
  }
  var Zt, Xi;
  function Js() {
    if (Xi) return Zt;
    Xi = 1;
    var e = Fe().Buffer, c = 9007199254740991;
    function d(n) {
      if (n < 0 || n > c || n % 1 !== 0) throw new RangeError("value out of range");
    }
    function a(n, r, u) {
      if (d(n), r || (r = e.allocUnsafe(o(n))), !e.isBuffer(r)) throw new TypeError("buffer must be a Buffer instance");
      return u || (u = 0), n < 253 ? (r.writeUInt8(n, u), a.bytes = 1) : n <= 65535 ? (r.writeUInt8(253, u), r.writeUInt16LE(n, u + 1), a.bytes = 3) : n <= 4294967295 ? (r.writeUInt8(254, u), r.writeUInt32LE(n, u + 1), a.bytes = 5) : (r.writeUInt8(255, u), r.writeUInt32LE(n >>> 0, u + 1), r.writeUInt32LE(n / 4294967296 | 0, u + 5), a.bytes = 9), r;
    }
    function v(n, r) {
      if (!e.isBuffer(n)) throw new TypeError("buffer must be a Buffer instance");
      r || (r = 0);
      var u = n.readUInt8(r);
      if (u < 253) return v.bytes = 1, u;
      if (u === 253) return v.bytes = 3, n.readUInt16LE(r + 1);
      if (u === 254) return v.bytes = 5, n.readUInt32LE(r + 1);
      v.bytes = 9;
      var p = n.readUInt32LE(r + 1), s = n.readUInt32LE(r + 5), b = s * 4294967296 + p;
      return d(b), b;
    }
    function o(n) {
      return d(n), n < 253 ? 1 : n <= 65535 ? 3 : n <= 4294967295 ? 5 : 9;
    }
    return Zt = {
      encode: a,
      decode: v,
      encodingLength: o
    }, Zt;
  }
  var Yi;
  function zt() {
    if (Yi) return Ae;
    Yi = 1, Object.defineProperty(Ae, "__esModule", {
      value: true
    }), Ae.BufferReader = Ae.BufferWriter = Ae.cloneBuffer = Ae.reverseBuffer = Ae.writeUInt64LE = Ae.readUInt64LE = Ae.varuint = void 0;
    const e = ze(), { typeforce: c } = e, d = Js();
    Ae.varuint = d;
    function a(s, b) {
      if (typeof s != "number") throw new Error("cannot write a non-number as a number");
      if (s < 0) throw new Error("specified a negative value for writing an unsigned value");
      if (s > b) throw new Error("RangeError: value out of range");
      if (Math.floor(s) !== s) throw new Error("value has a fractional component");
    }
    function v(s, b) {
      const m = s.readUInt32LE(b);
      let f = s.readUInt32LE(b + 4);
      return f *= 4294967296, a(f + m, 9007199254740991), f + m;
    }
    Ae.readUInt64LE = v;
    function o(s, b, m) {
      return a(b, 9007199254740991), s.writeInt32LE(b & -1, m), s.writeUInt32LE(Math.floor(b / 4294967296), m + 4), m + 8;
    }
    Ae.writeUInt64LE = o;
    function n(s) {
      if (s.length < 1) return s;
      let b = s.length - 1, m = 0;
      for (let f = 0; f < s.length / 2; f++) m = s[f], s[f] = s[b], s[b] = m, b--;
      return s;
    }
    Ae.reverseBuffer = n;
    function r(s) {
      const b = Buffer.allocUnsafe(s.length);
      return s.copy(b), b;
    }
    Ae.cloneBuffer = r;
    class u {
      static withCapacity(b) {
        return new u(Buffer.alloc(b));
      }
      constructor(b, m = 0) {
        this.buffer = b, this.offset = m, c(e.tuple(e.Buffer, e.UInt32), [
          b,
          m
        ]);
      }
      writeUInt8(b) {
        this.offset = this.buffer.writeUInt8(b, this.offset);
      }
      writeInt32(b) {
        this.offset = this.buffer.writeInt32LE(b, this.offset);
      }
      writeUInt32(b) {
        this.offset = this.buffer.writeUInt32LE(b, this.offset);
      }
      writeUInt64(b) {
        this.offset = o(this.buffer, b, this.offset);
      }
      writeVarInt(b) {
        d.encode(b, this.buffer, this.offset), this.offset += d.encode.bytes;
      }
      writeSlice(b) {
        if (this.buffer.length < this.offset + b.length) throw new Error("Cannot write slice out of bounds");
        this.offset += b.copy(this.buffer, this.offset);
      }
      writeVarSlice(b) {
        this.writeVarInt(b.length), this.writeSlice(b);
      }
      writeVector(b) {
        this.writeVarInt(b.length), b.forEach((m) => this.writeVarSlice(m));
      }
      end() {
        if (this.buffer.length === this.offset) return this.buffer;
        throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
      }
    }
    Ae.BufferWriter = u;
    class p {
      constructor(b, m = 0) {
        this.buffer = b, this.offset = m, c(e.tuple(e.Buffer, e.UInt32), [
          b,
          m
        ]);
      }
      readUInt8() {
        const b = this.buffer.readUInt8(this.offset);
        return this.offset++, b;
      }
      readInt32() {
        const b = this.buffer.readInt32LE(this.offset);
        return this.offset += 4, b;
      }
      readUInt32() {
        const b = this.buffer.readUInt32LE(this.offset);
        return this.offset += 4, b;
      }
      readUInt64() {
        const b = v(this.buffer, this.offset);
        return this.offset += 8, b;
      }
      readVarInt() {
        const b = d.decode(this.buffer, this.offset);
        return this.offset += d.decode.bytes, b;
      }
      readSlice(b) {
        if (this.buffer.length < this.offset + b) throw new Error("Cannot read slice out of bounds");
        const m = this.buffer.slice(this.offset, this.offset + b);
        return this.offset += b, m;
      }
      readVarSlice() {
        return this.readSlice(this.readVarInt());
      }
      readVector() {
        const b = this.readVarInt(), m = [];
        for (let f = 0; f < b; f++) m.push(this.readVarSlice());
        return m;
      }
    }
    return Ae.BufferReader = p, Ae;
  }
  var Ji;
  function $n() {
    return Ji || (Ji = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.tweakKey = e.tapTweakHash = e.tapleafHash = e.findScriptPath = e.toHashTree = e.rootHashFromPath = e.MAX_TAPTREE_DEPTH = e.LEAF_VERSION_TAPSCRIPT = void 0;
      const c = tr(), d = Gn(), a = nr(), v = zt(), o = ze();
      e.LEAF_VERSION_TAPSCRIPT = 192, e.MAX_TAPTREE_DEPTH = 128;
      const n = (l) => "left" in l && "right" in l;
      function r(l, w) {
        if (l.length < 33) throw new TypeError(`The control-block length is too small. Got ${l.length}, expected min 33.`);
        const y = (l.length - 33) / 32;
        let E = w;
        for (let _ = 0; _ < y; _++) {
          const S = l.slice(33 + 32 * _, 65 + 32 * _);
          E.compare(S) < 0 ? E = f(E, S) : E = f(S, E);
        }
        return E;
      }
      e.rootHashFromPath = r;
      function u(l) {
        if ((0, o.isTapleaf)(l)) return {
          hash: s(l)
        };
        const w = [
          u(l[0]),
          u(l[1])
        ];
        w.sort((_, S) => _.hash.compare(S.hash));
        const [y, E] = w;
        return {
          hash: f(y.hash, E.hash),
          left: y,
          right: E
        };
      }
      e.toHashTree = u;
      function p(l, w) {
        if (n(l)) {
          const y = p(l.left, w);
          if (y !== void 0) return [
            ...y,
            l.right.hash
          ];
          const E = p(l.right, w);
          if (E !== void 0) return [
            ...E,
            l.left.hash
          ];
        } else if (l.hash.equals(w)) return [];
      }
      e.findScriptPath = p;
      function s(l) {
        const w = l.version || e.LEAF_VERSION_TAPSCRIPT;
        return a.taggedHash("TapLeaf", c.Buffer.concat([
          c.Buffer.from([
            w
          ]),
          h(l.output)
        ]));
      }
      e.tapleafHash = s;
      function b(l, w) {
        return a.taggedHash("TapTweak", c.Buffer.concat(w ? [
          l,
          w
        ] : [
          l
        ]));
      }
      e.tapTweakHash = b;
      function m(l, w) {
        if (!c.Buffer.isBuffer(l) || l.length !== 32 || w && w.length !== 32) return null;
        const y = b(l, w), E = (0, d.getEccLib)().xOnlyPointAddTweak(l, y);
        return !E || E.xOnlyPubkey === null ? null : {
          parity: E.parity,
          x: c.Buffer.from(E.xOnlyPubkey)
        };
      }
      e.tweakKey = m;
      function f(l, w) {
        return a.taggedHash("TapBranch", c.Buffer.concat([
          l,
          w
        ]));
      }
      function h(l) {
        const w = v.varuint.encodingLength(l.length), y = c.Buffer.allocUnsafe(w);
        return v.varuint.encode(l.length, y), c.Buffer.concat([
          y,
          l
        ]);
      }
    }(Qt)), Qt;
  }
  var Qi;
  function Qs() {
    if (Qi) return tt;
    Qi = 1, Object.defineProperty(tt, "__esModule", {
      value: true
    }), tt.p2tr = void 0;
    const e = tr(), c = Xe(), d = je(), a = ze(), v = Gn(), o = $n(), n = yr(), r = Ut(), u = Xn(), p = d.OPS, s = 1, b = 80;
    function m(f, h) {
      if (!f.address && !f.output && !f.pubkey && !f.internalPubkey && !(f.witness && f.witness.length > 1)) throw new TypeError("Not enough data");
      h = Object.assign({
        validate: true
      }, h || {}), (0, a.typeforce)({
        address: a.typeforce.maybe(a.typeforce.String),
        input: a.typeforce.maybe(a.typeforce.BufferN(0)),
        network: a.typeforce.maybe(a.typeforce.Object),
        output: a.typeforce.maybe(a.typeforce.BufferN(34)),
        internalPubkey: a.typeforce.maybe(a.typeforce.BufferN(32)),
        hash: a.typeforce.maybe(a.typeforce.BufferN(32)),
        pubkey: a.typeforce.maybe(a.typeforce.BufferN(32)),
        signature: a.typeforce.maybe(a.typeforce.anyOf(a.typeforce.BufferN(64), a.typeforce.BufferN(65))),
        witness: a.typeforce.maybe(a.typeforce.arrayOf(a.typeforce.Buffer)),
        scriptTree: a.typeforce.maybe(a.isTaptree),
        redeem: a.typeforce.maybe({
          output: a.typeforce.maybe(a.typeforce.Buffer),
          redeemVersion: a.typeforce.maybe(a.typeforce.Number),
          witness: a.typeforce.maybe(a.typeforce.arrayOf(a.typeforce.Buffer))
        }),
        redeemVersion: a.typeforce.maybe(a.typeforce.Number)
      }, f);
      const l = n.value(() => (0, u.fromBech32)(f.address)), w = n.value(() => {
        if (!(!f.witness || !f.witness.length)) return f.witness.length >= 2 && f.witness[f.witness.length - 1][0] === b ? f.witness.slice(0, -1) : f.witness.slice();
      }), y = n.value(() => {
        if (f.scriptTree) return (0, o.toHashTree)(f.scriptTree);
        if (f.hash) return {
          hash: f.hash
        };
      }), E = f.network || c.bitcoin, _ = {
        name: "p2tr",
        network: E
      };
      if (n.prop(_, "address", () => {
        if (!_.pubkey) return;
        const S = r.bech32m.toWords(_.pubkey);
        return S.unshift(s), r.bech32m.encode(E.bech32, S);
      }), n.prop(_, "hash", () => {
        const S = y();
        if (S) return S.hash;
        const I = w();
        if (I && I.length > 1) {
          const A = I[I.length - 1], L = A[0] & a.TAPLEAF_VERSION_MASK, q = I[I.length - 2], x = (0, o.tapleafHash)({
            output: q,
            version: L
          });
          return (0, o.rootHashFromPath)(A, x);
        }
        return null;
      }), n.prop(_, "output", () => {
        if (_.pubkey) return d.compile([
          p.OP_1,
          _.pubkey
        ]);
      }), n.prop(_, "redeemVersion", () => f.redeemVersion ? f.redeemVersion : f.redeem && f.redeem.redeemVersion !== void 0 && f.redeem.redeemVersion !== null ? f.redeem.redeemVersion : o.LEAF_VERSION_TAPSCRIPT), n.prop(_, "redeem", () => {
        const S = w();
        if (!(!S || S.length < 2)) return {
          output: S[S.length - 2],
          witness: S.slice(0, -2),
          redeemVersion: S[S.length - 1][0] & a.TAPLEAF_VERSION_MASK
        };
      }), n.prop(_, "pubkey", () => {
        if (f.pubkey) return f.pubkey;
        if (f.output) return f.output.slice(2);
        if (f.address) return l().data;
        if (_.internalPubkey) {
          const S = (0, o.tweakKey)(_.internalPubkey, _.hash);
          if (S) return S.x;
        }
      }), n.prop(_, "internalPubkey", () => {
        if (f.internalPubkey) return f.internalPubkey;
        const S = w();
        if (S && S.length > 1) return S[S.length - 1].slice(1, 33);
      }), n.prop(_, "signature", () => {
        if (f.signature) return f.signature;
        const S = w();
        if (!(!S || S.length !== 1)) return S[0];
      }), n.prop(_, "witness", () => {
        if (f.witness) return f.witness;
        const S = y();
        if (S && f.redeem && f.redeem.output && f.internalPubkey) {
          const I = (0, o.tapleafHash)({
            output: f.redeem.output,
            version: _.redeemVersion
          }), A = (0, o.findScriptPath)(S, I);
          if (!A) return;
          const L = (0, o.tweakKey)(f.internalPubkey, S.hash);
          if (!L) return;
          const q = e.Buffer.concat([
            e.Buffer.from([
              _.redeemVersion | L.parity
            ]),
            f.internalPubkey
          ].concat(A));
          return [
            f.redeem.output,
            q
          ];
        }
        if (f.signature) return [
          f.signature
        ];
      }), h.validate) {
        let S = e.Buffer.from([]);
        if (f.address) {
          if (E && E.bech32 !== l().prefix) throw new TypeError("Invalid prefix or Network mismatch");
          if (l().version !== s) throw new TypeError("Invalid address version");
          if (l().data.length !== 32) throw new TypeError("Invalid address data");
          S = l().data;
        }
        if (f.pubkey) {
          if (S.length > 0 && !S.equals(f.pubkey)) throw new TypeError("Pubkey mismatch");
          S = f.pubkey;
        }
        if (f.output) {
          if (f.output.length !== 34 || f.output[0] !== p.OP_1 || f.output[1] !== 32) throw new TypeError("Output is invalid");
          if (S.length > 0 && !S.equals(f.output.slice(2))) throw new TypeError("Pubkey mismatch");
          S = f.output.slice(2);
        }
        if (f.internalPubkey) {
          const L = (0, o.tweakKey)(f.internalPubkey, _.hash);
          if (S.length > 0 && !S.equals(L.x)) throw new TypeError("Pubkey mismatch");
          S = L.x;
        }
        if (S && S.length && !(0, v.getEccLib)().isXOnlyPoint(S)) throw new TypeError("Invalid pubkey for p2tr");
        const I = y();
        if (f.hash && I && !f.hash.equals(I.hash)) throw new TypeError("Hash mismatch");
        if (f.redeem && f.redeem.output && I) {
          const L = (0, o.tapleafHash)({
            output: f.redeem.output,
            version: _.redeemVersion
          });
          if (!(0, o.findScriptPath)(I, L)) throw new TypeError("Redeem script not in tree");
        }
        const A = w();
        if (f.redeem && _.redeem) {
          if (f.redeem.redeemVersion && f.redeem.redeemVersion !== _.redeem.redeemVersion) throw new TypeError("Redeem.redeemVersion and witness mismatch");
          if (f.redeem.output) {
            if (d.decompile(f.redeem.output).length === 0) throw new TypeError("Redeem.output is invalid");
            if (_.redeem.output && !f.redeem.output.equals(_.redeem.output)) throw new TypeError("Redeem.output and witness mismatch");
          }
          if (f.redeem.witness && _.redeem.witness && !(0, a.stacksEqual)(f.redeem.witness, _.redeem.witness)) throw new TypeError("Redeem.witness and witness mismatch");
        }
        if (A && A.length) if (A.length === 1) {
          if (f.signature && !f.signature.equals(A[0])) throw new TypeError("Signature mismatch");
        } else {
          const L = A[A.length - 1];
          if (L.length < 33) throw new TypeError(`The control-block length is too small. Got ${L.length}, expected min 33.`);
          if ((L.length - 33) % 32 !== 0) throw new TypeError(`The control-block length of ${L.length} is incorrect!`);
          const q = (L.length - 33) / 32;
          if (q > 128) throw new TypeError(`The script path is too long. Got ${q}, expected max 128.`);
          const x = L.slice(1, 33);
          if (f.internalPubkey && !f.internalPubkey.equals(x)) throw new TypeError("Internal pubkey mismatch");
          if (!(0, v.getEccLib)().isXOnlyPoint(x)) throw new TypeError("Invalid internalPubkey for p2tr witness");
          const R = L[0] & a.TAPLEAF_VERSION_MASK, z = A[A.length - 2], F = (0, o.tapleafHash)({
            output: z,
            version: R
          }), C = (0, o.rootHashFromPath)(L, F), G = (0, o.tweakKey)(x, C);
          if (!G) throw new TypeError("Invalid outputKey for p2tr witness");
          if (S.length && !S.equals(G.x)) throw new TypeError("Pubkey mismatch for p2tr witness");
          if (G.parity !== (L[0] & 1)) throw new Error("Incorrect parity");
        }
      }
      return Object.assign(_, f);
    }
    return tt.p2tr = m, tt;
  }
  var Zi;
  function pt() {
    return Zi || (Zi = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.p2tr = e.p2wsh = e.p2wpkh = e.p2sh = e.p2pkh = e.p2pk = e.p2ms = e.embed = void 0;
      const c = qs();
      Object.defineProperty(e, "embed", {
        enumerable: true,
        get: function() {
          return c.p2data;
        }
      });
      const d = Fs();
      Object.defineProperty(e, "p2ms", {
        enumerable: true,
        get: function() {
          return d.p2ms;
        }
      });
      const a = Ms();
      Object.defineProperty(e, "p2pk", {
        enumerable: true,
        get: function() {
          return a.p2pk;
        }
      });
      const v = Gs();
      Object.defineProperty(e, "p2pkh", {
        enumerable: true,
        get: function() {
          return v.p2pkh;
        }
      });
      const o = $s();
      Object.defineProperty(e, "p2sh", {
        enumerable: true,
        get: function() {
          return o.p2sh;
        }
      });
      const n = Xs();
      Object.defineProperty(e, "p2wpkh", {
        enumerable: true,
        get: function() {
          return n.p2wpkh;
        }
      });
      const r = Ys();
      Object.defineProperty(e, "p2wsh", {
        enumerable: true,
        get: function() {
          return r.p2wsh;
        }
      });
      const u = Qs();
      Object.defineProperty(e, "p2tr", {
        enumerable: true,
        get: function() {
          return u.p2tr;
        }
      });
    }(qt)), qt;
  }
  var eo;
  function Xn() {
    if (eo) return Ce;
    eo = 1, Object.defineProperty(Ce, "__esModule", {
      value: true
    }), Ce.toOutputScript = Ce.fromOutputScript = Ce.toBech32 = Ce.toBase58Check = Ce.fromBech32 = Ce.fromBase58Check = void 0;
    const e = Xe(), c = pt(), d = je(), a = ze(), v = Ut(), o = Vn(), n = 40, r = 2, u = 16, p = 2, s = 80, b = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
    function m(_, S) {
      const I = _.slice(2);
      if (I.length < r || I.length > n) throw new TypeError("Invalid program length for segwit address");
      const A = _[0] - s;
      if (A < p || A > u) throw new TypeError("Invalid version for segwit address");
      if (_[1] !== I.length) throw new TypeError("Invalid script for segwit address");
      return console.warn(b), w(I, A, S.bech32);
    }
    function f(_) {
      const S = Buffer.from(o.decode(_));
      if (S.length < 21) throw new TypeError(_ + " is too short");
      if (S.length > 21) throw new TypeError(_ + " is too long");
      const I = S.readUInt8(0), A = S.slice(1);
      return {
        version: I,
        hash: A
      };
    }
    Ce.fromBase58Check = f;
    function h(_) {
      let S, I;
      try {
        S = v.bech32.decode(_);
      } catch {
      }
      if (S) {
        if (I = S.words[0], I !== 0) throw new TypeError(_ + " uses wrong encoding");
      } else if (S = v.bech32m.decode(_), I = S.words[0], I === 0) throw new TypeError(_ + " uses wrong encoding");
      const A = v.bech32.fromWords(S.words.slice(1));
      return {
        version: I,
        prefix: S.prefix,
        data: Buffer.from(A)
      };
    }
    Ce.fromBech32 = h;
    function l(_, S) {
      (0, a.typeforce)((0, a.tuple)(a.Hash160bit, a.UInt8), arguments);
      const I = Buffer.allocUnsafe(21);
      return I.writeUInt8(S, 0), _.copy(I, 1), o.encode(I);
    }
    Ce.toBase58Check = l;
    function w(_, S, I) {
      const A = v.bech32.toWords(_);
      return A.unshift(S), S === 0 ? v.bech32.encode(I, A) : v.bech32m.encode(I, A);
    }
    Ce.toBech32 = w;
    function y(_, S) {
      S = S || e.bitcoin;
      try {
        return c.p2pkh({
          output: _,
          network: S
        }).address;
      } catch {
      }
      try {
        return c.p2sh({
          output: _,
          network: S
        }).address;
      } catch {
      }
      try {
        return c.p2wpkh({
          output: _,
          network: S
        }).address;
      } catch {
      }
      try {
        return c.p2wsh({
          output: _,
          network: S
        }).address;
      } catch {
      }
      try {
        return c.p2tr({
          output: _,
          network: S
        }).address;
      } catch {
      }
      try {
        return m(_, S);
      } catch {
      }
      throw new Error(d.toASM(_) + " has no matching Address");
    }
    Ce.fromOutputScript = y;
    function E(_, S) {
      S = S || e.bitcoin;
      let I, A;
      try {
        I = f(_);
      } catch {
      }
      if (I) {
        if (I.version === S.pubKeyHash) return c.p2pkh({
          hash: I.hash
        }).output;
        if (I.version === S.scriptHash) return c.p2sh({
          hash: I.hash
        }).output;
      } else {
        try {
          A = h(_);
        } catch {
        }
        if (A) {
          if (A.prefix !== S.bech32) throw new Error(_ + " has an invalid prefix");
          if (A.version === 0) {
            if (A.data.length === 20) return c.p2wpkh({
              hash: A.data
            }).output;
            if (A.data.length === 32) return c.p2wsh({
              hash: A.data
            }).output;
          } else if (A.version === 1) {
            if (A.data.length === 32) return c.p2tr({
              pubkey: A.data
            }).output;
          } else if (A.version >= p && A.version <= u && A.data.length >= r && A.data.length <= n) return console.warn(b), d.compile([
            A.version + s,
            A.data
          ]);
        }
      }
      throw new Error(_ + " has no matching Script");
    }
    return Ce.toOutputScript = E, Ce;
  }
  var nt = {}, it = {}, ro;
  function Zs() {
    if (ro) return it;
    ro = 1, Object.defineProperty(it, "__esModule", {
      value: true
    }), it.fastMerkleRoot = void 0;
    function e(c, d) {
      if (!Array.isArray(c)) throw TypeError("Expected values Array");
      if (typeof d != "function") throw TypeError("Expected digest Function");
      let a = c.length;
      const v = c.concat();
      for (; a > 1; ) {
        let o = 0;
        for (let n = 0; n < a; n += 2, ++o) {
          const r = v[n], u = n + 1 === a ? r : v[n + 1], p = Buffer.concat([
            r,
            u
          ]);
          v[o] = d(p);
        }
        a = o;
      }
      return v[0];
    }
    return it.fastMerkleRoot = e, it;
  }
  var ot = {}, to;
  function mt() {
    if (to) return ot;
    to = 1, Object.defineProperty(ot, "__esModule", {
      value: true
    }), ot.Transaction = void 0;
    const e = zt(), c = nr(), d = je(), a = je(), v = ze(), { typeforce: o } = v;
    function n(w) {
      const y = w.length;
      return e.varuint.encodingLength(y) + y;
    }
    function r(w) {
      const y = w.length;
      return e.varuint.encodingLength(y) + w.reduce((E, _) => E + n(_), 0);
    }
    const u = Buffer.allocUnsafe(0), p = [], s = Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"), b = Buffer.from("0000000000000000000000000000000000000000000000000000000000000001", "hex"), m = Buffer.from("ffffffffffffffff", "hex"), f = {
      script: u,
      valueBuffer: m
    };
    function h(w) {
      return w.value !== void 0;
    }
    class l {
      constructor() {
        this.version = 1, this.locktime = 0, this.ins = [], this.outs = [];
      }
      static fromBuffer(y, E) {
        const _ = new e.BufferReader(y), S = new l();
        S.version = _.readInt32();
        const I = _.readUInt8(), A = _.readUInt8();
        let L = false;
        I === l.ADVANCED_TRANSACTION_MARKER && A === l.ADVANCED_TRANSACTION_FLAG ? L = true : _.offset -= 2;
        const q = _.readVarInt();
        for (let R = 0; R < q; ++R) S.ins.push({
          hash: _.readSlice(32),
          index: _.readUInt32(),
          script: _.readVarSlice(),
          sequence: _.readUInt32(),
          witness: p
        });
        const x = _.readVarInt();
        for (let R = 0; R < x; ++R) S.outs.push({
          value: _.readUInt64(),
          script: _.readVarSlice()
        });
        if (L) {
          for (let R = 0; R < q; ++R) S.ins[R].witness = _.readVector();
          if (!S.hasWitnesses()) throw new Error("Transaction has superfluous witness data");
        }
        if (S.locktime = _.readUInt32(), E) return S;
        if (_.offset !== y.length) throw new Error("Transaction has unexpected data");
        return S;
      }
      static fromHex(y) {
        return l.fromBuffer(Buffer.from(y, "hex"), false);
      }
      static isCoinbaseHash(y) {
        o(v.Hash256bit, y);
        for (let E = 0; E < 32; ++E) if (y[E] !== 0) return false;
        return true;
      }
      isCoinbase() {
        return this.ins.length === 1 && l.isCoinbaseHash(this.ins[0].hash);
      }
      addInput(y, E, _, S) {
        return o(v.tuple(v.Hash256bit, v.UInt32, v.maybe(v.UInt32), v.maybe(v.Buffer)), arguments), v.Null(_) && (_ = l.DEFAULT_SEQUENCE), this.ins.push({
          hash: y,
          index: E,
          script: S || u,
          sequence: _,
          witness: p
        }) - 1;
      }
      addOutput(y, E) {
        return o(v.tuple(v.Buffer, v.Satoshi), arguments), this.outs.push({
          script: y,
          value: E
        }) - 1;
      }
      hasWitnesses() {
        return this.ins.some((y) => y.witness.length !== 0);
      }
      stripWitnesses() {
        this.ins.forEach((y) => {
          y.witness = p;
        });
      }
      weight() {
        const y = this.byteLength(false), E = this.byteLength(true);
        return y * 3 + E;
      }
      virtualSize() {
        return Math.ceil(this.weight() / 4);
      }
      byteLength(y = true) {
        const E = y && this.hasWitnesses();
        return (E ? 10 : 8) + e.varuint.encodingLength(this.ins.length) + e.varuint.encodingLength(this.outs.length) + this.ins.reduce((_, S) => _ + 40 + n(S.script), 0) + this.outs.reduce((_, S) => _ + 8 + n(S.script), 0) + (E ? this.ins.reduce((_, S) => _ + r(S.witness), 0) : 0);
      }
      clone() {
        const y = new l();
        return y.version = this.version, y.locktime = this.locktime, y.ins = this.ins.map((E) => ({
          hash: E.hash,
          index: E.index,
          script: E.script,
          sequence: E.sequence,
          witness: E.witness
        })), y.outs = this.outs.map((E) => ({
          script: E.script,
          value: E.value
        })), y;
      }
      hashForSignature(y, E, _) {
        if (o(v.tuple(v.UInt32, v.Buffer, v.Number), arguments), y >= this.ins.length) return b;
        const S = d.compile(d.decompile(E).filter((L) => L !== a.OPS.OP_CODESEPARATOR)), I = this.clone();
        if ((_ & 31) === l.SIGHASH_NONE) I.outs = [], I.ins.forEach((L, q) => {
          q !== y && (L.sequence = 0);
        });
        else if ((_ & 31) === l.SIGHASH_SINGLE) {
          if (y >= this.outs.length) return b;
          I.outs.length = y + 1;
          for (let L = 0; L < y; L++) I.outs[L] = f;
          I.ins.forEach((L, q) => {
            q !== y && (L.sequence = 0);
          });
        }
        _ & l.SIGHASH_ANYONECANPAY ? (I.ins = [
          I.ins[y]
        ], I.ins[0].script = S) : (I.ins.forEach((L) => {
          L.script = u;
        }), I.ins[y].script = S);
        const A = Buffer.allocUnsafe(I.byteLength(false) + 4);
        return A.writeInt32LE(_, A.length - 4), I.__toBuffer(A, 0, false), c.hash256(A);
      }
      hashForWitnessV1(y, E, _, S, I, A) {
        if (o(v.tuple(v.UInt32, o.arrayOf(v.Buffer), o.arrayOf(v.Satoshi), v.UInt32), arguments), _.length !== this.ins.length || E.length !== this.ins.length) throw new Error("Must supply prevout script and value for all inputs");
        const L = S === l.SIGHASH_DEFAULT ? l.SIGHASH_ALL : S & l.SIGHASH_OUTPUT_MASK, x = (S & l.SIGHASH_INPUT_MASK) === l.SIGHASH_ANYONECANPAY, R = L === l.SIGHASH_NONE, z = L === l.SIGHASH_SINGLE;
        let F = u, C = u, G = u, Q = u, ee = u;
        if (!x) {
          let K = e.BufferWriter.withCapacity(36 * this.ins.length);
          this.ins.forEach((V) => {
            K.writeSlice(V.hash), K.writeUInt32(V.index);
          }), F = c.sha256(K.end()), K = e.BufferWriter.withCapacity(8 * this.ins.length), _.forEach((V) => K.writeUInt64(V)), C = c.sha256(K.end()), K = e.BufferWriter.withCapacity(E.map(n).reduce((V, Z) => V + Z)), E.forEach((V) => K.writeVarSlice(V)), G = c.sha256(K.end()), K = e.BufferWriter.withCapacity(4 * this.ins.length), this.ins.forEach((V) => K.writeUInt32(V.sequence)), Q = c.sha256(K.end());
        }
        if (R || z) {
          if (z && y < this.outs.length) {
            const K = this.outs[y], V = e.BufferWriter.withCapacity(8 + n(K.script));
            V.writeUInt64(K.value), V.writeVarSlice(K.script), ee = c.sha256(V.end());
          }
        } else {
          const K = this.outs.map((Z) => 8 + n(Z.script)).reduce((Z, ue) => Z + ue), V = e.BufferWriter.withCapacity(K);
          this.outs.forEach((Z) => {
            V.writeUInt64(Z.value), V.writeVarSlice(Z.script);
          }), ee = c.sha256(V.end());
        }
        const re = (I ? 2 : 0) + (A ? 1 : 0), D = 174 - (x ? 49 : 0) - (R ? 32 : 0) + (A ? 32 : 0) + (I ? 37 : 0), O = e.BufferWriter.withCapacity(D);
        if (O.writeUInt8(S), O.writeInt32(this.version), O.writeUInt32(this.locktime), O.writeSlice(F), O.writeSlice(C), O.writeSlice(G), O.writeSlice(Q), R || z || O.writeSlice(ee), O.writeUInt8(re), x) {
          const K = this.ins[y];
          O.writeSlice(K.hash), O.writeUInt32(K.index), O.writeUInt64(_[y]), O.writeVarSlice(E[y]), O.writeUInt32(K.sequence);
        } else O.writeUInt32(y);
        if (A) {
          const K = e.BufferWriter.withCapacity(n(A));
          K.writeVarSlice(A), O.writeSlice(c.sha256(K.end()));
        }
        return z && O.writeSlice(ee), I && (O.writeSlice(I), O.writeUInt8(0), O.writeUInt32(4294967295)), c.taggedHash("TapSighash", Buffer.concat([
          Buffer.from([
            0
          ]),
          O.end()
        ]));
      }
      hashForWitnessV0(y, E, _, S) {
        o(v.tuple(v.UInt32, v.Buffer, v.Satoshi, v.UInt32), arguments);
        let I = Buffer.from([]), A, L = s, q = s, x = s;
        if (S & l.SIGHASH_ANYONECANPAY || (I = Buffer.allocUnsafe(36 * this.ins.length), A = new e.BufferWriter(I, 0), this.ins.forEach((z) => {
          A.writeSlice(z.hash), A.writeUInt32(z.index);
        }), q = c.hash256(I)), !(S & l.SIGHASH_ANYONECANPAY) && (S & 31) !== l.SIGHASH_SINGLE && (S & 31) !== l.SIGHASH_NONE && (I = Buffer.allocUnsafe(4 * this.ins.length), A = new e.BufferWriter(I, 0), this.ins.forEach((z) => {
          A.writeUInt32(z.sequence);
        }), x = c.hash256(I)), (S & 31) !== l.SIGHASH_SINGLE && (S & 31) !== l.SIGHASH_NONE) {
          const z = this.outs.reduce((F, C) => F + 8 + n(C.script), 0);
          I = Buffer.allocUnsafe(z), A = new e.BufferWriter(I, 0), this.outs.forEach((F) => {
            A.writeUInt64(F.value), A.writeVarSlice(F.script);
          }), L = c.hash256(I);
        } else if ((S & 31) === l.SIGHASH_SINGLE && y < this.outs.length) {
          const z = this.outs[y];
          I = Buffer.allocUnsafe(8 + n(z.script)), A = new e.BufferWriter(I, 0), A.writeUInt64(z.value), A.writeVarSlice(z.script), L = c.hash256(I);
        }
        I = Buffer.allocUnsafe(156 + n(E)), A = new e.BufferWriter(I, 0);
        const R = this.ins[y];
        return A.writeInt32(this.version), A.writeSlice(q), A.writeSlice(x), A.writeSlice(R.hash), A.writeUInt32(R.index), A.writeVarSlice(E), A.writeUInt64(_), A.writeUInt32(R.sequence), A.writeSlice(L), A.writeUInt32(this.locktime), A.writeUInt32(S), c.hash256(I);
      }
      getHash(y) {
        return y && this.isCoinbase() ? Buffer.alloc(32, 0) : c.hash256(this.__toBuffer(void 0, void 0, y));
      }
      getId() {
        return (0, e.reverseBuffer)(this.getHash(false)).toString("hex");
      }
      toBuffer(y, E) {
        return this.__toBuffer(y, E, true);
      }
      toHex() {
        return this.toBuffer(void 0, void 0).toString("hex");
      }
      setInputScript(y, E) {
        o(v.tuple(v.Number, v.Buffer), arguments), this.ins[y].script = E;
      }
      setWitness(y, E) {
        o(v.tuple(v.Number, [
          v.Buffer
        ]), arguments), this.ins[y].witness = E;
      }
      __toBuffer(y, E, _ = false) {
        y || (y = Buffer.allocUnsafe(this.byteLength(_)));
        const S = new e.BufferWriter(y, E || 0);
        S.writeInt32(this.version);
        const I = _ && this.hasWitnesses();
        return I && (S.writeUInt8(l.ADVANCED_TRANSACTION_MARKER), S.writeUInt8(l.ADVANCED_TRANSACTION_FLAG)), S.writeVarInt(this.ins.length), this.ins.forEach((A) => {
          S.writeSlice(A.hash), S.writeUInt32(A.index), S.writeVarSlice(A.script), S.writeUInt32(A.sequence);
        }), S.writeVarInt(this.outs.length), this.outs.forEach((A) => {
          h(A) ? S.writeUInt64(A.value) : S.writeSlice(A.valueBuffer), S.writeVarSlice(A.script);
        }), I && this.ins.forEach((A) => {
          S.writeVector(A.witness);
        }), S.writeUInt32(this.locktime), E !== void 0 ? y.slice(E, S.offset) : y;
      }
    }
    return ot.Transaction = l, l.DEFAULT_SEQUENCE = 4294967295, l.SIGHASH_DEFAULT = 0, l.SIGHASH_ALL = 1, l.SIGHASH_NONE = 2, l.SIGHASH_SINGLE = 3, l.SIGHASH_ANYONECANPAY = 128, l.SIGHASH_OUTPUT_MASK = 3, l.SIGHASH_INPUT_MASK = 128, l.ADVANCED_TRANSACTION_MARKER = 0, l.ADVANCED_TRANSACTION_FLAG = 1, ot;
  }
  var no;
  function eu() {
    if (no) return nt;
    no = 1, Object.defineProperty(nt, "__esModule", {
      value: true
    }), nt.Block = void 0;
    const e = zt(), c = nr(), d = Zs(), a = mt(), v = ze(), { typeforce: o } = v, n = new TypeError("Cannot compute merkle root for zero transactions"), r = new TypeError("Cannot compute witness commit for non-segwit block");
    class u {
      constructor() {
        this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0;
      }
      static fromBuffer(m) {
        if (m.length < 80) throw new Error("Buffer too small (< 80 bytes)");
        const f = new e.BufferReader(m), h = new u();
        if (h.version = f.readInt32(), h.prevHash = f.readSlice(32), h.merkleRoot = f.readSlice(32), h.timestamp = f.readUInt32(), h.bits = f.readUInt32(), h.nonce = f.readUInt32(), m.length === 80) return h;
        const l = () => {
          const E = a.Transaction.fromBuffer(f.buffer.slice(f.offset), true);
          return f.offset += E.byteLength(), E;
        }, w = f.readVarInt();
        h.transactions = [];
        for (let E = 0; E < w; ++E) {
          const _ = l();
          h.transactions.push(_);
        }
        const y = h.getWitnessCommit();
        return y && (h.witnessCommit = y), h;
      }
      static fromHex(m) {
        return u.fromBuffer(Buffer.from(m, "hex"));
      }
      static calculateTarget(m) {
        const f = ((m & 4278190080) >> 24) - 3, h = m & 8388607, l = Buffer.alloc(32, 0);
        return l.writeUIntBE(h, 29 - f, 3), l;
      }
      static calculateMerkleRoot(m, f) {
        if (o([
          {
            getHash: v.Function
          }
        ], m), m.length === 0) throw n;
        if (f && !p(m)) throw r;
        const h = m.map((w) => w.getHash(f)), l = (0, d.fastMerkleRoot)(h, c.hash256);
        return f ? c.hash256(Buffer.concat([
          l,
          m[0].ins[0].witness[0]
        ])) : l;
      }
      getWitnessCommit() {
        if (!p(this.transactions)) return null;
        const m = this.transactions[0].outs.filter((h) => h.script.slice(0, 6).equals(Buffer.from("6a24aa21a9ed", "hex"))).map((h) => h.script.slice(6, 38));
        if (m.length === 0) return null;
        const f = m[m.length - 1];
        return f instanceof Buffer && f.length === 32 ? f : null;
      }
      hasWitnessCommit() {
        return this.witnessCommit instanceof Buffer && this.witnessCommit.length === 32 || this.getWitnessCommit() !== null;
      }
      hasWitness() {
        return s(this.transactions);
      }
      weight() {
        const m = this.byteLength(false, false), f = this.byteLength(false, true);
        return m * 3 + f;
      }
      byteLength(m, f = true) {
        return m || !this.transactions ? 80 : 80 + e.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((h, l) => h + l.byteLength(f), 0);
      }
      getHash() {
        return c.hash256(this.toBuffer(true));
      }
      getId() {
        return (0, e.reverseBuffer)(this.getHash()).toString("hex");
      }
      getUTCDate() {
        const m = /* @__PURE__ */ new Date(0);
        return m.setUTCSeconds(this.timestamp), m;
      }
      toBuffer(m) {
        const f = Buffer.allocUnsafe(this.byteLength(m)), h = new e.BufferWriter(f);
        return h.writeInt32(this.version), h.writeSlice(this.prevHash), h.writeSlice(this.merkleRoot), h.writeUInt32(this.timestamp), h.writeUInt32(this.bits), h.writeUInt32(this.nonce), m || !this.transactions || (e.varuint.encode(this.transactions.length, f, h.offset), h.offset += e.varuint.encode.bytes, this.transactions.forEach((l) => {
          const w = l.byteLength();
          l.toBuffer(f, h.offset), h.offset += w;
        })), f;
      }
      toHex(m) {
        return this.toBuffer(m).toString("hex");
      }
      checkTxRoots() {
        const m = this.hasWitnessCommit();
        return !m && this.hasWitness() ? false : this.__checkMerkleRoot() && (m ? this.__checkWitnessCommit() : true);
      }
      checkProofOfWork() {
        const m = (0, e.reverseBuffer)(this.getHash()), f = u.calculateTarget(this.bits);
        return m.compare(f) <= 0;
      }
      __checkMerkleRoot() {
        if (!this.transactions) throw n;
        const m = u.calculateMerkleRoot(this.transactions);
        return this.merkleRoot.compare(m) === 0;
      }
      __checkWitnessCommit() {
        if (!this.transactions) throw n;
        if (!this.hasWitnessCommit()) throw r;
        const m = u.calculateMerkleRoot(this.transactions, true);
        return this.witnessCommit.compare(m) === 0;
      }
    }
    nt.Block = u;
    function p(b) {
      return b instanceof Array && b[0] && b[0].ins && b[0].ins instanceof Array && b[0].ins[0] && b[0].ins[0].witness && b[0].ins[0].witness instanceof Array && b[0].ins[0].witness.length > 0;
    }
    function s(b) {
      return b instanceof Array && b.some((m) => typeof m == "object" && m.ins instanceof Array && m.ins.some((f) => typeof f == "object" && f.witness instanceof Array && f.witness.length > 0));
    }
    return nt;
  }
  var at = {}, wt = {}, _t = {}, en = {}, Nr = {}, Hr = {}, rn = {}, io;
  function Be() {
    return io || (io = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), function(c) {
        c[c.UNSIGNED_TX = 0] = "UNSIGNED_TX", c[c.GLOBAL_XPUB = 1] = "GLOBAL_XPUB";
      }(e.GlobalTypes || (e.GlobalTypes = {})), e.GLOBAL_TYPE_NAMES = [
        "unsignedTx",
        "globalXpub"
      ], function(c) {
        c[c.NON_WITNESS_UTXO = 0] = "NON_WITNESS_UTXO", c[c.WITNESS_UTXO = 1] = "WITNESS_UTXO", c[c.PARTIAL_SIG = 2] = "PARTIAL_SIG", c[c.SIGHASH_TYPE = 3] = "SIGHASH_TYPE", c[c.REDEEM_SCRIPT = 4] = "REDEEM_SCRIPT", c[c.WITNESS_SCRIPT = 5] = "WITNESS_SCRIPT", c[c.BIP32_DERIVATION = 6] = "BIP32_DERIVATION", c[c.FINAL_SCRIPTSIG = 7] = "FINAL_SCRIPTSIG", c[c.FINAL_SCRIPTWITNESS = 8] = "FINAL_SCRIPTWITNESS", c[c.POR_COMMITMENT = 9] = "POR_COMMITMENT", c[c.TAP_KEY_SIG = 19] = "TAP_KEY_SIG", c[c.TAP_SCRIPT_SIG = 20] = "TAP_SCRIPT_SIG", c[c.TAP_LEAF_SCRIPT = 21] = "TAP_LEAF_SCRIPT", c[c.TAP_BIP32_DERIVATION = 22] = "TAP_BIP32_DERIVATION", c[c.TAP_INTERNAL_KEY = 23] = "TAP_INTERNAL_KEY", c[c.TAP_MERKLE_ROOT = 24] = "TAP_MERKLE_ROOT";
      }(e.InputTypes || (e.InputTypes = {})), e.INPUT_TYPE_NAMES = [
        "nonWitnessUtxo",
        "witnessUtxo",
        "partialSig",
        "sighashType",
        "redeemScript",
        "witnessScript",
        "bip32Derivation",
        "finalScriptSig",
        "finalScriptWitness",
        "porCommitment",
        "tapKeySig",
        "tapScriptSig",
        "tapLeafScript",
        "tapBip32Derivation",
        "tapInternalKey",
        "tapMerkleRoot"
      ], function(c) {
        c[c.REDEEM_SCRIPT = 0] = "REDEEM_SCRIPT", c[c.WITNESS_SCRIPT = 1] = "WITNESS_SCRIPT", c[c.BIP32_DERIVATION = 2] = "BIP32_DERIVATION", c[c.TAP_INTERNAL_KEY = 5] = "TAP_INTERNAL_KEY", c[c.TAP_TREE = 6] = "TAP_TREE", c[c.TAP_BIP32_DERIVATION = 7] = "TAP_BIP32_DERIVATION";
      }(e.OutputTypes || (e.OutputTypes = {})), e.OUTPUT_TYPE_NAMES = [
        "redeemScript",
        "witnessScript",
        "bip32Derivation",
        "tapInternalKey",
        "tapTree",
        "tapBip32Derivation"
      ];
    }(rn)), rn;
  }
  var or = {}, oo;
  function ru() {
    if (oo) return or;
    oo = 1, Object.defineProperty(or, "__esModule", {
      value: true
    });
    const e = Be(), c = (n) => [
      ...Array(n).keys()
    ];
    function d(n) {
      if (n.key[0] !== e.GlobalTypes.GLOBAL_XPUB) throw new Error("Decode Error: could not decode globalXpub with key 0x" + n.key.toString("hex"));
      if (n.key.length !== 79 || ![
        2,
        3
      ].includes(n.key[46])) throw new Error("Decode Error: globalXpub has invalid extended pubkey in key 0x" + n.key.toString("hex"));
      if (n.value.length / 4 % 1 !== 0) throw new Error("Decode Error: Global GLOBAL_XPUB value length should be multiple of 4");
      const r = n.key.slice(1), u = {
        masterFingerprint: n.value.slice(0, 4),
        extendedPubkey: r,
        path: "m"
      };
      for (const p of c(n.value.length / 4 - 1)) {
        const s = n.value.readUInt32LE(p * 4 + 4), b = !!(s & 2147483648), m = s & 2147483647;
        u.path += "/" + m.toString(10) + (b ? "'" : "");
      }
      return u;
    }
    or.decode = d;
    function a(n) {
      const r = Buffer.from([
        e.GlobalTypes.GLOBAL_XPUB
      ]), u = Buffer.concat([
        r,
        n.extendedPubkey
      ]), p = n.path.split("/"), s = Buffer.allocUnsafe(p.length * 4);
      n.masterFingerprint.copy(s, 0);
      let b = 4;
      return p.slice(1).forEach((m) => {
        const f = m.slice(-1) === "'";
        let h = 2147483647 & parseInt(f ? m.slice(0, -1) : m, 10);
        f && (h += 2147483648), s.writeUInt32LE(h, b), b += 4;
      }), {
        key: u,
        value: s
      };
    }
    or.encode = a, or.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
    function v(n) {
      const r = n.extendedPubkey, u = n.masterFingerprint, p = n.path;
      return Buffer.isBuffer(r) && r.length === 78 && [
        2,
        3
      ].indexOf(r[45]) > -1 && Buffer.isBuffer(u) && u.length === 4 && typeof p == "string" && !!p.match(/^m(\/\d+'?)*$/);
    }
    or.check = v;
    function o(n, r, u) {
      const p = r.extendedPubkey.toString("hex");
      return u.has(p) ? false : (u.add(p), n.filter((s) => s.extendedPubkey.equals(r.extendedPubkey)).length === 0);
    }
    return or.canAddToArray = o, or;
  }
  var Et = {}, ao;
  function tu() {
    if (ao) return Et;
    ao = 1, Object.defineProperty(Et, "__esModule", {
      value: true
    });
    const e = Be();
    function c(d) {
      return {
        key: Buffer.from([
          e.GlobalTypes.UNSIGNED_TX
        ]),
        value: d.toBuffer()
      };
    }
    return Et.encode = c, Et;
  }
  var ar = {}, so;
  function nu() {
    if (so) return ar;
    so = 1, Object.defineProperty(ar, "__esModule", {
      value: true
    });
    const e = Be();
    function c(o) {
      if (o.key[0] !== e.InputTypes.FINAL_SCRIPTSIG) throw new Error("Decode Error: could not decode finalScriptSig with key 0x" + o.key.toString("hex"));
      return o.value;
    }
    ar.decode = c;
    function d(o) {
      return {
        key: Buffer.from([
          e.InputTypes.FINAL_SCRIPTSIG
        ]),
        value: o
      };
    }
    ar.encode = d, ar.expected = "Buffer";
    function a(o) {
      return Buffer.isBuffer(o);
    }
    ar.check = a;
    function v(o, n) {
      return !!o && !!n && o.finalScriptSig === void 0;
    }
    return ar.canAdd = v, ar;
  }
  var sr = {}, uo;
  function iu() {
    if (uo) return sr;
    uo = 1, Object.defineProperty(sr, "__esModule", {
      value: true
    });
    const e = Be();
    function c(o) {
      if (o.key[0] !== e.InputTypes.FINAL_SCRIPTWITNESS) throw new Error("Decode Error: could not decode finalScriptWitness with key 0x" + o.key.toString("hex"));
      return o.value;
    }
    sr.decode = c;
    function d(o) {
      return {
        key: Buffer.from([
          e.InputTypes.FINAL_SCRIPTWITNESS
        ]),
        value: o
      };
    }
    sr.encode = d, sr.expected = "Buffer";
    function a(o) {
      return Buffer.isBuffer(o);
    }
    sr.check = a;
    function v(o, n) {
      return !!o && !!n && o.finalScriptWitness === void 0;
    }
    return sr.canAdd = v, sr;
  }
  var ur = {}, co;
  function ou() {
    if (co) return ur;
    co = 1, Object.defineProperty(ur, "__esModule", {
      value: true
    });
    const e = Be();
    function c(o) {
      if (o.key[0] !== e.InputTypes.NON_WITNESS_UTXO) throw new Error("Decode Error: could not decode nonWitnessUtxo with key 0x" + o.key.toString("hex"));
      return o.value;
    }
    ur.decode = c;
    function d(o) {
      return {
        key: Buffer.from([
          e.InputTypes.NON_WITNESS_UTXO
        ]),
        value: o
      };
    }
    ur.encode = d, ur.expected = "Buffer";
    function a(o) {
      return Buffer.isBuffer(o);
    }
    ur.check = a;
    function v(o, n) {
      return !!o && !!n && o.nonWitnessUtxo === void 0;
    }
    return ur.canAdd = v, ur;
  }
  var cr = {}, lo;
  function au() {
    if (lo) return cr;
    lo = 1, Object.defineProperty(cr, "__esModule", {
      value: true
    });
    const e = Be();
    function c(n) {
      if (n.key[0] !== e.InputTypes.PARTIAL_SIG) throw new Error("Decode Error: could not decode partialSig with key 0x" + n.key.toString("hex"));
      if (!(n.key.length === 34 || n.key.length === 66) || ![
        2,
        3,
        4
      ].includes(n.key[1])) throw new Error("Decode Error: partialSig has invalid pubkey in key 0x" + n.key.toString("hex"));
      return {
        pubkey: n.key.slice(1),
        signature: n.value
      };
    }
    cr.decode = c;
    function d(n) {
      const r = Buffer.from([
        e.InputTypes.PARTIAL_SIG
      ]);
      return {
        key: Buffer.concat([
          r,
          n.pubkey
        ]),
        value: n.signature
      };
    }
    cr.encode = d, cr.expected = "{ pubkey: Buffer; signature: Buffer; }";
    function a(n) {
      return Buffer.isBuffer(n.pubkey) && Buffer.isBuffer(n.signature) && [
        33,
        65
      ].includes(n.pubkey.length) && [
        2,
        3,
        4
      ].includes(n.pubkey[0]) && v(n.signature);
    }
    cr.check = a;
    function v(n) {
      if (!Buffer.isBuffer(n) || n.length < 9 || n[0] !== 48 || n.length !== n[1] + 3 || n[2] !== 2) return false;
      const r = n[3];
      if (r > 33 || r < 1 || n[3 + r + 1] !== 2) return false;
      const u = n[3 + r + 2];
      return !(u > 33 || u < 1 || n.length !== 3 + r + 2 + u + 2);
    }
    function o(n, r, u) {
      const p = r.pubkey.toString("hex");
      return u.has(p) ? false : (u.add(p), n.filter((s) => s.pubkey.equals(r.pubkey)).length === 0);
    }
    return cr.canAddToArray = o, cr;
  }
  var lr = {}, fo;
  function su() {
    if (fo) return lr;
    fo = 1, Object.defineProperty(lr, "__esModule", {
      value: true
    });
    const e = Be();
    function c(o) {
      if (o.key[0] !== e.InputTypes.POR_COMMITMENT) throw new Error("Decode Error: could not decode porCommitment with key 0x" + o.key.toString("hex"));
      return o.value.toString("utf8");
    }
    lr.decode = c;
    function d(o) {
      return {
        key: Buffer.from([
          e.InputTypes.POR_COMMITMENT
        ]),
        value: Buffer.from(o, "utf8")
      };
    }
    lr.encode = d, lr.expected = "string";
    function a(o) {
      return typeof o == "string";
    }
    lr.check = a;
    function v(o, n) {
      return !!o && !!n && o.porCommitment === void 0;
    }
    return lr.canAdd = v, lr;
  }
  var fr = {}, ho;
  function uu() {
    if (ho) return fr;
    ho = 1, Object.defineProperty(fr, "__esModule", {
      value: true
    });
    const e = Be();
    function c(o) {
      if (o.key[0] !== e.InputTypes.SIGHASH_TYPE) throw new Error("Decode Error: could not decode sighashType with key 0x" + o.key.toString("hex"));
      return o.value.readUInt32LE(0);
    }
    fr.decode = c;
    function d(o) {
      const n = Buffer.from([
        e.InputTypes.SIGHASH_TYPE
      ]), r = Buffer.allocUnsafe(4);
      return r.writeUInt32LE(o, 0), {
        key: n,
        value: r
      };
    }
    fr.encode = d, fr.expected = "number";
    function a(o) {
      return typeof o == "number";
    }
    fr.check = a;
    function v(o, n) {
      return !!o && !!n && o.sighashType === void 0;
    }
    return fr.canAdd = v, fr;
  }
  var dr = {}, po;
  function cu() {
    if (po) return dr;
    po = 1, Object.defineProperty(dr, "__esModule", {
      value: true
    });
    const e = Be();
    function c(o) {
      if (o.key[0] !== e.InputTypes.TAP_KEY_SIG || o.key.length !== 1) throw new Error("Decode Error: could not decode tapKeySig with key 0x" + o.key.toString("hex"));
      if (!a(o.value)) throw new Error("Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature");
      return o.value;
    }
    dr.decode = c;
    function d(o) {
      return {
        key: Buffer.from([
          e.InputTypes.TAP_KEY_SIG
        ]),
        value: o
      };
    }
    dr.encode = d, dr.expected = "Buffer";
    function a(o) {
      return Buffer.isBuffer(o) && (o.length === 64 || o.length === 65);
    }
    dr.check = a;
    function v(o, n) {
      return !!o && !!n && o.tapKeySig === void 0;
    }
    return dr.canAdd = v, dr;
  }
  var hr = {}, mo;
  function lu() {
    if (mo) return hr;
    mo = 1, Object.defineProperty(hr, "__esModule", {
      value: true
    });
    const e = Be();
    function c(o) {
      if (o.key[0] !== e.InputTypes.TAP_LEAF_SCRIPT) throw new Error("Decode Error: could not decode tapLeafScript with key 0x" + o.key.toString("hex"));
      if ((o.key.length - 2) % 32 !== 0) throw new Error("Decode Error: tapLeafScript has invalid control block in key 0x" + o.key.toString("hex"));
      const n = o.value[o.value.length - 1];
      if ((o.key[1] & 254) !== n) throw new Error("Decode Error: tapLeafScript bad leaf version in key 0x" + o.key.toString("hex"));
      const r = o.value.slice(0, -1);
      return {
        controlBlock: o.key.slice(1),
        script: r,
        leafVersion: n
      };
    }
    hr.decode = c;
    function d(o) {
      const n = Buffer.from([
        e.InputTypes.TAP_LEAF_SCRIPT
      ]), r = Buffer.from([
        o.leafVersion
      ]);
      return {
        key: Buffer.concat([
          n,
          o.controlBlock
        ]),
        value: Buffer.concat([
          o.script,
          r
        ])
      };
    }
    hr.encode = d, hr.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
    function a(o) {
      return Buffer.isBuffer(o.controlBlock) && (o.controlBlock.length - 1) % 32 === 0 && (o.controlBlock[0] & 254) === o.leafVersion && Buffer.isBuffer(o.script);
    }
    hr.check = a;
    function v(o, n, r) {
      const u = n.controlBlock.toString("hex");
      return r.has(u) ? false : (r.add(u), o.filter((p) => p.controlBlock.equals(n.controlBlock)).length === 0);
    }
    return hr.canAddToArray = v, hr;
  }
  var pr = {}, bo;
  function fu() {
    if (bo) return pr;
    bo = 1, Object.defineProperty(pr, "__esModule", {
      value: true
    });
    const e = Be();
    function c(o) {
      if (o.key[0] !== e.InputTypes.TAP_MERKLE_ROOT || o.key.length !== 1) throw new Error("Decode Error: could not decode tapMerkleRoot with key 0x" + o.key.toString("hex"));
      if (!a(o.value)) throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
      return o.value;
    }
    pr.decode = c;
    function d(o) {
      return {
        key: Buffer.from([
          e.InputTypes.TAP_MERKLE_ROOT
        ]),
        value: o
      };
    }
    pr.encode = d, pr.expected = "Buffer";
    function a(o) {
      return Buffer.isBuffer(o) && o.length === 32;
    }
    pr.check = a;
    function v(o, n) {
      return !!o && !!n && o.tapMerkleRoot === void 0;
    }
    return pr.canAdd = v, pr;
  }
  var mr = {}, go;
  function du() {
    if (go) return mr;
    go = 1, Object.defineProperty(mr, "__esModule", {
      value: true
    });
    const e = Be();
    function c(o) {
      if (o.key[0] !== e.InputTypes.TAP_SCRIPT_SIG) throw new Error("Decode Error: could not decode tapScriptSig with key 0x" + o.key.toString("hex"));
      if (o.key.length !== 65) throw new Error("Decode Error: tapScriptSig has invalid key 0x" + o.key.toString("hex"));
      if (o.value.length !== 64 && o.value.length !== 65) throw new Error("Decode Error: tapScriptSig has invalid signature in key 0x" + o.key.toString("hex"));
      const n = o.key.slice(1, 33), r = o.key.slice(33);
      return {
        pubkey: n,
        leafHash: r,
        signature: o.value
      };
    }
    mr.decode = c;
    function d(o) {
      const n = Buffer.from([
        e.InputTypes.TAP_SCRIPT_SIG
      ]);
      return {
        key: Buffer.concat([
          n,
          o.pubkey,
          o.leafHash
        ]),
        value: o.signature
      };
    }
    mr.encode = d, mr.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }";
    function a(o) {
      return Buffer.isBuffer(o.pubkey) && Buffer.isBuffer(o.leafHash) && Buffer.isBuffer(o.signature) && o.pubkey.length === 32 && o.leafHash.length === 32 && (o.signature.length === 64 || o.signature.length === 65);
    }
    mr.check = a;
    function v(o, n, r) {
      const u = n.pubkey.toString("hex") + n.leafHash.toString("hex");
      return r.has(u) ? false : (r.add(u), o.filter((p) => p.pubkey.equals(n.pubkey) && p.leafHash.equals(n.leafHash)).length === 0);
    }
    return mr.canAddToArray = v, mr;
  }
  var br = {}, rr = {}, Cr = {}, yo;
  function zr() {
    if (yo) return Cr;
    yo = 1, Object.defineProperty(Cr, "__esModule", {
      value: true
    });
    const e = 9007199254740991;
    function c(o) {
      if (o < 0 || o > e || o % 1 !== 0) throw new RangeError("value out of range");
    }
    function d(o, n, r) {
      if (c(o), n || (n = Buffer.allocUnsafe(v(o))), !Buffer.isBuffer(n)) throw new TypeError("buffer must be a Buffer instance");
      return r || (r = 0), o < 253 ? (n.writeUInt8(o, r), Object.assign(d, {
        bytes: 1
      })) : o <= 65535 ? (n.writeUInt8(253, r), n.writeUInt16LE(o, r + 1), Object.assign(d, {
        bytes: 3
      })) : o <= 4294967295 ? (n.writeUInt8(254, r), n.writeUInt32LE(o, r + 1), Object.assign(d, {
        bytes: 5
      })) : (n.writeUInt8(255, r), n.writeUInt32LE(o >>> 0, r + 1), n.writeUInt32LE(o / 4294967296 | 0, r + 5), Object.assign(d, {
        bytes: 9
      })), n;
    }
    Cr.encode = d;
    function a(o, n) {
      if (!Buffer.isBuffer(o)) throw new TypeError("buffer must be a Buffer instance");
      n || (n = 0);
      const r = o.readUInt8(n);
      if (r < 253) return Object.assign(a, {
        bytes: 1
      }), r;
      if (r === 253) return Object.assign(a, {
        bytes: 3
      }), o.readUInt16LE(n + 1);
      if (r === 254) return Object.assign(a, {
        bytes: 5
      }), o.readUInt32LE(n + 1);
      {
        Object.assign(a, {
          bytes: 9
        });
        const u = o.readUInt32LE(n + 1), s = o.readUInt32LE(n + 5) * 4294967296 + u;
        return c(s), s;
      }
    }
    Cr.decode = a;
    function v(o) {
      return c(o), o < 253 ? 1 : o <= 65535 ? 3 : o <= 4294967295 ? 5 : 9;
    }
    return Cr.encodingLength = v, Cr;
  }
  var vo;
  function Yn() {
    if (vo) return rr;
    vo = 1, Object.defineProperty(rr, "__esModule", {
      value: true
    });
    const e = zr();
    rr.range = (r) => [
      ...Array(r).keys()
    ];
    function c(r) {
      if (r.length < 1) return r;
      let u = r.length - 1, p = 0;
      for (let s = 0; s < r.length / 2; s++) p = r[s], r[s] = r[u], r[u] = p, u--;
      return r;
    }
    rr.reverseBuffer = c;
    function d(r) {
      const u = r.map(a);
      return u.push(Buffer.from([
        0
      ])), Buffer.concat(u);
    }
    rr.keyValsToBuffer = d;
    function a(r) {
      const u = r.key.length, p = r.value.length, s = e.encodingLength(u), b = e.encodingLength(p), m = Buffer.allocUnsafe(s + u + b + p);
      return e.encode(u, m, 0), r.key.copy(m, s), e.encode(p, m, s + u), r.value.copy(m, s + u + b), m;
    }
    rr.keyValToBuffer = a;
    function v(r, u) {
      if (typeof r != "number") throw new Error("cannot write a non-number as a number");
      if (r < 0) throw new Error("specified a negative value for writing an unsigned value");
      if (r > u) throw new Error("RangeError: value out of range");
      if (Math.floor(r) !== r) throw new Error("value has a fractional component");
    }
    function o(r, u) {
      const p = r.readUInt32LE(u);
      let s = r.readUInt32LE(u + 4);
      return s *= 4294967296, v(s + p, 9007199254740991), s + p;
    }
    rr.readUInt64LE = o;
    function n(r, u, p) {
      return v(u, 9007199254740991), r.writeInt32LE(u & -1, p), r.writeUInt32LE(Math.floor(u / 4294967296), p + 4), p + 8;
    }
    return rr.writeUInt64LE = n, rr;
  }
  var wo;
  function hu() {
    if (wo) return br;
    wo = 1, Object.defineProperty(br, "__esModule", {
      value: true
    });
    const e = Be(), c = Yn(), d = zr();
    function a(r) {
      if (r.key[0] !== e.InputTypes.WITNESS_UTXO) throw new Error("Decode Error: could not decode witnessUtxo with key 0x" + r.key.toString("hex"));
      const u = c.readUInt64LE(r.value, 0);
      let p = 8;
      const s = d.decode(r.value, p);
      p += d.encodingLength(s);
      const b = r.value.slice(p);
      if (b.length !== s) throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
      return {
        script: b,
        value: u
      };
    }
    br.decode = a;
    function v(r) {
      const { script: u, value: p } = r, s = d.encodingLength(u.length), b = Buffer.allocUnsafe(8 + s + u.length);
      return c.writeUInt64LE(b, p, 0), d.encode(u.length, b, 8), u.copy(b, 8 + s), {
        key: Buffer.from([
          e.InputTypes.WITNESS_UTXO
        ]),
        value: b
      };
    }
    br.encode = v, br.expected = "{ script: Buffer; value: number; }";
    function o(r) {
      return Buffer.isBuffer(r.script) && typeof r.value == "number";
    }
    br.check = o;
    function n(r, u) {
      return !!r && !!u && r.witnessUtxo === void 0;
    }
    return br.canAdd = n, br;
  }
  var gr = {}, _o;
  function pu() {
    if (_o) return gr;
    _o = 1, Object.defineProperty(gr, "__esModule", {
      value: true
    });
    const e = Be(), c = zr();
    function d(n) {
      if (n.key[0] !== e.OutputTypes.TAP_TREE || n.key.length !== 1) throw new Error("Decode Error: could not decode tapTree with key 0x" + n.key.toString("hex"));
      let r = 0;
      const u = [];
      for (; r < n.value.length; ) {
        const p = n.value[r++], s = n.value[r++], b = c.decode(n.value, r);
        r += c.encodingLength(b), u.push({
          depth: p,
          leafVersion: s,
          script: n.value.slice(r, r + b)
        }), r += b;
      }
      return {
        leaves: u
      };
    }
    gr.decode = d;
    function a(n) {
      const r = Buffer.from([
        e.OutputTypes.TAP_TREE
      ]), u = [].concat(...n.leaves.map((p) => [
        Buffer.of(p.depth, p.leafVersion),
        c.encode(p.script.length),
        p.script
      ]));
      return {
        key: r,
        value: Buffer.concat(u)
      };
    }
    gr.encode = a, gr.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
    function v(n) {
      return Array.isArray(n.leaves) && n.leaves.every((r) => r.depth >= 0 && r.depth <= 128 && (r.leafVersion & 254) === r.leafVersion && Buffer.isBuffer(r.script));
    }
    gr.check = v;
    function o(n, r) {
      return !!n && !!r && n.tapTree === void 0;
    }
    return gr.canAdd = o, gr;
  }
  var kt = {}, Eo;
  function Ga() {
    if (Eo) return kt;
    Eo = 1, Object.defineProperty(kt, "__esModule", {
      value: true
    });
    const e = (a) => [
      ...Array(a).keys()
    ], c = (a) => a.length === 33 && [
      2,
      3
    ].includes(a[0]) || a.length === 65 && a[0] === 4;
    function d(a, v = c) {
      function o(s) {
        if (s.key[0] !== a) throw new Error("Decode Error: could not decode bip32Derivation with key 0x" + s.key.toString("hex"));
        const b = s.key.slice(1);
        if (!v(b)) throw new Error("Decode Error: bip32Derivation has invalid pubkey in key 0x" + s.key.toString("hex"));
        if (s.value.length / 4 % 1 !== 0) throw new Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");
        const m = {
          masterFingerprint: s.value.slice(0, 4),
          pubkey: b,
          path: "m"
        };
        for (const f of e(s.value.length / 4 - 1)) {
          const h = s.value.readUInt32LE(f * 4 + 4), l = !!(h & 2147483648), w = h & 2147483647;
          m.path += "/" + w.toString(10) + (l ? "'" : "");
        }
        return m;
      }
      function n(s) {
        const b = Buffer.from([
          a
        ]), m = Buffer.concat([
          b,
          s.pubkey
        ]), f = s.path.split("/"), h = Buffer.allocUnsafe(f.length * 4);
        s.masterFingerprint.copy(h, 0);
        let l = 4;
        return f.slice(1).forEach((w) => {
          const y = w.slice(-1) === "'";
          let E = 2147483647 & parseInt(y ? w.slice(0, -1) : w, 10);
          y && (E += 2147483648), h.writeUInt32LE(E, l), l += 4;
        }), {
          key: m,
          value: h
        };
      }
      const r = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
      function u(s) {
        return Buffer.isBuffer(s.pubkey) && Buffer.isBuffer(s.masterFingerprint) && typeof s.path == "string" && v(s.pubkey) && s.masterFingerprint.length === 4;
      }
      function p(s, b, m) {
        const f = b.pubkey.toString("hex");
        return m.has(f) ? false : (m.add(f), s.filter((h) => h.pubkey.equals(b.pubkey)).length === 0);
      }
      return {
        decode: o,
        encode: n,
        check: u,
        expected: r,
        canAddToArray: p
      };
    }
    return kt.makeConverter = d, kt;
  }
  var St = {}, ko;
  function mu() {
    if (ko) return St;
    ko = 1, Object.defineProperty(St, "__esModule", {
      value: true
    });
    function e(c) {
      return d;
      function d(a) {
        let v;
        if (c.includes(a.key[0]) && (v = a.key.slice(1), !(v.length === 33 || v.length === 65) || ![
          2,
          3,
          4
        ].includes(v[0]))) throw new Error("Format Error: invalid pubkey in key 0x" + a.key.toString("hex"));
        return v;
      }
    }
    return St.makeChecker = e, St;
  }
  var Tt = {}, So;
  function bu() {
    if (So) return Tt;
    So = 1, Object.defineProperty(Tt, "__esModule", {
      value: true
    });
    function e(c) {
      function d(r) {
        if (r.key[0] !== c) throw new Error("Decode Error: could not decode redeemScript with key 0x" + r.key.toString("hex"));
        return r.value;
      }
      function a(r) {
        return {
          key: Buffer.from([
            c
          ]),
          value: r
        };
      }
      const v = "Buffer";
      function o(r) {
        return Buffer.isBuffer(r);
      }
      function n(r, u) {
        return !!r && !!u && r.redeemScript === void 0;
      }
      return {
        decode: d,
        encode: a,
        check: o,
        expected: v,
        canAdd: n
      };
    }
    return Tt.makeConverter = e, Tt;
  }
  var xt = {}, To;
  function gu() {
    if (To) return xt;
    To = 1, Object.defineProperty(xt, "__esModule", {
      value: true
    });
    const e = zr(), c = Ga(), d = (v) => v.length === 32;
    function a(v) {
      const o = c.makeConverter(v, d);
      function n(s) {
        const b = e.decode(s.value), m = e.encodingLength(b), f = o.decode({
          key: s.key,
          value: s.value.slice(m + b * 32)
        }), h = new Array(b);
        for (let l = 0, w = m; l < b; l++, w += 32) h[l] = s.value.slice(w, w + 32);
        return Object.assign({}, f, {
          leafHashes: h
        });
      }
      function r(s) {
        const b = o.encode(s), m = e.encodingLength(s.leafHashes.length), f = Buffer.allocUnsafe(m);
        e.encode(s.leafHashes.length, f);
        const h = Buffer.concat([
          f,
          ...s.leafHashes,
          b.value
        ]);
        return Object.assign({}, b, {
          value: h
        });
      }
      const u = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
      function p(s) {
        return Array.isArray(s.leafHashes) && s.leafHashes.every((b) => Buffer.isBuffer(b) && b.length === 32) && o.check(s);
      }
      return {
        decode: n,
        encode: r,
        check: p,
        expected: u,
        canAddToArray: o.canAddToArray
      };
    }
    return xt.makeConverter = a, xt;
  }
  var It = {}, xo;
  function yu() {
    if (xo) return It;
    xo = 1, Object.defineProperty(It, "__esModule", {
      value: true
    });
    function e(c) {
      function d(r) {
        if (r.key[0] !== c || r.key.length !== 1) throw new Error("Decode Error: could not decode tapInternalKey with key 0x" + r.key.toString("hex"));
        if (r.value.length !== 32) throw new Error("Decode Error: tapInternalKey not a 32-byte x-only pubkey");
        return r.value;
      }
      function a(r) {
        return {
          key: Buffer.from([
            c
          ]),
          value: r
        };
      }
      const v = "Buffer";
      function o(r) {
        return Buffer.isBuffer(r) && r.length === 32;
      }
      function n(r, u) {
        return !!r && !!u && r.tapInternalKey === void 0;
      }
      return {
        decode: d,
        encode: a,
        check: o,
        expected: v,
        canAdd: n
      };
    }
    return It.makeConverter = e, It;
  }
  var At = {}, Io;
  function vu() {
    if (Io) return At;
    Io = 1, Object.defineProperty(At, "__esModule", {
      value: true
    });
    function e(c) {
      function d(r) {
        if (r.key[0] !== c) throw new Error("Decode Error: could not decode witnessScript with key 0x" + r.key.toString("hex"));
        return r.value;
      }
      function a(r) {
        return {
          key: Buffer.from([
            c
          ]),
          value: r
        };
      }
      const v = "Buffer";
      function o(r) {
        return Buffer.isBuffer(r);
      }
      function n(r, u) {
        return !!r && !!u && r.witnessScript === void 0;
      }
      return {
        decode: d,
        encode: a,
        check: o,
        expected: v,
        canAdd: n
      };
    }
    return At.makeConverter = e, At;
  }
  var Ao;
  function Jn() {
    if (Ao) return Hr;
    Ao = 1, Object.defineProperty(Hr, "__esModule", {
      value: true
    });
    const e = Be(), c = ru(), d = tu(), a = nu(), v = iu(), o = ou(), n = au(), r = su(), u = uu(), p = cu(), s = lu(), b = fu(), m = du(), f = hu(), h = pu(), l = Ga(), w = mu(), y = bu(), E = gu(), _ = yu(), S = vu(), I = {
      unsignedTx: d,
      globalXpub: c,
      checkPubkey: w.makeChecker([])
    };
    Hr.globals = I;
    const A = {
      nonWitnessUtxo: o,
      partialSig: n,
      sighashType: u,
      finalScriptSig: a,
      finalScriptWitness: v,
      porCommitment: r,
      witnessUtxo: f,
      bip32Derivation: l.makeConverter(e.InputTypes.BIP32_DERIVATION),
      redeemScript: y.makeConverter(e.InputTypes.REDEEM_SCRIPT),
      witnessScript: S.makeConverter(e.InputTypes.WITNESS_SCRIPT),
      checkPubkey: w.makeChecker([
        e.InputTypes.PARTIAL_SIG,
        e.InputTypes.BIP32_DERIVATION
      ]),
      tapKeySig: p,
      tapScriptSig: m,
      tapLeafScript: s,
      tapBip32Derivation: E.makeConverter(e.InputTypes.TAP_BIP32_DERIVATION),
      tapInternalKey: _.makeConverter(e.InputTypes.TAP_INTERNAL_KEY),
      tapMerkleRoot: b
    };
    Hr.inputs = A;
    const L = {
      bip32Derivation: l.makeConverter(e.OutputTypes.BIP32_DERIVATION),
      redeemScript: y.makeConverter(e.OutputTypes.REDEEM_SCRIPT),
      witnessScript: S.makeConverter(e.OutputTypes.WITNESS_SCRIPT),
      checkPubkey: w.makeChecker([
        e.OutputTypes.BIP32_DERIVATION
      ]),
      tapBip32Derivation: E.makeConverter(e.OutputTypes.TAP_BIP32_DERIVATION),
      tapTree: h,
      tapInternalKey: _.makeConverter(e.OutputTypes.TAP_INTERNAL_KEY)
    };
    return Hr.outputs = L, Hr;
  }
  var Bo;
  function wu() {
    if (Bo) return Nr;
    Bo = 1, Object.defineProperty(Nr, "__esModule", {
      value: true
    });
    const e = Jn(), c = Yn(), d = zr(), a = Be();
    function v(r, u) {
      let p = 0;
      function s() {
        const L = d.decode(r, p);
        p += d.encodingLength(L);
        const q = r.slice(p, p + L);
        return p += L, q;
      }
      function b() {
        const L = r.readUInt32BE(p);
        return p += 4, L;
      }
      function m() {
        const L = r.readUInt8(p);
        return p += 1, L;
      }
      function f() {
        const L = s(), q = s();
        return {
          key: L,
          value: q
        };
      }
      function h() {
        if (p >= r.length) throw new Error("Format Error: Unexpected End of PSBT");
        const L = r.readUInt8(p) === 0;
        return L && p++, L;
      }
      if (b() !== 1886610036) throw new Error("Format Error: Invalid Magic Number");
      if (m() !== 255) throw new Error("Format Error: Magic Number must be followed by 0xff separator");
      const l = [], w = {};
      for (; !h(); ) {
        const L = f(), q = L.key.toString("hex");
        if (w[q]) throw new Error("Format Error: Keys must be unique for global keymap: key " + q);
        w[q] = 1, l.push(L);
      }
      const y = l.filter((L) => L.key[0] === a.GlobalTypes.UNSIGNED_TX);
      if (y.length !== 1) throw new Error("Format Error: Only one UNSIGNED_TX allowed");
      const E = u(y[0].value), { inputCount: _, outputCount: S } = E.getInputOutputCounts(), I = [], A = [];
      for (const L of c.range(_)) {
        const q = {}, x = [];
        for (; !h(); ) {
          const R = f(), z = R.key.toString("hex");
          if (q[z]) throw new Error("Format Error: Keys must be unique for each input: input index " + L + " key " + z);
          q[z] = 1, x.push(R);
        }
        I.push(x);
      }
      for (const L of c.range(S)) {
        const q = {}, x = [];
        for (; !h(); ) {
          const R = f(), z = R.key.toString("hex");
          if (q[z]) throw new Error("Format Error: Keys must be unique for each output: output index " + L + " key " + z);
          q[z] = 1, x.push(R);
        }
        A.push(x);
      }
      return n(E, {
        globalMapKeyVals: l,
        inputKeyVals: I,
        outputKeyVals: A
      });
    }
    Nr.psbtFromBuffer = v;
    function o(r, u, p) {
      if (!u.equals(Buffer.from([
        p
      ]))) throw new Error(`Format Error: Invalid ${r} key: ${u.toString("hex")}`);
    }
    Nr.checkKeyBuffer = o;
    function n(r, { globalMapKeyVals: u, inputKeyVals: p, outputKeyVals: s }) {
      const b = {
        unsignedTx: r
      };
      let m = 0;
      for (const y of u) switch (y.key[0]) {
        case a.GlobalTypes.UNSIGNED_TX:
          if (o("global", y.key, a.GlobalTypes.UNSIGNED_TX), m > 0) throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
          m++;
          break;
        case a.GlobalTypes.GLOBAL_XPUB:
          b.globalXpub === void 0 && (b.globalXpub = []), b.globalXpub.push(e.globals.globalXpub.decode(y));
          break;
        default:
          b.unknownKeyVals || (b.unknownKeyVals = []), b.unknownKeyVals.push(y);
      }
      const f = p.length, h = s.length, l = [], w = [];
      for (const y of c.range(f)) {
        const E = {};
        for (const _ of p[y]) switch (e.inputs.checkPubkey(_), _.key[0]) {
          case a.InputTypes.NON_WITNESS_UTXO:
            if (o("input", _.key, a.InputTypes.NON_WITNESS_UTXO), E.nonWitnessUtxo !== void 0) throw new Error("Format Error: Input has multiple NON_WITNESS_UTXO");
            E.nonWitnessUtxo = e.inputs.nonWitnessUtxo.decode(_);
            break;
          case a.InputTypes.WITNESS_UTXO:
            if (o("input", _.key, a.InputTypes.WITNESS_UTXO), E.witnessUtxo !== void 0) throw new Error("Format Error: Input has multiple WITNESS_UTXO");
            E.witnessUtxo = e.inputs.witnessUtxo.decode(_);
            break;
          case a.InputTypes.PARTIAL_SIG:
            E.partialSig === void 0 && (E.partialSig = []), E.partialSig.push(e.inputs.partialSig.decode(_));
            break;
          case a.InputTypes.SIGHASH_TYPE:
            if (o("input", _.key, a.InputTypes.SIGHASH_TYPE), E.sighashType !== void 0) throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
            E.sighashType = e.inputs.sighashType.decode(_);
            break;
          case a.InputTypes.REDEEM_SCRIPT:
            if (o("input", _.key, a.InputTypes.REDEEM_SCRIPT), E.redeemScript !== void 0) throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
            E.redeemScript = e.inputs.redeemScript.decode(_);
            break;
          case a.InputTypes.WITNESS_SCRIPT:
            if (o("input", _.key, a.InputTypes.WITNESS_SCRIPT), E.witnessScript !== void 0) throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
            E.witnessScript = e.inputs.witnessScript.decode(_);
            break;
          case a.InputTypes.BIP32_DERIVATION:
            E.bip32Derivation === void 0 && (E.bip32Derivation = []), E.bip32Derivation.push(e.inputs.bip32Derivation.decode(_));
            break;
          case a.InputTypes.FINAL_SCRIPTSIG:
            o("input", _.key, a.InputTypes.FINAL_SCRIPTSIG), E.finalScriptSig = e.inputs.finalScriptSig.decode(_);
            break;
          case a.InputTypes.FINAL_SCRIPTWITNESS:
            o("input", _.key, a.InputTypes.FINAL_SCRIPTWITNESS), E.finalScriptWitness = e.inputs.finalScriptWitness.decode(_);
            break;
          case a.InputTypes.POR_COMMITMENT:
            o("input", _.key, a.InputTypes.POR_COMMITMENT), E.porCommitment = e.inputs.porCommitment.decode(_);
            break;
          case a.InputTypes.TAP_KEY_SIG:
            o("input", _.key, a.InputTypes.TAP_KEY_SIG), E.tapKeySig = e.inputs.tapKeySig.decode(_);
            break;
          case a.InputTypes.TAP_SCRIPT_SIG:
            E.tapScriptSig === void 0 && (E.tapScriptSig = []), E.tapScriptSig.push(e.inputs.tapScriptSig.decode(_));
            break;
          case a.InputTypes.TAP_LEAF_SCRIPT:
            E.tapLeafScript === void 0 && (E.tapLeafScript = []), E.tapLeafScript.push(e.inputs.tapLeafScript.decode(_));
            break;
          case a.InputTypes.TAP_BIP32_DERIVATION:
            E.tapBip32Derivation === void 0 && (E.tapBip32Derivation = []), E.tapBip32Derivation.push(e.inputs.tapBip32Derivation.decode(_));
            break;
          case a.InputTypes.TAP_INTERNAL_KEY:
            o("input", _.key, a.InputTypes.TAP_INTERNAL_KEY), E.tapInternalKey = e.inputs.tapInternalKey.decode(_);
            break;
          case a.InputTypes.TAP_MERKLE_ROOT:
            o("input", _.key, a.InputTypes.TAP_MERKLE_ROOT), E.tapMerkleRoot = e.inputs.tapMerkleRoot.decode(_);
            break;
          default:
            E.unknownKeyVals || (E.unknownKeyVals = []), E.unknownKeyVals.push(_);
        }
        l.push(E);
      }
      for (const y of c.range(h)) {
        const E = {};
        for (const _ of s[y]) switch (e.outputs.checkPubkey(_), _.key[0]) {
          case a.OutputTypes.REDEEM_SCRIPT:
            if (o("output", _.key, a.OutputTypes.REDEEM_SCRIPT), E.redeemScript !== void 0) throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
            E.redeemScript = e.outputs.redeemScript.decode(_);
            break;
          case a.OutputTypes.WITNESS_SCRIPT:
            if (o("output", _.key, a.OutputTypes.WITNESS_SCRIPT), E.witnessScript !== void 0) throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
            E.witnessScript = e.outputs.witnessScript.decode(_);
            break;
          case a.OutputTypes.BIP32_DERIVATION:
            E.bip32Derivation === void 0 && (E.bip32Derivation = []), E.bip32Derivation.push(e.outputs.bip32Derivation.decode(_));
            break;
          case a.OutputTypes.TAP_INTERNAL_KEY:
            o("output", _.key, a.OutputTypes.TAP_INTERNAL_KEY), E.tapInternalKey = e.outputs.tapInternalKey.decode(_);
            break;
          case a.OutputTypes.TAP_TREE:
            o("output", _.key, a.OutputTypes.TAP_TREE), E.tapTree = e.outputs.tapTree.decode(_);
            break;
          case a.OutputTypes.TAP_BIP32_DERIVATION:
            E.tapBip32Derivation === void 0 && (E.tapBip32Derivation = []), E.tapBip32Derivation.push(e.outputs.tapBip32Derivation.decode(_));
            break;
          default:
            E.unknownKeyVals || (E.unknownKeyVals = []), E.unknownKeyVals.push(_);
        }
        w.push(E);
      }
      return {
        globalMap: b,
        inputs: l,
        outputs: w
      };
    }
    return Nr.psbtFromKeyVals = n, Nr;
  }
  var st = {}, Po;
  function _u() {
    if (Po) return st;
    Po = 1, Object.defineProperty(st, "__esModule", {
      value: true
    });
    const e = Jn(), c = Yn();
    function d({ globalMap: n, inputs: r, outputs: u }) {
      const { globalKeyVals: p, inputKeyVals: s, outputKeyVals: b } = o({
        globalMap: n,
        inputs: r,
        outputs: u
      }), m = c.keyValsToBuffer(p), f = (y) => y.length === 0 ? [
        Buffer.from([
          0
        ])
      ] : y.map(c.keyValsToBuffer), h = f(s), l = f(b), w = Buffer.allocUnsafe(5);
      return w.writeUIntBE(482972169471, 0, 5), Buffer.concat([
        w,
        m
      ].concat(h, l));
    }
    st.psbtToBuffer = d;
    const a = (n, r) => n.key.compare(r.key);
    function v(n, r) {
      const u = /* @__PURE__ */ new Set(), p = Object.entries(n).reduce((b, [m, f]) => {
        if (m === "unknownKeyVals") return b;
        const h = r[m];
        if (h === void 0) return b;
        const l = (Array.isArray(f) ? f : [
          f
        ]).map(h.encode);
        return l.map((y) => y.key.toString("hex")).forEach((y) => {
          if (u.has(y)) throw new Error("Serialize Error: Duplicate key: " + y);
          u.add(y);
        }), b.concat(l);
      }, []), s = n.unknownKeyVals ? n.unknownKeyVals.filter((b) => !u.has(b.key.toString("hex"))) : [];
      return p.concat(s).sort(a);
    }
    function o({ globalMap: n, inputs: r, outputs: u }) {
      return {
        globalKeyVals: v(n, e.globals),
        inputKeyVals: r.map((p) => v(p, e.inputs)),
        outputKeyVals: u.map((p) => v(p, e.outputs))
      };
    }
    return st.psbtToKeyVals = o, st;
  }
  var Oo;
  function $a() {
    return Oo || (Oo = 1, function(e) {
      function c(d) {
        for (var a in d) e.hasOwnProperty(a) || (e[a] = d[a]);
      }
      Object.defineProperty(e, "__esModule", {
        value: true
      }), c(wu()), c(_u());
    }(en)), en;
  }
  var Ro;
  function Eu() {
    if (Ro) return _t;
    Ro = 1, Object.defineProperty(_t, "__esModule", {
      value: true
    });
    const e = $a();
    function c(o) {
      const n = o[0], r = e.psbtToKeyVals(n), u = o.slice(1);
      if (u.length === 0) throw new Error("Combine: Nothing to combine");
      const p = a(n);
      if (p === void 0) throw new Error("Combine: Self missing transaction");
      const s = v(r.globalKeyVals), b = r.inputKeyVals.map(v), m = r.outputKeyVals.map(v);
      for (const f of u) {
        const h = a(f);
        if (h === void 0 || !h.toBuffer().equals(p.toBuffer())) throw new Error("Combine: One of the Psbts does not have the same transaction.");
        const l = e.psbtToKeyVals(f);
        v(l.globalKeyVals).forEach(d(s, r.globalKeyVals, l.globalKeyVals)), l.inputKeyVals.map(v).forEach((_, S) => _.forEach(d(b[S], r.inputKeyVals[S], l.inputKeyVals[S]))), l.outputKeyVals.map(v).forEach((_, S) => _.forEach(d(m[S], r.outputKeyVals[S], l.outputKeyVals[S])));
      }
      return e.psbtFromKeyVals(p, {
        globalMapKeyVals: r.globalKeyVals,
        inputKeyVals: r.inputKeyVals,
        outputKeyVals: r.outputKeyVals
      });
    }
    _t.combine = c;
    function d(o, n, r) {
      return (u) => {
        if (o.has(u)) return;
        const p = r.filter((s) => s.key.toString("hex") === u)[0];
        n.push(p), o.add(u);
      };
    }
    function a(o) {
      return o.globalMap.unsignedTx;
    }
    function v(o) {
      const n = /* @__PURE__ */ new Set();
      return o.forEach((r) => {
        const u = r.key.toString("hex");
        if (n.has(u)) throw new Error("Combine: KeyValue Map keys should be unique");
        n.add(u);
      }), n;
    }
    return _t;
  }
  var tn = {}, Uo;
  function Xa() {
    return Uo || (Uo = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      const c = Jn();
      function d(f, h) {
        const l = f[h];
        if (l === void 0) throw new Error(`No input #${h}`);
        return l;
      }
      e.checkForInput = d;
      function a(f, h) {
        const l = f[h];
        if (l === void 0) throw new Error(`No output #${h}`);
        return l;
      }
      e.checkForOutput = a;
      function v(f, h, l) {
        if (f.key[0] < l) throw new Error("Use the method for your specific key instead of addUnknownKeyVal*");
        if (h && h.filter((w) => w.key.equals(f.key)).length !== 0) throw new Error(`Duplicate Key: ${f.key.toString("hex")}`);
      }
      e.checkHasKey = v;
      function o(f) {
        let h = 0;
        return Object.keys(f).forEach((l) => {
          Number(isNaN(Number(l))) && h++;
        }), h;
      }
      e.getEnumLength = o;
      function n(f, h) {
        let l = false;
        if (h.nonWitnessUtxo || h.witnessUtxo) {
          const w = !!h.redeemScript, y = !!h.witnessScript, E = !w || !!h.finalScriptSig, _ = !y || !!h.finalScriptWitness, S = !!h.finalScriptSig || !!h.finalScriptWitness;
          l = E && _ && S;
        }
        if (l === false) throw new Error(`Input #${f} has too much or too little data to clean`);
      }
      e.inputCheckUncleanFinalized = n;
      function r(f, h, l, w) {
        throw new Error(`Data for ${f} key ${h} is incorrect: Expected ${l} and got ${JSON.stringify(w)}`);
      }
      function u(f) {
        return (h, l) => {
          for (const w of Object.keys(h)) {
            const y = h[w], { canAdd: E, canAddToArray: _, check: S, expected: I } = c[f + "s"][w] || {}, A = !!_;
            if (S) if (A) {
              if (!Array.isArray(y) || l[w] && !Array.isArray(l[w])) throw new Error(`Key type ${w} must be an array`);
              y.every(S) || r(f, w, I, y);
              const L = l[w] || [], q = /* @__PURE__ */ new Set();
              if (!y.every((x) => _(L, x, q))) throw new Error("Can not add duplicate data to array");
              l[w] = L.concat(y);
            } else {
              if (S(y) || r(f, w, I, y), !E(l, y)) throw new Error(`Can not add duplicate data to ${f}`);
              l[w] = y;
            }
          }
        };
      }
      e.updateGlobal = u("global"), e.updateInput = u("input"), e.updateOutput = u("output");
      function p(f, h) {
        const l = f.length - 1, w = d(f, l);
        e.updateInput(h, w);
      }
      e.addInputAttributes = p;
      function s(f, h) {
        const l = f.length - 1, w = a(f, l);
        e.updateOutput(h, w);
      }
      e.addOutputAttributes = s;
      function b(f, h) {
        if (!Buffer.isBuffer(h) || h.length < 4) throw new Error("Set Version: Invalid Transaction");
        return h.writeUInt32LE(f, 0), h;
      }
      e.defaultVersionSetter = b;
      function m(f, h) {
        if (!Buffer.isBuffer(h) || h.length < 4) throw new Error("Set Locktime: Invalid Transaction");
        return h.writeUInt32LE(f, h.length - 4), h;
      }
      e.defaultLocktimeSetter = m;
    }(tn)), tn;
  }
  var zo;
  function ku() {
    if (zo) return wt;
    zo = 1, Object.defineProperty(wt, "__esModule", {
      value: true
    });
    const e = Eu(), c = $a(), d = Be(), a = Xa();
    class v {
      constructor(n) {
        this.inputs = [], this.outputs = [], this.globalMap = {
          unsignedTx: n
        };
      }
      static fromBase64(n, r) {
        const u = Buffer.from(n, "base64");
        return this.fromBuffer(u, r);
      }
      static fromHex(n, r) {
        const u = Buffer.from(n, "hex");
        return this.fromBuffer(u, r);
      }
      static fromBuffer(n, r) {
        const u = c.psbtFromBuffer(n, r), p = new this(u.globalMap.unsignedTx);
        return Object.assign(p, u), p;
      }
      toBase64() {
        return this.toBuffer().toString("base64");
      }
      toHex() {
        return this.toBuffer().toString("hex");
      }
      toBuffer() {
        return c.psbtToBuffer(this);
      }
      updateGlobal(n) {
        return a.updateGlobal(n, this.globalMap), this;
      }
      updateInput(n, r) {
        const u = a.checkForInput(this.inputs, n);
        return a.updateInput(r, u), this;
      }
      updateOutput(n, r) {
        const u = a.checkForOutput(this.outputs, n);
        return a.updateOutput(r, u), this;
      }
      addUnknownKeyValToGlobal(n) {
        return a.checkHasKey(n, this.globalMap.unknownKeyVals, a.getEnumLength(d.GlobalTypes)), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(n), this;
      }
      addUnknownKeyValToInput(n, r) {
        const u = a.checkForInput(this.inputs, n);
        return a.checkHasKey(r, u.unknownKeyVals, a.getEnumLength(d.InputTypes)), u.unknownKeyVals || (u.unknownKeyVals = []), u.unknownKeyVals.push(r), this;
      }
      addUnknownKeyValToOutput(n, r) {
        const u = a.checkForOutput(this.outputs, n);
        return a.checkHasKey(r, u.unknownKeyVals, a.getEnumLength(d.OutputTypes)), u.unknownKeyVals || (u.unknownKeyVals = []), u.unknownKeyVals.push(r), this;
      }
      addInput(n) {
        this.globalMap.unsignedTx.addInput(n), this.inputs.push({
          unknownKeyVals: []
        });
        const r = n.unknownKeyVals || [], u = this.inputs.length - 1;
        if (!Array.isArray(r)) throw new Error("unknownKeyVals must be an Array");
        return r.forEach((p) => this.addUnknownKeyValToInput(u, p)), a.addInputAttributes(this.inputs, n), this;
      }
      addOutput(n) {
        this.globalMap.unsignedTx.addOutput(n), this.outputs.push({
          unknownKeyVals: []
        });
        const r = n.unknownKeyVals || [], u = this.outputs.length - 1;
        if (!Array.isArray(r)) throw new Error("unknownKeyVals must be an Array");
        return r.forEach((p) => this.addUnknownKeyValToOutput(u, p)), a.addOutputAttributes(this.outputs, n), this;
      }
      clearFinalizedInput(n) {
        const r = a.checkForInput(this.inputs, n);
        a.inputCheckUncleanFinalized(n, r);
        for (const u of Object.keys(r)) [
          "witnessUtxo",
          "nonWitnessUtxo",
          "finalScriptSig",
          "finalScriptWitness",
          "unknownKeyVals"
        ].includes(u) || delete r[u];
        return this;
      }
      combine(...n) {
        const r = e.combine([
          this
        ].concat(n));
        return Object.assign(this, r), this;
      }
      getTransaction() {
        return this.globalMap.unsignedTx.toBuffer();
      }
    }
    return wt.Psbt = v, wt;
  }
  var _e = {}, we = {}, No;
  function Fn() {
    if (No) return we;
    No = 1, Object.defineProperty(we, "__esModule", {
      value: true
    }), we.signatureBlocksAction = we.checkInputForSig = we.pubkeyInScript = we.pubkeyPositionInScript = we.witnessStackToScriptWitness = we.isP2TR = we.isP2SHScript = we.isP2WSHScript = we.isP2WPKH = we.isP2PKH = we.isP2PK = we.isP2MS = void 0;
    const e = zr(), c = je(), d = mt(), a = nr(), v = pt();
    function o(f) {
      return (h) => {
        try {
          return f({
            output: h
          }), true;
        } catch {
          return false;
        }
      };
    }
    we.isP2MS = o(v.p2ms), we.isP2PK = o(v.p2pk), we.isP2PKH = o(v.p2pkh), we.isP2WPKH = o(v.p2wpkh), we.isP2WSHScript = o(v.p2wsh), we.isP2SHScript = o(v.p2sh), we.isP2TR = o(v.p2tr);
    function n(f) {
      let h = Buffer.allocUnsafe(0);
      function l(_) {
        h = Buffer.concat([
          h,
          Buffer.from(_)
        ]);
      }
      function w(_) {
        const S = h.length, I = e.encodingLength(_);
        h = Buffer.concat([
          h,
          Buffer.allocUnsafe(I)
        ]), e.encode(_, h, S);
      }
      function y(_) {
        w(_.length), l(_);
      }
      function E(_) {
        w(_.length), _.forEach(y);
      }
      return E(f), h;
    }
    we.witnessStackToScriptWitness = n;
    function r(f, h) {
      const l = (0, a.hash160)(f), w = f.slice(1, 33), y = c.decompile(h);
      if (y === null) throw new Error("Unknown script error");
      return y.findIndex((E) => typeof E == "number" ? false : E.equals(f) || E.equals(l) || E.equals(w));
    }
    we.pubkeyPositionInScript = r;
    function u(f, h) {
      return r(f, h) !== -1;
    }
    we.pubkeyInScript = u;
    function p(f, h) {
      return b(f).some((w) => s(w, c.signature.decode, h));
    }
    we.checkInputForSig = p;
    function s(f, h, l) {
      const { hashType: w } = h(f), y = [];
      switch (w & d.Transaction.SIGHASH_ANYONECANPAY && y.push("addInput"), w & 31) {
        case d.Transaction.SIGHASH_ALL:
          break;
        case d.Transaction.SIGHASH_SINGLE:
        case d.Transaction.SIGHASH_NONE:
          y.push("addOutput"), y.push("setInputSequence");
          break;
      }
      return y.indexOf(l) === -1;
    }
    we.signatureBlocksAction = s;
    function b(f) {
      let h = [];
      if ((f.partialSig || []).length === 0) {
        if (!f.finalScriptSig && !f.finalScriptWitness) return [];
        h = m(f);
      } else h = f.partialSig;
      return h.map((l) => l.signature);
    }
    function m(f) {
      const h = f.finalScriptSig ? c.decompile(f.finalScriptSig) || [] : [], l = f.finalScriptWitness ? c.decompile(f.finalScriptWitness) || [] : [];
      return h.concat(l).filter((w) => Buffer.isBuffer(w) && c.isCanonicalScriptSignature(w)).map((w) => ({
        signature: w
      }));
    }
    return we;
  }
  var Ho;
  function Su() {
    if (Ho) return _e;
    Ho = 1, Object.defineProperty(_e, "__esModule", {
      value: true
    }), _e.checkTaprootInputForSigs = _e.tapTreeFromList = _e.tapTreeToList = _e.tweakInternalPubKey = _e.checkTaprootOutputFields = _e.checkTaprootInputFields = _e.isTaprootOutput = _e.isTaprootInput = _e.serializeTaprootSignature = _e.tapScriptFinalizer = _e.toXOnly = void 0;
    const e = ze(), c = mt(), d = Fn(), a = $n(), v = pt(), o = Fn(), n = (D) => D.length === 32 ? D : D.slice(1, 33);
    _e.toXOnly = n;
    function r(D, O, K) {
      const V = Q(O, D, K);
      try {
        const ue = C(O, V).concat(V.script).concat(V.controlBlock);
        return {
          finalScriptWitness: (0, d.witnessStackToScriptWitness)(ue)
        };
      } catch (Z) {
        throw new Error(`Can not finalize taproot input #${D}: ${Z}`);
      }
    }
    _e.tapScriptFinalizer = r;
    function u(D, O) {
      const K = O ? Buffer.from([
        O
      ]) : Buffer.from([]);
      return Buffer.concat([
        D,
        K
      ]);
    }
    _e.serializeTaprootSignature = u;
    function p(D) {
      return D && !!(D.tapInternalKey || D.tapMerkleRoot || D.tapLeafScript && D.tapLeafScript.length || D.tapBip32Derivation && D.tapBip32Derivation.length || D.witnessUtxo && (0, d.isP2TR)(D.witnessUtxo.script));
    }
    _e.isTaprootInput = p;
    function s(D, O) {
      return D && !!(D.tapInternalKey || D.tapTree || D.tapBip32Derivation && D.tapBip32Derivation.length || O && (0, d.isP2TR)(O));
    }
    _e.isTaprootOutput = s;
    function b(D, O, K) {
      x(D, O, K), z(D, O, K);
    }
    _e.checkTaprootInputFields = b;
    function m(D, O, K) {
      R(D, O, K), f(D, O);
    }
    _e.checkTaprootOutputFields = m;
    function f(D, O) {
      if (!O.tapTree && !O.tapInternalKey) return;
      const K = O.tapInternalKey || D.tapInternalKey, V = O.tapTree || D.tapTree;
      if (K) {
        const { script: Z } = D, ue = h(K, V);
        if (Z && !Z.equals(ue)) throw new Error("Error adding output. Script or address missmatch.");
      }
    }
    function h(D, O) {
      const K = O && y(O.leaves), { output: V } = (0, v.p2tr)({
        internalPubkey: D,
        scriptTree: K
      });
      return V;
    }
    function l(D, O) {
      const K = O.tapInternalKey, V = K && (0, a.tweakKey)(K, O.tapMerkleRoot);
      if (!V) throw new Error(`Cannot tweak tap internal key for input #${D}. Public key: ${K && K.toString("hex")}`);
      return V.x;
    }
    _e.tweakInternalPubKey = l;
    function w(D) {
      if (!(0, e.isTaptree)(D)) throw new Error("Cannot convert taptree to tapleaf list. Expecting a tapree structure.");
      return A(D);
    }
    _e.tapTreeToList = w;
    function y(D = []) {
      return D.length === 1 && D[0].depth === 0 ? {
        output: D[0].script,
        version: D[0].leafVersion
      } : L(D);
    }
    _e.tapTreeFromList = y;
    function E(D, O) {
      return S(D).some((V) => (0, o.signatureBlocksAction)(V, _, O));
    }
    _e.checkTaprootInputForSigs = E;
    function _(D) {
      return {
        signature: D.slice(0, 64),
        hashType: D.slice(64)[0] || c.Transaction.SIGHASH_DEFAULT
      };
    }
    function S(D) {
      const O = [];
      if (D.tapKeySig && O.push(D.tapKeySig), D.tapScriptSig && O.push(...D.tapScriptSig.map((K) => K.signature)), !O.length) {
        const K = I(D.finalScriptWitness);
        K && O.push(K);
      }
      return O;
    }
    function I(D) {
      if (!D) return;
      const O = D.slice(2);
      if (O.length === 64 || O.length === 65) return O;
    }
    function A(D, O = [], K = 0) {
      if (K > a.MAX_TAPTREE_DEPTH) throw new Error("Max taptree depth exceeded.");
      return D ? (0, e.isTapleaf)(D) ? (O.push({
        depth: K,
        leafVersion: D.version || a.LEAF_VERSION_TAPSCRIPT,
        script: D.output
      }), O) : (D[0] && A(D[0], O, K + 1), D[1] && A(D[1], O, K + 1), O) : [];
    }
    function L(D) {
      let O;
      for (const K of D) if (O = q(K, O), !O) throw new Error("No room left to insert tapleaf in tree");
      return O;
    }
    function q(D, O, K = 0) {
      if (K > a.MAX_TAPTREE_DEPTH) throw new Error("Max taptree depth exceeded.");
      if (D.depth === K) return O ? void 0 : {
        output: D.script,
        version: D.leafVersion
      };
      if ((0, e.isTapleaf)(O)) return;
      const V = q(D, O && O[0], K + 1);
      if (V) return [
        V,
        O && O[1]
      ];
      const Z = q(D, O && O[1], K + 1);
      if (Z) return [
        O && O[0],
        Z
      ];
    }
    function x(D, O, K) {
      const V = p(D) && re(O), Z = re(D) && p(O), ue = D === O && p(O) && re(O);
      if (V || Z || ue) throw new Error(`Invalid arguments for Psbt.${K}. Cannot use both taproot and non-taproot fields.`);
    }
    function R(D, O, K) {
      const V = s(D) && re(O), Z = re(D) && s(O), ue = D === O && s(O) && re(O);
      if (V || Z || ue) throw new Error(`Invalid arguments for Psbt.${K}. Cannot use both taproot and non-taproot fields.`);
    }
    function z(D, O, K) {
      if (O.tapMerkleRoot) {
        const V = (O.tapLeafScript || []).every((ue) => F(ue, O.tapMerkleRoot)), Z = (D.tapLeafScript || []).every((ue) => F(ue, O.tapMerkleRoot));
        if (!V || !Z) throw new Error(`Invalid arguments for Psbt.${K}. Tapleaf not part of taptree.`);
      } else if (D.tapMerkleRoot && !(O.tapLeafScript || []).every((Z) => F(Z, D.tapMerkleRoot))) throw new Error(`Invalid arguments for Psbt.${K}. Tapleaf not part of taptree.`);
    }
    function F(D, O) {
      if (!O) return true;
      const K = (0, a.tapleafHash)({
        output: D.script,
        version: D.leafVersion
      });
      return (0, a.rootHashFromPath)(D.controlBlock, K).equals(O);
    }
    function C(D, O) {
      const K = (0, a.tapleafHash)({
        output: O.script,
        version: O.leafVersion
      });
      return (D.tapScriptSig || []).filter((V) => V.leafHash.equals(K)).map((V) => G(O.script, V)).sort((V, Z) => Z.positionInScript - V.positionInScript).map((V) => V.signature);
    }
    function G(D, O) {
      return Object.assign({
        positionInScript: (0, d.pubkeyPositionInScript)(O.pubkey, D)
      }, O);
    }
    function Q(D, O, K) {
      if (!D.tapScriptSig || !D.tapScriptSig.length) throw new Error(`Can not finalize taproot input #${O}. No tapleaf script signature provided.`);
      const V = (D.tapLeafScript || []).sort((Z, ue) => Z.controlBlock.length - ue.controlBlock.length).find((Z) => ee(Z, D.tapScriptSig, K));
      if (!V) throw new Error(`Can not finalize taproot input #${O}. Signature for tapleaf script not found.`);
      return V;
    }
    function ee(D, O, K) {
      const V = (0, a.tapleafHash)({
        output: D.script,
        version: D.leafVersion
      });
      return (!K || K.equals(V)) && O.find((ue) => ue.leafHash.equals(V)) !== void 0;
    }
    function re(D) {
      return D && !!(D.redeemScript || D.witnessScript || D.bip32Derivation && D.bip32Derivation.length);
    }
    return _e;
  }
  var Co;
  function Tu() {
    if (Co) return at;
    Co = 1, Object.defineProperty(at, "__esModule", {
      value: true
    }), at.Psbt = void 0;
    const e = ku(), c = zr(), d = Xa(), a = Xn(), v = zt(), o = Xe(), n = pt(), r = $n(), u = je(), p = mt(), s = Su(), b = Fn(), m = {
      network: o.bitcoin,
      maximumFeeRate: 5e3
    };
    class f {
      static fromBase64(t, g = {}) {
        const k = Buffer.from(t, "base64");
        return this.fromBuffer(k, g);
      }
      static fromHex(t, g = {}) {
        const k = Buffer.from(t, "hex");
        return this.fromBuffer(k, g);
      }
      static fromBuffer(t, g = {}) {
        const k = e.Psbt.fromBuffer(t, h), B = new f(g, k);
        return z(B.__CACHE.__TX, B.__CACHE), B;
      }
      constructor(t = {}, g = new e.Psbt(new l())) {
        this.data = g, this.opts = Object.assign({}, m, t), this.__CACHE = {
          __NON_WITNESS_UTXO_TX_CACHE: [],
          __NON_WITNESS_UTXO_BUF_CACHE: [],
          __TX_IN_CACHE: {},
          __TX: this.data.globalMap.unsignedTx.tx,
          __UNSAFE_SIGN_NONSEGWIT: false
        }, this.data.inputs.length === 0 && this.setVersion(2);
        const k = (B, H, X, oe) => Object.defineProperty(B, H, {
          enumerable: X,
          writable: oe
        });
        k(this, "__CACHE", false, true), k(this, "opts", false, true);
      }
      get inputCount() {
        return this.data.inputs.length;
      }
      get version() {
        return this.__CACHE.__TX.version;
      }
      set version(t) {
        this.setVersion(t);
      }
      get locktime() {
        return this.__CACHE.__TX.locktime;
      }
      set locktime(t) {
        this.setLocktime(t);
      }
      get txInputs() {
        return this.__CACHE.__TX.ins.map((t) => ({
          hash: (0, v.cloneBuffer)(t.hash),
          index: t.index,
          sequence: t.sequence
        }));
      }
      get txOutputs() {
        return this.__CACHE.__TX.outs.map((t) => {
          let g;
          try {
            g = (0, a.fromOutputScript)(t.script, this.opts.network);
          } catch {
          }
          return {
            script: (0, v.cloneBuffer)(t.script),
            value: t.value,
            address: g
          };
        });
      }
      combine(...t) {
        return this.data.combine(...t.map((g) => g.data)), this;
      }
      clone() {
        const t = f.fromBuffer(this.data.toBuffer());
        return t.opts = JSON.parse(JSON.stringify(this.opts)), t;
      }
      setMaximumFeeRate(t) {
        I(t), this.opts.maximumFeeRate = t;
      }
      setVersion(t) {
        I(t), L(this.data.inputs, "setVersion");
        const g = this.__CACHE;
        return g.__TX.version = t, g.__EXTRACTED_TX = void 0, this;
      }
      setLocktime(t) {
        I(t), L(this.data.inputs, "setLocktime");
        const g = this.__CACHE;
        return g.__TX.locktime = t, g.__EXTRACTED_TX = void 0, this;
      }
      setInputSequence(t, g) {
        I(g), L(this.data.inputs, "setInputSequence");
        const k = this.__CACHE;
        if (k.__TX.ins.length <= t) throw new Error("Input index too high");
        return k.__TX.ins[t].sequence = g, k.__EXTRACTED_TX = void 0, this;
      }
      addInputs(t) {
        return t.forEach((g) => this.addInput(g)), this;
      }
      addInput(t) {
        if (arguments.length > 1 || !t || t.hash === void 0 || t.index === void 0) throw new Error("Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]");
        (0, s.checkTaprootInputFields)(t, t, "addInput"), L(this.data.inputs, "addInput"), t.witnessScript && Ie(t.witnessScript);
        const g = this.__CACHE;
        this.data.addInput(t);
        const k = g.__TX.ins[g.__TX.ins.length - 1];
        F(g, k);
        const B = this.data.inputs.length - 1, H = this.data.inputs[B];
        return H.nonWitnessUtxo && U(this.__CACHE, H, B), g.__FEE = void 0, g.__FEE_RATE = void 0, g.__EXTRACTED_TX = void 0, this;
      }
      addOutputs(t) {
        return t.forEach((g) => this.addOutput(g)), this;
      }
      addOutput(t) {
        if (arguments.length > 1 || !t || t.value === void 0 || t.address === void 0 && t.script === void 0) throw new Error("Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]");
        L(this.data.inputs, "addOutput");
        const { address: g } = t;
        if (typeof g == "string") {
          const { network: B } = this.opts, H = (0, a.toOutputScript)(g, B);
          t = Object.assign({}, t, {
            script: H
          });
        }
        (0, s.checkTaprootOutputFields)(t, t, "addOutput");
        const k = this.__CACHE;
        return this.data.addOutput(t), k.__FEE = void 0, k.__FEE_RATE = void 0, k.__EXTRACTED_TX = void 0, this;
      }
      extractTransaction(t) {
        if (!this.data.inputs.every(_)) throw new Error("Not finalized");
        const g = this.__CACHE;
        if (t || A(this, g, this.opts), g.__EXTRACTED_TX) return g.__EXTRACTED_TX;
        const k = g.__TX.clone();
        return J(this.data.inputs, k, g, true), k;
      }
      getFeeRate() {
        return ee("__FEE_RATE", "fee rate", this.data.inputs, this.__CACHE);
      }
      getFee() {
        return ee("__FEE", "fee", this.data.inputs, this.__CACHE);
      }
      finalizeAllInputs() {
        return (0, d.checkForInput)(this.data.inputs, 0), T(this.data.inputs.length).forEach((t) => this.finalizeInput(t)), this;
      }
      finalizeInput(t, g) {
        const k = (0, d.checkForInput)(this.data.inputs, t);
        return (0, s.isTaprootInput)(k) ? this._finalizeTaprootInput(t, k, void 0, g) : this._finalizeInput(t, k, g);
      }
      finalizeTaprootInput(t, g, k = s.tapScriptFinalizer) {
        const B = (0, d.checkForInput)(this.data.inputs, t);
        if ((0, s.isTaprootInput)(B)) return this._finalizeTaprootInput(t, B, g, k);
        throw new Error(`Cannot finalize input #${t}. Not Taproot.`);
      }
      _finalizeInput(t, g, k = re) {
        const { script: B, isP2SH: H, isP2WSH: X, isSegwit: oe } = j(t, g, this.__CACHE);
        if (!B) throw new Error(`No script found for input #${t}`);
        q(g);
        const { finalScriptSig: ne, finalScriptWitness: se } = k(t, g, B, oe, H, X);
        if (ne && this.data.updateInput(t, {
          finalScriptSig: ne
        }), se && this.data.updateInput(t, {
          finalScriptWitness: se
        }), !ne && !se) throw new Error(`Unknown error finalizing input #${t}`);
        return this.data.clearFinalizedInput(t), this;
      }
      _finalizeTaprootInput(t, g, k, B = s.tapScriptFinalizer) {
        if (!g.witnessUtxo) throw new Error(`Cannot finalize input #${t}. Missing withness utxo.`);
        if (g.tapKeySig) {
          const H = n.p2tr({
            output: g.witnessUtxo.script,
            signature: g.tapKeySig
          }), X = (0, b.witnessStackToScriptWitness)(H.witness);
          this.data.updateInput(t, {
            finalScriptWitness: X
          });
        } else {
          const { finalScriptWitness: H } = B(t, g, k);
          this.data.updateInput(t, {
            finalScriptWitness: H
          });
        }
        return this.data.clearFinalizedInput(t), this;
      }
      getInputType(t) {
        const g = (0, d.checkForInput)(this.data.inputs, t), k = le(t, g, this.__CACHE), B = Me(k, t, "input", g.redeemScript || xe(g.finalScriptSig), g.witnessScript || Oe(g.finalScriptWitness)), H = B.type === "raw" ? "" : B.type + "-", X = Ye(B.meaningfulScript);
        return H + X;
      }
      inputHasPubkey(t, g) {
        const k = (0, d.checkForInput)(this.data.inputs, t);
        return fe(g, k, t, this.__CACHE);
      }
      inputHasHDKey(t, g) {
        const k = (0, d.checkForInput)(this.data.inputs, t), B = S(g);
        return !!k.bip32Derivation && k.bip32Derivation.some(B);
      }
      outputHasPubkey(t, g) {
        const k = (0, d.checkForOutput)(this.data.outputs, t);
        return ge(g, k, t, this.__CACHE);
      }
      outputHasHDKey(t, g) {
        const k = (0, d.checkForOutput)(this.data.outputs, t), B = S(g);
        return !!k.bip32Derivation && k.bip32Derivation.some(B);
      }
      validateSignaturesOfAllInputs(t) {
        return (0, d.checkForInput)(this.data.inputs, 0), T(this.data.inputs.length).map((k) => this.validateSignaturesOfInput(k, t)).reduce((k, B) => B === true && k, true);
      }
      validateSignaturesOfInput(t, g, k) {
        const B = this.data.inputs[t];
        return (0, s.isTaprootInput)(B) ? this.validateSignaturesOfTaprootInput(t, g, k) : this._validateSignaturesOfInput(t, g, k);
      }
      _validateSignaturesOfInput(t, g, k) {
        const B = this.data.inputs[t], H = (B || {}).partialSig;
        if (!B || !H || H.length < 1) throw new Error("No signatures to validate");
        if (typeof g != "function") throw new Error("Need validator function to validate signatures");
        const X = k ? H.filter((ye) => ye.pubkey.equals(k)) : H;
        if (X.length < 1) throw new Error("No signatures for this pubkey");
        const oe = [];
        let ne, se, ce;
        for (const ye of X) {
          const Re = u.signature.decode(ye.signature), { hash: _r, script: Ee } = ce !== Re.hashType ? K(t, Object.assign({}, B, {
            sighashType: Re.hashType
          }), this.__CACHE, true) : {
            hash: ne,
            script: se
          };
          ce = Re.hashType, ne = _r, se = Ee, x(ye.pubkey, Ee, "verify"), oe.push(g(ye.pubkey, _r, Re.signature));
        }
        return oe.every((ye) => ye === true);
      }
      validateSignaturesOfTaprootInput(t, g, k) {
        const B = this.data.inputs[t], H = (B || {}).tapKeySig, X = (B || {}).tapScriptSig;
        if (!B && !H && !(X && !X.length)) throw new Error("No signatures to validate");
        if (typeof g != "function") throw new Error("Need validator function to validate signatures");
        k = k && (0, s.toXOnly)(k);
        const oe = k ? M(t, B, this.data.inputs, k, this.__CACHE) : V(t, B, this.data.inputs, this.__CACHE);
        if (!oe.length) throw new Error("No signatures for this pubkey");
        const ne = oe.find((ce) => !ce.leafHash);
        let se = 0;
        if (H && ne) {
          if (!g(ne.pubkey, ne.hash, ue(H))) return false;
          se++;
        }
        if (X) for (const ce of X) {
          const ye = oe.find((Re) => ce.pubkey.equals(Re.pubkey));
          if (ye) {
            if (!g(ce.pubkey, ye.hash, ue(ce.signature))) return false;
            se++;
          }
        }
        return se > 0;
      }
      signAllInputsHD(t, g = [
        p.Transaction.SIGHASH_ALL
      ]) {
        if (!t || !t.publicKey || !t.fingerprint) throw new Error("Need HDSigner to sign input");
        const k = [];
        for (const B of T(this.data.inputs.length)) try {
          this.signInputHD(B, t, g), k.push(true);
        } catch {
          k.push(false);
        }
        if (k.every((B) => B === false)) throw new Error("No inputs were signed");
        return this;
      }
      signAllInputsHDAsync(t, g = [
        p.Transaction.SIGHASH_ALL
      ]) {
        return new Promise((k, B) => {
          if (!t || !t.publicKey || !t.fingerprint) return B(new Error("Need HDSigner to sign input"));
          const H = [], X = [];
          for (const oe of T(this.data.inputs.length)) X.push(this.signInputHDAsync(oe, t, g).then(() => {
            H.push(true);
          }, () => {
            H.push(false);
          }));
          return Promise.all(X).then(() => {
            if (H.every((oe) => oe === false)) return B(new Error("No inputs were signed"));
            k();
          });
        });
      }
      signInputHD(t, g, k = [
        p.Transaction.SIGHASH_ALL
      ]) {
        if (!g || !g.publicKey || !g.fingerprint) throw new Error("Need HDSigner to sign input");
        return W(t, this.data.inputs, g).forEach((H) => this.signInput(t, H, k)), this;
      }
      signInputHDAsync(t, g, k = [
        p.Transaction.SIGHASH_ALL
      ]) {
        return new Promise((B, H) => {
          if (!g || !g.publicKey || !g.fingerprint) return H(new Error("Need HDSigner to sign input"));
          const oe = W(t, this.data.inputs, g).map((ne) => this.signInputAsync(t, ne, k));
          return Promise.all(oe).then(() => {
            B();
          }).catch(H);
        });
      }
      signAllInputs(t, g) {
        if (!t || !t.publicKey) throw new Error("Need Signer to sign input");
        const k = [];
        for (const B of T(this.data.inputs.length)) try {
          this.signInput(B, t, g), k.push(true);
        } catch {
          k.push(false);
        }
        if (k.every((B) => B === false)) throw new Error("No inputs were signed");
        return this;
      }
      signAllInputsAsync(t, g) {
        return new Promise((k, B) => {
          if (!t || !t.publicKey) return B(new Error("Need Signer to sign input"));
          const H = [], X = [];
          for (const [oe] of this.data.inputs.entries()) X.push(this.signInputAsync(oe, t, g).then(() => {
            H.push(true);
          }, () => {
            H.push(false);
          }));
          return Promise.all(X).then(() => {
            if (H.every((oe) => oe === false)) return B(new Error("No inputs were signed"));
            k();
          });
        });
      }
      signInput(t, g, k) {
        if (!g || !g.publicKey) throw new Error("Need Signer to sign input");
        const B = (0, d.checkForInput)(this.data.inputs, t);
        return (0, s.isTaprootInput)(B) ? this._signTaprootInput(t, B, g, void 0, k) : this._signInput(t, g, k);
      }
      signTaprootInput(t, g, k, B) {
        if (!g || !g.publicKey) throw new Error("Need Signer to sign input");
        const H = (0, d.checkForInput)(this.data.inputs, t);
        if ((0, s.isTaprootInput)(H)) return this._signTaprootInput(t, H, g, k, B);
        throw new Error(`Input #${t} is not of type Taproot.`);
      }
      _signInput(t, g, k = [
        p.Transaction.SIGHASH_ALL
      ]) {
        const { hash: B, sighashType: H } = O(this.data.inputs, t, g.publicKey, this.__CACHE, k), X = [
          {
            pubkey: g.publicKey,
            signature: u.signature.encode(g.sign(B), H)
          }
        ];
        return this.data.updateInput(t, {
          partialSig: X
        }), this;
      }
      _signTaprootInput(t, g, k, B, H = [
        p.Transaction.SIGHASH_DEFAULT
      ]) {
        const X = this.checkTaprootHashesForSig(t, g, k, B, H), oe = X.filter((se) => !se.leafHash).map((se) => (0, s.serializeTaprootSignature)(k.signSchnorr(se.hash), g.sighashType))[0], ne = X.filter((se) => !!se.leafHash).map((se) => ({
          pubkey: (0, s.toXOnly)(k.publicKey),
          signature: (0, s.serializeTaprootSignature)(k.signSchnorr(se.hash), g.sighashType),
          leafHash: se.leafHash
        }));
        return oe && this.data.updateInput(t, {
          tapKeySig: oe
        }), ne.length && this.data.updateInput(t, {
          tapScriptSig: ne
        }), this;
      }
      signInputAsync(t, g, k) {
        return Promise.resolve().then(() => {
          if (!g || !g.publicKey) throw new Error("Need Signer to sign input");
          const B = (0, d.checkForInput)(this.data.inputs, t);
          return (0, s.isTaprootInput)(B) ? this._signTaprootInputAsync(t, B, g, void 0, k) : this._signInputAsync(t, g, k);
        });
      }
      signTaprootInputAsync(t, g, k, B) {
        return Promise.resolve().then(() => {
          if (!g || !g.publicKey) throw new Error("Need Signer to sign input");
          const H = (0, d.checkForInput)(this.data.inputs, t);
          if ((0, s.isTaprootInput)(H)) return this._signTaprootInputAsync(t, H, g, k, B);
          throw new Error(`Input #${t} is not of type Taproot.`);
        });
      }
      _signInputAsync(t, g, k = [
        p.Transaction.SIGHASH_ALL
      ]) {
        const { hash: B, sighashType: H } = O(this.data.inputs, t, g.publicKey, this.__CACHE, k);
        return Promise.resolve(g.sign(B)).then((X) => {
          const oe = [
            {
              pubkey: g.publicKey,
              signature: u.signature.encode(X, H)
            }
          ];
          this.data.updateInput(t, {
            partialSig: oe
          });
        });
      }
      async _signTaprootInputAsync(t, g, k, B, H = [
        p.Transaction.SIGHASH_DEFAULT
      ]) {
        const X = this.checkTaprootHashesForSig(t, g, k, B, H), oe = [], ne = X.filter((ce) => !ce.leafHash)[0];
        if (ne) {
          const ce = Promise.resolve(k.signSchnorr(ne.hash)).then((ye) => ({
            tapKeySig: (0, s.serializeTaprootSignature)(ye, g.sighashType)
          }));
          oe.push(ce);
        }
        const se = X.filter((ce) => !!ce.leafHash);
        if (se.length) {
          const ce = se.map((ye) => Promise.resolve(k.signSchnorr(ye.hash)).then((Re) => ({
            tapScriptSig: [
              {
                pubkey: (0, s.toXOnly)(k.publicKey),
                signature: (0, s.serializeTaprootSignature)(Re, g.sighashType),
                leafHash: ye.leafHash
              }
            ]
          })));
          oe.push(...ce);
        }
        return Promise.all(oe).then((ce) => {
          ce.forEach((ye) => this.data.updateInput(t, ye));
        });
      }
      checkTaprootHashesForSig(t, g, k, B, H) {
        if (typeof k.signSchnorr != "function") throw new Error(`Need Schnorr Signer to sign taproot input #${t}.`);
        const X = M(t, g, this.data.inputs, k.publicKey, this.__CACHE, B, H);
        if (!X || !X.length) throw new Error(`Can not sign for input #${t} with the key ${k.publicKey.toString("hex")}`);
        return X;
      }
      toBuffer() {
        return y(this.__CACHE), this.data.toBuffer();
      }
      toHex() {
        return y(this.__CACHE), this.data.toHex();
      }
      toBase64() {
        return y(this.__CACHE), this.data.toBase64();
      }
      updateGlobal(t) {
        return this.data.updateGlobal(t), this;
      }
      updateInput(t, g) {
        return g.witnessScript && Ie(g.witnessScript), (0, s.checkTaprootInputFields)(this.data.inputs[t], g, "updateInput"), this.data.updateInput(t, g), g.nonWitnessUtxo && U(this.__CACHE, this.data.inputs[t], t), this;
      }
      updateOutput(t, g) {
        const k = this.data.outputs[t];
        return (0, s.checkTaprootOutputFields)(k, g, "updateOutput"), this.data.updateOutput(t, g), this;
      }
      addUnknownKeyValToGlobal(t) {
        return this.data.addUnknownKeyValToGlobal(t), this;
      }
      addUnknownKeyValToInput(t, g) {
        return this.data.addUnknownKeyValToInput(t, g), this;
      }
      addUnknownKeyValToOutput(t, g) {
        return this.data.addUnknownKeyValToOutput(t, g), this;
      }
      clearFinalizedInput(t) {
        return this.data.clearFinalizedInput(t), this;
      }
    }
    at.Psbt = f;
    const h = (i) => new l(i);
    class l {
      constructor(t = Buffer.from([
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ])) {
        this.tx = p.Transaction.fromBuffer(t), R(this.tx), Object.defineProperty(this, "tx", {
          enumerable: false,
          writable: true
        });
      }
      getInputOutputCounts() {
        return {
          inputCount: this.tx.ins.length,
          outputCount: this.tx.outs.length
        };
      }
      addInput(t) {
        if (t.hash === void 0 || t.index === void 0 || !Buffer.isBuffer(t.hash) && typeof t.hash != "string" || typeof t.index != "number") throw new Error("Error adding input.");
        const g = typeof t.hash == "string" ? (0, v.reverseBuffer)(Buffer.from(t.hash, "hex")) : t.hash;
        this.tx.addInput(g, t.index, t.sequence);
      }
      addOutput(t) {
        if (t.script === void 0 || t.value === void 0 || !Buffer.isBuffer(t.script) || typeof t.value != "number") throw new Error("Error adding output.");
        this.tx.addOutput(t.script, t.value);
      }
      toBuffer() {
        return this.tx.toBuffer();
      }
    }
    function w(i, t, g) {
      switch (g) {
        case "pubkey":
        case "pubkeyhash":
        case "witnesspubkeyhash":
          return E(1, i.partialSig);
        case "multisig":
          const k = n.p2ms({
            output: t
          });
          return E(k.m, i.partialSig, k.pubkeys);
        default:
          return false;
      }
    }
    function y(i) {
      if (i.__UNSAFE_SIGN_NONSEGWIT !== false) throw new Error("Not BIP174 compliant, can not export");
    }
    function E(i, t, g) {
      if (!t) return false;
      let k;
      if (g ? k = g.map((B) => {
        const H = me(B);
        return t.find((X) => X.pubkey.equals(H));
      }).filter((B) => !!B) : k = t, k.length > i) throw new Error("Too many signatures");
      return k.length === i;
    }
    function _(i) {
      return !!i.finalScriptSig || !!i.finalScriptWitness;
    }
    function S(i) {
      return (t) => !(!t.masterFingerprint.equals(i.fingerprint) || !i.derivePath(t.path).publicKey.equals(t.pubkey));
    }
    function I(i) {
      if (typeof i != "number" || i !== Math.floor(i) || i > 4294967295 || i < 0) throw new Error("Invalid 32 bit integer");
    }
    function A(i, t, g) {
      const k = t.__FEE_RATE || i.getFeeRate(), B = t.__EXTRACTED_TX.virtualSize(), H = k * B;
      if (k >= g.maximumFeeRate) throw new Error(`Warning: You are paying around ${(H / 1e8).toFixed(8)} in fees, which is ${k} satoshi per byte for a transaction with a VSize of ${B} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`);
    }
    function L(i, t) {
      i.forEach((g) => {
        if ((0, s.isTaprootInput)(g) ? (0, s.checkTaprootInputForSigs)(g, t) : (0, b.checkInputForSig)(g, t)) throw new Error("Can not modify transaction, signatures exist.");
      });
    }
    function q(i) {
      if (!i.sighashType || !i.partialSig) return;
      const { partialSig: t, sighashType: g } = i;
      t.forEach((k) => {
        const { hashType: B } = u.signature.decode(k.signature);
        if (g !== B) throw new Error("Signature sighash does not match input sighash type");
      });
    }
    function x(i, t, g) {
      if (!(0, b.pubkeyInScript)(i, t)) throw new Error(`Can not ${g} for this input with the key ${i.toString("hex")}`);
    }
    function R(i) {
      if (!i.ins.every((g) => g.script && g.script.length === 0 && g.witness && g.witness.length === 0)) throw new Error("Format Error: Transaction ScriptSigs are not empty");
    }
    function z(i, t) {
      i.ins.forEach((g) => {
        F(t, g);
      });
    }
    function F(i, t) {
      const g = (0, v.reverseBuffer)(Buffer.from(t.hash)).toString("hex") + ":" + t.index;
      if (i.__TX_IN_CACHE[g]) throw new Error("Duplicate input detected.");
      i.__TX_IN_CACHE[g] = 1;
    }
    function C(i, t) {
      return (g, k, B, H) => {
        const X = i({
          redeem: {
            output: B
          }
        }).output;
        if (!k.equals(X)) throw new Error(`${t} for ${H} #${g} doesn't match the scriptPubKey in the prevout`);
      };
    }
    const G = C(n.p2sh, "Redeem script"), Q = C(n.p2wsh, "Witness script");
    function ee(i, t, g, k) {
      if (!g.every(_)) throw new Error(`PSBT must be finalized to calculate ${t}`);
      if (i === "__FEE_RATE" && k.__FEE_RATE) return k.__FEE_RATE;
      if (i === "__FEE" && k.__FEE) return k.__FEE;
      let B, H = true;
      if (k.__EXTRACTED_TX ? (B = k.__EXTRACTED_TX, H = false) : B = k.__TX.clone(), J(g, B, k, H), i === "__FEE_RATE") return k.__FEE_RATE;
      if (i === "__FEE") return k.__FEE;
    }
    function re(i, t, g, k, B, H) {
      const X = Ye(g);
      if (!w(t, g, X)) throw new Error(`Can not finalize input #${i}`);
      return D(g, X, t.partialSig, k, B, H);
    }
    function D(i, t, g, k, B, H) {
      let X, oe;
      const ne = N(i, t, g), se = H ? n.p2wsh({
        redeem: ne
      }) : null, ce = B ? n.p2sh({
        redeem: se || ne
      }) : null;
      return k ? (se ? oe = (0, b.witnessStackToScriptWitness)(se.witness) : oe = (0, b.witnessStackToScriptWitness)(ne.witness), ce && (X = ce.input)) : ce ? X = ce.input : X = ne.input, {
        finalScriptSig: X,
        finalScriptWitness: oe
      };
    }
    function O(i, t, g, k, B) {
      const H = (0, d.checkForInput)(i, t), { hash: X, sighashType: oe, script: ne } = K(t, H, k, false, B);
      return x(g, ne, "sign"), {
        hash: X,
        sighashType: oe
      };
    }
    function K(i, t, g, k, B) {
      const H = g.__TX, X = t.sighashType || p.Transaction.SIGHASH_ALL;
      Y(X, B);
      let oe, ne;
      if (t.nonWitnessUtxo) {
        const ye = te(g, t, i), Re = H.ins[i].hash, _r = ye.getHash();
        if (!Re.equals(_r)) throw new Error(`Non-witness UTXO hash for input #${i} doesn't match the hash specified in the prevout`);
        const Ee = H.ins[i].index;
        ne = ye.outs[Ee];
      } else if (t.witnessUtxo) ne = t.witnessUtxo;
      else throw new Error("Need a Utxo input item for signing");
      const { meaningfulScript: se, type: ce } = Me(ne.script, i, "input", t.redeemScript, t.witnessScript);
      if ([
        "p2sh-p2wsh",
        "p2wsh"
      ].indexOf(ce) >= 0) oe = H.hashForWitnessV0(i, se, ne.value, X);
      else if ((0, b.isP2WPKH)(se)) {
        const ye = n.p2pkh({
          hash: se.slice(2)
        }).output;
        oe = H.hashForWitnessV0(i, ye, ne.value, X);
      } else {
        if (t.nonWitnessUtxo === void 0 && g.__UNSAFE_SIGN_NONSEGWIT === false) throw new Error(`Input #${i} has witnessUtxo but non-segwit script: ${se.toString("hex")}`);
        !k && g.__UNSAFE_SIGN_NONSEGWIT !== false && console.warn(`Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecessor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.
*********************
PROCEED WITH CAUTION!
*********************`), oe = H.hashForSignature(i, se, X);
      }
      return {
        script: se,
        sighashType: X,
        hash: oe
      };
    }
    function V(i, t, g, k) {
      const B = [];
      if (t.tapInternalKey) {
        const X = Z(i, t, k);
        X && B.push(X);
      }
      if (t.tapScriptSig) {
        const X = t.tapScriptSig.map((oe) => oe.pubkey);
        B.push(...X);
      }
      return B.map((X) => M(i, t, g, X, k)).flat();
    }
    function Z(i, t, g) {
      const { script: k } = ae(i, t, g);
      return (0, b.isP2TR)(k) ? k.subarray(2, 34) : null;
    }
    function ue(i) {
      return i.length === 64 ? i : i.subarray(0, 64);
    }
    function M(i, t, g, k, B, H, X) {
      const oe = B.__TX, ne = t.sighashType || p.Transaction.SIGHASH_DEFAULT;
      Y(ne, X);
      const se = g.map((Ee, Er) => ae(Er, Ee, B)), ce = se.map((Ee) => Ee.script), ye = se.map((Ee) => Ee.value), Re = [];
      if (t.tapInternalKey && !H) {
        const Ee = Z(i, t, B) || Buffer.from([]);
        if ((0, s.toXOnly)(k).equals(Ee)) {
          const Er = oe.hashForWitnessV1(i, ce, ye, ne);
          Re.push({
            pubkey: k,
            hash: Er
          });
        }
      }
      const _r = (t.tapLeafScript || []).filter((Ee) => (0, b.pubkeyInScript)(k, Ee.script)).map((Ee) => {
        const Er = (0, r.tapleafHash)({
          output: Ee.script,
          version: Ee.leafVersion
        });
        return Object.assign({
          hash: Er
        }, Ee);
      }).filter((Ee) => !H || H.equals(Ee.hash)).map((Ee) => {
        const Er = oe.hashForWitnessV1(i, ce, ye, ne, Ee.hash);
        return {
          pubkey: k,
          hash: Er,
          leafHash: Ee.hash
        };
      });
      return Re.concat(_r);
    }
    function Y(i, t) {
      if (t && t.indexOf(i) < 0) {
        const g = P(i);
        throw new Error(`Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${g}`);
      }
    }
    function N(i, t, g) {
      let k;
      switch (t) {
        case "multisig":
          const B = $(i, g);
          k = n.p2ms({
            output: i,
            signatures: B
          });
          break;
        case "pubkey":
          k = n.p2pk({
            output: i,
            signature: g[0].signature
          });
          break;
        case "pubkeyhash":
          k = n.p2pkh({
            output: i,
            pubkey: g[0].pubkey,
            signature: g[0].signature
          });
          break;
        case "witnesspubkeyhash":
          k = n.p2wpkh({
            output: i,
            pubkey: g[0].pubkey,
            signature: g[0].signature
          });
          break;
      }
      return k;
    }
    function j(i, t, g) {
      const k = g.__TX, B = {
        script: null,
        isSegwit: false,
        isP2SH: false,
        isP2WSH: false
      };
      if (B.isP2SH = !!t.redeemScript, B.isP2WSH = !!t.witnessScript, t.witnessScript) B.script = t.witnessScript;
      else if (t.redeemScript) B.script = t.redeemScript;
      else if (t.nonWitnessUtxo) {
        const H = te(g, t, i), X = k.ins[i].index;
        B.script = H.outs[X].script;
      } else t.witnessUtxo && (B.script = t.witnessUtxo.script);
      return (t.witnessScript || (0, b.isP2WPKH)(B.script)) && (B.isSegwit = true), B;
    }
    function W(i, t, g) {
      const k = (0, d.checkForInput)(t, i);
      if (!k.bip32Derivation || k.bip32Derivation.length === 0) throw new Error("Need bip32Derivation to sign with HD");
      const B = k.bip32Derivation.map((X) => {
        if (X.masterFingerprint.equals(g.fingerprint)) return X;
      }).filter((X) => !!X);
      if (B.length === 0) throw new Error("Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint");
      return B.map((X) => {
        const oe = g.derivePath(X.path);
        if (!X.pubkey.equals(oe.publicKey)) throw new Error("pubkey did not match bip32Derivation");
        return oe;
      });
    }
    function $(i, t) {
      return n.p2ms({
        output: i
      }).pubkeys.map((k) => (t.filter((B) => B.pubkey.equals(k))[0] || {}).signature).filter((k) => !!k);
    }
    function ie(i) {
      let t = 0;
      function g(X) {
        return t += X, i.slice(t - X, t);
      }
      function k() {
        const X = c.decode(i, t);
        return t += c.decode.bytes, X;
      }
      function B() {
        return g(k());
      }
      function H() {
        const X = k(), oe = [];
        for (let ne = 0; ne < X; ne++) oe.push(B());
        return oe;
      }
      return H();
    }
    function P(i) {
      let t = i & p.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
      switch (i & 31) {
        case p.Transaction.SIGHASH_ALL:
          t += "SIGHASH_ALL";
          break;
        case p.Transaction.SIGHASH_SINGLE:
          t += "SIGHASH_SINGLE";
          break;
        case p.Transaction.SIGHASH_NONE:
          t += "SIGHASH_NONE";
          break;
      }
      return t;
    }
    function U(i, t, g) {
      i.__NON_WITNESS_UTXO_BUF_CACHE[g] = t.nonWitnessUtxo;
      const k = p.Transaction.fromBuffer(t.nonWitnessUtxo);
      i.__NON_WITNESS_UTXO_TX_CACHE[g] = k;
      const B = i, H = g;
      delete t.nonWitnessUtxo, Object.defineProperty(t, "nonWitnessUtxo", {
        enumerable: true,
        get() {
          const X = B.__NON_WITNESS_UTXO_BUF_CACHE[H], oe = B.__NON_WITNESS_UTXO_TX_CACHE[H];
          if (X !== void 0) return X;
          {
            const ne = oe.toBuffer();
            return B.__NON_WITNESS_UTXO_BUF_CACHE[H] = ne, ne;
          }
        },
        set(X) {
          B.__NON_WITNESS_UTXO_BUF_CACHE[H] = X;
        }
      });
    }
    function J(i, t, g, k) {
      let B = 0;
      i.forEach((ne, se) => {
        if (k && ne.finalScriptSig && (t.ins[se].script = ne.finalScriptSig), k && ne.finalScriptWitness && (t.ins[se].witness = ie(ne.finalScriptWitness)), ne.witnessUtxo) B += ne.witnessUtxo.value;
        else if (ne.nonWitnessUtxo) {
          const ce = te(g, ne, se), ye = t.ins[se].index, Re = ce.outs[ye];
          B += Re.value;
        }
      });
      const H = t.outs.reduce((ne, se) => ne + se.value, 0), X = B - H;
      if (X < 0) throw new Error("Outputs are spending more than Inputs");
      const oe = t.virtualSize();
      g.__FEE = X, g.__EXTRACTED_TX = t, g.__FEE_RATE = Math.floor(X / oe);
    }
    function te(i, t, g) {
      const k = i.__NON_WITNESS_UTXO_TX_CACHE;
      return k[g] || U(i, t, g), k[g];
    }
    function le(i, t, g) {
      const { script: k } = ae(i, t, g);
      return k;
    }
    function ae(i, t, g) {
      if (t.witnessUtxo !== void 0) return {
        script: t.witnessUtxo.script,
        value: t.witnessUtxo.value
      };
      if (t.nonWitnessUtxo !== void 0) {
        const B = te(g, t, i).outs[g.__TX.ins[i].index];
        return {
          script: B.script,
          value: B.value
        };
      } else throw new Error("Can't find pubkey in input without Utxo data");
    }
    function fe(i, t, g, k) {
      const B = le(g, t, k), { meaningfulScript: H } = Me(B, g, "input", t.redeemScript, t.witnessScript);
      return (0, b.pubkeyInScript)(i, H);
    }
    function ge(i, t, g, k) {
      const B = k.__TX.outs[g].script, { meaningfulScript: H } = Me(B, g, "output", t.redeemScript, t.witnessScript);
      return (0, b.pubkeyInScript)(i, H);
    }
    function xe(i) {
      if (!i) return;
      const t = u.decompile(i);
      if (!t) return;
      const g = t[t.length - 1];
      if (!(!Buffer.isBuffer(g) || be(g) || Ne(g) || !u.decompile(g))) return g;
    }
    function Oe(i) {
      if (!i) return;
      const t = ie(i), g = t[t.length - 1];
      if (!(be(g) || !u.decompile(g))) return g;
    }
    function me(i) {
      if (i.length === 65) {
        const t = i[64] & 1, g = i.slice(0, 33);
        return g[0] = 2 | t, g;
      }
      return i.slice();
    }
    function be(i) {
      return i.length === 33 && u.isCanonicalPubKey(i);
    }
    function Ne(i) {
      return u.isCanonicalScriptSignature(i);
    }
    function Me(i, t, g, k, B) {
      const H = (0, b.isP2SHScript)(i), X = H && k && (0, b.isP2WSHScript)(k), oe = (0, b.isP2WSHScript)(i);
      if (H && k === void 0) throw new Error("scriptPubkey is P2SH but redeemScript missing");
      if ((oe || X) && B === void 0) throw new Error("scriptPubkey or redeemScript is P2WSH but witnessScript missing");
      let ne;
      return X ? (ne = B, G(t, i, k, g), Q(t, k, B, g), Ie(ne)) : oe ? (ne = B, Q(t, i, B, g), Ie(ne)) : H ? (ne = k, G(t, i, k, g)) : ne = i, {
        meaningfulScript: ne,
        type: X ? "p2sh-p2wsh" : H ? "p2sh" : oe ? "p2wsh" : "raw"
      };
    }
    function Ie(i) {
      if ((0, b.isP2WPKH)(i) || (0, b.isP2SHScript)(i)) throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
    }
    function Ye(i) {
      return (0, b.isP2WPKH)(i) ? "witnesspubkeyhash" : (0, b.isP2PKH)(i) ? "pubkeyhash" : (0, b.isP2MS)(i) ? "multisig" : (0, b.isP2PK)(i) ? "pubkey" : "nonstandard";
    }
    function T(i) {
      return [
        ...Array(i).keys()
      ];
    }
    return at;
  }
  var Lo;
  kl = function() {
    return Lo || (Lo = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.initEccLib = e.Transaction = e.opcodes = e.Psbt = e.Block = e.script = e.payments = e.networks = e.crypto = e.address = void 0;
      const c = Xn();
      e.address = c;
      const d = nr();
      e.crypto = d;
      const a = Xe();
      e.networks = a;
      const v = pt();
      e.payments = v;
      const o = je();
      e.script = o;
      var n = eu();
      Object.defineProperty(e, "Block", {
        enumerable: true,
        get: function() {
          return n.Block;
        }
      });
      var r = Tu();
      Object.defineProperty(e, "Psbt", {
        enumerable: true,
        get: function() {
          return r.Psbt;
        }
      });
      var u = Kn();
      Object.defineProperty(e, "opcodes", {
        enumerable: true,
        get: function() {
          return u.OPS;
        }
      });
      var p = mt();
      Object.defineProperty(e, "Transaction", {
        enumerable: true,
        get: function() {
          return p.Transaction;
        }
      });
      var s = Gn();
      Object.defineProperty(e, "initEccLib", {
        enumerable: true,
        get: function() {
          return s.initEccLib;
        }
      });
    }(jt)), jt;
  };
  const Ya = "0123456789abcdefABCDEF";
  Ya.split("").map((e) => e.codePointAt(0));
  Array(256).fill(true).map((e, c) => {
    const d = String.fromCodePoint(c), a = Ya.indexOf(d);
    return a < 0 ? void 0 : a < 16 ? a : a - 6;
  });
  new TextEncoder();
  new TextDecoder("ascii");
  function xu(e, c) {
    const d = Math.min(e.length, c.length);
    for (let a = 0; a < d; ++a) if (e[a] !== c[a]) return e[a] < c[a] ? -1 : 1;
    return e.length === c.length ? 0 : e.length > c.length ? 1 : -1;
  }
  const Ja = 0, Qn = 1, Qa = 2, Za = 3, lt = 4, es = 5, rs = 6, ts = 7, Iu = {
    [Ja.toString()]: "Expected Private",
    [Qn.toString()]: "Expected Point",
    [Qa.toString()]: "Expected Tweak",
    [Za.toString()]: "Expected Hash",
    [lt.toString()]: "Expected Signature",
    [es.toString()]: "Expected Extra Data (32 bytes)",
    [rs.toString()]: "Expected Parity (1 | 0)",
    [ts.toString()]: "Bad Recovery Id"
  };
  function qe(e) {
    const c = Iu[e.toString()] || `Unknow error code: ${e}`;
    throw new TypeError(c);
  }
  const bt = 32, ft = 33, gt = 65, vr = 32, ns = 32, is = 32, os = 32, Nt = 64, as = new Uint8Array(32), Ot = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    254,
    186,
    174,
    220,
    230,
    175,
    72,
    160,
    59,
    191,
    210,
    94,
    140,
    208,
    54,
    65,
    65
  ]), Au = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    69,
    81,
    35,
    25,
    80,
    183,
    95,
    196,
    64,
    45,
    161,
    114,
    47,
    201,
    186,
    238
  ]);
  function Je(e) {
    return e instanceof Uint8Array;
  }
  function Rr(e, c) {
    for (let d = 0; d < 32; ++d) if (e[d] !== c[d]) return e[d] < c[d] ? -1 : 1;
    return 0;
  }
  function Mn(e) {
    return Rr(e, as) === 0;
  }
  function ss(e) {
    return Je(e) && e.length === bt && Rr(e, as) > 0 && Rr(e, Ot) < 0;
  }
  function Bu(e) {
    return Je(e) && (e.length === ft || e.length === gt || e.length === vr);
  }
  function us(e) {
    return Je(e) && e.length === vr;
  }
  function Pu(e) {
    return Je(e) && (e.length === ft || e.length === gt);
  }
  function Ou(e) {
    return Je(e) && e.length === ft;
  }
  function Ru(e) {
    return Je(e) && e.length === ns && Rr(e, Ot) < 0;
  }
  function Uu(e) {
    return Je(e) && e.length === is;
  }
  function zu(e) {
    return e === void 0 || Je(e) && e.length === os;
  }
  function Nu(e) {
    return Je(e) && e.length === 64 && Rr(e.subarray(0, 32), Ot) < 0 && Rr(e.subarray(32, 64), Ot) < 0;
  }
  function Hu(e) {
    return Je(e) && e.length === 64 && Rr(e.subarray(0, 32), Au) < 0;
  }
  function Cu(e) {
    e !== 0 && e !== 1 && qe(rs);
  }
  function wr(e) {
    ss(e) || qe(Ja);
  }
  function Ur(e) {
    Bu(e) || qe(Qn);
  }
  function Rt(e) {
    us(e) || qe(Qn);
  }
  function Fr(e) {
    Ru(e) || qe(Qa);
  }
  function Mr(e) {
    Uu(e) || qe(Za);
  }
  function Zn(e) {
    zu(e) || qe(es);
  }
  function ei(e) {
    Nu(e) || qe(lt);
  }
  function Lu(e) {
    e() || qe(lt);
  }
  function ju(e) {
    Mn(e.subarray(0, 32)) && qe(lt), Mn(e.subarray(32, 64)) && qe(lt);
  }
  function qu(e) {
    Hu(e) || qe(ts);
  }
  const Fu = "/bitcoin-hd-addresses-generator/assets/secp256k1-2IQOMy_D.wasm", Mu = async (e = {}, c) => {
    let d;
    if (c.startsWith("data:")) {
      const a = c.replace(/^data:.*?base64,/, "");
      let v;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") v = Buffer.from(a, "base64");
      else if (typeof atob == "function") {
        const o = atob(a);
        v = new Uint8Array(o.length);
        for (let n = 0; n < o.length; n++) v[n] = o.charCodeAt(n);
      } else throw new Error("Cannot decode base64-encoded data URL");
      d = await WebAssembly.instantiate(v, e);
    } else {
      const a = await fetch(c), v = a.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && v.startsWith("application/wasm")) d = await WebAssembly.instantiateStreaming(a, e);
      else {
        const o = await a.arrayBuffer();
        d = await WebAssembly.instantiate(o, e);
      }
    }
    return d.instance.exports;
  };
  function Du() {
    const e = new Uint8Array(4);
    if (typeof crypto > "u") throw new Error("The crypto object is unavailable. This may occur if your environment does not support the Web Cryptography API.");
    return crypto.getRandomValues(e), e;
  }
  function Ku() {
    const e = Du();
    return (e[0] << 3 * 8) + (e[1] << 2 * 8) + (e[2] << 1 * 8) + e[3];
  }
  URL = globalThis.URL;
  const he = await Mu({
    "./rand.js": {
      generateInt32: Ku
    },
    "./validate_error.js": {
      throwError: qe
    }
  }, Fu), Wu = he.memory, Vu = he.initializeContext, Gu = he.isPoint, $u = he.PUBLIC_KEY_INPUT, Xu = he.pointAdd, Yu = he.PUBLIC_KEY_INPUT2, Ju = he.pointAddScalar, Qu = he.TWEAK_INPUT, Zu = he.xOnlyPointAddTweak, ec = he.X_ONLY_PUBLIC_KEY_INPUT, rc = he.xOnlyPointAddTweakCheck, tc = he.X_ONLY_PUBLIC_KEY_INPUT2, nc = he.pointCompress, ic = he.pointFromScalar, oc = he.PRIVATE_INPUT, ac = he.xOnlyPointFromScalar, sc = he.xOnlyPointFromPoint, uc = he.pointMultiply, cc = he.privateAdd, lc = he.privateSub, fc = he.privateNegate, dc = he.sign, hc = he.HASH_INPUT, pc = he.EXTRA_DATA_INPUT, mc = he.SIGNATURE_INPUT, bc = he.signRecoverable, gc = he.signSchnorr, yc = he.verify, vc = he.recover, wc = he.verifySchnorr, _c = he.rustsecp256k1_v0_8_1_default_error_callback_fn, Ec = he.rustsecp256k1_v0_8_1_default_illegal_callback_fn, kc = he.__data_end, Sc = he.__heap_base, pe = Object.freeze(Object.defineProperty({
    __proto__: null,
    EXTRA_DATA_INPUT: pc,
    HASH_INPUT: hc,
    PRIVATE_INPUT: oc,
    PUBLIC_KEY_INPUT: $u,
    PUBLIC_KEY_INPUT2: Yu,
    SIGNATURE_INPUT: mc,
    TWEAK_INPUT: Qu,
    X_ONLY_PUBLIC_KEY_INPUT: ec,
    X_ONLY_PUBLIC_KEY_INPUT2: tc,
    __data_end: kc,
    __heap_base: Sc,
    initializeContext: Vu,
    isPoint: Gu,
    memory: Wu,
    pointAdd: Xu,
    pointAddScalar: Ju,
    pointCompress: nc,
    pointFromScalar: ic,
    pointMultiply: uc,
    privateAdd: cc,
    privateNegate: fc,
    privateSub: lc,
    recover: vc,
    rustsecp256k1_v0_8_1_default_error_callback_fn: _c,
    rustsecp256k1_v0_8_1_default_illegal_callback_fn: Ec,
    sign: dc,
    signRecoverable: bc,
    signSchnorr: gc,
    verify: yc,
    verifySchnorr: wc,
    xOnlyPointAddTweak: Zu,
    xOnlyPointAddTweakCheck: rc,
    xOnlyPointFromPoint: sc,
    xOnlyPointFromScalar: ac
  }, Symbol.toStringTag, {
    value: "Module"
  })), ir = new Uint8Array(pe.memory.buffer), jo = pe.PRIVATE_INPUT.value, qo = pe.PUBLIC_KEY_INPUT.value, Fo = pe.PUBLIC_KEY_INPUT2.value, Mo = pe.X_ONLY_PUBLIC_KEY_INPUT.value, Do = pe.X_ONLY_PUBLIC_KEY_INPUT2.value, Ko = pe.TWEAK_INPUT.value, Wo = pe.HASH_INPUT.value, Vo = pe.EXTRA_DATA_INPUT.value, Go = pe.SIGNATURE_INPUT.value, Te = ir.subarray(jo, jo + bt), ke = ir.subarray(qo, qo + gt), $o = ir.subarray(Fo, Fo + gt), Ke = ir.subarray(Mo, Mo + vr), Xo = ir.subarray(Do, Do + vr), We = ir.subarray(Ko, Ko + ns), Ve = ir.subarray(Wo, Wo + is), Lr = ir.subarray(Vo, Vo + os), Ge = ir.subarray(Go, Go + Nt);
  function Dr(e, c) {
    return e === void 0 ? c !== void 0 ? c.length : ft : e ? ft : gt;
  }
  function ri(e) {
    try {
      return ke.set(e), pe.isPoint(e.length) === 1;
    } finally {
      ke.fill(0);
    }
  }
  function Tc() {
    pe.initializeContext();
  }
  function xc(e) {
    return Pu(e) && ri(e);
  }
  function Ic(e) {
    return Ou(e) && ri(e);
  }
  function cs(e) {
    return us(e) && ri(e);
  }
  function Ac(e) {
    return ss(e);
  }
  function Bc(e, c, d) {
    Ur(e), Ur(c);
    const a = Dr(d, e);
    try {
      return ke.set(e), $o.set(c), pe.pointAdd(e.length, c.length, a) === 1 ? ke.slice(0, a) : null;
    } finally {
      ke.fill(0), $o.fill(0);
    }
  }
  function Pc(e, c, d) {
    Ur(e), Fr(c);
    const a = Dr(d, e);
    try {
      return ke.set(e), We.set(c), pe.pointAddScalar(e.length, a) === 1 ? ke.slice(0, a) : null;
    } finally {
      ke.fill(0), We.fill(0);
    }
  }
  function Oc(e, c) {
    Ur(e);
    const d = Dr(c, e);
    try {
      return ke.set(e), pe.pointCompress(e.length, d), ke.slice(0, d);
    } finally {
      ke.fill(0);
    }
  }
  function Rc(e, c) {
    wr(e);
    const d = Dr(c);
    try {
      return Te.set(e), pe.pointFromScalar(d) === 1 ? ke.slice(0, d) : null;
    } finally {
      Te.fill(0), ke.fill(0);
    }
  }
  function Uc(e) {
    wr(e);
    try {
      return Te.set(e), pe.xOnlyPointFromScalar(), Ke.slice(0, vr);
    } finally {
      Te.fill(0), Ke.fill(0);
    }
  }
  function zc(e) {
    Ur(e);
    try {
      return ke.set(e), pe.xOnlyPointFromPoint(e.length), Ke.slice(0, vr);
    } finally {
      ke.fill(0), Ke.fill(0);
    }
  }
  function Nc(e, c, d) {
    Ur(e), Fr(c);
    const a = Dr(d, e);
    try {
      return ke.set(e), We.set(c), pe.pointMultiply(e.length, a) === 1 ? ke.slice(0, a) : null;
    } finally {
      ke.fill(0), We.fill(0);
    }
  }
  function Hc(e, c) {
    wr(e), Fr(c);
    try {
      return Te.set(e), We.set(c), pe.privateAdd() === 1 ? Te.slice(0, bt) : null;
    } finally {
      Te.fill(0), We.fill(0);
    }
  }
  function Cc(e, c) {
    if (wr(e), Fr(c), Mn(c)) return new Uint8Array(e);
    try {
      return Te.set(e), We.set(c), pe.privateSub() === 1 ? Te.slice(0, bt) : null;
    } finally {
      Te.fill(0), We.fill(0);
    }
  }
  function Lc(e) {
    wr(e);
    try {
      return Te.set(e), pe.privateNegate(), Te.slice(0, bt);
    } finally {
      Te.fill(0);
    }
  }
  function jc(e, c) {
    Rt(e), Fr(c);
    try {
      Ke.set(e), We.set(c);
      const d = pe.xOnlyPointAddTweak();
      return d !== -1 ? {
        parity: d,
        xOnlyPubkey: Ke.slice(0, vr)
      } : null;
    } finally {
      Ke.fill(0), We.fill(0);
    }
  }
  function qc(e, c, d, a) {
    Rt(e), Rt(d), Fr(c);
    const v = a !== void 0;
    v && Cu(a);
    try {
      if (Ke.set(e), Xo.set(d), We.set(c), v) return pe.xOnlyPointAddTweakCheck(a) === 1;
      {
        pe.xOnlyPointAddTweak();
        const o = Ke.slice(0, vr);
        return xu(o, d) === 0;
      }
    } finally {
      Ke.fill(0), Xo.fill(0), We.fill(0);
    }
  }
  function Fc(e, c, d) {
    Mr(e), wr(c), Zn(d);
    try {
      return Ve.set(e), Te.set(c), d !== void 0 && Lr.set(d), pe.sign(d === void 0 ? 0 : 1), Ge.slice(0, Nt);
    } finally {
      Ve.fill(0), Te.fill(0), d !== void 0 && Lr.fill(0), Ge.fill(0);
    }
  }
  function Mc(e, c, d) {
    Mr(e), wr(c), Zn(d);
    try {
      Ve.set(e), Te.set(c), d !== void 0 && Lr.set(d);
      const a = pe.signRecoverable(d === void 0 ? 0 : 1);
      return {
        signature: Ge.slice(0, Nt),
        recoveryId: a
      };
    } finally {
      Ve.fill(0), Te.fill(0), d !== void 0 && Lr.fill(0), Ge.fill(0);
    }
  }
  function Dc(e, c, d) {
    Mr(e), wr(c), Zn(d);
    try {
      return Ve.set(e), Te.set(c), d !== void 0 && Lr.set(d), pe.signSchnorr(d === void 0 ? 0 : 1), Ge.slice(0, Nt);
    } finally {
      Ve.fill(0), Te.fill(0), d !== void 0 && Lr.fill(0), Ge.fill(0);
    }
  }
  function Kc(e, c, d, a = false) {
    Mr(e), Ur(c), ei(d);
    try {
      return Ve.set(e), ke.set(c), Ge.set(d), pe.verify(c.length, a === true ? 1 : 0) === 1;
    } finally {
      Ve.fill(0), ke.fill(0), Ge.fill(0);
    }
  }
  function Wc(e, c, d, a = false) {
    Mr(e), ei(c), ju(c), d & 2 && qu(c), Lu(() => cs(c.subarray(0, 32)));
    const v = Dr(a);
    try {
      return Ve.set(e), Ge.set(c), pe.recover(v, d) === 1 ? ke.slice(0, v) : null;
    } finally {
      Ve.fill(0), Ge.fill(0), ke.fill(0);
    }
  }
  function Vc(e, c, d) {
    Mr(e), Rt(c), ei(d);
    try {
      return Ve.set(e), Ke.set(c), Ge.set(d), pe.verifySchnorr() === 1;
    } finally {
      Ve.fill(0), Ke.fill(0), Ge.fill(0);
    }
  }
  Sl = Object.freeze(Object.defineProperty({
    __proto__: null,
    __initializeContext: Tc,
    isPoint: xc,
    isPointCompressed: Ic,
    isPrivate: Ac,
    isXOnlyPoint: cs,
    pointAdd: Bc,
    pointAddScalar: Pc,
    pointCompress: Oc,
    pointFromScalar: Rc,
    pointMultiply: Nc,
    privateAdd: Hc,
    privateNegate: Lc,
    privateSub: Cc,
    recover: Wc,
    sign: Fc,
    signRecoverable: Mc,
    signSchnorr: Dc,
    verify: Kc,
    verifySchnorr: Vc,
    xOnlyPointAddTweak: jc,
    xOnlyPointAddTweakCheck: qc,
    xOnlyPointFromPoint: zc,
    xOnlyPointFromScalar: Uc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var nn = {}, ut = {}, Or = {}, Yo;
  function Gc() {
    if (Yo) return Or;
    Yo = 1, Object.defineProperty(Or, "__esModule", {
      value: true
    }), Or.hmacSHA512 = Or.hash160 = void 0;
    const e = Fa(), c = Va(), d = ht(), a = qa();
    function v(n) {
      const r = (0, d.sha256)(Uint8Array.from(n));
      return Buffer.from((0, c.ripemd160)(r));
    }
    Or.hash160 = v;
    function o(n, r) {
      return Buffer.from((0, e.hmac)(a.sha512, n, r));
    }
    return Or.hmacSHA512 = o, Or;
  }
  var ct = {}, Jo;
  function $c() {
    if (Jo) return ct;
    Jo = 1, Object.defineProperty(ct, "__esModule", {
      value: true
    }), ct.testEcc = void 0;
    const e = (a) => Buffer.from(a, "hex");
    function c(a) {
      if (d(a.isPoint(e("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), d(!a.isPoint(e("030000000000000000000000000000000000000000000000000000000000000005"))), d(a.isPrivate(e("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), d(a.isPrivate(e("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), d(!a.isPrivate(e("0000000000000000000000000000000000000000000000000000000000000000"))), d(!a.isPrivate(e("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"))), d(!a.isPrivate(e("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364142"))), d(Buffer.from(a.pointFromScalar(e("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals(e("02b07ba9dca9523b7ef4bd97703d43d20399eb698e194704791a25ce77a400df99"))), a.xOnlyPointAddTweak) {
        d(a.xOnlyPointAddTweak(e("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), e("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")) === null);
        let v = a.xOnlyPointAddTweak(e("1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b"), e("a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac"));
        d(Buffer.from(v.xOnlyPubkey).equals(e("e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf")) && v.parity === 1), v = a.xOnlyPointAddTweak(e("2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991"), e("823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47"));
      }
      d(Buffer.from(a.pointAddScalar(e("0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), e("0000000000000000000000000000000000000000000000000000000000000003"))).equals(e("02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5"))), d(Buffer.from(a.privateAdd(e("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"), e("0000000000000000000000000000000000000000000000000000000000000002"))).equals(e("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), a.privateNegate && (d(Buffer.from(a.privateNegate(e("0000000000000000000000000000000000000000000000000000000000000001"))).equals(e("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), d(Buffer.from(a.privateNegate(e("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"))).equals(e("0000000000000000000000000000000000000000000000000000000000000003"))), d(Buffer.from(a.privateNegate(e("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals(e("4eede1bf775995d70a494f0a7bb6bc11e0b8cccd41cce8009ab1132c8b0a3792")))), d(Buffer.from(a.sign(e("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), e("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))).equals(e("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))), d(a.verify(e("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), e("0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), e("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))), a.signSchnorr && d(Buffer.from(a.signSchnorr(e("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), e("c90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b14e5c9"), e("c87aa53824b4d7ae2eb035a2b5bbbccc080e76cdc6d1692c4b0b62d798e6d906"))).equals(e("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7"))), a.verifySchnorr && d(a.verifySchnorr(e("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), e("dd308afec5777e13121fa72b9cc1b7cc0139715309b086c960e18fd969774eb8"), e("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7")));
    }
    ct.testEcc = c;
    function d(a) {
      if (!a) throw new Error("ecc library invalid");
    }
    return ct;
  }
  var on = {}, Qo;
  function Xc() {
    return Qo || (Qo = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.bytes = e.stringToBytes = e.str = e.bytesToString = e.hex = e.utf8 = e.bech32m = e.bech32 = e.base58check = e.createBase58check = e.base58xmr = e.base58xrp = e.base58flickr = e.base58 = e.base64urlnopad = e.base64url = e.base64nopad = e.base64 = e.base32crockford = e.base32hexnopad = e.base32hex = e.base32nopad = e.base32 = e.base16 = e.utils = void 0;
      function c(M) {
        return M instanceof Uint8Array || ArrayBuffer.isView(M) && M.constructor.name === "Uint8Array";
      }
      function d(M, ...Y) {
        if (!c(M)) throw new Error("Uint8Array expected");
        if (Y.length > 0 && !Y.includes(M.length)) throw new Error("Uint8Array expected of length " + Y + ", got length=" + M.length);
      }
      function a(M, Y) {
        return Array.isArray(Y) ? Y.length === 0 ? true : M ? Y.every((N) => typeof N == "string") : Y.every((N) => Number.isSafeInteger(N)) : false;
      }
      function v(M) {
        if (typeof M != "function") throw new Error("function expected");
        return true;
      }
      function o(M, Y) {
        if (typeof Y != "string") throw new Error(`${M}: string expected`);
        return true;
      }
      function n(M) {
        if (!Number.isSafeInteger(M)) throw new Error(`invalid integer: ${M}`);
      }
      function r(M) {
        if (!Array.isArray(M)) throw new Error("array expected");
      }
      function u(M, Y) {
        if (!a(true, Y)) throw new Error(`${M}: array of strings expected`);
      }
      function p(M, Y) {
        if (!a(false, Y)) throw new Error(`${M}: array of numbers expected`);
      }
      function s(...M) {
        const Y = ($) => $, N = ($, ie) => (P) => $(ie(P)), j = M.map(($) => $.encode).reduceRight(N, Y), W = M.map(($) => $.decode).reduce(N, Y);
        return {
          encode: j,
          decode: W
        };
      }
      function b(M) {
        const Y = typeof M == "string" ? M.split("") : M, N = Y.length;
        u("alphabet", Y);
        const j = new Map(Y.map((W, $) => [
          W,
          $
        ]));
        return {
          encode: (W) => (r(W), W.map(($) => {
            if (!Number.isSafeInteger($) || $ < 0 || $ >= N) throw new Error(`alphabet.encode: digit index outside alphabet "${$}". Allowed: ${M}`);
            return Y[$];
          })),
          decode: (W) => (r(W), W.map(($) => {
            o("alphabet.decode", $);
            const ie = j.get($);
            if (ie === void 0) throw new Error(`Unknown letter: "${$}". Allowed: ${M}`);
            return ie;
          }))
        };
      }
      function m(M = "") {
        return o("join", M), {
          encode: (Y) => (u("join.decode", Y), Y.join(M)),
          decode: (Y) => (o("join.decode", Y), Y.split(M))
        };
      }
      function f(M, Y = "=") {
        return n(M), o("padding", Y), {
          encode(N) {
            for (u("padding.encode", N); N.length * M % 8; ) N.push(Y);
            return N;
          },
          decode(N) {
            u("padding.decode", N);
            let j = N.length;
            if (j * M % 8) throw new Error("padding: invalid, string should have whole number of bytes");
            for (; j > 0 && N[j - 1] === Y; j--) if ((j - 1) * M % 8 === 0) throw new Error("padding: invalid, string has too much padding");
            return N.slice(0, j);
          }
        };
      }
      function h(M) {
        return v(M), {
          encode: (Y) => Y,
          decode: (Y) => M(Y)
        };
      }
      function l(M, Y, N) {
        if (Y < 2) throw new Error(`convertRadix: invalid from=${Y}, base cannot be less than 2`);
        if (N < 2) throw new Error(`convertRadix: invalid to=${N}, base cannot be less than 2`);
        if (r(M), !M.length) return [];
        let j = 0;
        const W = [], $ = Array.from(M, (P) => {
          if (n(P), P < 0 || P >= Y) throw new Error(`invalid integer: ${P}`);
          return P;
        }), ie = $.length;
        for (; ; ) {
          let P = 0, U = true;
          for (let J = j; J < ie; J++) {
            const te = $[J], le = Y * P, ae = le + te;
            if (!Number.isSafeInteger(ae) || le / Y !== P || ae - te !== le) throw new Error("convertRadix: carry overflow");
            const fe = ae / N;
            P = ae % N;
            const ge = Math.floor(fe);
            if ($[J] = ge, !Number.isSafeInteger(ge) || ge * N + P !== ae) throw new Error("convertRadix: carry overflow");
            if (U) ge ? U = false : j = J;
            else continue;
          }
          if (W.push(P), U) break;
        }
        for (let P = 0; P < M.length - 1 && M[P] === 0; P++) W.push(0);
        return W.reverse();
      }
      const w = (M, Y) => Y === 0 ? M : w(Y, M % Y), y = (M, Y) => M + (Y - w(M, Y)), E = (() => {
        let M = [];
        for (let Y = 0; Y < 40; Y++) M.push(2 ** Y);
        return M;
      })();
      function _(M, Y, N, j) {
        if (r(M), Y <= 0 || Y > 32) throw new Error(`convertRadix2: wrong from=${Y}`);
        if (N <= 0 || N > 32) throw new Error(`convertRadix2: wrong to=${N}`);
        if (y(Y, N) > 32) throw new Error(`convertRadix2: carry overflow from=${Y} to=${N} carryBits=${y(Y, N)}`);
        let W = 0, $ = 0;
        const ie = E[Y], P = E[N] - 1, U = [];
        for (const J of M) {
          if (n(J), J >= ie) throw new Error(`convertRadix2: invalid data word=${J} from=${Y}`);
          if (W = W << Y | J, $ + Y > 32) throw new Error(`convertRadix2: carry overflow pos=${$} from=${Y}`);
          for ($ += Y; $ >= N; $ -= N) U.push((W >> $ - N & P) >>> 0);
          const te = E[$];
          if (te === void 0) throw new Error("invalid carry");
          W &= te - 1;
        }
        if (W = W << N - $ & P, !j && $ >= Y) throw new Error("Excess padding");
        if (!j && W > 0) throw new Error(`Non-zero padding: ${W}`);
        return j && $ > 0 && U.push(W >>> 0), U;
      }
      function S(M) {
        n(M);
        const Y = 2 ** 8;
        return {
          encode: (N) => {
            if (!c(N)) throw new Error("radix.encode input should be Uint8Array");
            return l(Array.from(N), Y, M);
          },
          decode: (N) => (p("radix.decode", N), Uint8Array.from(l(N, M, Y)))
        };
      }
      function I(M, Y = false) {
        if (n(M), M <= 0 || M > 32) throw new Error("radix2: bits should be in (0..32]");
        if (y(8, M) > 32 || y(M, 8) > 32) throw new Error("radix2: carry overflow");
        return {
          encode: (N) => {
            if (!c(N)) throw new Error("radix2.encode input should be Uint8Array");
            return _(Array.from(N), 8, M, !Y);
          },
          decode: (N) => (p("radix2.decode", N), Uint8Array.from(_(N, M, 8, Y)))
        };
      }
      function A(M) {
        return v(M), function(...Y) {
          try {
            return M.apply(null, Y);
          } catch {
          }
        };
      }
      function L(M, Y) {
        return n(M), v(Y), {
          encode(N) {
            if (!c(N)) throw new Error("checksum.encode: input should be Uint8Array");
            const j = Y(N).slice(0, M), W = new Uint8Array(N.length + M);
            return W.set(N), W.set(j, N.length), W;
          },
          decode(N) {
            if (!c(N)) throw new Error("checksum.decode: input should be Uint8Array");
            const j = N.slice(0, -M), W = N.slice(-M), $ = Y(j).slice(0, M);
            for (let ie = 0; ie < M; ie++) if ($[ie] !== W[ie]) throw new Error("Invalid checksum");
            return j;
          }
        };
      }
      e.utils = {
        alphabet: b,
        chain: s,
        checksum: L,
        convertRadix: l,
        convertRadix2: _,
        radix: S,
        radix2: I,
        join: m,
        padding: f
      }, e.base16 = s(I(4), b("0123456789ABCDEF"), m("")), e.base32 = s(I(5), b("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), f(5), m("")), e.base32nopad = s(I(5), b("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), m("")), e.base32hex = s(I(5), b("0123456789ABCDEFGHIJKLMNOPQRSTUV"), f(5), m("")), e.base32hexnopad = s(I(5), b("0123456789ABCDEFGHIJKLMNOPQRSTUV"), m("")), e.base32crockford = s(I(5), b("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), m(""), h((M) => M.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
      const q = typeof Uint8Array.from([]).toBase64 == "function" && typeof Uint8Array.fromBase64 == "function", x = (M, Y) => {
        o("base64", M);
        const N = Y ? /^[A-Za-z0-9=_-]+$/ : /^[A-Za-z0-9=+/]+$/, j = Y ? "base64url" : "base64";
        if (M.length > 0 && !N.test(M)) throw new Error("invalid base64");
        return Uint8Array.fromBase64(M, {
          alphabet: j,
          lastChunkHandling: "strict"
        });
      };
      e.base64 = q ? {
        encode(M) {
          return d(M), M.toBase64();
        },
        decode(M) {
          return x(M, false);
        }
      } : s(I(6), b("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), f(6), m("")), e.base64nopad = s(I(6), b("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), m("")), e.base64url = q ? {
        encode(M) {
          return d(M), M.toBase64({
            alphabet: "base64url"
          });
        },
        decode(M) {
          return x(M, true);
        }
      } : s(I(6), b("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), f(6), m("")), e.base64urlnopad = s(I(6), b("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), m(""));
      const R = (M) => s(S(58), b(M), m(""));
      e.base58 = R("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), e.base58flickr = R("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"), e.base58xrp = R("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
      const z = [
        0,
        2,
        3,
        5,
        6,
        7,
        9,
        10,
        11
      ];
      e.base58xmr = {
        encode(M) {
          let Y = "";
          for (let N = 0; N < M.length; N += 8) {
            const j = M.subarray(N, N + 8);
            Y += e.base58.encode(j).padStart(z[j.length], "1");
          }
          return Y;
        },
        decode(M) {
          let Y = [];
          for (let N = 0; N < M.length; N += 11) {
            const j = M.slice(N, N + 11), W = z.indexOf(j.length), $ = e.base58.decode(j);
            for (let ie = 0; ie < $.length - W; ie++) if ($[ie] !== 0) throw new Error("base58xmr: wrong padding");
            Y = Y.concat(Array.from($.slice($.length - W)));
          }
          return Uint8Array.from(Y);
        }
      };
      const F = (M) => s(L(4, (Y) => M(M(Y))), e.base58);
      e.createBase58check = F, e.base58check = e.createBase58check;
      const C = s(b("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), m("")), G = [
        996825010,
        642813549,
        513874426,
        1027748829,
        705979059
      ];
      function Q(M) {
        const Y = M >> 25;
        let N = (M & 33554431) << 5;
        for (let j = 0; j < G.length; j++) (Y >> j & 1) === 1 && (N ^= G[j]);
        return N;
      }
      function ee(M, Y, N = 1) {
        const j = M.length;
        let W = 1;
        for (let $ = 0; $ < j; $++) {
          const ie = M.charCodeAt($);
          if (ie < 33 || ie > 126) throw new Error(`Invalid prefix (${M})`);
          W = Q(W) ^ ie >> 5;
        }
        W = Q(W);
        for (let $ = 0; $ < j; $++) W = Q(W) ^ M.charCodeAt($) & 31;
        for (let $ of Y) W = Q(W) ^ $;
        for (let $ = 0; $ < 6; $++) W = Q(W);
        return W ^= N, C.encode(_([
          W % E[30]
        ], 30, 5, false));
      }
      function re(M) {
        const Y = M === "bech32" ? 1 : 734539939, N = I(5), j = N.decode, W = N.encode, $ = A(j);
        function ie(le, ae, fe = 90) {
          o("bech32.encode prefix", le), c(ae) && (ae = Array.from(ae)), p("bech32.encode", ae);
          const ge = le.length;
          if (ge === 0) throw new TypeError(`Invalid prefix length ${ge}`);
          const xe = ge + 7 + ae.length;
          if (fe !== false && xe > fe) throw new TypeError(`Length ${xe} exceeds limit ${fe}`);
          const Oe = le.toLowerCase(), me = ee(Oe, ae, Y);
          return `${Oe}1${C.encode(ae)}${me}`;
        }
        function P(le, ae = 90) {
          o("bech32.decode input", le);
          const fe = le.length;
          if (fe < 8 || ae !== false && fe > ae) throw new TypeError(`invalid string length: ${fe} (${le}). Expected (8..${ae})`);
          const ge = le.toLowerCase();
          if (le !== ge && le !== le.toUpperCase()) throw new Error("String must be lowercase or uppercase");
          const xe = ge.lastIndexOf("1");
          if (xe === 0 || xe === -1) throw new Error('Letter "1" must be present between prefix and data only');
          const Oe = ge.slice(0, xe), me = ge.slice(xe + 1);
          if (me.length < 6) throw new Error("Data must be at least 6 characters long");
          const be = C.decode(me).slice(0, -6), Ne = ee(Oe, be, Y);
          if (!me.endsWith(Ne)) throw new Error(`Invalid checksum in ${le}: expected "${Ne}"`);
          return {
            prefix: Oe,
            words: be
          };
        }
        const U = A(P);
        function J(le) {
          const { prefix: ae, words: fe } = P(le, false);
          return {
            prefix: ae,
            words: fe,
            bytes: j(fe)
          };
        }
        function te(le, ae) {
          return ie(le, W(ae));
        }
        return {
          encode: ie,
          decode: P,
          encodeFromBytes: te,
          decodeToBytes: J,
          decodeUnsafe: U,
          fromWords: j,
          fromWordsUnsafe: $,
          toWords: W
        };
      }
      e.bech32 = re("bech32"), e.bech32m = re("bech32m"), e.utf8 = {
        encode: (M) => new TextDecoder().decode(M),
        decode: (M) => new TextEncoder().encode(M)
      };
      const D = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", O = {
        encode(M) {
          return d(M), M.toHex();
        },
        decode(M) {
          return o("hex", M), Uint8Array.fromHex(M);
        }
      };
      e.hex = D ? O : s(I(4), b("0123456789abcdef"), m(""), h((M) => {
        if (typeof M != "string" || M.length % 2 !== 0) throw new TypeError(`hex.decode: expected string, got ${typeof M} with length ${M.length}`);
        return M.toLowerCase();
      }));
      const K = {
        utf8: e.utf8,
        hex: e.hex,
        base16: e.base16,
        base32: e.base32,
        base64: e.base64,
        base64url: e.base64url,
        base58: e.base58,
        base58xmr: e.base58xmr
      }, V = "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr", Z = (M, Y) => {
        if (typeof M != "string" || !K.hasOwnProperty(M)) throw new TypeError(V);
        if (!c(Y)) throw new TypeError("bytesToString() expects Uint8Array");
        return K[M].encode(Y);
      };
      e.bytesToString = Z, e.str = e.bytesToString;
      const ue = (M, Y) => {
        if (!K.hasOwnProperty(M)) throw new TypeError(V);
        if (typeof Y != "string") throw new TypeError("stringToBytes() expects string");
        return K[M].decode(Y);
      };
      e.stringToBytes = ue, e.bytes = e.stringToBytes;
    }(on)), on;
  }
  var Bt = {
    exports: {}
  }, Zo;
  function Pe() {
    return Zo || (Zo = 1, typeof Object.create == "function" ? Bt.exports = function(c, d) {
      d && (c.super_ = d, c.prototype = Object.create(d.prototype, {
        constructor: {
          value: c,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }));
    } : Bt.exports = function(c, d) {
      if (d) {
        c.super_ = d;
        var a = function() {
        };
        a.prototype = d.prototype, c.prototype = new a(), c.prototype.constructor = c;
      }
    }), Bt.exports;
  }
  const Yc = {}, Jc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Yc
  }, Symbol.toStringTag, {
    value: "Module"
  })), dt = ws(Jc);
  var an, ea;
  function ls() {
    return ea || (ea = 1, an = dt.EventEmitter), an;
  }
  var sn, ra;
  function Qc() {
    if (ra) return sn;
    ra = 1;
    function e(h, l) {
      var w = Object.keys(h);
      if (Object.getOwnPropertySymbols) {
        var y = Object.getOwnPropertySymbols(h);
        l && (y = y.filter(function(E) {
          return Object.getOwnPropertyDescriptor(h, E).enumerable;
        })), w.push.apply(w, y);
      }
      return w;
    }
    function c(h) {
      for (var l = 1; l < arguments.length; l++) {
        var w = arguments[l] != null ? arguments[l] : {};
        l % 2 ? e(Object(w), true).forEach(function(y) {
          d(h, y, w[y]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(w)) : e(Object(w)).forEach(function(y) {
          Object.defineProperty(h, y, Object.getOwnPropertyDescriptor(w, y));
        });
      }
      return h;
    }
    function d(h, l, w) {
      return l = n(l), l in h ? Object.defineProperty(h, l, {
        value: w,
        enumerable: true,
        configurable: true,
        writable: true
      }) : h[l] = w, h;
    }
    function a(h, l) {
      if (!(h instanceof l)) throw new TypeError("Cannot call a class as a function");
    }
    function v(h, l) {
      for (var w = 0; w < l.length; w++) {
        var y = l[w];
        y.enumerable = y.enumerable || false, y.configurable = true, "value" in y && (y.writable = true), Object.defineProperty(h, n(y.key), y);
      }
    }
    function o(h, l, w) {
      return l && v(h.prototype, l), Object.defineProperty(h, "prototype", {
        writable: false
      }), h;
    }
    function n(h) {
      var l = r(h, "string");
      return typeof l == "symbol" ? l : String(l);
    }
    function r(h, l) {
      if (typeof h != "object" || h === null) return h;
      var w = h[Symbol.toPrimitive];
      if (w !== void 0) {
        var y = w.call(h, l);
        if (typeof y != "object") return y;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(h);
    }
    var u = tr(), p = u.Buffer, s = dt, b = s.inspect, m = b && b.custom || "inspect";
    function f(h, l, w) {
      p.prototype.copy.call(h, l, w);
    }
    return sn = function() {
      function h() {
        a(this, h), this.head = null, this.tail = null, this.length = 0;
      }
      return o(h, [
        {
          key: "push",
          value: function(w) {
            var y = {
              data: w,
              next: null
            };
            this.length > 0 ? this.tail.next = y : this.head = y, this.tail = y, ++this.length;
          }
        },
        {
          key: "unshift",
          value: function(w) {
            var y = {
              data: w,
              next: this.head
            };
            this.length === 0 && (this.tail = y), this.head = y, ++this.length;
          }
        },
        {
          key: "shift",
          value: function() {
            if (this.length !== 0) {
              var w = this.head.data;
              return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, w;
            }
          }
        },
        {
          key: "clear",
          value: function() {
            this.head = this.tail = null, this.length = 0;
          }
        },
        {
          key: "join",
          value: function(w) {
            if (this.length === 0) return "";
            for (var y = this.head, E = "" + y.data; y = y.next; ) E += w + y.data;
            return E;
          }
        },
        {
          key: "concat",
          value: function(w) {
            if (this.length === 0) return p.alloc(0);
            for (var y = p.allocUnsafe(w >>> 0), E = this.head, _ = 0; E; ) f(E.data, y, _), _ += E.data.length, E = E.next;
            return y;
          }
        },
        {
          key: "consume",
          value: function(w, y) {
            var E;
            return w < this.head.data.length ? (E = this.head.data.slice(0, w), this.head.data = this.head.data.slice(w)) : w === this.head.data.length ? E = this.shift() : E = y ? this._getString(w) : this._getBuffer(w), E;
          }
        },
        {
          key: "first",
          value: function() {
            return this.head.data;
          }
        },
        {
          key: "_getString",
          value: function(w) {
            var y = this.head, E = 1, _ = y.data;
            for (w -= _.length; y = y.next; ) {
              var S = y.data, I = w > S.length ? S.length : w;
              if (I === S.length ? _ += S : _ += S.slice(0, w), w -= I, w === 0) {
                I === S.length ? (++E, y.next ? this.head = y.next : this.head = this.tail = null) : (this.head = y, y.data = S.slice(I));
                break;
              }
              ++E;
            }
            return this.length -= E, _;
          }
        },
        {
          key: "_getBuffer",
          value: function(w) {
            var y = p.allocUnsafe(w), E = this.head, _ = 1;
            for (E.data.copy(y), w -= E.data.length; E = E.next; ) {
              var S = E.data, I = w > S.length ? S.length : w;
              if (S.copy(y, y.length - w, 0, I), w -= I, w === 0) {
                I === S.length ? (++_, E.next ? this.head = E.next : this.head = this.tail = null) : (this.head = E, E.data = S.slice(I));
                break;
              }
              ++_;
            }
            return this.length -= _, y;
          }
        },
        {
          key: m,
          value: function(w, y) {
            return b(this, c(c({}, y), {}, {
              depth: 0,
              customInspect: false
            }));
          }
        }
      ]), h;
    }(), sn;
  }
  var un, ta;
  function fs() {
    if (ta) return un;
    ta = 1;
    function e(n, r) {
      var u = this, p = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
      return p || s ? (r ? r(n) : n && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, process.nextTick(v, this, n)) : process.nextTick(v, this, n)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(n || null, function(b) {
        !r && b ? u._writableState ? u._writableState.errorEmitted ? process.nextTick(d, u) : (u._writableState.errorEmitted = true, process.nextTick(c, u, b)) : process.nextTick(c, u, b) : r ? (process.nextTick(d, u), r(b)) : process.nextTick(d, u);
      }), this);
    }
    function c(n, r) {
      v(n, r), d(n);
    }
    function d(n) {
      n._writableState && !n._writableState.emitClose || n._readableState && !n._readableState.emitClose || n.emit("close");
    }
    function a() {
      this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
    }
    function v(n, r) {
      n.emit("error", r);
    }
    function o(n, r) {
      var u = n._readableState, p = n._writableState;
      u && u.autoDestroy || p && p.autoDestroy ? n.destroy(r) : n.emit("error", r);
    }
    return un = {
      destroy: e,
      undestroy: a,
      errorOrDestroy: o
    }, un;
  }
  var cn = {}, na;
  function Kr() {
    if (na) return cn;
    na = 1;
    function e(r, u) {
      r.prototype = Object.create(u.prototype), r.prototype.constructor = r, r.__proto__ = u;
    }
    var c = {};
    function d(r, u, p) {
      p || (p = Error);
      function s(m, f, h) {
        return typeof u == "string" ? u : u(m, f, h);
      }
      var b = function(m) {
        e(f, m);
        function f(h, l, w) {
          return m.call(this, s(h, l, w)) || this;
        }
        return f;
      }(p);
      b.prototype.name = p.name, b.prototype.code = r, c[r] = b;
    }
    function a(r, u) {
      if (Array.isArray(r)) {
        var p = r.length;
        return r = r.map(function(s) {
          return String(s);
        }), p > 2 ? "one of ".concat(u, " ").concat(r.slice(0, p - 1).join(", "), ", or ") + r[p - 1] : p === 2 ? "one of ".concat(u, " ").concat(r[0], " or ").concat(r[1]) : "of ".concat(u, " ").concat(r[0]);
      } else return "of ".concat(u, " ").concat(String(r));
    }
    function v(r, u, p) {
      return r.substr(0, u.length) === u;
    }
    function o(r, u, p) {
      return (p === void 0 || p > r.length) && (p = r.length), r.substring(p - u.length, p) === u;
    }
    function n(r, u, p) {
      return typeof p != "number" && (p = 0), p + u.length > r.length ? false : r.indexOf(u, p) !== -1;
    }
    return d("ERR_INVALID_OPT_VALUE", function(r, u) {
      return 'The value "' + u + '" is invalid for option "' + r + '"';
    }, TypeError), d("ERR_INVALID_ARG_TYPE", function(r, u, p) {
      var s;
      typeof u == "string" && v(u, "not ") ? (s = "must not be", u = u.replace(/^not /, "")) : s = "must be";
      var b;
      if (o(r, " argument")) b = "The ".concat(r, " ").concat(s, " ").concat(a(u, "type"));
      else {
        var m = n(r, ".") ? "property" : "argument";
        b = 'The "'.concat(r, '" ').concat(m, " ").concat(s, " ").concat(a(u, "type"));
      }
      return b += ". Received type ".concat(typeof p), b;
    }, TypeError), d("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), d("ERR_METHOD_NOT_IMPLEMENTED", function(r) {
      return "The " + r + " method is not implemented";
    }), d("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), d("ERR_STREAM_DESTROYED", function(r) {
      return "Cannot call " + r + " after a stream was destroyed";
    }), d("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), d("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), d("ERR_STREAM_WRITE_AFTER_END", "write after end"), d("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), d("ERR_UNKNOWN_ENCODING", function(r) {
      return "Unknown encoding: " + r;
    }, TypeError), d("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), cn.codes = c, cn;
  }
  var ln, ia;
  function ds() {
    if (ia) return ln;
    ia = 1;
    var e = Kr().codes.ERR_INVALID_OPT_VALUE;
    function c(a, v, o) {
      return a.highWaterMark != null ? a.highWaterMark : v ? a[o] : null;
    }
    function d(a, v, o, n) {
      var r = c(v, n, o);
      if (r != null) {
        if (!(isFinite(r) && Math.floor(r) === r) || r < 0) {
          var u = n ? o : "highWaterMark";
          throw new e(u, r);
        }
        return Math.floor(r);
      }
      return a.objectMode ? 16 : 16 * 1024;
    }
    return ln = {
      getHighWaterMark: d
    }, ln;
  }
  var fn, oa;
  function Zc() {
    if (oa) return fn;
    oa = 1, fn = e;
    function e(d, a) {
      if (c("noDeprecation")) return d;
      var v = false;
      function o() {
        if (!v) {
          if (c("throwDeprecation")) throw new Error(a);
          c("traceDeprecation") ? console.trace(a) : console.warn(a), v = true;
        }
        return d.apply(this, arguments);
      }
      return o;
    }
    function c(d) {
      try {
        if (!globalThis.localStorage) return false;
      } catch {
        return false;
      }
      var a = globalThis.localStorage[d];
      return a == null ? false : String(a).toLowerCase() === "true";
    }
    return fn;
  }
  var dn, aa;
  function hs() {
    if (aa) return dn;
    aa = 1, dn = q;
    function e(N) {
      var j = this;
      this.next = null, this.entry = null, this.finish = function() {
        Y(j, N);
      };
    }
    var c;
    q.WritableState = A;
    var d = {
      deprecate: Zc()
    }, a = ls(), v = tr().Buffer, o = (typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
    };
    function n(N) {
      return v.from(N);
    }
    function r(N) {
      return v.isBuffer(N) || N instanceof o;
    }
    var u = fs(), p = ds(), s = p.getHighWaterMark, b = Kr().codes, m = b.ERR_INVALID_ARG_TYPE, f = b.ERR_METHOD_NOT_IMPLEMENTED, h = b.ERR_MULTIPLE_CALLBACK, l = b.ERR_STREAM_CANNOT_PIPE, w = b.ERR_STREAM_DESTROYED, y = b.ERR_STREAM_NULL_VALUES, E = b.ERR_STREAM_WRITE_AFTER_END, _ = b.ERR_UNKNOWN_ENCODING, S = u.errorOrDestroy;
    Pe()(q, a);
    function I() {
    }
    function A(N, j, W) {
      c = c || jr(), N = N || {}, typeof W != "boolean" && (W = j instanceof c), this.objectMode = !!N.objectMode, W && (this.objectMode = this.objectMode || !!N.writableObjectMode), this.highWaterMark = s(this, N, "writableHighWaterMark", W), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      var $ = N.decodeStrings === false;
      this.decodeStrings = !$, this.defaultEncoding = N.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(ie) {
        ee(j, ie);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = N.emitClose !== false, this.autoDestroy = !!N.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
    }
    A.prototype.getBuffer = function() {
      for (var j = this.bufferedRequest, W = []; j; ) W.push(j), j = j.next;
      return W;
    }, function() {
      try {
        Object.defineProperty(A.prototype, "buffer", {
          get: d.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch {
      }
    }();
    var L;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (L = Function.prototype[Symbol.hasInstance], Object.defineProperty(q, Symbol.hasInstance, {
      value: function(j) {
        return L.call(this, j) ? true : this !== q ? false : j && j._writableState instanceof A;
      }
    })) : L = function(j) {
      return j instanceof this;
    };
    function q(N) {
      c = c || jr();
      var j = this instanceof c;
      if (!j && !L.call(q, this)) return new q(N);
      this._writableState = new A(N, this, j), this.writable = true, N && (typeof N.write == "function" && (this._write = N.write), typeof N.writev == "function" && (this._writev = N.writev), typeof N.destroy == "function" && (this._destroy = N.destroy), typeof N.final == "function" && (this._final = N.final)), a.call(this);
    }
    q.prototype.pipe = function() {
      S(this, new l());
    };
    function x(N, j) {
      var W = new E();
      S(N, W), process.nextTick(j, W);
    }
    function R(N, j, W, $) {
      var ie;
      return W === null ? ie = new y() : typeof W != "string" && !j.objectMode && (ie = new m("chunk", [
        "string",
        "Buffer"
      ], W)), ie ? (S(N, ie), process.nextTick($, ie), false) : true;
    }
    q.prototype.write = function(N, j, W) {
      var $ = this._writableState, ie = false, P = !$.objectMode && r(N);
      return P && !v.isBuffer(N) && (N = n(N)), typeof j == "function" && (W = j, j = null), P ? j = "buffer" : j || (j = $.defaultEncoding), typeof W != "function" && (W = I), $.ending ? x(this, W) : (P || R(this, $, N, W)) && ($.pendingcb++, ie = F(this, $, P, N, j, W)), ie;
    }, q.prototype.cork = function() {
      this._writableState.corked++;
    }, q.prototype.uncork = function() {
      var N = this._writableState;
      N.corked && (N.corked--, !N.writing && !N.corked && !N.bufferProcessing && N.bufferedRequest && O(this, N));
    }, q.prototype.setDefaultEncoding = function(j) {
      if (typeof j == "string" && (j = j.toLowerCase()), !([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
      ].indexOf((j + "").toLowerCase()) > -1)) throw new _(j);
      return this._writableState.defaultEncoding = j, this;
    }, Object.defineProperty(q.prototype, "writableBuffer", {
      enumerable: false,
      get: function() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function z(N, j, W) {
      return !N.objectMode && N.decodeStrings !== false && typeof j == "string" && (j = v.from(j, W)), j;
    }
    Object.defineProperty(q.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function F(N, j, W, $, ie, P) {
      if (!W) {
        var U = z(j, $, ie);
        $ !== U && (W = true, ie = "buffer", $ = U);
      }
      var J = j.objectMode ? 1 : $.length;
      j.length += J;
      var te = j.length < j.highWaterMark;
      if (te || (j.needDrain = true), j.writing || j.corked) {
        var le = j.lastBufferedRequest;
        j.lastBufferedRequest = {
          chunk: $,
          encoding: ie,
          isBuf: W,
          callback: P,
          next: null
        }, le ? le.next = j.lastBufferedRequest : j.bufferedRequest = j.lastBufferedRequest, j.bufferedRequestCount += 1;
      } else C(N, j, false, J, $, ie, P);
      return te;
    }
    function C(N, j, W, $, ie, P, U) {
      j.writelen = $, j.writecb = U, j.writing = true, j.sync = true, j.destroyed ? j.onwrite(new w("write")) : W ? N._writev(ie, j.onwrite) : N._write(ie, P, j.onwrite), j.sync = false;
    }
    function G(N, j, W, $, ie) {
      --j.pendingcb, W ? (process.nextTick(ie, $), process.nextTick(ue, N, j), N._writableState.errorEmitted = true, S(N, $)) : (ie($), N._writableState.errorEmitted = true, S(N, $), ue(N, j));
    }
    function Q(N) {
      N.writing = false, N.writecb = null, N.length -= N.writelen, N.writelen = 0;
    }
    function ee(N, j) {
      var W = N._writableState, $ = W.sync, ie = W.writecb;
      if (typeof ie != "function") throw new h();
      if (Q(W), j) G(N, W, $, j, ie);
      else {
        var P = K(W) || N.destroyed;
        !P && !W.corked && !W.bufferProcessing && W.bufferedRequest && O(N, W), $ ? process.nextTick(re, N, W, P, ie) : re(N, W, P, ie);
      }
    }
    function re(N, j, W, $) {
      W || D(N, j), j.pendingcb--, $(), ue(N, j);
    }
    function D(N, j) {
      j.length === 0 && j.needDrain && (j.needDrain = false, N.emit("drain"));
    }
    function O(N, j) {
      j.bufferProcessing = true;
      var W = j.bufferedRequest;
      if (N._writev && W && W.next) {
        var $ = j.bufferedRequestCount, ie = new Array($), P = j.corkedRequestsFree;
        P.entry = W;
        for (var U = 0, J = true; W; ) ie[U] = W, W.isBuf || (J = false), W = W.next, U += 1;
        ie.allBuffers = J, C(N, j, true, j.length, ie, "", P.finish), j.pendingcb++, j.lastBufferedRequest = null, P.next ? (j.corkedRequestsFree = P.next, P.next = null) : j.corkedRequestsFree = new e(j), j.bufferedRequestCount = 0;
      } else {
        for (; W; ) {
          var te = W.chunk, le = W.encoding, ae = W.callback, fe = j.objectMode ? 1 : te.length;
          if (C(N, j, false, fe, te, le, ae), W = W.next, j.bufferedRequestCount--, j.writing) break;
        }
        W === null && (j.lastBufferedRequest = null);
      }
      j.bufferedRequest = W, j.bufferProcessing = false;
    }
    q.prototype._write = function(N, j, W) {
      W(new f("_write()"));
    }, q.prototype._writev = null, q.prototype.end = function(N, j, W) {
      var $ = this._writableState;
      return typeof N == "function" ? (W = N, N = null, j = null) : typeof j == "function" && (W = j, j = null), N != null && this.write(N, j), $.corked && ($.corked = 1, this.uncork()), $.ending || M(this, $, W), this;
    }, Object.defineProperty(q.prototype, "writableLength", {
      enumerable: false,
      get: function() {
        return this._writableState.length;
      }
    });
    function K(N) {
      return N.ending && N.length === 0 && N.bufferedRequest === null && !N.finished && !N.writing;
    }
    function V(N, j) {
      N._final(function(W) {
        j.pendingcb--, W && S(N, W), j.prefinished = true, N.emit("prefinish"), ue(N, j);
      });
    }
    function Z(N, j) {
      !j.prefinished && !j.finalCalled && (typeof N._final == "function" && !j.destroyed ? (j.pendingcb++, j.finalCalled = true, process.nextTick(V, N, j)) : (j.prefinished = true, N.emit("prefinish")));
    }
    function ue(N, j) {
      var W = K(j);
      if (W && (Z(N, j), j.pendingcb === 0 && (j.finished = true, N.emit("finish"), j.autoDestroy))) {
        var $ = N._readableState;
        (!$ || $.autoDestroy && $.endEmitted) && N.destroy();
      }
      return W;
    }
    function M(N, j, W) {
      j.ending = true, ue(N, j), W && (j.finished ? process.nextTick(W) : N.once("finish", W)), j.ended = true, N.writable = false;
    }
    function Y(N, j, W) {
      var $ = N.entry;
      for (N.entry = null; $; ) {
        var ie = $.callback;
        j.pendingcb--, ie(W), $ = $.next;
      }
      j.corkedRequestsFree.next = N;
    }
    return Object.defineProperty(q.prototype, "destroyed", {
      enumerable: false,
      get: function() {
        return this._writableState === void 0 ? false : this._writableState.destroyed;
      },
      set: function(j) {
        this._writableState && (this._writableState.destroyed = j);
      }
    }), q.prototype.destroy = u.destroy, q.prototype._undestroy = u.undestroy, q.prototype._destroy = function(N, j) {
      j(N);
    }, dn;
  }
  var hn, sa;
  function jr() {
    if (sa) return hn;
    sa = 1;
    var e = Object.keys || function(p) {
      var s = [];
      for (var b in p) s.push(b);
      return s;
    };
    hn = n;
    var c = ps(), d = hs();
    Pe()(n, c);
    for (var a = e(d.prototype), v = 0; v < a.length; v++) {
      var o = a[v];
      n.prototype[o] || (n.prototype[o] = d.prototype[o]);
    }
    function n(p) {
      if (!(this instanceof n)) return new n(p);
      c.call(this, p), d.call(this, p), this.allowHalfOpen = true, p && (p.readable === false && (this.readable = false), p.writable === false && (this.writable = false), p.allowHalfOpen === false && (this.allowHalfOpen = false, this.once("end", r)));
    }
    Object.defineProperty(n.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    }), Object.defineProperty(n.prototype, "writableBuffer", {
      enumerable: false,
      get: function() {
        return this._writableState && this._writableState.getBuffer();
      }
    }), Object.defineProperty(n.prototype, "writableLength", {
      enumerable: false,
      get: function() {
        return this._writableState.length;
      }
    });
    function r() {
      this._writableState.ended || process.nextTick(u, this);
    }
    function u(p) {
      p.end();
    }
    return Object.defineProperty(n.prototype, "destroyed", {
      enumerable: false,
      get: function() {
        return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(s) {
        this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = s, this._writableState.destroyed = s);
      }
    }), hn;
  }
  var pn = {}, Pt = {
    exports: {}
  }, ua;
  function el() {
    return ua || (ua = 1, function(e, c) {
      var d = tr(), a = d.Buffer;
      function v(n, r) {
        for (var u in n) r[u] = n[u];
      }
      a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = d : (v(d, c), c.Buffer = o);
      function o(n, r, u) {
        return a(n, r, u);
      }
      v(a, o), o.from = function(n, r, u) {
        if (typeof n == "number") throw new TypeError("Argument must not be a number");
        return a(n, r, u);
      }, o.alloc = function(n, r, u) {
        if (typeof n != "number") throw new TypeError("Argument must be a number");
        var p = a(n);
        return r !== void 0 ? typeof u == "string" ? p.fill(r, u) : p.fill(r) : p.fill(0), p;
      }, o.allocUnsafe = function(n) {
        if (typeof n != "number") throw new TypeError("Argument must be a number");
        return a(n);
      }, o.allocUnsafeSlow = function(n) {
        if (typeof n != "number") throw new TypeError("Argument must be a number");
        return d.SlowBuffer(n);
      };
    }(Pt, Pt.exports)), Pt.exports;
  }
  var ca;
  function Dn() {
    if (ca) return pn;
    ca = 1;
    var e = el().Buffer, c = e.isEncoding || function(y) {
      switch (y = "" + y, y && y.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function d(y) {
      if (!y) return "utf8";
      for (var E; ; ) switch (y) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return y;
        default:
          if (E) return;
          y = ("" + y).toLowerCase(), E = true;
      }
    }
    function a(y) {
      var E = d(y);
      if (typeof E != "string" && (e.isEncoding === c || !c(y))) throw new Error("Unknown encoding: " + y);
      return E || y;
    }
    pn.StringDecoder = v;
    function v(y) {
      this.encoding = a(y);
      var E;
      switch (this.encoding) {
        case "utf16le":
          this.text = b, this.end = m, E = 4;
          break;
        case "utf8":
          this.fillLast = u, E = 4;
          break;
        case "base64":
          this.text = f, this.end = h, E = 3;
          break;
        default:
          this.write = l, this.end = w;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(E);
    }
    v.prototype.write = function(y) {
      if (y.length === 0) return "";
      var E, _;
      if (this.lastNeed) {
        if (E = this.fillLast(y), E === void 0) return "";
        _ = this.lastNeed, this.lastNeed = 0;
      } else _ = 0;
      return _ < y.length ? E ? E + this.text(y, _) : this.text(y, _) : E || "";
    }, v.prototype.end = s, v.prototype.text = p, v.prototype.fillLast = function(y) {
      if (this.lastNeed <= y.length) return y.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      y.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, y.length), this.lastNeed -= y.length;
    };
    function o(y) {
      return y <= 127 ? 0 : y >> 5 === 6 ? 2 : y >> 4 === 14 ? 3 : y >> 3 === 30 ? 4 : y >> 6 === 2 ? -1 : -2;
    }
    function n(y, E, _) {
      var S = E.length - 1;
      if (S < _) return 0;
      var I = o(E[S]);
      return I >= 0 ? (I > 0 && (y.lastNeed = I - 1), I) : --S < _ || I === -2 ? 0 : (I = o(E[S]), I >= 0 ? (I > 0 && (y.lastNeed = I - 2), I) : --S < _ || I === -2 ? 0 : (I = o(E[S]), I >= 0 ? (I > 0 && (I === 2 ? I = 0 : y.lastNeed = I - 3), I) : 0));
    }
    function r(y, E, _) {
      if ((E[0] & 192) !== 128) return y.lastNeed = 0, "\uFFFD";
      if (y.lastNeed > 1 && E.length > 1) {
        if ((E[1] & 192) !== 128) return y.lastNeed = 1, "\uFFFD";
        if (y.lastNeed > 2 && E.length > 2 && (E[2] & 192) !== 128) return y.lastNeed = 2, "\uFFFD";
      }
    }
    function u(y) {
      var E = this.lastTotal - this.lastNeed, _ = r(this, y);
      if (_ !== void 0) return _;
      if (this.lastNeed <= y.length) return y.copy(this.lastChar, E, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      y.copy(this.lastChar, E, 0, y.length), this.lastNeed -= y.length;
    }
    function p(y, E) {
      var _ = n(this, y, E);
      if (!this.lastNeed) return y.toString("utf8", E);
      this.lastTotal = _;
      var S = y.length - (_ - this.lastNeed);
      return y.copy(this.lastChar, 0, S), y.toString("utf8", E, S);
    }
    function s(y) {
      var E = y && y.length ? this.write(y) : "";
      return this.lastNeed ? E + "\uFFFD" : E;
    }
    function b(y, E) {
      if ((y.length - E) % 2 === 0) {
        var _ = y.toString("utf16le", E);
        if (_) {
          var S = _.charCodeAt(_.length - 1);
          if (S >= 55296 && S <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = y[y.length - 2], this.lastChar[1] = y[y.length - 1], _.slice(0, -1);
        }
        return _;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = y[y.length - 1], y.toString("utf16le", E, y.length - 1);
    }
    function m(y) {
      var E = y && y.length ? this.write(y) : "";
      if (this.lastNeed) {
        var _ = this.lastTotal - this.lastNeed;
        return E + this.lastChar.toString("utf16le", 0, _);
      }
      return E;
    }
    function f(y, E) {
      var _ = (y.length - E) % 3;
      return _ === 0 ? y.toString("base64", E) : (this.lastNeed = 3 - _, this.lastTotal = 3, _ === 1 ? this.lastChar[0] = y[y.length - 1] : (this.lastChar[0] = y[y.length - 2], this.lastChar[1] = y[y.length - 1]), y.toString("base64", E, y.length - _));
    }
    function h(y) {
      var E = y && y.length ? this.write(y) : "";
      return this.lastNeed ? E + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : E;
    }
    function l(y) {
      return y.toString(this.encoding);
    }
    function w(y) {
      return y && y.length ? this.write(y) : "";
    }
    return pn;
  }
  var mn, la;
  function ti() {
    if (la) return mn;
    la = 1;
    var e = Kr().codes.ERR_STREAM_PREMATURE_CLOSE;
    function c(o) {
      var n = false;
      return function() {
        if (!n) {
          n = true;
          for (var r = arguments.length, u = new Array(r), p = 0; p < r; p++) u[p] = arguments[p];
          o.apply(this, u);
        }
      };
    }
    function d() {
    }
    function a(o) {
      return o.setHeader && typeof o.abort == "function";
    }
    function v(o, n, r) {
      if (typeof n == "function") return v(o, null, n);
      n || (n = {}), r = c(r || d);
      var u = n.readable || n.readable !== false && o.readable, p = n.writable || n.writable !== false && o.writable, s = function() {
        o.writable || m();
      }, b = o._writableState && o._writableState.finished, m = function() {
        p = false, b = true, u || r.call(o);
      }, f = o._readableState && o._readableState.endEmitted, h = function() {
        u = false, f = true, p || r.call(o);
      }, l = function(_) {
        r.call(o, _);
      }, w = function() {
        var _;
        if (u && !f) return (!o._readableState || !o._readableState.ended) && (_ = new e()), r.call(o, _);
        if (p && !b) return (!o._writableState || !o._writableState.ended) && (_ = new e()), r.call(o, _);
      }, y = function() {
        o.req.on("finish", m);
      };
      return a(o) ? (o.on("complete", m), o.on("abort", w), o.req ? y() : o.on("request", y)) : p && !o._writableState && (o.on("end", s), o.on("close", s)), o.on("end", h), o.on("finish", m), n.error !== false && o.on("error", l), o.on("close", w), function() {
        o.removeListener("complete", m), o.removeListener("abort", w), o.removeListener("request", y), o.req && o.req.removeListener("finish", m), o.removeListener("end", s), o.removeListener("close", s), o.removeListener("finish", m), o.removeListener("end", h), o.removeListener("error", l), o.removeListener("close", w);
      };
    }
    return mn = v, mn;
  }
  var bn, fa;
  function rl() {
    if (fa) return bn;
    fa = 1;
    var e;
    function c(_, S, I) {
      return S = d(S), S in _ ? Object.defineProperty(_, S, {
        value: I,
        enumerable: true,
        configurable: true,
        writable: true
      }) : _[S] = I, _;
    }
    function d(_) {
      var S = a(_, "string");
      return typeof S == "symbol" ? S : String(S);
    }
    function a(_, S) {
      if (typeof _ != "object" || _ === null) return _;
      var I = _[Symbol.toPrimitive];
      if (I !== void 0) {
        var A = I.call(_, S);
        if (typeof A != "object") return A;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (S === "string" ? String : Number)(_);
    }
    var v = ti(), o = Symbol("lastResolve"), n = Symbol("lastReject"), r = Symbol("error"), u = Symbol("ended"), p = Symbol("lastPromise"), s = Symbol("handlePromise"), b = Symbol("stream");
    function m(_, S) {
      return {
        value: _,
        done: S
      };
    }
    function f(_) {
      var S = _[o];
      if (S !== null) {
        var I = _[b].read();
        I !== null && (_[p] = null, _[o] = null, _[n] = null, S(m(I, false)));
      }
    }
    function h(_) {
      process.nextTick(f, _);
    }
    function l(_, S) {
      return function(I, A) {
        _.then(function() {
          if (S[u]) {
            I(m(void 0, true));
            return;
          }
          S[s](I, A);
        }, A);
      };
    }
    var w = Object.getPrototypeOf(function() {
    }), y = Object.setPrototypeOf((e = {
      get stream() {
        return this[b];
      },
      next: function() {
        var S = this, I = this[r];
        if (I !== null) return Promise.reject(I);
        if (this[u]) return Promise.resolve(m(void 0, true));
        if (this[b].destroyed) return new Promise(function(x, R) {
          process.nextTick(function() {
            S[r] ? R(S[r]) : x(m(void 0, true));
          });
        });
        var A = this[p], L;
        if (A) L = new Promise(l(A, this));
        else {
          var q = this[b].read();
          if (q !== null) return Promise.resolve(m(q, false));
          L = new Promise(this[s]);
        }
        return this[p] = L, L;
      }
    }, c(e, Symbol.asyncIterator, function() {
      return this;
    }), c(e, "return", function() {
      var S = this;
      return new Promise(function(I, A) {
        S[b].destroy(null, function(L) {
          if (L) {
            A(L);
            return;
          }
          I(m(void 0, true));
        });
      });
    }), e), w), E = function(S) {
      var I, A = Object.create(y, (I = {}, c(I, b, {
        value: S,
        writable: true
      }), c(I, o, {
        value: null,
        writable: true
      }), c(I, n, {
        value: null,
        writable: true
      }), c(I, r, {
        value: null,
        writable: true
      }), c(I, u, {
        value: S._readableState.endEmitted,
        writable: true
      }), c(I, s, {
        value: function(q, x) {
          var R = A[b].read();
          R ? (A[p] = null, A[o] = null, A[n] = null, q(m(R, false))) : (A[o] = q, A[n] = x);
        },
        writable: true
      }), I));
      return A[p] = null, v(S, function(L) {
        if (L && L.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var q = A[n];
          q !== null && (A[p] = null, A[o] = null, A[n] = null, q(L)), A[r] = L;
          return;
        }
        var x = A[o];
        x !== null && (A[p] = null, A[o] = null, A[n] = null, x(m(void 0, true))), A[u] = true;
      }), S.on("readable", h.bind(null, A)), A;
    };
    return bn = E, bn;
  }
  var gn, da;
  function tl() {
    return da || (da = 1, gn = function() {
      throw new Error("Readable.from is not available in the browser");
    }), gn;
  }
  var yn, ha;
  function ps() {
    if (ha) return yn;
    ha = 1, yn = x;
    var e;
    x.ReadableState = q, dt.EventEmitter;
    var c = function(U, J) {
      return U.listeners(J).length;
    }, d = ls(), a = tr().Buffer, v = (typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
    };
    function o(P) {
      return a.from(P);
    }
    function n(P) {
      return a.isBuffer(P) || P instanceof v;
    }
    var r = dt, u;
    r && r.debuglog ? u = r.debuglog("stream") : u = function() {
    };
    var p = Qc(), s = fs(), b = ds(), m = b.getHighWaterMark, f = Kr().codes, h = f.ERR_INVALID_ARG_TYPE, l = f.ERR_STREAM_PUSH_AFTER_EOF, w = f.ERR_METHOD_NOT_IMPLEMENTED, y = f.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, E, _, S;
    Pe()(x, d);
    var I = s.errorOrDestroy, A = [
      "error",
      "close",
      "destroy",
      "pause",
      "resume"
    ];
    function L(P, U, J) {
      if (typeof P.prependListener == "function") return P.prependListener(U, J);
      !P._events || !P._events[U] ? P.on(U, J) : Array.isArray(P._events[U]) ? P._events[U].unshift(J) : P._events[U] = [
        J,
        P._events[U]
      ];
    }
    function q(P, U, J) {
      e = e || jr(), P = P || {}, typeof J != "boolean" && (J = U instanceof e), this.objectMode = !!P.objectMode, J && (this.objectMode = this.objectMode || !!P.readableObjectMode), this.highWaterMark = m(this, P, "readableHighWaterMark", J), this.buffer = new p(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = P.emitClose !== false, this.autoDestroy = !!P.autoDestroy, this.destroyed = false, this.defaultEncoding = P.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, P.encoding && (E || (E = Dn().StringDecoder), this.decoder = new E(P.encoding), this.encoding = P.encoding);
    }
    function x(P) {
      if (e = e || jr(), !(this instanceof x)) return new x(P);
      var U = this instanceof e;
      this._readableState = new q(P, this, U), this.readable = true, P && (typeof P.read == "function" && (this._read = P.read), typeof P.destroy == "function" && (this._destroy = P.destroy)), d.call(this);
    }
    Object.defineProperty(x.prototype, "destroyed", {
      enumerable: false,
      get: function() {
        return this._readableState === void 0 ? false : this._readableState.destroyed;
      },
      set: function(U) {
        this._readableState && (this._readableState.destroyed = U);
      }
    }), x.prototype.destroy = s.destroy, x.prototype._undestroy = s.undestroy, x.prototype._destroy = function(P, U) {
      U(P);
    }, x.prototype.push = function(P, U) {
      var J = this._readableState, te;
      return J.objectMode ? te = true : typeof P == "string" && (U = U || J.defaultEncoding, U !== J.encoding && (P = a.from(P, U), U = ""), te = true), R(this, P, U, false, te);
    }, x.prototype.unshift = function(P) {
      return R(this, P, null, true, false);
    };
    function R(P, U, J, te, le) {
      u("readableAddChunk", U);
      var ae = P._readableState;
      if (U === null) ae.reading = false, ee(P, ae);
      else {
        var fe;
        if (le || (fe = F(ae, U)), fe) I(P, fe);
        else if (ae.objectMode || U && U.length > 0) if (typeof U != "string" && !ae.objectMode && Object.getPrototypeOf(U) !== a.prototype && (U = o(U)), te) ae.endEmitted ? I(P, new y()) : z(P, ae, U, true);
        else if (ae.ended) I(P, new l());
        else {
          if (ae.destroyed) return false;
          ae.reading = false, ae.decoder && !J ? (U = ae.decoder.write(U), ae.objectMode || U.length !== 0 ? z(P, ae, U, false) : O(P, ae)) : z(P, ae, U, false);
        }
        else te || (ae.reading = false, O(P, ae));
      }
      return !ae.ended && (ae.length < ae.highWaterMark || ae.length === 0);
    }
    function z(P, U, J, te) {
      U.flowing && U.length === 0 && !U.sync ? (U.awaitDrain = 0, P.emit("data", J)) : (U.length += U.objectMode ? 1 : J.length, te ? U.buffer.unshift(J) : U.buffer.push(J), U.needReadable && re(P)), O(P, U);
    }
    function F(P, U) {
      var J;
      return !n(U) && typeof U != "string" && U !== void 0 && !P.objectMode && (J = new h("chunk", [
        "string",
        "Buffer",
        "Uint8Array"
      ], U)), J;
    }
    x.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    }, x.prototype.setEncoding = function(P) {
      E || (E = Dn().StringDecoder);
      var U = new E(P);
      this._readableState.decoder = U, this._readableState.encoding = this._readableState.decoder.encoding;
      for (var J = this._readableState.buffer.head, te = ""; J !== null; ) te += U.write(J.data), J = J.next;
      return this._readableState.buffer.clear(), te !== "" && this._readableState.buffer.push(te), this._readableState.length = te.length, this;
    };
    var C = 1073741824;
    function G(P) {
      return P >= C ? P = C : (P--, P |= P >>> 1, P |= P >>> 2, P |= P >>> 4, P |= P >>> 8, P |= P >>> 16, P++), P;
    }
    function Q(P, U) {
      return P <= 0 || U.length === 0 && U.ended ? 0 : U.objectMode ? 1 : P !== P ? U.flowing && U.length ? U.buffer.head.data.length : U.length : (P > U.highWaterMark && (U.highWaterMark = G(P)), P <= U.length ? P : U.ended ? U.length : (U.needReadable = true, 0));
    }
    x.prototype.read = function(P) {
      u("read", P), P = parseInt(P, 10);
      var U = this._readableState, J = P;
      if (P !== 0 && (U.emittedReadable = false), P === 0 && U.needReadable && ((U.highWaterMark !== 0 ? U.length >= U.highWaterMark : U.length > 0) || U.ended)) return u("read: emitReadable", U.length, U.ended), U.length === 0 && U.ended ? W(this) : re(this), null;
      if (P = Q(P, U), P === 0 && U.ended) return U.length === 0 && W(this), null;
      var te = U.needReadable;
      u("need readable", te), (U.length === 0 || U.length - P < U.highWaterMark) && (te = true, u("length less than watermark", te)), U.ended || U.reading ? (te = false, u("reading or ended", te)) : te && (u("do read"), U.reading = true, U.sync = true, U.length === 0 && (U.needReadable = true), this._read(U.highWaterMark), U.sync = false, U.reading || (P = Q(J, U)));
      var le;
      return P > 0 ? le = j(P, U) : le = null, le === null ? (U.needReadable = U.length <= U.highWaterMark, P = 0) : (U.length -= P, U.awaitDrain = 0), U.length === 0 && (U.ended || (U.needReadable = true), J !== P && U.ended && W(this)), le !== null && this.emit("data", le), le;
    };
    function ee(P, U) {
      if (u("onEofChunk"), !U.ended) {
        if (U.decoder) {
          var J = U.decoder.end();
          J && J.length && (U.buffer.push(J), U.length += U.objectMode ? 1 : J.length);
        }
        U.ended = true, U.sync ? re(P) : (U.needReadable = false, U.emittedReadable || (U.emittedReadable = true, D(P)));
      }
    }
    function re(P) {
      var U = P._readableState;
      u("emitReadable", U.needReadable, U.emittedReadable), U.needReadable = false, U.emittedReadable || (u("emitReadable", U.flowing), U.emittedReadable = true, process.nextTick(D, P));
    }
    function D(P) {
      var U = P._readableState;
      u("emitReadable_", U.destroyed, U.length, U.ended), !U.destroyed && (U.length || U.ended) && (P.emit("readable"), U.emittedReadable = false), U.needReadable = !U.flowing && !U.ended && U.length <= U.highWaterMark, N(P);
    }
    function O(P, U) {
      U.readingMore || (U.readingMore = true, process.nextTick(K, P, U));
    }
    function K(P, U) {
      for (; !U.reading && !U.ended && (U.length < U.highWaterMark || U.flowing && U.length === 0); ) {
        var J = U.length;
        if (u("maybeReadMore read 0"), P.read(0), J === U.length) break;
      }
      U.readingMore = false;
    }
    x.prototype._read = function(P) {
      I(this, new w("_read()"));
    }, x.prototype.pipe = function(P, U) {
      var J = this, te = this._readableState;
      switch (te.pipesCount) {
        case 0:
          te.pipes = P;
          break;
        case 1:
          te.pipes = [
            te.pipes,
            P
          ];
          break;
        default:
          te.pipes.push(P);
          break;
      }
      te.pipesCount += 1, u("pipe count=%d opts=%j", te.pipesCount, U);
      var le = (!U || U.end !== false) && P !== process.stdout && P !== process.stderr, ae = le ? ge : Ye;
      te.endEmitted ? process.nextTick(ae) : J.once("end", ae), P.on("unpipe", fe);
      function fe(T, i) {
        u("onunpipe"), T === J && i && i.hasUnpiped === false && (i.hasUnpiped = true, me());
      }
      function ge() {
        u("onend"), P.end();
      }
      var xe = V(J);
      P.on("drain", xe);
      var Oe = false;
      function me() {
        u("cleanup"), P.removeListener("close", Me), P.removeListener("finish", Ie), P.removeListener("drain", xe), P.removeListener("error", Ne), P.removeListener("unpipe", fe), J.removeListener("end", ge), J.removeListener("end", Ye), J.removeListener("data", be), Oe = true, te.awaitDrain && (!P._writableState || P._writableState.needDrain) && xe();
      }
      J.on("data", be);
      function be(T) {
        u("ondata");
        var i = P.write(T);
        u("dest.write", i), i === false && ((te.pipesCount === 1 && te.pipes === P || te.pipesCount > 1 && ie(te.pipes, P) !== -1) && !Oe && (u("false write response, pause", te.awaitDrain), te.awaitDrain++), J.pause());
      }
      function Ne(T) {
        u("onerror", T), Ye(), P.removeListener("error", Ne), c(P, "error") === 0 && I(P, T);
      }
      L(P, "error", Ne);
      function Me() {
        P.removeListener("finish", Ie), Ye();
      }
      P.once("close", Me);
      function Ie() {
        u("onfinish"), P.removeListener("close", Me), Ye();
      }
      P.once("finish", Ie);
      function Ye() {
        u("unpipe"), J.unpipe(P);
      }
      return P.emit("pipe", J), te.flowing || (u("pipe resume"), J.resume()), P;
    };
    function V(P) {
      return function() {
        var J = P._readableState;
        u("pipeOnDrain", J.awaitDrain), J.awaitDrain && J.awaitDrain--, J.awaitDrain === 0 && c(P, "data") && (J.flowing = true, N(P));
      };
    }
    x.prototype.unpipe = function(P) {
      var U = this._readableState, J = {
        hasUnpiped: false
      };
      if (U.pipesCount === 0) return this;
      if (U.pipesCount === 1) return P && P !== U.pipes ? this : (P || (P = U.pipes), U.pipes = null, U.pipesCount = 0, U.flowing = false, P && P.emit("unpipe", this, J), this);
      if (!P) {
        var te = U.pipes, le = U.pipesCount;
        U.pipes = null, U.pipesCount = 0, U.flowing = false;
        for (var ae = 0; ae < le; ae++) te[ae].emit("unpipe", this, {
          hasUnpiped: false
        });
        return this;
      }
      var fe = ie(U.pipes, P);
      return fe === -1 ? this : (U.pipes.splice(fe, 1), U.pipesCount -= 1, U.pipesCount === 1 && (U.pipes = U.pipes[0]), P.emit("unpipe", this, J), this);
    }, x.prototype.on = function(P, U) {
      var J = d.prototype.on.call(this, P, U), te = this._readableState;
      return P === "data" ? (te.readableListening = this.listenerCount("readable") > 0, te.flowing !== false && this.resume()) : P === "readable" && !te.endEmitted && !te.readableListening && (te.readableListening = te.needReadable = true, te.flowing = false, te.emittedReadable = false, u("on readable", te.length, te.reading), te.length ? re(this) : te.reading || process.nextTick(ue, this)), J;
    }, x.prototype.addListener = x.prototype.on, x.prototype.removeListener = function(P, U) {
      var J = d.prototype.removeListener.call(this, P, U);
      return P === "readable" && process.nextTick(Z, this), J;
    }, x.prototype.removeAllListeners = function(P) {
      var U = d.prototype.removeAllListeners.apply(this, arguments);
      return (P === "readable" || P === void 0) && process.nextTick(Z, this), U;
    };
    function Z(P) {
      var U = P._readableState;
      U.readableListening = P.listenerCount("readable") > 0, U.resumeScheduled && !U.paused ? U.flowing = true : P.listenerCount("data") > 0 && P.resume();
    }
    function ue(P) {
      u("readable nexttick read 0"), P.read(0);
    }
    x.prototype.resume = function() {
      var P = this._readableState;
      return P.flowing || (u("resume"), P.flowing = !P.readableListening, M(this, P)), P.paused = false, this;
    };
    function M(P, U) {
      U.resumeScheduled || (U.resumeScheduled = true, process.nextTick(Y, P, U));
    }
    function Y(P, U) {
      u("resume", U.reading), U.reading || P.read(0), U.resumeScheduled = false, P.emit("resume"), N(P), U.flowing && !U.reading && P.read(0);
    }
    x.prototype.pause = function() {
      return u("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (u("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
    };
    function N(P) {
      var U = P._readableState;
      for (u("flow", U.flowing); U.flowing && P.read() !== null; ) ;
    }
    x.prototype.wrap = function(P) {
      var U = this, J = this._readableState, te = false;
      P.on("end", function() {
        if (u("wrapped end"), J.decoder && !J.ended) {
          var fe = J.decoder.end();
          fe && fe.length && U.push(fe);
        }
        U.push(null);
      }), P.on("data", function(fe) {
        if (u("wrapped data"), J.decoder && (fe = J.decoder.write(fe)), !(J.objectMode && fe == null) && !(!J.objectMode && (!fe || !fe.length))) {
          var ge = U.push(fe);
          ge || (te = true, P.pause());
        }
      });
      for (var le in P) this[le] === void 0 && typeof P[le] == "function" && (this[le] = /* @__PURE__ */ function(ge) {
        return function() {
          return P[ge].apply(P, arguments);
        };
      }(le));
      for (var ae = 0; ae < A.length; ae++) P.on(A[ae], this.emit.bind(this, A[ae]));
      return this._read = function(fe) {
        u("wrapped _read", fe), te && (te = false, P.resume());
      }, this;
    }, typeof Symbol == "function" && (x.prototype[Symbol.asyncIterator] = function() {
      return _ === void 0 && (_ = rl()), _(this);
    }), Object.defineProperty(x.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    }), Object.defineProperty(x.prototype, "readableBuffer", {
      enumerable: false,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    }), Object.defineProperty(x.prototype, "readableFlowing", {
      enumerable: false,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(U) {
        this._readableState && (this._readableState.flowing = U);
      }
    }), x._fromList = j, Object.defineProperty(x.prototype, "readableLength", {
      enumerable: false,
      get: function() {
        return this._readableState.length;
      }
    });
    function j(P, U) {
      if (U.length === 0) return null;
      var J;
      return U.objectMode ? J = U.buffer.shift() : !P || P >= U.length ? (U.decoder ? J = U.buffer.join("") : U.buffer.length === 1 ? J = U.buffer.first() : J = U.buffer.concat(U.length), U.buffer.clear()) : J = U.buffer.consume(P, U.decoder), J;
    }
    function W(P) {
      var U = P._readableState;
      u("endReadable", U.endEmitted), U.endEmitted || (U.ended = true, process.nextTick($, U, P));
    }
    function $(P, U) {
      if (u("endReadableNT", P.endEmitted, P.length), !P.endEmitted && P.length === 0 && (P.endEmitted = true, U.readable = false, U.emit("end"), P.autoDestroy)) {
        var J = U._writableState;
        (!J || J.autoDestroy && J.finished) && U.destroy();
      }
    }
    typeof Symbol == "function" && (x.from = function(P, U) {
      return S === void 0 && (S = tl()), S(x, P, U);
    });
    function ie(P, U) {
      for (var J = 0, te = P.length; J < te; J++) if (P[J] === U) return J;
      return -1;
    }
    return yn;
  }
  var vn, pa;
  function ms() {
    if (pa) return vn;
    pa = 1, vn = r;
    var e = Kr().codes, c = e.ERR_METHOD_NOT_IMPLEMENTED, d = e.ERR_MULTIPLE_CALLBACK, a = e.ERR_TRANSFORM_ALREADY_TRANSFORMING, v = e.ERR_TRANSFORM_WITH_LENGTH_0, o = jr();
    Pe()(r, o);
    function n(s, b) {
      var m = this._transformState;
      m.transforming = false;
      var f = m.writecb;
      if (f === null) return this.emit("error", new d());
      m.writechunk = null, m.writecb = null, b != null && this.push(b), f(s);
      var h = this._readableState;
      h.reading = false, (h.needReadable || h.length < h.highWaterMark) && this._read(h.highWaterMark);
    }
    function r(s) {
      if (!(this instanceof r)) return new r(s);
      o.call(this, s), this._transformState = {
        afterTransform: n.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = true, this._readableState.sync = false, s && (typeof s.transform == "function" && (this._transform = s.transform), typeof s.flush == "function" && (this._flush = s.flush)), this.on("prefinish", u);
    }
    function u() {
      var s = this;
      typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(b, m) {
        p(s, b, m);
      }) : p(this, null, null);
    }
    r.prototype.push = function(s, b) {
      return this._transformState.needTransform = false, o.prototype.push.call(this, s, b);
    }, r.prototype._transform = function(s, b, m) {
      m(new c("_transform()"));
    }, r.prototype._write = function(s, b, m) {
      var f = this._transformState;
      if (f.writecb = m, f.writechunk = s, f.writeencoding = b, !f.transforming) {
        var h = this._readableState;
        (f.needTransform || h.needReadable || h.length < h.highWaterMark) && this._read(h.highWaterMark);
      }
    }, r.prototype._read = function(s) {
      var b = this._transformState;
      b.writechunk !== null && !b.transforming ? (b.transforming = true, this._transform(b.writechunk, b.writeencoding, b.afterTransform)) : b.needTransform = true;
    }, r.prototype._destroy = function(s, b) {
      o.prototype._destroy.call(this, s, function(m) {
        b(m);
      });
    };
    function p(s, b, m) {
      if (b) return s.emit("error", b);
      if (m != null && s.push(m), s._writableState.length) throw new v();
      if (s._transformState.transforming) throw new a();
      return s.push(null);
    }
    return vn;
  }
  var wn, ma;
  function nl() {
    if (ma) return wn;
    ma = 1, wn = c;
    var e = ms();
    Pe()(c, e);
    function c(d) {
      if (!(this instanceof c)) return new c(d);
      e.call(this, d);
    }
    return c.prototype._transform = function(d, a, v) {
      v(null, d);
    }, wn;
  }
  var _n, ba;
  function il() {
    if (ba) return _n;
    ba = 1;
    var e;
    function c(m) {
      var f = false;
      return function() {
        f || (f = true, m.apply(void 0, arguments));
      };
    }
    var d = Kr().codes, a = d.ERR_MISSING_ARGS, v = d.ERR_STREAM_DESTROYED;
    function o(m) {
      if (m) throw m;
    }
    function n(m) {
      return m.setHeader && typeof m.abort == "function";
    }
    function r(m, f, h, l) {
      l = c(l);
      var w = false;
      m.on("close", function() {
        w = true;
      }), e === void 0 && (e = ti()), e(m, {
        readable: f,
        writable: h
      }, function(E) {
        if (E) return l(E);
        w = true, l();
      });
      var y = false;
      return function(E) {
        if (!w && !y) {
          if (y = true, n(m)) return m.abort();
          if (typeof m.destroy == "function") return m.destroy();
          l(E || new v("pipe"));
        }
      };
    }
    function u(m) {
      m();
    }
    function p(m, f) {
      return m.pipe(f);
    }
    function s(m) {
      return !m.length || typeof m[m.length - 1] != "function" ? o : m.pop();
    }
    function b() {
      for (var m = arguments.length, f = new Array(m), h = 0; h < m; h++) f[h] = arguments[h];
      var l = s(f);
      if (Array.isArray(f[0]) && (f = f[0]), f.length < 2) throw new a("streams");
      var w, y = f.map(function(E, _) {
        var S = _ < f.length - 1, I = _ > 0;
        return r(E, S, I, function(A) {
          w || (w = A), A && y.forEach(u), !S && (y.forEach(u), l(w));
        });
      });
      return f.reduce(p);
    }
    return _n = b, _n;
  }
  var En, ga;
  function bs() {
    if (ga) return En;
    ga = 1, En = d;
    var e = dt.EventEmitter, c = Pe();
    c(d, e), d.Readable = ps(), d.Writable = hs(), d.Duplex = jr(), d.Transform = ms(), d.PassThrough = nl(), d.finished = ti(), d.pipeline = il(), d.Stream = d;
    function d() {
      e.call(this);
    }
    return d.prototype.pipe = function(a, v) {
      var o = this;
      function n(f) {
        a.writable && a.write(f) === false && o.pause && o.pause();
      }
      o.on("data", n);
      function r() {
        o.readable && o.resume && o.resume();
      }
      a.on("drain", r), !a._isStdio && (!v || v.end !== false) && (o.on("end", p), o.on("close", s));
      var u = false;
      function p() {
        u || (u = true, a.end());
      }
      function s() {
        u || (u = true, typeof a.destroy == "function" && a.destroy());
      }
      function b(f) {
        if (m(), e.listenerCount(this, "error") === 0) throw f;
      }
      o.on("error", b), a.on("error", b);
      function m() {
        o.removeListener("data", n), a.removeListener("drain", r), o.removeListener("end", p), o.removeListener("close", s), o.removeListener("error", b), a.removeListener("error", b), o.removeListener("end", m), o.removeListener("close", m), a.removeListener("close", m);
      }
      return o.on("end", m), o.on("close", m), a.on("close", m), a.emit("pipe", o), a;
    }, En;
  }
  var kn, ya;
  function gs() {
    if (ya) return kn;
    ya = 1;
    var e = Fe().Buffer, c = bs().Transform, d = Pe();
    function a(r) {
      c.call(this), this._block = e.allocUnsafe(r), this._blockSize = r, this._blockOffset = 0, this._length = [
        0,
        0,
        0,
        0
      ], this._finalized = false;
    }
    d(a, c), a.prototype._transform = function(r, u, p) {
      var s = null;
      try {
        this.update(r, u);
      } catch (b) {
        s = b;
      }
      p(s);
    }, a.prototype._flush = function(r) {
      var u = null;
      try {
        this.push(this.digest());
      } catch (p) {
        u = p;
      }
      r(u);
    };
    var v = typeof Uint8Array < "u", o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && ArrayBuffer.isView && (e.prototype instanceof Uint8Array || e.TYPED_ARRAY_SUPPORT);
    function n(r, u) {
      if (r instanceof e) return r;
      if (typeof r == "string") return e.from(r, u);
      if (o && ArrayBuffer.isView(r)) {
        if (r.byteLength === 0) return e.alloc(0);
        var p = e.from(r.buffer, r.byteOffset, r.byteLength);
        if (p.byteLength === r.byteLength) return p;
      }
      if (v && r instanceof Uint8Array || e.isBuffer(r) && r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r)) return e.from(r);
      throw new TypeError('The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.');
    }
    return a.prototype.update = function(r, u) {
      if (this._finalized) throw new Error("Digest already called");
      r = n(r, u);
      for (var p = this._block, s = 0; this._blockOffset + r.length - s >= this._blockSize; ) {
        for (var b = this._blockOffset; b < this._blockSize; ) p[b++] = r[s++];
        this._update(), this._blockOffset = 0;
      }
      for (; s < r.length; ) p[this._blockOffset++] = r[s++];
      for (var m = 0, f = r.length * 8; f > 0; ++m) this._length[m] += f, f = this._length[m] / 4294967296 | 0, f > 0 && (this._length[m] -= 4294967296 * f);
      return this;
    }, a.prototype._update = function() {
      throw new Error("_update is not implemented");
    }, a.prototype.digest = function(r) {
      if (this._finalized) throw new Error("Digest already called");
      this._finalized = true;
      var u = this._digest();
      r !== void 0 && (u = u.toString(r)), this._block.fill(0), this._blockOffset = 0;
      for (var p = 0; p < 4; ++p) this._length[p] = 0;
      return u;
    }, a.prototype._digest = function() {
      throw new Error("_digest is not implemented");
    }, kn = a, kn;
  }
  var Sn, va;
  function ol() {
    if (va) return Sn;
    va = 1;
    var e = Pe(), c = gs(), d = Fe().Buffer, a = new Array(16);
    function v() {
      c.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
    }
    e(v, c), v.prototype._update = function() {
      for (var s = a, b = 0; b < 16; ++b) s[b] = this._block.readInt32LE(b * 4);
      var m = this._a, f = this._b, h = this._c, l = this._d;
      m = n(m, f, h, l, s[0], 3614090360, 7), l = n(l, m, f, h, s[1], 3905402710, 12), h = n(h, l, m, f, s[2], 606105819, 17), f = n(f, h, l, m, s[3], 3250441966, 22), m = n(m, f, h, l, s[4], 4118548399, 7), l = n(l, m, f, h, s[5], 1200080426, 12), h = n(h, l, m, f, s[6], 2821735955, 17), f = n(f, h, l, m, s[7], 4249261313, 22), m = n(m, f, h, l, s[8], 1770035416, 7), l = n(l, m, f, h, s[9], 2336552879, 12), h = n(h, l, m, f, s[10], 4294925233, 17), f = n(f, h, l, m, s[11], 2304563134, 22), m = n(m, f, h, l, s[12], 1804603682, 7), l = n(l, m, f, h, s[13], 4254626195, 12), h = n(h, l, m, f, s[14], 2792965006, 17), f = n(f, h, l, m, s[15], 1236535329, 22), m = r(m, f, h, l, s[1], 4129170786, 5), l = r(l, m, f, h, s[6], 3225465664, 9), h = r(h, l, m, f, s[11], 643717713, 14), f = r(f, h, l, m, s[0], 3921069994, 20), m = r(m, f, h, l, s[5], 3593408605, 5), l = r(l, m, f, h, s[10], 38016083, 9), h = r(h, l, m, f, s[15], 3634488961, 14), f = r(f, h, l, m, s[4], 3889429448, 20), m = r(m, f, h, l, s[9], 568446438, 5), l = r(l, m, f, h, s[14], 3275163606, 9), h = r(h, l, m, f, s[3], 4107603335, 14), f = r(f, h, l, m, s[8], 1163531501, 20), m = r(m, f, h, l, s[13], 2850285829, 5), l = r(l, m, f, h, s[2], 4243563512, 9), h = r(h, l, m, f, s[7], 1735328473, 14), f = r(f, h, l, m, s[12], 2368359562, 20), m = u(m, f, h, l, s[5], 4294588738, 4), l = u(l, m, f, h, s[8], 2272392833, 11), h = u(h, l, m, f, s[11], 1839030562, 16), f = u(f, h, l, m, s[14], 4259657740, 23), m = u(m, f, h, l, s[1], 2763975236, 4), l = u(l, m, f, h, s[4], 1272893353, 11), h = u(h, l, m, f, s[7], 4139469664, 16), f = u(f, h, l, m, s[10], 3200236656, 23), m = u(m, f, h, l, s[13], 681279174, 4), l = u(l, m, f, h, s[0], 3936430074, 11), h = u(h, l, m, f, s[3], 3572445317, 16), f = u(f, h, l, m, s[6], 76029189, 23), m = u(m, f, h, l, s[9], 3654602809, 4), l = u(l, m, f, h, s[12], 3873151461, 11), h = u(h, l, m, f, s[15], 530742520, 16), f = u(f, h, l, m, s[2], 3299628645, 23), m = p(m, f, h, l, s[0], 4096336452, 6), l = p(l, m, f, h, s[7], 1126891415, 10), h = p(h, l, m, f, s[14], 2878612391, 15), f = p(f, h, l, m, s[5], 4237533241, 21), m = p(m, f, h, l, s[12], 1700485571, 6), l = p(l, m, f, h, s[3], 2399980690, 10), h = p(h, l, m, f, s[10], 4293915773, 15), f = p(f, h, l, m, s[1], 2240044497, 21), m = p(m, f, h, l, s[8], 1873313359, 6), l = p(l, m, f, h, s[15], 4264355552, 10), h = p(h, l, m, f, s[6], 2734768916, 15), f = p(f, h, l, m, s[13], 1309151649, 21), m = p(m, f, h, l, s[4], 4149444226, 6), l = p(l, m, f, h, s[11], 3174756917, 10), h = p(h, l, m, f, s[2], 718787259, 15), f = p(f, h, l, m, s[9], 3951481745, 21), this._a = this._a + m | 0, this._b = this._b + f | 0, this._c = this._c + h | 0, this._d = this._d + l | 0;
    }, v.prototype._digest = function() {
      this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var s = d.allocUnsafe(16);
      return s.writeInt32LE(this._a, 0), s.writeInt32LE(this._b, 4), s.writeInt32LE(this._c, 8), s.writeInt32LE(this._d, 12), s;
    };
    function o(s, b) {
      return s << b | s >>> 32 - b;
    }
    function n(s, b, m, f, h, l, w) {
      return o(s + (b & m | ~b & f) + h + l | 0, w) + b | 0;
    }
    function r(s, b, m, f, h, l, w) {
      return o(s + (b & f | m & ~f) + h + l | 0, w) + b | 0;
    }
    function u(s, b, m, f, h, l, w) {
      return o(s + (b ^ m ^ f) + h + l | 0, w) + b | 0;
    }
    function p(s, b, m, f, h, l, w) {
      return o(s + (m ^ (b | ~f)) + h + l | 0, w) + b | 0;
    }
    return Sn = v, Sn;
  }
  var Tn, wa;
  function al() {
    if (wa) return Tn;
    wa = 1;
    var e = tr().Buffer, c = Pe(), d = gs(), a = new Array(16), v = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      7,
      4,
      13,
      1,
      10,
      6,
      15,
      3,
      12,
      0,
      9,
      5,
      2,
      14,
      11,
      8,
      3,
      10,
      14,
      4,
      9,
      15,
      8,
      1,
      2,
      7,
      0,
      6,
      13,
      11,
      5,
      12,
      1,
      9,
      11,
      10,
      0,
      8,
      12,
      4,
      13,
      3,
      7,
      15,
      14,
      5,
      6,
      2,
      4,
      0,
      5,
      9,
      7,
      12,
      2,
      10,
      14,
      1,
      3,
      8,
      11,
      6,
      15,
      13
    ], o = [
      5,
      14,
      7,
      0,
      9,
      2,
      11,
      4,
      13,
      6,
      15,
      8,
      1,
      10,
      3,
      12,
      6,
      11,
      3,
      7,
      0,
      13,
      5,
      10,
      14,
      15,
      8,
      12,
      4,
      9,
      1,
      2,
      15,
      5,
      1,
      3,
      7,
      14,
      6,
      9,
      11,
      8,
      12,
      2,
      10,
      0,
      4,
      13,
      8,
      6,
      4,
      1,
      3,
      11,
      15,
      0,
      5,
      12,
      2,
      13,
      9,
      7,
      10,
      14,
      12,
      15,
      10,
      4,
      1,
      5,
      8,
      7,
      6,
      2,
      13,
      14,
      0,
      3,
      9,
      11
    ], n = [
      11,
      14,
      15,
      12,
      5,
      8,
      7,
      9,
      11,
      13,
      14,
      15,
      6,
      7,
      9,
      8,
      7,
      6,
      8,
      13,
      11,
      9,
      7,
      15,
      7,
      12,
      15,
      9,
      11,
      7,
      13,
      12,
      11,
      13,
      6,
      7,
      14,
      9,
      13,
      15,
      14,
      8,
      13,
      6,
      5,
      12,
      7,
      5,
      11,
      12,
      14,
      15,
      14,
      15,
      9,
      8,
      9,
      14,
      5,
      6,
      8,
      6,
      5,
      12,
      9,
      15,
      5,
      11,
      6,
      8,
      13,
      12,
      5,
      12,
      13,
      14,
      11,
      8,
      5,
      6
    ], r = [
      8,
      9,
      9,
      11,
      13,
      15,
      15,
      5,
      7,
      7,
      8,
      11,
      14,
      14,
      12,
      6,
      9,
      13,
      15,
      7,
      12,
      8,
      9,
      11,
      7,
      7,
      12,
      7,
      6,
      15,
      13,
      11,
      9,
      7,
      15,
      11,
      8,
      6,
      6,
      14,
      12,
      13,
      5,
      14,
      13,
      13,
      7,
      5,
      15,
      5,
      8,
      11,
      14,
      14,
      6,
      14,
      6,
      9,
      12,
      9,
      12,
      5,
      15,
      8,
      8,
      5,
      12,
      9,
      12,
      5,
      14,
      6,
      8,
      13,
      6,
      5,
      15,
      13,
      11,
      11
    ], u = [
      0,
      1518500249,
      1859775393,
      2400959708,
      2840853838
    ], p = [
      1352829926,
      1548603684,
      1836072691,
      2053994217,
      0
    ];
    function s() {
      d.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
    }
    c(s, d), s.prototype._update = function() {
      for (var y = a, E = 0; E < 16; ++E) y[E] = this._block.readInt32LE(E * 4);
      for (var _ = this._a | 0, S = this._b | 0, I = this._c | 0, A = this._d | 0, L = this._e | 0, q = this._a | 0, x = this._b | 0, R = this._c | 0, z = this._d | 0, F = this._e | 0, C = 0; C < 80; C += 1) {
        var G, Q;
        C < 16 ? (G = m(_, S, I, A, L, y[v[C]], u[0], n[C]), Q = w(q, x, R, z, F, y[o[C]], p[0], r[C])) : C < 32 ? (G = f(_, S, I, A, L, y[v[C]], u[1], n[C]), Q = l(q, x, R, z, F, y[o[C]], p[1], r[C])) : C < 48 ? (G = h(_, S, I, A, L, y[v[C]], u[2], n[C]), Q = h(q, x, R, z, F, y[o[C]], p[2], r[C])) : C < 64 ? (G = l(_, S, I, A, L, y[v[C]], u[3], n[C]), Q = f(q, x, R, z, F, y[o[C]], p[3], r[C])) : (G = w(_, S, I, A, L, y[v[C]], u[4], n[C]), Q = m(q, x, R, z, F, y[o[C]], p[4], r[C])), _ = L, L = A, A = b(I, 10), I = S, S = G, q = F, F = z, z = b(R, 10), R = x, x = Q;
      }
      var ee = this._b + I + z | 0;
      this._b = this._c + A + F | 0, this._c = this._d + L + q | 0, this._d = this._e + _ + x | 0, this._e = this._a + S + R | 0, this._a = ee;
    }, s.prototype._digest = function() {
      this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var y = e.alloc ? e.alloc(20) : new e(20);
      return y.writeInt32LE(this._a, 0), y.writeInt32LE(this._b, 4), y.writeInt32LE(this._c, 8), y.writeInt32LE(this._d, 12), y.writeInt32LE(this._e, 16), y;
    };
    function b(y, E) {
      return y << E | y >>> 32 - E;
    }
    function m(y, E, _, S, I, A, L, q) {
      return b(y + (E ^ _ ^ S) + A + L | 0, q) + I | 0;
    }
    function f(y, E, _, S, I, A, L, q) {
      return b(y + (E & _ | ~E & S) + A + L | 0, q) + I | 0;
    }
    function h(y, E, _, S, I, A, L, q) {
      return b(y + ((E | ~_) ^ S) + A + L | 0, q) + I | 0;
    }
    function l(y, E, _, S, I, A, L, q) {
      return b(y + (E & S | _ & ~S) + A + L | 0, q) + I | 0;
    }
    function w(y, E, _, S, I, A, L, q) {
      return b(y + (E ^ (_ | ~S)) + A + L | 0, q) + I | 0;
    }
    return Tn = s, Tn;
  }
  var xn = {
    exports: {}
  }, In, _a;
  function Wr() {
    if (_a) return In;
    _a = 1;
    var e = Fe().Buffer;
    function c(d, a) {
      this._block = e.alloc(d), this._finalSize = a, this._blockSize = d, this._len = 0;
    }
    return c.prototype.update = function(d, a) {
      typeof d == "string" && (a = a || "utf8", d = e.from(d, a));
      for (var v = this._block, o = this._blockSize, n = d.length, r = this._len, u = 0; u < n; ) {
        for (var p = r % o, s = Math.min(n - u, o - p), b = 0; b < s; b++) v[p + b] = d[u + b];
        r += s, u += s, r % o === 0 && this._update(v);
      }
      return this._len += n, this;
    }, c.prototype.digest = function(d) {
      var a = this._len % this._blockSize;
      this._block[a] = 128, this._block.fill(0, a + 1), a >= this._finalSize && (this._update(this._block), this._block.fill(0));
      var v = this._len * 8;
      if (v <= 4294967295) this._block.writeUInt32BE(v, this._blockSize - 4);
      else {
        var o = (v & 4294967295) >>> 0, n = (v - o) / 4294967296;
        this._block.writeUInt32BE(n, this._blockSize - 8), this._block.writeUInt32BE(o, this._blockSize - 4);
      }
      this._update(this._block);
      var r = this._hash();
      return d ? r.toString(d) : r;
    }, c.prototype._update = function() {
      throw new Error("_update must be implemented by subclass");
    }, In = c, In;
  }
  var An, Ea;
  function sl() {
    if (Ea) return An;
    Ea = 1;
    var e = Pe(), c = Wr(), d = Fe().Buffer, a = [
      1518500249,
      1859775393,
      -1894007588,
      -899497514
    ], v = new Array(80);
    function o() {
      this.init(), this._w = v, c.call(this, 64, 56);
    }
    e(o, c), o.prototype.init = function() {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    };
    function n(p) {
      return p << 5 | p >>> 27;
    }
    function r(p) {
      return p << 30 | p >>> 2;
    }
    function u(p, s, b, m) {
      return p === 0 ? s & b | ~s & m : p === 2 ? s & b | s & m | b & m : s ^ b ^ m;
    }
    return o.prototype._update = function(p) {
      for (var s = this._w, b = this._a | 0, m = this._b | 0, f = this._c | 0, h = this._d | 0, l = this._e | 0, w = 0; w < 16; ++w) s[w] = p.readInt32BE(w * 4);
      for (; w < 80; ++w) s[w] = s[w - 3] ^ s[w - 8] ^ s[w - 14] ^ s[w - 16];
      for (var y = 0; y < 80; ++y) {
        var E = ~~(y / 20), _ = n(b) + u(E, m, f, h) + l + s[y] + a[E] | 0;
        l = h, h = f, f = r(m), m = b, b = _;
      }
      this._a = b + this._a | 0, this._b = m + this._b | 0, this._c = f + this._c | 0, this._d = h + this._d | 0, this._e = l + this._e | 0;
    }, o.prototype._hash = function() {
      var p = d.allocUnsafe(20);
      return p.writeInt32BE(this._a | 0, 0), p.writeInt32BE(this._b | 0, 4), p.writeInt32BE(this._c | 0, 8), p.writeInt32BE(this._d | 0, 12), p.writeInt32BE(this._e | 0, 16), p;
    }, An = o, An;
  }
  var Bn, ka;
  function ul() {
    if (ka) return Bn;
    ka = 1;
    var e = Pe(), c = Wr(), d = Fe().Buffer, a = [
      1518500249,
      1859775393,
      -1894007588,
      -899497514
    ], v = new Array(80);
    function o() {
      this.init(), this._w = v, c.call(this, 64, 56);
    }
    e(o, c), o.prototype.init = function() {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    };
    function n(s) {
      return s << 1 | s >>> 31;
    }
    function r(s) {
      return s << 5 | s >>> 27;
    }
    function u(s) {
      return s << 30 | s >>> 2;
    }
    function p(s, b, m, f) {
      return s === 0 ? b & m | ~b & f : s === 2 ? b & m | b & f | m & f : b ^ m ^ f;
    }
    return o.prototype._update = function(s) {
      for (var b = this._w, m = this._a | 0, f = this._b | 0, h = this._c | 0, l = this._d | 0, w = this._e | 0, y = 0; y < 16; ++y) b[y] = s.readInt32BE(y * 4);
      for (; y < 80; ++y) b[y] = n(b[y - 3] ^ b[y - 8] ^ b[y - 14] ^ b[y - 16]);
      for (var E = 0; E < 80; ++E) {
        var _ = ~~(E / 20), S = r(m) + p(_, f, h, l) + w + b[E] + a[_] | 0;
        w = l, l = h, h = u(f), f = m, m = S;
      }
      this._a = m + this._a | 0, this._b = f + this._b | 0, this._c = h + this._c | 0, this._d = l + this._d | 0, this._e = w + this._e | 0;
    }, o.prototype._hash = function() {
      var s = d.allocUnsafe(20);
      return s.writeInt32BE(this._a | 0, 0), s.writeInt32BE(this._b | 0, 4), s.writeInt32BE(this._c | 0, 8), s.writeInt32BE(this._d | 0, 12), s.writeInt32BE(this._e | 0, 16), s;
    }, Bn = o, Bn;
  }
  var Pn, Sa;
  function ys() {
    if (Sa) return Pn;
    Sa = 1;
    var e = Pe(), c = Wr(), d = Fe().Buffer, a = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ], v = new Array(64);
    function o() {
      this.init(), this._w = v, c.call(this, 64, 56);
    }
    e(o, c), o.prototype.init = function() {
      return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
    };
    function n(m, f, h) {
      return h ^ m & (f ^ h);
    }
    function r(m, f, h) {
      return m & f | h & (m | f);
    }
    function u(m) {
      return (m >>> 2 | m << 30) ^ (m >>> 13 | m << 19) ^ (m >>> 22 | m << 10);
    }
    function p(m) {
      return (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7);
    }
    function s(m) {
      return (m >>> 7 | m << 25) ^ (m >>> 18 | m << 14) ^ m >>> 3;
    }
    function b(m) {
      return (m >>> 17 | m << 15) ^ (m >>> 19 | m << 13) ^ m >>> 10;
    }
    return o.prototype._update = function(m) {
      for (var f = this._w, h = this._a | 0, l = this._b | 0, w = this._c | 0, y = this._d | 0, E = this._e | 0, _ = this._f | 0, S = this._g | 0, I = this._h | 0, A = 0; A < 16; ++A) f[A] = m.readInt32BE(A * 4);
      for (; A < 64; ++A) f[A] = b(f[A - 2]) + f[A - 7] + s(f[A - 15]) + f[A - 16] | 0;
      for (var L = 0; L < 64; ++L) {
        var q = I + p(E) + n(E, _, S) + a[L] + f[L] | 0, x = u(h) + r(h, l, w) | 0;
        I = S, S = _, _ = E, E = y + q | 0, y = w, w = l, l = h, h = q + x | 0;
      }
      this._a = h + this._a | 0, this._b = l + this._b | 0, this._c = w + this._c | 0, this._d = y + this._d | 0, this._e = E + this._e | 0, this._f = _ + this._f | 0, this._g = S + this._g | 0, this._h = I + this._h | 0;
    }, o.prototype._hash = function() {
      var m = d.allocUnsafe(32);
      return m.writeInt32BE(this._a, 0), m.writeInt32BE(this._b, 4), m.writeInt32BE(this._c, 8), m.writeInt32BE(this._d, 12), m.writeInt32BE(this._e, 16), m.writeInt32BE(this._f, 20), m.writeInt32BE(this._g, 24), m.writeInt32BE(this._h, 28), m;
    }, Pn = o, Pn;
  }
  var On, Ta;
  function cl() {
    if (Ta) return On;
    Ta = 1;
    var e = Pe(), c = ys(), d = Wr(), a = Fe().Buffer, v = new Array(64);
    function o() {
      this.init(), this._w = v, d.call(this, 64, 56);
    }
    return e(o, c), o.prototype.init = function() {
      return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
    }, o.prototype._hash = function() {
      var n = a.allocUnsafe(28);
      return n.writeInt32BE(this._a, 0), n.writeInt32BE(this._b, 4), n.writeInt32BE(this._c, 8), n.writeInt32BE(this._d, 12), n.writeInt32BE(this._e, 16), n.writeInt32BE(this._f, 20), n.writeInt32BE(this._g, 24), n;
    }, On = o, On;
  }
  var Rn, xa;
  function vs() {
    if (xa) return Rn;
    xa = 1;
    var e = Pe(), c = Wr(), d = Fe().Buffer, a = [
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ], v = new Array(160);
    function o() {
      this.init(), this._w = v, c.call(this, 128, 112);
    }
    e(o, c), o.prototype.init = function() {
      return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
    };
    function n(l, w, y) {
      return y ^ l & (w ^ y);
    }
    function r(l, w, y) {
      return l & w | y & (l | w);
    }
    function u(l, w) {
      return (l >>> 28 | w << 4) ^ (w >>> 2 | l << 30) ^ (w >>> 7 | l << 25);
    }
    function p(l, w) {
      return (l >>> 14 | w << 18) ^ (l >>> 18 | w << 14) ^ (w >>> 9 | l << 23);
    }
    function s(l, w) {
      return (l >>> 1 | w << 31) ^ (l >>> 8 | w << 24) ^ l >>> 7;
    }
    function b(l, w) {
      return (l >>> 1 | w << 31) ^ (l >>> 8 | w << 24) ^ (l >>> 7 | w << 25);
    }
    function m(l, w) {
      return (l >>> 19 | w << 13) ^ (w >>> 29 | l << 3) ^ l >>> 6;
    }
    function f(l, w) {
      return (l >>> 19 | w << 13) ^ (w >>> 29 | l << 3) ^ (l >>> 6 | w << 26);
    }
    function h(l, w) {
      return l >>> 0 < w >>> 0 ? 1 : 0;
    }
    return o.prototype._update = function(l) {
      for (var w = this._w, y = this._ah | 0, E = this._bh | 0, _ = this._ch | 0, S = this._dh | 0, I = this._eh | 0, A = this._fh | 0, L = this._gh | 0, q = this._hh | 0, x = this._al | 0, R = this._bl | 0, z = this._cl | 0, F = this._dl | 0, C = this._el | 0, G = this._fl | 0, Q = this._gl | 0, ee = this._hl | 0, re = 0; re < 32; re += 2) w[re] = l.readInt32BE(re * 4), w[re + 1] = l.readInt32BE(re * 4 + 4);
      for (; re < 160; re += 2) {
        var D = w[re - 30], O = w[re - 15 * 2 + 1], K = s(D, O), V = b(O, D);
        D = w[re - 2 * 2], O = w[re - 2 * 2 + 1];
        var Z = m(D, O), ue = f(O, D), M = w[re - 7 * 2], Y = w[re - 7 * 2 + 1], N = w[re - 16 * 2], j = w[re - 16 * 2 + 1], W = V + Y | 0, $ = K + M + h(W, V) | 0;
        W = W + ue | 0, $ = $ + Z + h(W, ue) | 0, W = W + j | 0, $ = $ + N + h(W, j) | 0, w[re] = $, w[re + 1] = W;
      }
      for (var ie = 0; ie < 160; ie += 2) {
        $ = w[ie], W = w[ie + 1];
        var P = r(y, E, _), U = r(x, R, z), J = u(y, x), te = u(x, y), le = p(I, C), ae = p(C, I), fe = a[ie], ge = a[ie + 1], xe = n(I, A, L), Oe = n(C, G, Q), me = ee + ae | 0, be = q + le + h(me, ee) | 0;
        me = me + Oe | 0, be = be + xe + h(me, Oe) | 0, me = me + ge | 0, be = be + fe + h(me, ge) | 0, me = me + W | 0, be = be + $ + h(me, W) | 0;
        var Ne = te + U | 0, Me = J + P + h(Ne, te) | 0;
        q = L, ee = Q, L = A, Q = G, A = I, G = C, C = F + me | 0, I = S + be + h(C, F) | 0, S = _, F = z, _ = E, z = R, E = y, R = x, x = me + Ne | 0, y = be + Me + h(x, me) | 0;
      }
      this._al = this._al + x | 0, this._bl = this._bl + R | 0, this._cl = this._cl + z | 0, this._dl = this._dl + F | 0, this._el = this._el + C | 0, this._fl = this._fl + G | 0, this._gl = this._gl + Q | 0, this._hl = this._hl + ee | 0, this._ah = this._ah + y + h(this._al, x) | 0, this._bh = this._bh + E + h(this._bl, R) | 0, this._ch = this._ch + _ + h(this._cl, z) | 0, this._dh = this._dh + S + h(this._dl, F) | 0, this._eh = this._eh + I + h(this._el, C) | 0, this._fh = this._fh + A + h(this._fl, G) | 0, this._gh = this._gh + L + h(this._gl, Q) | 0, this._hh = this._hh + q + h(this._hl, ee) | 0;
    }, o.prototype._hash = function() {
      var l = d.allocUnsafe(64);
      function w(y, E, _) {
        l.writeInt32BE(y, _), l.writeInt32BE(E, _ + 4);
      }
      return w(this._ah, this._al, 0), w(this._bh, this._bl, 8), w(this._ch, this._cl, 16), w(this._dh, this._dl, 24), w(this._eh, this._el, 32), w(this._fh, this._fl, 40), w(this._gh, this._gl, 48), w(this._hh, this._hl, 56), l;
    }, Rn = o, Rn;
  }
  var Un, Ia;
  function ll() {
    if (Ia) return Un;
    Ia = 1;
    var e = Pe(), c = vs(), d = Wr(), a = Fe().Buffer, v = new Array(160);
    function o() {
      this.init(), this._w = v, d.call(this, 128, 112);
    }
    return e(o, c), o.prototype.init = function() {
      return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
    }, o.prototype._hash = function() {
      var n = a.allocUnsafe(48);
      function r(u, p, s) {
        n.writeInt32BE(u, s), n.writeInt32BE(p, s + 4);
      }
      return r(this._ah, this._al, 0), r(this._bh, this._bl, 8), r(this._ch, this._cl, 16), r(this._dh, this._dl, 24), r(this._eh, this._el, 32), r(this._fh, this._fl, 40), n;
    }, Un = o, Un;
  }
  var Aa;
  function fl() {
    if (Aa) return xn.exports;
    Aa = 1;
    var e = xn.exports = function(d) {
      d = d.toLowerCase();
      var a = e[d];
      if (!a) throw new Error(d + " is not supported (we accept pull requests)");
      return new a();
    };
    return e.sha = sl(), e.sha1 = ul(), e.sha224 = cl(), e.sha256 = ys(), e.sha384 = ll(), e.sha512 = vs(), xn.exports;
  }
  var zn, Ba;
  function dl() {
    if (Ba) return zn;
    Ba = 1;
    var e = Fe().Buffer, c = bs().Transform, d = Dn().StringDecoder, a = Pe();
    function v(u) {
      c.call(this), this.hashMode = typeof u == "string", this.hashMode ? this[u] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
    }
    a(v, c);
    var o = typeof Uint8Array < "u", n = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && ArrayBuffer.isView && (e.prototype instanceof Uint8Array || e.TYPED_ARRAY_SUPPORT);
    function r(u, p) {
      if (u instanceof e) return u;
      if (typeof u == "string") return e.from(u, p);
      if (n && ArrayBuffer.isView(u)) {
        if (u.byteLength === 0) return e.alloc(0);
        var s = e.from(u.buffer, u.byteOffset, u.byteLength);
        if (s.byteLength === u.byteLength) return s;
      }
      if (o && u instanceof Uint8Array || e.isBuffer(u) && u.constructor && typeof u.constructor.isBuffer == "function" && u.constructor.isBuffer(u)) return e.from(u);
      throw new TypeError('The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.');
    }
    return v.prototype.update = function(u, p, s) {
      var b = r(u, p), m = this._update(b);
      return this.hashMode ? this : (s && (m = this._toString(m, s)), m);
    }, v.prototype.setAutoPadding = function() {
    }, v.prototype.getAuthTag = function() {
      throw new Error("trying to get auth tag in unsupported state");
    }, v.prototype.setAuthTag = function() {
      throw new Error("trying to set auth tag in unsupported state");
    }, v.prototype.setAAD = function() {
      throw new Error("trying to set aad in unsupported state");
    }, v.prototype._transform = function(u, p, s) {
      var b;
      try {
        this.hashMode ? this._update(u) : this.push(this._update(u));
      } catch (m) {
        b = m;
      } finally {
        s(b);
      }
    }, v.prototype._flush = function(u) {
      var p;
      try {
        this.push(this.__final());
      } catch (s) {
        p = s;
      }
      u(p);
    }, v.prototype._finalOrDigest = function(u) {
      var p = this.__final() || e.alloc(0);
      return u && (p = this._toString(p, u, true)), p;
    }, v.prototype._toString = function(u, p, s) {
      if (this._decoder || (this._decoder = new d(p), this._encoding = p), this._encoding !== p) throw new Error("can\u2019t switch encodings");
      var b = this._decoder.write(u);
      return s && (b += this._decoder.end()), b;
    }, zn = v, zn;
  }
  var Nn, Pa;
  function hl() {
    if (Pa) return Nn;
    Pa = 1;
    var e = Pe(), c = ol(), d = al(), a = fl(), v = dl();
    function o(n) {
      v.call(this, "digest"), this._hash = n;
    }
    return e(o, v), o.prototype._update = function(n) {
      this._hash.update(n);
    }, o.prototype._final = function() {
      return this._hash.digest();
    }, Nn = function(r) {
      return r = r.toLowerCase(), r === "md5" ? new c() : r === "rmd160" || r === "ripemd160" ? new d() : new o(a(r));
    }, Nn;
  }
  var Hn, Oa;
  function pl() {
    if (Oa) return Hn;
    Oa = 1;
    var e = Fe().Buffer;
    function c(d) {
      if (d.length >= 255) throw new TypeError("Alphabet too long");
      for (var a = new Uint8Array(256), v = 0; v < a.length; v++) a[v] = 255;
      for (var o = 0; o < d.length; o++) {
        var n = d.charAt(o), r = n.charCodeAt(0);
        if (a[r] !== 255) throw new TypeError(n + " is ambiguous");
        a[r] = o;
      }
      var u = d.length, p = d.charAt(0), s = Math.log(u) / Math.log(256), b = Math.log(256) / Math.log(u);
      function m(l) {
        if ((Array.isArray(l) || l instanceof Uint8Array) && (l = e.from(l)), !e.isBuffer(l)) throw new TypeError("Expected Buffer");
        if (l.length === 0) return "";
        for (var w = 0, y = 0, E = 0, _ = l.length; E !== _ && l[E] === 0; ) E++, w++;
        for (var S = (_ - E) * b + 1 >>> 0, I = new Uint8Array(S); E !== _; ) {
          for (var A = l[E], L = 0, q = S - 1; (A !== 0 || L < y) && q !== -1; q--, L++) A += 256 * I[q] >>> 0, I[q] = A % u >>> 0, A = A / u >>> 0;
          if (A !== 0) throw new Error("Non-zero carry");
          y = L, E++;
        }
        for (var x = S - y; x !== S && I[x] === 0; ) x++;
        for (var R = p.repeat(w); x < S; ++x) R += d.charAt(I[x]);
        return R;
      }
      function f(l) {
        if (typeof l != "string") throw new TypeError("Expected String");
        if (l.length === 0) return e.alloc(0);
        for (var w = 0, y = 0, E = 0; l[w] === p; ) y++, w++;
        for (var _ = (l.length - w) * s + 1 >>> 0, S = new Uint8Array(_); w < l.length; ) {
          var I = l.charCodeAt(w);
          if (I > 255) return;
          var A = a[I];
          if (A === 255) return;
          for (var L = 0, q = _ - 1; (A !== 0 || L < E) && q !== -1; q--, L++) A += u * S[q] >>> 0, S[q] = A % 256 >>> 0, A = A / 256 >>> 0;
          if (A !== 0) throw new Error("Non-zero carry");
          E = L, w++;
        }
        for (var x = _ - E; x !== _ && S[x] === 0; ) x++;
        var R = e.allocUnsafe(y + (_ - x));
        R.fill(0, 0, y);
        for (var z = y; x !== _; ) R[z++] = S[x++];
        return R;
      }
      function h(l) {
        var w = f(l);
        if (w) return w;
        throw new Error("Non-base" + u + " character");
      }
      return {
        encode: m,
        decodeUnsafe: f,
        decode: h
      };
    }
    return Hn = c, Hn;
  }
  var Cn, Ra;
  function ml() {
    if (Ra) return Cn;
    Ra = 1;
    var e = pl(), c = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    return Cn = e(c), Cn;
  }
  var Ln, Ua;
  function bl() {
    if (Ua) return Ln;
    Ua = 1;
    var e = ml(), c = Fe().Buffer;
    return Ln = function(d) {
      function a(r) {
        var u = d(r);
        return e.encode(c.concat([
          r,
          u
        ], r.length + 4));
      }
      function v(r) {
        var u = r.slice(0, -4), p = r.slice(-4), s = d(u);
        if (!(p[0] ^ s[0] | p[1] ^ s[1] | p[2] ^ s[2] | p[3] ^ s[3])) return u;
      }
      function o(r) {
        var u = e.decodeUnsafe(r);
        if (u) return v(u);
      }
      function n(r) {
        var u = e.decode(r), p = v(u);
        if (!p) throw new Error("Invalid checksum");
        return p;
      }
      return {
        encode: a,
        decode: n,
        decodeUnsafe: o
      };
    }, Ln;
  }
  var jn, za;
  function gl() {
    if (za) return jn;
    za = 1;
    var e = hl(), c = bl();
    function d(a) {
      var v = e("sha256").update(a).digest();
      return e("sha256").update(v).digest();
    }
    return jn = c(d), jn;
  }
  var qn, Na;
  function yl() {
    if (Na) return qn;
    Na = 1;
    var e = gl();
    function c(o, n) {
      if (n !== void 0 && o[0] !== n) throw new Error("Invalid network version");
      if (o.length === 33) return {
        version: o[0],
        privateKey: o.slice(1, 33),
        compressed: false
      };
      if (o.length !== 34) throw new Error("Invalid WIF length");
      if (o[33] !== 1) throw new Error("Invalid compression flag");
      return {
        version: o[0],
        privateKey: o.slice(1, 33),
        compressed: true
      };
    }
    function d(o, n, r) {
      var u = new Buffer(r ? 34 : 33);
      return u.writeUInt8(o, 0), n.copy(u, 1), r && (u[33] = 1), u;
    }
    function a(o, n) {
      return c(e.decode(o), n);
    }
    function v(o, n, r) {
      return typeof o == "number" ? e.encode(d(o, n, r)) : e.encode(d(o.version, o.privateKey, o.compressed));
    }
    return qn = {
      decode: a,
      decodeRaw: c,
      encode: v,
      encodeRaw: d
    }, qn;
  }
  var Ha;
  function vl() {
    if (Ha) return ut;
    Ha = 1, Object.defineProperty(ut, "__esModule", {
      value: true
    }), ut.BIP32Factory = void 0;
    const e = Gc(), c = $c(), d = Xc(), a = ht(), v = Ka(), o = yl(), n = (0, d.base58check)(a.sha256), r = {
      encode: (p) => n.encode(Uint8Array.from(p)),
      decode: (p) => Buffer.from(n.decode(p))
    };
    function u(p) {
      (0, c.testEcc)(p);
      const s = v.BufferN(32), b = v.compile({
        wif: v.UInt8,
        bip32: {
          public: v.UInt32,
          private: v.UInt32
        }
      }), m = {
        messagePrefix: `Bitcoin Signed Message:
`,
        bech32: "bc",
        bip32: {
          public: 76067358,
          private: 76066276
        },
        pubKeyHash: 0,
        scriptHash: 5,
        wif: 128
      }, f = 2147483648, h = Math.pow(2, 31) - 1;
      function l(R) {
        return v.String(R) && R.match(/^(m\/)?(\d+'?\/)*\d+'?$/) !== null;
      }
      function w(R) {
        return v.UInt32(R) && R <= h;
      }
      function y(R) {
        return R.length === 32 ? R : R.slice(1, 33);
      }
      class E {
        constructor(z, F) {
          this.__D = z, this.__Q = F, this.lowR = false;
        }
        get publicKey() {
          return this.__Q === void 0 && (this.__Q = Buffer.from(p.pointFromScalar(this.__D, true))), this.__Q;
        }
        get privateKey() {
          return this.__D;
        }
        sign(z, F) {
          if (!this.privateKey) throw new Error("Missing private key");
          if (F === void 0 && (F = this.lowR), F === false) return Buffer.from(p.sign(z, this.privateKey));
          {
            let C = Buffer.from(p.sign(z, this.privateKey));
            const G = Buffer.alloc(32, 0);
            let Q = 0;
            for (; C[0] > 127; ) Q++, G.writeUIntLE(Q, 0, 6), C = Buffer.from(p.sign(z, this.privateKey, G));
            return C;
          }
        }
        signSchnorr(z) {
          if (!this.privateKey) throw new Error("Missing private key");
          if (!p.signSchnorr) throw new Error("signSchnorr not supported by ecc library");
          return Buffer.from(p.signSchnorr(z, this.privateKey));
        }
        verify(z, F) {
          return p.verify(z, this.publicKey, F);
        }
        verifySchnorr(z, F) {
          if (!p.verifySchnorr) throw new Error("verifySchnorr not supported by ecc library");
          return p.verifySchnorr(z, this.publicKey.subarray(1, 33), F);
        }
      }
      class _ extends E {
        constructor(z, F, C, G, Q = 0, ee = 0, re = 0) {
          super(z, F), this.chainCode = C, this.network = G, this.__DEPTH = Q, this.__INDEX = ee, this.__PARENT_FINGERPRINT = re, v(b, G);
        }
        get depth() {
          return this.__DEPTH;
        }
        get index() {
          return this.__INDEX;
        }
        get parentFingerprint() {
          return this.__PARENT_FINGERPRINT;
        }
        get identifier() {
          return e.hash160(this.publicKey);
        }
        get fingerprint() {
          return this.identifier.slice(0, 4);
        }
        get compressed() {
          return true;
        }
        isNeutered() {
          return this.__D === void 0;
        }
        neutered() {
          return q(this.publicKey, this.chainCode, this.network, this.depth, this.index, this.parentFingerprint);
        }
        toBase58() {
          const z = this.network, F = this.isNeutered() ? z.bip32.public : z.bip32.private, C = Buffer.allocUnsafe(78);
          return C.writeUInt32BE(F, 0), C.writeUInt8(this.depth, 4), C.writeUInt32BE(this.parentFingerprint, 5), C.writeUInt32BE(this.index, 9), this.chainCode.copy(C, 13), this.isNeutered() ? this.publicKey.copy(C, 45) : (C.writeUInt8(0, 45), this.privateKey.copy(C, 46)), r.encode(C);
        }
        toWIF() {
          if (!this.privateKey) throw new TypeError("Missing private key");
          return o.encode(this.network.wif, this.privateKey, true);
        }
        derive(z) {
          v(v.UInt32, z);
          const F = z >= f, C = Buffer.allocUnsafe(37);
          if (F) {
            if (this.isNeutered()) throw new TypeError("Missing private key for hardened child key");
            C[0] = 0, this.privateKey.copy(C, 1), C.writeUInt32BE(z, 33);
          } else this.publicKey.copy(C, 0), C.writeUInt32BE(z, 33);
          const G = e.hmacSHA512(this.chainCode, C), Q = G.slice(0, 32), ee = G.slice(32);
          if (!p.isPrivate(Q)) return this.derive(z + 1);
          let re;
          if (this.isNeutered()) {
            const D = Buffer.from(p.pointAddScalar(this.publicKey, Q, true));
            if (D === null) return this.derive(z + 1);
            re = q(D, ee, this.network, this.depth + 1, z, this.fingerprint.readUInt32BE(0));
          } else {
            const D = Buffer.from(p.privateAdd(this.privateKey, Q));
            if (D == null) return this.derive(z + 1);
            re = A(D, ee, this.network, this.depth + 1, z, this.fingerprint.readUInt32BE(0));
          }
          return re;
        }
        deriveHardened(z) {
          return v(w, z), this.derive(z + f);
        }
        derivePath(z) {
          v(l, z);
          let F = z.split("/");
          if (F[0] === "m") {
            if (this.parentFingerprint) throw new TypeError("Expected master, got child");
            F = F.slice(1);
          }
          return F.reduce((C, G) => {
            let Q;
            return G.slice(-1) === "'" ? (Q = parseInt(G.slice(0, -1), 10), C.deriveHardened(Q)) : (Q = parseInt(G, 10), C.derive(Q));
          }, this);
        }
        tweak(z) {
          return this.privateKey ? this.tweakFromPrivateKey(z) : this.tweakFromPublicKey(z);
        }
        tweakFromPublicKey(z) {
          const F = y(this.publicKey);
          if (!p.xOnlyPointAddTweak) throw new Error("xOnlyPointAddTweak not supported by ecc library");
          const C = p.xOnlyPointAddTweak(F, z);
          if (!C || C.xOnlyPubkey === null) throw new Error("Cannot tweak public key!");
          const G = Buffer.from([
            C.parity === 0 ? 2 : 3
          ]), Q = Buffer.concat([
            G,
            C.xOnlyPubkey
          ]);
          return new E(void 0, Q);
        }
        tweakFromPrivateKey(z) {
          const F = this.publicKey[0] === 3 || this.publicKey[0] === 4 && (this.publicKey[64] & 1) === 1, C = (() => {
            if (F) {
              if (p.privateNegate) return p.privateNegate(this.privateKey);
              throw new Error("privateNegate not supported by ecc library");
            } else return this.privateKey;
          })(), G = p.privateAdd(C, z);
          if (!G) throw new Error("Invalid tweaked private key!");
          return new E(Buffer.from(G), void 0);
        }
      }
      function S(R, z) {
        const F = r.decode(R);
        if (F.length !== 78) throw new TypeError("Invalid buffer length");
        z = z || m;
        const C = F.readUInt32BE(0);
        if (C !== z.bip32.private && C !== z.bip32.public) throw new TypeError("Invalid network version");
        const G = F[4], Q = F.readUInt32BE(5);
        if (G === 0 && Q !== 0) throw new TypeError("Invalid parent fingerprint");
        const ee = F.readUInt32BE(9);
        if (G === 0 && ee !== 0) throw new TypeError("Invalid index");
        const re = F.slice(13, 45);
        let D;
        if (C === z.bip32.private) {
          if (F.readUInt8(45) !== 0) throw new TypeError("Invalid private key");
          const O = F.slice(46, 78);
          D = A(O, re, z, G, ee, Q);
        } else {
          const O = F.slice(45, 78);
          D = q(O, re, z, G, ee, Q);
        }
        return D;
      }
      function I(R, z, F) {
        return A(R, z, F);
      }
      function A(R, z, F, C, G, Q) {
        if (v({
          privateKey: s,
          chainCode: s
        }, {
          privateKey: R,
          chainCode: z
        }), F = F || m, !p.isPrivate(R)) throw new TypeError("Private key not in range [1, n)");
        return new _(R, void 0, z, F, C, G, Q);
      }
      function L(R, z, F) {
        return q(R, z, F);
      }
      function q(R, z, F, C, G, Q) {
        if (v({
          publicKey: v.BufferN(33),
          chainCode: s
        }, {
          publicKey: R,
          chainCode: z
        }), F = F || m, !p.isPoint(R)) throw new TypeError("Point is not on the curve");
        return new _(void 0, R, z, F, C, G, Q);
      }
      function x(R, z) {
        if (v(v.Buffer, R), R.length < 16) throw new TypeError("Seed should be at least 128 bits");
        if (R.length > 64) throw new TypeError("Seed should be at most 512 bits");
        z = z || m;
        const F = e.hmacSHA512(Buffer.from("Bitcoin seed", "utf8"), R), C = F.slice(0, 32), G = F.slice(32);
        return I(C, G, z);
      }
      return {
        fromSeed: x,
        fromBase58: S,
        fromPublicKey: L,
        fromPrivateKey: I
      };
    }
    return ut.BIP32Factory = u, ut;
  }
  var Ca;
  Tl = function() {
    return Ca || (Ca = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.BIP32Factory = e.default = void 0;
      var c = vl();
      Object.defineProperty(e, "default", {
        enumerable: true,
        get: function() {
          return c.BIP32Factory;
        }
      }), Object.defineProperty(e, "BIP32Factory", {
        enumerable: true,
        get: function() {
          return c.BIP32Factory;
        }
      });
    }(nn)), nn;
  };
})();
export {
  __tla,
  El as a,
  kl as b,
  Tl as c,
  Sl as e,
  wl as g,
  tr as r
};
