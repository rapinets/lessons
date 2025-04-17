! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8420a894-b847-405e-8abd-5afb7f2e4705", e._sentryDebugIdIdentifier = "sentry-dbid-8420a894-b847-405e-8abd-5afb7f2e4705")
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
    [8922], {
        72769: (e, n, t) => {
            "use strict";

            function a(e) {
                return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e)
            }
            t.d(n, {
                Z: () => o
            });
            const o = function e(n, t) {
                if (n === t) return !0;
                if (null == n || null == t) return !1;
                if (Array.isArray(n)) return Array.isArray(t) && n.length === t.length && n.every((function(n, a) {
                    return e(n, t[a])
                }));
                if ("object" === typeof n || "object" === typeof t) {
                    var o = a(n),
                        r = a(t);
                    return o !== n || r !== t ? e(o, r) : Object.keys(Object.assign({}, n, t)).every((function(a) {
                        return e(n[a], t[a])
                    }))
                }
                return !1
            }
        },
        38059: (e, n) => {
            (() => {
                "use strict";
                var e, t = {
                        d: (e, n) => {
                            for (var a in n) t.o(n, a) && !t.o(e, a) && Object.defineProperty(e, a, {
                                enumerable: !0,
                                get: n[a]
                            })
                        },
                        o: (e, n) => Object.prototype.hasOwnProperty.call(e, n),
                        r: e => {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }), Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }
                    },
                    a = {};
                t.r(a), t.d(a, {
                        GQL_CONTENTITEM_FRAGMENT_FOR_MEDIA: () => r,
                        default: () => u,
                        fetchFromGraphQL: () => d,
                        fetchMediaData: () => i,
                        fetchRecommendedItems: () => l,
                        getVersion: () => s,
                        transformMediaItemToMediaData: () => o
                    }),
                    function(e) {
                        e.DEV = "dev", e.QA = "qa", e.PROD = "prod", e.STG = "stg"
                    }(e || (e = {}));
                const o = e => {
                        var n, t, a, o, r, d, i, l, s, u, c;
                        if (!(null == e ? void 0 : e.media)) return null;
                        const m = {};
                        return m.sourceId = e.sourceId, m.mediaId = e.mediaId, m.mediaNetId = null !== (t = null === (n = e.media.id) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : null, m.callSign = e.media.callSign, m.source = e.source, m.format = e.type, m.assets = e.media.assets || null, m.adOrder = e.media.adOrder, m.adCategoryExclusion = e.media.adCategoryExclusion, m.isLive = "Live" === e.media.streamType, m.contentArea = e.media.contentArea, m.contentTier = null !== (o = null === (a = e.media.contentTierId) || void 0 === a ? void 0 : a.toString()) && void 0 !== o ? o : null, m.tags = e.tags || [], m.concepts = e.concepts || [], m.duration = e.media.duration, m.showName = null !== (d = null === (r = e.showData) || void 0 === r ? void 0 : r.name) && void 0 !== d ? d : e.showName, m.title = e.title, m.thumbnail = (e => {
                            var n, t;
                            let a = null == e ? void 0 : e.url;
                            const o = null === (t = null === (n = null == e ? void 0 : e.aspects) || void 0 === n ? void 0 : n.ratio16x9) || void 0 === t ? void 0 : t.url;
                            return o && (a = `${o}Resize%3D1180`), a
                        })(e.image), m.genre = e.media.genre, m.type = e.media.clipType, m.brandedSponsorName = e.media.brandedSponsorName, m.season = null !== (l = null === (i = e.media.season) || void 0 === i ? void 0 : i.toString()) && void 0 !== l ? l : null, m.episode = null !== (u = null === (s = e.media.episode) || void 0 === s ? void 0 : s.toString()) && void 0 !== u ? u : null, m.region = e.media.region, m.pubDate = parseInt(e.publishedAt), m.sport = null === (c = e.media.sports) || void 0 === c ? void 0 : c.name, m.hasCaptions = e.media.hasCaptions, m.aspectRatio = e.media.aspectRatio, m.shareUrl = `https://www.cbc.ca/player/play/${e.type}/${e.sourceId}`, e.media.chapters && (m.chapters = e.media.chapters), e.media.textTracks && (m.textTracks = e.media.textTracks.map((e => ({
                            label: e.label,
                            srclang: e.language,
                            src: e.src,
                            kind: e.kind
                        })))), m
                    },
                    r = "\n    sourceId\n    mediaId\n    source\n    title\n    image {\n        url\n        aspects {\n            ratio16x9 {\n                url\n            }\n        }\n    }\n    publishedAt\n    type\n    showData {\n        name\n    }\n    showName\n    tags {\n        type\n        name\n    }\n    concepts {\n        type\n        path\n    }\n    media {\n        id\n        callSign\n        assets {\n            key\n            type\n            options {\n                token\n            }\n        }\n        adOrder\n        adCategoryExclusion\n        streamType\n        contentArea\n        contentTierId\n        duration\n        genre\n        clipType\n        brandedSponsorName\n        season\n        episode\n        region\n        sports {\n            name\n        }\n        hasCaptions\n        aspectRatio\n        textTracks {\n            kind\n            label\n            src\n            language\n        }\n        chapters {\n            name\n            startTime\n        }\n    }\n",
                    d = async (n, t) => {
                        const a = (n => {
                                let t = ".";
                                return n !== e.DEV && n !== e.QA || (t = `.${n}.nm.`), `https://www${t}cbc.ca/${n===e.STG?"gql-stg":"graphql"}`
                            })(t),
                            o = {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "X-Cache-By-Country": "true"
                                },
                                body: JSON.stringify(n)
                            },
                            r = await fetch(a, o);
                        return await r.json()
                    },
                    i = async (e, n, t) => {
                        var a;
                        if (!e) return null;
                        let i = null;
                        const l = ((e, n) => ({
                            query: `{ contentItem(${e.toString().includes(".")?`sourceId: "${e}"`:`mediaId: ${e}`}${n?`, token: "${n}", workflowState: ALL`:""}) {\n            ${r}\n        }}`
                        }))(e, t);
                        try {
                            const e = null === (a = (await d(l, n)).data) || void 0 === a ? void 0 : a.contentItem;
                            if (!e) throw new Error("No GQL media item in GraphQL response");
                            i = o(e)
                        } catch (e) {
                            return console.error(e), i
                        }
                        return i
                    },
                    l = async (e, n, t, a, i) => {
                        var l, s, u, c;
                        if (!e) throw new Error("Missing mandatory argument 'algorithmId'.");
                        const m = Number.isInteger(t) ? t : 2,
                            p = null == a || a,
                            y = {
                                query: ""
                            };
                        if (n) y.query = `{\n            personalizedItems(algorithmId: "${e}", userId: "${n}", allowPersonalized: ${p}, first: ${m}) {\n                nodes {\n                    ${r}\n                }\n                algorithmId\n            }\n        }`;
                        else {
                            const n = "rec4you-short-form-news-video" === e ? "short-form-news-video" : "short-form-video";
                            y.query = `{\n            mlDrivenItems(algorithm: "trending", type: "video", pageSize: ${m}, args: { trendingType: "${n}", allowPersonalized: ${a}} }) {\n                items {\n                    ${r}\n                }\n            }\n        }`
                        }
                        let f = [];
                        try {
                            const e = await d(y, i),
                                t = n ? null === (s = null === (l = null == e ? void 0 : e.data) || void 0 === l ? void 0 : l.personalizedItems) || void 0 === s ? void 0 : s.nodes : null === (c = null === (u = null == e ? void 0 : e.data) || void 0 === u ? void 0 : u.mlDrivenItems) || void 0 === c ? void 0 : c.items;
                            (null == t ? void 0 : t.length) && (f = t.filter((e => {
                                var n, t;
                                return null === (t = null === (n = null == e ? void 0 : e.media) || void 0 === n ? void 0 : n.assets) || void 0 === t ? void 0 : t.length
                            })).map((e => o(e))))
                        } catch (e) {
                            console.error(e)
                        }
                        return f
                    },
                    s = () => "1.8.1",
                    u = {
                        fetchMediaData: i,
                        fetchRecommendedItems: l,
                        fetchFromGraphQL: d,
                        getVersion: s,
                        transformMediaItemToMediaData: o,
                        GQL_CONTENTITEM_FRAGMENT_FOR_MEDIA: r
                    };
                n.jk = a.GQL_CONTENTITEM_FRAGMENT_FOR_MEDIA, a.default, a.fetchFromGraphQL, n.lh = a.fetchMediaData, a.fetchRecommendedItems, a.getVersion, n.uR = a.transformMediaItemToMediaData, {
                    value: !0
                }
            })()
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-vendor~836d192c.33a7bb847b0f2c9a7326.js.map