"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
        return a
    };
    var c, a = {},
        e = Object.prototype,
        s = e.hasOwnProperty,
        l = Object.defineProperty || function(e, t, n) {
            e[t] = n.value
        },
        t = "function" == typeof Symbol ? Symbol : {},
        r = t.iterator || "@@iterator",
        n = t.asyncIterator || "@@asyncIterator",
        o = t.toStringTag || "@@toStringTag";

    function i(e, t, n) {
        return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), e[t]
    }
    try {
        i({}, "")
    } catch (c) {
        i = function(e, t, n) {
            return e[t] = n
        }
    }

    function u(e, t, n, r) {
        var o, i, a, u, t = t && t.prototype instanceof P ? t : P,
            t = Object.create(t.prototype),
            r = new T(r || []);
        return l(t, "_invoke", {
            value: (o = e, i = n, a = r, u = d, function(e, t) {
                if (u === h) throw new Error("Generator is already running");
                if (u === C) {
                    if ("throw" === e) throw t;
                    return {
                        value: c,
                        done: !0
                    }
                }
                for (a.method = e, a.arg = t;;) {
                    var n = a.delegate;
                    if (n) {
                        n = function e(t, n) {
                            var r = n.method,
                                o = t.iterator[r];
                            if (o === c) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = c, e(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), A;
                            r = f(o, t.iterator, n.arg);
                            if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, A;
                            o = r.arg;
                            return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = c), n.delegate = null, A) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, A)
                        }(n, a);
                        if (n) {
                            if (n === A) continue;
                            return n
                        }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                        if (u === d) throw u = C, a.arg;
                        a.dispatchException(a.arg)
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    u = h;
                    n = f(o, i, a);
                    if ("normal" === n.type) {
                        if (u = a.done ? C : p, n.arg === A) continue;
                        return {
                            value: n.arg,
                            done: a.done
                        }
                    }
                    "throw" === n.type && (u = C, a.method = "throw", a.arg = n.arg)
                }
            })
        }), t
    }

    function f(e, t, n) {
        try {
            return {
                type: "normal",
                arg: e.call(t, n)
            }
        } catch (e) {
            return {
                type: "throw",
                arg: e
            }
        }
    }
    a.wrap = u;
    var d = "suspendedStart",
        p = "suspendedYield",
        h = "executing",
        C = "completed",
        A = {};

    function P() {}

    function g() {}

    function v() {}
    var t = {},
        b = (i(t, r, function() {
            return this
        }), Object.getPrototypeOf),
        b = b && b(b(B([]))),
        S = (b && b !== e && s.call(b, r) && (t = b), v.prototype = P.prototype = Object.create(t));

    function m(e) {
        ["next", "throw", "return"].forEach(function(t) {
            i(e, t, function(e) {
                return this._invoke(t, e)
            })
        })
    }

    function y(a, u) {
        var t;
        l(this, "_invoke", {
            value: function(n, r) {
                function e() {
                    return new u(function(e, t) {
                        ! function t(e, n, r, o) {
                            var i, e = f(a[e], a, n);
                            if ("throw" !== e.type) return (n = (i = e.arg).value) && "object" == _typeof(n) && s.call(n, "__await") ? u.resolve(n.__await).then(function(e) {
                                t("next", e, r, o)
                            }, function(e) {
                                t("throw", e, r, o)
                            }) : u.resolve(n).then(function(e) {
                                i.value = e, r(i)
                            }, function(e) {
                                return t("throw", e, r, o)
                            });
                            o(e.arg)
                        }(n, r, e, t)
                    })
                }
                return t = t ? t.then(e, e) : e()
            }
        })
    }

    function w(e) {
        var t = {
            tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
    }

    function _(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t
    }

    function T(e) {
        this.tryEntries = [{
            tryLoc: "root"
        }], e.forEach(w, this), this.reset(!0)
    }

    function B(t) {
        if (t || "" === t) {
            var n, e = t[r];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) return n = -1, (e = function e() {
                for (; ++n < t.length;)
                    if (s.call(t, n)) return e.value = t[n], e.done = !1, e;
                return e.value = c, e.done = !0, e
            }).next = e
        }
        throw new TypeError(_typeof(t) + " is not iterable")
    }
    return l(S, "constructor", {
        value: g.prototype = v,
        configurable: !0
    }), l(v, "constructor", {
        value: g,
        configurable: !0
    }), g.displayName = i(v, o, "GeneratorFunction"), a.isGeneratorFunction = function(e) {
        e = "function" == typeof e && e.constructor;
        return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
    }, a.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, i(e, o, "GeneratorFunction")), e.prototype = Object.create(S), e
    }, a.awrap = function(e) {
        return {
            __await: e
        }
    }, m(y.prototype), i(y.prototype, n, function() {
        return this
    }), a.AsyncIterator = y, a.async = function(e, t, n, r, o) {
        void 0 === o && (o = Promise);
        var i = new y(u(e, t, n, r), o);
        return a.isGeneratorFunction(t) ? i : i.next().then(function(e) {
            return e.done ? e.value : i.next()
        })
    }, m(S), i(S, o, "Generator"), i(S, r, function() {
        return this
    }), i(S, "toString", function() {
        return "[object Generator]"
    }), a.keys = function(e) {
        var t, n = Object(e),
            r = [];
        for (t in n) r.push(t);
        return r.reverse(),
            function e() {
                for (; r.length;) {
                    var t = r.pop();
                    if (t in n) return e.value = t, e.done = !1, e
                }
                return e.done = !0, e
            }
    }, a.values = B, T.prototype = {
        constructor: T,
        reset: function(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(_), !e)
                for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = c)
        },
        stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
        },
        dispatchException: function(n) {
            if (this.done) throw n;
            var r = this;

            function e(e, t) {
                return i.type = "throw", i.arg = n, r.next = e, t && (r.method = "next", r.arg = c), !!t
            }
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var o = this.tryEntries[t],
                    i = o.completion;
                if ("root" === o.tryLoc) return e("end");
                if (o.tryLoc <= this.prev) {
                    var a = s.call(o, "catchLoc"),
                        u = s.call(o, "finallyLoc");
                    if (a && u) {
                        if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                    } else if (a) {
                        if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                    } else {
                        if (!u) throw new Error("try statement without catch or finally");
                        if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(e, t) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var o = r;
                    break
                }
            }
            var i = (o = o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc ? null : o) ? o.completion : {};
            return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, A) : this.complete(i)
        },
        complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), A
        },
        finish: function(e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), A
            }
        },
        catch: function(e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var n, r, o = this.tryEntries[t];
                if (o.tryLoc === e) return "throw" === (n = o.completion).type && (r = n.arg, _(o)), r
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(e, t, n) {
            return this.delegate = {
                iterator: B(e),
                resultName: t,
                nextLoc: n
            }, "next" === this.method && (this.arg = c), A
        }
    }, a
}

function asyncGeneratorStep(e, t, n, r, o, i, a) {
    try {
        var u = e[i](a),
            c = u.value
    } catch (e) {
        return void n(e)
    }
    u.done ? t(c) : Promise.resolve(c).then(r, o)
}

function _asyncToGenerator(u) {
    return function() {
        var e = this,
            a = arguments;
        return new Promise(function(t, n) {
            var r = u.apply(e, a);

            function o(e) {
                asyncGeneratorStep(r, t, n, o, i, "next", e)
            }

            function i(e) {
                asyncGeneratorStep(r, t, n, o, i, "throw", e)
            }
            o(void 0)
        })
    }
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _toPropertyKey(r.key), r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" === _typeof(e) ? e : String(e)
}

function _toPrimitive(e, t) {
    if ("object" !== _typeof(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 === n) return ("string" === t ? String : Number)(e);
    n = n.call(e, t || "default");
    if ("object" !== _typeof(n)) return n;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}
window.CBC || (window.CBC = {}), (CBC = CBC || window.CBC).APP || (CBC.APP = {}), CBC.APP.AB || (CBC.APP.AB = {}), CBC.APP.ANA || (CBC.APP.ANA = {}), CBC.APP.ANA.ABTESTSCONFIG || (CBC.APP.ANA.ABTESTSCONFIG = {}), CBC.APP.ANA.SURVEYCONFIG || (CBC.APP.ANA.SURVEYCONFIG = {}), CBC.APP.ANA.DISPATCHERS || (CBC.APP.ANA.DISPATCHERS = {}), CBC.APP.ANA.DISPATCHERS.Adobe || (CBC.APP.ANA.DISPATCHERS.Adobe = {}), CBC.APP.ANA.DISPATCHERS.DAL || (CBC.APP.ANA.DISPATCHERS.DAL = {}), CBC.APP.ANA.DISPATCHERS.FBPIXEL || (CBC.APP.ANA.DISPATCHERS.FBPIXEL = {}), CBC.APP.ANA.DISPATCHERS.MirRoar || (CBC.APP.ANA.DISPATCHERS.MirRoar = {}), CBC.APP.ANA.DISPATCHERS.DAL || (CBC.APP.ANA.DISPATCHERS.DAL = {}), CBC.APP.ANA.ER || (CBC.APP.ANA.ER = {}), CBC.APP.ANA.FORMATTERS || (CBC.APP.ANA.FORMATTERS = {}), CBC.APP.ANA.FORMATTERS.Adobe || (CBC.APP.ANA.FORMATTERS.Adobe = {}), CBC.APP.ANA.FORMATTERS.Common || (CBC.APP.ANA.FORMATTERS.Common = {}), CBC.APP.ANA.FORMATTERS.Comscore || (CBC.APP.ANA.FORMATTERS.Comscore = {}), CBC.APP.ANA.FORMATTERS.DAL || (CBC.APP.ANA.FORMATTERS.DAL = {}), CBC.APP.ANA.FORMATTERS.MirRoar || (CBC.APP.ANA.FORMATTERS.MirRoar = {}), CBC.APP.ANA.FORMATTERS.DAL || (CBC.APP.ANA.FORMATTERS.DAL = {}), CBC.APP.ANA.LIBRARY || (CBC.APP.ANA.LIBRARY = {}), CBC.APP.ANA.LIBRARY.FBPIXEL || (CBC.APP.ANA.LIBRARY.FBPIXEL = {}), CBC.APP.ANA.LIBRARY.SENTRY || (CBC.APP.ANA.LIBRARY.SENTRY = {}), CBC.APP.ANA.LinkTracker || (CBC.APP.ANA.LinkTracker = {}), CBC.APP.ANA.SEARCHDEFAULT || (CBC.APP.ANA.SEARCHDEFAULT = {}), CBC.APP.ANA.VALIDATORS || (CBC.APP.ANA.VALIDATORS = {}), CBC.APP.ANA.VALIDATORS.Adobe || (CBC.APP.ANA.VALIDATORS.Adobe = {}), CBC.APP.ANA.VALIDATORS.Common || (CBC.APP.ANA.VALIDATORS.Common = {}), CBC.APP.ANA.VALIDATORS.DAL || (CBC.APP.ANA.VALIDATORS.DAL = {}), CBC.APP.ANA.VALIDATORS.FBPIXEL || (CBC.APP.ANA.VALIDATORS.FBPIXEL = {}), CBC.APP.ANA.VALIDATORS.MirRoar || (CBC.APP.ANA.VALIDATORS.MirRoar = {}), CBC.APP.ANA.VALIDATORS.DAL || (CBC.APP.ANA.VALIDATORS.DAL = {}), CBC.APP.ANA.VARS || (CBC.APP.ANA.VARS = {}), CBC.APP.COMSCORE || (CBC.APP.COMSCORE = {}), CBC.APP.CXENSE || (CBC.APP.CXENSE = {}), CBC.APP.DMP || (CBC.APP.DMP = {}), CBC.APP.DMP.LOTAME || (CBC.APP.DMP.LOTAME = {}), CBC.APP.PubSub || (CBC.APP.PubSub = {}), CBC.APP.readJS || (CBC.APP.readJS = {}), CBC.APP.SC || (CBC.APP.SC = {}), CBC.APP.SC.DTM || (CBC.APP.SC.DTM = {}), CBC.APP.SC.DTM.DATA || (CBC.APP.SC.DTM.DATA = {}), CBC.APP.SC.DTM.formatted || (CBC.APP.SC.DTM.formatted = {}), CBC.APP.SC.EventTracker || (CBC.APP.SC.EventTracker = {}), CBC.APP.SC.LOCALGEO || (CBC.APP.SC.LOCALGEO = {}), CBC.APP.SC.masterSwitch || (CBC.APP.SC.masterSwitch = {}), CBC.APP.SC.metadataAllowlist || (CBC.APP.SC.metadataAllowlist = {}), CBC.APP.SC.PageTracker || (CBC.APP.SC.PageTracker = {}), CBC.APP.SC.Pillar || (CBC.APP.SC.Pillar = {}), CBC.APP.SC.Subscribers || (CBC.APP.SC.Subscribers = {}), CBC.APP.SC.UTIL || (CBC.APP.SC.UTIL = {}), CBC.APP.SC.VideoHeartbeat || (CBC.APP.SC.VideoHeartbeat = {}), CBC.APP.SC.VideoHeartbeatVars || (CBC.APP.SC.VideoHeartbeatVars = {}), CBC.APP.SEARCH || (CBC.APP.SEARCH = {}), CBC.APP.SEARCH.indexer || (CBC.APP.SEARCH.indexer = {}), CBC.APP.SEARCH.UTIL || (CBC.APP.SEARCH.UTIL = {}), CBC.APP.versions || (CBC.APP.versions = {}), window.CBCRC || (window.CBCRC = {}), (CBCRC = CBCRC || window.CBCRC).ANA || (CBCRC.ANA = {}), CBCRC.ANA.DATALAYER || (CBCRC.ANA.DATALAYER = {}), CBCRC.ANA.MEDIA || (CBCRC.ANA.MEDIA = {}), CBC.APP.versions["cbc-stats-bottom"] = "3.45.1", CBC.APP.SC.Detectizr = function(e) {
        var t = e || (window.navigator.userAgent || window.navigator.vendor || window.opera).toLowerCase();

        function n(e) {
            return e.test(t)
        }

        function r(e) {
            return -1 < t.indexOf(e)
        }

        function o(e) {
            return e.exec(t)
        }

        function i(e, t) {
            t = (e.version = t).split(".");
            0 < t.length ? (t = t.reverse(), e.major = t.pop(), 0 < t.length ? (e.minor = t.pop(), 0 < t.length ? (t = t.reverse(), e.patch = t.join(".")) : e.patch = "0") : e.minor = "0") : e.major = "0"
        }
        var e = {
                type: "",
                model: ""
            },
            a = {},
            u = ["tv", "tablet", "mobile", "desktop"];
        return n(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|dlnadoc|roku|pov_tv|hbbtv|ce-html/) ? (e.type = u[0], e.model = "smartTv") : n(/xbox|playstation.3|wii/) ? (e.type = u[0], e.model = "gameConsole") : n(/ip(a|ro)d/) ? (e.type = u[1], e.model = "ipad") : n(/tablet/) && !n(/rx-34/) || n(/folio/) ? (e.type = u[1], e.model = String(o(/playbook/) || "")) : n(/linux/) && n(/android/) && !n(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/) ? (e.type = u[1], e.model = "android") : n(/kindle/) || n(/mac.os/) && n(/silk/) ? (e.type = u[1], e.model = "kindle") : n(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/) || n(/mb511/) && n(/rutem/) ? (e.type = u[1], e.model = "android") : n(/bb10/) ? (e.type = u[1], e.model = "blackberry") : (e.model = o(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/), null !== e.model ? (e.type = u[2], e.model = String(e.model)) : (e.model = "", n(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/) || n(/opera/) && n(/windows.nt.5/) && n(/htc|xda|mini|vario|samsung-gt-i8000|samsung-sgh-i9/) ? e.type = u[2] : n(/windows.(nt|xp|me|9)/) && !n(/phone/) || n(/win(9|.9|nt)/) || n(/\(windows 8\)/) ? e.type = u[3] : n(/macintosh|powerpc/) && !n(/silk/) ? (e.type = u[3], e.model = "mac os") : n(/cros/) ? e.type = u[3] : e.type = u[2])), "" !== e.model && ("ipad" === e.model || "iphone" === e.model || "ipod" === e.model ? (a.name = "ios", i(a, (n(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."))) : "android" === e.model ? (a.name = "android", i(a, n(/android\s([\d.]+)/) ? RegExp.$1 : "")) : "blackberry" === e.model ? (a.name = "blackberry", i(a, n(/version\/([^\s]+)/) ? RegExp.$1 : "")) : "playbook" === e.model && (a.name = "blackberry", i(a, n(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""))), a.name || (r("win") || r("16bit") ? (a.name = "windows", r("windows nt 10") ? i(a, "10") : r("windows nt 6.3") ? i(a, "8.1") : r("windows nt 6.2") || n(/\(windows 8\)/) ? i(a, "8") : r("windows nt 6.1") ? i(a, "7") : r("windows nt 6.0") ? i(a, "vista") : (r("windows nt 5.2") || r("windows nt 5.1") || r("windows xp")) && i(a, "xp")) : r("mac") || r("darwin") ? (a.name = "mac os", r("os x") && i(a, (n(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(/_/g, "."))) : r("webtv") ? a.name = "webtv" : (r("x11") || r("inux")) && (a.name = "linux")), {
            os: a,
            device: e,
            ua: t
        }
    }, window.Detectizr = CBC.APP.SC.Detectizr(),
    function() {
        var e;
        Object.keys(CBC.APP.PubSub).length || (e = function() {
            function r(e, t, n) {
                _classCallCheck(this, r), this.subscribers = e || {}, this.queuedEvents = t || [], this.isOn = n || !1
            }
            return _createClass(r, [{
                key: "turnOn",
                value: function() {
                    if (this.isOn = !0, this.queuedEvents.length)
                        for (var e = 0; e < this.queuedEvents.length; e++) this.publish(this.queuedEvents[e].event, this.queuedEvents[e].payload), this.queuedEvents.splice(e, 1)
                }
            }, {
                key: "turnOff",
                value: function() {
                    this.isOn = !1
                }
            }, {
                key: "isOn",
                value: function() {
                    return this.isOn
                }
            }, {
                key: "publish",
                value: function(t, n) {
                    t in this.subscribers ? this.subscribers[t].slice().forEach(function(e) {
                        try {
                            e(t, n)
                        } catch (e) {
                            console.error(e.message)
                        }
                    }) : this.isOn || this.queuedEvents.push({
                        event: t,
                        payload: n
                    })
                }
            }, {
                key: "subscribe",
                value: function(e, t) {
                    return e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].some(function(e) {
                        if (t === e) return !0
                    }) ? (console.log("callback already exists for event:", e, t), !1) : (this.subscribers[e].push(t), !0)
                }
            }, {
                key: "unsubscribe",
                value: function(e, r) {
                    e in this.subscribers && this.subscribers[e].some(function(e, t, n) {
                        if (r === e) return n.splice(t, 1), !0
                    })
                }
            }]), r
        }(), CBC.APP.PubSub = new e)
    }(), CBC.APP.SC.viafouraSubscribed = !1,
    function() {
        function n(e, t) {
            Array.isArray(t) && 0 !== t.length && CBC.APP.DMP.LOTAME.filterAudienceSegmentIDs(t, ["Amplitude"]).length && CBC.APP.PubSub.unsubscribe("loadedAudiences", n)
        }
        window.vfQ = window.vfQ || [], window.vfQ.push(function() {
            CBC.APP.SC.viafouraSubscribed || (CBC.APP.SC.DEBUG && console.log("Subscribing to Viafoura events"), window.vf.$subscribe("share", "clicked", function(e, t) {
                CBC.APP.SC.EventTracker.trackEvent("SHARED", {
                    network: e,
                    elem: t
                })
            }), window.vf.$subscribe("logout", "success", function() {
                CBC.APP.SC.EventTracker.trackEvent("SIGNED OUT", {})
            }), window.vf.$subscribe("comment", "created", function(e) {
                CBC.APP.SC.EventTracker.trackEvent("COMMENTED", {})
            }), window.vf.$subscribe("comment-reply", "posted", function(e) {
                CBC.APP.SC.EventTracker.trackEvent("COMMENTED", {})
            }), CBC.APP.SC.viafouraSubscribed = !0, CBC.APP.PubSub.publish("viafouraAvailable", {}))
        }), CBC.APP.PubSub.subscribe("loadedAudiences", n)
    }(), window._sf_endpt = (new Date).getTime(), CBC.APP.COMSCORE = {
        useBeacon: !1,
        payload: {
            c1: 2,
            c2: 3005684,
            options: {
                bypassUserConsentRequirementFor1PCookie: !0,
                enableFirstPartyCookie: !0
            }
        },
        dataStructure: {},
        Call: function() {
            if (CBC.APP.SC.DTM.formatted.comscore && (this.dataStructure = CBC.APP.SC.DTM.formatted.comscore), this.useBeacon) this.pvCandidate();
            else {
                this.useBeacon = !0;
                var e = {};
                if (Object.keys(this.dataStructure).length) {
                    if (this.dataStructure.syndicate && "gamp" === this.dataStructure.syndicate) return !1;
                    e = this.getOptions()
                }
                var t = window._comscore || [],
                    e = (t.push(this.generatePayload({
                        c15: "",
                        options: e
                    }, this.payload)), window._comscore = t, this.pvCandidate(), document.createElement("script")),
                    t = document.getElementsByTagName("script")[0];
                e.async = !0, e.src = "https://sb.scorecardresearch.com/beacon.js", t && t.parentNode.insertBefore(e, t)
            }
        },
        getOptions: function() {
            var e, t, n = {};
            return this.dataStructure.syndicate && "fia" === this.dataStructure.syndicate ? n = {
                url_append: "comscorekw=fbia"
            } : this.useBeacon && this.dataStructure.contentarea && "homepage" !== this.dataStructure.contentarea && (t = this.dataStructure.contentarea, e = this.dataStructure.subsection1, n = {
                url_append: "comscorekw=".concat("news" === t && e ? e : t)
            }), document.getElementById("comscore-comment-div") && document.getElementById("comscore-comment-div").remove(), n.url_append && (e = document.createElement("div"), t = document.createComment("comScore Identifier: ".concat(n.url_append)), e.id = "comscore-comment-div", e.appendChild(t), document.body.appendChild(e)), n.bypassUserConsentRequirementFor1PCookie = !0, n.enableFirstPartyCookie = !0, n
        },
        generatePayload: function(e, t) {
            return Object.assign({}, e, t)
        },
        pvCandidate: function() {
            var e = this.getOptions(),
                e = (window.COMSCORE && window.COMSCORE.beacon(this.generatePayload(this.payload, {
                    options: e
                })), void 0 !== e.url_append ? e.url_append + "&" : "");
            CBC.APP.SC.UTIL.makeGETRequest("//www.cbc.ca/g/stats/comscore.json?".concat(e, "cache=").concat((new Date).getTime()), {
                success: function(e, t) {
                    JSON.parse(e.responseText).comscore || console.log("COMSCORE-bottom: json response error")
                },
                failure: function(e, t) {
                    console.log("COMSCORE-bottom: json request error")
                }
            }, {
                success: {
                    success: !0
                },
                failure: {
                    success: !1
                }
            })
        }
    }, Object.keys(CBC.APP.CXENSE).length || (CBC.APP.CXENSE = {
        addMetaTags: function() {
            for (var e = document.querySelectorAll("meta[name^=cXenseParse]"), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t]);
            var n, r, o, i, a = CBC.APP.SC.DTM.formatted.cxense,
                u = document.querySelector("head");
            for (o in a && a.contenttype && (r = "article", "index" === a.contenttype && (r = "frontpage", a.contentarea) && ["video", "kids", "tv"].includes(a.contentarea.toLowerCase()) && (r = "article", "video" !== a.contentarea || a.contentid || (r = "frontpage"), a.subsection1) && ["index", "search"].includes(a.subsection1.toLowerCase()) && (r = "frontpage"), r = this.createMetaTag("cXenseParse:", "pageclass", r), u.appendChild(r)), a && a.contenttype && "index" === a.contenttype && a.contentarea && ["video", "kids", "tv", "life"].includes(a.contentarea.toLowerCase()) && (a.pillar && "legacyee" === a.pillar ? (n = a.subsection2 ? a.subsection2.replace(/[^a-zA-Z0-9"]/g, " ") : "", n += a.subsection3 && "home" !== a.subsection3 ? " " + a.subsection3.replace(/[^a-zA-Z0-9"]/g, " ") : "", r = this.createMetaTag("cXenseParse:", "cbc-keymatch", n), u.appendChild(r)) : "video" === a.contentarea && a.contentid && (n = a.subsection3 ? a.subsection3.replace(/[^a-zA-Z0-9"]/g, " ") : "", r = this.createMetaTag("cXenseParse:", "cbc-keymatch", n), u.appendChild(r))), a) !{}.hasOwnProperty.call(a, o) || (i = this.createMetaTag("cXenseParse:cbc-", o, a[o]), u.appendChild(i), "publishedTime" !== o || isNaN(parseInt(a[o])) || (i = this.createMetaTag("article:", "published_time", new Date(parseInt(a[o])).toISOString(), "property"), u.appendChild(i)), "updatedTime" !== o) || isNaN(parseInt(a[o])) || (i = this.createMetaTag("article:", "modified_time", new Date(parseInt(a[o])).toISOString(), "property"), u.appendChild(i))
        },
        createMetaTag: function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "name",
                o = document.createElement("meta");
            return o.setAttribute(r, e + t), o.setAttribute("content", n), o
        },
        pageView: function() {
            CBC.APP.CXENSE.addMetaTags(), window.cX.callQueue.push(["sendPageViewEvent"])
        }
    }),
    function() {
        var e, t, n;
        window.cX = window.cX || {}, window.cX.callQueue = window.cX.callQueue || [], window.cX.callQueue.push(["setSiteId", "9222369215399074873"]), n = document, e = "script", (t = n.createElement(e)).type = "text/java" + e, t.async = "async", t.src = "https://scdn.cxense.com/cx.js", (n = n.getElementsByTagName(e)[0]) && n.parentNode.insertBefore(t, n)
    }(), CBC.APP.SEARCH.indexer = {
        checkUrlAndIndexPage: function() {
            var t, n, e = CBC.APP.ANA.FORMATTERS.DAL.formatCMS();
            ["polopoly", "mpx", "9", "9cms"].includes(e) || (e = "https://www.cbc.ca/bro/check-url-to-be-indexed", CBC.APP.SC.DTM.DATA.url ? Math.random() >= 1 / 3 || (t = window.location.href.split("?")[0], n = this.indexPage, CBC.APP.SC.UTIL.makePOSTRequest(e, JSON.stringify({
                url: t
            }), {
                success: function(e) {
                    JSON.parse(e.response).exists || n(t)
                },
                failure: function(e, t) {
                    CBC.APP.SC.UTIL.debug("Checking if url can be indexed failed. Unable to talk to BRO endpoint. ".concat(t.failure.uri))
                }
            }, {
                failure: {
                    uri: e
                }
            }, null, {
                "Content-Type": "application/json"
            })) : CBC.APP.SC.UTIL.debug("checking if url can be indexed failed. URL not found in DTM data."))
        },
        indexPage: function(e) {
            var t = "https://www.cbc.ca/bro/send-to-index",
                n = CBC.APP.SEARCH.UTIL.buildPayloadForSearchIndexFromDtmData();
            CBC.APP.SC.UTIL.makePOSTRequest(t, JSON.stringify({
                url: e,
                payload: n
            }), {
                failure: function(e, t) {
                    CBC.APP.SC.UTIL.debug("Index page failed. Error talking to bro endpoint. ".concat(t.failure.uri))
                }
            }, {
                failure: {
                    uri: t
                }
            }, null, {
                "Content-Type": "application/json"
            })
        }
    }, CBC.APP.PubSub.subscribe("CLOSED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("COMMENTED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("FOLLOWED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("IDENTIFY", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t)
    }), CBC.APP.PubSub.subscribe("LISTENED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.ESS.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("LOADED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.Adobe.trackPageView(t), CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.Comscore.trackPageLoad(), CBC.APP.ANA.VALIDATORS.Cxense.trackPageLoad(), CBC.APP.ANA.VALIDATORS.Chartbeat.trackPageLoad(), CBC.APP.ANA.VALIDATORS.ESS.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.FBPIXEL.trackEvent(), CBC.APP.AB.processConductricsViewStateChange(e, t), CBC.APP.SEARCH.indexer.checkUrlAndIndexPage()
    }), CBC.APP.PubSub.subscribe("LOADED MORE", function(e, t) {
        CBC.APP.ANA.VALIDATORS.Adobe.trackPageView(t), CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.Comscore.trackPageLoad(), CBC.APP.ANA.VALIDATORS.Cxense.trackPageLoad(), CBC.APP.ANA.VALIDATORS.Chartbeat.trackPageLoad(), CBC.APP.ANA.VALIDATORS.FBPIXEL.trackEvent(), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("MODIFIED PROFILE", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t)
    }), CBC.APP.PubSub.subscribe("NEXT", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("OPENED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("PLAYED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("PREVIOUS", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("READ", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.ESS.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t), CBC.APP.AB.sendEventGoalToConductrics(e, {})
    }), CBC.APP.PubSub.subscribe("SEARCHED", function(e, t) {
        CBC.APP.SEARCH.UTIL.setDTMSearchData(), CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("SELECTED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("SET PREFERENCE", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("SHARED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("SIGNED IN", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t), CBC.APP.SC.DTM.DATA.authenticated = CBC.APP.SC.PageTracker.isLoggedIn(), CBC.APP.SC.UTIL.setFormattedLayer(), CBC.APP.SC.UTIL.sendDataToUIE(t)
    }), CBC.APP.PubSub.subscribe("SIGNED OUT", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t), CBC.APP.SC.DTM.DATA.authenticated = CBC.APP.SC.PageTracker.isLoggedIn(), CBC.APP.SC.UTIL.setFormattedLayer(), CBC.APP.SC.UTIL.removeCBCPlusID(), CBC.APP.SC.UTIL.sendDataToUIE(t)
    }), CBC.APP.PubSub.subscribe("START WEB SESSION", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("STREAMED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t), CBC.APP.AB.sendEventGoalToConductrics(e, t), CBC.APP.SC.UTIL.sendDataToUIE(t), CBC.APP.ANA.VALIDATORS.ESS.trackEvent(e, t)
    }), CBC.APP.PubSub.subscribe("SUBMITTED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("SUBSCRIBED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t), CBC.APP.SC.UTIL.sendDataToUIE(t)
    }), CBC.APP.PubSub.subscribe("UIEAlert", function() {
        CBC.APP.ANA.VALIDATORS.FBPIXEL.setUserOptinFlag()
    }), CBC.APP.PubSub.subscribe("UNFOLLOWED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("UNSUBSCRIBED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t), CBC.APP.SC.UTIL.sendDataToUIE(t)
    }), CBC.APP.PubSub.subscribe("VIEWED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t)
    }), CBC.APP.PubSub.subscribe("VIEWED AD", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("WATCHED", function(e, t) {
        CBC.APP.ANA.VALIDATORS.DAL.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.MirRoar.trackEvent(e, t), CBC.APP.ANA.VALIDATORS.ESS.trackEvent(e, t), CBC.APP.AB.processConductricsViewStateChange(e, t)
    }), CBC.APP.PubSub.subscribe("mediaAdBreakCompleted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaAdBreakStarted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaBufferCompleted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaBufferStarted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaChapterStarted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaChapterCompleted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaCompleted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaPaused", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaPlayStarted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaSeekStarted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaSeekCompleted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaSessionCompleted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.PubSub.subscribe("mediaSessionStarted", function(e, t) {
        try {
            CBC.APP.ANA.VALIDATORS.HarmonizedAdobe.trackMediaState(e, t)
        } catch (e) {}
    }), CBC.APP.ANA.VALIDATORS.Adobe = function() {
        function t(e) {
            if (s_cbc_sitecatalyst) {
                if (CBC.APP.SC.masterSwitch.switches && CBC.APP.SC.masterSwitch.switches.adobe) return CBC.APP.ANA.FORMATTERS.Adobe.formatSignal(e)
            } else CBC.APP.SC.UTIL.console("The Adobe s_code.js is missing on the page");
            return !1
        }
        return {
            trackPageView: function(e) {
                if (!(0 === Object.keys(CBC.APP.SC.masterSwitch).length || CBC.APP.SC.masterSwitch.switches && null == CBC.APP.SC.masterSwitch.switches.adobe)) return t(e);
                CBC.APP.SC.UTIL.masterSwitchMetaPromise().then(function() {
                    return t(e)
                })
            }
        }
    }(), CBC.APP.ANA.VALIDATORS.DAL = function() {
        var r = function() {
                var n = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, r) {
                    var o, i;
                    return _regeneratorRuntime().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (CBC.APP.SC.masterSwitch.switches.DAL) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (a(n)) {
                                    e.next = 5;
                                    break
                                }
                                return CBC.APP.SC.UTIL.debug("".concat(n, " is not valid.")), e.abrupt("return");
                            case 5:
                                if (u(r)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return");
                            case 7:
                                if ("SIGNED IN" === (n = n.toUpperCase())) return e.prev = 9, e.next = 12, CBC.APP.SC.UTIL.setCBCPlusIDPromise();
                                e.next = 15;
                                break;
                            case 12:
                                return e.prev = 12, CBC.APP.SC.UTIL.getCBCVisitorOrPlusCookieValue({
                                    isCbcPlus: !1
                                }) && CBC.APP.PubSub.publish("UIEAlert"), e.finish(12);
                            case 15:
                                if (o = "IDENTIFY" === n ? CBC.APP.ANA.FORMATTERS.DAL.formatIdentify(r) : CBC.APP.ANA.FORMATTERS.DAL.formatSignal(n, r)) {
                                    e.next = 19;
                                    break
                                }
                                return CBC.APP.SC.UTIL.debug("".concat(n, ": ERROR: DAL Payload is invalid: null")), e.abrupt("return");
                            case 19:
                                if (t = o.user, "SIGNED IN" !== n ? t.id && t.id.cbc && 0 < t.id.cbc.length : t.id && t.id.cbcplus && 0 < t.id.cbcplus.length) {
                                    e.next = 22;
                                    break
                                }
                                return e.next = 22, c(n, o);
                            case 22:
                                i = r.eventCallBackFunc, CBC.APP.ANA.DISPATCHERS.DAL.dispatch(o, 0, i);
                            case 24:
                            case "end":
                                return e.stop()
                        }
                        var t
                    }, e, null, [
                        [9, , 12, 15]
                    ])
                }));
                return function(e, t) {
                    return n.apply(this, arguments)
                }
            }(),
            a = function(e) {
                return null == e ? (CBC.APP.SC.UTIL.debug("DalFormatter - Error: Event name is null."), !1) : "string" != typeof e ? (CBC.APP.SC.UTIL.debug("DalFormatter - Error: Event name is not a string."), !1) : Boolean(CBC.APP.SC.EventTracker.getValidEvents()[e.toUpperCase()])
            },
            u = function(e) {
                return "object" === _typeof(e) || (CBC.APP.SC.UTIL.debug("DalFormatter - Error: Event properties is not an object."), !1)
            };
        var n, c = function() {
                var n = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
                    var r;
                    return _regeneratorRuntime().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return CBC.APP.SC.UTIL.debug("".concat(t, ": DAL Payload user.id is missing")), r = window.viafoura && window.viafoura.users && window.viafoura.users.current && window.viafoura.users.current(), r = r && r.id ? "plus" : "visitor", e.next = 5, o(n, r);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }));
                return function(e, t) {
                    return n.apply(this, arguments)
                }
            }(),
            o = function(e, t) {
                return ("visitor" === t ? CBC.APP.SC.UTIL.setCBCVisitorIDPromise : CBC.APP.SC.UTIL.setCBCPlusIDPromise)().then(function() {
                    e.user.tier = CBC.APP.SC.UTIL.getUserTier(), e.device && (e.device.id = e.device.id || {}, e.device.id.uuid = CBC.APP.SC.UTIL.getCBCVisitorOrPlusCookieValue({
                        isCbcPlus: !1
                    }))
                }).catch(function(e) {
                    CBC.APP.SC.UTIL.debug("Error fetching user ID for ".concat(t, ": ").concat(e))
                }).finally(function() {
                    e.user.id = i(), CBC.APP.SC.UTIL.getCookie(t ? "cbc_visitor" : "cbc_plus") && CBC.APP.PubSub.publish("UIEAlert")
                })
            },
            i = function() {
                var e = {},
                    t = CBC.APP.SC.UTIL.getCBCVisitorOrPlusCookieValue({
                        isCbcPlus: !1
                    }),
                    n = CBC.APP.SC.UTIL.getCBCVisitorOrPlusCookieValue({
                        isCbcPlus: !0
                    });
                return t && t.length && (e.cbc = t), n && n.length && (e.cbcplus = n), e
            };
        return {
            trackEvent: (n = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
                return _regeneratorRuntime().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            0 === Object.keys(CBC.APP.SC.masterSwitch).length || CBC.APP.SC.masterSwitch.switches && null == CBC.APP.SC.masterSwitch.switches.DAL ? (CBC.APP.SC.UTIL.masterSwitchMetaPromise().then(_asyncToGenerator(_regeneratorRuntime().mark(function e() {
                                return _regeneratorRuntime().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r(t, n);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))), e.next = 6) : e.next = 4;
                            break;
                        case 4:
                            return e.next = 6, r(t, n);
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e, t) {
                return n.apply(this, arguments)
            }),
            logEvent: r,
            updateUserAndDeviceIdsAndTier: o
        }
    }(), CBC.APP.ANA.VALIDATORS.Common = {
        validateAppName: function(e) {
            return CBC.APP.SC.UTIL.getMetadataAllowlist().metadata.allowlist.app.name[e]
        },
        validateFromAllowlist: function(e, t) {
            for (var n = CBC.APP.SC.UTIL.getMetadataAllowlist().metadata.allowlist, r = e.split("."), o = n, i = 0; i < r.length; i++) {
                var a = r[i];
                if (!("object" === _typeof(o) && null !== o && a in o)) return;
                o = o[a]
            }
            return o.pattern ? new RegExp(o.pattern).test(t) : o[t]
        },
        getFeatureNameRegex: function() {
            return ["^tab\\.(\\w+-?\\w*)+$", "^tab\\.(\\w+-?\\w*)+\\.card$", "^tab\\.(\\w+-?\\w*)+\\.card\\.label$", "^category\\.list\\.card$", "^tab\\.sections\\.list$", "^tab\\.sections\\.regions\\.list$", "^tab\\.sections\\.list\\.card$", "^tab\\.sections\\.regions\\.list\\.card$", "^tab\\.local\\.editors-picks\\.\\b(\\w*[-]?\\w*)\\b$", "^tab\\.local\\.pub-time\\$*", "^search$", "^tab\\.(\\w+-?\\w*)+\\.(\\w+-?\\w*)+\\.card$", "^deeplink\\.(notification|widget|url|search)$", "^story\\.(leadmedia|leadgallery|leadimage|similarlink|hyperlink|relatedlink|photogallery|image)$", "^tab\\.(\\w+-?\\w*)+\\.content-package\\.(main-visual|title|link-[\\d]+)$", "^tab\\.(\\w+-?\\w*)+\\.(\\w+-?\\w*)+\\.more$"]
        },
        validatePlayedContentType: function(e) {
            return !(e.event_properties && e.event_properties.content && "game" !== e.event_properties.content.type || e.content && "game" !== e.content.type)
        }
    }, CBC.APP.ANA.VALIDATORS.MirRoar = function() {
        function n(e, t) {
            if (CBC.APP.SC.masterSwitch.switches.MirRoar) CBC.APP.ANA.FORMATTERS.MirRoar.formatSignal(e, t)
        }
        return {
            trackEvent: function(e, t) {
                0 === Object.keys(CBC.APP.SC.masterSwitch).length || CBC.APP.SC.masterSwitch.switches && null == CBC.APP.SC.masterSwitch.switches.MirRoar ? CBC.APP.SC.UTIL.masterSwitchMetaPromise().then(function() {
                    n(e, t)
                }) : n(e, t)
            }
        }
    }(), CBC.APP.ANA.VALIDATORS.Comscore = {
        trackPageLoad: function() {
            CBC.APP.COMSCORE && !CBC.APP.SC.UTIL.isIOSWebviewPrivate() && CBC.APP.COMSCORE.Call()
        }
    }, CBC.APP.ANA.VALIDATORS.Chartbeat = {
        trackPageLoad: function() {
            window._sf_async_config.cbc && "gamp" !== CBC.APP.SC.DTM.formatted.adobe.syndicate && window._sf_async_config.cbc.pageChange()
        }
    }, CBC.APP.ANA.VALIDATORS.Cxense = {
        trackPageLoad: function() {
            CBC.APP.CXENSE && CBC.APP.CXENSE.pageView()
        }
    }, CBC.APP.ANA.VALIDATORS.HarmonizedAdobe = function() {
        var o = JSON.parse('{\n    "app": {\n        "name": {\n            "mediaSessionStarted": {\n                "mandatory": true,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            }\n        },\n        "version": {\n            "mediaSessionStarted": {\n                "mandatory": true,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            }\n        }\n    },\n    "cms": {\n        "content": {\n            "area": {\n                "mediaSessionStarted": {\n                    "mandatory": false,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "cms": {\n                "mediaSessionStarted": {\n                    "mandatory": true,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "genre": {\n                "level1": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                }\n            },\n            "id": {\n                "mediaSessionStarted": {\n                    "mandatory": true,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "keywords": {\n                "mediaSessionStarted": {\n                    "mandatory": false,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "media": {\n                "chapter_length": {\n                    "mediaChapterStarted": {\n                        "mandatory": true,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                },\n                "chapter_name": {\n                    "mediaChapterStarted": {\n                        "mandatory": true,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                },\n                "chapter_number": {\n                    "mediaChapterStarted": {\n                        "mandatory": true,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                },\n                "chapter_start": {\n                    "mediaChapterStarted": {\n                        "mandatory": true,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                },\n                "episode": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["on-demand"]\n                    }\n                },\n                "is_full_episode": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                },\n                "length": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["on-demand"]\n                    }\n                },\n                "liveondemand": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                },\n                "media_title": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                },\n                "region": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                },\n                "season": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["on-demand"]\n                    }\n                },\n                "sport": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                },\n                "stream_type": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["ALL_STREAM_TYPES"]\n                    }\n                }\n            },\n            "producer": {\n                "name": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["on-demand"]\n                    }\n                }\n            },\n            "published": {\n                "date": {\n                    "mediaSessionStarted": {\n                        "mandatory": false,\n                        "streamTypes": ["live", "on-demand"]\n                    }\n                }\n            },\n            "station_code": {\n                "mediaSessionStarted": {\n                    "mandatory": false,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "tier": {\n                "mediaSessionStarted": {\n                    "mandatory": false,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "title": {\n                "mediaSessionStarted": {\n                    "mandatory": false,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "type": {\n                "mediaSessionStarted": {\n                    "mandatory": false,\n                    "streamTypes": ["ALL_STREAM_TYPES"],\n                    "allowlistLocation": "content.media.type"\n                }\n            }\n        },\n        "department": {\n            "level1": {\n                "mediaSessionStarted": {\n                    "mandatory": false,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "level2": {\n                "mediaSessionStarted": {\n                    "mandatory": false,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "level3": {\n                "mediaSessionStarted": {\n                    "mandatory": false,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            }\n        }\n    },\n    "feature": {\n        "instance": {\n            "mediaSessionStarted": {\n                "mandatory": false,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            }\n        },\n        "name": {\n            "mediaSessionStarted": {\n                "mandatory": false,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            }\n        },\n        "position": {\n            "mediaSessionStarted": {\n                "mandatory": false,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            }\n        },\n        "value": {\n            "mediaSessionStarted": {\n                "mandatory": false,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            }\n        }\n    },\n    "player": {\n        "mediaAdBreak": {\n            "name": {\n                "mediaAdBreakStarted": {\n                    "mandatory": true,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "offset": {\n                "mediaAdBreakStarted": {\n                    "mandatory" : true,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            },\n            "podIndex": {\n                "mediaAdBreakStarted": {\n                    "mandatory": true,\n                    "streamTypes": ["ALL_STREAM_TYPES"]\n                }\n            }\n        },\n        "name": {\n            "mediaSessionStarted": {\n                "mandatory": false,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            }\n        },\n        "playhead": {\n            "mediaSessionStarted": {\n                "mandatory": true,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            },\n            "mediaAdBreakStarted": {\n                "mandatory": true,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            },\n            "mediaChapterStarted": {\n                "mandatory": true,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            },\n            "mediaOther": {\n                "mandatory": true,\n                "streamTypes": ["ALL_STREAM_TYPES"]\n            }\n        }\n    },\n    "sponsor": {\n        "name": {\n            "mediaSessionStarted": {\n                "mandatory": false,\n                "streamTypes": ["on-demand"]\n            }\n        }\n    }\n}\n');
        return {
            trackPageLoad: function() {
                CBC.APP.ANA.FORMATTERS.HarmonizedAdobe.formatPageLoad()
            },
            trackEvent: function(e, t) {
                CBC.APP.ANA.FORMATTERS.HarmonizedAdobe.formatSignal(e, t)
            },
            trackMediaState: function(e, t) {
                if (!t.media_object) throw {
                    name: "MEDIAOBJ_NOT_FOUND",
                    message: "The media_object object was not found at its expected location in the payload."
                };
                var n = Object.getOwnPropertyNames(t.media_object)[0],
                    r = window.CBCRC.ANA.MEDIA.getActivePlayerList();
                if (!(n && {}.hasOwnProperty.call(r, n) && ["mediaAdBreakCompleted", "mediaAdBreakStarted", "mediaBufferCompleted", "mediaBufferStarted", "mediaChapterStarted", "mediaChapterCompleted", "mediaCompleted", "mediaPaused", "mediaPlayStarted", "mediaSeekStarted", "mediaSeekCompleted", "mediaSessionCompleted", "mediaSessionStarted"].includes(e))) throw {
                    name: "MEDIAOBJ_ID_INVALID",
                    message: "The Harmonized Media Tracking ID is either missing or not properly mapped against vendor media tracking."
                };
                r = t.media_object[n], n = window.CBCRC.ANA.DATALAYER.validateMediaProperties(e, r, o, []);
                if (n.returnCode) throw n;
                window.CBC.APP.ANA.FORMATTERS.HarmonizedAdobe.formatMediaSignal(e, t)
            }
        }
    }(), CBC.APP.ANA.VALIDATORS.ESS = function() {
        var r = {
            LISTENED: "LISTENED",
            LOADED: "LOADED",
            READ: "READ",
            STREAMED: "STREAMED",
            WATCHED: "WATCHED"
        };
        return {
            trackEvent: function(e, t) {
                var n = CBC.APP.ANA.FORMATTERS.ESS.generateGoogleCloudPayload(),
                    t = JSON.parse(JSON.stringify(t));
                if (CBC.APP.ANA.FORMATTERS.ESS && CBC.APP.SC.masterSwitch && CBC.APP.SC.masterSwitch.switches && !CBC.APP.SC.UTIL.getDoNotTrackValue()) return e = e.toUpperCase(), !!Object.keys(r).includes(e) && (e !== r.LOADED || "story" === CBC.APP.SC.DTM.formatted.raw.contenttype) && (e === r.READ ? !(!CBC.APP.SC.masterSwitch.switches.essv0 || n && n.content && (!n.content.id || "comments" === n.content.type) || (CBC.APP.ANA.FORMATTERS.ESS.formatSignal(e, n), 0)) : !(!CBC.APP.SC.masterSwitch.switches.essv1 || !CBC.APP.SC.masterSwitch.switches.essv0) && void CBC.APP.ANA.FORMATTERS.ESS.formatSignal(e, t))
            }
        }
    }(), CBC.APP.ANA.DISPATCHERS.Adobe = {
        dispatch: function(e) {
            e.t()
        }
    }, CBC.APP.ANA.DISPATCHERS.DAL = {
        dispatch: function(r) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
                i = e,
                e = "https://dal.data.cbc.ca/v1/publish",
                a = (new Map).set(500, !0).set(502, !0).set(503, !0).set(504, !0);
            CBC.APP.SC.UTIL.makePOSTRequest(e, JSON.stringify(r), {
                success: function(e, t) {
                    void 0 !== o && o(JSON.parse(e.response))
                },
                failure: function(e, t) {
                    var n;
                    a.has(e.status) && 0 < i ? (--i, setTimeout(function() {
                        CBC.APP.ANA.DISPATCHERS.DAL.dispatch(r, i, o)
                    }, 2e3)) : (n = "", n = a.has(e.status) && i <= 0 ? "ERROR: DAL Server too busy or overloaded." : 400 === e.status ? "ERROR: Missing or wrong DAL Payload." : "Unable to talk to DAL endpoint.", CBC.APP.SC.UTIL.debug(n), "function" == typeof o && o({
                        status: e.status,
                        statusText: e.statusText,
                        message: n
                    }))
                }
            }, {
                success: {
                    uri: e
                },
                failure: {
                    payload: r,
                    uri: e
                }
            }, null, {
                "Content-Type": "application/json"
            })
        }
    }, CBC.APP.ANA.DISPATCHERS.FBPIXEL = {
        pageView: function() {
            fbq("trackCustom", "LOADED")
        }
    }, CBC.APP.ANA.DISPATCHERS.MirRoar = {
        dispatch: function(e) {
            CBC.APP.SC.UTIL.makePOSTRequest("https://us-central1-digitalproducts-gabbo.cloudfunctions.net/web_streaming_prod", JSON.stringify(e), {
                success: function(e, t) {},
                failure: function(e, t) {}
            }, {
                success: {
                    uri: "https://us-central1-digitalproducts-gabbo.cloudfunctions.net/web_streaming_prod"
                },
                failure: {
                    payload: e,
                    uri: "https://us-central1-digitalproducts-gabbo.cloudfunctions.net/web_streaming_prod"
                }
            }, null, {
                "Content-Type": "application/json"
            })
        }
    }, CBC.APP.ANA.DISPATCHERS.HarmonizedAdobe = {
        trackEvent: function(e) {
            s_cbc_sitecatalyst && s_cbc_sitecatalyst.tl(!0, "o", e)
        },
        trackPageLoad: function() {
            s_cbc_sitecatalyst && (s_cbc_sitecatalyst.events = "", s_cbc_sitecatalyst.t())
        },
        trackMediaSignal: function(e, t, n) {
            var r = Object.getOwnPropertyNames(t.media_object)[0],
                o = window.CBCRC.ANA.MEDIA.getActivePlayerList();
            if (!{}.hasOwnProperty.call(o, r)) throw {
                name: "MEDIA_ID_INVALID",
                message: "The media tracking ID supplied is either invalid or expired. Dispatch aborted."
            };
            var i = o[r],
                a = t.media_object[r],
                u = Number(a.player.playhead);
            switch (e) {
                case "mediaAdBreakCompleted":
                    CBC.APP.SC.VideoHeartbeat.adComplete(i, {
                        id: "Not Specified"
                    }), CBC.APP.SC.VideoHeartbeat.adBreakComplete(i, {
                        playhead: u
                    });
                    break;
                case "mediaAdBreakStarted":
                    var c = n[0];
                    CBC.APP.SC.VideoHeartbeat.adBreakStart(i, c);
                    CBC.APP.SC.VideoHeartbeat.adStart(i, {
                        id: "Not Specified",
                        length: 1,
                        name: "Not Specified",
                        position: 1
                    });
                    break;
                case "mediaBufferCompleted":
                    CBC.APP.SC.VideoHeartbeat.bufferComplete(i, {
                        playhead: u
                    });
                    break;
                case "mediaBufferStarted":
                    CBC.APP.SC.VideoHeartbeat.bufferStart(i, {
                        playhead: u
                    });
                    break;
                case "mediaChapterStarted":
                    c = n[0];
                    CBC.APP.SC.VideoHeartbeat.chapterStart(i, c);
                    break;
                case "mediaChapterCompleted":
                    CBC.APP.SC.VideoHeartbeat.chapterComplete(i, {
                        playhead: u
                    });
                    break;
                case "mediaCompleted":
                    CBC.APP.SC.VideoHeartbeat.videoComplete(i, {
                        playhead: u
                    });
                    break;
                case "mediaPaused":
                    CBC.APP.SC.VideoHeartbeat.videoPause(i, {
                        playhead: u
                    });
                    break;
                case "mediaPlayStarted":
                    CBC.APP.SC.VideoHeartbeat.videoPlay(i, {
                        playhead: u
                    });
                    break;
                case "mediaSeekCompleted":
                    CBC.APP.SC.VideoHeartbeat.seekComplete(i, {
                        playhead: u
                    });
                    break;
                case "mediaSeekStarted":
                    CBC.APP.SC.VideoHeartbeat.seekStart(i, {
                        playhead: u
                    });
                    break;
                case "mediaSessionCompleted":
                    CBC.APP.SC.VideoHeartbeat.videoUnload(i), CBCRC.ANA.MEDIA.destroy(r);
                    break;
                case "mediaSessionStarted":
                    c = n[0], c = (CBC.APP.SC.VideoHeartbeat.init(c), n[1]);
                    CBC.APP.SC.VideoHeartbeat.videoLoad(i, c, a);
                    break;
                default:
                    throw CBC.APP.ANA.ER.report("Unknown Harmonized Signal ".concat(e), e, [CBC.APP.ANA.ER.TAG_TYPES.error.VAL, CBC.APP.ANA.ER.TAG_TYPES.tracking.MEDIA]), {
                        name: "MEDIA_SIGNAL_UNKNOWN",
                        message: "The media signal being dispatched is not recognized. Dispatch aborted."
                    }
            }
        }
    }, CBC.APP.ANA.DISPATCHERS.ESS = {
        trackEvent: function(o, i, a) {
            var u = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 3;
            0 !== o || CBC.APP.SC.masterSwitch.switches.essv0 ? 1 !== o || CBC.APP.SC.masterSwitch.switches.essv1 ? CBC.APP.SC.UTIL.cmpPromise("personaliz-rT2hmC9K").then(function(e) {
                var n = u,
                    r = (new Map).set(500, !0).set(502, !0).set(503, !0).set(504, !0),
                    t = (0 === o ? CBC.APP.SC.masterSwitch.googlecloud.essv0 : CBC.APP.SC.masterSwitch.googlecloud.essv1).url;
                1 === o && Array.isArray(i) && 0 < i.length && "EssEngages" === i[0].type && .75 === i[0].percent && 1 === e || CBC.APP.SC.UTIL.makePOSTRequest(t, JSON.stringify(i), {
                    success: function(e, t) {
                        void 0 !== a && a(JSON.parse(e.response))
                    },
                    failure: function(e, t) {
                        r.has(e.status) && 0 < n ? (--n, setTimeout(function() {
                            CBC.APP.ANA.DISPATCHERS.ESS.trackEvent(o, i, a, n)
                        }, 2e3)) : r.has(e.status) && n <= 0 ? (console.log("ERROR: ESS Server too busy or overloaded."), console.log("    URL: " + t.failure.uri), console.log("    Payload: " + JSON.stringify(t.failure.payload))) : 400 === e.status ? (console.log("ERROR: Missing or malformed ESS Payload."), console.log("    Payload: " + JSON.stringify(t.failure.payload))) : (console.log("ERROR: Unable to talk to ESS Enpoint."), console.log("    URL: " + t.failure.uri))
                    }
                }, {
                    success: {
                        uri: t
                    },
                    failure: {
                        payload: i,
                        uri: t
                    }
                }, null, {
                    "Content-Type": "application/json",
                    "X-ESS-DNT": "".concat(e)
                })
            }).catch(function(e) {
                console.log("ERROR: ESS-Dispatcher Promise Returned an Error.", e)
            }) : console.log("ERROR: ESS v1 is disabled.") : console.log("ERROR: ESS v0 is disabled.")
        }
    },
    function() {
        var o, i, e, a, p, u, c, A, s, l, f, t, d, n, r, h, C, P, g, M, x, v, b, S, V, U, m, y, j, F, G = {
                486: function(y, w, _) {
                    var T;
                    y = _.nmd(y),
                        function() {
                            var Oi, Ni = "Expected a function",
                                sa = "__lodash_hash_undefined__",
                                la = "__lodash_placeholder__",
                                ki = 9007199254740991,
                                Mi = 4294967295,
                                fa = [
                                    ["ary", 128],
                                    ["bind", 1],
                                    ["bindKey", 2],
                                    ["curry", 8],
                                    ["curryRight", 16],
                                    ["flip", 512],
                                    ["partial", 32],
                                    ["partialRight", 64],
                                    ["rearg", 256]
                                ],
                                xi = "[object Arguments]",
                                da = "[object Array]",
                                Vi = "[object Boolean]",
                                Ui = "[object Date]",
                                pa = "[object Error]",
                                ha = "[object Function]",
                                Ca = "[object GeneratorFunction]",
                                ji = "[object Map]",
                                Fi = "[object Number]",
                                Gi = "[object Object]",
                                Aa = "[object Promise]",
                                Yi = "[object RegExp]",
                                Hi = "[object Set]",
                                zi = "[object String]",
                                Pa = "[object Symbol]",
                                Wi = "[object WeakMap]",
                                $i = "[object ArrayBuffer]",
                                Ki = "[object DataView]",
                                ga = "[object Float32Array]",
                                va = "[object Float64Array]",
                                ba = "[object Int8Array]",
                                Sa = "[object Int16Array]",
                                ma = "[object Int32Array]",
                                ya = "[object Uint8Array]",
                                wa = "[object Uint8ClampedArray]",
                                _a = "[object Uint16Array]",
                                Ta = "[object Uint32Array]",
                                Ba = /\b__p \+= '';/g,
                                Ea = /\b(__p \+=) '' \+/g,
                                La = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                                Ra = /&(?:amp|lt|gt|quot|#39);/g,
                                Da = /[&<>"']/g,
                                Ia = RegExp(Ra.source),
                                Oa = RegExp(Da.source),
                                Na = /<%-([\s\S]+?)%>/g,
                                ka = /<%([\s\S]+?)%>/g,
                                Ma = /<%=([\s\S]+?)%>/g,
                                xa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                                Va = /^\w*$/,
                                Ua = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                                ja = /[\\^$.*+?()[\]{}|]/g,
                                Fa = RegExp(ja.source),
                                Ga = /^\s+/,
                                a = /\s/,
                                Ya = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                                Ha = /\{\n\/\* \[wrapped with (.+)\] \*/,
                                za = /,? & /,
                                Wa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                                $a = /[()=,{}\[\]\/\s]/,
                                Ka = /\\(\\)?/g,
                                qa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                                Ja = /\w*$/,
                                Xa = /^[-+]0x[0-9a-f]+$/i,
                                Za = /^0b[01]+$/i,
                                Qa = /^\[object .+?Constructor\]$/,
                                eu = /^0o[0-7]+$/i,
                                tu = /^(?:0|[1-9]\d*)$/,
                                nu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                                ru = /($^)/,
                                ou = /['\n\r\u2028\u2029\\]/g,
                                u = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                                e = "a-z\\xdf-\\xf6\\xf8-\\xff",
                                t = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                                n = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                                c = "[" + n + "]",
                                r = "[" + u + "]",
                                s = "[" + e + "]",
                                n = "[^\\ud800-\\udfff" + n + "\\d+\\u2700-\\u27bf" + e + t + "]",
                                e = "\\ud83c[\\udffb-\\udfff]",
                                l = "[^\\ud800-\\udfff]",
                                o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                                f = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                                t = "[" + t + "]",
                                d = "(?:" + s + "|" + n + ")",
                                n = "(?:" + t + "|" + n + ")",
                                p = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                                h = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                                C = "(?:" + r + "|" + e + ")?",
                                A = "[\\ufe0e\\ufe0f]?",
                                A = A + C + "(?:\\u200d(?:" + [l, o, f].join("|") + ")" + A + C + ")*",
                                C = "(?:" + ["[\\u2700-\\u27bf]", o, f].join("|") + ")" + A,
                                l = "(?:" + [l + r + "?", r, o, f, "[\\ud800-\\udfff]"].join("|") + ")",
                                iu = RegExp("['’]", "g"),
                                au = RegExp(r, "g"),
                                P = RegExp(e + "(?=" + e + ")|" + l + A, "g"),
                                uu = RegExp([t + "?" + s + "+" + p + "(?=" + [c, t, "$"].join("|") + ")", n + "+" + h + "(?=" + [c, t + d, "$"].join("|") + ")", t + "?" + d + "+" + p, t + "+" + h, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", C].join("|"), "g"),
                                g = RegExp("[\\u200d\\ud800-\\udfff" + u + "\\ufe0e\\ufe0f]"),
                                cu = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                                su = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                                lu = -1,
                                qi = {},
                                Ji = (qi[ga] = qi[va] = qi[ba] = qi[Sa] = qi[ma] = qi[ya] = qi[wa] = qi[_a] = qi[Ta] = !0, qi[xi] = qi[da] = qi[$i] = qi[Vi] = qi[Ki] = qi[Ui] = qi[pa] = qi[ha] = qi[ji] = qi[Fi] = qi[Gi] = qi[Yi] = qi[Hi] = qi[zi] = qi[Wi] = !1, {}),
                                v = (Ji[xi] = Ji[da] = Ji[$i] = Ji[Ki] = Ji[Vi] = Ji[Ui] = Ji[ga] = Ji[va] = Ji[ba] = Ji[Sa] = Ji[ma] = Ji[ji] = Ji[Fi] = Ji[Gi] = Ji[Yi] = Ji[Hi] = Ji[zi] = Ji[Pa] = Ji[ya] = Ji[wa] = Ji[_a] = Ji[Ta] = !0, Ji[pa] = Ji[ha] = Ji[Wi] = !1, {
                                    "\\": "\\",
                                    "'": "'",
                                    "\n": "n",
                                    "\r": "r",
                                    "\u2028": "u2028",
                                    "\u2029": "u2029"
                                }),
                                fu = parseFloat,
                                du = parseInt,
                                o = "object" == _typeof(_.g) && _.g && _.g.Object === Object && _.g,
                                f = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
                                Xi = o || f || Function("return this")(),
                                r = w && !w.nodeType && w,
                                i = r && y && !y.nodeType && y,
                                pu = i && i.exports === r,
                                b = pu && o.process,
                                e = function() {
                                    try {
                                        return i && i.require && i.require("util").types || b && b.binding && b.binding("util")
                                    } catch (e) {}
                                }(),
                                hu = e && e.isArrayBuffer,
                                Cu = e && e.isDate,
                                Au = e && e.isMap,
                                Pu = e && e.isRegExp,
                                gu = e && e.isSet,
                                vu = e && e.isTypedArray;

                            function Zi(e, t, n) {
                                switch (n.length) {
                                    case 0:
                                        return e.call(t);
                                    case 1:
                                        return e.call(t, n[0]);
                                    case 2:
                                        return e.call(t, n[0], n[1]);
                                    case 3:
                                        return e.call(t, n[0], n[1], n[2])
                                }
                                return e.apply(t, n)
                            }

                            function bu(e, t, n, r) {
                                for (var o = -1, i = null == e ? 0 : e.length; ++o < i;) {
                                    var a = e[o];
                                    t(r, a, n(a), e)
                                }
                                return r
                            }

                            function Qi(e, t) {
                                for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
                                return e
                            }

                            function Su(e, t) {
                                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                                    if (!t(e[n], n, e)) return !1;
                                return !0
                            }

                            function ea(e, t) {
                                for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r;) {
                                    var a = e[n];
                                    t(a, n, e) && (i[o++] = a)
                                }
                                return i
                            }

                            function mu(e, t) {
                                return !(null == e || !e.length) && -1 < ra(e, t, 0)
                            }

                            function yu(e, t, n) {
                                for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
                                    if (n(t, e[r])) return !0;
                                return !1
                            }

                            function ta(e, t) {
                                for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
                                return o
                            }

                            function na(e, t) {
                                for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
                                return e
                            }

                            function wu(e, t, n, r) {
                                var o = -1,
                                    i = null == e ? 0 : e.length;
                                for (r && i && (n = e[++o]); ++o < i;) n = t(n, e[o], o, e);
                                return n
                            }

                            function _u(e, t, n, r) {
                                var o = null == e ? 0 : e.length;
                                for (r && o && (n = e[--o]); o--;) n = t(n, e[o], o, e);
                                return n
                            }

                            function Tu(e, t) {
                                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                                    if (t(e[n], n, e)) return !0;
                                return !1
                            }
                            var S = Iu("length");

                            function Bu(e, r, t) {
                                var o;
                                return t(e, function(e, t, n) {
                                    if (r(e, t, n)) return o = t, !1
                                }), o
                            }

                            function Eu(e, t, n, r) {
                                for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
                                    if (t(e[i], i, e)) return i;
                                return -1
                            }

                            function ra(e, t, n) {
                                if (t != t) return Eu(e, Ru, n);
                                for (var r = e, o = t, i = n - 1, a = r.length; ++i < a;)
                                    if (r[i] === o) return i;
                                return -1
                            }

                            function Lu(e, t, n, r) {
                                for (var o = n - 1, i = e.length; ++o < i;)
                                    if (r(e[o], t)) return o;
                                return -1
                            }

                            function Ru(e) {
                                return e != e
                            }

                            function Du(e, t) {
                                var n = null == e ? 0 : e.length;
                                return n ? Nu(e, t) / n : NaN
                            }

                            function Iu(t) {
                                return function(e) {
                                    return null == e ? Oi : e[t]
                                }
                            }

                            function m(t) {
                                return function(e) {
                                    return null == t ? Oi : t[e]
                                }
                            }

                            function Ou(e, r, o, i, t) {
                                return t(e, function(e, t, n) {
                                    o = i ? (i = !1, e) : r(o, e, t, n)
                                }), o
                            }

                            function Nu(e, t) {
                                for (var n, r = -1, o = e.length; ++r < o;) {
                                    var i = t(e[r]);
                                    i !== Oi && (n = n === Oi ? i : n + i)
                                }
                                return n
                            }

                            function ku(e, t) {
                                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                                return r
                            }

                            function Mu(e) {
                                return e && e.slice(0, $u(e) + 1).replace(Ga, "")
                            }

                            function oa(t) {
                                return function(e) {
                                    return t(e)
                                }
                            }

                            function xu(t, e) {
                                return ta(e, function(e) {
                                    return t[e]
                                })
                            }

                            function Vu(e, t) {
                                return e.has(t)
                            }

                            function Uu(e, t) {
                                for (var n = -1, r = e.length; ++n < r && -1 < ra(t, e[n], 0););
                                return n
                            }

                            function ju(e, t) {
                                for (var n = e.length; n-- && -1 < ra(t, e[n], 0););
                                return n
                            }
                            var Fu = m({
                                    "À": "A",
                                    "Á": "A",
                                    "Â": "A",
                                    "Ã": "A",
                                    "Ä": "A",
                                    "Å": "A",
                                    "à": "a",
                                    "á": "a",
                                    "â": "a",
                                    "ã": "a",
                                    "ä": "a",
                                    "å": "a",
                                    "Ç": "C",
                                    "ç": "c",
                                    "Ð": "D",
                                    "ð": "d",
                                    "È": "E",
                                    "É": "E",
                                    "Ê": "E",
                                    "Ë": "E",
                                    "è": "e",
                                    "é": "e",
                                    "ê": "e",
                                    "ë": "e",
                                    "Ì": "I",
                                    "Í": "I",
                                    "Î": "I",
                                    "Ï": "I",
                                    "ì": "i",
                                    "í": "i",
                                    "î": "i",
                                    "ï": "i",
                                    "Ñ": "N",
                                    "ñ": "n",
                                    "Ò": "O",
                                    "Ó": "O",
                                    "Ô": "O",
                                    "Õ": "O",
                                    "Ö": "O",
                                    "Ø": "O",
                                    "ò": "o",
                                    "ó": "o",
                                    "ô": "o",
                                    "õ": "o",
                                    "ö": "o",
                                    "ø": "o",
                                    "Ù": "U",
                                    "Ú": "U",
                                    "Û": "U",
                                    "Ü": "U",
                                    "ù": "u",
                                    "ú": "u",
                                    "û": "u",
                                    "ü": "u",
                                    "Ý": "Y",
                                    "ý": "y",
                                    "ÿ": "y",
                                    "Æ": "Ae",
                                    "æ": "ae",
                                    "Þ": "Th",
                                    "þ": "th",
                                    "ß": "ss",
                                    "Ā": "A",
                                    "Ă": "A",
                                    "Ą": "A",
                                    "ā": "a",
                                    "ă": "a",
                                    "ą": "a",
                                    "Ć": "C",
                                    "Ĉ": "C",
                                    "Ċ": "C",
                                    "Č": "C",
                                    "ć": "c",
                                    "ĉ": "c",
                                    "ċ": "c",
                                    "č": "c",
                                    "Ď": "D",
                                    "Đ": "D",
                                    "ď": "d",
                                    "đ": "d",
                                    "Ē": "E",
                                    "Ĕ": "E",
                                    "Ė": "E",
                                    "Ę": "E",
                                    "Ě": "E",
                                    "ē": "e",
                                    "ĕ": "e",
                                    "ė": "e",
                                    "ę": "e",
                                    "ě": "e",
                                    "Ĝ": "G",
                                    "Ğ": "G",
                                    "Ġ": "G",
                                    "Ģ": "G",
                                    "ĝ": "g",
                                    "ğ": "g",
                                    "ġ": "g",
                                    "ģ": "g",
                                    "Ĥ": "H",
                                    "Ħ": "H",
                                    "ĥ": "h",
                                    "ħ": "h",
                                    "Ĩ": "I",
                                    "Ī": "I",
                                    "Ĭ": "I",
                                    "Į": "I",
                                    "İ": "I",
                                    "ĩ": "i",
                                    "ī": "i",
                                    "ĭ": "i",
                                    "į": "i",
                                    "ı": "i",
                                    "Ĵ": "J",
                                    "ĵ": "j",
                                    "Ķ": "K",
                                    "ķ": "k",
                                    "ĸ": "k",
                                    "Ĺ": "L",
                                    "Ļ": "L",
                                    "Ľ": "L",
                                    "Ŀ": "L",
                                    "Ł": "L",
                                    "ĺ": "l",
                                    "ļ": "l",
                                    "ľ": "l",
                                    "ŀ": "l",
                                    "ł": "l",
                                    "Ń": "N",
                                    "Ņ": "N",
                                    "Ň": "N",
                                    "Ŋ": "N",
                                    "ń": "n",
                                    "ņ": "n",
                                    "ň": "n",
                                    "ŋ": "n",
                                    "Ō": "O",
                                    "Ŏ": "O",
                                    "Ő": "O",
                                    "ō": "o",
                                    "ŏ": "o",
                                    "ő": "o",
                                    "Ŕ": "R",
                                    "Ŗ": "R",
                                    "Ř": "R",
                                    "ŕ": "r",
                                    "ŗ": "r",
                                    "ř": "r",
                                    "Ś": "S",
                                    "Ŝ": "S",
                                    "Ş": "S",
                                    "Š": "S",
                                    "ś": "s",
                                    "ŝ": "s",
                                    "ş": "s",
                                    "š": "s",
                                    "Ţ": "T",
                                    "Ť": "T",
                                    "Ŧ": "T",
                                    "ţ": "t",
                                    "ť": "t",
                                    "ŧ": "t",
                                    "Ũ": "U",
                                    "Ū": "U",
                                    "Ŭ": "U",
                                    "Ů": "U",
                                    "Ű": "U",
                                    "Ų": "U",
                                    "ũ": "u",
                                    "ū": "u",
                                    "ŭ": "u",
                                    "ů": "u",
                                    "ű": "u",
                                    "ų": "u",
                                    "Ŵ": "W",
                                    "ŵ": "w",
                                    "Ŷ": "Y",
                                    "ŷ": "y",
                                    "Ÿ": "Y",
                                    "Ź": "Z",
                                    "Ż": "Z",
                                    "Ž": "Z",
                                    "ź": "z",
                                    "ż": "z",
                                    "ž": "z",
                                    "Ĳ": "IJ",
                                    "ĳ": "ij",
                                    "Œ": "Oe",
                                    "œ": "oe",
                                    "ŉ": "'n",
                                    "ſ": "s"
                                }),
                                Gu = m({
                                    "&": "&amp;",
                                    "<": "&lt;",
                                    ">": "&gt;",
                                    '"': "&quot;",
                                    "'": "&#39;"
                                });

                            function Yu(e) {
                                return "\\" + v[e]
                            }

                            function ia(e) {
                                return g.test(e)
                            }

                            function Hu(e) {
                                var n = -1,
                                    r = Array(e.size);
                                return e.forEach(function(e, t) {
                                    r[++n] = [t, e]
                                }), r
                            }

                            function zu(t, n) {
                                return function(e) {
                                    return t(n(e))
                                }
                            }

                            function aa(e, t) {
                                for (var n = -1, r = e.length, o = 0, i = []; ++n < r;) {
                                    var a = e[n];
                                    a !== t && a !== la || (e[n] = la, i[o++] = n)
                                }
                                return i
                            }

                            function Wu(e) {
                                var t = -1,
                                    n = Array(e.size);
                                return e.forEach(function(e) {
                                    n[++t] = e
                                }), n
                            }

                            function ua(e) {
                                return (ia(e) ? function(e) {
                                    for (var t = P.lastIndex = 0; P.test(e);) ++t;
                                    return t
                                } : S)(e)
                            }

                            function ca(e) {
                                return ia(e) ? e.match(P) || [] : e.split("")
                            }

                            function $u(e) {
                                for (var t = e.length; t-- && a.test(e.charAt(t)););
                                return t
                            }
                            var Ku = m({
                                    "&amp;": "&",
                                    "&lt;": "<",
                                    "&gt;": ">",
                                    "&quot;": '"',
                                    "&#39;": "'"
                                }),
                                qu = function o(e) {
                                    var R = (e = null == e ? Xi : qu.defaults(Xi.Object(), e, qu.pick(Xi, su))).Array,
                                        x = e.Date,
                                        V = e.Error,
                                        U = e.Function,
                                        j = e.Math,
                                        P = e.Object,
                                        F = e.RegExp,
                                        G = e.String,
                                        D = e.TypeError,
                                        Y = R.prototype,
                                        H = U.prototype,
                                        z = P.prototype,
                                        W = e["__core-js_shared__"],
                                        $ = H.toString,
                                        g = z.hasOwnProperty,
                                        K = 0,
                                        q = (H = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + H : "",
                                        J = z.toString,
                                        X = $.call(P),
                                        Z = Xi._,
                                        Q = F("^" + $.call(g).replace(ja, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                        H = pu ? e.Buffer : Oi,
                                        t = e.Symbol,
                                        ee = e.Uint8Array,
                                        te = H ? H.allocUnsafe : Oi,
                                        ne = zu(P.getPrototypeOf, P),
                                        re = P.create,
                                        oe = z.propertyIsEnumerable,
                                        ie = Y.splice,
                                        ae = t ? t.isConcatSpreadable : Oi,
                                        ue = t ? t.iterator : Oi,
                                        ce = t ? t.toStringTag : Oi,
                                        se = function() {
                                            try {
                                                var e = Hn(P, "defineProperty");
                                                return e({}, "", {}), e
                                            } catch (e) {}
                                        }(),
                                        le = e.clearTimeout !== Xi.clearTimeout && e.clearTimeout,
                                        fe = x && x.now !== Xi.Date.now && x.now,
                                        de = e.setTimeout !== Xi.setTimeout && e.setTimeout,
                                        pe = j.ceil,
                                        he = j.floor,
                                        Ce = P.getOwnPropertySymbols,
                                        H = H ? H.isBuffer : Oi,
                                        Ae = e.isFinite,
                                        Pe = Y.join,
                                        ge = zu(P.keys, P),
                                        I = j.max,
                                        O = j.min,
                                        ve = x.now,
                                        be = e.parseInt,
                                        Se = j.random,
                                        me = Y.reverse,
                                        x = Hn(e, "DataView"),
                                        ye = Hn(e, "Map"),
                                        we = Hn(e, "Promise"),
                                        _e = Hn(e, "Set"),
                                        e = Hn(e, "WeakMap"),
                                        Te = Hn(P, "create"),
                                        Be = e && new e,
                                        Ee = {},
                                        Le = Cr(x),
                                        Re = Cr(ye),
                                        De = Cr(we),
                                        Ie = Cr(_e),
                                        Oe = Cr(e),
                                        t = t ? t.prototype : Oi,
                                        Ne = t ? t.valueOf : Oi,
                                        ke = t ? t.toString : Oi;

                                    function h(e) {
                                        if (i(e) && !y(e) && !(e instanceof A)) {
                                            if (e instanceof C) return e;
                                            if (g.call(e, "__wrapped__")) return Ar(e)
                                        }
                                        return new C(e)
                                    }
                                    var Me = function(e) {
                                        if (!_(e)) return {};
                                        if (re) return re(e);
                                        xe.prototype = e;
                                        e = new xe;
                                        return xe.prototype = Oi, e
                                    };

                                    function xe() {}

                                    function Ve() {}

                                    function C(e, t) {
                                        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = Oi
                                    }

                                    function A(e) {
                                        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Mi, this.__views__ = []
                                    }

                                    function Ue(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < n;) {
                                            var r = e[t];
                                            this.set(r[0], r[1])
                                        }
                                    }

                                    function je(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < n;) {
                                            var r = e[t];
                                            this.set(r[0], r[1])
                                        }
                                    }

                                    function Fe(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < n;) {
                                            var r = e[t];
                                            this.set(r[0], r[1])
                                        }
                                    }

                                    function Ge(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.__data__ = new Fe; ++t < n;) this.add(e[t])
                                    }

                                    function b(e) {
                                        e = this.__data__ = new je(e);
                                        this.size = e.size
                                    }

                                    function Ye(e, t) {
                                        var n, r = y(e),
                                            o = !r && so(e),
                                            i = !r && !o && fo(e),
                                            a = !r && !o && !i && yo(e),
                                            u = r || o || i || a,
                                            c = u ? ku(e.length, G) : [],
                                            s = c.length;
                                        for (n in e) !t && !g.call(e, n) || u && ("length" == n || i && ("offset" == n || "parent" == n) || a && ("buffer" == n || "byteLength" == n || "byteOffset" == n) || Jn(n, s)) || c.push(n);
                                        return c
                                    }

                                    function He(e) {
                                        var t = e.length;
                                        return t ? e[kt(0, t - 1)] : Oi
                                    }

                                    function ze(e, t, n) {
                                        (n === Oi || d(e[t], n)) && (n !== Oi || t in e) || Je(e, t, n)
                                    }

                                    function We(e, t, n) {
                                        var r = e[t];
                                        g.call(e, t) && d(r, n) && (n !== Oi || t in e) || Je(e, t, n)
                                    }

                                    function $e(e, t) {
                                        for (var n = e.length; n--;)
                                            if (d(e[n][0], t)) return n;
                                        return -1
                                    }

                                    function Ke(e, r, o, i) {
                                        return nt(e, function(e, t, n) {
                                            r(i, e, o(e), n)
                                        }), i
                                    }

                                    function qe(e, t) {
                                        return e && ln(t, L(t), e)
                                    }

                                    function Je(e, t, n) {
                                        "__proto__" == t && se ? se(e, t, {
                                            configurable: !0,
                                            enumerable: !0,
                                            value: n,
                                            writable: !0
                                        }) : e[t] = n
                                    }

                                    function Xe(e, t) {
                                        for (var n = -1, r = t.length, o = R(r), i = null == e; ++n < r;) o[n] = i ? Oi : xo(e, t[n]);
                                        return o
                                    }

                                    function Ze(e, t, n) {
                                        return e = e == e && (n !== Oi && (e = e <= n ? e : n), t !== Oi) ? t <= e ? e : t : e
                                    }

                                    function v(n, r, o, e, t, i) {
                                        var a, u = 1 & r,
                                            c = 2 & r,
                                            s = 4 & r;
                                        if ((a = o ? t ? o(n, e, t, i) : o(n) : a) === Oi) {
                                            if (!_(n)) return n;
                                            var l, f, d, e = y(n);
                                            if (e) {
                                                if (h = (f = n).length, d = new f.constructor(h), h && "string" == typeof f[0] && g.call(f, "index") && (d.index = f.index, d.input = f.input), a = d, !u) return m(n, a)
                                            } else {
                                                var p = S(n),
                                                    h = p == ha || p == Ca;
                                                if (fo(n)) return rn(n, u);
                                                if (p == Gi || p == xi || h && !t) {
                                                    if (a = c || h ? {} : Kn(n), !u) return c ? (f = n, l = (d = a) && ln(n, k(n), d), ln(f, Wn(f), l)) : (C = qe(a, l = n), ln(l, zn(l), C))
                                                } else {
                                                    if (!Ji[p]) return t ? n : {};
                                                    a = function(e, t) {
                                                        var n, r, o = e.constructor;
                                                        switch (p) {
                                                            case $i:
                                                                return on(e);
                                                            case Vi:
                                                            case Ui:
                                                                return new o(+e);
                                                            case Ki:
                                                                return n = e, r = t ? on(n.buffer) : n.buffer, new n.constructor(r, n.byteOffset, n.byteLength);
                                                            case ga:
                                                            case va:
                                                            case ba:
                                                            case Sa:
                                                            case ma:
                                                            case ya:
                                                            case wa:
                                                            case _a:
                                                            case Ta:
                                                                return an(e, t);
                                                            case ji:
                                                                return new o;
                                                            case Fi:
                                                            case zi:
                                                                return new o(e);
                                                            case Yi:
                                                                return (n = new(r = e).constructor(r.source, Ja.exec(r))).lastIndex = r.lastIndex, n;
                                                            case Hi:
                                                                return new o;
                                                            case Pa:
                                                                return Ne ? P(Ne.call(e)) : {}
                                                        }
                                                    }(n, u)
                                                }
                                            }
                                            var C = (i = i || new b).get(n);
                                            if (C) return C;
                                            i.set(n, a), So(n) ? n.forEach(function(e) {
                                                a.add(v(e, r, o, e, n, i))
                                            }) : Po(n) && n.forEach(function(e, t) {
                                                a.set(t, v(e, r, o, t, n, i))
                                            });
                                            var A = e ? Oi : (s ? c ? Vn : xn : c ? k : L)(n);
                                            Qi(A || n, function(e, t) {
                                                A && (e = n[t = e]), We(a, t, v(e, r, o, t, n, i))
                                            })
                                        }
                                        return a
                                    }

                                    function Qe(e, t, n) {
                                        var r = n.length;
                                        if (null == e) return !r;
                                        for (e = P(e); r--;) {
                                            var o = n[r],
                                                i = t[o],
                                                a = e[o];
                                            if (a === Oi && !(o in e) || !i(a)) return !1
                                        }
                                        return !0
                                    }

                                    function et(e, t, n) {
                                        if ("function" != typeof e) throw new D(Ni);
                                        return ur(function() {
                                            e.apply(Oi, n)
                                        }, t)
                                    }

                                    function tt(e, t, n, r) {
                                        var o = -1,
                                            i = mu,
                                            a = !0,
                                            u = e.length,
                                            c = [],
                                            s = t.length;
                                        if (u) {
                                            n && (t = ta(t, oa(n))), r ? (i = yu, a = !1) : 200 <= t.length && (i = Vu, a = !1, t = new Ge(t));
                                            e: for (; ++o < u;) {
                                                var l = e[o],
                                                    f = null == n ? l : n(l),
                                                    l = r || 0 !== l ? l : 0;
                                                if (a && f == f) {
                                                    for (var d = s; d--;)
                                                        if (t[d] === f) continue e;
                                                    c.push(l)
                                                } else i(t, f, r) || c.push(l)
                                            }
                                        }
                                        return c
                                    }
                                    h.templateSettings = {
                                        escape: Na,
                                        evaluate: ka,
                                        interpolate: Ma,
                                        variable: "",
                                        imports: {
                                            _: h
                                        }
                                    }, (h.prototype = Ve.prototype).constructor = h, (C.prototype = Me(Ve.prototype)).constructor = C, (A.prototype = Me(Ve.prototype)).constructor = A, Ue.prototype.clear = function() {
                                        this.__data__ = Te ? Te(null) : {}, this.size = 0
                                    }, Ue.prototype.delete = function(e) {
                                        e = this.has(e) && delete this.__data__[e];
                                        return this.size -= e ? 1 : 0, e
                                    }, Ue.prototype.get = function(e) {
                                        var t, n = this.__data__;
                                        return Te ? (t = n[e]) === sa ? Oi : t : g.call(n, e) ? n[e] : Oi
                                    }, Ue.prototype.has = function(e) {
                                        var t = this.__data__;
                                        return Te ? t[e] !== Oi : g.call(t, e)
                                    }, Ue.prototype.set = function(e, t) {
                                        var n = this.__data__;
                                        return this.size += this.has(e) ? 0 : 1, n[e] = Te && t === Oi ? sa : t, this
                                    }, je.prototype.clear = function() {
                                        this.__data__ = [], this.size = 0
                                    }, je.prototype.delete = function(e) {
                                        var t = this.__data__,
                                            e = $e(t, e);
                                        return !(e < 0 || (e == t.length - 1 ? t.pop() : ie.call(t, e, 1), --this.size, 0))
                                    }, je.prototype.get = function(e) {
                                        var t = this.__data__,
                                            e = $e(t, e);
                                        return e < 0 ? Oi : t[e][1]
                                    }, je.prototype.has = function(e) {
                                        return -1 < $e(this.__data__, e)
                                    }, je.prototype.set = function(e, t) {
                                        var n = this.__data__,
                                            r = $e(n, e);
                                        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
                                    }, Fe.prototype.clear = function() {
                                        this.size = 0, this.__data__ = {
                                            hash: new Ue,
                                            map: new(ye || je),
                                            string: new Ue
                                        }
                                    }, Fe.prototype.delete = function(e) {
                                        e = Gn(this, e).delete(e);
                                        return this.size -= e ? 1 : 0, e
                                    }, Fe.prototype.get = function(e) {
                                        return Gn(this, e).get(e)
                                    }, Fe.prototype.has = function(e) {
                                        return Gn(this, e).has(e)
                                    }, Fe.prototype.set = function(e, t) {
                                        var n = Gn(this, e),
                                            r = n.size;
                                        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
                                    }, Ge.prototype.add = Ge.prototype.push = function(e) {
                                        return this.__data__.set(e, sa), this
                                    }, Ge.prototype.has = function(e) {
                                        return this.__data__.has(e)
                                    }, b.prototype.clear = function() {
                                        this.__data__ = new je, this.size = 0
                                    }, b.prototype.delete = function(e) {
                                        var t = this.__data__,
                                            e = t.delete(e);
                                        return this.size = t.size, e
                                    }, b.prototype.get = function(e) {
                                        return this.__data__.get(e)
                                    }, b.prototype.has = function(e) {
                                        return this.__data__.has(e)
                                    }, b.prototype.set = function(e, t) {
                                        var n = this.__data__;
                                        if (n instanceof je) {
                                            var r = n.__data__;
                                            if (!ye || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
                                            n = this.__data__ = new Fe(r)
                                        }
                                        return n.set(e, t), this.size = n.size, this
                                    };
                                    var nt = pn(st),
                                        rt = pn(lt, !0);

                                    function ot(e, r) {
                                        var o = !0;
                                        return nt(e, function(e, t, n) {
                                            return o = !!r(e, t, n)
                                        }), o
                                    }

                                    function it(e, t, n) {
                                        for (var r = -1, o = e.length; ++r < o;) {
                                            var i, a, u = e[r],
                                                c = t(u);
                                            null != c && (i === Oi ? c == c && !T(c) : n(c, i)) && (i = c, a = u)
                                        }
                                        return a
                                    }

                                    function at(e, r) {
                                        var o = [];
                                        return nt(e, function(e, t, n) {
                                            r(e, t, n) && o.push(e)
                                        }), o
                                    }

                                    function c(e, t, n, r, o) {
                                        var i = -1,
                                            a = e.length;
                                        for (n = n || qn, o = o || []; ++i < a;) {
                                            var u = e[i];
                                            0 < t && n(u) ? 1 < t ? c(u, t - 1, n, r, o) : na(o, u) : r || (o[o.length] = u)
                                        }
                                        return o
                                    }
                                    var ut = hn(),
                                        ct = hn(!0);

                                    function st(e, t) {
                                        return e && ut(e, t, L)
                                    }

                                    function lt(e, t) {
                                        return e && ct(e, t, L)
                                    }

                                    function ft(t, e) {
                                        return ea(e, function(e) {
                                            return ho(t[e])
                                        })
                                    }

                                    function dt(e, t) {
                                        for (var n = 0, r = (t = Qt(t, e)).length; null != e && n < r;) e = e[hr(t[n++])];
                                        return n && n == r ? e : Oi
                                    }

                                    function pt(e, t, n) {
                                        t = t(e);
                                        return y(e) ? t : na(t, n(e))
                                    }

                                    function n(e) {
                                        {
                                            if (null == e) return e === Oi ? "[object Undefined]" : "[object Null]";
                                            if (ce && ce in P(e)) {
                                                var t = e,
                                                    n = g.call(t, ce),
                                                    r = t[ce];
                                                try {
                                                    t[ce] = Oi;
                                                    var o = !0
                                                } catch (t) {}
                                                var i = J.call(t);
                                                return o && (n ? t[ce] = r : delete t[ce]), i
                                            }
                                            return J.call(e)
                                        }
                                    }

                                    function ht(e, t) {
                                        return t < e
                                    }

                                    function Ct(e, t) {
                                        return null != e && g.call(e, t)
                                    }

                                    function At(e, t) {
                                        return null != e && t in P(e)
                                    }

                                    function Pt(e, t, n) {
                                        for (var r = n ? yu : mu, o = e[0].length, i = e.length, a = i, u = R(i), c = 1 / 0, s = []; a--;) {
                                            var l = e[a];
                                            a && t && (l = ta(l, oa(t))), c = O(l.length, c), u[a] = !n && (t || 120 <= o && 120 <= l.length) ? new Ge(a && l) : Oi
                                        }
                                        var l = e[0],
                                            f = -1,
                                            d = u[0];
                                        e: for (; ++f < o && s.length < c;) {
                                            var p = l[f],
                                                h = t ? t(p) : p,
                                                p = n || 0 !== p ? p : 0;
                                            if (!(d ? Vu(d, h) : r(s, h, n))) {
                                                for (a = i; --a;) {
                                                    var C = u[a];
                                                    if (!(C ? Vu(C, h) : r(e[a], h, n))) continue e
                                                }
                                                d && d.push(h), s.push(p)
                                            }
                                        }
                                        return s
                                    }

                                    function gt(e, t, n) {
                                        t = null == (e = or(e, t = Qt(t, e))) ? e : e[hr(r(t))];
                                        return null == t ? Oi : Zi(t, e, n)
                                    }

                                    function vt(e) {
                                        return i(e) && n(e) == xi
                                    }

                                    function bt(e, t, n, r, o) {
                                        return e === t || (null == e || null == t || !i(e) && !i(t) ? e != e && t != t : function(e, t, n, r, o, i) {
                                            var a = y(e),
                                                u = y(t),
                                                c = a ? da : S(e),
                                                u = u ? da : S(t),
                                                s = (c = c == xi ? Gi : c) == Gi,
                                                l = (u = u == xi ? Gi : u) == Gi,
                                                u = c == u;
                                            if (u && fo(e)) {
                                                if (!fo(t)) return !1;
                                                s = !(a = !0)
                                            }
                                            if (u && !s) return i = i || new b, (a || yo(e) ? kn : function(e, t, n, r, o, i) {
                                                switch (c) {
                                                    case Ki:
                                                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                                        e = e.buffer, t = t.buffer;
                                                    case $i:
                                                        return !(e.byteLength != t.byteLength || !o(new ee(e), new ee(t)));
                                                    case Vi:
                                                    case Ui:
                                                    case Fi:
                                                        return d(+e, +t);
                                                    case pa:
                                                        return e.name == t.name && e.message == t.message;
                                                    case Yi:
                                                    case zi:
                                                        return e == t + "";
                                                    case ji:
                                                        var a = Hu;
                                                    case Hi:
                                                        a = a || Wu;
                                                        if (e.size != t.size && !(1 & n)) return !1;
                                                        var u = i.get(e);
                                                        if (u) return u == t;
                                                        n |= 2, i.set(e, t);
                                                        u = kn(a(e), a(t), n, r, o, i);
                                                        return i.delete(e), u;
                                                    case Pa:
                                                        if (Ne) return Ne.call(e) == Ne.call(t)
                                                }
                                                return !1
                                            })(e, t, n, r, o, i);
                                            if (!(1 & n)) {
                                                a = s && g.call(e, "__wrapped__"), s = l && g.call(t, "__wrapped__");
                                                if (a || s) return o(a ? e.value() : e, s ? t.value() : t, n, r, i = i || new b)
                                            }
                                            return !!u && function(e, t, n, r, o, i) {
                                                var a = 1 & n,
                                                    u = xn(e),
                                                    c = u.length;
                                                if (c != xn(t).length && !a) return !1;
                                                for (var s = c; s--;) {
                                                    var l = u[s];
                                                    if (!(a ? l in t : g.call(t, l))) return !1
                                                }
                                                var f = i.get(e),
                                                    d = i.get(t);
                                                if (f && d) return f == t && d == e;
                                                var p = !0;
                                                i.set(e, t), i.set(t, e);
                                                for (var h = a; ++s < c;) {
                                                    var C, A = e[l = u[s]],
                                                        P = t[l];
                                                    if (!((C = r ? a ? r(P, A, l, t, e, i) : r(A, P, l, e, t, i) : C) === Oi ? A === P || o(A, P, n, r, i) : C)) {
                                                        p = !1;
                                                        break
                                                    }
                                                    h = h || "constructor" == l
                                                }
                                                return p && !h && (f = e.constructor) != (d = t.constructor) && "constructor" in e && "constructor" in t && !("function" == typeof f && f instanceof f && "function" == typeof d && d instanceof d) && (p = !1), i.delete(e), i.delete(t), p
                                            }(e, t, n, r, o, i = i || new b)
                                        }(e, t, n, r, bt, o))
                                    }

                                    function St(e, t, n, r) {
                                        var o = n.length,
                                            i = o,
                                            a = !r;
                                        if (null == e) return !i;
                                        for (e = P(e); o--;) {
                                            var u = n[o];
                                            if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
                                        }
                                        for (; ++o < i;) {
                                            var c = (u = n[o])[0],
                                                s = e[c],
                                                l = u[1];
                                            if (a && u[2]) {
                                                if (s === Oi && !(c in e)) return !1
                                            } else {
                                                var f, d = new b;
                                                if (!((f = r ? r(s, l, c, e, t, d) : f) === Oi ? bt(l, s, 3, r, d) : f)) return !1
                                            }
                                        }
                                        return !0
                                    }

                                    function mt(e) {
                                        return !(!_(e) || q && q in e) && (ho(e) ? Q : Qa).test(Cr(e))
                                    }

                                    function yt(e) {
                                        return "function" == typeof e ? e : null == e ? M : "object" == _typeof(e) ? y(e) ? Et(e[0], e[1]) : Bt(e) : bi(e)
                                    }

                                    function wt(e) {
                                        if (!er(e)) return ge(e);
                                        var t, n = [];
                                        for (t in P(e)) g.call(e, t) && "constructor" != t && n.push(t);
                                        return n
                                    }

                                    function _t(e, t) {
                                        return e < t
                                    }

                                    function Tt(e, r) {
                                        var o = -1,
                                            i = p(e) ? R(e.length) : [];
                                        return nt(e, function(e, t, n) {
                                            i[++o] = r(e, t, n)
                                        }), i
                                    }

                                    function Bt(t) {
                                        var n = Yn(t);
                                        return 1 == n.length && n[0][2] ? nr(n[0][0], n[0][1]) : function(e) {
                                            return e === t || St(e, t, n)
                                        }
                                    }

                                    function Et(n, r) {
                                        return Xn(n) && tr(r) ? nr(hr(n), r) : function(e) {
                                            var t = xo(e, n);
                                            return t === Oi && t === r ? Vo(e, n) : bt(r, t, 3)
                                        }
                                    }

                                    function Lt(C, A, P, g, v) {
                                        C !== A && ut(A, function(e, t) {
                                            var n, r, o, i, a, u, c, s, l, f, d, p, h;
                                            v = v || new b, _(e) ? (r = A, i = P, a = Lt, u = g, c = v, d = ir(n = C, o = t), p = ir(r, o), (h = c.get(p)) ? ze(n, o, h) : ((r = (h = u ? u(d, p, o + "", n, r, c) : Oi) === Oi) && (l = !(s = y(p)) && fo(p), f = !s && !l && yo(p), h = p, s || l || f ? h = y(d) ? d : w(d) ? m(d) : l ? rn(p, !(r = !1)) : f ? an(p, !(r = !1)) : [] : vo(p) || so(p) ? so(h = d) ? h = Lo(d) : _(d) && !ho(d) || (h = Kn(p)) : r = !1), r && (c.set(p, h), a(h, p, i, u, c), c.delete(p)), ze(n, o, h))) : (s = g ? g(ir(C, t), e, t + "", C, A, v) : Oi, ze(C, t, s = s === Oi ? e : s))
                                        }, k)
                                    }

                                    function Rt(e, t) {
                                        var n = e.length;
                                        if (n) return Jn(t += t < 0 ? n : 0, n) ? e[t] : Oi
                                    }

                                    function Dt(e, r, s) {
                                        r = r.length ? ta(r, function(t) {
                                            return y(t) ? function(e) {
                                                return dt(e, 1 === t.length ? t[0] : t)
                                            } : t
                                        }) : [M];
                                        var o = -1;
                                        r = ta(r, oa(l()));
                                        var t = Tt(e, function(t, e, n) {
                                                return {
                                                    criteria: ta(r, function(e) {
                                                        return e(t)
                                                    }),
                                                    index: ++o,
                                                    value: t
                                                }
                                            }),
                                            n = t.length;
                                        for (t.sort(function(e, t) {
                                                for (var n = s, r = -1, o = e.criteria, i = t.criteria, a = o.length, u = n.length; ++r < a;) {
                                                    var c = un(o[r], i[r]);
                                                    if (c) return u <= r ? c : c * ("desc" == n[r] ? -1 : 1)
                                                }
                                                return e.index - t.index
                                            }); n--;) t[n] = t[n].value;
                                        return t
                                    }

                                    function It(e, t, n) {
                                        for (var r = -1, o = t.length, i = {}; ++r < o;) {
                                            var a = t[r],
                                                u = dt(e, a);
                                            n(u, a) && xt(i, Qt(a, e), u)
                                        }
                                        return i
                                    }

                                    function Ot(e, t, n, r) {
                                        var o = r ? Lu : ra,
                                            i = -1,
                                            a = t.length,
                                            u = e;
                                        for (e === t && (t = m(t)), n && (u = ta(e, oa(n))); ++i < a;)
                                            for (var c = 0, s = t[i], l = n ? n(s) : s; - 1 < (c = o(u, l, c, r));) u !== e && ie.call(u, c, 1), ie.call(e, c, 1);
                                        return e
                                    }

                                    function Nt(e, t) {
                                        for (var n = e ? t.length : 0, r = n - 1; n--;) {
                                            var o, i = t[n];
                                            n != r && i === o || (Jn(o = i) ? ie.call(e, i, 1) : zt(e, i))
                                        }
                                    }

                                    function kt(e, t) {
                                        return e + he(Se() * (t - e + 1))
                                    }

                                    function Mt(e, t) {
                                        var n = "";
                                        if (!(!e || t < 1 || ki < t))
                                            for (; t % 2 && (n += e), (t = he(t / 2)) && (e += e), t;);
                                        return n
                                    }

                                    function a(e, t) {
                                        return cr(rr(e, t, M), e + "")
                                    }

                                    function xt(e, t, n, r) {
                                        if (_(e))
                                            for (var o = -1, i = (t = Qt(t, e)).length, a = i - 1, u = e; null != u && ++o < i;) {
                                                var c, s = hr(t[o]),
                                                    l = n;
                                                if ("__proto__" === s || "constructor" === s || "prototype" === s) return e;
                                                We(u, s, l = o != a && (c = u[s], (l = r ? r(c, s, u) : Oi) === Oi) ? _(c) ? c : Jn(t[o + 1]) ? [] : {} : l), u = u[s]
                                            }
                                        return e
                                    }
                                    var Vt = Be ? function(e, t) {
                                            return Be.set(e, t), e
                                        } : M,
                                        t = se ? function(e, t) {
                                            return se(e, "toString", {
                                                configurable: !0,
                                                enumerable: !1,
                                                value: si(t),
                                                writable: !0
                                            })
                                        } : M;

                                    function u(e, t, n) {
                                        var r = -1,
                                            o = e.length;
                                        (n = o < n ? o : n) < 0 && (n += o), o = n < (t = t < 0 ? o < -t ? 0 : o + t : t) ? 0 : n - t >>> 0, t >>>= 0;
                                        for (var i = R(o); ++r < o;) i[r] = e[r + t];
                                        return i
                                    }

                                    function Ut(e, r) {
                                        var o;
                                        return nt(e, function(e, t, n) {
                                            return !(o = r(e, t, n))
                                        }), !!o
                                    }

                                    function jt(e, t, n) {
                                        var r = 0,
                                            o = null == e ? r : e.length;
                                        if ("number" == typeof t && t == t && o <= 2147483647) {
                                            for (; r < o;) {
                                                var i = r + o >>> 1,
                                                    a = e[i];
                                                null !== a && !T(a) && (n ? a <= t : a < t) ? r = 1 + i : o = i
                                            }
                                            return o
                                        }
                                        return Ft(e, t, M, n)
                                    }

                                    function Ft(e, t, n, r) {
                                        var o = 0,
                                            i = null == e ? 0 : e.length;
                                        if (0 === i) return 0;
                                        for (var a = (t = n(t)) != t, u = null === t, c = T(t), s = t === Oi; o < i;) {
                                            var l = he((o + i) / 2),
                                                f = n(e[l]),
                                                d = f !== Oi,
                                                p = null === f,
                                                h = f == f,
                                                C = T(f),
                                                h = a ? r || h : s ? h && (r || d) : u ? h && d && (r || !p) : c ? h && d && !p && (r || !C) : !p && !C && (r ? f <= t : f < t);
                                            h ? o = l + 1 : i = l
                                        }
                                        return O(i, 4294967294)
                                    }

                                    function Gt(e, t) {
                                        for (var n = -1, r = e.length, o = 0, i = []; ++n < r;) {
                                            var a, u = e[n],
                                                c = t ? t(u) : u;
                                            n && d(c, a) || (a = c, i[o++] = 0 === u ? 0 : u)
                                        }
                                        return i
                                    }

                                    function Yt(e) {
                                        return "number" == typeof e ? e : T(e) ? NaN : +e
                                    }

                                    function s(e) {
                                        var t;
                                        return "string" == typeof e ? e : y(e) ? ta(e, s) + "" : T(e) ? ke ? ke.call(e) : "" : "0" == (t = e + "") && 1 / e == -1 / 0 ? "-0" : t
                                    }

                                    function Ht(e, t, n) {
                                        var r = -1,
                                            o = mu,
                                            i = e.length,
                                            a = !0,
                                            u = [],
                                            c = u;
                                        if (n) a = !1, o = yu;
                                        else if (200 <= i) {
                                            var s = t ? null : Ln(e);
                                            if (s) return Wu(s);
                                            a = !1, o = Vu, c = new Ge
                                        } else c = t ? [] : u;
                                        e: for (; ++r < i;) {
                                            var l = e[r],
                                                f = t ? t(l) : l,
                                                l = n || 0 !== l ? l : 0;
                                            if (a && f == f) {
                                                for (var d = c.length; d--;)
                                                    if (c[d] === f) continue e;
                                                t && c.push(f), u.push(l)
                                            } else o(c, f, n) || (c !== u && c.push(f), u.push(l))
                                        }
                                        return u
                                    }

                                    function zt(e, t) {
                                        return null == (e = or(e, t = Qt(t, e))) || delete e[hr(r(t))]
                                    }

                                    function Wt(e, t, n, r) {
                                        return xt(e, t, n(dt(e, t)), r)
                                    }

                                    function $t(e, t, n, r) {
                                        for (var o = e.length, i = r ? o : -1;
                                            (r ? i-- : ++i < o) && t(e[i], i, e););
                                        return n ? u(e, r ? 0 : i, r ? i + 1 : o) : u(e, r ? i + 1 : 0, r ? o : i)
                                    }

                                    function Kt(e, t) {
                                        var n = e;
                                        return wu(t, function(e, t) {
                                            return t.func.apply(t.thisArg, na([e], t.args))
                                        }, n = e instanceof A ? e.value() : n)
                                    }

                                    function qt(e, t, n) {
                                        var r = e.length;
                                        if (r < 2) return r ? Ht(e[0]) : [];
                                        for (var o = -1, i = R(r); ++o < r;)
                                            for (var a = e[o], u = -1; ++u < r;) u != o && (i[o] = tt(i[o] || a, e[u], t, n));
                                        return Ht(c(i, 1), t, n)
                                    }

                                    function Jt(e, t, n) {
                                        for (var r = -1, o = e.length, i = t.length, a = {}; ++r < o;) {
                                            var u = r < i ? t[r] : Oi;
                                            n(a, e[r], u)
                                        }
                                        return a
                                    }

                                    function Xt(e) {
                                        return w(e) ? e : []
                                    }

                                    function Zt(e) {
                                        return "function" == typeof e ? e : M
                                    }

                                    function Qt(e, t) {
                                        return y(e) ? e : Xn(e, t) ? [e] : pr(E(e))
                                    }
                                    var en = a;

                                    function tn(e, t, n) {
                                        var r = e.length;
                                        return n = n === Oi ? r : n, !t && r <= n ? e : u(e, t, n)
                                    }
                                    var nn = le || function(e) {
                                        return Xi.clearTimeout(e)
                                    };

                                    function rn(e, t) {
                                        return t ? e.slice() : (t = e.length, t = te ? te(t) : new e.constructor(t), e.copy(t), t)
                                    }

                                    function on(e) {
                                        var t = new e.constructor(e.byteLength);
                                        return new ee(t).set(new ee(e)), t
                                    }

                                    function an(e, t) {
                                        t = t ? on(e.buffer) : e.buffer;
                                        return new e.constructor(t, e.byteOffset, e.length)
                                    }

                                    function un(e, t) {
                                        if (e !== t) {
                                            var n = e !== Oi,
                                                r = null === e,
                                                o = e == e,
                                                i = T(e),
                                                a = t !== Oi,
                                                u = null === t,
                                                c = t == t,
                                                s = T(t);
                                            if (!u && !s && !i && t < e || i && a && c && !u && !s || r && a && c || !n && c || !o) return 1;
                                            if (!r && !i && !s && e < t || s && n && o && !r && !i || u && n && o || !a && o || !c) return -1
                                        }
                                        return 0
                                    }

                                    function cn(e, t, n, r) {
                                        for (var o = -1, i = e.length, a = n.length, u = -1, c = t.length, s = I(i - a, 0), l = R(c + s), f = !r; ++u < c;) l[u] = t[u];
                                        for (; ++o < a;)(f || o < i) && (l[n[o]] = e[o]);
                                        for (; s--;) l[u++] = e[o++];
                                        return l
                                    }

                                    function sn(e, t, n, r) {
                                        for (var o = -1, i = e.length, a = -1, u = n.length, c = -1, s = t.length, l = I(i - u, 0), f = R(l + s), d = !r; ++o < l;) f[o] = e[o];
                                        for (var p = o; ++c < s;) f[p + c] = t[c];
                                        for (; ++a < u;)(d || o < i) && (f[p + n[a]] = e[o++]);
                                        return f
                                    }

                                    function m(e, t) {
                                        var n = -1,
                                            r = e.length;
                                        for (t = t || R(r); ++n < r;) t[n] = e[n];
                                        return t
                                    }

                                    function ln(e, t, n, r) {
                                        var o = !n;
                                        n = n || {};
                                        for (var i = -1, a = t.length; ++i < a;) {
                                            var u = t[i],
                                                c = r ? r(n[u], e[u], u, n, e) : Oi;
                                            (o ? Je : We)(n, u, c = c === Oi ? e[u] : c)
                                        }
                                        return n
                                    }

                                    function fn(o, i) {
                                        return function(e, t) {
                                            var n = y(e) ? bu : Ke,
                                                r = i ? i() : {};
                                            return n(e, o, l(t, 2), r)
                                        }
                                    }

                                    function dn(u) {
                                        return a(function(e, t) {
                                            var n = -1,
                                                r = t.length,
                                                o = 1 < r ? t[r - 1] : Oi,
                                                i = 2 < r ? t[2] : Oi,
                                                o = 3 < u.length && "function" == typeof o ? (r--, o) : Oi;
                                            for (i && f(t[0], t[1], i) && (o = r < 3 ? Oi : o, r = 1), e = P(e); ++n < r;) {
                                                var a = t[n];
                                                a && u(e, a, n, o)
                                            }
                                            return e
                                        })
                                    }

                                    function pn(i, a) {
                                        return function(e, t) {
                                            if (null != e) {
                                                if (!p(e)) return i(e, t);
                                                for (var n = e.length, r = a ? n : -1, o = P(e);
                                                    (a ? r-- : ++r < n) && !1 !== t(o[r], r, o););
                                            }
                                            return e
                                        }
                                    }

                                    function hn(c) {
                                        return function(e, t, n) {
                                            for (var r = -1, o = P(e), i = n(e), a = i.length; a--;) {
                                                var u = i[c ? a : ++r];
                                                if (!1 === t(o[u], u, o)) break
                                            }
                                            return e
                                        }
                                    }

                                    function Cn(r) {
                                        return function(e) {
                                            var t = ia(e = E(e)) ? ca(e) : Oi,
                                                n = t ? t[0] : e.charAt(0),
                                                t = t ? tn(t, 1).join("") : e.slice(1);
                                            return n[r]() + t
                                        }
                                    }

                                    function An(t) {
                                        return function(e) {
                                            return wu(ai(Zo(e).replace(iu, "")), t, "")
                                        }
                                    }

                                    function Pn(r) {
                                        return function() {
                                            var e = arguments;
                                            switch (e.length) {
                                                case 0:
                                                    return new r;
                                                case 1:
                                                    return new r(e[0]);
                                                case 2:
                                                    return new r(e[0], e[1]);
                                                case 3:
                                                    return new r(e[0], e[1], e[2]);
                                                case 4:
                                                    return new r(e[0], e[1], e[2], e[3]);
                                                case 5:
                                                    return new r(e[0], e[1], e[2], e[3], e[4]);
                                                case 6:
                                                    return new r(e[0], e[1], e[2], e[3], e[4], e[5]);
                                                case 7:
                                                    return new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                                            }
                                            var t = Me(r.prototype),
                                                n = r.apply(t, e);
                                            return _(n) ? n : t
                                        }
                                    }

                                    function gn(i) {
                                        return function(e, t, n) {
                                            var r, o = P(e),
                                                t = (p(e) || (r = l(t, 3), e = L(e), t = function(e) {
                                                    return r(o[e], e, o)
                                                }), i(e, t, n));
                                            return -1 < t ? o[r ? e[t] : t] : Oi
                                        }
                                    }

                                    function vn(c) {
                                        return Mn(function(o) {
                                            var i = o.length,
                                                e = i,
                                                t = C.prototype.thru;
                                            for (c && o.reverse(); e--;) {
                                                var n = o[e];
                                                if ("function" != typeof n) throw new D(Ni);
                                                t && !u && "wrapper" == jn(n) && (u = new C([], !0))
                                            }
                                            for (e = u ? e : i; ++e < i;) var r = jn(n = o[e]),
                                                a = "wrapper" == r ? Un(n) : Oi,
                                                u = a && Zn(a[0]) && 424 == a[1] && !a[4].length && 1 == a[9] ? u[jn(a[0])].apply(u, a[3]) : 1 == n.length && Zn(n) ? u[r]() : u.thru(n);
                                            return function() {
                                                var e = arguments,
                                                    t = e[0];
                                                if (u && 1 == e.length && y(t)) return u.plant(t).value();
                                                for (var n = 0, r = i ? o[n].apply(this, e) : t; ++n < i;) r = o[n].call(this, r);
                                                return r
                                            }
                                        })
                                    }

                                    function bn(a, u, c, s, l, f, d, p, h, C) {
                                        var A = 128 & u,
                                            P = 1 & u,
                                            g = 2 & u,
                                            v = 24 & u,
                                            b = 512 & u,
                                            S = g ? Oi : Pn(a);
                                        return function e() {
                                            for (var t, n, r = arguments.length, o = R(r), i = r; i--;) o[i] = arguments[i];
                                            return v && (n = function(e, t) {
                                                for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
                                                return r
                                            }(o, t = Fn(e))), s && (o = cn(o, s, l, v)), f && (o = sn(o, f, d, v)), r -= n, v && r < C ? (n = aa(o, t), Bn(a, u, bn, e.placeholder, c, o, n, p, h, C - r)) : (t = P ? c : this, n = g ? t[a] : a, r = o.length, p ? o = function(e, t) {
                                                for (var n = e.length, r = O(t.length, n), o = m(e); r--;) {
                                                    var i = t[r];
                                                    e[r] = Jn(i, n) ? o[i] : Oi
                                                }
                                                return e
                                            }(o, p) : b && 1 < r && o.reverse(), A && h < r && (o.length = h), (n = this && this !== Xi && this instanceof e ? S || Pn(n) : n).apply(t, o))
                                        }
                                    }

                                    function Sn(n, a) {
                                        return function(e, t) {
                                            return e = e, r = n, o = a(t), i = {}, st(e, function(e, t, n) {
                                                r(i, o(e), t, n)
                                            }), i;
                                            var r, o, i
                                        }
                                    }

                                    function mn(r, o) {
                                        return function(e, t) {
                                            var n;
                                            if (e === Oi && t === Oi) return o;
                                            if (e !== Oi && (n = e), t !== Oi) {
                                                if (n === Oi) return t;
                                                t = ("string" == typeof e || "string" == typeof t ? (e = s(e), s) : (e = Yt(e), Yt))(t), n = r(e, t)
                                            }
                                            return n
                                        }
                                    }

                                    function yn(r) {
                                        return Mn(function(e) {
                                            return e = ta(e, oa(l())), a(function(t) {
                                                var n = this;
                                                return r(e, function(e) {
                                                    return Zi(e, n, t)
                                                })
                                            })
                                        })
                                    }

                                    function wn(e, t) {
                                        var n = (t = t === Oi ? " " : s(t)).length;
                                        return n < 2 ? n ? Mt(t, e) : t : (n = Mt(t, pe(e / ua(t))), ia(t) ? tn(ca(n), 0, e).join("") : n.slice(0, e))
                                    }

                                    function _n(l) {
                                        return function(e, t, n) {
                                            n && "number" != typeof n && f(e, t, n) && (t = n = Oi), e = Bo(e), t === Oi ? (t = e, e = 0) : t = Bo(t);
                                            for (var r = e, o = t, i = n = n === Oi ? e < t ? 1 : -1 : Bo(n), a = l, u = -1, c = I(pe((o - r) / (i || 1)), 0), s = R(c); c--;) s[a ? c : ++u] = r, r += i;
                                            return s
                                        }
                                    }

                                    function Tn(n) {
                                        return function(e, t) {
                                            return "string" == typeof e && "string" == typeof t || (e = B(e), t = B(t)), n(e, t)
                                        }
                                    }

                                    function Bn(e, t, n, r, o, i, a, u, c, s) {
                                        var l = 8 & t,
                                            o = (4 & (t = (t | (l ? 32 : 64)) & ~(l ? 64 : 32)) || (t &= -4), [e, t, o, l ? i : Oi, l ? a : Oi, l ? Oi : i, l ? Oi : a, u, c, s]),
                                            i = n.apply(Oi, o);
                                        return Zn(e) && ar(i, o), i.placeholder = r, sr(i, e, t)
                                    }

                                    function En(e) {
                                        var r = j[e];
                                        return function(e, t) {
                                            var n;
                                            return e = B(e), (t = null == t ? 0 : O(N(t), 292)) && Ae(e) ? (n = (E(e) + "e").split("e"), +((n = (E(r(n[0] + "e" + (+n[1] + t))) + "e").split("e"))[0] + "e" + (+n[1] - t))) : r(e)
                                        }
                                    }
                                    var Ln = _e && 1 / Wu(new _e([, -0]))[1] == 1 / 0 ? function(e) {
                                        return new _e(e)
                                    } : Ai;

                                    function Rn(i) {
                                        return function(e) {
                                            var t, n, r, o = S(e);
                                            return o == ji ? Hu(e) : o == Hi ? (o = e, n = -1, r = Array(o.size), o.forEach(function(e) {
                                                r[++n] = [e, e]
                                            }), r) : ta(i(t = e), function(e) {
                                                return [e, t[e]]
                                            })
                                        }
                                    }

                                    function Dn(e, t, n, r, o, i, a, u) {
                                        var c, s, l, f, d, p, h, C, A, P, g, v, b, S, m, y, w, _, T, B, E, L = 2 & t;
                                        if (L || "function" == typeof e) return (c = r ? r.length : 0) || (t &= -97, r = o = Oi), a = a === Oi ? a : I(N(a), 0), u = u === Oi ? u : N(u), c -= o ? o.length : 0, 64 & t && (l = r, w = o, r = o = Oi), s = L ? Oi : Un(e), l = [e, t, n, r, o, l, w, i, a, u], s && (w = s, a = (i = l)[1], T = w[1], B = a | T, E = 128 == T && 8 == a || 128 == T && 256 == a && i[7].length <= w[8] || 384 == T && w[7].length <= w[8] && 8 == a, B < 131 || E) && (1 & T && (i[2] = w[2], B |= 1 & a ? 0 : 4), (E = w[3]) && (_ = i[3], i[3] = _ ? cn(_, E, w[4]) : E, i[4] = _ ? aa(i[3], la) : w[4]), (E = w[5]) && (_ = i[5], i[5] = _ ? sn(_, E, w[6]) : E, i[6] = _ ? aa(i[5], la) : w[6]), (E = w[7]) && (i[7] = E), 128 & T && (i[8] = null == i[8] ? w[8] : O(i[8], w[8])), null == i[9] && (i[9] = w[9]), i[0] = w[0], i[1] = B), e = l[0], t = l[1], n = l[2], r = l[3], o = l[4], !(u = l[9] = l[9] === Oi ? L ? 0 : e.length : I(l[9] - c, 0)) && 24 & t && (t &= -25), a = t && 1 != t ? 8 == t || 16 == t ? (S = t, m = u, y = Pn(b = e), function e() {
                                            for (var t = arguments.length, n = R(t), r = t, o = Fn(e); r--;) n[r] = arguments[r];
                                            o = t < 3 && n[0] !== o && n[t - 1] !== o ? [] : aa(n, o);
                                            return (t -= o.length) < m ? Bn(b, S, bn, e.placeholder, Oi, n, o, Oi, Oi, m - t) : Zi(this && this !== Xi && this instanceof e ? y : b, this, n)
                                        }) : 32 != t && 33 != t || o.length ? bn.apply(Oi, l) : (A = n, P = r, g = 1 & t, v = Pn(C = e), function e() {
                                            for (var t = -1, n = arguments.length, r = -1, o = P.length, i = R(o + n), a = this && this !== Xi && this instanceof e ? v : C; ++r < o;) i[r] = P[r];
                                            for (; n--;) i[r++] = arguments[++t];
                                            return Zi(a, g ? A : this, i)
                                        }) : (d = n, p = 1 & t, h = Pn(f = e), function e() {
                                            return (this && this !== Xi && this instanceof e ? h : f).apply(p ? d : this, arguments)
                                        }), sr((s ? Vt : ar)(a, l), e, t);
                                        throw new D(Ni)
                                    }

                                    function In(e, t, n, r) {
                                        return e === Oi || d(e, z[n]) && !g.call(r, n) ? t : e
                                    }

                                    function On(e, t, n, r, o, i) {
                                        return _(e) && _(t) && (i.set(t, e), Lt(e, t, Oi, On, i), i.delete(t)), e
                                    }

                                    function Nn(e) {
                                        return vo(e) ? Oi : e
                                    }

                                    function kn(e, t, n, r, o, i) {
                                        var a = 1 & n,
                                            u = e.length,
                                            c = t.length;
                                        if (u != c && !(a && u < c)) return !1;
                                        var c = i.get(e),
                                            s = i.get(t);
                                        if (c && s) return c == t && s == e;
                                        var l = -1,
                                            f = !0,
                                            d = 2 & n ? new Ge : Oi;
                                        for (i.set(e, t), i.set(t, e); ++l < u;) {
                                            var p, h = e[l],
                                                C = t[l];
                                            if ((p = r ? a ? r(C, h, l, t, e, i) : r(h, C, l, e, t, i) : p) !== Oi) {
                                                if (p) continue;
                                                f = !1;
                                                break
                                            }
                                            if (d) {
                                                if (!Tu(t, function(e, t) {
                                                        return !Vu(d, t) && (h === e || o(h, e, n, r, i)) && d.push(t)
                                                    })) {
                                                    f = !1;
                                                    break
                                                }
                                            } else if (h !== C && !o(h, C, n, r, i)) {
                                                f = !1;
                                                break
                                            }
                                        }
                                        return i.delete(e), i.delete(t), f
                                    }

                                    function Mn(e) {
                                        return cr(rr(e, Oi, vr), e + "")
                                    }

                                    function xn(e) {
                                        return pt(e, L, zn)
                                    }

                                    function Vn(e) {
                                        return pt(e, k, Wn)
                                    }
                                    var Un = Be ? function(e) {
                                        return Be.get(e)
                                    } : Ai;

                                    function jn(e) {
                                        for (var t = e.name + "", n = Ee[t], r = g.call(Ee, t) ? n.length : 0; r--;) {
                                            var o = n[r],
                                                i = o.func;
                                            if (null == i || i == e) return o.name
                                        }
                                        return t
                                    }

                                    function Fn(e) {
                                        return (g.call(h, "placeholder") ? h : e).placeholder
                                    }

                                    function l() {
                                        var e = (e = h.iteratee || di) === di ? yt : e;
                                        return arguments.length ? e(arguments[0], arguments[1]) : e
                                    }

                                    function Gn(e, t) {
                                        var n, r, e = e.__data__;
                                        return ("string" == (r = _typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? e["string" == typeof t ? "string" : "hash"] : e.map
                                    }

                                    function Yn(e) {
                                        for (var t = L(e), n = t.length; n--;) {
                                            var r = t[n],
                                                o = e[r];
                                            t[n] = [r, o, tr(o)]
                                        }
                                        return t
                                    }

                                    function Hn(e, t) {
                                        e = null == e ? Oi : e[t];
                                        return mt(e) ? e : Oi
                                    }
                                    var zn = Ce ? function(t) {
                                            return null == t ? [] : (t = P(t), ea(Ce(t), function(e) {
                                                return oe.call(t, e)
                                            }))
                                        } : yi,
                                        Wn = Ce ? function(e) {
                                            for (var t = []; e;) na(t, zn(e)), e = ne(e);
                                            return t
                                        } : yi,
                                        S = n;

                                    function $n(e, t, n) {
                                        for (var r = -1, o = (t = Qt(t, e)).length, i = !1; ++r < o;) {
                                            var a = hr(t[r]);
                                            if (!(i = null != e && n(e, a))) break;
                                            e = e[a]
                                        }
                                        return i || ++r != o ? i : !!(o = null == e ? 0 : e.length) && Ao(o) && Jn(a, o) && (y(e) || so(e))
                                    }

                                    function Kn(e) {
                                        return "function" != typeof e.constructor || er(e) ? {} : Me(ne(e))
                                    }

                                    function qn(e) {
                                        return y(e) || so(e) || !!(ae && e && e[ae])
                                    }

                                    function Jn(e, t) {
                                        var n = _typeof(e);
                                        return !!(t = null == t ? ki : t) && ("number" == n || "symbol" != n && tu.test(e)) && -1 < e && e % 1 == 0 && e < t
                                    }

                                    function f(e, t, n) {
                                        var r;
                                        return !!_(n) && !!("number" == (r = _typeof(t)) ? p(n) && Jn(t, n.length) : "string" == r && t in n) && d(n[t], e)
                                    }

                                    function Xn(e, t) {
                                        var n;
                                        if (!y(e)) return "number" == (n = _typeof(e)) || "symbol" == n || "boolean" == n || null == e || T(e) || Va.test(e) || !xa.test(e) || null != t && e in P(t)
                                    }

                                    function Zn(e) {
                                        var t = jn(e),
                                            n = h[t];
                                        return "function" == typeof n && t in A.prototype && (e === n || (t = Un(n)) && e === t[0])
                                    }(x && S(new x(new ArrayBuffer(1))) != Ki || ye && S(new ye) != ji || we && S(we.resolve()) != Aa || _e && S(new _e) != Hi || e && S(new e) != Wi) && (S = function(e) {
                                        var t = n(e),
                                            e = t == Gi ? e.constructor : Oi,
                                            e = e ? Cr(e) : "";
                                        if (e) switch (e) {
                                            case Le:
                                                return Ki;
                                            case Re:
                                                return ji;
                                            case De:
                                                return Aa;
                                            case Ie:
                                                return Hi;
                                            case Oe:
                                                return Wi
                                        }
                                        return t
                                    });
                                    var Qn = W ? ho : wi;

                                    function er(e) {
                                        var t = e && e.constructor;
                                        return e === ("function" == typeof t && t.prototype || z)
                                    }

                                    function tr(e) {
                                        return e == e && !_(e)
                                    }

                                    function nr(t, n) {
                                        return function(e) {
                                            return null != e && e[t] === n && (n !== Oi || t in P(e))
                                        }
                                    }

                                    function rr(i, a, u) {
                                        return a = I(a === Oi ? i.length - 1 : a, 0),
                                            function() {
                                                for (var e = arguments, t = -1, n = I(e.length - a, 0), r = R(n); ++t < n;) r[t] = e[a + t];
                                                for (var t = -1, o = R(a + 1); ++t < a;) o[t] = e[t];
                                                return o[a] = u(r), Zi(i, this, o)
                                            }
                                    }

                                    function or(e, t) {
                                        return t.length < 2 ? e : dt(e, u(t, 0, -1))
                                    }

                                    function ir(e, t) {
                                        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                                    }
                                    var ar = lr(Vt),
                                        ur = de || function(e, t) {
                                            return Xi.setTimeout(e, t)
                                        },
                                        cr = lr(t);

                                    function sr(e, t, n) {
                                        var r, o, i, t = t + "";
                                        return cr(e, (t = (e = t).match(Ha), o = t ? t[1].split(za) : [], i = n, Qi(fa, function(e) {
                                            var t = "_." + e[0];
                                            i & e[1] && !mu(o, t) && o.push(t)
                                        }), t = o.sort(), (n = t.length) ? (t[r = n - 1] = (1 < n ? "& " : "") + t[r], t = t.join(2 < n ? ", " : " "), e.replace(Ya, "{\n/* [wrapped with " + t + "] */\n")) : e))
                                    }

                                    function lr(n) {
                                        var r = 0,
                                            o = 0;
                                        return function() {
                                            var e = ve(),
                                                t = 16 - (e - o);
                                            if (o = e, 0 < t) {
                                                if (800 <= ++r) return arguments[0]
                                            } else r = 0;
                                            return n.apply(Oi, arguments)
                                        }
                                    }

                                    function fr(e, t) {
                                        var n = -1,
                                            r = e.length,
                                            o = r - 1;
                                        for (t = t === Oi ? r : t; ++n < t;) {
                                            var i = kt(n, o),
                                                a = e[i];
                                            e[i] = e[n], e[n] = a
                                        }
                                        return e.length = t, e
                                    }
                                    dr = (le = no(function(e) {
                                        var o = [];
                                        return 46 === e.charCodeAt(0) && o.push(""), e.replace(Ua, function(e, t, n, r) {
                                            o.push(n ? r.replace(Ka, "$1") : t || e)
                                        }), o
                                    }, function(e) {
                                        return 500 === dr.size && dr.clear(), e
                                    })).cache;
                                    var dr, pr = le;

                                    function hr(e) {
                                        var t;
                                        return "string" == typeof e || T(e) ? e : "0" == (t = e + "") && 1 / e == -1 / 0 ? "-0" : t
                                    }

                                    function Cr(e) {
                                        if (null != e) {
                                            try {
                                                return $.call(e)
                                            } catch (e) {}
                                            try {
                                                return e + ""
                                            } catch (e) {}
                                        }
                                        return ""
                                    }

                                    function Ar(e) {
                                        var t;
                                        return e instanceof A ? e.clone() : ((t = new C(e.__wrapped__, e.__chain__)).__actions__ = m(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t)
                                    }
                                    x = a(function(e, t) {
                                        return w(e) ? tt(e, c(t, 1, w, !0)) : []
                                    }), we = a(function(e, t) {
                                        var n = r(t);
                                        return w(n) && (n = Oi), w(e) ? tt(e, c(t, 1, w, !0), l(n, 2)) : []
                                    }), e = a(function(e, t) {
                                        var n = r(t);
                                        return w(n) && (n = Oi), w(e) ? tt(e, c(t, 1, w, !0), Oi, n) : []
                                    });

                                    function Pr(e, t, n) {
                                        var r = null == e ? 0 : e.length;
                                        return r ? ((n = null == n ? 0 : N(n)) < 0 && (n = I(r + n, 0)), Eu(e, l(t, 3), n)) : -1
                                    }

                                    function gr(e, t, n) {
                                        var r, o = null == e ? 0 : e.length;
                                        return o ? (r = o - 1, n !== Oi && (r = N(n), r = n < 0 ? I(o + r, 0) : O(r, o - 1)), Eu(e, l(t, 3), r, !0)) : -1
                                    }

                                    function vr(e) {
                                        return null != e && e.length ? c(e, 1) : []
                                    }

                                    function br(e) {
                                        return e && e.length ? e[0] : Oi
                                    }
                                    W = a(function(e) {
                                        var t = ta(e, Xt);
                                        return t.length && t[0] === e[0] ? Pt(t) : []
                                    }), de = a(function(e) {
                                        var t = r(e),
                                            n = ta(e, Xt);
                                        return t === r(n) ? t = Oi : n.pop(), n.length && n[0] === e[0] ? Pt(n, l(t, 2)) : []
                                    }), t = a(function(e) {
                                        var t = r(e),
                                            n = ta(e, Xt);
                                        return (t = "function" == typeof t ? t : Oi) && n.pop(), n.length && n[0] === e[0] ? Pt(n, Oi, t) : []
                                    });

                                    function r(e) {
                                        var t = null == e ? 0 : e.length;
                                        return t ? e[t - 1] : Oi
                                    }
                                    le = a(Sr);

                                    function Sr(e, t) {
                                        return e && e.length && t && t.length ? Ot(e, t) : e
                                    }
                                    var mr = Mn(function(e, t) {
                                        var n = null == e ? 0 : e.length,
                                            r = Xe(e, t);
                                        return Nt(e, ta(t, function(e) {
                                            return Jn(e, n) ? +e : e
                                        }).sort(un)), r
                                    });

                                    function yr(e) {
                                        return null == e ? e : me.call(e)
                                    }
                                    var wr = a(function(e) {
                                            return Ht(c(e, 1, w, !0))
                                        }),
                                        _r = a(function(e) {
                                            var t = r(e);
                                            return w(t) && (t = Oi), Ht(c(e, 1, w, !0), l(t, 2))
                                        }),
                                        Tr = a(function(e) {
                                            var t = "function" == typeof(t = r(e)) ? t : Oi;
                                            return Ht(c(e, 1, w, !0), Oi, t)
                                        });

                                    function Br(t) {
                                        var n;
                                        return t && t.length ? (n = 0, t = ea(t, function(e) {
                                            if (w(e)) return n = I(e.length, n), !0
                                        }), ku(n, function(e) {
                                            return ta(t, Iu(e))
                                        })) : []
                                    }

                                    function Er(e, t) {
                                        return e && e.length ? (e = Br(e), null == t ? e : ta(e, function(e) {
                                            return Zi(t, Oi, e)
                                        })) : []
                                    }
                                    var Lr = a(function(e, t) {
                                            return w(e) ? tt(e, t) : []
                                        }),
                                        Rr = a(function(e) {
                                            return qt(ea(e, w))
                                        }),
                                        Dr = a(function(e) {
                                            var t = r(e);
                                            return w(t) && (t = Oi), qt(ea(e, w), l(t, 2))
                                        }),
                                        Ir = a(function(e) {
                                            var t = "function" == typeof(t = r(e)) ? t : Oi;
                                            return qt(ea(e, w), Oi, t)
                                        }),
                                        Or = a(Br),
                                        Nr = a(function(e) {
                                            var t = e.length,
                                                t = "function" == typeof(t = 1 < t ? e[t - 1] : Oi) ? (e.pop(), t) : Oi;
                                            return Er(e, t)
                                        });

                                    function kr(e) {
                                        e = h(e);
                                        return e.__chain__ = !0, e
                                    }

                                    function Mr(e, t) {
                                        return t(e)
                                    }
                                    var xr = Mn(function(t) {
                                            function e(e) {
                                                return Xe(e, t)
                                            }
                                            var n = t.length,
                                                r = n ? t[0] : 0,
                                                o = this.__wrapped__;
                                            return !(1 < n || this.__actions__.length) && o instanceof A && Jn(r) ? ((o = o.slice(r, +r + (n ? 1 : 0))).__actions__.push({
                                                func: Mr,
                                                args: [e],
                                                thisArg: Oi
                                            }), new C(o, this.__chain__).thru(function(e) {
                                                return n && !e.length && e.push(Oi), e
                                            })) : this.thru(e)
                                        }),
                                        Vr = fn(function(e, t, n) {
                                            g.call(e, n) ? ++e[n] : Je(e, n, 1)
                                        }),
                                        Ur = gn(Pr),
                                        jr = gn(gr);

                                    function Fr(e, t) {
                                        return (y(e) ? Qi : nt)(e, l(t, 3))
                                    }

                                    function Gr(e, t) {
                                        return (y(e) ? function(e, t) {
                                            for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
                                            return e
                                        } : rt)(e, l(t, 3))
                                    }
                                    var Yr = fn(function(e, t, n) {
                                            g.call(e, n) ? e[n].push(t) : Je(e, n, [t])
                                        }),
                                        Hr = a(function(e, t, n) {
                                            var r = -1,
                                                o = "function" == typeof t,
                                                i = p(e) ? R(e.length) : [];
                                            return nt(e, function(e) {
                                                i[++r] = o ? Zi(t, e, n) : gt(e, t, n)
                                            }), i
                                        }),
                                        zr = fn(function(e, t, n) {
                                            Je(e, n, t)
                                        });

                                    function Wr(e, t) {
                                        return (y(e) ? ta : Tt)(e, l(t, 3))
                                    }
                                    var $r = fn(function(e, t, n) {
                                            e[n ? 0 : 1].push(t)
                                        }, function() {
                                            return [
                                                [],
                                                []
                                            ]
                                        }),
                                        Kr = a(function(e, t) {
                                            var n;
                                            return null == e ? [] : (1 < (n = t.length) && f(e, t[0], t[1]) ? t = [] : 2 < n && f(t[0], t[1], t[2]) && (t = [t[0]]), Dt(e, c(t, 1), []))
                                        }),
                                        qr = fe || function() {
                                            return Xi.Date.now()
                                        };

                                    function Jr(e, t, n) {
                                        return t = n ? Oi : t, t = e && null == t ? e.length : t, Dn(e, 128, Oi, Oi, Oi, Oi, t)
                                    }

                                    function Xr(e, t) {
                                        var n;
                                        if ("function" != typeof t) throw new D(Ni);
                                        return e = N(e),
                                            function() {
                                                return 0 < --e && (n = t.apply(this, arguments)), e <= 1 && (t = Oi), n
                                            }
                                    }
                                    var Zr = a(function(e, t, n) {
                                            var r, o = 1;
                                            return n.length && (r = aa(n, Fn(Zr)), o |= 32), Dn(e, o, t, n, r)
                                        }),
                                        Qr = a(function(e, t, n) {
                                            var r, o = 3;
                                            return n.length && (r = aa(n, Fn(Qr)), o |= 32), Dn(t, o, e, n, r)
                                        });

                                    function eo(r, n, e) {
                                        var o, i, a, u, c, s, l = 0,
                                            f = !1,
                                            d = !1,
                                            t = !0;
                                        if ("function" != typeof r) throw new D(Ni);

                                        function p(e) {
                                            var t = o,
                                                n = i;
                                            return o = i = Oi, l = e, u = r.apply(n, t)
                                        }

                                        function h(e) {
                                            var t = e - s;
                                            return s === Oi || n <= t || t < 0 || d && a <= e - l
                                        }

                                        function C() {
                                            var e, t = qr();
                                            if (h(t)) return A(t);
                                            c = ur(C, (e = n - (t - s), d ? O(e, a - (t - l)) : e))
                                        }

                                        function A(e) {
                                            return c = Oi, t && o ? p(e) : (o = i = Oi, u)
                                        }

                                        function P() {
                                            var e = qr(),
                                                t = h(e);
                                            if (o = arguments, i = this, s = e, t) {
                                                if (c === Oi) return l = e = s, c = ur(C, n), f ? p(e) : u;
                                                if (d) return nn(c), c = ur(C, n), p(s)
                                            }
                                            return c === Oi && (c = ur(C, n)), u
                                        }
                                        return n = B(n) || 0, _(e) && (f = !!e.leading, a = (d = "maxWait" in e) ? I(B(e.maxWait) || 0, n) : a, t = "trailing" in e ? !!e.trailing : t), P.cancel = function() {
                                            c !== Oi && nn(c), l = 0, o = s = i = c = Oi
                                        }, P.flush = function() {
                                            return c === Oi ? u : A(qr())
                                        }, P
                                    }
                                    var fe = a(function(e, t) {
                                            return et(e, 1, t)
                                        }),
                                        to = a(function(e, t, n) {
                                            return et(e, B(t) || 0, n)
                                        });

                                    function no(r, o) {
                                        if ("function" != typeof r || null != o && "function" != typeof o) throw new D(Ni);

                                        function i() {
                                            var e = arguments,
                                                t = o ? o.apply(this, e) : e[0],
                                                n = i.cache;
                                            return n.has(t) ? n.get(t) : (e = r.apply(this, e), i.cache = n.set(t, e) || n, e)
                                        }
                                        return i.cache = new(no.Cache || Fe), i
                                    }

                                    function ro(t) {
                                        if ("function" != typeof t) throw new D(Ni);
                                        return function() {
                                            var e = arguments;
                                            switch (e.length) {
                                                case 0:
                                                    return !t.call(this);
                                                case 1:
                                                    return !t.call(this, e[0]);
                                                case 2:
                                                    return !t.call(this, e[0], e[1]);
                                                case 3:
                                                    return !t.call(this, e[0], e[1], e[2])
                                            }
                                            return !t.apply(this, e)
                                        }
                                    }
                                    no.Cache = Fe;
                                    var en = en(function(r, o) {
                                            var i = (o = 1 == o.length && y(o[0]) ? ta(o[0], oa(l())) : ta(c(o, 1), oa(l()))).length;
                                            return a(function(e) {
                                                for (var t = -1, n = O(e.length, i); ++t < n;) e[t] = o[t].call(this, e[t]);
                                                return Zi(r, this, e)
                                            })
                                        }),
                                        oo = a(function(e, t) {
                                            var n = aa(t, Fn(oo));
                                            return Dn(e, 32, Oi, t, n)
                                        }),
                                        io = a(function(e, t) {
                                            var n = aa(t, Fn(io));
                                            return Dn(e, 64, Oi, t, n)
                                        }),
                                        ao = Mn(function(e, t) {
                                            return Dn(e, 256, Oi, Oi, Oi, t)
                                        });

                                    function d(e, t) {
                                        return e === t || e != e && t != t
                                    }
                                    var uo = Tn(ht),
                                        co = Tn(function(e, t) {
                                            return t <= e
                                        }),
                                        so = vt(function() {
                                            return arguments
                                        }()) ? vt : function(e) {
                                            return i(e) && g.call(e, "callee") && !oe.call(e, "callee")
                                        },
                                        y = R.isArray,
                                        lo = hu ? oa(hu) : function(e) {
                                            return i(e) && n(e) == $i
                                        };

                                    function p(e) {
                                        return null != e && Ao(e.length) && !ho(e)
                                    }

                                    function w(e) {
                                        return i(e) && p(e)
                                    }
                                    var fo = H || wi,
                                        H = Cu ? oa(Cu) : function(e) {
                                            return i(e) && n(e) == Ui
                                        };

                                    function po(e) {
                                        var t;
                                        return !!i(e) && ((t = n(e)) == pa || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !vo(e))
                                    }

                                    function ho(e) {
                                        return !!_(e) && ((e = n(e)) == ha || e == Ca || "[object AsyncFunction]" == e || "[object Proxy]" == e)
                                    }

                                    function Co(e) {
                                        return "number" == typeof e && e == N(e)
                                    }

                                    function Ao(e) {
                                        return "number" == typeof e && -1 < e && e % 1 == 0 && e <= ki
                                    }

                                    function _(e) {
                                        var t = _typeof(e);
                                        return null != e && ("object" == t || "function" == t)
                                    }

                                    function i(e) {
                                        return null != e && "object" == _typeof(e)
                                    }
                                    var Po = Au ? oa(Au) : function(e) {
                                        return i(e) && S(e) == ji
                                    };

                                    function go(e) {
                                        return "number" == typeof e || i(e) && n(e) == Fi
                                    }

                                    function vo(e) {
                                        return !(!i(e) || n(e) != Gi) && (null === (e = ne(e)) || "function" == typeof(e = g.call(e, "constructor") && e.constructor) && e instanceof e && $.call(e) == X)
                                    }
                                    var bo = Pu ? oa(Pu) : function(e) {
                                            return i(e) && n(e) == Yi
                                        },
                                        So = gu ? oa(gu) : function(e) {
                                            return i(e) && S(e) == Hi
                                        };

                                    function mo(e) {
                                        return "string" == typeof e || !y(e) && i(e) && n(e) == zi
                                    }

                                    function T(e) {
                                        return "symbol" == _typeof(e) || i(e) && n(e) == Pa
                                    }
                                    var yo = vu ? oa(vu) : function(e) {
                                            return i(e) && Ao(e.length) && !!qi[n(e)]
                                        },
                                        wo = Tn(_t),
                                        _o = Tn(function(e, t) {
                                            return e <= t
                                        });

                                    function To(e) {
                                        if (!e) return [];
                                        if (p(e)) return (mo(e) ? ca : m)(e);
                                        var t;
                                        if (ue && e[ue]) {
                                            for (var n, r = e[ue](), o = []; !(n = r.next()).done;) o.push(n.value);
                                            return o
                                        }
                                        return ((t = S(e)) == ji ? Hu : t == Hi ? Wu : qo)(e)
                                    }

                                    function Bo(e) {
                                        return e ? (e = B(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                                    }

                                    function N(e) {
                                        var e = Bo(e),
                                            t = e % 1;
                                        return e == e ? t ? e - t : e : 0
                                    }

                                    function Eo(e) {
                                        return e ? Ze(N(e), 0, Mi) : 0
                                    }

                                    function B(e) {
                                        if ("number" == typeof e) return e;
                                        if (T(e)) return NaN;
                                        if ("string" != typeof(e = _(e) ? _(t = "function" == typeof e.valueOf ? e.valueOf() : e) ? t + "" : t : e)) return 0 === e ? e : +e;
                                        e = Mu(e);
                                        var t = Za.test(e);
                                        return t || eu.test(e) ? du(e.slice(2), t ? 2 : 8) : Xa.test(e) ? NaN : +e
                                    }

                                    function Lo(e) {
                                        return ln(e, k(e))
                                    }

                                    function E(e) {
                                        return null == e ? "" : s(e)
                                    }
                                    var Ro = dn(function(e, t) {
                                            if (er(t) || p(t)) ln(t, L(t), e);
                                            else
                                                for (var n in t) g.call(t, n) && We(e, n, t[n])
                                        }),
                                        Do = dn(function(e, t) {
                                            ln(t, k(t), e)
                                        }),
                                        Io = dn(function(e, t, n, r) {
                                            ln(t, k(t), e, r)
                                        }),
                                        Oo = dn(function(e, t, n, r) {
                                            ln(t, L(t), e, r)
                                        }),
                                        No = Mn(Xe),
                                        ko = a(function(e, t) {
                                            e = P(e);
                                            var n = -1,
                                                r = t.length,
                                                o = 2 < r ? t[2] : Oi;
                                            for (o && f(t[0], t[1], o) && (r = 1); ++n < r;)
                                                for (var i = t[n], a = k(i), u = -1, c = a.length; ++u < c;) {
                                                    var s = a[u],
                                                        l = e[s];
                                                    (l === Oi || d(l, z[s]) && !g.call(e, s)) && (e[s] = i[s])
                                                }
                                            return e
                                        }),
                                        Mo = a(function(e) {
                                            return e.push(Oi, On), Zi(Yo, Oi, e)
                                        });

                                    function xo(e, t, n) {
                                        e = null == e ? Oi : dt(e, t);
                                        return e === Oi ? n : e
                                    }

                                    function Vo(e, t) {
                                        return null != e && $n(e, t, At)
                                    }
                                    var Uo = Sn(function(e, t, n) {
                                            e[t = null != t && "function" != typeof t.toString ? J.call(t) : t] = n
                                        }, si(M)),
                                        jo = Sn(function(e, t, n) {
                                            null != t && "function" != typeof t.toString && (t = J.call(t)), g.call(e, t) ? e[t].push(n) : e[t] = [n]
                                        }, l),
                                        Fo = a(gt);

                                    function L(e) {
                                        return (p(e) ? Ye : wt)(e)
                                    }

                                    function k(e) {
                                        if (p(e)) return Ye(e, !0);
                                        var t = e;
                                        if (_(t)) {
                                            var n, r = er(t),
                                                o = [];
                                            for (n in t)("constructor" != n || !r && g.call(t, n)) && o.push(n);
                                            return o
                                        }
                                        var i = [];
                                        if (null != t)
                                            for (var a in P(t)) i.push(a);
                                        return i
                                    }
                                    var Go = dn(function(e, t, n) {
                                            Lt(e, t, n)
                                        }),
                                        Yo = dn(function(e, t, n, r) {
                                            Lt(e, t, n, r)
                                        }),
                                        Ho = Mn(function(t, e) {
                                            var n = {};
                                            if (null != t) {
                                                var r = !1;
                                                e = ta(e, function(e) {
                                                    return e = Qt(e, t), r = r || 1 < e.length, e
                                                }), ln(t, Vn(t), n), r && (n = v(n, 7, Nn));
                                                for (var o = e.length; o--;) zt(n, e[o])
                                            }
                                            return n
                                        }),
                                        zo = Mn(function(e, t) {
                                            return null == e ? {} : It(n = e, t, function(e, t) {
                                                return Vo(n, t)
                                            });
                                            var n
                                        });

                                    function Wo(e, n) {
                                        var t;
                                        return null == e ? {} : (t = ta(Vn(e), function(e) {
                                            return [e]
                                        }), n = l(n), It(e, t, function(e, t) {
                                            return n(e, t[0])
                                        }))
                                    }
                                    var $o = Rn(L),
                                        Ko = Rn(k);

                                    function qo(e) {
                                        return null == e ? [] : xu(e, L(e))
                                    }
                                    var Jo = An(function(e, t, n) {
                                        return t = t.toLowerCase(), e + (n ? Xo(t) : t)
                                    });

                                    function Xo(e) {
                                        return ii(E(e).toLowerCase())
                                    }

                                    function Zo(e) {
                                        return (e = E(e)) && e.replace(nu, Fu).replace(au, "")
                                    }
                                    var Qo = An(function(e, t, n) {
                                            return e + (n ? "-" : "") + t.toLowerCase()
                                        }),
                                        ei = An(function(e, t, n) {
                                            return e + (n ? " " : "") + t.toLowerCase()
                                        }),
                                        ti = Cn("toLowerCase"),
                                        ni = An(function(e, t, n) {
                                            return e + (n ? "_" : "") + t.toLowerCase()
                                        }),
                                        ri = An(function(e, t, n) {
                                            return e + (n ? " " : "") + ii(t)
                                        }),
                                        oi = An(function(e, t, n) {
                                            return e + (n ? " " : "") + t.toUpperCase()
                                        }),
                                        ii = Cn("toUpperCase");

                                    function ai(e, t, n) {
                                        return e = E(e), (t = n ? Oi : t) === Oi ? (n = e, cu.test(n) ? e.match(uu) || [] : e.match(Wa) || []) : e.match(t) || []
                                    }
                                    var ui = a(function(e, t) {
                                            try {
                                                return Zi(e, Oi, t)
                                            } catch (e) {
                                                return po(e) ? e : new V(e)
                                            }
                                        }),
                                        ci = Mn(function(t, e) {
                                            return Qi(e, function(e) {
                                                e = hr(e), Je(t, e, Zr(t[e], t))
                                            }), t
                                        });

                                    function si(e) {
                                        return function() {
                                            return e
                                        }
                                    }
                                    var li = vn(),
                                        fi = vn(!0);

                                    function M(e) {
                                        return e
                                    }

                                    function di(e) {
                                        return yt("function" == typeof e ? e : v(e, 1))
                                    }
                                    var pi = a(function(t, n) {
                                            return function(e) {
                                                return gt(e, t, n)
                                            }
                                        }),
                                        hi = a(function(t, n) {
                                            return function(e) {
                                                return gt(t, e, n)
                                            }
                                        });

                                    function Ci(r, t, e) {
                                        var n = L(t),
                                            o = ft(t, n),
                                            i = (null != e || _(t) && (o.length || !n.length) || (e = t, t = r, r = this, o = ft(t, L(t))), !(_(e) && "chain" in e && !e.chain)),
                                            a = ho(r);
                                        return Qi(o, function(e) {
                                            var n = t[e];
                                            r[e] = n, a && (r.prototype[e] = function() {
                                                var e, t = this.__chain__;
                                                return i || t ? (((e = r(this.__wrapped__)).__actions__ = m(this.__actions__)).push({
                                                    func: n,
                                                    args: arguments,
                                                    thisArg: r
                                                }), e.__chain__ = t, e) : n.apply(r, na([this.value()], arguments))
                                            })
                                        }), r
                                    }

                                    function Ai() {}
                                    var Pi = yn(ta),
                                        gi = yn(Su),
                                        vi = yn(Tu);

                                    function bi(e) {
                                        return Xn(e) ? Iu(hr(e)) : (t = e, function(e) {
                                            return dt(e, t)
                                        });
                                        var t
                                    }
                                    var Si = _n(),
                                        mi = _n(!0);

                                    function yi() {
                                        return []
                                    }

                                    function wi() {
                                        return !1
                                    }
                                    var _i, Ti = mn(function(e, t) {
                                            return e + t
                                        }, 0),
                                        Bi = En("ceil"),
                                        Ei = mn(function(e, t) {
                                            return e / t
                                        }, 1),
                                        Li = En("floor"),
                                        Ri = mn(function(e, t) {
                                            return e * t
                                        }, 1),
                                        Di = En("round"),
                                        Ii = mn(function(e, t) {
                                            return e - t
                                        }, 0);
                                    return h.after = function(e, t) {
                                        if ("function" != typeof t) throw new D(Ni);
                                        return e = N(e),
                                            function() {
                                                if (--e < 1) return t.apply(this, arguments)
                                            }
                                    }, h.ary = Jr, h.assign = Ro, h.assignIn = Do, h.assignInWith = Io, h.assignWith = Oo, h.at = No, h.before = Xr, h.bind = Zr, h.bindAll = ci, h.bindKey = Qr, h.castArray = function() {
                                        var e;
                                        return arguments.length ? y(e = arguments[0]) ? e : [e] : []
                                    }, h.chain = kr, h.chunk = function(e, t, n) {
                                        t = (n ? f(e, t, n) : t === Oi) ? 1 : I(N(t), 0);
                                        var r = null == e ? 0 : e.length;
                                        if (!r || t < 1) return [];
                                        for (var o = 0, i = 0, a = R(pe(r / t)); o < r;) a[i++] = u(e, o, o += t);
                                        return a
                                    }, h.compact = function(e) {
                                        for (var t = -1, n = null == e ? 0 : e.length, r = 0, o = []; ++t < n;) {
                                            var i = e[t];
                                            i && (o[r++] = i)
                                        }
                                        return o
                                    }, h.concat = function() {
                                        var e = arguments.length;
                                        if (!e) return [];
                                        for (var t = R(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
                                        return na(y(n) ? m(n) : [n], c(t, 1))
                                    }, h.cond = function(r) {
                                        var o = null == r ? 0 : r.length,
                                            t = l();
                                        return r = o ? ta(r, function(e) {
                                            if ("function" != typeof e[1]) throw new D(Ni);
                                            return [t(e[0]), e[1]]
                                        }) : [], a(function(e) {
                                            for (var t = -1; ++t < o;) {
                                                var n = r[t];
                                                if (Zi(n[0], this, e)) return Zi(n[1], this, e)
                                            }
                                        })
                                    }, h.conforms = function(e) {
                                        return t = v(e, 1), n = L(t),
                                            function(e) {
                                                return Qe(e, t, n)
                                            };
                                        var t, n
                                    }, h.constant = si, h.countBy = Vr, h.create = function(e, t) {
                                        e = Me(e);
                                        return null == t ? e : qe(e, t)
                                    }, h.curry = function e(t, n, r) {
                                        t = Dn(t, 8, Oi, Oi, Oi, Oi, Oi, n = r ? Oi : n);
                                        return t.placeholder = e.placeholder, t
                                    }, h.curryRight = function e(t, n, r) {
                                        t = Dn(t, 16, Oi, Oi, Oi, Oi, Oi, n = r ? Oi : n);
                                        return t.placeholder = e.placeholder, t
                                    }, h.debounce = eo, h.defaults = ko, h.defaultsDeep = Mo, h.defer = fe, h.delay = to, h.difference = x, h.differenceBy = we, h.differenceWith = e, h.drop = function(e, t, n) {
                                        var r = null == e ? 0 : e.length;
                                        return r ? u(e, (t = n || t === Oi ? 1 : N(t)) < 0 ? 0 : t, r) : []
                                    }, h.dropRight = function(e, t, n) {
                                        var r = null == e ? 0 : e.length;
                                        return r ? u(e, 0, (t = r - (n || t === Oi ? 1 : N(t))) < 0 ? 0 : t) : []
                                    }, h.dropRightWhile = function(e, t) {
                                        return e && e.length ? $t(e, l(t, 3), !0, !0) : []
                                    }, h.dropWhile = function(e, t) {
                                        return e && e.length ? $t(e, l(t, 3), !0) : []
                                    }, h.fill = function(e, t, n, r) {
                                        var o = null == e ? 0 : e.length;
                                        if (o) {
                                            n && "number" != typeof n && f(e, t, n) && (n = 0, r = o);
                                            var i = e,
                                                a = t,
                                                u = n,
                                                c = r,
                                                o = i.length;
                                            for ((u = N(u)) < 0 && (u = o < -u ? 0 : o + u), (c = c === Oi || o < c ? o : N(c)) < 0 && (c += o), c = c < u ? 0 : Eo(c); u < c;) i[u++] = a;
                                            return i
                                        }
                                        return []
                                    }, h.filter = function(e, t) {
                                        return (y(e) ? ea : at)(e, l(t, 3))
                                    }, h.flatMap = function(e, t) {
                                        return c(Wr(e, t), 1)
                                    }, h.flatMapDeep = function(e, t) {
                                        return c(Wr(e, t), 1 / 0)
                                    }, h.flatMapDepth = function(e, t, n) {
                                        return n = n === Oi ? 1 : N(n), c(Wr(e, t), n)
                                    }, h.flatten = vr, h.flattenDeep = function(e) {
                                        return null != e && e.length ? c(e, 1 / 0) : []
                                    }, h.flattenDepth = function(e, t) {
                                        return null != e && e.length ? c(e, t = t === Oi ? 1 : N(t)) : []
                                    }, h.flip = function(e) {
                                        return Dn(e, 512)
                                    }, h.flow = li, h.flowRight = fi, h.fromPairs = function(e) {
                                        for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
                                            var o = e[t];
                                            r[o[0]] = o[1]
                                        }
                                        return r
                                    }, h.functions = function(e) {
                                        return null == e ? [] : ft(e, L(e))
                                    }, h.functionsIn = function(e) {
                                        return null == e ? [] : ft(e, k(e))
                                    }, h.groupBy = Yr, h.initial = function(e) {
                                        return null != e && e.length ? u(e, 0, -1) : []
                                    }, h.intersection = W, h.intersectionBy = de, h.intersectionWith = t, h.invert = Uo, h.invertBy = jo, h.invokeMap = Hr, h.iteratee = di, h.keyBy = zr, h.keys = L, h.keysIn = k, h.map = Wr, h.mapKeys = function(e, r) {
                                        var o = {};
                                        return r = l(r, 3), st(e, function(e, t, n) {
                                            Je(o, r(e, t, n), e)
                                        }), o
                                    }, h.mapValues = function(e, r) {
                                        var o = {};
                                        return r = l(r, 3), st(e, function(e, t, n) {
                                            Je(o, t, r(e, t, n))
                                        }), o
                                    }, h.matches = function(e) {
                                        return Bt(v(e, 1))
                                    }, h.matchesProperty = function(e, t) {
                                        return Et(e, v(t, 1))
                                    }, h.memoize = no, h.merge = Go, h.mergeWith = Yo, h.method = pi, h.methodOf = hi, h.mixin = Ci, h.negate = ro, h.nthArg = function(t) {
                                        return t = N(t), a(function(e) {
                                            return Rt(e, t)
                                        })
                                    }, h.omit = Ho, h.omitBy = function(e, t) {
                                        return Wo(e, ro(l(t)))
                                    }, h.once = function(e) {
                                        return Xr(2, e)
                                    }, h.orderBy = function(e, t, n, r) {
                                        return null == e ? [] : Dt(e, t = y(t) ? t : null == t ? [] : [t], n = y(n = r ? Oi : n) ? n : null == n ? [] : [n])
                                    }, h.over = Pi, h.overArgs = en, h.overEvery = gi, h.overSome = vi, h.partial = oo, h.partialRight = io, h.partition = $r, h.pick = zo, h.pickBy = Wo, h.property = bi, h.propertyOf = function(t) {
                                        return function(e) {
                                            return null == t ? Oi : dt(t, e)
                                        }
                                    }, h.pull = le, h.pullAll = Sr, h.pullAllBy = function(e, t, n) {
                                        return e && e.length && t && t.length ? Ot(e, t, l(n, 2)) : e
                                    }, h.pullAllWith = function(e, t, n) {
                                        return e && e.length && t && t.length ? Ot(e, t, Oi, n) : e
                                    }, h.pullAt = mr, h.range = Si, h.rangeRight = mi, h.rearg = ao, h.reject = function(e, t) {
                                        return (y(e) ? ea : at)(e, ro(l(t, 3)))
                                    }, h.remove = function(e, t) {
                                        var n = [];
                                        if (e && e.length) {
                                            var r = -1,
                                                o = [],
                                                i = e.length;
                                            for (t = l(t, 3); ++r < i;) {
                                                var a = e[r];
                                                t(a, r, e) && (n.push(a), o.push(r))
                                            }
                                            Nt(e, o)
                                        }
                                        return n
                                    }, h.rest = function(e, t) {
                                        if ("function" != typeof e) throw new D(Ni);
                                        return a(e, t = t === Oi ? t : N(t))
                                    }, h.reverse = yr, h.sampleSize = function(e, t, n) {
                                        return t = (n ? f(e, t, n) : t === Oi) ? 1 : N(t), (y(e) ? function(e, t) {
                                            return fr(m(e), Ze(t, 0, e.length))
                                        } : function(e, t) {
                                            return fr(e = qo(e), Ze(t, 0, e.length))
                                        })(e, t)
                                    }, h.set = function(e, t, n) {
                                        return null == e ? e : xt(e, t, n)
                                    }, h.setWith = function(e, t, n, r) {
                                        return r = "function" == typeof r ? r : Oi, null == e ? e : xt(e, t, n, r)
                                    }, h.shuffle = function(e) {
                                        return (y(e) ? function(e) {
                                            return fr(m(e))
                                        } : function(e) {
                                            return fr(qo(e))
                                        })(e)
                                    }, h.slice = function(e, t, n) {
                                        var r = null == e ? 0 : e.length;
                                        return r ? (n = n && "number" != typeof n && f(e, t, n) ? (t = 0, r) : (t = null == t ? 0 : N(t), n === Oi ? r : N(n)), u(e, t, n)) : []
                                    }, h.sortBy = Kr, h.sortedUniq = function(e) {
                                        return e && e.length ? Gt(e) : []
                                    }, h.sortedUniqBy = function(e, t) {
                                        return e && e.length ? Gt(e, l(t, 2)) : []
                                    }, h.split = function(e, t, n) {
                                        return n && "number" != typeof n && f(e, t, n) && (t = n = Oi), (n = n === Oi ? Mi : n >>> 0) ? (e = E(e)) && ("string" == typeof t || null != t && !bo(t)) && !(t = s(t)) && ia(e) ? tn(ca(e), 0, n) : e.split(t, n) : []
                                    }, h.spread = function(n, r) {
                                        if ("function" != typeof n) throw new D(Ni);
                                        return r = null == r ? 0 : I(N(r), 0), a(function(e) {
                                            var t = e[r],
                                                e = tn(e, 0, r);
                                            return t && na(e, t), Zi(n, this, e)
                                        })
                                    }, h.tail = function(e) {
                                        var t = null == e ? 0 : e.length;
                                        return t ? u(e, 1, t) : []
                                    }, h.take = function(e, t, n) {
                                        return e && e.length ? u(e, 0, (t = n || t === Oi ? 1 : N(t)) < 0 ? 0 : t) : []
                                    }, h.takeRight = function(e, t, n) {
                                        var r = null == e ? 0 : e.length;
                                        return r ? u(e, (t = r - (n || t === Oi ? 1 : N(t))) < 0 ? 0 : t, r) : []
                                    }, h.takeRightWhile = function(e, t) {
                                        return e && e.length ? $t(e, l(t, 3), !1, !0) : []
                                    }, h.takeWhile = function(e, t) {
                                        return e && e.length ? $t(e, l(t, 3)) : []
                                    }, h.tap = function(e, t) {
                                        return t(e), e
                                    }, h.throttle = function(e, t, n) {
                                        var r = !0,
                                            o = !0;
                                        if ("function" != typeof e) throw new D(Ni);
                                        return _(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), eo(e, t, {
                                            leading: r,
                                            maxWait: t,
                                            trailing: o
                                        })
                                    }, h.thru = Mr, h.toArray = To, h.toPairs = $o, h.toPairsIn = Ko, h.toPath = function(e) {
                                        return y(e) ? ta(e, hr) : T(e) ? [e] : m(pr(E(e)))
                                    }, h.toPlainObject = Lo, h.transform = function(e, r, o) {
                                        var t, n = y(e),
                                            i = n || fo(e) || yo(e);
                                        return r = l(r, 4), null == o && (t = e && e.constructor, o = i ? n ? new t : [] : _(e) && ho(t) ? Me(ne(e)) : {}), (i ? Qi : st)(e, function(e, t, n) {
                                            return r(o, e, t, n)
                                        }), o
                                    }, h.unary = function(e) {
                                        return Jr(e, 1)
                                    }, h.union = wr, h.unionBy = _r, h.unionWith = Tr, h.uniq = function(e) {
                                        return e && e.length ? Ht(e) : []
                                    }, h.uniqBy = function(e, t) {
                                        return e && e.length ? Ht(e, l(t, 2)) : []
                                    }, h.uniqWith = function(e, t) {
                                        return t = "function" == typeof t ? t : Oi, e && e.length ? Ht(e, Oi, t) : []
                                    }, h.unset = function(e, t) {
                                        return null == e || zt(e, t)
                                    }, h.unzip = Br, h.unzipWith = Er, h.update = function(e, t, n) {
                                        return null == e ? e : Wt(e, t, Zt(n))
                                    }, h.updateWith = function(e, t, n, r) {
                                        return r = "function" == typeof r ? r : Oi, null == e ? e : Wt(e, t, Zt(n), r)
                                    }, h.values = qo, h.valuesIn = function(e) {
                                        return null == e ? [] : xu(e, k(e))
                                    }, h.without = Lr, h.words = ai, h.wrap = function(e, t) {
                                        return oo(Zt(t), e)
                                    }, h.xor = Rr, h.xorBy = Dr, h.xorWith = Ir, h.zip = Or, h.zipObject = function(e, t) {
                                        return Jt(e || [], t || [], We)
                                    }, h.zipObjectDeep = function(e, t) {
                                        return Jt(e || [], t || [], xt)
                                    }, h.zipWith = Nr, h.entries = $o, h.entriesIn = Ko, h.extend = Do, h.extendWith = Io, Ci(h, h), h.add = Ti, h.attempt = ui, h.camelCase = Jo, h.capitalize = Xo, h.ceil = Bi, h.clamp = function(e, t, n) {
                                        return n === Oi && (n = t, t = Oi), n !== Oi && (n = (n = B(n)) == n ? n : 0), t !== Oi && (t = (t = B(t)) == t ? t : 0), Ze(B(e), t, n)
                                    }, h.clone = function(e) {
                                        return v(e, 4)
                                    }, h.cloneDeep = function(e) {
                                        return v(e, 5)
                                    }, h.cloneDeepWith = function(e, t) {
                                        return v(e, 5, t = "function" == typeof t ? t : Oi)
                                    }, h.cloneWith = function(e, t) {
                                        return v(e, 4, t = "function" == typeof t ? t : Oi)
                                    }, h.conformsTo = function(e, t) {
                                        return null == t || Qe(e, t, L(t))
                                    }, h.deburr = Zo, h.defaultTo = function(e, t) {
                                        return null == e || e != e ? t : e
                                    }, h.divide = Ei, h.endsWith = function(e, t, n) {
                                        e = E(e), t = s(t);
                                        var r = e.length,
                                            r = n = n === Oi ? r : Ze(N(n), 0, r);
                                        return 0 <= (n -= t.length) && e.slice(n, r) == t
                                    }, h.eq = d, h.escape = function(e) {
                                        return (e = E(e)) && Oa.test(e) ? e.replace(Da, Gu) : e
                                    }, h.escapeRegExp = function(e) {
                                        return (e = E(e)) && Fa.test(e) ? e.replace(ja, "\\$&") : e
                                    }, h.every = function(e, t, n) {
                                        return (y(e) ? Su : ot)(e, l(t = n && f(e, t, n) ? Oi : t, 3))
                                    }, h.find = Ur, h.findIndex = Pr, h.findKey = function(e, t) {
                                        return Bu(e, l(t, 3), st)
                                    }, h.findLast = jr, h.findLastIndex = gr, h.findLastKey = function(e, t) {
                                        return Bu(e, l(t, 3), lt)
                                    }, h.floor = Li, h.forEach = Fr, h.forEachRight = Gr, h.forIn = function(e, t) {
                                        return null == e ? e : ut(e, l(t, 3), k)
                                    }, h.forInRight = function(e, t) {
                                        return null == e ? e : ct(e, l(t, 3), k)
                                    }, h.forOwn = function(e, t) {
                                        return e && st(e, l(t, 3))
                                    }, h.forOwnRight = function(e, t) {
                                        return e && lt(e, l(t, 3))
                                    }, h.get = xo, h.gt = uo, h.gte = co, h.has = function(e, t) {
                                        return null != e && $n(e, t, Ct)
                                    }, h.hasIn = Vo, h.head = br, h.identity = M, h.includes = function(e, t, n, r) {
                                        e = p(e) ? e : qo(e), n = n && !r ? N(n) : 0;
                                        r = e.length;
                                        return n < 0 && (n = I(r + n, 0)), mo(e) ? n <= r && -1 < e.indexOf(t, n) : !!r && -1 < ra(e, t, n)
                                    }, h.indexOf = function(e, t, n) {
                                        var r = null == e ? 0 : e.length;
                                        return r ? ra(e, t, e = (e = null == n ? 0 : N(n)) < 0 ? I(r + e, 0) : e) : -1
                                    }, h.inRange = function(e, t, n) {
                                        return t = Bo(t), n === Oi ? (n = t, t = 0) : n = Bo(n), (e = e = B(e)) >= O(t = t, n = n) && e < I(t, n)
                                    }, h.invoke = Fo, h.isArguments = so, h.isArray = y, h.isArrayBuffer = lo, h.isArrayLike = p, h.isArrayLikeObject = w, h.isBoolean = function(e) {
                                        return !0 === e || !1 === e || i(e) && n(e) == Vi
                                    }, h.isBuffer = fo, h.isDate = H, h.isElement = function(e) {
                                        return i(e) && 1 === e.nodeType && !vo(e)
                                    }, h.isEmpty = function(e) {
                                        if (null != e) {
                                            if (p(e) && (y(e) || "string" == typeof e || "function" == typeof e.splice || fo(e) || yo(e) || so(e))) return !e.length;
                                            var t, n = S(e);
                                            if (n == ji || n == Hi) return !e.size;
                                            if (er(e)) return !wt(e).length;
                                            for (t in e)
                                                if (g.call(e, t)) return !1
                                        }
                                        return !0
                                    }, h.isEqual = function(e, t) {
                                        return bt(e, t)
                                    }, h.isEqualWith = function(e, t, n) {
                                        var r = (n = "function" == typeof n ? n : Oi) ? n(e, t) : Oi;
                                        return r === Oi ? bt(e, t, Oi, n) : !!r
                                    }, h.isError = po, h.isFinite = function(e) {
                                        return "number" == typeof e && Ae(e)
                                    }, h.isFunction = ho, h.isInteger = Co, h.isLength = Ao, h.isMap = Po, h.isMatch = function(e, t) {
                                        return e === t || St(e, t, Yn(t))
                                    }, h.isMatchWith = function(e, t, n) {
                                        return n = "function" == typeof n ? n : Oi, St(e, t, Yn(t), n)
                                    }, h.isNaN = function(e) {
                                        return go(e) && e != +e
                                    }, h.isNative = function(e) {
                                        if (Qn(e)) throw new V("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                        return mt(e)
                                    }, h.isNil = function(e) {
                                        return null == e
                                    }, h.isNull = function(e) {
                                        return null === e
                                    }, h.isNumber = go, h.isObject = _, h.isObjectLike = i, h.isPlainObject = vo, h.isRegExp = bo, h.isSafeInteger = function(e) {
                                        return Co(e) && -9007199254740991 <= e && e <= ki
                                    }, h.isSet = So, h.isString = mo, h.isSymbol = T, h.isTypedArray = yo, h.isUndefined = function(e) {
                                        return e === Oi
                                    }, h.isWeakMap = function(e) {
                                        return i(e) && S(e) == Wi
                                    }, h.isWeakSet = function(e) {
                                        return i(e) && "[object WeakSet]" == n(e)
                                    }, h.join = function(e, t) {
                                        return null == e ? "" : Pe.call(e, t)
                                    }, h.kebabCase = Qo, h.last = r, h.lastIndexOf = function(e, t, n) {
                                        var r = null == e ? 0 : e.length;
                                        if (r) {
                                            var o = r;
                                            if (n !== Oi && (o = (o = N(n)) < 0 ? I(r + o, 0) : O(o, r - 1)), t == t) {
                                                var i = e;
                                                var a = t;
                                                for (var u = o + 1; u--;)
                                                    if (i[u] === a) return u;
                                                return u;
                                                return
                                            } else return Eu(e, Ru, o, !0)
                                        }
                                        return -1
                                    }, h.lowerCase = ei, h.lowerFirst = ti, h.lt = wo, h.lte = _o, h.max = function(e) {
                                        return e && e.length ? it(e, M, ht) : Oi
                                    }, h.maxBy = function(e, t) {
                                        return e && e.length ? it(e, l(t, 2), ht) : Oi
                                    }, h.mean = function(e) {
                                        return Du(e, M)
                                    }, h.meanBy = function(e, t) {
                                        return Du(e, l(t, 2))
                                    }, h.min = function(e) {
                                        return e && e.length ? it(e, M, _t) : Oi
                                    }, h.minBy = function(e, t) {
                                        return e && e.length ? it(e, l(t, 2), _t) : Oi
                                    }, h.stubArray = yi, h.stubFalse = wi, h.stubObject = function() {
                                        return {}
                                    }, h.stubString = function() {
                                        return ""
                                    }, h.stubTrue = function() {
                                        return !0
                                    }, h.multiply = Ri, h.nth = function(e, t) {
                                        return e && e.length ? Rt(e, N(t)) : Oi
                                    }, h.noConflict = function() {
                                        return Xi._ === this && (Xi._ = Z), this
                                    }, h.noop = Ai, h.now = qr, h.pad = function(e, t, n) {
                                        e = E(e);
                                        var r = (t = N(t)) ? ua(e) : 0;
                                        return !t || t <= r ? e : wn(he(t = (t - r) / 2), n) + e + wn(pe(t), n)
                                    }, h.padEnd = function(e, t, n) {
                                        e = E(e);
                                        var r = (t = N(t)) ? ua(e) : 0;
                                        return t && r < t ? e + wn(t - r, n) : e
                                    }, h.padStart = function(e, t, n) {
                                        e = E(e);
                                        var r = (t = N(t)) ? ua(e) : 0;
                                        return t && r < t ? wn(t - r, n) + e : e
                                    }, h.parseInt = function(e, t, n) {
                                        return t = n || null == t ? 0 : t && +t, be(E(e).replace(Ga, ""), t || 0)
                                    }, h.random = function(e, t, n) {
                                        var r;
                                        return n && "boolean" != typeof n && f(e, t, n) && (t = n = Oi), n === Oi && ("boolean" == typeof t ? (n = t, t = Oi) : "boolean" == typeof e && (n = e, e = Oi)), e === Oi && t === Oi ? (e = 0, t = 1) : (e = Bo(e), t === Oi ? (t = e, e = 0) : t = Bo(t)), t < e && (r = e, e = t, t = r), n || e % 1 || t % 1 ? (r = Se(), O(e + r * (t - e + fu("1e-" + ((r + "").length - 1))), t)) : kt(e, t)
                                    }, h.reduce = function(e, t, n) {
                                        var r = y(e) ? wu : Ou,
                                            o = arguments.length < 3;
                                        return r(e, l(t, 4), n, o, nt)
                                    }, h.reduceRight = function(e, t, n) {
                                        var r = y(e) ? _u : Ou,
                                            o = arguments.length < 3;
                                        return r(e, l(t, 4), n, o, rt)
                                    }, h.repeat = function(e, t, n) {
                                        return t = (n ? f(e, t, n) : t === Oi) ? 1 : N(t), Mt(E(e), t)
                                    }, h.replace = function() {
                                        var e = arguments,
                                            t = E(e[0]);
                                        return e.length < 3 ? t : t.replace(e[1], e[2])
                                    }, h.result = function(e, t, n) {
                                        var r = -1,
                                            o = (t = Qt(t, e)).length;
                                        for (o || (o = 1, e = Oi); ++r < o;) {
                                            var i = null == e ? Oi : e[hr(t[r])];
                                            i === Oi && (r = o, i = n), e = ho(i) ? i.call(e) : i
                                        }
                                        return e
                                    }, h.round = Di, h.runInContext = o, h.sample = function(e) {
                                        return (y(e) ? He : function(e) {
                                            return He(qo(e))
                                        })(e)
                                    }, h.size = function(e) {
                                        var t;
                                        return null == e ? 0 : p(e) ? mo(e) ? ua(e) : e.length : (t = S(e)) == ji || t == Hi ? e.size : wt(e).length
                                    }, h.snakeCase = ni, h.some = function(e, t, n) {
                                        return (y(e) ? Tu : Ut)(e, l(t = n && f(e, t, n) ? Oi : t, 3))
                                    }, h.sortedIndex = function(e, t) {
                                        return jt(e, t)
                                    }, h.sortedIndexBy = function(e, t, n) {
                                        return Ft(e, t, l(n, 2))
                                    }, h.sortedIndexOf = function(e, t) {
                                        var n = null == e ? 0 : e.length;
                                        if (n) {
                                            var r = jt(e, t);
                                            if (r < n && d(e[r], t)) return r
                                        }
                                        return -1
                                    }, h.sortedLastIndex = function(e, t) {
                                        return jt(e, t, !0)
                                    }, h.sortedLastIndexBy = function(e, t, n) {
                                        return Ft(e, t, l(n, 2), !0)
                                    }, h.sortedLastIndexOf = function(e, t) {
                                        if (null != e && e.length) {
                                            var n = jt(e, t, !0) - 1;
                                            if (d(e[n], t)) return n
                                        }
                                        return -1
                                    }, h.startCase = ri, h.startsWith = function(e, t, n) {
                                        return e = E(e), n = null == n ? 0 : Ze(N(n), 0, e.length), t = s(t), e.slice(n, n + t.length) == t
                                    }, h.subtract = Ii, h.sum = function(e) {
                                        return e && e.length ? Nu(e, M) : 0
                                    }, h.sumBy = function(e, t) {
                                        return e && e.length ? Nu(e, l(t, 2)) : 0
                                    }, h.template = function(a, e, t) {
                                        var n = h.templateSettings;
                                        t && f(a, e, t) && (e = Oi), a = E(a), e = Io({}, e, n, In);
                                        var u, c, t = Io({}, e.imports, n.imports, In),
                                            r = L(t),
                                            o = xu(t, r),
                                            s = 0,
                                            n = e.interpolate || ru,
                                            l = "__p += '",
                                            t = F((e.escape || ru).source + "|" + n.source + "|" + (n === Ma ? qa : ru).source + "|" + (e.evaluate || ru).source + "|$", "g"),
                                            i = "//# sourceURL=" + (g.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++lu + "]") + "\n",
                                            n = (a.replace(t, function(e, t, n, r, o, i) {
                                                return n = n || r, l += a.slice(s, i).replace(ou, Yu), t && (u = !0, l += "' +\n__e(" + t + ") +\n'"), o && (c = !0, l += "';\n" + o + ";\n__p += '"), n && (l += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), s = i + e.length, e
                                            }), l += "';\n", g.call(e, "variable") && e.variable);
                                        if (n) {
                                            if ($a.test(n)) throw new V("Invalid `variable` option passed into `_.template`")
                                        } else l = "with (obj) {\n" + l + "\n}\n";
                                        l = (c ? l.replace(Ba, "") : l).replace(Ea, "$1").replace(La, "$1;");
                                        l = "function(" + (n || "obj") + ") {\n" + (n ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (c ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l + "return __p\n}", t = ui(function() {
                                            return U(r, i + "return " + l).apply(Oi, o)
                                        });
                                        if (t.source = l, po(t)) throw t;
                                        return t
                                    }, h.times = function(e, t) {
                                        if ((e = N(e)) < 1 || ki < e) return [];
                                        var n = Mi,
                                            r = O(e, Mi);
                                        t = l(t), e -= Mi;
                                        for (r = ku(r, t); ++n < e;) t(n);
                                        return r
                                    }, h.toFinite = Bo, h.toInteger = N, h.toLength = Eo, h.toLower = function(e) {
                                        return E(e).toLowerCase()
                                    }, h.toNumber = B, h.toSafeInteger = function(e) {
                                        return e ? Ze(N(e), -9007199254740991, ki) : 0 === e ? e : 0
                                    }, h.toString = E, h.toUpper = function(e) {
                                        return E(e).toUpperCase()
                                    }, h.trim = function(e, t, n) {
                                        return (e = E(e)) && (n || t === Oi) ? Mu(e) : e && (t = s(t)) ? tn(n = ca(e), Uu(n, t = ca(t)), ju(n, t) + 1).join("") : e
                                    }, h.trimEnd = function(e, t, n) {
                                        return (e = E(e)) && (n || t === Oi) ? e.slice(0, $u(e) + 1) : e && (t = s(t)) ? tn(n = ca(e), 0, ju(n, ca(t)) + 1).join("") : e
                                    }, h.trimStart = function(e, t, n) {
                                        return (e = E(e)) && (n || t === Oi) ? e.replace(Ga, "") : e && (t = s(t)) ? tn(n = ca(e), Uu(n, ca(t))).join("") : e
                                    }, h.truncate = function(e, t) {
                                        var n, r = 30,
                                            o = "...",
                                            t = (_(t) && (n = "separator" in t ? t.separator : n, r = "length" in t ? N(t.length) : r, o = "omission" in t ? s(t.omission) : o), (e = E(e)).length);
                                        if ((t = ia(e) ? (i = ca(e)).length : t) <= r) return e;
                                        t = r - ua(o);
                                        if (t < 1) return o;
                                        var i, r = i ? tn(i, 0, t).join("") : e.slice(0, t);
                                        if (n !== Oi)
                                            if (i && (t += r.length - t), bo(n)) {
                                                if (e.slice(t).search(n)) {
                                                    var a, u = r;
                                                    for ((n = n.global ? n : F(n.source, E(Ja.exec(n)) + "g")).lastIndex = 0; a = n.exec(u);) var c = a.index;
                                                    r = r.slice(0, c === Oi ? t : c)
                                                }
                                            } else e.indexOf(s(n), t) != t && -1 < (i = r.lastIndexOf(n)) && (r = r.slice(0, i));
                                        return r + o
                                    }, h.unescape = function(e) {
                                        return (e = E(e)) && Ia.test(e) ? e.replace(Ra, Ku) : e
                                    }, h.uniqueId = function(e) {
                                        var t = ++K;
                                        return E(e) + t
                                    }, h.upperCase = oi, h.upperFirst = ii, h.each = Fr, h.eachRight = Gr, h.first = br, Ci(h, (_i = {}, st(h, function(e, t) {
                                        g.call(h.prototype, t) || (_i[t] = e)
                                    }), _i), {
                                        chain: !1
                                    }), h.VERSION = "4.17.21", Qi(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                        h[e].placeholder = h
                                    }), Qi(["drop", "take"], function(n, r) {
                                        A.prototype[n] = function(e) {
                                            e = e === Oi ? 1 : I(N(e), 0);
                                            var t = this.__filtered__ && !r ? new A(this) : this.clone();
                                            return t.__filtered__ ? t.__takeCount__ = O(e, t.__takeCount__) : t.__views__.push({
                                                size: O(e, Mi),
                                                type: n + (t.__dir__ < 0 ? "Right" : "")
                                            }), t
                                        }, A.prototype[n + "Right"] = function(e) {
                                            return this.reverse()[n](e).reverse()
                                        }
                                    }), Qi(["filter", "map", "takeWhile"], function(e, t) {
                                        var n = t + 1,
                                            r = 1 == n || 3 == n;
                                        A.prototype[e] = function(e) {
                                            var t = this.clone();
                                            return t.__iteratees__.push({
                                                iteratee: l(e, 3),
                                                type: n
                                            }), t.__filtered__ = t.__filtered__ || r, t
                                        }
                                    }), Qi(["head", "last"], function(e, t) {
                                        var n = "take" + (t ? "Right" : "");
                                        A.prototype[e] = function() {
                                            return this[n](1).value()[0]
                                        }
                                    }), Qi(["initial", "tail"], function(e, t) {
                                        var n = "drop" + (t ? "" : "Right");
                                        A.prototype[e] = function() {
                                            return this.__filtered__ ? new A(this) : this[n](1)
                                        }
                                    }), A.prototype.compact = function() {
                                        return this.filter(M)
                                    }, A.prototype.find = function(e) {
                                        return this.filter(e).head()
                                    }, A.prototype.findLast = function(e) {
                                        return this.reverse().find(e)
                                    }, A.prototype.invokeMap = a(function(t, n) {
                                        return "function" == typeof t ? new A(this) : this.map(function(e) {
                                            return gt(e, t, n)
                                        })
                                    }), A.prototype.reject = function(e) {
                                        return this.filter(ro(l(e)))
                                    }, A.prototype.slice = function(e, t) {
                                        e = N(e);
                                        var n = this;
                                        return n.__filtered__ && (0 < e || t < 0) ? new A(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), n = t !== Oi ? (t = N(t)) < 0 ? n.dropRight(-t) : n.take(t - e) : n)
                                    }, A.prototype.takeRightWhile = function(e) {
                                        return this.reverse().takeWhile(e).reverse()
                                    }, A.prototype.toArray = function() {
                                        return this.take(Mi)
                                    }, st(A.prototype, function(s, e) {
                                        var l = /^(?:filter|find|map|reject)|While$/.test(e),
                                            f = /^(?:head|last)$/.test(e),
                                            d = h[f ? "take" + ("last" == e ? "Right" : "") : e],
                                            p = f || /^find/.test(e);
                                        d && (h.prototype[e] = function() {
                                            function e(e) {
                                                return e = d.apply(h, na([e], r)), f && u ? e[0] : e
                                            }
                                            var t, n = this.__wrapped__,
                                                r = f ? [1] : arguments,
                                                o = n instanceof A,
                                                i = r[0],
                                                a = o || y(n),
                                                u = (a && l && "function" == typeof i && 1 != i.length && (o = a = !1), this.__chain__),
                                                i = !!this.__actions__.length,
                                                c = p && !u,
                                                o = o && !i;
                                            return !p && a ? (n = o ? n : new A(this), (t = s.apply(n, r)).__actions__.push({
                                                func: Mr,
                                                args: [e],
                                                thisArg: Oi
                                            }), new C(t, u)) : c && o ? s.apply(this, r) : (t = this.thru(e), c ? f ? t.value()[0] : t.value() : t)
                                        })
                                    }), Qi(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                        var n = Y[e],
                                            r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                            o = /^(?:pop|shift)$/.test(e);
                                        h.prototype[e] = function() {
                                            var e, t = arguments;
                                            return o && !this.__chain__ ? (e = this.value(), n.apply(y(e) ? e : [], t)) : this[r](function(e) {
                                                return n.apply(y(e) ? e : [], t)
                                            })
                                        }
                                    }), st(A.prototype, function(e, t) {
                                        var n, r = h[t];
                                        r && (n = r.name + "", g.call(Ee, n) || (Ee[n] = []), Ee[n].push({
                                            name: t,
                                            func: r
                                        }))
                                    }), Ee[bn(Oi, 2).name] = [{
                                        name: "wrapper",
                                        func: Oi
                                    }], A.prototype.clone = function() {
                                        var e = new A(this.__wrapped__);
                                        return e.__actions__ = m(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = m(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = m(this.__views__), e
                                    }, A.prototype.reverse = function() {
                                        var e;
                                        return this.__filtered__ ? ((e = new A(this)).__dir__ = -1, e.__filtered__ = !0) : (e = this.clone()).__dir__ *= -1, e
                                    }, A.prototype.value = function() {
                                        var e = this.__wrapped__.value(),
                                            t = this.__dir__,
                                            n = y(e),
                                            r = t < 0,
                                            o = n ? e.length : 0,
                                            i = function(e, t, n) {
                                                for (var r = -1, o = n.length; ++r < o;) {
                                                    var i = n[r],
                                                        a = i.size;
                                                    switch (i.type) {
                                                        case "drop":
                                                            e += a;
                                                            break;
                                                        case "dropRight":
                                                            t -= a;
                                                            break;
                                                        case "take":
                                                            t = O(t, e + a);
                                                            break;
                                                        case "takeRight":
                                                            e = I(e, t - a)
                                                    }
                                                }
                                                return {
                                                    start: e,
                                                    end: t
                                                }
                                            }(0, o, this.__views__),
                                            a = i.start,
                                            i = i.end,
                                            u = i - a,
                                            c = r ? i : a - 1,
                                            s = this.__iteratees__,
                                            l = s.length,
                                            f = 0,
                                            d = O(u, this.__takeCount__);
                                        if (!n || !r && o == u && d == u) return Kt(e, this.__actions__);
                                        var p = [];
                                        e: for (; u-- && f < d;) {
                                            for (var h = -1, C = e[c += t]; ++h < l;) {
                                                var A = s[h],
                                                    P = A.iteratee,
                                                    A = A.type,
                                                    P = P(C);
                                                if (2 == A) C = P;
                                                else if (!P) {
                                                    if (1 == A) continue e;
                                                    break e
                                                }
                                            }
                                            p[f++] = C
                                        }
                                        return p
                                    }, h.prototype.at = xr, h.prototype.chain = function() {
                                        return kr(this)
                                    }, h.prototype.commit = function() {
                                        return new C(this.value(), this.__chain__)
                                    }, h.prototype.next = function() {
                                        this.__values__ === Oi && (this.__values__ = To(this.value()));
                                        var e = this.__index__ >= this.__values__.length;
                                        return {
                                            done: e,
                                            value: e ? Oi : this.__values__[this.__index__++]
                                        }
                                    }, h.prototype.plant = function(e) {
                                        for (var t, n = this; n instanceof Ve;) var r = Ar(n),
                                            o = (r.__index__ = 0, r.__values__ = Oi, t ? o.__wrapped__ = r : t = r, r),
                                            n = n.__wrapped__;
                                        return o.__wrapped__ = e, t
                                    }, h.prototype.reverse = function() {
                                        var e = this.__wrapped__;
                                        return e instanceof A ? (e = e, (e = (e = this.__actions__.length ? new A(this) : e).reverse()).__actions__.push({
                                            func: Mr,
                                            args: [yr],
                                            thisArg: Oi
                                        }), new C(e, this.__chain__)) : this.thru(yr)
                                    }, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = function() {
                                        return Kt(this.__wrapped__, this.__actions__)
                                    }, h.prototype.first = h.prototype.head, ue && (h.prototype[ue] = function() {
                                        return this
                                    }), h
                                }();
                            Xi._ = qu, (T = function() {
                                return qu
                            }.call(w, _, w, y)) !== Oi && (y.exports = T)
                        }.call(this)
                }
            },
            Y = {};

        function w(e) {
            var t = Y[e];
            return void 0 !== t || (t = Y[e] = {
                id: e,
                loaded: !1,
                exports: {}
            }, G[e].call(t.exports, t, t.exports, w), t.loaded = !0), t.exports
        }

        function H(e) {
            void 0 === e && (e = window.location.hostname);
            var n = "https://cbcrc.sb.blueconic.net/script.js";
            return p.includes(e) && (n = "https://cdp.cbc.ca/script.js"), new Promise(function(e, t) {
                window.CBC.APP.SC.UTIL.loadScript(n, function() {
                    e(!0)
                }, !0)
            })
        }

        function z() {
            return p.includes(window.location.hostname) || "ocelot-staging.cbc.ca" == window.location.hostname ? "3f4beddd-2061-49b0-ae80-6f1f2ed65b37" : "936da557-6daa-4444-92cc-161fc290c603"
        }

        function _() {}

        function T(e) {
            var t = this,
                e = (this.hostname = "", this.pathname = "", this.path = [], this.query = "", this.params = {}, this.fragment = "", this.productHostName = null, e = (e = e || "").toLowerCase(), new URL(e, "https://www.cbc.ca"));
            e.hostname && (this.hostname = e.hostname.replace(/^www\./, "")), e.pathname && (this.pathname = e.pathname, this.path = e.pathname.split("/").filter(Boolean)), e.hash && (this.fragment = e.hash.replace(/^#/, "")), e.search && (this.query = e.search.slice(1), this.query.split("&").forEach(function(e) {
                e = e.split("=");
                t.params[e[0]] = decodeURIComponent(e[1])
            }))
        }

        function B() {
            var e;
            return window.localStorage.getItem("LRTokenKey") ? window.localStorage.getItem("LRTokenKey").replace(/"/g, "") : window.localStorage.getItem("lrtoken") ? window.localStorage.getItem("lrtoken").replace(/"/g, "") : window.CBC.APP.SC.UTIL.getCookie("lr-user--token") ? window.CBC.APP.SC.UTIL.getCookie("lr-user--token").replace(/"/g, "") : (e = function() {
                for (var e, t, n = 0, r = Object.entries(window.localStorage); n < r.length; n++) {
                    var o = r[n],
                        i = o[0],
                        o = o[1];
                    l.test(i) && (e = o)
                }
                return e ? (t = window.atob(e), t = JSON.parse(t).token, JSON.parse(window.atob(t.split(".")[0])), JSON.parse(window.atob(t.split(".")[1]))) : null
            }()) ? e.lrat.replace(/"/g, "") : null
        }

        function W() {
            return new Promise(function(e, t) {
                var n;
                window.LR_IS_READY || window.LoginRadiusV2 ? e(null) : n = setInterval(function() {
                    (window.LR_IS_READY || window.LoginRadiusV2) && (clearInterval(n), e(null))
                }, 100)
            })
        }

        function E(e) {
            var r = new Promise(function(e) {
                    window.vfQ = window.vfQ || [], window.vfQ.push(function() {
                        e(null)
                    })
                }),
                n = e.logger;

            function o() {
                return window.vf ? 2 : window.viafoura ? 1 : 0
            }

            function i() {
                return r.then(function() {
                    return 1 < o() ? window.vf : window.viafoura
                })
            }

            function a() {
                return t(this, void 0, void 0, function() {
                    var t, n;
                    return d(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 8, , 9]), [4, f()];
                            case 1:
                                return 200 !== e.sent().status ? [3, 7] : [4, r];
                            case 2:
                                return e.sent(), [4, i()];
                            case 3:
                                return t = e.sent(), 1 < o() ? [4, t.context.get("user")] : [3, 5];
                            case 4:
                                return n = e.sent(), [3, 6];
                            case 5:
                                n = t.users.current(), e.label = 6;
                            case 6:
                                return [2, n];
                            case 7:
                                return [3, 9];
                            case 8:
                                throw e.sent();
                            case 9:
                                return [2]
                        }
                    })
                })
            }

            function u() {
                return t(this, void 0, void 0, function() {
                    var t;
                    return d(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, a()];
                            case 1:
                                return t = e.sent(), "guest" !== (t = t.user_privilege) && t ? [2, t] : [2, null];
                            case 2:
                                return e.sent(), n.debug("user has no privilege!"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function c() {
                return t(this, void 0, void 0, function() {
                    var t, n;
                    return d(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, a()];
                            case 1:
                                return t = e.sent(), n = 1 < o() ? 1e3 : 1, [2, Math.floor(t.date_created / n) || 0];
                            case 2:
                                return e.sent(), [2, 0];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function s() {
                return t(this, void 0, void 0, function() {
                    var t;
                    return d(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 3, , 4]), [4, a()];
                            case 1:
                                return t = e.sent(), 1 === o() ? [2, t.comments_made] : [4, t.data_count()];
                            case 2:
                                return [2, e.sent().commentsMade || 0];
                            case 3:
                                return e.sent(), [2, 0];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
            return {
                viafouraLoaded: r,
                version: o,
                api: i,
                user: a,
                isLoggedIn: function() {
                    return t(this, void 0, void 0, function() {
                        var t;
                        return d(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, u()];
                                case 1:
                                    return [2, (t = e.sent()) && "guest" !== t];
                                case 2:
                                    return e.sent(), [2, !1];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                userId: function() {
                    return t(this, void 0, void 0, function() {
                        return d(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, a()];
                                case 1:
                                    return [2, e.sent().id || null];
                                case 2:
                                    return e.sent(), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                userPrivilege: u,
                userDateCreated: c,
                commentsMade: s,
                activityRange: function() {
                    return t(this, void 0, void 0, function() {
                        var r, o;
                        return d(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, Promise.all([c(), s()])];
                                case 1:
                                    return o = e.sent(), r = o[0], o = o[1], [2, (t = r, n = o, (n /= (Math.floor(Date.now() / 1e3) - t + 1) / 86400) <= 0 ? "inactive" : n <= 1 ? "less than 1 comment per day" : n <= 5 ? "1-5 comments per day" : n <= 16 ? "5-16 comments per day" : "more than 16 comments per day")];
                                case 2:
                                    return e.sent(), [2, "inactive"];
                                case 3:
                                    return [2]
                            }
                            var t, n
                        })
                    })
                }
            }
        }

        function L(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }

        function $(e, a, u, c) {
            return new(u = u || Promise)(function(n, t) {
                function r(e) {
                    try {
                        i(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        i(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof u ? t : new u(function(e) {
                        e(t)
                    })).then(r, o)
                }
                i((c = c.apply(e, a || [])).next())
            })
        }

        function K(r, o) {
            var i, a, u, c = {
                    label: 0,
                    sent: function() {
                        if (1 & u[0]) throw u[1];
                        return u[1]
                    },
                    trys: [],
                    ops: []
                },
                s = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }), s;

            function e(n) {
                return function(e) {
                    var t = [n, e];
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; c = s && t[s = 0] ? 0 : c;) try {
                        if (i = 1, a && (u = 2 & t[0] ? a.return : t[0] ? a.throw || ((u = a.return) && u.call(a), 0) : a.next) && !(u = u.call(a, t[1])).done) return u;
                        switch (a = 0, (t = u ? [2 & t[0], u.value] : t)[0]) {
                            case 0:
                            case 1:
                                u = t;
                                break;
                            case 4:
                                return c.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, a = t[1], t = [0];
                                continue;
                            case 7:
                                t = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!((u = 0 < (u = c.trys).length && u[u.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) c.label = t[1];
                                else if (6 === t[0] && c.label < u[1]) c.label = u[1], u = t;
                                else {
                                    if (!(u && c.label < u[2])) {
                                        u[2] && c.ops.pop(), c.trys.pop();
                                        continue
                                    }
                                    c.label = u[2], c.ops.push(t)
                                }
                        }
                        t = o.call(r, c)
                    } catch (e) {
                        t = [6, e], a = 0
                    } finally {
                        i = u = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
            }
        }

        function q(e) {
            this.pubSub = e.pubSub, this.util = e.util, this.logger = e.logger, this.lotame = e.lotame, this.behaviourBuilder = new M(this), this.behaviourBuilderOtt = new x(this), this.geoip = new P(this), this.subscribers = new U(this), this.viafoura = E(this), this.syncPixel = new F(this), this.userInfo = new V(this), this._modules = [this.subscribers, this.syncPixel, this.geoip, this.userInfo]
        }

        function R(e) {
            var t = e.viafoura,
                t = void 0 === t ? E({
                    logger: j
                }) : t,
                n = e.pubSub,
                e = e.logger,
                e = void 0 === e ? S : e;
            this.viafoura = t, this.pubSub = n, this.logger = e
        }

        function D(e) {
            this.dmp = e, this.logger = e.logger, this.pubSub = e.pubSub, this.lotame = e.lotame, this.geoip = e.geoip, this.behaviourBuilder = e.behaviourBuilder, this.behaviourBuilderOtt = e.behaviourBuilderOtt
        }

        function I(e) {
            var t = e.logger,
                n = void 0 === t ? S.create(null != (n = null == (n = null == (n = window.CBC) ? void 0 : n.APP) ? void 0 : n.SC) && n.DEBUG ? S.LEVEL.DEBUG : S.LEVEL.ERROR) : t,
                t = e.viafoura,
                t = void 0 === t ? E({
                    logger: n
                }) : t,
                r = e.lotame,
                o = e.pubSub,
                e = e.util,
                i = this;
            this.sendData = function(e) {
                var t, n;
                e && (n = i.getGender(e), t = i.getAge(e), e = i.getPostalCode(e), n = [new g(g.TYPES.GENERIC_DEMO, "User Info : Gender : " + n), new g(g.TYPES.GENERIC_DEMO, "User Info : Age : " + t), new g(g.TYPES.GENERIC_GEO, "User Info : Postal Code : " + e)], i.lotame.sendBehaviours(n))
            }, this._onSignIn = function() {
                return $(i, void 0, void 0, function() {
                    return K(this, function(e) {
                        return n = this.sendData, t = "https://api.loginradius.com/identity/v2/auth/account?apikey=" + z(), W().then(function() {
                            var e = B();
                            if (!e) return n(null);
                            window.CBC.APP.SC.UTIL.makeGETRequest(t, {
                                success: function(e, t) {
                                    console.debug("User logged in successfully, getting user profile"), n(JSON.parse(e.responseText))
                                },
                                failure: function(e, t) {
                                    console.error("Error : login radius api call to get user profile")
                                }
                            }, void 0, void 0, {
                                Authorization: "Bearer " + e
                            }, void 0)
                        }), [2];
                        var n, t
                    })
                })
            }, this._onSignOut = function() {
                i.lotame.sendBehaviours([new g(g.TYPES.ACTION, "User Info : Sign out")])
            }, this.logger = n, this.viafoura = t, this.lotame = r, this.pubSub = o, this.util = e
        }

        function O(e) {
            e = e.logger;
            this.logger = e
        }

        function N(e) {
            e = e.logger;
            this.logger = e
        }

        function J(e, t) {
            this.type = e, this.value = t
        }

        function k(e) {
            var t = e.pubSub,
                n = e.logger,
                r = e.lotame,
                e = e.util;
            this.postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, this.logger = n, this.lotame = r, this.pubSub = t, this.util = e
        }
        w.g = function() {
            if ("object" == ("undefined" == typeof globalThis ? "undefined" : _typeof(globalThis))) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == ("undefined" == typeof window ? "undefined" : _typeof(window))) return window
            }
        }(), w.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        }, e = "https://sdk.privacy-center.org/", "".concat(e).concat("3a915ac2-58b8-44bc-8cdb-e703bf0e2f35", "/loader.js?target_type=notice&target=").concat("H8Dip2tL"), "".concat(e).concat("c5d08173-e68f-4365-8900-be868b6d1c5f", "/loader.js?target_type=notice&target=").concat("FgNxNKJP"), a = /cbckids\.(ca|com)|cbc\.(ca|com)(:\d{4})?\/kids($|\/|cbc2|news|fantasyhockey)|subscriptions\.cbc\.ca\/listmanagement\/widget\/KID|gem\.cbc\.ca\/(category|section)\/kids/i, p = ["www.cbc.ca", "gem.cbc.ca", "newsinteractives.cbc.ca", "cbchelp.cbc.ca", "subscriptions.cbc.ca", "usability.cbc.ca"], (e = o = o || {}).BLUECONIC = "blueconic", e.LOTAME = "lotame", (i = i || {}).GLOBAL_DISABLE_USER_TRACKING = "globalDisableUserTracking", u = {
            watch: !0,
            live: !0,
            betalisten: !0,
            gem: !0
        }, c = {
            artists: !0
        }, T.prototype.getProductHostName = function() {
            if (null == this.productHostName) {
                this.productHostName = this.hostname || "";
                var e = this.hostname.split("."),
                    t = null,
                    n = null,
                    r = null;
                if (2 <= e.length && (t = e[e.length - 1], n = e[e.length - 2], 3 <= e.length) && (r = e[0]), "ca" === t) {
                    e = null;
                    if ("cbc" === n) e = u;
                    else {
                        if ("cbcmusic" !== n) return this.productHostName;
                        e = c
                    }
                    this.productHostName = (e[r] ? "".concat(r, ".") : "").concat(n, ".").concat(t)
                }
            }
            return this.productHostName
        }, T.getLocationUrl = function() {
            return window.location.href
        }, A = T, Object.defineProperty(_, "spa", {
            get: function() {
                return !0 === (window.CBC.APP.SC.DTM.DATA && window.CBC.APP.SC.DTM.DATA.spa)
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(_, "keywords", {
            get: function() {
                var e = window.CBC.APP.SC.DTM.formatted && window.CBC.APP.SC.DTM.formatted.lotame && window.CBC.APP.SC.DTM.formatted.lotame.keywords;
                return void 0 === e ? null : e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(_, "contentType", {
            get: function() {
                return window.CBC.APP.SC.DTM.DATA && window.CBC.APP.SC.DTM.DATA.contenttype || ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(_, "contentGenre", {
            get: function() {
                var e;
                return (null == (e = null == (e = window.CBC.APP.SC.DTM.DATA) ? void 0 : e.content) ? void 0 : e.genre) || ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(_, "contentSeason", {
            get: function() {
                var e;
                return (null == (e = null == (e = window.CBC.APP.SC.DTM.DATA) ? void 0 : e.content) ? void 0 : e.season) || ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(_, "title", {
            get: function() {
                var e;
                return (null == (e = window.CBC.APP.SC.DTM.DATA) ? void 0 : e.title) || ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(_, "url", {
            get: function() {
                return A.getLocationUrl() || ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(_, "userTier", {
            get: function() {
                return window.CBC.APP.SC.DTM.DATA && window.CBC.APP.SC.DTM.DATA.userTier || ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(_, "sponsorName", {
            get: function() {
                return window.CBC.APP.SC.DTM.DATA && window.CBC.APP.SC.DTM.DATA.sponsor && window.CBC.APP.SC.UTIL.normalize(window.CBC.APP.SC.DTM.DATA.sponsor.name) || ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(_, "grapeshotCategories", {
            get: function() {
                return window.CBC.APP.SC.DTM.DATA && window.CBC.APP.SC.DTM.DATA.grapeshotCategories || []
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(_, "grapeshotKeywords", {
            get: function() {
                return window.CBC.APP.SC.DTM.DATA && window.CBC.APP.SC.DTM.DATA.grapeshotKeywords || []
            },
            enumerable: !1,
            configurable: !0
        }), s = _, l = /^idt\|(.*)/, e = w(486), f = (0, e.debounce)(function() {
            return new Promise(function(r, o) {
                var e = "".concat("https://api.loginradius.com/identity/v2/auth/access_token/Validate", "?apikey=").concat(z());
                W().then(function() {
                    var n = B();
                    if (!n || localStorage.getItem("ExpiredLRTokenKey") === n) return r(null);
                    window.CBC.APP.SC.UTIL.makeGETRequest(e, {
                        success: function(e, t) {
                            console.debug("Getting user auth validation");
                            try {
                                var n = JSON.parse(e.responseText);
                                r(n)
                            } catch (e) {
                                console.error("Error parsing response: ", e), o(e)
                            }
                        },
                        failure: function(e, t) {
                            console.error("Error: login radius API call to get auth validation"), 403 === e.status && window.localStorage.setItem("ExpiredLRTokenKey", n), o(new Error("API call failed"))
                        }
                    }, void 0, void 0, {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: "Bearer " + n
                    }, void 0)
                })
            })
        }, 500), t = function(e, a, u, c) {
            return new(u = u || Promise)(function(n, t) {
                function r(e) {
                    try {
                        i(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        i(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof u ? t : new u(function(e) {
                        e(t)
                    })).then(r, o)
                }
                i((c = c.apply(e, a || [])).next())
            })
        }, d = function(r, o) {
            var i, a, u, c = {
                    label: 0,
                    sent: function() {
                        if (1 & u[0]) throw u[1];
                        return u[1]
                    },
                    trys: [],
                    ops: []
                },
                s = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }), s;

            function e(n) {
                return function(e) {
                    var t = [n, e];
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; c = s && t[s = 0] ? 0 : c;) try {
                        if (i = 1, a && (u = 2 & t[0] ? a.return : t[0] ? a.throw || ((u = a.return) && u.call(a), 0) : a.next) && !(u = u.call(a, t[1])).done) return u;
                        switch (a = 0, (t = u ? [2 & t[0], u.value] : t)[0]) {
                            case 0:
                            case 1:
                                u = t;
                                break;
                            case 4:
                                return c.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, a = t[1], t = [0];
                                continue;
                            case 7:
                                t = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!((u = 0 < (u = c.trys).length && u[u.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) c.label = t[1];
                                else if (6 === t[0] && c.label < u[1]) c.label = u[1], u = t;
                                else {
                                    if (!(u && c.label < u[2])) {
                                        u[2] && c.ops.pop(), c.trys.pop();
                                        continue
                                    }
                                    c.label = u[2], c.ops.push(t)
                                }
                        }
                        t = o.call(r, c)
                    } catch (e) {
                        t = [6, e], a = 0
                    } finally {
                        i = u = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
            }
        }, C = "coordinates", k.prototype.init = function() {
            this._pageChangeSub = this.update.bind(this), this.pubSub.subscribe("pageChange", this._pageChangeSub)
        }, k.prototype.update = function() {
            900 <= this.getSecondsDiff() ? (this.pubSub.publish("startGeoipSession"), this.updateSessionTime()) : this.logger.debug("Skipping Geoip update")
        }, Object.defineProperty(k.prototype, "city", {
            get: function() {
                return "function" == typeof window.geoip_city ? window.geoip_city() : ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(k.prototype, "region", {
            get: function() {
                return "function" == typeof window.geoip_region ? window.geoip_region() : ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(k.prototype, "countryCode", {
            get: function() {
                return "function" == typeof window.geoip_country_code ? window.geoip_country_code() : ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(k.prototype, "fsa", {
            get: function() {
                return "function" == typeof window.geoip_postal_code ? window.geoip_postal_code() : ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(k.prototype, "latitude", {
            get: function() {
                return "function" == typeof window.geoip_latitude ? window.geoip_latitude() : ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(k.prototype, "longitude", {
            get: function() {
                return "function" == typeof window.geoip_longitude ? window.geoip_longitude() : ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(k.prototype, "geoipData", {
            get: function() {
                var e = [];
                return this.city && e.push("city : " + this.city), this.region && e.push("region code : " + this.region), this.countryCode && e.push("country code : " + this.countryCode), this.fsa && e.push("fsa : " + this.fsa), e
            },
            enumerable: !1,
            configurable: !0
        }), k.prototype.loadGeoipScript = function() {
            var t = this;
            return new Promise(function(e) {
                window.CBC.APP.SC.UTIL.loadScript("//geoip.radio-canada.ca/geoip.js", function() {
                    e(t.geoipData)
                }, !0, !0)
            })
        }, k.prototype.updateSessionTime = function() {
            var e = {
                value: !0,
                timestamp: (new Date).getTime()
            };
            try {
                window.sessionStorage.setItem("geoip", JSON.stringify(e))
            } catch (e) {
                void 0 === window.sessionStorage ? this.logger.debug("This browser doesn't support sessionStorage. The error message is {0}", e) : this.logger.debug("Unable to store geoip in sessionStorage: {0}", e)
            }
        }, k.prototype.getSessionTime = function() {
            try {
                return JSON.parse(window.sessionStorage.getItem("geoip")).timestamp
            } catch (e) {
                return void 0 === window.sessionStorage ? this.logger.debug("This browser doesn't support sessionStorage. The error message is {0}", e) : this.logger.debug("No value for key 'geoip' in sessionStorage or 'timestamp' in geoip."), 0
            }
        }, k.prototype.getSecondsDiff = function() {
            var e = (new Date).getTime(),
                e = Math.floor((e - this.getSessionTime()) / 1e3);
            return this.logger.trace("Time difference: {0}", e), e
        }, k.prototype.fetchUserPostalCode = function() {
            return e = this, u = function() {
                var t, n, r, o, i, a, u, c, s, l, f, d;
                return a = this, u = function(e) {
                    switch (e.label) {
                        case 0:
                            if (t = void 0, o = "https://dev-services.radio-canada.ca/geoip", p.includes(window.location.hostname) && (o = "https://services.radio-canada.ca/geoip"), !(n = this.getCoordinates())) return [2, void 0];
                            if ((r = this.tryGetCoordinatesFromCache()) && r.latitude === n.latitude && r.longitude === n.longitude) {
                                if (this.postalCodeRegex.test(r.postalCode)) return [2, r.postalCode];
                                this.logger.warn("GeoIp: cached postal code is invalid", r.postalCode)
                            }
                            r = "".concat(o, "?lat=").concat(n.latitude, "&lon=").concat(n.longitude), e.label = 1;
                        case 1:
                            return e.trys.push([1, 4, , 5]), [4, fetch(r)];
                        case 2:
                            return (o = e.sent()).ok || this.logger.error("GeoIp: Http error while fetching Geoip data. Status: ".concat(o.status)), [4, o.json()];
                        case 3:
                            return "string" == typeof(i = e.sent()) && this.postalCodeRegex.test(i.trim()) ? (t = this.normalizePostalCode(i), this.updateCache(n.latitude, n.longitude, t)) : this.logger.error("GeoIp: Received data is not a valid postal code. Received data: ".concat(i)), [3, 5];
                        case 4:
                            return i = e.sent(), this.logger.error("GeoIp: Failed to fetch geoip data. Error: ".concat(i, ", Uri: ").concat(r)), [3, 5];
                        case 5:
                            return [2, t]
                    }
                }, f = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                }, d = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                }, "function" == typeof Symbol && (d[Symbol.iterator] = function() {
                    return this
                }), d;

                function e(n) {
                    return function(e) {
                        var t = [n, e];
                        if (c) throw new TypeError("Generator is already executing.");
                        for (; f = d && t[d = 0] ? 0 : f;) try {
                            if (c = 1, s && (l = 2 & t[0] ? s.return : t[0] ? s.throw || ((l = s.return) && l.call(s), 0) : s.next) && !(l = l.call(s, t[1])).done) return l;
                            switch (s = 0, (t = l ? [2 & t[0], l.value] : t)[0]) {
                                case 0:
                                case 1:
                                    l = t;
                                    break;
                                case 4:
                                    return f.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    f.label++, s = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = f.ops.pop(), f.trys.pop();
                                    continue;
                                default:
                                    if (!((l = 0 < (l = f.trys).length && l[l.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                                        f = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!l || t[1] > l[0] && t[1] < l[3])) f.label = t[1];
                                    else if (6 === t[0] && f.label < l[1]) f.label = l[1], l = t;
                                    else {
                                        if (!(l && f.label < l[2])) {
                                            l[2] && f.ops.pop(), f.trys.pop();
                                            continue
                                        }
                                        f.label = l[2], f.ops.push(t)
                                    }
                            }
                            t = u.call(a, f)
                        } catch (e) {
                            t = [6, e], s = 0
                        } finally {
                            c = l = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }
                }
            }, new(a = (a = void 0, Promise))(function(n, t) {
                function r(e) {
                    try {
                        i(u.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        i(u.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof a ? t : new a(function(e) {
                        e(t)
                    })).then(r, o)
                }
                i((u = u.apply(e, [])).next())
            });
            var e, a, u
        }, k.prototype.getCoordinates = function() {
            var e = this.latitude,
                t = this.longitude;
            if (e && t) return {
                latitude: e,
                longitude: t
            };
            this.logger.error("GeoIP: Latitude and / or longitude are not available")
        }, k.prototype.normalizePostalCode = function(e) {
            if (e) return e.replace(/\s+/g, "").toUpperCase()
        }, k.prototype.tryGetCoordinatesFromCache = function() {
            try {
                return JSON.parse(window.localStorage.getItem(C))
            } catch (e) {
                void 0 === window.localStorage ? this.logger.debug("This browser doesn't support localStorage. The error message is {0}", e) : this.logger.debug("No value for key 'coordinates' in localStorage in geoip.")
            }
        }, k.prototype.updateCache = function(e, t, n) {
            t = {
                latitude: e,
                longitude: t,
                postalCode: n
            };
            try {
                window.localStorage.setItem(C, JSON.stringify(t))
            } catch (e) {
                void 0 === window.localStorage ? this.logger.debug("This browser doesn't support localStorage. The error message is {0}", e) : this.logger.debug("Unable to store coordinates in localStorage: {0}", e)
            }
        }, P = k, J.TYPES = {
            INTEREST: "int",
            GENERIC_PROPERTY: "genp",
            CUSTOM_SEGMENT: "seg",
            ACTION: "act",
            MEDIA: "med",
            GENERIC_GEO: "geo",
            GENERIC_DEMO: "dem",
            SITEMAPS: "sm",
            ADVERTISER: "adv",
            CAMPAIGN_INTERACTION: "camp_int"
        }, g = J, N.prototype.listSubPaths = function(e, t) {
            void 0 === t && (t = " : ");
            var n = [],
                r = e.path.slice(0),
                o = (-1 !== e.fragment.indexOf("/") && 0 < (e = e.fragment.split("/").filter(Boolean)).length && (r = L(L(L([], r, !0), ["#"], !1), e, !0)), []);
            return r.forEach(function(e) {
                o.push(e), "#" !== e && n.push(o.join(t))
            }), n
        }, N.prototype.buildLoadedBehaviours = function(e, t, n) {
            var r = e.url,
                o = e.title,
                i = e.contentType,
                a = e.contentGenre,
                u = e.contentSeason,
                c = e.keywords,
                s = e.gsCategories,
                l = e.gsKeywords,
                f = e.userTier,
                e = e.sponsorName,
                d = this.buildSiteTrafficBehaviours(r),
                p = this.buildSiteSectionBehaviours(r, i),
                h = [],
                C = [],
                c = ("story" === i && (h = this.buildKeywordBehaviours(c), C = this.buildGrapeshotBehaviours(s, l)), this.buildTimestampBehaviours("Page View")),
                s = new A(A.getLocationUrl()),
                l = this.buildCampaignReferralBehaviours(s),
                s = [],
                i = (i && "index" === i && (s = this.buildLandingPageBehaviours(r)), this.buildUserTierBehaviours(r, f)),
                f = this.buildSponsorBehaviours(r, e),
                e = [];
            return t && n && (e = this.buildOttVideoMetadataBehaviours(r, o, a, u)), [].concat(d, p, h, C, c, l, s, i, f, e)
        }, N.prototype.buildUserTierBehaviours = function(e, t) {
            var n = [],
                e = e ? e.getProductHostName() : "",
                e = "".concat(e, " : loaded");
            return t && n.push(new g(g.TYPES.ACTION, "".concat(e, " : user tier : ").concat(t))), n
        }, N.prototype.buildSponsorBehaviours = function(e, t) {
            var n = [],
                e = e ? e.getProductHostName() : "",
                e = "".concat(e, " : loaded");
            return t && n.push(new g(g.TYPES.CAMPAIGN_INTERACTION, "".concat(e, " : sponsor : ").concat(t))), n
        }, N.prototype.buildSiteTrafficBehaviours = function(e) {
            e = e ? e.getProductHostName() : "";
            return [new g(g.TYPES.INTEREST, "".concat(e, " : Total Site Traffic"))]
        }, N.prototype.buildSiteSectionBehaviours = function(e, t) {
            var n = [],
                r = e ? e.getProductHostName() : "",
                o = "".concat(r, " : Site Section");
            if (0 === e.path.length) n.push(new g(g.TYPES.INTEREST, "".concat(o, " : homepage")));
            else
                for (var i = this.listSubPaths(e), a = 0; a < i.length; a++) {
                    var u = g.TYPES.INTEREST;
                    a === i.length - 1 && ("comeandsaygday" === i[0] ? u = g.TYPES.CAMPAIGN_INTERACTION : t && "index" !== t && (u = g.TYPES.MEDIA)), n.push(new g(u, "".concat(o, " : ").concat(i[a])))
                }
            return n
        }, N.prototype.buildLandingPageBehaviours = function(e) {
            var t = [],
                n = e ? e.getProductHostName() : "",
                n = "".concat(n, " : Landing Page");
            return 0 < e.path.length && (e = this.listSubPaths(e), t.push(new g(g.TYPES.MEDIA, "".concat(n, " : ").concat(e[e.length - 1])))), t
        }, N.prototype.toPascalCase = function(e) {
            return e.match(/[a-z]+/gi).map(function(e) {
                return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
            }).join(" ")
        }, N.prototype.buildSubjectKeywordBehaviours = function(e) {
            var i = ["Demographic Group", "Demographic groups", "Child and teen health", "Sexual and reproductive health", "Death and dying", "Diagnosis and treatment", "Diseases and conditions", "Eye health", "Heart health", "Men's health", "Women's health", "Mental health", "Oral health", "Injuries", "Seniors' health"],
                a = ["cancer"],
                u = {
                    "&#39;": "'",
                    "&#x27;": "'"
                },
                c = [],
                t = g.TYPES.INTEREST;
            if (!(e instanceof Array)) return [];
            for (var s = this, n = 0, r = e; n < r.length; n++) {
                var o = function(e) {
                    var t = "Keyword : " + s.toPascalCase(e.type);
                    if (!(e = e.path)) return {
                        value: []
                    };
                    if (e = e.replace(new RegExp(Object.keys(u).join("|"), "g"), function(e) {
                            return u[e]
                        })) {
                        var n = e.split("/").filter(Boolean);
                        if (i.some(function(e) {
                                return n.includes(e)
                            }) || a.some(function(t) {
                                return n.some(function(e) {
                                    return e.includes(t)
                                })
                            })) return "continue";
                        for (var r = 0, o = n; r < o.length; r++) t += " : " + o[r], -1 === c.indexOf(t) && c.push(t)
                    }
                }(r[n]);
                if ("object" == _typeof(o)) return o.value
            }
            return c.map(function(e) {
                return new g(t, e)
            })
        }, N.prototype.buildKeywordBehaviours = function(e) {
            var t, n = [],
                r = g.TYPES.INTEREST;
            if (e && (e.concepts instanceof Array && (t = this.buildSubjectKeywordBehaviours(e.concepts), n = n.concat(t)), e.tags instanceof Array)) {
                for (var o = [], i = 0, a = e.tags; i < a.length; i++) {
                    var u = a[i],
                        u = "Keyword : " + this.toPascalCase(u.type) + " : " + u.name;
                    o.push(new g(r, u))
                }
                n = n.concat(o)
            }
            return n
        }, N.prototype.buildGrapeshotBehaviours = function(e, t) {
            function n(t) {
                return function(e) {
                    e && r.push(new g(g.TYPES.ADVERTISER, "grapeshot : ".concat(t, " : ").concat(e.trim())))
                }
            }
            var r = [];
            return e.forEach(n("category")), t.forEach(n("keyword")), r
        }, N.prototype.buildShareBehaviours = function(e, t) {
            t = t || "";
            var n = e ? e.getProductHostName() : "",
                r = (t = t.toLowerCase().replace(/\b[a-z]/g, function(e) {
                    return e.toUpperCase()
                }), "".concat(n, " : Share Content")),
                o = "".concat(n, " : Share Content on ").concat(t),
                n = this.listSubPaths(e),
                i = (n.push(""), []);
            return n.forEach(function(e) {
                e = e && " : ".concat(e), i.push(new g(g.TYPES.ACTION, "".concat(r).concat(e)), new g(g.TYPES.ACTION, "".concat(o).concat(e)))
            }), i
        }, N.prototype.buildTimestampBehaviours = function(e) {
            var t = new Date,
                n = "Timestamp",
                r = {
                    0: "Sunday",
                    1: "Monday",
                    2: "Tuesday",
                    3: "Wednesday",
                    4: "Thursday",
                    5: "Friday",
                    6: "Saturday"
                }[t.getDay()],
                t = t.getHours(),
                t = (t < 10 ? "0" : "").concat(t, ":00");
            return [new g(g.TYPES.ACTION, "".concat(n, " : ").concat(t, " : ").concat(e)), new g(g.TYPES.ACTION, "".concat(n, " : ").concat(r, " : ").concat(e)), new g(g.TYPES.ACTION, "".concat(n, " : ").concat(t, " : ").concat(r, " : ").concat(e))]
        }, N.prototype.buildCampaignReferralBehaviours = function(e) {
            var t, n;
            return e.params && void 0 !== e.params.cmp && null !== e.params.cmp ? (n = decodeURI(e.params.cmp).replace(/\s+/g, " ").match(/[^_]+/g), e = "Referral : Campaign : ".concat(e.params.cmp), n && "newsletter" === n[0].trim() && (t = n[0].trim(), n = 1 < n.length ? n[1].trim() : "", e = "Referral : Campaign : ".concat(t, " : ").concat(n)), [new g(g.TYPES.INTEREST, "".concat(e))]) : []
        }, N.prototype.buildRegionChangeBehaviours = function(e) {
            return e ? [new g(g.TYPES.GENERIC_GEO, "Local Region : news : ".concat(e))] : []
        }, N.prototype.buildAdTargetingOptOutBehaviour = function(e) {
            return e ? [new g(g.TYPES.ACTION, "Global Ad Targeting Opt Out : ".concat(e))] : []
        }, N.prototype.buildStartWebSessionBehaviour = function() {
            return [new g(g.TYPES.ACTION, "Start Web Session")]
        }, N.prototype.buildGeoipBehaviours = function(e) {
            if (!e.length) return [];
            for (var t = [], n = 0, r = e; n < r.length; n++) {
                var o = r[n];
                t.push(new g(g.TYPES.ACTION, o))
            }
            return t
        }, N.prototype.buildReadBehaviours = function(e, t) {
            var n = [],
                r = e ? e.getProductHostName() : "";
            if ("comments" === t) n.push(new g(g.TYPES.ACTION, "".concat(r, " : Read comment")));
            else
                for (var o = "".concat(r, " : Read"), i = this.listSubPaths(e), a = 0; a < i.length; a++) {
                    var u = g.TYPES.INTEREST;
                    a === i.length - 1 && t && "index" !== t && (u = g.TYPES.MEDIA), n.push(new g(u, "".concat(o, " : ").concat(i[a])))
                }
            return n
        }, N.prototype.buildCtaClickedBehaviours = function(e, t) {
            e = e ? e.getProductHostName() : "";
            return t ? [new g(g.TYPES.ACTION, "".concat(e, " : CTA clicked : ").concat(t))] : []
        }, N.prototype.buildOttVideoMetadataBehaviours = function(e, t, n, r) {
            var o, i = [],
                e = e ? e.getProductHostName() : "",
                e = "".concat(e, " : loaded");
            return i.push(new g(g.TYPES.ACTION, e)), t && (o = "".concat(e, " : ").concat(t), i.push(new g(g.TYPES.INTEREST, o)), o = n ? " ".concat(n, " ") : " ", n = "".concat(e, " :").concat(o, ": ").concat(t), r ? (e = "".concat(n, " : season ").concat(r), i.push(new g(g.TYPES.MEDIA, e))) : i.push(new g(g.TYPES.MEDIA, "".concat(n)))), i
        }, M = N, O.prototype.buildKeywordBehaviours = function(e) {
            var t = [],
                n = g.TYPES.INTEREST;
            if (e && e.tag instanceof Array) {
                for (var r = [], o = 0, i = e.tag; o < i.length; o++) {
                    var a = "Keyword : Generic : " + i[o];
                    r.push(new g(n, a))
                }
                t = t.concat(r)
            }
            return t
        }, O.prototype.isValidString = function(e) {
            return "string" == typeof e && 0 < e.trim().length && "nan" !== e.toLowerCase() && "null" !== e.toLowerCase() && "undefined" !== e.toLowerCase()
        }, O.prototype.getSectionsList = function(e) {
            return e.replace(/^http[s]?:\/\//, "").split("/").slice(1)
        }, O.prototype.buildStreamedBehaviours = function(e, t) {
            var n, r, o = [],
                e = e ? e.getProductHostName() : "",
                e = "".concat(e, " : streamed");
            return t && (o.push(new g(g.TYPES.ACTION, e)), t.content && t.content.keywords && (n = this.buildKeywordBehaviours(t.content.keywords), o.push.apply(o, n)), t.content && t.content.media && (t.content.media.liveondemand && "live" === t.content.media.liveondemand || "linear" === t.content.media.liveondemand ? t.content.media.streamtitle && o.push(new g(g.TYPES.INTEREST, "".concat(e, " : ").concat(t.content.media.liveondemand, " : ").concat(t.content.media.streamtitle))) : this.isValidString(t.content.media.show) && (n = "".concat(e, " : ").concat(t.content.media.show), o.push(new g(g.TYPES.INTEREST, n)), n = this.isValidString(t.content.media.genre) ? " ".concat(t.content.media.genre, " ") : " ", n = "".concat(e, " :").concat(n, ": ").concat(t.content.media.show), this.isValidString(t.content.media.seasonnumber) ? (r = "".concat(n, " : season ").concat(t.content.media.seasonnumber), this.isValidString(t.content.media.episodenumber) ? r = "".concat(r, " : episode ").concat(t.content.media.episodenumber) : this.isValidString(t.content.media.streamtitle) && (r = "".concat(r, " : ").concat(t.content.media.streamtitle)), o.push(new g(g.TYPES.MEDIA, r))) : this.isValidString(t.content.media.episodenumber) ? o.push(new g(g.TYPES.MEDIA, "".concat(n, " : episode ").concat(t.content.media.episodenumber))) : this.isValidString(t.content.media.streamtitle) && o.push(new g(g.TYPES.MEDIA, "".concat(n, " : ").concat(t.content.media.streamtitle))))), t.feature) && this.isValidString(null == (r = t.feature) ? void 0 : r.name) && o.push(new g(g.TYPES.ACTION, "".concat(e, " : ").concat(t.feature.name))), o
        }, O.prototype.buildStreamedShortFormVideo = function(e) {
            var t;
            return e.content && e.content.media ? (t = [e.content.media.genre, e.content.media.region, e.content.media.show, e.content.title], e.content.url && !e.content.url.match(/\/player\/play\//) && (e = this.getSectionsList(e.content.url)) && (t.push("embedded_in"), t = t.concat(e)), e = function(e, t) {
                for (var n, r = 0, o = t.length; r < o; r++) !n && r in t || ((n = n || Array.prototype.slice.call(t, 0, r))[r] = t[r]);
                return e.concat(n || Array.prototype.slice.call(t))
            }(["cbc.ca", "streamed"], t.filter(function(e) {
                return e
            }), !0).join(" : "), [new g(g.TYPES.MEDIA, e)]) : []
        }, O.prototype.buildSubscribedBehaviours = function(e) {
            var t = [],
                e = e ? e.getProductHostName() : "",
                e = "".concat(e, " : subscribed");
            return t.push(new g(g.TYPES.ACTION, e)), t
        }, O.prototype.buildUnsubscribedBehaviours = function(e) {
            var t = [],
                e = e ? e.getProductHostName() : "",
                e = "".concat(e, " : unsubscribed");
            return t.push(new g(g.TYPES.ACTION, e)), t
        }, x = O, b = [(e = {
            FATAL: "fatal",
            ERROR: "error",
            WARN: "warn",
            INFO: "info",
            DEBUG: "debug",
            TRACE: "trace"
        }).FATAL, e.ERROR, e.WARN, e.INFO, e.DEBUG, e.TRACE], S = {
            LEVEL: v = {
                OFF: "OFF",
                FATAL: "fatal",
                ERROR: "error",
                WARN: "warn",
                INFO: "info",
                DEBUG: "debug",
                TRACE: "trace",
                ALL: "ALL"
            },
            CHANNEL: e,
            create: function(e) {
                var n = (e = e || v.OFF) === v.OFF ? 0 : e === v.ALL ? b.length : b.indexOf(e) + 1,
                    r = {};

                function o(e) {
                    return e && e.toString === Object.prototype.toString ? JSON.stringify(e) : Array.isArray(e) ? "[".concat(e.map(o).join(","), "]") : "" + e
                }
                return b.forEach(function(e, t) {
                    r[e] = t < n ? function(e, t) {
                        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                        e = e || "", t = 0 < n.length ? t.replace(/{(\d+)}/g, function(e, t) {
                            return t in n ? o(n[parseInt(t, 10)]) : e
                        }) : o(t), console.log("DMP: ".concat(e.toUpperCase(), ": ").concat(t))
                    }.bind(null, e) : function() {}
                }), r
            }
        }, I.prototype.init = function() {
            return $(this, void 0, void 0, function() {
                return K(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return this.pubSub.subscribe("SIGNED IN", this._onSignIn), this.pubSub.subscribe("SIGNED OUT", this._onSignOut), [4, this.viafoura.viafouraLoaded];
                        case 1:
                            return e.sent(), this._onViafouraAvailable(), [2]
                    }
                })
            })
        }, Object.defineProperty(I.prototype, "accessTokenForUser", {
            get: B,
            enumerable: !1,
            configurable: !0
        }), I.prototype.getGender = function(e) {
            if (e.Identities)
                for (var t = 0, n = e.Identities; t < n.length; t++) {
                    var r = n[t];
                    if (r.Gender) return r.Gender
                }
            return e.CustomFields && e.CustomFields.GenderDescription ? e.CustomFields.GenderDescription : e.Gender || ""
        }, I.prototype.getAge = function(e) {
            if (e.Identities)
                for (var t = 0, n = e.Identities; t < n.length; t++) {
                    var r = n[t];
                    if (r.Age) return r.Age
                }
            return e.Age || ""
        }, I.prototype.getPostalCode = function(e) {
            var t = e.Addresses && e.Addresses[0] && e.Addresses[0].PostalCode;
            if (e.Identities)
                for (var n = 0, r = e.Identities; n < r.length; n++) {
                    var o = r[n];
                    if (o.Addresses && o.Addresses[0] && o.Addresses[0].PostalCode) return o.Addresses[0].PostalCode.substring(0, 3)
                }
            return t ? e.Addresses[0].PostalCode.substring(0, 3) : ""
        }, I.prototype._onViafouraAvailable = function() {
            var r = this;
            return Promise.all([this.viafoura.userId(), this.viafoura.userPrivilege(), this.viafoura.activityRange()]).then(function(e) {
                var t = e[0],
                    n = e[1],
                    e = e[2];
                r._sendLotameBehaviours(t, n, e)
            }).catch(function(e) {
                console.log("Error Message: ", e)
            })
        }, I.prototype._sendLotameBehaviours = function(e, t, n) {
            e = e ? [new g(g.TYPES.CUSTOM_SEGMENT, "Authenticated User"), new g(g.TYPES.CUSTOM_SEGMENT, "User privilege: " + t), new g(g.TYPES.CUSTOM_SEGMENT, "User activity range: " + n)] : [new g(g.TYPES.CUSTOM_SEGMENT, "Unauthenticated User")];
            this.lotame.sendBehaviours(e)
        }, V = I, D.prototype.init = function() {
            this._storySharedSub = this._onStoryShared.bind(this), this.pubSub.subscribe("SHARED", this._storySharedSub), this._regionChangeSub = this._onRegionChange.bind(this), this.pubSub.subscribe("regionChange", this._regionChangeSub), this._adTargetingOptOutSub = this._onAdTargetingOptOut.bind(this), this.pubSub.subscribe("adTargetingOptOut", this._adTargetingOptOutSub), this._startWebSessionSub = this._onStartWebSession.bind(this), this.pubSub.subscribe("START WEB SESSION", this._startWebSessionSub), this._startGeoipSessionSub = this._onStartGeoipSession.bind(this), this.pubSub.subscribe("startGeoipSession", this._startGeoipSessionSub), this._videoStreamedSub = this._onVideoStreamed.bind(this), this.pubSub.subscribe("STREAMED", this._videoStreamedSub), this._subscribedEventSub = this._onSubscribedEvent.bind(this), this.pubSub.subscribe("SUBSCRIBED", this._subscribedEventSub), this._unsubscribedEventSub = this._onUnsubscribedEvent.bind(this), this.pubSub.subscribe("UNSUBSCRIBED", this._unsubscribedEventSub), this._loadedEventSub = this._onLoadedEvent.bind(this), this.pubSub.subscribe("LOADED", this._loadedEventSub), this._readEventSub = this._onReadEvent.bind(this), this.pubSub.subscribe("READ", this._readEventSub), this._ctaClickedEventSub = this._onCtaClicked.bind(this), this.pubSub.subscribe("ctaClicked", this._ctaClickedEventSub)
        }, D.prototype._onLoadedEvent = function(e, t) {
            this.logger.debug("LOADED subscriber");
            var n, r, o = s.url;
            o && (n = "ott-web-app" === (null == (n = null == (n = null == (n = null == (n = null == (n = window.CBC) ? void 0 : n.APP) ? void 0 : n.SC) ? void 0 : n.DTM) ? void 0 : n.DATA) ? void 0 : n.appname), r = "show" === (null == (r = null == (r = null == (r = null == (r = null == (r = window.CBC) ? void 0 : r.APP) ? void 0 : r.SC) ? void 0 : r.DTM) ? void 0 : r.DATA) ? void 0 : r.subsection1), o = {
                url: new A(o),
                title: s.title,
                contentType: s.contentType,
                contentGenre: s.contentGenre,
                contentSeason: s.contentSeason,
                keywords: s.keywords,
                gsCategories: s.grapeshotCategories,
                gsKeywords: s.grapeshotKeywords,
                userTier: s.userTier,
                sponsorName: s.sponsorName
            }, o = this.behaviourBuilder.buildLoadedBehaviours(o, n, r), this.lotame.sendBehaviours(o, s.spa))
        }, D.prototype._onStoryShared = function(e, t) {
            this.logger.debug("Story shared - {0}", t);
            var n = new A(s.url),
                n = this.behaviourBuilder.buildShareBehaviours(n, t.network);
            this.lotame.sendBehaviours(n)
        }, D.prototype._onRegionChange = function(e, t) {
            t = this.behaviourBuilder.buildRegionChangeBehaviours(t.title);
            this.lotame.sendBehaviours(t)
        }, D.prototype._onAdTargetingOptOut = function(e, t) {
            t = this.behaviourBuilder.buildAdTargetingOptOutBehaviour(t);
            this.lotame.sendBehaviours(t)
        }, D.prototype._onStartWebSession = function(e, t) {
            var n = this.behaviourBuilder.buildStartWebSessionBehaviour();
            this.lotame.sendBehaviours(n)
        }, D.prototype._onStartGeoipSession = function(e, t) {
            var n = this;
            this.geoip.loadGeoipScript().then(function(e) {
                e = n.behaviourBuilder.buildGeoipBehaviours(e);
                n.lotame.sendBehaviours(e)
            }).catch(function() {
                n.logger.error("Error: The script //geoip.radio-canada.ca/geoip.js failed to load")
            })
        }, D.prototype._onReadEvent = function(e, t) {
            var n = (null == (n = null == (n = null == (n = null == (n = null == (n = null == (n = null == (n = window.CBC) ? void 0 : n.APP) ? void 0 : n.SC) ? void 0 : n.DTM) ? void 0 : n.formatted) ? void 0 : n.googlecloud) ? void 0 : n.content) ? void 0 : n.type) || s.contentType,
                r = new A(s.url),
                r = this.behaviourBuilder.buildReadBehaviours(r, n);
            this.lotame.sendBehaviours(r)
        }, D.prototype._onVideoStreamed = function(e, t) {
            var n = new A(s.url),
                r = n.hostname,
                n = this.behaviourBuilderOtt.buildStreamedBehaviours(n, t);
            "gem.cbc.ca" == r || /watch.(\S)*cbc.ca/.test(r) || (n = n.concat(this.behaviourBuilderOtt.buildStreamedShortFormVideo(t))), this.lotame.sendBehaviours(n)
        }, D.prototype._onSubscribedEvent = function(e, t) {
            var n = new A(s.url),
                n = this.behaviourBuilderOtt.buildSubscribedBehaviours(n);
            this.lotame.sendBehaviours(n)
        }, D.prototype._onUnsubscribedEvent = function(e, t) {
            var n = new A(s.url),
                n = this.behaviourBuilderOtt.buildUnsubscribedBehaviours(n);
            this.lotame.sendBehaviours(n)
        }, D.prototype._onCtaClicked = function(e, t) {
            this.logger.debug("Send App CTA click sub - {0}", t);
            var n = new A(s.url),
                n = this.behaviourBuilder.buildCtaClickedBehaviours(n, t);
            this.lotame.sendBehaviours(n)
        }, U = D, m = "vfidtolotame", y = "//bcp.crwdcntrl.net/map/c=10743/tp=VIAF/tpid=", j = S.create(S.LEVEL.ALL), R.prototype.init = function() {
            var e = this;
            this.viafoura.viafouraLoaded.then(function() {
                e.addVfEvents()
            })
        }, R.prototype.run = function() {
            var t = this;
            return this.logger.debug("Running Viafoura/Lotame sync pixel code."), this.viafoura.isLoggedIn().then(function(e) {
                t.carryPixelOperations(e)
            })
        }, R.prototype.carryPixelOperations = function(e) {
            return n = this.getPixel(m), e ? n ? this.updatePixel() : this.addPixel() : n ? this.deletePixel() : void 0
        }, R.prototype.addVfEvents = function() {
            return e = this, u = function() {
                var t, n, r, o, i, a, u, c, s, l = this;
                return r = this, o = function(e) {
                    switch (e.label) {
                        case 0:
                            return this.logger.debug("Add Viafoura events"), [4, this.viafoura.viafouraLoaded];
                        case 1:
                            e.sent(), t = this.viafoura.version();
                            try {
                                1 < t ? this.viafoura.api().then(function(e) {
                                    e.$subscribe("login", "success-syncpixel", function() {
                                        l.run()
                                    })
                                }) : this.viafoura.api().then(function(e) {
                                    e.subscribe("onLoginSuccess", function() {
                                        l.run()
                                    })
                                })
                            } catch (e) {
                                n = 1 < this.viafoura.version() ? "Login.Success" : "onLoginSuccess", this.logger.error("Can't subscribe to ".concat(n, " event."))
                            }
                            try {
                                1 < t ? this.viafoura.api().then(function(e) {
                                    e.$subscribe("logout", "success-syncpixel", function() {
                                        l.run()
                                    })
                                }) : this.viafoura.api().then(function(e) {
                                    e.subscribe("onLogoutSuccess", function() {
                                        l.run()
                                    })
                                })
                            } catch (e) {
                                n = 1 < this.viafoura.version() ? "Logout.Success" : "onLogoutSuccess", this.logger.error("Can't subscribe to ".concat(n, " event."))
                            }
                            return [2]
                    }
                }, c = {
                    label: 0,
                    sent: function() {
                        if (1 & u[0]) throw u[1];
                        return u[1]
                    },
                    trys: [],
                    ops: []
                }, s = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function e(n) {
                    return function(e) {
                        var t = [n, e];
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c = s && t[s = 0] ? 0 : c;) try {
                            if (i = 1, a && (u = 2 & t[0] ? a.return : t[0] ? a.throw || ((u = a.return) && u.call(a), 0) : a.next) && !(u = u.call(a, t[1])).done) return u;
                            switch (a = 0, (t = u ? [2 & t[0], u.value] : t)[0]) {
                                case 0:
                                case 1:
                                    u = t;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, a = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!((u = 0 < (u = c.trys).length && u[u.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) c.label = t[1];
                                    else if (6 === t[0] && c.label < u[1]) c.label = u[1], u = t;
                                    else {
                                        if (!(u && c.label < u[2])) {
                                            u[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                        }
                                        c.label = u[2], c.ops.push(t)
                                    }
                            }
                            t = o.call(r, c)
                        } catch (e) {
                            t = [6, e], a = 0
                        } finally {
                            i = u = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }
                }
            }, new(a = (a = void 0, Promise))(function(n, t) {
                function r(e) {
                    try {
                        i(u.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        i(u.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof a ? t : new a(function(e) {
                        e(t)
                    })).then(r, o)
                }
                i((u = u.apply(e, [])).next())
            });
            var e, a, u
        }, R.prototype.getPixel = function(e) {
            return document.getElementById(e)
        }, R.prototype.addPixel = function() {
            var t = this;
            return this.logger.debug("Add Viafoura/Lotame sync pixel code."), this.viafoura.userId().then(function(e) {
                e && t._addPixelToDocument(e)
            })
        }, R.prototype._addPixelToDocument = function(e) {
            var t = document.createElement("img");
            t.setAttribute("src", y + e), t.setAttribute("id", m), document.body.appendChild(t)
        }, R.prototype.updatePixel = function() {
            var t = this;
            return this.logger.debug("Update Viafoura/Lotame sync pixel code."), this.viafoura.userId().then(function(e) {
                e && t.getPixel(m).setAttribute("src", y + e)
            })
        }, R.prototype.deletePixel = function() {
            this.logger.debug("Delete Viafoura/Lotame sync pixel code."), this.getPixel(m).remove()
        }, F = R, q.prototype.init = function() {
            /cbckids\.(ca|com)|cbc\.(ca|com)(:\d{4})?\/kids($|\/|cbc2|news|fantasyhockey)|subscriptions\.cbc\.ca\/widget\/KID/i.test(s.url) || window.CBC.APP.SC.UTIL.isIOSWebviewPrivate() ? this.logger.debug("Not initializing DMP on CBC Kids or Kids News") : this._modules.forEach(function(e) {
                return e.init()
            })
        }, e = q, [window.Element.prototype, window.CharacterData.prototype, window.DocumentType.prototype].forEach(function(e) {
            e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    this.parentNode.removeChild(this)
                }
            })
        }), window.CBC = window.CBC || {}, (r = window.CBC).APP = r.APP || {}, r.APP.DMP = r.APP.DMP || {}, r.APP.SC = r.APP.SC || {}, r.APP.SC.UTIL = r.APP.SC.UTIL || {}, (h = new e({
            logger: r.APP.DMP.LOGGER || console,
            lotame: r.APP.DMP.LOTAME,
            pubSub: r.APP.PubSub,
            util: r.APP.SC.UTIL
        })).logger.debug("DMP initialize starting"), h.init(), r.APP.DMP.pageChange = function() {
            h.logger.debug("Forced DMP pageChange"), s.spa && r.APP.PubSub.publish("pageChange")
        }, window.CBCCMPQueue = window.CBCCMPQueue || [], window.CBCCMPQueue.push(["blueconic-t6azUNpB", function() {
            var e, t, n = window.location.hostname,
                r = (/^.+\.cbc\.ca$/.test(n) || window.CBC.APP.SC.UTIL.console("The top level domain should be cbc.ca or gem.cbc.ca"), new URLSearchParams(window.location.search));
            return a.test(window.location.href) || r.get("ios_a_p") || 1 < (r = "; ".concat(window.document.cookie).split("; ".concat("ios_a_p", "="))).length && r.pop().split(";").shift() ? (console.debug("Not initializing BlueConic and Lotame on CBC Kids, GEM Kids or Kids News"), Promise.resolve()) : (r = o.BLUECONIC, e = i.GLOBAL_DISABLE_USER_TRACKING, ((t = null == (t = null == (t = null == (t = null == (t = null == (t = window.CBC) ? void 0 : t.APP) ? void 0 : t.SC) ? void 0 : t.dmpAudienceslist) ? void 0 : t.featureToggle) ? void 0 : t[r]) ? void 0 === (t = t[e]) ? (console.error("Property ".concat(e, " is not defined for ").concat(r, " feature toggle.")), 0) : t : (console.error("".concat(r, " feature toggle is not defined.")), 0)) ? (console.debug("Blueconic initialization is disabled by the feature toggle."), Promise.resolve()) : H(n).then(function() {
                window.CBC.APP.SC.UTIL.console("loadBlueConicTag: Success!")
            }).catch(function(e) {
                window.CBC.APP.SC.UTIL.console(e)
            }))
        }, function() {
            console.debug("Consent Not Provided for BlueConic")
        }])
    }(), CBC.APP.SC.Subscribers.pageview = CBC.APP.SC.Subscribers.pageview || [], CBC.APP.SC.PageTracker = function() {
        var c = {},
            s = {},
            l = window.CBC.APP.SC.UTIL,
            f = !1,
            d = !1;
        return {
            init: function() {
                try {
                    CBC.APP.PubSub.turnOn()
                } catch (e) {
                    console.log("There has been an error: " + e)
                }
                var e = document.location.href;
                if (-1 < e.indexOf("polopoly") || -1 < e.indexOf("/meta/preview") || -1 < e.indexOf("/preview/www") || -1 < e.indexOf("/preview/web")) return l.console("Preview page. Page Tracking Disabled."), !1;
                if (-1 !== window.Detectizr.ua.indexOf("googlebot")) return !1;
                l.inDebugMode(), d ? (CBC.APP.ANA.FORMATTERS.Adobe.clearVariables(), window.CBC.APP.SC.Subscribers.pageview.push({
                    cb: function() {
                        window.dispatchEvent(new window.CustomEvent("ConductricsStateChange", {
                            detail: window.s_cbc_sitecatalyst.pageName
                        }))
                    }
                })) : document.addEventListener("click", CBC.APP.ANA.LinkTracker.checkClickEvent);
                var t, n, e = CBC.APP.versions["cbc-stats-top"],
                    r = CBC.APP.versions["cbc-stats-bottom"],
                    e = (void 0 !== e && void 0 !== r && this.checkStatsVersions(e, r), void 0 === CBC.APP.SC.DTM && (CBC.APP.SC.DTM = {}), void 0 === CBC.APP.SC.DTM.DATA && (CBC.APP.SC.DTM.DATA = {}), 0 < Object.keys(CBC.APP.SC.DTM.DATA).length ? c.prop75 = "new" : (l.console("Data Layer - Data layer not found. Defaulting to URL."), CBC.APP.SC.DTM.DATA = this.urlToObj(document.location.hostname, document.location.pathname), c.prop75 = "dne"), CBC.APP.SC.DTM.DATA.authenticated = this.isLoggedIn(), l.initReferringDepartmentStatus(), l.setFormattedLayer(), CBC.APP.readJS.checkLoad(), !f && window.vf && window.vf.$once && (window.vf.$once("comments", "read", function(e) {
                        window.vf.context.get("page").then(function(e) {
                            e.num_replies && CBC.APP.SC.EventTracker.trackEvent("READ", {
                                content: {
                                    type: "comments"
                                }
                            })
                        }), f = !1
                    }), f = !0), {}),
                    r = "LOADED",
                    o = this.readLinkTrackerCookie(),
                    i = {},
                    i = ((o.prop22 || o.prop23 || o.prop24 || o.dataFeatureValue) && (e.feature = {}, i.feature = {}, o.prop22 && (e.feature.name = o.prop22, i.feature.name = o.prop22), o.prop23 && (e.feature.instance = o.prop23, i.feature.instance = o.prop23), o.prop24 && (e.feature.position = o.prop24, i.feature.position = o.prop24), o.dataFeatureValue) && (e.feature.value = o.dataFeatureValue, i.feature.value = o.dataFeatureValue), Object.assign(o, c), e.linkTrackObj = JSON.parse(JSON.stringify(o)), window.conductricsDataLayer = window.conductricsDataLayer || [], CBC.APP.SC.DTM && (i.feature ? (o = Object.assign({}, CBC.APP.SC.DTM, i), window.conductricsDataLayer.push(o)) : window.conductricsDataLayer.push(CBC.APP.SC.DTM)), CBC.APP.SC.DTM.formatted.raw),
                    a = ("LOADED" === (r = i.referrer && i.referrer.url === i.url ? "LOADED MORE" : r) && (e.custom = {}, e.custom.DNT = CBC.APP.SC.UTIL.getDoNotTrackValue(), e.custom.cookiesenabled = window.navigator.cookieEnabled), d || (d = !0, o = l.getCBCVisitorOrPlusCookieValue({
                        isCbcPlus: !0
                    }), i = l.getCBCVisitorOrPlusCookieValue({
                        isCbcPlus: !1
                    }), t = function(e) {
                        e && CBC.APP.PubSub.publish("UIEAlert")
                    }, n = !0, (o || i) && (n = !1, CBC.APP.PubSub.publish("USER_ID_AVAILABLE")), window.viafoura && window.viafoura.users && window.viafoura.users.current && window.viafoura.users.current().id ? l.setCBCPlusIDPromise().catch(function(e) {
                        CBC.APP.SC.UTIL.console(e)
                    }).finally(function() {
                        l.getCBCVisitorOrPlusCookieValue({
                            isCbcPlus: !0
                        }) && t(n)
                    }) : l.setCBCVisitorIDPromise().catch(function(e) {
                        CBC.APP.SC.UTIL.console(e)
                    }).finally(function() {
                        l.getCBCVisitorOrPlusCookieValue({
                            isCbcPlus: !1
                        }) && t(n)
                    })), CBC.APP.PubSub.publish("pageChange"), CBC.APP.SC.EventTracker.trackEvent(r, e), 0),
                    u = window.setInterval(function() {
                        var e = window.s_cbc_sitecatalyst;
                        if (e.pageName && e.events || 39 < a) {
                            for (var t = CBC.APP.SC.Subscribers.pageview, n = t.length, r = 0, r = 0; r < n; ++r) "function" == typeof t[n - r - 1].cb ? t.pop().cb() : t.pop();
                            window.clearInterval(u)
                        } else ++a
                    }, 10);
                return !0
            },
            urlToObj: function(e, t) {
                var n, r = t.split("/"),
                    o = {},
                    i = 0;
                e.match("cbcmusic") ? o.contentarea = "music" : o.contentarea = "misc";
                for (var i = 1, a = 0; a < r.length; ++a) "" !== r[a] && (n = "subsection".concat(i), ++i, o[n] = l.sanitize(r[a]));
                return o.contenttype = "index", o.url = "https://".concat(e).concat(t), o
            },
            setInitialized: function(e) {
                d = !!e
            },
            readLinkTrackerCookie: function() {
                var t = "SC_LINKS",
                    n = "DATA_FEATURE_LINKS",
                    e = {};
                try {
                    var r, o, i, a, u = l.getCookie(n);
                    u ? (r = JSON.parse(u), o = CBC.APP.SC.UTIL.getMetadataAllowlist().metadata.allowlist.feature, i = {}, Object.keys(o).forEach(function(e) {
                        for (var t in i[e] = {}, o[e]) i[e][window.CBC.APP.SC.UTIL.cleanString(t)] = o[e][t]
                    }), e.prop21 = r.pageName, e.prop22 = i.name[r.dataFeatureName] ? r.dataFeatureName : void 0, e.prop23 = i.instance[r.dataFeatureInstance] ? r.dataFeatureInstance : void 0, e.prop24 = new RegExp(i.position.pattern).test(r.dataFeaturePosition) ? r.dataFeaturePosition : void 0, e.dataFeatureValue = i.value[r.dataFeatureValue] ? r.dataFeatureValue : void 0) : (u = l.getCookie(t), CBC.APP.SC.masterSwitch.switches.legacysclt && u && (a = JSON.parse(u), e.prop21 = a.pageName, e.prop22 = a.linkName, e.prop24 = a.linkPosition))
                } catch (e) {
                    return l.setCookie(n, "", 0, ".cbc.ca"), l.setCookie(t, "", 0, ".cbc.ca"), {}
                }
                return l.setCookie(n, "", 0, ".cbc.ca"), l.setCookie(t, "", 0, ".cbc.ca"), s = JSON.parse(JSON.stringify(e)), e
            },
            getLinkTrackObj: function() {
                return s
            },
            isLoggedIn: function() {
                try {
                    return "guest" !== window.viafoura.users.current().user_privilege
                } catch (e) {
                    return !1
                }
            },
            isCommentor: function() {
                try {
                    return 0 < window.viafoura.users.current().comments_made
                } catch (e) {
                    return !1
                }
            },
            checkStatsVersions: function(e, t) {
                return c.prop70 = "".concat(e === t, ":").concat(e, ":").concat(t), e !== t && CBC.APP.ANA.ER.report("Stats Version Mismatched: stats-top ".concat(e, ", stats-bottom ").concat(t), {}), c.prop70
            }
        }
    }(), CBC.APP.SC.preventDefault || CBC.APP.SC.DTM.DATA.preventDefault ? CBC.APP.SC.UTIL.console("Warning: Not firing page tracking on page load") : CBC.APP.SC.PageTracker.init(),
    function() {
        var e;
        document.getElementById("cbc-as-search-root") && ((e = document.createElement("link")).rel = "stylesheet", e.id = "cbc-as-search-css", e.href = "/search-assets/static/css/cbc-as-search.css", document.head.appendChild(e), (e = document.createElement("script")).type = "text/javascript", e.id = "cbc-as-search-js", e.src = "/search-assets/static/js/cbc-as-search.js", document.body.appendChild(e))
    }(),
    function(r) {
        function e(e, t) {
            var n = window.document.createElement("iframe");
            n.setAttribute("src", "/g/stats/html/cmf.html?a=" + e + "&m=" + t + "&s=cbc&p=" + encodeURIComponent(r.location.href)), n.setAttribute("id", "cmf-iframe"), n.setAttribute("width", "0"), n.setAttribute("height", "0"), n.setAttribute("frameBorder", "0"), document.body.appendChild(n)
        }
        document.getElementById("cmf-iframe") && document.getElementById("cmf-iframe").remove();
        var t, n = {
            "cbc.ca\\/xcompany\\/debriefing": "1415.11316.140589",
            "cbc.ca\\/bellevue\\/videos\\/1994-videos": "1617.11311.146736",
            "cbc.ca\\/kidscbc1\\/shows\\/chirp": "1213.11116.133491",
            "cbc.ca\\/covermecanada": "1112.11416.132002",
            "cbc.ca\\/player\\/tv\\/Halifax%20Comedy%20Festival\\/Season%2019": "1415.11453.141153",
            "cbc.ca\\/kidscbcolympics": "1617.11116.144982",
            "cbc.ca\\/murdochmysteries\\/onthecase": "1516.11316.142584",
            "cbc.ca\\/murdochmysteries\\/noqs": "1213.11316.132929",
            "cbc.ca\\/murdochmysteries\\/videos\\/making-murdoch\\/\\S+": "1314.11313.138117",
            "cbc.ca\\/murdochmysteries\\/theinfernaldevice": "1415.11353.141147",
            "cbc.ca\\/overtherainbow": "1213.11416.133409",
            "cbc.ca\\/republicofdoyle\\/episodes\\/season-5\\/\\S+": "1314.11313.138147",
            "cbc.ca\\/thebestlaidplans\\/videos\\/the-petes-laid-plans\\/\\S+": "1314.11313.138145",
            "cbc.ca\\/22minutes\\/videos\\/22-minutes-update\\/\\S+": "1516.11353.142570",
            "cbc.ca\\/thislife\\/videos\\/exclusives\\/\\S+": "1516.11313.142585",
            "cbc.ca\\/workinmoms\\/videos\\/season-1\\/\\S+": "1617.11353.145375",
            "cbc.ca\\/xcompany\\/videos\\/x-company-animated\\/\\S+": "1516.11313.142581",
            "cbc.ca\\/shootthemessenger\\/murderboard": "1516.11315.142932",
            "cbc.ca\\/arcticair\\/videos\\/man-of-the-north": "1112.11316.131909",
            "cbc.ca\\/michael\\/videos\\/lost-therapy-tapes": "1112.11316.131239",
            "cbc.ca\\/michael\\/videos\\/after-the-beep": "1112.11316.131239",
            "comedycoup.cbc.ca\\/cc\\/canada-2014": "1415.11316.139499",
            "cbc.ca\\/mrd\\/videos\\/xavier-gazette": "1112.11316.131856",
            "cbc.ca\\/insecurity": "1011.11316.128616"
        };
        Object.keys(n).some(function(e) {
            return !!new RegExp(e).test(r.location.href) && (t = n[e], !0)
        }) ? e(t, r.document.title) : r.CBC.APP.SC.DTM.DATA && r.CBC.APP.SC.DTM.DATA.cmfAppId && e(r.CBC.APP.SC.DTM.DATA.cmfAppId, r.CBC.APP.SC.DTM.DATA.title)
    }(window._window || window);