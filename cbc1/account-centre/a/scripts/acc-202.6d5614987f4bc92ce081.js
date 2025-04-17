! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7140a874-4ea1-48fa-91ac-5f4ffde8cbe0", e._sentryDebugIdIdentifier = "sentry-dbid-7140a874-4ea1-48fa-91ac-5f4ffde8cbe0")
    } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
    "_sentryBundlerPluginAppKey:account-centre": !0,
    scopeId: "scope-account-centre",
    release: "account-centre@8e4a933fee2d202e52de98decc3271b100000b85"
});
var _global = "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "account-centre@8e4a933fee2d202e52de98decc3271b100000b85"
}, (self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    ["acc-202"], {
        "acc-46205": function(e, n, o) {
            "use strict";
            o.d(n, {
                AI: function() {
                    return E
                },
                AY: function() {
                    return r
                },
                A_: function() {
                    return L
                },
                BB: function() {
                    return O
                },
                CQ: function() {
                    return _
                },
                GG: function() {
                    return g
                },
                I_: function() {
                    return M
                },
                Ix: function() {
                    return C
                },
                MR: function() {
                    return s
                },
                PD: function() {
                    return d
                },
                QH: function() {
                    return f
                },
                VK: function() {
                    return v
                },
                XX: function() {
                    return i
                },
                Xi: function() {
                    return h
                },
                bI: function() {
                    return A
                },
                c_: function() {
                    return l
                },
                dn: function() {
                    return c
                },
                fP: function() {
                    return y
                },
                gQ: function() {
                    return m
                },
                iI: function() {
                    return p
                },
                oB: function() {
                    return I
                },
                qg: function() {
                    return R
                },
                sl: function() {
                    return w
                },
                uw: function() {
                    return S
                },
                vh: function() {
                    return b
                },
                y$: function() {
                    return a
                },
                zG: function() {
                    return k
                },
                zo: function() {
                    return u
                }
            });
            var t = o("acc-39423"),
                i = (0, t.AA)("Client.membershipApi.loginradiusAppName"),
                r = (0, t.AA)("Client.membershipApi.loginradiusDomain"),
                c = "".concat(r, "/ssologin"),
                u = "".concat(r, "/requesthandlor.aspx"),
                a = (0, t.AA)("Client.membershipApi.loginradiusApiKey"),
                s = "",
                d = "welcome-member-centre",
                l = "add-email-member-centre",
                f = (0, t.AA)("Client.membershipApi.socialLoginApple"),
                w = (0, t.AA)("Client.membershipApi.socialLoginAppleNews"),
                p = (0, t.AA)("Client.membershipApi.socialLoginAppleSports"),
                g = (0, t.AA)("Client.membershipApi.socialLoginAppleListen"),
                b = "membership.featurepage.gemtext",
                m = "membership.autosubscribe.tracking",
                A = (0, t.AA)("Client.membershipApi.middlewareURL"),
                y = (0, t.AA)("Client.newsletters.ApiUrl"),
                _ = (0, t.AA)("Client.uieApi.baseURL"),
                h = "https://api.viafoura.co/v2/".concat((0, t.AA)("Client.membershipApi.cbcDomain")),
                C = 8,
                S = "MM/dd/yyyy",
                v = "https://cbchelp.cbc.ca/hc/en-ca/categories/115000247414-Your-CBC-Accounts",
                L = (0, t.AA)("Client.membershipSso.environment"),
                E = (0, t.AA)("Client.membershipSso.b2cScopeDomain"),
                I = (0, t.AA)("Client.membershipSso.b2cClientId"),
                k = (0, t.AA)("Client.membershipSso.b2cScopeId"),
                R = (0, t.pW)("Client.membershipSso.b2cOAuthDebug"),
                M = ["/id.account.create", "/id.account.delete", "/id.account.info", "/id.account.modify", "/id.account.reset-password", "/id.account.send-confirmation-email", "/id.write"],
                O = {
                    "cbcnews://": "NEW017",
                    "cbcnewsauth://": "NEW017",
                    "cbc.ca/news": "NEW017",
                    "cbcsports://": "SPO002",
                    "cbcsportsauth://": "SPO002",
                    "cbc.ca/sports": "SPO002"
                }
        },
        "acc-94730": function(e, n, o) {
            "use strict";
            o.r(n), o.d(n, {
                getLoginRadiusCookie: function() {
                    return y
                },
                getSessionToken: function() {
                    return a
                },
                getVisitorCookie: function() {
                    return A
                },
                lib: function() {
                    return w
                },
                locationOrigin: function() {
                    return l
                },
                loginViafoura: function() {
                    return g
                },
                loginradiusErrorCodes: function() {
                    return b
                },
                logoutLoginRadius: function() {
                    return m
                },
                logoutViafoura: function() {
                    return p
                },
                saveSessionToken: function() {
                    return d
                },
                setLRUidCookie: function() {
                    return h
                },
                setPlusCookie: function() {
                    return _
                },
                setSessionToken: function() {
                    return s
                }
            });
            o("acc-29390"), o("acc-15718"), o("acc-75855");
            var t = o("acc-46205"),
                i = o("acc-41664"),
                r = o("acc-62449"),
                c = o("acc-27127"),
                u = o("acc-86176"),
                a = function() {
                    var e = null;
                    return e = window.localStorage ? window.localStorage.getItem("LRTokenKey") : e, e = (e = window.sessionStorage && !e ? window.sessionStorage.getItem("LRTokenKey") : e) || y()
                },
                s = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        o = new URL("".concat(t.dn, "/setToken")),
                        i = {
                            token: e,
                            apiKey: t.y$
                        };
                    return Object.keys(i).forEach((function(e) {
                        return o.searchParams.append(e, i[e])
                    })), (0, u.request)(o, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        credentials: "include"
                    }).then((function() {
                        d(e, n)
                    })).catch((function(e) {
                        throw console.error("Error Set Session Token", e), e
                    }))
                },
                d = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    window.localStorage && (n ? (window.localStorage.removeItem("LRTokenKey"), (0, i.deleteLoginRadiusCookie)()) : window.localStorage.setItem("LRTokenKey", e)), window.sessionStorage && window.sessionStorage.setItem("LRTokenKey", e), (0, i.setLoginRadiusCookie)(e)
                },
                l = function() {
                    return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
                },
                f = function() {
                    return "undefined" !== typeof window.LRObject && "undefined" !== typeof window.LoginRadiusV2
                },
                w = {
                    loginRadiusInit: function(e, n) {
                        if (f()) window.LRObject.init(e, n);
                        else var o = setInterval((function() {
                            f() && (clearInterval(o), window.LRObject.init(e, n))
                        }), 100)
                    }
                },
                p = function() {
                    window.vfQ = window.vfQ || [], window.vf.$unsubscribe("logout", "success"), window.vfQ.push((function() {
                        window.vf.session.logout()
                    }))
                },
                g = function(e) {
                    return new Promise((function(n) {
                        window.vfQ.push((function() {
                            window.vf.session.login.loginRadius(e || a()).then((function(e) {
                                n(e)
                            }))
                        }))
                    }))
                },
                b = {
                    EMAIL_ALREADY_IN_USE: 936,
                    ACCESS_TOKEN_EXPIRED: 906
                },
                m = function() {
                    return new Promise((function(e, n) {
                        w.loginRadiusInit("logout", {
                            onSuccess: function() {
                                window.localStorage.removeItem("lr-user-uid"), window.localStorage && window.localStorage.removeItem("LRTokenKey"), window.sessionStorage && window.sessionStorage.removeItem("LRTokenKey"), (0, i.deleteLoginRadiusCookie)(), e()
                            },
                            onError: function(e) {
                                n(e)
                            }
                        })
                    }))
                },
                A = function() {
                    var e = (0, c.getFeedCookie)(r.GUEST_COOKIE);
                    return e ? e.value : null
                },
                y = function() {
                    var e = (0, c.getFeedCookie)(r.LR_COOKIE);
                    return e ? e.value : null
                },
                _ = function(e) {
                    (0, c.setFeedCookie)(r.AUTHED_COOKIE, e, 365)
                },
                h = function(e) {
                    null !== e && void 0 !== e && e.Uid && (0, c.setFeedCookie)("lr-user-uid", e.Uid, 365)
                }
        },
        "acc-80105": function(e) {
            function n(e) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            n.keys = function() {
                return []
            }, n.resolve = n, n.id = "acc-80105", e.exports = n
        },
        "acc-14383": function() {}
    }
]);
//# sourceMappingURL=../../sourcemaps/acc-202.6d5614987f4bc92ce081.js.map