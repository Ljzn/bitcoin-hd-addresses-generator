let kl, Sl, Il, Tl, ir;
let __tla = (async () => {
  function Es(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var g = function v() {
        return this instanceof v ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      g.prototype = t.prototype;
    } else g = {};
    return Object.defineProperty(g, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(v) {
      var l = Object.getOwnPropertyDescriptor(e, v);
      Object.defineProperty(g, v, l.get ? l : {
        enumerable: true,
        get: function() {
          return e[v];
        }
      });
    }), g;
  }
  var Lt = {}, Gr = {}, on;
  function ks() {
    if (on) return Gr;
    on = 1, Gr.byteLength = r, Gr.toByteArray = u, Gr.fromByteArray = s;
    for (var e = [], t = [], g = typeof Uint8Array < "u" ? Uint8Array : Array, v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, f = v.length; l < f; ++l) e[l] = v[l], t[v.charCodeAt(l)] = l;
    t[45] = 62, t[95] = 63;
    function i(b) {
      var p = b.length;
      if (p % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var c = b.indexOf("=");
      c === -1 && (c = p);
      var y = c === p ? 0 : 4 - c % 4;
      return [
        c,
        y
      ];
    }
    function r(b) {
      var p = i(b), c = p[0], y = p[1];
      return (c + y) * 3 / 4 - y;
    }
    function n(b, p, c) {
      return (p + c) * 3 / 4 - c;
    }
    function u(b) {
      var p, c = i(b), y = c[0], w = c[1], E = new g(n(b, y, w)), k = 0, S = w > 0 ? y - 4 : y, I;
      for (I = 0; I < S; I += 4) p = t[b.charCodeAt(I)] << 18 | t[b.charCodeAt(I + 1)] << 12 | t[b.charCodeAt(I + 2)] << 6 | t[b.charCodeAt(I + 3)], E[k++] = p >> 16 & 255, E[k++] = p >> 8 & 255, E[k++] = p & 255;
      return w === 2 && (p = t[b.charCodeAt(I)] << 2 | t[b.charCodeAt(I + 1)] >> 4, E[k++] = p & 255), w === 1 && (p = t[b.charCodeAt(I)] << 10 | t[b.charCodeAt(I + 1)] << 4 | t[b.charCodeAt(I + 2)] >> 2, E[k++] = p >> 8 & 255, E[k++] = p & 255), E;
    }
    function a(b) {
      return e[b >> 18 & 63] + e[b >> 12 & 63] + e[b >> 6 & 63] + e[b & 63];
    }
    function d(b, p, c) {
      for (var y, w = [], E = p; E < c; E += 3) y = (b[E] << 16 & 16711680) + (b[E + 1] << 8 & 65280) + (b[E + 2] & 255), w.push(a(y));
      return w.join("");
    }
    function s(b) {
      for (var p, c = b.length, y = c % 3, w = [], E = 16383, k = 0, S = c - y; k < S; k += E) w.push(d(b, k, k + E > S ? S : k + E));
      return y === 1 ? (p = b[c - 1], w.push(e[p >> 2] + e[p << 4 & 63] + "==")) : y === 2 && (p = (b[c - 2] << 8) + b[c - 1], w.push(e[p >> 10] + e[p >> 4 & 63] + e[p << 2 & 63] + "=")), w.join("");
    }
    return Gr;
  }
  var yt = {};
  var an;
  function Ss() {
    return an || (an = 1, yt.read = function(e, t, g, v, l) {
      var f, i, r = l * 8 - v - 1, n = (1 << r) - 1, u = n >> 1, a = -7, d = g ? l - 1 : 0, s = g ? -1 : 1, b = e[t + d];
      for (d += s, f = b & (1 << -a) - 1, b >>= -a, a += r; a > 0; f = f * 256 + e[t + d], d += s, a -= 8) ;
      for (i = f & (1 << -a) - 1, f >>= -a, a += v; a > 0; i = i * 256 + e[t + d], d += s, a -= 8) ;
      if (f === 0) f = 1 - u;
      else {
        if (f === n) return i ? NaN : (b ? -1 : 1) * (1 / 0);
        i = i + Math.pow(2, v), f = f - u;
      }
      return (b ? -1 : 1) * i * Math.pow(2, f - v);
    }, yt.write = function(e, t, g, v, l, f) {
      var i, r, n, u = f * 8 - l - 1, a = (1 << u) - 1, d = a >> 1, s = l === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = v ? 0 : f - 1, p = v ? 1 : -1, c = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (r = isNaN(t) ? 1 : 0, i = a) : (i = Math.floor(Math.log(t) / Math.LN2), t * (n = Math.pow(2, -i)) < 1 && (i--, n *= 2), i + d >= 1 ? t += s / n : t += s * Math.pow(2, 1 - d), t * n >= 2 && (i++, n /= 2), i + d >= a ? (r = 0, i = a) : i + d >= 1 ? (r = (t * n - 1) * Math.pow(2, l), i = i + d) : (r = t * Math.pow(2, d - 1) * Math.pow(2, l), i = 0)); l >= 8; e[g + b] = r & 255, b += p, r /= 256, l -= 8) ;
      for (i = i << l | r, u += l; u > 0; e[g + b] = i & 255, b += p, i /= 256, u -= 8) ;
      e[g + b - p] |= c * 128;
    }), yt;
  }
  var sn;
  ir = function() {
    return sn || (sn = 1, function(e) {
      const t = ks(), g = Ss(), v = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      e.Buffer = r, e.SlowBuffer = E, e.INSPECT_MAX_BYTES = 50;
      const l = 2147483647;
      e.kMaxLength = l, r.TYPED_ARRAY_SUPPORT = f(), !r.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function f() {
        try {
          const T = new Uint8Array(1), m = {
            foo: function() {
              return 42;
            }
          };
          return Object.setPrototypeOf(m, Uint8Array.prototype), Object.setPrototypeOf(T, m), T.foo() === 42;
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
      function i(T) {
        if (T > l) throw new RangeError('The value "' + T + '" is invalid for option "size"');
        const m = new Uint8Array(T);
        return Object.setPrototypeOf(m, r.prototype), m;
      }
      function r(T, m, o) {
        if (typeof T == "number") {
          if (typeof m == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
          return d(T);
        }
        return n(T, m, o);
      }
      r.poolSize = 8192;
      function n(T, m, o) {
        if (typeof T == "string") return s(T, m);
        if (ArrayBuffer.isView(T)) return p(T);
        if (T == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof T);
        if (ve(T, ArrayBuffer) || T && ve(T.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ve(T, SharedArrayBuffer) || T && ve(T.buffer, SharedArrayBuffer))) return c(T, m, o);
        if (typeof T == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const h = T.valueOf && T.valueOf();
        if (h != null && h !== T) return r.from(h, m, o);
        const _ = y(T);
        if (_) return _;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof T[Symbol.toPrimitive] == "function") return r.from(T[Symbol.toPrimitive]("string"), m, o);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof T);
      }
      r.from = function(T, m, o) {
        return n(T, m, o);
      }, Object.setPrototypeOf(r.prototype, Uint8Array.prototype), Object.setPrototypeOf(r, Uint8Array);
      function u(T) {
        if (typeof T != "number") throw new TypeError('"size" argument must be of type number');
        if (T < 0) throw new RangeError('The value "' + T + '" is invalid for option "size"');
      }
      function a(T, m, o) {
        return u(T), T <= 0 ? i(T) : m !== void 0 ? typeof o == "string" ? i(T).fill(m, o) : i(T).fill(m) : i(T);
      }
      r.alloc = function(T, m, o) {
        return a(T, m, o);
      };
      function d(T) {
        return u(T), i(T < 0 ? 0 : w(T) | 0);
      }
      r.allocUnsafe = function(T) {
        return d(T);
      }, r.allocUnsafeSlow = function(T) {
        return d(T);
      };
      function s(T, m) {
        if ((typeof m != "string" || m === "") && (m = "utf8"), !r.isEncoding(m)) throw new TypeError("Unknown encoding: " + m);
        const o = k(T, m) | 0;
        let h = i(o);
        const _ = h.write(T, m);
        return _ !== o && (h = h.slice(0, _)), h;
      }
      function b(T) {
        const m = T.length < 0 ? 0 : w(T.length) | 0, o = i(m);
        for (let h = 0; h < m; h += 1) o[h] = T[h] & 255;
        return o;
      }
      function p(T) {
        if (ve(T, Uint8Array)) {
          const m = new Uint8Array(T);
          return c(m.buffer, m.byteOffset, m.byteLength);
        }
        return b(T);
      }
      function c(T, m, o) {
        if (m < 0 || T.byteLength < m) throw new RangeError('"offset" is outside of buffer bounds');
        if (T.byteLength < m + (o || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let h;
        return m === void 0 && o === void 0 ? h = new Uint8Array(T) : o === void 0 ? h = new Uint8Array(T, m) : h = new Uint8Array(T, m, o), Object.setPrototypeOf(h, r.prototype), h;
      }
      function y(T) {
        if (r.isBuffer(T)) {
          const m = w(T.length) | 0, o = i(m);
          return o.length === 0 || T.copy(o, 0, 0, m), o;
        }
        if (T.length !== void 0) return typeof T.length != "number" || ze(T.length) ? i(0) : b(T);
        if (T.type === "Buffer" && Array.isArray(T.data)) return b(T.data);
      }
      function w(T) {
        if (T >= l) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l.toString(16) + " bytes");
        return T | 0;
      }
      function E(T) {
        return +T != T && (T = 0), r.alloc(+T);
      }
      r.isBuffer = function(m) {
        return m != null && m._isBuffer === true && m !== r.prototype;
      }, r.compare = function(m, o) {
        if (ve(m, Uint8Array) && (m = r.from(m, m.offset, m.byteLength)), ve(o, Uint8Array) && (o = r.from(o, o.offset, o.byteLength)), !r.isBuffer(m) || !r.isBuffer(o)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (m === o) return 0;
        let h = m.length, _ = o.length;
        for (let A = 0, N = Math.min(h, _); A < N; ++A) if (m[A] !== o[A]) {
          h = m[A], _ = o[A];
          break;
        }
        return h < _ ? -1 : _ < h ? 1 : 0;
      }, r.isEncoding = function(m) {
        switch (String(m).toLowerCase()) {
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
      }, r.concat = function(m, o) {
        if (!Array.isArray(m)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (m.length === 0) return r.alloc(0);
        let h;
        if (o === void 0) for (o = 0, h = 0; h < m.length; ++h) o += m[h].length;
        const _ = r.allocUnsafe(o);
        let A = 0;
        for (h = 0; h < m.length; ++h) {
          let N = m[h];
          if (ve(N, Uint8Array)) A + N.length > _.length ? (r.isBuffer(N) || (N = r.from(N)), N.copy(_, A)) : Uint8Array.prototype.set.call(_, N, A);
          else if (r.isBuffer(N)) N.copy(_, A);
          else throw new TypeError('"list" argument must be an Array of Buffers');
          A += N.length;
        }
        return _;
      };
      function k(T, m) {
        if (r.isBuffer(T)) return T.length;
        if (ArrayBuffer.isView(T) || ve(T, ArrayBuffer)) return T.byteLength;
        if (typeof T != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof T);
        const o = T.length, h = arguments.length > 2 && arguments[2] === true;
        if (!h && o === 0) return 0;
        let _ = false;
        for (; ; ) switch (m) {
          case "ascii":
          case "latin1":
          case "binary":
            return o;
          case "utf8":
          case "utf-8":
            return fe(T).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return o * 2;
          case "hex":
            return o >>> 1;
          case "base64":
            return Ue(T).length;
          default:
            if (_) return h ? -1 : fe(T).length;
            m = ("" + m).toLowerCase(), _ = true;
        }
      }
      r.byteLength = k;
      function S(T, m, o) {
        let h = false;
        if ((m === void 0 || m < 0) && (m = 0), m > this.length || ((o === void 0 || o > this.length) && (o = this.length), o <= 0) || (o >>>= 0, m >>>= 0, o <= m)) return "";
        for (T || (T = "utf8"); ; ) switch (T) {
          case "hex":
            return O(this, m, o);
          case "utf8":
          case "utf-8":
            return W(this, m, o);
          case "ascii":
            return re(this, m, o);
          case "latin1":
          case "binary":
            return ue(this, m, o);
          case "base64":
            return C(this, m, o);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return F(this, m, o);
          default:
            if (h) throw new TypeError("Unknown encoding: " + T);
            T = (T + "").toLowerCase(), h = true;
        }
      }
      r.prototype._isBuffer = true;
      function I(T, m, o) {
        const h = T[m];
        T[m] = T[o], T[o] = h;
      }
      r.prototype.swap16 = function() {
        const m = this.length;
        if (m % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let o = 0; o < m; o += 2) I(this, o, o + 1);
        return this;
      }, r.prototype.swap32 = function() {
        const m = this.length;
        if (m % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let o = 0; o < m; o += 4) I(this, o, o + 3), I(this, o + 1, o + 2);
        return this;
      }, r.prototype.swap64 = function() {
        const m = this.length;
        if (m % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let o = 0; o < m; o += 8) I(this, o, o + 7), I(this, o + 1, o + 6), I(this, o + 2, o + 5), I(this, o + 3, o + 4);
        return this;
      }, r.prototype.toString = function() {
        const m = this.length;
        return m === 0 ? "" : arguments.length === 0 ? W(this, 0, m) : S.apply(this, arguments);
      }, r.prototype.toLocaleString = r.prototype.toString, r.prototype.equals = function(m) {
        if (!r.isBuffer(m)) throw new TypeError("Argument must be a Buffer");
        return this === m ? true : r.compare(this, m) === 0;
      }, r.prototype.inspect = function() {
        let m = "";
        const o = e.INSPECT_MAX_BYTES;
        return m = this.toString("hex", 0, o).replace(/(.{2})/g, "$1 ").trim(), this.length > o && (m += " ... "), "<Buffer " + m + ">";
      }, v && (r.prototype[v] = r.prototype.inspect), r.prototype.compare = function(m, o, h, _, A) {
        if (ve(m, Uint8Array) && (m = r.from(m, m.offset, m.byteLength)), !r.isBuffer(m)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof m);
        if (o === void 0 && (o = 0), h === void 0 && (h = m ? m.length : 0), _ === void 0 && (_ = 0), A === void 0 && (A = this.length), o < 0 || h > m.length || _ < 0 || A > this.length) throw new RangeError("out of range index");
        if (_ >= A && o >= h) return 0;
        if (_ >= A) return -1;
        if (o >= h) return 1;
        if (o >>>= 0, h >>>= 0, _ >>>= 0, A >>>= 0, this === m) return 0;
        let N = A - _, G = h - o;
        const Q = Math.min(N, G), ie = this.slice(_, A), ne = m.slice(o, h);
        for (let se = 0; se < Q; ++se) if (ie[se] !== ne[se]) {
          N = ie[se], G = ne[se];
          break;
        }
        return N < G ? -1 : G < N ? 1 : 0;
      };
      function U(T, m, o, h, _) {
        if (T.length === 0) return -1;
        if (typeof o == "string" ? (h = o, o = 0) : o > 2147483647 ? o = 2147483647 : o < -2147483648 && (o = -2147483648), o = +o, ze(o) && (o = _ ? 0 : T.length - 1), o < 0 && (o = T.length + o), o >= T.length) {
          if (_) return -1;
          o = T.length - 1;
        } else if (o < 0) if (_) o = 0;
        else return -1;
        if (typeof m == "string" && (m = r.from(m, h)), r.isBuffer(m)) return m.length === 0 ? -1 : R(T, m, o, h, _);
        if (typeof m == "number") return m = m & 255, typeof Uint8Array.prototype.indexOf == "function" ? _ ? Uint8Array.prototype.indexOf.call(T, m, o) : Uint8Array.prototype.lastIndexOf.call(T, m, o) : R(T, [
          m
        ], o, h, _);
        throw new TypeError("val must be string, number or Buffer");
      }
      function R(T, m, o, h, _) {
        let A = 1, N = T.length, G = m.length;
        if (h !== void 0 && (h = String(h).toLowerCase(), h === "ucs2" || h === "ucs-2" || h === "utf16le" || h === "utf-16le")) {
          if (T.length < 2 || m.length < 2) return -1;
          A = 2, N /= 2, G /= 2, o /= 2;
        }
        function Q(ne, se) {
          return A === 1 ? ne[se] : ne.readUInt16BE(se * A);
        }
        let ie;
        if (_) {
          let ne = -1;
          for (ie = o; ie < N; ie++) if (Q(T, ie) === Q(m, ne === -1 ? 0 : ie - ne)) {
            if (ne === -1 && (ne = ie), ie - ne + 1 === G) return ne * A;
          } else ne !== -1 && (ie -= ie - ne), ne = -1;
        } else for (o + G > N && (o = N - G), ie = o; ie >= 0; ie--) {
          let ne = true;
          for (let se = 0; se < G; se++) if (Q(T, ie + se) !== Q(m, se)) {
            ne = false;
            break;
          }
          if (ne) return ie;
        }
        return -1;
      }
      r.prototype.includes = function(m, o, h) {
        return this.indexOf(m, o, h) !== -1;
      }, r.prototype.indexOf = function(m, o, h) {
        return U(this, m, o, h, true);
      }, r.prototype.lastIndexOf = function(m, o, h) {
        return U(this, m, o, h, false);
      };
      function q(T, m, o, h) {
        o = Number(o) || 0;
        const _ = T.length - o;
        h ? (h = Number(h), h > _ && (h = _)) : h = _;
        const A = m.length;
        h > A / 2 && (h = A / 2);
        let N;
        for (N = 0; N < h; ++N) {
          const G = parseInt(m.substr(N * 2, 2), 16);
          if (ze(G)) return N;
          T[o + N] = G;
        }
        return N;
      }
      function x(T, m, o, h) {
        return be(fe(m, T.length - o), T, o, h);
      }
      function P(T, m, o, h) {
        return be(ge(m), T, o, h);
      }
      function H(T, m, o, h) {
        return be(Ue(m), T, o, h);
      }
      function j(T, m, o, h) {
        return be(Ae(m, T.length - o), T, o, h);
      }
      r.prototype.write = function(m, o, h, _) {
        if (o === void 0) _ = "utf8", h = this.length, o = 0;
        else if (h === void 0 && typeof o == "string") _ = o, h = this.length, o = 0;
        else if (isFinite(o)) o = o >>> 0, isFinite(h) ? (h = h >>> 0, _ === void 0 && (_ = "utf8")) : (_ = h, h = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const A = this.length - o;
        if ((h === void 0 || h > A) && (h = A), m.length > 0 && (h < 0 || o < 0) || o > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        _ || (_ = "utf8");
        let N = false;
        for (; ; ) switch (_) {
          case "hex":
            return q(this, m, o, h);
          case "utf8":
          case "utf-8":
            return x(this, m, o, h);
          case "ascii":
          case "latin1":
          case "binary":
            return P(this, m, o, h);
          case "base64":
            return H(this, m, o, h);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return j(this, m, o, h);
          default:
            if (N) throw new TypeError("Unknown encoding: " + _);
            _ = ("" + _).toLowerCase(), N = true;
        }
      }, r.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function C(T, m, o) {
        return m === 0 && o === T.length ? t.fromByteArray(T) : t.fromByteArray(T.slice(m, o));
      }
      function W(T, m, o) {
        o = Math.min(T.length, o);
        const h = [];
        let _ = m;
        for (; _ < o; ) {
          const A = T[_];
          let N = null, G = A > 239 ? 4 : A > 223 ? 3 : A > 191 ? 2 : 1;
          if (_ + G <= o) {
            let Q, ie, ne, se;
            switch (G) {
              case 1:
                A < 128 && (N = A);
                break;
              case 2:
                Q = T[_ + 1], (Q & 192) === 128 && (se = (A & 31) << 6 | Q & 63, se > 127 && (N = se));
                break;
              case 3:
                Q = T[_ + 1], ie = T[_ + 2], (Q & 192) === 128 && (ie & 192) === 128 && (se = (A & 15) << 12 | (Q & 63) << 6 | ie & 63, se > 2047 && (se < 55296 || se > 57343) && (N = se));
                break;
              case 4:
                Q = T[_ + 1], ie = T[_ + 2], ne = T[_ + 3], (Q & 192) === 128 && (ie & 192) === 128 && (ne & 192) === 128 && (se = (A & 15) << 18 | (Q & 63) << 12 | (ie & 63) << 6 | ne & 63, se > 65535 && se < 1114112 && (N = se));
            }
          }
          N === null ? (N = 65533, G = 1) : N > 65535 && (N -= 65536, h.push(N >>> 10 & 1023 | 55296), N = 56320 | N & 1023), h.push(N), _ += G;
        }
        return ee(h);
      }
      const X = 4096;
      function ee(T) {
        const m = T.length;
        if (m <= X) return String.fromCharCode.apply(String, T);
        let o = "", h = 0;
        for (; h < m; ) o += String.fromCharCode.apply(String, T.slice(h, h += X));
        return o;
      }
      function re(T, m, o) {
        let h = "";
        o = Math.min(T.length, o);
        for (let _ = m; _ < o; ++_) h += String.fromCharCode(T[_] & 127);
        return h;
      }
      function ue(T, m, o) {
        let h = "";
        o = Math.min(T.length, o);
        for (let _ = m; _ < o; ++_) h += String.fromCharCode(T[_]);
        return h;
      }
      function O(T, m, o) {
        const h = T.length;
        (!m || m < 0) && (m = 0), (!o || o < 0 || o > h) && (o = h);
        let _ = "";
        for (let A = m; A < o; ++A) _ += Qe[T[A]];
        return _;
      }
      function F(T, m, o) {
        const h = T.slice(m, o);
        let _ = "";
        for (let A = 0; A < h.length - 1; A += 2) _ += String.fromCharCode(h[A] + h[A + 1] * 256);
        return _;
      }
      r.prototype.slice = function(m, o) {
        const h = this.length;
        m = ~~m, o = o === void 0 ? h : ~~o, m < 0 ? (m += h, m < 0 && (m = 0)) : m > h && (m = h), o < 0 ? (o += h, o < 0 && (o = 0)) : o > h && (o = h), o < m && (o = m);
        const _ = this.subarray(m, o);
        return Object.setPrototypeOf(_, r.prototype), _;
      };
      function K(T, m, o) {
        if (T % 1 !== 0 || T < 0) throw new RangeError("offset is not uint");
        if (T + m > o) throw new RangeError("Trying to access beyond buffer length");
      }
      r.prototype.readUintLE = r.prototype.readUIntLE = function(m, o, h) {
        m = m >>> 0, o = o >>> 0, h || K(m, o, this.length);
        let _ = this[m], A = 1, N = 0;
        for (; ++N < o && (A *= 256); ) _ += this[m + N] * A;
        return _;
      }, r.prototype.readUintBE = r.prototype.readUIntBE = function(m, o, h) {
        m = m >>> 0, o = o >>> 0, h || K(m, o, this.length);
        let _ = this[m + --o], A = 1;
        for (; o > 0 && (A *= 256); ) _ += this[m + --o] * A;
        return _;
      }, r.prototype.readUint8 = r.prototype.readUInt8 = function(m, o) {
        return m = m >>> 0, o || K(m, 1, this.length), this[m];
      }, r.prototype.readUint16LE = r.prototype.readUInt16LE = function(m, o) {
        return m = m >>> 0, o || K(m, 2, this.length), this[m] | this[m + 1] << 8;
      }, r.prototype.readUint16BE = r.prototype.readUInt16BE = function(m, o) {
        return m = m >>> 0, o || K(m, 2, this.length), this[m] << 8 | this[m + 1];
      }, r.prototype.readUint32LE = r.prototype.readUInt32LE = function(m, o) {
        return m = m >>> 0, o || K(m, 4, this.length), (this[m] | this[m + 1] << 8 | this[m + 2] << 16) + this[m + 3] * 16777216;
      }, r.prototype.readUint32BE = r.prototype.readUInt32BE = function(m, o) {
        return m = m >>> 0, o || K(m, 4, this.length), this[m] * 16777216 + (this[m + 1] << 16 | this[m + 2] << 8 | this[m + 3]);
      }, r.prototype.readBigUInt64LE = Pe(function(m) {
        m = m >>> 0, J(m, "offset");
        const o = this[m], h = this[m + 7];
        (o === void 0 || h === void 0) && te(m, this.length - 8);
        const _ = o + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24, A = this[++m] + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + h * 2 ** 24;
        return BigInt(_) + (BigInt(A) << BigInt(32));
      }), r.prototype.readBigUInt64BE = Pe(function(m) {
        m = m >>> 0, J(m, "offset");
        const o = this[m], h = this[m + 7];
        (o === void 0 || h === void 0) && te(m, this.length - 8);
        const _ = o * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m], A = this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + h;
        return (BigInt(_) << BigInt(32)) + BigInt(A);
      }), r.prototype.readIntLE = function(m, o, h) {
        m = m >>> 0, o = o >>> 0, h || K(m, o, this.length);
        let _ = this[m], A = 1, N = 0;
        for (; ++N < o && (A *= 256); ) _ += this[m + N] * A;
        return A *= 128, _ >= A && (_ -= Math.pow(2, 8 * o)), _;
      }, r.prototype.readIntBE = function(m, o, h) {
        m = m >>> 0, o = o >>> 0, h || K(m, o, this.length);
        let _ = o, A = 1, N = this[m + --_];
        for (; _ > 0 && (A *= 256); ) N += this[m + --_] * A;
        return A *= 128, N >= A && (N -= Math.pow(2, 8 * o)), N;
      }, r.prototype.readInt8 = function(m, o) {
        return m = m >>> 0, o || K(m, 1, this.length), this[m] & 128 ? (255 - this[m] + 1) * -1 : this[m];
      }, r.prototype.readInt16LE = function(m, o) {
        m = m >>> 0, o || K(m, 2, this.length);
        const h = this[m] | this[m + 1] << 8;
        return h & 32768 ? h | 4294901760 : h;
      }, r.prototype.readInt16BE = function(m, o) {
        m = m >>> 0, o || K(m, 2, this.length);
        const h = this[m + 1] | this[m] << 8;
        return h & 32768 ? h | 4294901760 : h;
      }, r.prototype.readInt32LE = function(m, o) {
        return m = m >>> 0, o || K(m, 4, this.length), this[m] | this[m + 1] << 8 | this[m + 2] << 16 | this[m + 3] << 24;
      }, r.prototype.readInt32BE = function(m, o) {
        return m = m >>> 0, o || K(m, 4, this.length), this[m] << 24 | this[m + 1] << 16 | this[m + 2] << 8 | this[m + 3];
      }, r.prototype.readBigInt64LE = Pe(function(m) {
        m = m >>> 0, J(m, "offset");
        const o = this[m], h = this[m + 7];
        (o === void 0 || h === void 0) && te(m, this.length - 8);
        const _ = this[m + 4] + this[m + 5] * 2 ** 8 + this[m + 6] * 2 ** 16 + (h << 24);
        return (BigInt(_) << BigInt(32)) + BigInt(o + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24);
      }), r.prototype.readBigInt64BE = Pe(function(m) {
        m = m >>> 0, J(m, "offset");
        const o = this[m], h = this[m + 7];
        (o === void 0 || h === void 0) && te(m, this.length - 8);
        const _ = (o << 24) + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m];
        return (BigInt(_) << BigInt(32)) + BigInt(this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + h);
      }), r.prototype.readFloatLE = function(m, o) {
        return m = m >>> 0, o || K(m, 4, this.length), g.read(this, m, true, 23, 4);
      }, r.prototype.readFloatBE = function(m, o) {
        return m = m >>> 0, o || K(m, 4, this.length), g.read(this, m, false, 23, 4);
      }, r.prototype.readDoubleLE = function(m, o) {
        return m = m >>> 0, o || K(m, 8, this.length), g.read(this, m, true, 52, 8);
      }, r.prototype.readDoubleBE = function(m, o) {
        return m = m >>> 0, o || K(m, 8, this.length), g.read(this, m, false, 52, 8);
      };
      function Z(T, m, o, h, _, A) {
        if (!r.isBuffer(T)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (m > _ || m < A) throw new RangeError('"value" argument is out of bounds');
        if (o + h > T.length) throw new RangeError("Index out of range");
      }
      r.prototype.writeUintLE = r.prototype.writeUIntLE = function(m, o, h, _) {
        if (m = +m, o = o >>> 0, h = h >>> 0, !_) {
          const G = Math.pow(2, 8 * h) - 1;
          Z(this, m, o, h, G, 0);
        }
        let A = 1, N = 0;
        for (this[o] = m & 255; ++N < h && (A *= 256); ) this[o + N] = m / A & 255;
        return o + h;
      }, r.prototype.writeUintBE = r.prototype.writeUIntBE = function(m, o, h, _) {
        if (m = +m, o = o >>> 0, h = h >>> 0, !_) {
          const G = Math.pow(2, 8 * h) - 1;
          Z(this, m, o, h, G, 0);
        }
        let A = h - 1, N = 1;
        for (this[o + A] = m & 255; --A >= 0 && (N *= 256); ) this[o + A] = m / N & 255;
        return o + h;
      }, r.prototype.writeUint8 = r.prototype.writeUInt8 = function(m, o, h) {
        return m = +m, o = o >>> 0, h || Z(this, m, o, 1, 255, 0), this[o] = m & 255, o + 1;
      }, r.prototype.writeUint16LE = r.prototype.writeUInt16LE = function(m, o, h) {
        return m = +m, o = o >>> 0, h || Z(this, m, o, 2, 65535, 0), this[o] = m & 255, this[o + 1] = m >>> 8, o + 2;
      }, r.prototype.writeUint16BE = r.prototype.writeUInt16BE = function(m, o, h) {
        return m = +m, o = o >>> 0, h || Z(this, m, o, 2, 65535, 0), this[o] = m >>> 8, this[o + 1] = m & 255, o + 2;
      }, r.prototype.writeUint32LE = r.prototype.writeUInt32LE = function(m, o, h) {
        return m = +m, o = o >>> 0, h || Z(this, m, o, 4, 4294967295, 0), this[o + 3] = m >>> 24, this[o + 2] = m >>> 16, this[o + 1] = m >>> 8, this[o] = m & 255, o + 4;
      }, r.prototype.writeUint32BE = r.prototype.writeUInt32BE = function(m, o, h) {
        return m = +m, o = o >>> 0, h || Z(this, m, o, 4, 4294967295, 0), this[o] = m >>> 24, this[o + 1] = m >>> 16, this[o + 2] = m >>> 8, this[o + 3] = m & 255, o + 4;
      };
      function ae(T, m, o, h, _) {
        z(m, h, _, T, o, 7);
        let A = Number(m & BigInt(4294967295));
        T[o++] = A, A = A >> 8, T[o++] = A, A = A >> 8, T[o++] = A, A = A >> 8, T[o++] = A;
        let N = Number(m >> BigInt(32) & BigInt(4294967295));
        return T[o++] = N, N = N >> 8, T[o++] = N, N = N >> 8, T[o++] = N, N = N >> 8, T[o++] = N, o;
      }
      function D(T, m, o, h, _) {
        z(m, h, _, T, o, 7);
        let A = Number(m & BigInt(4294967295));
        T[o + 7] = A, A = A >> 8, T[o + 6] = A, A = A >> 8, T[o + 5] = A, A = A >> 8, T[o + 4] = A;
        let N = Number(m >> BigInt(32) & BigInt(4294967295));
        return T[o + 3] = N, N = N >> 8, T[o + 2] = N, N = N >> 8, T[o + 1] = N, N = N >> 8, T[o] = N, o + 8;
      }
      r.prototype.writeBigUInt64LE = Pe(function(m, o = 0) {
        return ae(this, m, o, BigInt(0), BigInt("0xffffffffffffffff"));
      }), r.prototype.writeBigUInt64BE = Pe(function(m, o = 0) {
        return D(this, m, o, BigInt(0), BigInt("0xffffffffffffffff"));
      }), r.prototype.writeIntLE = function(m, o, h, _) {
        if (m = +m, o = o >>> 0, !_) {
          const Q = Math.pow(2, 8 * h - 1);
          Z(this, m, o, h, Q - 1, -Q);
        }
        let A = 0, N = 1, G = 0;
        for (this[o] = m & 255; ++A < h && (N *= 256); ) m < 0 && G === 0 && this[o + A - 1] !== 0 && (G = 1), this[o + A] = (m / N >> 0) - G & 255;
        return o + h;
      }, r.prototype.writeIntBE = function(m, o, h, _) {
        if (m = +m, o = o >>> 0, !_) {
          const Q = Math.pow(2, 8 * h - 1);
          Z(this, m, o, h, Q - 1, -Q);
        }
        let A = h - 1, N = 1, G = 0;
        for (this[o + A] = m & 255; --A >= 0 && (N *= 256); ) m < 0 && G === 0 && this[o + A + 1] !== 0 && (G = 1), this[o + A] = (m / N >> 0) - G & 255;
        return o + h;
      }, r.prototype.writeInt8 = function(m, o, h) {
        return m = +m, o = o >>> 0, h || Z(this, m, o, 1, 127, -128), m < 0 && (m = 255 + m + 1), this[o] = m & 255, o + 1;
      }, r.prototype.writeInt16LE = function(m, o, h) {
        return m = +m, o = o >>> 0, h || Z(this, m, o, 2, 32767, -32768), this[o] = m & 255, this[o + 1] = m >>> 8, o + 2;
      }, r.prototype.writeInt16BE = function(m, o, h) {
        return m = +m, o = o >>> 0, h || Z(this, m, o, 2, 32767, -32768), this[o] = m >>> 8, this[o + 1] = m & 255, o + 2;
      }, r.prototype.writeInt32LE = function(m, o, h) {
        return m = +m, o = o >>> 0, h || Z(this, m, o, 4, 2147483647, -2147483648), this[o] = m & 255, this[o + 1] = m >>> 8, this[o + 2] = m >>> 16, this[o + 3] = m >>> 24, o + 4;
      }, r.prototype.writeInt32BE = function(m, o, h) {
        return m = +m, o = o >>> 0, h || Z(this, m, o, 4, 2147483647, -2147483648), m < 0 && (m = 4294967295 + m + 1), this[o] = m >>> 24, this[o + 1] = m >>> 16, this[o + 2] = m >>> 8, this[o + 3] = m & 255, o + 4;
      }, r.prototype.writeBigInt64LE = Pe(function(m, o = 0) {
        return ae(this, m, o, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      }), r.prototype.writeBigInt64BE = Pe(function(m, o = 0) {
        return D(this, m, o, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function Y(T, m, o, h, _, A) {
        if (o + h > T.length) throw new RangeError("Index out of range");
        if (o < 0) throw new RangeError("Index out of range");
      }
      function L(T, m, o, h, _) {
        return m = +m, o = o >>> 0, _ || Y(T, m, o, 4), g.write(T, m, o, h, 23, 4), o + 4;
      }
      r.prototype.writeFloatLE = function(m, o, h) {
        return L(this, m, o, true, h);
      }, r.prototype.writeFloatBE = function(m, o, h) {
        return L(this, m, o, false, h);
      };
      function M(T, m, o, h, _) {
        return m = +m, o = o >>> 0, _ || Y(T, m, o, 8), g.write(T, m, o, h, 52, 8), o + 8;
      }
      r.prototype.writeDoubleLE = function(m, o, h) {
        return M(this, m, o, true, h);
      }, r.prototype.writeDoubleBE = function(m, o, h) {
        return M(this, m, o, false, h);
      }, r.prototype.copy = function(m, o, h, _) {
        if (!r.isBuffer(m)) throw new TypeError("argument should be a Buffer");
        if (h || (h = 0), !_ && _ !== 0 && (_ = this.length), o >= m.length && (o = m.length), o || (o = 0), _ > 0 && _ < h && (_ = h), _ === h || m.length === 0 || this.length === 0) return 0;
        if (o < 0) throw new RangeError("targetStart out of bounds");
        if (h < 0 || h >= this.length) throw new RangeError("Index out of range");
        if (_ < 0) throw new RangeError("sourceEnd out of bounds");
        _ > this.length && (_ = this.length), m.length - o < _ - h && (_ = m.length - o + h);
        const A = _ - h;
        return this === m && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(o, h, _) : Uint8Array.prototype.set.call(m, this.subarray(h, _), o), A;
      }, r.prototype.fill = function(m, o, h, _) {
        if (typeof m == "string") {
          if (typeof o == "string" ? (_ = o, o = 0, h = this.length) : typeof h == "string" && (_ = h, h = this.length), _ !== void 0 && typeof _ != "string") throw new TypeError("encoding must be a string");
          if (typeof _ == "string" && !r.isEncoding(_)) throw new TypeError("Unknown encoding: " + _);
          if (m.length === 1) {
            const N = m.charCodeAt(0);
            (_ === "utf8" && N < 128 || _ === "latin1") && (m = N);
          }
        } else typeof m == "number" ? m = m & 255 : typeof m == "boolean" && (m = Number(m));
        if (o < 0 || this.length < o || this.length < h) throw new RangeError("Out of range index");
        if (h <= o) return this;
        o = o >>> 0, h = h === void 0 ? this.length : h >>> 0, m || (m = 0);
        let A;
        if (typeof m == "number") for (A = o; A < h; ++A) this[A] = m;
        else {
          const N = r.isBuffer(m) ? m : r.from(m, _), G = N.length;
          if (G === 0) throw new TypeError('The value "' + m + '" is invalid for argument "value"');
          for (A = 0; A < h - o; ++A) this[A + o] = N[A % G];
        }
        return this;
      };
      const V = {};
      function $(T, m, o) {
        V[T] = class extends o {
          constructor() {
            super(), Object.defineProperty(this, "message", {
              value: m.apply(this, arguments),
              writable: true,
              configurable: true
            }), this.name = `${this.name} [${T}]`, this.stack, delete this.name;
          }
          get code() {
            return T;
          }
          set code(_) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value: _,
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
      }, RangeError), $("ERR_INVALID_ARG_TYPE", function(T, m) {
        return `The "${T}" argument must be of type number. Received type ${typeof m}`;
      }, TypeError), $("ERR_OUT_OF_RANGE", function(T, m, o) {
        let h = `The value of "${T}" is out of range.`, _ = o;
        return Number.isInteger(o) && Math.abs(o) > 2 ** 32 ? _ = oe(String(o)) : typeof o == "bigint" && (_ = String(o), (o > BigInt(2) ** BigInt(32) || o < -(BigInt(2) ** BigInt(32))) && (_ = oe(_)), _ += "n"), h += ` It must be ${m}. Received ${_}`, h;
      }, RangeError);
      function oe(T) {
        let m = "", o = T.length;
        const h = T[0] === "-" ? 1 : 0;
        for (; o >= h + 4; o -= 3) m = `_${T.slice(o - 3, o)}${m}`;
        return `${T.slice(0, o)}${m}`;
      }
      function B(T, m, o) {
        J(m, "offset"), (T[m] === void 0 || T[m + o] === void 0) && te(m, T.length - (o + 1));
      }
      function z(T, m, o, h, _, A) {
        if (T > o || T < m) {
          const N = typeof m == "bigint" ? "n" : "";
          let G;
          throw m === 0 || m === BigInt(0) ? G = `>= 0${N} and < 2${N} ** ${(A + 1) * 8}${N}` : G = `>= -(2${N} ** ${(A + 1) * 8 - 1}${N}) and < 2 ** ${(A + 1) * 8 - 1}${N}`, new V.ERR_OUT_OF_RANGE("value", G, T);
        }
        B(h, _, A);
      }
      function J(T, m) {
        if (typeof T != "number") throw new V.ERR_INVALID_ARG_TYPE(m, "number", T);
      }
      function te(T, m, o) {
        throw Math.floor(T) !== T ? (J(T, o), new V.ERR_OUT_OF_RANGE("offset", "an integer", T)) : m < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${m}`, T);
      }
      const le = /[^+/0-9A-Za-z-_]/g;
      function ce(T) {
        if (T = T.split("=")[0], T = T.trim().replace(le, ""), T.length < 2) return "";
        for (; T.length % 4 !== 0; ) T = T + "=";
        return T;
      }
      function fe(T, m) {
        m = m || 1 / 0;
        let o;
        const h = T.length;
        let _ = null;
        const A = [];
        for (let N = 0; N < h; ++N) {
          if (o = T.charCodeAt(N), o > 55295 && o < 57344) {
            if (!_) {
              if (o > 56319) {
                (m -= 3) > -1 && A.push(239, 191, 189);
                continue;
              } else if (N + 1 === h) {
                (m -= 3) > -1 && A.push(239, 191, 189);
                continue;
              }
              _ = o;
              continue;
            }
            if (o < 56320) {
              (m -= 3) > -1 && A.push(239, 191, 189), _ = o;
              continue;
            }
            o = (_ - 55296 << 10 | o - 56320) + 65536;
          } else _ && (m -= 3) > -1 && A.push(239, 191, 189);
          if (_ = null, o < 128) {
            if ((m -= 1) < 0) break;
            A.push(o);
          } else if (o < 2048) {
            if ((m -= 2) < 0) break;
            A.push(o >> 6 | 192, o & 63 | 128);
          } else if (o < 65536) {
            if ((m -= 3) < 0) break;
            A.push(o >> 12 | 224, o >> 6 & 63 | 128, o & 63 | 128);
          } else if (o < 1114112) {
            if ((m -= 4) < 0) break;
            A.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, o & 63 | 128);
          } else throw new Error("Invalid code point");
        }
        return A;
      }
      function ge(T) {
        const m = [];
        for (let o = 0; o < T.length; ++o) m.push(T.charCodeAt(o) & 255);
        return m;
      }
      function Ae(T, m) {
        let o, h, _;
        const A = [];
        for (let N = 0; N < T.length && !((m -= 2) < 0); ++N) o = T.charCodeAt(N), h = o >> 8, _ = o % 256, A.push(_), A.push(h);
        return A;
      }
      function Ue(T) {
        return t.toByteArray(ce(T));
      }
      function be(T, m, o, h) {
        let _;
        for (_ = 0; _ < h && !(_ + o >= m.length || _ >= T.length); ++_) m[_ + o] = T[_];
        return _;
      }
      function ve(T, m) {
        return T instanceof m || T != null && T.constructor != null && T.constructor.name != null && T.constructor.name === m.name;
      }
      function ze(T) {
        return T !== T;
      }
      const Qe = function() {
        const T = "0123456789abcdef", m = new Array(256);
        for (let o = 0; o < 16; ++o) {
          const h = o * 16;
          for (let _ = 0; _ < 16; ++_) m[h + _] = T[o] + T[_];
        }
        return m;
      }();
      function Pe(T) {
        return typeof BigInt > "u" ? De : T;
      }
      function De() {
        throw new Error("BigInt not supported");
      }
    }(Lt)), Lt;
  };
  var Ke = {}, Xe = {}, we = {}, He = {}, Ct = {}, $r = {}, un;
  function Ts() {
    return un || (un = 1, Object.defineProperty($r, "__esModule", {
      value: true
    }), $r.crypto = void 0, $r.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0), $r;
  }
  var cn;
  function Mr() {
    return cn || (cn = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.Hash = e.nextTick = e.swap32IfBE = e.byteSwapIfBE = e.swap8IfBE = e.isLE = void 0, e.isBytes = g, e.anumber = v, e.abytes = l, e.ahash = f, e.aexists = i, e.aoutput = r, e.u8 = n, e.u32 = u, e.clean = a, e.createView = d, e.rotr = s, e.rotl = b, e.byteSwap = p, e.byteSwap32 = c, e.bytesToHex = E, e.hexToBytes = I, e.asyncLoop = R, e.utf8ToBytes = q, e.bytesToUtf8 = x, e.toBytes = P, e.kdfInputToBytes = H, e.concatBytes = j, e.checkOpts = C, e.createHasher = X, e.createOptHasher = ee, e.createXOFer = re, e.randomBytes = ue;
      const t = Ts();
      function g(O) {
        return O instanceof Uint8Array || ArrayBuffer.isView(O) && O.constructor.name === "Uint8Array";
      }
      function v(O) {
        if (!Number.isSafeInteger(O) || O < 0) throw new Error("positive integer expected, got " + O);
      }
      function l(O, ...F) {
        if (!g(O)) throw new Error("Uint8Array expected");
        if (F.length > 0 && !F.includes(O.length)) throw new Error("Uint8Array expected of length " + F + ", got length=" + O.length);
      }
      function f(O) {
        if (typeof O != "function" || typeof O.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
        v(O.outputLen), v(O.blockLen);
      }
      function i(O, F = true) {
        if (O.destroyed) throw new Error("Hash instance has been destroyed");
        if (F && O.finished) throw new Error("Hash#digest() has already been called");
      }
      function r(O, F) {
        l(O);
        const K = F.outputLen;
        if (O.length < K) throw new Error("digestInto() expects output buffer of length at least " + K);
      }
      function n(O) {
        return new Uint8Array(O.buffer, O.byteOffset, O.byteLength);
      }
      function u(O) {
        return new Uint32Array(O.buffer, O.byteOffset, Math.floor(O.byteLength / 4));
      }
      function a(...O) {
        for (let F = 0; F < O.length; F++) O[F].fill(0);
      }
      function d(O) {
        return new DataView(O.buffer, O.byteOffset, O.byteLength);
      }
      function s(O, F) {
        return O << 32 - F | O >>> F;
      }
      function b(O, F) {
        return O << F | O >>> 32 - F >>> 0;
      }
      e.isLE = new Uint8Array(new Uint32Array([
        287454020
      ]).buffer)[0] === 68;
      function p(O) {
        return O << 24 & 4278190080 | O << 8 & 16711680 | O >>> 8 & 65280 | O >>> 24 & 255;
      }
      e.swap8IfBE = e.isLE ? (O) => O : (O) => p(O), e.byteSwapIfBE = e.swap8IfBE;
      function c(O) {
        for (let F = 0; F < O.length; F++) O[F] = p(O[F]);
        return O;
      }
      e.swap32IfBE = e.isLE ? (O) => O : c;
      const y = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", w = Array.from({
        length: 256
      }, (O, F) => F.toString(16).padStart(2, "0"));
      function E(O) {
        if (l(O), y) return O.toHex();
        let F = "";
        for (let K = 0; K < O.length; K++) F += w[O[K]];
        return F;
      }
      const k = {
        _0: 48,
        _9: 57,
        A: 65,
        F: 70,
        a: 97,
        f: 102
      };
      function S(O) {
        if (O >= k._0 && O <= k._9) return O - k._0;
        if (O >= k.A && O <= k.F) return O - (k.A - 10);
        if (O >= k.a && O <= k.f) return O - (k.a - 10);
      }
      function I(O) {
        if (typeof O != "string") throw new Error("hex string expected, got " + typeof O);
        if (y) return Uint8Array.fromHex(O);
        const F = O.length, K = F / 2;
        if (F % 2) throw new Error("hex string expected, got unpadded hex of length " + F);
        const Z = new Uint8Array(K);
        for (let ae = 0, D = 0; ae < K; ae++, D += 2) {
          const Y = S(O.charCodeAt(D)), L = S(O.charCodeAt(D + 1));
          if (Y === void 0 || L === void 0) {
            const M = O[D] + O[D + 1];
            throw new Error('hex string expected, got non-hex character "' + M + '" at index ' + D);
          }
          Z[ae] = Y * 16 + L;
        }
        return Z;
      }
      const U = async () => {
      };
      e.nextTick = U;
      async function R(O, F, K) {
        let Z = Date.now();
        for (let ae = 0; ae < O; ae++) {
          K(ae);
          const D = Date.now() - Z;
          D >= 0 && D < F || (await (0, e.nextTick)(), Z += D);
        }
      }
      function q(O) {
        if (typeof O != "string") throw new Error("string expected");
        return new Uint8Array(new TextEncoder().encode(O));
      }
      function x(O) {
        return new TextDecoder().decode(O);
      }
      function P(O) {
        return typeof O == "string" && (O = q(O)), l(O), O;
      }
      function H(O) {
        return typeof O == "string" && (O = q(O)), l(O), O;
      }
      function j(...O) {
        let F = 0;
        for (let Z = 0; Z < O.length; Z++) {
          const ae = O[Z];
          l(ae), F += ae.length;
        }
        const K = new Uint8Array(F);
        for (let Z = 0, ae = 0; Z < O.length; Z++) {
          const D = O[Z];
          K.set(D, ae), ae += D.length;
        }
        return K;
      }
      function C(O, F) {
        if (F !== void 0 && {}.toString.call(F) !== "[object Object]") throw new Error("options should be object or undefined");
        return Object.assign(O, F);
      }
      class W {
      }
      e.Hash = W;
      function X(O) {
        const F = (Z) => O().update(P(Z)).digest(), K = O();
        return F.outputLen = K.outputLen, F.blockLen = K.blockLen, F.create = () => O(), F;
      }
      function ee(O) {
        const F = (Z, ae) => O(ae).update(P(Z)).digest(), K = O({});
        return F.outputLen = K.outputLen, F.blockLen = K.blockLen, F.create = (Z) => O(Z), F;
      }
      function re(O) {
        const F = (Z, ae) => O(ae).update(P(Z)).digest(), K = O({});
        return F.outputLen = K.outputLen, F.blockLen = K.blockLen, F.create = (Z) => O(Z), F;
      }
      e.wrapConstructor = X, e.wrapConstructorWithOpts = ee, e.wrapXOFConstructorWithOpts = re;
      function ue(O = 32) {
        if (t.crypto && typeof t.crypto.getRandomValues == "function") return t.crypto.getRandomValues(new Uint8Array(O));
        if (t.crypto && typeof t.crypto.randomBytes == "function") return Uint8Array.from(t.crypto.randomBytes(O));
        throw new Error("crypto.getRandomValues must be defined");
      }
    }(Ct)), Ct;
  }
  var ln;
  function qa() {
    if (ln) return He;
    ln = 1, Object.defineProperty(He, "__esModule", {
      value: true
    }), He.SHA512_IV = He.SHA384_IV = He.SHA224_IV = He.SHA256_IV = He.HashMD = void 0, He.setBigUint64 = t, He.Chi = g, He.Maj = v;
    const e = Mr();
    function t(f, i, r, n) {
      if (typeof f.setBigUint64 == "function") return f.setBigUint64(i, r, n);
      const u = BigInt(32), a = BigInt(4294967295), d = Number(r >> u & a), s = Number(r & a), b = n ? 4 : 0, p = n ? 0 : 4;
      f.setUint32(i + b, d, n), f.setUint32(i + p, s, n);
    }
    function g(f, i, r) {
      return f & i ^ ~f & r;
    }
    function v(f, i, r) {
      return f & i ^ f & r ^ i & r;
    }
    class l extends e.Hash {
      constructor(i, r, n, u) {
        super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = i, this.outputLen = r, this.padOffset = n, this.isLE = u, this.buffer = new Uint8Array(i), this.view = (0, e.createView)(this.buffer);
      }
      update(i) {
        (0, e.aexists)(this), i = (0, e.toBytes)(i), (0, e.abytes)(i);
        const { view: r, buffer: n, blockLen: u } = this, a = i.length;
        for (let d = 0; d < a; ) {
          const s = Math.min(u - this.pos, a - d);
          if (s === u) {
            const b = (0, e.createView)(i);
            for (; u <= a - d; d += u) this.process(b, d);
            continue;
          }
          n.set(i.subarray(d, d + s), this.pos), this.pos += s, d += s, this.pos === u && (this.process(r, 0), this.pos = 0);
        }
        return this.length += i.length, this.roundClean(), this;
      }
      digestInto(i) {
        (0, e.aexists)(this), (0, e.aoutput)(i, this), this.finished = true;
        const { buffer: r, view: n, blockLen: u, isLE: a } = this;
        let { pos: d } = this;
        r[d++] = 128, (0, e.clean)(this.buffer.subarray(d)), this.padOffset > u - d && (this.process(n, 0), d = 0);
        for (let y = d; y < u; y++) r[y] = 0;
        t(n, u - 8, BigInt(this.length * 8), a), this.process(n, 0);
        const s = (0, e.createView)(i), b = this.outputLen;
        if (b % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const p = b / 4, c = this.get();
        if (p > c.length) throw new Error("_sha2: outputLen bigger than state");
        for (let y = 0; y < p; y++) s.setUint32(4 * y, c[y], a);
      }
      digest() {
        const { buffer: i, outputLen: r } = this;
        this.digestInto(i);
        const n = i.slice(0, r);
        return this.destroy(), n;
      }
      _cloneInto(i) {
        i || (i = new this.constructor()), i.set(...this.get());
        const { blockLen: r, buffer: n, length: u, finished: a, destroyed: d, pos: s } = this;
        return i.destroyed = d, i.finished = a, i.length = u, i.pos = s, u % r && i.buffer.set(n), i;
      }
      clone() {
        return this._cloneInto();
      }
    }
    return He.HashMD = l, He.SHA256_IV = Uint32Array.from([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]), He.SHA224_IV = Uint32Array.from([
      3238371032,
      914150663,
      812702999,
      4144912697,
      4290775857,
      1750603025,
      1694076839,
      3204075428
    ]), He.SHA384_IV = Uint32Array.from([
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
    ]), He.SHA512_IV = Uint32Array.from([
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
    ]), He;
  }
  var he = {}, fn;
  function Is() {
    if (fn) return he;
    fn = 1, Object.defineProperty(he, "__esModule", {
      value: true
    }), he.toBig = he.shrSL = he.shrSH = he.rotrSL = he.rotrSH = he.rotrBL = he.rotrBH = he.rotr32L = he.rotr32H = he.rotlSL = he.rotlSH = he.rotlBL = he.rotlBH = he.add5L = he.add5H = he.add4L = he.add4H = he.add3L = he.add3H = void 0, he.add = w, he.fromBig = g, he.split = v;
    const e = BigInt(2 ** 32 - 1), t = BigInt(32);
    function g(x, P = false) {
      return P ? {
        h: Number(x & e),
        l: Number(x >> t & e)
      } : {
        h: Number(x >> t & e) | 0,
        l: Number(x & e) | 0
      };
    }
    function v(x, P = false) {
      const H = x.length;
      let j = new Uint32Array(H), C = new Uint32Array(H);
      for (let W = 0; W < H; W++) {
        const { h: X, l: ee } = g(x[W], P);
        [j[W], C[W]] = [
          X,
          ee
        ];
      }
      return [
        j,
        C
      ];
    }
    const l = (x, P) => BigInt(x >>> 0) << t | BigInt(P >>> 0);
    he.toBig = l;
    const f = (x, P, H) => x >>> H;
    he.shrSH = f;
    const i = (x, P, H) => x << 32 - H | P >>> H;
    he.shrSL = i;
    const r = (x, P, H) => x >>> H | P << 32 - H;
    he.rotrSH = r;
    const n = (x, P, H) => x << 32 - H | P >>> H;
    he.rotrSL = n;
    const u = (x, P, H) => x << 64 - H | P >>> H - 32;
    he.rotrBH = u;
    const a = (x, P, H) => x >>> H - 32 | P << 64 - H;
    he.rotrBL = a;
    const d = (x, P) => P;
    he.rotr32H = d;
    const s = (x, P) => x;
    he.rotr32L = s;
    const b = (x, P, H) => x << H | P >>> 32 - H;
    he.rotlSH = b;
    const p = (x, P, H) => P << H | x >>> 32 - H;
    he.rotlSL = p;
    const c = (x, P, H) => P << H - 32 | x >>> 64 - H;
    he.rotlBH = c;
    const y = (x, P, H) => x << H - 32 | P >>> 64 - H;
    he.rotlBL = y;
    function w(x, P, H, j) {
      const C = (P >>> 0) + (j >>> 0);
      return {
        h: x + H + (C / 2 ** 32 | 0) | 0,
        l: C | 0
      };
    }
    const E = (x, P, H) => (x >>> 0) + (P >>> 0) + (H >>> 0);
    he.add3L = E;
    const k = (x, P, H, j) => P + H + j + (x / 2 ** 32 | 0) | 0;
    he.add3H = k;
    const S = (x, P, H, j) => (x >>> 0) + (P >>> 0) + (H >>> 0) + (j >>> 0);
    he.add4L = S;
    const I = (x, P, H, j, C) => P + H + j + C + (x / 2 ** 32 | 0) | 0;
    he.add4H = I;
    const U = (x, P, H, j, C) => (x >>> 0) + (P >>> 0) + (H >>> 0) + (j >>> 0) + (C >>> 0);
    he.add5L = U;
    const R = (x, P, H, j, C, W) => P + H + j + C + W + (x / 2 ** 32 | 0) | 0;
    he.add5H = R;
    const q = {
      fromBig: g,
      split: v,
      toBig: l,
      shrSH: f,
      shrSL: i,
      rotrSH: r,
      rotrSL: n,
      rotrBH: u,
      rotrBL: a,
      rotr32H: d,
      rotr32L: s,
      rotlSH: b,
      rotlSL: p,
      rotlBH: c,
      rotlBL: y,
      add: w,
      add3L: E,
      add3H: k,
      add4L: S,
      add4H: I,
      add5H: R,
      add5L: U
    };
    return he.default = q, he;
  }
  var hn;
  function Ma() {
    if (hn) return we;
    hn = 1, Object.defineProperty(we, "__esModule", {
      value: true
    }), we.sha512_224 = we.sha512_256 = we.sha384 = we.sha512 = we.sha224 = we.sha256 = we.SHA512_256 = we.SHA512_224 = we.SHA384 = we.SHA512 = we.SHA224 = we.SHA256 = void 0;
    const e = qa(), t = Is(), g = Mr(), v = Uint32Array.from([
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
    ]), l = new Uint32Array(64);
    class f extends e.HashMD {
      constructor(k = 32) {
        super(64, k, 8, false), this.A = e.SHA256_IV[0] | 0, this.B = e.SHA256_IV[1] | 0, this.C = e.SHA256_IV[2] | 0, this.D = e.SHA256_IV[3] | 0, this.E = e.SHA256_IV[4] | 0, this.F = e.SHA256_IV[5] | 0, this.G = e.SHA256_IV[6] | 0, this.H = e.SHA256_IV[7] | 0;
      }
      get() {
        const { A: k, B: S, C: I, D: U, E: R, F: q, G: x, H: P } = this;
        return [
          k,
          S,
          I,
          U,
          R,
          q,
          x,
          P
        ];
      }
      set(k, S, I, U, R, q, x, P) {
        this.A = k | 0, this.B = S | 0, this.C = I | 0, this.D = U | 0, this.E = R | 0, this.F = q | 0, this.G = x | 0, this.H = P | 0;
      }
      process(k, S) {
        for (let C = 0; C < 16; C++, S += 4) l[C] = k.getUint32(S, false);
        for (let C = 16; C < 64; C++) {
          const W = l[C - 15], X = l[C - 2], ee = (0, g.rotr)(W, 7) ^ (0, g.rotr)(W, 18) ^ W >>> 3, re = (0, g.rotr)(X, 17) ^ (0, g.rotr)(X, 19) ^ X >>> 10;
          l[C] = re + l[C - 7] + ee + l[C - 16] | 0;
        }
        let { A: I, B: U, C: R, D: q, E: x, F: P, G: H, H: j } = this;
        for (let C = 0; C < 64; C++) {
          const W = (0, g.rotr)(x, 6) ^ (0, g.rotr)(x, 11) ^ (0, g.rotr)(x, 25), X = j + W + (0, e.Chi)(x, P, H) + v[C] + l[C] | 0, re = ((0, g.rotr)(I, 2) ^ (0, g.rotr)(I, 13) ^ (0, g.rotr)(I, 22)) + (0, e.Maj)(I, U, R) | 0;
          j = H, H = P, P = x, x = q + X | 0, q = R, R = U, U = I, I = X + re | 0;
        }
        I = I + this.A | 0, U = U + this.B | 0, R = R + this.C | 0, q = q + this.D | 0, x = x + this.E | 0, P = P + this.F | 0, H = H + this.G | 0, j = j + this.H | 0, this.set(I, U, R, q, x, P, H, j);
      }
      roundClean() {
        (0, g.clean)(l);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, g.clean)(this.buffer);
      }
    }
    we.SHA256 = f;
    class i extends f {
      constructor() {
        super(28), this.A = e.SHA224_IV[0] | 0, this.B = e.SHA224_IV[1] | 0, this.C = e.SHA224_IV[2] | 0, this.D = e.SHA224_IV[3] | 0, this.E = e.SHA224_IV[4] | 0, this.F = e.SHA224_IV[5] | 0, this.G = e.SHA224_IV[6] | 0, this.H = e.SHA224_IV[7] | 0;
      }
    }
    we.SHA224 = i;
    const r = t.split([
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
    ].map((E) => BigInt(E))), n = r[0], u = r[1], a = new Uint32Array(80), d = new Uint32Array(80);
    class s extends e.HashMD {
      constructor(k = 64) {
        super(128, k, 16, false), this.Ah = e.SHA512_IV[0] | 0, this.Al = e.SHA512_IV[1] | 0, this.Bh = e.SHA512_IV[2] | 0, this.Bl = e.SHA512_IV[3] | 0, this.Ch = e.SHA512_IV[4] | 0, this.Cl = e.SHA512_IV[5] | 0, this.Dh = e.SHA512_IV[6] | 0, this.Dl = e.SHA512_IV[7] | 0, this.Eh = e.SHA512_IV[8] | 0, this.El = e.SHA512_IV[9] | 0, this.Fh = e.SHA512_IV[10] | 0, this.Fl = e.SHA512_IV[11] | 0, this.Gh = e.SHA512_IV[12] | 0, this.Gl = e.SHA512_IV[13] | 0, this.Hh = e.SHA512_IV[14] | 0, this.Hl = e.SHA512_IV[15] | 0;
      }
      get() {
        const { Ah: k, Al: S, Bh: I, Bl: U, Ch: R, Cl: q, Dh: x, Dl: P, Eh: H, El: j, Fh: C, Fl: W, Gh: X, Gl: ee, Hh: re, Hl: ue } = this;
        return [
          k,
          S,
          I,
          U,
          R,
          q,
          x,
          P,
          H,
          j,
          C,
          W,
          X,
          ee,
          re,
          ue
        ];
      }
      set(k, S, I, U, R, q, x, P, H, j, C, W, X, ee, re, ue) {
        this.Ah = k | 0, this.Al = S | 0, this.Bh = I | 0, this.Bl = U | 0, this.Ch = R | 0, this.Cl = q | 0, this.Dh = x | 0, this.Dl = P | 0, this.Eh = H | 0, this.El = j | 0, this.Fh = C | 0, this.Fl = W | 0, this.Gh = X | 0, this.Gl = ee | 0, this.Hh = re | 0, this.Hl = ue | 0;
      }
      process(k, S) {
        for (let K = 0; K < 16; K++, S += 4) a[K] = k.getUint32(S), d[K] = k.getUint32(S += 4);
        for (let K = 16; K < 80; K++) {
          const Z = a[K - 15] | 0, ae = d[K - 15] | 0, D = t.rotrSH(Z, ae, 1) ^ t.rotrSH(Z, ae, 8) ^ t.shrSH(Z, ae, 7), Y = t.rotrSL(Z, ae, 1) ^ t.rotrSL(Z, ae, 8) ^ t.shrSL(Z, ae, 7), L = a[K - 2] | 0, M = d[K - 2] | 0, V = t.rotrSH(L, M, 19) ^ t.rotrBH(L, M, 61) ^ t.shrSH(L, M, 6), $ = t.rotrSL(L, M, 19) ^ t.rotrBL(L, M, 61) ^ t.shrSL(L, M, 6), oe = t.add4L(Y, $, d[K - 7], d[K - 16]), B = t.add4H(oe, D, V, a[K - 7], a[K - 16]);
          a[K] = B | 0, d[K] = oe | 0;
        }
        let { Ah: I, Al: U, Bh: R, Bl: q, Ch: x, Cl: P, Dh: H, Dl: j, Eh: C, El: W, Fh: X, Fl: ee, Gh: re, Gl: ue, Hh: O, Hl: F } = this;
        for (let K = 0; K < 80; K++) {
          const Z = t.rotrSH(C, W, 14) ^ t.rotrSH(C, W, 18) ^ t.rotrBH(C, W, 41), ae = t.rotrSL(C, W, 14) ^ t.rotrSL(C, W, 18) ^ t.rotrBL(C, W, 41), D = C & X ^ ~C & re, Y = W & ee ^ ~W & ue, L = t.add5L(F, ae, Y, u[K], d[K]), M = t.add5H(L, O, Z, D, n[K], a[K]), V = L | 0, $ = t.rotrSH(I, U, 28) ^ t.rotrBH(I, U, 34) ^ t.rotrBH(I, U, 39), oe = t.rotrSL(I, U, 28) ^ t.rotrBL(I, U, 34) ^ t.rotrBL(I, U, 39), B = I & R ^ I & x ^ R & x, z = U & q ^ U & P ^ q & P;
          O = re | 0, F = ue | 0, re = X | 0, ue = ee | 0, X = C | 0, ee = W | 0, { h: C, l: W } = t.add(H | 0, j | 0, M | 0, V | 0), H = x | 0, j = P | 0, x = R | 0, P = q | 0, R = I | 0, q = U | 0;
          const J = t.add3L(V, oe, z);
          I = t.add3H(J, M, $, B), U = J | 0;
        }
        ({ h: I, l: U } = t.add(this.Ah | 0, this.Al | 0, I | 0, U | 0)), { h: R, l: q } = t.add(this.Bh | 0, this.Bl | 0, R | 0, q | 0), { h: x, l: P } = t.add(this.Ch | 0, this.Cl | 0, x | 0, P | 0), { h: H, l: j } = t.add(this.Dh | 0, this.Dl | 0, H | 0, j | 0), { h: C, l: W } = t.add(this.Eh | 0, this.El | 0, C | 0, W | 0), { h: X, l: ee } = t.add(this.Fh | 0, this.Fl | 0, X | 0, ee | 0), { h: re, l: ue } = t.add(this.Gh | 0, this.Gl | 0, re | 0, ue | 0), { h: O, l: F } = t.add(this.Hh | 0, this.Hl | 0, O | 0, F | 0), this.set(I, U, R, q, x, P, H, j, C, W, X, ee, re, ue, O, F);
      }
      roundClean() {
        (0, g.clean)(a, d);
      }
      destroy() {
        (0, g.clean)(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }
    we.SHA512 = s;
    class b extends s {
      constructor() {
        super(48), this.Ah = e.SHA384_IV[0] | 0, this.Al = e.SHA384_IV[1] | 0, this.Bh = e.SHA384_IV[2] | 0, this.Bl = e.SHA384_IV[3] | 0, this.Ch = e.SHA384_IV[4] | 0, this.Cl = e.SHA384_IV[5] | 0, this.Dh = e.SHA384_IV[6] | 0, this.Dl = e.SHA384_IV[7] | 0, this.Eh = e.SHA384_IV[8] | 0, this.El = e.SHA384_IV[9] | 0, this.Fh = e.SHA384_IV[10] | 0, this.Fl = e.SHA384_IV[11] | 0, this.Gh = e.SHA384_IV[12] | 0, this.Gl = e.SHA384_IV[13] | 0, this.Hh = e.SHA384_IV[14] | 0, this.Hl = e.SHA384_IV[15] | 0;
      }
    }
    we.SHA384 = b;
    const p = Uint32Array.from([
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
    ]), c = Uint32Array.from([
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
    class y extends s {
      constructor() {
        super(28), this.Ah = p[0] | 0, this.Al = p[1] | 0, this.Bh = p[2] | 0, this.Bl = p[3] | 0, this.Ch = p[4] | 0, this.Cl = p[5] | 0, this.Dh = p[6] | 0, this.Dl = p[7] | 0, this.Eh = p[8] | 0, this.El = p[9] | 0, this.Fh = p[10] | 0, this.Fl = p[11] | 0, this.Gh = p[12] | 0, this.Gl = p[13] | 0, this.Hh = p[14] | 0, this.Hl = p[15] | 0;
      }
    }
    we.SHA512_224 = y;
    class w extends s {
      constructor() {
        super(32), this.Ah = c[0] | 0, this.Al = c[1] | 0, this.Bh = c[2] | 0, this.Bl = c[3] | 0, this.Ch = c[4] | 0, this.Cl = c[5] | 0, this.Dh = c[6] | 0, this.Dl = c[7] | 0, this.Eh = c[8] | 0, this.El = c[9] | 0, this.Fh = c[10] | 0, this.Fl = c[11] | 0, this.Gh = c[12] | 0, this.Gl = c[13] | 0, this.Hh = c[14] | 0, this.Hl = c[15] | 0;
      }
    }
    return we.SHA512_256 = w, we.sha256 = (0, g.createHasher)(() => new f()), we.sha224 = (0, g.createHasher)(() => new i()), we.sha512 = (0, g.createHasher)(() => new s()), we.sha384 = (0, g.createHasher)(() => new b()), we.sha512_256 = (0, g.createHasher)(() => new w()), we.sha512_224 = (0, g.createHasher)(() => new y()), we;
  }
  var dn;
  function pt() {
    if (dn) return Xe;
    dn = 1, Object.defineProperty(Xe, "__esModule", {
      value: true
    }), Xe.sha224 = Xe.SHA224 = Xe.sha256 = Xe.SHA256 = void 0;
    const e = Ma();
    return Xe.SHA256 = e.SHA256, Xe.sha256 = e.sha256, Xe.SHA224 = e.SHA224, Xe.sha224 = e.sha224, Xe;
  }
  var Te = {}, pn;
  function Fa() {
    if (pn) return Te;
    pn = 1, Object.defineProperty(Te, "__esModule", {
      value: true
    }), Te.sha512_256 = Te.SHA512_256 = Te.sha512_224 = Te.SHA512_224 = Te.sha384 = Te.SHA384 = Te.sha512 = Te.SHA512 = void 0;
    const e = Ma();
    return Te.SHA512 = e.SHA512, Te.sha512 = e.sha512, Te.SHA384 = e.SHA384, Te.sha384 = e.sha384, Te.SHA512_224 = e.SHA512_224, Te.sha512_224 = e.sha512_224, Te.SHA512_256 = e.SHA512_256, Te.sha512_256 = e.sha512_256, Te;
  }
  var Xr = {}, jt = {}, mn;
  function Da() {
    return mn || (mn = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.hmac = e.HMAC = void 0;
      const t = Mr();
      class g extends t.Hash {
        constructor(f, i) {
          super(), this.finished = false, this.destroyed = false, (0, t.ahash)(f);
          const r = (0, t.toBytes)(i);
          if (this.iHash = f.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
          this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
          const n = this.blockLen, u = new Uint8Array(n);
          u.set(r.length > n ? f.create().update(r).digest() : r);
          for (let a = 0; a < u.length; a++) u[a] ^= 54;
          this.iHash.update(u), this.oHash = f.create();
          for (let a = 0; a < u.length; a++) u[a] ^= 106;
          this.oHash.update(u), (0, t.clean)(u);
        }
        update(f) {
          return (0, t.aexists)(this), this.iHash.update(f), this;
        }
        digestInto(f) {
          (0, t.aexists)(this), (0, t.abytes)(f, this.outputLen), this.finished = true, this.iHash.digestInto(f), this.oHash.update(f), this.oHash.digestInto(f), this.destroy();
        }
        digest() {
          const f = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(f), f;
        }
        _cloneInto(f) {
          f || (f = Object.create(Object.getPrototypeOf(this), {}));
          const { oHash: i, iHash: r, finished: n, destroyed: u, blockLen: a, outputLen: d } = this;
          return f = f, f.finished = n, f.destroyed = u, f.blockLen = a, f.outputLen = d, f.oHash = i._cloneInto(f.oHash), f.iHash = r._cloneInto(f.iHash), f;
        }
        clone() {
          return this._cloneInto();
        }
        destroy() {
          this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
        }
      }
      e.HMAC = g;
      const v = (l, f, i) => new g(l, f).update(i).digest();
      e.hmac = v, e.hmac.create = (l, f) => new g(l, f);
    }(jt)), jt;
  }
  var bn;
  function As() {
    if (bn) return Xr;
    bn = 1, Object.defineProperty(Xr, "__esModule", {
      value: true
    }), Xr.pbkdf2 = l, Xr.pbkdf2Async = f;
    const e = Da(), t = Mr();
    function g(i, r, n, u) {
      (0, t.ahash)(i);
      const a = (0, t.checkOpts)({
        dkLen: 32,
        asyncTick: 10
      }, u), { c: d, dkLen: s, asyncTick: b } = a;
      if ((0, t.anumber)(d), (0, t.anumber)(s), (0, t.anumber)(b), d < 1) throw new Error("iterations (c) should be >= 1");
      const p = (0, t.kdfInputToBytes)(r), c = (0, t.kdfInputToBytes)(n), y = new Uint8Array(s), w = e.hmac.create(i, p), E = w._cloneInto().update(c);
      return {
        c: d,
        dkLen: s,
        asyncTick: b,
        DK: y,
        PRF: w,
        PRFSalt: E
      };
    }
    function v(i, r, n, u, a) {
      return i.destroy(), r.destroy(), u && u.destroy(), (0, t.clean)(a), n;
    }
    function l(i, r, n, u) {
      const { c: a, dkLen: d, DK: s, PRF: b, PRFSalt: p } = g(i, r, n, u);
      let c;
      const y = new Uint8Array(4), w = (0, t.createView)(y), E = new Uint8Array(b.outputLen);
      for (let k = 1, S = 0; S < d; k++, S += b.outputLen) {
        const I = s.subarray(S, S + b.outputLen);
        w.setInt32(0, k, false), (c = p._cloneInto(c)).update(y).digestInto(E), I.set(E.subarray(0, I.length));
        for (let U = 1; U < a; U++) {
          b._cloneInto(c).update(E).digestInto(E);
          for (let R = 0; R < I.length; R++) I[R] ^= E[R];
        }
      }
      return v(b, p, s, c, E);
    }
    async function f(i, r, n, u) {
      const { c: a, dkLen: d, asyncTick: s, DK: b, PRF: p, PRFSalt: c } = g(i, r, n, u);
      let y;
      const w = new Uint8Array(4), E = (0, t.createView)(w), k = new Uint8Array(p.outputLen);
      for (let S = 1, I = 0; I < d; S++, I += p.outputLen) {
        const U = b.subarray(I, I + p.outputLen);
        E.setInt32(0, S, false), (y = c._cloneInto(y)).update(w).digestInto(k), U.set(k.subarray(0, U.length)), await (0, t.asyncLoop)(a - 1, s, () => {
          p._cloneInto(y).update(k).digestInto(k);
          for (let R = 0; R < U.length; R++) U[R] ^= k[R];
        });
      }
      return v(p, c, b, y, k);
    }
    return Xr;
  }
  var Le = {};
  const Ps = JSON.parse('["abdikace","abeceda","adresa","agrese","akce","aktovka","alej","alkohol","amputace","ananas","andulka","anekdota","anketa","antika","anulovat","archa","arogance","asfalt","asistent","aspirace","astma","astronom","atlas","atletika","atol","autobus","azyl","babka","bachor","bacil","baculka","badatel","bageta","bagr","bahno","bakterie","balada","baletka","balkon","balonek","balvan","balza","bambus","bankomat","barbar","baret","barman","baroko","barva","baterka","batoh","bavlna","bazalka","bazilika","bazuka","bedna","beran","beseda","bestie","beton","bezinka","bezmoc","beztak","bicykl","bidlo","biftek","bikiny","bilance","biograf","biolog","bitva","bizon","blahobyt","blatouch","blecha","bledule","blesk","blikat","blizna","blokovat","bloudit","blud","bobek","bobr","bodlina","bodnout","bohatost","bojkot","bojovat","bokorys","bolest","borec","borovice","bota","boubel","bouchat","bouda","boule","bourat","boxer","bradavka","brambora","branka","bratr","brepta","briketa","brko","brloh","bronz","broskev","brunetka","brusinka","brzda","brzy","bublina","bubnovat","buchta","buditel","budka","budova","bufet","bujarost","bukvice","buldok","bulva","bunda","bunkr","burza","butik","buvol","buzola","bydlet","bylina","bytovka","bzukot","capart","carevna","cedr","cedule","cejch","cejn","cela","celer","celkem","celnice","cenina","cennost","cenovka","centrum","cenzor","cestopis","cetka","chalupa","chapadlo","charita","chata","chechtat","chemie","chichot","chirurg","chlad","chleba","chlubit","chmel","chmura","chobot","chochol","chodba","cholera","chomout","chopit","choroba","chov","chrapot","chrlit","chrt","chrup","chtivost","chudina","chutnat","chvat","chvilka","chvost","chyba","chystat","chytit","cibule","cigareta","cihelna","cihla","cinkot","cirkus","cisterna","citace","citrus","cizinec","cizost","clona","cokoliv","couvat","ctitel","ctnost","cudnost","cuketa","cukr","cupot","cvaknout","cval","cvik","cvrkot","cyklista","daleko","dareba","datel","datum","dcera","debata","dechovka","decibel","deficit","deflace","dekl","dekret","demokrat","deprese","derby","deska","detektiv","dikobraz","diktovat","dioda","diplom","disk","displej","divadlo","divoch","dlaha","dlouho","dluhopis","dnes","dobro","dobytek","docent","dochutit","dodnes","dohled","dohoda","dohra","dojem","dojnice","doklad","dokola","doktor","dokument","dolar","doleva","dolina","doma","dominant","domluvit","domov","donutit","dopad","dopis","doplnit","doposud","doprovod","dopustit","dorazit","dorost","dort","dosah","doslov","dostatek","dosud","dosyta","dotaz","dotek","dotknout","doufat","doutnat","dovozce","dozadu","doznat","dozorce","drahota","drak","dramatik","dravec","draze","drdol","drobnost","drogerie","drozd","drsnost","drtit","drzost","duben","duchovno","dudek","duha","duhovka","dusit","dusno","dutost","dvojice","dvorec","dynamit","ekolog","ekonomie","elektron","elipsa","email","emise","emoce","empatie","epizoda","epocha","epopej","epos","esej","esence","eskorta","eskymo","etiketa","euforie","evoluce","exekuce","exkurze","expedice","exploze","export","extrakt","facka","fajfka","fakulta","fanatik","fantazie","farmacie","favorit","fazole","federace","fejeton","fenka","fialka","figurant","filozof","filtr","finance","finta","fixace","fjord","flanel","flirt","flotila","fond","fosfor","fotbal","fotka","foton","frakce","freska","fronta","fukar","funkce","fyzika","galeje","garant","genetika","geolog","gilotina","glazura","glejt","golem","golfista","gotika","graf","gramofon","granule","grep","gril","grog","groteska","guma","hadice","hadr","hala","halenka","hanba","hanopis","harfa","harpuna","havran","hebkost","hejkal","hejno","hejtman","hektar","helma","hematom","herec","herna","heslo","hezky","historik","hladovka","hlasivky","hlava","hledat","hlen","hlodavec","hloh","hloupost","hltat","hlubina","hluchota","hmat","hmota","hmyz","hnis","hnojivo","hnout","hoblina","hoboj","hoch","hodiny","hodlat","hodnota","hodovat","hojnost","hokej","holinka","holka","holub","homole","honitba","honorace","horal","horda","horizont","horko","horlivec","hormon","hornina","horoskop","horstvo","hospoda","hostina","hotovost","houba","houf","houpat","houska","hovor","hradba","hranice","hravost","hrazda","hrbolek","hrdina","hrdlo","hrdost","hrnek","hrobka","hromada","hrot","hrouda","hrozen","hrstka","hrubost","hryzat","hubenost","hubnout","hudba","hukot","humr","husita","hustota","hvozd","hybnost","hydrant","hygiena","hymna","hysterik","idylka","ihned","ikona","iluze","imunita","infekce","inflace","inkaso","inovace","inspekce","internet","invalida","investor","inzerce","ironie","jablko","jachta","jahoda","jakmile","jakost","jalovec","jantar","jarmark","jaro","jasan","jasno","jatka","javor","jazyk","jedinec","jedle","jednatel","jehlan","jekot","jelen","jelito","jemnost","jenom","jepice","jeseter","jevit","jezdec","jezero","jinak","jindy","jinoch","jiskra","jistota","jitrnice","jizva","jmenovat","jogurt","jurta","kabaret","kabel","kabinet","kachna","kadet","kadidlo","kahan","kajak","kajuta","kakao","kaktus","kalamita","kalhoty","kalibr","kalnost","kamera","kamkoliv","kamna","kanibal","kanoe","kantor","kapalina","kapela","kapitola","kapka","kaple","kapota","kapr","kapusta","kapybara","karamel","karotka","karton","kasa","katalog","katedra","kauce","kauza","kavalec","kazajka","kazeta","kazivost","kdekoliv","kdesi","kedluben","kemp","keramika","kino","klacek","kladivo","klam","klapot","klasika","klaun","klec","klenba","klepat","klesnout","klid","klima","klisna","klobouk","klokan","klopa","kloub","klubovna","klusat","kluzkost","kmen","kmitat","kmotr","kniha","knot","koalice","koberec","kobka","kobliha","kobyla","kocour","kohout","kojenec","kokos","koktejl","kolaps","koleda","kolize","kolo","komando","kometa","komik","komnata","komora","kompas","komunita","konat","koncept","kondice","konec","konfese","kongres","konina","konkurs","kontakt","konzerva","kopanec","kopie","kopnout","koprovka","korbel","korektor","kormidlo","koroptev","korpus","koruna","koryto","korzet","kosatec","kostka","kotel","kotleta","kotoul","koukat","koupelna","kousek","kouzlo","kovboj","koza","kozoroh","krabice","krach","krajina","kralovat","krasopis","kravata","kredit","krejcar","kresba","kreveta","kriket","kritik","krize","krkavec","krmelec","krmivo","krocan","krok","kronika","kropit","kroupa","krovka","krtek","kruhadlo","krupice","krutost","krvinka","krychle","krypta","krystal","kryt","kudlanka","kufr","kujnost","kukla","kulajda","kulich","kulka","kulomet","kultura","kuna","kupodivu","kurt","kurzor","kutil","kvalita","kvasinka","kvestor","kynolog","kyselina","kytara","kytice","kytka","kytovec","kyvadlo","labrador","lachtan","ladnost","laik","lakomec","lamela","lampa","lanovka","lasice","laso","lastura","latinka","lavina","lebka","leckdy","leden","lednice","ledovka","ledvina","legenda","legie","legrace","lehce","lehkost","lehnout","lektvar","lenochod","lentilka","lepenka","lepidlo","letadlo","letec","letmo","letokruh","levhart","levitace","levobok","libra","lichotka","lidojed","lidskost","lihovina","lijavec","lilek","limetka","linie","linka","linoleum","listopad","litina","litovat","lobista","lodivod","logika","logoped","lokalita","loket","lomcovat","lopata","lopuch","lord","losos","lotr","loudal","louh","louka","louskat","lovec","lstivost","lucerna","lucifer","lump","lusk","lustrace","lvice","lyra","lyrika","lysina","madam","madlo","magistr","mahagon","majetek","majitel","majorita","makak","makovice","makrela","malba","malina","malovat","malvice","maminka","mandle","manko","marnost","masakr","maskot","masopust","matice","matrika","maturita","mazanec","mazivo","mazlit","mazurka","mdloba","mechanik","meditace","medovina","melasa","meloun","mentolka","metla","metoda","metr","mezera","migrace","mihnout","mihule","mikina","mikrofon","milenec","milimetr","milost","mimika","mincovna","minibar","minomet","minulost","miska","mistr","mixovat","mladost","mlha","mlhovina","mlok","mlsat","mluvit","mnich","mnohem","mobil","mocnost","modelka","modlitba","mohyla","mokro","molekula","momentka","monarcha","monokl","monstrum","montovat","monzun","mosaz","moskyt","most","motivace","motorka","motyka","moucha","moudrost","mozaika","mozek","mozol","mramor","mravenec","mrkev","mrtvola","mrzet","mrzutost","mstitel","mudrc","muflon","mulat","mumie","munice","muset","mutace","muzeum","muzikant","myslivec","mzda","nabourat","nachytat","nadace","nadbytek","nadhoz","nadobro","nadpis","nahlas","nahnat","nahodile","nahradit","naivita","najednou","najisto","najmout","naklonit","nakonec","nakrmit","nalevo","namazat","namluvit","nanometr","naoko","naopak","naostro","napadat","napevno","naplnit","napnout","naposled","naprosto","narodit","naruby","narychlo","nasadit","nasekat","naslepo","nastat","natolik","navenek","navrch","navzdory","nazvat","nebe","nechat","necky","nedaleko","nedbat","neduh","negace","nehet","nehoda","nejen","nejprve","neklid","nelibost","nemilost","nemoc","neochota","neonka","nepokoj","nerost","nerv","nesmysl","nesoulad","netvor","neuron","nevina","nezvykle","nicota","nijak","nikam","nikdy","nikl","nikterak","nitro","nocleh","nohavice","nominace","nora","norek","nositel","nosnost","nouze","noviny","novota","nozdra","nuda","nudle","nuget","nutit","nutnost","nutrie","nymfa","obal","obarvit","obava","obdiv","obec","obehnat","obejmout","obezita","obhajoba","obilnice","objasnit","objekt","obklopit","oblast","oblek","obliba","obloha","obluda","obnos","obohatit","obojek","obout","obrazec","obrna","obruba","obrys","obsah","obsluha","obstarat","obuv","obvaz","obvinit","obvod","obvykle","obyvatel","obzor","ocas","ocel","ocenit","ochladit","ochota","ochrana","ocitnout","odboj","odbyt","odchod","odcizit","odebrat","odeslat","odevzdat","odezva","odhadce","odhodit","odjet","odjinud","odkaz","odkoupit","odliv","odluka","odmlka","odolnost","odpad","odpis","odplout","odpor","odpustit","odpykat","odrazka","odsoudit","odstup","odsun","odtok","odtud","odvaha","odveta","odvolat","odvracet","odznak","ofina","ofsajd","ohlas","ohnisko","ohrada","ohrozit","ohryzek","okap","okenice","oklika","okno","okouzlit","okovy","okrasa","okres","okrsek","okruh","okupant","okurka","okusit","olejnina","olizovat","omak","omeleta","omezit","omladina","omlouvat","omluva","omyl","onehdy","opakovat","opasek","operace","opice","opilost","opisovat","opora","opozice","opravdu","oproti","orbital","orchestr","orgie","orlice","orloj","ortel","osada","oschnout","osika","osivo","oslava","oslepit","oslnit","oslovit","osnova","osoba","osolit","ospalec","osten","ostraha","ostuda","ostych","osvojit","oteplit","otisk","otop","otrhat","otrlost","otrok","otruby","otvor","ovanout","ovar","oves","ovlivnit","ovoce","oxid","ozdoba","pachatel","pacient","padouch","pahorek","pakt","palanda","palec","palivo","paluba","pamflet","pamlsek","panenka","panika","panna","panovat","panstvo","pantofle","paprika","parketa","parodie","parta","paruka","paryba","paseka","pasivita","pastelka","patent","patrona","pavouk","pazneht","pazourek","pecka","pedagog","pejsek","peklo","peloton","penalta","pendrek","penze","periskop","pero","pestrost","petarda","petice","petrolej","pevnina","pexeso","pianista","piha","pijavice","pikle","piknik","pilina","pilnost","pilulka","pinzeta","pipeta","pisatel","pistole","pitevna","pivnice","pivovar","placenta","plakat","plamen","planeta","plastika","platit","plavidlo","plaz","plech","plemeno","plenta","ples","pletivo","plevel","plivat","plnit","plno","plocha","plodina","plomba","plout","pluk","plyn","pobavit","pobyt","pochod","pocit","poctivec","podat","podcenit","podepsat","podhled","podivit","podklad","podmanit","podnik","podoba","podpora","podraz","podstata","podvod","podzim","poezie","pohanka","pohnutka","pohovor","pohroma","pohyb","pointa","pojistka","pojmout","pokazit","pokles","pokoj","pokrok","pokuta","pokyn","poledne","polibek","polknout","poloha","polynom","pomalu","pominout","pomlka","pomoc","pomsta","pomyslet","ponechat","ponorka","ponurost","popadat","popel","popisek","poplach","poprosit","popsat","popud","poradce","porce","porod","porucha","poryv","posadit","posed","posila","poskok","poslanec","posoudit","pospolu","postava","posudek","posyp","potah","potkan","potlesk","potomek","potrava","potupa","potvora","poukaz","pouto","pouzdro","povaha","povidla","povlak","povoz","povrch","povstat","povyk","povzdech","pozdrav","pozemek","poznatek","pozor","pozvat","pracovat","prahory","praktika","prales","praotec","praporek","prase","pravda","princip","prkno","probudit","procento","prodej","profese","prohra","projekt","prolomit","promile","pronikat","propad","prorok","prosba","proton","proutek","provaz","prskavka","prsten","prudkost","prut","prvek","prvohory","psanec","psovod","pstruh","ptactvo","puberta","puch","pudl","pukavec","puklina","pukrle","pult","pumpa","punc","pupen","pusa","pusinka","pustina","putovat","putyka","pyramida","pysk","pytel","racek","rachot","radiace","radnice","radon","raft","ragby","raketa","rakovina","rameno","rampouch","rande","rarach","rarita","rasovna","rastr","ratolest","razance","razidlo","reagovat","reakce","recept","redaktor","referent","reflex","rejnok","reklama","rekord","rekrut","rektor","reputace","revize","revma","revolver","rezerva","riskovat","riziko","robotika","rodokmen","rohovka","rokle","rokoko","romaneto","ropovod","ropucha","rorejs","rosol","rostlina","rotmistr","rotoped","rotunda","roubenka","roucho","roup","roura","rovina","rovnice","rozbor","rozchod","rozdat","rozeznat","rozhodce","rozinka","rozjezd","rozkaz","rozloha","rozmar","rozpad","rozruch","rozsah","roztok","rozum","rozvod","rubrika","ruchadlo","rukavice","rukopis","ryba","rybolov","rychlost","rydlo","rypadlo","rytina","ryzost","sadista","sahat","sako","samec","samizdat","samota","sanitka","sardinka","sasanka","satelit","sazba","sazenice","sbor","schovat","sebranka","secese","sedadlo","sediment","sedlo","sehnat","sejmout","sekera","sekta","sekunda","sekvoje","semeno","seno","servis","sesadit","seshora","seskok","seslat","sestra","sesuv","sesypat","setba","setina","setkat","setnout","setrvat","sever","seznam","shoda","shrnout","sifon","silnice","sirka","sirotek","sirup","situace","skafandr","skalisko","skanzen","skaut","skeptik","skica","skladba","sklenice","sklo","skluz","skoba","skokan","skoro","skripta","skrz","skupina","skvost","skvrna","slabika","sladidlo","slanina","slast","slavnost","sledovat","slepec","sleva","slezina","slib","slina","sliznice","slon","sloupek","slovo","sluch","sluha","slunce","slupka","slza","smaragd","smetana","smilstvo","smlouva","smog","smrad","smrk","smrtka","smutek","smysl","snad","snaha","snob","sobota","socha","sodovka","sokol","sopka","sotva","souboj","soucit","soudce","souhlas","soulad","soumrak","souprava","soused","soutok","souviset","spalovna","spasitel","spis","splav","spodek","spojenec","spolu","sponzor","spornost","spousta","sprcha","spustit","sranda","sraz","srdce","srna","srnec","srovnat","srpen","srst","srub","stanice","starosta","statika","stavba","stehno","stezka","stodola","stolek","stopa","storno","stoupat","strach","stres","strhnout","strom","struna","studna","stupnice","stvol","styk","subjekt","subtropy","suchar","sudost","sukno","sundat","sunout","surikata","surovina","svah","svalstvo","svetr","svatba","svazek","svisle","svitek","svoboda","svodidlo","svorka","svrab","sykavka","sykot","synek","synovec","sypat","sypkost","syrovost","sysel","sytost","tabletka","tabule","tahoun","tajemno","tajfun","tajga","tajit","tajnost","taktika","tamhle","tampon","tancovat","tanec","tanker","tapeta","tavenina","tazatel","technika","tehdy","tekutina","telefon","temnota","tendence","tenista","tenor","teplota","tepna","teprve","terapie","termoska","textil","ticho","tiskopis","titulek","tkadlec","tkanina","tlapka","tleskat","tlukot","tlupa","tmel","toaleta","topinka","topol","torzo","touha","toulec","tradice","traktor","tramp","trasa","traverza","trefit","trest","trezor","trhavina","trhlina","trochu","trojice","troska","trouba","trpce","trpitel","trpkost","trubec","truchlit","truhlice","trus","trvat","tudy","tuhnout","tuhost","tundra","turista","turnaj","tuzemsko","tvaroh","tvorba","tvrdost","tvrz","tygr","tykev","ubohost","uboze","ubrat","ubrousek","ubrus","ubytovna","ucho","uctivost","udivit","uhradit","ujednat","ujistit","ujmout","ukazatel","uklidnit","uklonit","ukotvit","ukrojit","ulice","ulita","ulovit","umyvadlo","unavit","uniforma","uniknout","upadnout","uplatnit","uplynout","upoutat","upravit","uran","urazit","usednout","usilovat","usmrtit","usnadnit","usnout","usoudit","ustlat","ustrnout","utahovat","utkat","utlumit","utonout","utopenec","utrousit","uvalit","uvolnit","uvozovka","uzdravit","uzel","uzenina","uzlina","uznat","vagon","valcha","valoun","vana","vandal","vanilka","varan","varhany","varovat","vcelku","vchod","vdova","vedro","vegetace","vejce","velbloud","veletrh","velitel","velmoc","velryba","venkov","veranda","verze","veselka","veskrze","vesnice","vespodu","vesta","veterina","veverka","vibrace","vichr","videohra","vidina","vidle","vila","vinice","viset","vitalita","vize","vizitka","vjezd","vklad","vkus","vlajka","vlak","vlasec","vlevo","vlhkost","vliv","vlnovka","vloupat","vnucovat","vnuk","voda","vodivost","vodoznak","vodstvo","vojensky","vojna","vojsko","volant","volba","volit","volno","voskovka","vozidlo","vozovna","vpravo","vrabec","vracet","vrah","vrata","vrba","vrcholek","vrhat","vrstva","vrtule","vsadit","vstoupit","vstup","vtip","vybavit","vybrat","vychovat","vydat","vydra","vyfotit","vyhledat","vyhnout","vyhodit","vyhradit","vyhubit","vyjasnit","vyjet","vyjmout","vyklopit","vykonat","vylekat","vymazat","vymezit","vymizet","vymyslet","vynechat","vynikat","vynutit","vypadat","vyplatit","vypravit","vypustit","vyrazit","vyrovnat","vyrvat","vyslovit","vysoko","vystavit","vysunout","vysypat","vytasit","vytesat","vytratit","vyvinout","vyvolat","vyvrhel","vyzdobit","vyznat","vzadu","vzbudit","vzchopit","vzdor","vzduch","vzdychat","vzestup","vzhledem","vzkaz","vzlykat","vznik","vzorek","vzpoura","vztah","vztek","xylofon","zabrat","zabydlet","zachovat","zadarmo","zadusit","zafoukat","zahltit","zahodit","zahrada","zahynout","zajatec","zajet","zajistit","zaklepat","zakoupit","zalepit","zamezit","zamotat","zamyslet","zanechat","zanikat","zaplatit","zapojit","zapsat","zarazit","zastavit","zasunout","zatajit","zatemnit","zatknout","zaujmout","zavalit","zavelet","zavinit","zavolat","zavrtat","zazvonit","zbavit","zbrusu","zbudovat","zbytek","zdaleka","zdarma","zdatnost","zdivo","zdobit","zdroj","zdvih","zdymadlo","zelenina","zeman","zemina","zeptat","zezadu","zezdola","zhatit","zhltnout","zhluboka","zhotovit","zhruba","zima","zimnice","zjemnit","zklamat","zkoumat","zkratka","zkumavka","zlato","zlehka","zloba","zlom","zlost","zlozvyk","zmapovat","zmar","zmatek","zmije","zmizet","zmocnit","zmodrat","zmrzlina","zmutovat","znak","znalost","znamenat","znovu","zobrazit","zotavit","zoubek","zoufale","zplodit","zpomalit","zprava","zprostit","zprudka","zprvu","zrada","zranit","zrcadlo","zrnitost","zrno","zrovna","zrychlit","zrzavost","zticha","ztratit","zubovina","zubr","zvednout","zvenku","zvesela","zvon","zvrat","zvukovod","zvyk"]'), Bs = JSON.parse('["\u7684","\u4E00","\u662F","\u5728","\u4E0D","\u4E86","\u6709","\u548C","\u4EBA","\u8FD9","\u4E2D","\u5927","\u4E3A","\u4E0A","\u4E2A","\u56FD","\u6211","\u4EE5","\u8981","\u4ED6","\u65F6","\u6765","\u7528","\u4EEC","\u751F","\u5230","\u4F5C","\u5730","\u4E8E","\u51FA","\u5C31","\u5206","\u5BF9","\u6210","\u4F1A","\u53EF","\u4E3B","\u53D1","\u5E74","\u52A8","\u540C","\u5DE5","\u4E5F","\u80FD","\u4E0B","\u8FC7","\u5B50","\u8BF4","\u4EA7","\u79CD","\u9762","\u800C","\u65B9","\u540E","\u591A","\u5B9A","\u884C","\u5B66","\u6CD5","\u6240","\u6C11","\u5F97","\u7ECF","\u5341","\u4E09","\u4E4B","\u8FDB","\u7740","\u7B49","\u90E8","\u5EA6","\u5BB6","\u7535","\u529B","\u91CC","\u5982","\u6C34","\u5316","\u9AD8","\u81EA","\u4E8C","\u7406","\u8D77","\u5C0F","\u7269","\u73B0","\u5B9E","\u52A0","\u91CF","\u90FD","\u4E24","\u4F53","\u5236","\u673A","\u5F53","\u4F7F","\u70B9","\u4ECE","\u4E1A","\u672C","\u53BB","\u628A","\u6027","\u597D","\u5E94","\u5F00","\u5B83","\u5408","\u8FD8","\u56E0","\u7531","\u5176","\u4E9B","\u7136","\u524D","\u5916","\u5929","\u653F","\u56DB","\u65E5","\u90A3","\u793E","\u4E49","\u4E8B","\u5E73","\u5F62","\u76F8","\u5168","\u8868","\u95F4","\u6837","\u4E0E","\u5173","\u5404","\u91CD","\u65B0","\u7EBF","\u5185","\u6570","\u6B63","\u5FC3","\u53CD","\u4F60","\u660E","\u770B","\u539F","\u53C8","\u4E48","\u5229","\u6BD4","\u6216","\u4F46","\u8D28","\u6C14","\u7B2C","\u5411","\u9053","\u547D","\u6B64","\u53D8","\u6761","\u53EA","\u6CA1","\u7ED3","\u89E3","\u95EE","\u610F","\u5EFA","\u6708","\u516C","\u65E0","\u7CFB","\u519B","\u5F88","\u60C5","\u8005","\u6700","\u7ACB","\u4EE3","\u60F3","\u5DF2","\u901A","\u5E76","\u63D0","\u76F4","\u9898","\u515A","\u7A0B","\u5C55","\u4E94","\u679C","\u6599","\u8C61","\u5458","\u9769","\u4F4D","\u5165","\u5E38","\u6587","\u603B","\u6B21","\u54C1","\u5F0F","\u6D3B","\u8BBE","\u53CA","\u7BA1","\u7279","\u4EF6","\u957F","\u6C42","\u8001","\u5934","\u57FA","\u8D44","\u8FB9","\u6D41","\u8DEF","\u7EA7","\u5C11","\u56FE","\u5C71","\u7EDF","\u63A5","\u77E5","\u8F83","\u5C06","\u7EC4","\u89C1","\u8BA1","\u522B","\u5979","\u624B","\u89D2","\u671F","\u6839","\u8BBA","\u8FD0","\u519C","\u6307","\u51E0","\u4E5D","\u533A","\u5F3A","\u653E","\u51B3","\u897F","\u88AB","\u5E72","\u505A","\u5FC5","\u6218","\u5148","\u56DE","\u5219","\u4EFB","\u53D6","\u636E","\u5904","\u961F","\u5357","\u7ED9","\u8272","\u5149","\u95E8","\u5373","\u4FDD","\u6CBB","\u5317","\u9020","\u767E","\u89C4","\u70ED","\u9886","\u4E03","\u6D77","\u53E3","\u4E1C","\u5BFC","\u5668","\u538B","\u5FD7","\u4E16","\u91D1","\u589E","\u4E89","\u6D4E","\u9636","\u6CB9","\u601D","\u672F","\u6781","\u4EA4","\u53D7","\u8054","\u4EC0","\u8BA4","\u516D","\u5171","\u6743","\u6536","\u8BC1","\u6539","\u6E05","\u7F8E","\u518D","\u91C7","\u8F6C","\u66F4","\u5355","\u98CE","\u5207","\u6253","\u767D","\u6559","\u901F","\u82B1","\u5E26","\u5B89","\u573A","\u8EAB","\u8F66","\u4F8B","\u771F","\u52A1","\u5177","\u4E07","\u6BCF","\u76EE","\u81F3","\u8FBE","\u8D70","\u79EF","\u793A","\u8BAE","\u58F0","\u62A5","\u6597","\u5B8C","\u7C7B","\u516B","\u79BB","\u534E","\u540D","\u786E","\u624D","\u79D1","\u5F20","\u4FE1","\u9A6C","\u8282","\u8BDD","\u7C73","\u6574","\u7A7A","\u5143","\u51B5","\u4ECA","\u96C6","\u6E29","\u4F20","\u571F","\u8BB8","\u6B65","\u7FA4","\u5E7F","\u77F3","\u8BB0","\u9700","\u6BB5","\u7814","\u754C","\u62C9","\u6797","\u5F8B","\u53EB","\u4E14","\u7A76","\u89C2","\u8D8A","\u7EC7","\u88C5","\u5F71","\u7B97","\u4F4E","\u6301","\u97F3","\u4F17","\u4E66","\u5E03","\u590D","\u5BB9","\u513F","\u987B","\u9645","\u5546","\u975E","\u9A8C","\u8FDE","\u65AD","\u6DF1","\u96BE","\u8FD1","\u77FF","\u5343","\u5468","\u59D4","\u7D20","\u6280","\u5907","\u534A","\u529E","\u9752","\u7701","\u5217","\u4E60","\u54CD","\u7EA6","\u652F","\u822C","\u53F2","\u611F","\u52B3","\u4FBF","\u56E2","\u5F80","\u9178","\u5386","\u5E02","\u514B","\u4F55","\u9664","\u6D88","\u6784","\u5E9C","\u79F0","\u592A","\u51C6","\u7CBE","\u503C","\u53F7","\u7387","\u65CF","\u7EF4","\u5212","\u9009","\u6807","\u5199","\u5B58","\u5019","\u6BDB","\u4EB2","\u5FEB","\u6548","\u65AF","\u9662","\u67E5","\u6C5F","\u578B","\u773C","\u738B","\u6309","\u683C","\u517B","\u6613","\u7F6E","\u6D3E","\u5C42","\u7247","\u59CB","\u5374","\u4E13","\u72B6","\u80B2","\u5382","\u4EAC","\u8BC6","\u9002","\u5C5E","\u5706","\u5305","\u706B","\u4F4F","\u8C03","\u6EE1","\u53BF","\u5C40","\u7167","\u53C2","\u7EA2","\u7EC6","\u5F15","\u542C","\u8BE5","\u94C1","\u4EF7","\u4E25","\u9996","\u5E95","\u6DB2","\u5B98","\u5FB7","\u968F","\u75C5","\u82CF","\u5931","\u5C14","\u6B7B","\u8BB2","\u914D","\u5973","\u9EC4","\u63A8","\u663E","\u8C08","\u7F6A","\u795E","\u827A","\u5462","\u5E2D","\u542B","\u4F01","\u671B","\u5BC6","\u6279","\u8425","\u9879","\u9632","\u4E3E","\u7403","\u82F1","\u6C27","\u52BF","\u544A","\u674E","\u53F0","\u843D","\u6728","\u5E2E","\u8F6E","\u7834","\u4E9A","\u5E08","\u56F4","\u6CE8","\u8FDC","\u5B57","\u6750","\u6392","\u4F9B","\u6CB3","\u6001","\u5C01","\u53E6","\u65BD","\u51CF","\u6811","\u6EB6","\u600E","\u6B62","\u6848","\u8A00","\u58EB","\u5747","\u6B66","\u56FA","\u53F6","\u9C7C","\u6CE2","\u89C6","\u4EC5","\u8D39","\u7D27","\u7231","\u5DE6","\u7AE0","\u65E9","\u671D","\u5BB3","\u7EED","\u8F7B","\u670D","\u8BD5","\u98DF","\u5145","\u5175","\u6E90","\u5224","\u62A4","\u53F8","\u8DB3","\u67D0","\u7EC3","\u5DEE","\u81F4","\u677F","\u7530","\u964D","\u9ED1","\u72AF","\u8D1F","\u51FB","\u8303","\u7EE7","\u5174","\u4F3C","\u4F59","\u575A","\u66F2","\u8F93","\u4FEE","\u6545","\u57CE","\u592B","\u591F","\u9001","\u7B14","\u8239","\u5360","\u53F3","\u8D22","\u5403","\u5BCC","\u6625","\u804C","\u89C9","\u6C49","\u753B","\u529F","\u5DF4","\u8DDF","\u867D","\u6742","\u98DE","\u68C0","\u5438","\u52A9","\u5347","\u9633","\u4E92","\u521D","\u521B","\u6297","\u8003","\u6295","\u574F","\u7B56","\u53E4","\u5F84","\u6362","\u672A","\u8DD1","\u7559","\u94A2","\u66FE","\u7AEF","\u8D23","\u7AD9","\u7B80","\u8FF0","\u94B1","\u526F","\u5C3D","\u5E1D","\u5C04","\u8349","\u51B2","\u627F","\u72EC","\u4EE4","\u9650","\u963F","\u5BA3","\u73AF","\u53CC","\u8BF7","\u8D85","\u5FAE","\u8BA9","\u63A7","\u5DDE","\u826F","\u8F74","\u627E","\u5426","\u7EAA","\u76CA","\u4F9D","\u4F18","\u9876","\u7840","\u8F7D","\u5012","\u623F","\u7A81","\u5750","\u7C89","\u654C","\u7565","\u5BA2","\u8881","\u51B7","\u80DC","\u7EDD","\u6790","\u5757","\u5242","\u6D4B","\u4E1D","\u534F","\u8BC9","\u5FF5","\u9648","\u4ECD","\u7F57","\u76D0","\u53CB","\u6D0B","\u9519","\u82E6","\u591C","\u5211","\u79FB","\u9891","\u9010","\u9760","\u6DF7","\u6BCD","\u77ED","\u76AE","\u7EC8","\u805A","\u6C7D","\u6751","\u4E91","\u54EA","\u65E2","\u8DDD","\u536B","\u505C","\u70C8","\u592E","\u5BDF","\u70E7","\u8FC5","\u5883","\u82E5","\u5370","\u6D32","\u523B","\u62EC","\u6FC0","\u5B54","\u641E","\u751A","\u5BA4","\u5F85","\u6838","\u6821","\u6563","\u4FB5","\u5427","\u7532","\u6E38","\u4E45","\u83DC","\u5473","\u65E7","\u6A21","\u6E56","\u8D27","\u635F","\u9884","\u963B","\u6BEB","\u666E","\u7A33","\u4E59","\u5988","\u690D","\u606F","\u6269","\u94F6","\u8BED","\u6325","\u9152","\u5B88","\u62FF","\u5E8F","\u7EB8","\u533B","\u7F3A","\u96E8","\u5417","\u9488","\u5218","\u554A","\u6025","\u5531","\u8BEF","\u8BAD","\u613F","\u5BA1","\u9644","\u83B7","\u8336","\u9C9C","\u7CAE","\u65A4","\u5B69","\u8131","\u786B","\u80A5","\u5584","\u9F99","\u6F14","\u7236","\u6E10","\u8840","\u6B22","\u68B0","\u638C","\u6B4C","\u6C99","\u521A","\u653B","\u8C13","\u76FE","\u8BA8","\u665A","\u7C92","\u4E71","\u71C3","\u77DB","\u4E4E","\u6740","\u836F","\u5B81","\u9C81","\u8D35","\u949F","\u7164","\u8BFB","\u73ED","\u4F2F","\u9999","\u4ECB","\u8FEB","\u53E5","\u4E30","\u57F9","\u63E1","\u5170","\u62C5","\u5F26","\u86CB","\u6C89","\u5047","\u7A7F","\u6267","\u7B54","\u4E50","\u8C01","\u987A","\u70DF","\u7F29","\u5F81","\u8138","\u559C","\u677E","\u811A","\u56F0","\u5F02","\u514D","\u80CC","\u661F","\u798F","\u4E70","\u67D3","\u4E95","\u6982","\u6162","\u6015","\u78C1","\u500D","\u7956","\u7687","\u4FC3","\u9759","\u8865","\u8BC4","\u7FFB","\u8089","\u8DF5","\u5C3C","\u8863","\u5BBD","\u626C","\u68C9","\u5E0C","\u4F24","\u64CD","\u5782","\u79CB","\u5B9C","\u6C22","\u5957","\u7763","\u632F","\u67B6","\u4EAE","\u672B","\u5BAA","\u5E86","\u7F16","\u725B","\u89E6","\u6620","\u96F7","\u9500","\u8BD7","\u5EA7","\u5C45","\u6293","\u88C2","\u80DE","\u547C","\u5A18","\u666F","\u5A01","\u7EFF","\u6676","\u539A","\u76DF","\u8861","\u9E21","\u5B59","\u5EF6","\u5371","\u80F6","\u5C4B","\u4E61","\u4E34","\u9646","\u987E","\u6389","\u5440","\u706F","\u5C81","\u63AA","\u675F","\u8010","\u5267","\u7389","\u8D75","\u8DF3","\u54E5","\u5B63","\u8BFE","\u51EF","\u80E1","\u989D","\u6B3E","\u7ECD","\u5377","\u9F50","\u4F1F","\u84B8","\u6B96","\u6C38","\u5B97","\u82D7","\u5DDD","\u7089","\u5CA9","\u5F31","\u96F6","\u6768","\u594F","\u6CBF","\u9732","\u6746","\u63A2","\u6ED1","\u9547","\u996D","\u6D53","\u822A","\u6000","\u8D76","\u5E93","\u593A","\u4F0A","\u7075","\u7A0E","\u9014","\u706D","\u8D5B","\u5F52","\u53EC","\u9F13","\u64AD","\u76D8","\u88C1","\u9669","\u5EB7","\u552F","\u5F55","\u83CC","\u7EAF","\u501F","\u7CD6","\u76D6","\u6A2A","\u7B26","\u79C1","\u52AA","\u5802","\u57DF","\u67AA","\u6DA6","\u5E45","\u54C8","\u7ADF","\u719F","\u866B","\u6CFD","\u8111","\u58E4","\u78B3","\u6B27","\u904D","\u4FA7","\u5BE8","\u6562","\u5F7B","\u8651","\u659C","\u8584","\u5EAD","\u7EB3","\u5F39","\u9972","\u4F38","\u6298","\u9EA6","\u6E7F","\u6697","\u8377","\u74E6","\u585E","\u5E8A","\u7B51","\u6076","\u6237","\u8BBF","\u5854","\u5947","\u900F","\u6881","\u5200","\u65CB","\u8FF9","\u5361","\u6C2F","\u9047","\u4EFD","\u6BD2","\u6CE5","\u9000","\u6D17","\u6446","\u7070","\u5F69","\u5356","\u8017","\u590F","\u62E9","\u5FD9","\u94DC","\u732E","\u786C","\u4E88","\u7E41","\u5708","\u96EA","\u51FD","\u4EA6","\u62BD","\u7BC7","\u9635","\u9634","\u4E01","\u5C3A","\u8FFD","\u5806","\u96C4","\u8FCE","\u6CDB","\u7238","\u697C","\u907F","\u8C0B","\u5428","\u91CE","\u732A","\u65D7","\u7D2F","\u504F","\u5178","\u9986","\u7D22","\u79E6","\u8102","\u6F6E","\u7237","\u8C46","\u5FFD","\u6258","\u60CA","\u5851","\u9057","\u6108","\u6731","\u66FF","\u7EA4","\u7C97","\u503E","\u5C1A","\u75DB","\u695A","\u8C22","\u594B","\u8D2D","\u78E8","\u541B","\u6C60","\u65C1","\u788E","\u9AA8","\u76D1","\u6355","\u5F1F","\u66B4","\u5272","\u8D2F","\u6B8A","\u91CA","\u8BCD","\u4EA1","\u58C1","\u987F","\u5B9D","\u5348","\u5C18","\u95FB","\u63ED","\u70AE","\u6B8B","\u51AC","\u6865","\u5987","\u8B66","\u7EFC","\u62DB","\u5434","\u4ED8","\u6D6E","\u906D","\u5F90","\u60A8","\u6447","\u8C37","\u8D5E","\u7BB1","\u9694","\u8BA2","\u7537","\u5439","\u56ED","\u7EB7","\u5510","\u8D25","\u5B8B","\u73BB","\u5DE8","\u8015","\u5766","\u8363","\u95ED","\u6E7E","\u952E","\u51E1","\u9A7B","\u9505","\u6551","\u6069","\u5265","\u51DD","\u78B1","\u9F7F","\u622A","\u70BC","\u9EBB","\u7EBA","\u7981","\u5E9F","\u76DB","\u7248","\u7F13","\u51C0","\u775B","\u660C","\u5A5A","\u6D89","\u7B52","\u5634","\u63D2","\u5CB8","\u6717","\u5E84","\u8857","\u85CF","\u59D1","\u8D38","\u8150","\u5974","\u5566","\u60EF","\u4E58","\u4F19","\u6062","\u5300","\u7EB1","\u624E","\u8FA9","\u8033","\u5F6A","\u81E3","\u4EBF","\u7483","\u62B5","\u8109","\u79C0","\u8428","\u4FC4","\u7F51","\u821E","\u5E97","\u55B7","\u7EB5","\u5BF8","\u6C57","\u6302","\u6D2A","\u8D3A","\u95EA","\u67EC","\u7206","\u70EF","\u6D25","\u7A3B","\u5899","\u8F6F","\u52C7","\u50CF","\u6EDA","\u5398","\u8499","\u82B3","\u80AF","\u5761","\u67F1","\u8361","\u817F","\u4EEA","\u65C5","\u5C3E","\u8F67","\u51B0","\u8D21","\u767B","\u9ECE","\u524A","\u94BB","\u52D2","\u9003","\u969C","\u6C28","\u90ED","\u5CF0","\u5E01","\u6E2F","\u4F0F","\u8F68","\u4EA9","\u6BD5","\u64E6","\u83AB","\u523A","\u6D6A","\u79D8","\u63F4","\u682A","\u5065","\u552E","\u80A1","\u5C9B","\u7518","\u6CE1","\u7761","\u7AE5","\u94F8","\u6C64","\u9600","\u4F11","\u6C47","\u820D","\u7267","\u7ED5","\u70B8","\u54F2","\u78F7","\u7EE9","\u670B","\u6DE1","\u5C16","\u542F","\u9677","\u67F4","\u5448","\u5F92","\u989C","\u6CEA","\u7A0D","\u5FD8","\u6CF5","\u84DD","\u62D6","\u6D1E","\u6388","\u955C","\u8F9B","\u58EE","\u950B","\u8D2B","\u865A","\u5F2F","\u6469","\u6CF0","\u5E7C","\u5EF7","\u5C0A","\u7A97","\u7EB2","\u5F04","\u96B6","\u7591","\u6C0F","\u5BAB","\u59D0","\u9707","\u745E","\u602A","\u5C24","\u7434","\u5FAA","\u63CF","\u819C","\u8FDD","\u5939","\u8170","\u7F18","\u73E0","\u7A77","\u68EE","\u679D","\u7AF9","\u6C9F","\u50AC","\u7EF3","\u5FC6","\u90A6","\u5269","\u5E78","\u6D46","\u680F","\u62E5","\u7259","\u8D2E","\u793C","\u6EE4","\u94A0","\u7EB9","\u7F62","\u62CD","\u54B1","\u558A","\u8896","\u57C3","\u52E4","\u7F5A","\u7126","\u6F5C","\u4F0D","\u58A8","\u6B32","\u7F1D","\u59D3","\u520A","\u9971","\u4EFF","\u5956","\u94DD","\u9B3C","\u4E3D","\u8DE8","\u9ED8","\u6316","\u94FE","\u626B","\u559D","\u888B","\u70AD","\u6C61","\u5E55","\u8BF8","\u5F27","\u52B1","\u6885","\u5976","\u6D01","\u707E","\u821F","\u9274","\u82EF","\u8BBC","\u62B1","\u6BC1","\u61C2","\u5BD2","\u667A","\u57D4","\u5BC4","\u5C4A","\u8DC3","\u6E21","\u6311","\u4E39","\u8270","\u8D1D","\u78B0","\u62D4","\u7239","\u6234","\u7801","\u68A6","\u82BD","\u7194","\u8D64","\u6E14","\u54ED","\u656C","\u9897","\u5954","\u94C5","\u4EF2","\u864E","\u7A00","\u59B9","\u4E4F","\u73CD","\u7533","\u684C","\u9075","\u5141","\u9686","\u87BA","\u4ED3","\u9B4F","\u9510","\u6653","\u6C2E","\u517C","\u9690","\u788D","\u8D6B","\u62E8","\u5FE0","\u8083","\u7F38","\u7275","\u62A2","\u535A","\u5DE7","\u58F3","\u5144","\u675C","\u8BAF","\u8BDA","\u78A7","\u7965","\u67EF","\u9875","\u5DE1","\u77E9","\u60B2","\u704C","\u9F84","\u4F26","\u7968","\u5BFB","\u6842","\u94FA","\u5723","\u6050","\u6070","\u90D1","\u8DA3","\u62AC","\u8352","\u817E","\u8D34","\u67D4","\u6EF4","\u731B","\u9614","\u8F86","\u59BB","\u586B","\u64A4","\u50A8","\u7B7E","\u95F9","\u6270","\u7D2B","\u7802","\u9012","\u620F","\u540A","\u9676","\u4F10","\u5582","\u7597","\u74F6","\u5A46","\u629A","\u81C2","\u6478","\u5FCD","\u867E","\u8721","\u90BB","\u80F8","\u5DE9","\u6324","\u5076","\u5F03","\u69FD","\u52B2","\u4E73","\u9093","\u5409","\u4EC1","\u70C2","\u7816","\u79DF","\u4E4C","\u8230","\u4F34","\u74DC","\u6D45","\u4E19","\u6682","\u71E5","\u6A61","\u67F3","\u8FF7","\u6696","\u724C","\u79E7","\u80C6","\u8BE6","\u7C27","\u8E0F","\u74F7","\u8C31","\u5446","\u5BBE","\u7CCA","\u6D1B","\u8F89","\u6124","\u7ADE","\u9699","\u6012","\u7C98","\u4E43","\u7EEA","\u80A9","\u7C4D","\u654F","\u6D82","\u7199","\u7686","\u4FA6","\u60AC","\u6398","\u4EAB","\u7EA0","\u9192","\u72C2","\u9501","\u6DC0","\u6068","\u7272","\u9738","\u722C","\u8D4F","\u9006","\u73A9","\u9675","\u795D","\u79D2","\u6D59","\u8C8C","\u5F79","\u5F7C","\u6089","\u9E2D","\u8D8B","\u51E4","\u6668","\u755C","\u8F88","\u79E9","\u5375","\u7F72","\u68AF","\u708E","\u6EE9","\u68CB","\u9A71","\u7B5B","\u5CE1","\u5192","\u5565","\u5BFF","\u8BD1","\u6D78","\u6CC9","\u5E3D","\u8FDF","\u7845","\u7586","\u8D37","\u6F0F","\u7A3F","\u51A0","\u5AE9","\u80C1","\u82AF","\u7262","\u53DB","\u8680","\u5965","\u9E23","\u5CAD","\u7F8A","\u51ED","\u4E32","\u5858","\u7ED8","\u9175","\u878D","\u76C6","\u9521","\u5E99","\u7B79","\u51BB","\u8F85","\u6444","\u88AD","\u7B4B","\u62D2","\u50DA","\u65F1","\u94BE","\u9E1F","\u6F06","\u6C88","\u7709","\u758F","\u6DFB","\u68D2","\u7A57","\u785D","\u97E9","\u903C","\u626D","\u4FA8","\u51C9","\u633A","\u7897","\u683D","\u7092","\u676F","\u60A3","\u998F","\u529D","\u8C6A","\u8FBD","\u52C3","\u9E3F","\u65E6","\u540F","\u62DC","\u72D7","\u57CB","\u8F8A","\u63A9","\u996E","\u642C","\u9A82","\u8F9E","\u52FE","\u6263","\u4F30","\u848B","\u7ED2","\u96FE","\u4E08","\u6735","\u59C6","\u62DF","\u5B87","\u8F91","\u9655","\u96D5","\u507F","\u84C4","\u5D07","\u526A","\u5021","\u5385","\u54AC","\u9A76","\u85AF","\u5237","\u65A5","\u756A","\u8D4B","\u5949","\u4F5B","\u6D47","\u6F2B","\u66FC","\u6247","\u9499","\u6843","\u6276","\u4ED4","\u8FD4","\u4FD7","\u4E8F","\u8154","\u978B","\u68F1","\u8986","\u6846","\u6084","\u53D4","\u649E","\u9A97","\u52D8","\u65FA","\u6CB8","\u5B64","\u5410","\u5B5F","\u6E20","\u5C48","\u75BE","\u5999","\u60DC","\u4EF0","\u72E0","\u80C0","\u8C10","\u629B","\u9709","\u6851","\u5C97","\u561B","\u8870","\u76D7","\u6E17","\u810F","\u8D56","\u6D8C","\u751C","\u66F9","\u9605","\u808C","\u54E9","\u5389","\u70C3","\u7EAC","\u6BC5","\u6628","\u4F2A","\u75C7","\u716E","\u53F9","\u9489","\u642D","\u830E","\u7B3C","\u9177","\u5077","\u5F13","\u9525","\u6052","\u6770","\u5751","\u9F3B","\u7FFC","\u7EB6","\u53D9","\u72F1","\u902E","\u7F50","\u7EDC","\u68DA","\u6291","\u81A8","\u852C","\u5BFA","\u9AA4","\u7A46","\u51B6","\u67AF","\u518C","\u5C38","\u51F8","\u7EC5","\u576F","\u727A","\u7130","\u8F70","\u6B23","\u664B","\u7626","\u5FA1","\u952D","\u9526","\u4E27","\u65EC","\u953B","\u5784","\u641C","\u6251","\u9080","\u4EAD","\u916F","\u8FC8","\u8212","\u8106","\u9176","\u95F2","\u5FE7","\u915A","\u987D","\u7FBD","\u6DA8","\u5378","\u4ED7","\u966A","\u8F9F","\u60E9","\u676D","\u59DA","\u809A","\u6349","\u98D8","\u6F02","\u6606","\u6B3A","\u543E","\u90CE","\u70F7","\u6C41","\u5475","\u9970","\u8427","\u96C5","\u90AE","\u8FC1","\u71D5","\u6492","\u59FB","\u8D74","\u5BB4","\u70E6","\u503A","\u5E10","\u6591","\u94C3","\u65E8","\u9187","\u8463","\u997C","\u96CF","\u59FF","\u62CC","\u5085","\u8179","\u59A5","\u63C9","\u8D24","\u62C6","\u6B6A","\u8461","\u80FA","\u4E22","\u6D69","\u5FBD","\u6602","\u57AB","\u6321","\u89C8","\u8D2A","\u6170","\u7F34","\u6C6A","\u614C","\u51AF","\u8BFA","\u59DC","\u8C0A","\u51F6","\u52A3","\u8BEC","\u8000","\u660F","\u8EBA","\u76C8","\u9A91","\u4E54","\u6EAA","\u4E1B","\u5362","\u62B9","\u95F7","\u54A8","\u522E","\u9A7E","\u7F06","\u609F","\u6458","\u94D2","\u63B7","\u9887","\u5E7B","\u67C4","\u60E0","\u60E8","\u4F73","\u4EC7","\u814A","\u7A9D","\u6DA4","\u5251","\u77A7","\u5821","\u6CFC","\u8471","\u7F69","\u970D","\u635E","\u80CE","\u82CD","\u6EE8","\u4FE9","\u6345","\u6E58","\u780D","\u971E","\u90B5","\u8404","\u75AF","\u6DEE","\u9042","\u718A","\u7CAA","\u70D8","\u5BBF","\u6863","\u6208","\u9A73","\u5AC2","\u88D5","\u5F99","\u7BAD","\u6350","\u80A0","\u6491","\u6652","\u8FA8","\u6BBF","\u83B2","\u644A","\u6405","\u9171","\u5C4F","\u75AB","\u54C0","\u8521","\u5835","\u6CAB","\u76B1","\u7545","\u53E0","\u9601","\u83B1","\u6572","\u8F96","\u94A9","\u75D5","\u575D","\u5DF7","\u997F","\u7978","\u4E18","\u7384","\u6E9C","\u66F0","\u903B","\u5F6D","\u5C1D","\u537F","\u59A8","\u8247","\u541E","\u97E6","\u6028","\u77EE","\u6B47"]'), Os = JSON.parse('["\u7684","\u4E00","\u662F","\u5728","\u4E0D","\u4E86","\u6709","\u548C","\u4EBA","\u9019","\u4E2D","\u5927","\u70BA","\u4E0A","\u500B","\u570B","\u6211","\u4EE5","\u8981","\u4ED6","\u6642","\u4F86","\u7528","\u5011","\u751F","\u5230","\u4F5C","\u5730","\u65BC","\u51FA","\u5C31","\u5206","\u5C0D","\u6210","\u6703","\u53EF","\u4E3B","\u767C","\u5E74","\u52D5","\u540C","\u5DE5","\u4E5F","\u80FD","\u4E0B","\u904E","\u5B50","\u8AAA","\u7522","\u7A2E","\u9762","\u800C","\u65B9","\u5F8C","\u591A","\u5B9A","\u884C","\u5B78","\u6CD5","\u6240","\u6C11","\u5F97","\u7D93","\u5341","\u4E09","\u4E4B","\u9032","\u8457","\u7B49","\u90E8","\u5EA6","\u5BB6","\u96FB","\u529B","\u88E1","\u5982","\u6C34","\u5316","\u9AD8","\u81EA","\u4E8C","\u7406","\u8D77","\u5C0F","\u7269","\u73FE","\u5BE6","\u52A0","\u91CF","\u90FD","\u5169","\u9AD4","\u5236","\u6A5F","\u7576","\u4F7F","\u9EDE","\u5F9E","\u696D","\u672C","\u53BB","\u628A","\u6027","\u597D","\u61C9","\u958B","\u5B83","\u5408","\u9084","\u56E0","\u7531","\u5176","\u4E9B","\u7136","\u524D","\u5916","\u5929","\u653F","\u56DB","\u65E5","\u90A3","\u793E","\u7FA9","\u4E8B","\u5E73","\u5F62","\u76F8","\u5168","\u8868","\u9593","\u6A23","\u8207","\u95DC","\u5404","\u91CD","\u65B0","\u7DDA","\u5167","\u6578","\u6B63","\u5FC3","\u53CD","\u4F60","\u660E","\u770B","\u539F","\u53C8","\u9EBC","\u5229","\u6BD4","\u6216","\u4F46","\u8CEA","\u6C23","\u7B2C","\u5411","\u9053","\u547D","\u6B64","\u8B8A","\u689D","\u53EA","\u6C92","\u7D50","\u89E3","\u554F","\u610F","\u5EFA","\u6708","\u516C","\u7121","\u7CFB","\u8ECD","\u5F88","\u60C5","\u8005","\u6700","\u7ACB","\u4EE3","\u60F3","\u5DF2","\u901A","\u4E26","\u63D0","\u76F4","\u984C","\u9EE8","\u7A0B","\u5C55","\u4E94","\u679C","\u6599","\u8C61","\u54E1","\u9769","\u4F4D","\u5165","\u5E38","\u6587","\u7E3D","\u6B21","\u54C1","\u5F0F","\u6D3B","\u8A2D","\u53CA","\u7BA1","\u7279","\u4EF6","\u9577","\u6C42","\u8001","\u982D","\u57FA","\u8CC7","\u908A","\u6D41","\u8DEF","\u7D1A","\u5C11","\u5716","\u5C71","\u7D71","\u63A5","\u77E5","\u8F03","\u5C07","\u7D44","\u898B","\u8A08","\u5225","\u5979","\u624B","\u89D2","\u671F","\u6839","\u8AD6","\u904B","\u8FB2","\u6307","\u5E7E","\u4E5D","\u5340","\u5F37","\u653E","\u6C7A","\u897F","\u88AB","\u5E79","\u505A","\u5FC5","\u6230","\u5148","\u56DE","\u5247","\u4EFB","\u53D6","\u64DA","\u8655","\u968A","\u5357","\u7D66","\u8272","\u5149","\u9580","\u5373","\u4FDD","\u6CBB","\u5317","\u9020","\u767E","\u898F","\u71B1","\u9818","\u4E03","\u6D77","\u53E3","\u6771","\u5C0E","\u5668","\u58D3","\u5FD7","\u4E16","\u91D1","\u589E","\u722D","\u6FDF","\u968E","\u6CB9","\u601D","\u8853","\u6975","\u4EA4","\u53D7","\u806F","\u4EC0","\u8A8D","\u516D","\u5171","\u6B0A","\u6536","\u8B49","\u6539","\u6E05","\u7F8E","\u518D","\u63A1","\u8F49","\u66F4","\u55AE","\u98A8","\u5207","\u6253","\u767D","\u6559","\u901F","\u82B1","\u5E36","\u5B89","\u5834","\u8EAB","\u8ECA","\u4F8B","\u771F","\u52D9","\u5177","\u842C","\u6BCF","\u76EE","\u81F3","\u9054","\u8D70","\u7A4D","\u793A","\u8B70","\u8072","\u5831","\u9B25","\u5B8C","\u985E","\u516B","\u96E2","\u83EF","\u540D","\u78BA","\u624D","\u79D1","\u5F35","\u4FE1","\u99AC","\u7BC0","\u8A71","\u7C73","\u6574","\u7A7A","\u5143","\u6CC1","\u4ECA","\u96C6","\u6EAB","\u50B3","\u571F","\u8A31","\u6B65","\u7FA4","\u5EE3","\u77F3","\u8A18","\u9700","\u6BB5","\u7814","\u754C","\u62C9","\u6797","\u5F8B","\u53EB","\u4E14","\u7A76","\u89C0","\u8D8A","\u7E54","\u88DD","\u5F71","\u7B97","\u4F4E","\u6301","\u97F3","\u773E","\u66F8","\u5E03","\u590D","\u5BB9","\u5152","\u9808","\u969B","\u5546","\u975E","\u9A57","\u9023","\u65B7","\u6DF1","\u96E3","\u8FD1","\u7926","\u5343","\u9031","\u59D4","\u7D20","\u6280","\u5099","\u534A","\u8FA6","\u9752","\u7701","\u5217","\u7FD2","\u97FF","\u7D04","\u652F","\u822C","\u53F2","\u611F","\u52DE","\u4FBF","\u5718","\u5F80","\u9178","\u6B77","\u5E02","\u514B","\u4F55","\u9664","\u6D88","\u69CB","\u5E9C","\u7A31","\u592A","\u6E96","\u7CBE","\u503C","\u865F","\u7387","\u65CF","\u7DAD","\u5283","\u9078","\u6A19","\u5BEB","\u5B58","\u5019","\u6BDB","\u89AA","\u5FEB","\u6548","\u65AF","\u9662","\u67E5","\u6C5F","\u578B","\u773C","\u738B","\u6309","\u683C","\u990A","\u6613","\u7F6E","\u6D3E","\u5C64","\u7247","\u59CB","\u537B","\u5C08","\u72C0","\u80B2","\u5EE0","\u4EAC","\u8B58","\u9069","\u5C6C","\u5713","\u5305","\u706B","\u4F4F","\u8ABF","\u6EFF","\u7E23","\u5C40","\u7167","\u53C3","\u7D05","\u7D30","\u5F15","\u807D","\u8A72","\u9435","\u50F9","\u56B4","\u9996","\u5E95","\u6DB2","\u5B98","\u5FB7","\u96A8","\u75C5","\u8607","\u5931","\u723E","\u6B7B","\u8B1B","\u914D","\u5973","\u9EC3","\u63A8","\u986F","\u8AC7","\u7F6A","\u795E","\u85DD","\u5462","\u5E2D","\u542B","\u4F01","\u671B","\u5BC6","\u6279","\u71DF","\u9805","\u9632","\u8209","\u7403","\u82F1","\u6C27","\u52E2","\u544A","\u674E","\u53F0","\u843D","\u6728","\u5E6B","\u8F2A","\u7834","\u4E9E","\u5E2B","\u570D","\u6CE8","\u9060","\u5B57","\u6750","\u6392","\u4F9B","\u6CB3","\u614B","\u5C01","\u53E6","\u65BD","\u6E1B","\u6A39","\u6EB6","\u600E","\u6B62","\u6848","\u8A00","\u58EB","\u5747","\u6B66","\u56FA","\u8449","\u9B5A","\u6CE2","\u8996","\u50C5","\u8CBB","\u7DCA","\u611B","\u5DE6","\u7AE0","\u65E9","\u671D","\u5BB3","\u7E8C","\u8F15","\u670D","\u8A66","\u98DF","\u5145","\u5175","\u6E90","\u5224","\u8B77","\u53F8","\u8DB3","\u67D0","\u7DF4","\u5DEE","\u81F4","\u677F","\u7530","\u964D","\u9ED1","\u72AF","\u8CA0","\u64CA","\u8303","\u7E7C","\u8208","\u4F3C","\u9918","\u5805","\u66F2","\u8F38","\u4FEE","\u6545","\u57CE","\u592B","\u5920","\u9001","\u7B46","\u8239","\u4F54","\u53F3","\u8CA1","\u5403","\u5BCC","\u6625","\u8077","\u89BA","\u6F22","\u756B","\u529F","\u5DF4","\u8DDF","\u96D6","\u96DC","\u98DB","\u6AA2","\u5438","\u52A9","\u6607","\u967D","\u4E92","\u521D","\u5275","\u6297","\u8003","\u6295","\u58DE","\u7B56","\u53E4","\u5F91","\u63DB","\u672A","\u8DD1","\u7559","\u92FC","\u66FE","\u7AEF","\u8CAC","\u7AD9","\u7C21","\u8FF0","\u9322","\u526F","\u76E1","\u5E1D","\u5C04","\u8349","\u885D","\u627F","\u7368","\u4EE4","\u9650","\u963F","\u5BA3","\u74B0","\u96D9","\u8ACB","\u8D85","\u5FAE","\u8B93","\u63A7","\u5DDE","\u826F","\u8EF8","\u627E","\u5426","\u7D00","\u76CA","\u4F9D","\u512A","\u9802","\u790E","\u8F09","\u5012","\u623F","\u7A81","\u5750","\u7C89","\u6575","\u7565","\u5BA2","\u8881","\u51B7","\u52DD","\u7D55","\u6790","\u584A","\u5291","\u6E2C","\u7D72","\u5354","\u8A34","\u5FF5","\u9673","\u4ECD","\u7F85","\u9E7D","\u53CB","\u6D0B","\u932F","\u82E6","\u591C","\u5211","\u79FB","\u983B","\u9010","\u9760","\u6DF7","\u6BCD","\u77ED","\u76AE","\u7D42","\u805A","\u6C7D","\u6751","\u96F2","\u54EA","\u65E2","\u8DDD","\u885B","\u505C","\u70C8","\u592E","\u5BDF","\u71D2","\u8FC5","\u5883","\u82E5","\u5370","\u6D32","\u523B","\u62EC","\u6FC0","\u5B54","\u641E","\u751A","\u5BA4","\u5F85","\u6838","\u6821","\u6563","\u4FB5","\u5427","\u7532","\u904A","\u4E45","\u83DC","\u5473","\u820A","\u6A21","\u6E56","\u8CA8","\u640D","\u9810","\u963B","\u6BEB","\u666E","\u7A69","\u4E59","\u5ABD","\u690D","\u606F","\u64F4","\u9280","\u8A9E","\u63EE","\u9152","\u5B88","\u62FF","\u5E8F","\u7D19","\u91AB","\u7F3A","\u96E8","\u55CE","\u91DD","\u5289","\u554A","\u6025","\u5531","\u8AA4","\u8A13","\u9858","\u5BE9","\u9644","\u7372","\u8336","\u9BAE","\u7CE7","\u65A4","\u5B69","\u812B","\u786B","\u80A5","\u5584","\u9F8D","\u6F14","\u7236","\u6F38","\u8840","\u6B61","\u68B0","\u638C","\u6B4C","\u6C99","\u525B","\u653B","\u8B02","\u76FE","\u8A0E","\u665A","\u7C92","\u4E82","\u71C3","\u77DB","\u4E4E","\u6BBA","\u85E5","\u5BE7","\u9B6F","\u8CB4","\u9418","\u7164","\u8B80","\u73ED","\u4F2F","\u9999","\u4ECB","\u8FEB","\u53E5","\u8C50","\u57F9","\u63E1","\u862D","\u64D4","\u5F26","\u86CB","\u6C89","\u5047","\u7A7F","\u57F7","\u7B54","\u6A02","\u8AB0","\u9806","\u7159","\u7E2E","\u5FB5","\u81C9","\u559C","\u677E","\u8173","\u56F0","\u7570","\u514D","\u80CC","\u661F","\u798F","\u8CB7","\u67D3","\u4E95","\u6982","\u6162","\u6015","\u78C1","\u500D","\u7956","\u7687","\u4FC3","\u975C","\u88DC","\u8A55","\u7FFB","\u8089","\u8E10","\u5C3C","\u8863","\u5BEC","\u63DA","\u68C9","\u5E0C","\u50B7","\u64CD","\u5782","\u79CB","\u5B9C","\u6C2B","\u5957","\u7763","\u632F","\u67B6","\u4EAE","\u672B","\u61B2","\u6176","\u7DE8","\u725B","\u89F8","\u6620","\u96F7","\u92B7","\u8A69","\u5EA7","\u5C45","\u6293","\u88C2","\u80DE","\u547C","\u5A18","\u666F","\u5A01","\u7DA0","\u6676","\u539A","\u76DF","\u8861","\u96DE","\u5B6B","\u5EF6","\u5371","\u81A0","\u5C4B","\u9109","\u81E8","\u9678","\u9867","\u6389","\u5440","\u71C8","\u6B72","\u63AA","\u675F","\u8010","\u5287","\u7389","\u8D99","\u8DF3","\u54E5","\u5B63","\u8AB2","\u51F1","\u80E1","\u984D","\u6B3E","\u7D39","\u5377","\u9F4A","\u5049","\u84B8","\u6B96","\u6C38","\u5B97","\u82D7","\u5DDD","\u7210","\u5CA9","\u5F31","\u96F6","\u694A","\u594F","\u6CBF","\u9732","\u687F","\u63A2","\u6ED1","\u93AE","\u98EF","\u6FC3","\u822A","\u61F7","\u8D95","\u5EAB","\u596A","\u4F0A","\u9748","\u7A05","\u9014","\u6EC5","\u8CFD","\u6B78","\u53EC","\u9F13","\u64AD","\u76E4","\u88C1","\u96AA","\u5EB7","\u552F","\u9304","\u83CC","\u7D14","\u501F","\u7CD6","\u84CB","\u6A6B","\u7B26","\u79C1","\u52AA","\u5802","\u57DF","\u69CD","\u6F64","\u5E45","\u54C8","\u7ADF","\u719F","\u87F2","\u6FA4","\u8166","\u58E4","\u78B3","\u6B50","\u904D","\u5074","\u5BE8","\u6562","\u5FB9","\u616E","\u659C","\u8584","\u5EAD","\u7D0D","\u5F48","\u98FC","\u4F38","\u6298","\u9EA5","\u6FD5","\u6697","\u8377","\u74E6","\u585E","\u5E8A","\u7BC9","\u60E1","\u6236","\u8A2A","\u5854","\u5947","\u900F","\u6881","\u5200","\u65CB","\u8DE1","\u5361","\u6C2F","\u9047","\u4EFD","\u6BD2","\u6CE5","\u9000","\u6D17","\u64FA","\u7070","\u5F69","\u8CE3","\u8017","\u590F","\u64C7","\u5FD9","\u9285","\u737B","\u786C","\u4E88","\u7E41","\u5708","\u96EA","\u51FD","\u4EA6","\u62BD","\u7BC7","\u9663","\u9670","\u4E01","\u5C3A","\u8FFD","\u5806","\u96C4","\u8FCE","\u6CDB","\u7238","\u6A13","\u907F","\u8B00","\u5678","\u91CE","\u8C6C","\u65D7","\u7D2F","\u504F","\u5178","\u9928","\u7D22","\u79E6","\u8102","\u6F6E","\u723A","\u8C46","\u5FFD","\u6258","\u9A5A","\u5851","\u907A","\u6108","\u6731","\u66FF","\u7E96","\u7C97","\u50BE","\u5C1A","\u75DB","\u695A","\u8B1D","\u596E","\u8CFC","\u78E8","\u541B","\u6C60","\u65C1","\u788E","\u9AA8","\u76E3","\u6355","\u5F1F","\u66B4","\u5272","\u8CAB","\u6B8A","\u91CB","\u8A5E","\u4EA1","\u58C1","\u9813","\u5BF6","\u5348","\u5875","\u805E","\u63ED","\u70AE","\u6B98","\u51AC","\u6A4B","\u5A66","\u8B66","\u7D9C","\u62DB","\u5433","\u4ED8","\u6D6E","\u906D","\u5F90","\u60A8","\u6416","\u8C37","\u8D0A","\u7BB1","\u9694","\u8A02","\u7537","\u5439","\u5712","\u7D1B","\u5510","\u6557","\u5B8B","\u73BB","\u5DE8","\u8015","\u5766","\u69AE","\u9589","\u7063","\u9375","\u51E1","\u99D0","\u934B","\u6551","\u6069","\u525D","\u51DD","\u9E7C","\u9F52","\u622A","\u7149","\u9EBB","\u7D21","\u7981","\u5EE2","\u76DB","\u7248","\u7DE9","\u6DE8","\u775B","\u660C","\u5A5A","\u6D89","\u7B52","\u5634","\u63D2","\u5CB8","\u6717","\u838A","\u8857","\u85CF","\u59D1","\u8CBF","\u8150","\u5974","\u5566","\u6163","\u4E58","\u5925","\u6062","\u52FB","\u7D17","\u624E","\u8FAF","\u8033","\u5F6A","\u81E3","\u5104","\u7483","\u62B5","\u8108","\u79C0","\u85A9","\u4FC4","\u7DB2","\u821E","\u5E97","\u5674","\u7E31","\u5BF8","\u6C57","\u639B","\u6D2A","\u8CC0","\u9583","\u67EC","\u7206","\u70EF","\u6D25","\u7A3B","\u7246","\u8EDF","\u52C7","\u50CF","\u6EFE","\u5398","\u8499","\u82B3","\u80AF","\u5761","\u67F1","\u76EA","\u817F","\u5100","\u65C5","\u5C3E","\u8ECB","\u51B0","\u8CA2","\u767B","\u9ECE","\u524A","\u947D","\u52D2","\u9003","\u969C","\u6C28","\u90ED","\u5CF0","\u5E63","\u6E2F","\u4F0F","\u8ECC","\u755D","\u7562","\u64E6","\u83AB","\u523A","\u6D6A","\u79D8","\u63F4","\u682A","\u5065","\u552E","\u80A1","\u5CF6","\u7518","\u6CE1","\u7761","\u7AE5","\u9444","\u6E6F","\u95A5","\u4F11","\u532F","\u820D","\u7267","\u7E5E","\u70B8","\u54F2","\u78F7","\u7E3E","\u670B","\u6DE1","\u5C16","\u555F","\u9677","\u67F4","\u5448","\u5F92","\u984F","\u6DDA","\u7A0D","\u5FD8","\u6CF5","\u85CD","\u62D6","\u6D1E","\u6388","\u93E1","\u8F9B","\u58EF","\u92D2","\u8CA7","\u865B","\u5F4E","\u6469","\u6CF0","\u5E7C","\u5EF7","\u5C0A","\u7A97","\u7DB1","\u5F04","\u96B8","\u7591","\u6C0F","\u5BAE","\u59D0","\u9707","\u745E","\u602A","\u5C24","\u7434","\u5FAA","\u63CF","\u819C","\u9055","\u593E","\u8170","\u7DE3","\u73E0","\u7AAE","\u68EE","\u679D","\u7AF9","\u6E9D","\u50AC","\u7E69","\u61B6","\u90A6","\u5269","\u5E78","\u6F3F","\u6B04","\u64C1","\u7259","\u8CAF","\u79AE","\u6FFE","\u9209","\u7D0B","\u7F77","\u62CD","\u54B1","\u558A","\u8896","\u57C3","\u52E4","\u7F70","\u7126","\u6F5B","\u4F0D","\u58A8","\u6B32","\u7E2B","\u59D3","\u520A","\u98FD","\u4EFF","\u734E","\u92C1","\u9B3C","\u9E97","\u8DE8","\u9ED8","\u6316","\u93C8","\u6383","\u559D","\u888B","\u70AD","\u6C61","\u5E55","\u8AF8","\u5F27","\u52F5","\u6885","\u5976","\u6F54","\u707D","\u821F","\u9451","\u82EF","\u8A1F","\u62B1","\u6BC0","\u61C2","\u5BD2","\u667A","\u57D4","\u5BC4","\u5C46","\u8E8D","\u6E21","\u6311","\u4E39","\u8271","\u8C9D","\u78B0","\u62D4","\u7239","\u6234","\u78BC","\u5922","\u82BD","\u7194","\u8D64","\u6F01","\u54ED","\u656C","\u9846","\u5954","\u925B","\u4EF2","\u864E","\u7A00","\u59B9","\u4E4F","\u73CD","\u7533","\u684C","\u9075","\u5141","\u9686","\u87BA","\u5009","\u9B4F","\u92B3","\u66C9","\u6C2E","\u517C","\u96B1","\u7919","\u8D6B","\u64A5","\u5FE0","\u8085","\u7F38","\u727D","\u6436","\u535A","\u5DE7","\u6BBC","\u5144","\u675C","\u8A0A","\u8AA0","\u78A7","\u7965","\u67EF","\u9801","\u5DE1","\u77E9","\u60B2","\u704C","\u9F61","\u502B","\u7968","\u5C0B","\u6842","\u92EA","\u8056","\u6050","\u6070","\u912D","\u8DA3","\u62AC","\u8352","\u9A30","\u8CBC","\u67D4","\u6EF4","\u731B","\u95CA","\u8F1B","\u59BB","\u586B","\u64A4","\u5132","\u7C3D","\u9B27","\u64FE","\u7D2B","\u7802","\u905E","\u6232","\u540A","\u9676","\u4F10","\u9935","\u7642","\u74F6","\u5A46","\u64AB","\u81C2","\u6478","\u5FCD","\u8766","\u881F","\u9130","\u80F8","\u978F","\u64E0","\u5076","\u68C4","\u69FD","\u52C1","\u4E73","\u9127","\u5409","\u4EC1","\u721B","\u78DA","\u79DF","\u70CF","\u8266","\u4F34","\u74DC","\u6DFA","\u4E19","\u66AB","\u71E5","\u6A61","\u67F3","\u8FF7","\u6696","\u724C","\u79E7","\u81BD","\u8A73","\u7C27","\u8E0F","\u74F7","\u8B5C","\u5446","\u8CD3","\u7CCA","\u6D1B","\u8F1D","\u61A4","\u7AF6","\u9699","\u6012","\u7C98","\u4E43","\u7DD2","\u80A9","\u7C4D","\u654F","\u5857","\u7199","\u7686","\u5075","\u61F8","\u6398","\u4EAB","\u7CFE","\u9192","\u72C2","\u9396","\u6DC0","\u6068","\u7272","\u9738","\u722C","\u8CDE","\u9006","\u73A9","\u9675","\u795D","\u79D2","\u6D59","\u8C8C","\u5F79","\u5F7C","\u6089","\u9D28","\u8DA8","\u9CF3","\u6668","\u755C","\u8F29","\u79E9","\u5375","\u7F72","\u68AF","\u708E","\u7058","\u68CB","\u9A45","\u7BE9","\u5CFD","\u5192","\u5565","\u58FD","\u8B6F","\u6D78","\u6CC9","\u5E3D","\u9072","\u77FD","\u7586","\u8CB8","\u6F0F","\u7A3F","\u51A0","\u5AE9","\u8105","\u82AF","\u7262","\u53DB","\u8755","\u5967","\u9CF4","\u5DBA","\u7F8A","\u6191","\u4E32","\u5858","\u7E6A","\u9175","\u878D","\u76C6","\u932B","\u5EDF","\u7C4C","\u51CD","\u8F14","\u651D","\u8972","\u7B4B","\u62D2","\u50DA","\u65F1","\u9240","\u9CE5","\u6F06","\u6C88","\u7709","\u758F","\u6DFB","\u68D2","\u7A57","\u785D","\u97D3","\u903C","\u626D","\u50D1","\u6DBC","\u633A","\u7897","\u683D","\u7092","\u676F","\u60A3","\u993E","\u52F8","\u8C6A","\u907C","\u52C3","\u9D3B","\u65E6","\u540F","\u62DC","\u72D7","\u57CB","\u8F25","\u63A9","\u98F2","\u642C","\u7F75","\u8FAD","\u52FE","\u6263","\u4F30","\u8523","\u7D68","\u9727","\u4E08","\u6735","\u59C6","\u64EC","\u5B87","\u8F2F","\u965D","\u96D5","\u511F","\u84C4","\u5D07","\u526A","\u5021","\u5EF3","\u54AC","\u99DB","\u85AF","\u5237","\u65A5","\u756A","\u8CE6","\u5949","\u4F5B","\u6F86","\u6F2B","\u66FC","\u6247","\u9223","\u6843","\u6276","\u4ED4","\u8FD4","\u4FD7","\u8667","\u8154","\u978B","\u68F1","\u8986","\u6846","\u6084","\u53D4","\u649E","\u9A19","\u52D8","\u65FA","\u6CB8","\u5B64","\u5410","\u5B5F","\u6E20","\u5C48","\u75BE","\u5999","\u60DC","\u4EF0","\u72E0","\u8139","\u8AE7","\u62CB","\u9EF4","\u6851","\u5D17","\u561B","\u8870","\u76DC","\u6EF2","\u81DF","\u8CF4","\u6E67","\u751C","\u66F9","\u95B1","\u808C","\u54E9","\u53B2","\u70F4","\u7DEF","\u6BC5","\u6628","\u507D","\u75C7","\u716E","\u5606","\u91D8","\u642D","\u8396","\u7C60","\u9177","\u5077","\u5F13","\u9310","\u6046","\u5091","\u5751","\u9F3B","\u7FFC","\u7DB8","\u6558","\u7344","\u902E","\u7F50","\u7D61","\u68DA","\u6291","\u81A8","\u852C","\u5BFA","\u9A5F","\u7A46","\u51B6","\u67AF","\u518A","\u5C4D","\u51F8","\u7D33","\u576F","\u72A7","\u7130","\u8F5F","\u6B23","\u6649","\u7626","\u79A6","\u9320","\u9326","\u55AA","\u65EC","\u935B","\u58DF","\u641C","\u64B2","\u9080","\u4EAD","\u916F","\u9081","\u8212","\u8106","\u9176","\u9592","\u6182","\u915A","\u9811","\u7FBD","\u6F32","\u5378","\u4ED7","\u966A","\u95E2","\u61F2","\u676D","\u59DA","\u809A","\u6349","\u98C4","\u6F02","\u6606","\u6B3A","\u543E","\u90CE","\u70F7","\u6C41","\u5475","\u98FE","\u856D","\u96C5","\u90F5","\u9077","\u71D5","\u6492","\u59FB","\u8D74","\u5BB4","\u7169","\u50B5","\u5E33","\u6591","\u9234","\u65E8","\u9187","\u8463","\u9905","\u96DB","\u59FF","\u62CC","\u5085","\u8179","\u59A5","\u63C9","\u8CE2","\u62C6","\u6B6A","\u8461","\u80FA","\u4E1F","\u6D69","\u5FBD","\u6602","\u588A","\u64CB","\u89BD","\u8CAA","\u6170","\u7E73","\u6C6A","\u614C","\u99AE","\u8AFE","\u59DC","\u8ABC","\u5147","\u52A3","\u8AA3","\u8000","\u660F","\u8EBA","\u76C8","\u9A0E","\u55AC","\u6EAA","\u53E2","\u76E7","\u62B9","\u60B6","\u8AEE","\u522E","\u99D5","\u7E9C","\u609F","\u6458","\u927A","\u64F2","\u9817","\u5E7B","\u67C4","\u60E0","\u6158","\u4F73","\u4EC7","\u81D8","\u7AA9","\u6ECC","\u528D","\u77A7","\u5821","\u6F51","\u8525","\u7F69","\u970D","\u6488","\u80CE","\u84BC","\u6FF1","\u5006","\u6345","\u6E58","\u780D","\u971E","\u90B5","\u8404","\u760B","\u6DEE","\u9042","\u718A","\u7CDE","\u70D8","\u5BBF","\u6A94","\u6208","\u99C1","\u5AC2","\u88D5","\u5F99","\u7BAD","\u6350","\u8178","\u6490","\u66EC","\u8FA8","\u6BBF","\u84EE","\u6524","\u652A","\u91AC","\u5C4F","\u75AB","\u54C0","\u8521","\u5835","\u6CAB","\u76BA","\u66A2","\u758A","\u95A3","\u840A","\u6572","\u8F44","\u9264","\u75D5","\u58E9","\u5DF7","\u9913","\u798D","\u4E18","\u7384","\u6E9C","\u66F0","\u908F","\u5F6D","\u5617","\u537F","\u59A8","\u8247","\u541E","\u97CB","\u6028","\u77EE","\u6B47"]'), Rs = JSON.parse('["\u1100\u1161\u1100\u1167\u11A8","\u1100\u1161\u1101\u1173\u11B7","\u1100\u1161\u1102\u1161\u11AB","\u1100\u1161\u1102\u1173\u11BC","\u1100\u1161\u1103\u1173\u11A8","\u1100\u1161\u1105\u1173\u110E\u1175\u11B7","\u1100\u1161\u1106\u116E\u11B7","\u1100\u1161\u1107\u1161\u11BC","\u1100\u1161\u1109\u1161\u11BC","\u1100\u1161\u1109\u1173\u11B7","\u1100\u1161\u110B\u116E\u11AB\u1103\u1166","\u1100\u1161\u110B\u1173\u11AF","\u1100\u1161\u110B\u1175\u1103\u1173","\u1100\u1161\u110B\u1175\u11B8","\u1100\u1161\u110C\u1161\u11BC","\u1100\u1161\u110C\u1165\u11BC","\u1100\u1161\u110C\u1169\u11A8","\u1100\u1161\u110C\u116E\u11A8","\u1100\u1161\u11A8\u110B\u1169","\u1100\u1161\u11A8\u110C\u1161","\u1100\u1161\u11AB\u1100\u1167\u11A8","\u1100\u1161\u11AB\u1107\u116E","\u1100\u1161\u11AB\u1109\u1165\u11B8","\u1100\u1161\u11AB\u110C\u1161\u11BC","\u1100\u1161\u11AB\u110C\u1165\u11B8","\u1100\u1161\u11AB\u1111\u1161\u11AB","\u1100\u1161\u11AF\u1103\u1173\u11BC","\u1100\u1161\u11AF\u1107\u1175","\u1100\u1161\u11AF\u1109\u1162\u11A8","\u1100\u1161\u11AF\u110C\u1173\u11BC","\u1100\u1161\u11B7\u1100\u1161\u11A8","\u1100\u1161\u11B7\u1100\u1175","\u1100\u1161\u11B7\u1109\u1169","\u1100\u1161\u11B7\u1109\u116E\u1109\u1165\u11BC","\u1100\u1161\u11B7\u110C\u1161","\u1100\u1161\u11B7\u110C\u1165\u11BC","\u1100\u1161\u11B8\u110C\u1161\u1100\u1175","\u1100\u1161\u11BC\u1102\u1161\u11B7","\u1100\u1161\u11BC\u1103\u1161\u11BC","\u1100\u1161\u11BC\u1103\u1169","\u1100\u1161\u11BC\u1105\u1167\u11A8\u1112\u1175","\u1100\u1161\u11BC\u1107\u1167\u11AB","\u1100\u1161\u11BC\u1107\u116E\u11A8","\u1100\u1161\u11BC\u1109\u1161","\u1100\u1161\u11BC\u1109\u116E\u1105\u1163\u11BC","\u1100\u1161\u11BC\u110B\u1161\u110C\u1175","\u1100\u1161\u11BC\u110B\u116F\u11AB\u1103\u1169","\u1100\u1161\u11BC\u110B\u1174","\u1100\u1161\u11BC\u110C\u1166","\u1100\u1161\u11BC\u110C\u1169","\u1100\u1161\u11C0\u110B\u1175","\u1100\u1162\u1100\u116E\u1105\u1175","\u1100\u1162\u1102\u1161\u1105\u1175","\u1100\u1162\u1107\u1161\u11BC","\u1100\u1162\u1107\u1167\u11AF","\u1100\u1162\u1109\u1165\u11AB","\u1100\u1162\u1109\u1165\u11BC","\u1100\u1162\u110B\u1175\u11AB","\u1100\u1162\u11A8\u1100\u116A\u11AB\u110C\u1165\u11A8","\u1100\u1165\u1109\u1175\u11AF","\u1100\u1165\u110B\u1162\u11A8","\u1100\u1165\u110B\u116E\u11AF","\u1100\u1165\u110C\u1175\u11BA","\u1100\u1165\u1111\u116E\u11B7","\u1100\u1165\u11A8\u110C\u1165\u11BC","\u1100\u1165\u11AB\u1100\u1161\u11BC","\u1100\u1165\u11AB\u1106\u116E\u11AF","\u1100\u1165\u11AB\u1109\u1165\u11AF","\u1100\u1165\u11AB\u110C\u1169","\u1100\u1165\u11AB\u110E\u116E\u11A8","\u1100\u1165\u11AF\u110B\u1173\u11B7","\u1100\u1165\u11B7\u1109\u1161","\u1100\u1165\u11B7\u1110\u1169","\u1100\u1166\u1109\u1175\u1111\u1161\u11AB","\u1100\u1166\u110B\u1175\u11B7","\u1100\u1167\u110B\u116E\u11AF","\u1100\u1167\u11AB\u1112\u1162","\u1100\u1167\u11AF\u1100\u116A","\u1100\u1167\u11AF\u1100\u116E\u11A8","\u1100\u1167\u11AF\u1105\u1169\u11AB","\u1100\u1167\u11AF\u1109\u1165\u11A8","\u1100\u1167\u11AF\u1109\u1173\u11BC","\u1100\u1167\u11AF\u1109\u1175\u11B7","\u1100\u1167\u11AF\u110C\u1165\u11BC","\u1100\u1167\u11AF\u1112\u1169\u11AB","\u1100\u1167\u11BC\u1100\u1168","\u1100\u1167\u11BC\u1100\u1169","\u1100\u1167\u11BC\u1100\u1175","\u1100\u1167\u11BC\u1105\u1167\u11A8","\u1100\u1167\u11BC\u1107\u1169\u11A8\u1100\u116E\u11BC","\u1100\u1167\u11BC\u1107\u1175","\u1100\u1167\u11BC\u1109\u1161\u11BC\u1103\u1169","\u1100\u1167\u11BC\u110B\u1167\u11BC","\u1100\u1167\u11BC\u110B\u116E","\u1100\u1167\u11BC\u110C\u1162\u11BC","\u1100\u1167\u11BC\u110C\u1166","\u1100\u1167\u11BC\u110C\u116E","\u1100\u1167\u11BC\u110E\u1161\u11AF","\u1100\u1167\u11BC\u110E\u1175","\u1100\u1167\u11BC\u1112\u1163\u11BC","\u1100\u1167\u11BC\u1112\u1165\u11B7","\u1100\u1168\u1100\u1169\u11A8","\u1100\u1168\u1103\u1161\u11AB","\u1100\u1168\u1105\u1161\u11AB","\u1100\u1168\u1109\u1161\u11AB","\u1100\u1168\u1109\u1169\u11A8","\u1100\u1168\u110B\u1163\u11A8","\u1100\u1168\u110C\u1165\u11AF","\u1100\u1168\u110E\u1173\u11BC","\u1100\u1168\u1112\u116C\u11A8","\u1100\u1169\u1100\u1162\u11A8","\u1100\u1169\u1100\u116E\u1105\u1167","\u1100\u1169\u1100\u116E\u11BC","\u1100\u1169\u1100\u1173\u11B8","\u1100\u1169\u1103\u1173\u11BC\u1112\u1161\u11A8\u1109\u1162\u11BC","\u1100\u1169\u1106\u116E\u1109\u1175\u11AB","\u1100\u1169\u1106\u1175\u11AB","\u1100\u1169\u110B\u1163\u11BC\u110B\u1175","\u1100\u1169\u110C\u1161\u11BC","\u1100\u1169\u110C\u1165\u11AB","\u1100\u1169\u110C\u1175\u11B8","\u1100\u1169\u110E\u116E\u11BA\u1100\u1161\u1105\u116E","\u1100\u1169\u1110\u1169\u11BC","\u1100\u1169\u1112\u1163\u11BC","\u1100\u1169\u11A8\u1109\u1175\u11A8","\u1100\u1169\u11AF\u1106\u1169\u11A8","\u1100\u1169\u11AF\u110D\u1161\u1100\u1175","\u1100\u1169\u11AF\u1111\u1173","\u1100\u1169\u11BC\u1100\u1161\u11AB","\u1100\u1169\u11BC\u1100\u1162","\u1100\u1169\u11BC\u1100\u1167\u11A8","\u1100\u1169\u11BC\u1100\u116E\u11AB","\u1100\u1169\u11BC\u1100\u1173\u11B8","\u1100\u1169\u11BC\u1100\u1175","\u1100\u1169\u11BC\u1103\u1169\u11BC","\u1100\u1169\u11BC\u1106\u116E\u110B\u116F\u11AB","\u1100\u1169\u11BC\u1107\u116E","\u1100\u1169\u11BC\u1109\u1161","\u1100\u1169\u11BC\u1109\u1175\u11A8","\u1100\u1169\u11BC\u110B\u1165\u11B8","\u1100\u1169\u11BC\u110B\u1167\u11AB","\u1100\u1169\u11BC\u110B\u116F\u11AB","\u1100\u1169\u11BC\u110C\u1161\u11BC","\u1100\u1169\u11BC\u110D\u1161","\u1100\u1169\u11BC\u110E\u1162\u11A8","\u1100\u1169\u11BC\u1110\u1169\u11BC","\u1100\u1169\u11BC\u1111\u1169","\u1100\u1169\u11BC\u1112\u1161\u11BC","\u1100\u1169\u11BC\u1112\u1172\u110B\u1175\u11AF","\u1100\u116A\u1106\u1169\u11A8","\u1100\u116A\u110B\u1175\u11AF","\u1100\u116A\u110C\u1161\u11BC","\u1100\u116A\u110C\u1165\u11BC","\u1100\u116A\u1112\u1161\u11A8","\u1100\u116A\u11AB\u1100\u1162\u11A8","\u1100\u116A\u11AB\u1100\u1168","\u1100\u116A\u11AB\u1100\u116A\u11BC","\u1100\u116A\u11AB\u1102\u1167\u11B7","\u1100\u116A\u11AB\u1105\u1161\u11B7","\u1100\u116A\u11AB\u1105\u1167\u11AB","\u1100\u116A\u11AB\u1105\u1175","\u1100\u116A\u11AB\u1109\u1173\u11B8","\u1100\u116A\u11AB\u1109\u1175\u11B7","\u1100\u116A\u11AB\u110C\u1165\u11B7","\u1100\u116A\u11AB\u110E\u1161\u11AF","\u1100\u116A\u11BC\u1100\u1167\u11BC","\u1100\u116A\u11BC\u1100\u1169","\u1100\u116A\u11BC\u110C\u1161\u11BC","\u1100\u116A\u11BC\u110C\u116E","\u1100\u116C\u1105\u1169\u110B\u116E\u11B7","\u1100\u116C\u11BC\u110C\u1161\u11BC\u1112\u1175","\u1100\u116D\u1100\u116A\u1109\u1165","\u1100\u116D\u1106\u116E\u11AB","\u1100\u116D\u1107\u1169\u11A8","\u1100\u116D\u1109\u1175\u11AF","\u1100\u116D\u110B\u1163\u11BC","\u1100\u116D\u110B\u1172\u11A8","\u1100\u116D\u110C\u1161\u11BC","\u1100\u116D\u110C\u1175\u11A8","\u1100\u116D\u1110\u1169\u11BC","\u1100\u116D\u1112\u116A\u11AB","\u1100\u116D\u1112\u116E\u11AB","\u1100\u116E\u1100\u1167\u11BC","\u1100\u116E\u1105\u1173\u11B7","\u1100\u116E\u1106\u1165\u11BC","\u1100\u116E\u1107\u1167\u11AF","\u1100\u116E\u1107\u116E\u11AB","\u1100\u116E\u1109\u1165\u11A8","\u1100\u116E\u1109\u1165\u11BC","\u1100\u116E\u1109\u1169\u11A8","\u1100\u116E\u110B\u1167\u11A8","\u1100\u116E\u110B\u1175\u11B8","\u1100\u116E\u110E\u1165\u11BC","\u1100\u116E\u110E\u1166\u110C\u1165\u11A8","\u1100\u116E\u11A8\u1100\u1161","\u1100\u116E\u11A8\u1100\u1175","\u1100\u116E\u11A8\u1102\u1162","\u1100\u116E\u11A8\u1105\u1175\u11B8","\u1100\u116E\u11A8\u1106\u116E\u11AF","\u1100\u116E\u11A8\u1106\u1175\u11AB","\u1100\u116E\u11A8\u1109\u116E","\u1100\u116E\u11A8\u110B\u1165","\u1100\u116E\u11A8\u110B\u116A\u11BC","\u1100\u116E\u11A8\u110C\u1165\u11A8","\u1100\u116E\u11A8\u110C\u1166","\u1100\u116E\u11A8\u1112\u116C","\u1100\u116E\u11AB\u1103\u1162","\u1100\u116E\u11AB\u1109\u1161","\u1100\u116E\u11AB\u110B\u1175\u11AB","\u1100\u116E\u11BC\u1100\u1173\u11A8\u110C\u1165\u11A8","\u1100\u116F\u11AB\u1105\u1175","\u1100\u116F\u11AB\u110B\u1171","\u1100\u116F\u11AB\u1110\u116E","\u1100\u1171\u1100\u116E\u11A8","\u1100\u1171\u1109\u1175\u11AB","\u1100\u1172\u110C\u1165\u11BC","\u1100\u1172\u110E\u1175\u11A8","\u1100\u1172\u11AB\u1112\u1167\u11BC","\u1100\u1173\u1102\u1161\u11AF","\u1100\u1173\u1102\u1163\u11BC","\u1100\u1173\u1102\u1173\u11AF","\u1100\u1173\u1105\u1165\u1102\u1161","\u1100\u1173\u1105\u116E\u11B8","\u1100\u1173\u1105\u1173\u11BA","\u1100\u1173\u1105\u1175\u11B7","\u1100\u1173\u110C\u1166\u1109\u1165\u110B\u1163","\u1100\u1173\u1110\u1169\u1105\u1169\u11A8","\u1100\u1173\u11A8\u1107\u1169\u11A8","\u1100\u1173\u11A8\u1112\u1175","\u1100\u1173\u11AB\u1100\u1165","\u1100\u1173\u11AB\u1100\u116D","\u1100\u1173\u11AB\u1105\u1162","\u1100\u1173\u11AB\u1105\u1169","\u1100\u1173\u11AB\u1106\u116E","\u1100\u1173\u11AB\u1107\u1169\u11AB","\u1100\u1173\u11AB\u110B\u116F\u11AB","\u1100\u1173\u11AB\u110B\u1172\u11A8","\u1100\u1173\u11AB\u110E\u1165","\u1100\u1173\u11AF\u110A\u1175","\u1100\u1173\u11AF\u110C\u1161","\u1100\u1173\u11B7\u1100\u1161\u11BC\u1109\u1161\u11AB","\u1100\u1173\u11B7\u1100\u1169","\u1100\u1173\u11B7\u1102\u1167\u11AB","\u1100\u1173\u11B7\u1106\u1166\u1103\u1161\u11AF","\u1100\u1173\u11B7\u110B\u1162\u11A8","\u1100\u1173\u11B7\u110B\u1167\u11AB","\u1100\u1173\u11B7\u110B\u116D\u110B\u1175\u11AF","\u1100\u1173\u11B7\u110C\u1175","\u1100\u1173\u11BC\u110C\u1165\u11BC\u110C\u1165\u11A8","\u1100\u1175\u1100\u1161\u11AB","\u1100\u1175\u1100\u116A\u11AB","\u1100\u1175\u1102\u1167\u11B7","\u1100\u1175\u1102\u1173\u11BC","\u1100\u1175\u1103\u1169\u11A8\u1100\u116D","\u1100\u1175\u1103\u116E\u11BC","\u1100\u1175\u1105\u1169\u11A8","\u1100\u1175\u1105\u1173\u11B7","\u1100\u1175\u1107\u1165\u11B8","\u1100\u1175\u1107\u1169\u11AB","\u1100\u1175\u1107\u116E\u11AB","\u1100\u1175\u1108\u1173\u11B7","\u1100\u1175\u1109\u116E\u11A8\u1109\u1161","\u1100\u1175\u1109\u116E\u11AF","\u1100\u1175\u110B\u1165\u11A8","\u1100\u1175\u110B\u1165\u11B8","\u1100\u1175\u110B\u1169\u11AB","\u1100\u1175\u110B\u116E\u11AB","\u1100\u1175\u110B\u116F\u11AB","\u1100\u1175\u110C\u1165\u11A8","\u1100\u1175\u110C\u116E\u11AB","\u1100\u1175\u110E\u1175\u11B7","\u1100\u1175\u1112\u1169\u11AB","\u1100\u1175\u1112\u116C\u11A8","\u1100\u1175\u11AB\u1100\u1173\u11B8","\u1100\u1175\u11AB\u110C\u1161\u11BC","\u1100\u1175\u11AF\u110B\u1175","\u1100\u1175\u11B7\u1107\u1161\u11B8","\u1100\u1175\u11B7\u110E\u1175","\u1100\u1175\u11B7\u1111\u1169\u1100\u1169\u11BC\u1112\u1161\u11BC","\u1101\u1161\u11A8\u1103\u116E\u1100\u1175","\u1101\u1161\u11B7\u1108\u1161\u11A8","\u1101\u1162\u1103\u1161\u11AF\u110B\u1173\u11B7","\u1101\u1162\u1109\u1169\u1100\u1173\u11B7","\u1101\u1165\u11B8\u110C\u1175\u11AF","\u1101\u1169\u11A8\u1103\u1162\u1100\u1175","\u1101\u1169\u11BE\u110B\u1175\u11C1","\u1102\u1161\u1103\u1173\u11AF\u110B\u1175","\u1102\u1161\u1105\u1161\u11AB\u1112\u1175","\u1102\u1161\u1106\u1165\u110C\u1175","\u1102\u1161\u1106\u116E\u11AF","\u1102\u1161\u110E\u1175\u11B7\u1107\u1161\u11AB","\u1102\u1161\u1112\u1173\u11AF","\u1102\u1161\u11A8\u110B\u1167\u11B8","\u1102\u1161\u11AB\u1107\u1161\u11BC","\u1102\u1161\u11AF\u1100\u1162","\u1102\u1161\u11AF\u110A\u1175","\u1102\u1161\u11AF\u110D\u1161","\u1102\u1161\u11B7\u1102\u1167","\u1102\u1161\u11B7\u1103\u1162\u1106\u116E\u11AB","\u1102\u1161\u11B7\u1106\u1162","\u1102\u1161\u11B7\u1109\u1161\u11AB","\u1102\u1161\u11B7\u110C\u1161","\u1102\u1161\u11B7\u1111\u1167\u11AB","\u1102\u1161\u11B7\u1112\u1161\u11A8\u1109\u1162\u11BC","\u1102\u1161\u11BC\u1107\u1175","\u1102\u1161\u11C0\u1106\u1161\u11AF","\u1102\u1162\u1102\u1167\u11AB","\u1102\u1162\u110B\u116D\u11BC","\u1102\u1162\u110B\u1175\u11AF","\u1102\u1162\u11B7\u1107\u1175","\u1102\u1162\u11B7\u1109\u1162","\u1102\u1162\u11BA\u1106\u116E\u11AF","\u1102\u1162\u11BC\u1103\u1169\u11BC","\u1102\u1162\u11BC\u1106\u1167\u11AB","\u1102\u1162\u11BC\u1107\u1161\u11BC","\u1102\u1162\u11BC\u110C\u1161\u11BC\u1100\u1169","\u1102\u1166\u11A8\u1110\u1161\u110B\u1175","\u1102\u1166\u11BA\u110D\u1162","\u1102\u1169\u1103\u1169\u11BC","\u1102\u1169\u1105\u1161\u11AB\u1109\u1162\u11A8","\u1102\u1169\u1105\u1167\u11A8","\u1102\u1169\u110B\u1175\u11AB","\u1102\u1169\u11A8\u110B\u1173\u11B7","\u1102\u1169\u11A8\u110E\u1161","\u1102\u1169\u11A8\u1112\u116A","\u1102\u1169\u11AB\u1105\u1175","\u1102\u1169\u11AB\u1106\u116E\u11AB","\u1102\u1169\u11AB\u110C\u1162\u11BC","\u1102\u1169\u11AF\u110B\u1175","\u1102\u1169\u11BC\u1100\u116E","\u1102\u1169\u11BC\u1103\u1161\u11B7","\u1102\u1169\u11BC\u1106\u1175\u11AB","\u1102\u1169\u11BC\u1107\u116E","\u1102\u1169\u11BC\u110B\u1165\u11B8","\u1102\u1169\u11BC\u110C\u1161\u11BC","\u1102\u1169\u11BC\u110E\u1169\u11AB","\u1102\u1169\u11C1\u110B\u1175","\u1102\u116E\u11AB\u1103\u1169\u11BC\u110C\u1161","\u1102\u116E\u11AB\u1106\u116E\u11AF","\u1102\u116E\u11AB\u110A\u1165\u11B8","\u1102\u1172\u110B\u116D\u11A8","\u1102\u1173\u1101\u1175\u11B7","\u1102\u1173\u11A8\u1103\u1162","\u1102\u1173\u11BC\u1103\u1169\u11BC\u110C\u1165\u11A8","\u1102\u1173\u11BC\u1105\u1167\u11A8","\u1103\u1161\u1107\u1161\u11BC","\u1103\u1161\u110B\u1163\u11BC\u1109\u1165\u11BC","\u1103\u1161\u110B\u1173\u11B7","\u1103\u1161\u110B\u1175\u110B\u1165\u1110\u1173","\u1103\u1161\u1112\u1162\u11BC","\u1103\u1161\u11AB\u1100\u1168","\u1103\u1161\u11AB\u1100\u1169\u11AF","\u1103\u1161\u11AB\u1103\u1169\u11A8","\u1103\u1161\u11AB\u1106\u1161\u11BA","\u1103\u1161\u11AB\u1109\u116E\u11AB","\u1103\u1161\u11AB\u110B\u1165","\u1103\u1161\u11AB\u110B\u1171","\u1103\u1161\u11AB\u110C\u1165\u11B7","\u1103\u1161\u11AB\u110E\u1166","\u1103\u1161\u11AB\u110E\u116E","\u1103\u1161\u11AB\u1111\u1167\u11AB","\u1103\u1161\u11AB\u1111\u116E\u11BC","\u1103\u1161\u11AF\u1100\u1163\u11AF","\u1103\u1161\u11AF\u1105\u1165","\u1103\u1161\u11AF\u1105\u1167\u11A8","\u1103\u1161\u11AF\u1105\u1175","\u1103\u1161\u11B0\u1100\u1169\u1100\u1175","\u1103\u1161\u11B7\u1103\u1161\u11BC","\u1103\u1161\u11B7\u1107\u1162","\u1103\u1161\u11B7\u110B\u116D","\u1103\u1161\u11B7\u110B\u1175\u11B7","\u1103\u1161\u11B8\u1107\u1167\u11AB","\u1103\u1161\u11B8\u110C\u1161\u11BC","\u1103\u1161\u11BC\u1100\u1173\u11AB","\u1103\u1161\u11BC\u1107\u116E\u11AB\u1100\u1161\u11AB","\u1103\u1161\u11BC\u110B\u1167\u11AB\u1112\u1175","\u1103\u1161\u11BC\u110C\u1161\u11BC","\u1103\u1162\u1100\u1172\u1106\u1169","\u1103\u1162\u1102\u1161\u11BD","\u1103\u1162\u1103\u1161\u11AB\u1112\u1175","\u1103\u1162\u1103\u1161\u11B8","\u1103\u1162\u1103\u1169\u1109\u1175","\u1103\u1162\u1105\u1163\u11A8","\u1103\u1162\u1105\u1163\u11BC","\u1103\u1162\u1105\u1172\u11A8","\u1103\u1162\u1106\u116E\u11AB","\u1103\u1162\u1107\u116E\u1107\u116E\u11AB","\u1103\u1162\u1109\u1175\u11AB","\u1103\u1162\u110B\u1173\u11BC","\u1103\u1162\u110C\u1161\u11BC","\u1103\u1162\u110C\u1165\u11AB","\u1103\u1162\u110C\u1165\u11B8","\u1103\u1162\u110C\u116E\u11BC","\u1103\u1162\u110E\u1162\u11A8","\u1103\u1162\u110E\u116E\u11AF","\u1103\u1162\u110E\u116E\u11BC","\u1103\u1162\u1110\u1169\u11BC\u1105\u1167\u11BC","\u1103\u1162\u1112\u1161\u11A8","\u1103\u1162\u1112\u1161\u11AB\u1106\u1175\u11AB\u1100\u116E\u11A8","\u1103\u1162\u1112\u1161\u11B8\u1109\u1175\u11AF","\u1103\u1162\u1112\u1167\u11BC","\u1103\u1165\u11BC\u110B\u1165\u1105\u1175","\u1103\u1166\u110B\u1175\u1110\u1173","\u1103\u1169\u1103\u1162\u110E\u1166","\u1103\u1169\u1103\u1165\u11A8","\u1103\u1169\u1103\u116E\u11A8","\u1103\u1169\u1106\u1161\u11BC","\u1103\u1169\u1109\u1165\u1100\u116A\u11AB","\u1103\u1169\u1109\u1175\u11B7","\u1103\u1169\u110B\u116E\u11B7","\u1103\u1169\u110B\u1175\u11B8","\u1103\u1169\u110C\u1161\u1100\u1175","\u1103\u1169\u110C\u1165\u1112\u1175","\u1103\u1169\u110C\u1165\u11AB","\u1103\u1169\u110C\u116E\u11BC","\u1103\u1169\u110E\u1161\u11A8","\u1103\u1169\u11A8\u1100\u1161\u11B7","\u1103\u1169\u11A8\u1105\u1175\u11B8","\u1103\u1169\u11A8\u1109\u1165","\u1103\u1169\u11A8\u110B\u1175\u11AF","\u1103\u1169\u11A8\u110E\u1161\u11BC\u110C\u1165\u11A8","\u1103\u1169\u11BC\u1112\u116A\u110E\u1162\u11A8","\u1103\u1171\u11BA\u1106\u1169\u1109\u1173\u11B8","\u1103\u1171\u11BA\u1109\u1161\u11AB","\u1104\u1161\u11AF\u110B\u1161\u110B\u1175","\u1106\u1161\u1102\u116E\u1105\u1161","\u1106\u1161\u1102\u1173\u11AF","\u1106\u1161\u1103\u1161\u11BC","\u1106\u1161\u1105\u1161\u1110\u1169\u11AB","\u1106\u1161\u1105\u1167\u11AB","\u1106\u1161\u1106\u116E\u1105\u1175","\u1106\u1161\u1109\u1161\u110C\u1175","\u1106\u1161\u110B\u1163\u11A8","\u1106\u1161\u110B\u116D\u1102\u1166\u110C\u1173","\u1106\u1161\u110B\u1173\u11AF","\u1106\u1161\u110B\u1173\u11B7","\u1106\u1161\u110B\u1175\u110F\u1173","\u1106\u1161\u110C\u116E\u11BC","\u1106\u1161\u110C\u1175\u1106\u1161\u11A8","\u1106\u1161\u110E\u1161\u11AB\u1100\u1161\u110C\u1175","\u1106\u1161\u110E\u1161\u11AF","\u1106\u1161\u1112\u1173\u11AB","\u1106\u1161\u11A8\u1100\u1165\u11AF\u1105\u1175","\u1106\u1161\u11A8\u1102\u1162","\u1106\u1161\u11A8\u1109\u1161\u11BC","\u1106\u1161\u11AB\u1102\u1161\u11B7","\u1106\u1161\u11AB\u1103\u116E","\u1106\u1161\u11AB\u1109\u1166","\u1106\u1161\u11AB\u110B\u1163\u11A8","\u1106\u1161\u11AB\u110B\u1175\u11AF","\u1106\u1161\u11AB\u110C\u1165\u11B7","\u1106\u1161\u11AB\u110C\u1169\u11A8","\u1106\u1161\u11AB\u1112\u116A","\u1106\u1161\u11AD\u110B\u1175","\u1106\u1161\u11AF\u1100\u1175","\u1106\u1161\u11AF\u110A\u1173\u11B7","\u1106\u1161\u11AF\u1110\u116E","\u1106\u1161\u11B7\u1103\u1162\u1105\u1169","\u1106\u1161\u11BC\u110B\u116F\u11AB\u1100\u1167\u11BC","\u1106\u1162\u1102\u1167\u11AB","\u1106\u1162\u1103\u1161\u11AF","\u1106\u1162\u1105\u1167\u11A8","\u1106\u1162\u1107\u1165\u11AB","\u1106\u1162\u1109\u1173\u110F\u1165\u11B7","\u1106\u1162\u110B\u1175\u11AF","\u1106\u1162\u110C\u1161\u11BC","\u1106\u1162\u11A8\u110C\u116E","\u1106\u1165\u11A8\u110B\u1175","\u1106\u1165\u11AB\u110C\u1165","\u1106\u1165\u11AB\u110C\u1175","\u1106\u1165\u11AF\u1105\u1175","\u1106\u1166\u110B\u1175\u11AF","\u1106\u1167\u1102\u1173\u1105\u1175","\u1106\u1167\u110E\u1175\u11AF","\u1106\u1167\u11AB\u1103\u1161\u11B7","\u1106\u1167\u11AF\u110E\u1175","\u1106\u1167\u11BC\u1103\u1161\u11AB","\u1106\u1167\u11BC\u1105\u1167\u11BC","\u1106\u1167\u11BC\u110B\u1168","\u1106\u1167\u11BC\u110B\u1174","\u1106\u1167\u11BC\u110C\u1165\u11AF","\u1106\u1167\u11BC\u110E\u1175\u11BC","\u1106\u1167\u11BC\u1112\u1161\u11B7","\u1106\u1169\u1100\u1173\u11B7","\u1106\u1169\u1102\u1175\u1110\u1165","\u1106\u1169\u1103\u1166\u11AF","\u1106\u1169\u1103\u1173\u11AB","\u1106\u1169\u1107\u1165\u11B7","\u1106\u1169\u1109\u1173\u11B8","\u1106\u1169\u110B\u1163\u11BC","\u1106\u1169\u110B\u1175\u11B7","\u1106\u1169\u110C\u1169\u1105\u1175","\u1106\u1169\u110C\u1175\u11B8","\u1106\u1169\u1110\u116E\u11BC\u110B\u1175","\u1106\u1169\u11A8\u1100\u1165\u11AF\u110B\u1175","\u1106\u1169\u11A8\u1105\u1169\u11A8","\u1106\u1169\u11A8\u1109\u1161","\u1106\u1169\u11A8\u1109\u1169\u1105\u1175","\u1106\u1169\u11A8\u1109\u116E\u11B7","\u1106\u1169\u11A8\u110C\u1165\u11A8","\u1106\u1169\u11A8\u1111\u116D","\u1106\u1169\u11AF\u1105\u1162","\u1106\u1169\u11B7\u1106\u1162","\u1106\u1169\u11B7\u1106\u116E\u1100\u1166","\u1106\u1169\u11B7\u1109\u1161\u11AF","\u1106\u1169\u11B7\u1109\u1169\u11A8","\u1106\u1169\u11B7\u110C\u1175\u11BA","\u1106\u1169\u11B7\u1110\u1169\u11BC","\u1106\u1169\u11B8\u1109\u1175","\u1106\u116E\u1100\u116A\u11AB\u1109\u1175\u11B7","\u1106\u116E\u1100\u116E\u11BC\u1112\u116A","\u1106\u116E\u1103\u1165\u110B\u1171","\u1106\u116E\u1103\u1165\u11B7","\u1106\u116E\u1105\u1173\u11C1","\u1106\u116E\u1109\u1173\u11AB","\u1106\u116E\u110B\u1165\u11BA","\u1106\u116E\u110B\u1167\u11A8","\u1106\u116E\u110B\u116D\u11BC","\u1106\u116E\u110C\u1169\u1100\u1165\u11AB","\u1106\u116E\u110C\u1175\u1100\u1162","\u1106\u116E\u110E\u1165\u11A8","\u1106\u116E\u11AB\u1100\u116E","\u1106\u116E\u11AB\u1103\u1173\u11A8","\u1106\u116E\u11AB\u1107\u1165\u11B8","\u1106\u116E\u11AB\u1109\u1165","\u1106\u116E\u11AB\u110C\u1166","\u1106\u116E\u11AB\u1112\u1161\u11A8","\u1106\u116E\u11AB\u1112\u116A","\u1106\u116E\u11AF\u1100\u1161","\u1106\u116E\u11AF\u1100\u1165\u11AB","\u1106\u116E\u11AF\u1100\u1167\u11AF","\u1106\u116E\u11AF\u1100\u1169\u1100\u1175","\u1106\u116E\u11AF\u1105\u1169\u11AB","\u1106\u116E\u11AF\u1105\u1175\u1112\u1161\u11A8","\u1106\u116E\u11AF\u110B\u1173\u11B7","\u1106\u116E\u11AF\u110C\u1175\u11AF","\u1106\u116E\u11AF\u110E\u1166","\u1106\u1175\u1100\u116E\u11A8","\u1106\u1175\u1103\u1175\u110B\u1165","\u1106\u1175\u1109\u1161\u110B\u1175\u11AF","\u1106\u1175\u1109\u116E\u11AF","\u1106\u1175\u110B\u1167\u11A8","\u1106\u1175\u110B\u116D\u11BC\u1109\u1175\u11AF","\u1106\u1175\u110B\u116E\u11B7","\u1106\u1175\u110B\u1175\u11AB","\u1106\u1175\u1110\u1175\u11BC","\u1106\u1175\u1112\u1169\u11AB","\u1106\u1175\u11AB\u1100\u1161\u11AB","\u1106\u1175\u11AB\u110C\u1169\u11A8","\u1106\u1175\u11AB\u110C\u116E","\u1106\u1175\u11AE\u110B\u1173\u11B7","\u1106\u1175\u11AF\u1100\u1161\u1105\u116E","\u1106\u1175\u11AF\u1105\u1175\u1106\u1175\u1110\u1165","\u1106\u1175\u11C0\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u1100\u1161\u110C\u1175","\u1107\u1161\u1100\u116E\u1102\u1175","\u1107\u1161\u1102\u1161\u1102\u1161","\u1107\u1161\u1102\u1173\u11AF","\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u1103\u1161\u11BA\u1100\u1161","\u1107\u1161\u1105\u1161\u11B7","\u1107\u1161\u110B\u1175\u1105\u1165\u1109\u1173","\u1107\u1161\u1110\u1161\u11BC","\u1107\u1161\u11A8\u1106\u116E\u11AF\u1100\u116A\u11AB","\u1107\u1161\u11A8\u1109\u1161","\u1107\u1161\u11A8\u1109\u116E","\u1107\u1161\u11AB\u1103\u1162","\u1107\u1161\u11AB\u1103\u1173\u1109\u1175","\u1107\u1161\u11AB\u1106\u1161\u11AF","\u1107\u1161\u11AB\u1107\u1161\u11AF","\u1107\u1161\u11AB\u1109\u1165\u11BC","\u1107\u1161\u11AB\u110B\u1173\u11BC","\u1107\u1161\u11AB\u110C\u1161\u11BC","\u1107\u1161\u11AB\u110C\u116E\u11A8","\u1107\u1161\u11AB\u110C\u1175","\u1107\u1161\u11AB\u110E\u1161\u11AB","\u1107\u1161\u11AE\u110E\u1175\u11B7","\u1107\u1161\u11AF\u1100\u1161\u1105\u1161\u11A8","\u1107\u1161\u11AF\u1100\u1165\u11AF\u110B\u1173\u11B7","\u1107\u1161\u11AF\u1100\u1167\u11AB","\u1107\u1161\u11AF\u1103\u1161\u11AF","\u1107\u1161\u11AF\u1105\u1166","\u1107\u1161\u11AF\u1106\u1169\u11A8","\u1107\u1161\u11AF\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u11AF\u1109\u1162\u11BC","\u1107\u1161\u11AF\u110B\u1173\u11B7","\u1107\u1161\u11AF\u110C\u1161\u1100\u116E\u11A8","\u1107\u1161\u11AF\u110C\u1165\u11AB","\u1107\u1161\u11AF\u1110\u1169\u11B8","\u1107\u1161\u11AF\u1111\u116D","\u1107\u1161\u11B7\u1112\u1161\u1102\u1173\u11AF","\u1107\u1161\u11B8\u1100\u1173\u1105\u1173\u11BA","\u1107\u1161\u11B8\u1106\u1161\u11BA","\u1107\u1161\u11B8\u1109\u1161\u11BC","\u1107\u1161\u11B8\u1109\u1169\u11C0","\u1107\u1161\u11BC\u1100\u1173\u11B7","\u1107\u1161\u11BC\u1106\u1167\u11AB","\u1107\u1161\u11BC\u1106\u116E\u11AB","\u1107\u1161\u11BC\u1107\u1161\u1103\u1161\u11A8","\u1107\u1161\u11BC\u1107\u1165\u11B8","\u1107\u1161\u11BC\u1109\u1169\u11BC","\u1107\u1161\u11BC\u1109\u1175\u11A8","\u1107\u1161\u11BC\u110B\u1161\u11AB","\u1107\u1161\u11BC\u110B\u116E\u11AF","\u1107\u1161\u11BC\u110C\u1175","\u1107\u1161\u11BC\u1112\u1161\u11A8","\u1107\u1161\u11BC\u1112\u1162","\u1107\u1161\u11BC\u1112\u1163\u11BC","\u1107\u1162\u1100\u1167\u11BC","\u1107\u1162\u1101\u1169\u11B8","\u1107\u1162\u1103\u1161\u11AF","\u1107\u1162\u1103\u1173\u1106\u1175\u11AB\u1110\u1165\u11AB","\u1107\u1162\u11A8\u1103\u116E\u1109\u1161\u11AB","\u1107\u1162\u11A8\u1109\u1162\u11A8","\u1107\u1162\u11A8\u1109\u1165\u11BC","\u1107\u1162\u11A8\u110B\u1175\u11AB","\u1107\u1162\u11A8\u110C\u1166","\u1107\u1162\u11A8\u1112\u116A\u110C\u1165\u11B7","\u1107\u1165\u1105\u1173\u11BA","\u1107\u1165\u1109\u1165\u11BA","\u1107\u1165\u1110\u1173\u11AB","\u1107\u1165\u11AB\u1100\u1162","\u1107\u1165\u11AB\u110B\u1167\u11A8","\u1107\u1165\u11AB\u110C\u1175","\u1107\u1165\u11AB\u1112\u1169","\u1107\u1165\u11AF\u1100\u1173\u11B7","\u1107\u1165\u11AF\u1105\u1166","\u1107\u1165\u11AF\u110A\u1165","\u1107\u1165\u11B7\u110B\u1171","\u1107\u1165\u11B7\u110B\u1175\u11AB","\u1107\u1165\u11B7\u110C\u116C","\u1107\u1165\u11B8\u1105\u1172\u11AF","\u1107\u1165\u11B8\u110B\u116F\u11AB","\u1107\u1165\u11B8\u110C\u1165\u11A8","\u1107\u1165\u11B8\u110E\u1175\u11A8","\u1107\u1166\u110B\u1175\u110C\u1175\u11BC","\u1107\u1166\u11AF\u1110\u1173","\u1107\u1167\u11AB\u1100\u1167\u11BC","\u1107\u1167\u11AB\u1103\u1169\u11BC","\u1107\u1167\u11AB\u1106\u1167\u11BC","\u1107\u1167\u11AB\u1109\u1175\u11AB","\u1107\u1167\u11AB\u1112\u1169\u1109\u1161","\u1107\u1167\u11AB\u1112\u116A","\u1107\u1167\u11AF\u1103\u1169","\u1107\u1167\u11AF\u1106\u1167\u11BC","\u1107\u1167\u11AF\u110B\u1175\u11AF","\u1107\u1167\u11BC\u1109\u1175\u11AF","\u1107\u1167\u11BC\u110B\u1161\u1105\u1175","\u1107\u1167\u11BC\u110B\u116F\u11AB","\u1107\u1169\u1100\u116A\u11AB","\u1107\u1169\u1102\u1165\u1109\u1173","\u1107\u1169\u1105\u1161\u1109\u1162\u11A8","\u1107\u1169\u1105\u1161\u11B7","\u1107\u1169\u1105\u1173\u11B7","\u1107\u1169\u1109\u1161\u11BC","\u1107\u1169\u110B\u1161\u11AB","\u1107\u1169\u110C\u1161\u1100\u1175","\u1107\u1169\u110C\u1161\u11BC","\u1107\u1169\u110C\u1165\u11AB","\u1107\u1169\u110C\u1169\u11AB","\u1107\u1169\u1110\u1169\u11BC","\u1107\u1169\u1111\u1167\u11AB\u110C\u1165\u11A8","\u1107\u1169\u1112\u1165\u11B7","\u1107\u1169\u11A8\u1103\u1169","\u1107\u1169\u11A8\u1109\u1161","\u1107\u1169\u11A8\u1109\u116E\u11BC\u110B\u1161","\u1107\u1169\u11A8\u1109\u1173\u11B8","\u1107\u1169\u11A9\u110B\u1173\u11B7","\u1107\u1169\u11AB\u1100\u1167\u11A8\u110C\u1165\u11A8","\u1107\u1169\u11AB\u1105\u1162","\u1107\u1169\u11AB\u1107\u116E","\u1107\u1169\u11AB\u1109\u1161","\u1107\u1169\u11AB\u1109\u1165\u11BC","\u1107\u1169\u11AB\u110B\u1175\u11AB","\u1107\u1169\u11AB\u110C\u1175\u11AF","\u1107\u1169\u11AF\u1111\u1166\u11AB","\u1107\u1169\u11BC\u1109\u1161","\u1107\u1169\u11BC\u110C\u1175","\u1107\u1169\u11BC\u1110\u116E","\u1107\u116E\u1100\u1173\u11AB","\u1107\u116E\u1101\u1173\u1105\u1165\u110B\u116E\u11B7","\u1107\u116E\u1103\u1161\u11B7","\u1107\u116E\u1103\u1169\u11BC\u1109\u1161\u11AB","\u1107\u116E\u1106\u116E\u11AB","\u1107\u116E\u1107\u116E\u11AB","\u1107\u116E\u1109\u1161\u11AB","\u1107\u116E\u1109\u1161\u11BC","\u1107\u116E\u110B\u1165\u11BF","\u1107\u116E\u110B\u1175\u11AB","\u1107\u116E\u110C\u1161\u11A8\u110B\u116D\u11BC","\u1107\u116E\u110C\u1161\u11BC","\u1107\u116E\u110C\u1165\u11BC","\u1107\u116E\u110C\u1169\u11A8","\u1107\u116E\u110C\u1175\u1105\u1165\u11AB\u1112\u1175","\u1107\u116E\u110E\u1175\u11AB","\u1107\u116E\u1110\u1161\u11A8","\u1107\u116E\u1111\u116E\u11B7","\u1107\u116E\u1112\u116C\u110C\u1161\u11BC","\u1107\u116E\u11A8\u1107\u116E","\u1107\u116E\u11A8\u1112\u1161\u11AB","\u1107\u116E\u11AB\u1102\u1169","\u1107\u116E\u11AB\u1105\u1163\u11BC","\u1107\u116E\u11AB\u1105\u1175","\u1107\u116E\u11AB\u1106\u1167\u11BC","\u1107\u116E\u11AB\u1109\u1165\u11A8","\u1107\u116E\u11AB\u110B\u1163","\u1107\u116E\u11AB\u110B\u1171\u1100\u1175","\u1107\u116E\u11AB\u1111\u1175\u11AF","\u1107\u116E\u11AB\u1112\u1169\u11BC\u1109\u1162\u11A8","\u1107\u116E\u11AF\u1100\u1169\u1100\u1175","\u1107\u116E\u11AF\u1100\u116A","\u1107\u116E\u11AF\u1100\u116D","\u1107\u116E\u11AF\u1101\u1169\u11BE","\u1107\u116E\u11AF\u1106\u1161\u11AB","\u1107\u116E\u11AF\u1107\u1165\u11B8","\u1107\u116E\u11AF\u1107\u1175\u11BE","\u1107\u116E\u11AF\u110B\u1161\u11AB","\u1107\u116E\u11AF\u110B\u1175\u110B\u1175\u11A8","\u1107\u116E\u11AF\u1112\u1162\u11BC","\u1107\u1173\u1105\u1162\u11AB\u1103\u1173","\u1107\u1175\u1100\u1173\u11A8","\u1107\u1175\u1102\u1161\u11AB","\u1107\u1175\u1102\u1175\u11AF","\u1107\u1175\u1103\u116E\u11AF\u1100\u1175","\u1107\u1175\u1103\u1175\u110B\u1169","\u1107\u1175\u1105\u1169\u1109\u1169","\u1107\u1175\u1106\u1161\u11AB","\u1107\u1175\u1106\u1167\u11BC","\u1107\u1175\u1106\u1175\u11AF","\u1107\u1175\u1107\u1161\u1105\u1161\u11B7","\u1107\u1175\u1107\u1175\u11B7\u1107\u1161\u11B8","\u1107\u1175\u1109\u1161\u11BC","\u1107\u1175\u110B\u116D\u11BC","\u1107\u1175\u110B\u1172\u11AF","\u1107\u1175\u110C\u116E\u11BC","\u1107\u1175\u1110\u1161\u1106\u1175\u11AB","\u1107\u1175\u1111\u1161\u11AB","\u1107\u1175\u11AF\u1103\u1175\u11BC","\u1107\u1175\u11BA\u1106\u116E\u11AF","\u1107\u1175\u11BA\u1107\u1161\u11BC\u110B\u116E\u11AF","\u1107\u1175\u11BA\u110C\u116E\u11AF\u1100\u1175","\u1107\u1175\u11BE\u1101\u1161\u11AF","\u1108\u1161\u11AF\u1100\u1161\u11AB\u1109\u1162\u11A8","\u1108\u1161\u11AF\u1105\u1162","\u1108\u1161\u11AF\u1105\u1175","\u1109\u1161\u1100\u1165\u11AB","\u1109\u1161\u1100\u1168\u110C\u1165\u11AF","\u1109\u1161\u1102\u1161\u110B\u1175","\u1109\u1161\u1102\u1163\u11BC","\u1109\u1161\u1105\u1161\u11B7","\u1109\u1161\u1105\u1161\u11BC","\u1109\u1161\u1105\u1175\u11B8","\u1109\u1161\u1106\u1169\u1102\u1175\u11B7","\u1109\u1161\u1106\u116E\u11AF","\u1109\u1161\u1107\u1161\u11BC","\u1109\u1161\u1109\u1161\u11BC","\u1109\u1161\u1109\u1162\u11BC\u1112\u116A\u11AF","\u1109\u1161\u1109\u1165\u11AF","\u1109\u1161\u1109\u1173\u11B7","\u1109\u1161\u1109\u1175\u11AF","\u1109\u1161\u110B\u1165\u11B8","\u1109\u1161\u110B\u116D\u11BC","\u1109\u1161\u110B\u116F\u11AF","\u1109\u1161\u110C\u1161\u11BC","\u1109\u1161\u110C\u1165\u11AB","\u1109\u1161\u110C\u1175\u11AB","\u1109\u1161\u110E\u1169\u11AB","\u1109\u1161\u110E\u116E\u11AB\u1100\u1175","\u1109\u1161\u1110\u1161\u11BC","\u1109\u1161\u1110\u116E\u1105\u1175","\u1109\u1161\u1112\u1173\u11AF","\u1109\u1161\u11AB\u1100\u1175\u11AF","\u1109\u1161\u11AB\u1107\u116E\u110B\u1175\u11AB\u1100\u116A","\u1109\u1161\u11AB\u110B\u1165\u11B8","\u1109\u1161\u11AB\u110E\u1162\u11A8","\u1109\u1161\u11AF\u1105\u1175\u11B7","\u1109\u1161\u11AF\u110B\u1175\u11AB","\u1109\u1161\u11AF\u110D\u1161\u11A8","\u1109\u1161\u11B7\u1100\u1168\u1110\u1161\u11BC","\u1109\u1161\u11B7\u1100\u116E\u11A8","\u1109\u1161\u11B7\u1109\u1175\u11B8","\u1109\u1161\u11B7\u110B\u116F\u11AF","\u1109\u1161\u11B7\u110E\u1169\u11AB","\u1109\u1161\u11BC\u1100\u116A\u11AB","\u1109\u1161\u11BC\u1100\u1173\u11B7","\u1109\u1161\u11BC\u1103\u1162","\u1109\u1161\u11BC\u1105\u1172","\u1109\u1161\u11BC\u1107\u1161\u11AB\u1100\u1175","\u1109\u1161\u11BC\u1109\u1161\u11BC","\u1109\u1161\u11BC\u1109\u1175\u11A8","\u1109\u1161\u11BC\u110B\u1165\u11B8","\u1109\u1161\u11BC\u110B\u1175\u11AB","\u1109\u1161\u11BC\u110C\u1161","\u1109\u1161\u11BC\u110C\u1165\u11B7","\u1109\u1161\u11BC\u110E\u1165","\u1109\u1161\u11BC\u110E\u116E","\u1109\u1161\u11BC\u1110\u1162","\u1109\u1161\u11BC\u1111\u116D","\u1109\u1161\u11BC\u1111\u116E\u11B7","\u1109\u1161\u11BC\u1112\u116A\u11BC","\u1109\u1162\u1107\u1167\u11A8","\u1109\u1162\u11A8\u1101\u1161\u11AF","\u1109\u1162\u11A8\u110B\u1167\u11AB\u1111\u1175\u11AF","\u1109\u1162\u11BC\u1100\u1161\u11A8","\u1109\u1162\u11BC\u1106\u1167\u11BC","\u1109\u1162\u11BC\u1106\u116E\u11AF","\u1109\u1162\u11BC\u1107\u1161\u11BC\u1109\u1169\u11BC","\u1109\u1162\u11BC\u1109\u1161\u11AB","\u1109\u1162\u11BC\u1109\u1165\u11AB","\u1109\u1162\u11BC\u1109\u1175\u11AB","\u1109\u1162\u11BC\u110B\u1175\u11AF","\u1109\u1162\u11BC\u1112\u116A\u11AF","\u1109\u1165\u1105\u1161\u11B8","\u1109\u1165\u1105\u1173\u11AB","\u1109\u1165\u1106\u1167\u11BC","\u1109\u1165\u1106\u1175\u11AB","\u1109\u1165\u1107\u1175\u1109\u1173","\u1109\u1165\u110B\u1163\u11BC","\u1109\u1165\u110B\u116E\u11AF","\u1109\u1165\u110C\u1165\u11A8","\u1109\u1165\u110C\u1165\u11B7","\u1109\u1165\u110D\u1169\u11A8","\u1109\u1165\u110F\u1173\u11AF","\u1109\u1165\u11A8\u1109\u1161","\u1109\u1165\u11A8\u110B\u1172","\u1109\u1165\u11AB\u1100\u1165","\u1109\u1165\u11AB\u1106\u116E\u11AF","\u1109\u1165\u11AB\u1107\u1162","\u1109\u1165\u11AB\u1109\u1162\u11BC","\u1109\u1165\u11AB\u1109\u116E","\u1109\u1165\u11AB\u110B\u116F\u11AB","\u1109\u1165\u11AB\u110C\u1161\u11BC","\u1109\u1165\u11AB\u110C\u1165\u11AB","\u1109\u1165\u11AB\u1110\u1162\u11A8","\u1109\u1165\u11AB\u1111\u116E\u11BC\u1100\u1175","\u1109\u1165\u11AF\u1100\u1165\u110C\u1175","\u1109\u1165\u11AF\u1102\u1161\u11AF","\u1109\u1165\u11AF\u1105\u1165\u11BC\u1110\u1161\u11BC","\u1109\u1165\u11AF\u1106\u1167\u11BC","\u1109\u1165\u11AF\u1106\u116E\u11AB","\u1109\u1165\u11AF\u1109\u1161","\u1109\u1165\u11AF\u110B\u1161\u11A8\u1109\u1161\u11AB","\u1109\u1165\u11AF\u110E\u1175","\u1109\u1165\u11AF\u1110\u1161\u11BC","\u1109\u1165\u11B8\u110A\u1175","\u1109\u1165\u11BC\u1100\u1169\u11BC","\u1109\u1165\u11BC\u1103\u1161\u11BC","\u1109\u1165\u11BC\u1106\u1167\u11BC","\u1109\u1165\u11BC\u1107\u1167\u11AF","\u1109\u1165\u11BC\u110B\u1175\u11AB","\u1109\u1165\u11BC\u110C\u1161\u11BC","\u1109\u1165\u11BC\u110C\u1165\u11A8","\u1109\u1165\u11BC\u110C\u1175\u11AF","\u1109\u1165\u11BC\u1112\u1161\u11B7","\u1109\u1166\u1100\u1173\u11B7","\u1109\u1166\u1106\u1175\u1102\u1161","\u1109\u1166\u1109\u1161\u11BC","\u1109\u1166\u110B\u116F\u11AF","\u1109\u1166\u110C\u1169\u11BC\u1103\u1162\u110B\u116A\u11BC","\u1109\u1166\u1110\u1161\u11A8","\u1109\u1166\u11AB\u1110\u1165","\u1109\u1166\u11AB\u1110\u1175\u1106\u1175\u1110\u1165","\u1109\u1166\u11BA\u110D\u1162","\u1109\u1169\u1100\u1172\u1106\u1169","\u1109\u1169\u1100\u1173\u11A8\u110C\u1165\u11A8","\u1109\u1169\u1100\u1173\u11B7","\u1109\u1169\u1102\u1161\u1100\u1175","\u1109\u1169\u1102\u1167\u11AB","\u1109\u1169\u1103\u1173\u11A8","\u1109\u1169\u1106\u1161\u11BC","\u1109\u1169\u1106\u116E\u11AB","\u1109\u1169\u1109\u1165\u11AF","\u1109\u1169\u1109\u1169\u11A8","\u1109\u1169\u110B\u1161\u1100\u116A","\u1109\u1169\u110B\u116D\u11BC","\u1109\u1169\u110B\u116F\u11AB","\u1109\u1169\u110B\u1173\u11B7","\u1109\u1169\u110C\u116E\u11BC\u1112\u1175","\u1109\u1169\u110C\u1175\u1111\u116E\u11B7","\u1109\u1169\u110C\u1175\u11AF","\u1109\u1169\u1111\u116E\u11BC","\u1109\u1169\u1112\u1167\u11BC","\u1109\u1169\u11A8\u1103\u1161\u11B7","\u1109\u1169\u11A8\u1103\u1169","\u1109\u1169\u11A8\u110B\u1169\u11BA","\u1109\u1169\u11AB\u1100\u1161\u1105\u1161\u11A8","\u1109\u1169\u11AB\u1100\u1175\u11AF","\u1109\u1169\u11AB\u1102\u1167","\u1109\u1169\u11AB\u1102\u1175\u11B7","\u1109\u1169\u11AB\u1103\u1173\u11BC","\u1109\u1169\u11AB\u1106\u1169\u11A8","\u1109\u1169\u11AB\u1108\u1167\u11A8","\u1109\u1169\u11AB\u1109\u1175\u11AF","\u1109\u1169\u11AB\u110C\u1175\u11AF","\u1109\u1169\u11AB\u1110\u1169\u11B8","\u1109\u1169\u11AB\u1112\u1162","\u1109\u1169\u11AF\u110C\u1175\u11A8\u1112\u1175","\u1109\u1169\u11B7\u110A\u1175","\u1109\u1169\u11BC\u110B\u1161\u110C\u1175","\u1109\u1169\u11BC\u110B\u1175","\u1109\u1169\u11BC\u1111\u1167\u11AB","\u1109\u116C\u1100\u1169\u1100\u1175","\u1109\u116D\u1111\u1175\u11BC","\u1109\u116E\u1100\u1165\u11AB","\u1109\u116E\u1102\u1167\u11AB","\u1109\u116E\u1103\u1161\u11AB","\u1109\u116E\u1103\u1169\u11BA\u1106\u116E\u11AF","\u1109\u116E\u1103\u1169\u11BC\u110C\u1165\u11A8","\u1109\u116E\u1106\u1167\u11AB","\u1109\u116E\u1106\u1167\u11BC","\u1109\u116E\u1107\u1161\u11A8","\u1109\u116E\u1109\u1161\u11BC","\u1109\u116E\u1109\u1165\u11A8","\u1109\u116E\u1109\u116E\u11AF","\u1109\u116E\u1109\u1175\u1105\u1169","\u1109\u116E\u110B\u1165\u11B8","\u1109\u116E\u110B\u1167\u11B7","\u1109\u116E\u110B\u1167\u11BC","\u1109\u116E\u110B\u1175\u11B8","\u1109\u116E\u110C\u116E\u11AB","\u1109\u116E\u110C\u1175\u11B8","\u1109\u116E\u110E\u116E\u11AF","\u1109\u116E\u110F\u1165\u11BA","\u1109\u116E\u1111\u1175\u11AF","\u1109\u116E\u1112\u1161\u11A8","\u1109\u116E\u1112\u1165\u11B7\u1109\u1162\u11BC","\u1109\u116E\u1112\u116A\u1100\u1175","\u1109\u116E\u11A8\u1102\u1167","\u1109\u116E\u11A8\u1109\u1169","\u1109\u116E\u11A8\u110C\u1166","\u1109\u116E\u11AB\u1100\u1161\u11AB","\u1109\u116E\u11AB\u1109\u1165","\u1109\u116E\u11AB\u1109\u116E","\u1109\u116E\u11AB\u1109\u1175\u11A8\u1100\u1161\u11AB","\u1109\u116E\u11AB\u110B\u1171","\u1109\u116E\u11AE\u1100\u1161\u1105\u1161\u11A8","\u1109\u116E\u11AF\u1107\u1167\u11BC","\u1109\u116E\u11AF\u110C\u1175\u11B8","\u1109\u116E\u11BA\u110C\u1161","\u1109\u1173\u1102\u1175\u11B7","\u1109\u1173\u1106\u116E\u11AF","\u1109\u1173\u1109\u1173\u1105\u1169","\u1109\u1173\u1109\u1173\u11BC","\u1109\u1173\u110B\u1170\u1110\u1165","\u1109\u1173\u110B\u1171\u110E\u1175","\u1109\u1173\u110F\u1166\u110B\u1175\u1110\u1173","\u1109\u1173\u1110\u1172\u1103\u1175\u110B\u1169","\u1109\u1173\u1110\u1173\u1105\u1166\u1109\u1173","\u1109\u1173\u1111\u1169\u110E\u1173","\u1109\u1173\u11AF\u110D\u1165\u11A8","\u1109\u1173\u11AF\u1111\u1173\u11B7","\u1109\u1173\u11B8\u1100\u116A\u11AB","\u1109\u1173\u11B8\u1100\u1175","\u1109\u1173\u11BC\u1100\u1162\u11A8","\u1109\u1173\u11BC\u1105\u1175","\u1109\u1173\u11BC\u1107\u116E","\u1109\u1173\u11BC\u110B\u116D\u11BC\u110E\u1161","\u1109\u1173\u11BC\u110C\u1175\u11AB","\u1109\u1175\u1100\u1161\u11A8","\u1109\u1175\u1100\u1161\u11AB","\u1109\u1175\u1100\u1169\u11AF","\u1109\u1175\u1100\u1173\u11B7\u110E\u1175","\u1109\u1175\u1102\u1161\u1105\u1175\u110B\u1169","\u1109\u1175\u1103\u1162\u11A8","\u1109\u1175\u1105\u1175\u110C\u1173","\u1109\u1175\u1106\u1166\u11AB\u1110\u1173","\u1109\u1175\u1106\u1175\u11AB","\u1109\u1175\u1107\u116E\u1106\u1169","\u1109\u1175\u1109\u1165\u11AB","\u1109\u1175\u1109\u1165\u11AF","\u1109\u1175\u1109\u1173\u1110\u1166\u11B7","\u1109\u1175\u110B\u1161\u1107\u1165\u110C\u1175","\u1109\u1175\u110B\u1165\u1106\u1165\u1102\u1175","\u1109\u1175\u110B\u116F\u11AF","\u1109\u1175\u110B\u1175\u11AB","\u1109\u1175\u110B\u1175\u11AF","\u1109\u1175\u110C\u1161\u11A8","\u1109\u1175\u110C\u1161\u11BC","\u1109\u1175\u110C\u1165\u11AF","\u1109\u1175\u110C\u1165\u11B7","\u1109\u1175\u110C\u116E\u11BC","\u1109\u1175\u110C\u1173\u11AB","\u1109\u1175\u110C\u1175\u11B8","\u1109\u1175\u110E\u1165\u11BC","\u1109\u1175\u1112\u1161\u11B8","\u1109\u1175\u1112\u1165\u11B7","\u1109\u1175\u11A8\u1100\u116E","\u1109\u1175\u11A8\u1100\u1175","\u1109\u1175\u11A8\u1103\u1161\u11BC","\u1109\u1175\u11A8\u1105\u1163\u11BC","\u1109\u1175\u11A8\u1105\u116D\u1111\u116E\u11B7","\u1109\u1175\u11A8\u1106\u116E\u11AF","\u1109\u1175\u11A8\u1108\u1161\u11BC","\u1109\u1175\u11A8\u1109\u1161","\u1109\u1175\u11A8\u1109\u1162\u11BC\u1112\u116A\u11AF","\u1109\u1175\u11A8\u110E\u1169","\u1109\u1175\u11A8\u1110\u1161\u11A8","\u1109\u1175\u11A8\u1111\u116E\u11B7","\u1109\u1175\u11AB\u1100\u1169","\u1109\u1175\u11AB\u1100\u1172","\u1109\u1175\u11AB\u1102\u1167\u11B7","\u1109\u1175\u11AB\u1106\u116E\u11AB","\u1109\u1175\u11AB\u1107\u1161\u11AF","\u1109\u1175\u11AB\u1107\u1175","\u1109\u1175\u11AB\u1109\u1161","\u1109\u1175\u11AB\u1109\u1166","\u1109\u1175\u11AB\u110B\u116D\u11BC","\u1109\u1175\u11AB\u110C\u1166\u1111\u116E\u11B7","\u1109\u1175\u11AB\u110E\u1165\u11BC","\u1109\u1175\u11AB\u110E\u1166","\u1109\u1175\u11AB\u1112\u116A","\u1109\u1175\u11AF\u1100\u1161\u11B7","\u1109\u1175\u11AF\u1102\u1162","\u1109\u1175\u11AF\u1105\u1167\u11A8","\u1109\u1175\u11AF\u1105\u1168","\u1109\u1175\u11AF\u1106\u1161\u11BC","\u1109\u1175\u11AF\u1109\u116E","\u1109\u1175\u11AF\u1109\u1173\u11B8","\u1109\u1175\u11AF\u1109\u1175","\u1109\u1175\u11AF\u110C\u1161\u11BC","\u1109\u1175\u11AF\u110C\u1165\u11BC","\u1109\u1175\u11AF\u110C\u1175\u11AF\u110C\u1165\u11A8","\u1109\u1175\u11AF\u110E\u1165\u11AB","\u1109\u1175\u11AF\u110E\u1166","\u1109\u1175\u11AF\u110F\u1165\u11BA","\u1109\u1175\u11AF\u1110\u1162","\u1109\u1175\u11AF\u1111\u1162","\u1109\u1175\u11AF\u1112\u1165\u11B7","\u1109\u1175\u11AF\u1112\u1167\u11AB","\u1109\u1175\u11B7\u1105\u1175","\u1109\u1175\u11B7\u1107\u116E\u1105\u1173\u11B7","\u1109\u1175\u11B7\u1109\u1161","\u1109\u1175\u11B7\u110C\u1161\u11BC","\u1109\u1175\u11B7\u110C\u1165\u11BC","\u1109\u1175\u11B7\u1111\u1161\u11AB","\u110A\u1161\u11BC\u1103\u116E\u11BC\u110B\u1175","\u110A\u1175\u1105\u1173\u11B7","\u110A\u1175\u110B\u1161\u11BA","\u110B\u1161\u1100\u1161\u110A\u1175","\u110B\u1161\u1102\u1161\u110B\u116E\u11AB\u1109\u1165","\u110B\u1161\u1103\u1173\u1102\u1175\u11B7","\u110B\u1161\u1103\u1173\u11AF","\u110B\u1161\u1109\u1171\u110B\u116E\u11B7","\u110B\u1161\u1109\u1173\u1111\u1161\u11AF\u1110\u1173","\u110B\u1161\u1109\u1175\u110B\u1161","\u110B\u1161\u110B\u116E\u11AF\u1105\u1165","\u110B\u1161\u110C\u1165\u110A\u1175","\u110B\u1161\u110C\u116E\u11B7\u1106\u1161","\u110B\u1161\u110C\u1175\u11A8","\u110B\u1161\u110E\u1175\u11B7","\u110B\u1161\u1111\u1161\u1110\u1173","\u110B\u1161\u1111\u1173\u1105\u1175\u110F\u1161","\u110B\u1161\u1111\u1173\u11B7","\u110B\u1161\u1112\u1169\u11B8","\u110B\u1161\u1112\u1173\u11AB","\u110B\u1161\u11A8\u1100\u1175","\u110B\u1161\u11A8\u1106\u1169\u11BC","\u110B\u1161\u11A8\u1109\u116E","\u110B\u1161\u11AB\u1100\u1162","\u110B\u1161\u11AB\u1100\u1167\u11BC","\u110B\u1161\u11AB\u1100\u116A","\u110B\u1161\u11AB\u1102\u1162","\u110B\u1161\u11AB\u1102\u1167\u11BC","\u110B\u1161\u11AB\u1103\u1169\u11BC","\u110B\u1161\u11AB\u1107\u1161\u11BC","\u110B\u1161\u11AB\u1107\u116E","\u110B\u1161\u11AB\u110C\u116E","\u110B\u1161\u11AF\u1105\u116E\u1106\u1175\u1102\u1172\u11B7","\u110B\u1161\u11AF\u110F\u1169\u110B\u1169\u11AF","\u110B\u1161\u11B7\u1109\u1175","\u110B\u1161\u11B7\u110F\u1165\u11BA","\u110B\u1161\u11B8\u1105\u1167\u11A8","\u110B\u1161\u11C1\u1102\u1161\u11AF","\u110B\u1161\u11C1\u1106\u116E\u11AB","\u110B\u1162\u110B\u1175\u11AB","\u110B\u1162\u110C\u1165\u11BC","\u110B\u1162\u11A8\u1109\u116E","\u110B\u1162\u11AF\u1107\u1165\u11B7","\u110B\u1163\u1100\u1161\u11AB","\u110B\u1163\u1103\u1161\u11AB","\u110B\u1163\u110B\u1169\u11BC","\u110B\u1163\u11A8\u1100\u1161\u11AB","\u110B\u1163\u11A8\u1100\u116E\u11A8","\u110B\u1163\u11A8\u1109\u1169\u11A8","\u110B\u1163\u11A8\u1109\u116E","\u110B\u1163\u11A8\u110C\u1165\u11B7","\u110B\u1163\u11A8\u1111\u116E\u11B7","\u110B\u1163\u11A8\u1112\u1169\u11AB\u1102\u1167","\u110B\u1163\u11BC\u1102\u1167\u11B7","\u110B\u1163\u11BC\u1105\u1167\u11A8","\u110B\u1163\u11BC\u1106\u1161\u11AF","\u110B\u1163\u11BC\u1107\u1162\u110E\u116E","\u110B\u1163\u11BC\u110C\u116E","\u110B\u1163\u11BC\u1111\u1161","\u110B\u1165\u1103\u116E\u11B7","\u110B\u1165\u1105\u1167\u110B\u116E\u11B7","\u110B\u1165\u1105\u1173\u11AB","\u110B\u1165\u110C\u1166\u11BA\u1107\u1161\u11B7","\u110B\u1165\u110D\u1162\u11BB\u1103\u1173\u11AB","\u110B\u1165\u110D\u1165\u1103\u1161\u1100\u1161","\u110B\u1165\u110D\u1165\u11AB\u110C\u1175","\u110B\u1165\u11AB\u1102\u1175","\u110B\u1165\u11AB\u1103\u1165\u11A8","\u110B\u1165\u11AB\u1105\u1169\u11AB","\u110B\u1165\u11AB\u110B\u1165","\u110B\u1165\u11AF\u1100\u116E\u11AF","\u110B\u1165\u11AF\u1105\u1173\u11AB","\u110B\u1165\u11AF\u110B\u1173\u11B7","\u110B\u1165\u11AF\u1111\u1175\u11BA","\u110B\u1165\u11B7\u1106\u1161","\u110B\u1165\u11B8\u1106\u116E","\u110B\u1165\u11B8\u110C\u1169\u11BC","\u110B\u1165\u11B8\u110E\u1166","\u110B\u1165\u11BC\u1103\u1165\u11BC\u110B\u1175","\u110B\u1165\u11BC\u1106\u1161\u11BC","\u110B\u1165\u11BC\u1110\u1165\u1105\u1175","\u110B\u1165\u11BD\u1100\u1173\u110C\u1166","\u110B\u1166\u1102\u1165\u110C\u1175","\u110B\u1166\u110B\u1165\u110F\u1165\u11AB","\u110B\u1166\u11AB\u110C\u1175\u11AB","\u110B\u1167\u1100\u1165\u11AB","\u110B\u1167\u1100\u1169\u1109\u1162\u11BC","\u110B\u1167\u1100\u116A\u11AB","\u110B\u1167\u1100\u116E\u11AB","\u110B\u1167\u1100\u116F\u11AB","\u110B\u1167\u1103\u1162\u1109\u1162\u11BC","\u110B\u1167\u1103\u1165\u11B2","\u110B\u1167\u1103\u1169\u11BC\u1109\u1162\u11BC","\u110B\u1167\u1103\u1173\u11AB","\u110B\u1167\u1105\u1169\u11AB","\u110B\u1167\u1105\u1173\u11B7","\u110B\u1167\u1109\u1165\u11BA","\u110B\u1167\u1109\u1165\u11BC","\u110B\u1167\u110B\u116A\u11BC","\u110B\u1167\u110B\u1175\u11AB","\u110B\u1167\u110C\u1165\u11AB\u1112\u1175","\u110B\u1167\u110C\u1175\u11A8\u110B\u116F\u11AB","\u110B\u1167\u1112\u1161\u11A8\u1109\u1162\u11BC","\u110B\u1167\u1112\u1162\u11BC","\u110B\u1167\u11A8\u1109\u1161","\u110B\u1167\u11A8\u1109\u1175","\u110B\u1167\u11A8\u1112\u1161\u11AF","\u110B\u1167\u11AB\u1100\u1167\u11AF","\u110B\u1167\u11AB\u1100\u116E","\u110B\u1167\u11AB\u1100\u1173\u11A8","\u110B\u1167\u11AB\u1100\u1175","\u110B\u1167\u11AB\u1105\u1161\u11A8","\u110B\u1167\u11AB\u1109\u1165\u11AF","\u110B\u1167\u11AB\u1109\u1166","\u110B\u1167\u11AB\u1109\u1169\u11A8","\u110B\u1167\u11AB\u1109\u1173\u11B8","\u110B\u1167\u11AB\u110B\u1162","\u110B\u1167\u11AB\u110B\u1168\u110B\u1175\u11AB","\u110B\u1167\u11AB\u110B\u1175\u11AB","\u110B\u1167\u11AB\u110C\u1161\u11BC","\u110B\u1167\u11AB\u110C\u116E","\u110B\u1167\u11AB\u110E\u116E\u11AF","\u110B\u1167\u11AB\u1111\u1175\u11AF","\u110B\u1167\u11AB\u1112\u1161\u11B8","\u110B\u1167\u11AB\u1112\u1172","\u110B\u1167\u11AF\u1100\u1175","\u110B\u1167\u11AF\u1106\u1162","\u110B\u1167\u11AF\u1109\u116C","\u110B\u1167\u11AF\u1109\u1175\u11B7\u1112\u1175","\u110B\u1167\u11AF\u110C\u1165\u11BC","\u110B\u1167\u11AF\u110E\u1161","\u110B\u1167\u11AF\u1112\u1173\u11AF","\u110B\u1167\u11B7\u1105\u1167","\u110B\u1167\u11B8\u1109\u1165","\u110B\u1167\u11BC\u1100\u116E\u11A8","\u110B\u1167\u11BC\u1102\u1161\u11B7","\u110B\u1167\u11BC\u1109\u1161\u11BC","\u110B\u1167\u11BC\u110B\u1163\u11BC","\u110B\u1167\u11BC\u110B\u1167\u11A8","\u110B\u1167\u11BC\u110B\u116E\u11BC","\u110B\u1167\u11BC\u110B\u116F\u11AB\u1112\u1175","\u110B\u1167\u11BC\u1112\u1161","\u110B\u1167\u11BC\u1112\u1163\u11BC","\u110B\u1167\u11BC\u1112\u1169\u11AB","\u110B\u1167\u11BC\u1112\u116A","\u110B\u1167\u11C1\u1100\u116E\u1105\u1175","\u110B\u1167\u11C1\u1107\u1161\u11BC","\u110B\u1167\u11C1\u110C\u1175\u11B8","\u110B\u1168\u1100\u1161\u11B7","\u110B\u1168\u1100\u1173\u11B7","\u110B\u1168\u1107\u1161\u11BC","\u110B\u1168\u1109\u1161\u11AB","\u110B\u1168\u1109\u1161\u11BC","\u110B\u1168\u1109\u1165\u11AB","\u110B\u1168\u1109\u116E\u11AF","\u110B\u1168\u1109\u1173\u11B8","\u110B\u1168\u1109\u1175\u11A8\u110C\u1161\u11BC","\u110B\u1168\u110B\u1163\u11A8","\u110B\u1168\u110C\u1165\u11AB","\u110B\u1168\u110C\u1165\u11AF","\u110B\u1168\u110C\u1165\u11BC","\u110B\u1168\u110F\u1165\u11AB\u1103\u1162","\u110B\u1168\u11BA\u1102\u1161\u11AF","\u110B\u1169\u1102\u1173\u11AF","\u110B\u1169\u1105\u1161\u11A8","\u110B\u1169\u1105\u1162\u11BA\u1103\u1169\u11BC\u110B\u1161\u11AB","\u110B\u1169\u1105\u1166\u11AB\u110C\u1175","\u110B\u1169\u1105\u1169\u110C\u1175","\u110B\u1169\u1105\u1173\u11AB\u1107\u1161\u11AF","\u110B\u1169\u1107\u1173\u11AB","\u110B\u1169\u1109\u1175\u11B8","\u110B\u1169\u110B\u1167\u11B7","\u110B\u1169\u110B\u116F\u11AF","\u110B\u1169\u110C\u1165\u11AB","\u110B\u1169\u110C\u1175\u11A8","\u110B\u1169\u110C\u1175\u11BC\u110B\u1165","\u110B\u1169\u1111\u1166\u1105\u1161","\u110B\u1169\u1111\u1175\u1109\u1173\u1110\u1166\u11AF","\u110B\u1169\u1112\u1175\u1105\u1167","\u110B\u1169\u11A8\u1109\u1161\u11BC","\u110B\u1169\u11A8\u1109\u116E\u1109\u116E","\u110B\u1169\u11AB\u1100\u1161\u11BD","\u110B\u1169\u11AB\u1105\u1161\u110B\u1175\u11AB","\u110B\u1169\u11AB\u1106\u1169\u11B7","\u110B\u1169\u11AB\u110C\u1169\u11BC\u110B\u1175\u11AF","\u110B\u1169\u11AB\u1110\u1169\u11BC","\u110B\u1169\u11AF\u1100\u1161\u110B\u1173\u11AF","\u110B\u1169\u11AF\u1105\u1175\u11B7\u1111\u1175\u11A8","\u110B\u1169\u11AF\u1112\u1162","\u110B\u1169\u11BA\u110E\u1161\u1105\u1175\u11B7","\u110B\u116A\u110B\u1175\u1109\u1167\u110E\u1173","\u110B\u116A\u110B\u1175\u11AB","\u110B\u116A\u11AB\u1109\u1165\u11BC","\u110B\u116A\u11AB\u110C\u1165\u11AB","\u110B\u116A\u11BC\u1107\u1175","\u110B\u116A\u11BC\u110C\u1161","\u110B\u116B\u1102\u1163\u1112\u1161\u1106\u1167\u11AB","\u110B\u116B\u11AB\u110C\u1175","\u110B\u116C\u1100\u1161\u11BA\u110C\u1175\u11B8","\u110B\u116C\u1100\u116E\u11A8","\u110B\u116C\u1105\u1169\u110B\u116E\u11B7","\u110B\u116C\u1109\u1161\u11B7\u110E\u1169\u11AB","\u110B\u116C\u110E\u116E\u11AF","\u110B\u116C\u110E\u1175\u11B7","\u110B\u116C\u1112\u1161\u11AF\u1106\u1165\u1102\u1175","\u110B\u116C\u11AB\u1107\u1161\u11AF","\u110B\u116C\u11AB\u1109\u1169\u11AB","\u110B\u116C\u11AB\u110D\u1169\u11A8","\u110B\u116D\u1100\u1173\u11B7","\u110B\u116D\u110B\u1175\u11AF","\u110B\u116D\u110C\u1173\u11B7","\u110B\u116D\u110E\u1165\u11BC","\u110B\u116D\u11BC\u1100\u1175","\u110B\u116D\u11BC\u1109\u1165","\u110B\u116D\u11BC\u110B\u1165","\u110B\u116E\u1109\u1161\u11AB","\u110B\u116E\u1109\u1165\u11AB","\u110B\u116E\u1109\u1173\u11BC","\u110B\u116E\u110B\u1167\u11AB\u1112\u1175","\u110B\u116E\u110C\u1165\u11BC","\u110B\u116E\u110E\u1166\u1100\u116E\u11A8","\u110B\u116E\u1111\u1167\u11AB","\u110B\u116E\u11AB\u1103\u1169\u11BC","\u110B\u116E\u11AB\u1106\u1167\u11BC","\u110B\u116E\u11AB\u1107\u1161\u11AB","\u110B\u116E\u11AB\u110C\u1165\u11AB","\u110B\u116E\u11AB\u1112\u1162\u11BC","\u110B\u116E\u11AF\u1109\u1161\u11AB","\u110B\u116E\u11AF\u110B\u1173\u11B7","\u110B\u116E\u11B7\u110C\u1175\u11A8\u110B\u1175\u11B7","\u110B\u116E\u11BA\u110B\u1165\u1105\u1173\u11AB","\u110B\u116E\u11BA\u110B\u1173\u11B7","\u110B\u116F\u1102\u1161\u11A8","\u110B\u116F\u11AB\u1100\u1169","\u110B\u116F\u11AB\u1105\u1162","\u110B\u116F\u11AB\u1109\u1165","\u110B\u116F\u11AB\u1109\u116E\u11BC\u110B\u1175","\u110B\u116F\u11AB\u110B\u1175\u11AB","\u110B\u116F\u11AB\u110C\u1161\u11BC","\u110B\u116F\u11AB\u1111\u1175\u1109\u1173","\u110B\u116F\u11AF\u1100\u1173\u11B8","\u110B\u116F\u11AF\u1103\u1173\u110F\u1165\u11B8","\u110B\u116F\u11AF\u1109\u1166","\u110B\u116F\u11AF\u110B\u116D\u110B\u1175\u11AF","\u110B\u1170\u110B\u1175\u1110\u1165","\u110B\u1171\u1107\u1161\u11AB","\u110B\u1171\u1107\u1165\u11B8","\u110B\u1171\u1109\u1165\u11BC","\u110B\u1171\u110B\u116F\u11AB","\u110B\u1171\u1112\u1165\u11B7","\u110B\u1171\u1112\u1167\u11B8","\u110B\u1171\u11BA\u1109\u1161\u1105\u1161\u11B7","\u110B\u1172\u1102\u1161\u11AB\u1112\u1175","\u110B\u1172\u1105\u1165\u11B8","\u110B\u1172\u1106\u1167\u11BC","\u110B\u1172\u1106\u116E\u11AF","\u110B\u1172\u1109\u1161\u11AB","\u110B\u1172\u110C\u1165\u11A8","\u110B\u1172\u110E\u1175\u110B\u116F\u11AB","\u110B\u1172\u1112\u1161\u11A8","\u110B\u1172\u1112\u1162\u11BC","\u110B\u1172\u1112\u1167\u11BC","\u110B\u1172\u11A8\u1100\u116E\u11AB","\u110B\u1172\u11A8\u1109\u1161\u11BC","\u110B\u1172\u11A8\u1109\u1175\u11B8","\u110B\u1172\u11A8\u110E\u1166","\u110B\u1173\u11AB\u1112\u1162\u11BC","\u110B\u1173\u11B7\u1105\u1167\u11A8","\u110B\u1173\u11B7\u1105\u116D","\u110B\u1173\u11B7\u1107\u1161\u11AB","\u110B\u1173\u11B7\u1109\u1165\u11BC","\u110B\u1173\u11B7\u1109\u1175\u11A8","\u110B\u1173\u11B7\u110B\u1161\u11A8","\u110B\u1173\u11B7\u110C\u116E","\u110B\u1174\u1100\u1167\u11AB","\u110B\u1174\u1102\u1169\u11AB","\u110B\u1174\u1106\u116E\u11AB","\u110B\u1174\u1107\u1169\u11A8","\u110B\u1174\u1109\u1175\u11A8","\u110B\u1174\u1109\u1175\u11B7","\u110B\u1174\u110B\u116C\u1105\u1169","\u110B\u1174\u110B\u116D\u11A8","\u110B\u1174\u110B\u116F\u11AB","\u110B\u1174\u1112\u1161\u11A8","\u110B\u1175\u1100\u1165\u11BA","\u110B\u1175\u1100\u1169\u11BA","\u110B\u1175\u1102\u1167\u11B7","\u110B\u1175\u1102\u1169\u11B7","\u110B\u1175\u1103\u1161\u11AF","\u110B\u1175\u1103\u1162\u1105\u1169","\u110B\u1175\u1103\u1169\u11BC","\u110B\u1175\u1105\u1165\u11C2\u1100\u1166","\u110B\u1175\u1105\u1167\u11A8\u1109\u1165","\u110B\u1175\u1105\u1169\u11AB\u110C\u1165\u11A8","\u110B\u1175\u1105\u1173\u11B7","\u110B\u1175\u1106\u1175\u11AB","\u110B\u1175\u1107\u1161\u11AF\u1109\u1169","\u110B\u1175\u1107\u1167\u11AF","\u110B\u1175\u1107\u116E\u11AF","\u110B\u1175\u1108\u1161\u11AF","\u110B\u1175\u1109\u1161\u11BC","\u110B\u1175\u1109\u1165\u11BC","\u110B\u1175\u1109\u1173\u11AF","\u110B\u1175\u110B\u1163\u1100\u1175","\u110B\u1175\u110B\u116D\u11BC","\u110B\u1175\u110B\u116E\u11BA","\u110B\u1175\u110B\u116F\u11AF","\u110B\u1175\u110B\u1173\u11A8\u1100\u1169","\u110B\u1175\u110B\u1175\u11A8","\u110B\u1175\u110C\u1165\u11AB","\u110B\u1175\u110C\u116E\u11BC","\u110B\u1175\u1110\u1173\u11AE\u1102\u1161\u11AF","\u110B\u1175\u1110\u1173\u11AF","\u110B\u1175\u1112\u1169\u11AB","\u110B\u1175\u11AB\u1100\u1161\u11AB","\u110B\u1175\u11AB\u1100\u1167\u11A8","\u110B\u1175\u11AB\u1100\u1169\u11BC","\u110B\u1175\u11AB\u1100\u116E","\u110B\u1175\u11AB\u1100\u1173\u11AB","\u110B\u1175\u11AB\u1100\u1175","\u110B\u1175\u11AB\u1103\u1169","\u110B\u1175\u11AB\u1105\u1172","\u110B\u1175\u11AB\u1106\u116E\u11AF","\u110B\u1175\u11AB\u1109\u1162\u11BC","\u110B\u1175\u11AB\u1109\u116B","\u110B\u1175\u11AB\u110B\u1167\u11AB","\u110B\u1175\u11AB\u110B\u116F\u11AB","\u110B\u1175\u11AB\u110C\u1162","\u110B\u1175\u11AB\u110C\u1169\u11BC","\u110B\u1175\u11AB\u110E\u1165\u11AB","\u110B\u1175\u11AB\u110E\u1166","\u110B\u1175\u11AB\u1110\u1165\u1102\u1166\u11BA","\u110B\u1175\u11AB\u1112\u1161","\u110B\u1175\u11AB\u1112\u1167\u11BC","\u110B\u1175\u11AF\u1100\u1169\u11B8","\u110B\u1175\u11AF\u1100\u1175","\u110B\u1175\u11AF\u1103\u1161\u11AB","\u110B\u1175\u11AF\u1103\u1162","\u110B\u1175\u11AF\u1103\u1173\u11BC","\u110B\u1175\u11AF\u1107\u1161\u11AB","\u110B\u1175\u11AF\u1107\u1169\u11AB","\u110B\u1175\u11AF\u1107\u116E","\u110B\u1175\u11AF\u1109\u1161\u11BC","\u110B\u1175\u11AF\u1109\u1162\u11BC","\u110B\u1175\u11AF\u1109\u1169\u11AB","\u110B\u1175\u11AF\u110B\u116D\u110B\u1175\u11AF","\u110B\u1175\u11AF\u110B\u116F\u11AF","\u110B\u1175\u11AF\u110C\u1165\u11BC","\u110B\u1175\u11AF\u110C\u1169\u11BC","\u110B\u1175\u11AF\u110C\u116E\u110B\u1175\u11AF","\u110B\u1175\u11AF\u110D\u1175\u11A8","\u110B\u1175\u11AF\u110E\u1166","\u110B\u1175\u11AF\u110E\u1175","\u110B\u1175\u11AF\u1112\u1162\u11BC","\u110B\u1175\u11AF\u1112\u116C\u110B\u116D\u11BC","\u110B\u1175\u11B7\u1100\u1173\u11B7","\u110B\u1175\u11B7\u1106\u116E","\u110B\u1175\u11B8\u1103\u1162","\u110B\u1175\u11B8\u1105\u1167\u11A8","\u110B\u1175\u11B8\u1106\u1161\u11BA","\u110B\u1175\u11B8\u1109\u1161","\u110B\u1175\u11B8\u1109\u116E\u11AF","\u110B\u1175\u11B8\u1109\u1175","\u110B\u1175\u11B8\u110B\u116F\u11AB","\u110B\u1175\u11B8\u110C\u1161\u11BC","\u110B\u1175\u11B8\u1112\u1161\u11A8","\u110C\u1161\u1100\u1161\u110B\u116D\u11BC","\u110C\u1161\u1100\u1167\u11A8","\u110C\u1161\u1100\u1173\u11A8","\u110C\u1161\u1103\u1169\u11BC","\u110C\u1161\u1105\u1161\u11BC","\u110C\u1161\u1107\u116E\u1109\u1175\u11B7","\u110C\u1161\u1109\u1175\u11A8","\u110C\u1161\u1109\u1175\u11AB","\u110C\u1161\u110B\u1167\u11AB","\u110C\u1161\u110B\u116F\u11AB","\u110C\u1161\u110B\u1172\u11AF","\u110C\u1161\u110C\u1165\u11AB\u1100\u1165","\u110C\u1161\u110C\u1165\u11BC","\u110C\u1161\u110C\u1169\u11AB\u1109\u1175\u11B7","\u110C\u1161\u1111\u1161\u11AB","\u110C\u1161\u11A8\u1100\u1161","\u110C\u1161\u11A8\u1102\u1167\u11AB","\u110C\u1161\u11A8\u1109\u1165\u11BC","\u110C\u1161\u11A8\u110B\u1165\u11B8","\u110C\u1161\u11A8\u110B\u116D\u11BC","\u110C\u1161\u11A8\u110B\u1173\u11AB\u1104\u1161\u11AF","\u110C\u1161\u11A8\u1111\u116E\u11B7","\u110C\u1161\u11AB\u1103\u1175","\u110C\u1161\u11AB\u1104\u1173\u11A8","\u110C\u1161\u11AB\u110E\u1175","\u110C\u1161\u11AF\u1106\u1169\u11BA","\u110C\u1161\u11B7\u1101\u1161\u11AB","\u110C\u1161\u11B7\u1109\u116E\u1112\u1161\u11B7","\u110C\u1161\u11B7\u1109\u1175","\u110C\u1161\u11B7\u110B\u1169\u11BA","\u110C\u1161\u11B7\u110C\u1161\u1105\u1175","\u110C\u1161\u11B8\u110C\u1175","\u110C\u1161\u11BC\u1100\u116A\u11AB","\u110C\u1161\u11BC\u1100\u116E\u11AB","\u110C\u1161\u11BC\u1100\u1175\u1100\u1161\u11AB","\u110C\u1161\u11BC\u1105\u1162","\u110C\u1161\u11BC\u1105\u1168","\u110C\u1161\u11BC\u1105\u1173","\u110C\u1161\u11BC\u1106\u1161","\u110C\u1161\u11BC\u1106\u1167\u11AB","\u110C\u1161\u11BC\u1106\u1169","\u110C\u1161\u11BC\u1106\u1175","\u110C\u1161\u11BC\u1107\u1175","\u110C\u1161\u11BC\u1109\u1161","\u110C\u1161\u11BC\u1109\u1169","\u110C\u1161\u11BC\u1109\u1175\u11A8","\u110C\u1161\u11BC\u110B\u1162\u110B\u1175\u11AB","\u110C\u1161\u11BC\u110B\u1175\u11AB","\u110C\u1161\u11BC\u110C\u1165\u11B7","\u110C\u1161\u11BC\u110E\u1161","\u110C\u1161\u11BC\u1112\u1161\u11A8\u1100\u1173\u11B7","\u110C\u1162\u1102\u1173\u11BC","\u110C\u1162\u1108\u1161\u11AF\u1105\u1175","\u110C\u1162\u1109\u1161\u11AB","\u110C\u1162\u1109\u1162\u11BC","\u110C\u1162\u110C\u1161\u11A8\u1102\u1167\u11AB","\u110C\u1162\u110C\u1165\u11BC","\u110C\u1162\u110E\u1162\u1100\u1175","\u110C\u1162\u1111\u1161\u11AB","\u110C\u1162\u1112\u1161\u11A8","\u110C\u1162\u1112\u116A\u11AF\u110B\u116D\u11BC","\u110C\u1165\u1100\u1165\u11BA","\u110C\u1165\u1100\u1169\u1105\u1175","\u110C\u1165\u1100\u1169\u11BA","\u110C\u1165\u1102\u1167\u11A8","\u110C\u1165\u1105\u1165\u11AB","\u110C\u1165\u1105\u1165\u11C2\u1100\u1166","\u110C\u1165\u1107\u1165\u11AB","\u110C\u1165\u110B\u116E\u11AF","\u110C\u1165\u110C\u1165\u11AF\u1105\u1169","\u110C\u1165\u110E\u116E\u11A8","\u110C\u1165\u11A8\u1100\u1173\u11A8","\u110C\u1165\u11A8\u1103\u1161\u11BC\u1112\u1175","\u110C\u1165\u11A8\u1109\u1165\u11BC","\u110C\u1165\u11A8\u110B\u116D\u11BC","\u110C\u1165\u11A8\u110B\u1173\u11BC","\u110C\u1165\u11AB\u1100\u1162","\u110C\u1165\u11AB\u1100\u1169\u11BC","\u110C\u1165\u11AB\u1100\u1175","\u110C\u1165\u11AB\u1103\u1161\u11AF","\u110C\u1165\u11AB\u1105\u1161\u1103\u1169","\u110C\u1165\u11AB\u1106\u1161\u11BC","\u110C\u1165\u11AB\u1106\u116E\u11AB","\u110C\u1165\u11AB\u1107\u1161\u11AB","\u110C\u1165\u11AB\u1107\u116E","\u110C\u1165\u11AB\u1109\u1166","\u110C\u1165\u11AB\u1109\u1175","\u110C\u1165\u11AB\u110B\u116D\u11BC","\u110C\u1165\u11AB\u110C\u1161","\u110C\u1165\u11AB\u110C\u1162\u11BC","\u110C\u1165\u11AB\u110C\u116E","\u110C\u1165\u11AB\u110E\u1165\u11AF","\u110C\u1165\u11AB\u110E\u1166","\u110C\u1165\u11AB\u1110\u1169\u11BC","\u110C\u1165\u11AB\u1112\u1167","\u110C\u1165\u11AB\u1112\u116E","\u110C\u1165\u11AF\u1103\u1162","\u110C\u1165\u11AF\u1106\u1161\u11BC","\u110C\u1165\u11AF\u1107\u1161\u11AB","\u110C\u1165\u11AF\u110B\u1163\u11A8","\u110C\u1165\u11AF\u110E\u1161","\u110C\u1165\u11B7\u1100\u1165\u11B7","\u110C\u1165\u11B7\u1109\u116E","\u110C\u1165\u11B7\u1109\u1175\u11B7","\u110C\u1165\u11B7\u110B\u116F\u11AB","\u110C\u1165\u11B7\u110C\u1165\u11B7","\u110C\u1165\u11B7\u110E\u1161","\u110C\u1165\u11B8\u1100\u1173\u11AB","\u110C\u1165\u11B8\u1109\u1175","\u110C\u1165\u11B8\u110E\u1169\u11A8","\u110C\u1165\u11BA\u1100\u1161\u1105\u1161\u11A8","\u110C\u1165\u11BC\u1100\u1165\u110C\u1161\u11BC","\u110C\u1165\u11BC\u1103\u1169","\u110C\u1165\u11BC\u1105\u1172\u110C\u1161\u11BC","\u110C\u1165\u11BC\u1105\u1175","\u110C\u1165\u11BC\u1106\u1161\u11AF","\u110C\u1165\u11BC\u1106\u1167\u11AB","\u110C\u1165\u11BC\u1106\u116E\u11AB","\u110C\u1165\u11BC\u1107\u1161\u11AB\u1103\u1162","\u110C\u1165\u11BC\u1107\u1169","\u110C\u1165\u11BC\u1107\u116E","\u110C\u1165\u11BC\u1107\u1175","\u110C\u1165\u11BC\u1109\u1161\u11BC","\u110C\u1165\u11BC\u1109\u1165\u11BC","\u110C\u1165\u11BC\u110B\u1169","\u110C\u1165\u11BC\u110B\u116F\u11AB","\u110C\u1165\u11BC\u110C\u1161\u11BC","\u110C\u1165\u11BC\u110C\u1175","\u110C\u1165\u11BC\u110E\u1175","\u110C\u1165\u11BC\u1112\u116A\u11A8\u1112\u1175","\u110C\u1166\u1100\u1169\u11BC","\u110C\u1166\u1100\u116A\u110C\u1165\u11B7","\u110C\u1166\u1103\u1162\u1105\u1169","\u110C\u1166\u1106\u1169\u11A8","\u110C\u1166\u1107\u1161\u11AF","\u110C\u1166\u1107\u1165\u11B8","\u110C\u1166\u1109\u1161\u11BA\u1102\u1161\u11AF","\u110C\u1166\u110B\u1161\u11AB","\u110C\u1166\u110B\u1175\u11AF","\u110C\u1166\u110C\u1161\u11A8","\u110C\u1166\u110C\u116E\u1103\u1169","\u110C\u1166\u110E\u116E\u11AF","\u110C\u1166\u1111\u116E\u11B7","\u110C\u1166\u1112\u1161\u11AB","\u110C\u1169\u1100\u1161\u11A8","\u110C\u1169\u1100\u1165\u11AB","\u110C\u1169\u1100\u1173\u11B7","\u110C\u1169\u1100\u1175\u11BC","\u110C\u1169\u1106\u1167\u11BC","\u110C\u1169\u1106\u1175\u1105\u116D","\u110C\u1169\u1109\u1161\u11BC","\u110C\u1169\u1109\u1165\u11AB","\u110C\u1169\u110B\u116D\u11BC\u1112\u1175","\u110C\u1169\u110C\u1165\u11AF","\u110C\u1169\u110C\u1165\u11BC","\u110C\u1169\u110C\u1175\u11A8","\u110C\u1169\u11AB\u1103\u1162\u11BA\u1106\u1161\u11AF","\u110C\u1169\u11AB\u110C\u1162","\u110C\u1169\u11AF\u110B\u1165\u11B8","\u110C\u1169\u11AF\u110B\u1173\u11B7","\u110C\u1169\u11BC\u1100\u116D","\u110C\u1169\u11BC\u1105\u1169","\u110C\u1169\u11BC\u1105\u1172","\u110C\u1169\u11BC\u1109\u1169\u1105\u1175","\u110C\u1169\u11BC\u110B\u1165\u11B8\u110B\u116F\u11AB","\u110C\u1169\u11BC\u110C\u1169\u11BC","\u110C\u1169\u11BC\u1112\u1161\u11B8","\u110C\u116A\u1109\u1165\u11A8","\u110C\u116C\u110B\u1175\u11AB","\u110C\u116E\u1100\u116A\u11AB\u110C\u1165\u11A8","\u110C\u116E\u1105\u1173\u11B7","\u110C\u116E\u1106\u1161\u11AF","\u110C\u116E\u1106\u1165\u1102\u1175","\u110C\u116E\u1106\u1165\u11A8","\u110C\u116E\u1106\u116E\u11AB","\u110C\u116E\u1106\u1175\u11AB","\u110C\u116E\u1107\u1161\u11BC","\u110C\u116E\u1107\u1167\u11AB","\u110C\u116E\u1109\u1175\u11A8","\u110C\u116E\u110B\u1175\u11AB","\u110C\u116E\u110B\u1175\u11AF","\u110C\u116E\u110C\u1161\u11BC","\u110C\u116E\u110C\u1165\u11AB\u110C\u1161","\u110C\u116E\u1110\u1162\u11A8","\u110C\u116E\u11AB\u1107\u1175","\u110C\u116E\u11AF\u1100\u1165\u1105\u1175","\u110C\u116E\u11AF\u1100\u1175","\u110C\u116E\u11AF\u1106\u116E\u1102\u1174","\u110C\u116E\u11BC\u1100\u1161\u11AB","\u110C\u116E\u11BC\u1100\u1168\u1107\u1161\u11BC\u1109\u1169\u11BC","\u110C\u116E\u11BC\u1100\u116E\u11A8","\u110C\u116E\u11BC\u1102\u1167\u11AB","\u110C\u116E\u11BC\u1103\u1161\u11AB","\u110C\u116E\u11BC\u1103\u1169\u11A8","\u110C\u116E\u11BC\u1107\u1161\u11AB","\u110C\u116E\u11BC\u1107\u116E","\u110C\u116E\u11BC\u1109\u1166","\u110C\u116E\u11BC\u1109\u1169\u1100\u1175\u110B\u1165\u11B8","\u110C\u116E\u11BC\u1109\u116E\u11AB","\u110C\u116E\u11BC\u110B\u1161\u11BC","\u110C\u116E\u11BC\u110B\u116D","\u110C\u116E\u11BC\u1112\u1161\u11A8\u1100\u116D","\u110C\u1173\u11A8\u1109\u1165\u11A8","\u110C\u1173\u11A8\u1109\u1175","\u110C\u1173\u11AF\u1100\u1165\u110B\u116E\u11B7","\u110C\u1173\u11BC\u1100\u1161","\u110C\u1173\u11BC\u1100\u1165","\u110C\u1173\u11BC\u1100\u116F\u11AB","\u110C\u1173\u11BC\u1109\u1161\u11BC","\u110C\u1173\u11BC\u1109\u1166","\u110C\u1175\u1100\u1161\u11A8","\u110C\u1175\u1100\u1161\u11B8","\u110C\u1175\u1100\u1167\u11BC","\u110C\u1175\u1100\u1173\u11A8\u1112\u1175","\u110C\u1175\u1100\u1173\u11B7","\u110C\u1175\u1100\u1173\u11B8","\u110C\u1175\u1102\u1173\u11BC","\u110C\u1175\u1105\u1173\u11B7\u1100\u1175\u11AF","\u110C\u1175\u1105\u1175\u1109\u1161\u11AB","\u110C\u1175\u1107\u1161\u11BC","\u110C\u1175\u1107\u116E\u11BC","\u110C\u1175\u1109\u1175\u11A8","\u110C\u1175\u110B\u1167\u11A8","\u110C\u1175\u110B\u116E\u1100\u1162","\u110C\u1175\u110B\u116F\u11AB","\u110C\u1175\u110C\u1165\u11A8","\u110C\u1175\u110C\u1165\u11B7","\u110C\u1175\u110C\u1175\u11AB","\u110C\u1175\u110E\u116E\u11AF","\u110C\u1175\u11A8\u1109\u1165\u11AB","\u110C\u1175\u11A8\u110B\u1165\u11B8","\u110C\u1175\u11A8\u110B\u116F\u11AB","\u110C\u1175\u11A8\u110C\u1161\u11BC","\u110C\u1175\u11AB\u1100\u1173\u11B8","\u110C\u1175\u11AB\u1103\u1169\u11BC","\u110C\u1175\u11AB\u1105\u1169","\u110C\u1175\u11AB\u1105\u116D","\u110C\u1175\u11AB\u1105\u1175","\u110C\u1175\u11AB\u110D\u1161","\u110C\u1175\u11AB\u110E\u1161\u11AF","\u110C\u1175\u11AB\u110E\u116E\u11AF","\u110C\u1175\u11AB\u1110\u1169\u11BC","\u110C\u1175\u11AB\u1112\u1162\u11BC","\u110C\u1175\u11AF\u1106\u116E\u11AB","\u110C\u1175\u11AF\u1107\u1167\u11BC","\u110C\u1175\u11AF\u1109\u1165","\u110C\u1175\u11B7\u110C\u1161\u11A8","\u110C\u1175\u11B8\u1103\u1161\u11AB","\u110C\u1175\u11B8\u110B\u1161\u11AB","\u110C\u1175\u11B8\u110C\u116E\u11BC","\u110D\u1161\u110C\u1173\u11BC","\u110D\u1175\u1101\u1165\u1100\u1175","\u110E\u1161\u1102\u1161\u11B7","\u110E\u1161\u1105\u1161\u1105\u1175","\u110E\u1161\u1105\u1163\u11BC","\u110E\u1161\u1105\u1175\u11B7","\u110E\u1161\u1107\u1167\u11AF","\u110E\u1161\u1109\u1165\u11AB","\u110E\u1161\u110E\u1173\u11B7","\u110E\u1161\u11A8\u1100\u1161\u11A8","\u110E\u1161\u11AB\u1106\u116E\u11AF","\u110E\u1161\u11AB\u1109\u1165\u11BC","\u110E\u1161\u11B7\u1100\u1161","\u110E\u1161\u11B7\u1100\u1175\u1105\u1173\u11B7","\u110E\u1161\u11B7\u1109\u1162","\u110E\u1161\u11B7\u1109\u1165\u11A8","\u110E\u1161\u11B7\u110B\u1167","\u110E\u1161\u11B7\u110B\u116C","\u110E\u1161\u11B7\u110C\u1169","\u110E\u1161\u11BA\u110C\u1161\u11AB","\u110E\u1161\u11BC\u1100\u1161","\u110E\u1161\u11BC\u1100\u1169","\u110E\u1161\u11BC\u1100\u116E","\u110E\u1161\u11BC\u1106\u116E\u11AB","\u110E\u1161\u11BC\u1107\u1161\u11A9","\u110E\u1161\u11BC\u110C\u1161\u11A8","\u110E\u1161\u11BC\u110C\u1169","\u110E\u1162\u1102\u1165\u11AF","\u110E\u1162\u110C\u1165\u11B7","\u110E\u1162\u11A8\u1100\u1161\u1107\u1161\u11BC","\u110E\u1162\u11A8\u1107\u1161\u11BC","\u110E\u1162\u11A8\u1109\u1161\u11BC","\u110E\u1162\u11A8\u110B\u1175\u11B7","\u110E\u1162\u11B7\u1111\u1175\u110B\u1165\u11AB","\u110E\u1165\u1107\u1165\u11AF","\u110E\u1165\u110B\u1173\u11B7","\u110E\u1165\u11AB\u1100\u116E\u11A8","\u110E\u1165\u11AB\u1103\u116E\u11BC","\u110E\u1165\u11AB\u110C\u1161\u11BC","\u110E\u1165\u11AB\u110C\u1162","\u110E\u1165\u11AB\u110E\u1165\u11AB\u1112\u1175","\u110E\u1165\u11AF\u1103\u1169","\u110E\u1165\u11AF\u110C\u1165\u1112\u1175","\u110E\u1165\u11AF\u1112\u1161\u11A8","\u110E\u1165\u11BA\u1102\u1161\u11AF","\u110E\u1165\u11BA\u110D\u1162","\u110E\u1165\u11BC\u1102\u1167\u11AB","\u110E\u1165\u11BC\u1107\u1161\u110C\u1175","\u110E\u1165\u11BC\u1109\u1169","\u110E\u1165\u11BC\u110E\u116E\u11AB","\u110E\u1166\u1100\u1168","\u110E\u1166\u1105\u1167\u11A8","\u110E\u1166\u110B\u1169\u11AB","\u110E\u1166\u110B\u1172\u11A8","\u110E\u1166\u110C\u116E\u11BC","\u110E\u1166\u1112\u1165\u11B7","\u110E\u1169\u1103\u1173\u11BC\u1112\u1161\u11A8\u1109\u1162\u11BC","\u110E\u1169\u1107\u1161\u11AB","\u110E\u1169\u1107\u1161\u11B8","\u110E\u1169\u1109\u1161\u11BC\u1112\u116A","\u110E\u1169\u1109\u116E\u11AB","\u110E\u1169\u110B\u1167\u1105\u1173\u11B7","\u110E\u1169\u110B\u116F\u11AB","\u110E\u1169\u110C\u1165\u1102\u1167\u11A8","\u110E\u1169\u110C\u1165\u11B7","\u110E\u1169\u110E\u1165\u11BC","\u110E\u1169\u110F\u1169\u11AF\u1105\u1175\u11BA","\u110E\u1169\u11BA\u1107\u116E\u11AF","\u110E\u1169\u11BC\u1100\u1161\u11A8","\u110E\u1169\u11BC\u1105\u1175","\u110E\u1169\u11BC\u110C\u1161\u11BC","\u110E\u116A\u11AF\u110B\u1167\u11BC","\u110E\u116C\u1100\u1173\u11AB","\u110E\u116C\u1109\u1161\u11BC","\u110E\u116C\u1109\u1165\u11AB","\u110E\u116C\u1109\u1175\u11AB","\u110E\u116C\u110B\u1161\u11A8","\u110E\u116C\u110C\u1169\u11BC","\u110E\u116E\u1109\u1165\u11A8","\u110E\u116E\u110B\u1165\u11A8","\u110E\u116E\u110C\u1175\u11AB","\u110E\u116E\u110E\u1165\u11AB","\u110E\u116E\u110E\u1173\u11A8","\u110E\u116E\u11A8\u1100\u116E","\u110E\u116E\u11A8\u1109\u1169","\u110E\u116E\u11A8\u110C\u1166","\u110E\u116E\u11A8\u1112\u1161","\u110E\u116E\u11AF\u1100\u1173\u11AB","\u110E\u116E\u11AF\u1107\u1161\u11AF","\u110E\u116E\u11AF\u1109\u1161\u11AB","\u110E\u116E\u11AF\u1109\u1175\u11AB","\u110E\u116E\u11AF\u110B\u1167\u11AB","\u110E\u116E\u11AF\u110B\u1175\u11B8","\u110E\u116E\u11AF\u110C\u1161\u11BC","\u110E\u116E\u11AF\u1111\u1161\u11AB","\u110E\u116E\u11BC\u1100\u1167\u11A8","\u110E\u116E\u11BC\u1100\u1169","\u110E\u116E\u11BC\u1103\u1169\u11AF","\u110E\u116E\u11BC\u1107\u116E\u11AB\u1112\u1175","\u110E\u116E\u11BC\u110E\u1165\u11BC\u1103\u1169","\u110E\u1171\u110B\u1165\u11B8","\u110E\u1171\u110C\u1175\u11A8","\u110E\u1171\u1112\u1163\u11BC","\u110E\u1175\u110B\u1163\u11A8","\u110E\u1175\u11AB\u1100\u116E","\u110E\u1175\u11AB\u110E\u1165\u11A8","\u110E\u1175\u11AF\u1109\u1175\u11B8","\u110E\u1175\u11AF\u110B\u116F\u11AF","\u110E\u1175\u11AF\u1111\u1161\u11AB","\u110E\u1175\u11B7\u1103\u1162","\u110E\u1175\u11B7\u1106\u116E\u11A8","\u110E\u1175\u11B7\u1109\u1175\u11AF","\u110E\u1175\u11BA\u1109\u1169\u11AF","\u110E\u1175\u11BC\u110E\u1161\u11AB","\u110F\u1161\u1106\u1166\u1105\u1161","\u110F\u1161\u110B\u116E\u11AB\u1110\u1165","\u110F\u1161\u11AF\u1100\u116E\u11A8\u1109\u116E","\u110F\u1162\u1105\u1175\u11A8\u1110\u1165","\u110F\u1162\u11B7\u1111\u1165\u1109\u1173","\u110F\u1162\u11B7\u1111\u1166\u110B\u1175\u11AB","\u110F\u1165\u1110\u1173\u11AB","\u110F\u1165\u11AB\u1103\u1175\u1109\u1167\u11AB","\u110F\u1165\u11AF\u1105\u1165","\u110F\u1165\u11B7\u1111\u1172\u1110\u1165","\u110F\u1169\u1101\u1175\u1105\u1175","\u110F\u1169\u1106\u1175\u1103\u1175","\u110F\u1169\u11AB\u1109\u1165\u1110\u1173","\u110F\u1169\u11AF\u1105\u1161","\u110F\u1169\u11B7\u1111\u1173\u11AF\u1105\u1166\u11A8\u1109\u1173","\u110F\u1169\u11BC\u1102\u1161\u1106\u116E\u11AF","\u110F\u116B\u1100\u1161\u11B7","\u110F\u116E\u1103\u1166\u1110\u1161","\u110F\u1173\u1105\u1175\u11B7","\u110F\u1173\u11AB\u1100\u1175\u11AF","\u110F\u1173\u11AB\u1104\u1161\u11AF","\u110F\u1173\u11AB\u1109\u1169\u1105\u1175","\u110F\u1173\u11AB\u110B\u1161\u1103\u1173\u11AF","\u110F\u1173\u11AB\u110B\u1165\u1106\u1165\u1102\u1175","\u110F\u1173\u11AB\u110B\u1175\u11AF","\u110F\u1173\u11AB\u110C\u1165\u11AF","\u110F\u1173\u11AF\u1105\u1162\u1109\u1175\u11A8","\u110F\u1173\u11AF\u1105\u1165\u11B8","\u110F\u1175\u11AF\u1105\u1169","\u1110\u1161\u110B\u1175\u11B8","\u1110\u1161\u110C\u1161\u1100\u1175","\u1110\u1161\u11A8\u1100\u116E","\u1110\u1161\u11A8\u110C\u1161","\u1110\u1161\u11AB\u1109\u1162\u11BC","\u1110\u1162\u1100\u116F\u11AB\u1103\u1169","\u1110\u1162\u110B\u1163\u11BC","\u1110\u1162\u1111\u116E\u11BC","\u1110\u1162\u11A8\u1109\u1175","\u1110\u1162\u11AF\u1105\u1165\u11AB\u1110\u1173","\u1110\u1165\u1102\u1165\u11AF","\u1110\u1165\u1106\u1175\u1102\u1165\u11AF","\u1110\u1166\u1102\u1175\u1109\u1173","\u1110\u1166\u1109\u1173\u1110\u1173","\u1110\u1166\u110B\u1175\u1107\u1173\u11AF","\u1110\u1166\u11AF\u1105\u1166\u1107\u1175\u110C\u1165\u11AB","\u1110\u1169\u1105\u1169\u11AB","\u1110\u1169\u1106\u1161\u1110\u1169","\u1110\u1169\u110B\u116D\u110B\u1175\u11AF","\u1110\u1169\u11BC\u1100\u1168","\u1110\u1169\u11BC\u1100\u116A","\u1110\u1169\u11BC\u1105\u1169","\u1110\u1169\u11BC\u1109\u1175\u11AB","\u1110\u1169\u11BC\u110B\u1167\u11A8","\u1110\u1169\u11BC\u110B\u1175\u11AF","\u1110\u1169\u11BC\u110C\u1161\u11BC","\u1110\u1169\u11BC\u110C\u1166","\u1110\u1169\u11BC\u110C\u1173\u11BC","\u1110\u1169\u11BC\u1112\u1161\u11B8","\u1110\u1169\u11BC\u1112\u116A","\u1110\u116C\u1100\u1173\u11AB","\u1110\u116C\u110B\u116F\u11AB","\u1110\u116C\u110C\u1175\u11A8\u1100\u1173\u11B7","\u1110\u1171\u1100\u1175\u11B7","\u1110\u1173\u1105\u1165\u11A8","\u1110\u1173\u11A8\u1100\u1173\u11B8","\u1110\u1173\u11A8\u1107\u1167\u11AF","\u1110\u1173\u11A8\u1109\u1165\u11BC","\u1110\u1173\u11A8\u1109\u116E","\u1110\u1173\u11A8\u110C\u1175\u11BC","\u1110\u1173\u11A8\u1112\u1175","\u1110\u1173\u11AB\u1110\u1173\u11AB\u1112\u1175","\u1110\u1175\u1109\u1167\u110E\u1173","\u1111\u1161\u1105\u1161\u11AB\u1109\u1162\u11A8","\u1111\u1161\u110B\u1175\u11AF","\u1111\u1161\u110E\u116E\u11AF\u1109\u1169","\u1111\u1161\u11AB\u1100\u1167\u11AF","\u1111\u1161\u11AB\u1103\u1161\u11AB","\u1111\u1161\u11AB\u1106\u1162","\u1111\u1161\u11AB\u1109\u1161","\u1111\u1161\u11AF\u1109\u1175\u11B8","\u1111\u1161\u11AF\u110B\u116F\u11AF","\u1111\u1161\u11B8\u1109\u1169\u11BC","\u1111\u1162\u1109\u1167\u11AB","\u1111\u1162\u11A8\u1109\u1173","\u1111\u1162\u11A8\u1109\u1175\u1106\u1175\u11AF\u1105\u1175","\u1111\u1162\u11AB\u1110\u1175","\u1111\u1165\u1109\u1166\u11AB\u1110\u1173","\u1111\u1166\u110B\u1175\u11AB\u1110\u1173","\u1111\u1167\u11AB\u1100\u1167\u11AB","\u1111\u1167\u11AB\u110B\u1174","\u1111\u1167\u11AB\u110C\u1175","\u1111\u1167\u11AB\u1112\u1175","\u1111\u1167\u11BC\u1100\u1161","\u1111\u1167\u11BC\u1100\u1172\u11AB","\u1111\u1167\u11BC\u1109\u1162\u11BC","\u1111\u1167\u11BC\u1109\u1169","\u1111\u1167\u11BC\u110B\u1163\u11BC","\u1111\u1167\u11BC\u110B\u1175\u11AF","\u1111\u1167\u11BC\u1112\u116A","\u1111\u1169\u1109\u1173\u1110\u1165","\u1111\u1169\u110B\u1175\u11AB\u1110\u1173","\u1111\u1169\u110C\u1161\u11BC","\u1111\u1169\u1112\u1161\u11B7","\u1111\u116D\u1106\u1167\u11AB","\u1111\u116D\u110C\u1165\u11BC","\u1111\u116D\u110C\u116E\u11AB","\u1111\u116D\u1112\u1167\u11AB","\u1111\u116E\u11B7\u1106\u1169\u11A8","\u1111\u116E\u11B7\u110C\u1175\u11AF","\u1111\u116E\u11BC\u1100\u1167\u11BC","\u1111\u116E\u11BC\u1109\u1169\u11A8","\u1111\u116E\u11BC\u1109\u1173\u11B8","\u1111\u1173\u1105\u1161\u11BC\u1109\u1173","\u1111\u1173\u1105\u1175\u11AB\u1110\u1165","\u1111\u1173\u11AF\u1105\u1161\u1109\u1173\u1110\u1175\u11A8","\u1111\u1175\u1100\u1169\u11AB","\u1111\u1175\u1106\u1161\u11BC","\u1111\u1175\u110B\u1161\u1102\u1169","\u1111\u1175\u11AF\u1105\u1173\u11B7","\u1111\u1175\u11AF\u1109\u116E","\u1111\u1175\u11AF\u110B\u116D","\u1111\u1175\u11AF\u110C\u1161","\u1111\u1175\u11AF\u1110\u1169\u11BC","\u1111\u1175\u11BC\u1100\u1168","\u1112\u1161\u1102\u1173\u1102\u1175\u11B7","\u1112\u1161\u1102\u1173\u11AF","\u1112\u1161\u1103\u1173\u110B\u1170\u110B\u1165","\u1112\u1161\u1105\u116E\u11BA\u1107\u1161\u11B7","\u1112\u1161\u1107\u1161\u11AB\u1100\u1175","\u1112\u1161\u1109\u116E\u11A8\u110C\u1175\u11B8","\u1112\u1161\u1109\u116E\u11AB","\u1112\u1161\u110B\u1167\u1110\u1173\u11AB","\u1112\u1161\u110C\u1175\u1106\u1161\u11AB","\u1112\u1161\u110E\u1165\u11AB","\u1112\u1161\u1111\u116E\u11B7","\u1112\u1161\u1111\u1175\u11AF","\u1112\u1161\u11A8\u1100\u116A","\u1112\u1161\u11A8\u1100\u116D","\u1112\u1161\u11A8\u1100\u1173\u11B8","\u1112\u1161\u11A8\u1100\u1175","\u1112\u1161\u11A8\u1102\u1167\u11AB","\u1112\u1161\u11A8\u1105\u1167\u11A8","\u1112\u1161\u11A8\u1107\u1165\u11AB","\u1112\u1161\u11A8\u1107\u116E\u1106\u1169","\u1112\u1161\u11A8\u1107\u1175","\u1112\u1161\u11A8\u1109\u1162\u11BC","\u1112\u1161\u11A8\u1109\u116E\u11AF","\u1112\u1161\u11A8\u1109\u1173\u11B8","\u1112\u1161\u11A8\u110B\u116D\u11BC\u1111\u116E\u11B7","\u1112\u1161\u11A8\u110B\u116F\u11AB","\u1112\u1161\u11A8\u110B\u1171","\u1112\u1161\u11A8\u110C\u1161","\u1112\u1161\u11A8\u110C\u1165\u11B7","\u1112\u1161\u11AB\u1100\u1168","\u1112\u1161\u11AB\u1100\u1173\u11AF","\u1112\u1161\u11AB\u1101\u1165\u1107\u1165\u11AB\u110B\u1166","\u1112\u1161\u11AB\u1102\u1161\u11BD","\u1112\u1161\u11AB\u1102\u116E\u11AB","\u1112\u1161\u11AB\u1103\u1169\u11BC\u110B\u1161\u11AB","\u1112\u1161\u11AB\u1104\u1162","\u1112\u1161\u11AB\u1105\u1161\u1109\u1161\u11AB","\u1112\u1161\u11AB\u1106\u1161\u1103\u1175","\u1112\u1161\u11AB\u1106\u116E\u11AB","\u1112\u1161\u11AB\u1107\u1165\u11AB","\u1112\u1161\u11AB\u1107\u1169\u11A8","\u1112\u1161\u11AB\u1109\u1175\u11A8","\u1112\u1161\u11AB\u110B\u1167\u1105\u1173\u11B7","\u1112\u1161\u11AB\u110D\u1169\u11A8","\u1112\u1161\u11AF\u1106\u1165\u1102\u1175","\u1112\u1161\u11AF\u110B\u1161\u1107\u1165\u110C\u1175","\u1112\u1161\u11AF\u110B\u1175\u11AB","\u1112\u1161\u11B7\u1101\u1166","\u1112\u1161\u11B7\u1107\u116E\u1105\u1169","\u1112\u1161\u11B8\u1100\u1167\u11A8","\u1112\u1161\u11B8\u1105\u1175\u110C\u1165\u11A8","\u1112\u1161\u11BC\u1100\u1169\u11BC","\u1112\u1161\u11BC\u1100\u116E","\u1112\u1161\u11BC\u1109\u1161\u11BC","\u1112\u1161\u11BC\u110B\u1174","\u1112\u1162\u1100\u1167\u11AF","\u1112\u1162\u1100\u116E\u11AB","\u1112\u1162\u1103\u1161\u11B8","\u1112\u1162\u1103\u1161\u11BC","\u1112\u1162\u1106\u116E\u11AF","\u1112\u1162\u1109\u1165\u11A8","\u1112\u1162\u1109\u1165\u11AF","\u1112\u1162\u1109\u116E\u110B\u116D\u11A8\u110C\u1161\u11BC","\u1112\u1162\u110B\u1161\u11AB","\u1112\u1162\u11A8\u1109\u1175\u11B7","\u1112\u1162\u11AB\u1103\u1173\u1107\u1162\u11A8","\u1112\u1162\u11B7\u1107\u1165\u1100\u1165","\u1112\u1162\u11BA\u1107\u1167\u11C0","\u1112\u1162\u11BA\u1109\u1161\u11AF","\u1112\u1162\u11BC\u1103\u1169\u11BC","\u1112\u1162\u11BC\u1107\u1169\u11A8","\u1112\u1162\u11BC\u1109\u1161","\u1112\u1162\u11BC\u110B\u116E\u11AB","\u1112\u1162\u11BC\u110B\u1171","\u1112\u1163\u11BC\u1100\u1175","\u1112\u1163\u11BC\u1109\u1161\u11BC","\u1112\u1163\u11BC\u1109\u116E","\u1112\u1165\u1105\u1161\u11A8","\u1112\u1165\u110B\u116D\u11BC","\u1112\u1166\u11AF\u1100\u1175","\u1112\u1167\u11AB\u1100\u116A\u11AB","\u1112\u1167\u11AB\u1100\u1173\u11B7","\u1112\u1167\u11AB\u1103\u1162","\u1112\u1167\u11AB\u1109\u1161\u11BC","\u1112\u1167\u11AB\u1109\u1175\u11AF","\u1112\u1167\u11AB\u110C\u1161\u11BC","\u1112\u1167\u11AB\u110C\u1162","\u1112\u1167\u11AB\u110C\u1175","\u1112\u1167\u11AF\u110B\u1162\u11A8","\u1112\u1167\u11B8\u1105\u1167\u11A8","\u1112\u1167\u11BC\u1107\u116E","\u1112\u1167\u11BC\u1109\u1161","\u1112\u1167\u11BC\u1109\u116E","\u1112\u1167\u11BC\u1109\u1175\u11A8","\u1112\u1167\u11BC\u110C\u1166","\u1112\u1167\u11BC\u1110\u1162","\u1112\u1167\u11BC\u1111\u1167\u11AB","\u1112\u1168\u1110\u1162\u11A8","\u1112\u1169\u1100\u1175\u1109\u1175\u11B7","\u1112\u1169\u1102\u1161\u11B7","\u1112\u1169\u1105\u1161\u11BC\u110B\u1175","\u1112\u1169\u1107\u1161\u11A8","\u1112\u1169\u1110\u1166\u11AF","\u1112\u1169\u1112\u1173\u11B8","\u1112\u1169\u11A8\u1109\u1175","\u1112\u1169\u11AF\u1105\u1169","\u1112\u1169\u11B7\u1111\u1166\u110B\u1175\u110C\u1175","\u1112\u1169\u11BC\u1107\u1169","\u1112\u1169\u11BC\u1109\u116E","\u1112\u1169\u11BC\u110E\u1161","\u1112\u116A\u1106\u1167\u11AB","\u1112\u116A\u1107\u116E\u11AB","\u1112\u116A\u1109\u1161\u11AF","\u1112\u116A\u110B\u116D\u110B\u1175\u11AF","\u1112\u116A\u110C\u1161\u11BC","\u1112\u116A\u1112\u1161\u11A8","\u1112\u116A\u11A8\u1107\u1169","\u1112\u116A\u11A8\u110B\u1175\u11AB","\u1112\u116A\u11A8\u110C\u1161\u11BC","\u1112\u116A\u11A8\u110C\u1165\u11BC","\u1112\u116A\u11AB\u1100\u1161\u11B8","\u1112\u116A\u11AB\u1100\u1167\u11BC","\u1112\u116A\u11AB\u110B\u1167\u11BC","\u1112\u116A\u11AB\u110B\u1172\u11AF","\u1112\u116A\u11AB\u110C\u1161","\u1112\u116A\u11AF\u1100\u1175","\u1112\u116A\u11AF\u1103\u1169\u11BC","\u1112\u116A\u11AF\u1107\u1161\u11AF\u1112\u1175","\u1112\u116A\u11AF\u110B\u116D\u11BC","\u1112\u116A\u11AF\u110D\u1161\u11A8","\u1112\u116C\u1100\u1167\u11AB","\u1112\u116C\u1100\u116A\u11AB","\u1112\u116C\u1107\u1169\u11A8","\u1112\u116C\u1109\u1162\u11A8","\u1112\u116C\u110B\u116F\u11AB","\u1112\u116C\u110C\u1161\u11BC","\u1112\u116C\u110C\u1165\u11AB","\u1112\u116C\u11BA\u1109\u116E","\u1112\u116C\u11BC\u1103\u1161\u11AB\u1107\u1169\u1103\u1169","\u1112\u116D\u110B\u1172\u11AF\u110C\u1165\u11A8","\u1112\u116E\u1107\u1161\u11AB","\u1112\u116E\u110E\u116E\u11BA\u1100\u1161\u1105\u116E","\u1112\u116E\u11AB\u1105\u1167\u11AB","\u1112\u116F\u11AF\u110A\u1175\u11AB","\u1112\u1172\u1109\u1175\u11A8","\u1112\u1172\u110B\u1175\u11AF","\u1112\u1172\u11BC\u1102\u1162","\u1112\u1173\u1105\u1173\u11B7","\u1112\u1173\u11A8\u1107\u1162\u11A8","\u1112\u1173\u11A8\u110B\u1175\u11AB","\u1112\u1173\u11AB\u110C\u1165\u11A8","\u1112\u1173\u11AB\u1112\u1175","\u1112\u1173\u11BC\u1106\u1175","\u1112\u1173\u11BC\u1107\u116E\u11AB","\u1112\u1174\u1100\u1169\u11A8","\u1112\u1174\u1106\u1161\u11BC","\u1112\u1174\u1109\u1162\u11BC","\u1112\u1174\u11AB\u1109\u1162\u11A8","\u1112\u1175\u11B7\u1101\u1165\u11BA"]'), Us = JSON.parse('["abaisser","abandon","abdiquer","abeille","abolir","aborder","aboutir","aboyer","abrasif","abreuver","abriter","abroger","abrupt","absence","absolu","absurde","abusif","abyssal","acade\u0301mie","acajou","acarien","accabler","accepter","acclamer","accolade","accroche","accuser","acerbe","achat","acheter","aciduler","acier","acompte","acque\u0301rir","acronyme","acteur","actif","actuel","adepte","ade\u0301quat","adhe\u0301sif","adjectif","adjuger","admettre","admirer","adopter","adorer","adoucir","adresse","adroit","adulte","adverbe","ae\u0301rer","ae\u0301ronef","affaire","affecter","affiche","affreux","affubler","agacer","agencer","agile","agiter","agrafer","agre\u0301able","agrume","aider","aiguille","ailier","aimable","aisance","ajouter","ajuster","alarmer","alchimie","alerte","alge\u0300bre","algue","alie\u0301ner","aliment","alle\u0301ger","alliage","allouer","allumer","alourdir","alpaga","altesse","alve\u0301ole","amateur","ambigu","ambre","ame\u0301nager","amertume","amidon","amiral","amorcer","amour","amovible","amphibie","ampleur","amusant","analyse","anaphore","anarchie","anatomie","ancien","ane\u0301antir","angle","angoisse","anguleux","animal","annexer","annonce","annuel","anodin","anomalie","anonyme","anormal","antenne","antidote","anxieux","apaiser","ape\u0301ritif","aplanir","apologie","appareil","appeler","apporter","appuyer","aquarium","aqueduc","arbitre","arbuste","ardeur","ardoise","argent","arlequin","armature","armement","armoire","armure","arpenter","arracher","arriver","arroser","arsenic","arte\u0301riel","article","aspect","asphalte","aspirer","assaut","asservir","assiette","associer","assurer","asticot","astre","astuce","atelier","atome","atrium","atroce","attaque","attentif","attirer","attraper","aubaine","auberge","audace","audible","augurer","aurore","automne","autruche","avaler","avancer","avarice","avenir","averse","aveugle","aviateur","avide","avion","aviser","avoine","avouer","avril","axial","axiome","badge","bafouer","bagage","baguette","baignade","balancer","balcon","baleine","balisage","bambin","bancaire","bandage","banlieue","bannie\u0300re","banquier","barbier","baril","baron","barque","barrage","bassin","bastion","bataille","bateau","batterie","baudrier","bavarder","belette","be\u0301lier","belote","be\u0301ne\u0301fice","berceau","berger","berline","bermuda","besace","besogne","be\u0301tail","beurre","biberon","bicycle","bidule","bijou","bilan","bilingue","billard","binaire","biologie","biopsie","biotype","biscuit","bison","bistouri","bitume","bizarre","blafard","blague","blanchir","blessant","blinder","blond","bloquer","blouson","bobard","bobine","boire","boiser","bolide","bonbon","bondir","bonheur","bonifier","bonus","bordure","borne","botte","boucle","boueux","bougie","boulon","bouquin","bourse","boussole","boutique","boxeur","branche","brasier","brave","brebis","bre\u0300che","breuvage","bricoler","brigade","brillant","brioche","brique","brochure","broder","bronzer","brousse","broyeur","brume","brusque","brutal","bruyant","buffle","buisson","bulletin","bureau","burin","bustier","butiner","butoir","buvable","buvette","cabanon","cabine","cachette","cadeau","cadre","cafe\u0301ine","caillou","caisson","calculer","calepin","calibre","calmer","calomnie","calvaire","camarade","came\u0301ra","camion","campagne","canal","caneton","canon","cantine","canular","capable","caporal","caprice","capsule","capter","capuche","carabine","carbone","caresser","caribou","carnage","carotte","carreau","carton","cascade","casier","casque","cassure","causer","caution","cavalier","caverne","caviar","ce\u0301dille","ceinture","ce\u0301leste","cellule","cendrier","censurer","central","cercle","ce\u0301re\u0301bral","cerise","cerner","cerveau","cesser","chagrin","chaise","chaleur","chambre","chance","chapitre","charbon","chasseur","chaton","chausson","chavirer","chemise","chenille","che\u0301quier","chercher","cheval","chien","chiffre","chignon","chime\u0300re","chiot","chlorure","chocolat","choisir","chose","chouette","chrome","chute","cigare","cigogne","cimenter","cine\u0301ma","cintrer","circuler","cirer","cirque","citerne","citoyen","citron","civil","clairon","clameur","claquer","classe","clavier","client","cligner","climat","clivage","cloche","clonage","cloporte","cobalt","cobra","cocasse","cocotier","coder","codifier","coffre","cogner","cohe\u0301sion","coiffer","coincer","cole\u0300re","colibri","colline","colmater","colonel","combat","come\u0301die","commande","compact","concert","conduire","confier","congeler","connoter","consonne","contact","convexe","copain","copie","corail","corbeau","cordage","corniche","corpus","correct","corte\u0300ge","cosmique","costume","coton","coude","coupure","courage","couteau","couvrir","coyote","crabe","crainte","cravate","crayon","cre\u0301ature","cre\u0301diter","cre\u0301meux","creuser","crevette","cribler","crier","cristal","crite\u0300re","croire","croquer","crotale","crucial","cruel","crypter","cubique","cueillir","cuille\u0300re","cuisine","cuivre","culminer","cultiver","cumuler","cupide","curatif","curseur","cyanure","cycle","cylindre","cynique","daigner","damier","danger","danseur","dauphin","de\u0301battre","de\u0301biter","de\u0301border","de\u0301brider","de\u0301butant","de\u0301caler","de\u0301cembre","de\u0301chirer","de\u0301cider","de\u0301clarer","de\u0301corer","de\u0301crire","de\u0301cupler","de\u0301dale","de\u0301ductif","de\u0301esse","de\u0301fensif","de\u0301filer","de\u0301frayer","de\u0301gager","de\u0301givrer","de\u0301glutir","de\u0301grafer","de\u0301jeuner","de\u0301lice","de\u0301loger","demander","demeurer","de\u0301molir","de\u0301nicher","de\u0301nouer","dentelle","de\u0301nuder","de\u0301part","de\u0301penser","de\u0301phaser","de\u0301placer","de\u0301poser","de\u0301ranger","de\u0301rober","de\u0301sastre","descente","de\u0301sert","de\u0301signer","de\u0301sobe\u0301ir","dessiner","destrier","de\u0301tacher","de\u0301tester","de\u0301tourer","de\u0301tresse","devancer","devenir","deviner","devoir","diable","dialogue","diamant","dicter","diffe\u0301rer","dige\u0301rer","digital","digne","diluer","dimanche","diminuer","dioxyde","directif","diriger","discuter","disposer","dissiper","distance","divertir","diviser","docile","docteur","dogme","doigt","domaine","domicile","dompter","donateur","donjon","donner","dopamine","dortoir","dorure","dosage","doseur","dossier","dotation","douanier","double","douceur","douter","doyen","dragon","draper","dresser","dribbler","droiture","duperie","duplexe","durable","durcir","dynastie","e\u0301blouir","e\u0301carter","e\u0301charpe","e\u0301chelle","e\u0301clairer","e\u0301clipse","e\u0301clore","e\u0301cluse","e\u0301cole","e\u0301conomie","e\u0301corce","e\u0301couter","e\u0301craser","e\u0301cre\u0301mer","e\u0301crivain","e\u0301crou","e\u0301cume","e\u0301cureuil","e\u0301difier","e\u0301duquer","effacer","effectif","effigie","effort","effrayer","effusion","e\u0301galiser","e\u0301garer","e\u0301jecter","e\u0301laborer","e\u0301largir","e\u0301lectron","e\u0301le\u0301gant","e\u0301le\u0301phant","e\u0301le\u0300ve","e\u0301ligible","e\u0301litisme","e\u0301loge","e\u0301lucider","e\u0301luder","emballer","embellir","embryon","e\u0301meraude","e\u0301mission","emmener","e\u0301motion","e\u0301mouvoir","empereur","employer","emporter","emprise","e\u0301mulsion","encadrer","enche\u0300re","enclave","encoche","endiguer","endosser","endroit","enduire","e\u0301nergie","enfance","enfermer","enfouir","engager","engin","englober","e\u0301nigme","enjamber","enjeu","enlever","ennemi","ennuyeux","enrichir","enrobage","enseigne","entasser","entendre","entier","entourer","entraver","e\u0301nume\u0301rer","envahir","enviable","envoyer","enzyme","e\u0301olien","e\u0301paissir","e\u0301pargne","e\u0301patant","e\u0301paule","e\u0301picerie","e\u0301pide\u0301mie","e\u0301pier","e\u0301pilogue","e\u0301pine","e\u0301pisode","e\u0301pitaphe","e\u0301poque","e\u0301preuve","e\u0301prouver","e\u0301puisant","e\u0301querre","e\u0301quipe","e\u0301riger","e\u0301rosion","erreur","e\u0301ruption","escalier","espadon","espe\u0300ce","espie\u0300gle","espoir","esprit","esquiver","essayer","essence","essieu","essorer","estime","estomac","estrade","e\u0301tage\u0300re","e\u0301taler","e\u0301tanche","e\u0301tatique","e\u0301teindre","e\u0301tendoir","e\u0301ternel","e\u0301thanol","e\u0301thique","ethnie","e\u0301tirer","e\u0301toffer","e\u0301toile","e\u0301tonnant","e\u0301tourdir","e\u0301trange","e\u0301troit","e\u0301tude","euphorie","e\u0301valuer","e\u0301vasion","e\u0301ventail","e\u0301vidence","e\u0301viter","e\u0301volutif","e\u0301voquer","exact","exage\u0301rer","exaucer","exceller","excitant","exclusif","excuse","exe\u0301cuter","exemple","exercer","exhaler","exhorter","exigence","exiler","exister","exotique","expe\u0301dier","explorer","exposer","exprimer","exquis","extensif","extraire","exulter","fable","fabuleux","facette","facile","facture","faiblir","falaise","fameux","famille","farceur","farfelu","farine","farouche","fasciner","fatal","fatigue","faucon","fautif","faveur","favori","fe\u0301brile","fe\u0301conder","fe\u0301de\u0301rer","fe\u0301lin","femme","fe\u0301mur","fendoir","fe\u0301odal","fermer","fe\u0301roce","ferveur","festival","feuille","feutre","fe\u0301vrier","fiasco","ficeler","fictif","fide\u0300le","figure","filature","filetage","filie\u0300re","filleul","filmer","filou","filtrer","financer","finir","fiole","firme","fissure","fixer","flairer","flamme","flasque","flatteur","fle\u0301au","fle\u0300che","fleur","flexion","flocon","flore","fluctuer","fluide","fluvial","folie","fonderie","fongible","fontaine","forcer","forgeron","formuler","fortune","fossile","foudre","fouge\u0300re","fouiller","foulure","fourmi","fragile","fraise","franchir","frapper","frayeur","fre\u0301gate","freiner","frelon","fre\u0301mir","fre\u0301ne\u0301sie","fre\u0300re","friable","friction","frisson","frivole","froid","fromage","frontal","frotter","fruit","fugitif","fuite","fureur","furieux","furtif","fusion","futur","gagner","galaxie","galerie","gambader","garantir","gardien","garnir","garrigue","gazelle","gazon","ge\u0301ant","ge\u0301latine","ge\u0301lule","gendarme","ge\u0301ne\u0301ral","ge\u0301nie","genou","gentil","ge\u0301ologie","ge\u0301ome\u0300tre","ge\u0301ranium","germe","gestuel","geyser","gibier","gicler","girafe","givre","glace","glaive","glisser","globe","gloire","glorieux","golfeur","gomme","gonfler","gorge","gorille","goudron","gouffre","goulot","goupille","gourmand","goutte","graduel","graffiti","graine","grand","grappin","gratuit","gravir","grenat","griffure","griller","grimper","grogner","gronder","grotte","groupe","gruger","grutier","gruye\u0300re","gue\u0301pard","guerrier","guide","guimauve","guitare","gustatif","gymnaste","gyrostat","habitude","hachoir","halte","hameau","hangar","hanneton","haricot","harmonie","harpon","hasard","he\u0301lium","he\u0301matome","herbe","he\u0301risson","hermine","he\u0301ron","he\u0301siter","heureux","hiberner","hibou","hilarant","histoire","hiver","homard","hommage","homoge\u0300ne","honneur","honorer","honteux","horde","horizon","horloge","hormone","horrible","houleux","housse","hublot","huileux","humain","humble","humide","humour","hurler","hydromel","hygie\u0300ne","hymne","hypnose","idylle","ignorer","iguane","illicite","illusion","image","imbiber","imiter","immense","immobile","immuable","impact","impe\u0301rial","implorer","imposer","imprimer","imputer","incarner","incendie","incident","incliner","incolore","indexer","indice","inductif","ine\u0301dit","ineptie","inexact","infini","infliger","informer","infusion","inge\u0301rer","inhaler","inhiber","injecter","injure","innocent","inoculer","inonder","inscrire","insecte","insigne","insolite","inspirer","instinct","insulter","intact","intense","intime","intrigue","intuitif","inutile","invasion","inventer","inviter","invoquer","ironique","irradier","irre\u0301el","irriter","isoler","ivoire","ivresse","jaguar","jaillir","jambe","janvier","jardin","jauger","jaune","javelot","jetable","jeton","jeudi","jeunesse","joindre","joncher","jongler","joueur","jouissif","journal","jovial","joyau","joyeux","jubiler","jugement","junior","jupon","juriste","justice","juteux","juve\u0301nile","kayak","kimono","kiosque","label","labial","labourer","lace\u0301rer","lactose","lagune","laine","laisser","laitier","lambeau","lamelle","lampe","lanceur","langage","lanterne","lapin","largeur","larme","laurier","lavabo","lavoir","lecture","le\u0301gal","le\u0301ger","le\u0301gume","lessive","lettre","levier","lexique","le\u0301zard","liasse","libe\u0301rer","libre","licence","licorne","lie\u0300ge","lie\u0300vre","ligature","ligoter","ligue","limer","limite","limonade","limpide","line\u0301aire","lingot","lionceau","liquide","lisie\u0300re","lister","lithium","litige","littoral","livreur","logique","lointain","loisir","lombric","loterie","louer","lourd","loutre","louve","loyal","lubie","lucide","lucratif","lueur","lugubre","luisant","lumie\u0300re","lunaire","lundi","luron","lutter","luxueux","machine","magasin","magenta","magique","maigre","maillon","maintien","mairie","maison","majorer","malaxer","male\u0301fice","malheur","malice","mallette","mammouth","mandater","maniable","manquant","manteau","manuel","marathon","marbre","marchand","mardi","maritime","marqueur","marron","marteler","mascotte","massif","mate\u0301riel","matie\u0300re","matraque","maudire","maussade","mauve","maximal","me\u0301chant","me\u0301connu","me\u0301daille","me\u0301decin","me\u0301diter","me\u0301duse","meilleur","me\u0301lange","me\u0301lodie","membre","me\u0301moire","menacer","mener","menhir","mensonge","mentor","mercredi","me\u0301rite","merle","messager","mesure","me\u0301tal","me\u0301te\u0301ore","me\u0301thode","me\u0301tier","meuble","miauler","microbe","miette","mignon","migrer","milieu","million","mimique","mince","mine\u0301ral","minimal","minorer","minute","miracle","miroiter","missile","mixte","mobile","moderne","moelleux","mondial","moniteur","monnaie","monotone","monstre","montagne","monument","moqueur","morceau","morsure","mortier","moteur","motif","mouche","moufle","moulin","mousson","mouton","mouvant","multiple","munition","muraille","mure\u0300ne","murmure","muscle","muse\u0301um","musicien","mutation","muter","mutuel","myriade","myrtille","myste\u0300re","mythique","nageur","nappe","narquois","narrer","natation","nation","nature","naufrage","nautique","navire","ne\u0301buleux","nectar","ne\u0301faste","ne\u0301gation","ne\u0301gliger","ne\u0301gocier","neige","nerveux","nettoyer","neurone","neutron","neveu","niche","nickel","nitrate","niveau","noble","nocif","nocturne","noirceur","noisette","nomade","nombreux","nommer","normatif","notable","notifier","notoire","nourrir","nouveau","novateur","novembre","novice","nuage","nuancer","nuire","nuisible","nume\u0301ro","nuptial","nuque","nutritif","obe\u0301ir","objectif","obliger","obscur","observer","obstacle","obtenir","obturer","occasion","occuper","oce\u0301an","octobre","octroyer","octupler","oculaire","odeur","odorant","offenser","officier","offrir","ogive","oiseau","oisillon","olfactif","olivier","ombrage","omettre","onctueux","onduler","one\u0301reux","onirique","opale","opaque","ope\u0301rer","opinion","opportun","opprimer","opter","optique","orageux","orange","orbite","ordonner","oreille","organe","orgueil","orifice","ornement","orque","ortie","osciller","osmose","ossature","otarie","ouragan","ourson","outil","outrager","ouvrage","ovation","oxyde","oxyge\u0300ne","ozone","paisible","palace","palmare\u0300s","palourde","palper","panache","panda","pangolin","paniquer","panneau","panorama","pantalon","papaye","papier","papoter","papyrus","paradoxe","parcelle","paresse","parfumer","parler","parole","parrain","parsemer","partager","parure","parvenir","passion","paste\u0300que","paternel","patience","patron","pavillon","pavoiser","payer","paysage","peigne","peintre","pelage","pe\u0301lican","pelle","pelouse","peluche","pendule","pe\u0301ne\u0301trer","pe\u0301nible","pensif","pe\u0301nurie","pe\u0301pite","pe\u0301plum","perdrix","perforer","pe\u0301riode","permuter","perplexe","persil","perte","peser","pe\u0301tale","petit","pe\u0301trir","peuple","pharaon","phobie","phoque","photon","phrase","physique","piano","pictural","pie\u0300ce","pierre","pieuvre","pilote","pinceau","pipette","piquer","pirogue","piscine","piston","pivoter","pixel","pizza","placard","plafond","plaisir","planer","plaque","plastron","plateau","pleurer","plexus","pliage","plomb","plonger","pluie","plumage","pochette","poe\u0301sie","poe\u0300te","pointe","poirier","poisson","poivre","polaire","policier","pollen","polygone","pommade","pompier","ponctuel","ponde\u0301rer","poney","portique","position","posse\u0301der","posture","potager","poteau","potion","pouce","poulain","poumon","pourpre","poussin","pouvoir","prairie","pratique","pre\u0301cieux","pre\u0301dire","pre\u0301fixe","pre\u0301lude","pre\u0301nom","pre\u0301sence","pre\u0301texte","pre\u0301voir","primitif","prince","prison","priver","proble\u0300me","proce\u0301der","prodige","profond","progre\u0300s","proie","projeter","prologue","promener","propre","prospe\u0300re","prote\u0301ger","prouesse","proverbe","prudence","pruneau","psychose","public","puceron","puiser","pulpe","pulsar","punaise","punitif","pupitre","purifier","puzzle","pyramide","quasar","querelle","question","quie\u0301tude","quitter","quotient","racine","raconter","radieux","ragondin","raideur","raisin","ralentir","rallonge","ramasser","rapide","rasage","ratisser","ravager","ravin","rayonner","re\u0301actif","re\u0301agir","re\u0301aliser","re\u0301animer","recevoir","re\u0301citer","re\u0301clamer","re\u0301colter","recruter","reculer","recycler","re\u0301diger","redouter","refaire","re\u0301flexe","re\u0301former","refrain","refuge","re\u0301galien","re\u0301gion","re\u0301glage","re\u0301gulier","re\u0301ite\u0301rer","rejeter","rejouer","relatif","relever","relief","remarque","reme\u0300de","remise","remonter","remplir","remuer","renard","renfort","renifler","renoncer","rentrer","renvoi","replier","reporter","reprise","reptile","requin","re\u0301serve","re\u0301sineux","re\u0301soudre","respect","rester","re\u0301sultat","re\u0301tablir","retenir","re\u0301ticule","retomber","retracer","re\u0301union","re\u0301ussir","revanche","revivre","re\u0301volte","re\u0301vulsif","richesse","rideau","rieur","rigide","rigoler","rincer","riposter","risible","risque","rituel","rival","rivie\u0300re","rocheux","romance","rompre","ronce","rondin","roseau","rosier","rotatif","rotor","rotule","rouge","rouille","rouleau","routine","royaume","ruban","rubis","ruche","ruelle","rugueux","ruiner","ruisseau","ruser","rustique","rythme","sabler","saboter","sabre","sacoche","safari","sagesse","saisir","salade","salive","salon","saluer","samedi","sanction","sanglier","sarcasme","sardine","saturer","saugrenu","saumon","sauter","sauvage","savant","savonner","scalpel","scandale","sce\u0301le\u0301rat","sce\u0301nario","sceptre","sche\u0301ma","science","scinder","score","scrutin","sculpter","se\u0301ance","se\u0301cable","se\u0301cher","secouer","se\u0301cre\u0301ter","se\u0301datif","se\u0301duire","seigneur","se\u0301jour","se\u0301lectif","semaine","sembler","semence","se\u0301minal","se\u0301nateur","sensible","sentence","se\u0301parer","se\u0301quence","serein","sergent","se\u0301rieux","serrure","se\u0301rum","service","se\u0301same","se\u0301vir","sevrage","sextuple","side\u0301ral","sie\u0300cle","sie\u0301ger","siffler","sigle","signal","silence","silicium","simple","since\u0300re","sinistre","siphon","sirop","sismique","situer","skier","social","socle","sodium","soigneux","soldat","soleil","solitude","soluble","sombre","sommeil","somnoler","sonde","songeur","sonnette","sonore","sorcier","sortir","sosie","sottise","soucieux","soudure","souffle","soulever","soupape","source","soutirer","souvenir","spacieux","spatial","spe\u0301cial","sphe\u0300re","spiral","stable","station","sternum","stimulus","stipuler","strict","studieux","stupeur","styliste","sublime","substrat","subtil","subvenir","succe\u0300s","sucre","suffixe","sugge\u0301rer","suiveur","sulfate","superbe","supplier","surface","suricate","surmener","surprise","sursaut","survie","suspect","syllabe","symbole","syme\u0301trie","synapse","syntaxe","syste\u0300me","tabac","tablier","tactile","tailler","talent","talisman","talonner","tambour","tamiser","tangible","tapis","taquiner","tarder","tarif","tartine","tasse","tatami","tatouage","taupe","taureau","taxer","te\u0301moin","temporel","tenaille","tendre","teneur","tenir","tension","terminer","terne","terrible","te\u0301tine","texte","the\u0300me","the\u0301orie","the\u0301rapie","thorax","tibia","tie\u0300de","timide","tirelire","tiroir","tissu","titane","titre","tituber","toboggan","tole\u0301rant","tomate","tonique","tonneau","toponyme","torche","tordre","tornade","torpille","torrent","torse","tortue","totem","toucher","tournage","tousser","toxine","traction","trafic","tragique","trahir","train","trancher","travail","tre\u0300fle","tremper","tre\u0301sor","treuil","triage","tribunal","tricoter","trilogie","triomphe","tripler","triturer","trivial","trombone","tronc","tropical","troupeau","tuile","tulipe","tumulte","tunnel","turbine","tuteur","tutoyer","tuyau","tympan","typhon","typique","tyran","ubuesque","ultime","ultrason","unanime","unifier","union","unique","unitaire","univers","uranium","urbain","urticant","usage","usine","usuel","usure","utile","utopie","vacarme","vaccin","vagabond","vague","vaillant","vaincre","vaisseau","valable","valise","vallon","valve","vampire","vanille","vapeur","varier","vaseux","vassal","vaste","vecteur","vedette","ve\u0301ge\u0301tal","ve\u0301hicule","veinard","ve\u0301loce","vendredi","ve\u0301ne\u0301rer","venger","venimeux","ventouse","verdure","ve\u0301rin","vernir","verrou","verser","vertu","veston","ve\u0301te\u0301ran","ve\u0301tuste","vexant","vexer","viaduc","viande","victoire","vidange","vide\u0301o","vignette","vigueur","vilain","village","vinaigre","violon","vipe\u0300re","virement","virtuose","virus","visage","viseur","vision","visqueux","visuel","vital","vitesse","viticole","vitrine","vivace","vivipare","vocation","voguer","voile","voisin","voiture","volaille","volcan","voltiger","volume","vorace","vortex","voter","vouloir","voyage","voyelle","wagon","xe\u0301non","yacht","ze\u0300bre","ze\u0301nith","zeste","zoologie"]'), zs = JSON.parse('["abaco","abbaglio","abbinato","abete","abisso","abolire","abrasivo","abrogato","accadere","accenno","accusato","acetone","achille","acido","acqua","acre","acrilico","acrobata","acuto","adagio","addebito","addome","adeguato","aderire","adipe","adottare","adulare","affabile","affetto","affisso","affranto","aforisma","afoso","africano","agave","agente","agevole","aggancio","agire","agitare","agonismo","agricolo","agrumeto","aguzzo","alabarda","alato","albatro","alberato","albo","albume","alce","alcolico","alettone","alfa","algebra","aliante","alibi","alimento","allagato","allegro","allievo","allodola","allusivo","almeno","alogeno","alpaca","alpestre","altalena","alterno","alticcio","altrove","alunno","alveolo","alzare","amalgama","amanita","amarena","ambito","ambrato","ameba","america","ametista","amico","ammasso","ammenda","ammirare","ammonito","amore","ampio","ampliare","amuleto","anacardo","anagrafe","analista","anarchia","anatra","anca","ancella","ancora","andare","andrea","anello","angelo","angolare","angusto","anima","annegare","annidato","anno","annuncio","anonimo","anticipo","anzi","apatico","apertura","apode","apparire","appetito","appoggio","approdo","appunto","aprile","arabica","arachide","aragosta","araldica","arancio","aratura","arazzo","arbitro","archivio","ardito","arenile","argento","argine","arguto","aria","armonia","arnese","arredato","arringa","arrosto","arsenico","arso","artefice","arzillo","asciutto","ascolto","asepsi","asettico","asfalto","asino","asola","aspirato","aspro","assaggio","asse","assoluto","assurdo","asta","astenuto","astice","astratto","atavico","ateismo","atomico","atono","attesa","attivare","attorno","attrito","attuale","ausilio","austria","autista","autonomo","autunno","avanzato","avere","avvenire","avviso","avvolgere","azione","azoto","azzimo","azzurro","babele","baccano","bacino","baco","badessa","badilata","bagnato","baita","balcone","baldo","balena","ballata","balzano","bambino","bandire","baraonda","barbaro","barca","baritono","barlume","barocco","basilico","basso","batosta","battuto","baule","bava","bavosa","becco","beffa","belgio","belva","benda","benevole","benigno","benzina","bere","berlina","beta","bibita","bici","bidone","bifido","biga","bilancia","bimbo","binocolo","biologo","bipede","bipolare","birbante","birra","biscotto","bisesto","bisnonno","bisonte","bisturi","bizzarro","blando","blatta","bollito","bonifico","bordo","bosco","botanico","bottino","bozzolo","braccio","bradipo","brama","branca","bravura","bretella","brevetto","brezza","briglia","brillante","brindare","broccolo","brodo","bronzina","brullo","bruno","bubbone","buca","budino","buffone","buio","bulbo","buono","burlone","burrasca","bussola","busta","cadetto","caduco","calamaro","calcolo","calesse","calibro","calmo","caloria","cambusa","camerata","camicia","cammino","camola","campale","canapa","candela","cane","canino","canotto","cantina","capace","capello","capitolo","capogiro","cappero","capra","capsula","carapace","carcassa","cardo","carisma","carovana","carretto","cartolina","casaccio","cascata","caserma","caso","cassone","castello","casuale","catasta","catena","catrame","cauto","cavillo","cedibile","cedrata","cefalo","celebre","cellulare","cena","cenone","centesimo","ceramica","cercare","certo","cerume","cervello","cesoia","cespo","ceto","chela","chiaro","chicca","chiedere","chimera","china","chirurgo","chitarra","ciao","ciclismo","cifrare","cigno","cilindro","ciottolo","circa","cirrosi","citrico","cittadino","ciuffo","civetta","civile","classico","clinica","cloro","cocco","codardo","codice","coerente","cognome","collare","colmato","colore","colposo","coltivato","colza","coma","cometa","commando","comodo","computer","comune","conciso","condurre","conferma","congelare","coniuge","connesso","conoscere","consumo","continuo","convegno","coperto","copione","coppia","copricapo","corazza","cordata","coricato","cornice","corolla","corpo","corredo","corsia","cortese","cosmico","costante","cottura","covato","cratere","cravatta","creato","credere","cremoso","crescita","creta","criceto","crinale","crisi","critico","croce","cronaca","crostata","cruciale","crusca","cucire","cuculo","cugino","cullato","cupola","curatore","cursore","curvo","cuscino","custode","dado","daino","dalmata","damerino","daniela","dannoso","danzare","datato","davanti","davvero","debutto","decennio","deciso","declino","decollo","decreto","dedicato","definito","deforme","degno","delegare","delfino","delirio","delta","demenza","denotato","dentro","deposito","derapata","derivare","deroga","descritto","deserto","desiderio","desumere","detersivo","devoto","diametro","dicembre","diedro","difeso","diffuso","digerire","digitale","diluvio","dinamico","dinnanzi","dipinto","diploma","dipolo","diradare","dire","dirotto","dirupo","disagio","discreto","disfare","disgelo","disposto","distanza","disumano","dito","divano","divelto","dividere","divorato","doblone","docente","doganale","dogma","dolce","domato","domenica","dominare","dondolo","dono","dormire","dote","dottore","dovuto","dozzina","drago","druido","dubbio","dubitare","ducale","duna","duomo","duplice","duraturo","ebano","eccesso","ecco","eclissi","economia","edera","edicola","edile","editoria","educare","egemonia","egli","egoismo","egregio","elaborato","elargire","elegante","elencato","eletto","elevare","elfico","elica","elmo","elsa","eluso","emanato","emblema","emesso","emiro","emotivo","emozione","empirico","emulo","endemico","enduro","energia","enfasi","enoteca","entrare","enzima","epatite","epilogo","episodio","epocale","eppure","equatore","erario","erba","erboso","erede","eremita","erigere","ermetico","eroe","erosivo","errante","esagono","esame","esanime","esaudire","esca","esempio","esercito","esibito","esigente","esistere","esito","esofago","esortato","esoso","espanso","espresso","essenza","esso","esteso","estimare","estonia","estroso","esultare","etilico","etnico","etrusco","etto","euclideo","europa","evaso","evidenza","evitato","evoluto","evviva","fabbrica","faccenda","fachiro","falco","famiglia","fanale","fanfara","fango","fantasma","fare","farfalla","farinoso","farmaco","fascia","fastoso","fasullo","faticare","fato","favoloso","febbre","fecola","fede","fegato","felpa","feltro","femmina","fendere","fenomeno","fermento","ferro","fertile","fessura","festivo","fetta","feudo","fiaba","fiducia","fifa","figurato","filo","finanza","finestra","finire","fiore","fiscale","fisico","fiume","flacone","flamenco","flebo","flemma","florido","fluente","fluoro","fobico","focaccia","focoso","foderato","foglio","folata","folclore","folgore","fondente","fonetico","fonia","fontana","forbito","forchetta","foresta","formica","fornaio","foro","fortezza","forzare","fosfato","fosso","fracasso","frana","frassino","fratello","freccetta","frenata","fresco","frigo","frollino","fronde","frugale","frutta","fucilata","fucsia","fuggente","fulmine","fulvo","fumante","fumetto","fumoso","fune","funzione","fuoco","furbo","furgone","furore","fuso","futile","gabbiano","gaffe","galateo","gallina","galoppo","gambero","gamma","garanzia","garbo","garofano","garzone","gasdotto","gasolio","gastrico","gatto","gaudio","gazebo","gazzella","geco","gelatina","gelso","gemello","gemmato","gene","genitore","gennaio","genotipo","gergo","ghepardo","ghiaccio","ghisa","giallo","gilda","ginepro","giocare","gioiello","giorno","giove","girato","girone","gittata","giudizio","giurato","giusto","globulo","glutine","gnomo","gobba","golf","gomito","gommone","gonfio","gonna","governo","gracile","grado","grafico","grammo","grande","grattare","gravoso","grazia","greca","gregge","grifone","grigio","grinza","grotta","gruppo","guadagno","guaio","guanto","guardare","gufo","guidare","ibernato","icona","identico","idillio","idolo","idra","idrico","idrogeno","igiene","ignaro","ignorato","ilare","illeso","illogico","illudere","imballo","imbevuto","imbocco","imbuto","immane","immerso","immolato","impacco","impeto","impiego","importo","impronta","inalare","inarcare","inattivo","incanto","incendio","inchino","incisivo","incluso","incontro","incrocio","incubo","indagine","india","indole","inedito","infatti","infilare","inflitto","ingaggio","ingegno","inglese","ingordo","ingrosso","innesco","inodore","inoltrare","inondato","insano","insetto","insieme","insonnia","insulina","intasato","intero","intonaco","intuito","inumidire","invalido","invece","invito","iperbole","ipnotico","ipotesi","ippica","iride","irlanda","ironico","irrigato","irrorare","isolato","isotopo","isterico","istituto","istrice","italia","iterare","labbro","labirinto","lacca","lacerato","lacrima","lacuna","laddove","lago","lampo","lancetta","lanterna","lardoso","larga","laringe","lastra","latenza","latino","lattuga","lavagna","lavoro","legale","leggero","lembo","lentezza","lenza","leone","lepre","lesivo","lessato","lesto","letterale","leva","levigato","libero","lido","lievito","lilla","limatura","limitare","limpido","lineare","lingua","liquido","lira","lirica","lisca","lite","litigio","livrea","locanda","lode","logica","lombare","londra","longevo","loquace","lorenzo","loto","lotteria","luce","lucidato","lumaca","luminoso","lungo","lupo","luppolo","lusinga","lusso","lutto","macabro","macchina","macero","macinato","madama","magico","maglia","magnete","magro","maiolica","malafede","malgrado","malinteso","malsano","malto","malumore","mana","mancia","mandorla","mangiare","manifesto","mannaro","manovra","mansarda","mantide","manubrio","mappa","maratona","marcire","maretta","marmo","marsupio","maschera","massaia","mastino","materasso","matricola","mattone","maturo","mazurca","meandro","meccanico","mecenate","medesimo","meditare","mega","melassa","melis","melodia","meninge","meno","mensola","mercurio","merenda","merlo","meschino","mese","messere","mestolo","metallo","metodo","mettere","miagolare","mica","micelio","michele","microbo","midollo","miele","migliore","milano","milite","mimosa","minerale","mini","minore","mirino","mirtillo","miscela","missiva","misto","misurare","mitezza","mitigare","mitra","mittente","mnemonico","modello","modifica","modulo","mogano","mogio","mole","molosso","monastero","monco","mondina","monetario","monile","monotono","monsone","montato","monviso","mora","mordere","morsicato","mostro","motivato","motosega","motto","movenza","movimento","mozzo","mucca","mucosa","muffa","mughetto","mugnaio","mulatto","mulinello","multiplo","mummia","munto","muovere","murale","musa","muscolo","musica","mutevole","muto","nababbo","nafta","nanometro","narciso","narice","narrato","nascere","nastrare","naturale","nautica","naviglio","nebulosa","necrosi","negativo","negozio","nemmeno","neofita","neretto","nervo","nessuno","nettuno","neutrale","neve","nevrotico","nicchia","ninfa","nitido","nobile","nocivo","nodo","nome","nomina","nordico","normale","norvegese","nostrano","notare","notizia","notturno","novella","nucleo","nulla","numero","nuovo","nutrire","nuvola","nuziale","oasi","obbedire","obbligo","obelisco","oblio","obolo","obsoleto","occasione","occhio","occidente","occorrere","occultare","ocra","oculato","odierno","odorare","offerta","offrire","offuscato","oggetto","oggi","ognuno","olandese","olfatto","oliato","oliva","ologramma","oltre","omaggio","ombelico","ombra","omega","omissione","ondoso","onere","onice","onnivoro","onorevole","onta","operato","opinione","opposto","oracolo","orafo","ordine","orecchino","orefice","orfano","organico","origine","orizzonte","orma","ormeggio","ornativo","orologio","orrendo","orribile","ortensia","ortica","orzata","orzo","osare","oscurare","osmosi","ospedale","ospite","ossa","ossidare","ostacolo","oste","otite","otre","ottagono","ottimo","ottobre","ovale","ovest","ovino","oviparo","ovocito","ovunque","ovviare","ozio","pacchetto","pace","pacifico","padella","padrone","paese","paga","pagina","palazzina","palesare","pallido","palo","palude","pandoro","pannello","paolo","paonazzo","paprica","parabola","parcella","parere","pargolo","pari","parlato","parola","partire","parvenza","parziale","passivo","pasticca","patacca","patologia","pattume","pavone","peccato","pedalare","pedonale","peggio","peloso","penare","pendice","penisola","pennuto","penombra","pensare","pentola","pepe","pepita","perbene","percorso","perdonato","perforare","pergamena","periodo","permesso","perno","perplesso","persuaso","pertugio","pervaso","pesatore","pesista","peso","pestifero","petalo","pettine","petulante","pezzo","piacere","pianta","piattino","piccino","picozza","piega","pietra","piffero","pigiama","pigolio","pigro","pila","pilifero","pillola","pilota","pimpante","pineta","pinna","pinolo","pioggia","piombo","piramide","piretico","pirite","pirolisi","pitone","pizzico","placebo","planare","plasma","platano","plenario","pochezza","poderoso","podismo","poesia","poggiare","polenta","poligono","pollice","polmonite","polpetta","polso","poltrona","polvere","pomice","pomodoro","ponte","popoloso","porfido","poroso","porpora","porre","portata","posa","positivo","possesso","postulato","potassio","potere","pranzo","prassi","pratica","precluso","predica","prefisso","pregiato","prelievo","premere","prenotare","preparato","presenza","pretesto","prevalso","prima","principe","privato","problema","procura","produrre","profumo","progetto","prolunga","promessa","pronome","proposta","proroga","proteso","prova","prudente","prugna","prurito","psiche","pubblico","pudica","pugilato","pugno","pulce","pulito","pulsante","puntare","pupazzo","pupilla","puro","quadro","qualcosa","quasi","querela","quota","raccolto","raddoppio","radicale","radunato","raffica","ragazzo","ragione","ragno","ramarro","ramingo","ramo","randagio","rantolare","rapato","rapina","rappreso","rasatura","raschiato","rasente","rassegna","rastrello","rata","ravveduto","reale","recepire","recinto","recluta","recondito","recupero","reddito","redimere","regalato","registro","regola","regresso","relazione","remare","remoto","renna","replica","reprimere","reputare","resa","residente","responso","restauro","rete","retina","retorica","rettifica","revocato","riassunto","ribadire","ribelle","ribrezzo","ricarica","ricco","ricevere","riciclato","ricordo","ricreduto","ridicolo","ridurre","rifasare","riflesso","riforma","rifugio","rigare","rigettato","righello","rilassato","rilevato","rimanere","rimbalzo","rimedio","rimorchio","rinascita","rincaro","rinforzo","rinnovo","rinomato","rinsavito","rintocco","rinuncia","rinvenire","riparato","ripetuto","ripieno","riportare","ripresa","ripulire","risata","rischio","riserva","risibile","riso","rispetto","ristoro","risultato","risvolto","ritardo","ritegno","ritmico","ritrovo","riunione","riva","riverso","rivincita","rivolto","rizoma","roba","robotico","robusto","roccia","roco","rodaggio","rodere","roditore","rogito","rollio","romantico","rompere","ronzio","rosolare","rospo","rotante","rotondo","rotula","rovescio","rubizzo","rubrica","ruga","rullino","rumine","rumoroso","ruolo","rupe","russare","rustico","sabato","sabbiare","sabotato","sagoma","salasso","saldatura","salgemma","salivare","salmone","salone","saltare","saluto","salvo","sapere","sapido","saporito","saraceno","sarcasmo","sarto","sassoso","satellite","satira","satollo","saturno","savana","savio","saziato","sbadiglio","sbalzo","sbancato","sbarra","sbattere","sbavare","sbendare","sbirciare","sbloccato","sbocciato","sbrinare","sbruffone","sbuffare","scabroso","scadenza","scala","scambiare","scandalo","scapola","scarso","scatenare","scavato","scelto","scenico","scettro","scheda","schiena","sciarpa","scienza","scindere","scippo","sciroppo","scivolo","sclerare","scodella","scolpito","scomparto","sconforto","scoprire","scorta","scossone","scozzese","scriba","scrollare","scrutinio","scuderia","scultore","scuola","scuro","scusare","sdebitare","sdoganare","seccatura","secondo","sedano","seggiola","segnalato","segregato","seguito","selciato","selettivo","sella","selvaggio","semaforo","sembrare","seme","seminato","sempre","senso","sentire","sepolto","sequenza","serata","serbato","sereno","serio","serpente","serraglio","servire","sestina","setola","settimana","sfacelo","sfaldare","sfamato","sfarzoso","sfaticato","sfera","sfida","sfilato","sfinge","sfocato","sfoderare","sfogo","sfoltire","sforzato","sfratto","sfruttato","sfuggito","sfumare","sfuso","sgabello","sgarbato","sgonfiare","sgorbio","sgrassato","sguardo","sibilo","siccome","sierra","sigla","signore","silenzio","sillaba","simbolo","simpatico","simulato","sinfonia","singolo","sinistro","sino","sintesi","sinusoide","sipario","sisma","sistole","situato","slitta","slogatura","sloveno","smarrito","smemorato","smentito","smeraldo","smilzo","smontare","smottato","smussato","snellire","snervato","snodo","sobbalzo","sobrio","soccorso","sociale","sodale","soffitto","sogno","soldato","solenne","solido","sollazzo","solo","solubile","solvente","somatico","somma","sonda","sonetto","sonnifero","sopire","soppeso","sopra","sorgere","sorpasso","sorriso","sorso","sorteggio","sorvolato","sospiro","sosta","sottile","spada","spalla","spargere","spatola","spavento","spazzola","specie","spedire","spegnere","spelatura","speranza","spessore","spettrale","spezzato","spia","spigoloso","spillato","spinoso","spirale","splendido","sportivo","sposo","spranga","sprecare","spronato","spruzzo","spuntino","squillo","sradicare","srotolato","stabile","stacco","staffa","stagnare","stampato","stantio","starnuto","stasera","statuto","stelo","steppa","sterzo","stiletto","stima","stirpe","stivale","stizzoso","stonato","storico","strappo","stregato","stridulo","strozzare","strutto","stuccare","stufo","stupendo","subentro","succoso","sudore","suggerito","sugo","sultano","suonare","superbo","supporto","surgelato","surrogato","sussurro","sutura","svagare","svedese","sveglio","svelare","svenuto","svezia","sviluppo","svista","svizzera","svolta","svuotare","tabacco","tabulato","tacciare","taciturno","tale","talismano","tampone","tannino","tara","tardivo","targato","tariffa","tarpare","tartaruga","tasto","tattico","taverna","tavolata","tazza","teca","tecnico","telefono","temerario","tempo","temuto","tendone","tenero","tensione","tentacolo","teorema","terme","terrazzo","terzetto","tesi","tesserato","testato","tetro","tettoia","tifare","tigella","timbro","tinto","tipico","tipografo","tiraggio","tiro","titanio","titolo","titubante","tizio","tizzone","toccare","tollerare","tolto","tombola","tomo","tonfo","tonsilla","topazio","topologia","toppa","torba","tornare","torrone","tortora","toscano","tossire","tostatura","totano","trabocco","trachea","trafila","tragedia","tralcio","tramonto","transito","trapano","trarre","trasloco","trattato","trave","treccia","tremolio","trespolo","tributo","tricheco","trifoglio","trillo","trincea","trio","tristezza","triturato","trivella","tromba","trono","troppo","trottola","trovare","truccato","tubatura","tuffato","tulipano","tumulto","tunisia","turbare","turchino","tuta","tutela","ubicato","uccello","uccisore","udire","uditivo","uffa","ufficio","uguale","ulisse","ultimato","umano","umile","umorismo","uncinetto","ungere","ungherese","unicorno","unificato","unisono","unitario","unte","uovo","upupa","uragano","urgenza","urlo","usanza","usato","uscito","usignolo","usuraio","utensile","utilizzo","utopia","vacante","vaccinato","vagabondo","vagliato","valanga","valgo","valico","valletta","valoroso","valutare","valvola","vampata","vangare","vanitoso","vano","vantaggio","vanvera","vapore","varano","varcato","variante","vasca","vedetta","vedova","veduto","vegetale","veicolo","velcro","velina","velluto","veloce","venato","vendemmia","vento","verace","verbale","vergogna","verifica","vero","verruca","verticale","vescica","vessillo","vestale","veterano","vetrina","vetusto","viandante","vibrante","vicenda","vichingo","vicinanza","vidimare","vigilia","vigneto","vigore","vile","villano","vimini","vincitore","viola","vipera","virgola","virologo","virulento","viscoso","visione","vispo","vissuto","visura","vita","vitello","vittima","vivanda","vivido","viziare","voce","voga","volatile","volere","volpe","voragine","vulcano","zampogna","zanna","zappato","zattera","zavorra","zefiro","zelante","zelo","zenzero","zerbino","zibetto","zinco","zircone","zitto","zolla","zotico","zucchero","zufolo","zulu","zuppa"]'), Ns = JSON.parse('["a\u0301baco","abdomen","abeja","abierto","abogado","abono","aborto","abrazo","abrir","abuelo","abuso","acabar","academia","acceso","accio\u0301n","aceite","acelga","acento","aceptar","a\u0301cido","aclarar","acne\u0301","acoger","acoso","activo","acto","actriz","actuar","acudir","acuerdo","acusar","adicto","admitir","adoptar","adorno","aduana","adulto","ae\u0301reo","afectar","aficio\u0301n","afinar","afirmar","a\u0301gil","agitar","agoni\u0301a","agosto","agotar","agregar","agrio","agua","agudo","a\u0301guila","aguja","ahogo","ahorro","aire","aislar","ajedrez","ajeno","ajuste","alacra\u0301n","alambre","alarma","alba","a\u0301lbum","alcalde","aldea","alegre","alejar","alerta","aleta","alfiler","alga","algodo\u0301n","aliado","aliento","alivio","alma","almeja","almi\u0301bar","altar","alteza","altivo","alto","altura","alumno","alzar","amable","amante","amapola","amargo","amasar","a\u0301mbar","a\u0301mbito","ameno","amigo","amistad","amor","amparo","amplio","ancho","anciano","ancla","andar","ande\u0301n","anemia","a\u0301ngulo","anillo","a\u0301nimo","ani\u0301s","anotar","antena","antiguo","antojo","anual","anular","anuncio","an\u0303adir","an\u0303ejo","an\u0303o","apagar","aparato","apetito","apio","aplicar","apodo","aporte","apoyo","aprender","aprobar","apuesta","apuro","arado","aran\u0303a","arar","a\u0301rbitro","a\u0301rbol","arbusto","archivo","arco","arder","ardilla","arduo","a\u0301rea","a\u0301rido","aries","armoni\u0301a","arne\u0301s","aroma","arpa","arpo\u0301n","arreglo","arroz","arruga","arte","artista","asa","asado","asalto","ascenso","asegurar","aseo","asesor","asiento","asilo","asistir","asno","asombro","a\u0301spero","astilla","astro","astuto","asumir","asunto","atajo","ataque","atar","atento","ateo","a\u0301tico","atleta","a\u0301tomo","atraer","atroz","atu\u0301n","audaz","audio","auge","aula","aumento","ausente","autor","aval","avance","avaro","ave","avellana","avena","avestruz","avio\u0301n","aviso","ayer","ayuda","ayuno","azafra\u0301n","azar","azote","azu\u0301car","azufre","azul","baba","babor","bache","bahi\u0301a","baile","bajar","balanza","balco\u0301n","balde","bambu\u0301","banco","banda","ban\u0303o","barba","barco","barniz","barro","ba\u0301scula","basto\u0301n","basura","batalla","bateri\u0301a","batir","batuta","bau\u0301l","bazar","bebe\u0301","bebida","bello","besar","beso","bestia","bicho","bien","bingo","blanco","bloque","blusa","boa","bobina","bobo","boca","bocina","boda","bodega","boina","bola","bolero","bolsa","bomba","bondad","bonito","bono","bonsa\u0301i","borde","borrar","bosque","bote","boti\u0301n","bo\u0301veda","bozal","bravo","brazo","brecha","breve","brillo","brinco","brisa","broca","broma","bronce","brote","bruja","brusco","bruto","buceo","bucle","bueno","buey","bufanda","bufo\u0301n","bu\u0301ho","buitre","bulto","burbuja","burla","burro","buscar","butaca","buzo\u0301n","caballo","cabeza","cabina","cabra","cacao","cada\u0301ver","cadena","caer","cafe\u0301","cai\u0301da","caima\u0301n","caja","cajo\u0301n","cal","calamar","calcio","caldo","calidad","calle","calma","calor","calvo","cama","cambio","camello","camino","campo","ca\u0301ncer","candil","canela","canguro","canica","canto","can\u0303a","can\u0303o\u0301n","caoba","caos","capaz","capita\u0301n","capote","captar","capucha","cara","carbo\u0301n","ca\u0301rcel","careta","carga","carin\u0303o","carne","carpeta","carro","carta","casa","casco","casero","caspa","castor","catorce","catre","caudal","causa","cazo","cebolla","ceder","cedro","celda","ce\u0301lebre","celoso","ce\u0301lula","cemento","ceniza","centro","cerca","cerdo","cereza","cero","cerrar","certeza","ce\u0301sped","cetro","chacal","chaleco","champu\u0301","chancla","chapa","charla","chico","chiste","chivo","choque","choza","chuleta","chupar","ciclo\u0301n","ciego","cielo","cien","cierto","cifra","cigarro","cima","cinco","cine","cinta","cipre\u0301s","circo","ciruela","cisne","cita","ciudad","clamor","clan","claro","clase","clave","cliente","clima","cli\u0301nica","cobre","coccio\u0301n","cochino","cocina","coco","co\u0301digo","codo","cofre","coger","cohete","coji\u0301n","cojo","cola","colcha","colegio","colgar","colina","collar","colmo","columna","combate","comer","comida","co\u0301modo","compra","conde","conejo","conga","conocer","consejo","contar","copa","copia","corazo\u0301n","corbata","corcho","cordo\u0301n","corona","correr","coser","cosmos","costa","cra\u0301neo","cra\u0301ter","crear","crecer","crei\u0301do","crema","cri\u0301a","crimen","cripta","crisis","cromo","cro\u0301nica","croqueta","crudo","cruz","cuadro","cuarto","cuatro","cubo","cubrir","cuchara","cuello","cuento","cuerda","cuesta","cueva","cuidar","culebra","culpa","culto","cumbre","cumplir","cuna","cuneta","cuota","cupo\u0301n","cu\u0301pula","curar","curioso","curso","curva","cutis","dama","danza","dar","dardo","da\u0301til","deber","de\u0301bil","de\u0301cada","decir","dedo","defensa","definir","dejar","delfi\u0301n","delgado","delito","demora","denso","dental","deporte","derecho","derrota","desayuno","deseo","desfile","desnudo","destino","desvi\u0301o","detalle","detener","deuda","di\u0301a","diablo","diadema","diamante","diana","diario","dibujo","dictar","diente","dieta","diez","difi\u0301cil","digno","dilema","diluir","dinero","directo","dirigir","disco","disen\u0303o","disfraz","diva","divino","doble","doce","dolor","domingo","don","donar","dorado","dormir","dorso","dos","dosis","drago\u0301n","droga","ducha","duda","duelo","duen\u0303o","dulce","du\u0301o","duque","durar","dureza","duro","e\u0301bano","ebrio","echar","eco","ecuador","edad","edicio\u0301n","edificio","editor","educar","efecto","eficaz","eje","ejemplo","elefante","elegir","elemento","elevar","elipse","e\u0301lite","elixir","elogio","eludir","embudo","emitir","emocio\u0301n","empate","empen\u0303o","empleo","empresa","enano","encargo","enchufe","enci\u0301a","enemigo","enero","enfado","enfermo","engan\u0303o","enigma","enlace","enorme","enredo","ensayo","ensen\u0303ar","entero","entrar","envase","envi\u0301o","e\u0301poca","equipo","erizo","escala","escena","escolar","escribir","escudo","esencia","esfera","esfuerzo","espada","espejo","espi\u0301a","esposa","espuma","esqui\u0301","estar","este","estilo","estufa","etapa","eterno","e\u0301tica","etnia","evadir","evaluar","evento","evitar","exacto","examen","exceso","excusa","exento","exigir","exilio","existir","e\u0301xito","experto","explicar","exponer","extremo","fa\u0301brica","fa\u0301bula","fachada","fa\u0301cil","factor","faena","faja","falda","fallo","falso","faltar","fama","familia","famoso","farao\u0301n","farmacia","farol","farsa","fase","fatiga","fauna","favor","fax","febrero","fecha","feliz","feo","feria","feroz","fe\u0301rtil","fervor","festi\u0301n","fiable","fianza","fiar","fibra","ficcio\u0301n","ficha","fideo","fiebre","fiel","fiera","fiesta","figura","fijar","fijo","fila","filete","filial","filtro","fin","finca","fingir","finito","firma","flaco","flauta","flecha","flor","flota","fluir","flujo","flu\u0301or","fobia","foca","fogata","fogo\u0301n","folio","folleto","fondo","forma","forro","fortuna","forzar","fosa","foto","fracaso","fra\u0301gil","franja","frase","fraude","frei\u0301r","freno","fresa","fri\u0301o","frito","fruta","fuego","fuente","fuerza","fuga","fumar","funcio\u0301n","funda","furgo\u0301n","furia","fusil","fu\u0301tbol","futuro","gacela","gafas","gaita","gajo","gala","galeri\u0301a","gallo","gamba","ganar","gancho","ganga","ganso","garaje","garza","gasolina","gastar","gato","gavila\u0301n","gemelo","gemir","gen","ge\u0301nero","genio","gente","geranio","gerente","germen","gesto","gigante","gimnasio","girar","giro","glaciar","globo","gloria","gol","golfo","goloso","golpe","goma","gordo","gorila","gorra","gota","goteo","gozar","grada","gra\u0301fico","grano","grasa","gratis","grave","grieta","grillo","gripe","gris","grito","grosor","gru\u0301a","grueso","grumo","grupo","guante","guapo","guardia","guerra","gui\u0301a","guin\u0303o","guion","guiso","guitarra","gusano","gustar","haber","ha\u0301bil","hablar","hacer","hacha","hada","hallar","hamaca","harina","haz","hazan\u0303a","hebilla","hebra","hecho","helado","helio","hembra","herir","hermano","he\u0301roe","hervir","hielo","hierro","hi\u0301gado","higiene","hijo","himno","historia","hocico","hogar","hoguera","hoja","hombre","hongo","honor","honra","hora","hormiga","horno","hostil","hoyo","hueco","huelga","huerta","hueso","huevo","huida","huir","humano","hu\u0301medo","humilde","humo","hundir","huraca\u0301n","hurto","icono","ideal","idioma","i\u0301dolo","iglesia","iglu\u0301","igual","ilegal","ilusio\u0301n","imagen","ima\u0301n","imitar","impar","imperio","imponer","impulso","incapaz","i\u0301ndice","inerte","infiel","informe","ingenio","inicio","inmenso","inmune","innato","insecto","instante","intere\u0301s","i\u0301ntimo","intuir","inu\u0301til","invierno","ira","iris","ironi\u0301a","isla","islote","jabali\u0301","jabo\u0301n","jamo\u0301n","jarabe","jardi\u0301n","jarra","jaula","jazmi\u0301n","jefe","jeringa","jinete","jornada","joroba","joven","joya","juerga","jueves","juez","jugador","jugo","juguete","juicio","junco","jungla","junio","juntar","ju\u0301piter","jurar","justo","juvenil","juzgar","kilo","koala","labio","lacio","lacra","lado","ladro\u0301n","lagarto","la\u0301grima","laguna","laico","lamer","la\u0301mina","la\u0301mpara","lana","lancha","langosta","lanza","la\u0301piz","largo","larva","la\u0301stima","lata","la\u0301tex","latir","laurel","lavar","lazo","leal","leccio\u0301n","leche","lector","leer","legio\u0301n","legumbre","lejano","lengua","lento","len\u0303a","leo\u0301n","leopardo","lesio\u0301n","letal","letra","leve","leyenda","libertad","libro","licor","li\u0301der","lidiar","lienzo","liga","ligero","lima","li\u0301mite","limo\u0301n","limpio","lince","lindo","li\u0301nea","lingote","lino","linterna","li\u0301quido","liso","lista","litera","litio","litro","llaga","llama","llanto","llave","llegar","llenar","llevar","llorar","llover","lluvia","lobo","locio\u0301n","loco","locura","lo\u0301gica","logro","lombriz","lomo","lonja","lote","lucha","lucir","lugar","lujo","luna","lunes","lupa","lustro","luto","luz","maceta","macho","madera","madre","maduro","maestro","mafia","magia","mago","mai\u0301z","maldad","maleta","malla","malo","mama\u0301","mambo","mamut","manco","mando","manejar","manga","maniqui\u0301","manjar","mano","manso","manta","man\u0303ana","mapa","ma\u0301quina","mar","marco","marea","marfil","margen","marido","ma\u0301rmol","marro\u0301n","martes","marzo","masa","ma\u0301scara","masivo","matar","materia","matiz","matriz","ma\u0301ximo","mayor","mazorca","mecha","medalla","medio","me\u0301dula","mejilla","mejor","melena","melo\u0301n","memoria","menor","mensaje","mente","menu\u0301","mercado","merengue","me\u0301rito","mes","meso\u0301n","meta","meter","me\u0301todo","metro","mezcla","miedo","miel","miembro","miga","mil","milagro","militar","millo\u0301n","mimo","mina","minero","mi\u0301nimo","minuto","miope","mirar","misa","miseria","misil","mismo","mitad","mito","mochila","mocio\u0301n","moda","modelo","moho","mojar","molde","moler","molino","momento","momia","monarca","moneda","monja","monto","mon\u0303o","morada","morder","moreno","morir","morro","morsa","mortal","mosca","mostrar","motivo","mover","mo\u0301vil","mozo","mucho","mudar","mueble","muela","muerte","muestra","mugre","mujer","mula","muleta","multa","mundo","mun\u0303eca","mural","muro","mu\u0301sculo","museo","musgo","mu\u0301sica","muslo","na\u0301car","nacio\u0301n","nadar","naipe","naranja","nariz","narrar","nasal","natal","nativo","natural","na\u0301usea","naval","nave","navidad","necio","ne\u0301ctar","negar","negocio","negro","neo\u0301n","nervio","neto","neutro","nevar","nevera","nicho","nido","niebla","nieto","nin\u0303ez","nin\u0303o","ni\u0301tido","nivel","nobleza","noche","no\u0301mina","noria","norma","norte","nota","noticia","novato","novela","novio","nube","nuca","nu\u0301cleo","nudillo","nudo","nuera","nueve","nuez","nulo","nu\u0301mero","nutria","oasis","obeso","obispo","objeto","obra","obrero","observar","obtener","obvio","oca","ocaso","oce\u0301ano","ochenta","ocho","ocio","ocre","octavo","octubre","oculto","ocupar","ocurrir","odiar","odio","odisea","oeste","ofensa","oferta","oficio","ofrecer","ogro","oi\u0301do","oi\u0301r","ojo","ola","oleada","olfato","olivo","olla","olmo","olor","olvido","ombligo","onda","onza","opaco","opcio\u0301n","o\u0301pera","opinar","oponer","optar","o\u0301ptica","opuesto","oracio\u0301n","orador","oral","o\u0301rbita","orca","orden","oreja","o\u0301rgano","orgi\u0301a","orgullo","oriente","origen","orilla","oro","orquesta","oruga","osadi\u0301a","oscuro","osezno","oso","ostra","oton\u0303o","otro","oveja","o\u0301vulo","o\u0301xido","oxi\u0301geno","oyente","ozono","pacto","padre","paella","pa\u0301gina","pago","pai\u0301s","pa\u0301jaro","palabra","palco","paleta","pa\u0301lido","palma","paloma","palpar","pan","panal","pa\u0301nico","pantera","pan\u0303uelo","papa\u0301","papel","papilla","paquete","parar","parcela","pared","parir","paro","pa\u0301rpado","parque","pa\u0301rrafo","parte","pasar","paseo","pasio\u0301n","paso","pasta","pata","patio","patria","pausa","pauta","pavo","payaso","peato\u0301n","pecado","pecera","pecho","pedal","pedir","pegar","peine","pelar","peldan\u0303o","pelea","peligro","pellejo","pelo","peluca","pena","pensar","pen\u0303o\u0301n","peo\u0301n","peor","pepino","pequen\u0303o","pera","percha","perder","pereza","perfil","perico","perla","permiso","perro","persona","pesa","pesca","pe\u0301simo","pestan\u0303a","pe\u0301talo","petro\u0301leo","pez","pezun\u0303a","picar","picho\u0301n","pie","piedra","pierna","pieza","pijama","pilar","piloto","pimienta","pino","pintor","pinza","pin\u0303a","piojo","pipa","pirata","pisar","piscina","piso","pista","pito\u0301n","pizca","placa","plan","plata","playa","plaza","pleito","pleno","plomo","pluma","plural","pobre","poco","poder","podio","poema","poesi\u0301a","poeta","polen","polici\u0301a","pollo","polvo","pomada","pomelo","pomo","pompa","poner","porcio\u0301n","portal","posada","poseer","posible","poste","potencia","potro","pozo","prado","precoz","pregunta","premio","prensa","preso","previo","primo","pri\u0301ncipe","prisio\u0301n","privar","proa","probar","proceso","producto","proeza","profesor","programa","prole","promesa","pronto","propio","pro\u0301ximo","prueba","pu\u0301blico","puchero","pudor","pueblo","puerta","puesto","pulga","pulir","pulmo\u0301n","pulpo","pulso","puma","punto","pun\u0303al","pun\u0303o","pupa","pupila","pure\u0301","quedar","queja","quemar","querer","queso","quieto","qui\u0301mica","quince","quitar","ra\u0301bano","rabia","rabo","racio\u0301n","radical","rai\u0301z","rama","rampa","rancho","rango","rapaz","ra\u0301pido","rapto","rasgo","raspa","rato","rayo","raza","razo\u0301n","reaccio\u0301n","realidad","reban\u0303o","rebote","recaer","receta","rechazo","recoger","recreo","recto","recurso","red","redondo","reducir","reflejo","reforma","refra\u0301n","refugio","regalo","regir","regla","regreso","rehe\u0301n","reino","rei\u0301r","reja","relato","relevo","relieve","relleno","reloj","remar","remedio","remo","rencor","rendir","renta","reparto","repetir","reposo","reptil","res","rescate","resina","respeto","resto","resumen","retiro","retorno","retrato","reunir","reve\u0301s","revista","rey","rezar","rico","riego","rienda","riesgo","rifa","ri\u0301gido","rigor","rinco\u0301n","rin\u0303o\u0301n","ri\u0301o","riqueza","risa","ritmo","rito","rizo","roble","roce","rociar","rodar","rodeo","rodilla","roer","rojizo","rojo","romero","romper","ron","ronco","ronda","ropa","ropero","rosa","rosca","rostro","rotar","rubi\u0301","rubor","rudo","rueda","rugir","ruido","ruina","ruleta","rulo","rumbo","rumor","ruptura","ruta","rutina","sa\u0301bado","saber","sabio","sable","sacar","sagaz","sagrado","sala","saldo","salero","salir","salmo\u0301n","salo\u0301n","salsa","salto","salud","salvar","samba","sancio\u0301n","sandi\u0301a","sanear","sangre","sanidad","sano","santo","sapo","saque","sardina","sarte\u0301n","sastre","sata\u0301n","sauna","saxofo\u0301n","seccio\u0301n","seco","secreto","secta","sed","seguir","seis","sello","selva","semana","semilla","senda","sensor","sen\u0303al","sen\u0303or","separar","sepia","sequi\u0301a","ser","serie","sermo\u0301n","servir","sesenta","sesio\u0301n","seta","setenta","severo","sexo","sexto","sidra","siesta","siete","siglo","signo","si\u0301laba","silbar","silencio","silla","si\u0301mbolo","simio","sirena","sistema","sitio","situar","sobre","socio","sodio","sol","solapa","soldado","soledad","so\u0301lido","soltar","solucio\u0301n","sombra","sondeo","sonido","sonoro","sonrisa","sopa","soplar","soporte","sordo","sorpresa","sorteo","soste\u0301n","so\u0301tano","suave","subir","suceso","sudor","suegra","suelo","suen\u0303o","suerte","sufrir","sujeto","sulta\u0301n","sumar","superar","suplir","suponer","supremo","sur","surco","suren\u0303o","surgir","susto","sutil","tabaco","tabique","tabla","tabu\u0301","taco","tacto","tajo","talar","talco","talento","talla","talo\u0301n","taman\u0303o","tambor","tango","tanque","tapa","tapete","tapia","tapo\u0301n","taquilla","tarde","tarea","tarifa","tarjeta","tarot","tarro","tarta","tatuaje","tauro","taza","tazo\u0301n","teatro","techo","tecla","te\u0301cnica","tejado","tejer","tejido","tela","tele\u0301fono","tema","temor","templo","tenaz","tender","tener","tenis","tenso","teori\u0301a","terapia","terco","te\u0301rmino","ternura","terror","tesis","tesoro","testigo","tetera","texto","tez","tibio","tiburo\u0301n","tiempo","tienda","tierra","tieso","tigre","tijera","tilde","timbre","ti\u0301mido","timo","tinta","ti\u0301o","ti\u0301pico","tipo","tira","tiro\u0301n","tita\u0301n","ti\u0301tere","ti\u0301tulo","tiza","toalla","tobillo","tocar","tocino","todo","toga","toldo","tomar","tono","tonto","topar","tope","toque","to\u0301rax","torero","tormenta","torneo","toro","torpedo","torre","torso","tortuga","tos","tosco","toser","to\u0301xico","trabajo","tractor","traer","tra\u0301fico","trago","traje","tramo","trance","trato","trauma","trazar","tre\u0301bol","tregua","treinta","tren","trepar","tres","tribu","trigo","tripa","triste","triunfo","trofeo","trompa","tronco","tropa","trote","trozo","truco","trueno","trufa","tuberi\u0301a","tubo","tuerto","tumba","tumor","tu\u0301nel","tu\u0301nica","turbina","turismo","turno","tutor","ubicar","u\u0301lcera","umbral","unidad","unir","universo","uno","untar","un\u0303a","urbano","urbe","urgente","urna","usar","usuario","u\u0301til","utopi\u0301a","uva","vaca","vaci\u0301o","vacuna","vagar","vago","vaina","vajilla","vale","va\u0301lido","valle","valor","va\u0301lvula","vampiro","vara","variar","varo\u0301n","vaso","vecino","vector","vehi\u0301culo","veinte","vejez","vela","velero","veloz","vena","vencer","venda","veneno","vengar","venir","venta","venus","ver","verano","verbo","verde","vereda","verja","verso","verter","vi\u0301a","viaje","vibrar","vicio","vi\u0301ctima","vida","vi\u0301deo","vidrio","viejo","viernes","vigor","vil","villa","vinagre","vino","vin\u0303edo","violi\u0301n","viral","virgo","virtud","visor","vi\u0301spera","vista","vitamina","viudo","vivaz","vivero","vivir","vivo","volca\u0301n","volumen","volver","voraz","votar","voto","voz","vuelo","vulgar","yacer","yate","yegua","yema","yerno","yeso","yodo","yoga","yogur","zafiro","zanja","zapato","zarza","zona","zorro","zumo","zurdo"]'), Hs = JSON.parse('["\u3042\u3044\u3053\u304F\u3057\u3093","\u3042\u3044\u3055\u3064","\u3042\u3044\u305F\u3099","\u3042\u304A\u305D\u3099\u3089","\u3042\u304B\u3061\u3083\u3093","\u3042\u304D\u308B","\u3042\u3051\u304B\u3099\u305F","\u3042\u3051\u308B","\u3042\u3053\u304B\u3099\u308C\u308B","\u3042\u3055\u3044","\u3042\u3055\u3072","\u3042\u3057\u3042\u3068","\u3042\u3057\u3099\u308F\u3046","\u3042\u3059\u3099\u304B\u308B","\u3042\u3059\u3099\u304D","\u3042\u305D\u3075\u3099","\u3042\u305F\u3048\u308B","\u3042\u305F\u305F\u3081\u308B","\u3042\u305F\u308A\u307E\u3048","\u3042\u305F\u308B","\u3042\u3064\u3044","\u3042\u3064\u304B\u3046","\u3042\u3063\u3057\u3085\u304F","\u3042\u3064\u307E\u308A","\u3042\u3064\u3081\u308B","\u3042\u3066\u306A","\u3042\u3066\u306F\u307E\u308B","\u3042\u3072\u308B","\u3042\u3075\u3099\u3089","\u3042\u3075\u3099\u308B","\u3042\u3075\u308C\u308B","\u3042\u307E\u3044","\u3042\u307E\u3068\u3099","\u3042\u307E\u3084\u304B\u3059","\u3042\u307E\u308A","\u3042\u307F\u3082\u306E","\u3042\u3081\u308A\u304B","\u3042\u3084\u307E\u308B","\u3042\u3086\u3080","\u3042\u3089\u3044\u304F\u3099\u307E","\u3042\u3089\u3057","\u3042\u3089\u3059\u3057\u3099","\u3042\u3089\u305F\u3081\u308B","\u3042\u3089\u3086\u308B","\u3042\u3089\u308F\u3059","\u3042\u308A\u304B\u3099\u3068\u3046","\u3042\u308F\u305B\u308B","\u3042\u308F\u3066\u308B","\u3042\u3093\u3044","\u3042\u3093\u304B\u3099\u3044","\u3042\u3093\u3053","\u3042\u3093\u305B\u3099\u3093","\u3042\u3093\u3066\u3044","\u3042\u3093\u306A\u3044","\u3042\u3093\u307E\u308A","\u3044\u3044\u305F\u3099\u3059","\u3044\u304A\u3093","\u3044\u304B\u3099\u3044","\u3044\u304B\u3099\u304F","\u3044\u304D\u304A\u3044","\u3044\u304D\u306A\u308A","\u3044\u304D\u3082\u306E","\u3044\u304D\u308B","\u3044\u304F\u3057\u3099","\u3044\u304F\u3075\u3099\u3093","\u3044\u3051\u306F\u3099\u306A","\u3044\u3051\u3093","\u3044\u3053\u3046","\u3044\u3053\u304F","\u3044\u3053\u3064","\u3044\u3055\u307E\u3057\u3044","\u3044\u3055\u3093","\u3044\u3057\u304D","\u3044\u3057\u3099\u3085\u3046","\u3044\u3057\u3099\u3087\u3046","\u3044\u3057\u3099\u308F\u308B","\u3044\u3059\u3099\u307F","\u3044\u3059\u3099\u308C","\u3044\u305B\u3044","\u3044\u305B\u3048\u3072\u3099","\u3044\u305B\u304B\u3044","\u3044\u305B\u304D","\u3044\u305B\u3099\u3093","\u3044\u305D\u3046\u308D\u3046","\u3044\u305D\u304B\u3099\u3057\u3044","\u3044\u305F\u3099\u3044","\u3044\u305F\u3099\u304F","\u3044\u305F\u3059\u3099\u3089","\u3044\u305F\u307F","\u3044\u305F\u308A\u3042","\u3044\u3061\u304A\u3046","\u3044\u3061\u3057\u3099","\u3044\u3061\u3068\u3099","\u3044\u3061\u306F\u3099","\u3044\u3061\u3075\u3099","\u3044\u3061\u308A\u3085\u3046","\u3044\u3064\u304B","\u3044\u3063\u3057\u3085\u3093","\u3044\u3063\u305B\u3044","\u3044\u3063\u305D\u3046","\u3044\u3063\u305F\u3093","\u3044\u3063\u3061","\u3044\u3063\u3066\u3044","\u3044\u3063\u307B\u309A\u3046","\u3044\u3066\u3055\u3099","\u3044\u3066\u3093","\u3044\u3068\u3099\u3046","\u3044\u3068\u3053","\u3044\u306A\u3044","\u3044\u306A\u304B","\u3044\u306D\u3080\u308A","\u3044\u306E\u3061","\u3044\u306E\u308B","\u3044\u306F\u3064","\u3044\u306F\u3099\u308B","\u3044\u306F\u3093","\u3044\u3072\u3099\u304D","\u3044\u3072\u3093","\u3044\u3075\u304F","\u3044\u3078\u3093","\u3044\u307B\u3046","\u3044\u307F\u3093","\u3044\u3082\u3046\u3068","\u3044\u3082\u305F\u308C","\u3044\u3082\u308A","\u3044\u3084\u304B\u3099\u308B","\u3044\u3084\u3059","\u3044\u3088\u304B\u3093","\u3044\u3088\u304F","\u3044\u3089\u3044","\u3044\u3089\u3059\u3068","\u3044\u308A\u304F\u3099\u3061","\u3044\u308A\u3087\u3046","\u3044\u308C\u3044","\u3044\u308C\u3082\u306E","\u3044\u308C\u308B","\u3044\u308D\u3048\u3093\u3072\u309A\u3064","\u3044\u308F\u3044","\u3044\u308F\u3046","\u3044\u308F\u304B\u3093","\u3044\u308F\u306F\u3099","\u3044\u308F\u3086\u308B","\u3044\u3093\u3051\u3099\u3093\u307E\u3081","\u3044\u3093\u3055\u3064","\u3044\u3093\u3057\u3087\u3046","\u3044\u3093\u3088\u3046","\u3046\u3048\u304D","\u3046\u3048\u308B","\u3046\u304A\u3055\u3099","\u3046\u304B\u3099\u3044","\u3046\u304B\u3075\u3099","\u3046\u304B\u3078\u3099\u308B","\u3046\u304D\u308F","\u3046\u304F\u3089\u3044\u306A","\u3046\u304F\u308C\u308C","\u3046\u3051\u305F\u307E\u308F\u308B","\u3046\u3051\u3064\u3051","\u3046\u3051\u3068\u308B","\u3046\u3051\u3082\u3064","\u3046\u3051\u308B","\u3046\u3053\u3099\u304B\u3059","\u3046\u3053\u3099\u304F","\u3046\u3053\u3093","\u3046\u3055\u304D\u3099","\u3046\u3057\u306A\u3046","\u3046\u3057\u308D\u304B\u3099\u307F","\u3046\u3059\u3044","\u3046\u3059\u304D\u3099","\u3046\u3059\u304F\u3099\u3089\u3044","\u3046\u3059\u3081\u308B","\u3046\u305B\u3064","\u3046\u3061\u3042\u308F\u305B","\u3046\u3061\u304B\u3099\u308F","\u3046\u3061\u304D","\u3046\u3061\u3085\u3046","\u3046\u3063\u304B\u308A","\u3046\u3064\u304F\u3057\u3044","\u3046\u3063\u305F\u3048\u308B","\u3046\u3064\u308B","\u3046\u3068\u3099\u3093","\u3046\u306A\u304D\u3099","\u3046\u306A\u3057\u3099","\u3046\u306A\u3059\u3099\u304F","\u3046\u306A\u308B","\u3046\u306D\u308B","\u3046\u306E\u3046","\u3046\u3075\u3099\u3051\u3099","\u3046\u3075\u3099\u3053\u3099\u3048","\u3046\u307E\u308C\u308B","\u3046\u3081\u308B","\u3046\u3082\u3046","\u3046\u3084\u307E\u3046","\u3046\u3088\u304F","\u3046\u3089\u304B\u3099\u3048\u3059","\u3046\u3089\u304F\u3099\u3061","\u3046\u3089\u306A\u3044","\u3046\u308A\u3042\u3051\u3099","\u3046\u308A\u304D\u308C","\u3046\u308B\u3055\u3044","\u3046\u308C\u3057\u3044","\u3046\u308C\u3086\u304D","\u3046\u308C\u308B","\u3046\u308D\u3053","\u3046\u308F\u304D","\u3046\u308F\u3055","\u3046\u3093\u3053\u3046","\u3046\u3093\u3061\u3093","\u3046\u3093\u3066\u3093","\u3046\u3093\u3068\u3099\u3046","\u3048\u3044\u3048\u3093","\u3048\u3044\u304B\u3099","\u3048\u3044\u304D\u3087\u3046","\u3048\u3044\u3053\u3099","\u3048\u3044\u305B\u3044","\u3048\u3044\u3075\u3099\u3093","\u3048\u3044\u3088\u3046","\u3048\u3044\u308F","\u3048\u304A\u308A","\u3048\u304B\u3099\u304A","\u3048\u304B\u3099\u304F","\u3048\u304D\u305F\u3044","\u3048\u304F\u305B\u308B","\u3048\u3057\u3083\u304F","\u3048\u3059\u3066","\u3048\u3064\u3089\u3093","\u3048\u306E\u304F\u3099","\u3048\u307B\u3046\u307E\u304D","\u3048\u307B\u3093","\u3048\u307E\u304D","\u3048\u3082\u3057\u3099","\u3048\u3082\u306E","\u3048\u3089\u3044","\u3048\u3089\u3075\u3099","\u3048\u308A\u3042","\u3048\u3093\u3048\u3093","\u3048\u3093\u304B\u3044","\u3048\u3093\u304D\u3099","\u3048\u3093\u3051\u3099\u304D","\u3048\u3093\u3057\u3085\u3046","\u3048\u3093\u305B\u3099\u3064","\u3048\u3093\u305D\u304F","\u3048\u3093\u3061\u3087\u3046","\u3048\u3093\u3068\u3064","\u304A\u3044\u304B\u3051\u308B","\u304A\u3044\u3053\u3059","\u304A\u3044\u3057\u3044","\u304A\u3044\u3064\u304F","\u304A\u3046\u3048\u3093","\u304A\u3046\u3055\u307E","\u304A\u3046\u3057\u3099","\u304A\u3046\u305B\u3064","\u304A\u3046\u305F\u3044","\u304A\u3046\u3075\u304F","\u304A\u3046\u3078\u3099\u3044","\u304A\u3046\u3088\u3046","\u304A\u3048\u308B","\u304A\u304A\u3044","\u304A\u304A\u3046","\u304A\u304A\u3068\u3099\u304A\u308A","\u304A\u304A\u3084","\u304A\u304A\u3088\u305D","\u304A\u304B\u3048\u308A","\u304A\u304B\u3059\u3099","\u304A\u304B\u3099\u3080","\u304A\u304B\u308F\u308A","\u304A\u304D\u3099\u306A\u3046","\u304A\u304D\u308B","\u304A\u304F\u3055\u307E","\u304A\u304F\u3057\u3099\u3087\u3046","\u304A\u304F\u308A\u304B\u3099\u306A","\u304A\u304F\u308B","\u304A\u304F\u308C\u308B","\u304A\u3053\u3059","\u304A\u3053\u306A\u3046","\u304A\u3053\u308B","\u304A\u3055\u3048\u308B","\u304A\u3055\u306A\u3044","\u304A\u3055\u3081\u308B","\u304A\u3057\u3044\u308C","\u304A\u3057\u3048\u308B","\u304A\u3057\u3099\u304D\u3099","\u304A\u3057\u3099\u3055\u3093","\u304A\u3057\u3083\u308C","\u304A\u305D\u3089\u304F","\u304A\u305D\u308F\u308B","\u304A\u305F\u304B\u3099\u3044","\u304A\u305F\u304F","\u304A\u305F\u3099\u3084\u304B","\u304A\u3061\u3064\u304F","\u304A\u3063\u3068","\u304A\u3064\u308A","\u304A\u3066\u3099\u304B\u3051","\u304A\u3068\u3057\u3082\u306E","\u304A\u3068\u306A\u3057\u3044","\u304A\u3068\u3099\u308A","\u304A\u3068\u3099\u308D\u304B\u3059","\u304A\u306F\u3099\u3055\u3093","\u304A\u307E\u3044\u308A","\u304A\u3081\u3066\u3099\u3068\u3046","\u304A\u3082\u3044\u3066\u3099","\u304A\u3082\u3046","\u304A\u3082\u305F\u3044","\u304A\u3082\u3061\u3083","\u304A\u3084\u3064","\u304A\u3084\u3086\u3072\u3099","\u304A\u3088\u307B\u3099\u3059","\u304A\u3089\u3093\u305F\u3099","\u304A\u308D\u3059","\u304A\u3093\u304B\u3099\u304F","\u304A\u3093\u3051\u3044","\u304A\u3093\u3057\u3083","\u304A\u3093\u305B\u3093","\u304A\u3093\u305F\u3099\u3093","\u304A\u3093\u3061\u3085\u3046","\u304A\u3093\u3068\u3099\u3051\u3044","\u304B\u3042\u3064","\u304B\u3044\u304B\u3099","\u304B\u3099\u3044\u304D","\u304B\u3099\u3044\u3051\u3093","\u304B\u3099\u3044\u3053\u3046","\u304B\u3044\u3055\u3064","\u304B\u3044\u3057\u3083","\u304B\u3044\u3059\u3044\u3088\u304F","\u304B\u3044\u305B\u3099\u3093","\u304B\u3044\u305D\u3099\u3046\u3068\u3099","\u304B\u3044\u3064\u3046","\u304B\u3044\u3066\u3093","\u304B\u3044\u3068\u3046","\u304B\u3044\u3075\u304F","\u304B\u3099\u3044\u3078\u304D","\u304B\u3044\u307B\u3046","\u304B\u3044\u3088\u3046","\u304B\u3099\u3044\u3089\u3044","\u304B\u3044\u308F","\u304B\u3048\u308B","\u304B\u304A\u308A","\u304B\u304B\u3048\u308B","\u304B\u304B\u3099\u304F","\u304B\u304B\u3099\u3057","\u304B\u304B\u3099\u307F","\u304B\u304F\u3053\u3099","\u304B\u304F\u3068\u304F","\u304B\u3055\u3099\u308B","\u304B\u3099\u305D\u3099\u3046","\u304B\u305F\u3044","\u304B\u305F\u3061","\u304B\u3099\u3061\u3087\u3046","\u304B\u3099\u3063\u304D\u3085\u3046","\u304B\u3099\u3063\u3053\u3046","\u304B\u3099\u3063\u3055\u3093","\u304B\u3099\u3063\u3057\u3087\u3046","\u304B\u306A\u3055\u3099\u308F\u3057","\u304B\u306E\u3046","\u304B\u3099\u306F\u304F","\u304B\u3075\u3099\u304B","\u304B\u307B\u3046","\u304B\u307B\u3053\u3099","\u304B\u307E\u3046","\u304B\u307E\u307B\u3099\u3053","\u304B\u3081\u308C\u304A\u3093","\u304B\u3086\u3044","\u304B\u3088\u3046\u3072\u3099","\u304B\u3089\u3044","\u304B\u308B\u3044","\u304B\u308D\u3046","\u304B\u308F\u304F","\u304B\u308F\u3089","\u304B\u3099\u3093\u304B","\u304B\u3093\u3051\u3044","\u304B\u3093\u3053\u3046","\u304B\u3093\u3057\u3083","\u304B\u3093\u305D\u3046","\u304B\u3093\u305F\u3093","\u304B\u3093\u3061","\u304B\u3099\u3093\u306F\u3099\u308B","\u304D\u3042\u3044","\u304D\u3042\u3064","\u304D\u3044\u308D","\u304D\u3099\u3044\u3093","\u304D\u3046\u3044","\u304D\u3046\u3093","\u304D\u3048\u308B","\u304D\u304A\u3046","\u304D\u304A\u304F","\u304D\u304A\u3061","\u304D\u304A\u3093","\u304D\u304B\u3044","\u304D\u304B\u304F","\u304D\u304B\u3093\u3057\u3083","\u304D\u304D\u3066","\u304D\u304F\u306F\u3099\u308A","\u304D\u304F\u3089\u3051\u3099","\u304D\u3051\u3093\u305B\u3044","\u304D\u3053\u3046","\u304D\u3053\u3048\u308B","\u304D\u3053\u304F","\u304D\u3055\u3044","\u304D\u3055\u304F","\u304D\u3055\u307E","\u304D\u3055\u3089\u304D\u3099","\u304D\u3099\u3057\u3099\u304B\u304B\u3099\u304F","\u304D\u3099\u3057\u304D","\u304D\u3099\u3057\u3099\u305F\u3044\u3051\u3093","\u304D\u3099\u3057\u3099\u306B\u3063\u3066\u3044","\u304D\u3099\u3057\u3099\u3085\u3064\u3057\u3083","\u304D\u3059\u3046","\u304D\u305B\u3044","\u304D\u305B\u304D","\u304D\u305B\u3064","\u304D\u305D\u3046","\u304D\u305D\u3099\u304F","\u304D\u305D\u3099\u3093","\u304D\u305F\u3048\u308B","\u304D\u3061\u3087\u3046","\u304D\u3064\u3048\u3093","\u304D\u3099\u3063\u3061\u308A","\u304D\u3064\u3064\u304D","\u304D\u3064\u306D","\u304D\u3066\u3044","\u304D\u3068\u3099\u3046","\u304D\u3068\u3099\u304F","\u304D\u306A\u3044","\u304D\u306A\u304B\u3099","\u304D\u306A\u3053","\u304D\u306C\u3053\u3099\u3057","\u304D\u306D\u3093","\u304D\u306E\u3046","\u304D\u306E\u3057\u305F","\u304D\u306F\u304F","\u304D\u3072\u3099\u3057\u3044","\u304D\u3072\u3093","\u304D\u3075\u304F","\u304D\u3075\u3099\u3093","\u304D\u307B\u3099\u3046","\u304D\u307B\u3093","\u304D\u307E\u308B","\u304D\u307F\u3064","\u304D\u3080\u3059\u3099\u304B\u3057\u3044","\u304D\u3081\u308B","\u304D\u3082\u305F\u3099\u3081\u3057","\u304D\u3082\u3061","\u304D\u3082\u306E","\u304D\u3083\u304F","\u304D\u3084\u304F","\u304D\u3099\u3085\u3046\u306B\u304F","\u304D\u3088\u3046","\u304D\u3087\u3046\u308A\u3085\u3046","\u304D\u3089\u3044","\u304D\u3089\u304F","\u304D\u308A\u3093","\u304D\u308C\u3044","\u304D\u308C\u3064","\u304D\u308D\u304F","\u304D\u3099\u308D\u3093","\u304D\u308F\u3081\u308B","\u304D\u3099\u3093\u3044\u308D","\u304D\u3093\u304B\u304F\u3057\u3099","\u304D\u3093\u3057\u3099\u3087","\u304D\u3093\u3088\u3046\u3072\u3099","\u304F\u3099\u3042\u3044","\u304F\u3044\u3059\u3099","\u304F\u3046\u304B\u3093","\u304F\u3046\u304D","\u304F\u3046\u304F\u3099\u3093","\u304F\u3046\u3053\u3046","\u304F\u3099\u3046\u305B\u3044","\u304F\u3046\u305D\u3046","\u304F\u3099\u3046\u305F\u3089","\u304F\u3046\u3075\u304F","\u304F\u3046\u307B\u3099","\u304F\u304B\u3093","\u304F\u304D\u3087\u3046","\u304F\u3051\u3099\u3093","\u304F\u3099\u3053\u3046","\u304F\u3055\u3044","\u304F\u3055\u304D","\u304F\u3055\u306F\u3099\u306A","\u304F\u3055\u308B","\u304F\u3057\u3083\u307F","\u304F\u3057\u3087\u3046","\u304F\u3059\u306E\u304D","\u304F\u3059\u308A\u3086\u3072\u3099","\u304F\u305B\u3051\u3099","\u304F\u305B\u3093","\u304F\u3099\u305F\u3044\u3066\u304D","\u304F\u305F\u3099\u3055\u308B","\u304F\u305F\u3072\u3099\u308C\u308B","\u304F\u3061\u3053\u307F","\u304F\u3061\u3055\u304D","\u304F\u3064\u3057\u305F","\u304F\u3099\u3063\u3059\u308A","\u304F\u3064\u308D\u304F\u3099","\u304F\u3068\u3046\u3066\u3093","\u304F\u3068\u3099\u304F","\u304F\u306A\u3093","\u304F\u306D\u304F\u306D","\u304F\u306E\u3046","\u304F\u3075\u3046","\u304F\u307F\u3042\u308F\u305B","\u304F\u307F\u305F\u3066\u308B","\u304F\u3081\u308B","\u304F\u3084\u304F\u3057\u3087","\u304F\u3089\u3059","\u304F\u3089\u3078\u3099\u308B","\u304F\u308B\u307E","\u304F\u308C\u308B","\u304F\u308D\u3046","\u304F\u308F\u3057\u3044","\u304F\u3099\u3093\u304B\u3093","\u304F\u3099\u3093\u3057\u3087\u304F","\u304F\u3099\u3093\u305F\u3044","\u304F\u3099\u3093\u3066","\u3051\u3042\u306A","\u3051\u3044\u304B\u304F","\u3051\u3044\u3051\u3093","\u3051\u3044\u3053","\u3051\u3044\u3055\u3064","\u3051\u3099\u3044\u3057\u3099\u3085\u3064","\u3051\u3044\u305F\u3044","\u3051\u3099\u3044\u306E\u3046\u3057\u3099\u3093","\u3051\u3044\u308C\u304D","\u3051\u3044\u308D","\u3051\u304A\u3068\u3059","\u3051\u304A\u308A\u3082\u306E","\u3051\u3099\u304D\u304B","\u3051\u3099\u304D\u3051\u3099\u3093","\u3051\u3099\u304D\u305F\u3099\u3093","\u3051\u3099\u304D\u3061\u3093","\u3051\u3099\u304D\u3068\u3064","\u3051\u3099\u304D\u306F","\u3051\u3099\u304D\u3084\u304F","\u3051\u3099\u3053\u3046","\u3051\u3099\u3053\u304F\u3057\u3099\u3087\u3046","\u3051\u3099\u3055\u3099\u3044","\u3051\u3055\u304D","\u3051\u3099\u3055\u3099\u3093","\u3051\u3057\u304D","\u3051\u3057\u3053\u3099\u3080","\u3051\u3057\u3087\u3046","\u3051\u3099\u3059\u3068","\u3051\u305F\u306F\u3099","\u3051\u3061\u3083\u3063\u3075\u309A","\u3051\u3061\u3089\u3059","\u3051\u3064\u3042\u3064","\u3051\u3064\u3044","\u3051\u3064\u3048\u304D","\u3051\u3063\u3053\u3093","\u3051\u3064\u3057\u3099\u3087","\u3051\u3063\u305B\u304D","\u3051\u3063\u3066\u3044","\u3051\u3064\u307E\u3064","\u3051\u3099\u3064\u3088\u3046\u3072\u3099","\u3051\u3099\u3064\u308C\u3044","\u3051\u3064\u308D\u3093","\u3051\u3099\u3068\u3099\u304F","\u3051\u3068\u306F\u3099\u3059","\u3051\u3068\u308B","\u3051\u306A\u3051\u3099","\u3051\u306A\u3059","\u3051\u306A\u307F","\u3051\u306C\u304D","\u3051\u3099\u306D\u3064","\u3051\u306D\u3093","\u3051\u306F\u3044","\u3051\u3099\u3072\u3093","\u3051\u3075\u3099\u304B\u3044","\u3051\u3099\u307B\u3099\u304F","\u3051\u307E\u308A","\u3051\u307F\u304B\u308B","\u3051\u3080\u3057","\u3051\u3080\u308A","\u3051\u3082\u306E","\u3051\u3089\u3044","\u3051\u308D\u3051\u308D","\u3051\u308F\u3057\u3044","\u3051\u3093\u3044","\u3051\u3093\u3048\u3064","\u3051\u3093\u304A","\u3051\u3093\u304B","\u3051\u3099\u3093\u304D","\u3051\u3093\u3051\u3099\u3093","\u3051\u3093\u3053\u3046","\u3051\u3093\u3055\u304F","\u3051\u3093\u3057\u3085\u3046","\u3051\u3093\u3059\u3046","\u3051\u3099\u3093\u305D\u3046","\u3051\u3093\u3061\u304F","\u3051\u3093\u3066\u3044","\u3051\u3093\u3068\u3046","\u3051\u3093\u306A\u3044","\u3051\u3093\u306B\u3093","\u3051\u3099\u3093\u3075\u3099\u3064","\u3051\u3093\u307E","\u3051\u3093\u307F\u3093","\u3051\u3093\u3081\u3044","\u3051\u3093\u3089\u3093","\u3051\u3093\u308A","\u3053\u3042\u304F\u307E","\u3053\u3044\u306C","\u3053\u3044\u3072\u3099\u3068","\u3053\u3099\u3046\u3044","\u3053\u3046\u3048\u3093","\u3053\u3046\u304A\u3093","\u3053\u3046\u304B\u3093","\u3053\u3099\u3046\u304D\u3085\u3046","\u3053\u3099\u3046\u3051\u3044","\u3053\u3046\u3053\u3046","\u3053\u3046\u3055\u3044","\u3053\u3046\u3057\u3099","\u3053\u3046\u3059\u3044","\u3053\u3099\u3046\u305B\u3044","\u3053\u3046\u305D\u304F","\u3053\u3046\u305F\u3044","\u3053\u3046\u3061\u3083","\u3053\u3046\u3064\u3046","\u3053\u3046\u3066\u3044","\u3053\u3046\u3068\u3099\u3046","\u3053\u3046\u306A\u3044","\u3053\u3046\u306F\u3044","\u3053\u3099\u3046\u307B\u3046","\u3053\u3099\u3046\u307E\u3093","\u3053\u3046\u3082\u304F","\u3053\u3046\u308A\u3064","\u3053\u3048\u308B","\u3053\u304A\u308A","\u3053\u3099\u304B\u3044","\u3053\u3099\u304B\u3099\u3064","\u3053\u3099\u304B\u3093","\u3053\u304F\u3053\u3099","\u3053\u304F\u3055\u3044","\u3053\u304F\u3068\u3046","\u3053\u304F\u306A\u3044","\u3053\u304F\u306F\u304F","\u3053\u304F\u3099\u307E","\u3053\u3051\u3044","\u3053\u3051\u308B","\u3053\u3053\u306E\u304B","\u3053\u3053\u308D","\u3053\u3055\u3081","\u3053\u3057\u3064","\u3053\u3059\u3046","\u3053\u305B\u3044","\u3053\u305B\u304D","\u3053\u305B\u3099\u3093","\u3053\u305D\u305F\u3099\u3066","\u3053\u305F\u3044","\u3053\u305F\u3048\u308B","\u3053\u305F\u3064","\u3053\u3061\u3087\u3046","\u3053\u3063\u304B","\u3053\u3064\u3053\u3064","\u3053\u3064\u306F\u3099\u3093","\u3053\u3064\u3075\u3099","\u3053\u3066\u3044","\u3053\u3066\u3093","\u3053\u3068\u304B\u3099\u3089","\u3053\u3068\u3057","\u3053\u3068\u306F\u3099","\u3053\u3068\u308A","\u3053\u306A\u3053\u3099\u306A","\u3053\u306D\u3053\u306D","\u3053\u306E\u307E\u307E","\u3053\u306E\u307F","\u3053\u306E\u3088","\u3053\u3099\u306F\u3093","\u3053\u3072\u3064\u3057\u3099","\u3053\u3075\u3046","\u3053\u3075\u3093","\u3053\u307B\u3099\u308C\u308B","\u3053\u3099\u307E\u3042\u3075\u3099\u3089","\u3053\u307E\u304B\u3044","\u3053\u3099\u307E\u3059\u308A","\u3053\u307E\u3064\u306A","\u3053\u307E\u308B","\u3053\u3080\u304D\u3099\u3053","\u3053\u3082\u3057\u3099","\u3053\u3082\u3061","\u3053\u3082\u306E","\u3053\u3082\u3093","\u3053\u3084\u304F","\u3053\u3084\u307E","\u3053\u3086\u3046","\u3053\u3086\u3072\u3099","\u3053\u3088\u3044","\u3053\u3088\u3046","\u3053\u308A\u308B","\u3053\u308C\u304F\u3057\u3087\u3093","\u3053\u308D\u3063\u3051","\u3053\u308F\u3082\u3066","\u3053\u308F\u308C\u308B","\u3053\u3093\u3044\u3093","\u3053\u3093\u304B\u3044","\u3053\u3093\u304D","\u3053\u3093\u3057\u3085\u3046","\u3053\u3093\u3059\u3044","\u3053\u3093\u305F\u3099\u3066","\u3053\u3093\u3068\u3093","\u3053\u3093\u306A\u3093","\u3053\u3093\u3072\u3099\u306B","\u3053\u3093\u307B\u309A\u3093","\u3053\u3093\u307E\u3051","\u3053\u3093\u3084","\u3053\u3093\u308C\u3044","\u3053\u3093\u308F\u304F","\u3055\u3099\u3044\u3048\u304D","\u3055\u3044\u304B\u3044","\u3055\u3044\u304D\u3093","\u3055\u3099\u3044\u3051\u3099\u3093","\u3055\u3099\u3044\u3053","\u3055\u3044\u3057\u3087","\u3055\u3044\u305B\u3044","\u3055\u3099\u3044\u305F\u304F","\u3055\u3099\u3044\u3061\u3085\u3046","\u3055\u3044\u3066\u304D","\u3055\u3099\u3044\u308A\u3087\u3046","\u3055\u3046\u306A","\u3055\u304B\u3044\u3057","\u3055\u304B\u3099\u3059","\u3055\u304B\u306A","\u3055\u304B\u307F\u3061","\u3055\u304B\u3099\u308B","\u3055\u304D\u3099\u3087\u3046","\u3055\u304F\u3057","\u3055\u304F\u3072\u3093","\u3055\u304F\u3089","\u3055\u3053\u304F","\u3055\u3053\u3064","\u3055\u3059\u3099\u304B\u308B","\u3055\u3099\u305B\u304D","\u3055\u305F\u3093","\u3055\u3064\u3048\u3044","\u3055\u3099\u3064\u304A\u3093","\u3055\u3099\u3063\u304B","\u3055\u3099\u3064\u304B\u3099\u304F","\u3055\u3063\u304D\u3087\u304F","\u3055\u3099\u3063\u3057","\u3055\u3064\u3057\u3099\u3093","\u3055\u3099\u3063\u305D\u3046","\u3055\u3064\u305F\u306F\u3099","\u3055\u3064\u307E\u3044\u3082","\u3055\u3066\u3044","\u3055\u3068\u3044\u3082","\u3055\u3068\u3046","\u3055\u3068\u304A\u3084","\u3055\u3068\u3057","\u3055\u3068\u308B","\u3055\u306E\u3046","\u3055\u306F\u3099\u304F","\u3055\u3072\u3099\u3057\u3044","\u3055\u3078\u3099\u3064","\u3055\u307B\u3046","\u3055\u307B\u3068\u3099","\u3055\u307E\u3059","\u3055\u307F\u3057\u3044","\u3055\u307F\u305F\u3099\u308C","\u3055\u3080\u3051","\u3055\u3081\u308B","\u3055\u3084\u3048\u3093\u3068\u3099\u3046","\u3055\u3086\u3046","\u3055\u3088\u3046","\u3055\u3088\u304F","\u3055\u3089\u305F\u3099","\u3055\u3099\u308B\u305D\u306F\u3099","\u3055\u308F\u3084\u304B","\u3055\u308F\u308B","\u3055\u3093\u3044\u3093","\u3055\u3093\u304B","\u3055\u3093\u304D\u3083\u304F","\u3055\u3093\u3053\u3046","\u3055\u3093\u3055\u3044","\u3055\u3099\u3093\u3057\u3087","\u3055\u3093\u3059\u3046","\u3055\u3093\u305B\u3044","\u3055\u3093\u305D","\u3055\u3093\u3061","\u3055\u3093\u307E","\u3055\u3093\u307F","\u3055\u3093\u3089\u3093","\u3057\u3042\u3044","\u3057\u3042\u3051\u3099","\u3057\u3042\u3055\u3063\u3066","\u3057\u3042\u308F\u305B","\u3057\u3044\u304F","\u3057\u3044\u3093","\u3057\u3046\u3061","\u3057\u3048\u3044","\u3057\u304A\u3051","\u3057\u304B\u3044","\u3057\u304B\u304F","\u3057\u3099\u304B\u3093","\u3057\u3053\u3099\u3068","\u3057\u3059\u3046","\u3057\u3099\u305F\u3099\u3044","\u3057\u305F\u3046\u3051","\u3057\u305F\u304D\u3099","\u3057\u305F\u3066","\u3057\u305F\u307F","\u3057\u3061\u3087\u3046","\u3057\u3061\u308A\u3093","\u3057\u3063\u304B\u308A","\u3057\u3064\u3057\u3099","\u3057\u3064\u3082\u3093","\u3057\u3066\u3044","\u3057\u3066\u304D","\u3057\u3066\u3064","\u3057\u3099\u3066\u3093","\u3057\u3099\u3068\u3099\u3046","\u3057\u306A\u304D\u3099\u308C","\u3057\u306A\u3082\u306E","\u3057\u306A\u3093","\u3057\u306D\u307E","\u3057\u306D\u3093","\u3057\u306E\u304F\u3099","\u3057\u306E\u3075\u3099","\u3057\u306F\u3044","\u3057\u306F\u3099\u304B\u308A","\u3057\u306F\u3064","\u3057\u306F\u3089\u3044","\u3057\u306F\u3093","\u3057\u3072\u3087\u3046","\u3057\u3075\u304F","\u3057\u3099\u3075\u3099\u3093","\u3057\u3078\u3044","\u3057\u307B\u3046","\u3057\u307B\u3093","\u3057\u307E\u3046","\u3057\u307E\u308B","\u3057\u307F\u3093","\u3057\u3080\u3051\u308B","\u3057\u3099\u3080\u3057\u3087","\u3057\u3081\u3044","\u3057\u3081\u308B","\u3057\u3082\u3093","\u3057\u3083\u3044\u3093","\u3057\u3083\u3046\u3093","\u3057\u3083\u304A\u3093","\u3057\u3099\u3083\u304B\u3099\u3044\u3082","\u3057\u3084\u304F\u3057\u3087","\u3057\u3083\u304F\u307B\u3046","\u3057\u3083\u3051\u3093","\u3057\u3083\u3053","\u3057\u3083\u3055\u3099\u3044","\u3057\u3083\u3057\u3093","\u3057\u3083\u305B\u3093","\u3057\u3083\u305D\u3046","\u3057\u3083\u305F\u3044","\u3057\u3083\u3061\u3087\u3046","\u3057\u3083\u3063\u304D\u3093","\u3057\u3099\u3083\u307E","\u3057\u3083\u308A\u3093","\u3057\u3083\u308C\u3044","\u3057\u3099\u3086\u3046","\u3057\u3099\u3085\u3046\u3057\u3087","\u3057\u3085\u304F\u306F\u304F","\u3057\u3099\u3085\u3057\u3093","\u3057\u3085\u3063\u305B\u304D","\u3057\u3085\u307F","\u3057\u3085\u3089\u306F\u3099","\u3057\u3099\u3085\u3093\u306F\u3099\u3093","\u3057\u3087\u3046\u304B\u3044","\u3057\u3087\u304F\u305F\u304F","\u3057\u3087\u3063\u3051\u3093","\u3057\u3087\u3068\u3099\u3046","\u3057\u3087\u3082\u3064","\u3057\u3089\u305B\u308B","\u3057\u3089\u3078\u3099\u308B","\u3057\u3093\u304B","\u3057\u3093\u3053\u3046","\u3057\u3099\u3093\u3057\u3099\u3083","\u3057\u3093\u305B\u3044\u3057\u3099","\u3057\u3093\u3061\u304F","\u3057\u3093\u308A\u3093","\u3059\u3042\u3051\u3099","\u3059\u3042\u3057","\u3059\u3042\u306A","\u3059\u3099\u3042\u3093","\u3059\u3044\u3048\u3044","\u3059\u3044\u304B","\u3059\u3044\u3068\u3046","\u3059\u3099\u3044\u3075\u3099\u3093","\u3059\u3044\u3088\u3046\u3072\u3099","\u3059\u3046\u304B\u3099\u304F","\u3059\u3046\u3057\u3099\u3064","\u3059\u3046\u305B\u3093","\u3059\u304A\u3068\u3099\u308A","\u3059\u304D\u307E","\u3059\u304F\u3046","\u3059\u304F\u306A\u3044","\u3059\u3051\u308B","\u3059\u3053\u3099\u3044","\u3059\u3053\u3057","\u3059\u3099\u3055\u3093","\u3059\u3059\u3099\u3057\u3044","\u3059\u3059\u3080","\u3059\u3059\u3081\u308B","\u3059\u3063\u304B\u308A","\u3059\u3099\u3063\u3057\u308A","\u3059\u3099\u3063\u3068","\u3059\u3066\u304D","\u3059\u3066\u308B","\u3059\u306D\u308B","\u3059\u306E\u3053","\u3059\u306F\u305F\u3099","\u3059\u306F\u3099\u3089\u3057\u3044","\u3059\u3099\u3072\u3087\u3046","\u3059\u3099\u3075\u3099\u306C\u308C","\u3059\u3075\u3099\u308A","\u3059\u3075\u308C","\u3059\u3078\u3099\u3066","\u3059\u3078\u3099\u308B","\u3059\u3099\u307B\u3046","\u3059\u307B\u3099\u3093","\u3059\u307E\u3044","\u3059\u3081\u3057","\u3059\u3082\u3046","\u3059\u3084\u304D","\u3059\u3089\u3059\u3089","\u3059\u308B\u3081","\u3059\u308C\u3061\u304B\u3099\u3046","\u3059\u308D\u3063\u3068","\u3059\u308F\u308B","\u3059\u3093\u305B\u3099\u3093","\u3059\u3093\u307B\u309A\u3046","\u305B\u3042\u3075\u3099\u3089","\u305B\u3044\u304B\u3064","\u305B\u3044\u3051\u3099\u3093","\u305B\u3044\u3057\u3099","\u305B\u3044\u3088\u3046","\u305B\u304A\u3046","\u305B\u304B\u3044\u304B\u3093","\u305B\u304D\u306B\u3093","\u305B\u304D\u3080","\u305B\u304D\u3086","\u305B\u304D\u3089\u3093\u3046\u3093","\u305B\u3051\u3093","\u305B\u3053\u3046","\u305B\u3059\u3057\u3099","\u305B\u305F\u3044","\u305B\u305F\u3051","\u305B\u3063\u304B\u304F","\u305B\u3063\u304D\u3083\u304F","\u305B\u3099\u3063\u304F","\u305B\u3063\u3051\u3093","\u305B\u3063\u3053\u3064","\u305B\u3063\u3055\u305F\u304F\u307E","\u305B\u3064\u305D\u3099\u304F","\u305B\u3064\u305F\u3099\u3093","\u305B\u3064\u3066\u3099\u3093","\u305B\u3063\u306F\u309A\u3093","\u305B\u3064\u3072\u3099","\u305B\u3064\u3075\u3099\u3093","\u305B\u3064\u3081\u3044","\u305B\u3064\u308A\u3064","\u305B\u306A\u304B","\u305B\u306E\u3072\u3099","\u305B\u306F\u306F\u3099","\u305B\u3072\u3099\u308D","\u305B\u307B\u3099\u306D","\u305B\u307E\u3044","\u305B\u307E\u308B","\u305B\u3081\u308B","\u305B\u3082\u305F\u308C","\u305B\u308A\u3075","\u305B\u3099\u3093\u3042\u304F","\u305B\u3093\u3044","\u305B\u3093\u3048\u3044","\u305B\u3093\u304B","\u305B\u3093\u304D\u3087","\u305B\u3093\u304F","\u305B\u3093\u3051\u3099\u3093","\u305B\u3099\u3093\u3053\u3099","\u305B\u3093\u3055\u3044","\u305B\u3093\u3057\u3085","\u305B\u3093\u3059\u3044","\u305B\u3093\u305B\u3044","\u305B\u3093\u305D\u3099","\u305B\u3093\u305F\u304F","\u305B\u3093\u3061\u3087\u3046","\u305B\u3093\u3066\u3044","\u305B\u3093\u3068\u3046","\u305B\u3093\u306C\u304D","\u305B\u3093\u306D\u3093","\u305B\u3093\u306F\u309A\u3044","\u305B\u3099\u3093\u3075\u3099","\u305B\u3099\u3093\u307B\u309A\u3046","\u305B\u3093\u3080","\u305B\u3093\u3081\u3093\u3057\u3099\u3087","\u305B\u3093\u3082\u3093","\u305B\u3093\u3084\u304F","\u305B\u3093\u3086\u3046","\u305B\u3093\u3088\u3046","\u305B\u3099\u3093\u3089","\u305B\u3099\u3093\u308A\u3083\u304F","\u305B\u3093\u308C\u3044","\u305B\u3093\u308D","\u305D\u3042\u304F","\u305D\u3044\u3068\u3051\u3099\u308B","\u305D\u3044\u306D","\u305D\u3046\u304B\u3099\u3093\u304D\u3087\u3046","\u305D\u3046\u304D","\u305D\u3046\u3053\u3099","\u305D\u3046\u3057\u3093","\u305D\u3046\u305F\u3099\u3093","\u305D\u3046\u306A\u3093","\u305D\u3046\u3072\u3099","\u305D\u3046\u3081\u3093","\u305D\u3046\u308A","\u305D\u3048\u3082\u306E","\u305D\u3048\u3093","\u305D\u304B\u3099\u3044","\u305D\u3051\u3099\u304D","\u305D\u3053\u3046","\u305D\u3053\u305D\u3053","\u305D\u3055\u3099\u3044","\u305D\u3057\u306A","\u305D\u305B\u3044","\u305D\u305B\u3093","\u305D\u305D\u304F\u3099","\u305D\u305F\u3099\u3066\u308B","\u305D\u3064\u3046","\u305D\u3064\u3048\u3093","\u305D\u3063\u304B\u3093","\u305D\u3064\u304D\u3099\u3087\u3046","\u305D\u3063\u3051\u3064","\u305D\u3063\u3053\u3046","\u305D\u3063\u305B\u3093","\u305D\u3063\u3068","\u305D\u3068\u304B\u3099\u308F","\u305D\u3068\u3064\u3099\u3089","\u305D\u306A\u3048\u308B","\u305D\u306A\u305F","\u305D\u3075\u307B\u3099","\u305D\u307B\u3099\u304F","\u305D\u307B\u3099\u308D","\u305D\u307E\u3064","\u305D\u307E\u308B","\u305D\u3080\u304F","\u305D\u3080\u308A\u3048","\u305D\u3081\u308B","\u305D\u3082\u305D\u3082","\u305D\u3088\u304B\u305B\u3099","\u305D\u3089\u307E\u3081","\u305D\u308D\u3046","\u305D\u3093\u304B\u3044","\u305D\u3093\u3051\u3044","\u305D\u3093\u3055\u3099\u3044","\u305D\u3093\u3057\u3064","\u305D\u3093\u305D\u3099\u304F","\u305D\u3093\u3061\u3087\u3046","\u305D\u3099\u3093\u3072\u3099","\u305D\u3099\u3093\u3075\u3099\u3093","\u305D\u3093\u307F\u3093","\u305F\u3042\u3044","\u305F\u3044\u3044\u3093","\u305F\u3044\u3046\u3093","\u305F\u3044\u3048\u304D","\u305F\u3044\u304A\u3046","\u305F\u3099\u3044\u304B\u3099\u304F","\u305F\u3044\u304D","\u305F\u3044\u304F\u3099\u3046","\u305F\u3044\u3051\u3093","\u305F\u3044\u3053","\u305F\u3044\u3055\u3099\u3044","\u305F\u3099\u3044\u3057\u3099\u3087\u3046\u3075\u3099","\u305F\u3099\u3044\u3059\u304D","\u305F\u3044\u305B\u3064","\u305F\u3044\u305D\u3046","\u305F\u3099\u3044\u305F\u3044","\u305F\u3044\u3061\u3087\u3046","\u305F\u3044\u3066\u3044","\u305F\u3099\u3044\u3068\u3099\u3053\u308D","\u305F\u3044\u306A\u3044","\u305F\u3044\u306D\u3064","\u305F\u3044\u306E\u3046","\u305F\u3044\u306F\u3093","\u305F\u3099\u3044\u3072\u3087\u3046","\u305F\u3044\u3075\u3046","\u305F\u3044\u3078\u3093","\u305F\u3044\u307B","\u305F\u3044\u307E\u3064\u306F\u3099\u306A","\u305F\u3044\u307F\u3093\u304F\u3099","\u305F\u3044\u3080","\u305F\u3044\u3081\u3093","\u305F\u3044\u3084\u304D","\u305F\u3044\u3088\u3046","\u305F\u3044\u3089","\u305F\u3044\u308A\u3087\u304F","\u305F\u3044\u308B","\u305F\u3044\u308F\u3093","\u305F\u3046\u3048","\u305F\u3048\u308B","\u305F\u304A\u3059","\u305F\u304A\u308B","\u305F\u304A\u308C\u308B","\u305F\u304B\u3044","\u305F\u304B\u306D","\u305F\u304D\u3072\u3099","\u305F\u304F\u3055\u3093","\u305F\u3053\u304F","\u305F\u3053\u3084\u304D","\u305F\u3055\u3044","\u305F\u3057\u3055\u3099\u3093","\u305F\u3099\u3057\u3099\u3083\u308C","\u305F\u3059\u3051\u308B","\u305F\u3059\u3099\u3055\u308F\u308B","\u305F\u305D\u304B\u3099\u308C","\u305F\u305F\u304B\u3046","\u305F\u305F\u304F","\u305F\u305F\u3099\u3057\u3044","\u305F\u305F\u307F","\u305F\u3061\u306F\u3099\u306A","\u305F\u3099\u3063\u304B\u3044","\u305F\u3099\u3063\u304D\u3083\u304F","\u305F\u3099\u3063\u3053","\u305F\u3099\u3063\u3057\u3085\u3064","\u305F\u3099\u3063\u305F\u3044","\u305F\u3066\u308B","\u305F\u3068\u3048\u308B","\u305F\u306A\u306F\u3099\u305F","\u305F\u306B\u3093","\u305F\u306C\u304D","\u305F\u306E\u3057\u307F","\u305F\u306F\u3064","\u305F\u3075\u3099\u3093","\u305F\u3078\u3099\u308B","\u305F\u307B\u3099\u3046","\u305F\u307E\u3053\u3099","\u305F\u307E\u308B","\u305F\u3099\u3080\u308B","\u305F\u3081\u3044\u304D","\u305F\u3081\u3059","\u305F\u3081\u308B","\u305F\u3082\u3064","\u305F\u3084\u3059\u3044","\u305F\u3088\u308B","\u305F\u3089\u3059","\u305F\u308A\u304D\u307B\u3093\u304B\u3099\u3093","\u305F\u308A\u3087\u3046","\u305F\u308A\u308B","\u305F\u308B\u3068","\u305F\u308C\u308B","\u305F\u308C\u3093\u3068","\u305F\u308D\u3063\u3068","\u305F\u308F\u3080\u308C\u308B","\u305F\u3099\u3093\u3042\u3064","\u305F\u3093\u3044","\u305F\u3093\u304A\u3093","\u305F\u3093\u304B","\u305F\u3093\u304D","\u305F\u3093\u3051\u3093","\u305F\u3093\u3053\u3099","\u305F\u3093\u3055\u3093","\u305F\u3093\u3057\u3099\u3087\u3046\u3072\u3099","\u305F\u3099\u3093\u305B\u3044","\u305F\u3093\u305D\u304F","\u305F\u3093\u305F\u3044","\u305F\u3099\u3093\u3061","\u305F\u3093\u3066\u3044","\u305F\u3093\u3068\u3046","\u305F\u3099\u3093\u306A","\u305F\u3093\u306B\u3093","\u305F\u3099\u3093\u306D\u3064","\u305F\u3093\u306E\u3046","\u305F\u3093\u3072\u309A\u3093","\u305F\u3099\u3093\u307B\u3099\u3046","\u305F\u3093\u307E\u3064","\u305F\u3093\u3081\u3044","\u305F\u3099\u3093\u308C\u3064","\u305F\u3099\u3093\u308D","\u305F\u3099\u3093\u308F","\u3061\u3042\u3044","\u3061\u3042\u3093","\u3061\u3044\u304D","\u3061\u3044\u3055\u3044","\u3061\u3048\u3093","\u3061\u304B\u3044","\u3061\u304B\u3089","\u3061\u304D\u3085\u3046","\u3061\u304D\u3093","\u3061\u3051\u3044\u3059\u3099","\u3061\u3051\u3093","\u3061\u3053\u304F","\u3061\u3055\u3044","\u3061\u3057\u304D","\u3061\u3057\u308A\u3087\u3046","\u3061\u305B\u3044","\u3061\u305D\u3046","\u3061\u305F\u3044","\u3061\u305F\u3093","\u3061\u3061\u304A\u3084","\u3061\u3064\u3057\u3099\u3087","\u3061\u3066\u304D","\u3061\u3066\u3093","\u3061\u306C\u304D","\u3061\u306C\u308A","\u3061\u306E\u3046","\u3061\u3072\u3087\u3046","\u3061\u3078\u3044\u305B\u3093","\u3061\u307B\u3046","\u3061\u307E\u305F","\u3061\u307F\u3064","\u3061\u307F\u3068\u3099\u308D","\u3061\u3081\u3044\u3068\u3099","\u3061\u3083\u3093\u3053\u306A\u3078\u3099","\u3061\u3085\u3046\u3044","\u3061\u3086\u308A\u3087\u304F","\u3061\u3087\u3046\u3057","\u3061\u3087\u3055\u304F\u3051\u3093","\u3061\u3089\u3057","\u3061\u3089\u307F","\u3061\u308A\u304B\u3099\u307F","\u3061\u308A\u3087\u3046","\u3061\u308B\u3068\u3099","\u3061\u308F\u308F","\u3061\u3093\u305F\u3044","\u3061\u3093\u3082\u304F","\u3064\u3044\u304B","\u3064\u3044\u305F\u3061","\u3064\u3046\u304B","\u3064\u3046\u3057\u3099\u3087\u3046","\u3064\u3046\u306F\u3093","\u3064\u3046\u308F","\u3064\u304B\u3046","\u3064\u304B\u308C\u308B","\u3064\u304F\u306D","\u3064\u304F\u308B","\u3064\u3051\u306D","\u3064\u3051\u308B","\u3064\u3053\u3099\u3046","\u3064\u305F\u3048\u308B","\u3064\u3064\u3099\u304F","\u3064\u3064\u3057\u3099","\u3064\u3064\u3080","\u3064\u3068\u3081\u308B","\u3064\u306A\u304B\u3099\u308B","\u3064\u306A\u307F","\u3064\u306D\u3064\u3099\u306D","\u3064\u306E\u308B","\u3064\u3075\u3099\u3059","\u3064\u307E\u3089\u306A\u3044","\u3064\u307E\u308B","\u3064\u307F\u304D","\u3064\u3081\u305F\u3044","\u3064\u3082\u308A","\u3064\u3082\u308B","\u3064\u3088\u3044","\u3064\u308B\u307B\u3099","\u3064\u308B\u307F\u304F","\u3064\u308F\u3082\u306E","\u3064\u308F\u308A","\u3066\u3042\u3057","\u3066\u3042\u3066","\u3066\u3042\u307F","\u3066\u3044\u304A\u3093","\u3066\u3044\u304B","\u3066\u3044\u304D","\u3066\u3044\u3051\u3044","\u3066\u3044\u3053\u304F","\u3066\u3044\u3055\u3064","\u3066\u3044\u3057","\u3066\u3044\u305B\u3044","\u3066\u3044\u305F\u3044","\u3066\u3044\u3068\u3099","\u3066\u3044\u306D\u3044","\u3066\u3044\u3072\u3087\u3046","\u3066\u3044\u3078\u3093","\u3066\u3044\u307B\u3099\u3046","\u3066\u3046\u3061","\u3066\u304A\u304F\u308C","\u3066\u304D\u3068\u3046","\u3066\u304F\u3072\u3099","\u3066\u3099\u3053\u307B\u3099\u3053","\u3066\u3055\u304D\u3099\u3087\u3046","\u3066\u3055\u3051\u3099","\u3066\u3059\u308A","\u3066\u305D\u3046","\u3066\u3061\u304B\u3099\u3044","\u3066\u3061\u3087\u3046","\u3066\u3064\u304B\u3099\u304F","\u3066\u3064\u3064\u3099\u304D","\u3066\u3099\u3063\u306F\u309A","\u3066\u3064\u307B\u3099\u3046","\u3066\u3064\u3084","\u3066\u3099\u306C\u304B\u3048","\u3066\u306C\u304D","\u3066\u306C\u304F\u3099\u3044","\u3066\u306E\u3072\u3089","\u3066\u306F\u3044","\u3066\u3075\u3099\u304F\u308D","\u3066\u3075\u305F\u3099","\u3066\u307B\u3068\u3099\u304D","\u3066\u307B\u3093","\u3066\u307E\u3048","\u3066\u307E\u304D\u3059\u3099\u3057","\u3066\u307F\u3057\u3099\u304B","\u3066\u307F\u3084\u3051\u3099","\u3066\u3089\u3059","\u3066\u308C\u3072\u3099","\u3066\u308F\u3051","\u3066\u308F\u305F\u3057","\u3066\u3099\u3093\u3042\u3064","\u3066\u3093\u3044\u3093","\u3066\u3093\u304B\u3044","\u3066\u3093\u304D","\u3066\u3093\u304F\u3099","\u3066\u3093\u3051\u3093","\u3066\u3093\u3053\u3099\u304F","\u3066\u3093\u3055\u3044","\u3066\u3093\u3057","\u3066\u3093\u3059\u3046","\u3066\u3099\u3093\u3061","\u3066\u3093\u3066\u304D","\u3066\u3093\u3068\u3046","\u3066\u3093\u306A\u3044","\u3066\u3093\u3075\u309A\u3089","\u3066\u3093\u307B\u3099\u3046\u305F\u3099\u3044","\u3066\u3093\u3081\u3064","\u3066\u3093\u3089\u3093\u304B\u3044","\u3066\u3099\u3093\u308A\u3087\u304F","\u3066\u3099\u3093\u308F","\u3068\u3099\u3042\u3044","\u3068\u3044\u308C","\u3068\u3099\u3046\u304B\u3093","\u3068\u3046\u304D\u3085\u3046","\u3068\u3099\u3046\u304F\u3099","\u3068\u3046\u3057","\u3068\u3046\u3080\u304D\u3099","\u3068\u304A\u3044","\u3068\u304A\u304B","\u3068\u304A\u304F","\u3068\u304A\u3059","\u3068\u304A\u308B","\u3068\u304B\u3044","\u3068\u304B\u3059","\u3068\u304D\u304A\u308A","\u3068\u304D\u3068\u3099\u304D","\u3068\u304F\u3044","\u3068\u304F\u3057\u3085\u3046","\u3068\u304F\u3066\u3093","\u3068\u304F\u306B","\u3068\u304F\u3078\u3099\u3064","\u3068\u3051\u3044","\u3068\u3051\u308B","\u3068\u3053\u3084","\u3068\u3055\u304B","\u3068\u3057\u3087\u304B\u3093","\u3068\u305D\u3046","\u3068\u305F\u3093","\u3068\u3061\u3085\u3046","\u3068\u3063\u304D\u3085\u3046","\u3068\u3063\u304F\u3093","\u3068\u3064\u305B\u3099\u3093","\u3068\u3064\u306B\u3085\u3046","\u3068\u3068\u3099\u3051\u308B","\u3068\u3068\u306E\u3048\u308B","\u3068\u306A\u3044","\u3068\u306A\u3048\u308B","\u3068\u306A\u308A","\u3068\u306E\u3055\u307E","\u3068\u306F\u3099\u3059","\u3068\u3099\u3075\u3099\u304B\u3099\u308F","\u3068\u307B\u3046","\u3068\u307E\u308B","\u3068\u3081\u308B","\u3068\u3082\u305F\u3099\u3061","\u3068\u3082\u308B","\u3068\u3099\u3088\u3046\u3072\u3099","\u3068\u3089\u3048\u308B","\u3068\u3093\u304B\u3064","\u3068\u3099\u3093\u3075\u3099\u308A","\u306A\u3044\u304B\u304F","\u306A\u3044\u3053\u3046","\u306A\u3044\u3057\u3087","\u306A\u3044\u3059","\u306A\u3044\u305B\u3093","\u306A\u3044\u305D\u3046","\u306A\u304A\u3059","\u306A\u304B\u3099\u3044","\u306A\u304F\u3059","\u306A\u3051\u3099\u308B","\u306A\u3053\u3046\u3068\u3099","\u306A\u3055\u3051","\u306A\u305F\u3066\u3099\u3053\u3053","\u306A\u3063\u3068\u3046","\u306A\u3064\u3084\u3059\u307F","\u306A\u306A\u304A\u3057","\u306A\u306B\u3053\u3099\u3068","\u306A\u306B\u3082\u306E","\u306A\u306B\u308F","\u306A\u306E\u304B","\u306A\u3075\u305F\u3099","\u306A\u307E\u3044\u304D","\u306A\u307E\u3048","\u306A\u307E\u307F","\u306A\u307F\u305F\u3099","\u306A\u3081\u3089\u304B","\u306A\u3081\u308B","\u306A\u3084\u3080","\u306A\u3089\u3046","\u306A\u3089\u3072\u3099","\u306A\u3089\u3075\u3099","\u306A\u308C\u308B","\u306A\u308F\u3068\u3072\u3099","\u306A\u308F\u306F\u3099\u308A","\u306B\u3042\u3046","\u306B\u3044\u304B\u3099\u305F","\u306B\u3046\u3051","\u306B\u304A\u3044","\u306B\u304B\u3044","\u306B\u304B\u3099\u3066","\u306B\u304D\u3072\u3099","\u306B\u304F\u3057\u307F","\u306B\u304F\u307E\u3093","\u306B\u3051\u3099\u308B","\u306B\u3055\u3093\u304B\u305F\u3093\u305D","\u306B\u3057\u304D","\u306B\u305B\u3082\u306E","\u306B\u3061\u3057\u3099\u3087\u3046","\u306B\u3061\u3088\u3046\u3072\u3099","\u306B\u3063\u304B","\u306B\u3063\u304D","\u306B\u3063\u3051\u3044","\u306B\u3063\u3053\u3046","\u306B\u3063\u3055\u3093","\u306B\u3063\u3057\u3087\u304F","\u306B\u3063\u3059\u3046","\u306B\u3063\u305B\u304D","\u306B\u3063\u3066\u3044","\u306B\u306A\u3046","\u306B\u307B\u3093","\u306B\u307E\u3081","\u306B\u3082\u3064","\u306B\u3084\u308A","\u306B\u3085\u3046\u3044\u3093","\u306B\u308A\u3093\u3057\u3083","\u306B\u308F\u3068\u308A","\u306B\u3093\u3044","\u306B\u3093\u304B","\u306B\u3093\u304D","\u306B\u3093\u3051\u3099\u3093","\u306B\u3093\u3057\u304D","\u306B\u3093\u3059\u3099\u3046","\u306B\u3093\u305D\u3046","\u306B\u3093\u305F\u3044","\u306B\u3093\u3061","\u306B\u3093\u3066\u3044","\u306B\u3093\u306B\u304F","\u306B\u3093\u3075\u309A","\u306B\u3093\u307E\u308A","\u306B\u3093\u3080","\u306B\u3093\u3081\u3044","\u306B\u3093\u3088\u3046","\u306C\u3044\u304F\u304D\u3099","\u306C\u304B\u3059","\u306C\u304F\u3099\u3044\u3068\u308B","\u306C\u304F\u3099\u3046","\u306C\u304F\u3082\u308A","\u306C\u3059\u3080","\u306C\u307E\u3048\u3072\u3099","\u306C\u3081\u308A","\u306C\u3089\u3059","\u306C\u3093\u3061\u3083\u304F","\u306D\u3042\u3051\u3099","\u306D\u3044\u304D","\u306D\u3044\u308B","\u306D\u3044\u308D","\u306D\u304F\u3099\u305B","\u306D\u304F\u305F\u3044","\u306D\u304F\u3089","\u306D\u3053\u305B\u3099","\u306D\u3053\u3080","\u306D\u3055\u3051\u3099","\u306D\u3059\u3053\u3099\u3059","\u306D\u305D\u3078\u3099\u308B","\u306D\u305F\u3099\u3093","\u306D\u3064\u3044","\u306D\u3063\u3057\u3093","\u306D\u3064\u305D\u3099\u3046","\u306D\u3063\u305F\u3044\u304D\u3099\u3087","\u306D\u3075\u3099\u305D\u304F","\u306D\u3075\u305F\u3099","\u306D\u307B\u3099\u3046","\u306D\u307B\u308A\u306F\u307B\u308A","\u306D\u307E\u304D","\u306D\u307E\u308F\u3057","\u306D\u307F\u307F","\u306D\u3080\u3044","\u306D\u3080\u305F\u3044","\u306D\u3082\u3068","\u306D\u3089\u3046","\u306D\u308F\u3055\u3099","\u306D\u3093\u3044\u308A","\u306D\u3093\u304A\u3057","\u306D\u3093\u304B\u3093","\u306D\u3093\u304D\u3093","\u306D\u3093\u304F\u3099","\u306D\u3093\u3055\u3099","\u306D\u3093\u3057","\u306D\u3093\u3061\u3083\u304F","\u306D\u3093\u3068\u3099","\u306D\u3093\u3072\u309A","\u306D\u3093\u3075\u3099\u3064","\u306D\u3093\u307E\u3064","\u306D\u3093\u308A\u3087\u3046","\u306D\u3093\u308C\u3044","\u306E\u3044\u3059\u3099","\u306E\u304A\u3064\u3099\u307E","\u306E\u304B\u3099\u3059","\u306E\u304D\u306A\u307F","\u306E\u3053\u304D\u3099\u308A","\u306E\u3053\u3059","\u306E\u3053\u308B","\u306E\u305B\u308B","\u306E\u305D\u3099\u304F","\u306E\u305D\u3099\u3080","\u306E\u305F\u307E\u3046","\u306E\u3061\u307B\u3068\u3099","\u306E\u3063\u304F","\u306E\u306F\u3099\u3059","\u306E\u306F\u3089","\u306E\u3078\u3099\u308B","\u306E\u307B\u3099\u308B","\u306E\u307F\u3082\u306E","\u306E\u3084\u307E","\u306E\u3089\u3044\u306C","\u306E\u3089\u306D\u3053","\u306E\u308A\u3082\u306E","\u306E\u308A\u3086\u304D","\u306E\u308C\u3093","\u306E\u3093\u304D","\u306F\u3099\u3042\u3044","\u306F\u3042\u304F","\u306F\u3099\u3042\u3055\u3093","\u306F\u3099\u3044\u304B","\u306F\u3099\u3044\u304F","\u306F\u3044\u3051\u3093","\u306F\u3044\u3053\u3099","\u306F\u3044\u3057\u3093","\u306F\u3044\u3059\u3044","\u306F\u3044\u305B\u3093","\u306F\u3044\u305D\u3046","\u306F\u3044\u3061","\u306F\u3099\u3044\u306F\u3099\u3044","\u306F\u3044\u308C\u3064","\u306F\u3048\u308B","\u306F\u304A\u308B","\u306F\u304B\u3044","\u306F\u3099\u304B\u308A","\u306F\u304B\u308B","\u306F\u304F\u3057\u3085","\u306F\u3051\u3093","\u306F\u3053\u3075\u3099","\u306F\u3055\u307F","\u306F\u3055\u3093","\u306F\u3057\u3053\u3099","\u306F\u3099\u3057\u3087","\u306F\u3057\u308B","\u306F\u305B\u308B","\u306F\u309A\u305D\u3053\u3093","\u306F\u305D\u3093","\u306F\u305F\u3093","\u306F\u3061\u307F\u3064","\u306F\u3064\u304A\u3093","\u306F\u3063\u304B\u304F","\u306F\u3064\u3099\u304D","\u306F\u3063\u304D\u308A","\u306F\u3063\u304F\u3064","\u306F\u3063\u3051\u3093","\u306F\u3063\u3053\u3046","\u306F\u3063\u3055\u3093","\u306F\u3063\u3057\u3093","\u306F\u3063\u305F\u3064","\u306F\u3063\u3061\u3085\u3046","\u306F\u3063\u3066\u3093","\u306F\u3063\u3072\u309A\u3087\u3046","\u306F\u3063\u307B\u309A\u3046","\u306F\u306A\u3059","\u306F\u306A\u3072\u3099","\u306F\u306B\u304B\u3080","\u306F\u3075\u3099\u3089\u3057","\u306F\u307F\u304B\u3099\u304D","\u306F\u3080\u304B\u3046","\u306F\u3081\u3064","\u306F\u3084\u3044","\u306F\u3084\u3057","\u306F\u3089\u3046","\u306F\u308D\u3046\u3043\u3093","\u306F\u308F\u3044","\u306F\u3093\u3044","\u306F\u3093\u3048\u3044","\u306F\u3093\u304A\u3093","\u306F\u3093\u304B\u304F","\u306F\u3093\u304D\u3087\u3046","\u306F\u3099\u3093\u304F\u3099\u307F","\u306F\u3093\u3053","\u306F\u3093\u3057\u3083","\u306F\u3093\u3059\u3046","\u306F\u3093\u305F\u3099\u3093","\u306F\u309A\u3093\u3061","\u306F\u309A\u3093\u3064","\u306F\u3093\u3066\u3044","\u306F\u3093\u3068\u3057","\u306F\u3093\u306E\u3046","\u306F\u3093\u306F\u309A","\u306F\u3093\u3075\u3099\u3093","\u306F\u3093\u3078\u309A\u3093","\u306F\u3093\u307B\u3099\u3046\u304D","\u306F\u3093\u3081\u3044","\u306F\u3093\u3089\u3093","\u306F\u3093\u308D\u3093","\u3072\u3044\u304D","\u3072\u3046\u3093","\u3072\u3048\u308B","\u3072\u304B\u304F","\u3072\u304B\u308A","\u3072\u304B\u308B","\u3072\u304B\u3093","\u3072\u304F\u3044","\u3072\u3051\u3064","\u3072\u3053\u3046\u304D","\u3072\u3053\u304F","\u3072\u3055\u3044","\u3072\u3055\u3057\u3075\u3099\u308A","\u3072\u3055\u3093","\u3072\u3099\u3057\u3099\u3085\u3064\u304B\u3093","\u3072\u3057\u3087","\u3072\u305D\u304B","\u3072\u305D\u3080","\u3072\u305F\u3080\u304D","\u3072\u305F\u3099\u308A","\u3072\u305F\u308B","\u3072\u3064\u304D\u3099","\u3072\u3063\u3053\u3057","\u3072\u3063\u3057","\u3072\u3064\u3057\u3099\u3085\u3072\u3093","\u3072\u3063\u3059","\u3072\u3064\u305B\u3099\u3093","\u3072\u309A\u3063\u305F\u308A","\u3072\u309A\u3063\u3061\u308A","\u3072\u3064\u3088\u3046","\u3072\u3066\u3044","\u3072\u3068\u3053\u3099\u307F","\u3072\u306A\u307E\u3064\u308A","\u3072\u306A\u3093","\u3072\u306D\u308B","\u3072\u306F\u3093","\u3072\u3072\u3099\u304F","\u3072\u3072\u3087\u3046","\u3072\u307B\u3046","\u3072\u307E\u308F\u308A","\u3072\u307E\u3093","\u3072\u307F\u3064","\u3072\u3081\u3044","\u3072\u3081\u3057\u3099\u3057","\u3072\u3084\u3051","\u3072\u3084\u3059","\u3072\u3088\u3046","\u3072\u3099\u3087\u3046\u304D","\u3072\u3089\u304B\u3099\u306A","\u3072\u3089\u304F","\u3072\u308A\u3064","\u3072\u308A\u3087\u3046","\u3072\u308B\u307E","\u3072\u308B\u3084\u3059\u307F","\u3072\u308C\u3044","\u3072\u308D\u3044","\u3072\u308D\u3046","\u3072\u308D\u304D","\u3072\u308D\u3086\u304D","\u3072\u3093\u304B\u304F","\u3072\u3093\u3051\u3064","\u3072\u3093\u3053\u3093","\u3072\u3093\u3057\u3085","\u3072\u3093\u305D\u3046","\u3072\u309A\u3093\u3061","\u3072\u3093\u306F\u309A\u3093","\u3072\u3099\u3093\u307B\u3099\u3046","\u3075\u3042\u3093","\u3075\u3044\u3046\u3061","\u3075\u3046\u3051\u3044","\u3075\u3046\u305B\u3093","\u3075\u309A\u3046\u305F\u308D\u3046","\u3075\u3046\u3068\u3046","\u3075\u3046\u3075","\u3075\u3048\u308B","\u3075\u304A\u3093","\u3075\u304B\u3044","\u3075\u304D\u3093","\u3075\u304F\u3055\u3099\u3064","\u3075\u304F\u3075\u3099\u304F\u308D","\u3075\u3053\u3046","\u3075\u3055\u3044","\u3075\u3057\u304D\u3099","\u3075\u3057\u3099\u307F","\u3075\u3059\u307E","\u3075\u305B\u3044","\u3075\u305B\u304F\u3099","\u3075\u305D\u304F","\u3075\u3099\u305F\u306B\u304F","\u3075\u305F\u3093","\u3075\u3061\u3087\u3046","\u3075\u3064\u3046","\u3075\u3064\u304B","\u3075\u3063\u304B\u3064","\u3075\u3063\u304D","\u3075\u3063\u3053\u304F","\u3075\u3099\u3068\u3099\u3046","\u3075\u3068\u308B","\u3075\u3068\u3093","\u3075\u306E\u3046","\u3075\u306F\u3044","\u3075\u3072\u3087\u3046","\u3075\u3078\u3093","\u3075\u307E\u3093","\u3075\u307F\u3093","\u3075\u3081\u3064","\u3075\u3081\u3093","\u3075\u3088\u3046","\u3075\u308A\u3053","\u3075\u308A\u308B","\u3075\u308B\u3044","\u3075\u3093\u3044\u304D","\u3075\u3099\u3093\u304B\u3099\u304F","\u3075\u3099\u3093\u304F\u3099","\u3075\u3093\u3057\u3064","\u3075\u3099\u3093\u305B\u304D","\u3075\u3093\u305D\u3046","\u3075\u3099\u3093\u307B\u309A\u3046","\u3078\u3044\u3042\u3093","\u3078\u3044\u304A\u3093","\u3078\u3044\u304B\u3099\u3044","\u3078\u3044\u304D","\u3078\u3044\u3051\u3099\u3093","\u3078\u3044\u3053\u3046","\u3078\u3044\u3055","\u3078\u3044\u3057\u3083","\u3078\u3044\u305B\u3064","\u3078\u3044\u305D","\u3078\u3044\u305F\u304F","\u3078\u3044\u3066\u3093","\u3078\u3044\u306D\u3064","\u3078\u3044\u308F","\u3078\u304D\u304B\u3099","\u3078\u3053\u3080","\u3078\u3099\u306B\u3044\u308D","\u3078\u3099\u306B\u3057\u3087\u3046\u304B\u3099","\u3078\u3089\u3059","\u3078\u3093\u304B\u3093","\u3078\u3099\u3093\u304D\u3087\u3046","\u3078\u3099\u3093\u3053\u3099\u3057","\u3078\u3093\u3055\u3044","\u3078\u3093\u305F\u3044","\u3078\u3099\u3093\u308A","\u307B\u3042\u3093","\u307B\u3044\u304F","\u307B\u3099\u3046\u304D\u3099\u3087","\u307B\u3046\u3053\u304F","\u307B\u3046\u305D\u3046","\u307B\u3046\u307B\u3046","\u307B\u3046\u3082\u3093","\u307B\u3046\u308A\u3064","\u307B\u3048\u308B","\u307B\u304A\u3093","\u307B\u304B\u3093","\u307B\u304D\u3087\u3046","\u307B\u3099\u304D\u3093","\u307B\u304F\u308D","\u307B\u3051\u3064","\u307B\u3051\u3093","\u307B\u3053\u3046","\u307B\u3053\u308B","\u307B\u3057\u3044","\u307B\u3057\u3064","\u307B\u3057\u3085","\u307B\u3057\u3087\u3046","\u307B\u305B\u3044","\u307B\u305D\u3044","\u307B\u305D\u304F","\u307B\u305F\u3066","\u307B\u305F\u308B","\u307B\u309A\u3061\u3075\u3099\u304F\u308D","\u307B\u3063\u304D\u3087\u304F","\u307B\u3063\u3055","\u307B\u3063\u305F\u3093","\u307B\u3068\u3093\u3068\u3099","\u307B\u3081\u308B","\u307B\u3093\u3044","\u307B\u3093\u304D","\u307B\u3093\u3051","\u307B\u3093\u3057\u3064","\u307B\u3093\u3084\u304F","\u307E\u3044\u306B\u3061","\u307E\u304B\u3044","\u307E\u304B\u305B\u308B","\u307E\u304B\u3099\u308B","\u307E\u3051\u308B","\u307E\u3053\u3068","\u307E\u3055\u3064","\u307E\u3057\u3099\u3081","\u307E\u3059\u304F","\u307E\u305B\u3099\u308B","\u307E\u3064\u308A","\u307E\u3068\u3081","\u307E\u306A\u3075\u3099","\u307E\u306C\u3051","\u307E\u306D\u304F","\u307E\u307B\u3046","\u307E\u3082\u308B","\u307E\u3086\u3051\u3099","\u307E\u3088\u3046","\u307E\u308D\u3084\u304B","\u307E\u308F\u3059","\u307E\u308F\u308A","\u307E\u308F\u308B","\u307E\u3093\u304B\u3099","\u307E\u3093\u304D\u3064","\u307E\u3093\u305D\u3099\u304F","\u307E\u3093\u306A\u304B","\u307F\u3044\u3089","\u307F\u3046\u3061","\u307F\u3048\u308B","\u307F\u304B\u3099\u304F","\u307F\u304B\u305F","\u307F\u304B\u3093","\u307F\u3051\u3093","\u307F\u3053\u3093","\u307F\u3057\u3099\u304B\u3044","\u307F\u3059\u3044","\u307F\u3059\u3048\u308B","\u307F\u305B\u308B","\u307F\u3063\u304B","\u307F\u3064\u304B\u308B","\u307F\u3064\u3051\u308B","\u307F\u3066\u3044","\u307F\u3068\u3081\u308B","\u307F\u306A\u3068","\u307F\u306A\u307F\u304B\u3055\u3044","\u307F\u306D\u3089\u308B","\u307F\u306E\u3046","\u307F\u306E\u304B\u3099\u3059","\u307F\u307B\u3093","\u307F\u3082\u3068","\u307F\u3084\u3051\u3099","\u307F\u3089\u3044","\u307F\u308A\u3087\u304F","\u307F\u308F\u304F","\u307F\u3093\u304B","\u307F\u3093\u305D\u3099\u304F","\u3080\u3044\u304B","\u3080\u3048\u304D","\u3080\u3048\u3093","\u3080\u304B\u3044","\u3080\u304B\u3046","\u3080\u304B\u3048","\u3080\u304B\u3057","\u3080\u304D\u3099\u3061\u3083","\u3080\u3051\u308B","\u3080\u3051\u3099\u3093","\u3080\u3055\u307B\u3099\u308B","\u3080\u3057\u3042\u3064\u3044","\u3080\u3057\u306F\u3099","\u3080\u3057\u3099\u3085\u3093","\u3080\u3057\u308D","\u3080\u3059\u3046","\u3080\u3059\u3053","\u3080\u3059\u3075\u3099","\u3080\u3059\u3081","\u3080\u305B\u308B","\u3080\u305B\u3093","\u3080\u3061\u3085\u3046","\u3080\u306A\u3057\u3044","\u3080\u306E\u3046","\u3080\u3084\u307F","\u3080\u3088\u3046","\u3080\u3089\u3055\u304D","\u3080\u308A\u3087\u3046","\u3080\u308D\u3093","\u3081\u3044\u3042\u3093","\u3081\u3044\u3046\u3093","\u3081\u3044\u3048\u3093","\u3081\u3044\u304B\u304F","\u3081\u3044\u304D\u3087\u304F","\u3081\u3044\u3055\u3044","\u3081\u3044\u3057","\u3081\u3044\u305D\u3046","\u3081\u3044\u3075\u3099\u3064","\u3081\u3044\u308C\u3044","\u3081\u3044\u308F\u304F","\u3081\u304F\u3099\u307E\u308C\u308B","\u3081\u3055\u3099\u3059","\u3081\u3057\u305F","\u3081\u3059\u3099\u3089\u3057\u3044","\u3081\u305F\u3099\u3064","\u3081\u307E\u3044","\u3081\u3084\u3059","\u3081\u3093\u304D\u3087","\u3081\u3093\u305B\u304D","\u3081\u3093\u3068\u3099\u3046","\u3082\u3046\u3057\u3042\u3051\u3099\u308B","\u3082\u3046\u3068\u3099\u3046\u3051\u3093","\u3082\u3048\u308B","\u3082\u304F\u3057","\u3082\u304F\u3066\u304D","\u3082\u304F\u3088\u3046\u3072\u3099","\u3082\u3061\u308D\u3093","\u3082\u3068\u3099\u308B","\u3082\u3089\u3046","\u3082\u3093\u304F","\u3082\u3093\u305F\u3099\u3044","\u3084\u304A\u3084","\u3084\u3051\u308B","\u3084\u3055\u3044","\u3084\u3055\u3057\u3044","\u3084\u3059\u3044","\u3084\u3059\u305F\u308D\u3046","\u3084\u3059\u307F","\u3084\u305B\u308B","\u3084\u305D\u3046","\u3084\u305F\u3044","\u3084\u3061\u3093","\u3084\u3063\u3068","\u3084\u3063\u306F\u309A\u308A","\u3084\u3075\u3099\u308B","\u3084\u3081\u308B","\u3084\u3084\u3053\u3057\u3044","\u3084\u3088\u3044","\u3084\u308F\u3089\u304B\u3044","\u3086\u3046\u304D","\u3086\u3046\u3072\u3099\u3093\u304D\u3087\u304F","\u3086\u3046\u3078\u3099","\u3086\u3046\u3081\u3044","\u3086\u3051\u3064","\u3086\u3057\u3085\u3064","\u3086\u305B\u3093","\u3086\u305D\u3046","\u3086\u305F\u304B","\u3086\u3061\u3083\u304F","\u3086\u3066\u3099\u308B","\u3086\u306B\u3085\u3046","\u3086\u3072\u3099\u308F","\u3086\u3089\u3044","\u3086\u308C\u308B","\u3088\u3046\u3044","\u3088\u3046\u304B","\u3088\u3046\u304D\u3085\u3046","\u3088\u3046\u3057\u3099","\u3088\u3046\u3059","\u3088\u3046\u3061\u3048\u3093","\u3088\u304B\u305B\u3099","\u3088\u304B\u3093","\u3088\u304D\u3093","\u3088\u304F\u305B\u3044","\u3088\u304F\u307B\u3099\u3046","\u3088\u3051\u3044","\u3088\u3053\u3099\u308C\u308B","\u3088\u3055\u3093","\u3088\u3057\u3085\u3046","\u3088\u305D\u3046","\u3088\u305D\u304F","\u3088\u3063\u304B","\u3088\u3066\u3044","\u3088\u3068\u3099\u304B\u3099\u308F\u304F","\u3088\u306D\u3064","\u3088\u3084\u304F","\u3088\u3086\u3046","\u3088\u308D\u3053\u3075\u3099","\u3088\u308D\u3057\u3044","\u3089\u3044\u3046","\u3089\u304F\u304B\u3099\u304D","\u3089\u304F\u3053\u3099","\u3089\u304F\u3055\u3064","\u3089\u304F\u305F\u3099","\u3089\u3057\u3093\u306F\u3099\u3093","\u3089\u305B\u3093","\u3089\u305D\u3099\u304F","\u3089\u305F\u3044","\u3089\u3063\u304B","\u3089\u308C\u3064","\u308A\u3048\u304D","\u308A\u304B\u3044","\u308A\u304D\u3055\u304F","\u308A\u304D\u305B\u3064","\u308A\u304F\u304F\u3099\u3093","\u308A\u304F\u3064","\u308A\u3051\u3093","\u308A\u3053\u3046","\u308A\u305B\u3044","\u308A\u305D\u3046","\u308A\u305D\u304F","\u308A\u3066\u3093","\u308A\u306D\u3093","\u308A\u3086\u3046","\u308A\u3085\u3046\u304B\u3099\u304F","\u308A\u3088\u3046","\u308A\u3087\u3046\u308A","\u308A\u3087\u304B\u3093","\u308A\u3087\u304F\u3061\u3083","\u308A\u3087\u3053\u3046","\u308A\u308A\u304F","\u308A\u308C\u304D","\u308A\u308D\u3093","\u308A\u3093\u3053\u3099","\u308B\u3044\u3051\u3044","\u308B\u3044\u3055\u3044","\u308B\u3044\u3057\u3099","\u308B\u3044\u305B\u304D","\u308B\u3059\u306F\u3099\u3093","\u308B\u308A\u304B\u3099\u308F\u3089","\u308C\u3044\u304B\u3093","\u308C\u3044\u304D\u3099","\u308C\u3044\u305B\u3044","\u308C\u3044\u305D\u3099\u3046\u3053","\u308C\u3044\u3068\u3046","\u308C\u3044\u307B\u3099\u3046","\u308C\u304D\u3057","\u308C\u304D\u305F\u3099\u3044","\u308C\u3093\u3042\u3044","\u308C\u3093\u3051\u3044","\u308C\u3093\u3053\u3093","\u308C\u3093\u3055\u3044","\u308C\u3093\u3057\u3085\u3046","\u308C\u3093\u305D\u3099\u304F","\u308C\u3093\u3089\u304F","\u308D\u3046\u304B","\u308D\u3046\u3053\u3099","\u308D\u3046\u3057\u3099\u3093","\u308D\u3046\u305D\u304F","\u308D\u304F\u304B\u3099","\u308D\u3053\u3064","\u308D\u3057\u3099\u3046\u3089","\u308D\u3057\u3085\u3064","\u308D\u305B\u3093","\u308D\u3066\u3093","\u308D\u3081\u3093","\u308D\u308C\u3064","\u308D\u3093\u304D\u3099","\u308D\u3093\u306F\u309A","\u308D\u3093\u3075\u3099\u3093","\u308D\u3093\u308A","\u308F\u304B\u3059","\u308F\u304B\u3081","\u308F\u304B\u3084\u307E","\u308F\u304B\u308C\u308B","\u308F\u3057\u3064","\u308F\u3057\u3099\u307E\u3057","\u308F\u3059\u308C\u3082\u306E","\u308F\u3089\u3046","\u308F\u308C\u308B"]'), xs = JSON.parse('["abacate","abaixo","abalar","abater","abduzir","abelha","aberto","abismo","abotoar","abranger","abreviar","abrigar","abrupto","absinto","absoluto","absurdo","abutre","acabado","acalmar","acampar","acanhar","acaso","aceitar","acelerar","acenar","acervo","acessar","acetona","achatar","acidez","acima","acionado","acirrar","aclamar","aclive","acolhida","acomodar","acoplar","acordar","acumular","acusador","adaptar","adega","adentro","adepto","adequar","aderente","adesivo","adeus","adiante","aditivo","adjetivo","adjunto","admirar","adorar","adquirir","adubo","adverso","advogado","aeronave","afastar","aferir","afetivo","afinador","afivelar","aflito","afluente","afrontar","agachar","agarrar","agasalho","agenciar","agilizar","agiota","agitado","agora","agradar","agreste","agrupar","aguardar","agulha","ajoelhar","ajudar","ajustar","alameda","alarme","alastrar","alavanca","albergue","albino","alcatra","aldeia","alecrim","alegria","alertar","alface","alfinete","algum","alheio","aliar","alicate","alienar","alinhar","aliviar","almofada","alocar","alpiste","alterar","altitude","alucinar","alugar","aluno","alusivo","alvo","amaciar","amador","amarelo","amassar","ambas","ambiente","ameixa","amenizar","amido","amistoso","amizade","amolador","amontoar","amoroso","amostra","amparar","ampliar","ampola","anagrama","analisar","anarquia","anatomia","andaime","anel","anexo","angular","animar","anjo","anomalia","anotado","ansioso","anterior","anuidade","anunciar","anzol","apagador","apalpar","apanhado","apego","apelido","apertada","apesar","apetite","apito","aplauso","aplicada","apoio","apontar","aposta","aprendiz","aprovar","aquecer","arame","aranha","arara","arcada","ardente","areia","arejar","arenito","aresta","argiloso","argola","arma","arquivo","arraial","arrebate","arriscar","arroba","arrumar","arsenal","arterial","artigo","arvoredo","asfaltar","asilado","aspirar","assador","assinar","assoalho","assunto","astral","atacado","atadura","atalho","atarefar","atear","atender","aterro","ateu","atingir","atirador","ativo","atoleiro","atracar","atrevido","atriz","atual","atum","auditor","aumentar","aura","aurora","autismo","autoria","autuar","avaliar","avante","avaria","avental","avesso","aviador","avisar","avulso","axila","azarar","azedo","azeite","azulejo","babar","babosa","bacalhau","bacharel","bacia","bagagem","baiano","bailar","baioneta","bairro","baixista","bajular","baleia","baliza","balsa","banal","bandeira","banho","banir","banquete","barato","barbado","baronesa","barraca","barulho","baseado","bastante","batata","batedor","batida","batom","batucar","baunilha","beber","beijo","beirada","beisebol","beldade","beleza","belga","beliscar","bendito","bengala","benzer","berimbau","berlinda","berro","besouro","bexiga","bezerro","bico","bicudo","bienal","bifocal","bifurcar","bigorna","bilhete","bimestre","bimotor","biologia","biombo","biosfera","bipolar","birrento","biscoito","bisneto","bispo","bissexto","bitola","bizarro","blindado","bloco","bloquear","boato","bobagem","bocado","bocejo","bochecha","boicotar","bolada","boletim","bolha","bolo","bombeiro","bonde","boneco","bonita","borbulha","borda","boreal","borracha","bovino","boxeador","branco","brasa","braveza","breu","briga","brilho","brincar","broa","brochura","bronzear","broto","bruxo","bucha","budismo","bufar","bule","buraco","busca","busto","buzina","cabana","cabelo","cabide","cabo","cabrito","cacau","cacetada","cachorro","cacique","cadastro","cadeado","cafezal","caiaque","caipira","caixote","cajado","caju","calafrio","calcular","caldeira","calibrar","calmante","calota","camada","cambista","camisa","camomila","campanha","camuflar","canavial","cancelar","caneta","canguru","canhoto","canivete","canoa","cansado","cantar","canudo","capacho","capela","capinar","capotar","capricho","captador","capuz","caracol","carbono","cardeal","careca","carimbar","carneiro","carpete","carreira","cartaz","carvalho","casaco","casca","casebre","castelo","casulo","catarata","cativar","caule","causador","cautelar","cavalo","caverna","cebola","cedilha","cegonha","celebrar","celular","cenoura","censo","centeio","cercar","cerrado","certeiro","cerveja","cetim","cevada","chacota","chaleira","chamado","chapada","charme","chatice","chave","chefe","chegada","cheiro","cheque","chicote","chifre","chinelo","chocalho","chover","chumbo","chutar","chuva","cicatriz","ciclone","cidade","cidreira","ciente","cigana","cimento","cinto","cinza","ciranda","circuito","cirurgia","citar","clareza","clero","clicar","clone","clube","coado","coagir","cobaia","cobertor","cobrar","cocada","coelho","coentro","coeso","cogumelo","coibir","coifa","coiote","colar","coleira","colher","colidir","colmeia","colono","coluna","comando","combinar","comentar","comitiva","comover","complexo","comum","concha","condor","conectar","confuso","congelar","conhecer","conjugar","consumir","contrato","convite","cooperar","copeiro","copiador","copo","coquetel","coragem","cordial","corneta","coronha","corporal","correio","cortejo","coruja","corvo","cosseno","costela","cotonete","couro","couve","covil","cozinha","cratera","cravo","creche","credor","creme","crer","crespo","criada","criminal","crioulo","crise","criticar","crosta","crua","cruzeiro","cubano","cueca","cuidado","cujo","culatra","culminar","culpar","cultura","cumprir","cunhado","cupido","curativo","curral","cursar","curto","cuspir","custear","cutelo","damasco","datar","debater","debitar","deboche","debulhar","decalque","decimal","declive","decote","decretar","dedal","dedicado","deduzir","defesa","defumar","degelo","degrau","degustar","deitado","deixar","delator","delegado","delinear","delonga","demanda","demitir","demolido","dentista","depenado","depilar","depois","depressa","depurar","deriva","derramar","desafio","desbotar","descanso","desenho","desfiado","desgaste","desigual","deslize","desmamar","desova","despesa","destaque","desviar","detalhar","detentor","detonar","detrito","deusa","dever","devido","devotado","dezena","diagrama","dialeto","didata","difuso","digitar","dilatado","diluente","diminuir","dinastia","dinheiro","diocese","direto","discreta","disfarce","disparo","disquete","dissipar","distante","ditador","diurno","diverso","divisor","divulgar","dizer","dobrador","dolorido","domador","dominado","donativo","donzela","dormente","dorsal","dosagem","dourado","doutor","drenagem","drible","drogaria","duelar","duende","dueto","duplo","duquesa","durante","duvidoso","eclodir","ecoar","ecologia","edificar","edital","educado","efeito","efetivar","ejetar","elaborar","eleger","eleitor","elenco","elevador","eliminar","elogiar","embargo","embolado","embrulho","embutido","emenda","emergir","emissor","empatia","empenho","empinado","empolgar","emprego","empurrar","emulador","encaixe","encenado","enchente","encontro","endeusar","endossar","enfaixar","enfeite","enfim","engajado","engenho","englobar","engomado","engraxar","enguia","enjoar","enlatar","enquanto","enraizar","enrolado","enrugar","ensaio","enseada","ensino","ensopado","entanto","enteado","entidade","entortar","entrada","entulho","envergar","enviado","envolver","enxame","enxerto","enxofre","enxuto","epiderme","equipar","ereto","erguido","errata","erva","ervilha","esbanjar","esbelto","escama","escola","escrita","escuta","esfinge","esfolar","esfregar","esfumado","esgrima","esmalte","espanto","espelho","espiga","esponja","espreita","espumar","esquerda","estaca","esteira","esticar","estofado","estrela","estudo","esvaziar","etanol","etiqueta","euforia","europeu","evacuar","evaporar","evasivo","eventual","evidente","evoluir","exagero","exalar","examinar","exato","exausto","excesso","excitar","exclamar","executar","exemplo","exibir","exigente","exonerar","expandir","expelir","expirar","explanar","exposto","expresso","expulsar","externo","extinto","extrato","fabricar","fabuloso","faceta","facial","fada","fadiga","faixa","falar","falta","familiar","fandango","fanfarra","fantoche","fardado","farelo","farinha","farofa","farpa","fartura","fatia","fator","favorita","faxina","fazenda","fechado","feijoada","feirante","felino","feminino","fenda","feno","fera","feriado","ferrugem","ferver","festejar","fetal","feudal","fiapo","fibrose","ficar","ficheiro","figurado","fileira","filho","filme","filtrar","firmeza","fisgada","fissura","fita","fivela","fixador","fixo","flacidez","flamingo","flanela","flechada","flora","flutuar","fluxo","focal","focinho","fofocar","fogo","foguete","foice","folgado","folheto","forjar","formiga","forno","forte","fosco","fossa","fragata","fralda","frango","frasco","fraterno","freira","frente","fretar","frieza","friso","fritura","fronha","frustrar","fruteira","fugir","fulano","fuligem","fundar","fungo","funil","furador","furioso","futebol","gabarito","gabinete","gado","gaiato","gaiola","gaivota","galega","galho","galinha","galocha","ganhar","garagem","garfo","gargalo","garimpo","garoupa","garrafa","gasoduto","gasto","gata","gatilho","gaveta","gazela","gelado","geleia","gelo","gemada","gemer","gemido","generoso","gengiva","genial","genoma","genro","geologia","gerador","germinar","gesso","gestor","ginasta","gincana","gingado","girafa","girino","glacial","glicose","global","glorioso","goela","goiaba","golfe","golpear","gordura","gorjeta","gorro","gostoso","goteira","governar","gracejo","gradual","grafite","gralha","grampo","granada","gratuito","graveto","graxa","grego","grelhar","greve","grilo","grisalho","gritaria","grosso","grotesco","grudado","grunhido","gruta","guache","guarani","guaxinim","guerrear","guiar","guincho","guisado","gula","guloso","guru","habitar","harmonia","haste","haver","hectare","herdar","heresia","hesitar","hiato","hibernar","hidratar","hiena","hino","hipismo","hipnose","hipoteca","hoje","holofote","homem","honesto","honrado","hormonal","hospedar","humorado","iate","ideia","idoso","ignorado","igreja","iguana","ileso","ilha","iludido","iluminar","ilustrar","imagem","imediato","imenso","imersivo","iminente","imitador","imortal","impacto","impedir","implante","impor","imprensa","impune","imunizar","inalador","inapto","inativo","incenso","inchar","incidir","incluir","incolor","indeciso","indireto","indutor","ineficaz","inerente","infantil","infestar","infinito","inflamar","informal","infrator","ingerir","inibido","inicial","inimigo","injetar","inocente","inodoro","inovador","inox","inquieto","inscrito","inseto","insistir","inspetor","instalar","insulto","intacto","integral","intimar","intocado","intriga","invasor","inverno","invicto","invocar","iogurte","iraniano","ironizar","irreal","irritado","isca","isento","isolado","isqueiro","italiano","janeiro","jangada","janta","jararaca","jardim","jarro","jasmim","jato","javali","jazida","jejum","joaninha","joelhada","jogador","joia","jornal","jorrar","jovem","juba","judeu","judoca","juiz","julgador","julho","jurado","jurista","juro","justa","labareda","laboral","lacre","lactante","ladrilho","lagarta","lagoa","laje","lamber","lamentar","laminar","lampejo","lanche","lapidar","lapso","laranja","lareira","largura","lasanha","lastro","lateral","latido","lavanda","lavoura","lavrador","laxante","lazer","lealdade","lebre","legado","legendar","legista","leigo","leiloar","leitura","lembrete","leme","lenhador","lentilha","leoa","lesma","leste","letivo","letreiro","levar","leveza","levitar","liberal","libido","liderar","ligar","ligeiro","limitar","limoeiro","limpador","linda","linear","linhagem","liquidez","listagem","lisura","litoral","livro","lixa","lixeira","locador","locutor","lojista","lombo","lona","longe","lontra","lorde","lotado","loteria","loucura","lousa","louvar","luar","lucidez","lucro","luneta","lustre","lutador","luva","macaco","macete","machado","macio","madeira","madrinha","magnata","magreza","maior","mais","malandro","malha","malote","maluco","mamilo","mamoeiro","mamute","manada","mancha","mandato","manequim","manhoso","manivela","manobrar","mansa","manter","manusear","mapeado","maquinar","marcador","maresia","marfim","margem","marinho","marmita","maroto","marquise","marreco","martelo","marujo","mascote","masmorra","massagem","mastigar","matagal","materno","matinal","matutar","maxilar","medalha","medida","medusa","megafone","meiga","melancia","melhor","membro","memorial","menino","menos","mensagem","mental","merecer","mergulho","mesada","mesclar","mesmo","mesquita","mestre","metade","meteoro","metragem","mexer","mexicano","micro","migalha","migrar","milagre","milenar","milhar","mimado","minerar","minhoca","ministro","minoria","miolo","mirante","mirtilo","misturar","mocidade","moderno","modular","moeda","moer","moinho","moita","moldura","moleza","molho","molinete","molusco","montanha","moqueca","morango","morcego","mordomo","morena","mosaico","mosquete","mostarda","motel","motim","moto","motriz","muda","muito","mulata","mulher","multar","mundial","munido","muralha","murcho","muscular","museu","musical","nacional","nadador","naja","namoro","narina","narrado","nascer","nativa","natureza","navalha","navegar","navio","neblina","nebuloso","negativa","negociar","negrito","nervoso","neta","neural","nevasca","nevoeiro","ninar","ninho","nitidez","nivelar","nobreza","noite","noiva","nomear","nominal","nordeste","nortear","notar","noticiar","noturno","novelo","novilho","novo","nublado","nudez","numeral","nupcial","nutrir","nuvem","obcecado","obedecer","objetivo","obrigado","obscuro","obstetra","obter","obturar","ocidente","ocioso","ocorrer","oculista","ocupado","ofegante","ofensiva","oferenda","oficina","ofuscado","ogiva","olaria","oleoso","olhar","oliveira","ombro","omelete","omisso","omitir","ondulado","oneroso","ontem","opcional","operador","oponente","oportuno","oposto","orar","orbitar","ordem","ordinal","orfanato","orgasmo","orgulho","oriental","origem","oriundo","orla","ortodoxo","orvalho","oscilar","ossada","osso","ostentar","otimismo","ousadia","outono","outubro","ouvido","ovelha","ovular","oxidar","oxigenar","pacato","paciente","pacote","pactuar","padaria","padrinho","pagar","pagode","painel","pairar","paisagem","palavra","palestra","palheta","palito","palmada","palpitar","pancada","panela","panfleto","panqueca","pantanal","papagaio","papelada","papiro","parafina","parcial","pardal","parede","partida","pasmo","passado","pastel","patamar","patente","patinar","patrono","paulada","pausar","peculiar","pedalar","pedestre","pediatra","pedra","pegada","peitoral","peixe","pele","pelicano","penca","pendurar","peneira","penhasco","pensador","pente","perceber","perfeito","pergunta","perito","permitir","perna","perplexo","persiana","pertence","peruca","pescado","pesquisa","pessoa","petiscar","piada","picado","piedade","pigmento","pilastra","pilhado","pilotar","pimenta","pincel","pinguim","pinha","pinote","pintar","pioneiro","pipoca","piquete","piranha","pires","pirueta","piscar","pistola","pitanga","pivete","planta","plaqueta","platina","plebeu","plumagem","pluvial","pneu","poda","poeira","poetisa","polegada","policiar","poluente","polvilho","pomar","pomba","ponderar","pontaria","populoso","porta","possuir","postal","pote","poupar","pouso","povoar","praia","prancha","prato","praxe","prece","predador","prefeito","premiar","prensar","preparar","presilha","pretexto","prevenir","prezar","primata","princesa","prisma","privado","processo","produto","profeta","proibido","projeto","prometer","propagar","prosa","protetor","provador","publicar","pudim","pular","pulmonar","pulseira","punhal","punir","pupilo","pureza","puxador","quadra","quantia","quarto","quase","quebrar","queda","queijo","quente","querido","quimono","quina","quiosque","rabanada","rabisco","rachar","racionar","radial","raiar","rainha","raio","raiva","rajada","ralado","ramal","ranger","ranhura","rapadura","rapel","rapidez","raposa","raquete","raridade","rasante","rascunho","rasgar","raspador","rasteira","rasurar","ratazana","ratoeira","realeza","reanimar","reaver","rebaixar","rebelde","rebolar","recado","recente","recheio","recibo","recordar","recrutar","recuar","rede","redimir","redonda","reduzida","reenvio","refinar","refletir","refogar","refresco","refugiar","regalia","regime","regra","reinado","reitor","rejeitar","relativo","remador","remendo","remorso","renovado","reparo","repelir","repleto","repolho","represa","repudiar","requerer","resenha","resfriar","resgatar","residir","resolver","respeito","ressaca","restante","resumir","retalho","reter","retirar","retomada","retratar","revelar","revisor","revolta","riacho","rica","rigidez","rigoroso","rimar","ringue","risada","risco","risonho","robalo","rochedo","rodada","rodeio","rodovia","roedor","roleta","romano","roncar","rosado","roseira","rosto","rota","roteiro","rotina","rotular","rouco","roupa","roxo","rubro","rugido","rugoso","ruivo","rumo","rupestre","russo","sabor","saciar","sacola","sacudir","sadio","safira","saga","sagrada","saibro","salada","saleiro","salgado","saliva","salpicar","salsicha","saltar","salvador","sambar","samurai","sanar","sanfona","sangue","sanidade","sapato","sarda","sargento","sarjeta","saturar","saudade","saxofone","sazonal","secar","secular","seda","sedento","sediado","sedoso","sedutor","segmento","segredo","segundo","seiva","seleto","selvagem","semanal","semente","senador","senhor","sensual","sentado","separado","sereia","seringa","serra","servo","setembro","setor","sigilo","silhueta","silicone","simetria","simpatia","simular","sinal","sincero","singular","sinopse","sintonia","sirene","siri","situado","soberano","sobra","socorro","sogro","soja","solda","soletrar","solteiro","sombrio","sonata","sondar","sonegar","sonhador","sono","soprano","soquete","sorrir","sorteio","sossego","sotaque","soterrar","sovado","sozinho","suavizar","subida","submerso","subsolo","subtrair","sucata","sucesso","suco","sudeste","sufixo","sugador","sugerir","sujeito","sulfato","sumir","suor","superior","suplicar","suposto","suprimir","surdina","surfista","surpresa","surreal","surtir","suspiro","sustento","tabela","tablete","tabuada","tacho","tagarela","talher","talo","talvez","tamanho","tamborim","tampa","tangente","tanto","tapar","tapioca","tardio","tarefa","tarja","tarraxa","tatuagem","taurino","taxativo","taxista","teatral","tecer","tecido","teclado","tedioso","teia","teimar","telefone","telhado","tempero","tenente","tensor","tentar","termal","terno","terreno","tese","tesoura","testado","teto","textura","texugo","tiara","tigela","tijolo","timbrar","timidez","tingido","tinteiro","tiragem","titular","toalha","tocha","tolerar","tolice","tomada","tomilho","tonel","tontura","topete","tora","torcido","torneio","torque","torrada","torto","tostar","touca","toupeira","toxina","trabalho","tracejar","tradutor","trafegar","trajeto","trama","trancar","trapo","traseiro","tratador","travar","treino","tremer","trepidar","trevo","triagem","tribo","triciclo","tridente","trilogia","trindade","triplo","triturar","triunfal","trocar","trombeta","trova","trunfo","truque","tubular","tucano","tudo","tulipa","tupi","turbo","turma","turquesa","tutelar","tutorial","uivar","umbigo","unha","unidade","uniforme","urologia","urso","urtiga","urubu","usado","usina","usufruir","vacina","vadiar","vagaroso","vaidoso","vala","valente","validade","valores","vantagem","vaqueiro","varanda","vareta","varrer","vascular","vasilha","vassoura","vazar","vazio","veado","vedar","vegetar","veicular","veleiro","velhice","veludo","vencedor","vendaval","venerar","ventre","verbal","verdade","vereador","vergonha","vermelho","verniz","versar","vertente","vespa","vestido","vetorial","viaduto","viagem","viajar","viatura","vibrador","videira","vidraria","viela","viga","vigente","vigiar","vigorar","vilarejo","vinco","vinheta","vinil","violeta","virada","virtude","visitar","visto","vitral","viveiro","vizinho","voador","voar","vogal","volante","voleibol","voltagem","volumoso","vontade","vulto","vuvuzela","xadrez","xarope","xeque","xeretar","xerife","xingar","zangado","zarpar","zebu","zelador","zombar","zoologia","zumbido"]'), Ls = JSON.parse('["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"]');
  var gn;
  function vn() {
    if (gn) return Le;
    gn = 1, Object.defineProperty(Le, "__esModule", {
      value: true
    });
    const e = {};
    Le.wordlists = e;
    let t;
    Le._default = t;
    try {
      Le._default = t = Ps, e.czech = t;
    } catch {
    }
    try {
      Le._default = t = Bs, e.chinese_simplified = t;
    } catch {
    }
    try {
      Le._default = t = Os, e.chinese_traditional = t;
    } catch {
    }
    try {
      Le._default = t = Rs, e.korean = t;
    } catch {
    }
    try {
      Le._default = t = Us, e.french = t;
    } catch {
    }
    try {
      Le._default = t = zs, e.italian = t;
    } catch {
    }
    try {
      Le._default = t = Ns, e.spanish = t;
    } catch {
    }
    try {
      Le._default = t = Hs, e.japanese = t, e.JA = t;
    } catch {
    }
    try {
      Le._default = t = xs, e.portuguese = t;
    } catch {
    }
    try {
      Le._default = t = Ls, e.english = t, e.EN = t;
    } catch {
    }
    return Le;
  }
  var yn;
  kl = function() {
    if (yn) return Ke;
    yn = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Ke, "__esModule", {
      value: true
    });
    const t = pt(), g = Fa(), v = As(), l = Mr(), f = vn();
    let i = f._default;
    const r = "Invalid mnemonic", n = "Invalid entropy", u = "Invalid mnemonic checksum", a = `A wordlist is required but a default could not be found.
Please pass a 2048 word array explicitly.`;
    function d(P) {
      return (P || "").normalize("NFKD");
    }
    function s(P, H, j) {
      for (; P.length < j; ) P = H + P;
      return P;
    }
    function b(P) {
      return parseInt(P, 2);
    }
    function p(P) {
      return P.map((H) => s(H.toString(2), "0", 8)).join("");
    }
    function c(P) {
      const j = P.length * 8 / 32, C = t.sha256(Uint8Array.from(P));
      return p(Array.from(C)).slice(0, j);
    }
    function y(P) {
      return "mnemonic" + (P || "");
    }
    function w(P, H) {
      const j = Uint8Array.from(e.from(d(P), "utf8")), C = Uint8Array.from(e.from(y(d(H)), "utf8")), W = v.pbkdf2(g.sha512, j, C, {
        c: 2048,
        dkLen: 64
      });
      return e.from(W);
    }
    Ke.mnemonicToSeedSync = w;
    function E(P, H) {
      const j = Uint8Array.from(e.from(d(P), "utf8")), C = Uint8Array.from(e.from(y(d(H)), "utf8"));
      return v.pbkdf2Async(g.sha512, j, C, {
        c: 2048,
        dkLen: 64
      }).then((W) => e.from(W));
    }
    Ke.mnemonicToSeed = E;
    function k(P, H) {
      if (H = H || i, !H) throw new Error(a);
      const j = d(P).split(" ");
      if (j.length % 3 !== 0) throw new Error(r);
      const C = j.map((F) => {
        const K = H.indexOf(F);
        if (K === -1) throw new Error(r);
        return s(K.toString(2), "0", 11);
      }).join(""), W = Math.floor(C.length / 33) * 32, X = C.slice(0, W), ee = C.slice(W), re = X.match(/(.{1,8})/g).map(b);
      if (re.length < 16) throw new Error(n);
      if (re.length > 32) throw new Error(n);
      if (re.length % 4 !== 0) throw new Error(n);
      const ue = e.from(re);
      if (c(ue) !== ee) throw new Error(u);
      return ue.toString("hex");
    }
    Ke.mnemonicToEntropy = k;
    function S(P, H) {
      if (e.isBuffer(P) || (P = e.from(P, "hex")), H = H || i, !H) throw new Error(a);
      if (P.length < 16) throw new TypeError(n);
      if (P.length > 32) throw new TypeError(n);
      if (P.length % 4 !== 0) throw new TypeError(n);
      const j = p(Array.from(P)), C = c(P), ee = (j + C).match(/(.{1,11})/g).map((re) => {
        const ue = b(re);
        return H[ue];
      });
      return H[0] === "\u3042\u3044\u3053\u304F\u3057\u3093" ? ee.join("\u3000") : ee.join(" ");
    }
    Ke.entropyToMnemonic = S;
    function I(P, H, j) {
      if (P = P || 128, P % 32 !== 0) throw new TypeError(n);
      return H = H || ((C) => e.from(l.randomBytes(C))), S(H(P / 8), j);
    }
    Ke.generateMnemonic = I;
    function U(P, H) {
      try {
        k(P, H);
      } catch {
        return false;
      }
      return true;
    }
    Ke.validateMnemonic = U;
    function R(P) {
      const H = f.wordlists[P];
      if (H) i = H;
      else throw new Error('Could not find wordlist for language "' + P + '"');
    }
    Ke.setDefaultWordlist = R;
    function q() {
      if (!i) throw new Error("No Default Wordlist set");
      return Object.keys(f.wordlists).filter((P) => P === "JA" || P === "EN" ? false : f.wordlists[P].every((H, j) => H === i[j]))[0];
    }
    Ke.getDefaultWordlist = q;
    var x = vn();
    return Ke.wordlists = x.wordlists, Ke;
  };
  var qt = {}, Ce = {}, Ze = {}, wn;
  function Ye() {
    return wn || (wn = 1, Object.defineProperty(Ze, "__esModule", {
      value: true
    }), Ze.testnet = Ze.regtest = Ze.bitcoin = void 0, Ze.bitcoin = {
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
    }, Ze.regtest = {
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
    }, Ze.testnet = {
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
    }), Ze;
  }
  var Mt = {}, Yr = {}, Ft = {}, er = {}, _n;
  function Ka() {
    if (_n) return er;
    _n = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(er, "__esModule", {
      value: true
    }), er.encode = er.decode = er.check = void 0;
    function t(l) {
      if (l.length < 8 || l.length > 72 || l[0] !== 48 || l[1] !== l.length - 2 || l[2] !== 2) return false;
      const f = l[3];
      if (f === 0 || 5 + f >= l.length || l[4 + f] !== 2) return false;
      const i = l[5 + f];
      return !(i === 0 || 6 + f + i !== l.length || l[4] & 128 || f > 1 && l[4] === 0 && !(l[5] & 128) || l[f + 6] & 128 || i > 1 && l[f + 6] === 0 && !(l[f + 7] & 128));
    }
    er.check = t;
    function g(l) {
      if (l.length < 8) throw new Error("DER sequence length is too short");
      if (l.length > 72) throw new Error("DER sequence length is too long");
      if (l[0] !== 48) throw new Error("Expected DER sequence");
      if (l[1] !== l.length - 2) throw new Error("DER sequence length is invalid");
      if (l[2] !== 2) throw new Error("Expected DER integer");
      const f = l[3];
      if (f === 0) throw new Error("R length is zero");
      if (5 + f >= l.length) throw new Error("R length is too long");
      if (l[4 + f] !== 2) throw new Error("Expected DER integer (2)");
      const i = l[5 + f];
      if (i === 0) throw new Error("S length is zero");
      if (6 + f + i !== l.length) throw new Error("S length is invalid");
      if (l[4] & 128) throw new Error("R value is negative");
      if (f > 1 && l[4] === 0 && !(l[5] & 128)) throw new Error("R value excessively padded");
      if (l[f + 6] & 128) throw new Error("S value is negative");
      if (i > 1 && l[f + 6] === 0 && !(l[f + 7] & 128)) throw new Error("S value excessively padded");
      return {
        r: l.slice(4, 4 + f),
        s: l.slice(6 + f)
      };
    }
    er.decode = g;
    function v(l, f) {
      const i = l.length, r = f.length;
      if (i === 0) throw new Error("R length is zero");
      if (r === 0) throw new Error("S length is zero");
      if (i > 33) throw new Error("R length is too long");
      if (r > 33) throw new Error("S length is too long");
      if (l[0] & 128) throw new Error("R value is negative");
      if (f[0] & 128) throw new Error("S value is negative");
      if (i > 1 && l[0] === 0 && !(l[1] & 128)) throw new Error("R value excessively padded");
      if (r > 1 && f[0] === 0 && !(f[1] & 128)) throw new Error("S value excessively padded");
      const n = e.allocUnsafe(6 + i + r);
      return n[0] = 48, n[1] = n.length - 2, n[2] = 2, n[3] = l.length, l.copy(n, 4), n[4 + i] = 2, n[5 + i] = f.length, f.copy(n, 6 + i), n;
    }
    return er.encode = v, er;
  }
  var Sr = {}, En;
  function Wi() {
    if (En) return Sr;
    En = 1, Object.defineProperty(Sr, "__esModule", {
      value: true
    }), Sr.REVERSE_OPS = Sr.OPS = void 0;
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
    Sr.OPS = e;
    const t = {};
    Sr.REVERSE_OPS = t;
    for (const g of Object.keys(e)) {
      const v = e[g];
      t[v] = g;
    }
    return Sr;
  }
  var rr = {}, kn;
  function Cs() {
    if (kn) return rr;
    kn = 1, Object.defineProperty(rr, "__esModule", {
      value: true
    }), rr.decode = rr.encode = rr.encodingLength = void 0;
    const e = Wi();
    function t(l) {
      return l < e.OPS.OP_PUSHDATA1 ? 1 : l <= 255 ? 2 : l <= 65535 ? 3 : 5;
    }
    rr.encodingLength = t;
    function g(l, f, i) {
      const r = t(f);
      return r === 1 ? l.writeUInt8(f, i) : r === 2 ? (l.writeUInt8(e.OPS.OP_PUSHDATA1, i), l.writeUInt8(f, i + 1)) : r === 3 ? (l.writeUInt8(e.OPS.OP_PUSHDATA2, i), l.writeUInt16LE(f, i + 1)) : (l.writeUInt8(e.OPS.OP_PUSHDATA4, i), l.writeUInt32LE(f, i + 1)), r;
    }
    rr.encode = g;
    function v(l, f) {
      const i = l.readUInt8(f);
      let r, n;
      if (i < e.OPS.OP_PUSHDATA1) r = i, n = 1;
      else if (i === e.OPS.OP_PUSHDATA1) {
        if (f + 2 > l.length) return null;
        r = l.readUInt8(f + 1), n = 2;
      } else if (i === e.OPS.OP_PUSHDATA2) {
        if (f + 3 > l.length) return null;
        r = l.readUInt16LE(f + 1), n = 3;
      } else {
        if (f + 5 > l.length) return null;
        if (i !== e.OPS.OP_PUSHDATA4) throw new Error("Unexpected opcode");
        r = l.readUInt32LE(f + 1), n = 5;
      }
      return {
        opcode: i,
        number: r,
        size: n
      };
    }
    return rr.decode = v, rr;
  }
  var Tr = {}, Sn;
  function js() {
    if (Sn) return Tr;
    Sn = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Tr, "__esModule", {
      value: true
    }), Tr.encode = Tr.decode = void 0;
    function t(l, f, i) {
      f = f || 4, i = i === void 0 ? true : i;
      const r = l.length;
      if (r === 0) return 0;
      if (r > f) throw new TypeError("Script number overflow");
      if (i && (l[r - 1] & 127) === 0 && (r <= 1 || (l[r - 2] & 128) === 0)) throw new Error("Non-minimally encoded script number");
      if (r === 5) {
        const u = l.readUInt32LE(0), a = l.readUInt8(4);
        return a & 128 ? -((a & -129) * 4294967296 + u) : a * 4294967296 + u;
      }
      let n = 0;
      for (let u = 0; u < r; ++u) n |= l[u] << 8 * u;
      return l[r - 1] & 128 ? -(n & ~(128 << 8 * (r - 1))) : n;
    }
    Tr.decode = t;
    function g(l) {
      return l > 2147483647 ? 5 : l > 8388607 ? 4 : l > 32767 ? 3 : l > 127 ? 2 : l > 0 ? 1 : 0;
    }
    function v(l) {
      let f = Math.abs(l);
      const i = g(f), r = e.allocUnsafe(i), n = l < 0;
      for (let u = 0; u < i; ++u) r.writeUInt8(f & 255, u), f >>= 8;
      return r[i - 1] & 128 ? r.writeUInt8(n ? 128 : 0, i - 1) : n && (r[i - 1] |= 128), r;
    }
    return Tr.encode = v, Tr;
  }
  var Ir = {}, Dt = {}, Kt, Tn;
  function Vi() {
    if (Tn) return Kt;
    Tn = 1;
    var e = {
      Array: function(g) {
        return g != null && g.constructor === Array;
      },
      Boolean: function(g) {
        return typeof g == "boolean";
      },
      Function: function(g) {
        return typeof g == "function";
      },
      Nil: function(g) {
        return g == null;
      },
      Number: function(g) {
        return typeof g == "number";
      },
      Object: function(g) {
        return typeof g == "object";
      },
      String: function(g) {
        return typeof g == "string";
      },
      "": function() {
        return true;
      }
    };
    e.Null = e.Nil;
    for (var t in e) e[t].toJSON = (function(g) {
      return g;
    }).bind(null, t);
    return Kt = e, Kt;
  }
  var Wt, In;
  function Wa() {
    if (In) return Wt;
    In = 1;
    var e = Vi();
    function t(s) {
      return s.name || s.toString().match(/function (.*?)\s*\(/)[1];
    }
    function g(s) {
      return e.Nil(s) ? "" : t(s.constructor);
    }
    function v(s) {
      return e.Function(s) ? "" : e.String(s) ? JSON.stringify(s) : s && e.Object(s) ? "" : s;
    }
    function l(s, b) {
      Error.captureStackTrace && Error.captureStackTrace(s, b);
    }
    function f(s) {
      return e.Function(s) ? s.toJSON ? s.toJSON() : t(s) : e.Array(s) ? "Array" : s && e.Object(s) ? "Object" : s !== void 0 ? s : "";
    }
    function i(s, b, p) {
      var c = v(b);
      return "Expected " + f(s) + ", got" + (p !== "" ? " " + p : "") + (c !== "" ? " " + c : "");
    }
    function r(s, b, p) {
      p = p || g(b), this.message = i(s, b, p), l(this, r), this.__type = s, this.__value = b, this.__valueTypeName = p;
    }
    r.prototype = Object.create(Error.prototype), r.prototype.constructor = r;
    function n(s, b, p, c, y) {
      var w = '" of type ';
      return b === "key" && (w = '" with key type '), i('property "' + f(p) + w + f(s), c, y);
    }
    function u(s, b, p, c, y) {
      s ? (y = y || g(c), this.message = n(s, p, b, c, y)) : this.message = 'Unexpected property "' + b + '"', l(this, r), this.__label = p, this.__property = b, this.__type = s, this.__value = c, this.__valueTypeName = y;
    }
    u.prototype = Object.create(Error.prototype), u.prototype.constructor = r;
    function a(s, b) {
      return new r(s, {}, b);
    }
    function d(s, b, p) {
      return s instanceof u ? (b = b + "." + s.__property, s = new u(s.__type, b, s.__label, s.__value, s.__valueTypeName)) : s instanceof r && (s = new u(s.__type, b, p, s.__value, s.__valueTypeName)), l(s), s;
    }
    return Wt = {
      TfTypeError: r,
      TfPropertyTypeError: u,
      tfCustomError: a,
      tfSubError: d,
      tfJSON: f,
      getValueTypeName: g
    }, Wt;
  }
  var Vt, An;
  function qs() {
    if (An) return Vt;
    An = 1;
    var e = [
      "buffer",
      "Buffer"
    ], t = Vi(), g = Wa();
    function v(R) {
      return e.isBuffer(R);
    }
    function l(R) {
      return typeof R == "string" && /^([0-9a-f]{2})+$/i.test(R);
    }
    function f(R, q) {
      var x = R.toJSON();
      function P(H) {
        if (!R(H)) return false;
        if (H.length === q) return true;
        throw g.tfCustomError(x + "(Length: " + q + ")", x + "(Length: " + H.length + ")");
      }
      return P.toJSON = function() {
        return x;
      }, P;
    }
    var i = f.bind(null, t.Array), r = f.bind(null, v), n = f.bind(null, l), u = f.bind(null, t.String);
    function a(R, q, x) {
      x = x || t.Number;
      function P(H, j) {
        return x(H, j) && H > R && H < q;
      }
      return P.toJSON = function() {
        return `${x.toJSON()} between [${R}, ${q}]`;
      }, P;
    }
    var d = Math.pow(2, 53) - 1;
    function s(R) {
      return typeof R == "number" && isFinite(R);
    }
    function b(R) {
      return R << 24 >> 24 === R;
    }
    function p(R) {
      return R << 16 >> 16 === R;
    }
    function c(R) {
      return (R | 0) === R;
    }
    function y(R) {
      return typeof R == "number" && R >= -d && R <= d && Math.floor(R) === R;
    }
    function w(R) {
      return (R & 255) === R;
    }
    function E(R) {
      return (R & 65535) === R;
    }
    function k(R) {
      return R >>> 0 === R;
    }
    function S(R) {
      return typeof R == "number" && R >= 0 && R <= d && Math.floor(R) === R;
    }
    var I = {
      ArrayN: i,
      Buffer: v,
      BufferN: r,
      Finite: s,
      Hex: l,
      HexN: n,
      Int8: b,
      Int16: p,
      Int32: c,
      Int53: y,
      Range: a,
      StringN: u,
      UInt8: w,
      UInt16: E,
      UInt32: k,
      UInt53: S
    };
    for (var U in I) I[U].toJSON = (function(R) {
      return R;
    }).bind(null, U);
    return Vt = I, Vt;
  }
  var Gt, Pn;
  function Va() {
    if (Pn) return Gt;
    Pn = 1;
    var e = Wa(), t = Vi(), g = e.tfJSON, v = e.TfTypeError, l = e.TfPropertyTypeError, f = e.tfSubError, i = e.getValueTypeName, r = {
      arrayOf: function(b, p) {
        b = n(b), p = p || {};
        function c(y, w) {
          return !t.Array(y) || t.Nil(y) || p.minLength !== void 0 && y.length < p.minLength || p.maxLength !== void 0 && y.length > p.maxLength || p.length !== void 0 && y.length !== p.length ? false : y.every(function(E, k) {
            try {
              return u(b, E, w);
            } catch (S) {
              throw f(S, k);
            }
          });
        }
        return c.toJSON = function() {
          var y = "[" + g(b) + "]";
          return p.length !== void 0 ? y += "{" + p.length + "}" : (p.minLength !== void 0 || p.maxLength !== void 0) && (y += "{" + (p.minLength === void 0 ? 0 : p.minLength) + "," + (p.maxLength === void 0 ? 1 / 0 : p.maxLength) + "}"), y;
        }, c;
      },
      maybe: function s(b) {
        b = n(b);
        function p(c, y) {
          return t.Nil(c) || b(c, y, s);
        }
        return p.toJSON = function() {
          return "?" + g(b);
        }, p;
      },
      map: function(b, p) {
        b = n(b), p && (p = n(p));
        function c(y, w) {
          if (!t.Object(y) || t.Nil(y)) return false;
          for (var E in y) {
            try {
              p && u(p, E, w);
            } catch (S) {
              throw f(S, E, "key");
            }
            try {
              var k = y[E];
              u(b, k, w);
            } catch (S) {
              throw f(S, E);
            }
          }
          return true;
        }
        return p ? c.toJSON = function() {
          return "{" + g(p) + ": " + g(b) + "}";
        } : c.toJSON = function() {
          return "{" + g(b) + "}";
        }, c;
      },
      object: function(b) {
        var p = {};
        for (var c in b) p[c] = n(b[c]);
        function y(w, E) {
          if (!t.Object(w) || t.Nil(w)) return false;
          var k;
          try {
            for (k in p) {
              var S = p[k], I = w[k];
              u(S, I, E);
            }
          } catch (U) {
            throw f(U, k);
          }
          if (E) {
            for (k in w) if (!p[k]) throw new l(void 0, k);
          }
          return true;
        }
        return y.toJSON = function() {
          return g(p);
        }, y;
      },
      anyOf: function() {
        var b = [].slice.call(arguments).map(n);
        function p(c, y) {
          return b.some(function(w) {
            try {
              return u(w, c, y);
            } catch {
              return false;
            }
          });
        }
        return p.toJSON = function() {
          return b.map(g).join("|");
        }, p;
      },
      allOf: function() {
        var b = [].slice.call(arguments).map(n);
        function p(c, y) {
          return b.every(function(w) {
            try {
              return u(w, c, y);
            } catch {
              return false;
            }
          });
        }
        return p.toJSON = function() {
          return b.map(g).join(" & ");
        }, p;
      },
      quacksLike: function(b) {
        function p(c) {
          return b === i(c);
        }
        return p.toJSON = function() {
          return b;
        }, p;
      },
      tuple: function() {
        var b = [].slice.call(arguments).map(n);
        function p(c, y) {
          return t.Nil(c) || t.Nil(c.length) || y && c.length !== b.length ? false : b.every(function(w, E) {
            try {
              return u(w, c[E], y);
            } catch (k) {
              throw f(k, E);
            }
          });
        }
        return p.toJSON = function() {
          return "(" + b.map(g).join(", ") + ")";
        }, p;
      },
      value: function(b) {
        function p(c) {
          return c === b;
        }
        return p.toJSON = function() {
          return b;
        }, p;
      }
    };
    r.oneOf = r.anyOf;
    function n(s) {
      if (t.String(s)) return s[0] === "?" ? r.maybe(s.slice(1)) : t[s] || r.quacksLike(s);
      if (s && t.Object(s)) {
        if (t.Array(s)) {
          if (s.length !== 1) throw new TypeError("Expected compile() parameter of type Array of length 1");
          return r.arrayOf(s[0]);
        }
        return r.object(s);
      } else if (t.Function(s)) return s;
      return r.value(s);
    }
    function u(s, b, p, c) {
      if (t.Function(s)) {
        if (s(b, p)) return true;
        throw new v(c || s, b);
      }
      return u(n(s), b, p);
    }
    for (var a in t) u[a] = t[a];
    for (a in r) u[a] = r[a];
    var d = qs();
    for (a in d) u[a] = d[a];
    return u.compile = n, u.TfTypeError = v, u.TfPropertyTypeError = l, Gt = u, Gt;
  }
  var Bn;
  function xe() {
    return Bn || (Bn = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.oneOf = e.Null = e.BufferN = e.Function = e.UInt32 = e.UInt8 = e.tuple = e.maybe = e.Hex = e.Buffer = e.String = e.Boolean = e.Array = e.Number = e.Hash256bit = e.Hash160bit = e.Buffer256bit = e.isTaptree = e.isTapleaf = e.TAPLEAF_VERSION_MASK = e.Satoshi = e.isPoint = e.stacksEqual = e.typeforce = void 0;
      const t = ir();
      e.typeforce = Va();
      const g = t.Buffer.alloc(32, 0), v = t.Buffer.from("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f", "hex");
      function l(a, d) {
        return a.length !== d.length ? false : a.every((s, b) => s.equals(d[b]));
      }
      e.stacksEqual = l;
      function f(a) {
        if (!t.Buffer.isBuffer(a) || a.length < 33) return false;
        const d = a[0], s = a.slice(1, 33);
        if (s.compare(g) === 0 || s.compare(v) >= 0) return false;
        if ((d === 2 || d === 3) && a.length === 33) return true;
        const b = a.slice(33);
        return b.compare(g) === 0 || b.compare(v) >= 0 ? false : d === 4 && a.length === 65;
      }
      e.isPoint = f;
      const i = 21 * 1e14;
      function r(a) {
        return e.typeforce.UInt53(a) && a <= i;
      }
      e.Satoshi = r, e.TAPLEAF_VERSION_MASK = 254;
      function n(a) {
        return !a || !("output" in a) || !t.Buffer.isBuffer(a.output) ? false : a.version !== void 0 ? (a.version & e.TAPLEAF_VERSION_MASK) === a.version : true;
      }
      e.isTapleaf = n;
      function u(a) {
        return (0, e.Array)(a) ? a.length !== 2 ? false : a.every((d) => u(d)) : n(a);
      }
      e.isTaptree = u, e.Buffer256bit = e.typeforce.BufferN(32), e.Hash160bit = e.typeforce.BufferN(20), e.Hash256bit = e.typeforce.BufferN(32), e.Number = e.typeforce.Number, e.Array = e.typeforce.Array, e.Boolean = e.typeforce.Boolean, e.String = e.typeforce.String, e.Buffer = e.typeforce.Buffer, e.Hex = e.typeforce.Hex, e.maybe = e.typeforce.maybe, e.tuple = e.typeforce.tuple, e.UInt8 = e.typeforce.UInt8, e.UInt32 = e.typeforce.UInt32, e.Function = e.typeforce.Function, e.BufferN = e.typeforce.BufferN, e.Null = e.typeforce.Null, e.oneOf = e.typeforce.oneOf;
    }(Dt)), Dt;
  }
  var On;
  function Ms() {
    if (On) return Ir;
    On = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Ir, "__esModule", {
      value: true
    }), Ir.encode = Ir.decode = void 0;
    const t = Ka(), g = qe(), v = xe(), { typeforce: l } = v, f = e.alloc(1, 0);
    function i(a) {
      let d = 0;
      for (; a[d] === 0; ) ++d;
      return d === a.length ? f : (a = a.slice(d), a[0] & 128 ? e.concat([
        f,
        a
      ], 1 + a.length) : a);
    }
    function r(a) {
      a[0] === 0 && (a = a.slice(1));
      const d = e.alloc(32, 0), s = Math.max(0, 32 - a.length);
      return a.copy(d, s), d;
    }
    function n(a) {
      const d = a.readUInt8(a.length - 1);
      if (!(0, g.isDefinedHashType)(d)) throw new Error("Invalid hashType " + d);
      const s = t.decode(a.slice(0, -1)), b = r(s.r), p = r(s.s);
      return {
        signature: e.concat([
          b,
          p
        ], 64),
        hashType: d
      };
    }
    Ir.decode = n;
    function u(a, d) {
      if (l({
        signature: v.BufferN(64),
        hashType: v.UInt8
      }, {
        signature: a,
        hashType: d
      }), !(0, g.isDefinedHashType)(d)) throw new Error("Invalid hashType " + d);
      const s = e.allocUnsafe(1);
      s.writeUInt8(d, 0);
      const b = i(a.slice(0, 32)), p = i(a.slice(32, 64));
      return e.concat([
        t.encode(b, p),
        s
      ]);
    }
    return Ir.encode = u, Ir;
  }
  var Rn;
  function qe() {
    return Rn || (Rn = 1, function(e) {
      var t = [
        "buffer",
        "Buffer"
      ];
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.signature = e.number = e.isCanonicalScriptSignature = e.isDefinedHashType = e.isCanonicalPubKey = e.toStack = e.fromASM = e.toASM = e.decompile = e.compile = e.countNonPushOnlyOPs = e.isPushOnly = e.OPS = void 0;
      const g = Ka(), v = Wi();
      Object.defineProperty(e, "OPS", {
        enumerable: true,
        get: function() {
          return v.OPS;
        }
      });
      const l = Cs(), f = js(), i = Ms(), r = xe(), { typeforce: n } = r, u = v.OPS.OP_RESERVED;
      function a(P) {
        return r.Number(P) && (P === v.OPS.OP_0 || P >= v.OPS.OP_1 && P <= v.OPS.OP_16 || P === v.OPS.OP_1NEGATE);
      }
      function d(P) {
        return r.Buffer(P) || a(P);
      }
      function s(P) {
        return r.Array(P) && P.every(d);
      }
      e.isPushOnly = s;
      function b(P) {
        return P.length - P.filter(d).length;
      }
      e.countNonPushOnlyOPs = b;
      function p(P) {
        if (P.length === 0) return v.OPS.OP_0;
        if (P.length === 1) {
          if (P[0] >= 1 && P[0] <= 16) return u + P[0];
          if (P[0] === 129) return v.OPS.OP_1NEGATE;
        }
      }
      function c(P) {
        return t.isBuffer(P);
      }
      function y(P) {
        return r.Array(P);
      }
      function w(P) {
        return t.isBuffer(P);
      }
      function E(P) {
        if (c(P)) return P;
        n(r.Array, P);
        const H = P.reduce((W, X) => w(X) ? X.length === 1 && p(X) !== void 0 ? W + 1 : W + l.encodingLength(X.length) + X.length : W + 1, 0), j = t.allocUnsafe(H);
        let C = 0;
        if (P.forEach((W) => {
          if (w(W)) {
            const X = p(W);
            if (X !== void 0) {
              j.writeUInt8(X, C), C += 1;
              return;
            }
            C += l.encode(j, W.length, C), W.copy(j, C), C += W.length;
          } else j.writeUInt8(W, C), C += 1;
        }), C !== j.length) throw new Error("Could not decode chunks");
        return j;
      }
      e.compile = E;
      function k(P) {
        if (y(P)) return P;
        n(r.Buffer, P);
        const H = [];
        let j = 0;
        for (; j < P.length; ) {
          const C = P[j];
          if (C > v.OPS.OP_0 && C <= v.OPS.OP_PUSHDATA4) {
            const W = l.decode(P, j);
            if (W === null || (j += W.size, j + W.number > P.length)) return null;
            const X = P.slice(j, j + W.number);
            j += W.number;
            const ee = p(X);
            ee !== void 0 ? H.push(ee) : H.push(X);
          } else H.push(C), j += 1;
        }
        return H;
      }
      e.decompile = k;
      function S(P) {
        if (c(P) && (P = k(P)), !P) throw new Error("Could not convert invalid chunks to ASM");
        return P.map((H) => {
          if (w(H)) {
            const j = p(H);
            if (j === void 0) return H.toString("hex");
            H = j;
          }
          return v.REVERSE_OPS[H];
        }).join(" ");
      }
      e.toASM = S;
      function I(P) {
        return n(r.String, P), E(P.split(" ").map((H) => v.OPS[H] !== void 0 ? v.OPS[H] : (n(r.Hex, H), t.from(H, "hex"))));
      }
      e.fromASM = I;
      function U(P) {
        return P = k(P), n(s, P), P.map((H) => w(H) ? H : H === v.OPS.OP_0 ? t.allocUnsafe(0) : f.encode(H - u));
      }
      e.toStack = U;
      function R(P) {
        return r.isPoint(P);
      }
      e.isCanonicalPubKey = R;
      function q(P) {
        const H = P & -129;
        return H > 0 && H < 4;
      }
      e.isDefinedHashType = q;
      function x(P) {
        return !t.isBuffer(P) || !q(P[P.length - 1]) ? false : g.check(P.slice(0, -1));
      }
      e.isCanonicalScriptSignature = x, e.number = f, e.signature = i;
    }(Ft)), Ft;
  }
  var Ar = {}, Un;
  function yr() {
    if (Un) return Ar;
    Un = 1, Object.defineProperty(Ar, "__esModule", {
      value: true
    }), Ar.value = Ar.prop = void 0;
    function e(g, v, l) {
      Object.defineProperty(g, v, {
        configurable: true,
        enumerable: true,
        get() {
          const f = l.call(this);
          return this[v] = f, f;
        },
        set(f) {
          Object.defineProperty(this, v, {
            configurable: true,
            enumerable: true,
            value: f,
            writable: true
          });
        }
      });
    }
    Ar.prop = e;
    function t(g) {
      let v;
      return () => (v !== void 0 || (v = g()), v);
    }
    return Ar.value = t, Ar;
  }
  var zn;
  function Fs() {
    if (zn) return Yr;
    zn = 1, Object.defineProperty(Yr, "__esModule", {
      value: true
    }), Yr.p2data = void 0;
    const e = Ye(), t = qe(), g = xe(), v = yr(), l = t.OPS;
    function f(i, r) {
      if (!i.data && !i.output) throw new TypeError("Not enough data");
      r = Object.assign({
        validate: true
      }, r || {}), (0, g.typeforce)({
        network: g.typeforce.maybe(g.typeforce.Object),
        output: g.typeforce.maybe(g.typeforce.Buffer),
        data: g.typeforce.maybe(g.typeforce.arrayOf(g.typeforce.Buffer))
      }, i);
      const u = {
        name: "embed",
        network: i.network || e.bitcoin
      };
      if (v.prop(u, "output", () => {
        if (i.data) return t.compile([
          l.OP_RETURN
        ].concat(i.data));
      }), v.prop(u, "data", () => {
        if (i.output) return t.decompile(i.output).slice(1);
      }), r.validate && i.output) {
        const a = t.decompile(i.output);
        if (a[0] !== l.OP_RETURN) throw new TypeError("Output is invalid");
        if (!a.slice(1).every(g.typeforce.Buffer)) throw new TypeError("Output is invalid");
        if (i.data && !(0, g.stacksEqual)(i.data, u.data)) throw new TypeError("Data mismatch");
      }
      return Object.assign(u, i);
    }
    return Yr.p2data = f, Yr;
  }
  var Jr = {}, Nn;
  function Ds() {
    if (Nn) return Jr;
    Nn = 1, Object.defineProperty(Jr, "__esModule", {
      value: true
    }), Jr.p2ms = void 0;
    const e = Ye(), t = qe(), g = xe(), v = yr(), l = t.OPS, f = l.OP_RESERVED;
    function i(r, n) {
      if (!r.input && !r.output && !(r.pubkeys && r.m !== void 0) && !r.signatures) throw new TypeError("Not enough data");
      n = Object.assign({
        validate: true
      }, n || {});
      function u(c) {
        return t.isCanonicalScriptSignature(c) || (n.allowIncomplete && c === l.OP_0) !== void 0;
      }
      (0, g.typeforce)({
        network: g.typeforce.maybe(g.typeforce.Object),
        m: g.typeforce.maybe(g.typeforce.Number),
        n: g.typeforce.maybe(g.typeforce.Number),
        output: g.typeforce.maybe(g.typeforce.Buffer),
        pubkeys: g.typeforce.maybe(g.typeforce.arrayOf(g.isPoint)),
        signatures: g.typeforce.maybe(g.typeforce.arrayOf(u)),
        input: g.typeforce.maybe(g.typeforce.Buffer)
      }, r);
      const d = {
        network: r.network || e.bitcoin
      };
      let s = [], b = false;
      function p(c) {
        b || (b = true, s = t.decompile(c), d.m = s[0] - f, d.n = s[s.length - 2] - f, d.pubkeys = s.slice(1, -2));
      }
      if (v.prop(d, "output", () => {
        if (r.m && d.n && r.pubkeys) return t.compile([].concat(f + r.m, r.pubkeys, f + d.n, l.OP_CHECKMULTISIG));
      }), v.prop(d, "m", () => {
        if (d.output) return p(d.output), d.m;
      }), v.prop(d, "n", () => {
        if (d.pubkeys) return d.pubkeys.length;
      }), v.prop(d, "pubkeys", () => {
        if (r.output) return p(r.output), d.pubkeys;
      }), v.prop(d, "signatures", () => {
        if (r.input) return t.decompile(r.input).slice(1);
      }), v.prop(d, "input", () => {
        if (r.signatures) return t.compile([
          l.OP_0
        ].concat(r.signatures));
      }), v.prop(d, "witness", () => {
        if (d.input) return [];
      }), v.prop(d, "name", () => {
        if (!(!d.m || !d.n)) return `p2ms(${d.m} of ${d.n})`;
      }), n.validate) {
        if (r.output) {
          if (p(r.output), !g.typeforce.Number(s[0])) throw new TypeError("Output is invalid");
          if (!g.typeforce.Number(s[s.length - 2])) throw new TypeError("Output is invalid");
          if (s[s.length - 1] !== l.OP_CHECKMULTISIG) throw new TypeError("Output is invalid");
          if (d.m <= 0 || d.n > 16 || d.m > d.n || d.n !== s.length - 3) throw new TypeError("Output is invalid");
          if (!d.pubkeys.every((c) => (0, g.isPoint)(c))) throw new TypeError("Output is invalid");
          if (r.m !== void 0 && r.m !== d.m) throw new TypeError("m mismatch");
          if (r.n !== void 0 && r.n !== d.n) throw new TypeError("n mismatch");
          if (r.pubkeys && !(0, g.stacksEqual)(r.pubkeys, d.pubkeys)) throw new TypeError("Pubkeys mismatch");
        }
        if (r.pubkeys) {
          if (r.n !== void 0 && r.n !== r.pubkeys.length) throw new TypeError("Pubkey count mismatch");
          if (d.n = r.pubkeys.length, d.n < d.m) throw new TypeError("Pubkey count cannot be less than m");
        }
        if (r.signatures) {
          if (r.signatures.length < d.m) throw new TypeError("Not enough signatures provided");
          if (r.signatures.length > d.m) throw new TypeError("Too many signatures provided");
        }
        if (r.input) {
          if (r.input[0] !== l.OP_0) throw new TypeError("Input is invalid");
          if (d.signatures.length === 0 || !d.signatures.every(u)) throw new TypeError("Input has invalid signature(s)");
          if (r.signatures && !(0, g.stacksEqual)(r.signatures, d.signatures)) throw new TypeError("Signature mismatch");
          if (r.m !== void 0 && r.m !== r.signatures.length) throw new TypeError("Signature count mismatch");
        }
      }
      return Object.assign(d, r);
    }
    return Jr.p2ms = i, Jr;
  }
  var Qr = {}, Hn;
  function Ks() {
    if (Hn) return Qr;
    Hn = 1, Object.defineProperty(Qr, "__esModule", {
      value: true
    }), Qr.p2pk = void 0;
    const e = Ye(), t = qe(), g = xe(), v = yr(), l = t.OPS;
    function f(i, r) {
      if (!i.input && !i.output && !i.pubkey && !i.input && !i.signature) throw new TypeError("Not enough data");
      r = Object.assign({
        validate: true
      }, r || {}), (0, g.typeforce)({
        network: g.typeforce.maybe(g.typeforce.Object),
        output: g.typeforce.maybe(g.typeforce.Buffer),
        pubkey: g.typeforce.maybe(g.isPoint),
        signature: g.typeforce.maybe(t.isCanonicalScriptSignature),
        input: g.typeforce.maybe(g.typeforce.Buffer)
      }, i);
      const n = v.value(() => t.decompile(i.input)), a = {
        name: "p2pk",
        network: i.network || e.bitcoin
      };
      if (v.prop(a, "output", () => {
        if (i.pubkey) return t.compile([
          i.pubkey,
          l.OP_CHECKSIG
        ]);
      }), v.prop(a, "pubkey", () => {
        if (i.output) return i.output.slice(1, -1);
      }), v.prop(a, "signature", () => {
        if (i.input) return n()[0];
      }), v.prop(a, "input", () => {
        if (i.signature) return t.compile([
          i.signature
        ]);
      }), v.prop(a, "witness", () => {
        if (a.input) return [];
      }), r.validate) {
        if (i.output) {
          if (i.output[i.output.length - 1] !== l.OP_CHECKSIG) throw new TypeError("Output is invalid");
          if (!(0, g.isPoint)(a.pubkey)) throw new TypeError("Output pubkey is invalid");
          if (i.pubkey && !i.pubkey.equals(a.pubkey)) throw new TypeError("Pubkey mismatch");
        }
        if (i.signature && i.input && !i.input.equals(a.input)) throw new TypeError("Signature mismatch");
        if (i.input) {
          if (n().length !== 1) throw new TypeError("Input is invalid");
          if (!t.isCanonicalScriptSignature(a.signature)) throw new TypeError("Input has invalid signature");
        }
      }
      return Object.assign(a, i);
    }
    return Qr.p2pk = f, Qr;
  }
  var Zr = {}, $t = {}, Pr = {}, je = {}, xn;
  function Ga() {
    if (xn) return je;
    xn = 1, Object.defineProperty(je, "__esModule", {
      value: true
    }), je.ripemd160 = je.RIPEMD160 = je.md5 = je.MD5 = je.sha1 = je.SHA1 = void 0;
    const e = qa(), t = Mr(), g = Uint32Array.from([
      1732584193,
      4023233417,
      2562383102,
      271733878,
      3285377520
    ]), v = new Uint32Array(80);
    class l extends e.HashMD {
      constructor() {
        super(64, 20, 8, false), this.A = g[0] | 0, this.B = g[1] | 0, this.C = g[2] | 0, this.D = g[3] | 0, this.E = g[4] | 0;
      }
      get() {
        const { A: x, B: P, C: H, D: j, E: C } = this;
        return [
          x,
          P,
          H,
          j,
          C
        ];
      }
      set(x, P, H, j, C) {
        this.A = x | 0, this.B = P | 0, this.C = H | 0, this.D = j | 0, this.E = C | 0;
      }
      process(x, P) {
        for (let ee = 0; ee < 16; ee++, P += 4) v[ee] = x.getUint32(P, false);
        for (let ee = 16; ee < 80; ee++) v[ee] = (0, t.rotl)(v[ee - 3] ^ v[ee - 8] ^ v[ee - 14] ^ v[ee - 16], 1);
        let { A: H, B: j, C, D: W, E: X } = this;
        for (let ee = 0; ee < 80; ee++) {
          let re, ue;
          ee < 20 ? (re = (0, e.Chi)(j, C, W), ue = 1518500249) : ee < 40 ? (re = j ^ C ^ W, ue = 1859775393) : ee < 60 ? (re = (0, e.Maj)(j, C, W), ue = 2400959708) : (re = j ^ C ^ W, ue = 3395469782);
          const O = (0, t.rotl)(H, 5) + re + X + ue + v[ee] | 0;
          X = W, W = C, C = (0, t.rotl)(j, 30), j = H, H = O;
        }
        H = H + this.A | 0, j = j + this.B | 0, C = C + this.C | 0, W = W + this.D | 0, X = X + this.E | 0, this.set(H, j, C, W, X);
      }
      roundClean() {
        (0, t.clean)(v);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0), (0, t.clean)(this.buffer);
      }
    }
    je.SHA1 = l, je.sha1 = (0, t.createHasher)(() => new l());
    const f = Math.pow(2, 32), i = Array.from({
      length: 64
    }, (q, x) => Math.floor(f * Math.abs(Math.sin(x + 1)))), r = g.slice(0, 4), n = new Uint32Array(16);
    class u extends e.HashMD {
      constructor() {
        super(64, 16, 8, true), this.A = r[0] | 0, this.B = r[1] | 0, this.C = r[2] | 0, this.D = r[3] | 0;
      }
      get() {
        const { A: x, B: P, C: H, D: j } = this;
        return [
          x,
          P,
          H,
          j
        ];
      }
      set(x, P, H, j) {
        this.A = x | 0, this.B = P | 0, this.C = H | 0, this.D = j | 0;
      }
      process(x, P) {
        for (let X = 0; X < 16; X++, P += 4) n[X] = x.getUint32(P, true);
        let { A: H, B: j, C, D: W } = this;
        for (let X = 0; X < 64; X++) {
          let ee, re, ue;
          X < 16 ? (ee = (0, e.Chi)(j, C, W), re = X, ue = [
            7,
            12,
            17,
            22
          ]) : X < 32 ? (ee = (0, e.Chi)(W, j, C), re = (5 * X + 1) % 16, ue = [
            5,
            9,
            14,
            20
          ]) : X < 48 ? (ee = j ^ C ^ W, re = (3 * X + 5) % 16, ue = [
            4,
            11,
            16,
            23
          ]) : (ee = C ^ (j | ~W), re = 7 * X % 16, ue = [
            6,
            10,
            15,
            21
          ]), ee = ee + H + i[X] + n[re], H = W, W = C, C = j, j = j + (0, t.rotl)(ee, ue[X % 4]);
        }
        H = H + this.A | 0, j = j + this.B | 0, C = C + this.C | 0, W = W + this.D | 0, this.set(H, j, C, W);
      }
      roundClean() {
        (0, t.clean)(n);
      }
      destroy() {
        this.set(0, 0, 0, 0), (0, t.clean)(this.buffer);
      }
    }
    je.MD5 = u, je.md5 = (0, t.createHasher)(() => new u());
    const a = Uint8Array.from([
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
    ]), d = Uint8Array.from(new Array(16).fill(0).map((q, x) => x)), s = d.map((q) => (9 * q + 5) % 16), b = (() => {
      const P = [
        [
          d
        ],
        [
          s
        ]
      ];
      for (let H = 0; H < 4; H++) for (let j of P) j.push(j[H].map((C) => a[C]));
      return P;
    })(), p = b[0], c = b[1], y = [
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
    ].map((q) => Uint8Array.from(q)), w = p.map((q, x) => q.map((P) => y[x][P])), E = c.map((q, x) => q.map((P) => y[x][P])), k = Uint32Array.from([
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
    function I(q, x, P, H) {
      return q === 0 ? x ^ P ^ H : q === 1 ? x & P | ~x & H : q === 2 ? (x | ~P) ^ H : q === 3 ? x & H | P & ~H : x ^ (P | ~H);
    }
    const U = new Uint32Array(16);
    class R extends e.HashMD {
      constructor() {
        super(64, 20, 8, true), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
      }
      get() {
        const { h0: x, h1: P, h2: H, h3: j, h4: C } = this;
        return [
          x,
          P,
          H,
          j,
          C
        ];
      }
      set(x, P, H, j, C) {
        this.h0 = x | 0, this.h1 = P | 0, this.h2 = H | 0, this.h3 = j | 0, this.h4 = C | 0;
      }
      process(x, P) {
        for (let K = 0; K < 16; K++, P += 4) U[K] = x.getUint32(P, true);
        let H = this.h0 | 0, j = H, C = this.h1 | 0, W = C, X = this.h2 | 0, ee = X, re = this.h3 | 0, ue = re, O = this.h4 | 0, F = O;
        for (let K = 0; K < 5; K++) {
          const Z = 4 - K, ae = k[K], D = S[K], Y = p[K], L = c[K], M = w[K], V = E[K];
          for (let $ = 0; $ < 16; $++) {
            const oe = (0, t.rotl)(H + I(K, C, X, re) + U[Y[$]] + ae, M[$]) + O | 0;
            H = O, O = re, re = (0, t.rotl)(X, 10) | 0, X = C, C = oe;
          }
          for (let $ = 0; $ < 16; $++) {
            const oe = (0, t.rotl)(j + I(Z, W, ee, ue) + U[L[$]] + D, V[$]) + F | 0;
            j = F, F = ue, ue = (0, t.rotl)(ee, 10) | 0, ee = W, W = oe;
          }
        }
        this.set(this.h1 + X + ue | 0, this.h2 + re + F | 0, this.h3 + O + j | 0, this.h4 + H + W | 0, this.h0 + C + ee | 0);
      }
      roundClean() {
        (0, t.clean)(U);
      }
      destroy() {
        this.destroyed = true, (0, t.clean)(this.buffer), this.set(0, 0, 0, 0, 0);
      }
    }
    return je.RIPEMD160 = R, je.ripemd160 = (0, t.createHasher)(() => new R()), je;
  }
  var Ln;
  function $a() {
    if (Ln) return Pr;
    Ln = 1, Object.defineProperty(Pr, "__esModule", {
      value: true
    }), Pr.ripemd160 = Pr.RIPEMD160 = void 0;
    const e = Ga();
    return Pr.RIPEMD160 = e.RIPEMD160, Pr.ripemd160 = e.ripemd160, Pr;
  }
  var Br = {}, Cn;
  function Ws() {
    if (Cn) return Br;
    Cn = 1, Object.defineProperty(Br, "__esModule", {
      value: true
    }), Br.sha1 = Br.SHA1 = void 0;
    const e = Ga();
    return Br.SHA1 = e.SHA1, Br.sha1 = e.sha1, Br;
  }
  var jn;
  function nr() {
    return jn || (jn = 1, function(e) {
      var t = [
        "buffer",
        "Buffer"
      ];
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.taggedHash = e.TAGGED_HASH_PREFIXES = e.TAGS = e.hash256 = e.hash160 = e.sha256 = e.sha1 = e.ripemd160 = void 0;
      const g = $a(), v = Ws(), l = pt();
      function f(d) {
        return t.from((0, g.ripemd160)(Uint8Array.from(d)));
      }
      e.ripemd160 = f;
      function i(d) {
        return t.from((0, v.sha1)(Uint8Array.from(d)));
      }
      e.sha1 = i;
      function r(d) {
        return t.from((0, l.sha256)(Uint8Array.from(d)));
      }
      e.sha256 = r;
      function n(d) {
        return t.from((0, g.ripemd160)((0, l.sha256)(Uint8Array.from(d))));
      }
      e.hash160 = n;
      function u(d) {
        return t.from((0, l.sha256)((0, l.sha256)(Uint8Array.from(d))));
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
        "BIP0340/challenge": t.from([
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
        "BIP0340/aux": t.from([
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
        "BIP0340/nonce": t.from([
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
        TapLeaf: t.from([
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
        TapBranch: t.from([
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
        TapSighash: t.from([
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
        TapTweak: t.from([
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
        "KeyAgg list": t.from([
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
        "KeyAgg coefficient": t.from([
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
      function a(d, s) {
        return r(t.concat([
          e.TAGGED_HASH_PREFIXES[d],
          s
        ]));
      }
      e.taggedHash = a;
    }($t)), $t;
  }
  var Xt, qn;
  function Vs() {
    if (qn) return Xt;
    qn = 1;
    function e(t) {
      if (t.length >= 255) throw new TypeError("Alphabet too long");
      for (var g = new Uint8Array(256), v = 0; v < g.length; v++) g[v] = 255;
      for (var l = 0; l < t.length; l++) {
        var f = t.charAt(l), i = f.charCodeAt(0);
        if (g[i] !== 255) throw new TypeError(f + " is ambiguous");
        g[i] = l;
      }
      var r = t.length, n = t.charAt(0), u = Math.log(r) / Math.log(256), a = Math.log(256) / Math.log(r);
      function d(p) {
        if (p instanceof Uint8Array || (ArrayBuffer.isView(p) ? p = new Uint8Array(p.buffer, p.byteOffset, p.byteLength) : Array.isArray(p) && (p = Uint8Array.from(p))), !(p instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (p.length === 0) return "";
        for (var c = 0, y = 0, w = 0, E = p.length; w !== E && p[w] === 0; ) w++, c++;
        for (var k = (E - w) * a + 1 >>> 0, S = new Uint8Array(k); w !== E; ) {
          for (var I = p[w], U = 0, R = k - 1; (I !== 0 || U < y) && R !== -1; R--, U++) I += 256 * S[R] >>> 0, S[R] = I % r >>> 0, I = I / r >>> 0;
          if (I !== 0) throw new Error("Non-zero carry");
          y = U, w++;
        }
        for (var q = k - y; q !== k && S[q] === 0; ) q++;
        for (var x = n.repeat(c); q < k; ++q) x += t.charAt(S[q]);
        return x;
      }
      function s(p) {
        if (typeof p != "string") throw new TypeError("Expected String");
        if (p.length === 0) return new Uint8Array();
        for (var c = 0, y = 0, w = 0; p[c] === n; ) y++, c++;
        for (var E = (p.length - c) * u + 1 >>> 0, k = new Uint8Array(E); p[c]; ) {
          var S = p.charCodeAt(c);
          if (S > 255) return;
          var I = g[S];
          if (I === 255) return;
          for (var U = 0, R = E - 1; (I !== 0 || U < w) && R !== -1; R--, U++) I += r * k[R] >>> 0, k[R] = I % 256 >>> 0, I = I / 256 >>> 0;
          if (I !== 0) throw new Error("Non-zero carry");
          w = U, c++;
        }
        for (var q = E - w; q !== E && k[q] === 0; ) q++;
        for (var x = new Uint8Array(y + (E - q)), P = y; q !== E; ) x[P++] = k[q++];
        return x;
      }
      function b(p) {
        var c = s(p);
        if (c) return c;
        throw new Error("Non-base" + r + " character");
      }
      return {
        encode: d,
        decodeUnsafe: s,
        decode: b
      };
    }
    return Xt = e, Xt;
  }
  var Yt, Mn;
  function Gs() {
    return Mn || (Mn = 1, Yt = Vs()("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")), Yt;
  }
  var Jt, Fn;
  function $s() {
    if (Fn) return Jt;
    Fn = 1;
    var e = Gs();
    return Jt = function(t) {
      function g(i) {
        var r = Uint8Array.from(i), n = t(r), u = r.length + 4, a = new Uint8Array(u);
        return a.set(r, 0), a.set(n.subarray(0, 4), r.length), e.encode(a, u);
      }
      function v(i) {
        var r = i.slice(0, -4), n = i.slice(-4), u = t(r);
        if (!(n[0] ^ u[0] | n[1] ^ u[1] | n[2] ^ u[2] | n[3] ^ u[3])) return r;
      }
      function l(i) {
        var r = e.decodeUnsafe(i);
        if (r) return v(r);
      }
      function f(i) {
        var r = e.decode(i), n = v(r);
        if (!n) throw new Error("Invalid checksum");
        return n;
      }
      return {
        encode: g,
        decode: f,
        decodeUnsafe: l
      };
    }, Jt;
  }
  var Qt, Dn;
  function Gi() {
    if (Dn) return Qt;
    Dn = 1;
    var { sha256: e } = pt(), t = $s();
    function g(v) {
      return e(e(v));
    }
    return Qt = t(g), Qt;
  }
  var Kn;
  function Xs() {
    if (Kn) return Zr;
    Kn = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Zr, "__esModule", {
      value: true
    }), Zr.p2pkh = void 0;
    const t = nr(), g = Ye(), v = qe(), l = xe(), f = yr(), i = Gi(), r = v.OPS;
    function n(u, a) {
      if (!u.address && !u.hash && !u.output && !u.pubkey && !u.input) throw new TypeError("Not enough data");
      a = Object.assign({
        validate: true
      }, a || {}), (0, l.typeforce)({
        network: l.typeforce.maybe(l.typeforce.Object),
        address: l.typeforce.maybe(l.typeforce.String),
        hash: l.typeforce.maybe(l.typeforce.BufferN(20)),
        output: l.typeforce.maybe(l.typeforce.BufferN(25)),
        pubkey: l.typeforce.maybe(l.isPoint),
        signature: l.typeforce.maybe(v.isCanonicalScriptSignature),
        input: l.typeforce.maybe(l.typeforce.Buffer)
      }, u);
      const d = f.value(() => {
        const c = e.from(i.decode(u.address)), y = c.readUInt8(0), w = c.slice(1);
        return {
          version: y,
          hash: w
        };
      }), s = f.value(() => v.decompile(u.input)), b = u.network || g.bitcoin, p = {
        name: "p2pkh",
        network: b
      };
      if (f.prop(p, "address", () => {
        if (!p.hash) return;
        const c = e.allocUnsafe(21);
        return c.writeUInt8(b.pubKeyHash, 0), p.hash.copy(c, 1), i.encode(c);
      }), f.prop(p, "hash", () => {
        if (u.output) return u.output.slice(3, 23);
        if (u.address) return d().hash;
        if (u.pubkey || p.pubkey) return t.hash160(u.pubkey || p.pubkey);
      }), f.prop(p, "output", () => {
        if (p.hash) return v.compile([
          r.OP_DUP,
          r.OP_HASH160,
          p.hash,
          r.OP_EQUALVERIFY,
          r.OP_CHECKSIG
        ]);
      }), f.prop(p, "pubkey", () => {
        if (u.input) return s()[1];
      }), f.prop(p, "signature", () => {
        if (u.input) return s()[0];
      }), f.prop(p, "input", () => {
        if (u.pubkey && u.signature) return v.compile([
          u.signature,
          u.pubkey
        ]);
      }), f.prop(p, "witness", () => {
        if (p.input) return [];
      }), a.validate) {
        let c = e.from([]);
        if (u.address) {
          if (d().version !== b.pubKeyHash) throw new TypeError("Invalid version or Network mismatch");
          if (d().hash.length !== 20) throw new TypeError("Invalid address");
          c = d().hash;
        }
        if (u.hash) {
          if (c.length > 0 && !c.equals(u.hash)) throw new TypeError("Hash mismatch");
          c = u.hash;
        }
        if (u.output) {
          if (u.output.length !== 25 || u.output[0] !== r.OP_DUP || u.output[1] !== r.OP_HASH160 || u.output[2] !== 20 || u.output[23] !== r.OP_EQUALVERIFY || u.output[24] !== r.OP_CHECKSIG) throw new TypeError("Output is invalid");
          const y = u.output.slice(3, 23);
          if (c.length > 0 && !c.equals(y)) throw new TypeError("Hash mismatch");
          c = y;
        }
        if (u.pubkey) {
          const y = t.hash160(u.pubkey);
          if (c.length > 0 && !c.equals(y)) throw new TypeError("Hash mismatch");
          c = y;
        }
        if (u.input) {
          const y = s();
          if (y.length !== 2) throw new TypeError("Input is invalid");
          if (!v.isCanonicalScriptSignature(y[0])) throw new TypeError("Input has invalid signature");
          if (!(0, l.isPoint)(y[1])) throw new TypeError("Input has invalid pubkey");
          if (u.signature && !u.signature.equals(y[0])) throw new TypeError("Signature mismatch");
          if (u.pubkey && !u.pubkey.equals(y[1])) throw new TypeError("Pubkey mismatch");
          const w = t.hash160(y[1]);
          if (c.length > 0 && !c.equals(w)) throw new TypeError("Hash mismatch");
        }
      }
      return Object.assign(p, u);
    }
    return Zr.p2pkh = n, Zr;
  }
  var et = {}, Wn;
  function Ys() {
    if (Wn) return et;
    Wn = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(et, "__esModule", {
      value: true
    }), et.p2sh = void 0;
    const t = nr(), g = Ye(), v = qe(), l = xe(), f = yr(), i = Gi(), r = v.OPS;
    function n(u, a) {
      if (!u.address && !u.hash && !u.output && !u.redeem && !u.input) throw new TypeError("Not enough data");
      a = Object.assign({
        validate: true
      }, a || {}), (0, l.typeforce)({
        network: l.typeforce.maybe(l.typeforce.Object),
        address: l.typeforce.maybe(l.typeforce.String),
        hash: l.typeforce.maybe(l.typeforce.BufferN(20)),
        output: l.typeforce.maybe(l.typeforce.BufferN(23)),
        redeem: l.typeforce.maybe({
          network: l.typeforce.maybe(l.typeforce.Object),
          output: l.typeforce.maybe(l.typeforce.Buffer),
          input: l.typeforce.maybe(l.typeforce.Buffer),
          witness: l.typeforce.maybe(l.typeforce.arrayOf(l.typeforce.Buffer))
        }),
        input: l.typeforce.maybe(l.typeforce.Buffer),
        witness: l.typeforce.maybe(l.typeforce.arrayOf(l.typeforce.Buffer))
      }, u);
      let d = u.network;
      d || (d = u.redeem && u.redeem.network || g.bitcoin);
      const s = {
        network: d
      }, b = f.value(() => {
        const y = e.from(i.decode(u.address)), w = y.readUInt8(0), E = y.slice(1);
        return {
          version: w,
          hash: E
        };
      }), p = f.value(() => v.decompile(u.input)), c = f.value(() => {
        const y = p(), w = y[y.length - 1];
        return {
          network: d,
          output: w === r.OP_FALSE ? e.from([]) : w,
          input: v.compile(y.slice(0, -1)),
          witness: u.witness || []
        };
      });
      if (f.prop(s, "address", () => {
        if (!s.hash) return;
        const y = e.allocUnsafe(21);
        return y.writeUInt8(s.network.scriptHash, 0), s.hash.copy(y, 1), i.encode(y);
      }), f.prop(s, "hash", () => {
        if (u.output) return u.output.slice(2, 22);
        if (u.address) return b().hash;
        if (s.redeem && s.redeem.output) return t.hash160(s.redeem.output);
      }), f.prop(s, "output", () => {
        if (s.hash) return v.compile([
          r.OP_HASH160,
          s.hash,
          r.OP_EQUAL
        ]);
      }), f.prop(s, "redeem", () => {
        if (u.input) return c();
      }), f.prop(s, "input", () => {
        if (!(!u.redeem || !u.redeem.input || !u.redeem.output)) return v.compile([].concat(v.decompile(u.redeem.input), u.redeem.output));
      }), f.prop(s, "witness", () => {
        if (s.redeem && s.redeem.witness) return s.redeem.witness;
        if (s.input) return [];
      }), f.prop(s, "name", () => {
        const y = [
          "p2sh"
        ];
        return s.redeem !== void 0 && s.redeem.name !== void 0 && y.push(s.redeem.name), y.join("-");
      }), a.validate) {
        let y = e.from([]);
        if (u.address) {
          if (b().version !== d.scriptHash) throw new TypeError("Invalid version or Network mismatch");
          if (b().hash.length !== 20) throw new TypeError("Invalid address");
          y = b().hash;
        }
        if (u.hash) {
          if (y.length > 0 && !y.equals(u.hash)) throw new TypeError("Hash mismatch");
          y = u.hash;
        }
        if (u.output) {
          if (u.output.length !== 23 || u.output[0] !== r.OP_HASH160 || u.output[1] !== 20 || u.output[22] !== r.OP_EQUAL) throw new TypeError("Output is invalid");
          const E = u.output.slice(2, 22);
          if (y.length > 0 && !y.equals(E)) throw new TypeError("Hash mismatch");
          y = E;
        }
        const w = (E) => {
          if (E.output) {
            const k = v.decompile(E.output);
            if (!k || k.length < 1) throw new TypeError("Redeem.output too short");
            if (E.output.byteLength > 520) throw new TypeError("Redeem.output unspendable if larger than 520 bytes");
            if (v.countNonPushOnlyOPs(k) > 201) throw new TypeError("Redeem.output unspendable with more than 201 non-push ops");
            const S = t.hash160(E.output);
            if (y.length > 0 && !y.equals(S)) throw new TypeError("Hash mismatch");
            y = S;
          }
          if (E.input) {
            const k = E.input.length > 0, S = E.witness && E.witness.length > 0;
            if (!k && !S) throw new TypeError("Empty input");
            if (k && S) throw new TypeError("Input and witness provided");
            if (k) {
              const I = v.decompile(E.input);
              if (!v.isPushOnly(I)) throw new TypeError("Non push-only scriptSig");
            }
          }
        };
        if (u.input) {
          const E = p();
          if (!E || E.length < 1) throw new TypeError("Input too short");
          if (!e.isBuffer(c().output)) throw new TypeError("Input is invalid");
          w(c());
        }
        if (u.redeem) {
          if (u.redeem.network && u.redeem.network !== d) throw new TypeError("Network mismatch");
          if (u.input) {
            const E = c();
            if (u.redeem.output && !u.redeem.output.equals(E.output)) throw new TypeError("Redeem.output mismatch");
            if (u.redeem.input && !u.redeem.input.equals(E.input)) throw new TypeError("Redeem.input mismatch");
          }
          w(u.redeem);
        }
        if (u.witness && u.redeem && u.redeem.witness && !(0, l.stacksEqual)(u.redeem.witness, u.witness)) throw new TypeError("Witness and redeem.witness mismatch");
      }
      return Object.assign(s, u);
    }
    return et.p2sh = n, et;
  }
  var rt = {}, Or = {}, Vn;
  function Nt() {
    if (Vn) return Or;
    Vn = 1, Object.defineProperty(Or, "__esModule", {
      value: true
    }), Or.bech32m = Or.bech32 = void 0;
    const e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", t = {};
    for (let u = 0; u < e.length; u++) {
      const a = e.charAt(u);
      t[a] = u;
    }
    function g(u) {
      const a = u >> 25;
      return (u & 33554431) << 5 ^ -(a >> 0 & 1) & 996825010 ^ -(a >> 1 & 1) & 642813549 ^ -(a >> 2 & 1) & 513874426 ^ -(a >> 3 & 1) & 1027748829 ^ -(a >> 4 & 1) & 705979059;
    }
    function v(u) {
      let a = 1;
      for (let d = 0; d < u.length; ++d) {
        const s = u.charCodeAt(d);
        if (s < 33 || s > 126) return "Invalid prefix (" + u + ")";
        a = g(a) ^ s >> 5;
      }
      a = g(a);
      for (let d = 0; d < u.length; ++d) {
        const s = u.charCodeAt(d);
        a = g(a) ^ s & 31;
      }
      return a;
    }
    function l(u, a, d, s) {
      let b = 0, p = 0;
      const c = (1 << d) - 1, y = [];
      for (let w = 0; w < u.length; ++w) for (b = b << a | u[w], p += a; p >= d; ) p -= d, y.push(b >> p & c);
      if (s) p > 0 && y.push(b << d - p & c);
      else {
        if (p >= a) return "Excess padding";
        if (b << d - p & c) return "Non-zero padding";
      }
      return y;
    }
    function f(u) {
      return l(u, 8, 5, true);
    }
    function i(u) {
      const a = l(u, 5, 8, false);
      if (Array.isArray(a)) return a;
    }
    function r(u) {
      const a = l(u, 5, 8, false);
      if (Array.isArray(a)) return a;
      throw new Error(a);
    }
    function n(u) {
      let a;
      u === "bech32" ? a = 1 : a = 734539939;
      function d(c, y, w) {
        if (w = w || 90, c.length + 7 + y.length > w) throw new TypeError("Exceeds length limit");
        c = c.toLowerCase();
        let E = v(c);
        if (typeof E == "string") throw new Error(E);
        let k = c + "1";
        for (let S = 0; S < y.length; ++S) {
          const I = y[S];
          if (I >> 5 !== 0) throw new Error("Non 5-bit word");
          E = g(E) ^ I, k += e.charAt(I);
        }
        for (let S = 0; S < 6; ++S) E = g(E);
        E ^= a;
        for (let S = 0; S < 6; ++S) {
          const I = E >> (5 - S) * 5 & 31;
          k += e.charAt(I);
        }
        return k;
      }
      function s(c, y) {
        if (y = y || 90, c.length < 8) return c + " too short";
        if (c.length > y) return "Exceeds length limit";
        const w = c.toLowerCase(), E = c.toUpperCase();
        if (c !== w && c !== E) return "Mixed-case string " + c;
        c = w;
        const k = c.lastIndexOf("1");
        if (k === -1) return "No separator character for " + c;
        if (k === 0) return "Missing prefix for " + c;
        const S = c.slice(0, k), I = c.slice(k + 1);
        if (I.length < 6) return "Data too short";
        let U = v(S);
        if (typeof U == "string") return U;
        const R = [];
        for (let q = 0; q < I.length; ++q) {
          const x = I.charAt(q), P = t[x];
          if (P === void 0) return "Unknown character " + x;
          U = g(U) ^ P, !(q + 6 >= I.length) && R.push(P);
        }
        return U !== a ? "Invalid checksum for " + c : {
          prefix: S,
          words: R
        };
      }
      function b(c, y) {
        const w = s(c, y);
        if (typeof w == "object") return w;
      }
      function p(c, y) {
        const w = s(c, y);
        if (typeof w == "object") return w;
        throw new Error(w);
      }
      return {
        decodeUnsafe: b,
        decode: p,
        encode: d,
        toWords: f,
        fromWordsUnsafe: i,
        fromWords: r
      };
    }
    return Or.bech32 = n("bech32"), Or.bech32m = n("bech32m"), Or;
  }
  var Gn;
  function Js() {
    if (Gn) return rt;
    Gn = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(rt, "__esModule", {
      value: true
    }), rt.p2wpkh = void 0;
    const t = nr(), g = Ye(), v = qe(), l = xe(), f = yr(), i = Nt(), r = v.OPS, n = e.alloc(0);
    function u(a, d) {
      if (!a.address && !a.hash && !a.output && !a.pubkey && !a.witness) throw new TypeError("Not enough data");
      d = Object.assign({
        validate: true
      }, d || {}), (0, l.typeforce)({
        address: l.typeforce.maybe(l.typeforce.String),
        hash: l.typeforce.maybe(l.typeforce.BufferN(20)),
        input: l.typeforce.maybe(l.typeforce.BufferN(0)),
        network: l.typeforce.maybe(l.typeforce.Object),
        output: l.typeforce.maybe(l.typeforce.BufferN(22)),
        pubkey: l.typeforce.maybe(l.isPoint),
        signature: l.typeforce.maybe(v.isCanonicalScriptSignature),
        witness: l.typeforce.maybe(l.typeforce.arrayOf(l.typeforce.Buffer))
      }, a);
      const s = f.value(() => {
        const c = i.bech32.decode(a.address), y = c.words.shift(), w = i.bech32.fromWords(c.words);
        return {
          version: y,
          prefix: c.prefix,
          data: e.from(w)
        };
      }), b = a.network || g.bitcoin, p = {
        name: "p2wpkh",
        network: b
      };
      if (f.prop(p, "address", () => {
        if (!p.hash) return;
        const c = i.bech32.toWords(p.hash);
        return c.unshift(0), i.bech32.encode(b.bech32, c);
      }), f.prop(p, "hash", () => {
        if (a.output) return a.output.slice(2, 22);
        if (a.address) return s().data;
        if (a.pubkey || p.pubkey) return t.hash160(a.pubkey || p.pubkey);
      }), f.prop(p, "output", () => {
        if (p.hash) return v.compile([
          r.OP_0,
          p.hash
        ]);
      }), f.prop(p, "pubkey", () => {
        if (a.pubkey) return a.pubkey;
        if (a.witness) return a.witness[1];
      }), f.prop(p, "signature", () => {
        if (a.witness) return a.witness[0];
      }), f.prop(p, "input", () => {
        if (p.witness) return n;
      }), f.prop(p, "witness", () => {
        if (a.pubkey && a.signature) return [
          a.signature,
          a.pubkey
        ];
      }), d.validate) {
        let c = e.from([]);
        if (a.address) {
          if (b && b.bech32 !== s().prefix) throw new TypeError("Invalid prefix or Network mismatch");
          if (s().version !== 0) throw new TypeError("Invalid address version");
          if (s().data.length !== 20) throw new TypeError("Invalid address data");
          c = s().data;
        }
        if (a.hash) {
          if (c.length > 0 && !c.equals(a.hash)) throw new TypeError("Hash mismatch");
          c = a.hash;
        }
        if (a.output) {
          if (a.output.length !== 22 || a.output[0] !== r.OP_0 || a.output[1] !== 20) throw new TypeError("Output is invalid");
          if (c.length > 0 && !c.equals(a.output.slice(2))) throw new TypeError("Hash mismatch");
          c = a.output.slice(2);
        }
        if (a.pubkey) {
          const y = t.hash160(a.pubkey);
          if (c.length > 0 && !c.equals(y)) throw new TypeError("Hash mismatch");
          if (c = y, !(0, l.isPoint)(a.pubkey) || a.pubkey.length !== 33) throw new TypeError("Invalid pubkey for p2wpkh");
        }
        if (a.witness) {
          if (a.witness.length !== 2) throw new TypeError("Witness is invalid");
          if (!v.isCanonicalScriptSignature(a.witness[0])) throw new TypeError("Witness has invalid signature");
          if (!(0, l.isPoint)(a.witness[1]) || a.witness[1].length !== 33) throw new TypeError("Witness has invalid pubkey");
          if (a.signature && !a.signature.equals(a.witness[0])) throw new TypeError("Signature mismatch");
          if (a.pubkey && !a.pubkey.equals(a.witness[1])) throw new TypeError("Pubkey mismatch");
          const y = t.hash160(a.witness[1]);
          if (c.length > 0 && !c.equals(y)) throw new TypeError("Hash mismatch");
        }
      }
      return Object.assign(p, a);
    }
    return rt.p2wpkh = u, rt;
  }
  var tt = {}, $n;
  function Qs() {
    if ($n) return tt;
    $n = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(tt, "__esModule", {
      value: true
    }), tt.p2wsh = void 0;
    const t = nr(), g = Ye(), v = qe(), l = xe(), f = yr(), i = Nt(), r = v.OPS, n = e.alloc(0);
    function u(d) {
      return !!(e.isBuffer(d) && d.length === 65 && d[0] === 4 && (0, l.isPoint)(d));
    }
    function a(d, s) {
      if (!d.address && !d.hash && !d.output && !d.redeem && !d.witness) throw new TypeError("Not enough data");
      s = Object.assign({
        validate: true
      }, s || {}), (0, l.typeforce)({
        network: l.typeforce.maybe(l.typeforce.Object),
        address: l.typeforce.maybe(l.typeforce.String),
        hash: l.typeforce.maybe(l.typeforce.BufferN(32)),
        output: l.typeforce.maybe(l.typeforce.BufferN(34)),
        redeem: l.typeforce.maybe({
          input: l.typeforce.maybe(l.typeforce.Buffer),
          network: l.typeforce.maybe(l.typeforce.Object),
          output: l.typeforce.maybe(l.typeforce.Buffer),
          witness: l.typeforce.maybe(l.typeforce.arrayOf(l.typeforce.Buffer))
        }),
        input: l.typeforce.maybe(l.typeforce.BufferN(0)),
        witness: l.typeforce.maybe(l.typeforce.arrayOf(l.typeforce.Buffer))
      }, d);
      const b = f.value(() => {
        const w = i.bech32.decode(d.address), E = w.words.shift(), k = i.bech32.fromWords(w.words);
        return {
          version: E,
          prefix: w.prefix,
          data: e.from(k)
        };
      }), p = f.value(() => v.decompile(d.redeem.input));
      let c = d.network;
      c || (c = d.redeem && d.redeem.network || g.bitcoin);
      const y = {
        network: c
      };
      if (f.prop(y, "address", () => {
        if (!y.hash) return;
        const w = i.bech32.toWords(y.hash);
        return w.unshift(0), i.bech32.encode(c.bech32, w);
      }), f.prop(y, "hash", () => {
        if (d.output) return d.output.slice(2);
        if (d.address) return b().data;
        if (y.redeem && y.redeem.output) return t.sha256(y.redeem.output);
      }), f.prop(y, "output", () => {
        if (y.hash) return v.compile([
          r.OP_0,
          y.hash
        ]);
      }), f.prop(y, "redeem", () => {
        if (d.witness) return {
          output: d.witness[d.witness.length - 1],
          input: n,
          witness: d.witness.slice(0, -1)
        };
      }), f.prop(y, "input", () => {
        if (y.witness) return n;
      }), f.prop(y, "witness", () => {
        if (d.redeem && d.redeem.input && d.redeem.input.length > 0 && d.redeem.output && d.redeem.output.length > 0) {
          const w = v.toStack(p());
          return y.redeem = Object.assign({
            witness: w
          }, d.redeem), y.redeem.input = n, [].concat(w, d.redeem.output);
        }
        if (d.redeem && d.redeem.output && d.redeem.witness) return [].concat(d.redeem.witness, d.redeem.output);
      }), f.prop(y, "name", () => {
        const w = [
          "p2wsh"
        ];
        return y.redeem !== void 0 && y.redeem.name !== void 0 && w.push(y.redeem.name), w.join("-");
      }), s.validate) {
        let w = e.from([]);
        if (d.address) {
          if (b().prefix !== c.bech32) throw new TypeError("Invalid prefix or Network mismatch");
          if (b().version !== 0) throw new TypeError("Invalid address version");
          if (b().data.length !== 32) throw new TypeError("Invalid address data");
          w = b().data;
        }
        if (d.hash) {
          if (w.length > 0 && !w.equals(d.hash)) throw new TypeError("Hash mismatch");
          w = d.hash;
        }
        if (d.output) {
          if (d.output.length !== 34 || d.output[0] !== r.OP_0 || d.output[1] !== 32) throw new TypeError("Output is invalid");
          const E = d.output.slice(2);
          if (w.length > 0 && !w.equals(E)) throw new TypeError("Hash mismatch");
          w = E;
        }
        if (d.redeem) {
          if (d.redeem.network && d.redeem.network !== c) throw new TypeError("Network mismatch");
          if (d.redeem.input && d.redeem.input.length > 0 && d.redeem.witness && d.redeem.witness.length > 0) throw new TypeError("Ambiguous witness source");
          if (d.redeem.output) {
            const E = v.decompile(d.redeem.output);
            if (!E || E.length < 1) throw new TypeError("Redeem.output is invalid");
            if (d.redeem.output.byteLength > 3600) throw new TypeError("Redeem.output unspendable if larger than 3600 bytes");
            if (v.countNonPushOnlyOPs(E) > 201) throw new TypeError("Redeem.output unspendable with more than 201 non-push ops");
            const k = t.sha256(d.redeem.output);
            if (w.length > 0 && !w.equals(k)) throw new TypeError("Hash mismatch");
            w = k;
          }
          if (d.redeem.input && !v.isPushOnly(p())) throw new TypeError("Non push-only scriptSig");
          if (d.witness && d.redeem.witness && !(0, l.stacksEqual)(d.witness, d.redeem.witness)) throw new TypeError("Witness and redeem.witness mismatch");
          if (d.redeem.input && p().some(u) || d.redeem.output && (v.decompile(d.redeem.output) || []).some(u)) throw new TypeError("redeem.input or redeem.output contains uncompressed pubkey");
        }
        if (d.witness && d.witness.length > 0) {
          const E = d.witness[d.witness.length - 1];
          if (d.redeem && d.redeem.output && !d.redeem.output.equals(E)) throw new TypeError("Witness and redeem.output mismatch");
          if (d.witness.some(u) || (v.decompile(E) || []).some(u)) throw new TypeError("Witness contains uncompressed pubkey");
        }
      }
      return Object.assign(y, d);
    }
    return tt.p2wsh = a, tt;
  }
  var it = {}, Rr = {}, Xn;
  function $i() {
    if (Xn) return Rr;
    Xn = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Rr, "__esModule", {
      value: true
    }), Rr.getEccLib = Rr.initEccLib = void 0;
    const t = {};
    function g(n, u) {
      n ? n !== t.eccLib && ((u == null ? void 0 : u.DANGER_DO_NOT_VERIFY_ECCLIB) || f(n), t.eccLib = n) : t.eccLib = n;
    }
    Rr.initEccLib = g;
    function v() {
      if (!t.eccLib) throw new Error("No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance");
      return t.eccLib;
    }
    Rr.getEccLib = v;
    const l = (n) => e.from(n, "hex");
    function f(n) {
      i(typeof n.isXOnlyPoint == "function"), i(n.isXOnlyPoint(l("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), i(n.isXOnlyPoint(l("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e"))), i(n.isXOnlyPoint(l("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9"))), i(n.isXOnlyPoint(l("0000000000000000000000000000000000000000000000000000000000000001"))), i(!n.isXOnlyPoint(l("0000000000000000000000000000000000000000000000000000000000000000"))), i(!n.isXOnlyPoint(l("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"))), i(typeof n.xOnlyPointAddTweak == "function"), r.forEach((u) => {
        const a = n.xOnlyPointAddTweak(l(u.pubkey), l(u.tweak));
        u.result === null ? i(a === null) : (i(a !== null), i(a.parity === u.parity), i(e.from(a.xOnlyPubkey).equals(l(u.result))));
      });
    }
    function i(n) {
      if (!n) throw new Error("ecc library invalid");
    }
    const r = [
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
    return Rr;
  }
  var Zt = {}, Be = {}, wt = {
    exports: {}
  };
  var Yn;
  function Fe() {
    return Yn || (Yn = 1, function(e, t) {
      var g = ir(), v = g.Buffer;
      function l(i, r) {
        for (var n in i) r[n] = i[n];
      }
      v.from && v.alloc && v.allocUnsafe && v.allocUnsafeSlow ? e.exports = g : (l(g, t), t.Buffer = f);
      function f(i, r, n) {
        return v(i, r, n);
      }
      f.prototype = Object.create(v.prototype), l(v, f), f.from = function(i, r, n) {
        if (typeof i == "number") throw new TypeError("Argument must not be a number");
        return v(i, r, n);
      }, f.alloc = function(i, r, n) {
        if (typeof i != "number") throw new TypeError("Argument must be a number");
        var u = v(i);
        return r !== void 0 ? typeof n == "string" ? u.fill(r, n) : u.fill(r) : u.fill(0), u;
      }, f.allocUnsafe = function(i) {
        if (typeof i != "number") throw new TypeError("Argument must be a number");
        return v(i);
      }, f.allocUnsafeSlow = function(i) {
        if (typeof i != "number") throw new TypeError("Argument must be a number");
        return g.SlowBuffer(i);
      };
    }(wt, wt.exports)), wt.exports;
  }
  var ei, Jn;
  function Zs() {
    if (Jn) return ei;
    Jn = 1;
    var e = Fe().Buffer, t = 9007199254740991;
    function g(i) {
      if (i < 0 || i > t || i % 1 !== 0) throw new RangeError("value out of range");
    }
    function v(i, r, n) {
      if (g(i), r || (r = e.allocUnsafe(f(i))), !e.isBuffer(r)) throw new TypeError("buffer must be a Buffer instance");
      return n || (n = 0), i < 253 ? (r.writeUInt8(i, n), v.bytes = 1) : i <= 65535 ? (r.writeUInt8(253, n), r.writeUInt16LE(i, n + 1), v.bytes = 3) : i <= 4294967295 ? (r.writeUInt8(254, n), r.writeUInt32LE(i, n + 1), v.bytes = 5) : (r.writeUInt8(255, n), r.writeUInt32LE(i >>> 0, n + 1), r.writeUInt32LE(i / 4294967296 | 0, n + 5), v.bytes = 9), r;
    }
    function l(i, r) {
      if (!e.isBuffer(i)) throw new TypeError("buffer must be a Buffer instance");
      r || (r = 0);
      var n = i.readUInt8(r);
      if (n < 253) return l.bytes = 1, n;
      if (n === 253) return l.bytes = 3, i.readUInt16LE(r + 1);
      if (n === 254) return l.bytes = 5, i.readUInt32LE(r + 1);
      l.bytes = 9;
      var u = i.readUInt32LE(r + 1), a = i.readUInt32LE(r + 5), d = a * 4294967296 + u;
      return g(d), d;
    }
    function f(i) {
      return g(i), i < 253 ? 1 : i <= 65535 ? 3 : i <= 4294967295 ? 5 : 9;
    }
    return ei = {
      encode: v,
      decode: l,
      encodingLength: f
    }, ei;
  }
  var Qn;
  function Ht() {
    if (Qn) return Be;
    Qn = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Be, "__esModule", {
      value: true
    }), Be.BufferReader = Be.BufferWriter = Be.cloneBuffer = Be.reverseBuffer = Be.writeUInt64LE = Be.readUInt64LE = Be.varuint = void 0;
    const t = xe(), { typeforce: g } = t, v = Zs();
    Be.varuint = v;
    function l(d, s) {
      if (typeof d != "number") throw new Error("cannot write a non-number as a number");
      if (d < 0) throw new Error("specified a negative value for writing an unsigned value");
      if (d > s) throw new Error("RangeError: value out of range");
      if (Math.floor(d) !== d) throw new Error("value has a fractional component");
    }
    function f(d, s) {
      const b = d.readUInt32LE(s);
      let p = d.readUInt32LE(s + 4);
      return p *= 4294967296, l(p + b, 9007199254740991), p + b;
    }
    Be.readUInt64LE = f;
    function i(d, s, b) {
      return l(s, 9007199254740991), d.writeInt32LE(s & -1, b), d.writeUInt32LE(Math.floor(s / 4294967296), b + 4), b + 8;
    }
    Be.writeUInt64LE = i;
    function r(d) {
      if (d.length < 1) return d;
      let s = d.length - 1, b = 0;
      for (let p = 0; p < d.length / 2; p++) b = d[p], d[p] = d[s], d[s] = b, s--;
      return d;
    }
    Be.reverseBuffer = r;
    function n(d) {
      const s = e.allocUnsafe(d.length);
      return d.copy(s), s;
    }
    Be.cloneBuffer = n;
    class u {
      static withCapacity(s) {
        return new u(e.alloc(s));
      }
      constructor(s, b = 0) {
        this.buffer = s, this.offset = b, g(t.tuple(t.Buffer, t.UInt32), [
          s,
          b
        ]);
      }
      writeUInt8(s) {
        this.offset = this.buffer.writeUInt8(s, this.offset);
      }
      writeInt32(s) {
        this.offset = this.buffer.writeInt32LE(s, this.offset);
      }
      writeUInt32(s) {
        this.offset = this.buffer.writeUInt32LE(s, this.offset);
      }
      writeUInt64(s) {
        this.offset = i(this.buffer, s, this.offset);
      }
      writeVarInt(s) {
        v.encode(s, this.buffer, this.offset), this.offset += v.encode.bytes;
      }
      writeSlice(s) {
        if (this.buffer.length < this.offset + s.length) throw new Error("Cannot write slice out of bounds");
        this.offset += s.copy(this.buffer, this.offset);
      }
      writeVarSlice(s) {
        this.writeVarInt(s.length), this.writeSlice(s);
      }
      writeVector(s) {
        this.writeVarInt(s.length), s.forEach((b) => this.writeVarSlice(b));
      }
      end() {
        if (this.buffer.length === this.offset) return this.buffer;
        throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
      }
    }
    Be.BufferWriter = u;
    class a {
      constructor(s, b = 0) {
        this.buffer = s, this.offset = b, g(t.tuple(t.Buffer, t.UInt32), [
          s,
          b
        ]);
      }
      readUInt8() {
        const s = this.buffer.readUInt8(this.offset);
        return this.offset++, s;
      }
      readInt32() {
        const s = this.buffer.readInt32LE(this.offset);
        return this.offset += 4, s;
      }
      readUInt32() {
        const s = this.buffer.readUInt32LE(this.offset);
        return this.offset += 4, s;
      }
      readUInt64() {
        const s = f(this.buffer, this.offset);
        return this.offset += 8, s;
      }
      readVarInt() {
        const s = v.decode(this.buffer, this.offset);
        return this.offset += v.decode.bytes, s;
      }
      readSlice(s) {
        if (this.buffer.length < this.offset + s) throw new Error("Cannot read slice out of bounds");
        const b = this.buffer.slice(this.offset, this.offset + s);
        return this.offset += s, b;
      }
      readVarSlice() {
        return this.readSlice(this.readVarInt());
      }
      readVector() {
        const s = this.readVarInt(), b = [];
        for (let p = 0; p < s; p++) b.push(this.readVarSlice());
        return b;
      }
    }
    return Be.BufferReader = a, Be;
  }
  var Zn;
  function Xi() {
    return Zn || (Zn = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.tweakKey = e.tapTweakHash = e.tapleafHash = e.findScriptPath = e.toHashTree = e.rootHashFromPath = e.MAX_TAPTREE_DEPTH = e.LEAF_VERSION_TAPSCRIPT = void 0;
      const t = ir(), g = $i(), v = nr(), l = Ht(), f = xe();
      e.LEAF_VERSION_TAPSCRIPT = 192, e.MAX_TAPTREE_DEPTH = 128;
      const i = (c) => "left" in c && "right" in c;
      function r(c, y) {
        if (c.length < 33) throw new TypeError(`The control-block length is too small. Got ${c.length}, expected min 33.`);
        const w = (c.length - 33) / 32;
        let E = y;
        for (let k = 0; k < w; k++) {
          const S = c.slice(33 + 32 * k, 65 + 32 * k);
          E.compare(S) < 0 ? E = b(E, S) : E = b(S, E);
        }
        return E;
      }
      e.rootHashFromPath = r;
      function n(c) {
        if ((0, f.isTapleaf)(c)) return {
          hash: a(c)
        };
        const y = [
          n(c[0]),
          n(c[1])
        ];
        y.sort((k, S) => k.hash.compare(S.hash));
        const [w, E] = y;
        return {
          hash: b(w.hash, E.hash),
          left: w,
          right: E
        };
      }
      e.toHashTree = n;
      function u(c, y) {
        if (i(c)) {
          const w = u(c.left, y);
          if (w !== void 0) return [
            ...w,
            c.right.hash
          ];
          const E = u(c.right, y);
          if (E !== void 0) return [
            ...E,
            c.left.hash
          ];
        } else if (c.hash.equals(y)) return [];
      }
      e.findScriptPath = u;
      function a(c) {
        const y = c.version || e.LEAF_VERSION_TAPSCRIPT;
        return v.taggedHash("TapLeaf", t.Buffer.concat([
          t.Buffer.from([
            y
          ]),
          p(c.output)
        ]));
      }
      e.tapleafHash = a;
      function d(c, y) {
        return v.taggedHash("TapTweak", t.Buffer.concat(y ? [
          c,
          y
        ] : [
          c
        ]));
      }
      e.tapTweakHash = d;
      function s(c, y) {
        if (!t.Buffer.isBuffer(c) || c.length !== 32 || y && y.length !== 32) return null;
        const w = d(c, y), E = (0, g.getEccLib)().xOnlyPointAddTweak(c, w);
        return !E || E.xOnlyPubkey === null ? null : {
          parity: E.parity,
          x: t.Buffer.from(E.xOnlyPubkey)
        };
      }
      e.tweakKey = s;
      function b(c, y) {
        return v.taggedHash("TapBranch", t.Buffer.concat([
          c,
          y
        ]));
      }
      function p(c) {
        const y = l.varuint.encodingLength(c.length), w = t.Buffer.allocUnsafe(y);
        return l.varuint.encode(c.length, w), t.Buffer.concat([
          w,
          c
        ]);
      }
    }(Zt)), Zt;
  }
  var eo;
  function eu() {
    if (eo) return it;
    eo = 1, Object.defineProperty(it, "__esModule", {
      value: true
    }), it.p2tr = void 0;
    const e = ir(), t = Ye(), g = qe(), v = xe(), l = $i(), f = Xi(), i = yr(), r = Nt(), n = Yi(), u = g.OPS, a = 1, d = 80;
    function s(b, p) {
      if (!b.address && !b.output && !b.pubkey && !b.internalPubkey && !(b.witness && b.witness.length > 1)) throw new TypeError("Not enough data");
      p = Object.assign({
        validate: true
      }, p || {}), (0, v.typeforce)({
        address: v.typeforce.maybe(v.typeforce.String),
        input: v.typeforce.maybe(v.typeforce.BufferN(0)),
        network: v.typeforce.maybe(v.typeforce.Object),
        output: v.typeforce.maybe(v.typeforce.BufferN(34)),
        internalPubkey: v.typeforce.maybe(v.typeforce.BufferN(32)),
        hash: v.typeforce.maybe(v.typeforce.BufferN(32)),
        pubkey: v.typeforce.maybe(v.typeforce.BufferN(32)),
        signature: v.typeforce.maybe(v.typeforce.anyOf(v.typeforce.BufferN(64), v.typeforce.BufferN(65))),
        witness: v.typeforce.maybe(v.typeforce.arrayOf(v.typeforce.Buffer)),
        scriptTree: v.typeforce.maybe(v.isTaptree),
        redeem: v.typeforce.maybe({
          output: v.typeforce.maybe(v.typeforce.Buffer),
          redeemVersion: v.typeforce.maybe(v.typeforce.Number),
          witness: v.typeforce.maybe(v.typeforce.arrayOf(v.typeforce.Buffer))
        }),
        redeemVersion: v.typeforce.maybe(v.typeforce.Number)
      }, b);
      const c = i.value(() => (0, n.fromBech32)(b.address)), y = i.value(() => {
        if (!(!b.witness || !b.witness.length)) return b.witness.length >= 2 && b.witness[b.witness.length - 1][0] === d ? b.witness.slice(0, -1) : b.witness.slice();
      }), w = i.value(() => {
        if (b.scriptTree) return (0, f.toHashTree)(b.scriptTree);
        if (b.hash) return {
          hash: b.hash
        };
      }), E = b.network || t.bitcoin, k = {
        name: "p2tr",
        network: E
      };
      if (i.prop(k, "address", () => {
        if (!k.pubkey) return;
        const S = r.bech32m.toWords(k.pubkey);
        return S.unshift(a), r.bech32m.encode(E.bech32, S);
      }), i.prop(k, "hash", () => {
        const S = w();
        if (S) return S.hash;
        const I = y();
        if (I && I.length > 1) {
          const U = I[I.length - 1], R = U[0] & v.TAPLEAF_VERSION_MASK, q = I[I.length - 2], x = (0, f.tapleafHash)({
            output: q,
            version: R
          });
          return (0, f.rootHashFromPath)(U, x);
        }
        return null;
      }), i.prop(k, "output", () => {
        if (k.pubkey) return g.compile([
          u.OP_1,
          k.pubkey
        ]);
      }), i.prop(k, "redeemVersion", () => b.redeemVersion ? b.redeemVersion : b.redeem && b.redeem.redeemVersion !== void 0 && b.redeem.redeemVersion !== null ? b.redeem.redeemVersion : f.LEAF_VERSION_TAPSCRIPT), i.prop(k, "redeem", () => {
        const S = y();
        if (!(!S || S.length < 2)) return {
          output: S[S.length - 2],
          witness: S.slice(0, -2),
          redeemVersion: S[S.length - 1][0] & v.TAPLEAF_VERSION_MASK
        };
      }), i.prop(k, "pubkey", () => {
        if (b.pubkey) return b.pubkey;
        if (b.output) return b.output.slice(2);
        if (b.address) return c().data;
        if (k.internalPubkey) {
          const S = (0, f.tweakKey)(k.internalPubkey, k.hash);
          if (S) return S.x;
        }
      }), i.prop(k, "internalPubkey", () => {
        if (b.internalPubkey) return b.internalPubkey;
        const S = y();
        if (S && S.length > 1) return S[S.length - 1].slice(1, 33);
      }), i.prop(k, "signature", () => {
        if (b.signature) return b.signature;
        const S = y();
        if (!(!S || S.length !== 1)) return S[0];
      }), i.prop(k, "witness", () => {
        if (b.witness) return b.witness;
        const S = w();
        if (S && b.redeem && b.redeem.output && b.internalPubkey) {
          const I = (0, f.tapleafHash)({
            output: b.redeem.output,
            version: k.redeemVersion
          }), U = (0, f.findScriptPath)(S, I);
          if (!U) return;
          const R = (0, f.tweakKey)(b.internalPubkey, S.hash);
          if (!R) return;
          const q = e.Buffer.concat([
            e.Buffer.from([
              k.redeemVersion | R.parity
            ]),
            b.internalPubkey
          ].concat(U));
          return [
            b.redeem.output,
            q
          ];
        }
        if (b.signature) return [
          b.signature
        ];
      }), p.validate) {
        let S = e.Buffer.from([]);
        if (b.address) {
          if (E && E.bech32 !== c().prefix) throw new TypeError("Invalid prefix or Network mismatch");
          if (c().version !== a) throw new TypeError("Invalid address version");
          if (c().data.length !== 32) throw new TypeError("Invalid address data");
          S = c().data;
        }
        if (b.pubkey) {
          if (S.length > 0 && !S.equals(b.pubkey)) throw new TypeError("Pubkey mismatch");
          S = b.pubkey;
        }
        if (b.output) {
          if (b.output.length !== 34 || b.output[0] !== u.OP_1 || b.output[1] !== 32) throw new TypeError("Output is invalid");
          if (S.length > 0 && !S.equals(b.output.slice(2))) throw new TypeError("Pubkey mismatch");
          S = b.output.slice(2);
        }
        if (b.internalPubkey) {
          const R = (0, f.tweakKey)(b.internalPubkey, k.hash);
          if (S.length > 0 && !S.equals(R.x)) throw new TypeError("Pubkey mismatch");
          S = R.x;
        }
        if (S && S.length && !(0, l.getEccLib)().isXOnlyPoint(S)) throw new TypeError("Invalid pubkey for p2tr");
        const I = w();
        if (b.hash && I && !b.hash.equals(I.hash)) throw new TypeError("Hash mismatch");
        if (b.redeem && b.redeem.output && I) {
          const R = (0, f.tapleafHash)({
            output: b.redeem.output,
            version: k.redeemVersion
          });
          if (!(0, f.findScriptPath)(I, R)) throw new TypeError("Redeem script not in tree");
        }
        const U = y();
        if (b.redeem && k.redeem) {
          if (b.redeem.redeemVersion && b.redeem.redeemVersion !== k.redeem.redeemVersion) throw new TypeError("Redeem.redeemVersion and witness mismatch");
          if (b.redeem.output) {
            if (g.decompile(b.redeem.output).length === 0) throw new TypeError("Redeem.output is invalid");
            if (k.redeem.output && !b.redeem.output.equals(k.redeem.output)) throw new TypeError("Redeem.output and witness mismatch");
          }
          if (b.redeem.witness && k.redeem.witness && !(0, v.stacksEqual)(b.redeem.witness, k.redeem.witness)) throw new TypeError("Redeem.witness and witness mismatch");
        }
        if (U && U.length) if (U.length === 1) {
          if (b.signature && !b.signature.equals(U[0])) throw new TypeError("Signature mismatch");
        } else {
          const R = U[U.length - 1];
          if (R.length < 33) throw new TypeError(`The control-block length is too small. Got ${R.length}, expected min 33.`);
          if ((R.length - 33) % 32 !== 0) throw new TypeError(`The control-block length of ${R.length} is incorrect!`);
          const q = (R.length - 33) / 32;
          if (q > 128) throw new TypeError(`The script path is too long. Got ${q}, expected max 128.`);
          const x = R.slice(1, 33);
          if (b.internalPubkey && !b.internalPubkey.equals(x)) throw new TypeError("Internal pubkey mismatch");
          if (!(0, l.getEccLib)().isXOnlyPoint(x)) throw new TypeError("Invalid internalPubkey for p2tr witness");
          const P = R[0] & v.TAPLEAF_VERSION_MASK, H = U[U.length - 2], j = (0, f.tapleafHash)({
            output: H,
            version: P
          }), C = (0, f.rootHashFromPath)(R, j), W = (0, f.tweakKey)(x, C);
          if (!W) throw new TypeError("Invalid outputKey for p2tr witness");
          if (S.length && !S.equals(W.x)) throw new TypeError("Pubkey mismatch for p2tr witness");
          if (W.parity !== (R[0] & 1)) throw new Error("Incorrect parity");
        }
      }
      return Object.assign(k, b);
    }
    return it.p2tr = s, it;
  }
  var ro;
  function mt() {
    return ro || (ro = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.p2tr = e.p2wsh = e.p2wpkh = e.p2sh = e.p2pkh = e.p2pk = e.p2ms = e.embed = void 0;
      const t = Fs();
      Object.defineProperty(e, "embed", {
        enumerable: true,
        get: function() {
          return t.p2data;
        }
      });
      const g = Ds();
      Object.defineProperty(e, "p2ms", {
        enumerable: true,
        get: function() {
          return g.p2ms;
        }
      });
      const v = Ks();
      Object.defineProperty(e, "p2pk", {
        enumerable: true,
        get: function() {
          return v.p2pk;
        }
      });
      const l = Xs();
      Object.defineProperty(e, "p2pkh", {
        enumerable: true,
        get: function() {
          return l.p2pkh;
        }
      });
      const f = Ys();
      Object.defineProperty(e, "p2sh", {
        enumerable: true,
        get: function() {
          return f.p2sh;
        }
      });
      const i = Js();
      Object.defineProperty(e, "p2wpkh", {
        enumerable: true,
        get: function() {
          return i.p2wpkh;
        }
      });
      const r = Qs();
      Object.defineProperty(e, "p2wsh", {
        enumerable: true,
        get: function() {
          return r.p2wsh;
        }
      });
      const n = eu();
      Object.defineProperty(e, "p2tr", {
        enumerable: true,
        get: function() {
          return n.p2tr;
        }
      });
    }(Mt)), Mt;
  }
  var to;
  function Yi() {
    if (to) return Ce;
    to = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Ce, "__esModule", {
      value: true
    }), Ce.toOutputScript = Ce.fromOutputScript = Ce.toBech32 = Ce.toBase58Check = Ce.fromBech32 = Ce.fromBase58Check = void 0;
    const t = Ye(), g = mt(), v = qe(), l = xe(), f = Nt(), i = Gi(), r = 40, n = 2, u = 16, a = 2, d = 80, s = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
    function b(S, I) {
      const U = S.slice(2);
      if (U.length < n || U.length > r) throw new TypeError("Invalid program length for segwit address");
      const R = S[0] - d;
      if (R < a || R > u) throw new TypeError("Invalid version for segwit address");
      if (S[1] !== U.length) throw new TypeError("Invalid script for segwit address");
      return console.warn(s), w(U, R, I.bech32);
    }
    function p(S) {
      const I = e.from(i.decode(S));
      if (I.length < 21) throw new TypeError(S + " is too short");
      if (I.length > 21) throw new TypeError(S + " is too long");
      const U = I.readUInt8(0), R = I.slice(1);
      return {
        version: U,
        hash: R
      };
    }
    Ce.fromBase58Check = p;
    function c(S) {
      let I, U;
      try {
        I = f.bech32.decode(S);
      } catch {
      }
      if (I) {
        if (U = I.words[0], U !== 0) throw new TypeError(S + " uses wrong encoding");
      } else if (I = f.bech32m.decode(S), U = I.words[0], U === 0) throw new TypeError(S + " uses wrong encoding");
      const R = f.bech32.fromWords(I.words.slice(1));
      return {
        version: U,
        prefix: I.prefix,
        data: e.from(R)
      };
    }
    Ce.fromBech32 = c;
    function y(S, I) {
      (0, l.typeforce)((0, l.tuple)(l.Hash160bit, l.UInt8), arguments);
      const U = e.allocUnsafe(21);
      return U.writeUInt8(I, 0), S.copy(U, 1), i.encode(U);
    }
    Ce.toBase58Check = y;
    function w(S, I, U) {
      const R = f.bech32.toWords(S);
      return R.unshift(I), I === 0 ? f.bech32.encode(U, R) : f.bech32m.encode(U, R);
    }
    Ce.toBech32 = w;
    function E(S, I) {
      I = I || t.bitcoin;
      try {
        return g.p2pkh({
          output: S,
          network: I
        }).address;
      } catch {
      }
      try {
        return g.p2sh({
          output: S,
          network: I
        }).address;
      } catch {
      }
      try {
        return g.p2wpkh({
          output: S,
          network: I
        }).address;
      } catch {
      }
      try {
        return g.p2wsh({
          output: S,
          network: I
        }).address;
      } catch {
      }
      try {
        return g.p2tr({
          output: S,
          network: I
        }).address;
      } catch {
      }
      try {
        return b(S, I);
      } catch {
      }
      throw new Error(v.toASM(S) + " has no matching Address");
    }
    Ce.fromOutputScript = E;
    function k(S, I) {
      I = I || t.bitcoin;
      let U, R;
      try {
        U = p(S);
      } catch {
      }
      if (U) {
        if (U.version === I.pubKeyHash) return g.p2pkh({
          hash: U.hash
        }).output;
        if (U.version === I.scriptHash) return g.p2sh({
          hash: U.hash
        }).output;
      } else {
        try {
          R = c(S);
        } catch {
        }
        if (R) {
          if (R.prefix !== I.bech32) throw new Error(S + " has an invalid prefix");
          if (R.version === 0) {
            if (R.data.length === 20) return g.p2wpkh({
              hash: R.data
            }).output;
            if (R.data.length === 32) return g.p2wsh({
              hash: R.data
            }).output;
          } else if (R.version === 1) {
            if (R.data.length === 32) return g.p2tr({
              pubkey: R.data
            }).output;
          } else if (R.version >= a && R.version <= u && R.data.length >= n && R.data.length <= r) return console.warn(s), v.compile([
            R.version + d,
            R.data
          ]);
        }
      }
      throw new Error(S + " has no matching Script");
    }
    return Ce.toOutputScript = k, Ce;
  }
  var nt = {}, ot = {}, io;
  function ru() {
    if (io) return ot;
    io = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(ot, "__esModule", {
      value: true
    }), ot.fastMerkleRoot = void 0;
    function t(g, v) {
      if (!Array.isArray(g)) throw TypeError("Expected values Array");
      if (typeof v != "function") throw TypeError("Expected digest Function");
      let l = g.length;
      const f = g.concat();
      for (; l > 1; ) {
        let i = 0;
        for (let r = 0; r < l; r += 2, ++i) {
          const n = f[r], u = r + 1 === l ? n : f[r + 1], a = e.concat([
            n,
            u
          ]);
          f[i] = v(a);
        }
        l = i;
      }
      return f[0];
    }
    return ot.fastMerkleRoot = t, ot;
  }
  var at = {}, no;
  function bt() {
    if (no) return at;
    no = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(at, "__esModule", {
      value: true
    }), at.Transaction = void 0;
    const t = Ht(), g = nr(), v = qe(), l = qe(), f = xe(), { typeforce: i } = f;
    function r(w) {
      const E = w.length;
      return t.varuint.encodingLength(E) + E;
    }
    function n(w) {
      const E = w.length;
      return t.varuint.encodingLength(E) + w.reduce((k, S) => k + r(S), 0);
    }
    const u = e.allocUnsafe(0), a = [], d = e.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"), s = e.from("0000000000000000000000000000000000000000000000000000000000000001", "hex"), b = e.from("ffffffffffffffff", "hex"), p = {
      script: u,
      valueBuffer: b
    };
    function c(w) {
      return w.value !== void 0;
    }
    class y {
      constructor() {
        this.version = 1, this.locktime = 0, this.ins = [], this.outs = [];
      }
      static fromBuffer(E, k) {
        const S = new t.BufferReader(E), I = new y();
        I.version = S.readInt32();
        const U = S.readUInt8(), R = S.readUInt8();
        let q = false;
        U === y.ADVANCED_TRANSACTION_MARKER && R === y.ADVANCED_TRANSACTION_FLAG ? q = true : S.offset -= 2;
        const x = S.readVarInt();
        for (let H = 0; H < x; ++H) I.ins.push({
          hash: S.readSlice(32),
          index: S.readUInt32(),
          script: S.readVarSlice(),
          sequence: S.readUInt32(),
          witness: a
        });
        const P = S.readVarInt();
        for (let H = 0; H < P; ++H) I.outs.push({
          value: S.readUInt64(),
          script: S.readVarSlice()
        });
        if (q) {
          for (let H = 0; H < x; ++H) I.ins[H].witness = S.readVector();
          if (!I.hasWitnesses()) throw new Error("Transaction has superfluous witness data");
        }
        if (I.locktime = S.readUInt32(), k) return I;
        if (S.offset !== E.length) throw new Error("Transaction has unexpected data");
        return I;
      }
      static fromHex(E) {
        return y.fromBuffer(e.from(E, "hex"), false);
      }
      static isCoinbaseHash(E) {
        i(f.Hash256bit, E);
        for (let k = 0; k < 32; ++k) if (E[k] !== 0) return false;
        return true;
      }
      isCoinbase() {
        return this.ins.length === 1 && y.isCoinbaseHash(this.ins[0].hash);
      }
      addInput(E, k, S, I) {
        return i(f.tuple(f.Hash256bit, f.UInt32, f.maybe(f.UInt32), f.maybe(f.Buffer)), arguments), f.Null(S) && (S = y.DEFAULT_SEQUENCE), this.ins.push({
          hash: E,
          index: k,
          script: I || u,
          sequence: S,
          witness: a
        }) - 1;
      }
      addOutput(E, k) {
        return i(f.tuple(f.Buffer, f.Satoshi), arguments), this.outs.push({
          script: E,
          value: k
        }) - 1;
      }
      hasWitnesses() {
        return this.ins.some((E) => E.witness.length !== 0);
      }
      stripWitnesses() {
        this.ins.forEach((E) => {
          E.witness = a;
        });
      }
      weight() {
        const E = this.byteLength(false), k = this.byteLength(true);
        return E * 3 + k;
      }
      virtualSize() {
        return Math.ceil(this.weight() / 4);
      }
      byteLength(E = true) {
        const k = E && this.hasWitnesses();
        return (k ? 10 : 8) + t.varuint.encodingLength(this.ins.length) + t.varuint.encodingLength(this.outs.length) + this.ins.reduce((S, I) => S + 40 + r(I.script), 0) + this.outs.reduce((S, I) => S + 8 + r(I.script), 0) + (k ? this.ins.reduce((S, I) => S + n(I.witness), 0) : 0);
      }
      clone() {
        const E = new y();
        return E.version = this.version, E.locktime = this.locktime, E.ins = this.ins.map((k) => ({
          hash: k.hash,
          index: k.index,
          script: k.script,
          sequence: k.sequence,
          witness: k.witness
        })), E.outs = this.outs.map((k) => ({
          script: k.script,
          value: k.value
        })), E;
      }
      hashForSignature(E, k, S) {
        if (i(f.tuple(f.UInt32, f.Buffer, f.Number), arguments), E >= this.ins.length) return s;
        const I = v.compile(v.decompile(k).filter((q) => q !== l.OPS.OP_CODESEPARATOR)), U = this.clone();
        if ((S & 31) === y.SIGHASH_NONE) U.outs = [], U.ins.forEach((q, x) => {
          x !== E && (q.sequence = 0);
        });
        else if ((S & 31) === y.SIGHASH_SINGLE) {
          if (E >= this.outs.length) return s;
          U.outs.length = E + 1;
          for (let q = 0; q < E; q++) U.outs[q] = p;
          U.ins.forEach((q, x) => {
            x !== E && (q.sequence = 0);
          });
        }
        S & y.SIGHASH_ANYONECANPAY ? (U.ins = [
          U.ins[E]
        ], U.ins[0].script = I) : (U.ins.forEach((q) => {
          q.script = u;
        }), U.ins[E].script = I);
        const R = e.allocUnsafe(U.byteLength(false) + 4);
        return R.writeInt32LE(S, R.length - 4), U.__toBuffer(R, 0, false), g.hash256(R);
      }
      hashForWitnessV1(E, k, S, I, U, R) {
        if (i(f.tuple(f.UInt32, i.arrayOf(f.Buffer), i.arrayOf(f.Satoshi), f.UInt32), arguments), S.length !== this.ins.length || k.length !== this.ins.length) throw new Error("Must supply prevout script and value for all inputs");
        const q = I === y.SIGHASH_DEFAULT ? y.SIGHASH_ALL : I & y.SIGHASH_OUTPUT_MASK, P = (I & y.SIGHASH_INPUT_MASK) === y.SIGHASH_ANYONECANPAY, H = q === y.SIGHASH_NONE, j = q === y.SIGHASH_SINGLE;
        let C = u, W = u, X = u, ee = u, re = u;
        if (!P) {
          let K = t.BufferWriter.withCapacity(36 * this.ins.length);
          this.ins.forEach((Z) => {
            K.writeSlice(Z.hash), K.writeUInt32(Z.index);
          }), C = g.sha256(K.end()), K = t.BufferWriter.withCapacity(8 * this.ins.length), S.forEach((Z) => K.writeUInt64(Z)), W = g.sha256(K.end()), K = t.BufferWriter.withCapacity(k.map(r).reduce((Z, ae) => Z + ae)), k.forEach((Z) => K.writeVarSlice(Z)), X = g.sha256(K.end()), K = t.BufferWriter.withCapacity(4 * this.ins.length), this.ins.forEach((Z) => K.writeUInt32(Z.sequence)), ee = g.sha256(K.end());
        }
        if (H || j) {
          if (j && E < this.outs.length) {
            const K = this.outs[E], Z = t.BufferWriter.withCapacity(8 + r(K.script));
            Z.writeUInt64(K.value), Z.writeVarSlice(K.script), re = g.sha256(Z.end());
          }
        } else {
          const K = this.outs.map((ae) => 8 + r(ae.script)).reduce((ae, D) => ae + D), Z = t.BufferWriter.withCapacity(K);
          this.outs.forEach((ae) => {
            Z.writeUInt64(ae.value), Z.writeVarSlice(ae.script);
          }), re = g.sha256(Z.end());
        }
        const ue = (U ? 2 : 0) + (R ? 1 : 0), O = 174 - (P ? 49 : 0) - (H ? 32 : 0) + (R ? 32 : 0) + (U ? 37 : 0), F = t.BufferWriter.withCapacity(O);
        if (F.writeUInt8(I), F.writeInt32(this.version), F.writeUInt32(this.locktime), F.writeSlice(C), F.writeSlice(W), F.writeSlice(X), F.writeSlice(ee), H || j || F.writeSlice(re), F.writeUInt8(ue), P) {
          const K = this.ins[E];
          F.writeSlice(K.hash), F.writeUInt32(K.index), F.writeUInt64(S[E]), F.writeVarSlice(k[E]), F.writeUInt32(K.sequence);
        } else F.writeUInt32(E);
        if (R) {
          const K = t.BufferWriter.withCapacity(r(R));
          K.writeVarSlice(R), F.writeSlice(g.sha256(K.end()));
        }
        return j && F.writeSlice(re), U && (F.writeSlice(U), F.writeUInt8(0), F.writeUInt32(4294967295)), g.taggedHash("TapSighash", e.concat([
          e.from([
            0
          ]),
          F.end()
        ]));
      }
      hashForWitnessV0(E, k, S, I) {
        i(f.tuple(f.UInt32, f.Buffer, f.Satoshi, f.UInt32), arguments);
        let U = e.from([]), R, q = d, x = d, P = d;
        if (I & y.SIGHASH_ANYONECANPAY || (U = e.allocUnsafe(36 * this.ins.length), R = new t.BufferWriter(U, 0), this.ins.forEach((j) => {
          R.writeSlice(j.hash), R.writeUInt32(j.index);
        }), x = g.hash256(U)), !(I & y.SIGHASH_ANYONECANPAY) && (I & 31) !== y.SIGHASH_SINGLE && (I & 31) !== y.SIGHASH_NONE && (U = e.allocUnsafe(4 * this.ins.length), R = new t.BufferWriter(U, 0), this.ins.forEach((j) => {
          R.writeUInt32(j.sequence);
        }), P = g.hash256(U)), (I & 31) !== y.SIGHASH_SINGLE && (I & 31) !== y.SIGHASH_NONE) {
          const j = this.outs.reduce((C, W) => C + 8 + r(W.script), 0);
          U = e.allocUnsafe(j), R = new t.BufferWriter(U, 0), this.outs.forEach((C) => {
            R.writeUInt64(C.value), R.writeVarSlice(C.script);
          }), q = g.hash256(U);
        } else if ((I & 31) === y.SIGHASH_SINGLE && E < this.outs.length) {
          const j = this.outs[E];
          U = e.allocUnsafe(8 + r(j.script)), R = new t.BufferWriter(U, 0), R.writeUInt64(j.value), R.writeVarSlice(j.script), q = g.hash256(U);
        }
        U = e.allocUnsafe(156 + r(k)), R = new t.BufferWriter(U, 0);
        const H = this.ins[E];
        return R.writeInt32(this.version), R.writeSlice(x), R.writeSlice(P), R.writeSlice(H.hash), R.writeUInt32(H.index), R.writeVarSlice(k), R.writeUInt64(S), R.writeUInt32(H.sequence), R.writeSlice(q), R.writeUInt32(this.locktime), R.writeUInt32(I), g.hash256(U);
      }
      getHash(E) {
        return E && this.isCoinbase() ? e.alloc(32, 0) : g.hash256(this.__toBuffer(void 0, void 0, E));
      }
      getId() {
        return (0, t.reverseBuffer)(this.getHash(false)).toString("hex");
      }
      toBuffer(E, k) {
        return this.__toBuffer(E, k, true);
      }
      toHex() {
        return this.toBuffer(void 0, void 0).toString("hex");
      }
      setInputScript(E, k) {
        i(f.tuple(f.Number, f.Buffer), arguments), this.ins[E].script = k;
      }
      setWitness(E, k) {
        i(f.tuple(f.Number, [
          f.Buffer
        ]), arguments), this.ins[E].witness = k;
      }
      __toBuffer(E, k, S = false) {
        E || (E = e.allocUnsafe(this.byteLength(S)));
        const I = new t.BufferWriter(E, k || 0);
        I.writeInt32(this.version);
        const U = S && this.hasWitnesses();
        return U && (I.writeUInt8(y.ADVANCED_TRANSACTION_MARKER), I.writeUInt8(y.ADVANCED_TRANSACTION_FLAG)), I.writeVarInt(this.ins.length), this.ins.forEach((R) => {
          I.writeSlice(R.hash), I.writeUInt32(R.index), I.writeVarSlice(R.script), I.writeUInt32(R.sequence);
        }), I.writeVarInt(this.outs.length), this.outs.forEach((R) => {
          c(R) ? I.writeUInt64(R.value) : I.writeSlice(R.valueBuffer), I.writeVarSlice(R.script);
        }), U && this.ins.forEach((R) => {
          I.writeVector(R.witness);
        }), I.writeUInt32(this.locktime), k !== void 0 ? E.slice(k, I.offset) : E;
      }
    }
    return at.Transaction = y, y.DEFAULT_SEQUENCE = 4294967295, y.SIGHASH_DEFAULT = 0, y.SIGHASH_ALL = 1, y.SIGHASH_NONE = 2, y.SIGHASH_SINGLE = 3, y.SIGHASH_ANYONECANPAY = 128, y.SIGHASH_OUTPUT_MASK = 3, y.SIGHASH_INPUT_MASK = 128, y.ADVANCED_TRANSACTION_MARKER = 0, y.ADVANCED_TRANSACTION_FLAG = 1, at;
  }
  var oo;
  function tu() {
    if (oo) return nt;
    oo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(nt, "__esModule", {
      value: true
    }), nt.Block = void 0;
    const t = Ht(), g = nr(), v = ru(), l = bt(), f = xe(), { typeforce: i } = f, r = new TypeError("Cannot compute merkle root for zero transactions"), n = new TypeError("Cannot compute witness commit for non-segwit block");
    class u {
      constructor() {
        this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0;
      }
      static fromBuffer(b) {
        if (b.length < 80) throw new Error("Buffer too small (< 80 bytes)");
        const p = new t.BufferReader(b), c = new u();
        if (c.version = p.readInt32(), c.prevHash = p.readSlice(32), c.merkleRoot = p.readSlice(32), c.timestamp = p.readUInt32(), c.bits = p.readUInt32(), c.nonce = p.readUInt32(), b.length === 80) return c;
        const y = () => {
          const k = l.Transaction.fromBuffer(p.buffer.slice(p.offset), true);
          return p.offset += k.byteLength(), k;
        }, w = p.readVarInt();
        c.transactions = [];
        for (let k = 0; k < w; ++k) {
          const S = y();
          c.transactions.push(S);
        }
        const E = c.getWitnessCommit();
        return E && (c.witnessCommit = E), c;
      }
      static fromHex(b) {
        return u.fromBuffer(e.from(b, "hex"));
      }
      static calculateTarget(b) {
        const p = ((b & 4278190080) >> 24) - 3, c = b & 8388607, y = e.alloc(32, 0);
        return y.writeUIntBE(c, 29 - p, 3), y;
      }
      static calculateMerkleRoot(b, p) {
        if (i([
          {
            getHash: f.Function
          }
        ], b), b.length === 0) throw r;
        if (p && !a(b)) throw n;
        const c = b.map((w) => w.getHash(p)), y = (0, v.fastMerkleRoot)(c, g.hash256);
        return p ? g.hash256(e.concat([
          y,
          b[0].ins[0].witness[0]
        ])) : y;
      }
      getWitnessCommit() {
        if (!a(this.transactions)) return null;
        const b = this.transactions[0].outs.filter((c) => c.script.slice(0, 6).equals(e.from("6a24aa21a9ed", "hex"))).map((c) => c.script.slice(6, 38));
        if (b.length === 0) return null;
        const p = b[b.length - 1];
        return p instanceof e && p.length === 32 ? p : null;
      }
      hasWitnessCommit() {
        return this.witnessCommit instanceof e && this.witnessCommit.length === 32 || this.getWitnessCommit() !== null;
      }
      hasWitness() {
        return d(this.transactions);
      }
      weight() {
        const b = this.byteLength(false, false), p = this.byteLength(false, true);
        return b * 3 + p;
      }
      byteLength(b, p = true) {
        return b || !this.transactions ? 80 : 80 + t.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((c, y) => c + y.byteLength(p), 0);
      }
      getHash() {
        return g.hash256(this.toBuffer(true));
      }
      getId() {
        return (0, t.reverseBuffer)(this.getHash()).toString("hex");
      }
      getUTCDate() {
        const b = /* @__PURE__ */ new Date(0);
        return b.setUTCSeconds(this.timestamp), b;
      }
      toBuffer(b) {
        const p = e.allocUnsafe(this.byteLength(b)), c = new t.BufferWriter(p);
        return c.writeInt32(this.version), c.writeSlice(this.prevHash), c.writeSlice(this.merkleRoot), c.writeUInt32(this.timestamp), c.writeUInt32(this.bits), c.writeUInt32(this.nonce), b || !this.transactions || (t.varuint.encode(this.transactions.length, p, c.offset), c.offset += t.varuint.encode.bytes, this.transactions.forEach((y) => {
          const w = y.byteLength();
          y.toBuffer(p, c.offset), c.offset += w;
        })), p;
      }
      toHex(b) {
        return this.toBuffer(b).toString("hex");
      }
      checkTxRoots() {
        const b = this.hasWitnessCommit();
        return !b && this.hasWitness() ? false : this.__checkMerkleRoot() && (b ? this.__checkWitnessCommit() : true);
      }
      checkProofOfWork() {
        const b = (0, t.reverseBuffer)(this.getHash()), p = u.calculateTarget(this.bits);
        return b.compare(p) <= 0;
      }
      __checkMerkleRoot() {
        if (!this.transactions) throw r;
        const b = u.calculateMerkleRoot(this.transactions);
        return this.merkleRoot.compare(b) === 0;
      }
      __checkWitnessCommit() {
        if (!this.transactions) throw r;
        if (!this.hasWitnessCommit()) throw n;
        const b = u.calculateMerkleRoot(this.transactions, true);
        return this.witnessCommit.compare(b) === 0;
      }
    }
    nt.Block = u;
    function a(s) {
      return s instanceof Array && s[0] && s[0].ins && s[0].ins instanceof Array && s[0].ins[0] && s[0].ins[0].witness && s[0].ins[0].witness instanceof Array && s[0].ins[0].witness.length > 0;
    }
    function d(s) {
      return s instanceof Array && s.some((b) => typeof b == "object" && b.ins instanceof Array && b.ins.some((p) => typeof p == "object" && p.witness instanceof Array && p.witness.length > 0));
    }
    return nt;
  }
  var st = {}, _t = {}, Et = {}, ri = {}, xr = {}, Lr = {}, ti = {}, ao;
  function Oe() {
    return ao || (ao = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), function(t) {
        t[t.UNSIGNED_TX = 0] = "UNSIGNED_TX", t[t.GLOBAL_XPUB = 1] = "GLOBAL_XPUB";
      }(e.GlobalTypes || (e.GlobalTypes = {})), e.GLOBAL_TYPE_NAMES = [
        "unsignedTx",
        "globalXpub"
      ], function(t) {
        t[t.NON_WITNESS_UTXO = 0] = "NON_WITNESS_UTXO", t[t.WITNESS_UTXO = 1] = "WITNESS_UTXO", t[t.PARTIAL_SIG = 2] = "PARTIAL_SIG", t[t.SIGHASH_TYPE = 3] = "SIGHASH_TYPE", t[t.REDEEM_SCRIPT = 4] = "REDEEM_SCRIPT", t[t.WITNESS_SCRIPT = 5] = "WITNESS_SCRIPT", t[t.BIP32_DERIVATION = 6] = "BIP32_DERIVATION", t[t.FINAL_SCRIPTSIG = 7] = "FINAL_SCRIPTSIG", t[t.FINAL_SCRIPTWITNESS = 8] = "FINAL_SCRIPTWITNESS", t[t.POR_COMMITMENT = 9] = "POR_COMMITMENT", t[t.TAP_KEY_SIG = 19] = "TAP_KEY_SIG", t[t.TAP_SCRIPT_SIG = 20] = "TAP_SCRIPT_SIG", t[t.TAP_LEAF_SCRIPT = 21] = "TAP_LEAF_SCRIPT", t[t.TAP_BIP32_DERIVATION = 22] = "TAP_BIP32_DERIVATION", t[t.TAP_INTERNAL_KEY = 23] = "TAP_INTERNAL_KEY", t[t.TAP_MERKLE_ROOT = 24] = "TAP_MERKLE_ROOT";
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
      ], function(t) {
        t[t.REDEEM_SCRIPT = 0] = "REDEEM_SCRIPT", t[t.WITNESS_SCRIPT = 1] = "WITNESS_SCRIPT", t[t.BIP32_DERIVATION = 2] = "BIP32_DERIVATION", t[t.TAP_INTERNAL_KEY = 5] = "TAP_INTERNAL_KEY", t[t.TAP_TREE = 6] = "TAP_TREE", t[t.TAP_BIP32_DERIVATION = 7] = "TAP_BIP32_DERIVATION";
      }(e.OutputTypes || (e.OutputTypes = {})), e.OUTPUT_TYPE_NAMES = [
        "redeemScript",
        "witnessScript",
        "bip32Derivation",
        "tapInternalKey",
        "tapTree",
        "tapBip32Derivation"
      ];
    }(ti)), ti;
  }
  var ar = {}, so;
  function iu() {
    if (so) return ar;
    so = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(ar, "__esModule", {
      value: true
    });
    const t = Oe(), g = (r) => [
      ...Array(r).keys()
    ];
    function v(r) {
      if (r.key[0] !== t.GlobalTypes.GLOBAL_XPUB) throw new Error("Decode Error: could not decode globalXpub with key 0x" + r.key.toString("hex"));
      if (r.key.length !== 79 || ![
        2,
        3
      ].includes(r.key[46])) throw new Error("Decode Error: globalXpub has invalid extended pubkey in key 0x" + r.key.toString("hex"));
      if (r.value.length / 4 % 1 !== 0) throw new Error("Decode Error: Global GLOBAL_XPUB value length should be multiple of 4");
      const n = r.key.slice(1), u = {
        masterFingerprint: r.value.slice(0, 4),
        extendedPubkey: n,
        path: "m"
      };
      for (const a of g(r.value.length / 4 - 1)) {
        const d = r.value.readUInt32LE(a * 4 + 4), s = !!(d & 2147483648), b = d & 2147483647;
        u.path += "/" + b.toString(10) + (s ? "'" : "");
      }
      return u;
    }
    ar.decode = v;
    function l(r) {
      const n = e.from([
        t.GlobalTypes.GLOBAL_XPUB
      ]), u = e.concat([
        n,
        r.extendedPubkey
      ]), a = r.path.split("/"), d = e.allocUnsafe(a.length * 4);
      r.masterFingerprint.copy(d, 0);
      let s = 4;
      return a.slice(1).forEach((b) => {
        const p = b.slice(-1) === "'";
        let c = 2147483647 & parseInt(p ? b.slice(0, -1) : b, 10);
        p && (c += 2147483648), d.writeUInt32LE(c, s), s += 4;
      }), {
        key: u,
        value: d
      };
    }
    ar.encode = l, ar.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
    function f(r) {
      const n = r.extendedPubkey, u = r.masterFingerprint, a = r.path;
      return e.isBuffer(n) && n.length === 78 && [
        2,
        3
      ].indexOf(n[45]) > -1 && e.isBuffer(u) && u.length === 4 && typeof a == "string" && !!a.match(/^m(\/\d+'?)*$/);
    }
    ar.check = f;
    function i(r, n, u) {
      const a = n.extendedPubkey.toString("hex");
      return u.has(a) ? false : (u.add(a), r.filter((d) => d.extendedPubkey.equals(n.extendedPubkey)).length === 0);
    }
    return ar.canAddToArray = i, ar;
  }
  var kt = {}, uo;
  function nu() {
    if (uo) return kt;
    uo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(kt, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(v) {
      return {
        key: e.from([
          t.GlobalTypes.UNSIGNED_TX
        ]),
        value: v.toBuffer()
      };
    }
    return kt.encode = g, kt;
  }
  var sr = {}, co;
  function ou() {
    if (co) return sr;
    co = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(sr, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(i) {
      if (i.key[0] !== t.InputTypes.FINAL_SCRIPTSIG) throw new Error("Decode Error: could not decode finalScriptSig with key 0x" + i.key.toString("hex"));
      return i.value;
    }
    sr.decode = g;
    function v(i) {
      return {
        key: e.from([
          t.InputTypes.FINAL_SCRIPTSIG
        ]),
        value: i
      };
    }
    sr.encode = v, sr.expected = "Buffer";
    function l(i) {
      return e.isBuffer(i);
    }
    sr.check = l;
    function f(i, r) {
      return !!i && !!r && i.finalScriptSig === void 0;
    }
    return sr.canAdd = f, sr;
  }
  var ur = {}, lo;
  function au() {
    if (lo) return ur;
    lo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(ur, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(i) {
      if (i.key[0] !== t.InputTypes.FINAL_SCRIPTWITNESS) throw new Error("Decode Error: could not decode finalScriptWitness with key 0x" + i.key.toString("hex"));
      return i.value;
    }
    ur.decode = g;
    function v(i) {
      return {
        key: e.from([
          t.InputTypes.FINAL_SCRIPTWITNESS
        ]),
        value: i
      };
    }
    ur.encode = v, ur.expected = "Buffer";
    function l(i) {
      return e.isBuffer(i);
    }
    ur.check = l;
    function f(i, r) {
      return !!i && !!r && i.finalScriptWitness === void 0;
    }
    return ur.canAdd = f, ur;
  }
  var cr = {}, fo;
  function su() {
    if (fo) return cr;
    fo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(cr, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(i) {
      if (i.key[0] !== t.InputTypes.NON_WITNESS_UTXO) throw new Error("Decode Error: could not decode nonWitnessUtxo with key 0x" + i.key.toString("hex"));
      return i.value;
    }
    cr.decode = g;
    function v(i) {
      return {
        key: e.from([
          t.InputTypes.NON_WITNESS_UTXO
        ]),
        value: i
      };
    }
    cr.encode = v, cr.expected = "Buffer";
    function l(i) {
      return e.isBuffer(i);
    }
    cr.check = l;
    function f(i, r) {
      return !!i && !!r && i.nonWitnessUtxo === void 0;
    }
    return cr.canAdd = f, cr;
  }
  var lr = {}, ho;
  function uu() {
    if (ho) return lr;
    ho = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(lr, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(r) {
      if (r.key[0] !== t.InputTypes.PARTIAL_SIG) throw new Error("Decode Error: could not decode partialSig with key 0x" + r.key.toString("hex"));
      if (!(r.key.length === 34 || r.key.length === 66) || ![
        2,
        3,
        4
      ].includes(r.key[1])) throw new Error("Decode Error: partialSig has invalid pubkey in key 0x" + r.key.toString("hex"));
      return {
        pubkey: r.key.slice(1),
        signature: r.value
      };
    }
    lr.decode = g;
    function v(r) {
      const n = e.from([
        t.InputTypes.PARTIAL_SIG
      ]);
      return {
        key: e.concat([
          n,
          r.pubkey
        ]),
        value: r.signature
      };
    }
    lr.encode = v, lr.expected = "{ pubkey: Buffer; signature: Buffer; }";
    function l(r) {
      return e.isBuffer(r.pubkey) && e.isBuffer(r.signature) && [
        33,
        65
      ].includes(r.pubkey.length) && [
        2,
        3,
        4
      ].includes(r.pubkey[0]) && f(r.signature);
    }
    lr.check = l;
    function f(r) {
      if (!e.isBuffer(r) || r.length < 9 || r[0] !== 48 || r.length !== r[1] + 3 || r[2] !== 2) return false;
      const n = r[3];
      if (n > 33 || n < 1 || r[3 + n + 1] !== 2) return false;
      const u = r[3 + n + 2];
      return !(u > 33 || u < 1 || r.length !== 3 + n + 2 + u + 2);
    }
    function i(r, n, u) {
      const a = n.pubkey.toString("hex");
      return u.has(a) ? false : (u.add(a), r.filter((d) => d.pubkey.equals(n.pubkey)).length === 0);
    }
    return lr.canAddToArray = i, lr;
  }
  var fr = {}, po;
  function cu() {
    if (po) return fr;
    po = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(fr, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(i) {
      if (i.key[0] !== t.InputTypes.POR_COMMITMENT) throw new Error("Decode Error: could not decode porCommitment with key 0x" + i.key.toString("hex"));
      return i.value.toString("utf8");
    }
    fr.decode = g;
    function v(i) {
      return {
        key: e.from([
          t.InputTypes.POR_COMMITMENT
        ]),
        value: e.from(i, "utf8")
      };
    }
    fr.encode = v, fr.expected = "string";
    function l(i) {
      return typeof i == "string";
    }
    fr.check = l;
    function f(i, r) {
      return !!i && !!r && i.porCommitment === void 0;
    }
    return fr.canAdd = f, fr;
  }
  var hr = {}, mo;
  function lu() {
    if (mo) return hr;
    mo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(hr, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(i) {
      if (i.key[0] !== t.InputTypes.SIGHASH_TYPE) throw new Error("Decode Error: could not decode sighashType with key 0x" + i.key.toString("hex"));
      return i.value.readUInt32LE(0);
    }
    hr.decode = g;
    function v(i) {
      const r = e.from([
        t.InputTypes.SIGHASH_TYPE
      ]), n = e.allocUnsafe(4);
      return n.writeUInt32LE(i, 0), {
        key: r,
        value: n
      };
    }
    hr.encode = v, hr.expected = "number";
    function l(i) {
      return typeof i == "number";
    }
    hr.check = l;
    function f(i, r) {
      return !!i && !!r && i.sighashType === void 0;
    }
    return hr.canAdd = f, hr;
  }
  var dr = {}, bo;
  function fu() {
    if (bo) return dr;
    bo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(dr, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(i) {
      if (i.key[0] !== t.InputTypes.TAP_KEY_SIG || i.key.length !== 1) throw new Error("Decode Error: could not decode tapKeySig with key 0x" + i.key.toString("hex"));
      if (!l(i.value)) throw new Error("Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature");
      return i.value;
    }
    dr.decode = g;
    function v(i) {
      return {
        key: e.from([
          t.InputTypes.TAP_KEY_SIG
        ]),
        value: i
      };
    }
    dr.encode = v, dr.expected = "Buffer";
    function l(i) {
      return e.isBuffer(i) && (i.length === 64 || i.length === 65);
    }
    dr.check = l;
    function f(i, r) {
      return !!i && !!r && i.tapKeySig === void 0;
    }
    return dr.canAdd = f, dr;
  }
  var pr = {}, go;
  function hu() {
    if (go) return pr;
    go = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(pr, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(i) {
      if (i.key[0] !== t.InputTypes.TAP_LEAF_SCRIPT) throw new Error("Decode Error: could not decode tapLeafScript with key 0x" + i.key.toString("hex"));
      if ((i.key.length - 2) % 32 !== 0) throw new Error("Decode Error: tapLeafScript has invalid control block in key 0x" + i.key.toString("hex"));
      const r = i.value[i.value.length - 1];
      if ((i.key[1] & 254) !== r) throw new Error("Decode Error: tapLeafScript bad leaf version in key 0x" + i.key.toString("hex"));
      const n = i.value.slice(0, -1);
      return {
        controlBlock: i.key.slice(1),
        script: n,
        leafVersion: r
      };
    }
    pr.decode = g;
    function v(i) {
      const r = e.from([
        t.InputTypes.TAP_LEAF_SCRIPT
      ]), n = e.from([
        i.leafVersion
      ]);
      return {
        key: e.concat([
          r,
          i.controlBlock
        ]),
        value: e.concat([
          i.script,
          n
        ])
      };
    }
    pr.encode = v, pr.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
    function l(i) {
      return e.isBuffer(i.controlBlock) && (i.controlBlock.length - 1) % 32 === 0 && (i.controlBlock[0] & 254) === i.leafVersion && e.isBuffer(i.script);
    }
    pr.check = l;
    function f(i, r, n) {
      const u = r.controlBlock.toString("hex");
      return n.has(u) ? false : (n.add(u), i.filter((a) => a.controlBlock.equals(r.controlBlock)).length === 0);
    }
    return pr.canAddToArray = f, pr;
  }
  var mr = {}, vo;
  function du() {
    if (vo) return mr;
    vo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(mr, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(i) {
      if (i.key[0] !== t.InputTypes.TAP_MERKLE_ROOT || i.key.length !== 1) throw new Error("Decode Error: could not decode tapMerkleRoot with key 0x" + i.key.toString("hex"));
      if (!l(i.value)) throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
      return i.value;
    }
    mr.decode = g;
    function v(i) {
      return {
        key: e.from([
          t.InputTypes.TAP_MERKLE_ROOT
        ]),
        value: i
      };
    }
    mr.encode = v, mr.expected = "Buffer";
    function l(i) {
      return e.isBuffer(i) && i.length === 32;
    }
    mr.check = l;
    function f(i, r) {
      return !!i && !!r && i.tapMerkleRoot === void 0;
    }
    return mr.canAdd = f, mr;
  }
  var br = {}, yo;
  function pu() {
    if (yo) return br;
    yo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(br, "__esModule", {
      value: true
    });
    const t = Oe();
    function g(i) {
      if (i.key[0] !== t.InputTypes.TAP_SCRIPT_SIG) throw new Error("Decode Error: could not decode tapScriptSig with key 0x" + i.key.toString("hex"));
      if (i.key.length !== 65) throw new Error("Decode Error: tapScriptSig has invalid key 0x" + i.key.toString("hex"));
      if (i.value.length !== 64 && i.value.length !== 65) throw new Error("Decode Error: tapScriptSig has invalid signature in key 0x" + i.key.toString("hex"));
      const r = i.key.slice(1, 33), n = i.key.slice(33);
      return {
        pubkey: r,
        leafHash: n,
        signature: i.value
      };
    }
    br.decode = g;
    function v(i) {
      const r = e.from([
        t.InputTypes.TAP_SCRIPT_SIG
      ]);
      return {
        key: e.concat([
          r,
          i.pubkey,
          i.leafHash
        ]),
        value: i.signature
      };
    }
    br.encode = v, br.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }";
    function l(i) {
      return e.isBuffer(i.pubkey) && e.isBuffer(i.leafHash) && e.isBuffer(i.signature) && i.pubkey.length === 32 && i.leafHash.length === 32 && (i.signature.length === 64 || i.signature.length === 65);
    }
    br.check = l;
    function f(i, r, n) {
      const u = r.pubkey.toString("hex") + r.leafHash.toString("hex");
      return n.has(u) ? false : (n.add(u), i.filter((a) => a.pubkey.equals(r.pubkey) && a.leafHash.equals(r.leafHash)).length === 0);
    }
    return br.canAddToArray = f, br;
  }
  var gr = {}, tr = {}, Cr = {}, wo;
  function Hr() {
    if (wo) return Cr;
    wo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Cr, "__esModule", {
      value: true
    });
    const t = 9007199254740991;
    function g(i) {
      if (i < 0 || i > t || i % 1 !== 0) throw new RangeError("value out of range");
    }
    function v(i, r, n) {
      if (g(i), r || (r = e.allocUnsafe(f(i))), !e.isBuffer(r)) throw new TypeError("buffer must be a Buffer instance");
      return n || (n = 0), i < 253 ? (r.writeUInt8(i, n), Object.assign(v, {
        bytes: 1
      })) : i <= 65535 ? (r.writeUInt8(253, n), r.writeUInt16LE(i, n + 1), Object.assign(v, {
        bytes: 3
      })) : i <= 4294967295 ? (r.writeUInt8(254, n), r.writeUInt32LE(i, n + 1), Object.assign(v, {
        bytes: 5
      })) : (r.writeUInt8(255, n), r.writeUInt32LE(i >>> 0, n + 1), r.writeUInt32LE(i / 4294967296 | 0, n + 5), Object.assign(v, {
        bytes: 9
      })), r;
    }
    Cr.encode = v;
    function l(i, r) {
      if (!e.isBuffer(i)) throw new TypeError("buffer must be a Buffer instance");
      r || (r = 0);
      const n = i.readUInt8(r);
      if (n < 253) return Object.assign(l, {
        bytes: 1
      }), n;
      if (n === 253) return Object.assign(l, {
        bytes: 3
      }), i.readUInt16LE(r + 1);
      if (n === 254) return Object.assign(l, {
        bytes: 5
      }), i.readUInt32LE(r + 1);
      {
        Object.assign(l, {
          bytes: 9
        });
        const u = i.readUInt32LE(r + 1), d = i.readUInt32LE(r + 5) * 4294967296 + u;
        return g(d), d;
      }
    }
    Cr.decode = l;
    function f(i) {
      return g(i), i < 253 ? 1 : i <= 65535 ? 3 : i <= 4294967295 ? 5 : 9;
    }
    return Cr.encodingLength = f, Cr;
  }
  var _o;
  function Ji() {
    if (_o) return tr;
    _o = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(tr, "__esModule", {
      value: true
    });
    const t = Hr();
    tr.range = (n) => [
      ...Array(n).keys()
    ];
    function g(n) {
      if (n.length < 1) return n;
      let u = n.length - 1, a = 0;
      for (let d = 0; d < n.length / 2; d++) a = n[d], n[d] = n[u], n[u] = a, u--;
      return n;
    }
    tr.reverseBuffer = g;
    function v(n) {
      const u = n.map(l);
      return u.push(e.from([
        0
      ])), e.concat(u);
    }
    tr.keyValsToBuffer = v;
    function l(n) {
      const u = n.key.length, a = n.value.length, d = t.encodingLength(u), s = t.encodingLength(a), b = e.allocUnsafe(d + u + s + a);
      return t.encode(u, b, 0), n.key.copy(b, d), t.encode(a, b, d + u), n.value.copy(b, d + u + s), b;
    }
    tr.keyValToBuffer = l;
    function f(n, u) {
      if (typeof n != "number") throw new Error("cannot write a non-number as a number");
      if (n < 0) throw new Error("specified a negative value for writing an unsigned value");
      if (n > u) throw new Error("RangeError: value out of range");
      if (Math.floor(n) !== n) throw new Error("value has a fractional component");
    }
    function i(n, u) {
      const a = n.readUInt32LE(u);
      let d = n.readUInt32LE(u + 4);
      return d *= 4294967296, f(d + a, 9007199254740991), d + a;
    }
    tr.readUInt64LE = i;
    function r(n, u, a) {
      return f(u, 9007199254740991), n.writeInt32LE(u & -1, a), n.writeUInt32LE(Math.floor(u / 4294967296), a + 4), a + 8;
    }
    return tr.writeUInt64LE = r, tr;
  }
  var Eo;
  function mu() {
    if (Eo) return gr;
    Eo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(gr, "__esModule", {
      value: true
    });
    const t = Oe(), g = Ji(), v = Hr();
    function l(n) {
      if (n.key[0] !== t.InputTypes.WITNESS_UTXO) throw new Error("Decode Error: could not decode witnessUtxo with key 0x" + n.key.toString("hex"));
      const u = g.readUInt64LE(n.value, 0);
      let a = 8;
      const d = v.decode(n.value, a);
      a += v.encodingLength(d);
      const s = n.value.slice(a);
      if (s.length !== d) throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
      return {
        script: s,
        value: u
      };
    }
    gr.decode = l;
    function f(n) {
      const { script: u, value: a } = n, d = v.encodingLength(u.length), s = e.allocUnsafe(8 + d + u.length);
      return g.writeUInt64LE(s, a, 0), v.encode(u.length, s, 8), u.copy(s, 8 + d), {
        key: e.from([
          t.InputTypes.WITNESS_UTXO
        ]),
        value: s
      };
    }
    gr.encode = f, gr.expected = "{ script: Buffer; value: number; }";
    function i(n) {
      return e.isBuffer(n.script) && typeof n.value == "number";
    }
    gr.check = i;
    function r(n, u) {
      return !!n && !!u && n.witnessUtxo === void 0;
    }
    return gr.canAdd = r, gr;
  }
  var vr = {}, ko;
  function bu() {
    if (ko) return vr;
    ko = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(vr, "__esModule", {
      value: true
    });
    const t = Oe(), g = Hr();
    function v(r) {
      if (r.key[0] !== t.OutputTypes.TAP_TREE || r.key.length !== 1) throw new Error("Decode Error: could not decode tapTree with key 0x" + r.key.toString("hex"));
      let n = 0;
      const u = [];
      for (; n < r.value.length; ) {
        const a = r.value[n++], d = r.value[n++], s = g.decode(r.value, n);
        n += g.encodingLength(s), u.push({
          depth: a,
          leafVersion: d,
          script: r.value.slice(n, n + s)
        }), n += s;
      }
      return {
        leaves: u
      };
    }
    vr.decode = v;
    function l(r) {
      const n = e.from([
        t.OutputTypes.TAP_TREE
      ]), u = [].concat(...r.leaves.map((a) => [
        e.of(a.depth, a.leafVersion),
        g.encode(a.script.length),
        a.script
      ]));
      return {
        key: n,
        value: e.concat(u)
      };
    }
    vr.encode = l, vr.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
    function f(r) {
      return Array.isArray(r.leaves) && r.leaves.every((n) => n.depth >= 0 && n.depth <= 128 && (n.leafVersion & 254) === n.leafVersion && e.isBuffer(n.script));
    }
    vr.check = f;
    function i(r, n) {
      return !!r && !!n && r.tapTree === void 0;
    }
    return vr.canAdd = i, vr;
  }
  var St = {}, So;
  function Xa() {
    if (So) return St;
    So = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(St, "__esModule", {
      value: true
    });
    const t = (l) => [
      ...Array(l).keys()
    ], g = (l) => l.length === 33 && [
      2,
      3
    ].includes(l[0]) || l.length === 65 && l[0] === 4;
    function v(l, f = g) {
      function i(d) {
        if (d.key[0] !== l) throw new Error("Decode Error: could not decode bip32Derivation with key 0x" + d.key.toString("hex"));
        const s = d.key.slice(1);
        if (!f(s)) throw new Error("Decode Error: bip32Derivation has invalid pubkey in key 0x" + d.key.toString("hex"));
        if (d.value.length / 4 % 1 !== 0) throw new Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");
        const b = {
          masterFingerprint: d.value.slice(0, 4),
          pubkey: s,
          path: "m"
        };
        for (const p of t(d.value.length / 4 - 1)) {
          const c = d.value.readUInt32LE(p * 4 + 4), y = !!(c & 2147483648), w = c & 2147483647;
          b.path += "/" + w.toString(10) + (y ? "'" : "");
        }
        return b;
      }
      function r(d) {
        const s = e.from([
          l
        ]), b = e.concat([
          s,
          d.pubkey
        ]), p = d.path.split("/"), c = e.allocUnsafe(p.length * 4);
        d.masterFingerprint.copy(c, 0);
        let y = 4;
        return p.slice(1).forEach((w) => {
          const E = w.slice(-1) === "'";
          let k = 2147483647 & parseInt(E ? w.slice(0, -1) : w, 10);
          E && (k += 2147483648), c.writeUInt32LE(k, y), y += 4;
        }), {
          key: b,
          value: c
        };
      }
      const n = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
      function u(d) {
        return e.isBuffer(d.pubkey) && e.isBuffer(d.masterFingerprint) && typeof d.path == "string" && f(d.pubkey) && d.masterFingerprint.length === 4;
      }
      function a(d, s, b) {
        const p = s.pubkey.toString("hex");
        return b.has(p) ? false : (b.add(p), d.filter((c) => c.pubkey.equals(s.pubkey)).length === 0);
      }
      return {
        decode: i,
        encode: r,
        check: u,
        expected: n,
        canAddToArray: a
      };
    }
    return St.makeConverter = v, St;
  }
  var Tt = {}, To;
  function gu() {
    if (To) return Tt;
    To = 1, Object.defineProperty(Tt, "__esModule", {
      value: true
    });
    function e(t) {
      return g;
      function g(v) {
        let l;
        if (t.includes(v.key[0]) && (l = v.key.slice(1), !(l.length === 33 || l.length === 65) || ![
          2,
          3,
          4
        ].includes(l[0]))) throw new Error("Format Error: invalid pubkey in key 0x" + v.key.toString("hex"));
        return l;
      }
    }
    return Tt.makeChecker = e, Tt;
  }
  var It = {}, Io;
  function vu() {
    if (Io) return It;
    Io = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(It, "__esModule", {
      value: true
    });
    function t(g) {
      function v(n) {
        if (n.key[0] !== g) throw new Error("Decode Error: could not decode redeemScript with key 0x" + n.key.toString("hex"));
        return n.value;
      }
      function l(n) {
        return {
          key: e.from([
            g
          ]),
          value: n
        };
      }
      const f = "Buffer";
      function i(n) {
        return e.isBuffer(n);
      }
      function r(n, u) {
        return !!n && !!u && n.redeemScript === void 0;
      }
      return {
        decode: v,
        encode: l,
        check: i,
        expected: f,
        canAdd: r
      };
    }
    return It.makeConverter = t, It;
  }
  var At = {}, Ao;
  function yu() {
    if (Ao) return At;
    Ao = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(At, "__esModule", {
      value: true
    });
    const t = Hr(), g = Xa(), v = (f) => f.length === 32;
    function l(f) {
      const i = g.makeConverter(f, v);
      function r(d) {
        const s = t.decode(d.value), b = t.encodingLength(s), p = i.decode({
          key: d.key,
          value: d.value.slice(b + s * 32)
        }), c = new Array(s);
        for (let y = 0, w = b; y < s; y++, w += 32) c[y] = d.value.slice(w, w + 32);
        return Object.assign({}, p, {
          leafHashes: c
        });
      }
      function n(d) {
        const s = i.encode(d), b = t.encodingLength(d.leafHashes.length), p = e.allocUnsafe(b);
        t.encode(d.leafHashes.length, p);
        const c = e.concat([
          p,
          ...d.leafHashes,
          s.value
        ]);
        return Object.assign({}, s, {
          value: c
        });
      }
      const u = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
      function a(d) {
        return Array.isArray(d.leafHashes) && d.leafHashes.every((s) => e.isBuffer(s) && s.length === 32) && i.check(d);
      }
      return {
        decode: r,
        encode: n,
        check: a,
        expected: u,
        canAddToArray: i.canAddToArray
      };
    }
    return At.makeConverter = l, At;
  }
  var Pt = {}, Po;
  function wu() {
    if (Po) return Pt;
    Po = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Pt, "__esModule", {
      value: true
    });
    function t(g) {
      function v(n) {
        if (n.key[0] !== g || n.key.length !== 1) throw new Error("Decode Error: could not decode tapInternalKey with key 0x" + n.key.toString("hex"));
        if (n.value.length !== 32) throw new Error("Decode Error: tapInternalKey not a 32-byte x-only pubkey");
        return n.value;
      }
      function l(n) {
        return {
          key: e.from([
            g
          ]),
          value: n
        };
      }
      const f = "Buffer";
      function i(n) {
        return e.isBuffer(n) && n.length === 32;
      }
      function r(n, u) {
        return !!n && !!u && n.tapInternalKey === void 0;
      }
      return {
        decode: v,
        encode: l,
        check: i,
        expected: f,
        canAdd: r
      };
    }
    return Pt.makeConverter = t, Pt;
  }
  var Bt = {}, Bo;
  function _u() {
    if (Bo) return Bt;
    Bo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Bt, "__esModule", {
      value: true
    });
    function t(g) {
      function v(n) {
        if (n.key[0] !== g) throw new Error("Decode Error: could not decode witnessScript with key 0x" + n.key.toString("hex"));
        return n.value;
      }
      function l(n) {
        return {
          key: e.from([
            g
          ]),
          value: n
        };
      }
      const f = "Buffer";
      function i(n) {
        return e.isBuffer(n);
      }
      function r(n, u) {
        return !!n && !!u && n.witnessScript === void 0;
      }
      return {
        decode: v,
        encode: l,
        check: i,
        expected: f,
        canAdd: r
      };
    }
    return Bt.makeConverter = t, Bt;
  }
  var Oo;
  function Qi() {
    if (Oo) return Lr;
    Oo = 1, Object.defineProperty(Lr, "__esModule", {
      value: true
    });
    const e = Oe(), t = iu(), g = nu(), v = ou(), l = au(), f = su(), i = uu(), r = cu(), n = lu(), u = fu(), a = hu(), d = du(), s = pu(), b = mu(), p = bu(), c = Xa(), y = gu(), w = vu(), E = yu(), k = wu(), S = _u(), I = {
      unsignedTx: g,
      globalXpub: t,
      checkPubkey: y.makeChecker([])
    };
    Lr.globals = I;
    const U = {
      nonWitnessUtxo: f,
      partialSig: i,
      sighashType: n,
      finalScriptSig: v,
      finalScriptWitness: l,
      porCommitment: r,
      witnessUtxo: b,
      bip32Derivation: c.makeConverter(e.InputTypes.BIP32_DERIVATION),
      redeemScript: w.makeConverter(e.InputTypes.REDEEM_SCRIPT),
      witnessScript: S.makeConverter(e.InputTypes.WITNESS_SCRIPT),
      checkPubkey: y.makeChecker([
        e.InputTypes.PARTIAL_SIG,
        e.InputTypes.BIP32_DERIVATION
      ]),
      tapKeySig: u,
      tapScriptSig: s,
      tapLeafScript: a,
      tapBip32Derivation: E.makeConverter(e.InputTypes.TAP_BIP32_DERIVATION),
      tapInternalKey: k.makeConverter(e.InputTypes.TAP_INTERNAL_KEY),
      tapMerkleRoot: d
    };
    Lr.inputs = U;
    const R = {
      bip32Derivation: c.makeConverter(e.OutputTypes.BIP32_DERIVATION),
      redeemScript: w.makeConverter(e.OutputTypes.REDEEM_SCRIPT),
      witnessScript: S.makeConverter(e.OutputTypes.WITNESS_SCRIPT),
      checkPubkey: y.makeChecker([
        e.OutputTypes.BIP32_DERIVATION
      ]),
      tapBip32Derivation: E.makeConverter(e.OutputTypes.TAP_BIP32_DERIVATION),
      tapTree: p,
      tapInternalKey: k.makeConverter(e.OutputTypes.TAP_INTERNAL_KEY)
    };
    return Lr.outputs = R, Lr;
  }
  var Ro;
  function Eu() {
    if (Ro) return xr;
    Ro = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(xr, "__esModule", {
      value: true
    });
    const t = Qi(), g = Ji(), v = Hr(), l = Oe();
    function f(n, u) {
      let a = 0;
      function d() {
        const q = v.decode(n, a);
        a += v.encodingLength(q);
        const x = n.slice(a, a + q);
        return a += q, x;
      }
      function s() {
        const q = n.readUInt32BE(a);
        return a += 4, q;
      }
      function b() {
        const q = n.readUInt8(a);
        return a += 1, q;
      }
      function p() {
        const q = d(), x = d();
        return {
          key: q,
          value: x
        };
      }
      function c() {
        if (a >= n.length) throw new Error("Format Error: Unexpected End of PSBT");
        const q = n.readUInt8(a) === 0;
        return q && a++, q;
      }
      if (s() !== 1886610036) throw new Error("Format Error: Invalid Magic Number");
      if (b() !== 255) throw new Error("Format Error: Magic Number must be followed by 0xff separator");
      const y = [], w = {};
      for (; !c(); ) {
        const q = p(), x = q.key.toString("hex");
        if (w[x]) throw new Error("Format Error: Keys must be unique for global keymap: key " + x);
        w[x] = 1, y.push(q);
      }
      const E = y.filter((q) => q.key[0] === l.GlobalTypes.UNSIGNED_TX);
      if (E.length !== 1) throw new Error("Format Error: Only one UNSIGNED_TX allowed");
      const k = u(E[0].value), { inputCount: S, outputCount: I } = k.getInputOutputCounts(), U = [], R = [];
      for (const q of g.range(S)) {
        const x = {}, P = [];
        for (; !c(); ) {
          const H = p(), j = H.key.toString("hex");
          if (x[j]) throw new Error("Format Error: Keys must be unique for each input: input index " + q + " key " + j);
          x[j] = 1, P.push(H);
        }
        U.push(P);
      }
      for (const q of g.range(I)) {
        const x = {}, P = [];
        for (; !c(); ) {
          const H = p(), j = H.key.toString("hex");
          if (x[j]) throw new Error("Format Error: Keys must be unique for each output: output index " + q + " key " + j);
          x[j] = 1, P.push(H);
        }
        R.push(P);
      }
      return r(k, {
        globalMapKeyVals: y,
        inputKeyVals: U,
        outputKeyVals: R
      });
    }
    xr.psbtFromBuffer = f;
    function i(n, u, a) {
      if (!u.equals(e.from([
        a
      ]))) throw new Error(`Format Error: Invalid ${n} key: ${u.toString("hex")}`);
    }
    xr.checkKeyBuffer = i;
    function r(n, { globalMapKeyVals: u, inputKeyVals: a, outputKeyVals: d }) {
      const s = {
        unsignedTx: n
      };
      let b = 0;
      for (const E of u) switch (E.key[0]) {
        case l.GlobalTypes.UNSIGNED_TX:
          if (i("global", E.key, l.GlobalTypes.UNSIGNED_TX), b > 0) throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
          b++;
          break;
        case l.GlobalTypes.GLOBAL_XPUB:
          s.globalXpub === void 0 && (s.globalXpub = []), s.globalXpub.push(t.globals.globalXpub.decode(E));
          break;
        default:
          s.unknownKeyVals || (s.unknownKeyVals = []), s.unknownKeyVals.push(E);
      }
      const p = a.length, c = d.length, y = [], w = [];
      for (const E of g.range(p)) {
        const k = {};
        for (const S of a[E]) switch (t.inputs.checkPubkey(S), S.key[0]) {
          case l.InputTypes.NON_WITNESS_UTXO:
            if (i("input", S.key, l.InputTypes.NON_WITNESS_UTXO), k.nonWitnessUtxo !== void 0) throw new Error("Format Error: Input has multiple NON_WITNESS_UTXO");
            k.nonWitnessUtxo = t.inputs.nonWitnessUtxo.decode(S);
            break;
          case l.InputTypes.WITNESS_UTXO:
            if (i("input", S.key, l.InputTypes.WITNESS_UTXO), k.witnessUtxo !== void 0) throw new Error("Format Error: Input has multiple WITNESS_UTXO");
            k.witnessUtxo = t.inputs.witnessUtxo.decode(S);
            break;
          case l.InputTypes.PARTIAL_SIG:
            k.partialSig === void 0 && (k.partialSig = []), k.partialSig.push(t.inputs.partialSig.decode(S));
            break;
          case l.InputTypes.SIGHASH_TYPE:
            if (i("input", S.key, l.InputTypes.SIGHASH_TYPE), k.sighashType !== void 0) throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
            k.sighashType = t.inputs.sighashType.decode(S);
            break;
          case l.InputTypes.REDEEM_SCRIPT:
            if (i("input", S.key, l.InputTypes.REDEEM_SCRIPT), k.redeemScript !== void 0) throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
            k.redeemScript = t.inputs.redeemScript.decode(S);
            break;
          case l.InputTypes.WITNESS_SCRIPT:
            if (i("input", S.key, l.InputTypes.WITNESS_SCRIPT), k.witnessScript !== void 0) throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
            k.witnessScript = t.inputs.witnessScript.decode(S);
            break;
          case l.InputTypes.BIP32_DERIVATION:
            k.bip32Derivation === void 0 && (k.bip32Derivation = []), k.bip32Derivation.push(t.inputs.bip32Derivation.decode(S));
            break;
          case l.InputTypes.FINAL_SCRIPTSIG:
            i("input", S.key, l.InputTypes.FINAL_SCRIPTSIG), k.finalScriptSig = t.inputs.finalScriptSig.decode(S);
            break;
          case l.InputTypes.FINAL_SCRIPTWITNESS:
            i("input", S.key, l.InputTypes.FINAL_SCRIPTWITNESS), k.finalScriptWitness = t.inputs.finalScriptWitness.decode(S);
            break;
          case l.InputTypes.POR_COMMITMENT:
            i("input", S.key, l.InputTypes.POR_COMMITMENT), k.porCommitment = t.inputs.porCommitment.decode(S);
            break;
          case l.InputTypes.TAP_KEY_SIG:
            i("input", S.key, l.InputTypes.TAP_KEY_SIG), k.tapKeySig = t.inputs.tapKeySig.decode(S);
            break;
          case l.InputTypes.TAP_SCRIPT_SIG:
            k.tapScriptSig === void 0 && (k.tapScriptSig = []), k.tapScriptSig.push(t.inputs.tapScriptSig.decode(S));
            break;
          case l.InputTypes.TAP_LEAF_SCRIPT:
            k.tapLeafScript === void 0 && (k.tapLeafScript = []), k.tapLeafScript.push(t.inputs.tapLeafScript.decode(S));
            break;
          case l.InputTypes.TAP_BIP32_DERIVATION:
            k.tapBip32Derivation === void 0 && (k.tapBip32Derivation = []), k.tapBip32Derivation.push(t.inputs.tapBip32Derivation.decode(S));
            break;
          case l.InputTypes.TAP_INTERNAL_KEY:
            i("input", S.key, l.InputTypes.TAP_INTERNAL_KEY), k.tapInternalKey = t.inputs.tapInternalKey.decode(S);
            break;
          case l.InputTypes.TAP_MERKLE_ROOT:
            i("input", S.key, l.InputTypes.TAP_MERKLE_ROOT), k.tapMerkleRoot = t.inputs.tapMerkleRoot.decode(S);
            break;
          default:
            k.unknownKeyVals || (k.unknownKeyVals = []), k.unknownKeyVals.push(S);
        }
        y.push(k);
      }
      for (const E of g.range(c)) {
        const k = {};
        for (const S of d[E]) switch (t.outputs.checkPubkey(S), S.key[0]) {
          case l.OutputTypes.REDEEM_SCRIPT:
            if (i("output", S.key, l.OutputTypes.REDEEM_SCRIPT), k.redeemScript !== void 0) throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
            k.redeemScript = t.outputs.redeemScript.decode(S);
            break;
          case l.OutputTypes.WITNESS_SCRIPT:
            if (i("output", S.key, l.OutputTypes.WITNESS_SCRIPT), k.witnessScript !== void 0) throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
            k.witnessScript = t.outputs.witnessScript.decode(S);
            break;
          case l.OutputTypes.BIP32_DERIVATION:
            k.bip32Derivation === void 0 && (k.bip32Derivation = []), k.bip32Derivation.push(t.outputs.bip32Derivation.decode(S));
            break;
          case l.OutputTypes.TAP_INTERNAL_KEY:
            i("output", S.key, l.OutputTypes.TAP_INTERNAL_KEY), k.tapInternalKey = t.outputs.tapInternalKey.decode(S);
            break;
          case l.OutputTypes.TAP_TREE:
            i("output", S.key, l.OutputTypes.TAP_TREE), k.tapTree = t.outputs.tapTree.decode(S);
            break;
          case l.OutputTypes.TAP_BIP32_DERIVATION:
            k.tapBip32Derivation === void 0 && (k.tapBip32Derivation = []), k.tapBip32Derivation.push(t.outputs.tapBip32Derivation.decode(S));
            break;
          default:
            k.unknownKeyVals || (k.unknownKeyVals = []), k.unknownKeyVals.push(S);
        }
        w.push(k);
      }
      return {
        globalMap: s,
        inputs: y,
        outputs: w
      };
    }
    return xr.psbtFromKeyVals = r, xr;
  }
  var ut = {}, Uo;
  function ku() {
    if (Uo) return ut;
    Uo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(ut, "__esModule", {
      value: true
    });
    const t = Qi(), g = Ji();
    function v({ globalMap: r, inputs: n, outputs: u }) {
      const { globalKeyVals: a, inputKeyVals: d, outputKeyVals: s } = i({
        globalMap: r,
        inputs: n,
        outputs: u
      }), b = g.keyValsToBuffer(a), p = (E) => E.length === 0 ? [
        e.from([
          0
        ])
      ] : E.map(g.keyValsToBuffer), c = p(d), y = p(s), w = e.allocUnsafe(5);
      return w.writeUIntBE(482972169471, 0, 5), e.concat([
        w,
        b
      ].concat(c, y));
    }
    ut.psbtToBuffer = v;
    const l = (r, n) => r.key.compare(n.key);
    function f(r, n) {
      const u = /* @__PURE__ */ new Set(), a = Object.entries(r).reduce((s, [b, p]) => {
        if (b === "unknownKeyVals") return s;
        const c = n[b];
        if (c === void 0) return s;
        const y = (Array.isArray(p) ? p : [
          p
        ]).map(c.encode);
        return y.map((E) => E.key.toString("hex")).forEach((E) => {
          if (u.has(E)) throw new Error("Serialize Error: Duplicate key: " + E);
          u.add(E);
        }), s.concat(y);
      }, []), d = r.unknownKeyVals ? r.unknownKeyVals.filter((s) => !u.has(s.key.toString("hex"))) : [];
      return a.concat(d).sort(l);
    }
    function i({ globalMap: r, inputs: n, outputs: u }) {
      return {
        globalKeyVals: f(r, t.globals),
        inputKeyVals: n.map((a) => f(a, t.inputs)),
        outputKeyVals: u.map((a) => f(a, t.outputs))
      };
    }
    return ut.psbtToKeyVals = i, ut;
  }
  var zo;
  function Ya() {
    return zo || (zo = 1, function(e) {
      function t(g) {
        for (var v in g) e.hasOwnProperty(v) || (e[v] = g[v]);
      }
      Object.defineProperty(e, "__esModule", {
        value: true
      }), t(Eu()), t(ku());
    }(ri)), ri;
  }
  var No;
  function Su() {
    if (No) return Et;
    No = 1, Object.defineProperty(Et, "__esModule", {
      value: true
    });
    const e = Ya();
    function t(f) {
      const i = f[0], r = e.psbtToKeyVals(i), n = f.slice(1);
      if (n.length === 0) throw new Error("Combine: Nothing to combine");
      const u = v(i);
      if (u === void 0) throw new Error("Combine: Self missing transaction");
      const a = l(r.globalKeyVals), d = r.inputKeyVals.map(l), s = r.outputKeyVals.map(l);
      for (const b of n) {
        const p = v(b);
        if (p === void 0 || !p.toBuffer().equals(u.toBuffer())) throw new Error("Combine: One of the Psbts does not have the same transaction.");
        const c = e.psbtToKeyVals(b);
        l(c.globalKeyVals).forEach(g(a, r.globalKeyVals, c.globalKeyVals)), c.inputKeyVals.map(l).forEach((k, S) => k.forEach(g(d[S], r.inputKeyVals[S], c.inputKeyVals[S]))), c.outputKeyVals.map(l).forEach((k, S) => k.forEach(g(s[S], r.outputKeyVals[S], c.outputKeyVals[S])));
      }
      return e.psbtFromKeyVals(u, {
        globalMapKeyVals: r.globalKeyVals,
        inputKeyVals: r.inputKeyVals,
        outputKeyVals: r.outputKeyVals
      });
    }
    Et.combine = t;
    function g(f, i, r) {
      return (n) => {
        if (f.has(n)) return;
        const u = r.filter((a) => a.key.toString("hex") === n)[0];
        i.push(u), f.add(n);
      };
    }
    function v(f) {
      return f.globalMap.unsignedTx;
    }
    function l(f) {
      const i = /* @__PURE__ */ new Set();
      return f.forEach((r) => {
        const n = r.key.toString("hex");
        if (i.has(n)) throw new Error("Combine: KeyValue Map keys should be unique");
        i.add(n);
      }), i;
    }
    return Et;
  }
  var ii = {}, Ho;
  function Ja() {
    return Ho || (Ho = 1, function(e) {
      var t = [
        "buffer",
        "Buffer"
      ];
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      const g = Qi();
      function v(p, c) {
        const y = p[c];
        if (y === void 0) throw new Error(`No input #${c}`);
        return y;
      }
      e.checkForInput = v;
      function l(p, c) {
        const y = p[c];
        if (y === void 0) throw new Error(`No output #${c}`);
        return y;
      }
      e.checkForOutput = l;
      function f(p, c, y) {
        if (p.key[0] < y) throw new Error("Use the method for your specific key instead of addUnknownKeyVal*");
        if (c && c.filter((w) => w.key.equals(p.key)).length !== 0) throw new Error(`Duplicate Key: ${p.key.toString("hex")}`);
      }
      e.checkHasKey = f;
      function i(p) {
        let c = 0;
        return Object.keys(p).forEach((y) => {
          Number(isNaN(Number(y))) && c++;
        }), c;
      }
      e.getEnumLength = i;
      function r(p, c) {
        let y = false;
        if (c.nonWitnessUtxo || c.witnessUtxo) {
          const w = !!c.redeemScript, E = !!c.witnessScript, k = !w || !!c.finalScriptSig, S = !E || !!c.finalScriptWitness, I = !!c.finalScriptSig || !!c.finalScriptWitness;
          y = k && S && I;
        }
        if (y === false) throw new Error(`Input #${p} has too much or too little data to clean`);
      }
      e.inputCheckUncleanFinalized = r;
      function n(p, c, y, w) {
        throw new Error(`Data for ${p} key ${c} is incorrect: Expected ${y} and got ${JSON.stringify(w)}`);
      }
      function u(p) {
        return (c, y) => {
          for (const w of Object.keys(c)) {
            const E = c[w], { canAdd: k, canAddToArray: S, check: I, expected: U } = g[p + "s"][w] || {}, R = !!S;
            if (I) if (R) {
              if (!Array.isArray(E) || y[w] && !Array.isArray(y[w])) throw new Error(`Key type ${w} must be an array`);
              E.every(I) || n(p, w, U, E);
              const q = y[w] || [], x = /* @__PURE__ */ new Set();
              if (!E.every((P) => S(q, P, x))) throw new Error("Can not add duplicate data to array");
              y[w] = q.concat(E);
            } else {
              if (I(E) || n(p, w, U, E), !k(y, E)) throw new Error(`Can not add duplicate data to ${p}`);
              y[w] = E;
            }
          }
        };
      }
      e.updateGlobal = u("global"), e.updateInput = u("input"), e.updateOutput = u("output");
      function a(p, c) {
        const y = p.length - 1, w = v(p, y);
        e.updateInput(c, w);
      }
      e.addInputAttributes = a;
      function d(p, c) {
        const y = p.length - 1, w = l(p, y);
        e.updateOutput(c, w);
      }
      e.addOutputAttributes = d;
      function s(p, c) {
        if (!t.isBuffer(c) || c.length < 4) throw new Error("Set Version: Invalid Transaction");
        return c.writeUInt32LE(p, 0), c;
      }
      e.defaultVersionSetter = s;
      function b(p, c) {
        if (!t.isBuffer(c) || c.length < 4) throw new Error("Set Locktime: Invalid Transaction");
        return c.writeUInt32LE(p, c.length - 4), c;
      }
      e.defaultLocktimeSetter = b;
    }(ii)), ii;
  }
  var xo;
  function Tu() {
    if (xo) return _t;
    xo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(_t, "__esModule", {
      value: true
    });
    const t = Su(), g = Ya(), v = Oe(), l = Ja();
    class f {
      constructor(r) {
        this.inputs = [], this.outputs = [], this.globalMap = {
          unsignedTx: r
        };
      }
      static fromBase64(r, n) {
        const u = e.from(r, "base64");
        return this.fromBuffer(u, n);
      }
      static fromHex(r, n) {
        const u = e.from(r, "hex");
        return this.fromBuffer(u, n);
      }
      static fromBuffer(r, n) {
        const u = g.psbtFromBuffer(r, n), a = new this(u.globalMap.unsignedTx);
        return Object.assign(a, u), a;
      }
      toBase64() {
        return this.toBuffer().toString("base64");
      }
      toHex() {
        return this.toBuffer().toString("hex");
      }
      toBuffer() {
        return g.psbtToBuffer(this);
      }
      updateGlobal(r) {
        return l.updateGlobal(r, this.globalMap), this;
      }
      updateInput(r, n) {
        const u = l.checkForInput(this.inputs, r);
        return l.updateInput(n, u), this;
      }
      updateOutput(r, n) {
        const u = l.checkForOutput(this.outputs, r);
        return l.updateOutput(n, u), this;
      }
      addUnknownKeyValToGlobal(r) {
        return l.checkHasKey(r, this.globalMap.unknownKeyVals, l.getEnumLength(v.GlobalTypes)), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(r), this;
      }
      addUnknownKeyValToInput(r, n) {
        const u = l.checkForInput(this.inputs, r);
        return l.checkHasKey(n, u.unknownKeyVals, l.getEnumLength(v.InputTypes)), u.unknownKeyVals || (u.unknownKeyVals = []), u.unknownKeyVals.push(n), this;
      }
      addUnknownKeyValToOutput(r, n) {
        const u = l.checkForOutput(this.outputs, r);
        return l.checkHasKey(n, u.unknownKeyVals, l.getEnumLength(v.OutputTypes)), u.unknownKeyVals || (u.unknownKeyVals = []), u.unknownKeyVals.push(n), this;
      }
      addInput(r) {
        this.globalMap.unsignedTx.addInput(r), this.inputs.push({
          unknownKeyVals: []
        });
        const n = r.unknownKeyVals || [], u = this.inputs.length - 1;
        if (!Array.isArray(n)) throw new Error("unknownKeyVals must be an Array");
        return n.forEach((a) => this.addUnknownKeyValToInput(u, a)), l.addInputAttributes(this.inputs, r), this;
      }
      addOutput(r) {
        this.globalMap.unsignedTx.addOutput(r), this.outputs.push({
          unknownKeyVals: []
        });
        const n = r.unknownKeyVals || [], u = this.outputs.length - 1;
        if (!Array.isArray(n)) throw new Error("unknownKeyVals must be an Array");
        return n.forEach((a) => this.addUnknownKeyValToOutput(u, a)), l.addOutputAttributes(this.outputs, r), this;
      }
      clearFinalizedInput(r) {
        const n = l.checkForInput(this.inputs, r);
        l.inputCheckUncleanFinalized(r, n);
        for (const u of Object.keys(n)) [
          "witnessUtxo",
          "nonWitnessUtxo",
          "finalScriptSig",
          "finalScriptWitness",
          "unknownKeyVals"
        ].includes(u) || delete n[u];
        return this;
      }
      combine(...r) {
        const n = t.combine([
          this
        ].concat(r));
        return Object.assign(this, n), this;
      }
      getTransaction() {
        return this.globalMap.unsignedTx.toBuffer();
      }
    }
    return _t.Psbt = f, _t;
  }
  var Ee = {}, _e = {}, Lo;
  function Fi() {
    if (Lo) return _e;
    Lo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(_e, "__esModule", {
      value: true
    }), _e.signatureBlocksAction = _e.checkInputForSig = _e.pubkeyInScript = _e.pubkeyPositionInScript = _e.witnessStackToScriptWitness = _e.isP2TR = _e.isP2SHScript = _e.isP2WSHScript = _e.isP2WPKH = _e.isP2PKH = _e.isP2PK = _e.isP2MS = void 0;
    const t = Hr(), g = qe(), v = bt(), l = nr(), f = mt();
    function i(p) {
      return (c) => {
        try {
          return p({
            output: c
          }), true;
        } catch {
          return false;
        }
      };
    }
    _e.isP2MS = i(f.p2ms), _e.isP2PK = i(f.p2pk), _e.isP2PKH = i(f.p2pkh), _e.isP2WPKH = i(f.p2wpkh), _e.isP2WSHScript = i(f.p2wsh), _e.isP2SHScript = i(f.p2sh), _e.isP2TR = i(f.p2tr);
    function r(p) {
      let c = e.allocUnsafe(0);
      function y(S) {
        c = e.concat([
          c,
          e.from(S)
        ]);
      }
      function w(S) {
        const I = c.length, U = t.encodingLength(S);
        c = e.concat([
          c,
          e.allocUnsafe(U)
        ]), t.encode(S, c, I);
      }
      function E(S) {
        w(S.length), y(S);
      }
      function k(S) {
        w(S.length), S.forEach(E);
      }
      return k(p), c;
    }
    _e.witnessStackToScriptWitness = r;
    function n(p, c) {
      const y = (0, l.hash160)(p), w = p.slice(1, 33), E = g.decompile(c);
      if (E === null) throw new Error("Unknown script error");
      return E.findIndex((k) => typeof k == "number" ? false : k.equals(p) || k.equals(y) || k.equals(w));
    }
    _e.pubkeyPositionInScript = n;
    function u(p, c) {
      return n(p, c) !== -1;
    }
    _e.pubkeyInScript = u;
    function a(p, c) {
      return s(p).some((w) => d(w, g.signature.decode, c));
    }
    _e.checkInputForSig = a;
    function d(p, c, y) {
      const { hashType: w } = c(p), E = [];
      switch (w & v.Transaction.SIGHASH_ANYONECANPAY && E.push("addInput"), w & 31) {
        case v.Transaction.SIGHASH_ALL:
          break;
        case v.Transaction.SIGHASH_SINGLE:
        case v.Transaction.SIGHASH_NONE:
          E.push("addOutput"), E.push("setInputSequence");
          break;
      }
      return E.indexOf(y) === -1;
    }
    _e.signatureBlocksAction = d;
    function s(p) {
      let c = [];
      if ((p.partialSig || []).length === 0) {
        if (!p.finalScriptSig && !p.finalScriptWitness) return [];
        c = b(p);
      } else c = p.partialSig;
      return c.map((y) => y.signature);
    }
    function b(p) {
      const c = p.finalScriptSig ? g.decompile(p.finalScriptSig) || [] : [], y = p.finalScriptWitness ? g.decompile(p.finalScriptWitness) || [] : [];
      return c.concat(y).filter((w) => e.isBuffer(w) && g.isCanonicalScriptSignature(w)).map((w) => ({
        signature: w
      }));
    }
    return _e;
  }
  var Co;
  function Iu() {
    if (Co) return Ee;
    Co = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Ee, "__esModule", {
      value: true
    }), Ee.checkTaprootInputForSigs = Ee.tapTreeFromList = Ee.tapTreeToList = Ee.tweakInternalPubKey = Ee.checkTaprootOutputFields = Ee.checkTaprootInputFields = Ee.isTaprootOutput = Ee.isTaprootInput = Ee.serializeTaprootSignature = Ee.tapScriptFinalizer = Ee.toXOnly = void 0;
    const t = xe(), g = bt(), v = Fi(), l = Xi(), f = mt(), i = Fi(), r = (O) => O.length === 32 ? O : O.slice(1, 33);
    Ee.toXOnly = r;
    function n(O, F, K) {
      const Z = ee(F, O, K);
      try {
        const D = W(F, Z).concat(Z.script).concat(Z.controlBlock);
        return {
          finalScriptWitness: (0, v.witnessStackToScriptWitness)(D)
        };
      } catch (ae) {
        throw new Error(`Can not finalize taproot input #${O}: ${ae}`);
      }
    }
    Ee.tapScriptFinalizer = n;
    function u(O, F) {
      const K = F ? e.from([
        F
      ]) : e.from([]);
      return e.concat([
        O,
        K
      ]);
    }
    Ee.serializeTaprootSignature = u;
    function a(O) {
      return O && !!(O.tapInternalKey || O.tapMerkleRoot || O.tapLeafScript && O.tapLeafScript.length || O.tapBip32Derivation && O.tapBip32Derivation.length || O.witnessUtxo && (0, v.isP2TR)(O.witnessUtxo.script));
    }
    Ee.isTaprootInput = a;
    function d(O, F) {
      return O && !!(O.tapInternalKey || O.tapTree || O.tapBip32Derivation && O.tapBip32Derivation.length || F && (0, v.isP2TR)(F));
    }
    Ee.isTaprootOutput = d;
    function s(O, F, K) {
      P(O, F, K), j(O, F, K);
    }
    Ee.checkTaprootInputFields = s;
    function b(O, F, K) {
      H(O, F, K), p(O, F);
    }
    Ee.checkTaprootOutputFields = b;
    function p(O, F) {
      if (!F.tapTree && !F.tapInternalKey) return;
      const K = F.tapInternalKey || O.tapInternalKey, Z = F.tapTree || O.tapTree;
      if (K) {
        const { script: ae } = O, D = c(K, Z);
        if (ae && !ae.equals(D)) throw new Error("Error adding output. Script or address missmatch.");
      }
    }
    function c(O, F) {
      const K = F && E(F.leaves), { output: Z } = (0, f.p2tr)({
        internalPubkey: O,
        scriptTree: K
      });
      return Z;
    }
    function y(O, F) {
      const K = F.tapInternalKey, Z = K && (0, l.tweakKey)(K, F.tapMerkleRoot);
      if (!Z) throw new Error(`Cannot tweak tap internal key for input #${O}. Public key: ${K && K.toString("hex")}`);
      return Z.x;
    }
    Ee.tweakInternalPubKey = y;
    function w(O) {
      if (!(0, t.isTaptree)(O)) throw new Error("Cannot convert taptree to tapleaf list. Expecting a tapree structure.");
      return R(O);
    }
    Ee.tapTreeToList = w;
    function E(O = []) {
      return O.length === 1 && O[0].depth === 0 ? {
        output: O[0].script,
        version: O[0].leafVersion
      } : q(O);
    }
    Ee.tapTreeFromList = E;
    function k(O, F) {
      return I(O).some((Z) => (0, i.signatureBlocksAction)(Z, S, F));
    }
    Ee.checkTaprootInputForSigs = k;
    function S(O) {
      return {
        signature: O.slice(0, 64),
        hashType: O.slice(64)[0] || g.Transaction.SIGHASH_DEFAULT
      };
    }
    function I(O) {
      const F = [];
      if (O.tapKeySig && F.push(O.tapKeySig), O.tapScriptSig && F.push(...O.tapScriptSig.map((K) => K.signature)), !F.length) {
        const K = U(O.finalScriptWitness);
        K && F.push(K);
      }
      return F;
    }
    function U(O) {
      if (!O) return;
      const F = O.slice(2);
      if (F.length === 64 || F.length === 65) return F;
    }
    function R(O, F = [], K = 0) {
      if (K > l.MAX_TAPTREE_DEPTH) throw new Error("Max taptree depth exceeded.");
      return O ? (0, t.isTapleaf)(O) ? (F.push({
        depth: K,
        leafVersion: O.version || l.LEAF_VERSION_TAPSCRIPT,
        script: O.output
      }), F) : (O[0] && R(O[0], F, K + 1), O[1] && R(O[1], F, K + 1), F) : [];
    }
    function q(O) {
      let F;
      for (const K of O) if (F = x(K, F), !F) throw new Error("No room left to insert tapleaf in tree");
      return F;
    }
    function x(O, F, K = 0) {
      if (K > l.MAX_TAPTREE_DEPTH) throw new Error("Max taptree depth exceeded.");
      if (O.depth === K) return F ? void 0 : {
        output: O.script,
        version: O.leafVersion
      };
      if ((0, t.isTapleaf)(F)) return;
      const Z = x(O, F && F[0], K + 1);
      if (Z) return [
        Z,
        F && F[1]
      ];
      const ae = x(O, F && F[1], K + 1);
      if (ae) return [
        F && F[0],
        ae
      ];
    }
    function P(O, F, K) {
      const Z = a(O) && ue(F), ae = ue(O) && a(F), D = O === F && a(F) && ue(F);
      if (Z || ae || D) throw new Error(`Invalid arguments for Psbt.${K}. Cannot use both taproot and non-taproot fields.`);
    }
    function H(O, F, K) {
      const Z = d(O) && ue(F), ae = ue(O) && d(F), D = O === F && d(F) && ue(F);
      if (Z || ae || D) throw new Error(`Invalid arguments for Psbt.${K}. Cannot use both taproot and non-taproot fields.`);
    }
    function j(O, F, K) {
      if (F.tapMerkleRoot) {
        const Z = (F.tapLeafScript || []).every((D) => C(D, F.tapMerkleRoot)), ae = (O.tapLeafScript || []).every((D) => C(D, F.tapMerkleRoot));
        if (!Z || !ae) throw new Error(`Invalid arguments for Psbt.${K}. Tapleaf not part of taptree.`);
      } else if (O.tapMerkleRoot && !(F.tapLeafScript || []).every((ae) => C(ae, O.tapMerkleRoot))) throw new Error(`Invalid arguments for Psbt.${K}. Tapleaf not part of taptree.`);
    }
    function C(O, F) {
      if (!F) return true;
      const K = (0, l.tapleafHash)({
        output: O.script,
        version: O.leafVersion
      });
      return (0, l.rootHashFromPath)(O.controlBlock, K).equals(F);
    }
    function W(O, F) {
      const K = (0, l.tapleafHash)({
        output: F.script,
        version: F.leafVersion
      });
      return (O.tapScriptSig || []).filter((Z) => Z.leafHash.equals(K)).map((Z) => X(F.script, Z)).sort((Z, ae) => ae.positionInScript - Z.positionInScript).map((Z) => Z.signature);
    }
    function X(O, F) {
      return Object.assign({
        positionInScript: (0, v.pubkeyPositionInScript)(F.pubkey, O)
      }, F);
    }
    function ee(O, F, K) {
      if (!O.tapScriptSig || !O.tapScriptSig.length) throw new Error(`Can not finalize taproot input #${F}. No tapleaf script signature provided.`);
      const Z = (O.tapLeafScript || []).sort((ae, D) => ae.controlBlock.length - D.controlBlock.length).find((ae) => re(ae, O.tapScriptSig, K));
      if (!Z) throw new Error(`Can not finalize taproot input #${F}. Signature for tapleaf script not found.`);
      return Z;
    }
    function re(O, F, K) {
      const Z = (0, l.tapleafHash)({
        output: O.script,
        version: O.leafVersion
      });
      return (!K || K.equals(Z)) && F.find((D) => D.leafHash.equals(Z)) !== void 0;
    }
    function ue(O) {
      return O && !!(O.redeemScript || O.witnessScript || O.bip32Derivation && O.bip32Derivation.length);
    }
    return Ee;
  }
  var jo;
  function Au() {
    if (jo) return st;
    jo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(st, "__esModule", {
      value: true
    }), st.Psbt = void 0;
    const t = Tu(), g = Hr(), v = Ja(), l = Yi(), f = Ht(), i = Ye(), r = mt(), n = Xi(), u = qe(), a = bt(), d = Iu(), s = Fi(), b = {
      network: i.bitcoin,
      maximumFeeRate: 5e3
    };
    class p {
      static fromBase64(h, _ = {}) {
        const A = e.from(h, "base64");
        return this.fromBuffer(A, _);
      }
      static fromHex(h, _ = {}) {
        const A = e.from(h, "hex");
        return this.fromBuffer(A, _);
      }
      static fromBuffer(h, _ = {}) {
        const A = t.Psbt.fromBuffer(h, c), N = new p(_, A);
        return j(N.__CACHE.__TX, N.__CACHE), N;
      }
      constructor(h = {}, _ = new t.Psbt(new y())) {
        this.data = _, this.opts = Object.assign({}, b, h), this.__CACHE = {
          __NON_WITNESS_UTXO_TX_CACHE: [],
          __NON_WITNESS_UTXO_BUF_CACHE: [],
          __TX_IN_CACHE: {},
          __TX: this.data.globalMap.unsignedTx.tx,
          __UNSAFE_SIGN_NONSEGWIT: false
        }, this.data.inputs.length === 0 && this.setVersion(2);
        const A = (N, G, Q, ie) => Object.defineProperty(N, G, {
          enumerable: Q,
          writable: ie
        });
        A(this, "__CACHE", false, true), A(this, "opts", false, true);
      }
      get inputCount() {
        return this.data.inputs.length;
      }
      get version() {
        return this.__CACHE.__TX.version;
      }
      set version(h) {
        this.setVersion(h);
      }
      get locktime() {
        return this.__CACHE.__TX.locktime;
      }
      set locktime(h) {
        this.setLocktime(h);
      }
      get txInputs() {
        return this.__CACHE.__TX.ins.map((h) => ({
          hash: (0, f.cloneBuffer)(h.hash),
          index: h.index,
          sequence: h.sequence
        }));
      }
      get txOutputs() {
        return this.__CACHE.__TX.outs.map((h) => {
          let _;
          try {
            _ = (0, l.fromOutputScript)(h.script, this.opts.network);
          } catch {
          }
          return {
            script: (0, f.cloneBuffer)(h.script),
            value: h.value,
            address: _
          };
        });
      }
      combine(...h) {
        return this.data.combine(...h.map((_) => _.data)), this;
      }
      clone() {
        const h = p.fromBuffer(this.data.toBuffer());
        return h.opts = JSON.parse(JSON.stringify(this.opts)), h;
      }
      setMaximumFeeRate(h) {
        U(h), this.opts.maximumFeeRate = h;
      }
      setVersion(h) {
        U(h), q(this.data.inputs, "setVersion");
        const _ = this.__CACHE;
        return _.__TX.version = h, _.__EXTRACTED_TX = void 0, this;
      }
      setLocktime(h) {
        U(h), q(this.data.inputs, "setLocktime");
        const _ = this.__CACHE;
        return _.__TX.locktime = h, _.__EXTRACTED_TX = void 0, this;
      }
      setInputSequence(h, _) {
        U(_), q(this.data.inputs, "setInputSequence");
        const A = this.__CACHE;
        if (A.__TX.ins.length <= h) throw new Error("Input index too high");
        return A.__TX.ins[h].sequence = _, A.__EXTRACTED_TX = void 0, this;
      }
      addInputs(h) {
        return h.forEach((_) => this.addInput(_)), this;
      }
      addInput(h) {
        if (arguments.length > 1 || !h || h.hash === void 0 || h.index === void 0) throw new Error("Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]");
        (0, d.checkTaprootInputFields)(h, h, "addInput"), q(this.data.inputs, "addInput"), h.witnessScript && De(h.witnessScript);
        const _ = this.__CACHE;
        this.data.addInput(h);
        const A = _.__TX.ins[_.__TX.ins.length - 1];
        C(_, A);
        const N = this.data.inputs.length - 1, G = this.data.inputs[N];
        return G.nonWitnessUtxo && J(this.__CACHE, G, N), _.__FEE = void 0, _.__FEE_RATE = void 0, _.__EXTRACTED_TX = void 0, this;
      }
      addOutputs(h) {
        return h.forEach((_) => this.addOutput(_)), this;
      }
      addOutput(h) {
        if (arguments.length > 1 || !h || h.value === void 0 || h.address === void 0 && h.script === void 0) throw new Error("Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]");
        q(this.data.inputs, "addOutput");
        const { address: _ } = h;
        if (typeof _ == "string") {
          const { network: N } = this.opts, G = (0, l.toOutputScript)(_, N);
          h = Object.assign({}, h, {
            script: G
          });
        }
        (0, d.checkTaprootOutputFields)(h, h, "addOutput");
        const A = this.__CACHE;
        return this.data.addOutput(h), A.__FEE = void 0, A.__FEE_RATE = void 0, A.__EXTRACTED_TX = void 0, this;
      }
      extractTransaction(h) {
        if (!this.data.inputs.every(S)) throw new Error("Not finalized");
        const _ = this.__CACHE;
        if (h || R(this, _, this.opts), _.__EXTRACTED_TX) return _.__EXTRACTED_TX;
        const A = _.__TX.clone();
        return te(this.data.inputs, A, _, true), A;
      }
      getFeeRate() {
        return re("__FEE_RATE", "fee rate", this.data.inputs, this.__CACHE);
      }
      getFee() {
        return re("__FEE", "fee", this.data.inputs, this.__CACHE);
      }
      finalizeAllInputs() {
        return (0, v.checkForInput)(this.data.inputs, 0), m(this.data.inputs.length).forEach((h) => this.finalizeInput(h)), this;
      }
      finalizeInput(h, _) {
        const A = (0, v.checkForInput)(this.data.inputs, h);
        return (0, d.isTaprootInput)(A) ? this._finalizeTaprootInput(h, A, void 0, _) : this._finalizeInput(h, A, _);
      }
      finalizeTaprootInput(h, _, A = d.tapScriptFinalizer) {
        const N = (0, v.checkForInput)(this.data.inputs, h);
        if ((0, d.isTaprootInput)(N)) return this._finalizeTaprootInput(h, N, _, A);
        throw new Error(`Cannot finalize input #${h}. Not Taproot.`);
      }
      _finalizeInput(h, _, A = ue) {
        const { script: N, isP2SH: G, isP2WSH: Q, isSegwit: ie } = V(h, _, this.__CACHE);
        if (!N) throw new Error(`No script found for input #${h}`);
        x(_);
        const { finalScriptSig: ne, finalScriptWitness: se } = A(h, _, N, ie, G, Q);
        if (ne && this.data.updateInput(h, {
          finalScriptSig: ne
        }), se && this.data.updateInput(h, {
          finalScriptWitness: se
        }), !ne && !se) throw new Error(`Unknown error finalizing input #${h}`);
        return this.data.clearFinalizedInput(h), this;
      }
      _finalizeTaprootInput(h, _, A, N = d.tapScriptFinalizer) {
        if (!_.witnessUtxo) throw new Error(`Cannot finalize input #${h}. Missing withness utxo.`);
        if (_.tapKeySig) {
          const G = r.p2tr({
            output: _.witnessUtxo.script,
            signature: _.tapKeySig
          }), Q = (0, s.witnessStackToScriptWitness)(G.witness);
          this.data.updateInput(h, {
            finalScriptWitness: Q
          });
        } else {
          const { finalScriptWitness: G } = N(h, _, A);
          this.data.updateInput(h, {
            finalScriptWitness: G
          });
        }
        return this.data.clearFinalizedInput(h), this;
      }
      getInputType(h) {
        const _ = (0, v.checkForInput)(this.data.inputs, h), A = ce(h, _, this.__CACHE), N = Pe(A, h, "input", _.redeemScript || Ue(_.finalScriptSig), _.witnessScript || be(_.finalScriptWitness)), G = N.type === "raw" ? "" : N.type + "-", Q = T(N.meaningfulScript);
        return G + Q;
      }
      inputHasPubkey(h, _) {
        const A = (0, v.checkForInput)(this.data.inputs, h);
        return ge(_, A, h, this.__CACHE);
      }
      inputHasHDKey(h, _) {
        const A = (0, v.checkForInput)(this.data.inputs, h), N = I(_);
        return !!A.bip32Derivation && A.bip32Derivation.some(N);
      }
      outputHasPubkey(h, _) {
        const A = (0, v.checkForOutput)(this.data.outputs, h);
        return Ae(_, A, h, this.__CACHE);
      }
      outputHasHDKey(h, _) {
        const A = (0, v.checkForOutput)(this.data.outputs, h), N = I(_);
        return !!A.bip32Derivation && A.bip32Derivation.some(N);
      }
      validateSignaturesOfAllInputs(h) {
        return (0, v.checkForInput)(this.data.inputs, 0), m(this.data.inputs.length).map((A) => this.validateSignaturesOfInput(A, h)).reduce((A, N) => N === true && A, true);
      }
      validateSignaturesOfInput(h, _, A) {
        const N = this.data.inputs[h];
        return (0, d.isTaprootInput)(N) ? this.validateSignaturesOfTaprootInput(h, _, A) : this._validateSignaturesOfInput(h, _, A);
      }
      _validateSignaturesOfInput(h, _, A) {
        const N = this.data.inputs[h], G = (N || {}).partialSig;
        if (!N || !G || G.length < 1) throw new Error("No signatures to validate");
        if (typeof _ != "function") throw new Error("Need validator function to validate signatures");
        const Q = A ? G.filter((ye) => ye.pubkey.equals(A)) : G;
        if (Q.length < 1) throw new Error("No signatures for this pubkey");
        const ie = [];
        let ne, se, pe;
        for (const ye of Q) {
          const Ne = u.signature.decode(ye.signature), { hash: Er, script: ke } = pe !== Ne.hashType ? K(h, Object.assign({}, N, {
            sighashType: Ne.hashType
          }), this.__CACHE, true) : {
            hash: ne,
            script: se
          };
          pe = Ne.hashType, ne = Er, se = ke, P(ye.pubkey, ke, "verify"), ie.push(_(ye.pubkey, Er, Ne.signature));
        }
        return ie.every((ye) => ye === true);
      }
      validateSignaturesOfTaprootInput(h, _, A) {
        const N = this.data.inputs[h], G = (N || {}).tapKeySig, Q = (N || {}).tapScriptSig;
        if (!N && !G && !(Q && !Q.length)) throw new Error("No signatures to validate");
        if (typeof _ != "function") throw new Error("Need validator function to validate signatures");
        A = A && (0, d.toXOnly)(A);
        const ie = A ? Y(h, N, this.data.inputs, A, this.__CACHE) : Z(h, N, this.data.inputs, this.__CACHE);
        if (!ie.length) throw new Error("No signatures for this pubkey");
        const ne = ie.find((pe) => !pe.leafHash);
        let se = 0;
        if (G && ne) {
          if (!_(ne.pubkey, ne.hash, D(G))) return false;
          se++;
        }
        if (Q) for (const pe of Q) {
          const ye = ie.find((Ne) => pe.pubkey.equals(Ne.pubkey));
          if (ye) {
            if (!_(pe.pubkey, ye.hash, D(pe.signature))) return false;
            se++;
          }
        }
        return se > 0;
      }
      signAllInputsHD(h, _ = [
        a.Transaction.SIGHASH_ALL
      ]) {
        if (!h || !h.publicKey || !h.fingerprint) throw new Error("Need HDSigner to sign input");
        const A = [];
        for (const N of m(this.data.inputs.length)) try {
          this.signInputHD(N, h, _), A.push(true);
        } catch {
          A.push(false);
        }
        if (A.every((N) => N === false)) throw new Error("No inputs were signed");
        return this;
      }
      signAllInputsHDAsync(h, _ = [
        a.Transaction.SIGHASH_ALL
      ]) {
        return new Promise((A, N) => {
          if (!h || !h.publicKey || !h.fingerprint) return N(new Error("Need HDSigner to sign input"));
          const G = [], Q = [];
          for (const ie of m(this.data.inputs.length)) Q.push(this.signInputHDAsync(ie, h, _).then(() => {
            G.push(true);
          }, () => {
            G.push(false);
          }));
          return Promise.all(Q).then(() => {
            if (G.every((ie) => ie === false)) return N(new Error("No inputs were signed"));
            A();
          });
        });
      }
      signInputHD(h, _, A = [
        a.Transaction.SIGHASH_ALL
      ]) {
        if (!_ || !_.publicKey || !_.fingerprint) throw new Error("Need HDSigner to sign input");
        return $(h, this.data.inputs, _).forEach((G) => this.signInput(h, G, A)), this;
      }
      signInputHDAsync(h, _, A = [
        a.Transaction.SIGHASH_ALL
      ]) {
        return new Promise((N, G) => {
          if (!_ || !_.publicKey || !_.fingerprint) return G(new Error("Need HDSigner to sign input"));
          const ie = $(h, this.data.inputs, _).map((ne) => this.signInputAsync(h, ne, A));
          return Promise.all(ie).then(() => {
            N();
          }).catch(G);
        });
      }
      signAllInputs(h, _) {
        if (!h || !h.publicKey) throw new Error("Need Signer to sign input");
        const A = [];
        for (const N of m(this.data.inputs.length)) try {
          this.signInput(N, h, _), A.push(true);
        } catch {
          A.push(false);
        }
        if (A.every((N) => N === false)) throw new Error("No inputs were signed");
        return this;
      }
      signAllInputsAsync(h, _) {
        return new Promise((A, N) => {
          if (!h || !h.publicKey) return N(new Error("Need Signer to sign input"));
          const G = [], Q = [];
          for (const [ie] of this.data.inputs.entries()) Q.push(this.signInputAsync(ie, h, _).then(() => {
            G.push(true);
          }, () => {
            G.push(false);
          }));
          return Promise.all(Q).then(() => {
            if (G.every((ie) => ie === false)) return N(new Error("No inputs were signed"));
            A();
          });
        });
      }
      signInput(h, _, A) {
        if (!_ || !_.publicKey) throw new Error("Need Signer to sign input");
        const N = (0, v.checkForInput)(this.data.inputs, h);
        return (0, d.isTaprootInput)(N) ? this._signTaprootInput(h, N, _, void 0, A) : this._signInput(h, _, A);
      }
      signTaprootInput(h, _, A, N) {
        if (!_ || !_.publicKey) throw new Error("Need Signer to sign input");
        const G = (0, v.checkForInput)(this.data.inputs, h);
        if ((0, d.isTaprootInput)(G)) return this._signTaprootInput(h, G, _, A, N);
        throw new Error(`Input #${h} is not of type Taproot.`);
      }
      _signInput(h, _, A = [
        a.Transaction.SIGHASH_ALL
      ]) {
        const { hash: N, sighashType: G } = F(this.data.inputs, h, _.publicKey, this.__CACHE, A), Q = [
          {
            pubkey: _.publicKey,
            signature: u.signature.encode(_.sign(N), G)
          }
        ];
        return this.data.updateInput(h, {
          partialSig: Q
        }), this;
      }
      _signTaprootInput(h, _, A, N, G = [
        a.Transaction.SIGHASH_DEFAULT
      ]) {
        const Q = this.checkTaprootHashesForSig(h, _, A, N, G), ie = Q.filter((se) => !se.leafHash).map((se) => (0, d.serializeTaprootSignature)(A.signSchnorr(se.hash), _.sighashType))[0], ne = Q.filter((se) => !!se.leafHash).map((se) => ({
          pubkey: (0, d.toXOnly)(A.publicKey),
          signature: (0, d.serializeTaprootSignature)(A.signSchnorr(se.hash), _.sighashType),
          leafHash: se.leafHash
        }));
        return ie && this.data.updateInput(h, {
          tapKeySig: ie
        }), ne.length && this.data.updateInput(h, {
          tapScriptSig: ne
        }), this;
      }
      signInputAsync(h, _, A) {
        return Promise.resolve().then(() => {
          if (!_ || !_.publicKey) throw new Error("Need Signer to sign input");
          const N = (0, v.checkForInput)(this.data.inputs, h);
          return (0, d.isTaprootInput)(N) ? this._signTaprootInputAsync(h, N, _, void 0, A) : this._signInputAsync(h, _, A);
        });
      }
      signTaprootInputAsync(h, _, A, N) {
        return Promise.resolve().then(() => {
          if (!_ || !_.publicKey) throw new Error("Need Signer to sign input");
          const G = (0, v.checkForInput)(this.data.inputs, h);
          if ((0, d.isTaprootInput)(G)) return this._signTaprootInputAsync(h, G, _, A, N);
          throw new Error(`Input #${h} is not of type Taproot.`);
        });
      }
      _signInputAsync(h, _, A = [
        a.Transaction.SIGHASH_ALL
      ]) {
        const { hash: N, sighashType: G } = F(this.data.inputs, h, _.publicKey, this.__CACHE, A);
        return Promise.resolve(_.sign(N)).then((Q) => {
          const ie = [
            {
              pubkey: _.publicKey,
              signature: u.signature.encode(Q, G)
            }
          ];
          this.data.updateInput(h, {
            partialSig: ie
          });
        });
      }
      async _signTaprootInputAsync(h, _, A, N, G = [
        a.Transaction.SIGHASH_DEFAULT
      ]) {
        const Q = this.checkTaprootHashesForSig(h, _, A, N, G), ie = [], ne = Q.filter((pe) => !pe.leafHash)[0];
        if (ne) {
          const pe = Promise.resolve(A.signSchnorr(ne.hash)).then((ye) => ({
            tapKeySig: (0, d.serializeTaprootSignature)(ye, _.sighashType)
          }));
          ie.push(pe);
        }
        const se = Q.filter((pe) => !!pe.leafHash);
        if (se.length) {
          const pe = se.map((ye) => Promise.resolve(A.signSchnorr(ye.hash)).then((Ne) => ({
            tapScriptSig: [
              {
                pubkey: (0, d.toXOnly)(A.publicKey),
                signature: (0, d.serializeTaprootSignature)(Ne, _.sighashType),
                leafHash: ye.leafHash
              }
            ]
          })));
          ie.push(...pe);
        }
        return Promise.all(ie).then((pe) => {
          pe.forEach((ye) => this.data.updateInput(h, ye));
        });
      }
      checkTaprootHashesForSig(h, _, A, N, G) {
        if (typeof A.signSchnorr != "function") throw new Error(`Need Schnorr Signer to sign taproot input #${h}.`);
        const Q = Y(h, _, this.data.inputs, A.publicKey, this.__CACHE, N, G);
        if (!Q || !Q.length) throw new Error(`Can not sign for input #${h} with the key ${A.publicKey.toString("hex")}`);
        return Q;
      }
      toBuffer() {
        return E(this.__CACHE), this.data.toBuffer();
      }
      toHex() {
        return E(this.__CACHE), this.data.toHex();
      }
      toBase64() {
        return E(this.__CACHE), this.data.toBase64();
      }
      updateGlobal(h) {
        return this.data.updateGlobal(h), this;
      }
      updateInput(h, _) {
        return _.witnessScript && De(_.witnessScript), (0, d.checkTaprootInputFields)(this.data.inputs[h], _, "updateInput"), this.data.updateInput(h, _), _.nonWitnessUtxo && J(this.__CACHE, this.data.inputs[h], h), this;
      }
      updateOutput(h, _) {
        const A = this.data.outputs[h];
        return (0, d.checkTaprootOutputFields)(A, _, "updateOutput"), this.data.updateOutput(h, _), this;
      }
      addUnknownKeyValToGlobal(h) {
        return this.data.addUnknownKeyValToGlobal(h), this;
      }
      addUnknownKeyValToInput(h, _) {
        return this.data.addUnknownKeyValToInput(h, _), this;
      }
      addUnknownKeyValToOutput(h, _) {
        return this.data.addUnknownKeyValToOutput(h, _), this;
      }
      clearFinalizedInput(h) {
        return this.data.clearFinalizedInput(h), this;
      }
    }
    st.Psbt = p;
    const c = (o) => new y(o);
    class y {
      constructor(h = e.from([
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
        this.tx = a.Transaction.fromBuffer(h), H(this.tx), Object.defineProperty(this, "tx", {
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
      addInput(h) {
        if (h.hash === void 0 || h.index === void 0 || !e.isBuffer(h.hash) && typeof h.hash != "string" || typeof h.index != "number") throw new Error("Error adding input.");
        const _ = typeof h.hash == "string" ? (0, f.reverseBuffer)(e.from(h.hash, "hex")) : h.hash;
        this.tx.addInput(_, h.index, h.sequence);
      }
      addOutput(h) {
        if (h.script === void 0 || h.value === void 0 || !e.isBuffer(h.script) || typeof h.value != "number") throw new Error("Error adding output.");
        this.tx.addOutput(h.script, h.value);
      }
      toBuffer() {
        return this.tx.toBuffer();
      }
    }
    function w(o, h, _) {
      switch (_) {
        case "pubkey":
        case "pubkeyhash":
        case "witnesspubkeyhash":
          return k(1, o.partialSig);
        case "multisig":
          const A = r.p2ms({
            output: h
          });
          return k(A.m, o.partialSig, A.pubkeys);
        default:
          return false;
      }
    }
    function E(o) {
      if (o.__UNSAFE_SIGN_NONSEGWIT !== false) throw new Error("Not BIP174 compliant, can not export");
    }
    function k(o, h, _) {
      if (!h) return false;
      let A;
      if (_ ? A = _.map((N) => {
        const G = ve(N);
        return h.find((Q) => Q.pubkey.equals(G));
      }).filter((N) => !!N) : A = h, A.length > o) throw new Error("Too many signatures");
      return A.length === o;
    }
    function S(o) {
      return !!o.finalScriptSig || !!o.finalScriptWitness;
    }
    function I(o) {
      return (h) => !(!h.masterFingerprint.equals(o.fingerprint) || !o.derivePath(h.path).publicKey.equals(h.pubkey));
    }
    function U(o) {
      if (typeof o != "number" || o !== Math.floor(o) || o > 4294967295 || o < 0) throw new Error("Invalid 32 bit integer");
    }
    function R(o, h, _) {
      const A = h.__FEE_RATE || o.getFeeRate(), N = h.__EXTRACTED_TX.virtualSize(), G = A * N;
      if (A >= _.maximumFeeRate) throw new Error(`Warning: You are paying around ${(G / 1e8).toFixed(8)} in fees, which is ${A} satoshi per byte for a transaction with a VSize of ${N} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`);
    }
    function q(o, h) {
      o.forEach((_) => {
        if ((0, d.isTaprootInput)(_) ? (0, d.checkTaprootInputForSigs)(_, h) : (0, s.checkInputForSig)(_, h)) throw new Error("Can not modify transaction, signatures exist.");
      });
    }
    function x(o) {
      if (!o.sighashType || !o.partialSig) return;
      const { partialSig: h, sighashType: _ } = o;
      h.forEach((A) => {
        const { hashType: N } = u.signature.decode(A.signature);
        if (_ !== N) throw new Error("Signature sighash does not match input sighash type");
      });
    }
    function P(o, h, _) {
      if (!(0, s.pubkeyInScript)(o, h)) throw new Error(`Can not ${_} for this input with the key ${o.toString("hex")}`);
    }
    function H(o) {
      if (!o.ins.every((_) => _.script && _.script.length === 0 && _.witness && _.witness.length === 0)) throw new Error("Format Error: Transaction ScriptSigs are not empty");
    }
    function j(o, h) {
      o.ins.forEach((_) => {
        C(h, _);
      });
    }
    function C(o, h) {
      const _ = (0, f.reverseBuffer)(e.from(h.hash)).toString("hex") + ":" + h.index;
      if (o.__TX_IN_CACHE[_]) throw new Error("Duplicate input detected.");
      o.__TX_IN_CACHE[_] = 1;
    }
    function W(o, h) {
      return (_, A, N, G) => {
        const Q = o({
          redeem: {
            output: N
          }
        }).output;
        if (!A.equals(Q)) throw new Error(`${h} for ${G} #${_} doesn't match the scriptPubKey in the prevout`);
      };
    }
    const X = W(r.p2sh, "Redeem script"), ee = W(r.p2wsh, "Witness script");
    function re(o, h, _, A) {
      if (!_.every(S)) throw new Error(`PSBT must be finalized to calculate ${h}`);
      if (o === "__FEE_RATE" && A.__FEE_RATE) return A.__FEE_RATE;
      if (o === "__FEE" && A.__FEE) return A.__FEE;
      let N, G = true;
      if (A.__EXTRACTED_TX ? (N = A.__EXTRACTED_TX, G = false) : N = A.__TX.clone(), te(_, N, A, G), o === "__FEE_RATE") return A.__FEE_RATE;
      if (o === "__FEE") return A.__FEE;
    }
    function ue(o, h, _, A, N, G) {
      const Q = T(_);
      if (!w(h, _, Q)) throw new Error(`Can not finalize input #${o}`);
      return O(_, Q, h.partialSig, A, N, G);
    }
    function O(o, h, _, A, N, G) {
      let Q, ie;
      const ne = M(o, h, _), se = G ? r.p2wsh({
        redeem: ne
      }) : null, pe = N ? r.p2sh({
        redeem: se || ne
      }) : null;
      return A ? (se ? ie = (0, s.witnessStackToScriptWitness)(se.witness) : ie = (0, s.witnessStackToScriptWitness)(ne.witness), pe && (Q = pe.input)) : pe ? Q = pe.input : Q = ne.input, {
        finalScriptSig: Q,
        finalScriptWitness: ie
      };
    }
    function F(o, h, _, A, N) {
      const G = (0, v.checkForInput)(o, h), { hash: Q, sighashType: ie, script: ne } = K(h, G, A, false, N);
      return P(_, ne, "sign"), {
        hash: Q,
        sighashType: ie
      };
    }
    function K(o, h, _, A, N) {
      const G = _.__TX, Q = h.sighashType || a.Transaction.SIGHASH_ALL;
      L(Q, N);
      let ie, ne;
      if (h.nonWitnessUtxo) {
        const ye = le(_, h, o), Ne = G.ins[o].hash, Er = ye.getHash();
        if (!Ne.equals(Er)) throw new Error(`Non-witness UTXO hash for input #${o} doesn't match the hash specified in the prevout`);
        const ke = G.ins[o].index;
        ne = ye.outs[ke];
      } else if (h.witnessUtxo) ne = h.witnessUtxo;
      else throw new Error("Need a Utxo input item for signing");
      const { meaningfulScript: se, type: pe } = Pe(ne.script, o, "input", h.redeemScript, h.witnessScript);
      if ([
        "p2sh-p2wsh",
        "p2wsh"
      ].indexOf(pe) >= 0) ie = G.hashForWitnessV0(o, se, ne.value, Q);
      else if ((0, s.isP2WPKH)(se)) {
        const ye = r.p2pkh({
          hash: se.slice(2)
        }).output;
        ie = G.hashForWitnessV0(o, ye, ne.value, Q);
      } else {
        if (h.nonWitnessUtxo === void 0 && _.__UNSAFE_SIGN_NONSEGWIT === false) throw new Error(`Input #${o} has witnessUtxo but non-segwit script: ${se.toString("hex")}`);
        !A && _.__UNSAFE_SIGN_NONSEGWIT !== false && console.warn(`Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecessor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.
*********************
PROCEED WITH CAUTION!
*********************`), ie = G.hashForSignature(o, se, Q);
      }
      return {
        script: se,
        sighashType: Q,
        hash: ie
      };
    }
    function Z(o, h, _, A) {
      const N = [];
      if (h.tapInternalKey) {
        const Q = ae(o, h, A);
        Q && N.push(Q);
      }
      if (h.tapScriptSig) {
        const Q = h.tapScriptSig.map((ie) => ie.pubkey);
        N.push(...Q);
      }
      return N.map((Q) => Y(o, h, _, Q, A)).flat();
    }
    function ae(o, h, _) {
      const { script: A } = fe(o, h, _);
      return (0, s.isP2TR)(A) ? A.subarray(2, 34) : null;
    }
    function D(o) {
      return o.length === 64 ? o : o.subarray(0, 64);
    }
    function Y(o, h, _, A, N, G, Q) {
      const ie = N.__TX, ne = h.sighashType || a.Transaction.SIGHASH_DEFAULT;
      L(ne, Q);
      const se = _.map((ke, kr) => fe(kr, ke, N)), pe = se.map((ke) => ke.script), ye = se.map((ke) => ke.value), Ne = [];
      if (h.tapInternalKey && !G) {
        const ke = ae(o, h, N) || e.from([]);
        if ((0, d.toXOnly)(A).equals(ke)) {
          const kr = ie.hashForWitnessV1(o, pe, ye, ne);
          Ne.push({
            pubkey: A,
            hash: kr
          });
        }
      }
      const Er = (h.tapLeafScript || []).filter((ke) => (0, s.pubkeyInScript)(A, ke.script)).map((ke) => {
        const kr = (0, n.tapleafHash)({
          output: ke.script,
          version: ke.leafVersion
        });
        return Object.assign({
          hash: kr
        }, ke);
      }).filter((ke) => !G || G.equals(ke.hash)).map((ke) => {
        const kr = ie.hashForWitnessV1(o, pe, ye, ne, ke.hash);
        return {
          pubkey: A,
          hash: kr,
          leafHash: ke.hash
        };
      });
      return Ne.concat(Er);
    }
    function L(o, h) {
      if (h && h.indexOf(o) < 0) {
        const _ = z(o);
        throw new Error(`Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${_}`);
      }
    }
    function M(o, h, _) {
      let A;
      switch (h) {
        case "multisig":
          const N = oe(o, _);
          A = r.p2ms({
            output: o,
            signatures: N
          });
          break;
        case "pubkey":
          A = r.p2pk({
            output: o,
            signature: _[0].signature
          });
          break;
        case "pubkeyhash":
          A = r.p2pkh({
            output: o,
            pubkey: _[0].pubkey,
            signature: _[0].signature
          });
          break;
        case "witnesspubkeyhash":
          A = r.p2wpkh({
            output: o,
            pubkey: _[0].pubkey,
            signature: _[0].signature
          });
          break;
      }
      return A;
    }
    function V(o, h, _) {
      const A = _.__TX, N = {
        script: null,
        isSegwit: false,
        isP2SH: false,
        isP2WSH: false
      };
      if (N.isP2SH = !!h.redeemScript, N.isP2WSH = !!h.witnessScript, h.witnessScript) N.script = h.witnessScript;
      else if (h.redeemScript) N.script = h.redeemScript;
      else if (h.nonWitnessUtxo) {
        const G = le(_, h, o), Q = A.ins[o].index;
        N.script = G.outs[Q].script;
      } else h.witnessUtxo && (N.script = h.witnessUtxo.script);
      return (h.witnessScript || (0, s.isP2WPKH)(N.script)) && (N.isSegwit = true), N;
    }
    function $(o, h, _) {
      const A = (0, v.checkForInput)(h, o);
      if (!A.bip32Derivation || A.bip32Derivation.length === 0) throw new Error("Need bip32Derivation to sign with HD");
      const N = A.bip32Derivation.map((Q) => {
        if (Q.masterFingerprint.equals(_.fingerprint)) return Q;
      }).filter((Q) => !!Q);
      if (N.length === 0) throw new Error("Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint");
      return N.map((Q) => {
        const ie = _.derivePath(Q.path);
        if (!Q.pubkey.equals(ie.publicKey)) throw new Error("pubkey did not match bip32Derivation");
        return ie;
      });
    }
    function oe(o, h) {
      return r.p2ms({
        output: o
      }).pubkeys.map((A) => (h.filter((N) => N.pubkey.equals(A))[0] || {}).signature).filter((A) => !!A);
    }
    function B(o) {
      let h = 0;
      function _(Q) {
        return h += Q, o.slice(h - Q, h);
      }
      function A() {
        const Q = g.decode(o, h);
        return h += g.decode.bytes, Q;
      }
      function N() {
        return _(A());
      }
      function G() {
        const Q = A(), ie = [];
        for (let ne = 0; ne < Q; ne++) ie.push(N());
        return ie;
      }
      return G();
    }
    function z(o) {
      let h = o & a.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
      switch (o & 31) {
        case a.Transaction.SIGHASH_ALL:
          h += "SIGHASH_ALL";
          break;
        case a.Transaction.SIGHASH_SINGLE:
          h += "SIGHASH_SINGLE";
          break;
        case a.Transaction.SIGHASH_NONE:
          h += "SIGHASH_NONE";
          break;
      }
      return h;
    }
    function J(o, h, _) {
      o.__NON_WITNESS_UTXO_BUF_CACHE[_] = h.nonWitnessUtxo;
      const A = a.Transaction.fromBuffer(h.nonWitnessUtxo);
      o.__NON_WITNESS_UTXO_TX_CACHE[_] = A;
      const N = o, G = _;
      delete h.nonWitnessUtxo, Object.defineProperty(h, "nonWitnessUtxo", {
        enumerable: true,
        get() {
          const Q = N.__NON_WITNESS_UTXO_BUF_CACHE[G], ie = N.__NON_WITNESS_UTXO_TX_CACHE[G];
          if (Q !== void 0) return Q;
          {
            const ne = ie.toBuffer();
            return N.__NON_WITNESS_UTXO_BUF_CACHE[G] = ne, ne;
          }
        },
        set(Q) {
          N.__NON_WITNESS_UTXO_BUF_CACHE[G] = Q;
        }
      });
    }
    function te(o, h, _, A) {
      let N = 0;
      o.forEach((ne, se) => {
        if (A && ne.finalScriptSig && (h.ins[se].script = ne.finalScriptSig), A && ne.finalScriptWitness && (h.ins[se].witness = B(ne.finalScriptWitness)), ne.witnessUtxo) N += ne.witnessUtxo.value;
        else if (ne.nonWitnessUtxo) {
          const pe = le(_, ne, se), ye = h.ins[se].index, Ne = pe.outs[ye];
          N += Ne.value;
        }
      });
      const G = h.outs.reduce((ne, se) => ne + se.value, 0), Q = N - G;
      if (Q < 0) throw new Error("Outputs are spending more than Inputs");
      const ie = h.virtualSize();
      _.__FEE = Q, _.__EXTRACTED_TX = h, _.__FEE_RATE = Math.floor(Q / ie);
    }
    function le(o, h, _) {
      const A = o.__NON_WITNESS_UTXO_TX_CACHE;
      return A[_] || J(o, h, _), A[_];
    }
    function ce(o, h, _) {
      const { script: A } = fe(o, h, _);
      return A;
    }
    function fe(o, h, _) {
      if (h.witnessUtxo !== void 0) return {
        script: h.witnessUtxo.script,
        value: h.witnessUtxo.value
      };
      if (h.nonWitnessUtxo !== void 0) {
        const N = le(_, h, o).outs[_.__TX.ins[o].index];
        return {
          script: N.script,
          value: N.value
        };
      } else throw new Error("Can't find pubkey in input without Utxo data");
    }
    function ge(o, h, _, A) {
      const N = ce(_, h, A), { meaningfulScript: G } = Pe(N, _, "input", h.redeemScript, h.witnessScript);
      return (0, s.pubkeyInScript)(o, G);
    }
    function Ae(o, h, _, A) {
      const N = A.__TX.outs[_].script, { meaningfulScript: G } = Pe(N, _, "output", h.redeemScript, h.witnessScript);
      return (0, s.pubkeyInScript)(o, G);
    }
    function Ue(o) {
      if (!o) return;
      const h = u.decompile(o);
      if (!h) return;
      const _ = h[h.length - 1];
      if (!(!e.isBuffer(_) || ze(_) || Qe(_) || !u.decompile(_))) return _;
    }
    function be(o) {
      if (!o) return;
      const h = B(o), _ = h[h.length - 1];
      if (!(ze(_) || !u.decompile(_))) return _;
    }
    function ve(o) {
      if (o.length === 65) {
        const h = o[64] & 1, _ = o.slice(0, 33);
        return _[0] = 2 | h, _;
      }
      return o.slice();
    }
    function ze(o) {
      return o.length === 33 && u.isCanonicalPubKey(o);
    }
    function Qe(o) {
      return u.isCanonicalScriptSignature(o);
    }
    function Pe(o, h, _, A, N) {
      const G = (0, s.isP2SHScript)(o), Q = G && A && (0, s.isP2WSHScript)(A), ie = (0, s.isP2WSHScript)(o);
      if (G && A === void 0) throw new Error("scriptPubkey is P2SH but redeemScript missing");
      if ((ie || Q) && N === void 0) throw new Error("scriptPubkey or redeemScript is P2WSH but witnessScript missing");
      let ne;
      return Q ? (ne = N, X(h, o, A, _), ee(h, A, N, _), De(ne)) : ie ? (ne = N, ee(h, o, N, _), De(ne)) : G ? (ne = A, X(h, o, A, _)) : ne = o, {
        meaningfulScript: ne,
        type: Q ? "p2sh-p2wsh" : G ? "p2sh" : ie ? "p2wsh" : "raw"
      };
    }
    function De(o) {
      if ((0, s.isP2WPKH)(o) || (0, s.isP2SHScript)(o)) throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
    }
    function T(o) {
      return (0, s.isP2WPKH)(o) ? "witnesspubkeyhash" : (0, s.isP2PKH)(o) ? "pubkeyhash" : (0, s.isP2MS)(o) ? "multisig" : (0, s.isP2PK)(o) ? "pubkey" : "nonstandard";
    }
    function m(o) {
      return [
        ...Array(o).keys()
      ];
    }
    return st;
  }
  var qo;
  Sl = function() {
    return qo || (qo = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.initEccLib = e.Transaction = e.opcodes = e.Psbt = e.Block = e.script = e.payments = e.networks = e.crypto = e.address = void 0;
      const t = Yi();
      e.address = t;
      const g = nr();
      e.crypto = g;
      const v = Ye();
      e.networks = v;
      const l = mt();
      e.payments = l;
      const f = qe();
      e.script = f;
      var i = tu();
      Object.defineProperty(e, "Block", {
        enumerable: true,
        get: function() {
          return i.Block;
        }
      });
      var r = Au();
      Object.defineProperty(e, "Psbt", {
        enumerable: true,
        get: function() {
          return r.Psbt;
        }
      });
      var n = Wi();
      Object.defineProperty(e, "opcodes", {
        enumerable: true,
        get: function() {
          return n.OPS;
        }
      });
      var u = bt();
      Object.defineProperty(e, "Transaction", {
        enumerable: true,
        get: function() {
          return u.Transaction;
        }
      });
      var a = $i();
      Object.defineProperty(e, "initEccLib", {
        enumerable: true,
        get: function() {
          return a.initEccLib;
        }
      });
    }(qt)), qt;
  };
  const Qa = "0123456789abcdefABCDEF";
  Qa.split("").map((e) => e.codePointAt(0));
  Array(256).fill(true).map((e, t) => {
    const g = String.fromCodePoint(t), v = Qa.indexOf(g);
    return v < 0 ? void 0 : v < 16 ? v : v - 6;
  });
  new TextEncoder();
  new TextDecoder("ascii");
  function Pu(e, t) {
    const g = Math.min(e.length, t.length);
    for (let v = 0; v < g; ++v) if (e[v] !== t[v]) return e[v] < t[v] ? -1 : 1;
    return e.length === t.length ? 0 : e.length > t.length ? 1 : -1;
  }
  const Za = 0, Zi = 1, es = 2, rs = 3, ft = 4, ts = 5, is = 6, ns = 7, Bu = {
    [Za.toString()]: "Expected Private",
    [Zi.toString()]: "Expected Point",
    [es.toString()]: "Expected Tweak",
    [rs.toString()]: "Expected Hash",
    [ft.toString()]: "Expected Signature",
    [ts.toString()]: "Expected Extra Data (32 bytes)",
    [is.toString()]: "Expected Parity (1 | 0)",
    [ns.toString()]: "Bad Recovery Id"
  };
  function Me(e) {
    const t = Bu[e.toString()] || `Unknow error code: ${e}`;
    throw new TypeError(t);
  }
  const gt = 32, ht = 33, vt = 65, wr = 32, os = 32, as = 32, ss = 32, xt = 64, us = new Uint8Array(32), Ut = new Uint8Array([
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
  ]), Ou = new Uint8Array([
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
  function zr(e, t) {
    for (let g = 0; g < 32; ++g) if (e[g] !== t[g]) return e[g] < t[g] ? -1 : 1;
    return 0;
  }
  function Di(e) {
    return zr(e, us) === 0;
  }
  function cs(e) {
    return Je(e) && e.length === gt && zr(e, us) > 0 && zr(e, Ut) < 0;
  }
  function Ru(e) {
    return Je(e) && (e.length === ht || e.length === vt || e.length === wr);
  }
  function ls(e) {
    return Je(e) && e.length === wr;
  }
  function Uu(e) {
    return Je(e) && (e.length === ht || e.length === vt);
  }
  function zu(e) {
    return Je(e) && e.length === ht;
  }
  function Nu(e) {
    return Je(e) && e.length === os && zr(e, Ut) < 0;
  }
  function Hu(e) {
    return Je(e) && e.length === as;
  }
  function xu(e) {
    return e === void 0 || Je(e) && e.length === ss;
  }
  function Lu(e) {
    return Je(e) && e.length === 64 && zr(e.subarray(0, 32), Ut) < 0 && zr(e.subarray(32, 64), Ut) < 0;
  }
  function Cu(e) {
    return Je(e) && e.length === 64 && zr(e.subarray(0, 32), Ou) < 0;
  }
  function ju(e) {
    e !== 0 && e !== 1 && Me(is);
  }
  function _r(e) {
    cs(e) || Me(Za);
  }
  function Nr(e) {
    Ru(e) || Me(Zi);
  }
  function zt(e) {
    ls(e) || Me(Zi);
  }
  function Fr(e) {
    Nu(e) || Me(es);
  }
  function Dr(e) {
    Hu(e) || Me(rs);
  }
  function en(e) {
    xu(e) || Me(ts);
  }
  function rn(e) {
    Lu(e) || Me(ft);
  }
  function qu(e) {
    e() || Me(ft);
  }
  function Mu(e) {
    Di(e.subarray(0, 32)) && Me(ft), Di(e.subarray(32, 64)) && Me(ft);
  }
  function Fu(e) {
    Cu(e) || Me(ns);
  }
  const Du = "/assets/secp256k1-2IQOMy_D.wasm";
  var ni = [
    "buffer",
    "Buffer"
  ];
  const Ku = async (e = {}, t) => {
    let g;
    if (t.startsWith("data:")) {
      const v = t.replace(/^data:.*?base64,/, "");
      let l;
      if (typeof ni == "function" && typeof ni.from == "function") l = ni.from(v, "base64");
      else if (typeof atob == "function") {
        const f = atob(v);
        l = new Uint8Array(f.length);
        for (let i = 0; i < f.length; i++) l[i] = f.charCodeAt(i);
      } else throw new Error("Cannot decode base64-encoded data URL");
      g = await WebAssembly.instantiate(l, e);
    } else {
      const v = await fetch(t), l = v.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && l.startsWith("application/wasm")) g = await WebAssembly.instantiateStreaming(v, e);
      else {
        const f = await v.arrayBuffer();
        g = await WebAssembly.instantiate(f, e);
      }
    }
    return g.instance.exports;
  };
  function Wu() {
    const e = new Uint8Array(4);
    if (typeof crypto > "u") throw new Error("The crypto object is unavailable. This may occur if your environment does not support the Web Cryptography API.");
    return crypto.getRandomValues(e), e;
  }
  function Vu() {
    const e = Wu();
    return (e[0] << 3 * 8) + (e[1] << 2 * 8) + (e[2] << 1 * 8) + e[3];
  }
  URL = globalThis.URL;
  const de = await Ku({
    "./rand.js": {
      generateInt32: Vu
    },
    "./validate_error.js": {
      throwError: Me
    }
  }, Du), Gu = de.memory, $u = de.initializeContext, Xu = de.isPoint, Yu = de.PUBLIC_KEY_INPUT, Ju = de.pointAdd, Qu = de.PUBLIC_KEY_INPUT2, Zu = de.pointAddScalar, ec = de.TWEAK_INPUT, rc = de.xOnlyPointAddTweak, tc = de.X_ONLY_PUBLIC_KEY_INPUT, ic = de.xOnlyPointAddTweakCheck, nc = de.X_ONLY_PUBLIC_KEY_INPUT2, oc = de.pointCompress, ac = de.pointFromScalar, sc = de.PRIVATE_INPUT, uc = de.xOnlyPointFromScalar, cc = de.xOnlyPointFromPoint, lc = de.pointMultiply, fc = de.privateAdd, hc = de.privateSub, dc = de.privateNegate, pc = de.sign, mc = de.HASH_INPUT, bc = de.EXTRA_DATA_INPUT, gc = de.SIGNATURE_INPUT, vc = de.signRecoverable, yc = de.signSchnorr, wc = de.verify, _c = de.recover, Ec = de.verifySchnorr, kc = de.rustsecp256k1_v0_8_1_default_error_callback_fn, Sc = de.rustsecp256k1_v0_8_1_default_illegal_callback_fn, Tc = de.__data_end, Ic = de.__heap_base, me = Object.freeze(Object.defineProperty({
    __proto__: null,
    EXTRA_DATA_INPUT: bc,
    HASH_INPUT: mc,
    PRIVATE_INPUT: sc,
    PUBLIC_KEY_INPUT: Yu,
    PUBLIC_KEY_INPUT2: Qu,
    SIGNATURE_INPUT: gc,
    TWEAK_INPUT: ec,
    X_ONLY_PUBLIC_KEY_INPUT: tc,
    X_ONLY_PUBLIC_KEY_INPUT2: nc,
    __data_end: Tc,
    __heap_base: Ic,
    initializeContext: $u,
    isPoint: Xu,
    memory: Gu,
    pointAdd: Ju,
    pointAddScalar: Zu,
    pointCompress: oc,
    pointFromScalar: ac,
    pointMultiply: lc,
    privateAdd: fc,
    privateNegate: dc,
    privateSub: hc,
    recover: _c,
    rustsecp256k1_v0_8_1_default_error_callback_fn: kc,
    rustsecp256k1_v0_8_1_default_illegal_callback_fn: Sc,
    sign: pc,
    signRecoverable: vc,
    signSchnorr: yc,
    verify: wc,
    verifySchnorr: Ec,
    xOnlyPointAddTweak: rc,
    xOnlyPointAddTweakCheck: ic,
    xOnlyPointFromPoint: cc,
    xOnlyPointFromScalar: uc
  }, Symbol.toStringTag, {
    value: "Module"
  })), or = new Uint8Array(me.memory.buffer), Mo = me.PRIVATE_INPUT.value, Fo = me.PUBLIC_KEY_INPUT.value, Do = me.PUBLIC_KEY_INPUT2.value, Ko = me.X_ONLY_PUBLIC_KEY_INPUT.value, Wo = me.X_ONLY_PUBLIC_KEY_INPUT2.value, Vo = me.TWEAK_INPUT.value, Go = me.HASH_INPUT.value, $o = me.EXTRA_DATA_INPUT.value, Xo = me.SIGNATURE_INPUT.value, Ie = or.subarray(Mo, Mo + gt), Se = or.subarray(Fo, Fo + vt), Yo = or.subarray(Do, Do + vt), We = or.subarray(Ko, Ko + wr), Jo = or.subarray(Wo, Wo + wr), Ve = or.subarray(Vo, Vo + os), Ge = or.subarray(Go, Go + as), jr = or.subarray($o, $o + ss), $e = or.subarray(Xo, Xo + xt);
  function Kr(e, t) {
    return e === void 0 ? t !== void 0 ? t.length : ht : e ? ht : vt;
  }
  function tn(e) {
    try {
      return Se.set(e), me.isPoint(e.length) === 1;
    } finally {
      Se.fill(0);
    }
  }
  function Ac() {
    me.initializeContext();
  }
  function Pc(e) {
    return Uu(e) && tn(e);
  }
  function Bc(e) {
    return zu(e) && tn(e);
  }
  function fs(e) {
    return ls(e) && tn(e);
  }
  function Oc(e) {
    return cs(e);
  }
  function Rc(e, t, g) {
    Nr(e), Nr(t);
    const v = Kr(g, e);
    try {
      return Se.set(e), Yo.set(t), me.pointAdd(e.length, t.length, v) === 1 ? Se.slice(0, v) : null;
    } finally {
      Se.fill(0), Yo.fill(0);
    }
  }
  function Uc(e, t, g) {
    Nr(e), Fr(t);
    const v = Kr(g, e);
    try {
      return Se.set(e), Ve.set(t), me.pointAddScalar(e.length, v) === 1 ? Se.slice(0, v) : null;
    } finally {
      Se.fill(0), Ve.fill(0);
    }
  }
  function zc(e, t) {
    Nr(e);
    const g = Kr(t, e);
    try {
      return Se.set(e), me.pointCompress(e.length, g), Se.slice(0, g);
    } finally {
      Se.fill(0);
    }
  }
  function Nc(e, t) {
    _r(e);
    const g = Kr(t);
    try {
      return Ie.set(e), me.pointFromScalar(g) === 1 ? Se.slice(0, g) : null;
    } finally {
      Ie.fill(0), Se.fill(0);
    }
  }
  function Hc(e) {
    _r(e);
    try {
      return Ie.set(e), me.xOnlyPointFromScalar(), We.slice(0, wr);
    } finally {
      Ie.fill(0), We.fill(0);
    }
  }
  function xc(e) {
    Nr(e);
    try {
      return Se.set(e), me.xOnlyPointFromPoint(e.length), We.slice(0, wr);
    } finally {
      Se.fill(0), We.fill(0);
    }
  }
  function Lc(e, t, g) {
    Nr(e), Fr(t);
    const v = Kr(g, e);
    try {
      return Se.set(e), Ve.set(t), me.pointMultiply(e.length, v) === 1 ? Se.slice(0, v) : null;
    } finally {
      Se.fill(0), Ve.fill(0);
    }
  }
  function Cc(e, t) {
    _r(e), Fr(t);
    try {
      return Ie.set(e), Ve.set(t), me.privateAdd() === 1 ? Ie.slice(0, gt) : null;
    } finally {
      Ie.fill(0), Ve.fill(0);
    }
  }
  function jc(e, t) {
    if (_r(e), Fr(t), Di(t)) return new Uint8Array(e);
    try {
      return Ie.set(e), Ve.set(t), me.privateSub() === 1 ? Ie.slice(0, gt) : null;
    } finally {
      Ie.fill(0), Ve.fill(0);
    }
  }
  function qc(e) {
    _r(e);
    try {
      return Ie.set(e), me.privateNegate(), Ie.slice(0, gt);
    } finally {
      Ie.fill(0);
    }
  }
  function Mc(e, t) {
    zt(e), Fr(t);
    try {
      We.set(e), Ve.set(t);
      const g = me.xOnlyPointAddTweak();
      return g !== -1 ? {
        parity: g,
        xOnlyPubkey: We.slice(0, wr)
      } : null;
    } finally {
      We.fill(0), Ve.fill(0);
    }
  }
  function Fc(e, t, g, v) {
    zt(e), zt(g), Fr(t);
    const l = v !== void 0;
    l && ju(v);
    try {
      if (We.set(e), Jo.set(g), Ve.set(t), l) return me.xOnlyPointAddTweakCheck(v) === 1;
      {
        me.xOnlyPointAddTweak();
        const f = We.slice(0, wr);
        return Pu(f, g) === 0;
      }
    } finally {
      We.fill(0), Jo.fill(0), Ve.fill(0);
    }
  }
  function Dc(e, t, g) {
    Dr(e), _r(t), en(g);
    try {
      return Ge.set(e), Ie.set(t), g !== void 0 && jr.set(g), me.sign(g === void 0 ? 0 : 1), $e.slice(0, xt);
    } finally {
      Ge.fill(0), Ie.fill(0), g !== void 0 && jr.fill(0), $e.fill(0);
    }
  }
  function Kc(e, t, g) {
    Dr(e), _r(t), en(g);
    try {
      Ge.set(e), Ie.set(t), g !== void 0 && jr.set(g);
      const v = me.signRecoverable(g === void 0 ? 0 : 1);
      return {
        signature: $e.slice(0, xt),
        recoveryId: v
      };
    } finally {
      Ge.fill(0), Ie.fill(0), g !== void 0 && jr.fill(0), $e.fill(0);
    }
  }
  function Wc(e, t, g) {
    Dr(e), _r(t), en(g);
    try {
      return Ge.set(e), Ie.set(t), g !== void 0 && jr.set(g), me.signSchnorr(g === void 0 ? 0 : 1), $e.slice(0, xt);
    } finally {
      Ge.fill(0), Ie.fill(0), g !== void 0 && jr.fill(0), $e.fill(0);
    }
  }
  function Vc(e, t, g, v = false) {
    Dr(e), Nr(t), rn(g);
    try {
      return Ge.set(e), Se.set(t), $e.set(g), me.verify(t.length, v === true ? 1 : 0) === 1;
    } finally {
      Ge.fill(0), Se.fill(0), $e.fill(0);
    }
  }
  function Gc(e, t, g, v = false) {
    Dr(e), rn(t), Mu(t), g & 2 && Fu(t), qu(() => fs(t.subarray(0, 32)));
    const l = Kr(v);
    try {
      return Ge.set(e), $e.set(t), me.recover(l, g) === 1 ? Se.slice(0, l) : null;
    } finally {
      Ge.fill(0), $e.fill(0), Se.fill(0);
    }
  }
  function $c(e, t, g) {
    Dr(e), zt(t), rn(g);
    try {
      return Ge.set(e), We.set(t), $e.set(g), me.verifySchnorr() === 1;
    } finally {
      Ge.fill(0), We.fill(0), $e.fill(0);
    }
  }
  Tl = Object.freeze(Object.defineProperty({
    __proto__: null,
    __initializeContext: Ac,
    isPoint: Pc,
    isPointCompressed: Bc,
    isPrivate: Oc,
    isXOnlyPoint: fs,
    pointAdd: Rc,
    pointAddScalar: Uc,
    pointCompress: zc,
    pointFromScalar: Nc,
    pointMultiply: Lc,
    privateAdd: Cc,
    privateNegate: qc,
    privateSub: jc,
    recover: Gc,
    sign: Dc,
    signRecoverable: Kc,
    signSchnorr: Wc,
    verify: Vc,
    verifySchnorr: $c,
    xOnlyPointAddTweak: Mc,
    xOnlyPointAddTweakCheck: Fc,
    xOnlyPointFromPoint: xc,
    xOnlyPointFromScalar: Hc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var oi = {}, ct = {}, Ur = {}, Qo;
  function Xc() {
    if (Qo) return Ur;
    Qo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(Ur, "__esModule", {
      value: true
    }), Ur.hmacSHA512 = Ur.hash160 = void 0;
    const t = Da(), g = $a(), v = pt(), l = Fa();
    function f(r) {
      const n = (0, v.sha256)(Uint8Array.from(r));
      return e.from((0, g.ripemd160)(n));
    }
    Ur.hash160 = f;
    function i(r, n) {
      return e.from((0, t.hmac)(l.sha512, r, n));
    }
    return Ur.hmacSHA512 = i, Ur;
  }
  var lt = {}, Zo;
  function Yc() {
    if (Zo) return lt;
    Zo = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(lt, "__esModule", {
      value: true
    }), lt.testEcc = void 0;
    const t = (l) => e.from(l, "hex");
    function g(l) {
      if (v(l.isPoint(t("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), v(!l.isPoint(t("030000000000000000000000000000000000000000000000000000000000000005"))), v(l.isPrivate(t("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))), v(l.isPrivate(t("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), v(!l.isPrivate(t("0000000000000000000000000000000000000000000000000000000000000000"))), v(!l.isPrivate(t("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"))), v(!l.isPrivate(t("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364142"))), v(e.from(l.pointFromScalar(t("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals(t("02b07ba9dca9523b7ef4bd97703d43d20399eb698e194704791a25ce77a400df99"))), l.xOnlyPointAddTweak) {
        v(l.xOnlyPointAddTweak(t("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), t("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")) === null);
        let f = l.xOnlyPointAddTweak(t("1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b"), t("a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac"));
        v(e.from(f.xOnlyPubkey).equals(t("e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf")) && f.parity === 1), f = l.xOnlyPointAddTweak(t("2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991"), t("823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47"));
      }
      v(e.from(l.pointAddScalar(t("0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), t("0000000000000000000000000000000000000000000000000000000000000003"))).equals(t("02c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5"))), v(e.from(l.privateAdd(t("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"), t("0000000000000000000000000000000000000000000000000000000000000002"))).equals(t("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), l.privateNegate && (v(e.from(l.privateNegate(t("0000000000000000000000000000000000000000000000000000000000000001"))).equals(t("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))), v(e.from(l.privateNegate(t("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"))).equals(t("0000000000000000000000000000000000000000000000000000000000000003"))), v(e.from(l.privateNegate(t("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals(t("4eede1bf775995d70a494f0a7bb6bc11e0b8cccd41cce8009ab1132c8b0a3792")))), v(e.from(l.sign(t("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), t("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))).equals(t("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))), v(l.verify(t("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), t("0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), t("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))), l.signSchnorr && v(e.from(l.signSchnorr(t("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), t("c90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b14e5c9"), t("c87aa53824b4d7ae2eb035a2b5bbbccc080e76cdc6d1692c4b0b62d798e6d906"))).equals(t("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7"))), l.verifySchnorr && v(l.verifySchnorr(t("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), t("dd308afec5777e13121fa72b9cc1b7cc0139715309b086c960e18fd969774eb8"), t("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7")));
    }
    lt.testEcc = g;
    function v(l) {
      if (!l) throw new Error("ecc library invalid");
    }
    return lt;
  }
  var ai = {}, ea;
  function Jc() {
    return ea || (ea = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.bytes = e.stringToBytes = e.str = e.bytesToString = e.hex = e.utf8 = e.bech32m = e.bech32 = e.base58check = e.createBase58check = e.base58xmr = e.base58xrp = e.base58flickr = e.base58 = e.base64urlnopad = e.base64url = e.base64nopad = e.base64 = e.base32crockford = e.base32hexnopad = e.base32hex = e.base32nopad = e.base32 = e.base16 = e.utils = void 0;
      function t(D) {
        return D instanceof Uint8Array || ArrayBuffer.isView(D) && D.constructor.name === "Uint8Array";
      }
      function g(D, ...Y) {
        if (!t(D)) throw new Error("Uint8Array expected");
        if (Y.length > 0 && !Y.includes(D.length)) throw new Error("Uint8Array expected of length " + Y + ", got length=" + D.length);
      }
      function v(D, Y) {
        return Array.isArray(Y) ? Y.length === 0 ? true : D ? Y.every((L) => typeof L == "string") : Y.every((L) => Number.isSafeInteger(L)) : false;
      }
      function l(D) {
        if (typeof D != "function") throw new Error("function expected");
        return true;
      }
      function f(D, Y) {
        if (typeof Y != "string") throw new Error(`${D}: string expected`);
        return true;
      }
      function i(D) {
        if (!Number.isSafeInteger(D)) throw new Error(`invalid integer: ${D}`);
      }
      function r(D) {
        if (!Array.isArray(D)) throw new Error("array expected");
      }
      function n(D, Y) {
        if (!v(true, Y)) throw new Error(`${D}: array of strings expected`);
      }
      function u(D, Y) {
        if (!v(false, Y)) throw new Error(`${D}: array of numbers expected`);
      }
      function a(...D) {
        const Y = ($) => $, L = ($, oe) => (B) => $(oe(B)), M = D.map(($) => $.encode).reduceRight(L, Y), V = D.map(($) => $.decode).reduce(L, Y);
        return {
          encode: M,
          decode: V
        };
      }
      function d(D) {
        const Y = typeof D == "string" ? D.split("") : D, L = Y.length;
        n("alphabet", Y);
        const M = new Map(Y.map((V, $) => [
          V,
          $
        ]));
        return {
          encode: (V) => (r(V), V.map(($) => {
            if (!Number.isSafeInteger($) || $ < 0 || $ >= L) throw new Error(`alphabet.encode: digit index outside alphabet "${$}". Allowed: ${D}`);
            return Y[$];
          })),
          decode: (V) => (r(V), V.map(($) => {
            f("alphabet.decode", $);
            const oe = M.get($);
            if (oe === void 0) throw new Error(`Unknown letter: "${$}". Allowed: ${D}`);
            return oe;
          }))
        };
      }
      function s(D = "") {
        return f("join", D), {
          encode: (Y) => (n("join.decode", Y), Y.join(D)),
          decode: (Y) => (f("join.decode", Y), Y.split(D))
        };
      }
      function b(D, Y = "=") {
        return i(D), f("padding", Y), {
          encode(L) {
            for (n("padding.encode", L); L.length * D % 8; ) L.push(Y);
            return L;
          },
          decode(L) {
            n("padding.decode", L);
            let M = L.length;
            if (M * D % 8) throw new Error("padding: invalid, string should have whole number of bytes");
            for (; M > 0 && L[M - 1] === Y; M--) if ((M - 1) * D % 8 === 0) throw new Error("padding: invalid, string has too much padding");
            return L.slice(0, M);
          }
        };
      }
      function p(D) {
        return l(D), {
          encode: (Y) => Y,
          decode: (Y) => D(Y)
        };
      }
      function c(D, Y, L) {
        if (Y < 2) throw new Error(`convertRadix: invalid from=${Y}, base cannot be less than 2`);
        if (L < 2) throw new Error(`convertRadix: invalid to=${L}, base cannot be less than 2`);
        if (r(D), !D.length) return [];
        let M = 0;
        const V = [], $ = Array.from(D, (B) => {
          if (i(B), B < 0 || B >= Y) throw new Error(`invalid integer: ${B}`);
          return B;
        }), oe = $.length;
        for (; ; ) {
          let B = 0, z = true;
          for (let J = M; J < oe; J++) {
            const te = $[J], le = Y * B, ce = le + te;
            if (!Number.isSafeInteger(ce) || le / Y !== B || ce - te !== le) throw new Error("convertRadix: carry overflow");
            const fe = ce / L;
            B = ce % L;
            const ge = Math.floor(fe);
            if ($[J] = ge, !Number.isSafeInteger(ge) || ge * L + B !== ce) throw new Error("convertRadix: carry overflow");
            if (z) ge ? z = false : M = J;
            else continue;
          }
          if (V.push(B), z) break;
        }
        for (let B = 0; B < D.length - 1 && D[B] === 0; B++) V.push(0);
        return V.reverse();
      }
      const y = (D, Y) => Y === 0 ? D : y(Y, D % Y), w = (D, Y) => D + (Y - y(D, Y)), E = (() => {
        let D = [];
        for (let Y = 0; Y < 40; Y++) D.push(2 ** Y);
        return D;
      })();
      function k(D, Y, L, M) {
        if (r(D), Y <= 0 || Y > 32) throw new Error(`convertRadix2: wrong from=${Y}`);
        if (L <= 0 || L > 32) throw new Error(`convertRadix2: wrong to=${L}`);
        if (w(Y, L) > 32) throw new Error(`convertRadix2: carry overflow from=${Y} to=${L} carryBits=${w(Y, L)}`);
        let V = 0, $ = 0;
        const oe = E[Y], B = E[L] - 1, z = [];
        for (const J of D) {
          if (i(J), J >= oe) throw new Error(`convertRadix2: invalid data word=${J} from=${Y}`);
          if (V = V << Y | J, $ + Y > 32) throw new Error(`convertRadix2: carry overflow pos=${$} from=${Y}`);
          for ($ += Y; $ >= L; $ -= L) z.push((V >> $ - L & B) >>> 0);
          const te = E[$];
          if (te === void 0) throw new Error("invalid carry");
          V &= te - 1;
        }
        if (V = V << L - $ & B, !M && $ >= Y) throw new Error("Excess padding");
        if (!M && V > 0) throw new Error(`Non-zero padding: ${V}`);
        return M && $ > 0 && z.push(V >>> 0), z;
      }
      function S(D) {
        i(D);
        const Y = 2 ** 8;
        return {
          encode: (L) => {
            if (!t(L)) throw new Error("radix.encode input should be Uint8Array");
            return c(Array.from(L), Y, D);
          },
          decode: (L) => (u("radix.decode", L), Uint8Array.from(c(L, D, Y)))
        };
      }
      function I(D, Y = false) {
        if (i(D), D <= 0 || D > 32) throw new Error("radix2: bits should be in (0..32]");
        if (w(8, D) > 32 || w(D, 8) > 32) throw new Error("radix2: carry overflow");
        return {
          encode: (L) => {
            if (!t(L)) throw new Error("radix2.encode input should be Uint8Array");
            return k(Array.from(L), 8, D, !Y);
          },
          decode: (L) => (u("radix2.decode", L), Uint8Array.from(k(L, D, 8, Y)))
        };
      }
      function U(D) {
        return l(D), function(...Y) {
          try {
            return D.apply(null, Y);
          } catch {
          }
        };
      }
      function R(D, Y) {
        return i(D), l(Y), {
          encode(L) {
            if (!t(L)) throw new Error("checksum.encode: input should be Uint8Array");
            const M = Y(L).slice(0, D), V = new Uint8Array(L.length + D);
            return V.set(L), V.set(M, L.length), V;
          },
          decode(L) {
            if (!t(L)) throw new Error("checksum.decode: input should be Uint8Array");
            const M = L.slice(0, -D), V = L.slice(-D), $ = Y(M).slice(0, D);
            for (let oe = 0; oe < D; oe++) if ($[oe] !== V[oe]) throw new Error("Invalid checksum");
            return M;
          }
        };
      }
      e.utils = {
        alphabet: d,
        chain: a,
        checksum: R,
        convertRadix: c,
        convertRadix2: k,
        radix: S,
        radix2: I,
        join: s,
        padding: b
      }, e.base16 = a(I(4), d("0123456789ABCDEF"), s("")), e.base32 = a(I(5), d("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), b(5), s("")), e.base32nopad = a(I(5), d("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), s("")), e.base32hex = a(I(5), d("0123456789ABCDEFGHIJKLMNOPQRSTUV"), b(5), s("")), e.base32hexnopad = a(I(5), d("0123456789ABCDEFGHIJKLMNOPQRSTUV"), s("")), e.base32crockford = a(I(5), d("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), s(""), p((D) => D.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
      const q = typeof Uint8Array.from([]).toBase64 == "function" && typeof Uint8Array.fromBase64 == "function", x = (D, Y) => {
        f("base64", D);
        const L = Y ? /^[A-Za-z0-9=_-]+$/ : /^[A-Za-z0-9=+/]+$/, M = Y ? "base64url" : "base64";
        if (D.length > 0 && !L.test(D)) throw new Error("invalid base64");
        return Uint8Array.fromBase64(D, {
          alphabet: M,
          lastChunkHandling: "strict"
        });
      };
      e.base64 = q ? {
        encode(D) {
          return g(D), D.toBase64();
        },
        decode(D) {
          return x(D, false);
        }
      } : a(I(6), d("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), b(6), s("")), e.base64nopad = a(I(6), d("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), s("")), e.base64url = q ? {
        encode(D) {
          return g(D), D.toBase64({
            alphabet: "base64url"
          });
        },
        decode(D) {
          return x(D, true);
        }
      } : a(I(6), d("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), b(6), s("")), e.base64urlnopad = a(I(6), d("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), s(""));
      const P = (D) => a(S(58), d(D), s(""));
      e.base58 = P("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), e.base58flickr = P("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"), e.base58xrp = P("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
      const H = [
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
        encode(D) {
          let Y = "";
          for (let L = 0; L < D.length; L += 8) {
            const M = D.subarray(L, L + 8);
            Y += e.base58.encode(M).padStart(H[M.length], "1");
          }
          return Y;
        },
        decode(D) {
          let Y = [];
          for (let L = 0; L < D.length; L += 11) {
            const M = D.slice(L, L + 11), V = H.indexOf(M.length), $ = e.base58.decode(M);
            for (let oe = 0; oe < $.length - V; oe++) if ($[oe] !== 0) throw new Error("base58xmr: wrong padding");
            Y = Y.concat(Array.from($.slice($.length - V)));
          }
          return Uint8Array.from(Y);
        }
      };
      const j = (D) => a(R(4, (Y) => D(D(Y))), e.base58);
      e.createBase58check = j, e.base58check = e.createBase58check;
      const C = a(d("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), s("")), W = [
        996825010,
        642813549,
        513874426,
        1027748829,
        705979059
      ];
      function X(D) {
        const Y = D >> 25;
        let L = (D & 33554431) << 5;
        for (let M = 0; M < W.length; M++) (Y >> M & 1) === 1 && (L ^= W[M]);
        return L;
      }
      function ee(D, Y, L = 1) {
        const M = D.length;
        let V = 1;
        for (let $ = 0; $ < M; $++) {
          const oe = D.charCodeAt($);
          if (oe < 33 || oe > 126) throw new Error(`Invalid prefix (${D})`);
          V = X(V) ^ oe >> 5;
        }
        V = X(V);
        for (let $ = 0; $ < M; $++) V = X(V) ^ D.charCodeAt($) & 31;
        for (let $ of Y) V = X(V) ^ $;
        for (let $ = 0; $ < 6; $++) V = X(V);
        return V ^= L, C.encode(k([
          V % E[30]
        ], 30, 5, false));
      }
      function re(D) {
        const Y = D === "bech32" ? 1 : 734539939, L = I(5), M = L.decode, V = L.encode, $ = U(M);
        function oe(le, ce, fe = 90) {
          f("bech32.encode prefix", le), t(ce) && (ce = Array.from(ce)), u("bech32.encode", ce);
          const ge = le.length;
          if (ge === 0) throw new TypeError(`Invalid prefix length ${ge}`);
          const Ae = ge + 7 + ce.length;
          if (fe !== false && Ae > fe) throw new TypeError(`Length ${Ae} exceeds limit ${fe}`);
          const Ue = le.toLowerCase(), be = ee(Ue, ce, Y);
          return `${Ue}1${C.encode(ce)}${be}`;
        }
        function B(le, ce = 90) {
          f("bech32.decode input", le);
          const fe = le.length;
          if (fe < 8 || ce !== false && fe > ce) throw new TypeError(`invalid string length: ${fe} (${le}). Expected (8..${ce})`);
          const ge = le.toLowerCase();
          if (le !== ge && le !== le.toUpperCase()) throw new Error("String must be lowercase or uppercase");
          const Ae = ge.lastIndexOf("1");
          if (Ae === 0 || Ae === -1) throw new Error('Letter "1" must be present between prefix and data only');
          const Ue = ge.slice(0, Ae), be = ge.slice(Ae + 1);
          if (be.length < 6) throw new Error("Data must be at least 6 characters long");
          const ve = C.decode(be).slice(0, -6), ze = ee(Ue, ve, Y);
          if (!be.endsWith(ze)) throw new Error(`Invalid checksum in ${le}: expected "${ze}"`);
          return {
            prefix: Ue,
            words: ve
          };
        }
        const z = U(B);
        function J(le) {
          const { prefix: ce, words: fe } = B(le, false);
          return {
            prefix: ce,
            words: fe,
            bytes: M(fe)
          };
        }
        function te(le, ce) {
          return oe(le, V(ce));
        }
        return {
          encode: oe,
          decode: B,
          encodeFromBytes: te,
          decodeToBytes: J,
          decodeUnsafe: z,
          fromWords: M,
          fromWordsUnsafe: $,
          toWords: V
        };
      }
      e.bech32 = re("bech32"), e.bech32m = re("bech32m"), e.utf8 = {
        encode: (D) => new TextDecoder().decode(D),
        decode: (D) => new TextEncoder().encode(D)
      };
      const ue = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", O = {
        encode(D) {
          return g(D), D.toHex();
        },
        decode(D) {
          return f("hex", D), Uint8Array.fromHex(D);
        }
      };
      e.hex = ue ? O : a(I(4), d("0123456789abcdef"), s(""), p((D) => {
        if (typeof D != "string" || D.length % 2 !== 0) throw new TypeError(`hex.decode: expected string, got ${typeof D} with length ${D.length}`);
        return D.toLowerCase();
      }));
      const F = {
        utf8: e.utf8,
        hex: e.hex,
        base16: e.base16,
        base32: e.base32,
        base64: e.base64,
        base64url: e.base64url,
        base58: e.base58,
        base58xmr: e.base58xmr
      }, K = "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr", Z = (D, Y) => {
        if (typeof D != "string" || !F.hasOwnProperty(D)) throw new TypeError(K);
        if (!t(Y)) throw new TypeError("bytesToString() expects Uint8Array");
        return F[D].encode(Y);
      };
      e.bytesToString = Z, e.str = e.bytesToString;
      const ae = (D, Y) => {
        if (!F.hasOwnProperty(D)) throw new TypeError(K);
        if (typeof Y != "string") throw new TypeError("stringToBytes() expects string");
        return F[D].decode(Y);
      };
      e.stringToBytes = ae, e.bytes = e.stringToBytes;
    }(ai)), ai;
  }
  var Ot = {
    exports: {}
  }, ra;
  function Re() {
    return ra || (ra = 1, typeof Object.create == "function" ? Ot.exports = function(t, g) {
      g && (t.super_ = g, t.prototype = Object.create(g.prototype, {
        constructor: {
          value: t,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }));
    } : Ot.exports = function(t, g) {
      if (g) {
        t.super_ = g;
        var v = function() {
        };
        v.prototype = g.prototype, t.prototype = new v(), t.prototype.constructor = t;
      }
    }), Ot.exports;
  }
  const Qc = {}, Zc = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Qc
  }, Symbol.toStringTag, {
    value: "Module"
  })), dt = Es(Zc);
  var si, ta;
  function hs() {
    return ta || (ta = 1, si = dt.EventEmitter), si;
  }
  var ui, ia;
  function el() {
    if (ia) return ui;
    ia = 1;
    function e(p, c) {
      var y = Object.keys(p);
      if (Object.getOwnPropertySymbols) {
        var w = Object.getOwnPropertySymbols(p);
        c && (w = w.filter(function(E) {
          return Object.getOwnPropertyDescriptor(p, E).enumerable;
        })), y.push.apply(y, w);
      }
      return y;
    }
    function t(p) {
      for (var c = 1; c < arguments.length; c++) {
        var y = arguments[c] != null ? arguments[c] : {};
        c % 2 ? e(Object(y), true).forEach(function(w) {
          g(p, w, y[w]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(y)) : e(Object(y)).forEach(function(w) {
          Object.defineProperty(p, w, Object.getOwnPropertyDescriptor(y, w));
        });
      }
      return p;
    }
    function g(p, c, y) {
      return c = i(c), c in p ? Object.defineProperty(p, c, {
        value: y,
        enumerable: true,
        configurable: true,
        writable: true
      }) : p[c] = y, p;
    }
    function v(p, c) {
      if (!(p instanceof c)) throw new TypeError("Cannot call a class as a function");
    }
    function l(p, c) {
      for (var y = 0; y < c.length; y++) {
        var w = c[y];
        w.enumerable = w.enumerable || false, w.configurable = true, "value" in w && (w.writable = true), Object.defineProperty(p, i(w.key), w);
      }
    }
    function f(p, c, y) {
      return c && l(p.prototype, c), Object.defineProperty(p, "prototype", {
        writable: false
      }), p;
    }
    function i(p) {
      var c = r(p, "string");
      return typeof c == "symbol" ? c : String(c);
    }
    function r(p, c) {
      if (typeof p != "object" || p === null) return p;
      var y = p[Symbol.toPrimitive];
      if (y !== void 0) {
        var w = y.call(p, c);
        if (typeof w != "object") return w;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(p);
    }
    var n = ir(), u = n.Buffer, a = dt, d = a.inspect, s = d && d.custom || "inspect";
    function b(p, c, y) {
      u.prototype.copy.call(p, c, y);
    }
    return ui = function() {
      function p() {
        v(this, p), this.head = null, this.tail = null, this.length = 0;
      }
      return f(p, [
        {
          key: "push",
          value: function(y) {
            var w = {
              data: y,
              next: null
            };
            this.length > 0 ? this.tail.next = w : this.head = w, this.tail = w, ++this.length;
          }
        },
        {
          key: "unshift",
          value: function(y) {
            var w = {
              data: y,
              next: this.head
            };
            this.length === 0 && (this.tail = w), this.head = w, ++this.length;
          }
        },
        {
          key: "shift",
          value: function() {
            if (this.length !== 0) {
              var y = this.head.data;
              return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, y;
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
          value: function(y) {
            if (this.length === 0) return "";
            for (var w = this.head, E = "" + w.data; w = w.next; ) E += y + w.data;
            return E;
          }
        },
        {
          key: "concat",
          value: function(y) {
            if (this.length === 0) return u.alloc(0);
            for (var w = u.allocUnsafe(y >>> 0), E = this.head, k = 0; E; ) b(E.data, w, k), k += E.data.length, E = E.next;
            return w;
          }
        },
        {
          key: "consume",
          value: function(y, w) {
            var E;
            return y < this.head.data.length ? (E = this.head.data.slice(0, y), this.head.data = this.head.data.slice(y)) : y === this.head.data.length ? E = this.shift() : E = w ? this._getString(y) : this._getBuffer(y), E;
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
          value: function(y) {
            var w = this.head, E = 1, k = w.data;
            for (y -= k.length; w = w.next; ) {
              var S = w.data, I = y > S.length ? S.length : y;
              if (I === S.length ? k += S : k += S.slice(0, y), y -= I, y === 0) {
                I === S.length ? (++E, w.next ? this.head = w.next : this.head = this.tail = null) : (this.head = w, w.data = S.slice(I));
                break;
              }
              ++E;
            }
            return this.length -= E, k;
          }
        },
        {
          key: "_getBuffer",
          value: function(y) {
            var w = u.allocUnsafe(y), E = this.head, k = 1;
            for (E.data.copy(w), y -= E.data.length; E = E.next; ) {
              var S = E.data, I = y > S.length ? S.length : y;
              if (S.copy(w, w.length - y, 0, I), y -= I, y === 0) {
                I === S.length ? (++k, E.next ? this.head = E.next : this.head = this.tail = null) : (this.head = E, E.data = S.slice(I));
                break;
              }
              ++k;
            }
            return this.length -= k, w;
          }
        },
        {
          key: s,
          value: function(y, w) {
            return d(this, t(t({}, w), {}, {
              depth: 0,
              customInspect: false
            }));
          }
        }
      ]), p;
    }(), ui;
  }
  var ci, na;
  function ds() {
    if (na) return ci;
    na = 1;
    function e(i, r) {
      var n = this, u = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
      return u || a ? (r ? r(i) : i && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, process.nextTick(l, this, i)) : process.nextTick(l, this, i)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(i || null, function(d) {
        !r && d ? n._writableState ? n._writableState.errorEmitted ? process.nextTick(g, n) : (n._writableState.errorEmitted = true, process.nextTick(t, n, d)) : process.nextTick(t, n, d) : r ? (process.nextTick(g, n), r(d)) : process.nextTick(g, n);
      }), this);
    }
    function t(i, r) {
      l(i, r), g(i);
    }
    function g(i) {
      i._writableState && !i._writableState.emitClose || i._readableState && !i._readableState.emitClose || i.emit("close");
    }
    function v() {
      this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
    }
    function l(i, r) {
      i.emit("error", r);
    }
    function f(i, r) {
      var n = i._readableState, u = i._writableState;
      n && n.autoDestroy || u && u.autoDestroy ? i.destroy(r) : i.emit("error", r);
    }
    return ci = {
      destroy: e,
      undestroy: v,
      errorOrDestroy: f
    }, ci;
  }
  var li = {}, oa;
  function Wr() {
    if (oa) return li;
    oa = 1;
    function e(r, n) {
      r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
    }
    var t = {};
    function g(r, n, u) {
      u || (u = Error);
      function a(s, b, p) {
        return typeof n == "string" ? n : n(s, b, p);
      }
      var d = function(s) {
        e(b, s);
        function b(p, c, y) {
          return s.call(this, a(p, c, y)) || this;
        }
        return b;
      }(u);
      d.prototype.name = u.name, d.prototype.code = r, t[r] = d;
    }
    function v(r, n) {
      if (Array.isArray(r)) {
        var u = r.length;
        return r = r.map(function(a) {
          return String(a);
        }), u > 2 ? "one of ".concat(n, " ").concat(r.slice(0, u - 1).join(", "), ", or ") + r[u - 1] : u === 2 ? "one of ".concat(n, " ").concat(r[0], " or ").concat(r[1]) : "of ".concat(n, " ").concat(r[0]);
      } else return "of ".concat(n, " ").concat(String(r));
    }
    function l(r, n, u) {
      return r.substr(0, n.length) === n;
    }
    function f(r, n, u) {
      return (u === void 0 || u > r.length) && (u = r.length), r.substring(u - n.length, u) === n;
    }
    function i(r, n, u) {
      return typeof u != "number" && (u = 0), u + n.length > r.length ? false : r.indexOf(n, u) !== -1;
    }
    return g("ERR_INVALID_OPT_VALUE", function(r, n) {
      return 'The value "' + n + '" is invalid for option "' + r + '"';
    }, TypeError), g("ERR_INVALID_ARG_TYPE", function(r, n, u) {
      var a;
      typeof n == "string" && l(n, "not ") ? (a = "must not be", n = n.replace(/^not /, "")) : a = "must be";
      var d;
      if (f(r, " argument")) d = "The ".concat(r, " ").concat(a, " ").concat(v(n, "type"));
      else {
        var s = i(r, ".") ? "property" : "argument";
        d = 'The "'.concat(r, '" ').concat(s, " ").concat(a, " ").concat(v(n, "type"));
      }
      return d += ". Received type ".concat(typeof u), d;
    }, TypeError), g("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), g("ERR_METHOD_NOT_IMPLEMENTED", function(r) {
      return "The " + r + " method is not implemented";
    }), g("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), g("ERR_STREAM_DESTROYED", function(r) {
      return "Cannot call " + r + " after a stream was destroyed";
    }), g("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), g("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), g("ERR_STREAM_WRITE_AFTER_END", "write after end"), g("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), g("ERR_UNKNOWN_ENCODING", function(r) {
      return "Unknown encoding: " + r;
    }, TypeError), g("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), li.codes = t, li;
  }
  var fi, aa;
  function ps() {
    if (aa) return fi;
    aa = 1;
    var e = Wr().codes.ERR_INVALID_OPT_VALUE;
    function t(v, l, f) {
      return v.highWaterMark != null ? v.highWaterMark : l ? v[f] : null;
    }
    function g(v, l, f, i) {
      var r = t(l, i, f);
      if (r != null) {
        if (!(isFinite(r) && Math.floor(r) === r) || r < 0) {
          var n = i ? f : "highWaterMark";
          throw new e(n, r);
        }
        return Math.floor(r);
      }
      return v.objectMode ? 16 : 16 * 1024;
    }
    return fi = {
      getHighWaterMark: g
    }, fi;
  }
  var hi, sa;
  function rl() {
    if (sa) return hi;
    sa = 1, hi = e;
    function e(g, v) {
      if (t("noDeprecation")) return g;
      var l = false;
      function f() {
        if (!l) {
          if (t("throwDeprecation")) throw new Error(v);
          t("traceDeprecation") ? console.trace(v) : console.warn(v), l = true;
        }
        return g.apply(this, arguments);
      }
      return f;
    }
    function t(g) {
      try {
        if (!globalThis.localStorage) return false;
      } catch {
        return false;
      }
      var v = globalThis.localStorage[g];
      return v == null ? false : String(v).toLowerCase() === "true";
    }
    return hi;
  }
  var di, ua;
  function ms() {
    if (ua) return di;
    ua = 1, di = q;
    function e(L) {
      var M = this;
      this.next = null, this.entry = null, this.finish = function() {
        Y(M, L);
      };
    }
    var t;
    q.WritableState = U;
    var g = {
      deprecate: rl()
    }, v = hs(), l = ir().Buffer, f = (typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
    };
    function i(L) {
      return l.from(L);
    }
    function r(L) {
      return l.isBuffer(L) || L instanceof f;
    }
    var n = ds(), u = ps(), a = u.getHighWaterMark, d = Wr().codes, s = d.ERR_INVALID_ARG_TYPE, b = d.ERR_METHOD_NOT_IMPLEMENTED, p = d.ERR_MULTIPLE_CALLBACK, c = d.ERR_STREAM_CANNOT_PIPE, y = d.ERR_STREAM_DESTROYED, w = d.ERR_STREAM_NULL_VALUES, E = d.ERR_STREAM_WRITE_AFTER_END, k = d.ERR_UNKNOWN_ENCODING, S = n.errorOrDestroy;
    Re()(q, v);
    function I() {
    }
    function U(L, M, V) {
      t = t || qr(), L = L || {}, typeof V != "boolean" && (V = M instanceof t), this.objectMode = !!L.objectMode, V && (this.objectMode = this.objectMode || !!L.writableObjectMode), this.highWaterMark = a(this, L, "writableHighWaterMark", V), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      var $ = L.decodeStrings === false;
      this.decodeStrings = !$, this.defaultEncoding = L.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(oe) {
        ee(M, oe);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = L.emitClose !== false, this.autoDestroy = !!L.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
    }
    U.prototype.getBuffer = function() {
      for (var M = this.bufferedRequest, V = []; M; ) V.push(M), M = M.next;
      return V;
    }, function() {
      try {
        Object.defineProperty(U.prototype, "buffer", {
          get: g.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch {
      }
    }();
    var R;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (R = Function.prototype[Symbol.hasInstance], Object.defineProperty(q, Symbol.hasInstance, {
      value: function(M) {
        return R.call(this, M) ? true : this !== q ? false : M && M._writableState instanceof U;
      }
    })) : R = function(M) {
      return M instanceof this;
    };
    function q(L) {
      t = t || qr();
      var M = this instanceof t;
      if (!M && !R.call(q, this)) return new q(L);
      this._writableState = new U(L, this, M), this.writable = true, L && (typeof L.write == "function" && (this._write = L.write), typeof L.writev == "function" && (this._writev = L.writev), typeof L.destroy == "function" && (this._destroy = L.destroy), typeof L.final == "function" && (this._final = L.final)), v.call(this);
    }
    q.prototype.pipe = function() {
      S(this, new c());
    };
    function x(L, M) {
      var V = new E();
      S(L, V), process.nextTick(M, V);
    }
    function P(L, M, V, $) {
      var oe;
      return V === null ? oe = new w() : typeof V != "string" && !M.objectMode && (oe = new s("chunk", [
        "string",
        "Buffer"
      ], V)), oe ? (S(L, oe), process.nextTick($, oe), false) : true;
    }
    q.prototype.write = function(L, M, V) {
      var $ = this._writableState, oe = false, B = !$.objectMode && r(L);
      return B && !l.isBuffer(L) && (L = i(L)), typeof M == "function" && (V = M, M = null), B ? M = "buffer" : M || (M = $.defaultEncoding), typeof V != "function" && (V = I), $.ending ? x(this, V) : (B || P(this, $, L, V)) && ($.pendingcb++, oe = j(this, $, B, L, M, V)), oe;
    }, q.prototype.cork = function() {
      this._writableState.corked++;
    }, q.prototype.uncork = function() {
      var L = this._writableState;
      L.corked && (L.corked--, !L.writing && !L.corked && !L.bufferProcessing && L.bufferedRequest && O(this, L));
    }, q.prototype.setDefaultEncoding = function(M) {
      if (typeof M == "string" && (M = M.toLowerCase()), !([
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
      ].indexOf((M + "").toLowerCase()) > -1)) throw new k(M);
      return this._writableState.defaultEncoding = M, this;
    }, Object.defineProperty(q.prototype, "writableBuffer", {
      enumerable: false,
      get: function() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function H(L, M, V) {
      return !L.objectMode && L.decodeStrings !== false && typeof M == "string" && (M = l.from(M, V)), M;
    }
    Object.defineProperty(q.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function j(L, M, V, $, oe, B) {
      if (!V) {
        var z = H(M, $, oe);
        $ !== z && (V = true, oe = "buffer", $ = z);
      }
      var J = M.objectMode ? 1 : $.length;
      M.length += J;
      var te = M.length < M.highWaterMark;
      if (te || (M.needDrain = true), M.writing || M.corked) {
        var le = M.lastBufferedRequest;
        M.lastBufferedRequest = {
          chunk: $,
          encoding: oe,
          isBuf: V,
          callback: B,
          next: null
        }, le ? le.next = M.lastBufferedRequest : M.bufferedRequest = M.lastBufferedRequest, M.bufferedRequestCount += 1;
      } else C(L, M, false, J, $, oe, B);
      return te;
    }
    function C(L, M, V, $, oe, B, z) {
      M.writelen = $, M.writecb = z, M.writing = true, M.sync = true, M.destroyed ? M.onwrite(new y("write")) : V ? L._writev(oe, M.onwrite) : L._write(oe, B, M.onwrite), M.sync = false;
    }
    function W(L, M, V, $, oe) {
      --M.pendingcb, V ? (process.nextTick(oe, $), process.nextTick(ae, L, M), L._writableState.errorEmitted = true, S(L, $)) : (oe($), L._writableState.errorEmitted = true, S(L, $), ae(L, M));
    }
    function X(L) {
      L.writing = false, L.writecb = null, L.length -= L.writelen, L.writelen = 0;
    }
    function ee(L, M) {
      var V = L._writableState, $ = V.sync, oe = V.writecb;
      if (typeof oe != "function") throw new p();
      if (X(V), M) W(L, V, $, M, oe);
      else {
        var B = F(V) || L.destroyed;
        !B && !V.corked && !V.bufferProcessing && V.bufferedRequest && O(L, V), $ ? process.nextTick(re, L, V, B, oe) : re(L, V, B, oe);
      }
    }
    function re(L, M, V, $) {
      V || ue(L, M), M.pendingcb--, $(), ae(L, M);
    }
    function ue(L, M) {
      M.length === 0 && M.needDrain && (M.needDrain = false, L.emit("drain"));
    }
    function O(L, M) {
      M.bufferProcessing = true;
      var V = M.bufferedRequest;
      if (L._writev && V && V.next) {
        var $ = M.bufferedRequestCount, oe = new Array($), B = M.corkedRequestsFree;
        B.entry = V;
        for (var z = 0, J = true; V; ) oe[z] = V, V.isBuf || (J = false), V = V.next, z += 1;
        oe.allBuffers = J, C(L, M, true, M.length, oe, "", B.finish), M.pendingcb++, M.lastBufferedRequest = null, B.next ? (M.corkedRequestsFree = B.next, B.next = null) : M.corkedRequestsFree = new e(M), M.bufferedRequestCount = 0;
      } else {
        for (; V; ) {
          var te = V.chunk, le = V.encoding, ce = V.callback, fe = M.objectMode ? 1 : te.length;
          if (C(L, M, false, fe, te, le, ce), V = V.next, M.bufferedRequestCount--, M.writing) break;
        }
        V === null && (M.lastBufferedRequest = null);
      }
      M.bufferedRequest = V, M.bufferProcessing = false;
    }
    q.prototype._write = function(L, M, V) {
      V(new b("_write()"));
    }, q.prototype._writev = null, q.prototype.end = function(L, M, V) {
      var $ = this._writableState;
      return typeof L == "function" ? (V = L, L = null, M = null) : typeof M == "function" && (V = M, M = null), L != null && this.write(L, M), $.corked && ($.corked = 1, this.uncork()), $.ending || D(this, $, V), this;
    }, Object.defineProperty(q.prototype, "writableLength", {
      enumerable: false,
      get: function() {
        return this._writableState.length;
      }
    });
    function F(L) {
      return L.ending && L.length === 0 && L.bufferedRequest === null && !L.finished && !L.writing;
    }
    function K(L, M) {
      L._final(function(V) {
        M.pendingcb--, V && S(L, V), M.prefinished = true, L.emit("prefinish"), ae(L, M);
      });
    }
    function Z(L, M) {
      !M.prefinished && !M.finalCalled && (typeof L._final == "function" && !M.destroyed ? (M.pendingcb++, M.finalCalled = true, process.nextTick(K, L, M)) : (M.prefinished = true, L.emit("prefinish")));
    }
    function ae(L, M) {
      var V = F(M);
      if (V && (Z(L, M), M.pendingcb === 0 && (M.finished = true, L.emit("finish"), M.autoDestroy))) {
        var $ = L._readableState;
        (!$ || $.autoDestroy && $.endEmitted) && L.destroy();
      }
      return V;
    }
    function D(L, M, V) {
      M.ending = true, ae(L, M), V && (M.finished ? process.nextTick(V) : L.once("finish", V)), M.ended = true, L.writable = false;
    }
    function Y(L, M, V) {
      var $ = L.entry;
      for (L.entry = null; $; ) {
        var oe = $.callback;
        M.pendingcb--, oe(V), $ = $.next;
      }
      M.corkedRequestsFree.next = L;
    }
    return Object.defineProperty(q.prototype, "destroyed", {
      enumerable: false,
      get: function() {
        return this._writableState === void 0 ? false : this._writableState.destroyed;
      },
      set: function(M) {
        this._writableState && (this._writableState.destroyed = M);
      }
    }), q.prototype.destroy = n.destroy, q.prototype._undestroy = n.undestroy, q.prototype._destroy = function(L, M) {
      M(L);
    }, di;
  }
  var pi, ca;
  function qr() {
    if (ca) return pi;
    ca = 1;
    var e = Object.keys || function(u) {
      var a = [];
      for (var d in u) a.push(d);
      return a;
    };
    pi = i;
    var t = bs(), g = ms();
    Re()(i, t);
    for (var v = e(g.prototype), l = 0; l < v.length; l++) {
      var f = v[l];
      i.prototype[f] || (i.prototype[f] = g.prototype[f]);
    }
    function i(u) {
      if (!(this instanceof i)) return new i(u);
      t.call(this, u), g.call(this, u), this.allowHalfOpen = true, u && (u.readable === false && (this.readable = false), u.writable === false && (this.writable = false), u.allowHalfOpen === false && (this.allowHalfOpen = false, this.once("end", r)));
    }
    Object.defineProperty(i.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    }), Object.defineProperty(i.prototype, "writableBuffer", {
      enumerable: false,
      get: function() {
        return this._writableState && this._writableState.getBuffer();
      }
    }), Object.defineProperty(i.prototype, "writableLength", {
      enumerable: false,
      get: function() {
        return this._writableState.length;
      }
    });
    function r() {
      this._writableState.ended || process.nextTick(n, this);
    }
    function n(u) {
      u.end();
    }
    return Object.defineProperty(i.prototype, "destroyed", {
      enumerable: false,
      get: function() {
        return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(a) {
        this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = a, this._writableState.destroyed = a);
      }
    }), pi;
  }
  var mi = {}, Rt = {
    exports: {}
  }, la;
  function tl() {
    return la || (la = 1, function(e, t) {
      var g = ir(), v = g.Buffer;
      function l(i, r) {
        for (var n in i) r[n] = i[n];
      }
      v.from && v.alloc && v.allocUnsafe && v.allocUnsafeSlow ? e.exports = g : (l(g, t), t.Buffer = f);
      function f(i, r, n) {
        return v(i, r, n);
      }
      l(v, f), f.from = function(i, r, n) {
        if (typeof i == "number") throw new TypeError("Argument must not be a number");
        return v(i, r, n);
      }, f.alloc = function(i, r, n) {
        if (typeof i != "number") throw new TypeError("Argument must be a number");
        var u = v(i);
        return r !== void 0 ? typeof n == "string" ? u.fill(r, n) : u.fill(r) : u.fill(0), u;
      }, f.allocUnsafe = function(i) {
        if (typeof i != "number") throw new TypeError("Argument must be a number");
        return v(i);
      }, f.allocUnsafeSlow = function(i) {
        if (typeof i != "number") throw new TypeError("Argument must be a number");
        return g.SlowBuffer(i);
      };
    }(Rt, Rt.exports)), Rt.exports;
  }
  var fa;
  function Ki() {
    if (fa) return mi;
    fa = 1;
    var e = tl().Buffer, t = e.isEncoding || function(w) {
      switch (w = "" + w, w && w.toLowerCase()) {
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
    function g(w) {
      if (!w) return "utf8";
      for (var E; ; ) switch (w) {
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
          return w;
        default:
          if (E) return;
          w = ("" + w).toLowerCase(), E = true;
      }
    }
    function v(w) {
      var E = g(w);
      if (typeof E != "string" && (e.isEncoding === t || !t(w))) throw new Error("Unknown encoding: " + w);
      return E || w;
    }
    mi.StringDecoder = l;
    function l(w) {
      this.encoding = v(w);
      var E;
      switch (this.encoding) {
        case "utf16le":
          this.text = d, this.end = s, E = 4;
          break;
        case "utf8":
          this.fillLast = n, E = 4;
          break;
        case "base64":
          this.text = b, this.end = p, E = 3;
          break;
        default:
          this.write = c, this.end = y;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(E);
    }
    l.prototype.write = function(w) {
      if (w.length === 0) return "";
      var E, k;
      if (this.lastNeed) {
        if (E = this.fillLast(w), E === void 0) return "";
        k = this.lastNeed, this.lastNeed = 0;
      } else k = 0;
      return k < w.length ? E ? E + this.text(w, k) : this.text(w, k) : E || "";
    }, l.prototype.end = a, l.prototype.text = u, l.prototype.fillLast = function(w) {
      if (this.lastNeed <= w.length) return w.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      w.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, w.length), this.lastNeed -= w.length;
    };
    function f(w) {
      return w <= 127 ? 0 : w >> 5 === 6 ? 2 : w >> 4 === 14 ? 3 : w >> 3 === 30 ? 4 : w >> 6 === 2 ? -1 : -2;
    }
    function i(w, E, k) {
      var S = E.length - 1;
      if (S < k) return 0;
      var I = f(E[S]);
      return I >= 0 ? (I > 0 && (w.lastNeed = I - 1), I) : --S < k || I === -2 ? 0 : (I = f(E[S]), I >= 0 ? (I > 0 && (w.lastNeed = I - 2), I) : --S < k || I === -2 ? 0 : (I = f(E[S]), I >= 0 ? (I > 0 && (I === 2 ? I = 0 : w.lastNeed = I - 3), I) : 0));
    }
    function r(w, E, k) {
      if ((E[0] & 192) !== 128) return w.lastNeed = 0, "\uFFFD";
      if (w.lastNeed > 1 && E.length > 1) {
        if ((E[1] & 192) !== 128) return w.lastNeed = 1, "\uFFFD";
        if (w.lastNeed > 2 && E.length > 2 && (E[2] & 192) !== 128) return w.lastNeed = 2, "\uFFFD";
      }
    }
    function n(w) {
      var E = this.lastTotal - this.lastNeed, k = r(this, w);
      if (k !== void 0) return k;
      if (this.lastNeed <= w.length) return w.copy(this.lastChar, E, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      w.copy(this.lastChar, E, 0, w.length), this.lastNeed -= w.length;
    }
    function u(w, E) {
      var k = i(this, w, E);
      if (!this.lastNeed) return w.toString("utf8", E);
      this.lastTotal = k;
      var S = w.length - (k - this.lastNeed);
      return w.copy(this.lastChar, 0, S), w.toString("utf8", E, S);
    }
    function a(w) {
      var E = w && w.length ? this.write(w) : "";
      return this.lastNeed ? E + "\uFFFD" : E;
    }
    function d(w, E) {
      if ((w.length - E) % 2 === 0) {
        var k = w.toString("utf16le", E);
        if (k) {
          var S = k.charCodeAt(k.length - 1);
          if (S >= 55296 && S <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = w[w.length - 2], this.lastChar[1] = w[w.length - 1], k.slice(0, -1);
        }
        return k;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = w[w.length - 1], w.toString("utf16le", E, w.length - 1);
    }
    function s(w) {
      var E = w && w.length ? this.write(w) : "";
      if (this.lastNeed) {
        var k = this.lastTotal - this.lastNeed;
        return E + this.lastChar.toString("utf16le", 0, k);
      }
      return E;
    }
    function b(w, E) {
      var k = (w.length - E) % 3;
      return k === 0 ? w.toString("base64", E) : (this.lastNeed = 3 - k, this.lastTotal = 3, k === 1 ? this.lastChar[0] = w[w.length - 1] : (this.lastChar[0] = w[w.length - 2], this.lastChar[1] = w[w.length - 1]), w.toString("base64", E, w.length - k));
    }
    function p(w) {
      var E = w && w.length ? this.write(w) : "";
      return this.lastNeed ? E + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : E;
    }
    function c(w) {
      return w.toString(this.encoding);
    }
    function y(w) {
      return w && w.length ? this.write(w) : "";
    }
    return mi;
  }
  var bi, ha;
  function nn() {
    if (ha) return bi;
    ha = 1;
    var e = Wr().codes.ERR_STREAM_PREMATURE_CLOSE;
    function t(f) {
      var i = false;
      return function() {
        if (!i) {
          i = true;
          for (var r = arguments.length, n = new Array(r), u = 0; u < r; u++) n[u] = arguments[u];
          f.apply(this, n);
        }
      };
    }
    function g() {
    }
    function v(f) {
      return f.setHeader && typeof f.abort == "function";
    }
    function l(f, i, r) {
      if (typeof i == "function") return l(f, null, i);
      i || (i = {}), r = t(r || g);
      var n = i.readable || i.readable !== false && f.readable, u = i.writable || i.writable !== false && f.writable, a = function() {
        f.writable || s();
      }, d = f._writableState && f._writableState.finished, s = function() {
        u = false, d = true, n || r.call(f);
      }, b = f._readableState && f._readableState.endEmitted, p = function() {
        n = false, b = true, u || r.call(f);
      }, c = function(k) {
        r.call(f, k);
      }, y = function() {
        var k;
        if (n && !b) return (!f._readableState || !f._readableState.ended) && (k = new e()), r.call(f, k);
        if (u && !d) return (!f._writableState || !f._writableState.ended) && (k = new e()), r.call(f, k);
      }, w = function() {
        f.req.on("finish", s);
      };
      return v(f) ? (f.on("complete", s), f.on("abort", y), f.req ? w() : f.on("request", w)) : u && !f._writableState && (f.on("end", a), f.on("close", a)), f.on("end", p), f.on("finish", s), i.error !== false && f.on("error", c), f.on("close", y), function() {
        f.removeListener("complete", s), f.removeListener("abort", y), f.removeListener("request", w), f.req && f.req.removeListener("finish", s), f.removeListener("end", a), f.removeListener("close", a), f.removeListener("finish", s), f.removeListener("end", p), f.removeListener("error", c), f.removeListener("close", y);
      };
    }
    return bi = l, bi;
  }
  var gi, da;
  function il() {
    if (da) return gi;
    da = 1;
    var e;
    function t(k, S, I) {
      return S = g(S), S in k ? Object.defineProperty(k, S, {
        value: I,
        enumerable: true,
        configurable: true,
        writable: true
      }) : k[S] = I, k;
    }
    function g(k) {
      var S = v(k, "string");
      return typeof S == "symbol" ? S : String(S);
    }
    function v(k, S) {
      if (typeof k != "object" || k === null) return k;
      var I = k[Symbol.toPrimitive];
      if (I !== void 0) {
        var U = I.call(k, S);
        if (typeof U != "object") return U;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (S === "string" ? String : Number)(k);
    }
    var l = nn(), f = Symbol("lastResolve"), i = Symbol("lastReject"), r = Symbol("error"), n = Symbol("ended"), u = Symbol("lastPromise"), a = Symbol("handlePromise"), d = Symbol("stream");
    function s(k, S) {
      return {
        value: k,
        done: S
      };
    }
    function b(k) {
      var S = k[f];
      if (S !== null) {
        var I = k[d].read();
        I !== null && (k[u] = null, k[f] = null, k[i] = null, S(s(I, false)));
      }
    }
    function p(k) {
      process.nextTick(b, k);
    }
    function c(k, S) {
      return function(I, U) {
        k.then(function() {
          if (S[n]) {
            I(s(void 0, true));
            return;
          }
          S[a](I, U);
        }, U);
      };
    }
    var y = Object.getPrototypeOf(function() {
    }), w = Object.setPrototypeOf((e = {
      get stream() {
        return this[d];
      },
      next: function() {
        var S = this, I = this[r];
        if (I !== null) return Promise.reject(I);
        if (this[n]) return Promise.resolve(s(void 0, true));
        if (this[d].destroyed) return new Promise(function(x, P) {
          process.nextTick(function() {
            S[r] ? P(S[r]) : x(s(void 0, true));
          });
        });
        var U = this[u], R;
        if (U) R = new Promise(c(U, this));
        else {
          var q = this[d].read();
          if (q !== null) return Promise.resolve(s(q, false));
          R = new Promise(this[a]);
        }
        return this[u] = R, R;
      }
    }, t(e, Symbol.asyncIterator, function() {
      return this;
    }), t(e, "return", function() {
      var S = this;
      return new Promise(function(I, U) {
        S[d].destroy(null, function(R) {
          if (R) {
            U(R);
            return;
          }
          I(s(void 0, true));
        });
      });
    }), e), y), E = function(S) {
      var I, U = Object.create(w, (I = {}, t(I, d, {
        value: S,
        writable: true
      }), t(I, f, {
        value: null,
        writable: true
      }), t(I, i, {
        value: null,
        writable: true
      }), t(I, r, {
        value: null,
        writable: true
      }), t(I, n, {
        value: S._readableState.endEmitted,
        writable: true
      }), t(I, a, {
        value: function(q, x) {
          var P = U[d].read();
          P ? (U[u] = null, U[f] = null, U[i] = null, q(s(P, false))) : (U[f] = q, U[i] = x);
        },
        writable: true
      }), I));
      return U[u] = null, l(S, function(R) {
        if (R && R.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var q = U[i];
          q !== null && (U[u] = null, U[f] = null, U[i] = null, q(R)), U[r] = R;
          return;
        }
        var x = U[f];
        x !== null && (U[u] = null, U[f] = null, U[i] = null, x(s(void 0, true))), U[n] = true;
      }), S.on("readable", p.bind(null, U)), U;
    };
    return gi = E, gi;
  }
  var vi, pa;
  function nl() {
    return pa || (pa = 1, vi = function() {
      throw new Error("Readable.from is not available in the browser");
    }), vi;
  }
  var yi, ma;
  function bs() {
    if (ma) return yi;
    ma = 1, yi = x;
    var e;
    x.ReadableState = q, dt.EventEmitter;
    var t = function(z, J) {
      return z.listeners(J).length;
    }, g = hs(), v = ir().Buffer, l = (typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
    };
    function f(B) {
      return v.from(B);
    }
    function i(B) {
      return v.isBuffer(B) || B instanceof l;
    }
    var r = dt, n;
    r && r.debuglog ? n = r.debuglog("stream") : n = function() {
    };
    var u = el(), a = ds(), d = ps(), s = d.getHighWaterMark, b = Wr().codes, p = b.ERR_INVALID_ARG_TYPE, c = b.ERR_STREAM_PUSH_AFTER_EOF, y = b.ERR_METHOD_NOT_IMPLEMENTED, w = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, E, k, S;
    Re()(x, g);
    var I = a.errorOrDestroy, U = [
      "error",
      "close",
      "destroy",
      "pause",
      "resume"
    ];
    function R(B, z, J) {
      if (typeof B.prependListener == "function") return B.prependListener(z, J);
      !B._events || !B._events[z] ? B.on(z, J) : Array.isArray(B._events[z]) ? B._events[z].unshift(J) : B._events[z] = [
        J,
        B._events[z]
      ];
    }
    function q(B, z, J) {
      e = e || qr(), B = B || {}, typeof J != "boolean" && (J = z instanceof e), this.objectMode = !!B.objectMode, J && (this.objectMode = this.objectMode || !!B.readableObjectMode), this.highWaterMark = s(this, B, "readableHighWaterMark", J), this.buffer = new u(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = B.emitClose !== false, this.autoDestroy = !!B.autoDestroy, this.destroyed = false, this.defaultEncoding = B.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, B.encoding && (E || (E = Ki().StringDecoder), this.decoder = new E(B.encoding), this.encoding = B.encoding);
    }
    function x(B) {
      if (e = e || qr(), !(this instanceof x)) return new x(B);
      var z = this instanceof e;
      this._readableState = new q(B, this, z), this.readable = true, B && (typeof B.read == "function" && (this._read = B.read), typeof B.destroy == "function" && (this._destroy = B.destroy)), g.call(this);
    }
    Object.defineProperty(x.prototype, "destroyed", {
      enumerable: false,
      get: function() {
        return this._readableState === void 0 ? false : this._readableState.destroyed;
      },
      set: function(z) {
        this._readableState && (this._readableState.destroyed = z);
      }
    }), x.prototype.destroy = a.destroy, x.prototype._undestroy = a.undestroy, x.prototype._destroy = function(B, z) {
      z(B);
    }, x.prototype.push = function(B, z) {
      var J = this._readableState, te;
      return J.objectMode ? te = true : typeof B == "string" && (z = z || J.defaultEncoding, z !== J.encoding && (B = v.from(B, z), z = ""), te = true), P(this, B, z, false, te);
    }, x.prototype.unshift = function(B) {
      return P(this, B, null, true, false);
    };
    function P(B, z, J, te, le) {
      n("readableAddChunk", z);
      var ce = B._readableState;
      if (z === null) ce.reading = false, ee(B, ce);
      else {
        var fe;
        if (le || (fe = j(ce, z)), fe) I(B, fe);
        else if (ce.objectMode || z && z.length > 0) if (typeof z != "string" && !ce.objectMode && Object.getPrototypeOf(z) !== v.prototype && (z = f(z)), te) ce.endEmitted ? I(B, new w()) : H(B, ce, z, true);
        else if (ce.ended) I(B, new c());
        else {
          if (ce.destroyed) return false;
          ce.reading = false, ce.decoder && !J ? (z = ce.decoder.write(z), ce.objectMode || z.length !== 0 ? H(B, ce, z, false) : O(B, ce)) : H(B, ce, z, false);
        }
        else te || (ce.reading = false, O(B, ce));
      }
      return !ce.ended && (ce.length < ce.highWaterMark || ce.length === 0);
    }
    function H(B, z, J, te) {
      z.flowing && z.length === 0 && !z.sync ? (z.awaitDrain = 0, B.emit("data", J)) : (z.length += z.objectMode ? 1 : J.length, te ? z.buffer.unshift(J) : z.buffer.push(J), z.needReadable && re(B)), O(B, z);
    }
    function j(B, z) {
      var J;
      return !i(z) && typeof z != "string" && z !== void 0 && !B.objectMode && (J = new p("chunk", [
        "string",
        "Buffer",
        "Uint8Array"
      ], z)), J;
    }
    x.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    }, x.prototype.setEncoding = function(B) {
      E || (E = Ki().StringDecoder);
      var z = new E(B);
      this._readableState.decoder = z, this._readableState.encoding = this._readableState.decoder.encoding;
      for (var J = this._readableState.buffer.head, te = ""; J !== null; ) te += z.write(J.data), J = J.next;
      return this._readableState.buffer.clear(), te !== "" && this._readableState.buffer.push(te), this._readableState.length = te.length, this;
    };
    var C = 1073741824;
    function W(B) {
      return B >= C ? B = C : (B--, B |= B >>> 1, B |= B >>> 2, B |= B >>> 4, B |= B >>> 8, B |= B >>> 16, B++), B;
    }
    function X(B, z) {
      return B <= 0 || z.length === 0 && z.ended ? 0 : z.objectMode ? 1 : B !== B ? z.flowing && z.length ? z.buffer.head.data.length : z.length : (B > z.highWaterMark && (z.highWaterMark = W(B)), B <= z.length ? B : z.ended ? z.length : (z.needReadable = true, 0));
    }
    x.prototype.read = function(B) {
      n("read", B), B = parseInt(B, 10);
      var z = this._readableState, J = B;
      if (B !== 0 && (z.emittedReadable = false), B === 0 && z.needReadable && ((z.highWaterMark !== 0 ? z.length >= z.highWaterMark : z.length > 0) || z.ended)) return n("read: emitReadable", z.length, z.ended), z.length === 0 && z.ended ? V(this) : re(this), null;
      if (B = X(B, z), B === 0 && z.ended) return z.length === 0 && V(this), null;
      var te = z.needReadable;
      n("need readable", te), (z.length === 0 || z.length - B < z.highWaterMark) && (te = true, n("length less than watermark", te)), z.ended || z.reading ? (te = false, n("reading or ended", te)) : te && (n("do read"), z.reading = true, z.sync = true, z.length === 0 && (z.needReadable = true), this._read(z.highWaterMark), z.sync = false, z.reading || (B = X(J, z)));
      var le;
      return B > 0 ? le = M(B, z) : le = null, le === null ? (z.needReadable = z.length <= z.highWaterMark, B = 0) : (z.length -= B, z.awaitDrain = 0), z.length === 0 && (z.ended || (z.needReadable = true), J !== B && z.ended && V(this)), le !== null && this.emit("data", le), le;
    };
    function ee(B, z) {
      if (n("onEofChunk"), !z.ended) {
        if (z.decoder) {
          var J = z.decoder.end();
          J && J.length && (z.buffer.push(J), z.length += z.objectMode ? 1 : J.length);
        }
        z.ended = true, z.sync ? re(B) : (z.needReadable = false, z.emittedReadable || (z.emittedReadable = true, ue(B)));
      }
    }
    function re(B) {
      var z = B._readableState;
      n("emitReadable", z.needReadable, z.emittedReadable), z.needReadable = false, z.emittedReadable || (n("emitReadable", z.flowing), z.emittedReadable = true, process.nextTick(ue, B));
    }
    function ue(B) {
      var z = B._readableState;
      n("emitReadable_", z.destroyed, z.length, z.ended), !z.destroyed && (z.length || z.ended) && (B.emit("readable"), z.emittedReadable = false), z.needReadable = !z.flowing && !z.ended && z.length <= z.highWaterMark, L(B);
    }
    function O(B, z) {
      z.readingMore || (z.readingMore = true, process.nextTick(F, B, z));
    }
    function F(B, z) {
      for (; !z.reading && !z.ended && (z.length < z.highWaterMark || z.flowing && z.length === 0); ) {
        var J = z.length;
        if (n("maybeReadMore read 0"), B.read(0), J === z.length) break;
      }
      z.readingMore = false;
    }
    x.prototype._read = function(B) {
      I(this, new y("_read()"));
    }, x.prototype.pipe = function(B, z) {
      var J = this, te = this._readableState;
      switch (te.pipesCount) {
        case 0:
          te.pipes = B;
          break;
        case 1:
          te.pipes = [
            te.pipes,
            B
          ];
          break;
        default:
          te.pipes.push(B);
          break;
      }
      te.pipesCount += 1, n("pipe count=%d opts=%j", te.pipesCount, z);
      var le = (!z || z.end !== false) && B !== process.stdout && B !== process.stderr, ce = le ? ge : De;
      te.endEmitted ? process.nextTick(ce) : J.once("end", ce), B.on("unpipe", fe);
      function fe(T, m) {
        n("onunpipe"), T === J && m && m.hasUnpiped === false && (m.hasUnpiped = true, be());
      }
      function ge() {
        n("onend"), B.end();
      }
      var Ae = K(J);
      B.on("drain", Ae);
      var Ue = false;
      function be() {
        n("cleanup"), B.removeListener("close", Qe), B.removeListener("finish", Pe), B.removeListener("drain", Ae), B.removeListener("error", ze), B.removeListener("unpipe", fe), J.removeListener("end", ge), J.removeListener("end", De), J.removeListener("data", ve), Ue = true, te.awaitDrain && (!B._writableState || B._writableState.needDrain) && Ae();
      }
      J.on("data", ve);
      function ve(T) {
        n("ondata");
        var m = B.write(T);
        n("dest.write", m), m === false && ((te.pipesCount === 1 && te.pipes === B || te.pipesCount > 1 && oe(te.pipes, B) !== -1) && !Ue && (n("false write response, pause", te.awaitDrain), te.awaitDrain++), J.pause());
      }
      function ze(T) {
        n("onerror", T), De(), B.removeListener("error", ze), t(B, "error") === 0 && I(B, T);
      }
      R(B, "error", ze);
      function Qe() {
        B.removeListener("finish", Pe), De();
      }
      B.once("close", Qe);
      function Pe() {
        n("onfinish"), B.removeListener("close", Qe), De();
      }
      B.once("finish", Pe);
      function De() {
        n("unpipe"), J.unpipe(B);
      }
      return B.emit("pipe", J), te.flowing || (n("pipe resume"), J.resume()), B;
    };
    function K(B) {
      return function() {
        var J = B._readableState;
        n("pipeOnDrain", J.awaitDrain), J.awaitDrain && J.awaitDrain--, J.awaitDrain === 0 && t(B, "data") && (J.flowing = true, L(B));
      };
    }
    x.prototype.unpipe = function(B) {
      var z = this._readableState, J = {
        hasUnpiped: false
      };
      if (z.pipesCount === 0) return this;
      if (z.pipesCount === 1) return B && B !== z.pipes ? this : (B || (B = z.pipes), z.pipes = null, z.pipesCount = 0, z.flowing = false, B && B.emit("unpipe", this, J), this);
      if (!B) {
        var te = z.pipes, le = z.pipesCount;
        z.pipes = null, z.pipesCount = 0, z.flowing = false;
        for (var ce = 0; ce < le; ce++) te[ce].emit("unpipe", this, {
          hasUnpiped: false
        });
        return this;
      }
      var fe = oe(z.pipes, B);
      return fe === -1 ? this : (z.pipes.splice(fe, 1), z.pipesCount -= 1, z.pipesCount === 1 && (z.pipes = z.pipes[0]), B.emit("unpipe", this, J), this);
    }, x.prototype.on = function(B, z) {
      var J = g.prototype.on.call(this, B, z), te = this._readableState;
      return B === "data" ? (te.readableListening = this.listenerCount("readable") > 0, te.flowing !== false && this.resume()) : B === "readable" && !te.endEmitted && !te.readableListening && (te.readableListening = te.needReadable = true, te.flowing = false, te.emittedReadable = false, n("on readable", te.length, te.reading), te.length ? re(this) : te.reading || process.nextTick(ae, this)), J;
    }, x.prototype.addListener = x.prototype.on, x.prototype.removeListener = function(B, z) {
      var J = g.prototype.removeListener.call(this, B, z);
      return B === "readable" && process.nextTick(Z, this), J;
    }, x.prototype.removeAllListeners = function(B) {
      var z = g.prototype.removeAllListeners.apply(this, arguments);
      return (B === "readable" || B === void 0) && process.nextTick(Z, this), z;
    };
    function Z(B) {
      var z = B._readableState;
      z.readableListening = B.listenerCount("readable") > 0, z.resumeScheduled && !z.paused ? z.flowing = true : B.listenerCount("data") > 0 && B.resume();
    }
    function ae(B) {
      n("readable nexttick read 0"), B.read(0);
    }
    x.prototype.resume = function() {
      var B = this._readableState;
      return B.flowing || (n("resume"), B.flowing = !B.readableListening, D(this, B)), B.paused = false, this;
    };
    function D(B, z) {
      z.resumeScheduled || (z.resumeScheduled = true, process.nextTick(Y, B, z));
    }
    function Y(B, z) {
      n("resume", z.reading), z.reading || B.read(0), z.resumeScheduled = false, B.emit("resume"), L(B), z.flowing && !z.reading && B.read(0);
    }
    x.prototype.pause = function() {
      return n("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (n("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
    };
    function L(B) {
      var z = B._readableState;
      for (n("flow", z.flowing); z.flowing && B.read() !== null; ) ;
    }
    x.prototype.wrap = function(B) {
      var z = this, J = this._readableState, te = false;
      B.on("end", function() {
        if (n("wrapped end"), J.decoder && !J.ended) {
          var fe = J.decoder.end();
          fe && fe.length && z.push(fe);
        }
        z.push(null);
      }), B.on("data", function(fe) {
        if (n("wrapped data"), J.decoder && (fe = J.decoder.write(fe)), !(J.objectMode && fe == null) && !(!J.objectMode && (!fe || !fe.length))) {
          var ge = z.push(fe);
          ge || (te = true, B.pause());
        }
      });
      for (var le in B) this[le] === void 0 && typeof B[le] == "function" && (this[le] = /* @__PURE__ */ function(ge) {
        return function() {
          return B[ge].apply(B, arguments);
        };
      }(le));
      for (var ce = 0; ce < U.length; ce++) B.on(U[ce], this.emit.bind(this, U[ce]));
      return this._read = function(fe) {
        n("wrapped _read", fe), te && (te = false, B.resume());
      }, this;
    }, typeof Symbol == "function" && (x.prototype[Symbol.asyncIterator] = function() {
      return k === void 0 && (k = il()), k(this);
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
      set: function(z) {
        this._readableState && (this._readableState.flowing = z);
      }
    }), x._fromList = M, Object.defineProperty(x.prototype, "readableLength", {
      enumerable: false,
      get: function() {
        return this._readableState.length;
      }
    });
    function M(B, z) {
      if (z.length === 0) return null;
      var J;
      return z.objectMode ? J = z.buffer.shift() : !B || B >= z.length ? (z.decoder ? J = z.buffer.join("") : z.buffer.length === 1 ? J = z.buffer.first() : J = z.buffer.concat(z.length), z.buffer.clear()) : J = z.buffer.consume(B, z.decoder), J;
    }
    function V(B) {
      var z = B._readableState;
      n("endReadable", z.endEmitted), z.endEmitted || (z.ended = true, process.nextTick($, z, B));
    }
    function $(B, z) {
      if (n("endReadableNT", B.endEmitted, B.length), !B.endEmitted && B.length === 0 && (B.endEmitted = true, z.readable = false, z.emit("end"), B.autoDestroy)) {
        var J = z._writableState;
        (!J || J.autoDestroy && J.finished) && z.destroy();
      }
    }
    typeof Symbol == "function" && (x.from = function(B, z) {
      return S === void 0 && (S = nl()), S(x, B, z);
    });
    function oe(B, z) {
      for (var J = 0, te = B.length; J < te; J++) if (B[J] === z) return J;
      return -1;
    }
    return yi;
  }
  var wi, ba;
  function gs() {
    if (ba) return wi;
    ba = 1, wi = r;
    var e = Wr().codes, t = e.ERR_METHOD_NOT_IMPLEMENTED, g = e.ERR_MULTIPLE_CALLBACK, v = e.ERR_TRANSFORM_ALREADY_TRANSFORMING, l = e.ERR_TRANSFORM_WITH_LENGTH_0, f = qr();
    Re()(r, f);
    function i(a, d) {
      var s = this._transformState;
      s.transforming = false;
      var b = s.writecb;
      if (b === null) return this.emit("error", new g());
      s.writechunk = null, s.writecb = null, d != null && this.push(d), b(a);
      var p = this._readableState;
      p.reading = false, (p.needReadable || p.length < p.highWaterMark) && this._read(p.highWaterMark);
    }
    function r(a) {
      if (!(this instanceof r)) return new r(a);
      f.call(this, a), this._transformState = {
        afterTransform: i.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = true, this._readableState.sync = false, a && (typeof a.transform == "function" && (this._transform = a.transform), typeof a.flush == "function" && (this._flush = a.flush)), this.on("prefinish", n);
    }
    function n() {
      var a = this;
      typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(d, s) {
        u(a, d, s);
      }) : u(this, null, null);
    }
    r.prototype.push = function(a, d) {
      return this._transformState.needTransform = false, f.prototype.push.call(this, a, d);
    }, r.prototype._transform = function(a, d, s) {
      s(new t("_transform()"));
    }, r.prototype._write = function(a, d, s) {
      var b = this._transformState;
      if (b.writecb = s, b.writechunk = a, b.writeencoding = d, !b.transforming) {
        var p = this._readableState;
        (b.needTransform || p.needReadable || p.length < p.highWaterMark) && this._read(p.highWaterMark);
      }
    }, r.prototype._read = function(a) {
      var d = this._transformState;
      d.writechunk !== null && !d.transforming ? (d.transforming = true, this._transform(d.writechunk, d.writeencoding, d.afterTransform)) : d.needTransform = true;
    }, r.prototype._destroy = function(a, d) {
      f.prototype._destroy.call(this, a, function(s) {
        d(s);
      });
    };
    function u(a, d, s) {
      if (d) return a.emit("error", d);
      if (s != null && a.push(s), a._writableState.length) throw new l();
      if (a._transformState.transforming) throw new v();
      return a.push(null);
    }
    return wi;
  }
  var _i, ga;
  function ol() {
    if (ga) return _i;
    ga = 1, _i = t;
    var e = gs();
    Re()(t, e);
    function t(g) {
      if (!(this instanceof t)) return new t(g);
      e.call(this, g);
    }
    return t.prototype._transform = function(g, v, l) {
      l(null, g);
    }, _i;
  }
  var Ei, va;
  function al() {
    if (va) return Ei;
    va = 1;
    var e;
    function t(s) {
      var b = false;
      return function() {
        b || (b = true, s.apply(void 0, arguments));
      };
    }
    var g = Wr().codes, v = g.ERR_MISSING_ARGS, l = g.ERR_STREAM_DESTROYED;
    function f(s) {
      if (s) throw s;
    }
    function i(s) {
      return s.setHeader && typeof s.abort == "function";
    }
    function r(s, b, p, c) {
      c = t(c);
      var y = false;
      s.on("close", function() {
        y = true;
      }), e === void 0 && (e = nn()), e(s, {
        readable: b,
        writable: p
      }, function(E) {
        if (E) return c(E);
        y = true, c();
      });
      var w = false;
      return function(E) {
        if (!y && !w) {
          if (w = true, i(s)) return s.abort();
          if (typeof s.destroy == "function") return s.destroy();
          c(E || new l("pipe"));
        }
      };
    }
    function n(s) {
      s();
    }
    function u(s, b) {
      return s.pipe(b);
    }
    function a(s) {
      return !s.length || typeof s[s.length - 1] != "function" ? f : s.pop();
    }
    function d() {
      for (var s = arguments.length, b = new Array(s), p = 0; p < s; p++) b[p] = arguments[p];
      var c = a(b);
      if (Array.isArray(b[0]) && (b = b[0]), b.length < 2) throw new v("streams");
      var y, w = b.map(function(E, k) {
        var S = k < b.length - 1, I = k > 0;
        return r(E, S, I, function(U) {
          y || (y = U), U && w.forEach(n), !S && (w.forEach(n), c(y));
        });
      });
      return b.reduce(u);
    }
    return Ei = d, Ei;
  }
  var ki, ya;
  function vs() {
    if (ya) return ki;
    ya = 1, ki = g;
    var e = dt.EventEmitter, t = Re();
    t(g, e), g.Readable = bs(), g.Writable = ms(), g.Duplex = qr(), g.Transform = gs(), g.PassThrough = ol(), g.finished = nn(), g.pipeline = al(), g.Stream = g;
    function g() {
      e.call(this);
    }
    return g.prototype.pipe = function(v, l) {
      var f = this;
      function i(b) {
        v.writable && v.write(b) === false && f.pause && f.pause();
      }
      f.on("data", i);
      function r() {
        f.readable && f.resume && f.resume();
      }
      v.on("drain", r), !v._isStdio && (!l || l.end !== false) && (f.on("end", u), f.on("close", a));
      var n = false;
      function u() {
        n || (n = true, v.end());
      }
      function a() {
        n || (n = true, typeof v.destroy == "function" && v.destroy());
      }
      function d(b) {
        if (s(), e.listenerCount(this, "error") === 0) throw b;
      }
      f.on("error", d), v.on("error", d);
      function s() {
        f.removeListener("data", i), v.removeListener("drain", r), f.removeListener("end", u), f.removeListener("close", a), f.removeListener("error", d), v.removeListener("error", d), f.removeListener("end", s), f.removeListener("close", s), v.removeListener("close", s);
      }
      return f.on("end", s), f.on("close", s), v.on("close", s), v.emit("pipe", f), v;
    }, ki;
  }
  var Si, wa;
  function ys() {
    if (wa) return Si;
    wa = 1;
    var e = Fe().Buffer, t = vs().Transform, g = Re();
    function v(r) {
      t.call(this), this._block = e.allocUnsafe(r), this._blockSize = r, this._blockOffset = 0, this._length = [
        0,
        0,
        0,
        0
      ], this._finalized = false;
    }
    g(v, t), v.prototype._transform = function(r, n, u) {
      var a = null;
      try {
        this.update(r, n);
      } catch (d) {
        a = d;
      }
      u(a);
    }, v.prototype._flush = function(r) {
      var n = null;
      try {
        this.push(this.digest());
      } catch (u) {
        n = u;
      }
      r(n);
    };
    var l = typeof Uint8Array < "u", f = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && ArrayBuffer.isView && (e.prototype instanceof Uint8Array || e.TYPED_ARRAY_SUPPORT);
    function i(r, n) {
      if (r instanceof e) return r;
      if (typeof r == "string") return e.from(r, n);
      if (f && ArrayBuffer.isView(r)) {
        if (r.byteLength === 0) return e.alloc(0);
        var u = e.from(r.buffer, r.byteOffset, r.byteLength);
        if (u.byteLength === r.byteLength) return u;
      }
      if (l && r instanceof Uint8Array || e.isBuffer(r) && r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r)) return e.from(r);
      throw new TypeError('The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.');
    }
    return v.prototype.update = function(r, n) {
      if (this._finalized) throw new Error("Digest already called");
      r = i(r, n);
      for (var u = this._block, a = 0; this._blockOffset + r.length - a >= this._blockSize; ) {
        for (var d = this._blockOffset; d < this._blockSize; ) u[d++] = r[a++];
        this._update(), this._blockOffset = 0;
      }
      for (; a < r.length; ) u[this._blockOffset++] = r[a++];
      for (var s = 0, b = r.length * 8; b > 0; ++s) this._length[s] += b, b = this._length[s] / 4294967296 | 0, b > 0 && (this._length[s] -= 4294967296 * b);
      return this;
    }, v.prototype._update = function() {
      throw new Error("_update is not implemented");
    }, v.prototype.digest = function(r) {
      if (this._finalized) throw new Error("Digest already called");
      this._finalized = true;
      var n = this._digest();
      r !== void 0 && (n = n.toString(r)), this._block.fill(0), this._blockOffset = 0;
      for (var u = 0; u < 4; ++u) this._length[u] = 0;
      return n;
    }, v.prototype._digest = function() {
      throw new Error("_digest is not implemented");
    }, Si = v, Si;
  }
  var Ti, _a;
  function sl() {
    if (_a) return Ti;
    _a = 1;
    var e = Re(), t = ys(), g = Fe().Buffer, v = new Array(16);
    function l() {
      t.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
    }
    e(l, t), l.prototype._update = function() {
      for (var a = v, d = 0; d < 16; ++d) a[d] = this._block.readInt32LE(d * 4);
      var s = this._a, b = this._b, p = this._c, c = this._d;
      s = i(s, b, p, c, a[0], 3614090360, 7), c = i(c, s, b, p, a[1], 3905402710, 12), p = i(p, c, s, b, a[2], 606105819, 17), b = i(b, p, c, s, a[3], 3250441966, 22), s = i(s, b, p, c, a[4], 4118548399, 7), c = i(c, s, b, p, a[5], 1200080426, 12), p = i(p, c, s, b, a[6], 2821735955, 17), b = i(b, p, c, s, a[7], 4249261313, 22), s = i(s, b, p, c, a[8], 1770035416, 7), c = i(c, s, b, p, a[9], 2336552879, 12), p = i(p, c, s, b, a[10], 4294925233, 17), b = i(b, p, c, s, a[11], 2304563134, 22), s = i(s, b, p, c, a[12], 1804603682, 7), c = i(c, s, b, p, a[13], 4254626195, 12), p = i(p, c, s, b, a[14], 2792965006, 17), b = i(b, p, c, s, a[15], 1236535329, 22), s = r(s, b, p, c, a[1], 4129170786, 5), c = r(c, s, b, p, a[6], 3225465664, 9), p = r(p, c, s, b, a[11], 643717713, 14), b = r(b, p, c, s, a[0], 3921069994, 20), s = r(s, b, p, c, a[5], 3593408605, 5), c = r(c, s, b, p, a[10], 38016083, 9), p = r(p, c, s, b, a[15], 3634488961, 14), b = r(b, p, c, s, a[4], 3889429448, 20), s = r(s, b, p, c, a[9], 568446438, 5), c = r(c, s, b, p, a[14], 3275163606, 9), p = r(p, c, s, b, a[3], 4107603335, 14), b = r(b, p, c, s, a[8], 1163531501, 20), s = r(s, b, p, c, a[13], 2850285829, 5), c = r(c, s, b, p, a[2], 4243563512, 9), p = r(p, c, s, b, a[7], 1735328473, 14), b = r(b, p, c, s, a[12], 2368359562, 20), s = n(s, b, p, c, a[5], 4294588738, 4), c = n(c, s, b, p, a[8], 2272392833, 11), p = n(p, c, s, b, a[11], 1839030562, 16), b = n(b, p, c, s, a[14], 4259657740, 23), s = n(s, b, p, c, a[1], 2763975236, 4), c = n(c, s, b, p, a[4], 1272893353, 11), p = n(p, c, s, b, a[7], 4139469664, 16), b = n(b, p, c, s, a[10], 3200236656, 23), s = n(s, b, p, c, a[13], 681279174, 4), c = n(c, s, b, p, a[0], 3936430074, 11), p = n(p, c, s, b, a[3], 3572445317, 16), b = n(b, p, c, s, a[6], 76029189, 23), s = n(s, b, p, c, a[9], 3654602809, 4), c = n(c, s, b, p, a[12], 3873151461, 11), p = n(p, c, s, b, a[15], 530742520, 16), b = n(b, p, c, s, a[2], 3299628645, 23), s = u(s, b, p, c, a[0], 4096336452, 6), c = u(c, s, b, p, a[7], 1126891415, 10), p = u(p, c, s, b, a[14], 2878612391, 15), b = u(b, p, c, s, a[5], 4237533241, 21), s = u(s, b, p, c, a[12], 1700485571, 6), c = u(c, s, b, p, a[3], 2399980690, 10), p = u(p, c, s, b, a[10], 4293915773, 15), b = u(b, p, c, s, a[1], 2240044497, 21), s = u(s, b, p, c, a[8], 1873313359, 6), c = u(c, s, b, p, a[15], 4264355552, 10), p = u(p, c, s, b, a[6], 2734768916, 15), b = u(b, p, c, s, a[13], 1309151649, 21), s = u(s, b, p, c, a[4], 4149444226, 6), c = u(c, s, b, p, a[11], 3174756917, 10), p = u(p, c, s, b, a[2], 718787259, 15), b = u(b, p, c, s, a[9], 3951481745, 21), this._a = this._a + s | 0, this._b = this._b + b | 0, this._c = this._c + p | 0, this._d = this._d + c | 0;
    }, l.prototype._digest = function() {
      this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var a = g.allocUnsafe(16);
      return a.writeInt32LE(this._a, 0), a.writeInt32LE(this._b, 4), a.writeInt32LE(this._c, 8), a.writeInt32LE(this._d, 12), a;
    };
    function f(a, d) {
      return a << d | a >>> 32 - d;
    }
    function i(a, d, s, b, p, c, y) {
      return f(a + (d & s | ~d & b) + p + c | 0, y) + d | 0;
    }
    function r(a, d, s, b, p, c, y) {
      return f(a + (d & b | s & ~b) + p + c | 0, y) + d | 0;
    }
    function n(a, d, s, b, p, c, y) {
      return f(a + (d ^ s ^ b) + p + c | 0, y) + d | 0;
    }
    function u(a, d, s, b, p, c, y) {
      return f(a + (s ^ (d | ~b)) + p + c | 0, y) + d | 0;
    }
    return Ti = l, Ti;
  }
  var Ii, Ea;
  function ul() {
    if (Ea) return Ii;
    Ea = 1;
    var e = ir().Buffer, t = Re(), g = ys(), v = new Array(16), l = [
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
    ], f = [
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
    ], i = [
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
    ], n = [
      0,
      1518500249,
      1859775393,
      2400959708,
      2840853838
    ], u = [
      1352829926,
      1548603684,
      1836072691,
      2053994217,
      0
    ];
    function a() {
      g.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
    }
    t(a, g), a.prototype._update = function() {
      for (var w = v, E = 0; E < 16; ++E) w[E] = this._block.readInt32LE(E * 4);
      for (var k = this._a | 0, S = this._b | 0, I = this._c | 0, U = this._d | 0, R = this._e | 0, q = this._a | 0, x = this._b | 0, P = this._c | 0, H = this._d | 0, j = this._e | 0, C = 0; C < 80; C += 1) {
        var W, X;
        C < 16 ? (W = s(k, S, I, U, R, w[l[C]], n[0], i[C]), X = y(q, x, P, H, j, w[f[C]], u[0], r[C])) : C < 32 ? (W = b(k, S, I, U, R, w[l[C]], n[1], i[C]), X = c(q, x, P, H, j, w[f[C]], u[1], r[C])) : C < 48 ? (W = p(k, S, I, U, R, w[l[C]], n[2], i[C]), X = p(q, x, P, H, j, w[f[C]], u[2], r[C])) : C < 64 ? (W = c(k, S, I, U, R, w[l[C]], n[3], i[C]), X = b(q, x, P, H, j, w[f[C]], u[3], r[C])) : (W = y(k, S, I, U, R, w[l[C]], n[4], i[C]), X = s(q, x, P, H, j, w[f[C]], u[4], r[C])), k = R, R = U, U = d(I, 10), I = S, S = W, q = j, j = H, H = d(P, 10), P = x, x = X;
      }
      var ee = this._b + I + H | 0;
      this._b = this._c + U + j | 0, this._c = this._d + R + q | 0, this._d = this._e + k + x | 0, this._e = this._a + S + P | 0, this._a = ee;
    }, a.prototype._digest = function() {
      this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
      var w = e.alloc ? e.alloc(20) : new e(20);
      return w.writeInt32LE(this._a, 0), w.writeInt32LE(this._b, 4), w.writeInt32LE(this._c, 8), w.writeInt32LE(this._d, 12), w.writeInt32LE(this._e, 16), w;
    };
    function d(w, E) {
      return w << E | w >>> 32 - E;
    }
    function s(w, E, k, S, I, U, R, q) {
      return d(w + (E ^ k ^ S) + U + R | 0, q) + I | 0;
    }
    function b(w, E, k, S, I, U, R, q) {
      return d(w + (E & k | ~E & S) + U + R | 0, q) + I | 0;
    }
    function p(w, E, k, S, I, U, R, q) {
      return d(w + ((E | ~k) ^ S) + U + R | 0, q) + I | 0;
    }
    function c(w, E, k, S, I, U, R, q) {
      return d(w + (E & S | k & ~S) + U + R | 0, q) + I | 0;
    }
    function y(w, E, k, S, I, U, R, q) {
      return d(w + (E ^ (k | ~S)) + U + R | 0, q) + I | 0;
    }
    return Ii = a, Ii;
  }
  var Ai = {
    exports: {}
  }, Pi, ka;
  function Vr() {
    if (ka) return Pi;
    ka = 1;
    var e = Fe().Buffer;
    function t(g, v) {
      this._block = e.alloc(g), this._finalSize = v, this._blockSize = g, this._len = 0;
    }
    return t.prototype.update = function(g, v) {
      typeof g == "string" && (v = v || "utf8", g = e.from(g, v));
      for (var l = this._block, f = this._blockSize, i = g.length, r = this._len, n = 0; n < i; ) {
        for (var u = r % f, a = Math.min(i - n, f - u), d = 0; d < a; d++) l[u + d] = g[n + d];
        r += a, n += a, r % f === 0 && this._update(l);
      }
      return this._len += i, this;
    }, t.prototype.digest = function(g) {
      var v = this._len % this._blockSize;
      this._block[v] = 128, this._block.fill(0, v + 1), v >= this._finalSize && (this._update(this._block), this._block.fill(0));
      var l = this._len * 8;
      if (l <= 4294967295) this._block.writeUInt32BE(l, this._blockSize - 4);
      else {
        var f = (l & 4294967295) >>> 0, i = (l - f) / 4294967296;
        this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(f, this._blockSize - 4);
      }
      this._update(this._block);
      var r = this._hash();
      return g ? r.toString(g) : r;
    }, t.prototype._update = function() {
      throw new Error("_update must be implemented by subclass");
    }, Pi = t, Pi;
  }
  var Bi, Sa;
  function cl() {
    if (Sa) return Bi;
    Sa = 1;
    var e = Re(), t = Vr(), g = Fe().Buffer, v = [
      1518500249,
      1859775393,
      -1894007588,
      -899497514
    ], l = new Array(80);
    function f() {
      this.init(), this._w = l, t.call(this, 64, 56);
    }
    e(f, t), f.prototype.init = function() {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    };
    function i(u) {
      return u << 5 | u >>> 27;
    }
    function r(u) {
      return u << 30 | u >>> 2;
    }
    function n(u, a, d, s) {
      return u === 0 ? a & d | ~a & s : u === 2 ? a & d | a & s | d & s : a ^ d ^ s;
    }
    return f.prototype._update = function(u) {
      for (var a = this._w, d = this._a | 0, s = this._b | 0, b = this._c | 0, p = this._d | 0, c = this._e | 0, y = 0; y < 16; ++y) a[y] = u.readInt32BE(y * 4);
      for (; y < 80; ++y) a[y] = a[y - 3] ^ a[y - 8] ^ a[y - 14] ^ a[y - 16];
      for (var w = 0; w < 80; ++w) {
        var E = ~~(w / 20), k = i(d) + n(E, s, b, p) + c + a[w] + v[E] | 0;
        c = p, p = b, b = r(s), s = d, d = k;
      }
      this._a = d + this._a | 0, this._b = s + this._b | 0, this._c = b + this._c | 0, this._d = p + this._d | 0, this._e = c + this._e | 0;
    }, f.prototype._hash = function() {
      var u = g.allocUnsafe(20);
      return u.writeInt32BE(this._a | 0, 0), u.writeInt32BE(this._b | 0, 4), u.writeInt32BE(this._c | 0, 8), u.writeInt32BE(this._d | 0, 12), u.writeInt32BE(this._e | 0, 16), u;
    }, Bi = f, Bi;
  }
  var Oi, Ta;
  function ll() {
    if (Ta) return Oi;
    Ta = 1;
    var e = Re(), t = Vr(), g = Fe().Buffer, v = [
      1518500249,
      1859775393,
      -1894007588,
      -899497514
    ], l = new Array(80);
    function f() {
      this.init(), this._w = l, t.call(this, 64, 56);
    }
    e(f, t), f.prototype.init = function() {
      return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    };
    function i(a) {
      return a << 1 | a >>> 31;
    }
    function r(a) {
      return a << 5 | a >>> 27;
    }
    function n(a) {
      return a << 30 | a >>> 2;
    }
    function u(a, d, s, b) {
      return a === 0 ? d & s | ~d & b : a === 2 ? d & s | d & b | s & b : d ^ s ^ b;
    }
    return f.prototype._update = function(a) {
      for (var d = this._w, s = this._a | 0, b = this._b | 0, p = this._c | 0, c = this._d | 0, y = this._e | 0, w = 0; w < 16; ++w) d[w] = a.readInt32BE(w * 4);
      for (; w < 80; ++w) d[w] = i(d[w - 3] ^ d[w - 8] ^ d[w - 14] ^ d[w - 16]);
      for (var E = 0; E < 80; ++E) {
        var k = ~~(E / 20), S = r(s) + u(k, b, p, c) + y + d[E] + v[k] | 0;
        y = c, c = p, p = n(b), b = s, s = S;
      }
      this._a = s + this._a | 0, this._b = b + this._b | 0, this._c = p + this._c | 0, this._d = c + this._d | 0, this._e = y + this._e | 0;
    }, f.prototype._hash = function() {
      var a = g.allocUnsafe(20);
      return a.writeInt32BE(this._a | 0, 0), a.writeInt32BE(this._b | 0, 4), a.writeInt32BE(this._c | 0, 8), a.writeInt32BE(this._d | 0, 12), a.writeInt32BE(this._e | 0, 16), a;
    }, Oi = f, Oi;
  }
  var Ri, Ia;
  function ws() {
    if (Ia) return Ri;
    Ia = 1;
    var e = Re(), t = Vr(), g = Fe().Buffer, v = [
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
    ], l = new Array(64);
    function f() {
      this.init(), this._w = l, t.call(this, 64, 56);
    }
    e(f, t), f.prototype.init = function() {
      return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
    };
    function i(s, b, p) {
      return p ^ s & (b ^ p);
    }
    function r(s, b, p) {
      return s & b | p & (s | b);
    }
    function n(s) {
      return (s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10);
    }
    function u(s) {
      return (s >>> 6 | s << 26) ^ (s >>> 11 | s << 21) ^ (s >>> 25 | s << 7);
    }
    function a(s) {
      return (s >>> 7 | s << 25) ^ (s >>> 18 | s << 14) ^ s >>> 3;
    }
    function d(s) {
      return (s >>> 17 | s << 15) ^ (s >>> 19 | s << 13) ^ s >>> 10;
    }
    return f.prototype._update = function(s) {
      for (var b = this._w, p = this._a | 0, c = this._b | 0, y = this._c | 0, w = this._d | 0, E = this._e | 0, k = this._f | 0, S = this._g | 0, I = this._h | 0, U = 0; U < 16; ++U) b[U] = s.readInt32BE(U * 4);
      for (; U < 64; ++U) b[U] = d(b[U - 2]) + b[U - 7] + a(b[U - 15]) + b[U - 16] | 0;
      for (var R = 0; R < 64; ++R) {
        var q = I + u(E) + i(E, k, S) + v[R] + b[R] | 0, x = n(p) + r(p, c, y) | 0;
        I = S, S = k, k = E, E = w + q | 0, w = y, y = c, c = p, p = q + x | 0;
      }
      this._a = p + this._a | 0, this._b = c + this._b | 0, this._c = y + this._c | 0, this._d = w + this._d | 0, this._e = E + this._e | 0, this._f = k + this._f | 0, this._g = S + this._g | 0, this._h = I + this._h | 0;
    }, f.prototype._hash = function() {
      var s = g.allocUnsafe(32);
      return s.writeInt32BE(this._a, 0), s.writeInt32BE(this._b, 4), s.writeInt32BE(this._c, 8), s.writeInt32BE(this._d, 12), s.writeInt32BE(this._e, 16), s.writeInt32BE(this._f, 20), s.writeInt32BE(this._g, 24), s.writeInt32BE(this._h, 28), s;
    }, Ri = f, Ri;
  }
  var Ui, Aa;
  function fl() {
    if (Aa) return Ui;
    Aa = 1;
    var e = Re(), t = ws(), g = Vr(), v = Fe().Buffer, l = new Array(64);
    function f() {
      this.init(), this._w = l, g.call(this, 64, 56);
    }
    return e(f, t), f.prototype.init = function() {
      return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
    }, f.prototype._hash = function() {
      var i = v.allocUnsafe(28);
      return i.writeInt32BE(this._a, 0), i.writeInt32BE(this._b, 4), i.writeInt32BE(this._c, 8), i.writeInt32BE(this._d, 12), i.writeInt32BE(this._e, 16), i.writeInt32BE(this._f, 20), i.writeInt32BE(this._g, 24), i;
    }, Ui = f, Ui;
  }
  var zi, Pa;
  function _s() {
    if (Pa) return zi;
    Pa = 1;
    var e = Re(), t = Vr(), g = Fe().Buffer, v = [
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
    ], l = new Array(160);
    function f() {
      this.init(), this._w = l, t.call(this, 128, 112);
    }
    e(f, t), f.prototype.init = function() {
      return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
    };
    function i(c, y, w) {
      return w ^ c & (y ^ w);
    }
    function r(c, y, w) {
      return c & y | w & (c | y);
    }
    function n(c, y) {
      return (c >>> 28 | y << 4) ^ (y >>> 2 | c << 30) ^ (y >>> 7 | c << 25);
    }
    function u(c, y) {
      return (c >>> 14 | y << 18) ^ (c >>> 18 | y << 14) ^ (y >>> 9 | c << 23);
    }
    function a(c, y) {
      return (c >>> 1 | y << 31) ^ (c >>> 8 | y << 24) ^ c >>> 7;
    }
    function d(c, y) {
      return (c >>> 1 | y << 31) ^ (c >>> 8 | y << 24) ^ (c >>> 7 | y << 25);
    }
    function s(c, y) {
      return (c >>> 19 | y << 13) ^ (y >>> 29 | c << 3) ^ c >>> 6;
    }
    function b(c, y) {
      return (c >>> 19 | y << 13) ^ (y >>> 29 | c << 3) ^ (c >>> 6 | y << 26);
    }
    function p(c, y) {
      return c >>> 0 < y >>> 0 ? 1 : 0;
    }
    return f.prototype._update = function(c) {
      for (var y = this._w, w = this._ah | 0, E = this._bh | 0, k = this._ch | 0, S = this._dh | 0, I = this._eh | 0, U = this._fh | 0, R = this._gh | 0, q = this._hh | 0, x = this._al | 0, P = this._bl | 0, H = this._cl | 0, j = this._dl | 0, C = this._el | 0, W = this._fl | 0, X = this._gl | 0, ee = this._hl | 0, re = 0; re < 32; re += 2) y[re] = c.readInt32BE(re * 4), y[re + 1] = c.readInt32BE(re * 4 + 4);
      for (; re < 160; re += 2) {
        var ue = y[re - 30], O = y[re - 15 * 2 + 1], F = a(ue, O), K = d(O, ue);
        ue = y[re - 2 * 2], O = y[re - 2 * 2 + 1];
        var Z = s(ue, O), ae = b(O, ue), D = y[re - 7 * 2], Y = y[re - 7 * 2 + 1], L = y[re - 16 * 2], M = y[re - 16 * 2 + 1], V = K + Y | 0, $ = F + D + p(V, K) | 0;
        V = V + ae | 0, $ = $ + Z + p(V, ae) | 0, V = V + M | 0, $ = $ + L + p(V, M) | 0, y[re] = $, y[re + 1] = V;
      }
      for (var oe = 0; oe < 160; oe += 2) {
        $ = y[oe], V = y[oe + 1];
        var B = r(w, E, k), z = r(x, P, H), J = n(w, x), te = n(x, w), le = u(I, C), ce = u(C, I), fe = v[oe], ge = v[oe + 1], Ae = i(I, U, R), Ue = i(C, W, X), be = ee + ce | 0, ve = q + le + p(be, ee) | 0;
        be = be + Ue | 0, ve = ve + Ae + p(be, Ue) | 0, be = be + ge | 0, ve = ve + fe + p(be, ge) | 0, be = be + V | 0, ve = ve + $ + p(be, V) | 0;
        var ze = te + z | 0, Qe = J + B + p(ze, te) | 0;
        q = R, ee = X, R = U, X = W, U = I, W = C, C = j + be | 0, I = S + ve + p(C, j) | 0, S = k, j = H, k = E, H = P, E = w, P = x, x = be + ze | 0, w = ve + Qe + p(x, be) | 0;
      }
      this._al = this._al + x | 0, this._bl = this._bl + P | 0, this._cl = this._cl + H | 0, this._dl = this._dl + j | 0, this._el = this._el + C | 0, this._fl = this._fl + W | 0, this._gl = this._gl + X | 0, this._hl = this._hl + ee | 0, this._ah = this._ah + w + p(this._al, x) | 0, this._bh = this._bh + E + p(this._bl, P) | 0, this._ch = this._ch + k + p(this._cl, H) | 0, this._dh = this._dh + S + p(this._dl, j) | 0, this._eh = this._eh + I + p(this._el, C) | 0, this._fh = this._fh + U + p(this._fl, W) | 0, this._gh = this._gh + R + p(this._gl, X) | 0, this._hh = this._hh + q + p(this._hl, ee) | 0;
    }, f.prototype._hash = function() {
      var c = g.allocUnsafe(64);
      function y(w, E, k) {
        c.writeInt32BE(w, k), c.writeInt32BE(E, k + 4);
      }
      return y(this._ah, this._al, 0), y(this._bh, this._bl, 8), y(this._ch, this._cl, 16), y(this._dh, this._dl, 24), y(this._eh, this._el, 32), y(this._fh, this._fl, 40), y(this._gh, this._gl, 48), y(this._hh, this._hl, 56), c;
    }, zi = f, zi;
  }
  var Ni, Ba;
  function hl() {
    if (Ba) return Ni;
    Ba = 1;
    var e = Re(), t = _s(), g = Vr(), v = Fe().Buffer, l = new Array(160);
    function f() {
      this.init(), this._w = l, g.call(this, 128, 112);
    }
    return e(f, t), f.prototype.init = function() {
      return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
    }, f.prototype._hash = function() {
      var i = v.allocUnsafe(48);
      function r(n, u, a) {
        i.writeInt32BE(n, a), i.writeInt32BE(u, a + 4);
      }
      return r(this._ah, this._al, 0), r(this._bh, this._bl, 8), r(this._ch, this._cl, 16), r(this._dh, this._dl, 24), r(this._eh, this._el, 32), r(this._fh, this._fl, 40), i;
    }, Ni = f, Ni;
  }
  var Oa;
  function dl() {
    if (Oa) return Ai.exports;
    Oa = 1;
    var e = Ai.exports = function(g) {
      g = g.toLowerCase();
      var v = e[g];
      if (!v) throw new Error(g + " is not supported (we accept pull requests)");
      return new v();
    };
    return e.sha = cl(), e.sha1 = ll(), e.sha224 = fl(), e.sha256 = ws(), e.sha384 = hl(), e.sha512 = _s(), Ai.exports;
  }
  var Hi, Ra;
  function pl() {
    if (Ra) return Hi;
    Ra = 1;
    var e = Fe().Buffer, t = vs().Transform, g = Ki().StringDecoder, v = Re();
    function l(n) {
      t.call(this), this.hashMode = typeof n == "string", this.hashMode ? this[n] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
    }
    v(l, t);
    var f = typeof Uint8Array < "u", i = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && ArrayBuffer.isView && (e.prototype instanceof Uint8Array || e.TYPED_ARRAY_SUPPORT);
    function r(n, u) {
      if (n instanceof e) return n;
      if (typeof n == "string") return e.from(n, u);
      if (i && ArrayBuffer.isView(n)) {
        if (n.byteLength === 0) return e.alloc(0);
        var a = e.from(n.buffer, n.byteOffset, n.byteLength);
        if (a.byteLength === n.byteLength) return a;
      }
      if (f && n instanceof Uint8Array || e.isBuffer(n) && n.constructor && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n)) return e.from(n);
      throw new TypeError('The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.');
    }
    return l.prototype.update = function(n, u, a) {
      var d = r(n, u), s = this._update(d);
      return this.hashMode ? this : (a && (s = this._toString(s, a)), s);
    }, l.prototype.setAutoPadding = function() {
    }, l.prototype.getAuthTag = function() {
      throw new Error("trying to get auth tag in unsupported state");
    }, l.prototype.setAuthTag = function() {
      throw new Error("trying to set auth tag in unsupported state");
    }, l.prototype.setAAD = function() {
      throw new Error("trying to set aad in unsupported state");
    }, l.prototype._transform = function(n, u, a) {
      var d;
      try {
        this.hashMode ? this._update(n) : this.push(this._update(n));
      } catch (s) {
        d = s;
      } finally {
        a(d);
      }
    }, l.prototype._flush = function(n) {
      var u;
      try {
        this.push(this.__final());
      } catch (a) {
        u = a;
      }
      n(u);
    }, l.prototype._finalOrDigest = function(n) {
      var u = this.__final() || e.alloc(0);
      return n && (u = this._toString(u, n, true)), u;
    }, l.prototype._toString = function(n, u, a) {
      if (this._decoder || (this._decoder = new g(u), this._encoding = u), this._encoding !== u) throw new Error("can\u2019t switch encodings");
      var d = this._decoder.write(n);
      return a && (d += this._decoder.end()), d;
    }, Hi = l, Hi;
  }
  var xi, Ua;
  function ml() {
    if (Ua) return xi;
    Ua = 1;
    var e = Re(), t = sl(), g = ul(), v = dl(), l = pl();
    function f(i) {
      l.call(this, "digest"), this._hash = i;
    }
    return e(f, l), f.prototype._update = function(i) {
      this._hash.update(i);
    }, f.prototype._final = function() {
      return this._hash.digest();
    }, xi = function(r) {
      return r = r.toLowerCase(), r === "md5" ? new t() : r === "rmd160" || r === "ripemd160" ? new g() : new f(v(r));
    }, xi;
  }
  var Li, za;
  function bl() {
    if (za) return Li;
    za = 1;
    var e = Fe().Buffer;
    function t(g) {
      if (g.length >= 255) throw new TypeError("Alphabet too long");
      for (var v = new Uint8Array(256), l = 0; l < v.length; l++) v[l] = 255;
      for (var f = 0; f < g.length; f++) {
        var i = g.charAt(f), r = i.charCodeAt(0);
        if (v[r] !== 255) throw new TypeError(i + " is ambiguous");
        v[r] = f;
      }
      var n = g.length, u = g.charAt(0), a = Math.log(n) / Math.log(256), d = Math.log(256) / Math.log(n);
      function s(c) {
        if ((Array.isArray(c) || c instanceof Uint8Array) && (c = e.from(c)), !e.isBuffer(c)) throw new TypeError("Expected Buffer");
        if (c.length === 0) return "";
        for (var y = 0, w = 0, E = 0, k = c.length; E !== k && c[E] === 0; ) E++, y++;
        for (var S = (k - E) * d + 1 >>> 0, I = new Uint8Array(S); E !== k; ) {
          for (var U = c[E], R = 0, q = S - 1; (U !== 0 || R < w) && q !== -1; q--, R++) U += 256 * I[q] >>> 0, I[q] = U % n >>> 0, U = U / n >>> 0;
          if (U !== 0) throw new Error("Non-zero carry");
          w = R, E++;
        }
        for (var x = S - w; x !== S && I[x] === 0; ) x++;
        for (var P = u.repeat(y); x < S; ++x) P += g.charAt(I[x]);
        return P;
      }
      function b(c) {
        if (typeof c != "string") throw new TypeError("Expected String");
        if (c.length === 0) return e.alloc(0);
        for (var y = 0, w = 0, E = 0; c[y] === u; ) w++, y++;
        for (var k = (c.length - y) * a + 1 >>> 0, S = new Uint8Array(k); y < c.length; ) {
          var I = c.charCodeAt(y);
          if (I > 255) return;
          var U = v[I];
          if (U === 255) return;
          for (var R = 0, q = k - 1; (U !== 0 || R < E) && q !== -1; q--, R++) U += n * S[q] >>> 0, S[q] = U % 256 >>> 0, U = U / 256 >>> 0;
          if (U !== 0) throw new Error("Non-zero carry");
          E = R, y++;
        }
        for (var x = k - E; x !== k && S[x] === 0; ) x++;
        var P = e.allocUnsafe(w + (k - x));
        P.fill(0, 0, w);
        for (var H = w; x !== k; ) P[H++] = S[x++];
        return P;
      }
      function p(c) {
        var y = b(c);
        if (y) return y;
        throw new Error("Non-base" + n + " character");
      }
      return {
        encode: s,
        decodeUnsafe: b,
        decode: p
      };
    }
    return Li = t, Li;
  }
  var Ci, Na;
  function gl() {
    if (Na) return Ci;
    Na = 1;
    var e = bl(), t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    return Ci = e(t), Ci;
  }
  var ji, Ha;
  function vl() {
    if (Ha) return ji;
    Ha = 1;
    var e = gl(), t = Fe().Buffer;
    return ji = function(g) {
      function v(r) {
        var n = g(r);
        return e.encode(t.concat([
          r,
          n
        ], r.length + 4));
      }
      function l(r) {
        var n = r.slice(0, -4), u = r.slice(-4), a = g(n);
        if (!(u[0] ^ a[0] | u[1] ^ a[1] | u[2] ^ a[2] | u[3] ^ a[3])) return n;
      }
      function f(r) {
        var n = e.decodeUnsafe(r);
        if (n) return l(n);
      }
      function i(r) {
        var n = e.decode(r), u = l(n);
        if (!u) throw new Error("Invalid checksum");
        return u;
      }
      return {
        encode: v,
        decode: i,
        decodeUnsafe: f
      };
    }, ji;
  }
  var qi, xa;
  function yl() {
    if (xa) return qi;
    xa = 1;
    var e = ml(), t = vl();
    function g(v) {
      var l = e("sha256").update(v).digest();
      return e("sha256").update(l).digest();
    }
    return qi = t(g), qi;
  }
  var Mi, La;
  function wl() {
    if (La) return Mi;
    La = 1;
    var e = [
      "buffer",
      "Buffer"
    ], t = yl();
    function g(i, r) {
      if (r !== void 0 && i[0] !== r) throw new Error("Invalid network version");
      if (i.length === 33) return {
        version: i[0],
        privateKey: i.slice(1, 33),
        compressed: false
      };
      if (i.length !== 34) throw new Error("Invalid WIF length");
      if (i[33] !== 1) throw new Error("Invalid compression flag");
      return {
        version: i[0],
        privateKey: i.slice(1, 33),
        compressed: true
      };
    }
    function v(i, r, n) {
      var u = new e(n ? 34 : 33);
      return u.writeUInt8(i, 0), r.copy(u, 1), n && (u[33] = 1), u;
    }
    function l(i, r) {
      return g(t.decode(i), r);
    }
    function f(i, r, n) {
      return typeof i == "number" ? t.encode(v(i, r, n)) : t.encode(v(i.version, i.privateKey, i.compressed));
    }
    return Mi = {
      decode: l,
      decodeRaw: g,
      encode: f,
      encodeRaw: v
    }, Mi;
  }
  var Ca;
  function _l() {
    if (Ca) return ct;
    Ca = 1;
    var e = [
      "buffer",
      "Buffer"
    ];
    Object.defineProperty(ct, "__esModule", {
      value: true
    }), ct.BIP32Factory = void 0;
    const t = Xc(), g = Yc(), v = Jc(), l = pt(), f = Va(), i = wl(), r = (0, v.base58check)(l.sha256), n = {
      encode: (a) => r.encode(Uint8Array.from(a)),
      decode: (a) => e.from(r.decode(a))
    };
    function u(a) {
      (0, g.testEcc)(a);
      const d = f.BufferN(32), s = f.compile({
        wif: f.UInt8,
        bip32: {
          public: f.UInt32,
          private: f.UInt32
        }
      }), b = {
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
      }, p = 2147483648, c = Math.pow(2, 31) - 1;
      function y(H) {
        return f.String(H) && H.match(/^(m\/)?(\d+'?\/)*\d+'?$/) !== null;
      }
      function w(H) {
        return f.UInt32(H) && H <= c;
      }
      function E(H) {
        return H.length === 32 ? H : H.slice(1, 33);
      }
      class k {
        constructor(j, C) {
          this.__D = j, this.__Q = C, this.lowR = false;
        }
        get publicKey() {
          return this.__Q === void 0 && (this.__Q = e.from(a.pointFromScalar(this.__D, true))), this.__Q;
        }
        get privateKey() {
          return this.__D;
        }
        sign(j, C) {
          if (!this.privateKey) throw new Error("Missing private key");
          if (C === void 0 && (C = this.lowR), C === false) return e.from(a.sign(j, this.privateKey));
          {
            let W = e.from(a.sign(j, this.privateKey));
            const X = e.alloc(32, 0);
            let ee = 0;
            for (; W[0] > 127; ) ee++, X.writeUIntLE(ee, 0, 6), W = e.from(a.sign(j, this.privateKey, X));
            return W;
          }
        }
        signSchnorr(j) {
          if (!this.privateKey) throw new Error("Missing private key");
          if (!a.signSchnorr) throw new Error("signSchnorr not supported by ecc library");
          return e.from(a.signSchnorr(j, this.privateKey));
        }
        verify(j, C) {
          return a.verify(j, this.publicKey, C);
        }
        verifySchnorr(j, C) {
          if (!a.verifySchnorr) throw new Error("verifySchnorr not supported by ecc library");
          return a.verifySchnorr(j, this.publicKey.subarray(1, 33), C);
        }
      }
      class S extends k {
        constructor(j, C, W, X, ee = 0, re = 0, ue = 0) {
          super(j, C), this.chainCode = W, this.network = X, this.__DEPTH = ee, this.__INDEX = re, this.__PARENT_FINGERPRINT = ue, f(s, X);
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
          return t.hash160(this.publicKey);
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
          return x(this.publicKey, this.chainCode, this.network, this.depth, this.index, this.parentFingerprint);
        }
        toBase58() {
          const j = this.network, C = this.isNeutered() ? j.bip32.public : j.bip32.private, W = e.allocUnsafe(78);
          return W.writeUInt32BE(C, 0), W.writeUInt8(this.depth, 4), W.writeUInt32BE(this.parentFingerprint, 5), W.writeUInt32BE(this.index, 9), this.chainCode.copy(W, 13), this.isNeutered() ? this.publicKey.copy(W, 45) : (W.writeUInt8(0, 45), this.privateKey.copy(W, 46)), n.encode(W);
        }
        toWIF() {
          if (!this.privateKey) throw new TypeError("Missing private key");
          return i.encode(this.network.wif, this.privateKey, true);
        }
        derive(j) {
          f(f.UInt32, j);
          const C = j >= p, W = e.allocUnsafe(37);
          if (C) {
            if (this.isNeutered()) throw new TypeError("Missing private key for hardened child key");
            W[0] = 0, this.privateKey.copy(W, 1), W.writeUInt32BE(j, 33);
          } else this.publicKey.copy(W, 0), W.writeUInt32BE(j, 33);
          const X = t.hmacSHA512(this.chainCode, W), ee = X.slice(0, 32), re = X.slice(32);
          if (!a.isPrivate(ee)) return this.derive(j + 1);
          let ue;
          if (this.isNeutered()) {
            const O = e.from(a.pointAddScalar(this.publicKey, ee, true));
            if (O === null) return this.derive(j + 1);
            ue = x(O, re, this.network, this.depth + 1, j, this.fingerprint.readUInt32BE(0));
          } else {
            const O = e.from(a.privateAdd(this.privateKey, ee));
            if (O == null) return this.derive(j + 1);
            ue = R(O, re, this.network, this.depth + 1, j, this.fingerprint.readUInt32BE(0));
          }
          return ue;
        }
        deriveHardened(j) {
          return f(w, j), this.derive(j + p);
        }
        derivePath(j) {
          f(y, j);
          let C = j.split("/");
          if (C[0] === "m") {
            if (this.parentFingerprint) throw new TypeError("Expected master, got child");
            C = C.slice(1);
          }
          return C.reduce((W, X) => {
            let ee;
            return X.slice(-1) === "'" ? (ee = parseInt(X.slice(0, -1), 10), W.deriveHardened(ee)) : (ee = parseInt(X, 10), W.derive(ee));
          }, this);
        }
        tweak(j) {
          return this.privateKey ? this.tweakFromPrivateKey(j) : this.tweakFromPublicKey(j);
        }
        tweakFromPublicKey(j) {
          const C = E(this.publicKey);
          if (!a.xOnlyPointAddTweak) throw new Error("xOnlyPointAddTweak not supported by ecc library");
          const W = a.xOnlyPointAddTweak(C, j);
          if (!W || W.xOnlyPubkey === null) throw new Error("Cannot tweak public key!");
          const X = e.from([
            W.parity === 0 ? 2 : 3
          ]), ee = e.concat([
            X,
            W.xOnlyPubkey
          ]);
          return new k(void 0, ee);
        }
        tweakFromPrivateKey(j) {
          const C = this.publicKey[0] === 3 || this.publicKey[0] === 4 && (this.publicKey[64] & 1) === 1, W = (() => {
            if (C) {
              if (a.privateNegate) return a.privateNegate(this.privateKey);
              throw new Error("privateNegate not supported by ecc library");
            } else return this.privateKey;
          })(), X = a.privateAdd(W, j);
          if (!X) throw new Error("Invalid tweaked private key!");
          return new k(e.from(X), void 0);
        }
      }
      function I(H, j) {
        const C = n.decode(H);
        if (C.length !== 78) throw new TypeError("Invalid buffer length");
        j = j || b;
        const W = C.readUInt32BE(0);
        if (W !== j.bip32.private && W !== j.bip32.public) throw new TypeError("Invalid network version");
        const X = C[4], ee = C.readUInt32BE(5);
        if (X === 0 && ee !== 0) throw new TypeError("Invalid parent fingerprint");
        const re = C.readUInt32BE(9);
        if (X === 0 && re !== 0) throw new TypeError("Invalid index");
        const ue = C.slice(13, 45);
        let O;
        if (W === j.bip32.private) {
          if (C.readUInt8(45) !== 0) throw new TypeError("Invalid private key");
          const F = C.slice(46, 78);
          O = R(F, ue, j, X, re, ee);
        } else {
          const F = C.slice(45, 78);
          O = x(F, ue, j, X, re, ee);
        }
        return O;
      }
      function U(H, j, C) {
        return R(H, j, C);
      }
      function R(H, j, C, W, X, ee) {
        if (f({
          privateKey: d,
          chainCode: d
        }, {
          privateKey: H,
          chainCode: j
        }), C = C || b, !a.isPrivate(H)) throw new TypeError("Private key not in range [1, n)");
        return new S(H, void 0, j, C, W, X, ee);
      }
      function q(H, j, C) {
        return x(H, j, C);
      }
      function x(H, j, C, W, X, ee) {
        if (f({
          publicKey: f.BufferN(33),
          chainCode: d
        }, {
          publicKey: H,
          chainCode: j
        }), C = C || b, !a.isPoint(H)) throw new TypeError("Point is not on the curve");
        return new S(void 0, H, j, C, W, X, ee);
      }
      function P(H, j) {
        if (f(f.Buffer, H), H.length < 16) throw new TypeError("Seed should be at least 128 bits");
        if (H.length > 64) throw new TypeError("Seed should be at most 512 bits");
        j = j || b;
        const C = t.hmacSHA512(e.from("Bitcoin seed", "utf8"), H), W = C.slice(0, 32), X = C.slice(32);
        return U(W, X, j);
      }
      return {
        fromSeed: P,
        fromBase58: I,
        fromPublicKey: q,
        fromPrivateKey: U
      };
    }
    return ct.BIP32Factory = u, ct;
  }
  var ja;
  Il = function() {
    return ja || (ja = 1, function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.BIP32Factory = e.default = void 0;
      var t = _l();
      Object.defineProperty(e, "default", {
        enumerable: true,
        get: function() {
          return t.BIP32Factory;
        }
      }), Object.defineProperty(e, "BIP32Factory", {
        enumerable: true,
        get: function() {
          return t.BIP32Factory;
        }
      });
    }(oi)), oi;
  };
})();
export {
  __tla,
  kl as a,
  Sl as b,
  Il as c,
  Tl as e,
  ir as r
};
