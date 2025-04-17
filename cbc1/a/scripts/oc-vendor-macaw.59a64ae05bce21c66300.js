! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3ca9da9e-17c4-4eab-8ced-e217de8928ac", e._sentryDebugIdIdentifier = "sentry-dbid-3ca9da9e-17c4-4eab-8ced-e217de8928ac")
    } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
    "_sentryBundlerPluginAppKey:ocelot": !0,
    scopeId: "scope-ocelot",
    release: "ocelot@7f8a802d220addea69a5e51a4d947ce80836be00"
});
var _global = "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "ocelot@7f8a802d220addea69a5e51a4d947ce80836be00"
}, (globalThis.__LOADABLE_LOADED_CHUNKS__ = globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6413], {
        35152: function(e, t, n) {
            var r;
            r = (e, t) => (() => {
                var r = {
                        665: function(e) {
                            e.exports = (() => {
                                "use strict";
                                var e = {
                                        d: (t, n) => {
                                            for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                                                enumerable: !0,
                                                get: n[r]
                                            })
                                        },
                                        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                                        r: e => {
                                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                                value: "Module"
                                            }), Object.defineProperty(e, "__esModule", {
                                                value: !0
                                            })
                                        }
                                    },
                                    t = {};
                                e.r(t), e.d(t, {
                                    detectAdsBlocked: () => n,
                                    getCdpSegments: () => u,
                                    getCmpData: () => g,
                                    getDmpSegments: () => p,
                                    getFeedCookie: () => i,
                                    getPPID: () => o,
                                    getUserCookie: () => a,
                                    getUserPersonalisation: () => l,
                                    insertScripts: () => y,
                                    setPersonalisedTargeting: () => f
                                });
                                const n = () => !!((() => {
                                        const e = (() => {
                                            const e = document.createElement("div");
                                            return e.setAttribute("class", "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-text adSense adBlock adContent adBanner"), e.setAttribute("style", "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"), e
                                        })();
                                        window.document.body.append(e);
                                        const t = (e => {
                                            if (null === e.offsetParent || 0 == e.offsetHeight || 0 == e.offsetLeft || 0 == e.offsetTop || 0 == e.offsetWidth || 0 == e.clientHeight || 0 == e.clientWidth) return !0;
                                            if (void 0 !== window.getComputedStyle) {
                                                const t = window.getComputedStyle(e);
                                                if (t && ("none" == t.getPropertyValue("display") || "hidden" == t.getPropertyValue("visibility"))) return !0
                                            }
                                            return !1
                                        })(e);
                                        return e.remove(), t
                                    })() || (() => {
                                        let e = !1;
                                        return document.querySelectorAll("style").forEach((t => {
                                            e = !!t.innerText.includes(":root topadblock")
                                        })), e
                                    })() || "object" == typeof window.navigator.brave && void 0 === window.googletag._loaded_),
                                    r = "cbc_ppid",
                                    o = async () => {
                                        const e = a(),
                                            t = i(r);
                                        return "" !== e.id && e !== t && (e => {
                                            const t = new Date;
                                            t.setTime(t.getTime() + 31536e6);
                                            const n = `; expires=${t.toUTCString()}`;
                                            window.document.cookie = `${r}=${e}${n}; path=/; domain=.cbc.ca`
                                        })(e.id), "" !== e.id ? await (async e => {
                                            if (null !== ((window.crypto.subtle || {}).digest || null)) {
                                                const t = (new TextEncoder).encode(e),
                                                    n = await window.crypto.subtle.digest("SHA-256", t);
                                                return Array.from(new Uint8Array(n)).map((e => e.toString(16).padStart(2, "0"))).join("")
                                            }
                                            return null
                                        })(e.id) : null
                                    },
                                    i = e => {
                                        const t = window.document.cookie.split(";"),
                                            n = {
                                                name: "",
                                                id: ""
                                            };
                                        return t.forEach((t => {
                                            const r = t.split("=");
                                            if (r[0] && r[0].trim() === e) return n.name = r[0].trim(), n.id = r[1].trim(), n
                                        })), n
                                    },
                                    a = () => {
                                        const e = ["cbc_plus", r, "cbc_visitor"];
                                        for (let t = 0; t < e.length; t++) {
                                            const n = i(e[t]);
                                            if ("" !== n.id) return n
                                        }
                                        return {
                                            name: "",
                                            id: ""
                                        }
                                    },
                                    s = "personaliz-CbNGLdPX",
                                    c = "personaliz-rT2hmC9K",
                                    d = {
                                        purposes: {
                                            "personaliz-CbNGLdPX": {
                                                enabled: !0
                                            },
                                            "personaliz-rT2hmC9K": {
                                                enabled: !0
                                            }
                                        },
                                        vendors: {
                                            vendor: {
                                                id: "",
                                                enabled: !0
                                            }
                                        }
                                    },
                                    l = () => {
                                        const e = {
                                            cmpData: {
                                                cmpOptIn: !0,
                                                contentOptIn: !0,
                                                userStatus: d
                                            },
                                            cdpSegments: [],
                                            dmpSegments: []
                                        };
                                        e.cmpData = g();
                                        const t = e.cmpData.cmpOptIn,
                                            n = e.cmpData.contentOptIn;
                                        return t && n ? (e.cdpSegments = u(), e.dmpSegments = p()) : t || window.googletag && (window.googletag.setConfig = window.googletag.setConfig || [], "function" == typeof window.googletag.setConfig && window.googletag.setConfig({
                                            privacyTreatments: {
                                                treatments: ["disablePersonalization"]
                                            }
                                        })), e
                                    },
                                    p = () => {
                                        let e = [];
                                        const t = window.lotame_10205 || {};
                                        return t.getAudiences = t.getAudiences || [], "function" == typeof t.getAudiences ? (e = t.getAudiences(), e) : e
                                    },
                                    u = () => {
                                        let e = [];
                                        const t = window.blueConicClient || {};
                                        if (t.getSegments = t.getSegments || [], "function" == typeof t.getSegments) {
                                            const n = [];
                                            return t.getSegments().forEach((e => {
                                                n.push(e.id)
                                            })), e = n, e
                                        }
                                        return e
                                    },
                                    g = () => {
                                        window.Didomi = window.Didomi || {}, window.Didomi.getCurrentUserStatus = window.Didomi.getCurrentUserStatus || void 0;
                                        const e = {
                                            cmpOptIn: !0,
                                            contentOptIn: !0,
                                            userStatus: d
                                        };
                                        if (void 0 !== window.Didomi.getCurrentUserStatus) {
                                            const t = window.Didomi.getCurrentUserStatus();
                                            e.userStatus = t;
                                            const n = t.purposes,
                                                r = n[s].enabled,
                                                o = n[c].enabled;
                                            e.contentOptIn = o;
                                            const i = Object.values(t.vendors);
                                            let a = !0;
                                            if (r)
                                                for (const e of i) {
                                                    const t = window.Didomi.getVendorById(`c:${e.id}`);
                                                    if (t.legIntPurposeIds && t.legIntPurposeIds.includes(s) && !e.enabled) {
                                                        if (!o && !t.legIntPurposeIds.includes(c)) {
                                                            a = !1;
                                                            break
                                                        }
                                                        if (o) {
                                                            a = !1;
                                                            break
                                                        }
                                                    }
                                                }
                                            e.cmpOptIn = r && a
                                        }
                                        return e
                                    },
                                    f = (e, t) => {
                                        const {
                                            cdpSegments: n,
                                            dmpSegments: r
                                        } = e, o = i("ios_a_p");
                                        if (!new URLSearchParams(t).get("ios_a_p") && "" === o.id) {
                                            const e = r.concat(n);
                                            e.length > 0 && window.googletag && window.googletag.pubadsReady && window.googletag.pubads().setTargeting("audienceList", e)
                                        }
                                    },
                                    b = [{
                                        elementType: "link",
                                        relType: "preconnect",
                                        scriptName: "googleTagServicesPreconnect",
                                        scriptUrl: "https://www.googletagservices.com",
                                        loadMode: "crossorigin"
                                    }, {
                                        elementType: "link",
                                        relType: "dns-prefetch",
                                        scriptName: "googleTagServicesPrefetch",
                                        scriptUrl: "https://www.googletagservices.com",
                                        loadMode: "crossorigin"
                                    }, {
                                        elementType: "link",
                                        relType: "preconnect",
                                        scriptName: "adservicePreconnect",
                                        scriptUrl: "https://adservice.google.ca",
                                        loadMode: "crossorigin"
                                    }, {
                                        elementType: "link",
                                        relType: "dns-prefetch",
                                        scriptName: "adservicePrefetch",
                                        scriptUrl: "https://adservice.google.ca",
                                        loadMode: "crossorigin"
                                    }, {
                                        elementType: "link",
                                        relType: "preconnect",
                                        scriptName: "pageadPreconnect",
                                        scriptUrl: "https://pagead2.googlesyndication.com",
                                        loadMode: "crossorigin"
                                    }, {
                                        elementType: "link",
                                        relType: "dns-prefetch",
                                        scriptName: "pageadPrefetch",
                                        scriptUrl: "https://pagead2.googlesyndication.com",
                                        loadMode: "crossorigin"
                                    }, {
                                        elementType: "link",
                                        relType: "preconnect",
                                        scriptName: "securepubadsPreconnect",
                                        scriptUrl: "https://securepubads.g.doubleclick.net",
                                        loadMode: "crossorigin"
                                    }, {
                                        elementType: "link",
                                        relType: "dns-prefetch",
                                        scriptName: "securepubadsPrefetch",
                                        scriptUrl: "https://securepubads.g.doubleclick.net",
                                        loadMode: "crossorigin"
                                    }, {
                                        elementType: "script",
                                        scriptName: "gpt",
                                        scriptUrl: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                                        loadMode: "async"
                                    }, {
                                        elementType: "script",
                                        scriptName: "adLightning",
                                        scriptUrl: "https://tagan.adlightning.com/cbc/op.js",
                                        loadMode: "async"
                                    }, {
                                        elementType: "script",
                                        scriptName: "pbjs",
                                        scriptUrl: "https://www.cbc.ca/g/stats/js/cbc-prebid.js",
                                        loadMode: "async"
                                    }, {
                                        elementType: "script",
                                        scriptName: "admiral",
                                        scriptUrl: "https://www.cbc.ca/g/stats/js/admiral-script.js",
                                        loadMode: "defer"
                                    }, {
                                        elementType: "script",
                                        scriptName: "contxtful",
                                        scriptUrl: "//api.receptivity.io/v1/publisher/1Pw320kTdUM9nIw5Vsh5VqQtx/connector/p.js?callback=CONTXTFUL_CALLBACK",
                                        loadMode: "async"
                                    }],
                                    y = function() {
                                        "undefined" != typeof window && (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b).forEach((e => {
                                            const t = e.elementType.charAt(0).toUpperCase() + e.elementType.slice(1);
                                            if (window.document.querySelector(`#${e.scriptName}` + t)) return;
                                            const n = window.document.querySelector("head"),
                                                r = window.document.createElement(`${e.elementType}`);
                                            "script" === e.elementType ? r.setAttribute("src", `${e.scriptUrl}`) : "link" === e.elementType && (r.setAttribute("rel", `${e.relType}`), r.setAttribute("href", `${e.scriptUrl}`)), r.setAttribute(`${e.loadMode}`, ""), r.setAttribute("id", `${e.scriptName}` + t), null !== n && n.append(r)
                                        }))
                                    };
                                return t
                            })()
                        },
                        20: (e, t, n) => {
                            "use strict";
                            var r = n(155),
                                o = Symbol.for("react.element"),
                                i = Symbol.for("react.fragment"),
                                a = Object.prototype.hasOwnProperty,
                                s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                                c = {
                                    key: !0,
                                    ref: !0,
                                    __self: !0,
                                    __source: !0
                                };

                            function d(e, t, n) {
                                var r, i = {},
                                    d = null,
                                    l = null;
                                for (r in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, r) && !c.hasOwnProperty(r) && (i[r] = t[r]);
                                if (e && e.defaultProps)
                                    for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
                                return {
                                    $$typeof: o,
                                    type: e,
                                    key: d,
                                    ref: l,
                                    props: i,
                                    _owner: s.current
                                }
                            }
                            t.Fragment = i, t.jsx = d, t.jsxs = d
                        },
                        848: (e, t, n) => {
                            "use strict";
                            e.exports = n(20)
                        },
                        155: t => {
                            "use strict";
                            t.exports = e
                        },
                        148: e => {
                            "use strict";
                            e.exports = t
                        }
                    },
                    o = {};

                function i(e) {
                    var t = o[e];
                    if (void 0 !== t) return t.exports;
                    var n = o[e] = {
                        exports: {}
                    };
                    return r[e].call(n.exports, n, n.exports, i), n.exports
                }
                i.d = (e, t) => {
                    for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                };
                var a = {};
                return (() => {
                    "use strict";
                    i.r(a), i.d(a, {
                        default: () => Jt
                    });
                    var e = i(848),
                        t = i(155),
                        r = i(148);

                    function o(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map((function(e) {
                            return "'" + e + "'"
                        })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
                    }

                    function s(e) {
                        return !!e && !!e[H]
                    }

                    function c(e) {
                        var t;
                        return !!e && (function(e) {
                            if (!e || "object" != typeof e) return !1;
                            var t = Object.getPrototypeOf(e);
                            if (null === t) return !0;
                            var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                            return n === Object || "function" == typeof n && Function.toString.call(n) === K
                        }(e) || Array.isArray(e) || !!e[V] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[V]) || f(e) || b(e))
                    }

                    function d(e, t, n) {
                        void 0 === n && (n = !1), 0 === l(e) ? (n ? Object.keys : W)(e).forEach((function(r) {
                            n && "symbol" == typeof r || t(r, e[r], e)
                        })) : e.forEach((function(n, r) {
                            return t(r, n, e)
                        }))
                    }

                    function l(e) {
                        var t = e[H];
                        return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : f(e) ? 2 : b(e) ? 3 : 0
                    }

                    function p(e, t) {
                        return 2 === l(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
                    }

                    function u(e, t, n) {
                        var r = l(e);
                        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
                    }

                    function g(e, t) {
                        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
                    }

                    function f(e) {
                        return B && e instanceof Map
                    }

                    function b(e) {
                        return $ && e instanceof Set
                    }

                    function y(e) {
                        return e.o || e.t
                    }

                    function m(e) {
                        if (Array.isArray(e)) return Array.prototype.slice.call(e);
                        var t = X(e);
                        delete t[H];
                        for (var n = W(t), r = 0; r < n.length; r++) {
                            var o = n[r],
                                i = t[o];
                            !1 === i.writable && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[o] = {
                                configurable: !0,
                                writable: !0,
                                enumerable: i.enumerable,
                                value: e[o]
                            })
                        }
                        return Object.create(Object.getPrototypeOf(e), t)
                    }

                    function v(e, t) {
                        return void 0 === t && (t = !1), h(e) || s(e) || !c(e) || (l(e) > 1 && (e.set = e.add = e.clear = e.delete = w), Object.freeze(e), t && d(e, (function(e, t) {
                            return v(t, !0)
                        }), !0)), e
                    }

                    function w() {
                        o(2)
                    }

                    function h(e) {
                        return null == e || "object" != typeof e || Object.isFrozen(e)
                    }

                    function _(e) {
                        var t = J[e];
                        return t || o(18, e), t
                    }

                    function S() {
                        return U
                    }

                    function k(e, t) {
                        t && (_("Patches"), e.u = [], e.s = [], e.v = t)
                    }

                    function x(e) {
                        O(e), e.p.forEach(j), e.p = null
                    }

                    function O(e) {
                        e === U && (U = e.l)
                    }

                    function C(e) {
                        return U = {
                            p: [],
                            l: U,
                            h: e,
                            m: !0,
                            _: 0
                        }
                    }

                    function j(e) {
                        var t = e[H];
                        0 === t.i || 1 === t.i ? t.j() : t.g = !0
                    }

                    function I(e, t) {
                        t._ = t.p.length;
                        var n = t.p[0],
                            r = void 0 !== e && e !== n;
                        return t.h.O || _("ES5").S(t, e, r), r ? (n[H].P && (x(t), o(4)), c(e) && (e = P(t, e), t.l || z(t, e)), t.u && _("Patches").M(n[H].t, e, t.u, t.s)) : e = P(t, n, []), x(t), t.u && t.v(t.u, t.s), e !== G ? e : void 0
                    }

                    function P(e, t, n) {
                        if (h(t)) return t;
                        var r = t[H];
                        if (!r) return d(t, (function(o, i) {
                            return E(e, r, t, o, i, n)
                        }), !0), t;
                        if (r.A !== e) return t;
                        if (!r.P) return z(e, r.t, !0), r.t;
                        if (!r.I) {
                            r.I = !0, r.A._--;
                            var o = 4 === r.i || 5 === r.i ? r.o = m(r.k) : r.o,
                                i = o,
                                a = !1;
                            3 === r.i && (i = new Set(o), o.clear(), a = !0), d(i, (function(t, i) {
                                return E(e, r, o, t, i, n, a)
                            })), z(e, o, !1), n && e.u && _("Patches").N(r, n, e.u, e.s)
                        }
                        return r.o
                    }

                    function E(e, t, n, r, o, i, a) {
                        if (s(o)) {
                            var d = P(e, o, i && t && 3 !== t.i && !p(t.R, r) ? i.concat(r) : void 0);
                            if (u(n, r, d), !s(d)) return;
                            e.m = !1
                        } else a && n.add(o);
                        if (c(o) && !h(o)) {
                            if (!e.h.D && e._ < 1) return;
                            P(e, o), t && t.A.l || z(e, o)
                        }
                    }

                    function z(e, t, n) {
                        void 0 === n && (n = !1), !e.l && e.h.D && e.m && v(t, n)
                    }

                    function T(e, t) {
                        var n = e[H];
                        return (n ? y(n) : e)[t]
                    }

                    function A(e, t) {
                        if (t in e)
                            for (var n = Object.getPrototypeOf(e); n;) {
                                var r = Object.getOwnPropertyDescriptor(n, t);
                                if (r) return r;
                                n = Object.getPrototypeOf(n)
                            }
                    }

                    function D(e) {
                        e.P || (e.P = !0, e.l && D(e.l))
                    }

                    function R(e) {
                        e.o || (e.o = m(e.t))
                    }

                    function L(e, t, n) {
                        var r = f(t) ? _("MapSet").F(t, n) : b(t) ? _("MapSet").T(t, n) : e.O ? function(e, t) {
                            var n = Array.isArray(e),
                                r = {
                                    i: n ? 1 : 0,
                                    A: t ? t.A : S(),
                                    P: !1,
                                    I: !1,
                                    R: {},
                                    l: t,
                                    t: e,
                                    k: null,
                                    o: null,
                                    j: null,
                                    C: !1
                                },
                                o = r,
                                i = Y;
                            n && (o = [r], i = Q);
                            var a = Proxy.revocable(o, i),
                                s = a.revoke,
                                c = a.proxy;
                            return r.k = c, r.j = s, c
                        }(t, n) : _("ES5").J(t, n);
                        return (n ? n.A : S()).p.push(r), r
                    }

                    function N(e, t) {
                        switch (t) {
                            case 2:
                                return new Map(e);
                            case 3:
                                return Array.from(e)
                        }
                        return m(e)
                    }
                    var M, U, q = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                        B = "undefined" != typeof Map,
                        $ = "undefined" != typeof Set,
                        F = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                        G = q ? Symbol.for("immer-nothing") : ((M = {})["immer-nothing"] = !0, M),
                        V = q ? Symbol.for("immer-draftable") : "__$immer_draftable",
                        H = q ? Symbol.for("immer-state") : "__$immer_state",
                        K = ("undefined" != typeof Symbol && Symbol.iterator, "" + Object.prototype.constructor),
                        W = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
                            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                        } : Object.getOwnPropertyNames,
                        X = Object.getOwnPropertyDescriptors || function(e) {
                            var t = {};
                            return W(e).forEach((function(n) {
                                t[n] = Object.getOwnPropertyDescriptor(e, n)
                            })), t
                        },
                        J = {},
                        Y = {
                            get: function(e, t) {
                                if (t === H) return e;
                                var n = y(e);
                                if (!p(n, t)) return function(e, t, n) {
                                    var r, o = A(t, n);
                                    return o ? "value" in o ? o.value : null === (r = o.get) || void 0 === r ? void 0 : r.call(e.k) : void 0
                                }(e, n, t);
                                var r = n[t];
                                return e.I || !c(r) ? r : r === T(e.t, t) ? (R(e), e.o[t] = L(e.A.h, r, e)) : r
                            },
                            has: function(e, t) {
                                return t in y(e)
                            },
                            ownKeys: function(e) {
                                return Reflect.ownKeys(y(e))
                            },
                            set: function(e, t, n) {
                                var r = A(y(e), t);
                                if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
                                if (!e.P) {
                                    var o = T(y(e), t),
                                        i = null == o ? void 0 : o[H];
                                    if (i && i.t === n) return e.o[t] = n, e.R[t] = !1, !0;
                                    if (g(n, o) && (void 0 !== n || p(e.t, t))) return !0;
                                    R(e), D(e)
                                }
                                return e.o[t] === n && (void 0 !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
                            },
                            deleteProperty: function(e, t) {
                                return void 0 !== T(e.t, t) || t in e.t ? (e.R[t] = !1, R(e), D(e)) : delete e.R[t], e.o && delete e.o[t], !0
                            },
                            getOwnPropertyDescriptor: function(e, t) {
                                var n = y(e),
                                    r = Reflect.getOwnPropertyDescriptor(n, t);
                                return r ? {
                                    writable: !0,
                                    configurable: 1 !== e.i || "length" !== t,
                                    enumerable: r.enumerable,
                                    value: n[t]
                                } : r
                            },
                            defineProperty: function() {
                                o(11)
                            },
                            getPrototypeOf: function(e) {
                                return Object.getPrototypeOf(e.t)
                            },
                            setPrototypeOf: function() {
                                o(12)
                            }
                        },
                        Q = {};
                    d(Y, (function(e, t) {
                        Q[e] = function() {
                            return arguments[0] = arguments[0][0], t.apply(this, arguments)
                        }
                    })), Q.deleteProperty = function(e, t) {
                        return Q.set.call(this, e, t, void 0)
                    }, Q.set = function(e, t, n) {
                        return Y.set.call(this, e[0], t, n, e[0])
                    };
                    var Z = function() {
                            function e(e) {
                                var t = this;
                                this.O = F, this.D = !0, this.produce = function(e, n, r) {
                                    if ("function" == typeof e && "function" != typeof n) {
                                        var i = n;
                                        n = e;
                                        var a = t;
                                        return function(e) {
                                            var t = this;
                                            void 0 === e && (e = i);
                                            for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) o[s - 1] = arguments[s];
                                            return a.produce(e, (function(e) {
                                                var r;
                                                return (r = n).call.apply(r, [t, e].concat(o))
                                            }))
                                        }
                                    }
                                    var s;
                                    if ("function" != typeof n && o(6), void 0 !== r && "function" != typeof r && o(7), c(e)) {
                                        var d = C(t),
                                            l = L(t, e, void 0),
                                            p = !0;
                                        try {
                                            s = n(l), p = !1
                                        } finally {
                                            p ? x(d) : O(d)
                                        }
                                        return "undefined" != typeof Promise && s instanceof Promise ? s.then((function(e) {
                                            return k(d, r), I(e, d)
                                        }), (function(e) {
                                            throw x(d), e
                                        })) : (k(d, r), I(s, d))
                                    }
                                    if (!e || "object" != typeof e) {
                                        if (void 0 === (s = n(e)) && (s = e), s === G && (s = void 0), t.D && v(s, !0), r) {
                                            var u = [],
                                                g = [];
                                            _("Patches").M(e, s, u, g), r(u, g)
                                        }
                                        return s
                                    }
                                    o(21, e)
                                }, this.produceWithPatches = function(e, n) {
                                    if ("function" == typeof e) return function(n) {
                                        for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                                        return t.produceWithPatches(n, (function(t) {
                                            return e.apply(void 0, [t].concat(o))
                                        }))
                                    };
                                    var r, o, i = t.produce(e, n, (function(e, t) {
                                        r = e, o = t
                                    }));
                                    return "undefined" != typeof Promise && i instanceof Promise ? i.then((function(e) {
                                        return [e, r, o]
                                    })) : [i, r, o]
                                }, "boolean" == typeof(null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
                            }
                            var t = e.prototype;
                            return t.createDraft = function(e) {
                                c(e) || o(8), s(e) && (e = function(e) {
                                    return s(e) || o(22, e),
                                        function e(t) {
                                            if (!c(t)) return t;
                                            var n, r = t[H],
                                                o = l(t);
                                            if (r) {
                                                if (!r.P && (r.i < 4 || !_("ES5").K(r))) return r.t;
                                                r.I = !0, n = N(t, o), r.I = !1
                                            } else n = N(t, o);
                                            return d(n, (function(t, o) {
                                                r && function(e, t) {
                                                    return 2 === l(e) ? e.get(t) : e[t]
                                                }(r.t, t) === o || u(n, t, e(o))
                                            })), 3 === o ? new Set(n) : n
                                        }(e)
                                }(e));
                                var t = C(this),
                                    n = L(this, e, void 0);
                                return n[H].C = !0, O(t), n
                            }, t.finishDraft = function(e, t) {
                                var n = (e && e[H]).A;
                                return k(n, t), I(void 0, n)
                            }, t.setAutoFreeze = function(e) {
                                this.D = e
                            }, t.setUseProxies = function(e) {
                                e && !F && o(20), this.O = e
                            }, t.applyPatches = function(e, t) {
                                var n;
                                for (n = t.length - 1; n >= 0; n--) {
                                    var r = t[n];
                                    if (0 === r.path.length && "replace" === r.op) {
                                        e = r.value;
                                        break
                                    }
                                }
                                n > -1 && (t = t.slice(n + 1));
                                var o = _("Patches").$;
                                return s(e) ? o(e, t) : this.produce(e, (function(e) {
                                    return o(e, t)
                                }))
                            }, e
                        }(),
                        ee = new Z,
                        te = ee.produce;
                    ee.produceWithPatches.bind(ee), ee.setAutoFreeze.bind(ee), ee.setUseProxies.bind(ee), ee.applyPatches.bind(ee), ee.createDraft.bind(ee), ee.finishDraft.bind(ee);
                    const ne = te;

                    function re(e) {
                        return re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }, re(e)
                    }

                    function oe(e, t, n) {
                        return (t = function(e) {
                            var t = function(e) {
                                if ("object" != re(e) || !e) return e;
                                var t = e[Symbol.toPrimitive];
                                if (void 0 !== t) {
                                    var n = t.call(e, "string");
                                    if ("object" != re(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(e);
                            return "symbol" == re(t) ? t : t + ""
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function ie(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function ae(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ie(Object(n), !0).forEach((function(t) {
                                oe(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }

                    function se(e) {
                        return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
                    }
                    var ce = "function" == typeof Symbol && Symbol.observable || "@@observable",
                        de = function() {
                            return Math.random().toString(36).substring(7).split("").join(".")
                        },
                        le = {
                            INIT: "@@redux/INIT" + de(),
                            REPLACE: "@@redux/REPLACE" + de(),
                            PROBE_UNKNOWN_ACTION: function() {
                                return "@@redux/PROBE_UNKNOWN_ACTION" + de()
                            }
                        };

                    function pe(e, t, n) {
                        var r;
                        if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error(se(0));
                        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
                            if ("function" != typeof n) throw new Error(se(1));
                            return n(pe)(e, t)
                        }
                        if ("function" != typeof e) throw new Error(se(2));
                        var o = e,
                            i = t,
                            a = [],
                            s = a,
                            c = !1;

                        function d() {
                            s === a && (s = a.slice())
                        }

                        function l() {
                            if (c) throw new Error(se(3));
                            return i
                        }

                        function p(e) {
                            if ("function" != typeof e) throw new Error(se(4));
                            if (c) throw new Error(se(5));
                            var t = !0;
                            return d(), s.push(e),
                                function() {
                                    if (t) {
                                        if (c) throw new Error(se(6));
                                        t = !1, d();
                                        var n = s.indexOf(e);
                                        s.splice(n, 1), a = null
                                    }
                                }
                        }

                        function u(e) {
                            if (! function(e) {
                                    if ("object" != typeof e || null === e) return !1;
                                    for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                                    return Object.getPrototypeOf(e) === t
                                }(e)) throw new Error(se(7));
                            if (void 0 === e.type) throw new Error(se(8));
                            if (c) throw new Error(se(9));
                            try {
                                c = !0, i = o(i, e)
                            } finally {
                                c = !1
                            }
                            for (var t = a = s, n = 0; n < t.length; n++)(0, t[n])();
                            return e
                        }
                        return u({
                            type: le.INIT
                        }), (r = {
                            dispatch: u,
                            subscribe: p,
                            getState: l,
                            replaceReducer: function(e) {
                                if ("function" != typeof e) throw new Error(se(10));
                                o = e, u({
                                    type: le.REPLACE
                                })
                            }
                        })[ce] = function() {
                            var e, t = p;
                            return (e = {
                                subscribe: function(e) {
                                    if ("object" != typeof e || null === e) throw new Error(se(11));

                                    function n() {
                                        e.next && e.next(l())
                                    }
                                    return n(), {
                                        unsubscribe: t(n)
                                    }
                                }
                            })[ce] = function() {
                                return this
                            }, e
                        }, r
                    }

                    function ue() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return 0 === t.length ? function(e) {
                            return e
                        } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                            return function() {
                                return e(t.apply(void 0, arguments))
                            }
                        }))
                    }

                    function ge() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e) {
                            return function() {
                                var n = e.apply(void 0, arguments),
                                    r = function() {
                                        throw new Error(se(15))
                                    },
                                    o = {
                                        getState: n.getState,
                                        dispatch: function() {
                                            return r.apply(void 0, arguments)
                                        }
                                    },
                                    i = t.map((function(e) {
                                        return e(o)
                                    }));
                                return r = ue.apply(void 0, i)(n.dispatch), ae(ae({}, n), {}, {
                                    dispatch: r
                                })
                            }
                        }
                    }

                    function fe(e) {
                        return function(t) {
                            var n = t.dispatch,
                                r = t.getState;
                            return function(t) {
                                return function(o) {
                                    return "function" == typeof o ? o(n, r, e) : t(o)
                                }
                            }
                        }
                    }
                    var be = fe();
                    be.withExtraArgument = fe;
                    const ye = be;
                    var me, ve = (me = function(e, t) {
                            return me = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }, me(e, t)
                        }, function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }
                            me(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        we = function(e, t) {
                            for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
                            return e
                        },
                        he = Object.defineProperty,
                        _e = Object.defineProperties,
                        Se = Object.getOwnPropertyDescriptors,
                        ke = Object.getOwnPropertySymbols,
                        xe = Object.prototype.hasOwnProperty,
                        Oe = Object.prototype.propertyIsEnumerable,
                        Ce = function(e, t, n) {
                            return t in e ? he(e, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: n
                            }) : e[t] = n
                        },
                        je = function(e, t) {
                            for (var n in t || (t = {})) xe.call(t, n) && Ce(e, n, t[n]);
                            if (ke)
                                for (var r = 0, o = ke(t); r < o.length; r++) n = o[r], Oe.call(t, n) && Ce(e, n, t[n]);
                            return e
                        },
                        Ie = function(e, t) {
                            return _e(e, Se(t))
                        },
                        Pe = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                            if (0 !== arguments.length) return "object" == typeof arguments[0] ? ue : ue.apply(null, arguments)
                        };

                    function Ee(e, t) {
                        function n() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            if (t) {
                                var o = t.apply(void 0, n);
                                if (!o) throw new Error("prepareAction did not return an object");
                                return je(je({
                                    type: e,
                                    payload: o.payload
                                }, "meta" in o && {
                                    meta: o.meta
                                }), "error" in o && {
                                    error: o.error
                                })
                            }
                            return {
                                type: e,
                                payload: n[0]
                            }
                        }
                        return n.toString = function() {
                            return "" + e
                        }, n.type = e, n.match = function(t) {
                            return t.type === e
                        }, n
                    }
                    "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
                    var ze = function(e) {
                            function t() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                var o = e.apply(this, n) || this;
                                return Object.setPrototypeOf(o, t.prototype), o
                            }
                            return ve(t, e), Object.defineProperty(t, Symbol.species, {
                                get: function() {
                                    return t
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.concat = function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                return e.prototype.concat.apply(this, t)
                            }, t.prototype.prepend = function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                return 1 === e.length && Array.isArray(e[0]) ? new(t.bind.apply(t, we([void 0], e[0].concat(this)))) : new(t.bind.apply(t, we([void 0], e.concat(this))))
                            }, t
                        }(Array),
                        Te = function(e) {
                            function t() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                var o = e.apply(this, n) || this;
                                return Object.setPrototypeOf(o, t.prototype), o
                            }
                            return ve(t, e), Object.defineProperty(t, Symbol.species, {
                                get: function() {
                                    return t
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.concat = function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                return e.prototype.concat.apply(this, t)
                            }, t.prototype.prepend = function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                return 1 === e.length && Array.isArray(e[0]) ? new(t.bind.apply(t, we([void 0], e[0].concat(this)))) : new(t.bind.apply(t, we([void 0], e.concat(this))))
                            }, t
                        }(Array);

                    function Ae(e) {
                        return c(e) ? ne(e, (function() {})) : e
                    }

                    function De(e) {
                        var t, n = {},
                            r = [],
                            o = {
                                addCase: function(e, t) {
                                    var r = "string" == typeof e ? e : e.type;
                                    if (!r) throw new Error("`builder.addCase` cannot be called with an empty action type");
                                    if (r in n) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
                                    return n[r] = t, o
                                },
                                addMatcher: function(e, t) {
                                    return r.push({
                                        matcher: e,
                                        reducer: t
                                    }), o
                                },
                                addDefaultCase: function(e) {
                                    return t = e, o
                                }
                            };
                        return e(o), [n, r, t]
                    }

                    function Re(e) {
                        var t = e.name;
                        if (!t) throw new Error("`name` is a required option for createSlice");
                        var n, r = "function" == typeof e.initialState ? e.initialState : Ae(e.initialState),
                            o = e.reducers || {},
                            i = Object.keys(o),
                            a = {},
                            d = {},
                            l = {};

                        function p() {
                            var t = "function" == typeof e.extraReducers ? De(e.extraReducers) : [e.extraReducers],
                                n = t[0],
                                o = void 0 === n ? {} : n,
                                i = t[1],
                                a = void 0 === i ? [] : i,
                                l = t[2],
                                p = void 0 === l ? void 0 : l,
                                u = je(je({}, o), d);
                            return function(e, t, n) {
                                void 0 === n && (n = []);
                                var r, o = De(t),
                                    i = o[0],
                                    a = o[1],
                                    d = o[2];
                                if (function(e) {
                                        return "function" == typeof e
                                    }(e)) r = function() {
                                    return Ae(e())
                                };
                                else {
                                    var l = Ae(e);
                                    r = function() {
                                        return l
                                    }
                                }

                                function p(e, t) {
                                    void 0 === e && (e = r());
                                    var n = we([i[t.type]], a.filter((function(e) {
                                        return (0, e.matcher)(t)
                                    })).map((function(e) {
                                        return e.reducer
                                    })));
                                    return 0 === n.filter((function(e) {
                                        return !!e
                                    })).length && (n = [d]), n.reduce((function(e, n) {
                                        if (n) {
                                            var r;
                                            if (s(e)) return void 0 === (r = n(e, t)) ? e : r;
                                            if (c(e)) return ne(e, (function(e) {
                                                return n(e, t)
                                            }));
                                            if (void 0 === (r = n(e, t))) {
                                                if (null === e) return e;
                                                throw Error("A case reducer on a non-draftable value must not return undefined")
                                            }
                                            return r
                                        }
                                        return e
                                    }), e)
                                }
                                return p.getInitialState = r, p
                            }(r, (function(e) {
                                for (var t in u) e.addCase(t, u[t]);
                                for (var n = 0, r = a; n < r.length; n++) {
                                    var o = r[n];
                                    e.addMatcher(o.matcher, o.reducer)
                                }
                                p && e.addDefaultCase(p)
                            }))
                        }
                        return i.forEach((function(e) {
                            var n, r, i = o[e],
                                s = t + "/" + e;
                            "reducer" in i ? (n = i.reducer, r = i.prepare) : n = i, a[e] = n, d[s] = n, l[e] = r ? Ee(s, r) : Ee(s)
                        })), {
                            name: t,
                            reducer: function(e, t) {
                                return n || (n = p()), n(e, t)
                            },
                            actions: l,
                            caseReducers: a,
                            getInitialState: function() {
                                return n || (n = p()), n.getInitialState()
                            }
                        }
                    }
                    var Le = ["name", "message", "stack", "code"],
                        Ne = function(e, t) {
                            this.payload = e, this.meta = t
                        },
                        Me = function(e, t) {
                            this.payload = e, this.meta = t
                        },
                        Ue = function(e) {
                            if ("object" == typeof e && null !== e) {
                                for (var t = {}, n = 0, r = Le; n < r.length; n++) {
                                    var o = r[n];
                                    "string" == typeof e[o] && (t[o] = e[o])
                                }
                                return t
                            }
                            return {
                                message: String(e)
                            }
                        };

                    function qe(e) {
                        if (e.meta && e.meta.rejectedWithValue) throw e.payload;
                        if (e.error) throw e.error;
                        return e.payload
                    }! function() {
                        function e(e, t, n) {
                            var r = Ee(e + "/fulfilled", (function(e, t, n, r) {
                                    return {
                                        payload: e,
                                        meta: Ie(je({}, r || {}), {
                                            arg: n,
                                            requestId: t,
                                            requestStatus: "fulfilled"
                                        })
                                    }
                                })),
                                o = Ee(e + "/pending", (function(e, t, n) {
                                    return {
                                        payload: void 0,
                                        meta: Ie(je({}, n || {}), {
                                            arg: t,
                                            requestId: e,
                                            requestStatus: "pending"
                                        })
                                    }
                                })),
                                i = Ee(e + "/rejected", (function(e, t, r, o, i) {
                                    return {
                                        payload: o,
                                        error: (n && n.serializeError || Ue)(e || "Rejected"),
                                        meta: Ie(je({}, i || {}), {
                                            arg: r,
                                            requestId: t,
                                            rejectedWithValue: !!o,
                                            requestStatus: "rejected",
                                            aborted: "AbortError" === (null == e ? void 0 : e.name),
                                            condition: "ConditionError" === (null == e ? void 0 : e.name)
                                        })
                                    }
                                })),
                                a = "undefined" != typeof AbortController ? AbortController : function() {
                                    function e() {
                                        this.signal = {
                                            aborted: !1,
                                            addEventListener: function() {},
                                            dispatchEvent: function() {
                                                return !1
                                            },
                                            onabort: function() {},
                                            removeEventListener: function() {},
                                            reason: void 0,
                                            throwIfAborted: function() {}
                                        }
                                    }
                                    return e.prototype.abort = function() {}, e
                                }();
                            return Object.assign((function(e) {
                                return function(s, c, d) {
                                    var l, p = (null == n ? void 0 : n.idGenerator) ? n.idGenerator(e) : function(e) {
                                            void 0 === e && (e = 21);
                                            for (var t = "", n = e; n--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
                                            return t
                                        }(),
                                        u = new a;

                                    function g(e) {
                                        l = e, u.abort()
                                    }
                                    var f = function() {
                                        return a = this, f = function() {
                                            var a, f, b, y, m, v;
                                            return function(e, t) {
                                                var n, r, o, i, a = {
                                                    label: 0,
                                                    sent: function() {
                                                        if (1 & o[0]) throw o[1];
                                                        return o[1]
                                                    },
                                                    trys: [],
                                                    ops: []
                                                };
                                                return i = {
                                                    next: s(0),
                                                    throw: s(1),
                                                    return: s(2)
                                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                                    return this
                                                }), i;

                                                function s(i) {
                                                    return function(s) {
                                                        return function(i) {
                                                            if (n) throw new TypeError("Generator is already executing.");
                                                            for (; a;) try {
                                                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                                    case 0:
                                                                    case 1:
                                                                        o = i;
                                                                        break;
                                                                    case 4:
                                                                        return a.label++, {
                                                                            value: i[1],
                                                                            done: !1
                                                                        };
                                                                    case 5:
                                                                        a.label++, r = i[1], i = [0];
                                                                        continue;
                                                                    case 7:
                                                                        i = a.ops.pop(), a.trys.pop();
                                                                        continue;
                                                                    default:
                                                                        if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                                            a = 0;
                                                                            continue
                                                                        }
                                                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                                            a.label = i[1];
                                                                            break
                                                                        }
                                                                        if (6 === i[0] && a.label < o[1]) {
                                                                            a.label = o[1], o = i;
                                                                            break
                                                                        }
                                                                        if (o && a.label < o[2]) {
                                                                            a.label = o[2], a.ops.push(i);
                                                                            break
                                                                        }
                                                                        o[2] && a.ops.pop(), a.trys.pop();
                                                                        continue
                                                                }
                                                                i = t.call(e, a)
                                                            } catch (e) {
                                                                i = [6, e], r = 0
                                                            } finally {
                                                                n = o = 0
                                                            }
                                                            if (5 & i[0]) throw i[1];
                                                            return {
                                                                value: i[0] ? i[1] : void 0,
                                                                done: !0
                                                            }
                                                        }([i, s])
                                                    }
                                                }
                                            }(this, (function(w) {
                                                switch (w.label) {
                                                    case 0:
                                                        return w.trys.push([0, 4, , 5]), null === (h = y = null == (a = null == n ? void 0 : n.condition) ? void 0 : a.call(n, e, {
                                                            getState: c,
                                                            extra: d
                                                        })) || "object" != typeof h || "function" != typeof h.then ? [3, 2] : [4, y];
                                                    case 1:
                                                        y = w.sent(), w.label = 2;
                                                    case 2:
                                                        if (!1 === y || u.signal.aborted) throw {
                                                            name: "ConditionError",
                                                            message: "Aborted due to condition callback returning false."
                                                        };
                                                        return m = new Promise((function(e, t) {
                                                            return u.signal.addEventListener("abort", (function() {
                                                                return t({
                                                                    name: "AbortError",
                                                                    message: l || "Aborted"
                                                                })
                                                            }))
                                                        })), s(o(p, e, null == (f = null == n ? void 0 : n.getPendingMeta) ? void 0 : f.call(n, {
                                                            requestId: p,
                                                            arg: e
                                                        }, {
                                                            getState: c,
                                                            extra: d
                                                        }))), [4, Promise.race([m, Promise.resolve(t(e, {
                                                            dispatch: s,
                                                            getState: c,
                                                            extra: d,
                                                            requestId: p,
                                                            signal: u.signal,
                                                            abort: g,
                                                            rejectWithValue: function(e, t) {
                                                                return new Ne(e, t)
                                                            },
                                                            fulfillWithValue: function(e, t) {
                                                                return new Me(e, t)
                                                            }
                                                        })).then((function(t) {
                                                            if (t instanceof Ne) throw t;
                                                            return t instanceof Me ? r(t.payload, p, e, t.meta) : r(t, p, e)
                                                        }))])];
                                                    case 3:
                                                        return b = w.sent(), [3, 5];
                                                    case 4:
                                                        return v = w.sent(), b = v instanceof Ne ? i(null, p, e, v.payload, v.meta) : i(v, p, e), [3, 5];
                                                    case 5:
                                                        return n && !n.dispatchConditionRejection && i.match(b) && b.meta.condition || s(b), [2, b]
                                                }
                                                var h
                                            }))
                                        }, new Promise((function(e, t) {
                                            var n = function(e) {
                                                    try {
                                                        o(f.next(e))
                                                    } catch (e) {
                                                        t(e)
                                                    }
                                                },
                                                r = function(e) {
                                                    try {
                                                        o(f.throw(e))
                                                    } catch (e) {
                                                        t(e)
                                                    }
                                                },
                                                o = function(t) {
                                                    return t.done ? e(t.value) : Promise.resolve(t.value).then(n, r)
                                                };
                                            o((f = f.apply(a, null)).next())
                                        }));
                                        var a, f
                                    }();
                                    return Object.assign(f, {
                                        abort: g,
                                        requestId: p,
                                        arg: e,
                                        unwrap: function() {
                                            return f.then(qe)
                                        }
                                    })
                                }
                            }), {
                                pending: o,
                                rejected: i,
                                fulfilled: r,
                                typePrefix: e
                            })
                        }
                        e.withTypes = function() {
                            return e
                        }
                    }(), Object.assign;
                    var Be = "listenerMiddleware";
                    Ee(Be + "/add"), Ee(Be + "/removeAll"), Ee(Be + "/remove"), "function" == typeof queueMicrotask && queueMicrotask.bind("undefined" != typeof window ? window : "undefined" != typeof n.g ? n.g : globalThis), "undefined" != typeof window && window.requestAnimationFrame && window.requestAnimationFrame,
                        function() {
                            function e(e, t) {
                                var n = o[e];
                                return n ? n.enumerable = t : o[e] = n = {
                                    configurable: !0,
                                    enumerable: t,
                                    get: function() {
                                        var t = this[H];
                                        return Y.get(t, e)
                                    },
                                    set: function(t) {
                                        var n = this[H];
                                        Y.set(n, e, t)
                                    }
                                }, n
                            }

                            function t(e) {
                                for (var t = e.length - 1; t >= 0; t--) {
                                    var o = e[t][H];
                                    if (!o.P) switch (o.i) {
                                        case 5:
                                            r(o) && D(o);
                                            break;
                                        case 4:
                                            n(o) && D(o)
                                    }
                                }
                            }

                            function n(e) {
                                for (var t = e.t, n = e.k, r = W(n), o = r.length - 1; o >= 0; o--) {
                                    var i = r[o];
                                    if (i !== H) {
                                        var a = t[i];
                                        if (void 0 === a && !p(t, i)) return !0;
                                        var s = n[i],
                                            c = s && s[H];
                                        if (c ? c.t !== a : !g(s, a)) return !0
                                    }
                                }
                                var d = !!t[H];
                                return r.length !== W(t).length + (d ? 0 : 1)
                            }

                            function r(e) {
                                var t = e.k;
                                if (t.length !== e.t.length) return !0;
                                var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
                                if (n && !n.get) return !0;
                                for (var r = 0; r < t.length; r++)
                                    if (!t.hasOwnProperty(r)) return !0;
                                return !1
                            }
                            var o = {};
                            ! function(e, t) {
                                J.ES5 || (J.ES5 = t)
                            }(0, {
                                J: function(t, n) {
                                    var r = Array.isArray(t),
                                        o = function(t, n) {
                                            if (t) {
                                                for (var r = Array(n.length), o = 0; o < n.length; o++) Object.defineProperty(r, "" + o, e(o, !0));
                                                return r
                                            }
                                            var i = X(n);
                                            delete i[H];
                                            for (var a = W(i), s = 0; s < a.length; s++) {
                                                var c = a[s];
                                                i[c] = e(c, t || !!i[c].enumerable)
                                            }
                                            return Object.create(Object.getPrototypeOf(n), i)
                                        }(r, t),
                                        i = {
                                            i: r ? 5 : 4,
                                            A: n ? n.A : S(),
                                            P: !1,
                                            I: !1,
                                            R: {},
                                            l: n,
                                            t: t,
                                            k: o,
                                            o: null,
                                            g: !1,
                                            C: !1
                                        };
                                    return Object.defineProperty(o, H, {
                                        value: i,
                                        writable: !0
                                    }), o
                                },
                                S: function(e, n, o) {
                                    o ? s(n) && n[H].A === e && t(e.p) : (e.u && function e(t) {
                                        if (t && "object" == typeof t) {
                                            var n = t[H];
                                            if (n) {
                                                var o = n.t,
                                                    i = n.k,
                                                    a = n.R,
                                                    s = n.i;
                                                if (4 === s) d(i, (function(t) {
                                                    t !== H && (void 0 !== o[t] || p(o, t) ? a[t] || e(i[t]) : (a[t] = !0, D(n)))
                                                })), d(o, (function(e) {
                                                    void 0 !== i[e] || p(i, e) || (a[e] = !1, D(n))
                                                }));
                                                else if (5 === s) {
                                                    if (r(n) && (D(n), a.length = !0), i.length < o.length)
                                                        for (var c = i.length; c < o.length; c++) a[c] = !1;
                                                    else
                                                        for (var l = o.length; l < i.length; l++) a[l] = !0;
                                                    for (var u = Math.min(i.length, o.length), g = 0; g < u; g++) i.hasOwnProperty(g) || (a[g] = !0), void 0 === a[g] && e(i[g])
                                                }
                                            }
                                        }
                                    }(e.p[0]), t(e.p))
                                },
                                K: function(e) {
                                    return 4 === e.i ? n(e) : r(e)
                                }
                            })
                        }();
                    const $e = Re({
                            name: "gptInit",
                            initialState: {
                                gptInit: !1
                            },
                            reducers: {
                                gptInitChange(e, t) {
                                    e.gptInit = t.payload
                                }
                            }
                        }),
                        {
                            gptInitChange: Fe
                        } = $e.actions,
                        Ge = $e.reducer,
                        Ve = Re({
                            name: "pageLocation",
                            initialState: {
                                pageData: {
                                    pageType: "",
                                    pagePath: "",
                                    pageSection: ""
                                }
                            },
                            reducers: {
                                pageLocationChange(e, t) {
                                    e.pageData = t.payload
                                }
                            }
                        }),
                        {
                            pageLocationChange: He
                        } = Ve.actions,
                        Ke = Ve.reducer,
                        We = Re({
                            name: "risingstarHeight",
                            initialState: {
                                height: 122,
                                timerFinished: !1,
                                loaded: !1,
                                fixed: !1
                            },
                            reducers: {
                                heightChange(e, t) {
                                    e.height = t.payload
                                },
                                timerFinishedChange(e, t) {
                                    e.timerFinished = t.payload
                                },
                                loadedChange(e, t) {
                                    e.loaded = t.payload
                                },
                                fixedChange(e, t) {
                                    e.fixed = t.payload
                                }
                            }
                        }),
                        {
                            heightChange: Xe,
                            timerFinishedChange: Je,
                            loadedChange: Ye,
                            fixedChange: Qe
                        } = We.actions,
                        Ze = We.reducer,
                        et = Re({
                            name: "adsBlocked",
                            initialState: {
                                adsBlocked: !1
                            },
                            reducers: {
                                adsBlockedChange(e, t) {
                                    e.adsBlocked = t.payload
                                }
                            }
                        }),
                        {
                            adsBlockedChange: tt
                        } = et.actions,
                        nt = et.reducer,
                        rt = Re({
                            name: "personalisation",
                            initialState: {
                                dmpSegments: [],
                                cdpSegments: [],
                                cmpData: {
                                    userStatus: {
                                        purposes: {
                                            "personaliz-CbNGLdPX": {
                                                enabled: !0
                                            },
                                            "personaliz-rT2hmC9K": {
                                                enabled: !0
                                            }
                                        },
                                        vendors: {
                                            vendor: {
                                                id: "",
                                                enabled: !0
                                            }
                                        }
                                    },
                                    cmpOptIn: !0,
                                    contentOptIn: !0
                                }
                            },
                            reducers: {
                                personalisationChange(e, t) {
                                    e.cdpSegments = t.payload.cdpSegments, e.dmpSegments = t.payload.dmpSegments, e.cmpData = t.payload.cmpData
                                }
                            }
                        }),
                        {
                            personalisationChange: ot
                        } = rt.actions,
                        it = function(e) {
                            var t, n = function(e) {
                                    return function(e) {
                                        void 0 === e && (e = {});
                                        var t = e.thunk,
                                            n = void 0 === t || t,
                                            r = (e.immutableCheck, e.serializableCheck, e.actionCreatorCheck, new ze);
                                        return n && (function(e) {
                                            return "boolean" == typeof e
                                        }(n) ? r.push(ye) : r.push(ye.withExtraArgument(n.extraArgument))), r
                                    }(e)
                                },
                                r = e || {},
                                o = r.reducer,
                                i = void 0 === o ? void 0 : o,
                                a = r.middleware,
                                s = void 0 === a ? n() : a,
                                c = r.devTools,
                                d = void 0 === c || c,
                                l = r.preloadedState,
                                p = void 0 === l ? void 0 : l,
                                u = r.enhancers,
                                g = void 0 === u ? void 0 : u;
                            if ("function" == typeof i) t = i;
                            else {
                                if (! function(e) {
                                        if ("object" != typeof e || null === e) return !1;
                                        var t = Object.getPrototypeOf(e);
                                        if (null === t) return !0;
                                        for (var n = t; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
                                        return t === n
                                    }(i)) throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
                                t = function(e) {
                                    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                                        var o = t[r];
                                        "function" == typeof e[o] && (n[o] = e[o])
                                    }
                                    var i, a = Object.keys(n);
                                    try {
                                        ! function(e) {
                                            Object.keys(e).forEach((function(t) {
                                                var n = e[t];
                                                if (void 0 === n(void 0, {
                                                        type: le.INIT
                                                    })) throw new Error(se(12));
                                                if (void 0 === n(void 0, {
                                                        type: le.PROBE_UNKNOWN_ACTION()
                                                    })) throw new Error(se(13))
                                            }))
                                        }(n)
                                    } catch (e) {
                                        i = e
                                    }
                                    return function(e, t) {
                                        if (void 0 === e && (e = {}), i) throw i;
                                        for (var r = !1, o = {}, s = 0; s < a.length; s++) {
                                            var c = a[s],
                                                d = n[c],
                                                l = e[c],
                                                p = d(l, t);
                                            if (void 0 === p) throw t && t.type, new Error(se(14));
                                            o[c] = p, r = r || p !== l
                                        }
                                        return (r = r || a.length !== Object.keys(e).length) ? o : e
                                    }
                                }(i)
                            }
                            var f = s;
                            "function" == typeof f && (f = f(n));
                            var b = ge.apply(void 0, f),
                                y = ue;
                            d && (y = Pe(je({
                                trace: !1
                            }, "object" == typeof d && d)));
                            var m = new Te(b),
                                v = m;
                            return Array.isArray(g) ? v = we([b], g) : "function" == typeof g && (v = g(m)), pe(t, p, y.apply(void 0, v))
                        }({
                            reducer: {
                                gptInit: Ge,
                                pageLocation: Ke,
                                risingstar: Ze,
                                adsBlocked: nt,
                                personalisation: rt.reducer
                            },
                            devTools: !1
                        }),
                        at = t => {
                            const {
                                wrapperClasses: n,
                                containerId: r,
                                type: o,
                                risingstar: i,
                                wrapperStyleObj: a
                            } = t;
                            return (0, e.jsxs)(e.Fragment, {
                                children: [(0, e.jsx)("div", {
                                    "data-testid": "ads-risingstar-fixed",
                                    "data-cy": "risingstar-fixed",
                                    className: "risingstar-placeholder",
                                    style: {
                                        height: i.height,
                                        display: i.fixed ? "block" : "none"
                                    }
                                }), (0, e.jsx)("div", {
                                    "data-testid": "ads-risingstar",
                                    "data-cy": "risingstar",
                                    className: `${n} ${i.fixed?"risingstar-fixed":""}`,
                                    style: a,
                                    children: (0, e.jsx)("div", {
                                        id: r || void 0,
                                        className: `advertisement ${o} `
                                    })
                                })]
                            })
                        },
                        st = t => {
                            const {
                                wrapperClasses: n,
                                containerId: r,
                                type: o,
                                nativeAdEmpty: i
                            } = t;
                            return (0, e.jsx)("div", {
                                "data-testid": "ads-native-ad",
                                "data-cy": "native-ad",
                                className: `${n} advertisement native-ad-${i?"preload":"postload"} ${o}`,
                                id: r || void 0
                            })
                        },
                        ct = t => {
                            const {
                                wrapperClasses: n,
                                containerId: r,
                                type: o,
                                wrapperStyleObj: i
                            } = t;
                            return (0, e.jsx)("div", {
                                "data-cy": o,
                                "data-testid": `ads-${o}`,
                                className: `${n}`,
                                style: null !== i ? i : void 0,
                                children: (0, e.jsx)("div", {
                                    id: r || void 0,
                                    className: `advertisement ${o}`
                                })
                            })
                        };
                    var dt = i(665);
                    const lt = {
                            risingstar: 1,
                            "native-ad": 2,
                            outofpage: 3,
                            bigbox: 4,
                            "bigbox-fixed": 4
                        },
                        pt = {
                            risingstar: [
                                [320, 50],
                                [728, 90],
                                [970, 90],
                                [970, 250],
                                [970, 415]
                            ],
                            "banner-small": [
                                [320, 50],
                                [728, 90]
                            ],
                            bigbox: [
                                [300, 250],
                                [300, 600]
                            ],
                            "bigbox-fixed": [
                                [300, 250],
                                [300, 600]
                            ],
                            "bigbox-sticky": [
                                [300, 250],
                                [300, 600]
                            ],
                            "bigbox-single": [
                                [300, 250]
                            ],
                            "bigbox-single-desktop": [
                                [300, 250]
                            ],
                            "bigbox-double": [
                                [300, 600]
                            ],
                            "bigbox-double-inread": [
                                [300, 250],
                                [300, 600],
                                [728, 90],
                                [320, 180],
                                [455, 256],
                                [42, 1]
                            ],
                            "in-read": [
                                [300, 250],
                                [728, 90],
                                [320, 180],
                                [455, 256],
                                [42, 1]
                            ],
                            "load-more": [
                                [300, 250],
                                [728, 90],
                                [970, 250]
                            ],
                            intercept: [
                                [300, 250],
                                [728, 90],
                                [970, 90],
                                [970, 250]
                            ],
                            "native-ad": [
                                [777, 777]
                            ]
                        },
                        ut = {
                            risingstar: [
                                [{
                                    viewportSize: [986, 0],
                                    slotSizes: [
                                        [728, 90],
                                        [970, 90],
                                        [970, 250],
                                        [970, 415]
                                    ]
                                }],
                                [{
                                    viewportSize: [750, 0],
                                    slotSizes: [
                                        [728, 90]
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: [
                                        [320, 50]
                                    ]
                                }]
                            ],
                            "banner-small": [
                                [{
                                    viewportSize: [986, 0],
                                    slotSizes: [
                                        [728, 90]
                                    ]
                                }],
                                [{
                                    viewportSize: [750, 0],
                                    slotSizes: [
                                        [728, 90]
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: [
                                        [320, 50]
                                    ]
                                }]
                            ],
                            bigbox: [
                                [{
                                    viewportSize: [986, 0],
                                    slotSizes: [
                                        [300, 250],
                                        [300, 600], "fluid"
                                    ]
                                }],
                                [{
                                    viewportSize: [625, 0],
                                    slotSizes: [
                                        [300, 250],
                                        [300, 600], "fluid"
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: [
                                        [300, 250], "fluid"
                                    ]
                                }]
                            ],
                            "bigbox-fixed": [
                                [{
                                    viewportSize: [1100, 570],
                                    slotSizes: [
                                        [300, 250],
                                        [300, 600], "fluid"
                                    ]
                                }],
                                [{
                                    viewportSize: [1100, 380],
                                    slotSizes: [
                                        [300, 250], "fluid"
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: []
                                }]
                            ],
                            "bigbox-sticky": [
                                [{
                                    viewportSize: [1100, 570],
                                    slotSizes: [
                                        [300, 250],
                                        [300, 600], "fluid"
                                    ]
                                }],
                                [{
                                    viewportSize: [1100, 380],
                                    slotSizes: [
                                        [300, 250], "fluid"
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: [
                                        [300, 250], "fluid"
                                    ]
                                }]
                            ],
                            "bigbox-single": [
                                [{
                                    viewportSize: [968, 0],
                                    slotSizes: [
                                        [300, 250]
                                    ]
                                }],
                                [{
                                    viewportSize: [750, 0],
                                    slotSizes: [
                                        [300, 250]
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: [
                                        [300, 250]
                                    ]
                                }]
                            ],
                            "bigbox-single-desktop": [
                                [{
                                    viewportSize: [1100, 380],
                                    slotSizes: [
                                        [300, 250]
                                    ]
                                }],
                                [{
                                    viewportSize: [750, 0],
                                    slotSizes: []
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: []
                                }]
                            ],
                            "bigbox-double": [
                                [{
                                    viewportSize: [968, 0],
                                    slotSizes: [
                                        [300, 600]
                                    ]
                                }],
                                [{
                                    viewportSize: [750, 0],
                                    slotSizes: [
                                        [300, 600]
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: [
                                        [300, 600]
                                    ]
                                }]
                            ],
                            "bigbox-double-inread": [
                                [{
                                    viewportSize: [1101, 380],
                                    slotSizes: [
                                        [728, 90]
                                    ]
                                }],
                                [{
                                    viewportSize: [749, 0],
                                    slotSizes: [
                                        [300, 250],
                                        [300, 600],
                                        [455, 256],
                                        [728, 90]
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: [
                                        [300, 250],
                                        [300, 600],
                                        [320, 180],
                                        [42, 1], "fluid"
                                    ]
                                }]
                            ],
                            "in-read": [
                                [{
                                    viewportSize: [1101, 380],
                                    slotSizes: [
                                        [728, 90]
                                    ]
                                }],
                                [{
                                    viewportSize: [749, 0],
                                    slotSizes: [
                                        [300, 250],
                                        [455, 256],
                                        [728, 90]
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: [
                                        [300, 250],
                                        [320, 180],
                                        [42, 1], "fluid"
                                    ]
                                }]
                            ],
                            "load-more": [
                                [{
                                    viewportSize: [975, 0],
                                    slotSizes: [
                                        [300, 250],
                                        [728, 90],
                                        [970, 250]
                                    ]
                                }],
                                [{
                                    viewportSize: [749, 0],
                                    slotSizes: [
                                        [300, 250],
                                        [728, 90]
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: [
                                        [300, 250]
                                    ]
                                }]
                            ],
                            intercept: [
                                [{
                                    viewportSize: [975, 0],
                                    slotSizes: [
                                        [728, 90],
                                        [970, 250]
                                    ]
                                }],
                                [{
                                    viewportSize: [749, 0],
                                    slotSizes: [
                                        [728, 90]
                                    ]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: [
                                        [300, 250]
                                    ]
                                }]
                            ],
                            "native-ad": [
                                [{
                                    viewportSize: [975, 0],
                                    slotSizes: ["fluid"]
                                }],
                                [{
                                    viewportSize: [749, 0],
                                    slotSizes: ["fluid"]
                                }],
                                [{
                                    viewportSize: [0, 0],
                                    slotSizes: ["fluid"]
                                }]
                            ]
                        },
                        gt = ["medianet", "adagio", "ix", "triplelift", "rubicon", "appnexus", "sharethrough"],
                        ft = {
                            gptPreAuction: {
                                enabled: !0,
                                useDefaultPreAuction: !1
                            },
                            currency: {
                                adServerCurrency: "USD",
                                conversionRateFile: "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json",
                                defaultRates: {
                                    CAD: {
                                        USD: .75
                                    },
                                    EUR: {
                                        USD: 1.05
                                    }
                                }
                            },
                            rubicon: {
                                singleRequest: !0
                            }
                        },
                        bt = {
                            deviceType: {
                                mobile: 2906392,
                                desktop: 2906390
                            },
                            position: {
                                inView: "atf",
                                notInView: "btf"
                            }
                        },
                        yt = {
                            deviceType: {
                                mobile: "mobile_web",
                                desktop: "web"
                            },
                            position: {
                                inView: "above",
                                notInView: "below"
                            }
                        },
                        mt = {
                            "bigbox-iv-dt": {
                                crid: "232210651",
                                siteId: "931648",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218456,
                                pkey: "kBzn2BmEZVQL6cI45zyYzyV0"
                            },
                            "bigbox-nv-dt": {
                                crid: "232210651",
                                siteId: "931654",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218457,
                                pkey: "BBQ1ps6K6iQnxWKnmEuGHn8w"
                            },
                            "bigbox-iv-m": {
                                crid: "402846024",
                                siteId: "931650",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218476,
                                pkey: "mpnyDDjGNNpDWmGoXJj7Ht4u"
                            },
                            "bigbox-nv-m": {
                                crid: "402846024",
                                siteId: "931649",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218477,
                                pkey: "8jsNG9INQu9dtJScmJTRYLEZ"
                            },
                            "bigboxdouble-iv-dt": {
                                crid: "232210651",
                                siteId: "931647",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218458,
                                pkey: "oz5yZsIYBAzNtccmO1pmUlnG"
                            },
                            "bigboxdouble-nv-dt": {
                                crid: "232210651",
                                siteId: "931652",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218459,
                                pkey: "gGHVBaKXxV2YssQFk7GWWDpU"
                            },
                            "bigboxdouble-iv-m": {
                                crid: "402846024",
                                siteId: "931653",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218478,
                                pkey: "lYvTOHnei69bKjMQhl0aJAMz"
                            },
                            "bigboxdouble-nv-m": {
                                crid: "402846024",
                                siteId: "931651",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218479,
                                pkey: "v4Lc9X3jGVnRHYRUSAHrr9Ko"
                            },
                            "bigboxdoubleinread-iv-dt": {
                                crid: "232210651",
                                siteId: "931655",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218460,
                                pkey: "BJInO1BN6bGrlAtSCtaLXD4W"
                            },
                            "bigboxdoubleinread-nv-dt": {
                                crid: "232210651",
                                siteId: "931659",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218461,
                                pkey: "dHZmYrnQicpcS9ScEwbUVLqi"
                            },
                            "bigboxdoubleinread-iv-m": {
                                crid: "402846024",
                                siteId: "931656",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218480,
                                pkey: "tXSNTHyBt3FVwD2xcfn2dHap"
                            },
                            "bigboxdoubleinread-nv-m": {
                                crid: "402846024",
                                siteId: "931657",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218481,
                                pkey: "pseUgZdtHaVSJkofcqcwkcSQ"
                            },
                            "bigboxfixed-iv-dt": {
                                crid: "232210651",
                                siteId: "931660",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218462,
                                pkey: "Fby8vfEnPrM57Wke4frRnNMn"
                            },
                            "bigboxfixed-nv-dt": {
                                crid: "232210651",
                                siteId: "931661",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218463,
                                pkey: "WgRfhYKuX1bQHREmmmxoCX6L"
                            },
                            "bigboxfixed-iv-m": {
                                crid: "402846024",
                                siteId: "931658",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218482,
                                pkey: "LbYEoUrqwgUJ4vnnD9ryhUxE"
                            },
                            "bigboxfixed-nv-m": {
                                crid: "402846024",
                                siteId: "931662",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218483,
                                pkey: "ayC9vbW6vSisjDG7jdB4QrSt"
                            },
                            "bigboxsticky-iv-dt": {
                                crid: "232210651",
                                siteId: "931660",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218462,
                                pkey: "t1Qt7zgTpglg8AvMpyXAMEQI"
                            },
                            "bigboxsticky-nv-dt": {
                                crid: "232210651",
                                siteId: "931661",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218463,
                                pkey: "i1J3nsI2r5IkVnLDL3vxRX6y"
                            },
                            "bigboxsticky-iv-m": {
                                crid: "402846024",
                                siteId: "931658",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218482,
                                pkey: "zpXi4rJzEK7wDYEDUauEn4KJ"
                            },
                            "bigboxsticky-nv-m": {
                                crid: "402846024",
                                siteId: "931662",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218483,
                                pkey: "Ia7Re8m4VoeaUTfGTRpYy8Rd"
                            },
                            "bigboxsingle-iv-dt": {
                                crid: "232210651",
                                siteId: "931664",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218464,
                                pkey: "t1Qt7zgTpglg8AvMpyXAMEQI"
                            },
                            "bigboxsingle-nv-dt": {
                                crid: "232210651",
                                siteId: "931663",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218465,
                                pkey: "i1J3nsI2r5IkVnLDL3vxRX6y"
                            },
                            "bigboxsingle-iv-m": {
                                crid: "402846024",
                                siteId: "931669",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218484,
                                pkey: "zpXi4rJzEK7wDYEDUauEn4KJ"
                            },
                            "bigboxsingle-nv-m": {
                                crid: "402846024",
                                siteId: "931665",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218485,
                                pkey: "Ia7Re8m4VoeaUTfGTRpYy8Rd"
                            },
                            "bigboxsingledesktop-iv-dt": {
                                crid: "232210651",
                                siteId: "931666",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218466,
                                pkey: "cm5JKG85lLM7YPvfjgibYdr1"
                            },
                            "bigboxsingledesktop-nv-dt": {
                                crid: "232210651",
                                siteId: "931671",
                                inventoryCode: "cbc_desktop_bigbox_peripheral_pb",
                                placement_id: 30218467,
                                pkey: "crI3cTr1gOSxnIlyZ23DQzxl"
                            },
                            "bigboxsingledesktop-iv-m": {
                                crid: "402846024",
                                siteId: "931667",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218486,
                                pkey: "np5qMiE0PWvVRsa3qHTZUYkK"
                            },
                            "bigboxsingledesktop-nv-m": {
                                crid: "402846024",
                                siteId: "931668",
                                inventoryCode: "cbc_mobile_bigbox_pb",
                                placement_id: 30218487,
                                pkey: "33DJ0NBnXLtFOB5dOGnv64rv"
                            },
                            "inread-iv-dt": {
                                crid: "232210651",
                                siteId: "931674",
                                inventoryCode: "cbc_desktop_inread_pb",
                                placement_id: 30218468,
                                pkey: "KKzapNSLXbvWolJNTDxqauzF"
                            },
                            "inread-nv-dt": {
                                crid: "232210651",
                                siteId: "931673",
                                inventoryCode: "cbc_desktop_inread_pb",
                                placement_id: 30218469,
                                pkey: "w2OlyfMhcv9ua2Sadz08kmfq"
                            },
                            "inread-iv-m": {
                                crid: "402846024",
                                siteId: "931670",
                                inventoryCode: "cbc_mobile_inread_pb",
                                placement_id: 30218488,
                                pkey: "uN8AsE5yPL0dqGgPkIHEJfeu"
                            },
                            "inread-nv-m": {
                                crid: "402846024",
                                siteId: "931672",
                                inventoryCode: "cbc_mobile_inread_pb",
                                placement_id: 30218489,
                                pkey: "355bMFrEjec0XffEnMqIAByY"
                            },
                            "intercept-iv-dt": {
                                crid: "414421793",
                                siteId: "931675",
                                inventoryCode: "cbc_desktop_intercept_pb",
                                placement_id: 30218470,
                                pkey: "kPmNbiSNZgvLvOFB6tt92Nnj"
                            },
                            "intercept-nv-dt": {
                                crid: "414421793",
                                siteId: "931679",
                                inventoryCode: "cbc_desktop_intercept_pb",
                                placement_id: 30218471,
                                pkey: "FKYoS17J7cUCBv6ZE2tXtt6Q"
                            },
                            "intercept-iv-m": {
                                crid: "882207377",
                                siteId: "931676",
                                inventoryCode: "cbc_mobile_intercept_pb",
                                placement_id: 30218490,
                                pkey: "gd9zDKhAGvabYYxZde8HD0EH"
                            },
                            "intercept-nv-m": {
                                crid: "882207377",
                                siteId: "931678",
                                inventoryCode: "cbc_mobile_intercept_pb",
                                placement_id: 30218491,
                                pkey: "Mn5pL46HRb3AKXS8f3iHkL9c"
                            },
                            "loadmore-iv-dt": {
                                crid: "414421793",
                                siteId: "931681",
                                inventoryCode: "cbc_desktop_loadmore_pb",
                                placement_id: 30218472,
                                pkey: "Zkzbg6NhL1JSEaGEB0dPVSlL"
                            },
                            "loadmore-nv-dt": {
                                crid: "414421793",
                                siteId: "931677",
                                inventoryCode: "cbc_desktop_loadmore_pb",
                                placement_id: 30218473,
                                pkey: "XPP9Jc83zBR70RCYSYW6eBWA"
                            },
                            "loadmore-iv-m": {
                                crid: "882207377",
                                siteId: "931680",
                                inventoryCode: "cbc_mobile_loadmore_pb",
                                placement_id: 30218492,
                                pkey: "xAPrr51PcdiqLWpqOaTTzzLt"
                            },
                            "loadmore-nv-m": {
                                crid: "882207377",
                                siteId: "931685",
                                inventoryCode: "cbc_mobile_loadmore_pb",
                                placement_id: 30218493,
                                pkey: "KC9t6ChLWrrpjP85dmK9ZhQf"
                            },
                            "risingstar-iv-dt": {
                                crid: "828228606",
                                siteId: "931684",
                                inventoryCode: "cbc_desktop_risingstar_pb",
                                placement_id: 30218474,
                                pkey: "UDkoTiJdE2bUqbNOGNLVORZC"
                            },
                            "risingstar-nv-dt": {
                                crid: "828228606",
                                siteId: "931686",
                                inventoryCode: "cbc_desktop_risingstar_pb",
                                placement_id: 30218475,
                                pkey: "Wj6P1pHbtEHjdgVLkUFtWgyo"
                            },
                            "risingstar-iv-m": {
                                crid: "557619675",
                                siteId: "931682",
                                inventoryCode: "cbc_mobile_risingstar_pb",
                                placement_id: 30218494,
                                pkey: "lSsRcF92d86cmHvnjB85g02k"
                            },
                            "risingstar-nv-m": {
                                crid: "557619675",
                                siteId: "931683",
                                inventoryCode: "cbc_mobile_risingstar_pb",
                                placement_id: 30218495,
                                pkey: "t7AMD0s8chahhSbflhwLKvDG"
                            },
                            "bannersmall-iv-dt": {
                                crid: "828228606",
                                siteId: "931684",
                                inventoryCode: "cbc_desktop_risingstar_pb",
                                placement_id: 30218474,
                                pkey: "UDkoTiJdE2bUqbNOGNLVORZC"
                            },
                            "bannersmall-nv-dt": {
                                crid: "828228606",
                                siteId: "931686",
                                inventoryCode: "cbc_desktop_risingstar_pb",
                                placement_id: 30218475,
                                pkey: "Wj6P1pHbtEHjdgVLkUFtWgyo"
                            },
                            "bannersmall-iv-m": {
                                crid: "557619675",
                                siteId: "931682",
                                inventoryCode: "cbc_mobile_risingstar_pb",
                                placement_id: 30218494,
                                pkey: "lSsRcF92d86cmHvnjB85g02k"
                            },
                            "bannersmall-nv-m": {
                                crid: "557619675",
                                siteId: "931683",
                                inventoryCode: "cbc_mobile_risingstar_pb",
                                placement_id: 30218495,
                                pkey: "t7AMD0s8chahhSbflhwLKvDG"
                            }
                        },
                        vt = {
                            risingstar: {
                                sml: [
                                    [320, 50]
                                ],
                                med: [
                                    [728, 90]
                                ],
                                large: [
                                    [728, 90],
                                    [970, 90],
                                    [970, 250],
                                    [970, 415]
                                ]
                            },
                            "banner-small": {
                                sml: [
                                    [320, 50]
                                ],
                                med: [
                                    [728, 90]
                                ],
                                large: [
                                    [728, 90]
                                ]
                            },
                            bigbox: {
                                sml: [
                                    [300, 250]
                                ],
                                med: [
                                    [300, 250],
                                    [300, 600]
                                ],
                                large: [
                                    [300, 250],
                                    [300, 600]
                                ]
                            },
                            "bigbox-fixed": {
                                sml: [
                                    [300, 250]
                                ],
                                med: [
                                    [300, 250]
                                ],
                                large: [
                                    [300, 250],
                                    [300, 600]
                                ]
                            },
                            "bigbox-sticky": {
                                sml: [
                                    [300, 250]
                                ],
                                med: [
                                    [300, 250]
                                ],
                                large: [
                                    [300, 250],
                                    [300, 600]
                                ]
                            },
                            "bigbox-single": {
                                sml: [
                                    [300, 250]
                                ],
                                med: [
                                    [300, 250]
                                ],
                                large: [
                                    [300, 250]
                                ]
                            },
                            "bigbox-single-desktop": {
                                sml: [
                                    [300, 250]
                                ],
                                med: [
                                    [300, 250]
                                ],
                                large: [
                                    [300, 250]
                                ]
                            },
                            "bigbox-double": {
                                sml: [
                                    [300, 600]
                                ],
                                med: [
                                    [300, 600]
                                ],
                                large: [
                                    [300, 600]
                                ]
                            },
                            "bigbox-double-inread": {
                                sml: [
                                    [300, 250],
                                    [300, 600],
                                    [320, 180]
                                ],
                                med: [
                                    [300, 250],
                                    [300, 600],
                                    [455, 256],
                                    [728, 90]
                                ],
                                large: [
                                    [728, 90]
                                ]
                            },
                            "in-read": {
                                sml: [
                                    [300, 250],
                                    [320, 180]
                                ],
                                med: [
                                    [300, 250],
                                    [455, 256],
                                    [728, 90]
                                ],
                                large: [
                                    [728, 90]
                                ]
                            },
                            "load-more": {
                                sml: [
                                    [320, 50]
                                ],
                                med: [
                                    [728, 90],
                                    [300, 250]
                                ],
                                large: [
                                    [728, 90],
                                    [300, 250],
                                    [970, 250]
                                ]
                            },
                            intercept: {
                                sml: [
                                    [320, 50]
                                ],
                                med: [
                                    [728, 90]
                                ],
                                large: [
                                    [728, 90],
                                    [970, 250]
                                ]
                            }
                        };
                    let wt = !1;
                    const ht = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        window.pbjs.initAdserverSet || e || (window.pbjs.initAdserverSet = !0, window.googletag.cmd.push((() => {
                            window.pbjs.que.push((() => {
                                window.pbjs.setTargetingForGPTAsync(), window.googletag.pubads().refresh(St.allSlots, {
                                    changeCorrelator: _t
                                })
                            }))
                        })), St.pbjsSlots.splice(0, St.pbjsSlots.length), St.allSlots.splice(0, St.allSlots.length))
                    };
                    let _t = !1;
                    const St = {
                            testHierarchy: "",
                            adPosCount: 0,
                            adTestCheck: !1,
                            pageChange: !1,
                            gptCallback: null,
                            pbjsSlots: [],
                            allSlots: []
                        },
                        kt = "undefined" != typeof window ? document.querySelectorAll(".wallpaper-ad-wrap > .ad") : null,
                        xt = "click-wp",
                        Ot = "undefined" != typeof window ? document.querySelector(".ad-risingstar-container") : null,
                        Ct = "undefined" != typeof window ? document.querySelector(".ad-risingstar") : null,
                        jt = "undefined" != typeof window ? document.querySelector(".risingstar") : null;
                    let It, Pt = "";
                    const Et = e => {
                            const {
                                target: t
                            } = e;
                            null !== e.target && t instanceof HTMLElement && t.classList.contains(xt) && window.open(Pt, "_blank")
                        },
                        zt = e => {
                            var t, n;
                            window.innerWidth >= 1224 && (t = e, null !== kt && (It = Et.bind(void 0), kt.forEach((e => {
                                e.classList.add(xt), e.setAttribute("data-cy", xt), e.style.backgroundImage = `url("${t.wallpaper}")`, Pt = t.clickthroughUrl, e.addEventListener("click", It)
                            })), setTimeout((function() {
                                window.dispatchEvent(new Event("resize"))
                            }), 350), "" !== t.backgroundColour && (n = t.backgroundColour, null !== jt && (jt.style.backgroundColor = n))))
                        },
                        Tt = () => {
                            null !== kt && (kt.forEach((e => {
                                e.style.removeProperty("background-image"), e.classList.remove(xt), e.removeAttribute("data-cy"), e.removeEventListener("click", It)
                            })), null != jt && jt.style.removeProperty("background-color"))
                        },
                        At = /wallpaperParams = ([^;]+)/g,
                        Dt = /interscrollerParams = ([^;]+)/g,
                        Rt = /clickUrl = "([^"]+)/g;
                    let Lt;
                    const Nt = e => e.risingstar,
                        Mt = e => e.personalisation,
                        Ut = n => {
                            const {
                                appDomCallback: o,
                                cardType: i,
                                pageChangeCallback: a,
                                pageData: s,
                                responsive: c,
                                type: d
                            } = n, l = (0, r.useDispatch)(), {
                                pageType: p
                            } = s, u = (0, r.useSelector)(Nt), g = (0, r.useSelector)(Mt), [f, b] = (0, t.useState)(!0), [y, m] = (0, t.useState)(""), v = "risingstar" === d, w = "native-ad" === d, h = (0, t.useRef)(), _ = (0, t.useRef)(), S = i ? "sponsored card card" + i.charAt(0).toUpperCase() + i.slice(1) : void 0, k = "bigbox-fixed" === d ? {
                                top: u.height + 30 + "px"
                            } : void 0, x = `ad-${d} ${w?"":`ad-${p}`} ${c?"responsive":""} ${"native-ad"===d?S:""}`;
                            (0, t.useEffect)((() => {
                                const e = Object.assign({}, n),
                                    t = d + "-" + Math.floor(1e6 * Math.random() + 1);
                                m(t), e.containerId = t;
                                const r = () => {
                                        l(Qe((e => {
                                            const t = window.scrollY;
                                            return t >= 0 && !e || !(t <= 0) && void 0
                                        })(u.timerFinished)))
                                    },
                                    i = e => {
                                        (e => {
                                            const t = e.includes("/none") ? "none" : "block";
                                            if (null !== Ot) {
                                                if (window.getComputedStyle(Ot).display === t) return;
                                                Ot.classList.toggle("displayNone")
                                            }
                                        })(e.hierarchy);
                                        const t = {
                                            init: e.init,
                                            type: e.type,
                                            responsive: e.responsive,
                                            lazy: e.lazy,
                                            hierarchy: e.hierarchy,
                                            targeting: e.targeting,
                                            container: e.containerId,
                                            exclusions: e.exclusions,
                                            personalisation: g,
                                            appDomCallback: e.appDomCallback,
                                            displayAdCallback: e => {
                                                a(), "object" == typeof e && null !== e && "slot" in e && e.slot.getSlotElementId().includes("risingstar") && (l(Ye(!0)), (() => {
                                                    if (null !== jt && null !== Ct) {
                                                        const t = (e = jt.clientHeight) <= 50 ? "risingstar-size-small" : e > 50 && e <= 90 ? "risingstar-size-medium" : e > 90 && e <= 250 ? "risingstar-size-large" : e > 250 ? "risingstar-size-xlarge" : "";
                                                        Ct.classList.forEach((e => {
                                                            if (e.includes("risingstar-size")) return Ct.classList.add(t), void Ct.classList.remove(e)
                                                        })), Ct.classList.add(t)
                                                    }
                                                    var e
                                                })(), _.current = setTimeout((() => {
                                                    ((e, t) => {
                                                        e(Qe(!1)), e(Xe(0)), e(Je(!0)), window.removeEventListener("scroll", t)
                                                    })(l, r), l(Je(!1))
                                                }), 6e3))
                                            },
                                            unitTest: !1
                                        };
                                        window.googletag.cmd.push((() => {
                                            (e => {
                                                const {
                                                    type: t,
                                                    hierarchy: n,
                                                    container: r,
                                                    targeting: o,
                                                    unitTest: i,
                                                    init: a,
                                                    exclusions: s,
                                                    displayAdCallback: c,
                                                    lazy: d,
                                                    personalisation: l
                                                } = e, p = l.cmpData.cmpOptIn, u = "native-ad" !== t && "outofpage" !== t, g = (f = window.navigator.userAgent).includes("Opera") || f.includes("OPR") ? "Opera" : f.includes("Chrome") ? "Chrome" : f.includes("Safari") ? "Safari" : f.includes("Firefox") ? "Firefox" : "Unknown";
                                                var f;
                                                const b = "" === document.referrer ? "direct" : "indirect",
                                                    y = {
                                                        cmp: p.toString(),
                                                        browser: g,
                                                        device: "web-app",
                                                        adtest: "",
                                                        source: b
                                                    };
                                                if ("string" == typeof o.bu && (y.bu = o.bu, delete o.bu), "risingstar" === t) {
                                                    if (!St.adTestCheck && window.location.search.includes("adtest=")) {
                                                        St.adTestCheck = !0;
                                                        const e = (() => {
                                                            const e = window.location.search,
                                                                t = /adtest=([^&]+)/g.exec(e);
                                                            return t ? t[1] : ""
                                                        })();
                                                        St.testHierarchy = e, y.adtest = e
                                                    }((e, t, n) => {
                                                        for (const r in e) "bu" === r && t.includes("/olympics/") && (e[r] = "olympics"), window.googletag && window.googletag.pubadsReady && window.googletag.pubads().setTargeting(r, e[r]);
                                                        (0, dt.setPersonalisedTargeting)(n, window.location.search)
                                                    })(y, n, l)
                                                }
                                                const m = ((e, t, n) => "outofpage" === e ? window.googletag.defineOutOfPageSlot(t, n).addService(window.googletag.pubads()) : window.googletag.defineSlot(t, pt[e], n).addService(window.googletag.pubads()))(t, n, r);
                                                if ("outofpage" !== t && (!0 === d && window.googletag && window.googletag.pubadsReady && window.googletag.pubads().enableLazyLoad({
                                                        fetchMarginPercent: 0,
                                                        renderMarginPercent: 0,
                                                        mobileScaling: 1
                                                    }), ((e, t) => {
                                                        const n = ut[e],
                                                            r = window.googletag.sizeMapping().addSize(n[0][0].viewportSize, n[0][0].slotSizes).addSize(n[1][0].viewportSize, n[1][0].slotSizes).addSize(n[2][0].viewportSize, n[2][0].slotSizes).build();
                                                        t.defineSizeMapping(r)
                                                    })(t, m)), null != s && s.length > 0 && s.forEach((e => {
                                                        m.setCategoryExclusion(e)
                                                    })), ((e, t, n) => {
                                                        St.adPosCount >= 0 && St.adPosCount <= Gt && St.adPosCount++;
                                                        let r = lt[t];
                                                        null == r && (r = St.adPosCount), e.pos = r.toString(), e.refresh = "0";
                                                        for (const o in e) "plc" === o && "native-ad" === t && (e[o] = "native"), n.setTargeting(o, e[o])
                                                    })(o, t, m), i || void 0 === window.pbjs.version || n.includes("/none") || St.adTestCheck) window.googletag.cmd.push((() => {
                                                    window.googletag.display(m), window.googletag.pubads().refresh([m], {
                                                        changeCorrelator: St.pageChange
                                                    })
                                                })), St.pageChange && (St.pageChange = !1);
                                                else {
                                                    St.allSlots.push(m), u && ((e, t, n, r) => {
                                                        const o = {
                                                            slot: e,
                                                            type: t,
                                                            container: n,
                                                            hierarchy: r
                                                        };
                                                        St.pbjsSlots.push(o)
                                                    })(m, t, r, n);
                                                    const e = ((e, t) => ({
                                                            unitTest: e,
                                                            pageChange: St.pageChange,
                                                            cmpOptIn: t
                                                        }))(i, p),
                                                        o = ((e, t) => {
                                                            const n = t.dmpSegments.concat(t.cdpSegments);
                                                            return {
                                                                browser: e,
                                                                audienceList: n.length > 0 ? n.join() : ""
                                                            }
                                                        })(g, l);
                                                    window.googletag && window.googletag.pubadsReady && Gt >= 1 && Gt === window.googletag.pubads().getSlots().length && ((e, t, n) => {
                                                        window.googletag.cmd.push((() => {
                                                            window.googletag.display(e)
                                                        })), St.pbjsSlots.length > 0 ? ((e, t, n) => {
                                                            const {
                                                                unitTest: r,
                                                                pageChange: o,
                                                                cmpOptIn: i
                                                            } = t, {
                                                                browser: a,
                                                                audienceList: s
                                                            } = n;
                                                            wt && !r || (e => {
                                                                wt = !0, window.ADAGIO && (window.ADAGIO.doNotRefresh = window.ADAGIO.doNotRefresh || [], window.ADAGIO.doNotRefresh.push("*")), window.pbjs.enableAnalytics([{
                                                                    provider: "adagio"
                                                                }]);
                                                                const t = e ? "include" : "exclude";
                                                                window.pbjs.setConfig({ ...ft,
                                                                    userSync: {
                                                                        syncEnabled: e,
                                                                        filterSettings: {
                                                                            all: {
                                                                                bidders: gt,
                                                                                filter: t
                                                                            }
                                                                        }
                                                                    },
                                                                    deviceAccess: e
                                                                });
                                                                const n = {};
                                                                e && (n.adagio = {
                                                                    storageAllowed: e
                                                                }, n.ix = {
                                                                    storageAllowed: e
                                                                }, n.triplelift = {
                                                                    storageAllowed: e
                                                                }), window.pbjs.bidderSettings = n
                                                            })(i), _t = o, window.pbjs.mergeConfig({
                                                                ix: {
                                                                    firstPartyData: {
                                                                        browser: a,
                                                                        audienceList: s
                                                                    }
                                                                }
                                                            });
                                                            const c = (e => {
                                                                const t = [];
                                                                return e.forEach((e => {
                                                                    const n = (e => {
                                                                            if ("undefined" != typeof window) {
                                                                                const t = window.innerWidth;
                                                                                return t < 749 ? vt[e].sml : t < 986 ? vt[e].med : vt[e].large
                                                                            }
                                                                            return [
                                                                                []
                                                                            ]
                                                                        })(e.type),
                                                                        r = document.querySelectorAll(`.${e.type}`),
                                                                        o = (() => {
                                                                            let e = !1;
                                                                            return (t => {
                                                                                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substring(0, 5))) && (e = !0)
                                                                            })(navigator.userAgent), e
                                                                        })() ? "mobile" : "desktop",
                                                                        i = (e => {
                                                                            const t = e[e.length - 1].getBoundingClientRect();
                                                                            return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
                                                                        })(r) ? "inView" : "notInView";
                                                                    let a = e.container.replace(/[^A-Za-z]+/g, "");
                                                                    a = "inView" === i ? a + "-iv" : a + "-nv", a = "mobile" === o ? a + "-m" : a + "-dt";
                                                                    const s = "function" == typeof crypto.randomUUID ? crypto.randomUUID() : null,
                                                                        c = e.hierarchy + "#" + e.type,
                                                                        d = ((e, t, n, r) => [{
                                                                            bidder: "medianet",
                                                                            params: {
                                                                                cid: "8CU5T9RDM",
                                                                                crid: mt[t].crid
                                                                            }
                                                                        }, {
                                                                            bidder: "adagio",
                                                                            params: {
                                                                                organizationId: "1268",
                                                                                site: "cbc-ca",
                                                                                adUnitElementId: `${e.container}`,
                                                                                placement: `${e.type}`,
                                                                                environment: `${n}`
                                                                            }
                                                                        }, {
                                                                            bidder: "ix",
                                                                            params: {
                                                                                siteId: mt[t].siteId
                                                                            }
                                                                        }, {
                                                                            bidder: "triplelift",
                                                                            params: {
                                                                                inventoryCode: mt[t].inventoryCode
                                                                            }
                                                                        }, {
                                                                            bidder: "rubicon",
                                                                            params: {
                                                                                accountId: 20374,
                                                                                siteId: 489706,
                                                                                zoneId: bt.deviceType[n],
                                                                                position: bt.position[r]
                                                                            }
                                                                        }, {
                                                                            bidder: "appnexus",
                                                                            params: {
                                                                                placement_id: mt[t].placement_id,
                                                                                position: yt.position[r],
                                                                                supply_type: yt.deviceType[n]
                                                                            }
                                                                        }, {
                                                                            bidder: "sharethrough",
                                                                            params: {
                                                                                pkey: mt[t].pkey
                                                                            }
                                                                        }])(e, a, o, i);
                                                                    if (0 === d.length) return [];
                                                                    const l = {
                                                                        path: `${e.hierarchy}`,
                                                                        code: `${e.container}`,
                                                                        mediaTypes: {
                                                                            banner: {
                                                                                sizes: n
                                                                            }
                                                                        },
                                                                        ortb2Imp: {
                                                                            ext: {
                                                                                tid: s,
                                                                                gpid: c
                                                                            }
                                                                        },
                                                                        bids: d
                                                                    };
                                                                    t.push(l)
                                                                })), t
                                                            })(e);
                                                            0 !== c.length ? (r ? ht(r) : (window.googletag.cmd.push((() => {
                                                                window.pbjs.initAdserverSet = !1
                                                            })), window.pbjs.que.push((() => {
                                                                window.pbjs.adUnits = [], window.pbjs.addAdUnits(c), window.pbjs.requestBids({
                                                                    bidsBackHandler: ht,
                                                                    timeout: 800
                                                                })
                                                            }))), setTimeout((() => {
                                                                ht()
                                                            }), 1500)) : window.googletag.cmd.push((() => {
                                                                window.googletag.pubads().refresh(null, {
                                                                    changeCorrelator: o
                                                                })
                                                            }))
                                                        })(St.pbjsSlots, t, n) : 0 === St.pbjsSlots.length && St.allSlots.length > 0 && window.googletag && window.googletag.pubadsReady && window.googletag.cmd.push((() => {
                                                            window.googletag.pubads().refresh(null, {
                                                                changeCorrelator: St.pageChange
                                                            })
                                                        })), St.pageChange && (St.pageChange = !1)
                                                    })(m, e, o)
                                                }
                                                a && void 0 !== c && (St.gptCallback = c)
                                            })(t)
                                        }))
                                    };
                                let s;
                                return n.unitTest ? n.unitTest && v && "listen" !== e.targeting.plc && window.addEventListener("scroll", r) : s = setTimeout((() => {
                                    void 0 !== e.init && (St.gptCallback = null, St.adPosCount = 0), i(e), v && "listen" !== e.targeting.plc && window.addEventListener("scroll", r), w && (h.current = setTimeout((() => {
                                        o && o(!0)
                                    }), 4e3), window.googletag && window.googletag.pubadsReady && window.googletag.pubads().addEventListener("slotResponseReceived", (e => {
                                        e.slot && e.slot.getSlotElementId().includes("native-ad") && ((e, t, n, r) => {
                                            var o;
                                            clearTimeout(e.current);
                                            let i = !0;
                                            i = !t.slot.getResponseInformation() || null === (null === (o = t.slot.getResponseInformation()) || void 0 === o ? void 0 : o.creativeId), r && r(i), i || n(i)
                                        })(h, e, b, n.appDomCallback)
                                    })))
                                }), 100), () => {
                                    clearTimeout(Lt), clearTimeout(s), v && (l(Je(!1)), l(Ye(!1)), window.removeEventListener("scroll", r), clearTimeout(_.current))
                                }
                            }), []);
                            const O = {
                                wrapperClasses: x,
                                containerId: y,
                                type: d,
                                wrapperStyleObj: k,
                                risingstar: u,
                                nativeAdEmpty: f
                            };
                            return v ? (0, e.jsx)(at, { ...O
                            }) : w ? (0, e.jsx)(st, { ...O
                            }) : (0, e.jsx)(ct, { ...O
                            })
                        },
                        qt = (t, n, r, o) => {
                            const i = {
                                    init: t.init,
                                    containerId: "",
                                    type: t.type,
                                    responsive: t.responsive,
                                    lazy: t.lazy,
                                    hierarchy: o.current,
                                    targeting: t.targeting,
                                    unitTest: t.unitTest,
                                    exclusions: t.exclusions,
                                    path: n.pageData.pagePath,
                                    pageData: n.pageData,
                                    cardType: t.cardType,
                                    unmounted: t.unmounted,
                                    appDomCallback: t.callback || t.setNullRender,
                                    pageChangeCallback: () => t.init && r(He(n.pageData))
                                },
                                a = Math.floor(1e5 * Math.random());
                            return (0, e.jsx)(Ut, { ...i
                            }, a)
                        },
                        Bt = ["/archery", "/aquatics", "/athletics", "/badminton", "/basketball", "/volleyball", "/boxing", "/breaking", "/canoe", "/cycling", "/equestrian", "/fencing", "/fieldhockey", "/golf", "/gymnastics", "/handball", "/judo", "/modernpentathlon", "/rowing", "/rugby", "/sailing", "/shooting", "/skateboarding", "/soccer", "/sportclimbing", "/surfing", "/tabletennis", "/taekwondo", "/tennis", "/triathlon", "/volleyball", "/weightlifting", "/wrestling"],
                        $t = ["news/index", "news/canada/index", "news/canada/britishcolumbia/index", "news/canada/britishcolumbia/story", "news/canada/calgary/story", "news/canada/manitoba/index", "news/canada/newfoundlandlabrador/index", "news/canada/ottawa/index", "news/canada/toronto/story", "news/politics/story", "news/world/index", "news/world/story"],
                        Ft = e => {
                            let t = decodeURI(e).toLowerCase().replace(/\s+|-+/g, "");
                            return t = t.includes("/canadaday") ? t.replace("/canadaday", "/life/canadaday") : t, t
                        };
                    let Gt = 0,
                        Vt = -1;
                    const Ht = e => e.gptInit,
                        Kt = e => e.pageLocation,
                        Wt = e => e.adsBlocked,
                        Xt = n => {
                            const {
                                callback: o,
                                hierarchy: i,
                                init: a,
                                pageData: s,
                                unitTest: c,
                                type: d
                            } = n, [l, p] = (0, t.useState)((0, e.jsx)(e.Fragment, {})), u = (0, r.useSelector)(Ht), g = (0, r.useSelector)(Kt), f = (0, r.useSelector)(Wt), b = (0, r.useDispatch)(), y = (0, t.useRef)(s.pagePath), m = (0, t.useRef)("");
                            return (0, t.useEffect)((() => {
                                Gt += 1, Vt = "load-more" === d ? Vt += 1 : Vt;
                                const e = setTimeout((() => {
                                    a && (async (e, t) => {
                                        const n = (0, dt.detectAdsBlocked)();
                                        if (n) e(tt(n));
                                        else {
                                            (0, dt.insertScripts)(), (() => {
                                                let e = 0;
                                                const t = n => {
                                                    try {
                                                        Object.entries(n).forEach((e => {
                                                            window.googletag && window.googletag.pubadsReady && window.googletag.pubads().setTargeting(e[0], e[1])
                                                        })), e = 0
                                                    } catch (r) {
                                                        e += 1, 5 >= e ? (console.log("CONTXTFUL:", e, ", Retry callback in 100ms", r), setTimeout((function() {
                                                            t(n)
                                                        }), 100)) : (console.log("CONTXTFUL: Reached max callback tries. Wait next iteration."), e = 0)
                                                    }
                                                };
                                                window.CONTXTFUL_CALLBACK = t
                                            })(), window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], window.googletag = window.googletag || {
                                                cmd: []
                                            };
                                            const n = await (0, dt.getPPID)(),
                                                r = null !== n ? n : "",
                                                o = (0, dt.getUserPersonalisation)();
                                            e(ot(o)), ((e, t, n) => {
                                                window.googletag.cmd.push((() => {
                                                    window.googletag.companionAds().setRefreshUnfilledSlots(!0), window.googletag.pubads().disableInitialLoad(), window.googletag.pubads().enableSingleRequest(), window.googletag.pubads().enableAsyncRendering(), window.googletag.pubads().enableVideoAds(), window.googletag.pubads().setPublisherProvidedId(t), window.googletag.enableServices()
                                                })), e(Fe(!0)), ((e, t) => {
                                                    window.googletag && window.googletag.pubadsReady && (window.googletag.pubads().addEventListener("slotRenderEnded", (n => {
                                                        (e => {
                                                            const t = e.slot.getSlotElementId();
                                                            try {
                                                                if (t.includes("outofpage")) return;
                                                                if (t.includes("native-ad")) return;
                                                                const e = document.querySelector(`#${t} iframe`);
                                                                e && (e.setAttribute("tabIndex", "-1"), e.setAttribute("aria-hidden", "true"))
                                                            } catch (e) {
                                                                console.error("setTabIndex or aria-hidden failed to update dom: ", e, t)
                                                            }
                                                        })(n), ((e, t) => {
                                                            const n = e.slot.getHtml ? e.slot.getHtml() : "",
                                                                r = e.slot.getSlotElementId();
                                                            if (document.querySelector(`#${r}`).classList.remove("ad-interscroller"), e.slot && r.includes("risingstar")) {
                                                                if (e && Array.isArray(e.size) && "number" == typeof e.size[1]) {
                                                                    const n = e.size[1] + 40;
                                                                    t(Xe(n)), t(Je(!1))
                                                                }
                                                            } else n.includes("cbcWallpaper") ? (e => {
                                                                const t = new RegExp(At),
                                                                    n = new RegExp(Rt),
                                                                    r = t.exec(e),
                                                                    o = n.exec(e),
                                                                    i = o ? encodeURI(o[1]) : "",
                                                                    a = r ? JSON.parse(r[1]) : {};
                                                                a.clickthroughUrl = i, zt(a)
                                                            })(n) : n.includes("cbcInterscroller") && ((e, t) => {
                                                                const n = new RegExp(Dt).exec(t),
                                                                    r = n ? JSON.parse(n[1]) : {};
                                                                document.querySelector(`#${e}`).classList.add("ad-interscroller");
                                                                const o = document.querySelector(`#${e} div:first-child`);
                                                                o.classList.add("interscrollerWrap"), o.style.width = "", o.style.height = "";
                                                                const i = document.querySelector(`#${e} iframe:first-child`);
                                                                i.classList.add("interscrollerBackground"), i.style.backgroundImage = `url("${r.background}")`
                                                            })(r, n)
                                                        })(n, e), void 0 !== t && t()
                                                    })), window.googletag.pubads().addEventListener("slotOnload", (e => {
                                                        null !== St.gptCallback && St.gptCallback(e)
                                                    })), window.location.search.includes("adtest=") || window.location.search.includes("adrefresh=disabled") || window.googletag.pubads().addEventListener("impressionViewable", (e => {
                                                        e.slot.getSlotElementId().includes("outofpage") || (e => {
                                                            let t = 35;
                                                            const n = document.querySelector(`#${e.slot.getSlotElementId()} > div`);
                                                            let r = !0;
                                                            const o = new IntersectionObserver((e => {
                                                                    let [t] = e;
                                                                    r = t.isIntersecting
                                                                }), {
                                                                    threshold: .5
                                                                }),
                                                                i = () => {
                                                                    o.observe(n);
                                                                    const a = n.matches(":hover");
                                                                    if (document.hidden || !r || a || (t -= 1), Lt = setTimeout((() => {
                                                                            i()
                                                                        }), 1e3), 0 === t) {
                                                                        t = 35, clearTimeout(Lt), o.unobserve(n);
                                                                        const r = (Number(e.slot.getTargeting("refresh")[0]) + 1).toString();
                                                                        e.slot.setTargeting("refresh", r), window.googletag && window.googletag.pubadsReady && window.googletag.pubads().refresh([e.slot], {
                                                                            changeCorrelator: St.pageChange
                                                                        })
                                                                    }
                                                                };
                                                            i()
                                                        })(e)
                                                    })))
                                                })(e, n)
                                            })(e, r, t)
                                        }
                                    })(b, o)
                                }), 100);
                                return () => {
                                    if (Gt -= 1, Vt = "load-more" === d ? Vt -= 1 : Vt, clearTimeout(e), window.googletag && window.googletag.pubadsReady) {
                                        const e = d;
                                        window.googletag.pubads().getSlots().forEach((t => {
                                            t.getSlotElementId().includes(e) && !y.current.includes("livestory") && (window.googletag.destroySlots([t]), "outofpage" === e && Tt())
                                        }))
                                    }
                                }
                            }), []), (0, t.useEffect)((() => {
                                if (u.gptInit) {
                                    c && p(qt(n, g, b, m));
                                    const e = (e => (e = (e = decodeURI(e).toLowerCase().replace("/5876/", "").replace(/\s+|-+/g, "")).includes("/") ? e.substring(0, e.lastIndexOf("/")) : e).includes("listen/") ? e.replace("listen/", "") : e)(i),
                                        t = Ft(window.location.pathname);
                                    t.includes(e) || "home" === e && "/" === t || t.includes("player/play") ? (m.current = (e => {
                                        let t = "string" == typeof e && e.includes("/5876/") ? e : "/5876/error";
                                        return t = Ft(t), t
                                    })(i), $t.some((e => m.current.includes(e))) && (m.current = m.current + "/" + (e => {
                                        let t = "feed" === e.targeting.plc || void 0 === e.targeting.plc ? e.type : e.targeting.plc;
                                        return "more" === t && (t = Vt > 0 ? t + Vt : t), t
                                    })(n)), m.current.includes("sports/olympics") && (m.current = (e => (e = e.includes("player") ? e.replace("player/sports", "").replace("/olympics", "olympics/video") : Bt.some((t => e.includes(t))) ? e.replace("sports/", "").replace("/summer", "/sports").replace("/winter", "/sports") : e.replace("sports/", "").replace("/summer", "").replace("/winter", ""), e))(m.current)), "string" == typeof n.adTestGroup && (m.current = ((e, t) => {
                                        const n = "" === document.referrer ? "direct" : "indirect";
                                        let r = "50";
                                        return "B" === e && (r = "35"), "C" === e && (r = "15"), t.replace("news/canada", "news/" + n + "/canada" + r)
                                    })(n.adTestGroup, m.current)), a && b(He({
                                        pagePath: s.pagePath,
                                        pageSection: s.pageSection,
                                        pageType: s.pageType
                                    })), y.current !== s.pagePath && (y.current = s.pagePath, (() => {
                                        window.googletag.destroySlots();
                                        try {
                                            Tt()
                                        } catch (e) {}
                                        St.testHierarchy = "", St.adPosCount = 0, St.adTestCheck = !1, St.pageChange = !0, St.pbjsSlots.splice(0, St.pbjsSlots.length), St.allSlots.splice(0, St.allSlots.length)
                                    })()), p(qt(n, g, b, m))) : "none" === e && p(qt(n, g, b, m))
                                } else "function" == typeof o && f.adsBlocked && o && o(!0)
                            }), [u.gptInit, s.pagePath, f.adsBlocked]), (0, e.jsx)(e.Fragment, {
                                children: l
                            })
                        },
                        Jt = n => {
                            const o = it;
                            return (0, e.jsx)(t.StrictMode, {
                                children: (0, e.jsx)(r.Provider, {
                                    store: o,
                                    children: (0, e.jsx)(Xt, { ...n
                                    })
                                })
                            })
                        }
                })(), a
            })(), e.exports = r(n(35098), n(42820))
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-vendor-macaw.59a64ae05bce21c66300.js.map