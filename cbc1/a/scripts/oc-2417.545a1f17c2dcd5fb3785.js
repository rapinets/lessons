! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b2cfb323-b4ec-451c-bddc-20040887a703", e._sentryDebugIdIdentifier = "sentry-dbid-b2cfb323-b4ec-451c-bddc-20040887a703")
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
    [2417, 503, 9451], {
        22417: (e, t, n) => {
            n.d(t, {
                Z: () => _,
                M: () => g
            });
            n(83464), n(19496);
            var r = n(4942),
                o = (n(2041), n(95566), n(2612), n(58109), n(68438), n(35098)),
                a = n(92972),
                i = n(41718),
                u = n(89920),
                c = {
                    spa: !0,
                    pillar: "feed",
                    preventDefault: !0
                },
                s = "CBC.APP.SC.DTM",
                l = 3e3,
                d = 200,
                f = "Tracking limit reached";

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function y() {
                var e;
                e = window, s.split(".").filter((function(e) {
                    return e.length
                })).reduce((function(e, t) {
                    return e && e[t]
                }), e) || (window.CBC = window.CBC || {}, window.CBC.APP = window.CBC.APP || {}, window.CBC.APP.SC = window.CBC.APP.SC || {}, window.CBC.APP.SC.DTM = window.CBC.APP.SC.DTM || {})
            }

            function w(e) {
                y();
                var t = Date.now() + l;
                ! function n() {
                    try {
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = (0, u.a6)();
                            window.CBC.APP.SC.DTM.DATA = p(p(p({}, c), e), {}, {
                                trackingCounter: t
                            }), window.CBC.APP.SC.PageTracker.init()
                        }(e)
                    } catch (r) {
                        Date.now() < t ? setTimeout(n, d) : i.default.error("(fireAnalytics)", new Error(f))
                    }
                }()
            }

            function g() {
                y(), w(window.CBC.APP.SC.DTM.DATA)
            }
            var v = (0, n(99451).createUseFeatureFlagBySection)("page_analytics");

            function _(e) {
                var t = e.dtmData,
                    n = void 0 === t ? {} : t,
                    r = e.type,
                    a = v();
                return (0, o.useEffect)((function() {
                    (0, u.nw)(n, r) && (0, u.us)(n.url) && (! function() {
                        try {
                            window.CBC.APP.SC.UTIL.clearDataLayer()
                        } catch (e) {
                            i.default.error("(cleanDataLayer) Error trying to clean the data layer", e)
                        }
                    }(), w(p(p({}, n), a)))
                }), [n.url, n.title, n.contentarea, n.contenttype, a]), null
            }
            _.propTypes = {
                dtmData: a.object,
                isLanding: a.bool
            }
        },
        99451: (e, t, n) => {
            n.r(t), n.d(t, {
                createUseFeatureFlagBySection: () => a,
                useFeatureFlag: () => i
            });
            var r = n(31646),
                o = n(42820),
                a = function(e) {
                    var t = (0, r.f)(e);
                    return function() {
                        var e = (0, o.useSelector)((function(e) {
                                return e && e.app && e.app.section
                            })) || "",
                            n = (0, o.useSelector)(t);
                        return (0, r.V)(e, n)
                    }
                },
                i = function(e) {
                    var t = (0, o.useSelector)((function(e) {
                        return e.featureflags
                    })) || {};
                    return !!t.hasOwnProperty(e) && t[e]
                }
        },
        31646: (e, t, n) => {
            n.d(t, {
                V: () => a,
                f: () => o
            });
            var r = n(71002),
                o = (n(9867), n(7231), n(58109), n(95566), n(68438), n(30666), n(6129), function(e) {
                    return function(t) {
                        return t && "object" == (0, r.Z)(t.featureflags) ? Object.keys(t.featureflags).filter((function(t) {
                            return t.startsWith(e)
                        })).map((function(n) {
                            return {
                                path: n.replace(e, "").split(".").slice(1).join("/"),
                                value: t.featureflags[n]
                            }
                        })) : []
                    }
                }),
                a = function(e, t) {
                    var n = t.find((function(t) {
                        var n = t.path;
                        return e.startsWith(n)
                    }));
                    return n && n.value || {}
                }
        },
        50503: (e, t, n) => {
            n.r(t), n.d(t, {
                DEFAULT_TITLE: () => u,
                TYPE_AUTHOR: () => i,
                TYPE_DETAIL: () => a,
                TYPE_LANDING: () => r,
                TYPE_SHOW: () => o
            });
            var r = "landing",
                o = "show",
                a = "detail",
                i = "author",
                u = "CBC.ca"
        },
        89920: (e, t, n) => {
            n.d(t, {
                GS: () => o,
                OV: () => i,
                Rg: () => u,
                a6: () => f,
                hx: () => b,
                kp: () => a,
                nw: () => c,
                us: () => p
            });
            n(2041), n(95566), n(2612);
            var r = n(50503),
                o = function(e) {
                    if (e) {
                        var t = e.content,
                            n = void 0 === t ? {} : t,
                            r = {
                                authors: s({
                                    authorList: n.authorList,
                                    byline: n.byline
                                }),
                                contentarea: n.contentarea,
                                contentid: n.id,
                                contenttype: n.type,
                                department: n.attribution,
                                embedtypes: n.embedtypes,
                                keywords: n.keywords,
                                publishedTime: n.publishedAt,
                                sponsor: l(n.sponsorBio),
                                subsection1: n.subsection1,
                                subsection2: n.subsection2,
                                subsection3: n.subsection3,
                                subsection4: n.subsection4,
                                title: n.headline,
                                updatedTime: n.updatedAt,
                                url: n.url,
                                wordcount: n.wordcount,
                                grapeshotCategories: n.gs_categories,
                                grapeshotKeywords: n.gs_keywords
                            };
                        return d(r)
                    }
                },
                a = function(e) {
                    var t, n;
                    if (e) {
                        var r = null !== (t = null === (n = e.section) || void 0 === n ? void 0 : n.tracking) && void 0 !== t ? t : {},
                            o = {
                                contentarea: r.contentArea,
                                contentid: e.sourceId,
                                contenttype: e.type,
                                publishedTime: e.publishedAt,
                                subsection1: r.subsection1,
                                subsection2: r.subsection2,
                                subsection3: r.subsection3,
                                subsection4: r.subsection4,
                                title: e.title,
                                updatedTime: e.updatedAt,
                                url: e.url
                            };
                        return d(o)
                    }
                },
                i = function(e) {
                    if (e) {
                        var t = e.meta,
                            n = void 0 === t ? {} : t,
                            r = e.analytics,
                            o = (void 0 === r ? {} : r).tracking,
                            a = void 0 === o ? {} : o,
                            i = {
                                contentarea: a.contentarea,
                                contenttype: a.contenttype,
                                subsection1: a.subsection1,
                                subsection2: a.subsection2,
                                subsection3: a.subsection3,
                                subsection4: a.subsection4,
                                title: a.title,
                                url: n.canonical,
                                department: a.department
                            };
                        return d(i)
                    }
                },
                u = function(e) {
                    if (e) {
                        var t = e.meta,
                            n = void 0 === t ? {} : t,
                            r = e.pageTitle,
                            o = void 0 === r ? "" : r,
                            a = e.content,
                            i = void 0 === a ? {} : a,
                            u = e.contentId,
                            c = void 0 === u ? "" : u,
                            s = e.author,
                            l = {
                                authors: (void 0 === s ? {} : s).name,
                                contentid: c,
                                contenttype: i.contentType,
                                title: o,
                                url: n.canonical
                            };
                        return d(l)
                    }
                },
                c = function(e, t) {
                    if (e) {
                        if (t === r.TYPE_LANDING) {
                            if (e.contenttype && e.title !== r.DEFAULT_TITLE) return !0
                        } else if (t === r.TYPE_SHOW) {
                            if (e.title && e.title !== r.DEFAULT_TITLE) return !0
                        } else if (t === r.TYPE_DETAIL || t === r.TYPE_AUTHOR) return !0;
                        return !1
                    }
                },
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.authorList,
                        n = e.byline,
                        r = t ? t.reduce((function(e, t) {
                            return e.push(t.name), e
                        }), []).join(",") : void 0;
                    return n && (r = r ? "".concat(r, ",").concat(n) : n), r
                },
                l = function(e) {
                    if (e && e.name) return {
                        name: e.name
                    }
                },
                d = function(e) {
                    if (e && "Object" === e.constructor.name) return Object.keys(e).reduce((function(t, n) {
                        var r = e[n];
                        if (r || "boolean" === typeof r) {
                            if (Array.isArray(r) && 0 === r.length) return t;
                            if ("Object" === r.constructor.name && 0 === Object.keys(r).length) return t;
                            t[n] = e[n]
                        }
                        return t
                    }), {})
                },
                f = function() {
                    var e = 0;
                    return function() {
                        return ++e
                    }
                }(),
                b = function(e) {
                    if (e) {
                        if (e.includes("sclt-")) {
                            var t = e.replace("sclt-", "").replace(/[^a-zA-Z0-9]/g, "");
                            return "sclt-".concat(t)
                        }
                        return e.replace(/[^a-zA-Z0-9]/g, "")
                    }
                },
                p = function() {
                    var e = "";
                    return function(t) {
                        return !(!t || t === e) && (e = t, !0)
                    }
                }()
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-2417.545a1f17c2dcd5fb3785.js.map