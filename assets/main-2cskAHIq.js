import { r as M, g as O, a as $, b as _, c as N, e as P, __tla as __tla_0 } from "./vendor-kj5D0nNU.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function q(n, e) {
    for (var o = 0; o < e.length; o++) {
      const r = e[o];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const t in r) if (t !== "default" && !(t in n)) {
          const s = Object.getOwnPropertyDescriptor(r, t);
          s && Object.defineProperty(n, t, s.get ? s : {
            enumerable: true,
            get: () => r[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) r(t);
    new MutationObserver((t) => {
      for (const s of t) if (s.type === "childList") for (const c of s.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function o(t) {
      const s = {};
      return t.integrity && (s.integrity = t.integrity), t.referrerPolicy && (s.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? s.credentials = "include" : t.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function r(t) {
      if (t.ep) return;
      t.ep = true;
      const s = o(t);
      fetch(t.href, s);
    }
  })();
  var f = M();
  const K = O(f), I = q({
    __proto__: null,
    default: K
  }, [
    f
  ]), a = f.Buffer;
  typeof window < "u" && (window.bufferModule = I, window.Buffer = a, console.log("Buffer\u68C0\u67E5: ", {
    exists: !!a,
    alloc: typeof a.alloc == "function",
    from: typeof a.from == "function"
  }));
  typeof window < "u" && (window.Buffer = f.Buffer, window.Buffer && !window.Buffer.alloc && (typeof f.Buffer.alloc == "function" ? window.Buffer.alloc = f.Buffer.alloc : window.Buffer.alloc = function(e, o, r) {
    const t = new f.Buffer(e);
    return o !== void 0 && (typeof r == "string" ? t.fill(o, r) : t.fill(o)), t;
  }), [
    "from",
    "isBuffer",
    "concat",
    "allocUnsafe"
  ].forEach((e) => {
    window.Buffer && !window.Buffer[e] && f.Buffer[e] && (window.Buffer[e] = f.Buffer[e]);
  }), window.Buffer && !window.Buffer.isBuffer && (window.Buffer.isBuffer = function(e) {
    return e != null && e.constructor !== null && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
  }), window.Buffer && f.Buffer.INSPECT_MAX_BYTES !== void 0 && (window.Buffer.INSPECT_MAX_BYTES = f.Buffer.INSPECT_MAX_BYTES), window.buffer = I);
  typeof window < "u" && (window.Buffer = f.Buffer, window.Buffer || (window.Buffer = f.Buffer), window.global = window);
  typeof window < "u" && !window.process && (window.process = {
    env: {}
  });
  var m = $(), i = _(), W = N();
  typeof window < "u" && (window.Buffer = f.Buffer, window.global = window, window.process || (window.process = {
    env: {}
  }), console.log("\u5728main.js\u4E2D\u6DFB\u52A0\u7684Buffer:", {
    isBuffer: typeof window.Buffer.isBuffer == "function",
    alloc: typeof window.Buffer.alloc == "function",
    from: typeof window.Buffer.from == "function"
  }));
  console.log("Buffer \u65B9\u6CD5\u68C0\u67E5:", {
    isBuffer: typeof window.Buffer.isBuffer == "function",
    alloc: typeof window.Buffer.alloc == "function",
    from: typeof window.Buffer.from == "function",
    concat: typeof window.Buffer.concat == "function"
  });
  i.initEccLib(P);
  const F = W.BIP32Factory(P), b = document.getElementById("mnemonicInput"), j = document.getElementById("generateMnemonic"), R = document.getElementById("mnemonicLang"), w = document.getElementById("usePassphrase"), v = document.getElementById("passphraseGroup"), L = document.getElementById("passphrase"), y = document.getElementById("derivationPathPreset"), B = document.getElementById("customPath"), X = document.getElementById("addressCount"), Y = document.getElementById("deriveAddresses"), D = document.getElementById("resultSection"), h = document.getElementById("addressResults"), l = document.getElementById("copyResults"), p = document.getElementById("errorAlert");
  function u(n) {
    p.textContent = n, p.classList.remove("d-none"), setTimeout(() => {
      p.classList.add("d-none");
    }, 5e3);
  }
  function S() {
    p.classList.add("d-none");
  }
  j.addEventListener("click", () => {
    try {
      const n = R.value, e = m.generateMnemonic(256);
      b.value = e, S();
    } catch (n) {
      u(`\u751F\u6210\u52A9\u8BB0\u8BCD\u5931\u8D25: ${n.message}`);
    }
  });
  w.addEventListener("change", () => {
    w.checked ? v.classList.remove("d-none") : (v.classList.add("d-none"), L.value = "");
  });
  y.addEventListener("change", () => {
    y.value === "custom" ? B.classList.remove("d-none") : B.classList.add("d-none");
  });
  l.addEventListener("click", () => {
    const e = Array.from(h.querySelectorAll("tr")).map((o) => Array.from(o.querySelectorAll("td")).map((t) => t.textContent.trim()).join("	")).join(`
`);
    navigator.clipboard.writeText(e).then(() => {
      const o = l.textContent;
      l.textContent = "\u590D\u5236\u6210\u529F!", setTimeout(() => {
        l.textContent = o;
      }, 2e3);
    });
  });
  Y.addEventListener("click", async () => {
    S();
    try {
      const n = b.value.trim();
      if (!n) {
        u("\u8BF7\u8F93\u5165\u52A9\u8BB0\u8BCD");
        return;
      }
      if (!m.validateMnemonic(n)) {
        u("\u65E0\u6548\u7684\u52A9\u8BB0\u8BCD\u683C\u5F0F");
        return;
      }
      let e = y.value;
      if (e === "custom" && (e = B.value.trim(), !e || !e.startsWith("m/"))) {
        u("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u6D3E\u751F\u8DEF\u5F84\uFF0C\u4F8B\u5982 m/44'/0'/0'/0");
        return;
      }
      const o = w.checked ? L.value : "", r = parseInt(X.value);
      if (isNaN(r) || r < 1 || r > 1e3) {
        u("\u8BF7\u8F93\u51651-1000\u4E4B\u95F4\u7684\u5730\u5740\u6570\u91CF");
        return;
      }
      const t = await m.mnemonicToSeed(n, o), s = F.fromSeed(t), c = e.endsWith("/") ? e.slice(0, -1) : e, x = c.lastIndexOf("/"), T = c.substring(0, x);
      h.innerHTML = "";
      const A = G(e);
      for (let d = 0; d < r; d++) {
        const g = `${T}/${d}`, k = s.derivePath(g), C = H(k, A), E = document.createElement("tr");
        E.innerHTML = `
        <td>${d}</td>
        <td>${C}</td>
        <td>${g}</td>
      `, h.appendChild(E);
      }
      D.classList.remove("d-none");
    } catch (n) {
      u(`\u6D3E\u751F\u5730\u5740\u5931\u8D25: ${n.message}`), console.error(n);
    }
  });
  function G(n) {
    return n.startsWith("m/44'/0'") ? "p2pkh" : n.startsWith("m/49'/0'") ? "p2sh-p2wpkh" : n.startsWith("m/84'/0'") ? "p2wpkh" : n.startsWith("m/86'/0'") ? "p2tr" : "p2wpkh";
  }
  function H(n, e) {
    const o = n.publicKey;
    switch (e) {
      case "p2pkh":
        return i.payments.p2pkh({
          pubkey: o
        }).address;
      case "p2sh-p2wpkh":
        return i.payments.p2sh({
          redeem: i.payments.p2wpkh({
            pubkey: o
          })
        }).address;
      case "p2wpkh":
        return i.payments.p2wpkh({
          pubkey: o
        }).address;
      case "p2tr":
        try {
          const r = o.slice(1, 33);
          return i.payments.p2tr({
            internalPubkey: r
          }).address;
        } catch (r) {
          return console.error("Taproot\u5730\u5740\u751F\u6210\u5931\u8D25:", r), `Taproot\u6682\u4E0D\u652F\u6301 (${r.message})`;
        }
      default:
        throw new Error(`\u4E0D\u652F\u6301\u7684\u5730\u5740\u7C7B\u578B: ${e}`);
    }
  }
});
