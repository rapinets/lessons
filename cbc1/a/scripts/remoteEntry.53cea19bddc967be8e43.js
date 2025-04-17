! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "38fd8c98-e207-43d6-996f-949dc47d36f7", e._sentryDebugIdIdentifier = "sentry-dbid-38fd8c98-e207-43d6-996f-949dc47d36f7")
    } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
    "_sentryBundlerPluginAppKey:ocelot": !0,
    scopeId: "scope-ocelot",
    release: "ocelot@7f8a802d220addea69a5e51a4d947ce80836be00"
});
var _global = "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {},
    ocelot;
_global.SENTRY_RELEASE = {
    id: "ocelot@7f8a802d220addea69a5e51a4d947ce80836be00"
}, (() => {
    var __webpack_modules__ = {
            53209: (e, t, r) => {
                Promise.all([r.e(7270), r.e(1889), r.e(7499), r.e(2904), r.e(5972), r.e(3172), r.e(6413), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(532), r.e(9351), r.e(5098), r.e(5151), r.e(3574), r.e(3110), r.e(3019), r.e(2820), r.e(5161), r.e(7109), r.e(2417), r.e(5770), r.e(3616)]).then(r.bind(r, 777))
            },
            56185: (e, t, r) => {
                "use strict";
                r.r(t);
                var o = r(75434),
                    n = r.n(o),
                    a = r(4919),
                    s = r(71636);
                const i = e => (0, a.QN)(`${e}/${a.OY.identifier}`),
                    c = e => (0, a.QN)(`${e}/VmokPrefetch`),
                    l = e => !!e && (("prefetchEntry" in e || "prefetchInterface" in e) && !(!e.prefetchEntry && !e.prefetchInterface));
                var u, d;
                null != (u = globalThis).__FEDERATION__ || (u.__FEDERATION__ = {}), null != (d = globalThis.__FEDERATION__).__PREFETCH__ || (d.__PREFETCH__ = {
                    entryLoading: {},
                    instance: new Map,
                    __PREFETCH_EXPORTS__: {}
                });
                class f {
                    get global() {
                        return globalThis.__FEDERATION__.__PREFETCH__
                    }
                    static getInstance(e) {
                        return globalThis.__FEDERATION__.__PREFETCH__.instance.get(e)
                    }
                    async loadEntry(e) {
                        const {
                            name: t,
                            remoteSnapshot: r,
                            remote: o,
                            origin: n
                        } = this._options;
                        if (e) {
                            const {
                                buildVersion: o,
                                globalName: n
                            } = r, s = n || `${t}:${o}`;
                            return this.global.entryLoading[s] || (this.global.entryLoading[s] = (0, a.ve)(e, {})), this.global.entryLoading[s]
                        } {
                            const e = (0, s.getRemoteInfo)(o),
                                t = n.moduleCache.get(e.name);
                            return (0, s.getRemoteEntry)({
                                origin: n,
                                remoteInfo: e,
                                remoteEntryExports: t ? t.remoteEntryExports : void 0
                            })
                        }
                    }
                    getProjectExports() {
                        var e, t = this;
                        if (Object.keys(this._exports).length > 0) return this._exports;
                        const {
                            name: r
                        } = this._options, o = null == (e = globalThis.__FEDERATION__.__PREFETCH__.__PREFETCH_EXPORTS__) ? void 0 : e[r], n = ("function" === typeof o ? o() : Promise.resolve({})).then((function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            const r = {};
                            Object.keys(e).forEach((t => {
                                r[t] = {};
                                const o = e[t];
                                Object.keys(o).reduce(((e, t) => ((t.toLocaleLowerCase().endsWith("prefetch") || "default" === t.toLocaleLowerCase()) && (e[t] = o[t]), e)), r[t])
                            })), t.memorizeExports(r)
                        }));
                        return n
                    }
                    memorizeExports(e) {
                        this._exports = e
                    }
                    getExposeExports(e) {
                        const t = i(e),
                            r = c(e);
                        return this._exports[t] || this._exports[r] || {}
                    }
                    prefetch(e) {
                        const {
                            id: t,
                            functionId: r = "default",
                            refetchParams: o
                        } = e;
                        let n;
                        const a = i(t),
                            s = c(t),
                            l = t + r,
                            u = this.prefetchMemory.get(l);
                        if (!this.checkOutdate(e) && u) return u;
                        const d = this._exports[a] || this._exports[s];
                        if (!d) return;
                        const f = d[r];
                        if ("function" !== typeof f) throw new Error(`[Module Federation Data Prefetch]: No prefetch function called ${r} export in prefetch file`);
                        return n = o ? f(o) : f(), this.memorize(l, n), n
                    }
                    memorize(e, t) {
                        this.prefetchMemory.set(e, t)
                    }
                    markOutdate(e, t) {
                        const {
                            id: r,
                            functionId: o = "default"
                        } = e;
                        this.recordOutdate[r] || (this.recordOutdate[r] = {}), this.recordOutdate[r][o] = t
                    }
                    checkOutdate(e) {
                        const {
                            id: t,
                            functionId: r = "default",
                            cacheStrategy: o
                        } = e;
                        return "function" === typeof o ? o() : (this.recordOutdate[t] || (this.recordOutdate[t] = {}), !!this.recordOutdate[t][r] && (this.markOutdate({
                            id: t,
                            functionId: r
                        }, !1), !0))
                    }
                    constructor(e) {
                        this.prefetchMemory = new Map, this.recordOutdate = {}, this._exports = {}, this._options = e, this.global.instance.set(e.name, this)
                    }
                }
                var p = new a.Yd("[Module Federation Data Prefetch]");
                const _ = [],
                    m = "loaded-first";
                let h = m;
                const b = () => ({
                        name: "data-prefetch-runtime-plugin",
                        initContainer(e) {
                            const {
                                remoteSnapshot: t,
                                remoteInfo: r,
                                id: o,
                                origin: n
                            } = e, s = t, {
                                name: i
                            } = r, c = {
                                name: i,
                                remote: r,
                                origin: n,
                                remoteSnapshot: s
                            };
                            if (!l(s)) return e;
                            if (h !== m) throw new Error("[Module Federation Data Prefetch]: If you want to use data prefetch, the shared strategy must be 'loaded-first'");
                            const u = f.getInstance(i) || new f(c);
                            let d;
                            s.prefetchEntry && (d = (0, a.vM)(s, s.prefetchEntry));
                            if (_.find((e => e.id === o))) return e;
                            const b = u.loadEntry(d).then((async () => {
                                const e = u.getProjectExports();
                                return e instanceof Promise && await e, Promise.resolve().then((() => {
                                    const e = u.getExposeExports(o);
                                    p.info(`1. Start Prefetch initContainer: ${o} - ${performance.now()}`);
                                    return Object.keys(e).map((e => ({
                                        value: u.prefetch({
                                            id: o,
                                            functionId: e
                                        }),
                                        functionId: e
                                    })))
                                }))
                            }));
                            return _.push({
                                id: o,
                                promise: b
                            }), e
                        },
                        afterResolve(e) {
                            const {
                                remoteSnapshot: t,
                                remoteInfo: r,
                                id: o,
                                origin: n
                            } = e, s = t, {
                                name: i
                            } = r, c = {
                                name: i,
                                remote: r,
                                origin: n,
                                remoteSnapshot: s
                            };
                            if (!l(s)) return e;
                            if (!_.some((e => e.id === o))) return e;
                            if (h !== m) throw new Error("[Module Federation Data Prefetch]: If you want to use data prefetch, the shared strategy must be 'loaded-first'");
                            const u = f.getInstance(i) || new f(c);
                            let d;
                            s.prefetchEntry && (d = (0, a.vM)(s, s.prefetchEntry));
                            const b = _.findIndex((e => e.id === o)); - 1 !== b && _.splice(b, 1);
                            const g = u.loadEntry(d).then((async () => {
                                const e = u.getProjectExports();
                                return e instanceof Promise && await e, Promise.resolve().then((() => {
                                    const e = u.getExposeExports(o);
                                    p.info(`1. Start Prefetch afterResolve: ${o} - ${performance.now()}`);
                                    return Object.keys(e).map((e => ({
                                        value: u.prefetch({
                                            id: o,
                                            functionId: e
                                        }),
                                        functionId: e
                                    })))
                                }))
                            }));
                            return _.push({
                                id: o,
                                promise: g
                            }), e
                        },
                        async onLoad(e) {
                            var t;
                            const {
                                remote: r,
                                id: o
                            } = e, {
                                name: n
                            } = r, a = null == (t = _.find((e => e.id === o))) ? void 0 : t.promise;
                            if (a) {
                                const e = await a,
                                    t = e.map((e => e.value));
                                await Promise.all(t);
                                const r = f.getInstance(n);
                                e.forEach((e => {
                                    const {
                                        value: t,
                                        functionId: n
                                    } = e;
                                    r.memorize(o + n, t)
                                }))
                            }
                            return e
                        },
                        beforeLoadShare(e) {
                            const t = e.shareInfo;
                            return h = (null == t ? void 0 : t.strategy) || h, e
                        }
                    }),
                    g = () => ({
                        name: "shared-strategy",
                        beforeInit(e) {
                            const {
                                userOptions: t
                            } = e, r = t.shared;
                            return r && (Object.keys(r).forEach((e => {
                                const t = r[e];
                                (Array.isArray(t) ? t : [t]).forEach((e => {
                                    e.strategy = "loaded-first"
                                }))
                            })), console.warn("[Module Federation Data Prefetch]: Your shared strategy is set to 'loaded-first', this is a necessary condition for data prefetch")), e
                        }
                    });
                if (!r.federation.runtime) {
                    var y = r.federation;
                    for (var E in r.federation = {}, n()) r.federation[E] = n()[E];
                    for (var E in y) r.federation[E] = y[E]
                }
                if (!r.federation.instance) {
                    var S = [!!b && (b.default || b)(), !!g && (g.default || g)()].filter(Boolean);
                    r.federation.initOptions.plugins = r.federation.initOptions.plugins ? r.federation.initOptions.plugins.concat(S) : S, r.federation.instance = r.federation.runtime.init(r.federation.initOptions), r.federation.attachShareScopeMap && r.federation.attachShareScopeMap(r), r.federation.installInitialConsumes && r.federation.installInitialConsumes(), !r.federation.isMFRemote && r.federation.prefetch && r.federation.prefetch()
                }
            },
            71636: (e, t, r) => {
                "use strict";
                var o = r(73603),
                    n = r(56040),
                    a = r(7474);
                async function s(e) {
                    let {
                        remoteInfo: t,
                        remoteEntryExports: r,
                        createScriptHook: o
                    } = e;
                    const {
                        entry: s,
                        entryGlobalName: i,
                        name: c,
                        type: l
                    } = t;
                    switch (l) {
                        case "esm":
                        case "module":
                            return async function(e) {
                                let {
                                    entry: t,
                                    remoteEntryExports: r
                                } = e;
                                return new Promise(((e, o) => {
                                    try {
                                        r ? e(r) : new Function("callbacks", `import("${t}").then(callbacks[0]).catch(callbacks[1])`)([e, o])
                                    } catch (n) {
                                        o(n)
                                    }
                                }))
                            }({
                                entry: s,
                                remoteEntryExports: r
                            });
                        case "system":
                            return async function(e) {
                                let {
                                    entry: t,
                                    remoteEntryExports: r
                                } = e;
                                return new Promise(((e, o) => {
                                    try {
                                        r ? e(r) : new Function("callbacks", `System.import("${t}").then(callbacks[0]).catch(callbacks[1])`)([e, o])
                                    } catch (n) {
                                        o(n)
                                    }
                                }))
                            }({
                                entry: s,
                                remoteEntryExports: r
                            });
                        default:
                            return async function(e) {
                                let {
                                    name: t,
                                    globalName: r,
                                    entry: o,
                                    createScriptHook: s
                                } = e;
                                const {
                                    entryExports: i
                                } = a.getRemoteEntryExports(t, r);
                                return i || n.loadScript(o, {
                                    attrs: {},
                                    createScriptHook: (e, t) => {
                                        const r = s.emit({
                                            url: e,
                                            attrs: t
                                        });
                                        if (r) return r instanceof HTMLScriptElement || "script" in r || "timeout" in r ? r : void 0
                                    }
                                }).then((() => {
                                    const {
                                        remoteEntryKey: e,
                                        entryExports: n
                                    } = a.getRemoteEntryExports(t, r);
                                    return a.assert(n, `\n      Unable to use the ${t}'s '${o}' URL with ${e}'s globalName to get remoteEntry exports.\n      Possible reasons could be:\n\n      1. '${o}' is not the correct URL, or the remoteEntry resource or name is incorrect.\n\n      2. ${e} cannot be used to get remoteEntry exports in the window object.\n    `), n
                                })).catch((e => {
                                    throw e
                                }))
                            }({
                                entry: s,
                                globalName: i,
                                name: c,
                                createScriptHook: o
                            })
                    }
                }

                function i(e) {
                    const {
                        entry: t,
                        name: r
                    } = e;
                    return n.composeKeyWithSeparator(r, t)
                }
                async function c(e) {
                    let {
                        origin: t,
                        remoteEntryExports: r,
                        remoteInfo: o
                    } = e;
                    const c = i(o);
                    if (r) return r;
                    if (!a.globalLoading[c]) {
                        const e = t.remoteHandler.hooks.lifecycle.loadEntry,
                            i = t.loaderHook.lifecycle.createScript;
                        a.globalLoading[c] = e.emit({
                            createScriptHook: i,
                            remoteInfo: o,
                            remoteEntryExports: r
                        }).then((e => e || (n.isBrowserEnv() ? s({
                            remoteInfo: o,
                            remoteEntryExports: r,
                            createScriptHook: i
                        }) : async function(e) {
                            let {
                                remoteInfo: t,
                                createScriptHook: r
                            } = e;
                            const {
                                entry: o,
                                entryGlobalName: s,
                                name: i,
                                type: c
                            } = t, {
                                entryExports: l
                            } = a.getRemoteEntryExports(i, s);
                            return l || n.loadScriptNode(o, {
                                attrs: {
                                    name: i,
                                    globalName: s,
                                    type: c
                                },
                                createScriptHook: (e, t) => {
                                    const o = r.emit({
                                        url: e,
                                        attrs: t
                                    });
                                    if (o) return "url" in o ? o : void 0
                                }
                            }).then((() => {
                                const {
                                    remoteEntryKey: e,
                                    entryExports: t
                                } = a.getRemoteEntryExports(i, s);
                                return a.assert(t, `\n      Unable to use the ${i}'s '${o}' URL with ${e}'s globalName to get remoteEntry exports.\n      Possible reasons could be:\n\n      1. '${o}' is not the correct URL, or the remoteEntry resource or name is incorrect.\n\n      2. ${e} cannot be used to get remoteEntry exports in the window object.\n    `), t
                            })).catch((e => {
                                throw e
                            }))
                        }({
                            remoteInfo: o,
                            createScriptHook: i
                        }))))
                    }
                    return a.globalLoading[c]
                }

                function l(e) {
                    return o._extends({}, e, {
                        entry: "entry" in e ? e.entry : "",
                        type: e.type || a.DEFAULT_REMOTE_TYPE,
                        entryGlobalName: e.entryGlobalName || e.name,
                        shareScope: e.shareScope || a.DEFAULT_SCOPE
                    })
                }
                let u = class {
                    async getEntry() {
                        if (this.remoteEntryExports) return this.remoteEntryExports;
                        const e = await c({
                            origin: this.host,
                            remoteInfo: this.remoteInfo,
                            remoteEntryExports: this.remoteEntryExports
                        });
                        return a.assert(e, `remoteEntryExports is undefined \n ${n.safeToString(this.remoteInfo)}`), this.remoteEntryExports = e, this.remoteEntryExports
                    }
                    async get(e, t, r, n) {
                        const {
                            loadFactory: s = !0
                        } = r || {
                            loadFactory: !0
                        }, i = await this.getEntry();
                        if (!this.inited) {
                            const t = this.host.shareScopeMap,
                                r = this.remoteInfo.shareScope || "default";
                            t[r] || (t[r] = {});
                            const a = t[r],
                                s = [],
                                c = {
                                    version: this.remoteInfo.version || ""
                                };
                            Object.defineProperty(c, "shareScopeMap", {
                                value: t,
                                enumerable: !1
                            });
                            const l = await this.host.hooks.lifecycle.beforeInitContainer.emit({
                                shareScope: a,
                                remoteEntryInitOptions: c,
                                initScope: s,
                                remoteInfo: this.remoteInfo,
                                origin: this.host
                            });
                            "undefined" === typeof(null == i ? void 0 : i.init) && console.error('The remote entry interface does not contain "init"', "\n", "Ensure the name of this remote is not reserved or in use. Check if anything already exists on window[nameOfRemote]", "\n", "Ensure that window[nameOfRemote] is returning a {get,init} object."), await i.init(l.shareScope, l.initScope, l.remoteEntryInitOptions), await this.host.hooks.lifecycle.initContainer.emit(o._extends({}, l, {
                                id: e,
                                remoteSnapshot: n,
                                remoteEntryExports: i
                            }))
                        }
                        this.lib = i, this.inited = !0;
                        const c = await i.get(t);
                        a.assert(c, `${a.getFMId(this.remoteInfo)} remote don't export ${t}.`);
                        const l = this.wraperFactory(c, e);
                        if (!s) return l;
                        return await l()
                    }
                    wraperFactory(e, t) {
                        function r(e, t) {
                            e && "object" === typeof e && Object.isExtensible(e) && !Object.getOwnPropertyDescriptor(e, Symbol.for("mf_module_id")) && Object.defineProperty(e, Symbol.for("mf_module_id"), {
                                value: t,
                                enumerable: !1
                            })
                        }
                        return e instanceof Promise ? async () => {
                            const o = await e();
                            return r(o, t), o
                        } : () => {
                            const o = e();
                            return r(o, t), o
                        }
                    }
                    constructor(e) {
                        let {
                            remoteInfo: t,
                            host: r
                        } = e;
                        this.inited = !1, this.lib = void 0, this.remoteInfo = t, this.host = r
                    }
                };
                class d {
                    on(e) {
                        "function" === typeof e && this.listeners.add(e)
                    }
                    once(e) {
                        const t = this;
                        this.on((function r() {
                            t.remove(r);
                            for (var o = arguments.length, n = new Array(o), a = 0; a < o; a++) n[a] = arguments[a];
                            return e.apply(null, n)
                        }))
                    }
                    emit() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        let o;
                        return this.listeners.size > 0 && this.listeners.forEach((e => {
                            o = e(...t)
                        })), o
                    }
                    remove(e) {
                        this.listeners.delete(e)
                    }
                    removeAll() {
                        this.listeners.clear()
                    }
                    constructor(e) {
                        this.type = "", this.listeners = new Set, e && (this.type = e)
                    }
                }
                class f extends d {
                    emit() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        let o;
                        const n = Array.from(this.listeners);
                        if (n.length > 0) {
                            let e = 0;
                            const r = o => !1 !== o && (e < n.length ? Promise.resolve(n[e++].apply(null, t)).then(r) : o);
                            o = r()
                        }
                        return Promise.resolve(o)
                    }
                }

                function p(e, t) {
                    if (!a.isObject(t)) return !1;
                    if (e !== t)
                        for (const r in e)
                            if (!(r in t)) return !1;
                    return !0
                }
                class _ extends d {
                    emit(e) {
                        a.isObject(e) || a.error(`The data for the "${this.type}" hook should be an object.`);
                        for (const r of this.listeners) try {
                            const t = r(e);
                            if (!p(e, t)) {
                                this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
                                break
                            }
                            e = t
                        } catch (t) {
                            a.warn(t), this.onerror(t)
                        }
                        return e
                    }
                    constructor(e) {
                        super(), this.onerror = a.error, this.type = e
                    }
                }
                class m extends d {
                    emit(e) {
                        a.isObject(e) || a.error(`The response data for the "${this.type}" hook must be an object.`);
                        const t = Array.from(this.listeners);
                        if (t.length > 0) {
                            let r = 0;
                            const o = t => (a.warn(t), this.onerror(t), e),
                                n = a => {
                                    if (p(e, a)) {
                                        if (e = a, r < t.length) try {
                                            return Promise.resolve(t[r++](e)).then(n, o)
                                        } catch (s) {
                                            return o(s)
                                        }
                                    } else this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
                                    return e
                                };
                            return Promise.resolve(n(e))
                        }
                        return Promise.resolve(e)
                    }
                    constructor(e) {
                        super(), this.onerror = a.error, this.type = e
                    }
                }
                class h {
                    applyPlugin(e) {
                        a.assert(a.isPlainObject(e), "Plugin configuration is invalid.");
                        const t = e.name;
                        a.assert(t, "A name must be provided by the plugin."), this.registerPlugins[t] || (this.registerPlugins[t] = e, Object.keys(this.lifecycle).forEach((t => {
                            const r = e[t];
                            r && this.lifecycle[t].on(r)
                        })))
                    }
                    removePlugin(e) {
                        a.assert(e, "A name is required.");
                        const t = this.registerPlugins[e];
                        a.assert(t, `The plugin "${e}" is not registered.`), Object.keys(t).forEach((e => {
                            "name" !== e && this.lifecycle[e].remove(t[e])
                        }))
                    }
                    inherit(e) {
                        let {
                            lifecycle: t,
                            registerPlugins: r
                        } = e;
                        Object.keys(t).forEach((e => {
                            a.assert(!this.lifecycle[e], `The hook "${e}" has a conflict and cannot be inherited.`), this.lifecycle[e] = t[e]
                        })), Object.keys(r).forEach((e => {
                            a.assert(!this.registerPlugins[e], `The plugin "${e}" has a conflict and cannot be inherited.`), this.applyPlugin(r[e])
                        }))
                    }
                    constructor(e) {
                        this.registerPlugins = {}, this.lifecycle = e, this.lifecycleKeys = Object.keys(e)
                    }
                }

                function b(e) {
                    return o._extends({
                        resourceCategory: "sync",
                        share: !0,
                        depsRemote: !0,
                        prefetchInterface: !1
                    }, e)
                }

                function g(e, t, r) {
                    let o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    const {
                        cssAssets: a,
                        jsAssetsWithoutEntry: s,
                        entryAssets: i
                    } = r;
                    if (t.options.inBrowser) {
                        if (i.forEach((r => {
                                const {
                                    moduleInfo: o
                                } = r, n = t.moduleCache.get(e.name);
                                c(n ? {
                                    origin: t,
                                    remoteInfo: o,
                                    remoteEntryExports: n.remoteEntryExports
                                } : {
                                    origin: t,
                                    remoteInfo: o,
                                    remoteEntryExports: void 0
                                })
                            })), o) {
                            const e = {
                                rel: "preload",
                                as: "style",
                                crossorigin: "anonymous"
                            };
                            a.forEach((r => {
                                const {
                                    link: o,
                                    needAttach: a
                                } = n.createLink({
                                    url: r,
                                    cb: () => {},
                                    attrs: e,
                                    createLinkHook: (e, r) => {
                                        const o = t.loaderHook.lifecycle.createLink.emit({
                                            url: e,
                                            attrs: r
                                        });
                                        if (o instanceof HTMLLinkElement) return o
                                    }
                                });
                                a && document.head.appendChild(o)
                            }))
                        } else {
                            const e = {
                                rel: "stylesheet",
                                type: "text/css"
                            };
                            a.forEach((r => {
                                const {
                                    link: o,
                                    needAttach: a
                                } = n.createLink({
                                    url: r,
                                    cb: () => {},
                                    attrs: e,
                                    createLinkHook: (e, r) => {
                                        const o = t.loaderHook.lifecycle.createLink.emit({
                                            url: e,
                                            attrs: r
                                        });
                                        if (o instanceof HTMLLinkElement) return o
                                    },
                                    needDeleteLink: !1
                                });
                                a && document.head.appendChild(o)
                            }))
                        }
                        if (o) {
                            const e = {
                                rel: "preload",
                                as: "script",
                                crossorigin: "anonymous"
                            };
                            s.forEach((r => {
                                const {
                                    link: o,
                                    needAttach: a
                                } = n.createLink({
                                    url: r,
                                    cb: () => {},
                                    attrs: e,
                                    createLinkHook: (e, r) => {
                                        const o = t.loaderHook.lifecycle.createLink.emit({
                                            url: e,
                                            attrs: r
                                        });
                                        if (o instanceof HTMLLinkElement) return o
                                    }
                                });
                                a && document.head.appendChild(o)
                            }))
                        } else {
                            const r = {
                                fetchpriority: "high",
                                type: "module" === (null == e ? void 0 : e.type) ? "module" : "text/javascript"
                            };
                            s.forEach((e => {
                                const {
                                    script: o,
                                    needAttach: a
                                } = n.createScript({
                                    url: e,
                                    cb: () => {},
                                    attrs: r,
                                    createScriptHook: (e, r) => {
                                        const o = t.loaderHook.lifecycle.createScript.emit({
                                            url: e,
                                            attrs: r
                                        });
                                        if (o instanceof HTMLScriptElement) return o
                                    },
                                    needDeleteScript: !0
                                });
                                a && document.head.appendChild(o)
                            }))
                        }
                    }
                }

                function y(e, t) {
                    const r = a.getRemoteEntryInfoFromSnapshot(t);
                    r.url || a.error(`The attribute remoteEntry of ${e.name} must not be undefined.`);
                    let o = n.getResourceUrl(t, r.url);
                    n.isBrowserEnv() || o.startsWith("http") || (o = `https:${o}`), e.type = r.type, e.entryGlobalName = r.globalName, e.entry = o, e.version = t.version, e.buildVersion = t.buildVersion
                }

                function E(e) {
                    const t = e.split(":");
                    return 1 === t.length ? {
                        name: t[0],
                        version: void 0
                    } : 2 === t.length ? {
                        name: t[0],
                        version: t[1]
                    } : {
                        name: t[1],
                        version: t[2]
                    }
                }

                function S(e, t, r, o) {
                    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        i = arguments.length > 5 ? arguments[5] : void 0;
                    const c = a.getFMId(t),
                        {
                            value: l
                        } = a.getInfoWithoutType(e, c),
                        u = i || l;
                    if (u && !n.isManifestProvider(u) && (r(u, t, o), u.remotesInfo)) {
                        const t = Object.keys(u.remotesInfo);
                        for (const o of t) {
                            if (s[o]) continue;
                            s[o] = !0;
                            const t = E(o),
                                n = u.remotesInfo[o];
                            S(e, {
                                name: t.name,
                                version: n.matchedVersion
                            }, r, !1, s, void 0)
                        }
                    }
                }

                function w(e, t, r, o, s) {
                    const i = [],
                        c = [],
                        l = [],
                        u = new Set,
                        d = new Set,
                        {
                            options: f
                        } = e,
                        {
                            preloadConfig: p
                        } = t,
                        {
                            depsRemote: _
                        } = p;
                    if (S(o, r, ((t, r, o) => {
                            let s;
                            if (o) s = p;
                            else if (Array.isArray(_)) {
                                const e = _.find((e => e.nameOrAlias === r.name || e.nameOrAlias === r.alias));
                                if (!e) return;
                                s = b(e)
                            } else {
                                if (!0 !== _) return;
                                s = p
                            }
                            const u = n.getResourceUrl(t, a.getRemoteEntryInfoFromSnapshot(t).url);
                            u && l.push({
                                name: r.name,
                                moduleInfo: {
                                    name: r.name,
                                    entry: u,
                                    type: "remoteEntryType" in t ? t.remoteEntryType : "global",
                                    entryGlobalName: "globalName" in t ? t.globalName : r.name,
                                    shareScope: "",
                                    version: "version" in t ? t.version : void 0
                                },
                                url: u
                            });
                            let d = "modules" in t ? t.modules : [];
                            const f = (m = s.exposes) ? m.map((e => "." === e ? e : e.startsWith("./") ? e.replace("./", "") : e)) : [];
                            var m, h;
                            f.length && "modules" in t && (d = null == t || null == (h = t.modules) ? void 0 : h.reduce(((e, t) => (-1 !== (null == f ? void 0 : f.indexOf(t.moduleName)) && e.push(t), e)), []));

                            function g(e) {
                                const r = e.map((e => n.getResourceUrl(t, e)));
                                return s.filter ? r.filter(s.filter) : r
                            }
                            if (d) {
                                const o = d.length;
                                for (let n = 0; n < o; n++) {
                                    const o = d[n],
                                        l = `${r.name}/${o.moduleName}`;
                                    e.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                                        id: "." === o.moduleName ? r.name : l,
                                        name: r.name,
                                        remoteSnapshot: t,
                                        preloadConfig: s,
                                        remote: r,
                                        origin: e
                                    });
                                    a.getPreloaded(l) || ("all" === s.resourceCategory ? (i.push(...g(o.assets.css.async)), i.push(...g(o.assets.css.sync)), c.push(...g(o.assets.js.async)), c.push(...g(o.assets.js.sync))) : (s.resourceCategory = "sync") && (i.push(...g(o.assets.css.sync)), c.push(...g(o.assets.js.sync))), a.setPreloaded(l))
                                }
                            }
                        }), !0, {}, s), s.shared) {
                        const t = (t, r) => {
                            const o = a.getRegisteredShare(e.shareScopeMap, r.sharedName, t, e.sharedHandler.hooks.lifecycle.resolveShare);
                            o && "function" === typeof o.lib && (r.assets.js.sync.forEach((e => {
                                u.add(e)
                            })), r.assets.css.sync.forEach((e => {
                                d.add(e)
                            })))
                        };
                        s.shared.forEach((e => {
                            var r;
                            const o = null == (r = f.shared) ? void 0 : r[e.sharedName];
                            if (!o) return;
                            const n = e.version ? o.find((t => t.version === e.version)) : o;
                            if (!n) return;
                            a.arrayOptions(n).forEach((r => {
                                t(r, e)
                            }))
                        }))
                    }
                    const m = c.filter((e => !u.has(e)));
                    return {
                        cssAssets: i.filter((e => !d.has(e))),
                        jsAssetsWithoutEntry: m,
                        entryAssets: l
                    }
                }

                function v(e, t) {
                    const r = a.getGlobalSnapshotInfoByModuleInfo({
                            name: t.options.name,
                            version: t.options.version
                        }),
                        o = r && "remotesInfo" in r && r.remotesInfo && a.getInfoWithoutType(r.remotesInfo, e.name).value;
                    return o && o.matchedVersion ? {
                        hostGlobalSnapshot: r,
                        globalSnapshot: a.getGlobalSnapshot(),
                        remoteSnapshot: a.getGlobalSnapshotInfoByModuleInfo({
                            name: e.name,
                            version: o.matchedVersion
                        })
                    } : {
                        hostGlobalSnapshot: void 0,
                        globalSnapshot: a.getGlobalSnapshot(),
                        remoteSnapshot: a.getGlobalSnapshotInfoByModuleInfo({
                            name: e.name,
                            version: "version" in e ? e.version : void 0
                        })
                    }
                }
                class N {
                    async loadSnapshot(e) {
                        const {
                            options: t
                        } = this.HostInstance, {
                            hostGlobalSnapshot: r,
                            remoteSnapshot: o,
                            globalSnapshot: n
                        } = this.getGlobalRemoteInfo(e), {
                            remoteSnapshot: a,
                            globalSnapshot: s
                        } = await this.hooks.lifecycle.loadSnapshot.emit({
                            options: t,
                            moduleInfo: e,
                            hostGlobalSnapshot: r,
                            remoteSnapshot: o,
                            globalSnapshot: n
                        });
                        return {
                            remoteSnapshot: a,
                            globalSnapshot: s
                        }
                    }
                    async loadRemoteSnapshotInfo(e) {
                        const {
                            options: t
                        } = this.HostInstance;
                        await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
                            options: t,
                            moduleInfo: e
                        });
                        let r = a.getGlobalSnapshotInfoByModuleInfo({
                            name: this.HostInstance.options.name,
                            version: this.HostInstance.options.version
                        });
                        r || (r = {
                            version: this.HostInstance.options.version || "",
                            remoteEntry: "",
                            remotesInfo: {}
                        }, a.addGlobalSnapshot({
                            [this.HostInstance.options.name]: r
                        })), r && "remotesInfo" in r && !a.getInfoWithoutType(r.remotesInfo, e.name).value && ("version" in e || "entry" in e) && (r.remotesInfo = o._extends({}, null == r ? void 0 : r.remotesInfo, {
                            [e.name]: {
                                matchedVersion: "version" in e ? e.version : e.entry
                            }
                        }));
                        const {
                            hostGlobalSnapshot: s,
                            remoteSnapshot: i,
                            globalSnapshot: c
                        } = this.getGlobalRemoteInfo(e), {
                            remoteSnapshot: l,
                            globalSnapshot: u
                        } = await this.hooks.lifecycle.loadSnapshot.emit({
                            options: t,
                            moduleInfo: e,
                            hostGlobalSnapshot: s,
                            remoteSnapshot: i,
                            globalSnapshot: c
                        });
                        if (l) {
                            if (n.isManifestProvider(l)) {
                                const t = n.isBrowserEnv() ? l.remoteEntry : l.ssrRemoteEntry || l.remoteEntry || "",
                                    r = await this.getManifestJson(t, e, {});
                                return {
                                    remoteSnapshot: r,
                                    globalSnapshot: a.setGlobalSnapshotInfoByModuleInfo(o._extends({}, e, {
                                        entry: t
                                    }), r)
                                }
                            } {
                                const {
                                    remoteSnapshot: t
                                } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                                    options: this.HostInstance.options,
                                    moduleInfo: e,
                                    remoteSnapshot: l,
                                    from: "global"
                                });
                                return {
                                    remoteSnapshot: t,
                                    globalSnapshot: u
                                }
                            }
                        }
                        if (a.isRemoteInfoWithEntry(e)) {
                            const t = await this.getManifestJson(e.entry, e, {}),
                                r = a.setGlobalSnapshotInfoByModuleInfo(e, t),
                                {
                                    remoteSnapshot: o
                                } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                                    options: this.HostInstance.options,
                                    moduleInfo: e,
                                    remoteSnapshot: t,
                                    from: "global"
                                });
                            return {
                                remoteSnapshot: o,
                                globalSnapshot: r
                            }
                        }
                        a.error(`\n          Cannot get remoteSnapshot with the name: '${e.name}', version: '${e.version}' from __FEDERATION__.moduleInfo. The following reasons may be causing the problem:\n\n          1. The Deploy platform did not deliver the correct data. You can use __FEDERATION__.moduleInfo to check the remoteInfo.\n\n          2. The remote '${e.name}' version '${e.version}' is not released.\n\n          The transformed module info: ${JSON.stringify(u)}\n        `)
                    }
                    getGlobalRemoteInfo(e) {
                        return v(e, this.HostInstance)
                    }
                    async getManifestJson(e, t, r) {
                        const o = async () => {
                                let r = this.manifestCache.get(e);
                                if (r) return r;
                                try {
                                    let t = await this.loaderHook.lifecycle.fetch.emit(e, {});
                                    return t && t instanceof Response || (t = await fetch(e, {})), r = await t.json(), a.assert(r.metaData && r.exposes && r.shared, `${e} is not a federation manifest`), this.manifestCache.set(e, r), r
                                } catch (o) {
                                    delete this.manifestLoading[e], a.error(`Failed to get manifestJson for ${t.name}. The manifest URL is ${e}. Please ensure that the manifestUrl is accessible.\n          \n Error message:\n          \n ${o}`)
                                }
                            },
                            s = async () => {
                                const r = await o(),
                                    a = n.generateSnapshotFromManifest(r, {
                                        version: e
                                    }),
                                    {
                                        remoteSnapshot: s
                                    } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                                        options: this.HostInstance.options,
                                        moduleInfo: t,
                                        manifestJson: r,
                                        remoteSnapshot: a,
                                        manifestUrl: e,
                                        from: "manifest"
                                    });
                                return s
                            };
                        return this.manifestLoading[e] || (this.manifestLoading[e] = s().then((e => e))), this.manifestLoading[e]
                    }
                    constructor(e) {
                        this.loadingHostSnapshot = null, this.manifestCache = new Map, this.hooks = new h({
                            beforeLoadRemoteSnapshot: new f("beforeLoadRemoteSnapshot"),
                            loadSnapshot: new m("loadGlobalSnapshot"),
                            loadRemoteSnapshot: new m("loadRemoteSnapshot")
                        }), this.manifestLoading = a.Global.__FEDERATION__.__MANIFEST_LOADING__, this.HostInstance = e, this.loaderHook = e.loaderHook
                    }
                }
                class T {
                    registerShared(e, t) {
                        const {
                            shareInfos: r,
                            shared: o
                        } = a.formatShareConfigs(e, t);
                        return Object.keys(r).forEach((e => {
                            r[e].forEach((r => {
                                !a.getRegisteredShare(this.shareScopeMap, e, r, this.hooks.lifecycle.resolveShare) && r && r.lib && this.setShared({
                                    pkgName: e,
                                    lib: r.lib,
                                    get: r.get,
                                    loaded: !0,
                                    shared: r,
                                    from: t.name
                                })
                            }))
                        })), {
                            shareInfos: r,
                            shared: o
                        }
                    }
                    async loadShare(e, t) {
                        const {
                            host: r
                        } = this, o = a.getTargetSharedOptions({
                            pkgName: e,
                            extraOptions: t,
                            shareInfos: r.options.shared
                        });
                        (null == o ? void 0 : o.scope) && await Promise.all(o.scope.map((async e => {
                            await Promise.all(this.initializeSharing(e, {
                                strategy: o.strategy
                            }))
                        })));
                        const n = await this.hooks.lifecycle.beforeLoadShare.emit({
                                pkgName: e,
                                shareInfo: o,
                                shared: r.options.shared,
                                origin: r
                            }),
                            {
                                shareInfo: s
                            } = n;
                        a.assert(s, `Cannot find ${e} Share in the ${r.options.name}. Please ensure that the ${e} Share parameters have been injected`);
                        const i = a.getRegisteredShare(this.shareScopeMap, e, s, this.hooks.lifecycle.resolveShare),
                            c = e => {
                                e.useIn || (e.useIn = []), a.addUniqueItem(e.useIn, r.options.name)
                            };
                        if (i && i.lib) return c(i), i.lib;
                        if (i && i.loading && !i.loaded) {
                            const e = await i.loading;
                            return i.loaded = !0, i.lib || (i.lib = e), c(i), e
                        }
                        if (i) {
                            const t = (async () => {
                                const t = await i.get();
                                s.lib = t, s.loaded = !0, c(s);
                                const r = a.getRegisteredShare(this.shareScopeMap, e, s, this.hooks.lifecycle.resolveShare);
                                return r && (r.lib = t, r.loaded = !0), t
                            })();
                            return this.setShared({
                                pkgName: e,
                                loaded: !1,
                                shared: i,
                                from: r.options.name,
                                lib: null,
                                loading: t
                            }), t
                        } {
                            if (null == t ? void 0 : t.customShareInfo) return !1;
                            const o = (async () => {
                                const t = await s.get();
                                s.lib = t, s.loaded = !0, c(s);
                                const r = a.getRegisteredShare(this.shareScopeMap, e, s, this.hooks.lifecycle.resolveShare);
                                return r && (r.lib = t, r.loaded = !0), t
                            })();
                            return this.setShared({
                                pkgName: e,
                                loaded: !1,
                                shared: s,
                                from: r.options.name,
                                lib: null,
                                loading: o
                            }), o
                        }
                    }
                    initializeSharing() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.DEFAULT_SCOPE,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        const {
                            host: r
                        } = this, o = null == t ? void 0 : t.from, n = null == t ? void 0 : t.strategy;
                        let s = null == t ? void 0 : t.initScope;
                        const i = [];
                        if ("build" !== o) {
                            const {
                                initTokens: t
                            } = this;
                            s || (s = []);
                            let r = t[e];
                            if (r || (r = t[e] = {
                                    from: this.host.name
                                }), s.indexOf(r) >= 0) return i;
                            s.push(r)
                        }
                        const c = this.shareScopeMap,
                            l = r.options.name;
                        c[e] || (c[e] = {});
                        const u = c[e],
                            d = async t => {
                                const {
                                    module: o
                                } = await r.remoteHandler.getRemoteModuleAndOptions({
                                    id: t
                                });
                                if (o.getEntry) {
                                    let i;
                                    try {
                                        i = await o.getEntry()
                                    } catch (a) {
                                        i = await r.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                                            id: t,
                                            error: a,
                                            from: "runtime",
                                            lifecycle: "beforeLoadShare",
                                            origin: r
                                        })
                                    }
                                    o.inited || (await (n = i, n && n.init && n.init(c[e], s)), o.inited = !0)
                                }
                                var n
                            };
                        return Object.keys(r.options.shared).forEach((t => {
                            r.options.shared[t].forEach((r => {
                                r.scope.includes(e) && ((e, t) => {
                                    var r;
                                    const {
                                        version: o,
                                        eager: n
                                    } = t;
                                    u[e] = u[e] || {};
                                    const a = u[e],
                                        s = a[o],
                                        i = Boolean(s && (s.eager || (null == (r = s.shareConfig) ? void 0 : r.eager)));
                                    (!s || "loaded-first" !== s.strategy && !s.loaded && (Boolean(!n) !== !i ? n : l > s.from)) && (a[o] = t)
                                })(t, r)
                            }))
                        })), "version-first" !== r.options.shareStrategy && "version-first" !== n || r.options.remotes.forEach((t => {
                            t.shareScope === e && i.push(d(t.name))
                        })), i
                    }
                    loadShareSync(e, t) {
                        const {
                            host: r
                        } = this, o = a.getTargetSharedOptions({
                            pkgName: e,
                            extraOptions: t,
                            shareInfos: r.options.shared
                        });
                        (null == o ? void 0 : o.scope) && o.scope.forEach((e => {
                            this.initializeSharing(e, {
                                strategy: o.strategy
                            })
                        }));
                        const n = a.getRegisteredShare(this.shareScopeMap, e, o, this.hooks.lifecycle.resolveShare),
                            s = e => {
                                e.useIn || (e.useIn = []), a.addUniqueItem(e.useIn, r.options.name)
                            };
                        if (n) {
                            if ("function" === typeof n.lib) return s(n), n.loaded || (n.loaded = !0, n.from === r.options.name && (o.loaded = !0)), n.lib;
                            if ("function" === typeof n.get) {
                                const t = n.get();
                                if (!(t instanceof Promise)) return s(n), this.setShared({
                                    pkgName: e,
                                    loaded: !0,
                                    from: r.options.name,
                                    lib: t,
                                    shared: n
                                }), t
                            }
                        }
                        if (o.lib) return o.loaded || (o.loaded = !0), o.lib;
                        if (o.get) {
                            const t = o.get();
                            if (t instanceof Promise) throw new Error(`\n        The loadShareSync function was unable to load ${e}. The ${e} could not be found in ${r.options.name}.\n        Possible reasons for failure: \n\n        1. The ${e} share was registered with the 'get' attribute, but loadShare was not used beforehand.\n\n        2. The ${e} share was not registered with the 'lib' attribute.\n\n      `);
                            return o.lib = t, this.setShared({
                                pkgName: e,
                                loaded: !0,
                                from: r.options.name,
                                lib: o.lib,
                                shared: o
                            }), o.lib
                        }
                        throw new Error(`\n        The loadShareSync function was unable to load ${e}. The ${e} could not be found in ${r.options.name}.\n        Possible reasons for failure: \n\n        1. The ${e} share was registered with the 'get' attribute, but loadShare was not used beforehand.\n\n        2. The ${e} share was not registered with the 'lib' attribute.\n\n      `)
                    }
                    initShareScopeMap(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        const {
                            host: o
                        } = this;
                        this.shareScopeMap[e] = t, this.hooks.lifecycle.initContainerShareScopeMap.emit({
                            shareScope: t,
                            options: o.options,
                            origin: o,
                            scopeName: e,
                            hostShareScopeMap: r.hostShareScopeMap
                        })
                    }
                    setShared(e) {
                        let {
                            pkgName: t,
                            shared: r,
                            from: n,
                            lib: a,
                            loading: s,
                            loaded: i,
                            get: c
                        } = e;
                        const {
                            version: l,
                            scope: u = "default"
                        } = r, d = o._object_without_properties_loose(r, ["version", "scope"]);
                        (Array.isArray(u) ? u : [u]).forEach((e => {
                            if (this.shareScopeMap[e] || (this.shareScopeMap[e] = {}), this.shareScopeMap[e][t] || (this.shareScopeMap[e][t] = {}), !this.shareScopeMap[e][t][l]) return this.shareScopeMap[e][t][l] = o._extends({
                                version: l,
                                scope: ["default"]
                            }, d, {
                                lib: a,
                                loaded: i,
                                loading: s
                            }), void(c && (this.shareScopeMap[e][t][l].get = c));
                            const r = this.shareScopeMap[e][t][l];
                            s && !r.loading && (r.loading = s)
                        }))
                    }
                    _setGlobalShareScopeMap(e) {
                        const t = a.getGlobalShareScope(),
                            r = e.id || e.name;
                        r && !t[r] && (t[r] = this.shareScopeMap)
                    }
                    constructor(e) {
                        this.hooks = new h({
                            afterResolve: new m("afterResolve"),
                            beforeLoadShare: new m("beforeLoadShare"),
                            loadShare: new f,
                            resolveShare: new _("resolveShare"),
                            initContainerShareScopeMap: new _("initContainerShareScopeMap")
                        }), this.host = e, this.shareScopeMap = {}, this.initTokens = {}, this._setGlobalShareScopeMap(e.options)
                    }
                }
                class O {
                    formatAndRegisterRemote(e, t) {
                        return (t.remotes || []).reduce(((e, t) => (this.registerRemote(t, e, {
                            force: !1
                        }), e)), e.remotes)
                    }
                    setIdToRemoteMap(e, t) {
                        const {
                            remote: r,
                            expose: o
                        } = t, {
                            name: n,
                            alias: a
                        } = r;
                        if (this.idToRemoteMap[e] = {
                                name: r.name,
                                expose: o
                            }, a && e.startsWith(n)) {
                            const t = e.replace(n, a);
                            this.idToRemoteMap[t] = {
                                name: r.name,
                                expose: o
                            }
                        } else if (a && e.startsWith(a)) {
                            const t = e.replace(a, n);
                            this.idToRemoteMap[t] = {
                                name: r.name,
                                expose: o
                            }
                        }
                    }
                    async loadRemote(e, t) {
                        const {
                            host: r
                        } = this;
                        try {
                            const {
                                loadFactory: o = !0
                            } = t || {
                                loadFactory: !0
                            }, {
                                module: n,
                                moduleOptions: a,
                                remoteMatchInfo: s
                            } = await this.getRemoteModuleAndOptions({
                                id: e
                            }), {
                                pkgNameOrAlias: i,
                                remote: c,
                                expose: l,
                                id: u,
                                remoteSnapshot: d
                            } = s, f = await n.get(u, l, t, d), p = await this.hooks.lifecycle.onLoad.emit({
                                id: u,
                                pkgNameOrAlias: i,
                                expose: l,
                                exposeModule: o ? f : void 0,
                                exposeModuleFactory: o ? void 0 : f,
                                remote: c,
                                options: a,
                                moduleInstance: n,
                                origin: r
                            });
                            return this.setIdToRemoteMap(e, s), "function" === typeof p ? p : f
                        } catch (o) {
                            const {
                                from: n = "runtime"
                            } = t || {
                                from: "runtime"
                            }, a = await this.hooks.lifecycle.errorLoadRemote.emit({
                                id: e,
                                error: o,
                                from: n,
                                lifecycle: "onLoad",
                                origin: r
                            });
                            if (!a) throw o;
                            return a
                        }
                    }
                    async preloadRemote(e) {
                        const {
                            host: t
                        } = this;
                        await this.hooks.lifecycle.beforePreloadRemote.emit({
                            preloadOps: e,
                            options: t.options,
                            origin: t
                        });
                        const r = (o = t.options.remotes, e.map((e => {
                            const t = function(e, t) {
                                for (const r of e) {
                                    if (t === r.name) return r;
                                    if (r.alias && t === r.alias) return r
                                }
                            }(o, e.nameOrAlias);
                            return a.assert(t, `Unable to preload ${e.nameOrAlias} as it is not included in ${!t&&n.safeToString({remoteInfo:t,remotes:o})}`), {
                                remote: t,
                                preloadConfig: b(e)
                            }
                        })));
                        var o;
                        await Promise.all(r.map((async e => {
                            const {
                                remote: r
                            } = e, o = l(r), {
                                globalSnapshot: n,
                                remoteSnapshot: a
                            } = await t.snapshotHandler.loadRemoteSnapshotInfo(r), s = await this.hooks.lifecycle.generatePreloadAssets.emit({
                                origin: t,
                                preloadOptions: e,
                                remote: r,
                                remoteInfo: o,
                                globalSnapshot: n,
                                remoteSnapshot: a
                            });
                            s && g(o, t, s)
                        })))
                    }
                    registerRemotes(e, t) {
                        const {
                            host: r
                        } = this;
                        e.forEach((e => {
                            this.registerRemote(e, r.options.remotes, {
                                force: null == t ? void 0 : t.force
                            })
                        }))
                    }
                    async getRemoteModuleAndOptions(e) {
                        const {
                            host: t
                        } = this, {
                            id: r
                        } = e;
                        let n;
                        try {
                            n = await this.hooks.lifecycle.beforeRequest.emit({
                                id: r,
                                options: t.options,
                                origin: t
                            })
                        } catch (b) {
                            if (n = await this.hooks.lifecycle.errorLoadRemote.emit({
                                    id: r,
                                    options: t.options,
                                    origin: t,
                                    from: "runtime",
                                    error: b,
                                    lifecycle: "beforeRequest"
                                }), !n) throw b
                        }
                        const {
                            id: s
                        } = n, i = function(e, t) {
                            for (const r of e) {
                                const e = t.startsWith(r.name);
                                let o = t.replace(r.name, "");
                                if (e) {
                                    if (o.startsWith("/")) return o = `.${o}`, {
                                        pkgNameOrAlias: r.name,
                                        expose: o,
                                        remote: r
                                    };
                                    if ("" === o) return {
                                        pkgNameOrAlias: r.name,
                                        expose: ".",
                                        remote: r
                                    }
                                }
                                const n = r.alias && t.startsWith(r.alias);
                                let a = r.alias && t.replace(r.alias, "");
                                if (r.alias && n) {
                                    if (a && a.startsWith("/")) return a = `.${a}`, {
                                        pkgNameOrAlias: r.alias,
                                        expose: a,
                                        remote: r
                                    };
                                    if ("" === a) return {
                                        pkgNameOrAlias: r.alias,
                                        expose: ".",
                                        remote: r
                                    }
                                }
                            }
                        }(t.options.remotes, s);
                        a.assert(i, `\n        Unable to locate ${s} in ${t.options.name}. Potential reasons for failure include:\n\n        1. ${s} was not included in the 'remotes' parameter of ${t.options.name||"the host"}.\n\n        2. ${s} could not be found in the 'remotes' of ${t.options.name} with either 'name' or 'alias' attributes.\n        3. ${s} is not online, injected, or loaded.\n        4. ${s}  cannot be accessed on the expected.\n        5. The 'beforeRequest' hook was provided but did not return the correct 'remoteInfo' when attempting to load ${s}.\n      `);
                        const {
                            remote: c
                        } = i, d = l(c), f = await t.sharedHandler.hooks.lifecycle.afterResolve.emit(o._extends({
                            id: s
                        }, i, {
                            options: t.options,
                            origin: t,
                            remoteInfo: d
                        })), {
                            remote: p,
                            expose: _
                        } = f;
                        a.assert(p && _, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${s}.`);
                        let m = t.moduleCache.get(p.name);
                        const h = {
                            host: t,
                            remoteInfo: d
                        };
                        return m || (m = new u(h), t.moduleCache.set(p.name, m)), {
                            module: m,
                            moduleOptions: h,
                            remoteMatchInfo: f
                        }
                    }
                    registerRemote(e, t, r) {
                        const {
                            host: o
                        } = this, s = () => {
                            if (e.alias) {
                                const r = t.find((t => {
                                    var r;
                                    return e.alias && (t.name.startsWith(e.alias) || (null == (r = t.alias) ? void 0 : r.startsWith(e.alias)))
                                }));
                                a.assert(!r, `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${r&&r.name} name or alias`)
                            }
                            "entry" in e && n.isBrowserEnv() && !e.entry.startsWith("http") && (e.entry = new URL(e.entry, window.location.origin).href), e.shareScope || (e.shareScope = a.DEFAULT_SCOPE), e.type || (e.type = a.DEFAULT_REMOTE_TYPE)
                        };
                        this.hooks.lifecycle.beforeRegisterRemote.emit({
                            remote: e,
                            origin: o
                        });
                        const i = t.find((t => t.name === e.name));
                        if (i) {
                            const a = [`The remote "${e.name}" is already registered.`, (null == r ? void 0 : r.force) ? "Hope you have known that OVERRIDE it may have some unexpected errors" : 'If you want to merge the remote, you can set "force: true".'];
                            (null == r ? void 0 : r.force) && (this.removeRemote(i), s(), t.push(e), this.hooks.lifecycle.registerRemote.emit({
                                remote: e,
                                origin: o
                            })), n.warn(a.join(" "))
                        } else s(), t.push(e), this.hooks.lifecycle.registerRemote.emit({
                            remote: e,
                            origin: o
                        })
                    }
                    removeRemote(e) {
                        try {
                            const {
                                host: r
                            } = this, {
                                name: o
                            } = e, s = r.options.remotes.findIndex((e => e.name === o)); - 1 !== s && r.options.remotes.splice(s, 1);
                            const c = r.moduleCache.get(e.name);
                            if (c) {
                                const o = c.remoteInfo,
                                    s = o.entryGlobalName;
                                var t;
                                if (globalThis[s])(null == (t = Object.getOwnPropertyDescriptor(globalThis, s)) ? void 0 : t.configurable) ? delete globalThis[s] : globalThis[s] = void 0;
                                const l = i(c.remoteInfo);
                                a.globalLoading[l] && delete a.globalLoading[l], r.snapshotHandler.manifestCache.delete(o.entry);
                                let u = o.buildVersion ? n.composeKeyWithSeparator(o.name, o.buildVersion) : o.name;
                                const d = globalThis.__FEDERATION__.__INSTANCES__.findIndex((e => o.buildVersion ? e.options.id === u : e.name === u));
                                if (-1 !== d) {
                                    const e = globalThis.__FEDERATION__.__INSTANCES__[d];
                                    u = e.options.id || u;
                                    const t = a.getGlobalShareScope();
                                    let r = !0;
                                    const n = [];
                                    Object.keys(t).forEach((e => {
                                        const a = t[e];
                                        a && Object.keys(a).forEach((t => {
                                            const s = a[t];
                                            s && Object.keys(s).forEach((a => {
                                                const i = s[a];
                                                i && Object.keys(i).forEach((s => {
                                                    const c = i[s];
                                                    c && "object" === typeof c && c.from === o.name && (c.loaded || c.loading ? (c.useIn = c.useIn.filter((e => e !== o.name)), c.useIn.length ? r = !1 : n.push([e, t, a, s])) : n.push([e, t, a, s]))
                                                }))
                                            }))
                                        }))
                                    })), r && (e.shareScopeMap = {}, delete t[u]), n.forEach((e => {
                                        let [r, o, n, a] = e;
                                        var s, i, c;
                                        null == (c = t[r]) || (null == (i = c[o]) || (null == (s = i[n]) || delete s[a]))
                                    })), globalThis.__FEDERATION__.__INSTANCES__.splice(d, 1)
                                }
                                const {
                                    hostGlobalSnapshot: f
                                } = v(e, r);
                                if (f) {
                                    const t = f && "remotesInfo" in f && f.remotesInfo && a.getInfoWithoutType(f.remotesInfo, e.name).key;
                                    t && (delete f.remotesInfo[t], Boolean(a.Global.__FEDERATION__.__MANIFEST_LOADING__[t]) && delete a.Global.__FEDERATION__.__MANIFEST_LOADING__[t])
                                }
                                r.moduleCache.delete(e.name)
                            }
                        } catch (r) {
                            console.log("removeRemote fail: ", r)
                        }
                    }
                    constructor(e) {
                        this.hooks = new h({
                            beforeRegisterRemote: new _("beforeRegisterRemote"),
                            registerRemote: new _("registerRemote"),
                            beforeRequest: new m("beforeRequest"),
                            onLoad: new f("onLoad"),
                            handlePreloadModule: new d("handlePreloadModule"),
                            errorLoadRemote: new f("errorLoadRemote"),
                            beforePreloadRemote: new f("beforePreloadRemote"),
                            generatePreloadAssets: new f("generatePreloadAssets"),
                            afterPreloadRemote: new f,
                            loadEntry: new f
                        }), this.host = e, this.idToRemoteMap = {}
                    }
                }
                class I {
                    initOptions(e) {
                        this.registerPlugins(e.plugins);
                        const t = this.formatOptions(this.options, e);
                        return this.options = t, t
                    }
                    async loadShare(e, t) {
                        return this.sharedHandler.loadShare(e, t)
                    }
                    loadShareSync(e, t) {
                        return this.sharedHandler.loadShareSync(e, t)
                    }
                    initializeSharing() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.DEFAULT_SCOPE,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return this.sharedHandler.initializeSharing(e, t)
                    }
                    initRawContainer(e, t, r) {
                        const o = l({
                                name: e,
                                entry: t
                            }),
                            n = new u({
                                host: this,
                                remoteInfo: o
                            });
                        return n.remoteEntryExports = r, this.moduleCache.set(e, n), n
                    }
                    async loadRemote(e, t) {
                        return this.remoteHandler.loadRemote(e, t)
                    }
                    async preloadRemote(e) {
                        return this.remoteHandler.preloadRemote(e)
                    }
                    initShareScopeMap(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.sharedHandler.initShareScopeMap(e, t, r)
                    }
                    formatOptions(e, t) {
                        const {
                            shared: r
                        } = a.formatShareConfigs(e, t), {
                            userOptions: n,
                            options: s
                        } = this.hooks.lifecycle.beforeInit.emit({
                            origin: this,
                            userOptions: t,
                            options: e,
                            shareInfo: r
                        }), i = this.remoteHandler.formatAndRegisterRemote(s, n), {
                            shared: c
                        } = this.sharedHandler.registerShared(s, n), l = [...s.plugins];
                        n.plugins && n.plugins.forEach((e => {
                            l.includes(e) || l.push(e)
                        }));
                        const u = o._extends({}, e, t, {
                            plugins: l,
                            remotes: i,
                            shared: c
                        });
                        return this.hooks.lifecycle.init.emit({
                            origin: this,
                            options: u
                        }), u
                    }
                    registerPlugins(e) {
                        const t = function(e, t) {
                            const r = a.getGlobalHostPlugins();
                            return r.length > 0 && r.forEach((t => {
                                (null == e ? void 0 : e.find((e => e.name !== t.name))) && e.push(t)
                            })), e && e.length > 0 && e.forEach((e => {
                                t.forEach((t => {
                                    t.applyPlugin(e)
                                }))
                            })), e
                        }(e, [this.hooks, this.remoteHandler.hooks, this.sharedHandler.hooks, this.snapshotHandler.hooks, this.loaderHook]);
                        this.options.plugins = this.options.plugins.reduce(((e, t) => t ? (e && !e.find((e => e.name === t.name)) && e.push(t), e) : e), t || [])
                    }
                    registerRemotes(e, t) {
                        return this.remoteHandler.registerRemotes(e, t)
                    }
                    constructor(e) {
                        this.hooks = new h({
                            beforeInit: new _("beforeInit"),
                            init: new d,
                            beforeInitContainer: new m("beforeInitContainer"),
                            initContainer: new m("initContainer")
                        }), this.version = "0.6.9", this.moduleCache = new Map, this.loaderHook = new h({
                            getModuleInfo: new d,
                            createScript: new d,
                            createLink: new d,
                            fetch: new f
                        });
                        const t = {
                            id: a.getBuilderId(),
                            name: e.name,
                            plugins: [{
                                name: "snapshot-plugin",
                                async afterResolve(e) {
                                    const {
                                        remote: t,
                                        pkgNameOrAlias: r,
                                        expose: n,
                                        origin: s,
                                        remoteInfo: i
                                    } = e;
                                    if (!a.isRemoteInfoWithEntry(t) || !a.isPureRemoteEntry(t)) {
                                        const {
                                            remoteSnapshot: a,
                                            globalSnapshot: c
                                        } = await s.snapshotHandler.loadRemoteSnapshotInfo(t);
                                        y(i, a);
                                        const l = {
                                                remote: t,
                                                preloadConfig: {
                                                    nameOrAlias: r,
                                                    exposes: [n],
                                                    resourceCategory: "sync",
                                                    share: !1,
                                                    depsRemote: !1
                                                }
                                            },
                                            u = await s.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
                                                origin: s,
                                                preloadOptions: l,
                                                remoteInfo: i,
                                                remote: t,
                                                remoteSnapshot: a,
                                                globalSnapshot: c
                                            });
                                        return u && g(i, s, u, !1), o._extends({}, e, {
                                            remoteSnapshot: a
                                        })
                                    }
                                    return e
                                }
                            }, {
                                name: "generate-preload-assets-plugin",
                                async generatePreloadAssets(e) {
                                    const {
                                        origin: t,
                                        preloadOptions: r,
                                        remoteInfo: o,
                                        remote: n,
                                        globalSnapshot: s,
                                        remoteSnapshot: i
                                    } = e;
                                    return a.isRemoteInfoWithEntry(n) && a.isPureRemoteEntry(n) ? {
                                        cssAssets: [],
                                        jsAssetsWithoutEntry: [],
                                        entryAssets: [{
                                            name: n.name,
                                            url: n.entry,
                                            moduleInfo: {
                                                name: o.name,
                                                entry: n.entry,
                                                type: o.type || "global",
                                                entryGlobalName: "",
                                                shareScope: ""
                                            }
                                        }]
                                    } : (y(o, i), w(t, r, o, s, i))
                                }
                            }],
                            remotes: [],
                            shared: {},
                            inBrowser: n.isBrowserEnv()
                        };
                        this.name = e.name, this.options = t, this.snapshotHandler = new N(this), this.sharedHandler = new T(this), this.remoteHandler = new O(this), this.shareScopeMap = this.sharedHandler.shareScopeMap, this.registerPlugins([...t.plugins, ...e.plugins || []]), this.options = this.formatOptions(t, e)
                    }
                }
                let R = null;
                a.setGlobalFederationConstructor(I), Object.defineProperty(t, "loadScript", {
                    enumerable: !0,
                    get: function() {
                        return n.loadScript
                    }
                }), Object.defineProperty(t, "loadScriptNode", {
                    enumerable: !0,
                    get: function() {
                        return n.loadScriptNode
                    }
                }), t.registerGlobalPlugins = a.registerGlobalPlugins, t.FederationHost = I, t.Module = u, t.getInstance = function() {
                    return R
                }, t.getRemoteEntry = c, t.getRemoteInfo = l, t.init = function(e) {
                    const t = a.getGlobalFederationInstance(e.name, e.version);
                    if (t) return t.initOptions(e), R || (R = t), t; {
                        const t = a.getGlobalFederationConstructor() || I;
                        return R = new t(e), a.setGlobalFederationInstance(R), R
                    }
                }, t.loadRemote = function() {
                    a.assert(R, "Please call init first");
                    const e = R.loadRemote;
                    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                    return e.apply(R, r)
                }, t.loadShare = function() {
                    a.assert(R, "Please call init first");
                    const e = R.loadShare;
                    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                    return e.apply(R, r)
                }, t.loadShareSync = function() {
                    a.assert(R, "Please call init first");
                    const e = R.loadShareSync;
                    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                    return e.apply(R, r)
                }, t.preloadRemote = function() {
                    a.assert(R, "Please call init first");
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return R.preloadRemote.apply(R, t)
                }, t.registerPlugins = function() {
                    a.assert(R, "Please call init first");
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return R.registerPlugins.apply(R, t)
                }, t.registerRemotes = function() {
                    a.assert(R, "Please call init first");
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return R.registerRemotes.apply(R, t)
                }
            },
            73603: (e, t) => {
                "use strict";

                function r() {
                    return r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                        }
                        return e
                    }, r.apply(this, arguments)
                }
                t._extends = r, t._object_without_properties_loose = function(e, t) {
                    if (null == e) return {};
                    var r, o, n = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) r = a[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }
            },
            7474: (e, t, r) => {
                "use strict";
                var o = r(73603),
                    n = r(56040);

                function a() {
                    return "ocelot:0.14.0"
                }
                const s = "[ Federation Runtime ]";

                function i(e) {
                    if (e instanceof Error) throw e.message = `${s}: ${e.message}`, e;
                    throw new Error(`${s}: ${e}`)
                }

                function c(e) {
                    e instanceof Error ? (e.message = `${s}: ${e.message}`, console.warn(e)) : console.warn(`${s}: ${e}`)
                }

                function l(e) {
                    return "version" in e && e.version ? `${e.name}:${e.version}` : "entry" in e && e.entry ? `${e.name}:${e.entry}` : `${e.name}`
                }
                const u = Object.prototype.toString;

                function d(e) {
                    return Array.isArray(e) ? e : [e]
                }
                const f = (() => {
                        try {
                            return new Function("return this")()
                        } catch (e) {
                            return globalThis
                        }
                    })(),
                    p = f;

                function _(e, t, r) {
                    Object.defineProperty(e, t, {
                        value: r,
                        configurable: !1,
                        writable: !0
                    })
                }

                function m(e, t) {
                    return Object.hasOwnProperty.call(e, t)
                }
                m(globalThis, "__GLOBAL_LOADING_REMOTE_ENTRY__") || _(globalThis, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
                const h = globalThis.__GLOBAL_LOADING_REMOTE_ENTRY__;

                function b(e) {
                    var t, r, o, n, a, s;
                    m(e, "__VMOK__") && !m(e, "__FEDERATION__") && _(e, "__FEDERATION__", e.__VMOK__), m(e, "__FEDERATION__") || (_(e, "__FEDERATION__", {
                        __GLOBAL_PLUGIN__: [],
                        __INSTANCES__: [],
                        moduleInfo: {},
                        __SHARE__: {},
                        __MANIFEST_LOADING__: {},
                        __PRELOADED_MAP__: new Map
                    }), _(e, "__VMOK__", e.__FEDERATION__)), null != (t = e.__FEDERATION__).__GLOBAL_PLUGIN__ || (t.__GLOBAL_PLUGIN__ = []), null != (r = e.__FEDERATION__).__INSTANCES__ || (r.__INSTANCES__ = []), null != (o = e.__FEDERATION__).moduleInfo || (o.moduleInfo = {}), null != (n = e.__FEDERATION__).__SHARE__ || (n.__SHARE__ = {}), null != (a = e.__FEDERATION__).__MANIFEST_LOADING__ || (a.__MANIFEST_LOADING__ = {}), null != (s = e.__FEDERATION__).__PRELOADED_MAP__ || (s.__PRELOADED_MAP__ = new Map)
                }

                function g(e, t) {
                    if ("string" === typeof t) {
                        if (e[t]) return {
                            value: e[t],
                            key: t
                        }; {
                            const r = Object.keys(e);
                            for (const o of r) {
                                const [r, n] = o.split(":"), a = `${r}:${t}`, s = e[a];
                                if (s) return {
                                    value: s,
                                    key: a
                                }
                            }
                            return {
                                value: void 0,
                                key: t
                            }
                        }
                    }
                    throw new Error("key must be string")
                }
                b(globalThis), b(f);
                const y = (e, t) => {
                        const r = g(t, l(e)).value;
                        if (r && !r.version && "version" in e && e.version && (r.version = e.version), r) return r;
                        if ("version" in e && e.version) {
                            const {
                                version: t
                            } = e, r = l(o._object_without_properties_loose(e, ["version"])), n = g(f.__FEDERATION__.moduleInfo, r).value;
                            if ((null == n ? void 0 : n.version) === t) return n
                        }
                    },
                    E = "default",
                    S = "[0-9A-Za-z-]+",
                    w = `(?:\\+(${S}(?:\\.${S})*))`,
                    v = "0|[1-9]\\d*",
                    N = "[0-9]+",
                    T = "\\d*[a-zA-Z-][a-zA-Z0-9-]*",
                    O = `(?:${N}|${T})`,
                    I = `(?:${v}|${T})`,
                    R = `(?:-(${I}(?:\\.${I})*))`,
                    k = `${v}|x|X|\\*`,
                    A = `[v=\\s]*(${k})(?:\\.(${k})(?:\\.(${k})(?:${R})?${w}?)?)?`,
                    P = `^\\s*(${A})\\s+-\\s+(${A})\\s*$`,
                    $ = "((?:<|>)?=?)",
                    M = `(\\s*)${$}\\s*(${`[v=\\s]*${`(${N})\\.(${N})\\.(${N})`}${`(?:-?(${O}(?:\\.${O})*))`}?${w}?`}|${A})`,
                    x = "(?:~>?)",
                    L = `(\\s*)${x}\\s+`,
                    D = "(?:\\^)",
                    F = `(\\s*)${D}\\s+`,
                    q = "(<|>)?=?\\s*\\*",
                    C = `^${D}${A}$`,
                    j = `^${x}${A}$`,
                    H = `^${$}\\s*${A}$`,
                    G = `^${$}\\s*(${`v?${`(${v})\\.(${v})\\.(${v})`}${R}?${w}?`})$|^$`,
                    U = "^\\s*>=\\s*0.0.0\\s*$";

                function B(e) {
                    return new RegExp(e)
                }

                function W(e) {
                    return !e || "x" === e.toLowerCase() || "*" === e
                }

                function V() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return e => t.reduce(((e, t) => t(e)), e)
                }

                function Y(e) {
                    return e.match(B(G))
                }

                function K(e, t, r, o) {
                    const n = `${e}.${t}.${r}`;
                    return o ? `${n}-${o}` : n
                }

                function z(e) {
                    return e.replace(B(P), ((e, t, r, o, n, a, s, i, c, l, u, d) => `${t=W(r)?"":W(o)?`>=${r}.0.0`:W(n)?`>=${r}.${o}.0`:`>=${t}`} ${i=W(c)?"":W(l)?`<${Number(c)+1}.0.0-0`:W(u)?`<${c}.${Number(l)+1}.0-0`:d?`<=${c}.${l}.${u}-${d}`:`<=${i}`}`.trim()))
                }

                function X(e) {
                    return e.replace(B(M), "$1$2$3")
                }

                function J(e) {
                    return e.replace(B(L), "$1~")
                }

                function Z(e) {
                    return e.replace(B(F), "$1^")
                }

                function Q(e) {
                    return e.trim().split(/\s+/).map((e => e.replace(B(C), ((e, t, r, o, n) => W(t) ? "" : W(r) ? `>=${t}.0.0 <${Number(t)+1}.0.0-0` : W(o) ? "0" === t ? `>=${t}.${r}.0 <${t}.${Number(r)+1}.0-0` : `>=${t}.${r}.0 <${Number(t)+1}.0.0-0` : n ? "0" === t ? "0" === r ? `>=${t}.${r}.${o}-${n} <${t}.${r}.${Number(o)+1}-0` : `>=${t}.${r}.${o}-${n} <${t}.${Number(r)+1}.0-0` : `>=${t}.${r}.${o}-${n} <${Number(t)+1}.0.0-0` : "0" === t ? "0" === r ? `>=${t}.${r}.${o} <${t}.${r}.${Number(o)+1}-0` : `>=${t}.${r}.${o} <${t}.${Number(r)+1}.0-0` : `>=${t}.${r}.${o} <${Number(t)+1}.0.0-0`)))).join(" ")
                }

                function ee(e) {
                    return e.trim().split(/\s+/).map((e => e.replace(B(j), ((e, t, r, o, n) => W(t) ? "" : W(r) ? `>=${t}.0.0 <${Number(t)+1}.0.0-0` : W(o) ? `>=${t}.${r}.0 <${t}.${Number(r)+1}.0-0` : n ? `>=${t}.${r}.${o}-${n} <${t}.${Number(r)+1}.0-0` : `>=${t}.${r}.${o} <${t}.${Number(r)+1}.0-0`)))).join(" ")
                }

                function te(e) {
                    return e.split(/\s+/).map((e => e.trim().replace(B(H), ((e, t, r, o, n, a) => {
                        const s = W(r),
                            i = s || W(o),
                            c = i || W(n);
                        return "=" === t && c && (t = ""), a = "", s ? ">" === t || "<" === t ? "<0.0.0-0" : "*" : t && c ? (i && (o = 0), n = 0, ">" === t ? (t = ">=", i ? (r = Number(r) + 1, o = 0, n = 0) : (o = Number(o) + 1, n = 0)) : "<=" === t && (t = "<", i ? r = Number(r) + 1 : o = Number(o) + 1), "<" === t && (a = "-0"), `${t+r}.${o}.${n}${a}`) : i ? `>=${r}.0.0${a} <${Number(r)+1}.0.0-0` : c ? `>=${r}.${o}.0${a} <${r}.${Number(o)+1}.0-0` : e
                    })))).join(" ")
                }

                function re(e) {
                    return e.trim().replace(B(q), "")
                }

                function oe(e, t) {
                    return (e = Number(e) || e) > (t = Number(t) || t) ? 1 : e === t ? 0 : -1
                }

                function ne(e, t) {
                    return oe(e.major, t.major) || oe(e.minor, t.minor) || oe(e.patch, t.patch) || function(e, t) {
                        const {
                            preRelease: r
                        } = e, {
                            preRelease: o
                        } = t;
                        if (void 0 === r && Boolean(o)) return 1;
                        if (Boolean(r) && void 0 === o) return -1;
                        if (void 0 === r && void 0 === o) return 0;
                        for (let n = 0, a = r.length; n <= a; n++) {
                            const e = r[n],
                                t = o[n];
                            if (e !== t) return void 0 === e && void 0 === t ? 0 : e ? t ? oe(e, t) : -1 : 1
                        }
                        return 0
                    }(e, t)
                }

                function ae(e, t) {
                    return e.version === t.version
                }

                function se(e, t) {
                    switch (e.operator) {
                        case "":
                        case "=":
                            return ae(e, t);
                        case ">":
                            return ne(e, t) < 0;
                        case ">=":
                            return ae(e, t) || ne(e, t) < 0;
                        case "<":
                            return ne(e, t) > 0;
                        case "<=":
                            return ae(e, t) || ne(e, t) > 0;
                        case void 0:
                            return !0;
                        default:
                            return !1
                    }
                }

                function ie(e, t) {
                    if (!e) return !1;
                    const r = function(e) {
                            return V(z, X, J, Z)(e.trim()).split(/\s+/).join(" ")
                        }(t),
                        o = r.split(" ").map((e => function(e) {
                            return V(Q, ee, te, re)(e)
                        }(e))).join(" "),
                        n = o.split(/\s+/).map((e => e.trim().replace(B(U), ""))),
                        a = Y(e);
                    if (!a) return !1;
                    const [, s, , i, c, l, u] = a, d = {
                        operator: s,
                        version: K(i, c, l, u),
                        major: i,
                        minor: c,
                        patch: l,
                        preRelease: null == u ? void 0 : u.split(".")
                    };
                    for (const f of n) {
                        const e = Y(f);
                        if (!e) return !1;
                        const [, t, , r, o, n, a] = e;
                        if (!se({
                                operator: t,
                                version: K(r, o, n, a),
                                major: r,
                                minor: o,
                                patch: n,
                                preRelease: null == a ? void 0 : a.split(".")
                            }, d)) return !1
                    }
                    return !0
                }

                function ce(e, t) {
                    const r = e => {
                        if (!Number.isNaN(Number(e))) {
                            const t = e.split(".");
                            let r = e;
                            for (let e = 0; e < 3 - t.length; e++) r += ".0";
                            return r
                        }
                        return e
                    };
                    return !!ie(r(e), `<=${r(t)}`)
                }
                const le = (e, t) => {
                        const r = t || function(e, t) {
                            return ce(e, t)
                        };
                        return Object.keys(e).reduce(((e, t) => e ? r(e, t) || "0" === e ? t : e : t), 0)
                    },
                    ue = e => Boolean(e.loaded) || "function" === typeof e.lib;

                function de(e, t, r) {
                    const o = e[t][r];
                    return le(e[t][r], (function(e, t) {
                        return !ue(o[e]) && ce(e, t)
                    }))
                }

                function fe(e, t, r) {
                    const o = e[t][r];
                    return le(e[t][r], (function(e, t) {
                        return ue(o[t]) ? !ue(o[e]) || Boolean(ce(e, t)) : !ue(o[e]) && ce(e, t)
                    }))
                }

                function pe(e) {
                    return "loaded-first" === e ? fe : de
                }
                t.DEFAULT_REMOTE_TYPE = "global", t.DEFAULT_SCOPE = E, t.Global = p, t.addGlobalSnapshot = e => (f.__FEDERATION__.moduleInfo = o._extends({}, f.__FEDERATION__.moduleInfo, e), () => {
                    const t = Object.keys(e);
                    for (const e of t) delete f.__FEDERATION__.moduleInfo[e]
                }), t.addUniqueItem = function(e, t) {
                    return -1 === e.findIndex((e => e === t)) && e.push(t), e
                }, t.arrayOptions = d, t.assert = function(e, t) {
                    e || i(t)
                }, t.error = i, t.formatShareConfigs = function(e, t) {
                    const r = t.shared || {},
                        n = t.name,
                        a = Object.keys(r).reduce(((e, a) => {
                            const s = d(r[a]);
                            return e[a] = e[a] || [], s.forEach((r => {
                                e[a].push(function(e, t, r, n) {
                                    let a;
                                    var s, i, l;
                                    return a = "get" in e ? e.get : "lib" in e ? () => Promise.resolve(e.lib) : () => Promise.resolve((() => {
                                        throw new Error(`Can not get shared '${r}'!`)
                                    })), e.strategy && c('"shared.strategy is deprecated, please set in initOptions.shareStrategy instead!"'), o._extends({
                                        deps: [],
                                        useIn: [],
                                        from: t,
                                        loading: null
                                    }, e, {
                                        shareConfig: o._extends({
                                            requiredVersion: `^${e.version}`,
                                            singleton: !1,
                                            eager: !1,
                                            strictVersion: !1
                                        }, e.shareConfig),
                                        get: a,
                                        loaded: !(!(null == e ? void 0 : e.loaded) && !("lib" in e)) || void 0,
                                        version: null != (s = e.version) ? s : "0",
                                        scope: Array.isArray(e.scope) ? e.scope : [null != (i = e.scope) ? i : "default"],
                                        strategy: (null != (l = e.strategy) ? l : n) || "version-first"
                                    })
                                }(r, n, a, t.shareStrategy))
                            })), e
                        }), {}),
                        s = o._extends({}, e.shared);
                    return Object.keys(a).forEach((e => {
                        s[e] ? a[e].forEach((t => {
                            s[e].find((e => e.version === t.version)) || s[e].push(t)
                        })) : s[e] = a[e]
                    })), {
                        shared: s,
                        shareInfos: a
                    }
                }, t.getBuilderId = a, t.getFMId = l, t.getGlobalFederationConstructor = function() {
                    return globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__
                }, t.getGlobalFederationInstance = function(e, t) {
                    return globalThis.__FEDERATION__.__INSTANCES__.find((r => "ocelot:0.14.0" === r.options.id || (r.options.name === e && !r.options.version && !t || !(r.options.name !== e || !t || r.options.version !== t))))
                }, t.getGlobalHostPlugins = () => f.__FEDERATION__.__GLOBAL_PLUGIN__, t.getGlobalShareScope = function() {
                    return p.__FEDERATION__.__SHARE__
                }, t.getGlobalSnapshot = () => f.__FEDERATION__.moduleInfo, t.getGlobalSnapshotInfoByModuleInfo = e => y(e, f.__FEDERATION__.moduleInfo), t.getInfoWithoutType = g, t.getPreloaded = e => globalThis.__FEDERATION__.__PRELOADED_MAP__.get(e), t.getRegisteredShare = function(e, t, r, o) {
                    if (!e) return;
                    const {
                        shareConfig: n,
                        scope: a = E,
                        strategy: s
                    } = r, l = Array.isArray(a) ? a : [a];
                    for (const u of l)
                        if (n && e[u] && e[u][t]) {
                            const {
                                requiredVersion: a
                            } = n, l = pe(s)(e, u, t), d = () => {
                                if (n.singleton) {
                                    if ("string" === typeof a && !ie(l, a)) {
                                        const o = `Version ${l} from ${l&&e[u][t][l].from} of shared singleton module ${t} does not satisfy the requirement of ${r.from} which needs ${a})`;
                                        n.strictVersion ? i(o) : c(o)
                                    }
                                    return e[u][t][l]
                                }
                                if (!1 === a || "*" === a) return e[u][t][l];
                                if (ie(l, a)) return e[u][t][l];
                                for (const [r, o] of Object.entries(e[u][t]))
                                    if (ie(r, a)) return o
                            }, f = {
                                shareScopeMap: e,
                                scope: u,
                                pkgName: t,
                                version: l,
                                GlobalFederation: p.__FEDERATION__,
                                resolver: d
                            };
                            return (o.emit(f) || f).resolver()
                        }
                }, t.getRemoteEntryExports = (e, t) => {
                    const r = t || `__FEDERATION_${e}:custom__`;
                    return {
                        remoteEntryKey: r,
                        entryExports: globalThis[r]
                    }
                }, t.getRemoteEntryInfoFromSnapshot = function(e) {
                    const t = {
                        url: "",
                        type: "global",
                        globalName: ""
                    };
                    return n.isBrowserEnv() ? "remoteEntry" in e ? {
                        url: e.remoteEntry,
                        type: e.remoteEntryType,
                        globalName: e.globalName
                    } : t : "ssrRemoteEntry" in e ? {
                        url: e.ssrRemoteEntry || t.url,
                        type: e.ssrRemoteEntryType || t.type,
                        globalName: e.globalName
                    } : t
                }, t.getTargetSharedOptions = function(e) {
                    const {
                        pkgName: t,
                        extraOptions: r,
                        shareInfos: o
                    } = e;
                    var n;
                    const a = null != (n = null == r ? void 0 : r.resolver) ? n : e => {
                        if (!e) return;
                        const t = {};
                        e.forEach((e => {
                            t[e.version] = e
                        }));
                        const r = le(t, (function(e, r) {
                            return !ue(t[e]) && ce(e, r)
                        }));
                        return t[r]
                    };
                    return Object.assign({}, a(o[t]), null == r ? void 0 : r.customShareInfo)
                }, t.getTargetSnapshotInfoByModuleInfo = y, t.globalLoading = h, t.isObject = function(e) {
                    return e && "object" === typeof e
                }, t.isPlainObject = function(e) {
                    return "[object Object]" === u.call(e)
                }, t.isPureRemoteEntry = function(e) {
                    return !e.entry.includes(".json") && e.entry.includes(".js")
                }, t.isRemoteInfoWithEntry = function(e) {
                    return "undefined" !== typeof e.entry
                }, t.nativeGlobal = f, t.registerGlobalPlugins = e => {
                    const {
                        __GLOBAL_PLUGIN__: t
                    } = f.__FEDERATION__;
                    e.forEach((e => {
                        -1 === t.findIndex((t => t.name === e.name)) ? t.push(e) : c(`The plugin ${e.name} has been registered.`)
                    }))
                }, t.resetFederationGlobalInfo = function() {
                    globalThis.__FEDERATION__.__GLOBAL_PLUGIN__ = [], globalThis.__FEDERATION__.__INSTANCES__ = [], globalThis.__FEDERATION__.moduleInfo = {}, globalThis.__FEDERATION__.__SHARE__ = {}, globalThis.__FEDERATION__.__MANIFEST_LOADING__ = {}
                }, t.setGlobalFederationConstructor = function(e) {
                    (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.isDebugMode()) && (globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e, globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.6.9")
                }, t.setGlobalFederationInstance = function(e) {
                    globalThis.__FEDERATION__.__INSTANCES__.push(e)
                }, t.setGlobalSnapshotInfoByModuleInfo = (e, t) => {
                    const r = l(e);
                    return f.__FEDERATION__.moduleInfo[r] = t, f.__FEDERATION__.moduleInfo
                }, t.setPreloaded = e => globalThis.__FEDERATION__.__PRELOADED_MAP__.set(e, !0), t.warn = c
            },
            56040: (__unused_webpack_module, exports, __webpack_require__) => {
                "use strict";
                var polyfills = __webpack_require__(8173);
                const FederationModuleManifest = "federation-manifest.json",
                    MANIFEST_EXT = ".json",
                    BROWSER_LOG_KEY = "FEDERATION_DEBUG",
                    BROWSER_LOG_VALUE = "1",
                    NameTransformSymbol = {
                        AT: "@",
                        HYPHEN: "-",
                        SLASH: "/"
                    },
                    NameTransformMap = {
                        [NameTransformSymbol.AT]: "scope_",
                        [NameTransformSymbol.HYPHEN]: "_",
                        [NameTransformSymbol.SLASH]: "__"
                    },
                    EncodedNameTransformMap = {
                        [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
                        [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
                        [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
                    },
                    SEPARATOR = ":",
                    ManifestFileName = "mf-manifest.json",
                    StatsFileName = "mf-stats.json",
                    MFModuleType = {
                        NPM: "npm",
                        APP: "app"
                    },
                    MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__",
                    ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX",
                    TEMP_DIR = ".federation",
                    MFPrefetchCommon = {
                        identifier: "MFDataPrefetch",
                        globalKey: "__PREFETCH__",
                        library: "mf-data-prefetch",
                        exportsKey: "__PREFETCH_EXPORTS__",
                        fileName: "bootstrap.js"
                    };
                var ContainerPlugin = Object.freeze({
                        __proto__: null
                    }),
                    ContainerReferencePlugin = Object.freeze({
                        __proto__: null
                    }),
                    ModuleFederationPlugin = Object.freeze({
                        __proto__: null
                    }),
                    SharePlugin = Object.freeze({
                        __proto__: null
                    });

                function isBrowserEnv() {
                    return "undefined" !== typeof window
                }

                function isDebugMode() {
                    return "undefined" !== typeof process && process.env && process.env.FEDERATION_DEBUG ? Boolean(process.env.FEDERATION_DEBUG) : "undefined" !== typeof FEDERATION_DEBUG && Boolean(FEDERATION_DEBUG)
                }
                const getProcessEnv = function() {
                        return "undefined" !== typeof process && process.env ? process.env : {}
                    },
                    DEBUG_LOG = "[ FEDERATION DEBUG ]";

                function safeToString$1(e) {
                    try {
                        return JSON.stringify(e, null, 2)
                    } catch (t) {
                        return ""
                    }
                }

                function safeGetLocalStorageItem() {
                    try {
                        if ("undefined" !== typeof window && window.localStorage) return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE
                    } catch (error) {
                        return "undefined" !== typeof document
                    }
                    return !1
                }
                let Logger = class {
                    info(e, t) {
                        if (this.enable) {
                            const r = safeToString$1(t) || "";
                            isBrowserEnv() ? console.info(`%c ${this.identifier}: ${e} ${r}`, "color:#3300CC") : console.info("\x1b[34m%s", `${this.identifier}: ${e} ${r?`\n${r}`:""}`)
                        }
                    }
                    logOriginalInfo() {
                        this.enable && (isBrowserEnv(), console.info(`%c ${this.identifier}: OriginalInfo`, "color:#3300CC"), console.log(...arguments))
                    }
                    constructor(e) {
                        this.enable = !1, this.identifier = e || DEBUG_LOG, (isBrowserEnv() && safeGetLocalStorageItem() || isDebugMode()) && (this.enable = !0)
                    }
                };
                const LOG_CATEGORY = "[ Federation Runtime ]",
                    parseEntry = function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SEPARATOR;
                        const o = e.split(r),
                            n = "development" === getProcessEnv().NODE_ENV && t,
                            a = e => e.startsWith("http") || e.includes(MANIFEST_EXT);
                        if (o.length >= 2) {
                            let [t, ...s] = o;
                            e.startsWith(r) && (s = [n || o.slice(-1)[0]], t = o.slice(0, -1).join(r));
                            let i = n || s.join(r);
                            return a(i) ? {
                                name: t,
                                entry: i
                            } : {
                                name: t,
                                version: i || "*"
                            }
                        }
                        if (1 === o.length) {
                            const [e] = o;
                            return n && a(n) ? {
                                name: e,
                                entry: n
                            } : {
                                name: e,
                                version: n || "*"
                            }
                        }
                        throw `Invalid entry value: ${e}`
                    },
                    logger = new Logger,
                    composeKeyWithSeparator = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return t.length ? t.reduce(((e, t) => t ? e ? `${e}${SEPARATOR}${t}` : t : e), "") : ""
                    },
                    encodeName = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        try {
                            const o = r ? ".js" : "";
                            return `${t}${e.replace(new RegExp(`${NameTransformSymbol.AT}`,"g"),NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`,"g"),NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`,"g"),NameTransformMap[NameTransformSymbol.SLASH])}${o}`
                        } catch (o) {
                            throw o
                        }
                    },
                    decodeName = function(e, t, r) {
                        try {
                            let o = e;
                            if (t) {
                                if (!o.startsWith(t)) return o;
                                o = o.replace(new RegExp(t, "g"), "")
                            }
                            return o = o.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]), r && (o = o.replace(".js", "")), o
                        } catch (o) {
                            throw o
                        }
                    },
                    generateExposeFilename = (e, t) => {
                        if (!e) return "";
                        let r = e;
                        return "." === r && (r = "default_export"), r.startsWith("./") && (r = r.replace("./", "")), encodeName(r, "__federation_expose_", t)
                    },
                    generateShareFilename = (e, t) => e ? encodeName(e, "__federation_shared_", t) : "",
                    getResourceUrl = (e, t) => {
                        if ("getPublicPath" in e) {
                            let r;
                            return r = e.getPublicPath.startsWith("function") ? new Function("return " + e.getPublicPath)()() : new Function(e.getPublicPath)(), `${r}${t}`
                        }
                        return "publicPath" in e ? `${e.publicPath}${t}` : (console.warn("Cannot get resource URL. If in debug mode, please ignore.", e, t), "")
                    },
                    assert = (e, t) => {
                        e || error(t)
                    },
                    error = e => {
                        throw new Error(`${LOG_CATEGORY}: ${e}`)
                    },
                    warn = e => {
                        console.warn(`${LOG_CATEGORY}: ${e}`)
                    };

                function safeToString(e) {
                    try {
                        return JSON.stringify(e, null, 2)
                    } catch (t) {
                        return ""
                    }
                }
                const simpleJoinRemoteEntry = (e, t) => {
                    if (!e) return t;
                    const r = (e => {
                        if ("." === e) return "";
                        if (e.startsWith("./")) return e.replace("./", "");
                        if (e.startsWith("/")) {
                            const t = e.slice(1);
                            return t.endsWith("/") ? t.slice(0, -1) : t
                        }
                        return e
                    })(e);
                    return r ? r.endsWith("/") ? `${r}${t}` : `${r}/${t}` : t
                };

                function inferAutoPublicPath(e) {
                    return e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/")
                }

                function generateSnapshotFromManifest(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var r, o;
                    const {
                        remotes: n = {},
                        overrides: a = {},
                        version: s
                    } = t;
                    let i;
                    const c = () => "publicPath" in e.metaData ? "auto" === e.metaData.publicPath && s ? inferAutoPublicPath(s) : e.metaData.publicPath : e.metaData.getPublicPath,
                        l = Object.keys(a);
                    let u = {};
                    var d;
                    Object.keys(n).length || (u = (null == (d = e.remotes) ? void 0 : d.reduce(((e, t) => {
                        let r;
                        const o = t.federationContainerName;
                        return r = l.includes(o) ? a[o] : "version" in t ? t.version : t.entry, e[o] = {
                            matchedVersion: r
                        }, e
                    }), {})) || {});
                    Object.keys(n).forEach((e => u[e] = {
                        matchedVersion: l.includes(e) ? a[e] : n[e]
                    }));
                    const {
                        remoteEntry: {
                            path: f,
                            name: p,
                            type: _
                        },
                        types: m,
                        buildInfo: {
                            buildVersion: h
                        },
                        globalName: b,
                        ssrRemoteEntry: g
                    } = e.metaData, {
                        exposes: y
                    } = e;
                    let E = {
                        version: s || "",
                        buildVersion: h,
                        globalName: b,
                        remoteEntry: simpleJoinRemoteEntry(f, p),
                        remoteEntryType: _,
                        remoteTypes: simpleJoinRemoteEntry(m.path, m.name),
                        remoteTypesZip: m.zip || "",
                        remoteTypesAPI: m.api || "",
                        remotesInfo: u,
                        shared: null == e ? void 0 : e.shared.map((e => ({
                            assets: e.assets,
                            sharedName: e.name,
                            version: e.version
                        }))),
                        modules: null == y ? void 0 : y.map((e => ({
                            moduleName: e.name,
                            modulePath: e.path,
                            assets: e.assets
                        })))
                    };
                    if (null == (r = e.metaData) ? void 0 : r.prefetchInterface) {
                        const t = e.metaData.prefetchInterface;
                        E = polyfills._extends({}, E, {
                            prefetchInterface: t
                        })
                    }
                    if (null == (o = e.metaData) ? void 0 : o.prefetchEntry) {
                        const {
                            path: t,
                            name: r,
                            type: o
                        } = e.metaData.prefetchEntry;
                        E = polyfills._extends({}, E, {
                            prefetchEntry: simpleJoinRemoteEntry(t, r),
                            prefetchEntryType: o
                        })
                    }
                    if (i = "publicPath" in e.metaData ? polyfills._extends({}, E, {
                            publicPath: c()
                        }) : polyfills._extends({}, E, {
                            getPublicPath: c()
                        }), g) {
                        const e = simpleJoinRemoteEntry(g.path, g.name);
                        i.ssrRemoteEntry = e, i.ssrRemoteEntryType = g.type || "commonjs-module"
                    }
                    return i
                }

                function isManifestProvider(e) {
                    return !(!("remoteEntry" in e) || !e.remoteEntry.includes(MANIFEST_EXT))
                }
                async function safeWrapper(e, t) {
                    try {
                        return await e()
                    } catch (r) {
                        return void(!t && warn(r))
                    }
                }

                function isStaticResourcesEqual(e, t) {
                    const r = /^(https?:)?\/\//i;
                    return e.replace(r, "").replace(/\/$/, "") === t.replace(r, "").replace(/\/$/, "")
                }

                function createScript(e) {
                    let t, r = null,
                        o = !0,
                        n = 2e4;
                    const a = document.getElementsByTagName("script");
                    for (let i = 0; i < a.length; i++) {
                        const t = a[i],
                            n = t.getAttribute("src");
                        if (n && isStaticResourcesEqual(n, e.url)) {
                            r = t, o = !1;
                            break
                        }
                    }
                    if (!r) {
                        const t = e.attrs;
                        let o;
                        r = document.createElement("script"), r.type = "module" === (null == t ? void 0 : t.type) ? "module" : "text/javascript", r.src = e.url, e.createScriptHook && (o = e.createScriptHook(e.url, e.attrs), o instanceof HTMLScriptElement ? r = o : "object" === typeof o && ("script" in o && o.script && (r = o.script), "timeout" in o && o.timeout && (n = o.timeout))), t && !o && Object.keys(t).forEach((e => {
                            r && ("async" === e || "defer" === e ? r[e] = t[e] : r.getAttribute(e) || r.setAttribute(e, t[e]))
                        }))
                    }
                    const s = async (o, n) => {
                        var a;
                        if (clearTimeout(t), r && (r.onerror = null, r.onload = null, safeWrapper((() => {
                                const {
                                    needDeleteScript: t = !0
                                } = e;
                                t && (null == r ? void 0 : r.parentNode) && r.parentNode.removeChild(r)
                            })), o && "function" === typeof o)) {
                            var s;
                            const t = o(n);
                            if (t instanceof Promise) {
                                var i;
                                const r = await t;
                                return null == e || null == (i = e.cb) || i.call(e), r
                            }
                            return null == e || null == (s = e.cb) || s.call(e), t
                        }
                        null == e || null == (a = e.cb) || a.call(e)
                    };
                    return r.onerror = s.bind(null, r.onerror), r.onload = s.bind(null, r.onload), t = setTimeout((() => {
                        s(null, new Error(`Remote script "${e.url}" time-outed.`))
                    }), n), {
                        script: r,
                        needAttach: o
                    }
                }

                function createLink(e) {
                    let t = null,
                        r = !0;
                    const o = document.getElementsByTagName("link");
                    for (let a = 0; a < o.length; a++) {
                        const n = o[a],
                            s = n.getAttribute("href"),
                            i = n.getAttribute("ref");
                        if (s && isStaticResourcesEqual(s, e.url) && i === e.attrs.ref) {
                            t = n, r = !1;
                            break
                        }
                    }
                    if (!t) {
                        let r;
                        t = document.createElement("link"), t.setAttribute("href", e.url);
                        const o = e.attrs;
                        e.createLinkHook && (r = e.createLinkHook(e.url, o), r instanceof HTMLLinkElement && (t = r)), o && !r && Object.keys(o).forEach((e => {
                            t && !t.getAttribute(e) && t.setAttribute(e, o[e])
                        }))
                    }
                    const n = (r, o) => {
                        if (t && (t.onerror = null, t.onload = null, safeWrapper((() => {
                                const {
                                    needDeleteLink: r = !0
                                } = e;
                                r && (null == t ? void 0 : t.parentNode) && t.parentNode.removeChild(t)
                            })), r)) {
                            const t = r(o);
                            return e.cb(), t
                        }
                        e.cb()
                    };
                    return t.onerror = n.bind(null, t.onerror), t.onload = n.bind(null, t.onload), {
                        link: t,
                        needAttach: r
                    }
                }

                function loadScript(e, t) {
                    const {
                        attrs: r = {},
                        createScriptHook: o
                    } = t;
                    return new Promise(((t, n) => {
                        const {
                            script: a,
                            needAttach: s
                        } = createScript({
                            url: e,
                            cb: t,
                            attrs: polyfills._extends({
                                fetchpriority: "high"
                            }, r),
                            createScriptHook: o,
                            needDeleteScript: !0
                        });
                        s && document.head.appendChild(a)
                    }))
                }

                function importNodeModule(e) {
                    if (!e) throw new Error("import specifier is required");
                    return new Function("name", "return import(name)")(e).then((e => e)).catch((t => {
                        throw console.error(`Error importing module ${e}:`, t), t
                    }))
                }
                const loadNodeFetch = async () => {
                        const e = await importNodeModule("node-fetch");
                        return e.default || e
                    },
                    lazyLoaderHookFetch = async (e, t) => {
                        const r = __webpack_require__.federation.instance.loaderHook,
                            o = await ((e, t) => r.lifecycle.fetch.emit(e, t))(e, t || {});
                        if (!o || !(o instanceof Response)) {
                            return ("undefined" === typeof fetch ? await loadNodeFetch() : fetch)(e, t || {})
                        }
                        return o
                    };

                function createScriptNode(url, cb, attrs, createScriptHook) {
                    if (createScriptHook) {
                        const e = createScriptHook(url);
                        e && "object" === typeof e && "url" in e && (url = e.url)
                    }
                    let urlObj;
                    try {
                        urlObj = new URL(url)
                    } catch (e) {
                        return console.error("Error constructing URL:", e), void cb(new Error(`Invalid URL: ${e}`))
                    }
                    const getFetch = async () => {
                            try {
                                if (__webpack_require__.federation.instance.loaderHook.lifecycle.fetch) return lazyLoaderHookFetch
                            } catch (e) {
                                console.warn("federation.instance.loaderHook.lifecycle.fetch failed:", e)
                            }
                            return "undefined" === typeof fetch ? loadNodeFetch() : fetch
                        },
                        handleScriptFetch = async (f, urlObj) => {
                            try {
                                var _vm_constants;
                                const res = await f(urlObj.href),
                                    data = await res.text(),
                                    [path, vm] = await Promise.all([importNodeModule("path"), importNodeModule("vm")]),
                                    scriptContext = {
                                        exports: {},
                                        module: {
                                            exports: {}
                                        }
                                    },
                                    urlDirname = urlObj.pathname.split("/").slice(0, -1).join("/"),
                                    filename = path.basename(urlObj.pathname);
                                var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;
                                const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}\n})`, {
                                    filename: filename,
                                    importModuleDynamically: null != (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = null == (_vm_constants = vm.constants) ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule
                                });
                                script.runInThisContext()(scriptContext.exports, scriptContext.module, eval("require"), urlDirname, filename);
                                const exportedInterface = scriptContext.module.exports || scriptContext.exports;
                                if (attrs && exportedInterface && attrs.globalName) {
                                    const e = exportedInterface[attrs.globalName] || exportedInterface;
                                    return void cb(void 0, e)
                                }
                                cb(void 0, exportedInterface)
                            } catch (e) {
                                cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`))
                            }
                        };
                    getFetch().then((async e => {
                        if ("esm" === (null == attrs ? void 0 : attrs.type) || "module" === (null == attrs ? void 0 : attrs.type)) return loadModule(urlObj.href, {
                            fetch: e,
                            vm: await importNodeModule("vm")
                        }).then((async e => {
                            await e.evaluate(), cb(void 0, e.namespace)
                        })).catch((e => {
                            cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`))
                        }));
                        handleScriptFetch(e, urlObj)
                    })).catch((e => {
                        cb(e)
                    }))
                }

                function loadScriptNode(e, t) {
                    return new Promise(((r, o) => {
                        createScriptNode(e, ((e, n) => {
                            if (e) o(e);
                            else {
                                var a, s;
                                const e = (null == t || null == (a = t.attrs) ? void 0 : a.globalName) || `__FEDERATION_${null==t||null==(s=t.attrs)?void 0:s.name}:custom__`,
                                    o = globalThis[e] = n;
                                r(o)
                            }
                        }), t.attrs, t.createScriptHook)
                    }))
                }
                async function loadModule(e, t) {
                    const {
                        fetch: r,
                        vm: o
                    } = t, n = await r(e), a = await n.text(), s = new o.SourceTextModule(a, {
                        importModuleDynamically: async (r, o) => loadModule(new URL(r, e).href, t)
                    });
                    return await s.link((async r => {
                        const o = new URL(r, e).href;
                        return await loadModule(o, t)
                    })), s
                }

                function normalizeOptions(e, t, r) {
                    return function(o) {
                        if (!1 === o) return !1;
                        if ("undefined" === typeof o) return !!e && t;
                        if (!0 === o) return t;
                        if (o && "object" === typeof o) return polyfills._extends({}, t, o);
                        throw new Error(`Unexpected type for \`${r}\`, expect boolean/undefined/object, got: ${typeof o}`)
                    }
                }
                exports.BROWSER_LOG_KEY = BROWSER_LOG_KEY, exports.BROWSER_LOG_VALUE = BROWSER_LOG_VALUE, exports.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX, exports.EncodedNameTransformMap = EncodedNameTransformMap, exports.FederationModuleManifest = FederationModuleManifest, exports.Logger = Logger, exports.MANIFEST_EXT = MANIFEST_EXT, exports.MFModuleType = MFModuleType, exports.MFPrefetchCommon = MFPrefetchCommon, exports.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER, exports.ManifestFileName = ManifestFileName, exports.NameTransformMap = NameTransformMap, exports.NameTransformSymbol = NameTransformSymbol, exports.SEPARATOR = SEPARATOR, exports.StatsFileName = StatsFileName, exports.TEMP_DIR = TEMP_DIR, exports.assert = assert, exports.composeKeyWithSeparator = composeKeyWithSeparator, exports.containerPlugin = ContainerPlugin, exports.containerReferencePlugin = ContainerReferencePlugin, exports.createLink = createLink, exports.createScript = createScript, exports.createScriptNode = createScriptNode, exports.decodeName = decodeName, exports.encodeName = encodeName, exports.error = error, exports.generateExposeFilename = generateExposeFilename, exports.generateShareFilename = generateShareFilename, exports.generateSnapshotFromManifest = generateSnapshotFromManifest, exports.getProcessEnv = getProcessEnv, exports.getResourceUrl = getResourceUrl, exports.inferAutoPublicPath = inferAutoPublicPath, exports.isBrowserEnv = isBrowserEnv, exports.isDebugMode = isDebugMode, exports.isManifestProvider = isManifestProvider, exports.isStaticResourcesEqual = isStaticResourcesEqual, exports.loadScript = loadScript, exports.loadScriptNode = loadScriptNode, exports.logger = logger, exports.moduleFederationPlugin = ModuleFederationPlugin, exports.normalizeOptions = normalizeOptions, exports.parseEntry = parseEntry, exports.safeToString = safeToString, exports.safeWrapper = safeWrapper, exports.sharePlugin = SharePlugin, exports.simpleJoinRemoteEntry = simpleJoinRemoteEntry, exports.warn = warn
            },
            4919: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                "use strict";
                __webpack_require__.d(__webpack_exports__, {
                    OY: () => MFPrefetchCommon,
                    QN: () => encodeName,
                    Yd: () => Logger,
                    vM: () => getResourceUrl,
                    ve: () => loadScript
                });
                var _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44038);
                const FederationModuleManifest = "federation-manifest.json",
                    MANIFEST_EXT = ".json",
                    BROWSER_LOG_KEY = "FEDERATION_DEBUG",
                    BROWSER_LOG_VALUE = "1",
                    NameTransformSymbol = {
                        AT: "@",
                        HYPHEN: "-",
                        SLASH: "/"
                    },
                    NameTransformMap = {
                        [NameTransformSymbol.AT]: "scope_",
                        [NameTransformSymbol.HYPHEN]: "_",
                        [NameTransformSymbol.SLASH]: "__"
                    },
                    EncodedNameTransformMap = {
                        [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
                        [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
                        [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
                    },
                    SEPARATOR = ":",
                    ManifestFileName = "mf-manifest.json",
                    StatsFileName = "mf-stats.json",
                    MFModuleType = {
                        NPM: "npm",
                        APP: "app"
                    },
                    MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__",
                    ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX",
                    TEMP_DIR = ".federation",
                    MFPrefetchCommon = {
                        identifier: "MFDataPrefetch",
                        globalKey: "__PREFETCH__",
                        library: "mf-data-prefetch",
                        exportsKey: "__PREFETCH_EXPORTS__",
                        fileName: "bootstrap.js"
                    };
                var ContainerPlugin = Object.freeze({
                        __proto__: null
                    }),
                    ContainerReferencePlugin = Object.freeze({
                        __proto__: null
                    }),
                    ModuleFederationPlugin = Object.freeze({
                        __proto__: null
                    }),
                    SharePlugin = Object.freeze({
                        __proto__: null
                    });

                function isBrowserEnv() {
                    return "undefined" !== typeof window
                }

                function isDebugMode() {
                    return "undefined" !== typeof process && process.env && process.env.FEDERATION_DEBUG ? Boolean(process.env.FEDERATION_DEBUG) : "undefined" !== typeof FEDERATION_DEBUG && Boolean(FEDERATION_DEBUG)
                }
                const getProcessEnv = function() {
                        return "undefined" !== typeof process && process.env ? process.env : {}
                    },
                    DEBUG_LOG = "[ FEDERATION DEBUG ]";

                function safeToString$1(e) {
                    try {
                        return JSON.stringify(e, null, 2)
                    } catch (t) {
                        return ""
                    }
                }

                function safeGetLocalStorageItem() {
                    try {
                        if ("undefined" !== typeof window && window.localStorage) return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE
                    } catch (error) {
                        return "undefined" !== typeof document
                    }
                    return !1
                }
                let Logger = class {
                    info(e, t) {
                        if (this.enable) {
                            const r = safeToString$1(t) || "";
                            isBrowserEnv() ? console.info(`%c ${this.identifier}: ${e} ${r}`, "color:#3300CC") : console.info("\x1b[34m%s", `${this.identifier}: ${e} ${r?`\n${r}`:""}`)
                        }
                    }
                    logOriginalInfo() {
                        this.enable && (isBrowserEnv(), console.info(`%c ${this.identifier}: OriginalInfo`, "color:#3300CC"), console.log(...arguments))
                    }
                    constructor(e) {
                        this.enable = !1, this.identifier = e || DEBUG_LOG, (isBrowserEnv() && safeGetLocalStorageItem() || isDebugMode()) && (this.enable = !0)
                    }
                };
                const LOG_CATEGORY = "[ Federation Runtime ]",
                    parseEntry = function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SEPARATOR;
                        const o = e.split(r),
                            n = "development" === getProcessEnv().NODE_ENV && t,
                            a = e => e.startsWith("http") || e.includes(MANIFEST_EXT);
                        if (o.length >= 2) {
                            let [t, ...s] = o;
                            e.startsWith(r) && (s = [n || o.slice(-1)[0]], t = o.slice(0, -1).join(r));
                            let i = n || s.join(r);
                            return a(i) ? {
                                name: t,
                                entry: i
                            } : {
                                name: t,
                                version: i || "*"
                            }
                        }
                        if (1 === o.length) {
                            const [e] = o;
                            return n && a(n) ? {
                                name: e,
                                entry: n
                            } : {
                                name: e,
                                version: n || "*"
                            }
                        }
                        throw `Invalid entry value: ${e}`
                    },
                    logger = new Logger,
                    composeKeyWithSeparator = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return t.length ? t.reduce(((e, t) => t ? e ? `${e}${SEPARATOR}${t}` : t : e), "") : ""
                    },
                    encodeName = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        try {
                            const o = r ? ".js" : "";
                            return `${t}${e.replace(new RegExp(`${NameTransformSymbol.AT}`,"g"),NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`,"g"),NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`,"g"),NameTransformMap[NameTransformSymbol.SLASH])}${o}`
                        } catch (o) {
                            throw o
                        }
                    },
                    decodeName = function(e, t, r) {
                        try {
                            let o = e;
                            if (t) {
                                if (!o.startsWith(t)) return o;
                                o = o.replace(new RegExp(t, "g"), "")
                            }
                            return o = o.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]), r && (o = o.replace(".js", "")), o
                        } catch (o) {
                            throw o
                        }
                    },
                    generateExposeFilename = (e, t) => {
                        if (!e) return "";
                        let r = e;
                        return "." === r && (r = "default_export"), r.startsWith("./") && (r = r.replace("./", "")), encodeName(r, "__federation_expose_", t)
                    },
                    generateShareFilename = (e, t) => e ? encodeName(e, "__federation_shared_", t) : "",
                    getResourceUrl = (e, t) => {
                        if ("getPublicPath" in e) {
                            let r;
                            return r = e.getPublicPath.startsWith("function") ? new Function("return " + e.getPublicPath)()() : new Function(e.getPublicPath)(), `${r}${t}`
                        }
                        return "publicPath" in e ? `${e.publicPath}${t}` : (console.warn("Cannot get resource URL. If in debug mode, please ignore.", e, t), "")
                    },
                    assert = (e, t) => {
                        e || error(t)
                    },
                    error = e => {
                        throw new Error(`${LOG_CATEGORY}: ${e}`)
                    },
                    warn = e => {
                        console.warn(`${LOG_CATEGORY}: ${e}`)
                    };

                function safeToString(e) {
                    try {
                        return JSON.stringify(e, null, 2)
                    } catch (t) {
                        return ""
                    }
                }
                const simpleJoinRemoteEntry = (e, t) => {
                    if (!e) return t;
                    const r = (e => {
                        if ("." === e) return "";
                        if (e.startsWith("./")) return e.replace("./", "");
                        if (e.startsWith("/")) {
                            const t = e.slice(1);
                            return t.endsWith("/") ? t.slice(0, -1) : t
                        }
                        return e
                    })(e);
                    return r ? r.endsWith("/") ? `${r}${t}` : `${r}/${t}` : t
                };

                function inferAutoPublicPath(e) {
                    return e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/")
                }

                function generateSnapshotFromManifest(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var r, o;
                    const {
                        remotes: n = {},
                        overrides: a = {},
                        version: s
                    } = t;
                    let i;
                    const c = () => "publicPath" in e.metaData ? "auto" === e.metaData.publicPath && s ? inferAutoPublicPath(s) : e.metaData.publicPath : e.metaData.getPublicPath,
                        l = Object.keys(a);
                    let u = {};
                    var d;
                    Object.keys(n).length || (u = (null == (d = e.remotes) ? void 0 : d.reduce(((e, t) => {
                        let r;
                        const o = t.federationContainerName;
                        return r = l.includes(o) ? a[o] : "version" in t ? t.version : t.entry, e[o] = {
                            matchedVersion: r
                        }, e
                    }), {})) || {});
                    Object.keys(n).forEach((e => u[e] = {
                        matchedVersion: l.includes(e) ? a[e] : n[e]
                    }));
                    const {
                        remoteEntry: {
                            path: f,
                            name: p,
                            type: _
                        },
                        types: m,
                        buildInfo: {
                            buildVersion: h
                        },
                        globalName: b,
                        ssrRemoteEntry: g
                    } = e.metaData, {
                        exposes: y
                    } = e;
                    let E = {
                        version: s || "",
                        buildVersion: h,
                        globalName: b,
                        remoteEntry: simpleJoinRemoteEntry(f, p),
                        remoteEntryType: _,
                        remoteTypes: simpleJoinRemoteEntry(m.path, m.name),
                        remoteTypesZip: m.zip || "",
                        remoteTypesAPI: m.api || "",
                        remotesInfo: u,
                        shared: null == e ? void 0 : e.shared.map((e => ({
                            assets: e.assets,
                            sharedName: e.name,
                            version: e.version
                        }))),
                        modules: null == y ? void 0 : y.map((e => ({
                            moduleName: e.name,
                            modulePath: e.path,
                            assets: e.assets
                        })))
                    };
                    if (null == (r = e.metaData) ? void 0 : r.prefetchInterface) {
                        const t = e.metaData.prefetchInterface;
                        E = _extends({}, E, {
                            prefetchInterface: t
                        })
                    }
                    if (null == (o = e.metaData) ? void 0 : o.prefetchEntry) {
                        const {
                            path: t,
                            name: r,
                            type: o
                        } = e.metaData.prefetchEntry;
                        E = _extends({}, E, {
                            prefetchEntry: simpleJoinRemoteEntry(t, r),
                            prefetchEntryType: o
                        })
                    }
                    if (i = "publicPath" in e.metaData ? _extends({}, E, {
                            publicPath: c()
                        }) : _extends({}, E, {
                            getPublicPath: c()
                        }), g) {
                        const e = simpleJoinRemoteEntry(g.path, g.name);
                        i.ssrRemoteEntry = e, i.ssrRemoteEntryType = g.type || "commonjs-module"
                    }
                    return i
                }

                function isManifestProvider(e) {
                    return !(!("remoteEntry" in e) || !e.remoteEntry.includes(MANIFEST_EXT))
                }
                async function safeWrapper(e, t) {
                    try {
                        return await e()
                    } catch (r) {
                        return void(!t && warn(r))
                    }
                }

                function isStaticResourcesEqual(e, t) {
                    const r = /^(https?:)?\/\//i;
                    return e.replace(r, "").replace(/\/$/, "") === t.replace(r, "").replace(/\/$/, "")
                }

                function createScript(e) {
                    let t, r = null,
                        o = !0,
                        n = 2e4;
                    const a = document.getElementsByTagName("script");
                    for (let i = 0; i < a.length; i++) {
                        const t = a[i],
                            n = t.getAttribute("src");
                        if (n && isStaticResourcesEqual(n, e.url)) {
                            r = t, o = !1;
                            break
                        }
                    }
                    if (!r) {
                        const t = e.attrs;
                        let o;
                        r = document.createElement("script"), r.type = "module" === (null == t ? void 0 : t.type) ? "module" : "text/javascript", r.src = e.url, e.createScriptHook && (o = e.createScriptHook(e.url, e.attrs), o instanceof HTMLScriptElement ? r = o : "object" === typeof o && ("script" in o && o.script && (r = o.script), "timeout" in o && o.timeout && (n = o.timeout))), t && !o && Object.keys(t).forEach((e => {
                            r && ("async" === e || "defer" === e ? r[e] = t[e] : r.getAttribute(e) || r.setAttribute(e, t[e]))
                        }))
                    }
                    const s = async (o, n) => {
                        var a;
                        if (clearTimeout(t), r && (r.onerror = null, r.onload = null, safeWrapper((() => {
                                const {
                                    needDeleteScript: t = !0
                                } = e;
                                t && (null == r ? void 0 : r.parentNode) && r.parentNode.removeChild(r)
                            })), o && "function" === typeof o)) {
                            var s;
                            const t = o(n);
                            if (t instanceof Promise) {
                                var i;
                                const r = await t;
                                return null == e || null == (i = e.cb) || i.call(e), r
                            }
                            return null == e || null == (s = e.cb) || s.call(e), t
                        }
                        null == e || null == (a = e.cb) || a.call(e)
                    };
                    return r.onerror = s.bind(null, r.onerror), r.onload = s.bind(null, r.onload), t = setTimeout((() => {
                        s(null, new Error(`Remote script "${e.url}" time-outed.`))
                    }), n), {
                        script: r,
                        needAttach: o
                    }
                }

                function createLink(e) {
                    let t = null,
                        r = !0;
                    const o = document.getElementsByTagName("link");
                    for (let a = 0; a < o.length; a++) {
                        const n = o[a],
                            s = n.getAttribute("href"),
                            i = n.getAttribute("ref");
                        if (s && isStaticResourcesEqual(s, e.url) && i === e.attrs.ref) {
                            t = n, r = !1;
                            break
                        }
                    }
                    if (!t) {
                        let r;
                        t = document.createElement("link"), t.setAttribute("href", e.url);
                        const o = e.attrs;
                        e.createLinkHook && (r = e.createLinkHook(e.url, o), r instanceof HTMLLinkElement && (t = r)), o && !r && Object.keys(o).forEach((e => {
                            t && !t.getAttribute(e) && t.setAttribute(e, o[e])
                        }))
                    }
                    const n = (r, o) => {
                        if (t && (t.onerror = null, t.onload = null, safeWrapper((() => {
                                const {
                                    needDeleteLink: r = !0
                                } = e;
                                r && (null == t ? void 0 : t.parentNode) && t.parentNode.removeChild(t)
                            })), r)) {
                            const t = r(o);
                            return e.cb(), t
                        }
                        e.cb()
                    };
                    return t.onerror = n.bind(null, t.onerror), t.onload = n.bind(null, t.onload), {
                        link: t,
                        needAttach: r
                    }
                }

                function loadScript(e, t) {
                    const {
                        attrs: r = {},
                        createScriptHook: o
                    } = t;
                    return new Promise(((t, n) => {
                        const {
                            script: a,
                            needAttach: s
                        } = createScript({
                            url: e,
                            cb: t,
                            attrs: (0, _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
                                fetchpriority: "high"
                            }, r),
                            createScriptHook: o,
                            needDeleteScript: !0
                        });
                        s && document.head.appendChild(a)
                    }))
                }

                function importNodeModule(e) {
                    if (!e) throw new Error("import specifier is required");
                    return new Function("name", "return import(name)")(e).then((e => e)).catch((t => {
                        throw console.error(`Error importing module ${e}:`, t), t
                    }))
                }
                const loadNodeFetch = async () => {
                        const e = await importNodeModule("node-fetch");
                        return e.default || e
                    },
                    lazyLoaderHookFetch = async (e, t) => {
                        const r = __webpack_require__.federation.instance.loaderHook,
                            o = await ((e, t) => r.lifecycle.fetch.emit(e, t))(e, t || {});
                        if (!o || !(o instanceof Response)) {
                            return ("undefined" === typeof fetch ? await loadNodeFetch() : fetch)(e, t || {})
                        }
                        return o
                    };

                function createScriptNode(url, cb, attrs, createScriptHook) {
                    if (createScriptHook) {
                        const e = createScriptHook(url);
                        e && "object" === typeof e && "url" in e && (url = e.url)
                    }
                    let urlObj;
                    try {
                        urlObj = new URL(url)
                    } catch (e) {
                        return console.error("Error constructing URL:", e), void cb(new Error(`Invalid URL: ${e}`))
                    }
                    const getFetch = async () => {
                            try {
                                if (__webpack_require__.federation.instance.loaderHook.lifecycle.fetch) return lazyLoaderHookFetch
                            } catch (e) {
                                console.warn("federation.instance.loaderHook.lifecycle.fetch failed:", e)
                            }
                            return "undefined" === typeof fetch ? loadNodeFetch() : fetch
                        },
                        handleScriptFetch = async (f, urlObj) => {
                            try {
                                var _vm_constants;
                                const res = await f(urlObj.href),
                                    data = await res.text(),
                                    [path, vm] = await Promise.all([importNodeModule("path"), importNodeModule("vm")]),
                                    scriptContext = {
                                        exports: {},
                                        module: {
                                            exports: {}
                                        }
                                    },
                                    urlDirname = urlObj.pathname.split("/").slice(0, -1).join("/"),
                                    filename = path.basename(urlObj.pathname);
                                var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;
                                const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}\n})`, {
                                    filename: filename,
                                    importModuleDynamically: null != (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = null == (_vm_constants = vm.constants) ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule
                                });
                                script.runInThisContext()(scriptContext.exports, scriptContext.module, eval("require"), urlDirname, filename);
                                const exportedInterface = scriptContext.module.exports || scriptContext.exports;
                                if (attrs && exportedInterface && attrs.globalName) {
                                    const e = exportedInterface[attrs.globalName] || exportedInterface;
                                    return void cb(void 0, e)
                                }
                                cb(void 0, exportedInterface)
                            } catch (e) {
                                cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`))
                            }
                        };
                    getFetch().then((async e => {
                        if ("esm" === (null == attrs ? void 0 : attrs.type) || "module" === (null == attrs ? void 0 : attrs.type)) return loadModule(urlObj.href, {
                            fetch: e,
                            vm: await importNodeModule("vm")
                        }).then((async e => {
                            await e.evaluate(), cb(void 0, e.namespace)
                        })).catch((e => {
                            cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`))
                        }));
                        handleScriptFetch(e, urlObj)
                    })).catch((e => {
                        cb(e)
                    }))
                }

                function loadScriptNode(e, t) {
                    return new Promise(((r, o) => {
                        createScriptNode(e, ((e, n) => {
                            if (e) o(e);
                            else {
                                var a, s;
                                const e = (null == t || null == (a = t.attrs) ? void 0 : a.globalName) || `__FEDERATION_${null==t||null==(s=t.attrs)?void 0:s.name}:custom__`,
                                    o = globalThis[e] = n;
                                r(o)
                            }
                        }), t.attrs, t.createScriptHook)
                    }))
                }
                async function loadModule(e, t) {
                    const {
                        fetch: r,
                        vm: o
                    } = t, n = await r(e), a = await n.text(), s = new o.SourceTextModule(a, {
                        importModuleDynamically: async (r, o) => loadModule(new URL(r, e).href, t)
                    });
                    return await s.link((async r => {
                        const o = new URL(r, e).href;
                        return await loadModule(o, t)
                    })), s
                }

                function normalizeOptions(e, t, r) {
                    return function(o) {
                        if (!1 === o) return !1;
                        if ("undefined" === typeof o) return !!e && t;
                        if (!0 === o) return t;
                        if (o && "object" === typeof o) return _extends({}, t, o);
                        throw new Error(`Unexpected type for \`${r}\`, expect boolean/undefined/object, got: ${typeof o}`)
                    }
                }
            },
            8173: (e, t) => {
                "use strict";

                function r() {
                    return r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                        }
                        return e
                    }, r.apply(this, arguments)
                }
                t._extends = r
            },
            44038: (e, t, r) => {
                "use strict";

                function o() {
                    return o = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                        }
                        return e
                    }, o.apply(this, arguments)
                }
                r.d(t, {
                    _: () => o
                })
            },
            53559: (e, t, r) => {
                "use strict";
                var o = r(56040);
                Object.defineProperty(t, "ENCODE_NAME_PREFIX", {
                    enumerable: !0,
                    get: function() {
                        return o.ENCODE_NAME_PREFIX
                    }
                }), t.FEDERATION_SUPPORTED_TYPES = ["script"]
            },
            75434: (e, t, r) => {
                "use strict";
                var o = r(71636),
                    n = r(53559),
                    a = r(56040),
                    s = r(577);

                function i(e) {
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(r) {
                        if ("default" !== r) {
                            var o = Object.getOwnPropertyDescriptor(e, r);
                            Object.defineProperty(t, r, o.get ? o : {
                                enumerable: !0,
                                get: function() {
                                    return e[r]
                                }
                            })
                        }
                    })), t.default = e, Object.freeze(t)
                }

                function c(e) {
                    e.S && !e.federation.hasAttachShareScopeMap && e.federation.instance && e.federation.instance.shareScopeMap && (e.S = e.federation.instance.shareScopeMap, e.federation.hasAttachShareScopeMap = !0)
                }
                const l = {
                    runtime: i(o),
                    instance: void 0,
                    initOptions: void 0,
                    bundlerRuntime: {
                        remotes: function(e) {
                            const {
                                chunkId: t,
                                promises: r,
                                chunkMapping: o,
                                idToExternalAndNameMapping: s,
                                webpackRequire: i,
                                idToRemoteMap: l
                            } = e;
                            c(i), i.o(o, t) && o[t].forEach((e => {
                                let t = i.R;
                                t || (t = []);
                                const o = s[e],
                                    c = l[e];
                                if (t.indexOf(o) >= 0) return;
                                if (t.push(o), o.p) return r.push(o.p);
                                const u = t => {
                                        t || (t = new Error("Container missing")), "string" === typeof t.message && (t.message += `\nwhile loading "${o[1]}" from ${o[2]}`), i.m[e] = () => {
                                            throw t
                                        }, o.p = 0
                                    },
                                    d = (e, t, n, a, s, i) => {
                                        try {
                                            const c = e(t, n);
                                            if (!c || !c.then) return s(c, a, i); {
                                                const e = c.then((e => s(e, a)), u);
                                                if (!i) return e;
                                                r.push(o.p = e)
                                            }
                                        } catch (c) {
                                            u(c)
                                        }
                                    },
                                    f = (e, t, r) => e ? d(i.I, o[0], 0, e, p, r) : u();
                                var p = (e, r, n) => d(r.get, o[1], t, 0, _, n),
                                    _ = t => {
                                        o.p = 1, i.m[e] = e => {
                                            e.exports = t()
                                        }
                                    };
                                const m = () => {
                                    try {
                                        const e = a.decodeName(c[0].name, a.ENCODE_NAME_PREFIX) + o[1].slice(1);
                                        return i.federation.instance.loadRemote(e, {
                                            loadFactory: !1,
                                            from: "build"
                                        })
                                    } catch (e) {
                                        u(e)
                                    }
                                };
                                1 === c.length && n.FEDERATION_SUPPORTED_TYPES.includes(c[0].externalType) && c[0].name ? d(m, o[2], 0, 0, _, 1) : d(i, o[2], 0, 0, f, 1)
                            }))
                        },
                        consumes: function(e) {
                            const {
                                chunkId: t,
                                promises: r,
                                chunkMapping: o,
                                installedModules: n,
                                moduleToHandlerMapping: a,
                                webpackRequire: s
                            } = e;
                            c(s), s.o(o, t) && o[t].forEach((e => {
                                if (s.o(n, e)) return r.push(n[e]);
                                const t = t => {
                                        n[e] = 0, s.m[e] = r => {
                                            delete s.c[e], r.exports = t()
                                        }
                                    },
                                    o = t => {
                                        delete n[e], s.m[e] = r => {
                                            throw delete s.c[e], t
                                        }
                                    };
                                try {
                                    const i = s.federation.instance;
                                    if (!i) throw new Error("Federation instance not found!");
                                    const {
                                        shareKey: c,
                                        getter: l,
                                        shareInfo: u
                                    } = a[e], d = i.loadShare(c, {
                                        customShareInfo: u
                                    }).then((e => !1 === e ? l() : e));
                                    d.then ? r.push(n[e] = d.then(t).catch(o)) : t(d)
                                } catch (i) {
                                    o(i)
                                }
                            }))
                        },
                        I: function(e) {
                            let {
                                shareScopeName: t,
                                webpackRequire: r,
                                initPromises: o,
                                initTokens: a,
                                initScope: s
                            } = e;
                            s || (s = []);
                            const i = r.federation.instance;
                            var l = a[t];
                            if (l || (l = a[t] = {
                                    from: i.name
                                }), s.indexOf(l) >= 0) return;
                            s.push(l);
                            const u = o[t];
                            if (u) return u;
                            var d = e => {
                                var o = e => {
                                    return t = "Initialization of sharing external failed: " + e, "undefined" !== typeof console && console.warn && console.warn(t);
                                    var t
                                };
                                try {
                                    var n = r(e);
                                    if (!n) return;
                                    var a = e => e && e.init && e.init(r.S[t], s);
                                    if (n.then) return f.push(n.then(a, o));
                                    var i = a(n);
                                    if (i && "boolean" !== typeof i && i.then) return f.push(i.catch(o))
                                } catch (c) {
                                    o(c)
                                }
                            };
                            const f = i.initializeSharing(t, {
                                strategy: i.options.shareStrategy,
                                initScope: s,
                                from: "build"
                            });
                            c(r);
                            const p = r.federation.bundlerRuntimeOptions.remotes;
                            return p && Object.keys(p.idToRemoteMap).forEach((e => {
                                const t = p.idToRemoteMap[e],
                                    r = p.idToExternalAndNameMapping[e][2];
                                if (t.length > 1) d(r);
                                else if (1 === t.length) {
                                    const e = t[0];
                                    n.FEDERATION_SUPPORTED_TYPES.includes(e.externalType) || d(r)
                                }
                            })), f.length ? o[t] = Promise.all(f).then((() => o[t] = !0)) : o[t] = !0
                        },
                        S: {},
                        installInitialConsumes: function(e) {
                            const {
                                moduleToHandlerMapping: t,
                                webpackRequire: r,
                                installedModules: o,
                                initialConsumes: n
                            } = e;
                            n.forEach((e => {
                                r.m[e] = n => {
                                    o[e] = 0, delete r.c[e];
                                    const a = function(e) {
                                        const {
                                            moduleId: t,
                                            moduleToHandlerMapping: r,
                                            webpackRequire: o
                                        } = e, n = o.federation.instance;
                                        if (!n) throw new Error("Federation instance not found!");
                                        const {
                                            shareKey: a,
                                            shareInfo: s
                                        } = r[t];
                                        try {
                                            return n.loadShareSync(a, {
                                                customShareInfo: s
                                            })
                                        } catch (i) {
                                            throw console.error('loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.'), console.error("The original error message is as follows: "), i
                                        }
                                    }({
                                        moduleId: e,
                                        moduleToHandlerMapping: t,
                                        webpackRequire: r
                                    });
                                    if ("function" !== typeof a) throw new Error(`Shared module is not available for eager consumption: ${e}`);
                                    n.exports = a()
                                }
                            }))
                        },
                        initContainerEntry: function(e) {
                            const {
                                webpackRequire: t,
                                shareScope: r,
                                initScope: o,
                                shareScopeKey: n,
                                remoteEntryInitOptions: a
                            } = e;
                            if (!t.S) return;
                            if (!t.federation || !t.federation.instance || !t.federation.initOptions) return;
                            const i = t.federation.instance;
                            var c = n || "default";
                            return i.initOptions(s._extends({
                                name: t.federation.initOptions.name,
                                remotes: []
                            }, a)), i.initShareScopeMap(c, r, {
                                hostShareScopeMap: (null == a ? void 0 : a.shareScopeMap) || {}
                            }), t.federation.attachShareScopeMap && t.federation.attachShareScopeMap(t), "function" === typeof t.federation.prefetch && t.federation.prefetch(), t.I(c, o)
                        }
                    },
                    attachShareScopeMap: c,
                    bundlerRuntimeOptions: {}
                };
                e.exports = l
            },
            577: (e, t) => {
                "use strict";

                function r() {
                    return r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                        }
                        return e
                    }, r.apply(this, arguments)
                }
                t._extends = r
            },
            52277: () => {},
            74304: (e, t, r) => {
                "use strict";
                var o = {
                        "./Icon": () => Promise.all([r.e(7270), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(5098), r.e(5161)]).then((() => () => r(85161))),
                        "./Logo": () => Promise.all([r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(5098), r.e(2557)]).then((() => () => r(2557))),
                        "./LinkWrap": () => Promise.all([r.e(7270), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(5098), r.e(3110), r.e(6574)]).then((() => () => r(26574))),
                        "./app/actions": () => Promise.all([r.e(7270), r.e(7499), r.e(2904), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(5098), r.e(5151), r.e(7109)]).then((() => () => r(27109))),
                        "./PageAnalytics": () => Promise.all([r.e(7499), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(5098), r.e(2820), r.e(2417)]).then((() => () => r(69422))),
                        "./utils/membership": () => Promise.all([r.e(7499), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(5098), r.e(3574), r.e(4436)]).then((() => () => r(33574))),
                        "./utils/dom/library": () => Promise.all([r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(5098), r.e(3019)]).then((() => () => r(86045))),
                        "./utils/cypress": () => Promise.all([r.e(2904), r.e(9351), r.e(3523)]).then((() => () => r(93523))),
                        "./logger/library": () => Promise.all([r.e(7499), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(5098)]).then((() => () => r(41718))),
                        "./analytics/constants": () => r.e(503).then((() => () => r(50503))),
                        "./cookies/library": () => Promise.all([r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(8075)]).then((() => () => r(68075))),
                        "./cookies/constants": () => r.e(9351).then((() => () => r(78087))),
                        "./promises/library": () => Promise.all([r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(3386)]).then((() => () => r(43386))),
                        "./Route": () => Promise.all([r.e(7499), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(5098), r.e(3110), r.e(3251)]).then((() => () => r(33251))),
                        "./ErrorBoundary": () => Promise.all([r.e(7499), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(5098), r.e(4192)]).then((() => () => r(44192))),
                        "./ErrorPage": () => Promise.all([r.e(7270), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(5098), r.e(1455)]).then((() => () => r(14191))),
                        "./DetailsNoAds": () => Promise.all([r.e(7270), r.e(7499), r.e(2904), r.e(2816), r.e(5972), r.e(3172), r.e(6413), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(532), r.e(9351), r.e(5098), r.e(4329), r.e(2630), r.e(5151), r.e(7887), r.e(3574), r.e(3110), r.e(3019), r.e(2820), r.e(5161), r.e(7109), r.e(2417), r.e(5770), r.e(595)]).then((() => () => r(595))),
                        "./hooks/useFeatureFlag": () => Promise.all([r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(2820), r.e(9451)]).then((() => () => r(99451))),
                        "./userAgent/library": () => r.e(5526).then((() => () => r(15526))),
                        "./viafoura/library": () => Promise.all([r.e(7499), r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(5098), r.e(5151), r.e(3574), r.e(91)]).then((() => () => r(30091))),
                        "./utils/newsletters": () => Promise.all([r.e(6284), r.e(6563), r.e(8382), r.e(8922), r.e(9351), r.e(2670)]).then((() => () => r(4505)))
                    },
                    n = (e, t) => (r.R = t, t = r.o(o, e) ? o[e]() : Promise.resolve().then((() => {
                        throw new Error('Module "' + e + '" does not exist in container.')
                    })), r.R = void 0, t),
                    a = (e, t, o) => r.federation.bundlerRuntime.initContainerEntry({
                        webpackRequire: r,
                        shareScope: e,
                        initScope: t,
                        remoteEntryInitOptions: o,
                        shareScopeKey: "default"
                    });
                r.federation.isMFRemote = !0, r(56185), r.federation.isMFRemote = !1, r.d(t, {
                    get: () => n,
                    init: () => a
                })
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = __webpack_module_cache__[e] = {
                id: e,
                loaded: !1,
                exports: {}
            },
            o = {
                id: e,
                module: r,
                factory: __webpack_modules__[e],
                require: __webpack_require__
            };
        return __webpack_require__.i.forEach((function(e) {
            e(o)
        })), r = o.module, o.factory.call(r.exports, r, r.exports, o.require), r.loaded = !0, r.exports
    }
    __webpack_require__.m = __webpack_modules__, __webpack_require__.c = __webpack_module_cache__, __webpack_require__.i = [], __webpack_require__.federation || (__webpack_require__.federation = {
        initOptions: {
            name: "ocelot",
            remotes: [],
            shareStrategy: "version-first"
        },
        chunkMatcher: function(e) {
            return !/^(2820|3019|3110|5098|532)$/.test(e)
        },
        rootOutputDir: "../",
        initialConsumes: void 0,
        bundlerRuntimeOptions: {}
    }), __webpack_require__.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(t, {
            a: t
        }), t
    }, (() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        __webpack_require__.t = function(r, o) {
            if (1 & o && (r = this(r)), 8 & o) return r;
            if ("object" === typeof r && r) {
                if (4 & o && r.__esModule) return r;
                if (16 & o && "function" === typeof r.then) return r
            }
            var n = Object.create(null);
            __webpack_require__.r(n);
            var a = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var s = 2 & o && r;
                "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((e => a[e] = () => r[e]));
            return a.default = () => r, __webpack_require__.d(n, a), n
        }
    })(), __webpack_require__.d = (e, t) => {
        for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, __webpack_require__.f = {}, __webpack_require__.e = e => Promise.all(Object.keys(__webpack_require__.f).reduce(((t, r) => (__webpack_require__.f[r](e, t), t)), [])), __webpack_require__.u = e => "scripts/oc-" + ({
        301: "FlexibleLandingPage",
        328: "GlobalHeader",
        532: "styles",
        1250: "app-components-Comments-component",
        1768: "Preview",
        1799: "AccountWrapper",
        1857: "GlobalFooter-component",
        1889: "vendor-phoenix",
        2051: "Show",
        2193: "LandingNewsPOC",
        2558: "AuthorProfilePage",
        2759: "LiveStory",
        2816: "vendor-membership-vendors",
        2877: "LandingWatch",
        2904: "vendor-lodash",
        2920: "LandingNewsLocal",
        3172: "vendor-date-fns",
        3997: "LandingPodcasts",
        4065: "Topic",
        4357: "LandingCategories",
        5145: "FinancePage",
        5362: "LandingShows",
        5395: "ErrorStatusPage",
        5972: "vendor-swiper",
        6001: "Landing",
        6023: "LandingSearch",
        6284: "vendor~cdd60c62",
        6413: "vendor-macaw",
        6563: "vendor~d2eb5610",
        6610: "VideoDetailPage",
        7270: "vendor-react",
        7499: "vendor-sentry",
        7673: "Logos",
        7887: "Detail",
        8233: "LandingNews",
        8382: "vendor~386b9151",
        8887: "LandingSports",
        8922: "vendor~836d192c",
        9351: "commons",
        9366: "Sitemap",
        9490: "FrequencyPage",
        9508: "DetailNoAds",
        9947: "AsyncContentArea"
    }[e] || e) + "." + {
        91: "8bdbf217cc1f7aa32837",
        301: "d0e1e6e6e7a282b7e34b",
        328: "579528303da185951ed0",
        503: "c7c740dd825fcbe4310d",
        532: "7f003c07b9717b67e5e6",
        595: "33dd9790f45bb2a6183f",
        1250: "418e1372472ded64eb78",
        1455: "87338b4a7eaa7fdc02cc",
        1768: "0abd3a0fcc031332eaca",
        1799: "6cd1529a805f8a3726f9",
        1857: "55396c98644d365d3fce",
        1889: "8fc09535007f368d3f64",
        2051: "20eb9e80666aaafcf272",
        2193: "211bc0222892ce2ebba3",
        2417: "545a1f17c2dcd5fb3785",
        2557: "113bd0e6039434bd7b38",
        2558: "9a7b6a6986aa711857ff",
        2630: "742af2ab999b1d60f1a8",
        2670: "e8e0de8eef1258f147f3",
        2759: "b549c82106983e07fedf",
        2816: "fabb24e2778d5d466d8f",
        2820: "0d785633dc998f98d5c3",
        2877: "a62c287cae4bbc3702cc",
        2904: "f35095dbce3f3e0d1028",
        2920: "4d03160b73720502d071",
        3019: "e62d140b26b82b38356a",
        3110: "cb3e24d484af885a3de0",
        3172: "6b344d6de1ce7c6c9325",
        3251: "37a995d22191a2dee9a8",
        3386: "238951f41be46fbbdb59",
        3523: "58adf40f17a8908d11a6",
        3574: "31ae09b98bd901edb28d",
        3616: "43f67f7a951a2a089b13",
        3997: "b737869140d58eecb1e0",
        4065: "7f67a7166fa4c82d323d",
        4192: "2b2403a35400fcb6a0e4",
        4329: "798f57a1c912c62ea1f7",
        4357: "59ed0d313a866fd866bb",
        4436: "57b709338d929814e716",
        5098: "ec49ff3f296443e7c3c4",
        5145: "5ee6e06de71792ccde45",
        5151: "86042be38755972c60b5",
        5161: "4551acdd8e853cbc628a",
        5362: "aeccd706b96c168f4f18",
        5395: "858cb735ebc44dcf2ca0",
        5472: "1c581efa112458761114",
        5526: "f3ff5ae22ec81ff72877",
        5770: "34f5f77b2e58f1aed8a5",
        5972: "0dba31409f0c2d7ea9e7",
        6001: "97d695d3298b08608524",
        6023: "7fae4c467044aefa03df",
        6163: "cbf217e83f68e23b0b60",
        6284: "52db090ea652ba055050",
        6413: "59a64ae05bce21c66300",
        6563: "20238bb553b7282f9cf1",
        6574: "4ca80a00ec291918f642",
        6610: "5d79dfd815254255c37f",
        7109: "ef98cc64fa476c6a8f93",
        7270: "276e0bb812f5c185b357",
        7499: "2ad87ddef00e7f95380b",
        7673: "3b7dd6f7ac8d1086bea6",
        7887: "482a8705ef3d1425b8b6",
        8037: "3f2733b51479ee3e4f50",
        8075: "fd764050dcd51b89a985",
        8233: "8ae5792e6b24f11d801e",
        8382: "68a03852119adcf26c9b",
        8452: "c0480bf1b5a61bb3a796",
        8825: "91650f95114e06c1871a",
        8887: "259678661c65cbe44065",
        8922: "33a7bb847b0f2c9a7326",
        9351: "8dae56fe76d35498c017",
        9366: "c8d2c0fceffd30bff0e8",
        9451: "84864b687e1674428036",
        9490: "821dcac72be683252bdd",
        9508: "70c227e8d691afc8340c",
        9947: "f9bc4e5fd491b7c4a91a"
    }[e] + ".js", __webpack_require__.miniCssF = e => "styles/" + {
        532: "styles",
        5972: "vendor-swiper"
    }[e] + "." + {
        532: "4a1bdb3a286e940ed103",
        5972: "3442d4ba13ef968e484b"
    }[e] + ".css", __webpack_require__.g = function() {
        if ("object" === typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window) return window
        }
    }(), __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {},
            t = "ocelot:";
        __webpack_require__.l = (r, o, n, a) => {
            if (e[r]) e[r].push(o);
            else {
                var s, i;
                if (void 0 !== n)
                    for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                        var u = c[l];
                        if (u.getAttribute("src") == r || u.getAttribute("data-webpack") == t + n) {
                            s = u;
                            break
                        }
                    }
                s || (i = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, __webpack_require__.nc && s.setAttribute("nonce", __webpack_require__.nc), s.setAttribute("data-webpack", t + n), s.src = r), e[r] = [o];
                var d = (t, o) => {
                        s.onerror = s.onload = null, clearTimeout(f);
                        var n = e[r];
                        if (delete e[r], s.parentNode && s.parentNode.removeChild(s), n && n.forEach((e => e(o))), t) return t(o)
                    },
                    f = setTimeout(d.bind(null, void 0, {
                        type: "timeout",
                        target: s
                    }), 12e4);
                s.onerror = d.bind(null, s.onerror), s.onload = d.bind(null, s.onload), i && document.head.appendChild(s)
            }
        }
    })(), __webpack_require__.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, __webpack_require__.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        __webpack_require__.S = {};
        var e = {},
            t = {};
        __webpack_require__.I = (r, o) => {
            o || (o = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(o.indexOf(n) >= 0)) {
                if (o.push(n), e[r]) return e[r];
                __webpack_require__.o(__webpack_require__.S, r) || (__webpack_require__.S[r] = {});
                var a = __webpack_require__.S[r],
                    s = "ocelot",
                    i = (e, t, r, o) => {
                        var n = a[e] = a[e] || {},
                            i = n[t];
                        (!i || !i.loaded && (!o != !i.eager ? o : s > i.from)) && (n[t] = {
                            get: r,
                            from: s,
                            eager: !!o
                        })
                    },
                    c = [];
                if ("default" === r) i("react-dom", "18.2.0", (() => Promise.all([__webpack_require__.e(7270), __webpack_require__.e(6284), __webpack_require__.e(6563), __webpack_require__.e(8382), __webpack_require__.e(8922), __webpack_require__.e(5098)]).then((() => () => __webpack_require__(10579))))), i("react-redux", "8.0.5", (() => Promise.all([__webpack_require__.e(7270), __webpack_require__.e(6284), __webpack_require__.e(6563), __webpack_require__.e(8382), __webpack_require__.e(8922), __webpack_require__.e(5098), __webpack_require__.e(3019)]).then((() => () => __webpack_require__(15643))))), i("react-router-dom", "5.3.4", (() => Promise.all([__webpack_require__.e(7270), __webpack_require__.e(6284), __webpack_require__.e(6563), __webpack_require__.e(8382), __webpack_require__.e(8922), __webpack_require__.e(5098)]).then((() => () => __webpack_require__(76071))))), i("react", "18.2.0", (() => __webpack_require__.e(7270).then((() => () => __webpack_require__(21914)))));
                return c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
        }
    })(), (() => {
        __webpack_require__.federation.initOptions.shared = {
            "react-dom": [{
                version: "18.2.0",
                get: () => Promise.all([__webpack_require__.e(7270), __webpack_require__.e(6284), __webpack_require__.e(6563), __webpack_require__.e(8382), __webpack_require__.e(8922), __webpack_require__.e(5098)]).then((() => () => __webpack_require__(10579))),
                scope: ["default"],
                shareConfig: {
                    eager: !1,
                    requiredVersion: "18.2.0",
                    strictVersion: !1,
                    singleton: !0
                }
            }],
            "react-redux": [{
                version: "8.0.5",
                get: () => Promise.all([__webpack_require__.e(7270), __webpack_require__.e(6284), __webpack_require__.e(6563), __webpack_require__.e(8382), __webpack_require__.e(8922), __webpack_require__.e(5098), __webpack_require__.e(3019)]).then((() => () => __webpack_require__(15643))),
                scope: ["default"],
                shareConfig: {
                    eager: !1,
                    requiredVersion: "8.0.5",
                    strictVersion: !1,
                    singleton: !0
                }
            }],
            "react-router-dom": [{
                version: "5.3.4",
                get: () => Promise.all([__webpack_require__.e(7270), __webpack_require__.e(6284), __webpack_require__.e(6563), __webpack_require__.e(8382), __webpack_require__.e(8922), __webpack_require__.e(5098)]).then((() => () => __webpack_require__(76071))),
                scope: ["default"],
                shareConfig: {
                    eager: !1,
                    requiredVersion: "5.3.4",
                    strictVersion: !1,
                    singleton: !0
                }
            }],
            react: [{
                version: "18.2.0",
                get: () => __webpack_require__.e(7270).then((() => () => __webpack_require__(21914))),
                scope: ["default"],
                shareConfig: {
                    eager: !1,
                    requiredVersion: "18.2.0",
                    strictVersion: !1,
                    singleton: !0
                }
            }]
        }, __webpack_require__.S = {};
        var e = {},
            t = {};
        __webpack_require__.I = (r, o) => __webpack_require__.federation.bundlerRuntime.I({
            shareScopeName: r,
            webpackRequire: __webpack_require__,
            initPromises: e,
            initTokens: t,
            initScope: o
        })
    })(), __webpack_require__.p = "/a/", (() => {
        var e = {},
            t = {
                35098: {
                    getter: () => __webpack_require__.e(7270).then((() => () => __webpack_require__(21914))),
                    shareInfo: {
                        shareConfig: {
                            fixedDependencies: !1,
                            requiredVersion: "18.2.0",
                            strictVersion: !1,
                            singleton: !0,
                            eager: !1
                        },
                        scope: ["default"]
                    },
                    shareKey: "react"
                },
                83110: {
                    getter: () => Promise.all([__webpack_require__.e(7270), __webpack_require__.e(6284), __webpack_require__.e(6563), __webpack_require__.e(8382), __webpack_require__.e(8922)]).then((() => () => __webpack_require__(76071))),
                    shareInfo: {
                        shareConfig: {
                            fixedDependencies: !1,
                            requiredVersion: "5.3.4",
                            strictVersion: !1,
                            singleton: !0,
                            eager: !1
                        },
                        scope: ["default"]
                    },
                    shareKey: "react-router-dom"
                },
                93019: {
                    getter: () => Promise.all([__webpack_require__.e(7270), __webpack_require__.e(6284), __webpack_require__.e(6563), __webpack_require__.e(8382), __webpack_require__.e(8922)]).then((() => () => __webpack_require__(10579))),
                    shareInfo: {
                        shareConfig: {
                            fixedDependencies: !1,
                            requiredVersion: "18.2.0",
                            strictVersion: !1,
                            singleton: !0,
                            eager: !1
                        },
                        scope: ["default"]
                    },
                    shareKey: "react-dom"
                },
                42820: {
                    getter: () => Promise.all([__webpack_require__.e(7270), __webpack_require__.e(6284), __webpack_require__.e(6563), __webpack_require__.e(8382), __webpack_require__.e(8922), __webpack_require__.e(5098), __webpack_require__.e(3019)]).then((() => () => __webpack_require__(15643))),
                    shareInfo: {
                        shareConfig: {
                            fixedDependencies: !1,
                            requiredVersion: "8.0.5",
                            strictVersion: !1,
                            singleton: !0,
                            eager: !1
                        },
                        scope: ["default"]
                    },
                    shareKey: "react-redux"
                }
            },
            r = {
                2820: [42820],
                3019: [93019],
                3110: [83110],
                5098: [35098]
            };
        __webpack_require__.f.consumes = (o, n) => {
            __webpack_require__.federation.bundlerRuntime.consumes({
                chunkMapping: r,
                installedModules: e,
                chunkId: o,
                moduleToHandlerMapping: t,
                promises: n,
                webpackRequire: __webpack_require__
            })
        }
    })(), (() => {
        if ("undefined" !== typeof document) {
            var e = e => new Promise(((t, r) => {
                    var o = __webpack_require__.miniCssF(e),
                        n = __webpack_require__.p + o;
                    if (((e, t) => {
                            for (var r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                                var n = (s = r[o]).getAttribute("data-href") || s.getAttribute("href");
                                if ("stylesheet" === s.rel && (n === e || n === t)) return s
                            }
                            var a = document.getElementsByTagName("style");
                            for (o = 0; o < a.length; o++) {
                                var s;
                                if ((n = (s = a[o]).getAttribute("data-href")) === e || n === t) return s
                            }
                        })(o, n)) return t();
                    ((e, t, r, o, n) => {
                        var a = document.createElement("link");
                        a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = r => {
                            if (a.onerror = a.onload = null, "load" === r.type) o();
                            else {
                                var s = r && ("load" === r.type ? "missing" : r.type),
                                    i = r && r.target && r.target.href || t,
                                    c = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                                c.code = "CSS_CHUNK_LOAD_FAILED", c.type = s, c.request = i, a.parentNode && a.parentNode.removeChild(a), n(c)
                            }
                        }, a.href = t, r ? r.parentNode.insertBefore(a, r.nextSibling) : document.head.appendChild(a)
                    })(e, n, null, t, r)
                })),
                t = {
                    9586: 0
                };
            __webpack_require__.f.miniCss = (r, o) => {
                t[r] ? o.push(t[r]) : 0 !== t[r] && {
                    532: 1,
                    5972: 1
                }[r] && o.push(t[r] = e(r).then((() => {
                    t[r] = 0
                }), (e => {
                    throw delete t[r], e
                })))
            }
        }
    })(), (() => {
        var e = {
            9586: 0
        };
        __webpack_require__.f.j = (t, r) => {
            var o = __webpack_require__.o(e, t) ? e[t] : void 0;
            if (0 !== o)
                if (o) r.push(o[2]);
                else if (/^(2820|3019|3110|5098|532)$/.test(t)) e[t] = 0;
            else {
                var n = new Promise(((r, n) => o = e[t] = [r, n]));
                r.push(o[2] = n);
                var a = __webpack_require__.p + __webpack_require__.u(t),
                    s = new Error;
                __webpack_require__.l(a, (r => {
                    if (__webpack_require__.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                        var n = r && ("load" === r.type ? "missing" : r.type),
                            a = r && r.target && r.target.src;
                        s.message = "Loading chunk " + t + " failed.\n(" + n + ": " + a + ")", s.name = "ChunkLoadError", s.type = n, s.request = a, o[1](s)
                    }
                }), "chunk-" + t, t)
            }
        };
        var t = (t, r) => {
                var o, n, [a, s, i] = r,
                    c = 0;
                if (a.some((t => 0 !== e[t]))) {
                    for (o in s) __webpack_require__.o(s, o) && (__webpack_require__.m[o] = s[o]);
                    if (i) i(__webpack_require__)
                }
                for (t && t(r); c < a.length; c++) n = a[c], __webpack_require__.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = globalThis.__LOADABLE_LOADED_CHUNKS__ = globalThis.__LOADABLE_LOADED_CHUNKS__ || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })(), __webpack_require__.nc = void 0, __webpack_require__(56185), __webpack_require__(53209), __webpack_require__(52277);
    var __webpack_exports__ = __webpack_require__(74304);
    ocelot = __webpack_exports__
})();
//# sourceMappingURL=../../sourcemaps/remoteEntry.53cea19bddc967be8e43.js.map