! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0264d9ea-46c2-44b7-98af-9afc94cdeb9b", e._sentryDebugIdIdentifier = "sentry-dbid-0264d9ea-46c2-44b7-98af-9afc94cdeb9b")
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
    [5972], {
        2943: () => {},
        88819: () => {},
        43521: () => {},
        49211: () => {},
        71764: () => {},
        67084: () => {},
        27080: (e, t, s) => {
            s.d(t, {
                s5: () => d,
                xW: () => f,
                Rv: () => c,
                N1: () => r,
                Gk: () => a,
                W_: () => l
            });
            var i = s(13433),
                n = s(7185);

            function r(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: r,
                    emit: a
                } = e;
                const l = (0, i.g)(),
                    o = (0, i.a)();

                function d(e) {
                    if (!t.enabled) return;
                    const {
                        rtlTranslate: s
                    } = t;
                    let i = e;
                    i.originalEvent && (i = i.originalEvent);
                    const r = i.keyCode || i.charCode,
                        d = t.params.keyboard.pageUpDown,
                        c = d && 33 === r,
                        p = d && 34 === r,
                        u = 37 === r,
                        f = 39 === r,
                        m = 38 === r,
                        h = 40 === r;
                    if (!t.allowSlideNext && (t.isHorizontal() && f || t.isVertical() && h || p)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
                    if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey) && (!l.activeElement || !l.activeElement.nodeName || "input" !== l.activeElement.nodeName.toLowerCase() && "textarea" !== l.activeElement.nodeName.toLowerCase())) {
                        if (t.params.keyboard.onlyInViewport && (c || p || u || f || m || h)) {
                            let e = !1;
                            if ((0, n.a)(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === (0, n.a)(t.el, `.${t.params.slideActiveClass}`).length) return;
                            const i = t.el,
                                r = i.clientWidth,
                                a = i.clientHeight,
                                l = o.innerWidth,
                                d = o.innerHeight,
                                c = (0, n.b)(i);
                            s && (c.left -= i.scrollLeft);
                            const p = [
                                [c.left, c.top],
                                [c.left + r, c.top],
                                [c.left, c.top + a],
                                [c.left + r, c.top + a]
                            ];
                            for (let t = 0; t < p.length; t += 1) {
                                const s = p[t];
                                if (s[0] >= 0 && s[0] <= l && s[1] >= 0 && s[1] <= d) {
                                    if (0 === s[0] && 0 === s[1]) continue;
                                    e = !0
                                }
                            }
                            if (!e) return
                        }
                        t.isHorizontal() ? ((c || p || u || f) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((p || f) && !s || (c || u) && s) && t.slideNext(), ((c || u) && !s || (p || f) && s) && t.slidePrev()) : ((c || p || m || h) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (p || h) && t.slideNext(), (c || m) && t.slidePrev()), a("keyPress", r)
                    }
                }

                function c() {
                    t.keyboard.enabled || (l.addEventListener("keydown", d), t.keyboard.enabled = !0)
                }

                function p() {
                    t.keyboard.enabled && (l.removeEventListener("keydown", d), t.keyboard.enabled = !1)
                }
                t.keyboard = {
                    enabled: !1
                }, s({
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                }), r("init", (() => {
                    t.params.keyboard.enabled && c()
                })), r("destroy", (() => {
                    t.keyboard.enabled && p()
                })), Object.assign(t.keyboard, {
                    enable: c,
                    disable: p
                })
            }

            function a(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: r,
                    emit: a
                } = e;
                const l = (0, i.a)();
                let o;
                s({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null,
                        noMousewheelClass: "swiper-no-mousewheel"
                    }
                }), t.mousewheel = {
                    enabled: !1
                };
                let d, c = (0, n.d)();
                const p = [];

                function u() {
                    t.enabled && (t.mouseEntered = !0)
                }

                function f() {
                    t.enabled && (t.mouseEntered = !1)
                }

                function m(e) {
                    return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && (0, n.d)() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && (0, n.d)() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), a("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), a("scroll", e.raw)), c = (new l.Date).getTime(), !1)))
                }

                function h(e) {
                    let s = e,
                        i = !0;
                    if (!t.enabled) return;
                    if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
                    const r = t.params.mousewheel;
                    t.params.cssMode && s.preventDefault();
                    let l = t.el;
                    "container" !== t.params.mousewheel.eventsTarget && (l = document.querySelector(t.params.mousewheel.eventsTarget));
                    const c = l && l.contains(s.target);
                    if (!t.mouseEntered && !c && !r.releaseOnEdges) return !0;
                    s.originalEvent && (s = s.originalEvent);
                    let u = 0;
                    const f = t.rtlTranslate ? -1 : 1,
                        h = function(e) {
                            let t = 0,
                                s = 0,
                                i = 0,
                                n = 0;
                            return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, n = 10 * s, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = n, n = 0), (i || n) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, n *= 40) : (i *= 800, n *= 800)), i && !t && (t = i < 1 ? -1 : 1), n && !s && (s = n < 1 ? -1 : 1), {
                                spinX: t,
                                spinY: s,
                                pixelX: i,
                                pixelY: n
                            }
                        }(s);
                    if (r.forceToAxis)
                        if (t.isHorizontal()) {
                            if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return !0;
                            u = -h.pixelX * f
                        } else {
                            if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return !0;
                            u = -h.pixelY
                        }
                    else u = Math.abs(h.pixelX) > Math.abs(h.pixelY) ? -h.pixelX * f : -h.pixelY;
                    if (0 === u) return !0;
                    r.invert && (u = -u);
                    let g = t.getTranslate() + u * r.sensitivity;
                    if (g >= t.minTranslate() && (g = t.minTranslate()), g <= t.maxTranslate() && (g = t.maxTranslate()), i = !!t.params.loop || !(g === t.minTranslate() || g === t.maxTranslate()), i && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                        const e = {
                                time: (0, n.d)(),
                                delta: Math.abs(u),
                                direction: Math.sign(u)
                            },
                            i = d && e.time < d.time + 500 && e.delta <= d.delta && e.direction === d.direction;
                        if (!i) {
                            d = void 0;
                            let l = t.getTranslate() + u * r.sensitivity;
                            const c = t.isBeginning,
                                f = t.isEnd;
                            if (l >= t.minTranslate() && (l = t.minTranslate()), l <= t.maxTranslate() && (l = t.maxTranslate()), t.setTransition(0), t.setTranslate(l), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!c && t.isBeginning || !f && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                                    direction: e.direction < 0 ? "next" : "prev",
                                    byMousewheel: !0
                                }), t.params.freeMode.sticky) {
                                clearTimeout(o), o = void 0, p.length >= 15 && p.shift();
                                const s = p.length ? p[p.length - 1] : void 0,
                                    i = p[0];
                                if (p.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) p.splice(0);
                                else if (p.length >= 15 && e.time - i.time < 500 && i.delta - e.delta >= 1 && e.delta <= 6) {
                                    const s = u > 0 ? .8 : .2;
                                    d = e, p.splice(0), o = (0, n.n)((() => {
                                        !t.destroyed && t.params && t.slideToClosest(t.params.speed, !0, void 0, s)
                                    }), 0)
                                }
                                o || (o = (0, n.n)((() => {
                                    if (t.destroyed || !t.params) return;
                                    d = e, p.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                                }), 500))
                            }
                            if (i || a("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), r.releaseOnEdges && (l === t.minTranslate() || l === t.maxTranslate())) return !0
                        }
                    } else {
                        const s = {
                            time: (0, n.d)(),
                            delta: Math.abs(u),
                            direction: Math.sign(u),
                            raw: e
                        };
                        p.length >= 2 && p.shift();
                        const i = p.length ? p[p.length - 1] : void 0;
                        if (p.push(s), i ? (s.direction !== i.direction || s.delta > i.delta || s.time > i.time + 150) && m(s) : m(s), function(e) {
                                const s = t.params.mousewheel;
                                if (e.direction < 0) {
                                    if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                                } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                                return !1
                            }(s)) return !0
                    }
                    return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
                }

                function g(e) {
                    let s = t.el;
                    "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", u), s[e]("mouseleave", f), s[e]("wheel", h)
                }

                function v() {
                    return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", h), !0) : !t.mousewheel.enabled && (g("addEventListener"), t.mousewheel.enabled = !0, !0)
                }

                function w() {
                    return t.params.cssMode ? (t.wrapperEl.addEventListener(event, h), !0) : !!t.mousewheel.enabled && (g("removeEventListener"), t.mousewheel.enabled = !1, !0)
                }
                r("init", (() => {
                    !t.params.mousewheel.enabled && t.params.cssMode && w(), t.params.mousewheel.enabled && v()
                })), r("destroy", (() => {
                    t.params.cssMode && v(), t.mousewheel.enabled && w()
                })), Object.assign(t.mousewheel, {
                    enable: v,
                    disable: w
                })
            }

            function l(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: r
                } = e;

                function a(e) {
                    let s;
                    return e && "string" === typeof e && t.isElement && (s = t.el.querySelector(e) || t.hostEl.querySelector(e), s) ? s : (e && ("string" === typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" === typeof e && s && s.length > 1 && 1 === t.el.querySelectorAll(e).length ? s = t.el.querySelector(e) : s && 1 === s.length && (s = s[0])), e && !s ? e : s)
                }

                function l(e, s) {
                    const i = t.params.navigation;
                    (e = (0, n.m)(e)).forEach((e => {
                        e && (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass))
                    }))
                }

                function o() {
                    const {
                        nextEl: e,
                        prevEl: s
                    } = t.navigation;
                    if (t.params.loop) return l(s, !1), void l(e, !1);
                    l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind)
                }

                function d(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), r("navigationPrev"))
                }

                function c(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r("navigationNext"))
                }

                function p() {
                    const e = t.params.navigation;
                    if (t.params.navigation = function(e, t, s, i) {
                            return e.params.createElements && Object.keys(i).forEach((r => {
                                if (!s[r] && !0 === s.auto) {
                                    let a = (0, n.e)(e.el, `.${i[r]}`)[0];
                                    a || (a = (0, n.c)("div", i[r]), a.className = i[r], e.el.append(a)), s[r] = a, t[r] = a
                                }
                            })), s
                        }(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !e.nextEl && !e.prevEl) return;
                    let s = a(e.nextEl),
                        i = a(e.prevEl);
                    Object.assign(t.navigation, {
                        nextEl: s,
                        prevEl: i
                    }), s = (0, n.m)(s), i = (0, n.m)(i);
                    const r = (s, i) => {
                        s && s.addEventListener("click", "next" === i ? c : d), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
                    };
                    s.forEach((e => r(e, "next"))), i.forEach((e => r(e, "prev")))
                }

                function u() {
                    let {
                        nextEl: e,
                        prevEl: s
                    } = t.navigation;
                    e = (0, n.m)(e), s = (0, n.m)(s);
                    const i = (e, s) => {
                        e.removeEventListener("click", "next" === s ? c : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                    };
                    e.forEach((e => i(e, "next"))), s.forEach((e => i(e, "prev")))
                }
                s({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    prevEl: null
                }, i("init", (() => {
                    !1 === t.params.navigation.enabled ? f() : (p(), o())
                })), i("toEdge fromEdge lock unlock", (() => {
                    o()
                })), i("destroy", (() => {
                    u()
                })), i("enable disable", (() => {
                    let {
                        nextEl: e,
                        prevEl: s
                    } = t.navigation;
                    e = (0, n.m)(e), s = (0, n.m)(s), t.enabled ? o() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
                })), i("click", ((e, s) => {
                    let {
                        nextEl: i,
                        prevEl: a
                    } = t.navigation;
                    i = (0, n.m)(i), a = (0, n.m)(a);
                    const l = s.target;
                    let o = a.includes(l) || i.includes(l);
                    if (t.isElement && !o) {
                        const e = s.path || s.composedPath && s.composedPath();
                        e && (o = e.find((e => i.includes(e) || a.includes(e))))
                    }
                    if (t.params.navigation.hideOnClick && !o) {
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
                        let e;
                        i.length ? e = i[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), r(!0 === e ? "navigationShow" : "navigationHide"), [...i, ...a].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
                    }
                }));
                const f = () => {
                    t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u()
                };
                Object.assign(t.navigation, {
                    enable: () => {
                        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), o()
                    },
                    disable: f,
                    update: o,
                    init: p,
                    destroy: u
                })
            }

            function o(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function d(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: r
                } = e;
                s({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        containerRole: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null,
                        scrollOnFocus: !0
                    }
                }), t.a11y = {
                    clicked: !1
                };
                let a, l, d = null,
                    c = (new Date).getTime();

                function p(e) {
                    const t = d;
                    0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
                }

                function u(e) {
                    (e = (0, n.m)(e)).forEach((e => {
                        e.setAttribute("tabIndex", "0")
                    }))
                }

                function f(e) {
                    (e = (0, n.m)(e)).forEach((e => {
                        e.setAttribute("tabIndex", "-1")
                    }))
                }

                function m(e, t) {
                    (e = (0, n.m)(e)).forEach((e => {
                        e.setAttribute("role", t)
                    }))
                }

                function h(e, t) {
                    (e = (0, n.m)(e)).forEach((e => {
                        e.setAttribute("aria-roledescription", t)
                    }))
                }

                function g(e, t) {
                    (e = (0, n.m)(e)).forEach((e => {
                        e.setAttribute("aria-label", t)
                    }))
                }

                function v(e) {
                    (e = (0, n.m)(e)).forEach((e => {
                        e.setAttribute("aria-disabled", !0)
                    }))
                }

                function w(e) {
                    (e = (0, n.m)(e)).forEach((e => {
                        e.setAttribute("aria-disabled", !1)
                    }))
                }

                function b(e) {
                    if (13 !== e.keyCode && 32 !== e.keyCode) return;
                    const s = t.params.a11y,
                        i = e.target;
                    if (!t.pagination || !t.pagination.el || i !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(o(t.params.pagination.bulletClass))) {
                        if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
                            const e = (0, n.m)(t.navigation.prevEl);
                            (0, n.m)(t.navigation.nextEl).includes(i) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? p(s.lastSlideMessage) : p(s.nextSlideMessage)), e.includes(i) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? p(s.firstSlideMessage) : p(s.prevSlideMessage))
                        }
                        t.pagination && i.matches(o(t.params.pagination.bulletClass)) && i.click()
                    }
                }

                function y() {
                    return t.pagination && t.pagination.bullets && t.pagination.bullets.length
                }

                function E() {
                    return y() && t.params.pagination.clickable
                }
                const S = (e, t, s) => {
                        u(e), "BUTTON" !== e.tagName && (m(e, "button"), e.addEventListener("keydown", b)), g(e, s),
                            function(e, t) {
                                (e = (0, n.m)(e)).forEach((e => {
                                    e.setAttribute("aria-controls", t)
                                }))
                            }(e, t)
                    },
                    T = e => {
                        l && l !== e.target && !l.contains(e.target) && (a = !0), t.a11y.clicked = !0
                    },
                    x = () => {
                        a = !1, requestAnimationFrame((() => {
                            requestAnimationFrame((() => {
                                t.destroyed || (t.a11y.clicked = !1)
                            }))
                        }))
                    },
                    M = e => {
                        c = (new Date).getTime()
                    },
                    C = e => {
                        if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
                        if ((new Date).getTime() - c < 100) return;
                        const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                        if (!s || !t.slides.includes(s)) return;
                        l = s;
                        const i = t.slides.indexOf(s) === t.activeIndex,
                            n = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                        i || n || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame((() => {
                            a || (t.params.loop ? t.slideToLoop(parseInt(s.getAttribute("data-swiper-slide-index")), 0) : t.slideTo(t.slides.indexOf(s), 0), a = !1)
                        })))
                    },
                    P = () => {
                        const e = t.params.a11y;
                        e.itemRoleDescriptionMessage && h(t.slides, e.itemRoleDescriptionMessage), e.slideRole && m(t.slides, e.slideRole);
                        const s = t.slides.length;
                        e.slideLabelMessage && t.slides.forEach(((i, n) => {
                            const r = t.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n;
                            g(i, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
                        }))
                    },
                    k = () => {
                        const e = t.params.a11y;
                        t.el.append(d);
                        const s = t.el;
                        e.containerRoleDescriptionMessage && h(s, e.containerRoleDescriptionMessage), e.containerMessage && g(s, e.containerMessage), e.containerRole && m(s, e.containerRole);
                        const r = t.wrapperEl,
                            a = e.id || r.getAttribute("id") || `swiper-wrapper-${l=16,void 0===l&&(l=16),"x".repeat(l).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                        var l;
                        const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                        var c, p;
                        c = r, p = a, (c = (0, n.m)(c)).forEach((e => {
                                e.setAttribute("id", p)
                            })),
                            function(e, t) {
                                (e = (0, n.m)(e)).forEach((e => {
                                    e.setAttribute("aria-live", t)
                                }))
                            }(r, o), P();
                        let {
                            nextEl: u,
                            prevEl: f
                        } = t.navigation ? t.navigation : {};
                        if (u = (0, n.m)(u), f = (0, n.m)(f), u && u.forEach((t => S(t, a, e.nextSlideMessage))), f && f.forEach((t => S(t, a, e.prevSlideMessage))), E()) {
                            (0, n.m)(t.pagination.el).forEach((e => {
                                e.addEventListener("keydown", b)
                            }))
                        }(0, i.g)().addEventListener("visibilitychange", M), t.el.addEventListener("focus", C, !0), t.el.addEventListener("focus", C, !0), t.el.addEventListener("pointerdown", T, !0), t.el.addEventListener("pointerup", x, !0)
                    };
                r("beforeInit", (() => {
                    d = (0, n.c)("span", t.params.a11y.notificationClass), d.setAttribute("aria-live", "assertive"), d.setAttribute("aria-atomic", "true")
                })), r("afterInit", (() => {
                    t.params.a11y.enabled && k()
                })), r("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                    t.params.a11y.enabled && P()
                })), r("fromEdge toEdge afterInit lock unlock", (() => {
                    t.params.a11y.enabled && function() {
                        if (t.params.loop || t.params.rewind || !t.navigation) return;
                        const {
                            nextEl: e,
                            prevEl: s
                        } = t.navigation;
                        s && (t.isBeginning ? (v(s), f(s)) : (w(s), u(s))), e && (t.isEnd ? (v(e), f(e)) : (w(e), u(e)))
                    }()
                })), r("paginationUpdate", (() => {
                    t.params.a11y.enabled && function() {
                        const e = t.params.a11y;
                        y() && t.pagination.bullets.forEach((s => {
                            t.params.pagination.clickable && (u(s), t.params.pagination.renderBullet || (m(s, "button"), g(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, n.h)(s) + 1)))), s.matches(o(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
                        }))
                    }()
                })), r("destroy", (() => {
                    t.params.a11y.enabled && function() {
                        d && d.remove();
                        let {
                            nextEl: e,
                            prevEl: s
                        } = t.navigation ? t.navigation : {};
                        e = (0, n.m)(e), s = (0, n.m)(s), e && e.forEach((e => e.removeEventListener("keydown", b))), s && s.forEach((e => e.removeEventListener("keydown", b))), E() && (0, n.m)(t.pagination.el).forEach((e => {
                            e.removeEventListener("keydown", b)
                        }));
                        (0, i.g)().removeEventListener("visibilitychange", M), t.el && "string" !== typeof t.el && (t.el.removeEventListener("focus", C, !0), t.el.removeEventListener("pointerdown", T, !0), t.el.removeEventListener("pointerup", x, !0))
                    }()
                }))
            }

            function c(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    emit: i,
                    once: r
                } = e;
                s({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(t, {
                    freeMode: {
                        onTouchStart: function() {
                            if (t.params.cssMode) return;
                            const e = t.getTranslate();
                            t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                                currentPos: t.rtl ? t.translate : -t.translate
                            })
                        },
                        onTouchMove: function() {
                            if (t.params.cssMode) return;
                            const {
                                touchEventsData: e,
                                touches: s
                            } = t;
                            0 === e.velocities.length && e.velocities.push({
                                position: s[t.isHorizontal() ? "startX" : "startY"],
                                time: e.touchStartTime
                            }), e.velocities.push({
                                position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                time: (0, n.d)()
                            })
                        },
                        onTouchEnd: function(e) {
                            let {
                                currentPos: s
                            } = e;
                            if (t.params.cssMode) return;
                            const {
                                params: a,
                                wrapperEl: l,
                                rtlTranslate: o,
                                snapGrid: d,
                                touchEventsData: c
                            } = t, p = (0, n.d)() - c.touchStartTime;
                            if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                            else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
                            else {
                                if (a.freeMode.momentum) {
                                    if (c.velocities.length > 1) {
                                        const e = c.velocities.pop(),
                                            s = c.velocities.pop(),
                                            i = e.position - s.position,
                                            r = e.time - s.time;
                                        t.velocity = i / r, t.velocity /= 2, Math.abs(t.velocity) < a.freeMode.minimumVelocity && (t.velocity = 0), (r > 150 || (0, n.d)() - e.time > 300) && (t.velocity = 0)
                                    } else t.velocity = 0;
                                    t.velocity *= a.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                                    let e = 1e3 * a.freeMode.momentumRatio;
                                    const s = t.velocity * e;
                                    let p = t.translate + s;
                                    o && (p = -p);
                                    let u, f = !1;
                                    const m = 20 * Math.abs(t.velocity) * a.freeMode.momentumBounceRatio;
                                    let h;
                                    if (p < t.maxTranslate()) a.freeMode.momentumBounce ? (p + t.maxTranslate() < -m && (p = t.maxTranslate() - m), u = t.maxTranslate(), f = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), a.loop && a.centeredSlides && (h = !0);
                                    else if (p > t.minTranslate()) a.freeMode.momentumBounce ? (p - t.minTranslate() > m && (p = t.minTranslate() + m), u = t.minTranslate(), f = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), a.loop && a.centeredSlides && (h = !0);
                                    else if (a.freeMode.sticky) {
                                        let e;
                                        for (let t = 0; t < d.length; t += 1)
                                            if (d[t] > -p) {
                                                e = t;
                                                break
                                            }
                                        p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p
                                    }
                                    if (h && r("transitionEnd", (() => {
                                            t.loopFix()
                                        })), 0 !== t.velocity) {
                                        if (e = o ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), a.freeMode.sticky) {
                                            const s = Math.abs((o ? -p : p) - t.translate),
                                                i = t.slidesSizesGrid[t.activeIndex];
                                            e = s < i ? a.speed : s < 2 * i ? 1.5 * a.speed : 2.5 * a.speed
                                        }
                                    } else if (a.freeMode.sticky) return void t.slideToClosest();
                                    a.freeMode.momentumBounce && f ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, n.k)(l, (() => {
                                        t && !t.destroyed && c.allowMomentumBounce && (i("momentumBounce"), t.setTransition(a.speed), setTimeout((() => {
                                            t.setTranslate(u), (0, n.k)(l, (() => {
                                                t && !t.destroyed && t.transitionEnd()
                                            }))
                                        }), 0))
                                    }))) : t.velocity ? (i("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, n.k)(l, (() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                                } else {
                                    if (a.freeMode.sticky) return void t.slideToClosest();
                                    a.freeMode && i("_freeModeNoMomentumRelease")
                                }(!a.freeMode.momentum || p >= a.longSwipesMs) && (i("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                            }
                        }
                    }
                })
            }

            function p(e, t) {
                const s = (0, n.g)(t);
                return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
            }

            function u(e) {
                let {
                    swiper: t,
                    duration: s,
                    transformElements: i,
                    allSlides: r
                } = e;
                const {
                    activeIndex: a
                } = t;
                if (t.params.virtualTranslate && 0 !== s) {
                    let e, s = !1;
                    e = r ? i : i.filter((e => {
                        const s = e.classList.contains("swiper-slide-transform") ? (e => {
                            if (!e.parentElement) return t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0];
                            return e.parentElement
                        })(e) : e;
                        return t.getSlideIndex(s) === a
                    })), e.forEach((e => {
                        (0, n.k)(e, (() => {
                            if (s) return;
                            if (!t || t.destroyed) return;
                            s = !0, t.animating = !1;
                            const e = new window.CustomEvent("transitionend", {
                                bubbles: !0,
                                cancelable: !0
                            });
                            t.wrapperEl.dispatchEvent(e)
                        }))
                    }))
                }
            }

            function f(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i
                } = e;
                s({
                    fadeEffect: {
                        crossFade: !1
                    }
                });
                ! function(e) {
                    const {
                        effect: t,
                        swiper: s,
                        on: i,
                        setTranslate: n,
                        setTransition: r,
                        overwriteParams: a,
                        perspective: l,
                        recreateShadows: o,
                        getEffectParams: d
                    } = e;
                    let c;
                    i("beforeInit", (() => {
                        if (s.params.effect !== t) return;
                        s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                        const e = a ? a() : {};
                        Object.assign(s.params, e), Object.assign(s.originalParams, e)
                    })), i("setTranslate", (() => {
                        s.params.effect === t && n()
                    })), i("setTransition", ((e, i) => {
                        s.params.effect === t && r(i)
                    })), i("transitionEnd", (() => {
                        if (s.params.effect === t && o) {
                            if (!d || !d().slideShadows) return;
                            s.slides.forEach((e => {
                                e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                            })), o()
                        }
                    })), i("virtualUpdate", (() => {
                        s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                            c && s.slides && s.slides.length && (n(), c = !1)
                        })))
                    }))
                }({
                    effect: "fade",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        const {
                            slides: e
                        } = t;
                        t.params.fadeEffect;
                        for (let s = 0; s < e.length; s += 1) {
                            const e = t.slides[s];
                            let i = -e.swiperSlideOffset;
                            t.params.virtualTranslate || (i -= t.translate);
                            let n = 0;
                            t.isHorizontal() || (n = i, i = 0);
                            const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                                a = p(0, e);
                            a.style.opacity = r, a.style.transform = `translate3d(${i}px, ${n}px, 0px)`
                        }
                    },
                    setTransition: e => {
                        const s = t.slides.map((e => (0, n.g)(e)));
                        s.forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        })), u({
                            swiper: t,
                            duration: e,
                            transformElements: s,
                            allSlides: !0
                        })
                    },
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }
        },
        13433: (e, t, s) => {
            function i(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function n(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s])
                }))
            }
            s.d(t, {
                a: () => o,
                g: () => a
            });
            const r = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                const e = "undefined" !== typeof document ? document : {};
                return n(e, r), e
            }
            const l = {
                document: r,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                const e = "undefined" !== typeof window ? window : {};
                return n(e, l), e
            }
        },
        7185: (e, t, s) => {
            s.d(t, {
                a: () => S,
                b: () => v,
                c: () => g,
                d: () => a,
                e: () => f,
                f: () => x,
                g: () => u,
                h: () => E,
                j: () => l,
                k: () => T,
                m: () => M,
                n: () => r,
                p: () => y,
                q: () => b,
                r: () => w,
                s: () => c,
                t: () => p,
                u: () => h,
                v: () => m,
                w: () => d,
                x: () => n
            });
            var i = s(13433);

            function n(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (s) {}
                    try {
                        delete t[e]
                    } catch (s) {}
                }))
            }

            function r(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function a() {
                return Date.now()
            }

            function l(e, t) {
                void 0 === t && (t = "x");
                const s = (0, i.a)();
                let n, r, a;
                const l = function(e) {
                    const t = (0, i.a)();
                    let s;
                    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (r = l.transform || l.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = s.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0
            }

            function o(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function d() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let i = 1; i < arguments.length; i += 1) {
                    const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    if (void 0 !== n && null !== n && (s = n, !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                        const s = Object.keys(Object(n)).filter((e => t.indexOf(e) < 0));
                        for (let t = 0, i = s.length; t < i; t += 1) {
                            const i = s[t],
                                r = Object.getOwnPropertyDescriptor(n, i);
                            void 0 !== r && r.enumerable && (o(e[i]) && o(n[i]) ? n[i].__swiper__ ? e[i] = n[i] : d(e[i], n[i]) : !o(e[i]) && o(n[i]) ? (e[i] = {}, n[i].__swiper__ ? e[i] = n[i] : d(e[i], n[i])) : e[i] = n[i])
                        }
                    }
                }
                var s;
                return e
            }

            function c(e, t, s) {
                e.style.setProperty(t, s)
            }

            function p(e) {
                let {
                    swiper: t,
                    targetPosition: s,
                    side: n
                } = e;
                const r = (0, i.a)(),
                    a = -t.translate;
                let l, o = null;
                const d = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
                const c = s > a ? "next" : "prev",
                    p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    u = () => {
                        l = (new Date).getTime(), null === o && (o = l);
                        const e = Math.max(Math.min((l - o) / d, 1), 0),
                            i = .5 - Math.cos(e * Math.PI) / 2;
                        let c = a + i * (s - a);
                        if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                                [n]: c
                            }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [n]: c
                            })
                        })), void r.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = r.requestAnimationFrame(u)
                    };
                u()
            }

            function u(e) {
                return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
            }

            function f(e, t) {
                void 0 === t && (t = "");
                const s = [...e.children];
                return e instanceof HTMLSlotElement && s.push(...e.assignedElements()), t ? s.filter((e => e.matches(t))) : s
            }

            function m(e, t) {
                const s = t.contains(e);
                if (!s && t instanceof HTMLSlotElement) {
                    return [...t.assignedElements()].includes(e)
                }
                return s
            }

            function h(e) {
                try {
                    return void console.warn(e)
                } catch (t) {}
            }

            function g(e, t) {
                void 0 === t && (t = []);
                const s = document.createElement(e);
                return s.classList.add(...Array.isArray(t) ? t : function(e) {
                    return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
                }(t)), s
            }

            function v(e) {
                const t = (0, i.a)(),
                    s = (0, i.g)(),
                    n = e.getBoundingClientRect(),
                    r = s.body,
                    a = e.clientTop || r.clientTop || 0,
                    l = e.clientLeft || r.clientLeft || 0,
                    o = e === t ? t.scrollY : e.scrollTop,
                    d = e === t ? t.scrollX : e.scrollLeft;
                return {
                    top: n.top + o - a,
                    left: n.left + d - l
                }
            }

            function w(e, t) {
                const s = [];
                for (; e.previousElementSibling;) {
                    const i = e.previousElementSibling;
                    t ? i.matches(t) && s.push(i) : s.push(i), e = i
                }
                return s
            }

            function b(e, t) {
                const s = [];
                for (; e.nextElementSibling;) {
                    const i = e.nextElementSibling;
                    t ? i.matches(t) && s.push(i) : s.push(i), e = i
                }
                return s
            }

            function y(e, t) {
                return (0, i.a)().getComputedStyle(e, null).getPropertyValue(t)
            }

            function E(e) {
                let t, s = e;
                if (s) {
                    for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
                    return t
                }
            }

            function S(e, t) {
                const s = [];
                let i = e.parentElement;
                for (; i;) t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
                return s
            }

            function T(e, t) {
                t && e.addEventListener("transitionend", (function s(i) {
                    i.target === e && (t.call(e, i), e.removeEventListener("transitionend", s))
                }))
            }

            function x(e, t, s) {
                const n = (0, i.a)();
                return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function M(e) {
                return (Array.isArray(e) ? e : [e]).filter((e => !!e))
            }
        },
        36869: (e, t, s) => {
            s.d(t, {
                tq: () => ee,
                o5: () => te
            });
            var i = s(35098),
                n = s(13433),
                r = s(7185);
            let a, l, o;

            function d() {
                return a || (a = function() {
                    const e = (0, n.a)(),
                        t = (0, n.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), a
            }

            function c(e) {
                return void 0 === e && (e = {}), l || (l = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const s = d(),
                        i = (0, n.a)(),
                        r = i.navigator.platform,
                        a = t || i.navigator.userAgent,
                        l = {
                            ios: !1,
                            android: !1
                        },
                        o = i.screen.width,
                        c = i.screen.height,
                        p = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let u = a.match(/(iPad).*OS\s([\d_]+)/);
                    const f = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                        m = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        h = "Win32" === r;
                    let g = "MacIntel" === r;
                    return !u && g && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${c}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), g = !1), p && !h && (l.os = "android", l.android = !0), (u || m || f) && (l.os = "ios", l.ios = !0), l
                }(e)), l
            }

            function p() {
                return o || (o = function() {
                    const e = (0, n.a)(),
                        t = c();
                    let s = !1;

                    function i() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }
                    if (i()) {
                        const t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            s = e < 16 || 16 === e && i < 2
                        }
                    }
                    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                        a = i();
                    return {
                        isSafari: s || a,
                        needPerspectiveFix: s,
                        need3dFix: a || r && t.ios,
                        isWebView: r
                    }
                }()), o
            }
            var u = {
                on(e, t, s) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof t) return i;
                    const n = s ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t)
                    })), i
                },
                once(e, t, s) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof t) return i;

                    function n() {
                        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                        for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
                        t.apply(i, r)
                    }
                    return n.__emitterProxy = t, i.on(e, n, s)
                },
                onAny(e, t) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" !== typeof e) return s;
                    const i = t ? "unshift" : "push";
                    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const s = t.eventsAnyListeners.indexOf(e);
                    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
                },
                off(e, t) {
                    const s = this;
                    return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, n) => {
                            (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(n, 1)
                        }))
                    })), s) : s
                },
                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, s, i;
                    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    "string" === typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), i = e) : (t = r[0].events, s = r[0].data, i = r[0].context || e), s.unshift(i);
                    return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                            e.apply(i, [t, ...s])
                        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                            e.apply(i, s)
                        }))
                    })), e
                }
            };
            const f = (e, t, s) => {
                t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
            };
            const m = (e, t, s) => {
                t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
            };
            const h = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (s) {
                        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                            s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
                        }))), t && t.remove()
                    }
                },
                g = (e, t) => {
                    if (!e.slides[t]) return;
                    const s = e.slides[t].querySelector('[loading="lazy"]');
                    s && s.removeAttribute("loading")
                },
                v = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext;
                    const s = e.slides.length;
                    if (!s || !t || t < 0) return;
                    t = Math.min(t, s);
                    const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        n = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        const s = n,
                            r = [s - t];
                        return r.push(...Array.from({
                            length: t
                        }).map(((e, t) => s + i + t))), void e.slides.forEach(((t, s) => {
                            r.includes(t.column) && g(e, s)
                        }))
                    }
                    const r = n + i - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let a = n - t; a <= r + t; a += 1) {
                            const t = (a % s + s) % s;
                            (t < n || t > r) && g(e, t)
                        } else
                            for (let a = Math.max(n - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== n && (a > r || a < n) && g(e, a)
                };
            var w = {
                updateSize: function() {
                    const e = this;
                    let t, s;
                    const i = e.el;
                    t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt((0, r.p)(i, "padding-left") || 0, 10) - parseInt((0, r.p)(i, "padding-right") || 0, 10), s = s - parseInt((0, r.p)(i, "padding-top") || 0, 10) - parseInt((0, r.p)(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t, s) {
                        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
                    }
                    const s = e.params,
                        {
                            wrapperEl: i,
                            slidesEl: n,
                            size: a,
                            rtlTranslate: l,
                            wrongRTL: o
                        } = e,
                        d = e.virtual && s.virtual.enabled,
                        c = d ? e.virtual.slides.length : e.slides.length,
                        p = (0, r.e)(n, `.${e.params.slideClass}, swiper-slide`),
                        u = d ? e.virtual.slides.length : p.length;
                    let f = [];
                    const m = [],
                        h = [];
                    let g = s.slidesOffsetBefore;
                    "function" === typeof g && (g = s.slidesOffsetBefore.call(e));
                    let v = s.slidesOffsetAfter;
                    "function" === typeof v && (v = s.slidesOffsetAfter.call(e));
                    const w = e.snapGrid.length,
                        b = e.slidesGrid.length;
                    let y = s.spaceBetween,
                        E = -g,
                        S = 0,
                        T = 0;
                    if ("undefined" === typeof a) return;
                    "string" === typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * a : "string" === typeof y && (y = parseFloat(y)), e.virtualSize = -y, p.forEach((e => {
                        l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                    })), s.centeredSlides && s.cssMode && ((0, r.s)(i, "--swiper-centered-offset-before", ""), (0, r.s)(i, "--swiper-centered-offset-after", ""));
                    const x = s.grid && s.grid.rows > 1 && e.grid;
                    let M;
                    x ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
                    const C = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => "undefined" !== typeof s.breakpoints[e].slidesPerView)).length > 0;
                    for (let P = 0; P < u; P += 1) {
                        let i;
                        if (M = 0, p[P] && (i = p[P]), x && e.grid.updateSlide(P, i, p), !p[P] || "none" !== (0, r.p)(i, "display")) {
                            if ("auto" === s.slidesPerView) {
                                C && (p[P].style[e.getDirectionLabel("width")] = "");
                                const n = getComputedStyle(i),
                                    a = i.style.transform,
                                    l = i.style.webkitTransform;
                                if (a && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths) M = e.isHorizontal() ? (0, r.f)(i, "width", !0) : (0, r.f)(i, "height", !0);
                                else {
                                    const e = t(n, "width"),
                                        s = t(n, "padding-left"),
                                        r = t(n, "padding-right"),
                                        a = t(n, "margin-left"),
                                        l = t(n, "margin-right"),
                                        o = n.getPropertyValue("box-sizing");
                                    if (o && "border-box" === o) M = e + a + l;
                                    else {
                                        const {
                                            clientWidth: t,
                                            offsetWidth: n
                                        } = i;
                                        M = e + s + r + a + l + (n - t)
                                    }
                                }
                                a && (i.style.transform = a), l && (i.style.webkitTransform = l), s.roundLengths && (M = Math.floor(M))
                            } else M = (a - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (M = Math.floor(M)), p[P] && (p[P].style[e.getDirectionLabel("width")] = `${M}px`);
                            p[P] && (p[P].swiperSlideSize = M), h.push(M), s.centeredSlides ? (E = E + M / 2 + S / 2 + y, 0 === S && 0 !== P && (E = E - a / 2 - y), 0 === P && (E = E - a / 2 - y), Math.abs(E) < .001 && (E = 0), s.roundLengths && (E = Math.floor(E)), T % s.slidesPerGroup === 0 && f.push(E), m.push(E)) : (s.roundLengths && (E = Math.floor(E)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup === 0 && f.push(E), m.push(E), E = E + M + y), e.virtualSize += M + y, S = M, T += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, a) + v, l && o && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize+y}px`), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize+y}px`), x && e.grid.updateWrapperSize(M, f), !s.centeredSlides) {
                        const t = [];
                        for (let i = 0; i < f.length; i += 1) {
                            let n = f[i];
                            s.roundLengths && (n = Math.floor(n)), f[i] <= e.virtualSize - a && t.push(n)
                        }
                        f = t, Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a)
                    }
                    if (d && s.loop) {
                        const t = h[0] + y;
                        if (s.slidesPerGroup > 1) {
                            const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                                n = t * s.slidesPerGroup;
                            for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + n)
                        }
                        for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + t), m.push(m[m.length - 1] + t), e.virtualSize += t
                    }
                    if (0 === f.length && (f = [0]), 0 !== y) {
                        const t = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
                        p.filter(((e, t) => !(s.cssMode && !s.loop) || t !== p.length - 1)).forEach((e => {
                            e.style[t] = `${y}px`
                        }))
                    }
                    if (s.centeredSlides && s.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (y || 0)
                        })), e -= y;
                        const t = e > a ? e - a : 0;
                        f = f.map((e => e <= 0 ? -g : e > t ? t + v : e))
                    }
                    if (s.centerInsufficientSlides) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (y || 0)
                        })), e -= y;
                        const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                        if (e + t < a) {
                            const s = (a - e - t) / 2;
                            f.forEach(((e, t) => {
                                f[t] = e - s
                            })), m.forEach(((e, t) => {
                                m[t] = e + s
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: p,
                            snapGrid: f,
                            slidesGrid: m,
                            slidesSizesGrid: h
                        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                        (0, r.s)(i, "--swiper-centered-offset-before", -f[0] + "px"), (0, r.s)(i, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    if (u !== c && e.emit("slidesLengthChange"), f.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== b && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !d && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                        const t = `${s.containerModifierClass}backface-hidden`,
                            i = e.el.classList.contains(t);
                        u <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
                    }
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        s = [],
                        i = t.virtual && t.params.virtual.enabled;
                    let n, r = 0;
                    "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const a = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                            s.push(e)
                        }));
                        else
                            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                                const e = t.activeIndex + n;
                                if (e > t.slides.length && !i) break;
                                s.push(a(e))
                            } else s.push(a(t.activeIndex));
                    for (n = 0; n < s.length; n += 1)
                        if ("undefined" !== typeof s[n]) {
                            const e = s[n].offsetHeight;
                            r = e > r ? e : r
                        }(r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides,
                        s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                    for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment()
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    const t = this,
                        s = t.params,
                        {
                            slides: i,
                            rtlTranslate: n,
                            snapGrid: r
                        } = t;
                    if (0 === i.length) return;
                    "undefined" === typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
                    let a = -e;
                    n && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    let l = s.spaceBetween;
                    "string" === typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" === typeof l && (l = parseFloat(l));
                    for (let o = 0; o < i.length; o += 1) {
                        const e = i[o];
                        let d = e.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
                        const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + l),
                            p = (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + l),
                            u = -(a - d),
                            m = u + t.slidesSizesGrid[o],
                            h = u >= 0 && u <= t.size - t.slidesSizesGrid[o],
                            g = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
                        g && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o)), f(e, g, s.slideVisibleClass), f(e, h, s.slideFullyVisibleClass), e.progress = n ? -c : c, e.originalProgress = n ? -p : p
                    }
                },
                updateProgress: function(e) {
                    const t = this;
                    if ("undefined" === typeof e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        i = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: n,
                        isBeginning: r,
                        isEnd: a,
                        progressLoop: l
                    } = t;
                    const o = r,
                        d = a;
                    if (0 === i) n = 0, r = !0, a = !0;
                    else {
                        n = (e - t.minTranslate()) / i;
                        const s = Math.abs(e - t.minTranslate()) < 1,
                            l = Math.abs(e - t.maxTranslate()) < 1;
                        r = s || n <= 0, a = l || n >= 1, s && (n = 0), l && (n = 1)
                    }
                    if (s.loop) {
                        const s = t.getSlideIndexByData(0),
                            i = t.getSlideIndexByData(t.slides.length - 1),
                            n = t.slidesGrid[s],
                            r = t.slidesGrid[i],
                            a = t.slidesGrid[t.slidesGrid.length - 1],
                            o = Math.abs(e);
                        l = o >= n ? (o - n) / a : (o + a - r) / a, l > 1 && (l -= 1)
                    }
                    Object.assign(t, {
                        progress: n,
                        progressLoop: l,
                        isBeginning: r,
                        isEnd: a
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (o && !r || d && !a) && t.emit("fromEdge"), t.emit("progress", n)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            slidesEl: i,
                            activeIndex: n
                        } = e,
                        a = e.virtual && s.virtual.enabled,
                        l = e.grid && s.grid && s.grid.rows > 1,
                        o = e => (0, r.e)(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
                    let d, c, p;
                    if (a)
                        if (s.loop) {
                            let t = n - e.virtual.slidesBefore;
                            t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = o(`[data-swiper-slide-index="${t}"]`)
                        } else d = o(`[data-swiper-slide-index="${n}"]`);
                    else l ? (d = t.filter((e => e.column === n))[0], p = t.filter((e => e.column === n + 1))[0], c = t.filter((e => e.column === n - 1))[0]) : d = t[n];
                    d && (l || (p = (0, r.q)(d, `.${s.slideClass}, swiper-slide`)[0], s.loop && !p && (p = t[0]), c = (0, r.r)(d, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !c && (c = t[t.length - 1]))), t.forEach((e => {
                        m(e, e === d, s.slideActiveClass), m(e, e === p, s.slideNextClass), m(e, e === c, s.slidePrevClass)
                    })), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            snapGrid: i,
                            params: n,
                            activeIndex: r,
                            realIndex: a,
                            snapIndex: l
                        } = t;
                    let o, d = e;
                    const c = e => {
                        let s = e - t.virtual.slidesBefore;
                        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
                    };
                    if ("undefined" === typeof d && (d = function(e) {
                            const {
                                slidesGrid: t,
                                params: s
                            } = e, i = e.rtlTranslate ? e.translate : -e.translate;
                            let n;
                            for (let r = 0; r < t.length; r += 1) "undefined" !== typeof t[r + 1] ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2 ? n = r : i >= t[r] && i < t[r + 1] && (n = r + 1) : i >= t[r] && (n = r);
                            return s.normalizeSlideIndex && (n < 0 || "undefined" === typeof n) && (n = 0), n
                        }(t)), i.indexOf(s) >= 0) o = i.indexOf(s);
                    else {
                        const e = Math.min(n.slidesPerGroupSkip, d);
                        o = e + Math.floor((d - e) / n.slidesPerGroup)
                    }
                    if (o >= i.length && (o = i.length - 1), d === r && !t.params.loop) return void(o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
                    if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
                    const p = t.grid && n.grid && n.grid.rows > 1;
                    let u;
                    if (t.virtual && n.virtual.enabled && n.loop) u = c(d);
                    else if (p) {
                        const e = t.slides.filter((e => e.column === d))[0];
                        let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                        Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / n.grid.rows)
                    } else if (t.slides[d]) {
                        const e = t.slides[d].getAttribute("data-swiper-slide-index");
                        u = e ? parseInt(e, 10) : d
                    } else u = d;
                    Object.assign(t, {
                        previousSnapIndex: l,
                        snapIndex: o,
                        previousRealIndex: a,
                        realIndex: u,
                        previousIndex: r,
                        activeIndex: d
                    }), t.initialized && v(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
                },
                updateClickedSlide: function(e, t) {
                    const s = this,
                        i = s.params;
                    let n = e.closest(`.${i.slideClass}, swiper-slide`);
                    !n && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                        !n && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (n = e)
                    }));
                    let r, a = !1;
                    if (n)
                        for (let l = 0; l < s.slides.length; l += 1)
                            if (s.slides[l] === n) {
                                a = !0, r = l;
                                break
                            }
                    if (!n || !a) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
                    s.clickedSlide = n, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
                }
            };
            var b = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: i,
                        wrapperEl: n
                    } = this;
                    if (t.virtualTranslate) return s ? -i : i;
                    if (t.cssMode) return i;
                    let a = (0, r.j)(n, e);
                    return a += this.cssOverflowAdjustment(), s && (a = -a), a || 0
                },
                setTranslate: function(e, t) {
                    const s = this,
                        {
                            rtlTranslate: i,
                            params: n,
                            wrapperEl: r,
                            progress: a
                        } = s;
                    let l, o = 0,
                        d = 0;
                    s.isHorizontal() ? o = i ? -e : e : d = e, n.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, n.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : n.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
                    const c = s.maxTranslate() - s.minTranslate();
                    l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, s, i, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
                    const a = this,
                        {
                            params: l,
                            wrapperEl: o
                        } = a;
                    if (a.animating && l.preventInteractionOnTransition) return !1;
                    const d = a.minTranslate(),
                        c = a.maxTranslate();
                    let p;
                    if (p = i && e > d ? d : i && e < c ? c : e, a.updateProgress(p), l.cssMode) {
                        const e = a.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -p;
                        else {
                            if (!a.support.smoothScroll) return (0, r.t)({
                                swiper: a,
                                targetPosition: -p,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -p,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(p), s && (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(p), s && (a.emit("beforeTransitionStart", t, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, a.animating = !1, s && a.emit("transitionEnd"))
                    }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function y(e) {
                let {
                    swiper: t,
                    runCallbacks: s,
                    direction: i,
                    step: n
                } = e;
                const {
                    activeIndex: r,
                    previousIndex: a
                } = t;
                let l = i;
                if (l || (l = r > a ? "next" : r < a ? "prev" : "reset"), t.emit(`transition${n}`), s && r !== a) {
                    if ("reset" === l) return void t.emit(`slideResetTransition${n}`);
                    t.emit(`slideChangeTransition${n}`), "next" === l ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
                }
            }
            var E = {
                slideTo: function(e, t, s, i, n) {
                    void 0 === e && (e = 0), void 0 === s && (s = !0), "string" === typeof e && (e = parseInt(e, 10));
                    const a = this;
                    let l = e;
                    l < 0 && (l = 0);
                    const {
                        params: o,
                        snapGrid: d,
                        slidesGrid: c,
                        previousIndex: p,
                        activeIndex: u,
                        rtlTranslate: f,
                        wrapperEl: m,
                        enabled: h
                    } = a;
                    if (!h && !i && !n || a.destroyed || a.animating && o.preventInteractionOnTransition) return !1;
                    "undefined" === typeof t && (t = a.params.speed);
                    const g = Math.min(a.params.slidesPerGroupSkip, l);
                    let v = g + Math.floor((l - g) / a.params.slidesPerGroup);
                    v >= d.length && (v = d.length - 1);
                    const w = -d[v];
                    if (o.normalizeSlideIndex)
                        for (let r = 0; r < c.length; r += 1) {
                            const e = -Math.floor(100 * w),
                                t = Math.floor(100 * c[r]),
                                s = Math.floor(100 * c[r + 1]);
                            "undefined" !== typeof c[r + 1] ? e >= t && e < s - (s - t) / 2 ? l = r : e >= t && e < s && (l = r + 1) : e >= t && (l = r)
                        }
                    if (a.initialized && l !== u) {
                        if (!a.allowSlideNext && (f ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate())) return !1;
                        if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (u || 0) !== l) return !1
                    }
                    let b;
                    l !== (p || 0) && s && a.emit("beforeSlideChangeStart"), a.updateProgress(w), b = l > u ? "next" : l < u ? "prev" : "reset";
                    const y = a.virtual && a.params.virtual.enabled;
                    if (!(y && n) && (f && -w === a.translate || !f && w === a.translate)) return a.updateActiveIndex(l), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(w), "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)), !1;
                    if (o.cssMode) {
                        const e = a.isHorizontal(),
                            s = f ? w : -w;
                        if (0 === t) y && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), y && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            m[e ? "scrollLeft" : "scrollTop"] = s
                        }))) : m[e ? "scrollLeft" : "scrollTop"] = s, y && requestAnimationFrame((() => {
                            a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                        }));
                        else {
                            if (!a.support.smoothScroll) return (0, r.t)({
                                swiper: a,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }), !0;
                            m.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return a.setTransition(t), a.setTranslate(w), a.updateActiveIndex(l), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, b), 0 === t ? a.transitionEnd(s, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, b))
                    }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e, t, s, i) {
                    if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" === typeof e) {
                        e = parseInt(e, 10)
                    }
                    const n = this;
                    if (n.destroyed) return;
                    "undefined" === typeof t && (t = n.params.speed);
                    const r = n.grid && n.params.grid && n.params.grid.rows > 1;
                    let a = e;
                    if (n.params.loop)
                        if (n.virtual && n.params.virtual.enabled) a += n.virtual.slidesBefore;
                        else {
                            let e;
                            if (r) {
                                const t = a * n.params.grid.rows;
                                e = n.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                            } else e = n.getSlideIndexByData(a);
                            const t = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
                                {
                                    centeredSlides: s
                                } = n.params;
                            let l = n.params.slidesPerView;
                            "auto" === l ? l = n.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(n.params.slidesPerView, 10)), s && l % 2 === 0 && (l += 1));
                            let o = t - e < l;
                            if (s && (o = o || e < Math.ceil(l / 2)), i && s && "auto" !== n.params.slidesPerView && !r && (o = !1), o) {
                                const i = s ? e < n.activeIndex ? "prev" : "next" : e - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                                n.loopFix({
                                    direction: i,
                                    slideTo: !0,
                                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                                    slideRealIndex: "next" === i ? n.realIndex : void 0
                                })
                            }
                            if (r) {
                                const e = a * n.params.grid.rows;
                                a = n.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                            } else a = n.getSlideIndexByData(a)
                        }
                    return requestAnimationFrame((() => {
                        n.slideTo(a, t, s, i)
                    })), n
                },
                slideNext: function(e, t, s) {
                    void 0 === t && (t = !0);
                    const i = this,
                        {
                            enabled: n,
                            params: r,
                            animating: a
                        } = i;
                    if (!n || i.destroyed) return i;
                    "undefined" === typeof e && (e = i.params.speed);
                    let l = r.slidesPerGroup;
                    "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                    const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l,
                        d = i.virtual && r.virtual.enabled;
                    if (r.loop) {
                        if (a && !d && r.loopPreventsSliding) return !1;
                        if (i.loopFix({
                                direction: "next"
                            }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => {
                            i.slideTo(i.activeIndex + o, e, t, s)
                        })), !0
                    }
                    return r.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s)
                },
                slidePrev: function(e, t, s) {
                    void 0 === t && (t = !0);
                    const i = this,
                        {
                            params: n,
                            snapGrid: r,
                            slidesGrid: a,
                            rtlTranslate: l,
                            enabled: o,
                            animating: d
                        } = i;
                    if (!o || i.destroyed) return i;
                    "undefined" === typeof e && (e = i.params.speed);
                    const c = i.virtual && n.virtual.enabled;
                    if (n.loop) {
                        if (d && !c && n.loopPreventsSliding) return !1;
                        i.loopFix({
                            direction: "prev"
                        }), i._clientLeft = i.wrapperEl.clientLeft
                    }

                    function p(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const u = p(l ? i.translate : -i.translate),
                        f = r.map((e => p(e)));
                    let m = r[f.indexOf(u) - 1];
                    if ("undefined" === typeof m && n.cssMode) {
                        let e;
                        r.forEach(((t, s) => {
                            u >= t && (e = s)
                        })), "undefined" !== typeof e && (m = r[e > 0 ? e - 1 : e])
                    }
                    let h = 0;
                    if ("undefined" !== typeof m && (h = a.indexOf(m), h < 0 && (h = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (h = h - i.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), n.rewind && i.isBeginning) {
                        const n = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                        return i.slideTo(n, e, t, s)
                    }
                    return n.loop && 0 === i.activeIndex && n.cssMode ? (requestAnimationFrame((() => {
                        i.slideTo(h, e, t, s)
                    })), !0) : i.slideTo(h, e, t, s)
                },
                slideReset: function(e, t, s) {
                    void 0 === t && (t = !0);
                    const i = this;
                    if (!i.destroyed) return "undefined" === typeof e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, s)
                },
                slideToClosest: function(e, t, s, i) {
                    void 0 === t && (t = !0), void 0 === i && (i = .5);
                    const n = this;
                    if (n.destroyed) return;
                    "undefined" === typeof e && (e = n.params.speed);
                    let r = n.activeIndex;
                    const a = Math.min(n.params.slidesPerGroupSkip, r),
                        l = a + Math.floor((r - a) / n.params.slidesPerGroup),
                        o = n.rtlTranslate ? n.translate : -n.translate;
                    if (o >= n.snapGrid[l]) {
                        const e = n.snapGrid[l];
                        o - e > (n.snapGrid[l + 1] - e) * i && (r += n.params.slidesPerGroup)
                    } else {
                        const e = n.snapGrid[l - 1];
                        o - e <= (n.snapGrid[l] - e) * i && (r -= n.params.slidesPerGroup)
                    }
                    return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, s)
                },
                slideToClickedSlide: function() {
                    const e = this;
                    if (e.destroyed) return;
                    const {
                        params: t,
                        slidesEl: s
                    } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let n, a = e.clickedIndex;
                    const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                    if (t.loop) {
                        if (e.animating) return;
                        n = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = e.getSlideIndex((0, r.e)(s, `${l}[data-swiper-slide-index="${n}"]`)[0]), (0, r.n)((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = e.getSlideIndex((0, r.e)(s, `${l}[data-swiper-slide-index="${n}"]`)[0]), (0, r.n)((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a)
                    } else e.slideTo(a)
                }
            };
            var S = {
                loopCreate: function(e) {
                    const t = this,
                        {
                            params: s,
                            slidesEl: i
                        } = t;
                    if (!s.loop || t.virtual && t.params.virtual.enabled) return;
                    const n = () => {
                            (0, r.e)(i, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }))
                        },
                        a = t.grid && s.grid && s.grid.rows > 1,
                        l = s.slidesPerGroup * (a ? s.grid.rows : 1),
                        o = t.slides.length % l !== 0,
                        d = a && t.slides.length % s.grid.rows !== 0,
                        c = e => {
                            for (let i = 0; i < e; i += 1) {
                                const e = t.isElement ? (0, r.c)("swiper-slide", [s.slideBlankClass]) : (0, r.c)("div", [s.slideClass, s.slideBlankClass]);
                                t.slidesEl.append(e)
                            }
                        };
                    if (o) {
                        if (s.loopAddBlankSlides) {
                            c(l - t.slides.length % l), t.recalcSlides(), t.updateSlides()
                        } else(0, r.u)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                        n()
                    } else if (d) {
                        if (s.loopAddBlankSlides) {
                            c(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides()
                        } else(0, r.u)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                        n()
                    } else n();
                    t.loopFix({
                        slideRealIndex: e,
                        direction: s.centeredSlides ? void 0 : "next"
                    })
                },
                loopFix: function(e) {
                    let {
                        slideRealIndex: t,
                        slideTo: s = !0,
                        direction: i,
                        setTranslate: n,
                        activeSlideIndex: a,
                        byController: l,
                        byMousewheel: o
                    } = void 0 === e ? {} : e;
                    const d = this;
                    if (!d.params.loop) return;
                    d.emit("beforeLoopFix");
                    const {
                        slides: c,
                        allowSlidePrev: p,
                        allowSlideNext: u,
                        slidesEl: f,
                        params: m
                    } = d, {
                        centeredSlides: h
                    } = m;
                    if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== d.snapIndex ? m.centeredSlides && d.snapIndex < m.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = u, void d.emit("loopFix");
                    let g = m.slidesPerView;
                    "auto" === g ? g = d.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(m.slidesPerView, 10)), h && g % 2 === 0 && (g += 1));
                    const v = m.slidesPerGroupAuto ? g : m.slidesPerGroup;
                    let w = v;
                    w % v !== 0 && (w += v - w % v), w += m.loopAdditionalSlides, d.loopedSlides = w;
                    const b = d.grid && m.grid && m.grid.rows > 1;
                    c.length < g + w ? (0, r.u)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && (0, r.u)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                    const y = [],
                        E = [];
                    let S = d.activeIndex;
                    "undefined" === typeof a ? a = d.getSlideIndex(c.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : S = a;
                    const T = "next" === i || !i,
                        x = "prev" === i || !i;
                    let M = 0,
                        C = 0;
                    const P = b ? Math.ceil(c.length / m.grid.rows) : c.length,
                        k = (b ? c[a].column : a) + (h && "undefined" === typeof n ? -g / 2 + .5 : 0);
                    if (k < w) {
                        M = Math.max(w - k, v);
                        for (let e = 0; e < w - k; e += 1) {
                            const t = e - Math.floor(e / P) * P;
                            if (b) {
                                const e = P - t - 1;
                                for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && y.push(t)
                            } else y.push(P - t - 1)
                        }
                    } else if (k + g > P - w) {
                        C = Math.max(k - (P - 2 * w), v);
                        for (let e = 0; e < C; e += 1) {
                            const t = e - Math.floor(e / P) * P;
                            b ? c.forEach(((e, s) => {
                                e.column === t && E.push(s)
                            })) : E.push(t)
                        }
                    }
                    if (d.__preventObserver__ = !0, requestAnimationFrame((() => {
                            d.__preventObserver__ = !1
                        })), x && y.forEach((e => {
                            c[e].swiperLoopMoveDOM = !0, f.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
                        })), T && E.forEach((e => {
                            c[e].swiperLoopMoveDOM = !0, f.append(c[e]), c[e].swiperLoopMoveDOM = !1
                        })), d.recalcSlides(), "auto" === m.slidesPerView ? d.updateSlides() : b && (y.length > 0 && x || E.length > 0 && T) && d.slides.forEach(((e, t) => {
                            d.grid.updateSlide(t, e, d.slides)
                        })), m.watchSlidesProgress && d.updateSlidesOffset(), s)
                        if (y.length > 0 && x) {
                            if ("undefined" === typeof t) {
                                const e = d.slidesGrid[S],
                                    t = d.slidesGrid[S + M] - e;
                                o ? d.setTranslate(d.translate - t) : (d.slideTo(S + Math.ceil(M), 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                            } else if (n) {
                                const e = b ? y.length / m.grid.rows : y.length;
                                d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                            }
                        } else if (E.length > 0 && T)
                        if ("undefined" === typeof t) {
                            const e = d.slidesGrid[S],
                                t = d.slidesGrid[S - C] - e;
                            o ? d.setTranslate(d.translate - t) : (d.slideTo(S - C, 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                        } else {
                            const e = b ? E.length / m.grid.rows : E.length;
                            d.slideTo(d.activeIndex - e, 0, !1, !0)
                        }
                    if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !l) {
                        const e = {
                            slideRealIndex: t,
                            direction: i,
                            setTranslate: n,
                            activeSlideIndex: a,
                            byController: !0
                        };
                        Array.isArray(d.controller.control) ? d.controller.control.forEach((t => {
                            !t.destroyed && t.params.loop && t.loopFix({ ...e,
                                slideTo: t.params.slidesPerView === m.slidesPerView && s
                            })
                        })) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({ ...e,
                            slideTo: d.controller.control.params.slidesPerView === m.slidesPerView && s
                        })
                    }
                    d.emit("loopFix")
                },
                loopDestroy: function() {
                    const e = this,
                        {
                            params: t,
                            slidesEl: s
                        } = e;
                    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                    e.recalcSlides();
                    const i = [];
                    e.slides.forEach((e => {
                        const t = "undefined" === typeof e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                        i[t] = e
                    })), e.slides.forEach((e => {
                        e.removeAttribute("data-swiper-slide-index")
                    })), i.forEach((e => {
                        s.append(e)
                    })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
                }
            };

            function T(e, t, s) {
                const i = (0, n.a)(),
                    {
                        params: r
                    } = e,
                    a = r.edgeSwipeDetection,
                    l = r.edgeSwipeThreshold;
                return !a || !(s <= l || s >= i.innerWidth - l) || "prevent" === a && (t.preventDefault(), !0)
            }

            function x(e) {
                const t = this,
                    s = (0, n.g)();
                let i = e;
                i.originalEvent && (i = i.originalEvent);
                const a = t.touchEventsData;
                if ("pointerdown" === i.type) {
                    if (null !== a.pointerId && a.pointerId !== i.pointerId) return;
                    a.pointerId = i.pointerId
                } else "touchstart" === i.type && 1 === i.targetTouches.length && (a.touchId = i.targetTouches[0].identifier);
                if ("touchstart" === i.type) return void T(t, i, i.targetTouches[0].pageX);
                const {
                    params: l,
                    touches: o,
                    enabled: d
                } = t;
                if (!d) return;
                if (!l.simulateTouch && "mouse" === i.pointerType) return;
                if (t.animating && l.preventInteractionOnTransition) return;
                !t.animating && l.cssMode && l.loop && t.loopFix();
                let c = i.target;
                if ("wrapper" === l.touchEventsTarget && !(0, r.v)(c, t.wrapperEl)) return;
                if ("which" in i && 3 === i.which) return;
                if ("button" in i && i.button > 0) return;
                if (a.isTouched && a.isMoved) return;
                const p = !!l.noSwipingClass && "" !== l.noSwipingClass,
                    u = i.composedPath ? i.composedPath() : i.path;
                p && i.target && i.target.shadowRoot && u && (c = u[0]);
                const f = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
                    m = !(!i.target || !i.target.shadowRoot);
                if (l.noSwiping && (m ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(s) {
                                if (!s || s === (0, n.g)() || s === (0, n.a)()) return null;
                                s.assignedSlot && (s = s.assignedSlot);
                                const i = s.closest(e);
                                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                            }(t)
                    }(f, c) : c.closest(f))) return void(t.allowClick = !0);
                if (l.swipeHandler && !c.closest(l.swipeHandler)) return;
                o.currentX = i.pageX, o.currentY = i.pageY;
                const h = o.currentX,
                    g = o.currentY;
                if (!T(t, i, h)) return;
                Object.assign(a, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), o.startX = h, o.startY = g, a.touchStartTime = (0, r.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (a.allowThresholdMove = !1);
                let v = !0;
                c.matches(a.focusableElements) && (v = !1, "SELECT" === c.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== c && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !c.matches(a.focusableElements)) && s.activeElement.blur();
                const w = v && t.allowTouchMove && l.touchStartPreventDefault;
                !l.touchStartForcePreventDefault && !w || c.isContentEditable || i.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
            }

            function M(e) {
                const t = (0, n.g)(),
                    s = this,
                    i = s.touchEventsData,
                    {
                        params: a,
                        touches: l,
                        rtlTranslate: o,
                        enabled: d
                    } = s;
                if (!d) return;
                if (!a.simulateTouch && "mouse" === e.pointerType) return;
                let c, p = e;
                if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
                    if (null !== i.touchId) return;
                    if (p.pointerId !== i.pointerId) return
                }
                if ("touchmove" === p.type) {
                    if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0], !c || c.identifier !== i.touchId) return
                } else c = p;
                if (!i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
                const u = c.pageX,
                    f = c.pageY;
                if (p.preventedByNestedSwiper) return l.startX = u, void(l.startY = f);
                if (!s.allowTouchMove) return p.target.matches(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(l, {
                    startX: u,
                    startY: f,
                    currentX: u,
                    currentY: f
                }), i.touchStartTime = (0, r.d)()));
                if (a.touchReleaseOnEdges && !a.loop)
                    if (s.isVertical()) {
                        if (f < l.startY && s.translate <= s.maxTranslate() || f > l.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (u < l.startX && s.translate <= s.maxTranslate() || u > l.startX && s.translate >= s.minTranslate()) return;
                if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== p.target && "mouse" !== p.pointerType && t.activeElement.blur(), t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
                i.allowTouchCallbacks && s.emit("touchMove", p), l.previousX = l.currentX, l.previousY = l.currentY, l.currentX = u, l.currentY = f;
                const m = l.currentX - l.startX,
                    h = l.currentY - l.startY;
                if (s.params.threshold && Math.sqrt(m ** 2 + h ** 2) < s.params.threshold) return;
                if ("undefined" === typeof i.isScrolling) {
                    let e;
                    s.isHorizontal() && l.currentY === l.startY || s.isVertical() && l.currentX === l.startX ? i.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
                }
                if (i.isScrolling && s.emit("touchMoveOpposite", p), "undefined" === typeof i.startMoving && (l.currentX === l.startX && l.currentY === l.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === p.type && i.preventTouchMoveFromPointerMove) return void(i.isTouched = !1);
                if (!i.startMoving) return;
                s.allowClick = !1, !a.cssMode && p.cancelable && p.preventDefault(), a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
                let g = s.isHorizontal() ? m : h,
                    v = s.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
                a.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1), v = Math.abs(v) * (o ? 1 : -1)), l.diff = g, g *= a.touchRatio, o && (g = -g, v = -v);
                const w = s.touchesDirection;
                s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
                const b = s.params.loop && !a.cssMode,
                    y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
                if (!i.isMoved) {
                    if (b && y && s.loopFix({
                            direction: s.swipeDirection
                        }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                        const e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                bySwiperTouchMove: !0
                            }
                        });
                        s.wrapperEl.dispatchEvent(e)
                    }
                    i.allowMomentumBounce = !1, !a.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)
                }
                if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1) return Object.assign(l, {
                    startX: u,
                    startY: f,
                    currentX: u,
                    currentY: f,
                    startTranslate: i.currentTranslate
                }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
                s.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
                let E = !0,
                    S = a.resistanceRatio;
                if (a.touchReleaseOnEdges && (S = 0), g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== a.slidesPerView && s.slides.length - a.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), i.currentTranslate > s.minTranslate() && (E = !1, a.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** S))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== a.slidesPerView && s.slides.length - a.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
                    }), i.currentTranslate < s.maxTranslate() && (E = !1, a.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** S))), E && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                    if (!(Math.abs(g) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, i.currentTranslate = i.startTranslate, void(l.diff = s.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
                }
                a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
            }

            function C(e) {
                const t = this,
                    s = t.touchEventsData;
                let i, n = e;
                n.originalEvent && (n = n.originalEvent);
                if ("touchend" === n.type || "touchcancel" === n.type) {
                    if (i = [...n.changedTouches].filter((e => e.identifier === s.touchId))[0], !i || i.identifier !== s.touchId) return
                } else {
                    if (null !== s.touchId) return;
                    if (n.pointerId !== s.pointerId) return;
                    i = n
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type)) {
                    if (!(["pointercancel", "contextmenu"].includes(n.type) && (t.browser.isSafari || t.browser.isWebView))) return
                }
                s.pointerId = null, s.touchId = null;
                const {
                    params: a,
                    touches: l,
                    rtlTranslate: o,
                    slidesGrid: d,
                    enabled: c
                } = t;
                if (!c) return;
                if (!a.simulateTouch && "mouse" === n.pointerType) return;
                if (s.allowTouchCallbacks && t.emit("touchEnd", n), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
                a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const p = (0, r.d)(),
                    u = p - s.touchStartTime;
                if (t.allowClick) {
                    const e = n.path || n.composedPath && n.composedPath();
                    t.updateClickedSlide(e && e[0] || n.target, e), t.emit("tap click", n), u < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", n)
                }
                if (s.lastClickTime = (0, r.d)(), (0, r.n)((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === l.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
                let f;
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, f = a.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
                if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: f
                });
                const m = f >= -t.maxTranslate() && !t.params.loop;
                let h = 0,
                    g = t.slidesSizesGrid[0];
                for (let r = 0; r < d.length; r += r < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                    const e = r < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                    "undefined" !== typeof d[r + e] ? (m || f >= d[r] && f < d[r + e]) && (h = r, g = d[r + e] - d[r]) : (m || f >= d[r]) && (h = r, g = d[d.length - 1] - d[d.length - 2])
                }
                let v = null,
                    w = null;
                a.rewind && (t.isBeginning ? w = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
                const b = (f - d[h]) / g,
                    y = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                if (u > a.longSwipesMs) {
                    if (!a.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (b >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? v : h + y) : t.slideTo(h)), "prev" === t.swipeDirection && (b > 1 - a.longSwipesRatio ? t.slideTo(h + y) : null !== w && b < 0 && Math.abs(b) > a.longSwipesRatio ? t.slideTo(w) : t.slideTo(h))
                } else {
                    if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (n.target === t.navigation.nextEl || n.target === t.navigation.prevEl) ? n.target === t.navigation.nextEl ? t.slideTo(h + y) : t.slideTo(h) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + y), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : h))
                }
            }

            function P() {
                const e = this,
                    {
                        params: t,
                        el: s
                    } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: i,
                    allowSlidePrev: n,
                    snapGrid: r
                } = e, a = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                const l = a && t.loop;
                !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }), 500)), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
            }

            function k(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function L() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: s,
                        enabled: i
                    } = e;
                if (!i) return;
                let n;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const r = e.maxTranslate() - e.minTranslate();
                n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }

            function O(e) {
                const t = this;
                h(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
            }

            function _() {
                const e = this;
                e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
            }
            const I = (e, t) => {
                const s = (0, n.g)(),
                    {
                        params: i,
                        el: r,
                        wrapperEl: a,
                        device: l
                    } = e,
                    o = !!i.nested,
                    d = "on" === t ? "addEventListener" : "removeEventListener",
                    c = t;
                r && "string" !== typeof r && (s[d]("touchstart", e.onDocumentTouchStart, {
                    passive: !1,
                    capture: o
                }), r[d]("touchstart", e.onTouchStart, {
                    passive: !1
                }), r[d]("pointerdown", e.onTouchStart, {
                    passive: !1
                }), s[d]("touchmove", e.onTouchMove, {
                    passive: !1,
                    capture: o
                }), s[d]("pointermove", e.onTouchMove, {
                    passive: !1,
                    capture: o
                }), s[d]("touchend", e.onTouchEnd, {
                    passive: !0
                }), s[d]("pointerup", e.onTouchEnd, {
                    passive: !0
                }), s[d]("pointercancel", e.onTouchEnd, {
                    passive: !0
                }), s[d]("touchcancel", e.onTouchEnd, {
                    passive: !0
                }), s[d]("pointerout", e.onTouchEnd, {
                    passive: !0
                }), s[d]("pointerleave", e.onTouchEnd, {
                    passive: !0
                }), s[d]("contextmenu", e.onTouchEnd, {
                    passive: !0
                }), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && a[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", P, !0) : e[c]("observerUpdate", P, !0), r[d]("load", e.onLoad, {
                    capture: !0
                }))
            };
            const A = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var D = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                swiperElementNodeName: "SWIPER-CONTAINER",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function z(e, t) {
                return function(s) {
                    void 0 === s && (s = {});
                    const i = Object.keys(s)[0],
                        n = s[i];
                    "object" === typeof n && null !== n ? (!0 === e[i] && (e[i] = {
                        enabled: !0
                    }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in n ? ("object" !== typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                        enabled: !1
                    }), (0, r.w)(t, s)) : (0, r.w)(t, s)) : (0, r.w)(t, s)
                }
            }
            const G = {
                    eventsEmitter: u,
                    update: w,
                    translate: b,
                    transition: {
                        setTransition: function(e, t) {
                            const s = this;
                            s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            const s = this,
                                {
                                    params: i
                                } = s;
                            i.cssMode || (i.autoHeight && s.updateAutoHeight(), y({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            const s = this,
                                {
                                    params: i
                                } = s;
                            s.animating = !1, i.cssMode || (s.setTransition(0), y({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: E,
                    loop: S,
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                                t.__preventObserver__ = !1
                            }))
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                                e.__preventObserver__ = !1
                            })))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            const e = this,
                                {
                                    params: t
                                } = e;
                            e.onTouchStart = x.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = C.bind(e), e.onDocumentTouchStart = _.bind(e), t.cssMode && (e.onScroll = L.bind(e)), e.onClick = k.bind(e), e.onLoad = O.bind(e), I(e, "on")
                        },
                        detachEvents: function() {
                            I(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            const e = this,
                                {
                                    realIndex: t,
                                    initialized: s,
                                    params: i,
                                    el: n
                                } = e,
                                a = i.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            const o = (l in a ? a[l] : void 0) || e.originalParams,
                                d = A(e, i),
                                c = A(e, o),
                                p = e.params.grabCursor,
                                u = o.grabCursor,
                                f = i.enabled;
                            d && !c ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (n.classList.add(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && n.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), p && !u ? e.unsetGrabCursor() : !p && u && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                                if ("undefined" === typeof o[t]) return;
                                const s = i[t] && i[t].enabled,
                                    n = o[t] && o[t].enabled;
                                s && !n && e[t].disable(), !s && n && e[t].enable()
                            }));
                            const m = o.direction && o.direction !== i.direction,
                                h = i.loop && (o.slidesPerView !== i.slidesPerView || m),
                                g = i.loop;
                            m && s && e.changeDirection(), (0, r.w)(e.params, o);
                            const v = e.params.enabled,
                                w = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), f && !v ? e.disable() : !f && v && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), s && (h ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !g && w ? (e.loopCreate(t), e.updateSlides()) : g && !w && e.loopDestroy()), e.emit("breakpoint", o)
                        },
                        getBreakpoint: function(e, t, s) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                            let i = !1;
                            const r = (0, n.a)(),
                                a = "window" === t ? r.innerHeight : s.clientHeight,
                                l = Object.keys(e).map((e => {
                                    if ("string" === typeof e && 0 === e.indexOf("@")) {
                                        const t = parseFloat(e.substr(1));
                                        return {
                                            value: a * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                }));
                            l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                            for (let n = 0; n < l.length; n += 1) {
                                const {
                                    point: e,
                                    value: a
                                } = l[n];
                                "window" === t ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = e) : a <= s.clientWidth && (i = e)
                            }
                            return i || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: s
                                } = e,
                                {
                                    slidesOffsetBefore: i
                                } = s;
                            if (i) {
                                const t = e.slides.length - 1,
                                    s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                                e.isLocked = e.size > s
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            const e = this,
                                {
                                    classNames: t,
                                    params: s,
                                    rtl: i,
                                    el: n,
                                    device: r
                                } = e,
                                a = function(e, t) {
                                    const s = [];
                                    return e.forEach((e => {
                                        "object" === typeof e ? Object.keys(e).forEach((i => {
                                            e[i] && s.push(t + i)
                                        })) : "string" === typeof e && s.push(t + e)
                                    })), s
                                }(["initialized", s.direction, {
                                    "free-mode": e.params.freeMode && s.freeMode.enabled
                                }, {
                                    autoheight: s.autoHeight
                                }, {
                                    rtl: i
                                }, {
                                    grid: s.grid && s.grid.rows > 1
                                }, {
                                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                                }, {
                                    android: r.android
                                }, {
                                    ios: r.ios
                                }, {
                                    "css-mode": s.cssMode
                                }, {
                                    centered: s.cssMode && s.centeredSlides
                                }, {
                                    "watch-progress": s.watchSlidesProgress
                                }], s.containerModifierClass);
                            t.push(...a), n.classList.add(...t), e.emitContainerClasses()
                        },
                        removeClasses: function() {
                            const {
                                el: e,
                                classNames: t
                            } = this;
                            e && "string" !== typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                        }
                    }
                },
                N = {};
            class B {
                constructor() {
                    let e, t;
                    for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
                    1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = (0, r.w)({}, t), e && !t.el && (t.el = e);
                    const l = (0, n.g)();
                    if (t.el && "string" === typeof t.el && l.querySelectorAll(t.el).length > 1) {
                        const e = [];
                        return l.querySelectorAll(t.el).forEach((s => {
                            const i = (0, r.w)({}, t, {
                                el: s
                            });
                            e.push(new B(i))
                        })), e
                    }
                    const o = this;
                    o.__swiper__ = !0, o.support = d(), o.device = c({
                        userAgent: t.userAgent
                    }), o.browser = p(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
                    const u = {};
                    o.modules.forEach((e => {
                        e({
                            params: t,
                            swiper: o,
                            extendParams: z(t, u),
                            on: o.on.bind(o),
                            once: o.once.bind(o),
                            off: o.off.bind(o),
                            emit: o.emit.bind(o)
                        })
                    }));
                    const f = (0, r.w)({}, D, u);
                    return o.params = (0, r.w)({}, f, N, t), o.originalParams = (0, r.w)({}, o.params), o.passedParams = (0, r.w)({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach((e => {
                        o.on(e, o.params.on[e])
                    })), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
                        enabled: o.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === o.params.direction,
                        isVertical: () => "vertical" === o.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                        },
                        allowSlideNext: o.params.allowSlideNext,
                        allowSlidePrev: o.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: o.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: o.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), o.emit("_swiper"), o.params.init && o.init(), o
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[e]
                }
                getSlideIndex(e) {
                    const {
                        slidesEl: t,
                        params: s
                    } = this, i = (0, r.e)(t, `.${s.slideClass}, swiper-slide`), n = (0, r.h)(i[0]);
                    return (0, r.h)(e) - n
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
                }
                recalcSlides() {
                    const {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, r.e)(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const s = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const i = s.minTranslate(),
                        n = (s.maxTranslate() - i) * e + i;
                    s.translateTo(n, "undefined" === typeof t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.forEach((s => {
                        const i = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: i
                        }), e.emit("_slideClass", s, i)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const {
                        params: s,
                        slides: i,
                        slidesGrid: n,
                        slidesSizesGrid: r,
                        size: a,
                        activeIndex: l
                    } = this;
                    let o = 1;
                    if ("number" === typeof s.slidesPerView) return s.slidesPerView;
                    if (s.centeredSlides) {
                        let e, t = i[l] ? Math.ceil(i[l].swiperSlideSize) : 0;
                        for (let s = l + 1; s < i.length; s += 1) i[s] && !e && (t += Math.ceil(i[s].swiperSlideSize), o += 1, t > a && (e = !0));
                        for (let s = l - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let d = l + 1; d < i.length; d += 1) {
                            (t ? n[d] + r[d] - n[l] < a : n[d] - n[l] < a) && (o += 1)
                        } else
                            for (let d = l - 1; d >= 0; d -= 1) {
                                n[l] - n[d] < a && (o += 1)
                            }
                    return o
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: s
                    } = e;

                    function i() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let n;
                    if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                            t.complete && h(e, t)
                        })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight();
                    else {
                        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                            const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                            n = e.slideTo(t.length - 1, 0, !1, !0)
                        } else n = e.slideTo(e.activeIndex, 0, !1, !0);
                        n || i()
                    }
                    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const s = this,
                        i = s.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), s.emit("changeDirection"), t && s.update()), s
                }
                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    let s = e || t.params.el;
                    if ("string" === typeof s && (s = document.querySelector(s)), !s) return !1;
                    s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                    const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                    let n = (() => {
                        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                            return s.shadowRoot.querySelector(i())
                        }
                        return (0, r.e)(s, i())[0]
                    })();
                    return !n && t.params.createElements && (n = (0, r.c)("div", t.params.wrapperClass), s.append(n), (0, r.e)(s, `.${t.params.slideClass}`).forEach((e => {
                        n.append(e)
                    }))), Object.assign(t, {
                        el: s,
                        wrapperEl: n,
                        slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : n,
                        hostEl: t.isElement ? s.parentNode.host : s,
                        mounted: !0,
                        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === (0, r.p)(s, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === (0, r.p)(s, "direction")),
                        wrongRTL: "-webkit-box" === (0, r.p)(n, "display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    if (!1 === t.mount(e)) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    const s = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
                        e.complete ? h(t, e) : e.addEventListener("load", (e => {
                            h(t, e.target)
                        }))
                    })), v(t), t.initialized = !0, v(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const s = this,
                        {
                            params: i,
                            el: n,
                            wrapperEl: a,
                            slides: l
                        } = s;
                    return "undefined" === typeof s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), n && "string" !== typeof n && n.removeAttribute("style"), a && a.removeAttribute("style"), l && l.length && l.forEach((e => {
                        e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                        s.off(e)
                    })), !1 !== e && (s.el && "string" !== typeof s.el && (s.el.swiper = null), (0, r.x)(s)), s.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, r.w)(N, e)
                }
                static get extendedDefaults() {
                    return N
                }
                static get defaults() {
                    return D
                }
                static installModule(e) {
                    B.prototype.__modules__ || (B.prototype.__modules__ = []);
                    const t = B.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => B.installModule(e))), B) : (B.installModule(e), B)
                }
            }
            Object.keys(G).forEach((e => {
                Object.keys(G[e]).forEach((t => {
                    B.prototype[t] = G[e][t]
                }))
            })), B.use([function(e) {
                let {
                    swiper: t,
                    on: s,
                    emit: i
                } = e;
                const r = (0, n.a)();
                let a = null,
                    l = null;
                const o = () => {
                        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
                    },
                    d = () => {
                        t && !t.destroyed && t.initialized && i("orientationchange")
                    };
                s("init", (() => {
                    t.params.resizeObserver && "undefined" !== typeof r.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
                        l = r.requestAnimationFrame((() => {
                            const {
                                width: s,
                                height: i
                            } = t;
                            let n = s,
                                r = i;
                            e.forEach((e => {
                                let {
                                    contentBoxSize: s,
                                    contentRect: i,
                                    target: a
                                } = e;
                                a && a !== t.el || (n = i ? i.width : (s[0] || s).inlineSize, r = i ? i.height : (s[0] || s).blockSize)
                            })), n === s && r === i || o()
                        }))
                    })), a.observe(t.el)) : (r.addEventListener("resize", o), r.addEventListener("orientationchange", d))
                })), s("destroy", (() => {
                    l && r.cancelAnimationFrame(l), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", d)
                }))
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: a
                } = e;
                const l = [],
                    o = (0, n.a)(),
                    d = function(e, s) {
                        void 0 === s && (s = {});
                        const i = new(o.MutationObserver || o.WebkitMutationObserver)((e => {
                            if (t.__preventObserver__) return;
                            if (1 === e.length) return void a("observerUpdate", e[0]);
                            const s = function() {
                                a("observerUpdate", e[0])
                            };
                            o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0)
                        }));
                        i.observe(e, {
                            attributes: "undefined" === typeof s.attributes || s.attributes,
                            childList: t.isElement || ("undefined" === typeof s.childList || s).childList,
                            characterData: "undefined" === typeof s.characterData || s.characterData
                        }), l.push(i)
                    };
                s({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", (() => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = (0, r.a)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) d(e[t])
                        }
                        d(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), d(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                })), i("destroy", (() => {
                    l.forEach((e => {
                        e.disconnect()
                    })), l.splice(0, l.length)
                }))
            }]);
            const V = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function R(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function $(e, t) {
                const s = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : R(t[s]) && R(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : $(e[s], t[s]) : e[s] = t[s]
                }))
            }

            function j(e) {
                return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function F(e) {
                return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
            }

            function H(e) {
                return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function q(e) {
                void 0 === e && (e = "");
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    s = [];
                return t.forEach((e => {
                    s.indexOf(e) < 0 && s.push(e)
                })), s.join(" ")
            }

            function W(e) {
                return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
            }

            function Y() {
                return Y = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }, Y.apply(this, arguments)
            }

            function X(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function U(e) {
                const t = [];
                return i.Children.toArray(e).forEach((e => {
                    X(e) ? t.push(e) : e.props && e.props.children && U(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function K(e) {
                const t = [],
                    s = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return i.Children.toArray(e).forEach((e => {
                    if (X(e)) t.push(e);
                    else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const i = U(e.props.children);
                        i.length > 0 ? i.forEach((e => t.push(e))) : s["container-end"].push(e)
                    } else s["container-end"].push(e)
                })), {
                    slides: t,
                    slots: s
                }
            }

            function Z(e, t) {
                return "undefined" === typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
            }
            const J = (0, i.createContext)(null),
                Q = (0, i.createContext)(null),
                ee = (0, i.forwardRef)((function(e, t) {
                    let {
                        className: s,
                        tag: n = "div",
                        wrapperTag: r = "div",
                        children: a,
                        onSwiper: l,
                        ...o
                    } = void 0 === e ? {} : e, d = !1;
                    const [c, p] = (0, i.useState)("swiper"), [u, f] = (0, i.useState)(null), [m, h] = (0, i.useState)(!1), g = (0, i.useRef)(!1), v = (0, i.useRef)(null), w = (0, i.useRef)(null), b = (0, i.useRef)(null), y = (0, i.useRef)(null), E = (0, i.useRef)(null), S = (0, i.useRef)(null), T = (0, i.useRef)(null), x = (0, i.useRef)(null), {
                        params: M,
                        passedParams: C,
                        rest: P,
                        events: k
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        const s = {
                                on: {}
                            },
                            i = {},
                            n = {};
                        $(s, D), s._emitClasses = !0, s.init = !1;
                        const r = {},
                            a = V.map((e => e.replace(/_/, ""))),
                            l = Object.assign({}, e);
                        return Object.keys(l).forEach((l => {
                            "undefined" !== typeof e[l] && (a.indexOf(l) >= 0 ? R(e[l]) ? (s[l] = {}, n[l] = {}, $(s[l], e[l]), $(n[l], e[l])) : (s[l] = e[l], n[l] = e[l]) : 0 === l.search(/on[A-Z]/) && "function" === typeof e[l] ? t ? i[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : s.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : r[l] = e[l])
                        })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                            !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
                        })), {
                            params: s,
                            passedParams: n,
                            rest: r,
                            events: i
                        }
                    }(o), {
                        slides: L,
                        slots: O
                    } = K(a), _ = () => {
                        h(!m)
                    };
                    Object.assign(M.on, {
                        _containerClasses(e, t) {
                            p(t)
                        }
                    });
                    const I = () => {
                        Object.assign(M.on, k), d = !0;
                        const e = { ...M
                        };
                        if (delete e.wrapperClass, w.current = new B(e), w.current.virtual && w.current.params.virtual.enabled) {
                            w.current.virtual.slides = L;
                            const e = {
                                cache: !1,
                                slides: L,
                                renderExternal: f,
                                renderExternalUpdate: !1
                            };
                            $(w.current.params.virtual, e), $(w.current.originalParams.virtual, e)
                        }
                    };
                    v.current || I(), w.current && w.current.on("_beforeBreakpoint", _);
                    return (0, i.useEffect)((() => () => {
                        w.current && w.current.off("_beforeBreakpoint", _)
                    })), (0, i.useEffect)((() => {
                        !g.current && w.current && (w.current.emitSlidesClasses(), g.current = !0)
                    })), Z((() => {
                        if (t && (t.current = v.current), v.current) return w.current.destroyed && I(),
                            function(e, t) {
                                let {
                                    el: s,
                                    nextEl: i,
                                    prevEl: n,
                                    paginationEl: r,
                                    scrollbarEl: a,
                                    swiper: l
                                } = e;
                                j(t) && i && n && (l.params.navigation.nextEl = i, l.originalParams.navigation.nextEl = i, l.params.navigation.prevEl = n, l.originalParams.navigation.prevEl = n), F(t) && r && (l.params.pagination.el = r, l.originalParams.pagination.el = r), H(t) && a && (l.params.scrollbar.el = a, l.originalParams.scrollbar.el = a), l.init(s)
                            }({
                                el: v.current,
                                nextEl: E.current,
                                prevEl: S.current,
                                paginationEl: T.current,
                                scrollbarEl: x.current,
                                swiper: w.current
                            }, M), l && !w.current.destroyed && l(w.current), () => {
                                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
                            }
                    }), []), Z((() => {
                        !d && k && w.current && Object.keys(k).forEach((e => {
                            w.current.on(e, k[e])
                        }));
                        const e = function(e, t, s, i, n) {
                            const r = [];
                            if (!t) return r;
                            const a = e => {
                                r.indexOf(e) < 0 && r.push(e)
                            };
                            if (s && i) {
                                const e = i.map(n),
                                    t = s.map(n);
                                e.join("") !== t.join("") && a("children"), i.length !== s.length && a("children")
                            }
                            return V.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                                if (s in e && s in t)
                                    if (R(e[s]) && R(t[s])) {
                                        const i = Object.keys(e[s]),
                                            n = Object.keys(t[s]);
                                        i.length !== n.length ? a(s) : (i.forEach((i => {
                                            e[s][i] !== t[s][i] && a(s)
                                        })), n.forEach((i => {
                                            e[s][i] !== t[s][i] && a(s)
                                        })))
                                    } else e[s] !== t[s] && a(s)
                            })), r
                        }(C, b.current, L, y.current, (e => e.key));
                        return b.current = C, y.current = L, e.length && w.current && !w.current.destroyed && function(e) {
                            let {
                                swiper: t,
                                slides: s,
                                passedParams: i,
                                changedParams: n,
                                nextEl: r,
                                prevEl: a,
                                scrollbarEl: l,
                                paginationEl: o
                            } = e;
                            const d = n.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                                {
                                    params: c,
                                    pagination: p,
                                    navigation: u,
                                    scrollbar: f,
                                    virtual: m,
                                    thumbs: h
                                } = t;
                            let g, v, w, b, y, E, S, T;
                            n.includes("thumbs") && i.thumbs && i.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (g = !0), n.includes("controller") && i.controller && i.controller.control && c.controller && !c.controller.control && (v = !0), n.includes("pagination") && i.pagination && (i.pagination.el || o) && (c.pagination || !1 === c.pagination) && p && !p.el && (w = !0), n.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (b = !0), n.includes("navigation") && i.navigation && (i.navigation.prevEl || a) && (i.navigation.nextEl || r) && (c.navigation || !1 === c.navigation) && u && !u.prevEl && !u.nextEl && (y = !0);
                            const x = e => {
                                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
                            };
                            n.includes("loop") && t.isElement && (c.loop && !i.loop ? E = !0 : !c.loop && i.loop ? S = !0 : T = !0), d.forEach((e => {
                                if (R(c[e]) && R(i[e])) Object.assign(c[e], i[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in i[e]) || i[e].enabled || x(e);
                                else {
                                    const t = i[e];
                                    !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = i[e] : !1 === t && x(e)
                                }
                            })), d.includes("controller") && !v && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), n.includes("children") && s && m && c.virtual.enabled ? (m.slides = s, m.update(!0)) : n.includes("virtual") && m && c.virtual.enabled && (s && (m.slides = s), m.update(!0)), n.includes("children") && s && c.loop && (T = !0), g && h.init() && h.update(!0);
                            v && (t.controller.control = c.controller.control), w && (!t.isElement || o && "string" !== typeof o || (o = document.createElement("div"), o.classList.add("swiper-pagination"), o.part.add("pagination"), t.el.appendChild(o)), o && (c.pagination.el = o), p.init(), p.render(), p.update()), b && (!t.isElement || l && "string" !== typeof l || (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (c.scrollbar.el = l), f.init(), f.updateSize(), f.setTranslate()), y && (t.isElement && (r && "string" !== typeof r || (r = document.createElement("div"), r.classList.add("swiper-button-next"), r.innerHTML = t.hostEl.constructor.nextButtonSvg, r.part.add("button-next"), t.el.appendChild(r)), a && "string" !== typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), a.innerHTML = t.hostEl.constructor.prevButtonSvg, a.part.add("button-prev"), t.el.appendChild(a))), r && (c.navigation.nextEl = r), a && (c.navigation.prevEl = a), u.init(), u.update()), n.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), n.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), n.includes("direction") && t.changeDirection(i.direction, !1), (E || T) && t.loopDestroy(), (S || T) && t.loopCreate(), t.update()
                        }({
                            swiper: w.current,
                            slides: L,
                            passedParams: C,
                            changedParams: e,
                            nextEl: E.current,
                            prevEl: S.current,
                            scrollbarEl: x.current,
                            paginationEl: T.current
                        }), () => {
                            k && w.current && Object.keys(k).forEach((e => {
                                w.current.off(e, k[e])
                            }))
                        }
                    })), Z((() => {
                        var e;
                        !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                    }), [u]), i.createElement(n, Y({
                        ref: v,
                        className: q(`${c}${s?` ${s}`:""}`)
                    }, P), i.createElement(Q.Provider, {
                        value: w.current
                    }, O["container-start"], i.createElement(r, {
                        className: W(M.wrapperClass)
                    }, O["wrapper-start"], M.virtual ? function(e, t, s) {
                        if (!s) return null;
                        const n = e => {
                                let s = e;
                                return e < 0 ? s = t.length + e : s >= t.length && (s -= t.length), s
                            },
                            r = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
                            } : {
                                top: `${s.offset}px`
                            },
                            {
                                from: a,
                                to: l
                            } = s,
                            o = e.params.loop ? -t.length : 0,
                            d = e.params.loop ? 2 * t.length : t.length,
                            c = [];
                        for (let i = o; i < d; i += 1) i >= a && i <= l && c.push(t[n(i)]);
                        return c.map(((t, s) => i.cloneElement(t, {
                            swiper: e,
                            style: r,
                            key: t.props.virtualIndex || t.key || `slide-${s}`
                        })))
                    }(w.current, L, u) : L.map(((e, t) => i.cloneElement(e, {
                        swiper: w.current,
                        swiperSlideIndex: t
                    }))), O["wrapper-end"]), j(M) && i.createElement(i.Fragment, null, i.createElement("div", {
                        ref: S,
                        className: "swiper-button-prev"
                    }), i.createElement("div", {
                        ref: E,
                        className: "swiper-button-next"
                    })), H(M) && i.createElement("div", {
                        ref: x,
                        className: "swiper-scrollbar"
                    }), F(M) && i.createElement("div", {
                        ref: T,
                        className: "swiper-pagination"
                    }), O["container-end"]))
                }));
            ee.displayName = "Swiper";
            const te = (0, i.forwardRef)((function(e, t) {
                let {
                    tag: s = "div",
                    children: n,
                    className: r = "",
                    swiper: a,
                    zoom: l,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: c,
                    ...p
                } = void 0 === e ? {} : e;
                const u = (0, i.useRef)(null),
                    [f, m] = (0, i.useState)("swiper-slide"),
                    [h, g] = (0, i.useState)(!1);

                function v(e, t, s) {
                    t === u.current && m(s)
                }
                Z((() => {
                    if ("undefined" !== typeof c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && a) {
                        if (!a.destroyed) return a.on("_slideClass", v), () => {
                            a && a.off("_slideClass", v)
                        };
                        "swiper-slide" !== f && m("swiper-slide")
                    }
                })), Z((() => {
                    a && u.current && !a.destroyed && m(a.getSlideClasses(u.current))
                }), [a]);
                const w = {
                        isActive: f.indexOf("swiper-slide-active") >= 0,
                        isVisible: f.indexOf("swiper-slide-visible") >= 0,
                        isPrev: f.indexOf("swiper-slide-prev") >= 0,
                        isNext: f.indexOf("swiper-slide-next") >= 0
                    },
                    b = () => "function" === typeof n ? n(w) : n;
                return i.createElement(s, Y({
                    ref: u,
                    className: q(`${f}${r?` ${r}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: () => {
                        g(!0)
                    }
                }, p), l && i.createElement(J.Provider, {
                    value: w
                }, i.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof l ? l : void 0
                }, b(), o && !h && i.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !l && i.createElement(J.Provider, {
                    value: w
                }, b(), o && !h && i.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            }));
            te.displayName = "SwiperSlide"
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-vendor-swiper.0dba31409f0c2d7ea9e7.js.map