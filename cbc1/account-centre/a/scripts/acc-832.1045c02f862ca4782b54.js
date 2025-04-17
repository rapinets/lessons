! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cffd5ba8-047d-41c1-a1de-1d591305d3cf", e._sentryDebugIdIdentifier = "sentry-dbid-cffd5ba8-047d-41c1-a1de-1d591305d3cf")
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
    ["acc-832"], {
        "acc-48612": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addEmailForSocialLogin: function() {
                    return N
                },
                checkLoggedInStatus: function() {
                    return T
                },
                getCBCPlusID: function() {
                    return q
                },
                getUserNewsletterSubscriptions: function() {
                    return R
                },
                loadUserData: function() {
                    return I
                },
                logout: function() {
                    return C
                },
                membershipUpdate: function() {
                    return G
                },
                resetMembership: function() {
                    return O
                },
                sendWelcomeEmail: function() {
                    return j
                },
                setUserSession: function() {
                    return V
                },
                updateLRCustomFields: function() {
                    return U
                },
                updateMembership: function() {
                    return _
                },
                updateProfileByToken: function() {
                    return F
                },
                validateAccessToken: function() {
                    return D
                },
                verifyChangedEmailFlow: function() {
                    return B
                },
                verifyEmailFlow: function() {
                    return M
                },
                verifySocialFlow: function() {
                    return L
                }
            });
            var r = n("acc-80296"),
                o = n("acc-10467"),
                c = n("acc-64467"),
                a = n("acc-82284"),
                i = n("acc-54756"),
                u = n.n(i),
                s = (n("acc-81675"), n("acc-29390"), n("acc-15718"), n("acc-77450"), n("acc-75855"), n("acc-94730")),
                l = n("acc-43472"),
                d = n("acc-47594"),
                f = n("acc-46205"),
                p = n("acc-44241"),
                v = n("acc-10615"),
                b = n("acc-76314"),
                g = n.n(b),
                h = n("acc-96875"),
                m = n("acc-1984"),
                w = n("acc-68414"),
                y = n("acc-75375");

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

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach((function(t) {
                        (0, c.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var A = function(e) {
                    return e.membership
                },
                P = function(e, t) {
                    w._.authenticationApi.getProfileByAccessToken((0, s.getSessionToken)(), null, (function(n, r) {
                        if (n) return t(n);
                        e(_({
                            userProfile: r
                        }))
                    }))
                },
                x = 0,
                _ = function(e) {
                    return function(t, n) {
                        if ("object" === (0, a.A)(e)) {
                            var r = ++x,
                                o = performance.now();
                            (0, l.debugConsole)("group", "%cMembership Update #".concat(r, " Started"), "color: #0066cc"), (0, l.debugConsole)("log", "Update #".concat(r, " incoming props:"), e), (0, l.debugConsole)("log", "Update #".concat(r, " stack:"), (new Error).stack);
                            var c = Object.keys(e),
                                i = {},
                                u = A(n());
                            (0, l.debugConsole)("log", "Update #".concat(r, " current state:"), u), c.forEach((function(t) {
                                !Array.isArray(e[t]) && "object" === (0, a.A)(e[t]) && e[t] ? i[t] = E(E({}, u[t]), e[t]) : i[t] = e[t]
                            })), i.community && i.community.data_count && delete i.community.data_count, (0, l.debugConsole)("log", "Update #".concat(r, " final payload:"), i), "isAuthenticated" in i && (0, l.debugConsole)("log", "Update #".concat(r, " authentication change: ").concat(u.isAuthenticated, " \u2192 ").concat(i.isAuthenticated));
                            var s = performance.now() - o;
                            (0, l.debugConsole)("log", "Update #".concat(r, " duration: ").concat(s.toFixed(2), "ms")), (0, l.debugConsole)("groupEnd"), t({
                                type: d.H,
                                payload: i
                            })
                        }
                    }
                },
                O = function() {
                    return function(e) {
                        return new Promise((function(t) {
                            e({
                                type: d.t
                            }), t()
                        }))
                    }
                },
                C = function(e) {
                    return function() {
                        var t = (0, o.A)(u().mark((function t(n) {
                            var r, o;
                            return u().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = (0, m.Ay)(), o = r.logout, !e && (0, s.logoutViafoura)(), t.prev = 2, t.next = 5, n(O());
                                    case 5:
                                        return t.next = 7, (0, s.logoutLoginRadius)();
                                    case 7:
                                        return t.next = 9, new Promise((function(e, t) {
                                            (0, l.trackEvent)("SIGNED OUT", {}, (function() {
                                                e()
                                            }))
                                        }));
                                    case 9:
                                        o(), t.next = 16;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(2), console.error("Error in logout:", t.t0), g().error("logout", t.t0);
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 12]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                S = function() {},
                T = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return function(n) {
                        s.lib.loginRadiusInit("ssoNotLoginThenLogout", {
                            onSuccess: function() {
                                var r = (0, s.getSessionToken)();
                                if (!r) return console.error("No token found! exiting..."), n(_(E({
                                    isAuthenticated: !1
                                }, t))), e();
                                w._.authenticationApi.getProfileByAccessToken(r, null, function() {
                                    var c = (0, o.A)(u().mark((function o(c, a) {
                                        return u().wrap((function(o) {
                                            for (;;) switch (o.prev = o.next) {
                                                case 0:
                                                    if (!c) {
                                                        o.next = 3;
                                                        break
                                                    }
                                                    return n(_(E({
                                                        isAuthenticated: !1
                                                    }, t))), o.abrupt("return", e(c));
                                                case 3:
                                                    return o.next = 5, (0, y.A)(n, r, a, t);
                                                case 5:
                                                case "end":
                                                    return o.stop()
                                            }
                                        }), o)
                                    })));
                                    return function(e, t) {
                                        return c.apply(this, arguments)
                                    }
                                }())
                            },
                            onError: function(r) {
                                n(_(E({
                                    isAuthenticated: !1
                                }, t))), e(r)
                            }
                        })
                    }
                },
                D = function() {
                    var e = (0, o.A)(u().mark((function e(t) {
                        var n, r, o, c, a, i, s;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t && t.trim()) {
                                        e.next = 3;
                                        break
                                    }
                                    return (0, l.debugConsole)("warn", "Access token is missing or empty. Skipping validation."), e.abrupt("return", !1);
                                case 3:
                                    if (n = localStorage.getItem("cachedToken"), r = localStorage.getItem("cachedExpiryTime"), o = localStorage.getItem("cachedValidationResult"), c = Date.now(), a = function(e) {
                                            return new Promise((function(t, n) {
                                                w._.authenticationApi.authValidateAccessToken(e, (function(e, r) {
                                                    e ? n(e) : t(r)
                                                }))
                                            }))
                                        }, !(n === t && r && c < parseInt(r, 10))) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", "true" === o);
                                case 10:
                                    s = 0;
                                case 11:
                                    if (!(s < 5)) {
                                        e.next = 28;
                                        break
                                    }
                                    return e.prev = 12, e.next = 15, a(t);
                                case 15:
                                    return i = e.sent, e.abrupt("break", 28);
                                case 19:
                                    if (e.prev = 19, e.t0 = e.catch(12), 1e3 === (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.ErrorCode)) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.abrupt("break", 28);
                                case 23:
                                    return e.next = 25, new Promise((function(e) {
                                        return setTimeout(e, 1e3)
                                    }));
                                case 25:
                                    s++, e.next = 11;
                                    break;
                                case 28:
                                    if (!i) {
                                        e.next = 35;
                                        break
                                    }
                                    return localStorage.setItem("cachedToken", i.access_token), localStorage.setItem("cachedExpiryTime", new Date(i.expires_in).getTime().toString()), localStorage.setItem("cachedValidationResult", "true"), e.abrupt("return", !0);
                                case 35:
                                    return localStorage.setItem("cachedValidationResult", "false"), e.abrupt("return", !1);
                                case 37:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [12, 19]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return function() {
                        var c = (0, o.A)(u().mark((function o(c) {
                            var a, i, d, f, p, v;
                            return u().wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (!t.ErrorCode) {
                                            o.next = 2;
                                            break
                                        }
                                        return o.abrupt("return", c(_({
                                            userProfile: null,
                                            isAuthenticated: !1
                                        })));
                                    case 2:
                                        if (a = E(E({}, e), {}, {
                                                userProfile: E({}, t)
                                            }), null !== t.Email) {
                                            o.next = 7;
                                            break
                                        }
                                        c(_(a)), o.next = 16;
                                        break;
                                    case 7:
                                        return (0, s.setLRUidCookie)(t), i = (0, l.findPrimaryValue)(t, "Email").Value, o.next = 11, Promise.all([R(i, n), q(t.Uid)]);
                                    case 11:
                                        d = o.sent, f = (0, r.A)(d, 2), p = f[0], v = f[1], c(_(E(E({}, a), {}, {
                                            newsletters: p,
                                            cbc_plus: v
                                        })));
                                    case 16:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })));
                        return function(e) {
                            return c.apply(this, arguments)
                        }
                    }()
                },
                R = function() {
                    var e = (0, o.A)(u().mark((function e(t, n) {
                        var r, o, c;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = [], e.prev = 1, e.next = 4, (0, l.membershipRequest)("".concat(f.fP, "/user/subscriptions/").concat(t, "?token=").concat(n), {
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        },
                                        method: "GET"
                                    });
                                case 4:
                                    c = e.sent, Array.isArray(null === (o = c.data) || void 0 === o ? void 0 : o.data) && c.data.data.length > 0 && (r = c.data.data.sort((function(e, t) {
                                        return e.name < t.name ? -1 : e.name > t.name ? 1 : 0
                                    }))), e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), g().error("getUserNewsletterSubscriptions", e.t0);
                                case 11:
                                    return e.abrupt("return", r);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                L = function(e) {
                    return function() {
                        var t = (0, o.A)(u().mark((function t(n) {
                            var r, o;
                            return u().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!e) {
                                            t.next = 18;
                                            break
                                        }
                                        return t.prev = 1, t.next = 4, (0, l.membershipRequest)("https://api.loginradius.com/identity/v2/auth/email?".concat((0, p.stringify)({
                                            apikey: f.y$,
                                            welcomeemailtemplate: "",
                                            url: "".concat((0, s.locationOrigin)()).concat(v.eu),
                                            verificationtoken: e
                                        })));
                                    case 4:
                                        if (!(r = t.sent).data.IsPosted || !r.data.Data.access_token) {
                                            t.next = 13;
                                            break
                                        }
                                        return o = r.data.Data.access_token, t.next = 9, (0, l.membershipRequest)("https://api.loginradius.com/identity/v2/auth/account/sendwelcomeemail?".concat((0, p.stringify)({
                                            apikey: f.y$,
                                            welcomeemailtemplate: f.PD
                                        })), {
                                            method: "GET",
                                            headers: {
                                                "content-Type": "application/json",
                                                Authorization: "Bearer ".concat(o)
                                            }
                                        });
                                    case 9:
                                        return t.next = 11, (0, s.setSessionToken)(o);
                                    case 11:
                                        n(I({
                                            isAuthenticated: !0
                                        }, r.data.Data.Profile, o)), n(q(r.data.Data.Profile.Uid));
                                    case 13:
                                        t.next = 18;
                                        break;
                                    case 15:
                                        t.prev = 15, t.t0 = t.catch(1), n(_({
                                            verifySocialFlowError: t.t0
                                        }));
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 15]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                j = function() {
                    (0, l.membershipRequest)("https://api.loginradius.com/identity/v2/auth/account/sendwelcomeemail?".concat((0, p.stringify)({
                        apikey: f.y$,
                        welcomeemailtemplate: f.PD
                    })), {
                        method: "GET",
                        headers: {
                            "content-Type": "application/json",
                            Authorization: "Bearer ".concat((0, s.getSessionToken)())
                        }
                    })
                },
                M = function() {
                    return function(e, t) {
                        var n = A(t()),
                            r = n.evt,
                            o = n.userProfile;
                        if (n.socialSignUp) {
                            var c, a = new Date("2022-10-18"),
                                i = new Date(o.CreatedDate);
                            "true" === (null === (c = o.CustomFields) || void 0 === c ? void 0 : c.HasSentWelcomeEmail) && i > a || (j(), U({
                                CustomFields: {
                                    HasSentWelcomeEmail: "true"
                                }
                            }))
                        }
                        r && !o.EmailVerified && w._.authenticationApi.verifyEmail(r, null, "".concat((0, s.locationOrigin)()).concat(v.eu), "", (function(t) {
                            t ? g().error("verifyEmailFlow", t) : (j(), e(_(E(E({}, o), {}, {
                                EmailVerified: !0
                            }))))
                        }))
                    }
                },
                U = function(e) {
                    return function(t) {
                        t(F(e, (function(e) {
                            console.error("Could not update CustomFields", e)
                        }), (function() {}), !1))
                    }
                },
                B = function() {
                    return function(e, t) {
                        var n = A(t()),
                            r = n.userProfile,
                            o = n.cevt,
                            c = n.ce;
                        return (0, l.membershipRequest)("".concat(f.bI, "/change_email"), {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            method: "POST",
                            body: (0, p.stringify)({
                                token: (0, s.getSessionToken)(),
                                email: c,
                                do_not_change_newsletters_email: !1,
                                verification_token: o
                            })
                        }).then((function() {
                            var t;
                            null === (t = window) || void 0 === t || null === (t = t.CBC) || void 0 === t || null === (t = t.APP) || void 0 === t || null === (t = t.PubSub) || void 0 === t || t.publish("LOGIN RADIUS CHANGE EMAIL VERIFIED", {
                                newEmail: c
                            }), e(_({
                                updateEmailFlowError: void 0,
                                onLoginRedirectRoute: "/account/profile",
                                userProfile: E(E({}, r), {}, {
                                    EmailVerified: !0,
                                    Email: [{
                                        Type: "Primary",
                                        Value: c
                                    }]
                                })
                            }))
                        })).catch((function(t) {
                            e(_({
                                onLoginRedirectRoute: "/account/profile",
                                updateEmailFlowError: t
                            }))
                        }))
                    }
                },
                F = function(e, t, n) {
                    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    return function(o) {
                        var c;
                        "undefined" !== typeof e.Addresses && e.Addresses.length > 1 && (c = e.Addresses.pop());
                        var a = (0, s.getSessionToken)();
                        w._.authenticationApi.updateProfileByAccessToken(a, e, f.MR, null, null, null, "".concat((0, s.locationOrigin)(), "/"), (function(e, i) {
                            if (!e || e.ErrorCode === s.loginradiusErrorCodes.EMAIL_ALREADY_IN_USE && e.ErrorCode === s.loginradiusErrorCodes.ACCESS_TOKEN_EXPIRED)
                                if (e) t("Error code: ".concat(e.ErrorCode, " - ").concat(e.Message));
                                else {
                                    var u;
                                    if ("undefined" !== typeof c) w._.authenticationApi.updateProfileByAccessToken(a, {
                                        Addresses: [c]
                                    }, null, null, null, null, null, (function(e, c) {
                                        if (!e.ErrorCode || 936 === e.ErrorCode && 906 === e.ErrorCode)
                                            if (e) t("Error code: ".concat(e.ErrorCode, " - ").concat(e.Message));
                                            else {
                                                var a;
                                                r && (null === (a = window) || void 0 === a || null === (a = a.CBC) || void 0 === a || null === (a = a.APP) || void 0 === a || null === (a = a.PubSub) || void 0 === a || a.publish("LOGIN RADIUS UPDATE PROFILE", {
                                                    nextProfile: c.Data
                                                })), o(_({
                                                    userProfile: c.Data
                                                })), P(o, t), n && n()
                                            }
                                        else t(e)
                                    }));
                                    else r && (null === (u = window) || void 0 === u || null === (u = u.CBC) || void 0 === u || null === (u = u.APP) || void 0 === u || null === (u = u.PubSub) || void 0 === u || u.publish("LOGIN RADIUS UPDATE PROFILE", {
                                        nextProfile: i.Data
                                    })), o(_({
                                        userProfile: i.Data
                                    })), P(o, t), n && n()
                                }
                            else t(e)
                        }))
                    }
                },
                V = function() {
                    var e = (0, o.A)(u().mark((function e(t, n) {
                        var r, o, c = arguments;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = c.length > 2 && void 0 !== c[2] && c[2], o = t.access_token, e.next = 4, (0, s.setSessionToken)(o, r);
                                case 4:
                                    (0, s.setSessionToken)(o), n(I({
                                        hasUserInitiatedLogin: !0,
                                        isAuthenticated: !0
                                    }, t.Profile, o)), n(M()), n(q(t.Profile.Uid));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = function(e, t, n) {
                    return function(r) {
                        r(F({
                            Email: [{
                                Type: "Primary",
                                Value: e
                            }]
                        }, t, n))
                    }
                },
                G = function(e) {
                    return function(t) {
                        var n = (0, l.getMembershipTitleFromPath)(e);
                        t((0, h.set_app_state)({
                            app: {
                                title: n,
                                path: e
                            }
                        }))
                    }
                },
                q = function() {
                    var e = (0, o.A)(u().mark((function e(t) {
                        var n, r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, l.membershipRequest)("".concat(f.CQ, "/login"), {
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        method: "POST",
                                        body: JSON.stringify({
                                            "@context": {
                                                cbc: "http://vocab.data.cbc.ca/"
                                            },
                                            "cbc:loginradius_id": t.toString()
                                        })
                                    });
                                case 3:
                                    return n = e.sent, (r = n.data["cbc:cbc_plus_id"][0]) && (0, s.setPlusCookie)(r), e.abrupt("return", r);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(0), g().error("getCBCPlusID", e.t0), e.abrupt("return", null);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        "acc-75375": function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return v
                }
            });
            n("acc-81675"), n("acc-29390"), n("acc-15718"), n("acc-77450"), n("acc-75855");
            var r = n("acc-64467"),
                o = n("acc-10467"),
                c = n("acc-54756"),
                a = n.n(c),
                i = n("acc-48612"),
                u = n("acc-43472"),
                s = function(e) {
                    return new Promise((function(t, n) {
                        var r = function() {
                            window.vfQ && Array.isArray(window.vfQ) ? (0, i.validateAccessToken)(e).then((function(e) {
                                e ? t() : n("Invalid LR access token for Viafoura")
                            })).catch((function(e) {
                                n("Token validation failed: ".concat(e))
                            })) : setTimeout(r, 100)
                        };
                        r()
                    }))
                },
                l = function(e) {
                    return new Promise((function(t, n) {
                        window.vfQ.push((0, o.A)(a().mark((function r() {
                            var o;
                            return a().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, window.vf.session.login.loginRadius(e);
                                    case 3:
                                        o = r.sent, t(o), r.next = 10;
                                        break;
                                    case 7:
                                        r.prev = 7, r.t0 = r.catch(0), n(r.t0);
                                    case 10:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 7]
                            ])
                        }))))
                    }))
                },
                d = function() {
                    var e = (0, o.A)(a().mark((function e(t) {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, s(t);
                                case 3:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        window.vfQ.push((0, o.A)(a().mark((function n() {
                                            var r;
                                            return a().wrap((function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                    case 0:
                                                        return n.prev = 0, n.next = 3, window.vf.context.get("user");
                                                    case 3:
                                                        if (0 !== (r = n.sent).id) {
                                                            n.next = 8;
                                                            break
                                                        }
                                                        return n.next = 7, l(t);
                                                    case 7:
                                                        r = n.sent;
                                                    case 8:
                                                        if ((0, u.debugConsole)("info", "viafoura user context: ", r), window.vf.$unsubscribe("logout", "success"), window.vf.$subscribe("logout", "success", (function() {
                                                                (0, u.trackEvent)("SIGNED OUT", {})
                                                            })), !r.avatar_moderation_status.startsWith("pending") || void 0 !== r.pic_large_pending && "" !== r.pic_large_pending) {
                                                            n.next = 18;
                                                            break
                                                        }
                                                        return n.next = 14, window.vf.context.reset();
                                                    case 14:
                                                        return n.next = 16, window.vf.context.get("user");
                                                    case 16:
                                                        r = n.sent, (0, u.debugConsole)("info", "viafoura user context RESET: ", r);
                                                    case 18:
                                                        e({
                                                            community: r,
                                                            viafouraLogin: !0
                                                        }), n.next = 25;
                                                        break;
                                                    case 21:
                                                        n.prev = 21, n.t0 = n.catch(0), console.error("Viafoura server down", n.t0), e({
                                                            community: null,
                                                            viafouraLogin: !1
                                                        });
                                                    case 25:
                                                    case "end":
                                                        return n.stop()
                                                }
                                            }), n, null, [
                                                [0, 21]
                                            ])
                                        }))))
                                    })));
                                case 6:
                                    return e.prev = 6, e.t0 = e.catch(0), console.error("[ERROR] Viafoura initialization failed:", e.t0), e.abrupt("return", {
                                        community: null,
                                        viafouraLogin: !1
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 6]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();

            function f(e, t) {
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
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, r.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var v = function() {
                var e = (0, o.A)(a().mark((function e(t, n, r, o) {
                    var c, u, s;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, c = p({
                                    waitingOnCheck: !1,
                                    isAuthenticated: !0
                                }, o), u = d(n), e.next = 5, t((0, i.loadUserData)(c, r, n));
                            case 5:
                                return t((0, i.verifyEmailFlow)()), e.next = 8, u;
                            case 8:
                                (s = e.sent) && t((0, i.updateMembership)(s)), e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(0), console.error("[ERROR] User session initialization failed:", e.t0);
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 12]
                    ])
                })));
                return function(t, n, r, o) {
                    return e.apply(this, arguments)
                }
            }()
        },
        "acc-1984": function(e, t, n) {
            "use strict";
            n.d(t, {
                Ay: function() {
                    return m
                },
                Bn: function() {
                    return y
                },
                MH: function() {
                    return w
                }
            });
            var r = n("acc-64467"),
                o = n("acc-10467"),
                c = n("acc-54756"),
                a = n.n(c),
                i = (n("acc-64075"), n("acc-81675"), n("acc-29390"), n("acc-15718"), n("acc-77450"), n("acc-75855"), n("acc-62020"), n("acc-61999")),
                u = n("acc-46205"),
                s = n("acc-10615"),
                l = n("acc-94730"),
                d = n("acc-43472"),
                f = n("acc-48612"),
                p = n("acc-76314"),
                v = n.n(p),
                b = n("acc-75375");

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
                        (0, r.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function m() {
                var e = window.localStorage.getItem("FORCE_OCELOT_DYNAMIC_HOSTNAME"),
                    t = "openid ".concat(u.I_.map((function(e) {
                        return u.AI + "/" + u.zG + e
                    })).join(" ")),
                    n = {
                        clientId: u.oB,
                        debug: u.qg,
                        locale: "en",
                        skipSignatureValidation: !0,
                        clockTolerance: 120
                    },
                    r = function() {
                        return "true" === e || window.location.hostname.match(/ocelot-de-(.*?).apps.ocp.int.nm.cbc.ca/)
                    },
                    c = "".concat(window.location.protocol, "//").concat(window.location.host).concat(s.IE),
                    p = "".concat(window.location.protocol, "//").concat(window.location.host).concat(s.LI),
                    g = c,
                    m = p;
                if (r()) {
                    var w = window.location.hostname.startsWith("local.cbc.ca") ? "local.cbc.ca:442" : "account-centre-staging.apps.ocp.int.nm.cbc.ca";
                    g = "https://".concat(w, "/redirect-ocelot-ci"), m = "".concat(g, "?logout=").concat(p)
                }
                var y = {
                        env: u.A_,
                        renewalCallback: g,
                        scope: t,
                        responseType: "id_token token",
                        frameTimeoutMs: 5e5,
                        responseMode: "query",
                        getSafariRefreshState: function() {
                            return window.location.pathname
                        }
                    },
                    k = new i.$9;
                k.initiated || k.init(n, y);
                var E = y.renewalCallback,
                    A = "redirect",
                    P = function() {
                        var e = (0, o.A)(a().mark((function e(t) {
                            var n, o, c, i, u, s = arguments;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = s.length > 1 && void 0 !== s[1] ? s[1] : function() {}, e.prev = 1, o = (0, l.getSessionToken)(), c = !1, !o) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 7, (0, f.validateAccessToken)(o);
                                    case 7:
                                        c = e.sent;
                                    case 8:
                                        return i = !(o && c), r() && (t = O(t)), e.next = 12, k.loginPkce({
                                            redirectUri: E,
                                            requestType: A,
                                            withPrompt: i,
                                            policy: "B2C_1A_ExternalClient_FrontEnd_Login_CBC",
                                            state: t,
                                            cbcVisitorId: (0, l.getVisitorCookie)()
                                        });
                                    case 12:
                                        return u = e.sent, e.abrupt("return", u);
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(1), console.error("Login error: ", e.t0), v().error("b2cLogin", e.t0.error ? new Error("B2C: ".concat(e.t0.error)) : e.t0), n(e.t0);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 16]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    x = function() {
                        var e = (0, o.A)(a().mark((function e(t) {
                            var n, o, c = arguments;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = c.length > 1 && void 0 !== c[1] ? c[1] : function() {}, e.prev = 1, r() && (t = O(t)), e.next = 5, k.createAccountPkce({
                                            redirectUri: E,
                                            requestType: A,
                                            withPrompt: !0,
                                            policy: "B2C_1A_ExternalClient_FrontEnd_SignUp_CBC",
                                            state: t,
                                            cbcVisitorId: (0, l.getVisitorCookie)()
                                        });
                                    case 5:
                                        return o = e.sent, e.abrupt("return", o);
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), console.error("Create Account error: ", e.t0), v().error("b2cCreateAccount", e.t0.error ? new Error("B2C: ".concat(e.t0.error)) : e.t0), n(e.t0);
                                    case 14:
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
                    }(),
                    _ = function() {
                        var e = (0, o.A)(a().mark((function e(t, n, r, o) {
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (0, l.saveSessionToken)(r), t((0, f.updateMembership)({
                                            b2cLogin: !0,
                                            authenticationType: null === n || void 0 === n ? void 0 : n.authenticationType
                                        })), e.next = 4, (0, b.A)(t, r, o, {
                                            hasUserInitiatedLogin: null === n || void 0 === n ? void 0 : n.hasUserInitiatedLogin
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r, o) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    O = function(e) {
                        var t = JSON.parse(e);
                        return t.returnDynamicHostname = c, JSON.stringify(t)
                    };
                return {
                    login: P,
                    createAccount: x,
                    logout: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                        try {
                            k.logout(h(h({}, e), {}, {
                                redirectUri: m
                            }))
                        } catch (n) {
                            console.error("Logout error: ", n), v().error("b2cLogout", n.error ? new Error("B2C: ".concat(n.error)) : n), t(n)
                        }
                    },
                    verifyRedirect: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                        return function() {
                            var n = (0, o.A)(a().mark((function n(r) {
                                var o, c, i, u;
                                return a().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, k.handleRedirect();
                                        case 3:
                                            if (!(o = n.sent).ok) {
                                                n.next = 22;
                                                break
                                            }
                                            if (c = JSON.parse(o.state), r((0, f.updateMembership)(h({}, c))), !(i = k.getLRAccessToken())) {
                                                n.next = 19;
                                                break
                                            }
                                            return (0, l.setSessionToken)(i), n.next = 12, (0, d.loginRadiusProfileByAccessToken)(i);
                                        case 12:
                                            return u = n.sent, e = h(h({}, e), {}, {
                                                authenticationType: o.authenticationType,
                                                hasUserInitiatedLogin: 2 !== o.authenticationType && c.hasUserInitiatedLogin
                                            }), n.next = 16, _(r, e, i, u);
                                        case 16:
                                            return n.abrupt("return", o);
                                        case 19:
                                            throw new Error("Did not receive token from client");
                                        case 20:
                                            n.next = 23;
                                            break;
                                        case 22:
                                            throw new Error(o.error.error);
                                        case 23:
                                            n.next = 31;
                                            break;
                                        case 25:
                                            n.prev = 25, n.t0 = n.catch(0), r((0, f.updateMembership)({
                                                isAuthenticated: !1
                                            })), console.error("Verify Redirect error: ", n.t0), v().error("b2cVerifyRedirect", n.t0.error ? new Error("B2C: ".concat(n.t0.error)) : n.t0), t(n.t0);
                                        case 31:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 25]
                                ])
                            })));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }()
                    },
                    resendConfirmationEmail: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                        return (0, o.A)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, k.sendConfirmationEmail({
                                            redirectUri: E
                                        });
                                    case 3:
                                        t.next = 10;
                                        break;
                                    case 5:
                                        t.prev = 5, t.t0 = t.catch(0), console.error("Resend Confirmation Email error: ", t.t0), v().error("b2cResendConfirmationEmail", t.t0.error ? new Error("B2C: ".concat(t.t0.error)) : t.t0), e(t.t0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 5]
                            ])
                        })))
                    },
                    resetPasswordFacebook: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                        try {
                            return k.resetPasswordFacebookPkce({
                                redirectUri: E,
                                requestType: "redirect",
                                withPrompt: !0,
                                state: e,
                                cbcVisitorId: (0, l.getVisitorCookie)()
                            })
                        } catch (n) {
                            console.error("Reset Password Facebook error: ", n), v().error("b2cResetPasswordFacebook", n.error ? new Error("B2C: ".concat(n.error)) : n), t(n)
                        }
                    }
                }
            }
            var w = 1,
                y = 2
        },
        "acc-50477": function() {}
    }
]);
//# sourceMappingURL=../../sourcemaps/acc-832.1045c02f862ca4782b54.js.map