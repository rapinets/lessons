! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1d05b08b-66b7-482e-b24e-22cd2d4a59be", e._sentryDebugIdIdentifier = "sentry-dbid-1d05b08b-66b7-482e-b24e-22cd2d4a59be")
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
    [9351], {
        19328: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(14507),
                o = n.n(r),
                a = n(56552);
            const i = function(e) {
                var t = e.linkHref,
                    n = void 0 === t ? "#content" : t,
                    r = e.linkText,
                    i = void 0 === r ? "Skip to Main Content" : r,
                    c = e.displayHelpLink,
                    s = e.isGlobalSkipLink,
                    l = o()("accessibilityLinks", {
                        globalSkipLink: s
                    });
                return (0, a.jsxs)("div", {
                    className: l,
                    children: [(0, a.jsx)("a", {
                        className: "accessibilitySkipLink",
                        href: n,
                        children: i
                    }), c && (0, a.jsx)("a", {
                        className: "accessibilityHelpLink",
                        href: "/accessibility",
                        children: "Accessibility Help"
                    })]
                })
            }
        },
        12077: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(51341),
                o = (0, r.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "AsyncContentArea"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(9947).then(n.bind(n, 31494))
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
                        return 31494
                    }
                });
            const a = o
        },
        65393: (e, t, n) => {
            n.d(t, {
                ZP: () => S,
                Pb: () => j,
                E4: () => w
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(29439),
                o = n(4942),
                a = (n(9867), n(7231), n(92972)),
                i = n.n(a),
                c = n(35098),
                s = n(85161),
                l = n(26574),
                u = n(14507),
                d = n.n(u),
                f = n(10947),
                p = n(56552);

            function v(e, t) {
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
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = function(e) {
                var t = e.baseNavSection,
                    n = void 0 === t ? "" : t,
                    o = e.subSection,
                    a = void 0 === o ? "" : o,
                    i = e.allHidden,
                    u = void 0 !== i && i,
                    v = e.moreButtonLabel,
                    b = e.isExternalHeader,
                    g = void 0 !== b && b,
                    h = e.id,
                    y = void 0 === h ? "more-items-list" : h,
                    O = e.path,
                    w = e.items,
                    j = (0, c.useState)(!1),
                    N = (0, r.Z)(j, 2),
                    S = N[0],
                    x = N[1],
                    k = (0, c.useRef)();
                (0, c.useEffect)((function() {
                    x(!1)
                }), [O]);
                var E = (0, c.useCallback)((function() {
                        x(!S)
                    }), [S]),
                    _ = function(e) {
                        var t;
                        "Escape" === e.key && (x(!1), null === (t = k.current) || void 0 === t || t.focus())
                    },
                    P = "",
                    I = d()("moreItemsNav", {
                        open: S,
                        external: g
                    }),
                    L = (0, c.useRef)(null),
                    D = function(e) {
                        var t;
                        null !== L && void 0 !== L && null !== (t = L.current) && void 0 !== t && t.contains(e.relatedTarget) || x(!1)
                    };
                return w && void 0 !== w && (P = w.map((function(e, t) {
                    var n = {
                        item: e,
                        key: "morenav-".concat(t),
                        path: O,
                        className: "moreNavListItem",
                        linkClassName: "moreNavLink",
                        onBlur: D,
                        keyUpHandler: _
                    };
                    return t === w.length - 1 && (n.ariaLabel = "End of list"), (0, p.jsx)(f.Z, m(m({}, n), {}, {
                        toggleMenuVisibility: E
                    }))
                }))), (0, p.jsxs)("div", {
                    className: I,
                    "data-cy": "more-items-nav",
                    children: [function() {
                        var e = u ? "Sections" : "More";
                        v && (e = v);
                        var t = "".concat(e, " from ").concat(n, " ").concat(a || "");
                        if (g) {
                            var r = "//www.cbc.ca/".concat(n);
                            return (0, p.jsxs)(l.default, {
                                className: "navLink subNavLink",
                                url: r,
                                external: !0,
                                children: [" ", e, " \xbb", " "]
                            })
                        }
                        return (0, p.jsxs)("button", {
                            className: "moreButton",
                            "aria-label": t,
                            "aria-expanded": S,
                            "aria-controls": y,
                            onClick: E,
                            onKeyUp: _,
                            ref: k,
                            "data-cy": "more-button",
                            children: [e, " ", (0, p.jsx)(s.default, {
                                type: "chevron"
                            })]
                        })
                    }(), (0, p.jsx)("ul", {
                        className: "moreItemsList",
                        "data-cy": "more-items-list",
                        id: y,
                        "aria-hidden": !S,
                        ref: L,
                        children: P
                    })]
                })
            };
            b.propTypes = {
                baseNavSection: i().string,
                subSection: i().string,
                allHidden: i().bool,
                moreButtonLabel: i().string,
                isExternalHeader: i().bool,
                id: i().string
            };
            const g = b;
            var h = n(75564);

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var w = function(e, t) {
                    var n = t.value,
                        r = t.index,
                        o = t.isVisible,
                        a = {
                            item: n,
                            index: r,
                            className: d()("subNavListItem", {
                                standAlone: void 0 !== t.standAlone,
                                hidden: !o
                            }),
                            linkClassName: d()("subNavLink", {
                                firstItem: 0 === r
                            }),
                            path: e.path,
                            isExternalHeader: e.isExternalHeader
                        };
                    return (0, p.jsx)(f.Z, O({}, a), "responsive-".concat(r))
                },
                j = function(e, t, n, r) {
                    var o = {
                            items: t,
                            baseNavSection: e.baseNavSection,
                            subSection: e.subSection,
                            path: e.path,
                            allHidden: r,
                            moreButtonLabel: e.moreButtonLabel,
                            isExternalHeader: e.isExternalHeader,
                            id: e.id + "-more-items-list"
                        },
                        a = d()("subNavListItem", "moreNavTrigger", {
                            active: n && t && t.length
                        });
                    return (0, p.jsx)("li", {
                        className: a,
                        children: (0, p.jsx)(g, O({}, o))
                    })
                },
                N = function(e) {
                    var t = e.items,
                        n = void 0 === t ? null : t,
                        o = e.baseNavSection,
                        a = void 0 === o ? "" : o,
                        i = e.subSection,
                        s = void 0 === i ? "" : i,
                        l = e.path,
                        u = void 0 === l ? "" : l,
                        f = e.className,
                        v = e.viewport,
                        m = void 0 === v ? "" : v,
                        b = e.collapseOnMobile,
                        g = void 0 === b || b,
                        y = e.gemDepartment,
                        O = void 0 === y ? null : y,
                        N = e.moreButtonLabel,
                        S = void 0 === N ? "" : N,
                        x = e.isExternalHeader,
                        k = void 0 !== x && x,
                        E = e.id,
                        _ = void 0 === E ? "responsive-nav" : E,
                        P = (0, c.useState)(!0),
                        I = (0, r.Z)(P, 2),
                        L = I[0],
                        D = I[1],
                        H = (0, h.d)(n, u, {
                            collapseOnMobile: g
                        }),
                        M = H.assignRef,
                        A = H.getHiddenItemsCount;
                    (0, c.useEffect)((function() {
                        D(!1)
                    }), []);
                    var C = A(),
                        R = "",
                        Z = "viewportSmall" === m,
                        T = Z ? n : null,
                        U = 0,
                        K = !0;
                    n && !Z && (U = n.length - C, T = n.slice(U, n.length), R = n.map((function(e, t) {
                        return C && (K = t < U), w({
                            path: u,
                            isExternalHeader: k
                        }, {
                            value: e,
                            index: t,
                            isVisible: K
                        })
                    })));
                    var B = d()("responsiveNav subNavList", f, {
                            allHidden: Z || !U,
                            overflowHidden: L
                        }),
                        F = O ? (0, p.jsx)("li", {
                            className: "gemWrapper subNavListItem",
                            children: O
                        }) : null;
                    return (0, p.jsxs)("ul", {
                        className: B,
                        ref: function(e) {
                            return M(e)
                        },
                        children: [F, R, j({
                            baseNavSection: a,
                            subSection: s,
                            path: u,
                            moreButtonLabel: S,
                            isExternalHeader: k,
                            id: _
                        }, T, C, Z)]
                    })
                };
            N.propTypes = {
                items: i().array,
                baseNavSection: i().string,
                subSection: i().string,
                path: i().string,
                className: i().string,
                viewport: i().string,
                collapseOnMobile: i().bool,
                gemDepartment: i().object,
                moreButtonLabel: i().string,
                isExternalHeader: i().bool,
                id: i().string
            };
            const S = N
        },
        87166: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(14191),
                o = n(56552);
            const a = function(e) {
                var t = e.children,
                    n = e.statusCode,
                    a = void 0 === n ? 200 : n,
                    i = e.polopolyId;
                return 2 !== (a / 100 | 0) ? (0, o.jsx)(r.default, {
                    statusCode: a,
                    polopolyId: i
                }) : t
            }
        },
        10947: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                o = n(92972),
                a = n.n(o),
                i = n(14507),
                c = n.n(i),
                s = n(26574),
                l = n(88101),
                u = n(56552);

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function p(e) {
                var t = e.item,
                    n = e.index,
                    r = void 0 === n ? "" : n,
                    o = e.className,
                    a = e.linkClassName,
                    i = e.path,
                    d = void 0 === i ? "" : i,
                    p = e.clickHandler,
                    v = void 0 === p ? function() {} : p,
                    m = e.isExternalHeader,
                    b = void 0 !== m && m,
                    g = e.toggleMenuVisibility,
                    h = void 0 === g ? function() {} : g,
                    y = e.onBlur,
                    O = e.keyUpHandler,
                    w = e.ariaLabel,
                    j = t.link,
                    N = t.type,
                    S = t.title,
                    x = "link-".concat(r),
                    k = void 0 !== N && "external" === N || b,
                    E = j === "/".concat(d),
                    _ = null,
                    P = c()("navItem", o, {
                        standAlone: void 0 !== t.standAlone
                    }),
                    I = w ? {
                        "aria-label": "".concat(S, " ").concat(w)
                    } : {},
                    L = c()("navLink", a, (0, l.C_)("nav", S), {
                        selected: E
                    }),
                    D = void 0 === t.data ? {} : t.data,
                    H = "navItem".concat(S);
                if (E) _ = (0, u.jsxs)("span", f(f({
                    className: L
                }, I), {}, {
                    "data-cy": H,
                    children: [(0, u.jsxs)("span", {
                        className: "a11y",
                        children: ["Currently Selected: ", S]
                    }), (0, u.jsx)("span", {
                        "aria-hidden": "true",
                        children: S
                    })]
                }), x);
                else if ("asset" === N) _ = (0, u.jsx)("a", f(f({
                    className: L,
                    href: j,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onKeyUp: O
                }, I), {}, {
                    "data-cy": H,
                    children: S
                }), x);
                else {
                    var M = h,
                        A = t.clickHandler || v,
                        C = {
                            className: L,
                            key: x,
                            url: b ? (0, l.ch)(t.link) : t.link,
                            external: k,
                            onClick: function(e) {
                                M(), A(e)
                            },
                            onKeyUp: O,
                            "data-cy": H
                        };
                    y && (C.onBlur = y), _ = (0, u.jsx)(s.default, f(f(f(f({}, C), D), I), {}, {
                        children: S
                    }))
                }
                return (0, u.jsx)("li", {
                    className: P,
                    "data-cy": "nav-item",
                    children: _
                }, "li-".concat(S, "-").concat(r))
            }
            p.propTypes = {
                item: a().object.isRequired,
                index: a().node,
                className: a().string,
                linkClassName: a().string,
                path: a().string,
                clickHandler: a().func,
                isExternalHeader: a().bool,
                toggleMenuVisibility: a().func,
                onBlur: a().func
            };
            const v = p
        },
        69422: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => r.Z
            });
            var r = n(22417)
        },
        40238: (e, t, n) => {
            n.d(t, {
                Z: () => w
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                o = n(92972),
                a = n.n(o),
                i = n(14507),
                c = n.n(i),
                s = n(65393),
                l = n(2902),
                u = n(26574),
                d = n(82019),
                f = n(88101),
                p = [300, 460, 620, 780, 1180],
                v = "original",
                m = n(56552);

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

            function g(e) {
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

            function h(e) {
                var t = e.showName,
                    n = void 0 === t ? "" : t,
                    r = e.hostName,
                    o = void 0 === r ? "" : r,
                    a = e.imageUrl,
                    i = void 0 === a ? "" : a,
                    l = e.navigation,
                    u = void 0 === l ? [] : l,
                    p = e.path,
                    v = void 0 === p ? "" : p,
                    b = e.baseSection,
                    h = void 0 === b ? "" : b,
                    w = e.subSection,
                    j = void 0 === w ? "" : w,
                    N = e.hasMenu,
                    S = void 0 === N || N,
                    x = e.showImage,
                    k = void 0 === x || x,
                    E = e.noHeading,
                    _ = void 0 === E || E,
                    P = e.imageLink,
                    I = e.description,
                    L = o.trim() ? "with ".concat(o.trim()) : "",
                    D = null;
                if (u.length && S) {
                    var H = {
                        collapseOnMobile: !1,
                        items: u,
                        path: v,
                        className: "introNav",
                        id: "page-intro-nav"
                    };
                    D = (0, m.jsx)(s.ZP, g({}, H))
                }
                var M = "";
                n && (M = (0, f.C_)("show", n));
                var A = "introNav-".concat(h, "-").concat(j),
                    C = c()("pageIntro", M, A),
                    R = _ ? null : (0, m.jsx)(d.CD, {
                        hidden: !0,
                        text: "".concat(n, " ").concat(L)
                    });
                return (0, m.jsxs)("div", {
                    className: C,
                    children: [R, y({
                        showImage: k,
                        imageUrl: i,
                        imageLink: P
                    }), D || O(I)]
                })
            }

            function y(e) {
                if (!1 === e.showImage) return null;
                var t = {
                        url: e.imageUrl,
                        derivativeWidths: p,
                        sizesRatio: v,
                        loading: null,
                        type: "host-image",
                        useoriginalimage: !1,
                        isAboveFold: !0
                    },
                    n = null;
                return e.imageUrl && (n = (0, m.jsx)(l.Z, g({}, t))), e.imageLink ? (0, m.jsx)(u.default, {
                    url: e.imageLink,
                    children: n
                }) : n
            }

            function O(e) {
                if (e) return (0, m.jsx)("div", {
                    className: "description",
                    children: e
                })
            }
            h.propTypes = {
                showName: a().string,
                hostName: a().string,
                imageUrl: a().string,
                navigation: a().array,
                path: a().string,
                baseSection: a().string,
                subSection: a().string,
                hasMenu: a().bool,
                showImage: a().bool,
                noHeading: a().bool
            };
            const w = h
        },
        71063: (e, t, n) => {
            n.d(t, {
                l: () => o,
                Y: () => a
            });
            var r = n(74987),
                o = {
                    scope: "membership",
                    publicPath: function() {
                        var e, t = (0, r.s)() ? process.env.ACC_ENV : null === (e = window) || void 0 === e ? void 0 : e.__ACC_ENV__;
                        return t && "local" === t ? "https://local.cbc.ca:448/a" : t && t.length > 0 ? t : "https://www.cbc.ca/account-centre/a"
                    }(),
                    remoteEntryPath: "scripts/remoteEntry.js",
                    sentryScopeId: "scope-account-centre"
                },
                a = {
                    setPublicPath: {
                        moduleName: "./public-path",
                        exportName: "set"
                    },
                    loadLoginRadius: {
                        moduleName: "./utilsLibraryIndex",
                        exportName: "loadLoginRadius"
                    },
                    initMembershipStore: {
                        moduleName: "./utilsLibraryIndex",
                        exportName: "initMembershipStore"
                    },
                    getSessionToken: {
                        moduleName: "./utilsLibraryActions",
                        exportName: "getSessionToken"
                    },
                    checkLoggedInStatus: {
                        moduleName: "./actions",
                        exportName: "checkLoggedInStatus"
                    },
                    validateAccessToken: {
                        moduleName: "./actions",
                        exportName: "validateAccessToken"
                    },
                    logout: {
                        moduleName: "./actions",
                        exportName: "logout"
                    },
                    RemoteAccountNav: {
                        moduleName: "./RemoteAccountNav"
                    },
                    RemotePageAccount: {
                        moduleName: "./RemotePageAccount"
                    }
                }
        },
        51391: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(29439),
                o = n(35098);

            function a() {
                var e = (0, o.useState)(!1),
                    t = (0, r.Z)(e, 2),
                    n = t[0],
                    a = t[1],
                    i = (0, o.useTransition)(),
                    c = (0, r.Z)(i, 2)[1];
                return (0, o.useEffect)((function() {
                    c((function() {
                        a(!0)
                    }))
                }), []), n
            }
        },
        23964: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(35098),
                o = n(42820);
            const a = function(e, t) {
                var n = (0, o.useSelector)((function(e) {
                        return e.app.path
                    })),
                    a = decodeURIComponent(n.toLocaleLowerCase()),
                    i = decodeURIComponent(e.url.toLocaleLowerCase());
                (0, r.useEffect)((function() {
                    "/".concat(a) !== i && t && t()
                }), [e.url])
            }
        },
        75564: (e, t, n) => {
            n.d(t, {
                d: () => i
            });
            var r = n(29439),
                o = n(35098),
                a = n(79532),
                i = function(e, t) {
                    var n, i, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        s = null === (n = c.collapseOnMobile) || void 0 === n || n,
                        l = null !== (i = c.usingRightSideNav) && void 0 !== i && i,
                        u = (0, o.useState)(0),
                        d = (0, r.Z)(u, 2),
                        f = d[0],
                        p = d[1],
                        v = (0, o.useRef)({
                            domNode: null,
                            callback: m,
                            isInDOM: !1,
                            windowWidth: 0,
                            timeoutID: null,
                            wallpaperWidth: 0
                        });
                    (0, o.useEffect)((function() {
                        return v.current.isInDOM = !0, v.current.domNode && a.ZP.registerResizeObject(v.current),
                            function() {
                                v.current && (v.current.isInDOM = !1, a.ZP.unregisterResizeObject(v.current), window.cancelAnimationFrame(v.current.timeoutID))
                            }
                    }), []), (0, o.useEffect)((function() {
                        m(0, {
                            usingRightSideNav: l
                        })
                    }), [t, e]), (0, o.useEffect)((function() {
                        v.current.callback = function() {
                            return m(0, {
                                usingRightSideNav: l
                            })
                        }
                    }), [f]);

                    function m() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).usingRightSideNav,
                            n = void 0 !== t && t;
                        e = v.current.wallpaperWidth > 0 ? v.current.wallpaperWidth : document.documentElement.clientWidth, v.current.timeoutID = window.requestAnimationFrame((function() {
                            var t = v.current.domNode;
                            if (t && v.current.isInDOM && t.offsetWidth) {
                                var r = 0;
                                n && (r = t.children[t.children.length - 1].offsetWidth);
                                var o = a.ZP.calculateHiddenItems(t, s, e, r);
                                f !== o && p(o), v.current.windowWidth = e
                            }
                        }))
                    }
                    return {
                        assignRef: function(e) {
                            v.current.domNode = e
                        },
                        getHiddenItemsCount: function() {
                            return f
                        }
                    }
                }
        },
        14191: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => s
            });
            var r = n(14507),
                o = n.n(r),
                a = n(47452),
                i = n(90955),
                c = n(56552);

            function s(e) {
                var t = e.statusCode,
                    n = void 0 === t ? a.k6 : t,
                    r = e.polopolyId,
                    s = !(n !== a.Iz && n !== a.Ey || !r) && "https://www.cbc.ca/lite/story/".concat(r);
                return (0, c.jsxs)("div", {
                    className: o()("errorPage", i.Oo),
                    "data-cy": "error-page",
                    children: [(0, c.jsx)("div", {
                        className: "statusCode",
                        children: (0, c.jsx)("span", {
                            className: "digit",
                            children: n
                        })
                    }), (0, c.jsxs)("div", {
                        className: "errorMessageText",
                        children: [n === a.k6 ? "We're sorry but the page you requested could not be found." : n >= a.Iz && n <= a.LK ? "We're sorry but we've encountered an unexpected error." : "Sorry, but we've encountered an error.", (0, c.jsx)("br", {}), "Please try again from the ", (0, c.jsx)("a", {
                            href: "/",
                            children: "home page"
                        }), s && (0, c.jsxs)("span", {
                            children: [", ", (0, c.jsx)("a", {
                                href: s,
                                children: "our Lite version (low bandwidth)"
                            }), ","]
                        }), " ", "or", " ", (0, c.jsx)("a", {
                            href: "https://cbchelp.cbc.ca/hc/en-ca/requests/new?ticket_form_id=114094002513",
                            children: "contact us"
                        }), "."]
                    })]
                })
            }
        },
        25538: (e, t, n) => {
            function r(e) {
                return e.membership
            }
            n.d(t, {
                Z: () => r
            })
        },
        78087: (e, t, n) => {
            n.r(t), n.d(t, {
                AUTHED_COOKIE: () => o,
                COOKIE_DOMAIN: () => s,
                GUEST_COOKIE: () => r,
                LOCAL_COOKIE: () => i,
                LR_COOKIE: () => a,
                RADIO_REGEX: () => c
            });
            var r = "cbc_visitor",
                o = "cbc_plus",
                a = "lr-user--token",
                i = "cbclocal",
                c = "radio%3D([a-zA-Z-_]+)",
                s = ".cbc.ca"
        },
        86045: (e, t, n) => {
            n.r(t), n.d(t, {
                scrollTo: () => s,
                shiftFocusSafely: () => c
            });
            var r = n(71002),
                o = n(68555),
                a = n(74987),
                i = function() {
                    return "object" === ("undefined" === typeof document ? "undefined" : (0, r.Z)(document))
                };

            function c(e) {
                if ((0, a.j)() && i()) {
                    var t = document.querySelector(e);
                    t && t.focus()
                }
            }

            function s(e, t, n) {
                if (i() && n) {
                    t && t.preventDefault(), o.OK.scrollTo(e, {
                        duration: 500,
                        delay: 50,
                        smooth: !0,
                        offset: -75
                    });
                    var r = document.querySelector(n);
                    r && r.focus()
                }
            }
        },
        74987: (e, t, n) => {
            n.d(t, {
                j: () => r,
                s: () => o
            });
            var r = function() {
                    return "undefined" !== typeof window
                },
                o = function() {
                    return "undefined" === typeof window
                }
        },
        41718: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => i
            });
            var r = n(97858),
                o = n(74987);
            var a = "info";
            const i = (0, o.s)() ? function() {
                var e = n(Object(function() {
                        var e = new Error("Cannot find module 'winston'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }())),
                    t = e.createLogger,
                    r = e.format,
                    o = e.transports,
                    i = t({
                        level: a,
                        format: r.combine(r.timestamp({
                            format: "YYYY-MM-DD HH:mm:ss"
                        }), r.errors({
                            stack: !0
                        }), r.splat(), r.json())
                    });
                return i.add(new o.Console({
                    format: r.simple()
                })), i
            }() : function() {
                var e = "logger:",
                    t = function(t, n) {
                        if (!n) return "".concat(e, " ").concat(t);
                        var r;
                        r = (n = n instanceof Array ? n[0] : n) instanceof Error ? n.name ? n.name : "Error" : "exception";
                        var o = n.message ? n.message : n,
                            a = o ? "[".concat(r, ": ").concat(o, "]") : "[".concat(r, "]");
                        return "".concat(e, " ").concat(t, "  ").concat(a)
                    };
                return {
                    debug: function() {},
                    info: function() {
                        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        (t = console).info.apply(t, [e].concat(r))
                    },
                    warn: function(e, n) {
                        var r = t(e, n);
                        console.warn(r)
                    },
                    error: function(e, n) {
                        var o = t(e, n);
                        console.error(o), n && n instanceof Error && (0, r.p)(n)
                    }
                }
            }()
        },
        91167: (e, t, n) => {
            n.d(t, {
                $q: () => l,
                eN: () => d,
                fm: () => u
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                o = n(40238),
                a = n(97767),
                i = n(88101),
                c = n(56552);

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var l = function(e, t) {
                return t ? {
                    baseSection: t.baseSection,
                    subSection: t.subSection,
                    hasMenu: t.hasMenu,
                    hostName: t.host || "",
                    imageUrl: t.image,
                    imageLink: t.imageLink || "",
                    navigation: t.navigation instanceof Array ? t.navigation : [],
                    path: e,
                    showName: t.title || "",
                    description: t.description || "",
                    noHeading: !1
                } : {
                    section: "",
                    subSection: "",
                    hasMenu: !0,
                    hostName: "",
                    imageUrl: "",
                    imageLink: "",
                    navigation: [],
                    path: e,
                    showName: t ? t.title : "",
                    noHeading: !1
                }
            };
            var u = function(e) {
                    var t = e.path,
                        n = e.baseSection,
                        u = e.subSection,
                        f = e.pageType,
                        p = e.imageUrl,
                        v = e.noHeading,
                        m = e.rightrail,
                        b = e.title,
                        g = null;
                    if (g = "detail" === f ? function(e, t, n) {
                            var r = !1,
                                o = null,
                                c = !0;
                            for (var s in a.HK)
                                if (Object.prototype.hasOwnProperty.call(a.HK, s) && new RegExp("".concat(s, ".*-[0-9].[0-9]*"), "g").test(e) && a.HK[s].showOnStories) {
                                    r = !0, o = s, c = Boolean(a.HK[s].showMenuOnStories);
                                    break
                                }
                            return r ? (0, i.ZU)(a.HK, o, t, n, c) : null
                        }(t, n, u) : function(e, t, n) {
                            var r = !1,
                                o = null;
                            for (var c in a.HK)
                                if (Object.prototype.hasOwnProperty.call(a.HK, c)) {
                                    var s = new RegExp("^".concat(c));
                                    if (e === c || a.HK[c].showOnAllSubsections && s.test(e)) {
                                        r = !0, o = c;
                                        break
                                    }
                                }
                            return r ? (0, i.ZU)(a.HK, o, t, n, !0) : null
                        }(t, n, u), g) {
                        var h = l(t, g);
                        return p && (h.imageUrl = p), (h = d(h, m)).noHeading = v || !1, h.showName || (h.showName = b), (0, c.jsx)(o.Z, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? s(Object(n), !0).forEach((function(t) {
                                    (0, r.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, h))
                    }
                    return null
                },
                d = function(e, t) {
                    return e && !e.imageUrl && null !== t && void 0 !== t && t.banner && (e.imageUrl = t.banner), e
                }
        },
        97858: (e, t, n) => {
            n.d(t, {
                n: () => w,
                p: () => O
            });
            n(9867), n(7231), n(53145), n(95566), n(62153);
            var r = n(2104),
                o = n(67065),
                a = n(53335),
                i = n(77056),
                c = n(31770),
                s = n(38888),
                l = n(4942),
                u = (n(30666), n(6129), n(83464), n(19496), n(58109), n(68438), n(68769));

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = [{
                    name: "account-centre",
                    scopeId: n(71063).l.sentryScopeId
                }, {
                    name: "ocelot",
                    scopeId: "scope-ocelot"
                }],
                v = function(e) {
                    var t;
                    return null === e || void 0 === e || null === (t = e.module_metadata) || void 0 === t ? void 0 : t.scopeId
                },
                m = function(e) {
                    var t = e[e.length - 1],
                        n = v(t) || "",
                        r = p.find((function(e) {
                            return e.scopeId === n
                        }));
                    return r ? r.name : "unknown"
                };
            const b = function() {
                return {
                    name: "SentryEventScopeTagsIntegration",
                    processEvent: function(e) {
                        var t = (0, u.Fr)(e);
                        if (t && t.length) {
                            var n = {};
                            p.forEach((function(e) {
                                var r = e.name,
                                    o = e.scopeId,
                                    a = t.some((function(e) {
                                        return v(e) === o
                                    }));
                                n["scope.".concat(r, "_inStackTrace")] = a
                            })), e.tags = f(f(f({}, e.tags), n), {}, {
                                "scope.error_scope": m(t)
                            })
                        }
                        return e
                    }
                }
            };
            var g = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((function(e) {
                        return e.regex ? new RegExp(e.regex) : e
                    }))
                },
                h = function(e) {
                    return function(t) {
                        var n, r;
                        if ("@cbc/macaw" === (null === (n = t.tags) || void 0 === n ? void 0 : n.component)) return null;
                        var o = null === (r = t.exception) || void 0 === r || null === (r = r.values) || void 0 === r ? void 0 : r[0];
                        if (o) {
                            var a;
                            if (((null === (a = o.stacktrace) || void 0 === a ? void 0 : a.frames) || []).some((function(t) {
                                    return function(e, t) {
                                        return Object.values(e).some((function(e) {
                                            return t.test(e)
                                        }))
                                    }(t, e)
                                }))) return null;
                            if (e.test(o.value)) return null;
                            var i = function(e) {
                                var t;
                                return null === e || void 0 === e || null === (t = e.value) || void 0 === t ? void 0 : t.replace(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/, "********-****-****-****-************")
                            }(o);
                            i && (o.value = i)
                        }
                        return t
                    }
                },
                y = function(e) {
                    if (!e) return "No additional context.";
                    if ("string" === typeof e) return e;
                    try {
                        return JSON.stringify(e)
                    } catch (t) {
                        return e
                    }
                },
                O = function(e) {
                    r.Tb(e, {
                        extra: {
                            context: y(e.extraData)
                        }
                    })
                },
                w = function(e, t) {
                    var n = e.sentry;
                    if (n) {
                        var r, l = window.location.host,
                            u = window.__APP_VERSION__,
                            d = Number.isNaN(Number(n.tracesSampleRate)) ? .1 : Number(n.tracesSampleRate),
                            f = g(n.allowUrls),
                            p = g(n.denyUrls),
                            v = g(n.ignoreErrors),
                            m = (r = n.beforeSendFilter, new RegExp(r || "pubads_impl|viafoura")),
                            y = window.__IS_SENTRY_DEV_DEBUG__,
                            O = null;
                        "www.cbc.ca" === l ? O = "production" : "ocelot-staging.cbc.ca" === l ? O = "staging" : l.startsWith("ocelot-") && !l.startsWith("ocelot-de-") ? O = "qa" : y && (O = "dev"), null !== O && o.S({
                            dsn: y ? "https://fbd4bfacb597c3d17b9279d023038e2a@o148878.ingest.us.sentry.io/5733890" : "https://fef33bc017414f09bcf117882ad6b34a@o148878.ingest.sentry.io/5733890",
                            release: "ocelot@" + u,
                            integrations: [a.zL({
                                history: t,
                                enableInp: !0,
                                shouldCreateSpanForRequest: function(e) {
                                    return !e.match(/(\/cookie-jar\/|\/comscore.json)/)
                                }
                            }), i.L({
                                filterKeys: ["ocelot"],
                                behaviour: "apply-tag-if-exclusively-contains-third-party-frames"
                            }), c.E(), s.w(), b()],
                            environment: O,
                            allowUrls: f,
                            denyUrls: p,
                            ignoreErrors: v,
                            tracesSampleRate: d,
                            beforeSend: h(m)
                        })
                    } else console.error("(initializeSentry) Unable to initialize Sentry: FeatureFlag not found!")
                }
        },
        24515: (e, t, n) => {
            n.d(t, {
                ax: () => s,
                D6: () => d,
                Bp: () => l
            });
            n(30666), n(95566), n(6129), n(9867), n(7231), n(58109), n(68438);
            var r = n(43386),
                o = n(41718),
                a = n(50465),
                i = "https://cbchelp.zendesk.com/api/v2/requests.json",
                c = function(e) {
                    return {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e)
                    }
                };

            function s(e) {
                return (0, r.request)(i, c(e)).then((function(e) {
                    if (!e.ok) throw new a.p(e.status, "".concat(e.status, ": ").concat(e.statusText));
                    return e
                })).catch((function(e) {
                    throw o.default.error("(createTicket) Zendesk error", e), e
                }))
            }
            var l = function(e, t, n) {
                    var r = e.typo_dropdown,
                        o = t.fields.typo_dropdown.options.find((function(e) {
                            return e.value === r
                        })).name,
                        a = "https://www.cbc.ca/".concat(n.path),
                        i = "http://polopoly.nm.cbc.ca:8080/polopoly/opencontent?contentInEdit=".concat(n.polopolyId),
                        c = n.title.split("|").slice(0, -1).join("|").trim(),
                        s = 'story "'.concat(c, '" has an ').concat(o),
                        l = "<p>Hi!</p><p>A new typo report has been submitted from ".concat(n.userName, "&lt;").concat(n.email, "&gt;.</p>");
                    l += "<q>".concat(e.description, "</q>"), l += "<p>Found in the story \"<a href='".concat(a, "'>").concat(c, '</a>".</p>'), l += "<p>It can be <a href='".concat(i, "'>found on polopoly under content id ").concat(n.polopolyId, "</a></p>");
                    var u = Object.keys(e).filter((function(e) {
                        return "description" !== e
                    })).map((function(n) {
                        return {
                            id: t.fields[n].zendesk_id.toString(),
                            value: e[n]
                        }
                    }));
                    u.push({
                        id: t.staticFields.url.zendesk_id,
                        value: "www.cbc.ca/".concat(n.path)
                    }), u.push({
                        id: t.staticFields.polopolyId.zendesk_id,
                        value: n.polopolyId
                    });
                    var d = [];
                    return t.formTags && (d = d.concat(t.formTags)), n.department && d.push("department_" + n.department), {
                        request: {
                            requester: {
                                name: n.userName,
                                email: n.email
                            },
                            subject: s,
                            comment: {
                                html_body: l
                            },
                            tags: d,
                            custom_fields: u,
                            ticket_form_id: t.zendesk_id
                        }
                    }
                },
                u = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return "string" === typeof e && Boolean(e.match(u))
            }
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-commons.8dae56fe76d35498c017.js.map