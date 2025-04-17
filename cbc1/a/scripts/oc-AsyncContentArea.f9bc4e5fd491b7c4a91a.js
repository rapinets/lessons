! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "9a3e3366-ab35-4a8b-83ac-352cbcd9739d", t._sentryDebugIdIdentifier = "sentry-dbid-9a3e3366-ab35-4a8b-83ac-352cbcd9739d")
    } catch (t) {}
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
    [9947], {
        31494: (t, e, a) => {
            a.r(e), a.d(e, {
                default: () => St
            });
            a(58109), a(95566), a(68438), a(83464), a(19496);
            var o = a(84506),
                c = a(93433),
                r = a(4942),
                n = a(29439),
                i = a(35098),
                s = a(42820),
                l = a(92972),
                u = a.n(l),
                w = a(33568),
                p = a(50439),
                d = a(97240),
                h = a(15671),
                m = a(43144),
                f = a(82963),
                b = a(61120),
                k = a(60136),
                y = (a(70468), a(79321), a(95763), a(26817), a(50155), a(51335), a(83234), a(92435), a(87201), a(23503), a(72891), a(21934), a(81466), a(40703), a(40627)),
                g = a(34325),
                v = a(19227);

            function N(t, e, a) {
                return e = (0, b.Z)(e), (0, f.Z)(t, C() ? Reflect.construct(e, a || [], (0, b.Z)(t).constructor) : e.apply(t, a))
            }

            function C() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (C = function() {
                    return !!t
                })()
            }
            const T = function(t) {
                function e(t) {
                    var a;
                    return (0, h.Z)(this, e), (a = N(this, e)).policyName = "FeaturedPolicy", a.viewport = t.viewport, a.hasTopStories = t.hasTopStories, a.richPolicy = !!t.richPolicy && t.richPolicy, a.contentPackage = t.contentPackage ? t.contentPackage : null, a
                }
                return (0, k.Z)(e, t), (0, m.Z)(e, [{
                    key: "buildCardTypesMap",
                    value: function(t) {
                        this.cardTypesMap = new Map;
                        var e = 3,
                            a = this.richPolicy ? 1 : 4,
                            o = this.hasTopStories ? a : 0;
                        "viewportSmall" === this.viewport && (e = 1, o = 0);
                        for (var c = 0; c < t; c++) {
                            var r = y.QU.TYPE_DEFAULT;
                            r = this.hasTopStories && 0 === c ? r = this.richPolicy && !this.contentPackage ? y.QU.TYPE_FEATURED : y.QU.TYPE_FEATURED_AUTHOR : c >= o && c < o + e ? y.QU.TYPE_LISTING_AUTHOR : this.richPolicy ? y.QU.TYPE_REGULAR : y.QU.TYPE_DEFAULT, this.cardTypesMap.set(c, r)
                        }
                        this.cardTypesMap.set(v.Zm, y.QU.TYPE_DEFAULT)
                    }
                }]), e
            }(g.Z);
            var P = a(51111),
                S = a(73906),
                x = a(29274),
                Z = a(57241),
                j = a(97767),
                B = a(56552);

            function E(t) {
                var e = t.items,
                    a = void 0 === e ? null : e,
                    o = t.baseSection,
                    c = void 0 === o ? "news" : o,
                    r = t.subSection,
                    n = void 0 === r ? "" : r,
                    i = t.viewport,
                    s = void 0 === i ? "viewportLarge" : i,
                    l = t.path,
                    u = void 0 === l ? "" : l,
                    w = t.hasTopStories,
                    h = void 0 !== w && w,
                    m = t.hasHighlightedStories,
                    f = void 0 === m || m,
                    b = t.cardClickHandler,
                    k = void 0 === b ? function() {} : b,
                    y = t.contentPackage,
                    g = void 0 === y ? null : y,
                    v = t.isDenseFeatured,
                    N = t.displayPolicy,
                    C = "viewportSmall" === s,
                    E = !0 === C && "homepage" !== c ? (0, B.jsx)(p.Z, {
                        type: "bigbox",
                        targeting: {
                            plc: "feed"
                        }
                    }) : null;
                if (v) return (0, B.jsx)("section", {
                    className: "featuredArea sclt-featuredarea",
                    children: (0, B.jsx)(P.Z, {
                        title: "Featured Content",
                        mobileAd: E,
                        items: a,
                        baseSection: "news",
                        subSection: n,
                        viewport: "viewportLarge",
                        cardClickHandler: k,
                        contentPackage: g,
                        displayPolicy: N
                    })
                });
                var U = void 0 !== N ? N : new T({
                    viewport: s,
                    hasTopStories: h,
                    contentPackage: g
                });
                U.richPolicy && C && (U = new S.Z({
                    contentPackage: g
                }));
                var A = {
                        baseSection: c,
                        subSection: n,
                        trackingSection: "featured"
                    },
                    F = U.format(a, A, k),
                    I = h ? (0, Z.dx)(c) : 0;
                if (j.HK[u]) {
                    var D = j.HK[u].customNumTopStories;
                    I = D || I
                }
                var L = function(t, e, a) {
                        if (t && t.length && t.length <= e) return null;
                        if (a) return e;
                        return 0
                    }(F, I, f),
                    R = function(t, e, a, o) {
                        if (null === a) return null;
                        if (!o) return e;
                        if (t && t.length && t.length <= a + x.nJ) return null;
                        return a + x.nJ
                    }(F, I, L, f);
                return (0, B.jsx)("div", {
                    children: (0, B.jsxs)("section", {
                        className: "featuredArea sclt-featuredarea",
                        "data-cy": "topStoriesFeatured",
                        children: [(0, B.jsx)(d.Z, {
                            level: "h2",
                            hidden: !0,
                            children: "Featured Content"
                        }), g, _(F, h, I), O(F, L, f), E, M(F, R, F.length)]
                    })
                })
            }

            function M(t, e, a) {
                return t && t.length && null !== e && t.length > e ? t.slice(e, a) : null
            }

            function O(t, e, a) {
                return t && a ? (0, B.jsx)("div", {
                    className: "featuredHighlights sclt-featuredHighlights",
                    children: M(t, e, e + x.nJ)
                }) : null
            }

            function _(t, e, a) {
                if (!t || !e) return null;
                var o = M(t, 0, a);
                if (!o) return null;
                var c = o.shift(),
                    r = o.length ? (0, B.jsx)("div", {
                        className: "secondaryTopStories",
                        children: o
                    }) : null;
                return (0, B.jsxs)("div", {
                    className: "featuredTopStories sclt-featuredTopStories",
                    children: [(0, B.jsx)("div", {
                        className: "primaryTopStories",
                        children: c
                    }), r]
                })
            }
            E.propTypes = {
                items: u().array.isRequired,
                baseSection: u().string,
                subSection: u().string,
                viewport: u().string,
                path: u().string,
                hasTopStories: u().bool,
                hasHighlightedStories: u().bool,
                cardClickHandler: u().func,
                contentPackage: u().object
            };
            const U = E;
            var A = a(82019),
                F = a(80361);

            function I(t, e, a) {
                return e = (0, b.Z)(e), (0, f.Z)(t, D() ? Reflect.construct(e, a || [], (0, b.Z)(t).constructor) : e.apply(t, a))
            }

            function D() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (D = function() {
                    return !!t
                })()
            }
            const L = function(t) {
                function e() {
                    var t;
                    return (0, h.Z)(this, e), (t = I(this, e)).policyName = "DebugPolicy", t
                }
                return (0, k.Z)(e, t), (0, m.Z)(e, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        this.cardTypesMap = new Map, this.cardTypesMap.set(1, y.QU.TYPE_DEFAULT), this.cardTypesMap.set(2, y.QU.TYPE_TEXT), this.cardTypesMap.set(v.Zm, y.QU.TYPE_DEFAULT)
                    }
                }]), e
            }(g.Z);
            var R = a(88277);

            function H(t, e, a) {
                return e = (0, b.Z)(e), (0, f.Z)(t, Q() ? Reflect.construct(e, a || [], (0, b.Z)(t).constructor) : e.apply(t, a))
            }

            function Q() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (Q = function() {
                    return !!t
                })()
            }
            const Y = function(t) {
                function e() {
                    var t;
                    return (0, h.Z)(this, e), (t = H(this, e)).policyName = "MediumDensityPolicy", t
                }
                return (0, k.Z)(e, t), (0, m.Z)(e, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        this.cardTypesMap = new Map, this.cardTypesMap.set(v.Zm, y.QU.TYPE_DEFAULT)
                    }
                }]), e
            }(g.Z);
            var G = a(56476);

            function W(t, e, a) {
                return e = (0, b.Z)(e), (0, f.Z)(t, J() ? Reflect.construct(e, a || [], (0, b.Z)(t).constructor) : e.apply(t, a))
            }

            function J() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (J = function() {
                    return !!t
                })()
            }
            const V = function(t) {
                function e() {
                    var t;
                    return (0, h.Z)(this, e), (t = W(this, e)).policyName = "ListingPolicy", t
                }
                return (0, k.Z)(e, t), (0, m.Z)(e, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        this.cardTypesMap = new Map, this.cardTypesMap.set(0, y.QU.TYPE_LISTING), this.cardTypesMap.set(1, y.QU.TYPE_LISTING), this.cardTypesMap.set(2, y.QU.TYPE_LISTING), this.cardTypesMap.set(v.Zm, y.QU.TYPE_LISTING_HORIZONTAL)
                    }
                }]), e
            }(g.Z);

            function K(t, e, a) {
                return e = (0, b.Z)(e), (0, f.Z)(t, X() ? Reflect.construct(e, a || [], (0, b.Z)(t).constructor) : e.apply(t, a))
            }

            function X() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (X = function() {
                    return !!t
                })()
            }
            const z = function(t) {
                function e(t) {
                    var a;
                    return (0, h.Z)(this, e), (a = K(this, e)).policyName = "HomepagePolicy", a.contentPackage = t.contentPackage ? t.contentPackage : null, a
                }
                return (0, k.Z)(e, t), (0, m.Z)(e, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        var t = this.contentPackage ? y.QU.TYPE_FEATURED_AUTHOR : y.QU.TYPE_FEATURED;
                        this.cardTypesMap = new Map, this.cardTypesMap.set(0, t), this.cardTypesMap.set(v.Zm, y.QU.TYPE_REGULAR)
                    }
                }]), e
            }(g.Z);

            function q(t, e, a) {
                return e = (0, b.Z)(e), (0, f.Z)(t, $() ? Reflect.construct(e, a || [], (0, b.Z)(t).constructor) : e.apply(t, a))
            }

            function $() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return ($ = function() {
                    return !!t
                })()
            }
            const tt = function(t) {
                function e() {
                    var t;
                    return (0, h.Z)(this, e), (t = q(this, e)).policyName = "SearchPolicy", t
                }
                return (0, k.Z)(e, t), (0, m.Z)(e, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        this.cardTypesMap = new Map, this.cardTypesMap.set(v.Zm, y.QU.TYPE_LISTING_HORIZONTAL)
                    }
                }]), e
            }(g.Z);
            var et = a(79532),
                at = a(14507),
                ot = a.n(at),
                ct = a(70847),
                rt = a(53333),
                nt = a(84412),
                it = a(58670),
                st = (a(9867), a(7231), a(2902)),
                lt = a(26574),
                ut = {
                    title: "Follow CBC Life",
                    links: [{
                        socialNetwork: "facebook",
                        url: "https://www.facebook.com/cbclife"
                    }, {
                        socialNetwork: "instagram",
                        url: "https://www.instagram.com/cbclife"
                    }, {
                        socialNetwork: "pinterest",
                        url: "https://www.pinterest.com/cbclife"
                    }, {
                        socialNetwork: "youtube",
                        url: "https://www.youtube.com/cbclife"
                    }, {
                        socialNetwork: "x",
                        url: "https://www.x.com/CBC_life"
                    }, {
                        socialNetwork: "snapchat",
                        url: "https://www.snapchat.com/add/cbclife"
                    }]
                },
                wt = {
                    2017: {
                        title: "Follow Canada 2017",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbccanada2017"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/cbc2017"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbc2017"
                        }]
                    },
                    "2017/wearecanada": {
                        title: "Follow Canada 2017",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbccanada2017"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/cbc2017"
                        }]
                    },
                    "books/canadareads": {
                        title: "Follow CBC Books",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbcbooks"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/cbcbooks"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcbooks/"
                        }]
                    },
                    "life/jamieoliver": ut,
                    "life/jamieoliver/recipes": ut,
                    "life/jamieoliver/watch": ut,
                    "news/canada/british-columbia": {
                        title: "Follow CBC British Columbia",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCVancouver"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/cbcnewsbc"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcvancouver"
                        }]
                    },
                    "news/canada/british-columbia/community": {
                        title: "Follow CBC British Columbia",
                        links: [{
                            socialNetwork: "x",
                            url: "https://x.com/cbcvancouver"
                        }, {
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCVancouver"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcvancouver"
                        }, {
                            socialNetwork: "snapchat",
                            url: "https://www.snapchat.com/add/cbcvancouver"
                        }, {
                            socialNetwork: "youtube",
                            url: "https://www.youtube.com/channel/UCiKE6mqbKmGGlNAtccn04MA"
                        }]
                    },
                    "news/canada/calgary": {
                        title: "Follow CBC Calgary",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbccalgary"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCCalgary"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbccalgary"
                        }]
                    },
                    "news/canada/calgary/community": {
                        title: "Follow CBC Calgary",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbccalgary"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCCalgary"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbccalgary"
                        }]
                    },
                    "news/canada/calgary/the-road-ahead": {
                        title: "Follow CBC Calgary",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbccalgary"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCCalgary"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbccalgary"
                        }]
                    },
                    "news/canada/edmonton": {
                        title: "Follow CBC Edmonton",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbcedmonton/"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCEdmonton"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcedmonton"
                        }]
                    },
                    "news/canada/hamilton": {
                        title: "Follow CBC Hamilton",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbchamilton"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCHamilton"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbchamilton"
                        }]
                    },
                    "news/canada/manitoba": {
                        title: "Follow CBC Manitoba",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbcmanitoba"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCManitoba"
                        }, {
                            socialNetwork: "youtube",
                            url: "https://www.youtube.com/user/CBCManitoba"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcmanitoba"
                        }]
                    },
                    "news/canada/manitoba/community": {
                        title: "Follow CBC Manitoba",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbcmanitoba"
                        }, {
                            socialNetwork: "x",
                            url: "https://www.x.com/CBCManitoba"
                        }, {
                            socialNetwork: "youtube",
                            url: "https://www.youtube.com/CBCManitoba"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcmanitoba"
                        }]
                    },
                    "news/canada/montreal": {
                        title: "Follow CBC Montreal",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCMontreal"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCMontreal"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcmontreal"
                        }]
                    },
                    "news/canada/new-brunswick": {
                        title: "Follow CBC New Brunswick",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCNB"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCNB"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcnewbrunswick"
                        }]
                    },
                    "news/canada/newfoundland-labrador": {
                        title: "Follow CBC Newfoundland and Labrador",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbcnl"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/cbcnl"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcnl"
                        }, {
                            socialNetwork: "youtube",
                            url: "https://www.youtube.com/c/cbcnl"
                        }]
                    },
                    "news/canada/north": {
                        title: "Follow CBC North",
                        links: [{
                            socialNetwork: "x",
                            url: "https://x.com/CBCNorth"
                        }, {
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCNorth/?ref=aymt_homepage_panel"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcnorth/"
                        }]
                    },
                    "news/canada/nova-scotia": {
                        title: "Follow CBC Nova Scotia",
                        links: [{
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbc_eastcoast"
                        }, {
                            socialNetwork: "youtube",
                            url: "https://www.youtube.com/channel/UCxQXcwZ1Ls0spDyHCpwUs4Q"
                        }]
                    },
                    "news/canada/ottawa": {
                        title: "Follow CBC Ottawa",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCOttawa"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCOttawa"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcottawa"
                        }]
                    },
                    "news/canada/prince-edward-island": {
                        title: "Follow CBC PEI",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCPEI"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCPEI"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcpei"
                        }]
                    },
                    "news/canada/saskatchewan": {
                        title: "Follow CBC Saskatchewan",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbcsask"
                        }, {
                            socialNetwork: "tiktok",
                            url: "https://www.tiktok.com/discover/CBC-News-Saskatchewan"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcsask"
                        }, {
                            socialNetwork: "youtube",
                            url: "https://www.youtube.com/channel/UCvdbpUpDg1cA4f_Jfg_-_TQ"
                        }]
                    },
                    "news/canada/saskatchewan/community": {
                        title: "Follow CBC Saskatchewan",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbcsask"
                        }, {
                            socialNetwork: "tiktok",
                            url: "https://www.tiktok.com/discover/CBC-News-Saskatchewan"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcsask"
                        }, {
                            socialNetwork: "youtube",
                            url: "https://www.youtube.com/channel/UCvdbpUpDg1cA4f_Jfg_-_TQ"
                        }]
                    },
                    "news/canada/saskatoon": {
                        title: "Follow CBC Saskatoon",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCSaskatoon/"
                        }, {
                            socialNetwork: "tiktok",
                            url: "https://www.tiktok.com/discover/CBC-News-Saskatchewan"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcsask"
                        }, {
                            socialNetwork: "youtube",
                            url: "https://www.youtube.com/channel/UCvdbpUpDg1cA4f_Jfg_-_TQ"
                        }]
                    },
                    "news/canada/toronto": {
                        title: "Follow CBC Toronto",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCToronto"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCToronto"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbctoronto"
                        }]
                    },
                    "news/canada/windsor": {
                        title: "Follow CBC Windsor",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCWindsor"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/CBCWindsor"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcwindsor/"
                        }]
                    },
                    "news/marketplace": {
                        title: "Follow Marketplace",
                        links: [{
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/cbcmarketplace"
                        }, {
                            socialNetwork: "x",
                            url: "https://www.x.com/cbcmarketplace"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/cbcmarketplace"
                        }, {
                            socialNetwork: "youtube",
                            url: "https://www.youtube.com/playlist?list=PLeyJPHbRnGaZmzkCwy3-8ykUZm_8B9kKM"
                        }]
                    },
                    "news/politics/powerandpolitics": {
                        title: "Follow Power & Politics",
                        links: [{
                            socialNetwork: "youtube",
                            url: "https://www.youtube.com/playlist?list=PLeyJPHbRnGaZ1LGEJXLVGF87go3CuPlWo"
                        }, {
                            socialNetwork: "x",
                            url: "https://x.com/PnPCBC"
                        }, {
                            socialNetwork: "facebook",
                            url: "https://www.facebook.com/CBCPolitics/"
                        }, {
                            socialNetwork: "instagram",
                            url: "https://www.instagram.com/pnpcbc/"
                        }]
                    }
                },
                pt = {
                    facebook: {
                        displayName: "Facebook",
                        imageUrl: "https://i.cbc.ca/1.4586793.1521664140!/fileImage/httpImage/facebook.png",
                        userAction: "Like"
                    },
                    gplus: {
                        displayName: "Google+",
                        imageUrl: "https://i.cbc.ca/1.4586806.1521664341!/fileImage/httpImage/reddit.png",
                        userAction: "Join"
                    },
                    instagram: {
                        displayName: "Instagram",
                        imageUrl: "https://i.cbc.ca/1.4586808.1521664476!/fileImage/httpImage/instagram.png",
                        userAction: "Follow"
                    },
                    linkedin: {
                        displayName: "LinkedIn",
                        imageUrl: "https://i.cbc.ca/1.4586847.1521665060!/fileImage/httpImage/linkedin.png",
                        userAction: "Follow"
                    },
                    newsletter: {
                        displayName: "the CBC Newsletter",
                        imageUrl: "https://i.cbc.ca/1.4586850.1531937054!/fileImage/httpImage/newsletter.png",
                        userAction: "Sign up for the best of"
                    },
                    pinterest: {
                        displayName: "Pinterest",
                        imageUrl: "https://i.cbc.ca/1.4586853.1521665185!/fileImage/httpImage/pinterest.png",
                        userAction: "Follow"
                    },
                    reddit: {
                        displayName: "reddit",
                        imageUrl: "https://i.cbc.ca/1.4586856.1521665243!/fileImage/httpImage/reddit.png",
                        userAction: "Subscribe to"
                    },
                    snapchat: {
                        displayName: "Snapchat",
                        imageUrl: "https://i.cbc.ca/1.4586861.1521665368!/fileImage/httpImage/snapchat.png",
                        userAction: "Add"
                    },
                    x: {
                        displayName: "X",
                        imageUrl: "https://i.cbc.ca/1.4586863.1701965776!/fileImage/httpImage/x.png",
                        userAction: "Follow"
                    },
                    youtube: {
                        displayName: "YouTube",
                        imageUrl: "https://i.cbc.ca/1.4586869.1521665472!/fileImage/httpImage/youtube.png",
                        userAction: "Subscribe to"
                    },
                    tiktok: {
                        displayName: "TikTok",
                        imageUrl: "https://i.cbc.ca/1.6802267.1680707048!/fileImage/httpImage/tik-tok-icon.png",
                        userAction: "Subscribe to"
                    },
                    podcast: {
                        displayName: "Podcast",
                        imageUrl: "https://i.cbc.ca/1.4586880.1521665636!/fileImage/httpImage/podcast.png",
                        userAction: "Listen to"
                    }
                };
            const dt = function(t) {
                var e = void 0 !== wt[t.path] ? wt[t.path] : null,
                    a = "",
                    o = [],
                    c = "";
                return e && (a = e.title, c = a.replace("Follow ", ""), o = e.links.map((function(t, e) {
                        var a = pt[t.socialNetwork],
                            o = a.userAction,
                            r = a.displayName,
                            n = "".concat(o, " ").concat(c, " on ").concat(r);
                        return (0, B.jsx)("li", {
                            children: (0, B.jsxs)(lt.default, {
                                url: t.url,
                                external: !0,
                                children: [(0, B.jsx)(st.Z, {
                                    url: "".concat(pt[t.socialNetwork].imageUrl),
                                    type: "followUs-image"
                                }), (0, B.jsx)("span", {
                                    className: "a11y",
                                    children: n
                                }, "".concat(e, "-followUs-action"))]
                            })
                        }, "".concat(e, "-followUs"))
                    }))),
                    function(t, e) {
                        if (!e || !e.length) return null;
                        return (0, B.jsxs)("div", {
                            className: "followUs",
                            children: [(0, B.jsx)(A.X6, {
                                className: "followUsHeadline",
                                text: t,
                                level: "h2",
                                levelClassName: "h3"
                            }), (0, B.jsx)("ul", {
                                children: e
                            })]
                        })
                    }(a, o)
            };
            var ht = a(63751),
                mt = a(15664),
                ft = a(94924),
                bt = a(94481),
                kt = a(99827),
                yt = a(83110);

            function gt(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function vt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? gt(Object(a), !0).forEach((function(e) {
                        (0, r.Z)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : gt(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var Nt = (0, i.memo)((function(t) {
                var e = t.viewport,
                    a = t.sidebarWidgets,
                    o = (0, s.useSelector)((function(t) {
                        return t.app.baseSection
                    })),
                    c = (0, s.useSelector)((function(t) {
                        return t.app.path
                    })),
                    r = (0, s.useSelector)((function(t) {
                        return t.rightRail
                    })),
                    n = (0, s.useSelector)((function(t) {
                        return t.sectionalContent
                    })),
                    i = (0, yt.useParams)().contentId;
                a = a || (0, kt.hs)({
                    path: c,
                    rightrail: r,
                    viewport: e,
                    baseSection: o,
                    sectionalContent: n,
                    contentId: i
                });
                var l = function() {
                    if (n && "sports/olympics" === c) {
                        var t = n["sports/olympics/promo"];
                        if (t && t.sectionList) return t.sectionList
                    }
                    return null
                }();

                function u() {
                    return a.length ? (0, B.jsx)("div", {
                        className: "widgets",
                        children: a
                    }) : null
                }

                function w() {
                    var t = "".concat(j.zV.hasOwnProperty(c) ? j.zV[c].province : "", " Votes Features"),
                        e = (0, B.jsx)(A.X6, {
                            text: t,
                            level: "h2",
                            levelClassName: "h3"
                        }),
                        a = {
                            section: "".concat(c, "/swimlane"),
                            className: "electionSideBarSwimlane",
                            headline: "",
                            customTitleBar: e,
                            itemCount: 4,
                            fetchSection: !0
                        };
                    return j.zV.hasOwnProperty(c) && j.zV[c].swimlane ? (0, B.jsx)(mt.Z, vt({}, a)) : null
                }

                function d() {
                    var t = "viewportSmall" === e && "homepage" === c,
                        a = "viewportLarge" === e ? "right" : "feed";
                    return (0, B.jsx)(p.Z, {
                        type: "bigbox",
                        responsive: !0,
                        targeting: {
                            plc: a
                        },
                        lazy: t
                    })
                }

                function h() {
                    return l ? (0, B.jsx)(bt.Z, {
                        items: l,
                        title: "FEATURED CONTENT",
                        displayPolicy: new V
                    }) : null
                }
                return "homepage" === c ? (0, B.jsxs)("div", {
                    className: "sidebar",
                    children: [(0, B.jsx)(ht.Z, vt({
                        className: "rciWidget"
                    }, it.Wn.radioCanadaInternational)), d(), h(), u(), w()]
                }) : "news" === c ? (0, B.jsxs)("div", {
                    className: "sidebar",
                    children: [(0, B.jsx)(ht.Z, vt({
                        className: "rciWidget"
                    }, it.Wn.radioCanadaInternational)), d(), (0, B.jsx)(ft.Cs, {}), u()]
                }) : (0, B.jsxs)("div", {
                    className: "sidebar",
                    children: [(0, B.jsx)(dt, {
                        path: c
                    }), d(), h(), u(), w()]
                })
            }));

            function Ct(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function Tt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ct(Object(a), !0).forEach((function(e) {
                        (0, r.Z)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Ct(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var Pt = function(t) {
                var e = t.content,
                    a = void 0 === e ? null : e,
                    r = t.density,
                    l = void 0 === r ? v.S8.default : r,
                    u = t.hasFeature,
                    p = void 0 === u || u,
                    d = t.hasSidebar,
                    h = void 0 === d || d,
                    m = t.hasTopStories,
                    f = void 0 !== m && m,
                    b = t.hasHighlightedStories,
                    k = void 0 === b || b,
                    g = t.listHeading,
                    N = void 0 === g ? null : g,
                    C = t.className,
                    P = t.hasNativeAd,
                    S = void 0 !== P && P,
                    x = t.nativeAdCallback,
                    E = void 0 === x ? null : x,
                    M = t.nativeAdFailed,
                    O = void 0 === M ? null : M,
                    _ = t.cardClickHandler,
                    I = void 0 === _ ? function() {} : _,
                    D = t.isDenseFeatured,
                    H = void 0 !== D && D,
                    Q = t.cutoffIndex,
                    W = void 0 === Q ? v.yo : Q,
                    J = t.beforeContent,
                    K = void 0 === J ? null : J,
                    X = t.contentPackage,
                    q = void 0 === X ? null : X,
                    $ = t.loadMoreFetch,
                    at = void 0 === $ ? function() {} : $,
                    it = t.loadMore,
                    st = t.hiddenA11yHeader,
                    lt = t.viewport,
                    ut = t.featureAttributionData,
                    wt = t.sidebarWidgets,
                    pt = t.id,
                    dt = (0, i.useState)(!1),
                    ht = (0, n.Z)(dt, 2),
                    mt = ht[0],
                    ft = ht[1],
                    bt = (0, i.useRef)(null),
                    kt = (0, s.useSelector)((function(t) {
                        return t.app.baseSection
                    })),
                    yt = (0, s.useSelector)((function(t) {
                        return t.app.subSection
                    })),
                    gt = (0, s.useSelector)((function(t) {
                        return t.app.path
                    }));
                (0, i.useEffect)((function() {
                    var t = {
                        domNode: bt,
                        callback: vt
                    };
                    et.ZP.registerWallpaper(t)
                }), []);
                var vt = function(t) {
                        mt !== t && ft(t)
                    },
                    Ct = ot()("pageContentWrap", lt, {
                        wallpaperArea: mt
                    }, C),
                    Pt = ot()("contentAreaWrap", C, h ? "withSidebar" : ""),
                    St = Array.isArray(a) ? (0, c.Z)(a) : null,
                    xt = null,
                    Zt = null;
                ut && (St.feature = ut);
                var jt = q ? (0, i.createElement)(nt.ZP, Tt(Tt({
                        type: y.QU.TYPE_CONTENT_PACKAGE
                    }, q), {}, {
                        key: q.contentId
                    })) : null,
                    Bt = p && jt ? jt : null;
                if (jt) {
                    var Et = St;
                    St = (0, o.Z)(Et).slice(1)
                }
                if (p) {
                    var Mt = f && !q ? (0, Z.dx)(kt) : 0,
                        Ot = H ? W : 0;
                    if (S && 0 !== a.length && !O) {
                        var _t = q ? 4 : 5;
                        St.splice(_t, 0, {
                            key: "key-native-ad-".concat(_t),
                            type: rt.B,
                            responsive: !0,
                            targeting: {
                                plc: "feed"
                            },
                            callback: E
                        })
                    }
                    var Ut = (0, Z.rq)(St, Mt, k, Ot),
                        At = (0, n.Z)(Ut, 2);
                    Zt = At[0], xt = At[1]
                } else xt = St;
                var Ft = function() {
                        var t = {
                                viewport: lt,
                                hasTopStories: !q && f,
                                contentPackage: q
                            },
                            e = null,
                            a = null;
                        switch (l) {
                            case v.S8.debug:
                                e = new L, a = new T(t);
                                break;
                            case v.S8.high:
                                a = e = new R.Z;
                                break;
                            case v.S8.medium:
                                a = e = new Y;
                                break;
                            case v.S8.listing:
                                a = e = new V;
                                break;
                            case v.S8.homepage:
                                e = new F.Z, a = new z(t);
                                break;
                            case v.S8.rich:
                                e = new G.Z, t.richPolicy = !0, a = new T(t);
                                break;
                            case v.S8.search:
                                a = e = new tt;
                                break;
                            default:
                                e = new F.Z, a = new T(t)
                        }
                        return [e, a]
                    }(),
                    It = (0, n.Z)(Ft, 2),
                    Dt = It[0],
                    Lt = It[1],
                    Rt = null,
                    Ht = j.ku[gt];
                return Ht && (Rt = (0, B.jsx)(ct.Z, {
                    header: Ht.header,
                    viewport: lt,
                    section: Ht.section,
                    itemCount: Ht.itemCount
                })), (0, B.jsxs)("div", {
                    className: Ct,
                    ref: bt,
                    id: pt,
                    children: [Rt, (0, B.jsxs)("section", {
                        className: Pt,
                        children: [(0, B.jsx)("div", {
                            className: "withFlex",
                            children: (0, B.jsxs)("div", {
                                className: "contentArea",
                                children: [K, function(t, e, a) {
                                    if (p && t) {
                                        var o = {
                                            baseSection: kt,
                                            subSection: yt,
                                            items: t,
                                            displayPolicy: e,
                                            path: gt,
                                            viewport: lt,
                                            hasTopStories: !q && f,
                                            hasHighlightedStories: k,
                                            cardClickHandler: I,
                                            isDenseFeatured: H,
                                            cutoffIndex: W,
                                            contentPackage: a
                                        };
                                        return (0, B.jsx)(U, Tt({}, o))
                                    }
                                }(Zt, Lt, Bt), function(t, e) {
                                    if (t && t.length) {
                                        var a = {
                                                baseSection: kt,
                                                subSection: yt,
                                                items: t,
                                                displayPolicy: e,
                                                loadMore: it,
                                                trackingSection: "contentlist",
                                                cardClickHandler: I,
                                                loadMoreFetch: at
                                            },
                                            o = N ? st ? (0, B.jsx)("h2", {
                                                className: "listHeading a11y",
                                                children: N
                                            }) : (0, B.jsx)(A.OT, {
                                                text: N
                                            }) : null;
                                        return (0, B.jsxs)("div", {
                                            className: "contentListWrapper",
                                            children: [o, (0, B.jsx)(w.Z, Tt({}, a))]
                                        })
                                    }
                                }(xt, Dt)]
                            })
                        }), h && (0, B.jsx)("div", {
                            className: "withFlex",
                            children: (0, B.jsx)(Nt, {
                                viewport: lt,
                                sidebarWidgets: wt
                            })
                        })]
                    })]
                })
            };
            Pt.propTypes = {
                content: u().array,
                density: u().string,
                hasFeature: u().bool,
                hasSidebar: u().bool,
                hasTopStories: u().bool,
                hasHighlightedStories: u().bool,
                listHeading: u().string,
                hiddenA11yHeader: u().bool,
                className: u().string,
                sidebarWidgets: u().array,
                hasNativeAd: u().bool,
                nativeAdCallback: u().func,
                nativeAdFailed: u().bool,
                cardClickHandler: u().func,
                isDenseFeatured: u().bool,
                cutoffIndex: u().number,
                beforeContent: u().element,
                contentPackage: u().object,
                loadMoreFetch: u().func,
                featureAttributionData: u().object
            };
            const St = (0, i.memo)(Pt)
        },
        88277: (t, e, a) => {
            a.d(e, {
                Z: () => d
            });
            var o = a(15671),
                c = a(43144),
                r = a(82963),
                n = a(61120),
                i = a(60136),
                s = (a(70468), a(79321), a(95763), a(26817), a(50155), a(51335), a(83234), a(92435), a(87201), a(23503), a(72891), a(21934), a(81466), a(40703), a(40627)),
                l = a(34325),
                u = a(19227);

            function w(t, e, a) {
                return e = (0, n.Z)(e), (0, r.Z)(t, p() ? Reflect.construct(e, a || [], (0, n.Z)(t).constructor) : e.apply(t, a))
            }

            function p() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (p = function() {
                    return !!t
                })()
            }
            var d = function(t) {
                function e() {
                    var t;
                    return (0, o.Z)(this, e), (t = w(this, e)).policyName = "HighDensityPolicy", t
                }
                return (0, i.Z)(e, t), (0, c.Z)(e, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        this.cardTypesMap = new Map, this.cardTypesMap.set(u.Zm, s.QU.TYPE_TEXT)
                    }
                }]), e
            }(l.Z)
        },
        51111: (t, e, a) => {
            a.d(e, {
                Z: () => P
            });
            a(58109), a(95566), a(68438), a(83464), a(19496);
            var o = a(4942),
                c = a(92972),
                r = a.n(c),
                n = a(33568),
                i = a(97240),
                s = a(15671),
                l = a(43144),
                u = a(82963),
                w = a(61120),
                p = a(60136),
                d = (a(70468), a(79321), a(95763), a(26817), a(50155), a(51335), a(83234), a(92435), a(87201), a(23503), a(72891), a(21934), a(81466), a(40703), a(40627)),
                h = a(34325),
                m = a(19227);

            function f(t, e, a) {
                return e = (0, w.Z)(e), (0, u.Z)(t, b() ? Reflect.construct(e, a || [], (0, w.Z)(t).constructor) : e.apply(t, a))
            }

            function b() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (b = function() {
                    return !!t
                })()
            }
            const k = function(t) {
                function e(t) {
                    var a, o;
                    return (0, s.Z)(this, e), (o = f(this, e)).policyName = "TopStoriesPolicy", o.contentPackage = t.contentPackage || (null === (a = t.displayPolicy) || void 0 === a ? void 0 : a.contentPackage), o.viewportSmall = "viewportSmall" === t.viewport, o
                }
                return (0, p.Z)(e, t), (0, l.Z)(e, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        var t = this.viewportSmall ? d.QU.TYPE_DEFAULT : d.QU.TYPE_LISTING_HORIZONTAL,
                            e = this.contentPackage ? t : d.QU.TYPE_FEATURED_REVERSED;
                        this.cardTypesMap = new Map, this.cardTypesMap.set(0, e), this.cardTypesMap.set(m.Zm, t)
                    }
                }]), e
            }(h.Z);
            var y = a(88277),
                g = a(80361),
                v = 5,
                N = a(56552);

            function C(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, o)
                }
                return a
            }

            function T(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? C(Object(a), !0).forEach((function(e) {
                        (0, o.Z)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : C(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function P(t) {
                var e = t.items,
                    a = t.baseSection,
                    o = void 0 === a ? "news" : a,
                    c = t.subSection,
                    r = void 0 === c ? "" : c,
                    s = t.viewport,
                    l = void 0 === s ? "viewportLarge" : s,
                    u = t.cardClickHandler,
                    w = void 0 === u ? function() {} : u,
                    p = t.mobileAd,
                    d = t.contentPackage,
                    h = t.title,
                    f = void 0 === h ? "Featured Content" : h,
                    b = t.displayPolicy;
                if (!e) return null;
                var C = "viewportSmall" === l,
                    P = e.slice(0, v),
                    S = e.slice(v, m.yo),
                    x = C ? new g.Z : new y.Z,
                    Z = {
                        baseSection: o,
                        subSection: r,
                        loadMore: !1,
                        cardClickHandler: w
                    };
                return (0, N.jsxs)(N.Fragment, {
                    children: [(0, N.jsx)(i.Z, {
                        level: "h2",
                        hidden: !0,
                        children: f
                    }), (0, N.jsxs)("div", {
                        className: "featuredNews sclt-featuredTopStoriesDense",
                        children: [(0, N.jsx)("div", {
                            className: "featuredNewsContentPackage",
                            children: d
                        }), (0, N.jsxs)("div", {
                            className: "featuredTopStories",
                            children: [(0, N.jsx)("div", {
                                className: "primaryTopStories",
                                "data-cy": "topStoriesFeaturedNews",
                                children: (0, N.jsx)(n.Z, T({
                                    items: P,
                                    displayPolicy: new k({
                                        contentPackage: d,
                                        displayPolicy: b,
                                        viewport: l
                                    }),
                                    trackingSection: "featuredNewsPrimaryTopStoriesContentList"
                                }, Z))
                            }), p, (0, N.jsx)("div", {
                                className: "secondaryTopStories",
                                children: (0, N.jsx)(n.Z, T({
                                    items: S,
                                    displayPolicy: x,
                                    trackingSection: "featuredNewsSecondaryTopStoriesContentList"
                                }, Z))
                            })]
                        })]
                    })]
                })
            }
            P.propTypes = {
                items: r().array.isRequired,
                baseSection: r().string,
                subSection: r().string,
                viewport: r().string,
                cardClickHandler: r().func,
                mobileAd: r().object,
                contentPackage: r().object,
                title: r().string,
                displayPolicy: r().object
            }
        },
        70847: (t, e, a) => {
            a.d(e, {
                Z: () => h
            });
            var o = a(29439),
                c = a(35098),
                r = a(92972),
                n = a.n(r),
                i = a(35049),
                s = a(42820),
                l = a(10078),
                u = a(51591),
                w = a(73457),
                p = a(56552);

            function d(t) {
                var e = t.header,
                    a = void 0 === e ? "" : e,
                    r = t.itemCount,
                    n = t.section,
                    d = (0, s.useSelector)((function(t) {
                        return t.sectionalContent
                    })),
                    h = (0, s.useSelector)((function(t) {
                        return t.app.path
                    })),
                    m = (0, s.useDispatch)(),
                    f = (0, c.useState)([]),
                    b = (0, o.Z)(f, 2),
                    k = b[0],
                    y = b[1];
                (0, c.useEffect)((function() {
                    m((0, l.md)(n, r))
                }), [h]);
                var g = d[n];
                (0, c.useEffect)((function() {
                    null !== g && void 0 !== g && g.sectionList && y((0, u.h)(g.sectionList, {
                        name: w.i1
                    }, h))
                }), [null === g || void 0 === g ? void 0 : g.sectionList]);
                var v = {
                        carouselTitle: a
                    },
                    N = {
                        instance: a.replace(/ Video/g, "")
                    };
                return (0, p.jsx)(i.Z, {
                    layout: v,
                    items: k,
                    featureAttributionData: N
                })
            }
            d.propTypes = {
                header: n().string
            };
            const h = d
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-AsyncContentArea.f9bc4e5fd491b7c4a91a.js.map