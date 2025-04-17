/* prebid.js v9.24.0
Updated: 2024-12-20
Modules: rtdModule, adagioBidAdapter, appnexusBidAdapter, ixBidAdapter, medianetBidAdapter, rubiconBidAdapter, sharethroughBidAdapter, tripleliftBidAdapter, adagioAnalyticsAdapter, medianetAnalyticsAdapter, sharethroughAnalyticsAdapter, consentManagementGpp, consentManagementTcf, gppControl_usnat, gppControl_usstates, gptPreAuction, tcfControl, currency, adagioRtdProvider, medianetRtdProvider */
if (window.pbjs && window.pbjs.libLoaded) try {
    window.pbjs.getConfig("debug") && console.warn("Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted.")
} catch (e) {} else(function() {
    (() => {
        var r, t = {
                70433: (r, t, e) => {
                    function n(r, t, e, n, o) {
                        for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++) r = r ? r[t[n]] : o;
                        return r === o ? e : r
                    }
                    e.d(t, {
                        A: () => n
                    })
                },
                68128: r => {
                    /*
                     * @license MIT
                     * Fun Hooks v0.9.10
                     * (c) @snapwich
                     */
                    u.SYNC = 1, u.ASYNC = 2, u.QUEUE = 4;
                    var t = "fun-hooks";
                    var e = Object.freeze({
                            useProxy: !0,
                            ready: 0
                        }),
                        n = new WeakMap,
                        o = "2,1,0" === [1].reduce((function(r, t, e) {
                            return [r, t, e]
                        }), 2).toString() ? Array.prototype.reduce : function(r, t) {
                            var e, n = Object(this),
                                o = n.length >>> 0,
                                i = 0;
                            if (t) e = t;
                            else {
                                for (; i < o && !(i in n);) i++;
                                e = n[i++]
                            }
                            for (; i < o;) i in n && (e = r(e, n[i], i, n)), i++;
                            return e
                        };

                    function i(r, t) {
                        return Array.prototype.slice.call(r, t)
                    }
                    var f = Object.assign || function(r) {
                        return o.call(i(arguments, 1), (function(r, t) {
                            return t && Object.keys(t).forEach((function(e) {
                                r[e] = t[e]
                            })), r
                        }), r)
                    };

                    function u(r) {
                        var a, c = {},
                            l = [];

                        function p(r, t) {
                            return "function" == typeof r ? h.call(null, "sync", r, t) : "string" == typeof r && "function" == typeof t ? h.apply(null, arguments) : "object" == typeof r ? y.apply(null, arguments) : void 0
                        }

                        function y(r, t, e) {
                            var n = !0;
                            void 0 === t && (t = Object.getOwnPropertyNames(r), n = !1);
                            var o = {},
                                i = ["constructor"];
                            do {
                                (t = t.filter((function(t) {
                                    return !("function" != typeof r[t] || -1 !== i.indexOf(t) || t.match(/^_/))
                                }))).forEach((function(t) {
                                    var n = t.split(":"),
                                        i = n[0],
                                        f = n[1] || "sync";
                                    if (!o[i]) {
                                        var u = r[i];
                                        o[i] = r[i] = h(f, u, e ? [e, i] : void 0)
                                    }
                                })), r = Object.getPrototypeOf(r)
                            } while (n && r);
                            return o
                        }

                        function s(r) {
                            var e = Array.isArray(r) ? r : r.split(".");
                            return o.call(e, (function(n, o, i) {
                                var f = n[o],
                                    u = !1;
                                return f || (i === e.length - 1 ? (a || l.push((function() {
                                    u || console.warn(t + ": referenced '" + r + "' but it was never created")
                                })), n[o] = v((function(r) {
                                    n[o] = r, u = !0
                                }))) : n[o] = {})
                            }), c)
                        }

                        function v(r) {
                            var t = [],
                                e = [],
                                o = function() {},
                                i = {
                                    before: function(r, e) {
                                        return a.call(this, t, "before", r, e)
                                    },
                                    after: function(r, t) {
                                        return a.call(this, e, "after", r, t)
                                    },
                                    getHooks: function(r) {
                                        var n = t.concat(e);
                                        "object" == typeof r && (n = n.filter((function(t) {
                                            return Object.keys(r).every((function(e) {
                                                return t[e] === r[e]
                                            }))
                                        })));
                                        try {
                                            f(n, {
                                                remove: function() {
                                                    return n.forEach((function(r) {
                                                        r.remove()
                                                    })), this
                                                }
                                            })
                                        } catch (r) {
                                            console.error("error adding `remove` to array, did you modify Array.prototype?")
                                        }
                                        return n
                                    },
                                    removeAll: function() {
                                        return this.getHooks().remove()
                                    }
                                },
                                u = {
                                    install: function(n, i, f) {
                                        this.type = n, o = f, f(t, e), r && r(i)
                                    }
                                };
                            return n.set(i.after, u), i;

                            function a(r, n, i, f) {
                                var u = {
                                    hook: i,
                                    type: n,
                                    priority: f || 10,
                                    remove: function() {
                                        var n = r.indexOf(u); - 1 !== n && (r.splice(n, 1), o(t, e))
                                    }
                                };
                                return r.push(u), r.sort((function(r, t) {
                                    return t.priority - r.priority
                                })), o(t, e), this
                            }
                        }

                        function h(e, o, c) {
                            var p = o.after && n.get(o.after);
                            if (p) {
                                if (p.type !== e) throw t + ": recreated hookable with different type";
                                return o
                            }
                            var y, h, d = c ? s(c) : v(),
                                b = {
                                    get: function(r, t) {
                                        return d[t] || Reflect.get.apply(Reflect, arguments)
                                    }
                                };
                            return a || l.push(g), r.useProxy && "function" == typeof Proxy && Proxy.revocable ? h = new Proxy(o, b) : (h = function() {
                                return b.apply ? b.apply(o, this, i(arguments)) : o.apply(this, arguments)
                            }, f(h, d)), n.get(h.after).install(e, h, (function(r, t) {
                                var n, o = [];
                                r.length || t.length ? (r.forEach(f), n = o.push(void 0) - 1, t.forEach(f), y = function(r, t, f) {
                                    var u, a = 0,
                                        c = "async" === e && "function" == typeof f[f.length - 1] && f.pop();

                                    function l(r) {
                                        "sync" === e ? u = r : c && c.apply(null, arguments)
                                    }

                                    function p(r) {
                                        if (o[a]) {
                                            var n = i(arguments);
                                            return p.bail = l, n.unshift(p), o[a++].apply(t, n)
                                        }
                                        "sync" === e ? u = r : c && c.apply(null, arguments)
                                    }
                                    return o[n] = function() {
                                        var n = i(arguments, 1);
                                        "async" === e && c && (delete p.bail, n.push(p));
                                        var o = r.apply(t, n);
                                        "sync" === e && p(o)
                                    }, p.apply(null, f), u
                                }) : y = void 0;

                                function f(r) {
                                    o.push(r.hook)
                                }
                                g()
                            })), h;

                            function g() {
                                !a && ("sync" !== e || r.ready & u.SYNC) && ("async" !== e || r.ready & u.ASYNC) ? "sync" !== e && r.ready & u.QUEUE ? b.apply = function() {
                                    var r = arguments;
                                    l.push((function() {
                                        h.apply(r[1], r[2])
                                    }))
                                } : b.apply = function() {
                                    throw t + ": hooked function not ready"
                                } : b.apply = y
                            }
                        }
                        return (r = f({}, e, r)).ready ? p.ready = function() {
                            a = !0,
                                function(r) {
                                    for (var t; t = r.shift();) t()
                                }(l)
                        } : a = !0, p.get = s, p
                    }
                    r.exports = u
                },
                63172: (r, t, e) => {
                    function n(r, t, e) {
                        t.split && (t = t.split("."));
                        for (var n, o, i = 0, f = t.length, u = r; i < f && "__proto__" != (o = "" + t[i++]) && "constructor" !== o && "prototype" !== o;) u = u[o] = i === f ? e : typeof(n = u[o]) == typeof t ? n : 0 * t[i] != 0 || ~("" + t[i]).indexOf(".") ? {} : []
                    }
                    e.d(t, {
                        J: () => n
                    })
                },
                45751: (r, t, e) => {
                    function n(r) {
                        var t, e, o;
                        if (Array.isArray(r)) {
                            for (e = Array(t = r.length); t--;) e[t] = (o = r[t]) && "object" == typeof o ? n(o) : o;
                            return e
                        }
                        if ("[object Object]" === Object.prototype.toString.call(r)) {
                            for (t in e = {}, r) "__proto__" === t ? Object.defineProperty(e, t, {
                                value: n(r[t]),
                                configurable: !0,
                                enumerable: !0,
                                writable: !0
                            }) : e[t] = (o = r[t]) && "object" == typeof o ? n(o) : o;
                            return e
                        }
                        return r
                    }
                    e.d(t, {
                        Q: () => n
                    })
                }
            },
            e = {};

        function n(r) {
            var o = e[r];
            if (void 0 !== o) return o.exports;
            var i = e[r] = {
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.exports
        }
        n.m = t, r = [], n.O = (t, e, o, i) => {
            if (!e) {
                var f = 1 / 0;
                for (l = 0; l < r.length; l++) {
                    e = r[l][0], o = r[l][1], i = r[l][2];
                    for (var u = !0, a = 0; a < e.length; a++)(!1 & i || f >= i) && Object.keys(n.O).every((r => n.O[r](e[a]))) ? e.splice(a--, 1) : (u = !1, i < f && (f = i));
                    if (u) {
                        r.splice(l--, 1);
                        var c = o();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            i = i || 0;
            for (var l = r.length; l > 0 && r[l - 1][2] > i; l--) r[l] = r[l - 1];
            r[l] = [e, o, i]
        }, n.n = r => {
            var t = r && r.__esModule ? () => r.default : () => r;
            return n.d(t, {
                a: t
            }), t
        }, n.d = (r, t) => {
            for (var e in t) n.o(t, e) && !n.o(r, e) && Object.defineProperty(r, e, {
                enumerable: !0,
                get: t[e]
            })
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (r) {
                if ("object" == typeof window) return window
            }
        }(), n.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t), n.r = r => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(r, "__esModule", {
                value: !0
            })
        }, (() => {
            var r = {
                39673: 0
            };
            n.O.j = t => 0 === r[t];
            var t = (t, e) => {
                    var o, i, f = e[0],
                        u = e[1],
                        a = e[2],
                        c = 0;
                    if (f.some((t => 0 !== r[t]))) {
                        for (o in u) n.o(u, o) && (n.m[o] = u[o]);
                        if (a) var l = a(n)
                    }
                    for (t && t(e); c < f.length; c++) i = f[c], n.o(r, i) && r[i] && r[i][0](), r[i] = 0;
                    return n.O(l)
                },
                e = self.pbjsChunk = self.pbjsChunk || [];
            e.forEach(t.bind(null, 0)), e.push = t.bind(null, e.push.bind(e))
        })();
        var o = n.O(void 0, [60802, 51085], (() => n(27718)));
        o = n.O(o)
    })();
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [60802], {
            95789: (e, t, n) => {
                n.d(t, {
                    A4: () => l,
                    J7: () => u,
                    Pg: () => g
                });
                var r = n(41580),
                    i = n(91069),
                    o = n(15901),
                    s = n(7873),
                    a = n(45569);
                const d = (0, s.m)(),
                    c = "outstream";

                function l(e) {
                    const {
                        url: t,
                        config: n,
                        id: s,
                        callback: l,
                        loaded: u,
                        adUnitCode: g,
                        renderNow: f
                    } = e;
                    this.url = t, this.config = n, this.handlers = {}, this.id = s, this.renderNow = f, this.loaded = u, this.cmd = [], this.push = e => {
                        "function" == typeof e ? this.loaded ? e.call() : this.cmd.push(e) : (0, i.logError)("Commands given to Renderer.push must be wrapped in a function")
                    }, this.callback = l || (() => {
                        this.loaded = !0, this.process()
                    }), this.render = function() {
                        const e = arguments,
                            n = () => {
                                this._render ? this._render.apply(this, e) : (0, i.logWarn)("No render function was provided, please use .setRender on the renderer")
                            };
                        ! function(e) {
                            const t = d.adUnits,
                                n = (0, o.I6)(t, (t => t.code === e));
                            if (!n) return !1;
                            const r = n ? .renderer,
                                i = !!(r && r.url && r.render),
                                s = n ? .mediaTypes ? .video ? .renderer,
                                a = !!(s && s.url && s.render);
                            return !!(i && !0 !== r.backupOnly || a && !0 !== s.backupOnly)
                        }(g) ? f ? n() : (this.cmd.unshift(n), (0, r.R)(t, a.tp, c, this.callback, this.documentContext)): ((0, i.logWarn)(`External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ${g}`), n())
                    }.bind(this)
                }

                function u(e) {
                    return !(!e || !e.url && !e.renderNow)
                }

                function g(e, t, n) {
                    let r = null;
                    e.config && e.config.documentResolver && (r = e.config.documentResolver(t, document, n)), r || (r = document), e.documentContext = r, e.render(t, e.documentContext)
                }
                l.install = function(e) {
                    let {
                        url: t,
                        config: n,
                        id: r,
                        callback: i,
                        loaded: o,
                        adUnitCode: s,
                        renderNow: a
                    } = e;
                    return new l({
                        url: t,
                        config: n,
                        id: r,
                        callback: i,
                        loaded: o,
                        adUnitCode: s,
                        renderNow: a
                    })
                }, l.prototype.getConfig = function() {
                    return this.config
                }, l.prototype.setRender = function(e) {
                    this._render = e
                }, l.prototype.setEventHandlers = function(e) {
                    this.handlers = e
                }, l.prototype.handleVideoEvent = function(e) {
                    let {
                        id: t,
                        eventName: n
                    } = e;
                    "function" == typeof this.handlers[n] && this.handlers[n](), (0, i.logMessage)(`Prebid Renderer event for id ${t} type ${n}`)
                }, l.prototype.process = function() {
                    for (; this.cmd.length > 0;) try {
                        this.cmd.shift().call()
                    } catch (e) {
                        (0, i.logError)("Error processing Renderer command: ", e)
                    }
                }
            },
            76811: (e, t, n) => {
                n.d(t, {
                    DL: () => l,
                    Ml: () => i,
                    Ue: () => r,
                    VJ: () => g,
                    hE: () => u,
                    hq: () => c,
                    mo: () => d,
                    pY: () => f,
                    qX: () => o,
                    uc: () => a,
                    yl: () => s
                });
                const r = "accessDevice",
                    i = "syncUser",
                    o = "enrichUfpd",
                    s = "enrichEids",
                    a = "fetchBids",
                    d = "reportAnalytics",
                    c = "transmitEids",
                    l = "transmitUfpd",
                    u = "transmitPreciseGeo",
                    g = "transmitTid",
                    f = "loadExternalScript"
            },
            83441: (e, t, n) => {
                n.d(t, {
                    s: () => i
                });
                var r = n(11445);
                const i = (0, n(2604).ZI)((e => r.Ay.resolveAlias(e)))
            },
            45569: (e, t, n) => {
                n.d(t, {
                    Tn: () => a,
                    fW: () => o,
                    tW: () => i,
                    tp: () => r,
                    zu: () => s
                });
                const r = "prebid",
                    i = "bidder",
                    o = "userId",
                    s = "rtd",
                    a = "analytics"
            },
            2604: (e, t, n) => {
                n.d(t, {
                    Dk: () => s,
                    Ii: () => o,
                    TQ: () => f,
                    U3: () => m,
                    XG: () => l,
                    ZI: () => p,
                    Zw: () => c,
                    bt: () => u,
                    e3: () => g,
                    iK: () => a,
                    q7: () => d
                });
                var r = n(45569),
                    i = n(16833);
                const o = "component",
                    s = o + "Type",
                    a = o + "Name",
                    d = "adapterCode",
                    c = "storageType",
                    l = "configName",
                    u = "syncType",
                    g = "syncUrl",
                    f = "_config";

                function p(e) {
                    return function(t, n, i) {
                        const c = {
                            [s]: t,
                            [a]: n,
                            [o]: `${t}.${n}`
                        };
                        return t === r.tW && (c[d] = e(n)), m(Object.assign(c, i))
                    }
                }
                const m = (0, i.A_)("sync", (e => e))
            },
            96953: (e, t, n) => {
                n.d(t, {
                    Vx: () => d,
                    l7: () => a,
                    p4: () => h,
                    $V: () => m,
                    nl: () => f,
                    ZP: () => b,
                    $p: () => y,
                    uD: () => p
                });
                var r = n(70433),
                    i = n(43272),
                    o = n(95139),
                    s = n(76811);
                const a = ["data", "ext.data", "yob", "gender", "keywords", "kwarray", "id", "buyeruid", "customdata"].map((e => `user.${e}`)).concat("device.ext.cdep"),
                    d = ["user.eids", "user.ext.eids"],
                    c = ["user.geo.lat", "user.geo.lon", "device.geo.lat", "device.geo.lon"],
                    l = ["device.ip"],
                    u = ["device.ipv6"];

                function g(e) {
                    return Object.assign({
                        get() {},
                        run(e, t, n, r, i) {
                            const o = n && n[r];
                            if (m(o) && i()) {
                                const e = this.get(o);
                                void 0 === e ? delete n[r] : n[r] = e
                            }
                        }
                    }, e)
                }

                function f(e) {
                    return e.forEach((e => {
                            e.paths = e.paths.map((e => {
                                const t = e.split("."),
                                    n = t.pop();
                                return [t.length > 0 ? t.join(".") : null, n]
                            }))
                        })),
                        function(t, n) {
                            const i = [];
                            for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++) s[a - 2] = arguments[a];
                            const d = p(t, ...s);
                            return e.forEach((e => {
                                if (!1 !== t[e.name])
                                    for (const [o, s] of e.paths) {
                                        const a = null == o ? n : (0, r.A)(n, o);
                                        if (i.push(e.run(n, o, a, s, d.bind(null, e))), !1 === t[e.name]) return
                                    }
                            })), i.filter((e => null != e))
                        }
                }

                function p(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return function(t) {
                        return e.hasOwnProperty(t.name) || (e[t.name] = !!t.applies(...n)), e[t.name]
                    }
                }

                function m(e) {
                    return null != e && ("object" != typeof e || Object.keys(e).length > 0)
                }

                function h(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.io;
                    return function(n) {
                        return !t(e, n)
                    }
                }

                function b() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.io;
                    return [{
                        name: s.DL,
                        paths: a,
                        applies: h(s.DL, e)
                    }, {
                        name: s.hq,
                        paths: d,
                        applies: h(s.hq, e)
                    }, {
                        name: s.hE,
                        paths: c,
                        applies: h(s.hE, e),
                        get: e => Math.round(100 * (e + Number.EPSILON)) / 100
                    }, {
                        name: s.hE,
                        paths: l,
                        applies: h(s.hE, e),
                        get: e => function(e) {
                            if (!e) return null;
                            let t = e.split(".").map(Number);
                            if (4 != t.length) return null;
                            let n = [];
                            for (let e = 0; e < 4; e++) {
                                let t = Math.max(0, Math.min(8, 24 - 8 * e));
                                n.push(255 << 8 - t & 255)
                            }
                            return t.map(((e, t) => e & n[t])).join(".")
                        }(e)
                    }, {
                        name: s.hE,
                        paths: u,
                        applies: h(s.hE, e),
                        get: e => function(e) {
                            if (!e) return null;
                            let t = e.split(":").map((e => parseInt(e, 16)));
                            for (t = t.map((e => isNaN(e) ? 0 : e)); t.length < 8;) t.push(0);
                            if (8 != t.length) return null;
                            let n = [];
                            for (let e = 0; e < 8; e++) {
                                let t = Math.max(0, Math.min(16, 64 - 16 * e));
                                n.push(65535 << 16 - t & 65535)
                            }
                            return t.map(((e, t) => e & n[t])).map((e => e.toString(16))).join(":")
                        }(e)
                    }, {
                        name: s.VJ,
                        paths: ["source.tid"],
                        applies: h(s.VJ, e)
                    }].map(g)
                }
                const y = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.io;
                    const t = f(b(e)),
                        n = f(function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.io;
                            return [{
                                name: s.hq,
                                paths: ["userId", "userIdAsEids"],
                                applies: h(s.hq, e)
                            }, {
                                name: s.VJ,
                                paths: ["ortb2Imp.ext.tid"],
                                applies: h(s.VJ, e)
                            }].map(g)
                        }(e));
                    return function(e) {
                        const r = {};
                        return {
                            ortb2: n => (t(r, n, e), n),
                            bidRequest: t => (n(r, t, e), t)
                        }
                    }
                }();
                (0, o.qB)(s.VJ, "enableTIDs config", (() => {
                    if (!i.$W.getConfig("enableTIDs")) return {
                        allow: !1,
                        reason: "TIDs are disabled"
                    }
                }))
            },
            95139: (e, t, n) => {
                n.d(t, {
                    io: () => s,
                    qB: () => o
                });
                var r = n(91069),
                    i = n(2604);
                const [o, s] = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.prefixLog)("Activity control:");
                    const t = {};

                    function n(e) {
                        return t[e] = t[e] || []
                    }

                    function o(t, n, r, o) {
                        let s;
                        try {
                            s = r(o)
                        } catch (r) {
                            e.logError(`Exception in rule ${n} for '${t}'`, r), s = {
                                allow: !1,
                                reason: r
                            }
                        }
                        return s && Object.assign({
                            activity: t,
                            name: n,
                            component: o[i.Ii]
                        }, s)
                    }
                    const s = {};

                    function a(t) {
                        let {
                            activity: n,
                            name: r,
                            allow: i,
                            reason: o,
                            component: a
                        } = t;
                        const d = `${r} ${i?"allowed":"denied"} '${n}' for '${a}'${o?":":""}`,
                            c = s.hasOwnProperty(d);
                        if (c && clearTimeout(s[d]), s[d] = setTimeout((() => delete s[d]), 1e3), !c) {
                            const t = [d];
                            o && t.push(o), (i ? e.logInfo : e.logWarn).apply(e, t)
                        }
                    }
                    return [function(e, t, r) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
                        const o = n(e),
                            s = o.findIndex((e => {
                                let [t] = e;
                                return i < t
                            })),
                            a = [i, t, r];
                        return o.splice(s < 0 ? o.length : s, 0, a),
                            function() {
                                const e = o.indexOf(a);
                                e >= 0 && o.splice(e, 1)
                            }
                    }, function(e, t) {
                        let r, i;
                        for (const [s, d, c] of n(e)) {
                            if (r !== s && i) break;
                            r = s;
                            const n = o(e, d, c, t);
                            if (n) {
                                if (!n.allow) return a(n), !1;
                                i = n
                            }
                        }
                        return i && a(i), !0
                    }]
                }()
            },
            29075: (e, t, n) => {
                n.d(t, {
                    $A: () => T,
                    BS: () => W,
                    Hh: () => N,
                    Pk: () => x,
                    Uc: () => O,
                    XO: () => P,
                    _0: () => D,
                    bw: () => U,
                    n6: () => w,
                    qn: () => _,
                    vB: () => q,
                    vW: () => B,
                    vd: () => k
                });
                var r = n(91069),
                    i = n(75023),
                    o = n(78969),
                    s = n(43272),
                    a = n(95789),
                    d = n(71371),
                    c = n(67314),
                    l = n(46031),
                    u = n(16833),
                    g = n(12449),
                    f = n(25555),
                    p = n(11445),
                    m = n(16894),
                    h = n(97779);
                const {
                    AD_RENDER_FAILED: b,
                    AD_RENDER_SUCCEEDED: y,
                    STALE_RENDER: v,
                    BID_WON: E,
                    EXPIRED_RENDER: A
                } = o.qY, {
                    EXCEPTION: I
                } = o.as, T = (0, u.A_)("sync", (function(e) {
                    return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.k.resolve()).then((t => t ? ? c.n.findBidByAdId(e))).catch((() => {}))
                })), w = (0, u.A_)("sync", (function(e) {
                    i.emit(E, e), c.n.addWinningBid(e)
                }));

                function C(e) {
                    let {
                        reason: t,
                        message: n,
                        bid: o,
                        id: s
                    } = e;
                    const a = {
                        reason: t,
                        message: n
                    };
                    o && (a.bid = o, a.adId = o.adId), s && (a.adId = s), (0, r.logError)(`Error rendering ad (id: ${s}): ${n}`), i.emit(b, a)
                }

                function S(e) {
                    let {
                        doc: t,
                        bid: n,
                        id: r
                    } = e;
                    const o = {
                        doc: t
                    };
                    n && (o.bid = n), r && (o.adId = r), p.Ay.callAdRenderSucceededBidder(n.adapterCode || n.bidder, n), i.emit(y, o)
                }

                function O(e, t) {
                    switch (e.event) {
                        case o.qY.AD_RENDER_FAILED:
                            C({
                                bid: t,
                                id: t.adId,
                                reason: e.info.reason,
                                message: e.info.message
                            });
                            break;
                        case o.qY.AD_RENDER_SUCCEEDED:
                            S({
                                doc: null,
                                bid: t,
                                id: t.adId
                            });
                            break;
                        default:
                            (0, r.logError)(`Received event request for unsupported event: '${e.event}' (adId: '${t.adId}')`)
                    }
                }

                function B(e, t, n) {
                    let {
                        resizeFn: r,
                        fireTrackers: i = g.vO
                    } = n;
                    if ("resizeNativeHeight" === e.action) r(e.width, e.height);
                    else i(e, t)
                }
                const R = {
                    [o.nl.EVENT]: O
                };
                R[o.nl.NATIVE] = B;
                const k = (0, u.A_)("sync", (function(e, t) {
                        const {
                            ad: n,
                            adUrl: i,
                            cpm: o,
                            originalCpm: s,
                            width: a,
                            height: d
                        } = e, c = {
                            AUCTION_PRICE: s || o,
                            CLICKTHROUGH: t ? .clickUrl || ""
                        };
                        return {
                            ad: (0, r.replaceMacros)(n, c),
                            adUrl: (0, r.replaceMacros)(i, c),
                            width: a,
                            height: d
                        }
                    })),
                    D = (0, u.A_)("sync", (function(e) {
                        let {
                            renderFn: t,
                            resizeFn: n,
                            bidResponse: i,
                            options: s,
                            doc: a,
                            isMainDocument: c = a === document && !(0, r.inIframe)()
                        } = e;
                        const l = i.mediaType === d.G_;
                        if (c || l) return void C({
                            reason: o.as.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                            message: l ? "Cannot render video ad without a renderer" : "renderAd was prevented from writing to the main document.",
                            bid: i,
                            id: i.adId
                        });
                        const u = k(i, s);
                        t(Object.assign({
                            adId: i.adId
                        }, u));
                        const {
                            width: g,
                            height: f
                        } = u;
                        null != (g ? ? f) && n(g, f)
                    }));

                function U(e) {
                    let {
                        renderFn: t,
                        resizeFn: n,
                        adId: a,
                        options: d,
                        bidResponse: c,
                        doc: l
                    } = e;
                    N(c, (() => {
                        if (null != c) {
                            if ((c.status !== o.tl.RENDERED || ((0, r.logWarn)(`Ad id ${a} has been rendered before`), i.emit(v, c), !s.$W.getConfig("auctionOptions") ? .suppressStaleRender)) && (h.uW.isBidNotExpired(c) || ((0, r.logWarn)(`Ad id ${a} has been expired`), i.emit(A, c), !s.$W.getConfig("auctionOptions") ? .suppressExpiredRender))) try {
                                D({
                                    renderFn: t,
                                    resizeFn: n,
                                    bidResponse: c,
                                    options: d,
                                    doc: l
                                })
                            } catch (e) {
                                C({
                                    reason: o.as.EXCEPTION,
                                    message: e.message,
                                    id: a,
                                    bid: c
                                })
                            }
                        } else C({
                            reason: o.as.CANNOT_FIND_AD,
                            message: `Cannot find ad '${a}'`,
                            id: a
                        })
                    }))
                }

                function _(e) {
                    const t = (0, m.BO)(e.metrics);
                    t.checkpoint("bidRender"), t.timeBetween("bidWon", "bidRender", "render.deferred"), t.timeBetween("auctionEnd", "bidRender", "render.pending"), t.timeBetween("requestBids", "bidRender", "render.e2e"), e.status = o.tl.RENDERED
                }
                D.before((function(e, t) {
                    const {
                        bidResponse: n,
                        doc: r
                    } = t;
                    (0, a.J7)(n.renderer) ? ((0, a.Pg)(n.renderer, n, r), S({
                        doc: r,
                        bid: n,
                        id: n.adId
                    }), e.bail()) : e(t)
                }), 100);
                const j = new WeakMap,
                    $ = new WeakSet;

                function N(e, t) {
                    null != e ? (j.set(e, t), e.deferRendering || q(e), x(e)) : t()
                }

                function x(e) {
                    $.has(e) || ($.add(e), w(e))
                }

                function q(e) {
                    const t = j.get(e);
                    t && (t(), _(e), j.delete(e))
                }

                function W(e, t, n) {
                    let i;

                    function s(e, n) {
                        C(Object.assign({
                            id: t,
                            bid: i
                        }, {
                            reason: e,
                            message: n
                        }))
                    }

                    function a(t, n) {
                        e.defaultView && e.defaultView.frameElement && (t && (e.defaultView.frameElement.width = t), n && (e.defaultView.frameElement.height = n))
                    }
                    const d = (c = {
                        resizeFn: a
                    }, function(e, t, n) {
                        R.hasOwnProperty(e) && R[e](t, n, c)
                    });
                    var c;

                    function u(t) {
                        t.ad ? (e.write(t.ad), e.close(), S({
                            doc: e,
                            bid: i,
                            id: i.adId
                        })) : (0, l.H)(i).then((n => n(t, {
                            sendMessage: (e, t) => d(e, t, i),
                            mkFrame: r.createIframe
                        }, e.defaultView))).then((() => S({
                            doc: e,
                            bid: i,
                            id: i.adId
                        })), (e => {
                            s(e ? .reason || o.as.EXCEPTION, e ? .message), e ? .stack && (0, r.logError)(e)
                        }));
                        const n = document.createComment(`Creative ${i.creativeId} served by ${i.bidder} Prebid.js Header Bidding`);
                        (0, r.insertElement)(n, e, "html")
                    }
                    try {
                        t && e ? T(t).then((r => {
                            i = r, U({
                                renderFn: u,
                                resizeFn: a,
                                adId: t,
                                options: {
                                    clickUrl: n ? .clickThrough
                                },
                                bidResponse: r,
                                doc: e
                            })
                        })) : s(o.as.MISSING_DOC_OR_ADID, "missing " + (t ? "doc" : "adId"))
                    } catch (e) {
                        s(I, e.message)
                    }
                }

                function P() {
                    if (!window.frames[o.IY])
                        if (document.body) {
                            const e = (0, r.createInvisibleIframe)();
                            e.name = o.IY, document.body.appendChild(e)
                        } else window.requestAnimationFrame(P)
                }
            },
            10201: (e, t, n) => {
                n.d(t, {
                    U: () => s
                });
                var r = n(7873),
                    i = n(91069);
                const o = (0, r.m)();

                function s(e, t) {
                    o.adServers = o.adServers || {}, o.adServers[e] = o.adServers[e] || {}, Object.keys(t).forEach((n => {
                        o.adServers[e][n] ? (0, i.logWarn)(`Attempting to add an already registered function property ${n} for AdServer ${e}.`) : o.adServers[e][n] = t[n]
                    }))
                }
            },
            69759: (e, t, n) => {
                function r(e) {
                    var t = e;
                    return {
                        callBids: function() {},
                        setBidderCode: function(e) {
                            t = e
                        },
                        getBidderCode: function() {
                            return t
                        }
                    }
                }
                n.d(t, {
                    A: () => r
                })
            },
            11445: (e, t, n) => {
                n.d(t, {
                    S1: () => R,
                    Ay: () => H,
                    tS: () => W,
                    pX: () => M,
                    Mf: () => G,
                    K5: () => x,
                    Gs: () => P
                });
                var r = n(91069),
                    i = n(12449),
                    o = n(57377),
                    s = n(68044),
                    a = n(43272),
                    d = n(16833),
                    c = n(15901);
                let l = {};

                function u(e, t, n) {
                    let r = function(e, t) {
                        let n = l[e] = l[e] || {
                            bidders: {}
                        };
                        return t ? n.bidders[t] = n.bidders[t] || {} : n
                    }(e, n);
                    return r[t] = (r[t] || 0) + 1, r[t]
                }

                function g(e) {
                    return u(e, "auctionsCounter")
                }

                function f(e) {
                    return l ? .[e] ? .requestsCounter || 0
                }

                function p(e, t) {
                    return l ? .[e] ? .bidders ? .[t] ? .requestsCounter || 0
                }

                function m(e, t) {
                    return l ? .[e] ? .bidders ? .[t] ? .winsCounter || 0
                }

                function h(e) {
                    return l ? .[e] ? .auctionsCounter || 0
                }
                var b = n(27934),
                    y = n(16916),
                    v = n(75023),
                    E = n(78969),
                    A = n(16894),
                    I = n(67314),
                    T = n(45569),
                    w = n(95139),
                    C = n(76811),
                    S = n(2604),
                    O = n(96953);
                const B = "pbsBidAdapter",
                    R = {
                        CLIENT: "client",
                        SERVER: "server"
                    },
                    k = {
                        isAllowed: w.io,
                        redact: O.$p
                    };
                let D = {},
                    U = D.bidderRegistry = {},
                    _ = D.aliasRegistry = {},
                    j = [];
                a.$W.getConfig("s2sConfig", (e => {
                    e && e.s2sConfig && (j = (0, r.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig])
                }));
                var $ = {};
                const N = (0, S.ZI)((e => D.resolveAlias(e)));

                function x(e) {
                    return N(T.tp, B, {
                        [S.XG]: e.configName
                    })
                }
                const q = (0, d.A_)("sync", (function(e) {
                    let {
                        bidderCode: t,
                        auctionId: n,
                        bidderRequestId: i,
                        adUnits: o,
                        src: s,
                        metrics: a
                    } = e;
                    return o.reduce(((e, o) => {
                        const d = o.bids.filter((e => e.bidder === t));
                        return null == t && 0 === d.length && null != o.s2sBid && d.push({
                            bidder: null
                        }), e.push(d.reduce(((e, d) => {
                            const c = null == (d = Object.assign({}, d, {
                                ortb2Imp: (0, r.mergeDeep)({}, o.ortb2Imp, d.ortb2Imp)
                            }, (0, r.getDefinedParams)(o, ["nativeParams", "nativeOrtbRequest", "mediaType", "renderer"]))).mediaTypes ? o.mediaTypes : d.mediaTypes;
                            return (0, r.isValidMediaTypes)(c) ? d = Object.assign({}, d, {
                                mediaTypes: c
                            }) : (0, r.logError)(`mediaTypes is not correctly configured for adunit ${o.code}`), "client" === s && function(e, t) {
                                u(e, "requestsCounter", t)
                            }(o.code, t), e.push(Object.assign({}, d, {
                                adUnitCode: o.code,
                                transactionId: o.transactionId,
                                adUnitId: o.adUnitId,
                                sizes: c ? .banner ? .sizes || c ? .video ? .playerSize || [],
                                bidId: d.bid_id || (0, r.getUniqueIdentifierStr)(),
                                bidderRequestId: i,
                                auctionId: n,
                                src: s,
                                metrics: a,
                                auctionsCount: h(o.code),
                                bidRequestsCount: f(o.code),
                                bidderRequestsCount: p(o.code, d.bidder),
                                bidderWinsCount: m(o.code, d.bidder),
                                deferBilling: !!o.deferBilling
                            })), e
                        }), [])), e
                    }), []).reduce(r.flatten, []).filter((e => "" !== e))
                }), "getBids");
                const W = (0, d.A_)("sync", (function(e, t) {
                    let {
                        getS2SBidders: n = M
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (null == t) return e; {
                        const r = n(t);
                        return e.filter((e => r.has(e.bidder)))
                    }
                }), "filterBidsForAdUnit");
                const P = (0, d.A_)("sync", ((e, t) => e), "setupAdUnitMediaTypes");

                function M(e) {
                    (0, r.isArray)(e) || (e = [e]);
                    const t = new Set([null]);
                    return e.filter((e => e && e.enabled)).flatMap((e => e.bidders)).forEach((e => t.add(e))), t
                }
                const G = (0, d.A_)("sync", (function(e, t) {
                    let {
                        getS2SBidders: n = M
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const i = n(t);
                    return (0, r.getBidderCodes)(e).reduce(((e, t) => (e[i.has(t) ? R.SERVER : R.CLIENT].push(t), e)), {
                        [R.CLIENT]: [],
                        [R.SERVER]: []
                    })
                }), "partitionBidders");

                function F(e, t) {
                    const n = U[e],
                        r = n ? .getSpec && n.getSpec();
                    if (r && r[t] && "function" == typeof r[t]) return [r, r[t]]
                }

                function L(e, t, n, i) {
                    try {
                        (0, r.logInfo)(`Invoking ${e}.${t}`);
                        for (var o = arguments.length, s = new Array(o > 4 ? o - 4 : 0), d = 4; d < o; d++) s[d - 4] = arguments[d];
                        a.$W.runWithBidder(e, i.bind(n, ...s))
                    } catch (n) {
                        (0, r.logWarn)(`Error calling ${t} of ${e}`)
                    }
                }

                function z(e, t, n) {
                    if (n ? .source !== E.RW.SRC) {
                        const r = F(e, t);
                        null != r && L(e, t, ...r, n)
                    }
                }
                D.makeBidRequests = (0, d.A_)("sync", (function(e, t, n, o, s) {
                    let d = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        l = arguments.length > 6 ? arguments[6] : void 0;
                    l = (0, A.BO)(l), v.emit(E.qY.BEFORE_REQUEST_BIDS, e), (0, i.nk)(e), e.map((e => e.code)).filter(r.uniques).forEach(g), e.forEach((e => {
                        (0, r.isPlainObject)(e.mediaTypes) || (e.mediaTypes = {}), e.bids = e.bids.filter((e => !e.bidder || k.isAllowed(C.uc, N(T.tW, e.bidder)))), u(e.code, "requestsCounter")
                    })), e = P(e, s);
                    let {
                        [R.CLIENT]: f, [R.SERVER]: p
                    } = G(e, j);
                    a.$W.getConfig("bidderSequence") === a.Ov && (f = (0, r.shuffle)(f));
                    const m = (0, b.EN)();
                    let h = [];
                    const I = d.global || {},
                        w = d.bidder || {};

                    function S(e, t) {
                        const i = k.redact(null != t ? t : N(T.tW, e.bidderCode)),
                            o = Object.freeze(i.ortb2((0, r.mergeDeep)({
                                source: {
                                    tid: n
                                }
                            }, I, w[e.bidderCode])));
                        return e.ortb2 = o, e.bids = e.bids.map((e => (e.ortb2 = o, i.bidRequest(e)))), e
                    }
                    j.forEach((i => {
                        const o = x(i);
                        if (i && i.enabled && k.isAllowed(C.uc, o)) {
                            let {
                                adUnits: s,
                                hasModuleBids: a
                            } = function(e, t) {
                                let n = (0, r.deepClone)(e),
                                    i = !1;
                                return n.forEach((e => {
                                    const n = e.bids.filter((e => e.module === B && e.params ? .configName === t.configName));
                                    1 === n.length ? (e.s2sBid = n[0], i = !0, e.ortb2Imp = (0, r.mergeDeep)({}, e.s2sBid.ortb2Imp, e.ortb2Imp)) : n.length > 1 && (0, r.logWarn)('Multiple "module" bids for the same s2s configuration; all will be ignored', n), e.bids = W(e.bids, t).map((e => (e.bid_id = (0, r.getUniqueIdentifierStr)(), e)))
                                })), n = n.filter((e => 0 !== e.bids.length || null != e.s2sBid)), {
                                    adUnits: n,
                                    hasModuleBids: i
                                }
                            }(e, i), d = (0, r.generateUUID)();
                            (0 === p.length && a ? [null] : p).forEach((e => {
                                const a = (0, r.getUniqueIdentifierStr)(),
                                    c = l.fork(),
                                    u = S({
                                        bidderCode: e,
                                        auctionId: n,
                                        bidderRequestId: a,
                                        uniquePbsTid: d,
                                        bids: q({
                                            bidderCode: e,
                                            auctionId: n,
                                            bidderRequestId: a,
                                            adUnits: (0, r.deepClone)(s),
                                            src: E.RW.SRC,
                                            metrics: c
                                        }),
                                        auctionStart: t,
                                        timeout: i.timeout,
                                        src: E.RW.SRC,
                                        refererInfo: m,
                                        metrics: c
                                    }, o);
                                0 !== u.bids.length && h.push(u)
                            })), s.forEach((e => {
                                let t = e.bids.filter((e => (0, c.I6)(h, (t => (0, c.I6)(t.bids, (t => t.bidId === e.bid_id))))));
                                e.bids = t
                            })), h.forEach((e => {
                                void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = s.filter((e => e.bids.length > 0 || null != e.s2sBid)))
                            }))
                        }
                    }));
                    let O = function(e) {
                        let t = (0, r.deepClone)(e);
                        return t.forEach((e => {
                            e.bids = W(e.bids, null)
                        })), t = t.filter((e => 0 !== e.bids.length)), t
                    }(e);
                    return f.forEach((e => {
                        const i = (0, r.getUniqueIdentifierStr)(),
                            a = l.fork(),
                            d = S({
                                bidderCode: e,
                                auctionId: n,
                                bidderRequestId: i,
                                bids: q({
                                    bidderCode: e,
                                    auctionId: n,
                                    bidderRequestId: i,
                                    adUnits: (0, r.deepClone)(O),
                                    labels: s,
                                    src: "client",
                                    metrics: a
                                }),
                                auctionStart: t,
                                timeout: o,
                                refererInfo: m,
                                metrics: a
                            }),
                            c = U[e];
                        c || (0, r.logError)(`Trying to make a request for bidder that does not exist: ${e}`), c && d.bids && 0 !== d.bids.length && h.push(d)
                    })), h.forEach((e => {
                        y.mW.getConsentData() && (e.gdprConsent = y.mW.getConsentData()), y.t6.getConsentData() && (e.uspConsent = y.t6.getConsentData()), y.ad.getConsentData() && (e.gppConsent = y.ad.getConsentData())
                    })), h
                }), "makeBidRequests"), D.callBids = function(e, t, n, i, o, d, c) {
                    let l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {};
                    if (!t.length) return void(0, r.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
                    let [u, g] = t.reduce(((e, t) => (e[Number(void 0 !== t.src && t.src === E.RW.SRC)].push(t), e)), [
                        [],
                        []
                    ]);
                    var f = [];
                    g.forEach((e => {
                        for (var t = -1, n = 0; n < f.length; ++n)
                            if (e.uniquePbsTid === f[n].uniquePbsTid) {
                                t = n;
                                break
                            }
                        t <= -1 && f.push(e)
                    }));
                    let p = 0;
                    j.forEach((e => {
                        if (e && f[p] && M(e).has(f[p].bidderCode)) {
                            const t = (0, s.g4)(d, o ? {
                                request: o.request.bind(null, "s2s"),
                                done: o.done
                            } : void 0);
                            let a = e.bidders;
                            const u = U[e.adapter];
                            let m = f[p].uniquePbsTid,
                                h = f[p].adUnitsS2SCopy,
                                b = g.filter((e => e.uniquePbsTid === m));
                            if (u) {
                                let o = {
                                    ad_units: h,
                                    s2sConfig: e,
                                    ortb2Fragments: l,
                                    requestBidsTimeout: d
                                };
                                if (o.ad_units.length) {
                                    let e = b.map((e => (e.start = (0, r.timestamp)(), function(t) {
                                        t || c(e.bidderRequestId), i.apply(e, arguments)
                                    })));
                                    const s = (0, r.getBidderCodes)(o.ad_units).filter((e => a.includes(e)));
                                    (0, r.logMessage)(`CALLING S2S HEADER BIDDERS ==== ${s.length>0?s.join(", "):'No bidder specified, using "ortb2Imp" definition(s) only'}`), b.forEach((e => {
                                        v.emit(E.qY.BID_REQUESTED, { ...e,
                                            tid: e.auctionId
                                        })
                                    })), u.callBids(o, g, n, (t => e.forEach((e => e(t)))), t)
                                }
                            } else(0, r.logError)("missing " + e.adapter);
                            p++
                        }
                    })), u.forEach((e => {
                        e.start = (0, r.timestamp)();
                        const t = U[e.bidderCode];
                        a.$W.runWithBidder(e.bidderCode, (() => {
                            (0, r.logMessage)("CALLING BIDDER"), v.emit(E.qY.BID_REQUESTED, e)
                        }));
                        let l = (0, s.g4)(d, o ? {
                            request: o.request.bind(null, e.bidderCode),
                            done: o.done
                        } : void 0);
                        const u = i.bind(e);
                        try {
                            a.$W.runWithBidder(e.bidderCode, t.callBids.bind(t, e, n, u, l, (() => c(e.bidderRequestId)), a.$W.callbackWithBidder(e.bidderCode)))
                        } catch (t) {
                            (0, r.logError)(`${e.bidderCode} Bid Adapter emitted an uncaught error when parsing their bidRequest`, {
                                e: t,
                                bidRequest: e
                            }), u()
                        }
                    }))
                }, D.videoAdapters = [], D.registerBidAdapter = function(e, t) {
                    let {
                        supportedMediaTypes: n = []
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    e && t ? "function" == typeof e.callBids ? (U[t] = e, y.o2.register(T.tW, t, e.getSpec ? .().gvlid), (0, c.mK)(n, "video") && D.videoAdapters.push(t), (0, c.mK)(n, "native") && i.mT.push(t)) : (0, r.logError)("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : (0, r.logError)("bidAdapter or bidderCode not specified")
                }, D.aliasBidAdapter = function(e, t, n) {
                    if (void 0 === U[t]) {
                        let s = U[e];
                        if (void 0 === s) {
                            const n = [];
                            j.forEach((r => {
                                if (r.bidders && r.bidders.length) {
                                    const i = r && r.bidders;
                                    r && (0, c.mK)(i, t) ? _[t] = e : n.push(e)
                                }
                            })), n.forEach((e => {
                                (0, r.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                            }))
                        } else try {
                            let a, d = function(e) {
                                let t = [];
                                return (0, c.mK)(D.videoAdapters, e) && t.push("video"), (0, c.mK)(i.mT, e) && t.push("native"), t
                            }(e);
                            if (s.constructor.prototype != Object.prototype) a = new s.constructor, a.setBidderCode(t);
                            else {
                                const {
                                    useBaseGvlid: i = !1
                                } = n || {};
                                let d = s.getSpec();
                                const c = i ? d.gvlid : n ? .gvlid;
                                null == c && null != d.gvlid && (0, r.logWarn)(`Alias '${t}' will NOT re-use the GVL ID of the original adapter ('${d.code}', gvlid: ${d.gvlid}). Functionality that requires TCF consent may not work as expected.`);
                                let l = n && n.skipPbsAliasing;
                                a = (0, o.xb)(Object.assign({}, d, {
                                    code: t,
                                    gvlid: c,
                                    skipPbsAliasing: l
                                })), _[t] = e
                            }
                            D.registerBidAdapter(a, t, {
                                supportedMediaTypes: d
                            })
                        } catch (t) {
                            (0, r.logError)(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                        }
                    } else(0, r.logMessage)('alias name "' + t + '" has been already specified.')
                }, D.resolveAlias = function(e) {
                    let t, n = e;
                    for (; _[n] && (!t || !t.has(n));) n = _[n], (t = t || new Set).add(n);
                    return n
                }, D.registerAnalyticsAdapter = function(e) {
                    let {
                        adapter: t,
                        code: n,
                        gvlid: i
                    } = e;
                    t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, $[n] = {
                        adapter: t,
                        gvlid: i
                    }, y.o2.register(T.Tn, n, i)) : (0, r.logError)(`Prebid Error: Analytics adaptor error for analytics "${n}"\n        analytics adapter must implement an enableAnalytics() function`) : (0, r.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified")
                }, D.enableAnalytics = function(e) {
                    (0, r.isArray)(e) || (e = [e]), e.forEach((e => {
                        const t = $[e.provider];
                        t && t.adapter ? k.isAllowed(C.mo, N(T.Tn, e.provider, {
                            [S.TQ]: e
                        })) && t.adapter.enableAnalytics(e) : (0, r.logError)(`Prebid Error: no analytics adapter found in registry for '${e.provider}'.`)
                    }))
                }, D.getBidAdapter = function(e) {
                    return U[e]
                }, D.getAnalyticsAdapter = function(e) {
                    return $[e]
                }, D.callTimedOutBidders = function(e, t, n) {
                    t = t.map((t => (t.params = (0, r.getUserConfiguredParams)(e, t.adUnitCode, t.bidder), t.timeout = n, t))), t = (0, r.groupBy)(t, "bidder"), Object.keys(t).forEach((e => {
                        z(e, "onTimeout", t[e])
                    }))
                }, D.callBidWonBidder = function(e, t, n) {
                    var i, o;
                    t.params = (0, r.getUserConfiguredParams)(n, t.adUnitCode, t.bidder), i = t.adUnitCode, o = t.bidder, u(i, "winsCounter", o), z(e, "onBidWon", t)
                }, D.triggerBilling = (() => {
                    const e = new WeakSet;
                    return t => {
                        e.has(t) || (e.add(t), t.source === E.RW.SRC && t.burl && r.internal.triggerPixel(t.burl), z(t.bidder, "onBidBillable", t))
                    }
                })(), D.callSetTargetingBidder = function(e, t) {
                    z(e, "onSetTargeting", t)
                }, D.callBidViewableBidder = function(e, t) {
                    z(e, "onBidViewable", t)
                }, D.callBidderError = function(e, t, n) {
                    z(e, "onBidderError", {
                        error: t,
                        bidderRequest: n
                    })
                }, D.callAdRenderSucceededBidder = function(e, t) {
                    z(e, "onAdRenderSucceeded", t)
                }, D.callDataDeletionRequest = (0, d.A_)("sync", (function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    const i = "onDataDeletionRequest";
                    Object.keys(U).filter((e => !_.hasOwnProperty(e))).forEach((e => {
                        const n = F(e, i);
                        if (null != n) {
                            const r = I.n.getBidsRequested().filter((t => function(e) {
                                const t = new Set;
                                for (; _.hasOwnProperty(e) && !t.has(e);) t.add(e), e = _[e];
                                return e
                            }(t.bidderCode) === e));
                            L(e, i, ...n, r, ...t)
                        }
                    })), Object.entries($).forEach((e => {
                        let [n, o] = e;
                        const s = o ? .adapter ? .[i];
                        if ("function" == typeof s) try {
                            s.apply(o.adapter, t)
                        } catch (e) {
                            (0, r.logError)(`error calling ${i} of ${n}`, e)
                        }
                    }))
                }));
                const H = D
            },
            57377: (e, t, n) => {
                n.d(t, {
                    JN: () => k,
                    JS: () => U,
                    a$: () => w,
                    eI: () => C,
                    fn: () => D,
                    xb: () => S
                });
                var r = n(69759),
                    i = n(11445),
                    o = n(43272),
                    s = n(93597),
                    a = n(38230),
                    d = n(12449),
                    c = n(63895),
                    l = n(78969),
                    u = n(75023),
                    g = n(15901),
                    f = n(91069),
                    p = n(16833),
                    m = n(67314),
                    h = n(12693),
                    b = n(16894),
                    y = n(95139),
                    v = n(83441),
                    E = n(45569),
                    A = n(76811);
                const I = ["cpm", "ttl", "creativeId", "netRevenue", "currency"],
                    T = ["auctionId", "transactionId"];

                function w(e) {
                    const t = Array.isArray(e.supportedMediaTypes) ? {
                        supportedMediaTypes: e.supportedMediaTypes
                    } : void 0;

                    function n(e) {
                        const n = S(e);
                        i.Ay.registerBidAdapter(n, e.code, t)
                    }
                    n(e), Array.isArray(e.aliases) && e.aliases.forEach((t => {
                        let r, o, s = t;
                        (0, f.isPlainObject)(t) && (s = t.code, r = t.gvlid, o = t.skipPbsAliasing), i.Ay.aliasRegistry[s] = e.code, n(Object.assign({}, e, {
                            code: s,
                            gvlid: r,
                            skipPbsAliasing: o
                        }))
                    }))
                }
                const C = (0, f.memoize)((e => {
                    let {
                        bidderCode: t
                    } = e;
                    if ((0, y.io)(A.VJ, (0, v.s)(E.tW, t))) return {
                        bidRequest: e => e,
                        bidderRequest: e => e
                    };

                    function n(e, t, n) {
                        return T.includes(t) ? null : Reflect.get(e, t, n)
                    }

                    function r(e, t) {
                        const n = new Proxy(e, t);
                        return Object.entries(e).filter((e => {
                            let [t, n] = e;
                            return "function" == typeof n
                        })).forEach((t => {
                            let [r, i] = t;
                            return n[r] = i.bind(e)
                        })), n
                    }
                    const i = (0, f.memoize)((e => r(e, {
                        get: n
                    })), (e => e.bidId));
                    return {
                        bidRequest: i,
                        bidderRequest: e => r(e, {
                            get: (t, r, o) => "bids" === r ? e.bids.map(i) : n(t, r, o)
                        })
                    }
                }));

                function S(e) {
                    return Object.assign(new r.A(e.code), {
                        getSpec: function() {
                            return Object.freeze(Object.assign({}, e))
                        },
                        registerSyncs: t,
                        callBids: function(n, r, a, d, c, g) {
                            if (!Array.isArray(n.bids)) return;
                            const p = C(n),
                                m = {};
                            const y = [];

                            function v() {
                                a(), o.$W.runWithBidder(e.code, (() => {
                                    u.emit(l.qY.BIDDER_DONE, n), t(y, n.gdprConsent, n.uspConsent, n.gppConsent)
                                }))
                            }
                            const E = U(n).measureTime("validate", (() => n.bids.filter((t => function(t) {
                                if (!e.isBidRequestValid(t)) return (0, f.logWarn)(`Invalid bid sent to bidder ${e.code}: ${JSON.stringify(t)}`), !1;
                                return !0
                            }(p.bidRequest(t))))));
                            if (0 === E.length) return void v();
                            const A = {};
                            E.forEach((e => {
                                A[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode)
                            })), B(e, E, n, d, g, {
                                onRequest: e => u.emit(l.qY.BEFORE_BIDDER_HTTP, n, e),
                                onResponse: t => {
                                    c(e.code), y.push(t)
                                },
                                onPaapi: e => {
                                    const t = A[e.bidId];
                                    t ? k(t, e) : (0, f.logWarn)("Received fledge auction configuration for an unknown bidId", e)
                                },
                                onError: (t, r) => {
                                    r.timedOut || c(e.code), i.Ay.callBidderError(e.code, r, n), u.emit(l.qY.BIDDER_ERROR, {
                                        error: r,
                                        bidderRequest: n
                                    }), (0, f.logError)(`Server call for ${e.code} failed: ${t} ${r.status}. Continuing without bids.`)
                                },
                                onBid: t => {
                                    const n = A[t.requestId];
                                    if (n) {
                                        if (t.adapterCode = n.bidder, function(e, t) {
                                                let n = h.u.get(t, "allowAlternateBidderCodes") || !1,
                                                    r = h.u.get(t, "allowedAlternateBidderCodes");
                                                if (e && t && t !== e && (r = (0, f.isArray)(r) ? r.map((e => e.trim().toLowerCase())).filter((e => !!e)).filter(f.uniques) : r, !n || (0, f.isArray)(r) && "*" !== r[0] && !r.includes(e))) return !0;
                                                return !1
                                            }(t.bidderCode, n.bidder)) return (0, f.logWarn)(`${t.bidderCode} is not a registered partner or known bidder of ${n.bidder}, hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings.`), void r.reject(n.adUnitCode, t, l.Tf.BIDDER_DISALLOWED);
                                        t.originalCpm = t.cpm, t.originalCurrency = t.currency, t.meta = t.meta || Object.assign({}, t[n.bidder]), t.deferBilling = n.deferBilling, t.deferRendering = t.deferBilling && (t.deferRendering ? ? "function" != typeof e.onBidBillable);
                                        const i = Object.assign((0, s.O)(l.XQ.GOOD, n), t, (0, f.pick)(n, T));
                                        ! function(e, t) {
                                            const n = (0, b.BO)(t.metrics);
                                            n.checkpoint("addBidResponse"), m[e] = !0, n.measureTime("addBidResponse.validate", (() => D(e, t))) ? r(e, t) : r.reject(e, t, l.Tf.INVALID)
                                        }(n.adUnitCode, i)
                                    } else(0, f.logWarn)(`Bidder ${e.code} made bid for unknown request ID: ${t.requestId}. Ignoring.`), r.reject(null, t, l.Tf.INVALID_REQUEST_ID)
                                },
                                onCompletion: v
                            })
                        }
                    });

                    function t(t, n, r, i) {
                        R(e, t, n, r, i)
                    }
                }
                const O = ["bids", "paapi"],
                    B = (0, p.A_)("sync", (function(e, t, n, r, i, o) {
                        let {
                            onRequest: s,
                            onResponse: a,
                            onPaapi: d,
                            onError: c,
                            onBid: l,
                            onCompletion: u
                        } = o;
                        const g = U(n);
                        u = g.startTiming("total").stopBefore(u);
                        const p = C(n);
                        let m = g.measureTime("buildRequests", (() => e.buildRequests(t.map(p.bidRequest), p.bidderRequest(n))));
                        if (!m || 0 === m.length) return void u();
                        Array.isArray(m) || (m = [m]);
                        const b = (0, f.delayExecution)(u, m.length);
                        m.forEach((t => {
                            const n = g.fork();

                            function o(e) {
                                null != e && (e.metrics = n.fork().renameWith()), l(e)
                            }
                            const u = i((function(r, i) {
                                    m();
                                    try {
                                        r = JSON.parse(r)
                                    } catch (e) {}
                                    r = {
                                        body: r,
                                        headers: {
                                            get: i.getResponseHeader.bind(i)
                                        }
                                    }, a(r);
                                    try {
                                        r = n.measureTime("interpretResponse", (() => e.interpretResponse(r, t)))
                                    } catch (t) {
                                        return (0, f.logError)(`Bidder ${e.code} failed to interpret the server's response. Continuing without bids`, null, t), void b()
                                    }
                                    let s, c;
                                    r && !Object.keys(r).some((e => !O.includes(e))) ? (s = r.bids, c = r.paapi) : s = r, (0, f.isArray)(c) && c.forEach(d), s && ((0, f.isArray)(s) ? s.forEach(o) : o(s)), b()
                                })),
                                p = i((function(e, t) {
                                    m(), c(e, t), b()
                                }));
                            s(t);
                            const m = n.startTiming("net");

                            function I(n) {
                                const r = t.options;
                                return Object.assign(n, r, {
                                    browsingTopics: !(r ? .hasOwnProperty("browsingTopics") && !r.browsingTopics) && ((h.u.get(e.code, "topicsHeader") ? ? !0) && (0, y.io)(A.DL, (0, v.s)(E.tW, e.code)))
                                })
                            }
                            switch (t.method) {
                                case "GET":
                                    r(`${t.url}${function(e){if(e)return`?${"object"==typeof e?(0,f.parseQueryStringParameters)(e):e}`;return""}(t.data)}`, {
                                        success: u,
                                        error: p
                                    }, void 0, I({
                                        method: "GET",
                                        withCredentials: !0
                                    }));
                                    break;
                                case "POST":
                                    r(t.url, {
                                        success: u,
                                        error: p
                                    }, "string" == typeof t.data ? t.data : JSON.stringify(t.data), I({
                                        method: "POST",
                                        contentType: "text/plain",
                                        withCredentials: !0
                                    }));
                                    break;
                                default:
                                    (0, f.logWarn)(`Skipping invalid request from ${e.code}. Request type ${t.type} must be GET or POST`), b()
                            }
                        }))
                    }), "processBidderRequests"),
                    R = (0, p.A_)("async", (function(e, t, n, r, s) {
                        const d = o.$W.getConfig("userSync.aliasSyncEnabled");
                        if (e.getUserSyncs && (d || !i.Ay.aliasRegistry[e.code])) {
                            let i = o.$W.getConfig("userSync.filterSettings"),
                                d = e.getUserSyncs({
                                    iframeEnabled: !(!i || !i.iframe && !i.all),
                                    pixelEnabled: !(!i || !i.image && !i.all)
                                }, t, n, r, s);
                            d && (Array.isArray(d) || (d = [d]), d.forEach((t => {
                                a.zt.registerSync(t.type, e.code, t.url)
                            })), a.zt.bidderDone(e.code))
                        }
                    }), "registerSyncs"),
                    k = (0, p.A_)("sync", ((e, t) => {}), "addPaapiConfig");

                function D(e, t) {
                    let {
                        index: n = m.n.index
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

                    function r(e) {
                        return `Invalid bid from ${t.bidderCode}. Ignoring bid: ${e}`
                    }
                    return e ? t ? function() {
                        let e = Object.keys(t);
                        return I.every((n => (0, g.mK)(e, n) && !(0, g.mK)([void 0, null], t[n])))
                    }() ? "native" !== t.mediaType || (0, d.Bm)(t, {
                        index: n
                    }) ? "video" !== t.mediaType || (0, c.vk)(t, {
                        index: n
                    }) ? !("banner" === t.mediaType && ! function(e, t) {
                        let {
                            index: n = m.n.index
                        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
                        const r = n.getBidRequest(t),
                            i = n.getMediaTypes(t),
                            o = r && r.sizes || i && i.banner && i.banner.sizes,
                            s = (0, f.parseSizesInput)(o);
                        if (1 === s.length) {
                            const [e, n] = s[0].split("x");
                            return t.width = parseInt(e, 10), t.height = parseInt(n, 10), !0
                        }
                        return !1
                    }(e, t, {
                        index: n
                    })) || ((0, f.logError)(r("Banner bids require a width and height")), !1) : ((0, f.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : ((0, f.logError)(r("Native bid missing some required properties.")), !1) : ((0, f.logError)(r(`Bidder ${t.bidderCode} is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.`)), !1) : ((0, f.logWarn)(`Some adapter tried to add an undefined bid for ${e}.`), !1) : ((0, f.logWarn)("No adUnitCode was supplied to addBidResponse."), !1)
                }

                function U(e) {
                    return (0, b.BO)(e.metrics).renameWith((t => [`adapter.client.${t}`, `adapters.client.${e.bidderCode}.${t}`]))
                }
            },
            41580: (e, t, n) => {
                n.d(t, {
                    R: () => l
                });
                var r = n(76811),
                    i = n(83441),
                    o = n(95139),
                    s = n(15901),
                    a = n(91069);
                const d = new WeakMap,
                    c = ["debugging", "outstream", "improvedigital", "showheroes-bs", "aaxBlockmeter", "adagio", "adloox", "akamaidap", "arcspan", "airgrid", "browsi", "brandmetrics", "clean.io", "humansecurity", "confiant", "contxtful", "hadron", "mediafilter", "medianet", "azerionedge", "a1Media", "geoedge", "qortex", "dynamicAdBoost", "51Degrees", "symitridap", "wurfl", "justtag", "tncId", "ftrackId", "id5"];

                function l(e, t, n, l, u, g) {
                    if (!(0, o.io)(r.pY, (0, i.s)(t, n))) return;
                    if (!n || !e) return void(0, a.logError)("cannot load external script without url and moduleCode");
                    if (!(0, s.mK)(c, n)) return void(0, a.logError)(`${n} not whitelisted for loading external JavaScript`);
                    u || (u = document);
                    const f = h(u, e);
                    if (f) return l && "function" == typeof l && (f.loaded ? l() : f.callbacks.push(l)), f.tag;
                    const p = d.get(u) || {},
                        m = {
                            loaded: !1,
                            tag: null,
                            callbacks: []
                        };
                    return p[e] = m, d.set(u, p), l && "function" == typeof l && m.callbacks.push(l), (0, a.logWarn)(`module ${n} is loading external JavaScript`),
                        function(t, n, r, i) {
                            r || (r = document);
                            var o = r.createElement("script");
                            o.type = "text/javascript", o.async = !0;
                            const s = h(r, e);
                            s && (s.tag = o);
                            o.readyState ? o.onreadystatechange = function() {
                                "loaded" !== o.readyState && "complete" !== o.readyState || (o.onreadystatechange = null, n())
                            } : o.onload = function() {
                                n()
                            };
                            o.src = t, i && (0, a.setScriptAttributes)(o, i);
                            return (0, a.insertElement)(o, r), o
                        }(e, (function() {
                            m.loaded = !0;
                            try {
                                for (let e = 0; e < m.callbacks.length; e++) m.callbacks[e]()
                            } catch (e) {
                                (0, a.logError)("Error executing callback", "adloader.js:loadExternalScript", e)
                            }
                        }), u, g);

                    function h(e, t) {
                        const n = d.get(e);
                        return n && n[t] ? n[t] : null
                    }
                }
            },
            51692: (e, t, n) => {
                n.d(t, {
                    Q: () => r
                });
                const r = (0, n(16833).A_)("sync", (() => {}))
            },
            68044: (e, t, n) => {
                n.d(t, {
                    RD: () => f,
                    Rz: () => g,
                    g4: () => u,
                    hd: () => p
                });
                var r = n(43272),
                    i = n(91069);
                const o = {
                        fetch: window.fetch.bind(window),
                        makeRequest: (e, t) => new Request(e, t),
                        timeout(e, t) {
                            const n = new AbortController;
                            let r = setTimeout((() => {
                                n.abort(), (0, i.logError)(`Request timeout after ${e}ms`, t), r = null
                            }), e);
                            return {
                                signal: n.signal,
                                done() {
                                    r && clearTimeout(r)
                                }
                            }
                        }
                    },
                    s = "GET",
                    a = "POST",
                    d = "Content-Type";

                function c() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
                        {
                            request: t,
                            done: n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = (t, n) => {
                            let i;
                            null == e || null != n ? .signal || r.$W.getConfig("disableAjaxTimeout") || (i = o.timeout(e, t), n = Object.assign({
                                signal: i.signal
                            }, n));
                            let s = o.fetch(t, n);
                            return null != i ? .done && (s = s.finally(i.done)), s
                        };
                    return null == t && null == n || (i = (e => function(r, i) {
                        const o = new URL(null == r ? .url ? r : r.url, document.location).origin;
                        let s = e(r, i);
                        return t && t(o), n && (s = s.finally((() => n(o)))), s
                    })(i)), i
                }

                function l(e, t) {
                    let {
                        status: n,
                        statusText: r = "",
                        headers: o,
                        url: s
                    } = e, a = 0;

                    function c(e) {
                        if (0 === a) try {
                            a = (new DOMParser).parseFromString(t, o ? .get(d) ? .split(";") ? .[0])
                        } catch (t) {
                            a = null, e && e(t)
                        }
                        return a
                    }
                    return {
                        readyState: XMLHttpRequest.DONE,
                        status: n,
                        statusText: r,
                        responseText: t,
                        response: t,
                        responseType: "",
                        responseURL: s,
                        get responseXML() {
                            return c(i.logError)
                        },
                        getResponseHeader: e => o ? .has(e) ? o.get(e) : null,
                        toJSON() {
                            return Object.assign({
                                responseXML: c()
                            }, this)
                        },
                        timedOut: !1
                    }
                }

                function u() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
                        {
                            request: t,
                            done: n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const r = c(e, {
                        request: t,
                        done: n
                    });
                    return function(e, t, n) {
                        ! function(e, t) {
                            const {
                                success: n,
                                error: r
                            } = "object" == typeof t && null != t ? t : {
                                success: "function" == typeof t ? t : () => null,
                                error: (e, t) => (0, i.logError)("Network error", e, t)
                            };
                            e.then((e => e.text().then((t => [e, t])))).then((e => {
                                let [t, i] = e;
                                const o = l(t, i);
                                t.ok || 304 === t.status ? n(i, o) : r(t.statusText, o)
                            }), (e => r("", Object.assign(l({
                                status: 0
                            }, ""), {
                                reason: e,
                                timedOut: "AbortError" === e ? .name
                            }))))
                        }(r(function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            const r = n.method || (t ? a : s);
                            if (r === s && t) {
                                const r = (0, i.parseUrl)(e, n);
                                Object.assign(r.search, t), e = (0, i.buildUrl)(r)
                            }
                            const c = new Headers(n.customHeaders);
                            c.set(d, n.contentType || "text/plain");
                            const l = {
                                method: r,
                                headers: c
                            };
                            return r !== s && t && (l.body = t), n.withCredentials && (l.credentials = "include"), isSecureContext && ["browsingTopics", "adAuctionHeaders"].forEach((e => {
                                n[e] && (l[e] = !0)
                            })), n.keepalive && (l.keepalive = !0), o.makeRequest(e, l)
                        }(e, n, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {})), t)
                    }
                }

                function g(e, t) {
                    return !(!window.navigator || !window.navigator.sendBeacon) && window.navigator.sendBeacon(e, t)
                }
                const f = u(),
                    p = c()
            },
            81657: (e, t, n) => {
                n.d(t, {
                    AA: () => O,
                    HN: () => J,
                    UZ: () => B,
                    ZV: () => F,
                    mO: () => G,
                    mX: () => j,
                    sR: () => $,
                    v8: () => W,
                    w1: () => x
                });
                var r = n(91069),
                    i = n(86833),
                    o = n(12449),
                    s = n(68693),
                    a = n(95789),
                    d = n(43272),
                    c = n(38230),
                    l = n(16833),
                    u = n(15901),
                    g = n(63895),
                    f = n(71371),
                    p = n(67314),
                    m = n(12693),
                    h = n(75023),
                    b = n(11445),
                    y = n(78969),
                    v = n(25555),
                    E = n(16894),
                    A = n(57176),
                    I = n(7873),
                    T = n(76853),
                    w = n(27863);
                const {
                    syncUsers: C
                } = c.zt, S = "started", O = "inProgress", B = "completed";
                h.on(y.qY.BID_ADJUSTMENT, (function(e) {
                    ! function(e) {
                        let t = (0, A.y)(e.cpm, e);
                        t >= 0 && (e.cpm = t)
                    }(e)
                }));
                const R = 4,
                    k = {},
                    D = {},
                    U = [],
                    _ = (0, I.m)();

                function j(e) {
                    let {
                        adUnits: t,
                        adUnitCodes: n,
                        callback: s,
                        cbTimeout: c,
                        labels: l,
                        auctionId: m,
                        ortb2Fragments: A,
                        metrics: I
                    } = e;
                    I = (0, E.BO)(I);
                    const j = t,
                        G = l,
                        F = n,
                        L = m || (0, r.generateUUID)(),
                        z = c,
                        H = new Set,
                        V = (0, v.v)(),
                        K = (0, v.v)();
                    let J, Y, Q, Z, ee = [],
                        te = s,
                        ne = [],
                        re = (0, T.H)({
                            startTime: e => e.responseTimestamp,
                            ttl: e => null == (0, w.S9)() ? null : 1e3 * Math.max((0, w.S9)(), e.ttl)
                        }),
                        ie = [],
                        oe = [],
                        se = [];

                    function ae() {
                        return {
                            auctionId: L,
                            timestamp: J,
                            auctionEnd: Y,
                            auctionStatus: Z,
                            adUnits: j,
                            adUnitCodes: F,
                            labels: G,
                            bidderRequests: ne,
                            noBids: ie,
                            bidsReceived: re.toArray(),
                            bidsRejected: ee,
                            winningBids: oe,
                            timeout: z,
                            metrics: I,
                            seatNonBids: se
                        }
                    }

                    function de(e) {
                        if (e ? h.emit(y.qY.AUCTION_TIMEOUT, ae()) : clearTimeout(Q), void 0 === Y) {
                            let n = [];
                            e && ((0, r.logMessage)(`Auction ${L} timedOut`), n = ne.filter((e => !H.has(e.bidderRequestId))).flatMap((e => e.bids)), n.length && h.emit(y.qY.BID_TIMEOUT, n)), Z = B, Y = Date.now(), I.checkpoint("auctionEnd"), I.timeBetween("requestBids", "auctionEnd", "requestBids.total"), I.timeBetween("callBids", "auctionEnd", "requestBids.callBids"), V.resolve(), h.emit(y.qY.AUCTION_END, ae()), q(j, (function() {
                                try {
                                    if (null != te) {
                                        const t = re.toArray().filter((e => F.includes(e.adUnitCode))).reduce(X, {});
                                        te.apply(_, [t, e, L]), te = null
                                    }
                                } catch (e) {
                                    (0, r.logError)("Error executing bidsBackHandler", null, e)
                                } finally {
                                    n.length && b.Ay.callTimedOutBidders(t, n, z);
                                    let e = d.$W.getConfig("userSync") || {};
                                    e.enableOverride || C(e.syncDelay)
                                }
                            }))
                        }
                    }

                    function ce() {
                        d.$W.resetBidder(), (0, r.logInfo)(`Bids Received for Auction with id: ${L}`, re.toArray()), Z = B, de(!1)
                    }

                    function le(e) {
                        H.add(e)
                    }

                    function ue(e) {
                        e.forEach((e => {
                            var t;
                            t = e, ne = ne.concat(t)
                        }));
                        let t = {},
                            n = {
                                bidRequests: e,
                                run: () => {
                                    Q = setTimeout((() => de(!0)), z), Z = O, h.emit(y.qY.AUCTION_INIT, ae());
                                    let n = function(e, t) {
                                        let {
                                            index: n = p.n.index
                                        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = 0, c = !1, l = new Set, m = {};

                                        function b() {
                                            s--, c && 0 === s && e()
                                        }

                                        function E(e, t, n) {
                                            return m[t.requestId] = !0,
                                                function(e, t) {
                                                    let {
                                                        index: n = p.n.index
                                                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                                    const i = n.getBidderRequest(e),
                                                        o = n.getAdUnit(e),
                                                        s = i && i.start || e.requestTimestamp;
                                                    Object.assign(e, {
                                                        responseTimestamp: e.responseTimestamp || (0, r.timestamp)(),
                                                        requestTimestamp: e.requestTimestamp || s,
                                                        cpm: parseFloat(e.cpm) || 0,
                                                        bidder: e.bidder || e.bidderCode,
                                                        adUnitCode: t
                                                    }), null != o ? .ttlBuffer && (e.ttlBuffer = o.ttlBuffer);
                                                    e.timeToRespond = e.responseTimestamp - e.requestTimestamp
                                                }(t, e), s++, n(b)
                                        }

                                        function A(e, s) {
                                            E(e, s, (e => {
                                                let c = function(e) {
                                                    let {
                                                        index: t = p.n.index
                                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                    h.emit(y.qY.BID_ADJUSTMENT, e);
                                                    const n = t.getBidRequest(e) ? .renderer || t.getAdUnit(e).renderer,
                                                        r = e.mediaType,
                                                        o = t.getMediaTypes(e),
                                                        s = o && o[r];
                                                    var c = s && s.renderer,
                                                        l = null;
                                                    !c || !c.render || !0 === c.backupOnly && e.renderer ? !n || !n.render || !0 === n.backupOnly && e.renderer || (l = n) : l = c;
                                                    l && (e.renderer = a.A4.install({
                                                        url: l.url,
                                                        config: l.options,
                                                        renderNow: null == l.url
                                                    }), e.renderer.setRender(l.render));
                                                    const u = M(e.mediaType, o, d.$W.getConfig("mediaTypePriceGranularity")),
                                                        g = (0, i.j)(e.cpm, "object" == typeof u ? u : d.$W.getConfig("customPriceBucket"), d.$W.getConfig("currency.granularityMultiplier"));
                                                    return e.pbLg = g.low, e.pbMg = g.med, e.pbHg = g.high, e.pbAg = g.auto, e.pbDg = g.dense, e.pbCg = g.custom, e
                                                }(s);
                                                h.emit(y.qY.BID_ACCEPTED, c), c.mediaType === f.G_ ? function(e, t, n) {
                                                    let {
                                                        index: i = p.n.index
                                                    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = !0;
                                                    const s = i.getMediaTypes({
                                                            requestId: t.originalRequestId || t.requestId,
                                                            adUnitId: t.adUnitId
                                                        }) ? .video,
                                                        a = s && s ? .context,
                                                        c = s && s ? .useCacheKey;
                                                    d.$W.getConfig("cache.url") && (c || a !== g.H6) && (!t.videoCacheKey || d.$W.getConfig("cache.ignoreBidderCacheKey") ? (o = !1, P(e, t, n, s)) : t.vastUrl || ((0, r.logError)("videoCacheKey specified but not required vastUrl for video bid"), o = !1));
                                                    o && (W(e, t), n())
                                                }(t, c, e) : ((0, o.l6)(c) && (0, o.gs)(c, n.getAdUnit(c)), W(t, c), e())
                                            }))
                                        }

                                        function I(e, n, i) {
                                            return E(e, n, (e => {
                                                n.rejectionReason = i, (0, r.logWarn)(`Bid from ${n.bidder||"unknown bidder"} was rejected: ${i}`, n), h.emit(y.qY.BID_REJECTED, n), t.addBidRejected(n), e()
                                            }))
                                        }

                                        function T() {
                                            let n = this,
                                                i = t.getBidRequests();
                                            const o = d.$W.getConfig("auctionOptions");
                                            if (l.add(n), o && !(0, r.isEmpty)(o)) {
                                                const e = o.secondaryBidders;
                                                e && !i.every((t => (0, u.mK)(e, t.bidderCode))) && (i = i.filter((t => !(0, u.mK)(e, t.bidderCode))))
                                            }
                                            c = i.every((e => l.has(e))), n.bids.forEach((e => {
                                                m[e.bidId] || (t.addNoBid(e), h.emit(y.qY.NO_BID, e))
                                            })), c && 0 === s && e()
                                        }
                                        return {
                                            addBidResponse: function() {
                                                function e(e, t) {
                                                    $.call({
                                                        dispatch: A
                                                    }, e, t, (() => {
                                                        let n = !1;
                                                        return r => {
                                                            n || (I(e, t, r), n = !0)
                                                        }
                                                    })())
                                                }
                                                return e.reject = I, e
                                            }(),
                                            adapterDone: function() {
                                                N(v.k.resolve()).finally((() => T.call(this)))
                                            }
                                        }
                                    }(ce, this);
                                    b.Ay.callBids(j, e, n.addBidResponse, n.adapterDone, {
                                        request(e, n) {
                                            c(k, n), c(t, e), D[e] || (D[e] = {
                                                SRA: !0,
                                                origin: n
                                            }), t[e] > 1 && (D[e].SRA = !1)
                                        },
                                        done(e) {
                                            k[e]--, U[0] && s(U[0]) && U.shift()
                                        }
                                    }, z, le, A), K.resolve()
                                }
                            };

                        function s(e) {
                            let t = !0,
                                n = d.$W.getConfig("maxRequestsPerOrigin") || R;
                            return e.bidRequests.some((e => {
                                let r = 1,
                                    i = void 0 !== e.src && e.src === y.RW.SRC ? "s2s" : e.bidderCode;
                                return D[i] && (!1 === D[i].SRA && (r = Math.min(e.bids.length, n)), k[D[i].origin] + r > n && (t = !1)), !t
                            })), t && e.run(), t
                        }

                        function c(e, t) {
                            void 0 === e[t] ? e[t] = 1 : e[t]++
                        }
                        s(n) || ((0, r.logWarn)("queueing auction due to limited endpoint capacity"), U.push(n))
                    }
                    return (0, w.lc)((() => re.refresh())), h.on(y.qY.SEAT_NON_BID, (e => {
                        var t;
                        e.auctionId === L && (t = e.seatnonbid, se = se.concat(t))
                    })), {
                        addBidReceived: function(e) {
                            re.add(e)
                        },
                        addBidRejected: function(e) {
                            ee = ee.concat(e)
                        },
                        addNoBid: function(e) {
                            ie = ie.concat(e)
                        },
                        callBids: function() {
                            Z = S, J = Date.now();
                            let e = I.measureTime("requestBids.makeRequests", (() => b.Ay.makeBidRequests(j, J, L, z, G, A, I)));
                            (0, r.logInfo)(`Bids Requested for Auction with id: ${L}`, e), I.checkpoint("callBids"), e.length < 1 ? ((0, r.logWarn)("No valid bid requests returned for auction"), ce()) : x.call({
                                dispatch: ue,
                                context: this
                            }, e)
                        },
                        addWinningBid: function(e) {
                            oe = oe.concat(e), b.Ay.callBidWonBidder(e.adapterCode || e.bidder, e, t), e.deferBilling || b.Ay.triggerBilling(e)
                        },
                        setBidTargeting: function(e) {
                            b.Ay.callSetTargetingBidder(e.adapterCode || e.bidder, e)
                        },
                        getWinningBids: () => oe,
                        getAuctionStart: () => J,
                        getAuctionEnd: () => Y,
                        getTimeout: () => z,
                        getAuctionId: () => L,
                        getAuctionStatus: () => Z,
                        getAdUnits: () => j,
                        getAdUnitCodes: () => F,
                        getBidRequests: () => ne,
                        getBidsReceived: () => re.toArray(),
                        getNoBids: () => ie,
                        getNonBids: () => se,
                        getFPD: () => A,
                        getMetrics: () => I,
                        end: V.promise,
                        requestsDone: K.promise,
                        getProperties: ae
                    }
                }
                const $ = (0, l.A_)("sync", (function(e, t, n) {
                        ! function(e) {
                            const t = d.$W.getConfig("maxBid");
                            return !t || !e.cpm || t >= Number(e.cpm)
                        }(t) ? n(y.Tf.PRICE_TOO_HIGH): this.dispatch.call(null, e, t)
                    }), "addBidResponse"),
                    N = (0, l.A_)("sync", (e => e), "responsesReady"),
                    x = (0, l.A_)("sync", (function(e) {
                        this.dispatch.call(this.context, e)
                    }), "addBidderRequests"),
                    q = (0, l.A_)("async", (function(e, t) {
                        t && t()
                    }), "bidsBackCallback");

                function W(e, t) {
                    ! function(e) {
                        let t;
                        const n = !0 === m.u.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0;
                        e.bidderCode && (n || e.dealId) && (t = function(e, t) {
                            let {
                                index: n = p.n.index
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if (!t) return {};
                            const r = n.getBidRequest(t);
                            var i = {};
                            const s = J(t.mediaType, e);
                            Y(i, s, t, r), e && m.u.getOwn(e, y.iD.ADSERVER_TARGETING) && (Y(i, m.u.ownSettingsFor(e), t, r), t.sendStandardTargeting = m.u.get(e, "sendStandardTargeting"));
                            t.native && (i = Object.assign({}, i, (0, o.Zj)(t)));
                            return i
                        }(e.bidderCode, e));
                        e.adserverTargeting = Object.assign(e.adserverTargeting || {}, t)
                    }(t), (0, E.BO)(t.metrics).timeSince("addBidResponse", "addBidResponse.total"), e.addBidReceived(t), h.emit(y.qY.BID_RESPONSE, t)
                }
                const P = (0, l.A_)("async", (function(e, t, n, r) {
                    (0, s.X5)(e, t, n)
                }), "callPrebidCache");

                function M(e, t, n) {
                    if (e && n) {
                        if (e === f.G_) {
                            const e = t ? .[f.G_] ? .context ? ? "instream";
                            if (n[`${f.G_}-${e}`]) return n[`${f.G_}-${e}`]
                        }
                        return n[e]
                    }
                }
                const G = function(e) {
                        let {
                            index: t = p.n.index
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        const n = M(e.mediaType, t.getMediaTypes(e), d.$W.getConfig("mediaTypePriceGranularity"));
                        return "string" == typeof e.mediaType && n ? "string" == typeof n ? n : "custom" : d.$W.getConfig("priceGranularity")
                    },
                    F = e => t => {
                        const n = e || G(t);
                        return n === y.UE.AUTO ? t.pbAg : n === y.UE.DENSE ? t.pbDg : n === y.UE.LOW ? t.pbLg : n === y.UE.MEDIUM ? t.pbMg : n === y.UE.HIGH ? t.pbHg : n === y.UE.CUSTOM ? t.pbCg : void 0
                    },
                    L = () => e => e.creativeId ? e.creativeId : "",
                    z = () => e => e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0 ? [e.meta.advertiserDomains].flat()[0] : "",
                    H = () => e => e.meta && (e.meta.networkId || e.meta.networkName) ? e ? .meta ? .networkName || e ? .meta ? .networkId : "",
                    V = () => e => e.meta && e.meta.primaryCatId ? e.meta.primaryCatId : "";

                function K(e, t) {
                    return {
                        key: e,
                        val: "function" == typeof t ? function(e, n) {
                            return t(e, n)
                        } : function(e) {
                            return e[t]
                        }
                    }
                }

                function J(e, t) {
                    const n = Object.assign({}, m.u.settingsFor(null));
                    if (n[y.iD.ADSERVER_TARGETING] || (n[y.iD.ADSERVER_TARGETING] = [K(y.xS.BIDDER, "bidderCode"), K(y.xS.AD_ID, "adId"), K(y.xS.PRICE_BUCKET, F()), K(y.xS.SIZE, "size"), K(y.xS.DEAL, "dealId"), K(y.xS.SOURCE, "source"), K(y.xS.FORMAT, "mediaType"), K(y.xS.ADOMAIN, z()), K(y.xS.ACAT, V()), K(y.xS.DSP, H()), K(y.xS.CRID, L())]), "video" === e) {
                        const e = n[y.iD.ADSERVER_TARGETING].slice();
                        if (n[y.iD.ADSERVER_TARGETING] = e, [y.xS.UUID, y.xS.CACHE_ID].forEach((t => {
                                void 0 === (0, u.I6)(e, (e => e.key === t)) && e.push(K(t, "videoCacheKey"))
                            })), d.$W.getConfig("cache.url") && (!t || !1 !== m.u.get(t, "sendStandardTargeting"))) {
                            const t = (0, r.parseUrl)(d.$W.getConfig("cache.url"));
                            void 0 === (0, u.I6)(e, (e => e.key === y.xS.CACHE_HOST)) && e.push(K(y.xS.CACHE_HOST, (function(e) {
                                return e ? .adserverTargeting ? .[y.xS.CACHE_HOST] || t.hostname
                            })))
                        }
                    }
                    return n
                }

                function Y(e, t, n, i) {
                    var o = t[y.iD.ADSERVER_TARGETING];
                    return n.size = n.getSize(), (o || []).forEach((function(o) {
                        var s = o.key,
                            a = o.val;
                        if (e[s] && (0, r.logWarn)("The key: " + s + " is being overwritten"), (0, r.isFn)(a)) try {
                            a = a(n, i)
                        } catch (e) {
                            (0, r.logError)("bidmanager", "ERROR", e)
                        }(void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) && s !== y.xS.DEAL && s !== y.xS.ACAT && s !== y.xS.DSP && s !== y.xS.CRID || !(0, r.isEmptyStr)(a) && null != a ? e[s] = a : (0, r.logInfo)("suppressing empty key '" + s + "' from adserver targeting")
                    })), e
                }

                function X(e, t) {
                    return e[t.adUnitCode] || (e[t.adUnitCode] = {
                        bids: []
                    }), e[t.adUnitCode].bids.push(t), e
                }
            },
            67314: (e, t, n) => {
                n.d(t, {
                    n: () => l
                });
                var r = n(91069),
                    i = n(81657);

                function o(e) {
                    Object.assign(this, {
                        getAuction(t) {
                            let {
                                auctionId: n
                            } = t;
                            if (null != n) return e().find((e => e.getAuctionId() === n))
                        },
                        getAdUnit(t) {
                            let {
                                adUnitId: n
                            } = t;
                            if (null != n) return e().flatMap((e => e.getAdUnits())).find((e => e.adUnitId === n))
                        },
                        getMediaTypes(e) {
                            let {
                                adUnitId: t,
                                requestId: n
                            } = e;
                            if (null != n) {
                                const e = this.getBidRequest({
                                    requestId: n
                                });
                                if (null != e && (null == t || e.adUnitId === t)) return e.mediaTypes
                            } else if (null != t) {
                                const e = this.getAdUnit({
                                    adUnitId: t
                                });
                                if (null != e) return e.mediaTypes
                            }
                        },
                        getBidderRequest(t) {
                            let {
                                requestId: n,
                                bidderRequestId: r
                            } = t;
                            if (null != n || null != r) {
                                let t = e().flatMap((e => e.getBidRequests()));
                                return null != r && (t = t.filter((e => e.bidderRequestId === r))), null == n ? t[0] : t.find((e => e.bids && null != e.bids.find((e => e.bidId === n))))
                            }
                        },
                        getBidRequest(t) {
                            let {
                                requestId: n
                            } = t;
                            if (null != n) return e().flatMap((e => e.getBidRequests())).flatMap((e => e.bids)).find((e => e && e.bidId === n))
                        },
                        getOrtb2(e) {
                            return this.getBidderRequest(e) ? .ortb2 || this.getAuction(e) ? .getFPD() ? .global ? .ortb2
                        }
                    })
                }
                var s = n(78969),
                    a = n(16894),
                    d = n(76853),
                    c = n(27863);
                const l = function() {
                    const e = (0, d.H)({
                        startTime: e => e.end.then((() => e.getAuctionEnd())),
                        ttl: e => null == (0, c.S9)() ? null : e.end.then((() => 1e3 * Math.max((0, c.S9)(), ...e.getBidsReceived().map((e => e.ttl)))))
                    });
                    (0, c.lc)((() => e.refresh()));
                    const t = {
                        onExpiry: e.onExpiry
                    };

                    function n(t) {
                        for (const n of e)
                            if (n.getAuctionId() === t) return n
                    }

                    function l() {
                        return e.toArray().flatMap((e => e.getBidsReceived()))
                    }
                    return t.addWinningBid = function(e) {
                        const t = (0, a.BO)(e.metrics);
                        t.checkpoint("bidWon"), t.timeBetween("auctionEnd", "bidWon", "adserver.pending"), t.timeBetween("requestBids", "bidWon", "adserver.e2e");
                        const i = n(e.auctionId);
                        i ? i.addWinningBid(e) : (0, r.logWarn)("Auction not found when adding winning bid")
                    }, Object.entries({
                        getAllWinningBids: {
                            name: "getWinningBids"
                        },
                        getBidsRequested: {
                            name: "getBidRequests"
                        },
                        getNoBids: {},
                        getAdUnits: {},
                        getBidsReceived: {
                            pre: e => e.getAuctionStatus() === i.UZ
                        },
                        getAdUnitCodes: {
                            post: r.uniques
                        }
                    }).forEach((n => {
                        let [r, {
                            name: i = r,
                            pre: o,
                            post: s
                        }] = n;
                        const a = null == o ? e => e[i]() : e => o(e) ? e[i]() : [],
                            d = null == s ? e => e : e => e.filter(s);
                        t[r] = () => d(e.toArray().flatMap(a))
                    })), t.getAllBidsForAdUnitCode = function(e) {
                        return l().filter((t => t && t.adUnitCode === e))
                    }, t.createAuction = function(t) {
                        const n = (0, i.mX)(t);
                        return function(t) {
                            e.add(t)
                        }(n), n
                    }, t.findBidByAdId = function(e) {
                        return l().find((t => t.adId === e))
                    }, t.getStandardBidderAdServerTargeting = function() {
                        return (0, i.HN)()[s.iD.ADSERVER_TARGETING]
                    }, t.setStatusForBids = function(e, r) {
                        let i = t.findBidByAdId(e);
                        if (i && (i.status = r), i && r === s.tl.BID_TARGETING_SET) {
                            const e = n(i.auctionId);
                            e && e.setBidTargeting(i)
                        }
                    }, t.getLastAuctionId = function() {
                        const t = e.toArray();
                        return t.length && t[t.length - 1].getAuctionId()
                    }, t.clearAllAuctions = function() {
                        e.clear()
                    }, t.index = new o((() => e.toArray())), t
                }()
            },
            27863: (e, t, n) => {
                n.d(t, {
                    S9: () => l,
                    cT: () => c,
                    lc: () => u
                });
                var r = n(43272),
                    i = n(91069);
                const o = "minBidCacheTTL";
                let s = 1,
                    a = null;
                const d = [];

                function c(e) {
                    return e.ttl - (e.hasOwnProperty("ttlBuffer") ? e.ttlBuffer : s)
                }

                function l() {
                    return a
                }

                function u(e) {
                    d.push(e)
                }
                r.$W.getConfig("ttlBuffer", (e => {
                    "number" == typeof e.ttlBuffer ? s = e.ttlBuffer : (0, i.logError)("Invalid value for ttlBuffer", e.ttlBuffer)
                })), r.$W.getConfig(o, (e => {
                    const t = a;
                    a = e ? .[o], a = "number" == typeof a ? a : null, t !== a && d.forEach((e => e(a)))
                }))
            },
            12693: (e, t, n) => {
                n.d(t, {
                    u: () => a
                });
                var r = n(70433),
                    i = n(91069),
                    o = n(7873),
                    s = n(78969);
                const a = new class {
                    constructor(e, t) {
                        this.getSettings = e, this.defaultScope = t
                    }
                    get(e, t) {
                        let n = this.getOwn(e, t);
                        return void 0 === n && (n = this.getOwn(null, t)), n
                    }
                    getOwn(e, t) {
                        return e = this.#e(e), (0, r.A)(this.getSettings(), `${e}.${t}`)
                    }
                    getScopes() {
                        return Object.keys(this.getSettings()).filter((e => e !== this.defaultScope))
                    }
                    settingsFor(e) {
                        return (0, i.mergeDeep)({}, this.ownSettingsFor(null), this.ownSettingsFor(e))
                    }
                    ownSettingsFor(e) {
                        return e = this.#e(e), this.getSettings()[e] || {}
                    }#
                    e(e) {
                        return null == e ? this.defaultScope : e
                    }
                }((() => (0, o.m)().bidderSettings || {}), s.iD.BD_SETTING_STANDARD)
            },
            93597: (e, t, n) => {
                n.d(t, {
                    O: () => o
                });
                var r = n(91069);

                function i(e) {
                    let {
                        src: t = "client",
                        bidder: n = "",
                        bidId: i,
                        transactionId: o,
                        adUnitId: s,
                        auctionId: a
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var d = t,
                        c = e || 0;
                    Object.assign(this, {
                        bidderCode: n,
                        width: 0,
                        height: 0,
                        statusMessage: function() {
                            switch (c) {
                                case 0:
                                    return "Pending";
                                case 1:
                                    return "Bid available";
                                case 2:
                                    return "Bid returned empty or error response";
                                case 3:
                                    return "Bid timed out"
                            }
                        }(),
                        adId: (0, r.getUniqueIdentifierStr)(),
                        requestId: i,
                        transactionId: o,
                        adUnitId: s,
                        auctionId: a,
                        mediaType: "banner",
                        source: d
                    }), this.getStatusCode = function() {
                        return c
                    }, this.getSize = function() {
                        return this.width + "x" + this.height
                    }, this.getIdentifiers = function() {
                        return {
                            src: this.source,
                            bidder: this.bidderCode,
                            bidId: this.requestId,
                            transactionId: this.transactionId,
                            adUnitId: this.adUnitId,
                            auctionId: this.auctionId
                        }
                    }
                }

                function o(e, t) {
                    return new i(e, t)
                }
            },
            43272: (e, t, n) => {
                n.d(t, {
                    $W: () => m,
                    Ov: () => l
                });
                var r = n(86833),
                    i = n(15901),
                    o = n(91069),
                    s = n(70433),
                    a = n(78969);
                const d = "TRUE" === (0, o.getParameterByName)(a.M).toUpperCase(),
                    c = {},
                    l = "random",
                    u = {};
                u[l] = !0, u.fixed = !0;
                const g = l,
                    f = {
                        LOW: "low",
                        MEDIUM: "medium",
                        HIGH: "high",
                        AUTO: "auto",
                        DENSE: "dense",
                        CUSTOM: "custom"
                    };

                function p(e) {
                    const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1] ? {
                        priceGranularity: f.MEDIUM,
                        customPriceBucket: {},
                        mediaTypePriceGranularity: {},
                        bidderSequence: g,
                        auctionOptions: {}
                    } : {};

                    function n(e) {
                        return t[e]
                    }

                    function s(n, r) {
                        t.hasOwnProperty(n) || Object.defineProperty(e, n, {
                            enumerable: !0
                        }), t[n] = r
                    }
                    const a = {
                        publisherDomain: {
                            set(e) {
                                null != e && (0, o.logWarn)("publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"), s("publisherDomain", e)
                            }
                        },
                        priceGranularity: {
                            set(e) {
                                c(e) && ("string" == typeof e ? s("priceGranularity", d(e) ? e : f.MEDIUM) : (0, o.isPlainObject)(e) && (s("customPriceBucket", e), s("priceGranularity", f.CUSTOM), (0, o.logMessage)("Using custom price granularity")))
                            }
                        },
                        customPriceBucket: {},
                        mediaTypePriceGranularity: {
                            set(e) {
                                null != e && s("mediaTypePriceGranularity", Object.keys(e).reduce(((t, r) => (c(e[r]) ? "string" == typeof e ? t[r] = d(e[r]) ? e[r] : n("priceGranularity") : (0, o.isPlainObject)(e) && (t[r] = e[r], (0, o.logMessage)(`Using custom price granularity for ${r}`)) : (0, o.logWarn)(`Invalid price granularity for media type: ${r}`), t)), {}))
                            }
                        },
                        bidderSequence: {
                            set(e) {
                                u[e] ? s("bidderSequence", e) : (0, o.logWarn)(`Invalid order: ${e}. Bidder Sequence was not set.`)
                            }
                        },
                        auctionOptions: {
                            set(e) {
                                (function(e) {
                                    if (!(0, o.isPlainObject)(e)) return (0, o.logWarn)("Auction Options must be an object"), !1;
                                    for (let t of Object.keys(e)) {
                                        if ("secondaryBidders" !== t && "suppressStaleRender" !== t && "suppressExpiredRender" !== t) return (0, o.logWarn)(`Auction Options given an incorrect param: ${t}`), !1;
                                        if ("secondaryBidders" === t) {
                                            if (!(0, o.isArray)(e[t])) return (0, o.logWarn)(`Auction Options ${t} must be of type Array`), !1;
                                            if (!e[t].every(o.isStr)) return (0, o.logWarn)(`Auction Options ${t} must be only string`), !1
                                        } else if (("suppressStaleRender" === t || "suppressExpiredRender" === t) && !(0, o.isBoolean)(e[t])) return (0, o.logWarn)(`Auction Options ${t} must be of type boolean`), !1
                                    }
                                    return !0
                                })(e) && s("auctionOptions", e)
                            }
                        }
                    };
                    return Object.defineProperties(e, Object.fromEntries(Object.entries(a).map((e => {
                        let [r, i] = e;
                        return [r, Object.assign({
                            get: n.bind(null, r),
                            set: s.bind(null, r),
                            enumerable: t.hasOwnProperty(r),
                            configurable: !t.hasOwnProperty(r)
                        }, i)]
                    })))), e;

                    function d(e) {
                        return (0, i.I6)(Object.keys(f), (t => e === f[t]))
                    }

                    function c(e) {
                        if (!e) return (0, o.logError)("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                        if ("string" == typeof e) d(e) || (0, o.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                        else if ((0, o.isPlainObject)(e) && !(0, r.q)(e)) return (0, o.logError)("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                        return !0
                    }
                }
                const m = function() {
                    let e, t, n, r = [],
                        a = null;

                    function l() {
                        e = {};
                        let r = p({
                            debug: d,
                            bidderTimeout: 3e3,
                            enableSendAllBids: true,
                            useBidCache: false,
                            deviceAccess: true,
                            disableAjaxTimeout: false,
                            maxNestedIframes: 10,
                            maxBid: 5e3,
                            userSync: {
                                topics: c
                            }
                        });
                        t && v(Object.keys(t).reduce(((e, n) => (t[n] !== r[n] && (e[n] = r[n] || {}), e)), {})), t = r, n = {}
                    }

                    function u() {
                        if (a && n && (0, o.isPlainObject)(n[a])) {
                            let e = n[a];
                            const r = new Set(Object.keys(t).concat(Object.keys(e)));
                            return (0, i.A6)(r).reduce(((n, r) => (void 0 === e[r] ? n[r] = t[r] : void 0 === t[r] ? n[r] = e[r] : (0, o.isPlainObject)(e[r]) ? n[r] = (0, o.mergeDeep)({}, t[r], e[r]) : n[r] = e[r], n)), {})
                        }
                        return Object.assign({}, t)
                    }
                    const [g, f] = [u, function() {
                        const e = u();
                        return Object.defineProperty(e, "ortb2", {
                            get: function() {
                                throw new Error("invalid access to 'orbt2' config - use request parameters instead")
                            }
                        }), e
                    }].map((e => function() {
                        if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                            const t = arguments.length <= 0 ? void 0 : arguments[0];
                            return t ? (0, s.A)(e(), t) : u()
                        }
                        return y(...arguments)
                    })), [m, h] = [f, g].map((e => function() {
                        let t = e(...arguments);
                        return t && "object" == typeof t && (t = (0, o.deepClone)(t)), t
                    }));

                    function b(n) {
                        if (!(0, o.isPlainObject)(n)) return void(0, o.logError)("setConfig options must be an object");
                        let r = Object.keys(n),
                            i = {};
                        r.forEach((r => {
                            let s = n[r];
                            (0, o.isPlainObject)(e[r]) && (0, o.isPlainObject)(s) && (s = Object.assign({}, e[r], s));
                            try {
                                i[r] = t[r] = s
                            } catch (e) {
                                (0, o.logWarn)(`Cannot set config for property ${r} : `, e)
                            }
                        })), v(i)
                    }

                    function y(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = t;
                        if ("string" != typeof e && (i = e, e = "*", n = t || {}), "function" != typeof i) return void(0, o.logError)("listener must be a function");
                        const s = {
                            topic: e,
                            callback: i
                        };
                        return r.push(s), n.init && i("*" === e ? f() : {
                                [e]: f(e)
                            }),
                            function() {
                                r.splice(r.indexOf(s), 1)
                            }
                    }

                    function v(e) {
                        const t = Object.keys(e);
                        r.filter((e => (0, i.mK)(t, e.topic))).forEach((t => {
                            t.callback({
                                [t.topic]: e[t.topic]
                            })
                        })), r.filter((e => "*" === e.topic)).forEach((t => t.callback(e)))
                    }

                    function E(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        try {
                            ! function(e) {
                                if (!(0, o.isPlainObject)(e)) throw "setBidderConfig bidder options must be an object";
                                if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                                if (!(0, o.isPlainObject)(e.config)) throw "setBidderConfig bidder options must contain a config object"
                            }(e), e.bidders.forEach((r => {
                                n[r] || (n[r] = p({}, !1)), Object.keys(e.config).forEach((i => {
                                    let s = e.config[i];
                                    const a = n[r][i];
                                    if ((0, o.isPlainObject)(s) && (null == a || (0, o.isPlainObject)(a))) {
                                        const e = t ? o.mergeDeep : Object.assign;
                                        n[r][i] = e({}, a || {}, s)
                                    } else n[r][i] = s
                                }))
                            }))
                        } catch (e) {
                            (0, o.logError)(e)
                        }
                    }

                    function A(e, t) {
                        a = e;
                        try {
                            return t()
                        } finally {
                            I()
                        }
                    }

                    function I() {
                        a = null
                    }
                    return l(), {
                        getCurrentBidder: function() {
                            return a
                        },
                        resetBidder: I,
                        getConfig: f,
                        getAnyConfig: g,
                        readConfig: m,
                        readAnyConfig: h,
                        setConfig: b,
                        mergeConfig: function(e) {
                            if (!(0, o.isPlainObject)(e)) return void(0, o.logError)("mergeConfig input must be an object");
                            const t = (0, o.mergeDeep)(u(), e);
                            return b({ ...t
                            }), t
                        },
                        setDefaults: function(n) {
                            (0, o.isPlainObject)(e) ? (Object.assign(e, n), Object.assign(t, n)) : (0, o.logError)("defaults must be an object")
                        },
                        resetConfig: l,
                        runWithBidder: A,
                        callbackWithBidder: function(e) {
                            return function(t) {
                                return function() {
                                    if ("function" == typeof t) {
                                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                        return A(e, t.bind(this, ...r))
                                    }(0, o.logWarn)("config.callbackWithBidder callback is not a function")
                                }
                            }
                        },
                        setBidderConfig: E,
                        getBidderConfig: function() {
                            return n
                        },
                        mergeBidderConfig: function(e) {
                            return E(e, !0)
                        }
                    }
                }()
            },
            16916: (e, t, n) => {
                n.d(t, {
                    B1: () => s,
                    SL: () => p,
                    ad: () => l,
                    et: () => u,
                    mW: () => d,
                    o2: () => g,
                    t6: () => c
                });
                var r = n(91069),
                    i = n(25555),
                    o = n(43272);
                const s = Object.freeze({});
                class a {#
                    t;#
                    n;#
                    r;#
                    i;#
                    o = !0;#
                    s;
                    generatedTime;
                    hashFields;
                    constructor() {
                        this.reset()
                    }#
                    a(e) {
                        this.#i = !0, this.#n = e, this.#r.resolve(e)
                    }
                    reset() {
                        this.#r = (0, i.v)(), this.#t = !1, this.#n = null, this.#i = !1, this.generatedTime = null
                    }
                    enable() {
                        this.#t = !0
                    }
                    get enabled() {
                        return this.#t
                    }
                    get ready() {
                        return this.#i
                    }
                    get promise() {
                        return this.#i ? i.k.resolve(this.#n) : (this.#t || this.#a(null), this.#r.promise)
                    }
                    setConsentData(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.timestamp)();
                        this.generatedTime = t, this.#o = !0, this.#a(e)
                    }
                    getConsentData() {
                        return this.#n
                    }
                    get hash() {
                        return this.#o && (this.#s = (0, r.cyrb53Hash)(JSON.stringify(this.#n && this.hashFields ? this.hashFields.map((e => this.#n[e])) : this.#n)), this.#o = !1), this.#s
                    }
                }
                const d = new class extends a {
                        hashFields = ["gdprApplies", "consentString"];
                        getConsentMeta() {
                            const e = this.getConsentData();
                            if (e && e.vendorData && this.generatedTime) return {
                                gdprApplies: e.gdprApplies,
                                consentStringSize: (0, r.isStr)(e.vendorData.tcString) ? e.vendorData.tcString.length : 0,
                                generatedAt: this.generatedTime,
                                apiVersion: e.apiVersion
                            }
                        }
                    },
                    c = new class extends a {
                        getConsentMeta() {
                            if (this.getConsentData() && this.generatedTime) return {
                                generatedAt: this.generatedTime
                            }
                        }
                    },
                    l = new class extends a {
                        hashFields = ["applicableSections", "gppString"];
                        getConsentMeta() {
                            if (this.getConsentData() && this.generatedTime) return {
                                generatedAt: this.generatedTime
                            }
                        }
                    },
                    u = (() => {
                        function e() {
                            return !!o.$W.getConfig("coppa")
                        }
                        return {
                            getCoppa: e,
                            getConsentData: e,
                            getConsentMeta: e,
                            reset() {},
                            get promise() {
                                return i.k.resolve(e())
                            },
                            get hash() {
                                return e() ? "1" : "0"
                            }
                        }
                    })(),
                    g = function() {
                        const e = {},
                            t = {},
                            n = {};
                        return {
                            register(r, i, o) {
                                o && ((e[i] = e[i] || {})[r] = o, t.hasOwnProperty(i) ? t[i] !== o && (t[i] = n) : t[i] = o)
                            },
                            get(r) {
                                const i = {
                                    modules: e[r] || {}
                                };
                                return t.hasOwnProperty(r) && t[r] !== n && (i.gvlid = t[r]), i
                            }
                        }
                    }(),
                    f = {
                        gdpr: d,
                        usp: c,
                        gpp: l,
                        coppa: u
                    };
                const p = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                    return e = Object.entries(e), Object.assign({
                        get promise() {
                            return i.k.all(e.map((e => {
                                let [t, n] = e;
                                return n.promise.then((e => [t, e]))
                            }))).then((e => Object.fromEntries(e)))
                        },
                        get hash() {
                            return (0, r.cyrb53Hash)(e.map((e => {
                                let [t, n] = e;
                                return n.hash
                            })).join(":"))
                        }
                    }, Object.fromEntries(["getConsentData", "getConsentMeta", "reset"].map((t => {
                        return [t, (n = t, function() {
                            return Object.fromEntries(e.map((e => {
                                let [t, r] = e;
                                return [t, r[n]()]
                            })))
                        })];
                        var n
                    }))))
                }()
            },
            78969: (e, t, n) => {
                n.d(t, {
                    IY: () => A,
                    M: () => i,
                    RW: () => f,
                    Tf: () => m,
                    UE: () => c,
                    XQ: () => o,
                    Zh: () => u,
                    _B: () => v,
                    as: () => a,
                    cA: () => d,
                    h0: () => h,
                    iD: () => r,
                    jO: () => b,
                    nl: () => E,
                    oA: () => y,
                    qY: () => s,
                    tl: () => p,
                    x5: () => g,
                    xS: () => l
                });
                const r = {
                        PL_CODE: "code",
                        PL_SIZE: "sizes",
                        PL_BIDS: "bids",
                        BD_BIDDER: "bidder",
                        BD_ID: "paramsd",
                        BD_PL_ID: "placementId",
                        ADSERVER_TARGETING: "adserverTargeting",
                        BD_SETTING_STANDARD: "standard"
                    },
                    i = "pbjs_debug",
                    o = {
                        GOOD: 1
                    },
                    s = {
                        AUCTION_INIT: "auctionInit",
                        AUCTION_TIMEOUT: "auctionTimeout",
                        AUCTION_END: "auctionEnd",
                        BID_ADJUSTMENT: "bidAdjustment",
                        BID_TIMEOUT: "bidTimeout",
                        BID_REQUESTED: "bidRequested",
                        BID_RESPONSE: "bidResponse",
                        BID_REJECTED: "bidRejected",
                        NO_BID: "noBid",
                        SEAT_NON_BID: "seatNonBid",
                        BID_WON: "bidWon",
                        BIDDER_DONE: "bidderDone",
                        BIDDER_ERROR: "bidderError",
                        SET_TARGETING: "setTargeting",
                        BEFORE_REQUEST_BIDS: "beforeRequestBids",
                        BEFORE_BIDDER_HTTP: "beforeBidderHttp",
                        REQUEST_BIDS: "requestBids",
                        ADD_AD_UNITS: "addAdUnits",
                        AD_RENDER_FAILED: "adRenderFailed",
                        AD_RENDER_SUCCEEDED: "adRenderSucceeded",
                        TCF2_ENFORCEMENT: "tcf2Enforcement",
                        AUCTION_DEBUG: "auctionDebug",
                        BID_VIEWABLE: "bidViewable",
                        STALE_RENDER: "staleRender",
                        EXPIRED_RENDER: "expiredRender",
                        BILLABLE_EVENT: "billableEvent",
                        BID_ACCEPTED: "bidAccepted",
                        RUN_PAAPI_AUCTION: "paapiRunAuction",
                        PBS_ANALYTICS: "pbsAnalytics",
                        PAAPI_BID: "paapiBid",
                        PAAPI_NO_BID: "paapiNoBid",
                        PAAPI_ERROR: "paapiError"
                    },
                    a = {
                        PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
                        NO_AD: "noAd",
                        EXCEPTION: "exception",
                        CANNOT_FIND_AD: "cannotFindAd",
                        MISSING_DOC_OR_ADID: "missingDocOrAdid"
                    },
                    d = {
                        bidWon: "adUnitCode"
                    },
                    c = {
                        LOW: "low",
                        MEDIUM: "medium",
                        HIGH: "high",
                        AUTO: "auto",
                        DENSE: "dense",
                        CUSTOM: "custom"
                    },
                    l = {
                        BIDDER: "hb_bidder",
                        AD_ID: "hb_adid",
                        PRICE_BUCKET: "hb_pb",
                        SIZE: "hb_size",
                        DEAL: "hb_deal",
                        SOURCE: "hb_source",
                        FORMAT: "hb_format",
                        UUID: "hb_uuid",
                        CACHE_ID: "hb_cache_id",
                        CACHE_HOST: "hb_cache_host",
                        ADOMAIN: "hb_adomain",
                        ACAT: "hb_acat",
                        CRID: "hb_crid",
                        DSP: "hb_dsp"
                    },
                    u = {
                        BIDDER: "hb_bidder",
                        AD_ID: "hb_adid",
                        PRICE_BUCKET: "hb_pb",
                        SIZE: "hb_size",
                        DEAL: "hb_deal",
                        FORMAT: "hb_format",
                        UUID: "hb_uuid",
                        CACHE_HOST: "hb_cache_host"
                    },
                    g = {
                        title: "hb_native_title",
                        body: "hb_native_body",
                        body2: "hb_native_body2",
                        privacyLink: "hb_native_privacy",
                        privacyIcon: "hb_native_privicon",
                        sponsoredBy: "hb_native_brand",
                        image: "hb_native_image",
                        icon: "hb_native_icon",
                        clickUrl: "hb_native_linkurl",
                        displayUrl: "hb_native_displayurl",
                        cta: "hb_native_cta",
                        rating: "hb_native_rating",
                        address: "hb_native_address",
                        downloads: "hb_native_downloads",
                        likes: "hb_native_likes",
                        phone: "hb_native_phone",
                        price: "hb_native_price",
                        salePrice: "hb_native_saleprice",
                        rendererUrl: "hb_renderer_url",
                        adTemplate: "hb_adTemplate"
                    },
                    f = {
                        SRC: "s2s",
                        DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                        SYNCED_BIDDERS_KEY: "pbjsSyncs"
                    },
                    p = {
                        BID_TARGETING_SET: "targetingSet",
                        RENDERED: "rendered",
                        BID_REJECTED: "bidRejected"
                    },
                    m = {
                        INVALID: "Bid has missing or invalid properties",
                        INVALID_REQUEST_ID: "Invalid request ID",
                        BIDDER_DISALLOWED: "Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes",
                        FLOOR_NOT_MET: "Bid does not meet price floor",
                        CANNOT_CONVERT_CURRENCY: "Unable to convert currency",
                        DSA_REQUIRED: "Bid does not provide required DSA transparency info",
                        DSA_MISMATCH: "Bid indicates inappropriate DSA rendering method",
                        PRICE_TOO_HIGH: "Bid price exceeds maximum value"
                    },
                    h = {
                        body: "desc",
                        body2: "desc2",
                        sponsoredBy: "sponsored",
                        cta: "ctatext",
                        rating: "rating",
                        address: "address",
                        downloads: "downloads",
                        likes: "likes",
                        phone: "phone",
                        price: "price",
                        salePrice: "saleprice",
                        displayUrl: "displayurl"
                    },
                    b = {
                        sponsored: 1,
                        desc: 2,
                        rating: 3,
                        likes: 4,
                        downloads: 5,
                        price: 6,
                        saleprice: 7,
                        phone: 8,
                        address: 9,
                        desc2: 10,
                        displayurl: 11,
                        ctatext: 12
                    },
                    y = {
                        ICON: 1,
                        MAIN: 3
                    },
                    v = ["privacyIcon", "clickUrl", "sendTargetingKeys", "adTemplate", "rendererUrl", "type"],
                    E = {
                        REQUEST: "Prebid Request",
                        RESPONSE: "Prebid Response",
                        NATIVE: "Prebid Native",
                        EVENT: "Prebid Event"
                    },
                    A = "__pb_locator__"
            },
            86833: (e, t, n) => {
                n.d(t, {
                    j: () => g,
                    q: () => p
                });
                var r = n(15901),
                    i = n(91069),
                    o = n(43272);
                const s = 2,
                    a = {
                        buckets: [{
                            max: 5,
                            increment: .5
                        }]
                    },
                    d = {
                        buckets: [{
                            max: 20,
                            increment: .1
                        }]
                    },
                    c = {
                        buckets: [{
                            max: 20,
                            increment: .01
                        }]
                    },
                    l = {
                        buckets: [{
                            max: 3,
                            increment: .01
                        }, {
                            max: 8,
                            increment: .05
                        }, {
                            max: 20,
                            increment: .5
                        }]
                    },
                    u = {
                        buckets: [{
                            max: 5,
                            increment: .05
                        }, {
                            max: 10,
                            increment: .1
                        }, {
                            max: 20,
                            increment: .5
                        }]
                    };

                function g(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        r = parseFloat(e);
                    return isNaN(r) && (r = ""), {
                        low: "" === r ? "" : f(e, a, n),
                        med: "" === r ? "" : f(e, d, n),
                        high: "" === r ? "" : f(e, c, n),
                        auto: "" === r ? "" : f(e, u, n),
                        dense: "" === r ? "" : f(e, l, n),
                        custom: "" === r ? "" : f(e, t, n)
                    }
                }

                function f(e, t, n) {
                    let a = "";
                    if (!p(t)) return a;
                    const d = t.buckets.reduce(((e, t) => e.max > t.max ? e : t), {
                        max: 0
                    });
                    let c = 0,
                        l = (0, r.I6)(t.buckets, (t => {
                            if (e > d.max * n) {
                                let e = t.precision;
                                void 0 === e && (e = s), a = (t.max * n).toFixed(e)
                            } else {
                                if (e <= t.max * n && e >= c * n) return t.min = c, t;
                                c = t.max
                            }
                        }));
                    return l && (a = function(e, t, n) {
                        const r = void 0 !== t.precision ? t.precision : s,
                            a = t.increment * n,
                            d = t.min * n;
                        let c = Math.floor,
                            l = o.$W.getConfig("cpmRoundingFunction");
                        "function" == typeof l && (c = l);
                        let u, g, f = Math.pow(10, r + 2),
                            p = (e * f - d * f) / (a * f);
                        try {
                            u = c(p) * a + d
                        } catch (e) {
                            g = !0
                        }(g || "number" != typeof u) && ((0, i.logWarn)("Invalid rounding function passed in config"), u = Math.floor(p) * a + d);
                        return u = Number(u.toFixed(10)), u.toFixed(r)
                    }(e, l, n)), a
                }

                function p(e) {
                    if ((0, i.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
                    let t = !0;
                    return e.buckets.forEach((e => {
                        e.max && e.increment || (t = !1)
                    })), t
                }
            },
            46031: (e, t, n) => {
                n.d(t, {
                    H: () => a,
                    k: () => s
                });
                var r = n(25555),
                    i = n(91069),
                    o = n(34595);
                const s = (0, n(16833).A_)("sync", (function(e) {
                        return o.G
                    })),
                    a = function() {
                        const e = {};
                        return function(t) {
                            const n = s(t);
                            return e.hasOwnProperty(n) || (e[n] = new r.k((e => {
                                const t = (0, i.createInvisibleIframe)();
                                t.srcdoc = `<script>${n}<\/script>`, t.onload = () => e(t.contentWindow.render), document.body.appendChild(t)
                            }))), e[n]
                        }
                    }()
            },
            49164: (e, t, n) => {
                n.d(t, {
                    L6: () => h,
                    ey: () => u
                });
                var r = n(43272),
                    i = n(16833),
                    o = n(7873),
                    s = n(91069),
                    a = n(93597),
                    d = n(41580),
                    c = n(25555),
                    l = n(45569);
                const u = "__pbjs_debugging__";

                function g() {
                    return (0, o.m)().installedModules.includes("debugging")
                }

                function f(e) {
                    return new c.k((t => {
                        (0, d.R)(e, l.tp, "debugging", t)
                    }))
                }

                function p() {
                    let {
                        alreadyInstalled: e = g,
                        script: t = f
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null;
                    return function() {
                        return null == n && (n = new c.k(((n, d) => {
                            setTimeout((() => {
                                if (e()) n();
                                else {
                                    const e = "https://cdn.jsdelivr.net/npm/prebid.js@9.24.0/dist/debugging-standalone.js";
                                    (0, s.logMessage)(`Debugging module not installed, loading it from "${e}"...`), (0, o.m)()._installDebugging = !0, t(e).then((() => {
                                        (0, o.m)()._installDebugging({
                                            DEBUG_KEY: u,
                                            hook: i.A_,
                                            config: r.$W,
                                            createBid: a.O,
                                            logger: (0, s.prefixLog)("DEBUG:")
                                        })
                                    })).then(n, d)
                                }
                            }))
                        }))), n
                    }
                }
                const m = function() {
                    let {
                        load: e = p(),
                        hook: t = (0, i.Yn)("requestBids")
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null, r = !1;

                    function o(e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                        return (n || c.k.resolve()).then((() => e.apply(this, r)))
                    }

                    function s() {
                        t.getHooks({
                            hook: o
                        }).remove(), r = !1
                    }
                    return {
                        enable: function() {
                            r || (n = e(), t.before(o, 99), r = !0)
                        },
                        disable: s,
                        reset: function() {
                            n = null, s()
                        }
                    }
                }();
                m.reset;

                function h() {
                    let e = null;
                    try {
                        e = window.sessionStorage
                    } catch (e) {}
                    if (null !== e) {
                        let t = m,
                            n = null;
                        try {
                            n = e.getItem(u)
                        } catch (e) {}
                        null !== n && t.enable()
                    }
                }
                r.$W.getConfig("debugging", (function(e) {
                    let {
                        debugging: t
                    } = e;
                    t ? .enabled ? m.enable() : m.disable()
                }))
            },
            75023: (e, t, n) => {
                n.r(t), n.d(t, {
                    addEvents: () => E,
                    clearEvents: () => I,
                    emit: () => v,
                    get: () => b,
                    getEvents: () => y,
                    has: () => A,
                    off: () => h,
                    on: () => m
                });
                var r = n(91069),
                    i = n(78969),
                    o = n(76853),
                    s = n(43272);
                const a = "eventHistoryTTL";
                let d = null;
                const c = (0, o.H)({
                    monotonic: !0,
                    ttl: () => d
                });
                s.$W.getConfig(a, (e => {
                    const t = d;
                    e = e ? .[a], d = "number" == typeof e ? 1e3 * e : null, t !== d && c.refresh()
                }));
                let l = Array.prototype.slice,
                    u = Array.prototype.push,
                    g = Object.values(i.qY);
                const f = i.cA,
                    p = function() {
                        let e = {},
                            t = {};

                        function n(e) {
                            return g.includes(e)
                        }
                        return t.has = n, t.on = function(t, i, o) {
                            if (n(t)) {
                                let n = e[t] || {
                                    que: []
                                };
                                o ? (n[o] = n[o] || {
                                    que: []
                                }, n[o].que.push(i)) : n.que.push(i), e[t] = n
                            } else r.logError("Wrong event name : " + t + " Valid event names :" + g)
                        }, t.emit = function(t) {
                            ! function(t, n) {
                                r.logMessage("Emitting event for: " + t);
                                let i = n[0] || {},
                                    o = i[f[t]],
                                    s = e[t] || {
                                        que: []
                                    };
                                var a = Object.keys(s);
                                let d = [];
                                c.add({
                                    eventType: t,
                                    args: i,
                                    id: o,
                                    elapsedTime: r.getPerformanceNow()
                                }), o && a.includes(o) && u.apply(d, s[o].que), u.apply(d, s.que), (d || []).forEach((function(e) {
                                    if (e) try {
                                        e.apply(null, n)
                                    } catch (e) {
                                        r.logError("Error executing handler:", "events.js", e, t)
                                    }
                                }))
                            }(t, l.call(arguments, 1))
                        }, t.off = function(t, n, i) {
                            let o = e[t];
                            r.isEmpty(o) || r.isEmpty(o.que) && r.isEmpty(o[i]) || i && (r.isEmpty(o[i]) || r.isEmpty(o[i].que)) || (i ? (o[i].que || []).forEach((function(e) {
                                let t = o[i].que;
                                e === n && t.splice(t.indexOf(e), 1)
                            })) : (o.que || []).forEach((function(e) {
                                let t = o.que;
                                e === n && t.splice(t.indexOf(e), 1)
                            })), e[t] = o)
                        }, t.get = function() {
                            return e
                        }, t.addEvents = function(e) {
                            g = g.concat(e)
                        }, t.getEvents = function() {
                            return c.toArray().map((e => Object.assign({}, e)))
                        }, t
                    }();
                r._setEventEmitter(p.emit.bind(p));
                const {
                    on: m,
                    off: h,
                    get: b,
                    getEvents: y,
                    emit: v,
                    addEvents: E,
                    has: A
                } = p;

                function I() {
                    c.clear()
                }
            },
            70068: (e, t, n) => {
                n.d(t, {
                    w: () => y
                });
                var r = n(16833),
                    i = n(27934),
                    o = n(5973),
                    s = n(91069),
                    a = n(63172),
                    d = n(43272),
                    c = n(25250),
                    l = n(25555),
                    u = n(73858),
                    g = n(95139),
                    f = n(83441),
                    p = n(76811),
                    m = n(45569);
                const h = {
                        getRefererInfo: i.EN,
                        findRootDomain: o.S,
                        getWindowTop: s.getWindowTop,
                        getWindowSelf: s.getWindowSelf,
                        getHighEntropySUA: c.FD,
                        getLowEntropySUA: c.zO
                    },
                    b = (0, u.i8)("FPD"),
                    y = (0, r.A_)("sync", (e => {
                        const t = [e, E().catch((() => null)), l.k.resolve("cookieDeprecationLabel" in navigator && (0, g.io)(p.Ue, (0, f.s)(m.tp, "cdep")) && navigator.cookieDeprecationLabel.getValue()).catch((() => null))];
                        return l.k.all(t).then((e => {
                            let [t, n, r] = e;
                            const i = h.getRefererInfo();
                            if (Object.entries(I).forEach((e => {
                                    let [n, r] = e;
                                    const o = r(t, i);
                                    o && Object.keys(o).length > 0 && (t[n] = (0, s.mergeDeep)({}, o, t[n]))
                                })), n && (0, a.J)(t, "device.sua", Object.assign({}, n, t.device.sua)), r) {
                                const e = {
                                    cdep: r
                                };
                                (0, a.J)(t, "device.ext", Object.assign({}, e, t.device.ext))
                            }
                            t = b(t);
                            for (let e of u.Dy)
                                if ((0, u.O$)(t, e)) {
                                    t[e] = (0, s.mergeDeep)({}, T(t, i), t[e]);
                                    break
                                }
                            return t
                        }))
                    }));

                function v(e) {
                    try {
                        return e(h.getWindowTop())
                    } catch (t) {
                        return e(h.getWindowSelf())
                    }
                }

                function E() {
                    const e = d.$W.getConfig("firstPartyData.uaHints");
                    return Array.isArray(e) && 0 !== e.length ? h.getHighEntropySUA(e) : l.k.resolve(h.getLowEntropySUA())
                }

                function A(e) {
                    return (0, s.getDefinedParams)(e, Object.keys(e))
                }
                const I = {
                    site(e, t) {
                        if (!u.Dy.filter((e => "site" !== e)).some(u.O$.bind(null, e))) return A({
                            page: t.page,
                            ref: t.ref
                        })
                    },
                    device: () => v((e => {
                        const t = e.screen.width,
                            n = e.screen.height,
                            r = e.innerWidth || e.document.documentElement.clientWidth || e.document.body.clientWidth,
                            i = e.innerHeight || e.document.documentElement.clientHeight || e.document.body.clientHeight,
                            o = {
                                w: t,
                                h: n,
                                dnt: (0, s.getDNT)() ? 1 : 0,
                                ua: e.navigator.userAgent,
                                language: e.navigator.language.split("-").shift(),
                                ext: {
                                    vpw: r,
                                    vph: i
                                }
                            };
                        return e.navigator ? .webdriver && (0, a.J)(o, "ext.webdriver", !0), o
                    })),
                    regs() {
                        const e = {};
                        v((e => e.navigator.globalPrivacyControl)) && (0, a.J)(e, "ext.gpc", "1");
                        const t = d.$W.getConfig("coppa");
                        return "boolean" == typeof t && (e.coppa = t ? 1 : 0), e
                    }
                };

                function T(e, t) {
                    const n = (0, i.gR)(t.page, {
                            noLeadingWww: !0
                        }),
                        r = v((e => e.document.querySelector("meta[name='keywords']"))) ? .content ? .replace ? .(/\s/g, "");
                    return A({
                        domain: n,
                        keywords: r,
                        publisher: A({
                            domain: h.findRootDomain(n)
                        })
                    })
                }
            },
            73858: (e, t, n) => {
                n.d(t, {
                    Dy: () => i,
                    O$: () => s,
                    i8: () => o
                });
                var r = n(91069);
                const i = ["dooh", "app", "site"];

                function o(e) {
                    return function(t) {
                        return i.reduce(((n, i) => (s(t, i) && (null != n ? ((0, r.logWarn)(`${e} specifies both '${n}' and '${i}'; dropping the latter.`), delete t[i]) : n = i), n)), null), t
                    }
                }

                function s(e, t) {
                    return null != e[t] && Object.keys(e[t]).length > 0
                }
            },
            5973: (e, t, n) => {
                n.d(t, {
                    S: () => o
                });
                var r = n(91069);
                const i = (0, n(12938).CK)("fpdEnrichment"),
                    o = (0, r.memoize)((function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.host;
                        if (!i.cookiesAreEnabled()) return e;
                        const t = e.split(".");
                        if (2 === t.length) return e;
                        let n, o, s = -2;
                        const a = `_rdc${Date.now()}`,
                            d = "writeable";
                        do {
                            n = t.slice(s).join(".");
                            let e = new Date((0, r.timestamp)() + 1e4).toUTCString();
                            i.setCookie(a, d, e, "Lax", n, void 0);
                            i.getCookie(a, void 0) === d ? (o = !1, i.setCookie(a, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, n, void 0)) : (s += -1, o = Math.abs(s) <= t.length)
                        } while (o);
                        return n
                    }))
            },
            25250: (e, t, n) => {
                n.d(t, {
                    CP: () => l,
                    FD: () => c,
                    zO: () => d
                });
                var r = n(91069),
                    i = n(25555);
                const o = 2,
                    s = ["architecture", "bitness", "model", "platformVersion", "fullVersionList"],
                    a = ["brands", "mobile", "platform"],
                    d = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator ? .userAgentData;
                        const t = e && a.some((t => void 0 !== e[t])) ? Object.freeze(u(1, e)) : null;
                        return function() {
                            return t
                        }
                    }(),
                    c = l();

                function l() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator ? .userAgentData;
                    const t = {},
                        n = new WeakMap;
                    return function() {
                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                        if (!n.has(a)) {
                            const e = Array.from(a);
                            e.sort(), n.set(a, e.join("|"))
                        }
                        const d = n.get(a);
                        if (!t.hasOwnProperty(d)) try {
                            t[d] = e.getHighEntropyValues(a).then((e => (0, r.isEmpty)(e) ? null : Object.freeze(u(o, e)))).catch((() => null))
                        } catch (e) {
                            t[d] = i.k.resolve(null)
                        }
                        return t[d]
                    }
                }

                function u(e, t) {
                    function n(e, t) {
                        const n = {
                            brand: e
                        };
                        return (0, r.isStr)(t) && !(0, r.isEmptyStr)(t) && (n.version = t.split(".")), n
                    }
                    const i = {
                        source: e
                    };
                    return t.platform && (i.platform = n(t.platform, t.platformVersion)), (t.fullVersionList || t.brands) && (i.browsers = (t.fullVersionList || t.brands).map((e => {
                        let {
                            brand: t,
                            version: r
                        } = e;
                        return n(t, r)
                    }))), void 0 !== t.mobile && (i.mobile = t.mobile ? 1 : 0), ["model", "bitness", "architecture"].forEach((e => {
                        const n = t[e];
                        (0, r.isStr)(n) && (i[e] = n)
                    })), i
                }
            },
            16833: (e, t, n) => {
                n.d(t, {
                    A_: () => s,
                    Gc: () => d,
                    Y6: () => p,
                    Yn: () => c,
                    bz: () => f,
                    pT: () => l,
                    xG: () => g
                });
                var r = n(68128),
                    i = n.n(r),
                    o = n(25555);
                let s = i()({
                    ready: i().SYNC | i().ASYNC | i().QUEUE
                });
                const a = (0, o.v)();
                s.ready = (() => {
                    const e = s.ready;
                    return function() {
                        try {
                            return e.apply(s, arguments)
                        } finally {
                            a.resolve()
                        }
                    }
                })();
                const d = a.promise,
                    c = s.get;

                function l(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15;
                    0 === e.getHooks({
                        hook: t
                    }).length && e.before(t, n)
                }
                const u = {};

                function g(e, t) {
                    let {
                        postInstallAllowed: n = !1
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    s("async", (function(r) {
                        r.forEach((e => t(...e))), n && (u[e] = t)
                    }), e)([])
                }

                function f(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    const i = u[e];
                    if (i) return i(...n);
                    c(e).before(((e, t) => {
                        t.push(n), e(t)
                    }))
                }

                function p(e, t) {
                    return Object.defineProperties(t, Object.fromEntries(["before", "after", "getHooks", "removeAll"].map((t => [t, {
                        get: () => e[t]
                    }])))), t
                }
            },
            71371: (e, t, n) => {
                n.d(t, {
                    D4: () => o,
                    G_: () => i,
                    LM: () => s,
                    s6: () => r
                });
                const r = "native",
                    i = "video",
                    o = "banner",
                    s = "adpod"
            },
            12449: (e, t, n) => {
                n.d(t, {
                    Bm: () => A,
                    Ex: () => q,
                    Gg: () => S,
                    IX: () => R,
                    Nh: () => u,
                    Xj: () => $,
                    Zj: () => w,
                    gs: () => T,
                    l6: () => b,
                    mT: () => l,
                    nk: () => v,
                    rn: () => U,
                    vO: () => I,
                    yl: () => k
                });
                var r = n(91069),
                    i = n(15901),
                    o = n(67314),
                    s = n(78969),
                    a = n(71371),
                    d = n(29075),
                    c = n(46031);
                const l = [],
                    u = Object.keys(s.x5).map((e => s.x5[e])),
                    g = {
                        image: {
                            ortb: {
                                ver: "1.2",
                                assets: [{
                                    required: 1,
                                    id: 1,
                                    img: {
                                        type: 3,
                                        wmin: 100,
                                        hmin: 100
                                    }
                                }, {
                                    required: 1,
                                    id: 2,
                                    title: {
                                        len: 140
                                    }
                                }, {
                                    required: 1,
                                    id: 3,
                                    data: {
                                        type: 1
                                    }
                                }, {
                                    required: 0,
                                    id: 4,
                                    data: {
                                        type: 2
                                    }
                                }, {
                                    required: 0,
                                    id: 5,
                                    img: {
                                        type: 1,
                                        wmin: 20,
                                        hmin: 20
                                    }
                                }]
                            },
                            image: {
                                required: !0
                            },
                            title: {
                                required: !0
                            },
                            sponsoredBy: {
                                required: !0
                            },
                            clickUrl: {
                                required: !0
                            },
                            body: {
                                required: !1
                            },
                            icon: {
                                required: !1
                            }
                        }
                    },
                    f = W(s.h0),
                    p = W(s.jO),
                    m = {
                        img: 1,
                        js: 2,
                        1: "img",
                        2: "js"
                    },
                    h = {
                        impression: 1,
                        "viewable-mrc50": 2,
                        "viewable-mrc100": 3,
                        "viewable-video50": 4
                    };

                function b(e) {
                    return e.native && "object" == typeof e.native
                }

                function y(e) {
                    if (e && e.type && function(e) {
                            if (!e || !(0, i.mK)(Object.keys(g), e)) return (0, r.logError)(`${e} nativeParam is not supported`), !1;
                            return !0
                        }(e.type) && (e = g[e.type]), !e || !e.ortb || E(e.ortb)) return e
                }

                function v(e) {
                    e.forEach((e => {
                        const t = e.nativeParams || e ? .mediaTypes ? .native;
                        t && (e.nativeParams = y(t)), e.nativeParams && (e.nativeOrtbRequest = e.nativeParams.ortb || U(e.nativeParams))
                    }))
                }

                function E(e) {
                    const t = e.assets;
                    if (!Array.isArray(t) || 0 === t.length) return (0, r.logError)("assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ", t), !1;
                    const n = t.map((e => e.id));
                    return t.length !== new Set(n).size || n.some((e => e !== parseInt(e, 10))) ? ((0, r.logError)("each asset object must have 'id' property, it must be unique and it must be an integer"), !1) : e.hasOwnProperty("eventtrackers") && !Array.isArray(e.eventtrackers) ? ((0, r.logError)("ortb.eventtrackers is not an array. Eventtrackers: ", e.eventtrackers), !1) : t.every((e => function(e) {
                        if (!(0, r.isPlainObject)(e)) return (0, r.logError)("asset must be an object. Provided asset: ", e), !1;
                        if (e.img) {
                            if (!(0, r.isNumber)(e.img.w) && !(0, r.isNumber)(e.img.wmin)) return (0, r.logError)("for img asset there must be 'w' or 'wmin' property"), !1;
                            if (!(0, r.isNumber)(e.img.h) && !(0, r.isNumber)(e.img.hmin)) return (0, r.logError)("for img asset there must be 'h' or 'hmin' property"), !1
                        } else if (e.title) {
                            if (!(0, r.isNumber)(e.title.len)) return (0, r.logError)("for title asset there must be 'len' property defined"), !1
                        } else if (e.data) {
                            if (!(0, r.isNumber)(e.data.type)) return (0, r.logError)("for data asset 'type' property must be a number"), !1
                        } else if (e.video && !(Array.isArray(e.video.mimes) && Array.isArray(e.video.protocols) && (0, r.isNumber)(e.video.minduration) && (0, r.isNumber)(e.video.maxduration))) return (0, r.logError)("video asset is not properly configured"), !1;
                        return !0
                    }(e)))
                }

                function A(e) {
                    let {
                        index: t = o.n.index
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = t.getAdUnit(e);
                    if (!n) return !1;
                    let s = n.nativeOrtbRequest;
                    return function(e, t) {
                        if (!e ? .link ? .url) return (0, r.logError)("native response doesn't have 'link' property. Ortb response: ", e), !1;
                        let n = t.assets.filter((e => 1 === e.required)).map((e => e.id)),
                            o = e.assets.map((e => e.id));
                        const s = n.every((e => (0, i.mK)(o, e)));
                        s || (0, r.logError)(`didn't receive a bid with all required assets. Required ids: ${n}, but received ids in response: ${o}`);
                        return s
                    }(e.native ? .ortb || x(e.native, s), s)
                }

                function I(e, t) {
                    const n = t.native.ortb || N(t.native);
                    return "click" === e.action ? function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            {
                                fetchURL: n = r.triggerPixel
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (t) {
                            const r = (e.assets || []).filter((e => e.link)).reduce(((e, t) => (e[t.id] = t.link, e)), {}),
                                i = e.link ? .clicktrackers || [];
                            let o = r[t],
                                s = i;
                            o && (s = o.clicktrackers || []), s.forEach((e => n(e)))
                        } else(e.link ? .clicktrackers || []).forEach((e => n(e)))
                    }(n, e ? .assetId) : function(e) {
                        let {
                            runMarkup: t = (e => (0, r.insertHtmlIntoIframe)(e)),
                            fetchURL: n = r.triggerPixel
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        const i = (e.eventtrackers || []).filter((e => e.event === h.impression));
                        let {
                            img: o,
                            js: s
                        } = i.reduce(((e, t) => (m.hasOwnProperty(t.method) && e[m[t.method]].push(t.url), e)), {
                            img: [],
                            js: []
                        });
                        e.imptrackers && (o = o.concat(e.imptrackers));
                        o.forEach((e => n(e))), s = s.map((e => `<script async src="${e}"><\/script>`)), e.jstracker && (s = s.concat([e.jstracker]));
                        s.length && t(s.join("\n"))
                    }(n), e.action
                }

                function T(e, t) {
                    const n = t ? .nativeOrtbRequest,
                        r = e.native ? .ortb;
                    if (n && r) {
                        const t = q(r, n);
                        Object.assign(e.native, t)
                    }["rendererUrl", "adTemplate"].forEach((n => {
                        const r = t ? .nativeParams ? .[n];
                        r && (e.native[n] = D(r))
                    }))
                }

                function w(e) {
                    let {
                        index: t = o.n.index
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {};
                    const r = t.getAdUnit(e),
                        i = null == r ? .nativeParams ? .ortb && !1 !== r ? .nativeParams ? .sendTargetingKeys,
                        a = function(e) {
                            const t = {};
                            e ? .nativeParams ? .ext && Object.keys(e.nativeParams.ext).forEach((e => {
                                t[e] = `hb_native_${e}`
                            }));
                            return { ...s.x5,
                                ...t
                            }
                        }(r),
                        d = { ...e.native,
                            ...e.native.ext
                        };
                    return delete d.ext, Object.keys(d).forEach((t => {
                        const o = a[t];
                        let s = D(e.native[t]) || D(e ? .native ? .ext ? .[t]);
                        if ("adTemplate" === t || !o || !s) return;
                        let d = r ? .nativeParams ? .[t] ? .sendId;
                        if ("boolean" != typeof d && (d = r ? .nativeParams ? .ext ? .[t] ? .sendId), d) {
                            s = `${o}:${e.adId}`
                        }
                        let c = r ? .nativeParams ? .[t] ? .sendTargetingKeys;
                        "boolean" != typeof c && (c = r ? .nativeParams ? .ext ? .[t] ? .sendTargetingKeys);
                        ("boolean" == typeof c ? c : i) && (n[o] = s)
                    })), n
                }

                function C(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = [];
                    return Object.entries(e).filter((e => {
                        let [r, i] = e;
                        return i && (!1 === n && "ext" === r || null == t || t.includes(r))
                    })).forEach((e => {
                        let [i, o] = e;
                        !1 === n && "ext" === i ? r.push(...C(o, t, !0)) : (n || s.x5.hasOwnProperty(i)) && r.push({
                            key: i,
                            value: D(o)
                        })
                    })), r
                }

                function S(e, t, n) {
                    const i = { ...(0, r.getDefinedParams)(e.native, ["rendererUrl", "adTemplate"]),
                        assets: C(e.native, n),
                        nativeKeys: s.x5
                    };
                    return e.native.ortb ? i.ortb = e.native.ortb : t.mediaTypes ? .native ? .ortb && (i.ortb = x(e.native, t.nativeOrtbRequest)), i
                }

                function O(e, t, n) {
                    let {
                        index: r = o.n.index
                    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    const i = {
                        message: "assetResponse",
                        adId: e.adId
                    };
                    let s = (0, d.vd)(t).native;
                    return s ? (i.native = Object.assign({}, s), i.renderer = (0, c.k)(t), null != n && (s.assets = s.assets.filter((e => {
                        let {
                            key: t
                        } = e;
                        return n.includes(t)
                    })))) : s = S(t, r.getAdUnit(t), n), Object.assign(i, s)
                }
                const B = Object.fromEntries(Object.entries(s.x5).map((e => {
                    let [t, n] = e;
                    return [n, t]
                })));

                function R(e, t) {
                    const n = e.assets.map((e => B[e]));
                    return O(e, t, n)
                }

                function k(e, t) {
                    return O(e, t, null)
                }

                function D(e) {
                    return e ? .url || e
                }

                function U(e) {
                    if (!e && !(0, r.isPlainObject)(e)) return void(0, r.logError)("Native assets object is empty or not an object: ", e);
                    const t = {
                        ver: "1.2",
                        assets: []
                    };
                    for (let n in e) {
                        if (s._B.includes(n)) continue;
                        if (!s.x5.hasOwnProperty(n)) {
                            (0, r.logError)(`Unrecognized native asset code: ${n}. Asset will be ignored.`);
                            continue
                        }
                        if ("privacyLink" === n) {
                            t.privacy = 1;
                            continue
                        }
                        const i = e[n];
                        let o = 0;
                        i.required && (0, r.isBoolean)(i.required) && (o = Number(i.required));
                        const a = {
                            id: t.assets.length,
                            required: o
                        };
                        if (n in s.h0) a.data = {
                            type: s.jO[s.h0[n]]
                        }, i.len && (a.data.len = i.len);
                        else if ("icon" === n || "image" === n) {
                            if (a.img = {
                                    type: "icon" === n ? s.oA.ICON : s.oA.MAIN
                                }, i.aspect_ratios)
                                if ((0, r.isArray)(i.aspect_ratios))
                                    if (i.aspect_ratios.length) {
                                        const {
                                            min_width: e,
                                            min_height: t
                                        } = i.aspect_ratios[0];
                                        (0, r.isInteger)(e) && (0, r.isInteger)(t) ? (a.img.wmin = e, a.img.hmin = t) : (0, r.logError)("image.aspect_ratios min_width or min_height are invalid: ", e, t);
                                        const n = i.aspect_ratios.filter((e => e.ratio_width && e.ratio_height)).map((e => `${e.ratio_width}:${e.ratio_height}`));
                                        n.length > 0 && (a.img.ext = {
                                            aspectratios: n
                                        })
                                    } else(0, r.logError)("image.aspect_ratios was passed, but it's empty:", i.aspect_ratios);
                            else(0, r.logError)("image.aspect_ratios was passed, but it's not a an array:", i.aspect_ratios);
                            i.sizes && (2 === i.sizes.length && (0, r.isInteger)(i.sizes[0]) && (0, r.isInteger)(i.sizes[1]) ? (a.img.w = i.sizes[0], a.img.h = i.sizes[1], delete a.img.hmin, delete a.img.wmin) : (0, r.logError)("image.sizes was passed, but its value is not an array of integers:", i.sizes))
                        } else "title" === n ? a.title = {
                            len: i.len || 140
                        } : "ext" === n && (a.ext = i, delete a.required);
                        t.assets.push(a)
                    }
                    return t
                }

                function _(e, t) {
                    for (; e && t && e !== t;) e > t ? e -= t : t -= e;
                    return e || t
                }

                function j(e) {
                    if (!E(e)) return;
                    const t = {};
                    for (const n of e.assets) {
                        if (n.title) {
                            const e = {
                                required: !!n.required && Boolean(n.required),
                                len: n.title.len
                            };
                            t.title = e
                        } else if (n.img) {
                            const e = {
                                required: !!n.required && Boolean(n.required)
                            };
                            if (n.img.w && n.img.h) e.sizes = [n.img.w, n.img.h];
                            else if (n.img.wmin && n.img.hmin) {
                                const t = _(n.img.wmin, n.img.hmin);
                                e.aspect_ratios = [{
                                    min_width: n.img.wmin,
                                    min_height: n.img.hmin,
                                    ratio_width: n.img.wmin / t,
                                    ratio_height: n.img.hmin / t
                                }]
                            }
                            n.img.type === s.oA.MAIN ? t.image = e : t.icon = e
                        } else if (n.data) {
                            let e = Object.keys(s.jO).find((e => s.jO[e] === n.data.type)),
                                r = Object.keys(s.h0).find((t => s.h0[t] === e));
                            t[r] = {
                                required: !!n.required && Boolean(n.required)
                            }, n.data.len && (t[r].len = n.data.len)
                        }
                        e.privacy && (t.privacyLink = {
                            required: !1
                        })
                    }
                    return t
                }

                function $(e) {
                    {
                        if (!e || !(0, r.isArray)(e)) return e;
                        if (!e.some((e => (e ? .mediaTypes || {})[a.s6] ? .ortb))) return e;
                        let t = (0, r.deepClone)(e);
                        for (const e of t) e.mediaTypes && e.mediaTypes[a.s6] && e.mediaTypes[a.s6].ortb && (e.mediaTypes[a.s6] = Object.assign((0, r.pick)(e.mediaTypes[a.s6], s._B), j(e.mediaTypes[a.s6].ortb)), e.nativeParams = y(e.mediaTypes[a.s6]));
                        return t
                    }
                }

                function N(e) {
                    const t = {
                        link: {},
                        eventtrackers: []
                    };
                    return Object.entries(e).forEach((e => {
                        let [n, r] = e;
                        switch (n) {
                            case "clickUrl":
                                t.link.url = r;
                                break;
                            case "clickTrackers":
                                t.link.clicktrackers = Array.isArray(r) ? r : [r];
                                break;
                            case "impressionTrackers":
                                (Array.isArray(r) ? r : [r]).forEach((e => {
                                    t.eventtrackers.push({
                                        event: h.impression,
                                        method: m.img,
                                        url: e
                                    })
                                }));
                                break;
                            case "javascriptTrackers":
                                t.jstracker = Array.isArray(r) ? r.join("") : r;
                                break;
                            case "privacyLink":
                                t.privacy = r
                        }
                    })), t
                }

                function x(e, t) {
                    const n = { ...N(e),
                        assets: []
                    };

                    function i(e, i) {
                        let o = t.assets.find(e);
                        null != o && (o = (0, r.deepClone)(o), i(o), n.assets.push(o))
                    }
                    return Object.keys(e).filter((t => !!e[t])).forEach((t => {
                        const n = D(e[t]);
                        switch (t) {
                            case "title":
                                i((e => null != e.title), (e => {
                                    e.title = {
                                        text: n
                                    }
                                }));
                                break;
                            case "image":
                            case "icon":
                                const e = "image" === t ? s.oA.MAIN : s.oA.ICON;
                                i((t => null != t.img && t.img.type === e), (e => {
                                    e.img = {
                                        url: n
                                    }
                                }));
                                break;
                            default:
                                t in s.h0 && i((e => null != e.data && e.data.type === s.jO[s.h0[t]]), (e => {
                                    e.data = {
                                        value: n
                                    }
                                }))
                        }
                    })), n
                }

                function q(e, t) {
                    const n = {},
                        r = t ? .assets || [];
                    n.clickUrl = e.link ? .url, n.privacyLink = e.privacy;
                    for (const t of e ? .assets || []) {
                        const e = r.find((e => t.id === e.id));
                        t.title ? n.title = t.title.text : t.img ? n[e ? .img ? .type === s.oA.MAIN ? "image" : "icon"] = {
                            url: t.img.url,
                            width: t.img.w,
                            height: t.img.h
                        } : t.data && (n[f[p[e ? .data ? .type]]] = t.data.value)
                    }
                    n.impressionTrackers = [];
                    let i = [];
                    e.imptrackers && n.impressionTrackers.push(...e.imptrackers);
                    for (const t of e ? .eventtrackers || []) t.event === h.impression && t.method === m.img && n.impressionTrackers.push(t.url), t.event === h.impression && t.method === m.js && i.push(t.url);
                    return i = i.map((e => `<script async src="${e}"><\/script>`)), e ? .jstracker && i.push(e.jstracker), i.length && (n.javascriptTrackers = i.join("\n")), n
                }

                function W(e) {
                    var t = {};
                    for (var n in e) t[e[n]] = n;
                    return t
                }
            },
            1e3: (e, t, n) => {
                n.d(t, {
                    Cf: () => a,
                    S3: () => i,
                    Tb: () => o,
                    WR: () => s,
                    e4: () => c,
                    pS: () => u,
                    qN: () => d,
                    yB: () => g,
                    zt: () => r
                });
                const r = ["request", "imp", "bidResponse", "response"],
                    [i, o, s, a] = r,
                    [d, c] = ["default", "pbs"],
                    l = new Set(r);
                const {
                    registerOrtbProcessor: u,
                    getProcessors: g
                } = function() {
                    const e = {};
                    return {
                        registerOrtbProcessor(t) {
                            let {
                                type: n,
                                name: i,
                                fn: o,
                                priority: s = 0,
                                dialects: a = [d]
                            } = t;
                            if (!l.has(n)) throw new Error(`ORTB processor type must be one of: ${r.join(", ")}`);
                            a.forEach((t => {
                                e.hasOwnProperty(t) || (e[t] = {}), e[t].hasOwnProperty(n) || (e[t][n] = {}), e[t][n][i] = {
                                    priority: s,
                                    fn: o
                                }
                            }))
                        },
                        getProcessors: t => e[t] || {}
                    }
                }()
            },
            15901: (e, t, n) => {
                function r(e, t, n) {
                    return e && e.includes(t, n) || !1
                }

                function i() {
                    return Array.from.apply(Array, arguments)
                }

                function o(e, t, n) {
                    return e && e.find(t, n)
                }

                function s(e, t, n) {
                    return e && e.findIndex(t, n)
                }
                n.d(t, {
                    A6: () => i,
                    I6: () => o,
                    SL: () => s,
                    mK: () => r
                })
            },
            27718: (e, t, n) => {
                n.d(t, {
                    WH: () => Y,
                    Z: () => X,
                    gH: () => Z
                });
                var r = n(7873),
                    i = n(91069),
                    o = n(70433),
                    s = n(63172),
                    a = n(12449),
                    d = n(78969),
                    c = n(15901),
                    l = n(29075),
                    u = n(46031);
                const {
                    REQUEST: g,
                    RESPONSE: f,
                    NATIVE: p,
                    EVENT: m
                } = d.nl, h = {
                    [g]: function(e, t, n) {
                        (0, l.bw)({
                            renderFn(t) {
                                e(Object.assign({
                                    message: f,
                                    renderer: (0, u.k)(n)
                                }, t))
                            },
                            resizeFn: y(t.adId, n),
                            options: t.options,
                            adId: t.adId,
                            bidResponse: n
                        })
                    },
                    [m]: function(e, t, n) {
                        if (null == n) return void(0, i.logError)(`Cannot find ad '${t.adId}' for x-origin event request`);
                        if (n.status !== d.tl.RENDERED) return void(0, i.logWarn)(`Received x-origin event request without corresponding render request for ad '${n.adId}'`);
                        return (0, l.Uc)(t, n)
                    }
                };

                function b() {
                    window.addEventListener("message", (function(e) {
                        ! function(e) {
                            var t = e.message ? "message" : "data",
                                n = {};
                            try {
                                n = JSON.parse(e[t])
                            } catch (e) {
                                return
                            }
                            if (n && n.adId && n.message && h.hasOwnProperty(n.message))(0, l.$A)(n.adId, n.message === d.nl.REQUEST).then((t => {
                                var r, o;
                                h[n.message]((r = n.adId, o = function(e) {
                                    return null == e.origin && 0 === e.ports.length ? function() {
                                        const e = "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                                        throw (0, i.logError)(e), new Error(e)
                                    } : e.ports.length > 0 ? function(t) {
                                        e.ports[0].postMessage(JSON.stringify(t))
                                    } : function(t) {
                                        e.source.postMessage(JSON.stringify(t), e.origin)
                                    }
                                }(e), function(e) {
                                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                    return o(Object.assign({}, e, {
                                        adId: r
                                    }), ...n)
                                }), n, t)
                            }))
                        }(e)
                    }), !1)
                }

                function y(e, t) {
                    return function(n, r) {
                        ! function(e) {
                            let {
                                adId: t,
                                adUnitCode: n,
                                width: r,
                                height: o
                            } = e;

                            function s(e) {
                                return e ? e + "px" : "100%"
                            }

                            function a(e) {
                                let r = d(t, n),
                                    i = document.getElementById(r);
                                return i && i.querySelector(e)
                            }

                            function d(e, t) {
                                return (0, i.isGptPubadsDefined)() ? l(e) : (0, i.isApnGetTagDefined)() ? u(t) : t
                            }

                            function l(e) {
                                const t = (0, c.I6)(window.googletag.pubads().getSlots(), (t => (0, c.I6)(t.getTargetingKeys(), (n => (0, c.mK)(t.getTargeting(n), e)))));
                                return t ? t.getSlotElementId() : null
                            }

                            function u(e) {
                                let t = window.apntag.getTag(e);
                                return t && t.targetId
                            }["div", "iframe"].forEach((e => {
                                let t = a(e + ':not([style*="display: none"])');
                                if (t) {
                                    let e = t.style;
                                    e.width = s(r), e.height = s(o)
                                } else(0, i.logError)(`Unable to locate matching page element for adUnitCode ${n}.  Can't resize it to ad's dimensions.  Please review setup.`)
                            }))
                        }({ ...t,
                            width: n,
                            height: r,
                            adId: e
                        })
                    }
                }
                Object.assign(h, {
                    [p]: function(e, t, n) {
                        if (null == n) return void(0, i.logError)(`Cannot find ad for x-origin event request: '${t.adId}'`);
                        switch (t.action) {
                            case "assetRequest":
                                (0, l.Hh)(n, (() => e((0, a.IX)(t, n))));
                                break;
                            case "allAssetRequest":
                                (0, l.Hh)(n, (() => e((0, a.yl)(t, n))));
                                break;
                            default:
                                (0, l.vW)(t, n, {
                                    resizeFn: y(t.adId, n)
                                }), (0, l.Pk)(n)
                        }
                    }
                });
                var v = n(38230),
                    E = n(43272),
                    A = n(67314),
                    I = n(97779),
                    T = n(16833),
                    w = n(49164),
                    C = n(93597),
                    S = n(12938),
                    O = n(11445),
                    B = n(75023),
                    R = n(16894),
                    k = n(25555),
                    D = n(70068),
                    U = n(16916),
                    _ = n(12713),
                    j = n(63895);
                const $ = new Map([
                    ["format", e => Array.isArray(e) && e.length > 0 && e.every((e => "object" == typeof e))],
                    ["w", i.isInteger],
                    ["h", i.isInteger],
                    ["btype", i.isArrayOfNums],
                    ["battr", i.isArrayOfNums],
                    ["pos", i.isInteger],
                    ["mimes", e => Array.isArray(e) && e.length > 0 && e.every((e => "string" == typeof e))],
                    ["topframe", e => [1, 0].includes(e)],
                    ["expdir", i.isArrayOfNums],
                    ["api", i.isArrayOfNums],
                    ["id", i.isStr],
                    ["vcm", e => [1, 0].includes(e)]
                ]);
                var N = n(71371);
                const x = (0, r.m)(),
                    {
                        triggerUserSyncs: q
                    } = v.zt,
                    {
                        ADD_AD_UNITS: W,
                        REQUEST_BIDS: P,
                        SET_TARGETING: M
                    } = d.qY,
                    G = {
                        bidWon: function(e) {
                            if (!A.n.getBidsRequested().map((e => e.bids.map((e => e.adUnitCode)))).reduce(i.flatten).filter(i.uniques).includes(e)) return void(0, i.logError)('The "' + e + '" placement is not defined.');
                            return !0
                        }
                    };

                function F(e, t) {
                    let n = [];
                    return (0, i.isArray)(e) && (t ? e.length === t : e.length > 0) && (e.every((e => (0, i.isArrayOfNums)(e, 2))) ? n = e : (0, i.isArrayOfNums)(e, 2) && n.push(e)), n
                }

                function L(e, t) {
                    const n = (0, o.A)(e, `ortb2Imp.${t}`),
                        r = (0, o.A)(e, `mediaTypes.${t}`);
                    if (!n && !r) return;
                    const a = {
                        [N.G_]: j.Zy,
                        [N.D4]: $
                    }[t];
                    a && [...a].forEach((n => {
                        let [r, a] = n;
                        const d = (0, o.A)(e, `mediaTypes.${t}.${r}`),
                            c = (0, o.A)(e, `ortb2Imp.${t}.${r}`);
                        null == d && null == c || (null == d ? (0, s.J)(e, `mediaTypes.${t}.${r}`, c) : null == c ? (0, s.J)(e, `ortb2Imp.${t}.${r}`, d) : ((0, i.logWarn)(`adUnit ${e.code}: specifies conflicting ortb2Imp.${t}.${r} and mediaTypes.${t}.${r}, the latter will be ignored`, e), (0, s.J)(e, `mediaTypes.${t}.${r}`, c)))
                    }))
                }

                function z(e) {
                    const t = (0, i.deepClone)(e),
                        n = t.mediaTypes.banner,
                        r = F(n.sizes);
                    return r.length > 0 ? (n.sizes = r, t.sizes = r) : ((0, i.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete t.mediaTypes.banner), L(t, "banner"), t
                }

                function H(e) {
                    const t = (0, i.deepClone)(e),
                        n = t.mediaTypes.video;
                    if (n.playerSize) {
                        let e = "number" == typeof n.playerSize[0] ? 2 : 1;
                        const r = F(n.playerSize, e);
                        r.length > 0 ? (2 === e && (0, i.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), n.playerSize = r, t.sizes = r) : ((0, i.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete t.mediaTypes.video.playerSize)
                    }
                    return (0, j.aP)(t), L(t, "video"), t
                }

                function V(e) {
                    function t(t) {
                        return (0, i.logError)(`Error in adUnit "${e.code}": ${t}. Removing native request from ad unit`, e), delete r.mediaTypes.native, r
                    }

                    function n(e) {
                        for (const t of ["sendTargetingKeys", "types"])
                            if (o.hasOwnProperty(t)) {
                                const n = e(t);
                                if (n) return n
                            }
                    }
                    const r = (0, i.deepClone)(e),
                        o = r.mediaTypes.native;
                    if (o.ortb) {
                        if (o.ortb.assets ? .some((e => !(0, i.isNumber)(e.id) || e.id < 0 || e.id % 1 != 0))) return t("native asset ID must be a nonnegative integer");
                        if (n((e => t(`ORTB native requests cannot specify "${e}"`)))) return r;
                        const e = Object.keys(d.x5).filter((e => d.x5[e].includes("hb_native_"))),
                            s = Object.keys(o).filter((t => e.includes(t)));
                        s.length > 0 && ((0, i.logError)(`when using native OpenRTB format, you cannot use legacy native properties. Deleting ${s} keys from request.`), s.forEach((e => delete r.mediaTypes.native[e])))
                    } else n((e => `mediaTypes.native.${e} is deprecated, consider using native ORTB instead`));
                    return o.image && o.image.sizes && !Array.isArray(o.image.sizes) && ((0, i.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete r.mediaTypes.native.image.sizes), o.image && o.image.aspect_ratios && !Array.isArray(o.image.aspect_ratios) && ((0, i.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete r.mediaTypes.native.image.aspect_ratios), o.icon && o.icon.sizes && !Array.isArray(o.icon.sizes) && ((0, i.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete r.mediaTypes.native.icon.sizes), r
                }

                function K(e, t) {
                    let n = e ? .mediaTypes ? .[t] ? .pos;
                    if (!(0, i.isNumber)(n) || isNaN(n) || !isFinite(n)) {
                        let n = `Value of property 'pos' on ad unit ${e.code} should be of type: Number`;
                        (0, i.logWarn)(n), delete e.mediaTypes[t].pos
                    }
                    return e
                }

                function J(e) {
                    const t = t => `adUnit.code '${e.code}' ${t}`,
                        n = e.mediaTypes,
                        r = e.bids;
                    return null == r || (0, i.isArray)(r) ? null == r && null == e.ortb2Imp ? ((0, i.logError)(t("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")), null) : n && 0 !== Object.keys(n).length ? (null == e.ortb2Imp || null != r && 0 !== r.length || (e.bids = [{
                        bidder: null
                    }], (0, i.logMessage)(t("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))), e) : ((0, i.logError)(t("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")), null) : ((0, i.logError)(t("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")), null)
                }(0, w.L6)(), x.bidderSettings = x.bidderSettings || {}, x.libLoaded = !0, x.version = "v9.24.0", (0, i.logInfo)("Prebid.js v9.24.0 loaded"), x.installedModules = x.installedModules || [], x.adUnits = x.adUnits || [], x.triggerUserSyncs = q;
                const Y = {
                    validateAdUnit: J,
                    validateBannerMediaType: z,
                    validateSizes: F
                };
                Object.assign(Y, {
                    validateNativeMediaType: V
                }), Object.assign(Y, {
                    validateVideoMediaType: H
                });
                const X = (0, T.A_)("sync", (function(e) {
                    const t = [];
                    return e.forEach((e => {
                        if (null == (e = J(e))) return;
                        const n = e.mediaTypes;
                        let r, i, o;
                        n.banner && (r = z(e), n.banner.hasOwnProperty("pos") && (r = K(r, "banner"))), n.video && (i = H(r || e), n.video.hasOwnProperty("pos") && (i = K(i, "video"))), n.native && (o = V(i || (r || e)));
                        const s = Object.assign({}, r, i, o);
                        t.push(s)
                    })), t
                }), "checkAdUnitSetup");

                function Q(e) {
                    const t = A.n[e]().filter((e => A.n.getAdUnitCodes().includes(e.adUnitCode))),
                        n = A.n.getLastAuctionId();
                    return t.map((e => e.adUnitCode)).filter(i.uniques).map((e => t.filter((t => t.auctionId === n && t.adUnitCode === e)))).filter((e => e && e[0] && e[0].adUnitCode)).map((e => ({
                        [e[0].adUnitCode]: {
                            bids: e
                        }
                    }))).reduce(((e, t) => Object.assign(e, t)), {})
                }
                x.getAdserverTargetingForAdUnitCodeStr = function(e) {
                    if ((0, i.logInfo)("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                        var t = x.getAdserverTargetingForAdUnitCode(e);
                        return (0, i.transformAdServerTargetingObj)(t)
                    }(0, i.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
                }, x.getHighestUnusedBidResponseForAdUnitCode = function(e) {
                    if (e) {
                        const t = A.n.getAllBidsForAdUnitCode(e).filter(I.Yl);
                        return t.length ? t.reduce(_.Vk) : {}
                    }(0, i.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")
                }, x.getAdserverTargetingForAdUnitCode = function(e) {
                    return x.getAdserverTargeting(e)[e]
                }, x.getAdserverTargeting = function(e) {
                    return (0, i.logInfo)("Invoking pbjs.getAdserverTargeting", arguments), I.iS.getAllTargeting(e)
                }, x.getConsentMetadata = function() {
                    return (0, i.logInfo)("Invoking pbjs.getConsentMetadata"), U.SL.getConsentMeta()
                }, x.getNoBids = function() {
                    return (0, i.logInfo)("Invoking pbjs.getNoBids", arguments), Q("getNoBids")
                }, x.getNoBidsForAdUnitCode = function(e) {
                    return {
                        bids: A.n.getNoBids().filter((t => t.adUnitCode === e))
                    }
                }, x.getBidResponses = function() {
                    return (0, i.logInfo)("Invoking pbjs.getBidResponses", arguments), Q("getBidsReceived")
                }, x.getBidResponsesForAdUnitCode = function(e) {
                    return {
                        bids: A.n.getBidsReceived().filter((t => t.adUnitCode === e))
                    }
                }, x.setTargetingForGPTAsync = function(e, t) {
                    (0, i.logInfo)("Invoking pbjs.setTargetingForGPTAsync", arguments), (0, i.isGptPubadsDefined)() ? I.iS.setTargetingForGPT(e, t): (0, i.logError)("window.googletag is not defined on the page")
                }, x.setTargetingForAst = function(e) {
                    (0, i.logInfo)("Invoking pbjs.setTargetingForAn", arguments), I.iS.isApntagDefined() ? (I.iS.setTargetingForAst(e), B.emit(M, I.iS.getAllTargeting())) : (0, i.logError)("window.apntag is not defined on the page")
                }, x.renderAd = (0, T.A_)("async", (function(e, t, n) {
                    (0, i.logInfo)("Invoking pbjs.renderAd", arguments), (0, i.logMessage)("Calling renderAd with adId :" + t), (0, l.BS)(e, t, n)
                })), x.removeAdUnit = function(e) {
                    if ((0, i.logInfo)("Invoking pbjs.removeAdUnit", arguments), !e) return void(x.adUnits = []);
                    let t;
                    t = (0, i.isArray)(e) ? e : [e], t.forEach((e => {
                        for (let t = x.adUnits.length - 1; t >= 0; t--) x.adUnits[t].code === e && x.adUnits.splice(t, 1)
                    }))
                }, x.requestBids = function() {
                    const e = (0, T.A_)("async", (function() {
                        let {
                            bidsBackHandler: e,
                            timeout: t,
                            adUnits: n,
                            adUnitCodes: r,
                            labels: o,
                            auctionId: s,
                            ttlBuffer: a,
                            ortb2: d,
                            metrics: l,
                            defer: u
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        B.emit(P);
                        const g = t || E.$W.getConfig("bidderTimeout");
                        (0, i.logInfo)("Invoking pbjs.requestBids", arguments), null == r || Array.isArray(r) || (r = [r]), r && r.length ? n = n.filter((e => (0, c.mK)(r, e.code))) : r = n && n.map((e => e.code)), r = r.filter(i.uniques);
                        const f = {
                            global: (0, i.mergeDeep)({}, E.$W.getAnyConfig("ortb2") || {}, d || {}),
                            bidder: Object.fromEntries(Object.entries(E.$W.getBidderConfig()).map((e => {
                                let [t, n] = e;
                                return [t, (0, i.deepClone)(n.ortb2)]
                            })).filter((e => {
                                let [t, n] = e;
                                return null != n
                            })))
                        };
                        return (0, D.w)(k.k.resolve(f.global)).then((t => (f.global = t, Z({
                            bidsBackHandler: e,
                            timeout: g,
                            adUnits: n,
                            adUnitCodes: r,
                            labels: o,
                            auctionId: s,
                            ttlBuffer: a,
                            ortb2Fragments: f,
                            metrics: l,
                            defer: u
                        }))))
                    }), "requestBids");
                    return (0, T.Y6)(e, (function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.adUnits || x.adUnits;
                        return t.adUnits = (0, i.isArray)(n) ? n.slice() : [n], t.metrics = (0, R.K7)(), t.metrics.checkpoint("requestBids"), t.defer = (0, k.v)({
                            promiseFactory: e => new Promise(e)
                        }), e.call(this, t), t.defer.promise
                    }))
                }();
                const Z = (0, T.A_)("async", (function() {
                    let {
                        bidsBackHandler: e,
                        timeout: t,
                        adUnits: n,
                        ttlBuffer: r,
                        adUnitCodes: o,
                        labels: a,
                        auctionId: d,
                        ortb2Fragments: l,
                        metrics: u,
                        defer: g
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const f = (0, O.pX)(E.$W.getConfig("s2sConfig") || []);

                    function p(t, n, r) {
                        if ("function" == typeof e) try {
                            e(t, n, r)
                        } catch (e) {
                            (0, i.logError)("Error executing bidsBackHandler", null, e)
                        }
                        g.resolve({
                            bids: t,
                            timedOut: n,
                            auctionId: r
                        })
                    }! function(e) {
                        e.forEach((e => (0, j.V0)(e)))
                    }(n), n = (0, R.BO)(u).measureTime("requestBids.validate", (() => X(n)));
                    const m = {};
                    if (n.forEach((e => {
                            const t = Object.keys(e.mediaTypes || {
                                    banner: "banner"
                                }),
                                n = e.bids.map((e => e.bidder)),
                                o = O.Ay.bidderRegistry,
                                s = n.filter((e => !f.has(e)));
                            e.adUnitId = (0, i.generateUUID)();
                            const a = e.ortb2Imp ? .ext ? .tid;
                            a && (m.hasOwnProperty(e.code) ? (0, i.logWarn)(`Multiple distinct ortb2Imp.ext.tid were provided for twin ad units '${e.code}'`) : m[e.code] = a), null == r || e.hasOwnProperty("ttlBuffer") || (e.ttlBuffer = r), s.forEach((n => {
                                const r = o[n],
                                    s = r && r.getSpec && r.getSpec(),
                                    a = s && s.supportedMediaTypes || ["banner"];
                                t.some((e => (0, c.mK)(a, e))) || ((0, i.logWarn)((0, i.unsupportedBidderMessage)(e, n)), e.bids = e.bids.filter((e => e.bidder !== n)))
                            }))
                        })), n && 0 !== n.length) {
                        n.forEach((e => {
                            const t = e.ortb2Imp ? .ext ? .tid || m[e.code] || (0, i.generateUUID)();
                            m.hasOwnProperty(e.code) || (m[e.code] = t), e.transactionId = t, (0, s.J)(e, "ortb2Imp.ext.tid", t)
                        }));
                        const e = A.n.createAuction({
                            adUnits: n,
                            adUnitCodes: o,
                            callback: p,
                            cbTimeout: t,
                            labels: a,
                            auctionId: d,
                            ortb2Fragments: l,
                            metrics: u
                        });
                        let r = n.length;
                        r > 15 && (0, i.logInfo)(`Current auction ${e.getAuctionId()} contains ${r} adUnits.`, n), o.forEach((t => I.iS.setLatestAuctionForAdUnit(t, e.getAuctionId()))), e.callBids()
                    } else(0, i.logMessage)("No adUnits configured. No bids requested."), p()
                }), "startAuction");
                x.requestBids.before((function(e, t) {
                    function n(e) {
                        for (var t; t = e.shift();) t()
                    }
                    n(S.s0), n(ee), e.call(this, t)
                }), 49), x.addAdUnits = function(e) {
                    (0, i.logInfo)("Invoking pbjs.addAdUnits", arguments), x.adUnits.push.apply(x.adUnits, (0, i.isArray)(e) ? e : [e]), B.emit(W)
                }, x.onEvent = function(e, t, n) {
                    (0, i.logInfo)("Invoking pbjs.onEvent", arguments), (0, i.isFn)(t) ? !n || G[e].call(null, n) ? B.on(e, t, n) : (0, i.logError)('The id provided is not valid for event "' + e + '" and no handler was set.'): (0, i.logError)('The event handler provided is not a function and was not set on event "' + e + '".')
                }, x.offEvent = function(e, t, n) {
                    (0, i.logInfo)("Invoking pbjs.offEvent", arguments), n && !G[e].call(null, n) || B.off(e, t, n)
                }, x.getEvents = function() {
                    return (0, i.logInfo)("Invoking pbjs.getEvents"), B.getEvents()
                }, x.registerBidAdapter = function(e, t) {
                    (0, i.logInfo)("Invoking pbjs.registerBidAdapter", arguments);
                    try {
                        O.Ay.registerBidAdapter(e(), t)
                    } catch (e) {
                        (0, i.logError)("Error registering bidder adapter : " + e.message)
                    }
                }, x.registerAnalyticsAdapter = function(e) {
                    (0, i.logInfo)("Invoking pbjs.registerAnalyticsAdapter", arguments);
                    try {
                        O.Ay.registerAnalyticsAdapter(e)
                    } catch (e) {
                        (0, i.logError)("Error registering analytics adapter : " + e.message)
                    }
                }, x.createBid = function(e) {
                    return (0, i.logInfo)("Invoking pbjs.createBid", arguments), (0, C.O)(e)
                };
                const ee = [],
                    te = (0, T.A_)("async", (function(e) {
                        e && !(0, i.isEmpty)(e) ? ((0, i.logInfo)("Invoking pbjs.enableAnalytics for: ", e), O.Ay.enableAnalytics(e)) : (0, i.logError)("pbjs.enableAnalytics should be called with option {}")
                    }), "enableAnalyticsCb");

                function ne(e) {
                    if ("function" == typeof e) try {
                        e.call()
                    } catch (e) {
                        (0, i.logError)("Error processing command :", e.message, e.stack)
                    } else(0, i.logError)("Commands written into pbjs.cmd.push must be wrapped in a function")
                }

                function re(e) {
                    e.forEach((function(e) {
                        if (void 0 === e.called) try {
                            e.call(), e.called = !0
                        } catch (e) {
                            (0, i.logError)("Error processing command :", "prebid.js", e)
                        }
                    }))
                }
                x.enableAnalytics = function(e) {
                    ee.push(te.bind(this, e))
                }, x.aliasBidder = function(e, t, n) {
                    (0, i.logInfo)("Invoking pbjs.aliasBidder", arguments), e && t ? O.Ay.aliasBidAdapter(e, t, n) : (0, i.logError)("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
                }, x.aliasRegistry = O.Ay.aliasRegistry, E.$W.getConfig("aliasRegistry", (e => {
                    "private" === e.aliasRegistry && delete x.aliasRegistry
                })), x.getAllWinningBids = function() {
                    return A.n.getAllWinningBids()
                }, x.getAllPrebidWinningBids = function() {
                    return A.n.getBidsReceived().filter((e => e.status === d.tl.BID_TARGETING_SET))
                }, x.getHighestCpmBids = function(e) {
                    return I.iS.getWinningBids(e)
                }, x.clearAllAuctions = function() {
                    A.n.clearAllAuctions()
                }, x.markWinningBidAsUsed = function(e) {
                    let t, {
                        adId: n,
                        adUnitCode: r,
                        analytics: o = !1
                    } = e;
                    r && null == n ? t = I.iS.getWinningBids(r) : n ? t = A.n.getBidsReceived().filter((e => e.adId === n)) : (0, i.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), t.length > 0 && (o ? (0, l.n6)(t[0]) : A.n.addWinningBid(t[0]), (0, l.qn)(t[0]))
                }, x.getConfig = E.$W.getAnyConfig, x.readConfig = E.$W.readAnyConfig, x.mergeConfig = E.$W.mergeConfig, x.mergeBidderConfig = E.$W.mergeBidderConfig, x.setConfig = E.$W.setConfig, x.setBidderConfig = E.$W.setBidderConfig, x.que.push((() => b())), x.processQueue = function() {
                    x.que.push = x.cmd.push = ne, (0, l.XO)(), T.A_.ready(), re(x.que), re(x.cmd)
                }, x.triggerBilling = e => {
                    let {
                        adId: t,
                        adUnitCode: n
                    } = e;
                    A.n.getAllWinningBids().filter((e => e.adId === t || null == t && e.adUnitCode === n)).forEach((e => {
                        O.Ay.triggerBilling(e), (0, l.vB)(e)
                    }))
                }
            },
            7873: (e, t, n) => {
                n.d(t, {
                    E: () => s,
                    m: () => o
                });
                const r = window,
                    i = r.pbjs = r.pbjs || {};

                function o() {
                    return i
                }

                function s(e) {
                    i.installedModules.push(e)
                }
                i.cmd = i.cmd || [], i.que = i.que || [], r === window && (r._pbjsGlobals = r._pbjsGlobals || [], r._pbjsGlobals.push("pbjs"))
            },
            27934: (e, t, n) => {
                n.d(t, {
                    EN: () => d,
                    gR: () => s
                });
                var r = n(43272),
                    i = n(91069);

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    if (!e) return e;
                    if (/\w+:\/\//.exec(e)) return e;
                    let n = t.location.protocol;
                    try {
                        n = t.top.location.protocol
                    } catch (e) {}
                    return /^\/\//.exec(e) ? n + e : `${n}//${e}`
                }

                function s(e) {
                    let {
                        noLeadingWww: t = !1,
                        noPort: n = !1
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        e = new URL(o(e))
                    } catch (e) {
                        return
                    }
                    return e = n ? e.hostname : e.host, t && e.startsWith("www.") && (e = e.substring(4)), e
                }

                function a(e) {
                    try {
                        const t = e.querySelector("link[rel='canonical']");
                        if (null !== t) return t.href
                    } catch (e) {}
                    return null
                }
                const d = function(e) {
                    let t, n, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    return i.top !== i ? e : function() {
                        const o = a(i.document),
                            s = i.location.href;
                        return t === o && s === n || (t = o, n = s, r = e()), r
                    }
                }((c = window, function() {
                    const e = [],
                        t = function(e) {
                            try {
                                if (!e.location.ancestorOrigins) return;
                                return e.location.ancestorOrigins
                            } catch (e) {}
                        }(c),
                        n = r.$W.getConfig("maxNestedIframes");
                    let d, l, u, g, f = !1,
                        p = 0,
                        m = !1,
                        h = !1,
                        b = !1;
                    do {
                        const n = d,
                            r = h;
                        let o, s = !1,
                            g = null;
                        h = !1, d = d ? d.parent : c;
                        try {
                            o = d.location.href || null
                        } catch (e) {
                            s = !0
                        }
                        if (s)
                            if (r) {
                                const e = n.context;
                                try {
                                    g = e.sourceUrl, l = g, b = !0, m = !0, d === c.top && (f = !0), e.canonicalUrl && (u = e.canonicalUrl)
                                } catch (e) {}
                            } else {
                                (0, i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                                try {
                                    const e = n.document.referrer;
                                    e && (g = e, d === c.top && (f = !0))
                                } catch (e) {}!g && t && t[p - 1] && (g = t[p - 1], d === c.top && (b = !0)), g && !m && (l = g)
                            }
                        else {
                            if (o && (g = o, l = g, m = !1, d === c.top)) {
                                f = !0;
                                const e = a(d.document);
                                e && (u = e)
                            }
                            d.context && d.context.sourceUrl && (h = !0)
                        }
                        e.push(g), p++
                    } while (d !== c.top && p < n);
                    e.reverse();
                    try {
                        g = c.top.document.referrer
                    } catch (e) {}
                    const y = f || b ? l : null,
                        v = r.$W.getConfig("pageUrl") || u || null;
                    let E = r.$W.getConfig("pageUrl") || y || o(v, c);
                    return y && y.indexOf("?") > -1 && -1 === E.indexOf("?") && (E = `${E}${y.substring(y.indexOf("?"))}`), {
                        reachedTop: f,
                        isAmp: m,
                        numIframes: p - 1,
                        stack: e,
                        topmostLocation: l || null,
                        location: y,
                        canonicalUrl: v,
                        page: E,
                        domain: s(E) || null,
                        ref: g || null,
                        legacy: {
                            reachedTop: f,
                            isAmp: m,
                            numIframes: p - 1,
                            stack: e,
                            referer: l || null,
                            canonicalUrl: v
                        }
                    }
                }));
                var c
            },
            12938: (e, t, n) => {
                n.d(t, {
                    CK: () => b,
                    X0: () => f,
                    qk: () => g,
                    s0: () => p,
                    vM: () => h
                });
                var r = n(91069),
                    i = n(12693),
                    o = n(45569),
                    s = n(95139),
                    a = n(2604),
                    d = n(76811),
                    c = n(43272),
                    l = n(11445),
                    u = n(83441);
                const g = "html5",
                    f = "cookie";
                let p = [];

                function m() {
                    let {
                        moduleName: e,
                        moduleType: t
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        isAllowed: n = s.io
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

                    function i(r, i) {
                        let s = e;
                        const g = c.$W.getCurrentBidder();
                        g && t === o.tW && l.Ay.aliasRegistry[g] === e && (s = g);
                        return r({
                            valid: n(d.Ue, (0, u.s)(t, s, {
                                [a.Zw]: i
                            }))
                        })
                    }

                    function m(e, t, n) {
                        if (!n || "function" != typeof n) return i(e, t);
                        p.push((function() {
                            let r = i(e, t);
                            n(r)
                        }))
                    }

                    function h(e) {
                        const t = e.charAt(0).toUpperCase() + e.substring(1),
                            n = () => window[e],
                            i = function(t) {
                                return m((function(t) {
                                    if (t && t.valid) try {
                                        return !!n()
                                    } catch (t) {
                                        (0, r.logError)(`${e} api disabled`)
                                    }
                                    return !1
                                }), g, t)
                            };
                        return {
                            [`has${t}`]: i,
                            [`${e}IsEnabled`]: e => m((function(e) {
                                if (e && e.valid) try {
                                    return n().setItem("prebid.cookieTest", "1"), "1" === n().getItem("prebid.cookieTest")
                                } catch (e) {} finally {
                                    try {
                                        n().removeItem("prebid.cookieTest")
                                    } catch (e) {}
                                }
                                return !1
                            }), g, e),
                            [`setDataIn${t}`]: (e, t, r) => m((function(r) {
                                r && r.valid && i() && n().setItem(e, t)
                            }), g, r),
                            [`getDataFrom${t}`]: (e, t) => m((function(t) {
                                return t && t.valid && i() ? n().getItem(e) : null
                            }), g, t),
                            [`removeDataFrom${t}`]: (e, t) => m((function(t) {
                                t && t.valid && i() && n().removeItem(e)
                            }), g, t)
                        }
                    }
                    return {
                        setCookie: function(e, t, n, r, i, o) {
                            return m((function(o) {
                                if (o && o.valid) {
                                    const o = i && "" !== i ? ` ;domain=${encodeURIComponent(i)}` : "",
                                        s = n && "" !== n ? ` ;expires=${n}` : "",
                                        a = null != r && "none" == r.toLowerCase() ? "; Secure" : "";
                                    document.cookie = `${e}=${encodeURIComponent(t)}${s}; path=/${o}${r?`; SameSite=${r}`:""}${a}`
                                }
                            }), f, o)
                        },
                        getCookie: function(e, t) {
                            return m((function(t) {
                                if (t && t.valid) {
                                    let t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                                    return t ? decodeURIComponent(t[2]) : null
                                }
                                return null
                            }), f, t)
                        },
                        cookiesAreEnabled: function(e) {
                            return m((function(e) {
                                return !(!e || !e.valid) && (0, r.checkCookieSupport)()
                            }), f, e)
                        },
                        ...h("localStorage"),
                        ...h("sessionStorage"),
                        findSimilarCookies: function(e, t) {
                            return m((function(t) {
                                if (t && t.valid) {
                                    const t = [];
                                    if ((0, r.hasDeviceAccess)()) {
                                        const n = document.cookie.split(";");
                                        for (; n.length;) {
                                            const r = n.pop();
                                            let i = r.indexOf("=");
                                            i = i < 0 ? r.length : i;
                                            decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(e) >= 0 && t.push(decodeURIComponent(r.slice(i + 1)))
                                        }
                                    }
                                    return t
                                }
                            }), f, t)
                        }
                    }
                }

                function h() {
                    let {
                        moduleType: e,
                        moduleName: t,
                        bidderCode: n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

                    function r() {
                        throw new Error("Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName")
                    }
                    return n ? ((e && e !== o.tW || t) && r(), e = o.tW, t = n) : t && e || r(), m({
                        moduleType: e,
                        moduleName: t
                    })
                }

                function b(e) {
                    return m({
                        moduleName: e,
                        moduleType: o.tp
                    })
                }(0, s.qB)(d.Ue, "deviceAccess config", (function() {
                    if (!(0, r.hasDeviceAccess)()) return {
                        allow: !1
                    }
                })), (0, s.qB)(d.Ue, "bidderSettings.*.storageAllowed", (function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.u;
                    if (e[a.Dk] !== o.tW) return;
                    let n = t.get(e[a.q7], "storageAllowed");
                    if (n && !0 !== n) {
                        const t = e[a.Zw];
                        n = Array.isArray(n) ? n.some((e => e === t)) : n === t
                    } else n = !!n;
                    return n ? void 0 : {
                        allow: n
                    }
                }))
            },
            97779: (e, t, n) => {
                n.d(t, {
                    Jp: () => C,
                    ME: () => w,
                    Yl: () => T,
                    iS: () => O,
                    m2: () => S,
                    uW: () => I
                });
                var r = n(67314),
                    i = n(27863),
                    o = n(12693),
                    s = n(43272),
                    a = n(78969),
                    d = n(75023),
                    c = n(16833),
                    l = n(71371),
                    u = n(12449),
                    g = n(15901),
                    f = n(91069),
                    p = n(70433),
                    m = n(12713),
                    h = [];
                const b = 20,
                    y = "targetingControls.allowTargetingKeys",
                    v = "targetingControls.addTargetingKeys",
                    E = `Only one of "${y}" or "${v}" can be set`,
                    A = Object.keys(a.xS).map((e => a.xS[e]));
                let I = {
                    isActualBid: e => e.getStatusCode() === a.XQ.GOOD,
                    isBidNotExpired: e => e.responseTimestamp + 1e3 * (0, i.cT)(e) > (0, f.timestamp)(),
                    isUnusedBid: e => e && (e.status && !(0, g.mK)([a.tl.RENDERED], e.status) || !e.status)
                };

                function T(e) {
                    return !Object.values(I).some((t => !t(e)))
                }
                const w = (0, c.A_)("sync", (function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f.sortByHighestCpm;
                    if (!r) {
                        const r = [],
                            o = s.$W.getConfig("sendBidsControl.dealPrioritization");
                        let a = (0, f.groupBy)(e, "adUnitCode");
                        return Object.keys(a).forEach((e => {
                            let s = [],
                                d = (0, f.groupBy)(a[e], "bidderCode");
                            Object.keys(d).forEach((e => {
                                s.push(d[e].reduce(t))
                            })), n ? (s = o ? s.sort(C(!0)) : s.sort(((e, t) => t.cpm - e.cpm)), r.push(...s.slice(0, n))) : (s = s.sort(i), r.push(...s))
                        })), r
                    }
                    return e
                }));

                function C() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return function(t, n) {
                        return void 0 !== t.adserverTargeting.hb_deal && void 0 === n.adserverTargeting.hb_deal ? -1 : void 0 === t.adserverTargeting.hb_deal && void 0 !== n.adserverTargeting.hb_deal ? 1 : e ? n.cpm - t.cpm : n.adserverTargeting.hb_pb - t.adserverTargeting.hb_pb
                    }
                }

                function S(e, t) {
                    return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => window.googletag.pubads().getSlots())().reduce(((e, n) => {
                        const r = (0, f.isFn)(t) && t(n);
                        return Object.keys(e).filter((0, f.isFn)(r) ? r : (0, f.isAdUnitCodeMatchingSlot)(n)).forEach((t => e[t].push(n))), e
                    }), Object.fromEntries(e.map((e => [e, []]))))
                }
                const O = function(e) {
                    let t = {},
                        n = {};

                    function r(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        const r = A.concat(u.Nh),
                            i = s.$W.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),
                            o = i ? i.map((e => a.xS[e])) : r;
                        return e.reduce(((e, i) => {
                            if (t || n && i.dealId) {
                                const t = function(e, t) {
                                    return t.reduce(((t, n) => (e.adserverTargeting[n] && t.push({
                                        [`${n}_${e.bidderCode}`.substring(0, 20)]: [e.adserverTargeting[n]]
                                    }), t)), [])
                                }(i, r.filter((e => void 0 !== i.adserverTargeting[e] && (n || -1 !== o.indexOf(e)))));
                                t && e.push({
                                    [i.adUnitCode]: t
                                })
                            }
                            return e
                        }), [])
                    }

                    function i(t) {
                        return "string" == typeof t ? [t] : (0, f.isArray)(t) ? t : e.getAdUnitCodes() || []
                    }

                    function I() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Bq,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            i = e.getBidsReceived().reduce(((e, t) => {
                                const r = s.$W.getConfig("useBidCache"),
                                    i = s.$W.getConfig("bidCacheFilterFunction"),
                                    o = n[t.adUnitCode] === t.auctionId,
                                    a = !(r && !o && "function" == typeof i) || !!i(t);
                                return (r || o) && a && (0, p.A)(t, "video.context") !== l.LM && T(t) && (t.latestTargetedAuctionId = n[t.adUnitCode], e.push(t)), e
                            }), []);
                        return w(i, t, void 0, void 0, void 0, r)
                    }

                    function O() {
                        return e.getStandardBidderAdServerTargeting().map((e => e.key)).concat(A).filter(f.uniques)
                    }
                    return t.setLatestAuctionForAdUnit = function(e, t) {
                        n[e] = t
                    }, t.resetPresetTargeting = function(e, t) {
                        if ((0, f.isGptPubadsDefined)()) {
                            const n = i(e);
                            Object.values(S(n, t)).forEach((e => {
                                e.forEach((e => {
                                    ! function(e) {
                                        h.forEach((t => {
                                            e.getTargeting(t) && e.clearTargeting(t)
                                        }))
                                    }(e)
                                }))
                            }))
                        }
                    }, t.resetPresetTargetingAST = function(e) {
                        i(e).forEach((function(e) {
                            const t = window.apntag.getTag(e);
                            if (t && t.keywords) {
                                const n = Object.keys(t.keywords),
                                    r = {};
                                n.forEach((e => {
                                    (0, g.mK)(h, e.toLowerCase()) || (r[e] = t.keywords[e])
                                })), window.apntag.modifyTag(e, {
                                    keywords: r
                                })
                            }
                        }))
                    }, t.getAllTargeting = function(t, n, d) {
                        let c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m.Vk,
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f.sortByHighestCpm;
                        d || = I(c, l);
                        const A = i(t),
                            T = s.$W.getConfig("enableSendAllBids"),
                            S = s.$W.getConfig("sendBidsControl.bidLimit"),
                            B = T && (n || S) || 0,
                            {
                                customKeysByUnit: R,
                                filteredBids: k
                            } = function(e, t) {
                                const n = [],
                                    r = {},
                                    i = s.$W.getConfig("targetingControls.alwaysIncludeDeals");
                                return t.forEach((t => {
                                    const s = (0, g.mK)(e, t.adUnitCode),
                                        a = !0 === o.u.get(t.bidderCode, "allowZeroCpmBids") ? t.cpm >= 0 : t.cpm > 0,
                                        d = i && t.dealId;
                                    s && (d || a) && (n.push(t), Object.keys(t.adserverTargeting).filter(function() {
                                        let e = O();
                                        e = e.concat(u.Nh);
                                        return function(t) {
                                            return -1 === e.indexOf(t)
                                        }
                                    }()).forEach((e => {
                                        const n = e.substring(0, b),
                                            i = r[t.adUnitCode] || {},
                                            o = [t.adserverTargeting[e]];
                                        i[n] ? i[n] = i[n].concat(o).filter(f.uniques) : i[n] = o, r[t.adUnitCode] = i
                                    })))
                                })), {
                                    filteredBids: n,
                                    customKeysByUnit: r
                                }
                            }(A, d);
                        let D = function(t, n) {
                            const i = function(e) {
                                let t = [],
                                    n = e.reduce(((e, n) => ((0, g.mK)(t, n.adUnitCode) || (e.push(n), t.push(n.adUnitCode)), e)), []),
                                    r = O();
                                return n = n.map((e => ({
                                    [e.adUnitCode]: Object.keys(e.adserverTargeting).filter((t => void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === r.indexOf(t))).reduce(((t, n) => {
                                        const r = [e.adserverTargeting[n]],
                                            i = {
                                                [n.substring(0, b)]: r
                                            };
                                        if (n === a.xS.DEAL) {
                                            const o = `${n}_${e.bidderCode}`.substring(0, b),
                                                s = {
                                                    [o]: r
                                                };
                                            return [...t, i, s]
                                        }
                                        return [...t, i]
                                    }), [])
                                }))), n
                            }(t).concat(function(e, t) {
                                return e.reduce(((e, n) => {
                                    const r = Object.assign({}, n),
                                        i = t[r.adUnitCode],
                                        o = [];
                                    return i && Object.keys(i).forEach((e => {
                                        e && i[e] && o.push({
                                            [e]: i[e]
                                        })
                                    })), e.push({
                                        [r.adUnitCode]: o
                                    }), e
                                }), [])
                            }(t, n)).concat(function(e) {
                                const t = s.$W.getConfig("targetingControls.alwaysIncludeDeals");
                                return r(e, s.$W.getConfig("enableSendAllBids"), t)
                            }(t)).concat(function() {
                                function t(e) {
                                    return (0, p.A)(e, a.iD.ADSERVER_TARGETING)
                                }

                                function n(e) {
                                    const n = t(e);
                                    return Object.keys(n).map((function(e) {
                                        return (0, f.isStr)(n[e]) && (n[e] = n[e].split(",").map((e => e.trim()))), (0, f.isArray)(n[e]) || (n[e] = [n[e]]), {
                                            [e]: n[e]
                                        }
                                    }))
                                }
                                return e.getAdUnits().filter((e => t(e))).reduce(((e, t) => {
                                    const r = n(t);
                                    return r && e.push({
                                        [t.code]: r
                                    }), e
                                }), [])
                            }());
                            return i.forEach((e => {
                                ! function(e) {
                                    Object.keys(e).forEach((t => {
                                        e[t].forEach((e => {
                                            const t = Object.keys(e); - 1 === h.indexOf(t[0]) && (h = t.concat(h))
                                        }))
                                    }))
                                }(e)
                            })), i
                        }(w(k, c, B, void 0, l), R);
                        const U = Object.keys(Object.assign({}, a.Zh, a.x5));
                        let _ = s.$W.getConfig(y);
                        const j = s.$W.getConfig(v);
                        if (null != j && null != _) throw new Error(E);
                        _ = null != j ? U.concat(j) : _ || U, Array.isArray(_) && _.length > 0 && (D = function(e, t) {
                            const n = Object.assign({}, a.xS, a.x5),
                                r = Object.keys(n),
                                i = {};
                            (0, f.logInfo)(`allowTargetingKeys - allowed keys [ ${t.map((e=>n[e])).join(", ")} ]`), e.map((e => {
                                const o = Object.keys(e)[0],
                                    s = e[o].filter((e => {
                                        const o = Object.keys(e)[0],
                                            s = 0 === r.filter((e => 0 === o.indexOf(n[e]))).length || (0, g.I6)(t, (e => {
                                                const t = n[e];
                                                return 0 === o.indexOf(t)
                                            }));
                                        return i[o] = !s, s
                                    }));
                                e[o] = s
                            }));
                            const o = Object.keys(i).filter((e => i[e]));
                            return (0, f.logInfo)(`allowTargetingKeys - removed keys [ ${o.join(", ")} ]`), e.filter((e => e[Object.keys(e)[0]].length > 0))
                        }(D, _)), D = function(e) {
                            let t = e.map((e => ({
                                [Object.keys(e)[0]]: e[Object.keys(e)[0]].map((e => ({
                                    [Object.keys(e)[0]]: e[Object.keys(e)[0]].join(",")
                                }))).reduce(((e, t) => Object.assign(t, e)), {})
                            })));
                            return t = t.reduce((function(e, t) {
                                var n = Object.keys(t)[0];
                                return e[n] = Object.assign({}, e[n], t[n]), e
                            }), {}), t
                        }(D);
                        const $ = s.$W.getConfig("targetingControls.auctionKeyMaxChars");
                        return $ && ((0, f.logInfo)(`Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ${$} characters.  Running checks on auction keys...`), D = function(e, t) {
                            let n = (0, f.deepClone)(e),
                                r = Object.keys(n).map((e => ({
                                    adUnitCode: e,
                                    adserverTargeting: n[e]
                                }))).sort(C());
                            return r.reduce((function(e, r, i, o) {
                                let s = (a = r.adserverTargeting, Object.keys(a).reduce((function(e, t) {
                                    return e + `${t}%3d${encodeURIComponent(a[t])}%26`
                                }), ""));
                                var a;
                                i + 1 === o.length && (s = s.slice(0, -3));
                                let d = r.adUnitCode,
                                    c = s.length;
                                return c <= t ? (t -= c, (0, f.logInfo)(`AdUnit '${d}' auction keys comprised of ${c} characters.  Deducted from running threshold; new limit is ${t}`, n[d]), e[d] = n[d]) : (0, f.logWarn)(`The following keys for adUnitCode '${d}' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ${c}, the current allotted amount was ${t}.\n`, n[d]), i + 1 === o.length && 0 === Object.keys(e).length && (0, f.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
                            }), {})
                        }(D, $)), A.forEach((e => {
                            D[e] || (D[e] = {})
                        })), D
                    }, s.$W.getConfig("targetingControls", (function(e) {
                        null != (0, p.A)(e, y) && null != (0, p.A)(e, v) && (0, f.logError)(E)
                    })), t.setTargetingForGPT = (0, c.A_)("sync", (function(n, r) {
                        let i = t.getAllTargeting(n),
                            o = Object.fromEntries(h.map((e => [e, null])));
                        Object.entries(S(Object.keys(i), r)).forEach((e => {
                            let [t, n] = e;
                            n.forEach((e => {
                                Object.keys(i[t]).forEach((e => {
                                    let n = i[t][e];
                                    "string" == typeof n && -1 !== n.indexOf(",") && (n = n.split(",")), i[t][e] = n
                                })), (0, f.logMessage)(`Attempting to set targeting-map for slot: ${e.getSlotElementId()} with targeting-map:`, i[t]), e.updateTargetingFromMap(Object.assign({}, o, i[t]))
                            }))
                        })), Object.keys(i).forEach((t => {
                            Object.keys(i[t]).forEach((n => {
                                "hb_adid" === n && e.setStatusForBids(i[t][n], a.tl.BID_TARGETING_SET)
                            }))
                        })), t.targetingDone(i), d.emit(a.qY.SET_TARGETING, i)
                    }), "setTargetingForGPT"), t.targetingDone = (0, c.A_)("sync", (function(e) {
                        return e
                    }), "targetingDone"), t.getWinningBids = function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Vk,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.sortByHighestCpm;
                        const a = [],
                            d = t || I(n, r),
                            c = i(e);
                        return d.reduce(((e, t) => {
                            const n = t.adUnitCode,
                                r = !0 === o.u.get(n, "allowZeroCpmBids") ? t.cpm >= 0 : t.cpm > 0,
                                i = s.$W.getConfig("targetingControls.alwaysIncludeDeals") && t.dealId;
                            return (0, g.mK)(c, n) && !(0, g.mK)(a, n) && (i || r) && (e.push(t), a.push(n)), e
                        }), [])
                    }, t.setTargetingForAst = function(e) {
                        let n = t.getAllTargeting(e);
                        try {
                            t.resetPresetTargetingAST(e)
                        } catch (e) {
                            (0, f.logError)("unable to reset targeting for AST" + e)
                        }
                        Object.keys(n).forEach((e => Object.keys(n[e]).forEach((t => {
                            if ((0, f.logMessage)(`Attempting to set targeting for targetId: ${e} key: ${t} value: ${n[e][t]}`), (0, f.isStr)(n[e][t]) || (0, f.isArray)(n[e][t])) {
                                let r = {},
                                    i = /pt[0-9]/;
                                t.search(i) < 0 ? r[t.toUpperCase()] = n[e][t] : r[t] = n[e][t], window.apntag.setKeywords(e, r, {
                                    overrideKeyValue: !0
                                })
                            }
                        }))))
                    }, t.isApntagDefined = function() {
                        if (window.apntag && (0, f.isFn)(window.apntag.setKeywords)) return !0
                    }, t
                }(r.n)
            },
            38230: (e, t, n) => {
                n.d(t, {
                    qh: () => g,
                    zt: () => p
                });
                var r = n(91069),
                    i = n(43272),
                    o = n(15901),
                    s = n(12938),
                    a = n(95139),
                    d = n(76811),
                    c = n(2604),
                    l = n(45569),
                    u = n(83441);
                const g = {
                    syncEnabled: !0,
                    filterSettings: {
                        image: {
                            bidders: "*",
                            filter: "include"
                        }
                    },
                    syncsPerBidder: 5,
                    syncDelay: 3e3,
                    auctionDelay: 500
                };
                i.$W.setDefaults({
                    userSync: (0, r.deepClone)(g)
                });
                const f = (0, s.CK)("usersync");
                const p = function(e) {
                    let t = {},
                        n = {
                            image: [],
                            iframe: []
                        },
                        s = new Set,
                        a = {},
                        g = {
                            image: !0,
                            iframe: !1
                        },
                        f = e.config;

                    function p() {
                        if (f.syncEnabled && e.browserSupportsCookies) {
                            try {
                                ! function() {
                                    if (!g.iframe) return;
                                    m(n.iframe, (e => {
                                        let [t, i] = e;
                                        (0, r.logMessage)(`Invoking iframe user sync for bidder: ${t}`), (0, r.insertUserSyncIframe)(i),
                                        function(e, t) {
                                            e.image = e.image.filter((e => e[0] !== t))
                                        }(n, t)
                                    }))
                                }(),
                                function() {
                                    if (!g.image) return;
                                    m(n.image, (e => {
                                        let [t, n] = e;
                                        (0, r.logMessage)(`Invoking image pixel user sync for bidder: ${t}`), (0, r.triggerPixel)(n)
                                    }))
                                }()
                            } catch (e) {
                                return (0, r.logError)("Error firing user syncs", e)
                            }
                            n = {
                                image: [],
                                iframe: []
                            }
                        }
                    }

                    function m(e, t) {
                        (0, r.shuffle)(e).forEach(t)
                    }

                    function h(e, t) {
                        let n = f.filterSettings;
                        if (function(e, t) {
                                if (e.all && e[t]) return (0, r.logWarn)(`Detected presence of the "filterSettings.all" and "filterSettings.${t}" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.`), !1;
                                let n = e.all ? e.all : e[t],
                                    i = e.all ? "all" : t;
                                if (!n) return !1;
                                let o = n.filter,
                                    s = n.bidders;
                                if (o && "include" !== o && "exclude" !== o) return (0, r.logWarn)(`UserSync "filterSettings.${i}.filter" setting '${o}' is not a valid option; use either 'include' or 'exclude'.`), !1;
                                if ("*" !== s && !(Array.isArray(s) && s.length > 0 && s.every((e => (0, r.isStr)(e) && "*" !== e)))) return (0, r.logWarn)(`Detected an invalid setup in userSync "filterSettings.${i}.bidders"; use either '*' (to represent all bidders) or an array of bidders.`), !1;
                                return !0
                            }(n, e)) {
                            g[e] = !0;
                            let r = n.all ? n.all : n[e],
                                i = "*" === r.bidders ? [t] : r.bidders;
                            const s = {
                                include: (e, t) => !(0, o.mK)(e, t),
                                exclude: (e, t) => (0, o.mK)(e, t)
                            };
                            return s[r.filter || "include"](i, t)
                        }
                        return !g[e]
                    }
                    return i.$W.getConfig("userSync", (e => {
                        if (e.userSync) {
                            let t = e.userSync.filterSettings;
                            (0, r.isPlainObject)(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                                bidders: "*",
                                filter: "include"
                            }))
                        }
                        f = Object.assign(f, e.userSync)
                    })), e.regRule(d.Ml, "userSync config", (e => {
                        if (!f.syncEnabled) return {
                            allow: !1,
                            reason: "syncs are disabled"
                        };
                        if (e[c.Dk] === l.tW) {
                            const n = e[c.bt],
                                r = e[c.iK];
                            if (!t.canBidderRegisterSync(n, r)) return {
                                allow: !1,
                                reason: `${n} syncs are not enabled for ${r}`
                            }
                        }
                    })), t.registerSync = (t, i, o) => s.has(i) ? (0, r.logMessage)(`already fired syncs for "${i}", ignoring registerSync call`) : f.syncEnabled && (0, r.isArray)(n[t]) ? i ? 0 !== f.syncsPerBidder && Number(a[i]) >= f.syncsPerBidder ? (0, r.logWarn)(`Number of user syncs exceeded for "${i}"`) : void(e.isAllowed(d.Ml, (0, u.s)(l.tW, i, {
                        [c.bt]: t,
                        [c.e3]: o
                    })) && (n[t].push([i, o]), a = function(e, t) {
                        return e[t] ? e[t] += 1 : e[t] = 1, e
                    }(a, i))) : (0, r.logWarn)("Bidder is required for registering sync") : (0, r.logWarn)(`User sync type "${t}" not supported`), t.bidderDone = s.add.bind(s), t.syncUsers = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (e) return setTimeout(p, Number(e));
                        p()
                    }, t.triggerUserSyncs = () => {
                        f.enableOverride && t.syncUsers()
                    }, t.canBidderRegisterSync = (e, t) => !f.filterSettings || !h(e, t), t
                }(Object.defineProperties({
                    config: i.$W.getConfig("userSync"),
                    isAllowed: a.io,
                    regRule: a.qB
                }, {
                    browserSupportsCookies: {
                        get: function() {
                            return !(0, r.isSafariBrowser)() && f.cookiesAreEnabled()
                        }
                    }
                }))
            },
            91069: (e, t, n) => {
                n.r(t), n.d(t, {
                    _each: () => fe,
                    _map: () => me,
                    _setEventEmitter: () => w,
                    binarySearch: () => yt,
                    buildUrl: () => dt,
                    canAccessWindowTop: () => H,
                    checkCookieSupport: () => ze,
                    cleanObj: () => nt,
                    compareCodeAndSlot: () => Qe,
                    contains: () => pe,
                    convertObjectToArray: () => ht,
                    createIframe: () => te,
                    createInvisibleIframe: () => ne,
                    createTrackPixelHtml: () => Ae,
                    createTrackPixelIframeHtml: () => Te,
                    cyrb53Hash: () => ut,
                    debugTurnedOn: () => ee,
                    deepAccess: () => c.A,
                    deepClone: () => _e,
                    deepEqual: () => ct,
                    deepSetValue: () => l.J,
                    delayExecution: () => He,
                    encodeMacroURI: () => Ie,
                    extractDomainFromHost: () => At,
                    flatten: () => Ce,
                    formatQS: () => st,
                    generateUUID: () => U,
                    getBidIdParameter: () => _,
                    getBidRequest: () => Se,
                    getBidderCodes: () => Be,
                    getDNT: () => Xe,
                    getDefinedParams: () => Ke,
                    getDomLoadingDuration: () => Fe,
                    getParameterByName: () => re,
                    getPerformanceNow: () => Ge,
                    getPrebidInternal: () => B,
                    getSafeframeGeometry: () => Ne,
                    getUniqueIdentifierStr: () => D,
                    getUnixTimestampFromNow: () => mt,
                    getUserConfiguredParams: () => Ye,
                    getValue: () => Oe,
                    getWindowLocation: () => z,
                    getWindowSelf: () => L,
                    getWindowTop: () => F,
                    groupBy: () => Ve,
                    hasConsoleLogger: () => Z,
                    hasDeviceAccess: () => Le,
                    hasNonSerializableProperty: () => vt,
                    inIframe: () => je,
                    insertElement: () => he,
                    insertHtmlIntoIframe: () => ve,
                    insertUserSyncIframe: () => Ee,
                    internal: () => S,
                    isA: () => ie,
                    isAdUnitCodeMatchingSlot: () => Ze,
                    isApnGetTagDefined: () => ke,
                    isArray: () => ae,
                    isArrayOfNums: () => it,
                    isBoolean: () => le,
                    isEmpty: () => ue,
                    isEmptyStr: () => ge,
                    isFn: () => oe,
                    isGptPubadsDefined: () => Re,
                    isInteger: () => tt,
                    isNumber: () => de,
                    isPlainObject: () => ce,
                    isSafariBrowser: () => xe,
                    isSafeFrameWindow: () => $e,
                    isStr: () => se,
                    isValidMediaTypes: () => Je,
                    logError: () => Y,
                    logInfo: () => K,
                    logMessage: () => V,
                    logWarn: () => J,
                    memoize: () => pt,
                    mergeDeep: () => lt,
                    parseGPTSingleSizeArray: () => W,
                    parseGPTSingleSizeArrayToRtbSize: () => M,
                    parseQS: () => ot,
                    parseQueryStringParameters: () => j,
                    parseSizesInput: () => x,
                    parseUrl: () => at,
                    pick: () => rt,
                    prefixLog: () => X,
                    replaceAuctionPrice: () => We,
                    replaceClickThrough: () => Pe,
                    replaceMacros: () => qe,
                    safeJSONEncode: () => ft,
                    safeJSONParse: () => gt,
                    setOnAny: () => Et,
                    setScriptAttributes: () => bt,
                    shuffle: () => Ue,
                    sizeTupleToRtbSize: () => P,
                    sizeTupleToSizeString: () => q,
                    sizesToSizeTuples: () => N,
                    sortByHighestCpm: () => De,
                    timestamp: () => Me,
                    transformAdServerTargetingObj: () => $,
                    triggerNurlWithCpm: () => It,
                    triggerPixel: () => ye,
                    uniques: () => we,
                    unsupportedBidderMessage: () => et,
                    waitForElementToLoad: () => be
                });
                var r = n(43272),
                    i = n(45751),
                    o = n(15901),
                    s = n(78969),
                    a = n(25555),
                    d = n(7873),
                    c = n(70433),
                    l = n(63172),
                    u = "String",
                    g = "Function",
                    f = "Number",
                    p = "Object",
                    m = "Boolean",
                    h = Object.prototype.toString;
                let b, y = Boolean(window.console),
                    v = Boolean(y && window.console.log),
                    E = Boolean(y && window.console.info),
                    A = Boolean(y && window.console.warn),
                    I = Boolean(y && window.console.error);
                const T = (0, d.m)();

                function w(e) {
                    b = e
                }

                function C() {
                    null != b && b(...arguments)
                }
                const S = {
                    checkCookieSupport: ze,
                    createTrackPixelIframeHtml: Te,
                    getWindowSelf: L,
                    getWindowTop: F,
                    canAccessWindowTop: H,
                    getWindowLocation: z,
                    insertUserSyncIframe: Ee,
                    insertElement: he,
                    isFn: oe,
                    triggerPixel: ye,
                    logError: Y,
                    logWarn: J,
                    logMessage: V,
                    logInfo: K,
                    parseQS: ot,
                    formatQS: st,
                    deepEqual: ct
                };
                let O = {};

                function B() {
                    return O
                }
                var R, k = (R = 0, function() {
                    return ++R
                });

                function D() {
                    return k() + Math.random().toString(16).substr(2)
                }

                function U(e) {
                    return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, U)
                }

                function _(e, t) {
                    return t ? .[e] || ""
                }

                function j(e) {
                    let t = "";
                    for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
                    return t = t.replace(/&$/, ""), t
                }

                function $(e) {
                    return e && Object.getOwnPropertyNames(e).length > 0 ? Object.keys(e).map((t => `${t}=${encodeURIComponent(e[t])}`)).join("&") : ""
                }

                function N(e) {
                    return "string" == typeof e ? e.split(/\s*,\s*/).map((e => e.match(/^(\d+)x(\d+)$/i))).filter((e => e)).map((e => {
                        let [t, n, r] = e;
                        return [parseInt(n, 10), parseInt(r, 10)]
                    })) : Array.isArray(e) ? G(e) ? [e] : e.filter(G) : []
                }

                function x(e) {
                    return N(e).map(q)
                }

                function q(e) {
                    return e[0] + "x" + e[1]
                }

                function W(e) {
                    if (G(e)) return q(e)
                }

                function P(e) {
                    return {
                        w: e[0],
                        h: e[1]
                    }
                }

                function M(e) {
                    if (G(e)) return P(e)
                }

                function G(e) {
                    return ae(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
                }

                function F() {
                    return window.top
                }

                function L() {
                    return window.self
                }

                function z() {
                    return window.location
                }

                function H() {
                    try {
                        if (S.getWindowTop().location.href) return !0
                    } catch (e) {
                        return !1
                    }
                }

                function V() {
                    ee() && v && console.log.apply(console, Q(arguments, "MESSAGE:"))
                }

                function K() {
                    ee() && E && console.info.apply(console, Q(arguments, "INFO:"))
                }

                function J() {
                    ee() && A && console.warn.apply(console, Q(arguments, "WARNING:")), C(s.qY.AUCTION_DEBUG, {
                        type: "WARNING",
                        arguments
                    })
                }

                function Y() {
                    ee() && I && console.error.apply(console, Q(arguments, "ERROR:")), C(s.qY.AUCTION_DEBUG, {
                        type: "ERROR",
                        arguments
                    })
                }

                function X(e) {
                    function t(t) {
                        return function() {
                            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            t(e, ...r)
                        }
                    }
                    return {
                        logError: t(Y),
                        logWarn: t(J),
                        logMessage: t(V),
                        logInfo: t(K)
                    }
                }

                function Q(e, t) {
                    e = [].slice.call(e);
                    let n = r.$W.getCurrentBidder();
                    return t && e.unshift(t), n && e.unshift(i("#aaa")), e.unshift(i("#3b88c3")), e.unshift("%cPrebid" + (n ? `%c${n}` : "")), e;

                    function i(e) {
                        return `display: inline-block; color: #fff; background: ${e}; padding: 1px 4px; border-radius: 3px;`
                    }
                }

                function Z() {
                    return v
                }

                function ee() {
                    return !!r.$W.getConfig("debug")
                }
                const te = (() => {
                    const e = {
                        border: "0px",
                        hspace: "0",
                        vspace: "0",
                        marginWidth: "0",
                        marginHeight: "0",
                        scrolling: "no",
                        frameBorder: "0",
                        allowtransparency: "true"
                    };
                    return function(t, n) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        const i = t.createElement("iframe");
                        return Object.assign(i, Object.assign({}, e, n)), Object.assign(i.style, r), i
                    }
                })();

                function ne() {
                    return te(document, {
                        id: D(),
                        width: 0,
                        height: 0,
                        src: "about:blank"
                    }, {
                        display: "none",
                        height: "0px",
                        width: "0px",
                        border: "0px"
                    })
                }

                function re(e) {
                    return ot(z().search)[e] || ""
                }

                function ie(e, t) {
                    return h.call(e) === "[object " + t + "]"
                }

                function oe(e) {
                    return ie(e, g)
                }

                function se(e) {
                    return ie(e, u)
                }
                const ae = Array.isArray.bind(Array);

                function de(e) {
                    return ie(e, f)
                }

                function ce(e) {
                    return ie(e, p)
                }

                function le(e) {
                    return ie(e, m)
                }

                function ue(e) {
                    return !e || (ae(e) || se(e) ? !(e.length > 0) : Object.keys(e).length <= 0)
                }

                function ge(e) {
                    return se(e) && (!e || 0 === e.length)
                }

                function fe(e, t) {
                    if (oe(e ? .forEach)) return e.forEach(t, this);
                    Object.entries(e || {}).forEach((e => {
                        let [n, r] = e;
                        return t.call(this, r, n)
                    }))
                }

                function pe(e, t) {
                    return oe(e ? .includes) && e.includes(t)
                }

                function me(e, t) {
                    return oe(e ? .map) ? e.map(t) : Object.entries(e || {}).map((n => {
                        let [r, i] = n;
                        return t(i, r, e)
                    }))
                }

                function he(e, t, n, r) {
                    let i;
                    t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
                    try {
                        if (i = i.length ? i : t.getElementsByTagName("body"), i.length) {
                            i = i[0];
                            let t = r ? null : i.firstChild;
                            return i.insertBefore(e, t)
                        }
                    } catch (e) {}
                }

                function be(e, t) {
                    let n = null;
                    return new a.k((r => {
                        const i = function() {
                            e.removeEventListener("load", i), e.removeEventListener("error", i), null != n && window.clearTimeout(n), r()
                        };
                        e.addEventListener("load", i), e.addEventListener("error", i), null != t && (n = window.setTimeout(i, t))
                    }))
                }

                function ye(e, t, n) {
                    const r = new Image;
                    t && S.isFn(t) && be(r, n).then(t), r.src = e
                }

                function ve(e) {
                    if (!e) return;
                    const t = ne();
                    var n;
                    S.insertElement(t, document, "body"), (n = t.contentWindow.document).open(), n.write(e), n.close()
                }

                function Ee(e, t, n) {
                    let r = S.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                        i = document.createElement("div");
                    i.innerHTML = r;
                    let o = i.firstChild;
                    t && S.isFn(t) && be(o, n).then(t), S.insertElement(o, document, "html", !0)
                }

                function Ae(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : encodeURI;
                    if (!e) return "";
                    let n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                    return n += '<img src="' + t(e) + '"></div>', n
                }

                function Ie(e) {
                    return Array.from(e.matchAll(/\$({[^}]+})/g)).map((e => e[1])).reduce(((e, t) => e.replace("$" + encodeURIComponent(t), "$" + t)), encodeURI(e))
                }

                function Te(e) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return e ? ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t && (t = `sandbox="${t}"`), `<iframe ${t} id="${D()}"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="${e}">\n    </iframe>`) : ""
                }

                function we(e, t, n) {
                    return n.indexOf(e) === t
                }

                function Ce(e, t) {
                    return e.concat(t)
                }

                function Se(e, t) {
                    if (e) return t.flatMap((e => e.bids)).find((t => ["bidId", "adId", "bid_id"].some((n => t[n] === e))))
                }

                function Oe(e, t) {
                    return e[t]
                }

                function Be() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.adUnits).map((e => e.bids.map((e => e.bidder)).reduce(Ce, []))).reduce(Ce, []).filter((e => void 0 !== e)).filter(we)
                }

                function Re() {
                    if (window.googletag && oe(window.googletag.pubads) && oe(window.googletag.pubads().getSlots)) return !0
                }

                function ke() {
                    if (window.apntag && oe(window.apntag.getTag)) return !0
                }
                const De = (e, t) => t.cpm - e.cpm;

                function Ue(e) {
                    let t = e.length;
                    for (; t > 0;) {
                        let n = Math.floor(Math.random() * t);
                        t--;
                        let r = e[t];
                        e[t] = e[n], e[n] = r
                    }
                    return e
                }

                function _e(e) {
                    return (0, i.Q)(e) || {}
                }

                function je() {
                    try {
                        return S.getWindowSelf() !== S.getWindowTop()
                    } catch (e) {
                        return !0
                    }
                }

                function $e() {
                    if (!je()) return !1;
                    const e = S.getWindowSelf();
                    return !(!e.$sf || !e.$sf.ext)
                }

                function Ne() {
                    try {
                        const e = L();
                        return "function" == typeof e.$sf.ext.geom ? e.$sf.ext.geom() : void 0
                    } catch (e) {
                        return void Y("Error getting SafeFrame geometry", e)
                    }
                }

                function xe() {
                    return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
                }

                function qe(e, t) {
                    if (e) return Object.entries(t).reduce(((e, t) => {
                        let [n, r] = t;
                        return e.replace(new RegExp("\\$\\{" + n + "\\}", "g"), r || "")
                    }), e)
                }

                function We(e, t) {
                    return qe(e, {
                        AUCTION_PRICE: t
                    })
                }

                function Pe(e, t) {
                    if (e && t && "string" == typeof t) return e.replace(/\${CLICKTHROUGH}/g, t)
                }

                function Me() {
                    return (new Date).getTime()
                }

                function Ge() {
                    return window.performance && window.performance.now && window.performance.now() || 0
                }

                function Fe(e) {
                    let t = -1;
                    const n = (e = e || L()).performance;
                    if (e.performance ? .timing && e.performance.timing.navigationStart > 0) {
                        const e = n.timing.domLoading - n.timing.navigationStart;
                        e > 0 && (t = e)
                    }
                    return t
                }

                function Le() {
                    return !1 !== r.$W.getConfig("deviceAccess")
                }

                function ze() {
                    if (window.navigator.cookieEnabled || document.cookie.length) return !0
                }

                function He(e, t) {
                    if (t < 1) throw new Error(`numRequiredCalls must be a positive number. Got ${t}`);
                    let n = 0;
                    return function() {
                        n++, n === t && e.apply(this, arguments)
                    }
                }

                function Ve(e, t) {
                    return e.reduce((function(e, n) {
                        return (e[n[t]] = e[n[t]] || []).push(n), e
                    }), {})
                }

                function Ke(e, t) {
                    return t.filter((t => e[t])).reduce(((t, n) => Object.assign(t, {
                        [n]: e[n]
                    })), {})
                }

                function Je(e) {
                    const t = ["banner", "native", "video"],
                        n = ["instream", "outstream", "adpod"];
                    return !!Object.keys(e).every((e => (0, o.mK)(t, e))) && (!e.video || !e.video.context || (0, o.mK)(n, e.video.context))
                }

                function Ye(e, t, n) {
                    return e.filter((e => e.code === t)).flatMap((e => e.bids)).filter((e => e.bidder === n)).map((e => e.params || {}))
                }

                function Xe() {
                    return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
                }
                const Qe = (e, t) => e.getAdUnitPath() === t || e.getSlotElementId() === t;

                function Ze(e) {
                    return t => Qe(e, t)
                }

                function et(e, t) {
                    const n = Object.keys(e.mediaTypes || {
                        banner: "banner"
                    }).join(", ");
                    return `\n    ${e.code} is a ${n} ad unit\n    containing bidders that don't support ${n}: ${t}.\n    This bidder won't fetch demand.\n  `
                }
                const tt = Number.isInteger.bind(Number);

                function nt(e) {
                    return Object.fromEntries(Object.entries(e).filter((e => {
                        let [t, n] = e;
                        return void 0 !== n
                    })))
                }

                function rt(e, t) {
                    return "object" != typeof e ? {} : t.reduce(((n, r, i) => {
                        if ("function" == typeof r) return n;
                        let o = r,
                            s = r.match(/^(.+?)\sas\s(.+?)$/i);
                        s && (r = s[1], o = s[2]);
                        let a = e[r];
                        return "function" == typeof t[i + 1] && (a = t[i + 1](a, n)), void 0 !== a && (n[o] = a), n
                    }), {})
                }

                function it(e, t) {
                    return ae(e) && (!t || e.length === t) && e.every((e => tt(e)))
                }

                function ot(e) {
                    return e ? e.replace(/^\?/, "").split("&").reduce(((e, t) => {
                        let [n, r] = t.split("=");
                        return /\[\]$/.test(n) ? (n = n.replace("[]", ""), e[n] = e[n] || [], e[n].push(r)) : e[n] = r || "", e
                    }), {}) : {}
                }

                function st(e) {
                    return Object.keys(e).map((t => Array.isArray(e[t]) ? e[t].map((e => `${t}[]=${e}`)).join("&") : `${t}=${e[t]}`)).join("&")
                }

                function at(e, t) {
                    let n = document.createElement("a");
                    t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
                    let r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
                    return {
                        href: n.href,
                        protocol: (n.protocol || "").replace(/:$/, ""),
                        hostname: n.hostname,
                        port: +n.port,
                        pathname: n.pathname.replace(/^(?!\/)/, "/"),
                        search: r ? n.search : S.parseQS(n.search || ""),
                        hash: (n.hash || "").replace(/^#/, ""),
                        host: n.host || window.location.host
                    }
                }

                function dt(e) {
                    return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? `:${e.port}` : "")) + (e.pathname || "") + (e.search ? `?${S.formatQS(e.search||"")}` : "") + (e.hash ? `#${e.hash}` : "")
                }

                function ct(e, t) {
                    let {
                        checkTypes: n = !1
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (e === t) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t || n && e.constructor !== t.constructor) return !1; {
                        const r = Object.keys(e);
                        if (r.length !== Object.keys(t).length) return !1;
                        for (let i of r) {
                            if (!t.hasOwnProperty(i)) return !1;
                            if (!ct(e[i], t[i], {
                                    checkTypes: n
                                })) return !1
                        }
                        return !0
                    }
                }

                function lt(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    if (!n.length) return e;
                    const i = n.shift();
                    if (ce(e) && ce(i))
                        for (const t in i) ce(i[t]) ? (e[t] || Object.assign(e, {
                            [t]: {}
                        }), lt(e[t], i[t])) : ae(i[t]) ? e[t] ? ae(e[t]) && i[t].forEach((n => {
                            let r = 1;
                            for (let i = 0; i < e[t].length; i++)
                                if (ct(e[t][i], n)) {
                                    r = 0;
                                    break
                                }
                            r && e[t].push(n)
                        })) : Object.assign(e, {
                            [t]: [...i[t]]
                        }) : Object.assign(e, {
                            [t]: i[t]
                        });
                    return lt(e, ...n)
                }

                function ut(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = function(e, t) {
                            if (oe(Math.imul)) return Math.imul(e, t);
                            var n = (4194303 & e) * (t |= 0);
                            return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n
                        },
                        r = 3735928559 ^ t,
                        i = 1103547991 ^ t;
                    for (let t, o = 0; o < e.length; o++) t = e.charCodeAt(o), r = n(r ^ t, 2654435761), i = n(i ^ t, 1597334677);
                    return r = n(r ^ r >>> 16, 2246822507) ^ n(i ^ i >>> 13, 3266489909), i = n(i ^ i >>> 16, 2246822507) ^ n(r ^ r >>> 13, 3266489909), (4294967296 * (2097151 & i) + (r >>> 0)).toString()
                }

                function gt(e) {
                    try {
                        return JSON.parse(e)
                    } catch (e) {}
                }

                function ft(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return ""
                    }
                }

                function pt(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                        return e
                    };
                    const n = new Map,
                        r = function() {
                            const r = t.apply(this, arguments);
                            return n.has(r) || n.set(r, e.apply(this, arguments)), n.get(r)
                        };
                    return r.clear = n.clear.bind(n), r
                }

                function mt() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "d";
                    if (["m", "d"].indexOf(t) < 0) return Date.now();
                    const n = e / ("m" === t ? 1440 : 1);
                    return Date.now() + (e && e > 0 ? 864e5 * n : 0)
                }

                function ht(e) {
                    return Object.keys(e).map((t => ({
                        [t]: e[t]
                    })))
                }

                function bt(e, t) {
                    Object.entries(t).forEach((t => {
                        let [n, r] = t;
                        return e.setAttribute(n, r)
                    }))
                }

                function yt(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e,
                        r = 0,
                        i = e.length && e.length - 1;
                    const o = n(t);
                    for (; i - r > 1;) {
                        const t = r + Math.round((i - r) / 2);
                        o > n(e[t]) ? r = t : i = t
                    }
                    for (; e.length > r && o > n(e[r]);) r++;
                    return r
                }

                function vt(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
                    for (const n in e) {
                        const r = e[n],
                            i = typeof r;
                        if (void 0 === r || "function" === i || "symbol" === i || r instanceof RegExp || r instanceof Map || r instanceof Set || r instanceof Date || null !== r && "object" === i && r.hasOwnProperty("toJSON")) return !0;
                        if (null !== r && "object" === i && r.constructor === Object) {
                            if (t.has(r)) return !0;
                            if (t.add(r), vt(r, t)) return !0
                        }
                    }
                    return !1
                }

                function Et(e, t) {
                    for (let n, r = 0; r < e.length; r++)
                        if (n = (0, c.A)(e[r], t), n) return n
                }

                function At(e) {
                    let t = null;
                    try {
                        let n = /[-\w]+\.([-\w]+|[-\w]{3,}|[-\w]{1,3}\.[-\w]{2})$/i.exec(e);
                        if (null != n && n.length > 0) {
                            t = n[0];
                            for (let e = 1; e < n.length; e++) n[e].length > t.length && (t = n[e])
                        }
                    } catch (e) {
                        t = null
                    }
                    return t
                }

                function It(e, t) {
                    se(e.nurl) && "" !== e.nurl && (e.nurl = e.nurl.replace(/\${AUCTION_PRICE}/, t), ye(e.nurl))
                }
            },
            57176: (e, t, n) => {
                n.d(t, {
                    y: () => s
                });
                var r = n(67314),
                    i = n(12693),
                    o = n(91069);

                function s(e, t, n) {
                    let {
                        index: s = r.n.index,
                        bs: a = i.u
                    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    n = n || s.getBidRequest(t);
                    const d = t ? .adapterCode,
                        c = t ? .bidderCode || n ? .bidder,
                        l = a.get(t ? .adapterCode, "adjustAlternateBids"),
                        u = a.getOwn(c, "bidCpmAdjustment") || a.get(l ? d : c, "bidCpmAdjustment");
                    if (u && "function" == typeof u) try {
                        return u(e, Object.assign({}, t), n)
                    } catch (e) {
                        (0, o.logError)("Error during bid adjustment", e)
                    }
                    return e
                }
            },
            82621: (e, t, n) => {
                function r(e) {
                    return !e ? .gdprApplies || !0 === e ? .vendorData ? .purpose ? .consents ? .[1]
                }
                n.d(t, {
                    C: () => r
                })
            },
            16894: (e, t, n) => {
                n.d(t, {
                    Ak: () => h,
                    BO: () => f,
                    K7: () => p,
                    NL: () => b
                });
                var r = n(43272);
                const i = "performanceMetrics",
                    o = window.performance && window.performance.now ? () => window.performance.now() : () => Date.now(),
                    s = new WeakMap;

                function a() {
                    let {
                        now: e = o,
                        mkNode: t = l,
                        mkTimer: n = c,
                        mkRenamer: r = (e => e),
                        nodes: i = s
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return function() {
                        return function o(s) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => ({
                                forEach(t) {
                                    t(e)
                                }
                            });
                            a = r(a);
                            const d = (c = "timestamps", function(e) {
                                return s.dfWalk({
                                    visit(t, n) {
                                        const r = n[c];
                                        if (r.hasOwnProperty(e)) return r[e]
                                    }
                                })
                            });
                            var c;

                            function l(e, t) {
                                const n = a(e);
                                s.dfWalk({
                                    follow: (e, t) => t.propagate && (!e || !e.stopPropagation),
                                    visit(e, r) {
                                        n.forEach((n => {
                                            null == e ? r.metrics[n] = t : (r.groups.hasOwnProperty(n) || (r.groups[n] = []), r.groups[n].push(t))
                                        }))
                                    }
                                })
                            }

                            function u(t) {
                                return n(e, (e => l(t, e)))
                            }

                            function g() {
                                let e = {};
                                return s.dfWalk({
                                    visit(t, n) {
                                        e = Object.assign({}, !t || t.includeGroups ? n.groups : null, n.metrics, e)
                                    }
                                }), e
                            }
                            const f = {
                                startTiming: u,
                                measureTime: function(e, t) {
                                    return u(e).stopAfter(t)()
                                },
                                measureHookTime: function(e, t, n) {
                                    const r = u(e);
                                    return n(function(e) {
                                        const t = r.stopBefore(e);
                                        return t.bail = e.bail && r.stopBefore(e.bail), t.stopTiming = r, t.untimed = e, t
                                    }(t))
                                },
                                checkpoint: function(t) {
                                    s.timestamps[t] = e()
                                },
                                timeSince: function(t, n) {
                                    const r = d(t),
                                        i = null != r ? e() - r : null;
                                    return null != n && l(n, i), i
                                },
                                timeBetween: function(e, t, n) {
                                    const r = d(e),
                                        i = d(t),
                                        o = null != r && null != i ? i - r : null;
                                    return null != n && l(n, o), o
                                },
                                setMetric: l,
                                getMetrics: g,
                                fork: function() {
                                    let {
                                        propagate: e = !0,
                                        stopPropagation: n = !1,
                                        includeGroups: r = !1
                                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return o(t([
                                        [s, {
                                            propagate: e,
                                            stopPropagation: n,
                                            includeGroups: r
                                        }]
                                    ]), a)
                                },
                                join: function(e) {
                                    let {
                                        propagate: t = !0,
                                        stopPropagation: n = !1,
                                        includeGroups: r = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    const o = i.get(e);
                                    null != o && o.addParent(s, {
                                        propagate: t,
                                        stopPropagation: n,
                                        includeGroups: r
                                    })
                                },
                                newMetrics: function() {
                                    return o(s.newSibling(), a)
                                },
                                renameWith: function(e) {
                                    return o(s, e)
                                },
                                toJSON: () => g()
                            };
                            return i.set(f, s), f
                        }(t([]))
                    }
                }

                function d(e, t, n) {
                    return function() {
                        t && t();
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            n && n()
                        }
                    }
                }

                function c(e, t) {
                    const n = e();
                    let r = !1;

                    function i() {
                        r || (t(e() - n), r = !0)
                    }
                    return i.stopBefore = e => d(e, i), i.stopAfter = e => d(e, null, i), i
                }

                function l(e) {
                    return {
                        metrics: {},
                        timestamps: {},
                        groups: {},
                        addParent(t, n) {
                            e.push([t, n])
                        },
                        newSibling: () => l(e.slice()),
                        dfWalk() {
                            let t, {
                                visit: n,
                                follow: r = (() => !0),
                                visited: i = new Set,
                                inEdge: o
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!i.has(this)) {
                                if (i.add(this), t = n(o, this), null != t) return t;
                                for (const [s, a] of e)
                                    if (r(o, a) && (t = s.dfWalk({
                                            visit: n,
                                            follow: r,
                                            visited: i,
                                            inEdge: a
                                        }), null != t)) return t
                            }
                        }
                    }
                }
                const u = (() => {
                    const e = function() {},
                        t = () => ({}),
                        n = {
                            forEach: e
                        },
                        r = () => null;
                    r.stopBefore = e => e, r.stopAfter = e => e;
                    const i = Object.defineProperties({
                        dfWalk: e,
                        newSibling: () => i,
                        addParent: e
                    }, Object.fromEntries(["metrics", "timestamps", "groups"].map((e => [e, {
                        get: t
                    }]))));
                    return a({
                        now: () => 0,
                        mkNode: () => i,
                        mkRenamer: () => () => n,
                        mkTimer: () => r,
                        nodes: {
                            get: e,
                            set: e
                        }
                    })()
                })();
                let g = !0;

                function f(e) {
                    return g && e || u
                }
                r.$W.getConfig(i, (e => {
                    g = !!e[i]
                }));
                const p = (() => {
                    const e = a();
                    return function() {
                        return g ? e() : u
                    }
                })();

                function m(e, t) {
                    return function(n, r) {
                        return function(i) {
                            for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
                            const d = this;
                            return f(t.apply(d, s)).measureHookTime(e + n, i, (function(e) {
                                return r.call(d, e, ...s)
                            }))
                        }
                    }
                }
                const h = m("requestBids.", (e => e.metrics)),
                    b = m("addBidResponse.", ((e, t) => t.metrics))
            },
            25555: (e, t, n) => {
                n.d(t, {
                    k: () => o,
                    v: () => s
                });
                const r = 0,
                    i = 1;
                class o {#
                    d;#
                    c;
                    static timeout() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return new o((t => {
                            0 === e ? t() : setTimeout(t, e)
                        }))
                    }
                    constructor(e) {
                        if ("function" != typeof e) throw new Error("resolver not a function");
                        const t = [],
                            n = [];
                        let [o, s] = [r, i].map((e => function(i) {
                            if (e === r && "function" == typeof i ? .then) i.then(o, s);
                            else if (!t.length)
                                for (t.push(e, i); n.length;) n.shift()()
                        }));
                        try {
                            e(o, s)
                        } catch (e) {
                            s(e)
                        }
                        this.#d = t, this.#c = n
                    }
                    then(e, t) {
                        const n = this.#d;
                        return new this.constructor(((i, o) => {
                            const s = () => {
                                let s = n[1],
                                    [a, d] = n[0] === r ? [e, i] : [t, o];
                                if ("function" == typeof a) {
                                    try {
                                        s = a(s)
                                    } catch (e) {
                                        return void o(e)
                                    }
                                    d = i
                                }
                                d(s)
                            };
                            n.length ? s() : this.#c.push(s)
                        }))
                    } catch (e) {
                        return this.then(null, e)
                    } finally(e) {
                        let t;
                        return this.then((n => (t = n, e())), (n => (t = this.constructor.reject(n), e()))).then((() => t))
                    }
                    static# l(e, t, n) {
                        let r = e.length;

                        function i() {
                            t.apply(this, arguments), --r <= 0 && n && n()
                        }
                        0 === e.length && n ? n() : e.forEach(((e, t) => this.resolve(e).then((e => i(!0, e, t)), (e => i(!1, e, t)))))
                    }
                    static race(e) {
                        return new this(((t, n) => {
                            this.#l(e, ((e, r) => e ? t(r) : n(r)))
                        }))
                    }
                    static all(e) {
                        return new this(((t, n) => {
                            let r = [];
                            this.#l(e, ((e, t, i) => e ? r[i] = t : n(t)), (() => t(r)))
                        }))
                    }
                    static allSettled(e) {
                        return new this((t => {
                            let n = [];
                            this.#l(e, ((e, t, r) => n[r] = e ? {
                                status: "fulfilled",
                                value: t
                            } : {
                                status: "rejected",
                                reason: t
                            }), (() => t(n)))
                        }))
                    }
                    static resolve(e) {
                        return new this((t => t(e)))
                    }
                    static reject(e) {
                        return new this(((t, n) => n(e)))
                    }
                }

                function s() {
                    let e, t, {
                        promiseFactory: n = (e => new o(e))
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

                    function r(e) {
                        return t => e(t)
                    }
                    return {
                        promise: n(((n, r) => {
                            e = n, t = r
                        })),
                        resolve: r(e),
                        reject: r(t)
                    }
                }
            },
            12713: (e, t, n) => {
                function r(e, t) {
                    return e === t ? 0 : e < t ? -1 : 1
                }

                function i() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e => e;
                    return (t, n) => r(e(t), e(n))
                }

                function o() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                    return (t, n) => -e(t, n) || 0
                }

                function s() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(e, n) {
                        for (const r of t) {
                            const t = r(e, n);
                            if (0 !== t) return t
                        }
                        return 0
                    }
                }

                function a() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                    return (t, n) => e(n, t) < 0 ? n : t
                }

                function d() {
                    return a(o(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r))
                }
                n.d(t, {
                    Bp: () => a,
                    Bq: () => g,
                    NV: () => i,
                    Ph: () => d,
                    Vk: () => u
                });
                const c = i((e => e.cpm)),
                    l = i((e => e.responseTimestamp)),
                    u = d(s(c, o(i((e => e.timeToRespond))))),
                    g = d(s(c, o(l)));
                d(s(c, l))
            },
            76853: (e, t, n) => {
                n.d(t, {
                    H: () => l
                });
                var r = n(25555),
                    i = n(91069);
                let o = null,
                    s = 0,
                    a = [];

                function d() {
                    document.hidden ? o = Date.now() : (s += Date.now() - (o ? ? 0), o = null, a.forEach((e => {
                        let {
                            callback: t,
                            startTime: n,
                            setTimerId: r
                        } = e;
                        return r(c(t, s - n)())
                    })), a = [])
                }

                function c(e, t) {
                    const n = s;
                    let r = setTimeout((() => {
                        s === n && null == o ? e() : null != o ? a.push({
                            callback: e,
                            startTime: n,
                            setTimerId(e) {
                                r = e
                            }
                        }) : r = c(e, s - n)()
                    }), t);
                    return () => r
                }

                function l() {
                    let {
                        startTime: e = i.timestamp,
                        ttl: t = (() => null),
                        monotonic: n = !1,
                        slack: o = 5e3
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const s = new Map,
                        a = [],
                        d = [],
                        l = n ? e => d.push(e) : e => d.splice((0, i.binarySearch)(d, e, (e => e.expiry)), 0, e);
                    let u, g;

                    function f() {
                        if (g && clearTimeout(g), d.length > 0) {
                            const e = (0, i.timestamp)();
                            u = Math.max(e, d[0].expiry + o), g = c((() => {
                                const e = (0, i.timestamp)();
                                let t = 0;
                                for (const n of d) {
                                    if (n.expiry > e) break;
                                    a.forEach((e => {
                                        try {
                                            e(n.item)
                                        } catch (e) {
                                            (0, i.logError)(e)
                                        }
                                    })), s.delete(n.item), t++
                                }
                                d.splice(0, t), g = null, f()
                            }), u - e)
                        } else g = null
                    }

                    function p(n) {
                        const i = {},
                            s = m;
                        let a;
                        const [d, c] = Object.entries({
                            start: e,
                            delta: t
                        }).map((e => {
                            let t, [d, c] = e;
                            return function() {
                                const e = t = {};
                                r.k.resolve(c(n)).then((n => {
                                    e === t && (i[d] = n, s === m && null != i.start && null != i.delta && (a = i.start + i.delta, l(p), (null == g || u > a + o) && f()))
                                }))
                            }
                        })), p = {
                            item: n,
                            refresh: c,
                            get expiry() {
                                return a
                            }
                        };
                        return d(), c(), p
                    }
                    let m = {};
                    return {
                        [Symbol.iterator]: () => s.keys(),
                        add(e) {
                            !s.has(e) && s.set(e, p(e))
                        },
                        clear() {
                            d.length = 0, f(), s.clear(), m = {}
                        },
                        toArray: () => Array.from(s.keys()),
                        refresh() {
                            d.length = 0, f();
                            for (const e of s.values()) e.refresh()
                        },
                        onExpiry: e => (a.push(e), () => {
                            const t = a.indexOf(e);
                            t >= 0 && a.splice(t, 1)
                        })
                    }
                }
                document.addEventListener("visibilitychange", d)
            },
            63895: (e, t, n) => {
                n.d(t, {
                    E2: () => f,
                    H6: () => a,
                    V0: () => l,
                    Zy: () => c,
                    aP: () => u,
                    mn: () => d,
                    vk: () => g
                });
                var r = n(91069),
                    i = n(43272),
                    o = n(16833),
                    s = n(67314);
                const a = "outstream",
                    d = "instream",
                    c = new Map([
                        ["mimes", e => Array.isArray(e) && e.length > 0 && e.every((e => "string" == typeof e))],
                        ["minduration", r.isInteger],
                        ["maxduration", r.isInteger],
                        ["startdelay", r.isInteger],
                        ["maxseq", r.isInteger],
                        ["poddur", r.isInteger],
                        ["protocols", r.isArrayOfNums],
                        ["w", r.isInteger],
                        ["h", r.isInteger],
                        ["podid", r.isStr],
                        ["podseq", r.isInteger],
                        ["rqddurs", r.isArrayOfNums],
                        ["placement", r.isInteger],
                        ["plcmt", r.isInteger],
                        ["linearity", r.isInteger],
                        ["skip", e => [1, 0].includes(e)],
                        ["skipmin", r.isInteger],
                        ["skipafter", r.isInteger],
                        ["sequence", r.isInteger],
                        ["slotinpod", r.isInteger],
                        ["mincpmpersec", r.isNumber],
                        ["battr", r.isArrayOfNums],
                        ["maxextended", r.isInteger],
                        ["minbitrate", r.isInteger],
                        ["maxbitrate", r.isInteger],
                        ["boxingallowed", r.isInteger],
                        ["playbackmethod", r.isArrayOfNums],
                        ["playbackend", r.isInteger],
                        ["delivery", r.isArrayOfNums],
                        ["pos", r.isInteger],
                        ["api", r.isArrayOfNums],
                        ["companiontype", r.isArrayOfNums],
                        ["poddedupe", r.isArrayOfNums]
                    ]);

                function l(e) {
                    const t = e ? .mediaTypes ? .video;
                    null != t && null == t.plcmt && (t.context === a || [2, 3, 4].includes(t.placement) ? t.plcmt = 4 : t.context !== a && [2, 6].includes(t.playbackmethod) && (t.plcmt = 2))
                }

                function u(e, t) {
                    const n = e ? .mediaTypes ? .video;
                    (0, r.isPlainObject)(n) ? null != n && Object.entries(n).forEach((i => {
                        let [o, s] = i;
                        if (!c.has(o)) return;
                        c.get(o)(s) || ("function" == typeof t ? t(o, s, e) : (delete n[o], (0, r.logWarn)(`Invalid prop in adUnit "${e.code}": Invalid value for mediaTypes.video.${o} ORTB property. The property has been removed.`)))
                    })): (0, r.logWarn)("validateOrtbVideoFields: videoParams must be an object.")
                }

                function g(e) {
                    let {
                        index: t = s.n.index
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = t.getMediaTypes(e) ? .video,
                        r = n && n ? .context,
                        i = n && n ? .useCacheKey,
                        o = t.getAdUnit(e);
                    return f(e, o, n, r, i)
                }
                const f = (0, o.A_)("sync", (function(e, t, n, o, s) {
                    return n && (s || o !== a) ? i.$W.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, r.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : !(o === a && !s) || !!(e.renderer || t && t.renderer || n.renderer)
                }), "checkVideoBidSetup")
            },
            68693: (e, t, n) => {
                n.d(t, {
                    M_: () => l,
                    X5: () => m
                });
                var r = n(68044),
                    i = n(43272),
                    o = n(67314),
                    s = n(91069),
                    a = n(81657);
                const d = 15;

                function c(e) {
                    let {
                        index: t = o.n.index
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = e.vastXml ? e.vastXml : (r = e.vastUrl, s = e.vastImpUrl, `<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[${r}]]></VASTAdTagURI>\n        ${(s=s&&(Array.isArray(s)?s:[s]))?s.map((e=>`<Impression><![CDATA[${e}]]></Impression>`)).join(""):""}\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>`);
                    var r, s;
                    const a = t.getAuction(e);
                    let c = {
                        type: "xml",
                        value: n,
                        ttlseconds: Number(e.ttl) + d
                    };
                    return i.$W.getConfig("cache.vasttrack") && (c.bidder = e.bidder, c.bidid = e.requestId, c.aid = e.auctionId), null != a && (c.timestamp = a.getAuctionStart()), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (c.key = e.customCacheKey), c
                }

                function l(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.g4;
                    const o = {
                        puts: e.map(c)
                    };
                    n(i.$W.getConfig("cache.timeout"))(i.$W.getConfig("cache.url"), function(e) {
                        return {
                            success: function(t) {
                                let n;
                                try {
                                    n = JSON.parse(t).responses
                                } catch (t) {
                                    return void e(t, [])
                                }
                                n ? e(null, n) : e(new Error("The cache server didn't respond with a responses property."), [])
                            },
                            error: function(t, n) {
                                e(new Error(`Error storing video ad in the cache: ${t}: ${JSON.stringify(n)}`), [])
                            }
                        }
                    }(t), JSON.stringify(o), {
                        contentType: "text/plain",
                        withCredentials: !0
                    })
                }
                const u = {
                    store: l
                };

                function g(e) {
                    const t = e.map((e => e.bidResponse));
                    u.store(t, (function(n, r) {
                        var o;
                        n ? (o = n, (0, s.logError)(`Failed to save to the video cache: ${o}. Video bids will be discarded:`, t)) : e.length !== r.length ? (0, s.logError)(`expected ${e.length} cache IDs, got ${r.length} instead`) : r.forEach(((t, n) => {
                            const {
                                auctionInstance: r,
                                bidResponse: o,
                                afterBidAdded: d
                            } = e[n];
                            var c;
                            "" === t.uuid ? (0, s.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded.") : (o.videoCacheKey = t.uuid, o.vastUrl || (o.vastUrl = (c = o.videoCacheKey, `${i.$W.getConfig("cache.url")}?uuid=${c}`)), (0, a.v8)(r, o), d())
                        }))
                    }))
                }
                let f, p;
                i.$W.getConfig("cache", (e => {
                    f = "number" == typeof e.cache.batchSize && e.cache.batchSize > 0 ? e.cache.batchSize : 1, p = "number" == typeof e.cache.batchTimeout && e.cache.batchTimeout > 0 ? e.cache.batchTimeout : 0
                }));
                const m = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : setTimeout,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
                        n = [
                            []
                        ],
                        r = !1;
                    const i = e => e();
                    return function(o, s, a) {
                        const d = p > 0 ? e : i;
                        n[n.length - 1].length >= f && n.push([]), n[n.length - 1].push({
                            auctionInstance: o,
                            bidResponse: s,
                            afterBidAdded: a
                        }), r || (r = !0, d((() => {
                            n.forEach(t), n = [
                                []
                            ], r = !1
                        }), p))
                    }
                }()
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [51085], {
            34595: (s, d, e) => {
                e.d(d, {
                    G: () => n
                });
                const n = '(()=>{"use strict";window.render=function({ad:d,adUrl:e,width:i,height:r},{mkFrame:n},o){if(!d&&!e)throw{reason:"noAd",message:"Missing ad markup or URL"};{const s=o.document,t={width:i,height:r};e&&!d?t.src=e:t.srcdoc=d,s.body.appendChild(n(s,t))}}})();'
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [2630], {
            88910: (e, t, n) => {
                n.d(t, {
                    Ay: () => d
                });
                var l = n(78969),
                    s = n(68044),
                    a = n(91069),
                    i = n(75023);
                const r = {
                        ajax: s.RD
                    },
                    o = "endpoint",
                    c = "bundle",
                    p = Object.values(l.qY).filter((e => e !== l.qY.AUCTION_DEBUG));
                let u = 100;

                function d(e) {
                    let {
                        url: t,
                        analyticsType: n,
                        global: s,
                        handler: d
                    } = e;
                    const f = [];
                    let g, y, b = !1,
                        h = !0;
                    const v = (() => {
                        let e, t = !1;
                        const n = () => {
                            if (!t) {
                                t = !0;
                                try {
                                    let e = 0,
                                        t = 0;
                                    for (; f.length > 0;) {
                                        e++;
                                        const n = f.length;
                                        if (f.shift()(), f.length >= n ? t++ : t = 0, t >= 10) return (0, a.logError)("Detected probable infinite loop, discarding events", f), void(f.length = 0)
                                    }(0, a.logMessage)(`${y} analytics: processed ${e} events`)
                                } finally {
                                    t = !1
                                }
                            }
                        };
                        return function() {
                            null != e && (clearTimeout(e), e = null), 0 === u ? n() : e = setTimeout(n, u)
                        }
                    })();
                    return Object.defineProperties({
                        track: function(e) {
                            let {
                                eventType: n,
                                args: l
                            } = e;
                            this.getAdapterType() === c && window[s](d, n, l);
                            this.getAdapterType() === o && function(e) {
                                let {
                                    eventType: n,
                                    args: l,
                                    callback: s
                                } = e;
                                r.ajax(t, s, JSON.stringify({
                                    eventType: n,
                                    args: l
                                }))
                            }(...arguments)
                        },
                        enqueue: T,
                        enableAnalytics: A,
                        disableAnalytics: function() {
                            Object.entries(g || {}).forEach((e => {
                                let [t, n] = e;
                                i.off(t, n)
                            })), this.enableAnalytics = this._oldEnable ? this._oldEnable : A, b = !1
                        },
                        getAdapterType: () => n,
                        getGlobal: () => s,
                        getHandler: () => d,
                        getUrl: () => t
                    }, {
                        enabled: {
                            get: () => b
                        }
                    });

                    function T(e) {
                        let {
                            eventType: t,
                            args: n
                        } = e;
                        f.push((() => {
                            this.track({
                                eventType: t,
                                args: n
                            })
                        })), v()
                    }

                    function A(e) {
                        y = e ? .provider;
                        var t = this;
                        if (h = "object" != typeof e || "object" != typeof e.options || (void 0 === e.options.sampling || Math.random() < parseFloat(e.options.sampling)), h) {
                            const n = (() => {
                                const {
                                    includeEvents: t = p,
                                    excludeEvents: n = []
                                } = e || {};
                                return new Set(Object.values(l.qY).filter((e => t.includes(e))).filter((e => !n.includes(e))))
                            })();
                            i.getEvents().forEach((e => {
                                if (!e || !n.has(e.eventType)) return;
                                const {
                                    eventType: l,
                                    args: s
                                } = e;
                                T.call(t, {
                                    eventType: l,
                                    args: s
                                })
                            })), g = Object.fromEntries(Array.from(n).map((e => {
                                const t = t => this.enqueue({
                                    eventType: e,
                                    args: t
                                });
                                return i.on(e, t), [e, t]
                            })))
                        } else(0, a.logMessage)(`Analytics adapter for "${s}" disabled by sampling`);
                        this._oldEnable = this.enableAnalytics, this.enableAnalytics = function() {
                            return (0, a.logMessage)(`Analytics adapter for "${s}" already enabled, unnecessary call to \`enableAnalytics\`.`)
                        }, b = !0
                    }
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [33005], {
            51252: (t, n, o) => {
                o.d(n, {
                    Cn: () => w,
                    eu: () => r,
                    ho: () => f,
                    mw: () => a,
                    n9: () => u,
                    p: () => s,
                    ph: () => l
                });
                var e = o(73858),
                    g = o(15901),
                    d = o(91069),
                    i = o(70433);

                function a(t) {
                    return n => (0, d.compareCodeAndSlot)(n, t)
                }

                function l(t, n) {
                    if (!t || "string" != typeof t) return !1;
                    window.googletag = window.googletag || {
                        cmd: []
                    }, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push((() => {
                        window.googletag.pubads().setTargeting(t, n)
                    }))
                }

                function u(t) {
                    let n;
                    return (0, d.isGptPubadsDefined)() && (n = (0, g.I6)(window.googletag.pubads().getSlots(), a(t))), n
                }

                function s(t) {
                    const n = u(t);
                    return n ? {
                        gptSlot: n.getAdUnitPath(),
                        divId: n.getSlotElementId()
                    } : {}
                }
                const w = ["IAB_AUDIENCE_1_1", "IAB_CONTENT_2_2"];

                function r(t) {
                    return Object.entries({
                        [w[0]]: c(t, ["user.data"], 4),
                        [w[1]]: c(t, e.Dy.map((t => `${t}.content.data`)), 6)
                    }).map((t => {
                        let [n, o] = t;
                        return o.length ? {
                            taxonomy: n,
                            values: o
                        } : null
                    })).filter((t => t))
                }

                function c(t, n, o) {
                    return n.flatMap((n => (0, i.A)(t, n) || [])).filter((t => t.ext ? .segtax === o)).flatMap((t => t.segment ? .map((t => t.id)))).filter((t => t)).filter(d.uniques)
                }

                function f(t) {
                    ! function(t, n) {
                        const o = () => window.googletag.pubads().addEventListener(t, n);
                        (0, d.isGptPubadsDefined)() ? o(): (window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(o))
                    }("slotRenderEnded", t)
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [35759], {
            73978: (A, e, n) => {
                n.d(e, {
                    B: () => I,
                    h: () => i
                });
                var s = n(91069);

                function i() {
                    return (0, s.canAccessWindowTop)() ? (0, s.getWindowTop)() : (0, s.getWindowSelf)()
                }
                const I = function() {
                    const A = i();
                    return A.ADAGIO = A.ADAGIO || {}, A.ADAGIO.pageviewId = A.ADAGIO.pageviewId || (0, s.generateUUID)(), A.ADAGIO.adUnits = A.ADAGIO.adUnits || {}, A.ADAGIO.pbjsAdUnits = A.ADAGIO.pbjsAdUnits || [], A.ADAGIO.queue = A.ADAGIO.queue || [], A.ADAGIO.versions = A.ADAGIO.versions || {}, A.ADAGIO.versions.pbjs = "9.24.0", A.ADAGIO.windows = A.ADAGIO.windows || [], A.ADAGIO.isSafeFrameWindow = (0, s.isSafeFrameWindow)(), A.ADAGIO
                }()
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [97247], {
            28656: (r, e, a) => {
                a.d(e, {
                    D: () => o
                });
                var n = a(73858),
                    t = a(70433);
                const s = ["user.keywords"].concat(n.Dy.flatMap((r => ["keywords", "content.keywords"].map((e => `${r}.${e}`)))));

                function o(r) {
                    for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) a[n - 1] = arguments[n];
                    return function() {
                        const r = new Set;
                        for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
                        return a.filter((r => r)).flatMap((r => Array.isArray(r) ? r : r.split(","))).map((r => r.replace(/^\s*/, "").replace(/\s*$/, ""))).filter((r => r)).forEach((e => r.add(e))), Array.from(r.keys())
                    }(...s.map((e => (0, t.A)(r, e))), ...a)
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [44982], {
            29906: (e, l, s) => {
                function t(e, l) {
                    let s = [];
                    for (let t = 0; t < Math.ceil(e.length / l); t++) {
                        let h = t * l,
                            n = h + l;
                        s.push(e.slice(h, n))
                    }
                    return s
                }
                s.d(l, {
                    i: () => t
                })
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [95444], {
            554: (e, t, r) => {
                r.d(t, {
                    QF: () => f,
                    T_: () => g,
                    gg: () => l
                });
                var n = r(91069),
                    o = r(70433),
                    i = r(28656),
                    a = r(73858);
                const c = {
                        526: "1plusX",
                        527: "1plusX",
                        541: "captify_segments",
                        540: "perid"
                    },
                    s = ["user.data"].concat(a.Dy.map((e => `${e}.content.data`)));

                function d(e, t, r) {
                    return null == t ? r : (0, n.isStr)(t) ? t : (0, n.isNumber)(t) ? t.toString() : void(0, n.logWarn)("Unsuported type for param: " + e + " required type: String")
                }

                function l(e) {
                    return (0, n.isStr)(e) && "" !== e ? u(e.split(/\s*(?:,)\s*/)) : {}
                }

                function u(e) {
                    const t = {};
                    return e.forEach((e => {
                        if (-1 !== e.indexOf("=")) {
                            let r = e.split("="),
                                n = r[0],
                                o = r[1];
                            t.hasOwnProperty(n) ? t[n].push(o) : t[n] = [o]
                        } else t.hasOwnProperty(e) || (t[e] = [])
                    })), t
                }

                function g() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keywords";
                        const r = [];
                        return (0, n._each)(e, ((e, o) => {
                            if ((0, n.isArray)(e)) {
                                let r = [];
                                (0, n._each)(e, (e => {
                                    ((e = d(t + "." + o, e)) || "" === e) && r.push(e)
                                })), e = r
                            } else {
                                if (e = d(t + "." + o, e), !(0, n.isStr)(e)) return;
                                e = [e]
                            }
                            e = e.filter((e => "" !== e));
                            const i = {
                                key: o
                            };
                            e.length > 0 && (i.value = e), r.push(i)
                        })), r
                    }((0, n.mergeDeep)(...t.map((e => Object.fromEntries(Object.entries(e || {}).map((e => {
                        let [t, r] = e;
                        return [t, (0, n.isNumber)(r) || (0, n.isStr)(r) ? [r] : r]
                    })))))))
                }

                function f(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    return g(function(e) {
                        return u((0, i.D)(e))
                    }(e), function(e) {
                        let t = {};
                        return s.forEach((r => {
                            ((0, o.A)(e, r) || []).forEach((e => {
                                const r = c[e ? .ext ? .segtax];
                                r && e.segment.forEach((e => {
                                    t[r] ? t[r].push(e.id) : t[r] = [e.id]
                                }))
                            }))
                        })), t
                    }(e), ...r)
                }
            },
            2349: (e, t, r) => {
                r.d(t, {
                    DX: () => i,
                    GS: () => a,
                    vk: () => o
                });
                var n = r(91069);

                function o(e) {
                    return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
                        return "_" + t.toLowerCase()
                    })).replace(/^_/, "")
                }
                const i = [{
                    code: "appnexusAst",
                    gvlid: 32
                }, {
                    code: "emxdigital",
                    gvlid: 183
                }, {
                    code: "emetriq",
                    gvlid: 213
                }, {
                    code: "pagescience",
                    gvlid: 32
                }, {
                    code: "gourmetads",
                    gvlid: 32
                }, {
                    code: "matomy",
                    gvlid: 32
                }, {
                    code: "featureforward",
                    gvlid: 32
                }, {
                    code: "oftmedia",
                    gvlid: 32
                }, {
                    code: "adasta",
                    gvlid: 32
                }, {
                    code: "beintoo",
                    gvlid: 618
                }, {
                    code: "projectagora",
                    gvlid: 1032
                }, {
                    code: "stailamedia",
                    gvlid: 32
                }, {
                    code: "uol",
                    gvlid: 32
                }, {
                    code: "adzymic",
                    gvlid: 723
                }];

                function a(e, t) {
                    let r = [];
                    for (let o = 0; o < t; o++) {
                        let t = (0, n.isPlainObject)(e) ? (0, n.deepClone)(e) : e;
                        r.push(t)
                    }
                    return r
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [42698], {
            24673: (A, B, I) => {
                I.d(B, {
                    n: () => s
                });
                const s = {
                    1: "IAB20-3",
                    2: "IAB18-5",
                    3: "IAB10-1",
                    4: "IAB2-3",
                    5: "IAB19-8",
                    6: "IAB22-1",
                    7: "IAB18-1",
                    8: "IAB12-3",
                    9: "IAB5-1",
                    10: "IAB4-5",
                    11: "IAB13-4",
                    12: "IAB8-7",
                    13: "IAB9-7",
                    14: "IAB7-1",
                    15: "IAB20-18",
                    16: "IAB10-7",
                    17: "IAB19-18",
                    18: "IAB13-6",
                    19: "IAB18-4",
                    20: "IAB1-5",
                    21: "IAB1-6",
                    22: "IAB3-4",
                    23: "IAB19-13",
                    24: "IAB22-2",
                    25: "IAB3-9",
                    26: "IAB17-18",
                    27: "IAB19-6",
                    28: "IAB1-7",
                    29: "IAB9-30",
                    30: "IAB20-7",
                    31: "IAB20-17",
                    32: "IAB7-32",
                    33: "IAB16-5",
                    34: "IAB19-34",
                    35: "IAB11-5",
                    36: "IAB12-3",
                    37: "IAB11-4",
                    38: "IAB12-3",
                    39: "IAB9-30",
                    41: "IAB7-44",
                    42: "IAB7-1",
                    43: "IAB7-30",
                    50: "IAB19-30",
                    51: "IAB17-12",
                    52: "IAB19-30",
                    53: "IAB3-1",
                    55: "IAB13-2",
                    56: "IAB19-30",
                    57: "IAB19-30",
                    58: "IAB7-39",
                    59: "IAB22-1",
                    60: "IAB7-39",
                    61: "IAB21-3",
                    62: "IAB5-1",
                    63: "IAB12-3",
                    64: "IAB20-18",
                    65: "IAB11-2",
                    66: "IAB17-18",
                    67: "IAB9-9",
                    68: "IAB9-5",
                    69: "IAB7-44",
                    71: "IAB22-3",
                    73: "IAB19-30",
                    74: "IAB8-5",
                    78: "IAB22-1",
                    85: "IAB12-2",
                    86: "IAB22-3",
                    87: "IAB11-3",
                    112: "IAB7-32",
                    113: "IAB7-32",
                    114: "IAB7-32",
                    115: "IAB7-32",
                    118: "IAB9-5",
                    119: "IAB9-5",
                    120: "IAB9-5",
                    121: "IAB9-5",
                    122: "IAB9-5",
                    123: "IAB9-5",
                    124: "IAB9-5",
                    125: "IAB9-5",
                    126: "IAB9-5",
                    127: "IAB22-1",
                    132: "IAB1-2",
                    133: "IAB19-30",
                    137: "IAB3-9",
                    138: "IAB19-3",
                    140: "IAB2-3",
                    141: "IAB2-1",
                    142: "IAB2-3",
                    143: "IAB17-13",
                    166: "IAB11-4",
                    175: "IAB3-1",
                    176: "IAB13-4",
                    182: "IAB8-9",
                    183: "IAB3-5"
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [12126], {
            25761: (e, n, r) => {
                r.d(n, {
                    $: () => t
                });
                var s = r(91069);

                function t(e, n) {
                    return Object.keys(e).forEach((r => {
                        var t, u;
                        n[r] && ((0, s.isFn)(e[r]) ? n[r] = e[r](n[r]) : n[r] = (t = e[r], u = n[r], "string" === t ? u && u.toString() : "number" === t ? Number(u) : u), isNaN(n[r]) && delete n.key)
                    })), n
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [57109], {
            20965: (t, e, n) => {
                n.d(e, {
                    c5: () => o,
                    q4: () => r
                });
                var a = n(25555);
                const c = 0,
                    l = 1,
                    r = 2;

                function o(t) {
                    let {
                        apiName: e,
                        apiVersion: n,
                        apiArgs: o = ["command", "callback", "parameter", "version"],
                        callbackArgs: s = ["returnValue", "success"],
                        mode: i = c
                    } = t, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    const f = {},
                        d = `${e}Call`,
                        p = `${e}Return`;

                    function b(t) {
                        const e = "string" == typeof t.data && t.data.includes(p) ? JSON.parse(t.data) : t.data;
                        if (e ? .[p] ? .callId) {
                            const t = e[p];
                            f.hasOwnProperty(t.callId) && f[t.callId](...s.map((e => t[e])))
                        }
                    }
                    const [k, m] = function() {
                        let t, n = u,
                            a = !1;
                        for (; null != n;) {
                            try {
                                if ("function" == typeof n[e]) {
                                    t = n, a = !0;
                                    break
                                }
                            } catch (t) {}
                            try {
                                if (n.frames[`${e}Locator`]) {
                                    t = n;
                                    break
                                }
                            } catch (t) {}
                            if (n === u.top) break;
                            n = n.parent
                        }
                        return [t, a]
                    }();
                    if (!k) return;

                    function g(t) {
                        return t = Object.assign({
                            version: n
                        }, t), o.map((e => [e, t[e]]))
                    }

                    function h(t, e, n, a) {
                        const c = "function" == typeof t;
                        return function(r, o) {
                            if (a && a(), i !== l) {
                                (null == o || o ? e : n)(c ? void 0 : r)
                            }
                            c && t.apply(this, arguments)
                        }
                    }
                    let v;
                    return m ? v = function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new a.k(((n, a) => {
                            const o = k[e](...g({ ...t,
                                callback: t.callback || i === r ? h(t.callback, n, a) : void 0
                            }).map((t => {
                                let [e, n] = t;
                                return n
                            })));
                            (i === l || null == t.callback && i === c) && n(o)
                        }))
                    } : (u.addEventListener("message", b, !1), v = function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return new a.k(((n, a) => {
                            const c = Math.random().toString(),
                                r = {
                                    [d]: { ...Object.fromEntries(g(t).filter((t => {
                                            let [e] = t;
                                            return "callback" !== e
                                        }))),
                                        callId: c
                                    }
                                };
                            f[c] = h(t ? .callback, n, a, (e || null == t ? .callback) && (() => {
                                delete f[c]
                            })), k.postMessage(r, "*"), i === l && n()
                        }))
                    }), Object.assign(v, {
                        isDirect: m,
                        close() {
                            !m && u.removeEventListener("message", b)
                        }
                    })
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [90010], {
            63806: (n, r, o) => {
                o.d(r, {
                    R: () => i
                });
                var a = o(16894),
                    e = o(91069);

                function i(n, r, o) {
                    return (0, a.Ak)(n, (function(n, a) {
                        var i;
                        i = function(r, o) {
                            if (o) {
                                let n = e.logWarn;
                                r && (n = e.logError, o = `${o} Canceling auction as per consentManagement config.`);
                                for (var i = arguments.length, l = new Array(i > 2 ? i - 2 : 0), t = 2; t < i; t++) l[t - 2] = arguments[t];
                                n(o, ...l)
                            }
                            r ? (n.stopTiming(), "function" == typeof a.bidsBackHandler ? a.bidsBackHandler() : (0, e.logError)("Error executing bidsBackHandler")) : n.call(this, a)
                        }, r() ? ((0, e.logInfo)("User consent information already known.  Pulling internally stored information..."), i(!1)) : o(i)
                    }))
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [35957], {
            86400: (s, e, t) => {
                function n() {
                    const s = [];
                    return {
                        submit(e, t, n) {
                            const u = [t, setTimeout((() => {
                                s.splice(s.indexOf(u), 1), n()
                            }), e)];
                            s.push(u)
                        },
                        resume() {
                            for (; s.length;) {
                                const [e, t] = s.shift();
                                clearTimeout(t), e()
                            }
                        }
                    }
                }
                t.d(e, {
                    L: () => n
                })
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [40082], {
            77274: (n, e, t) => {
                t.d(e, {
                    l: () => v
                });
                var i = t(95139),
                    o = t(76811),
                    s = t(16916),
                    r = t(91069);

                function a(n) {
                    return null != n && 0 !== n
                }

                function c(n) {
                    return ["MspaServiceProviderMode", "Gpc"].some((e => 1 === n[e])) || 2 === n.PersonalDataConsents || 1 === n.KnownChildSensitiveDataConsents[0] || a(n.KnownChildSensitiveDataConsents[1]) || 0 === n.MspaCoveredTransaction
                }

                function l(n, e) {
                    return ["SensitiveDataProcessingOptOutNotice", "SensitiveDataLimitUseNotice"].some((t => n[t] === e))
                }

                function u(n) {
                    return c(n) || ["Sale", "Sharing", "TargetedAdvertising"].some((e => {
                        const t = n[`${e}OptOut`],
                            i = n[`${e}OptOutNotice`];
                        return 1 === t || 2 === i || 2 === t && 0 === i
                    })) || 2 === n.SharingNotice || 2 === n.SharingOptOut && 0 === n.SharingNotice
                }
                const f = (() => {
                    const n = [6, 7, 9, 10, 12].map((n => --n)),
                        e = Array.from(Array(12).keys()).filter((n => 7 !== n)),
                        t = e.filter((e => !n.includes(e)));
                    return function(i) {
                        return u(i) || l(i, 2) || n.some((n => a(i.SensitiveDataProcessing[n]))) || t.some((n => 1 === i.SensitiveDataProcessing[n])) || l(i, 0) && e.some((n => 2 === i.SensitiveDataProcessing[n]))
                    }
                })();
                const g = {
                    [o.Ml]: u,
                    [o.yl]: u,
                    [o.qX]: f,
                    [o.hE]: function(n) {
                        const e = n.SensitiveDataProcessing[7];
                        return 1 === e || c(n) || l(n, 2) || l(n, 0) && 2 === e
                    }
                };

                function v(n, e) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n => n,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.qB,
                        c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => s.ad.getConsentData();
                    const l = [],
                        u = `MSPA (GPP '${n}' for section${e.length>1?"s":""} ${e.join(", ")})`;
                    return (0, r.logInfo)(`Enabling activity controls for ${u}`), Object.entries(o).forEach((i => {
                        let [o, r] = i;
                        l.push(a(o, u, function(n, e, t) {
                            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => s.ad.getConsentData() ? .applicableSections;
                            return function() {
                                if (i().some((e => n.includes(e)))) {
                                    const n = e();
                                    if (null == n) return {
                                        allow: !1,
                                        reason: "consent data not available"
                                    };
                                    if (1 !== n.Version) return {
                                        allow: !1,
                                        reason: `unsupported consent specification version "${n.Version}"`
                                    };
                                    if (t(n)) return {
                                        allow: !1
                                    }
                                }
                            }
                        }(e, (() => {
                            return t((e = c() ? .parsedSections ? .[n], Array.isArray(e) ? e.reduceRight(((n, e) => Object.assign(e, n)), {}) : e));
                            var e
                        }), r, (() => c() ? .applicableSections || []))))
                    })), () => l.forEach((n => n()))
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [41225], {
            76743: (n, r, t) => {
                t.d(r, {
                    hZ: () => o,
                    x4: () => u
                });
                var e = t(7873),
                    l = t(12713);

                function o(n, r, t) {
                    let l = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if (r === t) return n;
                    let o = n;
                    try {
                        o = (0, e.m)().convertCurrency(n, r, t)
                    } catch (n) {
                        if (!l) throw n
                    }
                    return o
                }

                function u() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n => [n.cpm, n.currency],
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
                            return function(e, l) {
                                return null == n && (n = l), t(e, l, n, r)
                            }
                        }();
                    return (0, l.NV)((t => r.apply(null, n(t))))
                }
            },
            53812: (n, r, t) => {
                t.d(r, {
                    M: () => o
                });
                var e = t(91069),
                    l = t(70433);

                function o(n) {
                    if (!e.isFn(n.getFloor)) return l.A(n, "params.bidfloor", 0);
                    try {
                        const r = n.getFloor({
                            currency: "USD",
                            mediaType: "*",
                            size: "*"
                        });
                        return r ? .floor
                    } catch (n) {
                        return 0
                    }
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [37769], {
            88944: (t, e, n) => {
                n.d(e, {
                    g: () => c
                });
                var o = n(91069);

                function c() {
                    try {
                        const t = (0, o.getWindowTop)();
                        let {
                            scrollY: e,
                            scrollX: n,
                            innerHeight: c,
                            innerWidth: i
                        } = t;
                        return c = c || t.document.documentElement.clientWidth || t.document.body.clientWidth, i = i || t.document.documentElement.clientHeight || t.document.body.clientHeight, {
                            top: e,
                            right: n + i,
                            bottom: e + c,
                            left: n
                        }
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [45881], {
            96318: (e, n, t) => {
                t.d(n, {
                    Qo: () => a
                });
                var r = t(95139),
                    o = t(76811),
                    l = t(96953),
                    c = t(91069),
                    i = t(70433),
                    u = t(63172);

                function s(e) {
                    return Object.assign({
                        wp: !0,
                        run(e, n, t, r, o) {
                            const s = t && t.hasOwnProperty(r),
                                f = s ? t[r] : void 0,
                                a = s && null != f && "object" == typeof f ? (0, c.deepClone)(f) : f;
                            return function() {
                                const t = null == n ? e : (0, i.A)(e, n),
                                    d = t && (0, l.$V)(t[r]),
                                    h = d ? t[r] : void 0;
                                !s && d && o() ? delete t[r] : s === d && h === f && (0, c.deepEqual)(h, a) || !o() || (0, u.J)(e, (null == n ? [] : [n]).concat(r).join("."), a)
                            }
                        }
                    }, e)
                }
                const f = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.io;
                    return function(e) {
                        const n = {},
                            t = [];
                        e.forEach((e => {
                            e.wp && t.push(e), e.get && e.paths.forEach((t => {
                                let r = n;
                                t.split(".").forEach((e => {
                                    r.children = r.children || {}, r.children[e] = r.children[e] || {}, r = r.children[e]
                                })), r.rule = e
                            }))
                        }));
                        const r = (0, l.nl)(t);

                        function o(e, n, t) {
                            return new Proxy(e, {
                                get(e, r, c) {
                                    const i = Reflect.get(e, r, c);
                                    if (n.hasOwnProperty(r)) {
                                        const {
                                            children: e,
                                            rule: c
                                        } = n[r];
                                        if (e && null != i && "object" == typeof i) return o(i, e, t);
                                        if (c && (0, l.$V)(i) && t(c)) return c.get(i)
                                    }
                                    return i
                                }
                            })
                        }
                        return function(e) {
                            const t = {};
                            for (var c = arguments.length, i = new Array(c > 1 ? c - 1 : 0), u = 1; u < c; u++) i[u - 1] = arguments[u];
                            return {
                                obj: o(e, n.children || {}, (0, l.uD)(t, ...i)),
                                verify: (s = r(t, e, ...i), function() {
                                    s.forEach((e => e()))
                                })
                            };
                            var s
                        }
                    }((0, l.ZP)(e).concat(function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.io;
                        return [{
                            name: o.yl,
                            paths: l.Vx,
                            applies: (0, l.p4)(o.yl, e)
                        }, {
                            name: o.qX,
                            paths: l.l7,
                            applies: (0, l.p4)(o.qX, e)
                        }].map(s)
                    }(e)))
                }();
                const a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                    return function(n, t) {
                        n.global = n.global || {}, n.bidder = n.bidder || {};
                        const r = new Set(Object.keys(n.bidder)),
                            o = [];

                        function l(n) {
                            const r = e(n, t);
                            return o.push(r.verify), r.obj
                        }
                        const i = {
                            global: l(n.global),
                            bidder: Object.fromEntries(Object.entries(n.bidder).map((e => {
                                let [n, t] = e;
                                return [n, l(t)]
                            })))
                        };
                        return {
                            obj: i,
                            verify() {
                                Object.entries(i.bidder).filter((e => {
                                    let [n] = e;
                                    return !r.has(n)
                                })).forEach((r => {
                                    let [o, l] = r;
                                    const i = {},
                                        u = e(i, t);
                                    (0, c.mergeDeep)(u.obj, l), u.verify(), n.bidder[o] = i
                                })), o.forEach((e => e()))
                            }
                        }
                    }
                }()
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [58498], {
            89766: (e, t, r) => {
                r.d(t, {
                    T: () => l,
                    A: () => m
                });
                const n = new WeakMap;
                var i = r(91069),
                    s = r(71371);
                var o = r(63895);
                var a = r(75561);
                var d = r(1e3),
                    p = r(73858);
                const c = {
                    [d.S3]: {
                        fpd: {
                            priority: 99,
                            fn(e, t) {
                                (0, i.mergeDeep)(e, t.ortb2)
                            }
                        },
                        onlyOneClient: {
                            priority: -99,
                            fn: (0, p.i8)("ORTB request")
                        },
                        props: {
                            fn(e, t) {
                                Object.assign(e, {
                                    id: e.id || (0, i.generateUUID)(),
                                    test: e.test || 0
                                });
                                const r = parseInt(t.timeout, 10);
                                isNaN(r) || (e.tmax = r)
                            }
                        }
                    },
                    [d.Tb]: {
                        fpd: {
                            priority: 99,
                            fn(e, t) {
                                (0, i.mergeDeep)(e, t.ortb2Imp)
                            }
                        },
                        id: {
                            fn(e, t) {
                                e.id = t.bidId
                            }
                        },
                        banner: {
                            fn: function(e, t, r) {
                                if (r.mediaType && r.mediaType !== s.D4) return;
                                const n = t ? .mediaTypes ? .banner;
                                if (n) {
                                    const t = {
                                        topframe: !0 === (0, i.inIframe)() ? 0 : 1
                                    };
                                    n.sizes && (t.format = (0, i.sizesToSizeTuples)(n.sizes).map(i.sizeTupleToRtbSize)), n.hasOwnProperty("pos") && (t.pos = n.pos), e.banner = (0, i.mergeDeep)(t, e.banner)
                                }
                            }
                        },
                        pbadslot: {
                            fn(e) {
                                const t = e.ext ? .data ? .pbadslot;
                                t && "string" == typeof t || delete e.ext ? .data ? .pbadslot
                            }
                        },
                        secure: {
                            fn(e, t) {
                                e.secure = e.secure ? ? 1
                            }
                        }
                    },
                    [d.WR]: {
                        mediaType: {
                            priority: 99,
                            fn: a.K
                        },
                        banner: {
                            fn: function() {
                                let {
                                    createPixel: e = (e => (0, i.createTrackPixelHtml)(decodeURIComponent(e), i.encodeMacroURI))
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return function(t, r) {
                                    t.mediaType === s.D4 && (r.adm && r.nurl ? (t.ad = r.adm, t.ad += e(r.nurl)) : r.adm ? t.ad = r.adm : r.nurl && (t.adUrl = r.nurl))
                                }
                            }()
                        },
                        props: {
                            fn(e, t, r) {
                                Object.entries({
                                    requestId: r.bidRequest ? .bidId,
                                    seatBidId: t.id,
                                    cpm: t.price,
                                    currency: r.ortbResponse.cur || r.currency,
                                    width: t.w,
                                    height: t.h,
                                    dealId: t.dealid,
                                    creative_id: t.crid,
                                    creativeId: t.crid,
                                    burl: t.burl,
                                    ttl: t.exp || r.ttl,
                                    netRevenue: r.netRevenue
                                }).filter((e => {
                                    let [t, r] = e;
                                    return void 0 !== r
                                })).forEach((t => {
                                    let [r, n] = t;
                                    return e[r] = n
                                })), e.meta || (e.meta = {}), t.adomain && (e.meta.advertiserDomains = t.adomain), t.ext ? .dsa && (e.meta.dsa = t.ext.dsa), t.cat && (e.meta.primaryCatId = t.cat[0], e.meta.secondaryCatIds = t.cat.slice(1)), t.attr && (e.meta.attr = t.attr)
                            }
                        }
                    }
                };
                c[d.Tb].native = {
                    fn: function(e, t, r) {
                        if (r.mediaType && r.mediaType !== s.s6) return;
                        let n = t.nativeOrtbRequest;
                        n && (n = Object.assign({}, r.nativeRequest, n), n.assets ? .length ? e.native = (0, i.mergeDeep)({}, {
                            request: JSON.stringify(n),
                            ver: n.ver
                        }, e.native) : (0, i.logWarn)("mediaTypes.native is set, but no assets were specified. Native request skipped.", t))
                    }
                }, c[d.WR].native = {
                    fn: function(e, t) {
                        if (e.mediaType === s.s6) {
                            let r;
                            if (r = "string" == typeof t.adm ? JSON.parse(t.adm) : t.adm, !(0, i.isPlainObject)(r) || !Array.isArray(r.assets)) throw new Error("ORTB native response contained no assets");
                            e.native = {
                                ortb: r
                            }
                        }
                    }
                }, c[d.Tb].video = {
                    fn: function(e, t, r) {
                        if (r.mediaType && r.mediaType !== s.G_) return;
                        const n = t ? .mediaTypes ? .video;
                        if (!(0, i.isEmpty)(n)) {
                            const t = Object.fromEntries(Object.entries(n).filter((e => {
                                let [t] = e;
                                return o.Zy.has(t)
                            })));
                            if (n.playerSize) {
                                const e = (0, i.sizesToSizeTuples)(n.playerSize).map(i.sizeTupleToRtbSize);
                                e.length > 1 && (0, i.logWarn)("video request specifies more than one playerSize; all but the first will be ignored"), Object.assign(t, e[0])
                            }
                            e.video = (0, i.mergeDeep)(t, e.video)
                        }
                    }
                }, c[d.WR].video = {
                    fn: function(e, t, r) {
                        e.mediaType === s.G_ && (r ? .imp ? .video ? .w && r ? .imp ? .video ? .h && ([e.playerWidth, e.playerHeight] = [r.imp.video.w, r.imp.video.h]), t.adm && (e.vastXml = t.adm), t.nurl && (e.vastUrl = t.nurl))
                    }
                };
                var u = r(99466);

                function m() {
                    let {
                        context: e = {},
                        processors: t = l,
                        overrides: r = {},
                        imp: s,
                        request: o,
                        bidResponse: a,
                        response: p
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const c = new WeakMap;

                    function u(e, i, s, o) {
                        let a;
                        return function() {
                            return null == a && (a = function() {
                                let a = s.bind(this, function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    if (!n.has(e)) {
                                        const t = Object.entries(e);
                                        t.sort(((e, t) => (e = e[1].priority || 0) === (t = t[1].priority || 0) ? 0 : e > t ? -1 : 1)), n.set(e, t.map((e => {
                                            let [t, r] = e;
                                            return [t, r.fn]
                                        })))
                                    }
                                    const r = n.get(e).filter((e => {
                                        let [r] = e;
                                        return !t.hasOwnProperty(r) || t[r]
                                    })).map((function(e) {
                                        let [r, n] = e;
                                        return t.hasOwnProperty(r) ? t[r].bind(this, n) : n
                                    }));
                                    return function() {
                                        const e = Array.from(arguments);
                                        r.forEach((t => {
                                            t.apply(this, e)
                                        }))
                                    }
                                }(t()[e] || {}, r[e] || {}));
                                return i && (a = i.bind(this, a)),
                                    function() {
                                        try {
                                            return a.apply(this, arguments)
                                        } catch (e) {
                                            o.call(this, e, ...arguments)
                                        }
                                    }
                            }()), a.apply(this, arguments)
                        }
                    }
                    const m = u(d.Tb, s, (function(e, t, r) {
                            const n = {};
                            return e(n, t, r), n
                        }), (function(e, t, r) {
                            (0, i.logError)("Error while converting bidRequest to ORTB imp; request skipped.", {
                                error: e,
                                bidRequest: t,
                                context: r
                            })
                        })),
                        f = u(d.S3, o, (function(e, t, r, n) {
                            const i = {
                                imp: t
                            };
                            return e(i, r, n), i
                        }), (function(e, t, r, n) {
                            throw (0, i.logError)("Error while converting to ORTB request", {
                                error: e,
                                imps: t,
                                bidderRequest: r,
                                context: n
                            }), e
                        })),
                        b = u(d.WR, a, (function(e, t, r) {
                            const n = {};
                            return e(n, t, r), n
                        }), (function(e, t, r) {
                            (0, i.logError)("Error while converting ORTB seatbid.bid to bidResponse; bid skipped.", {
                                error: e,
                                bid: t,
                                context: r
                            })
                        })),
                        y = u(d.Cf, p, (function(e, t, r, n) {
                            const i = {
                                bids: t
                            };
                            return e(i, r, n), i
                        }), (function(e, t, r, n) {
                            throw (0, i.logError)("Error while converting from ORTB response", {
                                error: e,
                                bidResponses: t,
                                ortbResponse: r,
                                context: n
                            }), e
                        }));
                    return {
                        toORTB(t) {
                            let {
                                bidderRequest: r,
                                bidRequests: n,
                                context: s = {}
                            } = t;
                            n = n || r.bids;
                            const o = {
                                req: Object.assign({
                                    bidRequests: n
                                }, e, s),
                                imp: {}
                            };
                            o.req.impContext = o.imp;
                            const a = n.map((t => {
                                    const n = Object.assign({
                                            bidderRequest: r,
                                            reqContext: o.req
                                        }, e, s),
                                        a = m(t, n);
                                    if (null != a) {
                                        if (a.hasOwnProperty("id")) return Object.assign(n, {
                                            bidRequest: t,
                                            imp: a
                                        }), o.imp[a.id] = n, a;
                                        (0, i.logError)("Converted ORTB imp does not specify an id, ignoring bid request", t, a)
                                    }
                                })).filter(Boolean),
                                d = f(a, r, o.req);
                            return o.req.bidderRequest = r, null != d && c.set(d, o), d
                        },
                        fromORTB(e) {
                            let {
                                request: t,
                                response: r
                            } = e;
                            const n = c.get(t);
                            if (null == n) throw new Error("ortbRequest passed to `fromORTB` must be the same object returned by `toORTB`");

                            function s(e) {
                                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return Object.assign(e, {
                                    ortbRequest: t
                                }, r)
                            }
                            const o = Object.fromEntries((t.imp || []).map((e => [e.id, e]))),
                                a = (r.seatbid || []).flatMap((e => (e.bid || []).map((t => {
                                    if (o.hasOwnProperty(t.impid) && n.imp.hasOwnProperty(t.impid)) return b(t, s(n.imp[t.impid], {
                                        imp: o[t.impid],
                                        seatbid: e,
                                        ortbResponse: r
                                    }));
                                    (0, i.logError)("ORTB response seatbid[].bid[].impid does not match any imp in request; ignoring bid", t)
                                })))).filter(Boolean);
                            return y(a, r, s(n.req))
                        }
                    }
                }
                const l = (0, i.memoize)((() => (0, u.U)(c, (0, d.yB)(d.qN))))
            },
            99466: (e, t, r) => {
                r.d(t, {
                    U: () => i
                });
                var n = r(1e3);

                function i() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    const s = t.shift(),
                        o = t.length > 1 ? i(...t) : t[0];
                    return Object.fromEntries(n.zt.map((e => [e, Object.assign({}, s[e], o[e])])))
                }
            },
            75561: (e, t, r) => {
                r.d(t, {
                    K: () => s,
                    X: () => i
                });
                var n = r(71371);
                const i = {
                    1: n.D4,
                    2: n.G_,
                    4: n.s6
                };

                function s(e, t, r) {
                    if (e.mediaType) return;
                    const n = r.mediaType;
                    if (!n && !i.hasOwnProperty(t.mtype)) throw new Error("Cannot determine mediaType for response");
                    e.mediaType = n || i[t.mtype]
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [47618], {
            34610: (e, i, t) => {
                t.d(i, {
                    m: () => m
                });
                var d = t(99466),
                    r = t(1e3),
                    n = t(70433),
                    s = t(91069),
                    a = t(25825),
                    b = t(11445),
                    o = t(43272),
                    p = t(63172);
                var c = t(43323);
                var f = t(7873);
                var g = t(71371);
                const l = {
                    [r.S3]: {
                        extPrebid: {
                            fn: function(e, i) {
                                (0, p.J)(e, "ext.prebid", (0, s.mergeDeep)({
                                    auctiontimestamp: i.auctionStart,
                                    targeting: {
                                        includewinners: !0,
                                        includebidderkeys: !1
                                    }
                                }, e.ext ? .prebid)), o.$W.getConfig("debug") && (e.ext.prebid.debug = !0)
                            }
                        },
                        extPrebidChannel: {
                            fn: function(e) {
                                (0, p.J)(e, "ext.prebid.channel", Object.assign({
                                    name: "pbjs",
                                    version: (0, f.m)().version
                                }, e.ext ? .prebid ? .channel))
                            }
                        },
                        extPrebidAliases: {
                            fn: function(e, i, t) {
                                let {
                                    am: d = b.Ay
                                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                if (d.aliasRegistry[i.bidderCode]) {
                                    const t = d.bidderRegistry[i.bidderCode];
                                    if (!t || !t.getSpec().skipPbsAliasing) {
                                        (0, p.J)(e, `ext.prebid.aliases.${i.bidderCode}`, d.aliasRegistry[i.bidderCode]);
                                        const r = o.$W.getConfig(`gvlMapping.${i.bidderCode}`) || t ? .getSpec ? .().gvlid;
                                        r && (0, p.J)(e, `ext.prebid.aliasgvlids.${i.bidderCode}`, r)
                                    }
                                }
                            }
                        }
                    },
                    [r.Tb]: {
                        params: {
                            fn: c.W
                        },
                        adUnitCode: {
                            fn: function(e, i) {
                                const t = i.adUnitCode;
                                t && (0, p.J)(e, "ext.prebid.adunitcode", t)
                            }
                        }
                    },
                    [r.WR]: {
                        mediaType: {
                            fn: a.o,
                            priority: 99
                        },
                        videoCache: {
                            fn: function(e, i) {
                                if (e.mediaType === g.G_) {
                                    let {
                                        cacheId: t,
                                        url: d
                                    } = (0, n.A)(i, "ext.prebid.cache.vastXml") || {};
                                    if (!t || !d) {
                                        const {
                                            hb_uuid: e,
                                            hb_cache_host: r,
                                            hb_cache_path: s
                                        } = (0, n.A)(i, "ext.prebid.targeting") || {};
                                        e && r && s && (t = e, d = `https://${r}${s}?uuid=${e}`)
                                    }
                                    t && d && Object.assign(e, {
                                        videoCacheKey: t,
                                        vastUrl: d
                                    })
                                }
                            },
                            priority: -10
                        },
                        bidderCode: {
                            fn(e, i, t) {
                                e.bidderCode = t.seatbid.seat, e.adapterCode = (0, n.A)(i, "ext.prebid.meta.adaptercode") || t.bidRequest ? .bidder || e.bidderCode
                            }
                        },
                        pbsBidId: {
                            fn(e, i) {
                                const t = (0, n.A)(i, "ext.prebid.bidid");
                                (0, s.isStr)(t) && (e.pbsBidId = t)
                            }
                        },
                        adserverTargeting: {
                            fn(e, i) {
                                const t = (0, n.A)(i, "ext.prebid.targeting");
                                (0, s.isPlainObject)(t) && (e.adserverTargeting = t)
                            }
                        },
                        extPrebidMeta: {
                            fn(e, i) {
                                e.meta = (0, s.mergeDeep)({}, (0, n.A)(i, "ext.prebid.meta"), e.meta)
                            }
                        },
                        pbsWurl: {
                            fn(e, i) {
                                const t = (0, n.A)(i, "ext.prebid.events.win");
                                (0, s.isStr)(t) && (e.pbsWurl = t)
                            }
                        }
                    },
                    [r.Cf]: {
                        serverSideStats: {
                            fn(e, i, t) {
                                Object.entries({
                                    errors: "serverErrors",
                                    responsetimemillis: "serverResponseTimeMs"
                                }).forEach((e => {
                                    let [d, r] = e;
                                    const s = (0, n.A)(i, `ext.${d}.${t.bidderRequest.bidderCode}`);
                                    s && (t.bidderRequest[r] = s, t.bidRequests.forEach((e => e[r] = s)))
                                }))
                            }
                        }
                    }
                };
                var u = t(89766);
                const m = (0, s.memoize)((() => (0, d.U)((0, u.T)(), l, (0, r.yB)(r.e4))))
            },
            25825: (e, i, t) => {
                t.d(i, {
                    o: () => s,
                    s: () => n
                });
                var d = t(71371),
                    r = t(75561);
                const n = {
                    [d.D4]: "banner",
                    [d.s6]: "native",
                    [d.G_]: "video"
                };

                function s(e, i, t) {
                    let s = t.mediaType;
                    s || (s = r.X.hasOwnProperty(i.mtype) ? r.X[i.mtype] : i.ext ? .prebid ? .type, n.hasOwnProperty(s) || (s = d.D4)), e.mediaType = s
                }
            },
            43323: (e, i, t) => {
                t.d(i, {
                    W: () => r
                });
                var d = t(63172);

                function r(e, i) {
                    let t = i.params;
                    t && (0, d.J)(e, `ext.prebid.bidder.${i.bidder}`, t)
                }
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [46550], {
            8702: (p, n, e) => {
                function t(p, n, e) {
                    let t = {};
                    return p && ("boolean" == typeof p.gdprApplies && (t.gdpr = Number(p.gdprApplies)), "string" == typeof p.consentString && (t.gdpr_consent = p.consentString)), n && (t.us_privacy = encodeURIComponent(n)), e ? .gppString && (t.gpp = e.gppString, t.gpp_sid = e.applicableSections ? .toString()), t
                }
                e.d(n, {
                    d: () => t
                })
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [14577], {
            76568: (n, e, s) => {
                function u(n, e, s) {
                    return s ? n + e + "=" + encodeURIComponent(s) + "&" : n
                }
                s.d(e, {
                    v: () => u
                })
            }
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [37077], {
            93577: (t, n, i) => {
                var e = i(7873),
                    o = i(73978),
                    a = i(70433),
                    d = i(91069),
                    r = i(71371),
                    s = i(78969),
                    c = i(88910),
                    u = i(11445),
                    l = i(68044),
                    p = i(51252);
                const g = Object.keys(s.qY).map((t => s.qY[t])),
                    A = "https://c.4dex.io/pba.gif",
                    m = "USD",
                    b = "adagio",
                    f = function() {
                        return o.B
                    },
                    y = {
                        auctions: {},
                        getAuction: function(t, n) {
                            return this.auctions[t][n]
                        },
                        getBiddersFromAuction: function(t, n) {
                            return this.getAuction(t, n).bdrs.split(",")
                        },
                        getAllAdUnitCodes: function(t) {
                            return Object.keys(this.auctions[t])
                        },
                        updateAuction: function(t, n, i) {
                            this.auctions[t][n] = { ...this.auctions[t][n],
                                ...i
                            }
                        },
                        auctionIdReferences: {},
                        addPrebidAuctionIdRef(t, n) {
                            this.auctionIdReferences[t] = n
                        },
                        getAdagioAuctionId(t) {
                            return this.auctionIdReferences[t]
                        },
                        auctionByAdunit: {},
                        getAuctionIdByAdunit: (t, n) => y.auctionByAdunit[t] ? {
                            auctionId: y.auctionByAdunit[t],
                            adUnitCode: t
                        } : y.auctionByAdunit[n] ? {
                            auctionId: y.auctionByAdunit[n],
                            adUnitCode: n
                        } : {
                            auctionId: null,
                            adUnitCode: null
                        }
                    },
                    _ = window.encodeURIComponent,
                    I = t => E(t),
                    h = (t, n) => (0, a.A)(y, `auctions.${t}.${n}`, !1),
                    C = t => (0, a.A)(y, `auctions.${t}`, !1);

                function v(t, n) {
                    const i = {};
                    return t.filter((t => {
                        const e = n(t);
                        return !i.hasOwnProperty(e) && (i[e] = !0)
                    }))
                }

                function E(t) {
                    return !!t && (t + u.Ay.aliasRegistry[t]).toLowerCase().includes(b)
                }

                function U(t) {
                    return {
                        banner: "ban",
                        outstream: "vidout",
                        instream: "vidin",
                        adpod: "vidadpod",
                        native: "nat"
                    }[t] || t
                }

                function w(t, n) {
                    return Object.keys(t).reduce(((i, e) => e.startsWith(n) ? (i[e] = t[e], i) : (i[`${n}${e}`] = t[e], i)), {})
                }

                function j(t, n) {
                    let i = t;
                    return "string" == typeof n && n.toUpperCase() !== m && (i = "function" == typeof(0, e.m)().convertCurrency ? parseFloat(Number((0, e.m)().convertCurrency(t, n, m))).toFixed(3) : null), i
                }

                function R(t) {
                    return {
                        netCpm: j(t.cpm, t.currency),
                        orginalCpm: j(t.originalCpm, t.originalCurrency)
                    }
                }

                function O(t, n) {
                    y.updateAuction(t, n, {
                            v: (y.getAuction(t, n).v || 0) + 1
                        }),
                        function(t) {
                            if (!t.org_id || !t.site) return void(0, d.logInfo)("request is missing org_id or site, skipping beacon.");
                            t = Object.keys(t).reduce(((n, i) => (null !== t[i] && (n[i] = t[i]), n)), {});
                            const n = `${A}?${Object.keys(t).map((n=>`${n}=${_(t[n])}`)).join("&")}`;
                            (0, l.RD)(n, null, null, {
                                method: "GET"
                            })
                        }(y.getAuction(t, n))
                }

                function q(t) {
                    return (0, a.A)(t, "latestTargetedAuctionId") || (0, a.A)(t, "auctionId")
                }

                function k(t) {
                    const {
                        auctionId: n,
                        adUnitCode: i
                    } = y.getAuctionIdByAdunit(t.slot.getAdUnitPath(), t.slot.getSlotElementId());
                    if (!n) {
                        const n = `${t.slot.getAdUnitPath()} - ${t.slot.getSlotElementId()}`;
                        return void(0, d.logWarn)("Could not find configured ad unit matching GAM render of slot: " + n)
                    }
                    y.updateAuction(n, i, {
                        adsrv: "gam",
                        adsrv_empty: t.isEmpty
                    });
                    const e = y.getAuction(n, i);
                    void 0 !== e ? .loa_e && O(n, i)
                }
                let B = Object.assign((0, c.Ay)({
                    emptyUrl: "",
                    analyticsType: "endpoint"
                }), {
                    track: function(t) {
                        const {
                            eventType: n,
                            args: i
                        } = t;
                        try {
                            switch (n) {
                                case s.qY.AUCTION_INIT:
                                    ! function(t) {
                                        const n = (0, o.h)(),
                                            i = t.auctionId,
                                            e = new Set(t.bidderRequests.map((t => t.bids.map((t => t.adUnitCode)))).flat()),
                                            d = t.bidderRequests.find((t => E(t.bidderCode))),
                                            s = (0, a.A)(t.bidderRequests[0], "ortb2.site.ext.data.adg_rtd.uid");
                                        y.addPrebidAuctionIdRef(i, s), y.auctions[i] = {}, e.forEach((e => {
                                            const o = t.adUnits.filter((t => t.code === e)),
                                                c = o.reduce(((t, n) => t.concat(n.bids.map((t => t.bidder)))), []),
                                                l = [...new Set(c)],
                                                p = o.map((t => t.mediaTypes)),
                                                g = v(p.map((t => Object.keys(t))).flat(), (t => t)).map((t => U(t))).sort(),
                                                A = v(p.filter((t => t.hasOwnProperty(r.D4) && t[r.D4].hasOwnProperty("sizes"))).map((t => t[r.D4].sizes.map((t => t.join("x"))))).flat(), (t => t)).sort(),
                                                m = l.sort(),
                                                b = m.map((n => {
                                                    const i = t.bidderRequests.find((t => t.bidderCode === n));
                                                    return i ? i.bids[0].src : null
                                                })).join(","),
                                                _ = m.map((t => u.Ay.resolveAlias(t))).join(","),
                                                I = s || i,
                                                h = (0, a.A)(t.bidderRequests[0], "ortb2.site.ext.data.adg_rtd.session", {}),
                                                C = {
                                                    org_id: B.options.organizationId,
                                                    site: B.options.site,
                                                    v: 0,
                                                    pbjsv: "9.24.0",
                                                    pv_id: f().pageviewId,
                                                    auct_id: I,
                                                    adu_code: e,
                                                    url_dmn: n.location.hostname,
                                                    mts: g.join(","),
                                                    ban_szs: A.join(","),
                                                    bdrs: m.join(","),
                                                    pgtyp: (0, a.A)(t.bidderRequests[0], "ortb2.site.ext.data.pagetype", null),
                                                    plcmt: (0, a.A)(o[0], "ortb2Imp.ext.data.placement", null),
                                                    t_n: h.testName || null,
                                                    t_v: h.testVersion || null,
                                                    s_id: h.id || null,
                                                    s_new: h.new || null,
                                                    bdrs_src: b,
                                                    bdrs_code: _
                                                };
                                            if (d && d.bids) {
                                                const t = d.bids.filter((t => t.adUnitCode === e));
                                                if (t.length > 0) {
                                                    const n = v(t.map((t => Object.keys(t.mediaTypes))).flat(), (t => t)).flat().map((t => U(t))).sort();
                                                    C.adg_mts = n.join(","), C.org_id = C.org_id || t[0].params.organizationId, C.site = C.site || t[0].params.site
                                                }
                                            }
                                            y.auctions[i][e] = C, y.auctionByAdunit[e] = i, O(i, e)
                                        }))
                                    }(i);
                                    break;
                                case s.qY.BID_RESPONSE:
                                    ! function(t) {
                                        I(t.bidder) && h(t.auctionId, t.adUnitCode) && t.pba && y.updateAuction(t.auctionId, t.adUnitCode, { ...w(t.pba, "e_")
                                        })
                                    }(i);
                                    break;
                                case s.qY.AUCTION_END:
                                    ! function(t) {
                                        const {
                                            auctionId: n
                                        } = t;
                                        if (!C(n)) return;
                                        y.getAllAdUnitCodes(n).forEach((i => {
                                            const e = performance.getEntriesByType("navigation")[0],
                                                o = y.getAuction(n, i),
                                                a = o.bdrs.split(","),
                                                d = o.bdrs_timeout || [];
                                            y.updateAuction(n, i, {
                                                bdrs_bid: y.getBiddersFromAuction(n, i).map((n => t.bidsReceived.find((t => t.adUnitCode === i && t.bidder === n)) ? "1" : "0")).join(","),
                                                bdrs_cpm: y.getBiddersFromAuction(n, i).map((n => {
                                                    const e = t.bidsReceived.find((t => t.adUnitCode === i && t.bidder === n));
                                                    return e ? R(e).netCpm : null
                                                })).join(","),
                                                dom_i: Math.round(e.domInteractive) || null,
                                                dom_c: Math.round(e.domComplete) || null,
                                                loa_e: Math.round(e.loadEventEnd) || null,
                                                bdrs_timeout: a.map((t => d.includes(t) ? "1" : "0")).join(",")
                                            }), O(n, i)
                                        }))
                                    }(i);
                                    break;
                                case s.qY.BID_WON:
                                    ! function(t) {
                                        let n = q(t);
                                        if (!h(n, t.adUnitCode)) return;
                                        const i = R(t),
                                            e = t.latestTargetedAuctionId && t.latestTargetedAuctionId !== t.auctionId ? y.getAdagioAuctionId(t.auctionId) : null,
                                            o = performance.getEntriesByType("navigation")[0];
                                        y.updateAuction(n, t.adUnitCode, {
                                            win_bdr: t.bidder,
                                            win_mt: U(t.mediaType),
                                            win_ban_sz: t.mediaType === r.D4 ? `${t.width}x${t.height}` : null,
                                            win_net_cpm: i.netCpm,
                                            win_og_cpm: i.orginalCpm,
                                            dom_i: Math.round(o.domInteractive) || null,
                                            dom_c: Math.round(o.domComplete) || null,
                                            loa_e: Math.round(o.loadEventEnd) || null,
                                            auct_id_c: e
                                        }), O(n, t.adUnitCode)
                                    }(i);
                                    break;
                                case s.qY.AD_RENDER_FAILED:
                                    ! function(t, n) {
                                        const {
                                            adUnitCode: i
                                        } = t.bid;
                                        let e = q(t.bid);
                                        h(e, i) && (y.updateAuction(e, i, {
                                            rndr: n ? 1 : 0
                                        }), O(e, i))
                                    }(i, n === s.qY.AD_RENDER_SUCCEEDED);
                                    break;
                                case s.qY.PBS_ANALYTICS:
                                    ! function(t) {
                                        const n = t.atag.find((t => "adg-pba" === t.module)) ? .pba;
                                        if (!n) return;
                                        y.getAllAdUnitCodes(t.auctionId).forEach((i => {
                                            const e = n[i];
                                            (0, d.isPlainObject)(e) && y.updateAuction(t.auctionId, i, { ...w(e, "e_")
                                            })
                                        }))
                                    }(i);
                                    break;
                                case s.qY.BID_TIMEOUT:
                                    ! function(t) {
                                        t.forEach((t => {
                                            const n = y.getAuction(t.auctionId, t.adUnitCode);
                                            if (!n) return void(0, d.logWarn)(`bid timeout on auction ${t.auctionId}, with adunitCode ${t.adUnitCode}: could not retrieve auction from cache`);
                                            const i = n.bdrs_timeout || [];
                                            i.push(t.bidder), n.bdrs_timeout = i
                                        }))
                                    }(i)
                            }
                        } catch (t) {
                            (0, d.logError)("Error on Adagio Analytics Adapter", t)
                        }
                        try {
                            void 0 !== i && -1 !== g.indexOf(n) && f().queue.push({
                                action: "pb-analytics-event",
                                data: {
                                    eventName: n,
                                    args: i
                                },
                                ts: Date.now()
                            })
                        } catch (t) {
                            (0, d.logError)("Error on Adagio Analytics Adapter - adagio.js", t)
                        }
                    }
                });
                B.originEnableAnalytics = B.enableAnalytics, B.enableAnalytics = t => {
                    f().versions.adagioAnalyticsAdapter = "3.0.0";
                    let n = (0, e.m)().installedModules;
                    !n || n.length && -1 !== n.indexOf("adagioRtdProvider") && -1 !== n.indexOf("rtdModule") ? (B.options = t.options || {}, B.options.organizationId ? B.options.organizationId = B.options.organizationId.toString() : (0, d.logWarn)("Adagio Analytics Adapter: organizationId is required and is missing will try to fallback on params."), B.options.site ? "string" != typeof B.options.site && ((0, d.logWarn)("Adagio Analytics Adapter: site should be a string will try to fallback on params."), B.options.site = void 0) : (0, d.logWarn)("Adagio Analytics Adapter: site is required and is missing will try to fallback on params."), B.originEnableAnalytics(t), (0, p.ho)(k)) : (0, d.logError)("Adagio Analytics Adapter requires rtdModule & adagioRtdProvider modules which are not installed. No beacon will be sent")
                }, u.Ay.registerAnalyticsAdapter({
                    adapter: B,
                    code: b,
                    gvlid: 617
                });
                (0, e.E)("adagioAnalyticsAdapter")
            }
        },
        t => {
            t.O(0, [2630, 33005, 35759, 60802, 51085], (() => {
                return n = 93577, t(t.s = n);
                var n
            }));
            t.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [97966], {
            93800: (e, a, r) => {
                var t = r(7873),
                    i = r(71371),
                    s = r(91069),
                    n = r(70433),
                    d = r(27934),
                    o = r(63895),
                    p = r(95789),
                    l = r(73978),
                    m = r(43272),
                    c = r(12449),
                    u = r(15901),
                    g = r(51252),
                    y = r(57377),
                    f = r(38230);
                const v = "Adagio:",
                    b = [i.D4, i.s6, i.G_],
                    A = "adagio",
                    h = `https://${A}.bbvms.com/r/$RENDERER.js`;
                const I = {
                    canAccessWindowTop: s.canAccessWindowTop,
                    getAdagioNs: function() {
                        return l.B
                    },
                    getDevice: function() {
                        const e = navigator.language ? "language" : "userLanguage";
                        return {
                            userAgent: navigator.userAgent,
                            language: navigator[e],
                            dnt: (0, s.getDNT)() ? 1 : 0,
                            geo: {},
                            js: 1
                        }
                    },
                    getSite: function(e) {
                        const {
                            refererInfo: a
                        } = e;
                        return {
                            domain: (0, d.gR)(a.topmostLocation) || "",
                            page: a.topmostLocation || "",
                            referrer: a.ref || (0, s.getWindowSelf)().document.referrer || "",
                            top: a.reachedTop
                        }
                    },
                    getRefererInfo: d.EN,
                    hasRtd: function() {
                        return (m.$W.getConfig("realTimeData.dataProviders") || []).find((e => "adagio" === e.name))
                    },
                    isRendererPreferredFromPublisher: function(e) {
                        const a = (0, n.A)(e, "renderer"),
                            r = !!(a && a.url && a.render),
                            t = (0, n.A)(e, "mediaTypes.video.renderer"),
                            i = !!(t && t.url && t.render);
                        return !!(r && !0 !== a.backupOnly || i && !0 !== t.backupOnly)
                    }
                };

                function w(e) {
                    const a = (0, n.A)(e, "mediaTypes.video", {}),
                        r = (0, n.A)(e, "params.video", {}),
                        t = {};
                    if (Array.isArray(a.playerSize)) {
                        const e = Array.isArray(a.playerSize[0]) ? a.playerSize[0] : a.playerSize;
                        t.w = e[0], t.h = e[1]
                    }
                    const i = { ...t,
                        ...a,
                        ...r
                    };
                    i.context && i.context === o.H6 && (i.playerName = function(e) {
                        return I.isRendererPreferredFromPublisher(e) ? "other" : "adagio"
                    }(e)), e.mediaTypes.video = i, (0, o.aP)(e)
                }

                function T(e) {
                    if (!e.admNative || !Array.isArray(e.admNative.assets)) return void(0, s.logError)(`${v} Invalid native response`);
                    const a = {};
                    e.admNative.assets.forEach((e => {
                        if (e.title) a.title = e.title.text;
                        else if (e.data) ! function(e) {
                            const r = {
                                1: "sponsoredBy",
                                2: "body",
                                3: "rating",
                                4: "likes",
                                5: "downloads",
                                6: "price",
                                7: "salePrice",
                                8: "phone",
                                9: "address",
                                10: "body2",
                                11: "displayUrl",
                                12: "cta"
                            };
                            r.hasOwnProperty(e.type) && "string" == typeof e.value && (a[r[e.type]] = e.value)
                        }(e.data);
                        else if (e.img)
                            if (1 === e.img.type) a.icon = {
                                url: e.img.url,
                                width: e.img.w,
                                height: e.img.h
                            };
                            else a.image = {
                                url: e.img.url,
                                width: e.img.w,
                                height: e.img.h
                            }
                    })), e.admNative.link && (e.admNative.link.url && (a.clickUrl = e.admNative.link.url), Array.isArray(e.admNative.link.clicktrackers) && (a.clickTrackers = e.admNative.link.clicktrackers)), Array.isArray(e.admNative.eventtrackers) ? (a.impressionTrackers = [], e.admNative.eventtrackers.forEach((e => {
                        if (1 === e.event) switch (e.method) {
                            case 1:
                                a.impressionTrackers.push(e.url);
                                break;
                            case 2:
                                const r = `<script async src="${e.url}"><\/script>`;
                                a.javascriptTrackers ? a.javascriptTrackers += `\n${r}` : a.javascriptTrackers = r
                        }
                    }))) : (a.impressionTrackers = Array.isArray(e.admNative.imptrackers) ? e.admNative.imptrackers : [], e.admNative.jstracker && (a.javascriptTrackers = e.admNative.jstracker)), e.admNative.privacy && (a.privacyLink = e.admNative.privacy), e.admNative.ext && (a.ext = {}, e.admNative.ext.bvw && (a.ext.adagio_bvw = e.admNative.ext.bvw)), e.native = a
                }

                function k(e, a) {
                    if (e.params = e.params || {}, e.params[a]) return;
                    const r = m.$W.getConfig("adagio") || {},
                        t = e.ortb2,
                        i = r[a] || (0, n.A)(t, `site.ext.data.${a}`, null);
                    if (i) {
                        if (Array.isArray(i)) return void(i.length && (e.params[a] = i[0].toString()));
                        e.params[a] = i.toString()
                    }
                }

                function U(e) {
                    const a = m.$W.getConfig("adagio") || {};
                    e.params = e.params || {}, a.siteId && (e.params.organizationId = a.siteId.split(":")[0], e.params.site = a.siteId.split(":")[1]), e.params.placement = (0, n.A)(e, "ortb2Imp.ext.data.placement", e.params.placement), e.params.placement || !0 !== a.useAdUnitCodeAsPlacement && !0 !== e.params.useAdUnitCodeAsPlacement || (e.params.placement = e.adUnitCode), e.params.adUnitElementId = (0, n.A)(e, "ortb2Imp.ext.data.divId", e.params.adUnitElementId), e.params.adUnitElementId || (!0 === a.useAdUnitCodeAsAdUnitElementId || !0 === e.params.useAdUnitCodeAsAdUnitElementId ? e.params.adUnitElementId = e.adUnitCode : e.params.adUnitElementId = function(e) {
                        const a = (0, g.p)(e);
                        if (a.divId) return a.divId
                    }(e.adUnitCode)), k(e, "pagetype"), k(e, "category")
                }
                const S = {
                        bootstrapPlayer: function(e) {
                            const a = e.outstreamRendererCode,
                                r = {
                                    code: e.adUnitCode
                                };
                            if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), !e.vastXml && !e.vastUrl) return void(0, s.logError)(`${v} no vastXml or vastUrl on bid`);
                            if (!window.bluebillywig || !window.bluebillywig.renderers || !window.bluebillywig.renderers.length) return void(0, s.logError)(`${v} no BlueBillywig renderers found!`);
                            const t = this.getRendererId(A, a),
                                i = {};
                            e.skipOffset && (i.skipOffset = e.skipOffset.toString());
                            const n = window.bluebillywig.renderers.find((e => e._id === t));
                            if (!n) return void(0, s.logError)(`${v} couldn't find a renderer with ID ${t}`);
                            const d = document.getElementById(e.adUnitCode);
                            n.bootstrap(r, d, i)
                        },
                        newRenderer: function(e, a) {
                            const r = h.replace("$RENDERER", a),
                                t = p.A4.install({
                                    url: r,
                                    loaded: !1,
                                    adUnitCode: e
                                });
                            try {
                                t.setRender(this.outstreamRender)
                            } catch (e) {
                                (0, s.logError)(`${v} error trying to setRender`, e)
                            }
                            return t
                        },
                        outstreamRender: function(e) {
                            e.renderer.push((() => {
                                S.bootstrapPlayer(e)
                            }))
                        },
                        getRendererId: function(e, a) {
                            return `${e}-${a}`
                        }
                    },
                    C = {
                        code: "adagio",
                        gvlid: 617,
                        supportedMediaTypes: b,
                        isBidRequestValid: e => (e.params = e.params || {}, U(e), !!(e.params.organizationId && e.params.site && e.params.placement) || ((0, s.logWarn)(`${v} at least one required param is missing.`), !1)),
                        buildRequests(e, a) {
                            e = (0, c.Xj)(e);
                            const r = "https:" === location.protocol ? 1 : 0,
                                t = I.getDevice(),
                                d = I.getSite(a),
                                o = I.getAdagioNs().pageviewId,
                                p = function(e) {
                                    if (!(0, n.A)(e, "gdprConsent")) return !1;
                                    const {
                                        apiVersion: a,
                                        gdprApplies: r,
                                        consentString: t,
                                        allowAuctionWithoutConsent: i
                                    } = e.gdprConsent;
                                    return (0, s.cleanObj)({
                                        apiVersion: a,
                                        consentString: t,
                                        consentRequired: r ? 1 : 0,
                                        allowAuctionWithoutConsent: i ? 1 : 0
                                    })
                                }(a) || {},
                                l = function(e) {
                                    return !!(0, n.A)(e, "uspConsent") && {
                                        uspConsent: e.uspConsent
                                    }
                                }(a) || {},
                                u = {
                                    required: !0 === m.$W.getConfig("coppa") ? 1 : 0
                                },
                                {
                                    gpp: g,
                                    gpp_sid: y
                                } = (0, n.A)(a, "ortb2.regs", {}),
                                A = (h = e[0], (0, n.A)(h, "schain"));
                            var h;
                            const T = function(e) {
                                    if ((0, n.A)(e, "userIdAsEids")) return e.userIdAsEids
                                }(e[0]) || [],
                                k = (0, n.A)(m.$W.getConfig("userSync"), "syncEnabled") && f.zt.canBidderRegisterSync("iframe", "adagio"),
                                U = (0, n.A)(a, "ortb2.regs.ext.dsa"),
                                S = (0, n.A)(a, "ortb2.site.ext.data.adg_rtd.session", {});
                            Object.keys(S).length || ((0, s.logInfo)(v, "No session data provided. A new session is be generated."), S.new = !0, S.rnd = Math.random());
                            const C = (0, n.A)(a, "ortb2.site.ext.data.adg_rtd.uid") || (0, s.generateUUID)(),
                                N = e.map((e => {
                                    const a = (0, s.deepClone)(e);
                                    if (a.auctionId = C, a.params.splitKeyword && ((0, s.isStr)(a.params.splitKeyword) || (0, s.isNumber)(a.params.splitKeyword) ? a.params.splitKeyword = a.params.splitKeyword.toString() : (delete a.params.splitKeyword, (0, s.logWarn)(v, "The splitKeyword param have been removed because the type is invalid, accepted type: number or string."))), a.params.organizationId = a.params.organizationId.toString(), a.params.dataLayer)
                                        if ((0, s.isStr)(a.params.dataLayer) || (0, s.isNumber)(a.params.dataLayer) || (0, s.isArray)(a.params.dataLayer) || (0, s.isFn)(a.params.dataLayer))(0, s.logWarn)(v, "The dataLayer param is invalid, only object is accepted as a type."), delete a.params.dataLayer;
                                        else {
                                            let e = !1;
                                            a.params.dl = a.params.dataLayer, delete a.params.dataLayer, Object.keys(a.params.dl).forEach((r => {
                                                a.params.dl[r] && ((0, s.isStr)(a.params.dl[r]) || (0, s.isNumber)(a.params.dl[r]) ? a.params.dl[r] = a.params.dl[r].toString() : (e = !0, delete a.params.dl[r]))
                                            })), e && (0, s.logWarn)(v, "Some parameters of the dataLayer property have been removed because the type is invalid, accepted type: number or string.")
                                        }
                                    const r = function(e) {
                                        if (!(0, s.isFn)(e.getFloor)) return !1;
                                        const a = [],
                                            r = (r, t) => {
                                                const i = e.getFloor({
                                                    currency: "USD",
                                                    mediaType: r,
                                                    size: t
                                                });
                                                a.push((0, s.cleanObj)({
                                                    mt: r,
                                                    s: (0, s.isArray)(t) ? `${t[0]}x${t[1]}` : void 0,
                                                    f: isNaN(i ? .floor) || "USD" !== i ? .currency ? void 0 : i ? .floor
                                                }))
                                            };
                                        return Object.keys(e.mediaTypes).forEach((a => {
                                            if (-1 !== b.indexOf(a)) {
                                                const t = a === i.G_ ? "playerSize" : "sizes";
                                                e.mediaTypes[a][t] && e.mediaTypes[a][t].length ? (0, s.isArray)(e.mediaTypes[a][t][0]) ? e.mediaTypes[a][t].forEach((e => {
                                                    r(a, [e[0], e[1]])
                                                })) : r(a, [e.mediaTypes[a][t][0], e.mediaTypes[a][t][1]]) : r(a, "*")
                                            }
                                        })), a
                                    }(e);
                                    if ((0, s.isArray)(r) && r.length) {
                                        if (a.floors = r, (0, n.A)(a, "mediaTypes.banner")) {
                                            const e = a.mediaTypes.banner,
                                                r = function() {
                                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                                    const r = {
                                                            size: e,
                                                            floor: null
                                                        },
                                                        t = a.floors.filter((e => e.mt === i.D4)),
                                                        s = t.find((a => a.s === e.join("x")));
                                                    return r.floor = t ? s ? s.f : t[0].f : null, r
                                                };
                                            a.mediaTypes.banner.bannerSizes = (0, s.isArray)(e.sizes[0]) ? e.sizes.map((e => r(e))) : r(e.sizes)
                                        }
                                        if ((0, n.A)(a, "mediaTypes.video")) {
                                            const e = a.mediaTypes.video,
                                                r = a.floors.filter((e => e.mt === i.G_)),
                                                t = e.playerSize && (0, s.isArray)(e.playerSize[0]) ? e.playerSize[0] : e.playerSize,
                                                n = t ? r.find((e => e.s === t.join("x"))) : void 0;
                                            a.mediaTypes.video.floor = r ? n ? n.f : r[0].f : null
                                        }
                                        if ((0, n.A)(a, "mediaTypes.native")) {
                                            const e = a.floors.filter((e => e.mt === i.s6));
                                            e.length && (a.mediaTypes.native.floor = e[0].f)
                                        }
                                    }(0, n.A)(a, "mediaTypes.video") && w(a);
                                    const t = (0, n.A)(a, "ortb2Imp.ext.gpid") || (0, n.A)(a, "ortb2Imp.ext.data.pbadslot");
                                    t && (a.gpid = t);
                                    const d = { ...(0, n.A)(a, "ortb2.site.ext.data.adg_rtd.features", {}),
                                        print_number: (a.bidderRequestsCount || 1).toString(),
                                        adunit_position: (0, n.A)(a, "ortb2Imp.ext.data.adg_rtd.adunit_position", null)
                                    };
                                    a.features = Object.entries(d).reduce(((e, a) => {
                                        let [r, t] = a;
                                        return null == t || (e[r] = t), e
                                    }), {}), delete a.params.siteId;
                                    return {
                                        adUnitCode: a.adUnitCode,
                                        auctionId: a.auctionId,
                                        bidder: a.bidder,
                                        bidId: a.bidId,
                                        params: a.params,
                                        features: a.features,
                                        gpid: a.gpid,
                                        mediaTypes: a.mediaTypes,
                                        nativeParams: a.nativeParams,
                                        score: a.score,
                                        transactionId: a.transactionId
                                    }
                                })),
                                E = N.reduce(((e, a) => {
                                    const r = a.params.organizationId;
                                    return e[r] = e[r] || [], e[r].push(a), e
                                }), {});
                            e.forEach((e => {
                                e.params.pageviewId = o
                            }));
                            return Object.keys(E).map((e => ({
                                method: "POST",
                                url: "https://mp.4dex.io/prebid",
                                data: {
                                    organizationId: e,
                                    hasRtd: I.hasRtd() ? 1 : 0,
                                    secure: r,
                                    device: t,
                                    site: d,
                                    pageviewId: o,
                                    adUnits: E[e],
                                    data: {
                                        session: S
                                    },
                                    regs: {
                                        gdpr: p,
                                        coppa: u,
                                        ccpa: l,
                                        gpp: g || "",
                                        gppSid: y || [],
                                        dsa: U
                                    },
                                    schain: A,
                                    user: {
                                        eids: T
                                    },
                                    prebidVersion: "9.24.0",
                                    usIfr: k
                                },
                                options: {
                                    contentType: "text/plain"
                                }
                            })))
                        },
                        interpretResponse(e, a) {
                            let r = [];
                            try {
                                const t = e.body;
                                t && (t.data && I.hasRtd() && I.getAdagioNs().queue.push({
                                    action: "ssp-data",
                                    ts: Date.now(),
                                    data: t.data
                                }), t.bids && t.bids.forEach((e => {
                                    const t = (0, u.I6)(a.data.adUnits, (a => a.bidId === e.requestId));
                                    if (t) {
                                        if (e.meta = (0, n.A)(e, "meta", {}), e.meta.mediaType = e.mediaType, e.meta.advertiserDomains = Array.isArray(e.aDomain) && e.aDomain.length ? e.aDomain : [], e.mediaType === i.G_) {
                                            const a = (0, n.A)(t, "mediaTypes.video.context");
                                            if (!e.vastUrl && e.vastXml && (e.vastUrl = "data:text/xml;charset=utf-8;base64," + window.btoa(e.vastXml.replace(/\\"/g, '"'))), a === o.H6) {
                                                if (e.outstreamRendererCode = (0, n.A)(t, "params.rendererCode", "renderer"), (0, n.A)(t, "mediaTypes.video.skip")) {
                                                    const a = (0, n.A)(t, "mediaTypes.video.skipafter", 5);
                                                    e.skipOffset = a
                                                }
                                                e.renderer = S.newRenderer(e.adUnitCode, e.outstreamRendererCode)
                                            }
                                        }
                                        e.mediaType === i.s6 && T(e), e.site = t.params.site, e.placement = t.params.placement, e.pagetype = t.params.pagetype, e.category = t.params.category
                                    }
                                    r.push(e)
                                })))
                            } catch (e) {
                                (0, s.logError)(e)
                            }
                            return r
                        },
                        getUserSyncs(e, a) {
                            if (!a.length || "" === a[0].body || !a[0].body.userSyncs) return !1;
                            return a[0].body.userSyncs.map((e => ({
                                type: "p" === e.t ? "image" : "iframe",
                                url: e.u
                            })))
                        }
                    };
                (0, y.a$)(C), (0, t.E)("adagioBidAdapter")
            }
        },
        e => {
            e.O(0, [33005, 35759, 60802, 51085], (() => {
                return a = 93800, e(e.s = a);
                var a
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [65601], {
            32855: (e, t, a) => {
                var n = a(7873),
                    i = a(45569),
                    o = a(11445),
                    s = a(41580),
                    d = a(16833),
                    r = a(12938),
                    g = a(91069),
                    c = a(70433),
                    u = a(63172),
                    m = a(73978),
                    l = a(51252);
                const p = "adagio",
                    f = "https://script.4dex.io/a/latest/adagio.js",
                    h = "code",
                    w = "gpid",
                    b = (0, r.vM)({
                        moduleType: i.zu,
                        moduleName: p
                    }),
                    {
                        logError: v,
                        logWarn: y
                    } = (0, g.prefixLog)("AdagioRtdProvider:"),
                    S = new Set,
                    A = function() {
                        const e = {
                            session: {}
                        };
                        return {
                            init: () => {
                                b.getDataFromLocalStorage("adagio", (t => {
                                    const {
                                        rnd: a,
                                        vwSmplg: n,
                                        vwSmplgNxt: i,
                                        expiry: o,
                                        lastActivityTime: s,
                                        id: d,
                                        pages: r,
                                        testName: c,
                                        testVersion: u
                                    } = I.getSessionFromLocalStorage(t), m = (e => !(0, g.isNumber)(e) || Date.now() > e)(o), l = s ? void 0 : 2;
                                    e.session = {
                                        v: l,
                                        rnd: a,
                                        pages: r || 1,
                                        new: m,
                                        ...void 0 !== n && {
                                            vwSmplg: n
                                        },
                                        ...void 0 !== i && {
                                            vwSmplgNxt: i
                                        },
                                        ...void 0 !== o && {
                                            expiry: o
                                        },
                                        ...void 0 !== s && {
                                            lastActivityTime: s
                                        },
                                        ...void 0 !== d && {
                                            id: d
                                        }
                                    }, m && (e.session.new = !0, e.session.id = (0, g.generateUUID)(), e.session.rnd = Math.random());
                                    const {
                                        testName: p,
                                        testVersion: f,
                                        expiry: h,
                                        sessionId: w
                                    } = I.getAbTestFromLocalStorage(t);
                                    2 === l ? h && h > Date.now() && (!w || w === e.session.id) && (e.session.testName = p, e.session.testVersion = f) : (e.session.testName = c, e.session.testVersion = u), I.getAdagioNs().queue.push({
                                        action: "session",
                                        ts: Date.now(),
                                        data: {
                                            session: { ...e.session
                                            }
                                        }
                                    })
                                }))
                            },
                            get: function() {
                                return e.session
                            }
                        }
                    }(),
                    x = function() {
                        const e = {
                            initialized: !1,
                            data: {}
                        };
                        return {
                            reset: function() {
                                e.initialized = !1, e.data = {}
                            },
                            get: function() {
                                const t = (0, m.h)();
                                return e.initialized || (e.data = {
                                    page_dimensions: W().toString(),
                                    viewport_dimensions: D().toString(),
                                    user_timestamp: (Math.floor((new Date).getTime() / 1e3) - 60 * (new Date).getTimezoneOffset()).toString(),
                                    dom_loading: (0, g.getDomLoadingDuration)(t).toString()
                                }, e.initialized = !0), { ...e.data
                                }
                            }
                        }
                    }(),
                    I = {
                        getAdagioNs: function() {
                            return m.B
                        },
                        getSession: function() {
                            return A
                        },
                        getFeatures: function() {
                            return x
                        },
                        getGuard: function() {
                            return S
                        },
                        isAdagioBidder: function(e) {
                            return !!e && (e + o.Ay.aliasRegistry[e]).toLowerCase().includes("adagio")
                        },
                        getSessionFromLocalStorage: function(e) {
                            const t = {
                                    new: !0,
                                    rnd: Math.random()
                                },
                                a = this.getObjFromStorageValue(e);
                            return a && a.session ? a.session : t
                        },
                        getAbTestFromLocalStorage: function(e) {
                            const t = this.getObjFromStorageValue(e);
                            return t && t.abTest ? t.abTest : {}
                        },
                        getObjFromStorageValue: function(e) {
                            return JSON.parse(e, (function(e, t) {
                                if ("_" !== e.charAt(0) || "" === e) return t
                            }))
                        }
                    };
                const T = {
                    name: p,
                    gvlid: 617,
                    init: function(e, t) {
                        return (0, g.isStr)(e.params ? .organizationId) && (0, g.isStr)(e.params ? .site) ? (I.getAdagioNs().hasRtd = !0, I.getSession().init(), function(e) {
                            const t = new Set(["impressionViewable", "slotRenderEnded", "slotVisibilityChanged"]),
                                a = new Set(["noad", "setHeaderBiddingWinner"]),
                                n = new Set(["adLoaded"]),
                                i = (0, g.getWindowSelf)();
                            Array.isArray(I.getAdagioNs().windows) || (I.getAdagioNs().windows = []);
                            let o = I.getAdagioNs().windows.find((e => e.self === i));
                            o || (o = {
                                self: i
                            }, I.getAdagioNs().windows.push(o));
                            const s = (e, t, a, n, o) => {
                                try {
                                    if (a.adserver === n) return;
                                    i[e] = i[e] || {}, i[e][t] = i[e][t] || [], o()
                                } catch (e) {
                                    v(e)
                                }
                            };
                            s("googletag", "cmd", i, "gpt", (() => {
                                i.googletag.cmd.push((() => {
                                    t.forEach((e => {
                                        i.googletag.pubads().addEventListener(e, (t => {
                                            I.getAdagioNs().queue.push({
                                                action: "gpt-event",
                                                data: {
                                                    eventName: e,
                                                    args: t,
                                                    _window: i
                                                },
                                                ts: Date.now()
                                            })
                                        }))
                                    })), o.adserver = "gpt"
                                }))
                            })), s("sas", "cmd", i, "sas", (() => {
                                i.sas.cmd.push((() => {
                                    a.forEach((e => {
                                        i.sas.events.on(e, (t => {
                                            I.getAdagioNs().queue.push({
                                                action: "sas-event",
                                                data: {
                                                    eventName: e,
                                                    args: t,
                                                    _window: i
                                                },
                                                ts: Date.now()
                                            })
                                        }))
                                    })), o.adserver = "sas"
                                }))
                            })), s("apntag", "anq", i, "ast", (() => {
                                i.apntag.anq.push((() => {
                                    n.forEach((e => {
                                        i.apntag.onEvent(e, (() => {
                                            I.getAdagioNs().queue.push({
                                                action: "ast-event",
                                                data: {
                                                    eventName: e,
                                                    args: arguments,
                                                    _window: i
                                                },
                                                ts: Date.now()
                                            })
                                        }))
                                    })), o.adserver = "ast"
                                }))
                            }))
                        }(e), function(e) {
                            b.localStorageIsEnabled((t => {
                                t && (0, s.R)(f, i.zu, p, void 0, void 0, {
                                    id: `adagiojs-${(0,g.getUniqueIdentifierStr)()}`,
                                    "data-pid": e.params.organizationId
                                })
                            }))
                        }(e), !0) : (v("organizationId is required and must be a string."), !1)
                    },
                    getBidRequestData: function(e, t, a) {
                        const i = (0, c.A)(a, "params", {}),
                            {
                                site: o
                            } = e.ortb2Fragments.global,
                            s = I.getFeatures().get(),
                            d = {
                                uid: (0, g.generateUUID)(),
                                pageviewId: m.B.pageviewId,
                                features: { ...s
                                },
                                session: { ...A.get()
                                }
                            };
                        (0, u.J)(o, "ext.data.adg_rtd", d), (e.adUnits || (0, n.m)().adUnits || []).forEach((e => {
                            e.ortb2Imp = e.ortb2Imp || {};
                            const t = (0, c.A)(e, "ortb2Imp");
                            let a = (0, c.A)(t, "ext.data.divId");
                            a || (a = (0, l.p)(e.code).divId, (0, u.J)(t, "ext.data.divId", a || e.code));
                            const n = function(e) {
                                if (!(0, g.isSafeFrameWindow)() && !(0, g.canAccessWindowTop)()) return "";
                                const t = {
                                    x: 0,
                                    y: 0
                                };
                                if ((0, g.isSafeFrameWindow)()) {
                                    const {
                                        self: e
                                    } = (0, g.getSafeframeGeometry)() || {};
                                    if (!e) return "";
                                    t.x = Math.round(e.t), t.y = Math.round(e.l)
                                } else try {
                                    const a = (0, g.getWindowTop)(),
                                        n = a.document;
                                    let i;
                                    if (!0 === (0, g.inIframe)()) {
                                        const t = (0, g.getWindowSelf)();
                                        i = N(t.document.getElementById(e), t)
                                    } else i = a.document.getElementById(e);
                                    if (!i) return "";
                                    let o = i.getBoundingClientRect();
                                    const s = n.documentElement,
                                        d = n.body,
                                        r = n.clientTop || d.clientTop || 0,
                                        c = n.clientLeft || d.clientLeft || 0,
                                        u = a.pageYOffset || s.scrollTop || d.scrollTop,
                                        m = a.pageXOffset || s.scrollLeft || d.scrollLeft,
                                        l = a.getComputedStyle(i, null);
                                    "none" === l.display && y("The element is hidden. The slot position cannot be computed."), t.x = Math.round(o.left + m - c), t.y = Math.round(o.top + u - r)
                                } catch (e) {
                                    return v(e), ""
                                }
                                return `${t.x}x${t.y}`
                            }(a);
                            if ((0, u.J)(t, "ext.data.adg_rtd.adunit_position", n), !(0, c.A)(t, "ext.data.placement")) {
                                const {
                                    placementSource: a = ""
                                } = i;
                                switch (a.toLowerCase()) {
                                    case h:
                                        (0, u.J)(t, "ext.data.placement", e.code);
                                        break;
                                    case w:
                                        (0, u.J)(t, "ext.data.placement", (0, c.A)(t, "ext.gpid"));
                                        break;
                                    default:
                                        y("`ortb2Imp.ext.data.placement` is missing and `params.definePlacement` is not set in the config.")
                                }
                            }
                            const s = e.bids.find((e => I.isAdagioBidder(e.bidder)));
                            if (s) {
                                let e = !1;
                                !(0, c.A)(o, "ext.data.pagetype") && s.params.pagetype && ((0, u.J)(o, "ext.data.pagetype", s.params.pagetype), e = !0), !(0, c.A)(o, "ext.data.category") && s.params.category && ((0, u.J)(o, "ext.data.category", s.params.category), e = !0);
                                let a = !1;
                                (0, c.A)(t, "ext.data.placement") || s.params.placement && ((0, u.J)(t, "ext.data.placement", s.params.placement), a = !0), e && y("`pagetype` and `category` must be defined in the FPD `ortb2.site.ext.data` object. Relying on `adUnits[].bids.adagio.params` is deprecated."), a && y("`placement` must be defined in the FPD `adUnits[].ortb2Imp.ext.data` object. Relying on `adUnits[].bids.adagio.params` is deprecated.")
                            }
                        })), t()
                    },
                    onBidRequestEvent: function(e, t, a) {
                        setTimeout((() => {
                            e.bids.forEach((e => {
                                const a = (0, c.A)(e, "ortb2.site.ext.data.adg_rtd.uid");
                                if (!a) return void v("The `uid` is required to store the request in the ADAGIO namespace.");
                                const i = `${e.adUnitCode}-${a}`;
                                I.getGuard().has(i) || (I.getGuard().add(i), function(e, t) {
                                    try {
                                        const {
                                            bidder: a,
                                            adUnitCode: i,
                                            mediaTypes: o,
                                            params: s,
                                            auctionId: d,
                                            bidderRequestsCount: r,
                                            ortb2: g,
                                            ortb2Imp: u
                                        } = e, {
                                            organizationId: m,
                                            site: l
                                        } = t.params, p = (0, c.A)(g, "site.ext.data", {}), f = {
                                            bidder: a,
                                            adUnitCode: i,
                                            mediaTypes: o,
                                            params: s,
                                            auctionId: d,
                                            bidderRequestsCount: r,
                                            ortb2: p,
                                            ortb2Imp: (0, c.A)(u, "ext.data", {}),
                                            localPbjs: "pbjs",
                                            localPbjsRef: (0, n.m)(),
                                            organizationId: m,
                                            site: l
                                        };
                                        I.getAdagioNs().queue.push({
                                            action: "store",
                                            ts: Date.now(),
                                            data: f
                                        })
                                    } catch (e) {
                                        v(e)
                                    }
                                }(e, t))
                            }))
                        }), 1)
                    }
                };

                function N(e, t) {
                    try {
                        if ((0, g.getWindowTop)() === t) return e.getAttribute("id") || e.setAttribute("id", `adg-${(0,g.getUniqueIdentifierStr)()}`), e; {
                            const a = t.frameElement,
                                n = a.getBoundingClientRect(),
                                i = e.getBoundingClientRect();
                            return n.width === i.width && n.height === i.height && N(a, t.parent)
                        }
                    } catch (e) {
                        return y(e), !1
                    }
                }

                function W() {
                    if ((0, g.isSafeFrameWindow)() || !(0, g.canAccessWindowTop)()) return "";
                    const e = (0, g.getWindowTop)(),
                        t = e.document.querySelector("body");
                    if (!t) return "";
                    const a = e.document.documentElement;
                    return `${Math.max(t.scrollWidth,t.offsetWidth,a.clientWidth,a.scrollWidth,a.offsetWidth)}x${Math.max(t.scrollHeight,t.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)}`
                }

                function D() {
                    if (!(0, g.isSafeFrameWindow)() && !(0, g.canAccessWindowTop)()) return "";
                    const e = {
                        w: 0,
                        h: 0
                    };
                    if ((0, g.isSafeFrameWindow)()) {
                        const {
                            win: t
                        } = (0, g.getSafeframeGeometry)() || {};
                        if (!t) return "";
                        e.w = Math.round(t.w), e.h = Math.round(t.h)
                    } else {
                        const t = (0, g.getWindowTop)();
                        e.w = t.innerWidth, e.h = t.innerHeight
                    }
                    return `${e.w}x${e.h}`
                }(0, d.bz)("realTimeData", T), (0, n.E)("adagioRtdProvider")
            }
        },
        e => {
            e.O(0, [33005, 35759, 60802, 51085], (() => {
                return t = 32855, e(e.s = t);
                var t
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [44599], {
            50791: (e, r, t) => {
                t.d(r, {
                    I: () => q
                });
                var i = t(7873),
                    a = t(91069),
                    s = t(70433),
                    o = t(95789),
                    n = t(43272),
                    d = t(57377),
                    c = t(71371),
                    p = t(15901),
                    l = t(63895),
                    u = t(12938),
                    m = t(12693),
                    g = t(82621),
                    h = t(12449),
                    _ = t(24673),
                    f = t(554),
                    b = t(2349),
                    y = t(25761),
                    v = t(29906);
                const k = "appnexus",
                    w = "https://ib.adnxs.com/ut/v3/prebid",
                    I = "https://ib.adnxs-simple.com/ut/v3/prebid",
                    x = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"],
                    C = ["minduration", "maxduration", "skip", "skipafter", "playbackmethod", "api", "startdelay", "placement", "plcmt"],
                    A = ["age", "externalUid", "external_uid", "segments", "gender", "dnt", "language"],
                    S = ["geo", "device_id"],
                    T = ["enabled", "dongle", "member_id", "debug_timeout"],
                    U = {
                        apn_debug_dongle: "dongle",
                        apn_debug_member_id: "member_id",
                        apn_debug_timeout: "debug_timeout"
                    },
                    O = {
                        playback_method: {
                            unknown: 0,
                            auto_play_sound_on: 1,
                            auto_play_sound_off: 2,
                            click_to_play: 3,
                            mouse_over: 4,
                            auto_play_sound_unknown: 5
                        },
                        context: {
                            unknown: 0,
                            pre_roll: 1,
                            mid_roll: 2,
                            post_roll: 3,
                            outstream: 4,
                            "in-banner": 5,
                            "in-feed": 6,
                            interstitial: 7,
                            accompanying_content_pre_roll: 8,
                            accompanying_content_mid_roll: 9,
                            accompanying_content_post_roll: 10
                        }
                    },
                    E = {
                        body: "description",
                        body2: "desc2",
                        cta: "ctatext",
                        image: {
                            serverName: "main_image",
                            requiredParams: {
                                required: !0
                            }
                        },
                        icon: {
                            serverName: "icon",
                            requiredParams: {
                                required: !0
                            }
                        },
                        sponsoredBy: "sponsored_by",
                        privacyLink: "privacy_link",
                        salePrice: "saleprice",
                        displayUrl: "displayurl"
                    },
                    j = "<script",
                    N = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,
                    D = "trk.js",
                    R = (0, u.vM)({
                        bidderCode: k
                    }),
                    P = new Map([
                        [1, "Mobile/Tablet - General"],
                        [2, "Personal Computer"],
                        [3, "Connected TV"],
                        [4, "Phone"],
                        [5, "Tablet"],
                        [6, "Connected Device"],
                        [7, "Set Top Box"],
                        [8, "OOH Device"]
                    ]),
                    q = {
                        code: k,
                        gvlid: 32,
                        aliases: b.DX,
                        supportedMediaTypes: [c.D4, c.G_, c.s6],
                        isBidRequestValid: function(e) {
                            return !!(e.params.placementId || e.params.placement_id || e.params.member && (e.params.invCode || e.params.inv_code))
                        },
                        buildRequests: function(e, r) {
                            const t = (e = (0, h.Xj)(e)).map(M),
                                i = (0, p.I6)(e, B);
                            let s = {};
                            !0 === n.$W.getConfig("coppa") && (s = {
                                coppa: !0
                            }), i && Object.keys(i.params.user).filter((e => (0, p.mK)(A, e))).forEach((e => {
                                let r = (0, b.vk)(e);
                                if ("segments" === e && (0, a.isArray)(i.params.user[e])) {
                                    let t = [];
                                    i.params.user[e].forEach((e => {
                                        (0, a.isNumber)(e) ? t.push({
                                            id: e
                                        }): (0, a.isPlainObject)(e) && t.push(e)
                                    })), s[r] = t
                                } else "segments" !== e && (s[r] = i.params.user[e])
                            }));
                            const o = (0, p.I6)(e, G);
                            let d;
                            o && o.params && o.params.app && (d = {}, Object.keys(o.params.app).filter((e => (0, p.mK)(S, e))).forEach((e => d[e] = o.params.app[e])));
                            const c = (0, p.I6)(e, K);
                            let l;
                            c && c.params && o.params.app && o.params.app.id && (l = {
                                appid: c.params.app.id
                            });
                            let u = {},
                                m = {};
                            const _ = R.getCookie("apn_prebid_debug") || null;
                            if (_) try {
                                u = JSON.parse(_)
                            } catch (e) {
                                (0, a.logError)("AppNexus Debug Auction Cookie Error:\n\n" + e)
                            } else {
                                Object.keys(U).forEach((e => {
                                    let r = (0, a.getParameterByName)(e);
                                    (0, a.isStr)(r) && "" !== r && (u[U[e]] = r, u.enabled = !0)
                                })), u = (0, y.$)({
                                    member_id: "number",
                                    debug_timeout: "number"
                                }, u);
                                const r = (0, p.I6)(e, L);
                                r && r.debug && (u = r.debug)
                            }
                            u && u.enabled && Object.keys(u).filter((e => (0, p.mK)(T, e))).forEach((e => {
                                m[e] = u[e]
                            }));
                            const k = (0, p.I6)(e, $),
                                x = k ? parseInt(k.params.member, 10) : 0,
                                C = e[0].schain,
                                O = (0, p.I6)(e, H),
                                E = {
                                    tags: [...t],
                                    user: s,
                                    sdk: {
                                        source: "pbjs",
                                        version: "9.24.0"
                                    },
                                    schain: C
                                };
                            O && (E.iab_support = {
                                omidpn: "Appnexus",
                                omidpv: "9.24.0"
                            }), x > 0 && (E.member_id = x), o && (E.device = d), c && (E.app = l), r ? .ortb2 ? .device && (E.device = E.device || {}, (0, a.mergeDeep)(E.device, function(e) {
                                const r = {
                                    useragent: e.ua,
                                    devicetype: P.get(e.devicetype),
                                    make: e.make,
                                    model: e.model,
                                    os: e.os,
                                    os_version: e.osv,
                                    w: e.w,
                                    h: e.h,
                                    ppi: e.ppi,
                                    pxratio: e.pxratio
                                };
                                return Object.keys(r).reduce(((e, t) => (r[t] && (e[t] = r[t]), e)), {})
                            }(r.ortb2.device)));
                            let j = (0, a.deepClone)(r && r.ortb2),
                                N = (0, a.deepClone)(n.$W.getConfig("appnexusAuctionKeywords")) || {},
                                D = (0, f.QF)(j, N);
                            if (D.length > 0 && (E.keywords = D), n.$W.getConfig("adpod.brandCategoryExclusion") && (E.brand_category_uniqueness = !0), m.enabled && (E.debug = m, (0, a.logInfo)("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(m, null, 4))), r && r.gdprConsent && (E.gdpr_consent = {
                                    consent_string: r.gdprConsent.consentString,
                                    consent_required: r.gdprConsent.gdprApplies
                                }, r.gdprConsent.addtlConsent && -1 !== r.gdprConsent.addtlConsent.indexOf("~"))) {
                                let e = r.gdprConsent.addtlConsent,
                                    t = e.substring(e.indexOf("~") + 1);
                                E.gdpr_consent.addtl_consent = t.split(".").map((e => parseInt(e, 10)))
                            }
                            if (r && r.uspConsent && (E.us_privacy = r.uspConsent), r ? .gppConsent ? E.privacy = {
                                    gpp: r.gppConsent.gppString,
                                    gpp_sid: r.gppConsent.applicableSections
                                } : r ? .ortb2 ? .regs ? .gpp && (E.privacy = {
                                    gpp: r.ortb2.regs.gpp,
                                    gpp_sid: r.ortb2.regs.gpp_sid
                                }), r && r.refererInfo) {
                                let e = {
                                        rd_ref: encodeURIComponent(r.refererInfo.topmostLocation),
                                        rd_top: r.refererInfo.reachedTop,
                                        rd_ifs: r.refererInfo.numIframes,
                                        rd_stk: r.refererInfo.stack.map((e => encodeURIComponent(e))).join(",")
                                    },
                                    t = r.refererInfo.canonicalUrl;
                                (0, a.isStr)(t) && "" !== t && (e.rd_can = t), E.referrer_detection = e
                            }(0, p.I6)(e, W) && e.filter(W).forEach((e => {
                                const r = function(e, r) {
                                        const {
                                            durationRangeSec: t,
                                            requireExactDuration: i
                                        } = r.mediaTypes.video, a = function(e) {
                                            const {
                                                adPodDurationSec: r,
                                                durationRangeSec: t,
                                                requireExactDuration: i
                                            } = e, a = Math.min(...t), s = Math.floor(r / a);
                                            return i ? Math.max(s, t.length) : s
                                        }(r.mediaTypes.video), s = Math.max(...t), o = e.filter((e => e.uuid === r.bidId));
                                        let n = (0, b.GS)(...o, a);
                                        if (i) {
                                            const e = Math.ceil(a / t.length),
                                                r = (0, v.i)(n, e);
                                            t.forEach(((e, t) => {
                                                r[t].map((r => {
                                                    V(r, "minduration", e), V(r, "maxduration", e)
                                                }))
                                            }))
                                        } else n.map((e => V(e, "maxduration", s)));
                                        return n
                                    }(t, e),
                                    i = E.tags.filter((r => r.uuid !== e.bidId));
                                E.tags = [...i, ...r]
                            }));
                            if (e[0].userId) {
                                let r = [];
                                e[0].userIdAsEids.forEach((e => {
                                    !e || !e.uids || e.uids.length < 1 || e.uids.forEach((t => {
                                        let i = {
                                            source: e.source,
                                            id: t.id
                                        };
                                        "adserver.org" == e.source ? i.rti_partner = "TDID" : "uidapi.com" == e.source && (i.rti_partner = "UID2"), r.push(i)
                                    }))
                                })), r.length && (E.eids = r)
                            }
                            if (r ? .ortb2 ? .regs ? .ext ? .dsa) {
                                const e = r.ortb2.regs.ext.dsa,
                                    t = {};
                                if (["dsarequired", "pubrender", "datatopub"].forEach((r => {
                                        (0, a.isNumber)(e[r]) && (t[r] = e[r])
                                    })), (0, a.isArray)(e.transparency) && e.transparency.every((e => (0, a.isPlainObject)(e)))) {
                                    const r = [];
                                    e.transparency.forEach((e => {
                                        (0, a.isStr)(e.domain) && "" != e.domain && (0, a.isArray)(e.dsaparams) && e.dsaparams.every((e => (0, a.isNumber)(e))) && r.push(e)
                                    })), r.length > 0 && (t.transparency = r)
                                }(0, a.isEmpty)(t) || (E.dsa = t)
                            }
                            t[0].publisher_id && (E.publisher_id = t[0].publisher_id);
                            const q = function(e, r) {
                                let t = [],
                                    i = {
                                        withCredentials: !0
                                    },
                                    s = w;
                                (0, g.C)(r ? .gdprConsent) || (s = I);
                                "TRUE" !== (0, a.getParameterByName)("apn_test").toUpperCase() && !0 !== n.$W.getConfig("apn_test") || (i.customHeaders = {
                                    "X-Is-Test": 1
                                });
                                if (e.tags.length > 15) {
                                    const o = (0, a.deepClone)(e);
                                    (0, v.i)(e.tags, 15).forEach((e => {
                                        o.tags = e;
                                        const a = JSON.stringify(o);
                                        t.push({
                                            method: "POST",
                                            url: s,
                                            data: a,
                                            bidderRequest: r,
                                            options: i
                                        })
                                    }))
                                } else {
                                    const a = JSON.stringify(e);
                                    t = {
                                        method: "POST",
                                        url: s,
                                        data: a,
                                        bidderRequest: r,
                                        options: i
                                    }
                                }
                                return t
                            }(E, r);
                            return q
                        },
                        interpretResponse: function(e, r) {
                            let {
                                bidderRequest: t
                            } = r;
                            e = e.body;
                            const i = [];
                            if (!e || e.error) {
                                let r = `in response for ${t.bidderCode} adapter`;
                                return e && e.error && (r += `: ${e.error}`), (0, a.logError)(r), i
                            }
                            if (e.tags && e.tags.forEach((e => {
                                    const r = (n = e) && n.ads && n.ads.length && (0, p.I6)(n.ads, (e => e.rtb));
                                    var n;
                                    if (r) {
                                        if ((!0 === m.u.get(t.bidderCode, "allowZeroCpmBids") ? r.cpm >= 0 : r.cpm > 0) && (0, p.mK)(this.supportedMediaTypes, r.ad_type)) {
                                            const n = function(e, r, t) {
                                                const i = (0, a.getBidRequest)(e.uuid, [t]),
                                                    n = (0, a.getUniqueIdentifierStr)(),
                                                    d = {
                                                        adId: n,
                                                        requestId: e.uuid,
                                                        cpm: r.cpm,
                                                        creativeId: r.creative_id,
                                                        dealId: r.deal_id,
                                                        currency: "USD",
                                                        netRevenue: !0,
                                                        ttl: 300,
                                                        adUnitCode: i.adUnitCode,
                                                        appnexus: {
                                                            buyerMemberId: r.buyer_member_id,
                                                            dealPriority: r.deal_priority,
                                                            dealCode: r.deal_code
                                                        }
                                                    };
                                                r.adomain && (d.meta = Object.assign({}, d.meta, {
                                                    advertiserDomains: [r.adomain]
                                                }));
                                                r.advertiser_id && (d.meta = Object.assign({}, d.meta, {
                                                    advertiserId: r.advertiser_id
                                                }));
                                                r.dsa && (d.meta = Object.assign({}, d.meta, {
                                                    dsa: r.dsa
                                                }));

                                                function u(e) {
                                                    return {
                                                        ver: "1.0",
                                                        complete: 0,
                                                        nodes: [{
                                                            bsid: e.buyer_member_id.toString()
                                                        }]
                                                    }
                                                }
                                                r.buyer_member_id && (d.meta = Object.assign({}, d.meta, {
                                                    dchain: u(r)
                                                }));
                                                r.brand_id && (d.meta = Object.assign({}, d.meta, {
                                                    brandId: r.brand_id
                                                }));
                                                if (r.rtb.video) {
                                                    Object.assign(d, {
                                                        width: r.rtb.video.player_width,
                                                        height: r.rtb.video.player_height,
                                                        vastImpUrl: r.notify_url,
                                                        ttl: 3600
                                                    });
                                                    switch ((0, s.A)(i, "mediaTypes.video.context")) {
                                                        case c.LM:
                                                            const i = _.n[r.brand_category_id] ? _.n[r.brand_category_id] : null;
                                                            d.meta = Object.assign({}, d.meta, {
                                                                primaryCatId: i
                                                            });
                                                            const n = r.deal_priority;
                                                            d.video = {
                                                                context: c.LM,
                                                                durationSeconds: Math.floor(r.rtb.video.duration_ms / 1e3),
                                                                dealTier: n
                                                            }, d.vastUrl = r.rtb.video.asset_url;
                                                            break;
                                                        case l.H6:
                                                            if (d.adResponse = e, d.adResponse.ad = d.adResponse.ads[0], d.adResponse.ad.video = d.adResponse.ad.rtb.video, d.vastXml = r.rtb.video.content, r.renderer_url) {
                                                                const i = (0, p.I6)(t.bids, (r => r.bidId === e.uuid));
                                                                let n = (0, s.A)(i, "mediaTypes.video.renderer.options");
                                                                n || (n = (0, s.A)(i, "renderer.options")), d.renderer = function(e, r) {
                                                                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                                                    const i = o.A4.install({
                                                                        id: r.renderer_id,
                                                                        url: r.renderer_url,
                                                                        config: t,
                                                                        loaded: !1,
                                                                        adUnitCode: e
                                                                    });
                                                                    try {
                                                                        i.setRender(F)
                                                                    } catch (e) {
                                                                        (0, a.logWarn)("Prebid Error calling setRender on renderer", e)
                                                                    }
                                                                    return i.setEventHandlers({
                                                                        impression: () => (0, a.logMessage)("AppNexus outstream video impression event"),
                                                                        loaded: () => (0, a.logMessage)("AppNexus outstream video loaded event"),
                                                                        ended: () => {
                                                                            (0, a.logMessage)("AppNexus outstream renderer video event"), document.querySelector(`#${e}`).style.display = "none"
                                                                        }
                                                                    }), i
                                                                }(d.adUnitCode, r, n)
                                                            }
                                                            break;
                                                        case l.mn:
                                                            d.vastUrl = r.notify_url + "&redir=" + encodeURIComponent(r.rtb.video.asset_url)
                                                    }
                                                } else if (r.rtb[c.s6]) {
                                                    const e = r.rtb[c.s6];
                                                    let t;
                                                    if (function(e) {
                                                            if (!e || "" === e) return !1;
                                                            let r = e.match(N),
                                                                t = null != r && r.length >= 1,
                                                                i = e.match(D),
                                                                a = null != i && i.length >= 1;
                                                            return e.startsWith(j) && a && t
                                                        }(r.viewability.config)) {
                                                        let e = "pbjs_adid=" + n + ";pbjs_auc=" + i.adUnitCode;
                                                        t = r.viewability.config.replace("dom_id=%native_dom_id%", e)
                                                    }
                                                    let s = e.javascript_trackers;
                                                    null == s ? s = t : (0, a.isStr)(s) ? s = [s, t] : s.push(t), d[c.s6] = {
                                                        title: e.title,
                                                        body: e.desc,
                                                        body2: e.desc2,
                                                        cta: e.ctatext,
                                                        rating: e.rating,
                                                        sponsoredBy: e.sponsored,
                                                        privacyLink: e.privacy_link,
                                                        address: e.address,
                                                        downloads: e.downloads,
                                                        likes: e.likes,
                                                        phone: e.phone,
                                                        price: e.price,
                                                        salePrice: e.saleprice,
                                                        clickUrl: e.link.url,
                                                        displayUrl: e.displayurl,
                                                        clickTrackers: e.link.click_trackers,
                                                        impressionTrackers: e.impression_trackers,
                                                        video: e.video,
                                                        javascriptTrackers: s
                                                    }, e.main_img && (d[c.s6].image = {
                                                        url: e.main_img.url,
                                                        height: e.main_img.height,
                                                        width: e.main_img.width
                                                    }), e.icon && (d[c.s6].icon = {
                                                        url: e.icon.url,
                                                        height: e.icon.height,
                                                        width: e.icon.width
                                                    }), d[c.s6].ext = {
                                                        video: e.video,
                                                        customImage1: e.image1 && {
                                                            url: e.image1.url,
                                                            height: e.image1.height,
                                                            width: e.image1.width
                                                        },
                                                        customImage2: e.image2 && {
                                                            url: e.image2.url,
                                                            height: e.image2.height,
                                                            width: e.image2.width
                                                        },
                                                        customImage3: e.image3 && {
                                                            url: e.image3.url,
                                                            height: e.image3.height,
                                                            width: e.image3.width
                                                        },
                                                        customImage4: e.image4 && {
                                                            url: e.image4.url,
                                                            height: e.image4.height,
                                                            width: e.image4.width
                                                        },
                                                        customImage5: e.image5 && {
                                                            url: e.image5.url,
                                                            height: e.image5.height,
                                                            width: e.image5.width
                                                        },
                                                        customIcon1: e.icon1 && {
                                                            url: e.icon1.url,
                                                            height: e.icon1.height,
                                                            width: e.icon1.width
                                                        },
                                                        customIcon2: e.icon2 && {
                                                            url: e.icon2.url,
                                                            height: e.icon2.height,
                                                            width: e.icon2.width
                                                        },
                                                        customIcon3: e.icon3 && {
                                                            url: e.icon3.url,
                                                            height: e.icon3.height,
                                                            width: e.icon3.width
                                                        },
                                                        customIcon4: e.icon4 && {
                                                            url: e.icon4.url,
                                                            height: e.icon4.height,
                                                            width: e.icon4.width
                                                        },
                                                        customIcon5: e.icon5 && {
                                                            url: e.icon5.url,
                                                            height: e.icon5.height,
                                                            width: e.icon5.width
                                                        },
                                                        customSocialIcon1: e.socialicon1 && {
                                                            url: e.socialicon1.url,
                                                            height: e.socialicon1.height,
                                                            width: e.socialicon1.width
                                                        },
                                                        customSocialIcon2: e.socialicon2 && {
                                                            url: e.socialicon2.url,
                                                            height: e.socialicon2.height,
                                                            width: e.socialicon2.width
                                                        },
                                                        customSocialIcon3: e.socialicon3 && {
                                                            url: e.socialicon3.url,
                                                            height: e.socialicon3.height,
                                                            width: e.socialicon3.width
                                                        },
                                                        customSocialIcon4: e.socialicon4 && {
                                                            url: e.socialicon4.url,
                                                            height: e.socialicon4.height,
                                                            width: e.socialicon4.width
                                                        },
                                                        customSocialIcon5: e.socialicon5 && {
                                                            url: e.socialicon5.url,
                                                            height: e.socialicon5.height,
                                                            width: e.socialicon5.width
                                                        },
                                                        customTitle1: e.title1,
                                                        customTitle2: e.title2,
                                                        customTitle3: e.title3,
                                                        customTitle4: e.title4,
                                                        customTitle5: e.title5,
                                                        customBody1: e.body1,
                                                        customBody2: e.body2,
                                                        customBody3: e.body3,
                                                        customBody4: e.body4,
                                                        customBody5: e.body5,
                                                        customCta1: e.ctatext1,
                                                        customCta2: e.ctatext2,
                                                        customCta3: e.ctatext3,
                                                        customCta4: e.ctatext4,
                                                        customCta5: e.ctatext5,
                                                        customDisplayUrl1: e.displayurl1,
                                                        customDisplayUrl2: e.displayurl2,
                                                        customDisplayUrl3: e.displayurl3,
                                                        customDisplayUrl4: e.displayurl4,
                                                        customDisplayUrl5: e.displayurl5,
                                                        customSocialUrl1: e.socialurl1,
                                                        customSocialUrl2: e.socialurl2,
                                                        customSocialUrl3: e.socialurl3,
                                                        customSocialUrl4: e.socialurl4,
                                                        customSocialUrl5: e.socialurl5
                                                    }
                                                } else {
                                                    Object.assign(d, {
                                                        width: r.rtb.banner.width,
                                                        height: r.rtb.banner.height,
                                                        ad: r.rtb.banner.content
                                                    });
                                                    try {
                                                        if (r.rtb.trackers)
                                                            for (let e = 0; e < r.rtb.trackers[0].impression_urls.length; e++) {
                                                                const t = r.rtb.trackers[0].impression_urls[e],
                                                                    i = (0, a.createTrackPixelHtml)(t);
                                                                d.ad += i
                                                            }
                                                    } catch (e) {
                                                        (0, a.logError)("Error appending tracking pixel", e)
                                                    }
                                                }
                                                return d
                                            }(e, r, t);
                                            n.mediaType = function(e) {
                                                const r = e.ad_type;
                                                return r === c.G_ ? c.G_ : r === c.s6 ? c.s6 : c.D4
                                            }(r), i.push(n)
                                        }
                                    }
                                })), e.debug && e.debug.debug_info) {
                                let r = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                                r = r.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), (0, a.logMessage)("https://console.appnexus.com/docs/understanding-the-debug-auction"), (0, a.logMessage)(r)
                            }
                            return i
                        },
                        getUserSyncs: function(e, r, t, i, a) {
                            if (e.iframeEnabled && (0, g.C)(t)) return [{
                                type: "iframe",
                                url: "https://acdn.adnxs.com/dmp/async_usersync.html"
                            }];
                            if (e.pixelEnabled) {
                                return ["https://px.ads.linkedin.com/setuid?partner=appNexus"].map((e => ({
                                    type: "image",
                                    url: e
                                })))
                            }
                        }
                    };

                function M(e) {
                    const r = {};
                    Object.keys(e.params).forEach((r => {
                        let t = (0, b.vk)(r);
                        t !== r && (e.params[t] = e.params[r], delete e.params[r])
                    })), r.sizes = z(e.sizes), r.primary_size = r.sizes[0], r.ad_types = [], r.uuid = e.bidId, e.params.placement_id ? r.id = parseInt(e.params.placement_id, 10) : r.code = e.params.inv_code;
                    const t = (0, a.getParameterByName)("ast_override_div");
                    if ((0, a.isStr)(t) && "" !== t) {
                        const i = decodeURIComponent(t).split(",").find((r => r.startsWith(`${e.adUnitCode}:`)));
                        if (i) {
                            const e = i.split(":")[1];
                            e && (r.force_creative_id = parseInt(e, 10))
                        }
                    }
                    r.allow_smaller_sizes = e.params.allow_smaller_sizes || !1, r.use_pmt_rule = "boolean" == typeof e.params.use_payment_rule ? e.params.use_payment_rule : "boolean" == typeof e.params.use_pmt_rule && e.params.use_pmt_rule, r.prebid = !0, r.disable_psa = !0;
                    let i = function(e) {
                        if (!(0, a.isFn)(e.getFloor)) return e.params.reserve ? e.params.reserve : null;
                        let r = e.getFloor({
                            currency: "USD",
                            mediaType: "*",
                            size: "*"
                        });
                        if ((0, a.isPlainObject)(r) && !isNaN(r.floor) && "USD" === r.currency) return r.floor;
                        return null
                    }(e);
                    if (i && (r.reserve = i), e.params.position) r.position = {
                        above: 1,
                        below: 2
                    }[e.params.position] || 0;
                    else {
                        let t = (0, s.A)(e, "mediaTypes.banner.pos") || (0, s.A)(e, "mediaTypes.video.pos");
                        0 !== t && 1 !== t && 3 !== t || (r.position = 3 === t ? 2 : t)
                    }
                    e.params.traffic_source_code && (r.traffic_source_code = e.params.traffic_source_code), e.params.private_sizes && (r.private_sizes = z(e.params.private_sizes)), e.params.supply_type && (r.supply_type = e.params.supply_type), e.params.pub_click && (r.pubclick = e.params.pub_click), e.params.ext_inv_code && (r.ext_inv_code = e.params.ext_inv_code), e.params.publisher_id && (r.publisher_id = parseInt(e.params.publisher_id, 10)), e.params.external_imp_id && (r.external_imp_id = e.params.external_imp_id);
                    const o = (0, f.T_)((0, f.gg)((0, s.A)(e, "ortb2Imp.ext.data.keywords")), e.params ? .keywords);
                    o.length > 0 && (r.keywords = o);
                    let n = (0, s.A)(e, "ortb2Imp.ext.gpid") || (0, s.A)(e, "ortb2Imp.ext.data.pbadslot");
                    if (n && (r.gpid = n), (e.mediaType === c.s6 || (0, s.A)(e, `mediaTypes.${c.s6}`)) && (r.ad_types.push(c.s6), 0 === r.sizes.length && (r.sizes = z([1, 1])), e.nativeParams)) {
                        const t = function(e) {
                            const r = {};
                            return Object.keys(e).forEach((t => {
                                const i = E[t] && E[t].serverName || E[t] || t,
                                    s = E[t] && E[t].requiredParams;
                                r[i] = Object.assign({}, s, e[t]);
                                if (!(i !== E.image.serverName && i !== E.icon.serverName) && r[i].sizes) {
                                    let e = r[i].sizes;
                                    ((0, a.isArrayOfNums)(e) || (0, a.isArray)(e) && e.length > 0 && e.every((e => (0, a.isArrayOfNums)(e)))) && (r[i].sizes = z(r[i].sizes))
                                }
                                i === E.privacyLink && (r.privacy_supported = !0)
                            })), r
                        }(e.nativeParams);
                        r[c.s6] = {
                            layouts: [t]
                        }
                    } {
                        const t = (0, s.A)(e, `mediaTypes.${c.G_}`),
                            i = (0, s.A)(e, "mediaTypes.video.context");
                        r.hb_source = t && "adpod" === i ? 7 : 1, (e.mediaType === c.G_ || t) && r.ad_types.push(c.G_), (e.mediaType === c.G_ || t && "outstream" !== i) && (r.require_asset_url = !0), e.params.video && (r.video = {}, Object.keys(e.params.video).filter((e => (0, p.mK)(x, e))).forEach((t => {
                            switch (t) {
                                case "context":
                                case "playback_method":
                                    let i = e.params.video[t];
                                    i = (0, a.isArray)(i) ? i[0] : i, r.video[t] = O[t][i];
                                    break;
                                case "frameworks":
                                    break;
                                default:
                                    r.video[t] = e.params.video[t]
                            }
                        })), e.params.video.frameworks && (0, a.isArray)(e.params.video.frameworks) && (r.video_frameworks = e.params.video.frameworks)), t && (r.video = r.video || {}, Object.keys(t).filter((e => (0, p.mK)(C, e))).forEach((e => {
                            switch (e) {
                                case "minduration":
                                case "maxduration":
                                    "number" != typeof r.video[e] && (r.video[e] = t[e]);
                                    break;
                                case "skip":
                                    "boolean" != typeof r.video.skippable && (r.video.skippable = 1 === t[e]);
                                    break;
                                case "skipafter":
                                    "number" != typeof r.video.skipoffset && (r.video.skippoffset = t[e]);
                                    break;
                                case "playbackmethod":
                                    if ("number" != typeof r.video.playback_method) {
                                        let i = t[e];
                                        i = (0, a.isArray)(i) ? i[0] : i, i >= 1 && i <= 4 && (r.video.playback_method = i)
                                    }
                                    break;
                                case "api":
                                    if (!r.video_frameworks && (0, a.isArray)(t[e])) {
                                        let i = t[e].map((e => {
                                            let r = 4 === e ? 5 : 5 === e ? 4 : e;
                                            if (r >= 1 && r <= 5) return r
                                        })).filter((e => e));
                                        r.video_frameworks = i
                                    }
                                    break;
                                case "startdelay":
                                case "plcmt":
                                case "placement":
                                    if ("number" != typeof r.video.context) {
                                        const e = t.plcmt,
                                            i = t.placement,
                                            a = t.startdelay,
                                            s = function(e, r) {
                                                if (!e) return;
                                                if (2 === e) {
                                                    if (void 0 === r) return;
                                                    if (0 === r) return "accompanying_content_pre_roll";
                                                    if (-1 === r) return "accompanying_content_mid_roll";
                                                    if (-2 === r) return "accompanying_content_post_roll"
                                                } else {
                                                    if (3 === e) return "interstitial";
                                                    if (4 === e) return "outstream"
                                                }
                                            }(e, a) || function(e) {
                                                if (!e) return;
                                                if (2 === e) return "in-banner";
                                                if (3 === e) return "outstream";
                                                if (4 === e) return "in-feed";
                                                if (5 === e) return "intersitial"
                                            }(i) || function(e) {
                                                if (!e) return;
                                                if (0 === e) return "pre_roll";
                                                if (-1 === e) return "mid_roll";
                                                if (-2 === e) return "post_roll"
                                            }(a);
                                        r.video.context = O.context[s]
                                    }
                            }
                        }))), e.renderer && (r.video = Object.assign({}, r.video, {
                            custom_renderer_present: !0
                        }))
                    }
                    return e.params.frameworks && (0, a.isArray)(e.params.frameworks) && (r.banner_frameworks = e.params.frameworks), (0, s.A)(e, `mediaTypes.${c.D4}`) && r.ad_types.push(c.D4), 0 === r.ad_types.length && delete r.ad_types, r
                }

                function z(e) {
                    let r = [],
                        t = {};
                    if ((0, a.isArray)(e) && 2 === e.length && !(0, a.isArray)(e[0])) t.width = parseInt(e[0], 10), t.height = parseInt(e[1], 10), r.push(t);
                    else if ("object" == typeof e)
                        for (let i = 0; i < e.length; i++) {
                            let a = e[i];
                            t = {}, t.width = parseInt(a[0], 10), t.height = parseInt(a[1], 10), r.push(t)
                        }
                    return r
                }

                function B(e) {
                    return !!e.params.user
                }

                function $(e) {
                    return !!parseInt(e.params.member, 10)
                }

                function G(e) {
                    if (e.params) return !!e.params.app
                }

                function K(e) {
                    return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
                }

                function L(e) {
                    return !!e.debug
                }

                function W(e) {
                    return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === c.LM
                }

                function H(e) {
                    let r = !1;
                    const t = e.params,
                        i = e.params.video;
                    return t.frameworks && (0, a.isArray)(t.frameworks) && (r = (0, p.mK)(e.params.frameworks, 6)), !r && i && i.frameworks && (0, a.isArray)(i.frameworks) && (r = (0, p.mK)(e.params.video.frameworks, 6)), r
                }

                function V(e, r, t) {
                    (0, a.isEmpty)(e.video) && (e.video = {}), e.video[r] = t
                }

                function F(e, r) {
                    ! function(e) {
                        try {
                            const r = document.getElementById(e).querySelectorAll("div[id^='google_ads']");
                            r[0] && r[0].style.setProperty("display", "none")
                        } catch (e) {}
                    }(e.adUnitCode),
                    function(e) {
                        try {
                            const r = document.getElementById(e).querySelectorAll("script[id^='sas_script']");
                            r[0].nextSibling && "iframe" === r[0].nextSibling.localName && r[0].nextSibling.style.setProperty("display", "none")
                        } catch (e) {}
                    }(e.adUnitCode), e.renderer.push((() => {
                        (r ? .defaultView || window).ANOutstreamVideo.renderAd({
                            tagId: e.adResponse.tag_id,
                            sizes: [e.getSize().split("x")],
                            targetId: e.adUnitCode,
                            uuid: e.adResponse.uuid,
                            adResponse: e.adResponse,
                            rendererOptions: e.renderer.getConfig()
                        }, J.bind(null, e))
                    }))
                }

                function J(e, r, t) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: t
                    })
                }(0, d.a$)(q), (0, i.E)("appnexusBidAdapter")
            }
        },
        e => {
            e.O(0, [60802, 97247, 44982, 95444, 42698, 12126, 51085], (() => {
                return r = 50791, e(e.s = r);
                var r
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [38793], {
            96345: (e, n, t) => {
                var i = t(7873),
                    s = t(91069),
                    o = t(63172),
                    a = t(43272),
                    r = t(16916),
                    c = t(70068),
                    p = t(20965),
                    l = t(25555),
                    g = t(2604),
                    u = t(63806);
                let d, h, m, f, P = !1;

                function S(e, n) {
                    let {
                        onSuccess: t,
                        onError: i
                    } = n;
                    new l.k((n => n(e()))).then(t, (e => {
                        e instanceof b ? i(e.message, ...e.args) : i("GPP error:", e)
                    }))
                }
                class b {
                    constructor(e, n) {
                        this.message = e, this.args = null == n ? [] : [n]
                    }
                }
                class v {
                    apiVersion = "1.1";
                    static INST;
                    static get() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.c5;
                        if (null == this.INST) {
                            const n = e({
                                apiName: "__gpp",
                                apiArgs: ["command", "callback", "parameter"],
                                mode: p.q4
                            });
                            if (null == n) throw new b("GPP CMP not found");
                            this.INST = new this(n)
                        }
                        return this.INST
                    }#
                    e;#
                    n;#
                    t = [];
                    initialized = !1;
                    constructor(e) {
                        this.cmp = e, [this.#e, this.#n] = ["resolve", "reject"].map((e => n => {
                            for (; this.#t.length;) this.#t.pop()[e](n)
                        }))
                    }
                    init(e) {
                        const n = this.updateWhenReady(e);
                        return this.initialized || (e.gppVersion !== this.apiVersion && (0, s.logWarn)(`Unrecognized GPP CMP version: ${e.apiVersion}. Continuing using GPP API version ${this.apiVersion}...`), this.initialized = !0, this.cmp({
                            command: "addEventListener",
                            callback: (e, n) => {
                                null == n || n ? "error" === e ? .pingData ? .cmpStatus ? this.#n(new b('CMP status is "error"; please check CMP setup', e)) : this.isCMPReady(e ? .pingData || {}) && ["sectionChange", "signalStatus"].includes(e ? .eventName) && this.#e(this.updateConsent(e.pingData)) : this.#n(new b("Received error response from CMP", e)), null == f || null == e ? .pingData || this.isCMPReady(e.pingData) || (f = null)
                            }
                        })), n
                    }
                    refresh() {
                        return this.cmp({
                            command: "ping"
                        }).then(this.init.bind(this))
                    }
                    updateConsent(e) {
                        return new l.k((n => {
                            if (null == e || (0, s.isEmpty)(e)) throw new b("Received empty response from CMP", e);
                            const t = w(e);
                            (0, s.logInfo)("Retrieved GPP consent from CMP:", t), n(t)
                        }))
                    }
                    nextUpdate() {
                        const e = (0, l.v)();
                        return this.#t.push(e), e.promise
                    }
                    updateWhenReady(e) {
                        return this.isCMPReady(e) ? this.updateConsent(e) : this.nextUpdate()
                    }
                    isCMPReady(e) {
                        return "ready" === e.signalStatus
                    }
                }
                const C = {
                    iab: function(e) {
                        let {
                            onSuccess: n,
                            onError: t
                        } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.c5;
                        S((() => v.get(i).refresh()), {
                            onSuccess: n,
                            onError: t
                        })
                    },
                    static: function(e) {
                        return S((() => w(m)), e)
                    }
                };

                function y(e) {
                    let n = !1,
                        t = null;

                    function i(i, s, o) {
                        if (null != t && clearTimeout(t), n = !0, r.ad.setConsentData(i), "function" == typeof e) {
                            for (var a = arguments.length, c = new Array(a > 3 ? a - 3 : 0), p = 3; p < a; p++) c[p - 3] = arguments[p];
                            e(s, o, ...c)
                        }
                    }
                    if (!C.hasOwnProperty(d)) return void i(null, !1, `GPP CMP framework (${d}) is not a supported framework.  Aborting consentManagement module and resuming auction.`);
                    const s = {
                        onSuccess: e => i(e, !1),
                        onError: function(e) {
                            for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) t[s - 1] = arguments[s];
                            i(null, !0, e, ...t)
                        }
                    };
                    if (C[d](s), !n) {
                        const e = () => {
                            const e = e => {
                                i(e, !1, "GPP CMP did not load, continuing auction...")
                            };
                            S((() => w(f)), {
                                onSuccess: e,
                                onError: () => e(D())
                            })
                        };
                        0 === h ? e() : t = setTimeout(e, h)
                    }
                }
                const M = (0, u.R)("gpp", (() => f), y);

                function w(e) {
                    if (null != e ? .applicableSections && !Array.isArray(e.applicableSections) || null != e ? .gppString && !(0, s.isStr)(e.gppString) || null != e ? .parsedSections && !(0, s.isPlainObject)(e.parsedSections)) throw new b("CMP returned unexpected value during lookup process.", e);
                    return ["usnatv1", "uscav1"].forEach((n => {
                        e ? .parsedSections ? .[n] && (0, s.logWarn)(`Received invalid section from cmp: '${n}'. Some functionality may not work as expected`, e)
                    })), D(e)
                }

                function D() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return f = {
                        gppString: e ? .gppString,
                        applicableSections: e ? .applicableSections || [],
                        parsedSections: e ? .parsedSections || {},
                        gppData: e
                    }, r.ad.setConsentData(e), f
                }
                a.$W.getConfig("consentManagement", (e => function(e) {
                    (e = e && e.gpp) && "object" == typeof e ? ((0, s.isStr)(e.cmpApi) ? d = e.cmpApi : (d = "iab", (0, s.logInfo)("consentManagement.gpp config did not specify cmp.  Using system default setting (iab).")), (0, s.isNumber)(e.timeout) ? h = e.timeout : (h = 1e4, (0, s.logInfo)("consentManagement.gpp config did not specify timeout.  Using system default setting (10000).")), "static" === d && ((0, s.isPlainObject)(e.consentData) ? (m = e.consentData, h = 0) : (0, s.logError)("consentManagement.gpp config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), (0, s.logInfo)("consentManagement.gpp module has been activated..."), P || ((0, i.m)().requestBids.before(M, 50), g.U3.before(((e, n) => e(Object.assign({
                        gppConsent: r.ad.getConsentData()
                    }, n))))), P = !0, r.ad.enable(), y()) : (0, s.logWarn)("consentManagement.gpp config not defined, exiting consent manager module")
                }(e.consentManagement))), c.w.before((function(e, n) {
                    return e(n.then((e => {
                        const n = r.ad.getConsentData();
                        return n && (Array.isArray(n.applicableSections) && (0, o.J)(e, "regs.gpp_sid", n.applicableSections), (0, o.J)(e, "regs.gpp", n.gppString)), e
                    })))
                })), (0, i.E)("consentManagementGpp")
            }
        },
        e => {
            e.O(0, [57109, 90010, 60802, 51085], (() => {
                return n = 96345, e(e.s = n);
                var n
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [15081], {
            66117: (n, e, t) => {
                var o = t(7873),
                    s = t(91069),
                    i = t(63172),
                    r = t(43272),
                    a = t(16916),
                    c = t(15901),
                    l = t(1e3),
                    u = t(70068),
                    d = t(20965),
                    p = t(63806);
                const g = 2;
                let f, m, b, C, v, S, M = !1,
                    y = !1;
                const A = {
                    iab: function(n) {
                        let {
                            onSuccess: e,
                            onError: t,
                            onEvent: o
                        } = n;
                        const i = (0, d.c5)({
                            apiName: "__tcfapi",
                            apiVersion: g,
                            apiArgs: ["command", "version", "callback", "parameter"]
                        });
                        if (!i) return t("TCF2 CMP not found.");
                        i.isDirect ? (0, s.logInfo)("Detected CMP API is directly accessible, calling it now...") : (0, s.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now...");
                        i({
                            command: "addEventListener",
                            callback: function(n, i) {
                                (0, s.logInfo)("Received a response from CMP", n), i ? (o(n), !1 !== n.gdprApplies && "tcloaded" !== n.eventStatus && "useractioncomplete" !== n.eventStatus || h(n, {
                                    onSuccess: e,
                                    onError: t
                                })) : t("CMP unable to register callback function.  Please check CMP setup.")
                            }
                        })
                    },
                    static: function(n) {
                        let {
                            onSuccess: e,
                            onError: t
                        } = n;
                        h(C, {
                            onSuccess: e,
                            onError: t
                        })
                    }
                };

                function P(n) {
                    let e, t, o = !1,
                        s = null,
                        i = !1;

                    function r(n) {
                        null != s && clearTimeout(s), o || null == n || (0 === n ? e() : s = setTimeout(e, n))
                    }

                    function l(e, t, s) {
                        if (r(null), o = !0, a.mW.setConsentData(e), "function" == typeof n) {
                            for (var i = arguments.length, c = new Array(i > 3 ? i - 3 : 0), l = 3; l < i; l++) c[l - 3] = arguments[l];
                            n(t, s, ...c)
                        }
                    }
                    if (!(0, c.mK)(Object.keys(A), f)) return void l(null, !1, `CMP framework (${f}) is not a supported framework.  Aborting consentManagement module and resuming auction.`);
                    const u = {
                        onSuccess: n => l(n, !1),
                        onError: function(n) {
                            for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) t[o - 1] = arguments[o];
                            l(null, !0, n, ...t)
                        },
                        onEvent: function(n) {
                            t = n, i || (i = !0, null != v && r(v))
                        }
                    };
                    e = () => {
                        const n = n => {
                            l(n, !1, (i ? "Timeout waiting for user action on CMP" : "CMP did not load") + ", continuing auction...")
                        };
                        h(t, {
                            onSuccess: n,
                            onError: () => n(w(void 0))
                        })
                    }, A[f](u), null != v && i || r(m)
                }
                const E = (0, p.R)("gdpr", (() => S), P);

                function h(n, e) {
                    let {
                        onSuccess: t,
                        onError: o
                    } = e;
                    ! function() {
                        const e = n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : b,
                            t = n && n.tcString;
                        return !("boolean" == typeof e && (!0 !== e || t && (0, s.isStr)(t)))
                    }() ? t(w(n)): o("CMP returned unexpected value during lookup process.", n)
                }

                function w(n) {
                    return S = {
                        consentString: n ? n.tcString : void 0,
                        vendorData: n || void 0,
                        gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : b
                    }, n && n.addtlConsent && (0, s.isStr)(n.addtlConsent) && (S.addtlConsent = n.addtlConsent), S.apiVersion = g, S
                }
                r.$W.getConfig("consentManagement", (n => function(n) {
                    (n = n && (n.gdpr || n.usp || n.gpp ? n.gdpr : n)) && "object" == typeof n ? ((0, s.isStr)(n.cmpApi) ? f = n.cmpApi : (f = "iab", (0, s.logInfo)("consentManagement config did not specify cmp.  Using system default setting (iab).")), (0, s.isNumber)(n.timeout) ? m = n.timeout : (m = 1e4, (0, s.logInfo)("consentManagement config did not specify timeout.  Using system default setting (10000).")), v = (0, s.isNumber)(n.actionTimeout) ? n.actionTimeout : null, b = !0 === n.defaultGdprScope, M = !!n.dsaPlatform, (0, s.logInfo)("consentManagement module has been activated..."), "static" === f && ((0, s.isPlainObject)(n.consentData) ? (C = n.consentData, null != C ? .getTCData && (C = C.getTCData), m = 0) : (0, s.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), y || (0, o.m)().requestBids.before(E, 50), y = !0, a.mW.enable(), P()) : (0, s.logWarn)("consentManagement (gdpr) config not defined, exiting consent manager")
                }(n.consentManagement))), u.w.before((function(n, e) {
                    return n(e.then((n => {
                        const e = a.mW.getConsentData();
                        return e && ("boolean" == typeof e.gdprApplies && (0, i.J)(n, "regs.ext.gdpr", e.gdprApplies ? 1 : 0), (0, i.J)(n, "user.ext.consent", e.consentString)), M && (0, i.J)(n, "regs.ext.dsa.dsarequired", 3), n
                    })))
                })), (0, l.pS)({
                    type: l.S3,
                    name: "gdprAddtlConsent",
                    fn: function(n, e) {
                        const t = e.gdprConsent ? .addtlConsent;
                        t && "string" == typeof t && (0, i.J)(n, "user.ext.ConsentedProvidersSettings.consented_providers", t)
                    }
                }), (0, o.E)("consentManagementTcf")
            }
        },
        n => {
            n.O(0, [60802, 57109, 90010, 51085], (() => {
                return e = 66117, n(n.s = e);
                var e
            }));
            n.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [56466], {
            19236: (e, r, n) => {
                var o = n(7873),
                    t = n(91069),
                    c = n(63172),
                    i = n(78969),
                    s = n(68044),
                    u = n(43272),
                    a = n(16833),
                    f = n(25555),
                    l = n(1e3),
                    d = n(16894),
                    y = n(75023),
                    g = n(70068),
                    v = n(86400);
                const p = 4;
                let h, C = [],
                    b = {},
                    $ = !1,
                    R = !0,
                    m = "USD";
                var I = !1,
                    S = {};
                let N, O = {},
                    T = (0, f.v)();
                const w = (0, v.L)();
                let D = 0;

                function U(e) {
                    if (h = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$", null !== e.rates && "object" == typeof e.rates && (S.conversions = e.rates, $ = !0, R = !1), null !== e.defaultRates && "object" == typeof e.defaultRates && (N = e.defaultRates, S.conversions = N, $ = !0), "string" == typeof e.adServerCurrency) {
                        D = e.auctionDelay, (0, t.logInfo)("enabling currency support", arguments), m = e.adServerCurrency, e.conversionRateFile && ((0, t.logInfo)("currency using override conversionRateFile:", e.conversionRateFile), h = e.conversionRateFile);
                        const r = h.indexOf("$$TODAY$$");
                        if (-1 !== r) {
                            const e = new Date;
                            let n = `${e.getMonth()+1}`,
                                o = `${e.getDate()}`;
                            n.length < 2 && (n = `0${n}`), o.length < 2 && (o = `0${o}`);
                            const t = `${e.getFullYear()}${n}${o}`;
                            h = `${h.substring(0,r)}${t}${h.substring(r+9,h.length)}`
                        }
                        b = {}, I || (I = !0, (0, o.m)().convertCurrency = (e, r, n) => parseFloat(e) * _(r, n), (0, a.Yn)("addBidResponse").before(F, 100), (0, a.Yn)("responsesReady").before(E), g.w.before(q), (0, a.Yn)("requestBids").before(M, 50), (0, y.on)(i.qY.AUCTION_TIMEOUT, A), (0, y.on)(i.qY.AUCTION_INIT, k), k())
                    } else D = 0, (0, t.logInfo)("disabling currency support"), I && ((0, a.Yn)("addBidResponse").getHooks({
                        hook: F
                    }).remove(), (0, a.Yn)("responsesReady").getHooks({
                        hook: E
                    }).remove(), g.w.getHooks({
                        hook: q
                    }).remove(), (0, a.Yn)("requestBids").getHooks({
                        hook: M
                    }).remove(), (0, y.off)(i.qY.AUCTION_TIMEOUT, A), (0, y.off)(i.qY.AUCTION_INIT, k), delete(0, o.m)().convertCurrency, m = "USD", b = {}, I = !1, $ = !1, R = !0, S = {}, O = {}, T = (0, f.v)());
                    "object" == typeof e.bidderCurrencyDefault && (O = e.bidderCurrencyDefault)
                }

                function Y(e) {
                    N ? ((0, t.logWarn)(e), (0, t.logWarn)("Currency failed loading rates, falling back to currency.defaultRates")) : (0, t.logError)(e)
                }

                function k() {
                    R ? (R = !1, $ = !1, (0, s.RD)(h, {
                        success: function(e) {
                            try {
                                S = JSON.parse(e), (0, t.logInfo)("currencyRates set to " + JSON.stringify(S)), b = {}, $ = !0, j(), w.resume()
                            } catch (r) {
                                Y("Failed to parse currencyRates response: " + e)
                            }
                        },
                        error: function() {
                            Y(...arguments), $ = !0, j(), w.resume(), R = !0
                        }
                    })) : j()
                }

                function E(e, r) {
                    e(r.then((() => T.promise)))
                }
                u.$W.getConfig("currency", (e => U(e.currency)));
                const F = (0, d.NL)("currency", (function(e, r, n, o) {
                    if (!n) return e.call(this, r, n, o);
                    let c = n.bidderCode || n.bidder;
                    if (O[c]) {
                        let e = O[c];
                        n.currency && e !== n.currency ? (0, t.logWarn)(`Currency default '${c}: ${e}' ignored. adapter specified '${n.currency}'`) : n.currency = e
                    }
                    if (n.currency || ((0, t.logWarn)('Currency not specified on bid.  Defaulted to "USD"'), n.currency = "USD"), n.getCpmInNewCurrency = function(e) {
                            return (parseFloat(this.cpm) * _(this.currency, e)).toFixed(3)
                        }, n.currency === m) return e.call(this, r, n, o);
                    C.push([e, this, r, n, o]), I && !$ || j()
                }));

                function A(e) {
                    let {
                        auctionId: r
                    } = e;
                    C = C.filter((e => {
                        let [n, o, t, c, s] = e;
                        if (c.auctionId !== r) return !0;
                        s(i.Tf.CANNOT_CONVERT_CURRENCY)
                    }))
                }

                function j() {
                    for (; C.length > 0;) {
                        const [e, r, n, o, c] = C.shift();
                        if (void 0 !== o && "currency" in o && "cpm" in o) {
                            let e = o.currency;
                            try {
                                let r = _(e);
                                1 !== r && (o.cpm = (parseFloat(o.cpm) * r).toFixed(4), o.currency = m)
                            } catch (e) {
                                (0, t.logWarn)("getCurrencyConversion threw error: ", e), c(i.Tf.CANNOT_CONVERT_CURRENCY);
                                continue
                            }
                        }
                        e.call(r, n, o, c)
                    }
                    T.resolve()
                }

                function _(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
                    var n, o = null;
                    let c = `${e}->${r}`;
                    if (c in b) o = b[c], (0, t.logMessage)("Using conversionCache value " + o + " for " + c);
                    else if (!1 === I) {
                        if ("USD" !== e) throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");
                        o = 1
                    } else if (e === r) o = 1;
                    else if (e in S.conversions) {
                        if (!(r in (n = S.conversions[e]))) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
                        o = n[r], (0, t.logInfo)("getCurrencyConversion using direct " + e + " to " + r + " conversionRate " + o)
                    } else if (r in S.conversions) {
                        if (!(e in (n = S.conversions[r]))) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                        o = W(1 / n[e], p), (0, t.logInfo)("getCurrencyConversion using reciprocal " + e + " to " + r + " conversionRate " + o)
                    } else {
                        var i = Object.keys(S.conversions)[0];
                        if (!(e in S.conversions[i])) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                        var s = 1 / S.conversions[i][e];
                        if (!(r in S.conversions[i])) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
                        o = W(s * S.conversions[i][r], p), (0, t.logInfo)("getCurrencyConversion using intermediate " + e + " thru " + i + " to " + r + " conversionRate " + o)
                    }
                    return c in b || ((0, t.logMessage)("Adding conversionCache value " + o + " for " + c), b[c] = o), o
                }

                function W(e, r) {
                    var n = 1;
                    for (let e = 0; e < r; e++) n += "0";
                    return Math.round(e * n) / n
                }

                function q(e, r) {
                    return e(r.then((e => ((0, c.J)(e, "ext.prebid.adServerCurrency", m), e))))
                }(0, l.pS)({
                    type: l.S3,
                    name: "currency",
                    fn: function(e, r, n) {
                        I && (e.cur = e.cur || [n.currency || m])
                    }
                });
                const M = (0, d.Ak)("currency", (function(e, r) {
                    const n = (o = this, () => e.call(o, r));
                    var o;
                    !$ && D > 0 ? w.submit(D, n, (() => {
                        (0, t.logWarn)(`currency: Fetch attempt did not return in time for auction ${r.auctionId}`), n()
                    })) : n()
                }));
                (0, o.E)("currency")
            }
        },
        e => {
            e.O(0, [60802, 35957, 51085], (() => {
                return r = 19236, e(e.s = r);
                var r
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [99301], {
            11057: (n, e, s) => {
                var t = s(7873),
                    a = s(43272),
                    l = s(77274);
                let p = !1;
                a.$W.getConfig("consentManagement", (n => {
                    null == n ? .consentManagement ? .gpp || p || ((0, l.l)("usnat", [7]), p = !0)
                })), (0, t.E)("gppControl_usnat")
            }
        },
        n => {
            n.O(0, [40082, 60802, 51085], (() => {
                return e = 11057, n(n.s = e);
                var e
            }));
            n.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [27534], {
            18194: (n, e, t) => {
                var s = t(7873),
                    r = t(43272),
                    o = t(77274),
                    i = t(63172),
                    a = t(91069);
                const l = {
                    Version: 0,
                    Gpc: 0,
                    SharingNotice: 0,
                    SaleOptOutNotice: 0,
                    SharingOptOutNotice: 0,
                    TargetedAdvertisingOptOutNotice: 0,
                    SensitiveDataProcessingOptOutNotice: 0,
                    SensitiveDataLimitUseNotice: 0,
                    SaleOptOut: 0,
                    SharingOptOut: 0,
                    TargetedAdvertisingOptOut: 0,
                    SensitiveDataProcessing: 12,
                    KnownChildSensitiveDataConsents: 2,
                    PersonalDataConsents: 0,
                    MspaCoveredTransaction: 0,
                    MspaOptOutOptionMode: 0,
                    MspaServiceProviderMode: 0
                };

                function c(n) {
                    let {
                        nullify: e = [],
                        move: t = {},
                        fn: s
                    } = n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
                    return t = Object.fromEntries(Object.entries(t).map((n => {
                            let [e, t] = n;
                            return [e, Object.fromEntries(Object.entries(t).map((n => {
                                let [e, t] = n;
                                return [e, Array.isArray(t) ? t : [t]]
                            })).map((n => {
                                let [e, t] = n;
                                return [--e, t.map((n => --n))]
                            })))]
                        }))),
                        function(n) {
                            const o = Object.fromEntries(Object.entries(r).map((e => {
                                let [s, r] = e, o = null;
                                if (r > 0) {
                                    if (o = Array(r).fill(null), Array.isArray(n[s])) {
                                        const e = t[s] || {},
                                            i = [];
                                        n[s].forEach(((n, t) => {
                                            const [s, a] = e.hasOwnProperty(t) ? [e[t], !0] : [
                                                [t], !1
                                            ];
                                            s.forEach((e => {
                                                e < r && !i.includes(e) && (o[e] = n, a && i.push(e))
                                            }))
                                        }))
                                    }
                                } else null != n[s] && (o = Array.isArray(n[s]) ? null : n[s]);
                                return [s, o]
                            })));
                            return e.forEach((n => (0, i.J)(o, n, null))), s && s(n, o), o
                        }
                }

                function u(n, e) {
                    e.KnownChildSensitiveDataConsents = 0 === n.KnownChildSensitiveDataConsents ? [0, 0] : [1, 1]
                }
                const p = {
                        7: n => n,
                        8: c({
                            move: {
                                SensitiveDataProcessing: {
                                    1: 9,
                                    2: 10,
                                    3: 8,
                                    4: [1, 2],
                                    5: 12,
                                    8: 3,
                                    9: 4
                                }
                            },
                            fn(n, e) {
                                n.KnownChildSensitiveDataConsents.some((n => 0 !== n)) && (e.KnownChildSensitiveDataConsents = [1, 1])
                            }
                        }),
                        9: c({
                            fn: u
                        }),
                        10: c({
                            fn: u
                        }),
                        11: c({
                            move: {
                                SensitiveDataProcessing: {
                                    3: 4,
                                    4: 5,
                                    5: 3
                                }
                            },
                            fn: u
                        }),
                        12: c({
                            fn(n, e) {
                                const t = n.KnownChildSensitiveDataConsents;
                                let s;
                                s = t.some((n => 0 !== n)) ? 2 === t[1] && 2 === t[2] ? [2, 1] : [1, 1] : [0, 0], e.KnownChildSensitiveDataConsents = s
                            }
                        })
                    },
                    f = {
                        8: "usca",
                        9: "usva",
                        10: "usco",
                        11: "usut",
                        12: "usct"
                    },
                    O = (() => {
                        const n = Object.keys(f).map(Number);
                        return function() {
                            let {
                                sections: e = {},
                                sids: t = n
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return t.map((n => {
                                const t = (0, a.prefixLog)(`Cannot set up MSPA controls for SID ${n}:`),
                                    s = e[n] || {},
                                    r = s.normalizeAs || n;
                                if (!p.hasOwnProperty(r)) return void t.logError(`no normalization rules are known for SID ${r}`);
                                const o = s.name || f[n];
                                if ("string" == typeof o) return [o, [n], p[r]];
                                t.logError("cannot determine GPP section name")
                            })).filter((n => null != n))
                        }
                    })(),
                    v = [];
                r.$W.getConfig("consentManagement", (n => {
                    const e = n.consentManagement ? .gpp;
                    if (e) {
                        for (; v.length;) v.pop()();
                        O(e ? .mspa || {}).forEach((n => {
                            let [e, t, s] = n;
                            return v.push((0, o.l)(e, t, s))
                        }))
                    }
                })), (0, s.E)("gppControl_usstates")
            }
        },
        n => {
            n.O(0, [40082, 60802, 51085], (() => {
                return e = 18194, n(n.s = e);
                var e
            }));
            n.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [4584], {
            84232: (t, e, o) => {
                var n = o(7873),
                    a = o(51252),
                    d = o(67314),
                    s = o(43272),
                    r = o(78969),
                    i = o(16833),
                    l = o(15901),
                    c = o(91069),
                    u = o(63172),
                    p = o(70433);
                let f = {},
                    g = !1;

                function b(t) {
                    return (0, a.eu)(t)
                }
                const m = t => (s.$W.getConfig("gptPreAuction") || {}).mcmEnabled ? t.replace(/(^\/\d*),\d*\//, "$1/") : t;

                function h(t) {
                    (0, c.logWarn)("pbadslot is deprecated and will soon be removed, use gpid instead", t)
                }
                const A = function(t, e) {
                        const o = (t => {
                                const {
                                    customGptSlotMatching: e
                                } = f;
                                if (!(0, c.isGptPubadsDefined)()) return;
                                const o = t.reduce(((t, e) => (t[e.code] = t[e.code] || [], t[e.code].push(e), t)), {}),
                                    n = {};
                                return window.googletag.pubads().getSlots().forEach((t => {
                                    const a = (0, l.I6)(Object.keys(o), e ? e(t) : (0, c.isAdUnitCodeMatchingSlot)(t));
                                    if (a) {
                                        const e = n[a] = t.getAdUnitPath(),
                                            d = {
                                                name: "gam",
                                                adslot: m(e)
                                            };
                                        o[a].forEach((t => {
                                            (0, u.J)(t, "ortb2Imp.ext.data.adserver", Object.assign({}, t.ortb2Imp ? .ext ? .data ? .adserver, d))
                                        }))
                                    }
                                })), n
                            })(e),
                            {
                                useDefaultPreAuction: n,
                                customPreAuction: a
                            } = f;
                        e.forEach((t => {
                            t.ortb2Imp = t.ortb2Imp || {}, t.ortb2Imp.ext = t.ortb2Imp.ext || {}, t.ortb2Imp.ext.data = t.ortb2Imp.ext.data || {};
                            const e = t.ortb2Imp.ext;
                            if (a || n) {
                                e.data ? .pbadslot && h(t);
                                let d, s = (0, p.A)(e, "data.adserver.adslot");
                                a ? d = a(t, s, o ? .[t.code]) : n && (d = ((t, e, o) => {
                                    const n = t.ortb2Imp.ext.data;
                                    if (n.pbadslot) return n.pbadslot;
                                    if ((0, c.isGptPubadsDefined)()) {
                                        var a = window.googletag.pubads().getSlots().filter((t => t.getAdUnitPath() === o));
                                        if (0 !== a.length) return 1 === a.length ? e : `${e}#${t.code}`
                                    }
                                })(t, s, o ? .[t.code])), d && (e.gpid = e.data.pbadslot = d)
                            } else {
                                h(t);
                                const o = (t => {
                                    const e = t.ortb2Imp.ext.data,
                                        {
                                            customPbAdSlot: o
                                        } = f;
                                    if (!e.pbadslot)
                                        if (o) e.pbadslot = o(t.code, (0, p.A)(e, "adserver.adslot"));
                                        else {
                                            try {
                                                const o = document.getElementById(t.code);
                                                if (o.dataset.adslotid) return void(e.pbadslot = o.dataset.adslotid)
                                            } catch (t) {}
                                            if (!(0, p.A)(e, "adserver.adslot")) return e.pbadslot = t.code, !0;
                                            e.pbadslot = e.adserver.adslot
                                        }
                                })(t);
                                e.gpid || o || (e.gpid = e.data.pbadslot)
                            }
                        }));
                        for (var d = arguments.length, s = new Array(d > 2 ? d - 2 : 0), r = 2; r < d; r++) s[r - 2] = arguments[r];
                        return t.call(undefined, e, ...s)
                    },
                    v = (t, e) => {
                        const o = function(t) {
                            const e = {};
                            return a.Cn.forEach((o => {
                                const n = t.flatMap((t => t)).filter((t => t.taxonomy === o)).map((t => t.values));
                                e[o] = n.length ? n.reduce(((t, e) => t.filter((t => e.includes(t))))) : [], e[o] = {
                                    values: e[o]
                                }
                            })), e
                        }(function(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.n.index;
                            return t.map((t => e.getAuction({
                                auctionId: t
                            }) ? .getFPD() ? .global)).map(b).filter((t => t))
                        }(function(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.n;
                            return Object.values(t).flatMap((t => Object.entries(t))).filter((t => t[0] === r.xS.AD_ID || t[0].startsWith(r.xS.AD_ID + "_"))).flatMap((t => t[1])).map((t => e.findBidByAdId(t) ? .auctionId)).filter((t => null != t)).filter(c.uniques)
                        }(e)));
                        window.googletag.setConfig && window.googletag.setConfig({
                            pps: {
                                taxonomies: o
                            }
                        }), t(e)
                    },
                    I = t => {
                        f = (0, c.pick)(t, ["enabled", t => !1 !== t, "customGptSlotMatching", t => "function" == typeof t && t, "customPbAdSlot", t => "function" == typeof t && t, "customPreAuction", t => "function" == typeof t && t, "useDefaultPreAuction", t => t ? ? !0]), f.enabled ? g || ((0, i.Yn)("makeBidRequests").before(A), (0, i.Yn)("targetingDone").after(v), g = !0) : ((0, c.logInfo)("GPT Pre-Auction: Turning off module"), f = {}, (0, i.Yn)("makeBidRequests").getHooks({
                            hook: A
                        }).remove(), (0, i.Yn)("targetingDone").getHooks({
                            hook: v
                        }).remove(), g = !1)
                    };
                s.$W.getConfig("gptPreAuction", (t => I(t.gptPreAuction))), I({}), (0, n.E)("gptPreAuction")
            }
        },
        t => {
            t.O(0, [33005, 60802, 51085], (() => {
                return e = 84232, t(t.s = e);
                var e
            }));
            t.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [53170], {
            77764: (e, t, i) => {
                var r = i(7873),
                    n = i(70433),
                    o = i(91069),
                    a = i(63172),
                    s = i(71371),
                    d = i(43272),
                    p = i(12938),
                    l = i(15901),
                    c = i(57377),
                    u = i(63895),
                    m = i(95789),
                    f = i(51252);
                const g = "ix",
                    b = [s.D4, s.G_, s.s6],
                    x = 50,
                    y = [144, 144],
                    h = {
                        JPY: 1
                    },
                    I = {
                        PBJS: "p",
                        IX: "x"
                    },
                    v = {
                        SITE: ["id", "name", "domain", "cat", "sectioncat", "pagecat", "page", "ref", "search", "mobile", "privacypolicy", "publisher", "content", "keywords", "ext"],
                        USER: ["id", "buyeruid", "yob", "gender", "keywords", "customdata", "geo", "data", "ext"]
                    },
                    A = {
                        "liveramp.com": "idl",
                        "netid.de": "NETID",
                        "neustar.biz": "fabrickId",
                        "zeotap.com": "zeotapIdPlus",
                        "uidapi.com": "UID2",
                        "adserver.org": "TDID"
                    },
                    C = ["lipbid", "criteoId", "merkleId", "parrableId", "connectid", "tapadId", "quantcastId", "pubProvidedId", "pairId"],
                    w = ["mimes", "minduration", "maxduration"],
                    O = ["mimes", "minduration", "maxduration", "protocols", "protocol", "startdelay", "placement", "linearity", "skip", "skipmin", "skipafter", "sequence", "battr", "maxextended", "minbitrate", "maxbitrate", "boxingallowed", "playbackmethod", "playbackend", "delivery", "pos", "companionad", "api", "companiontype", "ext", "playerSize", "w", "h", "plcmt"],
                    U = `${g}_features`,
                    S = (0, p.vM)({
                        bidderCode: g
                    }),
                    E = {
                        REQUESTED_FEATURE_TOGGLES: ["pbjs_enable_multiformat", "pbjs_allow_all_eids"],
                        featureToggles: {},
                        isFeatureEnabled: function(e) {
                            return (0, n.A)(this.featureToggles, `features.${e}.activated`, !1)
                        },
                        getFeatureToggles: function() {
                            if (S.localStorageIsEnabled()) {
                                const e = (0, o.safeJSONParse)(S.getDataFromLocalStorage(U));
                                (0, n.A)(e, "expiry") && e.expiry >= (new Date).getTime() ? this.featureToggles = e : this.clearFeatureToggles()
                            }
                        },
                        setFeatureToggles: function(e) {
                            const t = e.body,
                                i = new Date,
                                r = (0, n.A)(t, "ext.features");
                            r && (this.featureToggles = {
                                expiry: i.setHours(i.getHours() + 1),
                                features: r
                            }, S.localStorageIsEnabled() && S.setDataInLocalStorage(U, JSON.stringify(this.featureToggles)))
                        },
                        clearFeatureToggles: function() {
                            this.featureToggles = {}, S.localStorageIsEnabled() && S.removeDataFromLocalStorage(U)
                        }
                    };
                let P = 0,
                    T = "",
                    D = "",
                    _ = !1;
                const k = 2;

                function J(e) {
                    const t = j(e, s.G_),
                        i = (0, n.A)(e, "mediaTypes.video"),
                        r = (0, n.A)(e, "params.video");
                    if ($(i, r).length) return {};
                    t.video = r ? (0, o.deepClone)(e.params.video) : {};
                    let d = (0, n.A)(e, "ortb2Imp.ext.tid");
                    d && (0, a.J)(t, "ext.tid", d),
                        function(e, t) {
                            if ((0, n.A)(t, "mediaTypes.video.context") === u.H6) {
                                let i = (0, n.A)(t, "mediaTypes.video.renderer");
                                if (i || (i = (0, n.A)(t, "renderer")), (0, n.A)(t, "schain", !1)) e.displaymanager = "pbjs_wrapper";
                                else if (i && "object" == typeof i) {
                                    if (void 0 !== i.url) {
                                        let t = "";
                                        try {
                                            t = new URL(i.url).hostname
                                        } catch {
                                            return
                                        }
                                        t.includes("js-sec.indexww") ? e.displaymanager = "ix" : e.displaymanager = i.url
                                    }
                                } else e.displaymanager = "ix"
                            }
                        }(t, e), H(t, e);
                    for (const e in i) - 1 === O.indexOf(e) || t.video.hasOwnProperty(e) || (t.video[e] = i[e]);
                    if (t.video.minduration > t.video.maxduration) return (0, o.logError)(`IX Bid Adapter: video minduration [${t.video.minduration}] cannot be greater than video maxduration [${t.video.maxduration}]`), {};
                    const p = r && r.context || i && i.context;
                    if (function(e) {
                            e.video.hasOwnProperty("plcmt") && (!(0, o.isInteger)(e.video.plcmt) || e.video.plcmt < 1 || e.video.plcmt > 4) && ((0, o.logWarn)(`IX Bid Adapter: video.plcmt [${e.video.plcmt}] must be an integer between 1-4 inclusive`), delete e.video.plcmt)
                        }(t), p && !t.video.hasOwnProperty("placement") && (p === u.mn ? t.video.placement = 1 : p === u.H6 ? (0, n.A)(r, "playerConfig.floatOnScroll") ? t.video.placement = 5 : (t.video.placement = 3, _ = !0) : (0, o.logWarn)(`IX Bid Adapter: Video context '${p}' is not supported`)), !t.video.w || !t.video.h) {
                        const i = W((0, n.A)(t, "video.playerSize")) || W((0, n.A)(e, "params.size"));
                        if (!i) return (0, o.logWarn)("IX Bid Adapter: Video size is missing in [mediaTypes.video]"), {};
                        t.video.w = i[0], t.video.h = i[1]
                    }
                    return B(e, t, s.G_), t
                }

                function j(e, t) {
                    const i = {};
                    if (i.id = e.bidId, ne() && (0, n.A)(e, "params.externalId") && (0, a.J)(i, "ext.externalID", e.params.externalId), (0, n.A)(e, `params.${t}.siteId`) && !isNaN(Number(e.params[t].siteId))) switch (t) {
                        case s.D4:
                            (0, a.J)(i, "ext.siteID", e.params.banner.siteId.toString());
                            break;
                        case s.G_:
                            (0, a.J)(i, "ext.siteID", e.params.video.siteId.toString());
                            break;
                        case s.s6:
                            (0, a.J)(i, "ext.siteID", e.params.native.siteId.toString())
                    } else e.params.siteId && (0, a.J)(i, "ext.siteID", e.params.siteId.toString());
                    return !e.params.hasOwnProperty("id") || "string" != typeof e.params.id && "number" != typeof e.params.id || (0, a.J)(i, "ext.sid", String(e.params.id)), i
                }

                function B(e, t, i) {
                    let r = null,
                        n = null;
                    if (e.params.bidFloor && e.params.bidFloorCur && (r = {
                            floor: e.params.bidFloor,
                            currency: e.params.bidFloorCur
                        }), (0, o.isFn)(e.getFloor)) {
                        let r = "*",
                            a = "*";
                        if (i && (0, o.contains)(b, i)) {
                            const {
                                w: e,
                                h: n
                            } = t[i];
                            r = i, a = [e, n]
                        }
                        try {
                            n = e.getFloor({
                                mediaType: r,
                                size: a
                            })
                        } catch (e) {
                            (0, o.logWarn)("priceFloors module call getFloor failed, error : ", e)
                        }
                    }
                    let d = !1;
                    n ? (t.bidfloor = n.floor, t.bidfloorcur = n.currency, (0, a.J)(t, "ext.fl", I.PBJS), d = !0) : r && (t.bidfloor = r.floor, t.bidfloorcur = r.currency, (0, a.J)(t, "ext.fl", I.IX), d = !0), d && (i == s.D4 ? ((0, a.J)(t, "banner.ext.bidfloor", t.bidfloor), (0, a.J)(t, "banner.ext.fl", t.ext.fl)) : i == s.G_ ? ((0, a.J)(t, "video.ext.bidfloor", t.bidfloor), (0, a.J)(t, "video.ext.fl", t.ext.fl)) : ((0, a.J)(t, "native.ext.bidfloor", t.bidfloor), (0, a.J)(t, "native.ext.fl", t.ext.fl)))
                }

                function F(e, t, i) {
                    const r = {},
                        a = !(!(0, n.A)(e, "exp") || !(0, o.isInteger)(e.exp)),
                        d = (0, n.A)(e, "dealid") || (0, n.A)(e, "ext.dealid");
                    h.hasOwnProperty(t) ? r.cpm = e.price / h[t] : r.cpm = e.price / 100, r.requestId = e.impid, d && (r.dealId = d), r.netRevenue = true, r.currency = t, r.creativeId = e.hasOwnProperty("crid") ? e.crid : "-", e.mtype != k || (!e.ext || e.ext.vasturl) && e.ext ? e.ext && e.ext.vasturl && (r.vastUrl = e.ext.vasturl) : r.vastXml = e.adm;
                    let p = null;
                    if ("string" == typeof e.adm && "{" === e.adm[0] && "}" === e.adm[e.adm.length - 1]) try {
                        p = JSON.parse(e.adm)
                    } catch (e) {
                        (0, o.logWarn)("adm looks like JSON but failed to parse: ", e)
                    }
                    return e.ext && e.ext.vasturl || e.mtype == k ? (r.width = i.video.w, r.height = i.video.h, r.mediaType = s.G_, r.mediaTypes = i.mediaTypes, r.ttl = a ? e.exp : 3600) : p && p.native ? (r.native = {
                        ortb: p.native
                    }, r.width = e.w ? e.w : 1, r.height = e.h ? e.h : 1, r.mediaType = s.s6, r.ttl = a ? e.exp : 3600) : (r.ad = e.adm, r.width = e.w, r.height = e.h, r.mediaType = s.D4, r.ttl = a ? e.exp : 300), r.meta = {}, r.meta.networkId = (0, n.A)(e, "ext.dspid"), r.meta.brandId = (0, n.A)(e, "ext.advbrandid"), r.meta.brandName = (0, n.A)(e, "ext.advbrand"), e.adomain && e.adomain.length > 0 && (r.meta.advertiserDomains = e.adomain), e.ext ? .dsa && (r.meta.dsa = e.ext.dsa), r
                }

                function z(e) {
                    return Array.isArray(e) && 2 === e.length && (0, o.isInteger)(e[0]) && (0, o.isInteger)(e[1])
                }

                function R() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    if (z(e)) return e[0] === t[0] && e[1] === t[1];
                    for (let i = 0; i < e.length; i++)
                        if (e[i][0] === t[0] && e[i][1] === t[1]) return !0;
                    return !1
                }

                function $(e, t) {
                    const i = [];
                    e || (0, o.logWarn)("IX Bid Adapter: mediaTypes.video is the preferred location for video params in ad unit");
                    for (let r of w) {
                        const n = e && e.hasOwnProperty(r),
                            o = t && t.hasOwnProperty(r);
                        n || o || i.push(`IX Bid Adapter: ${r} is not included in either the adunit or params level`)
                    }
                    const r = e && e.hasOwnProperty("protocol"),
                        n = e && e.hasOwnProperty("protocols"),
                        a = t && t.hasOwnProperty("protocol"),
                        s = t && t.hasOwnProperty("protocols");
                    return r || n || a || s || i.push("IX Bid Adapter: protocol/protcols is not included in either the adunit or params level"), i
                }

                function W() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return z(e) ? e : !!z(e[0]) && e[0]
                }

                function X(e, t, i) {
                    if (!e) return;
                    return { ...(0, l.I6)(i, (t => t.bidId === e)),
                        ...(0, l.I6)(t, (t => t.id === e))
                    }
                }

                function N(e, t, i, r) {
                    let s = "https://htlb.casalemedia.com/openrtb/pbjs",
                        p = function(e) {
                            let t = [],
                                i = {};
                            if ((0, o.isArray)(e))
                                for (const r of e) {
                                    const e = A.hasOwnProperty(r.source);
                                    if ((0, n.A)(r, "uids.0") && (i[r.source] = !0, e && "" !== A[r.source] && (r.uids[0].ext = {
                                            rtiPartner: A[r.source]
                                        }), t.push(r), t.length >= x)) break
                                }
                            return {
                                toSend: t,
                                seenSources: i
                            }
                        }((0, n.A)(e, "0.userIdAsEids")),
                        l = p.toSend;
                    window.headertag && "function" == typeof window.headertag.getIdentityInfo && function(e, t) {
                        let i = window.headertag.getIdentityInfo();
                        if (i && "object" == typeof i)
                            for (const r in i) {
                                if (e.length >= x) return;
                                if (i.hasOwnProperty(r)) {
                                    let n = i[r];
                                    !n.responsePending && n.data && "object" == typeof n.data && Object.keys(n.data).length && !t.seenSources[n.data.source] && e.push(n.data)
                                }
                            }
                    }(l, p);
                    const c = [];
                    let u = function(e) {
                        const t = {};
                        return t.id = e[0].bidderRequestId.toString(), t.site = {}, t.ext = {}, t.ext.source = "prebid", t.ext.ixdiag = {}, t.ext.ixdiag.ls = S.localStorageIsEnabled(), t.imp = [], t.at = 1, t
                    }(e);
                    u = function(e, t) {
                        t.length > 0 && (e.ext.features = {}, t.forEach((t => {
                            e.ext.features[t] = {
                                activated: E.isFeatureEnabled(t)
                            }
                        })));
                        return e
                    }(u, E.REQUESTED_FEATURE_TOGGLES);
                    let m = function(e, t) {
                        var i = e.map((e => e.adUnitCode)).filter(((e, t, i) => i.indexOf(e) === t));
                        let r = (0, n.A)(e, "0.userIdAsEids", []),
                            o = {
                                mfu: 0,
                                bu: 0,
                                iu: 0,
                                nu: 0,
                                ou: 0,
                                allu: 0,
                                ren: !1,
                                version: "9.24.0",
                                userIds: V(e[0]),
                                url: window.location.href.split("?")[0],
                                vpd: _,
                                ae: t,
                                eidLength: r.length
                            };
                        for (let t of i) {
                            let i = e.filter((e => e.adUnitCode === t))[0];
                            (0, n.A)(i, "mediaTypes") && (Object.keys(i.mediaTypes).length > 1 && o.mfu++, (0, n.A)(i, "mediaTypes.native") && o.nu++, (0, n.A)(i, "mediaTypes.banner") && o.bu++, "outstream" === (0, n.A)(i, "mediaTypes.video.context") && (o.ou++, re(i) && (o.ren = !0)), "instream" === (0, n.A)(i, "mediaTypes.video.context") && o.iu++, o.allu++)
                        }
                        return o
                    }(e, (0, n.A)(t, "paapi.enabled"));
                    for (let e in m) u.ext.ixdiag[e] = m[e];
                    u = function(e, t, i, r, o) {
                        const a = (0, n.A)(t, "timeout");
                        a && (e.ext.ixdiag.tmax = a);
                        d.$W.getConfig("userSync") && (e.ext.ixdiag.syncsPerBidder = d.$W.getConfig("userSync").syncsPerBidder);
                        e.ext.ixdiag.imps = Object.keys(i).length, e.source = {
                            tid: t ? .ortb2 ? .source ? .tid
                        }, r[0].schain && (e.source.ext = {}, e.source.ext.schain = r[0].schain);
                        o.length > 0 && (e.user = {}, e.user.eids = o);
                        document.referrer && "" !== document.referrer && (e.site.ref = document.referrer);
                        return e
                    }(u, t, i, e, l), u = function(e, t) {
                        if (t) {
                            t.gdprConsent && (T = t.gdprConsent, T.hasOwnProperty("gdprApplies") && (e.regs = {
                                ext: {
                                    gdpr: T.gdprApplies ? 1 : 0
                                }
                            }), T.hasOwnProperty("consentString") && (e.user = e.user || {}, e.user.ext = {
                                consent: T.consentString || ""
                            }, T.hasOwnProperty("addtlConsent") && T.addtlConsent && (e.user.ext.consented_providers_settings = {
                                addtl_consent: T.addtlConsent
                            }))), t.uspConsent && ((0, a.J)(e, "regs.ext.us_privacy", t.uspConsent), D = t.uspConsent);
                            const i = (0, n.A)(t, "refererInfo.page");
                            i && (e.site.page = i), t.gppConsent && ((0, a.J)(e, "regs.gpp", t.gppConsent.gppString), (0, a.J)(e, "regs.gpp_sid", t.gppConsent.applicableSections))
                        }
                        d.$W.getConfig("coppa") && (0, a.J)(e, "regs.coppa", 1);
                        return e
                    }(u, t);
                    let f = {};
                    e[0].params.siteId && (P = e[0].params.siteId, f.s = P);
                    const g = Object.keys(i);
                    let b = !1;
                    for (let r = 0; r < g.length && !(c.length >= 4); r++) {
                        u = G(i, g, u, r);
                        const a = (0, n.A)(t, "ortb2") || {},
                            p = { ...a.site || a.context
                            };
                        p.page = q(t);
                        const l = { ...a.user
                        };
                        (0, o.isEmpty)(a) || b || (u = L(t, u, a, p, l), u.site = (0, o.mergeDeep)({}, u.site, p), u.user = (0, o.mergeDeep)({}, u.user, l), b = !0), u = M(i, u, g, r, f, s);
                        const m = r === g.length - 1;
                        if (u = le(u), u = se(u), u = de(u), m) {
                            let t = `${s}?`;
                            0 !== P && (t += `s=${P}`), ne() && (t += 0 !== P ? "&" : "", t += `p=${d.$W.getConfig("exchangeId")}`), c.push({
                                method: "POST",
                                url: t,
                                data: (0, o.deepClone)(u),
                                option: {
                                    contentType: "text/plain"
                                },
                                validBidRequests: e
                            }), u.imp = [], b = !1
                        }
                    }
                    return c
                }

                function G(e, t, i, r) {
                    const d = e[t[r]],
                        {
                            missingImps: p = [],
                            ixImps: l = []
                        } = d,
                        c = {
                            ixImps: l,
                            missingBannerImpressions: p
                        },
                        u = Object.keys(c).map((e => c[e])).filter((e => Array.isArray(e))).reduce(((e, t) => e.concat(...t)), []),
                        m = e[t[r]].gpid,
                        f = e[t[r]].dfp_ad_unit_code,
                        g = e[t[r]].tid,
                        b = e[t[r]].sid,
                        x = e[t[r]].ae,
                        y = e[t[r]].paapi,
                        h = u.filter((e => s.D4 in e)),
                        I = u.filter((e => !(s.D4 in e)));
                    if (h.length > 0) {
                        const s = h.reduce(((e, t) => (e[t.adunitCode] || (e[t.adunitCode] = []), e[t.adunitCode].push(t), e)), {});
                        for (const d in s) {
                            const p = s[d],
                                {
                                    id: l,
                                    banner: {
                                        topframe: c
                                    }
                                } = p[0];
                            let u = (0, n.A)(p[0], "ext.externalID");
                            const h = {
                                id: l,
                                banner: {
                                    topframe: c,
                                    format: p.map((e => {
                                        let {
                                            banner: {
                                                w: t,
                                                h: i
                                            },
                                            ext: r
                                        } = e;
                                        return {
                                            w: t,
                                            h: i,
                                            ext: r
                                        }
                                    }))
                                }
                            };
                            for (let e = 0; e < h.banner.format.length; e++) null != h.banner.format[e].ext && (null != h.banner.format[e].ext.sid && delete h.banner.format[e].ext.sid, null != h.banner.format[e].ext.externalID && delete h.banner.format[e].ext.externalID), "bidfloor" in p[e] && (h.banner.format[e].ext.bidfloor = p[e].bidfloor), "{}" === JSON.stringify(h.banner.format[e].ext) && delete h.banner.format[e].ext;
                            const I = e[t[r]].pos;
                            (0, o.isInteger)(I) && (h.banner.pos = I), (f || m || g || b || x || u || y) && (h.ext = {}, h.ext.dfp_ad_unit_code = f, h.ext.gpid = m, h.ext.tid = g, h.ext.sid = b, h.ext.externalID = u, 1 == x && (h.ext.ae = 1, h.ext.paapi = y)), "bidfloor" in p[0] && (h.bidfloor = p[0].bidfloor), "bidfloorcur" in p[0] && (h.bidfloorcur = p[0].bidfloorcur);
                            const v = e[t[r]].adUnitFPD;
                            v && (0, a.J)(h, "ext.data", v), i.imp.push(h)
                        }
                    }
                    return I.length > 0 && I.forEach((e => {
                        if (m && (0, a.J)(e, "ext.gpid", m), i.imp.length > 0) {
                            let t = !1;
                            i.imp.forEach(((r, o) => {
                                e.id === r.id && s.G_ in e ? (r.video = e.video, r.video.ext = Object.assign({}, e.video.ext, e.ext), (0, n.A)(r, "video.ext.bidfloor", !1) && (0, n.A)(r, "bidfloor", !1) && r.video.ext.bidfloor < r.bidfloor && (r.bidfloor = r.video.ext.bidfloor), !(0, n.A)(r, "ext.siteID", !1) && (0, n.A)(e, "video.ext.siteID") && ((0, a.J)(r, "ext.siteID", e.video.ext.siteID), (0, a.J)(i, "ext.ixdiag.usid", !0)), t = !0) : e.id === r.id && s.s6 in e && (r.native = e.native, r.native.ext = Object.assign({}, e.native.ext, e.ext), (0, n.A)(r, "native.ext.bidfloor", !1) && (0, n.A)(r, "bidfloor", !1) && r.native.ext.bidfloor < r.bidfloor && (r.bidfloor = r.native.ext.bidfloor), !(0, n.A)(r, "ext.siteID", !1) && (0, n.A)(e, "native.ext.siteID", !1) && ((0, a.J)(r, "ext.siteID", e.native.ext.siteID), (0, a.J)(i, "ext.ixdiag.usid", !0)), t = !0)
                            })), t || i.imp.push(e)
                        } else i.imp.push(e)
                    })), i
                }

                function q(e) {
                    const t = e && e.bidderCode || "ix",
                        i = d.$W.getConfig(t);
                    let r = "";
                    if (r = (0, n.A)(e, "ortb2.site.page") ? e.ortb2.site.page : (0, n.A)(e, "refererInfo.page"), i && "object" == typeof i.firstPartyData) {
                        return function(e, t, i) {
                            let r;
                            try {
                                r = new URL(t)
                            } catch (i) {
                                (0, o.logWarn)(`IX Bid Adapter: Invalid URL set in ortb2.site.page: ${t}. Using referer URL instead.`), r = new URL((0, n.A)(e, "refererInfo.page"))
                            }
                            const a = new URLSearchParams(r.search);
                            for (const [e, t] of Object.entries(i)) a.has(e) || a.append(e, t);
                            return r.search = a.toString(), r.toString()
                        }(e, r, i.firstPartyData)
                    }
                    return r
                }

                function L(e, t, i, r, n) {
                    if (t.ext.ixdiag.fpd = !0, Object.keys(r).forEach((e => {
                            -1 === v.SITE.indexOf(e) && delete r[e]
                        })), Object.keys(n).forEach((e => {
                            -1 === v.USER.indexOf(e) && delete n[e]
                        })), i.device) {
                        const e = { ...i.device.sua
                        };
                        (0, o.isEmpty)(e) || (0, a.J)(t, "device.sua", e)
                    }
                    if (i.hasOwnProperty("regs") && !e.gppConsent && (i.regs.hasOwnProperty("gpp") && "string" == typeof i.regs.gpp && (0, a.J)(t, "regs.gpp", i.regs.gpp), i.regs.hasOwnProperty("gpp_sid") && Array.isArray(i.regs.gpp_sid) && (0, a.J)(t, "regs.gpp_sid", i.regs.gpp_sid), i.regs.ext ? .dsa)) {
                        const e = i.regs.ext.dsa,
                            r = {};
                        if (["dsarequired", "pubrender", "datatopub"].forEach((t => {
                                (0, o.isNumber)(e[t]) && (r[t] = e[t])
                            })), (0, o.isArray)(e.transparency)) {
                            const t = [];
                            e.transparency.forEach((e => {
                                (0, o.isPlainObject)(e) && (0, o.isStr)(e.domain) && "" != e.domain && (0, o.isArray)(e.dsaparams) && e.dsaparams.every((e => (0, o.isNumber)(e))) && t.push(e)
                            })), t.length > 0 && (r.transparency = t)
                        }(0, o.isEmpty)(r) || (0, a.J)(t, "regs.ext.dsa", r)
                    }
                    return t
                }

                function H(e, t) {
                    const i = (0, n.A)(t, "ortb2Imp.ext.data");
                    i && (0, a.J)(e, "ext.data", i)
                }

                function M(e, t, i, r, n, o) {
                    const a = e[i[r]].pbadslot,
                        s = e[i[r]].tagId,
                        d = e[i[r]].adUnitCode,
                        p = e[i[r]].divId;
                    return (a || s || d || p) && (t.ext.ixdiag.pbadslot = a, t.ext.ixdiag.tagid = s, t.ext.ixdiag.adunitcode = d, t.ext.ixdiag.divId = p), t
                }

                function V(e) {
                    const t = e.userId || {};
                    return C.filter((e => t[e]))
                }

                function Q(e, t) {
                    if (t)
                        for (let i = 0; i < e.length; i++) {
                            const r = e[i];
                            if (t[0] === r[0] && t[1] === r[1]) {
                                e.splice(i, 1);
                                break
                            }
                        }
                }

                function Y(e, t) {
                    const i = function(e) {
                        const t = j(e, s.s6),
                            i = e.nativeOrtbRequest;
                        i.eventtrackers = [{
                            event: 1,
                            methods: [1, 2]
                        }], i.privacy = 1, t.native = {
                            request: JSON.stringify(i),
                            ver: "1.2"
                        };
                        let r = (0, n.A)(e, "ortb2Imp.ext.tid");
                        return r && (0, a.J)(t, "ext.tid", r), H(t, e), B(e, t, s.s6), t
                    }(e);
                    if (0 != Object.keys(i).length) {
                        t[e.adUnitCode] = {}, t[e.adUnitCode].ixImps = [], t[e.adUnitCode].ixImps.push(i), t[e.adUnitCode].gpid = (0, n.A)(e, "ortb2Imp.ext.gpid"), t[e.adUnitCode].dfp_ad_unit_code = (0, n.A)(e, "ortb2Imp.ext.data.adserver.adslot"), t[e.adUnitCode].pbadslot = (0, n.A)(e, "ortb2Imp.ext.data.pbadslot"), t[e.adUnitCode].tagId = (0, n.A)(e, "params.tagId");
                        const r = e.adUnitCode,
                            o = document.getElementById(r) ? r : (0, f.p)(r).divId;
                        t[e.adUnitCode].adUnitCode = r, t[e.adUnitCode].divId = o
                    }
                }

                function Z(e, t) {
                    const i = J(e);
                    if (0 != Object.keys(i).length) {
                        t[e.adUnitCode] = {}, t[e.adUnitCode].ixImps = [], t[e.adUnitCode].ixImps.push(i), t[e.adUnitCode].gpid = (0, n.A)(e, "ortb2Imp.ext.gpid"), t[e.adUnitCode].dfp_ad_unit_code = (0, n.A)(e, "ortb2Imp.ext.data.adserver.adslot"), t[e.adUnitCode].pbadslot = (0, n.A)(e, "ortb2Imp.ext.data.pbadslot"), t[e.adUnitCode].tagId = (0, n.A)(e, "params.tagId");
                        const r = e.adUnitCode,
                            o = document.getElementById(r) ? r : (0, f.p)(r).divId;
                        t[e.adUnitCode].adUnitCode = r, t[e.adUnitCode].divId = o
                    }
                }

                function K(e, t, i, r) {
                    let a = function(e) {
                        const t = j(e, s.D4);
                        t.banner = {}, t.adunitCode = e.adUnitCode;
                        const i = (0, n.A)(e, "params.size");
                        return i && (t.banner.w = i[0], t.banner.h = i[1]), t.banner.topframe = (0, o.inIframe)() ? 0 : 1, B(e, t, s.D4), t
                    }(e);
                    const d = R((0, n.A)(e, "mediaTypes.banner.sizes"), (0, n.A)(e, "params.size"));
                    i.hasOwnProperty(e.adUnitCode) || (i[e.adUnitCode] = {}), i[e.adUnitCode].gpid = (0, n.A)(e, "ortb2Imp.ext.gpid"), i[e.adUnitCode].dfp_ad_unit_code = (0, n.A)(e, "ortb2Imp.ext.data.adserver.adslot"), i[e.adUnitCode].tid = (0, n.A)(e, "ortb2Imp.ext.tid"), i[e.adUnitCode].pbadslot = (0, n.A)(e, "ortb2Imp.ext.data.pbadslot"), i[e.adUnitCode].tagId = (0, n.A)(e, "params.tagId"), i[e.adUnitCode].pos = (0, n.A)(e, "mediaTypes.banner.pos");
                    if ((0, n.A)(r, "paapi.enabled")) {
                        const t = (0, n.A)(e, "ortb2Imp.ext.ae"),
                            r = (0, n.A)(e, "ortb2Imp.ext.paapi");
                        r && (i[e.adUnitCode].paapi = r), t && ((0, o.isInteger)(t) ? i[e.adUnitCode].ae = t : (0, o.logWarn)("error setting auction environment flag - must be an integer"))
                    }
                    const p = (0, n.A)(e, "ortb2Imp.ext.data");
                    p && (i[e.adUnitCode].adUnitFPD = p);
                    const l = (0, n.A)(e, "params.id");
                    !l || "string" != typeof l && "number" != typeof l || (i[e.adUnitCode].sid = String(l));
                    const c = e.adUnitCode,
                        u = document.getElementById(c) ? c : (0, f.p)(c).divId;
                    i[e.adUnitCode].adUnitCode = c, i[e.adUnitCode].divId = u, d && (i[e.adUnitCode].hasOwnProperty("ixImps") || (i[e.adUnitCode].ixImps = []), i[e.adUnitCode].ixImps.push(a)),
                        function(e, t, i) {
                            if (t.hasOwnProperty(e.adUnitCode)) {
                                let i = [];
                                t[e.adUnitCode].hasOwnProperty("missingSizes") && (i = t[e.adUnitCode].missingSizes), Q(i, e.params.size), t[e.adUnitCode].missingSizes = i
                            } else if ((0, n.A)(e, "mediaTypes.banner.sizes")) {
                                let r = (0, o.deepClone)(e.mediaTypes.banner.sizes);
                                Q(r, e.params.size);
                                let n = {
                                    missingSizes: r,
                                    impression: i
                                };
                                t[e.adUnitCode] = n
                            }
                        }(e, t, a)
                }

                function ee(e, t, i) {
                    const r = (0, o.deepClone)(t);
                    return r.banner.w = i[0], r.banner.h = i[1], B(e, r, s.D4), r
                }

                function te(e) {
                    e.renderer.push((function() {
                        const t = e.adUnitCode,
                            i = document.getElementById(t) ? t : (0, f.p)(t).divId;
                        i ? window.createIXPlayer(i, e) : (0, o.logWarn)(`IX Bid Adapter: adUnitCode: ${i} not found on page.`)
                    }))
                }

                function ie(e, t) {
                    const i = m.A4.install({
                        id: e,
                        url: t,
                        loaded: !1
                    });
                    try {
                        i.setRender(te)
                    } catch (e) {
                        return (0, o.logWarn)("Prebid Error calling setRender on renderer", e), null
                    }
                    return t ? i : ((0, o.logWarn)("Outstream renderer URL not found"), null)
                }

                function re(e) {
                    if ("outstream" !== (0, n.A)(e, "mediaTypes.video.context")) return !1;
                    let t = (0, n.A)(e, "mediaTypes.video.renderer");
                    t || (t = (0, n.A)(e, "renderer"));
                    return !!("object" != typeof t || !t.url || !t.render) || t.backupOnly
                }

                function ne() {
                    let e = d.$W.getConfig("exchangeId");
                    return !("number" != typeof e || !isFinite(e)) || !("string" != typeof e || "" === e.trim() || !isFinite(Number(e)))
                }
                const oe = {
                    code: g,
                    gvlid: 10,
                    supportedMediaTypes: b,
                    isBidRequestValid: function(e) {
                        const t = (0, n.A)(e, "params.video"),
                            i = (0, n.A)(e, "params.size"),
                            r = (0, n.A)(e, "mediaTypes.banner.sizes"),
                            a = (0, n.A)(e, "mediaTypes.video"),
                            s = (0, n.A)(e, "mediaTypes.video.playerSize"),
                            d = e.params.hasOwnProperty("bidFloor"),
                            p = e.params.hasOwnProperty("bidFloorCur");
                        if (e.hasOwnProperty("mediaType") && !(0, o.contains)(b, e.mediaType)) return (0, o.logWarn)("IX Bid Adapter: media type is not supported."), !1;
                        if ((0, n.A)(e, "mediaTypes.banner") && !r) return !1;
                        if (i) {
                            const t = W(i);
                            if (!t) return (0, o.logError)("IX Bid Adapter: size has invalid format."), !1;
                            if (!R(e.sizes, t) && !R(s, t) && !R(r, t)) return (0, o.logError)("IX Bid Adapter: bid size is not included in ad unit sizes or player size."), !1
                        }
                        if (!ne() && null == e.params.siteId) return (0, o.logError)("IX Bid Adapter: Invalid configuration - either siteId or exchangeId must be configured."), !1;
                        if (void 0 !== e.params.siteId) {
                            if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return (0, o.logError)("IX Bid Adapter: siteId must be string or number type."), !1;
                            if ("string" != typeof e.params.siteId && isNaN(Number(e.params.siteId))) return (0, o.logError)("IX Bid Adapter: siteId must valid value"), !1
                        }
                        if ((d || p) && !(d && p && (l = e.params.bidFloor, c = e.params.bidFloorCur, Boolean("number" == typeof l && "string" == typeof c && c.match(/^[A-Z]{3}$/))))) return (0, o.logError)("IX Bid Adapter: bidFloor / bidFloorCur parameter has invalid format."), !1;
                        var l, c;
                        if (a && t) {
                            const i = J(e).video,
                                r = $(a, t);
                            if ((0, n.A)(e, "mediaTypes.video.context") === u.H6 && re(e) && i) {
                                const e = [(0, n.A)(i, "w"), (0, n.A)(i, "h")];
                                if (!(e[0] >= y[0] && e[1] >= y[1])) return (0, o.logError)(`IX Bid Adapter: ${e} is an invalid size for IX outstream renderer`), !1
                            }
                            if (r.length) return r.forEach((e => {
                                (0, o.logError)(e)
                            })), !1
                        }
                        return function(e) {
                            return void 0 === (0, n.A)(e, "mediaTypes.native") || e.nativeOrtbRequest && Array.isArray(e.nativeOrtbRequest.assets) && e.nativeOrtbRequest.assets.length > 0
                        }(e)
                    },
                    resetSiteID: function() {
                        P = 0
                    },
                    buildRequests: function(e, t) {
                        const i = [],
                            r = {},
                            a = {},
                            d = {},
                            p = {};
                        E.getFeatureToggles(), e.forEach((e => {
                            const i = Object.keys((0, n.A)(e, "mediaTypes", {}));
                            for (const n in i) switch (i[n]) {
                                case s.D4:
                                    K(e, p, r, t);
                                    break;
                                case s.G_:
                                    Z(e, a);
                                    break;
                                case s.s6:
                                    Y(e, d);
                                    break;
                                default:
                                    (0, o.logWarn)(`IX Bid Adapter: ad unit mediaTypes ${n} is not supported`)
                            }
                        }));
                        for (let t in p)
                            if (p.hasOwnProperty(t)) {
                                let i = p[t].missingSizes;
                                r.hasOwnProperty(t) || (r[t] = {}), r[t].hasOwnProperty("missingImps") || (r[t].missingImps = [], r[t].missingCount = 0);
                                let n = p[t].impression;
                                for (let o = 0; o < i.length; o++) {
                                    let a = ee(e[0], n, i[o]);
                                    r[t].missingImps.push(a), r[t].missingCount++
                                }
                            }
                        let l = [];
                        return Object.keys(r).length > 0 && l.push(r), Object.keys(a).length > 0 && l.push(a), Object.keys(d).length > 0 && l.push(d), E.isFeatureEnabled("pbjs_enable_multiformat") ? i.push(...N(e, t, function(e) {
                            const t = {};
                            return e.forEach((e => {
                                Object.keys(e).forEach((i => {
                                    Object.keys(t).includes(i) ? t[i].hasOwnProperty("ixImps") && e[i].hasOwnProperty("ixImps") ? t[i].ixImps = [...t[i].ixImps, ...e[i].ixImps] : t[i].hasOwnProperty("missingImps") && e[i].hasOwnProperty("missingImps") ? t[i].missingImps = [...t[i].missingImps, ...e[i].missingImps] : e[i].hasOwnProperty("ixImps") ? t[i].ixImps = e[i].ixImps : e[i].hasOwnProperty("missingImps") && (t[i].missingImps = e[i].missingImps) : t[i] = e[i]
                                }))
                            })), t
                        }(l))) : (Object.keys(r).length > 0 && i.push(...N(e, t, r)), Object.keys(a).length > 0 && i.push(...N(e, t, a)), Object.keys(d).length > 0 && i.push(...N(e, t, d))), i
                    },
                    interpretResponse: function(e, t) {
                        const i = [];
                        let r = null,
                            a = (0, n.A)(e, "body.ext.protectedAudienceAuctionConfigs") || [];
                        if (E.setFeatureToggles(e), !e.hasOwnProperty("body")) return i;
                        const d = e.body,
                            p = d.seatbid || [];
                        for (let e = 0; e < p.length; e++) {
                            if (!p[e].hasOwnProperty("bid")) continue;
                            const a = p[e].bid,
                                l = t.data;
                            for (let e = 0; e < a.length; e++) {
                                const o = X(a[e].impid, l.imp, t.validBidRequests);
                                if (r = F(a[e], d.cur, o), r.mediaType === s.G_ && re(o)) {
                                    const t = (0, n.A)(d, "ext.videoplayerurl");
                                    if (r.renderer = ie(a[e].bidId, t), !r.renderer) continue
                                }
                                i.push(r)
                            }
                            if ((0, n.A)(l, "ext.ixdiag.err") && S.localStorageIsEnabled()) try {
                                S.removeDataFromLocalStorage("ixdiag")
                            } catch (e) {
                                (0, o.logError)("ix can not clear ixdiag from localStorage.")
                            }
                        }
                        if (!(Array.isArray(a) && a.length > 0)) return i;
                        a = a.filter((e => !! function(e) {
                            return "object" == typeof e && null !== e
                        }(e) || ((0, o.logWarn)("Malformed auction config detected:", e), !1)));
                        try {
                            return {
                                bids: i,
                                paapi: a
                            }
                        } catch (e) {
                            return (0, o.logWarn)("Error attaching AuctionConfigs", e), i
                        }
                    },
                    getUserSyncs: function(e, t) {
                        const i = [];
                        let r = null;
                        if (t.length > 0 && (r = (0, n.A)(t[0], "body.ext.publishersyncsperbidderoverride")), void 0 !== r && 0 == r) return [];
                        if (e.iframeEnabled) i.push({
                            type: "iframe",
                            url: "https://js-sec.indexww.com/um/ixmatch.html"
                        });
                        else {
                            let e = null;
                            d.$W.getConfig("userSync") && (e = d.$W.getConfig("userSync").syncsPerBidder), 0 === e && (e = r), e = r && (0 === e || e) ? r > e ? e : r : 1;
                            for (let t = 0; t < e; t++) i.push({
                                type: "image",
                                url: ae(e, t)
                            })
                        }
                        return i
                    }
                };

                function ae(e, t) {
                    let i = "",
                        r = "0";
                    return T && T.hasOwnProperty("gdprApplies") && (r = T.gdprApplies ? "1" : "0"), T && T.hasOwnProperty("consentString") && (i = T.consentString || ""), "https://dsum.casalemedia.com/pbusermatch?origin=prebid" + (0 !== P ? "&site_id=" + P.toString() : "") + "&p=" + e.toString() + "&i=" + t.toString() + "&gdpr=" + r + "&gdpr_consent=" + i + "&us_privacy=" + (D || "")
                }

                function se(e) {
                    return e.imp.forEach(((t, i) => {
                        const r = t.ext;
                        if (null == r) return e;
                        pe(t) < 2 || Object.keys(r).forEach((n => {
                            if (s.D4 in t) {
                                const o = t.banner.ext;
                                if (void 0 !== o && void 0 !== o[n] && o[n] == r[n] && delete e.imp[i].banner.ext[n], void 0 !== t.banner.format)
                                    for (let o = 0; o < t.banner.format.length; o++) null != t.banner.format[o].ext && null != t.banner.format[o].ext[n] && t.banner.format[o].ext[n] == r[n] && delete e.imp[i].banner.format[o].ext[n]
                            }
                            if (s.G_ in t) {
                                const o = t.video.ext;
                                void 0 !== o && void 0 !== o[n] && o[n] == r[n] && delete e.imp[i].video.ext[n]
                            }
                            if (s.s6 in t) {
                                const o = t.native.ext;
                                void 0 !== o && void 0 !== o[n] && o[n] == r[n] && delete e.imp[i].native.ext[n]
                            }
                        }))
                    })), e
                }

                function de(e) {
                    return e.imp.forEach(((t, i) => {
                        if (null == t.ext) return e;
                        if (!(pe(t) < 2)) {
                            if (s.D4 in t) {
                                const r = t.banner.ext;
                                if (void 0 !== r && void 0 !== r.siteID && delete e.imp[i].banner.ext.siteID, void 0 !== t.banner.format)
                                    for (let r = 0; r < t.banner.format.length; r++) void 0 !== t.banner.format[r].ext && void 0 !== t.banner.format[r].ext.siteID && ((0, a.J)(e.imp[i], "ext.siteID", t.banner.format[r].ext.siteID), (0, a.J)(e, "ext.ixdiag.usid", !0), delete e.imp[i].banner.format[r].ext.siteID)
                            }
                            if (s.G_ in t) {
                                const r = t.video.ext;
                                void 0 !== r && void 0 !== r.siteID && delete e.imp[i].video.ext.siteID
                            }
                            if (s.s6 in t) {
                                const r = t.native.ext;
                                void 0 !== r && void 0 !== r.siteID && delete e.imp[i].native.ext.siteID
                            }
                        }
                    })), e
                }

                function pe(e) {
                    let t = 0;
                    return void 0 !== e.banner && (t += 1), void 0 !== e.video && (t += 1), void 0 !== e.native && (t += 1), t
                }

                function le(e) {
                    return null == e.device && (e.device = {}), e.device.h = window.screen.height, e.device.w = window.screen.width, e
                }(0, c.a$)(oe), (0, r.E)("ixBidAdapter")
            }
        },
        e => {
            e.O(0, [33005, 60802, 51085], (() => {
                return t = 77764, e(e.s = t);
                var t
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [99383], {
            29191: (t, e, i) => {
                var s = i(7873),
                    n = i(91069),
                    r = i(70433),
                    o = i(63172),
                    d = i(88910),
                    a = i(11445),
                    c = i(78969),
                    l = i(68044),
                    h = i(27934),
                    u = i(81657),
                    p = i(15901),
                    g = i(76743);
                const m = "https://pb-logs.media.net/log?logid=kfk&evtid=prebid_analytics_events_client",
                    b = {
                        auto: "pbAg",
                        custom: "pbCg",
                        dense: "pbDg",
                        low: "pbLg",
                        medium: "pbMg",
                        high: "pbHg"
                    },
                    f = "medianet",
                    v = "9.24.0",
                    y = 1,
                    I = 2,
                    A = "-2",
                    S = ["canonical_url", "og_url", "twitter_url"],
                    R = {
                        APPR: "APPR",
                        RA: "RA"
                    };
                let T, D, j = {},
                    C = [],
                    _ = [];
                class O {
                    constructor(t, e) {
                        this.event = t, this.logid = "kfk", this.evtid = "projectevents", this.project = "prebidanalytics", this.dn = D.domain || "", this.requrl = D.topmostLocation || "", this.pbversion = v, this.cid = T.cid || "", this.rd = e
                    }
                    send() {
                        let t = "https://qsearch-a.akamaihd.net/log?" + N(this);
                        _.push(t), (0, n.triggerPixel)(t)
                    }
                }
                class w {
                    constructor(t) {
                        this.cid = t, this.pubLper = -1, this.ajaxState = 0, this.loggingPercent = 50, this.urlToConsume = "topmostLocation", this.debug = !1, this.gdprConsent = void 0, this.gdprApplies = void 0, this.uspConsent = void 0, this.shouldBeLogged = {}, this.mnetDebugConfig = ""
                    }
                    getLoggingData() {
                        return {
                            cid: this.cid,
                            lper: Math.round(100 / this.loggingPercent),
                            plper: this.pubLper,
                            gdpr: this.gdprApplies ? "1" : "0",
                            gdprConsent: this.gdprConsent,
                            ccpa: this.uspConsent,
                            ajx: this.ajaxState,
                            pbv: v,
                            pbav: "1.0.0",
                            flt: 1,
                            enableDbf: 1
                        }
                    }
                    _configURL() {
                        return "https://prebid.media.net/rtb/prebid/analytics/config?cid=" + encodeURIComponent(this.cid) + "&dn=" + encodeURIComponent(D.domain)
                    }
                    _parseResponse(t) {
                        try {
                            t = JSON.parse(t), this.setDataFromResponse(t), this.overrideDomainLevelData(t), this.overrideToDebug(this.mnetDebugConfig), this.urlToConsume = (0, p.mK)(S, t.urlKey) ? t.urlKey : this.urlToConsume, this.ajaxState = 1
                        } catch (t) {
                            this.ajaxState = 3, new O("analytics_config_parse_fail", t).send()
                        }
                    }
                    setDataFromResponse(t) {
                        isNaN(parseInt(t.percentage, 10)) || (this.loggingPercent = t.percentage)
                    }
                    overrideDomainLevelData(t) {
                        const e = (0, r.A)(t, "domain." + D.domain);
                        e && this.setDataFromResponse(e)
                    }
                    overrideToDebug(t) {
                        if ("" !== t) try {
                            this.setDataFromResponse(JSON.parse(decodeURIComponent(t)))
                        } catch (t) {}
                    }
                    _errorFetch() {
                        this.ajaxState = 3, new O("analytics_config_ajax_fail").send()
                    }
                    init() {
                        let t = F.parseUrl(D.topmostLocation);
                        if ((0, r.A)(t, "search.medianet_test") || "localhost" === t.hostname) return this.loggingPercent = 100, this.ajaxState = 1, void(this.debug = !0);
                        (0, r.A)(t, "search.mnet_setconfig") && (this.mnetDebugConfig = (0, r.A)(t, "search.mnet_setconfig")), (0, l.RD)(this._configURL(), {
                            success: this._parseResponse.bind(this),
                            error: this._errorFetch.bind(this)
                        })
                    }
                }
                class q {
                    constructor() {
                        const t = this._getUrlFromSelector('meta[property="og:url"]', "content"),
                            e = this._getUrlFromSelector('meta[name="twitter:url"]', "content"),
                            i = (0, h.EN)();
                        this.domain = i.domain, this.page = i.page, this.is_top = i.reachedTop, this.referrer = i.ref || window.document.referrer, this.canonical_url = i.canonicalUrl, this.og_url = t, this.twitter_url = e, this.topmostLocation = i.topmostLocation, this.screen = this._getWindowSize()
                    }
                    _getWindowSize() {
                        return `${window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||-1}x${window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||-1}`
                    }
                    _getAttributeFromSelector(t, e) {
                        try {
                            let i = (0, n.getWindowTop)().document.querySelector(t);
                            if (null !== i && i[e]) return i[e]
                        } catch (t) {}
                    }
                    _getAbsoluteUrl(t) {
                        let e = (0, n.getWindowTop)().document.createElement("a");
                        return e.href = t, e.href
                    }
                    _getUrlFromSelector(t, e) {
                        let i = this._getAttributeFromSelector(t, e);
                        return i && this._getAbsoluteUrl(i)
                    }
                    getLoggingData() {
                        return {
                            requrl: this[T.urlToConsume] || this.topmostLocation,
                            dn: this.domain,
                            ref: this.referrer,
                            screen: this.screen
                        }
                    }
                }
                class x {
                    constructor(t, e, i, s) {
                        this.tmax = t, this.supplyAdCode = e, this.context = i, this.adext = s, this.logged = {}, this.targeting = void 0, this.medianetPresent = 0
                    }
                    getShouldBeLogged(t) {
                        return T.shouldBeLogged.hasOwnProperty(t) || (T.shouldBeLogged[t] = 100 * Math.random() < parseFloat(T.loggingPercent)), T.shouldBeLogged[t]
                    }
                    getLoggingData() {
                        return Object.assign({
                            supcrid: this.supplyAdCode,
                            tmax: this.tmax,
                            targ: JSON.stringify(this.targeting),
                            ismn: this.medianetPresent,
                            vplcmtt: this.context
                        }, this.adext && {
                            adext: JSON.stringify(this.adext)
                        })
                    }
                }
                class B {
                    constructor() {
                        this.bidReqs = [], this.bidObjs = []
                    }
                    findReqBid(t) {
                        return this.bidReqs.find((e => e.bidId === t))
                    }
                    findBidObj(t, e) {
                        return this.bidObjs.find((i => i[t] === e))
                    }
                    addBidReq(t) {
                        this.bidReqs.push(t)
                    }
                    addBidObj(t) {
                        t instanceof U || (t = U.getInstance(t));
                        const e = this.findReqBid(t.bidId);
                        e instanceof U && (e.used = !0), this.bidObjs.push(t)
                    }
                    getAdSlotBidRequests(t) {
                        return this.bidReqs.filter((e => e.adUnitCode === t))
                    }
                    getAdSlotBidResponses(t) {
                        return this.bidObjs.filter((e => e.adUnitCode === t))
                    }
                }
                class U {
                    constructor(t, e, i, s, n, r, o, d) {
                        this.bidId = t, this.bidder = e, this.src = i, this.start = s, this.adUnitCode = n, this.allMediaTypeSizes = o, this.iwb = 0, this.winner = 0, this.status = e === A ? y : 3, this.ext = {}, this.originalCpm = void 0, this.cpm = void 0, this.dfpbd = void 0, this.width = void 0, this.height = void 0, this.mediaType = r, this.timeToRespond = void 0, this.dealId = void 0, this.creativeId = void 0, this.adId = void 0, this.currency = void 0, this.crid = void 0, this.pubcrid = void 0, this.mpvid = void 0, this.floorPrice = void 0, this.floorRule = void 0, this.serverLatencyMillis = void 0, this.used = !1, this.originalRequestId = t, this.requestId = void 0, this.advUrl = void 0, this.latestAcid = void 0, this.originalCurrency = void 0, this.currMul = void 0, this.inCurrMul = void 0, this.res_mtype = void 0, this.res_sizes = d, this.req_mtype = r
                    }
                    get size() {
                        return this.width && this.height ? this.width + "x" + this.height : ""
                    }
                    static getInstance(t) {
                        const e = new U;
                        return t && Object.assign(e, t)
                    }
                    getLoggingData() {
                        return {
                            reqId: this.requestId || this.bidId,
                            ogReqId: this.originalRequestId,
                            adid: this.adId,
                            pvnm: this.bidder,
                            src: this.src,
                            ogbdp: this.originalCpm,
                            bdp: this.cpm,
                            cbdp: this.dfpbd,
                            dfpbd: this.dfpbd,
                            szs: this.allMediaTypeSizes.join("|"),
                            size: (this.res_sizes || [this.size]).join("|"),
                            mtype: this.mediaType,
                            dId: this.dealId,
                            winner: this.winner,
                            curr: this.currency,
                            rests: this.timeToRespond,
                            status: this.status,
                            iwb: this.iwb,
                            crid: this.crid,
                            pubcrid: this.pubcrid,
                            mpvid: this.mpvid,
                            bidflr: this.floorPrice,
                            flrrule: this.floorRule,
                            ext: JSON.stringify(this.ext),
                            rtime: this.serverLatencyMillis,
                            advurl: this.advUrl,
                            lacid: this.latestAcid,
                            icurr: this.originalCurrency,
                            imul: this.inCurrMul,
                            omul: this.currMul,
                            res_mtype: this.res_mtype,
                            req_mtype: this.req_mtype
                        }
                    }
                }
                class E {
                    constructor(t) {
                        this.acid = t, this.status = u.AA, this.bidWrapper = new B, this.adSlots = {}, this.auctionInitTime = void 0, this.auctionStartTime = void 0, this.setTargetingTime = void 0, this.auctionEndTime = void 0, this.bidWonTime = void 0, this.floorData = {}
                    }
                    hasEnded() {
                        return this.status === u.UZ
                    }
                    getLoggingData() {
                        return {
                            sts: this.auctionStartTime - this.auctionInitTime,
                            ets: this.auctionEndTime - this.auctionInitTime,
                            tts: this.setTargetingTime - this.auctionInitTime,
                            wts: this.bidWonTime - this.auctionInitTime,
                            aucstatus: this.status,
                            acid: this.acid,
                            flrdata: this._mergeFieldsToLog({
                                ln: this.floorData.location,
                                skp: this.floorData.skipped,
                                enfj: (0, r.A)(this.floorData, "enforcements.enforceJS"),
                                enfd: (0, r.A)(this.floorData, "enforcements.floorDeals"),
                                sr: this.floorData.skipRate,
                                fs: this.floorData.fetchStatus
                            }),
                            flrver: this.floorData.modelVersion
                        }
                    }
                    addSlot(t) {
                        let {
                            adUnitCode: e,
                            supplyAdCode: i,
                            mediaTypes: s,
                            allMediaTypeSizes: n,
                            tmax: r,
                            adext: o,
                            context: d
                        } = t;
                        e && void 0 === this.adSlots[e] && (this.adSlots[e] = new x(r, i, d, o), this.addBidObj(new U("-1", A, "client", Date.now(), e, s, n)))
                    }
                    addBid(t) {
                        this.bidWrapper.addBidReq(t)
                    }
                    addBidObj(t) {
                        this.bidWrapper.addBidObj(t)
                    }
                    findReqBid(t) {
                        return this.bidWrapper.findReqBid(t)
                    }
                    findBidObj(t, e) {
                        return this.bidWrapper.findBidObj(t, e)
                    }
                    getAdSlotBidRequests(t) {
                        return this.bidWrapper.getAdSlotBidRequests(t)
                    }
                    getAdSlotBidResponses(t) {
                        return this.bidWrapper.getAdSlotBidResponses(t)
                    }
                    _mergeFieldsToLog(t) {
                        let e, i = [];
                        for (const s of Object.keys(t)) e = t[s], i.push(s + "=" + (void 0 === e ? "" : e));
                        return i.join("||")
                    }
                }

                function L(t) {
                    let {
                        auctionId: e,
                        adUnits: i,
                        timeout: s,
                        timestamp: o,
                        bidderRequests: d
                    } = t;
                    e && void 0 === j[e] && (j[e] = new E(e), j[e].auctionInitTime = o),
                        function(t, e, i) {
                            e = e || [];
                            const s = (0, n.groupBy)(e, "code");
                            Object.keys(s).forEach((e => {
                                const o = s[e],
                                    d = (0, r.A)(o, "0.adUnitCode") || e;
                                let a = "",
                                    c = {};
                                const l = {},
                                    h = {
                                        banner: [],
                                        video: []
                                    };
                                o.forEach((t => {
                                    let {
                                        mediaTypes: e,
                                        sizes: i,
                                        ext: s
                                    } = t;
                                    e = e || {}, c = Object.assign(c, s || (0, r.A)(e, "banner.ext")), a = (0, r.A)(e, "video.context") || a, Object.keys(e).forEach((t => l[t] = 1));
                                    const n = k(e, i);
                                    n.banner.forEach((t => h.banner.push(t))), n.video.forEach((t => h.video.push(t)))
                                })), c = (0, n.isEmpty)(c) ? void 0 : c, h.banner = h.banner.filter(n.uniques), h.video = h.video.filter(n.uniques), h.native = 1 === l.native ? [
                                    [1, 1].join("x")
                                ] : [];
                                const u = [].concat(h.banner, h.native, h.video),
                                    p = Object.keys(l).join("|");
                                j[t].addSlot({
                                    adUnitCode: e,
                                    supplyAdCode: d,
                                    mediaTypes: p,
                                    allMediaTypeSizes: u,
                                    context: a,
                                    tmax: i,
                                    adext: c
                                })
                            }))
                        }(e, i, s);
                    const a = (0, r.A)(d, "0.bids.0.floorData");
                    a && (j[e].floorData = { ...a
                    })
                }

                function k(t, e) {
                    const i = (0, r.A)(t, "banner.sizes") || e || [],
                        s = (0, r.A)(t, "native") ? [
                            [1, 1]
                        ] : [],
                        n = (0, r.A)(t, "video.playerSize") || [];
                    let o = [];
                    return 2 === n.length && (o = [n]), {
                        banner: i.map((t => t.join("x"))),
                        native: s.map((t => t.join("x"))),
                        video: o.map((t => t.join("x")))
                    }
                }

                function M(t, e, i) {
                    try {
                        return (0, g.hZ)(t, e, i, !1).toFixed(4)
                    } catch (s) {
                        (0, n.logError)(`Media.net Analytics Adapter: Could not convert ${e} to ${i} for price ${t}`)
                    }
                    return t
                }

                function z(t, e, i, s) {
                    var n, r;
                    (r = e, j[n = t] instanceof E && j[n].adSlots[r] instanceof x) && (i === R.RA ? W(t, e, i, s) : function(t, e, i) {
                        const s = j[t].adSlots[e];
                        s.getShouldBeLogged(i) && !s.logged[i] && (W(t, e, i), s.logged[i] = !0)
                    }(t, e, i))
                }

                function P(t, e) {
                    const i = function(t, e) {
                            const i = j[t].getAdSlotBidResponses(e),
                                s = {};
                            return i.filter((t => "" !== t.size)).forEach((t => (0, o.J)(s, `${t.bidId}.${t.size}`, !0))), i.filter((t => "" === t.size)).forEach((t => {
                                t.res_sizes = t.allMediaTypeSizes.filter((e => !(0, r.A)(s, `${t.bidId}.${e}`))), t.allMediaTypeSizes.forEach((e => (0, o.J)(s, `${t.bidId}.${e}`, !0)))
                            })), s
                        }(t, e),
                        s = function(t, e, i) {
                            const s = [];
                            return j[t].getAdSlotBidRequests(e).forEach((t => {
                                let {
                                    bidId: e,
                                    bidder: n,
                                    src: o,
                                    start: d,
                                    adUnitCode: a,
                                    mediaType: c,
                                    allMediaTypeSizes: l,
                                    status: h
                                } = t;
                                const u = l.filter((t => !(0, r.A)(i, `${e}.${t}`)));
                                if (n !== A && u.length > 0) {
                                    const t = new U(e, n, o, d, a, c, l, u);
                                    t.status = h === y ? I : h, s.push(t)
                                }
                            })), s
                        }(t, e, i);
                    return [...j[t].getAdSlotBidResponses(e), ...s]
                }

                function W(t, e, i, s) {
                    let o = function(t, e) {
                        let i = Object.assign(D.getLoggingData(), T.getLoggingData()),
                            s = j[t].adSlots[e].getLoggingData(),
                            n = j[t].getLoggingData();
                        return Object.assign(i, s, n)
                    }(t, e);
                    o.lgtp = i;
                    let d, a = (0, r.A)(o, "targ");
                    if (Object.keys(o).forEach((t => null == o[t] && delete o[t])), delete o.targ, i === R.RA) {
                        const e = j[t].findBidObj("adId", s);
                        if (!e) return;
                        d = [e.getLoggingData()], o.lper = 1
                    } else d = P(t, e).map((t => t.getLoggingData())), delete o.wts;
                    d.filter((t => t.pvnm === f)).length > 0 || (d = d.map((t => {
                        let {
                            mpvid: e,
                            crid: i,
                            ext: s,
                            pubcrid: n,
                            ...r
                        } = t;
                        return r
                    })));
                    let c = N(o) + "&";
                    var l;
                    d.forEach((function(t) {
                        c = c + N(t) + "&"
                    })), c += N({
                        targ: a
                    }), l = c, C.push(m + "&" + l), (0, n.triggerPixel)(m + "&" + l)
                }

                function N(t) {
                    return (0, n._map)(t, ((t, e) => void 0 === t ? e + "=" : ((0, n.isPlainObject)(t) && (t = JSON.stringify(t)), e + "=" + encodeURIComponent(t)))).join("&")
                }
                class F {
                    static parseUrl(t) {
                        let e = document.createElement("a");
                        return e.href = decodeURIComponent(t), {
                            hostname: e.hostname,
                            search: F.parseQS(e.search || ""),
                            host: e.host || window.location.host
                        }
                    }
                    static parseQS(t) {
                        return t ? t.replace(/^\?/, "").split("&").reduce(((t, e) => {
                            let [i, s] = e.split("=");
                            return /\[\]$/.test(i) ? (i = i.replace("[]", ""), t[i] = t[i] || [], t[i].push(s)) : t[i] = s || "", t
                        }), {}) : {}
                    }
                }
                let $ = Object.assign((0, d.Ay)({
                    URL: F,
                    analyticsType: "endpoint"
                }), {
                    getlogsQueue: () => C,
                    getErrorQueue: () => _,
                    clearlogsQueue() {
                        C = [], _ = [], j = {}
                    },
                    track(t) {
                        let {
                            eventType: e,
                            args: i
                        } = t;
                        switch (T.debug && (0, n.logInfo)(e, i), e) {
                            case c.qY.AUCTION_INIT:
                                L(i);
                                break;
                            case c.qY.BID_REQUESTED:
                                ! function(t) {
                                    let {
                                        auctionId: e,
                                        auctionStart: i,
                                        bids: s,
                                        start: n,
                                        uspConsent: o,
                                        gdpr: d
                                    } = t;
                                    j[e] instanceof E && (T.gdprApplies = !(!d || !d.gdprApplies), T.gdprApplies && (T.gdprConsent = d.consentString || ""), T.uspConsent = T.uspConsent || o, j[e].auctionStartTime = i, s.forEach((t => {
                                        const {
                                            adUnitCode: i,
                                            bidder: s,
                                            bidId: o,
                                            src: d,
                                            mediaTypes: a,
                                            sizes: c
                                        } = t, l = k(a, c), h = [].concat(l.banner, l.native, l.video), u = new U(o, s, d, n, i, a && Object.keys(a).join("|"), h);
                                        j[e].addBid(u), s === f && (u.crid = (0, r.A)(t, "params.crid"), u.pubcrid = (0, r.A)(t, "params.crid"), j[e].adSlots[i].medianetPresent = 1)
                                    })))
                                }(i);
                                break;
                            case c.qY.BID_RESPONSE:
                                ! function(t) {
                                    const {
                                        width: e,
                                        height: i,
                                        mediaType: s,
                                        cpm: n,
                                        requestId: o,
                                        timeToRespond: d,
                                        auctionId: a,
                                        dealId: l,
                                        originalRequestId: h,
                                        bidder: p,
                                        meta: g
                                    } = t;
                                    let {
                                        originalCpm: m,
                                        creativeId: v,
                                        adId: I,
                                        currency: A,
                                        originalCurrency: S
                                    } = t;
                                    if (!(j[a] instanceof E)) return;
                                    const R = h || o,
                                        T = j[a].findReqBid(R);
                                    if (!(T instanceof U)) return;
                                    let D = j[a].findBidObj("bidId", o),
                                        C = !0;
                                    D && D.status !== y || (D = {}, C = !1), A = A ? A.toUpperCase() : "", S = S ? S.toUpperCase() : A, Object.assign(D, T, {
                                        cpm: n,
                                        width: e,
                                        height: i,
                                        mediaType: s,
                                        timeToRespond: d,
                                        dealId: l,
                                        creativeId: v,
                                        originalRequestId: h,
                                        requestId: o
                                    }, {
                                        adId: I,
                                        currency: A,
                                        originalCurrency: S
                                    }), D.floorPrice = (0, r.A)(t, "floorData.floorValue"), D.floorRule = (0, r.A)(t, "floorData.floorRule"), D.originalCpm = m || n, D.advUrl = g && g.advertiserDomains && g.advertiserDomains.join(","), D.currMul = 1, D.inCurrMul = 1, "USD" !== D.originalCurrency && (D.originalCpm = M(D.originalCpm, D.originalCurrency, "USD"), D.inCurrMul = M(1, "USD", D.originalCurrency)), "USD" !== D.currency && (D.cpm = M(D.cpm, D.currency, "USD"), D.currMul = M(1, "USD", D.currency));
                                    let _ = (0, r.A)(t, "adserverTargeting.hb_pb");
                                    if (!_) {
                                        let e = (0, u.mO)(t);
                                        _ = t[b[e]] || n
                                    }
                                    D.dfpbd = _, t.status === c.tl.BID_REJECTED ? D.status = 12 : D.status = y, p === f && t.ext instanceof Object && Object.assign(D, {
                                        ext: t.ext
                                    }, {
                                        mpvid: t.ext.pvid
                                    }, t.ext.crid && {
                                        crid: t.ext.crid
                                    }), void 0 !== t.serverResponseTimeMs && (D.serverLatencyMillis = t.serverResponseTimeMs), D.res_mtype = s, !C && j[a].addBidObj(D)
                                }(i);
                                break;
                            case c.qY.BID_TIMEOUT:
                                i.map((t => {
                                    let {
                                        bidId: e,
                                        auctionId: i
                                    } = t;
                                    if (!(j[i] instanceof E)) return;
                                    const s = j[i].findReqBid(e);
                                    if (!(s instanceof U) || s.used) return;
                                    const n = { ...s
                                    };
                                    n.status = 3, j[i].addBidObj(n)
                                }));
                                break;
                            case c.qY.NO_BID:
                                ! function(t) {
                                    let {
                                        auctionId: e,
                                        bidId: i
                                    } = t;
                                    if (!(j[e] instanceof E)) return;
                                    if (j[e].hasEnded()) return;
                                    const s = j[e].findReqBid(i);
                                    if (!(s instanceof U) || s.used) return;
                                    const n = { ...s
                                    };
                                    n.status = I, j[e].addBidObj(n)
                                }(i);
                                break;
                            case c.qY.AUCTION_END:
                                ! function(t) {
                                    let {
                                        auctionId: e,
                                        auctionEnd: i
                                    } = t;
                                    j[e] instanceof E && (j[e].status = u.UZ, j[e].auctionEndTime = i)
                                }(i);
                                break;
                            case c.qY.SET_TARGETING:
                                ! function(t) {
                                    for (const e of Object.keys(t))
                                        for (const i of Object.keys(j)) {
                                            let s = j[i],
                                                n = s.adSlots[e];
                                            if (!(n instanceof x)) continue;
                                            n.targeting = t[e], s.setTargetingTime = Date.now();
                                            let o = Object.keys(t[e]).reduce(((i, s) => (-1 !== s.indexOf(c.xS.AD_ID) && (i[s] = t[e][s]), i)), {});
                                            const d = t[e][c.xS.AD_ID];
                                            let a, l = Object.keys(o).map((t => o[t]));
                                            s.bidWrapper.bidObjs.filter((t => -1 !== l.indexOf(t.adId))).map((function(t) {
                                                t.iwb = 1, t.adId === d && (a = t)
                                            })), s.bidWrapper.bidObjs.forEach((t => {
                                                t.bidder === A && t.adUnitCode === e && (t.iwb = 0 === l.length ? 0 : 1, t.width = (0, r.A)(a, "width"), t.height = (0, r.A)(a, "height"))
                                            })), z(i, e, R.APPR)
                                        }
                                }(i);
                                break;
                            case c.qY.BID_WON:
                                ! function(t) {
                                    const {
                                        auctionId: e,
                                        adUnitCode: i,
                                        adId: s,
                                        bidder: n,
                                        requestId: r,
                                        originalRequestId: o
                                    } = t;
                                    if (!(j[e] instanceof E)) return void new O("winning_auction_missing", {
                                        adId: s,
                                        auctionId: e,
                                        adUnitCode: i,
                                        bidder: n,
                                        requestId: r,
                                        originalRequestId: o
                                    }).send();
                                    let d = j[e].findBidObj("adId", s);
                                    d instanceof U ? (d.latestAcid = t.latestTargetedAuctionId, j[e].bidWonTime = Date.now(), d.winner = 1, z(e, i, R.RA, d.adId)) : new O("winning_bid_absent", {
                                        adId: s,
                                        auctionId: e,
                                        adUnitCode: i,
                                        bidder: n,
                                        requestId: r,
                                        originalRequestId: o
                                    }).send()
                                }(i)
                        }
                    }
                });
                $.originEnableAnalytics = $.enableAnalytics, $.enableAnalytics = function(t) {
                    t && t.options && t.options.cid ? ((0, s.m)().medianetGlobals = (0, s.m)().medianetGlobals || {}, (0, s.m)().medianetGlobals.analyticsEnabled = !0, D = new q, T = new w(t.options.cid), T.pubLper = t.options.sampling || "", T.init(), t.options.sampling = 1, $.originEnableAnalytics(t)) : (0, n.logError)("Media.net Analytics adapter: cid is required.")
                }, a.Ay.registerAnalyticsAdapter({
                    adapter: $,
                    code: "medianetAnalytics",
                    gvlid: 142
                });
                (0, s.E)("medianetAnalyticsAdapter")
            }
        },
        t => {
            t.O(0, [2630, 41225, 60802, 51085], (() => {
                return e = 29191, t(t.s = e);
                var e
            }));
            t.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [59600], {
            24582: (e, t, n) => {
                var r = n(7873),
                    i = n(91069),
                    o = n(70433),
                    a = n(63172),
                    s = n(57377),
                    d = n(43272),
                    c = n(71371),
                    l = n(27934),
                    u = n(95789),
                    p = n(12449),
                    m = n(51252),
                    f = n(68044),
                    g = n(88944);
                const b = "medianet",
                    y = "trustedstack",
                    h = "https://prebid.media.net/video/bundle.js",
                    _ = {
                        NOT_DETERMINED: 0,
                        ABOVE_THE_FOLD: 1,
                        BELOW_THE_FOLD: 2
                    },
                    x = "client_timeout",
                    v = "client_bid_won",
                    w = "client_set_targeting",
                    E = "client_bidder_error";
                let A;
                window.mnet = window.mnet || {}, window.mnet.queue = window.mnet.queue || [];
                const O = [{
                    code: y,
                    gvlid: 1288
                }];

                function I() {
                    try {
                        return window.top.document.referrer
                    } catch (e) {
                        return document.referrer
                    }
                }

                function T(e, t) {
                    const n = t.refererInfo;
                    let r = {
                        domain: (e = e || {}).domain || n.domain,
                        page: e.page || n.page,
                        ref: e.ref || I(),
                        topMostLocation: n.topmostLocation,
                        isTop: e.isTop || n.reachedTop
                    };
                    return Object.assign(r, function() {
                        if (A) return A;
                        let e = C('link[rel="canonical"]', "href"),
                            t = C('meta[property="og:url"]', "content"),
                            n = C('meta[name="twitter:url"]', "content");
                        return A = Object.assign({}, e && {
                            canonical_url: e
                        }, t && {
                            og_url: t
                        }, n && {
                            twitter_url: n
                        }), A
                    }())
                }

                function C(e, t) {
                    let n = function(e, t) {
                        try {
                            let n = (0, i.getWindowTop)().document.querySelector(e);
                            if (null !== n && n[t]) return n[t]
                        } catch (e) {}
                    }(e, t);
                    return n && function(e) {
                        let t = (0, i.getWindowTop)().document.createElement("a");
                        return t.href = e, t.href
                    }(n)
                }

                function S(e, t) {
                    return e.filter((e => e.type === t))
                }

                function R(e) {
                    return {
                        w: parseInt(e[0], 10),
                        h: parseInt(e[1], 10)
                    }
                }

                function j(e, t) {
                    const n = (0, o.A)(e, "params"),
                        a = (0, o.A)(t, "gdprConsent"),
                        s = (0, o.A)(t, "uspConsent"),
                        c = (0, o.A)(e, "userId"),
                        l = (0, o.A)(e, "schain") || {},
                        u = q.getWindowSize(),
                        p = !(!a || !a.gdprApplies),
                        m = !!s,
                        f = !!d.$W.getConfig("coppa"),
                        {
                            top: b = -1,
                            right: y = -1,
                            bottom: h = -1,
                            left: _ = -1
                        } = (0, g.g)();
                    return Object.assign({}, {
                        customer_id: n.cid
                    }, {
                        prebid_version: "v9.24.0"
                    }, {
                        gdpr_applies: p
                    }, p && {
                        gdpr_consent_string: a.consentString || ""
                    }, {
                        usp_applies: m
                    }, m && {
                        usp_consent_string: s || ""
                    }, {
                        coppa_applies: f
                    }, -1 !== u.w && -1 !== u.h && {
                        screen: u
                    }, c && {
                        user_id: c
                    }, (0, r.m)().medianetGlobals.analyticsEnabled && {
                        analytics: !0
                    }, !(0, i.isEmpty)(l) && {
                        schain: l
                    }, {
                        vcoords: {
                            top_left: {
                                x: _,
                                y: b
                            },
                            bottom_right: {
                                x: y,
                                y: h
                            }
                        }
                    })
                }

                function B(e, t) {
                    let n = {
                        id: e.bidId,
                        transactionId: e.ortb2Imp ? .ext ? .tid,
                        ext: {
                            dfp_id: e.adUnitCode,
                            display_count: e.auctionsCount
                        },
                        all: e.params
                    };
                    e.ortb2Imp && (n.ortb2Imp = e.ortb2Imp);
                    let r = (0, o.A)(e, "mediaTypes.banner.sizes") || [];
                    const a = (0, o.A)(e, "mediaTypes.video") || {},
                        s = (0, o.A)(e, "params.video") || {},
                        d = Object.assign({}, s, a);
                    var l;
                    if ((0, i.isEmpty)(d) || (n.video = d), r.length > 0 && (n.banner = (l = r, (0, i.isArray)(l) && 2 === l.length && !(0, i.isArray)(l[0]) ? [R(l)] : l.map((e => R(e))))), e.nativeParams) try {
                        n.native = JSON.stringify(e.nativeParams)
                    } catch (e) {
                        (0, i.logError)(`${b} : Incorrect JSON : bidRequest.nativeParams`)
                    }
                    e.params.crid && (n.tagid = e.params.crid.toString());
                    let u = parseFloat(e.params.bidfloor || e.params.bidFloor);
                    u && (n.bidfloor = u);
                    const p = function(e) {
                        let t = document.getElementById(e);
                        if (!t && -1 !== e.indexOf("/")) {
                            const {
                                divId: n
                            } = (0, m.p)(e);
                            (0, i.isStr)(n) && (t = document.getElementById(n))
                        }
                        if (t && t.getBoundingClientRect) {
                            const e = t.getBoundingClientRect();
                            let n = {};
                            return n.top_left = {
                                y: e.top,
                                x: e.left
                            }, n.bottom_right = {
                                y: e.bottom,
                                x: e.right
                            }, n
                        }
                        return null
                    }(e.adUnitCode);
                    if (p && n.banner && 0 !== n.banner.length) {
                        let e = function(e) {
                            const {
                                scrollX: t,
                                scrollY: n
                            } = window;
                            return {
                                top_left: {
                                    x: e.top_left.x + t,
                                    y: e.top_left.y + n
                                },
                                bottom_right: {
                                    x: e.bottom_right.x + t,
                                    y: e.bottom_right.y + n
                                }
                            }
                        }(p);
                        n.ext.coordinates = e, n.ext.viewability = N(p.top_left, $(n.banner)), N(e.top_left, $(n.banner)) > .5 ? n.ext.visibility = _.ABOVE_THE_FOLD : n.ext.visibility = _.BELOW_THE_FOLD
                    } else n.ext.visibility = _.NOT_DETERMINED;
                    const f = function(e) {
                        let t = [];
                        "function" == typeof e.getFloor && [c.D4, c.G_, c.s6].forEach((n => {
                            e.mediaTypes.hasOwnProperty(n) && (n == c.D4 ? e.mediaTypes.banner.sizes.forEach((r => {
                                D(e, n, r, t)
                            })) : D(e, n, "*", t))
                        }));
                        return t
                    }(e);
                    return f && f.length > 0 && (n.bidfloors = f), t.paapi ? .enabled && (n.ext.ae = e ? .ortb2Imp ? .ext ? .ae), n
                }

                function D(e, t, n, r) {
                    let i = e.getFloor({
                        currency: "USD",
                        mediaType: t,
                        size: n
                    }) || {};
                    n.length > 1 && (i.size = n), i.mediaType = t, r.push(i)
                }

                function $(e) {
                    return e.reduce(((e, t) => t.h * t.w < e.h * e.w ? t : e))
                }

                function N(e, t) {
                    let n = t.w * t.h,
                        r = q.getWindowSize(),
                        i = {
                            x: e.x + t.w,
                            y: e.y + t.h
                        };
                    return 0 === n || -1 === r.w || -1 === r.h ? 0 : function(e, t, n, r) {
                        if (e.x > r.x || t.x < n.x || e.y > r.y || t.y < n.y) return 0;
                        return (Math.min(t.x, r.x) - Math.max(e.x, n.x)) * (Math.min(t.y, r.y) - Math.max(e.y, n.y))
                    }(e, i, {
                        x: 0,
                        y: 0
                    }, {
                        x: r.w,
                        y: r.h
                    }) / n
                }

                function U(e, t) {
                    const n = (0, i.deepClone)(e),
                        r = (0, o.A)(t, "0.userIdAsEids");
                    return r && (0, a.J)(n, "user.ext.eids", r), n
                }

                function W(e, t) {
                    const n = {};
                    return (0, i.isArray)(t) || (t = []), t.forEach((e => {
                        let t = function(e) {
                            const t = {};
                            t.acid = e.auctionId || "", t.crid = (0, o.A)(e, "params.crid") || (0, o.A)(e, "params.0.crid") || e.adUnitCode || "", t.ext = (0, i.safeJSONEncode)(e.ext) || "";
                            const n = (0, i.deepClone)(e);
                            return delete n.ad, delete n.vastXml, t.rawobj = (0, i.safeJSONEncode)(n), t
                        }(e);
                        Object.keys(t).forEach((e => {
                            n[e] = n[e] || [], n[e].push(encodeURIComponent(t[e]))
                        }))
                    })), Object.assign({}, function(e) {
                        const t = {},
                            n = (0, l.EN)();
                        return t.logid = "kfk", t.evtid = "projectevents", t.project = "prebid", t.pbver = "9.24.0", t.cid = (0, r.m)().medianetGlobals.cid || "", t.dn = encodeURIComponent(n.domain || ""), t.requrl = encodeURIComponent(n.page || ""), t.event = e.name || "", t.value = e.value || "", t.rd = e.related_data || "", t
                    }(e), n)
                }

                function k(e, t) {
                    const n = W(e, t);
                    var r, o;
                    r = "https://navvy.media.net/log", o = (0, i.formatQS)(n), (0, f.RD)(r, {
                        success: () => {},
                        error: () => {}
                    }, o, {
                        method: "POST",
                        keepalive: !0
                    })
                }

                function M(e) {
                    const t = (0, o.A)(e, "context") || "",
                        n = (0, o.A)(e, "vto");
                    "outstream" == t && n && (e.renderer = function(e) {
                        const t = u.A4.install({
                            url: h
                        });
                        return t.setRender((function(e) {
                            window.mnet.queue.push((function() {
                                const t = {
                                        width: e.width,
                                        height: e.height,
                                        vastTimeout: e.vto,
                                        maxAllowedVastTagRedirects: e.mavtr,
                                        allowVpaid: e.avp,
                                        autoPlay: e.ap,
                                        preload: e.pl,
                                        mute: e.mt
                                    },
                                    n = e.dfp_id,
                                    r = (0, m.p)(n).divId || n;
                                window.mnet.mediaNetoutstreamPlayer(e, r, t)
                            }))
                        })), t
                    }())
                }(0, r.m)().medianetGlobals = (0, r.m)().medianetGlobals || {};
                const q = {
                    code: b,
                    gvlid: 142,
                    aliases: O,
                    supportedMediaTypes: [c.D4, c.s6, c.G_],
                    isBidRequestValid: function(e) {
                        return e.params ? e.params.cid && (0, i.isStr)(e.params.cid) && !(0, i.isEmptyStr)(e.params.cid) ? (Object.assign((0, r.m)().medianetGlobals, !(0, r.m)().medianetGlobals.cid && {
                            cid: e.params.cid
                        }), !0) : ((0, i.logError)(`${b} : cid should be a string`), !1) : ((0, i.logError)(`${b} : Missing bid parameters`), !1)
                    },
                    buildRequests: function(e, t) {
                        let n = function(e, t) {
                            return {
                                site: T(e[0].params.site, t),
                                ext: j(e[0], t),
                                id: e[0].auctionId,
                                imp: e.map((e => B(e, t))),
                                ortb2: U(t.ortb2, e),
                                tmax: t.timeout
                            }
                        }(e = (0, p.Xj)(e), t);
                        return {
                            method: "POST",
                            url: (r = t.bidderCode, i = n.ext.customer_id, (r === y ? "https://prebid.trustedstack.com/rtb/trustedstack" : "https://prebid.media.net/rtb/prebid") + "?cid=" + encodeURIComponent(i)),
                            data: JSON.stringify(n)
                        };
                        var r, i
                    },
                    interpretResponse: function(e, t) {
                        let n = [];
                        if (!e || !e.body) return (0, i.logInfo)(`${b} : response is empty`), n;
                        let r = e.body.bidList;
                        (0, i.isArray)(r) && 0 !== r.length ? (n = r.filter((e => function(e) {
                            return !1 === e.no_bid && parseFloat(e.cpm) > 0
                        }(e))), n.forEach(M)) : (0, i.logInfo)(`${b} : no bids`);
                        const a = (0, o.A)(e, "body.ext.paApiAuctionConfigs") || [],
                            s = (0, o.A)(e, "body.ext.igi") || [];
                        return 0 === a.length && 0 === s.length ? n : (s.length > 0 && a.push(...s.map((e => {
                            let {
                                igs: t
                            } = e;
                            return t || []
                        })).flat()), {
                            bids: n,
                            paapi: a
                        })
                    },
                    getUserSyncs: function(e, t) {
                        let n = (r = t, !(0, i.isEmpty)(r) && r[0].body && r[0].body.ext && (0, i.isArray)(r[0].body.ext.csUrl) ? r[0].body.ext.csUrl : []);
                        var r;
                        return e.iframeEnabled ? S(n, "iframe") : e.pixelEnabled ? S(n, "image") : void 0
                    },
                    onTimeout: e => {
                        try {
                            k({
                                name: x,
                                value: e.length,
                                related_data: e[0].timeout || d.$W.getConfig("bidderTimeout")
                            }, e)
                        } catch (e) {}
                    },
                    onBidWon: e => {
                        try {
                            k({
                                name: v,
                                value: e.cpm
                            }, [e])
                        } catch (e) {}
                    },
                    onSetTargeting: e => {
                        try {
                            let t = {
                                name: w,
                                value: e.cpm
                            };
                            d.$W.getConfig("enableSendAllBids") || k(t, [e])
                        } catch (e) {}
                    },
                    onBidderError: e => {
                        let {
                            error: t,
                            bidderRequest: n
                        } = e;
                        try {
                            k({
                                name: E,
                                related_data: `timedOut:${t.timedOut}|status:${t.status}|message:${t.reason.message}`
                            }, n.bids)
                        } catch (e) {}
                    },
                    clearPageMeta: function() {
                        A = void 0
                    },
                    getWindowSize: function() {
                        return {
                            w: window.screen.width || -1,
                            h: window.screen.height || -1
                        }
                    }
                };
                (0, s.a$)(q), (0, r.E)("medianetBidAdapter")
            }
        },
        e => {
            e.O(0, [33005, 37769, 60802, 51085], (() => {
                return t = 24582, e(e.s = t);
                var t
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [49667], {
            47573: (n, t, e) => {
                var i = e(7873),
                    o = e(91069),
                    s = e(41580),
                    a = e(16833),
                    d = e(15901),
                    r = e(45569);
                const m = "medianet",
                    c = m + "rtd",
                    u = "mnadc",
                    w = "ortb2Imp",
                    f = (n, t) => `https://warp.media.net/js/tags/prebidrtdclient.js?cid=${n}&dn=${t}`;

                function g(n) {
                    window.mnjs.que.push(n)
                }

                function l(n, t) {
                    return n = n || (0, i.m)().adUnits || [], t && t.length && (n = n.filter((n => (0, d.mK)(t, n.code)))), n
                }
                window.mnjs = window.mnjs || {}, window.mnjs.que = window.mnjs.que || [];
                const p = {
                    name: m,
                    init: function(n) {
                        const t = n.params && n.params.cid;
                        return t && (0, o.isStr)(t) && !(0, o.isEmptyStr)(t) ? (function(n) {
                            const t = f(n, window.location.hostname);
                            (0, s.R)(t, r.zu, m)
                        }(t), g((() => window.mnjs.setData({
                            module: "iref",
                            name: "initIRefresh",
                            data: {
                                config: n,
                                prebidGlobal: (0, i.m)()
                            }
                        }, c))), !0) : ((0, o.logError)(`${c}: cid should be a string`), !1)
                    },
                    getBidRequestData: function(n, t, e, i) {
                        g((() => {
                            let s = l(n.adUnits, n.adUnitCodes);
                            const a = window.mnjs.onPrebidRequestBid({
                                requestBidsProps: n,
                                config: e,
                                userConsent: i
                            });
                            if (!a) return void t();
                            a.onComplete((() => t()), ((n, e) => {
                                s.forEach((t => {
                                    t[w] = t[w] || {}, (0, o.mergeDeep)(t[w], e[t.code]), (0, o.mergeDeep)(t, n[t.code])
                                })), t()
                            }))
                        }))
                    },
                    onAuctionInitEvent: function(n) {
                        g((() => window.mnjs.setData({
                            module: "iref",
                            name: "auctionInit",
                            data: {
                                auction: n
                            }
                        }, c)))
                    },
                    getTargetingData: function(n, t, e, i) {
                        const s = l(i.adUnits, n);
                        let a = {};
                        window.mnjs.loaded && (0, o.isFn)(window.mnjs.getTargetingData) && (a = window.mnjs.getTargetingData(n, s, c) || {});
                        const d = {};
                        return n.forEach((n => {
                            d[n] = d[n] || {}, a[n] = a[n] || {}, d[n] = {
                                [u]: n,
                                ...a[n]
                            }
                        })), d
                    }
                };
                (0, a.bz)("realTimeData", p), (0, i.E)("medianetRtdProvider")
            }
        },
        n => {
            n.O(0, [60802, 51085], (() => {
                return t = 47573, n(n.s = t);
                var t
            }));
            n.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [31079], {
            25330: (t, e, n) => {
                var o = n(7873),
                    r = n(43272),
                    a = n(16833),
                    i = n(91069),
                    s = n(75023),
                    c = n(78969),
                    u = n(11445),
                    f = n(16916),
                    l = n(15901),
                    g = n(16894),
                    d = n(45569),
                    D = n(96318);
                const h = (0, n(2604).ZI)((t => u.Ay.resolveAlias(t)));
                let p, E, m = [],
                    T = [],
                    y = [];
                const R = function() {
                    let t = !1;
                    return function() {
                        t || (Object.entries({
                            [c.qY.AUCTION_INIT]: ["onAuctionInitEvent"],
                            [c.qY.AUCTION_END]: ["onAuctionEndEvent", v],
                            [c.qY.BID_RESPONSE]: ["onBidResponseEvent"],
                            [c.qY.BID_REQUESTED]: ["onBidRequestEvent"],
                            [c.qY.BID_ACCEPTED]: ["onBidAcceptedEvent"]
                        }).forEach((t => {
                            let [e, [n, o]] = t;
                            s.on(e, (t => {
                                o && o(t), T.forEach((e => {
                                    try {
                                        e[n] && e[n](t, e.config, E)
                                    } catch (t) {
                                        (0, i.logError)(`RTD provider '${e.name}': error in '${n}':`, t)
                                    }
                                }))
                            }))
                        })), t = !0)
                    }
                }();

                function A() {
                    return {
                        gdpr: f.mW.getConsentData(),
                        usp: f.t6.getConsentData(),
                        gpp: f.ad.getConsentData(),
                        coppa: !!r.$W.getConfig("coppa")
                    }
                }

                function I() {
                    E = A();
                    let t = [];
                    y.forEach((e => {
                        const n = (0, l.I6)(m, (t => t.name === e.name));
                        n && n.init && n.init(e, E) && t.push(Object.assign(n, {
                            config: e
                        }))
                    })), T = t, (0, i.logInfo)(`Real time data module enabled, using submodules: ${T.map((t=>t.name)).join(", ")}`)
                }
                const b = (0, g.Ak)("rtd", (function(t, e) {
                    E = A();
                    const n = [],
                        o = [];
                    T.forEach((t => {
                        if ("function" != typeof t.getBidRequestData) return;
                        n.push(t);
                        const e = t.config;
                        e && e.waitForIt && o.push(t)
                    }));
                    const r = o.length && p.auctionDelay && p.auctionDelay > 0;
                    let a, i = o.length,
                        s = !1;
                    const c = [];
                    if (!n.length) return f();

                    function u() {
                        s || (this.config && this.config.waitForIt && i--, 0 === i && setTimeout(f, 0))
                    }

                    function f() {
                        s || (s = !0, clearTimeout(a), c.forEach((t => t())), t.call(this, e))
                    }
                    a = setTimeout(f, r ? p.auctionDelay : 0), n.forEach((t => {
                        const n = (0, D.Qo)(e.ortb2Fragments || {}, h(d.zu, t.name));
                        c.push(n.verify), e.ortb2Fragments = n.obj, t.getBidRequestData(e, u.bind(t), t.config, E)
                    }))
                }));

                function v(t) {
                    const e = T.filter((t => "function" == typeof t.getTargetingData));
                    if (!e.length) return;
                    const n = t.adUnitCodes;
                    if (!n) return;
                    let o = [];
                    for (let r = e.length - 1; r >= 0; r--) {
                        const a = e[r].getTargetingData(n, e[r].config, E, t);
                        a && "object" == typeof a ? o.push(a) : (0, i.logWarn)("invalid getTargetingData response for sub module", e[r].name)
                    }
                    const r = function(t) {
                        if (!Array.isArray(t) || !t.length) return {};
                        return t.reduce(((t, e) => {
                            for (let n in e)
                                if (e.hasOwnProperty(n))
                                    if (t.hasOwnProperty(n)) {
                                        const o = e[n];
                                        for (let e in o) o.hasOwnProperty(e) && (t[n][e] = o[e])
                                    } else t[n] = e[n];
                            return t
                        }), {})
                    }(o);
                    return t.adUnits.forEach((t => {
                        const e = t.code && r[t.code];
                        e && ((0, i.logInfo)("RTD set ad unit targeting of", e, "for", t), t[c.iD.ADSERVER_TARGETING] = Object.assign(t[c.iD.ADSERVER_TARGETING] || {}, e))
                    })), t.adUnits
                }

                function q(t) {
                    T.forEach((t => {
                        if ("function" == typeof t.onDataDeletionRequest) try {
                            t.onDataDeletionRequest(t.config)
                        } catch (e) {
                            (0, i.logError)(`Error executing ${t.name}.onDataDeletionRequest`, e)
                        }
                    }));
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                    t.apply(this, n)
                }(0, a.xG)("realTimeData", (function(t) {
                    return m.push(t), f.o2.register(d.zu, t.name, t.gvlid),
                        function() {
                            const e = m.indexOf(t);
                            e >= 0 && (m.splice(e, 1), I())
                        }
                })),
                function(t) {
                    const e = t.getConfig("realTimeData", (t => {
                        let {
                            realTimeData: n
                        } = t;
                        n.dataProviders ? (e(), p = n, y = n.dataProviders, R(), (0, a.Yn)("startAuction").before(b, 20), u.Ay.callDataDeletionRequest.before(q), I()) : (0, i.logError)("missing parameters for real time module")
                    }))
                }(r.$W), (0, o.E)("rtdModule")
            }
        },
        t => {
            t.O(0, [45881, 60802, 51085], (() => {
                return e = 25330, t(t.s = e);
                var e
            }));
            t.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [62711], {
            99293: (e, t, r) => {
                var i = r(7873),
                    n = r(89766),
                    o = r(34610),
                    s = r(57377),
                    a = r(43272),
                    d = r(71371),
                    c = r(95789),
                    p = r(91069),
                    u = r(63172),
                    l = r(70433),
                    m = r(28656),
                    b = r(8702);
                const g = "https://video-outstream.rubiconproject.com/apex-2.2.1.js";
                let x = a.$W.getConfig("rubicon") || {};
                a.$W.getConfig("rubicon", (e => {
                    (0, p.mergeDeep)(x, e.rubicon)
                }));
                let f = {};
                var y = {
                    1: "468x60",
                    2: "728x90",
                    5: "120x90",
                    7: "125x125",
                    8: "120x600",
                    9: "160x600",
                    10: "300x600",
                    13: "200x200",
                    14: "250x250",
                    15: "300x250",
                    16: "336x280",
                    17: "240x400",
                    19: "300x100",
                    31: "980x120",
                    32: "250x360",
                    33: "180x500",
                    35: "980x150",
                    37: "468x400",
                    38: "930x180",
                    39: "750x100",
                    40: "750x200",
                    41: "750x300",
                    42: "2x4",
                    43: "320x50",
                    44: "300x50",
                    48: "300x300",
                    53: "1024x768",
                    54: "300x1050",
                    55: "970x90",
                    57: "970x250",
                    58: "1000x90",
                    59: "320x80",
                    60: "320x150",
                    61: "1000x1000",
                    64: "580x500",
                    65: "640x480",
                    66: "930x600",
                    67: "320x480",
                    68: "1800x1000",
                    72: "320x320",
                    73: "320x160",
                    78: "980x240",
                    79: "980x300",
                    80: "980x400",
                    83: "480x300",
                    85: "300x120",
                    90: "548x150",
                    94: "970x310",
                    95: "970x100",
                    96: "970x210",
                    101: "480x320",
                    102: "768x1024",
                    103: "480x280",
                    105: "250x800",
                    108: "320x240",
                    113: "1000x300",
                    117: "320x100",
                    125: "800x250",
                    126: "200x600",
                    144: "980x600",
                    145: "980x150",
                    152: "1000x250",
                    156: "640x320",
                    159: "320x250",
                    179: "250x600",
                    195: "600x300",
                    198: "640x360",
                    199: "640x200",
                    213: "1030x590",
                    214: "980x360",
                    221: "1x1",
                    229: "320x180",
                    230: "2000x1400",
                    232: "580x400",
                    234: "6x6",
                    251: "2x2",
                    256: "480x820",
                    257: "400x600",
                    258: "500x200",
                    259: "998x200",
                    261: "480x480",
                    264: "970x1000",
                    265: "1920x1080",
                    274: "1800x200",
                    278: "320x500",
                    282: "320x400",
                    288: "640x380",
                    484: "720x1280",
                    524: "1x2",
                    548: "500x1000",
                    550: "980x480",
                    552: "300x200",
                    558: "640x640",
                    562: "300x431",
                    564: "320x431",
                    566: "320x300",
                    568: "300x150",
                    570: "300x125",
                    572: "250x350",
                    574: "620x891",
                    576: "610x877",
                    578: "980x552",
                    580: "505x656",
                    622: "192x160",
                    632: "1200x450",
                    634: "340x450",
                    680: "970x570",
                    682: "300x240",
                    684: "970x550",
                    686: "300x210",
                    688: "300x220",
                    690: "970x170"
                };
                (0, p._each)(y, ((e, t) => y[e] = t));
                const h = (0, n.A)({
                        request(e, t, r, n) {
                            const {
                                bidRequests: o
                            } = n, s = e(t, r, n);
                            var d;
                            s.cur = ["USD"], s.test = a.$W.getConfig("debug") ? 1 : 0, (0, u.J)(s, "ext.prebid.cache", {
                                vastxml: {
                                    returnCreative: !0 === x.returnVast
                                }
                            }), (0, u.J)(s, "ext.prebid.bidders", {
                                rubicon: {
                                    integration: x.int_type || "pbjs"
                                }
                            }), (0, u.J)(s, "ext.prebid.targeting.pricegranularity", {
                                ranges: {
                                    low: [{
                                        max: 5,
                                        increment: .5
                                    }],
                                    medium: [{
                                        max: 20,
                                        increment: .1
                                    }],
                                    high: [{
                                        max: 20,
                                        increment: .01
                                    }],
                                    auto: [{
                                        max: 5,
                                        increment: .05
                                    }, {
                                        min: 5,
                                        max: 10,
                                        increment: .1
                                    }, {
                                        min: 10,
                                        max: 20,
                                        increment: .5
                                    }],
                                    dense: [{
                                        max: 3,
                                        increment: .01
                                    }, {
                                        min: 3,
                                        max: 8,
                                        increment: .05
                                    }, {
                                        min: 8,
                                        max: 20,
                                        increment: .5
                                    }],
                                    custom: (d = a.$W).getConfig("customPriceBucket") && d.getConfig("customPriceBucket").buckets
                                }[d.getConfig("priceGranularity")]
                            });
                            let c = (0, i.m)().installedModules;
                            !c || c.length && -1 === c.indexOf("rubiconAnalyticsAdapter") || (0, u.J)(s, "ext.prebid.analytics", {
                                    rubicon: {
                                        "client-analytics": !0
                                    }
                                }),
                                function(e, t, r) {
                                    let i = {};
                                    const n = (0, m.D)(r, ...t.map((e => e.params.keywords)));
                                    t.forEach((t => {
                                        const r = {
                                                user: {
                                                    ext: {
                                                        data: { ...t.params.visitor
                                                        }
                                                    }
                                                },
                                                site: {
                                                    ext: {
                                                        data: { ...t.params.inventory
                                                        }
                                                    }
                                                }
                                            },
                                            n = e.imp.find((e => e.ext ? .prebid ? .bidder ? .rubicon ? .video ? .language));
                                        n && (r.site.content = {
                                            language: n.ext ? .prebid ? .bidder ? .rubicon ? .video ? .language
                                        }), i = (0, p.mergeDeep)(i, t.ortb2 || {}, r);
                                        const o = a.$W.getConfig("user.id");
                                        i.user.id = i.user.id || o
                                    })), (0, p.mergeDeep)(e, i), n && n.length && (0, u.J)(e, "site.keywords", n.join(","));
                                    delete e ? .ext ? .prebid ? .storedrequest
                                }(s, o, r.ortb2), delete s ? .ext ? .prebid ? .storedrequest, !0 === x.disableFloors && delete s.ext.prebid.floors;
                            return o.filter((e => "object" == typeof e.floorData)).length > 0 && (s.ext.prebid.floors = {
                                enabled: !1
                            }), s
                        },
                        imp(e, t, r) {
                            const i = S(t);
                            if (i.includes(d.D4) && 1 == i.length) return;
                            const n = e(t, r);
                            return n.id = t.adUnitCode, delete n.banner, "atf" === t.params.position && n.video && (n.video.pos = 1), "btf" === t.params.position && n.video && (n.video.pos = 3), delete n.ext ? .prebid ? .storedrequest, !0 === t.params.bidonmultiformat && i.length > 1 && (0, u.J)(n, "ext.prebid.bidder.rubicon.formats", i),
                                function(e, t) {
                                    "USD" != t.bidfloorcur && (delete t.bidfloor, delete t.bidfloorcur);
                                    if (!t.bidfloor) {
                                        let r = parseFloat((0, l.A)(e, "params.floor"));
                                        isNaN(r) || (t.bidfloor = r, t.bidfloorcur = "USD")
                                    }
                                }(t, n), n.id = f[n.id] ? n.id + f[n.id]++ : (f[n.id] = 2, n.id), n
                        },
                        bidResponse(e, t, r) {
                            const i = e(t, r);
                            i.meta.mediaType = (0, l.A)(t, "ext.prebid.type");
                            const {
                                bidRequest: n
                            } = r;
                            let [o, s] = "outstream" === n.mediaTypes.video ? .context ? j(n, d.G_) : [void 0, void 0];
                            return i.width = t.w || o || i.playerWidth || 0, i.height = t.h || s || i.playerHeight || 0, i.mediaType === d.G_ && "outstream" === n.mediaTypes.video.context && (i.renderer = function(e) {
                                const t = c.A4.install({
                                    id: e.adId,
                                    url: x.rendererUrl || g,
                                    config: x.rendererConfig || {},
                                    loaded: !1,
                                    adUnitCode: e.adUnitCode
                                });
                                try {
                                    t.setRender(A)
                                } catch (e) {
                                    (0, p.logWarn)("Prebid Error calling setRender on renderer", e)
                                }
                                return t
                            }(i)), (0, l.A)(t, "ext.bidder.rp.advid") && (0, u.J)(i, "meta.advertiserId", t.ext.bidder.rp.advid), i
                        },
                        context: {
                            netRevenue: !1 !== x.netRevenue,
                            ttl: 360
                        },
                        processors: o.m
                    }),
                    _ = {
                        code: "rubicon",
                        gvlid: 52,
                        supportedMediaTypes: [d.D4, d.G_, d.s6],
                        isBidRequestValid: function(e) {
                            let t = !0;
                            if ("object" != typeof e.params) return !1;
                            for (let t = 0, r = ["accountId", "siteId", "zoneId"]; t < r.length; t++)
                                if (e.params[r[t]] = parseInt(e.params[r[t]]), isNaN(e.params[r[t]])) return (0, p.logError)("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                            let r = S(e, !0);
                            if (!r.length) return !1;
                            r.includes(d.G_) && (t = function(e) {
                                let t = !0,
                                    r = Object.prototype.toString.call([]),
                                    i = Object.prototype.toString.call(0);
                                var n = {
                                    mimes: r,
                                    protocols: r,
                                    linearity: i
                                };
                                return Object.keys(n).forEach((function(r) {
                                    Object.prototype.toString.call((0, l.A)(e, "mediaTypes.video." + r)) !== n[r] && (t = !1, (0, p.logError)("Rubicon: mediaTypes.video." + r + " is required and must be of type: " + n[r]))
                                })), t
                            }(e));
                            const i = [d.D4, d.s6].filter((e => r.includes(e))).length > 0;
                            return i ? t && i : t
                        },
                        buildRequests: function(e, t) {
                            let r, i = [],
                                n = [];
                            if (r = e.filter((e => {
                                    const t = S(e) || [],
                                        {
                                            length: r
                                        } = t,
                                        {
                                            bidonmultiformat: i,
                                            video: n
                                        } = e.params || {};
                                    return 1 === r && (t.includes(d.G_) || t.includes(d.s6)) || 2 === r && !t.includes(d.D4) || n && t.includes(d.G_) || i && (t.includes(d.G_) || t.includes(d.s6))
                                })), r && r.length) {
                                const e = h.toORTB({
                                    bidRequests: r,
                                    bidderRequest: t
                                });
                                R(), n.push({
                                    method: "POST",
                                    url: `https://${x.videoHost||"prebid-server"}.rubiconproject.com/openrtb2/auction`,
                                    data: e,
                                    bidRequest: r
                                })
                            }
                            const o = e.filter((e => {
                                const t = S(e) || [],
                                    {
                                        bidonmultiformat: r,
                                        video: i
                                    } = e.params || {};
                                return t.includes(d.D4) && (1 === t.length || r || !r && !i || !r && i && !t.includes(d.G_))
                            }));
                            if (!0 !== x.singleRequest) i = n.concat(o.map((e => {
                                const r = _.createSlotParams(e, t);
                                return {
                                    method: "GET",
                                    url: `https://${x.bannerHost||"fastlane"}.rubiconproject.com/a/api/fastlane.json`,
                                    data: _.getOrderedParams(r).reduce(((e, t) => {
                                        const i = r[t];
                                        return (0, p.isStr)(i) && "" !== i || (0, p.isNumber)(i) ? `${e}${I(t,i)}&` : e
                                    }), "") + `slots=1&rand=${Math.random()}`,
                                    bidRequest: e
                                }
                            })));
                            else {
                                const e = o.reduce(((e, t) => ((e[t.params.siteId] = e[t.params.siteId] || []).push(t), e)), {}),
                                    r = 10;
                                i = n.concat(Object.keys(e).reduce(((i, n) => {
                                    var o, s;
                                    return (o = e[n], s = r, o.map(((e, t) => t % s == 0 ? o.slice(t, t + s) : null)).filter((e => e))).forEach((e => {
                                        const r = _.combineSlotUrlParams(e.map((e => _.createSlotParams(e, t))));
                                        i.push({
                                            method: "GET",
                                            url: `https://${x.bannerHost||"fastlane"}.rubiconproject.com/a/api/fastlane.json`,
                                            data: _.getOrderedParams(r).reduce(((e, t) => {
                                                const i = r[t];
                                                return (0, p.isStr)(i) && "" !== i || (0, p.isNumber)(i) ? `${e}${I(t,i)}&` : e
                                            }), "") + `slots=${e.length}&rand=${Math.random()}`,
                                            bidRequest: e
                                        })
                                    })), i
                                }), []))
                            }
                            return i
                        },
                        getOrderedParams: function(e) {
                            const t = /^tg_v/,
                                r = /^tg_i/,
                                i = /^eid_|^tpid_/,
                                n = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "gpp", "gpp_sid", "rp_schain"].concat(Object.keys(e).filter((e => i.test(e)))).concat(["x_liverampidl", "ppuid", "rf", "p_geo.latitude", "p_geo.longitude", "kw"]).concat(Object.keys(e).filter((e => t.test(e)))).concat(Object.keys(e).filter((e => r.test(e)))).concat(["tk_flint", "x_source.tid", "l_pb_bid_id", "p_screen_res", "o_ae", "o_cdep", "rp_floor", "rp_secure", "tk_user_key"]);
                            return n.concat(Object.keys(e).filter((e => -1 === n.indexOf(e))))
                        },
                        combineSlotUrlParams: function(e) {
                            if (1 === e.length) return e[0];
                            const t = e.reduce((function(t, r, i) {
                                    return Object.keys(r).forEach((function(n) {
                                        t.hasOwnProperty(n) || (t[n] = new Array(e.length)), t[n].splice(i, 1, r[n])
                                    })), t
                                }), {}),
                                r = new RegExp("^([^;]*)(;\\1)+$");
                            return Object.keys(t).forEach((function(e) {
                                const i = t[e].join(";"),
                                    n = i.match(r);
                                t[e] = n ? n[1] : i
                            })), t
                        },
                        createSlotParams: function(e, t) {
                            e.startTime = (new Date).getTime();
                            const r = e.params,
                                i = j(e, "banner"),
                                [n, o] = r.latLong || [],
                                s = {
                                    account_id: r.accountId,
                                    site_id: r.siteId,
                                    zone_id: r.zoneId,
                                    size_id: i[0],
                                    alt_size_ids: i.slice(1).join(",") || void 0,
                                    rp_floor: (r.floor = parseFloat(r.floor)) >= .01 ? r.floor : void 0,
                                    rp_secure: "1",
                                    tk_flint: `${x.int_type||"pbjs_lite"}_v9.24.0`,
                                    "x_source.tid": t.ortb2 ? .source ? .tid,
                                    "x_imp.ext.tid": e.ortb2Imp ? .ext ? .tid,
                                    l_pb_bid_id: e.bidId,
                                    o_cdep: e.ortb2 ? .device ? .ext ? .cdep,
                                    ip: e.ortb2 ? .device ? .ip,
                                    ipv6: e.ortb2 ? .device ? .ipv6,
                                    p_screen_res: [window.screen.width, window.screen.height].join("x"),
                                    tk_user_key: r.userId,
                                    "p_geo.latitude": isNaN(parseFloat(n)) ? void 0 : parseFloat(n).toFixed(4),
                                    "p_geo.longitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                                    "tg_fl.eid": e.code,
                                    rf: v(e, t)
                                };
                            if ("function" == typeof e.getFloor && !x.disableFloors) {
                                let t;
                                try {
                                    t = e.getFloor({
                                        currency: "USD",
                                        mediaType: "banner",
                                        size: "*"
                                    })
                                } catch (e) {
                                    (0, p.logError)("Rubicon: getFloor threw an error: ", e)
                                }
                                s.rp_hard_floor = (0, p.isPlainObject)(t) && "USD" === t.currency && !isNaN(parseInt(t.floor)) ? t.floor : void 0
                            }!0 === r.bidonmultiformat && (0, l.A)(e, "mediaTypes") && Object.keys(e.mediaTypes).length > 1 && (s.p_formats = Object.keys(e.mediaTypes).join(","));
                            let c = {
                                1: "atf",
                                3: "btf"
                            }[(0, l.A)(e, "mediaTypes.banner.pos")] || "";
                            s.p_pos = "atf" === r.position || "btf" === r.position ? r.position : c;
                            const u = a.$W.getConfig("user.id");
                            return u && (s.ppuid = u), e ? .ortb2Imp ? .ext ? .ae && (s.o_ae = 1), "number" == typeof e ? .ortb2 ? .site ? .mobile && (s["p_site.mobile"] = e.ortb2.site.mobile),
                                function(e, t) {
                                    if (!1 === x.readTopics) return;
                                    let r = [1, 2, 5, 6, 7, 507].concat(x.sendSiteSegtax ? .map((e => Number(e))) || []),
                                        i = [4, 508].concat(x.sendUserSegtax ? .map((e => Number(e))) || []),
                                        n = e.ortb2 ? .user ? .data || [],
                                        o = e.ortb2 ? .site ? .content ? .data || [];
                                    n.forEach($(t, "v", i)), o.forEach($(t, "i", r))
                                }(t, s), e ? .ortb2 ? .user ? .ext ? .eids && e.ortb2.user.ext.eids.forEach((e => {
                                    let {
                                        source: t,
                                        uids: r = [],
                                        inserter: i,
                                        matcher: n,
                                        mm: o,
                                        ext: a = {}
                                    } = e;
                                    try {
                                        const e = r[0];
                                        if (!e) return;
                                        const a = e => [e.id, e.atype || "", "", i || "", n || "", o || "", e ? .ext ? .rtipartner || ""].join("^"),
                                            d = a(e);
                                        if (s[`eid_${t}`] = d, !s.ppuid) {
                                            const e = r.find((e => "ppuid" === e.ext ? .stype));
                                            e ? .id && (s.ppuid = e.id)
                                        }
                                    } catch (e) {
                                        (0, p.logWarn)("Rubicon: error reading eid:", {
                                            source: t,
                                            uids: r
                                        }, e)
                                    }
                                })), t.gdprConsent && ("boolean" == typeof t.gdprConsent.gdprApplies && (s.gdpr = Number(t.gdprConsent.gdprApplies)), s.gdpr_consent = t.gdprConsent.consentString), t.uspConsent && (s.us_privacy = encodeURIComponent(t.uspConsent)), t.gppConsent ? .gppString && (s.gpp = t.gppConsent.gppString, s.gpp_sid = t.gppConsent ? .applicableSections ? .toString()), s.rp_maxbids = t.bidLimit || 1,
                                function(e, t, r) {
                                    const i = {
                                        user: {
                                            ext: {
                                                data: { ...e.params.visitor
                                                }
                                            }
                                        },
                                        site: {
                                            ext: {
                                                data: { ...e.params.inventory
                                                }
                                            }
                                        }
                                    };
                                    e.params.keywords && (i.site.keywords = (0, p.isArray)(e.params.keywords) ? e.params.keywords.join(",") : e.params.keywords);
                                    let n = (0, p.mergeDeep)({}, e.ortb2 || {}, i),
                                        o = (0, l.A)(e.ortb2Imp, "ext") || {},
                                        s = (0, l.A)(e.ortb2Imp, "ext.data") || {};
                                    const a = (0, l.A)(e, "ortb2Imp.ext.gpid"),
                                        c = (0, l.A)(n, "regs.ext.dsa"),
                                        u = {
                                            user: [4],
                                            site: [1, 2, 5, 6]
                                        },
                                        m = {
                                            user: "tg_v.",
                                            site: "tg_i.",
                                            adserver: "tg_i.dfp_ad_unit_code",
                                            pbadslot: "tg_i.pbadslot",
                                            keywords: "kw"
                                        },
                                        b = function(e, t, r) {
                                            return "data" === t && Array.isArray(e) ? e.filter((e => e.segment && (0, l.A)(e, "ext.segtax") && u[r] && -1 !== u[r].indexOf((0, l.A)(e, "ext.segtax")))).map((e => {
                                                let t = e.segment.filter((e => e.id)).reduce(((e, t) => (e.push(t.id), e)), []);
                                                if (t.length > 0) return t.toString()
                                            })).toString() : ("object" != typeof e || Array.isArray(e)) && void 0 !== e ? Array.isArray(e) ? e.filter((e => {
                                                if ("object" != typeof e && void 0 !== e) return e.toString();
                                                (0, p.logWarn)("Rubicon: Filtered value: ", e, "for key", t, ": Expected value to be string, integer, or an array of strings/ints")
                                            })).toString() : e.toString() : void 0
                                        },
                                        g = function(e, t, i) {
                                            let n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                                                o = b(e, i, t),
                                                s = m[i] && n ? `${m[i]}` : "data" === i ? `${m[t]}iab` : `${m[t]}${i}`;
                                            r[s] = r[s] ? r[s].concat(",", o) : o
                                        };
                                    if (t === d.D4) {
                                        ["site", "user"].forEach((e => {
                                            Object.keys(n[e]).forEach((t => {
                                                "site" === e && "content" === t && n[e][t].data ? g(n[e][t].data, e, "data") : "ext" !== t ? g(n[e][t], e, t) : n[e][t].data && Object.keys(n[e].ext.data).forEach((t => {
                                                    g(n[e].ext.data[t], e, t, !1)
                                                }))
                                            }))
                                        })), Object.keys(s).forEach((e => {
                                            "adserver" !== e ? g(s[e], "site", e) : "gam" === s[e].name && g(s[e].adslot, name, e)
                                        })), a && (r.p_gpid = a), c && Object.keys(c).length && (0, p.pick)(c, ["dsainfo", e => r.dsainfo = e, "dsarequired", e => r.dsarequired = e, "pubrender", e => r.dsapubrender = e, "datatopub", e => r.dsadatatopubs = e, "transparency", e => {
                                            Array.isArray(e) && e.length && (r.dsatransparency = e.reduce(((e, t) => {
                                                const r = t.domain || "";
                                                if (!r) return e;
                                                const i = t.dsaparams || t.params;
                                                return Array.isArray(i) && 0 !== i.length ? (e && (e += "~~"), e + `${r}~${i.join("_")}`) : e
                                            }), ""))
                                        }]), r["tg_i.pbadslot"] && delete r["tg_i.dfp_ad_unit_code"];
                                        const e = (0, l.A)(n, "device.sua");
                                        e && !1 !== x.chEnabled && (0, p.pick)(e, ["architecture", e => r.m_ch_arch = e, "bitness", e => r.m_ch_bitness = e, "browsers", e => {
                                            if (!Array.isArray(e)) return;
                                            const [t, i] = e.reduce(((e, t) => (e[0].push(`"${t?.brand}"|v="${t?.version?.[0]}"`), e[1].push(`"${t?.brand}"|v="${t?.version?.join?.(".")}"`), e)), [
                                                [],
                                                []
                                            ]);
                                            r.m_ch_ua = t ? .join ? .(","), r.m_ch_full_ver = i ? .join ? .(",")
                                        }, "mobile", e => r.m_ch_mobile = `?${e}`, "model", e => r.m_ch_model = e, "platform", e => {
                                            r.m_ch_platform = e ? .brand, r.m_ch_platform_ver = e ? .version ? .join ? .(".")
                                        }])
                                    } else Object.keys(o).length && (0, p.mergeDeep)(r.imp[0].ext, o), a && (r.imp[0].ext.gpid = a), (0, p.mergeDeep)(r, n)
                                }(e, d.D4, s), !0 === a.$W.getConfig("coppa") && (s.coppa = 1), e.schain && C(e.schain) && (s.rp_schain = _.serializeSupplyChain(e.schain)), s
                        },
                        serializeSupplyChain: function(e) {
                            if (!C(e)) return "";
                            const {
                                ver: t,
                                complete: r,
                                nodes: i
                            } = e;
                            return `${t},${r}!${_.serializeSupplyChainNodes(i)}`
                        },
                        serializeSupplyChainNodes: function(e) {
                            const t = ["asi", "sid", "hp", "rid", "name", "domain"];
                            return e.map((e => t.map((t => encodeURIComponent(e[t] || ""))).join(","))).join("!")
                        },
                        interpretResponse: function(e, t) {
                            e = e.body;
                            const {
                                data: r
                            } = t;
                            if (!e || "object" != typeof e) return [];
                            if (e.seatbid) {
                                const t = (0, l.A)(e, "ext.errors.rubicon");
                                Array.isArray(t) && t.length > 0 && (0, p.logWarn)("Rubicon: Error in video response");
                                return h.fromORTB({
                                    request: r,
                                    response: e
                                }).bids
                            }
                            let i, n = e.ads,
                                o = 0;
                            const {
                                bidRequest: s
                            } = t;
                            if ("object" == typeof s && !Array.isArray(s) && S(s).includes(d.G_) && "object" == typeof n && (n = n[s.adUnitCode]), !Array.isArray(n) || n.length < 1) return [];
                            let a = n.reduce(((t, r, n) => {
                                    if (r.impression_id && i === r.impression_id ? o++ : i = r.impression_id, "ok" !== r.status) return t;
                                    const a = Array.isArray(s) ? s[n - o] : s;
                                    if (a && "object" == typeof a) {
                                        let e = {
                                            requestId: a.bidId,
                                            currency: "USD",
                                            creativeId: r.creative_id || `${r.network||""}-${r.advertiser||""}`,
                                            cpm: r.cpm || 0,
                                            dealId: r.deal,
                                            ttl: 360,
                                            netRevenue: !1 !== x.netRevenue,
                                            rubicon: {
                                                advertiserId: r.advertiser,
                                                networkId: r.network
                                            },
                                            meta: {
                                                advertiserId: r.advertiser,
                                                networkId: r.network,
                                                mediaType: d.D4
                                            }
                                        };
                                        r.creative_type && (e.mediaType = r.creative_type), r.dsa && Object.keys(r.dsa).length && (e.meta.dsa = r.dsa), r.adomain && (e.meta.advertiserDomains = Array.isArray(r.adomain) ? r.adomain : [r.adomain]), r.emulated_format && (e.meta.mediaType = r.emulated_format), r.creative_type === d.G_ ? (e.width = a.params.video.playerWidth, e.height = a.params.video.playerHeight, e.vastUrl = r.creative_depot_url, e.impression_id = r.impression_id, e.videoCacheKey = r.impression_id) : (e.ad = (c = r.script, `<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='${r.impression_id}'>\n<script type='text/javascript'>${c}<\/script>\n</div>\n</body>\n</html>`), [e.width, e.height] = y[r.size_id].split("x").map((e => Number(e)))), e.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(((e, t) => (e[t.key] = t.values[0], e)), {
                                            rpfl_elemid: a.adUnitCode
                                        }), t.push(e)
                                    } else(0, p.logError)(`Rubicon: bidRequest undefined at index position:${n}`, s, e);
                                    var c;
                                    return t
                                }), []).sort(((e, t) => (t.cpm || 0) - (e.cpm || 0))),
                                c = e.component_auction_config ? .map((e => ({
                                    config: e,
                                    bidId: e.bidId
                                })));
                            return c ? {
                                bids: a,
                                paapi: c
                            } : a
                        },
                        getUserSyncs: function(e, t, r, i, n) {
                            if (!w && e.iframeEnabled) {
                                let e = (0, b.d)(r, i, n);
                                return e = Object.keys(e).length ? `?${(0,p.formatQS)(e)}` : "", w = !0, {
                                    type: "iframe",
                                    url: `https://${x.syncHost||"eus"}.rubiconproject.com/usync.html` + e
                                }
                            }
                        }
                    };

                function v(e, t) {
                    let r;
                    return r = e.params.referrer ? e.params.referrer : t.refererInfo.page, e.params.secure ? r.replace(/^http:/i, "https:") : r
                }

                function A(e) {
                    const t = document.getElementById(e.adUnitCode);
                    ! function(e) {
                        const t = e.querySelector("div[id^='google_ads']");
                        t && t.style.setProperty("display", "none")
                    }(t),
                    function(e) {
                        const t = e.querySelector("script[id^='sas_script']"),
                            r = t && t.nextSibling;
                        r && "iframe" === r.localName && r.style.setProperty("display", "none")
                    }(t);
                    const r = { ...{
                            align: "center",
                            position: "append",
                            closeButton: !1,
                            label: void 0,
                            collapse: !0
                        },
                        ...e.renderer.getConfig()
                    };
                    e.renderer.push((() => {
                        window.MagniteApex.renderAd({
                            width: e.width,
                            height: e.height,
                            vastUrl: e.vastUrl,
                            placement: {
                                attachTo: `#${e.adUnitCode}`,
                                align: r.align,
                                position: r.position
                            },
                            closeButton: r.closeButton,
                            label: r.label,
                            collapse: r.collapse
                        })
                    }))
                }

                function j(e, t) {
                    let r = e.params;
                    if (t === d.G_) {
                        let t = [];
                        return r.video && r.video.playerWidth && r.video.playerHeight ? t = [r.video.playerWidth, r.video.playerHeight] : Array.isArray((0, l.A)(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? t = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && e.sizes.length > 0 && Array.isArray(e.sizes[0]) && e.sizes[0].length > 1 && (t = e.sizes[0]), t
                    }
                    let i = [];
                    return Array.isArray(r.sizes) ? i = r.sizes : void 0 !== (0, l.A)(e, "mediaTypes.banner.sizes") ? i = k(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && e.sizes.length > 0 ? i = k(e.sizes) : (0, p.logWarn)("Rubicon: no sizes are setup or found"),
                        function(e) {
                            const t = [15, 2, 9];
                            return e.sort(((e, r) => {
                                const i = t.indexOf(e),
                                    n = t.indexOf(r);
                                return i > -1 || n > -1 ? -1 === i ? 1 : -1 === n ? -1 : i - n : e - r
                            }))
                        }(i)
                }

                function $(e, t, r) {
                    return i => {
                        const n = Number(i.ext ? .segtax);
                        r.includes(n) && (e[`tg_${t}.tax${n}`] = i.segment ? .map((e => e.id)).join(","))
                    }
                }

                function k(e) {
                    return (0, p.parseSizesInput)(e).reduce(((e, t) => {
                        let r = parseInt(y[t], 10);
                        return r && e.push(r), e
                    }), [])
                }

                function S(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = [];
                    if (function(e) {
                            let t = void 0 !== (0, l.A)(e, `mediaTypes.${d.G_}`),
                                r = void 0 !== (0, l.A)(e, `mediaTypes.${d.D4}`),
                                i = void 0 !== (0, l.A)(e, "params.bidonmultiformat"),
                                n = "object" != typeof(0, l.A)(e, "params.video");
                            return !(!t || !i) || (r && n && (t = !1), t && n && (0, u.J)(e, "params.video", {}), t)
                        }(e)) {
                        if (-1 === ["outstream", "instream"].indexOf((0, l.A)(e, `mediaTypes.${d.G_}.context`))) return t && (0, p.logError)("Rubicon: mediaTypes.video.context must be outstream or instream"), r;
                        if (j(e, d.G_).length < 2) return t && (0, p.logError)("Rubicon: could not determine the playerSize of the video"), r;
                        t && (0, p.logMessage)("Rubicon: making video request for adUnit", e.adUnitCode), r.push(d.G_)
                    }
                    if (void 0 !== (0, l.A)(e, `mediaTypes.${d.s6}`) && r.push(d.s6), void 0 !== (0, l.A)(e, `mediaTypes.${d.D4}`)) {
                        if (0 === j(e, d.D4).length) return t && (0, p.logError)("Rubicon: could not determine the sizes for banner request"), r;
                        t && (0, p.logMessage)("Rubicon: making banner request for adUnit", e.adUnitCode), r.push(d.D4)
                    }
                    return r
                }
                const R = () => f = {};

                function C(e) {
                    let t = !1;
                    const r = ["asi", "sid", "hp"];
                    return e.nodes ? (t = e.nodes.reduce(((e, t) => e ? r.every((e => t.hasOwnProperty(e))) : e), !0), t || (0, p.logError)("Rubicon: required schain params missing"), t) : t
                }

                function I(e, t) {
                    return "rp_schain" === e ? `rp_schain=${t}` : `${e}=${encodeURIComponent(t)}`
                }
                var w = !1;
                (0, s.a$)(_), (0, i.E)("rubiconBidAdapter")
            }
        },
        e => {
            e.O(0, [60802, 58498, 97247, 47618, 46550, 51085], (() => {
                return t = 99293, e(e.s = t);
                var t
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [30474], {
            47368: (e, t, r) => {
                var s = r(7873),
                    i = r(88910),
                    d = r(11445),
                    n = r(76568);
                var a = Object.assign((0, i.Ay)({
                    emptyUrl: "",
                    analyticsType: "endpoint"
                }), {
                    STR_BEACON_HOST: "https://b.sharethrough.com/butler?",
                    placementCodeSet: {},
                    track(e) {
                        let {
                            eventType: t,
                            args: r
                        } = e;
                        if ("bidRequested" === t && "sharethrough" === r.bidderCode)
                            for (var s = r.bids, i = Object.keys(s), d = 0; d < i.length; d++) this.placementCodeSet[s[i[d]].placementCode] = r.bids[i[d]];
                        "bidWon" === t && this.bidWon(r)
                    },
                    bidWon(e) {
                        const t = e.bidderCode;
                        if ("sharethrough" !== t && e.adUnitCode in this.placementCodeSet) {
                            let r = this.placementCodeSet[e.adUnitCode];
                            this.fireLoseBeacon(t, e.cpm, r.adserverRequestId, "headerBidLose")
                        }
                    },
                    fireLoseBeacon(e, t, r, s) {
                        let i = this.STR_BEACON_HOST;
                        i = (0, n.v)(i, "winnerBidderCode", e), i = (0, n.v)(i, "winnerCpm", t), i = (0, n.v)(i, "arid", r), i = (0, n.v)(i, "type", s), i = this.appendEnvFields(i), this.fireBeacon(i)
                    },
                    appendEnvFields: e => (e = (0, n.v)(e, "hbVersion", "9.24.0"), e = (0, n.v)(e, "strVersion", "0.1.0"), e = (0, n.v)(e, "hbSource", "prebid")),
                    fireBeacon(e) {
                        (new Image).src = e
                    }
                });
                d.Ay.registerAnalyticsAdapter({
                    adapter: a,
                    code: "sharethrough"
                });
                (0, s.E)("sharethroughAnalyticsAdapter")
            }
        },
        e => {
            e.O(0, [2630, 14577, 60802, 51085], (() => {
                return t = 47368, e(e.s = t);
                var t
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [90089], {
            75745: (e, t, r) => {
                var a = r(7873),
                    n = r(57377),
                    i = r(43272),
                    o = r(71371),
                    d = r(91069),
                    s = r(70433);
                const p = {
                        getProtocol: function() {
                            return window.location.protocol
                        }
                    },
                    l = {
                        code: "sharethrough",
                        supportedMediaTypes: [o.G_, o.D4],
                        gvlid: 80,
                        isBidRequestValid: e => !!e.params.pkey,
                        buildRequests: (e, t) => {
                            const r = t.timeout,
                                a = t.ortb2 || {},
                                n = p.getProtocol().indexOf("http") < 0 || p.getProtocol().indexOf("https") > -1,
                                o = {
                                    id: (0, d.generateUUID)(),
                                    at: 1,
                                    cur: ["USD"],
                                    tmax: r,
                                    site: {
                                        domain: (0, s.A)(t, "refererInfo.domain", window.location.hostname),
                                        page: (0, s.A)(t, "refererInfo.page", window.location.href),
                                        ref: (0, s.A)(t, "refererInfo.ref"),
                                        ...a.site
                                    },
                                    device: {
                                        ua: navigator.userAgent,
                                        language: navigator.language,
                                        js: 1,
                                        dnt: "1" === navigator.doNotTrack ? 1 : 0,
                                        h: window.screen.height,
                                        w: window.screen.width,
                                        ext: {}
                                    },
                                    regs: {
                                        coppa: !0 === i.$W.getConfig("coppa") ? 1 : 0,
                                        ext: {}
                                    },
                                    source: {
                                        tid: t.ortb2 ? .source ? .tid,
                                        ext: {
                                            version: "9.24.0",
                                            str: "4.3.0",
                                            schain: e[0].schain
                                        }
                                    },
                                    bcat: (0, s.A)(t.ortb2, "bcat") || e[0].params.bcat || [],
                                    badv: (0, s.A)(t.ortb2, "badv") || e[0].params.badv || [],
                                    test: 0
                                };
                            if (t.ortb2 ? .device ? .ext ? .cdep && (o.device.ext.cdep = t.ortb2.device.ext.cdep), t ? .ortb2 ? .device && (0, d.mergeDeep)(o.device, t.ortb2.device), o.user = u(a.user, {}), o.user.ext || (o.user.ext = {}), o.user.ext.eids = e[0].userIdAsEids || [], t.gdprConsent) {
                                const e = !0 === t.gdprConsent.gdprApplies;
                                o.regs.ext.gdpr = e ? 1 : 0, e && (o.user.ext.consent = t.gdprConsent.consentString)
                            }
                            t.uspConsent && (o.regs.ext.us_privacy = t.uspConsent), t ? .gppConsent ? .gppString ? (o.regs.gpp = t.gppConsent.gppString, o.regs.gpp_sid = t.gppConsent.applicableSections) : t ? .ortb2 ? .regs ? .gpp && (o.regs.ext.gpp = t.ortb2.regs.gpp, o.regs.ext.gpp_sid = t.ortb2.regs.gpp_sid), t ? .ortb2 ? .regs ? .ext ? .dsa && (o.regs.ext.dsa = t.ortb2.regs.ext.dsa);
                            return e.map((e => {
                                const r = {
                                        ext: {}
                                    },
                                    a = (0, s.A)(e, "ortb2Imp.ext.tid");
                                a && (r.ext.tid = a);
                                const i = (0, s.A)(e, "ortb2Imp.ext.gpid") || (0, s.A)(e, "ortb2Imp.ext.data.pbadslot");
                                i && (r.ext.gpid = i);
                                const o = (0, s.A)(e, "mediaTypes.video");
                                if (t.paapi ? .enabled && e.mediaTypes.banner && (0, d.mergeDeep)(r, {
                                        ext: {
                                            ae: 1
                                        }
                                    }), o) {
                                    let [e, t] = [640, 360];
                                    o.playerSize && o.playerSize[0] && o.playerSize[0][0] && o.playerSize[0][1] && ([e, t] = o.playerSize[0]);
                                    const a = (e, t, r) => {
                                        if (["api", "battr", "mimes", "playbackmethod", "protocols"].includes(e)) {
                                            if ((!Array.isArray(t[e]) || 0 === t[e].length) && t[e]) return void(0, d.logWarn)(`Sharethrough: Invalid video request property: "${e}" must be an array with at least 1 entry.  Value supplied: "${t[e]}".  This will not be added to the bid request.`)
                                        }
                                        t[e] && (r.video[e] = t[e])
                                    };
                                    r.video = {
                                        pos: u(o.pos, 0),
                                        topframe: (0, d.inIframe)() ? 0 : 1,
                                        w: e,
                                        h: t
                                    };
                                    ["api", "battr", "companionad", "companiontype", "delivery", "linearity", "maxduration", "mimes", "minduration", "placement", "playbackmethod", "plcmt", "protocols", "skip", "skipafter", "skipmin", "startdelay"].forEach((e => {
                                        a(e, o, r)
                                    }))
                                } else {
                                    r.banner = {
                                        pos: (0, s.A)(e, "mediaTypes.banner.pos", 0),
                                        topframe: (0, d.inIframe)() ? 0 : 1,
                                        format: e.sizes.map((e => ({
                                            w: +e[0],
                                            h: +e[1]
                                        })))
                                    };
                                    const t = (0, s.A)(e, "mediaTypes.banner.battr", null) || (0, s.A)(e, "ortb2Imp.banner.battr");
                                    t && (r.banner.battr = t)
                                }
                                return {
                                    id: e.bidId,
                                    tagid: String(e.params.pkey),
                                    secure: n ? 1 : 0,
                                    bidfloor: c(e),
                                    ...r
                                }
                            })).filter((e => !!e)).map((e => ({
                                method: "POST",
                                url: "https://btlr.sharethrough.com/universal/v1?supply_id=WYu2BXv1",
                                data: { ...o,
                                    imp: [e]
                                }
                            })))
                        },
                        interpretResponse: (e, t) => {
                            let {
                                body: r
                            } = e;
                            if (!r || !r.seatbid || 0 === r.seatbid.length || !r.seatbid[0].bid || 0 === r.seatbid[0].bid.length) return [];
                            const a = r.ext ? .auctionConfigs,
                                n = r.seatbid[0].bid.map((e => {
                                    const a = {
                                        requestId: e.impid,
                                        width: +e.w,
                                        height: +e.h,
                                        cpm: +e.price,
                                        creativeId: e.crid,
                                        dealId: e.dealid || null,
                                        mediaType: t.data.imp[0].video ? o.G_ : o.D4,
                                        currency: r.cur || "USD",
                                        netRevenue: !0,
                                        ttl: 360,
                                        ad: e.adm,
                                        nurl: e.nurl,
                                        meta: {
                                            advertiserDomains: e.adomain || [],
                                            networkId: e.ext ? .networkId || null,
                                            networkName: e.ext ? .networkName || null,
                                            agencyId: e.ext ? .agencyId || null,
                                            agencyName: e.ext ? .agencyName || null,
                                            advertiserId: e.ext ? .advertiserId || null,
                                            advertiserName: e.ext ? .advertiserName || null,
                                            brandId: e.ext ? .brandId || null,
                                            brandName: e.ext ? .brandName || null,
                                            demandSource: e.ext ? .demandSource || null,
                                            dchain: e.ext ? .dchain || null,
                                            primaryCatId: e.ext ? .primaryCatId || null,
                                            secondaryCatIds: e.ext ? .secondaryCatIds || null,
                                            mediaType: e.ext ? .mediaType || null
                                        }
                                    };
                                    return a.mediaType === o.G_ && (a.ttl = 3600, a.vastXml = e.adm), a
                                }));
                            return a ? {
                                bids: n,
                                paapi: r.ext ? .auctionConfigs || {}
                            } : n
                        },
                        getUserSyncs: (e, t) => e.pixelEnabled && void 0 !== (0, s.A)(t, "0.body.cookieSyncUrls") ? t[0].body.cookieSyncUrls.map((e => ({
                            type: "image",
                            url: e
                        }))) : [],
                        onTimeout: e => {},
                        onBidWon: e => {},
                        onSetTargeting: e => {}
                    };

                function c(e) {
                    let t = null;
                    if ("function" == typeof e.getFloor) {
                        const r = e.getFloor({
                            currency: "USD",
                            mediaType: e.mediaTypes && e.mediaTypes.video ? "video" : "banner",
                            size: e.sizes.map((e => ({
                                w: e[0],
                                h: e[1]
                            })))
                        });
                        (0, d.isPlainObject)(r) && "USD" === r.currency && !isNaN(parseFloat(r.floor)) && (t = parseFloat(r.floor))
                    }
                    return null !== t ? t : e.params.floor
                }

                function u(e, t) {
                    return null == e ? t : e
                }(0, n.a$)(l), (0, a.E)("sharethroughBidAdapter")
            }
        },
        e => {
            e.O(0, [60802, 51085], (() => {
                return t = 75745, e(e.s = t);
                var t
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [4085], {
            43297: (e, n, t) => {
                var r = t(7873),
                    o = t(91069),
                    u = t(70433),
                    s = t(43272),
                    p = t(11445),
                    i = t(16916),
                    l = t(75023),
                    c = t(78969),
                    a = t(45569),
                    d = t(2604),
                    f = t(95139),
                    g = t(76811);
                const h = {
                        purpose: {},
                        feature: {}
                    },
                    v = {
                        purpose: !1,
                        feature: "specialFeatureOptins"
                    },
                    m = {
                        storage: {
                            type: "purpose",
                            default: {
                                purpose: "storage",
                                enforcePurpose: !0,
                                enforceVendor: !0,
                                vendorExceptions: []
                            },
                            id: 1
                        },
                        basicAds: {
                            type: "purpose",
                            id: 2,
                            default: {
                                purpose: "basicAds",
                                enforcePurpose: !0,
                                enforceVendor: !0,
                                vendorExceptions: []
                            }
                        },
                        personalizedAds: {
                            type: "purpose",
                            id: 4
                        },
                        measurement: {
                            type: "purpose",
                            id: 7
                        },
                        transmitPreciseGeo: {
                            type: "feature",
                            id: 1
                        }
                    },
                    y = new Set,
                    B = new Set,
                    E = new Set,
                    k = new Set,
                    q = new Set,
                    A = new Set;
                let $ = !1,
                    b = !1;
                const C = [a.tW, a.fW, a.Tn, a.zu],
                    D = "TCF2",
                    w = [],
                    O = [2],
                    W = [2, 7, 9, 10];

                function P(e, n, t, r) {
                    const o = (0, u.A)(e, `vendorData.${n}`);
                    return !!o ? .consents ? .[t] || r && !!o ? .legitimateInterests ? .[t]
                }

                function S(e, n, t, r) {
                    let o;
                    if (!1 !== v[n]) o = !!(0, u.A)(e, `vendorData.${v[n]}.${t}`);
                    else {
                        const [n, u] = r === i.B1 ? ["publisher", W] : ["purpose", O];
                        o = P(e, n, t, u.includes(t))
                    }
                    return {
                        purpose: o,
                        vendor: P(e, "vendor", r, O.includes(t))
                    }
                }

                function T(e, n, t, r) {
                    const o = m[e.purpose];
                    if ((e.vendorExceptions || []).includes(t)) return !0;
                    const u = e.enforceVendor && !(r === i.B1 || (e.softVendorExceptions || []).includes(t)),
                        {
                            purpose: s,
                            vendor: p
                        } = S(n, o.type, o.id, r);
                    return (!e.enforcePurpose || s) && (!u || p)
                }

                function x(e, n) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => null;
                    return function(u) {
                        const p = i.mW.getConsentData(),
                            l = u[d.iK];
                        if (function(e, n, t) {
                                return null == e && i.mW.enabled ? ((0, o.logWarn)(`Attempting operation that requires purpose ${n} consent while consent data is not available${t?` (module: ${t})`:""}. Assuming no consent was given.`), !0) : e && e.gdprApplies
                            }(p, e, l)) {
                            const e = function(e, n, t) {
                                if (n) {
                                    const r = s.$W.getConfig("gvlMapping");
                                    if (r && r[n]) return r[n];
                                    if (e === a.tp) return i.B1; {
                                        let {
                                            gvlid: r,
                                            modules: u
                                        } = i.o2.get(n);
                                        if (null == r && Object.keys(u).length > 0)
                                            for (const t of C)
                                                if (u.hasOwnProperty(t)) {
                                                    r = u[t], t !== e && (0, o.logWarn)(`Multiple GVL IDs found for module '${n}'; using the ${t} module's ID (${r}) instead of the ${e}'s ID (${u[e]})`);
                                                    break
                                                }
                                        return null == r && t && (r = t()), r || null
                                    }
                                }
                                return null
                            }(u[d.Dk], l, r(u));
                            let c = !!n(p, l, e);
                            if (!c) return t && t.add(l), {
                                allow: c
                            }
                        }
                    }
                }

                function F(e) {
                    return x(e, ((n, t, r) => !!T(h.purpose[e], n, t, r)), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null)
                }

                function M(e) {
                    return function(n) {
                        if (n[d.Dk] !== a.tp) return e(n)
                    }
                }
                const V = (j = F(1, y), function(e) {
                    if (e[d.Dk] !== a.tp || b) return j(e)
                });
                var j;
                const I = F(1, y),
                    N = F(1, y),
                    z = M(F(2, B)),
                    G = F(7, E, (e => function(e, n) {
                        const t = p.Ay.getAnalyticsAdapter(e);
                        return (r => {
                            if ("function" != typeof r) return r;
                            try {
                                return r.call(t.adapter, n)
                            } catch (n) {
                                (0, o.logError)(`Error invoking ${e} adapter.gvlid()`, n)
                            }
                        })(t ? .adapter ? .gvlid)
                    }(e[d.iK], e[d.TQ]))),
                    K = F(4, k),
                    L = M((() => {
                        const e = x("2-10", (function(e, n, t) {
                                for (let r = 2; r <= 10; r++) {
                                    if (h.purpose[r] ? .vendorExceptions ? .includes(n)) return !0;
                                    const {
                                        purpose: o,
                                        vendor: u
                                    } = S(e, "purpose", r, t);
                                    if (o && (u || h.purpose[r] ? .softVendorExceptions ? .includes(n))) return !0
                                }
                                return !1
                            }), q),
                            n = F(4, q);
                        return function() {
                            return (h.purpose[4] ? .eidsRequireP4Consent ? n : e).apply(this, arguments)
                        }
                    })()),
                    R = x("Special Feature 1", ((e, n, t) => T(h.feature[1], e, n, t)), A);
                l.on(c.qY.AUCTION_END, (function() {
                    const e = function(e) {
                            return Array.from(e.keys()).filter((e => null != e))
                        },
                        n = {
                            storageBlocked: e(y),
                            biddersBlocked: e(B),
                            analyticsBlocked: e(E),
                            ufpdBlocked: e(k),
                            eidsBlocked: e(q),
                            geoBlocked: e(A)
                        };
                    l.emit(c.qY.TCF2_ENFORCEMENT, n), [y, B, E, k, q, A].forEach((e => e.clear()))
                })), s.$W.getConfig("consentManagement", (e => function(e) {
                    let n = (0, u.A)(e, "gdpr.rules");
                    n || (0, o.logWarn)("TCF2: enforcing P1 and P2 by default"), n = Object.fromEntries((n || []).map((e => [e.purpose, e]))), b = !!(0, u.A)(e, "strictStorageEnforcement"), Object.entries(m).forEach((e => {
                        let [t, r] = e;
                        h[r.type][r.id] = n[t] ? ? r.default
                    })), $ || (null != h.purpose[1] && ($ = !0, w.push((0, f.qB)(g.Ue, D, V)), w.push((0, f.qB)(g.Ml, D, I)), w.push((0, f.qB)(g.yl, D, N))), null != h.purpose[2] && w.push((0, f.qB)(g.uc, D, z)), null != h.purpose[4] && w.push((0, f.qB)(g.DL, D, K), (0, f.qB)(g.qX, D, K)), null != h.purpose[7] && w.push((0, f.qB)(g.mo, D, G)), null != h.feature[1] && w.push((0, f.qB)(g.hE, D, R)), w.push((0, f.qB)(g.hq, D, L)))
                }(e.consentManagement))), (0, r.E)("tcfControl")
            }
        },
        e => {
            e.O(0, [60802, 51085], (() => {
                return n = 43297, e(e.s = n);
                var n
            }));
            e.O()
        }
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
        [98282], {
            26504: (e, t, r) => {
                var n = r(7873),
                    i = r(70433),
                    o = r(91069),
                    a = r(71371),
                    s = r(57377),
                    p = r(43272),
                    d = r(12938),
                    l = r(76568);
                const u = "triplelift";
                let c = null,
                    m = null;
                const f = (0, d.vM)({
                        bidderCode: u
                    }),
                    g = {
                        gvlid: 28,
                        code: u,
                        supportedMediaTypes: [a.D4, a.G_],
                        isBidRequestValid: function(e) {
                            return void 0 !== e.params.inventoryCode
                        },
                        buildRequests: function(e, t) {
                            let r = "https://tlx.3lift.com/header/auction?",
                                n = function(e, t) {
                                    let r = {},
                                        {
                                            schain: n
                                        } = e[0];
                                    const a = function(e) {
                                        const t = {},
                                            r = {},
                                            n = {},
                                            i = e.ortb2 || {},
                                            a = function() {
                                                const e = f.getDataFromLocalStorage("opecloud_ctx");
                                                if (!e) return null;
                                                try {
                                                    return JSON.parse(e)
                                                } catch (e) {
                                                    return (0, o.logError)("Triplelift: error parsing JSON: ", e), null
                                                }
                                            }(),
                                            s = Object.assign({}, i.site),
                                            p = Object.assign({}, i.user);
                                        if (a) {
                                            p.data = p.data || [];
                                            try {
                                                p.data.push({
                                                    name: "www.1plusx.com",
                                                    ext: a
                                                })
                                            } catch (e) {
                                                (0, o.logError)("Triplelift: error adding 1plusX segments: ", e)
                                            }
                                        }
                                        x(r, s), x(n, p), (0, o.isEmpty)(r) || (t.context = r);
                                        (0, o.isEmpty)(n) || (t.user = n);
                                        return t
                                    }(t);
                                    r.imp = e.map((function(e, t) {
                                        let r = {
                                            id: t,
                                            tagid: e.params.inventoryCode,
                                            floor: h(e)
                                        };
                                        return b(e) && (r.video = function(e) {
                                            let t = { ...e.params.video,
                                                ...e.mediaTypes.video
                                            };
                                            try {
                                                t.w || (t.w = t.playerSize[0][0]), t.h || (t.h = t.playerSize[0][1])
                                            } catch (e) {
                                                (0, o.logWarn)("Video size not defined", e)
                                            }
                                            t.playbackmethod && Number.isInteger(t.playbackmethod) && (t.playbackmethod = Array.from(String(t.playbackmethod), Number));
                                            return delete t.playerSize, t
                                        }(e)), e.mediaTypes.banner && !y(e) && (r.banner = {
                                            format: _(e.sizes)
                                        }), (0, o.isEmpty)(e.ortb2Imp) || (r.fpd = function(e) {
                                            const t = {},
                                                r = {};
                                            x(r, e.ext), (0, o.isEmpty)(r) || (t.context = r);
                                            return t
                                        }(e.ortb2Imp), (0, o.isEmpty)(e.ortb2Imp.ext) || (r.ext = { ...e.ortb2Imp.ext
                                        })), r
                                    }));
                                    let s = [];
                                    e[0].userIdAsEids && (s = i.A(e[0], "userIdAsEids"), r.user = {
                                        ext: {
                                            eids: s
                                        }
                                    });
                                    let p = function(e, t) {
                                        let r = {};
                                        (0, o.isEmpty)(e) || (r.schain = { ...e
                                        });
                                        (0, o.isEmpty)(t) || (r.fpd = { ...t
                                        });
                                        return r
                                    }(n, a);
                                    (0, o.isEmpty)(p) || (r.ext = p);
                                    t ? .ortb2 ? .regs ? .gpp && (r.regs = Object.assign({}, t.ortb2.regs));
                                    t ? .ortb2 && (r.ext.ortb2 = Object.assign({}, t.ortb2));
                                    return r
                                }(e, t);
                            if (r = (0, l.v)(r, "lib", "prebid"), r = (0, l.v)(r, "v", "9.24.0"), t && t.refererInfo) {
                                let e = t.refererInfo.page;
                                r = (0, l.v)(r, "referrer", e)
                            }
                            return t && t.timeout && (r = (0, l.v)(r, "tmax", t.timeout)), t && t.gdprConsent && (c = void 0 === t.gdprConsent.gdprApplies || t.gdprConsent.gdprApplies, r = (0, l.v)(r, "gdpr", c.toString()), void 0 !== t.gdprConsent.consentString && (m = t.gdprConsent.consentString, r = (0, l.v)(r, "cmp_cs", m))), t && t.uspConsent && (r = (0, l.v)(r, "us_privacy", t.uspConsent)), t ? .paapi ? .enabled && (r = (0, l.v)(r, "fledge", t.paapi.enabled)), !0 === p.$W.getConfig("coppa") && (r = (0, l.v)(r, "coppa", !0)), r.lastIndexOf("&") === r.length - 1 && (r = r.substring(0, r.length - 1)), (0, o.logMessage)("tlCall request built: " + r), {
                                method: "POST",
                                url: r,
                                data: n,
                                bidderRequest: t
                            }
                        },
                        interpretResponse: function(e, t) {
                            let {
                                bidderRequest: r
                            } = t, n = e.body.bids || [];
                            const i = e.body.paapi || [];
                            if (n = n.map((e => function(e, t) {
                                    let r = {},
                                        n = t.width || 1,
                                        i = t.height || 1,
                                        o = t.deal_id || "",
                                        a = t.crid || "",
                                        s = e.bids[t.imp_id];
                                    0 != t.cpm && t.ad && (r = {
                                        requestId: s.bidId,
                                        cpm: t.cpm,
                                        width: n,
                                        height: i,
                                        netRevenue: !0,
                                        ad: t.ad,
                                        creativeId: a,
                                        dealId: o,
                                        currency: "USD",
                                        ttl: 300,
                                        tl_source: t.tl_source,
                                        meta: {}
                                    }, b(s) && "video" === t.media_type && (r.vastXml = t.ad, r.mediaType = "video", r.ttl = 3600), t.advertiser_name && (r.meta.advertiserName = t.advertiser_name), t.adomain && t.adomain.length && (r.meta.advertiserDomains = t.adomain), t.tl_source && "hdx" == t.tl_source && (b(s) && "video" === t.media_type ? r.meta.mediaType = "video" : r.meta.mediaType = "banner"), t.tl_source && "tlx" == t.tl_source && (r.meta.mediaType = "native"), a && (r.meta.networkId = a.slice(0, a.indexOf("_"))));
                                    return r
                                }(r, e))), i.length > 0) {
                                const e = i.map((e => ({
                                    bidId: r.bids[e.imp_id].bidId,
                                    config: e.auctionConfig
                                })));
                                return (0, o.logMessage)("Response with FLEDGE:", {
                                    bids: n,
                                    fledgeAuctionConfigs: e
                                }), {
                                    bids: n,
                                    paapi: e
                                }
                            }
                            return n
                        },
                        getUserSyncs: function(e, t, r, n, i) {
                            let o = function(e) {
                                if (!e) return;
                                if (e.iframeEnabled) return "iframe";
                                if (e.pixelEnabled) return "image"
                            }(e);
                            if (!o) return;
                            let a = "https://eb2.3lift.com/sync?";
                            return "image" === o && (a = (0, l.v)(a, "px", 1), a = (0, l.v)(a, "src", "prebid")), (null !== m || c) && (a = (0, l.v)(a, "gdpr", c), a = (0, l.v)(a, "cmp_cs", m)), n && (a = (0, l.v)(a, "us_privacy", n)), i && (i.gppString && (a = (0, l.v)(a, "gpp", i.gppString)), i.applicableSections && 0 !== i.applicableSections.length && (a = (0, l.v)(a, "gpp_sid", i.applicableSections.filter((e => Number.isInteger(e))).join(",")))), [{
                                type: o,
                                url: a
                            }]
                        }
                    };

                function b(e) {
                    return v(e) && (y(e) || function(e) {
                        return v(e) && "outstream" === e.mediaTypes.video.context.toLowerCase()
                    }(e))
                }

                function y(e) {
                    return v(e) && "instream" === e.mediaTypes.video.context.toLowerCase()
                }

                function v(e) {
                    return e.mediaTypes.video && e.mediaTypes.video.context
                }

                function h(e) {
                    let t = null;
                    if ("function" == typeof e.getFloor) try {
                        const r = e.getFloor({
                            currency: "USD",
                            mediaType: b(e) ? "video" : "banner",
                            size: "*"
                        });
                        o.isPlainObject(r) && "USD" === r.currency && !isNaN(parseFloat(r.floor)) && (t = parseFloat(r.floor))
                    } catch (e) {
                        (0, o.logError)("Triplelift: getFloor threw an error: ", e)
                    }
                    return null !== t ? t : e.params.floor
                }

                function x(e, t) {
                    (0, o.isEmpty)(t) || Object.keys(t).forEach((r => {
                        null != t[r] && (e[r] = t[r])
                    }))
                }

                function _(e) {
                    return e.filter(E).map((function(e) {
                        return {
                            w: e[0],
                            h: e[1]
                        }
                    }))
                }

                function E(e) {
                    return 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1]
                }(0, s.a$)(g), (0, n.E)("tripleliftBidAdapter")
            }
        },
        e => {
            e.O(0, [14577, 60802, 51085], (() => {
                return t = 26504, e(e.s = t);
                var t
            }));
            e.O()
        }
    ]);
})(), pbjs.processQueue();