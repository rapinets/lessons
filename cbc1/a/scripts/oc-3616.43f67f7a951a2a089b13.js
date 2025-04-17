! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f05e00ea-df17-4e5f-b4a9-f5f56c5c5b5e", e._sentryDebugIdIdentifier = "sentry-dbid-f05e00ea-df17-4e5f-b4a9-f5f56c5c5b5e")
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
    [3616, 3251], {
        37168: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => P,
                F: () => x
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(15861),
                a = n(64687),
                o = n.n(a),
                s = n(92777),
                c = n(82489),
                l = n(62615);

            function u(e, t) {
                return '\n        query {\n            author(sourceId: "'.concat(e, '") {\n                ').concat(1 === t ? "\n                title\n                name\n                biography\n                sourceId\n                url\n                links {\n                  type\n                  title\n                  url\n                }\n                photo {\n                  aspects {\n                    ratio1x1 {\n                      url\n                    }\n                  }\n                }" : "", "\n                recentContent(page: ").concat(t, ', sortDate: "publishedAt") {\n                  nodes {\n                    ...cardNode\n                  }\n                }\n            }\n        }\n        ').concat(l.Z, "\n    ")
            }
            var p = n(4964),
                d = n(46484),
                f = n(50465),
                m = n(47452);

            function g(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return h = (0, i.Z)(o().mark((function e(t) {
                    var n, r = arguments;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = r.length > 1 && void 0 !== r[1] ? r[1] : 1, (0, d.Ps)(t)) {
                                    e.next = 3;
                                    break
                                }
                                throw new f.p(m.k6, "Not Found");
                            case 3:
                                return e.next = 5, (0, c.he)(p.o, {
                                    query: u(t, n)
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), h.apply(this, arguments)
            }
            var v = n(96604),
                b = n(24876),
                y = n(89698),
                w = n(15549),
                j = n(54799),
                O = n(41718);

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

            function S(e) {
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
            var P = function(e) {
                    var t = e.contentId,
                        n = e.page,
                        r = void 0 === n ? 1 : n;
                    return function() {
                        var e = (0, i.Z)(o().mark((function e(n, i) {
                            var a, c, l, u, p, d, m;
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (c = 1 === r) && n((0, v.Zq)()), l = (null === (a = i().author.recentContent) || void 0 === a ? void 0 : a.list) || [], e.prev = 3, n((0, b.ii)()), e.next = 7, g(t, r);
                                    case 7:
                                        u = e.sent, p = u.author, d = (0, s.Z)(p, ["recentContent"]), c && (n((0, v.Gn)(d)), n((0, y.Pc)(Object.assign({}, d, {
                                            type: "authorbio"
                                        })))), n((0, v.g8)({
                                            list: l.concat((0, j.HJ)(p.recentContent.nodes)),
                                            pageValue: r,
                                            hasNextPage: 10 === p.recentContent.nodes.length
                                        })), e.next = 23;
                                        break;
                                    case 14:
                                        if (e.prev = 14, e.t0 = e.catch(3), m = e.t0 instanceof Error ? e.t0 : new f.o(e.t0), O.default.error("(fetch_author) request failed for ".concat(t), m), !c) {
                                            e.next = 22;
                                            break
                                        }
                                        throw m;
                                    case 22:
                                        n((0, v.g8)({
                                            list: l,
                                            pageValue: r - 1,
                                            hasNextPage: !1
                                        }));
                                    case 23:
                                        return e.prev = 23, n((0, w.k)()), e.finish(23);
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 14, 23, 26]
                            ])
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                x = function(e) {
                    var t = {
                        contentId: e
                    };
                    return function(e) {
                        return P(S(S({}, t), e))
                    }
                }
        },
        99107: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => i,
                j: () => r
            });
            var r = {
                    SUCCESS: "SUCCESS",
                    FAILURE: "FAILURE",
                    CONTENT_TYPE_NOT_AVAILABLE: "CONTENT_TYPE_NOT_AVAILABLE"
                },
                i = {
                    alone: "radio/alone",
                    archives: "archives",
                    archivesArts: "archives/arts",
                    archivesHistory: "archives/history",
                    archivesSports: "archives/sports",
                    cape: "cape",
                    capePostings: "cape/postings",
                    cbcGives: "life/holiday/cbcgives",
                    costOfLiving: "radio/costofliving",
                    crashedIce: "sports/crashed-ice",
                    documentariesCategory: "documentaries",
                    greatCanadianBakingBakerCategory: "life/greatcanadianbakingshow",
                    fifaWorldCup: "sports/soccer/worldcup",
                    findingCleo: "radio/findingcleo",
                    fridgeLight: "radio/thefridgelight",
                    frontburner: "radio/frontburner",
                    indspire: "indspire",
                    inTheMaking: "arts/inthemaking",
                    iqPodcast: "radio/iqpodcast",
                    iqPodcastTranscripts: "radio/iqpodcast/transcripts",
                    learningEnglish: "learning-english",
                    musicReadVideo: "music/read/video",
                    musicExplore: "music/explore",
                    musicEvents: "music/events",
                    musicCCMAs: "music/ccmas",
                    musicTheIntro: "music/the-intro",
                    missingandmurdered: "radio/asithappens/missingandmurdered",
                    musicJunosVideo: "music/junos/watch/video",
                    loveMe: "radio/loveme",
                    micdrop: "radio/micdrop",
                    micdropTranscripts: "radio/micdrop/transcripts",
                    override: "topstories",
                    onDrugs: "radio/ondrugs",
                    otherPeoplesproblems: "radio/opp",
                    personalBest: "radio/personalbest",
                    podcastnews: "radio/podcastnews",
                    podcasts: "sports/podcasts",
                    podcastsHnic: "sports/podcasts/hnic",
                    playersOwnVoice: "sports/podcasts/players-own-voice",
                    qVideo: "radio/q/video",
                    recall: "radio/recall",
                    secretlifeofcanada: "radio/secretlifeofcanada/transcripts",
                    sleepover: "radio/sleepover",
                    someoneKnowsSomething: "radio/sks",
                    soccerMLS: "sports/soccer/mls",
                    soccerCPL: "sports/soccer/cpl",
                    taiaskswhy: "radio/taiaskswhy",
                    thisisthat: "radio/thisisthat",
                    uncover: "radio/uncover",
                    uncoverSeason1: "radio/uncover/season1",
                    uncoverSeason2: "radio/uncover/season2",
                    uncoverSeason3: "radio/uncover/season3",
                    uncoverSeason4: "radio/uncover/season4",
                    uncoverSeason5: "radio/uncover/season5",
                    uncoverSeason6: "radio/uncover/season6",
                    whatonearth: "radio/whatonearth",
                    jamieOliver: "life/jamieoliver",
                    jamieOliverRecipes: "life/jamieoliver/recipes",
                    jamieOliverWatch: "life/jamieoliver/watch",
                    battleofblades: "television/battleoftheblades",
                    skaters: "television/battleoftheblades/skaters",
                    blades: "television/battleoftheblades/blades-performances",
                    mini: "television/battleoftheblades/mini-blades",
                    fridgeWars: "life/fridgewars",
                    familyFeud: "television/familyfeud",
                    highArcticHaulers: "television/higharctichaulers",
                    backInTimeForWinter: "life/backintimeforwinter",
                    briefButSpectacular: "documentaries/brief-but-spectacular"
                }
        },
        83696: (e, t, n) => {
            "use strict";
            n.d(t, {
                QZ: () => P,
                RD: () => I,
                xm: () => x
            });
            var r = n(4942),
                i = n(15861),
                a = n(64687),
                o = n.n(a),
                s = (n(30666), n(95566), n(6129), n(58109), n(68438), n(83464), n(19496), n(88101)),
                c = n(54799),
                l = n(57241),
                u = n(12580),
                p = n(99014),
                d = n(15549),
                f = n(24876),
                m = n(91189),
                g = n(48271),
                h = n(99107),
                v = n(29274),
                b = n(97767),
                y = n(59557),
                w = n(50465),
                j = n(41718);

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

            function k(e) {
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
            var S = (0, n(71714).X)("lineup");

            function P(e) {
                var t = e.section,
                    n = e.appendContent,
                    r = void 0 !== n && n,
                    a = e.maybeInsertAd,
                    g = void 0 !== a && a,
                    O = e.page,
                    P = void 0 === O ? 1 : O,
                    x = e.pageSize,
                    I = void 0 === x ? v.L8 : x,
                    D = e.isLoadMore,
                    C = void 0 !== D && D,
                    _ = e.abTestSlug,
                    L = void 0 === _ ? null : _;
                return function() {
                    var e = (0, i.Z)(o().mark((function e(n, i) {
                        var a, O, x, D, _, A, E, T, Z, N, M, R, B, U, q, F;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (A = i().content.list, e.prev = 3, a = L || S(i()) || (0, s.aC)(t), O = (0, s.Th)(t), _ = Object.values(h.N).find((function(e) {
                                            return t.startsWith(e)
                                        })), x = _ ? "empty-category" : (0, s.un)(t), E = (0, s.Dr)(t), D = (0, s.NJ)(t), T = b.SA[t] || b.SA[E], (0, u.N)({
                                            lineupSlug: a,
                                            subjectsSet: O,
                                            tags: D
                                        })) {
                                        e.next = 13;
                                        break
                                    }
                                    throw new w.p(404, "lineup does not exist");
                                case 13:
                                    return T && (I = T.customPageSize || I), n((0, f.ii)()), Z = Date.now(), e.next = 18, (0, m.Q)({
                                        lineupSlug: a,
                                        categorySlug: x,
                                        subjectsSet: O,
                                        tags: D,
                                        page: P,
                                        pageSize: I
                                    });
                                case 18:
                                    N = e.sent, M = N.allContentItems, (0, l.$I)(t, M.nodes), g && (M.nodes = (0, u.$)(M.nodes, v.J5)), R = [], r ? (R = (0, c.H9)(M.nodes), (null === (B = R) || void 0 === B ? void 0 : B.length) >= 1 && (R[0].focus = !0), R = A.concat(R)) : R = (0, c.H9)(M.nodes), U = {
                                        section: t,
                                        contentList: R,
                                        timestamp: Z,
                                        pageValue: P,
                                        status: h.j.SUCCESS,
                                        hasNextPage: M.nodes.length === I
                                    }, C || (q = R[0], F = null !== q && void 0 !== q && q.packageComponents ? q : null, U = k(k({}, U), {}, {
                                        contentPackage: F
                                    })), n((0, p.E8)(k(k({}, U), {}, {
                                        isLoadMore: C
                                    }))), e.next = 38;
                                    break;
                                case 29:
                                    if (e.prev = 29, e.t0 = e.catch(3), j.default.error("(fetch_page_content_graphql) error for ".concat(t), e.t0), 1 !== P) {
                                        e.next = 36;
                                        break
                                    }
                                    throw e.t0;
                                case 36:
                                    n((0, p.E8)({
                                        contentList: A,
                                        pageValue: P - 1,
                                        section: t,
                                        timestamp: Date.now(),
                                        hasNextPage: !1,
                                        status: h.j.CONTENT_TYPE_NOT_AVAILABLE
                                    })), j.default.error("(fetch_content_graphql) Error: {code: ".concat(y.i.INVALID_CONTENT_REQUEST, ", description: Content does not exist for ").concat(t, "}"));
                                case 38:
                                    return e.prev = 38, (0, u.N)({
                                        lineupSlug: a,
                                        subjectsSet: O,
                                        tags: D
                                    }) && n((0, d.k)()), e.finish(38);
                                case 41:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 29, 38, 41]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }

            function x(e) {
                var t = {
                    appendContent: !0,
                    maybeInsertAd: !0,
                    isLoadMore: !0,
                    section: e
                };
                return function(e) {
                    return P(k(k({}, t), e))
                }
            }

            function I(e) {
                var t = e.section,
                    n = e.previewId,
                    r = e.preview,
                    a = void 0 === r ? "nine" : r;
                return function() {
                    var e = (0, i.Z)(o().mark((function e(r) {
                        var i, s, l, u;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t && n) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.prev = 2, e.next = 5, (0, g.f5)(n, a);
                                case 5:
                                    s = e.sent, i = (0, c.H9)([s.contentItem]), l = i[0], u = null !== l && void 0 !== l && l.packageComponents ? l : null, r((0, p.E8)({
                                        contentList: i,
                                        pageValue: 1,
                                        section: t,
                                        timestamp: Date.now(),
                                        status: h.j.SUCCESS,
                                        contentPackage: u
                                    })), e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(2), j.default.error("(fetch_content_preview) fetchContentPackage failed for ".concat(n));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 12]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }
        },
        12580: (e, t, n) => {
            "use strict";

            function r(e) {
                return !!e.lineupSlug || !!e.subjectsSet || !!e.tags
            }

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return e.length > t && (e[t].insertAd = !0), e
            }
            n.d(t, {
                $: () => i,
                N: () => r
            })
        },
        74543: (e, t, n) => {
            "use strict";
            n.d(t, {
                Sg: () => i,
                gC: () => r,
                l$: () => a
            });
            var r = "olympicsFilters",
                i = {};
            i[r] = "CBC_OLYMPICS_FILTER_";
            var a = 1e4
        },
        11573: (e, t, n) => {
            "use strict";
            n.d(t, {
                IM: () => y,
                Gc: () => h,
                xv: () => v,
                LK: () => b
            });
            var r = n(15861),
                i = n(29439),
                a = n(64687),
                o = n.n(a),
                s = (n(83464), n(95566), n(19496), n(49467)),
                c = n(74543),
                l = n(41718),
                u = n(74987);

            function p() {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = (0, r.Z)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, Promise.race([null === (t = window) || void 0 === t || null === (t = t.CBC) || void 0 === t || null === (t = t.APP) || void 0 === t || null === (t = t.DMP) || void 0 === t || null === (t = t.LOTAME) || void 0 === t ? void 0 : t.audiences, new Promise((function(e) {
                                    setTimeout((function() {
                                        e([])
                                    }), c.l$)
                                }))]);
                            case 3:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 6;
                                    break
                                }
                                e.t0 = [];
                            case 6:
                                return e.abrupt("return", e.t0);
                            case 9:
                                return e.prev = 9, e.t1 = e.catch(0), l.default.error("Failed to get user audiences", e.t1), e.abrupt("return", []);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 9]
                    ])
                })))).apply(this, arguments)
            }

            function f(e, t) {
                try {
                    var n;
                    return "function" !== typeof((0, u.j)() && (null === (n = window.CBC) || void 0 === n || null === (n = n.APP) || void 0 === n || null === (n = n.DMP) || void 0 === n || null === (n = n.LOTAME) || void 0 === n ? void 0 : n.filterAudiences)) ? [] : window.CBC.APP.DMP.LOTAME.filterAudiences(e, t)
                } catch (r) {
                    return l.default.error("Failed to get filter audiences function", r), []
                }
            }
            var m = function(e, t, n) {
                    var r;
                    if (e && t && null !== (r = window) && void 0 !== r && r.localStorage) {
                        var i = c.Sg[e];
                        i && window.localStorage.setItem(i + t.toUpperCase(), +n)
                    }
                },
                g = n(13367),
                h = function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return function(r, i) {
                        if (n || !i().dmp.preferences[e]) {
                            var a = c.Sg[e],
                                o = {};
                            t.forEach((function(e) {
                                var t = function(e) {
                                    if (!(0, u.s)() && window.localStorage) {
                                        var t = window.localStorage.getItem(e);
                                        return null !== t ? !!+t : void 0
                                    }
                                }(a + e.toUpperCase());
                                void 0 !== t && (o[e] = t)
                            })), r((0, s.b_)({
                                namespace: e,
                                preferences: o
                            }))
                        }
                    }
                },
                v = function(e, t, n, r) {
                    return function(i) {
                        r || m(e, t, n), i((0, s.rh)({
                            namespace: e,
                            key: t,
                            value: n
                        }))
                    }
                },
                b = function(e, t) {
                    return function(n) {
                        try {
                            Object.entries(t).forEach((function(t) {
                                var n = (0, i.Z)(t, 2),
                                    r = n[0],
                                    a = n[1];
                                m(e, r, a)
                            }))
                        } catch (r) {
                            l.default.error("(update_namespace_preferences) Failed to save ".concat(e, " preferences"), r)
                        }
                        n((0, s.hC)({
                            namespace: e,
                            preferences: t
                        }))
                    }
                };

            function y() {
                return function() {
                    var e = (0, r.Z)(o().mark((function e(t, n) {
                        var r, i, a, c;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!n().dmp.audienceSegmentsLoaded) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return i = [], e.prev = 3, e.next = 6, p();
                                case 6:
                                    r = e.sent, i = f(r, ["Ads", "Dfp"]), e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(3), l.default.error("Failed to get audiences", e.t0);
                                case 13:
                                    return e.prev = 13, c = null !== (a = (0, g.qm)(r)) && void 0 !== a ? a : [], t((0, s.R3)({
                                        audienceSegments: c,
                                        adAudiences: i
                                    })), e.finish(13);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 10, 13, 17]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }
        },
        59557: (e, t, n) => {
            "use strict";
            n.d(t, {
                i: () => r
            });
            var r = {
                INVALID_CONTENT_REQUEST: "ERROR_INVALID_CONTENT_REQUEST"
            }
        },
        43892: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => P,
                e: () => x
            });
            var r = n(15861),
                i = n(64687),
                a = n.n(i),
                o = n(49129),
                s = n(15549),
                c = n(24876),
                l = n(41718),
                u = n(50465),
                p = n(89698),
                d = n(93849),
                f = n(82489),
                m = "fragment associatedContentFragment on AssociatedContent {\n    ... on ContentItem  {\n        sourceId\n        description\n        type\n        title\n        publishedAt\n        image {\n            aspects {\n                ratio16x9 {\n                    url\n                }\n                ratio9x16 {\n                    url\n                }\n            }\n        }\n        showData {\n            name\n        }\n        media {\n            duration\n            streamType\n            hasCaptions\n            aspectRatio\n        }\n    }\n    ... on Image {\n        sourceId\n        type:__typename\n        aspects {\n            ratio16x9 {\n                url\n            }\n            ratioCustom {\n                url\n            }\n        }\n        credit\n        description\n        altText\n    }\n}",
                g = "fragment liveStoryUpdateFragment on LiveStoryUpdate {\n    id\n    publishedAt\n    title\n    body {\n        parsed\n        associatedContent {\n            ...associatedContentFragment\n        }\n    }\n    author {\n        name\n        title\n        url\n    }\n}",
                h = "fragment liveStoryFragment on ContentItem {\n    id\n    sourceId\n    source\n    type\n    url\n    flag\n    title\n    deck\n    publishedAt\n    updatedAt\n    image {\n        aspects {\n            ratio16x9 {\n                url\n            }\n        }\n    }\n    section {\n        tracking {\n            contentArea\n            subSection1\n            subSection2\n            subSection3\n            subSection4\n        },\n    },\n    body {\n        parsed\n        associatedContent {\n            ...associatedContentFragment\n        }\n    }\n}",
                v = n(68075),
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.minPubDate,
                        n = e.maxPubDate,
                        r = e.pageSize,
                        i = e.sort,
                        a = void 0 === i ? "-publishedAt" : i,
                        o = [];
                    return t && o.push('minPubDate: "'.concat(t, '"')), n && o.push('maxPubDate: "'.concat(n, '"')), r && o.push("pageSize: ".concat(r)), a && o.push('sort: "'.concat(a, '"')), o.join(", ")
                },
                y = function(e) {
                    var t = w(e) ? e : null;
                    return t ? b({
                        minPubDate: t,
                        maxPubDate: t
                    }) : null
                },
                w = function(e) {
                    return "string" === typeof e && /^\d+$/.test(e)
                },
                j = d.KF("Client.contentApi.baseGraphqlURL"),
                O = function(e, t, n) {
                    var r = (0, f.Hl)(t),
                        i = function(e, t, n) {
                            var r = "";
                            if (t) {
                                var i = (0, v.getFeedCookie)("nine_gtoken");
                                r = "preview;aggToken=".concat(null === i || void 0 === i ? void 0 : i.value, ";cacheBust=").concat(Date.now())
                            }
                            var a = b({
                                    pageSize: 10
                                }),
                                o = y(n);
                            return '\n        query {\n            liveStoryPage:contentItem(sourceId: "'.concat(e, '", contentStatus: "').concat(r, '") {\n                ...liveStoryFragment\n                liveStory {\n                    eventTitle\n                    updates(').concat(a, ") {\n                        nodes {\n                            ...liveStoryUpdateFragment\n                        }\n                    }\n                    ").concat(o ? "sharedUpdate: updates(".concat(o, ") {\n                        nodes {\n                            ...liveStoryUpdateFragment\n                        }\n                    }") : "", "\n                }\n            }\n        }\n        ").concat(h, "\n        ").concat(g, "\n        ").concat(m, "\n    ")
                        }(e, t, n);
                    return r(j, {
                        query: i
                    }, !1)
                },
                k = function(e, t) {
                    var n = function(e, t) {
                        var n = b(t);
                        return '\n        query {\n            liveStoryUpdates:contentItem(sourceId: "'.concat(e, '") {\n                ...liveStoryFragment\n                liveStory {\n                    eventTitle\n                    updates(').concat(n, ") {\n                        nodes {\n                            ...liveStoryUpdateFragment\n                        }\n                    }\n                }\n            }\n        }\n        ").concat(h, "\n        ").concat(g, "\n        ").concat(m, "\n    ")
                    }(e, t);
                    return (0, f.he)(j, {
                        query: n
                    }, !1)
                },
                S = n(57018),
                P = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return function() {
                        var i = (0, r.Z)(a().mark((function r(i) {
                            var d, f, m, g;
                            return a().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return i((0, o.TK)()), r.prev = 1, i((0, c.ii)()), r.next = 5, O(e, t, n);
                                    case 5:
                                        if ("livestory" === (null === (f = r.sent) || void 0 === f || null === (d = f.data) || void 0 === d || null === (d = d.liveStoryPage) || void 0 === d ? void 0 : d.type)) {
                                            r.next = 9;
                                            break
                                        }
                                        throw l.default.warn("(fetch_live_story_page) content type not supported!"), new u.p(404);
                                    case 9:
                                        (m = f.data.liveStoryPage).schema = (0, S.V2)(m), i((0, o.wo)(m)), i((0, p.Pc)(m)), r.next = 20;
                                        break;
                                    case 15:
                                        throw r.prev = 15, r.t0 = r.catch(1), g = r.t0 instanceof Error ? r.t0 : new u.o(r.t0), l.default.error("(fetch_live_story_page) request failed for ".concat(e), g), g;
                                    case 20:
                                        return r.prev = 20, i((0, s.k)()), r.finish(20);
                                    case 23:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [1, 15, 20, 23]
                            ])
                        })));
                        return function(e) {
                            return i.apply(this, arguments)
                        }
                    }()
                },
                x = function() {
                    var e = (0, r.Z)(a().mark((function e(t, n) {
                        var r, i, s;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, k(t, n);
                                case 3:
                                    return r = e.sent, i = (0, o.zi)(r.data.liveStoryUpdates), e.abrupt("return", i);
                                case 8:
                                    throw e.prev = 8, e.t0 = e.catch(0), s = e.t0 instanceof Error ? e.t0 : new u.o(e.t0), l.default.error("(fetch_live_story_updates) request failed for ".concat(t), s), s;
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        50853: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q8: () => o,
                av: () => a,
                xj: () => s
            });
            var r = n(38339),
                i = n(7157),
                a = function(e) {
                    return function(t, n) {
                        t((0, i.VK)({
                            userId: e
                        }));
                        var a = n().preferences.userId;
                        a && a !== e && (0, r.D6)()
                    }
                },
                o = function(e, t) {
                    return function(n, a) {
                        var o = a().preferences;
                        if (o.userId === e)
                            for (var s in n((0, i.CT)({
                                    preferences: t
                                })), t) o.preferences.hasOwnProperty(s) || (0, r.Fs)(s, t[s])
                    }
                },
                s = function(e, t, n) {
                    return function(a, o) {
                        o().preferences.userId === e && (a((0, i.tY)({
                            preference: t,
                            value: n
                        })), (0, r.Fs)(t, n))
                    }
                }
        },
        91392: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => O,
                M: () => k
            });
            var r = n(15861),
                i = (n(9867), n(7231), n(58109), n(95566), n(68438), n(64687)),
                a = n.n(i),
                o = n(41718),
                s = n(15549),
                c = n(24876),
                l = n(64744),
                u = n(4964),
                p = n(82489),
                d = n(45532),
                f = n(63578),
                m = n(88101),
                g = f.nv.filter((function(e) {
                    return !e.hideInNav
                })).map((function(e) {
                    var t = e.path;
                    return {
                        title: e.title,
                        shortTitle: e.shortTitle,
                        link: e.link,
                        lineupID: t.replace(/[^\w]/g, ""),
                        lineupSlug: (0, m.aC)(t)
                    }
                })),
                h = function() {
                    var e = (0, r.Z)(a().mark((function e(t) {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, p.he)(u.o, {
                                        query: (0, d.Sd)(g, t)
                                    }, !1);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = n(4954),
                b = n(79057),
                y = n(97365);

            function w(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return j(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? j(e, t) : void 0
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
                var a, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        s = !0, a = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                return function() {
                    var t = (0, r.Z)(a().mark((function t(n) {
                        var r, i, u, p, d, f, m;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n((0, c.ii)()), t.prev = 1, t.next = 4, h(e);
                                case 4:
                                    if (r = t.sent, i = r.data, u = r.errors) {
                                        p = w(u);
                                        try {
                                            for (p.s(); !(d = p.n()).done;) f = d.value, o.default.error("(fetch_all_regions_graphql) fetch_regions request failed", new Error("(fetch_all_regions_graphql) fetch_regions request failed on ".concat(f.path[0], " - [").concat(f.message, "]"), {
                                                cause: f
                                            }))
                                        } catch (a) {
                                            p.e(a)
                                        } finally {
                                            p.f()
                                        }
                                    }
                                    m = (0, v.du)(g, i), n((0, l.VG)({
                                        regionList: m
                                    })), t.next = 16;
                                    break;
                                case 12:
                                    throw t.prev = 12, t.t0 = t.catch(1), o.default.error("(fetch_all_regions_graphql) request failed", t.t0), t.t0;
                                case 16:
                                    return t.prev = 16, n((0, s.k)()), t.finish(16);
                                case 19:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 12, 16, 19]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }
            var k = function(e, t, n, r, i, a) {
                return function(o) {
                    var s = (0, b.f)(e);
                    if ("flp" === a) {
                        if ("" === r && "" === i) return Promise.resolve();
                        s.push({
                            section: "".concat(t),
                            type: "localSubject",
                            itemCount: 4,
                            subjects: r,
                            excludedCategorySet: i
                        })
                    }
                    var c = s.filter((function(e) {
                        return "localSubject" === e.type
                    })).map((function(e) {
                        return e.slug = n, e
                    }));
                    return 0 === c.length ? Promise.resolve() : fetch(c).then((function(e) {
                        return e.map((function(e) {
                            return (0, y.Ui)({
                                sectionList: e.response,
                                section: e.section,
                                timestamp: Date.now()
                            })
                        })).map((function(e) {
                            return o(e)
                        }))
                    }))
                }
            }
        },
        16813: (e, t, n) => {
            "use strict";
            n.d(t, {
                s$: () => $,
                fG: () => G,
                Tq: () => Y,
                ty: () => J,
                yt: () => Q
            });
            var r = n(4942),
                i = (n(83464), n(95566), n(19496), n(58109), n(68438), n(93849)),
                a = {
                    default: i.KF("Client.scheduleApi.sportsBaseURL"),
                    sports: i.KF("Client.scheduleApi.sportsBaseURL"),
                    radio: "".concat("https://www.cbc.ca/cors-hadder?url=" + encodeURIComponent("https://www.cbc.ca/programguide/live.do?output=json&networkKey=cbc_radio_one"))
                },
                o = n(20290),
                s = n(41718),
                c = n(43386),
                l = n(15549),
                u = n(24876),
                p = n(65456);

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
            var m = {
                    title: "",
                    types: [],
                    url: "",
                    thumbnail: "",
                    media: ["web"],
                    startTime: "",
                    endTime: ""
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return f(f({
                        id: (0, p.Z)("sports-schedule")
                    }, m), e)
                },
                h = {
                    startDate: "",
                    endDate: "",
                    startTime: "",
                    endTime: "",
                    epochStart: "",
                    epochEnd: "",
                    title: "",
                    url: "",
                    networkName: ""
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return f(f({
                        id: (0, p.Z)("radio-schedule")
                    }, h), e)
                },
                b = n(21188),
                y = n(184),
                w = n(47452),
                j = n(50465),
                O = (0, i.KF)("Client.scheduleApi.sportsBaseURL"),
                k = n(54799),
                S = n(69777),
                P = n(67558),
                x = n(45987),
                I = (n(53145), n(62153), n(2041), n(2612), n(72411), n(83063), n(69626)),
                D = function(e, t) {
                    return e.stt ? t.stt ? (0, I.utcToZonedTime)(new Date(e.stt)) - (0, I.utcToZonedTime)(new Date(t.stt)) : -1 : 1
                },
                C = n(29439),
                _ = n(94),
                L = function(e) {
                    return e.includes(_.Tf)
                },
                A = function(e) {
                    return e.includes(_.Uv)
                },
                E = function(e) {
                    return e && Array.isArray(e.typ)
                },
                T = function(e) {
                    return function(t) {
                        return E(t) && t.typ.includes(e)
                    }
                },
                Z = function(e) {
                    return function(t) {
                        return t && Array.isArray(t.on) && t.on.includes(e)
                    }
                },
                N = function(e) {
                    return function(t) {
                        return t && Array.isArray(t.oly) && e(t.oly)
                    }
                },
                M = function(e) {
                    return function(t) {
                        return E(t) && e.some((function(e) {
                            return t.typ.includes(e)
                        }))
                    }
                },
                R = function(e) {
                    return function(t) {
                        return !M(e)(t)
                    }
                },
                B = function(e, t) {
                    var n = t && T(t),
                        r = (e = (0, P.gZ)(e)).length > 0 && M(e);
                    return n && r ? function(e) {
                        return !!n(e) && (!!e.typ.every((function(e) {
                            return e === t
                        })) || r(e))
                    } : n || r
                },
                U = n(20694),
                q = ["type"];

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

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var V = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = e.type,
                    a = (0, x.Z)(e, q),
                    o = U.Rj[i] ? function(e) {
                        return (0, P.G3)(r)(e) && T(U.Rj[i])(e)
                    } : (0, P.G3)(r);
                return function(e, t, n) {
                    var r = t.platform,
                        i = t.types,
                        a = t.isTeamCanada,
                        o = t.isMedal,
                        s = t.eventType,
                        c = t.ignoreTypes,
                        l = s || i;
                    return [
                        [r, Z(r)],
                        [l, B(i, s)],
                        [a, N(L)],
                        [o, N(A)],
                        [n, n],
                        [c, R((0, P.gZ)(c))]
                    ].reduce((function(e, t) {
                        var n = (0, C.Z)(t, 2),
                            r = n[0],
                            i = n[1];
                        return r ? e.filter(i) : e
                    }), e)
                }(n, z(z({}, t), a), o).sort(D)
            };

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

            function H(e) {
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
            var K = function() {
                var e = arguments.length > 1 ? arguments[1] : void 0;
                switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sports") {
                    case "radio":
                        return e ? v({
                            startDate: e.startDate,
                            endDate: e.endDate,
                            startTime: e.startTime,
                            endTime: e.endTime,
                            epochStart: e.epochStart,
                            epochEnd: e.epochEnd,
                            title: e.program ? e.program.title : "",
                            url: e.program ? e.program.website : "",
                            networkName: e.networkName
                        }) : v();
                    case "sports":
                        return e ? g({
                            title: e.ti || "",
                            types: e.typ || [],
                            url: e.url || "",
                            thumbnail: e.thumb || "",
                            media: e.on || [],
                            startTime: e.stt || "",
                            endTime: e.end || ""
                        }) : g();
                    default:
                        return g()
                }
            };

            function G(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return function(n, r) {
                    var i = r(),
                        p = i.schedule ? i.schedule[e] : null,
                        d = p && p.scheduleList ? p : null,
                        f = d ? d.regionName : null;
                    (!d || f && d.regionName !== t) && function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                        e((0, u.ii)());
                        var r = t ? a[t] : a.default;
                        n && (r = "".concat(r).concat(encodeURIComponent("&locationKey=".concat(n))));
                        (0, c.request)(r).then((function(e) {
                            if ((0, b.fQ)(e)) return e.json()
                        })).then((function(r) {
                            var i = r.schedule ? r.schedule : r.timeslots;
                            if (i && i.length > 0) {
                                var a = Date.now(),
                                    s = [];
                                i.forEach((function(e) {
                                    s.push(K(t, e))
                                })), e((0, o.up)({
                                    scheduleList: s,
                                    type: t,
                                    timestamp: a,
                                    regionName: n
                                }))
                            }
                            e((0, l.k)())
                        })).catch((function(n) {
                            s.default.error("(makeScheduleApiCall) ".concat(t, " request failed"), n), e((0, l.k)())
                        }))
                    }(n, e, t)
                }
            }
            var $ = function(e, t) {
                    return function(n, r) {
                        var i, a = r().schedule;
                        if (Date.now() - ((null === a || void 0 === a || null === (i = a.sportsSchedule) || void 0 === i ? void 0 : i.timestamp) || 0) > y.Dm) {
                            n((0, u.ii)()), n((0, o.Sf)({
                                loading: !0
                            }));
                            var p = (0, c.request)(O).then((function(e) {
                                if (e.status === w.h7) return e.json();
                                throw new j.p(e.status, e.statusText)
                            })).then((function(t) {
                                var r = (0, k._9)(t.schedule),
                                    i = a[e] || {},
                                    s = V(null === i || void 0 === i ? void 0 : i.filterBar, null === i || void 0 === i ? void 0 : i.filter, r, null === i || void 0 === i ? void 0 : i.zone),
                                    c = (0, S.DR)(null === i || void 0 === i ? void 0 : i.filter, null === i || void 0 === i ? void 0 : i.filterBar);
                                n((0, o.Bl)({
                                    key: e,
                                    sportsSchedule: {
                                        timestamp: Date.now(),
                                        loading: !1,
                                        scheduleList: r
                                    },
                                    filteredScheduleList: s,
                                    caption: c
                                }))
                            })).catch((function(e) {
                                n((0, o.Sf)({
                                    loading: !1
                                })), s.default.error("(fetchSportsSchedule) fetch_broadcast_schedule", e)
                            })).finally((function() {
                                n((0, l.k)())
                            }));
                            if (t) throw p;
                            return p
                        }
                        return Promise.resolve()
                    }
                },
                Q = function(e, t) {
                    return function(n, r) {
                        var i, a = r().schedule,
                            s = null === a || void 0 === a || null === (i = a.sportsSchedule) || void 0 === i ? void 0 : i.scheduleList,
                            c = a[e] || {},
                            l = H(H({}, null === c || void 0 === c ? void 0 : c.filterBar), t),
                            u = V(l, null === c || void 0 === c ? void 0 : c.filter, s, null === c || void 0 === c ? void 0 : c.zone),
                            p = (0, S.DR)(null === c || void 0 === c ? void 0 : c.filter, t);
                        n((0, o.s1)({
                            key: e,
                            filterBar: l,
                            filteredScheduleList: u,
                            caption: p
                        }))
                    }
                },
                J = function(e, t, n) {
                    return function(r, i) {
                        var a, s = i().schedule,
                            c = null === s || void 0 === s || null === (a = s.sportsSchedule) || void 0 === a ? void 0 : a.scheduleList,
                            l = s[e] || {},
                            u = V(null === l || void 0 === l ? void 0 : l.filterBar, t, c, n),
                            p = (0, S.DR)(t, null === l || void 0 === l ? void 0 : l.filterBar),
                            d = null !== t && void 0 !== t && t.types ? (0, P.y4)(t.types) : {};
                        r((0, o.Vy)({
                            filter: t,
                            key: e,
                            zone: n,
                            filteredScheduleList: u,
                            caption: p,
                            dropDownList: d
                        }))
                    }
                },
                Y = function(e) {
                    return function(t, n) {
                        var r, i = n().schedule[e] || {},
                            a = (0, P.y4)(null === i || void 0 === i || null === (r = i.filter) || void 0 === r ? void 0 : r.types);
                        t((0, o.x3)({
                            key: e,
                            dropDownList: a
                        }))
                    }
                }
        },
        77340: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            n(58109), n(95566), n(68438), n(9867), n(7231);
            var r = n(4964),
                i = n(82489),
                a = n(54799),
                o = n(57241),
                s = n(13019),
                c = n(45532),
                l = n(88101),
                u = function(e, t) {
                    return function(n) {
                        var r = n[e];
                        return r && r.nodes ? ((0, o.$I)(t, r.nodes), (0, a.H9)(r.nodes)) : null
                    }
                },
                p = function(e) {
                    return function(t) {
                        var n = t[e];
                        return n && n.nodes ? (0, a.H9)(n.nodes) : null
                    }
                },
                d = function(e) {
                    return e.map((function(e) {
                        return "localSubject" === e.type ? function(e) {
                            var t = (0, s.K)(e.section);
                            return {
                                query: (0, c.kG)(t, e.slug, e.subjects, e.itemCount, e.excludedCategorySet),
                                response: p(t),
                                section: e.section
                            }
                        }(e) : function(e) {
                            var t = e.section,
                                n = e.itemCount,
                                r = (0, l.aC)(t),
                                i = (0, l.Th)(t),
                                a = (0, l.NJ)(t),
                                p = (0, o.ey)(t, (0, l.un)(t)),
                                d = (0, s.K)(t);
                            return {
                                query: (0, c.bX)(d, r, p, n, i, "", "", a),
                                response: u(d, t),
                                section: t
                            }
                        }(e)
                    }))
                };
            var f = n(97365),
                m = n(15549),
                g = n(24876),
                h = n(79057);
            const v = function(e) {
                return function(t) {
                    var n = (0, h.f)(e).filter((function(e) {
                        return "localSubject" !== e.type
                    }));
                    return 0 === n.length ? Promise.resolve() : (t((0, g.ii)()), function(e) {
                        var t = d(e),
                            n = (0, s.Z)(t.map((function(e) {
                                return e.query
                            })));
                        return n || Promise.resolve([]), (0, i.he)(r.o, n, !1).then((function(e) {
                            return t.map((function(t) {
                                return t.response = t.response(e.data), t
                            })).filter((function(e) {
                                return Boolean(e.response)
                            }))
                        }))
                    }(n).then((function(e) {
                        return e.map((function(e) {
                            return (0, f.Ui)({
                                sectionList: e.response,
                                section: e.section,
                                timestamp: Date.now()
                            })
                        })).map((function(e) {
                            return t(e)
                        }))
                    })).finally((function(e) {
                        return t((0, m.k)()), e
                    })))
                }
            }
        },
        79057: (e, t, n) => {
            "use strict";
            n.d(t, {
                f: () => i
            });
            var r = n(97767),
                i = function(e) {
                    return [].concat(r.bv[e] || [])
                }
        },
        39060: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => w,
                V: () => j
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(15861),
                a = n(64687),
                o = n.n(a),
                s = n(15549),
                c = n(24876),
                l = n(91189),
                u = n(45532),
                p = n(54799),
                d = n(99014),
                f = n(99107),
                m = n(29274),
                g = n(59557),
                h = n(12580),
                v = n(41718);

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

            function y(e) {
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
            var w = function(e) {
                    var t = e.section,
                        n = e.kind,
                        r = e.keywords,
                        a = e.page,
                        b = void 0 === a ? 1 : a,
                        y = e.pageSize,
                        w = void 0 === y ? m.L8 : y,
                        j = e.maybeInsertAd,
                        O = void 0 !== j && j;
                    return function() {
                        var e = (0, i.Z)(o().mark((function e(i, a) {
                            var m, y, j, k, S, P, x, I, D;
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n && r) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return m = a().content.list, e.prev = 3, i((0, c.ii)()), y = Date.now(), j = {
                                            page: b,
                                            pageSize: w,
                                            query: u.Vj
                                        }, "Subject" === n ? j.concepts = decodeURIComponent(r) : j.tags = "".concat("Tag" === n ? "generic" : n.toLowerCase(), ":").concat(decodeURIComponent(r)), e.next = 10, (0, l.Q)(j);
                                    case 10:
                                        k = e.sent, S = k.allContentItems, O && (S.nodes = (0, h.$)(S.nodes)), [], P = m.concat((0, p.H9)(S.nodes)), x = P[0], I = x && x.packageComponents ? x : null, i((0, d.E8)({
                                            section: t,
                                            contentList: P,
                                            timestamp: y,
                                            contentPackage: I,
                                            pageValue: b,
                                            status: f.j.SUCCESS,
                                            hasNextPage: S.nodes.length === w
                                        })), e.next = 29;
                                        break;
                                    case 20:
                                        if (e.prev = 20, e.t0 = e.catch(3), 1 !== b) {
                                            e.next = 26;
                                            break
                                        }
                                        throw e.t0;
                                    case 26:
                                        i((0, d.E8)({
                                            contentList: m,
                                            pageValue: b - 1,
                                            section: t,
                                            timestamp: Date.now(),
                                            status: f.j.CONTENT_TYPE_NOT_AVAILABLE,
                                            hasNextPage: !1
                                        })), D = "Error: {code: ".concat(g.i.INVALID_CONTENT_REQUEST, ", description: Content does not exist for keyword: ").concat(r, "}"), v.default.error("(fetch_topic_gql) ".concat(D));
                                    case 29:
                                        return e.prev = 29, i((0, s.k)()), e.finish(29);
                                    case 32:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 20, 29, 32]
                            ])
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                j = function(e, t) {
                    var n = {
                        kind: e,
                        keywords: t,
                        maybeInsertAd: !0
                    };
                    return function(e) {
                        return w(y(y({}, n), e))
                    }
                }
        },
        12523: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => r,
                j: () => i
            });
            var r = "video_current_clip_update",
                i = "video_current_clip_update_null"
        },
        39819: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => r,
                O: () => i
            });
            var r = "video_curated_playlist_update",
                i = "video_curated_playlist_null"
        },
        52401: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => d
            });
            var r = n(15861),
                i = n(64687),
                a = n.n(i),
                o = n(39819),
                s = function(e) {
                    return {
                        type: o.E,
                        payload: e
                    }
                },
                c = n(71733),
                l = n(51591),
                u = n(54799),
                p = n(73457),
                d = function(e, t) {
                    return function() {
                        var n = (0, r.Z)(a().mark((function n(r) {
                            var i, o, d, f, m, g, h, v;
                            return a().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, (0, c.KP)(e, 10);
                                    case 3:
                                        return i = n.sent, o = null !== e && void 0 !== e ? e : "", d = (0, u.H9)(i.allContentItems.nodes, o), f = {
                                            name: p.zg
                                        }, m = {
                                            instance: "News"
                                        }, g = (0, l.h)(d, f, t, m), h = {
                                            video: {
                                                data: {
                                                    curatedPlaylist: g
                                                }
                                            }
                                        }, n.abrupt("return", r(s(h)));
                                    case 13:
                                        return n.prev = 13, n.t0 = n.catch(0), v = {
                                            video: {
                                                data: {
                                                    curatedPlaylist: []
                                                }
                                            }
                                        }, n.abrupt("return", r(s(v)));
                                    case 17:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [0, 13]
                            ])
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                }
        },
        8486: (e, t, n) => {
            "use strict";
            n.d(t, {
                AO: () => i,
                h9: () => a,
                r7: () => r
            });
            var r = "video_more_from_base_section_update",
                i = "video_more_from_base_section_error",
                a = "video_more_from_base_section_null"
        },
        92516: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(42820),
                i = n(56552);
            const a = function() {
                var e = (0, r.useSelector)((function(e) {
                    return e.a11y.a11yNotificationText
                }));
                return (0, i.jsx)("div", {
                    id: "a11yNotification",
                    className: "a11y",
                    role: "alert",
                    "aria-live": "polite",
                    children: e
                })
            }
        },
        65916: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => be
            });
            var r = n(4942),
                i = n(29439),
                a = n(9867),
                o = n.n(a),
                s = n(7231),
                c = n.n(s),
                l = n(58109),
                u = n.n(l),
                p = n(95566),
                d = n.n(p),
                f = n(68438),
                m = n.n(f),
                g = n(83464),
                h = n.n(g),
                v = n(19496),
                b = n.n(v),
                y = n(14507),
                w = n.n(y),
                j = n(51569),
                O = n.n(j),
                k = n(35098),
                S = n.n(k),
                P = n(42820),
                x = n.n(P),
                I = n(83110),
                D = n.n(I),
                C = n(33251),
                _ = n(56605),
                L = n(11573),
                A = n(11623),
                E = n(62024),
                T = n(40690),
                Z = n(70787),
                N = n(46484),
                M = n(79532),
                R = n(6211),
                B = n(50439),
                U = n(37442),
                q = n(91816),
                F = n(18778),
                z = n(44192),
                V = n(19766),
                W = n(44203),
                H = n(2390),
                K = n(45440),
                G = n(85244),
                $ = n(60908),
                Q = n(92269),
                J = n(41718),
                Y = n(51341),
                X = n(97883),
                ee = n(71063),
                te = n(92516),
                ne = n(7590),
                re = n(21398),
                ie = n(75301),
                ae = n(28679),
                oe = n(24573),
                se = n(56552);

            function ce(e, t) {
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
                    t % 2 ? ce(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ce(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ue = (0, oe.S)((function() {
                    return Promise.all([n.e(532), n.e(9351), n.e(8825), n.e(6163), n.e(328)]).then(n.bind(n, 91066))
                }), "GlobalHeader"),
                pe = (0, Y.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "GlobalFooter-component"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(532), n.e(1857)]).then(n.bind(n, 7264))
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
                        return 7264
                    }
                }),
                de = !0,
                fe = !1,
                me = Object.entries(E.D).map((function(e, t) {
                    var n = (0, i.Z)(e, 2),
                        r = n[0],
                        a = n[1];
                    return (0, se.jsx)(I.Redirect, {
                        from: r,
                        to: a,
                        exact: !0
                    }, t)
                })),
                ge = "",
                he = function(e) {
                    return de ? (ge = e.app.path, !1) : ge !== e.app.path && (ge = "", !e.loader.loaded)
                },
                ve = function() {
                    var e = (0, P.useStore)(),
                        t = (0, I.useLocation)(),
                        n = (0, I.useHistory)().listen,
                        r = (0, k.useState)(!1),
                        a = (0, i.Z)(r, 2),
                        o = a[0],
                        s = a[1],
                        c = (0, k.useRef)(null),
                        l = (0, k.useRef)(null),
                        u = (0, Q.Z)(c, "viewportLarge"),
                        p = (0, $.S)(t),
                        d = p.adExclusions,
                        f = p.contentId,
                        m = (0, P.useDispatch)(),
                        g = (0, P.useSelector)((function(e) {
                            return e.detail.content.subject
                        })),
                        h = (0, P.useSelector)((function(e) {
                            return e.detail.content.gs_categories
                        })),
                        v = (0, P.useSelector)((function(e) {
                            return e.detail.content.gs_keywords
                        })),
                        b = (0, P.useSelector)((function(e) {
                            return e.detail.content.flag
                        })),
                        y = (0, P.useSelector)((function(e) {
                            return e.gdpr.euCountry
                        })),
                        O = (0, P.useSelector)((function(e) {
                            return e.app.themeClassNames
                        })),
                        S = (0, P.useSelector)((function(e) {
                            return e.app.pageType
                        })),
                        x = (0, P.useSelector)(he),
                        D = T.Z.map((function(e, t) {
                            var n = e.path,
                                r = e.component,
                                i = e.exact,
                                a = r;
                            return (0, se.jsx)(C.default, {
                                exact: i,
                                path: n,
                                render: function(e) {
                                    var t = le(le({}, e), {}, {
                                        viewport: u
                                    });
                                    return (0, se.jsx)(ae.Z, {
                                        children: (0, se.jsx)(a, le({}, t))
                                    })
                                }
                            }, t)
                        }));
                    (0, k.useEffect)((function() {
                        M.ZP.bindMediaQueries();
                        var e = (0, j.parse)(t.search, {
                            ignoreQueryPrefix: !0
                        });
                        if (e.webview) try {
                            m((0, _.Z$)(e.webview))
                        } catch (i) {
                            J.default.error("(AppContainer) Error setting isWebView", i)
                        }
                        "string" === typeof e.displayPrivacyBanner && (window.CBCCMPQueue = window.CBCCMPQueue || [], window.CBCCMPQueue.push((function() {
                            (0, re.cU)()
                        })));
                        try {
                            m((0, L.IM)())
                        } catch (i) {
                            J.default.error("(AppContainer) Failed to fetch audience", i)
                        }
                        var r = n((function() {
                            (0, R.K)()
                        }));
                        return (0, Z.EN)(), de = !1, m((0, A.ZB)()),
                            function() {
                                if (!fe) {
                                    fe = !0;
                                    var e = document.createElement("script");
                                    e.setAttribute("type", "text/javascript"), e.setAttribute("src", "https://cdn.viafoura.net/entry/index.js"), e.setAttribute("async", !0), e.onload = function() {
                                        var e = null;
                                        e = setInterval((function() {
                                            var t = new Event("mousemove"),
                                                n = new Event("touchmove");
                                            n.changedTouches = n.changedTouches || [], document.dispatchEvent(t), document.dispatchEvent(n), window.vf && (clearInterval(e), e = null)
                                        }), 100)
                                    }, document.body.appendChild(e)
                                }
                            }(),
                            function() {
                                r()
                            }
                    }), []), (0, k.useEffect)((function() {
                        x ? l.current = setTimeout((function() {
                            s(!0)
                        }), 1500) : (clearTimeout(l.current), !0 === o && s(!1))
                    }), [x]), (0, k.useEffect)((function() {
                        return n((function(e) {
                            "#content" !== e.hash && c.current.focus()
                        }))
                    }), []), (0, k.useEffect)((function() {
                        (0, X.Z)(ee.Y.initMembershipStore).then((function(t) {
                            t(e)()
                        })).catch((function(e) {
                            J.default.error("(AppContainer) Failed to initialize membership store [".concat(e.message, "]"))
                        }))
                    }), []), (0, k.useEffect)((function() {
                        m((0, ie.zg)())
                    }), []);
                    var E = !de && o,
                        Y = E ? "loading" : "loaded",
                        oe = S === G.D5,
                        ce = w()("appContainer", O, u, Y),
                        ge = {
                            type: "ocelot",
                            contentId: f,
                            subject: (0, N.ks)(g),
                            flag: b,
                            gs_categories: h,
                            gs_keywords: v
                        },
                        ve = t.pathname.replace(/^\//, ""),
                        be = (0, se.jsx)(ae.Z, {
                            children: (0, se.jsx)(ue, {
                                isDetail: oe,
                                viewport: u,
                                route: {
                                    path: ve,
                                    search: t.search
                                }
                            })
                        }),
                        ye = t.pathname.startsWith("/account/"),
                        we = !ye && (0, se.jsx)("div", {
                            className: "ad-risingstar-container",
                            children: (0, se.jsx)(B.Z, {
                                init: !0,
                                responsive: !0,
                                unmounted: !1,
                                type: "risingstar",
                                targeting: Object.assign({
                                    plc: "top"
                                }, ge),
                                exclusions: d,
                                eu_country: y
                            })
                        }),
                        je = (0, se.jsx)(pe, {
                            route: {
                                path: ve
                            }
                        });
                    return ve.startsWith(G.hn) ? be : ve.startsWith(G.DT) ? je : ve.startsWith(G.SF) ? (0, se.jsx)(U.default, {}) : (0, se.jsx)("div", {
                        className: ce,
                        ref: c,
                        "data-cy": "app-container",
                        children: (0, se.jsxs)(z.default, {
                            children: [(0, se.jsx)(q.ZP, {}), (0, se.jsx)(K.Z, {}), E && (0, se.jsx)(V.Z, {}), (0, se.jsxs)("div", {
                                className: "full-width-container top-head",
                                children: [we, be, (0, se.jsx)(te.Z, {})]
                            }), (0, se.jsxs)("div", {
                                className: "full-width-container mid-content",
                                children: [!oe && !ye && (0, se.jsx)(B.Z, {
                                    type: "outofpage",
                                    unmounted: !1,
                                    exclusions: d,
                                    targeting: ge
                                }), (0, se.jsx)(F.Z, {
                                    path: ve
                                }), (0, se.jsxs)("main", {
                                    className: "feed-content content",
                                    id: "content",
                                    children: [(0, se.jsx)("div", {
                                        className: "wallpaper-ad-wrap left",
                                        children: (0, se.jsx)("span", {
                                            className: "ad"
                                        })
                                    }), (0, se.jsx)("div", {
                                        className: "wallpaper-ad-wrap right",
                                        children: (0, se.jsx)("span", {
                                            className: "ad"
                                        })
                                    }), (0, se.jsxs)(I.Switch, {
                                        children: [me, D]
                                    })]
                                })]
                            }), (0, se.jsx)("div", {
                                className: "full-width-container bottom-foot",
                                children: je
                            }), (0, se.jsx)(z.default, {
                                children: (0, se.jsx)(H.Z, {})
                            }), (0, se.jsx)(W.Z, {}), (0, se.jsx)(ne.Z, {})]
                        })
                    })
                };
            const be = ve
        },
        85244: (e, t, n) => {
            "use strict";
            n.d(t, {
                D5: () => r,
                DT: () => a,
                SF: () => o,
                hn: () => i
            });
            var r = "detail",
                i = "meta/global/header",
                a = "meta/global/footer",
                o = "healthz"
        },
        60908: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => a
            });
            var r = n(42820),
                i = n(8082),
                a = function() {
                    var e = (0, r.useSelector)((function(e) {
                            return e.detail.content.adExclusions
                        })),
                        t = (0, r.useSelector)((function(e) {
                            return e.app
                        })),
                        n = t.pageType,
                        a = t.contentId;
                    return {
                        adExclusions: n === i.sL.DETAIL ? function(e) {
                            return null === e ? [] : e
                        }(e) : null,
                        contentId: n === i.sL.DETAIL ? a : n
                    }
                }
        },
        37442: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => i
            });
            var r = n(56552);

            function i(e) {
                var t = e.status,
                    n = void 0 === t ? "ok" : t;
                return (0, r.jsxs)("div", {
                    className: "appStatus",
                    children: ["CBC Feed Application Status: ", n]
                })
            }
        },
        68565: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(73766),
                i = n(14507),
                a = n.n(i),
                o = n(11482),
                s = n(56552);
            const c = function(e) {
                var t = a()("businessWidget", [e.name]),
                    n = function(e) {
                        var t = null;
                        "forexMarketOverview" === e ? t = "Currencies" : "symbolSearch" === e && (t = "Quotes");
                        return t
                    }(e.name),
                    i = n ? (0, s.jsx)("h4", {
                        className: "businessWidgetTitle",
                        children: n
                    }) : null;
                return (0, s.jsxs)("div", {
                    className: t,
                    children: [i, (0, s.jsx)(r.Z, {
                        src: e.src,
                        height: e.height,
                        name: "Market Snapshot"
                    }), (0, o.O)(e.trackingSrc)]
                })
            }
        },
        7590: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            n(30666), n(95566), n(6129);
            var r = n(83110),
                i = n(41718),
                a = n(74987),
                o = n(35098);
            const s = function() {
                var e = (0, r.useLocation)(),
                    t = function() {
                        var e, t, n = null;
                        return (0, a.j)() && null !== (e = window.CBC) && void 0 !== e && null !== (e = e.APP) && void 0 !== e && null !== (e = e.ANA) && void 0 !== e && e.SURVEYCONFIG && (n = null === (t = window.CBC) || void 0 === t || null === (t = t.APP) || void 0 === t || null === (t = t.ANA) || void 0 === t ? void 0 : t.SURVEYCONFIG), n
                    }();
                return (0, o.useEffect)((function() {
                    if (t) {
                        var n, r = Object.keys(t),
                            a = r.find((function(n) {
                                return n === (null === e || void 0 === e ? void 0 : e.pathname) && !0 === t[n].enabled
                            })) || r.find((function(n) {
                                return !0 === t[n].substringMatch && (null === e || void 0 === e ? void 0 : e.pathname.includes(n)) && !0 === t[n].enabled
                            }));
                        if (a) n = function() {
                            ! function(e) {
                                try {
                                    window.CBC.APP.AB.Testing.viewStateChange(e)
                                } catch (t) {
                                    i.default.error("(displaySurvey) UserSplitTest", new Error("Failed to change view state"))
                                }
                            }(t[a].trigger)
                        }, window.CBCCMPQueue = window.CBCCMPQueue || [], window.CBCCMPQueue.push((function(e, t) {
                            var r;
                            t.cmpEnabled && t.cmpScriptWillBeLoaded && ((null === e || void 0 === e || null === (r = e.didomi) || void 0 === r ? void 0 : r.notice.isVisible()) || n())
                        }))
                    }
                }), [null === e || void 0 === e ? void 0 : e.pathname]), null
            }
        },
        91816: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => c
            });
            var r = n(29439),
                i = (n(83464), n(95566), n(19496), n(4054)),
                a = n(42820),
                o = n(13126),
                s = n(56552);
            const c = function() {
                var e = (0, a.useSelector)((function(e) {
                        return e.app.meta
                    })),
                    t = (0, a.useSelector)((function(e) {
                        return e.app.title
                    })),
                    n = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = [];
                        return Object.entries(e).forEach((function(e) {
                            var n = (0, r.Z)(e, 2),
                                i = n[0],
                                a = n[1];
                            a && (o.b_[i] ? t.push({
                                property: i,
                                content: a
                            }) : o.lK[i] && t.push({
                                name: i,
                                content: a
                            }))
                        })), t
                    }(e),
                    c = function(e) {
                        var t = [];
                        return Object.entries(e).forEach((function(e) {
                            var n = (0, r.Z)(e, 2),
                                i = n[0],
                                a = n[1];
                            a && o.Y9[i] && t.push({
                                rel: i,
                                href: a
                            })
                        })), t
                    }(e),
                    l = function(e) {
                        var t = [];
                        return Object.entries(e).forEach((function(e) {
                            var n = (0, r.Z)(e, 2),
                                i = n[0],
                                a = n[1];
                            a && "jsonld" === i && t.push({
                                type: "application/ld+json",
                                innerHTML: "".concat(JSON.stringify(a))
                            })
                        })), t
                    }(e);
                return (0, s.jsx)(i.ql, {
                    title: t,
                    meta: n,
                    link: c,
                    script: l
                })
            }
        },
        18778: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => L,
                Z: () => A
            });
            var r = n(29439),
                i = n(71002),
                a = (n(9867), n(7231), n(58109), n(95566), n(68438), n(23744), n(84350), n(89891), n(35275), n(85095), n(61399), n(57273), n(50791), n(39752), n(20816), n(75152), n(28997), n(23433), n(54367), n(46900), n(69898), n(83464), n(19496), n(30666), n(6129), n(35098)),
                o = n(4942),
                s = n(92972),
                c = n.n(s),
                l = n(43386);

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

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = {
                    displayOrder: Number.MAX_VALUE,
                    display: !0,
                    previousElected: 0,
                    totalElectedLeadingSeats: 0,
                    totalVotes: "0",
                    partyCode: "",
                    partyName: "",
                    partyHex: ""
                },
                f = {
                    live: !1,
                    serverTime: 0,
                    widgetTitle: "",
                    widgetDescription: "",
                    rsURL: "",
                    widgetCTA: "",
                    parties: []
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return p(p({}, f), e)
                },
                g = function(e) {
                    var t = e.data || {},
                        n = t.config || {},
                        r = t.parties || [],
                        i = e.live || !1,
                        a = e.serverTime || 0;
                    return m({
                        live: i,
                        serverTime: a,
                        widgetTitle: n.widgetTitle || "",
                        widgetDescription: n.widgetDescription || "",
                        rsURL: n.rsURL || "",
                        widgetCTA: n.widgetCTA || "",
                        parties: Object.values(n.parties || []).map((function(e) {
                            return function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return p(p({}, d), e)
                            }(Object.assign({
                                partyCode: e.partyCode || "",
                                partyName: e.partyName || "",
                                partyHex: e.partyHex || ""
                            }, (t = r.find((function(t) {
                                return t.englishCode === e.partyCode
                            }))) ? {
                                displayOrder: "number" === typeof t.displayOrder ? t.displayOrder : Number.MAX_VALUE,
                                previousElected: t.previousElected || 0,
                                totalElectedLeadingSeats: t.totalElectedLeadingSeats || 0,
                                totalVotes: t.totalVotes && t.totalVotes.toLocaleString("en-US") || "0",
                                display: !0
                            } : {
                                display: !1
                            }));
                            var t
                        })).sort((function(e, t) {
                            return e.displayOrder - t.displayOrder
                        }))
                    })
                },
                h = n(41718),
                v = function(e) {
                    return function(t, n) {
                        var r = (0, l.makeCancelable)(function(e) {
                                var t = "".concat("https://canopy.cbc.ca/live/elections/prov", "/").concat(e, "/current_toplevel");
                                return (0, l.request)(t).then((function(e) {
                                    if (e.ok) return e.json();
                                    throw new Error("".concat(e.status, ": ").concat(e.statusText))
                                })).then((function(e) {
                                    return g(e)
                                }))
                            }(t)),
                            i = r.promise,
                            a = r.cancel;
                        return {
                            promise: i.then((function(t) {
                                return t.serverTime > e && (n(t), e = t.serverTime), Promise.resolve(t.live)
                            })).catch((function(r) {
                                return e = -1, h.default.error("(setElectionState) error setting election state for ".concat(t), r), n(m()), Promise.resolve(!0)
                            })),
                            cancel: a
                        }
                    }
                },
                b = n(26574),
                y = n(14507),
                w = n.n(y),
                j = n(88101),
                O = n(56552),
                k = function(e) {
                    var t = e.rsURL,
                        n = e.widgetCTA,
                        r = e.trackingLinkTitle;
                    if (t && n) {
                        var i = r && (0, j.C_)("sclt", r, "link") || "",
                            a = w()((0, o.Z)({
                                electionlink: !0
                            }, i, !0));
                        return (0, O.jsx)(b.default, {
                            className: a,
                            url: t,
                            external: !0,
                            children: n
                        })
                    }
                    return null
                },
                S = function(e) {
                    var t = e.province,
                        n = void 0 === t ? "" : t,
                        i = e.trackingLinkTitle,
                        o = (0, a.useState)(m()),
                        s = (0, r.Z)(o, 2),
                        c = s[0],
                        l = s[1];
                    if ((0, a.useEffect)((function() {
                            return function(e, t, n) {
                                var r, i, a = v(-1);
                                return function o() {
                                        var s = a(t, n);
                                        r = s.cancel;
                                        var c = function() {
                                            i = setTimeout(o, e)
                                        };
                                        s.promise.then((function(e) {
                                            e && c()
                                        })), s.promise.catch(c)
                                    }(),
                                    function() {
                                        r(), clearInterval(i)
                                    }
                            }(2e4, n, l)
                        }), [n]), c.parties.length < 1) return c.serverTime && h.default.warn("The election widget has no parties configured."), null;
                    var u, p = c.widgetTitle,
                        d = c.live,
                        f = c.widgetDescription,
                        g = d ? (0, O.jsx)("span", {
                            className: "pulse",
                            "aria-label": "currently live"
                        }) : null,
                        b = p ? (0, O.jsxs)("div", {
                            className: "top",
                            children: [" ", g, " ", (0, O.jsx)("h2", {
                                className: "electiontitle",
                                children: p
                            })]
                        }) : null,
                        y = p ? (0, O.jsxs)("div", {
                            className: "bottom",
                            children: [" ", g, " ", (0, O.jsx)("h2", {
                                className: "electiontitle",
                                children: p
                            })]
                        }) : null,
                        w = f ? (0, O.jsx)("p", {
                            className: "electiontext",
                            children: f
                        }) : null,
                        j = (0, O.jsxs)("div", {
                            className: "linkbox",
                            children: [y, w, (0, O.jsx)(k, {
                                rsURL: c.rsURL,
                                widgetCTA: c.widgetCTA,
                                trackingLinkTitle: i
                            })]
                        });
                    return (0, O.jsxs)("div", {
                        className: "election",
                        role: "region",
                        "aria-label": p,
                        children: [b, j, (0, O.jsx)("div", {
                            className: "partyboxcontainer",
                            children: (u = c.parties, u.map((function(e, t) {
                                if (!e.display) return null;
                                var n = {
                                        borderColor: e.partyHex
                                    },
                                    r = "".concat(e.partyCode, "-").concat(e.totalElectedLeadingSeats, "-").concat(e.totalVotes, "-").concat(t);
                                return (0, O.jsxs)("div", {
                                    className: "partybox",
                                    children: [(0, O.jsx)("div", {
                                        className: "partyname",
                                        style: n,
                                        children: e.partyCode
                                    }), (0, O.jsx)("div", {
                                        className: "partyseatnum",
                                        children: e.totalElectedLeadingSeats
                                    }), (0, O.jsx)("div", {
                                        className: "moreinfocontainer",
                                        children: (0, O.jsxs)("div", {
                                            className: "partyvotes",
                                            children: [e.totalVotes, " votes"]
                                        })
                                    })]
                                }, r)
                            })))
                        })]
                    })
                };
            S.propTypes = {
                province: c().string,
                trackingLinkTitle: c().string
            };
            const P = S;
            var x = n(44192),
                I = n(42820),
                D = function(e) {
                    if (e && "object" == (0, i.Z)(e.featureflags)) {
                        var t = "election.region";
                        return Object.keys(e.featureflags).filter((function(e) {
                            return e.startsWith(t)
                        })).map((function(n) {
                            return {
                                path: n.replace(t, "").split(".").slice(1).join("/"),
                                value: e.featureflags[n]
                            }
                        }))
                    }
                    return []
                },
                C = new Set,
                _ = function() {
                    var e = 0;
                    C.forEach((function(t) {
                        t(++e === C.size)
                    }))
                },
                L = function(e) {
                    var t = (0, I.useSelector)(D).find((function(t) {
                        return t.path === e.path
                    }));
                    return t && t.value ? null : e.children || null
                };
            const A = (0, x.ErrorBoundaryHoc)((function(e) {
                var t = (0, I.useSelector)(D),
                    n = function() {
                        var e = (0, a.useState)(!0),
                            t = (0, r.Z)(e, 2),
                            n = t[0],
                            i = t[1];
                        return (0, a.useEffect)((function() {
                            return C.add(i), _(),
                                function() {
                                    C.delete(i), _()
                                }
                        }), []), n
                    }(),
                    i = t.find((function(t) {
                        return t.path === e.path
                    }));
                return i && i.value && n ? (0, O.jsx)(P, {
                    province: i.value,
                    trackingLinkTitle: i.value,
                    interval: 2e4
                }) : null
            }))
        },
        63751: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(92972),
                i = n.n(r),
                a = n(14507),
                o = n.n(a),
                s = n(26766),
                c = n(39070),
                l = n(26574),
                u = n(56552),
                p = function(e) {
                    var t = e.url,
                        n = e.imageURL,
                        r = void 0 === n ? "" : n,
                        i = e.descriptionId,
                        a = e.external,
                        p = void 0 === a || a,
                        d = e.description,
                        f = e.callToActionText,
                        m = e.widgetClassName,
                        g = e.alt,
                        h = void 0 === g ? "" : g,
                        v = o()("imageLinkWidget", "card", [i], [m]),
                        b = d ? o()("linkImage", "imgWithDescription") : "linkImage";
                    return (0, u.jsxs)(l.default, {
                        className: v,
                        url: t,
                        external: p,
                        children: [(0, u.jsx)("img", {
                            className: b,
                            src: r,
                            alt: h,
                            loading: "lazy"
                        }), function(e, t) {
                            return e && t && (0, u.jsx)(c.Z, {
                                id: t,
                                text: e
                            })
                        }(d, i), function(e) {
                            return e && (0, u.jsx)(s.Z, {
                                text: e
                            })
                        }(f)]
                    })
                };
            p.propTypes = {
                widgetClassName: i().string,
                url: i().string,
                imageURL: i().string,
                descriptionId: i().string,
                external: i().bool,
                alt: i().string
            };
            const d = p
        },
        19766: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(35098),
                i = n(56552);
            const a = function() {
                return (0, i.jsxs)(r.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: "pageLoader",
                        children: (0, i.jsx)("svg", {
                            className: "circular",
                            viewBox: "25 25 50 50",
                            "aria-label": "Content Loading",
                            focusable: "false",
                            children: (0, i.jsx)("circle", {
                                className: "path",
                                cx: "50",
                                cy: "50",
                                r: "20",
                                fill: "none"
                            })
                        })
                    }), (0, i.jsx)("div", {
                        className: "loaderOverlay"
                    })]
                })
            }
        },
        44203: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n(29439),
                i = n(35098),
                a = n(42820),
                o = n(97240),
                s = n(85161),
                c = n(26574),
                l = n(15526),
                u = n(68075),
                p = n(11573),
                d = function(e) {
                    var t = e.path,
                        n = e.contentId,
                        r = e.appDownloaded,
                        i = "";
                    switch (e.deviceType) {
                        case "iOS":
                            i = r ? "".concat("cbcnews://").concat(n) : "https://apps.apple.com/app/apple-store/id417988800?pt=63436&ct=MobileAppCta&mt=8";
                            break;
                        case "android":
                            i = r ? "".concat("https://www.cbc.ca/").concat(t) : "".concat("https://play.google.com/store/apps/details?id=ca.cbc.mobile.android.cbcnewsandroidwebview&referrer=utm_source%3DMobileAppCta");
                            break;
                        default:
                            return i
                    }
                    return i
                },
                f = n(76247),
                m = n(56552);
            const g = function() {
                var e = (0, i.useState)(!1),
                    t = (0, r.Z)(e, 2),
                    n = t[0],
                    g = t[1],
                    h = (0, i.useState)(null),
                    v = (0, r.Z)(h, 2),
                    b = v[0],
                    y = v[1],
                    w = (0, i.useState)(!0),
                    j = (0, r.Z)(w, 2),
                    O = j[0],
                    k = j[1],
                    S = (0, i.useState)(!1),
                    P = (0, r.Z)(S, 2),
                    x = P[0],
                    I = P[1],
                    D = (0, i.useState)(!1),
                    C = (0, r.Z)(D, 2),
                    _ = C[0],
                    L = C[1],
                    A = (0, a.useSelector)((function(e) {
                        return e.dmp.audienceSegments
                    })),
                    E = (0, a.useSelector)((function(e) {
                        return e.app.baseSection
                    })),
                    T = (0, a.useSelector)((function(e) {
                        return e.app.pageType
                    })),
                    Z = (0, a.useSelector)((function(e) {
                        return e.app.path
                    })),
                    N = (0, a.useSelector)((function(e) {
                        return e.app.contentId
                    })),
                    M = (0, a.useSelector)((function(e) {
                        return e.fixed
                    })),
                    R = (0, a.useDispatch)();
                (0, i.useEffect)((function() {
                    return y(function() {
                            var e = null;
                            return (0, l.isAndroid)() ? e = "android" : (0, l.isAppleDevice)() && (e = "iOS"), e
                        }()), k((0, u.showMobileAppCta)()), I((0, u.appDownloadedCookie)()), R((0, p.IM)()),
                        function() {
                            L(!0)
                        }
                }), []), (0, i.useEffect)((function() {
                    function e(e) {
                        "up" !== e || _ ? "down" !== e || _ || g(!1) : g(!0)
                    }
                    "detail" === T ? setTimeout((function() {
                        e("up")
                    }), 1e3) : e("down")
                }), [T, Z]);
                var B = {
                    path: Z,
                    contentId: N,
                    appDownloaded: x,
                    deviceType: b
                };
                return M && M.isWebView ? null : null !== b && "detail" === T && "news" === E && O && function(e, t) {
                    if (e.length > 0) return -1 !== e.findIndex((function(e) {
                        return e.id === t
                    }))
                }(A, "756657") ? (0, m.jsxs)("div", {
                    role: "dialog",
                    className: "mobileAppCta ".concat(n ? "slideUp" : "", " ").concat(f.Z.mobileAppCta),
                    children: [(0, m.jsxs)(c.default, {
                        url: d(B),
                        external: !0,
                        className: "mobileAppCtaLink",
                        onClick: function() {
                            return (0, u.storeAppDownloadedCookie)(), void(window.CBC && window.CBC.APP && window.CBC.APP.PubSub && window.CBC.APP.PubSub.publish && window.CBC.APP.PubSub.publish("ctaClicked", "downloadNewsApp"))
                        },
                        children: [(0, m.jsx)(s.default, {
                            type: "logo"
                        }), (0, m.jsx)(o.Z, {
                            level: "h2",
                            children: "Read in the app"
                        }), (0, m.jsx)("button", {
                            className: "mobileAppCtaBtn",
                            children: "Open"
                        })]
                    }), (0, m.jsx)("button", {
                        className: "mobileAppCtaClose",
                        onClick: function() {
                            return g(!1), void(0, u.storeCtaCloseCookie)()
                        },
                        children: (0, m.jsx)(s.default, {
                            type: "close"
                        })
                    })]
                }) : null
            }
        },
        2390: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => W
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(15861),
                i = n(4942),
                a = n(45987),
                o = n(29439),
                s = n(64687),
                c = n.n(s),
                l = n(35098),
                u = n(42820),
                p = n(83110),
                d = n(66929),
                f = n(27953),
                m = n(46826),
                g = n(75854),
                h = n(38059),
                v = n(41718),
                b = n(46484),
                y = n(93849).KF("Client.wppUtilities.environment"),
                w = function() {
                    var e = (0, r.Z)(c().mark((function e(t, n) {
                        var r, i;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = {}, i = t.sourceId, e.prev = 2, !(0, b.yZ)(i) && !(0, b.Wh)(i)) {
                                        e.next = 14;
                                        break
                                    }
                                    if (!n) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 7, (0, h.lh)(i, y);
                                case 7:
                                    e.t0 = e.sent, e.next = 11;
                                    break;
                                case 10:
                                    e.t0 = (0, h.uR)(t);
                                case 11:
                                    r = e.t0, e.next = 15;
                                    break;
                                case 14:
                                    v.default.warn("(getPlayableMediaData) Unknown sourceId ".concat(i));
                                case 15:
                                    e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t1 = e.catch(2), v.default.error("(getPlayableMediaData) Error fetching mediaData", e.t1);
                                case 20:
                                    return e.abrupt("return", r);
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 17]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = n(71654),
                O = n(92972),
                k = n(56552),
                S = (0, k.jsx)("svg", {
                    className: "minimize-btn",
                    viewBox: "0 0 16 10",
                    children: (0, k.jsx)("polyline", {
                        fill: "none",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        stroke: "#000000",
                        points: "2 2 8 8 14 2"
                    })
                }),
                P = (0, k.jsx)("svg", {
                    className: "maximize-btn",
                    viewBox: "0 0 16 10",
                    children: (0, k.jsx)("polyline", {
                        fill: "none",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        stroke: "#000000",
                        points: "2 8 8 2 14 8"
                    })
                }),
                x = (0, k.jsxs)("svg", {
                    className: "close-btn",
                    viewBox: "0 0 12 12",
                    children: [(0, k.jsx)("path", {
                        d: "M0 0 L12 12",
                        strokeWidth: "3",
                        stroke: "#000000"
                    }), (0, k.jsx)("path", {
                        d: "M0 12 L12 0",
                        strokeWidth: "3",
                        stroke: "#000000"
                    })]
                }),
                I = function(e) {
                    var t = e.isMinimized,
                        n = e.setIsMinimized;
                    return (0, k.jsx)("button", {
                        onClick: function() {
                            return n(!t)
                        },
                        className: "".concat(t ? "maximize" : "minimize", "-persistent-player-button"),
                        "aria-label": t ? "Maximize" : "Minimize",
                        children: t ? P : S
                    })
                },
                D = (0, l.forwardRef)((function(e, t) {
                    var n = e.onCloseClick,
                        r = e.isMinimized,
                        i = e.setIsMinimized;
                    return (0, k.jsx)("div", {
                        className: "persistent-player-controls",
                        children: (0, k.jsxs)("div", {
                            className: "persistent-player-view-controls",
                            children: [(0, k.jsx)(I, {
                                isMinimized: r,
                                setIsMinimized: i
                            }), (0, k.jsx)("button", {
                                onClick: n,
                                className: "close-persistent-player-button",
                                "aria-label": "Close player",
                                ref: t,
                                children: x
                            })]
                        })
                    })
                }));
            const C = D;
            D.propTypes = {
                onCloseClick: O.func,
                setIsMinimized: O.func
            };
            var _ = n(85161),
                L = n(62770),
                A = function(e) {
                    var t = e.onCloseClick,
                        n = e.mediaItem,
                        r = n.title,
                        i = n.showName,
                        a = n.contentArea,
                        o = n.sport,
                        s = n.pubDate,
                        c = n.isLive;
                    return (0, k.jsxs)("div", {
                        className: "persistent-player-video-ui",
                        children: [(0, k.jsx)("div", {
                            children: (0, k.jsx)("button", {
                                onClick: t,
                                className: "close-persistent-player-button",
                                "aria-label": "Close player",
                                children: (0, k.jsx)(_.default, {
                                    type: "close"
                                })
                            })
                        }), (0, k.jsxs)("div", {
                            id: "persistent-player-media-metadata-video",
                            children: [r && (0, k.jsx)("h3", {
                                className: "media-title",
                                children: r
                            }), (0, k.jsxs)("div", {
                                className: "showname-and-timestamp",
                                children: [(0, k.jsx)("p", {
                                    className: "media-showname",
                                    children: i || a || o
                                }), (0, k.jsx)(L.I, {
                                    classes: "media-timestamp",
                                    airDate: s,
                                    isLive: c
                                })]
                            })]
                        })]
                    })
                },
                E = function(e, t) {
                    return e.mediaItem.sourceId === t.mediaItem.sourceId
                };
            const T = (0, l.memo)(A, E);
            A.propTypes = {
                onCloseClick: O.func,
                mediaItem: (0, O.shape)({
                    title: O.string,
                    showName: O.string,
                    contentArea: O.string,
                    sport: O.string,
                    pubDate: O.number,
                    isLive: O.bool
                })
            };
            var Z = n(74987),
                N = n(64323),
                M = ["enableRecommendations", "isPlayable", "feature"];

            function R(e, t) {
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
                    t % 2 ? R(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var U, q, F = {
                    current: null
                },
                z = {
                    current: null
                },
                V = {
                    current: null
                };
            const W = function() {
                F = (0, l.useRef)(null), z = (0, l.useRef)(null), V = (0, l.useRef)(null);
                var e = (0, u.useSelector)((function(e) {
                        return e.persistentPlayer
                    })),
                    t = (0, l.useState)(!1),
                    n = (0, o.Z)(t, 2),
                    i = n[0],
                    s = n[1],
                    h = (0, l.useState)({}),
                    v = (0, o.Z)(h, 2),
                    y = v[0],
                    O = v[1],
                    S = (0, l.useState)(!1),
                    P = (0, o.Z)(S, 2),
                    x = P[0],
                    I = P[1],
                    D = (0, l.useRef)(null),
                    _ = (0, l.useRef)({
                        isInitialized: null,
                        isMediaLoading: !1,
                        routeUpdate: !1,
                        featureAttribution: null,
                        aspectRatio: null,
                        useMediaAspectRatio: !1,
                        maxHeight: g.m8,
                        selector: g.IL,
                        playingSourceId: null,
                        isMediaDataLoaded: !1
                    }),
                    L = (0, p.useHistory)(),
                    A = (0, f.s)(),
                    E = (0, u.useDispatch)(),
                    R = function(e) {
                        return E((0, m.o)(e))
                    },
                    W = function() {
                        return E((0, m.m)())
                    },
                    H = function() {
                        var t = _.current,
                            n = t.isInitialized,
                            r = t.isMediaDataLoaded,
                            i = e.mediaDataOverrides.shouldDisableAds;
                        n && F.current && r ? (_.current.isMediaDataLoaded = !1, F.current.unload(), F.current.setAdsInactive(i), F.current.load()) : F.current && F.current.setAdsInactive(i)
                    },
                    K = function() {
                        var e;
                        if (_.current.isInitialized) {
                            var t = _.current,
                                n = t.aspectRatio,
                                r = t.useMediaAspectRatio,
                                i = t.maxHeight,
                                a = !!t.isMediaDataLoaded && r;
                            null === (e = F.current) || void 0 === e || e.updateSizeConfig({
                                aspectRatio: n,
                                useMediaAspectRatio: a,
                                maxHeight: i
                            })
                        }
                    },
                    G = function(e, t) {
                        return "audio" === e ? g.Ao : g.IY[t]
                    },
                    $ = function() {
                        var e, t;
                        q = null === (e = F) || void 0 === e || null === (e = e.current) || void 0 === e ? void 0 : e.firstChild, te() || null === (t = q) || void 0 === t || t.focus()
                    },
                    Q = function(e) {
                        _.current.isInitialized = !1, customElements.whenDefined(g.XW).then((function() {
                            var t = _.current,
                                n = {
                                    aspectRatio: t.aspectRatio,
                                    useMediaAspectRatio: t.useMediaAspectRatio,
                                    enableBrowserControls: !1,
                                    maxHeight: t.maxHeight,
                                    useMediaNetIdForAds: !0
                                },
                                r = document.createElement(g.XW);
                            e && e.sourceId && (n.autoPlay = !0, r.mediaData = e, _.current.isMediaDataLoaded = !0), r.config = n, r.addEventListener("statusChanged", X), r.addEventListener("playerInitialized", ee), r.addEventListener("recommendationClicked", Y), r.dataset.testid = g.XW, F.current = r, D.current.appendChild(r)
                        }))
                    };
                (0, l.useEffect)((function() {
                    var e;
                    (0, Z.s)() || (customElements.get(g.XW) || (0, d.q)(), (null === (e = L.location) || void 0 === e || null === (e = e.pathname) || void 0 === e ? void 0 : e.startsWith(N.Iz)) || null !== _.current.isInitialized || Q(), U = document.querySelector("a.a11y"))
                }), []), (0, l.useEffect)((function() {
                    $()
                }), [e.isVisible]), (0, l.useEffect)((function() {
                    _.current.routeUpdate = e.routeUpdate
                }), [e.routeUpdate]), (0, l.useEffect)((function() {
                    if (A) {
                        var t = e.mediaItem.sourceId;
                        if (H(), t) {
                            _.current.playingSourceId = t;
                            var n = e.mediaItem,
                                r = n.enableRecommendations,
                                i = void 0 !== r && r,
                                o = n.isPlayable,
                                s = void 0 !== o && o,
                                c = n.feature,
                                l = (0, a.Z)(n, M),
                                u = null,
                                p = _.current.featureAttribution;
                            l.sourceId && p ? (u = B({}, p), _.current.featureAttribution = null) : u = c ? B({}, c) : null;
                            var d = e.sizeConfig.aspectRatio,
                                f = G(null === l || void 0 === l ? void 0 : l.type, d);
                            f && (_.current.aspectRatio = f), K(), w(l, !s).then((function(t) {
                                var n, r, a, o = t ? B(B({}, t), {}, {
                                    enableRecommendations: i,
                                    feature: u
                                }) : {};
                                if (O(o), o.sourceId) {
                                    if (_.current.isMediaLoading = !0, _.current.aspectRatio = G(o.format, null !== d && void 0 !== d ? d : o.aspectRatio), "video" === o.format) {
                                        var s, c;
                                        _.current.useMediaAspectRatio = null !== (s = e.sizeConfig.useMediaAspectRatio) && void 0 !== s && s;
                                        var p = null === (c = e.mediaDataOverrides) || void 0 === c ? void 0 : c.thumbnail;
                                        p && (o.thumbnail = p)
                                    } else _.current.useMediaAspectRatio = !1;
                                    _.current.maxHeight = null !== (n = e.sizeConfig.maxHeight) && void 0 !== n ? n : g.m8, o.playNextActive = null !== (r = l.playNextActive) && void 0 !== r && r, null === _.current.isInitialized ? Q(o) : (F.current.mediaData = o, _.current.isMediaDataLoaded = !0);
                                    var f = e.controlsConfig.hideFullscreenBtn;
                                    null === (a = F) || void 0 === a || null === (a = a.current) || void 0 === a || a.updateControlsConfig({
                                        hideFullscreenBtn: null !== f && void 0 !== f && f
                                    })
                                }
                            }))
                        }
                    }
                }), [e.mediaItem.sourceId]), (0, l.useEffect)((function() {
                    var t, n = e.selector,
                        r = n === g.IL,
                        i = _.current,
                        a = i.selector,
                        o = i.isMediaDataLoaded,
                        s = i.playingSourceId;
                    if (a !== n) {
                        _.current.selector = n;
                        var c = e.isVisible,
                            l = e.status,
                            u = e.forcePersistence,
                            p = e.mediaItem,
                            d = (null === (t = F.current) || void 0 === t || null === (t = t.mediaData) || void 0 === t || null === (t = t.assets) || void 0 === t || null === (t = t[0]) || void 0 === t ? void 0 : t.type) === g.J9,
                            f = !c;
                        if (r && c && !u)
                            if (x) f = !d;
                            else if ("error" === l) {
                            var m;
                            f = !(0, b.D2)(null === p || void 0 === p || null === (m = p.media) || void 0 === m ? void 0 : m.streamType)
                        } else f = "playing" !== l;
                        var h = !1;
                        (d || x) && o && (F.current.stop(), h = !0), r || ((null === p || void 0 === p ? void 0 : p.sourceId) === s ? _.current.useMediaAspectRatio = e.sizeConfig.useMediaAspectRatio : (_.current.useMediaAspectRatio = !1, _.current.maxHeight = null), K()),
                            function(e) {
                                var t = z.current,
                                    n = window.document.getElementsByClassName(e)[0];
                                if (t && n && !n.contains(t)) {
                                    var r, i;
                                    e === g.IL && (null === (r = F.current) || void 0 === r || null === (i = r.updateSizeConfig) || void 0 === i || i.call(r, {
                                        useMediaAspectRatio: !1
                                    })), n.appendChild(t)
                                }
                            }(n), $(), f ? W() : h && F.current.play()
                    }
                }), [e.selector]);
                var J, Y = function() {
                        var e = (0, r.Z)(c().mark((function e(t) {
                            var n, r, i, a, o, s, l;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n = t.detail, r = n.mediaId, i = n.sourceId, a = n.source, o = n.featureAttribution, s = parseInt(r), _.current.routeUpdate ? (_.current.featureAttribution = B({}, o), L.push("".concat(N.Iz, "video/").concat(null !== i && void 0 !== i ? i : s))) : R({
                                            mediaItem: {
                                                sourceId: null !== i && void 0 !== i ? i : r,
                                                mediaId: s,
                                                source: a,
                                                type: "video",
                                                isPlayable: !1,
                                                enableRecommendations: !0,
                                                feature: o,
                                                playNextActive: null !== (l = n.playNextActive) && void 0 !== l && l
                                            }
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    X = function(e) {
                        var t, n, r = e.detail;
                        "PLAYING" === r.to && E((0, j.v)("Video will keep playing when you leave this page")), "PLAYING" === r.from && E((0, j.v)(""));
                        var i = null === (t = r.to) || void 0 === t || null === (n = t.toLowerCase) || void 0 === n ? void 0 : n.call(t);
                        if (i) {
                            I(i.startsWith("adver")), R({
                                status: i
                            });
                            var a = _.current,
                                o = a.isMediaLoading,
                                s = a.selector;
                            o && "PLAYING" === r.to && (_.current.isMediaLoading = !1, s !== g.IL && K())
                        }
                    },
                    ee = function(e) {
                        var t = e.detail;
                        _.current.isInitialized = t
                    },
                    te = function() {
                        return e.selector !== g.IL ? "pp-hidden" : e.isVisible ? "" : "pp-hidden"
                    },
                    ne = function(e) {
                        var t;
                        e.preventDefault(), H(), W(), E((0, j.v)("")), null === (t = U) || void 0 === t || t.focus()
                    },
                    re = "video",
                    ie = "persistent-player-media-metadata-video";
                return "audio" === e.mediaItem.type ? (re = "audio", ie = "media-metadata-audio", J = (0, k.jsx)(C, {
                    onCloseClick: ne,
                    isMinimized: i,
                    setIsMinimized: function(e) {
                        s(e)
                    },
                    ref: V
                })) : (i && s(!1), J = (0, k.jsx)(T, {
                    onCloseClick: ne,
                    mediaItem: y
                })), (0, k.jsx)("div", {
                    className: "persistent-player-persist-container ".concat(te(), " ").concat(re, " ").concat(i ? "minimized" : ""),
                    id: "persistent-player",
                    tabIndex: "-1",
                    "aria-labelledby": ie,
                    children: (0, k.jsxs)("div", {
                        className: "".concat(g.IL),
                        tabIndex: "-1",
                        role: "tab",
                        onKeyDown: function(e) {
                            switch (e.code) {
                                case g.nx.TAB:
                                    var t;
                                    if (e.shiftKey && document.activeElement === q) e.preventDefault(), null === (t = U) || void 0 === t || t.focus();
                                    else if (!e.shiftKey && document.activeElement === V.current) {
                                        var n;
                                        e.preventDefault(), null === (n = U) || void 0 === n || n.focus()
                                    }
                                    break;
                                case g.nx.ESCAPE:
                                    e.preventDefault(), ne(e)
                            }
                        },
                        children: [(0, k.jsx)("div", {
                            className: "".concat(g.Hf, " ").concat(re).concat("error" === e.status ? " error" : "").concat(x ? " advertising" : ""),
                            ref: z,
                            children: (0, k.jsx)("div", {
                                className: "".concat(g.JG),
                                ref: D
                            })
                        }), J]
                    })
                })
            }
        },
        16537: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => w
            });
            var r = n(35098),
                i = n(92972),
                a = n.n(i),
                o = n(42820),
                s = n(94481),
                c = n(57944),
                l = n(15664),
                u = n(10078),
                p = n(88495),
                d = {
                    name: "swimlane",
                    instance: "local"
                },
                f = {
                    name: "vertical-card-list",
                    instance: "local"
                },
                m = n(91392),
                g = n(46384),
                h = n(77008),
                v = n(19042),
                b = n(56552),
                y = function(e) {
                    var t = e.section,
                        n = e.subjects,
                        i = void 0 === n ? "" : n,
                        a = e.excludedCategorySet,
                        y = void 0 === a ? "" : a,
                        w = e.isSwimlane,
                        j = void 0 === w || w,
                        O = e.type,
                        k = void 0 === O ? "default" : O,
                        S = e.useGrid,
                        P = void 0 !== S && S,
                        x = e.cardClickHandler,
                        I = void 0 === x ? function() {} : x,
                        D = e.pathSuffix,
                        C = void 0 === D ? "" : D,
                        _ = (0, o.useDispatch)(),
                        L = (0, g.Z)().region,
                        A = L.categorySlug,
                        E = L.path + C,
                        T = (0, o.useSelector)((function(e) {
                            return e.sectionalContent
                        })),
                        Z = (0, o.useSelector)((function(e) {
                            return e.app.baseSection
                        })),
                        N = (0, o.useSelector)((function(e) {
                            return e.app.path
                        })),
                        M = "" !== i || "" !== y;
                    if ((0, r.useEffect)((function() {
                            M || _((0, u.md)(E, j ? 4 : 5))
                        }), [M, E, j]), (0, r.useEffect)((function() {
                            "" === A || !t && "flp" !== k || _((0, m.M)(N, t, A, i, y, k))
                        }), [A, t, k, N, i, y]), j) return (0, b.jsx)(l.Z, {
                        headline: "My Local",
                        section: t || E,
                        showMoreLink: !1,
                        customTitleBar: (0, b.jsx)(c.Z, {}),
                        hasHeadlineLink: !1,
                        className: "regionInfo ".concat(v.Z.regionInfo, " sclt-regionalSwimlane"),
                        itemCount: 4,
                        fetchSection: !1,
                        featureAttribution: (0, h.Z)(d),
                        useGrid: P,
                        cardClickHandler: I
                    }, "mylocal-".concat(t || E));
                    var R = null;
                    if (T) {
                        var B = T[t || E];
                        B && B.sectionList && (R = B.sectionList)
                    }
                    return R ? (0, b.jsx)(s.Z, {
                        className: "regionInfo sclt-regionalwidget",
                        id: "regionInfo".concat(Z),
                        customTitleBar: (0, b.jsx)(c.Z, {
                            placement: p.r4.SIDEBAR
                        }),
                        items: R,
                        featureAttribution: (0, h.Z)(f)
                    }) : null
                };
            y.propTypes = {
                isSwimlane: a().bool
            };
            const w = (0, r.memo)(y)
        },
        57944: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => j
            });
            var r = n(4942),
                i = n(29439),
                a = (n(9867), n(7231), n(58109), n(95566), n(68438), n(83464), n(19496), n(35098)),
                o = n(92972),
                s = n.n(o),
                c = n(14507),
                l = n.n(c),
                u = n(85161),
                p = n(26574),
                d = n(78116),
                f = n(46384),
                m = n(88495),
                g = n(63578),
                h = n(82019),
                v = n(56552);

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

            function y(e) {
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
            var w = function(e) {
                var t = e.placement,
                    n = void 0 === t ? "" : t,
                    r = e.className,
                    o = e.useDefault,
                    s = void 0 === o || o,
                    c = (0, f.Z)(),
                    b = c.region,
                    w = c.update,
                    j = c.isExplicitlySet,
                    O = (0, a.useState)(!1),
                    k = (0, i.Z)(O, 2),
                    S = k[0],
                    P = k[1],
                    x = (0, a.useState)(s || j ? b.preference : null),
                    I = (0, i.Z)(x, 2),
                    D = I[0],
                    C = I[1],
                    _ = function(e) {
                        var t = e.currentTarget.dataset.preference;
                        C(t)
                    },
                    L = g.nv.map((function(e, t) {
                        if (!e.hideInNav) {
                            var r = {
                                    key: "regionItem-".concat(t),
                                    "data-preference": e.preference,
                                    "data-trendingsection": e.trendingSection,
                                    className: "regionItemLabel",
                                    onClick: _
                                },
                                i = "region-".concat(e.id).concat(n);
                            return (0, v.jsx)("li", {
                                className: "regionsListItem",
                                children: (0, v.jsxs)("label", y(y({}, r), {}, {
                                    htmlFor: i,
                                    children: [(0, v.jsx)("input", {
                                        type: "radio",
                                        name: "region",
                                        value: e.title,
                                        className: "regionRadioButton",
                                        id: i,
                                        defaultChecked: e.preference === D
                                    }), e.title]
                                }))
                            }, "regionLink-".concat(t))
                        }
                    })),
                    A = l()("regionsListWrapper", r, {
                        openRegion: S,
                        standAlone: n === m.r4.SIDEBAR
                    }),
                    E = S ? m.N7.active : m.N7.inactive,
                    T = "sidebar" === n ? (0, v.jsx)(h.X6, {
                        text: "My Local",
                        level: "h2",
                        levelClassName: "h3"
                    }) : null,
                    Z = S ? "Update Preference" : s || j ? "Change" : m.BF;
                return (0, v.jsxs)("div", {
                    className: A,
                    children: [(0, v.jsxs)("div", {
                        className: "regionNameWrapper",
                        children: [T, (0, v.jsxs)(p.default, {
                            className: "regionLink currentRegion sclt-currentRegionLink",
                            "data-cy": "current-region",
                            url: "/".concat(b.path),
                            external: !1,
                            id: "current-local-".concat(n),
                            "aria-label": "Show news for my current region: ".concat(b.title),
                            children: [b.title, (0, v.jsx)(u.default, {
                                type: "chevron",
                                className: "horizontal"
                            })]
                        })]
                    }), (0, v.jsx)("button", {
                        className: "regionButton sclt-regionChangeButton",
                        "data-cy": "region-button",
                        "aria-controls": "regionsList-".concat(n),
                        "aria-expanded": S,
                        "aria-describedby": "about-region-change-".concat(n),
                        onClick: function() {
                            S && w(D), (0, d.EF)("choose region menu", S, n), P(!S)
                        },
                        children: Z
                    }), (0, v.jsx)("span", {
                        className: "a11y",
                        id: "about-region-change-".concat(n),
                        children: "quickly access local content from your selected region"
                    }), (0, v.jsxs)("form", {
                        className: "regionForm",
                        action: "",
                        children: [(0, v.jsx)("span", {
                            className: "regionFormIntro",
                            children: "Select a new default local region:"
                        }), (0, v.jsx)("ul", y(y({
                            id: "regionsList-".concat(n),
                            className: "regionsList",
                            "data-cy": "regions-list"
                        }, E), {}, {
                            children: L
                        }))]
                    })]
                })
            };
            w.propTypes = {
                className: s().string,
                placement: s().string,
                useDefault: s().bool
            };
            const j = w
        },
        88495: (e, t, n) => {
            "use strict";
            n.d(t, {
                BF: () => a,
                N7: () => r,
                r4: () => i
            });
            var r = {
                    inactive: {
                        "aria-hidden": !0
                    },
                    active: {
                        "aria-hidden": !1
                    }
                },
                i = {
                    SIDEBAR: "sidebar",
                    MEGAMENU: "megamenu",
                    CONTENT: "content",
                    PREFERENCES: "preferences"
                },
                a = "Set your local region"
        },
        33251: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => i
            });
            var r = n(83110);
            const i = (0, n(53335).gy)(r.Route)
        },
        80210: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            n(2041), n(95566), n(2612), n(58109), n(68438);
            var r = n(35098),
                i = n(92972),
                a = n.n(i),
                o = n(52403),
                s = n(71804),
                c = n(26574),
                l = n(16813),
                u = n(42820),
                p = n(88101),
                d = n(82019),
                f = n(56552),
                m = function(e) {
                    var t = e.type,
                        n = void 0 === t ? "" : t,
                        i = e.regionName,
                        a = void 0 === i ? "" : i,
                        m = e.scheduleConfig,
                        g = void 0 === m ? {} : m,
                        h = e.headline,
                        v = void 0 === h ? "Broadcast Schedule" : h,
                        b = (0, u.useDispatch)(),
                        y = (0, u.useSelector)((function(e) {
                            return e.schedule
                        }));
                    (0, r.useEffect)((function() {
                        b((0, l.fG)(n, a))
                    }), [a]);
                    var w = n && y ? y[n] : null;
                    return w && w.scheduleList && "sports" === n ? function(e) {
                        var t = e.scheduleList.filter((function(e) {
                            if (g.filter && g.filter.constructor === String) return e.types.indexOf(g.filter) > -1;
                            if (g.filter && g.filter.constructor === Array)
                                for (var t = g.filter.length, n = 0; n < t; n++) return e.types.indexOf(g.filter[n]) > -1;
                            return !0
                        })).reduce((function(e, t) {
                            var n = new Date(t.startTime),
                                r = new Date(t.endTime),
                                i = new Date;
                            if ((0, o.Z)(i, r) > 0) return e;
                            var a = (0, f.jsx)("span", {
                                className: "scheduleTitle",
                                children: t.title
                            });
                            (0, o.Z)(i, n) >= 0 && (0, o.Z)(i, r) <= 0 && (a = (0, f.jsx)(c.default, {
                                url: (0, p.ch)(t.url),
                                external: !0,
                                className: "scheduleLink",
                                children: t.title
                            }));
                            var l = (0, s.Z)(n, "MMM dd, h:mm a"),
                                u = t.media ? t.media.join(", ") : null;
                            return e.push((0, f.jsxs)("li", {
                                className: "scheduleListItem",
                                children: [(0, f.jsx)("span", {
                                    className: "scheduleMedia",
                                    children: u
                                }), (0, f.jsx)("span", {
                                    className: "scheduleTime",
                                    children: l
                                }), a]
                            }, t.id)), e
                        }), []);
                        if (t.length < 1) return null;
                        var n = g && g.fullScheduleUrl ? g.fullScheduleUrl : "/sports/streaming-schedule";
                        return (0, f.jsxs)("div", {
                            className: "schedule sportsSchedule",
                            children: [(0, f.jsx)(d.X6, {
                                className: "scheduleTitle",
                                text: v,
                                level: "h2",
                                levelClassName: "h3"
                            }), (0, f.jsx)("ul", {
                                className: "scheduleList",
                                children: t
                            }), (0, f.jsxs)("div", {
                                className: "disclaimer",
                                children: ["Times shown in EDT, unless otherwise noted. Schedule is subject to change without notice.", (0, f.jsx)(c.default, {
                                    external: !0,
                                    url: n,
                                    className: "scheduleLink sclt-sportsSchedule",
                                    children: "Full Schedule \xbb"
                                })]
                            })]
                        })
                    }(w) : null
                };
            m.propTypes = {
                type: a().string,
                headline: a().string,
                regionName: a().string,
                scheduleConfig: a().object
            };
            const g = m
        },
        84051: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => w
            });
            var r = n(4942),
                i = (n(83464), n(95566), n(19496), n(58109), n(68438), n(92972)),
                a = n.n(i),
                o = n(84412),
                s = n(88101),
                c = n(14507),
                l = n.n(c),
                u = "vertical",
                p = ["original series", "tv", "web series", "digital series"],
                d = n(40627),
                f = n(82019),
                m = n(11482),
                g = n(56552);

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

            function v(e) {
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

            function b(e) {
                var t = e.baseSection,
                    n = void 0 === t ? "" : t,
                    r = e.items,
                    i = e.orientation,
                    a = void 0 === i ? u : i,
                    o = e.customTitle,
                    c = o || "".concat((0, s.fm)(n), " Series"),
                    p = (0, s.C_)("section", n),
                    d = l()("series", (0, m.A)("series".concat(n)), p, a),
                    h = a === u;
                return (0, g.jsxs)("div", {
                    className: d,
                    children: [h ? (0, g.jsx)(f.X6, {
                        className: "seriesHeadline",
                        text: c,
                        level: "h2",
                        levelClassName: "h3"
                    }) : (0, g.jsx)(f.OT, {
                        text: c
                    }), y(r, n, a)]
                })
            }

            function y(e, t, n) {
                if (!e) return null;
                var r = [];
                return e.filter((function(e) {
                    return !e.hideInListing
                })).forEach((function(e, i) {
                    var a = "" === e.image ? d.QU.TYPE_TEXT : d.QU.TYPE_SHOW,
                        s = e.thumbnail ? e.thumbnail : e.image,
                        c = e.section || t,
                        u = l()("seriesListItem", a, n),
                        f = "undefined" === typeof e.description ? "" : e.description,
                        m = "undefined" === typeof e.medium ? "" : e.medium,
                        h = e.alias ? e.alias : e.showSlug,
                        b = h && !e.nestedPath ? "/".concat(c, "/").concat(h) : e.url,
                        y = e.callToActionText ? e.callToActionText : "Visit Show Site";
                    e.medium && (y = p.includes(e.medium) ? "Watch Now" : "Listen Now");
                    var w = !0 === e.external,
                        j = e.external ? e.url : b,
                        O = {
                            className: "seriesItem sclt-series".concat(t, "card").concat(i),
                            type: a,
                            baseSection: t,
                            lazyLoad: !1,
                            category: "",
                            flag: m,
                            external: w,
                            title: e.title,
                            url: j,
                            showSlug: e.showSlug,
                            key: "seriesCard".concat(i),
                            imageURL: s,
                            description: f,
                            contentId: 1.1,
                            itemType: "nonpolopolyURL",
                            updatedTime: 1,
                            sourceId: "".concat(i),
                            callToActionText: y
                        };
                    r.push((0, g.jsx)("li", {
                        className: u,
                        children: (0, g.jsx)(o.ZP, v({}, O))
                    }, "seriesItem".concat(i)))
                })), (0, g.jsx)("ul", {
                    className: "seriesList",
                    children: r
                })
            }
            b.propTypes = {
                baseSection: a().string,
                items: a().array,
                orientation: a().string
            };
            const w = b
        },
        68988: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            n(9867), n(7231);
            var r = n(2902),
                i = n(26574),
                a = n(97240),
                o = [215, 430, 645],
                s = ["215px"],
                c = n(76247),
                l = n(56552);

            function u(e, t) {
                return (0, l.jsx)("li", {
                    className: "sponsorListItem",
                    children: e.link ? (0, l.jsx)(i.default, {
                        className: "sponsorLink",
                        url: e.link,
                        external: !0,
                        target: "_blank",
                        "aria-label": e.title,
                        children: (0, l.jsx)(r.Z, {
                            url: e.imageURL,
                            derivativeWidths: o,
                            sizes: s,
                            type: "sponsor-image",
                            alt: e.title
                        })
                    }) : (0, l.jsx)(r.Z, {
                        url: e.imageURL,
                        derivativeWidths: o,
                        sizes: s,
                        type: "sponsor-image",
                        alt: e.title
                    })
                }, "".concat(t, "-sponsor}"))
            }
            const p = function(e) {
                var t = e.sponsorContent;
                return !t || !t.sponsorList || t.sponsorList && !t.sponsorList.length > 0 ? null : (0, l.jsxs)("div", {
                    className: "sponsorInfo ".concat(c.Z.sponsorInfo),
                    children: [(0, l.jsx)(a.Z, {
                        level: "h2",
                        children: t.heading
                    }), (0, l.jsx)("ul", {
                        className: "sponsorBoxList",
                        children: t.sponsorList.map(u)
                    })]
                })
            }
        },
        15664: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(92972),
                a = n.n(i),
                o = n(47619),
                s = n(14507),
                c = n.n(s),
                l = n(61851),
                u = n(56552);

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

            function d(e) {
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

            function f(e) {
                var t = e.useGrid,
                    n = void 0 !== t && t,
                    r = e.section,
                    i = void 0 === r ? "" : r,
                    a = e.headline,
                    s = void 0 === a ? "" : a,
                    p = e.itemCount,
                    f = void 0 === p ? 8 : p,
                    m = e.className,
                    g = e.showMoreLink,
                    h = void 0 === g || g,
                    v = e.customTitleBar,
                    b = void 0 === v ? null : v,
                    y = e.hasHeadlineLink,
                    w = void 0 === y || y,
                    j = e.fetchSection,
                    O = void 0 === j || j,
                    k = e.videoLandingPath,
                    S = void 0 === k ? "" : k,
                    P = e.customHeadlineLink,
                    x = void 0 === P ? "" : P,
                    I = e.customContentList,
                    D = void 0 === I ? null : I,
                    C = e.externalLink,
                    _ = void 0 !== C && C,
                    L = e.contentListClasses,
                    A = e.lineupSlug,
                    E = void 0 === A ? "" : A,
                    T = e.cardClickHandler,
                    Z = void 0 === T ? function() {} : T,
                    N = e.extraContent,
                    M = void 0 === N ? null : N,
                    R = e.featureAttribution,
                    B = void 0 === R ? null : R,
                    U = e.id,
                    q = e.children,
                    F = e.displayPolicy,
                    z = "";
                w && (z = "" === x ? "/".concat(i) : x);
                var V = {
                        section: i,
                        headline: s,
                        headlineLink: z,
                        externalLink: _,
                        itemCount: f,
                        showMoreLink: h,
                        fetchSection: O,
                        customTitleBar: b,
                        customContentList: D,
                        displayPolicy: F,
                        videoLandingPath: S,
                        cardClickHandler: Z,
                        contentListClasses: c()(L, "contentListSwimlane"),
                        lineupSlug: E,
                        displayType: l.a.TYPE_LIST,
                        useGrid: n
                    },
                    W = c()("swimlane", "sclt-swimlane", m);
                return (0, u.jsxs)("div", d(d({
                    className: W,
                    id: "swimlane-".concat(i || U)
                }, B), {}, {
                    children: [(0, u.jsx)(o.Z, d({}, V)), null !== M && void 0 !== M ? M : q]
                }))
            }
            f.propTypes = {
                id: a().string,
                section: a().string,
                headline: a().string,
                itemCount: a().number,
                className: a().string,
                showMoreLink: a().bool,
                customTitleBar: a().object,
                hasHeadlineLink: a().bool,
                fetchSection: a().bool,
                videoLandingPath: a().string,
                customHeadlineLink: a().string,
                customContentList: a().array,
                externalLink: a().bool,
                contentListClasses: a().string,
                lineupSlug: a().string,
                extraContent: a().element,
                featureAttribution: a().object
            };
            const m = f
        },
        45440: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(35098),
                i = n(42820),
                a = n(82077),
                o = n(50853),
                s = n(55479),
                c = n(90779);

            function l() {
                var e = (0, i.useDispatch)(),
                    t = (0, c.Z)(),
                    n = t.id,
                    l = t.isLoading;
                return (0, r.useEffect)((function() {
                    l || (e((0, o.av)(n)), (0, a.z)(n, s.MK).then((function(t) {
                        e((0, o.Q8)(n, t))
                    })))
                }), [n, l]), null
            }
        },
        76030: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => j
            });
            var r = n(15861),
                i = n(29439),
                a = n(64687),
                o = n.n(a),
                s = n(35098),
                c = n(92972),
                l = n.n(c),
                u = n(42820),
                p = n(62760),
                d = n(41915),
                f = n(82019),
                m = n(66350),
                g = n(41718),
                h = n(72663),
                v = n(27953),
                b = n(73457),
                y = n(56552),
                w = function(e) {
                    var t = e.layout,
                        n = void 0 === t ? b.xO : t,
                        a = e.featureAttributionData,
                        c = (0, s.useState)(!0),
                        l = (0, i.Z)(c, 2),
                        w = l[0],
                        j = l[1],
                        O = (0, s.useState)([]),
                        k = (0, i.Z)(O, 2),
                        S = k[0],
                        P = k[1],
                        x = (0, u.useSelector)((function(e) {
                            return e.app.path
                        })),
                        I = (0, u.useSelector)((function(e) {
                            return e.app.contentId
                        })),
                        D = (0, v.Z)(),
                        C = n.columns,
                        _ = void 0 === C ? p.l : C,
                        L = n.rows,
                        A = void 0 === L ? 1 : L,
                        E = n.variant,
                        T = void 0 === E ? h.v.STANDARD : E,
                        Z = _ * A || p.l,
                        N = function() {
                            var e = (0, r.Z)(o().mark((function e() {
                                var t;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = [], e.prev = 1, j(!0), e.next = 5, (0, m.A)(p.R, x, I, n);
                                        case 5:
                                            t = e.sent, e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), t = [], g.default.error("(VideoRecommendations) fetch recommended clips failed", e.t0);
                                        case 12:
                                            P(t), j(!1);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    (0, s.useEffect)((function() {
                        D && I && N()
                    }), [x, I, D]);
                    return w || null !== S && void 0 !== S && S.length ? (0, y.jsxs)("div", {
                        className: "video-recommendations",
                        children: [(0, y.jsx)(f.OT, {
                            text: "Recommended for You"
                        }), (0, y.jsx)(d.Z, {
                            layout: n,
                            items: w ? (0, d.P)(Z, T) : S.slice(0, Z),
                            featureAttributionData: a
                        })]
                    }) : null
                };
            const j = w;
            w.propTypes = {
                layout: l().shape({
                    columns: l().number,
                    rows: l().number,
                    variant: l().string,
                    isFlexible: l().bool
                }),
                featureAttributionData: l().shape({
                    instance: l().string,
                    name: l().string
                })
            }
        },
        62760: (e, t, n) => {
            "use strict";
            n.d(t, {
                R: () => r,
                l: () => i
            });
            var r = 10,
                i = 5
        },
        66350: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => f
            });
            var r = n(15861),
                i = n(64687),
                a = n.n(i),
                o = n(97409),
                s = n(54799),
                c = n(51591),
                l = n(68075),
                u = n(41718),
                p = n(73457);

            function d() {
                var e = (0, l.getUserFromCookie)();
                return e ? e.id : ""
            }
            var f = function() {
                var e = (0, r.Z)(a().mark((function e(t, n, r) {
                    var i, l, f, m, g, h, v, b, y, w, j = arguments;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = j.length > 3 && void 0 !== j[3] ? j[3] : p.xO, l = j.length > 4 && void 0 !== j[4] ? j[4] : null, f = d(), m = l || "rec4you-short-form-videos", e.prev = 4, !f) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 8, (0, o.lj)(m, f, t, r);
                            case 8:
                                e.t0 = e.sent, e.next = 14;
                                break;
                            case 11:
                                return e.next = 13, (0, o.Cc)(t);
                            case 13:
                                e.t0 = e.sent;
                            case 14:
                                return v = e.t0, b = (null === v || void 0 === v || null === (g = v.data) || void 0 === g || null === (g = g.personalizedItems) || void 0 === g ? void 0 : g.nodes) || (null === v || void 0 === v || null === (h = v.data) || void 0 === h || null === (h = h.mlDrivenItems) || void 0 === h ? void 0 : h.items) || [], y = b.length ? (0, s.H9)(b) : [], w = y.length ? (0, c.h)(y, i, n) : [], e.abrupt("return", w);
                            case 21:
                                return e.prev = 21, e.t1 = e.catch(4), u.default.error("(fetchVideoRecommendations) error fetching recommended clips", e.t1), e.abrupt("return", []);
                            case 25:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [4, 21]
                    ])
                })));
                return function(t, n, r) {
                    return e.apply(this, arguments)
                }
            }()
        },
        62024: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => r
            });
            var r = {
                "/artuncontained": "/arts/artuncontained",
                "/news/events": "/news/community",
                "/news/canada/:path+/events": "/news/canada/:path/community",
                "/news/headlines": "/news",
                "/news/:paths+/headlines": "/news/:paths",
                "/news/covid-19": "/news",
                "/life/the-great-canadian-baking-show": "/life/greatcanadianbakingshow",
                "/life/weddings": "/life/topic/Tag/Weddings",
                "/life/greatcanadianbakingshow/gcbs-bakers": "/life/greatcanadianbakingshow/bakers",
                "/life/greatcanadianbakingshow/gcbs-episodes": "/life/greatcanadianbakingshow/episodes",
                "/life/greatcanadianbakingshow/gcbs-recipes": "/life/greatcanadianbakingshow/recipes",
                "/life/greatcanadianbakingshow/gcbs-about": "/life/greatcanadianbakingshow/about",
                "/greatcanadianbakingshow": "/life/greatcanadianbakingshow",
                "/life/the-goods": "/life/thegoods",
                "/life/personalfinance": "/life/work-money",
                "/books/mobile(/*)": "/books",
                "/books/tdkids": "/books/kids",
                "/sports/olympics/cbc-sports-presents": "/sports/shows/cbc-sports-presents",
                "/sports/olympics/crosscountry": "/sports/olympics/winter/skiing",
                "/sports/olympics/biathlon": "/sports/olympics/winter/skiing",
                "/sports/olympics/cycling/road": "/sports/olympics/summer/cycling",
                "/sports/olympics/cycling/track": "/sports/olympics/summer/cycling",
                "/sports/olympics/cycling/bmx": "/sports/olympics/summer/cycling",
                "/sports/olympics/cycling/mountain-bike": "/sports/olympics/summer/cycling",
                "/sports/olympics/skeleton": "/sports/olympics/winter/sliding",
                "/sports/olympics/luge": "/sports/olympics/winter/sliding",
                "/sports/olympics/bobsleigh": "/sports/olympics/winter/sliding",
                "/sports/olympics/shorttrack": "/sports/olympics/winter/speed-skating",
                "/sports/olympics/hockey": "/sports/hockey/nhl",
                "/sports/olympics/hometeam": "/sports/olympics",
                "/sports/nhl": "/sports/hockey/nhl",
                "/sports/hockey/nhl/wharnsby": "/sports/hockey/nhl",
                "/sports/hockey/nhl/wharnsby/:paths+": "/sports/hockey/nhl/:paths",
                "/sports/hockey/nhl/brophy": "/sports/hockey/nhl",
                "/sports/hockey/nhl/brophy/:paths+": "/sports/hockey/nhl/:paths",
                "/sports/hockeynightincanada": "/sports/hockey/nhl",
                "/sports/video/hockey": "/player/sports",
                "/sports/nba": "/sports/basketball",
                "/sports/basketball/nba": "/sports/basketball",
                "/sports/basketball/cebl": "/sports/basketball",
                "/sports/cfl": "/sports/football",
                "/sports/nfl": "/sports/football",
                "/sports/football/cfl": "/sports/football",
                "/sports/football/nfl": "/sports/football",
                "/sports/mlb": "/sports/baseball",
                "/sports/baseball/mlb": "/sports/baseball",
                "/sports/olympics/alpineskiing": "/sports/olympics/winter/alpine-skiing",
                "/sports/olympics/winter/alpineskiing": "/sports/olympics/winter/alpine-skiing",
                "/sports/olympics/aquatics": "/sports/olympics/summer/aquatics",
                "/sports/olympics/curling": "/sports/olympics/winter/curling",
                "/sports/olympics/cycling": "/sports/olympics/summer/cycling",
                "/sports/olympics/figureskating": "/sports/olympics/winter/figure-skating",
                "/sports/olympics/winter/figureskating": "/sports/olympics/winter/figure-skating",
                "/sports/olympics/freestyleskiing": "/sports/olympics/winter/freestyle-skiing",
                "/sports/olympics/winter/freestyleskiing": "/sports/olympics/winter/freestyle-skiing",
                "/sports/olympics/gymnastics": "/sports/olympics/summer/gymnastics",
                "/sports/olympics/skiing": "/sports/olympics/winter/skiing",
                "/sports/olympics/sliding": "/sports/olympics/winter/sliding",
                "/sports/olympics/snowboard": "/sports/olympics/winter/snowboard",
                "/sports/olympics/speedskating": "/sports/olympics/winter/speed-skating",
                "/sports/olympics/winter/speedskating": "/sports/olympics/winter/speed-skating",
                "/sports/olympics/trackandfield": "/sports/olympics/summer/trackandfield",
                "/sports/olympics/volleyball": "/sports/olympics/summer/volleyball",
                "/sports/winter": "/sports",
                "/sports/summer": "/sports/olympics/summer",
                "/sports/figureskating": "/sports/olympics/winter/figure-skating",
                "/sports/curling": "/sports/olympics/winter/curling",
                "/sports/alpineskiing": "/sports/olympics/winter/alpine-skiing",
                "/sports/moresports": "/sports/all",
                "/sports/videos": "/player/sports",
                "/sports/video": "/player/sports",
                "/sports/paralympics/wheelchair-curling": "/sports/paralympics",
                "/sports/paralympics/ice-hockey": "/sports/paralympics",
                "/sports/paralympics/snowboard": "/sports/paralympics",
                "/sports/paralympics/cross-country-skiing": "/sports/paralympics",
                "/sports/paralympics/alpine-skiing": "/sports/paralympics",
                "/sports/paralympics/biathlon": "/sports/paralympics",
                "/sports/paralympics-temporary-unmap": "/sports/paralympics",
                "/sports/paralympics/summer": "/sports/paralympics",
                "/sports/paralympics/summer/(para-archery|para-athletics|para-badminton|boccia|para-canoe|para-cycling|para-equestrian|para-football-5-a-side|goalball|para-judo|para-powerlifting|para-rowing|shooting-para-sport|sitting-volleyball|para-swimming|para-table-tennis|para-taekwondo|para-triathlon|wheelchair-basketball|wheelchair-fencing|wheelchair-rugby|wheelchair-tennis)": "/sports/paralympics",
                "/sports/calgarystampede/video": "/player/sports",
                "/bc": "/news/canada/british-columbia",
                "/british-columbia": "/news/canada/british-columbia",
                "/britishcolumbia": "/news/canada/british-columbia",
                "/calgary": "/news/canada/calgary",
                "/canada": "/news/canada",
                "/edmonton": "/news/canada/edmonton",
                "/kw": "/news/canada/kitchener-waterloo",
                "/kitchener-waterloo": "/news/canada/kitchener-waterloo",
                "/labrador": "/news/canada/newfoundland-labrador",
                "/london": "/news/canada/london",
                "/manitoba": "/news/canada/manitoba",
                "/montreal": "/news/canada/montreal",
                "/nb": "/news/canada/new-brunswick",
                "/newbrunswick": "/news/canada/new-brunswick",
                "/nl": "/news/canada/newfoundland-labrador",
                "/north": "/news/canada/north",
                "/ns": "/news/canada/nova-scotia",
                "/novascotia": "/news/canada/nova-scotia",
                "/nunavut": "/news/canada/north",
                "/ottawa": "/news/canada/ottawa",
                "/pei": "/news/canada/prince-edward-island",
                "/quebec": "/news/canada/montreal",
                "/sask": "/news/canada/saskatchewan",
                "/saskatchewan": "/news/canada/saskatchewan",
                "/saskatoon": "/news/canada/saskatchewan",
                "/sudbury": "/news/canada/sudbury",
                "/thunderbay": "/news/canada/thunder-bay",
                "/toronto": "/news/canada/toronto",
                "/vancouver": "/news/canada/british-columbia",
                "/victoria": "/news/canada/british-columbia",
                "/windsor": "/news/canada/windsor",
                "/radio/outintheopen/what-does-colten-boushie-say-about-us-1.3924855": "/radio/outintheopen/i-was-blind-to-the-racial-tension-colten-boushie-s-family-speaks-out-about-the-aftermath-of-his-death-1.4445326",
                "/radio/q": "/arts/q",
                "/sports/commonwealthgames/news": "/sports/commonwealthgames",
                "/sports/commonwealthgames/photos": "/sports/commonwealthgames",
                "/sports/commonwealthgames/results": "/sports/commonwealthgames",
                "/sports/commonwealthgames/medals": "/sports/commonwealthgames",
                "/sports/soccer/brazil2014/photos": "/sports/soccer",
                "/sports/skiing/photos": "/sports/olympics/winter/skiing",
                "/sports/skiing/video": "/player/sports",
                "/sports/video/skiing": "/player/sports",
                "/sports/hockey/nhl/special/Tag/World+Cup+of+Hockey": "/sports/hockey/nhl",
                "/sports/panam": "/sports",
                "/sports/figureskating/headlines": "/sports/olympics/winter/figure-skating",
                "/sports/figureskating/photos": "/sports/olympics/winter/figure-skating",
                "/sports/football/nfl/headlines": "/sports/football",
                "/sports/rugby/video": "/player/sports",
                "/sports/tennis/headlines": "/sports/tennis",
                "/sports/trackandfield/video/live": "/sports/broadcast",
                "/sports/figureskating/photos/3158": "/sports/olympics/winter/figure-skating",
                "/sports/basketball/nba/video": "/player/sports",
                "/sports/tennis/video": "/player/sports",
                "/sports/video/tennis": "/player/sports",
                "/sports/figureskating/photos/430": "/sports/olympics/winter/figure-skating",
                "/sports/football/cfl/headlines": "/sports/football",
                "/sports/hockey/nhl/video": "/player/sports",
                "/sports/gilletteworldsport/video": "/player/sports",
                "/sports/panam/video": "/player/sports",
                "/sports/soccer/video": "/player/sports",
                "/sports/video/soccer": "/player/sports",
                "/sports/trackandfield/video": "/player/sports",
                "/sports/parapanam/video": "/player/sports",
                "/sports/curling/video": "/player/sports",
                "/sports/video/curling": "/player/sports",
                "/sports/trackandfield/broadcast": "/sports/broadcast",
                "/sports/paralympics/news": "/sports/paralympics",
                "/sports/photos": "/sports",
                "/sports/sprucemeadows/broadcast": "/sports/equestrian/streaming-schedule",
                "/sports/sprucemeadows/video": "/player/sports",
                "/sports/curling/headlines": "/sports/olympics/winter/curling",
                "/sports/basketball/nba/headlines": "/sports/basketball",
                "/sports/sportsday": "/sports",
                "/sports/soccer/fifau20": "/sports/soccer",
                "/sports/golf/photos": "/sports/golf",
                "/sports/curling/photos": "/sports/olympics/winter/curling",
                "/sports/football/cfl/video": "/player/sports",
                "/sports/video/cfl": "/player/sports",
                "/sports/hotcorner": "/sports",
                "/sports/sportsweekend/video": "/player/sports",
                "/sports/skiing/headlines": "/sports/olympics/winter/skiing",
                "/sports/soccer/photos": "/sports/soccer",
                "/sports/basketball/photos": "/sports/basketball",
                "/sports/football/photos": "/sports/football",
                "/sports/baseball/photos": "/sports/baseball",
                "/sports/paralympics/photos": "/sports/paralympics",
                "/sports/trackandfield/photos": "/sports/olympics/summer/trackandfield",
                "/sports/tennis/photos": "/sports/tennis",
                "/sports/hockey/hockeytonightkids/entry/index.php": "/sports/hockey/nhl",
                "/sports/trackandfield/headlines": "/sports/olympics/summer/trackandfield",
                "/sports/headlines": "/sports",
                "/sports/2.720": "/sports",
                "/sports/hockey/nhl/headlines": "/sports/hockey/nhl",
                "/sports/naig/broadcast": "/sports/broadcast",
                "/sports/video/paralympics": "/player/sports",
                "/sports/speedskating": "/sports/olympics/winter/speed-skating",
                "/sports/figureskating/video": "/player/sports",
                "/sports/basketball/2.6127": "/sports/basketball",
                "/sports/soccer/headlines": "/sports/soccer",
                "/sports/hockey/photos": "/sports/hockey/nhl",
                "/sports/trackandfield": "/sports/olympics/summer/trackandfield",
                "/sports/curling/broadcast": "/sports/olympics/winter/curling/broadcast",
                "/sports/football/nfl/video": "/player/sports",
                "/sports/baseball/mlb/video": "/player/sports",
                "/sports/video/baseball": "/player/sports",
                "/sports/golf/video": "/player/sports",
                "/sports/video/golf": "/player/sports",
                "/sports/tennis/broadcast": "/sports/tennis",
                "/sports/skiing": "/sports/olympics/winter/skiing",
                "/sports/baseball/mlb/headlines": "/sports/baseball",
                "/sports/speedskating/video": "/player/sports",
                "/sports/video/speed-skating": "/player/sports",
                "/sports/videos/originals/video": "/player/sports",
                "/sports/golf/headlines": "/sports/golf",
                "/pride": "/pride/topic/Collections/Spotlight%20on%20Pride",
                "/sports/video/university-football": "/player/sports",
                "/sports/video/olympic-sports": "/player/sports",
                "/sports/video/cbc-sports-originals": "/player/sports",
                "/sports/video/figure-skating": "/player/sports",
                "/sports/video/paralympics/cross-country-skiing": "/player/sports",
                "/sports/video/paralympics/hockey": "/player/sports",
                "/sports/video/nfl": "/player/sports",
                "/sports/video/commonwealth-games": "/player/sports",
                "/sports/video/calgary-stampede": "/player/sports",
                "/sports/video/full-shows": "/player/sports",
                "/sports/video/track-and-field": "/player/sports",
                "/sports/video/show-jumping": "/player/sports",
                "/sports/video/paralympics/wheelchair-curling": "/player/sports",
                "/sports/video/paralympics/biathlon": "/player/sports",
                "/sports/video/paralympics/athlete-features": "/player/sports",
                "/sports/video/paralympics/alpine-skiing": "/player/sports",
                "/sports/video/paralympics/snowboard": "/player/sports",
                "/sports/video/basketball": "/player/sports",
                "/sports/video/sliding": "/player/sports",
                "/sports/video/highlights": "/player/sports",
                "/sports/video/cycling": "/player/sports",
                "/sports/video/rugby": "/player/sports",
                "/sports/video/snowboarding": "/player/sports",
                "/arts/watch": "/player/arts",
                "/life/video": "/player/life",
                "/sports/olympics/summer/cycling/bmx": "/sports/olympics/summer/cycling",
                "/sports/olympics/summer/cycling/mountain-bike": "/sports/olympics/summer/cycling",
                "/sports/olympics/summer/cycling/road": "/sports/olympics/summer/cycling",
                "/sports/olympics/summer/cycling/track": "/sports/olympics/summer/cycling",
                "/sports/olympics/summer/equestrian/dressage": "/sports/olympics/summer/equestrian",
                "/sports/olympics/summer/equestrian/eventing": "/sports/olympics/summer/equestrian",
                "/sports/olympics/summer/equestrian/show-jumping": "/sports/olympics/summer/equestrian",
                "/sports/olympics/summer/skateboarding/park": "/sports/olympics/summer/skateboarding",
                "/sports/olympics/summer/skateboarding/street": "/sports/olympics/summer/skateboarding",
                "/sports/olympics/summer/trackandfield/decathlon-heptathlon": "/sports/olympics/summer/trackandfield",
                "/sports/olympics/summer/trackandfield/field": "/sports/olympics/summer/trackandfield",
                "/sports/olympics/summer/trackandfield/road": "/sports/olympics/summer/trackandfield",
                "/sports/olympics/summer/trackandfield/track": "/sports/olympics/summer/trackandfield",
                "/sports/olympics/winter/skiing": "/sports/olympics/winter/alpine-skiing",
                "/sports/olympics/winter/sliding": "/sports/olympics/winter/bobsleigh",
                "/news/ask-cbc": "/news/canada/topic/Subject/Ask%20CBC",
                "/documentaries/hotdocsathome": "/documentaries/hotdocsoncbc",
                "/sports/soccer/mls": "/sports/soccer",
                "/sports/soccer/cpl": "/sports/soccer"
            }
        },
        20694: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gf: () => i,
                OE: () => s,
                QJ: () => a,
                Rj: () => c,
                x$: () => r
            });
            n(9867), n(7231);
            var r = [{
                    title: "Curling",
                    link: "/sports/olympics/winter/curling",
                    thumbnail: "https://i.cbc.ca/1.5925587.1614139975!/cpImage/httpImage/image.jpg_gen/derivatives/16x9tight_620/cur-scotties-20210220.jpg"
                }, {
                    title: "Figure Skating",
                    link: "/sports/olympics/winter/figure-skating",
                    thumbnail: "https://i.cbc.ca/1.6641908.1667633917!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/figureskating-isu.JPG"
                }, {
                    title: "Long Track Speed Skating",
                    link: "/sports/olympics/winter/speed-skating",
                    thumbnail: "https://i.cbc.ca/1.3487226.1457716241!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/gilmore-junio.jpg"
                }, {
                    title: "Short Track Speed Skating",
                    link: "/sports/olympics/winter/short-track-speed-skating",
                    thumbnail: "https://i.cbc.ca/1.6618706.1665970943!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/usa-sport.JPG"
                }, {
                    title: "Alpine Skiing",
                    link: "/sports/olympics/winter/alpine-skiing",
                    thumbnail: "https://i.cbc.ca/1.3437058.1454762372!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/germany-alpine-skiing-world-cup.jpg"
                }, {
                    title: "Freestyle Skiing",
                    link: "/sports/olympics/winter/freestyle-skiing",
                    thumbnail: "https://i.cbc.ca/1.6355828.1645132811!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/cassie-sharpe-1371000153.jpg"
                }, {
                    title: "Snowboard",
                    link: "/sports/olympics/winter/snowboard",
                    thumbnail: "https://i.cbc.ca/1.2995310.1426348441!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/lucien-koch.jpg"
                }, {
                    title: "Bobsleigh",
                    link: "/sports/olympics/winter/bobsleigh",
                    thumbnail: "https://i.cbc.ca/1.3352817.1449368769!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/bobsleigh.jpg"
                }, {
                    title: "Luge",
                    link: "/sports/olympics/winter/luge",
                    thumbnail: "https://i.cbc.ca/1.6324326.1642875492!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/walker-tristan-snith-211218-1180.jpg"
                }, {
                    title: "Skeleton",
                    link: "/sports/olympics/winter/skeleton",
                    thumbnail: "https://i.cbc.ca/1.6314828.1642164082!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1236662906.jpg"
                }, {
                    title: "Athletics",
                    link: "/sports/olympics/summer/athletics",
                    thumbnail: "https://i.cbc.ca/1.3723159.1471481659!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/degrasse-andre-160816-1180.jpg"
                }, {
                    title: "Aquatics",
                    thumbnail: "https://i.cbc.ca/1.6538145.1659381923!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/summer-mcintosh-01082022.jpg",
                    link: "/sports/olympics/summer/aquatics"
                }, {
                    title: "Rugby",
                    link: "/sports/rugby",
                    thumbnail: "https://i.cbc.ca/1.5605917.1591796857!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/oly-rgu-sevens-draw-20160628.jpg"
                }, {
                    title: "Cycling",
                    link: "/sports/olympics/summer/cycling",
                    thumbnail: "https://i.cbc.ca/1.4273724.1504405368!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/netherlands-cycling-road-world-championship.jpg"
                }, {
                    title: "Volleyball",
                    link: "/sports/olympics/summer/volleyball",
                    thumbnail: "https://i.cbc.ca/1.4203718.1499973037!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/naig-volleyball-live-stream.jpg"
                }, {
                    title: "Gymnastics",
                    link: "/sports/olympics/summer/gymnastics",
                    thumbnail: "https://i.cbc.ca/1.6464835.1653449927!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/ellie-black-030821.jpg"
                }],
                i = [{
                    title: "Olympics",
                    link: "/sports/olympics",
                    thumbnail: "https://i.cbc.ca/1.6662434.1669252519!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_620/cbc-sports-key-art-branding-hybrid.jpeg"
                }, {
                    title: "Paralympics",
                    link: "/sports/paralympics",
                    thumbnail: "https://i.cbc.ca/1.7260532.1725028044!/fileImage/httpImage/image.jpg_gen/derivatives/16x9tight_620/1337984198.jpg"
                }, {
                    title: "Hockey",
                    thumbnail: "https://i.cbc.ca/1.5925585.1614139764!/cpImage/httpImage/image.jpg_gen/derivatives/16x9tight_620/hkn-oilers-jets-20210217.jpg",
                    link: "/sports/hockey"
                }, {
                    title: "Curling",
                    link: "/sports/olympics/winter/curling",
                    thumbnail: "https://i.cbc.ca/1.5925587.1614139975!/cpImage/httpImage/image.jpg_gen/derivatives/16x9tight_620/cur-scotties-20210220.jpg"
                }, {
                    title: "Soccer",
                    link: "/sports/soccer",
                    thumbnail: "https://i.cbc.ca/1.6217510.1634690038!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/soc-panama-canada-20211013.jpg"
                }, {
                    title: "Figure Skating",
                    link: "/sports/olympics/winter/figure-skating",
                    thumbnail: "https://i.cbc.ca/1.6641908.1667633917!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/figureskating-isu.JPG"
                }, {
                    title: "Long Track Speed Skating",
                    link: "/sports/olympics/winter/speed-skating",
                    thumbnail: "https://i.cbc.ca/1.3487226.1457716241!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/gilmore-junio.jpg"
                }, {
                    title: "Short Track Speed Skating",
                    link: "/sports/olympics/winter/short-track-speed-skating",
                    thumbnail: "https://i.cbc.ca/1.6618706.1665970943!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/usa-sport.JPG"
                }, {
                    title: "Alpine Skiing",
                    link: "/sports/olympics/winter/alpine-skiing",
                    thumbnail: "https://i.cbc.ca/1.3437058.1454762372!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/germany-alpine-skiing-world-cup.jpg"
                }, {
                    title: "Freestyle Skiing",
                    link: "/sports/olympics/winter/freestyle-skiing",
                    thumbnail: "https://i.cbc.ca/1.6355828.1645132811!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/cassie-sharpe-1371000153.jpg"
                }, {
                    title: "Snowboard",
                    link: "/sports/olympics/winter/snowboard",
                    thumbnail: "https://i.cbc.ca/1.2995310.1426348441!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/lucien-koch.jpg"
                }, {
                    title: "Bobsleigh",
                    link: "/sports/olympics/winter/bobsleigh",
                    thumbnail: "https://i.cbc.ca/1.3352817.1449368769!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/bobsleigh.jpg"
                }, {
                    title: "Luge",
                    link: "/sports/olympics/winter/luge",
                    thumbnail: "https://i.cbc.ca/1.7309386.1725027951!/fileImage/httpImage/image.jpg_gen/derivatives/16x9tight_620/1460255485.jpg"
                }, {
                    title: "Skeleton",
                    link: "/sports/olympics/winter/skeleton",
                    thumbnail: "https://i.cbc.ca/1.6314828.1642164082!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1236662906.jpg"
                }, {
                    title: "Tennis",
                    link: "/sports/tennis",
                    thumbnail: "https://i.cbc.ca/1.5240764.1565324793!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/ten-rogers-cup-women-20190808.jpg"
                }, {
                    title: "Athletics",
                    link: "/sports/olympics/summer/athletics",
                    thumbnail: "https://i.cbc.ca/1.7290313.1725027971!/fileImage/httpImage/image.jpg_gen/derivatives/16x9tight_620/2166066490.jpg"
                }, {
                    title: "Aquatics",
                    thumbnail: "https://i.cbc.ca/1.6538145.1659381923!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/summer-mcintosh-01082022.jpg",
                    link: "/sports/olympics/summer/aquatics"
                }, {
                    title: "Basketball",
                    link: "/sports/basketball",
                    thumbnail: "https://i.cbc.ca/1.6324093.1642822158!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/image.jpg"
                }, {
                    title: "Football",
                    link: "/sports/football",
                    thumbnail: "https://i.cbc.ca/1.6581764.1663102159!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/fbo-cfl-blue-bombers-stampeders-20220730.JPG"
                }, {
                    title: "Baseball",
                    link: "/sports/baseball",
                    thumbnail: "https://i.cbc.ca/1.7309398.1725028267!/fileImage/httpImage/image.jpg_gen/derivatives/16x9tight_620/vladimir-guerrero-jr-2162185826.jpg"
                }, {
                    title: "Rugby",
                    link: "/sports/rugby",
                    thumbnail: "https://i.cbc.ca/1.7309356.1725027163!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/olivia-apps-2163914726.jpg"
                }, {
                    title: "Cycling",
                    link: "/sports/olympics/summer/cycling",
                    thumbnail: "https://i.cbc.ca/1.4273724.1504405368!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/netherlands-cycling-road-world-championship.jpg"
                }, {
                    title: "Volleyball",
                    link: "/sports/olympics/summer/volleyball",
                    thumbnail: "https://i.cbc.ca/1.4203718.1499973037!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/naig-volleyball-live-stream.jpg"
                }, {
                    title: "Gymnastics",
                    link: "/sports/olympics/summer/gymnastics",
                    thumbnail: "https://i.cbc.ca/1.6464835.1653449927!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/ellie-black-030821.jpg"
                }, {
                    title: "Golf",
                    link: "/sports/golf",
                    thumbnail: "https://i.cbc.ca/1.5556605.1588711494!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/brooke-henderson.jpg"
                }, {
                    title: "Equestrian",
                    link: "/sports/equestrian",
                    thumbnail: "https://i.cbc.ca/1.7309377.1725027501!/fileImage/httpImage/image.jpg_gen/derivatives/16x9tight_620/eryn-ballard-1160285289.jpg"
                }, {
                    title: "Full Shows",
                    link: "/sports/shows",
                    hideInNav: !0
                }, {
                    title: "CBC Sports Originals",
                    link: "/sports/originals",
                    hideInNav: !0
                }, {
                    title: "Show Jumping",
                    link: "/sports/",
                    hideInNav: !0
                }, {
                    title: "Live",
                    link: "/sports/",
                    hideInNav: !0
                }, {
                    title: "Must Watch",
                    link: "/sports/",
                    hideInNav: !0
                }, {
                    title: "Highlights",
                    link: "/sports/",
                    hideInNav: !0
                }],
                a = ["--SUMMER SPORTS", "archery", "athletics-general", "athletics-decathlon heptathlon", "athletics-field", "athletics-road", "athletics-track", "aquatics-general", "aquatics-artistic-swimming", "aquatics-diving", "aquatics-swimming", "aquatics-water-polo", "badminton", "baseball", "basketball", "basketball-3x3", "boxing", "breaking", "canoe-kayak", "climbing", "cricket", "cycling-general", "cycling-bmx", "cycling-mountain bike", "cycling-road", "cycling-track", "equestrian-general", "equestrian-dressage", "equestrian-eventing", "equestrian-show jumping", "fencing", "field hockey", "football", "golf", "gymnastics-general", "gymnastics-artistic", "gymnastics-rhythmic", "gymnastics-trampoline", "handball", "judo", "karate", "lacrosse", "modern pentathlon", "rowing", "rugby", "sailing", "shooting", "skateboarding-general", "skateboarding-park", "skateboarding-street", "soccer", "softball", "surfing", "table tennis", "taekwondo", "tennis", "triathlon", "volleyball", "volleyball-beach", "weightlifting", "wrestling", "--SUMMER PARASPORTS", "para archery", "para athletics", "para badminton", "blind football", "boccia", "para canoe", "para cycling", "para equestrian", "goalball", "para judo", "para powerlifting", "para rowing", "shooting para sport", "sitting volleyball", "para swimming", "para table tennis", "para taekwondo", "para triathlon", "wheelchair basketball", "wheelchair curling", "wheelchair fencing", "wheelchair rugby", "wheelchair tennis", "--WINTER PARASPORTS", "para alpine skiing", "para biathlon", "para cross-country skiing", "para ice hockey", "para snowboard", "wheelchair curling", "--WINTER SPORTS", "alpine skiing", "biathlon", "bobsleigh", "cross-country skiing", "curling", "figure skating", "freestyle skiing", "hockey", "icecross downhill", "luge", "nordic combined", "short track speed skating", "skeleton", "ski jumping", "skiing", "sliding", "speed skating", "snowboard", "--SHOW FILTERS", "calgary stampede", "cbc shows", "CEBL", "CHL", "CPL", "highlights", "hockey night in canada", "little league baseball", "other sports", "PWHL", "red bull", "cbc sports presents", "--EVENT TYPE FILTERS", "commonwealth games", "north american indigenous games", "olympics", "paralympics", "pan am games"],
                o = a.map((function(e) {
                    return e.replace(/^([a-z])/, (function(e, t) {
                        return t.toUpperCase()
                    }))
                })).map((function(e) {
                    return e.replace(/([a-z]\s+|-)([a-z])/g, (function(e, t, n) {
                        return "".concat(t).concat(n.toUpperCase())
                    }))
                })),
                s = a.reduce((function(e, t, n) {
                    return e[t] = o[n], e
                }), {}),
                c = a.reduce((function(e, t, n) {
                    return e[o[n]] = t, e
                }), {})
        },
        58670: (e, t, n) => {
            "use strict";
            n.d(t, {
                $S: () => r,
                Wn: () => i,
                ay: () => a
            });
            var r = "https://cbc2.websol.barchart.com",
                i = {
                    goPublicForm: {
                        height: "490px",
                        name: "goPublic",
                        src: "https://www.cbc.ca/news2/interactives/forms/go-public/",
                        type: "form"
                    },
                    region: {
                        type: "region"
                    },
                    radioCanadaInternational: {
                        callToActionText: "visit Radio Canada International",
                        descriptionId: "card-rci-description",
                        description: "RCI is CBC/Radio-Canada's multilingual service, forging bonds between Canadians and citizens of the world",
                        external: !0,
                        imageURL: "https://i.cbc.ca/1.6102254.!/fileImage/httpImage/rci-logo.jpg",
                        title: "Radio-Canada International",
                        type: "imageLink",
                        url: "https://ici.radio-canada.ca/rci/en"
                    },
                    schedule: {
                        type: "schedule"
                    },
                    scheduleBasketballCEBL: {
                        type: "schedule",
                        filter: "CEBL",
                        fullScheduleUrl: "https://www.cbc.ca/sports/basketball/cebl/broadcast/"
                    },
                    scheduleCurling: {
                        type: "schedule",
                        filter: "curling",
                        fullScheduleUrl: "https://www.cbc.ca/sports/olympics/winter/curling/broadcast/"
                    },
                    scheduleFigureskating: {
                        type: "schedule",
                        filter: "figure skating",
                        fullScheduleUrl: "https://www.cbc.ca/sports/olympics/winter/figureskating/broadcast"
                    },
                    scheduleRugby: {
                        type: "schedule",
                        filter: "rugby",
                        fullScheduleUrl: "https://www.cbc.ca/sports/streaming-schedule?sport=Rugby"
                    },
                    scheduleCPL: {
                        type: "schedule",
                        filter: "CPL",
                        fullScheduleUrl: "https://www.cbc.ca/sports/soccer/cpl/broadcast/"
                    },
                    scheduleNHL: {
                        type: "schedule",
                        filter: "hockey night in canada",
                        fullScheduleUrl: "https://www.cbc.ca/sports/streaming-schedule?sport=Hockey%20Night%20In%20Canada"
                    },
                    scheduleStampede: {
                        type: "schedule",
                        filter: "calgary stampede",
                        fullScheduleUrl: "https://www.cbc.ca/sports/calgarystampede/2019-calgary-stampede-schedule-1.5189169"
                    },
                    scheduleSkiing: {
                        type: "schedule",
                        filter: "skiing",
                        fullScheduleUrl: "https://www.cbc.ca/sports/olympics/winter/skiing/broadcast"
                    },
                    scheduleParalympics: {
                        type: "schedule",
                        filter: "paralympics",
                        fullScheduleUrl: "https://www.cbc.ca/sports/paralympics/streaming-schedule"
                    },
                    scheduleTrackandfield: {
                        type: "schedule",
                        filter: "athletics",
                        fullScheduleUrl: "https://www.cbc.ca/sports/olympics/summer/trackandfield/broadcast"
                    },
                    secureDrop: {
                        callToActionText: "learn more",
                        descriptionId: "card-secure-drop-description",
                        description: "Contact CBC and our top investigative journalists securely and anonymously with SecureDrop.",
                        external: !0,
                        imageURL: "https://i.cbc.ca/1.4829617.1537367557!/fileImage/httpImage/image.png_gen/derivatives/original_1180/image.png",
                        title: "SecureDrop",
                        type: "secureDrop",
                        url: "https://www.cbc.ca/securedrop/",
                        widgetClassName: "secureDropWidget"
                    }
                },
                a = {
                    "2017/becoming-canadian": ["trending"],
                    "2017/canadathestoryofus": ["trending"],
                    "2017/canadathestoryofus/csou-episodes": ["trending"],
                    "2017/truenorthcalling": ["trending"],
                    "2017/we-are-the-best": ["trending"],
                    "2017/wearecanada": ["trending"],
                    "arts/exhibitionists": ["trending"],
                    "arts/thefilmmakers": ["trending"],
                    "arts/interruptthisprogram": ["trending"],
                    "arts/crashgallery": ["trending"],
                    "arts/disruptingdesign": ["trending"],
                    "arts/thecollective": ["trending"],
                    "arts/eddyrogo": ["trending"],
                    "books/canadareads": ["trending"],
                    "books/tdkids": [],
                    homepage: [],
                    "life/backintimefordinner": ["trending"],
                    "life/food": ["trending"],
                    "life/getawayguide": ["trending"],
                    "life/greatcanadianbakingshow": ["trending"],
                    "life/holiday": ["sponsor", "trending"],
                    "life/holiday/cbcgives": ["trending"],
                    "life/thegoods": ["trending"],
                    "life/wellness": ["trending"],
                    "news/canada": ["region"],
                    "news/gopublic": ["goPublicForm"],
                    "news/indigenous": ["creeWidget", "espacesAutochtones", "unreserved"],
                    "news/investigates": ["secureDrop"],
                    "news/politics": ["powerAndPolitics", "theHouse", "rosemaryBarton"],
                    "news/politics/powerandpolitics": ["powerPanel", "premiersLeague", "powerLunch"],
                    "news/technology": ["quirksAndQuarks"],
                    "news/thenational": ["nationalShow", "nationalPodcast"],
                    "sports/basketball/cebl": ["scheduleBasketballCEBL"],
                    "sports/calgarystampede": ["scheduleStampede"],
                    "sports/olympics": ["schedule"],
                    "sports/paralympics": ["scheduleParalympics"],
                    "sports/rugby": ["scheduleRugby"],
                    "sports/soccer/cpl": ["scheduleCPL"]
                }
        },
        24573: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => u
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(35098),
                a = (0, i.createContext)(null),
                o = n(56552);

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

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var l = function(e) {
                    var t, n = e.chunkId,
                        r = e.children,
                        o = (0, i.useContext)(a);
                    return null !== o && void 0 !== o && null !== (t = o.hasChunk) && void 0 !== t && t.call(o, n) || null === o || void 0 === o || o.addChunk(n), r
                },
                u = function(e, t) {
                    var n = (0, i.lazy)(e);
                    if (!t) throw new Error("chunkId is required for the component chunk tracking to work properly");
                    return function(e) {
                        return (0, o.jsx)(l, {
                            chunkId: t,
                            children: (0, o.jsx)(n, c({}, e))
                        })
                    }
                }
        },
        777: (e, t, n) => {
            "use strict";
            n.r(t);
            var r = n(15861),
                i = n(64687),
                a = n.n(i),
                o = n(35098),
                s = n(28528),
                c = n(83110),
                l = n(42820),
                u = n(51341),
                p = (n(58109), n(95566), n(68438), n(83464), n(19496), n(4942)),
                d = n(46183),
                f = n(78095),
                m = n(71654),
                g = n(27109),
                h = n(96604),
                v = n(99014);

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

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var w = (0, d.oM)({
                name: "cookieJar",
                initialState: {
                    cookies: null
                },
                reducers: {
                    receive: function(e, t) {
                        return y(y({}, e), {}, {
                            cookies: t.payload.cookies
                        })
                    }
                }
            });
            w.actions.receive;
            const j = w.reducer;
            var O = n(24557),
                k = n(49467);

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

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = (0, d.oM)({
                    name: "featureflags",
                    initialState: {},
                    reducers: {
                        set: function(e, t) {
                            return P(P({}, e), t.payload)
                        }
                    }
                }),
                I = x.actions.set;
            const D = x.reducer;
            var C = n(67513),
                _ = n(49154);

            function L(e, t) {
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
                    t % 2 ? L(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var E = (0, d.oM)({
                name: "flp",
                initialState: {},
                reducers: {
                    set_flp_flags: function(e, t) {
                        return A(A({}, e), t.payload)
                    }
                }
            });
            E.actions.set_flp_flags;
            const T = E.reducer;

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

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var M = (0, d.oM)({
                name: "gdpr",
                initialState: {
                    euCountry: !1
                },
                reducers: {
                    set_eu_state: function(e, t) {
                        return N(N({}, e), {}, {
                            euCountry: t.payload.euCountry
                        })
                    }
                }
            });
            M.actions.set_eu_state;
            const R = M.reducer;
            var B = n(98265),
                U = n(49129),
                q = n(24876),
                F = n(41910),
                z = {},
                V = function(e) {
                    var t;
                    return null !== e && void 0 !== e && e.navigation && e.navigation.hasOwnProperty("name") && null !== (t = e.navigation) && void 0 !== t && t.items && Array.isArray(e.navigation.items) ? e.navigation : z
                };
            const W = (0, d.oM)({
                name: "navigation",
                initialState: {
                    inPage: z
                },
                extraReducers: function(e) {
                    e.addCase(F.i$, (function(e, t) {
                        var n;
                        e.inPage = null !== (n = t.payload) && void 0 !== n && n.inPageNav ? V(n.inPageNav) : z
                    }))
                }
            }).reducer;
            var H = n(17980),
                K = n(75854),
                G = n(63545);

            function $(e, t) {
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
                    t % 2 ? $(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var J = function() {
                return {
                    isVisible: !1,
                    status: "",
                    mediaItem: {},
                    selector: K.IL,
                    routeUpdate: !1,
                    forcePersistence: !1,
                    sizeConfig: {
                        useMediaAspectRatio: !1,
                        aspectRatio: null
                    },
                    mediaDataOverrides: {
                        thumbnail: null,
                        shouldDisableAds: !1
                    }
                }
            };
            var Y = n(5779),
                X = n(7157),
                ee = n(64744),
                te = n(33355),
                ne = n(68619),
                re = n(97365),
                ie = n(20290),
                ae = n(14066),
                oe = n(11623),
                se = n(98762),
                ce = n(26307),
                le = n(93639),
                ue = n(12523),
                pe = function(e) {
                    return e ? {
                        items: e,
                        isLoaded: !0
                    } : {
                        items: [],
                        isLoaded: !1
                    }
                },
                de = function(e, t) {
                    return !!e && !!(e.video && e.video.data && e.video.data.hasOwnProperty(t))
                },
                fe = {};

            function me(e) {
                switch (e.type) {
                    case F.i$.type:
                        return de(e.payload, "clip") ? e.payload.video.data.clip : fe;
                    case ue.c:
                        return e.payload;
                    case ue.j:
                        return fe;
                    default:
                        return
                }
            }
            var ge = n(22577),
                he = pe();

            function ve(e) {
                switch (e.type) {
                    case F.i$.type:
                        return de(e.payload, "trendingClips") ? pe(e.payload.video.data.trendingClips) : he;
                    case ge.KC:
                        return pe(e.payload);
                    case ge.Hx:
                        return he;
                    case ge.I$:
                        return {
                            items: [],
                            isLoaded: !0,
                            errors: [e.payload]
                        };
                    default:
                        return
                }
            }
            var be = n(39819),
                ye = pe();

            function we(e) {
                switch (e.type) {
                    case be.E:
                        return de(e.payload, "curatedPlaylist") ? pe(e.payload.video.data.curatedPlaylist) : ye;
                    case be.O:
                        return ye;
                    default:
                        return
                }
            }
            var je = n(8486),
                Oe = pe();

            function ke(e) {
                switch (e.type) {
                    case je.r7:
                        return pe(e.payload);
                    case je.AO:
                        return {
                            items: [],
                            isLoaded: !0,
                            errors: [e.payload]
                        };
                    case je.h9:
                        return pe();
                    default:
                        return
                }
            }
            var Se = n(28672);
            const Pe = {
                a11y: m.Z,
                app: g.default,
                author: h.ZP,
                content: v.ZP,
                cookieJar: j,
                detail: O.ZP,
                dmp: k.ZP,
                featureflags: D,
                feedback: C.ZP,
                fixed: _.Z,
                flp: T,
                gdpr: R,
                liveRadio: B.Z,
                liveStory: U.ZP,
                loader: q.ZP,
                navigation: W,
                newsletters: H.ZP,
                page: F.ZP,
                persistentPlayer: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case G.h:
                            var n = t.payload,
                                r = n.selector !== K.IL && n.routeUpdate;
                            return Q(Q({}, n), {}, {
                                routeUpdate: r
                            });
                        case G.N:
                            return J();
                        default:
                            return e
                    }
                },
                personalization: Y.ZP,
                preferences: X.ZP,
                regions: ee.ZP,
                rightRail: te.ZP,
                schedule: ie.ZP,
                search: ne.ZP,
                sectionalContent: re.ZP,
                singleLineup: ae.Z,
                ssr: oe.ZP,
                subjectContent: se.Z,
                tracking: ce.ZP,
                trending: le.ZP,
                video: function(e, t) {
                    return e || (e = {
                        currentClip: fe,
                        trendingClips: he,
                        curatedPlaylist: ye,
                        moreFromBaseSection: Oe
                    }), {
                        currentClip: me(t) || e.currentClip,
                        trendingClips: ve(t) || e.trendingClips,
                        curatedPlaylist: we(t) || e.curatedPlaylist,
                        moreFromBaseSection: ke(t) || e.moreFromBaseSection
                    }
                },
                videoDetail: Se.ZP
            };
            var xe = n(74987),
                Ie = n(58927),
                De = ["MEMBERSHIP_UPDATE", "liveRadio/update", "newsletters/load_data", "preferences/set_user", "schedule/receive_main", "schedule/receive_rightRail"],
                Ce = function(e) {
                    return e && null !== e && void 0 !== e && e.payload && null !== e && void 0 !== e && e.type ? De.includes(e.type) ? {
                        payload: "REDUX TYPE MUTED"
                    } : {
                        payload: e.payload
                    } : null
                },
                _e = function() {
                    return function(e) {
                        return function(t) {
                            return Ie.n({
                                category: "redux.action",
                                type: "info",
                                message: 'Type: "'.concat(t.type, '"'),
                                data: Ce(t)
                            }), e(t)
                        }
                    }
                };

            function Le(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Le(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ee = function() {
                    return function(e) {
                        return function(t) {
                            return e(t)
                        }
                    }
                },
                Te = {
                    serializableCheck: {
                        warnAfter: 3e3
                    },
                    immutableCheck: {
                        warnAfter: 3e3
                    }
                },
                Ze = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            fixed: {
                                year: (new Date).getFullYear()
                            }
                        },
                        t = (0, d.xC)({
                            reducer: Pe,
                            middleware: function(e) {
                                var t = e(Te);
                                return (0, xe.s)() ? t.concat(Ee) : t.concat(_e)
                            },
                            preloadedState: e
                        });
                    return t.asyncReducers = {}, t.injectReducer = function(e, n) {
                        var r;
                        t.asyncReducers[e] || (t.asyncReducers[e] = n, t.replaceReducer((r = t.asyncReducers, (0, f.UY)(Ae(Ae({}, Pe), r)))))
                    }, t
                };
            var Ne = n(65916),
                Me = n(79532),
                Re = n(79939),
                Be = n(29439),
                Ue = (n(2041), n(2612), "".concat(".", "distribution")),
                qe = n(41718),
                Fe = n(93849);
            "".concat((0, Fe.KF)("Client.contentApi.baseURL"), "key-values"), n(43386);

            function ze(e) {
                var t = Object.entries(e).reduce((function(t, n) {
                    var r = (0, Be.Z)(n, 2),
                        i = r[0],
                        a = r[1];
                    if ("number" === typeof a && i.endsWith(Ue)) {
                        var o = i.slice(0, -Ue.length),
                            s = "".concat(o).concat(".", "cohort"),
                            c = Math.random() < a ? 0 : 1;
                        e.hasOwnProperty(s) || (t[s] = c)
                    }
                    return t
                }), {});
                return I(t)
            }
            var Ve = n(3762),
                We = n(97858),
                He = n(64172),
                Ke = function() {
                    var e, t, n, r, i, a, o, s = [];
                    !(0, xe.s)() && null !== (e = window) && void 0 !== e && null !== (e = e.CBC) && void 0 !== e && e.APP ? (null !== (t = window) && void 0 !== t && null !== (t = t.CBC) && void 0 !== t && null !== (t = t.APP) && void 0 !== t && null !== (t = t.PubSub) && void 0 !== t && t.publish || s.push("CBC.APP.PubSub.publish"), null !== (n = window) && void 0 !== n && null !== (n = n.CBC) && void 0 !== n && null !== (n = n.APP) && void 0 !== n && null !== (n = n.PubSub) && void 0 !== n && n.subscribe || s.push("CBC.APP.PubSub.subscribe"), null !== (r = window) && void 0 !== r && null !== (r = r.CBC) && void 0 !== r && null !== (r = r.APP) && void 0 !== r && null !== (r = r.SC) && void 0 !== r && null !== (r = r.EventTracker) && void 0 !== r && r.trackEvent || s.push("CBC.APP.SC.EventTracker.trackEvent"), null !== (i = window) && void 0 !== i && null !== (i = i.CBC) && void 0 !== i && null !== (i = i.APP) && void 0 !== i && null !== (i = i.SC) && void 0 !== i && null !== (i = i.UTIL) && void 0 !== i && i.clearDataLayer || s.push("CBC.APP.SC.UTIL.clearDataLayer"), null !== (a = window) && void 0 !== a && null !== (a = a.CBC) && void 0 !== a && null !== (a = a.APP) && void 0 !== a && null !== (a = a.ANA) && void 0 !== a && a.ABTESTSCONFIG || s.push("CBC.APP.ANA.ABTESTSCONFIG"), null !== (o = window) && void 0 !== o && null !== (o = o.CBC) && void 0 !== o && null !== (o = o.APP) && void 0 !== o && null !== (o = o.DMP) && void 0 !== o && null !== (o = o.LOTAME) && void 0 !== o && o.audiences || s.push("CBC.APP.DMP.LOTAME.audiences"), s.length && qe.default.error("(checkStatsInterface) Unexpected cbc-stats interface, missing: ".concat(s))) : qe.default.error("(checkStatsInterface) Failed to load cbc-stats")
                },
                Ge = n(4054),
                $e = n(32697),
                Qe = n(7597);
            const Je = function() {
                return (0, Qe.L)({
                    fetch: {
                        retryDelay: 2e3,
                        retryTimes: 3
                    },
                    script: {
                        retryDelay: 2e3,
                        retryTimes: 3
                    }
                })
            };
            var Ye = n(71063),
                Xe = function() {
                    try {
                        (0, $e.init)({
                            name: "ocelot",
                            remotes: [{
                                name: Ye.l.scope,
                                entry: "".concat(Ye.l.publicPath, "/").concat(Ye.l.remoteEntryPath)
                            }],
                            plugins: [Je()]
                        })
                    } catch (e) {
                        qe.default.error("Failed to initialize module federation.", e)
                    }
                },
                et = n(97883),
                tt = function() {
                    var e = (0, r.Z)(a().mark((function e() {
                        var t, n;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, et.Z)(Ye.Y.setPublicPath);
                                case 3:
                                    t = e.sent, n = "".concat(Ye.l.publicPath, "/"), t(n), e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), qe.default.error("Failed to initialize account centre's public path [".concat(e.t0.message, "]"));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                nt = n(90629),
                rt = n(56552);
            (0, r.Z)(a().mark((function e() {
                var t, n, r, i, p, d;
                return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return Xe(), e.next = 3, tt();
                        case 3:
                            return r = Ze(window.__INITIAL_STATE__), i = "true" === (null === (t = window) || void 0 === t ? void 0 : t.__MAINTENANCE_MODE__), p = r.getState().featureflags, d = (0, He.lX)(), null !== p && void 0 !== p && null !== (n = p.sentry) && void 0 !== n && n.enabled && (0, We.n)(p, d), e.next = 10, (0, Re.cY)(window.__INITIAL_STATE__);
                        case 10:
                            Me.ZP.bindEvents(), r.dispatch(ze(p)), delete window.__INITIAL_STATE__, (0, u.TA)((function() {
                                (0, s.a)(document.getElementById("app"), (0, rt.jsx)(o.StrictMode, {
                                    children: (0, rt.jsx)(l.Provider, {
                                        store: r,
                                        children: (0, rt.jsxs)(c.Router, {
                                            history: d,
                                            children: [(0, rt.jsx)(Ve.vS, {}), (0, rt.jsx)(Ge.B6, {
                                                children: i ? (0, rt.jsx)(nt.Z, {}) : (0, rt.jsx)(Ne.Z, {})
                                            })]
                                        })
                                    })
                                })), window.Cypress && (window.store = {
                                    getState: r.getState
                                })
                            })), Ke();
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))()
        },
        40690: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Q
            });
            var r = n(71580),
                i = n(90207),
                a = n(90996),
                o = n(42192),
                s = n(1122),
                c = n(58821),
                l = n(83466),
                u = n(53592),
                p = n(93330),
                d = n(23026),
                f = n(15861),
                m = n(64687),
                g = n.n(m),
                h = n(33355),
                v = n(56605),
                b = n(47452),
                y = n(96846),
                w = function(e) {
                    return function() {
                        var t = (0, f.Z)(g().mark((function t(n) {
                            return g().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n((0, y.ag)(e)), n((0, h.cH)()), n((0, v.lM)(e, b.k6));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                j = n(58917),
                O = n(62797),
                k = n(24573),
                S = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(5362)]).then(n.bind(n, 9799))
                }), "LandingShows"),
                P = (0, k.S)((function() {
                    return Promise.all([n.e(2904), n.e(2816), n.e(6284), n.e(6563), n.e(8382), n.e(8922), n.e(532), n.e(9351), n.e(4329), n.e(2630), n.e(7887)]).then(n.bind(n, 71380))
                }), "Detail"),
                x = (0, k.S)((function() {
                    return Promise.all([n.e(2904), n.e(2816), n.e(6284), n.e(6563), n.e(8382), n.e(8922), n.e(532), n.e(9351), n.e(4329), n.e(2759)]).then(n.bind(n, 16193))
                }), "LiveStory"),
                I = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(8037), n.e(6001)]).then(n.bind(n, 48037))
                }), "Landing"),
                D = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(2558)]).then(n.bind(n, 10820))
                }), "AuthorProfilePage"),
                C = (0, k.S)((function() {
                    return n.e(9351).then(n.bind(n, 14191))
                }), "ErrorPage"),
                _ = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(5395)]).then(n.bind(n, 49423))
                }), "ErrorStatusPage"),
                L = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(4065)]).then(n.bind(n, 69647))
                }), "Topic"),
                A = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(2051)]).then(n.bind(n, 20709))
                }), "Show"),
                E = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(5145)]).then(n.bind(n, 32828))
                }), "FinancePage"),
                T = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(9490)]).then(n.bind(n, 69363))
                }), "FrequencyPage"),
                Z = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(2920)]).then(n.bind(n, 64229))
                }), "LandingNewsLocal"),
                N = (0, k.S)((function() {
                    return Promise.all([n.e(6284), n.e(6563), n.e(8382), n.e(8922), n.e(532), n.e(9351), n.e(5472), n.e(8233)]).then(n.bind(n, 58448))
                }), "LandingNews"),
                M = (0, k.S)((function() {
                    return Promise.all([n.e(6284), n.e(6563), n.e(8382), n.e(8922), n.e(532), n.e(9351), n.e(5472), n.e(2193)]).then(n.bind(n, 52936))
                }), "LandingNewsPOC"),
                R = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(3997)]).then(n.bind(n, 25680))
                }), "LandingPodcasts"),
                B = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(8825), n.e(6023)]).then(n.bind(n, 78013))
                }), "LandingSearch"),
                U = (0, k.S)((function() {
                    return Promise.all([n.e(532), n.e(9351), n.e(8887)]).then(n.bind(n, 66117))
                }), "LandingSports"),
                q = (0, k.S)((function() {
                    return Promise.all([n.e(2904), n.e(2816), n.e(6284), n.e(6563), n.e(8382), n.e(8922), n.e(532), n.e(9351), n.e(4329), n.e(2630), n.e(7887), n.e(5472), n.e(8452), n.e(301), n.e(2759), n.e(8037), n.e(1768)]).then(n.bind(n, 29285))
                }), "Preview"),
                F = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(6610)]).then(n.bind(n, 46828))
                }), "VideoDetailPage"),
                z = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(2877)]).then(n.bind(n, 72575))
                }), "LandingWatch"),
                V = (0, k.S)((function() {
                    return Promise.all([n.e(532), n.e(9351), n.e(8452), n.e(4357)]).then(n.bind(n, 11123))
                }), "LandingCategories"),
                W = (0, k.S)((function() {
                    return Promise.all([n.e(2904), n.e(6284), n.e(6563), n.e(8382), n.e(8922), n.e(532), n.e(9351), n.e(2630), n.e(5472), n.e(8452), n.e(301)]).then(n.bind(n, 86502))
                }), "FlexibleLandingPage"),
                H = (0, k.S)((function() {
                    return Promise.all([n.e(2904), n.e(2816), n.e(6284), n.e(6563), n.e(8382), n.e(8922), n.e(532), n.e(9351), n.e(4329), n.e(2630), n.e(7887), n.e(9508)]).then(n.bind(n, 595))
                }), "DetailNoAds"),
                K = (0, k.S)((function() {
                    return Promise.all([n.e(532), n.e(9351), n.e(6163), n.e(9366)]).then(n.bind(n, 26296))
                }), "SiteMap"),
                G = (0, k.S)((function() {
                    return Promise.resolve().then(n.bind(n, 37442))
                }), "AppStatus"),
                $ = (0, k.S)((function() {
                    return Promise.all([n.e(9351), n.e(1799)]).then(n.bind(n, 99419))
                }), "AccountWrapper");
            const Q = [{
                path: "/",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section*/(swimlane|featured|widgets)",
                component: C,
                getInitialData: w
            }, {
                path: "/:section(documentaries)/:subSection(specials)/:title-:contentId(\\d\\.\\d+)",
                exact: !0,
                component: P,
                getInitialData: s.n
            }, {
                path: "/:section(accessibility)/:title-:contentId(\\d\\.\\d+)",
                exact: !0,
                component: H,
                getInitialData: c.q
            }, {
                path: "/:section(account)/privacy/:title-:contentId(\\d\\.\\d+)",
                exact: !0,
                component: H,
                getInitialData: c.q
            }, {
                path: "/:section*/author/:title-:contentId(\\d\\.\\d+)",
                exact: !0,
                component: D,
                getInitialData: a.M
            }, {
                path: "/:section*/livestory/:title-:contentId(\\d\\.\\d+)",
                exact: !0,
                component: x,
                getInitialData: l.x
            }, {
                path: "/:section*/:title-:contentId(\\d\\.\\d+)",
                exact: !0,
                component: P,
                getInitialData: s.n
            }, {
                path: "/:section(arts|news|comedy|life|2017|radio)/:subSection(shows)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section+/(topic|cbc-topic)/:kind/:keywords+",
                exact: !0,
                component: L,
                getInitialData: p.A
            }, {
                path: "/:section(accessibility)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(canadaday)/",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(2017)/:subSection(nye)*",
                exact: !0,
                component: I,
                getInitialData: r.K
            }, {
                path: "/:section(2017)/:subSection(whatsyourstory)*",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(2017)/:title/:subPage*",
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: ["/:section(archives)/:subSection(sports|history|arts)", "/:section(archives)"],
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(arts)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(arts)/:subsection(watch|artuncontained)*",
                exact: !0,
                component: I,
                getInitialData: r.K
            }, {
                path: "/:section(arts)/:subsection(canadacouncildigitaloriginals|commotion|q|read|canadianscreenawards|secretpath|insurgenceresurgence)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(arts)/:title",
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: "/:section(books)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(books)/:subSection(canadareads)",
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: "/:section(books)/bookends",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(books)/:subSection(canadareads|bookends)/:subSections*",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(books)/:subsection(thisplace|canadawrites|ggbooks|gillerprize|kids|literaryprizes|readinglists|transmission)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(books)/:subSections*",
                exact: !0,
                component: I,
                getInitialData: r.K
            }, {
                path: "/:section(comedy)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(documentaries)", "/:section(documentaries)/:subSection(documentary-channel)", "/:section(documentaries)/:subSection(brief-but-spectacular|the-nature-of-things)", "/:section(documentaries)/:subSection(the-passionate-eye)", "/:section(documentaries)/:subSection(the-passionate-eye)/(episodes|articles)", "/:section(documentaries)/:subSection(short-docs)", "/:section(documentaries)/:subSection(short-docs)/(episodes|articles)", "/:section(documentaries)/:subSection(the-nature-of-things)/(episodes|articles)", "/:section(documentaries)/:subSection(blacklife)", "/:section(documentaries)/:subSection(fortheculture)"],
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(documentaries)/:subSection(specials)",
                exact: !0,
                component: I,
                getInitialData: r.K
            }, {
                path: "/:section(documentaries)/:subSection(the-oland-murder|hotdocsoncbc|goodpeople|enslaved)",
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: ["/:section(documentaries)", "/:section(documentaries)/**"],
                exact: !0,
                component: I,
                getInitialData: r.K
            }, {
                path: ["/:section(life)/:subSection(greatcanadianbakingshow)/(bakers|recipes|about)", "/:section(life)/:subSection(greatcanadianbakingshow)", "/:section(life)/:subSection(home|pets|style|thegoods|travel)"],
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(life)/:subSection(wellness|backintimefordinner|fridgewars|backintimeforwinter|giveaways|culture|food|games|hellospring|holiday|work-money)"],
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(life)/:subSection(holiday)/(cbcgives)"],
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(life)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(life)/:subSection(jamieoliver|backintimefordinner)/:subPage*", "/:section(life)/:subSection(getawayguide)"],
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: ["/:section(life)/:subSection(hellospring)/:subPage(springscenes|hellospring-livestream|showusyourspring)"],
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(life)/:subSection*/:subPage*"],
                exact: !0,
                component: I,
                getInitialData: r.K
            }, {
                path: "/:section(music)/:subSection(the-intro)",
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: ["/:section(music)/:subSection(decadeofdrake)"],
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: ["/:section(music)/:subSection(junos)/:subPage*"],
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(music)/:subSection(watch)/:category*"],
                exact: !0,
                component: z,
                getInitialData: j.a9
            }, {
                path: ["/:section(music)/:subSection(events|explore)"],
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(music)/:subSection(explore)/:subPage+",
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(music)/:subSection(events)/:subPage(festival|canadian-music-class-challenge|polaris|searchlight)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(music)/:subSection(firstplaylive)*"],
                exact: !0,
                component: I,
                getInitialData: r.K
            }, {
                path: ["/:section(news)/:subSection(business)/stocks/:stockId", "/:section(news)/:subSection(business)/forex/:forexId", "/:section(news)/:subSection(business)/index/:indexId", "/:section(news)/:subSection(business)/etf/:etfId", "/:section(news)/:subSection(business)/advancedsearch"],
                exact: !0,
                component: E,
                getInitialData: j.xV
            }, {
                path: ["/:section(news)/:subSection(canada)/calgary/the-road-ahead", "/:section(news)/:subSection(canada)/montreal/quebecvotes2018", "/:section(news)/:subSection(canada)/new-brunswick/nbvotes2018", "/:section(news)/:subSection(elections)(/peivotes2019|/nlvotes2019|nwtvotes2019|/albertavotes2019)", "/:section(news)/:subSection(joandonaldsonscholars|theinvestigators|theweekly|editorsblog)", "/:section(news)/:subSection(politics)/powerandpolitics"],
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: ["/:section(news)/:subSection(canada)/:region(calgary)/community", "/:section(news)/:subSection(canada)/:region(edmonton)/community"],
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(news)/:subSection(canada)/:region+/community",
                exact: !0,
                component: N,
                getInitialData: r.K
            }, {
                path: "/:section(news)/covid-19/:subSection(international-news|coping-with-covid-19|fact-check|economy-and-finance|lives-remembered|stories-of-hope)",
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: "/:section(news)/:subSection(climate|thenational|fifthestate|opinion|science|gopublic|indigenous|entertainment|health|investigates|politics|canada)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(news)/:subSection(canada)/beingblackincanada",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(news)/:subSection(canada)/beingblackincanada/all",
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: "/:section(arts|books|sports)/:subSection(beingblackincanada)",
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: "/:section(news)/:subsection(canada)/british-columbia/local",
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(news)/canada/:subSection(british-columbia|calgary|saskatchewan|edmonton|sudbury)",
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(news)/:subSection(canada)/:region+",
                exact: !0,
                component: M,
                getInitialData: o.z
            }, {
                path: "/:section(news)/:subSection(business)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(news)/:subSection(local)",
                exact: !0,
                component: Z,
                getInitialData: d.$
            }, {
                path: ["/:section(news)/:subSection(marketplace)"],
                exact: !0,
                component: I,
                getInitialData: r.K
            }, {
                path: "/:section(news)/:subSection(world)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(news)/:subSections+",
                exact: !0,
                component: N,
                getInitialData: r.K
            }, {
                path: "/:section(news)",
                exact: !0,
                component: N,
                getInitialData: o.z
            }, {
                path: ["/player", "/player/live", "/player/:section(archives|arts|docs|life|music|news|sports)", "/player/:section(sports|news)/live", "/player/:section(sports)/:subSection(breakthrough|replays)", "/player/:section(sports)/:subSection(olympics|paralympics)/:season(summer)/:subPage(live|replays|highlights)", "/player/:section(news)/:subSection(canada)/:region+", "/player/:section(news)/:subSection(canada)/:region(edmonton)/our-edmonton"],
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/player/play/:mediaId", "/player/play/:mediaType(audio|video)/:mediaId"],
                exact: !0,
                component: F,
                getInitialData: u.jc
            }, {
                path: "/:section(radio)/:subSection(frequency)",
                exact: !0,
                component: T,
                getInitialData: j.a9
            }, {
                path: "/:section(radio)/:subSection(podcasts)",
                exact: !0,
                component: R,
                getInitialData: r.K
            }, {
                path: "/:section(radio)/:subPage+",
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(radio)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(sports)/:subSection(crashed-ice)/:subPage*", "/:section(sports)/:subSection(podcasts)/:title(hnic|players-own-voice)*"],
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: ["/:section(sports)/all", "/:section(sports)/:subSection(olympics)/all"],
                exact: !0,
                component: S,
                getInitialData: j.a9
            }, {
                path: "/:section(sports)/:subPage(iwd)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/:subSection(olympics)/myolympics",
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(sports)/:subSection(shows)/:subPage+", "/:section(sports)/:subSection(shows)"],
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(sports)/:subSection(naig)/:subPage+", "/:section(sports)/:subSection(naig)"],
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(sports)/:subSection(hall-of-fame)/:subPage+", "/:section(sports)/:subSection(hall-of-fame)"],
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(sports)/:subSection(pan-american-games)/:subPage+", "/:section(sports)/:subSection(pan-american-games)"],
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(sports)/:subSection(parapanam)/:subPage+", "/:section(sports)/:subSection(parapanam)"],
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/:subSection(olympics)/:season(summer|winter)/sports",
                exact: !0,
                component: V,
                getInitialData: i.Z
            }, {
                path: "/:section(sports)/paralympics/:platform(streaming|tv)-schedule",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/olympics/winter/:platform(streaming|tv)-schedule",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/:subSection(olympics)/winter/:sport(figure-skating|curling|skiing|speed-skating|snowboard)/:platform(streaming)-schedule",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/:sport(hockey)/nhl/:platform(streaming)-schedule",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/:subSection(basketball)/cebl/:platform(streaming)-schedule",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/:subSection(soccer)/cpl/:platform(streaming)-schedule",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/:subSection(equestrian|rugby|calgarystampede)/:platform(streaming)-schedule",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/baseball/little-league/:platform(streaming)-schedule",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/:platform(tv|streaming)-schedule",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(sports)/:subSection(olympics)", "/:section(sports)/:subSection(olympics)/:season(summer|winter)/:subPage*", "/:section(sports)/:subSection(paralympics)", "/:section(sports)/:subSection(paralympics)/:subPage(video|features)", "/:section(sports)/commonwealthgames", "/:section(sports)/:subSection(commonwealthgames)/video", "/:section(sports)/commonwealthgames/:platform(tv|streaming)-schedule", "/:section(sports)/:subSection(hockey)/:subPage/(tv|streaming)-schedule", "/:section(sports)/:subSection(hockey)/:subPage", "/:section(sports)/:subSection(hockey)", "/:section(sports)/:subSection(basketball)", "/:section(sports)/:subSection(football)", "/:section(sports)/:subSection(baseball)", "/:section(sports)"],
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(sports)/:subSections*",
                exact: !0,
                component: U,
                getInitialData: r.K
            }, {
                path: "/:section(television)/:subSection(whatreyouat|anyonesgame|arcticvets|raceagainstthetide)",
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: ["/:section(television)/:subSection(battleoftheblades)/(blades-performances|mini-blades|skaters)", "/:section(television)/:subSection(higharctichaulers)/(ship|shore)", "/:section(television)/:subSection(canadasultimatechallenge|battleoftheblades|fromthevaults|higharctichaulers|watch|familyfeud|thedetectives|stillstanding|murdochmysteries|heartland|22minutes)", "/:section(television)/:subSection(stillstanding)/about"],
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(television)/:subSection*"],
                exact: !0,
                component: I,
                getInitialData: r.K
            }, {
                path: "/:section(cape)",
                exact: !0,
                component: W,
                getInitialData: O.j
            }, {
                path: ["/:section(indspire|reflections)"],
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: ["/:section(learning-english)/:subSection*"],
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: ["/:section(shows)/:title"],
                exact: !0,
                component: A,
                getInitialData: r.K
            }, {
                path: "/meta/global/(header|footer)/:section*",
                component: I
            }, {
                path: "/meta/hiddentestpage",
                exact: !0,
                component: I,
                getInitialData: r.K
            }, {
                path: "/meta/preview/:section*/:contentId",
                component: q,
                getInitialData: j.jq
            }, {
                path: ["/meta/nine-preview/:section*/:contentId(\\d\\.\\d+)", "/meta/nine-preview/:section*"],
                component: q
            }, {
                path: "/meta/flexible/:section*",
                component: W,
                getInitialData: O.j
            }, {
                path: "/:section(search)",
                component: B,
                getInitialData: j.a9
            }, {
                path: "/sitemap",
                component: K,
                getInitialData: j.a9
            }, {
                path: "/healthz",
                component: G
            }, {
                path: ["/account(/?)", "/account/*"],
                component: $
            }, {
                path: ["/error/:status", "/:status.html"],
                component: _,
                getInitialData: function(e) {
                    return function() {
                        var t = (0, f.Z)(g().mark((function t(n) {
                            var r, i;
                            return g().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = 404, r = e.includes("/error/") ? Number(e.split("/error/")[1]) : Number(e.match(/\/(\d+)\.html/)[1]), i = (0, b.jp)(r), n((0, y.ag)(e)), n((0, h.cH)()), n((0, v.lM)(e, i));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
            }, {
                path: "*",
                component: C,
                getInitialData: w
            }]
        },
        53041: (e, t, n) => {
            "use strict";
            n.d(t, {
                AL: () => a,
                PF: () => s,
                VB: () => o
            });
            var r = n(62615),
                i = n(38059),
                a = function(e) {
                    var t = "$sourceId: String",
                        n = "sourceId: $sourceId";
                    return e && (t = "$mediaId: BigInt", n = "mediaId: $mediaId"), "query videoDetailPage(".concat(t, ") {\n        contentItem(").concat(n, ") {\n            ").concat(i.jk, "\n            updatedAt\n            description\n            categories {\n                name\n                slug\n            }\n            section {\n                attributionLevels\n                tracking{\n                    contentArea\n                    subSection1\n                    subSection2\n                    subSection3\n                    subSection4\n                }\n            }\n        }\n    }")
                },
                o = function() {
                    return "query videoContentItemsByCategorySlugs($lineupOnly: Boolean, $itemsQueryFilters: ItemsQueryFilters, $mediaAspectRatios: [ContentItemAspectRatio!]) {\n        allContentItems(lineupOnly: $lineupOnly, itemsQueryFilters: $itemsQueryFilters, targets: [WEB,ALL], mediaAspectRatios: $mediaAspectRatios) {\n            nodes {\n                ...cardNode\n            }\n        }\n    } ".concat(r.Z)
                },
                s = function() {
                    return 'query videoContentItemsByMediaIds($sourceIds: String, $pageSize: Int) {\n        allContentItems(sourceIds: $sourceIds, pageSize: $pageSize, targets: [WEB,ALL], type: "video") {\n            nodes {\n                ...cardNode\n            }\n        }\n    } '.concat(r.Z)
                }
        },
        13019: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => a,
                Z: () => i
            });
            var r = n(93433),
                i = (n(9867), n(7231), n(23744), n(84350), n(89891), n(35275), n(85095), n(61399), n(57273), n(50791), n(39752), n(20816), n(75152), n(28997), n(23433), n(54367), n(46900), n(69898), function(e) {
                    var t = (e = e instanceof Array ? e : [e]).map((function(e) {
                            return e.query || ""
                        })),
                        n = (0, r.Z)(new Set(e.map((function(e) {
                            return e.fragment || ""
                        }))));
                    if (0 === t.length) return "";
                    var i = "query {\n    ".concat(t.join("\n"), "\n}\n    ").concat(n.join("\n"), "\n");
                    return {
                        query: i
                    }
                }),
                a = function(e) {
                    return e.replace(/^[^_A-Za-z]*/, "").replace(/[^_0-9A-Za-z]*/g, "")
                }
        },
        71733: (e, t, n) => {
            "use strict";
            n.d(t, {
                KP: () => g,
                Vu: () => h,
                f2: () => m
            });
            var r = n(4942),
                i = (n(58109), n(95566), n(68438), n(83464), n(19496), n(93849)),
                a = n(82489),
                o = n(53041),
                s = n(45532),
                c = n(50465),
                l = n(47452),
                u = n(46484);

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

            function d(e) {
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
            var f = i.KF("Client.contentApi.baseGraphqlURL"),
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        n = new c.p(l.$h, "Bad list of  sourceIds supplied");
                    if (!Array.isArray(e) || !e.length) return Promise.reject(n);
                    var r = e.filter((function(e) {
                        return (0, u.yZ)(e)
                    })).join(",");
                    if ("" === r) return Promise.reject(n);
                    var i = (0, o.PF)(),
                        s = {
                            sourceIds: r,
                            pageSize: t
                        };
                    return (0, a.he)(f, {
                        query: i,
                        variables: d({}, s)
                    }, !1)
                },
                g = function(e, t, n) {
                    var r = (0, s.Q2)(),
                        i = {
                            lineupSlug: e,
                            type: "video",
                            pageSize: t
                        };
                    return n && (i.mediaAspectRatios = n), (0, a.he)(f, {
                        query: r,
                        variables: d({}, i)
                    })
                },
                h = function(e, t, n, r) {
                    if (!e) return Promise.reject(new c.p(l.$h, "Bad categorySlugs supplied"));
                    var i = (0, o.VB)(),
                        s = {
                            lineupOnly: !1,
                            itemsQueryFilters: {
                                categorySlugs: e,
                                numMaxItems: t,
                                sort: "-publishedAt",
                                types: ["video"]
                            }
                        };
                    return r && (s.mediaAspectRatios = r), n && (s.itemsQueryFilters.mediaStreamType = n), (0, a.he)(f, {
                        query: i,
                        variables: d({}, s)
                    }, !1)
                }
        },
        46384: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(35098),
                i = n(4942),
                a = n(42820),
                o = n(89238),
                s = n(50853),
                c = n(82077),
                l = n(38339),
                u = n(55479);

            function p(e) {
                var t = function() {
                        var e = (0, a.useDispatch)(),
                            t = (0, a.useSelector)((function(e) {
                                return e.preferences
                            })),
                            n = t.userId,
                            r = t.preferences,
                            o = t.isLoading;
                        return {
                            userId: n,
                            preferences: r,
                            update: function(t, r) {
                                var a = (0, i.Z)({}, t, r);
                                e((0, s.xj)(n, t, r)), (0, c.a)(n, u.MK, a)
                            },
                            isLoading: o
                        }
                    }(),
                    n = t.userId,
                    p = t.preferences,
                    d = t.update,
                    f = t.isLoading,
                    m = (0, o.Z)(),
                    g = (0, r.useMemo)((function() {
                        if (!m) return (0, l.q9)(e)
                    }), [n, m]),
                    h = p.hasOwnProperty(e) ? p[e] : g,
                    v = void 0 !== h ? h : u.aR[e],
                    b = (0, r.useMemo)((function() {
                        return function(t) {
                            return d(e, t)
                        }
                    }), [n]);
                return {
                    value: v,
                    update: b,
                    isLoading: f,
                    isExplicitlySet: void 0 !== h
                }
            }
            var d = n(63578),
                f = n(41718);

            function m() {
                var e = p(u.Qr),
                    t = e.value,
                    n = e.update,
                    i = e.isExplicitlySet,
                    a = e.isLoading,
                    o = d.hy[t];
                o || (o = d.hy[d.fu.preference], f.default.error('(useLocalNewsRegion) Unknown region "'.concat(t, '"')));
                var s = (0, r.useMemo)((function() {
                    return function(e) {
                        d.hy[e] ? (n(e), window.CBC && window.CBC.APP && window.CBC.APP.PubSub && window.CBC.APP.PubSub.publish && window.CBC.APP.PubSub.publish("regionChange", d.hy[e])) : f.default.error('(useLocalNewsRegion) Unknown region "'.concat(t, '"'))
                    }
                }), [n]);
                return {
                    region: o,
                    update: s,
                    isExplicitlySet: i,
                    isLoading: a
                }
            }
        },
        90996: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => l
            });
            var r = n(56605),
                i = n(37168),
                a = n(33355),
                o = n(17346),
                s = n(96846),
                c = n(79532),
                l = function(e, t) {
                    return function(n) {
                        var l = t.contentId,
                            u = t.section,
                            p = (0, c.WM)(e) ? (0, c.Pr)(e) : e;
                        return n((0, s.ag)(p)), n((0, a.cH)()), n((0, i.k)({
                            contentId: l,
                            page: 1
                        })).then((function() {
                            n((0, o.v)(u)), n((0, r.bY)(p, !1, l))
                        })).catch((function(e) {
                            n((0, r.lM)(p, e.code))
                        }))
                    }
                }
        },
        58917: (e, t, n) => {
            "use strict";
            n.d(t, {
                a9: () => g,
                jq: () => m,
                xV: () => h
            });
            var r = n(1700),
                i = n(33355),
                a = n(99014),
                o = n(71580),
                s = n(1122),
                c = n(90996),
                l = n(62797),
                u = n(83466),
                p = n(96630),
                d = n(96846),
                f = n(56605),
                m = function(e, t, n) {
                    return function(r) {
                        return "contentpackage" === n.type || "landing" === n.type ? r((0, o.K)(e, t)) : "flp" === n.type ? r((0, l.j)(e)) : "authorbio" === n.type ? r((0, c.M)(e, t)) : "livestory" === n.type ? r((0, u.x)(e, t)) : r((0, s.n)(e, t))
                    }
                },
                g = function(e, t) {
                    return function(n) {
                        var o = t.section;
                        n((0, d.ag)(e)), n((0, i.cH)()), "/search" === e && n((0, f.n$)("Search CBC.ca")), n((0, p.L)({}, !1));
                        var s = {
                            contentList: [],
                            pageValue: 1,
                            section: o,
                            contentType: "",
                            timestamp: null,
                            status: r.St
                        };
                        return n((0, a.E8)(s)), Promise.resolve()
                    }
                },
                h = function(e, t) {
                    return function(e) {
                        return e(g("/news/business", t))
                    }
                }
        },
        86497: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(63751),
                i = n(56552);
            const a = function(e) {
                var t, n = e.params;
                return n && n.url && null !== (t = n.logo) && void 0 !== t && null !== (t = t.aspects) && void 0 !== t && null !== (t = t.ratioCustom) && void 0 !== t && t.url ? (0, i.jsx)(r.Z, {
                    url: n.url,
                    imageURL: n.logo.aspects.ratioCustom.url,
                    alt: null === n || void 0 === n ? void 0 : n.name
                }) : null
            }
        },
        18587: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => D
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(15861),
                a = n(29439),
                o = n(64687),
                s = n.n(o),
                c = n(35098),
                l = n(83110),
                u = n(73457),
                p = n(71733),
                d = n(46384),
                f = n(57944),
                m = n(41915),
                g = n(88495),
                h = n(82019),
                v = n(27953),
                b = n(54799),
                y = n(51591),
                w = n(88101),
                j = n(41718),
                O = n(56552);
            const k = function() {
                var e = (0, m.P)(5),
                    t = (0, c.useState)(e),
                    n = (0, a.Z)(t, 2),
                    r = n[0],
                    o = n[1],
                    k = (0, l.useLocation)().pathname,
                    S = (0, d.Z)().region,
                    P = (0, v.Z)(),
                    x = (0, w.DW)(k),
                    I = function() {
                        var e = (0, i.Z)(s().mark((function e(t) {
                            var n, r, i, a, c, l, d;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("Invalid categorySlug!");
                                    case 2:
                                        return e.prev = 2, e.next = 5, (0, p.Vu)([t], 5);
                                    case 5:
                                        a = e.sent, c = null !== (n = null === a || void 0 === a || null === (r = a.data) || void 0 === r || null === (r = r.allContentItems) || void 0 === r ? void 0 : r.nodes) && void 0 !== n ? n : [], l = null !== (i = (0, b.H9)(c)) && void 0 !== i ? i : [], d = null !== l && void 0 !== l && l.length ? (0, y.h)(l, u.xO, x) : [], o(d), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(2), j.default.error("(VideoLocal) fetchMyLocalItems failed", e.t0);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 12]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, c.useEffect)((function() {
                    P && (o(e), I(S.categorySlug))
                }), [S.categorySlug, P]), (0, O.jsxs)("div", {
                    className: "videoLocal",
                    children: [(0, O.jsx)(h.OT, {
                        text: "My Local"
                    }), P && (0, O.jsxs)("div", {
                        className: "videoLocalRegionSelector",
                        children: [(0, O.jsx)("div", {
                            className: "videoLocalRegionLabel",
                            children: S.title
                        }), (0, O.jsx)("div", {
                            className: "videoLocalRegionListWrapper",
                            children: (0, O.jsx)(f.Z, {
                                placement: g.r4.CONTENT
                            })
                        })]
                    }), (0, O.jsx)(m.Z, {
                        layout: u.xO,
                        items: r
                    })]
                })
            };
            var S = n(16537),
                P = n(90955),
                x = n(7589);

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

            function D(e) {
                var t = e.params,
                    n = void 0 === t ? {} : t,
                    i = e.position;
                if ("video-only" === n.contentType) return (0, O.jsx)(k, {});
                var a = n.displayFilter && n.displayFilter.subjectsExpression || "",
                    o = n.displayFilter && n.displayFilter.excludedCategorySet || "",
                    s = {
                        type: "flp",
                        useGrid: !0
                    };
                return "" === a && "" === o || (s.section = "flp-localsubject-".concat((0, x.Wu)(JSON.stringify(n.displayFilter))), s.subjects = a, s.excludedCategorySet = o), null !== n && void 0 !== n && n.videoSuffix && (s.pathSuffix = n.videoSuffix), null !== n && void 0 !== n && n.onClick && (s.cardClickHandler = n.onClick), (0, O.jsx)(S.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? I(Object(n), !0).forEach((function(t) {
                            (0, r.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    isSwimlane: i === P.iJ
                }, s))
            }
        },
        62797: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => c
            });
            var r = n(56605),
                i = n(33355),
                a = n(96846),
                o = n(41910),
                s = n(79532),
                c = function(e) {
                    return function(t) {
                        var n, c = 0 === e.indexOf("/meta/flexible"),
                            l = (0, s.vL)(e);
                        n = c ? (0, s.Vc)(e) : l ? (0, s.RT)(e) : "/" === e ? "homepage" : e;
                        var u = 0 === e.indexOf("/player/") ? e.split("/")[2] : "";
                        return t((0, a.ag)(n)), t((0, i.cH)()), t((0, o.VA)()), t((0, a.Vf)(n, l)).then((function() {
                            t((0, r.Np)(n, !1, "", u))
                        })).catch((function(e) {
                            t((0, r.lM)(n, e.code))
                        }))
                    }
                }
        },
        7589: (e, t, n) => {
            "use strict";
            n.d(t, {
                Wu: () => s,
                dK: () => l,
                up: () => u,
                vn: () => c
            });
            var r = n(4942),
                i = (n(2041), n(95566), n(2612), n(9867), n(7231), n(58109), n(68438), n(83464), n(19496), n(11482));

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

            function o(e) {
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

            function s(e) {
                return e.split("").reduce((function(e, t) {
                    return (e = (e << 5) - e + t.charCodeAt(0)) & e
                }), 0)
            }

            function c(e) {
                return "true" === e || e && "false" !== e
            }

            function l(e) {
                return (0, i.A)("section".concat(e))
            }

            function u(e, t) {
                var n = l(t);
                return e.map((function(e, t) {
                    var r = e.trackingClass || "".concat(n, "card").concat(t);
                    return o(o({}, e), {}, {
                        trackingClass: r
                    })
                }))
            }
        },
        71580: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => b,
                l: () => v
            });
            n(9867), n(7231), n(58109), n(95566), n(68438);
            var r = n(83696),
                i = n(10078),
                a = n(33355),
                o = n(17346),
                s = n(56605),
                c = n(96630),
                l = n(41910),
                u = n(96846),
                p = n(77340),
                d = n(63578),
                f = n(99827),
                m = n(41718),
                g = n(79532),
                h = n(75301),
                v = function(e) {
                    return function(t) {
                        var n = (0, f.M4)((0, f.nP)(e));
                        return Promise.all(n.filter((function(e) {
                            return e && "contentlist" === e.type
                        })).map((function(e) {
                            return t((0, i.md)(e.path, e.count || d.CT))
                        })))
                    }
                },
                b = function(e, t) {
                    return function(n, i) {
                        var d, f = e.slice(1),
                            b = (0, g.bO)(e);
                        return b && (f = e.replace(/\/meta\/(nine-)?preview\//i, "").replace("/".concat(t.contentId), ""), e = e.replace(/\/meta\/(nine-)?preview/i, "").replace("/".concat(t.contentId), ""), d = t.contentId), n((0, u.ag)(e)), n((0, a.cH)()), n(b ? (0, r.RD)({
                            section: f,
                            previewId: d,
                            preview: b
                        }) : (0, r.QZ)({
                            section: f
                        })).then((function() {
                            return Promise.all([n((0, c.L)()), n(v(f)), n((0, o.v)(f)), n((0, l.i$)({})), n((0, p.Z)(f))]).then((function() {
                                var t, r = i(),
                                    a = (null === r || void 0 === r || null === (t = r.page) || void 0 === t ? void 0 : t.sections) || null;
                                return Promise.resolve([n((0, h.Xd)(a)), n((0, s.Np)(e, !1, ""))])
                            })).catch((function(e) {
                                m.default.error("(fetchLandingPageData)", e)
                            }))
                        })).catch((function(t) {
                            n((0, s.lM)(e, t.code))
                        }))
                    }
                }
        },
        90207: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(15861),
                i = n(64687),
                a = n.n(i),
                o = n(33355),
                s = n(17346),
                c = n(56605),
                l = n(96630),
                u = n(96846),
                p = n(10078),
                d = function(e) {
                    return function() {
                        var t = (0, r.Z)(a().mark((function t(n) {
                            var r, i;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.slice(1), i = /\/winter\//.test(r) ? "Olympic Sports - CBC Olympic Winter Games Beijing 2022" : "Summer Olympic Sports - CBC Sports", n((0, u.ag)(e)), n((0, o.cH)()), n((0, c.n$)(i)), t.prev = 5, t.next = 8, n((0, p.zK)(r));
                                    case 8:
                                        return t.next = 10, n((0, l.L)({}, !1));
                                    case 10:
                                        return t.next = 12, n((0, s.v)(r));
                                    case 12:
                                        n((0, c.Np)(e, !1, "")), t.next = 18;
                                        break;
                                    case 15:
                                        t.prev = 15, t.t0 = t.catch(5), n((0, c.lM)(e, t.t0.code));
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [5, 15]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
        },
        90629: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(35098),
                i = n.n(r),
                a = n(51341),
                o = n(24573),
                s = n(83110),
                c = n.n(s),
                l = n(85244),
                u = n(92269),
                p = n(56552),
                d = (0, o.S)((function() {
                    return Promise.all([n.e(532), n.e(9351), n.e(8825), n.e(6163), n.e(328)]).then(n.bind(n, 91066))
                }), "GlobalHeader"),
                f = (0, a.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-GlobalFooter-component"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(532), n.e(1857)]).then(n.bind(n, 7264))
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
                        return 7264
                    }
                }),
                m = (0, o.S)((function() {
                    return Promise.resolve().then(n.bind(n, 37442))
                }), "AppStatus"),
                g = function() {
                    var e = (0, s.useLocation)(),
                        t = (0, r.useRef)(null),
                        n = (0, u.Z)(t, "viewportLarge"),
                        i = e.pathname.replace(/^\//, ""),
                        a = (0, p.jsx)(r.Suspense, {
                            children: (0, p.jsx)(d, {
                                maintenance: !0,
                                viewport: n,
                                route: {
                                    path: i,
                                    search: e.search
                                }
                            })
                        });
                    return "healthz" === i ? (0, p.jsx)(r.Suspense, {
                        children: (0, p.jsx)(m, {
                            status: 503
                        })
                    }) : i.startsWith(l.hn) ? a : i.startsWith(l.DT) ? (0, p.jsx)(f, {}) : (0, p.jsxs)("div", {
                        className: "pageComponent",
                        ref: t,
                        children: [(0, p.jsx)(r.Suspense, {
                            children: (0, p.jsx)(d, {
                                maintenance: !0
                            })
                        }), (0, p.jsxs)("div", {
                            className: "maintenance-page",
                            children: [(0, p.jsx)("h1", {
                                children: "\ud83d\udea7 Maintenance"
                            }), (0, p.jsx)("p", {
                                children: "CBC.ca is undergoing scheduled maintenance between 2 a.m. - 6 a.m. ET. There will be service disruptions during this time. We apologize for any inconvenience."
                            })]
                        }), (0, p.jsx)(f, {})]
                    })
                };
            const h = g
        },
        48926: (e, t, n) => {
            "use strict";
            n.d(t, {
                JX: () => a,
                Rn: () => c,
                S2: () => i,
                WH: () => s,
                sm: () => o
            });
            var r = n(93849),
                i = "apps-video",
                a = /\/:section\(news\)\/:subSection+((\(canada\)\/:region\+\/)|([a-z]\+))/,
                o = /^\/:section\(news\)\/((:subSection\(canada\)\/:region\+$)|(covid-19$))/,
                s = /^news\/canada\/(british-columbia|ottawa|manitoba|montreal|new-brunswick|calgary|saskatchewan|saskatoon|nova-scotia|newfoundland-labrador|edmonton|windsor|toronto|thunder-bay|prince-edward-island|london|hamilton|kitchener-waterloo|north|sudbury)$/,
                c = (0, r.KF)("Client.stats.urlABTestsConfig")
        },
        42192: (e, t, n) => {
            "use strict";
            n.d(t, {
                R: () => O,
                z: () => w
            });
            var r = n(15861),
                i = n(64687),
                a = n.n(i),
                o = n(83696),
                s = n(33355),
                c = n(17346),
                l = n(56605),
                u = n(96630),
                p = n(41910),
                d = n(96846),
                f = n(77340),
                m = n(52401),
                g = n(48926),
                h = n(71580),
                v = n(41718),
                b = n(43386),
                y = n(79532),
                w = function(e, t, n) {
                    return function(r) {
                        var i, a = e.slice(1),
                            b = (0, y.WM)(e);
                        return b && (a = e.replace("/meta/preview/", "").replace("/".concat(t.contentId), ""), e = e.replace("/meta/preview", "").replace("/".concat(t.contentId), ""), i = t.contentId), r((0, d.ag)(e)), r((0, s.cH)()), r(b ? (0, o.RD)({
                            section: a,
                            previewId: i
                        }) : (0, o.QZ)({
                            section: a,
                            abTestSlug: t.abTestSlug
                        })).then((function() {
                            return null !== n && void 0 !== n && n.current ? Promise.resolve() : Promise.all([r((0, u.L)()), r((0, h.l)(a)), r((0, c.v)(a)), "/news" === e && r((0, m.L)(g.S2, e)), r((0, p.i$)({})), r((0, f.Z)(a))]).then((function() {
                                r((0, l.Np)(e, !1, ""))
                            })).catch((function(e) {
                                v.default.error("(fetchLandingNewsPageData)", e)
                            }))
                        })).catch((function(t) {
                            r((0, l.lM)(e, t.code))
                        }))
                    }
                },
                j = function(e) {
                    return "lineup-optimization-".concat(e)
                },
                O = function() {
                    var e = (0, r.Z)(a().mark((function e(t) {
                        var n, r, i;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = null, e.prev = 1, e.next = 4, (0, b.requestJSON)(g.Rn);
                                case 4:
                                    r = e.sent, i = r.tests, n = i[j(t)] || null, e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(1), v.default.error("(fetchABTestsConfigData)", e.t0);
                                case 12:
                                    return e.abrupt("return", n);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 9]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        23026: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => c
            });
            var r = n(56605),
                i = n(64744),
                a = n(91392),
                o = n(96630),
                s = n(96846),
                c = function(e) {
                    return function(t) {
                        return t((0, s.ag)(e)), t((0, i.Dz)()), t((0, a.L)(1)).then((function() {
                            return t((0, o.L)())
                        })).then((function() {
                            return t((0, r.Np)(e, !1, ""))
                        })).catch((function(n) {
                            t((0, r.lM)(e, n.code))
                        }))
                    }
                }
        },
        83466: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => s
            });
            var r = n(56605),
                i = n(96846),
                a = n(43892),
                o = n(79532),
                s = function(e, t, n) {
                    return function(s) {
                        var c, l = t.contentId,
                            u = null !== (c = null === n || void 0 === n ? void 0 : n.ts) && void 0 !== c ? c : null,
                            p = (0, o.vL)(e),
                            d = p ? (0, o.RT)(e) : e,
                            f = (0, a.v)(l, p, u);
                        return Promise.all([s((0, i.ag)(d, l)), s(f)]).then((function() {
                            s((0, r.bY)(d, !1, l))
                        })).catch((function(e) {
                            s((0, r.lM)(d, e.code))
                        }))
                    }
                }
        },
        93330: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n(4942),
                i = n(15861),
                a = (n(30666), n(95566), n(6129), n(58109), n(68438), n(83464), n(19496), n(64687)),
                o = n.n(a),
                s = n(56605),
                c = n(39060),
                l = n(33355),
                u = n(96630),
                p = n(96846),
                d = n(15426),
                f = n(98445),
                m = n(8082);

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

            function h(e) {
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
            var v = function(e, t) {
                return function(n) {
                    var r = t.kind,
                        a = t.keywords;
                    return n((0, p.ag)(e)), n((0, l.cH)()), n((0, c.K)({
                        kind: r,
                        keywords: a
                    })).then((0, i.Z)(o().mark((function e() {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, d.V)("ocelot.topic.*");
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    return e.prev = 6, e.t0 = e.catch(0), e.abrupt("return", Promise.resolve({}));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 6]
                        ])
                    })))).then((function(t) {
                        var r, i = null === (r = t) || void 0 === r || null === (r = r.allKeyValues) || void 0 === r ? void 0 : r.nodes.find((function(t) {
                            return t.key === "ocelot.topic.".concat(e.substr(1).replace(/\./g, ""))
                        }));
                        return i && (t = i.value), n((0, u.L)(t, !1))
                    })).then((function() {
                        return n((0, s.Np)(e, !1, ""))
                    })).then((function() {
                        return n((function(t, n) {
                            var r, i = n(),
                                a = (0, f.M)((0, f.v)(e)),
                                o = "".concat(a, " | CBC.ca");
                            t((0, s.vc)(a, h(h({}, null === i || void 0 === i || null === (r = i.app) || void 0 === r ? void 0 : r.meta), {}, {
                                "og:title": o,
                                "twitter:title": o
                            }), m.sL.TOPIC))
                        }))
                    })).catch((function(t) {
                        n((0, s.lM)(e, t.code))
                    }))
                }
            }
        },
        98445: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => i,
                v: () => r
            });
            var r = function(e) {
                    return e ? e.match(/[^/]+$/)[0] : null
                },
                i = function(e) {
                    if (!e) return "";
                    var t = decodeURIComponent(e);
                    return "TOPIC: ".concat(t.toUpperCase())
                }
        },
        53592: (e, t, n) => {
            "use strict";
            n.d(t, {
                jc: () => Q
            });
            var r = n(93433),
                i = n(4942),
                a = n(15861),
                o = n(64687),
                s = n.n(o),
                c = (n(53145), n(95566), n(62153), n(58109), n(68438), n(9867), n(7231), n(83464), n(19496), n(56605)),
                l = n(13126),
                u = n(8082),
                p = n(41910),
                d = n(96846),
                f = n(12523),
                m = n(23025),
                g = n(69912),
                h = n(26307),
                v = n(28672),
                b = n(97409),
                y = n(41718),
                w = function(e) {
                    return function() {
                        var t = (0, a.Z)(s().mark((function t(n) {
                            var r, i, a, o;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, (0, b.Ux)(e);
                                    case 3:
                                        a = t.sent, o = null !== (r = null === a || void 0 === a || null === (i = a.data) || void 0 === i || null === (i = i.relatedItems) || void 0 === i ? void 0 : i.nodes) && void 0 !== r ? r : [], n((0, v.O7)(o)), t.next = 12;
                                        break;
                                    case 8:
                                        throw t.prev = 8, t.t0 = t.catch(0), y.default.error("(fetch_ml_driven_media_related_stories) request failed for ".concat(e), t.t0), t.t0;
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 8]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                j = n(29439),
                O = (n(2041), n(2612), n(78116)),
                k = n(64323);

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

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = function(e) {
                    var t, n, r, i, a, o, s, c, l, u, p;
                    if (!e || !e.sourceId) return {};
                    var d = "".concat(e.type, "clip"),
                        f = null !== (t = null === (n = e.media) || void 0 === n || null === (n = n.contentArea) || void 0 === n ? void 0 : n.toLowerCase()) && void 0 !== t ? t : null === (r = e.section) || void 0 === r || null === (r = r.tracking) || void 0 === r ? void 0 : r.contentArea,
                        m = null !== (i = null === (a = e.showData) || void 0 === a ? void 0 : a.name) && void 0 !== i ? i : e.showName,
                        g = (0, O.zb)(null === (o = e.section) || void 0 === o ? void 0 : o.attributionLevels),
                        h = P({}, null !== (s = e.media) && void 0 !== s && s.brandedSponsorName ? {
                            name: e.media.brandedSponsorName
                        } : {}),
                        v = function(e) {
                            return e ? Object.entries(e).reduce((function(e, t) {
                                var n = (0, j.Z)(t, 2),
                                    r = n[0],
                                    i = n[1],
                                    a = r.toLowerCase();
                                return a.startsWith("sub") && i && (e[a] = i), e
                            }), {}) : {}
                        }(null === (c = e.section) || void 0 === c ? void 0 : c.tracking);
                    return P(P(P(P({
                        media: P(P({
                            audiovideo: e.type,
                            duration: null === (l = e.media) || void 0 === l ? void 0 : l.duration,
                            id: e.sourceId,
                            liveondemand: null === (u = e.media) || void 0 === u ? void 0 : u.streamType
                        }, null !== (p = e.media) && void 0 !== p && p.sport ? {
                            sport: e.media.sport
                        } : {}), m ? {
                            show: m
                        } : {}),
                        publishedTime: parseInt(e.publishedAt),
                        contentid: e.sourceId,
                        keywords: {
                            tags: e.tags,
                            concepts: e.concepts
                        },
                        type: d,
                        title: e.title,
                        contenttype: d,
                        pillar: "feed",
                        preventDefault: !0,
                        spa: !0,
                        url: "".concat(k.Pb).concat(e.type, "/").concat(e.sourceId)
                    }, f ? {
                        contentarea: f
                    } : {}), Object.keys(h).length ? {
                        sponsor: h
                    } : {}), Object.keys(g).length ? {
                        department: g
                    } : {}), Object.keys(v).length ? v : {})
                },
                I = n(71804),
                D = n(93849),
                C = n(82489),
                _ = n(53041),
                L = n(50465),
                A = n(47452),
                E = n(46484);

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

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var N = D.KF("Client.contentApi.baseGraphqlURL"),
                M = function(e) {
                    var t;
                    if ((0, E.Wh)(e)) t = {
                        mediaId: parseFloat(e)
                    };
                    else {
                        if (!(0, E.yZ)(e)) return Promise.reject(new L.p(A.$h, "Bad media id supplied: ".concat(e)));
                        t = {
                            sourceId: e
                        }
                    }
                    var n = (0, _.AL)(!!t.mediaId);
                    return (0, C.Ci)(N, {
                        query: n,
                        variables: Z({}, t)
                    }, {
                        "X-Cache-By-Country": !0
                    }, !1)
                },
                R = [460, 620, 940, 1180],
                B = n(8486),
                U = function(e) {
                    return {
                        type: B.AO,
                        payload: e
                    }
                },
                q = n(54799),
                F = n(51591),
                z = n(71733),
                V = n(73457),
                W = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.limit,
                        r = void 0 === n ? 10 : n,
                        i = t.sourceId,
                        o = void 0 === i ? "" : i,
                        c = t.path,
                        l = void 0 === c ? "" : c,
                        u = t.streamType;
                    return function() {
                        var t = (0, a.Z)(s().mark((function t(n) {
                            var i, a, c, p, d, f, m, g, h;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return i = r + 5, t.prev = 1, t.next = 4, (0, z.Vu)(e, i, u);
                                    case 4:
                                        return d = t.sent, f = null !== (a = null === d || void 0 === d || null === (c = d.data) || void 0 === c || null === (c = c.allContentItems) || void 0 === c ? void 0 : c.nodes) && void 0 !== a ? a : [], m = f.filter((function(e) {
                                            return e.sourceId !== o
                                        })).slice(0, r), g = null !== (p = (0, q.H9)(m)) && void 0 !== p ? p : [], h = null !== g && void 0 !== g && g.length ? (0, F.h)(g, V.xO, l) : [], t.abrupt("return", n((s = h, {
                                            type: B.r7,
                                            payload: s
                                        })));
                                    case 12:
                                        return t.prev = 12, t.t0 = t.catch(1), t.abrupt("return", n(U(t.t0)));
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                                var s
                            }), t, null, [
                                [1, 12]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                H = n(35517);

            function K(e, t) {
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
                    t % 2 ? K(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var $ = function() {
                    return function(e) {
                        e({
                            type: B.h9,
                            payload: null
                        }), e({
                            type: f.j,
                            payload: null
                        }), e((0, m.qv)()), e((0, v.Jt)()), e((0, p.i$)({}))
                    }
                },
                Q = function(e, t) {
                    return function() {
                        var n = (0, a.Z)(s().mark((function n(i, a) {
                            var o, l, p, m, v, b, y, j, O, k, S, P, I, D, C, _, E, T, Z, N, R, B, U, q, F, z, V, H, K, Q;
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return v = a().featureflags, b = null !== (o = null === v || void 0 === v || null === (l = v.player) || void 0 === l ? void 0 : l.genericCategorySlugFilter) && void 0 !== o ? o : [], y = "player/play", j = t.mediaId || null, O = t.mediaType, e = "/".concat(y, "/").concat(O, "/").concat(j), i($()), i((0, d.ag)(e)), n.prev = 8, n.next = 11, M(j);
                                    case 11:
                                        if (Z = n.sent, Y = null === (P = Z.data) || void 0 === P || null === (P = P.contentItem) || void 0 === P ? void 0 : P.type, ["audio", "video"].includes(Y) && (k = null === (I = Z.data) || void 0 === I ? void 0 : I.contentItem), k) {
                                            n.next = 15;
                                            break
                                        }
                                        throw new L.p(A.k6, "Clip not found");
                                    case 15:
                                        N = J(k.image), k = G(G({}, k), {}, {
                                            image: N
                                        }), S = x(k), te(k), i((s = k, {
                                            type: f.c,
                                            payload: s
                                        })), i((0, h.c5)(S)), R = null === (D = k.categories) || void 0 === D ? void 0 : D.some((function(e) {
                                            return /(olympic)/i.test(e.name)
                                        })), B = null === (C = k.categories) || void 0 === C ? void 0 : C.some((function(e) {
                                            return /(paralympic)/i.test(e.name)
                                        })), U = null !== (_ = S.contentarea) && void 0 !== _ ? _ : "", q = "olympics" === U && B || "sports" === U && B ? "olympics-paralympics" : "olympics" === U || "sports" === U && R ? "olympics-summer" : U, F = null !== (E = null === (T = k.media) || void 0 === T ? void 0 : T.adOrder) && void 0 !== E ? E : "", i((0, c.Np)(e, !1, j, q, F)), z = ee(k), i((0, c.vc)(k.title, z, u.sL.DETAIL)), n.next = 34;
                                        break;
                                    case 31:
                                        return n.prev = 31, n.t0 = n.catch(8), n.abrupt("return", i((0, c.lM)(e, n.t0.code)));
                                    case 34:
                                        return V = null !== (p = k.categories) && void 0 !== p ? p : [], H = V.map((function(e) {
                                            return e.slug
                                        })).filter((function(e) {
                                            return !b.includes(e)
                                        })), K = {
                                            contentArea: null === (m = k.media) || void 0 === m ? void 0 : m.contentArea,
                                            sourceId: k.sourceId,
                                            limit: 5,
                                            path: y,
                                            streamType: "On-Demand"
                                        }, n.prev = 37, n.next = 40, Promise.allSettled([i(w(k.sourceId))].concat((0, r.Z)(null !== (Q = H) && void 0 !== Q && Q.length ? [i(W(H, K))] : []), [i((0, g.h)(5, y))]));
                                    case 40:
                                        n.next = 44;
                                        break;
                                    case 42:
                                        n.prev = 42, n.t1 = n.catch(37);
                                    case 44:
                                    case "end":
                                        return n.stop()
                                }
                                var s, Y
                            }), n, null, [
                                [8, 31],
                                [37, 42]
                            ])
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                J = function(e) {
                    var t = {
                        url: "",
                        srcset: []
                    };
                    if (e) {
                        var n;
                        t.url = e.url || "";
                        var r = null === (n = e.aspects) || void 0 === n || null === (n = n.ratio16x9) || void 0 === n ? void 0 : n.url;
                        r && (t.url = r, R.forEach((function(e) {
                            t.srcset.push("".concat(r, "Resize%3D").concat(e, " ").concat(e, "w"))
                        })))
                    }
                    return t
                },
                Y = function(e) {
                    var t = Number(e);
                    return isNaN(t) ? "" : new Date(t).toISOString()
                },
                X = function(e) {
                    var t, n, r, i = Y(e.publishedAt),
                        a = Y(e.updatedAt),
                        o = Math.round(e.media.duration);
                    return {
                        "@context": "https://schema.org",
                        "@type": "audio" === e.type ? "AudioObject" : "VideoObject",
                        identifier: e.sourceId,
                        name: e.title,
                        description: null !== (t = e.description) && void 0 !== t ? t : "",
                        thumbnailUrl: null !== (n = null === (r = e.image) || void 0 === r ? void 0 : r.url) && void 0 !== n ? n : "",
                        uploadDate: i,
                        datePublished: i,
                        dateModified: a,
                        duration: "PT".concat(o, "S"),
                        embedUrl: "".concat(k.uq).concat(e.sourceId),
                        contentUrl: "".concat(k.Pb).concat(e.type, "/").concat(e.sourceId)
                    }
                },
                ee = function(e) {
                    var t, n, r, i, a = e.sourceId,
                        o = parseInt(e.publishedAt),
                        s = null !== (t = null === (n = e.image) || void 0 === n ? void 0 : n.url) && void 0 !== t ? t : "",
                        c = !(null === (r = e.media) || void 0 === r || !r.episode),
                        u = e.type;
                    return (0, l.vU)({
                        canonical: "".concat(k.Pb).concat(u, "/").concat(a),
                        description: e.description,
                        "video:duration": null === (i = e.media) || void 0 === i ? void 0 : i.duration,
                        "video:release_date": (0, I.Z)(o, "yyyy-MM-dd"),
                        "og:url": "".concat(k.Pb).concat(u, "/").concat(a),
                        "og:title": e.title,
                        "og:image": s,
                        "og:description": e.description,
                        "og:type": c ? "video.episode" : "video.other",
                        "twitter:card": "player",
                        "twitter:title": e.title,
                        "twitter:description": e.description,
                        "twitter:image": s,
                        "twitter:player": "".concat(k.uq).concat(a),
                        jsonld: X(e)
                    })
                },
                te = function(e) {
                    var t;
                    return G(G({}, e), {}, {
                        title: (0, H.Ws)(null === e || void 0 === e ? void 0 : e.title),
                        description: (0, H.Ws)(null === e || void 0 === e ? void 0 : e.description),
                        showData: {
                            name: (0, H.Ws)(null === e || void 0 === e || null === (t = e.showData) || void 0 === t ? void 0 : t.name)
                        }
                    })
                }
        },
        71654: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s,
                v: () => o
            });
            var r = n(46183),
                i = n(27109),
                a = (0, r.oM)({
                    name: "a11y",
                    initialState: {
                        a11yNotificationText: ""
                    },
                    reducers: {
                        setA11yNotificationText: function(e, t) {
                            e.a11yNotificationText = t.payload
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(i.set_app_state, (function(e, t) {
                            var n, r;
                            e.a11yNotificationText = (r = null === t || void 0 === t || null === (n = t.payload) || void 0 === n || null === (n = n.app) || void 0 === n ? void 0 : n.title) ? r + " Loaded" : ""
                        })), e.addCase(i.app_reset, (function(e) {
                            e.a11yNotificationText = ""
                        }))
                    }
                }),
                o = a.actions.setA11yNotificationText;
            const s = a.reducer
        },
        96604: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gn: () => f,
                ZP: () => h,
                Zq: () => g,
                g8: () => m
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(46183),
                a = n(41550),
                o = n(25234),
                s = n(27109);

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

            function l(e) {
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
            var u = function() {
                    return {
                        profile: l({}, a.Xg),
                        recentContent: {}
                    }
                },
                p = (0, i.oM)({
                    name: "author",
                    initialState: u(),
                    reducers: {
                        set_profile: {
                            reducer: function(e, t) {
                                return l(l({}, e), {}, {
                                    profile: l({}, t.payload)
                                })
                            },
                            prepare: function(e) {
                                return {
                                    payload: (0, o.ne)(e)
                                }
                            }
                        },
                        set_recent_content: function(e, t) {
                            return l(l({}, e), {}, {
                                recentContent: {
                                    list: t.payload.list,
                                    pageValue: t.payload.pageValue,
                                    hasNextPage: t.payload.hasNextPage
                                }
                            })
                        },
                        reset: function() {
                            return u()
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(s.app_reset, (function() {
                            return u()
                        }))
                    }
                }),
                d = p.actions,
                f = d.set_profile,
                m = d.set_recent_content,
                g = d.reset;
            const h = p.reducer
        },
        99014: (e, t, n) => {
            "use strict";
            n.d(t, {
                E8: () => u,
                ZP: () => p
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(46183),
                a = n(27109);

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

            function s(e) {
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
            var c = {
                    contentList: null,
                    pageValue: 1,
                    section: "",
                    contentType: "",
                    timestamp: "",
                    status: "",
                    pubQueueVersion: "",
                    isLoadMore: !1,
                    contentPackage: null
                },
                l = (0, i.oM)({
                    name: "content",
                    initialState: {
                        list: [],
                        section: "",
                        status: "",
                        contentType: "",
                        hasNextPage: !1
                    },
                    reducers: {
                        receive_content: {
                            reducer: function(e, t) {
                                if (t.payload.contentList instanceof Array) return s(s({}, e), {}, {
                                    list: t.payload.contentList,
                                    pageValue: t.payload.pageValue,
                                    hasNextPage: t.payload.hasNextPage,
                                    section: t.payload.section,
                                    contentType: t.payload.contentType,
                                    timestamp: t.payload.timestamp,
                                    status: t.payload.status,
                                    pubQueueVersion: t.payload.pubQueueVersion,
                                    contentPackage: t.payload.isLoadMore ? e.contentPackage : t.payload.contentPackage
                                })
                            },
                            prepare: function(e) {
                                return {
                                    payload: s(s({}, c), e)
                                }
                            }
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(a.app_reset, (function() {
                            return {
                                list: [],
                                section: "",
                                status: "",
                                contentType: "",
                                hasNextPage: !1
                            }
                        }))
                    }
                }),
                u = l.actions.receive_content;
            const p = l.reducer
        },
        49467: (e, t, n) => {
            "use strict";
            n.d(t, {
                R3: () => u,
                ZP: () => m,
                b_: () => f,
                hC: () => d,
                rh: () => p
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(93433),
                i = n(4942),
                a = n(46183);

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

            function s(e) {
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
            var c = (0, a.oM)({
                    name: "dmp",
                    initialState: {
                        audienceSegments: [],
                        adAudiences: [],
                        audienceSegmentsLoaded: !1,
                        preferences: {}
                    },
                    reducers: {
                        receive_audiences: function(e, t) {
                            return function(e, t) {
                                var n = t.audienceSegments,
                                    i = t.adAudiences;
                                return s(s({}, e), {}, {
                                    audienceSegments: (0, r.Z)(n),
                                    adAudiences: (0, r.Z)(i),
                                    audienceSegmentsLoaded: !0
                                })
                            }(e, t.payload)
                        },
                        update_ns_preference: function(e, t) {
                            return function(e, t) {
                                var n = t.namespace,
                                    r = t.key,
                                    a = t.value,
                                    o = e.preferences[n] || {};
                                return s(s({}, e), {}, {
                                    preferences: s(s({}, e.preferences), {}, (0, i.Z)({}, n, s(s({}, o), {}, (0, i.Z)({}, r, a))))
                                })
                            }(e, t.payload)
                        },
                        update_ns_preferences: function(e, t) {
                            return function(e, t) {
                                var n, r = t.namespace,
                                    a = t.preferences,
                                    o = null !== (n = e.preferences[r]) && void 0 !== n ? n : {};
                                return s(s({}, e), {}, {
                                    preferences: s(s({}, e.preferences), {}, (0, i.Z)({}, r, s(s({}, o), a)))
                                })
                            }(e, t.payload)
                        },
                        receive_ns_preferences: function(e, t) {
                            return function(e, t) {
                                var n = t.namespace,
                                    r = t.preferences;
                                return s(s({}, e), {}, {
                                    preferences: s(s({}, e.preferences), {}, (0, i.Z)({}, n, s({}, r)))
                                })
                            }(e, t.payload)
                        }
                    }
                }),
                l = c.actions,
                u = l.receive_audiences,
                p = l.update_ns_preference,
                d = l.update_ns_preferences,
                f = l.receive_ns_preferences;
            const m = c.reducer
        },
        98265: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => s,
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

            function a(e) {
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
            var o = (0, n(46183).oM)({
                    name: "liveRadio",
                    initialState: null,
                    reducers: {
                        update: function(e, t) {
                            return a(a({}, e), t.payload)
                        }
                    }
                }),
                s = o.actions.update;
            const c = o.reducer
        },
        49129: (e, t, n) => {
            "use strict";
            n.d(t, {
                TK: () => b,
                ZP: () => w,
                wo: () => y,
                zi: () => g
            });
            var r = n(84506),
                i = n(4942),
                a = n(45987),
                o = (n(2041), n(95566), n(2612), n(9867), n(7231), n(58109), n(68438), n(83464), n(19496), n(46183)),
                s = n(27109),
                c = n(11805),
                l = n(35517),
                u = ["liveStory"],
                p = ["body"];

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
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = {
                    content: null,
                    updates: [],
                    mainMedia: null,
                    carouselMedia: [],
                    theLatest: [],
                    isLoaded: !1,
                    sharedUpdate: null
                },
                g = function(e) {
                    var t, n, i, o, s;
                    if (null === e || void 0 === e || !e.sourceId) return m;
                    var d = e.liveStory,
                        g = (0, a.Z)(e, u),
                        h = g.body,
                        v = (0, a.Z)(g, p),
                        b = function(e) {
                            var t, n = null === e || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.content;
                            return Array.isArray(n) ? n.reduce((function(e, t) {
                                var n, r = (0, l.Ws)(null === t || void 0 === t || null === (n = t.content) || void 0 === n || null === (n = n[0]) || void 0 === n ? void 0 : n.content);
                                return r && e.push(r), e
                            }), []) : []
                        }(null === h || void 0 === h ? void 0 : h.parsed),
                        y = f(f({}, v), {}, {
                            deck: (0, l.Ws)(v.deck),
                            eventTitle: (0, l.Ws)(null === d || void 0 === d ? void 0 : d.eventTitle),
                            title: (0, l.Ws)(v.title)
                        }),
                        w = null !== (t = null === d || void 0 === d || null === (n = d.sharedUpdate) || void 0 === n ? void 0 : n.nodes) && void 0 !== t ? t : [],
                        j = w.length ? (0, c.gR)(w[0]) : null,
                        O = (null !== (i = null === d || void 0 === d || null === (o = d.updates) || void 0 === o ? void 0 : o.nodes) && void 0 !== i ? i : []).map(c.gR),
                        k = null !== (s = null === h || void 0 === h ? void 0 : h.associatedContent) && void 0 !== s ? s : [],
                        S = (0, r.Z)(k),
                        P = S[0];
                    return {
                        content: y,
                        mainMedia: void 0 === P ? null : P,
                        carouselMedia: S.slice(1),
                        theLatest: b,
                        sharedUpdate: j,
                        updates: O,
                        isLoaded: !0
                    }
                },
                h = (0, o.oM)({
                    name: "liveStory",
                    initialState: m,
                    reducers: {
                        reset_live_story: function() {
                            return m
                        },
                        receive_live_story_content: {
                            reducer: function(e, t) {
                                return f(f({}, e), t.payload)
                            },
                            prepare: function(e) {
                                return {
                                    payload: f({}, g(e))
                                }
                            }
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(s.app_reset, (function() {
                            return m
                        }))
                    }
                }),
                v = h.actions,
                b = v.reset_live_story,
                y = v.receive_live_story_content;
            const w = h.reducer
        },
        7157: (e, t, n) => {
            "use strict";
            n.d(t, {
                CT: () => u,
                VK: () => c,
                ZP: () => p,
                tY: () => l
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

            function a(e) {
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
            var o = (0, n(46183).oM)({
                    name: "preferences",
                    initialState: {
                        userId: "",
                        preferences: {},
                        isLoading: !0
                    },
                    reducers: {
                        set_user: function(e, t) {
                            return a(a({}, e), {}, {
                                userId: t.payload.userId,
                                preferences: {},
                                isLoading: !0
                            })
                        },
                        update_preference: function(e, t) {
                            return a(a({}, e), {}, {
                                preferences: a(a({}, e.preferences), {}, (0, r.Z)({}, t.payload.preference, t.payload.value))
                            })
                        },
                        receive_preferences: function(e, t) {
                            return a(a({}, e), {}, {
                                isLoading: !1,
                                preferences: a(a({}, t.payload.preferences), e.preferences)
                            })
                        }
                    }
                }),
                s = o.actions,
                c = s.set_user,
                l = s.update_preference,
                u = s.receive_preferences;
            const p = o.reducer
        },
        64744: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dz: () => l,
                VG: () => c,
                ZP: () => u
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

            function a(e) {
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
            var o = (0, n(46183).oM)({
                    name: "regions",
                    initialState: {
                        selected: {},
                        isExplicitlySet: !1,
                        regionList: null
                    },
                    reducers: {
                        all_regions: function(e, t) {
                            return a(a({}, e), {}, {
                                regionList: t.payload.regionList
                            })
                        },
                        reset_all_regions: function(e) {
                            return a(a({}, e), {}, {
                                regionList: null
                            })
                        }
                    }
                }),
                s = o.actions,
                c = s.all_regions,
                l = s.reset_all_regions;
            const u = o.reducer
        },
        11623: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZB: () => i,
                ZP: () => a
            });
            var r = (0, n(46183).oM)({
                    name: "ssr",
                    initialState: {
                        server: !0
                    },
                    reducers: {
                        hydrate: function() {
                            return {
                                server: !1
                            }
                        }
                    }
                }),
                i = r.actions.hydrate;
            const a = r.reducer
        },
        20290: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bl: () => u,
                Sf: () => l,
                Vy: () => p,
                ZP: () => m,
                s1: () => f,
                up: () => c,
                x3: () => d
            });
            n(83464), n(19496);
            var r = n(4942);
            n(58109), n(95566), n(68438);

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

            function a(e) {
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
            var o = (0, n(46183).oM)({
                    name: "schedule",
                    initialState: {},
                    reducers: {
                        receive_rightRail: function(e, t) {
                            if (t.payload.type) {
                                var n = (0, r.Z)({}, t.payload.type, t.payload);
                                return a(a({}, e), n)
                            }
                        },
                        loading: function(e, t) {
                            var n = t.payload.loading;
                            return a(a({}, e), {}, {
                                sportsSchedule: a(a({}, null === e || void 0 === e ? void 0 : e.sportsSchedule), {}, {
                                    loading: n
                                })
                            })
                        },
                        receive_main: function(e, t) {
                            var n = t.payload,
                                i = n.key,
                                o = n.sportsSchedule,
                                s = n.filteredScheduleList,
                                c = n.caption;
                            return a(a({}, e), {}, (0, r.Z)({
                                sportsSchedule: o
                            }, i, a(a({}, e[i]), {}, {
                                filteredScheduleList: s,
                                caption: c
                            })))
                        },
                        update_filter: function(e, t) {
                            var n = t.payload,
                                i = n.key,
                                o = n.filter,
                                s = n.zone,
                                c = n.filteredScheduleList,
                                l = n.caption,
                                u = n.dropDownList;
                            return a(a({}, e), {}, (0, r.Z)({}, i, a(a({}, e[i]), {}, {
                                dropDownList: u,
                                filter: o,
                                zone: s,
                                filteredScheduleList: c,
                                caption: l
                            })))
                        },
                        update_drop_down_list: function(e, t) {
                            var n = t.payload,
                                i = n.key,
                                o = n.dropDownList;
                            return a(a({}, e), {}, (0, r.Z)({}, i, a(a({}, e[i]), {}, {
                                dropDownList: o
                            })))
                        },
                        update_filter_bar: function(e, t) {
                            var n = t.payload,
                                i = n.filterBar,
                                o = n.key,
                                s = n.filteredScheduleList,
                                c = n.caption;
                            return a(a({}, e), {}, (0, r.Z)({}, o, a(a({}, e[o]), {}, {
                                filterBar: i,
                                filteredScheduleList: s,
                                caption: c
                            })))
                        }
                    }
                }),
                s = o.actions,
                c = s.receive_rightRail,
                l = s.loading,
                u = s.receive_main,
                p = s.update_filter,
                d = s.update_drop_down_list,
                f = s.update_filter_bar;
            const m = o.reducer
        },
        68619: (e, t, n) => {
            "use strict";
            n.d(t, {
                BE: () => c,
                W0: () => l,
                ZP: () => f,
                ow: () => p,
                rU: () => u,
                yo: () => d
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

            function a(e) {
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
            var o = (0, n(46183).oM)({
                    name: "search",
                    initialState: {},
                    reducers: {
                        receive_search_results: function(e, t) {
                            if (Array.isArray(t.payload.json)) return a(a({}, e), {}, {
                                results: t.payload.json,
                                section: t.payload.params.section,
                                searchTerm: t.payload.params.searchTerm,
                                sortOrder: t.payload.params.sortOrder,
                                resultCount: t.payload.params.resultCount,
                                infoCard: t.payload.params.infoCard,
                                pageNum: t.payload.params.pageNum,
                                media: t.payload.params.media
                            })
                        },
                        receive_top_video_results: function(e, t) {
                            if (t.payload.json instanceof Object) return a(a({}, e), {}, {
                                video_results: {
                                    items: t.payload.json
                                }
                            })
                        },
                        update_search_results: function(e, t) {
                            if (Array.isArray(t.payload.json)) {
                                var n = e.results.concat(t.payload.json);
                                return a(a({}, e), {}, {
                                    results: n,
                                    pageNum: t.payload.params.pageNum
                                })
                            }
                        },
                        receive_autocomplete_results: function(e, t) {
                            if (Array.isArray(t.payload.json)) return a(a({}, e), {}, {
                                autocompleteResults: t.payload.json
                            })
                        },
                        clear_search_results: function() {
                            return {}
                        }
                    }
                }),
                s = o.actions,
                c = s.receive_search_results,
                l = s.receive_top_video_results,
                u = s.update_search_results,
                p = s.receive_autocomplete_results,
                d = s.clear_search_results;
            const f = o.reducer
        },
        98762: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => s,
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

            function a(e) {
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
            var o = (0, n(46183).oM)({
                    name: "subjectContent",
                    initialState: {
                        subjects: "",
                        items: []
                    },
                    reducers: {
                        receive: function(e, t) {
                            return a(a({}, e), {}, {
                                subjects: t.payload.subjects,
                                items: t.payload.items || []
                            })
                        }
                    }
                }),
                s = o.actions.receive;
            const c = o.reducer
        },
        28672: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jt: () => d,
                O7: () => f,
                ZP: () => m
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = n(46183),
                a = n(27109);

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

            function s(e) {
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
            var c = {
                    items: [],
                    isLoaded: !1
                },
                l = function() {
                    return {
                        relatedStories: c
                    }
                },
                u = (0, i.oM)({
                    name: "videoDetail",
                    initialState: l(),
                    reducers: {
                        reset_video_detail: function() {
                            return l()
                        },
                        receive_related_stories: {
                            reducer: function(e, t) {
                                return s(s({}, e), t.payload)
                            },
                            prepare: function(e) {
                                return {
                                    payload: {
                                        relatedStories: {
                                            items: e,
                                            isLoaded: !0
                                        }
                                    }
                                }
                            }
                        }
                    },
                    extraReducers: function(e) {
                        e.addCase(a.app_reset, (function() {
                            return l()
                        }))
                    }
                }),
                p = u.actions,
                d = p.reset_video_detail,
                f = p.receive_related_stories;
            const m = u.reducer
        },
        50772: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => r
            });
            var r = {
                VIDEO: "video",
                AUDIO: "audio",
                IMAGE: "Image"
            }
        },
        11805: (e, t, n) => {
            "use strict";
            n.d(t, {
                NH: () => c,
                Ym: () => s,
                gR: () => l,
                iw: () => u
            });
            n(58109), n(95566), n(68438), n(83464), n(19496);
            var r = n(4942),
                i = (n(9867), n(7231), n(50772));

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

            function o(e) {
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
            var s = function(e) {
                    var t, n, r, i, a, s = e.contentItem,
                        c = e.playNextActive,
                        l = void 0 !== c && c,
                        u = e.autoPlay,
                        p = void 0 !== u && u,
                        d = e.routeUpdate,
                        f = void 0 !== d && d,
                        m = e.forcePersistence,
                        g = void 0 !== m && m,
                        h = e.useMediaAspectRatio,
                        v = void 0 === h || h,
                        b = e.featureAttribution,
                        y = void 0 === b ? null : b,
                        w = e.disableRecommendations,
                        j = void 0 === w || w;
                    return null !== s && void 0 !== s && s.sourceId ? o(o({
                        mediaItem: {
                            sourceId: s.sourceId,
                            title: null !== (t = s.title) && void 0 !== t ? t : "",
                            description: null !== (n = s.description) && void 0 !== n ? n : "",
                            image: {
                                url: null !== (r = null === (i = s.image) || void 0 === i || null === (i = i.aspects) || void 0 === i || null === (i = i.ratio16x9) || void 0 === i ? void 0 : i.url) && void 0 !== r ? r : ""
                            },
                            publishedAt: s.publishedAt,
                            type: s.type,
                            media: s.media,
                            showData: null !== (a = s.showData) && void 0 !== a ? a : {},
                            playNextActive: l
                        },
                        config: {
                            autoPlay: p,
                            routeUpdate: f,
                            forcePersistence: g,
                            useMediaAspectRatio: v,
                            maxHeight: 650
                        }
                    }, y ? {
                        featureAttribution: y
                    } : {}), {}, {
                        disableRecommendations: j
                    }) : null
                },
                c = function(e) {
                    var t, n, r, i, a, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ratio16x9";
                    return null !== e && void 0 !== e && e.sourceId ? {
                        alt: null !== (t = e.altText) && void 0 !== t ? t : "",
                        url: null !== (n = null === (r = e.aspects[o]) || void 0 === r ? void 0 : r.url) && void 0 !== n ? n : "",
                        credit: null !== (i = e.credit) && void 0 !== i ? i : "",
                        description: null !== (a = e.description) && void 0 !== a ? a : ""
                    } : null
                },
                l = function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.id,
                        a = void 0 === r ? "" : r,
                        l = n.publishedAt,
                        u = void 0 === l ? "" : l,
                        p = n.title,
                        d = void 0 === p ? "" : p,
                        f = n.author,
                        m = void 0 === f ? {
                            name: "",
                            url: "",
                            title: ""
                        } : f,
                        g = n.body,
                        h = void 0 === g ? {
                            parsed: [{
                                content: [{
                                    content: "",
                                    type: ""
                                }],
                                tag: "",
                                type: ""
                            }],
                            associatedContent: []
                        } : g,
                        v = n.position,
                        b = void 0 === v ? 0 : v,
                        y = i.w.AUDIO,
                        w = i.w.VIDEO,
                        j = i.w.IMAGE,
                        O = null !== (e = null === h || void 0 === h || null === (t = h.associatedContent) || void 0 === t ? void 0 : t[0]) && void 0 !== e ? e : {},
                        k = {};
                    if (O.type === j) {
                        var S = c(O);
                        S && (k = {
                            image: S
                        })
                    } else if (O.type === w || O.type === y) {
                        var P = s({
                            contentItem: O
                        });
                        P && (k = {
                            mediaItem: P
                        })
                    }
                    return o({
                        id: a,
                        publishedAt: u,
                        title: d,
                        author: m,
                        position: b,
                        body: h.parsed
                    }, k)
                },
                u = function(e) {
                    return e.map((function(e) {
                        var t, n, r, i, a, o = "image" === e.type.toLowerCase() ? {
                            url: null === (t = e.aspects) || void 0 === t ? void 0 : t.ratio16x9.url,
                            aspects: e.aspects
                        } : {
                            url: null === (n = e.image) || void 0 === n ? void 0 : n.aspects.ratio16x9.url,
                            aspects: null === (r = e.image) || void 0 === r ? void 0 : r.aspects
                        };
                        return {
                            id: e.sourceId,
                            sourceId: e.sourceId,
                            title: e.title,
                            description: e.description,
                            image: o,
                            url: e.url,
                            media: {
                                duration: null === (i = e.media) || void 0 === i ? void 0 : i.duration,
                                hasCaptions: null === (a = e.media) || void 0 === a ? void 0 : a.hasCaptions
                            },
                            type: e.type
                        }
                    }))
                }
        },
        38339: (e, t, n) => {
            "use strict";
            n.d(t, {
                D6: () => c,
                Fs: () => o,
                q9: () => s
            });
            n(83464), n(95566), n(19496);
            var r = n(55479),
                i = n(41718),
                a = n(74987);

            function o(e, t) {
                (0, a.s)() || window.localStorage && window.localStorage.setItem(r.hk + e, t)
            }

            function s(e) {
                if (!(0, a.s)()) {
                    var t;
                    try {
                        t = window.localStorage.getItem(r.hk + e)
                    } catch (n) {
                        return void i.default.error("(getCached) cookies disabled", n)
                    }
                    return null === t ? void 0 : t
                }
            }

            function c() {
                Object.keys(r.aR).forEach((function(e) {
                    (0, a.s)() || window.localStorage && window.localStorage.removeItem(r.hk + e)
                }))
            }
        },
        1700: (e, t, n) => {
            "use strict";
            n.d(t, {
                St: () => a,
                ad: () => i,
                z5: () => r
            });
            var r = "/version",
                i = .00138,
                a = "SUCCESS"
        },
        6211: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => c
            });
            var r = n(1700),
                i = n(68075),
                a = n(43386),
                o = n(41718),
                s = n(74987),
                c = function() {
                    if (!(0, s.s)() && "" !== window.__APP_VERSION__ && null === (0, i.getFeedCookie)("cbc_app_version")) return (0, a.request)("".concat(window.location.protocol, "//").concat(window.location.hostname).concat("" === window.location.port ? "" : ":" + window.location.port).concat(r.z5)).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        (0, i.createFeedCookie)("cbc_app_version", e.version, r.ad), e.version !== window.__APP_VERSION__ && window.location.reload(!0)
                    })).catch((function(e) {
                        o.default.error("(checkAppVersion)", e)
                    }))
                }
        },
        94: (e, t, n) => {
            "use strict";
            n.d(t, {
                T_: () => r,
                Tf: () => a,
                Uv: () => i
            });
            var r = "h:mm aaaa",
                i = "medal",
                a = "team-canada"
        },
        69777: (e, t, n) => {
            "use strict";
            n.d(t, {
                $F: () => l,
                DR: () => c
            });
            var r = n(29439),
                i = (n(58109), n(95566), n(68438), n(9867), n(7231), n(20694)),
                a = n(69626),
                o = n(94),
                s = n(67558),
                c = (n(39588), function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.eventType,
                        a = i.Rj[n] || "",
                        o = ("web" === (null === e || void 0 === e ? void 0 : e.platform) ? "Streaming Schedule" : "tv" === (null === e || void 0 === e ? void 0 : e.platform) && "TV Schedule") || "",
                        s = t.isMedal,
                        c = t.isTeamCanada,
                        l = t.type,
                        u = [
                            [s, "Medals"],
                            [c, "Team Canada"],
                            [l, i.Rj[l]]
                        ].map((function(e) {
                            var t = (0, r.Z)(e, 2),
                                n = t[0],
                                i = t[1];
                            return n && i || ""
                        })).filter((function(e) {
                            return !!e
                        })).join(", ");
                    return u && o && (o = "".concat(o, ", filtered by: ").concat(u)), a && o ? "".concat(a, " ").concat(o) : o
                }),
                l = function(e) {
                    return function(t) {
                        var n = t.ti,
                            r = t.url,
                            i = t.nb,
                            c = t.stt,
                            l = t.uuid,
                            u = t.startTime,
                            p = t.status,
                            d = t.title;
                        return u = u || (0, a.format)((0, a.utcToZonedTime)(new Date(c), e), o.T_), p = p || function(e, t) {
                            var n = (0, s.zW)(t, e),
                                r = n.currentDateTime,
                                i = n.startDateTime,
                                o = n.endDateTime;
                            return r < i ? r.setHours(0, 0, 0, 0) === i.setHours(0, 0, 0, 0) ? "Today" : (0, a.format)(i, "EEE LLL dd") : r >= i && r <= o ? "On now" : ""
                        }(e, t), {
                            status: p,
                            url: r,
                            title: d = d || n,
                            startTime: u,
                            nb: i,
                            uuid: l
                        }
                    }
                }
        },
        67558: (e, t, n) => {
            "use strict";
            n.d(t, {
                G3: () => o,
                gZ: () => s,
                y4: () => c,
                zW: () => a
            });
            n(2041), n(95566), n(2612), n(9867), n(7231);
            var r = n(69626),
                i = n(20694),
                a = function(e, t) {
                    var n = e.stt,
                        i = e.end;
                    return {
                        currentDateTime: (0, r.utcToZonedTime)(new Date, t),
                        startDateTime: (0, r.utcToZonedTime)(new Date(n), t),
                        endDateTime: (0, r.utcToZonedTime)(new Date(i), t)
                    }
                },
                o = function(e) {
                    return function(t) {
                        var n = a(t, e),
                            r = n.currentDateTime,
                            i = n.startDateTime,
                            o = n.endDateTime;
                        return r < i || r >= i && r <= o
                    }
                },
                s = function e(t) {
                    if (Array.isArray(t)) return t.reduce((function(t, n) {
                        return n && n.startsWith("--") ? t.concat(e(n)) : i.OE[n] ? t.concat(n) : t
                    }), []);
                    var n = i.QJ.indexOf(t) + 1;
                    if (0 !== n) {
                        var r = i.QJ.slice(n),
                            a = /^--/,
                            o = r.findIndex((function(e) {
                                return a.test(e)
                            }));
                        return -1 === o ? r : r.slice(0, o)
                    }
                    return []
                },
                c = function(e) {
                    return function(e) {
                        return Object.keys(s(e).reduce((function(e, t) {
                            return t && i.OE[t] && (e[i.OE[t]] = !0), e
                        }), {}))
                    }(e).map((function(e) {
                        return {
                            mainKey: e
                        }
                    }))
                }
        },
        11482: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a,
                O: () => i
            });
            var r = n(56552),
                i = function(e) {
                    return e ? (0, r.jsx)("img", {
                        className: "trackingPixel",
                        src: e,
                        alt: "",
                        height: "1px",
                        width: "1px",
                        style: {
                            position: "absolute"
                        }
                    }) : null
                },
                a = function(e) {
                    return "sclt-".concat(e.replace(/-/gi, ""))
                }
        },
        82077: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => a,
                a: () => o
            });
            var r = n(43386),
                i = "https://ups.data.cbc.ca/v0",
                a = function(e, t) {
                    return e ? t ? (0, r.requestJSON)("".concat(i, "/UIEUser/").concat(e, "/UPSPreferences/").concat(t), {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }) : Promise.reject("invalid bundle id - ".concat(t)) : Promise.reject("invalid user id - ".concat(e))
                },
                o = function(e, t, n) {
                    return e ? t ? (0, r.request)("".concat(i, "/UIEUser/").concat(e, "/UPSPreferences/").concat(t), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(n)
                    }) : Promise.reject("invalid bundle id - ".concat(t)) : Promise.reject("invalid user id - ".concat(e))
                }
        },
        99827: (e, t, n) => {
            "use strict";
            n.d(t, {
                hs: () => z,
                M4: () => F,
                nP: () => q,
                Ix: () => V
            });
            var r = n(4942),
                i = (n(9867), n(7231), n(83464), n(95566), n(19496), n(58109), n(68438), n(68988)),
                a = n(84051),
                o = n(68565),
                s = n(80210),
                c = n(16537),
                l = n(58670),
                u = n(23257),
                p = n(57241),
                d = n(97767),
                f = n(63751),
                m = n(92972),
                g = n.n(m),
                h = n(14507),
                v = n.n(h),
                b = n(39070),
                y = n(26574),
                w = n(56552),
                j = function(e) {
                    var t = e.url,
                        n = void 0 === t ? "" : t,
                        r = e.imageURL,
                        i = void 0 === r ? "" : r,
                        a = e.imageAlt,
                        o = void 0 === a ? "" : a,
                        s = e.descriptionId,
                        c = void 0 === s ? "" : s,
                        l = e.external,
                        u = void 0 === l || l,
                        p = e.description,
                        d = void 0 === p ? "" : p,
                        f = e.callToActionText,
                        m = void 0 === f ? "" : f,
                        g = v()("imageButtonWidget", [c]),
                        h = d ? v()("buttonImage", "imgWithDescription") : "buttonImage";
                    return (0, w.jsxs)("div", {
                        className: g,
                        children: [(0, w.jsx)("h3", {
                            children: (0, w.jsx)("img", {
                                className: h,
                                src: i,
                                alt: o,
                                loading: "lazy"
                            })
                        }), function(e, t) {
                            return e && t && (0, w.jsx)(b.Z, {
                                id: t,
                                text: e
                            })
                        }(d, c), (0, w.jsx)(y.default, {
                            url: n,
                            external: u,
                            children: m
                        })]
                    })
                };
            j.propTypes = {
                url: g().string,
                imageURL: g().string,
                imageAlt: g().string,
                descriptionId: g().string,
                external: g().bool
            };
            const O = j;

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
            const S = function(e) {
                return (0, w.jsx)(f.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? k(Object(n), !0).forEach((function(t) {
                            (0, r.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, e))
            };
            var P = n(94924),
                x = n(94481),
                I = n(57633),
                D = n(86497),
                C = n(18587),
                _ = n(50439),
                L = n(73766),
                A = n(44192),
                E = n(76030),
                T = n(96628),
                Z = n(41718),
                N = n(90955),
                M = n(61851),
                R = n(84819);

            function B(e, t) {
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
                    t % 2 ? B(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var q = function(e) {
                    return l.ay[e] || []
                },
                F = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((function(e) {
                        return l.Wn[e]
                    }))
                },
                z = function(e) {
                    var t = e.path,
                        n = e.rightrail,
                        r = e.viewport,
                        d = e.baseSection,
                        m = e.sectionalContent,
                        g = e.contentId;
                    if (void 0 !== t) {
                        var h = [],
                            v = q(t);
                        if (n && t === n.path && n.widgets && n.widgets.length > 0 && n.widgets.forEach((function(e, n) {
                                var a, o, c, l, u;
                                switch (e.type) {
                                    case N.XS:
                                        h.push((0, w.jsx)(A.default, {
                                            children: (0, w.jsx)(x.Z, {
                                                title: null === (a = e.wrapper) || void 0 === a || null === (a = a.heading) || void 0 === a ? void 0 : a.title,
                                                hideTitle: !(null !== (o = e.wrapper) && void 0 !== o && null !== (o = o.heading) && void 0 !== o && o.visible),
                                                items: e.content,
                                                featureInstance: null === (c = e.wrapper) || void 0 === c || null === (c = c.attribution) || void 0 === c ? void 0 : c.featureInstance
                                            })
                                        }, "".concat(n, "-").concat(e.type)));
                                        break;
                                    case N.OO:
                                        h.push((0, w.jsx)(A.default, {
                                            children: (0, w.jsx)(i.Z, {
                                                sponsorContent: e,
                                                rightRail: !0
                                            })
                                        }, "".concat(n, "-").concat(e.type)));
                                        break;
                                    case N.bJ:
                                        h.push((0, w.jsx)(_.Z, {
                                            type: e.adType,
                                            targeting: {
                                                plc: "feed"
                                            },
                                            lazy: "viewportSmall" === r && "homepage" === t
                                        }, "".concat(n, "-").concat(e.type)));
                                        break;
                                    case N.gW:
                                        h.push((0, w.jsx)(A.default, {
                                            children: (0, w.jsx)(T.Z, {
                                                text: e.title,
                                                description: null !== (l = e.description) && void 0 !== l ? l : "",
                                                linkText: null !== (u = e.linkText) && void 0 !== u ? u : "",
                                                linkUrl: e.linkUrl,
                                                external: /^(http).*/.test(e.linkUrl),
                                                flexPage: !1,
                                                titleVisible: e.titleVisible,
                                                image: e.image,
                                                variant: R.uv
                                            })
                                        }, "".concat(n, "-").concat(e.type)));
                                        break;
                                    case N.DR:
                                        h.push((0, w.jsx)(A.default, {
                                            children: (0, w.jsx)(C.A, {
                                                params: {
                                                    displayFilter: e.displayFilter
                                                }
                                            })
                                        }, "".concat(n, "-").concat(e.type)));
                                        break;
                                    case N._m:
                                        h.push((0, w.jsx)(A.default, {
                                            children: (0, w.jsx)(I.Z, {
                                                promotenewsletter: e.newsletter
                                            })
                                        }, "".concat(n, "-").concat(e.type)));
                                        break;
                                    case N.IK:
                                        h.push((0, w.jsx)(A.default, {
                                            children: (0, w.jsx)(L.Z, {
                                                html: e.htmlContent,
                                                targetParent: !0
                                            })
                                        }, "".concat(n, "-").concat(e.type)));
                                        break;
                                    case N.se:
                                        h.push((0, w.jsx)(A.default, {
                                            children: (0, w.jsx)(D.Z, {
                                                params: e
                                            })
                                        }, "".concat(n, "-").concat(e.type)));
                                        break;
                                    case N._h:
                                        h.push((0, w.jsx)(A.default, {
                                            children: (0, w.jsx)(E.Z, {})
                                        }, "".concat(n, "-").concat(e.type)));
                                        break;
                                    case N.Ne:
                                        var p;
                                        try {
                                            var d;
                                            p = JSON.parse((null === (d = e.broadcastschedule) || void 0 === d ? void 0 : d.options) || "{}")
                                        } catch (m) {
                                            Z.default.error("(getSidebarWidgets) TYPE_BROADCAST_SCHEDULE", m), p = {}
                                        }
                                        var f = U({
                                            type: "sports",
                                            scheduleConfig: p
                                        }, e.title ? {
                                            headline: e.title
                                        } : {});
                                        h.push((0, w.jsx)(A.default, {
                                            children: (0, w.jsx)("div", {
                                                className: "scheduleWrapper",
                                                children: (0, w.jsx)(s.Z, U({}, f))
                                            })
                                        }, "".concat(n, "-").concat(e.type)))
                                }
                            })), void 0 !== v) {
                            var b = d,
                                y = l.Wn,
                                j = Object.assign({}, {
                                    series: {
                                        series: u.u
                                    }
                                });
                            v.forEach((function(e, t) {
                                var n = (0, p.ef)(j.series, e),
                                    r = y[e],
                                    i = j && j.series && j.series.series && j.series.series[b] ? j.series.series[b] : null;
                                if (r && "imageLink" === r.type) h.push((0, w.jsx)(A.default, {
                                    children: (0, w.jsx)(f.Z, U({}, r))
                                }, t));
                                else if (r && "imageButton" === r.type) h.push((0, w.jsx)(A.default, {
                                    children: (0, w.jsx)(O, U({}, r))
                                }, t));
                                else if (r && "secureDrop" === r.type) h.push((0, w.jsx)(A.default, {
                                    children: (0, w.jsx)(S, U({}, r))
                                }, t));
                                else if (!r || "business" !== r.type && "form" !== r.type) {
                                    if (r && "region" === r.type) h.push((0, w.jsx)(A.default, {
                                        children: (0, w.jsx)(c.Z, {
                                            isSwimlane: !1
                                        })
                                    }, "regionWidget".concat(t)));
                                    else if (r && "schedule" === r.type) h.push((0, w.jsx)(A.default, {
                                        children: (0, w.jsx)(s.Z, {
                                            type: "sports",
                                            scheduleConfig: r
                                        })
                                    }, "sportsSchedule"));
                                    else if (n) i.length && h.push((0, w.jsx)(A.default, {
                                        children: (0, w.jsx)(a.Z, {
                                            items: i,
                                            baseSection: b
                                        })
                                    }, "".concat(b, "ShowsList")));
                                    else if ("trending" === e) h.push((0, w.jsx)(A.default, {
                                        children: (0, w.jsx)(P.VM, {
                                            section: b,
                                            hideSectionLabel: !0,
                                            displayType: M.a.TYPE_LIST_ORDERED
                                        })
                                    }, "".concat(b, "-TrendingListSidebar")));
                                    else if (r && "contentlist" === r.type) {
                                        var u = r.path ? r.path : "",
                                            d = m && m[u] ? m[u].sectionList : null,
                                            v = {
                                                title: r.title,
                                                items: d,
                                                displayPolicy: r.displayPolicy
                                            };
                                        h.push((0, w.jsx)(A.default, {
                                            children: (0, w.jsx)(x.Z, U({}, v))
                                        }, "".concat(g, "-ContentList")))
                                    }
                                } else {
                                    var k = new RegExp("^(http|https)://", "i").test(r.src),
                                        I = r.src;
                                    k || (I = l.$S + r.src), h.push((0, w.jsx)(A.default, {
                                        children: (0, w.jsx)(o.Z, {
                                            src: I,
                                            name: r.name,
                                            height: r.height,
                                            trackingSrc: r.trackingSrc
                                        })
                                    }, "businesswidget".concat(t)))
                                }
                            }))
                        }
                        return h
                    }
                },
                V = function(e) {
                    var t = e.baseSection,
                        n = e.pageType,
                        r = e.path;
                    return !!("show" === n && r && l.ay[r] && l.ay[r].includes("trending")) || !!(t && d.SA[t] && d.SA[t].enableTrendingSideBar)
                }
        },
        28794: (e, t, n) => {
            var r = {
                "./ad-ui-overlay_3.entry.js": [82511, 1889],
                "./buffer-bar_10.entry.js": [20681, 1889],
                "./captions-btn_16.entry.js": [65463, 1889],
                "./custom-toggle.entry.js": [57895, 1889],
                "./options-menu-back-btn.entry.js": [39809, 1889],
                "./phoenix-player.entry.js": [39572, 1889],
                "./relative-date-time.entry.js": [59321, 1889],
                "./skip-back-btn_2.entry.js": [18146, 1889]
            };

            function i(e) {
                if (!n.o(r, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = r[e],
                    i = t[0];
                return n.e(t[1]).then((() => n(i)))
            }
            i.keys = () => Object.keys(r), i.id = 28794, e.exports = i
        },
        24654: () => {}
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-3616.43f67f7a951a2a089b13.js.map