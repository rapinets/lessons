! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "21e1166d-08c6-4110-b149-8a11f45097fe", e._sentryDebugIdIdentifier = "sentry-dbid-21e1166d-08c6-4110-b149-8a11f45097fe")
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
    [6163], {
        10137: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var a = n(21398),
                i = n(26574),
                l = n(56552);
            const s = function(e) {
                var t = e.item;
                return e.isExternal ? (0, l.jsx)(i.default, {
                    className: "privacyPreferences",
                    url: t.link,
                    external: !0,
                    target: "_blank",
                    children: t.title
                }) : (0, l.jsx)("button", {
                    type: "button",
                    className: "privacyPreferences",
                    onClick: a.cU,
                    children: t.title
                })
            }
        },
        96163: (e, t, n) => {
            n.d(t, {
                Z: () => j
            });
            var a = n(93433),
                i = (n(9867), n(7231), n(58109), n(95566), n(68438), n(35098)),
                l = n(92972),
                s = n.n(l),
                r = n(85161),
                o = n(14507),
                c = n.n(o),
                p = (n(83464), n(19496), n(4942)),
                d = n(29242),
                y = [{
                    link: "/news",
                    title: "News",
                    type: "internal"
                }, {
                    link: "/sports",
                    title: "Sports",
                    type: "internal"
                }, {
                    link: "/radio",
                    title: "Radio",
                    type: "internal"
                }, {
                    link: "/music",
                    title: "Music",
                    type: "internal"
                }, {
                    link: "//www.cbc.ca/listen/live-radio",
                    title: "Listen Live",
                    type: "external"
                }, {
                    link: "/television",
                    title: "TV",
                    type: "internal"
                }, {
                    link: "//gem.cbc.ca",
                    title: "Watch",
                    type: "external"
                }],
                u = n(56552);

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, p.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e) {
                var t = e.items,
                    n = void 0 === t ? y : t,
                    a = e.path;
                if (!n) return null;
                var i = {
                    items: n,
                    path: void 0 === a ? "" : a,
                    className: "menuSidebarSubNav"
                };
                return (0, u.jsxs)("div", {
                    className: "menuSidebar sclt-menuQuickLinks",
                    children: [(0, u.jsx)("h5", {
                        className: "menuSidebarHeading",
                        children: "Quick Links"
                    }), (0, u.jsx)(d.Z, k({}, i))]
                })
            }
            f.propTypes = {
                items: s().array,
                path: s().string
            };
            const b = f;
            var g = n(57944),
                v = n(26574),
                w = n(88101),
                h = [{
                    link: "/",
                    title: "CBC.ca HOME",
                    type: "internal",
                    subsection: "main"
                }, {
                    link: "",
                    title: "Discover CBC",
                    type: "internal",
                    subsection: "topics"
                }, {
                    link: "/news/local",
                    title: "All Locals",
                    type: "internal",
                    subsection: "allregions"
                }, {
                    link: "",
                    title: "My Local Settings",
                    type: "internal",
                    subsection: "regional"
                }, {
                    link: "/news",
                    title: "News",
                    type: "internal",
                    subsection: "news"
                }, {
                    link: "/sports",
                    title: "Sports",
                    type: "internal",
                    subsection: "sports"
                }, {
                    link: "/radio",
                    title: "Radio",
                    type: "internal",
                    subsection: "radio"
                }, {
                    link: "/music",
                    title: "Music",
                    type: "internal",
                    subsection: "music"
                }, {
                    link: "/television",
                    title: "TV",
                    type: "internal",
                    subsection: "tv"
                }, {
                    link: "",
                    title: "More",
                    type: "external",
                    subsection: "more"
                }],
                x = n(52473),
                C = n(88495),
                O = n(63578),
                S = function(e) {
                    var t = e.menuOpen,
                        n = void 0 !== t && t,
                        l = e.path,
                        s = void 0 === l ? "" : l,
                        o = (0, i.useMemo)((function() {
                            return h.map((function(e, t) {
                                var n = e.title,
                                    i = e.subsection,
                                    l = "regional" === i,
                                    o = x.O0[i],
                                    p = e.link ? (0, u.jsxs)(v.default, {
                                        className: "navLink sectionLink",
                                        url: e.link,
                                        external: "external" === e.type,
                                        children: [n, (0, u.jsx)(r.default, {
                                            type: "chevron",
                                            className: "horizontal"
                                        })]
                                    }, t) : (0, u.jsxs)("span", {
                                        className: "navSection",
                                        children: [l ? (0, u.jsx)(r.default, {
                                            type: "settings"
                                        }) : null, " ", n]
                                    }, t),
                                    y = "allregions" === i ? O.nv.filter((function(e) {
                                        return !e.hideInNav
                                    })) : (0, a.Z)(o);
                                return (0, u.jsxs)("li", {
                                    className: c()((0, w.C_)("nav", n), {
                                        mainMenuItem: !0,
                                        hasSubsection: !0,
                                        hasRegions: l
                                    }),
                                    children: [p, l ? (0, u.jsx)(g.Z, {
                                        placement: C.r4.MEGAMENU
                                    }) : (0, u.jsx)(d.Z, {
                                        path: s,
                                        items: y
                                    })]
                                }, "sub".concat(i).concat(t))
                            }))
                        }), [s]);
                    return (0, u.jsxs)("nav", {
                        className: c()("menuNav", "sclt-menunav", {
                            open: n
                        }),
                        "aria-label": "CBC Main",
                        id: "mainMenuNav",
                        "data-cy": "mainMenuNav",
                        tabIndex: "-1",
                        children: [(0, u.jsx)(b, {
                            path: s
                        }), (0, u.jsx)("ul", {
                            className: "menuList mainMenu",
                            children: n && o
                        })]
                    })
                };
            S.propTypes = {
                path: s().string,
                menuOpen: s().bool
            };
            const j = S
        },
        29242: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var a = n(4942),
                i = (n(9867), n(7231), n(58109), n(95566), n(68438), n(83464), n(19496), n(10947)),
                l = n(14507),
                s = n.n(l),
                r = n(21398),
                o = n(10137),
                c = n(56552);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            const d = function(e) {
                var t = e.items,
                    n = e.path,
                    l = e.className,
                    d = s()("subNavList", l),
                    y = t.map((function(e, t) {
                        if ((0, r.hv)(e.type)) return (0, c.jsx)("li", {
                            className: "subNavListItem",
                            children: (0, c.jsx)(o.Z, {
                                item: e,
                                isExternal: !1
                            })
                        }, "li-".concat(e.title, "-").concat(t));
                        var l = {
                            item: e,
                            index: "subnavLink-".concat(t),
                            path: n,
                            className: "subNavListItem",
                            linkClassName: "subNavLink"
                        };
                        return (0, c.jsx)(i.Z, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? p(Object(n), !0).forEach((function(t) {
                                    (0, a.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, l), "subnav-".concat(t))
                    }));
                return (0, c.jsx)("ul", {
                    className: d,
                    children: y
                })
            }
        },
        52473: (e, t, n) => {
            n.d(t, {
                O0: () => i,
                R7: () => s,
                mQ: () => c,
                s5: () => o,
                tp: () => r
            });
            var a = n(83828),
                i = {
                    2017: [{
                        link: "/2017/canada-let-s-push-for-more-than-just-polite-in-2017-1.3882532",
                        type: "internal",
                        title: "About Canada 2017"
                    }, {
                        link: "/2017/how-to-watch-and-listen-to-canada-day-150-on-cbc-1.4153891",
                        type: "external",
                        title: "Canada Day"
                    }, {
                        link: "/2017/whatsyourstory",
                        type: "internal",
                        title: "What's Your Story"
                    }, {
                        link: "/2017/shows",
                        type: "internal",
                        title: "Shows"
                    }, {
                        link: "https://2017guide.cbc.ca",
                        type: "external",
                        title: "Programming Guide"
                    }, {
                        link: "https://ici.radio-canada.ca/2017",
                        type: "external",
                        title: "Radio-Canada 2017"
                    }],
                    main: [],
                    cape: [{
                        link: "/cape/cbc-abilicrew-placements-for-excellence-program-1.5151448",
                        title: "About",
                        type: "internal"
                    }],
                    news: [{
                        link: "/news",
                        title: "Top Stories",
                        type: "internal"
                    }, {
                        link: "/news/local",
                        title: "Local",
                        type: "internal"
                    }, {
                        link: "/news/climate",
                        title: "Climate",
                        type: "internal"
                    }, {
                        link: "/news/world",
                        title: "World",
                        type: "internal"
                    }, {
                        link: "/news/canada",
                        title: "Canada",
                        type: "internal"
                    }, {
                        link: "/news/politics",
                        title: "Politics",
                        type: "internal"
                    }, {
                        link: "/news/indigenous",
                        title: "Indigenous",
                        type: "internal"
                    }, {
                        link: "/news/business",
                        title: "Business",
                        type: "internal"
                    }, {
                        link: "/news/thenational",
                        title: "The National",
                        type: "internal"
                    }, {
                        link: "/news/health",
                        title: "Health",
                        type: "internal"
                    }, {
                        link: "/news/entertainment",
                        title: "Entertainment",
                        type: "internal"
                    }, {
                        link: "/news/science",
                        title: "Science",
                        type: "internal"
                    }, {
                        link: "/news/investigates",
                        title: "CBC News Investigates",
                        type: "internal"
                    }, {
                        link: "/news/gopublic",
                        title: "Go Public",
                        type: "internal"
                    }, {
                        link: "/news/about-cbc-news-1.1294364",
                        title: "About CBC News",
                        type: "internal"
                    }, {
                        link: "/news/canada/beingblackincanada",
                        title: "Being Black in Canada",
                        type: "internal"
                    }],
                    arts: [{
                        link: "/arts/about-cbc-arts-1.3062163",
                        title: "About CBC Arts",
                        type: "internal"
                    }, {
                        link: "/arts/shows",
                        title: "Shows",
                        type: "internal"
                    }, {
                        link: "/player/arts",
                        title: "Video",
                        type: "internal"
                    }, {
                        link: "/arts/read",
                        title: "Articles",
                        type: "internal"
                    }],
                    archives: [{
                        link: "/archives/arts",
                        title: "Arts & Entertainment",
                        type: "internal"
                    }, {
                        link: "/archives/history",
                        title: "History",
                        type: "internal"
                    }, {
                        link: "/archives/sports",
                        title: "Sports",
                        type: "internal"
                    }],
                    sports: [{
                        link: "/sports",
                        title: "Top Stories",
                        type: "internal"
                    }, {
                        link: "/sports/hockey/pwhl",
                        title: "PWHL",
                        type: "internal"
                    }, {
                        link: "/sports/hockey",
                        title: "Hockey",
                        type: "internal"
                    }, {
                        link: "/sports/olympics",
                        title: "Olympics",
                        type: "internal"
                    }, {
                        link: "/player/sports",
                        title: "Video",
                        type: "internal"
                    }, {
                        link: "/sports/shows",
                        title: "Shows",
                        type: "internal"
                    }, {
                        link: "/sports/podcasts",
                        title: "Podcasts",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/sports/longform/features",
                        title: "Features",
                        type: "external"
                    }, {
                        link: "/sports/all",
                        title: "All Sports",
                        type: "internal"
                    }],
                    music: [{
                        link: "/music",
                        title: "Read",
                        type: "internal"
                    }, {
                        link: "/music/watch",
                        title: "Watch",
                        type: "internal"
                    }, {
                        link: "/music/events",
                        title: "Events",
                        type: "internal"
                    }, {
                        link: "/music/explore",
                        title: "Explore",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/listen/live-radio",
                        title: "Listen Live",
                        type: "external"
                    }, {
                        link: "/music/junos",
                        title: "Junos",
                        type: "internal"
                    }],
                    radio: [{
                        link: "/radio",
                        type: "internal",
                        title: "Top Stories"
                    }, {
                        link: "/radio/shows",
                        type: "internal",
                        title: "Shows"
                    }, {
                        link: "/radio/podcasts",
                        type: "internal",
                        title: "Podcasts"
                    }, {
                        link: "https://www.cbc.ca/programguide/daily/today/cbc_radio_one",
                        type: "external",
                        title: "Schedules"
                    }, {
                        link: "/radio/frequency",
                        type: "internal",
                        title: "Frequency"
                    }, {
                        link: "https://www.cbc.ca/listen/live-radio",
                        type: "external",
                        title: "Listen Live"
                    }],
                    tv: [{
                        link: "https://www.cbc.ca/programguide/daily/today/cbc_television",
                        type: "external",
                        title: "Schedule"
                    }, {
                        link: "https://gem.cbc.ca",
                        type: "external",
                        title: "CBC Gem"
                    }, {
                        link: "https://www.cbcshop.ca/",
                        type: "external",
                        title: "Shop"
                    }],
                    life: [{
                        link: "/life/food",
                        type: "internal",
                        title: "Food"
                    }, {
                        link: "/life/style",
                        type: "internal",
                        title: "Style"
                    }, {
                        link: "/life/home",
                        type: "internal",
                        title: "Home"
                    }, {
                        link: "/life/wellness",
                        type: "internal",
                        title: "Wellness"
                    }, {
                        link: "/life/culture",
                        type: "internal",
                        title: "Culture"
                    }, {
                        link: "/life/work-money",
                        type: "internal",
                        title: "Work & Money"
                    }, {
                        link: "/life/pets",
                        type: "internal",
                        title: "Pets"
                    }, {
                        link: "/life/travel",
                        type: "internal",
                        title: "Travel"
                    }, {
                        link: "/life/games",
                        type: "internal",
                        title: "Games"
                    }, {
                        link: "/player/life",
                        type: "internal",
                        title: "Video"
                    }, {
                        link: "/life/giveaways",
                        type: "internal",
                        title: "Giveaways & Submissions"
                    }, {
                        link: "/life/shows",
                        type: "internal",
                        title: "Shows"
                    }],
                    regional: [],
                    comedy: [{
                        link: "https://gem.cbc.ca/category/shows?filter=comedy&cmp=DM_CM_ComedyNav",
                        type: "external",
                        title: "Watch on CBC Gem"
                    }],
                    books: [{
                        link: "/books/literaryprizes",
                        type: "internal",
                        title: "CBC Literary Prizes"
                    }, {
                        link: "/books/canadareads",
                        type: "internal",
                        title: "Canada Reads"
                    }, {
                        link: "/books/canadawrites",
                        type: "internal",
                        title: "Canada Writes"
                    }, {
                        link: "/books/readinglists",
                        type: "internal",
                        title: "Reading Lists"
                    }, {
                        link: "/books/bookends",
                        type: "internal",
                        title: "Bookends"
                    }, {
                        link: "/books/contact-us-1.4083096",
                        type: "internal",
                        title: "Contact Us"
                    }, {
                        link: "/books/gillerprize",
                        type: "internal",
                        title: "Scotiabank Giller Prize",
                        hidden: !0
                    }, {
                        link: "/books/kids",
                        type: "internal",
                        title: "",
                        hidden: !0
                    }, {
                        link: "/books/ggbooks",
                        type: "internal",
                        title: "Governor General's Literary Awards",
                        hidden: !0
                    }],
                    documentaries: [{
                        link: "/documentaries/the-nature-of-things",
                        type: "internal",
                        title: "The Nature of Things"
                    }, {
                        link: "/documentaries/the-passionate-eye",
                        type: "internal",
                        title: "The Passionate Eye"
                    }, {
                        link: "/documentaries/blacklife",
                        type: "internal",
                        title: "Black Life"
                    }, {
                        link: "/documentaries/short-docs",
                        type: "internal",
                        title: "Short Docs"
                    }, {
                        link: "/documentaries/documentary-channel",
                        type: "internal",
                        title: "documentary Channel"
                    }],
                    topics: [{
                        link: "https://gem.cbc.ca/",
                        type: "external",
                        title: "CBC Gem"
                    }, {
                        link: "https://www.cbc.ca/listen/live-radio",
                        type: "external",
                        title: "CBC Listen"
                    }, {
                        link: "/comedy",
                        type: "internal",
                        title: "Comedy"
                    }, {
                        link: "/arts",
                        type: "internal",
                        title: "Arts"
                    }, {
                        link: "/books",
                        type: "internal",
                        title: "Books"
                    }, {
                        link: "/documentaries",
                        type: "internal",
                        title: "Docs"
                    }, {
                        link: "/life",
                        type: "internal",
                        title: "Life"
                    }, {
                        link: "https://www.cbc.ca/kids",
                        type: "external",
                        title: "Kids"
                    }, {
                        link: "https://www.cbc.ca/kidsnews/",
                        type: "external",
                        title: "Kids News"
                    }, {
                        link: "/news/indigenous",
                        type: "internal",
                        title: "Indigenous"
                    }, {
                        link: "/archives",
                        type: "internal",
                        title: "Archives"
                    }, {
                        link: "/news/canada/beingblackincanada",
                        type: "internal",
                        title: "Being Black in Canada"
                    }, {
                        link: "https://ici.radio-canada.ca/rci/en",
                        type: "external",
                        title: "Radio Canada International"
                    }, {
                        link: "/life/games",
                        type: "internal",
                        title: "Games"
                    }],
                    "olympics-paralympics": [{
                        link: "/sports/paralympics",
                        type: "internal",
                        title: "Home",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/paralympics/streaming-schedule",
                        type: "internal",
                        title: "Schedule",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/paralympics/results",
                        type: "internal",
                        title: "Results",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/paralympics/medals",
                        type: "internal",
                        title: "Medals",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/paralympics/video",
                        type: "internal",
                        title: "Video",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/paralympics/features",
                        type: "internal",
                        title: "Features",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics",
                        type: "internal",
                        title: "Olympics",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }],
                    "olympics-summer": [{
                        link: "/sports/olympics",
                        type: "internal",
                        title: "Home",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/summer/myolympics",
                        type: "internal",
                        title: "My Feed",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/summer/streaming-schedule",
                        type: "internal",
                        title: "Schedule",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/summer/results-by-sport",
                        type: "internal",
                        title: "Results",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/summer/medals",
                        type: "internal",
                        title: "Medals",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/summer/sports",
                        type: "internal",
                        title: "Sports",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/paralympics",
                        type: "internal",
                        title: "Paralympics",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/summer/video",
                        type: "internal",
                        title: "Video",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/summer/team-canada",
                        type: "internal",
                        title: "Team Canada",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/summer/athletes",
                        type: "internal",
                        title: "Athletes",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }],
                    "olympics-winter": [{
                        link: "/sports/olympics",
                        type: "internal",
                        title: "Home",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/winter/video",
                        type: "internal",
                        title: "Video",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/winter/streaming-schedule",
                        type: "internal",
                        title: "Schedule & Results",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/winter/medals",
                        type: "internal",
                        title: "Medals",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/winter/sports",
                        type: "internal",
                        title: "Sports",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/paralympics",
                        type: "internal",
                        title: "Paralympics",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/winter/myolympics",
                        type: "internal",
                        title: "My Feed",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/winter/team-canada",
                        type: "internal",
                        title: "Team Canada",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }, {
                        link: "/sports/olympics/winter/athletes",
                        type: "internal",
                        title: "Athletes",
                        data: {
                            "data-feature-name": "navigation",
                            "data-feature-instance": "secondary-navigation"
                        }
                    }],
                    more: [{
                        link: "https://www.cbcshop.ca/",
                        type: "external",
                        title: "Shop"
                    }, {
                        link: "https://www.cbc.ca/sitemap/",
                        type: "external",
                        title: "Sitemap"
                    }, {
                        link: "https://cbchelp.cbc.ca/hc/en-us",
                        type: "external",
                        title: "Help"
                    }, {
                        link: "https://cbchelp.cbc.ca/",
                        type: "external",
                        title: "Contact"
                    }, {
                        link: "https://www.cbc.ca/contests/",
                        type: "external",
                        title: "Contests"
                    }, {
                        link: "https://www.cbc.ca/lite/trending-news",
                        type: "external",
                        title: "CBC Lite"
                    }, {
                        type: a.S,
                        title: a.v
                    }],
                    visualstories: [],
                    meta: []
                },
                l = [{
                    title: "Skiing",
                    link: "/sports/olympics/skiing",
                    type: "internal"
                }, {
                    title: "Alpine Skiing",
                    link: "/sports/olympics/winter/alpine-skiing",
                    type: "internal"
                }, {
                    title: "Freestyle Skiing",
                    link: "/sports/olympics/winter/freestyle-skiing",
                    type: "internal"
                }],
                s = {
                    "sports/podcasts": [{
                        title: "Podcasts",
                        link: "/sports/podcasts",
                        type: "internal"
                    }, {
                        title: "HNIC",
                        link: "/sports/podcasts/hnic",
                        type: "internal"
                    }, {
                        title: "Player's Own Voice",
                        link: "/sports/podcasts/players-own-voice",
                        type: "internal"
                    }],
                    "sports/olympics/skiing": l,
                    "sports/olympics/alpineskiing": l,
                    "sports/olympics/freestyleskiing": l,
                    "sports/video/paralympics": [{
                        title: "Home",
                        link: "/sports/paralympics",
                        type: "internal"
                    }, {
                        title: "Video",
                        link: "/sports/video/paralympics",
                        type: "internal"
                    }]
                },
                r = {
                    meta: "meta/style"
                },
                o = "meta/global/header",
                c = "account/"
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-6163.cbf217e83f68e23b0b60.js.map