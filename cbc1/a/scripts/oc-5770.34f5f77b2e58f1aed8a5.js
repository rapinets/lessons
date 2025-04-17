! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fa8c3354-f399-4877-8a86-f0bfc8672ad5", e._sentryDebugIdIdentifier = "sentry-dbid-fa8c3354-f399-4877-8a86-f0bfc8672ad5")
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
    [5770, 6574, 4192, 5526, 91], {
        56605: (e, t, n) => {
            n.d(t, {
                Np: () => m,
                Z$: () => w,
                bY: () => b,
                j2: () => y,
                lM: () => h,
                n$: () => j,
                vc: () => O
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(88101),
                o = n(13126),
                a = n(27109),
                c = n(49154),
                s = n(30091),
                l = n(70787),
                u = n(85065),
                d = n(29274),
                p = n(8082),
                f = n(47452);

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

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
                    return function(l, u) {
                        var p = e && "/" !== e ? i.DW(e, !0) : d.uS;
                        e = p.toLowerCase();
                        var f = u(),
                            v = i.Dr(e),
                            g = (0, o.sU)(v, r, e, f.featureflags),
                            m = i.Pm(e, 1),
                            b = i.If(e, Boolean(n)),
                            h = (f.tracking || {}).tracking,
                            y = (f.app || {}).statusCode,
                            O = i.wT(i.ch(i.Cm(p))),
                            j = {
                                "og:url": O,
                                canonical: O
                            },
                            w = (0, s.getVfUrl)(O);
                        w && (j["vf:url"] = w);
                        var x = (0, o.vU)(j),
                            P = (0, o.db)((0, o._O)({
                                adOrder: c,
                                path: e,
                                baseSection: v,
                                baseNavSection: g,
                                subSection: m,
                                section: b,
                                sponsored: t,
                                contentId: n,
                                meta: x,
                                statusCode: y,
                                defaultHeadlineImage: f.rightRail && f.rightRail.defaultHeadlineImage || f.page && f.page.defaultHeadlineImage || ""
                            }), h);
                        return l((0, a.set_app_state)({
                            app: P
                        }))
                    }
                },
                b = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                    return function(c, s) {
                        e = e && "/" !== e ? i.DW(e) : d.uS;
                        var l = s(),
                            u = i.Dr(e),
                            p = (0, o.sU)(u, r, e, l.featureflags),
                            f = i.Pm(e, 1),
                            v = i.If(e, Boolean(n)),
                            g = (0, o.db)((0, o._O)({
                                path: e,
                                baseSection: u,
                                baseNavSection: p,
                                subSection: f,
                                section: v,
                                sponsored: t,
                                contentId: n,
                                meta: l.app.meta,
                                title: l.app.title,
                                contentType: l.app.contentType
                            }), l.tracking);
                        return c((0, a.set_app_state)({
                            app: g
                        }))
                    }
                },
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Iz;
                    return function(n) {
                        (0, f.jh)(t) || (t = f.Iz), e = e && "/" !== e ? i.DW(e) : d.uS;
                        var r = i.Dr(e),
                            c = i.Pm(e, 1),
                            s = i.If(e, !1),
                            v = (0, l.vr)(u.od, s, "index"),
                            g = (0, f.hl)(t),
                            m = (0, o._O)({
                                path: e,
                                baseSection: r,
                                baseNavSection: r,
                                subSection: c,
                                section: s,
                                sponsored: !1,
                                meta: (0, o.uL)(),
                                pageType: p.sL.BLANK,
                                ad_hierarchy: v,
                                title: g,
                                statusCode: t
                            });
                        return n((0, a.set_app_state)({
                            app: m
                        }))
                    }
                },
                y = function(e, t, n) {
                    return function(r, o) {
                        var c = g({}, o().app);
                        e && (c.title = e), t && (u.UK.includes(n) && (t = g(g({}, t), {}, {
                            robots: "noindex"
                        })), c.meta = t), n && (c.contentType = n, c.themeClassNames = i.Le(c)), r((0, a.set_app_state)({
                            app: c
                        }))
                    }
                },
                O = function(e, t, n) {
                    var r = Object.values(p.sL).includes(n) ? n : "";
                    return function(n, i) {
                        var o = g({}, i().app);
                        o.pageType = r, e && (o.title = "".concat(e, " | CBC.ca")), t && (o.meta = t), n((0, a.set_app_state)({
                            app: o
                        }))
                    }
                },
                j = function(e) {
                    return function(t, n) {
                        var r = g({}, n().app);
                        r.title = e, t((0, a.set_app_state)({
                            app: r
                        }))
                    }
                },
                w = function(e) {
                    return function(t) {
                        var n = "true" === e;
                        t((0, c.e)({
                            isWebView: n
                        }))
                    }
                }
        },
        41550: (e, t, n) => {
            n.d(t, {
                Fv: () => s,
                Oc: () => l,
                Sv: () => v,
                TF: () => i,
                TY: () => a,
                UZ: () => f,
                Uc: () => p,
                Xg: () => d,
                lz: () => r,
                oC: () => u,
                xA: () => o,
                zV: () => c
            });
            var r = {
                    MAP: {
                        "Sports Network": !0,
                        "The Canadian Press": !0,
                        "The Associated Press": !0
                    },
                    REUTERS: "Thomson Reuters"
                },
                i = "https://i.cbc.ca/1.470050.1431707740!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/default-headline-image-news.jpg",
                o = ["OPINION", "FIRST PERSON", "ANALYSIS"],
                a = {
                    id: "",
                    aspectRatio: "4x3"
                },
                c = {
                    runtime: 0,
                    clipID: "",
                    description: "",
                    autoPlay: !1
                },
                s = {
                    runtime: 0,
                    clipID: "",
                    description: "",
                    autoPlay: !1,
                    title: ""
                },
                l = {
                    title: "",
                    credit: "",
                    url: "",
                    showcaption: !1,
                    description: "",
                    mass: "full",
                    type: "image",
                    alt: "",
                    isAboveFold: !0
                },
                u = {
                    id: "",
                    type: "",
                    source: "",
                    corrections: [],
                    clarifications: [],
                    headline: "",
                    deck: "",
                    description: "",
                    byline: "",
                    highlights: {},
                    intlinks: [],
                    externalLinks: [],
                    updatedAt: 0,
                    publishedAt: 0,
                    publishedAtVerbal: "",
                    displayComments: !1,
                    url: "",
                    flag: "",
                    body: "",
                    keywords: "",
                    segments: [],
                    episode: {},
                    attribution: {},
                    isPreview: !1,
                    adExclusions: [],
                    sponsorBio: {},
                    subject: [],
                    authorList: [],
                    newsletter: "false",
                    embedtypes: [],
                    contentarea: "",
                    subsection1: "",
                    subsection2: "",
                    subsection3: "",
                    subsection4: "",
                    wordcount: 0,
                    gs_categories: [],
                    gs_keywords: []
                },
                d = {
                    title: "",
                    name: "",
                    biography: "",
                    sourceId: "",
                    url: "",
                    links: null,
                    photoURL: ""
                },
                p = "politics",
                f = "news",
                v = ["First Person", "Opinion"]
        },
        89698: (e, t, n) => {
            n.d(t, {
                Jf: () => O,
                Pc: () => h,
                Rf: () => y
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = n(56605),
                c = n(46484),
                s = n(24557),
                l = n(41718),
                u = n(15549),
                d = n(24876),
                p = n(48271),
                f = n(54799),
                v = n(60444),
                g = n(67530),
                m = n(50465),
                b = n(41550),
                h = function(e) {
                    return function(t) {
                        var n = (0, c.fo)(e),
                            r = n.pageTitle,
                            i = n.meta,
                            o = e.type;
                        t((0, a.j2)(r, i, o))
                    }
                },
                y = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return function() {
                        var n = (0, r.Z)(o().mark((function n(r) {
                            var i, a, c, v;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r((0, s.om)()), n.prev = 1, r((0, d.ii)()), n.next = 5, (0, p.w3)(e, t);
                                    case 5:
                                        if (i = n.sent, a = i.contentItem, g.wF.includes(null === a || void 0 === a ? void 0 : a.type)) {
                                            n.next = 10;
                                            break
                                        }
                                        throw l.default.warn("(fetch_detail) content type not supported!"), new m.p(404);
                                    case 10:
                                        c = (0, f.zN)(a, e), r((0, s.q2)(c)), r(h(c)), n.next = 20;
                                        break;
                                    case 15:
                                        throw n.prev = 15, n.t0 = n.catch(1), v = n.t0 instanceof Error ? n.t0 : new m.o(n.t0), l.default.error("(fetch_detail) request failed for ".concat(e), v), v;
                                    case 20:
                                        return n.prev = 20, r((0, u.k)()), n.finish(20);
                                    case 23:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 15, 20, 23]
                            ])
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                O = function(e) {
                    return function() {
                        var t = (0, r.Z)(o().mark((function t(n, r) {
                            var i, a, c, u, d, p;
                            return o().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = r(), a = i.app, c = i.detail, u = c.content, a.baseSection !== b.UZ || a.subSection === b.Uc || b.Sv.includes(u.flag) || !u.id || 0 !== u.intlinks.length) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.prev = 3, t.next = 6, (0, v.Q)(u.id, e);
                                    case 6:
                                        d = t.sent, p = (0, f.lO)(d), n((0, s.z0)(p)), t.next = 15;
                                        break;
                                    case 11:
                                        throw t.prev = 11, t.t0 = t.catch(3), l.default.error("(fetch_related_items) request failed for ".concat(u.id), t.t0), t.t0;
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [3, 11]
                            ])
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
        },
        15549: (e, t, n) => {
            n.d(t, {
                k: () => o
            });
            var r = n(7919),
                i = n(24876);

            function o() {
                return function(e, t) {
                    var n, o, a = null === (n = t().loader) || void 0 === n ? void 0 : n.count,
                        c = null === (o = t().loader) || void 0 === o ? void 0 : o.loaded;
                    if (a - 1 < r.X) throw new Error("set_loading_complete: load count < ZERO_COUNT");
                    if (a - 1 === r.X && c) throw new Error("set_loading_complete: loaded state already true");
                    e((0, i.bo)())
                }
            }
        },
        75301: (e, t, n) => {
            n.d(t, {
                zg: () => y,
                Xd: () => h,
                fP: () => b,
                Ti: () => O
            });
            var r = n(93433),
                i = n(15861),
                o = n(64687),
                a = n.n(o),
                c = (n(9867), n(7231), n(58109), n(95566), n(68438), n(74987)),
                s = (0, n(4505).identifyNewsletterSourceAPI)(),
                l = "".concat(s, "/newsletter/get_active_newsletters?source=").concat(encodeURIComponent((0, c.j)() ? window.location.host : "server")),
                u = "".concat(s, "/newsletter"),
                d = "".concat(s, "/subscription/subscribe"),
                p = "".concat(s, "/middlewareerrors/add"),
                f = n(43386),
                v = n(41718),
                g = n(17980),
                m = n(40260),
                b = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function() {
                        var e = (0, i.Z)(a().mark((function e(n) {
                            var r, o;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, !(0, c.j)()) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (0 !== t.length) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        return r = t.map(function() {
                                            var e = (0, i.Z)(a().mark((function e(t) {
                                                var n;
                                                return a().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, (0, f.requestJSON)("".concat(u, "/").concat(t));
                                                        case 2:
                                                            return n = e.sent, e.abrupt("return", (null === n || void 0 === n ? void 0 : n.data) || null);
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()), e.next = 8, Promise.all(r);
                                    case 8:
                                        o = e.sent.filter(Boolean), n((0, g.vF)({
                                            newsletters: o
                                        })), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(0), v.default.error("(fetch_some_newsletters) request failed", e.t0);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 12]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                h = function(e) {
                    return function() {
                        var t = (0, i.Z)(a().mark((function t(n, i) {
                            var o, c, s, l;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (c = i(), null !== (s = (null === c || void 0 === c || null === (o = c.newsletters) || void 0 === o ? void 0 : o.newsletters) || null) && void 0 !== s && s.length && "false" !== s) {
                                            t.next = 6;
                                            break
                                        }
                                        return l = (0, m.r)(e), t.next = 6, n(b.apply(void 0, (0, r.Z)(l)));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                y = function() {
                    return function() {
                        var e = (0, i.Z)(a().mark((function e(t, n) {
                            var r, i, o, c, s;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, i = n(), "false" !== (o = (null === i || void 0 === i || null === (r = i.newsletters) || void 0 === r ? void 0 : r.newsletters) || null) && null !== o && void 0 !== o && o.length && 1 !== (null === o || void 0 === o ? void 0 : o.length)) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 6, (0, f.requestJSON)(l);
                                    case 6:
                                        c = e.sent, s = (null === c || void 0 === c ? void 0 : c.data) || !1, t((0, g.vF)({
                                            newsletters: s
                                        }));
                                    case 9:
                                        e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), v.default.error("(fetch_all_newsletter_state) request failed", e.t0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 11]
                            ])
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                O = function(e, t, n, r, i, o, a) {
                    var c, s = new Date,
                        l = s.getTime() - r;
                    if ((l < 2e3 || "" !== i) && ("undefined" === typeof process || void 0 === (null === (c = process) || void 0 === c || null === (c = c.env) || void 0 === c ? void 0 : c.JEST_WORKER_ID))) {
                        var u = {
                                newsletter_id: e,
                                t_i: new Date(parseInt(r)),
                                t_p: s
                            },
                            d = "";
                        l < 2e3 && (d = "NonCaptcha time filter"), "" !== i && (d = "NonCaptcha honeypot filter");
                        var p = {
                            source: window.location.href,
                            api_route: "n/a",
                            request_data: u,
                            middleware_type: "NonCaptcha",
                            error_type: d
                        };
                        return function(t) {
                            w(t, e, p), new Error("This submission will fail silently.")
                        }
                    }
                    return function(r) {
                        j(r, e, t, n, o, a)
                    }
                },
                j = function(e, t, n, r, i, o) {
                    return new Promise((function(a, c) {
                        (0, f.request)(d, {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: '{"newsletter_id":"'.concat(t, '","email":"').concat(r, '","recaptcha_token":"').concat(i, '","action":"').concat(o, '"}')
                        }).then((function(e) {
                            if (e.ok) return v.default.debug("post_subscribe_newsletters call"), e.json();
                            if (500 === e.status) return e.json();
                            throw new Error(e.statusText)
                        })).catch((function(t) {
                            v.default.error("(post_subscribe_newsletters_api) request failed", t), e((0, g.eB)({
                                subscribe: {
                                    errors: {
                                        error: t
                                    }
                                }
                            })), c(t)
                        })).then((function(r) {
                            if (r && r.hasOwnProperty("error") && (r = {
                                    error: {
                                        newsletter_id: t
                                    },
                                    errors: r
                                }), e((0, g.eB)({
                                    subscribe: r
                                })), r.message && r.message.result && !r.message.result.confirmation) {
                                var i = null;
                                r.message.result.data && (i = r.message.result.data.id), window.CBC.APP.SC.EventTracker.trackEvent("SUBSCRIBED", {
                                    content: {
                                        title: n,
                                        id: t,
                                        type: "newsletter"
                                    },
                                    user: {
                                        subscriptions: {
                                            newsletters: [t]
                                        },
                                        id: {
                                            adestra: i
                                        }
                                    }
                                })
                            }
                            a()
                        }))
                    }))
                },
                w = function(e, t, n) {
                    return new Promise((function(r, i) {
                        (0, f.request)(p, {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(n)
                        }).then((function(e) {
                            if (e.ok) return v.default.debug("post_middleware_newsletters call"), e.json();
                            if (500 === e.status) return e.json();
                            throw new Error(e.statusText)
                        })).catch((function(t) {
                            v.default.error("(post_middleware_newsletters_api) request failed", t), e((0, g._8)({
                                middleware_error: {
                                    errors: {
                                        error: t
                                    }
                                }
                            })), i(t)
                        })).then((function(n) {
                            n && n.hasOwnProperty("error") && (n = {
                                error: {
                                    newsletter_id: t
                                },
                                errors: n
                            }), e((0, g._8)({
                                middleware_error: n
                            })), r()
                        }))
                    }))
                }
        },
        96846: (e, t, n) => {
            n.d(t, {
                Vf: () => N,
                Ny: () => k,
                ag: () => A
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = (n(30666), n(95566), n(6129), n(22474)),
                c = n(91189),
                s = n(41910),
                l = n(46905),
                u = n(27109),
                d = n(56605),
                p = n(15549),
                f = n(24876),
                v = n(96630),
                g = n(97150),
                m = n(4954),
                b = n(54799),
                h = n(93710),
                y = n(57241),
                O = n(41718),
                j = n(50465),
                w = n(53333),
                x = n(29274),
                P = n(68075),
                C = (n(61390), n(87199)),
                S = n(75301),
                I = (n(9867), n(7231), n(14066)),
                T = n(21494),
                D = function(e, t) {
                    return function() {
                        var n = (0, r.Z)(o().mark((function n(r) {
                            var i, a, s, l, u, d, p, f, v;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (!Object.keys(T.bg).includes(e)) {
                                            n.next = 17;
                                            break
                                        }
                                        return s = null === (i = T.bg[e]) || void 0 === i ? void 0 : i.lineupSlug, l = null === (a = T.bg[e]) || void 0 === a ? void 0 : a.attributes, n.prev = 3, n.next = 6, (0, c.Q)({
                                            lineupSlug: s,
                                            categorySlug: "",
                                            subjectsSet: "",
                                            tags: ""
                                        });
                                    case 6:
                                        u = n.sent, d = u.allContentItems, p = (0, b.H9)(d.nodes), f = t ? p.slice(0, t) : p, v = f.map((function(e) {
                                            var t = {};
                                            return l.map((function(n) {
                                                return t[n] = e[n]
                                            })), t
                                        })), r((0, I.b)(v)), n.next = 17;
                                        break;
                                    case 14:
                                        n.prev = 14, n.t0 = n.catch(3), O.default.error("(fetch_single_lineup_for_path) Unable to fetch lineup ".concat(s), n.t0);
                                    case 17:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [3, 14]
                            ])
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                N = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return function() {
                        var n = (0, r.Z)(o().mark((function n(r, i) {
                            var c, l, u, d, b, w, x, I, T, N, k, A, E, _, L, Z, R, H;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r((0, f.ii)()), n.prev = 1, x = "homepage" === e ? e : e.slice(1), I = "", t ? (T = (0, P.getFeedCookie)("nine_gtoken"), I = 'path: "'.concat(x, '",contentStatus: "preview;aggToken=').concat(null === T || void 0 === T ? void 0 : T.value, ";cacheBust=").concat((new Date).getTime(), '"')) : I = 'path: "'.concat(x, '"'), N = {}, k = null, t) {
                                            n.next = 17;
                                            break
                                        }
                                        if (Object.keys(i().page.lineupSwaps).includes(x)) {
                                            n.next = 16;
                                            break
                                        }
                                        return n.next = 12, (0, g._Z)(x);
                                    case 12:
                                        N = n.sent, k = N[x], n.next = 17;
                                        break;
                                    case 16:
                                        k = i().page.lineupSwaps[x];
                                    case 17:
                                        return n.next = 19, (0, a.H6)(I, t, k);
                                    case 19:
                                        return A = n.sent, E = A.page, n.next = 23, r(D(e, 4));
                                    case 23:
                                        return n.next = 25, r((0, S.Xd)(null === (c = E) || void 0 === c ? void 0 : c.sections));
                                    case 25:
                                        _ = (null === (l = E) || void 0 === l || null === (l = l.navigation) || void 0 === l || null === (l = l.items) || void 0 === l ? void 0 : l.length) > 0 ? E.navigation : {}, E && r((0, v.L)(E, !1)), E.sections = E && E.sections && (0, m.wQ)(E), E.defaultHeadlineImage = (null === (u = E) || void 0 === u || null === (u = u.section) || void 0 === u || null === (u = u.defaultHeadlineImage) || void 0 === u || null === (u = u.aspects) || void 0 === u || null === (u = u.ratio16x9) || void 0 === u ? void 0 : u.url) || "", E.bannerImage = (null === (d = E.bannerImage) || void 0 === d || null === (d = d.aspects) || void 0 === d || null === (d = d.ratio5x1) || void 0 === d ? void 0 : d.url) || (null === (b = E.bannerImage) || void 0 === b || null === (b = b.aspects) || void 0 === b || null === (b = b.ratioCustom) || void 0 === b ? void 0 : b.url) || "", E.initialTotalCards = (0, y.Ws)(E.sections), L = "sports" === E.path ? 1 : 0, Z = null === (w = E.sections[L]) || void 0 === w || null === (w = w.main) || void 0 === w ? void 0 : w.content[0], (0, y.jD)(E, Z, L) && (R = (0, h.$)({
                                            params: {
                                                gridData: Z.content,
                                                sectionIndex: 0,
                                                isNativeAd: !0
                                            }
                                        }) || Z.content, Z.content = R), E = (0, C.C)(E), r((0, s.i$)({
                                            page: E,
                                            inPageNav: {
                                                navigation: _
                                            },
                                            lineupSwapObject: N
                                        })), n.next = 44;
                                        break;
                                    case 39:
                                        throw n.prev = 39, n.t0 = n.catch(1), H = n.t0 instanceof Error ? n.t0 : new j.o(n.t0), O.default.error("(fetch_page_content) request failed for path ".concat(e), H), H;
                                    case 44:
                                        return n.prev = 44, r((0, p.k)()), n.finish(44);
                                    case 47:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 39, 44, 47]
                            ])
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                k = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return function(t) {
                        var n = t.sectionIndex,
                            i = void 0 === n ? 0 : n,
                            a = t.contentIndex,
                            s = void 0 === a ? 0 : a,
                            u = t.position,
                            d = void 0 === u ? "main" : u,
                            v = t.slug,
                            g = void 0 === v ? "" : v,
                            m = t.pubQueueId;
                        return function(t) {
                            var n = t.page,
                                a = void 0 === n ? 2 : n;
                            return function() {
                                var t = (0, r.Z)(o().mark((function t(n) {
                                    var r, u, v, h, y, P, C, S, I, T;
                                    return o().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return n((0, f.ii)()), t.prev = 1, v = (null === e || void 0 === e ? void 0 : e[m]) || 0, h = v || x.L8, t.next = 6, (0, c.Q)({
                                                    lineupSlug: g || "",
                                                    categorySlug: "empty-category",
                                                    page: a,
                                                    pageSize: h
                                                });
                                            case 6:
                                                y = t.sent, P = y.allContentItems, C = {
                                                    sectionIndex: i,
                                                    contentIndex: s,
                                                    position: d
                                                }, S = null !== (r = null === P || void 0 === P || null === (u = P.nodes) || void 0 === u ? void 0 : u.length) && void 0 !== r ? r : 0, (I = {
                                                    newSize: 2 === a ? v + S : null,
                                                    disableLoadMore: S < h,
                                                    newContent: (0, b.H9)(null === P || void 0 === P ? void 0 : P.nodes)
                                                }).newContent[0] && (I.newContent[0].focus = !0), I.newContent.unshift({
                                                    type: w.T
                                                }), n((0, l.n)(I, C)), t.next = 22;
                                                break;
                                            case 17:
                                                throw t.prev = 17, t.t0 = t.catch(1), T = t.t0 instanceof Error ? t.t0 : new j.o(t.t0), O.default.error("(fetch_page_load_more) request failed for section ".concat(g), T), T;
                                            case 22:
                                                return t.prev = 22, n((0, p.k)()), t.finish(22);
                                            case 25:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 17, 22, 25]
                                    ])
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }
                    }
                },
                A = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return function() {
                        var n = (0, r.Z)(o().mark((function n(r) {
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        r((0, u.app_reset)()), r((0, d.Np)(e, !1, t));
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                }
        },
        61390: (e, t, n) => {
            n.d(t, {
                R: () => r,
                e: () => i
            });
            var r = (0, n(93849).KF)("Client.stats.urlABTestsConfig"),
                i = "A"
        },
        46905: (e, t, n) => {
            n.d(t, {
                C: () => c,
                n: () => a
            });
            var r = n(93433),
                i = n(41910),
                o = n(97150),
                a = function(e, t) {
                    return function(n, r) {
                        var a = (0, o.w6)(r().page.sections, e, t);
                        n((0, i.ok)({
                            sections: a
                        }))
                    }
                },
                c = function(e) {
                    return function(t, n) {
                        var a = n().page.sections ? (0, o.TS)((0, r.Z)(n().page.sections)) : [];
                        t((0, i.iN)({
                            sections: a,
                            hasNativeAd: e
                        }))
                    }
                }
        },
        97150: (e, t, n) => {
            n.d(t, {
                Gc: () => g,
                TS: () => y,
                _Z: () => h,
                w6: () => O
            });
            var r = n(4942),
                i = n(15861),
                o = (n(30666), n(95566), n(6129), n(9867), n(7231), n(58109), n(68438), n(83464), n(19496), n(64687)),
                a = n.n(o),
                c = n(61390),
                s = n(43386),
                l = n(41718),
                u = n(88101),
                d = n(71611),
                p = n(74987);

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

            function v(e) {
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
            var g = function() {
                    var e = (0, i.Z)(a().mark((function e() {
                        var t, n, r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = null, !(0, p.j)()) {
                                        e.next = 5;
                                        break
                                    }
                                    null !== (n = window.CBC) && void 0 !== n && null !== (n = n.APP) && void 0 !== n && null !== (n = n.ANA) && void 0 !== n && n.ABTESTSCONFIG && (t = window.CBC.APP.ANA.ABTESTSCONFIG), e.next = 14;
                                    break;
                                case 5:
                                    return e.prev = 5, e.next = 8, (0, s.requestJSON)(c.R);
                                case 8:
                                    t = e.sent, e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(5), l.default.error("(getABTestsConfig) request failed for ".concat(c.R), e.t0);
                                case 14:
                                    if (t) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 16:
                                    return r = t.tests, e.abrupt("return", r);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [5, 11]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function(e, t) {
                    return Object.values(e).find((function(e) {
                        return (0, u.DW)(e.scope.url) === t
                    }))
                },
                b = function(e, t) {
                    var n, i, o = null === t || void 0 === t || null === (n = t.variants[c.e]) || void 0 === n ? void 0 : n.content,
                        a = null === t || void 0 === t || null === (i = t.variants[e]) || void 0 === i ? void 0 : i.content;
                    if (!o || !a) return null;
                    var s = (0, u.DW)(t.scope.url);
                    return s = "" === s ? "homepage" : s, (0, r.Z)({}, s, (0, r.Z)({}, o, a))
                },
                h = function() {
                    var e = (0, i.Z)(a().mark((function e(t) {
                        var n, i, o, s, l, u;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (i = (0, r.Z)({}, t, null), !(0, p.j)() || null === (n = window) || void 0 === n || !n.Cypress) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", i);
                                case 3:
                                    return e.next = 5, g();
                                case 5:
                                    if (o = e.sent) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", i);
                                case 8:
                                    if (s = m(o, t)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", i);
                                case 11:
                                    return e.next = 13, (0, d.Mf)(s.id);
                                case 13:
                                    return (l = e.sent) && l !== c.e && (u = b(l, s)) && (i = u), e.abrupt("return", i);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function(e) {
                    return e.map((function(e) {
                        var t = e.main.content.map((function(e, t) {
                            if (0 !== t) return e;
                            if ("lineup" === e.type) {
                                var n = e.content.filter((function(e) {
                                    return "native-ad" !== e.type
                                }));
                                return v(v({}, e), {}, {
                                    content: n
                                })
                            }
                            return e
                        }));
                        return v(v({}, e), {}, {
                            main: v(v({}, e.main), {}, {
                                content: t
                            })
                        })
                    }))
                },
                O = function(e, t, n) {
                    var i = t.disableLoadMore,
                        o = t.newContent,
                        a = t.newSize,
                        c = n.sectionIndex,
                        s = n.contentIndex,
                        l = n.position;
                    return e.map((function(e, t) {
                        return c !== t ? e : v(v({}, e), {}, (0, r.Z)({}, l, v(v({}, e[l]), {}, {
                            content: e[l].content.map((function(e, t) {
                                return s !== t ? e : v(v({}, e), {}, {
                                    disableLoadMore: i,
                                    wrapper: v(v({}, e.wrapper), {}, {
                                        size: null !== a && void 0 !== a ? a : e.wrapper.size + o.length
                                    }),
                                    content: e.content.map((function(e) {
                                        var t = v({}, e);
                                        return t.focus && (t.focus = !1), t
                                    })).concat(o)
                                })
                            }))
                        })))
                    }))
                }
        },
        63545: (e, t, n) => {
            n.d(t, {
                N: () => i,
                h: () => r
            });
            var r = "video_persistent_player_update",
                i = "video_persistent_player_null"
        },
        46826: (e, t, n) => {
            n.d(t, {
                m: () => i,
                o: () => o
            });
            var r = n(63545),
                i = function() {
                    return function(e) {
                        return e({
                            type: r.N,
                            payload: null
                        })
                    }
                },
                o = function(e) {
                    var t = e.isVisible,
                        n = e.status,
                        i = e.mediaItem,
                        o = e.selector,
                        a = e.routeUpdate,
                        c = e.forcePersistence,
                        s = e.sizeConfig,
                        l = e.controlsConfig,
                        u = e.mediaDataOverrides;
                    return function(e, d) {
                        var p, f, v = d().persistentPlayer,
                            g = {
                                isVisible: void 0 !== t ? t : v.isVisible,
                                mediaItem: void 0 !== i ? i : v.mediaItem,
                                selector: void 0 !== o ? o : v.selector,
                                routeUpdate: void 0 !== a ? a : v.routeUpdate,
                                forcePersistence: void 0 !== c ? c : v.forcePersistence,
                                status: void 0 !== n ? n : v.status,
                                sizeConfig: void 0 !== s ? s : v.sizeConfig,
                                controlsConfig: {
                                    hideFullscreenBtn: null !== (p = null === l || void 0 === l ? void 0 : l.hideFullscreenBtn) && void 0 !== p && p
                                },
                                mediaDataOverrides: void 0 !== u ? u : v.mediaDataOverrides
                            };
                        return e((f = g, {
                            type: r.h,
                            payload: f
                        }))
                    }
                }
        },
        17346: (e, t, n) => {
            n.d(t, {
                v: () => h
            });
            var r = n(93433),
                i = n(29439),
                o = n(15861),
                a = n(64687),
                c = n.n(a),
                s = (n(83464), n(95566), n(19496), n(58109), n(68438), n(9867), n(7231), n(41718)),
                l = n(33355),
                u = n(15549),
                d = n(24876),
                p = n(22474),
                f = n(31646),
                v = n(75301),
                g = n(90955),
                m = (0, f.f)("rightrail"),
                b = function(e, t, n) {
                    return m(e).filter((function(e) {
                        return e.path === t
                    })).forEach((function(e) {
                        var t = e.value;
                        ((null === t || void 0 === t ? void 0 : t.hide) || []).forEach((function(e) {
                            n = n.filter((function(t) {
                                var n;
                                return !(((null === t || void 0 === t ? void 0 : t.sourceId) || (null === t || void 0 === t || null === (n = t.wrapper) || void 0 === n ? void 0 : n.sourceId)) === "".concat(e))
                            }))
                        }))
                    })), n
                };

            function h(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return function() {
                    var n = (0, o.Z)(c().mark((function n(o, a) {
                        var f, m, h, y, O, j, w, x, P, C, S, I, T, D, N, k;
                        return c().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.prev = 0, o((0, d.ii)()), n.next = 4, (0, p.TX)('path: "'.concat(e, '"'), t);
                                case 4:
                                    if (w = n.sent, x = w.page) {
                                        n.next = 8;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 8:
                                    if (P = (0, i.Z)(x.sections, 1), C = P[0], S = (null === (f = x.bannerImage) || void 0 === f || null === (f = f.aspects) || void 0 === f || null === (f = f.ratio5x1) || void 0 === f ? void 0 : f.url) || (null === (m = x.bannerImage) || void 0 === m || null === (m = m.aspects) || void 0 === m || null === (m = m.ratioCustom) || void 0 === m ? void 0 : m.url) || "", null !== (h = C.right) && void 0 !== h && h.content || S) {
                                        n.next = 12;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 12:
                                    return I = a(), T = b(I, x.path, (null === (y = C.right) || void 0 === y ? void 0 : y.content) || []), D = [o((0, l.y3)({
                                        path: x.path,
                                        banner: S,
                                        widgets: T,
                                        defaultHeadlineImage: (null === (O = x.section) || void 0 === O || null === (O = O.defaultHeadlineImage) || void 0 === O || null === (O = O.aspects) || void 0 === O || null === (O = O.ratio16x9) || void 0 === O ? void 0 : O.url) || ""
                                    }))], (N = (null === I || void 0 === I || null === (j = I.newsletters) || void 0 === j ? void 0 : j.newsletters) || null) && "false" !== N || (k = T.map((function(e) {
                                        var t;
                                        if (e.type === g._m) return null === e || void 0 === e || null === (t = e.pageWidget) || void 0 === t || null === (t = t.metadata) || void 0 === t ? void 0 : t.newsletter
                                    })).filter(Boolean), D.push(o(v.fP.apply(void 0, (0, r.Z)(k))))), n.abrupt("return", Promise.all(D));
                                case 20:
                                    n.prev = 20, n.t0 = n.catch(0), s.default.error("(fetch_supplementary_data) Path ".concat(e, " does not exist"), n.t0);
                                case 23:
                                    return n.prev = 23, o((0, u.k)()), n.finish(23);
                                case 26:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [0, 20, 23, 26]
                        ])
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }()
            }
        },
        10078: (e, t, n) => {
            n.d(t, {
                P4: () => y,
                md: () => b,
                zK: () => h
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = n(15549),
                c = n(24876),
                s = n(97365),
                l = n(91189),
                u = n(88101),
                d = n(54799),
                p = n(57241),
                f = n(29274),
                v = n(41718),
                g = n(15426),
                m = n(43386);

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.L8;
                return function() {
                    var n = (0, r.Z)(o().mark((function n(r, i) {
                        var f, g, m, b, h, y, O;
                        return o().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (e) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    if (f = i(), g = (0, u.aC)(e), m = (0, u.Th)(e), b = !!f.sectionalContent[e], h = (0, p.ey)(e, (0, u.un)(e)), (0, u.gb)({
                                            category: h,
                                            lineup: g,
                                            sectionExists: b
                                        })) {
                                        n.next = 9;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 9:
                                    return r((0, c.ii)()), n.prev = 10, n.next = 13, (0, l.Q)({
                                        lineupSlug: g,
                                        categorySlug: h,
                                        subjectsSet: m,
                                        tags: "",
                                        page: 1,
                                        pageSize: Number(t)
                                    });
                                case 13:
                                    y = n.sent, O = y.allContentItems.nodes, (0, p.$I)(e, O), O = (0, d.H9)(O), r((0, s.Ui)({
                                        sectionList: O,
                                        section: e,
                                        timestamp: Date.now()
                                    })), n.next = 24;
                                    break;
                                case 20:
                                    n.prev = 20, n.t0 = n.catch(10), r((0, s.uy)({
                                        section: e
                                    })), v.default.error("(fetch_sectional_content_graphql) request failed for section ".concat(e), n.t0);
                                case 24:
                                    return n.prev = 24, r((0, a.k)()), n.finish(24);
                                case 27:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [10, 20, 24, 27]
                        ])
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }()
            }

            function h(e) {
                return function() {
                    var t = (0, r.Z)(o().mark((function t(n, r) {
                        var i, l, u, d, p;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (i = r(), !(l = i.sectionalContent[e]) || !l.sectionList) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 6:
                                    return u = /\/summer\//.test(e) ? "summer" : "winter", n((0, c.ii)()), t.prev = 8, t.next = 11, (0, g.V)("ocelot.olympics.".concat(u, ".allsports"));
                                case 11:
                                    d = t.sent, p = d.allKeyValues.nodes[0].value, n((0, s.Ui)({
                                        sectionList: p,
                                        section: e,
                                        timestamp: Date.now()
                                    })), t.next = 19;
                                    break;
                                case 16:
                                    t.prev = 16, t.t0 = t.catch(8), v.default.error("(fetch_sectional_content_all_sports)", t.t0);
                                case 19:
                                    return t.prev = 19, n((0, a.k)()), t.finish(19);
                                case 22:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [8, 16, 19, 22]
                        ])
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
            }

            function y(e, t, n) {
                return function() {
                    var i = (0, r.Z)(o().mark((function r(i, l) {
                        var u, p, f, g, b, h, y;
                        return o().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (e && t) {
                                        r.next = 2;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 2:
                                    if (f = l(), (null === (g = (null === f || void 0 === f || null === (u = f.sectionalContent) || void 0 === u ? void 0 : u[t]) || null) || void 0 === g || null === (p = g.sectionList) || void 0 === p ? void 0 : p.length) !== n) {
                                        r.next = 6;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 6:
                                    return b = "https://www.cbc.ca/aggregate_api/v1/items?categorySlug=".concat(e, "&type=video&pageSize=").concat(n), i((0, c.ii)()), r.prev = 8, r.next = 11, (0, m.request)(b);
                                case 11:
                                    if ((h = r.sent).ok) {
                                        r.next = 14;
                                        break
                                    }
                                    throw new Error("failed to fetch sectional videos from ".concat(b));
                                case 14:
                                    return r.next = 16, h.json();
                                case 16:
                                    (y = r.sent) && y.length > 0 && i((0, s.Ui)({
                                        sectionList: (0, d.Qk)(y),
                                        section: t,
                                        timestamp: Date.now()
                                    })), r.next = 23;
                                    break;
                                case 20:
                                    r.prev = 20, r.t0 = r.catch(8), v.default.error("(fetch_sectional_videos) request failed for section ".concat(e), r.t0);
                                case 23:
                                    return r.prev = 23, i((0, a.k)()), r.finish(23);
                                case 26:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [8, 20, 23, 26]
                        ])
                    })));
                    return function(e, t) {
                        return i.apply(this, arguments)
                    }
                }()
            }
        },
        96630: (e, t, n) => {
            n.d(t, {
                L: () => v
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = n(22474),
                c = n(41718),
                s = n(88101),
                l = n(85065),
                u = n(15549),
                d = n(24876),
                p = n(26307),
                f = n(78116),
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return function() {
                        var n = (0, r.Z)(o().mark((function n(r, i) {
                            var a, c, s, l, u, d;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (a = i(), c = a.app, s = (0, f.OY)(c, e.section), !t) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.next = 6, r(g(c.path));
                                    case 6:
                                        n.next = 11;
                                        break;
                                    case 8:
                                        return d = (0, f.d7)({
                                            id: c.path,
                                            title: e.title || c.title,
                                            tracking: null === s || void 0 === s ? void 0 : s.tracking,
                                            attribution: null === (l = e.section) || void 0 === l ? void 0 : l.attributionLevels,
                                            pageType: c.pageType,
                                            description: (null === (u = e.metadata) || void 0 === u ? void 0 : u.description) || ""
                                        }), n.next = 11, r((0, p.c5)(d));
                                    case 11:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                g = function(e) {
                    return function() {
                        var t = (0, r.Z)(o().mark((function t(n, r) {
                            var i, v, g, m, b, h, y, O, j, w, x, P, C, S, I, T;
                            return o().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, b = r(), h = b.app, y = h.path, O = h.pageType, j = h.baseSection, w = h.subSection, n((0, d.ii)()), t.next = 6, (0, a.cB)('path:"'.concat(e || y, '"'));
                                    case 6:
                                        x = t.sent, P = x.page, C = "CBC ".concat(j || "", " ").concat(w || "", " - ").concat(l.Ep), S = P.title || s.RK(b.app), I = (null === P || void 0 === P || null === (i = P.metadata) || void 0 === i ? void 0 : i.description) || C, null !== (v = P.section) && void 0 !== v && v.tracking && (P.section.tracking.contenttype = "index"), T = (0, f.d7)({
                                            id: P.path,
                                            title: S,
                                            description: I,
                                            tracking: null === (g = P.section) || void 0 === g ? void 0 : g.tracking,
                                            attribution: null === (m = P.section) || void 0 === m ? void 0 : m.attributionLevels,
                                            pageType: O
                                        }), n((0, p.c5)(T)), t.next = 19;
                                        break;
                                    case 16:
                                        t.prev = 16, t.t0 = t.catch(0), c.default.error("(fetch_page_tracking_graphql) Request failed for path ".concat(e), t.t0);
                                    case 19:
                                        return t.prev = 19, n((0, u.k)()), t.finish(19);
                                    case 22:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 16, 19, 22]
                            ])
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
        },
        78116: (e, t, n) => {
            n.d(t, {
                zb: () => p,
                d7: () => j,
                OY: () => v,
                qM: () => g,
                FR: () => h,
                EF: () => m
            });
            n(58109), n(68438);
            var r = n(29439),
                i = n(4942),
                o = (n(2041), n(95566), n(2612), n(83464), n(19496), n(88101)),
                a = {
                    type: "",
                    title: "",
                    description: "",
                    trackingId: "",
                    contentarea: "",
                    contenttype: "",
                    subsection1: "",
                    subsection2: "",
                    subsection3: "",
                    subsection4: "",
                    department: {}
                },
                c = n(8082),
                s = n(74987),
                l = n(62251);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = function(e) {
                    return e ? e.split("/").reduce((function(e, t, n) {
                        return t && (e["level".concat(n + 1)] = t), e
                    }), {}) : {}
                },
                f = function() {
                    var e;
                    return (0, s.j)() && !(null === (e = window.CBC) || void 0 === e || null === (e = e.APP) || void 0 === e || null === (e = e.SC) || void 0 === e || !e.EventTracker)
                };

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e) return {};
                var n = {
                        pageType: e.pageType
                    },
                    r = e.baseSection ? e.baseSection : "misc";
                if (n = Object.assign(t, n, {
                        url: e.meta.canonical,
                        tracking: d({
                            contentArea: r,
                            contenttype: "index"
                        }, t.tracking)
                    }), e.pageType === c.sL.CUSTOM) {
                    var i = (0, o.UL)(e);
                    i && i.metadata && (n.tracking = i.metadata.tracking)
                }
                return n
            }
            var g = function(e, t, n) {
                    f() && window.CBC.APP.SC.EventTracker.trackEvent("SEARCHED", {
                        content: e,
                        app: {
                            name: "ocelot"
                        },
                        custom: t,
                        feature: n
                    })
                },
                m = function(e, t, n, r) {
                    b(!1 === t ? "OPENED" : "CLOSED", e, n, r)
                },
                b = function(e, t, n, r) {
                    O(), f() && window.CBC.APP.SC.EventTracker.trackEvent(e, {
                        feature: {
                            name: t,
                            position: n,
                            instance: r
                        },
                        app: {
                            name: "ocelot"
                        }
                    })
                },
                h = function(e, t, n, r) {
                    y("SELECTED", e, t, n, r)
                },
                y = function(e, t, n, r, i) {
                    O(), f() && window.CBC.APP.SC.EventTracker.trackEvent(e, {
                        feature: {
                            name: t,
                            instance: n,
                            position: r,
                            value: i
                        },
                        app: {
                            name: "ocelot"
                        }
                    })
                },
                O = function() {
                    f() && !1 === window.CBC.APP.SC.EventTracker.isOn() && window.CBC.APP.SC.EventTracker.turnOn()
                },
                j = function(e) {
                    var t = e.id,
                        n = e.title,
                        i = e.description,
                        o = e.tracking,
                        c = e.attribution,
                        s = e.pageType;
                    if (!o && !c && !t) return a;
                    var u = n || "";
                    return l.A.forEach((function(e) {
                        var t = (0, r.Z)(e, 2),
                            n = t[0],
                            i = t[1],
                            o = new RegExp(n, "gi");
                        u = u.replace(o, i)
                    })), o || c ? {
                        type: s || "",
                        title: u,
                        description: i || "",
                        id: t || "",
                        trackingId: t || "",
                        contentarea: o.contentArea || "",
                        contenttype: o.contenttype || "",
                        subsection1: o.subSection1 || "",
                        subsection2: o.subSection2 || "",
                        subsection3: o.subSection3 || "",
                        subsection4: o.subSection4 || "",
                        department: p(c) || {}
                    } : d(d({}, a), {}, {
                        type: "landing"
                    })
                }
        },
        26425: (e, t, n) => {
            n.d(t, {
                m: () => u
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = n(93639),
                c = n(75562),
                s = 5,
                l = n(41718);

            function u(e) {
                return function(t) {
                    if ((0, c.je)(e)) {
                        var n = (0, c.kt)(e);
                        return t((i = n, function() {
                            var e = (0, r.Z)(o().mark((function e(t) {
                                var n;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, (0, c.If)(i, s);
                                        case 3:
                                            if (n = e.sent, Array.isArray(n)) {
                                                e.next = 6;
                                                break
                                            }
                                            throw new Error("trending items expected to be of type array");
                                        case 6:
                                            return e.abrupt("return", t((0, a.JR)({
                                                section: i,
                                                contentList: n
                                            })));
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), l.default.error("(fetch_single_trending) ".concat(e.t0));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 9]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()))
                    }
                    return t((0, a.iR)()), Promise.resolve();
                    var i
                }
            }
        },
        23025: (e, t, n) => {
            n.d(t, {
                Cq: () => o,
                WZ: () => i,
                qv: () => a
            });
            var r = n(22577),
                i = function(e) {
                    return {
                        type: r.KC,
                        payload: e
                    }
                },
                o = function(e) {
                    return {
                        type: r.I$,
                        payload: e
                    }
                },
                a = function() {
                    return {
                        type: r.Hx,
                        payload: null
                    }
                }
        },
        22577: (e, t, n) => {
            n.d(t, {
                Hx: () => o,
                I$: () => i,
                KC: () => r
            });
            var r = "video_trending_update",
                i = "video_trending_error",
                o = "video_trending_null"
        },
        69912: (e, t, n) => {
            n.d(t, {
                h: () => d
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = n(97409),
                c = n(54799),
                s = n(51591),
                l = n(73457),
                u = n(23025),
                d = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.xO;
                    return function() {
                        var i = (0, r.Z)(o().mark((function r(i) {
                            var l, d, p, f, v;
                            return o().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, (0, a.TC)(e);
                                    case 3:
                                        return d = r.sent, p = null === d || void 0 === d || null === (l = d.data) || void 0 === l || null === (l = l.mlDrivenItems) || void 0 === l ? void 0 : l.items, f = null !== p && void 0 !== p && p.length ? (0, c.H9)(p) : [], v = null !== c.H9 && void 0 !== c.H9 && c.H9.length ? (0, s.h)(f, n, t) : [], r.abrupt("return", i((0, u.WZ)(v)));
                                    case 10:
                                        return r.prev = 10, r.t0 = r.catch(0), r.abrupt("return", i((0, u.Cq)(r.t0)));
                                    case 13:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 10]
                            ])
                        })));
                        return function(e) {
                            return i.apply(this, arguments)
                        }
                    }()
                }
        },
        50439: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            n(58109), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = (n(53145), n(95566), n(62153), n(35098)),
                o = n(42820),
                a = n(35152),
                c = n.n(a),
                s = n(44192),
                l = n(39416),
                u = n.n(l);
            const d = {
                breakpointExtraSmall: "350px",
                breakpointSmall: "576px",
                breakpointMedium: "768px",
                breakpointLarge: "964px",
                breakpointExtraLarge: "1280px",
                white: "#fff",
                black: "#000",
                cyan100: "#eaf9fa",
                cyan200: "#b2e9ec",
                cyan300: "#6dd5da",
                cyan400: "#35c5cc",
                cyan500: "#20bfc7",
                cyan600: "#1dadb4",
                cyan700: "#157d82",
                cyan800: "#105f63",
                cyan900: "#072729",
                blue100: "#e7f2f7",
                blue200: "#a7cfe3",
                blue300: "#58a4c9",
                blue400: "#1881b5",
                blue500: "#0074ad",
                blue600: "#00699d",
                blue700: "#004c71",
                blue800: "#003a56",
                blue900: "#001824",
                yellow100: "#fff9e8",
                yellow200: "#ffeaad",
                yellow300: "#ffd764",
                yellow400: "#ffc829",
                yellow500: "#ffc212",
                yellow600: "#e7b010",
                yellow700: "#a77f0c",
                yellow800: "#806109",
                yellow900: "#352804",
                red100: "#fde7e7",
                red200: "#f9a7a7",
                red300: "#f45858",
                red400: "#f01818",
                red500: "#e00",
                red600: "#d70000",
                red700: "#9c0000",
                red800: "#700",
                red900: "#310000",
                orange100: "#fef1eb",
                orange200: "#fbcdb8",
                orange300: "#f7a077",
                orange400: "#f37c44",
                orange500: "#f26e30",
                orange600: "#db642b",
                orange700: "#9f481f",
                orange800: "#793718",
                orange900: "#32170a",
                neutral10: "#fdfdfd",
                neutral20: "#f9f9f9",
                neutral30: "#e7e7e7",
                neutral40: "#cacaca",
                neutral50: "#a7a7a7",
                neutral60: "gray",
                neutral70: "#585858",
                neutral80: "#353535",
                neutral90: "#181818",
                neutral100: "#060606",
                adContainer: "adContainer-cPRxG",
                "bigbox-shorts": "bigbox-shorts-VNlp1",
                bigbox: "bigbox-JrCAb",
                "bigbox-sticky": "bigbox-sticky-oQdhw",
                intercept: "intercept-zhcC0",
                risingstar: "risingstar-JB72x",
                "in-read": "in-read-BT1KS",
                "bigbox-double-inread": "bigbox-double-inread-KjiPS"
            };
            var p = n(56552);
            const f = function(e) {
                var t = e.children,
                    n = e.type,
                    r = e.adContainerClasses,
                    i = u().bind(d)("adContainer", n, r);
                return (0, p.jsx)("div", {
                    className: i,
                    children: t
                })
            };

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

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = function(e) {
                    return "mycbc" === e.slug
                },
                b = function(e) {
                    var t = (0, o.useSelector)((function(e) {
                            return e.gdpr
                        })),
                        n = (0, o.useSelector)((function(e) {
                            return e.app.pageType
                        })),
                        r = (0, o.useSelector)((function(e) {
                            return e.app.ad_hierarchy
                        })),
                        i = (0, o.useSelector)((function(e) {
                            return e.app.adOrder
                        })),
                        a = (0, o.useSelector)((function(e) {
                            return e.app.path
                        })),
                        l = (0, o.useSelector)((function(e) {
                            return e.app.baseSection
                        })),
                        u = (0, o.useSelector)((function(e) {
                            return e.detail.content.departments
                        })),
                        d = (0, o.useSelector)((function(e) {
                            return e.page.adTestGroup
                        })),
                        v = g(g({
                            unmounted: !0,
                            gdpr: t,
                            hierarchy: r,
                            pageData: {
                                pageType: n,
                                pagePath: a,
                                pageSection: l
                            },
                            deptData: {
                                dept: u
                            }
                        }, e), {}, {
                            targeting: g({
                                bu: "feed"
                            }, e.targeting),
                            adTestGroup: "news/canada" === a ? d : void 0
                        });
                    if (null !== u && void 0 !== u && u.some(m)) return null;
                    if (!0 === t.euCountry) return null;
                    if (void 0 !== a && a.includes("player/play") && "string" === typeof i && "" === i) return null;
                    if ("news/canada" === a && ("B" === d || "C" === d)) {
                        if (e.type.includes("bigbox")) return null;
                        if ("risingstar" === e.type && "C" === d) return null
                    }
                    var b = "bigbox-fixed" === e.type || "bigbox-sticky" === e.type ? "bigBoxContainer fixedBigBoxContainer" : "bigBoxContainer";
                    return (0, p.jsx)(s.default, {
                        beforeCapture: function(e) {
                            e.setTag("component", "@cbc/macaw")
                        },
                        children: "bigbox" === e.type || "bigbox-single" === e.type || "bigbox-double" === e.type || "bigbox-sticky" === e.type || "bigbox-fixed" === e.type ? (0, p.jsx)("div", {
                            className: b,
                            children: (0, p.jsx)(f, {
                                type: e.type,
                                adContainerClasses: e.adContainerClasses,
                                children: (0, p.jsx)(c(), g({}, v))
                            })
                        }) : (0, p.jsx)(f, {
                            type: e.type,
                            adContainerClasses: e.adContainerClasses,
                            children: (0, p.jsx)(c(), g({}, v))
                        })
                    })
                };
            const h = (0, i.memo)(b)
        },
        53333: (e, t, n) => {
            n.d(t, {
                B: () => r,
                T: () => i
            });
            var r = "native-ad",
                i = "load-more"
        },
        27023: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(92972),
                i = n.n(r),
                o = n(2902),
                a = n(56552);

            function c(e) {
                var t = e.src;
                return t ? (0, a.jsx)(o.Z, {
                    url: t,
                    type: "author-image"
                }) : null
            }
            c.propTypes = {
                src: i().string
            }
        },
        47570: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(56552);
            const i = function(e) {
                var t = e.disabled,
                    n = void 0 !== t && t,
                    i = e.onClick,
                    o = e.className,
                    a = e.label,
                    c = e.icon,
                    s = e.loader;
                return (0, r.jsxs)("button", {
                    disabled: n,
                    onClick: i,
                    className: o,
                    "data-cy": "button",
                    children: [a, c, s]
                })
            }
        },
        96628: (e, t, n) => {
            n.d(t, {
                Z: () => L
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(35098),
                o = n(42820),
                a = n(92972),
                c = n.n(a),
                s = n(14507),
                l = n.n(s),
                u = n(26574),
                d = n(82019),
                p = n(85161),
                f = n(73478),
                v = n(77008),
                g = n(84819),
                m = n(48103);
            const b = "ctaContainer-SVmn2",
                h = "buttonCTA-kKuOv",
                y = "image-lRC_u",
                O = "buttonCTAContent-XOZna",
                j = "descriptionContainer-bY0aV",
                w = "title-DTlny",
                x = "descriptionText-D2yQr",
                P = "buttonLink-jYlKG";
            var C = n(71638),
                S = n(25637),
                I = n(27287),
                T = n(56552);
            const D = function(e) {
                var t = e.text,
                    n = e.description,
                    r = e.linkUrl,
                    i = e.linkText,
                    o = e.imageUrl,
                    a = e.imageAlt;
                return (0, T.jsx)("div", {
                    className: b,
                    children: (0, T.jsxs)("div", {
                        className: h,
                        children: [(0, T.jsx)(C.Z, {
                            imageType: S.X.Image,
                            url: o,
                            alt: a,
                            classNames: y
                        }), (0, T.jsxs)("div", {
                            className: O,
                            children: [(0, T.jsxs)("div", {
                                className: j,
                                children: [(0, T.jsx)("span", {
                                    className: w,
                                    children: t
                                }), (0, T.jsx)("span", {
                                    className: x,
                                    children: n
                                })]
                            }), (0, T.jsx)(I.Z, {
                                url: r,
                                external: !0,
                                className: P,
                                children: i
                            })]
                        })]
                    })
                })
            };

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

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var A = function(e) {
                    var t = e.external,
                        n = void 0 !== t && t,
                        r = e.className,
                        i = e.extraContent,
                        a = void 0 === i ? null : i,
                        c = e.titleVisible,
                        s = void 0 === c || c,
                        l = e.variant,
                        u = void 0 === l ? g.uv : l,
                        d = k(k({}, e), {}, {
                            external: n,
                            className: r,
                            extraContent: a,
                            titleVisible: s,
                            variant: u
                        }),
                        p = (0, o.useSelector)((function(e) {
                            return e.app.path
                        }));
                    switch (u) {
                        case g.RN:
                            return (0, T.jsx)(E, k({}, d));
                        case g.uv:
                            var f;
                            return "homepage" === p ? (0, T.jsx)(D, k(k({}, d), {}, {
                                imageUrl: null === d || void 0 === d || null === (f = d.image) || void 0 === f ? void 0 : f.url
                            })) : (0, T.jsx)(_, k({}, d));
                        case g.v2:
                            return (0, T.jsx)(m.Z, {});
                        default:
                            return null
                    }
                },
                E = function(e) {
                    var t = e.text,
                        n = e.linkUrl,
                        r = e.linkText,
                        i = e.external,
                        o = e.description,
                        a = e.descriptionClassName,
                        c = e.className,
                        s = e.extraContent,
                        g = e.flexPage,
                        m = e.image,
                        b = e.alt,
                        h = e.titleVisible,
                        y = l()("CTA buttonCTA sclt-storyCTA", g ? "flexPage" : "standardPage", m ? "imageCTA" : null, c);
                    return (0, T.jsxs)("div", k(k({
                        className: y
                    }, (0, v.Z)({
                        name: "link"
                    })), {}, {
                        children: [(0, f.gJ)(m, b), (0, T.jsxs)("div", {
                            className: "CTADescription",
                            children: [(0, T.jsx)(d.X6, {
                                level: "h2",
                                levelClassName: "h3",
                                text: t,
                                className: h ? void 0 : "a11y"
                            }), (0, T.jsx)("p", {
                                className: a,
                                children: o
                            })]
                        }), (0, T.jsx)("div", {
                            className: "CTALink",
                            children: (0, T.jsxs)(u.default, {
                                url: n,
                                external: i,
                                children: [r, (0, T.jsx)(p.default, {
                                    type: "chevron",
                                    isDecorative: !0,
                                    className: "white horizontal"
                                })]
                            })
                        }), s]
                    }))
                },
                _ = function(e) {
                    var t = e.text,
                        n = e.linkUrl,
                        r = e.linkText,
                        o = e.external,
                        a = e.description,
                        c = e.className,
                        s = e.extraContent,
                        g = e.flexPage,
                        m = e.image,
                        b = e.alt,
                        h = e.titleVisible,
                        y = l()("CTA linkCTA sclt-linkCTA", g ? "flexPage" : "standardPage", m ? "imageCTA" : null, c),
                        O = (0, T.jsx)(i.Fragment, {
                            children: (0, T.jsxs)("p", {
                                className: "heading-description",
                                children: [a, "\xa0\xa0", (0, T.jsxs)(u.default, {
                                    url: n,
                                    external: o,
                                    className: "heading-link CTA-heading-link",
                                    "data-feature-name": "link",
                                    "data-cy": "cta-heading-link",
                                    children: [r, (0, T.jsx)(p.default, {
                                        type: "chevron",
                                        width: "10px",
                                        height: "10px",
                                        className: l()("horizontal", "headingIcon")
                                    })]
                                })]
                            })
                        });
                    return (0, T.jsxs)("div", k(k({
                        className: y
                    }, (0, v.Z)({
                        name: "link"
                    })), {}, {
                        children: [(0, f.gJ)(m, b, {
                            sizesRatio: "100"
                        }), (0, T.jsx)(d.X6, {
                            className: h ? void 0 : "a11y",
                            level: "h2",
                            levelClassName: "h3",
                            text: t,
                            main: O
                        }), s]
                    }))
                };
            A.propTypes = {
                text: c().string,
                description: c().string,
                linkUrl: c().string,
                linkText: c().string,
                external: c().bool,
                className: c().string,
                extraContent: c().element,
                image: c().object,
                titleVisible: c().bool,
                descriptionClassName: c().string,
                variant: c().oneOf([g.RN, g.uv, g.v2])
            };
            const L = A
        },
        48103: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(29439),
                o = n(35098),
                a = n(83110),
                c = n(26574),
                s = n(77008);
            const l = "accountCTA-XwarX",
                u = "image-pNBUS",
                d = "descriptionContainer-jtJrM",
                p = "title-Zs6a7",
                f = "description-L0t7_",
                v = "buttonContainer-kHuzD",
                g = "signIn-pTWg6",
                m = "signUp-lS8gl";
            var b = function(e, t) {
                    window.sessionStorage.setItem(JSON.stringify(e), JSON.stringify(t))
                },
                h = n(41718),
                y = n(68075),
                O = n(78087),
                j = n(42820),
                w = n(56552);

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var C = n(54342);
            const S = function() {
                var e = (0, j.useSelector)((function(e) {
                        return e.app
                    })).contentId,
                    t = (0, a.useLocation)().pathname,
                    n = (0, o.useState)(!1),
                    r = (0, i.Z)(n, 2),
                    x = r[0],
                    S = r[1],
                    I = "https://www.cbc.ca/account/login?returnto=" + t + "&referrer=" + t,
                    T = "https://www.cbc.ca/account/signup?returnto=" + t + "&referrer=" + t;
                return (0, o.useEffect)((function() {
                    try {
                        if (!(0, y.getFeedCookie)(O.AUTHED_COOKIE)) {
                            var e = 1,
                                t = function(e) {
                                    var t = window.sessionStorage.getItem(JSON.stringify(e));
                                    return JSON.parse(t) || null
                                }("stronglySuggestedCTA");
                            null !== t && void 0 !== t && t.count ? (e = t.count < 3 ? t.count + 1 : 1, b("stronglySuggestedCTA", {
                                count: e
                            })) : b("stronglySuggestedCTA", {
                                count: e
                            }), S(3 === e)
                        }
                    } catch (n) {
                        h.default.error("(AccountCTA) Error parsing storage data", n)
                    }
                }), [e]), x ? (0, w.jsxs)("div", {
                    className: l,
                    role: "complementary",
                    "aria-label": "Call to Action",
                    children: [(0, w.jsx)("img", {
                        alt: "cbc gem",
                        src: C,
                        className: u
                    }), (0, w.jsxs)("div", {
                        className: d,
                        children: [(0, w.jsx)("p", {
                            className: p,
                            children: "Get more with a free CBC account"
                        }), (0, w.jsx)("p", {
                            className: f,
                            children: "Comment on articles, stay in the know with our newsletters and stream more on CBC Gem."
                        })]
                    }), (0, w.jsxs)("div", {
                        className: v,
                        children: [(0, w.jsx)(c.default, P(P({
                            className: g,
                            url: I,
                            external: !1
                        }, (0, s.Z)({
                            name: "link",
                            instance: "suggested-authentication"
                        })), {}, {
                            children: "Sign In"
                        })), (0, w.jsx)(c.default, P(P({
                            className: m,
                            url: T,
                            external: !1
                        }, (0, s.Z)({
                            name: "link",
                            instance: "suggested-authentication"
                        })), {}, {
                            children: "Create a free account"
                        }))]
                    })]
                }) : null
            }
        },
        84819: (e, t, n) => {
            n.d(t, {
                RN: () => r,
                uv: () => i,
                v2: () => o
            });
            var r = "button",
                i = "link",
                o = "account"
        },
        73478: (e, t, n) => {
            n.d(t, {
                Os: () => d,
                ed: () => u,
                gJ: () => p
            });
            var r = n(4942),
                i = (n(53145), n(95566), n(62153), n(72411), n(83063), n(9867), n(7231), n(58109), n(68438), n(83464), n(19496), n(2902)),
                o = n(32137),
                a = n(56552);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var s = function(e, t) {
                    return !(!Array.isArray(e) || 0 === e.length || !Array.isArray(t) || 0 === t.length) && e.every((n = t, function(e) {
                        var t = /^\/(.+?)\/([gimsu]*)$/.exec(e);
                        if (t) {
                            var r = new RegExp(t[1], t[2]);
                            return n.some((function(e) {
                                return r.test(e)
                            }))
                        }
                        return n.includes(e)
                    }));
                    var n
                },
                l = function(e, t, n) {
                    return !!e && Object.keys(e).every((function(r) {
                        return s(e[r], function(e, t, n) {
                            return t = Array.isArray(t) ? t : [], n = Array.isArray(n) ? n : [], t.concat(n).filter((function(t) {
                                return t.type === e && (t.name || t.path)
                            })).map((function(e) {
                                return e.namne || e.path
                            }))
                        }(r, t, n))
                    }))
                },
                u = function(e) {
                    return e && e.tag && (!isNaN(e.tagPositionAfter) || e.tagPositionLast)
                },
                d = function(e, t) {
                    return function(n, r) {
                        return r.match && !l(r.match, e, t) || r.not && l(r.not, e, t) || n.push(r), n
                    }
                },
                p = function(e, t, n) {
                    if ((0, o.M_)(null === e || void 0 === e ? void 0 : e.url)) {
                        var s = {
                            url: e.url,
                            alt: t,
                            loading: null
                        };
                        return Object.assign(s, n), (0, a.jsx)(i.Z, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? c(Object(n), !0).forEach((function(t) {
                                    (0, r.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, s))
                    }
                    return null
                }
        },
        84412: (e, t, n) => {
            n.d(t, {
                ZP: () => je,
                om: () => Oe,
                go: () => ye
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(35098),
                o = n(92972),
                a = n.n(o),
                c = n(97549),
                s = n(37932),
                l = n(63474),
                u = n(26574),
                d = n(98858),
                p = n(88101),
                f = n(14507),
                v = n.n(f),
                g = n(56552);

            function m(e, t) {
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
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = function(e) {
                var t = e.className,
                    n = e.focus,
                    r = e.flag,
                    o = e.sourceId,
                    a = e.external,
                    c = e.url,
                    f = e.cardClickHandler,
                    m = e.flagId,
                    h = e.metadataId,
                    y = e.updateTime,
                    O = e.subSection,
                    j = e.baseSection,
                    w = e.departments,
                    x = e.displayComments,
                    P = e.headlineId,
                    C = e.title,
                    S = (0, i.useRef)(null);
                (0, i.useEffect)((function() {
                    void 0 !== n && S.current.focus()
                }), []);
                var I = (0, p.C_)("flag", r),
                    T = v()("card", "cardText", I, t),
                    D = {
                        "data-contentid": o,
                        id: o,
                        external: a,
                        url: c,
                        onClick: f
                    },
                    N = {
                        flag: r,
                        external: a,
                        id: m
                    },
                    k = {
                        baseSection: j,
                        subSection: O,
                        updated: y,
                        showTimestamp: !0,
                        departments: w,
                        id: h,
                        url: c,
                        displayComments: x
                    };
                return (0, g.jsx)(u.default, b(b({
                    className: T
                }, D), {}, {
                    ref: S,
                    children: (0, g.jsxs)("div", {
                        className: "card-content",
                        children: [(0, g.jsxs)("div", {
                            className: "card-content-top",
                            children: [(0, g.jsx)(l._, b({}, N)), (0, g.jsx)(s.Z, {
                                id: P,
                                text: C
                            })]
                        }), (0, g.jsx)("div", {
                            className: "card-content-bottom",
                            children: (0, g.jsx)(d.Z, b({}, k))
                        })]
                    })
                }))
            };
            h.propTypes = {
                external: a().bool.isRequired,
                className: a().string,
                itemType: a().string
            };
            const y = h;
            var O = n(75004),
                j = n(3565),
                w = n(43760),
                x = n(94612),
                P = (n(9867), n(7231), n(2902)),
                C = n(73871);

            function S(e) {
                return (0, g.jsx)("li", {
                    className: "bulletpoint",
                    children: e.text
                })
            }

            function I(e, t) {
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
                    t % 2 ? I(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function D(e) {
                var t = e.title,
                    n = void 0 === t ? "" : t,
                    r = e.deck,
                    i = void 0 === r ? "" : r,
                    o = e.flag,
                    a = void 0 === o ? "" : o,
                    c = e.headlineId,
                    p = void 0 === c ? "" : c,
                    f = e.id,
                    m = void 0 === f ? "" : f,
                    b = e.external,
                    h = void 0 !== b && b,
                    y = e.primary,
                    O = void 0 === y ? null : y,
                    j = e.baseSection,
                    w = void 0 === j ? "" : j,
                    x = e.subSection,
                    P = void 0 === x ? "" : x,
                    S = e.updateTime,
                    I = void 0 === S ? null : S,
                    D = e.metadataId,
                    E = void 0 === D ? "" : D,
                    _ = e.url,
                    L = void 0 === _ ? "" : _,
                    Z = e.className,
                    R = e.headlineClasses,
                    H = e.itemType,
                    M = e.media,
                    B = e.imageURL,
                    U = {
                        flag: a,
                        external: h,
                        id: m
                    },
                    z = {
                        baseSection: w,
                        subSection: P,
                        updated: I,
                        showTimestamp: !0,
                        id: E,
                        url: L
                    },
                    V = {
                        "data-contentid": E,
                        id: E,
                        external: h,
                        url: L,
                        "data-cy": "type-".concat(H)
                    },
                    F = v()("primaryContent", Z);
                return (0, g.jsxs)("div", {
                    className: F,
                    children: [(0, g.jsx)("div", {
                        className: "primaryHeadline mobileHeadline",
                        "data-feature-instance": "primary-headline",
                        children: (0, g.jsx)(u.default, T(T({
                            className: R
                        }, V), {}, {
                            children: (0, g.jsx)(s.Z, {
                                id: p,
                                text: n
                            })
                        }), m)
                    }), (0, g.jsxs)("div", {
                        className: "supportingContent",
                        children: [(0, g.jsx)(C.Z, {
                            text: i
                        }), (0, g.jsxs)("div", {
                            className: "labelMetaData",
                            children: [(0, g.jsx)(l._, T({
                                className: "primaryLabel"
                            }, U)), (0, g.jsx)(d.Z, T({}, z)), (0, g.jsx)(k, {
                                list: null === O || void 0 === O ? void 0 : O.bulletpoints
                            }), (0, g.jsx)(A, {
                                list: null === O || void 0 === O ? void 0 : O.relatedLinks
                            })]
                        })]
                    }), (0, g.jsx)("div", {
                        className: "primaryImage",
                        children: N(M, B, V)
                    })]
                })
            }

            function N(e, t, n) {
                return e || (0, g.jsx)(u.default, T(T({
                    className: "primaryImageLink",
                    "data-feature-instance": "primary-visual"
                }, n), {}, {
                    children: (0, g.jsx)(P.Z, {
                        url: t,
                        loading: null,
                        isAboveFold: !0
                    })
                }))
            }
            var k = function(e) {
                    var t = e.list;
                    return null !== t && void 0 !== t && t.length ? (0, g.jsx)("ul", {
                        className: "contentPackageList",
                        children: t.map((function(e, t) {
                            var n = e.text;
                            return (0, g.jsx)(S, {
                                text: n
                            }, "".concat(n, "-").concat(t))
                        }))
                    }) : null
                },
                A = function(e) {
                    var t = e.list;
                    return null !== t && void 0 !== t && t.length ? t.map((function(e, t) {
                        var n = e.url,
                            r = e.external,
                            i = e.title,
                            o = e.key,
                            a = e.flag;
                        return (0, g.jsx)("div", {
                            "data-feature-instance": "primary-related",
                            "data-feature-position": t + 1,
                            children: (0, g.jsx)(y, {
                                url: n,
                                external: r,
                                title: i,
                                className: "relatedCard",
                                departments: {},
                                flag: a
                            }, "".concat(o, "-").concat(t))
                        }, "".concat(o, "-").concat(t))
                    })) : null
                };

            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function L(e) {
                var t = e.secondary;
                return (0, g.jsx)("div", {
                    className: "secondaryContent",
                    children: t.map((function(e, t) {
                        return (0, g.jsx)("div", {
                            "data-feature-instance": "secondary-related",
                            "data-feature-position": t + 1,
                            children: (0, i.createElement)(y, _(_({}, e), {}, {
                                key: "".concat(e.key, "-").concat(t),
                                className: "relatedCard",
                                departments: {},
                                text: e.title
                            }))
                        }, "".concat(e.key, "-").concat(t))
                    }))
                })
            }

            function Z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var H = function(e) {
                var t = e.description,
                    n = void 0 === t ? "" : t,
                    r = e.title,
                    i = void 0 === r ? "" : r,
                    o = e.url,
                    a = void 0 === o ? "" : o,
                    c = e.baseSection,
                    l = void 0 === c ? "" : c,
                    d = e.subSection,
                    p = void 0 === d ? "" : d,
                    f = e.className,
                    m = e.flag,
                    b = void 0 === m ? "" : m,
                    h = e.updateTime,
                    y = void 0 === h ? null : h,
                    O = e.headlineId,
                    j = void 0 === O ? "" : O,
                    w = e.id,
                    x = void 0 === w ? "" : w,
                    P = e.metadataId,
                    C = void 0 === P ? null : P,
                    S = e.external,
                    I = void 0 !== S && S,
                    T = e.uppercaseHeadline,
                    N = void 0 !== T && T,
                    k = e.packageComponents,
                    A = void 0 === k ? {
                        mainVisual: {
                            url: ""
                        },
                        primary: null,
                        secondary: null
                    } : k,
                    E = e.media,
                    _ = void 0 === E ? null : E,
                    Z = e.imageURL,
                    H = e.itemType,
                    M = v()("card", "cardContentPackage", f),
                    B = {
                        "data-contentid": C,
                        id: C,
                        external: I,
                        url: a
                    },
                    U = v()("primaryHeadlineLink", {
                        uppercaseTrue: N
                    }),
                    z = {
                        title: i,
                        deck: n,
                        flag: function() {
                            var e, t = "";
                            return !b && null !== A && void 0 !== A && null !== (e = A.mainContent) && void 0 !== e && null !== (e = e.typeAttributes) && void 0 !== e && e.flag ? t = A.mainContent.typeAttributes.flag : b && (t = b), t
                        }(),
                        headlineId: j,
                        id: x,
                        external: I,
                        primary: A ? A.primary : null,
                        baseSection: l,
                        subSection: p,
                        updateTime: y,
                        metadataId: C,
                        url: a,
                        imageURL: Z,
                        headlineClasses: U,
                        media: _,
                        itemType: H
                    };
                return (0, g.jsxs)("div", {
                    className: M,
                    "data-feature-name": "content-package",
                    children: [(0, g.jsx)("div", {
                        className: "primaryHeadline desktopHeadline",
                        "data-feature-instance": "primary-headline",
                        children: (0, g.jsx)(u.default, R(R({
                            className: U,
                            "data-cy": "topStoriesContentPackage"
                        }, B), {}, {
                            children: (0, g.jsx)(s.Z, {
                                id: j,
                                text: i
                            })
                        }), x)
                    }), (0, g.jsx)("div", {
                        className: "contentFlexLayout",
                        children: (0, g.jsxs)("div", {
                            className: "firstContentColumn",
                            children: [(0, g.jsx)(D, R({}, z)), (0, g.jsx)(L, {
                                secondary: A.secondary || []
                            })]
                        })
                    }), (0, g.jsx)("hr", {
                        className: "contentPackageSeparator"
                    }), (0, g.jsx)("hr", {
                        className: "contentPackageSeparator"
                    })]
                })
            };
            H.propTypes = {
                title: a().string,
                url: a().string,
                id: a().string,
                external: a().bool,
                className: a().string,
                author: a().object,
                displayComments: a().bool,
                itemType: a().string
            };
            const M = H;
            var B = n(7542),
                U = n(57241),
                z = function(e) {
                    var t = e.rank,
                        n = void 0 === t ? 0 : t;
                    return (0, g.jsx)("span", {
                        className: "rankIndicator",
                        "aria-hidden": !0,
                        children: n
                    })
                };
            z.propTypes = {
                rank: a().number.isRequired
            };
            const V = z;
            var F = function(e) {
                var t = e.count;
                return (0, g.jsxs)("span", {
                    className: "readerCount",
                    children: [t, " have read"]
                })
            };
            const q = function(e) {
                var t = e.count,
                    n = void 0 === t ? 0 : t;
                return (0, g.jsxs)("span", {
                    className: "readerCount",
                    children: [n, " reading now"]
                })
            };
            var $ = n(97767),
                W = n(61851);

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

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Q = function(e) {
                var t = e.author,
                    n = void 0 === t ? {
                        name: "",
                        image: ""
                    } : t,
                    r = e.className,
                    o = void 0 === r ? "" : r,
                    a = e.rank,
                    c = void 0 === a ? 0 : a,
                    f = e.showImage,
                    m = void 0 === f || f,
                    b = e.videoCardOverlayType,
                    h = e.videoDuration,
                    y = e.videoAirDate,
                    O = e.videoStreamType,
                    j = e.imageURL,
                    w = e.focus,
                    x = e.displayType,
                    P = e.feature,
                    C = e.variant,
                    S = e.countSrs,
                    I = e.count,
                    T = e.flag,
                    D = e.external,
                    N = e.flagId,
                    k = e.baseSection,
                    A = e.subSection,
                    E = e.title,
                    _ = e.headlineId,
                    L = e.sourceId,
                    Z = e.url,
                    R = e.updateTime,
                    H = e.departments,
                    M = e.hideAuthorInfo,
                    z = e.disableTrendingCount,
                    Y = void 0 !== z && z,
                    Q = e.metadataId,
                    K = e.cardClickHandler,
                    X = (0, i.useRef)(null);
                (0, i.useEffect)((function() {
                    void 0 !== w && X.current.focus()
                }), []);
                var J = function(e) {
                        return e ? "SRS" === C ? (0, g.jsx)(F, {
                            count: S
                        }) : (0, g.jsx)(q, {
                            count: I
                        }) : null
                    },
                    ee = {
                        url: j
                    },
                    te = {
                        videoCardOverlayType: b,
                        videoDuration: h,
                        videoAirDate: y,
                        videoStreamType: O
                    },
                    ne = m ? (0, g.jsx)(B.Z, {
                        imageProps: ee,
                        videoLinkImageOverlayProps: te
                    }) : null,
                    re = {
                        flag: T,
                        external: D,
                        id: N
                    },
                    ie = !!c,
                    oe = !(!$.SA[k] || "undefined" === $.SA[k].showTrendingCount) && $.SA[k].showTrendingCount;
                Y && (oe = !1);
                var ae = ie && 0 !== c ? (0, g.jsx)(V, {
                        rank: c
                    }) : null,
                    ce = (0, p.C_)("flag", T),
                    se = v()("card", ce, "cardDiscovery", o, {
                        isTrending: ie
                    }),
                    le = {
                        author: n.name,
                        authorImage: n.image
                    },
                    ue = {
                        baseSection: k,
                        subSection: A,
                        authorName: le.authorName,
                        authorImage: le.authorImage,
                        updated: R,
                        showTimestamp: !1,
                        departments: H,
                        url: Z,
                        displayComments: !1,
                        hideAuthorInfo: M
                    },
                    de = ie ? null : (0, g.jsx)(d.Z, G({
                        id: Q
                    }, ue));
                return function(e) {
                    var t = G({}, P);
                    return x === W.a.TYPE_LIST_ORDERED ? (0, g.jsx)("li", G(G({
                        className: se,
                        ref: X
                    }, t), {}, {
                        children: e
                    })) : (0, g.jsx)("div", G(G({
                        className: se,
                        ref: X
                    }, t), {}, {
                        children: e
                    }))
                }((0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(u.default, G(G({
                        className: "mediaItem"
                    }, (0, U.GH)({
                        sourceId: L,
                        external: D,
                        url: Z,
                        cardClickHandler: K
                    })), {}, {
                        tabIndex: "-1",
                        "aria-hidden": !0,
                        children: ne
                    })), (0, g.jsx)("div", {
                        className: "contentWrapper",
                        children: (0, g.jsxs)("div", {
                            className: "card-content",
                            children: [ae, (0, g.jsxs)(u.default, G(G({
                                className: "headlineLink"
                            }, (0, U.GH)({
                                sourceId: L,
                                external: D,
                                url: Z,
                                cardClickHandler: K
                            })), {}, {
                                children: [(0, g.jsx)(l._, G({}, re)), (0, g.jsx)(s.Z, {
                                    id: _,
                                    text: E
                                })]
                            })), J(oe), de]
                        })
                    })]
                }))
            };
            Q.propTypes = {
                external: a().bool.isRequired,
                title: a().string.isRequired,
                url: a().string.isRequired,
                imageURL: a().string,
                author: a().object,
                className: a().string,
                displayComments: a().bool,
                count: a().number,
                rank: a().number,
                showImage: a().bool
            };
            const K = Q;
            var X = n(42802);

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

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var te = function(e) {
                var t = e.imageURL,
                    n = e.external,
                    r = e.sourceId,
                    o = e.title,
                    a = e.url,
                    c = e.id,
                    p = e.className,
                    f = e.author,
                    m = void 0 === f ? {
                        name: "",
                        image: ""
                    } : f,
                    b = e.displayComments,
                    h = e.flag,
                    y = e.flagId,
                    O = e.focus,
                    j = e.baseSection,
                    w = e.subSection,
                    x = e.updateTime,
                    P = e.departments,
                    C = e.metadataId,
                    S = e.cardClickHandler,
                    I = e.description,
                    T = e.videoDuration,
                    D = e.videoAirDate,
                    N = e.videoCardOverlayType,
                    k = e.itemType,
                    A = e.hideAuthorInfo,
                    E = e.videoStreamType,
                    _ = (0, i.useRef)(null);
                (0, i.useEffect)((function() {
                    void 0 !== O && _.current.focus()
                }), [O]);
                var L = (0, X.T)("flag", h),
                    Z = v()("card", "cardDefault", L, p),
                    R = {
                        flag: h,
                        external: n,
                        id: y
                    },
                    H = (0, U.GH)({
                        sourceId: r,
                        external: n,
                        url: a,
                        cardClickHandler: S
                    }),
                    M = {
                        baseSection: j,
                        subSection: w,
                        authorName: m.name,
                        authorImage: m.image,
                        updated: x,
                        showTimestamp: !0,
                        departments: P,
                        id: C,
                        url: a,
                        displayComments: b,
                        hideAuthorInfo: A
                    },
                    z = {
                        url: (0, U.mF)(t)
                    },
                    V = {
                        videoCardOverlayType: N ? "Minimal" : "",
                        videoDuration: T,
                        videoAirDate: D,
                        videoStreamType: E
                    },
                    F = I && I.length <= 1 ? null : (0, g.jsx)("p", {
                        className: "cardDefaultDescription",
                        children: I
                    });
                return (0, g.jsx)(u.default, ee(ee({
                    id: c,
                    className: v()(Z, "cardIconDescription")
                }, H), {}, {
                    "data-cy": "type-".concat(k),
                    children: (0, g.jsxs)("div", {
                        ref: _,
                        className: "card-content",
                        children: [(0, g.jsx)("div", {
                            className: "card-content-top",
                            children: (0, g.jsxs)("div", {
                                className: "cardHeadlineImage",
                                children: [(0, g.jsx)(B.Z, {
                                    imageProps: z,
                                    videoLinkImageOverlayProps: V
                                }), (0, g.jsx)(l._, ee({}, R)), (0, g.jsxs)("div", {
                                    className: "cardHeadlineDescription",
                                    children: [(0, g.jsx)(s.Z, {
                                        text: o
                                    }), F]
                                })]
                            })
                        }), (0, g.jsx)("div", {
                            className: "card-content-bottom",
                            children: (0, g.jsx)(d.Z, ee({}, M))
                        })]
                    })
                }))
            };
            te.propTypes = {
                category: o.string.isRequired,
                contentId: o.number.isRequired,
                external: o.bool.isRequired,
                sourceId: o.string.isRequired,
                title: o.string.isRequired,
                url: o.string.isRequired,
                id: o.string.isRequired,
                className: o.string,
                author: o.object,
                displayComments: o.bool,
                deck: o.string,
                descriptionId: o.string,
                description: o.string,
                flag: o.string,
                flagId: o.string,
                focus: o.bool,
                onClick: o.func,
                cardClickHandler: o.func,
                baseSection: o.string,
                subSection: o.string,
                updateTime: o.number,
                departments: o.object,
                metadataId: o.string,
                itemType: o.string
            };
            const ne = te;
            var re = n(29439),
                ie = n(39070),
                oe = n(91811),
                ae = n(61203),
                ce = n(42674);

            function se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ue = function(e) {
                var t = e.external,
                    n = e.sourceId,
                    r = e.title,
                    o = e.url,
                    a = e.id,
                    c = e.className,
                    p = e.displayComments,
                    f = e.focus,
                    m = void 0 !== f && f,
                    b = e.media,
                    h = e.imageURL,
                    y = e.description,
                    O = e.descriptionId,
                    j = e.flag,
                    w = e.flagId,
                    x = e.baseSection,
                    P = void 0 === x ? "" : x,
                    C = e.subSection,
                    S = void 0 === C ? "" : C,
                    I = e.updateTime,
                    T = e.departments,
                    D = e.metadataId,
                    N = e.cardClickHandler,
                    k = e.videoCardOverlayType,
                    A = e.videoDuration,
                    E = e.videoAirDate,
                    _ = e.itemType,
                    L = e.path,
                    Z = e.showTimestamp,
                    R = void 0 === Z || Z,
                    H = e.videoStreamType,
                    M = (0, i.useRef)(null);
                (0, i.useEffect)((function() {
                    m && M.current.focus()
                }), [m]);
                var z = (0, X.T)("flag", j),
                    V = v()("card", "cardFeatured", "cardFeaturedReversed", z, {
                        hasVideo: b
                    }, c),
                    F = {
                        flag: j,
                        external: t,
                        id: w
                    },
                    q = (0, U.GH)({
                        sourceId: n,
                        external: t,
                        url: o,
                        cardClickHandler: N
                    }),
                    $ = {
                        baseSection: P,
                        subSection: S,
                        updated: I,
                        showTimestamp: R,
                        departments: T,
                        id: D,
                        url: o,
                        displayComments: p,
                        path: L
                    },
                    W = (0, ae.E)(h),
                    Y = (0, oe.h)(W),
                    G = {
                        srcSet: (0, re.Z)(Y, 1)[0],
                        sizes: ce.n,
                        url: W,
                        loading: null,
                        isAboveFold: !0
                    },
                    Q = {
                        videoCardOverlayType: k,
                        videoDuration: A,
                        videoAirDate: E,
                        videoStreamType: H
                    };
                return (0, g.jsxs)("div", {
                    id: a,
                    className: V,
                    children: [(0, g.jsx)(u.default, le(le({
                        className: "contentWrapper",
                        "data-cy": "type-".concat(_)
                    }, q), {}, {
                        children: (0, g.jsxs)("div", {
                            ref: M,
                            className: "card-content",
                            children: [(0, g.jsxs)("div", {
                                className: "card-content-top",
                                children: [(0, g.jsx)(l._, le({}, F)), (0, g.jsx)(s.Z, {
                                    text: r
                                }), y && (0, g.jsx)(ie.Z, {
                                    id: O,
                                    text: y
                                })]
                            }), (0, g.jsx)("div", {
                                className: "card-content-bottom",
                                children: (0, g.jsx)(d.Z, le({}, $))
                            })]
                        })
                    })), b || (0, g.jsx)(u.default, le(le({
                        className: "mediaItem"
                    }, q), {}, {
                        tabIndex: "-1",
                        "aria-hidden": !0,
                        children: (0, g.jsx)(B.Z, {
                            imageProps: G,
                            videoLinkImageOverlayProps: Q
                        })
                    }))]
                })
            };
            ue.propTypes = {
                external: o.bool.isRequired,
                sourceId: o.string.isRequired,
                title: o.string.isRequired,
                url: o.string.isRequired,
                id: o.string.isRequired,
                className: o.string,
                displayComments: o.bool,
                focus: o.bool,
                media: o.node,
                imageURL: o.string,
                description: o.string,
                descriptionId: o.string,
                flag: o.string,
                flagId: o.string,
                baseSection: o.string,
                subSection: o.string,
                updateTime: o.number,
                departments: o.object,
                metadataId: o.string,
                cardClickHandler: o.func,
                itemType: o.string,
                showTimestamp: o.bool
            };
            const de = ue;
            var pe = n(65999),
                fe = n(41718),
                ve = n(40627);

            function ge(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ge(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var be = function(e, t) {
                    return (!t.sourceId || t.sourceId === e.sourceId) && (t.type === e.type && t.updateTime === e.updateTime)
                },
                he = (0, i.memo)((function(e) {
                    var t = e.type,
                        n = void 0 === t ? ve.QU.TYPE_DEFAULT : t,
                        r = e.idPrefix,
                        i = void 0 === r ? "card" : r,
                        o = e.category,
                        a = void 0 === o ? "" : o,
                        s = e.description,
                        l = void 0 === s ? "" : s,
                        u = e.contentId,
                        d = void 0 === u ? 0 : u,
                        p = e.itemType,
                        f = void 0 === p ? ve.iB.ITEM_TYPE_STORY : p,
                        v = e.showTimestamp,
                        m = void 0 === v || v,
                        b = e.sourceId,
                        h = void 0 === b ? "" : b,
                        C = e.title,
                        S = void 0 === C ? "" : C,
                        I = e.url,
                        T = void 0 === I ? "" : I,
                        D = e.cardIndex,
                        N = void 0 === D ? 0 : D,
                        k = e.videoId,
                        A = void 0 === k ? null : k,
                        E = e.imageURL,
                        _ = e.source,
                        L = e.videoAirDate,
                        Z = e.videoDuration,
                        R = e.videoHasCaptions,
                        H = e.videoStreamType,
                        B = e.videoTitle,
                        z = function(e) {
                            var t = e.imageURL,
                                n = e.source,
                                r = t ? (0, U.Pp)(t) : "",
                                i = {
                                    url: r
                                },
                                o = "Polopoly" === n && t ? (0, g.jsx)(P.Z, me({}, i)) : null;
                            return o
                        }({
                            imageURL: E,
                            source: _
                        }),
                        V = ye({
                            videoId: A,
                            cardIndex: N,
                            type: n
                        }) && Oe({
                            type: n,
                            videoId: A,
                            source: _,
                            videoAirDate: L,
                            videoDuration: Z,
                            category: a,
                            videoHasCaptions: R,
                            videoStreamType: H,
                            imageURL: E,
                            url: T,
                            videoTitle: B,
                            title: S
                        }),
                        F = (0, U.d1)(i, h),
                        q = function(e) {
                            var t = null;
                            switch (e.type) {
                                case ve.QU.TYPE_REGULAR:
                                    t = (0, g.jsx)(O.Z, me({}, e));
                                    break;
                                case ve.QU.TYPE_LISTING:
                                    t = (0, g.jsx)(j.Z, me({}, e));
                                    break;
                                case ve.QU.TYPE_LISTING_HORIZONTAL:
                                    t = (0, g.jsx)(j.Z, me({
                                        imagePosition: "right"
                                    }, e));
                                    break;
                                case ve.QU.TYPE_TEXT:
                                    t = (0, g.jsx)(y, me({}, e));
                                    break;
                                case ve.QU.TYPE_SHOW:
                                    t = (0, g.jsx)(w.Z, me({}, e));
                                    break;
                                case ve.QU.TYPE_FEATURED:
                                    t = (0, g.jsx)(x.Z, me({}, e));
                                    break;
                                case ve.QU.TYPE_FEATURED_AUTHOR:
                                    t = (0, g.jsx)(x.Z, me({
                                        displayAuthor: !0
                                    }, e));
                                    break;
                                case ve.QU.TYPE_CONTENT_PACKAGE:
                                    t = (0, g.jsx)(M, me({}, e));
                                    break;
                                case ve.QU.TYPE_DISCOVERY:
                                    t = (0, g.jsx)(K, me({}, e));
                                    break;
                                case ve.QU.TYPE_ICON_DESCRIPTION:
                                    t = (0, g.jsx)(ne, me({}, e));
                                    break;
                                case ve.QU.TYPE_FEATURED_REVERSED:
                                    t = (0, g.jsx)(de, me({}, e));
                                    break;
                                case ve.QU.TYPE_LISTING_AUTHOR:
                                    t = (0, g.jsx)(j.Z, me({
                                        displayAuthor: !0
                                    }, e));
                                    break;
                                default:
                                    t = (0, g.jsx)(c.Z, me({}, e))
                            }
                            return t
                        }(Object.assign({}, e, {
                            type: n,
                            idPrefix: i,
                            category: a,
                            description: l,
                            contentId: d,
                            itemType: f,
                            showTimestamp: m,
                            sourceId: h,
                            title: S,
                            url: T,
                            cardIndex: N,
                            videoId: A
                        }, F, {
                            image: z
                        }, {
                            media: V
                        }));
                    return q
                }), be);

            function ye(e) {
                var t = e.videoId,
                    n = e.cardIndex,
                    r = e.type;
                return !(!t || 0 !== n && r !== ve.QU.TYPE_CONTENT_PACKAGE) || null
            }

            function Oe(e) {
                var t, n = e.type,
                    r = e.videoId,
                    i = e.source,
                    o = e.videoAirDate,
                    a = e.videoDuration,
                    c = e.category,
                    s = e.videoHasCaptions,
                    l = e.videoStreamType,
                    u = e.imageURL,
                    d = e.url,
                    p = e.videoTitle,
                    f = e.title;
                try {
                    var v = {};
                    "contentpackage" === n && (v.name = "content-package", v.instance = "primary-visual");
                    var m = {
                        mediaItem: {
                            sourceId: r,
                            mediaId: r,
                            source: i,
                            title: (t = {
                                videoTitle: p,
                                title: f
                            }, t.videoTitle ? t.videoTitle : t.title),
                            publishedAt: o,
                            type: "video",
                            image: {
                                url: null !== u && void 0 !== u ? u : null
                            },
                            media: {
                                duration: a,
                                contentArea: c,
                                hasCaptions: s,
                                streamType: l
                            }
                        },
                        config: {
                            autoPlay: !1
                        },
                        featureAttribution: v,
                        disableRecommendations: !0
                    };
                    return (0, g.jsx)("div", {
                        className: "videoContainer",
                        children: (0, g.jsx)(pe.Z, me({}, m))
                    })
                } catch (b) {
                    fe.default.error("(getVideo) Failed to embed Video in Card ".concat(d), b)
                }
                return null
            }
            he.propTypes = {
                type: a().oneOf([ve.QU.TYPE_DEFAULT, ve.QU.TYPE_REGULAR, ve.QU.TYPE_TEXT, ve.QU.TYPE_LISTING, ve.QU.TYPE_LISTING_HORIZONTAL, ve.QU.TYPE_SHOW, ve.QU.TYPE_FEATURED, ve.QU.TYPE_FEATURED_AUTHOR, ve.QU.TYPE_CONTENT_PACKAGE, ve.QU.TYPE_ICON_DESCRIPTION, ve.QU.TYPE_DISCOVERY, ve.QU.TYPE_LISTING_AUTHOR, ve.QU.TYPE_FEATURED_REVERSED]),
                category: a().string,
                description: a().string,
                flag: a().string,
                contentId: a().number,
                imageURL: a().string,
                itemType: a().oneOf(ve.iB),
                source: a().oneOf(["Polopoly", "9"]),
                sourceId: a().string,
                title: a().string,
                showTimestamp: a().bool,
                updateTime: a().number,
                url: a().string,
                idPrefix: a().string,
                className: a().string,
                contentPackage: a().object,
                videoId: a().string
            };
            const je = he
        },
        26766: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(85161),
                i = n(56552);
            const o = function(e) {
                var t = e.text;
                return t ? (0, i.jsxs)("div", {
                    className: "callToAction",
                    children: [t, (0, i.jsx)(r.default, {
                        type: "chevron"
                    })]
                }) : null
            }
        },
        97549: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(35098),
                o = n(92972),
                a = n(14507),
                c = n.n(a),
                s = n(37932),
                l = n(7542),
                u = n(63474),
                d = n(26574),
                p = n(98858),
                f = n(57241),
                v = n(42802),
                g = n(56552);

            function m(e, t) {
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
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = function(e) {
                var t = e.imageURL,
                    n = e.external,
                    r = e.sourceId,
                    o = e.title,
                    a = e.url,
                    m = e.id,
                    h = e.className,
                    y = e.author,
                    O = void 0 === y ? {
                        name: "",
                        image: ""
                    } : y,
                    j = e.displayComments,
                    w = e.flag,
                    x = e.flagId,
                    P = e.focus,
                    C = e.baseSection,
                    S = e.subSection,
                    I = e.updateTime,
                    T = e.departments,
                    D = e.metadataId,
                    N = e.cardClickHandler,
                    k = e.videoDuration,
                    A = e.videoAirDate,
                    E = e.videoCardOverlayType,
                    _ = e.itemType,
                    L = e.path,
                    Z = e.feature,
                    R = e.hideAuthorInfo,
                    H = e.videoStreamType,
                    M = (0, i.useRef)(null);
                (0, i.useEffect)((function() {
                    void 0 !== P && M.current.focus()
                }), [P]);
                var B = (0, v.T)("flag", w),
                    U = c()("card", "cardDefault", B, h),
                    z = {
                        flag: w,
                        external: n,
                        id: x
                    },
                    V = (0, f.GH)({
                        sourceId: r,
                        external: n,
                        url: a,
                        cardClickHandler: N
                    }),
                    F = {
                        baseSection: C,
                        subSection: S,
                        authorName: O.name,
                        authorImage: O.image,
                        updated: I,
                        showTimestamp: !0,
                        departments: T,
                        id: D,
                        url: a,
                        displayComments: j,
                        path: L,
                        hideAuthorInfo: R
                    },
                    q = {
                        url: (0, f.mF)(t)
                    },
                    $ = {
                        videoCardOverlayType: E ? "Minimal" : "",
                        videoDuration: k,
                        videoAirDate: A,
                        videoStreamType: H
                    };
                return (0, g.jsx)(d.default, b(b(b({
                    id: m,
                    className: U
                }, V), Z), {}, {
                    "data-cy": "type-".concat(_),
                    ref: M,
                    children: (0, g.jsxs)("div", {
                        className: "card-content",
                        children: [(0, g.jsx)("div", {
                            className: "card-content-top",
                            children: (0, g.jsxs)("div", {
                                className: "cardHeadlineImage",
                                children: [(0, g.jsx)(l.Z, {
                                    imageProps: q,
                                    videoLinkImageOverlayProps: $
                                }), (0, g.jsx)(u._, b({}, z)), (0, g.jsx)(s.Z, {
                                    text: o
                                })]
                            })
                        }), (0, g.jsx)("div", {
                            className: "card-content-bottom",
                            children: (0, g.jsx)(p.Z, b({}, F))
                        })]
                    })
                }))
            };
            h.propTypes = {
                external: o.bool.isRequired,
                sourceId: o.string.isRequired,
                title: o.string.isRequired,
                url: o.string.isRequired,
                id: o.string.isRequired,
                className: o.string,
                author: o.object,
                displayComments: o.bool,
                deck: o.string,
                descriptionId: o.string,
                description: o.string,
                flag: o.string,
                flagId: o.string,
                focus: o.bool,
                onClick: o.func,
                cardClickHandler: o.func,
                baseSection: o.string,
                subSection: o.string,
                updateTime: o.number,
                departments: o.object,
                metadataId: o.string,
                itemType: o.string
            };
            const y = h
        },
        94612: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(29439),
                i = n(4942),
                o = n(35098),
                a = n(92972),
                c = n(37932),
                s = n(63474),
                l = n(39070),
                u = n(26574),
                d = n(98858),
                p = n(7542),
                f = n(91811),
                v = n(61203),
                g = n(42802),
                m = n(14507),
                b = n.n(m),
                h = n(57241),
                y = n(42674),
                O = n(56552);

            function j(e, t) {
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
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = function(e) {
                var t = e.external,
                    n = e.sourceId,
                    i = e.title,
                    a = e.url,
                    m = e.id,
                    j = e.className,
                    x = e.displayComments,
                    P = e.focus,
                    C = void 0 !== P && P,
                    S = e.media,
                    I = e.imageURL,
                    T = e.description,
                    D = e.descriptionId,
                    N = e.flag,
                    k = e.flagId,
                    A = e.baseSection,
                    E = void 0 === A ? "" : A,
                    _ = e.subSection,
                    L = void 0 === _ ? "" : _,
                    Z = e.updateTime,
                    R = e.departments,
                    H = e.metadataId,
                    M = e.cardClickHandler,
                    B = e.videoCardOverlayType,
                    U = e.videoDuration,
                    z = e.videoAirDate,
                    V = e.itemType,
                    F = e.path,
                    q = e.showTimestamp,
                    $ = void 0 === q || q,
                    W = e.author,
                    Y = e.displayAuthor,
                    G = e.hideAuthorInfo,
                    Q = e.videoStreamType,
                    K = (0, o.useRef)(null);
                (0, o.useEffect)((function() {
                    C && K.current.focus()
                }), [C]);
                var X = (0, g.T)("flag", N),
                    J = b()("card", "cardFeatured", X, {
                        hasVideo: S
                    }, j),
                    ee = {
                        flag: N,
                        external: t,
                        id: k
                    },
                    te = (0, h.GH)({
                        sourceId: n,
                        external: t,
                        url: a,
                        cardClickHandler: M
                    }),
                    ne = {
                        baseSection: E,
                        subSection: L,
                        updated: Z,
                        showTimestamp: $,
                        departments: R,
                        id: H,
                        url: a,
                        displayComments: x,
                        path: F,
                        hideAuthorInfo: G
                    };
                if (Y && W) {
                    var re = {
                        authorName: null === W || void 0 === W ? void 0 : W.name,
                        authorImage: null === W || void 0 === W ? void 0 : W.image
                    };
                    ne = w({
                        authorName: re.authorName,
                        authorImage: re.authorImage
                    }, ne)
                }
                var ie = (0, v.E)(I),
                    oe = (0, f.h)(ie),
                    ae = {
                        srcSet: (0, r.Z)(oe, 1)[0],
                        sizes: y.n,
                        url: ie,
                        loading: null,
                        isAboveFold: !0
                    },
                    ce = {
                        videoCardOverlayType: B,
                        videoDuration: U,
                        videoAirDate: z,
                        videoStreamType: Q
                    };
                return (0, O.jsxs)("div", {
                    id: m,
                    className: J,
                    children: [S || (0, O.jsx)(u.default, w(w({
                        className: "mediaItem"
                    }, te), {}, {
                        tabIndex: "-1",
                        "aria-hidden": !0,
                        children: (0, O.jsx)(p.Z, {
                            imageProps: ae,
                            videoLinkImageOverlayProps: ce
                        })
                    })), (0, O.jsx)(u.default, w(w({
                        className: "contentWrapper",
                        "data-cy": "type-".concat(V)
                    }, te), {}, {
                        children: (0, O.jsxs)("div", {
                            ref: K,
                            className: "card-content",
                            children: [(0, O.jsxs)("div", {
                                className: "card-content-top",
                                children: [(0, O.jsx)(s._, w({}, ee)), (0, O.jsx)(c.Z, {
                                    text: i
                                }), T && (0, O.jsx)(l.Z, {
                                    id: D,
                                    text: T
                                })]
                            }), (0, O.jsx)("div", {
                                className: "card-content-bottom",
                                children: (0, O.jsx)(d.Z, w({}, ne))
                            })]
                        })
                    }))]
                })
            };
            x.propTypes = {
                external: a.bool.isRequired,
                sourceId: a.string.isRequired,
                title: a.string.isRequired,
                url: a.string.isRequired,
                id: a.string.isRequired,
                className: a.string,
                displayComments: a.bool,
                focus: a.bool,
                media: a.node,
                imageURL: a.string,
                description: a.string,
                descriptionId: a.string,
                flag: a.string,
                flagId: a.string,
                baseSection: a.string,
                subSection: a.string,
                updateTime: a.number,
                departments: a.object,
                metadataId: a.string,
                cardClickHandler: a.func,
                itemType: a.string,
                showTimestamp: a.bool,
                displayAuthor: a.bool
            };
            const P = x
        },
        42674: (e, t, n) => {
            n.d(t, {
                n: () => r
            });
            var r = ["(max-width: 731px) 98vw", "(max-width: 1280px) 55vw", "640px"]
        },
        7542: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(63474),
                o = n(56552),
                a = "videoLinkImageOverlay",
                c = (0, o.jsx)("svg", {
                    className: a + "PlayBtn",
                    width: "34px",
                    height: "34px",
                    viewBox: "0 0 34 34",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, o.jsx)("g", {
                        id: "Page-1",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, o.jsx)("g", {
                            transform: "translate(-49.000000, -1009.000000)",
                            fillRule: "nonzero",
                            children: (0, o.jsx)("g", {
                                transform: "translate(49.000000, 1009.000000)",
                                children: (0, o.jsxs)("g", {
                                    id: "Group-Copy-31",
                                    children: [(0, o.jsx)("circle", {
                                        fill: "#FFFFFF",
                                        cx: "16.5",
                                        cy: "16.5",
                                        r: "16.5"
                                    }), (0, o.jsx)("path", {
                                        d: "M12.0627845,9.87071431 L24.510661,16.6074648 C24.6396791,16.677289 24.6876652,16.8384825 24.617841,16.9675006 C24.5925502,17.0142319 24.553825,17.0523041 24.5066704,17.0767967 L12.0587939,23.5423393 C11.9286072,23.6099595 11.768253,23.5592393 11.7006328,23.4290526 C11.6809874,23.3912301 11.6707317,23.3492356 11.6707317,23.3066154 L11.6707317,10.1043222 C11.6707317,9.95762156 11.7896561,9.8386972 11.9363567,9.8386972 C11.9805052,9.8386972 12.0239575,9.84970124 12.0627845,9.87071431 Z",
                                        fill: "#000000"
                                    })]
                                })
                            })
                        })
                    })
                }),
                s = (0, o.jsx)("svg", {
                    className: "captions",
                    viewBox: "0 0 14 9.5",
                    width: "13px",
                    height: "13px",
                    "aria-label": "Close captions available",
                    children: (0, o.jsx)("path", {
                        d: "m12.5,0c0.6875,0 1.25,0.5625 1.25,1.25l0,7.5c0,0.6875 -0.5625,1.25 -1.25,1.25l-8.75,0c-0.69375,0 -1.25,-0.5625 -1.25,-1.25l0,-7.5c0,-0.6875 0.55625,-1.25 1.25,-1.25l8.75,0zm-5,4.375l0,-0.625c0,-0.34375 -0.28125,-0.625 -0.625,-0.625l-1.875,0c-0.34375,0 -0.625,0.28125 -0.625,0.625l0,2.5c0,0.34375 0.28125,0.625 0.625,0.625l1.875,0c0.34375,0 0.625,-0.28125 0.625,-0.625l0,-0.625l-0.9375,0l0,0.3125l-1.25,0l0,-1.875l1.25,0l0,0.3125l0.9375,0zm4.375,0l0,-0.625c0,-0.34375 -0.28125,-0.625 -0.625,-0.625l-1.875,0c-0.34375,0 -0.625,0.28125 -0.625,0.625l0,2.5c0,0.34375 0.28125,0.625 0.625,0.625l1.875,0c0.34375,0 0.625,-0.28125 0.625,-0.625l0,-0.625l-0.9375,0l0,0.3125l-1.25,0l0,-1.875l1.25,0l0,0.3125l0.9375,0z"
                    })
                }),
                l = n(39588),
                u = n(92972),
                d = n(14507),
                p = n.n(d),
                f = n(46484);

            function v(e) {
                var t = e.videoCardOverlayType,
                    n = void 0 === t ? "" : t,
                    r = e.videoDuration,
                    u = void 0 === r ? null : r,
                    d = e.videoAirDate,
                    v = void 0 === d ? null : d,
                    g = e.videoHasCaptions,
                    m = void 0 !== g && g,
                    b = e.videoStreamType,
                    h = void 0 === b ? null : b,
                    y = p()(a);
                if ("" === n) return null;
                var O = (0, f.D2)(h),
                    j = "Minimal" === n,
                    w = !j && O && v,
                    x = w && v < Date.now(),
                    P = w && !x,
                    C = m ? s : null,
                    S = !j && !O,
                    I = null,
                    T = (0, l.Ud)(u);
                S && T && (I = (0, o.jsxs)("div", {
                    className: a + "VideoDuration",
                    children: [(0, o.jsx)("p", {
                        "aria-label": "duration ".concat(T),
                        children: T
                    }), C]
                }));
                var D = null;
                return x ? D = (0, o.jsxs)("div", {
                    className: a + "LiveLabel",
                    children: [(0, o.jsx)(i._, {
                        flag: "Live"
                    }), C]
                }) : P && (D = (0, o.jsxs)("div", {
                    className: p()(m ? "captions" : "", a + "Upcoming"),
                    children: [(0, o.jsxs)("div", {
                        children: [(0, o.jsx)(i._, {
                            flag: "Live in",
                            highlighted: !0
                        }), C]
                    }), (0, o.jsx)("p", {
                        className: a + "UpcomingTime",
                        suppressHydrationWarning: !0,
                        children: (0, l.Jn)(v)
                    })]
                })), (0, o.jsxs)("div", {
                    className: y,
                    children: [c, (0, o.jsx)("span", {
                        className: "a11y",
                        children: "Video"
                    }), I, D]
                })
            }
            v.propTypes = {
                videoCardOverlayType: (0, u.oneOf)(["", "Minimal", "Normal"]),
                videoDuration: u.number,
                videoAirDate: u.number,
                videoHasCaptions: u.bool,
                videoStreamType: u.string
            };
            var g = n(8250);

            function m(e, t) {
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
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function h(e) {
                var t = e.imageProps,
                    n = e.videoLinkImageOverlayProps,
                    r = e.className;
                return (0, o.jsxs)("div", {
                    className: p()("cardImageWrap", r),
                    children: [(0, o.jsx)(g.E, b({}, t)), (0, o.jsx)(v, b({}, n))]
                })
            }
        },
        3565: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            n(83464), n(19496);
            var r = n(29439),
                i = n(4942),
                o = (n(58109), n(95566), n(68438), n(35098)),
                a = n(92972),
                c = n(7542),
                s = n(37932),
                l = n(98858),
                u = n(63474),
                d = n(39070),
                p = n(26574),
                f = n(14507),
                v = n.n(f),
                g = n(57241),
                m = ["(max-width: 640px) 90vw", "320px"],
                b = n(42802),
                h = n(91811),
                y = n(61203),
                O = n(56552);

            function j(e, t) {
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
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = function(e) {
                var t = e.external,
                    n = e.title,
                    i = e.url,
                    a = e.className,
                    f = e.description,
                    j = void 0 === f ? "" : f,
                    x = e.feature,
                    P = void 0 === x ? {} : x,
                    C = e.flag,
                    S = void 0 === C ? "none" : C,
                    I = e.flagId,
                    T = e.imageURL,
                    D = e.image,
                    N = e.imagePosition,
                    k = void 0 === N ? "top" : N,
                    A = e.author,
                    E = void 0 === A ? {
                        name: "",
                        image: ""
                    } : A,
                    _ = e.displayComments,
                    L = e.baseSection,
                    Z = e.subSection,
                    R = e.updateTime,
                    H = e.departments,
                    M = e.headlineId,
                    B = e.descriptionId,
                    U = e.metadataId,
                    z = e.sourceId,
                    V = e.cardClickHandler,
                    F = e.focus,
                    q = e.videoCardOverlayType,
                    $ = e.videoDuration,
                    W = e.videoAirDate,
                    Y = e.itemType,
                    G = e.showTimestamp,
                    Q = void 0 === G || G,
                    K = e.displayAuthor,
                    X = e.hideAuthorInfo,
                    J = e.videoStreamType,
                    ee = (0, o.useRef)(null);
                (0, o.useEffect)((function() {
                    F && ee.current.focus()
                }), [F]);
                var te = "".concat(k, "Image"),
                    ne = (0, b.T)("flag", S),
                    re = v()("card", ne, "cardListing", te, a),
                    ie = {
                        baseSection: L,
                        subSection: Z,
                        updated: R,
                        showTimestamp: Q,
                        departments: H,
                        url: i,
                        displayComments: _,
                        hideAuthorInfo: X
                    };
                if (K && E) {
                    var oe = {
                        authorName: null === E || void 0 === E ? void 0 : E.name,
                        authorImage: null === E || void 0 === E ? void 0 : E.image
                    };
                    ie = w({
                        authorName: oe.authorName,
                        authorImage: oe.authorImage
                    }, ie)
                }
                var ae = {
                    flag: S,
                    external: t
                };
                T = (0, y.E)(T);
                var ce, se = (0, h.h)(T),
                    le = (0, r.Z)(se, 1)[0];
                0 === le.length && (le = (null === (ce = le = (0, g.ip)(D)) || void 0 === ce ? void 0 : ce.filter((function(e) {
                    return !e.includes("220w")
                }))) || []);
                var ue = {
                        url: T,
                        srcSet: le,
                        sizes: m
                    },
                    de = {
                        videoCardOverlayType: q,
                        videoDuration: $,
                        videoAirDate: W,
                        videoStreamType: J
                    };
                return (0, O.jsxs)(p.default, w(w(w({
                    className: re
                }, (0, g.GH)({
                    sourceId: z,
                    external: t,
                    url: i,
                    cardClickHandler: V
                })), {}, {
                    "data-cy": "type-".concat(Y)
                }, P), {}, {
                    ref: ee,
                    children: [(0, O.jsx)(c.Z, {
                        imageProps: ue,
                        videoLinkImageOverlayProps: de,
                        className: v()("image", "imageMedia")
                    }), (0, O.jsx)("div", {
                        className: "contentWrapper",
                        children: (0, O.jsxs)("div", {
                            className: "card-content",
                            children: [(0, O.jsxs)("div", {
                                className: "card-content-top",
                                children: [(0, O.jsx)(u._, w({
                                    id: I
                                }, ae)), (0, O.jsx)(s.Z, {
                                    id: M,
                                    text: n
                                }), (0, O.jsx)(d.Z, {
                                    id: B,
                                    text: j
                                })]
                            }), (0, O.jsx)("div", {
                                className: "card-content-bottom",
                                children: (0, O.jsx)(l.Z, w({
                                    id: U
                                }, ie))
                            })]
                        })
                    })]
                }))
            };
            x.propTypes = {
                external: a.bool.isRequired,
                title: a.string.isRequired,
                url: a.string.isRequired,
                className: a.string,
                description: a.string,
                flag: a.string,
                imagePosition: (0, a.oneOf)(["top", "left", "right"]),
                author: a.object,
                displayComments: a.bool,
                focus: a.bool,
                flagId: a.string,
                imageURL: a.string,
                baseSection: a.string,
                subSection: a.string,
                updateTime: a.number,
                departments: a.object,
                headlineId: a.string,
                descriptionId: a.string,
                metadataId: a.string,
                onClick: a.func,
                cardClickHandler: a.func,
                itemType: a.string,
                showTimestamp: a.bool
            };
            const P = x
        },
        75004: (e, t, n) => {
            n.d(t, {
                N: () => w,
                Z: () => x
            });
            var r = n(4942),
                i = n(29439),
                o = (n(58109), n(95566), n(68438), n(83464), n(19496), n(35098)),
                a = n(92972),
                c = n(37932),
                s = n(7542),
                l = n(63474),
                u = n(26574),
                d = n(98858),
                p = n(14507),
                f = n.n(p),
                v = n(57241),
                g = n(42802),
                m = n(91811),
                b = n(61203),
                h = ["(max-width: 640px) 99vw", "(max-width: 960px) 47vw", "310px"],
                y = n(56552);

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

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var w = function(e) {
                var t = e.external,
                    n = e.title,
                    r = e.url,
                    a = e.imageURL,
                    p = e.image,
                    O = e.author,
                    w = void 0 === O ? {
                        name: "",
                        image: ""
                    } : O,
                    x = e.className,
                    P = e.displayComments,
                    C = e.focus,
                    S = e.flag,
                    I = e.flagId,
                    T = e.baseSection,
                    D = e.subSection,
                    N = e.updateTime,
                    k = e.departments,
                    A = e.commentCount,
                    E = e.headlineId,
                    _ = e.metadataId,
                    L = e.sourceId,
                    Z = e.cardClickHandler,
                    R = e.videoCardOverlayType,
                    H = e.videoDuration,
                    M = e.videoAirDate,
                    B = e.itemType,
                    U = e.path,
                    z = e.showTimestamp,
                    V = void 0 === z || z,
                    F = e.hideAuthorInfo,
                    q = e.videoStreamType,
                    $ = (0, o.useRef)(null);
                (0, o.useEffect)((function() {
                    C && $.current.focus()
                }), [C]);
                var W, Y = (0, g.T)("flag", S),
                    G = f()("card", Y, "cardRegular", x),
                    Q = {
                        authorName: w.name,
                        authorImage: w.image
                    },
                    K = {
                        baseSection: T,
                        subSection: D,
                        authorName: Q.authorName,
                        authorImage: Q.authorImage,
                        updated: N,
                        showTimestamp: V,
                        departments: k,
                        url: r,
                        displayComments: P,
                        commentCount: A,
                        path: U,
                        hideAuthorInfo: F
                    },
                    X = (0, b.E)(a),
                    J = (0, m.h)(X),
                    ee = (0, i.Z)(J, 1)[0];
                0 === ee.length && (ee = (null === (W = ee = (0, v.ip)(p)) || void 0 === W ? void 0 : W.filter((function(e) {
                    return !e.includes("220w")
                }))) || []);
                var te = {
                        url: X,
                        srcSet: ee,
                        sizes: h
                    },
                    ne = {
                        videoCardOverlayType: R,
                        videoDuration: H,
                        videoAirDate: M,
                        videoStreamType: q
                    },
                    re = {
                        flag: S,
                        external: t,
                        id: I
                    };
                return (0, y.jsxs)(u.default, j(j({
                    className: G
                }, (0, v.GH)({
                    sourceId: L,
                    external: t,
                    url: r,
                    cardClickHandler: Z
                })), {}, {
                    "data-cy": "type-".concat(B),
                    ref: $,
                    children: [(0, y.jsx)(s.Z, {
                        imageProps: te,
                        videoLinkImageOverlayProps: ne
                    }), (0, y.jsx)("div", {
                        className: "contentWrapper",
                        children: (0, y.jsxs)("div", {
                            className: "card-content",
                            children: [(0, y.jsxs)("div", {
                                className: "card-content-top",
                                children: [(0, y.jsx)(l._, j({}, re)), (0, y.jsx)(c.Z, {
                                    id: E,
                                    text: n
                                })]
                            }), (0, y.jsx)("div", {
                                className: "card-content-bottom",
                                children: (0, y.jsx)(d.Z, j({
                                    id: _
                                }, K))
                            })]
                        })
                    })]
                }))
            };
            w.propTypes = {
                external: a.bool.isRequired,
                title: a.string.isRequired,
                url: a.string.isRequired,
                imageURL: a.string.isRequired,
                author: a.object,
                className: a.string,
                displayComments: a.bool,
                focus: a.bool,
                flag: a.string,
                flagId: a.string,
                baseSection: a.string,
                subSection: a.string,
                updateTime: a.number,
                departments: a.object,
                commentCount: a.number,
                onClick: a.func,
                headlineId: a.string,
                metadataId: a.string,
                sourceId: a.string,
                cardClickHandler: a.func,
                itemType: a.string,
                showTimestamp: a.bool
            };
            const x = w
        },
        43760: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(29439),
                o = n(35098),
                a = n(92972),
                c = n(37932),
                s = n(7542),
                l = n(63474),
                u = n(39070),
                d = n(26574),
                p = n(26766),
                f = n(14507),
                v = n.n(f),
                g = n(57241),
                m = n(88101),
                b = n(91811),
                h = n(73620),
                y = n(61203),
                O = ["(max-width: 560px) 70vw", "(max-width: 960px) 40vw", "300px"],
                j = n(56552);

            function w(e, t) {
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
                    t % 2 ? w(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var P = function(e) {
                var t = e.external,
                    n = e.title,
                    r = e.url,
                    a = e.className,
                    f = e.description,
                    w = e.flag,
                    P = e.flagId,
                    C = e.imageURL,
                    S = e.headlineId,
                    I = e.descriptionId,
                    T = e.sourceId,
                    D = e.cardClickHandler,
                    N = e.focus,
                    k = e.videoCardOverlayType,
                    A = e.videoDuration,
                    E = e.videoAirDate,
                    _ = e.callToActionText,
                    L = e.itemType,
                    Z = e.videoStreamType,
                    R = (0, o.useRef)(null);
                (0, o.useEffect)((function() {
                    void 0 !== N && R.current.focus()
                }));
                var H = (0, m.C_)("flag", w),
                    M = v()("card", H, "cardShow", a),
                    B = (0, y.E)(C),
                    U = (0, b.h)(B, h.Ai),
                    z = {
                        srcSet: (0, i.Z)(U, 1)[0],
                        sizes: O,
                        url: B
                    },
                    V = {
                        videoCardOverlayType: k,
                        videoDuration: A,
                        videoAirDate: E,
                        videoStreamType: Z
                    },
                    F = (0, g.GH)({
                        sourceId: T,
                        external: t,
                        url: r,
                        cardClickHandler: D
                    });
                return (0, j.jsxs)(d.default, x(x({
                    className: M
                }, F), {}, {
                    "data-cy": "type-".concat(L),
                    ref: R,
                    children: [(0, j.jsx)(s.Z, {
                        imageProps: z,
                        videoLinkImageOverlayProps: V
                    }), (0, j.jsx)("div", {
                        className: "contentWrapper",
                        children: (0, j.jsxs)("div", {
                            className: "card-content",
                            children: [(0, j.jsxs)("div", {
                                className: "card-content-top",
                                children: [(0, j.jsx)(l._, {
                                    id: P,
                                    flag: w,
                                    external: t
                                }), (0, j.jsx)(c.Z, {
                                    id: S,
                                    text: n
                                }), "undefined" !== typeof f && (0, j.jsx)(u.Z, {
                                    id: I,
                                    text: f
                                })]
                            }), (0, j.jsx)("div", {
                                className: "card-content-bottom",
                                children: "undefined" !== typeof _ && (0, j.jsx)(p.Z, {
                                    text: _
                                })
                            })]
                        })
                    })]
                }))
            };
            P.propTypes = {
                external: a.bool.isRequired,
                title: a.string.isRequired,
                url: a.string.isRequired,
                imageURL: a.string.isRequired,
                sourceId: a.string.isRequired,
                category: a.string,
                className: a.string,
                itemType: a.string,
                description: a.string,
                flag: a.string,
                flagId: a.string,
                headlineId: a.string,
                descriptionId: a.string,
                cardClickHandler: a.func,
                focus: a.bool,
                videoCardOverlayType: a.string,
                videoDuration: a.number,
                videoAirDate: a.number,
                callToActionText: a.string,
                videoStreamType: a.string
            };
            const C = P
        },
        37932: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(56552);
            const i = function(e) {
                var t = e.id,
                    n = e.text;
                return (0, r.jsx)("h3", {
                    className: "headline",
                    id: t,
                    "data-cy": "headline",
                    children: n
                })
            }
        },
        98858: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(92972),
                i = n.n(r),
                o = n(27023),
                a = n(56552);

            function c(e) {
                var t = e.image,
                    n = e.name;
                return (0, a.jsxs)("div", {
                    className: "authorInfo",
                    children: [(0, a.jsx)(o.Z, {
                        src: t,
                        title: n
                    }), (0, a.jsx)("div", {
                        className: "authorName",
                        children: n
                    })]
                })
            }
            c.propTypes = {
                name: i().string.isRequired,
                image: i().string
            };
            const s = c;
            var l = n(73592),
                u = (n(58109), n(95566), n(68438), n(9867), n(7231), n(14507)),
                d = n.n(u),
                p = ["canada", "homepage", "csou-episodes"],
                f = ["sports", "olympics", "summer", "winter"],
                v = n(88101),
                g = function(e, t, n, r, i, o) {
                    var a = o.sectionList[t];
                    return "canada" === a && 1 === o.sectionLabels.length || !((0, v.WM)({
                        path: i
                    }) && f.includes(a) || 0 === t && (a === n || a === r || p.includes(a)) || !e)
                };

            function m(e) {
                var t = e.showTimestamp,
                    n = void 0 === t || t,
                    r = e.departments,
                    i = void 0 === r ? {
                        sectionList: null,
                        sectionLabels: null
                    } : r,
                    o = e.updated,
                    c = void 0 === o ? 1 : o,
                    u = e.displayComments,
                    p = void 0 !== u && u,
                    f = e.authorName,
                    m = e.authorImage,
                    b = e.hideAuthorInfo,
                    h = e.baseSection,
                    y = e.subSection,
                    O = e.path,
                    j = e.id,
                    w = null;
                n && c && (w = (0, a.jsx)(l.Z, {
                    updated: c
                }));
                var x = null;
                f && !b && (x = (0, a.jsx)(s, {
                    name: f,
                    image: m
                }));
                var P = function(e, t, n, r) {
                        if (!r.sectionList || !r.sectionLabels) return null;
                        var i = r.sectionLabels.filter((function(i, o) {
                            return g(i, o, e, t, n, r)
                        }));
                        return i.map((function(e, t) {
                            var n = d()("departmentItem", (0, v.C_)("deptItem", e, "", !0)),
                                r = t < i.length - 1 ? (0, a.jsx)("span", {
                                    className: "metaSeparator",
                                    "aria-hidden": "true",
                                    children: "-"
                                }) : null;
                            return (0, a.jsxs)("span", {
                                className: n,
                                children: [e, " ", r]
                            }, e)
                        }))
                    }(h, y, O, i),
                    C = w && null !== P && void 0 !== P && P.length ? (0, a.jsx)("span", {
                        className: "metaSeparator",
                        "aria-hidden": "true",
                        children: "|"
                    }) : null,
                    S = (0, a.jsx)("svg", {
                        viewBox: "0 0 32 32",
                        focusable: "false",
                        role: "img",
                        "aria-label": "Open for comments",
                        children: (0, a.jsx)("path", {
                            d: "M20.95,17H11a1,1,0,0,0,0,2h10a1,1,0,0,0,0-2Zm2-6H9a1,1,0,0,0,0,2h14a1,1,0,0,0,0-2ZM16,0C7.14,0,0,6.26,0,14a12.55,12.55,0,0,0,6,10.9v7.07l7-4.25a18.71,18.71,0,0,0,3,.25c8.82,0,16-6.25,16-14S24.78,0,16,0Zm0,25.95a16.29,16.29,0,0,1-3.37-.37l-4.7,2.82.06-4.63A11.56,11.56,0,0,1,2,14C2,7.36,8.24,2,16,2s14,5.36,14,12-6.26,12-14,12Zm0,0"
                        })
                    }),
                    I = p ? (0, a.jsxs)("span", {
                        className: "commentInfo",
                        children: [(0, a.jsx)("span", {
                            className: "metaSeparator",
                            "aria-hidden": "true",
                            children: "|"
                        }), (0, a.jsx)("span", {
                            className: "commentCount-icon",
                            children: S
                        })]
                    }) : null;
                return (0, a.jsxs)("div", {
                    id: j,
                    className: "metadata",
                    children: [x, (0, a.jsxs)("div", {
                        className: "metadataText",
                        children: [P, C, w, I]
                    })]
                })
            }
            m.propTypes = {
                published: i().number,
                updated: i().number,
                showTimestamp: i().bool,
                id: i().string,
                authorName: i().string,
                authorImage: i().string,
                departments: i().object,
                baseSection: i().string,
                subSection: i().string,
                displayComments: i().bool
            };
            const b = m
        },
        40627: (e, t, n) => {
            n.d(t, {
                QU: () => o,
                YC: () => r,
                iB: () => i
            });
            var r = "story",
                i = ["audio", "nonpolopolyURL", "photogallery", "scoreline", r, "stub", "twitter", "video", "youtube", "segment", "episode", "blogentry", "feature", "alert", "sponsoredcontent", "media", "recipe", "contentpackage", "page"],
                o = {
                    TYPE_DEFAULT: "default",
                    TYPE_TEXT: "text",
                    TYPE_REGULAR: "regular",
                    TYPE_LISTING: "listing",
                    TYPE_LISTING_HORIZONTAL: "listing-horizontal",
                    TYPE_SHOW: "show",
                    TYPE_FEATURED: "featured",
                    TYPE_FEATURED_AUTHOR: "featuredauthor",
                    TYPE_CONTENT_PACKAGE: "contentpackage",
                    TYPE_DISCOVERY: "discovery",
                    TYPE_ICON_DESCRIPTION: "icon",
                    TYPE_FEATURED_REVERSED: "featuredreversed",
                    TYPE_LISTING_AUTHOR: "listingauthor"
                }
        },
        81346: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(35098),
                o = n(57241),
                a = n(14507),
                c = n.n(a),
                s = n(26574),
                l = n(42802),
                u = n(27023),
                d = n(56552);
            const p = function(e) {
                var t = e.author;
                if (!t || !Object.keys(t).length) return null;
                var n = t.name,
                    r = t.image;
                return (0, d.jsxs)("div", {
                    className: "card-cqw-author-info",
                    children: [r && (0, d.jsx)(u.Z, {
                        src: r
                    }), (0, d.jsx)("div", {
                        className: "author-name",
                        children: n
                    })]
                })
            };
            const f = function(e) {
                var t = e.description,
                    n = e.descriptionId;
                return t ? (0, d.jsx)("div", {
                    id: n,
                    className: "card-description",
                    children: t
                }) : null
            };
            const v = function(e) {
                var t = e.headlineId,
                    n = e.title;
                return n ? (0, d.jsx)("div", {
                    className: "card-cqw-headline",
                    children: (0, d.jsx)("h3", {
                        className: "headline",
                        id: t,
                        children: n
                    })
                }) : null
            };
            var g = n(98858);

            function m(e, t) {
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
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const h = function(e) {
                var t, n, r = e.metadataId,
                    i = e.publishTime,
                    o = e.updateTime,
                    a = e.departments,
                    c = e.baseSection,
                    s = e.subSection,
                    l = e.displayComments;
                if (!r || (null === a || void 0 === a || null === (t = a.sectionList) || void 0 === t || !t.length) && (null === a || void 0 === a || null === (n = a.sectionLabels) || void 0 === n || !n.length)) return null;
                var u = {
                    id: r,
                    published: i,
                    updated: o,
                    departments: a,
                    baseSection: c,
                    subSection: s,
                    displayComments: l
                };
                return (0, d.jsx)("div", {
                    className: "card-cqw-metadata",
                    children: (0, d.jsx)(g.Z, b({}, u))
                })
            };
            var y = n(7542),
                O = (n(30666), n(6129), n(72663)),
                j = 1,
                w = 1.778,
                x = ["(min-width: 1100px) 15vw", "(min-width: 1020px) 30vw", "(min-width: 500px) 47vw", "99vw"],
                P = function(e, t) {
                    var n, r = {};
                    if (!e.url) return r;
                    var i = e.url.split("?");
                    i[0] = encodeURI(i[0]);
                    var o = i.join("?");
                    if (t === O.v.CONDENSED_SQUARE_THUMB) {
                        var a, c = null === (a = e.srcset) || void 0 === a ? void 0 : a.find((function(e) {
                                return e.includes("220w")
                            })),
                            s = null === c || void 0 === c ? void 0 : c.substring(0, c.length - 5);
                        r.url = s || o, r.aspectRatio = j, r.sizes = null, r.srcSet = null
                    } else r.url = o, r.aspectRatio = w, r.srcSet = (null === (n = e.srcset) || void 0 === n ? void 0 : n.filter((function(e) {
                        return !e.includes("220w")
                    }))) || [], r.sizes = e.srcset ? x : null;
                    return r
                },
                C = n(14918);

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            const I = function(e) {
                var t, n = e.image,
                    i = e.videoCardOverlayType,
                    o = e.variant,
                    a = e.videoDuration,
                    c = e.videoAirDate,
                    s = e.videoHasCaptions,
                    l = e.videoStreamType;
                if (!n) return null;
                var u = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? S(Object(n), !0).forEach((function(t) {
                            (0, r.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, n);
                if (!u.url) {
                    if (! function(e) {
                            return null !== C.TP[e].imageURL
                        }(o)) return null;
                    u.url = "https://i.cbc.ca/1.1942741.1381638556!/httpImage/image.jpg_gen/derivatives/16x9_1180/hi-cbc-logo.jpg?im="
                }
                var p = {
                    videoCardOverlayType: null !== i && void 0 !== i ? i : null,
                    videoDuration: null !== a && void 0 !== a ? a : null,
                    videoAirDate: null !== (t = Number(c)) && void 0 !== t ? t : null,
                    videoHasCaptions: s,
                    videoStreamType: l
                };
                return (0, d.jsx)("div", {
                    className: "card-cqw-image-top",
                    children: (0, d.jsx)(y.Z, {
                        imageProps: P(u, o),
                        videoLinkImageOverlayProps: p
                    })
                })
            };
            var T = n(63474);

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            const N = function(e) {
                var t = e.flag,
                    n = e.external,
                    i = e.flagId;
                if (!t) return null;
                var o = {
                    flag: t,
                    external: n,
                    flagId: i
                };
                return (0, d.jsx)(T._, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? D(Object(n), !0).forEach((function(t) {
                            (0, r.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, o))
            };
            const k = function(e) {
                var t = e.classes,
                    n = void 0 === t ? "" : t,
                    r = e.variant,
                    i = void 0 === r ? O.v.STANDARD : r,
                    o = C.TP[i];
                return (0, d.jsxs)("div", {
                    className: "".concat(n, " placeholder"),
                    children: [null !== o.imageURL && (0, d.jsx)("div", {
                        className: "card-cqw-head",
                        children: (0, d.jsx)("div", {
                            className: "card-cqw-image-top"
                        })
                    }), (0, d.jsxs)("div", {
                        className: "card-cqw-body",
                        children: [(0, d.jsxs)("div", {
                            className: "card-cqw-main",
                            children: [(0, d.jsx)("div", {
                                className: "card-cqw-headline"
                            }), (0, d.jsx)("div", {
                                className: "card-description "
                            })]
                        }), (0, d.jsx)("div", {
                            className: "card-cqw-bottom"
                        })]
                    })]
                })
            };

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

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const _ = function(e) {
                var t = e.flag,
                    n = e.flagId,
                    r = e.variant,
                    a = void 0 === r ? O.v.STANDARD : r,
                    u = e.sourceId,
                    g = e.external,
                    m = e.url,
                    b = e.featureAttribution,
                    y = e.clickHandler,
                    j = e.id,
                    w = e.focus,
                    x = e.image,
                    P = e.videoCardOverlayType,
                    C = e.videoAirDate,
                    S = e.videoDuration,
                    T = e.videoHasCaptions,
                    D = e.videoStreamType,
                    A = e.headlineId,
                    _ = e.title,
                    L = e.descriptionId,
                    Z = e.description,
                    R = e.author,
                    H = e.metadataId,
                    M = e.publishTime,
                    B = e.updateTime,
                    U = e.departments,
                    z = e.baseSection,
                    V = e.subSection,
                    F = e.displayComments,
                    q = (0, i.useRef)();
                (0, i.useEffect)((function() {
                    w && q.current && q.current.focus()
                }), [w]);
                var $ = (0, l.T)("flag", t),
                    W = c()("card", "card-cqw", a, $);
                if (!j) return (0, d.jsx)(k, {
                    classes: W,
                    variant: a
                });
                var Y = (0, o.GH)({
                    sourceId: u,
                    external: g,
                    cardClickHandler: y,
                    url: m
                });
                return (0, d.jsx)("div", {
                    "data-feature-instance": null === b || void 0 === b ? void 0 : b.instance,
                    "data-feature-name": null === b || void 0 === b ? void 0 : b.name,
                    "data-feature-position": null === b || void 0 === b ? void 0 : b.position,
                    children: (0, d.jsxs)(s.default, E(E({
                        id: j,
                        ref: q,
                        className: W
                    }, Y), {}, {
                        "data-cy": j,
                        children: [(0, d.jsx)("div", {
                            className: "card-cqw-head",
                            children: (0, d.jsx)(I, {
                                image: x,
                                variant: a,
                                videoCardOverlayType: P,
                                videoAirDate: C,
                                videoDuration: S,
                                videoHasCaptions: T,
                                videoStreamType: D
                            })
                        }), (0, d.jsxs)("div", {
                            className: "card-cqw-body",
                            children: [(0, d.jsxs)("div", {
                                className: "card-cqw-main",
                                children: [(0, d.jsx)(N, {
                                    flag: t,
                                    flagId: n,
                                    external: g
                                }), (0, d.jsx)(v, {
                                    headlineId: A,
                                    title: _
                                }), (0, d.jsx)(f, {
                                    descriptionId: L,
                                    description: Z
                                })]
                            }), (0, d.jsxs)("div", {
                                className: "card-cqw-bottom",
                                children: [(0, d.jsx)(p, {
                                    author: R
                                }), (0, d.jsx)(h, {
                                    metadataId: H,
                                    publishTime: Number(M),
                                    updateTime: Number(B),
                                    departments: U,
                                    baseSection: z,
                                    subSection: V,
                                    displayComments: F
                                })]
                            })]
                        })]
                    }))
                })
            }
        },
        19227: (e, t, n) => {
            n.d(t, {
                S8: () => r,
                Zm: () => i,
                _P: () => a,
                yo: () => o
            });
            var r = {
                    default: "DISPLAY_POLICY_DEFAULT",
                    debug: "DISPLAY_POLICY_DEBUG",
                    high: "DISPLAY_POLICY_HIGH_DENSITY",
                    medium: "DISPLAY_POLICY_MED_DENSITY",
                    listing: "DISPLAY_POLICY_LISTING",
                    homepage: "DISPLAY_POLICY_HOMEPAGE",
                    rich: "DISPLAY_POLICY_RICH",
                    search: "DISPLAY_POLICY_SEARCH"
                },
                i = "default",
                o = 16,
                a = 20
        },
        80361: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(15671),
                i = n(43144),
                o = n(82963),
                a = n(61120),
                c = n(60136),
                s = (n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703), n(40627)),
                l = n(34325),
                u = n(19227);

            function d(e, t, n) {
                return t = (0, a.Z)(t), (0, o.Z)(e, p() ? Reflect.construct(t, n || [], (0, a.Z)(e).constructor) : t.apply(e, n))
            }

            function p() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (e) {}
                return (p = function() {
                    return !!e
                })()
            }
            const f = function(e) {
                function t() {
                    var e;
                    return (0, r.Z)(this, t), (e = d(this, t)).policyName = "DefaultPolicy", e
                }
                return (0, c.Z)(t, e), (0, i.Z)(t, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        this.cardTypesMap = new Map, this.cardTypesMap.set(u.Zm, s.QU.TYPE_DEFAULT)
                    }
                }]), t
            }(l.Z)
        },
        34325: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(15671),
                o = n(43144),
                a = (n(9867), n(7231), n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703), n(84412)),
                c = n(40627),
                s = n(61851),
                l = n(50439),
                u = (0, o.Z)((function e(t) {
                    (0, i.Z)(this, e), this.execute = t
                })),
                d = function(e) {
                    return !!e && (!(e.type && e.type.composeCheck instanceof u && e.props) || e.type.composeCheck.execute(e.props))
                },
                p = n(88101),
                f = n(53333),
                v = n(77008),
                g = n(19227),
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

            function h(e) {
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
            const y = function() {
                function e() {
                    (0, i.Z)(this, e)
                }
                return (0, o.Z)(e, [{
                    key: "format",
                    value: function(e, t, n, r, i) {
                        var o = this,
                            c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                            u = null === e || void 0 === e ? void 0 : e.feature;
                        this.buildCardTypesMap(e.length);
                        var g = e.map((function(e, t) {
                            return o.getItemAndCardTypeAtIndex(e, t)
                        })).map((function(e, o) {
                            var g, b = e.cardType,
                                y = e.contentItem;
                            if (y.type === f.B) g = (0, m.jsx)(l.Z, {
                                type: y.type,
                                responsive: y.responsive,
                                targeting: y.targeting,
                                cardType: b,
                                callback: y.callback
                            }, y.key);
                            else {
                                var O, j = "key-".concat(y.contentId, "-").concat(o),
                                    w = u;
                                y.id && y.id.toString().startsWith("keymatch_") ? w = h(h({}, w), {}, {
                                    instance: "nlp-match"
                                }) : O = t.trackingSection ? (0, p.C_)("sclt", t.trackingSection, "card".concat(o)) : "sclt-card".concat(o);
                                var x = {
                                    type: b,
                                    baseSection: t.baseSection,
                                    subSection: t.subSection,
                                    className: O,
                                    cardClickHandler: n,
                                    cardIndex: o,
                                    variant: i,
                                    feature: u && (0, v.Z)(h({
                                        position: o + 1
                                    }, w)),
                                    displayType: r,
                                    disableTrendingCount: c
                                };
                                if (r !== s.a.TYPE_LIST && (x.key = j), g = (0, m.jsx)(a.ZP, h(h({}, x), y)), "undefined" !== typeof y.insertAd) {
                                    var P = function() {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        for (var r, i = t.length, o = []; i--;) r = t[i], d(r) && o.unshift(r);
                                        return o
                                    }(g, (0, m.jsx)("div", {
                                        className: "adCardWrapper",
                                        children: (0, m.jsx)(l.Z, {
                                            type: "load-more",
                                            lazy: !0,
                                            targeting: {
                                                plc: "more"
                                            }
                                        })
                                    }));
                                    return P
                                }
                                if (r === s.a.TYPE_LIST) return (0, m.jsx)("li", {
                                    className: "contentListItem",
                                    children: g
                                }, j)
                            }
                            return g
                        }));
                        return g
                    }
                }, {
                    key: "buildCardTypesMap",
                    value: function() {
                        this.cardTypesMap = new Map, this.cardTypesMap.set(g.Zm, c.QU.TYPE_DEFAULT)
                    }
                }, {
                    key: "getItemAndCardTypeAtIndex",
                    value: function(e, t) {
                        return {
                            contentItem: e,
                            cardType: this.cardTypesMap.get(t) || this.cardTypesMap.get(g.Zm)
                        }
                    }
                }]), e
            }()
        },
        56476: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(15671),
                i = n(43144),
                o = n(82963),
                a = n(61120),
                c = n(60136),
                s = (n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703), n(40627)),
                l = n(34325),
                u = n(19227);

            function d(e, t, n) {
                return t = (0, a.Z)(t), (0, o.Z)(e, p() ? Reflect.construct(t, n || [], (0, a.Z)(e).constructor) : t.apply(e, n))
            }

            function p() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (e) {}
                return (p = function() {
                    return !!e
                })()
            }
            const f = function(e) {
                function t() {
                    var e;
                    return (0, r.Z)(this, t), (e = d(this, t)).policyName = "LowDensityPolicy", e
                }
                return (0, c.Z)(t, e), (0, i.Z)(t, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        this.cardTypesMap = new Map, this.cardTypesMap.set(u.Zm, s.QU.TYPE_REGULAR)
                    }
                }]), t
            }(l.Z)
        },
        73906: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(15671),
                i = n(43144),
                o = n(82963),
                a = n(61120),
                c = n(60136),
                s = (n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703), n(40627)),
                l = n(34325),
                u = n(19227);

            function d(e, t, n) {
                return t = (0, a.Z)(t), (0, o.Z)(e, p() ? Reflect.construct(t, n || [], (0, a.Z)(e).constructor) : t.apply(e, n))
            }

            function p() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (e) {}
                return (p = function() {
                    return !!e
                })()
            }
            const f = function(e) {
                function t(e) {
                    var n;
                    return (0, r.Z)(this, t), (n = d(this, t)).policyName = "MobilePolicy", n.contentPackage = e && e.contentPackage ? e.contentPackage : null, n.secondaryCardType = e && e.secondaryCardType ? s.QU[e.secondaryCardType] : s.QU.TYPE_DEFAULT, n
                }
                return (0, c.Z)(t, e), (0, i.Z)(t, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        var e = this.contentPackage ? s.QU.TYPE_DEFAULT : s.QU.TYPE_FEATURED_AUTHOR;
                        this.cardTypesMap = new Map, this.cardTypesMap.set(0, e), this.cardTypesMap.set(u.Zm, this.secondaryCardType)
                    }
                }]), t
            }(l.Z)
        },
        58986: (e, t, n) => {
            n.d(t, {
                ZP: () => D
            });
            var r = n(4942),
                i = (n(9867), n(7231), n(58109), n(95566), n(68438), n(83464), n(19496), n(54405)),
                o = n(14507),
                a = n.n(o),
                c = n(29439),
                s = n(35098),
                l = n(50439),
                u = n(53333),
                d = n(46905),
                p = n(42820),
                f = n(56552);

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

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = function() {
                    return (0, f.jsx)("div", {
                        className: "adCardWrapper",
                        children: (0, f.jsx)(l.Z, {
                            type: "load-more",
                            lazy: !0,
                            targeting: {
                                plc: "more"
                            }
                        })
                    })
                },
                b = function(e) {
                    var t = (0, p.useDispatch)();
                    return (0, f.jsx)(l.Z, g({
                        type: "native-ad",
                        callback: function(e) {
                            e && t((0, d.C)({
                                hasNativeAd: !1
                            }))
                        }
                    }, e))
                },
                h = (0, r.Z)((0, r.Z)({}, u.B, (function() {
                    return b
                })), u.T, (function() {
                    return m
                }));

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
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j = function(e) {
                var t = e.contentData,
                    n = e.contentLayout,
                    r = e.isList,
                    o = e.contentIndex,
                    l = e.path,
                    d = e.hideAuthorInfo,
                    p = e.cardClickHandler,
                    v = (0, s.useState)(!1),
                    m = (0, c.Z)(v, 2),
                    b = m[0],
                    y = m[1];
                if (b) return null;
                var j = function(e) {
                        var t = e.contentData,
                            n = e.contentLayout.ContentComponent,
                            r = void 0,
                            i = function(e) {
                                return e.hasOwnProperty("itemType") ? "itemType" : "type"
                            }(t);
                        if (t[i] && t[i] in h) {
                            var o = t[i];
                            r = (0, h[o])(g({}, e))
                        }
                        return r || n
                    }(e),
                    w = n.wrapperClasses,
                    x = n.contentClasses,
                    P = a()({
                        "full-width-grid-item": t.type === u.T
                    }, i.V, w, t.trackingClass),
                    C = (0, f.jsx)(j, O({}, O(O({}, t), {}, {
                        className: x,
                        setNullRender: y,
                        contentIndex: o,
                        path: l,
                        hideAuthorInfo: d,
                        cardClickHandler: p
                    }))),
                    S = isNaN(o) ? null : o + 1;
                return r ? (0, f.jsx)("li", {
                    "data-feature-position": S,
                    className: P,
                    children: C
                }) : (0, f.jsx)("div", {
                    "data-feature-position": S,
                    className: P,
                    children: C
                })
            };
            var w = n(8082),
                x = n(19042),
                P = n(41718);
            const C = function(e) {
                var t = (0, p.useSelector)((function(e) {
                    var t;
                    return null === (t = e.flp) || void 0 === t ? void 0 : t.authorinfo
                }));
                if (t) try {
                    return JSON.parse(t).hidden.includes(e)
                } catch (n) {
                    P.default.error("(useIsAuthorInfoHidden) Unable to retrieve authorinfo list from flp flag", n)
                }
                return !1
            };

            function S(e, t) {
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
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var T = function(e, t) {
                return e.type === u.B ? "key-".concat(e.targeting.plc, "-").concat(e.targeting.sectionIndex, "-").concat(t) : e.contentId ? "key-".concat(e.contentId, "-").concat(t) : "key-".concat(t)
            };
            const D = function(e) {
                var t = e.gridLayout,
                    n = e.gridData,
                    r = e.path,
                    o = e.featureInstance,
                    c = e.className,
                    l = e.cardClickHandler,
                    u = t.defaultContent,
                    d = t.positionalContent,
                    p = n.length,
                    v = C(r),
                    g = t.isHtmlList(p),
                    m = a()(t.gridClasses, i.e, x.Z.contentGrid, c),
                    b = n.map((function(e, t) {
                        var n = {
                            contentData: e,
                            contentLayout: d[t] ? d[t] : u,
                            isList: g,
                            path: r
                        };
                        return (0, s.createElement)(j, I(I({}, n), {}, {
                            hideAuthorInfo: v,
                            key: T(e, t),
                            contentIndex: t,
                            cardClickHandler: l
                        }))
                    })),
                    h = function() {
                        var t;
                        if (0 !== b.length) return null !== (t = e.layoutName) && void 0 !== t && t.startsWith("featured") || b.length > 4 ? w.yw : w.Ue
                    };
                return g ? (0, f.jsx)("ul", {
                    "data-feature-name": h(),
                    "data-feature-instance": o,
                    className: m,
                    children: b
                }) : (0, f.jsx)("div", {
                    "data-feature-name": h(),
                    "data-feature-instance": o,
                    className: m,
                    children: b
                })
            }
        },
        54405: (e, t, n) => {
            n.d(t, {
                V: () => o,
                e: () => i
            });
            var r = n(21070),
                i = (0, r.n)("oc", "l", "contentGrid"),
                o = (0, r.n)(i, "contentWrapper")
        },
        58356: (e, t, n) => {
            n.d(t, {
                BI: () => G,
                BC: () => $,
                BQ: () => q,
                SG: () => W,
                WL: () => J,
                n8: () => X,
                lV: () => Q,
                y1: () => Y
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(54405),
                o = n(21070),
                a = n(29439),
                c = (n(9867), n(7231), n(58949), n(56552));

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
            const l = function(e) {
                var t = e.style ? e.style : {},
                    n = e.text ? e.text : "",
                    i = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(Object(n), !0).forEach((function(t) {
                                (0, r.Z)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        width: "100%",
                        background: "blue",
                        color: "white",
                        minHeight: "70px",
                        padding: "15px 10px",
                        boxSizing: "border-box"
                    }, t);
                return (0, c.jsx)("div", {
                    className: e.className,
                    style: i,
                    children: n
                })
            };

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.wrapperClasses,
                        n = void 0 === t ? "" : t,
                        r = e.contentClasses,
                        i = void 0 === r ? "" : r,
                        o = e.flags,
                        a = void 0 === o ? [] : o,
                        c = e.ContentComponent,
                        s = void 0 === c ? l : c;
                    return Object.freeze({
                        wrapperClasses: n,
                        contentClasses: i,
                        ContentComponent: s,
                        flags: a,
                        with: f
                    })
                },
                f = function(e) {
                    var t = e.ContentComponent,
                        n = e.wrapperClasses,
                        r = e.contentClasses,
                        i = e.acceptsComponents,
                        o = e.flags,
                        c = Object.fromEntries(Object.entries({
                            ContentComponent: t,
                            wrapperClasses: n,
                            contentClasses: r,
                            acceptsComponents: i,
                            flags: o
                        }).filter((function(e) {
                            return void 0 !== (0, a.Z)(e, 2)[1]
                        })));
                    return p(d(d({}, this), c))
                };

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

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = p(),
                b = Object.freeze({
                    ul: "ul-li",
                    div: "div-div",
                    accessibility: "accessibility"
                }),
                h = {
                    gridClasses: "",
                    defaultContent: m,
                    positionalContent: Object.freeze([]),
                    htmlElements: b.accessibility
                },
                y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.gridClasses,
                        n = e.defaultContent,
                        r = e.positionalContent,
                        i = e.htmlElements,
                        o = Object.fromEntries(Object.entries({
                            gridClasses: t,
                            defaultContent: n,
                            htmlElements: i,
                            positionalContent: r
                        }).filter((function(e) {
                            return void 0 !== (0, a.Z)(e, 2)[1]
                        }))),
                        c = g(g({}, h), o);
                    return c.defaultContent = p(c.defaultContent), c.positionalContent = Object.freeze(c.positionalContent.map((function(e) {
                        return void 0 === e ? void 0 : p(e)
                    }))), Object.freeze(g(g({}, c), O))
                },
                O = {
                    isHtmlList: function(e) {
                        return this.htmlElements === b.accessibility ? e >= 3 && e <= 9 : this.htmlElements === b.ul
                    },
                    selectComponents: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        null !== e && void 0 !== e || (e = this.defaultContent.ContentComponent);
                        var n = this.defaultContent.with({
                                ContentComponent: e
                            }),
                            r = this.positionalContent.map((function(e, n) {
                                if (null === e) return null;
                                var r = t[n];
                                return e.with({
                                    ContentComponent: r
                                })
                            }));
                        return y(g(g({}, this), {}, {
                            defaultContent: n,
                            positionalContent: r
                        }))
                    },
                    with: function(e) {
                        return y(g(g({}, this), e))
                    }
                },
                j = p({
                    wrapperClasses: "",
                    contentClasses: ""
                }),
                w = j.with({
                    wrapperClasses: (0, o.n)(i.V, "fullWidth"),
                    contentClasses: (0, o.n)(i.V, "fullWidth", "content")
                }),
                x = p({
                    wrapperClasses: (0, o.n)(i.V, "verticalCol"),
                    contentClasses: (0, o.n)(i.V, "verticalCol", "content")
                }),
                P = n(14507),
                C = n.n(P),
                S = y({
                    gridClasses: (0, o.n)(i.e, "defaultGrid"),
                    defaultContent: j
                }),
                I = y({
                    gridClasses: C()((0, o.n)(i.e, "defaultGrid"), (0, o.n)(i.e, "maxChildren-7")),
                    defaultContent: j,
                    positionalContent: [w]
                }),
                T = y({
                    gridClasses: C()((0, o.n)(i.e, "defaultGrid")),
                    defaultContent: j,
                    positionalContent: [w]
                }),
                D = y({
                    gridClasses: C()((0, o.n)(i.e, "sideScroll"), (0, o.n)(i.e, "defaultGrid")),
                    defaultContent: j
                }),
                N = y({
                    gridClasses: C()((0, o.n)(i.e, "defaultGrid"), (0, o.n)(i.e, "featuredWithVertical")),
                    defaultContent: j,
                    positionalContent: [x]
                }),
                k = y({
                    gridClasses: C()((0, o.n)(i.e, "defaultGrid")),
                    defaultContent: j,
                    positionalContent: [w, j, j, j]
                }),
                A = n(75004),
                E = n(97549),
                _ = n(43760),
                L = n(45987),
                Z = n(84412),
                R = n(94612),
                H = ["component"];

            function M(e, t) {
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
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var U = function(e) {
                    var t = void 0 !== e.contentIndex ? e.contentIndex : e.cardIndex,
                        n = void 0 !== e.type ? e.type : e.itemType,
                        r = e.component,
                        i = B(B({}, e), {}, {
                            cardIndex: t,
                            type: n
                        }),
                        o = (0, Z.go)(i) && (0, Z.om)(i),
                        a = (i.component, B(B({}, (0, L.Z)(i, H)), {}, {
                            media: o
                        }));
                    return (0, c.jsx)(r, B({}, a))
                },
                z = function(e) {
                    return (0, c.jsx)(U, B(B({}, e), {}, {
                        component: R.Z
                    }))
                };
            var V = n(3565);

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var q = S.selectComponents(A.N),
                $ = S.selectComponents(E.Z),
                W = S.selectComponents(_.Z),
                Y = (I.selectComponents(A.N, [z]), T.selectComponents(A.N, [z])),
                G = D.selectComponents(A.N),
                Q = N.selectComponents(E.Z, [function(e) {
                    return (0, c.jsx)(U, B(B({}, e), {}, {
                        displayAuthor: !0,
                        component: R.Z
                    }))
                }]),
                K = function(e) {
                    return (0, c.jsx)(V.Z, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? F(Object(n), !0).forEach((function(t) {
                                (0, r.Z)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        displayAuthor: !0
                    }, e))
                },
                X = k.selectComponents(A.N, [z, K, K, K]),
                J = S.selectComponents(K)
        },
        21070: (e, t, n) => {
            n.d(t, {
                n: () => r
            });
            var r = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.join("-")
            }
        },
        15799: (e, t, n) => {
            n.d(t, {
                G: () => a
            });
            n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703);
            var r = n(58356),
                i = n(60957),
                o = new Map([
                    [i.K4, r.BQ],
                    [i.DU, r.BQ],
                    [i.Xj, r.BQ],
                    [i.ol, r.BC],
                    [i.rg, r.y1],
                    [i.cT, r.BI],
                    [i.Gi, r.BI],
                    [i.A6, r.lV],
                    [i.ll, r.n8],
                    [i.Ro, r.SG],
                    [i.dz, r.WL]
                ]),
                a = function(e) {
                    var t;
                    return null !== (t = o.get(e)) && void 0 !== t ? t : r.BQ
                }
        },
        33568: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(29439),
                i = (n(9867), n(7231), n(35098)),
                o = n(92972),
                a = n.n(o),
                c = n(5127),
                s = n(80361),
                l = n(14507),
                u = n.n(l),
                d = n(88101),
                p = n(61851),
                f = n(27953),
                v = n(56552),
                g = function(e, t) {
                    return (0, v.jsx)("ul", {
                        className: "contentListCards ".concat(e),
                        children: t.map((function(e) {
                            return (0, v.jsx)("li", {
                                children: e
                            })
                        }))
                    })
                },
                m = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    switch (e) {
                        case p.a.DISPLAY_FOUR:
                        case p.a.DISPLAY_FOUR_RIGHT_BORDER:
                            return g(e, t);
                        case p.a.TYPE_LIST:
                            return (0, v.jsx)("ul", {
                                className: "listDisplay contentListCards",
                                "data-cy": "topStories",
                                "aria-label": n,
                                children: t
                            });
                        case p.a.TYPE_LIST_ORDERED:
                            return (0, v.jsx)("ol", {
                                className: "listDisplay contentListCards",
                                "data-cy": "topStories",
                                "aria-label": n,
                                children: t
                            });
                        default:
                            return (0, v.jsx)("div", {
                                className: "contentListCards",
                                "data-cy": "topStories",
                                children: t
                            })
                    }
                };

            function b(e) {
                var t = e.items,
                    n = void 0 === t ? null : t,
                    o = e.baseSection,
                    a = void 0 === o ? "" : o,
                    l = e.subSection,
                    g = void 0 === l ? "" : l,
                    b = e.loadMore,
                    h = void 0 === b || b,
                    y = e.trackingSection,
                    O = void 0 === y ? "" : y,
                    j = e.contentListClasses,
                    w = e.displayType,
                    x = void 0 === w ? p.a.TYPE_DEFAULT : w,
                    P = e.cardClickHandler,
                    C = void 0 === P ? function() {} : P,
                    S = e.cardVariant,
                    I = e.listAriaLabel,
                    T = e.displayPolicy,
                    D = void 0 === T ? new s.Z : T,
                    N = e.loadMoreFetch,
                    k = e.disableTrendingCount,
                    A = void 0 !== k && k,
                    E = (0, f.Z)(),
                    _ = (0, i.useState)(h && n.length > 0),
                    L = (0, r.Z)(_, 2),
                    Z = L[0],
                    R = L[1];
                (0, i.useEffect)((function() {
                    E && R(h)
                }), [h]);
                var H = Z ? (0, v.jsx)(c.Z, {
                        fetchFunction: N
                    }) : null,
                    M = {
                        baseSection: a,
                        subSection: g,
                        trackingSection: O
                    },
                    B = D.format(n, M, C, x, S, A),
                    U = (0, d.C_)("sclt", O),
                    z = u()("contentList", "".concat(U), j),
                    V = m(x, B, I);
                return (0, v.jsxs)("div", {
                    className: z,
                    children: [V, H]
                })
            }
            b.propTypes = {
                items: a().array.isRequired,
                baseSection: a().string,
                subSection: a().string,
                displayPolicy: a().object,
                displayType: a().oneOf(Object.values(p.a)),
                loadMore: a().bool,
                trackingSection: a().string,
                contentListClasses: a().string,
                cardVariant: a().string
            }
        },
        5127: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(4942),
                i = n(29439),
                o = n(35098),
                a = n(14507),
                c = n.n(a),
                s = n(92972),
                l = n.n(s),
                u = n(47570),
                d = n(85161),
                p = n(22417),
                f = n(42820),
                v = n(56552),
                g = function(e) {
                    var t = e.fetchFunction,
                        n = void 0 === t ? function() {} : t,
                        a = (0, o.useState)(!1),
                        s = (0, i.Z)(a, 2),
                        l = s[0],
                        g = s[1],
                        m = (0, o.useState)(2),
                        b = (0, i.Z)(m, 2),
                        h = b[0],
                        y = b[1],
                        O = (0, o.useRef)(!0),
                        j = (0, f.useDispatch)();
                    (0, o.useEffect)((function() {
                        return O.current = !0,
                            function() {
                                O.current = !1
                            }
                    }), []), (0, o.useEffect)((function() {
                        l && j(n({
                            page: h
                        })).then((function() {
                            O.current && (y((function(e) {
                                return e + 1
                            })), (0, p.M)())
                        }))
                    }), [l]), (0, o.useEffect)((function() {
                        g(!1)
                    }), [h]);
                    var w = h - 1,
                        x = c()((0, r.Z)((0, r.Z)((0, r.Z)({}, "sclt-loadmore".concat(w), !0), "loadMore", !0), "loading", l)),
                        P = l ? "Loading..." : "Load More",
                        C = l ? (0, v.jsx)("div", {
                            className: "loader"
                        }) : null,
                        S = (0, v.jsx)(d.default, {
                            type: "chevron"
                        });
                    return (0, v.jsx)(u.Z, {
                        disabled: l,
                        onClick: function() {
                            return g(!0)
                        },
                        className: x,
                        label: P,
                        loader: C,
                        icon: S
                    })
                };
            g.prototypes = {
                fetchFunction: l().func
            };
            const m = g
        },
        61851: (e, t, n) => {
            n.d(t, {
                a: () => r
            });
            var r = {
                TYPE_LIST: "listItems",
                TYPE_LIST_ORDERED: "listItems orderedList",
                TYPE_DEFAULT: "default",
                DISPLAY_FOUR: "displayFour",
                DISPLAY_FOUR_RIGHT_BORDER: "displayFour displayFourRightBorder"
            }
        },
        73766: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            var r = n(4942),
                i = n(29439),
                o = (n(83464), n(95566), n(19496), n(58109), n(68438), n(35098)),
                a = n(42820),
                c = n(92972),
                s = n.n(c),
                l = n(79244),
                u = n.n(l),
                d = n(35517),
                p = n(41718),
                f = n(88101),
                v = n(97767),
                g = n(62251),
                m = n(27953),
                b = n(82019),
                h = n(56552);

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
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function j(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return w(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var x = function(e) {
                var t = (0, o.useState)({}),
                    n = (0, i.Z)(t, 2),
                    r = n[0],
                    c = n[1],
                    s = (0, o.useState)(e.height || null),
                    l = (0, i.Z)(s, 2),
                    y = l[0],
                    w = l[1],
                    x = (0, a.useSelector)((function(e) {
                        return e.app.baseSection
                    })),
                    P = (0, o.useRef)(null),
                    C = (0, o.useRef)(null),
                    S = (0, m.Z)(),
                    I = function() {
                        var t, n = {},
                            r = e.html.replace(/esi:[a-zA-Z0-9]*/g, "esi"),
                            o = (0, d.Z6)(r);
                        try {
                            t = u().parse("<span>".concat(o, "</span>"))
                        } catch (m) {
                            t = u().parse("<span></span>"), p.default.error("(CustomHtml) attributesWithNoSource", m)
                        }
                        var a = (0, d.nZ)(t[0], "iframe"),
                            c = (0, d.nZ)(t[0], "esi");
                        if (a) {
                            var s = a[0].attrs;
                            for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (n[l] = s[l]);
                            if (n.width = "100%", n.style && (n.style = (0, d.$6)(n.style)), n.src) {
                                var v = n.src;
                                g.A.forEach((function(e) {
                                    var t = (0, i.Z)(e, 2),
                                        n = t[0],
                                        r = t[1],
                                        o = new RegExp(n, "gi");
                                    v = v.replace(o, r)
                                })), n.src = (0, f.ch)(v)
                            }
                            n.class && delete n.class, "true" === n.allowfullscreen && (n.allow = "fullscreen", delete n.allowfullscreen)
                        } else c ? p.default.info("this embed has esi, here is the parsed obj: ", c) : n.width = "100%";
                        return n
                    },
                    T = function() {
                        var t;
                        if ("" === (null === (t = P.current) || void 0 === t ? void 0 : t.src)) {
                            var n, r = (0, d.Z6)(e.html),
                                i = null === (n = P.current) || void 0 === n || null === (n = n.contentWindow) || void 0 === n ? void 0 : n.document;
                            if (i) {
                                i.open();
                                var o = x && v.SA[x] ? "/a/styles/custom/".concat(x, "Custom.css") : null;
                                if (o) {
                                    var a = '<link type="text/css" href="'.concat(o, '" rel="stylesheet"/>');
                                    i.write(a)
                                }
                                "undefined" === r && (r = ""), i.write("<div>".concat(r, "</div>")), i.close()
                            }
                            window.clearInterval(C.current), C.current = window.setInterval((function(t) {
                                try {
                                    var n, o, a, c = j(i.documentElement.getElementsByTagName("a"));
                                    try {
                                        for (c.s(); !(a = c.n()).done;) {
                                            var s = a.value;
                                            s.target = t || s.href ? "_parent" : "_self"
                                        }
                                    } catch (v) {
                                        c.e(v)
                                    } finally {
                                        c.f()
                                    }
                                    i.body.style.overflow = "hidden", i.body.style.margin = "0px";
                                    var l = (null === (n = P.current) || void 0 === n || null === (n = n.contentWindow) || void 0 === n || null === (n = n.document) || void 0 === n || null === (n = n.body) || void 0 === n ? void 0 : n.scrollHeight) || null;
                                    if (l && l !== (null === (o = P.current) || void 0 === o ? void 0 : o.clientHeight)) {
                                        var u = l.toString();
                                        if (!e.height) {
                                            var d = r.match(/height="([A-Za-z0-9]*)"/);
                                            u = d ? d[1] : 0
                                        }
                                        var f = l || e.height || u.toString();
                                        w(f)
                                    }
                                } catch (g) {
                                    window.clearInterval(C.current), p.default.error("(CustomHtml) updateIframeNoSrcContent - Unable to get iframe height", g)
                                }
                            }), 1e3, e.targetParent)
                        }
                    };
                (0, o.useEffect)((function() {
                    return T(),
                        function() {
                            var t = {};
                            e.src ? (t.width = "100%", t.src = (0, f.ch)(e.src), e.height && (t.height = e.height)) : t = I(), c(t)
                        }(),
                        function() {
                            return window.clearInterval(C.current)
                        }
                }), []), (0, o.useEffect)((function() {
                    S && T()
                }), [e.html]);
                var D = r.headingtitle && (0, h.jsx)(b.OT, {
                    text: r.headingtitle,
                    link: r.headinglink ? r.headinglink : null
                });
                return e.loading && (r.loading = e.loading), (0, h.jsxs)(h.Fragment, {
                    children: [D, (0, h.jsx)("iframe", O({
                        title: "".concat(e.name ? e.name : "", " custom content"),
                        className: "customHtml",
                        ref: P,
                        height: y
                    }, r))]
                })
            };
            x.propTypes = {
                src: s().string,
                height: s().string,
                html: s().string,
                name: s().string
            };
            const P = x
        },
        39070: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(56552);
            const i = function(e) {
                var t = e.id,
                    n = e.text;
                return (0, r.jsx)("div", {
                    id: t,
                    className: "description",
                    children: n
                })
            }
        },
        44192: (e, t, n) => {
            n.r(t), n.d(t, {
                ErrorBoundaryHoc: () => i,
                default: () => o
            });
            var r = n(13759),
                i = r.Pf;
            const o = r.SV
        },
        82019: (e, t, n) => {
            n.d(t, {
                X6: () => f,
                CD: () => g,
                OT: () => m,
                aY: () => b
            });
            var r = n(83110),
                i = n(92972),
                o = n.n(i),
                a = n(14507),
                c = n.n(a),
                s = n(85161),
                l = n(26574),
                u = n(45871);
            const d = n.p + "assets/ozempic-sponsor.png";
            var p = n(56552),
                f = function(e) {
                    var t = e.level,
                        n = e.text,
                        r = e.link,
                        i = void 0 === r ? "" : r,
                        o = e.external,
                        a = void 0 !== o && o,
                        d = e.main,
                        f = void 0 === d ? null : d,
                        v = e.right,
                        g = void 0 === v ? null : v,
                        m = e.className,
                        b = e.levelClassName,
                        h = t,
                        y = c()("heading-element", "heading-element-" + (b || t));
                    return (0, p.jsxs)("div", {
                        className: c()("heading", m, u.Z.heading),
                        children: [(0, p.jsxs)("div", {
                            className: "heading-main",
                            children: [i ? (0, p.jsx)(l.default, {
                                url: i,
                                external: a,
                                className: "heading-link sclt-headingLink",
                                "data-cy": "heading-link",
                                children: (0, p.jsxs)(h, {
                                    className: y,
                                    children: [n, (0, p.jsx)(s.default, {
                                        type: "chevron",
                                        width: "15px",
                                        height: "15px",
                                        className: c()("horizontal", "headingIcon")
                                    })]
                                })
                            }) : n && n.trim() ? (0, p.jsx)(h, {
                                className: y,
                                "data-cy": "heading-element",
                                children: n
                            }) : null, f]
                        }), g && (0, p.jsx)("div", {
                            className: "heading-right",
                            children: g
                        })]
                    })
                },
                v = o().oneOf(["h1", "h2", "h3", "h4"]);
            f.propTypes = {
                level: v.isRequired,
                levelClassName: v,
                text: o().string,
                link: o().string,
                external: o().bool,
                main: o().element,
                right: o().element,
                className: o().string
            };
            var g = function(e) {
                var t = e.text,
                    n = e.description,
                    i = void 0 === n ? "" : n,
                    o = e.hidden,
                    a = void 0 !== o && o,
                    s = (0, r.useLocation)(),
                    l = "/sports/olympics/summer/basketball" === (null === s || void 0 === s ? void 0 : s.pathname) || "/sports/olympics/summer/basketball/schedule" === (null === s || void 0 === s ? void 0 : s.pathname),
                    u = c()("heading-pageHeading", !0 === a ? "a11y" : "", l ? "heading--olympicSponsorLayout" : "");
                return (0, p.jsx)(f, {
                    level: "h1",
                    text: t,
                    main: i ? (0, p.jsx)("p", {
                        className: "heading-description",
                        suppressHydrationWarning: !0,
                        children: i
                    }) : null,
                    right: l ? (0, p.jsx)(b, {
                        sponsoredImageUrl: d,
                        sponsoredImageAlt: "Ozempic",
                        sponsoredImageLink: "https://www.ozempic.ca/",
                        external: !0,
                        variant: "Presented by",
                        text: ""
                    }) : null,
                    className: u
                })
            };
            g.propTypes = {
                text: o().string.isRequired,
                description: o().string,
                hidden: o().bool
            };
            var m = function(e) {
                var t = e.text,
                    n = e.description,
                    r = void 0 === n ? "" : n,
                    i = e.link,
                    o = void 0 === i ? "" : i,
                    a = e.external,
                    c = void 0 !== a && a;
                return (0, p.jsx)(f, {
                    level: "h2",
                    text: t,
                    link: o,
                    external: c,
                    main: r ? (0, p.jsx)("p", {
                        className: "heading-description",
                        children: r
                    }) : null,
                    className: "heading-sectionHeading ".concat(u.Z.sectionHeading)
                })
            };
            m.propTypes = {
                text: o().string,
                description: o().string,
                link: o().string,
                external: o().bool
            };
            var b = function(e) {
                var t = e.link,
                    n = void 0 === t ? "" : t,
                    r = e.external,
                    i = void 0 !== r && r,
                    o = e.text,
                    a = e.sponsoredImageUrl,
                    s = e.sponsoredImageAlt,
                    u = void 0 === s ? "" : s,
                    d = e.sponsoredImageLink,
                    v = e.variant,
                    g = e.size,
                    m = e.headingLevel,
                    b = e.darkMode,
                    h = (0, p.jsx)("div", {
                        className: "heading-sectionHeading-sponsoredImageWrap",
                        children: (0, p.jsx)("img", {
                            alt: u,
                            src: a,
                            loading: "lazy",
                            className: "heading-sectionHeading-sponsoredImageWrap-image".concat(g ? "-" + g : "")
                        })
                    }),
                    y = d ? (0, p.jsx)(l.default, {
                        url: d,
                        external: i,
                        className: "heading-sectionHeading-sponsoredImageWrap-link",
                        children: h
                    }) : h,
                    O = b ? "heading-sectionHeading-sponsorText-".concat(b) : "heading-sectionHeading-sponsorText",
                    j = v && !d ? (0, p.jsxs)("span", {
                        className: O,
                        children: [(0, p.jsx)("span", {
                            children: "Presented by "
                        }), h]
                    }) : v && d ? (0, p.jsxs)("span", {
                        className: O,
                        children: [(0, p.jsx)("span", {
                            children: "Presented by "
                        }), y]
                    }) : y;
                return (0, p.jsx)(f, {
                    level: "h2",
                    text: o,
                    link: n,
                    external: i,
                    main: v ? null : y,
                    right: v ? j : null,
                    className: c()("heading-sectionHeading"),
                    levelClassName: m
                })
            };
            b.propTypes = {
                text: o().string.isRequired,
                sponsoredImageUrl: o().string.isRequired,
                sponsoredImageAlt: o().string,
                sponsoredImageLink: o().string,
                link: o().string,
                external: o().bool,
                variant: o().string,
                size: o().string,
                headingLevel: o().string,
                darkMode: o().string
            };
            o().string.isRequired, o().string, o().bool
        },
        8250: (e, t, n) => {
            n.d(t, {
                E: () => d
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(92972),
                o = n.n(i),
                a = n(14507),
                c = n.n(a),
                s = n(56552);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = function(e) {
                var t = e.alt,
                    n = void 0 === t ? "" : t,
                    r = e.aspectRatio,
                    i = void 0 === r ? null : r,
                    o = e.credit,
                    a = void 0 === o ? "" : o,
                    l = e.description,
                    d = void 0 === l ? "" : l,
                    p = e.mass,
                    f = void 0 === p ? "full" : p,
                    v = e.showcaption,
                    g = void 0 !== v && v,
                    m = e.sizes,
                    b = void 0 === m ? [] : m,
                    h = e.srcSet,
                    y = void 0 === h ? [] : h,
                    O = e.type,
                    j = void 0 === O ? "image" : O,
                    w = e.url,
                    x = void 0 === w ? "" : w,
                    P = e.isAboveFold,
                    C = void 0 !== P && P,
                    S = e.className,
                    I = e.loading,
                    T = c()("imageMedia", j, f || "" !== f ? f : "full", S);
                return (0, s.jsxs)("figure", {
                    className: T,
                    children: [function() {
                        var e = "",
                            t = null,
                            r = null,
                            o = {};
                        if (void 0 === x) return null;
                        e = x, null !== y && void 0 !== y && y.length && (t = y.join(",")), null !== b && void 0 !== b && b.length && (r = b.join(",")), "number" === typeof i && (o = {
                            aspectRatio: i
                        });
                        var a = null === I ? null : "lazy",
                            c = C ? {
                                fetchpriority: "high"
                            } : {};
                        return (0, s.jsx)("div", {
                            className: "placeholder",
                            children: (0, s.jsx)("img", u({
                                loading: a,
                                alt: n,
                                srcSet: t,
                                sizes: r,
                                src: e,
                                style: o,
                                "data-cy": "".concat(j, "-img")
                            }, c))
                        })
                    }(), function() {
                        if (!1 === g) return null;
                        var e = d.length ? d : null,
                            t = a.length ? "(".concat(a, ")") : null;
                        return null !== e || null !== t ? (0, s.jsxs)("figcaption", {
                            className: "image-caption",
                            children: [e, " ", t]
                        }) : null
                    }()]
                })
            };
            d.propTypes = {
                alt: o().string,
                credit: o().string,
                description: o().string,
                mass: o().string,
                showcaption: o().bool,
                sizes: o().arrayOf(o().string),
                srcSet: o().arrayOf(o().string),
                type: o().string,
                url: o().string,
                loading: o().string,
                aspectRatio: o().number,
                isAboveFold: o().bool,
                className: o().string
            }
        },
        2902: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(29439),
                o = n(45987),
                a = n(92972),
                c = n(8250),
                s = n(61203),
                l = n(91811),
                u = n(56552),
                d = ["url", "derivativeWidths", "sizesRatio", "loading", "sizes"];

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var f = function(e) {
                var t = e.url,
                    n = void 0 === t ? "" : t,
                    a = e.derivativeWidths,
                    f = void 0 === a ? [] : a,
                    v = e.sizesRatio,
                    g = e.loading,
                    m = e.sizes,
                    b = (0, o.Z)(e, d),
                    h = (0, s.E)(n),
                    y = (0, l.h)(h, f, v, b.useoriginalimage),
                    O = (0, i.Z)(y, 2),
                    j = O[0],
                    w = O[1];
                return (0, u.jsx)(c.E, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(n), !0).forEach((function(t) {
                            (0, r.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    url: h,
                    sizes: m || w,
                    srcSet: j,
                    loading: g,
                    type: b.type
                }, b))
            };
            f.propTypes = {
                url: a.string,
                derivativeWidths: (0, a.arrayOf)(a.number),
                sizesRatio: a.string,
                loading: a.string
            };
            const v = f
        },
        63474: (e, t, n) => {
            n.d(t, {
                _: () => v
            });
            var r = n(92972),
                i = n.n(r),
                o = n(14507),
                a = n.n(o),
                c = ["q"],
                s = ["live blog", "live chat", "coming up"];

            function l(e) {
                return e && "none" !== e
            }

            function u(e) {
                return c.indexOf(e) >= 0
            }
            var d = n(82699),
                p = n(5799),
                f = n(56552),
                v = function(e) {
                    var t, n = e.block,
                        r = void 0 !== n && n,
                        i = e.className,
                        o = e.flag,
                        c = void 0 === o ? "" : o,
                        v = e.highlighted,
                        g = void 0 !== v && v,
                        m = e.external,
                        b = void 0 !== m && m,
                        h = e.id,
                        y = function(e) {
                            return String(e).trim().toLowerCase()
                        }(c),
                        O = g || function(e) {
                            return s.indexOf(e) >= 0
                        }(y),
                        j = a()("labelText", {
                            external: b,
                            lower: u(y)
                        });
                    if (!l(y)) return null;
                    t = c;
                    var w = a()("label", i, {
                        highlighted: O,
                        flag: l(c) && !O,
                        block: r
                    });
                    return "live" === y ? (0, f.jsx)(d.Z, {
                        type: p.n.Live,
                        text: "LIVE",
                        className: "livebadge"
                    }) : (0, f.jsx)("div", {
                        id: h,
                        className: w,
                        children: (0, f.jsx)("span", {
                            className: j,
                            children: t
                        })
                    })
                };
            v.propTypes = {
                block: i().bool,
                className: i().string,
                external: i().bool,
                flag: i().string,
                highlighted: i().bool,
                id: i().string
            }
        },
        41915: (e, t, n) => {
            n.d(t, {
                Z: () => H,
                P: () => R
            });
            var r = n(92972),
                i = n.n(r),
                o = n(73457),
                a = n(93433),
                c = n(4942),
                s = n(29439),
                l = (n(9867), n(7231), n(58109), n(95566), n(68438), n(83464), n(19496), n(35098)),
                u = n(81346);
            const d = {
                layoutGridOuter: "layoutGridOuter-wXvA8",
                layoutGrid: "layoutGrid-flAG8",
                flexible: "flexible-hogwk",
                multiToOneColMobile: "multiToOneColMobile-r2JSO"
            };
            var p = n(39416),
                f = n.n(p),
                v = n(56552);
            const g = function(e) {
                var t = e.columns,
                    n = void 0 === t ? 5 : t,
                    r = e.isFlexible,
                    i = void 0 === r || r,
                    o = e.multiToOneColMobile,
                    a = e.children,
                    c = "string" === typeof n ? parseInt(n) : n,
                    s = isNaN(c) ? 1 : c,
                    l = !1 === i ? "" : d.flexible,
                    u = f().bind(d)({
                        layoutGrid: !0,
                        flexible: l,
                        multiToOneColMobile: o
                    });
                return (0, v.jsx)("div", {
                    className: d.layoutGridOuter,
                    children: (0, v.jsx)("div", {
                        className: u,
                        style: {
                            "--numColumns": s
                        },
                        "data-cy": "cwq-card-grid",
                        children: a
                    })
                })
            };
            var m = n(77482),
                b = n(39420),
                h = n(54729),
                y = n(50439);
            const O = function(e) {
                var t = e.type;
                return (0, v.jsx)("div", {
                    className: "show-more-ad",
                    children: (0, v.jsx)(y.Z, {
                        type: t,
                        lazy: !0,
                        targeting: {
                            plc: "more"
                        }
                    })
                })
            };
            var j = n(83110),
                w = n(3762);

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        (0, c.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var C = function(e) {
                var t = e.layout,
                    n = void 0 === t ? {} : t,
                    r = e.items,
                    i = void 0 === r ? [] : r,
                    o = e.featureAttributionData,
                    c = void 0 === o ? {} : o,
                    d = e.cardClickHandler,
                    p = void 0 === d ? function() {} : d,
                    f = e.indexToFocus,
                    y = void 0 === f ? null : f,
                    x = e.startAt,
                    C = void 0 === x ? 1 : x,
                    S = n.columns,
                    I = void 0 === S ? 5 : S,
                    T = n.isFlexible,
                    D = void 0 === T || T,
                    N = (0, l.useState)(!1),
                    k = (0, s.Z)(N, 2),
                    A = k[0],
                    E = k[1],
                    _ = (0, l.useState)([]),
                    L = (0, s.Z)(_, 2),
                    Z = L[0],
                    R = L[1],
                    H = (0, l.useState)(0),
                    M = (0, s.Z)(H, 2),
                    B = M[0],
                    U = M[1],
                    z = "open-modal" === (null === n || void 0 === n ? void 0 : n.videoPlayback),
                    V = (0, j.useLocation)().pathname,
                    F = (0, l.useCallback)((function() {
                        (0, w.Lo)(V)
                    }), [V]);
                if ((0, l.useEffect)((function() {
                        z && i.filter((function(e, t) {
                            return t < i.length
                        })).map((function(e, t) {
                            if ("video" === e.itemType) {
                                var n = P(P({}, e), {}, {
                                    featureAttributionPosition: C + t
                                });
                                R((function(e) {
                                    return [].concat((0, a.Z)(e), [n])
                                }))
                            }
                            return e
                        }))
                    }), [i]), n.columns && i.length) {
                    var q = function(e, t, n, r) {
                            var i = {
                                name: r > n ? "card-grid" : "swimlane",
                                position: C + e
                            };
                            return null !== t && void 0 !== t && t.instance && (i.instance = t.instance), i
                        },
                        $ = Object.values(b.v).includes(n.variant) ? m.Z : u.Z,
                        W = function(e) {
                            return function() {
                                var t = Z.findIndex((function(t) {
                                    return t.id === e.id
                                }));
                                U(t), E(!0)
                            }
                        },
                        Y = n.variant === b.v.VERTICAL_TO_HORIZONTAL || !1;
                    return (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)(g, {
                            columns: I,
                            isFlexible: D && !Y,
                            multiToOneColMobile: Y,
                            children: i.filter((function(e, t) {
                                return t < i.length
                            })).map((function(e, t) {
                                return !0 === e.isShowMoreAd ? (0, v.jsx)(O, {
                                    type: e.adType
                                }, "cqw-ad-".concat(t)) : (0, v.jsx)($, P(P({}, e), {}, {
                                    item: e,
                                    focus: t === y,
                                    featureAttribution: q(t, c, n.columns, i.length),
                                    onClick: Z.length > 0 && "video" === e.itemType ? W(e) : F,
                                    clickHandler: p,
                                    variant: e.variant || n.variant,
                                    columns: I
                                }), e.id + "-" + t)
                            }))
                        }), Z.length > 0 && (0, v.jsx)(h.Z, {
                            isOpen: A,
                            handleClose: function() {
                                E(!1)
                            },
                            items: [Z[B]],
                            playingVideoIndex: 0,
                            featureAttributionName: "card-grid",
                            aspectRatio: "16:9"
                        })]
                    })
                }
            };
            C.propTypes = {
                layout: i().shape({
                    columns: i().number,
                    rows: i().number,
                    isFlexible: i().bool
                }),
                items: i().arrayOf(i().object),
                indexToFocus: i().number,
                featureAttributionData: i().shape({
                    instance: i().string
                }),
                cardClickHandler: i().func
            };
            const S = C;
            var I = n(25580),
                T = n(35049);
            const D = "mixedGrid-vzPg4";
            const N = function(e) {
                var t = e.children;
                return (0, v.jsx)("div", {
                    className: D,
                    children: t
                })
            };
            var k = n(40742);

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

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach((function(t) {
                        (0, c.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _ = function(e) {
                var t = e.items,
                    n = void 0 === t ? [] : t,
                    r = e.featureAttributionData,
                    i = void 0 === r ? {} : r,
                    o = e.cardClickHandler,
                    c = void 0 === o ? function() {} : o,
                    u = e.indexToFocus,
                    d = void 0 === u ? null : u,
                    p = e.startAt,
                    f = void 0 === p ? 1 : p,
                    g = (0, l.useState)(!1),
                    y = (0, s.Z)(g, 2),
                    O = y[0],
                    j = y[1],
                    w = (0, l.useState)([]),
                    x = (0, s.Z)(w, 2),
                    P = x[0],
                    C = x[1],
                    S = (0, l.useState)(0),
                    I = (0, s.Z)(S, 2),
                    T = I[0],
                    D = I[1];
                if ((0, l.useEffect)((function() {
                        n.filter((function(e, t) {
                            return t < n.length
                        })).map((function(e, t) {
                            if ("video" === e.itemType) {
                                var n = E(E({}, e), {}, {
                                    featureAttributionPosition: f + t
                                });
                                C((function(e) {
                                    return [].concat((0, a.Z)(e), [n])
                                }))
                            }
                            return e
                        }))
                    }), [n]), n.length) {
                    var A = function(e) {
                            return function() {
                                var t = P.findIndex((function(t) {
                                    return t.id === e.id
                                }));
                                D(t), j(!0)
                            }
                        },
                        _ = function(e, t) {
                            var n = {
                                name: "card-grid",
                                position: e + 1
                            };
                            return null !== t && void 0 !== t && t.instance && (n.instance = t.instance), n
                        },
                        L = n.filter((function(e, t) {
                            return t < n.length
                        })).map((function(e, t) {
                            return (0, v.jsx)(m.Z, {
                                item: e,
                                focus: t === d,
                                featureAttribution: _(t, i),
                                clickHandler: c,
                                variant: b.v.VERTICAL_TO_HORIZONTAL,
                                vthBreakpoints: 0 === t ? k.k.MIXED_LAYOUT_PRIMARY_CARD : k.k.MIXED_LAYOUT_SECONDARY_CARD,
                                showDescription: 0 === t,
                                onClick: P.length > 0 && "video" === e.itemType ? A(e) : void 0
                            }, e.id + "-" + t)
                        }));
                    return (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)(N, {
                            children: L
                        }), P.length > 0 && (0, v.jsx)(h.Z, {
                            isOpen: O,
                            handleClose: function() {
                                j(!1)
                            },
                            items: [P[T]],
                            playingVideoIndex: 0,
                            featureAttributionName: "card-grid",
                            aspectRatio: "16:9"
                        })]
                    })
                }
            };
            _.propTypes = {
                items: i().arrayOf(i().object),
                indexToFocus: i().number,
                featureAttributionData: i().shape({
                    instance: i().string
                }),
                cardClickHandler: i().func
            };
            const L = _;
            var Z = function(e) {
                    var t = e.layout,
                        n = e.items,
                        r = e.featureAttributionData,
                        i = void 0 === r ? {} : r,
                        a = e.cardClickHandler,
                        c = void 0 === a ? function() {} : a,
                        s = e.indexToFocus,
                        l = void 0 === s ? null : s,
                        u = e.startAt,
                        d = void 0 === u ? 1 : u;
                    if (t && null !== n && void 0 !== n && n.length) switch (t.name) {
                        case o.vU:
                            return (0, v.jsx)(S, {
                                layout: t,
                                items: n,
                                featureAttributionData: i,
                                cardClickHandler: c,
                                indexToFocus: l,
                                startAt: d
                            });
                        case o.zg:
                            return (0, v.jsx)(I.Z, {
                                layout: t,
                                items: n,
                                featureAttributionData: i
                            });
                        case o.i1:
                            return (0, v.jsx)(T.Z, {
                                layout: t,
                                items: n,
                                featureAttributionData: i
                            });
                        case o.WA:
                            return (0, v.jsx)(L, {
                                items: n,
                                featureAttributionData: i,
                                startAt: d
                            });
                        default:
                            return null
                    }
                },
                R = function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "standard", n = [], r = 0; r < e; r++) n.push({
                        variant: t
                    });
                    return n
                };
            Z.propTypes = {
                layout: i().object,
                items: i().arrayOf(i().object),
                featureAttributionData: i().object,
                cardClickHandler: i().func,
                indexToFocus: i().number
            };
            const H = Z
        },
        73457: (e, t, n) => {
            n.d(t, {
                Jl: () => l,
                WA: () => c,
                i1: () => a,
                vU: () => i,
                xO: () => s,
                zg: () => o
            });
            var r = n(72663),
                i = "card-grid",
                o = "playlist",
                a = "carousel",
                c = "mixed_card_layout",
                s = {
                    name: i,
                    columns: 5,
                    rows: 1,
                    variant: r.v.STANDARD
                },
                l = {
                    name: i,
                    columns: 5,
                    variant: r.v.DISCOVERY
                }
        },
        35049: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(29439),
                o = n(92972),
                a = n.n(o),
                c = n(35098),
                s = 2,
                l = 3,
                u = 5,
                d = n(92269),
                p = n(42802),
                f = n(85161),
                v = (n(9867), n(7231), n(72663)),
                g = n(81346),
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

            function h(e) {
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
            const y = function(e) {
                var t = e.items,
                    n = void 0 === t ? [] : t,
                    r = e.featureAttributionData,
                    i = void 0 === r ? {} : r;
                if (!n.length) return null;
                var o = function(e, t) {
                    var n;
                    if (null !== t && void 0 !== t && t.instance) {
                        var r = null !== (n = t.offset) && void 0 !== n ? n : 0;
                        return {
                            instance: t.instance,
                            name: t.name ? t.name : "carousel",
                            position: e + r + 1
                        }
                    }
                };
                return (0, m.jsx)(m.Fragment, {
                    children: n.map((function(e, t) {
                        return (0, m.jsx)("li", {
                            className: "cardContainer",
                            "data-cy": "cardContainer",
                            children: (0, m.jsx)(g.Z, h(h({}, e), {}, {
                                variant: v.v.MINIMAL,
                                featureAttribution: o(t, i)
                            }))
                        }, "".concat(e.id, "-").concat(t))
                    }))
                })
            };

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

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const w = (0, c.forwardRef)((function(e, t) {
                var n = e.items,
                    r = void 0 === n ? [] : n,
                    i = e.featureAttributionData,
                    o = void 0 === i ? {} : i,
                    a = e.maxPages,
                    c = void 0 === a ? 1 : a,
                    s = e.pageSize,
                    l = void 0 === s ? u : s,
                    d = e.carouselTitle,
                    p = void 0 === d ? "" : d;
                if (!r.length) return null;
                for (var f = [], v = function(e) {
                        var n, i = e * l,
                            a = r.slice(i, i + l),
                            c = (n = e + 1, "".concat(p ? p.replace(/\s/g, "") : "", "-slider-").concat(n));
                        t && "function" !== typeof t && t.current && (t.current[e] || (t.current[e] = null)), f.push((0, m.jsx)("ul", {
                            id: c,
                            ref: function(n) {
                                t && "function" !== typeof t && t.current && (t.current[e] = n)
                            },
                            children: (0, m.jsx)(y, {
                                items: a,
                                featureAttributionData: j(j({}, o), {}, {
                                    offset: i
                                })
                            })
                        }, c))
                    }, g = 0; g < c; g++) v(g);
                return (0, m.jsx)(m.Fragment, {
                    children: f
                })
            }));
            const x = function() {
                for (var e = [], t = 0; t < 5; t++) e.push((0, m.jsx)("li", {
                    className: "cardContainer placeholder",
                    children: (0, m.jsx)(g.Z, {
                        variant: v.v.CAROUSEL
                    })
                }, "card-placeholder-".concat(t)));
                return (0, m.jsx)("ul", {
                    children: e
                })
            };

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var S = function(e) {
                var t = e.layout,
                    n = void 0 === t ? {} : t,
                    r = e.items,
                    o = void 0 === r ? [] : r,
                    a = e.featureAttributionData,
                    v = void 0 === a ? {} : a,
                    g = (0, c.useState)(1),
                    b = (0, i.Z)(g, 2),
                    h = b[0],
                    y = b[1],
                    O = (0, c.useRef)([]),
                    j = (0, c.useRef)(),
                    P = (0, c.useRef)(),
                    S = (0, d.Z)(j, "viewportLarge"),
                    I = u;
                switch (S) {
                    case "viewportSmall":
                        I = s;
                        break;
                    case "viewportMedium":
                        I = l;
                        break;
                    default:
                        I = u
                }
                var T = o.length,
                    D = 0 === T,
                    N = Math.ceil(T / I);
                D && (I = u, N = 1), (0, c.useEffect)((function() {
                    h > N && y(N)
                }), [S]), (0, c.useEffect)((function() {
                    var e, t;
                    y(1), null !== P && void 0 !== P && null !== (e = P.current) && void 0 !== e && e.scroll && (null === P || void 0 === P || null === (t = P.current) || void 0 === t || t.scroll({
                        left: 0,
                        behavior: "smooth"
                    }))
                }), [n.carouselTitle]);
                var k = (0, p.T)("carousel", n.carouselTitle),
                    A = function(e) {
                        var t = e - 1;
                        O.current[t] && O.current[t].scrollIntoView({
                            block: "nearest"
                        })
                    },
                    E = h > 1,
                    _ = h < N,
                    L = {
                        items: o,
                        featureAttributionData: v,
                        maxPages: N,
                        pageSize: I,
                        carouselTitle: n.carouselTitle
                    };
                return (0, m.jsxs)("div", {
                    className: "carouselWrapper",
                    role: "region",
                    "aria-labelledby": k,
                    ref: j,
                    "data-cy": "carouselWrapper",
                    children: [(0, m.jsxs)("div", {
                        className: "carouselTop",
                        children: [(0, m.jsxs)("h2", {
                            className: "header",
                            id: k,
                            children: [n.carouselTitle, (0, m.jsx)("span", {
                                className: "a11y",
                                children: "Carousel"
                            })]
                        }), (0, m.jsx)("div", {
                            className: "carouselNav",
                            "aria-hidden": "true",
                            "data-cy": "carouselNav",
                            children: (0, m.jsxs)("span", {
                                className: "carouselIndicator",
                                children: ["Page ", h, " of ", N]
                            })
                        })]
                    }), (0, m.jsxs)("div", {
                        className: "carousel sclt-carousel",
                        children: [(0, m.jsx)("button", {
                            className: "prev ".concat(E ? "show" : ""),
                            onClick: function() {
                                if (h > 1) {
                                    var e = h - 1;
                                    A(e), y(e)
                                }
                            },
                            "aria-label": "previous",
                            "data-cy": "previous",
                            children: (0, m.jsx)(f.default, {
                                type: "chevron"
                            })
                        }), (0, m.jsx)("div", {
                            className: "itemContainer",
                            children: (0, m.jsx)("div", {
                                ref: P,
                                className: "itemList",
                                "data-cy": "item-list",
                                children: D ? (0, m.jsx)(x, {}) : (0, m.jsx)(w, C(C({}, L), {}, {
                                    ref: O
                                }))
                            })
                        }), (0, m.jsx)("button", {
                            className: "next ".concat(_ ? "show" : ""),
                            onClick: function() {
                                if (h < N) {
                                    var e = h + 1;
                                    A(e), y(e)
                                }
                            },
                            "aria-label": "next",
                            "data-cy": "next",
                            children: (0, m.jsx)(f.default, {
                                type: "chevron"
                            })
                        }), _ && (0, m.jsx)("span", {
                            className: "a11y",
                            children: "End of carousel"
                        })]
                    })]
                })
            };
            S.propTypes = {
                items: a().arrayOf(a().object),
                layout: a().shape({
                    carouselTitle: a().string
                }),
                featureAttributionData: a().shape({
                    instance: a().string
                })
            };
            const I = S
        },
        25580: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(29439),
                i = n(35098),
                o = n(42820),
                a = n(46826),
                c = n(65999),
                s = n(13203),
                l = n(53374),
                u = n(4942),
                d = (n(9867), n(7231), n(58109), n(95566), n(68438), n(83464), n(19496), n(81346)),
                p = n(72663),
                f = n(56552);

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

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, u.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const m = function(e) {
                var t, n = e.items,
                    r = void 0 === n ? [] : n,
                    o = e.itemSelectionCallback,
                    a = void 0 === o ? function() {} : o,
                    c = e.selectedId,
                    s = void 0 === c ? null : c,
                    l = e.playlistTitle,
                    u = void 0 === l ? "" : l,
                    v = e.featureAttributionData,
                    m = void 0 === v ? {} : v;
                if ((0, i.useEffect)((function() {
                        if (r.length) {
                            var e = h(0, m);
                            a(r[0], !1, e)
                        }
                    }), [null === (t = r[0]) || void 0 === t ? void 0 : t.sourceId]), r.length) {
                    var b = function(e) {
                            return (null === s ? r[0].sourceId : s) === e
                        },
                        h = function(e, t) {
                            return null !== t && void 0 !== t && t.instance ? {
                                instance: t.instance,
                                name: "media-playlist-player",
                                position: e + 1
                            } : null
                        };
                    return (0, f.jsxs)("div", {
                        className: "playlist",
                        children: [(0, f.jsxs)("h3", {
                            children: ["" === u ? u : "".concat(u, " - "), (0, f.jsxs)("span", {
                                children: [r.length, " videos"]
                            })]
                        }), (0, f.jsx)("div", {
                            className: "playlist-inner",
                            children: (0, f.jsx)("ul", {
                                children: r.map((function(e, t) {
                                    var n = h(t, m);
                                    return (0, f.jsx)("li", {
                                        className: "playlist-item ".concat(b(e.sourceId) ? "active" : ""),
                                        children: (0, f.jsx)(d.Z, g(g({}, e), {}, {
                                            variant: p.v.HORIZONTAL,
                                            clickHandler: function(t) {
                                                return a(e, !0, n, t)
                                            },
                                            featureAttribution: n
                                        }))
                                    }, e.id + "-" + t)
                                }))
                            })
                        })]
                    })
                }
            };
            const b = function(e) {
                var t = e.layout,
                    n = void 0 === t ? {} : t,
                    u = e.items,
                    d = void 0 === u ? [] : u,
                    p = e.featureAttributionData,
                    v = void 0 === p ? {} : p,
                    g = (0, o.useDispatch)(),
                    b = (0, i.useState)({
                        currentItem: {
                            sourceId: "",
                            feature: null
                        },
                        autoPlay: !1
                    }),
                    h = (0, r.Z)(b, 2),
                    y = h[0],
                    O = h[1];
                if (d.length) {
                    return (0, f.jsxs)("div", {
                        className: "video-playlist",
                        children: [(0, f.jsx)(c.Z, {
                            config: {
                                routeUpdate: !1,
                                autoPlay: y.autoPlay,
                                useMediaAspectRatio: !1,
                                aspectRatio: "16:9"
                            },
                            mediaItem: y.currentItem,
                            featureAttribution: y.currentItem.feature,
                            disableRecommendations: !0,
                            isMediaItemPlayable: !1,
                            render: s.Z
                        }), (0, f.jsx)(l.Z.Provider, {
                            value: !1,
                            children: (0, f.jsx)(m, {
                                items: d,
                                itemSelectionCallback: function(e, t, n) {
                                    var r, i, o, c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                    if (null === c || void 0 === c || c.preventDefault(), void 0 !== e) {
                                        var s = {
                                            sourceId: null !== (r = e.sourceId) && void 0 !== r ? r : e.videoId,
                                            source: e.source,
                                            mediaId: e.videoId,
                                            title: e.title,
                                            image: e.image,
                                            showData: {
                                                name: e.show
                                            },
                                            type: e.itemType,
                                            publishedAt: null !== (i = null === (o = e.videoAirDate) || void 0 === o ? void 0 : o.toString()) && void 0 !== i ? i : "0",
                                            media: {
                                                duration: e.videoDuration,
                                                hasCaptions: e.videoHasCaptions,
                                                streamType: e.videoStreamType
                                            },
                                            feature: n
                                        };
                                        t && g((0, a.o)({
                                            mediaItem: s,
                                            sizeConfig: {
                                                useMediaAspectRatio: !1,
                                                aspectRatio: "16:9"
                                            }
                                        })), O({
                                            currentItem: s,
                                            autoPlay: t
                                        })
                                    }
                                },
                                selectedId: y.currentItem.sourceId,
                                playlistTitle: n.playlistTitle,
                                featureAttributionData: v
                            })
                        })]
                    })
                }
            }
        },
        26574: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => h
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(45987),
                o = n(35098),
                a = n(83110),
                c = n(92972),
                s = n.n(c),
                l = n(14507),
                u = n.n(l),
                d = n(88927),
                p = n(3762),
                f = n(56552),
                v = ["url", "external", "className", "children", "onClick", "hash"];

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

            function m(e) {
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
            var b = (0, o.forwardRef)((function(e, t) {
                var n = e.url,
                    r = void 0 === n ? "" : n,
                    c = e.external,
                    s = void 0 !== c && c,
                    l = e.className,
                    g = e.children,
                    b = e.onClick,
                    h = void 0 === b ? function() {} : b,
                    y = e.hash,
                    O = void 0 === y ? "" : y,
                    j = (0, i.Z)(e, v),
                    w = (0, a.useLocation)().pathname,
                    x = u()(l),
                    P = r.replace(/^https?:\/\/\S+\.cbc\.ca/g, ""),
                    C = (0, o.useCallback)((function(e) {
                        (0, p.Lo)(w), h(e)
                    }), [w]);
                return O ? (0, f.jsx)(d.fO, {
                    to: "".concat(P).concat(O),
                    ref: t,
                    onClick: C,
                    className: x,
                    children: g
                }) : s ? (0, f.jsx)("a", m(m({
                    ref: t,
                    href: r,
                    className: x,
                    onClick: h
                }, j), {}, {
                    children: g
                })) : (0, f.jsx)(a.Link, m(m({
                    ref: t,
                    onClick: C,
                    to: P,
                    className: x
                }, j), {}, {
                    children: g
                }))
            }));
            b.displayName = "LinkWrap", b._name = "LinkWrap", b.propTypes = {
                children: s().node,
                className: s().string,
                external: s().bool,
                url: s().string,
                hash: s().string
            };
            const h = b
        },
        47619: (e, t, n) => {
            n.d(t, {
                W: () => T,
                Z: () => N
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(35098),
                o = n(92972),
                a = n.n(o),
                c = n(33568),
                s = n(58986),
                l = n(82019),
                u = n(89920),
                d = n(56476),
                p = n(29274),
                f = n(10078),
                v = n(42820),
                g = n(34325),
                m = n(61851),
                b = n(97240),
                h = n(58356),
                y = n(19042),
                O = n(51591),
                j = n(94414),
                w = n(41915),
                x = n(73457),
                P = n(56552);

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var I = function(e) {
                    var t = e.fetchSection,
                        n = e.section,
                        r = void 0 === n ? p.uS : n,
                        o = e.videoLandingPath,
                        a = void 0 === o ? "" : o,
                        g = e.itemCount,
                        b = void 0 === g ? p.pj : g,
                        O = e.displayPolicy,
                        j = void 0 === O ? new d.Z : O,
                        w = e.cardClickHandler,
                        x = void 0 === w ? function() {} : w,
                        C = e.contentListClasses,
                        I = e.displayType,
                        T = void 0 === I ? m.a.TYPE_DEFAULT : I,
                        D = e.customTitleBar,
                        N = e.headline,
                        k = e.headlineLink,
                        A = e.customContentList,
                        E = e.externalLink,
                        _ = e.useGrid,
                        L = (0, v.useSelector)((function(e) {
                            return e.sectionalContent
                        })),
                        Z = (0, v.useDispatch)();
                    (0, i.useEffect)((function() {
                        t && a && Z((0, f.P4)(r, a, b))
                    }), [a, b]), (0, i.useEffect)((function() {
                        t && !a && Z((0, f.md)(r, b))
                    }), [r]);
                    var R = null,
                        H = null;
                    if (!t && A) H = A;
                    else {
                        var M = L;
                        M && (R = "" !== a ? M[a] : M[r]), H = R && R.sectionList ? R.sectionList : null
                    }
                    return H ? function(e) {
                        var t = null,
                            n = null,
                            i = null;
                        return e && (t = _ ? (0, P.jsx)(s.ZP, {
                            gridLayout: h.BQ,
                            gridData: e.slice(0, b),
                            cardClickHandler: x
                        }) : (0, P.jsx)(c.Z, S({}, S(S({}, function(e, t, n, r) {
                            return {
                                items: e,
                                displayPolicy: t,
                                loadMore: !1,
                                trackingSection: "contentlistmore".concat((0, u.hx)(r)),
                                cardClickHandler: n
                            }
                        }(e.slice(0, b), j, x, r)), {}, {
                            contentListClasses: C,
                            displayType: T
                        })))), D && Object.keys(D).length > 0 && (i = (0, P.jsx)("div", {
                            className: "moreStoriesSubHeadline",
                            children: D
                        })), N && "" !== N && (n = (0, P.jsx)(l.OT, {
                            text: N,
                            link: k,
                            external: E
                        })), (0, P.jsx)("div", {
                            className: "moreStories sclt-morenews ".concat(y.Z.moreStories),
                            children: (0, P.jsxs)("section", {
                                className: "moreStoriesList",
                                children: [n, i, t]
                            })
                        })
                    }(H) : null
                },
                T = function(e) {
                    var t = e.useSectionHeading,
                        n = (0, v.useSelector)(D),
                        r = (0, v.useSelector)((function(e) {
                            return e.app.path
                        })),
                        o = (0, v.useSelector)((function(e) {
                            var t;
                            return null === (t = e.sectionalContent[p.uS]) || void 0 === t ? void 0 : t.isLoaded
                        })),
                        a = (0, v.useDispatch)();
                    if ((0, i.useEffect)((function() {
                            a((0, f.md)(p.uS, p.pj))
                        }), []), !o) return (0, P.jsx)("div", {
                        className: "moreStories sclt-morenews",
                        children: (0, P.jsx)(j.Z, {
                            numLoadingCards: p.pj
                        })
                    });
                    if (0 === (null === n || void 0 === n ? void 0 : n.length)) return null;
                    var c = (0, O.h)(n, x.Jl, r),
                        s = "Discover More from CBC",
                        u = t ? (0, P.jsx)(l.OT, {
                            text: s
                        }) : (0, P.jsx)(b.Z, {
                            level: "h2",
                            children: s
                        });
                    return (0, P.jsxs)("div", {
                        className: "moreStories sclt-morenews",
                        children: [u, (0, P.jsx)(w.Z, {
                            layout: x.Jl,
                            items: c
                        })]
                    })
                },
                D = function(e) {
                    var t = e.sectionalContent[p.uS];
                    return t ? (t = t.sectionList, Array.isArray(t) ? t : []) : []
                };
            I.propTypes = {
                section: a().string,
                itemCount: a().number,
                headline: a().string,
                headlineLink: a().string,
                externalLink: a().bool,
                cardClickHandler: a().func,
                fetchSection: a().bool,
                customTitleBar: a().object,
                videoLandingPath: a().string,
                customContentList: a().array,
                displayPolicy: a().instanceOf(g.Z),
                contentListClasses: a().string,
                displayType: a().oneOf(Object.values(m.a))
            };
            const N = I
        },
        21494: (e, t, n) => {
            n.d(t, {
                bg: () => r
            });
            var r = {
                homepage: {
                    lineupSlug: "news",
                    attributes: ["id", "title", "url", "external", "flags", "flag"],
                    url: "/news",
                    moreCardTitle: "More from CBC News"
                }
            }
        },
        57633: (e, t, n) => {
            n.d(t, {
                Z: () => T
            });
            var r = n(71002),
                i = n(4942),
                o = n(29439),
                a = (n(30666), n(95566), n(6129), n(58109), n(68438), n(83464), n(19496), n(35098)),
                c = n(42820),
                s = n(41878),
                l = n(26574),
                u = n(75301),
                d = n(82019),
                p = n(15861),
                f = n(64687),
                v = n.n(f),
                g = n(14507),
                m = n.n(g),
                b = n(93849),
                h = n(99451),
                y = n(41718),
                O = n(56552);

            function j(e, t) {
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
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const x = function(e) {
                var t = e.button_text,
                    n = e.is_subscribed,
                    r = e.name,
                    i = e.newsletter,
                    c = e.subscribe_info,
                    s = e.subscribeAction,
                    l = e.success_message,
                    u = e.tried_subscribe,
                    d = (0, a.useRef)((new Date).getTime()),
                    f = (0, a.useRef)(i),
                    g = (0, a.useRef)(),
                    j = (0, h.useFeatureFlag)("newsletters.recaptcha"),
                    x = (0, a.useState)({
                        error: !1,
                        showLoading: !1,
                        showSuccess: n ? "show" : "hide",
                        disableForm: !1,
                        formClass: "formSubscribe nws_id_".concat(i),
                        honeypot: ""
                    }),
                    P = (0, o.Z)(x, 2),
                    C = P[0],
                    S = P[1],
                    I = function() {
                        var e = (0, p.Z)(v().mark((function e(t) {
                            var n, o;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), n = null, !j) {
                                            e.next = 10;
                                            break
                                        }
                                        if (!(window.grecaptcha || null !== (o = window.grecaptcha) && void 0 !== o && o.ready)) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 6, window.grecaptcha.execute((0, b.KF)("Client.newsletters.recaptchaPublicKey"), {
                                            action: "subscribe"
                                        });
                                    case 6:
                                        n = e.sent, e.next = 10;
                                        break;
                                    case 9:
                                        y.default.info("recaptcha not ready");
                                    case 10:
                                        S((function(e) {
                                            return w(w({}, e), {}, {
                                                error: !1,
                                                showLoading: "show",
                                                showSuccess: !1,
                                                disableForm: !0
                                            })
                                        })), s(i, r, t.target.elements.email.value, t.target.elements.current_time.value, t.target.elements.business_number.value, n, "subscribe");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, a.useEffect)((function() {
                    if (j && !window.grecaptcha) {
                        var e = document.createElement("script");
                        return e.src = "https://www.google.com/recaptcha/api.js?render=".concat((0, b.KF)("Client.newsletters.recaptchaPublicKey")), e.async = !0, document.head.appendChild(e),
                            function() {}
                    }
                }), []), (0, a.useEffect)((function() {
                    if (f.current !== i && !n) S((function(e) {
                        return w(w({}, e), {}, {
                            error: !1,
                            showLoading: !1,
                            showSuccess: "hide",
                            disableForm: !1,
                            formClass: "formSubscribe nws_id_".concat(i)
                        })
                    }));
                    else if (u) {
                        var e = c.errors,
                            t = c.message,
                            r = c.result;
                        !t && !r || C.showSuccess && "hide" !== C.showSuccess ? e && C.error !== e.error && S((function(t) {
                            return w(w({}, t), {}, {
                                error: e.error,
                                showLoading: !1,
                                showSuccess: !1,
                                disableForm: !1
                            })
                        })) : S((function(e) {
                            return w(w({}, e), {}, {
                                error: !1,
                                showLoading: !1,
                                showSuccess: "show"
                            })
                        }))
                    }
                }), [i, c, n]), (0, a.useEffect)((function() {
                    C.error && g.current.focus()
                }), [C.error]);
                var T = C.error ? "show" : "",
                    D = C.error ? "true" : "false",
                    N = d.current,
                    k = n ? "hide" : "show",
                    A = j ? (0, O.jsx)("div", {
                        id: "recaptcha-container-msg",
                        children: (0, O.jsxs)("p", {
                            id: "recaptcha-privacy-msg",
                            className: "supplemental",
                            children: ["This site is protected by reCAPTCHA and the Google", " ", (0, O.jsx)("a", {
                                href: "https://policies.google.com/privacy",
                                children: "Privacy Policy"
                            }), " ", "and Google", " ", (0, O.jsx)("a", {
                                href: "https://policies.google.com/terms",
                                children: "Terms of Service"
                            }), " ", "apply."]
                        })
                    }) : null;
                return (0, O.jsxs)("form", {
                    method: "post",
                    action: "",
                    className: C.formClass,
                    onSubmit: I,
                    children: [(0, O.jsxs)("div", {
                        className: k,
                        children: [(0, O.jsxs)("div", {
                            className: "input-wrapper",
                            children: [(0, O.jsx)("label", {
                                htmlFor: "emailInput",
                                className: "inputLabel",
                                children: "Email address:"
                            }), (0, O.jsxs)("div", {
                                className: "input-group",
                                children: [(0, O.jsx)("input", {
                                    id: "emailInput",
                                    "aria-describedby": "emailError",
                                    "aria-invalid": D,
                                    type: "email",
                                    name: "email",
                                    className: "textbox",
                                    required: !0,
                                    placeholder: "Enter your email address",
                                    ref: g,
                                    disabled: C.disableForm,
                                    defaultValue: ""
                                }), (0, O.jsx)("div", {
                                    "aria-label": "input error",
                                    className: "error-icon ".concat(T),
                                    children: (0, O.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        children: [(0, O.jsx)("path", {
                                            d: "M0 0h24v24H0z",
                                            fill: "none"
                                        }), (0, O.jsx)("path", {
                                            fill: "#E60606",
                                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                                        })]
                                    })
                                })]
                            }), (0, O.jsx)("div", {
                                className: "submit-error ".concat(T),
                                id: "emailError",
                                children: C.error
                            })]
                        }), (0, O.jsx)("div", {
                            className: "submit-wrapper",
                            children: (0, O.jsx)("button", {
                                "data-cy": "newsletters-subscribe-button",
                                type: "submit",
                                className: "submit",
                                disabled: C.disableForm,
                                children: t
                            })
                        }), (0, O.jsxs)("div", {
                            className: "screenReader",
                            children: [(0, O.jsx)("label", {
                                htmlFor: "current_time_".concat(i),
                                children: "Current Time"
                            }), (0, O.jsx)("input", {
                                type: "hidden",
                                id: "current_time_".concat(i),
                                name: "current_time",
                                value: N
                            }), (0, O.jsx)("label", {
                                htmlFor: "business_number_".concat(i),
                                children: "Ignore this field. If any data is entered for this field, you will not be subscribed to this newsletter."
                            }), (0, O.jsx)("input", {
                                type: "text",
                                id: "business_number_".concat(i),
                                name: "business_number",
                                size: "1",
                                tabIndex: "-1",
                                value: C.honeypot,
                                onChange: function(e) {
                                    S((function(t) {
                                        return w(w({}, t), {}, {
                                            honeypot: e.target.value
                                        })
                                    }))
                                }
                            })]
                        }), (0, O.jsx)("div", {
                            className: "loading ".concat(C.showLoading),
                            children: (0, O.jsxs)("div", {
                                children: [(0, O.jsx)("span", {
                                    children: "."
                                }), (0, O.jsx)("span", {
                                    children: "."
                                }), (0, O.jsx)("span", {
                                    children: "."
                                })]
                            })
                        })]
                    }), (0, O.jsx)("div", {
                        className: m()("newsletterSubmitSuccess", C.showSuccess),
                        children: (0, O.jsx)("p", {
                            children: l
                        })
                    }), A]
                })
            };
            var P = n(40260);

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function I() {
                return (0, O.jsx)("a", {
                    href: "https://subscriptions.cbc.ca/listmanagement?cmp=feed_generic_newsletter-subscribe",
                    rel: "noopener noreferrer",
                    className: "newsletterWidgetLink",
                    children: "Sign up now"
                })
            }
            const T = function(e) {
                var t, n = e.promotenewsletter,
                    i = (0, c.useSelector)((function(e) {
                        return e.newsletters.newsletters
                    })),
                    p = (0, c.useSelector)((function(e) {
                        return e.newsletters.subscribe
                    })),
                    f = (0, a.useRef)({
                        promotenewsletter: n,
                        name: s.fE.name
                    }),
                    v = (0, c.useDispatch)(),
                    g = function(e, t) {
                        var n, r, i = (null === e || void 0 === e || null === (n = e.message) || void 0 === n ? void 0 : n.success_message) || (null === t || void 0 === t ? void 0 : t.success_message),
                            o = "https://subscriptions.cbc.ca/listmanagement?cmp=feed_".concat(null === t || void 0 === t ? void 0 : t.slug, "_newsletter-subscribe"),
                            a = null !== e && void 0 !== e && null !== (r = e.message) && void 0 !== r && null !== (r = r.result) && void 0 !== r && r.confirmation ? "" : (0, O.jsxs)("span", {
                                children: [(0, O.jsx)("br", {}), "Discover all CBC newsletters in the\xa0", (0, O.jsxs)(l.default, {
                                    className: "newsletterSubscriptionLink",
                                    url: o,
                                    external: !0,
                                    target: "_blank",
                                    children: ["Subscription Centre.", (0, O.jsx)("img", {
                                        src: s.pJ,
                                        className: "opensNewWindow-icon",
                                        alt: "opens new window"
                                    })]
                                })]
                            });
                        return (0, O.jsxs)("span", {
                            className: "newsletterWidgetSuccess",
                            "aria-live": "polite",
                            children: [i, (0, O.jsx)("br", {}), a]
                        })
                    },
                    m = function() {
                        for (var e = 0; e < p.length; e++) {
                            var t, r;
                            if (p[e].error) {
                                if ((null === (t = p[e].error) || void 0 === t ? void 0 : t.newsletter_id) === n) return p[e]
                            } else if ((null === (r = p[e].message) || void 0 === r ? void 0 : r.newsletter_id) === n) return p[e]
                        }
                    },
                    b = (0, a.useState)(S({
                        newsletter_config: n
                    }, function() {
                        if (i && n) {
                            var e = n,
                                t = i.find((function(t) {
                                    return t.newsletter_id === e
                                })),
                                r = {};
                            p && void 0 !== p[0] && (r = m());
                            var o = r && r.message,
                                a = g(r, t),
                                c = (0, P.Q)(t),
                                l = "" !== (null === t || void 0 === t ? void 0 : t.button_text.trim()) ? null === t || void 0 === t ? void 0 : t.button_text : "Subscribe";
                            return {
                                newsletter: e,
                                logo: c,
                                slogan: s.fE.slogan,
                                desc: (null === t || void 0 === t ? void 0 : t.description_widget) || s.fE.desc,
                                name: (null === t || void 0 === t ? void 0 : t.name) || s.fE.name,
                                is_subscribed: o || !1,
                                tried_subscribe: !1,
                                success_message: a || s.fE.success_message,
                                button_text: l
                            }
                        }
                        return {
                            logo: s.fE.logo,
                            slogan: s.fE.slogan,
                            desc: s.fE.desc,
                            name: s.fE.name,
                            is_subscribed: !1,
                            tried_subscribe: !1,
                            success_message: s.fE.success_message
                        }
                    }())),
                    h = (0, o.Z)(b, 2),
                    y = h[0],
                    j = h[1];
                (0, a.useEffect)((function() {
                    var e = n;
                    "78" !== e && "81" !== e || (e = "true"), j((function(t) {
                        return S(S({}, t), {}, {
                            newsletter_config: e
                        })
                    }))
                }), []), (0, a.useEffect)((function() {
                    var e = n,
                        t = p && void 0 !== p[0],
                        o = e !== f.current.promotenewsletter,
                        a = {
                            promotenewsletter: n,
                            name: y.name
                        },
                        c = {},
                        s = !1;
                    if (t && (s = (c = m()) && "object" === (0, r.Z)(c)), y.newsletter_config && "true" !== y.newsletter_config && i) {
                        var l = i.find((function(t) {
                                return t.newsletter_id === e
                            })),
                            u = c && c.message;
                        if (l && f.current.name !== (null === l || void 0 === l ? void 0 : l.name) || o) {
                            var d = g(c, l),
                                v = (0, P.Q)(l),
                                b = "" !== (null === l || void 0 === l ? void 0 : l.button_text.trim()) ? null === l || void 0 === l ? void 0 : l.button_text : "Subscribe";
                            j((function(t) {
                                return S(S({}, t), {}, {
                                    newsletter_config: e,
                                    logo: v,
                                    slogan: "",
                                    desc: null === l || void 0 === l ? void 0 : l.description_widget,
                                    name: null === l || void 0 === l ? void 0 : l.name,
                                    is_subscribed: u,
                                    tried_subscribe: !1,
                                    success_message: d,
                                    button_text: b
                                })
                            })), a.name = null === l || void 0 === l ? void 0 : l.name
                        } else if (s && (!y.tried_subscribe || u !== y.is_subscribed)) {
                            var h = g(c, l);
                            j((function(e) {
                                return S(S({}, e), {}, {
                                    tried_subscribe: !0,
                                    subscribe_info: c,
                                    is_subscribed: u,
                                    success_message: h
                                })
                            }))
                        }
                    }
                    f.current = a
                }), [n, p, y.name, i]);
                var w = (0, O.jsx)(x, {
                        newsletter: y.newsletter_config,
                        desc: y.desc,
                        name: y.name,
                        subscribeAction: function() {
                            return v(u.Ti.apply(void 0, arguments))
                        },
                        subscribe: p,
                        success_message: y.success_message,
                        is_subscribed: y.is_subscribed,
                        tried_subscribe: y.tried_subscribe,
                        subscribe_info: y.subscribe_info,
                        button_text: y.button_text
                    }),
                    C = y.logo ? (0, O.jsx)("h2", {
                        className: "newsletterLogoHeading",
                        children: (0, O.jsx)("img", {
                            src: y.logo,
                            className: "newsletterWidgetLogo",
                            alt: y.name,
                            height: "auto",
                            width: "260",
                            loading: "lazy"
                        })
                    }) : (0, O.jsx)(d.X6, {
                        text: y.name,
                        level: "h2",
                        levelClassName: "h3",
                        className: "newsletterTitle"
                    }),
                    T = i && 6 === (null === (t = y.newsletter_config) || void 0 === t ? void 0 : t.length) ? w : (0, O.jsx)(I, {}),
                    D = y.is_subscribed ? "hide" : "";
                return (0, O.jsxs)("div", {
                    className: "newsletterWidget newsletterWidget-".concat(n),
                    children: [(0, O.jsxs)("div", {
                        className: "newsletterWidgetTextWrapper",
                        children: [C, (0, O.jsxs)("div", {
                            className: "newsletterWidgetSloganDesc",
                            children: [(0, O.jsx)("p", {
                                className: "newsletterWidgetSlogan ".concat(D),
                                children: y.slogan
                            }), (0, O.jsx)("p", {
                                className: "newsletterWidgetDesc ".concat(D),
                                children: y.desc
                            })]
                        })]
                    }), T]
                })
            }
        },
        41878: (e, t, n) => {
            n.d(t, {
                N$: () => i,
                fE: () => r,
                pJ: () => o
            });
            var r = {
                    logo: n(50714),
                    slogan: "Add some \u201cgood\u201d to your morning and evening.",
                    desc: "A variety of newsletters you'll love, delivered straight to you.",
                    name: "CBC Newsletters",
                    success_message: "Thank you for subscribing"
                },
                i = "https://subscriptions.cbc.ca/newsletter_static/images",
                o = n(94807)
        },
        40260: (e, t, n) => {
            n.d(t, {
                Q: () => o,
                r: () => a
            });
            n(83464), n(95566), n(19496);
            var r = n(90955),
                i = n(41878),
                o = function(e) {
                    var t, n;
                    return null !== e && void 0 !== e && e.logo_image ? null !== e && void 0 !== e && null !== (t = e.logo_image) && void 0 !== t && t.link ? e.logo_image.link : !(null === e || void 0 === e || null === (n = e.logo_image) || void 0 === n || !n.filename) && "".concat(i.N$, "/").concat(e.logo_image.filename) : i.fE.logo
                },
                a = function(e) {
                    if (null === e || void 0 === e || !e.length) return [];
                    var t = [],
                        n = function(e) {
                            var n;
                            (null === e || void 0 === e ? void 0 : e.type) === r._m && (null !== e && void 0 !== e && e.newsletter ? t.push(e.newsletter) : null !== e && void 0 !== e && null !== (n = e.pageWidget) && void 0 !== n && null !== (n = n.metadata) && void 0 !== n && n.newsletter && t.push(e.pageWidget.metadata.newsletter))
                        };
                    return e.forEach((function(e) {
                        var t, r, i = e.main,
                            o = e.right;
                        null === i || void 0 === i || null === (t = i.content) || void 0 === t || t.forEach(n), null === o || void 0 === o || null === (r = o.content) || void 0 === r || r.forEach(n)
                    })), t.filter(Boolean)
                }
        },
        65999: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(71002),
                o = n(29439),
                a = n(35098),
                c = n(42820),
                s = n(36030),
                l = n.n(s),
                u = n(92972),
                d = n.n(u),
                p = n(46826),
                f = n(75854),
                v = n(13203),
                g = n(39588),
                m = n(56552),
                b = (0, m.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "equalizer-icon",
                    viewBox: "0 0 14 17.5",
                    children: [(0, m.jsx)("circle", {
                        strokeWidth: "1px",
                        stroke: "#CBCBCB",
                        fill: "#FFFFFF",
                        cx: "50%",
                        cy: "50%",
                        r: "8"
                    }), (0, m.jsx)("rect", {
                        x: "2",
                        y: "6.13",
                        width: "1.7",
                        height: "5.24"
                    }), (0, m.jsx)("rect", {
                        x: "4",
                        y: "4",
                        width: "1.7",
                        height: "9.5"
                    }), (0, m.jsx)("rect", {
                        x: "6.1",
                        y: "2",
                        width: "1.7",
                        height: "13.5"
                    }), (0, m.jsx)("rect", {
                        x: "8.2",
                        y: "1.85",
                        width: "1.7",
                        height: "13.81"
                    }), " ", (0, m.jsx)("rect", {
                        x: "10.2",
                        y: "5.18",
                        width: "1.7",
                        height: "7.14"
                    })]
                });
            const h = function(e) {
                var t, n, r, i, o = e.isPlaceholderHidden,
                    a = e.mediaItem,
                    c = e.status,
                    s = e.currentPPMediaId,
                    l = e.onClick,
                    u = "playing" === c && a.sourceId === s;
                return (0, m.jsx)("div", {
                    className: "player-placeholder-audio-ui ".concat(o ? "hidden" : ""),
                    role: "button",
                    tabIndex: "0",
                    onKeyPress: l,
                    onClick: l,
                    title: a.title,
                    children: (0, m.jsxs)("div", {
                        className: "player-placeholder-ui",
                        children: [(0, m.jsx)("div", {
                            className: "play-button-container",
                            children: u ? b : (i = "Play", (0, m.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "play-btn",
                                viewBox: "0 0 60 60",
                                focusable: "false",
                                role: "img",
                                "aria-label": i,
                                children: [(0, m.jsx)("circle", {
                                    strokeWidth: "2px",
                                    stroke: "#CBCBCB",
                                    fill: "#FFFFFF",
                                    cx: "30",
                                    cy: "30",
                                    r: "28"
                                }), (0, m.jsx)("polygon", {
                                    fill: "#000000",
                                    points: "43 30 23 20 23 40"
                                })]
                            }))
                        }), (0, m.jsx)("div", {
                            className: "media-thumbnail",
                            children: (0, m.jsx)("img", {
                                src: null === (t = a.image) || void 0 === t ? void 0 : t.url,
                                alt: "",
                                loading: "lazy"
                            })
                        }), (0, m.jsxs)("div", {
                            className: "media-metadata",
                            children: [(0, m.jsx)("span", {
                                className: "media-showName",
                                children: null === (n = a.showData) || void 0 === n ? void 0 : n.name
                            }), (0, m.jsx)("span", {
                                className: "media-duration",
                                children: (0, g.Ud)(null === (r = a.media) || void 0 === r ? void 0 : r.duration)
                            }), (0, m.jsx)("span", {
                                className: "media-title",
                                children: a.title
                            })]
                        })]
                    })
                })
            };
            var y = n(64323),
                O = n(83110);

            function j(e, t) {
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
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = function(e) {
                var t, n, r = e.config,
                    s = e.mediaItem,
                    u = e.isMediaItemPlayable,
                    d = e.featureAttribution,
                    g = e.disableRecommendations,
                    b = e.render,
                    j = e.mediaDataOverrides,
                    x = e.noPlaceholderKeyboardNav,
                    P = (0, c.useSelector)((function(e) {
                        return e.persistentPlayer
                    })),
                    C = (0, a.useState)(!1),
                    S = (0, o.Z)(C, 2),
                    I = S[0],
                    T = S[1],
                    D = (0, a.useState)(""),
                    N = (0, o.Z)(D, 2),
                    k = N[0],
                    A = N[1],
                    E = (0, a.useRef)(f.IL),
                    _ = (0, O.useHistory)(),
                    L = (0, c.useDispatch)(),
                    Z = function(e) {
                        return L((0, p.o)(e))
                    };
                (0, a.useEffect)((function() {
                    var e, t = "player-".concat(l()());
                    A(t);
                    var n = null !== (e = null === r || void 0 === r ? void 0 : r.disablePersistence) && void 0 !== e && e;
                    return function() {
                        var e, r = null === _ || void 0 === _ || null === (e = _.location) || void 0 === e || null === (e = e.pathname) || void 0 === e ? void 0 : e.startsWith(y.Iz);
                        if (t === E.current) {
                            var i = !r && !n;
                            Z({
                                selector: f.IL,
                                isVisible: i
                            })
                        }
                    }
                }), []), (0, a.useEffect)((function() {
                    k && r.autoPlay && H()
                }), [k, s.sourceId, r.autoPlay]), (0, a.useEffect)((function() {
                    E.current = P.selector, k && T(k === E.current)
                }), [P.selector]);
                var R, H = function() {
                        var e, t, n, o, a, c, l, p, v, m, b = !1;
                        "video" === s.type && (b = null !== (v = null === r || void 0 === r ? void 0 : r.useMediaAspectRatio) && void 0 !== v && v);
                        null !== r && void 0 !== r && r.forcePersistence || T(!0), Z({
                            isVisible: !0,
                            status: (null === (e = P.mediaItem) || void 0 === e ? void 0 : e.sourceId) === s.sourceId ? P.status : "loading",
                            mediaItem: w(w({}, s), {}, {
                                isPlayable: !!u,
                                enableRecommendations: !g,
                                feature: (m = d, "object" === (0, i.Z)(m) ? w({}, m) : null)
                            }),
                            selector: null !== r && void 0 !== r && r.forcePersistence ? f.IL : k,
                            forcePersistence: null !== (t = null === r || void 0 === r ? void 0 : r.forcePersistence) && void 0 !== t && t,
                            routeUpdate: null !== (n = null === r || void 0 === r ? void 0 : r.routeUpdate) && void 0 !== n && n,
                            sizeConfig: {
                                useMediaAspectRatio: b,
                                aspectRatio: null !== (o = null === r || void 0 === r ? void 0 : r.aspectRatio) && void 0 !== o ? o : null,
                                maxHeight: null !== (a = null === r || void 0 === r ? void 0 : r.maxHeight) && void 0 !== a ? a : null
                            },
                            controlsConfig: {
                                hideFullscreenBtn: null !== (c = null === r || void 0 === r ? void 0 : r.hideFullscreenBtn) && void 0 !== c && c
                            },
                            mediaDataOverrides: {
                                thumbnail: null !== (l = null === j || void 0 === j ? void 0 : j.thumbnail) && void 0 !== l ? l : null,
                                shouldDisableAds: null !== (p = null === j || void 0 === j ? void 0 : j.shouldDisableAds) && void 0 !== p && p
                            }
                        })
                    },
                    M = {
                        isPlaceholderHidden: I,
                        mediaItem: s,
                        status: P.status,
                        currentPPMediaId: null !== (t = null === (n = P.mediaItem) || void 0 === n ? void 0 : n.sourceId) && void 0 !== t ? t : "",
                        onClick: function(e) {
                            e.preventDefault(), k && H()
                        },
                        imageOverride: {},
                        noPlaceholderKeyboardNav: x
                    };
                null !== j && void 0 !== j && j.thumbnail && (M.imageOverride = {
                    url: j.thumbnail,
                    aspectRatio: null !== (R = null === r || void 0 === r ? void 0 : r.aspectRatio) && void 0 !== R ? R : null
                });
                var B = b || ("video" === s.type ? v.Z : h);
                return (0, m.jsx)("div", {
                    className: "player-placeholder-ui-container ".concat(k, " ").concat("0x0" === r.aspectRatio && 0 === r.maxHeight ? "fill-container" : ""),
                    "data-cy": "player-placeholder-ui-container",
                    children: B(M)
                })
            };
            const P = x;
            x.propTypes = {
                config: d().shape({
                    autoPlay: d().bool,
                    forcePersistence: d().bool,
                    routeUpdate: d().bool,
                    useMediaAspectRatio: d().bool,
                    aspectRatio: d().string,
                    maxHeight: d().number,
                    hideFullscreenBtn: d().bool,
                    disablePersistence: d().bool
                }),
                mediaItem: d().shape({
                    sourceId: d().string,
                    type: d().string,
                    title: d().string,
                    publishedAt: d().oneOfType([d().number, d().string]),
                    image: d().shape({
                        url: d().string
                    }),
                    showData: d().shape({
                        name: d().string
                    }),
                    media: d().shape({
                        duration: d().number,
                        hasCaptions: d().bool,
                        streamType: d().string
                    })
                }),
                isMediaItemPlayable: d().bool,
                featureAttribution: d().shape({
                    name: d().string,
                    instance: d().string,
                    position: d().number
                }),
                mediaDataOverrides: d().shape({
                    thumbnail: d().string,
                    shouldDisableAds: d().bool
                }),
                disableRecommendations: d().bool,
                render: d().func,
                noPlaceholderKeyboardNav: d().bool
            }
        },
        13203: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(35098),
                o = n(53374),
                a = n(62770),
                c = n(39588),
                s = n(56552),
                l = (0, s.jsx)("svg", {
                    className: "captions",
                    "aria-label": "Close captions available",
                    height: "10",
                    width: "11.25",
                    viewBox: "0 0 11.25 10",
                    children: (0, s.jsx)("path", {
                        d: "m 10,0 c 0.6875,0 1.25,0.5625 1.25,1.25 v 7.5 C 11.25,9.4375 10.6875,10 10,10 H 1.25 C 0.55625,10 0,9.4375 0,8.75 V 1.25 C 0,0.5625 0.55625,0 1.25,0 Z M 5,4.375 V 3.75 C 5,3.40625 4.71875,3.125 4.375,3.125 H 2.5 c -0.34375,0 -0.625,0.28125 -0.625,0.625 v 2.5 c 0,0.34375 0.28125,0.625 0.625,0.625 H 4.375 C 4.71875,6.875 5,6.59375 5,6.25 V 5.625 H 4.0625 v 0.3125 h -1.25 v -1.875 h 1.25 V 4.375 Z m 4.375,0 V 3.75 C 9.375,3.40625 9.09375,3.125 8.75,3.125 H 6.875 C 6.53125,3.125 6.25,3.40625 6.25,3.75 v 2.5 c 0,0.34375 0.28125,0.625 0.625,0.625 H 8.75 c 0.34375,0 0.625,-0.28125 0.625,-0.625 V 5.625 H 8.4375 v 0.3125 h -1.25 v -1.875 h 1.25 V 4.375 Z"
                    })
                }),
                u = n(92972),
                d = function(e) {
                    var t = e.videoAirDate,
                        n = void 0 === t ? null : t,
                        r = e.videoDuration,
                        i = void 0 === r ? null : r,
                        o = e.captions,
                        u = void 0 !== o && o,
                        d = e.isLive,
                        p = void 0 !== d && d,
                        f = u ? l : null,
                        v = !p && i > 0;
                    return (0, s.jsx)("div", {
                        className: "videoTimeLabel",
                        children: p ? n < Date.now() ? (0, s.jsxs)("div", {
                            className: "liveLabel",
                            children: [(0, s.jsx)("span", {
                                children: "Live"
                            }), f]
                        }) : (0, s.jsxs)("div", {
                            className: "upcomingLabel",
                            children: [(0, s.jsxs)("div", {
                                className: "labelAndCaptions",
                                children: [(0, s.jsx)("span", {
                                    children: "Live in"
                                }), f]
                            }), (0, s.jsx)("div", {
                                className: "upcomingTime",
                                children: (0, s.jsx)(a.I, {
                                    airDate: n
                                })
                            })]
                        }) : function() {
                            if (!v) return null;
                            var e = (0, c.Ud)(i);
                            return (0, s.jsxs)("div", {
                                className: "durationLabel",
                                children: [(0, s.jsxs)("span", {
                                    children: [(0, s.jsx)("span", {
                                        className: "a11y",
                                        children: "Duration "
                                    }), e]
                                }), f]
                            })
                        }()
                    })
                };
            d.propTypes = {
                videoDuration: u.number,
                videoAirDate: u.number,
                captions: u.bool,
                isLive: u.bool
            };
            const p = d;
            var f = n(46484),
                v = ["(min-width: 915px) 60vw", "99vw"],
                g = n(75854);

            function m(e, t) {
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
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const h = function() {
                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = n.isPlaceholderHidden,
                    c = n.mediaItem,
                    l = n.onClick,
                    u = n.imageOverride,
                    d = n.noPlaceholderKeyboardNav,
                    m = c.image,
                    h = c.media,
                    y = c.publishedAt,
                    O = c.title,
                    j = (0, i.useContext)(o.Z) ? "eager" : "lazy";
                null !== u && void 0 !== u && u.url ? (e = {
                    src: u.url
                }, t = g.IY[u.aspectRatio]) : e = function(e) {
                    var t = {
                        src: "",
                        srcSet: null,
                        sizes: null
                    };
                    if (null !== e && void 0 !== e && e.url) {
                        var n = e.url.split("?");
                        n[0] = encodeURI(n[0]);
                        var r = n.join("?");
                        t.src = r, t.srcSet = e.srcset || [], t.sizes = e.srcset ? v : null
                    }
                    return t
                }(m);
                var w = parseInt(y),
                    x = (0, f.D2)(null === h || void 0 === h ? void 0 : h.streamType),
                    P = x && w < Date.now(),
                    C = null !== O && void 0 !== O ? O : "",
                    S = x ? 0 : null === h || void 0 === h ? void 0 : h.duration,
                    I = r ? " hidden" : "";
                return (0, s.jsxs)("div", b(b({
                    className: "player-placeholder-video-ui",
                    title: C,
                    style: {
                        "--aspect-ratio": t
                    }
                }, !d && {
                    role: "button",
                    tabIndex: 0,
                    onClick: l,
                    onKeyPress: l
                }), {}, {
                    children: [(0, s.jsx)("div", {
                        className: "player-placeholder"
                    }), (0, s.jsx)("div", {
                        className: "player-placeholder-ui".concat(I),
                        children: (0, s.jsxs)("div", {
                            className: "video-item video-card-overlay",
                            title: C,
                            children: [(0, s.jsx)("div", {
                                className: "thumbnail-wrapper",
                                children: (0, s.jsx)("img", {
                                    src: e.src,
                                    srcSet: e.srcSet,
                                    sizes: e.sizes,
                                    alt: "",
                                    className: "thumbnail",
                                    loading: j
                                })
                            }), (0, s.jsx)("div", {
                                className: "video-card-overlay-container",
                                children: (0, s.jsxs)("div", {
                                    className: "video-info-container",
                                    children: [(0, s.jsx)("p", {
                                        className: "video-item-title",
                                        children: C
                                    }), (0, s.jsxs)("div", {
                                        className: "video-time-container",
                                        children: [(0, s.jsx)("div", {
                                            className: "play-button-container",
                                            children: (0, s.jsxs)("svg", {
                                                className: "videoItemPlayBtn",
                                                role: "img",
                                                width: "34px",
                                                height: "34px",
                                                viewBox: "0 0 34 34",
                                                "aria-label": "Play",
                                                children: [(0, s.jsx)("circle", {
                                                    fill: "#FFFFFF",
                                                    cx: "16.5",
                                                    cy: "16.5",
                                                    r: "16.5"
                                                }), (0, s.jsx)("path", {
                                                    d: "M12.0627845,9.87071431 L24.510661,16.6074648 C24.6396791,16.677289 24.6876652,16.8384825 24.617841,16.9675006 C24.5925502,17.0142319 24.553825,17.0523041 24.5066704,17.0767967 L12.0587939,23.5423393 C11.9286072,23.6099595 11.768253,23.5592393 11.7006328,23.4290526 C11.6809874,23.3912301 11.6707317,23.3492356 11.6707317,23.3066154 L11.6707317,10.1043222 C11.6707317,9.95762156 11.7896561,9.8386972 11.9363567,9.8386972 C11.9805052,9.8386972 12.0239575,9.84970124 12.0627845,9.87071431 Z",
                                                    fill: "#000000"
                                                })]
                                            })
                                        }), (!x || P) && (0, s.jsx)(a.I, {
                                            classes: "video-time-stamp",
                                            airDate: w,
                                            includeSeconds: !0,
                                            ariaHidden: !1,
                                            isLive: x
                                        }), (0, s.jsx)(p, {
                                            videoDuration: S,
                                            videoAirDate: w,
                                            captions: null === h || void 0 === h ? void 0 : h.hasCaptions,
                                            isLive: x
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                }))
            }
        },
        75854: (e, t, n) => {
            n.d(t, {
                Ao: () => a,
                Hf: () => i,
                IL: () => r,
                IY: () => c,
                J9: () => d,
                JG: () => o,
                XW: () => s,
                m8: () => l,
                nx: () => u
            });
            var r = "persistent-player-inner-container",
                i = "persistent-player",
                o = "pp-phoenix-container",
                a = 4.85,
                c = new Proxy({
                    "16:9": 1.7778,
                    "9:16": .5625
                }, {
                    get: function(e, t) {
                        var n;
                        return "0x0" === t ? null : null !== (n = e[t]) && void 0 !== n ? n : 1.7778
                    }
                }),
                s = "phoenix-player",
                l = 800,
                u = {
                    TAB: "Tab",
                    ESCAPE: "Escape"
                },
                d = "platform-dai"
        },
        20825: (e, t, n) => {
            n.d(t, {
                V: () => r
            });
            var r = "4x3"
        },
        184: (e, t, n) => {
            n.d(t, {
                Dm: () => c,
                NT: () => s,
                Uv: () => i,
                dU: () => u,
                iV: () => l,
                iY: () => r,
                kD: () => a,
                zq: () => o
            });
            var r = 0,
                i = 1,
                o = 2,
                a = 3,
                c = 12e4,
                s = "There are no upcoming events scheduled.",
                l = "sport",
                u = function(e) {
                    return "Times in ".concat(e, " ")
                }
        },
        87199: (e, t, n) => {
            n.d(t, {
                C: () => p,
                b: () => f
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(90955),
                o = n(41910),
                a = n(34560),
                c = n(39588),
                s = n(74987),
                l = n(184);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = function(e) {
                    var t, n = null === e || void 0 === e || null === (t = e.sections) || void 0 === t || null === (t = t[0]) || void 0 === t || null === (t = t.main) || void 0 === t || null === (t = t.content) || void 0 === t || null === (t = t[0]) || void 0 === t ? void 0 : t.type;
                    if (n === i.Ne || n === i.ei) {
                        var r = (0, s.j)() ? (0, c.uY)() : a.EW,
                            o = (0, c.sL)(r),
                            u = (0, l.dU)(o);
                        if ((null === e || void 0 === e ? void 0 : e.timezoneText) !== u) return d(d({}, e), {}, {
                            timezoneText: u
                        })
                    }
                    return e
                },
                f = function(e, t) {
                    var n = p(t);
                    t !== n && e((0, o.ok)(n))
                }
        },
        28679: (e, t, n) => {
            n.d(t, {
                Z: () => d,
                g: () => u
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(35098),
                o = n(44192),
                a = n(56552);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.suspenseProps,
                        n = void 0 === t ? {} : t,
                        r = e.errorBoundaryProps,
                        c = void 0 === r ? {} : r,
                        l = e.children;
                    return (0, a.jsx)(o.default, s(s({}, c), {}, {
                        children: (0, a.jsx)(i.Suspense, s(s({}, n), {}, {
                            children: l
                        }))
                    }))
                },
                u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.suspenseProps,
                        r = void 0 === n ? {} : n,
                        i = t.errorBoundaryProps,
                        o = void 0 === i ? {} : i;
                    return function(t) {
                        return (0, a.jsx)(l, {
                            suspenseProps: r,
                            errorBoundaryProps: o,
                            children: (0, a.jsx)(e, s({}, t))
                        })
                    }
                };
            const d = l
        },
        73592: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(35098),
                i = n(92972),
                o = n.n(i),
                a = n(74042),
                c = n(94914),
                s = n(21120),
                l = n(71804),
                u = "MMMM d, yyyy",
                d = "MMMM d",
                p = n(56552),
                f = function(e) {
                    var t = e.updated,
                        n = e.publishedAtVerbal,
                        i = void 0 === n ? "" : n,
                        o = new Date(t),
                        f = (0, r.useMemo)((function() {
                            if (0 === t) return "";
                            var e, n = new Date;
                            return e = (0, a.Z)(n, o) < 12 ? (0, c.Z)(o, {
                                addSuffix: !0
                            }).replace("about ", "") : (0, s.Z)(n) === (0, s.Z)(o) ? (0, l.Z)(o, d) : (0, l.Z)(o, u), i && (e = "Posted: ".concat(i, " | Last Updated: ").concat(e)), e
                        }), [t, i]),
                        v = o.toISOString();
                    return f && (0, p.jsx)("time", {
                        className: "timeStamp",
                        dateTime: v,
                        suppressHydrationWarning: !0,
                        children: f
                    })
                };
            f.propTypes = {
                updated: o().number.isRequired,
                publishedAtVerbal: o().string
            };
            const v = f
        },
        97240: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(92972),
                i = n.n(r),
                o = n(14507),
                a = n.n(o),
                c = n(76247),
                s = n(56552),
                l = function(e) {
                    var t = e.level,
                        n = e.hidden,
                        r = void 0 !== n && n,
                        i = e.children,
                        o = a()(c.Z.title, !0 === r ? "a11y" : "");
                    return (0, s.jsx)(t, {
                        className: o,
                        children: i
                    })
                },
                u = i().oneOf(["h1", "h2", "h3", "h4"]);
            l.propTypes = {
                level: u.isRequired,
                hidden: i().bool,
                children: i().any
            };
            const d = l
        },
        94924: (e, t, n) => {
            n.d(t, {
                Cs: () => ie,
                VM: () => ne
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(35098),
                o = n(92972),
                a = n.n(o),
                c = n(14507),
                s = n.n(c),
                l = n(42820),
                u = n(64107),
                d = "horizontal",
                p = "vertical",
                f = ((0, u.FQ)(".trendingList .card", "g-wsL6boU3Hx"), n(26425)),
                v = n(97767),
                g = n(33568),
                m = n(94481),
                b = n(15671),
                h = n(43144),
                y = n(82963),
                O = n(61120),
                j = n(60136),
                w = (n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703), n(40627)),
                x = n(34325),
                P = n(19227);

            function C(e, t, n) {
                return t = (0, O.Z)(t), (0, y.Z)(e, S() ? Reflect.construct(t, n || [], (0, O.Z)(e).constructor) : t.apply(e, n))
            }

            function S() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (e) {}
                return (S = function() {
                    return !!e
                })()
            }
            const I = function(e) {
                function t() {
                    var e;
                    return (0, b.Z)(this, t), (e = C(this, t)).policyName = "DiscoveryPolicy", e
                }
                return (0, j.Z)(t, e), (0, h.Z)(t, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        this.cardTypesMap = new Map, this.cardTypesMap.set(P.Zm, w.QU.TYPE_DISCOVERY)
                    }
                }]), t
            }(x.Z);
            var T = n(54799),
                D = n(77008),
                N = n(56552);

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var E = function(e) {
                var t = e.items,
                    n = void 0 === t ? null : t,
                    r = e.section,
                    o = void 0 === r ? null : r,
                    a = e.fetchSection,
                    c = void 0 !== a && a,
                    u = e.title,
                    p = void 0 === u ? "" : u,
                    b = e.className,
                    h = void 0 === b ? "" : b,
                    y = e.layout,
                    O = void 0 === y ? d : y,
                    j = e.displayPolicy,
                    w = void 0 === j ? new I : j,
                    x = e.cardVariant,
                    P = e.displayType,
                    C = void 0 === P ? null : P,
                    S = e.listAriaLabel,
                    k = void 0 === S ? null : S,
                    E = e.cardClickHandler,
                    _ = void 0 === E ? null : E,
                    L = e.disableTrendingCount,
                    Z = void 0 !== L && L,
                    R = (0, l.useDispatch)(),
                    H = (0, l.useSelector)((function(e) {
                        return e.trending.sections
                    }));
                (0, i.useEffect)((function() {
                    c && v.SA[o] && R((0, f.m)(o))
                }), []);
                var M = n || H[o];
                if (!v.SA[o] || !M || M.length <= 0) return null;
                var B = {
                        name: "vertical-card-list",
                        instance: "trending"
                    },
                    U = !n && o ? H[o] : n,
                    z = (0, T.gr)(U);
                void 0 !== z && (z.feature = B);
                var V = {
                        items: z,
                        className: s()("trending", h),
                        displayType: C,
                        displayPolicy: w,
                        customTitleBar: null,
                        title: p,
                        loadMore: !1,
                        trackingSection: "contentlist-trending",
                        cardClickHandler: _,
                        baseSection: o,
                        cardVariant: x,
                        listAriaLabel: k,
                        featureAttribution: (0, D.Z)(A({}, B)),
                        disableTrendingCount: Z
                    },
                    F = s()("trending", h);
                return (0, N.jsx)("div", {
                    className: F,
                    children: (0, N.jsx)("div", {
                        className: s()("trendingList", h, O),
                        children: O === d ? (0, N.jsx)(g.Z, A({}, V)) : (0, N.jsx)(m.Z, A({}, V))
                    })
                })
            };
            E.propTypes = {
                items: a().array,
                section: a().string,
                fetchSection: a().bool,
                title: a().string,
                className: a().string,
                layout: a().string,
                displayPolicy: a().object,
                cardVariant: a().string
            };
            const _ = E;
            var L = n(29439),
                Z = (n(9867), n(7231), n(75562)),
                R = n(88101),
                H = n(41718);

            function M(e, t) {
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
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var U = function(e, t) {
                return function(e) {
                    var t = (0, Z.kt)(e);
                    return (0, Z.je)(e) && t ? Promise.resolve(t) : Promise.reject("Section ".concat(e, " not defined"))
                }(e).then((function(e) {
                    return (0, Z.If)(e, 5, t)
                })).then((function(t) {
                    return function(e, t) {
                        var n = Boolean(v.SA[t].showTrendingCount);
                        return e.filter((function(e) {
                            return e.hasOwnProperty("count")
                        })).sort((function(e, t) {
                            return t.count - e.count
                        })).map((function(e, r) {
                            var i = (0, R.wP)(e.href),
                                o = n ? e.count : 0;
                            return B(B({}, e), {}, {
                                rank: r + 1,
                                section: t,
                                href: i,
                                count: o
                            })
                        }))
                    }(t, e)
                }))
            };
            const z = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return function(r) {
                    var o = r.section,
                        a = void 0 === o ? n : o,
                        c = r.hideSectionLabel,
                        s = r.trendingHeaderOverride,
                        l = void 0 === s ? null : s,
                        u = r.cardClickHandler,
                        d = void 0 === u ? null : u,
                        p = r.className,
                        f = void 0 === p ? "" : p,
                        v = r.disableTrendingCount,
                        g = void 0 !== v && v,
                        m = (0, i.useRef)(null),
                        b = (0, i.useState)([]),
                        h = (0, L.Z)(b, 2),
                        y = h[0],
                        O = h[1];
                    return (0, i.useEffect)((function() {
                        return m.current = !1, U(a, t).then((function(e) {
                                return !m.current && O(e)
                            })).catch((function(e) {
                                H.default.error("(TrendingList) Failed to fetch", e), !m.current && O([])
                            })),
                            function() {
                                m.current = !0
                            }
                    }), [a]), y.length < 5 ? null : (0, N.jsx)(e, {
                        items: y,
                        section: a,
                        hideSectionLabel: c,
                        trendingHeaderOverride: l,
                        cardClickHandler: d,
                        className: f,
                        disableTrendingCount: g
                    })
                }
            };
            var V = n(44192),
                F = n(82019),
                q = n(61851),
                $ = n(74641);

            function W(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? W(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var G = "news",
                Q = function(e) {
                    var t, n, r = null === (t = v.SA[e]) || void 0 === t ? void 0 : t.displayLocalTrending,
                        i = null;
                    null !== e && void 0 !== e && e.includes(G) && !r && (i = null === (n = v.SA[G]) || void 0 === n ? void 0 : n.abtest);
                    return i
                },
                K = function(e) {
                    var t, n, r, i = e.agent,
                        o = e.isLanding,
                        a = null !== (t = (0, $.Z)(i, $.Z.FORMAT.asInt)) && void 0 !== t ? t : 0,
                        c = null === (n = v.SA[G]) || void 0 === n ? void 0 : n.variants[a],
                        s = null === (r = v.SA[G]) || void 0 === r || null === (r = r.variants[a]) || void 0 === r ? void 0 : r.usingCaMLTrending,
                        l = z(o ? ee : J, s, G);
                    return (0, N.jsx)(l, Y(Y({}, e), c))
                },
                X = function(e) {
                    var t = e.sectionLabel;
                    return (0, N.jsx)(F.X6, {
                        text: "Popular Now".concat(t || []),
                        level: "h2",
                        levelClassName: "h3"
                    })
                },
                J = function(e) {
                    var t = e.hideSectionLabel,
                        n = e.trendingHeaderOverride,
                        r = e.section,
                        i = !0 === t ? null : " in ".concat((0, R.fm)(r));
                    return (0, N.jsxs)(V.default, {
                        children: [(0, N.jsx)(X, {
                            sectionLabel: n || i
                        }), (0, N.jsx)(_, Y(Y({}, e), {}, {
                            layout: p,
                            displayType: q.a.TYPE_LIST_ORDERED
                        }))]
                    })
                },
                ee = function(e) {
                    return (0, N.jsxs)(V.default, {
                        children: [(0, N.jsx)(X, {}), (0, N.jsx)(_, Y(Y({}, e), {}, {
                            layout: p,
                            displayType: q.a.TYPE_LIST_ORDERED,
                            listAriaLabel: "Popular Now"
                        }))]
                    })
                },
                te = z(J, !1, "news"),
                ne = function(e) {
                    var t = (0, l.useSelector)((function(e) {
                            var t;
                            return null === e || void 0 === e || null === (t = e.app) || void 0 === t ? void 0 : t.section
                        })),
                        n = Q(t),
                        r = n ? (0, N.jsx)(K, Y(Y({}, e), {}, {
                            agent: n,
                            section: t,
                            isLanding: !1
                        })) : (0, N.jsx)(te, Y({}, e));
                    return (0, N.jsx)("div", {
                        className: "trendingList-sidebar",
                        children: r
                    })
                },
                re = z(ee, !1, "news"),
                ie = function(e) {
                    var t = (0, l.useSelector)((function(e) {
                            var t;
                            return null === e || void 0 === e || null === (t = e.app) || void 0 === t ? void 0 : t.section
                        })),
                        n = Q(t),
                        r = n ? (0, N.jsx)(K, Y(Y({}, e), {}, {
                            agent: n,
                            section: t,
                            isLanding: !0
                        })) : (0, N.jsx)(re, Y({}, e));
                    return (0, N.jsx)("div", {
                        className: "trendingList-sidebar trendingList-news",
                        children: r
                    })
                }
        },
        64107: (e, t, n) => {
            n.d(t, {
                D_: () => u,
                FQ: () => l,
                Tn: () => s
            });
            var r = n(41718),
                i = new Error("Failed to send goal"),
                o = new Error("Failed to send goal status not 200"),
                a = new Error("Failed in selecting item goal"),
                c = function(e) {
                    200 !== e.status && r.default.error("(responseHandler) UserSplitTest", o)
                },
                s = function(e) {
                    try {
                        window.CBC.APP.AB.Testing.sendGoal(e, 1, c) || r.default.error("(sendGoal) UserSplitTest", i)
                    } catch (t) {
                        r.default.error("(sendGoal) UserSplitTest", i)
                    }
                },
                l = function(e, t) {
                    return function(n) {
                        try {
                            n.target.closest(e) && s(t)
                        } catch (i) {
                            r.default.error("(FireCustomGoal) UserSplitTest", new Error("Failed in firing custom goal"))
                        }
                    }
                },
                u = function(e) {
                    return function(t) {
                        try {
                            t.target.closest(e) && s("api-selected-item")
                        } catch (n) {
                            r.default.error("(SelectedItemGoal) UserSplitTest", a)
                        }
                    }
                }
        },
        94481: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(92972),
                o = n.n(i),
                a = n(33568),
                c = n(61851),
                s = n(73906),
                l = n(34325),
                u = n(82019),
                d = n(56552);

            function p(e) {
                var t = e.title,
                    n = void 0 === t ? null : t,
                    r = e.url,
                    i = e.customTitleBar,
                    o = e.titleClasses;
                if (!i && !n && !r) return null;
                var a = null,
                    c = function(e) {
                        return "cbc in your community" === (null === e || void 0 === e ? void 0 : e.toLowerCase())
                    }(n),
                    s = c ? "titleBar-condensed" : "";
                return a = i || (0, d.jsx)(u.X6, {
                    text: n,
                    level: "h2",
                    levelClassName: "h3",
                    link: r,
                    className: o
                }), (0, d.jsx)("div", {
                    className: "titleBar " + s,
                    children: a
                })
            }
            p.propTypes = {
                title: o().string,
                url: o().string,
                customTitleBar: o().object,
                titleClasses: o().string
            };
            const f = p;
            var v = n(14507),
                g = n.n(v);

            function m(e, t) {
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
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function h(e) {
                var t = e.title,
                    n = void 0 === t ? "" : t,
                    r = e.id,
                    i = void 0 === r ? "" : r,
                    o = e.cardClickHandler,
                    l = void 0 === o ? function() {} : o,
                    u = e.displayType,
                    p = void 0 === u ? c.a.TYPE_LIST : u,
                    v = e.baseSection,
                    m = void 0 === v ? "" : v,
                    h = e.hideTitle,
                    y = e.featureAttribution,
                    O = void 0 === y ? null : y,
                    j = e.items,
                    w = e.displayPolicy,
                    x = e.cardVariant,
                    P = e.listAriaLabel,
                    C = e.featureInstance,
                    S = e.url,
                    I = e.customTitleBar,
                    T = e.className,
                    D = e.disableTrendingCount,
                    N = void 0 !== D && D,
                    k = null;
                if (j) {
                    var A = {
                        items: j,
                        baseSection: m,
                        loadMore: !1,
                        trackingSection: "verticallist".concat(i),
                        displayType: p || c.a.TYPE_LIST,
                        cardClickHandler: l,
                        cardVariant: x,
                        listAriaLabel: P,
                        displayPolicy: w || new s.Z({
                            secondaryCardType: "TYPE_TEXT"
                        }),
                        disableTrendingCount: N
                    };
                    k = (0, d.jsx)(a.Z, b({}, A))
                }
                var E = g()("verticalCardList", "cardList", T);
                return (0, d.jsxs)("div", b(b({
                    className: E,
                    "data-feature-instance": C
                }, O), {}, {
                    children: [(0, d.jsx)(f, {
                        customTitleBar: I,
                        title: n,
                        url: S,
                        titleClasses: h ? "a11y" : ""
                    }), k]
                }))
            }
            h.propTypes = {
                title: o().string,
                url: o().string,
                customTitleBar: o().object,
                items: o().array,
                displayType: o().oneOf(Object.values(c.a)),
                displayPolicy: o().instanceOf(l.Z),
                cardClickHandler: o().func,
                baseSection: o().string,
                hideTitle: o().bool,
                featureInstance: o().string,
                featureAttribution: o().object
            };
            const y = h
        },
        36546: (e, t, n) => {
            n.d(t, {
                I: () => r
            });
            var r = Object.freeze({
                "16x9": "16:9",
                "9x16": "9:16"
            })
        },
        54729: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            n(9867), n(7231);
            var r = n(42997),
                i = n(93757),
                o = n(70194),
                a = n(65999);
            const c = "verticalVideoWrapper-OF6pA",
                s = "horizontalVideoWrapper-E1Gr7",
                l = "thumbnail-z6oJ2";
            var u = n(21398),
                d = n(36546),
                p = n(56552),
                f = u.T7;
            const v = function(e) {
                var t = e.isOpen,
                    n = e.items,
                    u = void 0 === n ? [] : n,
                    v = e.playingVideoIndex,
                    g = e.onSlideChange,
                    m = e.handleClose,
                    b = e.onSwiper,
                    h = e.aspectRatio,
                    y = void 0 === h ? d.I["16x9"] : h,
                    O = e.featureAttributionName,
                    j = e.shouldDisableAds,
                    w = void 0 !== j && j,
                    x = {
                        onSlideChange: g,
                        initialSlide: v,
                        onSwiper: b
                    };
                return (0, p.jsx)(i.Z, {
                    type: o.Q.MODAL_WITH_SLIDER,
                    isOpen: t,
                    handleClose: m,
                    propsForModalType: x,
                    enableFocusTrap: !f(),
                    enableScrollLock: !1,
                    children: u.map((function(e, t) {
                        var n, i, o = t === v,
                            u = e,
                            f = {
                                autoPlay: o,
                                forcePersistence: !1,
                                routeUpdate: !1,
                                useMediaAspectRatio: !1,
                                disablePersistence: !0,
                                hideFullscreenBtn: !0,
                                aspectRatio: y
                            },
                            g = {
                                thumbnail: y === d.I["9x16"] ? (null === (n = u.image) || void 0 === n || null === (n = n.aspects) || void 0 === n || null === (n = n.ratio9x16) || void 0 === n ? void 0 : n.url) || "" : (null === (i = u.image) || void 0 === i || null === (i = i.aspects) || void 0 === i || null === (i = i.ratio16x9) || void 0 === i ? void 0 : i.url) || "",
                                shouldDisableAds: w
                            },
                            m = {
                                name: O,
                                position: (null === e || void 0 === e ? void 0 : e.featureAttributionPosition) || t + 1
                            },
                            b = "9:16" === y ? c : s;
                        return o ? (0, p.jsx)("div", {
                            className: b,
                            children: (0, p.jsx)(r.Z, {
                                children: (0, p.jsx)(a.Z, {
                                    config: f,
                                    mediaItem: u,
                                    mediaDataOverrides: g,
                                    disableRecommendations: !0,
                                    featureAttribution: m
                                })
                            })
                        }, "video-modal-".concat(t)) : (0, p.jsx)("div", {
                            className: b,
                            children: (0, p.jsx)("img", {
                                className: l,
                                src: g.thumbnail,
                                alt: ""
                            })
                        }, "video-modal-".concat(t))
                    }))
                })
            }
        },
        62770: (e, t, n) => {
            n.d(t, {
                I: () => s
            });
            var r = n(29439),
                i = n(35098),
                o = n(39588),
                a = n(56552),
                c = function(e) {
                    var t = e.airDate,
                        n = e.includeSeconds,
                        r = e.isLive,
                        i = e.formattedDate,
                        a = e.setFormattedDate,
                        c = (0, o.Jn)(t, n, r);
                    i !== c && a(c)
                },
                s = function(e) {
                    var t = e.airDate,
                        n = e.ariaHidden,
                        s = e.classes,
                        l = e.includeSeconds,
                        u = void 0 !== l && l,
                        d = e.isLive,
                        p = (0, i.useState)((0, o.Jn)(t, u, d)),
                        f = (0, r.Z)(p, 2),
                        v = f[0],
                        g = f[1];
                    return (0, i.useEffect)((function() {
                        var e = setInterval((function() {
                            c({
                                airDate: t,
                                includeSeconds: u,
                                isLive: d,
                                formattedDate: v,
                                setFormattedDate: g
                            })
                        }), 6e4);
                        return function() {
                            clearInterval(e)
                        }
                    }), []), (0, i.useEffect)((function() {
                        c({
                            airDate: t,
                            includeSeconds: u,
                            isLive: d,
                            formattedDate: v,
                            setFormattedDate: g
                        })
                    }), [t]), (0, a.jsx)("span", {
                        className: "formattedDate ".concat(s || ""),
                        "aria-hidden": !!n || void 0,
                        suppressHydrationWarning: !0,
                        children: v
                    })
                }
        },
        79939: (e, t, n) => {
            n.d(t, {
                LS: () => a,
                cY: () => o,
                rV: () => c
            });
            var r = n(41718),
                i = {
                    setItem: function() {
                        return Promise.reject("weeeeee")
                    },
                    getItem: function() {
                        return Promise.reject("woooooo")
                    }
                },
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (i = n(47020)).config({
                        driver: [i.INDEXEDDB, i.WEBSQL, i.LOCALSTORAGE],
                        name: "cbc_storage",
                        storeName: "cbc_storage",
                        version: 1,
                        description: "storage for cbc site"
                    }), i.getItem("region").then((function(t) {
                        t && (e.regions = {
                            selected: t
                        })
                    })).catch((function(e) {
                        r.default.error("(setup) localforage error", e)
                    }))
                },
                a = function(e, t) {
                    return i.setItem(e, t)
                },
                c = function(e) {
                    return i.getItem(e)
                }
        },
        62251: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var r = [
                ["&amp;", "&"],
                ["&lt;", "<"],
                ["&gt;", ">"],
                ["&quot;", '"'],
                ["&#39;", "'"]
            ]
        },
        90955: (e, t, n) => {
            n.d(t, {
                B: () => w,
                DR: () => d,
                IK: () => s,
                Ne: () => C,
                O: () => S,
                OO: () => l,
                Oo: () => x,
                Vs: () => o,
                W9: () => O,
                XS: () => a,
                _h: () => b,
                _m: () => c,
                ar: () => j,
                bJ: () => u,
                dd: () => p,
                ei: () => P,
                eo: () => y,
                gW: () => m,
                hd: () => h,
                iJ: () => i,
                ms: () => v,
                se: () => g,
                ze: () => f
            });
            var r = n(40627),
                i = "main",
                o = "right",
                a = "lineup",
                c = "newsletterelement",
                s = "html",
                l = "sponsoredwidget",
                u = "adelement",
                d = "mylocal",
                p = "shorts",
                f = "mustwatch",
                v = "clientsidewebcomponent",
                g = "contestpromoelement",
                m = "ctawidget",
                b = "recommendedvideo",
                h = "myolympics",
                y = "radiobar",
                O = "trending",
                j = "contentQueryWidget",
                w = "mlDrivenItems",
                x = "pageComponent",
                P = "schedule",
                C = "broadcastschedule",
                S = r.QU.TYPE_CONTENT_PACKAGE
        },
        55479: (e, t, n) => {
            n.d(t, {
                AP: () => s,
                Fe: () => u,
                MK: () => i,
                Qr: () => a,
                aR: () => c,
                bc: () => l,
                hk: () => o
            });
            var r = n(4942),
                i = "bb5bc7",
                o = "UPS_",
                a = "news",
                c = (0, r.Z)({}, a, "ottawa"),
                s = "personaliz-rT2hmC9K",
                l = "cbcradio-bBJUEZ8h",
                u = !0
        },
        64323: (e, t, n) => {
            n.d(t, {
                Iz: () => i,
                Pb: () => r,
                uq: () => o
            });
            var r = "https://www.cbc.ca/player/play/",
                i = "/player/play/",
                o = "https://www.cbc.ca/i/phoenix/player/syndicate/?autoPlay=true&sourceId="
        },
        53374: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(35098);
            const i = (0, r.createContext)(!1)
        },
        4964: (e, t, n) => {
            n.d(t, {
                o: () => r
            });
            var r = n(93849).KF("Client.contentApi.baseGraphqlURL")
        },
        48271: (e, t, n) => {
            n.d(t, {
                w3: () => y,
                f5: () => x,
                _l: () => j
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = n(82489),
                c = n(82010);

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return '\n    query {\n        contentItem(sourceId: "'.concat(e, '", contentStatus:"').concat(t, '") {\n            deck\n            byline\n            type\n            wordcount: wordCount\n            id\n            corrections {\n              correction\n              epochDate\n            }\n            clarifications {\n              clarification\n              epochDate\n            }\n            mediaid: mediaId\n            flag\n            publishedAt\n            updatedAt\n            url\n            externalLinks {\n              type\n              title\n              url\n            }\n            shareHeadline\n            highlights {\n              bullets\n              label\n            }\n            intlinks {\n              url\n              flag\n              shareHeadline\n              title\n              type\n            }\n            authorDisplay\n            authors {\n              name\n              title\n              biography\n              url\n              photo {\n                aspects {\n                  ratio1x1 {\n                    url\n                  }\n                }\n              }\n              links {\n                title\n                type\n                url\n              }\n            }\n            categories {\n              id\n              name\n              type\n              slug\n              path\n            }\n            body {\n              containsAudio\n              containsVideo\n              containsPhotogallery\n              parsed\n            }\n            sponsor {\n              external\n              name\n              image {\n                title\n                credit\n                description\n                aspects {\n                  ratioCustom {\n                    url\n                  }\n                }\n              }\n              label\n              link: url\n            }\n            image {\n              aspects {\n                ratio16x9 {\n                  url\n                }\n              }\n            }\n            leadMedia {\n              ...leadMedia\n            }\n            jsonLD\n            commentsEnabled\n            section {\n              path\n              attributionLevels\n              tracking {\n                contentArea\n                subSection1\n                subSection2\n                subSection3\n                subSection4\n              }\n              social {\n                commentsSection\n                facebookPages\n              }\n            }\n            advertising {\n              exclusions\n              categorization\n            }\n            tags {\n              name\n              type\n            }\n            concepts {\n              type\n              path\n            }\n            newsletter\n            language\n            title\n            description\n            editorialSource\n            segment {\n              media {\n                ...media\n              }\n              episode {\n                flag\n                url\n                title\n                episode {\n                  segments {\n                    ...segment\n                  }\n                }\n              }\n            }\n            episode {\n              media {\n                ...media\n              }\n              segments {\n                ...segment\n              }\n            }\n            photoGallery {\n              aspectRatio\n            }\n          }\n        }\n        ').concat(c.VB, "\n        ").concat(c.Br, "\n        ").concat(c.zi, "\n    ")
            }

            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return '\n    query {\n        contentItem(sourceId: "'.concat(e, '", contentStatus:"').concat(t, '") {\n            id\n            type\n            url\n            editorialSource\n            title\n            deck\n            shareHeadline\n            description\n            language\n            flag\n            publishedAt\n            updatedAt\n            mediaid: mediaId\n            imageLarge\n            leadMedia {\n              ...leadMedia\n            }\n            categories {\n              id\n              name\n              type\n              slug\n              path\n            }\n            section {\n              social {\n                facebookPages\n              }\n            }\n            tags {\n              name\n              type\n            }\n            concepts {\n              type\n              path\n            }\n            episode {\n              segments {\n                ...segment\n              }\n            }\n            components {\n              mainContent {\n                  id\n                  sourceId\n                  type\n                  url\n                  description\n                  sectionList\n                  imageLarge\n              }\n              mainVisual {\n                  ... on ContentItem {\n                      publishedAt\n                      mediaId\n                      sourceId\n                      media {\n                        duration\n                        hasCaptions\n                        streamType\n                      }\n                      title\n                      imageLarge\n                  }\n              }\n              primary\n              secondary\n            }\n          }\n        }\n        ').concat(c.VB, "\n        ").concat(c.zi, "\n    ")
            }
            var u = n(20825);

            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.V;
                return '\n    query {\n        contentItem(sourceId: "'.concat(e, '", contentStatus:"').concat(t, '") {\n            photoGallery {\n              images {\n                sourceId\n                localDescription\n                image {\n                  credit                  \n                  altText\n                  aspects {\n                    ratio').concat(n, " {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n    ")
            }
            var p = n(4964),
                f = n(46484),
                v = n(47452),
                g = n(50465),
                m = n(68075),
                b = function(e) {
                    var t = "";
                    if ("polopoly" === e) t = "preview";
                    else if ("nine" === e) {
                        var n = (0, m.getFeedCookie)("nine_gtoken");
                        t = "preview;aggToken=".concat(null === n || void 0 === n ? void 0 : n.value, ";cacheBust=").concat((new Date).getTime())
                    }
                    return t
                },
                h = function() {
                    var e = (0, r.Z)(o().mark((function e(t, n, r) {
                        var i, c, s, l, u, d = arguments;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, f.Ps)(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new g.p(v.k6, "Not Found");
                                case 2:
                                    for (i = n ? a.D7 : a.he, c = b(n), s = d.length, l = new Array(s > 3 ? s - 3 : 0), u = 3; u < s; u++) l[u - 3] = d[u];
                                    return e.next = 7, i(p.o, {
                                        query: r.apply(void 0, [t, c].concat(l))
                                    });
                                case 7:
                                    return e.abrupt("return", e.sent);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }();

            function y(e) {
                return O.apply(this, arguments)
            }

            function O() {
                return O = (0, r.Z)(o().mark((function e(t) {
                    var n, r = arguments;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r.length > 1 && void 0 !== r[1] ? r[1] : "", e.abrupt("return", h(t, n, s));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), O.apply(this, arguments)
            }

            function j(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return w = (0, r.Z)(o().mark((function e(t) {
                    var n, r, i = arguments;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = i.length > 1 && void 0 !== i[1] ? i[1] : "", r = i.length > 2 ? i[2] : void 0, e.abrupt("return", h(t, n, d, r));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), w.apply(this, arguments)
            }

            function x(e) {
                return P.apply(this, arguments)
            }

            function P() {
                return P = (0, r.Z)(o().mark((function e(t) {
                    var n, r = arguments;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r.length > 1 && void 0 !== r[1] ? r[1] : "", e.abrupt("return", h(t, n, l));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), P.apply(this, arguments)
            }
        },
        62615: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var r = '\nfragment cardNode on ContentItem {\n    id\n    url\n    title\n    sectionList\n    sectionLabels\n    relatedLinks {\n        url\n        title\n        sourceId\n    }\n    deck\n    description\n    flag\n    flags {\n        status\n        label\n    }\n    imageLarge\n    image {\n        _16x9_460: derivative(preferredWidth:460, aspectRatio:"16x9")  {\n            w\n            fileurl\n        }\n        _16x9_620: derivative(preferredWidth:620, aspectRatio:"16x9") {\n            w\n            fileurl\n        }\n        _16x9_940: derivative(preferredWidth:940, aspectRatio:"16x9") {\n            w\n            fileurl\n        }\n        square_220: derivative(preferredWidth:220, aspectRatio:"square") {\n            w\n            fileurl\n        }\n        aspects {\n            ratio16x9 {\n                url\n            }\n            ratio1x1 {\n                url\n            }\n            ratio9x16 {\n                url\n            }\n        }\n    }\n    source\n    sourceId\n    publishedAt\n    updatedAt\n    type\n    showName\n    authors {\n        name\n        photo {\n            aspects {\n                ratio1x1 {\n                    url\n                }\n            }\n        }\n    }\n    commentsEnabled\n    contextualHeadlines {\n        headline\n        contextualLineupSlug\n    }\n    contextualOverrides {\n        headline\n        flag\n        contextualLineupSlug\n    }\n    mediaId\n    media {\n        duration\n        hasCaptions\n        streamType\n    }\n    components {\n        mainContent {\n            url\n            sectionList\n            flag\n            sourceId\n            type\n        }\n        mainVisual {\n            ... on ContentItem {\n                publishedAt\n                mediaId\n                sourceId\n                media {\n                    duration\n                    hasCaptions\n                    streamType\n                }\n                title\n                imageLarge\n            }\n        }\n        primary\n        secondary    \n    }\n    categories {\n      name\n      slug\n      path\n    }\n}'
        },
        82010: (e, t, n) => {
            n.d(t, {
                Br: () => i,
                VB: () => r,
                z$: () => a,
                zi: () => o
            });
            var r = "\nfragment leadMedia on ItemLeadMedia {\n  __typename\n\n  ...on ContentItem {\n    sourceId\n    description\n    title\n    type\n    url\n    publishedAt\n    updatedAt\n    mediaId\n    media {\n        duration\n        hasCaptions\n        streamType\n    }\n    image {\n      aspects {\n        ratio16x9 {\n          url\n        }\n      }\n    }\n    showName\n    categories {\n      id\n      name\n      type\n      slug\n    }\n    photoGallery { \n      aspectRatio\n    }\n  }\n\n  ...on Image {\n    sourceId\n    url\n    title\n    description\n    altText\n    credit\n    useOriginalImage\n    aspects {\n      ratio16x9 {\n       url\n      }\n    }\n  }\n}",
                i = "\nfragment media on ContentItem {\n  sourceId\n  description\n  image {\n    aspects {\n      ratio16x9 {\n        url\n      }\n    }\n  }\n  media {\n    duration\n    hasCaptions\n    streamType\n  }\n  mediaId\n  publishedAt\n  updatedAt\n  showName\n  title\n  type\n}",
                o = "\nfragment segment on ContentItem {\n  sourceId\n\tflag\n\turl\n\ttitle\n}",
                a = "fragment trendingItem on ContentItem {\n  sourceId\n  title\n  flag\n  href: url\n  trending {\n      numViewers\n      numViewersSRS\n  }\n}"
        },
        82489: (e, t, n) => {
            n.d(t, {
                Ci: () => s,
                D7: () => u,
                Hl: () => c,
                he: () => l
            });
            var r = n(4942),
                i = (n(53145), n(95566), n(62153), n(9867), n(7231), n(58109), n(68438), n(83464), n(19496), n(43386));

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var a = function(e) {
                    return Array.isArray(e) ? e.some((function(e) {
                        return e.errors && e.errors.length
                    })) ? Promise.reject(e.map((function(e) {
                        return e.errors
                    }))) : e.map((function(e) {
                        return e.data
                    })) : e.errors ? Promise.reject(e.errors) : e.data
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return function(t, n) {
                        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            o = {
                                "Content-Type": "application/json"
                            };
                        return e && (o["X-Internal"] = 1), (0, i.requestJSON)(t, {
                            method: "POST",
                            headers: o,
                            body: JSON.stringify(n),
                            credentials: "omit"
                        }).then((function(e) {
                            return r ? a(e) : Promise.resolve(e)
                        }))
                    }
                },
                s = function(e, t) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        c = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? o(Object(n), !0).forEach((function(t) {
                                    (0, r.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            "Content-Type": "application/json"
                        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
                    return (0, i.requestJSON)(e, {
                        method: "POST",
                        headers: c,
                        body: JSON.stringify(t)
                    }).then((function(e) {
                        return n ? a(e) : Promise.resolve(e)
                    }))
                },
                l = c(),
                u = c(!0)
        },
        22474: (e, t, n) => {
            n.d(t, {
                H6: () => b,
                cB: () => j,
                TX: () => y
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = n(82489),
                c = n(62615),
                s = function(e) {
                    return "\n        fragment supplementaryBody on Page {\n            path\n            section {\n                defaultHeadlineImage {\n                    aspects {\n                        ratio16x9 {\n                            url\n                        }\n                    }\n                }\n            }\n            bannerImage {\n                aspects {\n                    ratio5x1 {\n                        url\n                    }\n                    ratioCustom {\n                        url\n                    }\n                }\n            }\n            ".concat(e ? "" : " sections{\n                right{\n                    content{\n                        ...PageNode\n                    }\n                }\n            }", "\n\n        }\n    ")
                },
                l = function(e) {
                    return "\n    fragment body on Page {\n        ".concat(e ? "" : "id", "\n        title\n        description\n        pageHeading: heading\n        headingVisible\n        path\n        navigation\n        section {\n            defaultHeadlineImage {\n                aspects {\n                    ratio16x9 {\n                        url\n                    }\n                }\n            }\n            tracking {\n                ...TrackingNode\n            }\n            attributionLevels\n        }\n        bannerImage {\n                aspects {\n                    ratio5x1 {\n                        url\n                    }\n                    ratioCustom {\n                        url\n                    }\n                }\n        }\n        sections{\n            main {\n                layout\n                content {\n                    ...PageNode\n                }\n            }\n            right {\n                content{\n                    ...PageNode\n                }\n            }\n        }\n        metadata {\n            description\n        }\n    }\n")
                },
                u = "\nfragment widgetNode on ContentItem{\n    sourceId\n    type\n    pageWidget  {\n        metadata\n        payload {\n            items {\n                ...cardNode\n            }\n        }\n    }\n}",
                d = "\nfragment PageNode on PageElement {\n    ... on PageLineup {\n        type\n        lineup {\n            pubQueueId\n            slug\n        }\n        wrapper {\n            sourceId\n            size\n            heading {\n              title\n              description\n              visible\n            }\n            link {\n              url\n              title\n              visible\n            }\n            loadMoreContent\n            loadMoreSize\n            startAt\n            attribution {\n                featureInstance\n            }\n            displayContentPackage\n        }\n        content{\n            ...cardNode\n        }\n    }\n\n    ... on ContentItem {\n        ...widgetNode\n    }\n}",
                p = "\nfragment TrackingNode on SectionTracking{\n    subSection1\n    subSection2\n    subSection3\n    subSection4\n    contentArea\n}\n";

            function f(e, t) {
                return "\n        query Page ($lineupSwap: JSONObject) {\n            page(".concat(e, ", lineupSwap: $lineupSwap, targets: [WEB,ALL]) {\n                ...body\n            }\n        }\n        ").concat(l(t), "\n        ").concat(c.Z, "\n        ").concat(u, "\n        ").concat(d, "\n        ").concat(p, "\n    ")
            }

            function v(e, t) {
                return "\n        query pageSupplementaryData {\n            page(".concat(e, ", targets: [WEB,ALL]) {\n                ...supplementaryBody\n            }\n        }\n        ").concat(s(t), "\n        ").concat(t ? "" : c.Z, "\n        ").concat(t ? "" : u, "\n        ").concat(t ? "" : d, "\n    ")
            }

            function g(e) {
                return "\n        query PageMetaData {\n            page(".concat(e, ", targets: [WEB,ALL]) {\n                title\n                description\n                path\n                section {\n                    tracking{\n                        ...TrackingNode\n                    }\n                    attributionLevels\n                }\n                metadata {\n                    description\n                }\n            }\n        }\n        ").concat(p, "\n    ")
            }
            var m = n(4964);

            function b(e, t, n) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = (0, r.Z)(o().mark((function e(t, n, r) {
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (!n) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 5, (0, a.D7)(m.o, {
                                    query: f(t, n)
                                });
                            case 5:
                            case 9:
                            case 12:
                                return e.abrupt("return", e.sent);
                            case 6:
                                if (!r) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 9, (0, a.he)(m.o, {
                                    query: f(t, n),
                                    variables: {
                                        lineupSwap: r
                                    }
                                });
                            case 10:
                                return e.next = 12, (0, a.he)(m.o, {
                                    query: f(t, n)
                                });
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function y(e, t) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = (0, r.Z)(o().mark((function e(t, n) {
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4, (0, a.he)(m.o, {
                                    query: v(t, n)
                                });
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function j(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = (0, r.Z)(o().mark((function e(t) {
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4, (0, a.he)(m.o, {
                                    query: g(t)
                                });
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        45532: (e, t, n) => {
            n.d(t, {
                FX: () => a,
                Q2: () => o,
                Sd: () => s,
                Vj: () => c,
                bX: () => i,
                cE: () => u,
                kG: () => l
            });
            n(9867), n(7231);
            var r = n(62615),
                i = function(e, t, n, i) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
                        c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "",
                        s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "",
                        l = c ? "subject:".concat(c) : "",
                        u = "";
                    return n && (u = 'categorySlug: "'.concat(n, '",')), {
                        query: "".concat(e, ': allContentItems(lineupSlug: "').concat(t, '",').concat(u, '\n            subjectsSet: "').concat(o, '",\n            pageSize: ').concat(i, ',\n            concepts: "').concat(l, '",\n            excludedCategorySet: "').concat(a, '",\n            tags: "').concat(s, '",\n            typeSet: CBC_OCELOT,\n            targets: [WEB,ALL]) {\n                nodes {\n                    ...cardNode\n                }\n            }'),
                        fragment: r.Z
                    }
                },
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        name: "cardNode",
                        value: r.Z
                    };
                    return "query allContentItemsWithFragment($lineupSlug: String, $pageSize: Int, $type: String, $mediaAspectRatios: [ContentItemAspectRatio!]) {\n        allContentItems(lineupSlug: $lineupSlug, pageSize: $pageSize, type: $type, targets: [WEB,ALL], mediaAspectRatios: $mediaAspectRatios) {\n            nodes {\n                ...".concat(e.name, "\n            }\n        }\n    }").concat(e.value, "\n")
                },
                a = "query singleLineup($lineupSlug: String, $categorySlug: String, $concepts: String, $subjectsSet: String, $tags: String, $pageSize: Int, $page: Int) {\n    allContentItems(lineupSlug: $lineupSlug, categorySlug: $categorySlug, concepts: $concepts, subjectsSet: $subjectsSet, tags: $tags, pageSize: $pageSize, page: $page, typeSet: CBC_OCELOT, targets: [WEB,ALL]) {\n        nodes {\n            ...cardNode\n        }\n    }\n} ".concat(r.Z),
                c = "query singleLineup($lineupSlug: String, $categorySlug: String, $concepts: String, $subjectsSet: String, $tags: String, $pageSize: Int, $page: Int) {\n    allContentItems(lineupSlug: $lineupSlug, categorySlug: $categorySlug, concepts: $concepts, subjectsSet: $subjectsSet, tags: $tags, pageSize: $pageSize, page: $page, typeSet: CBC_OCELOT_TOPICS_PAGE, targets: [WEB,ALL]) {\n        nodes {\n            ...cardNode\n        }\n    }\n} ".concat(r.Z),
                s = function(e, t) {
                    return "query {\n        ".concat(e.map((function(e) {
                        var n = e.lineupID,
                            r = e.lineupSlug,
                            o = e.categorySlug;
                        return i(n, r, o, t).query
                    })).join(""), "\n    } ").concat(r.Z)
                },
                l = function(e, t, n, r) {
                    return e || t || n ? i(e, "", t, r, "", arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "", n) : {}
                },
                u = function() {
                    return "query contentItemsByItemsQueryFilters($itemsQueryFilters: ItemsQueryFilters, $page: Int, $pageSize: Int, $minPubDate: String, $maxPubDate: String, $lineupOnly: Boolean, $offset: Int) {\n        allContentItems(itemsQueryFilters: $itemsQueryFilters, page: $page, pageSize: $pageSize, offset: $offset, minPubDate: $minPubDate, maxPubDate: $maxPubDate, lineupOnly: $lineupOnly, targets: [WEB,ALL]) {\n            nodes {\n                ...cardNode\n            }\n        }\n    } ".concat(r.Z)
                }
        },
        15426: (e, t, n) => {
            n.d(t, {
                V: () => l
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = n(82489);

            function c(e) {
                return '\n        query {\n            allKeyValues(keyLike: "'.concat(e, '") {\n                nodes {\n                    key\n                    value\n                }\n            }\n        }\n    ')
            }
            var s = n(4964);

            function l(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = (0, r.Z)(o().mark((function e(t) {
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, a.he)(s.o, {
                                    query: c(t)
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        91189: (e, t, n) => {
            n.d(t, {
                $: () => d,
                Q: () => l
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = n(82489),
                c = n(45532),
                s = n(4964);

            function l(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = (0, r.Z)(o().mark((function e(t) {
                    var n, r, i, l, u, d, p, f, v, g, m;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.lineupSlug, r = t.categorySlug, i = t.concepts, l = t.subjectsSet, u = t.tags, d = t.query, p = void 0 === d ? c.FX : d, f = t.page, v = void 0 === f ? 1 : f, g = t.pageSize, m = void 0 === g ? 10 : g, e.abrupt("return", (0, a.he)(s.o, {
                                    query: p,
                                    variables: {
                                        lineupSlug: n,
                                        categorySlug: r,
                                        concepts: i,
                                        subjectsSet: l,
                                        tags: u,
                                        page: v,
                                        pageSize: m
                                    }
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function d(e, t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = (0, r.Z)(o().mark((function e(t, n) {
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, a.he)(s.o, {
                                    query: (0, c.Sd)(t, n)
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        97409: (e, t, n) => {
            n.d(t, {
                Ux: () => h,
                h0: () => g,
                lj: () => m,
                TC: () => b,
                Cc: () => y
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(93849),
                o = n(82489),
                a = n(89162),
                c = n(21398),
                s = n(62615),
                l = n(82010),
                u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        r = parseInt(arguments.length > 2 ? arguments[2] : void 0),
                        i = (0, c.u$)();
                    return '\n        query {\n            personalizedItems(algorithmId: "'.concat(e, '",\n                              userId: "').concat(t, '", \n                              allowPersonalized: ').concat(i, ", \n                              first: ").concat(r, ',\n                              sourceId: "').concat(n, '") {\n                nodes {\n                    ...cardNode,\n                    ...trendingItem\n                }\n                algorithmId\n            }\n        }\n        ').concat(s.Z, "\n        ").concat(l.z$, "\n    ")
                },
                d = function(e, t, n, r) {
                    var i, o = parseInt(n),
                        u = t.algorithmType,
                        d = void 0 === u ? a.K5.SHORT_FORM_VIDEO : u,
                        p = t.userId,
                        f = void 0 === p ? "" : p,
                        v = (0, c.u$)();
                    switch (e) {
                        case a.OW.RECOMMENDED:
                            i = '{ recommendedType: "'.concat(d, '", userId: "').concat(f, '", allowPersonalized: ').concat(v, "}");
                            break;
                        case a.OW.TRENDING:
                            i = '{ trendingType: "'.concat(d, '" }'), null !== t && void 0 !== t && t.category && (i = '{ trendingType: "'.concat(d, '",  category: ["news/canada/nova scotia", "news/canada/new brunswick", "news/canada/pei"] }'))
                    }
                    var g = "";
                    switch (r) {
                        case "video":
                        case "story":
                            g = ', type: "'.concat(r, '"')
                    }
                    return "\n        query {\n            mlDrivenItems(pageSize: ".concat(o, ', algorithm: "').concat(e, '", args: ').concat(i).concat(g, ") {\n                type\n                items {\n                    ...cardNode,\n                    ...trendingItem\n                }\n            }\n        }\n        ").concat(s.Z, "\n        ").concat(l.z$, "\n    ")
                };

            function p(e, t) {
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
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var v = i.KF("Client.contentApi.baseGraphqlURL"),
                g = function(e, t, n, r) {
                    return (0, o.he)(v, {
                        query: d(e, t, n, r)
                    }, !1)
                },
                m = function(e, t, n, r) {
                    return (0, o.he)(v, {
                        query: u(e, t, n, r)
                    }, !1)
                },
                b = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.zb,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.K5.SHORT_FORM_VIDEO,
                        r = a.OW.TRENDING;
                    return g(r, {
                        algorithmType: n
                    }, e, t)
                },
                h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
                    return (0, o.he)(v, {
                        query: 'query mediaRelatedStories($sourceId: String, $pageSize: Int) {\n        relatedItems(sourceId: $sourceId, first: $pageSize, formats: ["story"]) {\n            nodes {\n                sourceId\n                title\n                url\n            }\n        }\n    }',
                        variables: {
                            sourceId: e,
                            pageSize: t
                        }
                    }, !1)
                },
                y = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.K5.SHORT_FORM_VIDEO,
                        n = 'query trendingVideoContentItems($pageSize: Int, $trendingType: String) {\n        mlDrivenItems(pageSize: $pageSize, args: { trendingType: $trendingType }, algorithm: "trending", type: "video") {\n            items {\n                ...cardNode\n            }\n        }\n    } '.concat(s.Z),
                        r = {
                            pageSize: e,
                            trendingType: t
                        };
                    return (0, o.he)(v, {
                        query: n,
                        variables: f({}, r)
                    }, !1)
                }
        },
        60444: (e, t, n) => {
            n.d(t, {
                Q: () => f,
                A: () => v
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(93849),
                o = n(82489),
                a = n(62615),
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return '\n        query {\n            relatedItems ( sourceId: "'.concat(e, '", ').concat(t ? 'algorithmId: "' + t + '",' : "", ' first: 5, formats: ["story"],) {\n                nodes {\n                    title\n                    type\n                    sourceId\n                    url\n                }\n            }\n        }\n    ')
                },
                s = n(50465),
                l = n(47452);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = i.KF("Client.contentApi.baseGraphqlURL"),
                f = function(e, t) {
                    return (0, o.he)(p, {
                        query: c(e, t)
                    }, !1)
                },
                v = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!e) return Promise.reject(new s.p(l.$h, "Bad clip id supplied"));
                    var r = function(e) {
                            return "query relatedVideoContentItems($sourceId: String!, $formats: [String], $first: Int".concat(e ? ", $algorithmId: String" : "", ") {\n        relatedItems(sourceId: $sourceId, formats: $formats, first: $first").concat(e ? ", algorithmId: $algorithmId" : "", ") {\n            nodes {\n                ...cardNode\n            }\n        }\n    }").concat(a.Z)
                        }(n),
                        i = {
                            algorithmId: n,
                            sourceId: e,
                            formats: ["video"],
                            first: t
                        };
                    return (0, o.he)(p, {
                        query: r,
                        variables: d({}, i)
                    }, !1)
                }
        },
        74641: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(29439),
                i = (n(30666), n(95566), n(6129), n(35098)),
                o = n(27953),
                a = n(71611),
                c = function(e, t) {
                    var n;
                    return null === t || void 0 === t || null === (n = t.data) || void 0 === n || null === (n = n.sels) || void 0 === n ? void 0 : n[e]
                },
                s = {
                    selection: c,
                    metadata: function(e, t) {
                        var n, r = c(e, t);
                        return null === t || void 0 === t || null === (n = t.data) || void 0 === n || null === (n = n.items) || void 0 === n ? void 0 : n.find((function(t) {
                            return t.a === e && t.c === r
                        })).md
                    },
                    asInt: function(e, t) {
                        var n, r = null !== (n = c(e, t)) && void 0 !== n ? n : "";
                        return Math.max(0, r.charCodeAt(0) - 65) + 1 || 0
                    }
                },
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.selection,
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        c = (0, i.useState)(null),
                        l = (0, r.Z)(c, 2),
                        u = l[0],
                        d = l[1],
                        p = (0, o.Z)();
                    return (0, i.useEffect)((function() {
                        e && p && null === u && n && (0, a.Fu)(a.bB, e, (function(n) {
                            p && d((0, a.Fu)(t, e, n))
                        }))
                    }), [e, p, n, t]), u
                };
            l.FORMAT = s;
            const u = l
        },
        71611: (e, t, n) => {
            n.d(t, {
                Fu: () => a,
                Mf: () => c,
                bB: () => o
            });
            var r = n(74987),
                i = n(41718),
                o = function(e, t) {
                    var n;
                    !((0, r.j)() && (null === (n = window) || void 0 === n || null === (n = n.CBC) || void 0 === n || null === (n = n.APP) || void 0 === n || null === (n = n.AB) || void 0 === n || null === (n = n.Testing) || void 0 === n ? void 0 : n.getDecision(e, !1, !1, t))) && t && t()
                },
                a = function(e) {
                    try {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return e.apply(void 0, n)
                    } catch (o) {
                        i.default.error("(tryIt) useABTest ".concat(o))
                    }
                    return null
                },
                c = function(e) {
                    return new Promise((function(t) {
                        a(o, e, (function(n) {
                            var r;
                            return t((null === n || void 0 === n || null === (r = n.data) || void 0 === r || null === (r = r.sels) || void 0 === r ? void 0 : r[e]) || null)
                        }))
                    }))
                }
        },
        73620: (e, t, n) => {
            n.d(t, {
                Ai: () => c,
                An: () => r,
                WV: () => a,
                b8: () => o,
                qr: () => i
            });
            var r = "httpImage/",
                i = "httpImage/image",
                o = "_gen/derivatives/",
                a = "SIZE",
                c = [300, 460, 620, 780, 1180]
        },
        91811: (e, t, n) => {
            n.d(t, {
                h: () => o
            });
            n(9867), n(7231);
            var r = n(35098),
                i = n(73620);
            const o = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Ai,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "16x9",
                    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return (0, r.useMemo)((function() {
                    var r = [],
                        a = [];
                    if (!e || /\.gif/gi.test(e) && o) return [r, a];
                    if (e && e.includes(i.An) && Array.isArray(t) && t.length > 0) {
                        var c = "",
                            s = e.slice(e.search(/[^.]+$/gi));
                        c = e.includes(i.qr) && e.includes(i.b8) ? e.replace(RegExp("(?:".concat(i.qr, ".").concat(s).concat(i.b8, ")([A-z0-9]+_[0-9]+)"), "i"), (function(e, t) {
                            return e.replace(t, "".concat(n, "_").concat(i.WV))
                        })) : e.replace(i.An, "".concat(i.qr, ".").concat(s).concat(i.b8).concat(n, "_").concat(i.WV, "/")), r = e.indexOf("?") < 0 ? t.map((function(e) {
                            return "".concat(c.replace(i.WV, "".concat(e)), " ").concat(e, "w")
                        })) : t.map((function(t) {
                            return "".concat(e, "Resize%3D").concat(t, " ").concat(t, "w")
                        })), a = t.map((function(e) {
                            return "(max-width: ".concat(e, "px) ").concat(e, "px")
                        }))
                    }
                    return [r, a]
                }), [e, t, n])
            }
        },
        27953: (e, t, n) => {
            n.d(t, {
                Z: () => a,
                s: () => o
            });
            var r = n(29439),
                i = n(35098);

            function o() {
                var e = (0, i.useState)(!1),
                    t = (0, r.Z)(e, 2),
                    n = t[0],
                    o = t[1];
                return (0, i.useEffect)((function() {
                    return o(!0),
                        function() {
                            return o(!1)
                        }
                }), []), n
            }
            const a = o
        },
        42802: (e, t, n) => {
            n.d(t, {
                T: () => o
            });
            var r = n(35098),
                i = n(88101);
            const o = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return (0, r.useMemo)((function() {
                    return (0, i.C_)(e, t, n, o)
                }), [e, t, n, o])
            }
        },
        61203: (e, t, n) => {
            n.d(t, {
                E: () => o
            });
            var r = n(93849),
                i = r.KF("Client.detailApi.previewImageBase");
            const o = function(e) {
                var t = e;
                return e && e.includes("^/preview/") && (t = "".concat(i).concat(e)), t
            }
        },
        89238: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(42820);

            function i() {
                return (0, r.useSelector)((function(e) {
                    return e.ssr.server
                }))
            }
        },
        90779: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(29439),
                i = n(15861),
                o = (n(30666), n(95566), n(6129), n(64687)),
                a = n.n(o),
                c = n(35098),
                s = n(97883);
            const l = function() {
                var e = (0, c.useRef)(!1);
                return (0, c.useEffect)((function() {
                        return function() {
                            e.current = !0
                        }
                    }), []),
                    function() {
                        return e.current
                    }
            };
            var u = n(74987);
            var d = n(30091),
                p = n(41718),
                f = n(68075),
                v = n(78087),
                g = n(33574),
                m = n(42820),
                b = n(71063),
                h = function() {
                    var e = (0, i.Z)(a().mark((function e() {
                        var t;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, s.Z)(b.Y.getSessionToken);
                                case 3:
                                    return t = e.sent, e.next = 6, t();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(0), p.default.error("(useUserInfo) Failed to get session token from account centre [Error: ".concat(e.t0.message, "]")), e.abrupt("return", null);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();

            function y() {
                var e = l(),
                    t = (0, c.useState)(!0),
                    n = (0, r.Z)(t, 2),
                    o = n[0],
                    s = n[1],
                    b = (0, c.useState)(!1),
                    y = (0, r.Z)(b, 2),
                    O = y[0],
                    j = y[1],
                    w = (0, c.useState)(""),
                    x = (0, r.Z)(w, 2),
                    P = x[0],
                    C = x[1],
                    S = (0, c.useState)(""),
                    I = (0, r.Z)(S, 2),
                    T = I[0],
                    D = I[1],
                    N = (0, c.useState)(""),
                    k = (0, r.Z)(N, 2),
                    A = k[0],
                    E = k[1],
                    _ = (0, c.useMemo)((function() {
                        var e;
                        return (0, u.s)() || null === (e = window.CBC) || void 0 === e || null === (e = e.APP) || void 0 === e || !e.PubSub ? {
                            subscribe: function() {},
                            unsubscribe: function() {}
                        } : window.CBC.APP.PubSub
                    }), []),
                    L = (0, m.useSelector)((function(e) {
                        var t;
                        if (null !== e && void 0 !== e && null !== (t = e.membership) && void 0 !== t && null !== (t = t.userProfile) && void 0 !== t && t.Email) {
                            var n = e.membership.userProfile.Email,
                                r = n.find((function(e) {
                                    return "Primary" === e.Type
                                })) || n[0];
                            return r.Value
                        }
                        return ""
                    })),
                    Z = function(e) {
                        E(e || L)
                    };
                return (0, c.useEffect)((function() {
                    if (!(0, u.s)()) {
                        var t, n, r = function() {
                            d.default.getUserContext().then((function(e) {
                                var t = d.default.isUserAuthenticated(e) ? v.AUTHED_COOKIE : v.GUEST_COOKIE,
                                    n = (0, f.getFeedCookie)(t);
                                n && (C(n.value), s(!1))
                            }))
                        };
                        return d.default.addOnReadyCallback((function() {
                                if (!e() && !(0, u.s)()) {
                                    d.default.getUserContext().then((function(e) {
                                        j(d.default.isUserAuthenticated(e)), D(e.name), Z(e.email), r()
                                    })), t = window.vf.$subscribe("user", "loaded", (function(e) {
                                        p.default.debug("user loaded", e.name);
                                        var t = d.default.isUserAuthenticated(e);
                                        j(t), D(e.name), Z(e.email), r()
                                    })), n = window.vf.$subscribe("login", "success", function() {
                                        var e = (0, i.Z)(a().mark((function e(t) {
                                            return a().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return s(!0), p.default.debug("login success", t.name), j(d.default.isUserAuthenticated(t)), D(t.name), Z(t.email), e.t0 = g.setLoginRadiusCookie, e.next = 8, h();
                                                    case 8:
                                                        e.t1 = e.sent, (0, e.t0)(e.t1);
                                                    case 10:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), window.vf.$subscribe("logout", "success", (function() {
                                        (0, g.deleteLoginRadiusCookie)()
                                    })), _.subscribe("UIEAlert", r)
                                }
                            })),
                            function() {
                                t && t.remove(), n && n.remove(), _.unsubscribe("UIEAlert", r)
                            }
                    }
                }), []), {
                    id: P,
                    name: T,
                    email: A,
                    isLoggedIn: O,
                    isLoading: o
                }
            }
        },
        92269: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(29439),
                i = n(35098),
                o = n(79532);
            const a = function(e, t) {
                var n = (0, i.useState)(t),
                    a = (0, r.Z)(n, 2),
                    c = a[0],
                    s = a[1],
                    l = function(e) {
                        s(e)
                    };
                return (0, i.useEffect)((function() {
                    var t = {
                        domnode: e.current,
                        callback: l
                    };
                    return o.ZP.registerMediaQueryObject(t),
                        function() {
                            o.ZP.unregisterMediaQueryObject(t)
                        }
                }), []), c
            }
        },
        73871: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(56552);
            const i = function(e) {
                var t = e.text,
                    n = e.lang;
                return t ? (0, r.jsx)("h2", {
                    className: "deck",
                    lang: n,
                    children: t
                }) : null
            }
        },
        94414: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(41915),
                i = {
                    name: n(73457).vU,
                    columns: 5,
                    isFlexible: !0
                },
                o = n(72663),
                a = n(56552);
            const c = function(e) {
                var t = e.numLoadingCards;
                return (0, a.jsxs)("div", {
                    className: "detailDiscovery-placeholder",
                    children: [(0, a.jsx)("div", {
                        className: "detailDiscovery-placeholder-headline"
                    }), (0, a.jsx)(r.Z, {
                        layout: i,
                        items: (0, r.P)(t, o.v.DISCOVERY)
                    })]
                })
            }
        },
        67530: (e, t, n) => {
            n.d(t, {
                E5: () => d,
                Fo: () => v,
                GD: () => r,
                N3: () => p,
                Nq: () => c,
                QY: () => f,
                X0: () => a,
                ec: () => i,
                nt: () => o,
                p0: () => s,
                pe: () => u,
                wF: () => l
            });
            var r = "story",
                i = "segment",
                o = "blogentry",
                a = "episode",
                c = "feature",
                s = "sponsoredcontent",
                l = [r, i, o, a, c, s, "photogallery", "recipe", "audio", "video"],
                u = Array.from({
                    length: 30
                }, (function(e, t) {
                    return 4 + 6 * t
                })),
                d = Array.from({
                    length: 30
                }, (function(e, t) {
                    return 4 + 10 * t
                })),
                p = ["trendingVideos", "recommendations", "comments", "discoverMore"],
                f = ["trending"],
                v = "More from this episode"
        },
        1122: (e, t, n) => {
            n.d(t, {
                n: () => u
            });
            var r = n(89698),
                i = n(56605),
                o = n(33355),
                a = n(17346),
                c = n(96846),
                s = n(79532),
                l = n(75301),
                u = function(e, t) {
                    return function(n, u) {
                        var d, p = t.contentId,
                            f = t.section,
                            v = (0, s.bO)(e);
                        d = v ? "nine" === v ? (0, s.RT)(e) : (0, s.Pr)(e) : e;
                        var g = (0, r.Rf)(p, v),
                            m = /\d.\d+$/.test(f) ? f.substr(0, f.lastIndexOf("/")) : f;
                        return Promise.all([n((0, c.ag)(d, p)), n((0, o.cH)()), n(g), n((0, a.v)(m))]).then((function() {
                            var e, t = [n((0, i.bY)(d, !1, p)), n((0, r.Jf)())],
                                o = u(),
                                a = null === o || void 0 === o || null === (e = o.detail) || void 0 === e || null === (e = e.content) || void 0 === e ? void 0 : e.newsletter;
                            return a && "false" !== a && t.push(n((0, l.fP)(a))), Promise.all(t)
                        })).catch((function(e) {
                            n((0, i.lM)(d, e.code))
                        }))
                    }
                }
        },
        58821: (e, t, n) => {
            n.d(t, {
                q: () => d
            });
            var r = n(15861),
                i = n(64687),
                o = n.n(i),
                a = n(56605),
                c = n(89698),
                s = n(33355),
                l = n(96846),
                u = n(79532),
                d = function(e, t) {
                    return function() {
                        var n = (0, r.Z)(o().mark((function n(r) {
                            var i, d, p;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return i = t.contentId, d = (0, u.bO)(e), p = d ? "nine" === d ? (0, u.RT)(e) : (0, u.Pr)(e) : e, r((0, l.ag)(p, i)), r((0, s.cH)()), n.prev = 5, n.next = 8, r((0, c.Rf)(i, d));
                                    case 8:
                                        r((0, a.bY)(p, !1, i)), n.next = 14;
                                        break;
                                    case 11:
                                        n.prev = 11, n.t0 = n.catch(5), r((0, a.lM)(p, n.t0.code));
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [5, 11]
                            ])
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                }
        },
        93710: (e, t, n) => {
            n.d(t, {
                $: () => g,
                ZP: () => m
            });
            var r = n(4942),
                i = n(93433),
                o = (n(9867), n(7231), n(58109), n(95566), n(68438), n(83464), n(19496), n(58986)),
                a = n(50439),
                c = n(15799),
                s = n(60957),
                l = n(40627),
                u = n(45164),
                d = n(56552);

            function p(e, t) {
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
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function v(e) {
                var t = e.params;
                if (t && t.type && void 0 !== t.sectionIndex) return {
                    key: t.type + "-" + t.sectionIndex,
                    type: t.type,
                    responsive: !0,
                    targeting: {
                        plc: "feed",
                        sectionIndex: t.sectionIndex
                    },
                    cardType: l.QU.TYPE_REGULAR
                }
            }

            function g(e) {
                var t = e.params;
                if (!t || !t.gridData || void 0 === t.sectionIndex || !t.isNativeAd) return null;
                var n = t.sectionIndex,
                    r = (0, i.Z)(t.gridData);
                return 0 === n && 5 < r.length - 1 && r.splice(5, 0, v({
                    params: {
                        type: "native-ad",
                        sectionIndex: n,
                        nativeAdCallback: t.nativeAdCallback
                    }
                })), r
            }
            const m = function(e) {
                var t = e.params,
                    n = e.sectionIndex,
                    r = e.viewport;
                if (!t) return null;
                var l = t.adType,
                    p = t.numberOfAds,
                    g = t.title,
                    m = t.imageUrl,
                    b = t.imageTitle,
                    h = t.lazyLoad,
                    y = t.name;
                if (!l || void 0 === n) return null;
                var O = "bigbox" === l & "viewportLarge" === r ? "right" : "feed";
                if ("native-ad" === l && "Homepage redesign native ad" !== y) {
                    var j = (0, d.jsx)(u.b, {
                            title: g,
                            image: m,
                            imageAlt: b || ""
                        }),
                        w = (0, c.G)(s.K4),
                        x = (0, i.Z)(Array(p || 1)).map((function() {
                            return v({
                                params: f(f({}, t), {}, {
                                    sectionIndex: n
                                })
                            })
                        }));
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)("div", {
                            className: "flexibleLandingPage-sectionHeading-sponsored",
                            children: j
                        }), (0, d.jsx)(o.ZP, {
                            gridLayout: w,
                            gridData: x
                        })]
                    })
                }
                return (0, d.jsx)(a.Z, {
                    responsive: !0,
                    type: l,
                    targeting: {
                        plc: O,
                        sectionIndex: n
                    },
                    lazy: h
                })
            }
        },
        89162: (e, t, n) => {
            n.d(t, {
                $Z: () => r,
                K5: () => o,
                OW: () => i,
                zb: () => a
            });
            var r = 3,
                i = {
                    TRENDING: "trending",
                    RECOMMENDED: "recommended"
                },
                o = {
                    SHORT_FORM_VIDEO: "short-form-video",
                    ALL_ARTICLES: "all-articles",
                    VIDEO_DISCOVERY_START: "video-discovery-start"
                },
                a = "video"
        },
        45164: (e, t, n) => {
            n.d(t, {
                b: () => o,
                d: () => a
            });
            var r = n(82019),
                i = n(56552),
                o = function(e) {
                    var t = e.title,
                        n = e.link,
                        o = e.linkVisible,
                        a = e.description,
                        c = e.image,
                        s = e.imageAlt,
                        l = e.imageLink,
                        u = e.variant,
                        d = e.headingLevel,
                        p = e.darkMode;
                    return t || a ? c ? (0, i.jsx)(r.aY, {
                        text: t,
                        sponsoredImageUrl: c,
                        sponsoredImageAlt: s || null,
                        variant: u || null,
                        link: n || null,
                        sponsoredImageLink: l || null,
                        size: "sm",
                        headingLevel: d,
                        darkMode: p,
                        external: !!l
                    }) : (0, i.jsx)(r.OT, {
                        text: t,
                        description: a,
                        link: o && n ? n : null,
                        external: o && n && "/" !== n.charAt(0)
                    }) : null
                },
                a = function(e) {
                    var t = e.title;
                    return t ? (0, i.jsx)("h2", {
                        className: "a11y",
                        children: t
                    }) : null
                }
        },
        60957: (e, t, n) => {
            n.d(t, {
                A5: () => f,
                A6: () => p,
                AP: () => j,
                DU: () => a,
                Gi: () => s,
                K4: () => o,
                LR: () => O,
                Ro: () => m,
                Xj: () => c,
                cT: () => l,
                dz: () => b,
                ll: () => v,
                ol: () => u,
                q0: () => g,
                rg: () => d
            });
            n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703);
            var r = n(14507),
                i = n.n(r),
                o = "default",
                a = "default-light",
                c = "default-dark",
                s = "olympicslight",
                l = "olympicsdark",
                u = "default-condensed",
                d = "featured",
                p = "featured_verticalRightCol_noLimit",
                f = "verticallisting",
                v = "featured-description",
                g = "featured-condensed",
                m = "default-shows",
                b = "DESCRIPTION",
                h = "oc-l-sectionContainer-backgroundColor",
                y = "oc-l-sectionContainer-sideScroll",
                O = new Map([
                    [a, i()("oc-l-sectionContainer-light", h)],
                    [c, i()("oc-l-sectionContainer-dark", h)],
                    [s, i()("oc-l-sectionContainer-olympicsLight", "oc-l-sectionContainer-light", y, h)],
                    [l, i()("oc-l-sectionContainer-olympicsDark", "oc-l-sectionContainer-dark", y, h)],
                    [f, i()("oc-l-sectionContainer-verticallistMain")]
                ]),
                j = "oc-l-sectionContainer-withRightRail"
        },
        24557: (e, t, n) => {
            n.d(t, {
                ZP: () => b,
                om: () => v,
                q2: () => g,
                z0: () => m
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(46183),
                o = n(27109),
                a = n(41550),
                c = n(25234),
                s = n(69720);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = function() {
                    return {
                        content: a.oC,
                        leadVideoOrAudio: null,
                        leadImage: null,
                        leadPhotogallery: null,
                        leadSegmentOrEpisodeAudio: null
                    }
                },
                p = (0, i.oM)({
                    name: "detail",
                    initialState: d(),
                    reducers: {
                        reset_detail: function() {
                            return d()
                        },
                        receive_detail: {
                            reducer: function(e, t) {
                                return u(u({}, e), t.payload)
                            },
                            prepare: function(e) {
                                return {
                                    payload: {
                                        content: (0, c.K1)(e),
                                        leadVideoOrAudio: (0, s.l1)(e),
                                        leadImage: (0, s.xR)(e),
                                        leadPhotogallery: (0, s.t1)(e),
                                        leadSegmentOrEpisodeAudio: (0, s.Ft)(e)
                                    }
                                }
                            }
                        },
                        update_related_items: {
                            reducer: function(e, t) {
                                return u(u({}, e), {}, {
                                    content: u(u({}, e.content), t.payload)
                                })
                            },
                            prepare: function(e) {
                                return {
                                    payload: {
                                        relatedItems: e
                                    }
                                }
                            }
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(o.app_reset, (function() {
                            return d()
                        }))
                    }
                }),
                f = p.actions,
                v = f.reset_detail,
                g = f.receive_detail,
                m = f.update_related_items;
            const b = p.reducer
        },
        67513: (e, t, n) => {
            n.d(t, {
                ZP: () => l,
                yw: () => s
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(46183);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var c = (0, i.oM)({
                    name: "feedback",
                    initialState: {
                        formName: null,
                        referringButtonId: ""
                    },
                    reducers: {
                        update_zendesk_form: {
                            reducer: function(e, t) {
                                return a(a({}, e), {}, {
                                    formName: t.payload.formName,
                                    referringButtonId: t.payload.referringButtonId
                                })
                            },
                            prepare: function(e) {
                                return e ? {
                                    payload: {
                                        formName: e.formName,
                                        referringButtonId: e.buttonId
                                    }
                                } : {
                                    payload: {
                                        formName: null,
                                        referringButtonId: ""
                                    }
                                }
                            }
                        }
                    }
                }),
                s = c.actions.update_zendesk_form;
            const l = c.reducer
        },
        49154: (e, t, n) => {
            n.d(t, {
                Z: () => s,
                e: () => c
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = (0, n(46183).oM)({
                    name: "fixed",
                    initialState: {},
                    reducers: {
                        set_user_agent: function(e, t) {
                            if ("boolean" === typeof t.payload.isWebView) return o(o({}, e), t.payload)
                        }
                    }
                }),
                c = a.actions.set_user_agent;
            const s = a.reducer
        },
        7919: (e, t, n) => {
            n.d(t, {
                X: () => r
            });
            var r = 0
        },
        24876: (e, t, n) => {
            n.d(t, {
                ZP: () => p,
                bo: () => d,
                ii: () => u
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(46183),
                o = n(7919);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = (0, i.oM)({
                    name: "loader",
                    initialState: {
                        loaded: !0,
                        count: 0
                    },
                    reducers: {
                        start_loading: function(e) {
                            return c(c({}, e), {}, {
                                count: isNaN(e.count) ? 1 : e.count + 1,
                                loaded: !1
                            })
                        },
                        loading_complete: function(e) {
                            var t = e.count - 1,
                                n = t === o.X;
                            return c(c({}, e), {}, {
                                count: t,
                                loaded: n
                            })
                        }
                    }
                }),
                l = s.actions,
                u = l.start_loading,
                d = l.loading_complete;
            const p = s.reducer
        },
        17980: (e, t, n) => {
            n.d(t, {
                ZP: () => p,
                _8: () => d,
                eB: () => u,
                vF: () => l
            });
            n(83464), n(19496);
            var r = n(93433),
                i = n(4942);
            n(58109), n(95566), n(68438);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var c = (0, n(46183).oM)({
                    name: "newsletters",
                    initialState: {
                        newsletters: !1
                    },
                    reducers: {
                        load_data: function(e, t) {
                            return a(a({}, e), {}, {
                                newsletters: t.payload.newsletters
                            })
                        },
                        subscribe_email: function(e, t) {
                            var n = (void 0 === e.subscribe ? [] : e.subscribe).filter((function(e) {
                                var n, r;
                                if ((null === (n = t.payload.subscribe) || void 0 === n || null === (n = n.message) || void 0 === n ? void 0 : n.newsletter_id) !== (null === (r = e.error) || void 0 === r ? void 0 : r.newsletter_id)) return e
                            }));
                            return a(a({}, e), {}, {
                                subscribe: [].concat((0, r.Z)(n), [t.payload.subscribe])
                            })
                        },
                        middleware_error: function(e, t) {
                            return a(a({}, e), {}, {
                                middleware_error: t.payload.middleware_error
                            })
                        }
                    }
                }),
                s = c.actions,
                l = s.load_data,
                u = s.subscribe_email,
                d = s.middleware_error;
            const p = c.reducer
        },
        41910: (e, t, n) => {
            n.d(t, {
                ZP: () => y,
                i$: () => v,
                WI: () => h,
                iN: () => m,
                ok: () => g,
                VA: () => b
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(46183),
                o = n(93433),
                a = (n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703), n(9867), n(7231), n(90955));

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var l = function(e) {
                if (!e) return e;
                var t = new Map;
                return e.forEach((function(e, n) {
                    var r;
                    null === e || void 0 === e || null === (r = e.main) || void 0 === r || null === (r = r.content) || void 0 === r || r.forEach((function(e, r, i) {
                        var c, s = null === e || void 0 === e || null === (c = e.lineup) || void 0 === c ? void 0 : c.pubQueueId;
                        if (s && null !== e && void 0 !== e && e.content && null !== e && void 0 !== e && e.wrapper) {
                            var l, u = i[0] && i[0].type === a.O,
                                d = u ? 1 : 0,
                                p = e.content.length + d !== (null === e || void 0 === e || null === (l = e.wrapper) || void 0 === l ? void 0 : l.size),
                                f = t.get(s) || {
                                    needsReflow: p,
                                    flattenedContent: [],
                                    contentPackageSectionIndex: null
                                };
                            t.set(s, {
                                needsReflow: p || f.needsReflow,
                                flattenedContent: [].concat((0, o.Z)(f.flattenedContent), (0, o.Z)(e.content)),
                                contentPackageSectionIndex: u ? n : f.contentPackageSectionIndex,
                                lastSectionIndex: n
                            })
                        }
                    }))
                })), e.map((function(e, n) {
                    return s(s({}, e), {}, {
                        main: s(s({}, e.main), {}, {
                            content: e.main.content.map((function(e) {
                                var r;
                                if (null === (r = e.lineup) || void 0 === r || !r.pubQueueId || !e.wrapper) return e;
                                var i = t.get(e.lineup.pubQueueId);
                                if (!i.needsReflow) return e;
                                var o = e.wrapper.startAt - 1,
                                    a = o + e.wrapper.size;
                                return null !== i.contentPackageSectionIndex && (o = Math.max(0, o - 1)), i.contentPackageSectionIndex === n && (a -= 1), n === i.lastSectionIndex && (a = void 0), s(s({}, e), {}, {
                                    content: i.flattenedContent.slice(o, a)
                                })
                            }))
                        })
                    })
                }))
            };

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = (0, i.oM)({
                    name: "page",
                    initialState: {
                        type: "",
                        pageHeading: "",
                        headingVisible: !0,
                        description: "",
                        path: "",
                        sections: [],
                        defaultHeadlineImage: "",
                        bannerImage: "",
                        initialTotalCards: {},
                        hasNativeAd: !0,
                        lineupSwaps: {},
                        adTestGroup: null
                    },
                    reducers: {
                        page_initial_data: function(e, t) {
                            return t.payload && !t.payload.hasOwnProperty("page") ? e : d(d({}, e), {}, {
                                type: "landing",
                                pageHeading: t.payload.page.pageHeading,
                                headingVisible: t.payload.page.headingVisible,
                                description: t.payload.page.description,
                                path: t.payload.page.path,
                                sections: l(t.payload.page.sections),
                                defaultHeadlineImage: t.payload.page.defaultHeadlineImage,
                                bannerImage: t.payload.page.bannerImage,
                                initialTotalCards: t.payload.page.initialTotalCards,
                                lineupSwaps: d(d({}, e.lineupSwaps), t.payload.lineupSwapObject),
                                timezoneText: t.payload.page.timezoneText
                            })
                        },
                        page_update_sections: function(e, t) {
                            return d(d(d({}, e), t.payload), {}, {
                                sections: l(t.payload.sections)
                            })
                        },
                        page_update_native_ad: function(e, t) {
                            return d(d(d({}, e), t.payload), {}, {
                                sections: l(t.payload.sections)
                            })
                        },
                        reset_page: function(e) {
                            return d(d({}, {
                                type: "",
                                pageHeading: "",
                                headingVisible: !0,
                                description: "",
                                path: "",
                                sections: [],
                                defaultHeadlineImage: "",
                                bannerImage: "",
                                initialTotalCards: {},
                                hasNativeAd: !0,
                                lineupSwaps: {},
                                adTestGroup: null
                            }), {}, {
                                lineupSwaps: d({}, e.lineupSwaps)
                            })
                        },
                        page_update_ad_test: function(e, t) {
                            return d(d({}, e), {}, {
                                adTestGroup: t.payload
                            })
                        }
                    }
                }),
                f = p.actions,
                v = f.page_initial_data,
                g = f.page_update_sections,
                m = f.page_update_native_ad,
                b = f.reset_page,
                h = f.page_update_ad_test;
            const y = p.reducer
        },
        5779: (e, t, n) => {
            n.d(t, {
                VB: () => l,
                ZP: () => u,
                tU: () => s
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = (0, n(46183).oM)({
                    name: "personalization",
                    initialState: {
                        items: [],
                        type: null,
                        isLoaded: !1
                    },
                    reducers: {
                        receive: function(e, t) {
                            if (t.payload.json instanceof Array) return o(o({}, e), {}, {
                                items: t.payload.json,
                                type: t.payload.rectype,
                                isLoaded: !0
                            })
                        },
                        fetch_error: function(e) {
                            return o(o({}, e), {}, {
                                isLoaded: !0
                            })
                        }
                    }
                }),
                c = a.actions,
                s = c.receive,
                l = c.fetch_error;
            const u = a.reducer
        },
        33355: (e, t, n) => {
            n.d(t, {
                ZP: () => f,
                cH: () => p,
                y3: () => d
            });
            n(58109), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = (n(2041), n(95566), n(2612), n(46183)),
                o = n(4954);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        path: e.path || "",
                        banner: e.banner || "",
                        defaultHeadlineImage: e.defaultHeadlineImage || "",
                        widgets: e.widgets || []
                    }
                },
                l = (0, i.oM)({
                    name: "rightRail",
                    initialState: s(),
                    reducers: {
                        set_right_rail: {
                            reducer: function(e, t) {
                                return c(c({}, e), s(t.payload))
                            },
                            prepare: function(e) {
                                return e ? {
                                    payload: c(c({}, e), {}, {
                                        widgets: e.widgets.reduce(o.Ox, [])
                                    })
                                } : {
                                    payload: {}
                                }
                            }
                        },
                        reset_right_rail: function(e) {
                            return c(c({}, e), s())
                        }
                    }
                }),
                u = l.actions,
                d = u.set_right_rail,
                p = u.reset_right_rail;
            const f = l.reducer
        },
        97365: (e, t, n) => {
            n.d(t, {
                Ui: () => s,
                ZP: () => u,
                uy: () => l
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = (0, n(46183).oM)({
                    name: "sectionalContent",
                    initialState: {},
                    reducers: {
                        receive: function(e, t) {
                            var n, i;
                            if (null !== (n = t.payload) && void 0 !== n && n.section && (null === (i = t.payload) || void 0 === i ? void 0 : i.sectionList) instanceof Array) return o(o({}, e), {}, (0, r.Z)({}, t.payload.section, {
                                section: t.payload.section,
                                sectionList: t.payload.sectionList,
                                timestamp: t.payload.timestamp,
                                isLoaded: !0
                            }))
                        },
                        fetch_error: function(e, t) {
                            return o(o({}, e), {}, (0, r.Z)({}, t.payload.section, o(o({}, e), {}, {
                                section: t.payload.section,
                                isLoaded: !0
                            })))
                        }
                    }
                }),
                c = a.actions,
                s = c.receive,
                l = c.fetch_error;
            const u = a.reducer
        },
        14066: (e, t, n) => {
            n.d(t, {
                Z: () => s,
                b: () => c
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = (0, n(46183).oM)({
                    name: "singleLineup",
                    initialState: {
                        content: []
                    },
                    reducers: {
                        update_single_lineup: function(e, t) {
                            return o(o({}, e), {}, {
                                content: t.payload
                            })
                        }
                    }
                }),
                c = a.actions.update_single_lineup;
            const s = a.reducer
        },
        26307: (e, t, n) => {
            n.d(t, {
                ZP: () => u,
                c5: () => l
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(46183),
                o = n(27109);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = (0, i.oM)({
                    name: "tracking",
                    initialState: {
                        tracking: {}
                    },
                    reducers: {
                        update_tracking: function(e, t) {
                            return c(c({}, e), {}, {
                                tracking: t.payload
                            })
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(o.app_reset, (function() {
                            return {
                                tracking: {}
                            }
                        }))
                    }
                }),
                l = s.actions.update_tracking;
            const u = s.reducer
        },
        93639: (e, t, n) => {
            n.d(t, {
                JR: () => s,
                ZP: () => u,
                iR: () => l
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = (0, n(46183).oM)({
                    name: "trending",
                    initialState: {
                        sections: {},
                        list: []
                    },
                    reducers: {
                        receive_trending: function(e, t) {
                            return o(o({}, e), {}, {
                                list: t.payload.contentList,
                                sections: o(o({}, e.sections), {}, (0, r.Z)({}, t.payload.section, t.payload.contentList))
                            })
                        },
                        reset_trending: function(e) {
                            return o(o({}, e), {}, {
                                list: []
                            })
                        }
                    }
                }),
                c = a.actions,
                s = c.receive_trending,
                l = c.reset_trending;
            const u = a.reducer
        },
        82699: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(66240);
            const i = {
                badge: "badge-dfdJV",
                iconRight: "iconRight-JSNED",
                badgeText: "badgeText-hbNI9",
                Generic: "Generic-L0tze",
                Live: "Live-g72Nb",
                ClosedCaptions: "ClosedCaptions-vAv1X",
                Topic: "Topic-W4nwf",
                NeutralDark: "NeutralDark-_URKt"
            };
            var o = n(39416),
                a = n.n(o),
                c = n(6691),
                s = n(56552),
                l = {
                    Live: c.$.black,
                    Generic: c.$.red500,
                    Topic: c.$.white,
                    NeutralDark: c.$.white
                };
            const u = function(e) {
                var t = e.type,
                    n = e.text,
                    o = e.icon,
                    c = e.iconRight,
                    u = e.className;
                if (!t || !n) return null;
                var d = a().bind(i),
                    p = d("badge", [t, o, u], {
                        iconRight: c
                    }),
                    f = d("badgeText");
                return (0, s.jsxs)("div", {
                    className: p,
                    children: [o && (0, s.jsx)(r.Z, {
                        name: o,
                        size: "16",
                        colour: l[t],
                        ariaHidden: !0
                    }), (0, s.jsx)("div", {
                        className: f,
                        "data-cy": "badgetext",
                        children: n
                    })]
                })
            }
        },
        5799: (e, t, n) => {
            n.d(t, {
                n: () => r
            });
            var r = function(e) {
                return e.Live = "Live", e.Generic = "Generic", e.Topic = "Topic", e.NeutralDark = "NeutralDark", e
            }({})
        },
        93648: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(39416),
                i = n.n(r),
                o = n(66240),
                a = n(6691);
            const c = {
                iconButton: "iconButton-ahDec",
                enabled: "enabled-tNwNO",
                disabled: "disabled-LW87H",
                dark: "dark-jYADk",
                background: "background-A5qe6"
            };
            var s = n(35098),
                l = n(56552);
            const u = (0, s.forwardRef)((function(e, t) {
                var n = e.label,
                    r = e.name,
                    s = e.size,
                    u = void 0 === s ? "24" : s,
                    d = e.variant,
                    p = e.onClick,
                    f = e.disabled,
                    v = void 0 !== f && f,
                    g = e.background,
                    m = void 0 !== g && g,
                    b = e.iconTitle,
                    h = void 0 === b ? r : b,
                    y = i().bind(c)("iconButton", r, [d], m ? "background" : null, v ? "disabled" : "enabled");
                return (0, l.jsx)("button", {
                    type: "button",
                    className: y,
                    onClick: p,
                    "aria-label": n,
                    title: n,
                    disabled: v,
                    ref: t,
                    children: (0, l.jsx)(o.Z, {
                        name: r,
                        colour: "dark" === d ? a.$.white : a.$.black,
                        size: u,
                        ariaHidden: !0,
                        title: h
                    })
                })
            }))
        },
        26896: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(12012),
                o = n(39416),
                a = n.n(o);
            const c = {
                textButton: "textButton-BoUa_",
                textButtonRounded: "textButtonRounded-ECgMd",
                textButtonRectangle: "textButtonRectangle-tg0wX",
                outlined: "outlined-hTmi5",
                filled: "filled-sh27F"
            };
            var s = n(56552);
            const l = function(e) {
                var t = e.label,
                    n = e.variant,
                    r = void 0 === n ? "filled" : n,
                    o = e.disabled,
                    l = void 0 !== o && o,
                    u = e.shape,
                    d = void 0 === u ? i.m.TextButtonRounded : u,
                    p = e.onClick,
                    f = e.ariaPressed,
                    v = a().bind(c),
                    g = v("textButton", "textButtonRounded", [r]),
                    m = v("textButton", "textButtonRectangle", [r]),
                    b = d === i.m.TextButtonRounded ? g : m;
                return (0, s.jsx)("button", {
                    type: "button",
                    className: b,
                    disabled: l,
                    onClick: p,
                    "data-cy": "button",
                    "aria-pressed": f,
                    children: (0, s.jsx)("span", {
                        children: t
                    })
                })
            };
            var u = n(93648),
                d = n(66240),
                p = n(6691);
            const f = {
                labelledIconButton: "labelledIconButton-DJXCN",
                horizontalNav: "horizontalNav-vNOyy",
                blackAndWhite: "blackAndWhite-yKULD"
            };
            const v = function(e) {
                var t = e.size,
                    n = void 0 === t ? "16" : t,
                    i = e.label,
                    o = e.name,
                    c = e.onClick,
                    l = e.orientation,
                    u = void 0 === l ? "" : l,
                    v = e.theme,
                    g = void 0 === v ? "" : v,
                    m = e.iconColour,
                    b = void 0 === m ? p.$.white : m,
                    h = e.disabled,
                    y = void 0 !== h && h,
                    O = a().bind(f)((0, r.Z)((0, r.Z)({
                        labelledIconButton: !0
                    }, u, !!u), g, !!g));
                return (0, s.jsxs)("button", {
                    type: "button",
                    className: O,
                    onClick: c,
                    disabled: y,
                    children: [(0, s.jsx)(d.Z, {
                        name: o,
                        colour: b,
                        size: n,
                        ariaHidden: !0
                    }), (0, s.jsx)("span", {
                        children: i
                    })]
                })
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

            function m(e) {
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
            const b = (0, n(35098).forwardRef)((function(e, t) {
                switch (e.type) {
                    case i.q.TextButton:
                        return (0, s.jsx)(l, m({}, e));
                    case i.q.IconButton:
                        return (0, s.jsx)(u.Z, m({
                            ref: t
                        }, e));
                    case i.q.LabelledIconButton:
                        return (0, s.jsx)(v, m({}, e))
                }
            }))
        },
        12012: (e, t, n) => {
            n.d(t, {
                m: () => i,
                q: () => r
            });
            var r = function(e) {
                    return e.TextButton = "TextButton", e.IconButton = "IconButton", e.IconButtonBackground = "IconButtonBackground", e.LabelledIconButton = "LabelledIconButton", e
                }({}),
                i = function(e) {
                    return e.TextButtonRounded = "Rounded", e.TextButtonRect = "Rectangle", e
                }({})
        },
        40742: (e, t, n) => {
            n.d(t, {
                d: () => c,
                k: () => a
            });
            var r = n(39420),
                i = {
                    mobile: r.K.VERTICAL,
                    tablet: r.K.HORIZONTAL,
                    desktop: r.K.HORIZONTAL
                },
                o = {
                    mobile: r.K.HORIZONTAL,
                    tablet: r.K.HORIZONTAL,
                    desktop: r.K.HORIZONTAL
                },
                a = {
                    MIXED_LAYOUT_PRIMARY_CARD: {
                        mobile: r.K.VERTICAL,
                        tablet: r.K.VERTICAL,
                        desktop: r.K.TALL_VERTICAL
                    },
                    MIXED_LAYOUT_SECONDARY_CARD: {
                        mobile: r.K.VERTICAL,
                        tablet: r.K.HORIZONTAL,
                        desktop: r.K.VERTICAL
                    },
                    HORIZONAL_ONE_COLUMN: i,
                    HORIZONAL_TWO_COLUMN: o
                },
                c = "live"
        },
        77482: (e, t, n) => {
            n.d(t, {
                Z: () => Ce
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(35098),
                o = n.n(i);
            n(58949);
            const a = {
                card: "card-agMf7",
                label_wrap: "label_wrap-cVRbR",
                label_text: "label_text-hHWbU",
                flag: "flag-r0UCs",
                liveFlag: "liveFlag-aC3iH"
            };
            var c = n(40742),
                s = n(39416),
                l = n.n(s),
                u = function(e) {
                    var t = e.flag,
                        n = e.flags;
                    return !!(n && n.status && t) && t !== n.label
                },
                d = n(56552);
            const p = function(e) {
                var t = e.item,
                    n = t.id,
                    r = t.title,
                    i = t.flags,
                    o = null === i || void 0 === i ? void 0 : i.status,
                    s = l().bind(a)({
                        liveFlag: (null === o || void 0 === o ? void 0 : o.toLowerCase()) === c.d,
                        flag: !0
                    });
                return n ? (0, d.jsx)("div", {
                    className: a.card,
                    children: (0, d.jsxs)("span", {
                        className: a.label_wrap,
                        children: [u(t) && o ? (0, d.jsx)("span", {
                            className: s,
                            children: o
                        }) : null, (0, d.jsx)("span", {
                            className: a.label_text,
                            children: r
                        })]
                    })
                }) : (0, d.jsx)("div", {})
            };
            var f = n(66240),
                v = n(6691);
            const g = "icon_card-_IktT",
                m = "label_wrap-so9dd";
            const b = function(e) {
                var t = e.item.title;
                return (0, d.jsx)("div", {
                    className: g,
                    children: (0, d.jsxs)("div", {
                        children: [(0, d.jsx)("span", {
                            className: m,
                            children: t
                        }), (0, d.jsx)(f.Z, {
                            name: f.d.Arrow,
                            colour: v.$.white,
                            ariaHidden: !0
                        })]
                    })
                })
            };
            var h = n(14507),
                y = n.n(h),
                O = n(71638),
                j = n(25637);
            const w = "mediaCardPlaceholder-j4vSq",
                x = "mediaCardPlaceholderImage-SM5oD",
                P = "playButton-M59zp",
                C = "mediaCardPlaceholderHeadline-FsRgp",
                S = "mediaCardPlaceholderDescription-KAhhB",
                I = "horizontalVideo-t0Vyd";
            const T = function(e) {
                    var t = e.aspectRatio,
                        n = y()(w, (0, r.Z)({}, I, 1.7778 === t));
                    return (0, d.jsxs)("div", {
                        className: n,
                        children: [(0, d.jsx)("div", {
                            className: x,
                            children: (0, d.jsx)(f.Z, {
                                type: "filled",
                                name: f.d.Play,
                                colour: v.$.white,
                                title: "",
                                ariaHidden: !0,
                                className: P
                            })
                        }), (0, d.jsx)("div", {
                            className: C
                        }), (0, d.jsx)("div", {
                            className: S
                        })]
                    })
                },
                D = "card-_nAO4",
                N = "imageContainer-c56s7",
                k = "playButton-EswH5",
                A = "verticalVideo-qVFr4",
                E = "horizontalVideo-Nlv7B",
                _ = "videoTimeContainer-FAuAg",
                L = "videoTimeStamp-zJFwf",
                Z = "headlineWrap-OmJyO",
                R = "headline-rFBTY";
            var H = n(39588);

            function M(e, t) {
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
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const U = function(e) {
                var t = e.item,
                    n = e.aspectRatio,
                    i = e.showIcon,
                    a = e.displayDuration,
                    c = t.id,
                    s = t.title,
                    l = t.image,
                    u = t.media;
                if (!c || !l) return (0, d.jsx)(T, {
                    aspectRatio: n
                });
                var p = y()(D, (0, r.Z)((0, r.Z)({}, A, .5625 === n), E, 1.7778 === n)),
                    g = s ? "".concat(s, ", play video") : "Video content",
                    m = (0, H.Ud)(null !== u && void 0 !== u && u.duration ? u.duration : 0),
                    b = i && (0, d.jsx)(f.Z, {
                        type: "filled",
                        name: f.d.Play,
                        colour: v.$.white,
                        title: g,
                        ariaHidden: !0,
                        className: k
                    }),
                    h = (0, d.jsxs)(o().Fragment, {
                        children: [(0, d.jsxs)("div", {
                            className: N,
                            children: [(0, d.jsx)(O.Z, B({
                                imageType: j.X.Image,
                                aspectRatio: n
                            }, l)), b, a && (0, d.jsxs)("div", {
                                className: _,
                                children: [(0, d.jsx)("span", {
                                    className: L,
                                    children: m
                                }), (0, d.jsx)(f.Z, {
                                    type: "filled",
                                    name: f.d.ClosedCaptions,
                                    colour: v.$.white,
                                    ariaHidden: !0,
                                    size: "13"
                                })]
                            })]
                        }), (0, d.jsx)("div", {
                            className: Z,
                            children: (0, d.jsx)("span", {
                                className: R,
                                children: s
                            })
                        })]
                    });
                return (0, d.jsx)("div", {
                    className: p,
                    children: h
                })
            };
            var z = n(27287);
            const V = "cardWrapper-zuaII";
            const F = function(e) {
                var t = e.renderAsButton,
                    n = e.cardRef,
                    r = e.item,
                    i = e.featureAttribution,
                    o = e.onClick,
                    a = e.children,
                    c = r.url,
                    s = r.external,
                    l = r.itemType;
                return t ? (0, d.jsx)("button", {
                    ref: n,
                    onClick: o,
                    className: V,
                    "data-cy": "type-".concat(l || ""),
                    children: a
                }) : (0, d.jsx)(z.Z, {
                    ref: n,
                    url: c,
                    external: s,
                    featureAttribution: i,
                    className: V,
                    onClick: o,
                    "data-cy": "type-".concat(l || ""),
                    children: a
                })
            };

            function q(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var W = function(e, t) {
                    if (e) {
                        var n, r = $($({}, e), {}, {
                                imageType: j.X.Image
                            }),
                            i = e.aspects;
                        if (t === c.k.HORIZONAL_TWO_COLUMN) r = $($({}, e), {}, {
                            url: (null === i || void 0 === i || null === (n = i.ratio1x1) || void 0 === n ? void 0 : n.url) || e.url,
                            srcset: [],
                            imageType: j.X.Image
                        });
                        if (t === c.k.MIXED_LAYOUT_SECONDARY_CARD) {
                            var o, a = [{
                                media: "(min-width: 768px) and (max-width: 963px)",
                                srcset: null === i || void 0 === i || null === (o = i.ratio1x1) || void 0 === o ? void 0 : o.url
                            }];
                            r = $($({}, e), {}, {
                                sources: a,
                                imageType: j.X.Picture
                            })
                        }
                        if (t === c.k.MIXED_LAYOUT_PRIMARY_CARD) {
                            var s, l, u = [{
                                media: "(max-width: 963px)",
                                srcset: null === i || void 0 === i || null === (s = i.ratio16x9) || void 0 === s ? void 0 : s.url
                            }];
                            r = $($({}, e), {}, {
                                url: (null === i || void 0 === i || null === (l = i.ratio1x1) || void 0 === l ? void 0 : l.url) || e.url,
                                sources: u,
                                imageType: j.X.Picture
                            })
                        }
                        return (0, d.jsx)(O.Z, $({}, r))
                    }
                },
                Y = n(82699),
                G = n(5799),
                Q = function(e, t, n) {
                    return (null === e || void 0 === e ? void 0 : e.toLowerCase()) === c.d ? (0, d.jsx)(Y.Z, {
                        text: "LIVE",
                        type: G.n.Live,
                        className: n
                    }) : t && (0, d.jsx)(Y.Z, {
                        text: t,
                        type: G.n.Topic,
                        className: n
                    })
                },
                K = function(e, t) {
                    if ((null === e || void 0 === e ? void 0 : e.toLowerCase()) !== c.d) return e && (0, d.jsx)("span", {
                        className: t,
                        children: "".concat(e, " ")
                    })
                };
            const X = {
                verticalToHorizontalCard: "verticalToHorizontalCard-AluQ4",
                description: "description-vWo4_",
                headline: "headline-hLuoA",
                status: "status-wf09Q",
                title: "title-QwP65",
                imageContainer: "imageContainer-Ct1mX",
                vthImage: "vthImage-iPDst",
                image: "image-SwEZi",
                vthBadge: "vthBadge-WNQy2",
                mobileVertical: "mobileVertical-iKwOe",
                audioVideo: "audioVideo-wP5MJ",
                link: "link-MSqUg",
                imageButton: "imageButton-O_eiC",
                mobileHorizontal: "mobileHorizontal-V1weQ",
                headlineInner: "headlineInner-Wp0l_",
                playButton: "playButton-Vhqb7",
                videoTimeContainer: "videoTimeContainer-RfHCz",
                mobileTallVertical: "mobileTallVertical-rVfsP",
                tabletVertical: "tabletVertical-t28YM",
                tabletHorizontal: "tabletHorizontal-InSan",
                tabletTallVertical: "tabletTallVertical-ojoVz",
                desktopVertical: "desktopVertical-yzYmD",
                desktopHorizontal: "desktopHorizontal-fBUfA",
                desktopTallVertical: "desktopTallVertical-pnQDl",
                videoTimeStamp: "videoTimeStamp-PZoqV"
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

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const te = function(e) {
                var t, n = e.item,
                    r = e.containerClasses,
                    i = e.vthBreakpoints,
                    o = e.showDescription,
                    a = void 0 !== o && o,
                    s = e.featureAttribution,
                    l = e.onClick,
                    p = n.title,
                    g = n.url,
                    m = n.description,
                    b = n.image,
                    h = n.videoDuration,
                    O = n.external,
                    j = n.itemType,
                    w = y().bind(X)(X.verticalToHorizontalCard, X.audioVideo),
                    x = (0, H.Ud)(h || 0),
                    P = "".concat(p || "", ". Video Content. Duration: ").concat(x || "", ". Closed Captions available."),
                    C = null !== (t = n.flags) && void 0 !== t ? t : {},
                    S = C.status,
                    I = C.label;
                return (0, d.jsxs)("div", {
                    className: "".concat(r || "", " ").concat(w),
                    "data-cy": "type-".concat(j || ""),
                    children: [(0, d.jsx)("button", {
                        className: X.imageButton,
                        onClick: function() {
                            return l && l()
                        },
                        "aria-label": P,
                        children: (0, d.jsxs)("div", {
                            className: X.imageContainer,
                            children: [Q(S, I, X.vthBadge), b && W(ee(ee({}, b), {}, {
                                classNames: X.vthImage
                            }), i), (0, d.jsx)("span", {
                                className: X.playButton,
                                children: (0, d.jsx)(f.Z, {
                                    type: "filled",
                                    name: f.d.Play,
                                    colour: v.$.black,
                                    ariaHidden: !0,
                                    size: "26"
                                })
                            }), (null === S || void 0 === S ? void 0 : S.toLowerCase()) !== c.d && (0, d.jsxs)("div", {
                                className: X.videoTimeContainer,
                                children: [(0, d.jsx)("span", {
                                    className: X.videoTimeStamp,
                                    children: x
                                }), (0, d.jsx)(f.Z, {
                                    type: "filled",
                                    name: f.d.ClosedCaptions,
                                    colour: v.$.white,
                                    ariaHidden: !0,
                                    size: "13"
                                })]
                            })]
                        })
                    }), (0, d.jsxs)(z.Z, {
                        className: X.link,
                        url: g,
                        external: O,
                        featureAttribution: s,
                        children: [(0, d.jsx)("h3", {
                            className: X.headline,
                            children: (0, d.jsxs)("div", {
                                className: X.headlineInner,
                                children: [u(n) && K(S, X.status), (0, d.jsx)("span", {
                                    className: X.title,
                                    children: p
                                })]
                            })
                        }), a && (0, d.jsx)("p", {
                            className: X.description,
                            children: m
                        })]
                    })]
                })
            };

            function ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ne(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const ie = function(e) {
                var t, n = e.item,
                    r = e.onClick,
                    i = e.renderAsButton,
                    o = e.featureAttribution,
                    a = e.variant,
                    s = e.cardRef,
                    p = e.showDescription,
                    f = void 0 !== p && p,
                    v = e.vthBreakpoints,
                    g = void 0 === v ? c.k.HORIZONAL_ONE_COLUMN : v,
                    m = n.id,
                    b = n.title,
                    h = n.description,
                    y = n.image,
                    O = n.itemType,
                    j = null !== (t = n.flags) && void 0 !== t ? t : {},
                    w = j.label,
                    x = j.status;
                if (!m) return (0, d.jsx)("div", {});
                var P = l().bind(X)("verticalToHorizontalCard", "mobile".concat(g.mobile), "tablet".concat(g.tablet), "desktop".concat(g.desktop));
                if ("video" === O) {
                    var C = {
                        id: m,
                        item: n,
                        containerClasses: P,
                        variant: a,
                        featureAttribution: o,
                        onClick: r,
                        vthBreakpoints: g,
                        showDescription: f
                    };
                    return (0, d.jsx)(te, re({}, C))
                }
                var S = {
                    cardRef: s,
                    item: n,
                    onClick: r,
                    renderAsButton: i,
                    featureAttribution: o,
                    variant: a
                };
                return (0, d.jsx)(F, re(re({}, S), {}, {
                    children: (0, d.jsxs)("div", {
                        className: P,
                        children: [(0, d.jsxs)("div", {
                            className: X.imageContainer,
                            children: [Q(x, w, X.vthBadge), y && W(re(re({}, y), {}, {
                                classNames: X.vthImage
                            }), g)]
                        }), (0, d.jsx)("h3", {
                            className: X.headline,
                            children: (0, d.jsxs)("div", {
                                className: X.headlineInner,
                                children: [u(n) && K(x, X.status), (0, d.jsx)("span", {
                                    className: X.title,
                                    children: b
                                })]
                            })
                        }), f && (0, d.jsx)("p", {
                            className: X.description,
                            children: h
                        })]
                    })
                }))
            };
            var oe = n(39420);
            const ae = "mediaImage-NDkOr",
                ce = "mediaImageIcons-cxxJG",
                se = "mediaImageIconsMediaIcon-Felbt";

            function le(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? le(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var de = function(e, t) {
                    return "video" === e || "live" === e ? t ? "".concat(t, ", play video") : "Video content" : t ? "".concat(t, ", view image") : "Image content"
                },
                pe = function(e) {
                    var t, n = e.type,
                        r = void 0 === n ? "image" : n,
                        i = e.aspectRatio,
                        o = e.showClosedCaptionsIcon,
                        a = e.item,
                        c = a.media,
                        s = a.image,
                        l = a.title;
                    if (!s) return null;
                    var u = "video" === r || "live" === r,
                        p = u ? f.d.Play : f.d.ImageIcon,
                        g = {
                            icon: o ? f.d.ClosedCaptions : void 0,
                            iconRight: !0
                        };
                    if (u) switch (r) {
                        case "live":
                            g.type = G.n.Live, g.text = "LIVE";
                            break;
                        case "video":
                            g.type = G.n.NeutralDark, g.text = (0, H.Ud)(null !== (t = null === c || void 0 === c ? void 0 : c.duration) && void 0 !== t ? t : 0)
                    }
                    return (0, d.jsxs)("div", {
                        className: ae,
                        children: [(0, d.jsx)(O.Z, ue({
                            imageType: j.X.Image,
                            aspectRatio: i
                        }, s)), (0, d.jsxs)("div", {
                            className: ce,
                            children: [(0, d.jsx)(f.Z, {
                                name: p,
                                title: de(r, l),
                                colour: v.$.black,
                                type: "filled",
                                className: se,
                                ariaHidden: !0
                            }), u && (0, d.jsx)(Y.Z, ue({}, g))]
                        })]
                    })
                };
            const fe = "mediaCardPlaceholder-FCdfv",
                ve = "mediaCardPlaceholderImage-DCsnO",
                ge = "mediaCardPlaceholderHeadlineContainer-X9GiF",
                me = "mediaCardPlaceholderText-uYdea";
            var be = function() {
                return (0, d.jsxs)("div", {
                    className: fe,
                    children: [(0, d.jsx)("div", {
                        className: ve
                    }), (0, d.jsxs)("div", {
                        className: ge,
                        children: [(0, d.jsx)("div", {
                            className: me
                        }), (0, d.jsx)("div", {
                            className: me
                        })]
                    })]
                })
            };
            const he = "card-ercJe",
                ye = "headline-q8A20";

            function Oe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Oe(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var we = function(e) {
                var t = e.item,
                    n = t.id,
                    r = t.title,
                    i = t.description,
                    o = t.image;
                return n && o ? (0, d.jsxs)("div", {
                    className: he,
                    children: [(0, d.jsx)(pe, je({}, e)), (0, d.jsx)("p", {
                        className: ye,
                        children: null !== r && void 0 !== r ? r : i
                    })]
                }) : (0, d.jsx)(be, {})
            };

            function xe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? xe(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const Ce = function(e) {
                var t = e.variant,
                    n = e.onClick,
                    r = e.renderAsButton,
                    o = e.featureAttribution,
                    a = e.item,
                    s = e.columns,
                    l = (0, i.useRef)(null);
                (0, i.useEffect)((function() {
                    e.focus && l.current && l.current.focus()
                }), [e.focus]);
                var u = {
                    cardRef: l,
                    onClick: n,
                    renderAsButton: r,
                    featureAttribution: o,
                    item: a,
                    variant: t
                };
                switch (t) {
                    case oe.v.TEXT_WITH_LINK:
                        return (0, d.jsx)(F, Pe(Pe({}, u), {}, {
                            children: (0, d.jsx)(p, Pe({}, e))
                        }));
                    case oe.v.TEXT_WITH_LINK_AND_ICON:
                        return (0, d.jsx)(F, Pe(Pe({}, u), {}, {
                            children: (0, d.jsx)(b, Pe({}, e))
                        }));
                    case oe.v.MEDIA:
                        return (0, d.jsx)(F, Pe(Pe({}, u), {}, {
                            children: (0, d.jsx)(U, Pe({}, e))
                        }));
                    case oe.v.MULTI_MEDIA:
                        return (0, d.jsx)(F, Pe(Pe({}, u), {}, {
                            children: (0, d.jsx)(we, Pe({}, e))
                        }));
                    case oe.v.VERTICAL_TO_HORIZONTAL:
                        return (0, d.jsx)(ie, Pe({
                            cardRef: l,
                            vthBreakpoints: 1 === s ? c.k.HORIZONAL_ONE_COLUMN : c.k.HORIZONAL_TWO_COLUMN
                        }, e));
                    default:
                        return null
                }
            }
        },
        39420: (e, t, n) => {
            n.d(t, {
                K: () => i,
                v: () => r
            });
            var r = function(e) {
                    return e.TEXT_WITH_LINK = "text_with_link", e.TEXT_WITH_LINK_AND_ICON = "text_with_link_and_icon", e.MEDIA = "media", e.VERTICAL_TO_HORIZONTAL = "vertical_to_horizontal", e.MULTI_MEDIA = "multi_media", e
                }({}),
                i = function(e) {
                    return e.VERTICAL = "Vertical", e.HORIZONTAL = "Horizontal", e.TALL_VERTICAL = "TallVertical", e
                }({})
        },
        71638: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(25637),
                o = (n(9867), n(7231), n(56552));
            const a = function(e) {
                var t = e.classNames,
                    n = e.sources,
                    r = e.url,
                    i = e.alt,
                    a = e.loading;
                return (0, o.jsxs)("picture", {
                    className: t,
                    children: [null === n || void 0 === n ? void 0 : n.map((function(e, t) {
                        return (0, o.jsx)("source", {
                            media: e.media,
                            srcSet: e.srcset
                        }, t)
                    })), (0, o.jsx)("img", {
                        src: r,
                        alt: i || "",
                        loading: "lazy" === a ? "lazy" : "eager"
                    })]
                })
            };
            var c = n(14507),
                s = n.n(c);
            const l = {
                imageMedia: "imageMedia-Ebqlm",
                placeholder: "placeholder-vXE1j"
            };

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const p = function(e) {
                var t, n, r = e.url,
                    i = e.srcset,
                    a = e.sizes,
                    c = e.isAboveFold,
                    u = e.aspectRatio,
                    p = e.alt;
                if (void 0 === r) return null;
                var f = e.showcaption || !1,
                    v = e.type || "image",
                    g = "lazy" === e.loading ? "lazy" : "eager",
                    m = null !== (t = e.description) && void 0 !== t && t.length ? e.description : null,
                    b = null !== (n = e.credit) && void 0 !== n && n.length ? "(".concat(e.credit, ")") : null,
                    h = e.mass || "full",
                    y = e.classNames,
                    O = i && i.length ? i.join(",") : void 0,
                    j = a && a.length ? a.join(",") : void 0,
                    w = "number" === typeof u ? {
                        aspectRatio: "".concat(u)
                    } : {},
                    x = c ? {
                        fetchpriority: "high"
                    } : {},
                    P = s().bind(l)(l.imageMedia, v, h, y),
                    C = f && (null !== m || null !== b);
                return (0, o.jsxs)("figure", {
                    className: P,
                    children: [(0, o.jsx)("div", {
                        className: l.placeholder,
                        children: (0, o.jsx)("img", d({
                            loading: g,
                            alt: p || "",
                            srcSet: O,
                            sizes: j,
                            src: r,
                            style: w,
                            "data-cy": "".concat(v || "", "-img")
                        }, x))
                    }), C && (0, o.jsxs)("figcaption", {
                        className: "image-caption",
                        children: [m, " ", b]
                    })]
                })
            };

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

            function v(e) {
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
            const g = function(e) {
                switch (e.imageType) {
                    case i.X.Picture:
                        return (0, o.jsx)(a, v({}, e));
                    case i.X.Image:
                        return (0, o.jsx)(p, v({}, e))
                }
            }
        },
        25637: (e, t, n) => {
            n.d(t, {
                X: () => r
            });
            var r = function(e) {
                return e.Picture = "Picture", e.Image = "Image", e
            }({})
        },
        93757: (e, t, n) => {
            n.d(t, {
                Z: () => N
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(29439),
                o = n(35098),
                a = n(50865),
                c = n(93019);
            const s = function(e) {
                var t = e.children,
                    n = e.wrapperId,
                    r = (0, o.useState)(null),
                    a = (0, i.Z)(r, 2),
                    s = a[0],
                    l = a[1];
                return (0, o.useLayoutEffect)((function() {
                    var e = document.getElementById(n);
                    return e || (e = function(e) {
                            var t = document.createElement("div");
                            return t.setAttribute("id", e), document.body.appendChild(t), t
                        }(n)), l(e),
                        function() {
                            var t;
                            null !== (t = e) && void 0 !== t && t.parentNode && e.parentNode.removeChild(e)
                        }
                }), [n]), null === s ? null : (0, c.createPortal)(t, s)
            };
            var l = n(66240),
                u = n(26896),
                d = n(12012),
                p = n(89589);
            const f = "modalContent-Z1RSi",
                v = "closeButtonWrapper-K8DUc",
                g = "leftRightButtonWrapper-P9Nug";
            var m = n(56552);

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

            function h(e) {
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
            var y = (0, o.forwardRef)((function(e, t) {
                    return (0, m.jsx)(u.Z, h({
                        type: d.q.IconButton,
                        label: "Previous Video",
                        name: l.d.Left,
                        background: !0,
                        ref: t
                    }, e))
                })),
                O = (0, o.forwardRef)((function(e, t) {
                    return (0, m.jsx)(u.Z, h({
                        type: d.q.IconButton,
                        label: "Next Video",
                        name: l.d.Right,
                        background: !0,
                        ref: t
                    }, e))
                }));
            const j = function(e) {
                var t = e.children,
                    n = e.handleClose,
                    r = void 0 === n ? function() {
                        return null
                    } : n,
                    i = e.onSlideChange,
                    a = void 0 === i ? function() {
                        return null
                    } : i,
                    c = e.onSwiper,
                    s = void 0 === c ? function() {
                        return null
                    } : c,
                    b = e.initialSlide,
                    h = void 0 === b ? 0 : b,
                    j = (0, o.useRef)(null),
                    w = (0, o.useRef)(null),
                    x = o.Children.count(t) > 1;
                return (0, m.jsxs)("div", {
                    className: f,
                    children: [(0, m.jsx)("div", {
                        className: v,
                        children: (0, m.jsx)(u.Z, {
                            type: d.q.IconButton,
                            label: "Close",
                            name: l.d.Close,
                            background: !1,
                            variant: "dark",
                            onClick: r
                        })
                    }), x && (0, m.jsxs)("div", {
                        className: g,
                        children: [(0, m.jsx)(y, {
                            ref: j
                        }), (0, m.jsx)(O, {
                            ref: w
                        })]
                    }), (0, m.jsx)(p.Z, {
                        centered: !0,
                        numSlides: 1,
                        initialSlide: h,
                        onSlideChange: a,
                        onSwiper: s,
                        customControls: {
                            rightButtonRef: w,
                            leftButtonRef: j
                        },
                        children: t
                    })]
                })
            };
            var w = n(42997);
            const x = "modalContent-PRqKA",
                P = "header-e_Qq7";
            const C = function(e) {
                var t = e.children,
                    n = e.title,
                    r = e.backgroundColor,
                    i = e.handleClose,
                    o = void 0 === i ? function() {
                        return null
                    } : i,
                    a = {};
                return r && (a = {
                    backgroundColor: r
                }), (0, m.jsxs)("div", {
                    className: x,
                    style: a,
                    children: [(0, m.jsxs)("div", {
                        className: P,
                        children: [(0, m.jsx)(w.Z, {
                            children: (0, m.jsx)("h2", {
                                tabIndex: -1,
                                children: n
                            })
                        }), (0, m.jsx)(u.Z, {
                            type: d.q.IconButton,
                            label: "Close",
                            name: l.d.Close,
                            onClick: o
                        })]
                    }), t]
                })
            };
            var S = n(70194);
            const I = "modal-JMnEW";

            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const N = function(e) {
                var t, n = e.children,
                    r = e.isOpen,
                    c = e.handleClose,
                    l = void 0 === c ? function() {
                        return null
                    } : c,
                    u = e.wrapperId,
                    d = void 0 === u ? "react-portal-modal-container" : u,
                    p = e.type,
                    f = e.enableFocusTrap,
                    v = void 0 === f || f,
                    g = e.enableScrollLock,
                    b = void 0 === g || g,
                    h = e.propsForModalType,
                    y = (0, o.useState)(0),
                    O = (0, i.Z)(y, 2),
                    w = O[0],
                    x = O[1];
                if ((0, o.useEffect)((function() {
                        r ? x(window.scrollY) : 0 !== w && setTimeout((function() {
                            window.scrollTo(0, w)
                        }), 0)
                    }), [r, w]), !r) return null;
                switch (p) {
                    case S.Q.MODAL_WITH_TITLE_AND_CLOSE:
                        t = (0, m.jsx)(C, D(D({
                            handleClose: l
                        }, h), {}, {
                            children: n
                        }));
                        break;
                    case S.Q.MODAL_WITH_SLIDER:
                        t = (0, m.jsx)(j, D(D({
                            handleClose: l
                        }, h), {}, {
                            children: n
                        }));
                        break;
                    default:
                        return null
                }
                return (0, m.jsx)(s, {
                    wrapperId: d,
                    children: (0, m.jsx)(a.Y, {
                        onEscapeKey: l,
                        enabled: v,
                        scrollLock: b,
                        children: (0, m.jsx)("div", {
                            className: I,
                            role: "dialog",
                            children: t
                        })
                    })
                })
            }
        },
        70194: (e, t, n) => {
            n.d(t, {
                Q: () => r
            });
            var r = function(e) {
                return e.MODAL_WITH_TITLE_AND_CLOSE = "modal_with_title_and_close", e.MODAL_WITH_SLIDER = "modal_with_slider", e
            }({})
        },
        89589: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            n(9867), n(7231);
            var r = n(35098),
                i = n(36869),
                o = n(39416),
                a = n.n(o),
                c = n(27080);
            n(67084), n(88819), n(71764), n(2943), n(43521), n(49211);
            const s = {
                swiper: "swiper-UTnlA",
                slide: "slide-Kpsd7",
                freemode: "freemode-Ggwvh",
                centered: "centered-gg9Cf"
            };
            var l = n(56552);
            const u = function(e) {
                var t, n, o = e.children,
                    u = e.numSlides,
                    d = e.customControls,
                    p = e.centered,
                    f = e.freemode,
                    v = e.a11yName,
                    g = e.a11yRole,
                    m = e.initialSlide,
                    b = e.onSlideChange,
                    h = void 0 === b ? function() {
                        return null
                    } : b,
                    y = e.onSwiper,
                    O = void 0 === y ? function() {
                        return null
                    } : y,
                    j = a().bind(s),
                    w = d && null !== (null === d || void 0 === d ? void 0 : d.leftButtonRef.current) && null !== (null === d || void 0 === d ? void 0 : d.rightButtonRef.current);
                return (0, l.jsx)(i.tq, {
                    slidesPerView: u || "auto",
                    slidesPerGroupAuto: !0,
                    spaceBetween: 16,
                    freeMode: {
                        sticky: f && !0,
                        enabled: f
                    },
                    centeredSlides: p,
                    effect: "slide",
                    updateOnWindowResize: !0,
                    onSlideChange: h,
                    onSwiper: O,
                    initialSlide: m,
                    navigation: w && {
                        enabled: !0,
                        nextEl: null === (t = d.rightButtonRef) || void 0 === t ? void 0 : t.current,
                        prevEl: null === (n = d.leftButtonRef) || void 0 === n ? void 0 : n.current
                    },
                    mousewheel: {
                        forceToAxis: !0
                    },
                    keyboard: !0,
                    a11y: {
                        enabled: !0,
                        containerRole: g,
                        containerMessage: v
                    },
                    modules: [c.Rv, c.W_, c.s5, c.N1, c.Gk, c.xW],
                    className: s.swiper,
                    children: function() {
                        var e = j("slide", {
                            centered: p
                        }, {
                            freemode: f
                        });
                        return r.Children.map(o, (function(t, n) {
                            return (0, l.jsx)(i.o5, {
                                className: e,
                                children: t
                            }, n)
                        }))
                    }()
                })
            }
        },
        66240: (e, t, n) => {
            n.d(t, {
                d: () => j,
                Z: () => P
            });
            var r = n(39416),
                i = n.n(r),
                o = n(6691);
            const a = {
                icon: "icon-o_g8u"
            };
            var c = n(56552);
            const s = function(e) {
                var t = e.title,
                    n = void 0 === t ? "add" : t,
                    r = e.size,
                    i = e.className,
                    a = e.ariaHidden,
                    s = e.type,
                    l = e.colour,
                    u = void 0 === l ? o.$.black : l,
                    d = e.secondaryColour,
                    p = void 0 === d ? o.$.white : d;
                return (0, c.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: i,
                    width: r,
                    height: r,
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: n
                    }), "outlined" === s ? (0, c.jsx)("rect", {
                        width: "24",
                        height: "24",
                        rx: "12",
                        fill: p
                    }) : null, (0, c.jsx)("path", {
                        d: "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z",
                        fill: u
                    })]
                })
            };
            const l = function(e) {
                var t = e.size,
                    n = e.className,
                    r = e.title,
                    i = void 0 === r ? "close" : r,
                    a = e.ariaHidden,
                    s = e.type,
                    l = e.colour,
                    u = void 0 === l ? o.$.black : l,
                    d = e.secondaryColour,
                    p = void 0 === d ? o.$.white : d;
                return (0, c.jsxs)("svg", {
                    className: n,
                    width: t,
                    height: t,
                    viewBox: "0 0 16 16",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: i
                    }), "outlined" === s ? (0, c.jsx)("rect", {
                        width: "16",
                        height: "16",
                        rx: "12",
                        fill: p
                    }) : null, (0, c.jsx)("path", {
                        d: "M15.8849 1.61143L14.2851 0L7.94245 6.38857L1.59984 0L0 1.61143L6.34261 8L0 14.3886L1.59984 16L7.94245 9.61143L14.2851 16L15.8849 14.3886L9.54228 8L15.8849 1.61143Z",
                        fill: u
                    })]
                })
            };
            const u = function(e) {
                var t = e.title,
                    n = void 0 === t ? "check" : t,
                    r = e.size,
                    i = e.className,
                    a = e.ariaHidden,
                    s = e.type,
                    l = e.colour,
                    u = void 0 === l ? o.$.black : l,
                    d = e.secondaryColour,
                    p = void 0 === d ? o.$.white : d;
                return (0, c.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: i,
                    width: r,
                    height: r,
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: n
                    }), "outlined" === s ? (0, c.jsx)("rect", {
                        width: "24",
                        height: "24",
                        rx: "12",
                        fill: p
                    }) : null, (0, c.jsx)("path", {
                        d: "M9.07814 16.3106L4.87191 12.1044L3.43958 13.5266L9.07814 19.1652L21.1824 7.06092L19.7601 5.63867L9.07814 16.3106Z",
                        fill: u
                    })]
                })
            };
            const d = function(e) {
                var t = e.size,
                    n = e.className,
                    r = e.title,
                    i = void 0 === r ? "arrow" : r,
                    a = e.ariaHidden,
                    s = e.type,
                    l = e.colour,
                    u = void 0 === l ? o.$.black : l,
                    d = e.secondaryColour,
                    p = void 0 === d ? o.$.white : d;
                return (0, c.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: n,
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: i
                    }), "outlined" === s && (0, c.jsx)("rect", {
                        width: "24",
                        height: "24",
                        rx: "12",
                        fill: p
                    }), (0, c.jsx)("path", {
                        d: "M3.5 13L17.67 13L14.09 16.59L15.5 18L21.5 12L15.5 6L14.09 7.41L17.67 11L3.5 11V13Z",
                        fill: u
                    })]
                })
            };
            const p = function(e) {
                var t = e.title,
                    n = void 0 === t ? "circle" : t,
                    r = e.size,
                    i = e.className,
                    a = e.ariaHidden,
                    s = e.type,
                    l = e.colour,
                    u = void 0 === l ? o.$.black : l,
                    d = e.secondaryColour,
                    p = void 0 === d ? o.$.white : d;
                return (0, c.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: i,
                    width: r,
                    height: r,
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: n
                    }), "outlined" === s ? (0, c.jsx)("rect", {
                        width: "24",
                        height: "24",
                        rx: "12",
                        fill: p
                    }) : null, (0, c.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "4",
                        fill: u
                    })]
                })
            };
            const f = function(e) {
                var t = e.size,
                    n = e.className,
                    r = e.title,
                    i = void 0 === r ? "left" : r,
                    a = e.ariaHidden,
                    s = e.type,
                    l = e.colour,
                    u = void 0 === l ? o.$.black : l,
                    d = e.secondaryColour,
                    p = void 0 === d ? o.$.white : d;
                return (0, c.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: n,
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: i
                    }), "outlined" === s ? (0, c.jsx)("rect", {
                        width: "24",
                        height: "24",
                        rx: "12",
                        fill: p
                    }) : null, (0, c.jsx)("path", {
                        d: "M14.91 6.71C14.52 6.32 13.89 6.32 13.5 6.71L8.91 11.3C8.52 11.69 8.52 12.32 8.91 12.71L13.5 17.3C13.89 17.69 14.52 17.69 14.91 17.3C15.3 16.91 15.3 16.28 14.91 15.89L11.03 12L14.91 8.12C15.29 7.73 15.29 7.09 14.91 6.71Z",
                        fill: u
                    })]
                })
            };
            const v = function(e) {
                var t = e.size,
                    n = e.className,
                    r = e.title,
                    i = void 0 === r ? "right" : r,
                    a = e.ariaHidden,
                    s = e.type,
                    l = e.colour,
                    u = void 0 === l ? o.$.black : l,
                    d = e.secondaryColour,
                    p = void 0 === d ? o.$.white : d;
                return (0, c.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: n,
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: i
                    }), "outlined" === s ? (0, c.jsx)("rect", {
                        width: "24",
                        height: "24",
                        rx: "12",
                        fill: p
                    }) : null, (0, c.jsx)("path", {
                        d: "M9.31 6.71C8.92 7.1 8.92 7.73 9.31 8.12L13.19 12L9.31 15.88C8.92 16.27 8.92 16.9 9.31 17.29C9.7 17.68 10.33 17.68 10.72 17.29L15.31 12.7C15.7 12.31 15.7 11.68 15.31 11.29L10.72 6.7C10.34 6.32 9.7 6.32 9.31 6.71Z",
                        fill: u
                    })]
                })
            };
            const g = function(e) {
                var t = e.size,
                    n = e.className,
                    r = e.title,
                    i = void 0 === r ? "play" : r,
                    a = e.ariaHidden,
                    s = e.type,
                    l = e.colour,
                    u = void 0 === l ? o.$.black : l,
                    d = e.secondaryColour,
                    p = void 0 === d ? o.$.white : d;
                return (0, c.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: n,
                    width: t,
                    height: t,
                    viewBox: "0 0 28 28",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: i
                    }), "outlined" === s && (0, c.jsx)("rect", {
                        width: "28",
                        height: "28",
                        rx: "14",
                        fill: p
                    }), (0, c.jsx)("path", {
                        d: "M9.5 8.17248V19.8275C9.5 20.7162 10.4787 21.2562 11.2325 20.7725L20.39 14.945C21.0875 14.5062 21.0875 13.4937 20.39 13.0437L11.2325 7.22748C10.4787 6.74373 9.5 7.28373 9.5 8.17248Z",
                        fill: u
                    })]
                })
            };
            const m = function(e) {
                var t = e.title,
                    n = void 0 === t ? "closed captions" : t,
                    r = e.size,
                    i = e.className,
                    a = e.colour,
                    s = void 0 === a ? o.$.black : a,
                    l = r,
                    u = parseInt(r || "") * (10 / 11.25);
                return (0, c.jsxs)("svg", {
                    className: i,
                    "aria-label": "Closed-captions available",
                    height: l,
                    width: u,
                    role: "img",
                    viewBox: "0 0 11.25 10",
                    children: [(0, c.jsx)("title", {
                        children: n
                    }), (0, c.jsx)("path", {
                        d: "m 10,0 c 0.6875,0 1.25,0.5625 1.25,1.25 v 7.5 C 11.25,9.4375 10.6875,10 10,10 H 1.25 C 0.55625,10 0,9.4375 0,8.75 V 1.25 C 0,0.5625 0.55625,0 1.25,0 Z M 5,4.375 V 3.75 C 5,3.40625 4.71875,3.125 4.375,3.125 H 2.5 c -0.34375,0 -0.625,0.28125 -0.625,0.625 v 2.5 c 0,0.34375 0.28125,0.625 0.625,0.625 H 4.375 C 4.71875,6.875 5,6.59375 5,6.25 V 5.625 H 4.0625 v 0.3125 h -1.25 v -1.875 h 1.25 V 4.375 Z m 4.375,0 V 3.75 C 9.375,3.40625 9.09375,3.125 8.75,3.125 H 6.875 C 6.53125,3.125 6.25,3.40625 6.25,3.75 v 2.5 c 0,0.34375 0.28125,0.625 0.625,0.625 H 8.75 c 0.34375,0 0.625,-0.28125 0.625,-0.625 V 5.625 H 8.4375 v 0.3125 h -1.25 v -1.875 h 1.25 V 4.375 Z",
                        fill: s
                    })]
                })
            };
            const b = function(e) {
                var t = e.size,
                    n = void 0 === t ? "24" : t,
                    r = e.className,
                    i = e.title,
                    a = e.ariaHidden,
                    s = e.colour,
                    l = void 0 === s ? o.$.black : s;
                return (0, c.jsxs)("svg", {
                    className: r,
                    width: n,
                    height: Math.ceil(2 * parseInt(n) / 3),
                    viewBox: "0 0 24 16",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: i
                    }), (0, c.jsx)("path", {
                        d: "M0 16V13.3333H23.8273V16H0ZM0 9.33333V6.66667H23.8273V9.33333H0ZM0 2.66667V0H23.8273V2.66667H0Z",
                        fill: l
                    })]
                })
            };
            const h = function(e) {
                var t = e.title,
                    n = void 0 === t ? "image" : t,
                    r = e.type,
                    i = e.size,
                    a = e.className,
                    s = e.colour,
                    l = void 0 === s ? o.$.black : s,
                    u = e.secondaryColour,
                    d = void 0 === u ? o.$.white : u;
                return (0, c.jsxs)("svg", {
                    className: a,
                    width: i,
                    height: i,
                    viewBox: "0 0 24 24",
                    role: "img",
                    children: [(0, c.jsx)("title", {
                        children: n
                    }), "outlined" === r ? (0, c.jsx)("rect", {
                        width: "24",
                        height: "24",
                        rx: "12",
                        fill: d
                    }) : null, (0, c.jsx)("path", {
                        fill: l,
                        d: "M6.55556 19C6.12778 19 5.76157 18.8477 5.45694 18.5431C5.15231 18.2384 5 17.8722 5 17.4444V6.55556C5 6.12778 5.15231 5.76157 5.45694 5.45694C5.76157 5.15231 6.12778 5 6.55556 5H17.4444C17.8722 5 18.2384 5.15231 18.5431 5.45694C18.8477 5.76157 19 6.12778 19 6.55556V17.4444C19 17.8722 18.8477 18.2384 18.5431 18.5431C18.2384 18.8477 17.8722 19 17.4444 19H6.55556ZM6.55556 17.4444H17.4444V6.55556H6.55556V17.4444ZM7.33333 15.8889H16.6667L13.75 12L11.4167 15.1111L9.66667 12.7778L7.33333 15.8889Z"
                    })]
                })
            };
            const y = function(e) {
                var t = e.title,
                    n = void 0 === t ? "link" : t,
                    r = e.size,
                    i = e.className,
                    a = e.ariaHidden,
                    s = e.type,
                    l = e.colour,
                    u = void 0 === l ? o.$.black : l,
                    d = e.secondaryColour,
                    p = void 0 === d ? o.$.white : d;
                return (0, c.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: i,
                    width: r,
                    height: r,
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: n
                    }), "outlined" === s ? (0, c.jsx)("rect", {
                        width: "24",
                        height: "24",
                        rx: "12",
                        fill: p
                    }) : null, (0, c.jsx)("path", {
                        d: "M9.97382 14.4521C10.3535 14.8333 10.9692 14.8333 11.349 14.4521C11.7287 14.0707 11.7287 13.4525 11.349 13.0712L10.6614 12.3808C9.52221 11.237 9.52221 9.38229 10.6614 8.23838L14.0752 4.81071C15.2143 3.66682 17.0614 3.66682 18.2007 4.81073C19.34 5.95466 19.34 7.80934 18.2008 8.95325L16.8501 10.3095C16.4703 10.6909 16.4703 11.309 16.8501 11.6903C17.2298 12.0717 17.8456 12.0717 18.2253 11.6903L19.576 10.3341C21.4747 8.42751 21.4747 5.33639 19.5759 3.42989C17.6771 1.52339 14.5987 1.52335 12.7 3.42988L9.28626 6.85754C7.38752 8.76407 7.38752 11.8551 9.28626 13.7617L9.97382 14.4521ZM14.0262 9.54797C13.6465 9.16667 13.0308 9.16667 12.6511 9.54797C12.2713 9.92931 12.2713 10.5475 12.6511 10.9288L13.3386 11.6192C14.4778 12.7631 14.4778 14.6178 13.3386 15.7616L9.92491 19.1892C8.78566 20.3332 6.93855 20.3332 5.79928 19.1892C4.66002 18.0454 4.65999 16.1906 5.79922 15.0468L7.14994 13.6905C7.52968 13.3092 7.52967 12.6909 7.14992 12.3097C6.77017 11.9283 6.15448 11.9284 5.77473 12.3097L4.42401 13.666C2.52527 15.5725 2.52536 18.6636 4.4241 20.5702C6.32284 22.4766 9.40133 22.4767 11.3001 20.5702L14.7137 17.1424C16.6125 15.2359 16.6125 12.1448 14.7137 10.2383L14.0262 9.54797Z",
                        fill: u
                    })]
                })
            };
            const O = function(e) {
                var t = e.title,
                    n = void 0 === t ? "Customize" : t,
                    r = e.size,
                    i = e.className,
                    a = e.ariaHidden,
                    s = e.type,
                    l = e.colour,
                    u = void 0 === l ? o.$.black : l,
                    d = e.secondaryColour,
                    p = void 0 === d ? o.$.white : d;
                return (0, c.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: i,
                    width: r,
                    height: r,
                    viewBox: "0 0 18 18",
                    role: "img",
                    "aria-hidden": a,
                    focusable: !a,
                    children: [(0, c.jsx)("title", {
                        children: n
                    }), "outlined" === s ? (0, c.jsx)("rect", {
                        width: "24",
                        height: "18",
                        rx: "18",
                        fill: p
                    }) : null, (0, c.jsx)("path", {
                        d: "M0 15C0 15.55 0.45 16 1 16H6V14H1C0.45 14 0 14.45 0 15ZM0 3C0 3.55 0.45 4 1 4H10V2H1C0.45 2 0 2.45 0 3ZM10 17V16H17C17.55 16 18 15.55 18 15C18 14.45 17.55 14 17 14H10V13C10 12.45 9.55 12 9 12C8.45 12 8 12.45 8 13V17C8 17.55 8.45 18 9 18C9.55 18 10 17.55 10 17ZM4 7V8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H4V11C4 11.55 4.45 12 5 12C5.55 12 6 11.55 6 11V7C6 6.45 5.55 6 5 6C4.45 6 4 6.45 4 7ZM18 9C18 8.45 17.55 8 17 8H8V10H17C17.55 10 18 9.55 18 9ZM13 6C13.55 6 14 5.55 14 5V4H17C17.55 4 18 3.55 18 3C18 2.45 17.55 2 17 2H14V1C14 0.45 13.55 0 13 0C12.45 0 12 0.45 12 1V5C12 5.55 12.45 6 13 6Z",
                        fill: u
                    })]
                })
            };
            var j = function(e) {
                    return e.Add = "Add", e.Close = "Close", e.Check = "Check", e.Arrow = "Arrow", e.Circle = "Circle", e.Left = "Left", e.Right = "Right", e.Play = "Play", e.ClosedCaptions = "ClosedCaptions", e.Hamburger = "Hamburger", e.ImageIcon = "ImageIcon", e.Link = "Link", e.Customize = "Customize", e
                }({}),
                w = {
                    Add: s,
                    Close: l,
                    Check: u,
                    Arrow: d,
                    Circle: p,
                    Left: f,
                    Right: v,
                    Play: g,
                    ClosedCaptions: m,
                    Hamburger: b,
                    ImageIcon: h,
                    Link: y,
                    Customize: O
                },
                x = function(e) {
                    var t = e.name,
                        n = e.title,
                        r = e.className,
                        s = e.size,
                        l = void 0 === s ? "24" : s,
                        u = e.colour,
                        d = void 0 === u ? o.$.black : u,
                        p = e.secondaryColour,
                        f = void 0 === p ? o.$.white : p,
                        v = e.type,
                        g = void 0 === v ? "filled" : v,
                        m = e.ariaHidden,
                        b = void 0 !== m && m,
                        h = w[t];
                    if (!h) throw Error("Unrecognised Icon name: ".concat(t));
                    var y = i().bind(a)("icon", [g], r);
                    return (0, c.jsx)(h, {
                        size: l,
                        className: y,
                        colour: d,
                        secondaryColour: f,
                        title: n,
                        ariaHidden: b,
                        type: g
                    })
                };
            x.Names = j;
            const P = x
        },
        6691: (e, t, n) => {
            n.d(t, {
                $: () => i
            });
            n(83464), n(95566), n(19496);
            var r = n(69378),
                i = {};
            Object.keys(r.Z).forEach((function(e) {
                i[e] = r.Z[e]
            }))
        },
        27287: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(45987),
                o = n(35098),
                a = n(83110),
                c = n(14507),
                s = n.n(c),
                l = n(56552),
                u = ["url", "external", "className", "featureAttribution", "children", "onClick"];

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

            function p(e) {
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
            var f = (0, o.forwardRef)((function(e, t) {
                var n = e.url,
                    r = e.external,
                    o = e.className,
                    c = e.featureAttribution,
                    d = e.children,
                    f = e.onClick,
                    v = (0, i.Z)(e, u),
                    g = s()(o),
                    m = (null === n || void 0 === n ? void 0 : n.replace(/^https?:\/\/\S+\.cbc\.ca/g, "")) || "";
                null !== c && void 0 !== c && c.instance && "".concat(c.instance, "-link");
                return r ? (0, l.jsx)("a", p(p({
                    ref: t,
                    href: n || "",
                    className: g,
                    "data-feature-instance": null === c || void 0 === c ? void 0 : c.instance,
                    "data-feature-name": null === c || void 0 === c ? void 0 : c.name,
                    "data-feature-position": null === c || void 0 === c ? void 0 : c.position
                }, v), {}, {
                    children: d
                })) : (0, l.jsx)(a.Link, p(p({
                    ref: t,
                    to: m,
                    className: g,
                    "data-feature-instance": null === c || void 0 === c ? void 0 : c.instance,
                    "data-feature-name": null === c || void 0 === c ? void 0 : c.name,
                    "data-feature-position": null === c || void 0 === c ? void 0 : c.position,
                    onClick: f
                }, v), {}, {
                    children: d
                }))
            }));
            f.displayName = "LinkWrap";
            const v = f
        },
        83828: (e, t, n) => {
            n.d(t, {
                S: () => r,
                v: () => i
            });
            var r = "consentModalButton",
                i = "Privacy Preferences"
        },
        21398: (e, t, n) => {
            n.d(t, {
                T7: () => u,
                cU: () => s,
                hv: () => c,
                u$: () => l
            });
            var r = n(83828),
                i = n(41718),
                o = n(74987),
                a = n(55479);

            function c(e) {
                return e === r.S
            }
            var s = function() {
                    try {
                        window.Didomi.preferences.show()
                    } catch (e) {
                        i.default.error("(showPrivacyPreferences)", new Error("Failed to show the privacy preferences modal:".concat(e)))
                    }
                },
                l = function() {
                    var e, t;
                    if ((0, o.s)()) return a.Fe;
                    window.CBCCMPQueue = window.CBCCMPQueue || [], window.CBCCMPQueue.push((function(n, r) {
                        if (r.cmpEnabled) {
                            var i, o, c = null === n || void 0 === n ? void 0 : n.didomi,
                                s = (null === c || void 0 === c ? void 0 : c.getCurrentUserStatus()) || {};
                            e = null === s || void 0 === s || null === (i = s.purposes) || void 0 === i || null === (i = i[a.AP]) || void 0 === i ? void 0 : i.enabled, t = null === s || void 0 === s || null === (o = s.vendors) || void 0 === o || null === (o = o[a.bc]) || void 0 === o ? void 0 : o.enabled
                        }
                    }));
                    var n = "boolean" === typeof e,
                        r = "boolean" === typeof t;
                    return n && r ? e && t : n ? e : r ? t : a.Fe
                },
                u = function() {
                    if ((0, o.s)()) return !1;
                    var e = !1;
                    return window.CBCCMPQueue = window.CBCCMPQueue || [], window.CBCCMPQueue.push((function(t, n) {
                        var r;
                        n.cmpEnabled && n.cmpScriptWillBeLoaded && ((null === t || void 0 === t || null === (r = t.didomi) || void 0 === r ? void 0 : r.notice.isVisible()) && (e = !0))
                    })), e
                }
        },
        32137: (e, t, n) => {
            n.d(t, {
                O8: () => c,
                bq: () => u,
                M_: () => l,
                x1: () => s
            });
            var r = n(54799),
                i = n(82489),
                o = n(93849).KF("Client.contentApi.baseGraphqlURL");
            var a = n(41718),
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                        n = e ? "subject:".concat(e) : "";
                    return (0, i.he)(o, {
                        query: 'query subject($concepts: String, $pageSize: Int) {\n    allContentItems(concepts: $concepts, pageSize: $pageSize, type: "story", targets: [WEB,ALL]) {\n        nodes {\n            id\n            url\n            title\n            sectionList\n            sectionLabels\n            relatedLinks {\n                url\n                title\n                sourceId\n            }\n            description\n            flag\n            imageLarge\n            source\n            sourceId\n            publishedAt\n            updatedAt\n            type\n            showName\n            authors {\n                name\n                photo {\n                    aspects {\n                        ratio1x1 {\n                            url\n                        }\n                    }                          \n                }\n            }\n            commentsEnabled\n            contextualHeadlines {\n                headline\n                contextualLineupSlug\n            }\n        }\n    }\n}',
                        variables: {
                            concepts: n,
                            pageSize: t
                        }
                    }).then((function(e) {
                        return (0, r.H9)(e.allContentItems.nodes)
                    })).catch((function(t) {
                        return a.default.error("(fetchSubjects) Unable to fetch subjects ".concat(e), t)
                    }))
                },
                s = function(e) {
                    return e.join("|")
                },
                l = function(e) {
                    return "string" === typeof e && e.length > 0
                },
                u = function(e, t) {
                    return !!l(null === e || void 0 === e ? void 0 : e.clipID) || !!l(null === t || void 0 === t ? void 0 : t.clipID)
                }
        },
        25234: (e, t, n) => {
            n.d(t, {
                ID: () => v,
                K1: () => g,
                ne: () => p
            });
            var r = n(4942),
                i = (n(83464), n(95566), n(19496), n(2041), n(2612), n(23744), n(84350), n(89891), n(35275), n(85095), n(61399), n(57273), n(50791), n(39752), n(20816), n(75152), n(28997), n(23433), n(54367), n(46900), n(69898), n(53145), n(62153), n(9867), n(7231), n(58109), n(68438), n(92777)),
                o = n(41550),
                a = n(70787),
                c = n(39588),
                s = n(68369);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = function(e) {
                    var t, n = [];
                    return Array.isArray(e.authors) && e.authors.length ? (e.authors.forEach((function(e) {
                        var t;
                        n.push(u(u({}, o.Xg), {}, {
                            name: e.name,
                            sourceId: e.id,
                            title: e.title,
                            biography: e.biography,
                            url: e.url,
                            photoURL: (null === (t = e.photo) || void 0 === t || null === (t = t.aspects) || void 0 === t || null === (t = t.ratio1x1) || void 0 === t ? void 0 : t.url) || "",
                            links: e.links
                        }))
                    })), n) : e.photo ? (n.push(u(u({}, o.Xg), {}, {
                        name: e.name,
                        sourceId: e.sourceId,
                        title: e.title,
                        biography: e.biography,
                        url: e.url,
                        photoURL: (null === (t = e.photo) || void 0 === t || null === (t = t.aspects) || void 0 === t || null === (t = t.ratio1x1) || void 0 === t ? void 0 : t.url) || "",
                        links: e.links
                    })), n) : []
                },
                p = function(e) {
                    return d(e)[0]
                },
                f = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim().replace(/[^a-zA-Z0-9-_]+/g, "-")
                },
                v = function(e) {
                    return "authorbio" === e.type && e.name ? "" !== e.title ? "".concat(e.name.trim(), " - ").concat(e.title.trim()) : e.name.trim() : ""
                },
                g = function(e) {
                    var t, n, r = u(u({}, o.oC), {}, {
                        attribution: e.attribution || {},
                        authorDisplay: e.authorDisplay,
                        authorList: d(e),
                        body: e.body,
                        byline: (t = e.byline, "string" === typeof t ? "Reuters" === t ? o.lz.REUTERS : t : ""),
                        clarifications: e.clarifications || [],
                        corrections: e.corrections || [],
                        deck: e.deck || "",
                        departments: e.departments || [],
                        description: e.description || "",
                        displayComments: e.displaycomments || !1,
                        externalLinks: e.externalLinks || [],
                        flag: e.flag || "",
                        headline: e.headline || "",
                        highlights: e.highlights || {},
                        id: e.id,
                        intlinks: e.intlinks || [],
                        newsletter: e.newsletter || !1,
                        publishedAt: parseInt(e.publishedAt) || 0,
                        publishedAtVerbal: (0, c.W)(e.publishedAt) || "",
                        source: e.source || "",
                        type: e.type,
                        updatedAt: parseInt(e.updatedAt) || 0,
                        url: e.url || "",
                        language: e.language || ""
                    });
                    if (e.advertising && (e.advertising.exclusions && (r.adExclusions = (0, a.aX)(e.advertising.exclusions)), e.advertising.categorization)) {
                        var l = e.advertising.categorization.channels;
                        l && Object.entries(l).length > 0 && (r.gs_categories = function(e) {
                            return Array.from(e.reduce((function(e, t) {
                                return e.add(f(t.name))
                            }), new Set))
                        }(l), r.gs_keywords = function(e) {
                            return Array.from(e.reduce((function(e, t) {
                                return t.matchterms.reduce((function(e, t) {
                                    return e.add(f(t))
                                }), e)
                            }), new Set))
                        }(l))
                    }(e.mediaid && (r.mediaid = e.mediaid), "segment" === e.type) && (r.episode = (0, i.Z)(e.episode, ["episode"]) || {}, r.segments = (null === (n = e.episode) || void 0 === n || null === (n = n.episode) || void 0 === n ? void 0 : n.segments) || []);
                    "episode" === e.type && (r.segments = e.segments || []), "sponsoredcontent" === e.type && (r.sponsorBio = e.sponsor || {}), r.tags = e.tags || [], r.concepts = e.concepts || [], r.keywords = {
                        tags: r.tags,
                        concepts: r.concepts
                    }, r.subject = r.concepts.filter((function(e) {
                        return "subject" === e.type
                    })).map((function(e) {
                        return {
                            type: e.type,
                            name: e.path
                        }
                    })), /\preview\//.test(e.url) && (r.isPreview = !0), Number.isInteger(e.wordcount) && (r.wordcount = e.wordcount || 0);
                    var p = [];
                    return e.hasaudio && p.push("audio"), e.hasvideo && p.push("video"),
                        function(e) {
                            var t, n;
                            if ("Image" === (null === e || void 0 === e || null === (t = e.leadMedia) || void 0 === t ? void 0 : t.__typename)) return !0;
                            var r = !1;
                            return null !== e && void 0 !== e && null !== (n = e.body) && void 0 !== n && n.length && (r = e.body.some((function(e) {
                                return Array.isArray(null === e || void 0 === e ? void 0 : e.content) && e.content.some((function(e) {
                                    return e.type === s.xh
                                }))
                            }))), r
                        }(e) && p.push("photo"), e.hasgallery && p.push("photogallery"), r.embedtypes = p, e.tracking && (r.subsection1 = e.tracking.subSection1 || "", r.subsection2 = e.tracking.subSection2 || "", r.subsection3 = e.tracking.subSection3 || "", r.subsection4 = e.tracking.subSection4 || "", r.contentarea = e.tracking.contentArea || ""), r
                }
        },
        46484: (e, t, n) => {
            n.d(t, {
                D2: () => f,
                Ps: () => u,
                Wh: () => v,
                fo: () => p,
                ks: () => d,
                yZ: () => g
            });
            n(2041), n(95566), n(2612), n(23744), n(84350), n(89891), n(35275), n(85095), n(61399), n(57273), n(50791), n(39752), n(20816), n(75152), n(28997), n(23433), n(54367), n(46900), n(69898), n(9867), n(7231);
            var r = n(41550),
                i = n(85065),
                o = n(13126),
                a = n(88101),
                c = n(69720),
                s = n(30091),
                l = n(25234),
                u = function(e) {
                    return !("string" !== typeof e || !e.match(/^(1|9)\.[0-9]+$/))
                };

            function d(e) {
                if (e) return function(e) {
                    if (!e) return;
                    return e.map((function(e) {
                        var t = e.name;
                        return t ? t.replace(/[^a-zA-Z0-9-_]/g, "-") : t
                    }))
                }(e).concat(function(e) {
                    if (!e) return;
                    return Array.from(e.reduce((function(e, t) {
                        var n = (null === t || void 0 === t ? void 0 : t.name) || "";
                        return e.add(n.split("/")[0].replace(/[^a-zA-Z0-9-_]/g, "-"))
                    }), new Set))
                }(e))
            }
            var p = function(e) {
                    var t, n, u, d, p, f, v, g = e.departments && e.departments.length ? e.departments[0].name : "",
                        m = "sponsoredcontent" === e.type,
                        b = m ? (null === e || void 0 === e || null === (t = e.sponsor) || void 0 === t || null === (t = t.image) || void 0 === t || null === (t = t.title) || void 0 === t || null === (n = t.toLowerCase) || void 0 === n || null === (n = n.call(t)) || void 0 === n || null === (u = n.search) || void 0 === u ? void 0 : u.call(n, "logo")) > -1 ? null === e || void 0 === e || null === (d = e.sponsor) || void 0 === d || null === (d = d.image) || void 0 === d || null === (d = d.title) || void 0 === d || null === (p = d.slice) || void 0 === p ? void 0 : p.call(d, 0, -5) : null === e || void 0 === e || null === (f = e.sponsor) || void 0 === f || null === (f = f.image) || void 0 === f ? void 0 : f.title : "",
                        h = e.headline || (0, l.ID)(e) || e.title || "",
                        y = m ? "Sponsor Content with ".concat(b, ": ").concat(h, " | CBC") : "".concat(h, " | CBC ").concat(g),
                        O = e.flag ? (v = e.flag.toUpperCase()) && r.xA.includes(v) ? "".concat(v, " | ") : "" : "",
                        j = m ? y : "".concat(O).concat(e.shareHeadline || h, " | CBC ").concat(g),
                        w = e.schema,
                        x = e.id,
                        P = e.vfsection || "",
                        C = (0, a.wT)((0, a.ch)(e.url)),
                        S = (0, c.Ij)(e) || (0, c.u9)(e),
                        I = e.description || e.biography || "",
                        T = e.fbpages || i.h6,
                        D = (0, s.getVfUrl)(C);
                    return {
                        pageTitle: y,
                        meta: (0, o.vU)({
                            "vf:container_id": x,
                            "vf:section": P,
                            "vf:url": D,
                            "og:url": C,
                            "og:title": j,
                            "og:image": S,
                            "og:description": I,
                            description: I,
                            "og:type": "article",
                            "twitter:card": "summary_large_image",
                            "twitter:site": "@cbc",
                            "twitter:title": j,
                            "twitter:image": S,
                            "twitter:description": I,
                            "fb:pages": T,
                            canonical: C,
                            jsonld: w
                        })
                    }
                },
                f = function(e) {
                    return "Live" === e
                },
                v = function(e) {
                    return /^\d+$/.test(e)
                },
                g = function(e) {
                    return /^\d\.\d+$/.test(e)
                }
        },
        69720: (e, t, n) => {
            n.d(t, {
                Ft: () => d,
                Ij: () => c,
                l1: () => u,
                t1: () => p,
                u9: () => s,
                xR: () => l
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(41550);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var c = function(e) {
                    var t;
                    return e && "authorbio" === e.type && (null === (t = e.photo) || void 0 === t || null === (t = t.derivatives) || void 0 === t || null === (t = t.square_140) || void 0 === t ? void 0 : t.fileurl) || ""
                },
                s = function(e) {
                    var t;
                    return null !== e && void 0 !== e && null !== (t = e.image) && void 0 !== t && null !== (t = t.aspects) && void 0 !== t && null !== (t = t.ratio16x9) && void 0 !== t && t.url ? "".concat(e.image.aspects.ratio16x9.url, "Resize%3D620") : i.TF
                },
                l = function(e) {
                    var t, n;
                    if (null === e || void 0 === e || !e.leadMedia || "Image" !== (null === (t = e.leadMedia) || void 0 === t ? void 0 : t.__typename)) return null;
                    var r = e.leadMedia,
                        o = "";
                    return null !== r && void 0 !== r && r.useOriginalImage ? o = r.url : null !== r && void 0 !== r && null !== (n = r.aspects) && void 0 !== n && null !== (n = n.ratio16x9) && void 0 !== n && n.url && (o = "".concat(r.aspects.ratio16x9.url, "Resize%3D780")), o ? {
                        title: (null === r || void 0 === r ? void 0 : r.title) || i.Oc.title,
                        credit: (null === r || void 0 === r ? void 0 : r.credit) || i.Oc.credit,
                        url: o || i.Oc.url,
                        showcaption: !!(null !== r && void 0 !== r && r.description || null !== r && void 0 !== r && r.credit),
                        description: (null === r || void 0 === r ? void 0 : r.description) || i.Oc.description,
                        type: "leadmedia-story",
                        mass: "full",
                        alt: (null === r || void 0 === r ? void 0 : r.altText) || i.Oc.alt,
                        isAboveFold: i.Oc.isAboveFold
                    } : null
                },
                u = function(e) {
                    var t, n, r, o;
                    if (null === e || void 0 === e || !e.leadMedia) return null;
                    var c = e.leadMedia;
                    return "video" !== (null === c || void 0 === c ? void 0 : c.type) && "audio" !== (null === c || void 0 === c ? void 0 : c.type) && "media" !== (null === c || void 0 === c ? void 0 : c.type) || !c.sourceId || isNaN(null === (t = c.media) || void 0 === t ? void 0 : t.duration) ? null : a(a({}, i.Fv), {}, {
                        clipID: c.sourceId,
                        runtime: Number(c.media.duration),
                        description: c.description,
                        title: c.title,
                        thumbnail: null !== c && void 0 !== c && null !== (n = c.image) && void 0 !== n && null !== (n = n.aspects) && void 0 !== n && null !== (n = n.ratio16x9) && void 0 !== n && n.url ? "".concat(c.image.aspects.ratio16x9.url, "Resize%3D620") : "",
                        airDate: Number(c.publishedAt) || 0,
                        captions: {
                            src: null === (r = c.media) || void 0 === r ? void 0 : r.hasCaptions
                        },
                        categories: c.categories,
                        mediatype: c.type,
                        liveondemand: null === (o = c.media) || void 0 === o ? void 0 : o.streamType,
                        showName: c.showName,
                        source: c.source
                    })
                },
                d = function(e) {
                    var t, n, r, o, c;
                    if (!e) return null;
                    var s = null;
                    return e.episodemedia ? s = e.episodemedia : e.segmentmedia && (s = e.segmentmedia), !s || !s.sourceId && isNaN(null === (t = s.media) || void 0 === t ? void 0 : t.duration) ? null : a(a({}, i.zV), {}, {
                        runtime: Number(null === (n = s.media) || void 0 === n ? void 0 : n.duration),
                        clipID: s.sourceId || "",
                        description: s.description || "",
                        title: s.title,
                        thumbnail: null !== (r = s.image) && void 0 !== r && null !== (r = r.aspects) && void 0 !== r && null !== (r = r.ratio16x9) && void 0 !== r && r.url ? "".concat(s.image.aspects.ratio16x9.url, "Resize%3D620") : "",
                        airDate: Number(s.publishedAt) || 0,
                        captions: {
                            src: null === (o = s.media) || void 0 === o ? void 0 : o.hasCaptions
                        },
                        showName: s.showName,
                        mediatype: s.type,
                        liveondemand: null === (c = s.media) || void 0 === c ? void 0 : c.streamType,
                        source: s.source,
                        autoPlay: !0
                    })
                },
                p = function(e) {
                    var t, n, r, o, c;
                    if (!e) return null;
                    if ("photogallery" !== e.type && "photogallery" !== (null === (t = e.leadMedia) || void 0 === t ? void 0 : t.type)) return null;
                    var s = "photogallery" === e.type && e.id || "photogallery" === (null === (n = e.leadMedia) || void 0 === n ? void 0 : n.type) && (null === (r = e.leadMedia) || void 0 === r ? void 0 : r.sourceId) || "",
                        l = "photogallery" === e.type ? null === e || void 0 === e || null === (o = e.photoGallery) || void 0 === o ? void 0 : o.aspectRatio : null === (c = e.leadMedia) || void 0 === c || null === (c = c.photoGallery) || void 0 === c ? void 0 : c.aspectRatio;
                    return a(a({}, i.TY), {}, {
                        id: s,
                        aspectRatio: l
                    })
                }
        },
        14918: (e, t, n) => {
            n.d(t, {
                TP: () => r,
                d0: () => i,
                fi: () => o
            });
            n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703);
            var r = {
                    standard: {
                        description: null
                    },
                    headline: {
                        imageURL: null,
                        description: null,
                        author: null
                    },
                    listing: {},
                    listing_horizontal: {
                        author: null
                    },
                    condensed: {
                        imageURL: null,
                        flag: null,
                        description: null
                    },
                    condensed_square_thumb: {
                        description: null
                    },
                    horizontal: {
                        flag: null,
                        description: null
                    },
                    discovery: {
                        description: null,
                        updateTime: null
                    },
                    minimal: {
                        description: null,
                        flag: null,
                        departments: null,
                        updateTime: null
                    },
                    text_with_link: {
                        flag: null,
                        departments: null,
                        updateTime: null,
                        author: null,
                        imageURL: null
                    }
                },
                i = new Map([
                    ["television", ["author", "updateTime"]],
                    ["radio", ["author"]],
                    ["life", ["author"]],
                    ["home", ["author", "updateTime"]],
                    ["documentaries", ["author", "updateTime"]],
                    ["archives", ["author"]]
                ]),
                o = new Map([
                    ["player", ["author", "flag"]]
                ])
        },
        51591: (e, t, n) => {
            n.d(t, {
                W: () => v,
                h: () => f
            });
            n(58109), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = (n(2041), n(95566), n(2612), n(9867), n(7231), n(54799)),
                o = n(88101),
                a = n(14918),
                c = n(72663),
                s = n(73457),
                l = n(57241);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = function(e) {
                    var t, n, r = e.departments,
                        i = e.show;
                    return null !== r && void 0 !== r && null !== (t = r.sectionLabels) && void 0 !== t && t.length || null !== r && void 0 !== r && null !== (n = r.sectionList) && void 0 !== n && n.length ? e.departments : {
                        sectionLabels: [i],
                        sectionList: [i]
                    }
                },
                f = function(e, t, n) {
                    t = function(e) {
                        return e.name === s.zg ? e = d(d({}, e), {}, {
                            variant: c.v.HORIZONTAL
                        }) : e.name === s.i1 && (e = d(d({}, e), {}, {
                            variant: c.v.MINIMAL
                        })), e
                    }(t);
                    var r, i = function(e) {
                            var t = a.d0.get(e);
                            if (!t) {
                                var n, r, i = null !== (n = null === e || void 0 === e ? void 0 : e.split("/")[0]) && void 0 !== n ? n : "";
                                t = null !== (r = a.fi.get(i)) && void 0 !== r ? r : []
                            }
                            return t.reduce((function(e, t) {
                                return t ? (e[t] = null, e) : e
                            }), {})
                        }(n),
                        u = (r = t.variant, a.TP[r] || {}),
                        f = (0, o.Dr)(n),
                        v = (0, o.Pm)(n, 1);
                    return e.map((function(e) {
                        var n, r;
                        return d(d(d(d({}, e), {}, {
                            image: {
                                url: e.imageURL,
                                srcset: (0, l.ip)(e.image),
                                aspects: {
                                    ratio1x1: {
                                        url: null === (n = e.image) || void 0 === n || null === (n = n.aspects) || void 0 === n || null === (n = n.ratio1x1) || void 0 === n ? void 0 : n.url
                                    },
                                    ratio16x9: {
                                        url: null === (r = e.image) || void 0 === r || null === (r = r.aspects) || void 0 === r || null === (r = r.ratio16x9) || void 0 === r ? void 0 : r.url
                                    }
                                }
                            },
                            departments: p(e)
                        }, u), i), {}, {
                            variant: t.variant,
                            baseSection: f,
                            subSection: v
                        })
                    }))
                },
                v = function(e, t) {
                    var n, r;
                    if (e) {
                        var o = e.type,
                            a = e.sourceId,
                            c = e.pageWidget;
                        if (o && a && null !== c && void 0 !== c && null !== (n = c.metadata) && void 0 !== n && n.layout && null !== c && void 0 !== c && c.payload) {
                            var s = t.path,
                                l = c.metadata,
                                u = l.layout,
                                p = l.query,
                                v = null !== (r = null === p || void 0 === p ? void 0 : p.lineupSlug) && void 0 !== r ? r : "",
                                g = (0, i.H9)(c.payload.items, v);
                            return g = f(g, u, s), {
                                type: o,
                                sourceId: a,
                                pageWidget: d(d({}, c), {}, {
                                    payload: {
                                        items: g
                                    }
                                })
                            }
                        }
                    }
                }
        },
        72663: (e, t, n) => {
            n.d(t, {
                v: () => r
            });
            var r = function(e) {
                return e.STANDARD = "standard", e.HEADLINE = "headline", e.LISTING = "listing", e.LISTING_HORIZONTAL = "listing_horizontal", e.CONDENSED = "condensed", e.CONDENSED_SQUARE_THUMB = "condensed_square_thumb", e.HORIZONTAL = "horizontal", e.DISCOVERY = "discovery", e.MINIMAL = "minimal", e.TEXT_WITH_LINK = "text_with_link", e
            }({})
        },
        51773: (e, t, n) => {
            n.d(t, {
                LN: () => d,
                N$: () => a,
                Wr: () => l,
                cl: () => s,
                fl: () => i,
                pX: () => u,
                w_: () => o,
                y_: () => r,
                yu: () => c
            });
            var r = "stub",
                i = ["nonpolopolyURL", r],
                o = ["audio", "video"],
                a = {
                    communityWidgetCategory: "/community",
                    override: "topstories"
                },
                c = "Normal",
                s = "Coming Up",
                l = "relatedlink",
                u = "video",
                d = "bulletpoint"
        },
        4954: (e, t, n) => {
            n.d(t, {
                du: () => P,
                wQ: () => x,
                Ox: () => w
            });
            n(83464), n(19496);
            var r = n(29439),
                i = n(4942),
                o = (n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703), n(9867), n(7231), n(2041), n(95566), n(2612), n(58109), n(68438), n(54799)),
                a = n(90955),
                c = n(57241),
                s = n(41718),
                l = n(51591),
                u = n(93433),
                d = n(84506),
                p = n(60957);

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

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var g = function(e) {
                    switch (null === e || void 0 === e ? void 0 : e.layout) {
                        case p.rg:
                            return p.K4;
                        case p.ll:
                            return p.dz;
                        default:
                            return null === e || void 0 === e ? void 0 : e.layout
                    }
                },
                m = function(e) {
                    return v({
                        type: a.O,
                        key: "content-package-".concat(e.id, "-").concat(e.updatedAt)
                    }, (0, o.H9)([e])[0])
                };

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

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var y = new Map([
                [a.XS, function(e) {
                    var t, n, r;
                    if (!e) return;
                    var i = null === (t = e.wrapper) || void 0 === t || null === (t = t.attribution) || void 0 === t ? void 0 : t.featureInstance;
                    return i = /^[A-Za-z\\-]+$/.test(i) ? i : null, (0, c.QQ)(null === (n = e.lineup) || void 0 === n ? void 0 : n.slug, e.content), e.content = (0, o.H9)(e.content), h(h({}, e), {}, {
                        wrapper: h(h({}, e.wrapper), {}, {
                            attribution: h(h({}, null === (r = e.wrapper) || void 0 === r ? void 0 : r.attribution), {}, {
                                featureInstance: i
                            })
                        })
                    })
                }],
                [a._m, O],
                [a.IK, O],
                [a.OO, function(e) {
                    if (!e || !e.type || !e.sourceId) return;
                    var t = e.pageWidget;
                    if (!t || !t.metadata) return;
                    var n = t.metadata.sponsors || [];
                    return {
                        type: e.type,
                        sourceId: e.sourceId,
                        heading: t.metadata.label || "",
                        sponsorList: n.map((function(e) {
                            var t;
                            return {
                                link: e.url || "",
                                title: e.name || "",
                                imageURL: (null === e || void 0 === e || null === (t = e.logo) || void 0 === t || null === (t = t.aspects) || void 0 === t || null === (t = t.ratioCustom) || void 0 === t ? void 0 : t.url) || ""
                            }
                        }))
                    }
                }],
                [a.bJ, O],
                [a.ms, function(e) {
                    if (!e || !e.type || !e.sourceId) return;
                    var t = e.pageWidget;
                    if (!t || !t.metadata) return;
                    var n = e.sourceId;
                    return h({
                        type: t.metadata.displayType,
                        sourceId: n
                    }, t.metadata)
                }],
                [a.se, O],
                [a.gW, O],
                [a.eo, O],
                [a.Ne, O],
                [a.ei, function(e) {
                    return e && e.type === a.ei && e
                }],
                [a.ar, l.W],
                [a.O, function(e) {
                    return e
                }]
            ]);

            function O(e) {
                if (e && e.type && e.sourceId) {
                    var t = e.pageWidget;
                    if (t && t.metadata) return h({
                        type: e.type,
                        sourceId: e.sourceId
                    }, t.metadata)
                }
            }
            var j = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return function(n, r) {
                        return w(n, r, e, t)
                    }
                },
                w = function(e, t, n) {
                    if (!t) return e;
                    var r = t.type,
                        i = y.get(r);
                    if (i) {
                        var o, a = null !== (o = i(t, n)) && void 0 !== o ? o : null;
                        null !== a ? e.push(a) : s.default.error("(reduceContent) Unable to parse item")
                    }
                    return e
                },
                x = function(e) {
                    if (e.sections) return e.sections.map((function(t) {
                        var n = t.main,
                            r = t.right;
                        return (n = function(e) {
                            var t, n;
                            if (null !== e && void 0 !== e && null !== (t = e.content) && void 0 !== t && null !== (t = t[0]) && void 0 !== t && null !== (t = t.wrapper) && void 0 !== t && t.displayContentPackage && null !== e && void 0 !== e && null !== (n = e.content) && void 0 !== n && null !== (n = n[0]) && void 0 !== n && null !== (n = n.content) && void 0 !== n && null !== (n = n[0]) && void 0 !== n && null !== (n = n.components) && void 0 !== n && n.mainContent) {
                                var r = (0, d.Z)(e.content),
                                    i = r[0],
                                    o = r.slice(1),
                                    a = (0, d.Z)(i.content),
                                    c = a[0],
                                    s = a.slice(1);
                                return v(v({}, e), {}, {
                                    layout: g(e),
                                    content: [m(c), v(v({}, i), {}, {
                                        content: s
                                    })].concat((0, u.Z)(o))
                                })
                            }
                            return e
                        }(n)).content = n.content && n.content.reduce(j(e, n.layout), []), r.content = r.content && r.content.reduce(j(e), []), {
                            main: n,
                            right: r
                        }
                    }))
                },
                P = function(e, t) {
                    if (e && Array.isArray(e) && !(e.length < 1) && t && !(Object.keys(t).length < 1)) return Object.entries(e).map((function(e) {
                        var n, i = (0, r.Z)(e, 2),
                            a = (i[0], i[1]),
                            s = null === t || void 0 === t || null === (n = t[a.lineupID]) || void 0 === n ? void 0 : n.nodes;
                        if (!s) return null;
                        (0, c.QQ)(a.lineupSlug, s);
                        var l = (0, o.H9)(s);
                        return h(h({}, a), {}, {
                            list: l
                        })
                    })).filter((function(e) {
                        return null !== e
                    }))
                }
        },
        54799: (e, t, n) => {
            n.d(t, {
                H9: () => x,
                HJ: () => I,
                VV: () => C,
                zN: () => T,
                lO: () => N,
                _9: () => D,
                Cj: () => P,
                gr: () => w,
                Qk: () => S
            });
            var r = n(4942),
                i = (n(9867), n(7231), n(58109), n(95566), n(68438), n(58949), n(2041), n(2612), n(83464), n(19496), n(40627)),
                o = n(51773),
                a = n(64323),
                c = n(88101),
                s = n(57241),
                l = n(78116),
                u = n(67530),
                d = n(41718),
                p = n(68369),
                f = n(32154),
                v = n(57018);

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

            function m(e) {
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

            function b(e) {
                var t, n;
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case u.GD:
                    case u.nt:
                    case u.Nq:
                        return h(e, {
                            wordCount: (null === e || void 0 === e ? void 0 : e.wordcount) || void 0
                        });
                    case u.p0:
                        return h(e, m({
                            wordCount: (null === e || void 0 === e ? void 0 : e.wordcount) || void 0
                        }, function(e) {
                            if (null === e || void 0 === e || !e.name || null === e || void 0 === e || !e.link) return {};
                            return {
                                sponsor: m(m({}, f.Rm.Organization), {}, {
                                    name: e.name,
                                    logo: (0, v.G$)(null === e || void 0 === e ? void 0 : e.image, "ratioCustom"),
                                    url: null === e || void 0 === e ? void 0 : e.link
                                })
                            }
                        }(null === e || void 0 === e ? void 0 : e.sponsor)));
                    case u.X0:
                        return h(e, y(null === e || void 0 === e || null === (t = e.episode) || void 0 === t ? void 0 : t.media));
                    case u.ec:
                        return h(e, y(null === e || void 0 === e || null === (n = e.segment) || void 0 === n ? void 0 : n.media));
                    default:
                        return null
                }
            }

            function h(e) {
                var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return m(m(m(m(m(m(m({}, f.iK[e.type]), function(e) {
                    var t, n = e.title,
                        r = e.description,
                        i = e.deck,
                        o = e.publishedAt,
                        a = e.updatedAt,
                        c = e.image,
                        s = e.authors;
                    return {
                        "@context": "https://schema.org",
                        name: (0, v.Bf)(n),
                        alternateName: (0, v.Bf)(i || r || ""),
                        headline: (0, v.Bf)(n || ""),
                        description: (0, v.Bf)(r || ""),
                        datePublished: (0, v.xT)(o),
                        dateModified: (0, v.xT)(a),
                        thumbnailUrl: (null === c || void 0 === c || null === (t = c.aspects) || void 0 === t || null === (t = t.ratio16x9) || void 0 === t ? void 0 : t.url) || "",
                        publisher: m({}, f.A_),
                        author: (0, v.sI)(s)
                    }
                }(e)), function(e) {
                    if (!e) return {};
                    if ("Image" === (null === e || void 0 === e ? void 0 : e.__typename)) return {
                        image: [(0, v.G$)(e)]
                    };
                    if ("video" === (null === e || void 0 === e ? void 0 : e.type) || "audio" === (null === e || void 0 === e ? void 0 : e.type)) return (0, r.Z)({}, e.type, [(0, v.kh)(e)]);
                    if ("photogallery" === (null === e || void 0 === e ? void 0 : e.type)) return {};
                    var t = "unhandled LeadMedia ".concat(null === e || void 0 === e ? void 0 : e.type, " type");
                    return d.default.error("(getLeadMediaSchemaForJsonLd) ".concat(t), new Error(t)), {}
                }(null === e || void 0 === e ? void 0 : e.leadMedia)), function(e) {
                    var t, n = null === e || void 0 === e || null === (t = e[0]) || void 0 === t || null === (t = t.content) || void 0 === t ? void 0 : t[0];
                    if (!n) return {};
                    var i = n.type,
                        o = n.content;
                    if (i === p.xh) return {
                        image: [(0, v.G$)(o, "ratioCustom")]
                    };
                    if (i === p._e) {
                        var a = (null === o || void 0 === o ? void 0 : o.type) || "video";
                        return (0, r.Z)({}, a, [(0, v.kh)(o)])
                    }
                    if (i === p.$C) return {};
                    return {}
                }(null === e || void 0 === e || null === (t = e.body) || void 0 === t ? void 0 : t.parsed)), function(e) {
                    if (!e || "string" !== typeof e) return {};
                    var t = e.split("/");
                    return {
                        articleSection: t[t.length - 1]
                    }
                }(null === e || void 0 === e || null === (n = e.section) || void 0 === n ? void 0 : n.path)), i), {}, {
                    "@id": null === e || void 0 === e ? void 0 : e.url
                })
            }

            function y(e) {
                return e ? {
                    associatedMedia: [(0, v.kh)(e)]
                } : {}
            }

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

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function w(e) {
                return e.filter((function(e) {
                    return (0, s.LF)(e)
                })).map((function(e) {
                    return function(e) {
                        var t = e.sourceId,
                            n = e.image,
                            r = e.title,
                            o = (0, c.wT)(e.href),
                            a = (0, s.jj)(o),
                            l = e.flag,
                            u = e.rank,
                            d = e.count,
                            p = e.countSrs,
                            f = !1,
                            v = e.variant;
                        return {
                            sourceId: t,
                            imageURL: n,
                            title: r,
                            url: o,
                            departments: a,
                            flag: l,
                            itemType: i.YC,
                            external: !1,
                            rank: u,
                            count: d,
                            countSrs: p,
                            showImage: f,
                            variant: v
                        }
                    }(e)
                }))
            }

            function x(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return e.map((function(e) {
                    var n, r, i, l, u, d = (0, s.YP)(e.sectionList),
                        p = (0, s.yY)(e, d),
                        f = (0, s.QU)(e.imageLarge),
                        v = p ? e.url : (0, c.wP)(e.url),
                        g = e.flag,
                        m = {
                            status: null === (n = e.flags) || void 0 === n ? void 0 : n.status,
                            label: null === (r = e.flags) || void 0 === r ? void 0 : r.label
                        },
                        b = e.title;
                    if (t) {
                        var h = (0, s.bq)(t, e.contextualOverrides);
                        h && (h.headline && (b = h.headline), h.flag && (m.label = h.flag))
                    }
                    if ((null === (i = e.authors) || void 0 === i ? void 0 : i.length) > 0) {
                        var y, O = null !== e && void 0 !== e && null !== (y = e.authors) && void 0 !== y && null !== (y = y[0]) && void 0 !== y && null !== (y = y.photo) && void 0 !== y && null !== (y = y.aspects) && void 0 !== y && null !== (y = y.ratio1x1) && void 0 !== y && y.url ? "".concat(e.authors[0].photo.aspects.ratio1x1.url, "Resize%3D114") : "";
                        u = {
                            name: e.authors[0].name,
                            image: O
                        }
                    }
                    var w, x, P, C, S, I, T, D = null,
                        N = null,
                        k = "",
                        A = null,
                        E = !1,
                        _ = null;
                    D || "video" !== e.type || (k = o.yu, D = null !== (w = e.sourceId) && void 0 !== w ? w : e.mediaId, N = null !== (x = null === (P = e.media) || void 0 === P ? void 0 : P.duration) && void 0 !== x ? x : null, A = Number(e.publishedAt), E = null !== (C = null === (S = e.media) || void 0 === S ? void 0 : S.hasCaptions) && void 0 !== C && C, _ = null !== (I = null === (T = e.media) || void 0 === T ? void 0 : T.streamType) && void 0 !== I ? I : null);
                    D && "video" === e.type && (v = "".concat(a.Iz, "video/").concat(D)), k === o.yu && g.includes(o.cl) && (g = "");
                    var L = ["(not applicable)", "(not specified)"].includes(null === (l = e.showName) || void 0 === l ? void 0 : l.toLowerCase()) ? null : e.showName,
                        Z = (0, s.d1)("card", e.sourceId),
                        R = "livestory" === e.type ? e.deck : e.description;
                    return j(j({
                        id: e.id,
                        contentId: e.id,
                        url: v,
                        itemURL: e.url,
                        departments: {
                            sectionList: e.sectionList,
                            sectionLabels: e.sectionLabels
                        },
                        category: e.sectionList ? e.sectionList[e.sectionList.length - 1] : "",
                        relatedLinks: e.relatedLinks,
                        description: R,
                        flag: g,
                        flags: m,
                        imageURL: f,
                        image: e.image || {
                            url: null === e || void 0 === e ? void 0 : e.imageLarge
                        },
                        insertAd: e.insertAd ? e.insertAd : void 0,
                        publishTime: Number(e.publishedAt),
                        updateTime: Number(e.updatedAt),
                        sourceId: e.sourceId,
                        source: e.source,
                        slug: (0, s.QF)(v),
                        title: b,
                        itemType: e.type,
                        show: L,
                        author: u,
                        displayComments: e.commentsEnabled,
                        videoId: D,
                        videoCardOverlayType: k,
                        videoDuration: N,
                        videoAirDate: A,
                        videoTitle: "",
                        videoHasCaptions: E,
                        videoStreamType: _,
                        external: p
                    }, Z), function(e) {
                        var t, n, r, i, o, a, l;
                        if (!e || !e.components) return;
                        var u = null === e || void 0 === e ? void 0 : e.components,
                            d = u.mainContent,
                            p = u.mainVisual,
                            f = (0, s.QF)(d.url),
                            v = d.sourceId,
                            g = d.url,
                            m = d.sectionList,
                            b = (0, s.YP)(m),
                            h = "stub" === d.type || (0, s.yY)(e, b),
                            y = (0, c.$t)(h, g, {
                                urlCategory: b,
                                slug: f,
                                sourceId: v
                            }),
                            O = null !== (t = null === p || void 0 === p ? void 0 : p.sourceId) && void 0 !== t ? t : null === p || void 0 === p ? void 0 : p.mediaId,
                            j = null !== (n = Number(null === p || void 0 === p ? void 0 : p.publishedAt)) && void 0 !== n ? n : null,
                            w = null !== (r = null === p || void 0 === p || null === (i = p.media) || void 0 === i ? void 0 : i.duration) && void 0 !== r ? r : null,
                            x = null !== (o = null === p || void 0 === p ? void 0 : p.title) && void 0 !== o ? o : "",
                            P = null !== (a = null === p || void 0 === p || null === (l = p.media) || void 0 === l ? void 0 : l.streamType) && void 0 !== a ? a : null,
                            C = p && p.imageLarge || e.imageLarge || d.imageLarge,
                            S = C && (0, s.QU)(C) || "",
                            I = e.description ? "" : e.deck,
                            T = {
                                slug: f,
                                description: I,
                                sourceId: v,
                                contentId: parseFloat(v),
                                itemURL: g,
                                sectionList: m,
                                urlCategory: b,
                                url: y,
                                packageComponents: (0, s.W$)(u),
                                videoId: O,
                                videoAirDate: j,
                                videoDuration: w,
                                videoTitle: x,
                                videoStreamType: P,
                                external: h,
                                imageURL: S
                            };
                        return Object.keys(T).reduce((function(e, t) {
                            return void 0 !== T[t] && (e[t] = T[t]), e
                        }), {})
                    }(e))
                }))
            }

            function P(e) {
                return e.map((function(e) {
                    return function(e) {
                        var t = e.typeAttributes || {},
                            n = e.id,
                            r = t.sectionList,
                            i = e.category0,
                            a = e.description,
                            l = t.flag,
                            u = t.author,
                            d = {
                                sectionLabels: t.sectionLabels,
                                sectionList: r
                            },
                            p = t.relatedLinks,
                            f = e.dominantimage,
                            v = e.publishtime ? new Date(e.publishtime).getTime() : 0,
                            g = "Polopoly",
                            m = e.sourceId,
                            b = e.title,
                            h = (0, s.QF)(t.url),
                            y = e["cbc-mediaid"] ? "video" : "story",
                            O = v,
                            j = t.url,
                            w = e.focus,
                            x = e.insertAd,
                            P = t.show,
                            C = e.url,
                            S = (0, s.hf)(C);
                        S || (C = (0, c.wP)(C));
                        var I = "";
                        "video" === y && (I = o.yu);
                        return {
                            id: n,
                            external: S,
                            url: C,
                            category: i,
                            departments: d,
                            relatedLinks: p,
                            description: a,
                            flag: l,
                            imageURL: f,
                            publishTime: v,
                            source: g,
                            sourceId: m,
                            slug: h,
                            title: b,
                            itemType: y,
                            updateTime: O,
                            itemURL: j,
                            focus: w,
                            insertAd: x,
                            show: P,
                            author: u,
                            videoCardOverlayType: I
                        }
                    }(e)
                }))
            }

            function C(e) {
                return e.map((function(e, t) {
                    return function(e, t) {
                        var n = e.value,
                            r = "autocomplete-item".concat(t);
                        return {
                            value: n,
                            id: r
                        }
                    }(e, t)
                }))
            }

            function S(e) {
                return e.map((function(e) {
                    return function(e) {
                        var t, n, r, i, o, l, u, d, p, f, v, g, m = e.id,
                            b = null === (t = e.typeAttributes) || void 0 === t ? void 0 : t.sectionList,
                            h = (0, s.YP)(b),
                            y = (0, s.yY)(e, h),
                            O = b && 0 !== b.length ? b[b.length - 1] : "",
                            w = e.id,
                            x = e.description,
                            P = null === (n = e.typeAttributes) || void 0 === n ? void 0 : n.flag,
                            C = null === (r = e.typeAttributes) || void 0 === r ? void 0 : r.author,
                            S = {
                                sectionLabels: null === (i = e.typeAttributes) || void 0 === i ? void 0 : i.sectionLabels,
                                sectionList: b
                            },
                            I = null === (o = e.typeAttributes) || void 0 === o ? void 0 : o.relatedLinks,
                            T = (0, s.QU)(null === (l = e.typeAttributes) || void 0 === l ? void 0 : l.imageLarge),
                            D = e.source,
                            N = e.publishedAt,
                            k = e.sourceId,
                            A = e.title,
                            E = e.type,
                            _ = (0, s.QF)(null === (u = e.typeAttributes) || void 0 === u ? void 0 : u.url),
                            L = e.updatedAt,
                            Z = null === (d = e.typeAttributes) || void 0 === d ? void 0 : d.url,
                            R = e.focus,
                            H = e.insertAd,
                            M = null === (p = e.typeAttributes) || void 0 === p ? void 0 : p.show,
                            B = null === (f = e.typeAttributes) || void 0 === f ? void 0 : f.displayComments,
                            U = (0, c.$t)(y, Z, {
                                urlCategory: h,
                                slug: _,
                                sourceId: k
                            }),
                            z = null,
                            V = null,
                            F = null,
                            q = null,
                            $ = null,
                            W = null === (v = e.typeAttributes) || void 0 === v ? void 0 : v.headline;
                        if (W && "video" === W.type) {
                            var Y;
                            g = "Normal", z = null !== (Y = W.sourceId) && void 0 !== Y ? Y : W.mediaId, V = W.mediaDuration ? W.mediaDuration : 0, F = Number(W.publishedAt), q = W.title, $ = 0 === V ? "Live" : "On-Demand"
                        }
                        if (!z && "video" === E) {
                            var G, Q, K, X;
                            g = "Normal", z = e.sourceId, V = null !== (G = null === (Q = e.typeAttributes) || void 0 === Q || null === (Q = Q.media) || void 0 === Q ? void 0 : Q.duration) && void 0 !== G ? G : null, F = Number(e.publishedAt), $ = null !== (K = null === (X = e.typeAttributes) || void 0 === X || null === (X = X.media) || void 0 === X ? void 0 : X.streamType) && void 0 !== K ? K : null
                        }
                        z && "video" === E && (U = "".concat(a.Iz, "video/").concat(z));
                        "Normal" === g && ["Coming Up"].includes(P) && (P = "");
                        return function(e, t) {
                            var n, r, i, o, a, l, u = null === (n = e.typeAttributes) || void 0 === n ? void 0 : n.components,
                                d = "";
                            if (!u) return t;
                            e.description || (d = null === (l = e.typeAttributes) || void 0 === l ? void 0 : l.deck);
                            var p = e.typeAttributes.components.mainContent || {},
                                f = null === (r = p.typeAttributes) || void 0 === r ? void 0 : r.url,
                                v = (0, s.QF)(null === (i = p.typeAttributes) || void 0 === i ? void 0 : i.url),
                                g = null === (o = p.typeAttributes) || void 0 === o ? void 0 : o.sectionList,
                                m = p.sourceId,
                                b = (0, s.YP)(g),
                                h = (0, s.yY)(e, b);
                            "stub" === p.type && (h = !0);
                            var y = (0, c.$t)(h, f, {
                                    urlCategory: b,
                                    slug: v,
                                    sourceId: m
                                }),
                                O = e.typeAttributes.uppercaseHeadline,
                                w = e.typeAttributes.components.mainVisual || {},
                                x = w.type,
                                P = "video" === x ? w.sourceId : null,
                                C = "video" === x ? null === (a = w.typeAttributes) || void 0 === a ? void 0 : a.mediaDuration : null,
                                S = "video" === x ? w.title : null;
                            return j(j({}, t), {}, {
                                slug: v,
                                sourceId: m,
                                itemURL: f,
                                sectionList: g,
                                urlCategory: b,
                                url: y,
                                packageComponents: u,
                                uppercaseHeadline: O,
                                description: d,
                                videoId: P,
                                videoDuration: C,
                                videoTitle: S,
                                external: h
                            })
                        }(e, {
                            id: m,
                            external: y,
                            url: U,
                            category: O,
                            departments: S,
                            relatedLinks: I,
                            contentId: w,
                            description: x,
                            flag: P,
                            imageURL: T,
                            publishTime: N,
                            source: D,
                            sourceId: k,
                            slug: _,
                            title: A,
                            itemType: E,
                            updateTime: L,
                            itemURL: Z,
                            focus: R,
                            insertAd: H,
                            show: M,
                            author: C,
                            displayComments: B,
                            videoId: z,
                            videoDuration: V,
                            videoAirDate: F,
                            videoCardOverlayType: g,
                            videoTitle: q,
                            videoStreamType: $
                        })
                    }(e)
                }))
            }

            function I(e) {
                return e.map((function(e) {
                    return function(e) {
                        var t = e.id,
                            n = "string" === typeof t ? Number(t.replace(/[^0-9]+/g, "")) : t,
                            r = e.sectionList || [],
                            i = e.sectionLabels || [],
                            o = e.categories || [];
                        0 !== r.length && 0 !== i.length || (r = [], i = [], o.forEach((function(e) {
                            r.push(e.slug), i.push(e.name)
                        })));
                        var a = (0, s.YP)(r),
                            c = (0, s.yY)(e, a),
                            l = r && 0 !== r.length ? r[r.length - 1] : "",
                            u = {
                                sectionLabels: i,
                                sectionList: r
                            },
                            d = Number(t),
                            p = e.description,
                            f = e.flag,
                            v = (0, s.QU)(e.imageLarge),
                            g = e.source,
                            m = Number(e.publishedAt),
                            b = "".concat(t),
                            h = e.title,
                            y = e.type,
                            O = (0, s.QF)(e.url),
                            j = Number(e.updatedAt),
                            w = e.url;
                        return {
                            id: n,
                            external: c,
                            url: w,
                            category: l,
                            departments: u,
                            contentId: d,
                            description: p,
                            flag: f,
                            imageURL: v,
                            publishTime: m,
                            source: g,
                            sourceId: b,
                            slug: O,
                            title: h,
                            itemType: y,
                            updateTime: j,
                            itemURL: w
                        }
                    }(e)
                }))
            }
            var T = function(e, t) {
                    var n, r, i, o, a, c, s, u, d, p, f, v, g, m = b(e);
                    return {
                        id: t,
                        deck: e.deck,
                        advertising: e.advertising,
                        attribution: (0, l.zb)(null === (n = e.section) || void 0 === n ? void 0 : n.attributionLevels),
                        authorDisplay: e.authorDisplay,
                        authors: e.authors,
                        tags: e.tags,
                        concepts: e.concepts,
                        body: (null === (r = e.body) || void 0 === r ? void 0 : r.parsed) || [],
                        byline: e.byline,
                        clarifications: e.clarifications,
                        corrections: e.corrections,
                        departments: e.categories,
                        displaycomments: e.commentsEnabled,
                        description: e.description,
                        episode: (null === (i = e.segment) || void 0 === i ? void 0 : i.episode) || null,
                        episodemedia: (null === (o = e.episode) || void 0 === o ? void 0 : o.media) || null,
                        externalLinks: e.externalLinks,
                        flag: e.flag,
                        fbpages: null === (a = e.section) || void 0 === a || null === (a = a.social) || void 0 === a ? void 0 : a.facebookPages,
                        hasaudio: null === (c = e.body) || void 0 === c ? void 0 : c.containsAudio,
                        hasvideo: null === (s = e.body) || void 0 === s ? void 0 : s.containsVideo,
                        hasgallery: null === (u = e.body) || void 0 === u ? void 0 : u.containsPhotogallery,
                        headline: e.title,
                        highlights: e.highlights,
                        image: e.image,
                        intlinks: e.intlinks,
                        language: e.language,
                        leadMedia: e.leadMedia,
                        mediaid: e.mediaid,
                        newsletter: e.newsletter,
                        photoGallery: e.photoGallery,
                        publishedAt: e.publishedAt,
                        schema: null !== (d = null !== m && void 0 !== m ? m : e.jsonLD) && void 0 !== d ? d : {},
                        segments: (null === (p = e.episode) || void 0 === p ? void 0 : p.segments) || null,
                        segmentmedia: (null === (f = e.segment) || void 0 === f ? void 0 : f.media) || null,
                        shareHeadline: e.shareHeadline,
                        source: e.editorialSource,
                        sponsor: e.sponsor,
                        tracking: (null === (v = e.section) || void 0 === v ? void 0 : v.tracking) || {},
                        type: e.type,
                        updatedAt: e.updatedAt,
                        url: e.url || "",
                        vfsection: null === (g = e.section) || void 0 === g || null === (g = g.social) || void 0 === g ? void 0 : g.commentsSection,
                        wordcount: e.wordcount
                    }
                },
                D = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((function(e) {
                        var t = encodeURIComponent("key-".concat(e.stt, "-").concat(e.end, "-").concat(e.ti));
                        return j(j({}, e), {}, {
                            uuid: t
                        })
                    }))
                },
                N = function(e) {
                    var t, n = null === (t = e.data) || void 0 === t || null === (t = t.relatedItems) || void 0 === t || null === (t = t.nodes) || void 0 === t ? void 0 : t.map((function(e) {
                        return {
                            title: e.title,
                            url: e.url
                        }
                    }));
                    return n || []
                }
        },
        57241: (e, t, n) => {
            n.d(t, {
                $I: () => E,
                GH: () => x,
                Jv: () => Z,
                LF: () => C,
                Pp: () => B,
                QF: () => w,
                QQ: () => _,
                QU: () => H,
                W$: () => m,
                Ws: () => V,
                YP: () => I,
                bq: () => F,
                d1: () => P,
                dx: () => A,
                ef: () => L,
                ey: () => U,
                hf: () => D,
                ip: () => q,
                jD: () => z,
                jj: () => S,
                mF: () => M,
                nZ: () => N,
                rq: () => k,
                yY: () => T
            });
            var r = n(4942),
                i = (n(9867), n(7231), n(58109), n(95566), n(68438), n(2041), n(2612), n(53145), n(62153), n(30666), n(6129), n(83464), n(19496), n(51773)),
                o = n(29274),
                a = n(83911),
                c = n(97767),
                s = n(64323),
                l = n(88101),
                u = n(60957);

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

            function p(e) {
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
            var f = function(e) {
                    return {
                        text: e.text
                    }
                },
                v = function(e) {
                    return {
                        key: j(e),
                        url: y(e),
                        external: h(e),
                        title: b(e),
                        flag: O(e)
                    }
                },
                g = function(e) {
                    var t;
                    return {
                        url: y(e),
                        flag: O(e),
                        external: h(e),
                        key: j(e),
                        title: b(e),
                        sourceId: null === e || void 0 === e || null === (t = e.item) || void 0 === t ? void 0 : t.sourceId
                    }
                },
                m = function(e) {
                    return [Array.isArray(null === e || void 0 === e ? void 0 : e.primary) && {
                        primary: {
                            bulletpoints: e.primary.filter((function(e) {
                                return (null === e || void 0 === e ? void 0 : e.type) === i.LN
                            })).map(f),
                            relatedLinks: e.primary.filter((function(e) {
                                return (null === e || void 0 === e ? void 0 : e.type) === i.Wr
                            })).map(v)
                        }
                    }, Array.isArray(null === e || void 0 === e ? void 0 : e.secondary) && {
                        secondary: e.secondary.map(g)
                    }].reduce((function(e, t) {
                        return t ? p(p({}, e), t) : e
                    }), {})
                },
                b = function(e) {
                    var t;
                    return (null === e || void 0 === e ? void 0 : e.localHeadline) || (null === e || void 0 === e || null === (t = e.item) || void 0 === t ? void 0 : t.title)
                },
                h = function(e) {
                    var t;
                    return (null === e || void 0 === e || null === (t = e.item) || void 0 === t ? void 0 : t.type) === i.y_ || !1
                },
                y = function(e) {
                    var t, n, r = (null === e || void 0 === e || null === (t = e.item) || void 0 === t || null === (t = t.typeAttributes) || void 0 === t ? void 0 : t.url) || "";
                    return (null === e || void 0 === e || null === (n = e.item) || void 0 === n ? void 0 : n.type) === i.pX && e.item.sourceId && (r = "".concat(s.Iz, "video/").concat(e.item.sourceId)), r
                },
                O = function(e) {
                    var t, n;
                    return null !== (t = null === e || void 0 === e || null === (n = e.item) || void 0 === n || null === (n = n.typeAttributes) || void 0 === n ? void 0 : n.flag) && void 0 !== t ? t : ""
                },
                j = function(e) {
                    var t, n;
                    return "".concat(null === e || void 0 === e || null === (t = e.item) || void 0 === t ? void 0 : t.sourceId, "-").concat(null === e || void 0 === e || null === (n = e.item) || void 0 === n ? void 0 : n.updatedAt)
                };

            function w(e) {
                if (e) {
                    var t = e.split("/").pop(),
                        n = t.lastIndexOf("-");
                    if (-1 !== n) return t.substring(0, n)
                }
                return ""
            }

            function x() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    "data-contentid": e.sourceId || "",
                    external: e.external || !1,
                    url: e.url || "",
                    onClick: e.cardClickHandler || function() {}
                }
            }

            function P(e, t) {
                var n = "".concat(e, "-").concat(t) || "";
                return {
                    id: n,
                    flagId: "f-".concat(n),
                    headlineId: "h-".concat(n),
                    descriptionId: "d-".concat(n),
                    metadataId: "m-".concat(n)
                }
            }

            function C(e) {
                var t, n = null === (t = e.typeAttributes) || void 0 === t ? void 0 : t.sectionList;
                return !!(!0 === T(e) || n && 0 !== n.length)
            }

            function S(e) {
                var t = e.match(/\/(\w+)\//i).slice(1),
                    n = t.map((function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }));
                return {
                    sectionList: t,
                    sectionLabels: n
                }
            }

            function I(e) {
                return e && void 0 !== e && e.length ? e.reduce((function(e, t) {
                    var n = e;
                    return void 0 !== t && (n += "/".concat(t)), n
                })) : ""
            }

            function T() {
                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    o = n.sourceId && i.w_.includes(n.type),
                    a = "livestory" === n.type;
                if (o || a) return !1;
                var c = i.fl.includes(n.type),
                    s = "stub" === (null === (e = n.components) || void 0 === e || null === (e = e.mainContent) || void 0 === e ? void 0 : e.type),
                    l = r && r.trim(),
                    u = "sponsoredcontent" === n.type && !0 === (null === (t = n.typeAttributes) || void 0 === t || null === (t = t.sponsor) || void 0 === t ? void 0 : t.external);
                return c || s || !l || u
            }

            function D() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (/(gem.cbc.ca|index.html|index.php)/.test(e)) return !0;
                var t = (0, l.wP)(e).replace(/[^/]+$/, "");
                return "/" !== t.slice(0, 1) && (t = "/" + t), "/" !== t.slice(-1) && (t += "/"), !Object.keys(a.Z).some((function(e) {
                    return 0 === t.indexOf("/" + e + "/")
                }))
            }

            function N(e) {
                var t = !(!e.shareHeadline || "" === e.shareHeadline.trim()) && e.shareHeadline;
                return !(!e.title || "" === e.title.trim()) && e.title || t || ""
            }

            function k(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    i = null,
                    a = null,
                    c = r || o.LK;
                return t && (c = o.LK + t), n && (c += o.nJ), Array.isArray(e) && (i = e.slice(0, c), a = e.slice(c, e.length)), [i, a]
            }

            function A(e) {
                var t = c.SA[e];
                return t && t.customNumTopStories ? t.customNumTopStories : o.z0
            }
            var E = function(e, t) {
                    if (t instanceof Array || e) {
                        var n = (0, l.aC)(e);
                        n && _(n, t)
                    }
                },
                _ = function(e, t) {
                    for (var n, r, i, o = t.length; o--;)
                        if (n = t[o], (n = Array.isArray(n.contextualHeadlines) && n.contextualHeadlines.length > 0 && n.contextualHeadlines || n.typeAttributes && n.typeAttributes.contextualHeadlines) instanceof Array)
                            for (r = n.length; r--;)
                                if ((i = n[r]) && i.contextualLineupSlug === e && i.headline) {
                                    t[o].title = i.headline;
                                    break
                                }
                },
                L = function e(t, n) {
                    if ("undefined" === typeof t || !n) return !1;
                    var r = n ? n.indexOf(".") : -1;
                    return r > -1 ? e(t[n.substring(0, r)], n.substr(r + 1)) : t[n]
                },
                Z = function(e, t, n) {
                    return n + 60 * e * 1e3 <= t
                },
                R = function(e) {
                    return /_gen\/derivatives\//.test(e)
                },
                H = function(e) {
                    return R(e) ? e.replace("_620", "_780") : e
                },
                M = function(e) {
                    return R(e) ? e.replace(/\/([0-z]+_\d+)\//, "/square_220/") : e
                },
                B = function(e) {
                    return R(e) ? e.replace("/16x9_", "/square_") : e
                };

            function U(e, t) {
                var n = (0, l.co)(e);
                return null !== n ? n : e.includes(i.N$.communityWidgetCategory) ? (0, l.un)(i.N$.override) : t
            }
            var z = function(e, t, n) {
                    var r, i = null === (r = e.sections[n]) || void 0 === r || null === (r = r.main) || void 0 === r ? void 0 : r.layout;
                    return t && "lineup" === t.type && i !== u.q0
                },
                V = function(e) {
                    var t = {};
                    return e ? (e.forEach((function(e) {
                        Object.values(e).forEach((function(e) {
                            var n;
                            null !== (n = e.content) && void 0 !== n && n.length && e.content.forEach((function(e) {
                                if ("lineup" === e.type) {
                                    var n, r = null === e || void 0 === e || null === (n = e.lineup) || void 0 === n ? void 0 : n.pubQueueId;
                                    t[r] = t[r] ? t[r] + e.content.length : e.content.length
                                }
                            }))
                        }))
                    })), t) : t
                },
                F = function(e, t) {
                    if (null === t || void 0 === t || !t.length) return null;
                    var n = t.find((function(t) {
                        return t.contextualLineupSlug === e
                    }));
                    return n || null
                },
                q = function(e) {
                    if (!e) return [];
                    var t = [];
                    return Object.values(e).forEach((function(e) {
                        null !== e && void 0 !== e && e.fileurl && null !== e && void 0 !== e && e.w && t.push("".concat(e.fileurl, " ").concat(e.w, "w"))
                    })), t
                }
        },
        34560: (e, t, n) => {
            n.d(t, {
                EW: () => a,
                LF: () => s,
                Vd: () => c,
                x0: () => i
            });
            var r = n(4942),
                i = "MMM dd, yyyy h:mm a",
                o = "America/Toronto",
                a = o,
                c = 36e5,
                s = (0, r.Z)((0, r.Z)((0, r.Z)((0, r.Z)((0, r.Z)((0, r.Z)((0, r.Z)({
                    "America/Vancouver": {
                        standard: {
                            offset: 8,
                            locale: "PST"
                        },
                        daylight: {
                            offset: 7,
                            locale: "PDT"
                        }
                    },
                    "America/Edmonton": {
                        standard: {
                            offset: 7,
                            locale: "MST"
                        },
                        daylight: {
                            offset: 6,
                            locale: "MDT"
                        }
                    },
                    "America/Winnipeg": {
                        standard: {
                            offset: 6,
                            locale: "CST"
                        },
                        daylight: {
                            offset: 5,
                            locale: "CDT"
                        }
                    }
                }, o, {
                    standard: {
                        offset: 5,
                        locale: "EST"
                    },
                    daylight: {
                        offset: 4,
                        locale: "EDT"
                    }
                }), "America/Halifax", {
                    standard: {
                        offset: 4,
                        locale: "AST"
                    },
                    daylight: {
                        offset: 3,
                        locale: "ADT"
                    }
                }), "America/St_Johns", {
                    standard: {
                        offset: 3.5,
                        locale: "NST"
                    },
                    daylight: {
                        offset: 2.5,
                        locale: "NDT"
                    }
                }), "America/Whitehorse", {
                    standard: {
                        offset: 7,
                        locale: "MST"
                    }
                }), "America/Regina", {
                    standard: {
                        offset: 6,
                        locale: "CST"
                    }
                }), "America/Coral_Harbour", {
                    standard: {
                        offset: 5,
                        locale: "EST"
                    }
                }), "America/Blanc-Sablon", {
                    standard: {
                        offset: 4,
                        locale: "AST"
                    }
                })
        },
        39588: (e, t, n) => {
            n.d(t, {
                Jn: () => l,
                Ud: () => s,
                W: () => p,
                sL: () => d,
                uY: () => u
            });
            var r = n(29439),
                i = n(69626),
                o = n(91032),
                a = n(74629),
                c = n(34560);

            function s(e) {
                if (void 0 !== e) {
                    var t = Math.floor(Math.abs(parseFloat(e)));
                    if (Number.isNaN(t)) return "";
                    var n = Math.floor(t / 3600),
                        r = Math.floor(t / 60 % 60),
                        i = Math.round(t % 60),
                        o = e >= 0 ? "" : "-";
                    return n ? (o += n + ":", o += (r < 10 ? "0" + r : r) + ":") : o += r + ":", o += i < 10 ? "0" + i : i
                }
            }

            function l(e, t, n) {
                var r = Date.now();
                "string" === typeof e && (e = parseInt(e)), !Number.isNaN(e) && Number.isFinite(e) || (e = r);
                var i, o = function(e, t) {
                        return "".concat(e, " ").concat(t, " ago")
                    },
                    a = r < e,
                    c = Math.abs(r - e) / 1e3,
                    s = [{
                        label: "year",
                        size: 31536e3
                    }, {
                        label: "month",
                        size: 2592e3
                    }, {
                        label: "day",
                        size: 86400
                    }, {
                        label: "hour",
                        size: 3600
                    }, {
                        label: "minute",
                        size: 60
                    }];
                t && s.push({
                    label: "second",
                    size: 1
                });
                do {
                    if (void 0 === (i = s[s.indexOf(i) + 1])) return "now"
                } while (c < i.size);
                var l, u, d = Math.round(c / i.size),
                    p = i.label + (d > 1 ? "s" : "");
                return a ? (l = d, u = p, n ? "In ".concat(l, " ").concat(u) : "".concat(l, " ").concat(u)) : function(e, t) {
                    return n ? "Started " + o(e, t) : o(e, t)
                }(d, p)
            }
            var u = function() {
                    var e = function(e) {
                            return Math.abs(e.getTimezoneOffset()) / 60
                        },
                        t = new Date;
                    t.setMonth(0, 1);
                    var n = e(t),
                        i = new Date;
                    i.setMonth(6, 1);
                    for (var o = n !== e(i), a = 0, s = Object.entries(c.LF); a < s.length; a++) {
                        var l = (0, r.Z)(s[a], 2),
                            u = l[0],
                            d = l[1];
                        if (!(null === d || void 0 === d || !d.daylight) === o && n === d.standard.offset) return u
                    }
                    return c.EW
                },
                d = function(e) {
                    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date;
                    if (!c.LF[e] || !(0, a.Z)(r)) return "";
                    var o = new Date(r.getTime() + (0, i.getTimezoneOffset)(e)),
                        s = (0, i.getTimezoneOffset)(e, o),
                        l = Math.abs(s) / c.Vd,
                        u = c.LF[e];
                    return l === (null === u || void 0 === u || null === (t = u.standard) || void 0 === t ? void 0 : t.offset) ? u.standard.locale : null === u || void 0 === u || null === (n = u.daylight) || void 0 === n ? void 0 : n.locale
                },
                p = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.EW;
                    if (!(e = parseInt(e)) || !(0, a.Z)(e)) return "";
                    t = c.LF[t] ? t : c.EW;
                    var n = new Date(e),
                        r = d(t, n),
                        s = (0, i.formatInTimeZone)(n, t, c.x0, {
                            locale: o.Z
                        });
                    return "".concat(s, " ").concat(r)
                }
        },
        50465: (e, t, n) => {
            n.d(t, {
                o: () => g,
                p: () => v
            });
            var r = n(71002),
                i = n(43144),
                o = n(15671),
                a = n(82963),
                c = n(61120),
                s = n(97326),
                l = n(60136),
                u = n(72407),
                d = n(47452);

            function p(e, t, n) {
                return t = (0, c.Z)(t), (0, a.Z)(e, f() ? Reflect.construct(t, n || [], (0, c.Z)(e).constructor) : t.apply(e, n))
            }

            function f() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (e) {}
                return (f = function() {
                    return !!e
                })()
            }
            var v = function(e) {
                    function t(e, n) {
                        var r;
                        return (0, o.Z)(this, t), n || (n = d.Bx[e] || ""), (r = p(this, t, [n])).name = "HttpError", Error.captureStackTrace && Error.captureStackTrace((0, s.Z)(r), t), r.code = e, r
                    }
                    return (0, l.Z)(t, e), (0, i.Z)(t)
                }((0, u.Z)(Error)),
                g = function(e) {
                    function t(e) {
                        var n;
                        (0, o.Z)(this, t);
                        var i = function() {
                            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = d.Iz;
                            return /HTTP 404/.test(t.message) ? n = d.k6 : "BAD_REQUEST" === (null === (e = t.extensions) || void 0 === e ? void 0 : e.code) && (n = d.$h), n
                        }("object" === (0, r.Z)(null === e || void 0 === e ? void 0 : e[0]) ? null === e || void 0 === e ? void 0 : e[0] : {});
                        return (n = p(this, t, [d.Bx[i] || ""])).name = "GqlError", Error.captureStackTrace && Error.captureStackTrace((0, s.Z)(n), t), n.code = i, n.extraData = e, n
                    }
                    return (0, l.Z)(t, e), (0, i.Z)(t)
                }((0, u.Z)(Error))
        },
        77008: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = function(e, t) {
                return e && void 0 !== t && null !== t && (0, r.Z)({}, "data-feature-".concat(e), t) || {}
            };

            function c(e) {
                var t = e.name,
                    n = e.position,
                    r = e.instance;
                return o(o(o({}, a("name", t)), a("position", n)), a("instance", r))
            }
        },
        71714: (e, t, n) => {
            n.d(t, {
                X: () => o,
                m: () => i
            });
            n(9867), n(7231), n(58109), n(95566), n(68438), n(2041), n(2612);
            var r = n(31646),
                i = function(e, t) {
                    return t.filter((function(t) {
                        var n = t.path,
                            r = t.value;
                        return ("allContentAreas" === n || e.startsWith(n)) && r
                    })).map((function(e) {
                        return e.value
                    }))
                },
                o = function(e) {
                    var t = (0, r.f)(e);
                    return function(e) {
                        return t(e).reduce((function(t, n) {
                            var r;
                            return (null === n || void 0 === n ? void 0 : n.path) === (null === e || void 0 === e || null === (r = e.app) || void 0 === r ? void 0 : r.path) && "string" === typeof(null === n || void 0 === n ? void 0 : n.value) && (null === n || void 0 === n ? void 0 : n.value) || t
                        }), "")
                    }
                }
        },
        21188: (e, t, n) => {
            n.d(t, {
                fQ: () => i
            });
            var r = n(47452),
                i = function(e) {
                    if (!e || !e.headers || !e.status) return !1;
                    var t = e.status,
                        n = e.headers;
                    return o(t) && c(a({
                        headers: n,
                        key: "content-type"
                    }))
                },
                o = function(e) {
                    return e === r.h7
                },
                a = function(e) {
                    var t = e.headers,
                        n = e.key;
                    return t.get(n)
                },
                c = function(e) {
                    var t = s(e);
                    return "application/json;charset=utf-8".includes(t)
                },
                s = function(e) {
                    return e && e.replace(" ", "").toLowerCase()
                }
        },
        4505: (e, t, n) => {
            n.r(t), n.d(t, {
                identifyNewsletterSourceAPI: () => a
            });
            var r = n(74987),
                i = n(93849);
            const o = {
                api: {
                    url: {
                        production: "https://subscriptions.cbc.ca/api",
                        staging: "https://newsletters-staging.apps.ocp.int.nm.cbc.ca/api",
                        dev: "https://newsletters-dev.apps.ocp.int.nm.cbc.ca/api",
                        qa: "https://newsletters-qa.apps.ocp.int.nm.cbc.ca/api"
                    }
                }
            };
            var a = function() {
                if (!(0, r.j)()) return (0, i.KF)("Client.newsletters.ApiUrl");
                var e = new URLSearchParams(document.location.search).get("forceNewsletterEnv") || null;
                return e ? o.api.url[e] : (0, i.KF)("Client.newsletters.ApiUrl")
            }
        },
        35517: (e, t, n) => {
            n.d(t, {
                aV: () => d,
                nZ: () => c,
                $6: () => s,
                Ws: () => p,
                Z6: () => l
            });
            n(83464), n(95566), n(19496), n(9867), n(7231);
            var r = n(74987),
                i = {
                    "&AMP": "&",
                    "&AMP;": "&",
                    "&amp": "&",
                    "&amp;": "&",
                    "&nbsp": "\xa0",
                    "&nbsp;": "\xa0",
                    "&lt": "<",
                    "&lt;": "<",
                    "&LT": "<",
                    "&LT;": "<",
                    "&GT": ">",
                    "&GT;": ">",
                    "&gt": ">",
                    "&gt;": ">",
                    "&quot": '"',
                    "&quot;": '"',
                    "&QUOT": '"',
                    "&QUOT;": '"',
                    "&apos;": "'",
                    "&cent": "\xa2",
                    "&cent;": "\xa2",
                    "&pound": "\xa3",
                    "&pound;": "\xa3",
                    "&yen": "\xa5",
                    "&yen;": "\xa5",
                    "&euro;": "\u20ac",
                    "&COPY": "\xa9",
                    "&COPY;": "\xa9",
                    "&copy": "\xa9",
                    "&copy;": "\xa9",
                    "&reg": "\xae",
                    "&reg;": "\xae",
                    "&REG": "\xae",
                    "&REG;": "\xae",
                    "&TRADE;": "\u2122",
                    "&trade;": "\u2122",
                    "&sect": "\xa7",
                    "&sect;": "\xa7",
                    "&para": "\xb6",
                    "&para;": "\xb6",
                    "&deg": "\xb0",
                    "&deg;": "\xb0",
                    "&mdash;": "\u2014",
                    "&ndash;": "\u2013",
                    "&asymp;": "\u2248",
                    "&ne;": "\u2260",
                    "&dollar;": "$",
                    "&#39;": "'",
                    "&laquo": "\xab",
                    "&laquo;": "\xab",
                    "&raquo": "\xbb",
                    "&raquo;": "\xbb",
                    "&middot": "\xb7",
                    "&middot;": "\xb7",
                    "&lsquo;": "\u2018",
                    "&OpenCurlyQuote;": "\u2018",
                    "&rsquo;": "\u2019",
                    "&CloseCurlyQuote;": "\u2019",
                    "&ldquo;": "\u201c",
                    "&rdquo;": "\u201d",
                    "&sbquo;": "\u201a",
                    "&bdquo;": "\u201e",
                    "&bull;": "\u2022",
                    "&bullet;": "\u2022",
                    "&hellip;": "\u2026",
                    "&prime;": "\u2032",
                    "&Prime;": "\u2033"
                },
                o = n(41718),
                a = function(e) {
                    var t;
                    return Boolean(null === e || void 0 === e || null === (t = e.children) || void 0 === t ? void 0 : t.length)
                };

            function c(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return a(e) ? e.children.forEach((function(e) {
                    e.name === t && n.push(e)
                })) : e.name === t && n.push(e), n.length > 0 && n
            }
            var s = function(e) {
                    if ("" === e) return null;
                    var t = {};
                    return e.trim().split(";").forEach((function(e) {
                        if ("" !== e) {
                            var n = e.split(":"),
                                r = n[0].trim(); - 1 !== (r ? r.indexOf("-") : -1) && (r = function(e) {
                                var t = e.split("-");
                                return t.map((function(e, n) {
                                    return "" === t[0] || 0 !== n ? e.charAt(0).toUpperCase() + e.slice(1) : e
                                })).join("")
                            }(r));
                            var i = "";
                            "string" === typeof n[1] && (i = n[1].includes("!important") ? n[1].replace("!important", "") : n[1]), t[r] = i.trim()
                        }
                    })), t
                },
                l = function(e) {
                    if (!(0, r.s)()) {
                        var t = "";
                        if ("undefined" !== typeof document) {
                            var n = document.createElement("span");
                            return n.innerHTML = e, t = n.innerHTML
                        }
                        return o.default.error("(sanitizeHtml) Tried to sanitize Html without having document available"), t
                    }
                },
                u = new RegExp(Object.keys(i).join("|"), "g"),
                d = function(e) {
                    return e.replace(/&[A-Za-z0-9#]+;?/g, (function(e) {
                        return i[e] || e
                    })).replace(u, (function(e) {
                        return i[e] || e
                    })).replace(/\s*&[A-Za-z0-9#]{2,};\s*/g, "")
                },
                p = function(e) {
                    return "string" === typeof e ? d(e) : ""
                }
        },
        43386: (e, t, n) => {
            n.r(t), n.d(t, {
                makeCancelable: () => h,
                request: () => v,
                requestJSON: () => b
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(15861),
                i = n(4942),
                o = n(64687),
                a = n.n(o),
                c = (n(66386), n(47452)),
                s = n(50465),
                l = n(74987);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = 2e4,
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, l.j)() ? e : d(d({}, e), {}, {
                        "User-Agent": "CBC/Ocelot/".concat(process.env.RELEASE_NAME || process.env.COMMIT_HASH || "")
                    })
                };

            function v(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return g = (0, r.Z)(a().mark((function e(t) {
                    var n, r, i, o, c, s, l = arguments;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (n = l.length > 1 && void 0 !== l[1] ? l[1] : {}).headers ? f(n.headers) : f(), n.headers = r, i = isNaN(n.timeout) ? p : n.timeout, o = new AbortController, c = setTimeout((function() {
                                    return o.abort()
                                }), i), n.signal = o.signal, e.prev = 7, e.next = 10, fetch(t, n);
                            case 10:
                                return s = e.sent, clearTimeout(c), e.abrupt("return", s);
                            case 15:
                                throw e.prev = 15, e.t0 = e.catch(7), e.t0 && "Failed to fetch" === e.t0.message && (e.t0.message = "(request) Unable to fetch ".concat(t), e.t0.extraData = n), e.t0;
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [7, 15]
                    ])
                }))), g.apply(this, arguments)
            }
            var m = function(e) {
                return e.status !== c.h7 ? Promise.reject(new s.p(e.status, e.statusText)) : function(e) {
                    return e.headers.get("content-type") && /application\/json/i.test(e.headers.get("content-type"))
                }(e) ? e : Promise.reject("Invalid content-type ".concat(e.headers.get("content-type")))
            };

            function b(e) {
                return v(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).then(m).then((function(e) {
                    return e.json()
                }))
            }

            function h(e) {
                var t = !1;
                return {
                    promise: new Promise((function(n, r) {
                        e.then((function(e) {
                            return !t && n(e)
                        })).catch((function(e) {
                            return !t && r(e)
                        }))
                    })),
                    cancel: function() {
                        return t = !0
                    }
                }
            }
        },
        3762: (e, t, n) => {
            n.d(t, {
                vS: () => s,
                Lo: () => l
            });
            var r = n(29439),
                i = n(35098),
                o = n(83110);
            n(70468), n(79321), n(95763), n(26817), n(50155), n(51335), n(83234), n(92435), n(87201), n(23503), n(72891), n(21934), n(81466), n(40703);
            const a = new Map;
            var c = n(74987),
                s = function() {
                    var e = (0, o.useLocation)().pathname,
                        t = (0, o.useHistory)().action;
                    return (0, i.useEffect)((function() {
                        if ("POP" === t) {
                            var n = a.get(e);
                            n && (p(n), a.delete(e))
                        } else window.scrollTo(0, 0)
                    }), [e]), null
                },
                l = function(e) {
                    if (!(0, c.s)()) {
                        u();
                        var t = d();
                        a.set(e, t)
                    }
                },
                u = function() {
                    if (a.size > 5) {
                        var e = (0, r.Z)(a.entries().next().value, 1)[0];
                        a.delete(e)
                    }
                },
                d = function() {
                    if (!(0, c.s)()) return window.scrollY
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    (0, c.s)() || setTimeout((function() {
                        window.scrollTo(0, e)
                    }), 1e3)
                }
        },
        32154: (e, t, n) => {
            n.d(t, {
                A_: () => p,
                Lf: () => l,
                Rm: () => s,
                fo: () => u,
                gx: () => d,
                iK: () => f
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(67530);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var c = "https://www.cbc.ca/news/about-cbc-news-1.1294364",
                s = ["AdvertiserContentArticle", "AudioObject", "BlogPosting", "Clip", "CorrectionComment", "Episode", "Event", "ImageObject", "LiveBlogPosting", "NewsArticle", "NewsMediaOrganization", "Organization", "Person", "Recipe", "ReportageNewsArticle", "VideoObject", "WebPage"].reduce((function(e, t) {
                    return e[t] = {
                        "@type": t
                    }, e
                }), {}),
                l = {
                    "@context": "https://schema.org"
                },
                u = {
                    "@id": "https://www.cbc.ca/#publisher"
                },
                d = a(a({}, s.NewsMediaOrganization), {}, {
                    url: "https://www.cbc.ca",
                    name: "CBC"
                }),
                p = a(a(a(a({}, l), d), u), {}, {
                    logo: "https://i.cbc.ca/1.4066392.1541713557!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/cbc-logo-horizontal.jpg",
                    foundingDate: "1936-11-02",
                    ethicsPolicy: c,
                    verificationFactCheckingPolicy: c,
                    ownershipFundingInfo: c,
                    actionableFeedbackPolicy: c,
                    missionCoveragePrioritiesPolicy: c,
                    diversityPolicy: c,
                    masthead: c,
                    diversityStaffingReport: c,
                    unnamedSourcesPolicy: c,
                    correctionsPolicy: c,
                    sameAs: ["https://www.facebook.com/cbc/", "https://x.com/cbc/", "https://www.youtube.com/@CBC", "https://www.instagram.com/cbc/?hl=en", "https://www.tiktok.com/@cbc?lang=en"]
                }),
                f = (0, r.Z)((0, r.Z)((0, r.Z)((0, r.Z)((0, r.Z)((0, r.Z)({}, i.GD, s.ReportageNewsArticle), i.nt, s.BlogPosting), i.X0, s.Episode), i.ec, s.Clip), i.Nq, s.NewsArticle), i.p0, s.AdvertiserContentArticle)
        },
        57018: (e, t, n) => {
            n.d(t, {
                Bf: () => d,
                G$: () => p,
                V2: () => m,
                kh: () => f,
                sI: () => v,
                xT: () => l
            });
            var r = n(4942),
                i = (n(2041), n(95566), n(2612), n(58109), n(68438), n(83464), n(19496), n(32154)),
                o = n(64323),
                a = n(41718);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var l = function(e) {
                    if (null !== e) {
                        var t = Number(e),
                            n = new Date(t);
                        return Number.isSafeInteger(n.valueOf()) ? n.toISOString() : void 0
                    }
                },
                u = function e(t) {
                    return t.reduce((function(t, n) {
                        return "text" === n.type && n.content.length > 0 ? t.push(n.content) : "html" === n.type && n.content && t.push(e(n.content)), t
                    }), []).join(" ")
                },
                d = function(e) {
                    if (null !== e && void 0 !== e && e.replace) return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
                },
                p = function(e) {
                    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ratio16x9";
                    return null !== (t = e.aspects) && void 0 !== t && null !== (t = t[r]) && void 0 !== t && t.url ? (e.credit || (n = i.gx), s(s({}, i.Rm.ImageObject), {}, {
                        caption: e.description || void 0,
                        creditText: e.credit || void 0,
                        contentUrl: e.aspects[r].url,
                        creator: n,
                        url: e.aspects[r].url
                    })) : null
                },
                f = function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.sourceId,
                        a = n.publishedAt,
                        c = n.updatedAt,
                        u = n.type,
                        d = n.title,
                        p = n.description,
                        f = n.image,
                        v = n.media,
                        g = (null === f || void 0 === f ? void 0 : f.url) || (null === f || void 0 === f || null === (e = f.aspects) || void 0 === e || null === (e = e.ratio16x9) || void 0 === e ? void 0 : e.url);
                    if (!r || !a || !g || !d) return null;
                    var m = l(a),
                        b = Math.round(null !== (t = null === v || void 0 === v ? void 0 : v.duration) && void 0 !== t ? t : 0),
                        h = "audio" === u ? "AudioObject" : "VideoObject";
                    return s(s(s({}, i.Lf), i.Rm[h]), {}, {
                        identifier: r,
                        name: d,
                        description: p || void 0,
                        thumbnailUrl: g,
                        uploadDate: m,
                        datePublished: m,
                        dateModified: l(c),
                        duration: "PT".concat(b, "S"),
                        embedUrl: "".concat(o.uq).concat(r),
                        contentUrl: "".concat(o.Pb).concat(u, "/").concat(r),
                        publisher: i.fo
                    })
                },
                v = function(e) {
                    if (!Array.isArray(e)) return [i.gx];
                    var t = e.reduce((function(e, t) {
                        return null !== t && void 0 !== t && t.name && e.push(s(s({}, i.Rm.Person), {}, {
                            name: t.name,
                            url: t.url || void 0
                        })), e
                    }), []);
                    return t.length ? t : [i.gx]
                },
                g = function(e) {
                    if (!Array.isArray(e)) return {};
                    var t = e.reduce((function(e, t) {
                            var n, r, i = null === (n = t.type) || void 0 === n ? void 0 : n.toLowerCase();
                            switch (i) {
                                case "image":
                                    r = p;
                                    break;
                                case "audio":
                                case "video":
                                    r = f;
                                    break;
                                default:
                                    r = function() {}
                            }
                            var o = r(t);
                            return o && e[i].push(o), e
                        }), {
                            audio: [],
                            image: [],
                            video: []
                        }),
                        n = function(e) {
                            if (e.length) return 1 === e.length ? e.pop() : e
                        };
                    return {
                        audio: n(t.audio),
                        image: n(t.image),
                        video: n(t.video)
                    }
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = [i.A_];
                    try {
                        var n = function() {
                            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.url,
                                r = t.title,
                                o = t.body,
                                a = t.authorList,
                                c = t.updatedAt,
                                u = t.publishedAt,
                                p = t.description,
                                f = t.wordCount;
                            if (!n || !r) return null;
                            var m = null !== (e = null === o || void 0 === o ? void 0 : o.associatedContent) && void 0 !== e ? e : [],
                                b = null !== a && void 0 !== a ? a : [];
                            return s(s(s(s({}, i.Lf), i.Rm.NewsArticle), {}, {
                                "@id": n,
                                publisher: i.fo
                            }, g(m)), {}, {
                                author: v(b),
                                dateModified: l(c),
                                datePublished: l(u),
                                description: p,
                                headline: d(r),
                                wordCount: f || void 0
                            })
                        }(e);
                        n && t.push(n);
                        var r = function() {
                            var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                o = r.url,
                                a = r.publishedAt,
                                c = r.updatedAt,
                                p = r.title,
                                f = r.deck,
                                m = r.flag,
                                b = r.liveStory,
                                h = l(a);
                            if (!o || !h || !p) return null;
                            var y, O = (null !== (e = null === b || void 0 === b || null === (t = b.updates) || void 0 === t ? void 0 : t.nodes) && void 0 !== e ? e : []).reduce((function(e, t) {
                                var n, r, a, c, p = null !== (n = null === (r = t.body) || void 0 === r ? void 0 : r.associatedContent) && void 0 !== n ? n : [],
                                    f = null !== (a = null === (c = t.body) || void 0 === c ? void 0 : c.parsed) && void 0 !== a ? a : [],
                                    m = l(t.publishedAt),
                                    b = l(t.updatedAt);
                                return e.push(s(s(s({}, i.Rm.BlogPosting), {}, {
                                    articleBody: u(f),
                                    dateModified: null !== b && void 0 !== b ? b : m,
                                    datePublished: m,
                                    url: "".concat(o, "?ts=").concat(t.publishedAt),
                                    headline: d(t.title)
                                }, g(p)), {}, {
                                    author: v([t.author])
                                })), e
                            }), []);
                            return "live" !== m && (y = l(c)), s(s(s({}, i.Lf), i.Rm.LiveBlogPosting), {}, {
                                publisher: i.fo,
                                name: d(p),
                                headline: d(p),
                                description: null !== (n = d(f)) && void 0 !== n ? n : void 0,
                                mainEntityOfPage: {
                                    "@id": o
                                },
                                coverageStartTime: l(a),
                                coverageEndTime: y,
                                liveBlogUpdate: O
                            })
                        }(e);
                        r && t.push(r)
                    } catch (o) {
                        a.default.error("(getLiveStoryPageJsonLD) Error generating JsonLD for live story page", o)
                    }
                    return s(s({}, i.Lf), {}, {
                        "@graph": t
                    })
                }
        },
        68369: (e, t, n) => {
            n.d(t, {
                $C: () => l,
                Dh: () => m,
                Q9: () => o,
                Tx: () => O,
                UO: () => v,
                Wz: () => b,
                _7: () => g,
                _e: () => s,
                a0: () => r,
                d_: () => p,
                e$: () => y,
                iB: () => u,
                iM: () => j,
                lR: () => f,
                pE: () => d,
                r2: () => i,
                sT: () => w,
                sV: () => h,
                ux: () => c,
                xh: () => a
            });
            var r = "text",
                i = "html",
                o = "polopoly_similar",
                a = "polopoly_image",
                c = "polopoly_embed",
                s = "polopoly_media",
                l = "polopoly_photogallery",
                u = "polopoly_custom",
                d = "youtube",
                p = "facebookvideo",
                f = "scribblelive",
                v = "facebookpost",
                g = "customhtml",
                m = "twitter",
                b = "documentcloud",
                h = "instagram",
                y = "cardcarousel",
                O = "datawrapper",
                j = "blockquote",
                w = [300, 460, 620, 780, 1180]
        },
        75562: (e, t, n) => {
            n.d(t, {
                If: () => b,
                kt: () => y,
                je: () => h
            });
            n(9867), n(7231), n(2041), n(95566), n(2612);
            var r = n(41718),
                i = n(82489),
                o = n(93849),
                a = o.KF("Client.contentApi.baseGraphqlURL"),
                c = "CaML",
                s = n(82010);
            const l = "query trending($lineupSlug: String, $categorySlug: String, $pageSize: Int) {\n    allContentItems(lineupSlug: $lineupSlug, categorySlug: $categorySlug, pageSize: $pageSize, targets: [WEB,ALL]) {\n        nodes {\n            ...trendingItem\n        }\n    }\n}\n".concat(s.z$);
            var u = n(79939),
                d = n(57241),
                p = n(74987),
                f = function(e, t) {
                    return {
                        query: l,
                        variables: {
                            lineupSlug: "trending-".concat((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null) === c ? "/" : "").concat(e),
                            categorySlug: "empty-category",
                            pageSize: t
                        }
                    }
                },
                v = function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (Array.isArray(t) || (t = [t]), e.length !== t.length) throw new Error("Result length does not match requested sections length");
                    return (i ? t.map((function(e) {
                        return e.mlDrivenItems.items
                    })) : t.map((function(e) {
                        return e.allContentItems.nodes
                    }))).map((function(e) {
                        return function(e, t) {
                            return e.map((function(e, n) {
                                return {
                                    sourceId: e.sourceId || "",
                                    title: e.title || "",
                                    flag: e.flag || "",
                                    count: e.trending && e.trending.numViewers ? e.trending.numViewers : 0,
                                    countSrs: e.trending && e.trending.numViewersSRS ? e.trending.numViewersSRS : 0,
                                    href: e.href || "",
                                    alt: "",
                                    rank: n + 1,
                                    variant: t === c ? "SRS" : null
                                }
                            }))
                        }(e, n)
                    })).reduce((function(t, n, i) {
                        var o = e[i];
                        return t[o] = n,
                            function(e, t, n) {
                                if ("string" !== typeof e) throw new Error("expected section to be type string");
                                if (!Array.isArray(t)) throw new Error("expected items to be type array");
                                if ("number" !== typeof n) throw new Error("expected time to be a number");
                                if ((0, p.s)() || t.length <= 0) return Promise.resolve();
                                var i = {
                                    content: {
                                        items: t
                                    },
                                    time: n
                                };
                                (0, u.LS)("trending-".concat(e), i).catch((function(t) {
                                    r.default.error("(cacheTrending) localforage store failed for ".concat(e), t)
                                }))
                            }(o, n, Date.now()), t
                    }), {})
                },
                g = n(97767);
            var m = function(e) {
                    var t = function(e) {
                        return !0 === (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || g.SA.hasOwnProperty(e) && g.SA[e].hasOwnProperty("usingCaMLTrending") && g.SA[e].usingCaMLTrending
                    };
                    return {
                        hasTrending: function(e) {
                            return g.SA.hasOwnProperty(e) && g.SA[e].hasOwnProperty("trending") === !!g.SA[e].trending
                        },
                        getTrendingSection: function(e) {
                            return (g.SA[e] || {}).trendingSection || e
                        },
                        getSection: function(n, i) {
                            var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if ("string" !== typeof n) throw new Error("expected section to be type string");
                            if ("number" !== typeof i) throw new Error("expected numItems to be type number");
                            var a = Date.now(),
                                s = t(n, o) ? c : null;
                            return function(e, t, n) {
                                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                if ((0, p.s)()) return Promise.resolve();
                                var o = i === c ? "/" : "";
                                return (0, u.rV)("trending-".concat(o).concat(e)).then((function(i) {
                                    if (i && !(0, d.Jv)(5, n, i.time)) {
                                        r.default.debug("retrieved trending %s from localforage", e);
                                        var o = (i.content || {}).items;
                                        return o.length > t ? o.slice(0, t) : o.length === t ? o : void 0
                                    }
                                })).catch((function(t) {
                                    r.default.error("(getCachedTrending) localforage get failed for ".concat(e), t)
                                }))
                            }(n, i, a, s).then((function(t) {
                                return t || e(n, i, s)
                            }))
                        },
                        usingCaML: t
                    }
                }((function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return (Array.isArray(e) ? function(e, t, n) {
                        var r = e.map((function(e) {
                            return f(e, t, n)
                        }));
                        return (0, i.he)(a, r).then((function(t) {
                            return v(e, t, n)
                        }))
                    }(e, t, n) : function(e, t, n) {
                        var r = f(e, t, n);
                        return (0, i.he)(a, r).then((function(t) {
                            return v([e], t, n)
                        })).then((function(t) {
                            return t[e]
                        }))
                    }(e, t, n)).catch((function(t) {
                        return r.default.error("(Trending) fetch_trending( ".concat(e, " )"), t), Promise.reject(t)
                    }))
                })),
                b = m.getSection,
                h = m.hasTrending,
                y = m.getTrendingSection;
            m.usingCaML
        },
        15526: (e, t, n) => {
            function r() {
                return navigator.vendor.match(/apple/i) && !navigator.userAgent.match(/crios/i) && !navigator.userAgent.match(/fxios/i) && !navigator.userAgent.match(/Opera|OPT\//)
            }

            function i() {
                return Boolean(navigator.userAgent.match(/Android/i))
            }

            function o() {
                return Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i))
            }

            function a() {
                return o() || i()
            }
            n.r(t), n.d(t, {
                isAndroid: () => i,
                isAppleDevice: () => o,
                isMobileDevice: () => a,
                isSafari: () => r
            })
        },
        30091: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => f,
                getVfUrl: () => p
            });
            var r = n(71002),
                i = n(15861),
                o = n(64687),
                a = n.n(o),
                c = n(74987),
                s = n(88101),
                l = n(33574),
                u = n(41718),
                d = {
                    addOnReadyCallback: function(e) {
                        (0, c.j)() && (window.vfQ = window.vfQ || [], window.vfQ.push(e))
                    },
                    reset: function() {
                        this._isContextDefined() && window.vf.context.reset()
                    },
                    openProfile: function(e) {
                        this._isViafouraLoaded() && window.vf.$publish("tray", "open", e.currentTarget, "vf-profile")
                    },
                    subscribeUserInfo: function(e) {
                        this._isViafouraLoaded() && window.vf.$subscribe("user", "loaded", (function(t) {
                            return e(t)
                        }))
                    },
                    getUserContext: function() {
                        var e = (0, i.Z)(a().mark((function e() {
                            var t, n, r, i, o, c;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, this._isContextDefined()) {
                                            e.next = 5;
                                            break
                                        }
                                        throw t = "Viafoura context undefined - not loaded", u.default.warn("(getUserContext) ".concat(t)), new Error(t);
                                    case 5:
                                        return e.next = 7, (0, l.loadMembershipActionsLR)();
                                    case 7:
                                        return n = e.sent, r = n.validateAccessToken, i = n.getSessionToken, e.next = 12, i();
                                    case 12:
                                        if (o = e.sent) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.abrupt("return", Promise.resolve({}));
                                    case 15:
                                        return e.next = 17, r(o);
                                    case 17:
                                        if (!e.sent) {
                                            e.next = 22;
                                            break
                                        }
                                        return e.abrupt("return", window.vf.context.get("user"));
                                    case 22:
                                        throw "Invalid access token for Viafoura Context", new Error("Invalid access token for Viafoura Context");
                                    case 24:
                                        e.next = 30;
                                        break;
                                    case 26:
                                        return e.prev = 26, e.t0 = e.catch(0), c = "Failed to fetch user context - ".concat(e.t0.message), e.abrupt("return", Promise.reject(c));
                                    case 30:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 26]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    isUserAuthenticated: function(e) {
                        return !(null === e || void 0 === e || !e.user_privilege) && "guest" !== e.user_privilege
                    },
                    subscribeTrayOpen: function(e) {
                        this._isViafouraLoaded() && window.vf.$subscribe("tray", "opened", (function(t) {
                            return e(t)
                        }))
                    },
                    subscribeTrayClosed: function(e) {
                        this._isViafouraLoaded() && window.vf.$subscribe("tray", "closed", (function(t) {
                            return e(t)
                        }))
                    },
                    subscribeNotifications: function(e) {
                        this._isViafouraLoaded() && window.vf.$subscribe("user-notifications", "new-count-changed", (function(t) {
                            return e(t)
                        }))
                    },
                    unsubscribeNotifications: function() {
                        this._isViafouraLoaded() && (window.vf.$unsubscribe("user-notifications", "new-count-changed"), window.vf.$unsubscribe("commenting", "sorted"), window.vf.$unsubscribe("user", "loaded"), window.vf.$unsubscribe("tray", "opened"), window.vf.$unsubscribe("tray", "closed"))
                    },
                    unsubscribeAuthentication: function() {
                        this._isViafouraLoaded() && window.vf.$unsubscribe("authentication", "required")
                    },
                    getNotificationContext: function() {
                        return this._isContextDefined() ? window.vf.context.get("notifications") : Promise.reject("Viafoura context undefined - not loaded").catch((function(e) {
                            return u.default.warn("(getNotificationContext) ".concat(e))
                        }))
                    },
                    _isContextDefined: function() {
                        return this._isViafouraLoaded() && !!window.vf.context
                    },
                    _isViafouraLoaded: function() {
                        return (0, c.j)() && "object" === (0, r.Z)(window.vf)
                    },
                    subscribeAuthenticationRequired: function(e) {
                        this._isViafouraLoaded() && (window.vf.$publish("tray", "close"), window.vf.$subscribe("authentication", "required", (function() {
                            return e()
                        })))
                    }
                },
                p = function(e) {
                    var t = (0, s.K7)();
                    return t && e ? e.includes("https://www.cbc.ca") ? e.replace("https://www.cbc.ca", "https://".concat(t)) : e : null
                };
            const f = d
        },
        19042: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = {
                moreStories: "moreStories-s0fae",
                contentGrid: "contentGrid-fUk4Z",
                regionInfo: "regionInfo-rQ0DI"
            }
        },
        45871: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = {
                heading: "heading-CuIgF",
                sectionHeading: "sectionHeading-S5iEJ",
                radioBar: "radioBar-rCbBA",
                sectionMain: "sectionMain-P0fmH"
            }
        },
        76247: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = {
                title: "title-reUIw",
                sponsorInfo: "sponsorInfo-tutjB",
                comments: "comments-qSzEf",
                federal: "federal-IN7P1",
                frequencyWidget: "frequencyWidget-p1Itr",
                mobileAppCta: "mobileAppCta-GehiQ",
                highlights: "highlights-vC0h9"
            }
        },
        69378: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = {
                white: "#fff",
                black: "#000",
                cyan100: "#eaf9fa",
                cyan200: "#b2e9ec",
                cyan300: "#6dd5da",
                cyan400: "#35c5cc",
                cyan500: "#20bfc7",
                cyan600: "#1dadb4",
                cyan700: "#157d82",
                cyan800: "#105f63",
                cyan900: "#072729",
                blue100: "#e7f2f7",
                blue200: "#a7cfe3",
                blue300: "#58a4c9",
                blue400: "#1881b5",
                blue500: "#0074ad",
                blue600: "#00699d",
                blue700: "#004c71",
                blue800: "#003a56",
                blue900: "#001824",
                yellow100: "#fff9e8",
                yellow200: "#ffeaad",
                yellow300: "#ffd764",
                yellow400: "#ffc829",
                yellow500: "#ffc212",
                yellow600: "#e7b010",
                yellow700: "#a77f0c",
                yellow800: "#806109",
                yellow900: "#352804",
                red100: "#fde7e7",
                red200: "#f9a7a7",
                red300: "#f45858",
                red400: "#f01818",
                red500: "#e00",
                red600: "#d70000",
                red700: "#9c0000",
                red800: "#700",
                red900: "#310000",
                orange100: "#fef1eb",
                orange200: "#fbcdb8",
                orange300: "#f7a077",
                orange400: "#f37c44",
                orange500: "#f26e30",
                orange600: "#db642b",
                orange700: "#9f481f",
                orange800: "#793718",
                orange900: "#32170a",
                neutral10: "#fdfdfd",
                neutral20: "#f9f9f9",
                neutral30: "#e7e7e7",
                neutral40: "#cacaca",
                neutral50: "#a7a7a7",
                neutral60: "gray",
                neutral70: "#585858",
                neutral80: "#353535",
                neutral90: "#181818",
                neutral100: "#060606"
            }
        },
        54342: (e, t, n) => {
            e.exports = n.p + "assets/gem.svg"
        },
        50714: (e, t, n) => {
            e.exports = n.p + "assets/cbcnewsletter.svg"
        },
        94807: (e, t, n) => {
            e.exports = n.p + "assets/open-in-new.svg"
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-5770.34f5f77b2e58f1aed8a5.js.map