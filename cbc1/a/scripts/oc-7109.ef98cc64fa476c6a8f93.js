! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "16133b9c-d608-4e68-92e8-571ac6656737", e._sentryDebugIdIdentifier = "sentry-dbid-16133b9c-d608-4e68-92e8-571ac6656737")
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
    [7109], {
        85065: (e, t, i) => {
            i.d(t, {
                BA: () => s,
                Ep: () => n,
                UK: () => o,
                aL: () => c,
                h6: () => a,
                od: () => r,
                p_: () => d,
                rl: () => l
            });
            var r = 5876,
                n = "Canada's home for news, sports, lifestyle, comedy, arts, kids, music, original series & more.",
                a = ["185669354938012", "48363581912", "980153248675210", "50566954493", "262275773829225", "630185150356988", "82184406949", "9021636963", "5823419603", "325135839870", "192209947577094", "234303596639900"].join(),
                o = ["contentpackage"],
                c = {
                    description: "",
                    "vf:container_id": "",
                    "twitter:card": "summary_large_image",
                    "twitter:site": "@cbc",
                    "twitter:title": "",
                    "twitter:description": "",
                    "twitter:image": "",
                    "twitter:player": "",
                    "twitter:player:width": "640",
                    "twitter:player:height": "360",
                    "google-site-verification": "pJy_QmRvDz2tr7X8eQ6Y1L3Se-8RWM_PpJX42Pr_fYo",
                    robots: ""
                },
                l = {
                    "vf:url": "",
                    "vf:container_id": "",
                    "vf:section": "",
                    "og:url": "",
                    "og:title": "",
                    "og:image": "",
                    "og:description": "",
                    "og:type": "website",
                    "fb:pages": a,
                    "og:locale": "en_US",
                    "og:site_name": "CBC",
                    "video:duration": "",
                    "video:release_date": ""
                },
                s = {
                    canonical: ""
                },
                d = {
                    jsonld: null
                }
        },
        13126: (e, t, i) => {
            i.d(t, {
                Y9: () => w,
                _O: () => g,
                b_: () => v,
                db: () => m,
                lK: () => h,
                sU: () => O,
                uL: () => f,
                vU: () => y
            });
            var r = i(4942),
                n = (i(2041), i(95566), i(2612), i(58109), i(68438), i(83464), i(19496), i(88101)),
                a = i(70787),
                o = i(85065),
                c = i(47452),
                l = i(8082);

            function s(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, r)
                }
                return i
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(i), !0).forEach((function(t) {
                        (0, r.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var u = Object.assign({}, o.BA, o.p_, o.aL, o.rl),
                p = Object.keys(u).reduce((function(e, t) {
                    return e[t] = "", e
                }), {}),
                f = function() {
                    return d({}, p)
                };

            function y() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return d(d({}, u), e)
            }
            var b = function(e, t) {
                    return e[t] = !0, e
                },
                h = Object.keys(o.aL).reduce(b, {}),
                v = Object.keys(o.rl).reduce(b, {}),
                w = Object.keys(o.BA).reduce(b, {});

            function g() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = d({
                        adOrder: "",
                        path: "",
                        baseSection: "",
                        baseNavSection: "",
                        subSection: "",
                        section: "",
                        sponsored: !1,
                        pageType: "",
                        ad_hierarchy: "",
                        contentId: "",
                        contentType: "",
                        title: "CBC.ca",
                        meta: y({}),
                        defaultHeadlineImage: "",
                        statusCode: c.h7
                    }, e);
                return t.themeClassNames || (t.themeClassNames = n.Le(t)), t
            }
            var m = function(e, t) {
                    var i, r = n.C2(e),
                        c = n.QJ(e),
                        s = c ? "story" : "index",
                        u = (0, a.vr)(o.od, e.section, n.WM(e), s, e.adOrder);
                    if (e = d(d({}, e), {}, {
                            pageType: r,
                            ad_hierarchy: u
                        }), c) return e;
                    if (r === l.sL.CUSTOM) {
                        var p = n.UL(e),
                            f = p && p.metadata.pageTitle || n.RK(e),
                            y = "CBC ".concat(e.baseSection, " ").concat(e.subSection, " - ").concat(o.Ep);
                        i = d(d({}, e.meta), {}, {
                            "og:title": f,
                            "og:image": p.image || "",
                            "og:description": p.metadata.pageDescription || y,
                            description: p.metadata.pageDescription || y
                        })
                    } else i = d(d({}, e.meta), {}, {
                        "og:title": t.title,
                        "twitter:title": t.title,
                        "og:image": e.defaultHeadlineImage,
                        "twitter:image": e.defaultHeadlineImage,
                        "og:description": t.description,
                        "twitter:description": t.description,
                        description: t.description
                    });
                    return d(d({}, e), {}, {
                        title: t.title,
                        meta: i
                    })
                },
                O = function(e, t, i, r) {
                    var a = n.oQ({
                            path: i,
                            baseNavSection: t
                        }),
                        o = "olympics.".concat(a, "nav");
                    return a ? r && o in r && r[o] ? "olympics-".concat(a) : "sports" : "sports/olympics" === i ? r["olympics.summernav"] ? "olympics-summer" : "sports" : "sports/paralympics" === i ? r["olympics.paralympicsnav"] ? "olympics-paralympics" : "sports" : t ? t.toLocaleLowerCase() : e
                }
        },
        47452: (e, t, i) => {
            i.d(t, {
                $1: () => o,
                $h: () => n,
                Bx: () => d,
                Ey: () => l,
                Iz: () => c,
                LK: () => s,
                h7: () => r,
                hl: () => f,
                jh: () => p,
                jp: () => y,
                k6: () => a
            });
            var r = 200,
                n = 400,
                a = 404,
                o = 422,
                c = 500,
                l = 504,
                s = 505,
                d = {
                    400: "Bad Request",
                    401: "Unauthorized",
                    402: "Payment Required",
                    403: "Forbidden",
                    404: "Not Found",
                    405: "Method Not Allowed",
                    406: "Not Acceptable",
                    407: "Proxy Authentication Required",
                    408: "Request Time-out",
                    409: "Conflict",
                    410: "Gone",
                    411: "Length Required",
                    412: "Precondition Failed",
                    413: "Request Entity Too Large",
                    414: "Request-URI Too Large",
                    415: "Unsupported Media Type",
                    416: "Requested Range Not Satisfiable",
                    417: "Expectation Failed",
                    418: "I'm a teapot",
                    422: "Unprocessable Entity",
                    423: "Locked",
                    424: "Failed Dependency",
                    425: "Unordered Collection",
                    426: "Upgrade Required",
                    428: "Precondition Required",
                    429: "Too Many Requests",
                    431: "Request Header Fields Too Large",
                    500: "Internal Server Error",
                    501: "Not Implemented",
                    502: "Bad Gateway",
                    503: "Service Unavailable",
                    504: "Gateway Time-out",
                    505: "HTTP Version not supported",
                    506: "Variant Also Negotiates",
                    507: "Insufficient Storage",
                    509: "Bandwidth Limit Exceeded",
                    510: "Not Extended",
                    511: "Network Authentication Required"
                },
                u = function(e) {
                    return e >= c && e <= s
                },
                p = function(e) {
                    return u(e) || function(e) {
                        return e >= n && e <= o
                    }(e)
                },
                f = function(e) {
                    return e === a ? "Sorry - we can't find that page" : u(e) ? "Sorry - we have a problem" : "Sorry - something went wrong"
                },
                y = function(e) {
                    return p(e) ? e : a
                }
        },
        27109: (e, t, i) => {
            i.r(t), i.d(t, {
                app_reset: () => u,
                default: () => p,
                set_app_state: () => d
            });
            i(58109), i(95566), i(68438), i(83464), i(19496);
            var r = i(4942),
                n = i(46183),
                a = i(13126);

            function o(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, r)
                }
                return i
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(i), !0).forEach((function(t) {
                        (0, r.Z)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }
            var l = (0, n.oM)({
                    name: "app",
                    initialState: (0, a._O)(),
                    reducers: {
                        set_app_state: function(e, t) {
                            return c(c({}, e), t.payload.app)
                        },
                        app_reset: function() {
                            return (0, a._O)()
                        }
                    }
                }),
                s = l.actions,
                d = s.set_app_state,
                u = s.app_reset;
            const p = l.reducer
        },
        70787: (e, t, i) => {
            i.d(t, {
                vr: () => o,
                aX: () => a,
                SN: () => l,
                EN: () => c
            });
            i(83464), i(95566), i(19496);
            var r = i(79532),
                n = i(97767),
                a = function(e) {
                    return "" === e ? [] : e.split(",")
                },
                o = function(e, t, i, r, n) {
                    var a = t.replace(/-/g, "");
                    if ("homepage" === t) return "/".concat(e, "/home");
                    if ("accessibility" === t) return "/".concat(e, "/none");
                    if (t.includes("/livestory")) return a = a.replace("/livestory", ""), "/".concat(e, "/").concat(a, "/").concat(r);
                    if (t.includes("player/play")) {
                        if ("string" === typeof n && "" !== n) {
                            var o = n;
                            return o = o.replace("sports/", "").replace("/olympics", "olympics/video").replace("/summer", "/sports").replace("/winter", "/sports"), "/".concat(e, "/").concat(o)
                        }
                        return i ? "/".concat(e, "/olympics/video") : "/".concat(e, "/").concat(a, "/").concat(r)
                    }
                    return "/".concat(e, "/").concat(t, "/").concat(r)
                },
                c = function() {
                    var e = !1;
                    if ("undefined" === typeof MutationObserver) return null;
                    var t = new MutationObserver((function(t) {
                            t.forEach((function(t) {
                                "class" === t.attributeName && (t.target.classList.contains("click-wp") ? (r.ZP.enableWallpaper(), r.ZP.viewportDimensionsHandler(1024), e = !0) : !0 === e && (r.ZP.disableWallpaper(), e = !1))
                            }))
                        })),
                        i = document.querySelector(".appContainer");
                    i && t && t.observe(i, {
                        attributes: !0
                    })
                },
                l = function(e) {
                    var t = n.SA[e];
                    return t && void 0 !== t.nativeAd && t.nativeAd.enabled
                }
        },
        79532: (e, t, i) => {
            i.d(t, {
                ln: () => h,
                ZP: () => _,
                WM: () => m,
                vL: () => O,
                Vc: () => v,
                RT: () => w,
                Pr: () => g,
                bO: () => k
            });
            var r = i(4942),
                n = i(15671),
                a = i(43144),
                o = (i(23744), i(84350), i(89891), i(35275), i(85095), i(61399), i(57273), i(50791), i(39752), i(20816), i(75152), i(28997), i(23433), i(54367), i(46900), i(69898), i(70468), i(79321), i(95763), i(26817), i(50155), i(51335), i(83234), i(92435), i(87201), i(23503), i(72891), i(21934), i(81466), i(40703), i(83464), i(95566), i(19496), i(52080)),
                c = 1300,
                l = 640,
                s = 1024,
                d = 50,
                u = 300,
                p = i(41718),
                f = i(74987),
                y = "SMALL",
                b = "MEDIUM",
                h = "viewportLarge",
                v = function(e) {
                    return "/meta/flexible" === e || "/meta/flexible/" === e ? "/homepage" : e.replace("/meta/flexible", "")
                },
                w = function(e) {
                    return "/meta/nine-preview" === e || "/meta/nine-preview/" === e ? "/homepage" : e.replace("/meta/nine-preview", "")
                },
                g = function(e) {
                    return e.replace("/meta/preview", "")
                },
                m = function(e) {
                    return 0 === e.indexOf("/meta/preview")
                },
                O = function(e) {
                    return 0 === e.indexOf("/meta/nine-preview")
                },
                k = function(e) {
                    return O(e) ? "nine" : m(e) ? "polopoly" : ""
                };
            const _ = new(function() {
                function e() {
                    (0, n.Z)(this, e), this.eventMap = [{
                        event: "scroll",
                        callback: this.onScrollHandler,
                        throttle: d
                    }, {
                        event: "resize",
                        callback: this.onResizeHandler,
                        throttle: u
                    }], this.viewport = h, this.mediaQueryObjects = new Set, this.stickyObjects = new Set, this.resizeObjects = new Set, this.wallpaperObjects = new Set, this.breakpointListeners = new Map, this.previousScrollY = 0, this.previousWindowWidth = 0
                }
                return (0, a.Z)(e, [{
                    key: "bindEvents",
                    value: function() {
                        var e = this;
                        this.eventMap.forEach((function(t) {
                            var i = (0, o.Z)(t.callback.bind(e), t.throttle);
                            window.addEventListener(t.event, i)
                        }))
                    }
                }, {
                    key: "bindMediaQueries",
                    value: function() {
                        var e = this;
                        if ((0, f.j)()) {
                            var t = new Map(Object.entries((0, r.Z)((0, r.Z)({}, b, window.matchMedia("(max-width: ".concat("60em", ")"))), y, window.matchMedia("(max-width: ".concat("40em", ")")))));
                            this.breakpointListeners = t, this.handleBreakpointChange(), t.forEach((function(t) {
                                var i;
                                null === t || void 0 === t || null === (i = t.addEventListener) || void 0 === i || i.call(t, "change", (function() {
                                    e.handleBreakpointChange()
                                }))
                            }))
                        }
                    }
                }, {
                    key: "handleBreakpointChange",
                    value: function() {
                        this.breakpointListeners.get(y).matches ? this.viewport = "viewportSmall" : this.breakpointListeners.get(b).matches ? this.viewport = "viewportMedium" : this.viewport = h, void 0 !== this.mediaQueryObjects && this.mediaQueryObjects.forEach(this.callMediaQueryCallback.bind(this))
                    }
                }, {
                    key: "callMediaQueryCallback",
                    value: function(e) {
                        void 0 !== e.callback && e.callback(this.viewport)
                    }
                }, {
                    key: "onScrollHandler",
                    value: function() {
                        try {
                            window.scrollY !== this.previousScrollY && this.stickyStateHandler()
                        } catch (e) {
                            p.default.error("(PageActions.onScrollHandler)", e)
                        }
                    }
                }, {
                    key: "onResizeHandler",
                    value: function() {
                        window.innerWidth !== this.previousWindowWidth && this.viewportDimensionsHandler()
                    }
                }, {
                    key: "registerMediaQueryObject",
                    value: function(e) {
                        this.mediaQueryObjects.add(e), this.callMediaQueryCallback(e)
                    }
                }, {
                    key: "unregisterMediaQueryObject",
                    value: function(e) {
                        this.mediaQueryObjects.delete(e)
                    }
                }, {
                    key: "registerResizeObject",
                    value: function(e) {
                        this.resizeObjects = this.resizeObjects.add(e)
                    }
                }, {
                    key: "unregisterResizeObject",
                    value: function(e) {
                        this.resizeObjects.delete(e)
                    }
                }, {
                    key: "registerWallpaper",
                    value: function(e) {
                        this.wallpaperObjects.add(e)
                    }
                }, {
                    key: "stickyStateHandler",
                    value: function() {
                        var e = this,
                            t = document.querySelector(".ad-risingstar"),
                            i = null !== t ? t.offsetHeight : 0;
                        this.stickyObjects.forEach((function(t) {
                            var r = "";
                            window.scrollY && t.previousScrollY > window.scrollY && window.scrollY > i ? r = "scrollUp" : window.scrollY && t.previousScrollY < window.scrollY && window.scrollY > i && (r = "scrollDown"), t.isSticky = !!r.trim(), t.previousScrollY = window.scrollY, e.previousScrollY = window.scrollY, "static" !== r && void 0 !== t.callback && t.callback(t.isSticky, r)
                        }))
                    }
                }, {
                    key: "enableWallpaper",
                    value: function() {
                        this.resizeObjects.forEach((function(e) {
                            e.wallpaperWidth = s
                        })), this.wallpaperObjects.forEach((function(e) {
                            void 0 !== e.callback && e.callback(!0)
                        }))
                    }
                }, {
                    key: "disableWallpaper",
                    value: function() {
                        this.resizeObjects.forEach((function(e) {
                            e.wallpaperWidth = 0
                        })), this.wallpaperObjects.forEach((function(e) {
                            void 0 !== e.callback && e.callback(!1)
                        }))
                    }
                }, {
                    key: "viewportDimensionsHandler",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = e > 0 ? e : window.innerWidth;
                        t !== this.previousWindowWidth && this.resizeObjects.forEach((function(e) {
                            void 0 !== e.callback && e.callback(t)
                        })), this.previousWindowWidth = window.innerWidth
                    }
                }, {
                    key: "updateBodyScrollState",
                    value: function(e) {
                        e ? document.body.classList.add("scrollFreeze") : document.body.classList.remove("scrollFreeze")
                    }
                }, {
                    key: "calculateHiddenItems",
                    value: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            n = 0,
                            a = i > 0 ? i : window.innerWidth;
                        if (!e || t && a <= l) return n;
                        var o = e.childNodes,
                            s = Math.min(a, e.offsetWidth, c);
                        if (o) {
                            var d = o.length - 1;
                            r > 0 && (d -= 1);
                            var u = r + o[d].offsetWidth;
                            Array.prototype.slice.call(e.childNodes, 0, d).forEach((function(e) {
                                u += e.offsetWidth, s <= u && n++
                            }))
                        }
                        return n
                    }
                }]), e
            }())
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-7109.ef98cc64fa476c6a8f93.js.map