! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4007d610-0e4e-4138-bf4f-4db324644354", e._sentryDebugIdIdentifier = "sentry-dbid-4007d610-0e4e-4138-bf4f-4db324644354")
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
    [8825], {
        69636: (e, t, n) => {
            n.d(t, {
                qO: () => F,
                a8: () => M,
                OM: () => P,
                Ng: () => I,
                _K: () => N
            });
            var r = n(4942),
                o = n(15861),
                i = n(64687),
                a = n.n(i),
                s = (n(83464), n(95566), n(19496), n(58109), n(68438), n(68619)),
                u = n(54799),
                l = n(51591),
                c = n(81572),
                d = n(43386),
                f = n(21188),
                g = (n(9867), n(7231), n(71733)),
                v = n(41718);
            var h = function(e) {
                var t = "";
                for (var n in e) t += "&boost-".concat(n, "=").concat(e[n]);
                return t
            };

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = c.D4,
                    n = "?q=".concat(encodeURIComponent(e.searchTerm)),
                    r = e.pageSize ? "&pageSize=".concat(e.pageSize) : "",
                    o = e.pageNum ? "&page=".concat(e.pageNum) : "",
                    i = e.sortOrder ? "&sortOrder=".concat(e.sortOrder) : "",
                    a = e.section ? "&section=".concat(e.section) : "",
                    s = e.media ? "&media=".concat(e.media) : "",
                    u = e.boosts ? h(e.boosts) : "",
                    l = "".concat(n).concat(r).concat(i).concat(a).concat(s).concat(u);
                return {
                    url: "".concat(t).concat(l).concat(o, "&fields=feed"),
                    params: l
                }
            }
            var m = function(e) {
                    try {
                        var t, n;
                        if (null !== (t = window.CBC) && void 0 !== t && null !== (t = t.APP) && void 0 !== t && null !== (t = t.ANA) && void 0 !== t && null !== (t = t.ABTESTSCONFIG) && void 0 !== t && t.tests) return null === (n = window.CBC.APP.ANA.ABTESTSCONFIG.tests[e]) || void 0 === n ? void 0 : n.id
                    } catch (r) {
                        v.default.warn("(getABTestID) Search", r)
                    }
                },
                y = n(43144),
                S = n(15671),
                b = n(82963),
                w = n(61120),
                j = n(60136);

            function O(e, t, n) {
                return t = (0, w.Z)(t), (0, b.Z)(e, C() ? Reflect.construct(t, n || [], (0, w.Z)(e).constructor) : t.apply(e, n))
            }

            function C() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (e) {}
                return (C = function() {
                    return !!e
                })()
            }
            var A = function(e) {
                    function t(e, n, r) {
                        var o;
                        return (0, S.Z)(this, t), (o = O(this, t, [e])).name = "DecisionError", n && (o.response = n), r && (o.catch_message = r), o
                    }
                    return (0, j.Z)(t, e), (0, y.Z)(t)
                }((0, n(72407).Z)(Error)),
                T = function() {
                    function e(t, n, r) {
                        (0, S.Z)(this, e), t || r(new A("Invalid argument for agent")), this.agent = t, this.resolve = n, this.reject = r, this.timeoutID = 0, this.onResult = this.onResult.bind(this), this.onTimeout = this.onTimeout.bind(this)
                    }
                    return (0, y.Z)(e, [{
                        key: "onResult",
                        value: function(e) {
                            clearTimeout(this.timeoutID);
                            try {
                                var t = e.data.sels[this.agent];
                                return "" === t ? (v.default.info("Conductrics: No selection made - ", e.data), this.resolve(t)) : t ? this.resolve(t) : this.reject(new A("CBC.APP.AB.Testing.getDecision selection is undefined for agent: " + this.agent, e))
                            } catch (n) {
                                this.reject(new A("The response for CBC.APP.AB.Testing.getDecision caused an error", e, n.message))
                            }
                        }
                    }, {
                        key: "onTimeout",
                        value: function() {
                            this.reject(new A("Conductrics Timeout"))
                        }
                    }, {
                        key: "request",
                        value: function() {
                            try {
                                "undefined" === typeof window.CBC.APP.AB.conductrics_api && this.reject(new A("CBC.APP.AB.conductrics_api is undefined")), window.CBC.APP.AB.Testing.getDecision(this.agent, !1, !1, this.onResult), this.timeoutID = setTimeout(this.onTimeout, e.TIMEOUT)
                            } catch (t) {
                                this.reject(new A("CBC.APP.AB.Testing.getDecision caused an error", null, t.message))
                            }
                        }
                    }], [{
                        key: "TIMEOUT",
                        get: function() {
                            return 3e3
                        }
                    }]), e
                }();

            function _(e) {
                return new Promise((function(t, n) {
                    new T(e, t, n).request()
                }))
            }
            var B = n(71836);

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

            function D(e) {
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

            function P(e) {
                var t = e.searchTerm,
                    n = e.section || "all",
                    r = e.sortOrder || B.s8,
                    i = e.nextPage || !1,
                    l = e.media || B.mk,
                    g = m(c.LH);
                return function() {
                    var e = (0, o.Z)(a().mark((function e(o, h) {
                        var m, y, S, b;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return m = h(), y = i ? m.search.pageNum + 1 : 1, S = "all" === n ? "" : n, b = void 0, e.abrupt("return", E(g).then((function(e) {
                                        var t;
                                        null !== (t = window.CBC) && void 0 !== t && null !== (t = t.APP) && void 0 !== t && null !== (t = t.ANA) && void 0 !== t && null !== (t = t.ABTESTSCONFIG) && void 0 !== t && null !== (t = t.tests) && void 0 !== t && null !== (t = t[c.LH]) && void 0 !== t && t.variants && (b = window.CBC.APP.ANA.ABTESTSCONFIG.tests[c.LH].variants[e])
                                    })).finally((function() {
                                        var e, a = null !== (e = window.CBC) && void 0 !== e && null !== (e = e.APP) && void 0 !== e && null !== (e = e.ANA) && void 0 !== e && e.SEARCHDEFAULT ? window.CBC.APP.ANA.SEARCHDEFAULT : {},
                                            g = void 0 !== b ? b.content : a,
                                            h = p({
                                                searchTerm: t,
                                                section: S,
                                                sortOrder: r,
                                                pageNum: y,
                                                media: l,
                                                boosts: g
                                            }),
                                            m = 0,
                                            w = {
                                                backgroundImage: "",
                                                flag: !1,
                                                countryId: "",
                                                section: "",
                                                sportId: "",
                                                title: "",
                                                url: ""
                                            };
                                        try {
                                            var j = window.sessionStorage.getItem(JSON.stringify(h.params)),
                                                O = JSON.parse(j) || null;
                                            if (!(Boolean(O) && !i && (new Date).getTime() - O.time < c.oF)) return (0, d.request)(h.url).then((function(e) {
                                                if ((0, f.fQ)(e)) return m = parseInt(e.headers.get("x-total-search-result-count"), 10), e.json()
                                            })).then((function(e) {
                                                var a = e[0];
                                                a && a.info_card_flag && (w = {
                                                    backgroundImage: a.info_card_background_image,
                                                    flag: !0,
                                                    section: a.info_card_section,
                                                    title: a.title,
                                                    url: a.url,
                                                    countryId: a.info_card_country_id,
                                                    sportId: a.info_card_sport_id
                                                }, e.shift()), w = Object.assign(w, {
                                                    captureGoals: !(!a || !a.info_card_flag)
                                                }), e.forEach((function(e) {
                                                    e.id.includes("keymatch_result") && (e.publishtime = new Date)
                                                }));
                                                var c = e;
                                                i ? (a.focus = !0, o((0, s.rU)({
                                                    json: (0, u.Cj)(e),
                                                    params: {
                                                        pageNum: y
                                                    }
                                                })), O && (c = O.json.concat(e))) : o((0, s.BE)({
                                                    json: (0, u.Cj)(e),
                                                    params: {
                                                        section: n,
                                                        searchTerm: t,
                                                        sortOrder: r,
                                                        resultCount: m,
                                                        pageNum: y,
                                                        infoCard: w,
                                                        media: l
                                                    }
                                                })), window.sessionStorage.setItem(JSON.stringify(h.params), JSON.stringify({
                                                    json: c,
                                                    resultCount: m,
                                                    time: (new Date).getTime(),
                                                    infoCard: w
                                                }))
                                            })).catch((function(e) {
                                                v.default.error("(fetch_search_results) getABTestVariant", e)
                                            }));
                                            o((0, s.BE)({
                                                json: (0, u.Cj)(O.json),
                                                params: {
                                                    section: n,
                                                    searchTerm: t,
                                                    sortOrder: r,
                                                    resultCount: O.resultCount,
                                                    pageNum: y,
                                                    media: l,
                                                    infoCard: O.infoCard
                                                }
                                            }))
                                        } catch (C) {
                                            v.default.error("(fetch_search_results)", C)
                                        }
                                    })));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }

            function I(e) {
                var t = D(D({}, e), {}, {
                    nextPage: !0
                });
                return function(e) {
                    return P(D(D({}, t), e))
                }
            }

            function N(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = e.searchTerm,
                    o = e.section || "all",
                    i = e.sortOrder || "relevance",
                    a = m(c.IU);
                return function(e) {
                    var f = "all" === o ? "" : o,
                        h = void 0;
                    E(a).then((function(e) {
                        var t, n, r;
                        null !== (t = window.CBC) && void 0 !== t && null !== (t = t.APP) && void 0 !== t && null !== (t = t.ANA) && void 0 !== t && null !== (t = t.ABTESTSCONFIG) && void 0 !== t && t.tests && null !== (n = window.CBC) && void 0 !== n && null !== (n = n.APP) && void 0 !== n && null !== (n = n.ANA) && void 0 !== n && null !== (n = n.ABTESTSCONFIG) && void 0 !== n && null !== (n = n.tests[c.LH]) && void 0 !== n && n.variants && (h = null === (r = window.CBC) || void 0 === r || null === (r = r.APP) || void 0 === r || null === (r = r.ANA) || void 0 === r || null === (r = r.ABTESTSCONFIG) || void 0 === r || null === (r = r.tests[c.LH]) || void 0 === r ? void 0 : r.variants[e])
                    })).finally((function() {
                        var o = void 0 !== h ? h.content : {},
                            a = p({
                                searchTerm: r,
                                section: f,
                                sortOrder: i,
                                media: B.Zv,
                                boosts: o
                            }),
                            m = 0,
                            y = JSON.stringify(a.params + "&videoSwimlane");
                        try {
                            var S = window.sessionStorage.getItem(y),
                                b = JSON.parse(S) || null;
                            Boolean(b) && (new Date).getTime() - b.time < c.oF ? e((0, s.W0)({
                                json: b.json.slice(0, c.sK)
                            })) : (0, d.request)(a.url).then((function(e) {
                                if ("application/json;charset=UTF-8" === e.headers.get("content-type")) return m = parseInt(e.headers.get("x-total-search-result-count"), 10), e.json()
                            })).then((function(r) {
                                (function(e, t) {
                                    return t < c.VP ? Promise.resolve([]) : (0, g.f2)(e.map((function(e) {
                                        return e["cbc-mediaid"]
                                    })).filter((function(e) {
                                        return void 0 !== e
                                    })))
                                })(r, m).then((function(r) {
                                    var o, i, a = null !== (o = null === r || void 0 === r || null === (i = r.data) || void 0 === i || null === (i = i.allContentItems) || void 0 === i ? void 0 : i.nodes) && void 0 !== o ? o : [],
                                        d = (0, u.H9)(a),
                                        f = (0, l.h)(d, t, n);
                                    e((0, s.W0)({
                                        json: null === f || void 0 === f ? void 0 : f.slice(0, c.sK)
                                    })), window.sessionStorage.setItem(y, JSON.stringify({
                                        json: f,
                                        resultCount: m,
                                        time: (new Date).getTime()
                                    }))
                                })).catch((function(t) {
                                    v.default.error("(fetch_top_video_results)", new Error("(fetch_top_video_results) getVideoPayload [".concat(t.name, ": ").concat(t.message, "]"))), e((0, s.W0)({
                                        json: []
                                    }))
                                }))
                            })).catch((function(e) {
                                v.default.error("(fetch_top_video_results) getABTestVariant error", e)
                            }))
                        } catch (w) {
                            v.default.error("(fetch_top_videos_results)", w)
                        }
                    }))
                }
            }

            function E(e) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = (0, o.Z)(a().mark((function e(t) {
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("undefined" === t) {
                                    e.next = 10;
                                    break
                                }
                                return e.prev = 1, e.next = 4, _(t);
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), v.default.error("(getABTestVariant) Error in decision making process", e.t0);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })))).apply(this, arguments)
            }

            function M(e) {
                return function(t) {
                    if ((null === e || void 0 === e ? void 0 : e.length) > 2) {
                        var n = "".concat(c.ss, "?q=").concat(e);
                        (0, d.request)(n).then((function(e) {
                            if (e.ok) return e.json();
                            throw new Error(e)
                        })).then((function(e) {
                            var n = e.matches;
                            t((0, s.ow)({
                                json: (0, u.VV)(n)
                            }))
                        })).catch((function(e) {
                            t((0, s.ow)({
                                json: (0, u.VV)([])
                            })), v.default.error("(fetch_autocomplete_options)", e)
                        }))
                    } else t((0, s.ow)({
                        json: (0, u.VV)([])
                    }))
                }
            }

            function F() {
                return (0, s.ow)({
                    json: []
                })
            }
        },
        81572: (e, t, n) => {
            n.d(t, {
                D4: () => o,
                IU: () => c,
                LH: () => l,
                VP: () => s,
                oF: () => a,
                sK: () => u,
                ss: () => i
            });
            var r = n(93849),
                o = r.KF("Client.searchApi.baseURL"),
                i = r.KF("Client.searchApi.autocompleteURL"),
                a = 6e4,
                s = 10,
                u = 3,
                l = "main-search",
                c = "video-swim-lane"
        },
        3623: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(92972),
                o = n.n(r);

            function i(e) {
                var t = e.children;
                return e.value ? t : null
            }
            i.propTypes = {
                value: o().bool.isRequired
            }
        },
        68825: (e, t, n) => {
            n.d(t, {
                Z: () => B
            });
            var r = n(29439),
                o = n(35098),
                i = n(92972),
                a = n.n(i),
                s = n(14507),
                u = n.n(s),
                l = n(42820),
                c = (n(9867), n(7231), n(86535)),
                d = n(56552);

            function f(e) {
                var t = e.filters,
                    n = void 0 === t ? [] : t,
                    i = e.clickHandler,
                    a = void 0 === i ? function() {} : i,
                    s = e.selectedFilter,
                    u = (0, o.useState)("all"),
                    l = (0, r.Z)(u, 2),
                    f = l[0],
                    g = l[1];
                return (0, o.useEffect)((function() {
                    void 0 !== s && null !== s && g(s)
                }), [s]), (0, d.jsxs)("div", {
                    className: "searchFilterContainer",
                    children: [(0, d.jsx)("label", {
                        htmlFor: "searchFilterSelect",
                        children: "Filter by"
                    }), (0, d.jsx)("select", {
                        id: "searchFilterSelect",
                        name: "Search Filters",
                        value: f,
                        onChange: function(e) {
                            return function(e, t) {
                                t && t(e);
                                var n = e.target.value;
                                g(n)
                            }(e, a)
                        },
                        children: n.map((function(e) {
                            return e.enabled && (0, d.jsx)("option", {
                                "data-filtertype": e.value,
                                value: e.value,
                                children: e.label
                            }, e.value)
                        }))
                    }), (0, c.Z)()]
                })
            }
            f.propTypes = {
                filters: a().array,
                clickHandler: a().func
            };
            const g = f;
            n(83464), n(19496);
            var v = n(4942),
                h = (n(58109), n(95566), n(68438), n(69636)),
                p = n(3623),
                m = n(51391);

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

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach((function(t) {
                        (0, v.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = [],
                w = function(e) {
                    var t = e.isCompact,
                        n = e.inputFocus,
                        i = e.searchTerm,
                        a = e.updateSearchTerm,
                        s = e.handleSearchAutocompleteSelect,
                        c = (0, m.Z)(),
                        f = (0, o.useState)({
                            justSelectedSuggestion: !1,
                            highlightedSuggestionIndex: null,
                            highlightedSuggestion: null,
                            queryBeforeUpDown: null,
                            shouldSuggestionsBeVisible: !1,
                            hasSuggestions: !1,
                            ariaStatusMessage: "",
                            queryValue: ""
                        }),
                        g = (0, r.Z)(f, 2),
                        v = g[0],
                        y = g[1],
                        w = (0, l.useSelector)((function(e) {
                            var t, n;
                            return null !== (t = null === (n = e.search) || void 0 === n ? void 0 : n.autocompleteResults) && void 0 !== t ? t : b
                        })),
                        j = (0, o.useRef)(null),
                        O = (0, o.useRef)(null),
                        C = function(e) {
                            j.current && j.current.value !== e && (j.current.value = null !== e && void 0 !== e ? e : "")
                        },
                        A = (0, l.useDispatch)(),
                        T = function(e) {
                            A((0, h.a8)(e))
                        },
                        _ = function() {
                            A((0, h.qO)())
                        };
                    (0, o.useEffect)((function() {
                        C(i)
                    }), [i]), (0, o.useEffect)((function() {
                        var e, t, n = null !== (e = null === (t = j.current) || void 0 === t ? void 0 : t.value) && void 0 !== e ? e : "",
                            r = "";
                        n.length > 2 && v.shouldSuggestionsBeVisible && (r = w.length > 0 ? "".concat(w.length, " suggestions available. Use up and down arrows to review and enter to select") : "No suggestions available"), y((function(e) {
                            return S(S({}, e), {}, {
                                hasSuggestions: w.length > 0,
                                queryValue: n,
                                ariaStatusMessage: r
                            })
                        }))
                    }), [w]), (0, o.useEffect)((function() {
                        var e;
                        n && (null === (e = j.current) || void 0 === e || e.focus())
                    }), [n]);
                    var B = function() {
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim().length > 0
                        },
                        x = function(e, t) {
                            var n = v.queryBeforeUpDown;
                            null === e ? n = null : null === n && void 0 !== t && (n = t), y((function(t) {
                                var r;
                                return S(S({}, t), {}, {
                                    highlightedSuggestionIndex: e,
                                    highlightedSuggestion: null !== (r = w[e]) && void 0 !== r ? r : null,
                                    queryBeforeUpDown: n
                                })
                            }))
                        },
                        D = function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            y((function(t) {
                                return S(S({}, t), {}, {
                                    highlightedSuggestionIndex: null,
                                    highlightedSuggestion: null,
                                    queryBeforeUpDown: e ? null : t.queryBeforeUpDown
                                })
                            }))
                        },
                        P = function() {
                            C(""), y((function(e) {
                                return S(S({}, e), {}, {
                                    queryValue: ""
                                })
                            }))
                        },
                        I = function() {
                            y((function(e) {
                                return S(S({}, e), {}, {
                                    shouldSuggestionsBeVisible: !1,
                                    highlightedSuggestionIndex: null,
                                    highlightedSuggestion: null,
                                    queryBeforeUpDown: null
                                })
                            }))
                        },
                        N = function(e) {
                            s(e), _(), D()
                        },
                        E = function(e) {
                            D(!1), v.justSelectedSuggestion && e.target === O.current && y((function(e) {
                                return S(S({}, e), {}, {
                                    justSelectedSuggestion: !1
                                })
                            }))
                        },
                        k = function(e) {
                            v.justSelectedSuggestion || (y((function(e) {
                                return S(S({}, e), {}, {
                                    justSelectedSuggestion: !0
                                })
                            })), O.current = e.target)
                        },
                        M = function() {
                            y((function(e) {
                                return S(S({}, e), {}, {
                                    justSelectedSuggestion: !0
                                })
                            }))
                        },
                        F = function() {
                            var e;
                            y((function(e) {
                                return S(S({}, e), {}, {
                                    justSelectedSuggestion: !1
                                })
                            })), O.current = null, null === (e = j.current) || void 0 === e || e.focus()
                        },
                        q = function(e) {
                            return function() {
                                var n = w[e];
                                n && (a(n.value), N(n.value), I(), t && P()), y((function(e) {
                                    return S(S({}, e), {}, {
                                        justSelectedSuggestion: !1
                                    })
                                }))
                            }
                        },
                        V = function(e, t) {
                            var n = function(e) {
                                    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                                },
                                r = n(e.value),
                                o = n(t),
                                i = new RegExp("\\b(".concat(o, ")"), "i"),
                                a = r.split(i).filter((function(e) {
                                    return e
                                }));
                            return (0, d.jsx)("span", {
                                children: a.map((function(e, t) {
                                    var n = i.test(e) ? "autocomplete-suggestions-item-match" : null;
                                    return (0, d.jsx)("span", {
                                        className: n,
                                        children: e
                                    }, "".concat(e, "-").concat(t))
                                }))
                            })
                        },
                        R = function(e, t, n, r) {
                            var o = t === v.highlightedSuggestionIndex,
                                i = u()("autocomplete-suggestions-item", o && "autocomplete-suggestions-item-highlighted"),
                                a = function(e) {
                                    return "autocomplete-suggestions-item-".concat(e)
                                }(t);
                            return (0, d.jsx)("li", S(S({
                                id: a,
                                role: "option",
                                "aria-posinset": t + 1,
                                "aria-setsize": r,
                                "aria-selected": o,
                                tabIndex: "-1",
                                className: i,
                                "data-suggestion-index": t
                            }, function(e) {
                                return {
                                    onMouseEnter: (t = e, function(e) {
                                        x(t), e.target === O.current && y((function(e) {
                                            return S(S({}, e), {}, {
                                                justSelectedSuggestion: !0
                                            })
                                        }))
                                    }),
                                    onMouseLeave: E,
                                    onMouseDown: k,
                                    onTouchStart: M,
                                    onTouchMove: F,
                                    onClick: q(e)
                                };
                                var t
                            }(t)), {}, {
                                children: V(e, n)
                            }), a)
                        },
                        Z = {
                            onFocus: function(e) {
                                var t = e.target.value;
                                if (!v.justSelectedSuggestion) {
                                    var n = B(t);
                                    y((function(e) {
                                        return S(S({}, e), {}, {
                                            shouldSuggestionsBeVisible: n
                                        })
                                    })), n && T(t)
                                }
                            },
                            onBlur: function() {
                                v.justSelectedSuggestion || (I(), _())
                            },
                            onChange: function(e) {
                                var t = e.target.value,
                                    n = B(t);
                                B(t) ? T(t) : _(), a(t), y((function(e) {
                                    return S(S({}, e), {}, {
                                        shouldSuggestionsBeVisible: n,
                                        highlightedSuggestionIndex: null,
                                        highlightedSuggestion: null,
                                        queryBeforeUpDown: null
                                    })
                                }))
                            },
                            onKeyDown: function(e) {
                                var n = e.key,
                                    r = v.hasSuggestions,
                                    o = v.highlightedSuggestionIndex,
                                    i = v.queryValue,
                                    s = v.shouldSuggestionsBeVisible,
                                    u = v.queryBeforeUpDown;
                                switch (n) {
                                    case "ArrowDown":
                                    case "ArrowUp":
                                        var l;
                                        if (s) {
                                            if (w.length > 0) {
                                                var c, d, f = w.length - 1,
                                                    g = null;
                                                if ("ArrowUp" === n ? null === o ? g = f : o > 0 && (g = o - 1) : "ArrowDown" === n && (null === o ? g = 0 : o < f && (g = o + 1)), null === g) c = null !== u && void 0 !== u ? u : i;
                                                else c = null === (d = w[g]) || void 0 === d ? void 0 : d.value;
                                                x(g, i), C(c), a(c), e.preventDefault()
                                            }
                                        } else B(null === (l = j.current) || void 0 === l ? void 0 : l.value) && (T(v.queryValue), y((function(e) {
                                            return S(S({}, e), {}, {
                                                shouldSuggestionsBeVisible: !0
                                            })
                                        })), e.preventDefault());
                                        break;
                                    case "Enter":
                                        var h, p = null !== (h = w[o]) && void 0 !== h ? h : null;
                                        s && r && I(), t && P(), null !== p && (e.preventDefault(), a(p.value), N(p.value), y((function(e) {
                                            return S(S({}, e), {}, {
                                                justSelectedSuggestion: !1
                                            })
                                        })));
                                        break;
                                    case "Escape":
                                        var m = null,
                                            b = e.target.value,
                                            O = void 0 === b ? "" : b;
                                        s && r ? (e.preventDefault(), _(), I(), m = null !== u && void 0 !== u ? u : O) : (D(), m = null === u ? "" : u), "string" === typeof m && a(m), C(m)
                                }
                            }
                        },
                        U = (null === v.queryBeforeUpDown ? v.queryValue : v.queryBeforeUpDown).trim(),
                        L = v.shouldSuggestionsBeVisible && v.hasSuggestions,
                        G = L ? w : [],
                        H = t ? "gn-compact-search" : "gn-search",
                        K = "".concat(H, "-autocomplete"),
                        W = L ? null : "".concat(H, "-autocomplete-assistiveHint"),
                        J = G.length,
                        z = u()("autocomplete-suggestions-list", L ? "autocomplete-suggestions-container" : "");
                    return (0, d.jsxs)("div", {
                        className: "search-autocomplete",
                        children: [(0, d.jsx)("div", {
                            id: "".concat(H, "-suggestions-status"),
                            className: "a11y",
                            role: "status",
                            "aria-atomic": "true",
                            "aria-live": "polite",
                            children: v.ariaStatusMessage
                        }), (0, d.jsx)("input", S(S({
                            id: H,
                            className: "searchInput",
                            "data-cy": c ? "search-bar-input" : void 0,
                            name: "query",
                            placeholder: "Search CBC.ca",
                            type: "search",
                            role: L ? "combobox" : null,
                            "aria-haspopup": "listbox",
                            autoComplete: "off",
                            autoCorrect: "off",
                            "aria-autocomplete": "both",
                            "aria-expanded": L || null,
                            "aria-controls": K,
                            "aria-describedby": W,
                            "aria-label": "Search CBC.ca"
                        }, Z), {}, {
                            ref: j
                        })), (0, d.jsx)(p.Z, {
                            value: L,
                            children: (0, d.jsx)("ul", {
                                id: K,
                                className: z,
                                role: "listbox",
                                "aria-label": "Choose a suggestion",
                                children: G.map((function(e, t) {
                                    return R(e, t, U, J)
                                }))
                            })
                        }), (0, d.jsx)(p.Z, {
                            value: !L,
                            children: (0, d.jsx)("span", {
                                className: "a11y",
                                id: W,
                                children: "When search suggestions are available use up and down arrows to review and enter to select."
                            })
                        })]
                    })
                };
            w.propTypes = {
                isCompact: a().bool.isRequired,
                inputFocus: a().bool,
                searchTerm: a().string,
                updateSearchTerm: a().func.isRequired,
                handleSearchAutocompleteSelect: a().func.isRequired
            };
            const j = w;
            var O = n(17192),
                C = n(71836),
                A = n(64323),
                T = n(83110),
                _ = function(e) {
                    var t = e.type,
                        n = void 0 === t ? "expanded" : t,
                        i = e.qsTerm,
                        a = e.active,
                        s = e.addFilter,
                        c = e.addSort,
                        f = e.addMedia,
                        v = e.mediaFilterValue,
                        h = e.sortOrderValue,
                        p = (0, m.Z)(),
                        y = (0, l.useSelector)((function(e) {
                            var t;
                            return null === e || void 0 === e || null === (t = e.featureflags) || void 0 === t ? void 0 : t["search.types"]
                        })),
                        S = (0, l.useSelector)((function(e) {
                            return e.app.baseSection
                        })),
                        b = (0, T.useHistory)(),
                        w = (0, T.useLocation)(),
                        _ = (0, l.useSelector)((function(e) {
                            return e.search
                        })),
                        B = (null === i || void 0 === i ? void 0 : i.trim()) || "",
                        x = (0, o.useState)(B),
                        D = (0, r.Z)(x, 2),
                        P = D[0],
                        I = D[1],
                        N = (0, o.useState)(""),
                        E = (0, r.Z)(N, 2),
                        k = E[0],
                        M = E[1],
                        F = (0, o.useState)(B),
                        q = (0, r.Z)(F, 2),
                        V = q[0],
                        R = q[1];

                    function Z(e) {
                        var t = e.section,
                            n = e.sortOrder,
                            r = e.media,
                            o = e.nextSearchTerm,
                            i = encodeURIComponent(null !== o && void 0 !== o ? o : P.trim()),
                            a = "?q=".concat(i, "&section=").concat(t, "&sortOrder=").concat(n, "&media=").concat(r);
                        "" !== i && a !== w.search && b.push("/search".concat(a))
                    }
                    var U = !1;
                    (0, o.useEffect)((function() {
                        "expanded" === n && ((0, O.UL)(s, y, c, f, Z), U = !0)
                    }), []), (0, o.useEffect)((function() {
                        "expanded" !== n || U || (I(B), R(B), Z({
                            section: (0, O.GM)(s, y),
                            sortOrder: (0, O.xR)(h),
                            media: (0, O.m0)(v),
                            nextSearchTerm: B
                        }))
                    }), [i, v, h, y]), (0, o.useEffect)((function() {
                        k && L(P)
                    }), [k]);
                    var L = function(e, t) {
                            t && t.preventDefault();
                            var r = w.pathname,
                                o = _.media || C.mk,
                                i = _.section || "all";
                            "compact" === n && (I(""), R(null), o = C.mk, "player" === S ? (o = C.Zv, i = r.startsWith(A.Iz) ? void 0 : r.split("/")[2]) : i = S, r.startsWith("/sports/olympics") || r.startsWith("/player/sports/olympics") ? i = "olympics" : (r.startsWith("/sports/paralympics") || r.startsWith("/player/sports/paralympics")) && (i = "paralympics")), Z({
                                section: (0, O.GM)(i, y),
                                sortOrder: (0, O.xR)(_.sortOrder),
                                media: (0, O.m0)(o),
                                nextSearchTerm: e
                            })
                        },
                        G = (0, o.useCallback)((function(e) {
                            I(e), M(e)
                        }), []),
                        H = function(e) {
                            e.preventDefault();
                            var t = C.mk,
                                n = C.s8;
                            null != v && (t = v), null != h && (n = h), Z({
                                section: e.target.value ? (0, O.GM)(e.target.value, y) : (0, O.GM)(_.section, y),
                                sortOrder: (0, O.xR)(n),
                                media: (0, O.m0)(t)
                            })
                        },
                        K = u()("searchBar", {
                            compact: "compact" === n,
                            active: a
                        });
                    return (0, d.jsxs)("div", {
                        className: K,
                        children: [(0, d.jsxs)("form", {
                            className: "searchForm",
                            onSubmit: function(e) {
                                return L(P, e)
                            },
                            children: [(0, d.jsx)(j, {
                                isCompact: "compact" === n,
                                searchTerm: V,
                                inputFocus: a,
                                updateSearchTerm: I,
                                handleSearchAutocompleteSelect: G
                            }), (0, d.jsx)("button", {
                                className: "searchButton",
                                "data-cy": p ? "search-bar-button" : void 0,
                                children: "Search"
                            })]
                        }), "compact" !== n ? (0, d.jsx)("div", {
                            children: (0, d.jsx)(g, {
                                filters: y,
                                selectedFilter: _.section,
                                clickHandler: H
                            })
                        }) : s ? (0, d.jsx)("div", {
                            children: (0, d.jsx)(g, {
                                filters: y,
                                selectedFilter: s
                            })
                        }) : void 0]
                    })
                };
            _.propTypes = {
                type: a().string,
                qsTerm: a().string,
                active: a().bool,
                addFilter: a().string,
                addSort: a().string,
                addMedia: a().oneOfType([a().string, a().bool]),
                mediaFilterValue: a().oneOfType([a().string, a().bool]),
                searchFilters: a().array,
                sortOrderValue: a().oneOfType([a().string, a().bool])
            };
            const B = _
        },
        17192: (e, t, n) => {
            n.d(t, {
                UL: () => l,
                GM: () => a,
                m0: () => u,
                xR: () => s
            });
            n(53145), n(95566), n(62153);
            var r = n(71836),
                o = [{
                    label: r.Q2,
                    value: r.s8
                }, {
                    label: r.Og,
                    value: r.ey
                }],
                i = [{
                    label: "All",
                    value: "all"
                }, {
                    label: "Video",
                    value: "video"
                }],
                a = function(e) {
                    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).some((function(t) {
                        return t.value === e
                    })) ? e : "all"
                },
                s = function(e) {
                    return "boolean" === typeof e ? e ? r.s8 : r.ey : o.some((function(t) {
                        return t.value === e
                    })) ? e : r.s8
                },
                u = function(e) {
                    return "boolean" === typeof e ? e ? r.Zv : r.mk : i.some((function(t) {
                        return t.value === e
                    })) ? e : r.mk
                },
                l = function(e, t, n, r, o) {
                    var i = a(e, t),
                        l = s(n),
                        c = u(r);
                    i === e && l === n && c === r || o({
                        section: i,
                        sortOrder: l,
                        media: c
                    })
                }
        },
        86535: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(56552);
            const o = function() {
                return (0, r.jsxs)("svg", {
                    width: "12px",
                    height: "7px",
                    viewBox: "0 0 12 7",
                    role: "img",
                    focusable: "false",
                    children: [(0, r.jsx)("title", {
                        children: "Stroke 5"
                    }), (0, r.jsx)("desc", {
                        children: "Created with Sketch."
                    }), (0, r.jsx)("g", {
                        id: "Page-1",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: (0, r.jsx)("g", {
                            id: "RelevanceDesktop",
                            transform: "translate(-969.000000, -384.000000)",
                            stroke: "#0550C8",
                            strokeWidth: "1.95349219",
                            children: (0, r.jsx)("polyline", {
                                id: "Stroke-5",
                                transform: "translate(974.626651, 387.117645) rotate(-360.000000) translate(-974.626651, -387.117645) ",
                                points: "979.253302 385 974.626807 389.235291 970 385"
                            })
                        })
                    })]
                })
            }
        },
        71836: (e, t, n) => {
            n.d(t, {
                I9: () => g,
                K6: () => h,
                KR: () => v,
                Og: () => u,
                Q2: () => l,
                Zv: () => o,
                ey: () => s,
                md: () => i,
                mk: () => r,
                nY: () => d,
                s8: () => a,
                w$: () => f,
                wC: () => c
            });
            var r = "all",
                o = "video",
                i = ["all", "sports", "olympics"],
                a = "relevance",
                s = "date",
                u = "Most recent",
                l = "Relevance",
                c = ".card",
                d = ".video-card-container",
                f = ".searchInfoCard",
                g = "api-loaded-article",
                v = "api-video-swimlane",
                h = "api-serp-info-card"
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-8825.91650f95114e06c1871a.js.map