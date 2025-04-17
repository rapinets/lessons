/*! For license information please see oc-LandingNews.8ae5792e6b24f11d801e.js.LICENSE.txt */ ! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "467aef15-0161-4605-92be-d6fff6f208f7", e._sentryDebugIdIdentifier = "sentry-dbid-467aef15-0161-4605-92be-d6fff6f208f7")
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
    [8233], {
        63576: (e, t, n) => {
            n.d(t, {
                C: () => j
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                o = (n(9867), n(7231), n(35098)),
                i = n(92972),
                s = n.n(i),
                a = n(26618),
                c = n(73906),
                l = n(33568),
                u = n(89920),
                p = n(82019),
                d = n(56552);

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function g(e, t, n) {
                return function(r) {
                    var o = r.title,
                        i = r.shortTitle,
                        s = r.link,
                        p = r.list,
                        f = "viewportSmall" === e ? new c.Z : new a.Z,
                        g = {
                            text: n && i ? i : o,
                            link: s,
                            external: !1
                        },
                        y = o ? (0, d.jsx)(t.type, b(b({}, t.props), g)) : null;
                    return (0, d.jsx)("div", {
                        className: "moreStories sclt-morenews",
                        children: (0, d.jsxs)("section", {
                            className: "moreStoriesList",
                            children: [y, (0, d.jsx)(l.Z, {
                                displayPolicy: f,
                                items: p,
                                loadMore: !1,
                                trackingSection: "contentlistmore".concat((0, u.hx)(s))
                            }, "news-hierarchy-".concat(o))]
                        })
                    }, "morenews-".concat(o))
                }
            }
            var y = function(e) {
                var t = e.title,
                    n = void 0 === t ? "" : t,
                    r = e.contentList,
                    o = void 0 === r ? [] : r,
                    i = e.viewport,
                    s = void 0 === i ? "viewportLarge" : i,
                    a = e.rightRailStyling,
                    c = void 0 !== a && a,
                    l = e.useShortTitle,
                    u = void 0 !== l && l,
                    f = c ? (0, d.jsx)(p.X6, {
                        text: "",
                        level: "h2",
                        levelClassName: "h3"
                    }) : (0, d.jsx)(p.OT, {
                        text: ""
                    });
                return o && o.length > 0 ? (0, d.jsxs)("div", {
                    className: "contentListing",
                    children: [n && (0, d.jsx)(p.OT, {
                        text: n
                    }), (0, d.jsx)("div", {
                        className: "contentListingContentListHolder",
                        children: o.map(g(s, f, u))
                    })]
                }) : null
            };
            y.propTypes = {
                title: s().string,
                contentList: s().array,
                viewport: s().string,
                rightRailStyling: s().bool,
                useShortTitle: s().bool
            };
            const j = (0, o.memo)(y)
        },
        1473: (e, t, n) => {
            n.d(t, {
                Z: () => r.Z,
                d: () => r.d
            });
            var r = n(18778)
        },
        70847: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(29439),
                o = n(35098),
                i = n(92972),
                s = n.n(i),
                a = n(35049),
                c = n(42820),
                l = n(10078),
                u = n(51591),
                p = n(73457),
                d = n(56552);

            function f(e) {
                var t = e.header,
                    n = void 0 === t ? "" : t,
                    i = e.itemCount,
                    s = e.section,
                    f = (0, c.useSelector)((function(e) {
                        return e.sectionalContent
                    })),
                    b = (0, c.useSelector)((function(e) {
                        return e.app.path
                    })),
                    g = (0, c.useDispatch)(),
                    y = (0, o.useState)([]),
                    j = (0, r.Z)(y, 2),
                    w = j[0],
                    O = j[1];
                (0, o.useEffect)((function() {
                    g((0, l.md)(s, i))
                }), [b]);
                var h = f[s];
                (0, o.useEffect)((function() {
                    null !== h && void 0 !== h && h.sectionList && O((0, u.h)(h.sectionList, {
                        name: p.i1
                    }, b))
                }), [null === h || void 0 === h ? void 0 : h.sectionList]);
                var v = {
                        carouselTitle: n
                    },
                    m = {
                        instance: n.replace(/ Video/g, "")
                    };
                return (0, d.jsx)(a.Z, {
                    layout: v,
                    items: w,
                    featureAttributionData: m
                })
            }
            f.propTypes = {
                header: s().string
            };
            const b = f
        },
        58448: (e, t, n) => {
            n.r(t), n.d(t, {
                LandingNews: () => me,
                default: () => xe,
                getSplitContentArea: () => Pe
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(29439),
                o = n(4942),
                i = n(92972),
                s = n.n(i),
                a = n(82019),
                c = n(14507),
                l = n.n(c),
                u = n(42820),
                p = n(93433),
                d = n(15861),
                f = n(64687),
                b = n.n(f),
                g = n(35098),
                y = n(63576),
                j = n(16537),
                w = n(50439),
                O = n(4954),
                h = (0, n(93849).KF)("Client.contentApi.contentList.lineupIds.news/multi-lineup-listing"),
                v = "".concat(h),
                m = [{
                    title: "Canada",
                    link: "/news/canada",
                    lineupID: "newscanada",
                    lineupSlug: "news-canada",
                    categorySlug: "news-canada"
                }, {
                    title: "World",
                    link: "/news/world",
                    lineupID: "newsworld",
                    lineupSlug: "news-world",
                    categorySlug: "news-world"
                }, {
                    title: "Business",
                    link: "/news/business",
                    lineupID: "newsbusiness",
                    lineupSlug: "news-business",
                    categorySlug: "news-business"
                }, {
                    title: "Politics",
                    link: "/news/politics",
                    lineupID: "newspolitics",
                    lineupSlug: "news-politics",
                    categorySlug: "news-politics"
                }, {
                    title: "Entertainment",
                    link: "/news/entertainment",
                    lineupID: "newsentertainment",
                    lineupSlug: "news-entertainment",
                    categorySlug: "news-entertainment"
                }, {
                    title: "Science",
                    link: "/news/science",
                    lineupID: "newsscience",
                    lineupSlug: "news-science",
                    categorySlug: "science"
                }, {
                    title: "Health",
                    link: "/news/health",
                    lineupID: "newshealth",
                    lineupSlug: "news-health",
                    categorySlug: "news-health"
                }, {
                    title: "Indigenous",
                    link: "/news/indigenous",
                    lineupID: "newsindigenous",
                    lineupSlug: "news-indigenous",
                    categorySlug: "news-indigenous"
                }],
                P = n(91189),
                x = n(12077),
                S = n(41718),
                D = n(25580),
                Z = (n(9867), n(7231), function(e, t) {
                    for (var n = t.split(".").map((function(e) {
                            return e.trim()
                        })), r = e, o = 0; o < n.length; o++) {
                        var i = n[o];
                        if (!r[i]) {
                            r = null;
                            break
                        }
                        r = r[i]
                    }
                    return r
                }),
                C = n(56552);

            function N(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function _() {
                return _ = (0, d.Z)(b().mark((function e(t) {
                    var n, r;
                    return b().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, P.$)(m, 4);
                            case 3:
                                n = e.sent, r = (0, O.du)(m, n), t((0, p.Z)(r)), e.next = 11;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(0), S.default.error("(getMultipleLineups) ContentListing rendering (".concat(v, ") failed"), e.t0);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 8]
                    ])
                }))), _.apply(this, arguments)
            }
            var M = function(e) {
                var t = e.viewport,
                    n = e.splitProps,
                    o = (0, g.useState)([]),
                    i = (0, r.Z)(o, 2),
                    s = i[0],
                    c = i[1],
                    l = {
                        title: "News Sections",
                        contentList: s,
                        viewport: t,
                        rightRailStyling: !0
                    };
                (0, g.useEffect)((function() {
                    ! function(e) {
                        _.apply(this, arguments)
                    }(c)
                }), []);
                var p = (0, u.useSelector)((function(e) {
                    return Z(e, "video.curatedPlaylist")
                }));
                return (0, C.jsxs)("div", {
                    className: "landingNewsSplit",
                    children: [(0, C.jsx)(x.Z, T({}, n.featuredProps)), (0, C.jsx)(j.Z, {
                        isSwimlane: !0
                    }), function() {
                        if (!n.moreContentProps.renderCuratedPlaylist) return null;
                        var e = null !== p && void 0 !== p && p.items ? p.items.filter((function(e) {
                            return e
                        })) : [];
                        return (0, C.jsxs)("div", {
                            className: "playlistSwimlane",
                            children: [(0, C.jsx)(a.OT, {
                                text: "Featured Video"
                            }), (0, C.jsx)(D.Z, {
                                layout: {
                                    playlistTitle: "Featured Video"
                                },
                                items: e,
                                featureAttributionData: {
                                    instance: "News"
                                }
                            })]
                        })
                    }(), (0, C.jsx)(w.Z, {
                        type: "intercept",
                        lazy: !0,
                        targeting: {
                            plc: "feed"
                        }
                    }), (0, C.jsx)(y.C, T({}, l)), (0, C.jsx)(a.OT, {
                        text: "More CBC News"
                    }), (0, C.jsx)(x.Z, T({}, n.moreContentProps))]
                })
            };
            M.propTypes = {
                viewport: s().string,
                splitProps: s().object
            };
            const k = M;
            n(30666), n(6129);
            var E = n(15664),
                L = n(70847),
                I = n(52401),
                A = n(63578),
                F = n(29274),
                R = n(37270);

            function G(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var V = {
                    headline: "Featured",
                    itemCount: 4,
                    className: "newsTheme",
                    showMoreLink: !1,
                    hasHeadlineLink: !1,
                    fetchSection: !0
                },
                H = function(e) {
                    var t = e.path,
                        n = e.splitProps;
                    return (0, C.jsx)(C.Fragment, {
                        children: (0, C.jsxs)("div", {
                            className: "landingNewsSplit",
                            children: [(0, C.jsx)(x.Z, B({}, n.featuredProps)), (0, C.jsx)(E.Z, B(B({}, V), {}, {
                                section: "".concat(t, "/swimlane")
                            })), (0, C.jsx)(a.OT, {
                                text: "More CBC News"
                            }), (0, C.jsx)(x.Z, B({}, n.moreContentProps))]
                        })
                    })
                };
            H.propTypes = {
                path: s().string,
                splitProps: s().object
            };
            var K = function(e) {
                var t = e.path,
                    n = e.splitProps,
                    r = (0, u.useDispatch)();
                (0, g.useEffect)((function() {
                    r((0, I.L)("apps-video", t))
                }), [t]);
                var o = (0, u.useSelector)((function(e) {
                        return Z(e, "video.curatedPlaylist")
                    })),
                    i = A.nv.find((function(e) {
                        return e.path === t
                    })),
                    s = i.liveRadioRegion,
                    c = i.title,
                    l = null !== o && void 0 !== o && o.items ? o.items.filter((function(e) {
                        return e
                    })) : [];
                return (0, C.jsxs)("div", {
                    className: "landingNewsSplit",
                    children: [(0, C.jsx)(L.Z, {
                        title: "Featured",
                        header: "".concat(c, " Video"),
                        section: "".concat(t, "/video"),
                        itemCount: F.O9
                    }), (0, C.jsx)(x.Z, B({}, n.featuredProps)), (0, C.jsx)(R.Z, {
                        listenLinkCMP: "Radio_mobileweb_unit",
                        defaultRadioRegion: s
                    }), (0, C.jsx)(E.Z, B(B({}, V), {}, {
                        section: "".concat(t, "/swimlane")
                    })), (0, C.jsxs)("div", {
                        className: "playlistSwimlane",
                        children: [(0, C.jsx)(a.OT, {
                            text: "Featured Video"
                        }), (0, C.jsx)(D.Z, {
                            layout: {
                                playlistTitle: "Featured Video"
                            },
                            items: l,
                            featureAttributionData: {
                                instance: "News"
                            }
                        })]
                    }), (0, C.jsx)(a.OT, {
                        text: "More CBC News"
                    }), (0, C.jsx)(x.Z, B({}, n.moreContentProps))]
                })
            };

            function z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            K.propTypes = H.propTypes;
            var W = function(e) {
                var t = e.splitProps;
                return (0, C.jsx)(C.Fragment, {
                    children: (0, C.jsxs)("div", {
                        className: "landingNewsSplit politicsLanding",
                        children: [(0, C.jsx)(x.Z, U({}, t.featuredProps)), (0, C.jsx)(a.OT, {
                            text: "More CBC News"
                        }), (0, C.jsx)(x.Z, U({}, t.moreContentProps))]
                    })
                })
            };
            W.propTypes = {
                path: s().string,
                splitProps: s().object
            };
            const X = W;

            function Y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var J = function(e) {
                var t = e.swimlane,
                    n = e.contentList,
                    r = e.subSection,
                    o = e.contentProps,
                    i = e.splitProps;
                return (0, C.jsx)("div", {
                    children: t ? (0, C.jsxs)(C.Fragment, {
                        children: [(0, C.jsx)(x.Z, q({}, i.featuredProps)), (0, C.jsx)(E.Z, q({}, t)), (0, C.jsx)(a.OT, {
                            text: "More ".concat(r, " News")
                        }), (0, C.jsx)(x.Z, q({}, i.moreContentProps))]
                    }) : (0, C.jsx)(x.Z, q({
                        content: n
                    }, o))
                })
            };
            J.propTypes = {
                swimlane: s().object,
                subSection: s().string,
                splitProps: s().object,
                contentList: s().array,
                contentProps: s().object
            };
            const Q = J;
            var $ = n(40238),
                ee = n(88101),
                te = n(91167),
                ne = n(1473);

            function re(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function oe(e, t, n) {
                var r = (0, te.eN)({
                    navigation: e.pageIntro ? e.pageIntro.navigation : [],
                    showName: e.title,
                    baseSection: t,
                    showImage: !1
                }, n);
                return (0, C.jsx)($.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? re(Object(n), !0).forEach((function(t) {
                            (0, o.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, r))
            }
            var ie = function(e) {
                return function(e, t, n) {
                    var r = (0, ee.Q7)(e);
                    return r ? (0, C.jsx)(ne.d, {
                        path: e,
                        children: oe(r, t, n)
                    }) : null
                }(e.path, e.baseSection, e.rightrail)
            };
            ie.propTypes = {
                path: s().string,
                baseSection: s().string,
                rightrail: s().object
            };
            const se = ie;
            var ae = n(69422),
                ce = n(87166),
                le = n(57241),
                ue = n(89920),
                pe = n(19227),
                de = n(50503),
                fe = n(48926),
                be = n(97767),
                ge = n(42192),
                ye = n(90955),
                je = n(83696),
                we = n(23964),
                Oe = n(64107);

            function he(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ve(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? he(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var me = function(e) {
                    var t = (0, u.useSelector)((function(e) {
                            return e.content
                        })),
                        n = t.hasNextPage,
                        r = t.list,
                        o = t.contentPackage,
                        i = (0, u.useSelector)((function(e) {
                            return e.rightRail
                        })),
                        s = (0, u.useSelector)((function(e) {
                            return e.video.curatedPlaylist.items
                        })),
                        c = (0, u.useSelector)((function(e) {
                            return e.tracking
                        })),
                        p = (0, u.useSelector)((function(e) {
                            return e.app
                        })),
                        d = p.path,
                        f = p.title,
                        b = p.baseSection,
                        g = p.subSection,
                        y = p.statusCode,
                        j = p.meta,
                        O = (0, u.useDispatch)(),
                        h = "news/politics" === d ? pe._P : pe.yo;
                    (0, we.Z)(e.match, (function() {
                        return O((0, ge.z)(e.match.url, e.match.params))
                    }));
                    var v = function(t) {
                            return (0, C.jsx)(k, {
                                viewport: e.viewport,
                                splitProps: t
                            })
                        },
                        m = function(t) {
                            return (0, C.jsx)(X, {
                                path: e.match.url.replace(/^\//, ""),
                                splitProps: t
                            })
                        },
                        P = function(t) {
                            return (0, C.jsx)(H, {
                                path: e.match.url.replace(/^\//, ""),
                                splitProps: t
                            })
                        },
                        x = function(e, t) {
                            return (0, C.jsx)(Q, {
                                swimlane: be.bv[d],
                                contentList: r,
                                subSection: g,
                                contentProps: t,
                                splitProps: e
                            })
                        },
                        S = (0, ue.OV)({
                            meta: j,
                            analytics: c
                        }),
                        D = l()("landingNews", ye.Oo),
                        Z = e.abTestGoal ? {
                            onClick: function(t) {
                                var n;
                                null !== (n = t.target) && void 0 !== n && n.closest(".contentArea") && (0, Oe.Tn)(e.abTestGoal)
                            }
                        } : {};
                    return (0, C.jsx)(ce.Z, {
                        statusCode: y,
                        children: (0, C.jsxs)("div", ve(ve({
                            className: D
                        }, Z), {}, {
                            children: [(0, C.jsx)(a.CD, {
                                hidden: !0,
                                text: f
                            }), (0, C.jsx)(se, {
                                path: d,
                                baseSection: b,
                                rightrail: i
                            }), function() {
                                var t = {
                                        subSection: g,
                                        viewport: e.viewport,
                                        hasTopStories: !0,
                                        contentPackage: o,
                                        renderCuratedPlaylist: s.length > 0,
                                        loadMore: null !== n && void 0 !== n && n,
                                        loadMoreFetch: (0, je.xm)(d)
                                    },
                                    i = Pe(r, h, t),
                                    a = e.match.path;
                                return "news/politics" === d ? m(i) : d.match(fe.WH) ? (0, C.jsx)(K, {
                                    splitProps: i,
                                    path: d
                                }) : a.match(fe.sm) ? P(i) : a.match(fe.JX) ? x(i, t) : v(i)
                            }(), (0, C.jsx)(w.Z, {
                                type: "intercept",
                                targeting: {
                                    plc: "feed"
                                },
                                lazy: !0
                            }), (0, C.jsx)(ae.default, {
                                dtmData: S,
                                type: de.TYPE_LANDING
                            })]
                        }))
                    })
                },
                Pe = function(e, t, n) {
                    var o = (0, le.rq)(e, 0, !1, t),
                        i = (0, r.Z)(o, 2),
                        s = i[0],
                        a = i[1];
                    return {
                        featuredProps: Object.assign({}, n, {
                            content: s,
                            cutoffIndex: t,
                            isDenseFeatured: !0,
                            hasTopStories: !1
                        }),
                        moreContentProps: Object.assign({}, n, {
                            content: a,
                            hasFeature: !1,
                            hasSidebar: !1,
                            contentPackage: null
                        })
                    }
                };
            me.propTypes = {
                viewport: s().string
            };
            const xe = me
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-LandingNews.8ae5792e6b24f11d801e.js.map