! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3185674f-e091-4d91-9316-66ac5f1e7855", e._sentryDebugIdIdentifier = "sentry-dbid-3185674f-e091-4d91-9316-66ac5f1e7855")
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
    [5472], {
        26618: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var o = t(15671),
                r = t(43144),
                a = t(82963),
                i = t(61120),
                c = t(60136),
                l = (t(70468), t(79321), t(95763), t(26817), t(50155), t(51335), t(83234), t(92435), t(87201), t(23503), t(72891), t(21934), t(81466), t(40703), t(40627)),
                s = t(34325),
                u = t(19227);

            function d(e, n, t) {
                return n = (0, i.Z)(n), (0, a.Z)(e, f() ? Reflect.construct(n, t || [], (0, i.Z)(e).constructor) : n.apply(e, t))
            }

            function f() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (e) {}
                return (f = function() {
                    return !!e
                })()
            }
            const v = function(e) {
                function n() {
                    var e;
                    return (0, o.Z)(this, n), (e = d(this, n)).policyName = "ColumnPolicy", e
                }
                return (0, c.Z)(n, e), (0, r.Z)(n, [{
                    key: "buildCardTypesMap",
                    value: function() {
                        this.cardTypesMap = new Map, this.cardTypesMap.set(0, l.QU.TYPE_REGULAR), this.cardTypesMap.set(u.Zm, l.QU.TYPE_TEXT)
                    }
                }]), n
            }(s.Z)
        },
        37270: (e, n, t) => {
            t.d(n, {
                Z: () => Q
            });
            var o = t(29439),
                r = (t(30666), t(95566), t(6129), t(35098)),
                a = t(92972),
                i = t.n(a),
                c = (t(9867), t(7231), t(58109), t(68438), t(14507)),
                l = t.n(c),
                s = t(56552);
            const u = (0, r.forwardRef)((function(e, n) {
                var t = l()({
                    regionOption: !0,
                    active: e.active,
                    hidden: e.hidden
                });
                return (0, s.jsxs)("li", {
                    ref: n,
                    tabIndex: -1,
                    className: t,
                    onClick: function() {
                        return e.onClick(e.city)
                    },
                    onMouseEnter: function() {
                        return e.setActiveIndex(e.index)
                    },
                    children: [(0, s.jsx)("span", {
                        className: "cityText",
                        children: e.city
                    }), (0, s.jsx)("span", {
                        className: "provinceText",
                        children: e.provinceCode
                    })]
                })
            }));
            var d = function(e, n, t) {
                    n && n.current && !n.current.contains(e.target) && t(!1)
                },
                f = function(e, n, t) {
                    for (var o = n, r = n + 1; r < e.length;) {
                        if (!g(e[r], t)) {
                            o = r;
                            break
                        }
                        r++
                    }
                    return o
                },
                v = function(e, n, t, o, r, a, i, c, l, s, u) {
                    switch (e.keyCode) {
                        case 13:
                            if (t(!n), r(-1), o > -1) {
                                var d = l[o].city;
                                a(d), c(d)
                            } else if (n && -1 === o) {
                                var v = f(l, o, i),
                                    p = l[v] && l[v].city ? l[v].city : i;
                                a(p), c(p)
                            }
                            e.preventDefault();
                            break;
                        case 27:
                            n && (t(!1), r(-1)), e.preventDefault();
                            break;
                        case 37:
                        case 38:
                            var y = function(e, n, t) {
                                for (var o = n, r = n - 1; r >= -1;) {
                                    if (-1 === r || !g(e[r], t)) {
                                        o = r;
                                        break
                                    }
                                    r--
                                }
                                return o
                            }(l, o, i); - 1 === y ? u.current.focus() : s[y].current.focus(), r(y), e.preventDefault();
                            break;
                        case 39:
                        case 40:
                            n || t(!0);
                            var h = f(l, o, i);
                            s[h].current.focus(), r(h), e.preventDefault()
                    }
                },
                g = function(e, n) {
                    var t = e.city.toLowerCase(),
                        o = e.province.toLowerCase(),
                        r = e.provinceCode.replace(".", "").toLowerCase(),
                        a = n.toLowerCase();
                    return !("" === a || t.includes(a) || o.includes(a) || r.includes(a))
                },
                p = t(85161),
                y = function(e) {
                    var n = e.regions,
                        t = void 0 === n ? [] : n,
                        a = e.setSelectedRegion,
                        i = void 0 === a ? function() {} : a,
                        c = e.defaultSelection,
                        f = void 0 === c ? "Ottawa" : c,
                        y = e.accessibilityLabelString,
                        h = void 0 === y ? "Select a region" : y,
                        m = (0, r.useRef)(),
                        b = (0, r.useRef)(),
                        w = (0, r.useRef)([]),
                        N = (0, r.useState)(!1),
                        S = (0, o.Z)(N, 2),
                        I = S[0],
                        L = S[1],
                        O = (0, r.useState)(-1),
                        _ = (0, o.Z)(O, 2),
                        j = _[0],
                        x = _[1],
                        R = (0, r.useState)(f),
                        E = (0, o.Z)(R, 2),
                        T = E[0],
                        C = E[1];
                    (0, r.useEffect)((function() {
                        for (var e = 0; e < t.length; e++) w.current[e] = null
                    }), [t.length]), (0, r.useEffect)((function() {
                        return document.addEventListener("mousedown", (function(e) {
                                d(e, m, L)
                            })),
                            function() {
                                document.removeEventListener("mousedown", (function(e) {
                                    d(e, m, L)
                                }))
                            }
                    }), []), (0, r.useEffect)((function() {
                        f && f !== T && C(f)
                    }), [f]);
                    var k = t.map((function(e, n) {
                            var t = n === j;
                            return (0, s.jsx)(u, {
                                ref: function(e) {
                                    return w.current[n] = e
                                },
                                city: e.city,
                                active: t,
                                hidden: g(e, T),
                                setActiveIndex: x,
                                index: n,
                                provinceCode: e.provinceCode,
                                onClick: function(e) {
                                    return function(e, n, t, o, r) {
                                        var a = e;
                                        n(!1), t(-1), o(a), r(a)
                                    }(e, L, x, i, C)
                                }
                            }, e.city)
                        })),
                        M = t.filter((function(e) {
                            return !g(e, T)
                        })).length,
                        D = l()({
                            regionDropDownTextInput: !0,
                            active: I
                        }),
                        P = l()({
                            regionListSelect: !0,
                            active: I,
                            hidden: !I
                        }),
                        B = l()({
                            regionDropDown: !0,
                            active: I
                        }),
                        G = l()({
                            vertical: !0,
                            open: I
                        });
                    return (0, s.jsxs)("div", {
                        className: B,
                        ref: m,
                        onKeyDown: function(e) {
                            return v(e, I, L, j, x, i, T, C, t, w, b)
                        },
                        children: [(0, s.jsxs)("span", {
                            className: "a11y",
                            "aria-atomic": "true",
                            "aria-live": "polite",
                            children: ["showing " + M + " of " + t.length + " options", " "]
                        }), (0, s.jsx)("label", {
                            htmlFor: "region-select-input",
                            className: "a11y",
                            children: h
                        }), (0, s.jsx)("span", {
                            className: "a11y",
                            id: "region-select-info",
                            children: "Use arrow keys to select a region from the suggested list"
                        }), (0, s.jsx)("input", {
                            type: "text",
                            id: "region-select-input",
                            ref: b,
                            placeholder: "Select Region",
                            "aria-describedby": "region-select-info",
                            autoComplete: "off",
                            className: D,
                            value: T,
                            onClick: function() {
                                ! function(e, n, t) {
                                    e(!0), n(-1), t("")
                                }(L, x, C)
                            },
                            onChange: function(e) {
                                ! function(e, n, t) {
                                    n(!0), t(e.target.value)
                                }(e, L, C)
                            }
                        }), (0, s.jsx)(p.default, {
                            type: "chevron",
                            className: G
                        }), (0, s.jsx)("ul", {
                            className: P,
                            children: k
                        })]
                    })
                };
            const h = y;
            y.propTypes = {
                regions: i().array,
                setSelectedRegion: i().func,
                defaultSelection: i().string,
                accessibilityLabelString: i().string
            };
            t(84488), t(61262);
            var m = t(75854),
                b = t(46826),
                w = t(41718),
                N = t(74987),
                S = "Ottawa",
                I = (t(83464), t(19496), t(4942)),
                L = t(82489),
                O = t(4964),
                _ = t(13019),
                j = t(98265),
                x = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.region,
                        t = void 0 === n ? "" : n,
                        r = e.city,
                        a = void 0 === r ? "" : r,
                        i = e.callSign,
                        c = void 0 === i ? "" : i,
                        l = e.sourceId,
                        s = void 0 === l ? "" : l,
                        u = function(e) {
                            switch (e) {
                                case "Calgary":
                                case "Edmonton":
                                    return ["Alberta", "AB"];
                                case "Kamloops":
                                case "Kelowna":
                                case "Prince George":
                                case "Vancouver":
                                case "Victoria":
                                    return ["British Columbia", "BC"];
                                case "Winnipeg":
                                    return ["Manitoba", "MB"];
                                case "Fredericton":
                                case "Moncton":
                                case "Saint John":
                                    return ["New Brunswick", "NB"];
                                case "Corner Brook":
                                case "Goose Bay":
                                case "Grand Falls":
                                case "St. John's":
                                    return ["Newfoundland And Labrador", "NL"];
                                case "Inuvik":
                                case "Yellowknife":
                                    return ["Northwest Territories", "NT"];
                                case "Halifax":
                                case "Sydney":
                                    return ["Nova Scotia", "NS"];
                                case "Iqaluit":
                                    return ["Nunavut", "NU"];
                                case "Barrie":
                                case "Kenora":
                                case "Kingston":
                                case "Kitchener-Waterloo":
                                case "London":
                                case "Ottawa":
                                case "Peterborough":
                                case "Sudbury":
                                case "Thunder Bay":
                                case "Toronto":
                                case "Windsor":
                                    return ["Ontario", "ON"];
                                case "Charlottetown":
                                    return ["PEI", "PE"];
                                case "Montreal":
                                case "North Quebec":
                                case "Quebec City":
                                    return ["Quebec", "QC"];
                                case "Regina":
                                case "Saskatoon":
                                    return ["Saskatchewan", "SK"];
                                case "Whitehorse":
                                    return ["Yukon", "YT"];
                                default:
                                    return ["", ""]
                            }
                        }(a || t),
                        d = (0, o.Z)(u, 2);
                    return {
                        sourceId: s,
                        province: d[0],
                        city: a || (t || ""),
                        callSign: c,
                        provinceCode: d[1]
                    }
                },
                R = function(e) {
                    var n = (null === e || void 0 === e ? void 0 : e.program) || null;
                    return {
                        onNow: {
                            programTitle: (null === e || void 0 === e ? void 0 : e.programTitle) || "",
                            region: (null === e || void 0 === e ? void 0 : e.region) || "",
                            program: {
                                thumbnail: (null === n || void 0 === n ? void 0 : n.thumbnail) || "",
                                hosts: (null === n || void 0 === n ? void 0 : n.hosts) || null
                            }
                        },
                        network: (null === n || void 0 === n ? void 0 : n.network) || "Radio One"
                    }
                },
                E = t(15549),
                T = t(24876);

            function C(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    n && (o = o.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function k(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? C(Object(t), !0).forEach((function(n) {
                        (0, I.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var M = function(e, n) {
                    return function(t) {
                        if (n) return t((0, j.Y)(R())),
                            function(e, n) {
                                return (0, L.he)(O.o, (0, _.Z)(function(e, n) {
                                    return {
                                        query: "".concat(e, ':linearScheduleOnNow (callSign: "').concat(n, '") {\n    ...onNow\n}'),
                                        fragment: "fragment onNow on LinearScheduleNowNextItem {\n    programTitle\n    program {\n        network\n        thumbnail\n        hosts {\n            name\n        }\n    }\n}"
                                    }
                                }(e, n)), !1)
                            }("liveRadio", n).then((function(n) {
                                var o, r, a = null !== (o = null === n || void 0 === n || null === (r = n.data) || void 0 === r ? void 0 : r.liveRadio) && void 0 !== o ? o : {},
                                    i = R(k(k({}, a), {}, {
                                        region: e
                                    }));
                                return t((0, j.Y)(i))
                            })).catch((function(e) {
                                w.default.error("(updateLiveRadio) ".concat(n), e)
                            }));
                        w.default.error("(updateLiveRadio) the callSign for live radio is undefined.")
                    }
                },
                D = function() {
                    return function(e, n) {
                        var t, o, r = n().liveRadio;
                        if (null === r || void 0 === r || null === (t = r.REGION_LIST) || void 0 === t || !t.length) return e((0, T.ii)()), (o = "regionList", (0, L.he)(O.o, (0, _.Z)(function(e) {
                            return {
                                query: "".concat(e, ':allContentItems (lineupSlug: "live-radio-one", lineupOnly: true, pageSize: 99, targets: [WEB,ALL]) {\n    nodes {\n        ...regionList\n    }\n}'),
                                fragment: "fragment regionList on ContentItem {\n    sourceId\n    title\n    media {\n        callSign\n        region\n    }\n}"
                            }
                        }(o)), !1)).then((function(n) {
                            var t, o, r = function(e) {
                                var n = e;
                                Array.isArray(e) && e.length && (n = e[0].city ? e : e.map(x).sort((function(e, n) {
                                    return e.province.localeCompare(n.province) || e.city.localeCompare(n.city)
                                })));
                                return {
                                    REGION_LIST: n
                                }
                            }((null !== (t = null === (o = n.data) || void 0 === o || null === (o = o.regionList) || void 0 === o ? void 0 : o.nodes) && void 0 !== t ? t : []).map((function(e) {
                                var n, t;
                                return {
                                    sourceId: e.sourceId,
                                    callSign: null === (n = e.media) || void 0 === n ? void 0 : n.callSign,
                                    region: null === (t = e.media) || void 0 === t ? void 0 : t.region
                                }
                            })));
                            return e((0, j.Y)(r))
                        })).catch((function(e) {
                            w.default.error("(fetchRegionList)", e)
                        })).finally((function() {
                            e((0, E.k)())
                        }))
                    }
                },
                P = t(42820),
                B = t(82019);
            const G = t.p + "assets/radioBarPlaceholderImage.svg",
                Z = t.p + "assets/listenLogo.svg";
            var A = t(45871),
                K = {
                    REGION_LIST: [],
                    onNow: null
                },
                Y = !1,
                U = function(e) {
                    var n, t = e.listenLinkCMP,
                        a = e.defaultRadioRegion,
                        i = (0, P.useSelector)((function(e) {
                            var n;
                            return null !== (n = e.liveRadio) && void 0 !== n ? n : K
                        })),
                        c = (0, r.useState)(""),
                        l = (0, o.Z)(c, 2),
                        u = l[0],
                        d = l[1],
                        f = (0, r.useState)(""),
                        v = (0, o.Z)(f, 2),
                        g = v[0],
                        y = v[1],
                        I = (0, P.useDispatch)(),
                        L = (0, r.useCallback)((function(e) {
                            var n, t, o, r, a = null !== (t = (null !== (n = i.REGION_LIST) && void 0 !== n ? n : []).find((function(n) {
                                return n.city === e
                            }))) && void 0 !== t ? t : {};
                            return {
                                callSign: null !== (o = a.callSign) && void 0 !== o ? o : null,
                                sourceId: null !== (r = a.sourceId) && void 0 !== r ? r : null
                            }
                        }), [i.REGION_LIST]);
                    (0, r.useEffect)((function() {
                        Y || (Y = !0, I(D()))
                    }), []), (0, r.useEffect)((function() {
                        var e;
                        if (null !== (e = i.REGION_LIST) && void 0 !== e && e.length) {
                            var n = a || function(e) {
                                if (!e) return S;
                                var n = S;
                                try {
                                    var t = (0, N.j)() && window.localStorage ? window.localStorage.RADIO_ONE_REGION_TITLE : void 0,
                                        o = e.find((function(e) {
                                            return e.city === t
                                        }));
                                    n = o && o.city ? o.city : S
                                } catch (r) {
                                    w.default.error("(getDefaultRadioRegion) cookies disabled", r)
                                }
                                return n
                            }(i.REGION_LIST);
                            d(n)
                        }
                    }), [i.REGION_LIST, a]), (0, r.useEffect)((function() {
                        if (Y && u) {
                            var e = L(u),
                                n = e.callSign,
                                t = e.sourceId;
                            n && I(M(u, n)), y(t)
                        }
                    }), [u]);
                    var O = function() {
                            var e, n, t, o, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                a = null === (e = r.onNow) || void 0 === e ? void 0 : e.region;
                            if (!a) return "";
                            var i = null === (n = r.onNow) || void 0 === n ? void 0 : n.programTitle;
                            if (!i) return a;
                            var c = (null !== (t = null === (o = r.onNow) || void 0 === o || null === (o = o.program) || void 0 === o ? void 0 : o.hosts) && void 0 !== t ? t : []).flatMap((function(e) {
                                    return e.name || []
                                })).join(", "),
                                l = c ? " with ".concat(c) : "";
                            return "".concat(a, " \xb7 ").concat(i).concat(l)
                        }(i),
                        _ = (null === (n = i.onNow) || void 0 === n || null === (n = n.program) || void 0 === n ? void 0 : n.thumbnail) || G,
                        j = i.network || "",
                        x = (0, r.useCallback)((function() {
                            ! function(e, n, t) {
                                n && e((0, b.o)({
                                    mediaItem: {
                                        sourceId: n,
                                        image: {
                                            url: t
                                        },
                                        type: "audio",
                                        isPlayable: !1,
                                        feature: {
                                            name: "radio-bar"
                                        }
                                    },
                                    isVisible: !0,
                                    selector: m.IL,
                                    forcePersistence: !0
                                }))
                            }(I, g, _)
                        }), [g, _]),
                        R = t ? "https://www.cbc.ca/listen/live-radio?cmp=" + t : "https://www.cbc.ca/listen/live-radio";
                    return (0, s.jsx)("div", {
                        className: "radioBarFullWidthContainer",
                        children: (0, s.jsxs)("div", {
                            className: "".concat(A.Z.radioBar, " radioBar sclt-radiobar"),
                            children: [(0, s.jsx)(B.OT, {
                                text: "Live Radio"
                            }), (0, s.jsx)(h, {
                                defaultSelection: u,
                                setSelectedRegion: d,
                                regions: i.REGION_LIST,
                                accessibilityLabelString: "Live Radio Region"
                            }), (0, s.jsxs)("div", {
                                className: "nowPlaying",
                                children: [(0, s.jsxs)("div", {
                                    className: "nowPlayingImageContainer",
                                    children: [(0, s.jsx)("img", {
                                        className: "radioImage",
                                        alt: "radio thumbnail",
                                        src: _,
                                        loading: "lazy"
                                    }), (0, s.jsxs)("button", {
                                        className: "playButton",
                                        onClick: x,
                                        children: [(0, s.jsx)("span", {
                                            className: "a11y",
                                            children: "play"
                                        }), (0, s.jsx)("div", {
                                            className: "playTriangle"
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "nowPlayingTextDiv",
                                    children: [(0, s.jsx)("span", {
                                        className: "networkTitle",
                                        children: j
                                    }), (0, s.jsx)("span", {
                                        className: "programTitle",
                                        children: O
                                    })]
                                })]
                            }), (0, s.jsxs)("a", {
                                href: R,
                                className: "moreListen",
                                children: [(0, s.jsx)("span", {
                                    className: "moreOnText",
                                    children: "More on"
                                }), (0, s.jsxs)("span", {
                                    className: "listenLink",
                                    children: [(0, s.jsx)("img", {
                                        src: Z,
                                        alt: "CBC Listen",
                                        loading: "lazy"
                                    }), (0, s.jsx)(p.default, {
                                        type: "chevron",
                                        className: "horizontal"
                                    })]
                                })]
                            })]
                        })
                    })
                };
            U.propTypes = {
                listenLinkCMP: i().string,
                defaultRadioRegion: i().string
            };
            const Q = U
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-5472.1c581efa112458761114.js.map