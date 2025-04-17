! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "71be9a0d-6c23-47ec-8ab3-75f5923f74fd", e._sentryDebugIdIdentifier = "sentry-dbid-71be9a0d-6c23-47ec-8ab3-75f5923f74fd")
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
    [328, 2557], {
        91066: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => At
            });
            var r = n(29439),
                a = n(35098),
                i = n(42820),
                o = n(92972),
                l = n.n(o),
                s = n(14507),
                c = n.n(s),
                u = n(19328),
                d = (n(58109), n(95566), n(68438), n(83464), n(19496), n(84506)),
                p = n(4942),
                f = n(79532),
                v = n(65393),
                b = n(56552);

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                var t = e.path,
                    n = void 0 === t ? "" : t,
                    r = e.gemDepartment,
                    a = void 0 === r ? null : r,
                    i = e.items,
                    o = void 0 === i ? null : i,
                    l = e.viewport,
                    s = {
                        path: n,
                        items: o,
                        viewport: void 0 === l ? "" : l,
                        gemDepartment: a,
                        className: "regionalNav"
                    };
                return (0, b.jsx)(v.ZP, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? h(Object(n), !0).forEach((function(t) {
                            (0, p.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, s))
            }
            m.propTypes = {
                path: l().string,
                gemDepartment: l().object,
                items: l().array,
                viewport: l().string
            };
            const j = m;
            n(9867), n(7231);
            var y = n(75564),
                g = n(26574),
                x = n(77008);

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var C = function(e) {
                var t = e.items,
                    n = void 0 === t ? null : t,
                    r = e.baseNavSection,
                    a = void 0 === r ? "" : r,
                    i = e.subSection,
                    o = void 0 === i ? "" : i,
                    l = e.path,
                    s = void 0 === l ? "" : l,
                    u = e.className,
                    d = e.viewport,
                    p = void 0 === d ? "" : d,
                    f = e.collapseOnMobile,
                    h = void 0 === f || f,
                    m = e.id,
                    j = void 0 === m ? "" : m,
                    O = e.moreButtonLabel,
                    C = void 0 === O ? "" : O,
                    N = e.isExternalHeader,
                    S = void 0 !== N && N,
                    k = {
                        collapseOnMobile: h,
                        usingRightSideNav: !0
                    },
                    P = (0, y.d)(n, s, k),
                    H = P.assignRef,
                    L = (0, P.getHiddenItemsCount)(),
                    D = "",
                    Z = "viewportSmall" === p,
                    E = Z ? n : null,
                    B = 0,
                    M = !0;
                n && !Z && (B = n.length - L, E = n.slice(B, n.length), D = n.map((function(e, t) {
                    return L && (M = t < B), (0, v.E4)({
                        isExternalHeader: S,
                        path: s
                    }, {
                        value: e,
                        index: t,
                        isVisible: M
                    })
                })));
                var _ = c()("subNavList", u, {
                        allHidden: Z || !B
                    }),
                    A = "olympics-paralympics" === a;
                return (0, b.jsx)("div", w(w({
                    className: "olympicsResponsiveNav"
                }, (0, x.Z)({
                    name: "navigation",
                    instance: "secondary-navigation"
                })), {}, {
                    "data-cy": "olympics-responsive-nav",
                    title: "Olympics Section Menu",
                    children: (0, b.jsxs)("ul", {
                        className: _,
                        ref: function(e) {
                            return H(e)
                        },
                        id: j,
                        children: [D, (0, v.Pb)({
                            baseNavSection: a,
                            subSection: o,
                            path: s,
                            moreButtonLabel: C,
                            isExternalHeader: S,
                            id: j
                        }, E, L, Z), (0, b.jsxs)("div", {
                            className: "rightAlignNav",
                            "data-cy": "right-nav",
                            children: [(0, b.jsx)(g.default, {
                                url: A ? "/player/sports/paralympics/summer/replays" : "/player/sports/olympics/summer/replays",
                                className: "watchReplaysLink",
                                "data-feature-name": "navigation",
                                "data-feature-instance": "secondary-navigation",
                                children: "Watch Replays"
                            }), (0, b.jsxs)(g.default, {
                                url: A ? "/player/sports/paralympics/summer/live" : "/player/sports/olympics/summer/live",
                                className: "watchLiveLink",
                                "data-feature-name": "navigation",
                                "data-feature-instance": "secondary-navigation",
                                children: ["Watch Live", (0, b.jsx)("span", {
                                    className: "a11y",
                                    children: "End of section"
                                })]
                            })]
                        })]
                    })
                }))
            };
            C.propTypes = {
                items: l().array,
                baseNavSection: l().string,
                subSection: l().string,
                path: l().string,
                className: l().string,
                viewport: l().string,
                collapseOnMobile: l().bool,
                id: l().string,
                moreButtonLabel: l().string,
                isExternalHeader: l().bool
            };
            const N = C;
            var S = n(41130);
            const k = n.p + "assets/bannerDesktop.svg",
                P = n.p + "assets/bannerMobile.svg",
                H = n.p + "assets/paraBannerDesktop.svg",
                L = n.p + "assets/paraBannerMobile.svg";
            var D = function(e) {
                    var t = e.icon,
                        n = void 0 === t ? (0, b.jsx)(S.Z, {}) : t;
                    return (0, b.jsxs)(a.Fragment, {
                        children: [(0, b.jsxs)("svg", {
                            width: "443",
                            height: "49",
                            viewBox: "0 0 443 49",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "winterOlympicsBrandBannerLogo",
                            role: "img",
                            "aria-label": "Beijing 2022",
                            children: [(0, b.jsx)("path", {
                                d: "M100.386 0.151611V48.5263L92.3359 40.5302V0.151611H100.386Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M152.149 0.151611V48.5263L144.1 40.5302V0.151611H152.149Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M241.927 38.1805V23.742H250.015V41.8564C247.798 44.1298 245.146 45.9337 242.217 47.1609C239.289 48.3881 236.144 49.0135 232.969 48.9999C229.715 49.0276 226.491 48.3825 223.498 47.1051C220.63 45.8671 218.022 44.0993 215.808 41.8943C213.57 39.6522 211.772 37.0108 210.505 34.1066C209.218 31.1161 208.572 27.8884 208.611 24.6325C208.603 21.4224 209.247 18.2442 210.505 15.2911C211.736 12.4127 213.503 9.79532 215.714 7.57916C217.968 5.37992 220.606 3.61368 223.498 2.36841C226.488 1.08304 229.714 0.437613 232.969 0.473594H250.015L241.89 8.58342H232.969C230.816 8.56953 228.682 8.99506 226.699 9.834C224.75 10.625 222.974 11.7901 221.472 13.2636C219.99 14.753 218.801 16.5078 217.968 18.4365C217.108 20.4283 216.669 22.5766 216.68 24.7462C216.665 26.9101 217.104 29.053 217.968 31.037C218.8 32.946 219.975 34.6864 221.434 36.172C222.909 37.6611 224.667 38.84 226.605 39.6395C228.602 40.4749 230.747 40.9002 232.912 40.8901C236.122 40.9245 239.267 39.9793 241.927 38.1805Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M127.868 0.303223H123.834V8.37515H127.868V40.7197H116.409V32.5909H108.359V40.7765C108.357 41.8332 108.563 42.8799 108.965 43.8568C109.368 44.8338 109.959 45.7217 110.705 46.4697C111.451 47.2177 112.337 47.8112 113.313 48.2162C114.288 48.6211 115.334 48.8295 116.39 48.8295H128.417C130.427 48.8295 132.354 48.031 133.775 46.6096C135.195 45.1882 135.994 43.2604 135.994 41.2502V0.303223H127.868Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M42.9571 14.4575C42.9717 12.5699 42.5977 10.6994 41.8586 8.96254C40.3988 5.5572 37.6863 2.8436 34.2824 1.38327C32.5501 0.654892 30.6876 0.287396 28.8085 0.303225H4.03433V20.5588H0V28.6118H28.8085C29.6317 28.6074 30.446 28.782 31.195 29.1234C31.9072 29.4455 32.5504 29.9023 33.0891 30.4687C33.6159 31.0203 34.0393 31.6621 34.3392 32.3635C34.6403 33.0904 34.7948 33.8695 34.7938 34.6563C34.7897 35.4548 34.6355 36.2454 34.3392 36.9869C34.0537 37.7276 33.6164 38.4003 33.0553 38.9616C32.4942 39.5229 31.8218 39.9604 31.0814 40.246C30.3401 40.5399 29.5491 40.6879 28.7517 40.6818H12.1219V30.6772L4.03433 32.212V48.8106H28.8085C30.6908 48.8209 32.5548 48.4402 34.2824 47.6926C37.683 46.2274 40.3939 43.5154 41.8586 40.1134C42.5978 38.3832 42.9718 36.5189 42.9571 34.6373C42.9783 32.7619 42.6066 30.9027 41.8661 29.1796C41.1256 27.4565 40.0327 25.9077 38.6576 24.6327C40.0392 23.3267 41.1347 21.748 41.8748 19.9965C42.6149 18.245 42.9834 16.3589 42.9571 14.4575ZM34.396 16.8071C34.0997 17.5414 33.6586 18.2085 33.0988 18.7685C32.5391 19.3284 31.8723 19.7698 31.1382 20.0662C30.4031 20.3868 29.6105 20.5545 28.8085 20.5588H12.1219V8.41305H28.8085C29.6071 8.41343 30.3981 8.56783 31.1382 8.8678C31.8523 9.16086 32.4974 9.5997 33.0323 10.1563C33.5825 10.6965 34.0203 11.3406 34.3202 12.0511C34.6201 12.7915 34.7744 13.5828 34.7748 14.3817C34.8141 15.2075 34.6852 16.0327 34.396 16.8071Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M192.416 0.227295V22.8135L200.523 33.6519V0.227295H192.416Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M186.413 23.9315L160.086 0.227295V48.7915H168.136V19.725L200.524 48.8673V39.6585V36.6646L192.417 29.3507L186.413 23.9315Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M80.1755 20.5398H62.8828C62.9027 22.6591 63.757 24.6852 65.2604 26.1785C66.7638 27.6719 68.795 28.5121 70.9136 28.517H80.1755V20.5398Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M58.9056 40.7954V8.31821H84.2101V0.28418H58.5079C56.4985 0.28418 54.5715 1.08271 53.1507 2.5041C51.7298 3.92549 50.9316 5.8533 50.9316 7.86345V41.2123C50.9316 43.2224 51.7298 45.1502 53.1507 46.5716C54.5715 47.993 56.4985 48.7915 58.5079 48.7915H84.2101V40.7954H58.9056Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M348.505 0H330.436C328.426 0 326.499 0.798528 325.078 2.21992C323.658 3.64131 322.859 5.56912 322.859 7.57927V40.9281C322.859 42.9382 323.658 44.866 325.078 46.2874C326.499 47.7088 328.426 48.5073 330.436 48.5073H348.505C350.514 48.5073 352.441 47.7088 353.862 46.2874C355.283 44.866 356.081 42.9382 356.081 40.9281V7.57927C356.081 5.56912 355.283 3.64131 353.862 2.21992C352.441 0.798528 350.514 0 348.505 0V0ZM348.05 40.4733H330.89V8.09087H348.05V40.4733Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M314.11 0.0756836H278.445H278.369L286.419 8.10971H306.666V16.0869L306.609 16.1627L285.339 40.5869H285.358L278.369 48.6399H314.716V40.5869H296.855L314.716 19.5734V8.10971V0.0756836H314.11Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M397.997 0.0756836H362.332H362.256L370.306 8.10971H390.553V16.0869L390.496 16.1627L369.226 40.5869H369.245L362.256 48.6399H398.603V40.5869H380.742L398.603 19.5734V8.10971V0.0756836H397.997Z",
                                fill: "white"
                            }), (0, b.jsx)("path", {
                                d: "M442.393 0.0756836H406.709H406.652L414.683 8.10971H414.702H434.95V16.0869L434.874 16.1627L413.622 40.5869L406.652 48.6399H442.999V40.5869H425.138L442.999 19.5734V8.10971V0.0756836H442.393Z",
                                fill: "white"
                            })]
                        }), n]
                    })
                },
                Z = (0, b.jsx)(D, {}),
                E = (0, b.jsx)("img", {
                    src: k,
                    alt: ""
                }),
                B = (0, b.jsx)("img", {
                    src: P,
                    alt: ""
                }),
                M = (0, b.jsx)("img", {
                    src: H,
                    alt: ""
                }),
                _ = (0, b.jsx)("img", {
                    src: L,
                    alt: ""
                });

            function A(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const T = function(e) {
                var t = e.season,
                    n = void 0 === t ? null : t,
                    r = e.url,
                    a = e.logo,
                    i = void 0 === a ? null : a;
                if ("summer" !== n && "winter" !== n && "paralympics" !== n) return null;
                var o = r || "/sports/olympics";
                return "summer" === n ? (0, b.jsx)(g.default, {
                    url: o,
                    children: (0, b.jsxs)("div", {
                        className: "summerOlympicsBrandBanner",
                        "data-feature-name": "banner",
                        "data-cy": "olympics-banner",
                        children: [(0, b.jsx)("div", {
                            className: "summerOlympicsBannerImage desktop",
                            children: E
                        }), (0, b.jsx)("div", {
                            className: "summerOlympicsBannerImage mobile",
                            children: B
                        })]
                    })
                }) : "winter" === n ? (0, b.jsx)(g.default, {
                    className: "bannerFocus",
                    url: o,
                    children: (0, b.jsx)("div", I(I({
                        className: "winterOlympicsBrandBanner"
                    }, (0, x.Z)({
                        name: "banner",
                        instance: "Beijing"
                    })), {}, {
                        children: (0, b.jsx)("div", {
                            className: "winterOlympicsBrandBannerBricks",
                            children: i || Z
                        })
                    }))
                }) : "paralympics" === n ? (0, b.jsx)(g.default, {
                    url: "/sports/paralympics",
                    children: (0, b.jsxs)("div", {
                        className: "summerOlympicsBrandBanner",
                        "data-feature-name": "banner",
                        "data-cy": "olympics-banner",
                        children: [(0, b.jsx)("div", {
                            className: "summerOlympicsBannerImage desktop",
                            children: M
                        }), (0, b.jsx)("div", {
                            className: "summerOlympicsBannerImage mobile",
                            children: _
                        })]
                    })
                }) : void 0
            };
            var V = n(52473),
                R = n(46924),
                W = n(88101);

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

            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var G = function(e) {
                var t = e.baseNavSection,
                    n = e.subSection,
                    r = e.path,
                    a = e.viewport,
                    o = e.regionObject,
                    l = e.gemDepartment,
                    s = e.isExternalHeader,
                    c = (0, i.useSelector)((function(e) {
                        return e.detail && e.detail.content && e.detail.content.sponsorBio ? e.detail.content.sponsorBio.label : null
                    }));
                if ((0, R.ek)(c)) return null;
                var u = V.O0[t],
                    d = u ? u.filter((function(e) {
                        return !0 !== e.hidden
                    })) : null;
                o && (d = o.navigation ? o.navigation : []);
                var p = {
                        baseNavSection: t,
                        subSection: n,
                        path: r,
                        showLogo: !0,
                        items: d,
                        viewport: a,
                        gemDepartment: l,
                        isExternalHeader: s
                    },
                    f = (0, W.WM)({
                        baseNavSection: t
                    }),
                    h = (0, b.jsx)(v.ZP, F({}, p)),
                    m = null;
                return o ? h = (0, b.jsx)(j, F(F({}, p), {}, {
                    sectionTitle: o.title
                })) : f && (h = (0, b.jsx)(N, F({}, p)), m = (0, b.jsx)(T, {
                    season: (0, W.oQ)({
                        baseNavSection: t
                    })
                })), (0, b.jsxs)("nav", {
                    className: "sclt-landingnav landingNav",
                    "aria-label": "CBC ".concat(t || ""),
                    children: [m, (0, b.jsx)("div", {
                        className: "landingWrapper",
                        children: h
                    })]
                })
            };
            G.propTypes = {
                baseNavSection: l().string,
                subSection: l().string,
                path: l().string,
                viewport: l().string,
                regionObject: l().object,
                gemDepartment: l().object,
                isExternalHeader: l().bool
            };
            const q = G;
            var K = {
                "sports/soccer/worldcup": !0
            };

            function J(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function $(e) {
                var t = e.items,
                    n = void 0 === t ? null : t,
                    r = e.baseNavSection,
                    a = e.subSection,
                    i = e.path,
                    o = void 0 === i ? "" : i,
                    l = e.viewport,
                    s = e.moreButtonLabel,
                    u = void 0 === s ? "More" : s,
                    d = e.isExternalHeader,
                    p = void 0 !== d && d,
                    f = e.contentId;
                if (K[o] || (0, W.F2)({
                        contentId: f
                    }) && K[(0, W.j0)(o)]) return null;
                var h = c()("sclt-tertiarynav", {
                        tertiaryNav: !0
                    }),
                    m = n || null;
                if (!Array.isArray(m)) return null;
                var j = m[0] || null,
                    y = j ? j.title : "",
                    g = {
                        baseNavSection: r,
                        subSection: a,
                        path: o,
                        showLogo: !1,
                        items: m,
                        viewport: l,
                        gemDepartment: null,
                        isExternalHeader: p,
                        moreButtonLabel: y ? "More ".concat(y.replace("Home", "")) : u
                    };
                return (0, b.jsx)("nav", {
                    className: h,
                    children: (0, b.jsx)("div", {
                        className: "tertiaryNavWrapper",
                        children: (0, b.jsx)(v.ZP, Q({}, g))
                    })
                })
            }
            $.propTypes = {
                items: l().array,
                baseNavSection: l().string,
                subSection: l().string,
                path: l().string,
                viewport: l().string,
                moreButtonLabel: l().string,
                isExternalHeader: l().bool,
                contentId: l().string
            };
            var U = n(93433),
                X = n(29242),
                Y = [{
                    link: "//www.cbc.ca/news/",
                    title: "News",
                    type: "external"
                }, {
                    link: "//www.cbc.ca/sports/",
                    title: "Sports",
                    type: "external"
                }, {
                    link: "//www.cbc.ca/radio/",
                    title: "Radio",
                    type: "external"
                }, {
                    link: "//www.cbc.ca/television/",
                    title: "TV",
                    type: "external"
                }, {
                    link: "//www.cbc.ca/sitemap/",
                    title: "Discover",
                    type: "external"
                }];

            function ee(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ee(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const ne = function(e) {
                var t = e.path,
                    n = void 0 === t ? "" : t,
                    r = e.sectionName,
                    a = void 0 === r ? "" : r,
                    i = {
                        path: n,
                        items: (0, U.Z)(Y),
                        className: "externalSubNav"
                    },
                    o = c()("externalNav", a);
                return (0, b.jsx)("nav", {
                    className: o,
                    children: (0, b.jsx)(X.Z, te({}, i))
                })
            };
            var re = n(85161),
                ae = n(2557),
                ie = function(e) {
                    if (V.R7 && V.R7[e]) return (0, U.Z)(V.R7[e]);
                    for (var t in V.R7)
                        if (Object.prototype.hasOwnProperty.call(V.R7, t) && e.startsWith(t)) return (0, U.Z)(V.R7[t]);
                    return null
                },
                oe = n(14567),
                le = n(25538),
                se = n(41718),
                ce = n(33574);
            const ue = function(e) {
                var t = (0, a.useState)(""),
                    n = (0, r.Z)(t, 2),
                    o = n[0],
                    l = n[1],
                    s = (0, a.useRef)(!1),
                    u = (0, i.useDispatch)(),
                    d = (0, i.useSelector)(le.Z),
                    p = void 0 === d ? null : null === d || void 0 === d ? void 0 : d.isAuthenticated,
                    f = null === d || void 0 === d ? void 0 : d.userProfile.FullName,
                    v = "";
                f && f.split(" ").forEach((function(e) {
                    v += e[0]
                })), (0, a.useEffect)((function() {
                    return s.current = !0, (0, ce.loadMembershipActionsLR)().then((function(e) {
                            var t = e.checkLoggedInStatus,
                                n = e.logout;
                            p ? n()(u) : t()(u)
                        })).catch((function(e) {
                            se.default.error("(ExternalProfileButton)", new Error("(ExternalProfileButton) Failed to check authentication status - ".concat(e.message)))
                        })), window.location !== window.parent.location ? l(document.referrer) : l(document.location.href),
                        function() {
                            s.current = !1
                        }
                }), []);
                var h = function() {
                        if (!p) return (0, b.jsx)(re.default, {
                            type: "profile",
                            className: "profilePic"
                        });
                        var e = c()("profilePic"),
                            t = (null === d || void 0 === d ? void 0 : d.community.pic_large_pending) || (null === d || void 0 === d ? void 0 : d.community.pic_large) || "";
                        return "" === t ? (e += " profileInitials", (0, b.jsx)("span", {
                            className: e,
                            children: v
                        })) : (e += " profileImage", (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsx)("img", {
                                alt: "profile",
                                src: t,
                                className: "profileImageErrorCheck",
                                onError: function() {
                                    t = ""
                                },
                                loading: "lazy"
                            }), (0, b.jsx)("span", {
                                className: e,
                                style: {
                                    backgroundImage: "url(".concat(t, ")")
                                }
                            })]
                        }))
                    },
                    m = "" !== f && "Guest" !== f && f ? f : "Sign In";
                return (0, b.jsx)("div", {
                    className: c()({
                        hideProfileButton: !s.current
                    }, "externalProfileButtonWrapper", "profileButtonWrapper"),
                    children: function() {
                        var t = "";
                        return t = p ? "".concat(oe.DO) : e.path ? "".concat(oe.Jt, "?returnto=").concat(o, "&referrer=").concat(o) : "".concat(oe.Jt), (0, b.jsx)("a", {
                            target: "_top",
                            href: t,
                            children: (0, b.jsxs)("button", {
                                className: "profileButtonNav",
                                children: [h(), (0, b.jsx)("span", {
                                    className: "profileText",
                                    children: m
                                })]
                            })
                        })
                    }()
                })
            };
            var de = n(99451);

            function pe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? pe(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ve = function(e) {
                var t = e.path,
                    n = void 0 === t ? "" : t,
                    i = (0, a.useState)(f.ln),
                    o = (0, r.Z)(i, 2),
                    l = o[0],
                    s = o[1],
                    u = (0, a.useRef)(null),
                    p = (0, de.useFeatureFlag)("externalsignin.display");
                (0, a.useEffect)((function() {
                    var e = {
                        domNode: u,
                        callback: v
                    };
                    f.ZP.registerMediaQueryObject(e)
                }), []);
                var v = function(e) {
                        s(e)
                    },
                    h = null,
                    m = null,
                    j = function() {
                        var e = n.split("/");
                        return (0, d.Z)(e).slice(3).join("/")
                    }(),
                    y = j ? (0, W.Dr)(j) : "";
                if (y) {
                    var x = ie(j);
                    if (x) {
                        var O = {
                            items: x,
                            baseNavSection: y,
                            subSection: (0, W.Pm)(j, 1),
                            path: j,
                            isExternalHeader: !0,
                            viewport: l
                        };
                        m = (0, b.jsx)($, fe({}, O))
                    }
                    var w = {
                            type: "logo",
                            className: c()("subSectionLogo", y),
                            section: y || null,
                            title: y
                        },
                        C = w.section ? (0, b.jsx)(ae.default, fe({}, w)) : (0, b.jsx)(re.default, fe({}, w)),
                        N = (0, b.jsx)("div", {
                            className: "gemSectionLink",
                            id: "section-link-title",
                            children: (0, b.jsx)(g.default, {
                                className: "navLink subNavLink",
                                url: (0, W.ch)(y),
                                external: !0,
                                children: C
                            })
                        }),
                        S = {
                            baseNavSection: y,
                            path: n,
                            gemDepartment: N,
                            isExternalHeader: !0,
                            viewport: l,
                            hasTertiaryNav: null !== m
                        };
                    h = (0, b.jsx)(q, fe({}, S))
                }
                var k = c()("appContainer", (0, W.C_)("", y, "Theme", !1), l);
                return (0, b.jsx)("div", {
                    className: k,
                    ref: u,
                    children: (0, b.jsxs)("header", {
                        className: "globalHeader externalHeader",
                        children: [(0, b.jsxs)("div", {
                            className: "menuNavWrapper",
                            children: [(0, b.jsx)("base", {
                                target: "_blank"
                            }), function() {
                                var e = {
                                    className: "logo",
                                    external: !0,
                                    url: (0, W.ch)("/")
                                };
                                return (0, b.jsx)(g.default, fe(fe({}, e), {}, {
                                    "aria-label": "CBC Home Page",
                                    children: (0, b.jsx)(re.default, fe({}, {
                                        type: "logo",
                                        className: "headerLogo globalHeaderLogo",
                                        svgAlternateValue: "",
                                        section: "CBC"
                                    }))
                                }))
                            }(), (0, b.jsx)(ne, {
                                path: n
                            }), (0, b.jsxs)("div", {
                                className: "sideMenu",
                                children: [function() {
                                    var e = {
                                        "aria-expanded": "false",
                                        "aria-label": "Search",
                                        className: "navLink search",
                                        external: !0,
                                        url: (0, W.ch)("/search"),
                                        id: "searchButton",
                                        role: "button"
                                    };
                                    return (0, b.jsx)(g.default, fe(fe({}, e), {}, {
                                        children: (0, b.jsx)(re.default, {
                                            role: "presentation",
                                            type: "newSearch",
                                            className: "headerSearch"
                                        })
                                    }))
                                }(), p && (0, b.jsx)(ue, {
                                    path: n
                                })]
                            })]
                        }), h, m]
                    })
                })
            };
            ve.propTypes = {
                path: l().string
            };
            const be = ve;
            var he = n(66240),
                me = n(96163),
                je = n(68825),
                ye = n(78116),
                ge = n(83110),
                xe = n(30091);
            const Oe = function() {
                var e = (0, ge.useHistory)(),
                    t = (0, a.useState)(""),
                    n = (0, r.Z)(t, 2),
                    o = n[0],
                    l = n[1],
                    s = (0, a.useState)(""),
                    u = (0, r.Z)(s, 2),
                    d = u[0],
                    p = u[1],
                    f = (0, a.useState)(""),
                    v = (0, r.Z)(f, 2),
                    h = v[0],
                    m = v[1],
                    j = (0, a.useState)(0),
                    y = (0, r.Z)(j, 2),
                    g = y[0],
                    x = y[1],
                    O = (0, a.useState)(!1),
                    w = (0, r.Z)(O, 2),
                    C = w[0],
                    N = w[1],
                    S = (0, a.useRef)(!1),
                    k = (0, a.useRef)(null),
                    P = (0, i.useDispatch)(),
                    H = (0, i.useSelector)(le.Z),
                    L = (0, a.useMemo)((function() {
                        return !(null === H || void 0 === H || !H.isAuthenticated)
                    }), [H]);
                (0, a.useEffect)((function() {
                    return S.current = !0, (0, ce.loadMembershipActionsLR)().then((function(e) {
                            (0, e.checkLoggedInStatus)()(P)
                        })).catch((function(e) {
                            se.default.error("(ProfileButtonNav)", new Error("(ProfileButtonNav) Failed to check authentication status - ".concat(e.message)))
                        })), xe.default && xe.default.addOnReadyCallback((function() {
                            xe.default.subscribeAuthenticationRequired((function() {
                                B()
                            }))
                        })),
                        function() {
                            var e;
                            xe.default && (null === xe.default || void 0 === xe.default || null === (e = xe.default.unsubscribeAuthentication) || void 0 === e || e.call(xe.default));
                            S.current = !1
                        }
                }), []), (0, a.useEffect)((function() {
                    return L && xe.default && xe.default.addOnReadyCallback((function() {
                            D()
                        })),
                        function() {
                            var e;
                            xe.default && (null === xe.default || void 0 === xe.default || null === (e = xe.default.unsubscribeNotifications) || void 0 === e || e.call(xe.default))
                        }
                }), [L]);
                var D = function() {
                        xe.default.getUserContext().then((function(e) {
                            E(e)
                        })), xe.default.subscribeUserInfo((function(e) {
                            E(e)
                        })), xe.default.getNotificationContext().then((function(e) {
                            Z(e)
                        })), xe.default.subscribeNotifications((function(e) {
                            x(e)
                        })), xe.default.subscribeTrayOpen((function() {
                            N(!0)
                        })), xe.default.subscribeTrayClosed((function() {
                            N(!1)
                        }))
                    },
                    Z = function(e) {
                        S.current && x(e.counts.new)
                    },
                    E = function(e) {
                        if (S.current) {
                            var t = xe.default.isUserAuthenticated(e);
                            if (t !== k.current) {
                                k.current = t;
                                var n = "",
                                    r = e.name ? e.name : e.username_pending;
                                r && r.split(" ").forEach((function(e) {
                                    n += e[0]
                                }));
                                var a = e.pic_small ? e.pic_small : e.pic_small_pending ? e.pic_small_pending : "";
                                a.includes("google") && (a = ""), l(a), m(n), p(r)
                            }
                        }
                    },
                    B = function() {
                        var t = window.location.href;
                        if (k.current) {
                            var n = (0, ce.profileViaAccountCentre)();
                            e.push({
                                pathname: n.pathname,
                                search: n.search
                            })
                        } else {
                            var r = (0, ce.loginViaAccountCentreRedirect)(t, t);
                            window.location.href = r
                        }
                    },
                    M = "" === d || "Guest" === d ? "Sign In" : d;
                return (0, b.jsx)("div", {
                    className: "profileButtonWrapper",
                    children: (0, b.jsxs)("button", {
                        "aria-expanded": C,
                        className: "profileButtonNav",
                        "data-cy": "profile-button-nav",
                        onClick: B,
                        children: [function() {
                            if (!k.current) return (0, b.jsx)(re.default, {
                                type: "profile",
                                className: "profilePic"
                            });
                            var e = c()("profilePic", {
                                hasNotifications: g > 0
                            });
                            return "" === o ? (e += " profileInitials", (0, b.jsx)("span", {
                                className: e,
                                children: h
                            })) : (e += " profileImage", (0, b.jsxs)(b.Fragment, {
                                children: [(0, b.jsx)("img", {
                                    alt: "profile",
                                    src: o,
                                    className: "profileImageErrorCheck",
                                    onError: function() {
                                        l("")
                                    },
                                    loading: "lazy"
                                }), (0, b.jsx)("span", {
                                    className: e,
                                    style: {
                                        backgroundImage: "url(".concat(o, ")")
                                    }
                                })]
                            }))
                        }(), (0, b.jsx)("span", {
                            className: "profileText",
                            children: M
                        })]
                    })
                })
            };
            var we = n(51391);

            function Ce(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ce(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Se = function(e) {
                    var t = e.setMenuOpen,
                        n = e.menuOpen,
                        o = e.viewport,
                        l = void 0 === o ? "" : o,
                        s = e.isFallback,
                        u = void 0 !== s && s,
                        d = (0, we.Z)(),
                        p = (0, i.useSelector)((function(e) {
                            return e.app.path
                        })),
                        f = (0, i.useSelector)((function(e) {
                            return e.app.subSection
                        })),
                        v = (0, i.useSelector)((function(e) {
                            return e.featureflags.globalEventLink
                        })),
                        h = (0, a.useRef)(null),
                        m = (0, a.useRef)(null),
                        j = (0, a.useRef)(null),
                        y = (0, a.useRef)(null),
                        x = (0, a.useState)(!1),
                        O = (0, r.Z)(x, 2),
                        w = O[0],
                        C = O[1];
                    (0, a.useEffect)((function() {
                        t(!1), C(!1)
                    }), [p]);
                    var N = function(e, t) {
                            32 !== t.which && 32 !== t.keyCode || ("menu" === e && S(t), "search" === e && k(t)), "Escape" !== t.key && "Esc" !== t.key && 27 !== t.keyCode || ("menu" === e && n && S(t), "search" === e && w && k(t))
                        },
                        S = function(e) {
                            e.preventDefault(), e.stopPropagation(), y.current()
                        };
                    y.current = function() {
                        var e;
                        (0, ye.EF)("global nav menu", n), t(!n), null !== j && void 0 !== j && null !== (e = j.current) && void 0 !== e && e.focus && n && j.current.focus()
                    };
                    var k = function(e) {
                            e.preventDefault(), C((function(e) {
                                return !e
                            }))
                        },
                        P = {
                            subSection: f,
                            path: p,
                            menuCallback: S,
                            searchCallback: k,
                            menuOpen: n,
                            viewport: l
                        },
                        H = {
                            className: "menuButton",
                            external: !1,
                            ref: j,
                            onClick: S,
                            onKeyDown: function(e) {
                                return N("menu", e)
                            },
                            id: "menuButton",
                            role: "button"
                        },
                        L = c()("searchClose", {
                            active: w
                        }),
                        D = c()("headerSearchBar", {
                            active: w
                        });
                    return (0, b.jsxs)("div", {
                        className: "menuNavWrapper primaryNav",
                        role: "dialog",
                        "aria-modal": n,
                        "aria-label": "CBC main navigation",
                        "data-cy": "primaryNavbar",
                        onKeyDown: function(e) {
                            var t = h.current,
                                r = m.current;
                            9 !== e.which && 9 !== e.keyCode || (document.activeElement === r && t.focus(), e.shiftKey && document.activeElement === t && r.focus()), "Escape" !== e.key && "Esc" !== e.key && 27 !== e.keyCode || !n || S(e)
                        },
                        children: [(0, b.jsx)("button", {
                            className: "toggleMenu",
                            onClick: S,
                            tabIndex: "-1",
                            "aria-label": "close menu",
                            "aria-hidden": "true"
                        }), (0, b.jsx)("div", {
                            className: "menuButtonWrapper",
                            children: (0, b.jsxs)(g.default, Ne(Ne({
                                url: "//www.cbc.ca/sitemap"
                            }, H), {}, {
                                "data-cy": d ? "menuButton" : void 0,
                                children: [n ? (0, b.jsx)(he.Z, {
                                    name: "Close",
                                    size: "16"
                                }) : (0, b.jsx)(he.Z, {
                                    name: "Hamburger",
                                    size: "16"
                                }), (0, b.jsx)("span", {
                                    className: "menuText",
                                    children: n ? "Close Menu" : "Menu"
                                })]
                            }))
                        }), function() {
                            var e = {
                                className: "logo",
                                external: u,
                                url: "/"
                            };
                            return (0, b.jsx)("div", {
                                className: "logoWrapper",
                                children: (0, b.jsx)(g.default, Ne(Ne({}, e), {}, {
                                    ref: h,
                                    "aria-label": "CBC Home Page",
                                    children: (0, b.jsx)(re.default, Ne({}, {
                                        type: "logo",
                                        className: "headerLogo globalHeaderLogo",
                                        svgAlternateValue: "",
                                        section: "CBC"
                                    }))
                                }))
                            })
                        }(), v ? (0, b.jsx)(ke, Ne({}, Pe(v, !n))) : null, (0, b.jsxs)("div", {
                            className: "sideMenu",
                            children: [(0, b.jsxs)("div", {
                                className: D,
                                children: [(0, b.jsx)(je.Z, {
                                    type: "compact",
                                    active: w
                                }), (0, b.jsx)("button", {
                                    className: L,
                                    onClick: k,
                                    children: (0, b.jsx)("svg", {
                                        fill: "#ffffff",
                                        width: "20px",
                                        height: "19px",
                                        viewBox: "0 0 20 19",
                                        focusable: "false",
                                        "aria-label": "close",
                                        children: (0, b.jsx)("polygon", {
                                            points: "20 0.01 17.6 0 10 7.6 2.4 0 0 0.01 8.79 8.81 0 17.6 2.44 17.57 10 10.02 17.56 17.57 20 17.6 11.21 8.81 20 0.01"
                                        })
                                    })
                                })]
                            }), function() {
                                var e = {
                                    "aria-expanded": w ? "true" : "false",
                                    "aria-label": "Search",
                                    className: "navLink search",
                                    onClick: k,
                                    external: !1,
                                    url: "/search",
                                    onKeyDown: function(e) {
                                        return N("search", e)
                                    },
                                    id: "searchButton",
                                    role: "button",
                                    "data-testid": "navSearchButton"
                                };
                                return (0, b.jsxs)(g.default, Ne(Ne({}, e), {}, {
                                    children: [(0, b.jsx)(re.default, {
                                        role: "presentation",
                                        type: "newSearch",
                                        className: "headerSearch"
                                    }), (0, b.jsx)("span", {
                                        className: "searchText",
                                        "data-cy": d ? "search-text" : void 0,
                                        children: "Search"
                                    })]
                                }))
                            }(), (0, b.jsx)(Oe, {})]
                        }), (0, b.jsx)(me.Z, Ne({}, P)), (0, b.jsx)("button", {
                            className: "menuClose sclt-menuRoundIconClose",
                            onClick: S,
                            "aria-label": "Close Menu",
                            ref: m,
                            children: (0, b.jsx)(re.default, {
                                type: "close"
                            })
                        })]
                    })
                },
                ke = function(e) {
                    var t = e.url,
                        n = e.largeText,
                        r = e.smallText,
                        a = e.display;
                    return t && n && r && a ? (0, b.jsxs)(g.default, {
                        url: t,
                        className: "menuButton globalEventLink",
                        "data-feature-name": "navigation",
                        "data-feature-instance": "global-nav",
                        children: [(0, b.jsx)("span", {
                            className: "globalEventLinkLarge",
                            children: n
                        }), (0, b.jsx)("span", {
                            className: "globalEventLinkSmall",
                            children: r
                        })]
                    }) : null
                },
                Pe = function(e, t) {
                    if (!e) return null;
                    var n = e.split("||"),
                        a = (0, r.Z)(n, 3),
                        i = a[0],
                        o = a[1];
                    return {
                        url: a[2],
                        smallText: i,
                        largeText: o,
                        display: t
                    }
                };
            Se.propTypes = {
                viewport: l().string,
                isFallback: l().bool
            };
            const He = Se;
            var Le = n(33251),
                De = [{
                    title: "News",
                    path: "news"
                }, {
                    title: "Olympics",
                    path: "/sports/olympics/summer/video"
                }, {
                    title: "Paralympics",
                    path: "/sports/paralympics/video"
                }, {
                    title: "Sports",
                    path: "sports"
                }, {
                    title: "Arts",
                    path: "arts"
                }, {
                    title: "Life",
                    path: "life"
                }, {
                    title: "Archives",
                    path: "archives"
                }, {
                    title: "Music",
                    path: "music"
                }, {
                    title: "Docs",
                    path: "docs"
                }];
            const Ze = function() {
                var e = (0, a.useRef)(),
                    t = (0, ge.useLocation)().pathname,
                    n = (0, ge.useHistory)();

                function r(e) {
                    e.preventDefault(), !e.target && e.target.value || "" !== e.target.value && n.push(e.target.value)
                }
                return (0, a.useEffect)((function() {
                    t !== e.current.value && "" !== e.current.value && (e.current.value = "")
                }), [t]), (0, b.jsx)("div", {
                    className: "player-base-category-nav",
                    role: "navigation",
                    children: (0, b.jsxs)("div", {
                        className: "inner",
                        children: [(0, b.jsx)("label", {
                            id: "select-label",
                            className: "base-category-title",
                            htmlFor: "base-categories",
                            "aria-label": "Select a channel",
                            children: "Video"
                        }), (0, b.jsxs)("select", {
                            "aria-labelledby": "select-label",
                            onBlur: r,
                            onChange: r,
                            defaultValue: "",
                            name: "base-categories",
                            id: "base-categories",
                            ref: e,
                            children: [(0, b.jsx)("option", {
                                value: "",
                                children: "Channels"
                            }), (0, b.jsx)("option", {
                                value: "/player",
                                children: "Home"
                            }), De.map((function(e) {
                                var t = e.path.startsWith("/") ? e.path : "/player/".concat(e.path);
                                return (0, b.jsx)("option", {
                                    value: t,
                                    children: e.title
                                }, e.title)
                            }))]
                        })]
                    })
                })
            };
            var Ee = n(97767),
                Be = (n(53145), n(62153), n(74621));
            const Me = "shortcutsBarContainer-cfQkD",
                _e = "shortcutsBarNav-p25Ph",
                Ae = "shortcutsBarScrollable-eNTcM",
                Ie = "shortcutsBarCustomize-O1mN0";
            var Te = n(74987),
                Ve = {
                    name: "navigation",
                    instance: "shortcuts-bar"
                },
                Re = "modal",
                We = "shortcuts-bar",
                ze = [{
                    url: "/news/local",
                    external: !1,
                    label: "My Local"
                }, {
                    url: "/sports",
                    external: !1,
                    label: "Sports"
                }, {
                    url: "https://www.cbc.ca/listen",
                    external: !0,
                    label: "CBC Listen"
                }, {
                    url: "https://gem.cbc.ca/",
                    external: !0,
                    label: "CBC Gem"
                }],
                Fe = "CBC_SHORTCUTS_BAR_ITEMS",
                Ge = function() {
                    var e;
                    if ((0, Te.j)() && null !== (e = window) && void 0 !== e && e.localStorage) {
                        var t = window.localStorage.getItem(Fe);
                        if (t) {
                            var n = JSON.parse(t);
                            return ze.filter((function(e) {
                                return n.some((function(t) {
                                    return e.label === t.label
                                }))
                            })).map((function(e, t) {
                                return e
                            }))
                        }
                    }
                    return ze.filter((function(e, t) {
                        return "My Local" === e.label || "Sports" === e.label
                    }))
                },
                qe = n(26896),
                Ke = n(12012);
            const Je = "preferenceDialog-GMvy3",
                Qe = "chipContainer-OnVRz",
                $e = "buttonContainer-C3Ror";
            var Ue = n(93757),
                Xe = n(69378);
            const Ye = {
                chip: "chip-EZdDN",
                chipText: "chipText-nhfFJ",
                active: "active-CKA58",
                enabled: "enabled-kS_WS",
                disabled: "disabled-c8qqy"
            };
            const et = function(e) {
                var t = e.isActive,
                    n = e.iconName,
                    r = e.iconType,
                    a = e.colour,
                    i = e.secondaryColour,
                    o = e.size;
                return t ? (0, b.jsx)(he.Z, {
                    colour: a,
                    secondaryColour: i,
                    name: n,
                    ariaHidden: !0,
                    type: r,
                    size: o
                }) : null
            };
            var tt = n(39416),
                nt = n.n(tt),
                rt = n(6691);
            const at = function(e) {
                var t = e.label,
                    n = e.onClick,
                    i = e.active,
                    o = void 0 !== i && i,
                    l = e.disabled,
                    s = (0, a.useState)(o),
                    c = (0, r.Z)(s, 2),
                    u = c[0],
                    d = c[1],
                    p = nt().bind(Ye)("chip", {
                        active: o
                    }, {
                        disabled: l
                    }, {
                        enabled: !l
                    });
                return (0, b.jsxs)("button", {
                    onClick: function(e) {
                        d(!u), n && n()
                    },
                    className: p,
                    disabled: l,
                    "aria-pressed": u,
                    children: [(0, b.jsx)(et, {
                        isActive: u,
                        iconName: he.d.Check,
                        iconType: "outlined",
                        colour: rt.$.white,
                        secondaryColour: rt.$.black
                    }), (0, b.jsx)("span", {
                        className: Ye.chipText,
                        children: t
                    }), (0, b.jsx)(et, {
                        isActive: u,
                        iconName: he.d.Close,
                        iconType: "filled",
                        colour: rt.$.black,
                        secondaryColour: rt.$.black,
                        size: "16"
                    })]
                })
            };
            const it = function(e) {
                var t = e.preferenceItems;
                return (0, b.jsx)("div", {
                    className: Qe,
                    children: t.map((function(e) {
                        var t = e.label,
                            n = e.active;
                        return (0, b.jsx)(at, {
                            label: t,
                            onClick: function() {
                                e.active = !e.active
                            },
                            disabled: !1,
                            active: n
                        }, "shortcut-chip-".concat(t))
                    }))
                })
            };
            var ot = n(70194);
            const lt = function(e) {
                var t = e.preferenceItems,
                    n = e.isOpen,
                    r = e.resetClickHandler,
                    a = e.saveClickHandler,
                    i = e.closeClickHandler,
                    o = function() {
                        ! function(e) {
                            var t, n = null === e || void 0 === e ? void 0 : e.map((function(e) {
                                return {
                                    label: e.label
                                }
                            }));
                            (0, Te.j)() && null !== (t = window) && void 0 !== t && t.localStorage && localStorage.setItem(Fe, JSON.stringify(n))
                        }(t.filter((function(e) {
                            return e.active
                        }))), a()
                    },
                    l = {
                        title: "My Shortcuts",
                        backgroundColor: Xe.Z.neutral20
                    };
                return (0, b.jsx)(Ue.Z, {
                    isOpen: n,
                    handleClose: i,
                    type: ot.Q.MODAL_WITH_TITLE_AND_CLOSE,
                    propsForModalType: l,
                    children: (0, b.jsxs)("div", {
                        className: Je,
                        children: [(0, b.jsx)(it, {
                            preferenceItems: t
                        }), (0, b.jsxs)("div", {
                            className: $e,
                            children: [(0, b.jsx)(qe.Z, {
                                type: Ke.q.TextButton,
                                variant: "outlined",
                                label: "Reset All",
                                onClick: r
                            }), (0, b.jsx)(qe.Z, {
                                type: Ke.q.TextButton,
                                variant: "filled",
                                label: "Save & Close",
                                onClick: function() {
                                    return o()
                                }
                            })]
                        })]
                    })
                })
            };
            var st = function(e) {
                return e.BLACKANDWHITE = "blackAndWhite", e
            }({});
            const ct = "maskScrollerOuter-AqlWJ",
                ut = "maskScrollerInner-dCq3_";
            const dt = function(e) {
                var t = e.internalMargin,
                    n = e.children,
                    r = {
                        "--internalMargin": t
                    };
                return (0, b.jsx)("div", {
                    className: ct,
                    style: r,
                    children: (0, b.jsx)("div", {
                        className: ut,
                        children: n
                    })
                })
            };
            const pt = function() {
                var e = (0, a.useState)([]),
                    t = (0, r.Z)(e, 2),
                    n = t[0],
                    o = t[1],
                    l = (0, a.useState)(!1),
                    s = (0, r.Z)(l, 2),
                    c = s[0],
                    u = s[1],
                    d = (0, i.useSelector)((function(e) {
                        return e.app.path
                    })),
                    p = function() {
                        u(!1)
                    },
                    f = (0, a.useCallback)((function() {
                        var e = Ge();
                        o((0, U.Z)(e))
                    }), []);
                return (0, a.useEffect)((function() {
                    f()
                }), [f]), "homepage" !== d ? null : (0, b.jsxs)("div", {
                    className: Me,
                    "aria-label": "Customizable menu",
                    children: [(0, b.jsxs)("div", {
                        className: _e,
                        children: [(0, b.jsx)("div", {
                            className: Ae,
                            children: (0, b.jsx)(dt, {
                                internalMargin: "40px",
                                children: (0, b.jsx)(Be.Z, {
                                    theme: st.BLACKANDWHITE,
                                    iconColour: rt.$.white,
                                    links: n,
                                    featureAttribution: Ve,
                                    useInternalScroll: !1
                                })
                            })
                        }), (0, b.jsx)("div", {
                            className: Ie,
                            children: (0, b.jsx)(qe.Z, {
                                type: Ke.q.IconButton,
                                name: he.d.Customize,
                                size: "18",
                                label: "Customize",
                                variant: "dark",
                                onClick: function() {
                                    (0, ye.EF)(Re, !1, void 0, We), u(!0)
                                }
                            })
                        })]
                    }), (0, b.jsx)(lt, {
                        title: "My Shortcuts",
                        preferenceItems: ze.map((function(e) {
                            return {
                                label: e.label,
                                active: n.some((function(t) {
                                    return t.label === e.label
                                })),
                                disabled: !1
                            }
                        })),
                        isOpen: c,
                        resetClickHandler: function() {
                            ! function() {
                                var e;
                                (0, Te.j)() && null !== (e = window) && void 0 !== e && e.localStorage && window.localStorage.removeItem(Fe)
                            }(), p(), f()
                        },
                        saveClickHandler: function() {
                            p(), f()
                        },
                        closeClickHandler: p
                    })]
                })
            };

            function ft(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function vt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ft(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ft(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var bt = function(e) {
                var t = e.viewport,
                    n = void 0 === t ? "" : t,
                    r = e.isDetail,
                    o = void 0 !== r && r,
                    l = e.menuOpen,
                    s = void 0 !== l && l,
                    u = (0, i.useSelector)((function(e) {
                        return e.app.baseNavSection
                    })),
                    d = (0, i.useSelector)((function(e) {
                        return e.app.subSection
                    })),
                    p = (0, i.useSelector)((function(e) {
                        return e.app.path
                    })),
                    f = (0, i.useSelector)((function(e) {
                        return e.app.contentId
                    })),
                    v = function() {
                        var e = "gem-".concat(u),
                            t = d ? (0, W.Q7)(p) : null,
                            n = t ? t.title : "",
                            r = Ee.SA[u] ? u : null,
                            a = u;
                        n ? (a = n, r = (r = n).replace(" & ", "").replace(/ /g, "").replace("-", "")) : Ee.SA[u] && Ee.SA[u].title && (a = Ee.SA[u].title);
                        var i = V.tp[u],
                            l = "/".concat(i || u),
                            s = n ? (0, W.eE)(p, l) : l,
                            f = o ? "" : d,
                            v = {
                                className: c()("subSectionLogo", u, f),
                                section: r,
                                title: a
                            },
                            h = n ? (0, W.C_)("region", n) : "",
                            m = c()("navLink subNavLink", h, {
                                regionName: n
                            });
                        return (0, b.jsx)("div", {
                            className: "gemSectionLink",
                            id: "section-link-title",
                            children: (0, b.jsxs)(g.default, {
                                className: m,
                                url: s,
                                external: !1,
                                children: [(0, b.jsx)("span", {
                                    className: "a11y",
                                    children: a
                                }), (0, b.jsx)(ae.default, vt({}, v))]
                            }, "".concat(e, "-link"))
                        }, e)
                    };
                return (0, b.jsxs)(a.Fragment, {
                    children: [!s && (0, b.jsx)(pt, {}), function() {
                        var e = u.indexOf("television") > -1 ? "tv" : u;
                        return void 0 !== V.O0[e] ? (0, b.jsx)(q, {
                            baseNavSection: e,
                            subSection: d,
                            path: p,
                            viewport: n,
                            isDetail: o,
                            gemDepartment: v(),
                            regionObject: (0, W.Q7)(p),
                            hasTertiaryNav: null !== ie(p)
                        }) : null
                    }(), ie(p) ? (0, b.jsx)($, {
                        baseNavSection: u,
                        subSection: d,
                        path: p,
                        items: ie(p),
                        viewport: n,
                        contentId: f
                    }) : null, (0, b.jsx)(ge.Switch, {
                        children: (0, b.jsx)(Le.default, {
                            path: "/player",
                            component: Ze
                        })
                    })]
                })
            };
            bt.propTypes = {
                viewport: l().string,
                isDetail: l().bool
            };
            const ht = bt;
            var mt = n(75854),
                jt = n(44192),
                yt = n(97883),
                gt = n(71063),
                xt = n(3623),
                Ot = n(27287),
                wt = n(39420),
                Ct = n(41915),
                Nt = n(92269),
                St = n(21494);
            const kt = "newsLineupContainer-DJXo0";
            const Pt = function() {
                    var e = (0, i.useSelector)((function(e) {
                            var t;
                            return null === e || void 0 === e || null === (t = e.singleLineup) || void 0 === t ? void 0 : t.content
                        })),
                        t = (0, i.useSelector)((function(e) {
                            return St.bg[e.app.path]
                        })),
                        n = {
                            name: "card-grid",
                            columns: 5,
                            variant: wt.v.TEXT_WITH_LINK,
                            loadMore: {
                                enabled: !1
                            },
                            isFlexible: !1
                        },
                        r = {
                            id: "news-bar-more",
                            title: t.moreCardTitle || "More from CBC News",
                            url: t.url,
                            external: !1,
                            variant: wt.v.TEXT_WITH_LINK_AND_ICON
                        },
                        o = (0, a.useRef)(),
                        l = (0, Nt.Z)(o, f.ln),
                        s = [].concat((0, U.Z)(e), [r]);
                    l === f.ln && (s.splice(4), n.columns = 4);
                    return (0, b.jsx)("div", {
                        className: kt,
                        children: (0, b.jsx)(Ct.Z, {
                            featureAttributionData: {
                                name: "swimlane",
                                instance: "news-bar"
                            },
                            layout: n,
                            items: s
                        })
                    })
                },
                Ht = "newsBarContainer-Y2LXR",
                Lt = "newsBarInner-NZMGP",
                Dt = "newsBarHeader-hw9o7";

            function Zt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zt(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const Bt = function() {
                var e, t = (0, i.useSelector)((function(e) {
                        return e.app.path
                    })),
                    n = (0, i.useSelector)((function(e) {
                        return e.singleLineup
                    }));
                return Object.keys(St.bg).includes(t) && null !== n && void 0 !== n && null !== (e = n.content) && void 0 !== e && e.length ? (0, b.jsx)("div", {
                    className: Ht,
                    "data-cy": "newsbar",
                    children: (0, b.jsxs)("div", {
                        className: Lt,
                        children: [(0, b.jsxs)(Ot.Z, Et(Et({
                            url: St.bg[t].url,
                            className: Dt
                        }, (0, x.Z)({
                            name: "swimlane",
                            instance: "news-bar",
                            position: 0
                        })), {}, {
                            children: [(0, b.jsx)("span", {
                                children: "Latest News "
                            }), (0, b.jsx)(he.Z, {
                                colour: rt.$.red500,
                                name: "Arrow",
                                size: "24"
                            })]
                        })), (0, b.jsx)(Pt, {})]
                    })
                }) : null
            };
            var Mt = (0, a.lazy)((function() {
                    return (0, yt.Z)(gt.Y.RemoteAccountNav)
                })),
                _t = function(e) {
                    var t = e.isDetail,
                        n = void 0 !== t && t,
                        o = e.viewport,
                        l = void 0 === o ? "viewportLarge" : o,
                        s = e.route,
                        d = e.maintenance,
                        p = void 0 !== d && d,
                        v = (0, a.useState)(!1),
                        h = (0, r.Z)(v, 2),
                        m = h[0],
                        j = h[1],
                        y = (0, we.Z)(),
                        g = (0, i.useSelector)((function(e) {
                            return e.app.baseNavSection
                        })),
                        x = (0, i.useSelector)((function(e) {
                            return e.fixed
                        })),
                        O = (0, a.useRef)(null),
                        w = (0, i.useSelector)((function(e) {
                            return e.persistentPlayer.isVisible && e.persistentPlayer.selector === mt.IL
                        })),
                        C = (0, i.useSelector)((function(e) {
                            var t, n;
                            return "search" === e.app.path && void 0 !== (null === (t = e.search) || void 0 === t ? void 0 : t.searchTerm) && "" !== (null === (n = e.search) || void 0 === n ? void 0 : n.searchTerm)
                        }));
                    (0, a.useEffect)((function() {
                        var e;
                        null === (e = O.current) || void 0 === e || e.focus()
                    }), [C, null === s || void 0 === s ? void 0 : s.path]);
                    var N = function(e) {
                        j(e), f.ZP.updateBodyScrollState(e)
                    };
                    if (null !== x && void 0 !== x && x.isWebView) return null;
                    if (null !== s && void 0 !== s && s.path.startsWith(V.s5)) return (0, b.jsx)(be, {
                        path: s.path
                    });
                    var S = c()("globalHeader", l, (0, W.C_)("", g, "Header", !1), {
                            open: m,
                            "introjs-fixParent": "undefined" !== typeof document && document.body.classList.contains("onboarding")
                        }),
                        k = null === s || void 0 === s ? void 0 : s.path.startsWith(V.mQ);
                    return (0, b.jsxs)("header", {
                        className: S,
                        children: [(0, b.jsx)("div", {
                            className: "viafoura",
                            style: {
                                height: 0,
                                minHeight: 0
                            },
                            children: (0, b.jsx)("vf-tray", {})
                        }), (0, b.jsx)("a", {
                            href: "#content",
                            className: "a11y",
                            ref: O,
                            children: "Content"
                        }), k ? (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsx)(u.Z, {
                                linkHref: "#content",
                                displayHelpLink: !0,
                                isGlobalSkipLink: !0
                            }), (0, b.jsx)(jt.default, {
                                fallback: (0, b.jsx)(He, {
                                    menuOpen: m,
                                    setMenuOpen: N,
                                    viewport: l,
                                    isFallback: !0
                                }),
                                children: (0, b.jsx)(xt.Z, {
                                    value: y,
                                    children: (0, b.jsx)(a.Suspense, {
                                        children: (0, b.jsx)(Mt, {
                                            path: s.path,
                                            search: s.search
                                        })
                                    })
                                })
                            })]
                        }) : (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsx)(u.Z, {
                                linkHref: C ? "#searchMainContent" : "#content",
                                displayHelpLink: !0,
                                isGlobalSkipLink: !0
                            }), w ? (0, b.jsx)(u.Z, {
                                linkText: "Skip to Media Player",
                                linkHref: "#persistent-player",
                                isGlobalSkipLink: !0
                            }) : null, (0, b.jsx)(He, {
                                menuOpen: m,
                                setMenuOpen: N,
                                viewport: l
                            }), !p && (0, b.jsx)(ht, {
                                viewport: l,
                                isDetail: n,
                                menuOpen: m
                            }), !m && (0, b.jsx)(Bt, {})]
                        })]
                    })
                };
            _t.propTypes = {
                isDetail: l().bool,
                viewport: l().string,
                route: l().object
            };
            const At = _t
        },
        2557: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => i
            });
            var r = n(51341),
                a = (0, r.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "Logos"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(7270), n.e(6284), n.e(6563), n.e(8382), n.e(8922), n.e(7673)]).then(n.bind(n, 29408))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 29408
                    }
                });
            a.preload();
            const i = a
        },
        74621: (e, t, n) => {
            n.d(t, {
                Z: () => w
            });
            var r = n(4942),
                a = (n(9867), n(7231), n(58109), n(95566), n(68438), n(83464), n(19496), n(35098), n(39416)),
                i = n.n(a),
                o = n(6691),
                l = n(66240),
                s = n(26896),
                c = n(12012),
                u = n(56552);
            const d = function(e) {
                var t = e.label,
                    n = e.onClick,
                    r = e.size,
                    a = void 0 === r ? "24" : r,
                    i = e.variant,
                    d = void 0 === i ? "filled" : i,
                    p = e.orientation,
                    f = void 0 === p ? "" : p,
                    v = e.theme,
                    b = void 0 === v ? "" : v,
                    h = e.type,
                    m = void 0 === h ? c.q.LabelledIconButton : h,
                    j = e.shape,
                    y = void 0 === j ? c.m.TextButtonRect : j,
                    g = e.name,
                    x = void 0 === g ? l.d.Add : g,
                    O = e.iconColour,
                    w = void 0 === O ? o.$.black : O,
                    C = e.ariaPressed,
                    N = void 0 !== C && C,
                    S = function() {
                        return (0, u.jsx)(s.Z, {
                            type: c.q.LabelledIconButton,
                            name: x,
                            label: t,
                            onClick: function() {
                                return n()
                            },
                            size: a,
                            orientation: f,
                            theme: b,
                            iconColour: w
                        })
                    },
                    k = function() {
                        return (0, u.jsx)(s.Z, {
                            type: c.q.TextButton,
                            shape: y,
                            label: t,
                            onClick: function() {
                                return n()
                            },
                            variant: d,
                            ariaPressed: N
                        })
                    };
                return m === c.q.LabelledIconButton ? (0, u.jsx)(S, {}) : (0, u.jsx)(k, {})
            };
            var p = n(45987),
                f = n(27287);
            const v = {
                navigation__navLink: "navigation__navLink-JkSdI",
                horizontalNav: "horizontalNav-K6bCr",
                blackAndWhite: "blackAndWhite-Jj5BV"
            };
            var b = ["label", "url", "external", "featureAttribution", "orientation", "theme"];

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const j = function(e) {
                    var t = e.label,
                        n = e.url,
                        a = e.external,
                        o = e.featureAttribution,
                        l = e.orientation,
                        s = void 0 === l ? "" : l,
                        c = e.theme,
                        d = void 0 === c ? "" : c,
                        h = (0, p.Z)(e, b),
                        j = i().bind(v)((0, r.Z)((0, r.Z)({
                            navigation__navLink: !0
                        }, s, !!s), d, !!d));
                    return (0, u.jsx)("span", {
                        className: j,
                        children: (0, u.jsx)(f.Z, m(m({
                            url: n,
                            external: a,
                            featureAttribution: o
                        }, h), {}, {
                            children: t
                        }))
                    })
                },
                y = {
                    navigation: "navigation-oC0T1",
                    useInternalScroll: "useInternalScroll-Jit4l",
                    horizontalNav: "horizontalNav-FyUga",
                    blackAndWhite: "blackAndWhite-dFGRd"
                };

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var O = function(e) {
                return "size" in e
            };
            const w = function(e) {
                var t = e.links,
                    n = e.orientation,
                    a = void 0 === n ? "horizontalNav" : n,
                    l = e.theme,
                    s = void 0 === l ? "" : l,
                    c = e.iconColour,
                    p = void 0 === c ? o.$.black : c,
                    f = e.featureAttribution,
                    v = e.useInternalScroll,
                    b = void 0 === v || v,
                    h = null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                        var n = {
                            instance: null === f || void 0 === f ? void 0 : f.instance,
                            name: null === f || void 0 === f ? void 0 : f.name,
                            position: (t + 1).toString(),
                            value: null === e || void 0 === e ? void 0 : e.label
                        };
                        return (0, u.jsxs)("li", {
                            children: [O(e) && (0, u.jsx)(d, x({
                                orientation: a,
                                theme: s,
                                iconColour: p
                            }, e)), !O(e) && (0, u.jsx)(j, x({
                                orientation: a,
                                theme: s,
                                featureAttribution: n
                            }, e))]
                        }, "horizontalNav-link-".concat(e.label))
                    })),
                    m = i().bind(y)((0, r.Z)((0, r.Z)((0, r.Z)({
                        navigation: !0
                    }, a, !!a), s, !!s), "useInternalScroll", b));
                return (0, u.jsx)("nav", {
                    className: m,
                    children: (0, u.jsx)("ul", {
                        children: h
                    })
                })
            }
        },
        3663: (e, t, n) => {
            n.d(t, {
                Sq: () => l,
                bT: () => a,
                gQ: () => i,
                wF: () => o,
                wl: () => r
            });
            var r = "Sponsor Content",
                a = "Advertorial from",
                i = "Paid Content",
                o = "https://solutionsmedia.cbcrc.ca/en/page/paid-content-at-cbc",
                l = "This content was paid for by an advertiser. This is not CBC journalistic content. Click here to learn more about our branded content guidelines."
        },
        46924: (e, t, n) => {
            n.d(t, {
                Hv: () => a,
                ek: () => i,
                z: () => o
            });
            var r = n(3663);

            function a(e) {
                return e && e.label && !(e.label === r.wl) && !i(e.label)
            }

            function i(e) {
                return e === r.bT
            }

            function o(e) {
                return e === r.wl ? "".concat(r.gQ, " with") : e
            }
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-GlobalHeader.579528303da185951ed0.js.map