import { r as S, a as T, b as C, c as O, e as w, __tla as __tla_0 } from "./vendor-DlwNRsAr.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver((r) => {
      for (const n of r) if (n.type === "childList") for (const c of n.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function o(r) {
      const n = {};
      return r.integrity && (n.integrity = r.integrity), r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? n.credentials = "include" : r.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n;
    }
    function s(r) {
      if (r.ep) return;
      r.ep = true;
      const n = o(r);
      fetch(r.href, n);
    }
  })();
  var B = S();
  window.Buffer = B.Buffer;
  var m = T(), a = C(), q = O();
  typeof window < "u" && (window.Buffer = B.Buffer, window.global = window);
  a.initEccLib(w);
  const M = q.BIP32Factory(w), L = document.getElementById("mnemonicInput"), K = document.getElementById("generateMnemonic"), W = document.getElementById("mnemonicLang"), p = document.getElementById("usePassphrase"), E = document.getElementById("passphraseGroup"), I = document.getElementById("passphrase"), f = document.getElementById("derivationPathPreset"), h = document.getElementById("customPath"), N = document.getElementById("addressCount"), F = document.getElementById("deriveAddresses"), R = document.getElementById("resultSection"), y = document.getElementById("addressResults"), u = document.getElementById("copyResults"), l = document.getElementById("errorAlert");
  function d(e) {
    l.textContent = e, l.classList.remove("d-none"), setTimeout(() => {
      l.classList.add("d-none");
    }, 5e3);
  }
  function P() {
    l.classList.add("d-none");
  }
  K.addEventListener("click", () => {
    try {
      const e = W.value, t = m.generateMnemonic(256);
      L.value = t, P();
    } catch (e) {
      d(`\u751F\u6210\u52A9\u8BB0\u8BCD\u5931\u8D25: ${e.message}`);
    }
  });
  p.addEventListener("change", () => {
    p.checked ? E.classList.remove("d-none") : (E.classList.add("d-none"), I.value = "");
  });
  f.addEventListener("change", () => {
    f.value === "custom" ? h.classList.remove("d-none") : h.classList.add("d-none");
  });
  u.addEventListener("click", () => {
    const t = Array.from(y.querySelectorAll("tr")).map((o) => Array.from(o.querySelectorAll("td")).map((r) => r.textContent.trim()).join("	")).join(`
`);
    navigator.clipboard.writeText(t).then(() => {
      const o = u.textContent;
      u.textContent = "\u590D\u5236\u6210\u529F!", setTimeout(() => {
        u.textContent = o;
      }, 2e3);
    });
  });
  F.addEventListener("click", async () => {
    P();
    try {
      const e = L.value.trim();
      if (!e) {
        d("\u8BF7\u8F93\u5165\u52A9\u8BB0\u8BCD");
        return;
      }
      if (!m.validateMnemonic(e)) {
        d("\u65E0\u6548\u7684\u52A9\u8BB0\u8BCD\u683C\u5F0F");
        return;
      }
      let t = f.value;
      if (t === "custom" && (t = h.value.trim(), !t || !t.startsWith("m/"))) {
        d("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u6D3E\u751F\u8DEF\u5F84\uFF0C\u4F8B\u5982 m/44'/0'/0'/0");
        return;
      }
      const o = p.checked ? I.value : "", s = parseInt(N.value);
      if (isNaN(s) || s < 1 || s > 1e3) {
        d("\u8BF7\u8F93\u51651-1000\u4E4B\u95F4\u7684\u5730\u5740\u6570\u91CF");
        return;
      }
      const r = await m.mnemonicToSeed(e, o), n = M.fromSeed(r), c = t.endsWith("/") ? t.slice(0, -1) : t, b = c.lastIndexOf("/"), x = c.substring(0, b);
      y.innerHTML = "";
      const k = j(t);
      for (let i = 0; i < s; i++) {
        const g = `${x}/${i}`, $ = n.derivePath(g), A = G($, k), v = document.createElement("tr");
        v.innerHTML = `
        <td>${i}</td>
        <td>${A}</td>
        <td>${g}</td>
      `, y.appendChild(v);
      }
      R.classList.remove("d-none");
    } catch (e) {
      d(`\u6D3E\u751F\u5730\u5740\u5931\u8D25: ${e.message}`), console.error(e);
    }
  });
  function j(e) {
    return e.startsWith("m/44'/0'") ? "p2pkh" : e.startsWith("m/49'/0'") ? "p2sh-p2wpkh" : e.startsWith("m/84'/0'") ? "p2wpkh" : e.startsWith("m/86'/0'") ? "p2tr" : "p2wpkh";
  }
  function G(e, t) {
    const o = e.publicKey;
    switch (t) {
      case "p2pkh":
        return a.payments.p2pkh({
          pubkey: o
        }).address;
      case "p2sh-p2wpkh":
        return a.payments.p2sh({
          redeem: a.payments.p2wpkh({
            pubkey: o
          })
        }).address;
      case "p2wpkh":
        return a.payments.p2wpkh({
          pubkey: o
        }).address;
      case "p2tr":
        try {
          const s = o.slice(1, 33);
          return a.payments.p2tr({
            internalPubkey: s
          }).address;
        } catch (s) {
          return console.error("Taproot\u5730\u5740\u751F\u6210\u5931\u8D25:", s), `Taproot\u6682\u4E0D\u652F\u6301 (${s.message})`;
        }
      default:
        throw new Error(`\u4E0D\u652F\u6301\u7684\u5730\u5740\u7C7B\u578B: ${t}`);
    }
  }
});
