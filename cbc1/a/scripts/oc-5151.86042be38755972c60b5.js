! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "79882779-825a-4a64-b6cd-befcfb5d7520", e._sentryDebugIdIdentifier = "sentry-dbid-79882779-825a-4a64-b6cd-befcfb5d7520")
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
    [5151, 4436], {
        29274: (e, a, t) => {
            "use strict";
            t.d(a, {
                J5: () => d,
                JI: () => m,
                L8: () => l,
                LK: () => i,
                M5: () => w,
                O9: () => r,
                _e: () => p,
                nJ: () => o,
                pj: () => c,
                uS: () => n,
                z0: () => s
            });
            var n = "homepage",
                i = 9,
                s = 1,
                o = 3,
                r = 15,
                c = 10,
                l = 25,
                d = 2,
                p = {
                    "news/covid-19/fact-check": "covid-19-fact-check",
                    "news/covid-19/economy-and-finance": "covid-19-economy",
                    "news/covid-19/stories-of-hope": "covid-19-good-news",
                    "news/covid-19/lives-remembered": "covid-19-lives-remembered",
                    "news/covid-19/international-news": "covid-19-international-news"
                },
                m = {
                    "arts/beingblackincanada": "collections:Being Black in Canada",
                    "books/beingblackincanada": "collections:Being Black in Canada",
                    "news/marketplace": "generic:CBC Marketplace",
                    "news/fifthestate": "generic:the fifth estate"
                },
                w = {
                    "dev/empty": "empty"
                }
        },
        63578: (e, a, t) => {
            "use strict";
            t.d(a, {
                CT: () => o,
                fu: () => l,
                hy: () => d,
                nv: () => r
            });
            t(58109), t(95566), t(68438), t(83464), t(19496);
            var n = t(4942);

            function i(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    a && (n = n.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function s(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? i(Object(t), !0).forEach((function(a) {
                        (0, n.Z)(e, a, t[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                    }))
                }
                return e
            }
            var o = 5,
                r = [{
                    id: 43,
                    preference: "bc",
                    title: "British Columbia",
                    link: "/news/canada/british-columbia",
                    path: "news/canada/british-columbia",
                    trendingSection: "britishcolumbia",
                    cookieName: "bc",
                    province: "British Columbia",
                    categorySlug: "british-columbia",
                    thumbnail: "https://i.cbc.ca/1.4211244!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Vancouver",
                    navigation: [{
                        link: "/news/canada/british-columbia",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/british-columbia/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/british-columbia/british-columbia-programs-1.4024048",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/british-columbia/contact-us-1.3982389",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "/news/gopublic",
                        title: "Go Public",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000141.html",
                        title: "Weather",
                        type: "external"
                    }, {
                        link: "/news/canada/british-columbia/local",
                        title: "B.C. Locals",
                        type: "internal"
                    }]
                }, {
                    id: 45,
                    preference: "calgary",
                    title: "Calgary",
                    link: "/news/canada/calgary",
                    path: "news/canada/calgary",
                    trendingSection: "calgary",
                    province: "Alberta",
                    categorySlug: "calgary",
                    thumbnail: "https://i.cbc.ca/1.4211426!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Calgary",
                    navigation: [{
                        link: "/news/canada/calgary",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/calgary/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/calgary/calgary-programs-1.4024212",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/calgary/cbc-calgary-contact-page-1.3847658",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000047.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 46,
                    preference: "edmonton",
                    title: "Edmonton",
                    link: "/news/canada/edmonton",
                    path: "news/canada/edmonton",
                    trendingSection: "edmonton",
                    province: "Alberta",
                    categorySlug: "edmonton",
                    thumbnail: "https://i.cbc.ca/1.4211440!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/edmonton.jpg",
                    liveRadioRegion: "Edmonton",
                    navigation: [{
                        link: "/news/canada/edmonton",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/player/news/canada/edmonton",
                        title: "Video",
                        type: "internal"
                    }, {
                        link: "/news/canada/edmonton/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0,
                        discoverContent: !0
                    }, {
                        link: "/news/canada/edmonton/edmonton-programs-1.4024299",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/edmonton/contact-cbc-edmonton-1.4020009",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "/learning-english",
                        title: "Learning English",
                        type: "internal"
                    }, {
                        link: "/player/news/canada/edmonton/our-edmonton",
                        title: "Our Edmonton",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000045.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 47,
                    preference: "sask",
                    title: "Saskatchewan",
                    link: "/news/canada/saskatchewan",
                    path: "news/canada/saskatchewan",
                    trendingSection: "saskatchewan",
                    cookieName: "sask",
                    province: "Saskatchewan",
                    categorySlug: "saskatchewan",
                    thumbnail: "https://i.cbc.ca/1.4211450!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Regina",
                    navigation: [{
                        link: "/news/canada/saskatchewan",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/saskatchewan/community/this-is-sk-1.7347397",
                        title: "This is Saskatchewan: Podcast",
                        type: "internal"
                    }, {
                        link: "/news/canada/saskatchewan/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/saskatchewan/saskatchewan-programs-1.4024364",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/player/news/canada/saskatchewan",
                        title: "Video",
                        type: "internal"
                    }, {
                        link: "/news/canada/saskatchewan/contact-cbc-saskatchewan-regina-saskatoon-1.3961906",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000788.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 48,
                    preference: "saskatoon",
                    title: "Saskatoon",
                    link: "/news/canada/saskatoon",
                    path: "news/canada/saskatoon",
                    trendingSection: "saskatoon",
                    province: "Saskatchewan",
                    categorySlug: "saskatoon",
                    thumbnail: "https://i.cbc.ca/1.4211457!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Saskatoon",
                    navigation: [{
                        link: "/news/canada/saskatoon",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/saskatchewan/community/this-is-sk-1.7347397",
                        title: "This is Saskatchewan: Podcast",
                        type: "internal"
                    }, {
                        link: "/news/canada/saskatoon/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/saskatoon/saskatoon-programs-1.4024416",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/player/news/canada/saskatoon",
                        title: "Video",
                        type: "internal"
                    }, {
                        link: "/news/canada/saskatoon/contact-cbc-saskatoon-1.3962520",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000797.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 49,
                    preference: "manitoba",
                    title: "Manitoba",
                    link: "/news/canada/manitoba",
                    path: "news/canada/manitoba",
                    trendingSection: "manitoba",
                    province: "Manitoba",
                    categorySlug: "manitoba",
                    thumbnail: "https://i.cbc.ca/1.4211460!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Winnipeg",
                    navigation: [{
                        link: "/news/canada/manitoba",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/manitoba/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/manitoba/manitoba-programs-1.4024431",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/player/news/canada/manitoba",
                        title: "Video",
                        type: "internal"
                    }, {
                        link: "/news/canada/manitoba/contact-us-information-manitoba-1.3930903",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000193.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 50,
                    preference: "thunderbay",
                    title: "Thunder Bay",
                    link: "/news/canada/thunder-bay",
                    path: "news/canada/thunder-bay",
                    trendingSection: "thunderbay",
                    province: "Ontario",
                    thumbnail: "https://i.cbc.ca/1.4211467!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    cookieName: "thunderbay",
                    categorySlug: "thunder-bay",
                    liveRadioRegion: "Thunder Bay",
                    navigation: [{
                        link: "/news/canada/thunder-bay",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/thunder-bay/thunder-bay-programs-1.4024474",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/thunder-bay/contacting-cbc-thunder-bay-1.4127705",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000411.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 51,
                    preference: "sudbury",
                    title: "Sudbury",
                    link: "/news/canada/sudbury",
                    path: "news/canada/sudbury",
                    trendingSection: "sudbury",
                    province: "Ontario",
                    categorySlug: "sudbury",
                    thumbnail: "https://i.cbc.ca/1.4211469!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Sudbury",
                    navigation: [{
                        link: "/news/canada/sudbury",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/sudbury/sudbury-programs-1.4024511",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/sudbury/sudbury-cbc-contact-us-1.3960113",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000680.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 52,
                    preference: "windsor",
                    title: "Windsor",
                    link: "/news/canada/windsor",
                    path: "news/canada/windsor",
                    trendingSection: "windsor",
                    province: "Ontario",
                    categorySlug: "windsor",
                    thumbnail: "https://i.cbc.ca/1.4211470!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Windsor",
                    navigation: [{
                        link: "/news/canada/windsor",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/listen/shows/windsor-morning",
                        title: "Windsor Morning",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/listen/shows/afternoon-drive",
                        title: "Afternoon Drive",
                        type: "external"
                    }, {
                        link: "/player/news/canada/windsor",
                        title: "CBC Windsor News At 6",
                        type: "internal"
                    }, {
                        link: "/news/canada/windsor/cbc-windsor-contact-us-1.4003398",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000646.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 100,
                    preference: "london",
                    title: "London",
                    link: "/news/canada/london",
                    path: "news/canada/london",
                    discover: "news/canada/london/southwestsounds",
                    trendingSection: "london",
                    cookieName: "london",
                    province: "Ontario",
                    categorySlug: "london",
                    thumbnail: "https://i.cbc.ca/1.4211473!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "London",
                    navigation: [{
                        link: "/news/canada/london",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/listen/shows/london-morning",
                        title: "London Morning",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/listen/shows/afternoon-drive",
                        title: "Afternoon Drive",
                        type: "external"
                    }, {
                        link: "/news/canada/london/cbc-london-contact-us-1.4151393",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000326.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 53,
                    preference: "kitchener-waterloo",
                    title: "Kitchener-Waterloo",
                    link: "/news/canada/kitchener-waterloo",
                    path: "news/canada/kitchener-waterloo",
                    trendingSection: "kitchenerwaterloo",
                    categorySlug: "kitchener-waterloo",
                    province: "Ontario",
                    thumbnail: "https://i.cbc.ca/1.4211474!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_460/image-.jpg",
                    liveRadioRegion: "Kitchener-Waterloo",
                    navigation: [{
                        link: "/news/canada/kitchener-waterloo",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/kitchener-waterloo/about-us-contact-cbc-kitchener-waterloo-891-fm-1.3960034",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "/news/canada/kitchener-waterloo/topic/Tag/Guelph%20News",
                        title: "Guelph News",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000573.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 54,
                    preference: "hamilton",
                    title: "Hamilton",
                    link: "/news/canada/hamilton",
                    path: "news/canada/hamilton",
                    trendingSection: "hamilton",
                    province: "Ontario",
                    categorySlug: "hamilton",
                    thumbnail: "https://i.cbc.ca/1.4211477!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Toronto",
                    navigation: [{
                        link: "/news/canada/hamilton",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/hamilton/contact-cbc-hamilton-1.3622559",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000549.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 55,
                    preference: "toronto",
                    title: "Toronto",
                    link: "/news/canada/toronto",
                    path: "news/canada/toronto",
                    trendingSection: "toronto",
                    province: "Ontario",
                    categorySlug: "toronto",
                    thumbnail: "https://i.cbc.ca/1.4211224!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Toronto",
                    navigation: [{
                        link: "/news/canada/toronto",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/toronto/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/toronto/toronto-programs-1.4024640",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/toronto/cbc-toronto-contact-us-1.3558446",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/listen/shows/metro-morning",
                        title: "Metro Morning",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000458.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 56,
                    preference: "ottawa",
                    title: "Ottawa",
                    link: "/news/canada/ottawa",
                    path: "news/canada/ottawa",
                    trendingSection: "ottawa",
                    province: "Ontario",
                    categorySlug: "ottawa",
                    thumbnail: "https://i.cbc.ca/1.4211479!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Ottawa",
                    navigation: [{
                        link: "/news/canada/ottawa",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/ottawa/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/ottawa/ottawa-programs-1.4024706",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/ottawa/cbc-ottawa-contact-us-1.3982028",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000430.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 57,
                    preference: "montreal",
                    title: "Montreal",
                    link: "/news/canada/montreal",
                    path: "news/canada/montreal",
                    trendingSection: "montreal",
                    province: "Qu\xe9bec",
                    categorySlug: "montreal",
                    thumbnail: "https://i.cbc.ca/1.4211486!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Montreal",
                    navigation: [{
                        link: "/news/canada/montreal",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/montreal/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/montreal/montreal-programs-1.4024745",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/montreal/cbc-montreal-contact-list-story-ideas-tips-1.3368463",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000635.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 58,
                    preference: "nb",
                    title: "New Brunswick",
                    link: "/news/canada/new-brunswick",
                    path: "news/canada/new-brunswick",
                    trendingSection: "newbrunswick",
                    province: "New Brunswick",
                    categorySlug: "new-brunswick",
                    thumbnail: "https://i.cbc.ca/1.4211490!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    cookieName: "nb",
                    liveRadioRegion: "Fredericton",
                    navigation: [{
                        link: "/news/canada/new-brunswick",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/new-brunswick/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/new-brunswick/new-brunswick-programs-1.4024808",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/new-brunswick/cbc-new-brunswick-contact-us-1.4008641",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000250.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 59,
                    preference: "pei",
                    title: "Prince Edward Island",
                    shortTitle: "PEI",
                    link: "/news/canada/prince-edward-island",
                    path: "news/canada/prince-edward-island",
                    trendingSection: "pei",
                    categorySlug: "pei",
                    province: "Prince Edward Island",
                    thumbnail: "https://i.cbc.ca/1.4211491!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    cookieName: "pei",
                    liveRadioRegion: "Charlottetown",
                    navigation: [{
                        link: "/news/canada/prince-edward-island",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/prince-edward-island/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/prince-edward-island/prince-edward-island-programs-1.4024869",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/prince-edward-island/cbc-pei-contact-us-1.3970879",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000583.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 60,
                    preference: "ns",
                    title: "Nova Scotia",
                    link: "/news/canada/nova-scotia",
                    path: "news/canada/nova-scotia",
                    trendingSection: "novascotia",
                    cookieName: "ns",
                    categorySlug: "nova-scotia",
                    province: "Nova Scotia",
                    thumbnail: "https://i.cbc.ca/1.4211498!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Halifax",
                    navigation: [{
                        link: "/news/canada/nova-scotia",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/nova-scotia/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/nova-scotia/nova-scotia-programs-1.4024900",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/nova-scotia/cbc-nova-scotia-contact-us-1.3983812",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000318.html",
                        title: "Weather",
                        type: "external"
                    }, {
                        link: "/news/canada/nova-scotia/ryan-snoddon-live-blog-weather-1.3532467",
                        title: "Ryan Snoddon",
                        type: "internal"
                    }]
                }, {
                    id: 61,
                    preference: "nl",
                    title: "Newfoundland & Labrador",
                    shortTitle: "NL",
                    link: "/news/canada/newfoundland-labrador",
                    path: "news/canada/newfoundland-labrador",
                    trendingSection: "newfoundland",
                    cookieName: "nl",
                    province: "Newfoundland & Labrador",
                    categorySlug: "nl",
                    thumbnail: "https://i.cbc.ca/1.4211503!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "St. John's",
                    navigation: [{
                        link: "/news/canada/newfoundland-labrador",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/newfoundland-labrador/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/newfoundland-labrador/newfoundland-labrador-programs-1.4024957",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "/news/canada/newfoundland-labrador/contact-us-cbcnl-1.3990861",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000280.html",
                        title: "Weather",
                        type: "external"
                    }]
                }, {
                    id: 62,
                    preference: "north",
                    title: "North",
                    link: "/news/canada/north",
                    path: "news/canada/north",
                    trendingSection: "north",
                    province: "North",
                    categorySlug: "north",
                    thumbnail: "https://i.cbc.ca/1.4211508!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/image-.jpg",
                    liveRadioRegion: "Whitehorse",
                    navigation: [{
                        link: "/news/canada/north",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/north/topic/Location/Yukon",
                        title: "Yukon",
                        type: "internal"
                    }, {
                        link: "/news/canada/north/topic/Location/Northwest%20Territories",
                        title: "Northwest Territories",
                        type: "internal"
                    }, {
                        link: "/news/canada/north/topic/Location/Nunavut",
                        title: "Nunavut",
                        type: "internal"
                    }, {
                        link: "/news/canada/north/topic/Location/Northern%20Quebec",
                        title: "Northern Quebec",
                        type: "internal"
                    }, {
                        link: "/news/canada/north/cbc-north-contact-us-1.3982681",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "/news/canada/north/community",
                        title: "Community",
                        type: "internal",
                        isCommunity: !0
                    }, {
                        link: "/news/canada/north/north-programs-1.4025022",
                        title: "Programs",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000275.html",
                        title: "Dawson City Weather",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000825.html",
                        title: "Whitehorse Weather",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000519.html",
                        title: "Inuvik Weather",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000648.html",
                        title: "Watson Lake Weather",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000561.html",
                        title: "Hay River Weather",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000366.html",
                        title: "Yellowknife Weather",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000495.html",
                        title: "Cambridge Bay Weather",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000678.html",
                        title: "Rankin Inlet Weather",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/weather/s0000394.html",
                        title: "Iqaluit Weather",
                        type: "external"
                    }]
                }, {
                    id: 44,
                    preference: "kamloops",
                    title: "Kamloops",
                    link: "/news/canada/kamloops",
                    path: "news/canada/kamloops",
                    trendingSection: "",
                    hideInNav: !0,
                    province: "British Columbia",
                    categorySlug: "kamloops",
                    thumbnail: "https://i.cbc.ca/1.4211422!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_300/image-.jpg",
                    liveRadioRegion: "Kamloops",
                    navigation: [{
                        link: "/news/canada/kamloops",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/canada/kamloops/contact-cbc-kamloops-1.4012428",
                        title: "Contact Us",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/bc/weather/s0000568.html",
                        title: "Weather",
                        type: "external"
                    }]
                }],
                c = r.find((function(e) {
                    return "ottawa" === e.preference
                })),
                l = {
                    title: c.title,
                    path: c.path,
                    id: c.id,
                    trendingSection: c.trendingSection,
                    categorySlug: c.categorySlug,
                    preference: c.preference,
                    listenLive: c.liveRadioRegion
                },
                d = r.reduce((function(e, a) {
                    return e[a.preference] = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return s(s({}, l), e)
                    }(a), e
                }), {})
        },
        97767: (e, a, t) => {
            "use strict";
            t.d(a, {
                HK: () => p,
                IV: () => g,
                SA: () => n,
                T: () => b,
                ae: () => u,
                bv: () => w,
                ku: () => m,
                zV: () => h,
                zl: () => y
            });
            t(9867), t(7231);
            var n = {
                    global: {
                        trending: !1
                    },
                    2017: {
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        },
                        breaking: !0,
                        trending: !1
                    },
                    archives: {
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        },
                        breaking: !1,
                        trending: !1
                    },
                    arts: {
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        },
                        breaking: !0
                    },
                    books: {
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        },
                        breaking: !0
                    },
                    cape: {
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        },
                        breaking: !0,
                        trending: !1
                    },
                    comedy: {
                        customPageSize: 24,
                        nativeAd: {
                            enabled: !0,
                            index: 4,
                            indexShow: 4
                        }
                    },
                    documentaries: {
                        nativeAd: {
                            enabled: !0,
                            index: 4,
                            indexShow: 4
                        },
                        trending: !0,
                        usingCaMLTrending: !0,
                        trendingSidebarLabel: " in Docs"
                    },
                    "documentaries/the-nature-of-things/articles": {
                        trending: !0,
                        usingCaMLTrending: !0,
                        trendingSidebarLabel: " in Docs"
                    },
                    homepage: {
                        customPageSize: 23,
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        },
                        breaking: !0,
                        trending: !1
                    },
                    indspire: {
                        trending: !1
                    },
                    life: {
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        },
                        breaking: !0,
                        trendingSection: "lifestyle"
                    },
                    lifestyle: {
                        trending: !0,
                        trendingSidebarLabel: " in Life"
                    },
                    music: {
                        trending: !1,
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        }
                    },
                    news: {
                        customNumTopStories: 4,
                        customPageSize: 28,
                        journalistStandards: "https://cbc.radio-canada.ca/en/vision/governance/journalistic-standards-and-practices",
                        trustProject: "/news/about-cbc-news-1.1294364",
                        contentFeedbackLink: "//www.cbc.ca/news2/feedback/index_typo.html?",
                        connectUrl: "//cbchelp.cbc.ca/hc/en-us/requests/new",
                        breaking: !0,
                        originalPubDate: !0,
                        showTrendingCount: !0,
                        abtest: "a-AdOzuDBKQVMS",
                        variants: [{
                            section: "news",
                            usingCaMLTrending: !1,
                            disableTrendingCount: !1
                        }, {
                            section: "news",
                            usingCaMLTrending: !1,
                            disableTrendingCount: !1
                        }, {
                            section: "news",
                            usingCaMLTrending: !0,
                            disableTrendingCount: !0
                        }]
                    },
                    "/news": {
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        },
                        trendingSection: "/news",
                        showTrendingCount: !0,
                        breaking: !0
                    },
                    radio: {
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        },
                        breaking: !0
                    },
                    sports: {
                        customNumTopStories: 4,
                        journalistStandards: "https://cbc.radio-canada.ca/en/vision/governance/journalistic-standards-and-practices",
                        connectUrl: "//cbchelp.cbc.ca/hc/en-us/requests/new",
                        trustProject: "/sports/about-cbc-sports-1.5116980",
                        nativeAd: {
                            enabled: !0,
                            index: 5,
                            indexShow: 4
                        },
                        breaking: !0
                    },
                    search: {
                        trending: !1
                    },
                    shows: {
                        trending: !1
                    },
                    visualstories: {
                        title: "Visual Stories",
                        trending: !1
                    },
                    meta: {
                        breaking: !0,
                        trending: !1
                    },
                    "news/canada/beingblackincanada/all": {
                        startIndex: 7,
                        trending: !1
                    },
                    "news/canada/toronto": {
                        trending: !0,
                        trendingSidebarLabel: " in Toronto",
                        usingCaMLTrending: !0,
                        showTrendingCount: !1,
                        displayLocalTrending: !0
                    },
                    "news/canada/nova-scotia": {
                        trending: !0,
                        usingCaMLTrending: !0,
                        showTrendingCount: !0
                    },
                    "news/canada/new-brunswick": {
                        trending: !0,
                        usingCaMLTrending: !0,
                        showTrendingCount: !0
                    },
                    "news/canada/prince-edward-island": {
                        trending: !0,
                        usingCaMLTrending: !0,
                        showTrendingCount: !0
                    },
                    "news/canada/newfoundland-labrador": {
                        trending: !0
                    },
                    "news/canada/north": {
                        trending: !0
                    },
                    "news/canada/montreal": {
                        displayLocalTrending: !0,
                        trending: !0,
                        trendingSection: "/news/canada/montreal",
                        usingCaMLTrending: !0,
                        trendingSidebarLabel: " in Montreal"
                    },
                    "news/canada/british-columbia": {
                        displayLocalTrending: !0,
                        trending: !0,
                        trendingSection: "/news/canada/british columbia",
                        usingCaMLTrending: !0,
                        trendingSidebarLabel: " in British Columbia "
                    }
                },
                i = {
                    thumbnail: "https://i.cbc.ca/1.4309980!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/masthead-banner-for-olympics-rttog-pages.jpg",
                    imageLink: "/sports/olympics",
                    showOnStories: !0
                },
                s = {
                    title: "Road To The Olympic Games",
                    thumbnail: "https://i.cbc.ca/1.4309980!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/masthead-banner-for-olympics-rttog-pages.jpg",
                    imageLink: "/sports/olympics",
                    showOnStories: !0,
                    showMenuOnStories: !1,
                    navigation: [{
                        link: "/sports/olympics",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/sports/paralympics",
                        title: "Paralympics",
                        type: "internal"
                    }, {
                        link: "/sports/olympics/all",
                        title: "Olympic Sports",
                        type: "internal"
                    }, {
                        link: "/sports/olympics/breakthrough",
                        title: "Breakthrough",
                        type: "external"
                    }, {
                        link: "/sports/shows",
                        title: "Shows",
                        type: "internal"
                    }]
                },
                o = {
                    alias: "learningenglish",
                    title: "Learning English",
                    medium: "web series",
                    description: "Learning English with CBC provides stories, newscasts and lessons for English learners",
                    thumbnail: "https://i.cbc.ca/1.4421005.1511796381!/fileImage/httpImage/learning-english-thumbnail.jpg",
                    navigation: [{
                        link: "/learning-english",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/learning-english/about-1.4474649",
                        title: "About",
                        type: "internal"
                    }, {
                        link: "/learning-english/level-1",
                        title: "Level 1",
                        type: "internal"
                    }, {
                        link: "/learning-english/level-2",
                        title: "Level 2",
                        type: "internal"
                    }, {
                        link: "/learning-english/learning-english-with-cbc-pre-2018-editions-1.4543566",
                        title: "Past Lessons",
                        type: "internal"
                    }],
                    showOnStories: !0,
                    showMenuOnStories: !0
                },
                r = {
                    image: "https://i.cbc.ca/1.5188316.1561412069!/fileImage/httpImage/calgary-stampede-2019-site-masthead.jpg",
                    navigation: [{
                        title: "Home",
                        link: "/sports/calgarystampede",
                        type: "internal"
                    }, {
                        title: "Video",
                        link: "/sports/video/calgary-stampede",
                        type: "internal"
                    }, {
                        title: "Schedule",
                        link: "https://www.cbc.ca/1.5189169",
                        type: "external"
                    }],
                    showOnStories: !0,
                    showMenuOnStories: !0,
                    showOnAllSubsections: !0
                },
                c = {
                    title: "Still Standing",
                    medium: "TV",
                    navigation: [{
                        link: "/television/stillstanding",
                        title: "Latest",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/1.5238042",
                        title: "Full Episodes",
                        type: "external"
                    }, {
                        link: "/television/stillstanding/about",
                        title: "About",
                        type: "internal"
                    }]
                },
                l = {
                    title: "Battle of the Blades",
                    description: "Battle of the Blades combines athletes from two of Canada\u2019s favourite sports \u2014 figure skating and hockey \u2014 as they pair up in a live, high-stakes figure skating competition for the charity of their choice.",
                    medium: "TV",
                    navigation: [{
                        link: "/television/battleoftheblades",
                        title: "Latest",
                        type: "internal"
                    }, {
                        link: "https://gem.cbc.ca/season/battle-of-the-blades/season-6/e89e5946-ea3b-4f5d-82ae-df3d4ec46aa3?cmp=sch-battle",
                        title: "Full Episodes",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/battlevote",
                        title: "Vote",
                        type: "external"
                    }, {
                        link: "/television/battleoftheblades/skaters",
                        title: "Skaters",
                        type: "internal"
                    }, {
                        link: "/television/battleoftheblades/blades-performances",
                        title: "Performances",
                        type: "internal"
                    }]
                },
                d = [{
                    link: "/life/hellospring",
                    title: "Latest",
                    type: "internal"
                }, {
                    link: "/life/hellospring/springscenes",
                    title: "Scenes From Spring",
                    type: "internal"
                }, {
                    link: "/life/hellospring/hellospring-livestream",
                    title: "Live Nature Streams",
                    type: "internal"
                }, {
                    link: "/life/hellospring/showusyourspring",
                    title: "Show Us Your Spring",
                    type: "internal"
                }],
                p = {
                    "news/covid-19": {
                        customNumTopStories: 1,
                        title: "Covid-19 News",
                        showOnStories: !0
                    },
                    "news/canada/montreal/quebecvotes2018": {
                        province: "Quebec",
                        title: "Quebec Votes Oct 1",
                        navigation: [{
                            link: "/news/canada/montreal/quebecvotes2018",
                            title: "Home",
                            type: "internal"
                        }, {
                            link: "https://newsinteractives.cbc.ca/qcvotes/poll-tracker/",
                            title: "Poll Tracker",
                            type: "external"
                        }, {
                            link: "https://votecompass.cbc.ca/quebec/",
                            title: "Vote Compass",
                            type: "external"
                        }],
                        showOnStories: !0,
                        showMenuOnStories: !0,
                        showOnAllSubsections: !0
                    },
                    "news/canada/new-brunswick/nbvotes2018": {
                        province: "New Brunswick",
                        title: "New Brunswick Votes Sept 24",
                        navigation: [{
                            link: "/news/canada/new-brunswick/nbvotes2018",
                            title: "Home",
                            type: "internal"
                        }, {
                            link: "https://newsinteractives.cbc.ca/nbvotes/poll-tracker/",
                            title: "Poll Tracker",
                            type: "external"
                        }, {
                            link: "https://votecompass.cbc.ca/nb/",
                            title: "Vote Compass",
                            type: "external"
                        }],
                        showOnStories: !0,
                        showMenuOnStories: !0,
                        showOnAllSubsections: !0
                    },
                    "news/elections/albertavotes2019": {
                        province: "Alberta",
                        title: "Alberta Votes 2019",
                        navigation: [{
                            link: "/news/elections/albertavotes2019",
                            title: "Home",
                            type: "internal"
                        }, {
                            link: "https://votecompass.cbc.ca/alberta/",
                            title: "Vote Compass",
                            type: "external"
                        }, {
                            link: "https://newsinteractives.cbc.ca/elections/poll-tracker/alberta/",
                            title: "Poll Tracker",
                            type: "external"
                        }, {
                            link: "https://www.cbc.ca/radio/podcasts/alberta/the-ledge/",
                            title: "The Ledge podcast",
                            type: "external"
                        }, {
                            link: "https://subscriptions.cbc.ca/forms/thescrutineer",
                            title: "The Scrutineer Newsletter",
                            type: "external"
                        }],
                        showOnStories: !0,
                        showMenuOnStories: !0,
                        showOnAllSubsections: !0
                    },
                    "news/elections/peivotes2019": {
                        province: "Prince Edward Island",
                        title: "Prince Edward Island Votes 2019",
                        showOnStories: !0,
                        showMenuOnStories: !0,
                        showOnAllSubsections: !0
                    },
                    "news/elections/nlvotes2019": {
                        province: "Newfoundland and Labrador",
                        title: "Newfoundland and Labrador Votes 2019",
                        navigation: [{
                            link: "https://subscriptions.cbc.ca/forms/nlnewsletter",
                            title: "Newsletter: Trail Mix",
                            type: "external"
                        }],
                        showOnStories: !0,
                        showMenuOnStories: !0,
                        showOnAllSubsections: !0
                    },
                    "news/elections/nwtvotes2019": {
                        province: "Northwest Territories",
                        title: "Northwest Territories Votes 2019",
                        showOnStories: !0,
                        showMenuOnStories: !0,
                        showOnAllSubsections: !0
                    },
                    "news/marketplace": {
                        customNumTopStories: 1,
                        navigation: [{
                            title: "Home",
                            link: "/news/marketplace"
                        }, {
                            title: "About",
                            link: "https://www.cbc.ca/news/marketplace/about-marketplace-1.5695017"
                        }, {
                            title: "Episodes",
                            link: "https://gem.cbc.ca/marketplace",
                            type: "external"
                        }, {
                            title: "Submit a Story Tip",
                            link: "https://www.cbc.ca/news/marketplace/submit-a-story-tip-1.5695097"
                        }, {
                            title: "Newsletter",
                            link: "https://subscriptions.cbc.ca/listmanagement/forms/marketplace-watchdog",
                            type: "external"
                        }]
                    },
                    "news/fifthestate": {
                        customNumTopStories: 1,
                        navigation: [{
                            title: "Home",
                            link: "/news/fifthestate"
                        }, {
                            title: "About",
                            link: "https://www.cbc.ca/news/fifth/about-the-fifth-estate-1.6022761"
                        }, {
                            title: "Episodes",
                            link: "https://gem.cbc.ca/season/the-fifth-estate/season-46/60f7c605-2522-4ece-acfb-6cb6794b582b",
                            type: "external"
                        }, {
                            title: "Secure Drop",
                            link: "https://www.cbc.ca/securedrop/",
                            type: "external"
                        }, {
                            title: "Newsletter",
                            link: "https://subscriptions.cbc.ca/listmanagement/forms/fifth-estate",
                            type: "external"
                        }]
                    },
                    "sports/crashed-ice": {
                        title: "Red Bull Crashed Ice",
                        showOnStories: !0
                    },
                    "sports/iwd": {
                        customNumTopStories: 1,
                        title: "International Women's Day",
                        showOnStories: !0
                    },
                    "sports/olympics/hometeam": {
                        customNumTopStories: 1,
                        title: "Road to the Olympics - Home Team",
                        navigation: [],
                        showOnStories: !0
                    },
                    "sports/calgarystampede": r,
                    "sports/video/calgary-stampede": r,
                    "sports/olympics": s,
                    "sports/olympics/all": s,
                    "sports/olympics/summer/aquatics": i,
                    "sports/olympics/winter/curling": i,
                    "sports/olympics/summer/cycling": i,
                    "sports/olympics/winter/figure-skating": i,
                    "sports/olympics/summer/gymnastics": i,
                    "sports/olympics/winter/skiing": i,
                    "sports/olympics/winter/alpine-skiing": i,
                    "sports/olympics/winter/freestyle-skiing": i,
                    "sports/olympics/winter/sliding": i,
                    "sports/olympics/winter/snowboard": i,
                    "sports/olympics/winter/speed-skating": i,
                    "sports/olympics/summer/trackandfield": i,
                    "sports/olympics/road-to-the-olympic-games": s,
                    "sports/paralympics": {
                        title: "Paralympics",
                        thumbnail: "https://i.cbc.ca/1.4309980!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/masthead-banner-for-olympics-rttog-pages.jpg",
                        imageLink: "/sports/paralympics",
                        navigation: [{
                            link: "/sports/paralympics",
                            title: "Home",
                            type: "internal"
                        }, {
                            link: "/sports/paralympics/video",
                            title: "Video",
                            type: "internal"
                        }, {
                            link: "/player/sports/paralympics/winter/replays",
                            title: "Replays",
                            type: "internal"
                        }, {
                            link: "/sports/paralympics/streaming-schedule",
                            title: "Streaming Schedule",
                            type: "internal"
                        }, {
                            link: "/sports/paralympics/tv-schedule",
                            title: "TV Schedule",
                            type: "internal"
                        }, {
                            link: "/sports/paralympics/event-schedule",
                            title: "Beijing 2022 Event Schedule",
                            type: "internal"
                        }, {
                            link: "/sports/paralympics/results",
                            title: "Beijing 2022 Results",
                            type: "internal"
                        }, {
                            link: "/sports/paralympics/medals",
                            title: "Beijing 2022 Medals",
                            type: "internal"
                        }],
                        showOnStories: !1,
                        showMenuOnStories: !1,
                        showOnAllSubsections: !0
                    },
                    "life/backintimefordinner": {},
                    "life/backintimeforwinter": {
                        navigation: [{
                            link: "/life/backintimeforwinter",
                            title: "Latest",
                            type: "internal"
                        }]
                    },
                    "life/greatcanadianbakingshow": {},
                    "life/greatcanadianbakingshow/bakers": {
                        title: "The Great Canadian Baking Show",
                        thumbnail: "https://i.cbc.ca/1.4584520.1521570572!/fileImage/httpImage/image.jpg_gen/derivatives/original_780/great-canadian-baking-thumbnail.jpg"
                    },
                    "life/greatcanadianbakingshow/episodes": {
                        title: "Episodes",
                        type: "internal"
                    },
                    "life/greatcanadianbakingshow/recipes": {
                        title: "Recipes and Tips",
                        type: "internal"
                    },
                    "life/greatcanadianbakingshow/about": {
                        title: "About",
                        type: "internal"
                    },
                    "life/hellospring": {
                        navigation: d
                    },
                    "life/hellospring/springscenes": {
                        navigation: d
                    },
                    "life/hellospring/hellospring-livestream": {
                        navigation: d
                    },
                    "life/hellospring/showusyourspring": {
                        navigation: d
                    },
                    "life/holiday": {},
                    "life/thegoods": {},
                    "life/fridgewars": {},
                    "music/junos": {
                        showOnStories: !0,
                        trending: !1
                    },
                    "learning-english": o,
                    "learning-english/level-1": o,
                    "learning-english/level-2": o,
                    "learning-english/past-lessons": o,
                    "learning-english/past-lessons/calgary": Object.assign({}, o, {
                        navigation: o.navigation.map((function(e) {
                            return "Past Lessons" === e.title ? {
                                link: "/learning-english/past-lessons/calgary",
                                title: e.title,
                                type: e.type
                            } : e
                        }))
                    }),
                    "learning-english/past-lessons/edmonton": Object.assign({}, o, {
                        navigation: o.navigation.map((function(e) {
                            return "Past Lessons" === e.title ? {
                                link: "/learning-english/past-lessons/edmonton",
                                title: e.title,
                                type: e.type
                            } : e
                        }))
                    }),
                    "television/stillstanding": c,
                    "television/stillstanding/about": {
                        title: "Still Standing: About",
                        medium: c.medium,
                        navigation: c.navigation
                    },
                    "television/fromthevaults": {},
                    "television/familyfeud": {},
                    "television/higharctichaulers": {},
                    "television/thedetectives": {},
                    "television/battleoftheblades": l,
                    "television/battleoftheblades/skaters": l,
                    "television/battleoftheblades/blades-performances": l,
                    "television/battleoftheblades/mini-blades": l,
                    "arts/artuncontained": {
                        navigation: [{
                            link: "https://cbc.ca/1.5533118",
                            title: "About",
                            type: "external"
                        }, {
                            link: "https://cbc.ca/1.5532844",
                            title: "Listings",
                            type: "external"
                        }, {
                            link: "https://cbc.ca/1.5503360",
                            title: "Artist Resources",
                            type: "external"
                        }, {
                            link: "/arts/topic/Tag/COVID%20Residencies",
                            title: "COVID Residencies",
                            type: "internal"
                        }, {
                            link: "/radio/podcastnews/new-podcast-series-the-show-must-go-on-brings-the-theatre-experience-home-1.5532600",
                            title: "The Show Must Go On",
                            type: "internal"
                        }, {
                            link: "/arts/topic/Tag/Pandemic%20Diaries",
                            title: "Pandemic Diaries",
                            type: "internal"
                        }, {
                            link: "https://cbc.ca/1.5536480",
                            title: "Transmission",
                            type: "external"
                        }]
                    }
                },
                m = {
                    "music/junos/watch": {
                        header: "Trending",
                        section: "music/junos/watch/video",
                        itemCount: "25"
                    },
                    music: {
                        header: "Trending",
                        section: "music/read/video",
                        itemCount: "15"
                    }
                },
                w = {
                    television: {
                        section: "television/watch",
                        headline: "WATCH CBC",
                        className: "mediaTheme",
                        itemCount: 4,
                        customHeadlineLink: "//gem.cbc.ca",
                        external: !0
                    },
                    "news/covid-19": [{
                        section: "news/covid-19/localsubject",
                        type: "localSubject",
                        itemCount: 4,
                        subjects: "Health/Diseases and conditions/Infectious diseases/Coronavirus",
                        excludedCategorySet: "cbc-community-exclude"
                    }, {
                        section: "news/covid-19/international-news",
                        headline: "International News",
                        itemCount: 4,
                        showMoreLink: !1,
                        hasHeadlineLink: !0
                    }, {
                        section: "news/covid-19/coping-with-covid-19",
                        headline: "Coping With COVID-19",
                        itemCount: 4,
                        external: !1,
                        hasHeadlineLink: !0
                    }, {
                        section: "news/covid-19/economy-and-finance",
                        headline: "Economy and Finance",
                        itemCount: 4,
                        external: !1,
                        hasHeadlineLink: !0
                    }],
                    documentaries: {
                        section: "documentaries/features",
                        headline: "Watch on CBC Gem",
                        className: "mediaTheme",
                        itemCount: 4,
                        customHeadlineLink: "https://gem.cbc.ca/category/documentaries/featured-documentaries/a04e4803-9d0c-4480-845f-54bcf081b65f",
                        external: !0
                    },
                    arts: {
                        section: "arts/arts-watch-on-gem",
                        headline: "Watch on CBC Gem",
                        className: "mediaTheme",
                        itemCount: 4,
                        customHeadlineLink: "https://gem.cbc.ca/category/shows/categories/arts/",
                        external: !0,
                        contentListClasses: "hideContentBottom"
                    },
                    "arts/artuncontained": {
                        section: "arts/arts-watch-on-gem",
                        headline: "Watch on CBC Gem",
                        className: "mediaTheme",
                        itemCount: 4,
                        customHeadlineLink: "https://gem.cbc.ca/category/shows/categories/arts/",
                        external: !0,
                        contentListClasses: "hideContentBottom"
                    },
                    "life/hellospring": {
                        section: "life/hellospring/swimlane",
                        headline: "Nature Videos",
                        className: "mediaTheme",
                        itemCount: 4,
                        external: !1,
                        customHeadlineLink: "/life/hellospring/springscenes",
                        contentListClasses: "hideContentBottom"
                    }
                },
                g = ["cbc-topic", "topic"],
                h = {
                    "news/canada/new-brunswick/nbvotes2018": {
                        province: "New Brunswick",
                        swimlane: !0
                    },
                    "news/canada/montreal/quebecvotes2018": {
                        province: "Quebec",
                        swimlane: !0
                    }
                },
                u = {
                    sports: "CBC Sports",
                    "sports/all": "All Sports",
                    "sports/hockey/nhl": "NHL",
                    "sports/baseball/mlb": "MLB",
                    "sports/basketball/nba": "NBA",
                    "sports/basketball/cebl": "CEBL",
                    "sports/canada-150": "Canada 150",
                    "sports/football/cfl": "CFL",
                    "sports/football/nfl": "NFL",
                    "sports/olympics": "Olympics",
                    "sports/olympics/summer/aquatics": "Aquatics",
                    "sports/olympics/winter/curling": "Curling",
                    "sports/olympics/summer/cycling": "Cycling",
                    "sports/olympics/winter/figure-skating": "Figure Skating",
                    "sports/golf": "Golf",
                    "sports/iwd": "International Women's Day 2020",
                    "sports/olympics/summer/gymnastics": "Gymnastics",
                    "sports/paralympics": "Paralympics",
                    "sports/olympics/winter/skiing": "Skiing",
                    "sports/olympics/winter/alpine-skiing": "Alpine Skiing",
                    "sports/olympics/winter/freestyle-skiing": "Freestyle Skiing",
                    "sports/olympics/winter/sliding": "Sliding",
                    "sports/olympics/winter/snowboard": "Snowboarding",
                    "sports/soccer": "Soccer",
                    "sports/soccer/mls": "Major League Soccer",
                    "sports/soccer/cpl": "Canadian Premier League",
                    "sports/soccer/worldcup": "World Cup",
                    "sports/olympics/winter/speed-skating": "Speed Skating",
                    "sports/tennis": "Tennis",
                    "sports/rugby": "Rugby",
                    "sports/olympics/summer/trackandfield": "Track and Field",
                    "sports/olympics/summer/volleyball": "Volleyball",
                    "sports/calgarystampede": "Calgary Stampede",
                    "sports/equestrian": "Equestrian",
                    "books/literaryprizes": "CBC Books - Literary Prizes",
                    visualstories: "Visual Stories from CBC",
                    radio: "CBC Radio",
                    cape: "CBC AbiliCrew Placements for Excellence",
                    "life/holiday/cbcgives": "CBC Gives"
                },
                y = Object.keys(u),
                b = Object.values(u)
        },
        23257: (e, a, t) => {
            "use strict";
            t.d(a, {
                u: () => n
            });
            var n = {
                2017: [{
                    alias: "canadais",
                    image: "https://i.cbc.ca/1.4501466.1516805255!/fileImage/httpImage/canada-is-banner.png",
                    description: "An online series showcasing the many facets of Canadian identity. Leading figures in each field explore how their area relates to Canadian culture and capture a part of what it means to be Canadian."
                }, {
                    alias: "canadathestoryofus",
                    image: "https://i.cbc.ca/1.4584750.1521574142!/fileImage/httpImage/canada-story-of-us.jpg",
                    navigation: [{
                        link: "/2017/canadathestoryofus/canada-the-story-of-us-1.4005217",
                        title: "About",
                        type: "internal"
                    }, {
                        link: "/2017/canadathestoryofus/csou-episodes",
                        title: "Episodes",
                        type: "internal"
                    }, {
                        link: "https://gem.cbc.ca",
                        title: "Watch",
                        type: "external"
                    }, {
                        link: "/2017/canadathestoryofus/canada-the-story-of-us-faqs-1.4048136",
                        title: "FAQs",
                        type: "internal"
                    }]
                }, {
                    alias: "wearecanada",
                    image: "https://i.cbc.ca/1.4584765.1521574346!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/we-are-canada-banner.jpg",
                    navigation: [{
                        link: "/2017/wearecanada/about-we-are-canada-1.4028018",
                        title: "About",
                        type: "internal"
                    }, {
                        link: "https://gem.cbc.ca/we-are-canada",
                        title: "Watch",
                        type: "external"
                    }]
                }, {
                    alias: "we-are-the-best",
                    image: "https://i.cbc.ca/1.4584771.1521574419!/fileImage/httpImage/we-are-the-best-thumbnail.png",
                    navigation: [{
                        link: "/2017/we-are-the-best/about-we-are-the-best-1.3907805",
                        title: "About",
                        type: "internal"
                    }]
                }, {
                    alias: "becoming-canadian",
                    image: "https://i.cbc.ca/1.4584786.1521574744!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/becoming-canadian-banner.jpg",
                    navigation: [{
                        link: "/2017/becoming-canadian/about-becoming-canadian-1.3919482",
                        title: "About",
                        type: "internal"
                    }]
                }, {
                    alias: "truenorthcalling",
                    image: "https://i.cbc.ca/1.4584797.1521574885!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/true-north-calling.jpg",
                    navigation: [{
                        link: "/2017/truenorthcalling/about-true-north-calling-1.3949724",
                        title: "About",
                        type: "internal"
                    }, {
                        link: "https://gem.cbc.ca/true-north-calling",
                        title: "Watch",
                        type: "external"
                    }]
                }],
                arts: [{
                    alias: "exhibitionists",
                    navigation: [{
                        link: "/arts/exhibitionists",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/arts/exhibitionists/about-exhibitionists-1.3252400",
                        title: "About",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/1.4380046",
                        title: "Watch",
                        type: "external"
                    }]
                }, {
                    alias: "thefilmmakers",
                    description: "A fun, candid master class with some of the minds behind the greatest Canadian films."
                }, {
                    alias: "inthemaking",
                    navigation: [{
                        link: "/arts/inthemaking",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "https://cbc.ca/1.5230317",
                        title: "Watch",
                        type: "external"
                    }, {
                        link: "https://cbc.ca/1.4796420",
                        title: "About",
                        type: "external"
                    }]
                }, {
                    alias: "interruptthisprogram",
                    navigation: [{
                        link: "/arts/interruptthisprogram",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/arts/interruptthisprogram/about-interrupt-this-program-1.3282382",
                        title: "About",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/1.4380063",
                        title: "Watch",
                        type: "external"
                    }]
                }, {
                    alias: "crashgallery",
                    navigation: [{
                        link: "/arts/crashgallery",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/arts/crashgallery/about-crash-gallery-1.3227420",
                        title: "About",
                        type: "internal"
                    }, {
                        link: "https://gem.cbc.ca/crash-gallery",
                        title: "Watch",
                        type: "external"
                    }]
                }, {
                    alias: "thecollective",
                    navigation: [{
                        link: "/arts/thecollective",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/arts/thecollective/about-the-collective-1.3246970?",
                        title: "About",
                        type: "internal"
                    }]
                }, {
                    alias: "eddyrogo",
                    navigation: [{
                        link: "/arts/eddyrogo",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/arts/eddyrogo/about-the-re-education-of-eddy-rogo-1.3242404",
                        title: "About",
                        type: "internal"
                    }]
                }],
                pride: [{
                    alias: "pride",
                    title: "CBC Pride",
                    url: "/pride/topic/Collections/Spotlight%20on%20Pride",
                    image: "https://www.cbc.ca/radio-content/assets/banners/CBCPride_banner.jpg",
                    nestedPath: !0,
                    nestedUrl: "/pride/topic/collections/spotlight%20on%20pride"
                }],
                life: [{
                    alias: "backintimefordinner",
                    navigation: [{
                        link: "/life/backintimefordinner",
                        title: "Latest",
                        type: "internal"
                    }, {
                        link: "/life/backintimefordinner/episodes",
                        title: "Episodes",
                        type: "internal"
                    }]
                }, {
                    alias: "jamieoliver",
                    navigation: [{
                        link: "/life/jamieoliver",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/life/jamieoliver/recipes",
                        title: "Recipes",
                        type: "internal"
                    }, {
                        link: "/life/jamieoliver/watch",
                        title: "Watch",
                        type: "internal"
                    }]
                }],
                music: [{
                    alias: "the-intro",
                    navigation: [{
                        link: "/music/the-intro",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/music/about-cbc-music-s-the-intro-1.6219967",
                        title: "About",
                        type: "internal"
                    }]
                }],
                news: [{
                    alias: "joandonaldsonscholars",
                    navigation: [{
                        link: "/news/joandonaldsonscholars",
                        title: "Home",
                        type: "internal"
                    }, {
                        link: "/news/joandonaldsonscholars/about-the-joan-donaldson-cbc-news-scholarship-1.2816864",
                        title: "About",
                        type: "internal"
                    }, {
                        link: "/news/joandonaldsonscholars/about-joan-donaldson-1.2816897",
                        title: "Joan Donaldson",
                        type: "internal"
                    }, {
                        link: "/news/joandonaldsonscholars/2024-joan-donaldson-cbc-news-scholarship-recipients-1.7125972",
                        title: "Current Recipients",
                        type: "internal"
                    }, {
                        link: "/news/joandonaldsonscholars/past-recipients-joan-donaldson-cbc-news-scholarship-1.2817070",
                        title: "Past Recipients",
                        type: "internal"
                    }]
                }, {
                    alias: "theinvestigators",
                    description: "The Investigators with Diana Swain pulls back the curtain on journalism, connecting with the journalists who break big stories."
                }, {
                    alias: "powerandpolitics",
                    nestedPath: !0,
                    nestedUrl: "/news/politics/powerandpolitics",
                    navigation: [{
                        link: "https://gem.cbc.ca/power-politics",
                        title: "Watch",
                        type: "external"
                    }, {
                        link: "https://www.cbc.ca/radio/podcasts/current-affairs-information/power-politics/",
                        title: "Podcast",
                        type: "external"
                    }]
                }, {
                    alias: "theweekly",
                    navigation: [{
                        link: "/news/theweekly/the-weekly-with-wendy-mesley-1.5369744",
                        title: "About the Show",
                        type: "internal"
                    }, {
                        link: "https://gem.cbc.ca/the-weekly",
                        title: "Watch full episodes",
                        type: "external"
                    }]
                }, {
                    alias: "the-road-ahead",
                    nestedPath: !0,
                    nestedUrl: "/news/canada/calgary/the-road-ahead",
                    navigation: [{
                        link: "/news/canada/calgary",
                        title: "Calgary",
                        type: "internal"
                    }]
                }, {
                    alias: "being-black-in-canada",
                    url: "/news/cbc-topic/Collections/Being%20black%20in%20Canada",
                    title: "Being Black in Canada",
                    image: "https://i.cbc.ca/1.4980365!/fileImage/httpImage/bbic.png",
                    nestedPath: !0,
                    nestedUrl: "/news/cbc-topic/collections/being%20black%20in%20canada"
                }, {
                    alias: "1919-100-years",
                    url: "/news/canada/manitoba/topic/Tag/1919%20100%20years",
                    title: "1919 100 Years",
                    image: "https://i.cbc.ca/1.5135227.1557847748!/fileImage/httpImage/1919-100-years.jpg",
                    nestedPath: !0,
                    nestedUrl: "/news/canada/manitoba/topic/tag/1919%20100%20years"
                }, {
                    alias: "coping-with-covid-19",
                    url: "news/covid-19/coping-with-covid-19",
                    nestedPath: !0,
                    nestedUrl: "/news/covid-19/coping-with-covid-19"
                }],
                books: [{
                    alias: "canadareads",
                    navigation: [{
                        link: "/books/canadareads/about-1.4025711",
                        title: "About",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/listen/shows/canada-reads",
                        title: "Listen",
                        type: "external"
                    }, {
                        link: "https://gem.cbc.ca/canada-reads",
                        title: "Watch",
                        type: "external"
                    }, {
                        link: "/books/canadareads/past-canada-reads-winners-1.4034451",
                        title: "Past Winners",
                        type: "internal"
                    }, {
                        link: "/books/canadareads/transcripts",
                        title: "Transcripts",
                        type: "internal"
                    }]
                }],
                television: [{
                    alias: "whatreyouat",
                    navigation: [{
                        link: "/television/whatreyouat",
                        title: "Latest",
                        type: "internal"
                    }]
                }, {
                    alias: "anyonesgame",
                    navigation: [{
                        link: "https://www.cbc.ca/1.5723785",
                        title: "Watch Full Episodes",
                        type: "external"
                    }]
                }, {
                    alias: "raceagainstthetide",
                    navigation: [{
                        link: "https://www.cbc.ca/1.5999768",
                        title: "Watch Full Episodes",
                        type: "external"
                    }]
                }],
                documentaries: [{
                    alias: "goodpeople",
                    navigation: [{
                        link: "/documentaries/goodpeople",
                        title: "Latest",
                        type: "internal"
                    }, {
                        link: "https://www.cbc.ca/1.5475295",
                        title: "Full Episodes",
                        type: "external"
                    }]
                }, {
                    alias: "enslaved",
                    navigation: [{
                        link: "/documentaries/enslaved",
                        title: "Latest",
                        type: "internal"
                    }, {
                        link: "https://gem.cbc.ca/enslaved",
                        title: "Full Episodes",
                        type: "external"
                    }]
                }]
            }
        },
        83911: (e, a, t) => {
            "use strict";
            t.d(a, {
                Z: () => n
            });
            const n = {
                2017: "canada-2017",
                "2017/canadathestoryofus/csou-episodes": "canada-the-story-of-us-episodes",
                "2017/nye": "nye",
                "2017/whatsyourstory": "whats-your-story",
                archives: "cbc-archives",
                "archives/arts": "arts-entertainment",
                "archives/history": "cbc-archives-history",
                "archives/sports": "cbc-archives-sports",
                arts: "arts",
                "arts/watch": "arts-watch",
                "arts/read": "arts-read",
                "arts/canadianscreenawards": "canadian-screen-awards",
                "arts/insurgenceresurgence": "insurgence-resurgence",
                "arts/secretpath": "secret-path",
                "arts/arts-watch-on-gem": "empty-category",
                "arts/artuncontained": "art-uncontained",
                "arts/beingblackincanada": "arts",
                books: "books",
                "books/canadawrites": "canada-writes",
                "books/literaryprizes": "literary-prizes",
                "books/readinglists": "reading-lists",
                "books/ggbooks": "governor-generals-literary-awards",
                "books/gillerprize": "scotiabank-giller-prize",
                "books/kids": "td-kids-books-corner",
                "books/transmission": "books-transmission",
                "books/beingblackincanada": "books",
                cape: "cape",
                comedy: "comedy",
                "comedy/instagram": "empty-category",
                cree: "",
                documentaries: "documentaries",
                "documentaries/specials": "documentaries-special",
                "documentaries/features": "empty-category",
                "documentaries/brief-but-spectacular": "empty-category",
                "documentaries/the-oland-murder": "the-oland-murder",
                "documentaries/hotdocsoncbc": "hot-docs-at-home",
                "documentaries/goodpeople": "docs-good-people",
                "documentaries/enslaved": "docs-enslaved",
                homepage: "homepage",
                "homepage/featured": "empty-category",
                "homepage/gem": "empty-category",
                "homepage/paralympics": "empty-category",
                "learning-english": "learning-english",
                "learning-english/level-1": "empty-category",
                "learning-english/level-2": "empty-category",
                "learning-english/past-lessons": "empty-category",
                "learning-english/past-lessons/calgary": "empty-category",
                "learning-english/past-lessons/edmonton": "empty-category",
                life: "life",
                "life/culture": "culture",
                "life/food": "food",
                "life/giveaways": "giveaways",
                "life/greatcanadianbakingshow/bakers": "gcbs-bakers",
                "life/greatcanadianbakingshow/recipes": "gcbs-recipes-and-tips",
                "life/greatcanadianbakingshow/about": "gcbs-about",
                "life/jamieoliver": "life-jamie-oliver",
                "life/jamieoliver/recipes": "life-jamie-oliver-recipes",
                "life/jamieoliver/watch": "life-jamie-oliver-watch",
                "life/hellospring": "life-hello-spring",
                "life/hellospring/hellospring-livestream": "life-live-nature-streams",
                "life/hellospring/springscenes": "life-scenes-from-spring",
                "life/hellospring/showusyourspring": "life-show-us-your-spring",
                "life/hellospring/swimlane": "empty-category",
                "life/holiday": "holiday",
                "life/holiday/cbcgives": "cbc-gives",
                "life/home": "home",
                "life/work-money": "work-money",
                "life/pets": "pets",
                "life/style": "style",
                "life/travel": "travel",
                "life/video": "life-video",
                "life/wellness": "wellness",
                "life/fridgewars": "fridge-wars",
                "life/backintimeforwinter": "back-in-time-for-winter",
                "meta/hiddentestpage": "testing",
                music: "music",
                "music/firstplaylive": "music",
                "music/events": "music",
                "music/events/searchlight": "music",
                "music/events/festival": "music",
                "music/events/canadian-music-class-challenge": "music",
                "music/events/polaris": "music",
                "music/events/firstplaylive": "music",
                "music/explore": "music-explore",
                "music/junos": "junos",
                "music/junos/watch": "junos-archives",
                "music/junos/watch/video": "junos-watch-video",
                "music/junos/features": "junos-features",
                "music/junos/schedule": "junos-lists",
                "music/junos/news": "junos-news",
                "music/junos/sessions": "junos-sessions",
                news: "news",
                "news/canada": "empty-category",
                "news/canada/british-columbia": "empty-category",
                "news/canada/british-columbia/swimlane": "empty-category",
                "news/canada/british-columbia/community": "empty-category",
                "news/canada/british-columbia/video": "empty-category",
                "news/canada/new-brunswick/video": "empty-category",
                "news/canada/ottawa/video": "empty-category",
                "news/canada/manitoba/video": "empty-category",
                "news/canada/montreal/video": "empty-category",
                "news/canada/nova-scotia/video": "empty-category",
                "news/canada/windsor/video": "empty-category",
                "news/canada/saskatchewan/video": "empty-category",
                "news/canada/saskatoon/video": "empty-category",
                "news/canada/edmonton/video": "empty-category",
                "news/canada/newfoundland-labrador/video": "empty-category",
                "news/canada/prince-edward-island/video": "empty-category",
                "news/canada/thunder-bay/video": "empty-category",
                "news/canada/calgary": "empty-category",
                "news/canada/calgary/video": "empty-category",
                "news/canada/calgary/swimlane": "empty-category",
                "news/canada/calgary/community": "empty-category",
                "news/canada/edmonton": "empty-category",
                "news/canada/edmonton/swimlane": "empty-category",
                "news/canada/edmonton/community": "empty-category",
                "news/canada/hamilton": "empty-category",
                "news/canada/hamilton/swimlane": "empty-category",
                "news/canada/hamilton/video": "empty-category",
                "news/canada/kamloops": "empty-category",
                "news/canada/kitchener-waterloo": "empty-category",
                "news/canada/kitchener-waterloo/swimlane": "empty-category",
                "news/canada/kitchener-waterloo/video": "empty-category",
                "news/canada/london": "empty-category",
                "news/canada/london/swimlane": "empty-category",
                "news/canada/london/southwestsounds": "empty-category",
                "news/canada/london/video": "empty-category",
                "news/canada/manitoba": "empty-category",
                "news/canada/manitoba/swimlane": "empty-category",
                "news/canada/manitoba/community": "empty-category",
                "news/canada/montreal": "empty-category",
                "news/canada/montreal/quebecvotes2018": "empty-category",
                "news/canada/montreal/swimlane": "empty-category",
                "news/canada/montreal/community": "empty-category",
                "news/canada/new-brunswick": "empty-category",
                "news/canada/new-brunswick/nbvotes2018": "empty-category",
                "news/canada/new-brunswick/swimlane": "empty-category",
                "news/canada/new-brunswick/community": "empty-category",
                "news/canada/newfoundland-labrador": "empty-category",
                "news/canada/newfoundland-labrador/swimlane": "empty-category",
                "news/canada/newfoundland-labrador/community": "empty-category",
                "news/canada/north": "empty-category",
                "news/canada/north/swimlane": "empty-category",
                "news/canada/north/community": "empty-category",
                "news/canada/north/video": "empty-category",
                "news/canada/nova-scotia": "empty-category",
                "news/canada/nova-scotia/swimlane": "empty-category",
                "news/canada/nova-scotia/community": "empty-category",
                "news/canada/ottawa": "empty-category",
                "news/canada/ottawa/swimlane": "empty-category",
                "news/canada/ottawa/community": "empty-category",
                "news/canada/prince-edward-island": "empty-category",
                "news/canada/prince-edward-island/swimlane": "empty-category",
                "news/canada/prince-edward-island/community": "empty-category",
                "news/canada/saskatchewan": "empty-category",
                "news/canada/saskatchewan/swimlane": "empty-category",
                "news/canada/saskatchewan/community": "empty-category",
                "news/canada/saskatoon": "empty-category",
                "news/canada/saskatoon/swimlane": "empty-category",
                "news/canada/saskatoon/community": "empty-category",
                "news/canada/sudbury": "empty-category",
                "news/canada/sudbury/swimlane": "empty-category",
                "news/canada/sudbury/video": "empty-category",
                "news/canada/thunder-bay": "empty-category",
                "news/canada/thunder-bay/swimlane": "empty-category",
                "news/canada/toronto": "empty-category",
                "news/canada/toronto/swimlane": "empty-category",
                "news/canada/toronto/community": "empty-category",
                "news/canada/toronto/video": "empty-category",
                "news/canada/windsor": "empty-category",
                "news/canada/windsor/swimlane": "empty-category",
                "news/canada/manitoba/video-test": "empty-category",
                "news/canada/british-columbia/video-test": "empty-category",
                "news/canada/ottawa/video-test": "empty-category",
                "news/canada/nova-scotia/video-test": "empty-category",
                "news/canada/calgary/video-test": "empty-category",
                "news/canada/new-brunswick/video-test": "empty-category",
                "news/canada/saskatchewan/video-test": "empty-category",
                "news/canada/edmonton/video-test": "empty-category",
                "news/canada/montreal/video-test": "empty-category",
                "news/canada/newfoundland-labrador/video-test": "empty-category",
                "news/canada/windsor/video-test": "empty-category",
                "news/canada/toronto/video-test": "empty-category",
                "news/canada/saskatoon/video-test": "empty-category",
                "news/canada/london/video-test": "empty-category",
                "news/canada/thunder-bay/video-test": "empty-category",
                "news/canada/prince-edward-island/video-test": "empty-category",
                "news/canada/north/video-test": "empty-category",
                "news/canada/kitchener-waterloo/video-test": "empty-category",
                "news/canada/sudbury/video-test": "empty-category",
                "news/canada/hamilton/video-test": "empty-category",
                "news/canada/beingblackincanada/all": "empty-category",
                "news/canada/beingblackincanada/gem": "empty-category",
                "news/covid-19/featured": "empty-category",
                "news/covid-19/coping-with-covid-19": "empty-category",
                "news/covid-19/international-news": "world",
                "news/covid-19/fact-check": "",
                "news/covid-19/economy-and-finance": "",
                "news/covid-19/stories-of-hope": "",
                "news/covid-19/lives-remembered": "",
                "news/editorsblog": "empty-category",
                "news/elections/albertavotes2019": "empty-category",
                "news/elections/peivotes2019": "empty-category",
                "news/elections/nlvotes2019": "empty-category",
                "news/elections/nwtvotes2019": "empty-category",
                "news/elections/topstories": "empty-category",
                "news/elections/utilities": "empty-category",
                "news/investigates": "empty-category",
                "news/opinion": "empty-category",
                "news/gopublic": "empty-category",
                "news/joandonaldsonscholars": "empty-category",
                radio: "radio",
                "radio/podcasts": "podcasts",
                "radio/sks/transcripts": "someone-knows-something-transcripts",
                "radio/asithappens": "as-it-happens",
                "radio/thecurrent": "the-current",
                "radio/alone": "alone-a-love-story",
                "radio/becausenews": "because-news",
                "radio/checkup": "cross-country-checkup",
                "radio/costofliving": "radio-cost-of-living",
                "radio/day6": "day-6",
                "radio/docmakers": "the-docmakers",
                "radio/docproject": "the-doc-project",
                "radio/frontburner": "front-burner",
                "radio/ideas": "ideas",
                "radio/laughoutloud": "laugh-out-loud",
                "radio/nowornever": "now-or-never",
                "radio/outintheopen": "out-in-the-open",
                "radio/podcastnews": "podcast-news",
                "radio/podcastplaylist": "podcast-playlist",
                "radio/recall": "radio-recall",
                "radio/secretlifeofcanada": "the-secret-life-of-canada",
                "radio/spark": "spark",
                "radio/taiaskswhy": "tai-asks-why",
                "radio/tapestry": "tapestry",
                "radio/thedebaters": "the-debaters",
                "radio/thehouse": "the-house",
                "radio/thenextchapter": "the-next-chapter",
                "radio/thesundayedition": "sunday-edition",
                "radio/sunday": "sunday-edition",
                "radio/uncover": "uncover",
                "radio/undertheinfluence": "under-the-influence",
                "radio/unreserved": "unreserved",
                "radio/whatonearth": "radio-what-on-earth",
                "radio/whitecoat": "white-coat-black-art",
                "radio/writersandcompany": "writers-and-company",
                sports: "sports",
                "sports/baseball/mlb": "mlb",
                "sports/basketball/nba": "nba",
                "sports/basketball/cebl": "cebl",
                "sports/calgarystampede": "calgary-stampede",
                "sports/canada-150": "sports-canada-150",
                "sports/equestrian": "empty-category",
                "sports/football/cfl": "cfl",
                "sports/football/nfl": "nfl",
                "sports/golf": "golf",
                "sports/hockey/nhl": "nhl",
                "sports/iwd": "international-womens-day",
                "sports/olympics": "road-to-the-olympic-games",
                "sports/olympics/summer/highlights": "empty-category",
                "sports/olympics/winter/alpine-skiing": "alpine-skiing",
                "sports/olympics/summer/aquatics": "aquatics",
                "sports/olympics/winter/curling": "curling",
                "sports/olympics/summer/cycling": "cycling",
                "sports/olympics/winter/figure-skating": "figure-skating",
                "sports/olympics/winter/freestyle-skiing": "freestyle-skiing",
                "sports/olympics/summer/gymnastics": "gymnastics",
                "sports/olympics/promo": "rttog-promos",
                "sports/olympics/winter/sliding": "sliding",
                "sports/olympics/winter/snowboard": "snowboard",
                "sports/olympics/winter/speed-skating": "speed-skating",
                "sports/olympics/summer/trackandfield": "track-and-field",
                "sports/olympics/summer/schedule": "olympics-broadcast-schedule",
                "sports/olympics/summer/medals": "olympics-summer-medals",
                "sports/olympics/winter/volleyball": "volleyball",
                "sports/olympics/summer/sports": "olympic-summer-sports-list",
                "sports/olympics/winter/sports": "olympic-winter-sports-list",
                "sports/paralympics": "paralympics",
                "sports/paralympics/strip": "empty-category",
                "sports/podcasts": "sports-podcasts",
                "sports/podcasts/hnic": "hnic-podcast",
                "sports/podcasts/players-own-voice": "player-s-own-voice",
                "sports/rugby": "rugby",
                "sports/soccer": "soccer",
                "sports/soccer/cpl": "soccer-cpl",
                "sports/soccer/mls": "soccer-mls",
                "sports/soccer/worldcup": "fifa-world-cup",
                "sports/tennis": "tennis",
                "sports/video": "",
                "sports/beingblackincanada": "empty-category",
                topstories: "empty-category",
                television: "television",
                "television/fromthevaults": "from-the-vaults",
                "television/arcticvets": "empty-category",
                "television/stillstanding": "still-standing",
                "television/stillstanding/about": "still-standing-about",
                "television/battleoftheblades": "battle-of-the-blades",
                "television/battleoftheblades/skaters": "battle-of-the-blades-skaters",
                "television/battleoftheblades/blades-performances": "battle-of-the-blades-performances",
                "television/battleoftheblades/mini-blades": "battle-of-the-blades-mini-blades",
                "television/watch": "television-watch",
                "television/familyfeud": "family-feud",
                "television/higharctichaulers": "high-arctic-haulers",
                "television/thedetectives": "tv-the-detectives",
                "television/higharctichaulers/ship": "high-arctic-haulers-ship",
                "television/higharctichaulers/shore": "high-arctic-haulers-shore",
                "television/whatreyouat": "tv-what-re-you-at",
                "television/anyonesgame": "empty-category",
                "television/raceagainstthetide": "empty-category",
                visualstories: "visual-stories"
            }
        },
        8082: (e, a, t) => {
            "use strict";
            t.d(a, {
                Ue: () => o,
                mx: () => i,
                sL: () => n,
                yw: () => s
            });
            var n = {
                    CUSTOM: "custom",
                    LANDING: "landing",
                    DETAIL: "detail",
                    NOTFOUND: "notfound",
                    TOPIC: "topic",
                    BLANK: "blank",
                    SHOW: "show",
                    INDEX: "index"
                },
                i = [{
                    id: "radio/frequency",
                    name: "",
                    image: "https://i.cbc.ca/1.4066392.1500303304!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/cbc-logo-horizontal.jpg",
                    priority: null,
                    priorityWhenInlined: null,
                    metadata: {
                        tracking: {
                            subSection1: "radio1",
                            subSection2: "frequency",
                            subSection3: "",
                            subSection4: "",
                            contentArea: "radio",
                            contenttype: "index"
                        },
                        adHierarchy: "/",
                        polopolyDeptName: "",
                        polopolyExternalId: "",
                        pageTitle: "CBC Radio - Channels &amp; Frequencies",
                        pageDescription: "CBC Channels and Frequencies"
                    }
                }],
                s = "card-grid",
                o = "swimlane"
        },
        88101: (e, a, t) => {
            "use strict";
            t.d(a, {
                fm: () => B,
                RK: () => E,
                Dr: () => f,
                un: () => D,
                co: () => F,
                K7: () => te,
                aC: () => q,
                oQ: () => X,
                Le: () => ee,
                ZU: () => W,
                C2: () => Z,
                DW: () => I,
                Q7: () => G,
                If: () => _,
                Pm: () => T,
                Bb: () => M,
                Th: () => U,
                NJ: () => V,
                sD: () => P,
                UL: () => J,
                QJ: () => Y,
                F2: () => Q,
                WM: () => $,
                ch: () => N,
                $t: () => S,
                C_: () => x,
                eE: () => z,
                Cm: () => R,
                wP: () => j,
                gb: () => ae,
                wT: () => A,
                j0: () => K
            });
            var n = t(71002),
                i = t(60136),
                s = t(89611),
                o = (t(2041), t(95566), t(2612), t(83464), t(19496), t(30666), t(6129), t(53145), t(62153), t(9867), t(7231), t(86782), t(81291), t(14507)),
                r = t.n(o),
                c = t(93849),
                l = {
                    homepage: "",
                    "sports/olympics/summer": "https://www.cbc.ca/sports/olympics"
                },
                d = (0, c.KF)("Client.environment.domain"),
                p = t(23257),
                m = t(63578),
                w = t(97767),
                g = t(8082),
                h = t(74987),
                u = t(29274);
            const y = {
                2017: "2017",
                "2017/becoming-canadian": "2017-becoming-canadian",
                "2017/canada-a-peoples-history": "2017-canada-a-peoples-history",
                "2017/canadais": "2017-canada-is",
                "2017/canadathestoryofus": "2017-canada-the-story-of-us",
                "2017/canadathestoryofus/csou-episodes": "2017-canada-the-story-of-us-episodes",
                "2017/nye": "2017-nye",
                "2017/truenorthcalling": "2017-true-north-calling",
                "2017/we-are-the-best": "2017-we-are-the-best",
                "2017/wearecanada": "2017-we-are-canada",
                "2017/whatsyourstory": "2017-whats-your-story",
                "2017/wild-canadian-year": "2017-wild-canadian-year",
                archives: "archives",
                "archives/arts": "archives-arts-entertainment",
                "archives/history": "archives-history",
                "archives/sports": "archives-sports",
                arts: "arts",
                "arts/watch": "arts-watch",
                "arts/read": "arts-read",
                "arts/canada-in-the-frame": "arts-canada-in-the-frame",
                "arts/canadianscreenawards": "arts-canadian-screen-awards",
                "arts/insurgenceresurgence": "arts-insurgence-resurgence",
                "arts/crashgallery": "arts-crash-gallery",
                "arts/disruptingdesign": "arts-disrupting-design",
                "arts/eddyrogo": "arts-the-re-education-of-eddy-rogo",
                "arts/exhibitionists": "arts-exhibitionists",
                "arts/interruptthisprogram": "arts-interrupt-this-program",
                "arts/inthemaking": "in-the-making",
                "arts/secretpath": "arts-secret-path",
                "arts/thecollective": "arts-the-collective",
                "arts/thefilmmakers": "arts-the-filmmakers",
                "arts/arts-watch-on-gem": "arts-watch-on-gem",
                "arts/artuncontained": "arts",
                books: "books",
                "books/canadareads": "books-canada-reads",
                "books/literaryprizes": "books-literary-prizes",
                "books/canadawrites": "books-canada-writes",
                "books/readinglists": "books-reading-lists",
                "books/ggbooks": "books-governor-generals-literary-awards",
                "books/gillerprize": "books-giller-prize",
                "books/kids": "books-presented-by-td",
                "books/transmission": "books-transmission",
                cape: "cape",
                comedy: "comedy",
                "comedy/instagram": "comedy-instagram",
                cree: "cree",
                documentaries: "documentaries",
                "documentaries/specials": "docs-specials",
                "documentaries/features": "docs-features-swimlane",
                "documentaries/brief-but-spectacular": "brief-but-spectacular",
                "documentaries/the-oland-murder": "the-oland-murder",
                "documentaries/hotdocsoncbc": "docs-hot-docs-at-home",
                "documentaries/goodpeople": "docs-good-people",
                "documentaries/enslaved": "docs-enslaved",
                homepage: "homepage",
                "homepage/featured": "homepage-featured",
                "homepage/gem": "homepage-gem",
                "homepage/paralympics": "sports-paralympics",
                indspire: "indspire",
                "learning-english": "learning-english",
                "learning-english/level-1": "learning-english-level-1",
                "learning-english/level-2": "learning-english-level-2",
                "learning-english/past-lessons": "learning-english-past-lessons",
                "learning-english/past-lessons/calgary": "learning-english-past-lessons-calgary",
                "learning-english/past-lessons/edmonton": "learning-english-past-lessons-edmonton",
                life: "life",
                "life/culture": "life-culture",
                "life/food": "life-food",
                "life/giveaways": "life-giveaways",
                "life/backintimefordinner": "life-back-in-time-for-dinner",
                "life/backintimefordinner/episodes": "life-back-in-time-for-dinner-episodes",
                "life/greatcanadianbakingshow": "life-great-canadian-baking-show",
                "life/greatcanadianbakingshow/bakers": "life-great-canadian-baking-show-bakers",
                "life/greatcanadianbakingshow/recipes": "life-great-canadian-baking-show-recipes",
                "life/greatcanadianbakingshow/about": "life-great-canadian-baking-show-about",
                "life/jamieoliver": "life-jamie-oliver",
                "life/jamieoliver/recipes": "life-jamie-oliver-recipes",
                "life/jamieoliver/watch": "life-jamie-oliver-watch",
                "life/hellospring": "life-hello-spring",
                "life/hellospring/hellospring-livestream": "life-live-nature-streams",
                "life/hellospring/springscenes": "life-scenes-from-spring",
                "life/hellospring/showusyourspring": "life-show-us-your-spring",
                "life/hellospring/swimlane": "life-hello-spring-swimlane",
                "life/holiday": "life-holiday",
                "life/holiday/cbcgives": "life-holiday-cbc-gives",
                "life/home": "life-home",
                "life/work-money": "life-personal-finance",
                "life/pets": "life-pets",
                "life/style": "life-style",
                "life/thegoods": "life-the-goods",
                "life/getawayguide": "life-getaway-guide",
                "life/travel": "life-travel",
                "life/video": "life-video",
                "life/wellness": "life-wellness",
                "life/fridgewars": "tv-fridge-wars",
                "life/backintimeforwinter": "back-in-time-for-winter",
                "meta/hiddentestpage": "meta-hiddentestpage",
                music: "music-read",
                "music/decadeofdrake": "music-decade-of-drake",
                "music/read/video": "music-read-video",
                "music/firstplaylive": "music-first-play-live",
                "music/events": "music-events",
                "music/events/searchlight": "music-events-searchlight",
                "music/events/festival": "music-events-festival",
                "music/events/canadian-music-class-challenge": "music-events-canadian-music-class-challenge",
                "music/events/polaris": "music-events-polaris",
                "music/events/firstplaylive": "music-first-play-live",
                "music/explore": "music-explore",
                "music/the-intro": "music-the-intro",
                "music/junos": "music-junos",
                "music/junos/watch": "music-junos-watch",
                "music/junos/watch/video": "music-junos-watch-video",
                "music/junos/features": "music-junos-features",
                "music/junos/schedule": "music-junos-schedule",
                "music/junos/news": "music-junos-news",
                "music/junos/sessions": "music-junos-sessions",
                news: "news",
                "news/canada": "news-canada-hybrid",
                "news/canada/british-columbia": "news-canada-british-columbia-hybrid",
                "news/canada/british-columbia/swimlane": "news-canada-bc-headlines",
                "news/canada/british-columbia/community": "news-canada-british-columbia-community",
                "news/canada/british-columbia/video": "news-canada-british-columbia-video",
                "news/canada/new-brunswick/video": "news-canada-new-brunswick-video",
                "news/canada/ottawa/video": "news-canada-ottawa-video",
                "news/canada/manitoba/video": "news-canada-manitoba-video",
                "news/canada/montreal/video": "news-canada-montreal-video",
                "news/canada/saskatchewan/video": "news-canada-saskatchewan-video",
                "news/canada/edmonton/video": "news-canada-edmonton-video",
                "news/canada/newfoundland-labrador/video": "news-canada-newfoundland-labrador-video",
                "news/canada/prince-edward-island/video": "news-canada-prince-edward-island-video",
                "news/canada/thunder-bay/video": "news-canada-thunder-bay-video",
                "news/canada/calgary": "news-canada-calgary-hybrid",
                "news/canada/calgary/video": "news-canada-calgary-video",
                "news/canada/calgary/swimlane": "news-canada-calgary-headlines",
                "news/canada/calgary/community": "news-canada-calgary-community",
                "news/canada/calgary/the-road-ahead": "news-canada-calgary-the-road-ahead",
                "news/canada/edmonton": "news-canada-edmonton-hybrid",
                "news/canada/edmonton/swimlane": "news-canada-edmonton-headlines",
                "news/canada/edmonton/community": "news-canada-edmonton-community",
                "news/canada/hamilton": "news-canada-hamilton-hybrid",
                "news/canada/hamilton/swimlane": "news-canada-hamilton-headlines",
                "news/canada/hamilton/video": "news-canada-hamilton-video",
                "news/canada/kamloops": "news-canada-kamloops",
                "news/canada/kitchener-waterloo": "news-canada-kitchener-waterloo-hybrid",
                "news/canada/kitchener-waterloo/swimlane": "news-canada-kitchener-waterloo-headlines",
                "news/canada/kitchener-waterloo/video": "news-canada-kitchener-waterloo-video",
                "news/canada/london": "news-canada-london-hybrid",
                "news/canada/london/swimlane": "news-canada-london-headlines",
                "news/canada/london/southwestsounds": "news-canada-london-southwest-sounds",
                "news/canada/london/video": "news-canada-london-video",
                "news/canada/manitoba": "news-canada-manitoba-hybrid",
                "news/canada/manitoba/swimlane": "news-canada-manitoba-headlines",
                "news/canada/manitoba/community": "news-canada-manitoba-community",
                "news/canada/montreal": "news-canada-montreal-hybrid",
                "news/canada/montreal/swimlane": "news-canada-montreal-headlines",
                "news/canada/montreal/community": "news-canada-montreal-community",
                "news/canada/montreal/quebecvotes2018": "elections-2018-quebec",
                "news/canada/montreal/quebecvotes2018/swimlane": "quebec-features",
                "news/canada/new-brunswick": "news-canada-new-brunswick-hybrid",
                "news/canada/new-brunswick/swimlane": "news-canada-new-brunswick-headlines",
                "news/canada/new-brunswick/community": "news-canada-new-brunswick-community",
                "news/canada/new-brunswick/nbvotes2018": "elections-2018-new-brunswick",
                "news/canada/new-brunswick/nbvotes2018/swimlane": "new-brunswick-features",
                "news/canada/newfoundland-labrador": "news-canada-newfoundland-labrador-hybrid",
                "news/canada/newfoundland-labrador/swimlane": "news-canada-newfoundland-labrador-headlines",
                "news/canada/newfoundland-labrador/community": "news-canada-newfoundland-labrador-community",
                "news/elections/nlvotes2019": "elections-2019-newfoundland",
                "news/elections/nwtvotes2019": "elections-2019-nwt",
                "news/canada/north": "news-canada-north-hybrid",
                "news/canada/north/swimlane": "news-canada-north-headlines",
                "news/canada/north/community": "news-canada-north-community",
                "news/canada/north/video": "news-canada-north-video-metadata",
                "news/canada/nova-scotia": "news-canada-nova-scotia-hybrid",
                "news/canada/nova-scotia/video": "news-canada-nova-scotia-video",
                "news/canada/nova-scotia/swimlane": "news-canada-nova-scotia-headlines",
                "news/canada/nova-scotia/community": "news-canada-nova-scotia-community",
                "news/canada/ottawa": "news-canada-ottawa-hybrid",
                "news/canada/ottawa/swimlane": "news-canada-ottawa-headlines",
                "news/canada/ottawa/community": "news-canada-ottawa-community",
                "news/canada/prince-edward-island": "news-canada-prince-edward-island-hybrid",
                "news/canada/prince-edward-island/swimlane": "news-canada-pei-headlines",
                "news/canada/prince-edward-island/community": "news-canada-prince-edward-island-community",
                "news/canada/saskatchewan": "news-canada-saskatchewan-hybrid",
                "news/canada/saskatchewan/swimlane": "news-canada-saskatchewan-headlines",
                "news/canada/saskatchewan/community": "news-canada-saskatchewan-community",
                "news/canada/saskatoon": "news-canada-saskatoon-hybrid",
                "news/canada/saskatoon/video": "news-canada-saskatoon-video",
                "news/canada/saskatoon/swimlane": "news-canada-saskatoon-headlines",
                "news/canada/saskatoon/community": "news-canada-saskatoon-community",
                "news/canada/sudbury": "news-canada-sudbury-hybrid",
                "news/canada/sudbury/swimlane": "news-canada-sudbury-headlines",
                "news/canada/sudbury/video": "news-canada-sudbury-video",
                "news/canada/thunder-bay": "news-canada-thunder-bay-hybrid",
                "news/canada/thunder-bay/swimlane": "news-canada-thunder-bay-headlines",
                "news/canada/toronto": "news-canada-toronto-hybrid",
                "news/canada/toronto/swimlane": "news-canada-toronto-headlines",
                "news/canada/toronto/community": "news-canada-toronto-community",
                "news/canada/toronto/video": "news-canada-toronto-video-metadata",
                "news/canada/windsor": "news-canada-windsor-hybrid",
                "news/canada/windsor/video": "news-canada-windsor-video",
                "news/canada/windsor/swimlane": "news-canada-windsor-headlines",
                "news/canada/manitoba/video-test": "news-canada-manitoba-video",
                "news/canada/british-columbia/video-test": "news-canada-british-columbia-video",
                "news/canada/ottawa/video-test": "news-canada-ottawa-video",
                "news/canada/nova-scotia/video-test": "news-canada-nova-scotia-video",
                "news/canada/calgary/video-test": "news-canada-calgary-video",
                "news/canada/new-brunswick/video-test": "news-canada-new-brunswick-video",
                "news/canada/saskatchewan/video-test": "news-canada-saskatchewan-video",
                "news/canada/edmonton/video-test": "news-canada-edmonton-video",
                "news/canada/montreal/video-test": "news-canada-montreal-video",
                "news/canada/newfoundland-labrador/video-test": "news-canada-newfoundland-labrador-video",
                "news/canada/windsor/video-test": "news-canada-southern-ontario-video-metadata",
                "news/canada/toronto/video-test": "news-canada-toronto-video-metadata",
                "news/canada/saskatoon/video-test": "news-canada-saskatoon-video",
                "news/canada/london/video-test": "news-canada-southern-ontario-video-metadata",
                "news/canada/thunder-bay/video-test": "news-canada-northern-ontario-video-metadata",
                "news/canada/prince-edward-island/video-test": "news-canada-prince-edward-island-video-metadata",
                "news/canada/north/video-test": "news-canada-north-video-metadata",
                "news/canada/kitchener-waterloo/video-test": "news-canada-southern-ontario-video-metadata",
                "news/canada/sudbury/video-test": "news-canada-northern-ontario-video-metadata",
                "news/canada/hamilton/video-test": "news-canada-southern-ontario-video-metadata",
                "news/canada/beingblackincanada/all": "being-black-in-canada-hybrid",
                "news/canada/beingblackincanada/gem": "news-canada-beingblackincanada-gem",
                "news/canada/beingblackincanada/archives": "being-black-in-canada-archives",
                "news/covid-19/featured": "news-covid-19-swim-lane",
                "news/covid-19/coping-with-covid-19": "coronavirus-guide",
                "news/editorsblog": "news-editors-blog",
                "news/elections/albertavotes2019": "elections-2019-alberta",
                "news/elections/peivotes2019": "elections-2019-pei",
                "news/elections/topstories": "elections-2019-canada-votes-top",
                "news/elections/utilities": "elections-2019-canada-votes-utilities",
                "news/gopublic": "news-go-public",
                "news/investigates": "news-investigates",
                "news/joandonaldsonscholars": "news-joan-donaldson-scholars",
                "news/opinion": "news-opinion",
                "news/politics/swimlane": "ask-elections-2021",
                "news/politics/powerandpolitics": "news-politics-power-and-politics",
                "news/theinvestigators": "news-the-investigators",
                "news/thenational": "news-the-national",
                "news/theweekly": "news-the-weekly",
                radio: "radio",
                "radio/podcasts": "radio-podcast-feature-lineup",
                "radio/alone": "radio-alone-a-love-story",
                "radio/asithappens": "radio-as-it-happens",
                "radio/becausenews": "radio-because-news",
                "radio/checkup": "radio-checkup",
                "radio/checkup/blog": "radio-checkup-blog",
                "radio/costofliving": "radio-cost-of-living",
                "radio/day6": "radio-day-6",
                "radio/docmakers": "radio-docmakers",
                "radio/docproject": "radio-the-doc-project",
                "radio/findingcleo": "radio-finding-cleo",
                "radio/findingcleo/transcripts": "radio-finding-cleo-transcripts",
                "radio/frontburner": "radio-front-burner",
                "radio/ideas": "radio-ideas",
                "radio/iqpodcast": "radio-inappropriate-questions",
                "radio/iqpodcast/transcripts": "radio-inappropriate-questions-transcripts",
                "radio/laughoutloud": "radio-laugh-out-loud",
                "radio/loveme": "radio-love-me",
                "radio/micdrop": "radio-mic-drop",
                "radio/micdrop/transcripts": "radio-mic-drop-transcripts",
                "radio/nowornever": "radio-now-or-never",
                "radio/ondrugs": "radio-on-drugs",
                "radio/opp": "radio-other-peoples-problems",
                "radio/outintheopen": "radio-out-in-the-open",
                "radio/personalbest": "radio-personal-best",
                "radio/podcastnews": "radio-podcast-news",
                "radio/podcastplaylist": "radio-podcast-playlist",
                "radio/podcastplaylist/blog": "radio-podcast-playlist-blog",
                "radio/q/blog": "radio-q-blog",
                "radio/q/video": "radio-q-video",
                "radio/quirks": "radio-quirks-quarks",
                "radio/quirks/blog": "radio-quirks-quarks-blog",
                "radio/recall": "radio-recall",
                "radio/secretlifeofcanada": "secret-life-of-canada",
                "radio/secretlifeofcanada/transcripts": "radio-secret-life-of-canada-transcripts",
                "radio/sleepover": "radio-sleepover",
                "radio/sks": "radio-someone-knows-something",
                "radio/sks/season1": "radio-someone-knows-something-season-1",
                "radio/sks/season2": "radio-someone-knows-something-season-2",
                "radio/sks/season3": "radio-someone-knows-something-season-3",
                "radio/sks/season4": "radio-someone-knows-something-season-4",
                "radio/sks/season5": "radio-someone-knows-something-season-5",
                "radio/sks/season6": "radio-someone-knows-something",
                "radio/sks/transcripts": "radio-someone-knows-something-transcripts",
                "radio/spark": "radio-spark",
                "radio/taiaskswhy": "radio-tai-asks-why",
                "radio/taiaskswhy/teachingguides": "radio-tai-asks-why-teaching-guides",
                "radio/taiaskswhy/transcripts": "radio-tai-asks-why-transcripts",
                "radio/tapestry": "radio-tapestry",
                "radio/thecurrent": "radio-the-current",
                "radio/thedebaters": "radio-the-debaters",
                "radio/thefridgelight": "radio-the-fridge-light",
                "radio/thehouse": "radio-the-house",
                "radio/thenextchapter": "radio-the-next-chapter",
                "radio/thesundayedition": "radio-the-sunday-edition",
                "radio/sunday": "radio-the-sunday-edition",
                "radio/uncover": "radio-uncover",
                "radio/uncover/season1": "radio-uncover-season-1",
                "radio/uncover/season2": "radio-uncover-season-2",
                "radio/uncover/season3": "radio-uncover-season-3",
                "radio/uncover/season4": "radio-uncover-season-4",
                "radio/uncover/season5": "radio-uncover-season-5",
                "radio/uncover/season6": "radio-uncover-season-6",
                "radio/uncover/season7": "radio-uncover-season-7",
                "radio/uncover/season8": "radio-uncover",
                "radio/uncover/transcripts": "radio-uncover-transcripts",
                "radio/undertheinfluence": "radio-under-the-influence",
                "radio/unreserved": "radio-unreserved",
                "radio/whatonearth": "radio-what-on-earth",
                "radio/whitecoat": "radio-white-coat-black-art",
                "radio/whitecoat/blog": "radio-white-coat-black-art-blog",
                "radio/writersandcompany": "radio-writers-and-company",
                "radio/writersandcompany/blog": "radio-writers-and-company-blog",
                reflections: "canadian-reflections",
                sports: "sports",
                "sports/baseball/mlb": "sports-mlb",
                "sports/basketball/nba": "sports-nba",
                "sports/basketball/cebl": "sports-cebl",
                "sports/calgarystampede": "sports-calgary-stampede",
                "sports/calgarystampede/strip": "sports-calgary-stampede-video",
                "sports/canada-150": "sports-canada-150",
                "sports/crashed-ice": "sports-crashed-ice",
                "sports/equestrian": "sports-equestrian",
                "sports/football/cfl": "sports-cfl",
                "sports/football/nfl": "sports-nfl",
                "sports/golf": "sports-golf",
                "sports/hockey/nhl": "sports-nhl",
                "sports/iwd": "sports-iwd-q",
                "sports/olympics": "sports-olympics",
                "sports/olympics/winter/alpine-skiing": "sports-alpine-skiing",
                "sports/olympics/summer/aquatics": "sports-aquatics",
                "sports/olympics/winter/curling": "sports-curling",
                "sports/olympics/summer/cycling": "sports-cycling",
                "sports/olympics/winter/figure-skating": "sports-figure-skating",
                "sports/olympics/winter/freestyle-skiing": "sports-freestyle-skiing",
                "sports/olympics/summer/gymnastics": "sports-gymnastics",
                "sports/olympics/promo": "sports-promo",
                "sports/olympics/winter/sliding": "sports-sliding",
                "sports/olympics/winter/snowboard": "sports-snowboard",
                "sports/olympics/winter/speed-skating": "sports-speedskating",
                "sports/olympics/summer/trackandfield": "sports-track-and-field",
                "sports/olympics/summer/volleyball": "sports-volleyball",
                "sports/olympics/summer/sports": "olympic-summer-sports-list",
                "sports/olympics/summer/highlights": "summer-olympics-highlights",
                "sports/paralympics": "sports-paralympics",
                "sports/paralympics/strip": "sports-paralympics-strip",
                "sports/podcasts": "sports-podcasts",
                "sports/podcasts/hnic": "sports-hnic-podcast",
                "sports/podcasts/players-own-voice": "players-own-voice-podcast",
                "sports/rugby": "sports-rugby",
                "sports/soccer": "sports-soccer",
                "sports/soccer/mls": "sports-soccer-mls",
                "sports/soccer/cpl": "sports-soccer-cpl",
                "sports/soccer/worldcup": "sports-soccer-worldcup",
                "sports/tennis": "sports-tennis",
                "sports/video": "sports-video",
                "sports/beingblackincanada": "being-black-in-canada-sports",
                television: "television",
                "television/fromthevaults": "tv-from-the-vaults",
                "television/arcticvets": "tv-artic-vets",
                "television/stillstanding": "tv-still-standing",
                "television/stillstanding/about": "tv-still-standing-about",
                "television/battleoftheblades": "tv-battle-of-the-blades",
                "television/battleoftheblades/skaters": "tv-battle-of-the-blades-skaters",
                "television/battleoftheblades/blades-performances": "tv-battle-of-the-blades-performances",
                "television/battleoftheblades/mini-blades": "tv-battle-of-the-blades-mini-blades",
                "television/watch": "television-watch",
                "television/familyfeud": "tv-family-feud",
                "television/higharctichaulers": "tv-high-arctic-haulers",
                "television/thedetectives": "tv-the-detectives",
                "television/higharctichaulers/ship": "tv-high-arctic-haulers-ship",
                "television/higharctichaulers/shore": "tv-high-arctic-haulers-shore",
                "television/whatreyouat": "tv-what-re-you-at",
                "television/anyonesgame": "anyones-game",
                "television/raceagainstthetide": "television-raceagainstthetide",
                visualstories: ""
            };
            var b = t(83911),
                v = t(41718);

            function k() {
                k = function(e, a) {
                    return new t(e, void 0, a)
                };
                var e = RegExp.prototype,
                    a = new WeakMap;

                function t(e, n, i) {
                    var o = RegExp(e, n);
                    return a.set(o, i || a.get(e)), (0, s.Z)(o, t.prototype)
                }

                function o(e, t) {
                    var n = a.get(t);
                    return Object.keys(n).reduce((function(a, t) {
                        var i = n[t];
                        if ("number" == typeof i) a[t] = e[i];
                        else {
                            for (var s = 0; void 0 === e[i[s]] && s + 1 < i.length;) s++;
                            a[t] = e[i[s]]
                        }
                        return a
                    }), Object.create(null))
                }
                return (0, i.Z)(t, RegExp), t.prototype.exec = function(a) {
                    var t = e.exec.call(this, a);
                    if (t) {
                        t.groups = o(t, this);
                        var n = t.indices;
                        n && (n.groups = o(n, this))
                    }
                    return t
                }, t.prototype[Symbol.replace] = function(t, i) {
                    if ("string" == typeof i) {
                        var s = a.get(this);
                        return e[Symbol.replace].call(this, t, i.replace(/\$<([^>]+)>/g, (function(e, a) {
                            var t = s[a];
                            return "$" + (Array.isArray(t) ? t.join("$") : t)
                        })))
                    }
                    if ("function" == typeof i) {
                        var r = this;
                        return e[Symbol.replace].call(this, t, (function() {
                            var e = arguments;
                            return "object" != (0, n.Z)(e[e.length - 1]) && (e = [].slice.call(e)).push(o(e, r)), i.apply(this, e)
                        }))
                    }
                    return e[Symbol.replace].call(this, t, i)
                }, k.apply(this, arguments)
            }

            function f(e) {
                var a = "",
                    t = 0,
                    n = 0;
                return e ? (n = "/" === (e = e.toLowerCase()).charAt(0) ? 1 : 0, a = (t = e.indexOf("/", n)) < 0 ? e.substring(n) : e.substring(n, t)) : v.default.error("(getBaseSection) no path provided"), a
            }

            function S(e, a, t) {
                var n = a;
                if (!0 !== e) {
                    var i = t.urlCategory,
                        s = t.slug,
                        o = t.sourceId,
                        r = t.queryParams,
                        c = i.toLowerCase(),
                        l = "";
                    r && (l = Object.keys(r).reduce((function(e, a, t) {
                        return e + "".concat(0 === t ? "?" : "&").concat(a, "=").concat(r[a])
                    }), "")), n = "/".concat(c, "/").concat(C(s), "-").concat(o).concat(l)
                }
                return n
            }

            function C(e, a) {
                if (!e) return "";
                a || (a = "-");
                var t = e.toString().replace(/[\s.]+/g, a).toLowerCase().replace(new RegExp("[^a-z0-9".concat(a, "]"), "g"), a).replace(new RegExp("".concat(a, "+"), "g"), a);
                for (t.charAt(t.length - 1) === a && (t = t.substring(0, t.length - 1));
                    "-" === t.charAt(0);) t = t.substring(1, t.length);
                return t
            }

            function x() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    a = arguments.length > 1 ? arguments[1] : void 0,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (!a || "none" === a.toLowerCase()) return "";
                var i = n ? "-".concat(C(a)) : a;
                return !e && i.match(/^[0-9]+/) && (e = "app"), "".concat(e).concat(i).concat(t)
            }

            function j(e) {
                return "string" === typeof e ? e.replace(/^((https?:\/\/)?(www\.)?((ocelot-.+\.int|qa|dev).nm\.)?cbc\.ca)(\/beta)?/, "") : e
            }
            var I = function(e) {
                    if (e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? e.trim() : e.trim().toLowerCase()) {
                        var a = e.indexOf("/");
                        if (-1 === a) return e;
                        if (a++, "/" === e.charAt(a)) {
                            if (a++, -1 === (a = e.indexOf("/", a)) || a === e.length - 1) return "";
                            a++
                        }
                        return L(e) ? e.substring(a, e.lastIndexOf("?")) : O(e) ? e.substring(a, e.lastIndexOf("#")) : e.substring(a)
                    }
                    return e
                },
                L = function(e) {
                    return !!e && e.lastIndexOf("?") > -1
                },
                O = function(e) {
                    return !!e && e.lastIndexOf("#") > -1
                },
                T = function(e, a) {
                    var t = e.split("/");
                    return 0 === t.length || t.length <= a ? "" : t[a] || ""
                },
                _ = function(e, a) {
                    return a && e ? e.substring(0, e.lastIndexOf("/")) : e.endsWith("/") ? e.substring(0, e.length - 1) : e
                },
                A = function(e) {
                    if (e) return e.replace(/\/beta\//, "/")
                },
                N = function(e) {
                    return P(e) || new RegExp("/^(http(s)?:)?/".concat(d, "/i")).test(e) ? e : (e = e.replace(/^\//, ""), "https://".concat(d, "/").concat(e))
                },
                R = function(e) {
                    return e in l ? l[e] : e
                },
                P = function(e) {
                    if ("string" !== typeof e) throw new TypeError("Expected a string");
                    return new RegExp("^(?:[a-z]+:)?//", "i").test(e)
                },
                M = function(e, a, t, n) {
                    var i = null,
                        s = t,
                        o = e[a];
                    if (o && s) {
                        var r = null;
                        o.forEach((function(e) {
                            var a = e.nestedPath && e.nestedUrl === "/".concat(n);
                            (s === e.alias || s === e.showSlug || a) && (r = e)
                        })), r && (i = {
                            contentSection: n,
                            metaTitle: r.title,
                            config: r
                        })
                    }
                    return i
                },
                W = function(e, a, t, n, i) {
                    var s = M(p.u, t, n, a),
                        o = e[a] ? e[a] : null;
                    if (null !== s) try {
                        Object.assign(o, s.config)
                    } catch (r) {
                        return null
                    }
                    return o && Object.assign(o, {
                        hasMenu: i,
                        baseSection: t,
                        subSection: n
                    }), o
                },
                B = function(e) {
                    return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
                },
                H = function(e) {
                    if (!e) return "";
                    var a = w.SA[e],
                        t = a && a.title;
                    return t || B(e)
                },
                E = function(e) {
                    var a, t = H(e.baseSection),
                        n = e.subSection ? "- ".concat(H(e.subSection)) : "",
                        i = M(p.u, e.baseSection, null === (a = e.subSection) || void 0 === a ? void 0 : a.trim());
                    i && i.metaTitle && (n = "- ".concat(i.metaTitle));
                    return "topic" === e.pageType ? "CBC ".concat(decodeURIComponent(e.path).split("/").join(" ")) : "CBC ".concat(t, " ").concat(n)
                },
                D = function(e) {
                    return b.Z[e] || ""
                },
                q = function(e) {
                    return y[e] || ""
                },
                U = function(e) {
                    return u._e[e] || ""
                },
                V = function(e) {
                    return u.JI[e] || ""
                },
                F = function(e) {
                    if (e in u.M5) {
                        var a = u.M5[e];
                        return "empty" === a ? "" : D(a)
                    }
                    return null
                },
                G = function(e) {
                    return m.nv.find((function(a) {
                        return !(!a || a.path !== e) || (a && a.navigation ? a.navigation.some((function(a) {
                            return a.link && a.link === "/".concat(e) && a.isCommunity && !0 === a.isCommunity
                        })) : void 0)
                    }))
                },
                z = function(e, a) {
                    if (m.nv.map((function(e) {
                            return e.path
                        })).indexOf(e) > -1) return "/".concat(e);
                    var t = e && "string" === typeof e && e.split("/");
                    return t.length > 2 ? "/".concat(t[0], "/").concat(t[1], "/").concat(t[2]) : a
                },
                K = function(e) {
                    var a = e.split("/");
                    return a.splice("-1", "1"), a.join("/")
                },
                Q = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e && e.contentId
                },
                J = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e && e.section ? g.mx.find((function(a) {
                        return a.id === e.section
                    })) : null
                },
                Z = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e ? Q(e) ? g.sL.DETAIL : function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            a = !1;
                        return e && (a = w.IV.some((function(a) {
                            return e.path.includes("".concat(a, "/"))
                        }))), a
                    }(e) ? g.sL.TOPIC : function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e && D(e.section)
                    }(e) ? g.sL.LANDING : function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e ? M(p.u, e.baseSection, e.subSection ? e.subSection.trim() : "", e.section) : null
                    }(e) ? g.sL.SHOW : J(e) ? g.sL.CUSTOM : function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return !!e.section && e.section.startsWith("player") && !e.section.startsWith("player/play")
                    }(e) ? g.sL.INDEX : g.sL.BLANK : g.sL.NOTFOUND
                },
                Y = function() {
                    return Boolean((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).contentId)
                },
                $ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return /^olympics-(summer|winter|paralympics)$/.test(e.baseNavSection) || /sports\/olympics\/(summer|winter|paralympics)/.test(e.path)
                },
                X = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = null;
                    if ("olympics-summer" === e.baseNavSection) a = "summer";
                    else if ("olympics-winter" === e.baseNavSection) a = "winter";
                    else if ("olympics-paralympics" === e.baseNavSection) a = "paralympics";
                    else if (e.path.includes("sports/paralympics")) a = "paralympics";
                    else {
                        var t, n;
                        a = (null === (n = (null !== (t = k(/sports\/olympics\/(summer|winter)/, {
                            season: 1
                        }).exec(e.path)) && void 0 !== t ? t : {}).groups) || void 0 === n ? void 0 : n.season) || null
                    }
                    return a
                },
                ee = function(e) {
                    return r()({
                        detail: Y(e)
                    }, x("", e.baseSection, "Theme", !1), x("", e.pageType, "Page", !1), x("", e.contentType, "Type", !1), x("", e.subSection, "Section", !1))
                };

            function ae(e) {
                var a = e.category,
                    t = e.lineup,
                    n = e.sectionExists;
                return (null !== t || null !== a) && (void 0 !== a && void 0 !== t && !n)
            }
            var te = function() {
                return (0, h.j)() ? window.__DOMAIN_HOST__ : process.env.DOMAIN_HOST
            }
        },
        49939: e => {
            function a(e) {
                var a = new Error("Cannot find module '" + e + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            a.keys = () => [], a.resolve = a, a.id = 49939, e.exports = a
        },
        84292: () => {}
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-5151.86042be38755972c60b5.js.map