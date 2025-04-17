! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c38cfe6b-4c10-40db-a4f8-888df7b1a02a", e._sentryDebugIdIdentifier = "sentry-dbid-c38cfe6b-4c10-40db-a4f8-888df7b1a02a")
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
    ["acc-489"], {
        "acc-61999": function(e, t, n) {
            n.d(t, {
                $9: function() {
                    return Ze
                }
            });
            var o, i = n("acc-27194"),
                r = n("acc-11543"),
                c = new Uint8Array(16);

            function a() {
                if (!o && !(o = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return o(c)
            }
            var s = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            for (var l = function(e) {
                    return "string" === typeof e && s.test(e)
                }, d = [], u = 0; u < 256; ++u) d.push((u + 256).toString(16).substr(1));
            var p = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (d[e[t + 0]] + d[e[t + 1]] + d[e[t + 2]] + d[e[t + 3]] + "-" + d[e[t + 4]] + d[e[t + 5]] + "-" + d[e[t + 6]] + d[e[t + 7]] + "-" + d[e[t + 8]] + d[e[t + 9]] + "-" + d[e[t + 10]] + d[e[t + 11]] + d[e[t + 12]] + d[e[t + 13]] + d[e[t + 14]] + d[e[t + 15]]).toLowerCase();
                if (!l(n)) throw TypeError("Stringified UUID is invalid");
                return n
            };
            var h, f, g, v, b, m, y, w, _, k, T, C = function(e, t, n) {
                    var o = (e = e || {}).random || (e.rng || a)();
                    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
                        n = n || 0;
                        for (var i = 0; i < 16; ++i) t[n + i] = o[i];
                        return t
                    }
                    return p(o)
                },
                E = n("acc-97837"),
                I = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" !== typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function o() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }(),
                S = function(e) {
                    function t(t, n, o) {
                        var i;
                        void 0 === n && (n = "unspecified"), void 0 === o && (o = "unspecified");
                        var r = e.call(this, t) || this;
                        return r.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", r.name = r.constructor.name, null === (i = Error.captureStackTrace) || void 0 === i || i.call(Error, r, r.constructor), r.claim = n, r.reason = o, r
                    }
                    return I(t, e), Object.defineProperty(t, "code", {
                        get: function() {
                            return "ERR_JWT_CLAIM_VALIDATION_FAILED"
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(Error),
                P = function() {
                    function e() {
                        this.timeout = null
                    }
                    return e.getInstance = function() {
                        return e.instance || (e.instance = new e), e.instance
                    }, e.prototype.clearTimeout = function() {
                        this.timeout && (clearTimeout(this.timeout), this.timeout = null)
                    }, e.prototype.setTimeout = function(e, t) {
                        for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
                        this.timeout = setTimeout(e, t, n)
                    }, e
                }();
            n("acc-11028");
            ! function(e) {
                e.FRAGMENT = "fragment", e.QUERY = "query", e.FORM_POST = "form_post"
            }(h || (h = {})),
            function(e) {
                e.STATE = "state", e.ERROR = "error", e.ERROR_DESCRIPTION = "error_description", e.ID_TOKEN = "id_token", e.ACCESS_TOKEN = "access_token", e.REFRESH_TOKEN = "refresh_token", e.EXPIRES_IN = "expires_in", e.TOKEN_TYPE = "token_type", e.SCOPE = "scope", e.AUTHORIZATION_CODE = "code"
            }(f || (f = {})),
            function(e) {
                e.ACCESS_TOKEN = "at", e.LR_ACCESS_TOKEN = "lrat", e.USER_INFO = "ui", e.ID_TOKEN = "idt", e.NONCE = "nonce", e.STATE = "state", e.STATE_EXP = "stateexp", e.REFRESH_TOKEN = "refresh_token"
            }(g || (g = {})),
            function(e) {
                e.DEV = "dev", e.DEV1 = "dev1", e.DEV2 = "dev2", e.AQ = "aq", e.AQ1 = "aq1", e.AQ2 = "aq2", e.AQ3 = "aq3", e.INT = "int", e.INT1 = "int1", e.STAGING = "staging", e.BETA = "beta", e.PROD = "prod"
            }(v || (v = {})),
            function(e) {
                e.INTERNAL = "internal", e.LOGIN = "login", e.LOGIN_CBC = "login_cbc", e.RESET_PASSWORD = "reset", e.RESET_PASSWORD_FACEBOOK = "resetFacebook", e.SIGNUP = "signup", e.SIGNUP_CBC = "signup_cbc", e.IDPJWTAUTH = "idpJwtAuth"
            }(b || (b = {})),
            function(e) {
                e.REDIRECT = "redirect", e.POPUP = "popup"
            }(m || (m = {})),
            function(e) {
                e.IMPLICIT = "ImplicitFlow", e.IDPJWT = "IdpJwtFlow", e.PKCE = "PkceFlow"
            }(y || (y = {})),
            function(e) {
                e.AUTHORIZATION_CODE = "Authorization_Code", e.ACCESS_TOKEN = "Access_Token", e.REFRESH_TOKEN = "Refresh_Token"
            }(w || (w = {})),
            function(e) {
                e.SAVE_SUCCESS = "savesuccess", e.REFRESH_ERROR = "refresherror"
            }(_ || (_ = {})),
            function(e) {
                e[e.OTHER = 0] = "OTHER", e[e.LOGIN = 1] = "LOGIN", e[e.SIGNUP = 2] = "SIGNUP", e[e.IDPJWTAUTH = 3] = "IDPJWTAUTH"
            }(k || (k = {})),
            function(e) {
                e.FIREFOX = "Firefox", e.SAMSUNG = "Samsung Internet", e.OPERA = "Opera", e.TRIDENT = "Internet Explorer", e.EDGE_LEGACY = "Edge (Legacy)", e.EDGE_CHROMIUM = "Edge (Chromium)", e.CHROME = "Chrome", e.SAFARI = "Safari"
            }(T || (T = {}));
            var R = 6e5,
                A = 50,
                O = {
                    clientId: "",
                    clientSecret: "",
                    debug: !1,
                    locale: "fr",
                    skipSignatureValidation: !1,
                    useLegacyDomain: !1,
                    msToRefresh: R,
                    clockTolerance: 60
                },
                N = {
                    env: v.PROD,
                    renewalCallback: "/callback",
                    responseType: "id_token token",
                    responseMode: h.FRAGMENT,
                    scope: "openid profile",
                    frameTimeoutMs: 6e3,
                    getSafariRefreshState: function() {
                        return ""
                    },
                    usePopupForSafariRefresh: !1
                },
                x = ["B2C_1A_ExternalClient_FrontEnd_Login", "B2C_1A_ExternalClient_FrontEnd_Login_Short_AQ"],
                D = ["B2C_1A_ExternalClient_FrontEnd_Login_CBC", "B2C_1A_ExternalClient_FrontEnd_Login_CBC_Short_AQ"],
                U = ["B2C_1A_ExternalClient_FrontEnd_SignUp", "B2C_1A_ExternalClient_FrontEnd_SignUp_Short_AQ"],
                F = ["B2C_1A_ExternalClient_FrontEnd_SignUp_CBC", "B2C_1A_ExternalClient_FrontEnd_SignUp_CBC_Short_AQ"],
                L = ["B2C_1A_ExternalClient_IdpJwt_Auth", "B2C_1A_ExternalClient_IdpJwt_Auth_Short_AQ"],
                M = {
                    internal: "B2C_1A_InternalClient_SignIn",
                    login: x[0],
                    login_cbc: D[0],
                    reset: "B2C_1A_ExternalClient_FrontEnd_ResetPassword",
                    resetFacebook: "B2C_1A_ExternalClient_FrontEnd_ResetPasswordFacebook",
                    signup: U[0],
                    signup_cbc: F[0],
                    idpJwtAuth: L[0]
                },
                q = "B2C_1A_ExternalClient_FrontEnd_ResetPassword",
                K = "B2C_1A_ExternalClient_FrontEnd_Email_Validation",
                J = "Client must be initiated before accessing this method.",
                B = "Unable to parse fragment for provided window object.",
                j = "Iframe timed out while waiting for a response.",
                V = "The received ID Token is invalid.",
                H = "The provided renewal URL is invalid.",
                G = "No tokens to refresh.",
                W = "No popup was created.",
                z = "No state in callback response.",
                Z = "The received state is invalid",
                Q = "Fragment handling disabled in iframe or popup.",
                X = "Popup was closed before flow could complete.",
                Y = "Popup timed out while waiting for a response.",
                $ = "Unable to refresh user tokens.",
                ee = "No redirect URI provided.",
                te = "No login following a password reset.",
                ne = "No login following an email validation.",
                oe = "Please provide a valid login radius access token to login using the IdpJwt flow",
                ie = "Cannot log in with IdpJwt auth because 'useLegacyDomain' is set to true in the client configuration.",
                re = "Cannot refresh tokens with IdpJwt auth because 'useLegacyDomain' is set to true in the client configuration.",
                ce = "Cannot log in with PKCE auth because 'useLegacyDomain' is set to true in the client configuration.",
                ae = "Cannot create an account with PKCE auth because 'useLegacyDomain' is set to true in the client configuration.",
                se = "Cannot refresh tokens with PKCE auth because 'useLegacyDomain' is set to true in the client configuration.",
                le = "No authorization code found, please try again",
                de = "https://pp-services.radio-canada.ca",
                ue = {
                    dev: de,
                    dev1: de,
                    dev2: de,
                    aq: de,
                    aq1: de,
                    aq2: de,
                    aq3: de,
                    int: de,
                    int1: de,
                    staging: de,
                    beta: de,
                    prod: "https://services.radio-canada.ca"
                },
                pe = {
                    dev: "https://dev-login.cbc.radio-canada.ca/54ac59a6-6683-4125-b9bb-23b7343326a8",
                    dev1: "https://dev1-login.cbc.radio-canada.ca/063e88c0-4031-486f-b641-2706121f1445",
                    dev2: "https://dev2-login.cbc.radio-canada.ca/e829c91f-30a9-4775-ae9b-99bf2fc0ee36",
                    aq: "https://aq-login.cbc.radio-canada.ca/b231e0ac-3b3a-4aa2-9c88-275a7b7a1176",
                    aq1: "https://aq1-login.cbc.radio-canada.ca/cfef2869-b826-4052-872e-0d7d2e9a95d2",
                    aq2: "https://aq2-login.cbc.radio-canada.ca/22890242-4c87-4c96-a9e4-b2f48aa38160",
                    aq3: "https://aq3-login.cbc.radio-canada.ca/ba510e94-2093-42bd-9c6e-7a86d48cac1b",
                    int: "https://int-login.cbc.radio-canada.ca/0aa1e8c2-5242-47a4-996a-6ed694ee7127",
                    int1: "https://int1-login.cbc.radio-canada.ca/bd41deec-99b4-418a-a310-f3d734f4d385",
                    staging: "https://staging-login.cbc.radio-canada.ca/54c6210c-07d5-4bb8-ac4a-ce4f9442a9d5",
                    beta: "https://beta-login.cbc.radio-canada.ca/967fa3ec-cc75-42e6-abf7-7f219b2af22a",
                    prod: "https://login.cbc.radio-canada.ca/bef1b538-1950-4283-9b27-b096cbc18070"
                },
                he = {
                    dev: pe.dev + "/v2.0/",
                    dev1: pe.dev1 + "/v2.0/",
                    dev2: pe.dev2 + "/v2.0/",
                    aq: pe.aq + "/v2.0/",
                    aq1: pe.aq1 + "/v2.0/",
                    aq2: pe.aq2 + "/v2.0/",
                    aq3: pe.aq3 + "/v2.0/",
                    int: pe.int + "/v2.0/",
                    int1: pe.int1 + "/v2.0/",
                    staging: pe.staging + "/v2.0/",
                    beta: pe.beta + "/v2.0/",
                    prod: pe.prod + "/v2.0/"
                },
                fe = {
                    dev: pe.dev + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    dev1: pe.dev1 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    dev2: pe.dev2 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    aq: pe.aq + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    aq1: pe.aq1 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    aq2: pe.aq2 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    aq3: pe.aq3 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    int: pe.int + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    int1: pe.int1 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    staging: pe.staging + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    beta: pe.beta + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    prod: pe.prod + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration"
                },
                ge = {
                    dev: "https://rcmnb2cdev.b2clogin.com/rcmnb2cdev.onmicrosoft.com",
                    dev1: "https://rcmnb2cdev1.b2clogin.com/rcmnb2cdev1.onmicrosoft.com",
                    dev2: "https://rcmnb2cdev2.b2clogin.com/rcmnb2cdev2.onmicrosoft.com",
                    aq: "https://rcmnb2caq.b2clogin.com/rcmnb2caq.onmicrosoft.com",
                    aq1: "https://rcmnb2caq1.b2clogin.com/rcmnb2caq1.onmicrosoft.com",
                    aq2: "https://rcmnb2caq2.b2clogin.com/rcmnb2caq2.onmicrosoft.com",
                    aq3: "https://rcmnb2caq3.b2clogin.com/rcmnb2caq3.onmicrosoft.com",
                    int: "https://rcmnb2cint.b2clogin.com/rcmnb2cint.onmicrosoft.com",
                    int1: "https://rcmnb2cint1.b2clogin.com/rcmnb2cint1.onmicrosoft.com",
                    staging: "https://rcmnb2cstaging.b2clogin.com/rcmnb2cstaging.onmicrosoft.com",
                    beta: "https://rcmnb2cbeta.b2clogin.com/rcmnb2cbeta.onmicrosoft.com",
                    prod: "https://rcmnb2cprod.b2clogin.com/rcmnb2cprod.onmicrosoft.com"
                },
                ve = {
                    dev: "https://rcmnb2cdev.b2clogin.com/54ac59a6-6683-4125-b9bb-23b7343326a8/v2.0/",
                    dev1: "https://rcmnb2cdev1.b2clogin.com/063e88c0-4031-486f-b641-2706121f1445/v2.0/",
                    dev2: "https://rcmnb2cdev2.b2clogin.com/e829c91f-30a9-4775-ae9b-99bf2fc0ee36/v2.0/",
                    aq: "https://rcmnb2caq.b2clogin.com/b231e0ac-3b3a-4aa2-9c88-275a7b7a1176/v2.0/",
                    aq1: "https://rcmnb2caq1.b2clogin.com/cfef2869-b826-4052-872e-0d7d2e9a95d2/v2.0/",
                    aq2: "https://rcmnb2caq2.b2clogin.com/22890242-4c87-4c96-a9e4-b2f48aa38160/v2.0/",
                    aq3: "https://rcmnb2caq3.b2clogin.com/ba510e94-2093-42bd-9c6e-7a86d48cac1b/v2.0/",
                    int: "https://rcmnb2cint.b2clogin.com/0aa1e8c2-5242-47a4-996a-6ed694ee7127/v2.0/",
                    int1: "https://rcmnb2cint1.b2clogin.com/bd41deec-99b4-418a-a310-f3d734f4d385/v2.0/",
                    staging: "https://rcmnb2cstaging.b2clogin.com/54c6210c-07d5-4bb8-ac4a-ce4f9442a9d5/v2.0/",
                    beta: "https://rcmnb2cbeta.b2clogin.com/967fa3ec-cc75-42e6-abf7-7f219b2af22a/v2.0/",
                    prod: "https://rcmnb2cprod.b2clogin.com/bef1b538-1950-4283-9b27-b096cbc18070/v2.0/"
                },
                be = {
                    dev: ge.dev + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    dev1: ge.dev1 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    dev2: ge.dev2 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    aq: ge.aq + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    aq1: ge.aq1 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    aq2: ge.aq2 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    aq3: ge.aq3 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    int: ge.int + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    int1: ge.int1 + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    staging: ge.staging + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    beta: ge.beta + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration",
                    prod: ge.prod + "/B2C_1A_OidcDiscoveryEndpoint_Stub/v2.0/.well-known/openid-configuration"
                },
                me = {
                    text: {
                        createAccount: "M'inscrire",
                        login: "Me connecter",
                        logout: "D\xe9connexion",
                        loggedToggleLabelInactive: "Afficher les options de d\xe9connexion.",
                        loggedToggleLabelActive: "Cacher les options de d\xe9connexion."
                    }
                },
                ye = "No client was provided to the constructor.",
                we = "No post logout redirect URL was provided to the constructor in the options parameter",
                _e = "No redirect URL was provided to the constructor in the options parameter",
                ke = "Given selector doesn't exist.",
                Te = "No selector was provided to the constructor in the options parameter.",
                Ce = [
                    [T.FIREFOX, /Firefox|FxiOS/],
                    [T.SAMSUNG, /SamsungBrowser/],
                    [T.OPERA, /Opera|OPR/],
                    [T.TRIDENT, /Trident/],
                    [T.EDGE_LEGACY, /Edge/],
                    [T.EDGE_CHROMIUM, /Edg/],
                    [T.CHROME, /Chrome|CriOS/],
                    [T.SAFARI, /Safari/]
                ],
                Ee = "auth-js-iframe-",
                Ie = "auth-js",
                Se = "PkcePolicy",
                Pe = "FlowTypeKey",
                Re = "PkceChallengePair",
                Ae = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.forceCookieMode,
                            o = void 0 !== n && n,
                            i = t.cookieDomain,
                            r = void 0 === i ? "" : i,
                            c = t.cookieSameSite,
                            a = void 0 === c ? "strict" : c;
                        this.forceCookieMode = o || !this.isLocalStorageAvailable(), this.cookieDomain = r, this.cookieSameSite = a
                    }
                    return e.prototype.get = function(e, t) {
                        return void 0 === t && (t = !1), this.forceCookieMode ? this.getCookie(e) : t ? sessionStorage.getItem(e) || "" : localStorage.getItem(e) || ""
                    }, e.prototype.set = function(e, t, n, o) {
                        void 0 === n && (n = !1), this.forceCookieMode ? this.setCookie(e, t, o) : n ? sessionStorage.setItem(e, t) : localStorage.setItem(e, t)
                    }, e.prototype.delete = function(e, t) {
                        void 0 === t && (t = !1), this.forceCookieMode && this.deleteCookie(e), t ? sessionStorage.removeItem(e) : localStorage.removeItem(e)
                    }, e.prototype.size = function() {
                        return localStorage.length
                    }, e.prototype.key = function(e) {
                        return localStorage.key(e)
                    }, e.prototype.getCookie = function(e) {
                        var t, n = document.cookie.split(";").find((function(t) {
                            return t.trim().startsWith(e + "=")
                        }));
                        return decodeURIComponent(null !== (t = null === n || void 0 === n ? void 0 : n.split("=")[1]) && void 0 !== t ? t : "")
                    }, e.prototype.setCookie = function(e, t, n) {
                        var o = "";
                        n && (o = " expires=" + new Date(Date.now() + n).toUTCString() + ";");
                        var i = "";
                        this.cookieDomain && (i = " domain=" + this.cookieDomain + ";");
                        var r = "";
                        this.cookieSameSite && (r = " samesite=" + this.cookieSameSite + ";");
                        var c = e + "=" + encodeURIComponent(t) + ";" + o + i + " path=/; secure; " + r;
                        window.document.cookie = c
                    }, e.prototype.deleteCookie = function(e) {
                        var t = "";
                        this.cookieDomain && (t = " domain=" + this.cookieDomain + ";");
                        var n = "";
                        this.cookieSameSite && (n = " samesite=" + this.cookieSameSite + ";");
                        var o = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;" + t + " path=/; secure; " + n;
                        window.document.cookie = o
                    }, e.prototype.isLocalStorageAvailable = function() {
                        try {
                            var e = (new Date).toTimeString();
                            localStorage.setItem("uid", e);
                            var t = localStorage.getItem("uid");
                            return localStorage.removeItem("uid"), t === e
                        } catch (n) {
                            return !1
                        }
                    }, e
                }();

            function Oe(e) {
                return Object.values(b).includes(e)
            }
            var Ne = n("acc-99197"),
                xe = n.n(Ne),
                De = function() {
                    return De = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, De.apply(this, arguments)
                },
                Ue = function(e, t, n, o) {
                    return new(n || (n = Promise))((function(i, r) {
                        function c(e) {
                            try {
                                s(o.next(e))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function a(e) {
                            try {
                                s(o.throw(e))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(c, a)
                        }
                        s((o = o.apply(e, t || [])).next())
                    }))
                },
                Fe = function(e, t) {
                    var n, o, i, r, c = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function a(r) {
                        return function(a) {
                            return function(r) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            i = r;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                                c.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && c.label < i[1]) {
                                                c.label = i[1], i = r;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(r);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    r = t.call(e, c)
                                } catch (a) {
                                    r = [6, a], o = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, a])
                        }
                    }
                },
                Le = function(e) {
                    return t = e.trim(), btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, (function(e, t) {
                        return String.fromCharCode(Number("0x" + t))
                    })));
                    var t
                },
                Me = function(e) {
                    return function(e) {
                        try {
                            var t = e.replace(/-/g, "+").replace(/_/g, "/");
                            return decodeURIComponent(window.atob(t).split("").map((function(e) {
                                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                            })).join(""))
                        } catch (n) {
                            return atob(e)
                        }
                    }(e.trim())
                };

            function qe(e) {
                e.remove()
            }

            function Ke() {
                var e = (null === navigator || void 0 === navigator ? void 0 : navigator.vendor.indexOf("Apple")) > -1,
                    t = (Ce.find((function(e) {
                        return e[1].test(navigator.userAgent)
                    })) || [])[0] === T.SAFARI;
                return e && t
            }

            function Je(e, t, n) {
                return Ue(this, void 0, void 0, (function() {
                    return Fe(this, (function(o) {
                        return [2, Be({
                            method: "POST",
                            url: e,
                            headers: De({
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            }, t),
                            data: new URLSearchParams(De({}, n))
                        })]
                    }))
                }))
            }

            function Be(e) {
                return xe().request(e)
            }
            var je = function(e, t) {
                    if (!e) return null;
                    var n = e.split(".");
                    if (3 !== n.length && 2 !== n.length) return null;
                    var o = -1;
                    switch (t) {
                        case "header":
                            o = 0;
                            break;
                        case "payload":
                            o = 1;
                            break;
                        default:
                            return null
                    }
                    var i = n[o];
                    if (!i) return null;
                    try {
                        var r = Me(i);
                        return JSON.parse(r)
                    } catch (c) {
                        return null
                    }
                },
                Ve = function(e, t) {
                    return e in t
                },
                He = function() {
                    return He = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, He.apply(this, arguments)
                },
                Ge = function(e, t, n, o) {
                    return new(n || (n = Promise))((function(i, r) {
                        function c(e) {
                            try {
                                s(o.next(e))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function a(e) {
                            try {
                                s(o.throw(e))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(c, a)
                        }
                        s((o = o.apply(e, t || [])).next())
                    }))
                },
                We = function(e, t) {
                    var n, o, i, r, c = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function a(r) {
                        return function(a) {
                            return function(r) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            i = r;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                                c.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && c.label < i[1]) {
                                                c.label = i[1], i = r;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(r);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    r = t.call(e, c)
                                } catch (a) {
                                    r = [6, a], o = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, a])
                        }
                    }
                },
                ze = function(e, t) {
                    for (var n = 0, o = t.length, i = e.length; n < o; n++, i++) e[i] = t[n];
                    return e
                },
                Ze = function() {
                    function e(e) {
                        if (void 0 === e && (e = new Ae), this.initiated = !1, this.keys = [], this.handlers = new Map, this.m_refreshTokenOnEnable = !1, this.m_refreshRedirectionEnabled = !1, !e || !e.get || !e.set || !e.delete) throw new Error("Please provide a valid Persistence class that implements a set, get and delete.");
                        this.persistence = e
                    }
                    return Object.defineProperty(e.prototype, "refreshTokenOnEnable", {
                        get: function() {
                            return this.m_refreshTokenOnEnable
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "refreshRedirectionEnabled", {
                        get: function() {
                            return this.m_refreshRedirectionEnabled
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.init = function(e, t) {
                        var n, o, i;
                        if (this.log("init", null === e || void 0 === e ? void 0 : e.debug), this.initiated) throw new Error("Client already initiated.");
                        if (!(null === e || void 0 === e ? void 0 : e.clientId) || !(null === (n = e.clientId) || void 0 === n ? void 0 : n.trim().length)) throw new Error("Please provide a valid client id.");
                        if (e.msToRefresh && e.msToRefresh < 0) throw new Error("Please provide a msToRefresh value that is greater than 0. A value of 0 will be ignored.");
                        if (e.clockTolerance && e.clockTolerance < 0) throw new Error("Please provide a clockTolerance value that is greater than 0. A value of 0 will be ignored.");
                        if (this.config = He(He({}, O), "object" === typeof e && e), this.callConfig = He(He({}, N), "object" === typeof t && t), (null === (o = this.callConfig) || void 0 === o ? void 0 : o.responseMode) !== h.FRAGMENT && (null === (i = this.callConfig) || void 0 === i ? void 0 : i.responseMode) !== h.QUERY) throw new Error('Please provide a valid Response Mode value. Either "fragment" or "query".');
                        this.initiated = !0, this.checkCache()
                    }, e.prototype.handleRedirect = function() {
                        this.log("handleRedirect"), this.checkInitiated();
                        var e, t = window.opener && window.opener !== window && window.name === Ie;
                        if (window.parent !== window && window.name.startsWith(Ee) || t) return this.log("handleRedirect :: no redirect in iframe or poup"), Promise.reject({
                            ok: !1,
                            error: Q,
                            fromIframeOrPopup: !0
                        });
                        try {
                            e = this.parseFragment(window)
                        } catch (o) {
                            var n = o;
                            return this.log("handleRedirect :: unable to parse fragment " + (n.message ? ":: " + n.message : "")), Promise.reject({
                                ok: !1,
                                error: B
                            })
                        }
                        return this.cleanupFragment(), this.handleFragment(e)
                    }, e.prototype.getCachedToken = function(e) {
                        this.log("getCachedToken");
                        var t = this.getCacheKey(e, this.config.clientId),
                            n = Me(this.persistence.get(t));
                        return (null === n || void 0 === n ? void 0 : n.trim().length) ? JSON.parse(n) : null
                    }, e.prototype.getUnexpiredToken = function(e) {
                        this.log("getUnexpiredToken");
                        var t = this.getCachedToken(e);
                        if (!t) return "";
                        var n = Date.now();
                        return new Date(t.expires).getTime() > n ? t.token : ""
                    }, e.prototype.disableRefreshRedirect = function() {
                        this.m_refreshRedirectionEnabled = !1
                    }, e.prototype.enableRefreshRedirect = function() {
                        this.m_refreshRedirectionEnabled = !0, this.refreshTokenOnEnable && this.refreshTokens()
                    }, e.prototype.cancelRefreshRedirect = function() {
                        this.m_refreshTokenOnEnable = !1
                    }, e.prototype.getAccessToken = function() {
                        return this.log("getAccessToken"), this.checkInitiated(), this.getUnexpiredToken(g.ACCESS_TOKEN)
                    }, e.prototype.getRefreshToken = function() {
                        return this.log("getRefreshToken"), this.checkInitiated(), this.getUnexpiredToken(g.REFRESH_TOKEN)
                    }, e.prototype.getIdToken = function() {
                        return this.log("getIdToken"), this.checkInitiated(), this.getUnexpiredToken(g.ID_TOKEN)
                    }, e.prototype.getLRAccessToken = function() {
                        this.log("getLRAccessToken");
                        var e = this.getIdToken();
                        return e ? JSON.parse(Me(e.split(".")[1])).lrat : ""
                    }, e.prototype.login = function(e) {
                        this.log("login"), this.checkInitiated();
                        var t = e.isInternal,
                            n = void 0 !== t && t,
                            o = e.withPrompt,
                            i = void 0 !== o && o,
                            r = e.state,
                            c = e.requestType,
                            a = void 0 === c ? m.REDIRECT : c,
                            s = e.redirectUri,
                            l = e.policy,
                            d = e.mcmId,
                            u = e.mcaId,
                            p = e.cbcVisitorId,
                            f = n ? b.INTERNAL : b.LOGIN,
                            g = l || f,
                            v = this.prepareAndStoreRequestValues(r),
                            w = v.nonce,
                            _ = v.state,
                            k = {
                                nonce: w,
                                state: _,
                                withPrompt: i,
                                scope: this.callConfig.scope,
                                responseType: this.callConfig.responseType,
                                responseMode: h.FRAGMENT,
                                redirectUri: s,
                                mcmId: d,
                                mcaId: u,
                                cbcVisitorId: p
                            },
                            T = this.buildUrl(g, k);
                        if (this.setFlowType(y.IMPLICIT), a === m.POPUP) return this.handlePopup(T, _);
                        window.location.assign(T)
                    }, e.prototype.loginPkce = function(e) {
                        if (this.log("loginPkce"), this.checkInitiated(), !0 === this.config.useLegacyDomain) throw new Error(ce);
                        var t = e.isInternal,
                            n = void 0 !== t && t,
                            o = e.withPrompt,
                            i = void 0 !== o && o,
                            r = e.state,
                            c = e.requestType,
                            a = void 0 === c ? m.REDIRECT : c,
                            s = e.redirectUri,
                            l = e.policy,
                            d = e.mcmId,
                            u = e.mcaId,
                            p = e.cbcVisitorId,
                            h = n ? b.INTERNAL : b.LOGIN,
                            f = l || h,
                            g = this.prepareAndStoreRequestValues(r),
                            v = g.nonce,
                            _ = g.state,
                            k = {
                                nonce: v,
                                state: _,
                                withPrompt: i,
                                scope: this.callConfig.scope,
                                responseType: "code",
                                responseMode: this.callConfig.responseMode,
                                redirectUri: s,
                                mcmId: d,
                                mcaId: u,
                                cbcVisitorId: p,
                                pkceRequestState: w.AUTHORIZATION_CODE
                            },
                            T = this.buildUrlPkce(f, k);
                        if (this.setFlowType(y.PKCE), a === m.POPUP) return this.handlePopup(T, _);
                        window.location.assign(T)
                    }, e.prototype.resetPasswordFacebook = function(e) {
                        this.log("resetPassword"), this.checkInitiated();
                        var t = e.withPrompt,
                            n = void 0 !== t && t,
                            o = e.state,
                            i = e.requestType,
                            r = void 0 === i ? m.REDIRECT : i,
                            c = e.redirectUri,
                            a = e.policy,
                            s = e.mcmId,
                            l = e.mcaId,
                            d = e.cbcVisitorId,
                            u = b.RESET_PASSWORD_FACEBOOK,
                            p = a || u,
                            f = this.prepareAndStoreRequestValues(o),
                            g = f.nonce,
                            v = f.state,
                            w = {
                                nonce: g,
                                state: v,
                                withPrompt: n,
                                scope: this.callConfig.scope,
                                responseType: this.callConfig.responseType,
                                responseMode: h.FRAGMENT,
                                redirectUri: c,
                                mcmId: s,
                                mcaId: l,
                                cbcVisitorId: d
                            },
                            _ = this.buildUrl(p, w);
                        if (this.setFlowType(y.IMPLICIT), r === m.POPUP) return this.handlePopup(_, v);
                        window.location.assign(_)
                    }, e.prototype.resetPasswordFacebookPkce = function(e) {
                        if (this.log("resetPasswordPkce"), this.checkInitiated(), !0 === this.config.useLegacyDomain) throw new Error(ce);
                        var t = e.withPrompt,
                            n = void 0 !== t && t,
                            o = e.state,
                            i = e.requestType,
                            r = void 0 === i ? m.REDIRECT : i,
                            c = e.redirectUri,
                            a = e.policy,
                            s = e.mcmId,
                            l = e.mcaId,
                            d = e.cbcVisitorId,
                            u = b.RESET_PASSWORD_FACEBOOK,
                            p = a || u,
                            h = this.prepareAndStoreRequestValues(o),
                            f = h.nonce,
                            g = h.state,
                            v = {
                                nonce: f,
                                state: g,
                                withPrompt: n,
                                scope: this.callConfig.scope,
                                responseType: "code",
                                responseMode: this.callConfig.responseMode,
                                redirectUri: c,
                                mcmId: s,
                                mcaId: l,
                                cbcVisitorId: d,
                                pkceRequestState: w.AUTHORIZATION_CODE
                            },
                            _ = this.buildUrlPkce(p, v);
                        if (this.setFlowType(y.PKCE), r === m.POPUP) return this.handlePopup(_, g);
                        window.location.assign(_)
                    }, e.prototype.loginIdpJwt = function(e) {
                        var t;
                        return Ge(this, void 0, void 0, (function() {
                            var n, o, i, r, c, a, s, l, d, u, p, f, g, v, m, _, k, T;
                            return We(this, (function(C) {
                                switch (C.label) {
                                    case 0:
                                        if (this.log("login IdpJwt"), this.checkInitiated(), !(null === (t = e.idpJwtToken) || void 0 === t ? void 0 : t.trim().length)) throw new Error(oe);
                                        if (!0 === this.config.useLegacyDomain) throw new Error(ie);
                                        return n = e.state, o = e.redirectUri, i = e.policy, r = e.idpJwtToken, c = i || b.IDPJWTAUTH, a = this.prepareAndStoreRequestValues(n), s = a.nonce, l = a.state, this.setFlowType(y.IDPJWT), d = {
                                            nonce: s,
                                            state: l,
                                            scope: this.callConfig.scope,
                                            responseType: this.callConfig.responseType,
                                            responseMode: h.FORM_POST,
                                            redirectUri: o,
                                            pkceRequestState: w.AUTHORIZATION_CODE
                                        }, u = this.getPkceChallengePair(), p = u.code_verifier, f = u.code_challenge, g = u.code_challenge_method, v = {
                                            client_id: this.config.clientId,
                                            response_type: "code",
                                            redirect_uri: o,
                                            scope: this.callConfig.scope,
                                            assertion: r,
                                            response_mode: h.FORM_POST,
                                            code_challenge_method: g,
                                            code_challenge: f,
                                            state: l
                                        }, [4, this.getIdpJwtAuthorizationCode(c, d, v)];
                                    case 1:
                                        return (m = C.sent()) && (null === m || void 0 === m ? void 0 : m.error) && (null === m || void 0 === m ? void 0 : m.error_description) ? (this.log("loginIdpJwt :: failed getting authorization code :: " + (null === m || void 0 === m ? void 0 : m.error_description)), [2, Promise.reject({
                                            ok: !1,
                                            error: null === m || void 0 === m ? void 0 : m.error_description,
                                            state: Me((null === m || void 0 === m ? void 0 : m.state) || "").split("|")[1]
                                        })]) : m && m.code ? m.state ? this.validateState(null === m || void 0 === m ? void 0 : m.state) ? (d.pkceRequestState = w.ACCESS_TOKEN, _ = {
                                            grant_type: "authorization_code",
                                            code_verifier: p,
                                            code: m.code
                                        }, [4, this.getIdpJwtAccessToken(c, d, _, m.state)]) : (this.log("loginIdpJwt :: invalid state"), [2, Promise.reject({
                                            ok: !1,
                                            error: Z
                                        })]) : (this.log("loginIdpJwt :: no state in response"), [2, Promise.reject({
                                            ok: !1,
                                            error: z
                                        })]) : [3, 3];
                                    case 2:
                                        return (k = C.sent()) && k.error ? (this.log("loginIdpJwt :: failed getting access token :: " + (null === k || void 0 === k ? void 0 : k.error)), [2, Promise.reject(k)]) : (this.clearPkceChallengePair(), T = k, [2, this.validateAndSavePkceFlowTokens(T, l)]);
                                    case 3:
                                        return [2, Promise.reject({
                                            ok: !1,
                                            error: "loginIdpJwt :: failed getting authorization code ",
                                            state: Me((null === m || void 0 === m ? void 0 : m.state) || "").split("|")[1]
                                        })]
                                }
                            }))
                        }))
                    }, e.prototype.setPkcePolicy = function(e) {
                        this.persistence.set(Se, e)
                    }, e.prototype.getPkcePolicy = function(e) {
                        void 0 === e && (e = !1);
                        var t = this.persistence.get(Se);
                        return e && this.persistence.delete(Se), t
                    }, e.prototype.getPkceChallengePair = function() {
                        var e = this.persistence.get(Re),
                            t = e ? JSON.parse(e) : {};
                        if (!t.code_challenge) {
                            var n = (0, E.Ay)();
                            t = {
                                code_verifier: n.code_verifier,
                                code_challenge: n.code_challenge,
                                code_challenge_method: "S256"
                            }, this.persistence.set(Re, JSON.stringify(t))
                        }
                        return t
                    }, e.prototype.clearPkceChallengePair = function() {
                        this.persistence.delete(Re)
                    }, e.prototype.getIdpJwtAuthorizationCode = function(e, t, n) {
                        return Ge(this, void 0, void 0, (function() {
                            var o;
                            return We(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Je(this.buildUrlIdpJwt(e, t), {
                                            "content-type": "application/x-www-form-urlencoded"
                                        }, n)];
                                    case 1:
                                        return o = i.sent(), [2, function(e) {
                                            var t = {},
                                                n = document.createElement("div");
                                            n.innerHTML = e;
                                            var o = n.querySelector("form");
                                            return o && o.querySelectorAll("input").forEach((function(e) {
                                                t[e.name] = e.value
                                            })), t
                                        }(null === o || void 0 === o ? void 0 : o.data)]
                                }
                            }))
                        }))
                    }, e.prototype.getIdpJwtAccessToken = function(e, t, n, o) {
                        return Ge(this, void 0, void 0, (function() {
                            var i;
                            return We(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return i = this.buildUrlIdpJwt(e, t), [4, this.sendAccessTokenPkceRequest(i, n, o)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.getPkceAccessToken = function(e, t, n, o) {
                        return Ge(this, void 0, void 0, (function() {
                            var i;
                            return We(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return i = this.buildUrlPkce(e, t), [4, this.sendAccessTokenPkceRequest(i, n, o)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.sendAccessTokenPkceRequest = function(e, t, n) {
                        return Ge(this, void 0, void 0, (function() {
                            var o, i;
                            return We(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return o = null, [4, Je(e, {
                                            "content-type": "application/x-www-form-urlencoded"
                                        }, t).catch((function(e) {
                                            var t, i;
                                            e.response && e.response.status && (o = {
                                                ok: !1,
                                                error: "Status code: " + e.response.status + ". Message: " + (null === (i = null === (t = e.response) || void 0 === t ? void 0 : t.data) || void 0 === i ? void 0 : i.error_description),
                                                state: n
                                            })
                                        }))];
                                    case 1:
                                        return i = r.sent(), [2, null !== o ? o : i.data]
                                }
                            }))
                        }))
                    }, e.prototype.validateAndSavePkceFlowTokens = function(e, t) {
                        return Ge(this, void 0, void 0, (function() {
                            var n;
                            return We(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.log("validateAndSavePkceFlowTokens"), [4, this.validateJWT(e.id_token, t)];
                                    case 1:
                                        return (n = o.sent()) ? (this.saveTokensPkceFlow(e), [2, Promise.resolve({
                                            ok: !0,
                                            state: Me(t).split("|")[1],
                                            authenticationType: this.getAuthenticationType(n.acr)
                                        })]) : (this.log("validateAndSavePkceFlowTokens :: invalid id token"), [2, Promise.reject({
                                            ok: !1,
                                            error: V,
                                            state: Me(t).split("|")[1]
                                        })])
                                }
                            }))
                        }))
                    }, e.prototype.createAccount = function(e) {
                        this.log("createAccount"), this.checkInitiated();
                        var t = e.state,
                            n = e.requestType,
                            o = void 0 === n ? m.REDIRECT : n,
                            i = e.withPrompt,
                            r = void 0 === i || i,
                            c = e.redirectUri,
                            a = e.policy,
                            s = e.mcmId,
                            l = e.mcaId,
                            d = e.cbcVisitorId,
                            u = a || b.SIGNUP,
                            p = this.prepareAndStoreRequestValues(t),
                            f = p.nonce,
                            g = p.state,
                            v = {
                                nonce: f,
                                state: g,
                                withPrompt: r,
                                scope: this.callConfig.scope,
                                responseType: this.callConfig.responseType,
                                responseMode: h.FRAGMENT,
                                redirectUri: c,
                                mcmId: s,
                                mcaId: l,
                                cbcVisitorId: d
                            },
                            w = this.buildUrl(u, v);
                        if (this.setFlowType(y.IMPLICIT), o === m.POPUP) return this.handlePopup(w, g);
                        window.location.assign(w)
                    }, e.prototype.createAccountPkce = function(e) {
                        if (this.log("createAccountPkce"), this.checkInitiated(), !0 === this.config.useLegacyDomain) throw new Error(ae);
                        var t = e.state,
                            n = e.requestType,
                            o = void 0 === n ? m.REDIRECT : n,
                            i = e.withPrompt,
                            r = void 0 === i || i,
                            c = e.redirectUri,
                            a = e.policy,
                            s = e.mcmId,
                            l = e.mcaId,
                            d = e.cbcVisitorId,
                            u = a || b.SIGNUP,
                            p = this.prepareAndStoreRequestValues(t),
                            h = p.nonce,
                            f = p.state,
                            g = {
                                nonce: h,
                                state: f,
                                withPrompt: r,
                                scope: this.callConfig.scope,
                                responseType: "code",
                                responseMode: this.callConfig.responseMode,
                                redirectUri: c,
                                mcmId: s,
                                mcaId: l,
                                cbcVisitorId: d,
                                pkceRequestState: w.AUTHORIZATION_CODE
                            },
                            v = this.buildUrlPkce(u, g);
                        if (this.setFlowType(y.PKCE), o === m.POPUP) return this.handlePopup(v, f);
                        window.location.assign(v)
                    }, e.prototype.getPolicyForRefresh = function(e) {
                        var t = null === e || void 0 === e ? void 0 : e.includes("short_aq"),
                            n = null === e || void 0 === e ? void 0 : e.includes("cbc"),
                            o = null === e || void 0 === e ? void 0 : e.includes("internalclient"),
                            i = o ? e || b.INTERNAL : n ? b.LOGIN_CBC : b.LOGIN;
                        !o && t && (i = (n ? D : x)[1]);
                        return i
                    }, e.prototype.refreshTokens = function() {
                        var e, t;
                        return Ge(this, void 0, void 0, (function() {
                            var n, o, i, r, c, a, s, l, d, u, p, f;
                            return We(this, (function(v) {
                                if (this.log("refreshToken"), this.checkInitiated(), n = this.getCachedToken(g.ID_TOKEN) || {}, o = n.token, i = n.policy, !o) return this.log("refreshToken :: no id token to refresh"), [2, Promise.reject({
                                    ok: !1,
                                    error: G
                                })];
                                if ((r = this.getFlowType()) === y.IDPJWT) return [2, this.refreshTokensIdpJwt()];
                                if (r === y.PKCE) return [2, this.refreshTokensPkce()];
                                try {
                                    c = this.getCompleteCallback((null === (e = this.callConfig) || void 0 === e ? void 0 : e.renewalCallback) || "")
                                } catch (b) {
                                    return this.log("refreshToken :: invalid renewal url"), [2, Promise.reject({
                                        ok: !1,
                                        error: H
                                    })]
                                }
                                return !this.refreshRedirectionEnabled && Ke() ? (this.log("refreshToken :: redirect disabled, refresh will happen on next enable"), this.m_refreshTokenOnEnable = !0, [2, {
                                    ok: !0
                                }]) : (a = this.getPolicyForRefresh(i), s = this.prepareAndStoreRequestValues(this.getSafariRedirectState()), l = s.nonce, d = s.state, u = {
                                    nonce: l,
                                    state: d,
                                    scope: this.callConfig.scope,
                                    responseType: this.callConfig.responseType,
                                    responseMode: h.FRAGMENT,
                                    redirectUri: c,
                                    isRenewal: !0,
                                    withPrompt: !Ke()
                                }, p = this.buildUrl(a, u), (f = JSON.parse(Me(null !== (t = null === o || void 0 === o ? void 0 : o.split(".")[1]) && void 0 !== t ? t : "{}")).email) && (p += "&login_hint=" + f), Ke() ? (this.m_refreshTokenOnEnable = !1, this.callConfig.usePopupForSafariRefresh ? [2, this.handlePopup(p, d)] : (window.location.assign(p), [2, {
                                    ok: !0
                                }])) : [2, this.handleIframe(p, d)])
                            }))
                        }))
                    }, e.prototype.refreshTokensIdpJwt = function() {
                        return Ge(this, void 0, void 0, (function() {
                            return We(this, (function(e) {
                                return this.log("refreshTokensIdpJwt"), [2, this.refreshTokensPkce(y.IDPJWT)]
                            }))
                        }))
                    }, e.prototype.refreshTokensPkce = function(e) {
                        var t;
                        return void 0 === e && (e = y.PKCE), Ge(this, void 0, void 0, (function() {
                            var n, o, i, r, c, a, s, l, d;
                            return We(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (this.log("refreshTokensPkce :: flow type: " + e), !(n = this.getRefreshToken())) return this.log("refreshTokensPkce :: flow type: " + e + " :: no refresh token to refresh"), [2, Promise.reject({
                                            ok: !1,
                                            error: G
                                        })];
                                        if (!0 === this.config.useLegacyDomain) return [2, Promise.reject({
                                            ok: !1,
                                            error: e === y.IDPJWT ? re : se
                                        })];
                                        if (o = {
                                                nonce: "",
                                                state: "",
                                                redirectUri: "",
                                                scope: this.callConfig.scope,
                                                responseType: this.callConfig.responseType,
                                                responseMode: this.callConfig.responseMode,
                                                pkceRequestState: w.REFRESH_TOKEN
                                            }, i = {
                                                grant_type: "refresh_token",
                                                refresh_token: n,
                                                client_secret: null === (t = this.config) || void 0 === t ? void 0 : t.clientSecret
                                            }, r = this.getPayloadFromIdToken() || {}, c = r.nonce, !(a = r.acr)) throw this.log("refreshTokensPkce :: flow type: " + e + " :: failed getting policy from id token :: " + $), new Error($);
                                        return s = this.prepareAndStoreRequestValues("", c).state, l = null, e !== y.IDPJWT ? [3, 2] : [4, this.getIdpJwtAccessToken(a, o, i, s)];
                                    case 1:
                                        return l = u.sent(), [3, 4];
                                    case 2:
                                        return [4, this.getPkceAccessToken(a, o, i, s)];
                                    case 3:
                                        l = u.sent(), u.label = 4;
                                    case 4:
                                        return l && l.error ? (this.log("refreshTokensPkce :: flow type: " + e + " :: failed getting access token :: " + (null === l || void 0 === l ? void 0 : l.error)), [2, Promise.resolve(l)]) : (d = l, [2, this.validateAndSavePkceFlowTokens(d, s)])
                                }
                            }))
                        }))
                    }, e.prototype.getPayloadFromIdToken = function() {
                        this.log("getPayloadFromIdToken");
                        var e = (this.getCachedToken(g.ID_TOKEN) || {}).token;
                        if (!e) return null;
                        var t = je(e, "payload");
                        if (!t) return null;
                        if (Ve("acr", t) && "string" === typeof t.acr) {
                            return {
                                nonce: Ve("nonce", t) && "string" === typeof t.nonce ? t.nonce : void 0,
                                acr: t.acr
                            }
                        }
                        return null
                    }, e.prototype.getBaseURL = function() {
                        return this.config.useLegacyDomain ? ge[this.callConfig.env] : pe[this.callConfig.env]
                    }, e.prototype.getB2CDiscoveryEndpoint = function() {
                        return this.config.useLegacyDomain ? be[this.callConfig.env] : fe[this.callConfig.env]
                    }, e.prototype.logout = function(e) {
                        this.log("logout"), this.checkInitiated();
                        var t = e.redirectUri,
                            n = e.skipEndpoint,
                            o = this.getCacheKey(g.ID_TOKEN, this.config.clientId),
                            i = this.getCacheKey(g.ACCESS_TOKEN, this.config.clientId),
                            r = this.getCacheKey(g.REFRESH_TOKEN, this.config.clientId),
                            c = this.getCacheKey(g.USER_INFO, this.config.clientId),
                            a = this.getCachedToken(g.ID_TOKEN) || {},
                            s = a.policy,
                            l = a.token;
                        if (this.persistence.delete(o), this.persistence.delete(i), this.persistence.delete(r), this.persistence.delete(c), !n) {
                            if (!t) throw new Error(ee);
                            var d = s || M[b.LOGIN],
                                u = this.getBaseURL() + "/" + d + "/oauth2/v2.0/logout?id_token_hint=" + l + "&post_logout_redirect_uri=" + encodeURIComponent(this.getCompleteCallback(t));
                            window.location.assign(u)
                        }
                    }, e.prototype.getFlowType = function() {
                        return this.persistence.get(Pe)
                    }, e.prototype.setFlowType = function(e) {
                        this.persistence.set(Pe, e)
                    }, e.prototype.deleteAccount = function() {
                        throw this.log("deleteAccount"), this.checkInitiated(), new Error("Not implemented in B2C yet.")
                    }, e.prototype.getUserInfo = function() {
                        var e;
                        this.log("getUserInfo"), this.checkInitiated();
                        var t = Date.now(),
                            n = this.getCachedToken(g.ID_TOKEN) || {},
                            o = n.token,
                            i = n.expires,
                            r = n.policy;
                        if (!o || !i || t > new Date(i).getTime()) return {};
                        var c = JSON.parse(Me(o.split(".")[1])),
                            a = c.given_name,
                            s = c.family_name,
                            l = c.email,
                            d = c.name,
                            u = c.rcid,
                            p = c.email_verified,
                            h = c.picture,
                            f = c.lrat,
                            v = c.employeeId,
                            b = c.ldapUsername,
                            m = {
                                given_name: a,
                                family_name: s,
                                name: d,
                                email: l
                            };
                        return (null === (e = null === r || void 0 === r ? void 0 : r.toLowerCase()) || void 0 === e ? void 0 : e.includes("internalclient")) || v ? He(He({}, m), {
                            employeeId: v,
                            ldapUsername: b
                        }) : He(He({}, m), {
                            rcid: u,
                            email_verified: p,
                            picture: h,
                            lrat: f
                        })
                    }, e.prototype.checkForTokens = function() {
                        return Ge(this, void 0, void 0, (function() {
                            var e, t, n, o, i, r, c, a, s, l;
                            return We(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        if (this.log("checkForTokens"), this.checkInitiated(), e = Number.POSITIVE_INFINITY, t = (this.getCachedToken(g.ID_TOKEN) || {}).expires, n = void 0 === t ? e : t, o = (this.getCachedToken(g.ACCESS_TOKEN) || {}).expires, i = void 0 === o ? e : o, r = Math.min(n, i), c = this.config.msToRefresh || R, r === e) return [3, 6];
                                        if (a = Date.now(), !(r - a < c)) return [3, 5];
                                        d.label = 1;
                                    case 1:
                                        return d.trys.push([1, 3, , 4]), [4, this.refreshTokens()];
                                    case 2:
                                        return d.sent(), [2, {
                                            ok: !0
                                        }];
                                    case 3:
                                        return s = d.sent(), l = s, this.log("checkForTokens :: unable to refresh token " + (l.message ? ":: " + l.message : "")), this.broadcast(_.REFRESH_ERROR), [2, Promise.reject({
                                            ok: !1,
                                            error: $
                                        })];
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        return this.registerRefresh(r), [2, {
                                            ok: !0
                                        }];
                                    case 6:
                                        return [2, {
                                            ok: !0
                                        }]
                                }
                            }))
                        }))
                    }, e.prototype.on = function(e, t) {
                        var n = this.handlers.get(e) || new Set;
                        n.add(t), this.handlers.set(e, n)
                    }, e.prototype.off = function(e, t) {
                        var n = this.handlers.get(e);
                        n && n.delete(t)
                    }, e.prototype.getB2cUrlPolicy = function(e) {
                        var t = e.state,
                            n = e.redirectUri,
                            o = "state",
                            i = Le(t ? o + "|" + t : o);
                        return this.buildUrl(K, {
                            state: i,
                            scope: "openid",
                            responseType: "id_token",
                            redirectUri: n
                        })
                    }, e.prototype.sendConfirmationEmail = function(e) {
                        var t = e.state,
                            n = e.redirectUri;
                        return Ge(this, void 0, void 0, (function() {
                            var e, o, i, r, c, a;
                            return We(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (this.log("sendConfirmationEmail"), this.checkInitiated(), !n) throw new Error(ee);
                                        return e = this.getAccessToken(), o = (this.getCachedToken(g.ID_TOKEN) || {}).token, e && o ? (i = JSON.parse(Me(o.split(".")[1])).azpContext, r = ue[this.callConfig.env], c = encodeURIComponent(this.getB2cUrlPolicy({
                                            state: t,
                                            redirectUri: n
                                        })), [4, window.fetch(r + "/id/v3/accounts/me/send-confirmation-email?azpContext=" + i + "&b2CUrlPolicy=" + c, {
                                            method: "post",
                                            headers: {
                                                Authorization: "Bearer " + e
                                            }
                                        })]) : (this.log("sendConfirmationEmail :: no logged in user"), [2, Promise.reject()]);
                                    case 1:
                                        return (a = s.sent()).status < 200 || a.status >= 300 ? (this.log("sendConfirmationEmail :: error when requesting"), [2, Promise.reject()]) : [2, Promise.resolve()]
                                }
                            }))
                        }))
                    }, e.prototype.getStateFromUrl = function() {
                        var e, t = window.location.hash;
                        if (!t) throw new Error("No fragment present");
                        var n = null === (e = t.substring(1).split("&").find((function(e) {
                            return e.startsWith("state=")
                        }))) || void 0 === e ? void 0 : e.split("state=")[1];
                        return Me(decodeURIComponent(n || "")).split("|")[1]
                    }, e.prototype.expireTokens = function() {
                        var e = this.getCachedToken(g.ID_TOKEN),
                            t = this.getCachedToken(g.ACCESS_TOKEN),
                            n = Date.now();
                        e && (e.expires = n, this.persistence.set(this.getCacheKey(g.ID_TOKEN, this.config.clientId), Le(JSON.stringify(e)), !1, 0)), t && (t.expires = n, this.persistence.set(this.getCacheKey(g.ACCESS_TOKEN, this.config.clientId), Le(JSON.stringify(t)), !1, 0))
                    }, e.prototype.invalidateTokens = function() {
                        var e = this.getCachedToken(g.ID_TOKEN),
                            t = this.getCachedToken(g.ACCESS_TOKEN),
                            n = this.getCachedToken(g.REFRESH_TOKEN);
                        if (e) {
                            var o = Date.now() - e.expires;
                            e.token = this.obstructToken(e.token), this.persistence.set(this.getCacheKey(g.ID_TOKEN, this.config.clientId), Le(JSON.stringify(e)), !1, o)
                        }
                        if (t) {
                            o = Date.now() - t.expires;
                            t.token = this.obstructToken(t.token), this.persistence.set(this.getCacheKey(g.ACCESS_TOKEN, this.config.clientId), Le(JSON.stringify(t)), !1, o)
                        }
                        if (n) {
                            o = Date.now() - n.expires;
                            n.token = this.obstructToken(n.token), this.persistence.set(this.getCacheKey(g.REFRESH_TOKEN, this.config.clientId), Le(JSON.stringify(n)), !1, o)
                        }
                    }, e.prototype.obstructToken = function(e) {
                        var t = e.split("."),
                            n = JSON.parse(Me(t[1]));
                        return n.lrat = "0000-0000000", n.extra = "data", t[1] = Le(JSON.stringify(n)), t.join(".")
                    }, e.prototype.getSafariRedirectState = function() {
                        if (Ke() && "function" === typeof this.callConfig.getSafariRefreshState) return this.callConfig.getSafariRefreshState()
                    }, e.prototype.broadcast = function(e) {
                        var t = this.handlers.get(e);
                        t && t.forEach((function(e) {
                            return setTimeout((function() {
                                return e()
                            }))
                        }))
                    }, e.prototype.cleanupFragment = function() {
                        window.history.replaceState({}, document.title, "" + window.location.pathname + window.location.search)
                    }, e.prototype.parseFragment = function(e) {
                        void 0 === e && (e = window), this.log("parseFragment");
                        var t = e.location.href,
                            n = "";
                        if (this.getFlowType() === y.IMPLICIT || this.callConfig.responseMode === h.FRAGMENT ? n = t.split("#")[1] : this.callConfig.responseMode === h.QUERY && (n = t.split("?")[1]), !n) throw new Error("No fragment present");
                        return n.split("&").reduce((function(e, t) {
                            var n = t.indexOf("="),
                                o = t.substring(0, n),
                                i = decodeURIComponent(t.substring(n + 1));
                            return e[o] = i, e
                        }), {})
                    }, e.prototype.getAuthenticationType = function(e) {
                        var t = e.toLowerCase(),
                            n = x.map((function(e) {
                                return e.toLowerCase()
                            })),
                            o = D.map((function(e) {
                                return e.toLowerCase()
                            })),
                            i = U.map((function(e) {
                                return e.toLowerCase()
                            })),
                            r = F.map((function(e) {
                                return e.toLowerCase()
                            })),
                            c = L.map((function(e) {
                                return e.toLowerCase()
                            }));
                        return n.includes(t) || o.includes(t) ? k.LOGIN : i.includes(t) || r.includes(t) ? k.SIGNUP : c.includes(t) ? k.IDPJWTAUTH : k.OTHER
                    }, e.prototype.handleFragment = function(e) {
                        var t;
                        return Ge(this, void 0, void 0, (function() {
                            var n, o, i, r, c, a, s, l, d, u;
                            return We(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        if (this.log("handleFragment"), !(n = e[f.STATE])) return this.log("handleFragment :: no state in response"), [2, Promise.reject({
                                            ok: !1,
                                            error: z
                                        })];
                                        if (o = Me(n).split("|")[1], e[f.ERROR]) return this.log("handleFragment :: " + e[f.ERROR] + " :: " + e[f.ERROR_DESCRIPTION]), [2, Promise.reject({
                                            ok: !1,
                                            error: e[f.ERROR] + " :: " + e[f.ERROR_DESCRIPTION],
                                            state: o
                                        })];
                                        if (this.getFlowType() === y.PKCE && !e[f.ID_TOKEN]) return [2, this.handleFragmentPkce(e, o)];
                                        this.setFlowType(y.IMPLICIT), i = e[f.ID_TOKEN], p.label = 1;
                                    case 1:
                                        return p.trys.push([1, 4, 5, 6]), i ? [4, this.validateJWT(i, n)] : [3, 3];
                                    case 2:
                                        r = p.sent(), this.log("handleFragment :: id_token validated"), p.label = 3;
                                    case 3:
                                        return this.shouldValidateNonceAndState(null !== (t = null === r || void 0 === r ? void 0 : r.acr) && void 0 !== t ? t : "") && (this.validateState(n), this.log("handleFragment :: state validated")), [3, 6];
                                    case 4:
                                        return c = p.sent(), a = c, this.log("handleFragment :: jwt validation failed " + (a.message ? ":: " + a.message : "")), [2, Promise.reject({
                                            ok: !1,
                                            error: a.message,
                                            state: o
                                        })];
                                    case 5:
                                        return (null === r || void 0 === r ? void 0 : r.acr.toLowerCase()) !== q.toLowerCase() && this.clearCache(n), [7];
                                    case 6:
                                        return s = (r || {}).acr, l = void 0 === s ? "" : s, this.shouldValidateNonceAndState(l) ? (this.saveTokens(e, r), [2, Promise.resolve({
                                            ok: !0,
                                            state: o,
                                            authenticationType: this.getAuthenticationType(l)
                                        })]) : (d = (null === r || void 0 === r ? void 0 : r.acr.toLowerCase()) === q.toLowerCase(), u = (null === r || void 0 === r ? void 0 : r.acr.toLowerCase()) === K.toLowerCase(), [2, Promise.reject({
                                            ok: !1,
                                            error: d ? te : ne,
                                            state: o,
                                            emailVerified: u ? null === r || void 0 === r ? void 0 : r.email_verified : void 0
                                        })])
                                }
                            }))
                        }))
                    }, e.prototype.handleFragmentPkce = function(e, t) {
                        var n;
                        return Ge(this, void 0, void 0, (function() {
                            var o, i, r, c, a, s, l, d, u;
                            return We(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        return this.log("handleFragmentPkce"), this.validateState(null === e || void 0 === e ? void 0 : e.state) ? (o = e[f.AUTHORIZATION_CODE]) ? (i = {
                                            nonce: "",
                                            state: "",
                                            scope: "",
                                            responseType: "",
                                            redirectUri: "",
                                            pkceRequestState: w.ACCESS_TOKEN
                                        }, r = this.getPkceChallengePair().code_verifier, c = {
                                            grant_type: "authorization_code",
                                            code_verifier: r,
                                            code: o,
                                            client_secret: null === (n = this.config) || void 0 === n ? void 0 : n.clientSecret
                                        }, a = this.getPkcePolicy(!0), s = !1, [4, this.getPkceAccessToken(a, i, c, e[f.STATE])]) : [2, Promise.reject({
                                            ok: !1,
                                            error: "" + le,
                                            state: t
                                        })] : (this.log("handleFragmentPkce :: invalid state"), [2, Promise.reject({
                                            ok: !1,
                                            error: Z
                                        })]);
                                    case 1:
                                        return (l = p.sent()) && l.error ? (s = !0, this.log("handleFragmentPkce :: failed getting access token :: " + (null === l || void 0 === l ? void 0 : l.error)), -1 === l.error.indexOf("AADB2C90088") ? [3, 3] : (d = this.getExpectedPolicyFromErrorMessage(l.error)) ? (this.log("handleFragmentPkce :: invalid_grant error due to expected policy resulting from flow change from " + a + " to " + d + ". Retrying request with correct policy"), [4, this.getPkceAccessToken(d, i, c, e[f.STATE])]) : [3, 3]) : [3, 3];
                                    case 2:
                                        (null === (l = p.sent()) || void 0 === l ? void 0 : l.access_token) && (s = !1), p.label = 3;
                                    case 3:
                                        return s ? [2, Promise.reject(l)] : (this.clearPkceChallengePair(), u = l, [2, this.validateAndSavePkceFlowTokens(u, e[f.STATE])])
                                }
                            }))
                        }))
                    }, e.prototype.getExpectedPolicyFromErrorMessage = function(e) {
                        var t = null;
                        this.log("getExpectedPolicyFromErrorMessage");
                        var n = null === e || void 0 === e ? void 0 : e.match("Expected Value : (.*?)\\r");
                        return n && n.length > 1 && (t = n[1]), t
                    }, e.prototype.handlePopup = function(e, t) {
                        return Ge(this, void 0, void 0, (function() {
                            var n, o, i;
                            return We(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.log("handlePopup"), n = function(e) {
                                            var t = window.screenLeft ? window.screenLeft : window.screenX,
                                                n = window.screenTop ? window.screenTop : window.screenY,
                                                o = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 2 - 241.5 + t,
                                                i = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 2 - 300 + n,
                                                r = window.open(e, Ie, "left=" + o + ", top=" + i + ", width=483, height=600, scrollbars=yes}");
                                            return null === r || void 0 === r || r.focus(), r
                                        }(e), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.waitForPopupToComplete(n)];
                                    case 2:
                                        return o = r.sent(), [2, this.handleFragment(o)];
                                    case 3:
                                        return i = r.sent(), this.clearCache(t), this.log("handlePopup :: popup handling failed :: " + i), [2, Promise.reject({
                                            ok: !1,
                                            error: i
                                        })];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.handleIframe = function(e, t) {
                        return Ge(this, void 0, void 0, (function() {
                            var n, o, i;
                            return We(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.log("handleIframe"), n = function(e) {
                                            var t = document.createElement("iframe");
                                            return t.src = e, t.style.display = "none", t.width = "1px", t.height = "1px", t.name = "" + Ee + Math.floor(1e4 * Math.random()), document.body.insertAdjacentElement("beforeend", t), t
                                        }(e), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.waitForIframeToComplete(n)];
                                    case 2:
                                        return o = r.sent(), [2, this.handleFragment(o)];
                                    case 3:
                                        return i = r.sent(), this.clearCache(t), this.log("handleIframe :: iframe handling failed :: " + i), [2, Promise.reject({
                                            ok: !1,
                                            error: i
                                        })];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getCacheKey = function(e, t) {
                        return t ? e + "|" + t : e
                    }, e.prototype.getStateId = function(e) {
                        return Me(e).split("|")[0]
                    }, e.prototype.clearCache = function(e) {
                        var t = this.getStateId(e),
                            n = this.getCacheKey(g.STATE, t),
                            o = this.getCacheKey(g.STATE_EXP, t),
                            i = this.getCacheKey(g.NONCE, t);
                        this.persistence.delete(n, !0), this.persistence.delete(i, !0), this.persistence.delete(n), this.persistence.delete(i), this.persistence.delete(o)
                    }, e.prototype.checkCache = function() {
                        var e = this;
                        this.log("checkCache");
                        for (var t = [], n = 0; n < this.persistence.size(); n += 1) {
                            var o = this.persistence.key(n);
                            if (null === o || void 0 === o ? void 0 : o.startsWith(g.STATE_EXP)) {
                                var i = o.split("|")[1],
                                    r = this.getCacheKey(g.STATE, i),
                                    c = this.persistence.get(r),
                                    a = this.persistence.get(o);
                                try {
                                    var s = new Date(a).getTime();
                                    if (s > Date.now()) {
                                        t.push([s, c]);
                                        continue
                                    }
                                } catch (l) {}
                                this.log("checkCache :: removing state and nonce for stateId " + i), c && this.clearCache(c)
                            }
                        }
                        t.sort((function(e, t) {
                            return e[0] - t[0]
                        })).forEach((function(t, n, o) {
                            var i = t[1];
                            n < o.length - 3 && e.clearCache(i)
                        }))
                    }, e.prototype.buildUrl = function(e, t) {
                        this.log("buildUrl");
                        var n = Oe(e) ? M[e] : e,
                            o = t.nonce,
                            i = t.state,
                            r = t.scope,
                            c = t.responseType,
                            a = t.responseMode,
                            s = t.redirectUri,
                            l = t.isRenewal,
                            d = t.withPrompt,
                            u = void 0 !== d && d,
                            p = t.mcmId,
                            h = t.mcaId,
                            f = t.cbcVisitorId,
                            g = this.getBaseURL() + "/" + n + "/oauth2/v2.0/authorize",
                            v = "?client_id=" + this.config.clientId,
                            b = "&redirect_uri=" + encodeURIComponent(this.getCompleteCallback(s)),
                            m = o ? "&nonce=" + o : "",
                            y = "&scope=" + encodeURIComponent(r),
                            w = "&response_type=" + encodeURIComponent(c),
                            _ = "&response_mode=" + encodeURIComponent(a),
                            k = "&response_mode_value=" + encodeURIComponent(a),
                            T = this.getPromptValue(l, u),
                            C = i ? encodeURIComponent(i) : "";
                        return "" + g + v + m + b + y + w + _ + k + T + (i ? "&state=" + C : "") + (i ? "&state_value=" + C : "") + ("&ui_locales=" + this.config.locale) + this.getVisitorId(p, h) + (f ? "&cv=" + f : "")
                    }, e.prototype.buildUrlPkce = function(e, t) {
                        switch (this.log("buildUrlPkce"), t.pkceRequestState) {
                            case w.ACCESS_TOKEN:
                            case w.REFRESH_TOKEN:
                                return this.getBaseURL() + "/" + (Oe(e) ? M[e] : e) + "/oauth2/v2.0/token";
                            case w.AUTHORIZATION_CODE:
                            default:
                                var n = this.getPkceChallengePair(),
                                    o = n.code_challenge,
                                    i = n.code_challenge_method;
                                return this.setPkcePolicy(e), this.buildUrl(e, t) + "&code_challenge=" + o + "&code_challenge_method=" + i
                        }
                    }, e.prototype.buildUrlIdpJwt = function(e, t) {
                        this.log("buildUrlIdpJwt");
                        var n = Oe(e) ? M[e] : e,
                            o = this.getBaseURL();
                        switch (t.pkceRequestState) {
                            case w.ACCESS_TOKEN:
                            case w.REFRESH_TOKEN:
                                return o + "/" + n + "/oauth2/v2.0/token";
                            case w.AUTHORIZATION_CODE:
                            default:
                                return o + "/" + n + "/oauth2/v2.0/authorize"
                        }
                    }, e.prototype.getPromptValue = function(e, t) {
                        return e ? "&prompt=none" : t ? "&prompt=login" : ""
                    }, e.prototype.getVisitorId = function(e, t) {
                        var n = "",
                            o = Math.floor(Date.now() / 1e3);
                        return e && !t ? n = "MCMID=" + e : e && t && (n = "MCMID=" + e + "|MCAID=" + t), n ? "&adobe_mc=" + encodeURIComponent(n + "|MCORGID=55E654E45894AF350A495CFE@AdobeOrg|TS=" + o) : ""
                    }, e.prototype.getCompleteCallback = function(e) {
                        var t = e;
                        return e.startsWith("/") && !e.startsWith("//") && (t = "" + window.location.origin + e), new URL(t).toString()
                    }, e.prototype.prepareAndStoreRequestValues = function(e, t) {
                        this.log("prepareAndStoreRequestValues");
                        var n = null !== t && void 0 !== t ? t : C(),
                            o = C(),
                            i = 2628e5,
                            r = new Date(Date.now() + i).toISOString(),
                            c = Le(e ? o + "|" + e : o),
                            a = this.getCacheKey(g.STATE, o),
                            s = this.getCacheKey(g.NONCE, o),
                            l = this.getCacheKey(g.STATE_EXP, o);
                        return this.persistence.set(a, c, !1, i), this.persistence.set(s, n, !1, i), this.persistence.set(l, r, !1, i), this.checkCache(), {
                            nonce: n,
                            state: c
                        }
                    }, e.prototype.saveTokens = function(e, t) {
                        this.log("saveTokens");
                        var n, o = e[f.ID_TOKEN],
                            i = e[f.ACCESS_TOKEN],
                            r = e[f.EXPIRES_IN],
                            c = 7776e6;
                        if (o && t) {
                            var a = this.getCacheKey(g.ID_TOKEN, this.config.clientId),
                                s = 1e3 * t.exp,
                                l = {
                                    token: o,
                                    expires: s,
                                    policy: t.acr
                                };
                            this.persistence.set(a, Le(JSON.stringify(l)), !1, c), this.log("saveTokens :: saved id token"), n = s
                        }
                        if (i && r) {
                            var d = this.getCacheKey(g.ACCESS_TOKEN, this.config.clientId),
                                u = 1e3 * Number(r),
                                p = Date.now() + u;
                            l = {
                                token: i,
                                expires: p
                            };
                            this.persistence.set(d, Le(JSON.stringify(l)), !1, c), this.log("saveTokens :: saved access token"), (!n || n > p) && (n = p)
                        }
                        this.broadcast(_.SAVE_SUCCESS), n && this.registerRefresh(n)
                    }, e.prototype.saveTokensPkceFlow = function(e) {
                        this.log("saveTokensPkceFlow");
                        var t = e[f.ID_TOKEN],
                            n = e[f.ACCESS_TOKEN],
                            o = e[f.REFRESH_TOKEN],
                            i = e[f.EXPIRES_IN],
                            r = Date.now();
                        if (t) {
                            var c = this.getCacheKey(g.ID_TOKEN, this.config.clientId),
                                a = JSON.parse(Me(t.split(".")[1])).acr,
                                s = (d = 1e3 * e.id_token_expires_in) + r,
                                l = {
                                    token: t,
                                    expires: d + r,
                                    policy: a
                                };
                            this.persistence.set(c, Le(JSON.stringify(l)), !1, s), this.log("saveTokensPkceFlow :: saved id token")
                        }
                        if (o) {
                            var d;
                            c = this.getCacheKey(g.REFRESH_TOKEN, this.config.clientId), s = (d = 1e3 * e.refresh_token_expires_in) + r, l = {
                                token: o,
                                expires: d + r
                            };
                            this.persistence.set(c, Le(JSON.stringify(l)), !1, s), this.log("saveTokensPkceFlow :: saved refresh token")
                        }
                        if (n && i) {
                            var u = this.getCacheKey(g.ACCESS_TOKEN, this.config.clientId),
                                p = 1e3 * Number(i);
                            l = {
                                token: n,
                                expires: r + p
                            };
                            this.persistence.set(u, Le(JSON.stringify(l)), !1, p), this.log("saveTokensPkceFlow :: saved access token")
                        }
                        this.broadcast(_.SAVE_SUCCESS);
                        var h = Math.min(e.expires_in, e.id_token_expires_in, e.refresh_token_expires_in);
                        h && this.registerRefresh(1e3 * h + r)
                    }, e.prototype.registerRefresh = function(e) {
                        var t = this;
                        this.log("registerRefresh");
                        var n = e - Date.now() - (this.config.msToRefresh || R);
                        this.timeoutInstance || (this.timeoutInstance = P.getInstance()), this.timeoutInstance.clearTimeout(), this.timeoutInstance.setTimeout((function() {
                            return Ge(t, void 0, void 0, (function() {
                                var e, t;
                                return We(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.refreshTokens()];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return e = n.sent(), t = e, this.log("registerRefresh :: refresh failed " + (t.message ? ":: " + t.message : "")), this.broadcast(_.REFRESH_ERROR), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        }), n)
                    }, e.prototype.getB2CKeys = function() {
                        return Ge(this, void 0, void 0, (function() {
                            var e, t, n;
                            return We(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.log("getB2CKeys"), e = this.getB2CDiscoveryEndpoint(), [4, window.fetch(e).then((function(e) {
                                            return e.json()
                                        })).then((function(e) {
                                            return e.jwks_uri
                                        }))];
                                    case 1:
                                        return t = o.sent(), [4, window.fetch(t).then((function(e) {
                                            return e.json()
                                        })).then((function(e) {
                                            return e.keys
                                        }))];
                                    case 2:
                                        if (n = o.sent(), this.keys = ze(ze([], this.keys), n), !!!this.keys.length) throw this.log("getB2CKeys :: unable to retrieve B2C keys"), new Error("Unable to retrieve B2C keys.");
                                        return [2, n]
                                }
                            }))
                        }))
                    }, e.prototype.validateJWTSignature = function(e, t, n) {
                        return Ge(this, void 0, void 0, (function() {
                            var o, c, a, s, l, d, u, p, h, f;
                            return We(this, (function(g) {
                                switch (g.label) {
                                    case 0:
                                        return this.log("validateJWTSignature"), (o = !!this.keys.length) && !n ? [3, 2] : [4, this.getB2CKeys()];
                                    case 1:
                                        g.sent(), g.label = 2;
                                    case 2:
                                        c = this.config.clockTolerance || 60, a = JSON.parse(Me(e.split(".")[0])).alg, d = 0, g.label = 3;
                                    case 3:
                                        return d < this.keys.length ? (u = this.keys[d], [4, (0, i.Og)(u, a)]) : [3, 9];
                                    case 4:
                                        p = g.sent(), g.label = 5;
                                    case 5:
                                        return g.trys.push([5, 7, , 8]), [4, (0, r.B)(e, p)];
                                    case 6:
                                        return s = g.sent(), [3, 9];
                                    case 7:
                                        return h = g.sent(), l = h.message, f = e.split(".")[1], l += " - Token payload : " + f, l += " - Date.Now() + ClockTolerance : " + t + " + " + c, [3, 8];
                                    case 8:
                                        return d += 1, [3, 3];
                                    case 9:
                                        if (!n && o) return [2, this.validateJWTSignature(e, t, !0)];
                                        if (!s) throw this.log("validateJWTSignature :: unable to validate token -> " + l), new Error("Unable to validate token -> " + l);
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.validateJWTPayload = function(e, t, n) {
                        return Ge(this, void 0, void 0, (function() {
                            var o, i, r, c, a, s, l, d, u, p;
                            return We(this, (function(h) {
                                if (this.log("validateJWTPayload"), o = this.config.clockTolerance || 60, i = n + o, r = JSON.parse(Me(e.split(".")[1])), c = r.aud, a = r.acr, s = r.exp, l = r.iat, d = r.iss, u = r.nbf, p = r.nonce, this.shouldValidateNonceAndState(a) && this.validateNonce(p, t), "number" !== typeof r.iat) throw this.log('validateJWTPayload :: "iat" is not a number'), new S('"iat" claim must be a number', "iat", "invalid");
                                if ("number" !== typeof r.nbf) throw this.log('validateJWTPayload :: "nbf" is not a number'), new S('"nbf" claim must be a number', "nbf", "invalid");
                                if ("number" !== typeof r.exp) throw this.log('validateJWTPayload :: "exp" is not a number'), new S('"exp" claim must be a number', "exp", "invalid");
                                if (n - o >= s) throw this.log("validateJWTPayload :: invalid exp"), new S('"exp" claim timestamp check failed', "exp", "check_failed");
                                if (i < l) throw this.log("validateJWTPayload :: invalid iat"), new S('"iat" claim timestamp check failed', "iat", "check_failed");
                                if (i < u) throw this.log("validateJWTPayload :: invalid nbf"), new S('"nbf" claim timestamp check failed', "nbf", "check_failed");
                                if (c !== this.config.clientId) throw this.log("validateJWTPayload :: invalid aud"), new S('unexpected "aud" claim value', "aud", "check_failed");
                                if (d !== he[this.callConfig.env] && d !== ve[this.callConfig.env]) throw this.log("validateJWTPayload :: invalid iss"), new S('unexpected "iss" claim value', "iss", "check_failed");
                                return [2, r]
                            }))
                        }))
                    }, e.prototype.validateJWT = function(e, t) {
                        return Ge(this, void 0, void 0, (function() {
                            var n;
                            return We(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.log("validateJWT"), n = Math.floor(Date.now() / 1e3), this.config.skipSignatureValidation ? [3, 2] : [4, this.validateJWTSignature(e, n)];
                                    case 1:
                                        o.sent(), o.label = 2;
                                    case 2:
                                        return [2, this.validateJWTPayload(e, t, n)]
                                }
                            }))
                        }))
                    }, e.prototype.validateNonce = function(e, t) {
                        if (this.log("validateNonce"), !e) throw this.log("validateNonce :: missing nonce"), new S('Missing "nonce"', "nonce", "missing");
                        var n = this.getStateId(t),
                            o = this.getCacheKey(g.NONCE, n);
                        if (this.persistence.get(o) !== e) throw this.log("validateNonce :: invalid nonce"), new S('unexpected "nonce" claim value', "nonce", "check_failed")
                    }, e.prototype.validateState = function(e) {
                        this.log("validateState");
                        var t = this.getStateId(e),
                            n = this.getCacheKey(g.STATE, t);
                        if (this.persistence.get(n) !== e) throw this.log("validateState :: invalid state"), new S('unexpected "state" claim value', "state", "check_failed");
                        return !0
                    }, e.prototype.waitForIframeToComplete = function(e) {
                        var t, n, o = this;
                        this.log("waitForIframeToComplete");
                        var i = e.contentWindow,
                            r = (null !== (n = null === (t = this.callConfig) || void 0 === t ? void 0 : t.frameTimeoutMs) && void 0 !== n ? n : N.frameTimeoutMs) / A,
                            c = 0,
                            a = function(t, n) {
                                if (document.hidden || (c += 1), c > r) return o.log("waitForIframeToComplete :: timeout"), qe(e), void n(j);
                                var s;
                                try {
                                    s = null === i || void 0 === i ? void 0 : i.location.href
                                } catch (l) {}
                                if (s && (null === i || void 0 === i ? void 0 : i.location.hash)) return t(o.parseFragment(i)), void qe(e);
                                setTimeout((function() {
                                    return a(t, n)
                                }), A)
                            };
                        return new Promise((function(e, t) {
                            setTimeout((function() {
                                return a(e, t)
                            }), A)
                        }))
                    }, e.prototype.waitForPopupToComplete = function(e) {
                        var t, n, o = this;
                        this.log("waitForPopupToComplete");
                        var i = (null !== (n = null === (t = this.callConfig) || void 0 === t ? void 0 : t.frameTimeoutMs) && void 0 !== n ? n : N.frameTimeoutMs) / A,
                            r = 0;
                        if (!e) return this.log("waitForPopupToComplete :: no popup"), Promise.reject(W);
                        var c = function(t, n) {
                            if (null === e || void 0 === e ? void 0 : e.closed) return o.log("waitForPopupToComplete :: popup already closed"), void n(X);
                            var a;
                            try {
                                a = null === e || void 0 === e ? void 0 : e.location.href
                            } catch (s) {}
                            return document.hidden || (r += 1), a && (-1 !== a.indexOf("?") || (null === e || void 0 === e ? void 0 : e.location.hash)) ? (t(o.parseFragment(e)), void e.close()) : r > i ? (o.log("waitForPopupToComplete :: timeout"), n(Y), void e.close()) : (r += 1, void setTimeout((function() {
                                return c(t, n)
                            }), A))
                        };
                        return new Promise((function(e, t) {
                            setTimeout((function() {
                                return c(e, t)
                            }), A)
                        }))
                    }, e.prototype.shouldValidateNonceAndState = function(e) {
                        var t = e.toLowerCase();
                        return t !== K.toLowerCase() && t !== q.toLowerCase() && t !== M.idpJwtAuth.toLowerCase()
                    }, e.prototype.checkInitiated = function() {
                        if (this.log("checkInitiated"), !this.initiated) throw new Error(J)
                    }, e.prototype.log = function(e, t) {
                        var n;
                        void 0 === t && (t = !1), (t || (null === (n = this.config) || void 0 === n ? void 0 : n.debug)) && console.log("\ud83d\udd27 RCAuthClient Debug: " + e)
                    }, e
                }(),
                Qe = "#069",
                Xe = "#222",
                Ye = "#fff",
                $e = "0, 0, 0",
                et = "rgba(" + $e + ", .1)",
                tt = '\n@font-face {\n  font-family: \'Radio-Canada\';\n  src: url("https://ici.radio-canada.ca/app/shellunit/fonts/Radio-Canada/src-webfont-regular-v1.woff2") format("woff2"),\n    url("https://ici.radio-canada.ca/app/shellunit/fonts/Radio-Canada/src-webfont-regular-v1.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \'Radio-Canada\';\n  src: url("https://ici.radio-canada.ca/app/shellunit/fonts/Radio-Canada/src-webfont-medium-v1.woff2") format("woff2"),\n    url("https://ici.radio-canada.ca/app/shellunit/fonts/Radio-Canada/src-webfont-medium-v1.woff") format("woff");\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap;\n}\n\n[class^=cbcrcb2c-] {\n  box-sizing: border-box;\n  font-family: \'Radio-Canada\', Helvetica, Arial, sans-serif;\n}\n\n.cbcrcb2c-btn {\n  background: ' + Ye + ";\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.3;\n  height: 48px;\n  margin: 0 5px 0 0;\n  overflow: hidden;\n  padding: 0;\n  transition: box-shadow .1s linear;\n  white-space: nowrap;\n}\n\n.cbcrcb2c-btn__content {\n  align-content: stretch;\n  align-items: center;\n  background: transparent;\n  color: " + Qe + ";\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  padding: 0 15px;\n  text-align: center;\n  transition: background-color .1s linear;\n  width: 100%;\n}\n\n.cbcrcb2c-btn:not(.cbcrcb2c-btn--primary) .cbcrcb2c-btn__content {\n  background: transparent;\n  padding: 0 10px;\n  position: relative;\n}\n\n.cbcrcb2c-btn:not(.cbcrcb2c-btn--primary) .cbcrcb2c-btn__content:after {\n  background: currentColor;\n  bottom: 5px;\n  content: '';\n  display: none;\n  height: 2px;\n  left: 10px;\n  position: absolute;\n  width: calc(100% - 20px);\n}\n\n.cbcrcb2c-btn:not(.cbcrcb2c-btn--primary):hover .cbcrcb2c-btn__content:after {\n  display: block;\n}\n\n.cbcrcb2c-btn:not(.cbcrcb2c-btn--primary):active .cbcrcb2c-btn__content {\n  background: " + Qe + ";\n  color: " + Ye + ";\n}\n\n.cbcrcb2c-btn:not(.cbcrcb2c-btn--primary):active .cbcrcb2c-btn__content:after {\n  display: none;\n}\n\n.cbcrcb2c-btn--primary {\n  background: " + Qe + ";\n  border-radius: 2px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);\n  color: " + Ye + ";\n  margin: 0;\n}\n\n.cbcrcb2c-btn__icon {\n  background: " + Ye + ";\n  border: 1px solid " + Xe + ";\n  border-radius: 100%;\n  color: " + Xe + ";\n  display: none;\n  height: 40px;\n  position: relative;\n  transition-property: background, color;\n  transition-duration: .1s;\n  transition-timing-function: linear;\n  width: 40px;\n}\n\n.cbcrcb2c-btn__icon svg {\n  fill: currentColor;\n  height: 20px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 20px;\n}\n\n.cbcrcb2c-btn--primary .cbcrcb2c-btn__content {\n  color: " + Ye + ";\n}\n\n.cbcrcb2c-btn--primary:hover {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.32);\n}\n\n.cbcrcb2c-btn--primary .cbcrcb2c-btn__content {\n  background: " + et + ";\n}\n\n.cbcrcb2c-btn--primary:hover .cbcrcb2c-btn__content {\n  background: " + ("rgba(" + "255, 255, 255" + ", .16)") + ";\n}\n\n.cbcrcb2c-btn--primary:hover .cbcrcb2c-btn__icon {\n  background: " + Xe + ";\n  color: " + Ye + ";\n}\n\n.cbcrcb2c-btn--primary:active .cbcrcb2c-btn__content {\n  background: " + ("rgba(" + $e + ", .4)") + ";\n}\n\n@media screen and (min-width: 1240px) {\n  .cbcrcb2c-btn {\n    font-size: 14px;\n    height: 36px;\n  }\n\n  .cbcrcb2c-btn .cbcrcb2c-btn__content {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n  }\n\n  .cbcrcb2c-btn:not(.cbcrcb2c-btn--primary) .cbcrcb2c-btn__content:after {\n    bottom: 0;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .cbcrcb2c-btn:not(.cbcrcb2c-btn--primary) {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .cbcrcb2c-btn__icon {\n    display: block;\n  }\n\n  .cbcrcb2c-btn__content {\n    background: transparent !important;\n    border: 0 !important;\n    clip: rect(1px, 1px, 1px, 1px) !important;\n    height: 1px !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 1px !important;\n  }\n\n  .cbcrcb2c-btn--primary {\n    border-radius: 100%;\n    box-shadow: none;\n    height: 40px;\n    background: transparent;\n    background-radius: 100%;\n  }\n\n  .cbcrcb2c-btn--primary:hover {\n    box-shadow: none;\n  }\n}\n\n.cbcrcb2c-logged {\n  display: inline-block;\n  position: relative;\n}\n\n.cbcrcb2c-logged__toggle {\n  align-items: center;\n  background: " + Qe + ";\n  border-radius: 100%;\n  border: 0;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);\n  color: " + Ye + ";\n  cursor: pointer;\n  display: flex;\n  font-size: 14px;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n}\n\n.cbcrcb2c-logged__toggle img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.cbcrcb2c-logged__logout {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  background: " + Ye + ";\n  border: 0;\n  border-radius: 2px;\n  color: " + Xe + ";\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1.3;\n  margin-top: 5px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  right: 10px;\n  top: 100%;\n  white-space: nowrap;\n}\n\n.cbcrcb2c-logged__logout--left {\n  right: auto;\n  left: 10px;\n}\n\n.cbcrcb2c-logged__logout:not(.cbcrcb2c-logged__logout--active) {\n  display: none;\n}\n\n.cbcrcb2c-logged__logout-content {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 25px;\n}\n\n.cbcrcb2c-logged__logout .cbcrcb2c-logged__logout-content {\n  background: transparent;\n}\n\n.cbcrcb2c-logged__logout:hover .cbcrcb2c-logged__logout-content{\n  background: " + ("rgba(" + $e + ", .08)") + ";\n}\n\n.cbcrcb2c-logged__logout:active .cbcrcb2c-logged__logout-content {\n  background: " + et + ";\n}\n\n.cbcrcb2c-logged__logout svg {\n  fill: currentColor;\n  height: 20px;\n  margin-right: 5px;\n  width: 20px;\n}\n",
                nt = function() {
                    return nt = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, nt.apply(this, arguments)
                },
                ot = function(e, t, n, o) {
                    return new(n || (n = Promise))((function(i, r) {
                        function c(e) {
                            try {
                                s(o.next(e))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function a(e) {
                            try {
                                s(o.throw(e))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(c, a)
                        }
                        s((o = o.apply(e, t || [])).next())
                    }))
                },
                it = function(e, t) {
                    var n, o, i, r, c = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function a(r) {
                        return function(a) {
                            return function(r) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            i = r;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, o = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                                c.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && c.label < i[1]) {
                                                c.label = i[1], i = r;
                                                break
                                            }
                                            if (i && c.label < i[2]) {
                                                c.label = i[2], c.ops.push(r);
                                                break
                                            }
                                            i[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    r = t.call(e, c)
                                } catch (a) {
                                    r = [6, a], o = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, a])
                        }
                    }
                };
            ! function() {
                function e(e, t) {
                    if (!e) throw new Error(ye);
                    if (!(null === t || void 0 === t ? void 0 : t.selector)) throw new Error(Te);
                    if (!(null === t || void 0 === t ? void 0 : t.redirectUri)) throw new Error(_e);
                    if (!(null === t || void 0 === t ? void 0 : t.logoutRedirectUri)) throw new Error(we);
                    this.client = e, this.opts = t
                }
                e.prototype.init = function() {
                    return ot(this, void 0, void 0, (function() {
                        var e, t = this;
                        return it(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e = !1, this.addStyles(), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, this.client.checkForTokens()];
                                case 2:
                                    return n.sent(), e = !!this.client.getIdToken(), [3, 4];
                                case 3:
                                    return n.sent(), [3, 4];
                                case 4:
                                    return e ? this.displayLoggedInUser() : this.displayLoggedOutUser(), this.client.on(_.SAVE_SUCCESS, (function() {
                                        return t.displayLoggedInUser()
                                    })), [2]
                            }
                        }))
                    }))
                }, e.prototype.addStyles = function() {
                    var e = "cbcrcb2c-styles",
                        t = document.head.querySelector("#" + e);
                    t || ((t = document.createElement("style")).id = e, t.appendChild(document.createTextNode(tt)), document.head.appendChild(t))
                }, e.prototype.setContainerToElements = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n, o = this.opts.selector;
                    if (!(n = "string" === typeof o ? document.querySelector(o) : o)) throw new Error(ke);
                    n.innerHTML = "", e.forEach((function(e) {
                        n.appendChild(e)
                    }))
                }, e.prototype.createButton = function(e) {
                    var t = this,
                        n = nt(nt({}, me), this.opts),
                        o = n.useCreateAccountPrimary,
                        i = n.isInternal,
                        r = n.redirectUri,
                        c = n.usePopups,
                        a = n.text,
                        s = !o && "login" === e || i || o && !i && "createAccount" === e,
                        l = a[e],
                        d = document.createElement("button");
                    d.setAttribute("title", l), d.className = "cbcrcb2c-btn " + (s ? "cbcrcb2c-btn--primary" : ""), d.addEventListener("click", (function() {
                        t.client.initiated && t.client[e]({
                            isInternal: i,
                            redirectUri: r,
                            requestType: c ? m.POPUP : m.REDIRECT
                        })
                    }));
                    var u = document.createElement("div");
                    return u.className = "cbcrcb2c-btn__content", u.innerHTML = "" + l, d.appendChild(u), s && d.insertAdjacentHTML("beforeend", '<div class="cbcrcb2c-btn__icon">\n  <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n    <text opacity="0">Ic\xf4ne profile</text>\n    <path d="M336,168c0,66.274-42.981,132-96,132s-96-65.726-96-132S186.981,60,240,60,336,101.726,336,168ZM304.641,307.523a11.919,11.919,0,0,0-13.74-.2C280.773,314.38,262.792,324,240,324s-40.773-9.62-50.9-16.678a11.919,11.919,0,0,0-13.74.2c-19.473,\n      13.755-93.975,12.223-102.553,55.883a11.964,11.964,0,0,0,5.762,12.613C98.383,387.562,161.082,420,240,420s141.617-32.438,161.431-43.982a11.964,11.964,0,0,0,5.762-12.613C398.615,319.747,324.113,321.278,304.641,307.523Z" />\n  </svg>\n</div>'), d
                }, e.prototype.createLoginButton = function() {
                    return this.createButton("login")
                }, e.prototype.createCreateAccountButton = function() {
                    return this.createButton("createAccount")
                }, e.prototype.displayLoggedOutUser = function() {
                    var e = nt(nt({}, me), this.opts),
                        t = e.useCreateAccountPrimary,
                        n = e.isInternal,
                        o = [];
                    if (o.push(this.createLoginButton()), !n) {
                        var i = this.createCreateAccountButton();
                        t ? o.push(i) : o.unshift(i)
                    }
                    this.setContainerToElements.apply(this, o)
                }, e.prototype.getIdTokenPayload = function() {
                    var e, t, n = this.client.getIdToken(),
                        o = JSON.parse(Me(n.split(".")[1])) || {},
                        i = o.family_name,
                        r = o.given_name,
                        c = o.name,
                        a = o.picture,
                        s = "";
                    return s = r && i || !c ? (null !== (e = null === r || void 0 === r ? void 0 : r.charAt(0).toUpperCase()) && void 0 !== e ? e : "") + " " + (null !== (t = null === i || void 0 === i ? void 0 : i.charAt(0).toUpperCase()) && void 0 !== t ? t : "") : c.split(" ").filter((function(e, t) {
                        return t < 2
                    })).map((function(e) {
                        return e.charAt(0).toUpperCase()
                    })).join(""), {
                        initials: s,
                        name: c,
                        picture: a
                    }
                }, e.prototype.hideLogoutContainer = function(e, t) {
                    var n = nt(nt({}, me), this.opts).text;
                    e && (e.classList.remove("cbcrcb2c-logged__toggle--active"), e.setAttribute("aria-label", n.loggedToggleLabelInactive), e.setAttribute("aria-expanded", "false")), t && (t.classList.remove("cbcrcb2c-logged__logout--active"), t.classList.remove("cbcrcb2c-logged__logout--left"))
                }, e.prototype.checkLogoutIsVisible = function(e) {
                    e.style.display = "block", e.getBoundingClientRect().left < 0 && e.classList.add("cbcrcb2c-logged__logout--left"), e.removeAttribute("style")
                }, e.prototype.showLogoutContainer = function(e, t) {
                    var n = nt(nt({}, me), this.opts).text;
                    e && (e.classList.add("cbcrcb2c-logged__toggle--active"), e.setAttribute("aria-label", n.loggedToggleLabelActive), e.setAttribute("aria-expanded", "true")), t && (this.checkLogoutIsVisible(t), t.classList.add("cbcrcb2c-logged__logout--active"))
                }, e.prototype.toggleLogoutContainer = function(e) {
                    var t = e.currentTarget,
                        n = t.parentElement.querySelector(".cbcrcb2c-logged__logout");
                    t.classList.contains("cbcrcb2c-logged__toggle--active") ? this.hideLogoutContainer(t, n) : this.showLogoutContainer(t, n)
                }, e.prototype.createLogoutToggle = function(e) {
                    var t = this,
                        n = nt(nt({}, me), this.opts).text,
                        o = this.getIdTokenPayload(),
                        i = o.initials,
                        r = o.name,
                        c = o.picture,
                        a = document.createElement("button");
                    return a.className = "cbcrcb2c-logged__toggle", a.setAttribute("aria-label", n.loggedToggleLabelInactive), a.setAttribute("aria-expanded", "false"), a.setAttribute("aria-controls", e), a.innerHTML = c ? '<img src="' + c + '" alt="' + r + '"/>' : i, a.addEventListener("click", (function(e) {
                        t.toggleLogoutContainer(e)
                    })), a
                }, e.prototype.createLogoutBtn = function(e) {
                    var t = this,
                        n = nt(nt({}, me), this.opts),
                        o = n.logoutRedirectUri,
                        i = n.text,
                        r = document.createElement("button");
                    r.className = "cbcrcb2c-logged__logout", r.id = e, r.addEventListener("click", (function() {
                        t.client.logout({
                            redirectUri: o
                        })
                    }));
                    var c = document.createElement("div");
                    return c.className = "cbcrcb2c-logged__logout-content", c.innerHTML = '<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n  <text opacity="0">Ic\xf4ne sortie</text>\n  <path d="M307.029,372H132a12,12,0,0,1-12-12V120a12,12,0,0,1,12-12H307.029a12,12,0,0,1,8.485,3.515L360,156V72a12,12,0,0,0-12-12H84A12,12,0,0,0,72,72V408a12,12,0,0,0,12,12H348a12,12,0,0,0,12-12V324l-44.485,44.485A12,12,0,0,1,307.029,372Z" />\n  <path d="M302.607,146.691l-16.973,16.973a12,12,0,0,0,0,16.971l35.335,35.334-140.969,0a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12l140.969,0-35.277,35.4a12,12,0,0,0,0,16.971l16.973,16.973a12,12,0,0,0,16.968,0l84.85-84.855a12,12,0,0,0,0-16.976\n    l-84.907-84.793A12,12,0,0,0,302.607,146.691Z" />\n</svg>' + i.logout, r.appendChild(c), r
                }, e.prototype.displayLoggedInUser = function() {
                    var e = "cbcrcb2c-logout-" + Math.floor(1e4 * Math.random()),
                        t = this.createLogoutToggle(e),
                        n = this.createLogoutBtn(e),
                        o = document.createElement("div");
                    o.className = "cbcrcb2c-logged", o.appendChild(t), o.appendChild(n), this.setContainerToElements(o)
                }
            }()
        }
    }
]);
//# sourceMappingURL=../../../sourcemaps/acc-vendor-@cbcrc-sso/b2c-oauth-client.6fceb34caf2df01d06a1.js.map