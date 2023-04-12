/**
 * Minified by jsDelivr using Terser v5.7.1.
 * Original file: /npm/js-base64@3.7.2/base64.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function(t, n) {
	var r, e;
	"object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define &&
		define.amd ? define(n) : (r = t.Base64, (e = n()).noConflict = function() {
			return t.Base64 = r, e
		}, t.Meteor && (Base64 = e), t.Base64 = e)
}("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global :
	this, (function() {
		"use strict";
		var t, n = "3.7.2",
			r = "function" == typeof atob,
			e = "function" == typeof btoa,
			o = "function" == typeof Buffer,
			u = "function" == typeof TextDecoder ? new TextDecoder : void 0,
			i = "function" == typeof TextEncoder ? new TextEncoder : void 0,
			f = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
			c = (t = {}, f.forEach((function(n, r) {
				return t[n] = r
			})), t),
			a = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
			d = String.fromCharCode.bind(String),
			s = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function(t, n) {
				return void 0 === n && (n = function(t) {
					return t
				}), new Uint8Array(Array.prototype.slice.call(t, 0).map(n))
			},
			l = function(t) {
				return t.replace(/=/g, "").replace(/[+\/]/g, (function(t) {
					return "+" == t ? "-" : "_"
				}))
			},
			h = function(t) {
				return t.replace(/[^A-Za-z0-9\+\/]/g, "")
			},
			p = function(t) {
				for (var n, r, e, o, u = "", i = t.length % 3, c = 0; c < t.length;) {
					if ((r = t.charCodeAt(c++)) > 255 || (e = t.charCodeAt(c++)) > 255 || (o = t.charCodeAt(c++)) >
						255) throw new TypeError("invalid character found");
					u += f[(n = r << 16 | e << 8 | o) >> 18 & 63] + f[n >> 12 & 63] + f[n >> 6 & 63] + f[63 & n]
				}
				return i ? u.slice(0, i - 3) + "===".substring(i) : u
			},
			y = e ? function(t) {
				return btoa(t)
			} : o ? function(t) {
				return Buffer.from(t, "binary").toString("base64")
			} : p,
			A = o ? function(t) {
				return Buffer.from(t).toString("base64")
			} : function(t) {
				for (var n = [], r = 0, e = t.length; r < e; r += 4096) n.push(d.apply(null, t.subarray(r, r +
					4096)));
				return y(n.join(""))
			},
			b = function(t, n) {
				return void 0 === n && (n = !1), n ? l(A(t)) : A(t)
			},
			g = function(t) {
				if (t.length < 2) return (n = t.charCodeAt(0)) < 128 ? t : n < 2048 ? d(192 | n >>> 6) + d(128 |
					63 & n) : d(224 | n >>> 12 & 15) + d(128 | n >>> 6 & 63) + d(128 | 63 & n);
				var n = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
				return d(240 | n >>> 18 & 7) + d(128 | n >>> 12 & 63) + d(128 | n >>> 6 & 63) + d(128 | 63 & n)
			},
			B = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
			x = function(t) {
				return t.replace(B, g)
			},
			C = o ? function(t) {
				return Buffer.from(t, "utf8").toString("base64")
			} : i ? function(t) {
				return A(i.encode(t))
			} : function(t) {
				return y(x(t))
			},
			m = function(t, n) {
				return void 0 === n && (n = !1), n ? l(C(t)) : C(t)
			},
			v = function(t) {
				return m(t, !0)
			},
			U = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
			F = function(t) {
				switch (t.length) {
					case 4:
						var n = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(
							2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
						return d(55296 + (n >>> 10)) + d(56320 + (1023 & n));
					case 3:
						return d((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
					default:
						return d((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
				}
			},
			w = function(t) {
				return t.replace(U, F)
			},
			S = function(t) {
				if (t = t.replace(/\s+/g, ""), !a.test(t)) throw new TypeError("malformed base64.");
				t += "==".slice(2 - (3 & t.length));
				for (var n, r, e, o = "", u = 0; u < t.length;) n = c[t.charAt(u++)] << 18 | c[t.charAt(u++)] <<
					12 | (r = c[t.charAt(u++)]) << 6 | (e = c[t.charAt(u++)]), o += 64 === r ? d(n >> 16 & 255) :
					64 === e ? d(n >> 16 & 255, n >> 8 & 255) : d(n >> 16 & 255, n >> 8 & 255, 255 & n);
				return o
			},
			E = r ? function(t) {
				return atob(h(t))
			} : o ? function(t) {
				return Buffer.from(t, "base64").toString("binary")
			} : S,
			D = o ? function(t) {
				return s(Buffer.from(t, "base64"))
			} : function(t) {
				return s(E(t), (function(t) {
					return t.charCodeAt(0)
				}))
			},
			R = function(t) {
				return D(T(t))
			},
			z = o ? function(t) {
				return Buffer.from(t, "base64").toString("utf8")
			} : u ? function(t) {
				return u.decode(D(t))
			} : function(t) {
				return w(E(t))
			},
			T = function(t) {
				return h(t.replace(/[-_]/g, (function(t) {
					return "-" == t ? "+" : "/"
				})))
			},
			Z = function(t) {
				return z(T(t))
			},
			j = function(t) {
				return {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			},
			I = function() {
				var t = function(t, n) {
					return Object.defineProperty(String.prototype, t, j(n))
				};
				t("fromBase64", (function() {
					return Z(this)
				})), t("toBase64", (function(t) {
					return m(this, t)
				})), t("toBase64URI", (function() {
					return m(this, !0)
				})), t("toBase64URL", (function() {
					return m(this, !0)
				})), t("toUint8Array", (function() {
					return R(this)
				}))
			},
			O = function() {
				var t = function(t, n) {
					return Object.defineProperty(Uint8Array.prototype, t, j(n))
				};
				t("toBase64", (function(t) {
					return b(this, t)
				})), t("toBase64URI", (function() {
					return b(this, !0)
				})), t("toBase64URL", (function() {
					return b(this, !0)
				}))
			},
			P = {
				version: n,
				VERSION: "3.7.2",
				atob: E,
				atobPolyfill: S,
				btoa: y,
				btoaPolyfill: p,
				fromBase64: Z,
				toBase64: m,
				encode: m,
				encodeURI: v,
				encodeURL: v,
				utob: x,
				btou: w,
				decode: Z,
				isValid: function(t) {
					if ("string" != typeof t) return !1;
					var n = t.replace(/\s+/g, "").replace(/={0,2}$/, "");
					return !/[^\s0-9a-zA-Z\+/]/.test(n) || !/[^\s0-9a-zA-Z\-_]/.test(n)
				},
				fromUint8Array: b,
				toUint8Array: R,
				extendString: I,
				extendUint8Array: O,
				extendBuiltins: function() {
					I(), O()
				},
				Base64: {}
			};
		return Object.keys(P).forEach((function(t) {
			return P.Base64[t] = P[t]
		})), P
	}));
//# sourceMappingURL=/sm/79de78edcfa94236e4c8354f91262971e185c3633bb865b6fc17942e93a40207.map
