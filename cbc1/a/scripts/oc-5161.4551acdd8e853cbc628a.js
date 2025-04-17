! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "ff8a99ca-bd08-426f-bfc0-73db2dee8e1c", t._sentryDebugIdIdentifier = "sentry-dbid-ff8a99ca-bd08-426f-bfc0-73db2dee8e1c")
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
    [5161], {
        41130: (t, e, a) => {
            a.d(e, {
                Z: () => o
            });
            var s = a(92972),
                r = a.n(s),
                n = a(14507),
                l = a.n(n),
                i = a(56552),
                h = function(t) {
                    var e = t.className,
                        a = l()("broadcasterIcon", e);
                    return (0, i.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "74",
                        height: "32",
                        viewBox: "0 0 74 32",
                        className: a,
                        role: "presentation",
                        children: [(0, i.jsx)("defs", {}), (0, i.jsxs)("g", {
                            fill: "#FEFEFE",
                            fillRule: "nonzero",
                            children: [(0, i.jsx)("path", {
                                d: "M47.05 9.01a6.01 6.01 0 00-5.98-6.04c-3.3 0-5.98 2.7-5.98 6.04a6.01 6.01 0 006.5 6.02 6.17 6.17 0 010-1A4.97 4.97 0 0136.09 9a5 5 0 014.98-5.03A5 5 0 0146.05 9a5.03 5.03 0 01-3.43 4.79 5.18 5.18 0 00-.05 1.06 6.03 6.03 0 004.48-5.85M73 9.01a6.02 6.02 0 01-5.99 6.04 6.01 6.01 0 01-5.97-5.5c.36.03.7.1 1.04.22A5 5 0 0067 14.05c2.76 0 5-2.26 5-5.04a5.01 5.01 0 00-5-5.03 5.01 5.01 0 00-4.98 4.72 5.93 5.93 0 00-.99-.17 6.01 6.01 0 015.97-5.56c3.3 0 5.99 2.7 5.99 6.04"
                            }), (0, i.jsx)("path", {
                                d: "M65.5 14.91a5.01 5.01 0 01-4.98 4.73c-2.76 0-4.99-2.26-4.99-5.04a5.03 5.03 0 013.44-4.78A5.17 5.17 0 0059 8.75a6.03 6.03 0 00-4.48 5.85 6.02 6.02 0 006 6.04 6.01 6.01 0 005.96-5.56 5.95 5.95 0 01-.99-.17m-4.98-5.34a5 5 0 014.94 4.28c.33.11.67.18 1.03.22A6.01 6.01 0 0060 8.58a6.17 6.17 0 010 1.02c.17-.02.34-.03.52-.03M53.47 15.08a6.01 6.01 0 01-5.97 5.56c-3.3 0-5.98-2.7-5.98-6.04 0-2.8 1.9-5.17 4.48-5.85a5.55 5.55 0 01-.05 1.07 5.03 5.03 0 00-3.44 4.78 5.01 5.01 0 005 5.04 5.01 5.01 0 004.98-4.73c.32.09.65.14.98.17M46.98 9.6a6.04 6.04 0 000-1.02l.52-.02a6 6 0 015.97 5.51c-.36-.04-.7-.11-1.03-.22a5 5 0 00-5.46-4.25"
                            }), (0, i.jsx)("path", {
                                d: "M54 14.05a5 5 0 01-4.94-4.28 4.9 4.9 0 00-1.03-.23 6.01 6.01 0 006.48 5.5 6.16 6.16 0 010-1.02 5 5 0 01-.52.03m0-11.08a6.01 6.01 0 00-5.97 5.56c.34.03.67.09 1 .17a5.01 5.01 0 014.97-4.72 5.03 5.03 0 011.55 9.82 5.13 5.13 0 00-.04 1.06 6.03 6.03 0 004.48-5.85A6.02 6.02 0 0054 2.97M28.49 22.57h.16V1.08h-.16zM2.7 30.95c-.78 0-1.36-.62-1.36-1.42 0-.78.57-1.42 1.38-1.42.49 0 .79.17 1.06.43l-.21.23a1.18 1.18 0 00-.86-.38c-.6 0-1.05.5-1.05 1.14 0 .64.45 1.14 1.05 1.14.38 0 .62-.15.88-.4l.2.2c-.28.3-.6.48-1.09.48M5.87 28.5l-.62 1.4h1.24l-.62-1.4zm1.39 2.4h-.33l-.32-.72H5.13l-.33.73H4.5l1.24-2.78h.29l1.24 2.78zM10.19 28.15h.3v2.76h-.25l-1.76-2.26v2.26h-.3v-2.76h.29l1.72 2.21zM12.8 28.5l-.63 1.4h1.25l-.62-1.4zm1.39 2.4h-.33l-.32-.72h-1.49l-.32.73h-.31l1.24-2.78h.29l1.24 2.78zM16.06 28.44h-.64v2.18h.64c.69 0 1.13-.47 1.13-1.09 0-.61-.44-1.09-1.13-1.09m0 2.47h-.95v-2.76h.95c.86 0 1.45.6 1.45 1.38 0 .77-.6 1.38-1.45 1.38M19.52 28.5l-.63 1.4h1.25l-.62-1.4zm1.39 2.4h-.33l-.32-.72h-1.49l-.32.73h-.32l1.25-2.78h.28l1.25 2.78zM21.6 28.57h-.15v-.42h.36v.36c0 .32-.13.47-.43.54l-.05-.14c.2-.07.28-.17.26-.34M23.84 29.38c.6.13.89.36.89.78 0 .48-.4.79-.93.79-.43 0-.79-.15-1.11-.44l.19-.23c.28.26.55.39.93.39.37 0 .6-.2.6-.48 0-.26-.13-.4-.7-.52-.63-.14-.92-.34-.92-.8 0-.44.38-.76.9-.76.4 0 .68.12.96.34l-.18.24c-.26-.2-.5-.3-.79-.3-.35 0-.58.2-.58.45 0 .27.14.41.74.54M28.57 28.4c-.63 0-1.07.5-1.07 1.13 0 .62.45 1.14 1.07 1.14.63 0 1.07-.5 1.07-1.14 0-.63-.45-1.14-1.07-1.14m0 2.56c-.83 0-1.39-.65-1.39-1.42 0-.76.57-1.42 1.4-1.42.82 0 1.38.65 1.38 1.42 0 .76-.56 1.42-1.4 1.42M31 28.15h.31v2.47h1.53v.29H31zM34.46 30.91h-.31v-1.09l-1.14-1.67h.38l.91 1.38.93-1.38h.36l-1.13 1.66zM37.78 30.15h-.02l-.99-1.47v2.23h-.3v-2.76h.31l.99 1.51 1-1.51h.31v2.76h-.31v-2.23zM41.23 28.44h-.69v1.21h.68c.45 0 .75-.24.75-.6 0-.4-.3-.6-.74-.6m-.02 1.48h-.67v.98h-.3v-2.76h1.02c.61 0 1.02.33 1.02.88 0 .6-.5.9-1.07.9M43.25 30.91h.31v-2.76h-.31zM46 30.95c-.8 0-1.37-.62-1.37-1.42 0-.78.57-1.42 1.38-1.42.49 0 .79.17 1.06.43l-.21.23a1.18 1.18 0 00-.86-.38c-.6 0-1.05.5-1.05 1.14 0 .64.45 1.14 1.05 1.14.38 0 .62-.15.88-.4l.2.2c-.28.3-.6.48-1.09.48M51.57 28.15h.3v2.76h-.24l-1.76-2.26v2.26h-.3v-2.76h.29l1.71 2.21zM55 28.44h-1.66v.94h1.49v.28h-1.49v.96h1.68v.29h-1.99v-2.76H55zM57.06 30.91h-.31v-2.47h-.91v-.29h2.14v.29h-.92zM60.59 28.15h.25l.75 2.3.78-2.3h.32l-.97 2.78h-.26l-.75-2.24-.75 2.24h-.26l-.97-2.78h.34l.77 2.3zM64.76 28.4c-.62 0-1.06.5-1.06 1.13 0 .62.45 1.14 1.07 1.14.63 0 1.07-.5 1.07-1.14 0-.63-.45-1.14-1.08-1.14m0 2.56c-.82 0-1.38-.65-1.38-1.42 0-.76.56-1.42 1.4-1.42.82 0 1.38.65 1.38 1.42 0 .76-.57 1.42-1.4 1.42M68.35 28.44h-.84v1.12h.83c.41 0 .7-.22.7-.57s-.25-.55-.7-.55zm.72 2.47l-.79-1.07h-.77v1.07h-.31v-2.76h1.17c.6 0 .98.33.98.83 0 .46-.3.72-.74.8l.84 1.13h-.38zM72.72 30.91h-.38l-1.05-1.34-.58.6v.74h-.31v-2.76h.31v1.65l1.56-1.65h.4l-1.17 1.21zM11.67 15.67c2.1 0 3.8-1.72 3.8-3.84 0-2.13-1.7-3.85-3.8-3.85-2.1 0-3.8 1.72-3.8 3.85 0 2.12 1.7 3.84 3.8 3.84M7.28 15.67c-2.1 0-3.8-1.72-3.8-3.84 0-2.13 1.7-3.85 3.8-3.85v7.69zM16.06 19.9v-3.64h3.6a3.63 3.63 0 01-3.6 3.65M7.28 3.74V7.4H3.66a3.63 3.63 0 013.62-3.65M7.28 19.9v-3.64H3.66a3.63 3.63 0 003.62 3.65M20.45 15.13v-6.6a3.84 3.84 0 010 6.6M8.4 2.95h6.53a3.79 3.79 0 00-6.53 0M14.88 20.7H8.35a3.8 3.8 0 006.53 0M15.47 16.26c0 2.12-1.7 3.85-3.8 3.85-2.1 0-3.8-1.73-3.8-3.85h7.6zM16.06 15.67c2.1 0 3.8-1.72 3.8-3.84 0-2.13-1.7-3.85-3.8-3.85v7.69zM15.47 7.4c0-2.13-1.7-3.85-3.8-3.85-2.1 0-3.8 1.72-3.8 3.85h7.6zM2.88 15.13v-6.6a3.85 3.85 0 000 6.6M19.67 7.4h-3.61V3.73c1.99 0 3.6 1.64 3.6 3.65"
                            })]
                        })]
                    })
                };
            h.propTypes = {
                className: r().string,
                height: r().string,
                width: r().string
            };
            const o = h
        },
        83852: (t, e, a) => {
            a.d(e, {
                T: () => p,
                g: () => v
            });
            a(58109), a(95566), a(68438), a(83464), a(19496);
            var s = a(4942),
                r = a(92972),
                n = a.n(r),
                l = a(14507),
                i = a.n(l),
                h = a(60384),
                o = a(56552);

            function c(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(a), !0).forEach((function(e) {
                        (0, s.Z)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var p = function(t) {
                var e = t.className,
                    a = t.width,
                    s = void 0 === a ? "10px" : a,
                    r = t.height,
                    n = void 0 === r ? "10px" : r,
                    l = t.isDecorative,
                    h = t.points,
                    c = t.type,
                    p = d({
                        className: i()("chevronIcon", h, e),
                        width: s,
                        height: n
                    }, l ? {
                        role: "presentation"
                    } : {
                        "aria-label": c,
                        "aria-hidden": !0
                    });
                return (0, o.jsx)("svg", d(d({
                    viewBox: "0 0 10 10",
                    focusable: "false"
                }, p), {}, {
                    children: (0, o.jsx)("g", {
                        children: (0, o.jsx)("path", {
                            d: "M10,0v3L5,7L0,3V0l5,4L10,0z"
                        })
                    })
                }))
            };
            p.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string,
                points: n().string,
                isDecorative: n().bool
            };
            var v = (0, h.T)(p)
        },
        90951: (t, e, a) => {
            a.d(e, {
                R: () => c,
                x: () => o
            });
            var s = a(92972),
                r = a.n(s),
                n = a(14507),
                l = a.n(n),
                i = a(60384),
                h = a(56552),
                o = function(t) {
                    var e = t.className,
                        a = t.width,
                        s = void 0 === a ? "1.5rem" : a,
                        r = t.height,
                        n = void 0 === r ? "1.5rem" : r,
                        i = l()("feedbackIcon", e);
                    return (0, h.jsx)("svg", {
                        className: i,
                        width: s,
                        height: n,
                        viewBox: "2 2 20 20",
                        children: (0, h.jsx)("g", {
                            fillRule: "evenodd",
                            children: (0, h.jsx)("path", {
                                d: "m20 2h-16c-1.1 0-1.99 0.9-1.99 2l-0.01 18 4-4h14c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2v-4h2v4z",
                                fillRule: "nonzero"
                            })
                        })
                    })
                };
            o.propTypes = {
                className: r().string,
                height: r().string,
                width: r().string
            };
            var c = (0, i.T)(o)
        },
        85161: (t, e, a) => {
            a.r(e), a.d(e, {
                IconFollow: () => T,
                IconFollowed: () => F,
                default: () => nt
            });
            a(58109), a(95566), a(68438), a(83464), a(19496);
            var s = a(4942),
                r = a(92972),
                n = a.n(r),
                l = a(83852),
                i = a(14507),
                h = a.n(i),
                o = a(56552),
                c = function(t) {
                    var e = t.className,
                        a = h()("chevronIcon", e);
                    return (0, o.jsx)("svg", {
                        className: a,
                        width: "10",
                        height: "5",
                        viewBox: "0 0 10 5",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, o.jsx)("path", {
                            d: "M0 0L5 5L10 0H0Z",
                            fill: "#545454"
                        })
                    })
                };
            c.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string,
                label: n().string,
                points: n().string,
                isDecorative: n().bool
            };
            const d = c;
            var p = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "19px" : a,
                    r = t.width,
                    n = void 0 === r ? "20px" : r,
                    l = h()("closeIcon", e);
                return (0, o.jsx)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    viewBox: "0 0 20 19",
                    focusable: "false",
                    "aria-label": "close",
                    children: (0, o.jsx)("polygon", {
                        points: "20 0.01 17.6 0 10 7.6 2.4 0 0 0.01 8.79 8.81 0 17.6 2.44 17.57 10 10.02 17.56 17.57 20 17.6 11.21 8.81 20 0.01"
                    })
                })
            };
            p.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const v = p;
            var f = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "18px" : a,
                    r = t.width,
                    n = void 0 === r ? "18px" : r,
                    l = h()("iconExclamation", e);
                return (0, o.jsx)("svg", {
                    width: n,
                    height: s,
                    className: l,
                    viewBox: "0 0 18 18",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    focusable: "false",
                    "aria-hidden": "true",
                    children: (0, o.jsx)("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, o.jsx)("g", {
                            transform: "translate(-3.000000, -4.000000)",
                            children: (0, o.jsxs)("g", {
                                transform: "translate(4.000000, 3.000000)",
                                children: [(0, o.jsx)("circle", {
                                    cx: "8",
                                    cy: "10",
                                    r: "8"
                                }), (0, o.jsx)("text", {
                                    transform: "translate(8.000000, 8.500000) scale(-1, 1) translate(-8.000000, -8.500000) ",
                                    fontFamily: "Radio Canada",
                                    fontSize: "14",
                                    fontWeight: "bold",
                                    fill: "#FFFFFF",
                                    children: (0, o.jsx)("tspan", {
                                        x: "6",
                                        y: "15",
                                        children: "!"
                                    })
                                })]
                            })
                        })
                    })
                })
            };
            f.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const g = f;
            var x = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "15px" : a,
                    r = t.width,
                    n = void 0 === r ? "20px" : r,
                    l = h()("emailIcon", e);
                return (0, o.jsx)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    viewBox: "0 0 20 15",
                    version: "1.1",
                    focusable: "false",
                    "aria-hidden": "true",
                    children: (0, o.jsx)("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, o.jsx)("g", {
                            transform: "translate(-388.000000, -361.000000)",
                            fill: "#246CFF",
                            fillRule: "nonzero",
                            children: (0, o.jsx)("g", {
                                transform: "translate(388.000000, 361.000000)",
                                children: (0, o.jsx)("path", {
                                    d: "M17.9190341,0 L1.85369318,0 C0.829913885,0 0,0.839453125 0,1.875 L0,13.125 C0,14.1605469 0.829913885,15 1.85369318,15 L17.9190341,15 C18.9428134,15 19.7727273,14.1605469 19.7727273,13.125 L19.7727273,1.875 C19.7727273,0.839453125 18.9428134,0 17.9190341,0 Z M17.9190341,1.875 L17.9190341,3.46894531 C17.0531277,4.1821875 15.6726669,5.29125 12.7214715,7.62871094 C12.0710955,8.14617187 10.7827788,9.38933594 9.88636364,9.37484375 C8.99010298,9.38949219 7.70136142,8.14597656 7.05125577,7.62871094 C4.10052379,5.29160156 2.71971547,4.18230469 1.85369318,3.46894531 L1.85369318,1.875 L17.9190341,1.875 Z M1.85369318,13.125 L1.85369318,5.87492187 C2.73859996,6.58785156 3.99351163,7.58828125 5.90625266,9.10328125 C6.75033958,9.77535156 8.22854403,11.2589844 9.88636364,11.2499609 C11.5360347,11.2589844 12.9955091,9.796875 13.866127,9.10359375 C15.7788295,7.58863281 17.0340887,6.58792969 17.9190341,5.87492187 L17.9190341,13.125 L1.85369318,13.125 Z",
                                    id: "Shape"
                                })
                            })
                        })
                    })
                })
            };
            x.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const j = x;
            var m = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "18px" : a,
                    r = t.width,
                    n = void 0 === r ? "71px" : r,
                    l = h()("logoIcon", e);
                return (0, o.jsxs)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    viewBox: "0 0 71 18",
                    children: [(0, o.jsx)("path", {
                        d: "M12.2646923,8.95707692 C12.2646923,10.719 10.8364615,12.1472308 9.07476923,12.1472308 C7.31307692,12.1472308 5.88484615,10.719 5.88484615,8.95707692 C5.88484615,7.19538462 7.31307692,5.76738462 9.07476923,5.76738462 C10.8364615,5.76738462 12.2646923,7.19538462 12.2646923,8.95707692",
                        id: "Fill-1",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M5.39307692,12.147 C3.63,12.147 2.20130769,10.719 2.20130769,8.95753846 C2.20130769,7.19561538 3.63,5.766 5.39284615,5.766 L5.39307692,12.147",
                        id: "Fill-2",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M12.7596923,15.6664615 L12.7603846,12.6394615 L15.7887692,12.6408462 C15.7887692,14.3141538 14.4323077,15.6664615 12.7596923,15.6664615",
                        id: "Fill-3",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M5.39284615,2.24469231 L5.39284615,5.27538462 L2.36053846,5.27584615 C2.36053846,3.60207692 3.71861538,2.24469231 5.39284615,2.24469231",
                        id: "Fill-4",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M5.39307692,15.6683077 L5.39307692,12.6394615 L2.36123077,12.6408462 C2.36123077,14.3139231 3.71792308,15.6683077 5.39307692,15.6683077",
                        id: "Fill-5",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M16.4455385,11.6986154 L16.4439231,6.21623077 C17.3778462,6.77238462 18.0034615,7.79169231 18.0034615,8.95753846 C18.0034615,10.1229231 17.3778462,11.1413077 16.4455385,11.6986154",
                        id: "Fill-6",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M6.33484615,1.58861538 L11.8174615,1.58953846 C11.2610769,0.655615385 10.2429231,0.0311538462 9.07684615,0.0311538462 C7.911,0.0311538462 6.89123077,0.655615385 6.33484615,1.58861538",
                        id: "Fill-7",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M11.7770769,16.3255385 L6.29353846,16.3248462 C6.85015385,17.2583077 7.869,17.8841538 9.03530769,17.8841538 C10.2011538,17.8841538 11.22,17.259 11.7770769,16.3255385",
                        id: "Fill-8",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M12.2658462,12.6408462 C12.2658462,14.4032308 10.8380769,15.831 9.07661538,15.831 C7.31423077,15.831 5.88484615,14.4032308 5.88484615,12.6408462 L12.2658462,12.6408462",
                        id: "Fill-9",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M12.7603846,12.147 C14.5220769,12.147 15.9514615,10.719 15.9514615,8.95753846 C15.9514615,7.19561538 14.5220769,5.766 12.7603846,5.766 L12.7603846,12.147",
                        id: "Fill-10",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M12.2658462,5.27907692 C12.2658462,3.51738462 10.8380769,2.08938462 9.07661538,2.08938462 C7.31423077,2.08938462 5.88484615,3.51738462 5.88484615,5.27907692 L12.2658462,5.27907692",
                        id: "Fill-11",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M1.70769231,11.6986154 L1.70907692,6.21623077 C0.774923077,6.77238462 0.150461538,7.79169231 0.150461538,8.95753846 C0.150461538,10.1229231 0.774923077,11.1413077 1.70769231,11.6986154",
                        id: "Fill-12",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M15.789,5.277 L12.7603846,5.27538462 L12.7596923,2.24746154 C14.4325385,2.24746154 15.789,3.60323077 15.789,5.277",
                        id: "Fill-13",
                        fill: "#D8232A"
                    }), (0, o.jsx)("path", {
                        d: "M29.9725385,17.8790769 C24.8926154,17.8790769 21.1197692,13.9583077 21.1197692,9.00184615 L21.1197692,8.95246154 C21.1197692,4.04538462 24.8187692,0.0258461538 30.1204615,0.0258461538 C33.3752308,0.0258461538 35.3233846,1.11092308 36.9263077,2.68915385 L34.5096923,5.47546154 C33.1781538,4.26738462 31.8219231,3.52753846 30.0957692,3.52753846 C27.186,3.52753846 25.0899231,5.94415385 25.0899231,8.90330769 L25.0899231,8.95246154 C25.0899231,11.9116154 27.1366154,14.3776154 30.0957692,14.3776154 C32.0683846,14.3776154 33.2769231,13.5883846 34.6331538,12.3553846 L37.0495385,14.7966923 C35.2742308,16.6954615 33.3013846,17.8790769 29.9725385,17.8790769",
                        id: "Fill-14",
                        fill: "#1A1919"
                    }), (0, o.jsx)("path", {
                        d: "M49.5923077,12.4465385 C49.5923077,11.2479231 48.6999231,10.5083077 46.6848462,10.5083077 L42.1451538,10.5083077 L42.1451538,14.436 L46.8124615,14.436 C48.5469231,14.436 49.5923077,13.8237692 49.5923077,12.4977692 L49.5923077,12.4465385 Z M48.5976923,5.30538462 C48.5976923,4.13215385 47.6796923,3.46915385 46.0218462,3.46915385 L42.1451538,3.46915385 L42.1451538,7.24361538 L45.7668462,7.24361538 C47.5010769,7.24361538 48.5976923,6.68261538 48.5976923,5.35638462 L48.5976923,5.30538462 Z M46.8124615,17.8790769 L38.3194615,17.8790769 L38.3194615,0.0258461538 L46.6084615,0.0258461538 C50.2555385,0.0258461538 52.5,1.83669231 52.5,4.64238462 L52.5,4.69338462 C52.5,6.70823077 51.4287692,7.83023077 50.1535385,8.54446154 C52.2193846,9.33507692 53.4946154,10.5336923 53.4946154,12.9313846 L53.4946154,12.9823846 C53.4946154,16.2468462 50.8421538,17.8790769 46.8124615,17.8790769 L46.8124615,17.8790769 Z",
                        id: "Fill-15",
                        fill: "#1A1919"
                    }), (0, o.jsx)("path", {
                        d: "M63.4393846,17.8790769 C58.3596923,17.8790769 54.5868462,13.9583077 54.5868462,9.00184615 L54.5868462,8.95246154 C54.5868462,4.04538462 58.2856154,0.0258461538 63.5875385,0.0258461538 C66.8423077,0.0258461538 68.7904615,1.11092308 70.3933846,2.68915385 L67.9767692,5.47546154 C66.645,4.26738462 65.2887692,3.52753846 63.5626154,3.52753846 C60.6530769,3.52753846 58.557,5.94415385 58.557,8.90330769 L58.557,8.95246154 C58.557,11.9116154 60.6036923,14.3776154 63.5626154,14.3776154 C65.5354615,14.3776154 66.7437692,13.5883846 68.1,12.3553846 L70.5166154,14.7966923 C68.7413077,16.6954615 66.7682308,17.8790769 63.4393846,17.8790769",
                        id: "Fill-16",
                        fill: "#1A1919"
                    })]
                })
            };
            m.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const u = m;
            var w = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "32px" : a,
                    r = t.width,
                    n = void 0 === r ? "32px" : r,
                    l = h()("mediaIcon", e);
                return (0, o.jsxs)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    viewBox: "0 0 200 200",
                    focusable: "false",
                    "aria-label": "play",
                    children: [(0, o.jsx)("circle", {
                        cx: "100",
                        cy: "100",
                        r: "100",
                        fill: "none",
                        strokeWidth: "30"
                    }), (0, o.jsx)("polygon", {
                        points: "70, 55 70, 145 145, 100"
                    })]
                })
            };
            w.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const M = w;
            var b = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "16px" : a,
                    r = t.width,
                    n = void 0 === r ? "16px" : r,
                    l = h()("searchIcon", e);
                return (0, o.jsx)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    viewBox: "0 0 16 16",
                    focusable: "false",
                    children: (0, o.jsx)("path", {
                        id: "icon",
                        d: "M14.2744 16L8.85699 10.4C8.42704 10.7556 7.9326 11.037 7.37366 11.2444C6.81472 11.4519 6.21996 11.5556 5.58936 11.5556C4.02721 11.5556 2.70511 10.9963 1.62307 9.87778C0.541022 8.75926 0 7.39259 0 5.77778C0 4.16296 0.541022 2.7963 1.62307 1.67778C2.70511 0.559259 4.02721 0 5.58936 0C7.15152 0 8.47362 0.559259 9.55566 1.67778C10.6377 2.7963 11.1787 4.16296 11.1787 5.77778C11.1787 6.42963 11.0784 7.04444 10.8778 7.62222C10.6771 8.2 10.4048 8.71111 10.0609 9.15556L15.4782 14.7556L14.2744 16ZM5.58936 9.77778C6.66424 9.77778 7.57789 9.38889 8.3303 8.61111C9.08272 7.83333 9.45892 6.88889 9.45892 5.77778C9.45892 4.66667 9.08272 3.72222 8.3303 2.94444C7.57789 2.16667 6.66424 1.77778 5.58936 1.77778C4.51449 1.77778 3.60084 2.16667 2.84843 2.94444C2.09601 3.72222 1.7198 4.66667 1.7198 5.77778C1.7198 6.88889 2.09601 7.83333 2.84843 8.61111C3.60084 9.38889 4.51449 9.77778 5.58936 9.77778Z"
                    })
                })
            };
            b.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const y = b;
            var L = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "20px" : a,
                    r = t.width,
                    n = void 0 === r ? "20px" : r,
                    l = h()("removeIcon", e);
                return (0, o.jsx)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    focusable: "false",
                    viewBox: "0 0 15.65 15.65",
                    children: (0, o.jsx)("polygon", {
                        id: "+",
                        transform: "rotate(-315 7.8190884590148935,7.108262062072755) translate(-30,-37) ",
                        points: "39.81908944994211,43.10826139897108 47.81908944994211,43.10826139897108 47.81908944994211,46.10826139897108 39.81908944994211,46.10826139897108 39.81908944994211,54.10826139897108 36.81908944994211,54.10826139897108 36.81908944994211,46.10826139897108 28.81908754259348,46.10826139897108 28.81908754259348,43.10826139897108 36.81908944994211,43.10826139897108 36.81908944994211,35.10826139897108 39.81908944994211,35.10826139897108 "
                    })
                })
            };
            L.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const O = L;
            var C = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "15px" : a,
                    r = t.width,
                    n = void 0 === r ? "15px" : r,
                    l = h()("searchIcon", e);
                return (0, o.jsx)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    viewBox: "0 0 107.9 105.1",
                    focusable: "false",
                    children: (0, o.jsxs)("g", {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "MagnifierIcon2",
                        children: [(0, o.jsx)("path", {
                            d: "M99.5,105c-2,0-4-0.8-5.5-2.3L66.3,74.9c-3-3-3-7.9,0-10.9c3-3,7.9-3,10.9,0l27.7,27.8c3,3,3,7.9,0,10.9 C103.4,104.2,101.4,105,99.5,105z"
                        }), (0, o.jsx)("path", {
                            d: "M44.8,89.2c-24.3,0-44.1-19.8-44.1-44.1S20.4,1,44.8,1c24.3,0,44.1,19.8,44.1,44.1S69.1,89.2,44.8,89.2z M44.8,16.4c-15.8,0-28.7,12.9-28.7,28.7c0,15.8,12.9,28.7,28.7,28.7c15.8,0,28.7-12.9,28.7-28.7C73.5,29.3,60.6,16.4,44.8,16.4z"
                        })]
                    })
                })
            };
            C.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const N = C;
            var Z = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "16px" : a,
                    r = t.width,
                    n = void 0 === r ? "16px" : r,
                    l = h()("profileIcon", e);
                return (0, o.jsx)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    focusable: "false",
                    children: (0, o.jsxs)("g", {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "Asset-7",
                        transform: "translate(6.000000, 0.000000)",
                        children: [(0, o.jsx)("path", {
                            d: "M-3.2,22.9c-0.7,0-1.2-0.7-0.9-1.3C-3.4,19.4-1,15.3,6,15.3c7,0,9.4,4.1,10.2,6.3c0.2,0.7-0.2,1.3-0.9,1.3H-3.2z",
                            id: "Path"
                        }), (0, o.jsx)("ellipse", {
                            id: "Oval",
                            cx: "6",
                            cy: "7",
                            rx: "5.8",
                            ry: "5.9"
                        })]
                    })
                })
            };
            Z.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const H = Z;
            var z = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "24px" : a,
                    r = t.width,
                    n = void 0 === r ? "24px" : r,
                    l = h()("settingsIcon", e);
                return (0, o.jsx)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    focusable: "false",
                    "aria-hidden": "true",
                    children: (0, o.jsx)("path", {
                        d: "M23.72,10.67a1.06,1.06,0,0,0-.74-.34l-2-.09a9.15,9.15,0,0,0-1-2.69L21.48,6.2a1.06,1.06,0,0,0,.06-1.5L20.08,3.11A1.06,1.06,0,0,0,18.59,3L17.12,4.4a9.15,9.15,0,0,0-2.6-1.21l.09-2a1.06,1.06,0,0,0-1-1.1L11.43,0a1.06,1.06,0,0,0-1.1,1l-.09,2A9.12,9.12,0,0,0,7.55,4L6.2,2.52a1.06,1.06,0,0,0-1.5-.06L3.11,3.92a1.06,1.06,0,0,0-.06,1.5L4.4,6.88a9.18,9.18,0,0,0-1.21,2.6l-2-.09a1.06,1.06,0,0,0-1.1,1L0,12.57a1.06,1.06,0,0,0,1,1.1l2,.09a9.15,9.15,0,0,0,1,2.69L2.52,17.8a1.06,1.06,0,0,0-.06,1.5l1.46,1.59a1.06,1.06,0,0,0,1.5.06L6.88,19.6a9.17,9.17,0,0,0,2.6,1.21l-.09,2a1.06,1.06,0,0,0,1,1.1l2.16.09h0a1.06,1.06,0,0,0,1.06-1l.08-2a9.16,9.16,0,0,0,2.69-1l1.35,1.47a1.06,1.06,0,0,0,1.5.06l1.59-1.46a1.06,1.06,0,0,0,.06-1.5L19.6,17.12a9.13,9.13,0,0,0,1.21-2.6l2,.09a1.06,1.06,0,0,0,1.1-1L24,11.43A1.06,1.06,0,0,0,23.72,10.67ZM11.79,16.94A4.94,4.94,0,0,1,12,7.06h.22a4.94,4.94,0,1,1-.42,9.87Z"
                    })
                })
            };
            z.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const A = z;
            var D = a(60384),
                V = function(t) {
                    var e = t.className,
                        a = t.height,
                        s = void 0 === a ? "31px" : a,
                        r = t.width,
                        n = void 0 === r ? "31px" : r,
                        l = h()("followedIcon", e);
                    return (0, o.jsx)("svg", {
                        width: n,
                        height: s,
                        className: l,
                        viewBox: "0 0 31 31",
                        version: "1.1",
                        children: (0, o.jsx)("g", {
                            stroke: "none",
                            fillRule: "evenodd",
                            children: (0, o.jsx)("g", {
                                transform: "translate(-307.000000, -920.000000)",
                                children: (0, o.jsx)("g", {
                                    transform: "translate(307.000000, 920.000000)",
                                    children: (0, o.jsxs)("g", {
                                        children: [(0, o.jsx)("g", {
                                            children: (0, o.jsx)("circle", {
                                                id: "Oval",
                                                cx: "15.5",
                                                cy: "15.5",
                                                r: "15.5"
                                            })
                                        }), (0, o.jsx)("polyline", {
                                            stroke: "#FFFFFF",
                                            strokeWidth: "3.5",
                                            points: "9 15.5234375 15.013916 21.046875 22.7717285 10"
                                        })]
                                    })
                                })
                            })
                        })
                    })
                };
            V.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            var F = (0, D.T)(V),
                P = function(t) {
                    var e = t.className,
                        a = t.height,
                        s = void 0 === a ? "32px" : a,
                        r = t.width,
                        n = void 0 === r ? "32px" : r,
                        l = h()("followIcon", e);
                    return (0, o.jsx)("svg", {
                        className: l,
                        width: n,
                        height: s,
                        viewBox: "0 0 32 32",
                        children: (0, o.jsx)("g", {
                            fillRule: "evenodd",
                            children: (0, o.jsx)("path", {
                                d: "m16 0c8.8366 0 16 7.1634 16 16s-7.1634 16-16 16-16-7.1634-16-16 7.1634-16 16-16zm1.1176 8.1765h-2.2353v6.7059h-6.7059v2.2353h6.7059v6.7059h2.2353v-6.7059h6.7059v-2.2353h-6.7059v-6.7059z"
                            })
                        })
                    })
                };
            P.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            var T = (0, D.T)(P),
                _ = function(t) {
                    var e = t.className,
                        a = t.height,
                        s = void 0 === a ? "32px" : a,
                        r = t.width,
                        n = void 0 === r ? "32px" : r,
                        l = h()("unfollowIcon", e);
                    return (0, o.jsx)("svg", {
                        width: n,
                        height: s,
                        viewBox: "0 0 32 32",
                        className: l,
                        children: (0, o.jsx)("g", {
                            fillRule: "evenodd",
                            children: (0, o.jsx)("path", {
                                d: "M16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 Z M23.6470588,15 L8,15 L8,18 L23.6470588,18 L23.6470588,15 Z"
                            })
                        })
                    })
                };
            _.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const I = _;
            var B = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "24px" : a,
                    r = t.width,
                    n = void 0 === r ? "24px" : r,
                    l = h()("backIcon", e);
                return (0, o.jsxs)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    focusable: "false",
                    "aria-hidden": "true",
                    children: [(0, o.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, o.jsx)("path", {
                        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                    })]
                })
            };
            B.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const E = B;
            var k = function(t) {
                    var e, a = t.name,
                        s = t.title,
                        r = {
                            newsletter: S,
                            chat: R,
                            stream: G
                        };
                    return e = r[a] ? r[a]() : s || "", (0, o.jsx)("div", {
                        children: e
                    })
                },
                S = function() {
                    return (0, o.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        focusable: "false",
                        className: "icon-feature",
                        children: [(0, o.jsx)("path", {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }), (0, o.jsx)("path", {
                            d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"
                        })]
                    })
                },
                R = function() {
                    return (0, o.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        focusable: "false",
                        className: "icon-feature",
                        children: [(0, o.jsx)("path", {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }), (0, o.jsx)("path", {
                            d: "M20 4v13.17L18.83 16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 10H6v2h12v-2zm0-3H6v2h12V9zm0-3H6v2h12V6z"
                        })]
                    })
                },
                G = function() {
                    return (0, o.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        focusable: "false",
                        className: "icon-feature",
                        children: [(0, o.jsx)("path", {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }), (0, o.jsx)("path", {
                            d: "M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"
                        })]
                    })
                };
            k.propTypes = {
                name: n().string,
                title: n().string
            };
            const W = k;
            var K = function(t) {
                var e = t.className,
                    a = t.height,
                    s = void 0 === a ? "24px" : a,
                    r = t.width,
                    n = void 0 === r ? "24px" : r,
                    l = h()("forwardIcon", e);
                return (0, o.jsxs)("svg", {
                    className: l,
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    focusable: "false",
                    "aria-hidden": "true",
                    children: [(0, o.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, o.jsx)("path", {
                        d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                    })]
                })
            };
            K.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const U = K;

            function q(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function X(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? q(Object(a), !0).forEach((function(e) {
                        (0, s.Z)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : q(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function Y(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function J(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Y(Object(a), !0).forEach((function(e) {
                        (0, s.Z)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Y(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var Q = a(90951),
                $ = a(41130),
                tt = function(t) {
                    var e = t.className,
                        a = h()("paralympicsBroadcasterIcon", e);
                    return (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "74",
                        height: "32",
                        viewBox: "0 0 1677.17 872.1",
                        className: a,
                        role: "presentation",
                        children: (0, o.jsxs)("g", {
                            fill: "#FFFFFF",
                            fillRule: "nonzero",
                            children: [(0, o.jsx)("path", {
                                d: "M57,865.5a29.27,29.27,0,0,1-12.5,5.8,45.78,45.78,0,0,1-8.3.8,33.67,33.67,0,0,1-12.9-2.5A32.15,32.15,0,0,1,13,862.7a33.57,33.57,0,0,1-6.8-10.3,32.24,32.24,0,0,1-2.4-12.7v-.2a34.9,34.9,0,0,1,2.4-12.7A32.42,32.42,0,0,1,13,816.5a30.78,30.78,0,0,1,10.4-7,35.79,35.79,0,0,1,13.3-2.6,44.32,44.32,0,0,1,8.1.7,29.65,29.65,0,0,1,6.6,2,25,25,0,0,1,5.5,3.1,35.52,35.52,0,0,1,4.7,4l-8.8,10.1a34.72,34.72,0,0,0-7.5-5.2,19.63,19.63,0,0,0-8.6-1.9,16.88,16.88,0,0,0-13.1,5.8,20.7,20.7,0,0,0-3.8,6.2,21.78,21.78,0,0,0-1.4,7.6v.2a20.57,20.57,0,0,0,1.4,7.7,20.11,20.11,0,0,0,3.7,6.3,16.94,16.94,0,0,0,13.2,5.8,19,19,0,0,0,9.1-2,36,36,0,0,0,7.4-5.4l8.8,8.9A44.76,44.76,0,0,1,57,865.5Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M120,871l-5.8-14.1H87.6L81.9,871H67.7l27-63.5h12.8l27,63.5Zm-19-46.8-8.4,20.4h16.7Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M188.4,871l-30.5-40v40H144.2V808H157l29.5,38.8V808h13.7v63Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M262.2,871l-5.8-14.1H229.8L224,871H209.9l27-63.5h12.8l27,63.5Zm-19-46.8-8.4,20.4h16.7Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M342.1,851.9a28.93,28.93,0,0,1-6.9,10,32.84,32.84,0,0,1-10.6,6.7,36.72,36.72,0,0,1-13.5,2.5H286.5v-63H311a36.63,36.63,0,0,1,13.5,2.4,31.54,31.54,0,0,1,10.6,6.6A29.5,29.5,0,0,1,342,827a30.8,30.8,0,0,1,2.4,12.4v.2A30.88,30.88,0,0,1,342.1,851.9ZM330,839.5a22.77,22.77,0,0,0-1.4-7.7,18.27,18.27,0,0,0-3.9-6,17.29,17.29,0,0,0-6-3.9,20.57,20.57,0,0,0-7.7-1.4H300.3v38H311a22.25,22.25,0,0,0,7.7-1.3,16,16,0,0,0,6-3.9,17.86,17.86,0,0,0,3.9-5.9,19.87,19.87,0,0,0,1.4-7.7Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M403.7,871,398,856.8H371.3L365.5,871H351.4l27-63.5h12.8l27,63.5Zm-19.1-46.8-8.4,20.4H393Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M431.9,822.4h-5.5V808h14.5v12.2c0,5.9-1.4,10.2-4.3,12.8s-7,3.9-12.3,4l-1.2-5.7C429.4,830.6,432.4,827.6,431.9,822.4Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M497.5,860.7a16.68,16.68,0,0,1-4.7,6.1,22.13,22.13,0,0,1-7.3,3.8,32.64,32.64,0,0,1-9.3,1.3,40.87,40.87,0,0,1-14.2-2.5,38.61,38.61,0,0,1-12.6-7.6l8.2-9.8a43.08,43.08,0,0,0,8.9,5.6,24.23,24.23,0,0,0,10,2.1,12.11,12.11,0,0,0,6.7-1.6,5.12,5.12,0,0,0,2.4-4.4v-.2a6.87,6.87,0,0,0-.5-2.4,4.36,4.36,0,0,0-1.9-1.9,23.22,23.22,0,0,0-3.9-1.8c-1.7-.6-3.8-1.2-6.5-1.9-2.9-.7-5.8-1.6-8.7-2.6a21.24,21.24,0,0,1-6.6-3.6,14.56,14.56,0,0,1-4.2-5.3,17.52,17.52,0,0,1-1.5-7.8V826a17.67,17.67,0,0,1,6.1-13.8,22.39,22.39,0,0,1,6.9-3.9,27,27,0,0,1,8.9-1.3,39.33,39.33,0,0,1,12.7,2.1,38.49,38.49,0,0,1,10.7,5.9l-7.2,10.5a44.44,44.44,0,0,0-8.3-4.5,22.58,22.58,0,0,0-8.1-1.7c-2.7,0-4.7.5-6.1,1.6a4.74,4.74,0,0,0-2,3.9v.2a6.6,6.6,0,0,0,.6,2.7,5.06,5.06,0,0,0,2.1,2,19.44,19.44,0,0,0,4.2,1.7c1.8.5,4,1.2,6.7,1.9a65,65,0,0,1,8.5,2.8,22.54,22.54,0,0,1,6.3,3.8,14.27,14.27,0,0,1,3.9,5.2,17.52,17.52,0,0,1,1.3,7.1v.2A16.15,16.15,0,0,1,497.5,860.7Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M586.1,839.5a18.53,18.53,0,0,1-5.5,6.9,25,25,0,0,1-8.1,4.2,33.37,33.37,0,0,1-9.9,1.4H552.1v19H538.2V808H564a28.88,28.88,0,0,1,10.1,1.6,22.52,22.52,0,0,1,7.6,4.5,19.52,19.52,0,0,1,4.8,6.9,24.29,24.29,0,0,1,1.7,8.9v.2A22.2,22.2,0,0,1,586.1,839.5Zm-12-9.5c0-3.1-1-5.5-3-7.1s-4.7-2.4-8.2-2.4H552.2v19.3h11c3.5,0,6.2-.9,8.1-2.8a9.06,9.06,0,0,0,2.9-6.8Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M645.3,871l-5.8-14.1H612.9L607.1,871H593l27-63.5h12.8l27,63.5Zm-19.1-46.8-8.4,20.4h16.7Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M707.7,871l-13.5-20.2H683.3V871H669.4V808h28.8c7.5,0,13.3,1.8,17.5,5.5s6.3,8.8,6.3,15.3v.2c0,5.1-1.2,9.3-3.7,12.5a21.85,21.85,0,0,1-9.8,7.1l15.4,22.5H707.7Zm.3-41.5a8.34,8.34,0,0,0-2.9-6.8c-1.9-1.5-4.6-2.2-8-2.2H683.3v18.1h14c3.4,0,6-.8,7.9-2.4a8.69,8.69,0,0,0,2.8-6.5Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M781.4,871l-5.8-14.1H749L743.3,871H729.2l27-63.5H769L796,871Zm-19-46.8L754,844.6h16.7Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M805.6,871V808h13.9v50.5h31.4V871Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M892.9,845.8V871H879V846.1L854.9,808h16.2l15,25.3L901.4,808h15.8Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M975.1,871V829.8l-17.7,26.9H957l-17.5-26.6V871H925.8V808h14.9l16.6,26.6L973.9,808h14.9v63Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1051.8,839.5a19.32,19.32,0,0,1-5.4,6.9,25,25,0,0,1-8.1,4.2,33.57,33.57,0,0,1-10,1.4h-10.5v19h-13.9V808h25.7a28.88,28.88,0,0,1,10.1,1.6,22.52,22.52,0,0,1,7.6,4.5,19.52,19.52,0,0,1,4.8,6.9,24.29,24.29,0,0,1,1.7,8.9v.2A23.69,23.69,0,0,1,1051.8,839.5Zm-12.1-9.5c0-3.1-1-5.5-3-7.1s-4.7-2.4-8.2-2.4h-10.7v19.3h11c3.5,0,6.2-.9,8.1-2.8a9.06,9.06,0,0,0,2.9-6.8Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1064.7,871V808h13.9v63Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1144.6,865.5a29.27,29.27,0,0,1-12.5,5.8,45.78,45.78,0,0,1-8.3.8,33.67,33.67,0,0,1-12.9-2.5,32.15,32.15,0,0,1-10.3-6.9,33.57,33.57,0,0,1-6.8-10.3,32.24,32.24,0,0,1-2.4-12.7v-.2a34.9,34.9,0,0,1,2.4-12.7,32.42,32.42,0,0,1,6.8-10.3,31.38,31.38,0,0,1,10.3-7,35.79,35.79,0,0,1,13.3-2.6,44.32,44.32,0,0,1,8.1.7,29.65,29.65,0,0,1,6.6,2,25,25,0,0,1,5.5,3.1,35.52,35.52,0,0,1,4.7,4l-8.8,10.2a34.72,34.72,0,0,0-7.5-5.2,19.63,19.63,0,0,0-8.6-1.9,16.88,16.88,0,0,0-13.1,5.8,20.7,20.7,0,0,0-3.8,6.2,19.63,19.63,0,0,0-1.3,7.6v.2a22.65,22.65,0,0,0,1.3,7.7,20.11,20.11,0,0,0,3.7,6.3,16.94,16.94,0,0,0,13.2,5.8,19,19,0,0,0,9.1-2,36,36,0,0,0,7.4-5.4l8.8,8.9A36,36,0,0,1,1144.6,865.5Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1231.9,871l-30.5-40v40h-13.7V808h12.8l29.5,38.8V808h13.7v63Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1258.8,871V808h47.4v12.3h-33.8v12.8h29.7v12.3h-29.7v13.2h34.2V871Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1347.6,820.7V871h-13.9V820.7h-19.2V808h52.2v12.8Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1446.6,871.4h-12.1l-14.2-41.2-14.2,41.2H1394L1372.5,808h14.8l13,42.7,14.1-42.8h11.9l14.1,42.8,13.1-42.7H1468Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1540,852.1a32.61,32.61,0,0,1-17.6,17.4,36.75,36.75,0,0,1-26.9,0,35.23,35.23,0,0,1-10.6-6.9,30.11,30.11,0,0,1-6.9-10.3,32.19,32.19,0,0,1-2.5-12.6v-.2a33,33,0,0,1,2.5-12.7,32,32,0,0,1,17.6-17.4,36.43,36.43,0,0,1,13.5-2.6,32.35,32.35,0,0,1,13.4,2.6,35.23,35.23,0,0,1,10.6,6.9,30.11,30.11,0,0,1,6.9,10.3,32.33,32.33,0,0,1,2.5,12.7v.2A30.5,30.5,0,0,1,1540,852.1Zm-12-12.6a22.77,22.77,0,0,0-1.4-7.7,19.24,19.24,0,0,0-10-10.6,18.33,18.33,0,0,0-7.7-1.6,20.31,20.31,0,0,0-7.7,1.5,16.73,16.73,0,0,0-5.9,4.2,19.13,19.13,0,0,0-3.9,6.2,21.78,21.78,0,0,0-1.4,7.6v.2a22.77,22.77,0,0,0,1.4,7.7,19.24,19.24,0,0,0,10,10.6,18.33,18.33,0,0,0,7.7,1.6,20.69,20.69,0,0,0,7.7-1.5,18.08,18.08,0,0,0,6-4.2,19.58,19.58,0,0,0,3.9-6.3,21.78,21.78,0,0,0,1.4-7.6Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1593.1,871l-13.5-20.2h-10.9V871h-13.9V808h28.8c7.5,0,13.3,1.8,17.5,5.5s6.3,8.8,6.3,15.3v.2c0,5.1-1.2,9.3-3.7,12.5a21.85,21.85,0,0,1-9.8,7.1l15.4,22.5h-16.2Zm.3-41.5a8.34,8.34,0,0,0-2.9-6.8c-1.9-1.6-4.6-2.2-8-2.2h-13.8v18.1h14c3.4,0,6-.8,7.9-2.4a8.69,8.69,0,0,0,2.8-6.5Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1660.6,871l-19.5-26.8-7.3,7.6V871H1620V808h13.9v27.5l25.5-27.5h16.7l-25.7,26.7,26.8,36.3Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1181,535.6c-3.3,1.1-53.6-.4-44.1-42.4s88.3-64.3,101.9-57.7c-19.9,7.8-59.8,11.5-78.8,53.3-18.8,41.4,20.7,46.2,21,46.8",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1256.1,565.8c-1.3,3.2-34.7,40.8-60.9,6.6s7.5-109,21.4-115.1c-6.9,20.2-29.6,53.2-9.8,94.7,19.5,40.8,48.6,13.6,49.3,13.8",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1326.1,507.6c2.8,2.1,30.5,44.1-9.4,60.5s-103.3-35.4-105.7-50.4c17.7,11.8,43.7,42.4,88.9,34,44.6-8.2,25.8-43.4,26.2-44.1",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1509.4,287c-99.6,10.3-75.6,0-86-42.9-5.8.6-56.8,59-71.2,27.7,4.5-40.3,6.4-47.9,10.5-88.1-13.7,6.6-25,20.6-47.3,24.8a13.92,13.92,0,0,1-6.4-.4c-26.6-17.6-24.5-63.4-34.4-132.9-41.6,60.6-49.1,95.4-50.2,109.6-1.5,6.2-12.6,65.9,62,184.3,30.4,48.2,6.2,98.3,2.5,104.7,11.1-10.9,77.4-65.9,72.5-147.1,17.3,48.2,15.2,100.2-12.4,143.7-8.9,14.1-4.6,7.6-13.2,17.9,30.3-9.6,107.1,3.2,122.8-3.1-9.2-12.2-54.9-20.7-28-38.8,38.8-35.9,4-5.9,43.5-39.7-.2-1.1,53.1-36.6,53-37.3-46.6-10.4-20.2-45.6-17.7-82.4",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1233.8,326.9c6.1,6.6-65.5-98.3-30.9-158.7,0,0-94.4,83.9,1.7,136.7.1.1,19.8,11.9,29.2,22",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M1297.9,678.6c-185.6,0-336.6-151-336.6-336.6S1112.3,5.4,1297.9,5.4s336.6,151,336.6,336.6-151,336.6-336.6,336.6m0-643.9c-169.5,0-307.3,137.9-307.3,307.3s137.9,307.3,307.3,307.3S1605.2,511.5,1605.2,342,1467.3,34.7,1297.9,34.7",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("rect", {
                                x: "814.77",
                                width: "4",
                                height: "684"
                            }), (0, o.jsx)("path", {
                                d: "M336.6,462.3A120.25,120.25,0,1,0,216.3,342.1c-.1,66.3,53.8,120.2,120.3,120.2Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M197.7,462.3a120.31,120.31,0,0,1-2.2-240.6h2.2Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M475.5,595V480.9H589.7A114.12,114.12,0,0,1,475.6,595Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M197.7,88.9V203.2H83.3A114.42,114.42,0,0,1,197.7,88.9",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M197.7,595.1V480.9H83.4A114.16,114.16,0,0,0,197.6,595.1Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M614.5,445.4l-.1-206.7a120.32,120.32,0,0,1,.1,206.7Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M233.2,64.1H439.9a120.29,120.29,0,0,0-206.7,0Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M438.4,619.8H231.7a120.16,120.16,0,0,0,206.7,0Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M456.8,480.9a120.3,120.3,0,0,1-240.6,0Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M475.5,462.3a120.31,120.31,0,0,0,2.2-240.6h-2.2Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M456.8,203.3a120.3,120.3,0,1,0-240.6,0Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M58.7,445.4l.1-206.7a120.38,120.38,0,0,0-.1,206.7Z",
                                transform: "translate(-0.03)"
                            }), (0, o.jsx)("path", {
                                d: "M589.7,203.2l-114.2-.1V89A114.16,114.16,0,0,1,589.7,203.2",
                                transform: "translate(-0.03)"
                            })]
                        })
                    })
                };
            tt.propTypes = {
                className: n().string,
                height: n().string,
                width: n().string
            };
            const et = tt;

            function at(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function st(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? at(Object(a), !0).forEach((function(e) {
                        (0, s.Z)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : at(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var rt = {
                    back: E,
                    broadcaster: $.Z,
                    chevron: l.T,
                    triangle: d,
                    expand: function(t) {
                        var e = h()("expandIcon", t.className);
                        return (0, o.jsx)(l.g, X(X({}, t), {}, {
                            className: e
                        }))
                    },
                    collapse: function(t) {
                        var e = h()("collapseIcon", t.className);
                        return (0, o.jsx)(l.g, J(J({}, t), {}, {
                            className: e
                        }))
                    },
                    close: v,
                    email: j,
                    exclamation: g,
                    feature: W,
                    forward: U,
                    logo: u,
                    play: M,
                    remove: O,
                    search: N,
                    profile: H,
                    paralympicsBroadcaster: et,
                    newSearch: y,
                    settings: A,
                    followed: V,
                    follow: P,
                    unfollow: I,
                    feedback: Q.x
                },
                nt = function(t) {
                    var e = rt[t.type];
                    return (0, o.jsx)("span", {
                        className: "icon",
                        children: e && (0, o.jsx)(e, st({}, t))
                    })
                };
            nt.propTypes = {
                type: n().oneOf(Object.keys(rt)).isRequired
            }
        },
        60384: (t, e, a) => {
            a.d(e, {
                T: () => i
            });
            a(58109), a(95566), a(68438), a(83464), a(19496);
            var s = a(4942),
                r = a(56552);

            function n(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(a), !0).forEach((function(e) {
                        (0, s.Z)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var i = function(t) {
                return function(e) {
                    return (0, r.jsx)("span", {
                        className: "icon",
                        children: (0, r.jsx)(t, l({}, e))
                    })
                }
            }
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-5161.4551acdd8e853cbc628a.js.map