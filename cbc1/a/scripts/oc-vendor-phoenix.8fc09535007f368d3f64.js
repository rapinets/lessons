! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cfa6af9e-f1f2-412b-ae57-58439fedf3a3", e._sentryDebugIdIdentifier = "sentry-dbid-cfa6af9e-f1f2-412b-ae57-58439fedf3a3")
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
    [1889], {
        82511: (e, t, i) => {
            i.r(t), i.d(t, {
                ad_ui_overlay: () => s,
                audio_ui: () => d,
                video_ui: () => g
            });
            var n = i(41632),
                a = i(97456),
                o = i(51329);
            const r = (() => {
                    let e = null;
                    return {
                        getAdInfo: () => e,
                        setAdInfo: t => {
                            e = t
                        },
                        clear: () => {
                            e = null
                        }
                    }
                })(),
                s = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.playerStatus = null, this.isAdShowing = !1, this.isClientSideAdvertising = !1, this.adInfo = null, this.adCurrentTime = null, this.locale = (0, o.L)(), this.onObserverUpdate = e => {
                            var t;
                            if (e.status.to !== (null === (t = this.playerStatus) || void 0 === t ? void 0 : t.to)) {
                                switch (e.status.to) {
                                    case a.S.ADVERTISING:
                                    case a.S.ADVERTISING_PAUSED:
                                        this.isAdShowing = !0, this.isClientSideAdvertising = e.isClientSideAdvertising;
                                        break;
                                    default:
                                        this.isAdShowing = !1
                                }
                                this.playerStatus = e.status
                            }
                        }, this.onAdStarted = e => {
                            this.isClientSideAdvertising && (r.setAdInfo(e), this.adInfo = e)
                        }, this.onAdRemainingTimeUpdate = e => {
                            this.adCurrentTime = e
                        }, this.onAdError = () => {
                            this.isAdShowing = !1
                        }, this.renderAdCurrentTime = () => {
                            if (!(null === this.adCurrentTime || this.adCurrentTime < 0)) return (0, a.g)(this.adCurrentTime)
                        }, this.renderPlaybackText = () => {
                            const e = this.isClientSideAdvertising ? this.locale.adInProgress : this.locale.advertisement;
                            return (0, n.h)("span", {
                                class: "playback-text"
                            }, e)
                        }, this.renderAdPositionText = () => {
                            if (!this.isClientSideAdvertising || !this.renderAdCurrentTime() || !this.adInfo) return;
                            const e = `${this.locale.ad} ${this.adInfo.position} ${this.locale.of} ${this.adInfo.totalAds}: (${this.renderAdCurrentTime()}) `;
                            return (0, n.h)("span", {
                                class: "ad-position-text"
                            }, e)
                        }
                    }
                    connectedCallback() {
                        this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate), this.publicAPI.on(a.E.AD_STARTED, this.onAdStarted), this.publicAPI.on(a.E.AD_ERRORED, this.onAdError), this.publicAPI.on(a.E.AD_REMAINING_TIME_UPDATED, this.onAdRemainingTimeUpdate), this.adInfo = r.getAdInfo()
                    }
                    disconnectedCallback() {
                        this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate), this.publicAPI.off(a.E.AD_STARTED, this.onAdStarted), this.publicAPI.off(a.E.AD_ERRORED, this.onAdError), this.publicAPI.off(a.E.AD_REMAINING_TIME_UPDATED, this.onAdRemainingTimeUpdate)
                    }
                    render() {
                        const e = this.isAdShowing ? "" : " hidden";
                        return (0, n.h)("div", {
                            key: "6dfad04241d8b3743b4ce637875ac286767c7f60",
                            class: `phx-ad-ui-overlay${e}`
                        }, this.renderAdPositionText(), this.renderPlaybackText())
                    }
                };
            s.style = ".phoenix-player .phoenix-ad-ui .phx-ad-ui-overlay{position:absolute;top:0;left:0;width:100%;box-sizing:border-box;padding:0 4px;height:24px;line-height:24px;z-index:1;font-size:12px;color:#FFF;background-color:rgba(0, 0, 0, 0.5)}.phoenix-player .phoenix-ad-ui .phx-ad-ui-overlay.hidden{display:none}";
            const l = "https://www.cbc.ca/a/images/default_thumbnail.jpg",
                d = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.showName = "", this.chapterThumbnail = "", this.isClientSideAdvertising = !1, this.locale = (0, o.L)(), this.setMediaThumbnail = () => {
                            var e, t, i;
                            this.mediaThumbnail = encodeURI(null !== (i = null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.thumbnail) && void 0 !== i ? i : l)
                        }, this.onObserverUpdate = e => {
                            this.isClientSideAdvertising = e.isClientSideAdvertising
                        }, this.onChapterStart = e => {
                            var t, i;
                            this.showName = (null === e || void 0 === e ? void 0 : e.show) || (null === (i = null === (t = this.publicAPI) || void 0 === t ? void 0 : t.mediaData) || void 0 === i ? void 0 : i.showName), this.chapterThumbnail = encodeURI(null === e || void 0 === e ? void 0 : e.thumbnail) || l
                        }
                    }
                    componentWillLoad() {
                        var e, t;
                        this.setMediaThumbnail(), this.showName || (this.showName = null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.showName)
                    }
                    connectedCallback() {
                        this.publicAPI.on(a.E.CHAPTER_START, this.onChapterStart), this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                    }
                    disconnectedCallback() {
                        this.publicAPI.off(a.E.CHAPTER_START, this.onChapterStart), this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                    }
                    WatchpublicApiChange() {
                        this.setMediaThumbnail()
                    }
                    render() {
                        var e, t;
                        if ("audio" !== (null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.format)) return null;
                        const {
                            title: i
                        } = this.publicAPI.mediaData, a = this.chapterThumbnail || this.mediaThumbnail;
                        let o = this.showName,
                            r = "";
                        return this.isClientSideAdvertising && (o = this.locale.advertisement, r = " advertising"), (0, n.h)("div", {
                            class: "phx-audio-ui",
                            "aria-label": "audio player"
                        }, (0, n.h)("div", {
                            class: "audio-ui-inner"
                        }, (0, n.h)("div", {
                            class: "primary-controls-and-metadata"
                        }, (0, n.h)("div", {
                            class: `primary-controls${r}`
                        }, (0, n.h)("skip-back-btn", {
                            publicAPI: this.publicAPI
                        }), (0, n.h)("play-pause-stop-btn", {
                            publicAPI: this.publicAPI
                        }), (0, n.h)("skip-forward-btn", {
                            publicAPI: this.publicAPI
                        })), (0, n.h)("div", {
                            class: "thumbnail-metadata"
                        }, (0, n.h)("div", {
                            class: "audio-ui-thumbnail-wrapper"
                        }, (0, n.h)("img", {
                            src: a,
                            alt: ""
                        })), (0, n.h)("div", {
                            class: "audio-ui-metadata"
                        }, (0, n.h)("div", {
                            id: "media-metadata-audio",
                            class: r,
                            title: i
                        }, (0, n.h)("p", {
                            class: "phoenix-showname"
                        }, o), (0, n.h)("p", {
                            class: "phoenix-title"
                        }, i))))), (0, n.h)("div", {
                            class: "secondary-controls"
                        }, (0, n.h)("div", {
                            class: "audio-seekbar-wrapper"
                        }, (0, n.h)("seek-bar", {
                            publicAPI: this.publicAPI
                        })), (0, n.h)("div", {
                            class: "time-metadata"
                        }, this.publicAPI.mediaData.isLive ? (0, n.h)("span", null, "Live") : (0, n.h)(n.F, null, (0, n.h)("currenttime-metadata", {
                            publicAPI: this.publicAPI
                        }), (0, n.h)("duration-metadata", {
                            publicAPI: this.publicAPI
                        }))), (0, n.h)("div", {
                            class: "volume-controls-container"
                        }, (0, n.h)("volume-controls", {
                            publicAPI: this.publicAPI
                        })))), (0, n.h)("error-overlay", {
                            publicAPI: this.publicAPI
                        }))
                    }
                    static get watchers() {
                        return {
                            publicAPI: ["WatchpublicApiChange"]
                        }
                    }
                };
            d.style = '.phoenix-player .phx-audio-ui{width:100%;height:100%;background-color:#FFFFFF}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata{display:flex;flex-wrap:wrap}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls{flex:0 0 auto;margin:20px}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-skip-back-btn,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-skip-forward-btn,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-play-btn,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-stop-btn,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-pause-btn{cursor:pointer;border:none;vertical-align:middle;padding:0;background:transparent}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-skip-back-btn:focus,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-skip-forward-btn:focus,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-play-btn:focus,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-stop-btn:focus,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-pause-btn:focus{outline-style:dotted;outline-width:1px;outline-color:#000000}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls.advertising .phx-skip-forward-btn,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls.advertising .phx-skip-back-btn{pointer-events:none}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls.advertising .phx-skip-forward-btn>svg,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls.advertising .phx-skip-back-btn>svg{opacity:0.5}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-skip-back-btn{margin-right:25px}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-skip-forward-btn{margin-left:25px}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-pause-btn>svg,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-stop-btn>svg,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-play-btn>svg{width:60px}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-pause-btn:hover polygon,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-stop-btn:hover polygon,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-play-btn:hover polygon{fill:#e60505}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-stop-btn.media-loading{pointer-events:none}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .primary-controls .phx-stop-btn.media-loading>svg{opacity:0.5}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata{display:flex;flex-basis:0;flex-grow:999;align-items:center}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-thumbnail-wrapper{box-shadow:0px 0px 5px 1px #cbcbcb;height:84.375px;flex:0 0 auto;margin-left:20px}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-thumbnail-wrapper img{width:auto;height:84.375px;object-fit:contain;object-position:center}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-metadata #media-metadata-audio{box-sizing:border-box;padding:0 20px}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-metadata #media-metadata-audio .phoenix-showname,.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-metadata #media-metadata-audio .phoenix-title{padding:0;margin:0}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-metadata #media-metadata-audio .phoenix-showname{font-size:0.8rem;font-weight:bold}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-metadata #media-metadata-audio .phoenix-title{font-size:0.85rem;line-height:1.188rem;max-height:calc(1.188rem * 2);overflow:hidden}.phoenix-player .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-metadata #media-metadata-audio.advertising .phoenix-showname{text-transform:uppercase}.phoenix-player .phx-audio-ui .audio-ui-inner button label{display:block;position:absolute;bottom:calc(-0.6875rem + -6px);padding:6px;border-radius:4px;background:#263238;font-size:0.6875rem;font-weight:bold;white-space:nowrap;transform:translateY(0px);opacity:0;pointer-events:none;line-height:1rem}.phoenix-player .phx-audio-ui .audio-ui-inner button:hover label,.phoenix-player .phx-audio-ui .audio-ui-inner button:focus label{animation:tooltipAnimation 4s;z-index:1;color:white}@keyframes tooltipAnimation{0%{opacity:0;transform:translateY(-40px)}5%{opacity:1;transform:translateY(-70px)}95%{opacity:1;transform:translateY(-70px)}100%{opacity:0;transform:translateY(-40px)}}.phoenix-player .phx-audio-ui .audio-ui-inner .secondary-controls{display:flex;margin:0 20px;position:relative;width:calc(100% - 40px)}.phoenix-player .phx-audio-ui .audio-ui-inner .secondary-controls .audio-seekbar-wrapper{flex:1 0 100px;padding:5px 0}.phoenix-player .phx-audio-ui .audio-ui-inner .secondary-controls .time-metadata{padding:8px 20px;line-height:normal}.phoenix-player .phx-audio-ui .audio-ui-inner .secondary-controls .time-metadata span{color:#000;text-shadow:none;opacity:1;font-size:0.8rem}.phoenix-player .phx-audio-ui .audio-ui-inner .secondary-controls .time-metadata .phx-duration-metadata::before{content:"/";margin:0 4px}.phoenix-player .phx-audio-ui .audio-ui-inner .secondary-controls .volume-controls-container .phx-volume-controls{display:flex}.phoenix-player .phx-audio-ui .audio-ui-inner .secondary-controls .volume-controls-container .phx-muted-btn{cursor:pointer;background:transparent;border:none;width:24px;height:24px;box-sizing:content-box;position:relative;padding:5px 0}.phoenix-player .phx-audio-ui .audio-ui-inner .secondary-controls .volume-controls-container .phx-muted-btn.audio label{bottom:calc(-0.6875rem - 29px);right:0}.phoenix-player .phx-audio-ui .audio-ui-inner .secondary-controls .volume-controls-container .phx-volume-slider.audio{width:100%;line-height:26px}.phoenix-player .phx-audio-ui .audio-ui-inner .phx-volume-slider.audio label{bottom:calc(-0.6875rem - 19px)}.phoenix-player.phx-small .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-metadata #media-metadata-audio,.phoenix-player.phx-extra-small .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-metadata #media-metadata-audio{padding:5px 20px 0 20px}.phoenix-player.phx-small .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-thumbnail-wrapper,.phoenix-player.phx-extra-small .phx-audio-ui .audio-ui-inner .primary-controls-and-metadata .thumbnail-metadata .audio-ui-thumbnail-wrapper{display:none}';
            const c = "focus",
                p = "mouseenter",
                u = "mousemove",
                h = "mouseleave",
                m = "touchstart",
                v = "touchend",
                b = "keydown",
                g = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.isUserActive = !0, this.sizeClass = "", this.hasResizeObserverSet = !1, this.isFullscreenManagerInitialized = !1, this.setIsUserActive = e => {
                            this.isUserActive = e
                        }, this.onObserverUpdate = e => {
                            this.playerStatus = e.status.to
                        }, this.initializeFullscreenManager = () => {
                            var e, t;
                            this.isFullscreenManagerInitialized || "video" === (null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.format) && this.playerStatus && this.playerStatus !== a.S.READY && (this.fullscreenManager = (e => {
                                const t = e => {
                                        x && (e && !g ? f() : !e && g && E(), m.focus())
                                    },
                                    i = e => {
                                        g = !!e
                                    },
                                    n = () => {
                                        i(v.fullscreenElement)
                                    },
                                    a = () => {
                                        i(v.webkitFullscreenElement), g = !!v.webkitFullscreenElement, I(!g)
                                    },
                                    o = () => {
                                        i(!0)
                                    },
                                    r = () => {
                                        i(!1)
                                    },
                                    s = () => {
                                        i(v.mozFullScreenElement)
                                    },
                                    l = () => {
                                        i(v.msFullscreenElement)
                                    },
                                    d = () => {
                                        !x && b.webkitSupportsFullscreen && (x = !0, f = () => b.webkitEnterFullscreen(), E = () => b.webkitExitFullscreen(), b.addEventListener("webkitbeginfullscreen", o), b.addEventListener("webkitendfullscreen", r))
                                    },
                                    c = () => {
                                        x || (b.readyState > 0 ? d() : b.addEventListener("loadedmetadata", d))
                                    },
                                    p = () => {
                                        t(!0)
                                    };
                                p.defaultReturn = void 0;
                                const u = () => {
                                    t(!1)
                                };
                                u.defaultReturn = void 0;
                                const h = () => g;
                                h.defaultReturn = !1;
                                const m = e,
                                    v = document;
                                let b, g = !1,
                                    x = v.fullscreenEnabled || v.mozFullScreenEnabled || v.msFullscreenEnabled || v.webkitFullscreenEnabled || !1,
                                    A = null,
                                    y = null,
                                    f = () => {
                                        var e;
                                        null === (e = m.requestFullscreen || m.mozRequestFullScreen || m.msRequestFullscreen || m.webkitRequestFullscreen) || void 0 === e || e.call(m)
                                    },
                                    E = () => {
                                        var e;
                                        null === (e = v.exitFullscreen || v.mozCancelFullScreen || v.msExitFullscreen || v.webkitExitFullscreen) || void 0 === e || e.call(v)
                                    };
                                const I = e => {
                                    if (e) return A && m.style.setProperty("width", A), y && m.style.setProperty("height", y), A = null, void(y = null);
                                    A = m.style.getPropertyValue("width"), y = m.style.getPropertyValue("height"), m.style.setProperty("width", "100%"), m.style.setProperty("height", "100%")
                                };
                                return (() => {
                                    if (!m) return;
                                    const e = m.querySelector("[data-name='phoenix-playback-element']");
                                    e && (b = e, m.requestFullscreen ? v.addEventListener("fullscreenchange", n) : m.webkitRequestFullscreen ? v.addEventListener("webkitfullscreenchange", a) : m.mozRequestFullScreen ? v.addEventListener("mozfullscreenchange", s) : m.msRequestFullscreen && v.addEventListener("msfullscreenchange", l), c())
                                })(), {
                                    destroy: () => {
                                        v.removeEventListener("fullscreenchange", n), v.removeEventListener("webkitfullscreenchange", a), v.removeEventListener("mozfullscreenchange", s), v.removeEventListener("msfullscreenchange", l), b.removeEventListener("loadedmetadata", d), b.removeEventListener("webkitbeginfullscreen", o), b.removeEventListener("webkitendfullscreen", r)
                                    },
                                    isFullscreen: h,
                                    fullscreenOn: p,
                                    fullscreenOff: u
                                }
                            })(this.containerNode), this.isFullscreenManagerInitialized = !0)
                        }
                    }
                    connectedCallback() {
                        var e, t, i, n;
                        this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate), "video" === (null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.format) && (null === (n = null === (i = this.userInputEventsListener) || void 0 === i ? void 0 : i.start) || void 0 === n || n.call(i))
                    }
                    disconnectedCallback() {
                        var e;
                        this.userInputEventsListener.stop(), null === (e = this.fullscreenManager) || void 0 === e || e.destroy(), this.isFullscreenManagerInitialized = !1
                    }
                    componentDidRender() {
                        this.initializeFullscreenManager()
                    }
                    componentDidLoad() {
                        this.userInputEventsListener = ((e, t, i) => {
                            const n = {
                                    tracking: !1,
                                    userActivity: !1,
                                    isUserActive: !1,
                                    isPlaybackInProgress: !1,
                                    playerStatus: "",
                                    activityCheckInterval: null,
                                    inactivityTimeout: null
                                },
                                o = e => {
                                    n.playerStatus !== e.status.to && (n.playerStatus = e.status.to, n.isPlaybackInProgress = n.playerStatus === a.S.PLAYING || n.playerStatus === a.S.ADVERTISING, n.isPlaybackInProgress || (n.userActivity = !0))
                                },
                                r = e => {
                                    "phoenix-player-main-node" !== e.interactionOwner || n.isUserActive || (n.userActivity = !0)
                                },
                                s = e => {
                                    e !== n.isUserActive && (n.isUserActive = e, i(e))
                                },
                                l = e => {
                                    switch (e.type) {
                                        case h:
                                            n.isPlaybackInProgress && (n.userActivity = !1, s(!1));
                                            break;
                                        case m:
                                            n.isUserActive || (n.userActivity = !0, e.preventDefault());
                                            break;
                                        case b:
                                            {
                                                const {
                                                    code: t
                                                } = e;Object.values(a.K).includes(t) && (n.userActivity = !0);
                                                break
                                            }
                                        case u:
                                        case c:
                                        case v:
                                            n.userActivity = !0
                                    }
                                },
                                d = e => {
                                    const i = e ? "addEventListener" : "removeEventListener";
                                    t[i](u, l, {
                                        passive: !0
                                    }), t[i](p, l), t[i](h, l), t[i](m, l), t[i](v, l), t[i](c, l, !0), t[i](b, l, !0)
                                };
                            return {
                                start: () => {
                                    !n.tracking && t && (n.tracking = !0, n.isUserActive && i(n.isUserActive), d(!0), e.mediaStateObserver.subscribe(o), e.userInteractionsObserver.subscribe(r), n.activityCheckInterval = setInterval((() => {
                                        n.userActivity && (n.userActivity = !1, s(!0), clearTimeout(n.inactivityTimeout), n.inactivityTimeout = setTimeout((() => {
                                            !n.userActivity && n.isPlaybackInProgress && s(!1)
                                        }), a.H))
                                    }), 250))
                                },
                                stop: () => {
                                    n.tracking && (clearInterval(n.activityCheckInterval), clearTimeout(n.inactivityTimeout), e.mediaStateObserver.unsubscribe(o), e.userInteractionsObserver.unsubscribe(r), d(!1), i(!1), n.userActivity = !1, n.tracking = !1)
                                }
                            }
                        })(this.publicAPI, this.containerNode, this.setIsUserActive), this.userInputEventsListener.start()
                    }
                    onFullscreenBtnClick(e) {
                        var t, i, n;
                        e.stopPropagation();
                        const a = null === (t = this.fullscreenManager) || void 0 === t ? void 0 : t.isFullscreen();
                        a ? null === (i = this.fullscreenManager) || void 0 === i || i.fullscreenOff() : null === (n = this.fullscreenManager) || void 0 === n || n.fullscreenOn(), this.publicAPI.userInteractionsObserver.notifySubscribers({
                            interactionOwner: "fullscreen-btn",
                            interactionName: (a ? "exit" : "enter") + "-fullscreen",
                            interactionType: "click"
                        })
                    }
                    watchPropHandler() {
                        var e, t, i, n;
                        (null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.format) && ("video" === (null === (n = null === (i = this.publicAPI) || void 0 === i ? void 0 : i.mediaData) || void 0 === n ? void 0 : n.format) ? this.userInputEventsListener.start() : this.userInputEventsListener.stop())
                    }
                    render() {
                        var e, t;
                        return "video" !== (null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.format) ? null : (0, n.h)("div", {
                            class: `phx-video-ui ${this.isUserActive?"":"inactive"} ${this.sizeClass}`,
                            "aria-label": "video player"
                        }, (0, n.h)("info-overlay", {
                            mediaData: this.publicAPI.mediaData
                        }), (0, n.h)("indicator-overlay", {
                            publicAPI: this.publicAPI
                        }), (0, n.h)("control-rack", {
                            publicAPI: this.publicAPI
                        }), (0, n.h)("ready-overlay", {
                            publicAPI: this.publicAPI
                        }), (0, n.h)("loading-overlay", {
                            playerStatus: this.playerStatus
                        }), (0, n.h)("error-overlay", {
                            publicAPI: this.publicAPI
                        }), (0, n.h)("share-overlay", {
                            publicAPI: this.publicAPI
                        }), (0, n.h)("upcominglive-overlay", {
                            publicAPI: this.publicAPI
                        }), (0, n.h)("end-card-overlay", {
                            publicAPI: this.publicAPI
                        }))
                    }
                    static get watchers() {
                        return {
                            publicAPI: ["watchPropHandler"]
                        }
                    }
                };
            g.style = ".phoenix-player .phx-video-ui{display:block;width:100%;height:100%;position:absolute;top:0;left:0}"
        },
        20681: (e, t, i) => {
            i.r(t), i.d(t, {
                buffer_bar: () => r,
                currenttime_metadata: () => s,
                duration_metadata: () => l,
                muted_btn: () => d,
                options_menu: () => c,
                play_pause_stop_btn: () => v,
                seek_bar: () => b,
                seek_input: () => g,
                volume_controls: () => x,
                volume_slider: () => A
            });
            var n = i(41632),
                a = i(51329),
                o = i(97456);
            const r = class {
                constructor(e) {
                    (0, n.r)(this, e), this.locale = (0, a.L)(), this.onObserverUpdate = e => {
                        this.isSeekable = e.isSeekable, this.bufferDataValue = e.bufferData.value, this.bufferDataMax = e.bufferData.max
                    }
                }
                connectedCallback() {
                    this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                }
                disconnectedCallback() {
                    this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                }
                render() {
                    const e = this.isSeekable ? "" : " hidden";
                    return (0, n.h)("progress", {
                        key: "f5803e9e20e8a5f8b31e5efc7b8d12e52051108e",
                        class: `phx-buffer-bar${e}`,
                        value: this.bufferDataValue,
                        max: this.bufferDataMax,
                        "aria-valuemax": this.bufferDataMax,
                        "aria-label": this.locale.buffered,
                        "aria-live": "off"
                    })
                }
            };
            r.style = "progress.phx-buffer-bar{background:#808080;background-color:#808080}progress.phx-buffer-bar.hidden{display:none}progress.phx-buffer-bar::-moz-progress-bar{opacity:0.3;background:#fff}progress.phx-buffer-bar::-webkit-progress-value{opacity:0.3;background:#fff}progress.phx-buffer-bar::-ms-fill{opacity:0.3;background:#fff}";
            const s = class {
                constructor(e) {
                    (0, n.r)(this, e), this.onObserverUpdate = e => {
                        this.currentTime = e.currentTime, this.isSeekable = e.isSeekable, this.duration = e.duration, this.isAtLiveEdge = e.isAtLiveEdge, this.liveSyncPosition = e.liveSyncPosition
                    }
                }
                connectedCallback() {
                    this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                }
                disconnectedCallback() {
                    this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                }
                render() {
                    if (!this.isSeekable) return;
                    let e = this.currentTime;
                    if (this.duration === 1 / 0) {
                        if (this.isAtLiveEdge || this.liveSyncPosition === 1 / 0) return;
                        e = (0, o.l)(this.currentTime, this.liveSyncPosition)
                    }
                    const t = (0, o.g)(e);
                    return (0, n.h)("span", {
                        class: "phx-current-time-metadata"
                    }, t)
                }
            };
            s.style = ".phx-current-time-metadata{color:#fff;text-shadow:0 0 2px rgba(0, 0, 0, 0.5);opacity:0.9}";
            const l = class {
                constructor(e) {
                    (0, n.r)(this, e), this.onObserverUpdate = e => {
                        this.isSeekable = e.isSeekable, this.duration = e.duration
                    }, this.isValidDuration = e => e && e !== 1 / 0 && !Number.isNaN(e)
                }
                connectedCallback() {
                    this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                }
                disconnectedCallback() {
                    this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                }
                render() {
                    if (!this.isSeekable || !this.isValidDuration(this.duration)) return;
                    const e = (0, o.g)(this.duration);
                    return (0, n.h)("span", {
                        class: "phx-duration-metadata"
                    }, e)
                }
            };
            l.style = ".phx-duration-metadata{color:#fff;text-shadow:0 0 2px rgba(0, 0, 0, 0.5);opacity:0.9}";
            const d = class {
                constructor(e) {
                    (0, n.r)(this, e), this.locale = (0, a.L)(), this.onInitPlay = () => {
                        this.isMuted = this.publicAPI.media.getMuted()
                    }, this.onMutedChange = e => {
                        this.isMuted = e
                    }, this.onVolumeChange = e => {
                        this.isNoVolume = 0 === e
                    }, this.renderUnmute = e => (0, n.h)("button", {
                        type: "button",
                        "aria-label": this.locale.unmute,
                        "data-mute": "false",
                        class: "phx-muted-btn " + (e ? "video" : "audio")
                    }, (0, n.h)("svg", {
                        focusable: "false",
                        role: "presentation",
                        viewBox: "0 0 24 24"
                    }, (0, n.h)("path", {
                        class: "foreground",
                        d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
                    })), (0, n.h)("label", {
                        class: "phx-tooltip"
                    }, this.locale.unmute)), this.getVolumePath = () => {
                        const e = (0, n.h)("path", {
                                class: "foreground novolume",
                                d: "M 3 9 L 3 15 L 7 15 L 12 20 L 12 4 L 7 9 L 3 9 Z"
                            }),
                            t = (0, n.h)("path", {
                                class: "foreground",
                                d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                            });
                        return this.isNoVolume ? e : t
                    }, this.renderMute = e => (0, n.h)("button", {
                        type: "button",
                        "aria-label": this.locale.mute,
                        "data-mute": "true",
                        class: "phx-muted-btn " + (e ? "video" : "audio")
                    }, (0, n.h)("svg", {
                        focusable: "false",
                        role: "presentation",
                        viewBox: "0 0 24 24"
                    }, (0, n.h)("path", {
                        class: "background",
                        d: "M0 0h24v24H0z"
                    }), this.getVolumePath()), (0, n.h)("label", {
                        class: "phx-tooltip"
                    }, this.locale.mute))
                }
                handleClick(e) {
                    var t;
                    const i = "true" === e.target.closest("button").dataset.mute;
                    null === (t = this.publicAPI.media) || void 0 === t || t.setMuted(i), this.publicAPI.userInteractionsObserver.notifySubscribers({
                        interactionOwner: "muted-btn",
                        interactionName: "volume-" + (i ? "mute" : "unmute"),
                        interactionType: "PointerEvent"
                    })
                }
                connectedCallback() {
                    this.isMuted = this.publicAPI.media.getMuted(), this.publicAPI.on(o.E.PLAYBACK_INITIALPLAY, this.onInitPlay), this.publicAPI.on(o.E.PLAYBACK_MUTEDCHANGE, this.onMutedChange), this.publicAPI.on(o.E.PLAYBACK_VOLUMECHANGE, this.onVolumeChange)
                }
                disconnectedCallback() {
                    this.publicAPI.off(o.E.PLAYBACK_INITIALPLAY, this.onInitPlay), this.publicAPI.off(o.E.PLAYBACK_MUTEDCHANGE, this.onMutedChange), this.publicAPI.off(o.E.PLAYBACK_VOLUMECHANGE, this.onVolumeChange)
                }
                render() {
                    var e, t;
                    const i = "audio" !== (null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.format);
                    return this.isMuted ? this.renderUnmute(i) : this.renderMute(i)
                }
            };
            d.style = ".phx-muted-btn.audio svg{width:100%;height:100%}.phx-muted-btn.audio svg .background{fill:rgba(255, 255, 255, 0.85)}.phx-muted-btn.audio svg .foreground{fill:#000}.phx-muted-btn.audio label{display:none}";
            const c = class {
                constructor(e) {
                    (0, n.r)(this, e), this.notifySubscribers = () => {
                        this.publicAPI.userInteractionsObserver.notifySubscribers({
                            interactionOwner: "options-menu",
                            interactionName: "",
                            interactionType: "click"
                        })
                    }, this.renderMenuItems = () => {
                        var e;
                        const t = !!(null === (e = this.menuConfig) || void 0 === e ? void 0 : e.title);
                        return (0, n.h)(n.F, null, t && (0, n.h)("options-menu-back-btn", {
                            menuTitle: this.menuConfig.title,
                            publicAPI: this.publicAPI
                        }), (0, n.h)("ul", {
                            class: "phx-options-menulist " + (t ? "" : "main-menu"),
                            role: "menu"
                        }, this.menuConfig.items.map(((e, i) => (0, n.h)("li", {
                            class: "phx-options-menulist-item " + (this.ctaConfig || i !== this.menuConfig.items.length - 1 ? "" : "last-item"),
                            role: "menuitemradio",
                            "aria-checked": e.selected,
                            "data-value": e.id,
                            "data-name": e.name,
                            tabindex: "0"
                        }, (0, n.h)("span", {
                            class: "phx-options-menulist-item-label " + (t ? "" : "main-menu")
                        }, e.name), !t && (0, n.h)("span", {
                            class: "phx-options-menulist-selection"
                        }, e.currentSelection, (0, n.h)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            focusable: "false",
                            role: "presentation",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, (0, n.h)("path", {
                            d: "M9.30996 6.71002C8.91996 7.10002 8.91996 7.73002 9.30996 8.12002L13.19 12L9.30996 15.88C8.91996 16.27 8.91996 16.9 9.30996 17.29C9.69996 17.68 10.33 17.68 10.72 17.29L15.31 12.7C15.7 12.31 15.7 11.68 15.31 11.29L10.72 6.70002C10.34 6.32002 9.69996 6.32002 9.30996 6.71002Z",
                            fill: "white"
                        }))))))))
                    }, this.renderCTA = () => {
                        var e, t;
                        return this.ctaConfig ? (0, n.h)("div", {
                            class: "phx-options-menu-cta"
                        }, (0, n.h)("span", null, null !== (e = this.ctaConfig.textBefore) && void 0 !== e ? e : "", (0, n.h)("a", {
                            href: this.ctaConfig.linkUrl,
                            class: "last-item",
                            target: "_blank"
                        }, this.ctaConfig.linkText), null !== (t = this.ctaConfig.textAfter) && void 0 !== t ? t : "")) : null
                    }
                }
                handleClick(e) {
                    e.stopPropagation();
                    const t = e.target;
                    "li" === t.tagName.toLowerCase() && (this.menuConfig.onChange(t.getAttribute("data-value")), this.notifySubscribers())
                }
                handleKeyDown(e) {
                    if (e.code === o.K.ENTER || e.code === o.K.SPACE) {
                        const t = e.target;
                        "li" === t.tagName.toLowerCase() && (this.menuConfig.onChange(t.getAttribute("data-value")), this.notifySubscribers())
                    }
                }
                render() {
                    var e, t;
                    return (null === (t = null === (e = this.menuConfig) || void 0 === e ? void 0 : e.items) || void 0 === t ? void 0 : t.length) ? (0, n.h)("div", {
                        class: "phx-options-menu"
                    }, (0, n.h)("div", {
                        class: "phx-options-menu-content"
                    }, this.renderMenuItems(), this.renderCTA())) : null
                }
            };
            c.style = '@charset "UTF-8";\n/* accessibility class visually hides content but keeps it available for Assistive Tech users */\n.phx-options-menu {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  max-width: 286px;\n  min-width: 286px;\n  bottom: 60px;\n  right: 2%;\n  max-height: 280px;\n}\n.phx-options-menu *,\n.phx-options-menu *:before,\n.phx-options-menu *:after {\n  box-sizing: border-box;\n}\n.phx-options-menu .phx-options-menu-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  border: solid 1px #585858;\n  border-radius: 8px;\n  background-color: #000000;\n  color: white;\n  font-family: sans-serif;\n  font-size: 0.8rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n  overflow: auto;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist {\n  list-style: none;\n  margin: 0;\n  padding: 0 0 8px 0;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist.main-menu {\n  padding: 8px 0;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist.main-menu > .phx-options-menulist-item {\n  padding: 8px 0;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist.main-menu > .phx-options-menulist-item > .phx-options-menulist-item-label {\n  flex: 80%;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist > .phx-options-menulist-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  cursor: pointer;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist > .phx-options-menulist-item > .phx-options-menulist-item-label {\n  flex: 100%;\n  font-weight: 400;\n  margin-left: 12px;\n  pointer-events: none;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist > .phx-options-menulist-item > .phx-options-menulist-item-label.main-menu {\n  font-weight: 700;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist > .phx-options-menulist-item > .phx-options-menulist-selection {\n  display: flex;\n  align-items: center;\n  font-size: 0.688rem;\n  font-weight: 400;\n  margin-right: 8px;\n  flex: 100%;\n  justify-content: flex-end;\n  pointer-events: none;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist > .phx-options-menulist-item:hover {\n  background-color: #353535;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist > .phx-options-menulist-item:focus, .phx-options-menu .phx-options-menu-content .phx-options-menulist > .phx-options-menulist-item:focus-within {\n  outline: 2px solid #EE0000;\n  outline-offset: -1px;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist > .phx-options-menulist-item[aria-checked]:before {\n  content: "\u2022";\n  font-weight: 700;\n  margin-left: 12px;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menulist > .phx-options-menulist-item[aria-checked] .phx-options-menulist-item-label {\n  font-weight: 700;\n  margin-left: 5px;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menu-cta {\n  position: relative;\n  top: -8px;\n  padding: 8px 12px 0 12px;\n  border-top: 1px solid #585858;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menu-cta span a, .phx-options-menu .phx-options-menu-content .phx-options-menu-cta span a:visited {\n  color: white;\n  font-weight: 700;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menu-cta span a:hover {\n  text-decoration: none;\n}\n.phx-options-menu .phx-options-menu-content .phx-options-menu-cta span a:focus-visible {\n  outline: none;\n  border: 2px solid #e60606;\n}\n\n@media (max-width: 420px) {\n  .phx-options-menu {\n    max-height: 115px;\n  }\n}\n@container phoenix-player (max-width: 420px) {\n  .phx-options-menu {\n    max-height: 115px;\n  }\n}\n@container phoenix-player (min-width: 421px) and (max-width: 640px) {\n  .phx-options-menu {\n    max-height: 180px;\n  }\n}';
            const p = (0, a.L)(),
                u = e => (0, n.h)("button", {
                    type: "button",
                    class: "phx-pause-btn"
                }, "audio" === e ? (0, n.h)(n.F, null, (0, n.h)("svg", {
                    class: "audio-pause-svg",
                    viewBox: "0 0 60 60"
                }, (0, n.h)("circle", {
                    fill: "#FFFFFF",
                    stroke: "#CBCBCB",
                    "stroke-width": "2",
                    cx: "30",
                    cy: "30",
                    r: "28"
                }), (0, n.h)("path", {
                    d: "M26 21.5 L26 38.5",
                    "stroke-width": "4",
                    stroke: "#000000",
                    "stroke-linecap": "round"
                }), (0, n.h)("path", {
                    d: "M34 21.5 L34 38.5",
                    "stroke-width": "4",
                    stroke: "#000000",
                    "stroke-linecap": "round"
                })), (0, n.h)("label", {
                    class: "phx-tooltip"
                }, "Pause")) : (0, n.h)(n.F, null, (0, n.h)("svg", {
                    class: "video-pause-svg",
                    focusable: "false",
                    role: "presentation",
                    viewBox: "0 0 24 24"
                }, (0, n.h)("path", {
                    class: "foreground",
                    d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                })), (0, n.h)("label", {
                    class: "phx-tooltip"
                }, p.pause))),
                h = e => (0, n.h)("button", {
                    type: "button",
                    class: "phx-play-btn"
                }, "audio" === e ? (0, n.h)(n.F, null, (0, n.h)("svg", {
                    class: "audio-play-svg",
                    viewBox: "0 0 60 60",
                    focusable: "false",
                    role: "presentation"
                }, (0, n.h)("circle", {
                    "stroke-width": "2px",
                    stroke: "#CBCBCB",
                    fill: "#FFFFFF",
                    cx: "30",
                    cy: "30",
                    r: "28"
                }), (0, n.h)("polygon", {
                    fill: "#000000",
                    points: "43 30 23 20 23 40"
                })), (0, n.h)("label", {
                    class: "phx-tooltip"
                }, p.play)) : (0, n.h)(n.F, null, (0, n.h)("svg", {
                    class: "video-play-svg",
                    focusable: "false",
                    role: "presentation",
                    viewBox: "0 0 24 24"
                }, (0, n.h)("path", {
                    class: "background",
                    d: "M0 0h24v24H0z"
                }), (0, n.h)("path", {
                    class: "foreground",
                    d: "M8 5v14l11-7z"
                })), (0, n.h)("label", {
                    class: "phx-tooltip"
                }, p.play))),
                m = (e, t) => {
                    const i = t ? " media-loading" : "";
                    return (0, n.h)("button", {
                        type: "button",
                        class: `phx-stop-btn${i}`
                    }, "audio" === e ? (0, n.h)(n.F, null, (0, n.h)("svg", {
                        class: "audio-stop-svg",
                        viewBox: "0 0 60 60",
                        focusable: "false",
                        "aria-label": p.stop
                    }, (0, n.h)("circle", {
                        "stroke-width": "2px",
                        stroke: "#CBCBCB",
                        fill: "#FFFFFF",
                        cx: "30",
                        cy: "30",
                        r: "28"
                    }), (0, n.h)("rect", {
                        height: "18",
                        width: "18",
                        y: "21",
                        x: "21"
                    })), (0, n.h)("label", {
                        class: "phx-tooltip"
                    }, p.stop)) : (0, n.h)(n.F, null, (0, n.h)("svg", {
                        class: "video-stop-svg",
                        height: "100%",
                        width: "100%",
                        viewBox: "0 0 80 80",
                        focusable: "false",
                        role: "presentation"
                    }, (0, n.h)("path", {
                        class: "background",
                        d: "m0 0v80h80v-80h-80zm22 20h36v40h-36v-40z"
                    }), (0, n.h)("rect", {
                        class: "foreground",
                        "fill-rule": "evenodd",
                        height: "40",
                        width: "36",
                        y: "20",
                        x: "22"
                    })), (0, n.h)("label", {
                        class: "phx-tooltip"
                    }, p.stop)))
                },
                v = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.onObserverUpdate = e => {
                            this.isSeekable = e.isSeekable, this.playerStatus = e.status.to, this.isMediaLoading = e.isMediaLoading
                        }
                    }
                    connectedCallback() {
                        this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                    }
                    disconnectedCallback() {
                        this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                    }
                    getBtnBasedOnStatus(e) {
                        switch (this.playerStatus) {
                            case o.S.LOADING:
                            case o.S.PLAYING:
                                return !0 === this.isSeekable ? u(e) : m(e, this.isMediaLoading);
                            case o.S.ADVERTISING:
                                return u(e);
                            default:
                                return h(e)
                        }
                    }
                    handleClick() {
                        let e = "play";
                        switch (this.playerStatus) {
                            case o.S.LOADING:
                            case o.S.PLAYING:
                                if (this.isMediaLoading && "audio" === this.publicAPI.mediaData.format) return;
                                this.isSeekable ? this.publicAPI.media.pause() : this.publicAPI.media.stop(), e = this.isSeekable ? "pause" : "stop";
                                break;
                            case o.S.ADVERTISING:
                                this.publicAPI.media.pause(), e = "pause";
                                break;
                            default:
                                this.publicAPI.media.play()
                        }
                        this.publicAPI.userInteractionsObserver.notifySubscribers({
                            interactionOwner: "play-pause-stop-btn",
                            interactionName: e,
                            interactionType: "click"
                        })
                    }
                    render() {
                        const e = this.publicAPI.mediaData.format;
                        return this.getBtnBasedOnStatus(e)
                    }
                },
                b = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.playerStatus = null, this.onObserverUpdate = e => {
                            var t;
                            this.isSeekable = e.isSeekable, this.playerStatus = null === (t = e.status) || void 0 === t ? void 0 : t.to, this.isClientSideAdvertising = e.isClientSideAdvertising
                        }, this.checkIfVisible = e => !this.isClientSideAdvertising && (!e || this.playerStatus !== o.S.READY && this.playerStatus !== o.S.ERROR)
                    }
                    connectedCallback() {
                        this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                    }
                    disconnectedCallback() {
                        this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                    }
                    render() {
                        var e, t;
                        const i = "audio" !== (null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.format),
                            a = this.checkIfVisible(i) ? "" : " hidden",
                            r = !i && (!this.playerStatus || this.playerStatus === o.S.READY);
                        return (0, n.h)("div", {
                            key: "794689510d7926747e5c8b1502152e39d6edb4d9",
                            class: `phx-controls-seek${a} ${i?"video":"audio"}`
                        }, (0, n.h)("div", {
                            key: "fb3f5bb5fa04fa740a7771287d61080cc79fab7d",
                            class: "phx-controls-seek-inner"
                        }, (0, n.h)("buffer-bar", {
                            key: "8c4fdb061b43e63e5a3673e3f9a8b8d1bc3b9ff8",
                            publicAPI: this.publicAPI
                        }), (0, n.h)("seek-input", {
                            key: "5575bf54701ad8d14271af12b689d3d5b268aca4",
                            publicAPI: this.publicAPI
                        }), this.isSeekable ? null : (0, n.h)("progress", {
                            class: "barber-pole " + (r ? "animation-paused" : "")
                        })))
                    }
                };
            b.style = "div.phx-controls-seek{bottom:26px;pointer-events:auto}div.phx-controls-seek.hidden{display:none}div.phx-controls-seek>.phx-controls-seek-inner{position:relative;height:4px;transition:height 0.2s}div.phx-controls-seek>.phx-controls-seek-inner progress,div.phx-controls-seek>.phx-controls-seek-inner input{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0}div.phx-controls-seek:focus-within>.phx-controls-seek-inner{height:6px}div.phx-controls-seek:focus-within>.phx-controls-seek-inner input[type=range]::-ms-thumb{width:14px;height:14px}div.phx-controls-seek:focus-within>.phx-controls-seek-inner input[type=range]::-webkit-slider-thumb{width:14px;height:14px}div.phx-controls-seek:focus-within>.phx-controls-seek-inner input[type=range]::-moz-range-thumb{width:14px;height:14px}div.phx-controls-seek:hover>.phx-controls-seek-inner{height:6px}div.phx-controls-seek:hover>.phx-controls-seek-inner input[type=range]::-ms-thumb{width:14px;height:14px}div.phx-controls-seek:hover>.phx-controls-seek-inner input[type=range]::-webkit-slider-thumb{width:14px;height:14px}div.phx-controls-seek:hover>.phx-controls-seek-inner input[type=range]::-moz-range-thumb{width:14px;height:14px}div.phx-controls-seek progress,div.phx-controls-seek input[type=range]{border:none;-moz-appearance:none;-webkit-appearance:none;appearance:none}div.phx-controls-seek progress.barber-pole{display:block;opacity:1;background:repeating-linear-gradient(45deg, rgba(71, 89, 99, 0.5), rgba(71, 89, 99, 0.5) 10px, #576d7b 10px, #576d7b 20px);animation:animatedbuffer 1s linear infinite}div.phx-controls-seek progress.barber-pole::-webkit-progress-bar{background:none}div.phx-controls-seek progress.barber-pole::-webkit-progress-value{background:none}div.phx-controls-seek progress.barber-pole::-moz-progress-bar{background:none}div.phx-controls-seek progress.barber-pole::-ms-fill{background:none;animation-name:none}@keyframes animatedbuffer{from{background-position-x:-56px;background-size:150%}to{background-position-x:0px;background-size:150%}}div.phx-controls-seek progress.barber-pole.animation-paused{animation:none}div.phx-controls-seek.audio{position:unset;width:unset;min-height:10px;padding:12px 0}";
            const g = class {
                constructor(e) {
                    (0, n.r)(this, e), this.timeTooltipValues = {
                        value: "",
                        leftPosition: ""
                    }, this.locale = (0, a.L)(), this.onObserverUpdate = e => {
                        this.currentTime = e.currentTime, this.isSeekable = e.isSeekable, this.seekableRangeStart = e.seekableRange.start, this.seekableRangeEnd = e.seekableRange.end
                    }, this.dispatchInteraction = (e, t) => {
                        this.publicAPI.userInteractionsObserver.notifySubscribers({
                            interactionOwner: "seek-input",
                            interactionName: t,
                            interactionType: e
                        })
                    }, this.updateTooltip = e => {
                        var t, i, n, a;
                        const r = e.target,
                            s = window.getComputedStyle(r, null),
                            l = r.getBoundingClientRect(),
                            d = parseInt(s.borderLeftWidth);
                        let c = e.clientX;
                        const p = e;
                        if ((null === (t = null === p || void 0 === p ? void 0 : p.touches) || void 0 === t ? void 0 : t[0]) && (c = p.touches[0].clientX), !c) return;
                        const u = c - d - l.left,
                            h = u / l.width,
                            m = parseInt(null === (i = this.inputElement) || void 0 === i ? void 0 : i.getAttribute("max"));
                        let v = Math.ceil(m * h);
                        v = Math.max(0, Math.min(m, v));
                        const b = u - (null === (n = this.outputElement) || void 0 === n ? void 0 : n.offsetWidth) / 2;
                        this.timeTooltipValues = {
                            value: (0, o.g)(v),
                            leftPosition: Math.max(0, Math.min(b, l.width - (null === (a = this.outputElement) || void 0 === a ? void 0 : a.offsetWidth))) + "px"
                        }
                    }, this.onKeydown = e => {
                        if (e.code !== o.K.ARROWLEFT && e.code !== o.K.ARROWRIGHT) return;
                        const t = e.code === o.K.ARROWLEFT ? -o.a : o.a,
                            i = t + this.publicAPI.media.getCurrentTime(),
                            n = t > 0 ? o.I.SKIP_FORWARD : o.I.SKIP_BACKWARD;
                        this.publicAPI.media.setCurrentTime(i), this.dispatchInteraction("KeyboardEvent", n)
                    }, this.enabledEventListeners = (e, t) => {
                        if (!t) return;
                        const i = e ? "addEventListener" : "removeEventListener";
                        t[i]("input", this.onInputChange), t[i]("click", this.onInputChange), t[i]("change", this.onInputChange), t[i]("mousemove", this.updateTooltip), t[i]("touchmove", this.updateTooltip), t[i]("keydown", this.onKeydown)
                    }, this.onInputChange = e => {
                        var t;
                        const i = parseInt(e.target.value);
                        if (i === this.currentTime) return;
                        const n = i > this.currentTime ? o.I.SKIP_FORWARD : o.I.SKIP_BACKWARD;
                        null === (t = this.publicAPI) || void 0 === t || t.media.setCurrentTime(i), this.dispatchInteraction("PointerEvent", n)
                    }, this.getRef = e => {
                        e || this.enabledEventListeners(!1, this.inputElement), this.inputElement = e, this.inputElement && this.enabledEventListeners(!0, this.inputElement)
                    }
                }
                connectedCallback() {
                    this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate), this.enabledEventListeners(!0, this.inputElement)
                }
                disconnectedCallback() {
                    this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate), this.enabledEventListeners(!1, this.inputElement)
                }
                getCurrentTimePercentage() {
                    const e = this.currentTime - this.seekableRangeStart,
                        t = this.seekableRangeEnd - this.seekableRangeStart;
                    return `${Math.min(100,Math.round(e/t*100))}%`
                }
                render() {
                    var e;
                    const t = this.isSeekable ? "" : " hidden",
                        i = `seekbar-${null===(e=this.publicAPI)||void 0===e?void 0:e.uid}`;
                    return (0, n.h)(n.F, {
                        key: "a832670f8304917c55dd67791f129d38ff82abac"
                    }, (0, n.h)("input", {
                        key: "d8f7c2383fece13a735b012f3be08a34fa6d0f0d",
                        style: {
                            "--seek-position": this.getCurrentTimePercentage()
                        },
                        id: i,
                        ref: this.getRef,
                        class: `phx-seek-input${t}`,
                        type: "range",
                        min: this.seekableRangeStart,
                        max: this.seekableRangeEnd,
                        value: this.currentTime,
                        "aria-label": this.locale.seekBar,
                        "aria-valuenow": this.currentTime,
                        "aria-valuemin": "0",
                        "aria-valuemax": this.seekableRangeEnd,
                        "aria-orientation": "horizontal"
                    }), (0, n.h)("output", {
                        key: "657d966381dd88ce17bfe64390a083e5fd7605ba",
                        class: `time-tooltip${t}`,
                        style: {
                            "--tooltipLeftPosition": this.timeTooltipValues.leftPosition
                        },
                        ref: e => this.outputElement = e,
                        htmlFor: i
                    }, this.timeTooltipValues.value))
                }
            };
            g.style = "progress.playback,input.phx-seek-input{background:none}progress.playback{color:#E60606}progress.playback::-moz-progress-bar{background:#E60606}progress.playback::-webkit-progress-bar{background-color:transparent}progress.playback::-webkit-progress-value{background:#E60606}progress.playback::-ms-fill{background:#E60606}input.phx-seek-input{cursor:pointer;background:linear-gradient(to right, red var(--seek-position, 0%), transparent var(--seek-position, 0%))}input.phx-seek-input.hidden{display:none}input.phx-seek-input::-webkit-slider-runnable-track{-webkit-appearance:none;border:none;background:transparent;background-color:transparent;color:transparent}input.phx-seek-input::-moz-range-track{border:none;background:transparent;background-color:transparent;color:transparent}input.phx-seek-input::-ms-track,input.phx-seek-input::-ms-fill-upper,input.phx-seek-input::-ms-fill-lower{border:none;background:transparent;background-color:transparent;color:transparent}input.phx-seek-input::-ms-thumb{background:#E60606;border:none;border-radius:50%;width:4px;height:4px;transform:translateX(-4px);transition:width 0.2s, height 0.2s}input.phx-seek-input::-webkit-slider-thumb{-webkit-appearance:none;background:#E60606;border:none;border-radius:50%;width:4px;height:4px;transform:translateX(-4px);transition:width 0.2s, height 0.2s}input.phx-seek-input::-moz-range-thumb{background:#E60606;border:none;border-radius:50%;width:4px;height:4px;transform:translateX(-4px);transition:width 0.2s, height 0.2s}input.phx-seek-input:focus{outline:2px solid #E60606}input.phx-seek-input:focus::-moz-focus-inner{border:0}input.phx-seek-input:focus::-moz-focus-outer{border:0}output{position:absolute;display:none;top:-38px;width:auto;height:auto;left:var(--tooltipLeftPosition);padding:6px;border-radius:4px;background:#263238;font-size:0.6875rem;font-weight:bold;color:#fff;white-space:nowrap;pointer-events:none;line-height:1rem}output.hidden{display:none}input.phx-seek-input:hover+output{display:block}";
            const x = class {
                constructor(e) {
                    (0, n.r)(this, e)
                }
                handleVolumeVisible() {
                    this.sliderVisible = !0
                }
                handleVolumeNotVisible() {
                    this.sliderVisible = !1
                }
                render() {
                    return (0, n.h)("div", {
                        key: "ba0ef75aba6d1fcf4346590334e788c0eb2fa012",
                        class: "phx-volume-controls"
                    }, (0, n.h)("muted-btn", {
                        key: "eec7d9f36d85c334e4a076a1c1a8b3f40d5fdad5",
                        publicAPI: this.publicAPI
                    }), (0, n.h)("volume-slider", {
                        key: "862dc0add7b6dc7d9479b29050a5557b51924b41",
                        publicAPI: this.publicAPI,
                        visibleByParent: this.sliderVisible
                    }))
                }
            };
            x.style = ".phx-volume-controls{display:inline-block}";
            const A = class {
                constructor(e) {
                    (0, n.r)(this, e), this.volume = 1, this.locale = (0, a.L)(), this.onVolumeSliderChange = e => {
                        const t = e.target,
                            i = parseInt(t.value) / 10;
                        this.publicAPI.media.setVolume(i), this.publicAPI.media.setMuted(!1), this.volume !== i && this.publicAPI.userInteractionsObserver.notifySubscribers({
                            interactionOwner: "volume-slider",
                            interactionName: "menu-" + (i > this.volume ? "up" : "down"),
                            interactionType: "InputEvent"
                        })
                    }, this.onObserverUpdate = e => {
                        this.volume = e.volume
                    }, this.onInitialPlay = () => {
                        this.volume = this.publicAPI.media.getVolume(), this.publicAPI.off(o.E.PLAYBACK_INITIALPLAY, this.onInitialPlay)
                    }
                }
                connectedCallback() {
                    this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                }
                disconnectedCallback() {
                    this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                }
                render() {
                    var e, t, i;
                    const a = "audio" !== (null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.format),
                        o = `phx-volume-slider-${null===(i=this.publicAPI)||void 0===i?void 0:i.uid}`;
                    return (0, n.h)("div", {
                        key: "10e79de0e7d4a420c027956e1aff9d2775691726",
                        class: `phx-volume-slider ${this.visibleByParent?" visible":""} ${a?"video":"audio"}`
                    }, (0, n.h)("input", {
                        key: "dc29c92deabf1a4eb8d0724e39c9823dda8bd7c3",
                        id: o,
                        style: {
                            "--currentVolume": 100 * this.volume + "%"
                        },
                        onInput: this.onVolumeSliderChange,
                        type: "range",
                        max: "10",
                        "aria-valuemin": "0",
                        "aria-valuemax": "10",
                        "aria-orientation": "horizontal",
                        "aria-valuenow": 10 * this.volume,
                        value: 10 * this.volume
                    }), (0, n.h)("label", {
                        key: "60b773a19077d8f036aad3eed46e7bf518bff433",
                        htmlFor: o,
                        class: "phx-tooltip"
                    }, this.locale.volumeLevel))
                }
            };
            A.style = ".phx-volume-slider{display:inline-block;overflow:hidden;width:0;height:30px;line-height:28px;-webkit-transition:margin 0.2s cubic-bezier(0.4, 0, 1, 1), width 0.2s cubic-bezier(0.4, 0, 1, 1);transition:margin 0.2s cubic-bezier(0.4, 0, 1, 1), width 0.2s cubic-bezier(0.4, 0, 1, 1);cursor:pointer;outline:0;border:2px solid transparent}@media (hover: none){.phx-volume-slider{display:none}}.phx-volume-slider.visible{width:56px}.phx-volume-slider.visible:focus-within{border:2px solid #E60606}.phx-volume-slider input{width:52px;margin:0px 2px;cursor:pointer;-webkit-appearance:none;-moz-apperance:none;-ms-appearance:none;border-radius:6px;height:6px;background:linear-gradient(to right, #FFFFFF 0%, #FFFFFF var(--currentVolume), #1c1c1c var(--currentVolume), #1c1c1c 100%)}.phx-volume-slider input:focus{outline:none}.phx-volume-slider input::-webkit-slider-thumb{-webkit-appearance:none;background-color:#FFFFFF;border-radius:50%;height:10px;width:10px;cursor:pointer}.phx-volume-slider input::-moz-range-thumb{-moz-apperance:none;background-color:#FFFFFF;border-radius:50%;height:10px;width:10px;cursor:pointer}.phx-volume-slider input::-ms-thumb{-ms-appearance:none;background-color:#FFFFFF;border-radius:50%;height:10px;width:10px;cursor:pointer}.phx-volume-slider input:focus+label{animation:tooltipAnimation 4s;z-index:1;color:white}@keyframes tooltipAnimation{0%{opacity:0;transform:translateY(-40px)}5%{opacity:1;transform:translateY(-70px)}95%{opacity:1;transform:translateY(-70px)}100%{opacity:0;transform:translateY(-40px)}}.phx-volume-slider label{line-height:normal;display:block;position:absolute;bottom:calc(-0.6875rem + -6px);padding:6px;border-radius:4px;background:#263238;font-size:0.6875rem;font-weight:bold;white-space:nowrap;transform:translateY(0px);opacity:0;pointer-events:none;line-height:1rem}.phx-volume-slider:hover label{animation:tooltipAnimation 4s;z-index:1;color:white}@keyframes tooltipAnimation{0%{opacity:0;transform:translateY(-40px)}5%{opacity:1;transform:translateY(-70px)}95%{opacity:1;transform:translateY(-70px)}100%{opacity:0;transform:translateY(-40px)}}.phx-volume-slider.audio.visible{width:100px}.phx-volume-slider.audio input{width:100px;background:linear-gradient(to right, #000000 0%, #000000 var(--currentVolume), #cbcbcb var(--currentVolume), #cbcbcb 100%);-webkit-appearance:none;-moz-apperance:none;-ms-appearance:none;border-radius:6px;height:6px;background-image:-webkit-gradient(linear, left top, right top, color-stop(0.15, #000000), color-stop(0.15, track-color))}.phx-volume-slider.audio input:focus{outline-style:dotted;outline-width:1px;outline-color:#000000}.phx-volume-slider.audio input::-webkit-slider-thumb{-webkit-appearance:none;background-color:#ffffff;border:1px solid #cbcbcb;border-radius:50%;height:12px;width:12px;cursor:pointer}.phx-volume-slider.audio input::-moz-range-thumb{-moz-apperance:none;background-color:#ffffff;border:1px solid #cbcbcb;border-radius:50%;height:12px;width:12px;cursor:pointer}.phx-volume-slider.audio input::-ms-thumb{-ms-appearance:none;background-color:#ffffff;border:1px solid #cbcbcb;border-radius:50%;height:12px;width:12px;cursor:pointer}"
        },
        65463: (e, t, i) => {
            i.r(t), i.d(t, {
                captions_btn: () => s,
                control_rack: () => l,
                end_card_overlay: () => d,
                error_overlay: () => c,
                fullscreen_btn: () => p,
                gotolive_btn: () => u,
                indicator_overlay: () => h,
                info_overlay: () => m,
                livelabel_metadata: () => v,
                loading_overlay: () => b,
                options_menu_btn: () => I,
                ready_overlay: () => k,
                recommendations_card: () => T,
                share_btn: () => C,
                share_overlay: () => S,
                upcominglive_overlay: () => P
            });
            var n = i(41632),
                a = i(97456),
                o = i(51329),
                r = i(28545);
            const s = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.hasCaptions = !1, this.captionsOn = !1, this.locale = (0, o.L)(), this.onTextTrackAvailabilityChange = e => {
                            if (!e) return;
                            const t = e.filter((e => {
                                let {
                                    kind: t
                                } = e;
                                return "subtitles" === t || "captions" === t
                            }));
                            this.hasCaptions = t.length > 0, this.captionsOn = t.some((e => "showing" === e.mode))
                        }, this.onUserInteraction = e => {
                            "options-menu-btn" === e.interactionOwner ? this.captionsOn = "captions-on" === e.interactionName : "phoenix-player-main-node" === e.interactionOwner && "toggle-captions" === e.interactionName && (this.captionsOn = !this.captionsOn)
                        }, this.setCaptionsLabel = () => this.captionsOn ? this.locale.captionsOff : this.locale.captionsOn
                    }
                    connectedCallback() {
                        this.publicAPI.userInteractionsObserver.subscribe(this.onUserInteraction), this.publicAPI.on(a.E.TEXTTRACK_AVAILABILITY_CHANGE, this.onTextTrackAvailabilityChange)
                    }
                    disconnectedCallback() {
                        this.publicAPI.userInteractionsObserver.unsubscribe(this.onUserInteraction), this.publicAPI.off(a.E.TEXTTRACK_AVAILABILITY_CHANGE, this.onTextTrackAvailabilityChange)
                    }
                    handleClick() {
                        this.captionsOn = !this.captionsOn, this.publicAPI.userInteractionsObserver.notifySubscribers({
                            interactionOwner: "captions-btn",
                            interactionName: "toggle-captions",
                            interactionType: "click"
                        })
                    }
                    render() {
                        return this.hasCaptions ? (0, n.h)("button", {
                            type: "button",
                            class: "phx-captions-btn " + (this.captionsOn ? "on" : "off")
                        }, (0, n.h)("svg", {
                            focusable: "false",
                            role: "presentation",
                            viewBox: "0 0 24 24"
                        }, (0, n.h)("path", {
                            class: "background",
                            d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"
                        }), (0, n.h)("path", {
                            class: "foreground",
                            d: "M11,11 L9.5,11 L9.5,10.5 L7.5,10.5 L7.5,13.5 L9.5,13.5 L9.5,13 L11,13 L11,14 C11,14.55 10.55,15 10,15 L7,15 C6.45,15 6,14.55 6,14 L6,10 C6,9.45 6.45,9 7,9 L10,9 C10.55,9 11,9.45 11,10 L11,11 Z",
                            "fill-rule": "nonzero"
                        }), (0, n.h)("path", {
                            class: "foreground",
                            d: "M18,11 L16.5,11 L16.5,10.5 L14.5,10.5 L14.5,13.5 L16.5,13.5 L16.5,13 L18,13 L18,14 C18,14.55 17.55,15 17,15 L14,15 C13.45,15 13,14.55 13,14 L13,10 C13,9.45 13.45,9 14,9 L17,9 C17.55,9 18,9.45 18,10 L18,11 Z",
                            "fill-rule": "nonzero"
                        })), (0, n.h)("label", {
                            class: "phx-tooltip"
                        }, this.setCaptionsLabel())) : null
                    }
                },
                l = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.onObserverUpdate = e => {
                            this.isMediaLoading = e.isMediaLoading, this.playerStatus = e.status.to, this.isClientAdvertising = (0, r.i)(e.status)
                        }, this.checkIfVisible = () => !(this.playerStatus === a.S.ERROR || this.isMediaLoading || this.isClientAdvertising)
                    }
                    connectedCallback() {
                        this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                    }
                    disconnectedCallback() {
                        this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                    }
                    render() {
                        const e = this.playerStatus === a.S.READY ? " hidden" : "",
                            t = this.checkIfVisible() ? "" : " hidden";
                        return (0, n.h)("div", {
                            key: "cbb591625f8034ba6fa3ea80f41b246c90b178fd",
                            class: `phx-control-rack${e}`
                        }, (0, n.h)("div", {
                            key: "584fa8d960a0e7089fb2a9851a53191e48825179",
                            class: `phx-controls-top${t}`
                        }, (0, n.h)("div", {
                            key: "029666ba7075bd38e1e1546d51072993377f2404",
                            class: "phx-controls-top-left"
                        }, (0, n.h)("currenttime-metadata", {
                            key: "83fb1845d1ef1721b1c6bc03f9a29ef131b514f6",
                            publicAPI: this.publicAPI
                        }), (0, n.h)("livelabel-metadata", {
                            key: "e06eb1b78cca18b615e3104e87dab5f35c118028",
                            publicAPI: this.publicAPI
                        }), (0, n.h)("gotolive-btn", {
                            key: "76b30d8afaa8fcb8e5bad75d1dadadc71450d650",
                            publicAPI: this.publicAPI
                        })), (0, n.h)("div", {
                            key: "ee9d598202984da4a6700fccd7b6aa575a184b38",
                            class: "phx-controls-top-middle"
                        }, (0, n.h)("seek-bar", {
                            key: "165cbb08451bdfa51b8fd09d4450f52598e9db38",
                            publicAPI: this.publicAPI
                        })), (0, n.h)("div", {
                            key: "dffc78d6e4bd33521c95c4991f59c43709bf715c",
                            class: "phx-controls-top-right"
                        }, (0, n.h)("duration-metadata", {
                            key: "deeb4ebae9429790935f7bd318777c47070e5069",
                            publicAPI: this.publicAPI
                        }))), (0, n.h)("div", {
                            key: "8b949759188217845f3d2ce6f2baf176e9e5f4d5",
                            class: "phx-controls-left"
                        }, (0, n.h)("play-pause-stop-btn", {
                            key: "10bfb9cc1a84c2332afc10e72ddafae1954b057e",
                            publicAPI: this.publicAPI
                        }), (0, n.h)("volume-controls", {
                            key: "40e5cde7d4bde039e586d549d543aaa2a762a0e2",
                            publicAPI: this.publicAPI
                        })), (0, n.h)("div", {
                            key: "d99f26e248de4e0201e277a6e750c1e673cb34a5",
                            class: "phx-controls-right"
                        }, (0, n.h)("captions-btn", {
                            key: "b18b4b4126eda1076e360bd9df9944e37471f5b6",
                            publicAPI: this.publicAPI
                        }), (0, n.h)("share-btn", {
                            key: "4f8acd89b51c75018b1be2c9f76275d221ad47ce",
                            publicAPI: this.publicAPI
                        }), (0, n.h)("fullscreen-btn", {
                            key: "631bbd71f68c1f6a1c023da6729afbabb8557be7",
                            publicAPI: this.publicAPI
                        }), (0, n.h)("options-menu-btn", {
                            key: "6f20a4f5dcf26ad354256d4463b5b7f0d7171195",
                            publicAPI: this.publicAPI
                        })))
                    }
                };
            l.style = ".phx-control-rack{position:absolute;left:0;bottom:0;width:100%;box-sizing:border-box;background:linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);z-index:1;padding:58px 2% 0 2%;height:112px;pointer-events:none}.phx-control-rack.hidden{display:none}.phx-control-rack .phx-controls-top{display:flex;align-items:center;pointer-events:auto}.phx-control-rack .phx-controls-top.hidden{display:none}.phx-control-rack .phx-controls-top .phx-controls-top-middle{flex-grow:1}.phx-control-rack .phx-controls-top .phx-controls-top-left,.phx-control-rack .phx-controls-top .phx-controls-top-right{font-size:13px;font-weight:700;letter-spacing:-0.1px}.phx-control-rack .phx-controls-top .phx-controls-top-left{padding-right:8px}.phx-control-rack .phx-controls-top .phx-controls-top-right{padding-left:8px}.phx-control-rack .phx-controls-left{left:2%}.phx-control-rack .phx-controls-right{right:2%}.phx-control-rack .phx-controls-right button label{right:0}.phx-control-rack .phx-controls-left,.phx-control-rack .phx-controls-right{height:34px;position:absolute;bottom:0;pointer-events:auto}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button),.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button){font-size:0;background:none;border:none;outline:none;margin:0;padding:0;cursor:pointer;display:flex;flex-wrap:wrap;height:24px;width:auto;box-sizing:content-box;position:relative;overflow:visible;float:left;padding:4px}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button):focus,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button):focus{outline:2px solid #E60606}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button):hover svg .foreground,.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button):focus svg .foreground,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button):hover svg .foreground,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button):focus svg .foreground{fill:#fff}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button):not(.phx-gotolive-btn),.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button):not(.phx-gotolive-btn){width:24px;justify-content:space-around}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button).phx-captions-btn.on svg .background,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button).phx-captions-btn.on svg .background{fill:#E60606}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg .background,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg .background{fill:rgba(255, 255, 255, 0.85)}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg .foreground,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg .foreground{fill:transparent}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg:hover .foreground,.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg:focus .foreground,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg:hover .foreground,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg:focus .foreground{fill:transparent}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg:hover .background,.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg:focus .background,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg:hover .background,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button).phx-captions-btn.off svg:focus .background{fill:#fff}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button) svg,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button) svg{width:100%;height:100%}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button) svg .background,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button) svg .background{fill:transparent}.phx-control-rack .phx-controls-left button:not(.phx-options-menulist-back-button) svg .foreground,.phx-control-rack .phx-controls-right button:not(.phx-options-menulist-back-button) svg .foreground{fill:rgba(255, 255, 255, 0.85)}.phx-control-rack button label{display:block;position:absolute;bottom:calc(-0.6875rem + -6px);padding:6px;border-radius:4px;background:#263238;font-size:0.6875rem;font-weight:bold;white-space:nowrap;transform:translateY(0px);opacity:0;pointer-events:none;line-height:1rem}.phx-control-rack button:hover label,.phx-control-rack button:focus label{animation:tooltipAnimation 4s;z-index:1;color:white}@keyframes tooltipAnimation{0%{opacity:0;transform:translateY(-40px)}5%{opacity:1;transform:translateY(-70px)}95%{opacity:1;transform:translateY(-70px)}100%{opacity:0;transform:translateY(-40px)}}.phx-control-rack{opacity:1;transition:opacity 0.2s}.inactive .phx-control-rack{opacity:0;cursor:none}";
            const d = class {
                constructor(e) {
                    (0, n.r)(this, e), this.onObserverUpdate = e => {
                        this.playerStatus !== e.status.to && this.onStatusChange(e.status)
                    }, this.onStatusChange = e => {
                        this.playerStatus = e.to
                    }
                }
                connectedCallback() {
                    this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                }
                disconnectedCallback() {
                    this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                }
                render() {
                    return "ENDED" !== this.playerStatus ? null : (0, n.h)("div", {
                        class: "phx-end-card-overlay"
                    }, (0, n.h)("div", {
                        class: "phx-replay-icon"
                    }, (0, n.h)("svg", {
                        focusable: "false",
                        role: "presentation",
                        height: "80",
                        width: "80",
                        viewBox: "0 0 80 80"
                    }, (0, n.h)("path", {
                        class: "foreground",
                        d: "m40 17v4c11.6 0 21 9.4 21 21s-9.4 21-21 21-21-9.4-21-21c0-5.5 2.2-10.6 5.7-14.3l5.6 4.2c-2.7 2.5-4.3 6.1-4.3 10.1 0 7.7 6.3 14 14 14s14-6.3 14-14-6.3-14-14-14v4l-10-7.5zm-4.764 31.894c29.843 20.737 14.921 10.369 0 0z"
                    }))), (0, n.h)("recommendations-card", {
                        publicAPI: this.publicAPI
                    }))
                }
            };
            d.style = ".phoenix-player .phx-video-ui .phx-end-card-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.75);cursor:pointer;z-index:1}.phoenix-player .phx-video-ui .phx-end-card-overlay .phx-replay-icon{display:flex;align-items:center;justify-content:center;pointer-events:none;width:100%;height:100%}.phoenix-player .phx-video-ui .phx-end-card-overlay .phx-replay-icon svg .foreground{fill:#fff}";
            const c = class {
                constructor(e) {
                    (0, n.r)(this, e), this.onObserverUpdate = e => {
                        "CRITICAL_ERROR" === e.upcomingLiveStatus && (this.error = this.liveStreamError)
                    }, this.onCriticalError = e => {
                        this.publicAPI.mediaData.isLive ? this.liveStreamError = e : this.error = e
                    }, this.onInitialPlay = () => {
                        this.error = null, this.liveStreamError = null
                    }, this.enableEventListeners = e => {
                        const t = e ? "on" : "off";
                        this.publicAPI && (this.publicAPI[t](a.E.PLAYBACK_INITIALPLAY, this.onInitialPlay), this.publicAPI[t](a.E.CRITICAL_ERROR, this.onCriticalError))
                    }, this.retryPlayback = () => {
                        this.error = null, this.liveStreamError = null, this.publicAPI.media.play()
                    }
                }
                connectedCallback() {
                    this.enableEventListeners(!0), this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                }
                disconnectedCallback() {
                    this.enableEventListeners(!1), this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                }
                render() {
                    if (this.error) return (0, n.h)("div", {
                        class: "phx-error-overlay"
                    }, (0, n.h)("span", {
                        class: "phx-error-title"
                    }, "Oops..."), (0, n.h)("p", null, this.error.message), (0, n.h)("button", {
                        type: "button",
                        class: "phx-error-retry-btn",
                        onClick: this.retryPlayback
                    }, "Retry"))
                }
            };
            c.style = ".phoenix-player .phx-video-ui .phx-error-overlay{width:100%;height:100%;background-color:rgb(40, 40, 40);color:rgb(220, 220, 220);position:absolute;top:0;left:0;z-index:1;box-sizing:border-box;padding:40px}.phoenix-player .phx-video-ui .phx-error-overlay .phx-error-title{font-size:1.2rem;font-weight:bold}.phoenix-player .phx-audio-ui .phx-error-overlay{background-color:rgb(255, 255, 255);color:#000000;padding:20px;border:1px solid #e0e0e0}";
            const p = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.fullScreenButtonClicked = (0, n.c)(this, "fullscreenBtnClicked", 7), this.locale = (0, o.L)(), this.onUserInteraction = e => {
                            "phoenix-player-main-node" === e.interactionOwner && "toggle-fullscreen" === e.interactionName && this.handleClick()
                        }
                    }
                    connectedCallback() {
                        this.publicAPI.userInteractionsObserver.subscribe(this.onUserInteraction)
                    }
                    disconnectedCallback() {
                        this.publicAPI.userInteractionsObserver.unsubscribe(this.onUserInteraction)
                    }
                    handleClick() {
                        this.fullScreenButtonClicked.emit()
                    }
                    render() {
                        return this.publicAPI.controlsConfig.hideFullscreenBtn ? null : (0, n.h)("button", {
                            type: "button"
                        }, (0, n.h)("svg", {
                            focusable: "false",
                            role: "presentation",
                            viewBox: "0 0 24 24"
                        }, (0, n.h)("path", {
                            class: "background",
                            d: "M0 0h24v24H0z"
                        }), (0, n.h)("path", {
                            class: "foreground",
                            d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                        })), (0, n.h)("label", {
                            class: "phx-tooltip"
                        }, this.locale.fullscreen))
                    }
                },
                u = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.locale = (0, o.L)(), this.onObserverUpdate = e => {
                            this.isSeekable = e.isSeekable, this.duration = e.duration, this.isAtLiveEdge = e.isAtLiveEdge, this.liveSyncPosition = e.liveSyncPosition
                        }
                    }
                    connectedCallback() {
                        this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                    }
                    disconnectedCallback() {
                        this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                    }
                    handleClick() {
                        this.publicAPI.media.setCurrentTime(this.liveSyncPosition), this.publicAPI.userInteractionsObserver.notifySubscribers({
                            interactionOwner: "gotolive-btn",
                            interactionName: "go-live",
                            interactionType: "click"
                        })
                    }
                    render() {
                        if (this.isSeekable && this.duration === 1 / 0 && !this.isAtLiveEdge) return (0, n.h)("button", {
                            type: "button",
                            class: "phx-gotolive-btn"
                        }, (0, n.h)("span", null, "Go Live"), (0, n.h)("svg", {
                            focusable: "false",
                            role: "presentation",
                            width: "18",
                            height: "15",
                            viewBox: "0 0 18 15",
                            fill: "none"
                        }, (0, n.h)("path", {
                            d: "M6.25201 7.4936L2.29416 3.65054C2.10691 3.46989 2.00902 3.24407 2.00051 2.97308C1.992 2.7021 2.08988 2.46806 2.29416 2.27099C2.48141 2.09033 2.71973 2 3.00912 2C3.29852 2 3.53684 2.09033 3.72409 2.27099L8.42245 6.80382C8.52458 6.90236 8.59693 7.00911 8.63949 7.12407C8.68205 7.23903 8.70333 7.36221 8.70333 7.4936C8.70333 7.62498 8.68205 7.74816 8.63949 7.86312C8.59693 7.97808 8.52458 8.08483 8.42245 8.18337L3.72409 12.7162C3.53684 12.8969 3.30277 12.9913 3.02189 12.9995C2.74101 13.0077 2.49843 12.9133 2.29416 12.7162C2.10691 12.5355 2.01328 12.3056 2.01328 12.0264C2.01328 11.7472 2.10691 11.5173 2.29416 11.3366L6.25201 7.4936ZM12.9931 7.4936L9.03527 3.65054C8.84802 3.46989 8.75014 3.24407 8.74163 2.97308C8.73312 2.7021 8.831 2.46806 9.03527 2.27099C9.22253 2.09033 9.46085 2 9.75024 2C10.0396 2 10.278 2.09033 10.4652 2.27099L15.1636 6.80382C15.2657 6.90236 15.3381 7.00911 15.3806 7.12407C15.4232 7.23903 15.4444 7.36221 15.4444 7.4936C15.4444 7.62498 15.4232 7.74816 15.3806 7.86312C15.3381 7.97808 15.2657 8.08483 15.1636 8.18337L10.4652 12.7162C10.278 12.8969 10.0439 12.9913 9.76301 12.9995C9.48213 13.0077 9.23955 12.9133 9.03527 12.7162C8.84802 12.5355 8.75439 12.3056 8.75439 12.0264C8.75439 11.7472 8.84802 11.5173 9.03527 11.3366L12.9931 7.4936Z"
                        })), (0, n.h)("label", {
                            class: "phx-tooltip"
                        }, this.locale.gotolive))
                    }
                };
            u.style = 'button.phx-gotolive-btn{font-size:0;background:none;border:none;outline:none;margin:0;padding:0;cursor:pointer;display:inline-flex;margin-left:6px;flex-wrap:wrap;align-content:space-around;align-items:center}button.phx-gotolive-btn:focus{outline:2px solid #E60606}button.phx-gotolive-btn:hover svg .foreground,button.phx-gotolive-btn:focus svg .foreground{fill:#fff}button.phx-gotolive-btn span{white-space:nowrap;text-transform:uppercase;text-shadow:0px 0px 2px rgba(0, 0, 0, 0.5);font-size:0.8125rem;font-weight:bold;color:#FFFFFF;opacity:0.85}button.phx-gotolive-btn span::before{content:"";margin-right:4px;display:inline-block;width:8px;height:8px;border-radius:4px;background-color:#c1c1c1}button.phx-gotolive-btn svg{margin-left:4px}button.phx-gotolive-btn svg path{fill:#FFF;filter:drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5))}button.phx-gotolive-btn:hover span,button.phx-gotolive-btn:focus-visible span{opacity:1}button.phx-gotolive-btn:hover svg path,button.phx-gotolive-btn:focus-visible svg path{fill:#FFC212}';
            const h = class {
                constructor(e) {
                    (0, n.r)(this, e), this.indicatorType = a.I.HIDDEN, this.onUserInteraction = e => {
                        if (this.indicatorElement && "phoenix-player-main-node" === e.interactionOwner) {
                            if (this.indicatorElement.dataset.type !== a.I.HIDDEN) {
                                if (this.indicatorType === e.interactionName) return;
                                this.removeIndicator(this.indicatorElement, !0)
                            }
                            this.indicatorType = e.interactionName, this.indicatorElement.dataset.type = e.interactionName, this.indicatorElement.classList.remove(a.I.HIDDEN), this.indicatorElement.classList.add(e.interactionName)
                        }
                    }, this.removeIndicator = (e, t) => {
                        t && document.getAnimations().forEach((e => {
                            "indicatorFlash" === e.animationName && (e.cancel(), e.play())
                        })), e.classList.remove(e.dataset.type), e.classList.add(a.I.HIDDEN), e.dataset.type = a.I.HIDDEN
                    }, this.onAnimationEnd = e => {
                        this.removeIndicator(e.target), e.stopPropagation()
                    }
                }
                connectedCallback() {
                    this.publicAPI.userInteractionsObserver.subscribe(this.onUserInteraction)
                }
                disconnectedCallback() {
                    this.publicAPI.userInteractionsObserver.unsubscribe(this.onUserInteraction)
                }
                render() {
                    return (0, n.h)("div", {
                        key: "2187805043723088fbaadce9ab9a6f3bb9478df3",
                        class: "phx-indicators-overlay",
                        ref: e => this.indicatorsContainer = e
                    }, (0, n.h)("div", {
                        key: "e4d92362df662435f8c2cab0f2b23f3dd9d5d371",
                        ref: e => this.indicatorElement = e,
                        class: `indicator ${a.I.HIDDEN}`,
                        "data-type": a.I.HIDDEN,
                        onAnimationEnd: this.onAnimationEnd
                    }))
                }
            };
            h.style = ".phoenix-player .phx-video-ui .phx-indicators-overlay{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.phoenix-player .phx-video-ui .phx-indicators-overlay .indicator{opacity:0;height:80px;width:80px;animation:indicatorFlash 0.3s 1;border-radius:50%;pointer-events:none}.phoenix-player .phx-video-ui .phx-indicators-overlay .indicator.hidden{display:none}.phoenix-player .phx-video-ui .phx-indicators-overlay .indicator.play{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='80' width='80' viewBox='0 0 80 80'%3E%3Cpath fill='rgba(38,50,56,0.66)' d='M0 0v80h80V0H0zm30 20 16 10 16 10-16 10-16 10V20z'/%3E%3Cpath fill='rgba(255,255,255,0.85)' d='M30.22 20.25c-.223 4.435-.094 8.89-.142 13.33.009 8.737-.036 17.48.073 26.21A3665.212 3665.212 0 0 0 61.67 40.1c-2.395-1.814-5.047-3.302-7.568-4.948a5745.588 5745.588 0 0 0-23.89-14.91z'/%3E%3C/svg%3E\")}.phoenix-player .phx-video-ui .phx-indicators-overlay .indicator.pause{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='80' width='80' viewBox='0 0 80 80'%3E%3Cpath fill='rgba(38,50,56,0.66)' d='M0 0v80h80V0H0zm22 20h16v40H22V20zm20 0h16v40H42V20z'/%3E%3Cpath fill='rgba(255,255,255,0.85)' d='M22.07 20.09v39.88h15.88V20.09H22.07zm20 0v39.88h15.88V20.09H42.07z'/%3E%3C/svg%3E\")}.phoenix-player .phx-video-ui .phx-indicators-overlay .indicator.stop{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='80' width='80' viewBox='0 0 80 80' %3e%3cpath fill='rgba(38,50,56,0.66)' d='m0 0v80h80v-80h-80zm22 20h36v40h-36v-40z'/%3E%3Crect fill='rgba(255,255,255,0.85)' fill-rule='evenodd' height='40' width='36' y='20' x='22'/%3e/%3e%3c/svg%3e\")}.phoenix-player .phx-video-ui .phx-indicators-overlay .indicator.volume-down{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='80' width='80' viewBox='0 0 80 80'%3e%3cpath fill='rgba(38,50,56,0.66)' d='m0 0v80h80v-80h-80zm45.48 20v20'%3e%3c/path%3e%3cpath fill='rgba(255,255,255,0.85)' d='m36.062 26.367c-3.1042 2.0659-6.2083 4.1318-9.3125 6.1978-3.7292-0.01009-7.4583-0.02018-11.188-0.03027v14.887c3.7039-0.0047 7.4077-0.0095 11.112-0.0144 6.2337 4.1563 12.467 8.3126 18.701 12.469 0.05797-13.235 0.05782-26.471 0-39.707-3.1042 2.0659-6.2083 4.1318-9.3125 6.1978z'/%3e%3cpath fill='rgba(255,255,255,0.85)' d='m48.332 30.121-0.73438 1.2637c-0.77226 0.87946-0.7829 1.4748 0.27344 1.9688 3.1475 2.5873 4.1482 7.4116 2.0469 10.949-0.67331 1.2969-1.8258 2.2651-2.918 3.1523 0.37972 0.83613 0.83496 1.7635 1.416 2.4238 3.9738-2.4251 6.2671-7.3726 5.2773-11.965-0.5594-3.217-2.6209-6.0579-5.3613-7.793z'/%3e%3c/svg%3e\")}.phoenix-player .phx-video-ui .phx-indicators-overlay .indicator.volume-up{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='80' width='80' viewBox='0 0 80 80'%3e%3cpath fill='rgba(38,50,56,0.66)' d='m0 0v80h80v-80h-80zm45.48 20v20 20l-15-10-4-2.666v0.166h-11v-15h11v0.166l4-2.666 15-10zm15.288 2.371c0.043 0.003 0.087 0.027 0.134 0.078 6.069 3.702 9.967 10.649 9.895 17.764 0.07 7.043-3.951 13.832-9.959 17.418-0.583-0.626-1.088-1.497-1.387-2.324 0.825-0.768 1.94-1.36 2.74-2.223 5.369-4.628 7.189-12.713 4.59-19.258-1.2-3.419-3.574-6.318-6.519-8.392-1.189-0.329-0.764-1.15-0.248-1.887 0.225-0.166 0.449-1.195 0.754-1.176zm-7.055 3.682c5.155 2.711 8.59 7.778 8.889 13.06 0.421 5.502-2.81 11.003-7.967 14.069-0.764 0.823-1.358 0.122-1.721-0.606-0.998-1.047 1.012-1.431 1.637-2.111 2.431-1.797 4.231-4.247 5.013-6.963 1.395-4.488-0.015-9.55-3.599-12.963-0.914-0.819-1.856-1.694-3.033-2.201-0.86-0.664 0.405-1.68 0.781-2.285zm-5.381 4.068c2.74 1.735 4.802 4.576 5.361 7.793 0.99 4.592-1.303 9.54-5.277 11.965-0.581-0.66-1.036-1.588-1.416-2.424 1.092-0.887 2.245-1.855 2.918-3.152 2.101-3.538 1.101-8.362-2.047-10.949-1.056-0.494-1.046-1.09-0.273-1.969l0.734-1.264z'/%3e%3cpath fill='rgba(255,255,255,0.85)' d='m36.062 26.367c-3.1042 2.0659-6.2083 4.1318-9.3125 6.1978-3.7292-0.01009-7.4583-0.02018-11.188-0.03027v14.887c3.7039-0.0047 7.4077-0.0095 11.112-0.0144 6.2337 4.1563 12.467 8.3126 18.701 12.469 0.05797-13.235 0.05782-26.471 0-39.707-3.1042 2.0659-6.2083 4.1318-9.3125 6.1978z'/%3e%3cpath fill='rgba(255,255,255,0.85)' d='m48.332 30.121-0.73438 1.2637c-0.77226 0.87946-0.7829 1.4748 0.27344 1.9688 3.1475 2.5873 4.1482 7.4116 2.0469 10.949-0.67331 1.2969-1.8258 2.2651-2.918 3.1523 0.37972 0.83613 0.83496 1.7635 1.416 2.4238 3.9738-2.4251 6.2671-7.3726 5.2773-11.965-0.5594-3.217-2.6209-6.0579-5.3613-7.793z'/%3e%3cpath fill='rgba(255,255,255,0.85)' d='m53.713 26.054c-0.37554 0.60552-1.6401 1.6211-0.78082 2.2846 1.1777 0.50671 2.1189 1.3822 3.0327 2.2011 3.5837 3.413 4.9946 8.4752 3.6002 12.963-0.78264 2.7162-2.5817 5.1657-5.013 6.9624-0.62431 0.68006-2.6367 1.0649-1.6385 2.1118 0.36273 0.72797 0.95745 1.4292 1.7214 0.6058 5.157-3.067 8.388-8.568 7.967-14.07-0.299-5.283-3.734-10.348-8.889-13.059z'/%3e%3c/svg%3e\")}.phoenix-player .phx-video-ui .phx-indicators-overlay .indicator.skip-backward{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='80' width='80' viewBox='0 0 80 80'%3e%3cpath fill='rgba(38,50,56,0.66)' d='m0 0v80h80v-80h-80zm45.48 20v20'%3e%3c/path%3e%3cpath fill='rgba(255,255,255,0.85)' d='m40.1 15-10 7.5 10 7.5v-4c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14c0-4 1.6-7.6 4.3-10.1l-5.6-4.2c-3.5 3.7-5.7 8.8-5.7 14.3 0 11.6 9.4 21 21 21s21-9.4 21-21-9.4-21-21-21v-4z'/%3e%3c/svg%3e\")}.phoenix-player .phx-video-ui .phx-indicators-overlay .indicator.skip-forward{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='80' width='80' viewBox='0 0 80 80'%3e%3cpath fill='rgba(38,50,56,0.66)' d='m0 0v80h80v-80h-80zm45.48 20v20'%3e%3c/path%3e%3cpath fill='rgba(255,255,255,0.85)' d='m40 17v4c-11.6 0-21 9.4-21 21s9.4 21 21 21 21-9.4 21-21c0-5.5-2.2-10.6-5.7-14.3l-5.6 4.2c2.7 2.5 4.3 6.1 4.3 10.1 0 7.7-6.3 14-14 14s-14-6.3-14-14 6.3-14 14-14v4l10-7.5-10-7.5z'/%3e%3c/svg%3e\")}.phoenix-player .phx-video-ui .phx-indicators-overlay .indicator.mute{background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 80 80' width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath style='fill:rgba(38,50,56,.66)' d='M0-.012h80v80H0z'/%3E%3Cpath d='M40 17.777v11.611l-5.806-5.804L40 17.777ZM18.527 15 40 36.473l25 25L61.473 65l-5.667-5.694c-2.944 2.388-6.418 4.167-10.25 5.028v-5.722c2.306-.696 4.388-1.835 6.25-3.278L40 43.527v18.696L26.112 48.334H15V31.666h13.138L15 18.527 18.527 15Zm40.917 25c0-8.806-5.86-16.25-13.888-18.638v-5.724C56.694 18.166 65 28.112 65 40a24.41 24.41 0 0 1-2.862 11.527l-4.194-4.193c.944-2.278 1.5-4.722 1.5-7.334ZM52.5 40c0 .612-.056 1.194-.138 1.75l-6.806-6.806v-6.138C49.666 30.862 52.5 35.084 52.5 40Z' style='fill-rule:nonzero;fill:rgba(255,255,255,.85);paint-order:fill'/%3E%3C/svg%3E\")}@keyframes indicatorFlash{0%{opacity:1;transform:scale(0.75)}100%{opacity:0;transform:scale(1.25)}}";
            const m = class {
                constructor(e) {
                    (0, n.r)(this, e), this.renderPubDate = () => {
                        var e, t;
                        const i = null === (e = this.mediaData) || void 0 === e ? void 0 : e.pubDate,
                            a = null === (t = this.mediaData) || void 0 === t ? void 0 : t.isLive;
                        if (i) return (0, n.h)("span", {
                            class: "phx-info-pub-date",
                            title: new Date(i).toString()
                        }, (0, n.h)("relative-date-time", {
                            pubDate: i,
                            includeSeconds: !1,
                            isLive: a
                        }))
                    }, this.renderContentArea = () => {
                        var e;
                        const t = null === (e = this.mediaData) || void 0 === e ? void 0 : e.contentArea;
                        if (t) return (0, n.h)("span", {
                            class: "phx-info-content-area"
                        }, t)
                    }, this.renderTitle = () => {
                        const {
                            title: e,
                            shareUrl: t
                        } = this.mediaData;
                        if (e) return t ? (0, n.h)("span", {
                            class: "phx-info-title"
                        }, (0, n.h)("a", {
                            href: t
                        }, e)) : (0, n.h)("span", {
                            class: "phx-info-title"
                        }, e)
                    }
                }
                render() {
                    const e = this.mediaData;
                    if ((null === e || void 0 === e ? void 0 : e.title) || (null === e || void 0 === e ? void 0 : e.pubDate) || (null === e || void 0 === e ? void 0 : e.contentArea)) return (0, n.h)("div", {
                        class: "phx-info-overlay"
                    }, this.renderTitle(), (0, n.h)("span", null, this.renderPubDate(), this.renderContentArea()))
                }
            };
            m.style = '.phoenix-player .phx-video-ui .phx-info-overlay{padding:2% 64px 78px 2%;color:#FFFFFF;text-shadow:0px 0px 2px rgba(0, 0, 0, 0.5);box-sizing:border-box;position:absolute;width:100%;top:0;left:0;background:linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);line-height:normal}.phoenix-player .phx-video-ui .phx-info-overlay span.phx-info-title{margin:0;font-size:1rem;width:100%;display:block;font-weight:bold;margin-bottom:5px}.phoenix-player .phx-video-ui .phx-info-overlay span.phx-info-title a{color:#FFFFFF;cursor:pointer;text-decoration:none;border:none;transition:none}.phoenix-player .phx-video-ui .phx-info-overlay span.phx-info-title a:hover,.phoenix-player .phx-video-ui .phx-info-overlay span.phx-info-title a:focus{background-color:initial;text-decoration:underline}.phoenix-player .phx-video-ui .phx-info-overlay span.phx-info-content-area,.phoenix-player .phx-video-ui .phx-info-overlay span.phx-info-pub-date{font-size:0.8rem}.phoenix-player .phx-video-ui .phx-info-overlay span.phx-info-content-area:nth-child(2):before,.phoenix-player .phx-video-ui .phx-info-overlay span.phx-info-pub-date:nth-child(2):before{content:" | "}.phoenix-player .phx-info-overlay{opacity:1;transition:opacity 0.2s}.phoenix-player .inactive .phx-info-overlay{opacity:0;cursor:none}';
            const v = class {
                constructor(e) {
                    (0, n.r)(this, e), this.locale = (0, o.L)(), this.onObserverUpdate = e => {
                        this.isSeekable = e.isSeekable, this.duration = e.duration, this.isAtLiveEdge = e.isAtLiveEdge
                    }
                }
                connectedCallback() {
                    this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                }
                disconnectedCallback() {
                    this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                }
                render() {
                    if (this.duration === 1 / 0 && (this.isAtLiveEdge || !this.isSeekable)) return (0, n.h)("span", {
                        class: "phx-live-label-metadata"
                    }, this.locale.live)
                }
            };
            v.style = '.phx-live-label-metadata{color:#fff;text-shadow:0 0 2px rgba(0, 0, 0, 0.5);opacity:0.9;display:flex;align-items:center;text-transform:uppercase}.phx-live-label-metadata::before{content:"";margin-right:4px;display:inline-block;width:8px;height:8px;border-radius:4px;background-color:#FFC212}';
            const b = class {
                constructor(e) {
                    (0, n.r)(this, e)
                }
                render() {
                    if (this.playerStatus === a.S.LOADING) return (0, n.h)("div", {
                        class: "phx-loading-overlay"
                    })
                }
            };
            b.style = '.phoenix-player .phx-video-ui .phx-loading-overlay{position:absolute;top:0;left:0;width:100%;height:100%;transition:background-color 0.33s;z-index:1;pointer-events:none}.phoenix-player .phx-video-ui .phx-loading-overlay::before,.phoenix-player .phx-video-ui .phx-loading-overlay::after{width:25px;height:25px;display:inline-block;border-radius:50%;content:"";background-color:#ffffff;position:absolute;top:calc(50% - 12.5px)}.phoenix-player .phx-video-ui .phx-loading-overlay::before{left:calc(50% - 12.5px);animation:loading-animation 1.15s ease-in-out infinite;-o-animation:loading-animation 1.15s ease-in-out infinite;-ms-animation:loading-animation 1.15s ease-in-out infinite;-webkit-animation:loading-animation 1.15s ease-in-out infinite;-moz-animation:loading-animation 1.15s ease-in-out infinite}.phoenix-player .phx-video-ui .phx-loading-overlay::after{left:calc(50% + 12.5px);animation:loading-animation 1.15s ease-in-out 0.58s infinite;-o-animation:loading-animation 1.15s ease-in-out 0.58s infinite;-ms-animation:loading-animation 1.15s ease-in-out 0.58s infinite;-webkit-animation:loading-animation 1.15s ease-in-out 0.58s infinite;-moz-animation:loading-animation 1.15s ease-in-out 0.58s infinite}@keyframes loading-animation{70%{transform:scale(0.5)}}@-o-keyframes loading-animation{70%{-o-transform:scale(0.5)}}@-ms-keyframes loading-animation{70%{-ms-transform:scale(0.5)}}@-webkit-keyframes loading-animation{70%{-webkit-transform:scale(0.5)}}@-moz-keyframes loading-animation{70%{-moz-transform:scale(0.5)}}';
            const g = "Off",
                x = "closed-captions-menu",
                A = "audio-tracks-menu",
                y = "playback-speed-menu",
                f = {
                    slowest: "0.25",
                    slower: "0.5",
                    slow: "0.75",
                    normal: "1",
                    slightlyFaster: "1.25",
                    fast: "1.5",
                    faster: "1.75",
                    fastest: "2"
                };
            var E = function(e, t) {
                var i = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (i[n[a]] = e[n[a]])
                }
                return i
            };
            const I = class {
                constructor(e) {
                    (0, n.r)(this, e), this.locale = (0, o.L)(), this.menuIsOpen = !1, this.isTextTrackShowing = !1, this.audioTrackMenuItems = null, this.currentSubMenu = null, this.lastSelectedItemId = "", this.lastSelectedTextTrackId = "", this.closedCaptionsOffMenuItem = {
                        id: g,
                        name: this.locale.off,
                        selected: !1
                    }, this.playbackSpeedMenuItems = Object.keys(f).map((e => ({
                        id: f[e],
                        name: this.locale[e],
                        selected: f[e] === f.normal
                    }))), this.isTrackArray = e => Array.isArray(e) && !!e.length, this.capitalize = e => e ? e[0].toUpperCase() + e.slice(1) : "", this.updateTextTrackMenuItems = e => {
                        this.isTrackArray(e) ? this.textTrackMenuItems = [this.closedCaptionsOffMenuItem, ...e.map((e => ({
                            id: e.id,
                            name: `${this.capitalize(e.label)||"Default"} - ${this.capitalize(e.kind)}`,
                            selected: "showing" === e.mode,
                            key: e.id
                        })))] : (this.textTrackMenuItems = null, this.lastSelectedTextTrackId = "")
                    }, this.setShowingOnTrackChange = e => {
                        this.isTrackArray(e) && (this.isTextTrackShowing = e.some((e => "showing" === e.mode)), this.isTextTrackShowing || (this.closedCaptionsOffMenuItem.selected = !0))
                    }, this.onTextTrackAvailabilityChange = e => {
                        const t = e.filter((e => {
                            let {
                                kind: t
                            } = e;
                            return "subtitles" === t || "captions" === t
                        }));
                        this.setShowingOnTrackChange(t), this.updateTextTrackMenuItems(t)
                    }, this.setSelectedTextTrack = e => {
                        var t;
                        const i = e === g;
                        null === (t = this.textTrackMenuItems) || void 0 === t || t.forEach((t => {
                            t.selected = t.id === e, t.selected && !i && (this.publicAPI.media.textTrackOn(t.key), this.lastSelectedTextTrackId = t.id)
                        })), i && this.publicAPI.media.textTracksOff(), this.isTextTrackShowing = !i, this.lastSelectedItemId = e
                    }, this.onAudioTracksAvailabilityChange = e => {
                        this.isTrackArray(e) ? this.audioTrackMenuItems = e.map((e => ({
                            id: e.id,
                            name: e.name,
                            selected: e.enabled
                        }))) : this.audioTrackMenuItems = null
                    }, this.setSelectedAudioTrack = e => {
                        var t;
                        null === (t = this.audioTrackMenuItems) || void 0 === t || t.forEach((t => {
                            t.selected = t.id === e
                        })), this.publicAPI.media.audioTrackOn(e), this.lastSelectedItemId = e
                    }, this.setSelectedPlaybackSpeed = e => {
                        this.playbackSpeedMenuItems.forEach((t => {
                            t.selected = t.id === e
                        }));
                        const t = parseFloat(e);
                        this.publicAPI.media.setPlaybackRate(t), this.lastSelectedItemId = e
                    }, this.onUserInteraction = e => {
                        switch (e.interactionOwner) {
                            case "options-menu":
                                this.menuIsOpen = !0;
                                break;
                            case "options-menu-back-btn":
                                this.menuIsOpen = !0, this.currentSubMenu = null;
                                break;
                            case "captions-btn":
                            case "phoenix-player-main-node":
                                this.menuIsOpen = !1, "toggle-captions" === e.interactionName && this.handleToggle();
                                break;
                            default:
                                this.menuIsOpen = !1
                        }
                    }, this.handleToggle = () => {
                        var e, t, i, n;
                        let a = g;
                        this.isTextTrackShowing ? this.lastSelectedTextTrackId = (null === (t = null === (e = this.textTrackMenuItems) || void 0 === e ? void 0 : e.find((e => e.selected))) || void 0 === t ? void 0 : t.id) || "" : a = this.lastSelectedTextTrackId || (null === (n = null === (i = this.textTrackMenuItems) || void 0 === i ? void 0 : i[1]) || void 0 === n ? void 0 : n.id) || g, this.setSelectedTextTrack(a)
                    }, this.menuData = {
                        [x]: {
                            id: x,
                            name: this.locale.closedCaptions,
                            selected: !1,
                            getItems: () => this.textTrackMenuItems,
                            onChange: this.setSelectedTextTrack
                        },
                        [A]: {
                            id: A,
                            name: this.locale.audioTracks,
                            selected: !1,
                            getItems: () => this.audioTrackMenuItems,
                            onChange: this.setSelectedAudioTrack
                        },
                        [y]: {
                            id: y,
                            name: this.locale.playbackSpeed,
                            selected: !1,
                            getItems: () => this.playbackSpeedMenuItems,
                            onChange: this.setSelectedPlaybackSpeed
                        }
                    }, this.getMainMenuItems = () => {
                        var e, t;
                        const i = this.menuData[x],
                            n = E(i, ["onChange", "getItems"]),
                            a = this.menuData[A],
                            o = E(a, ["onChange", "getItems"]),
                            r = this.menuData[y],
                            s = E(r, ["onChange", "getItems"]);
                        return [...(null === (e = this.textTrackMenuItems) || void 0 === e ? void 0 : e.length) ? [Object.assign(Object.assign({}, n), {
                            currentSelection: this.getCurrentSelection(x)
                        })] : [], ...(null === (t = this.audioTrackMenuItems) || void 0 === t ? void 0 : t.length) > 1 ? [Object.assign(Object.assign({}, o), {
                            currentSelection: this.getCurrentSelection(A)
                        })] : [], Object.assign(Object.assign({}, s), {
                            currentSelection: this.getCurrentSelection(y)
                        })]
                    }, this.getMenuConfig = () => {
                        if (this.currentSubMenu) {
                            const {
                                name: e,
                                getItems: t,
                                onChange: i
                            } = this.menuData[this.currentSubMenu];
                            return {
                                items: t(),
                                title: e,
                                onChange: i
                            }
                        }
                        return {
                            items: this.getMainMenuItems(),
                            onChange: this.setCurrentSubMenu
                        }
                    }, this.setCurrentSubMenu = e => {
                        this.currentSubMenu = e, this.lastSelectedItemId = e
                    }, this.getCurrentSelection = e => {
                        var t;
                        return (null === (t = this.menuData[e].getItems().find((e => e.selected))) || void 0 === t ? void 0 : t.name) || ""
                    }, this.getCTAConfig = () => this.currentSubMenu !== x ? null : {
                        textBefore: this.locale.ctaBeforeLink,
                        linkText: this.locale.ctaLinkText,
                        linkUrl: "https://cbchelp.cbc.ca/hc/en-ca/articles/17292864929435",
                        textAfter: this.locale.ctaAfterLink
                    }, this.renderOptionsMenu = () => this.menuIsOpen ? (0, n.h)("options-menu", {
                        menuConfig: this.getMenuConfig(),
                        ctaConfig: this.getCTAConfig(),
                        publicAPI: this.publicAPI
                    }) : null
                }
                isTextTrackShowingHandler() {
                    this.publicAPI.userInteractionsObserver.notifySubscribers({
                        interactionOwner: "options-menu-btn",
                        interactionName: "captions-" + (this.isTextTrackShowing ? "on" : "off"),
                        interactionType: "click"
                    })
                }
                connectedCallback() {
                    this.publicAPI.userInteractionsObserver.subscribe(this.onUserInteraction), this.publicAPI.on(a.E.AUDIOTRACK_AVAILABILITY_CHANGE, this.onAudioTracksAvailabilityChange), this.publicAPI.on(a.E.TEXTTRACK_AVAILABILITY_CHANGE, this.onTextTrackAvailabilityChange)
                }
                disconnectedCallback() {
                    this.publicAPI.userInteractionsObserver.unsubscribe(this.onUserInteraction), this.publicAPI.off(a.E.AUDIOTRACK_AVAILABILITY_CHANGE, this.onAudioTracksAvailabilityChange), this.publicAPI.off(a.E.TEXTTRACK_AVAILABILITY_CHANGE, this.onTextTrackAvailabilityChange)
                }
                handleClick(e) {
                    e.stopPropagation();
                    e.target === this.moreOptionsButton && (this.menuIsOpen = !this.menuIsOpen, this.currentSubMenu = null)
                }
                handleKeyDown(e) {
                    switch (e.key) {
                        case a.K.ESCAPE:
                            this.menuIsOpen = !1;
                            break;
                        case a.K.TAB:
                            if (e.shiftKey) return;
                            e.target.classList.contains("last-item") && (this.moreOptionsButton.focus(), e.preventDefault())
                    }
                }
                render() {
                    return (0, n.h)(n.H, {
                        key: "cda76e715080851fff0bf30551442beea26d77c8",
                        "aria-expanded": this.menuIsOpen.toString()
                    }, (0, n.h)("span", {
                        key: "b46abb6d658ad96d7db19844ab94a6cb478109d4"
                    }, (0, n.h)("button", {
                        key: "25a18fd274f56d2d0f6a7c08cffb231f2bde1288",
                        type: "button",
                        class: "phx-options-btn",
                        ref: e => this.moreOptionsButton = e,
                        "aria-haspopup": "menu"
                    }, (0, n.h)("svg", {
                        key: "15c6eedcb0592124ac65017206864b4a47ea83a8",
                        focusable: "false",
                        role: "presentation",
                        viewBox: "0 0 25 25"
                    }, (0, n.h)("path", {
                        key: "f52930f4a13402c5492c535ec3b360f12a54a5d6",
                        d: "M12.7793 20.0728C12.2293 20.0728 11.7585 19.8769 11.3668 19.4853C10.9751 19.0936 10.7793 18.6228 10.7793 18.0728C10.7793 17.5228 10.9751 17.0519 11.3668 16.6603C11.7585 16.2686 12.2293 16.0728 12.7793 16.0728C13.3293 16.0728 13.8001 16.2686 14.1918 16.6603C14.5835 17.0519 14.7793 17.5228 14.7793 18.0728C14.7793 18.6228 14.5835 19.0936 14.1918 19.4853C13.8001 19.8769 13.3293 20.0728 12.7793 20.0728ZM12.7793 14.0728C12.2293 14.0728 11.7585 13.8769 11.3668 13.4853C10.9751 13.0936 10.7793 12.6228 10.7793 12.0728C10.7793 11.5228 10.9751 11.0519 11.3668 10.6603C11.7585 10.2686 12.2293 10.0728 12.7793 10.0728C13.3293 10.0728 13.8001 10.2686 14.1918 10.6603C14.5835 11.0519 14.7793 11.5228 14.7793 12.0728C14.7793 12.6228 14.5835 13.0936 14.1918 13.4853C13.8001 13.8769 13.3293 14.0728 12.7793 14.0728ZM12.7793 8.07275C12.2293 8.07275 11.7585 7.87692 11.3668 7.48525C10.9751 7.09359 10.7793 6.62275 10.7793 6.07275C10.7793 5.52275 10.9751 5.05192 11.3668 4.66025C11.7585 4.26859 12.2293 4.07275 12.7793 4.07275C13.3293 4.07275 13.8001 4.26859 14.1918 4.66025C14.5835 5.05192 14.7793 5.52275 14.7793 6.07275C14.7793 6.62275 14.5835 7.09359 14.1918 7.48525C13.8001 7.87692 13.3293 8.07275 12.7793 8.07275Z",
                        fill: "white"
                    })), (0, n.h)("label", {
                        key: "ebe069f95957664c0edc07537c9257c596733d4e",
                        class: "phx-tooltip"
                    }, this.locale.moreOptions)), this.renderOptionsMenu()))
                }
                static get watchers() {
                    return {
                        isTextTrackShowing: ["isTextTrackShowingHandler"]
                    }
                }
            };
            I.style = ".phx-options-btn svg{pointer-events:none}";
            const w = (0, o.L)(),
                k = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.locale = (0, o.L)(), this.onInitialPlay = () => {
                            var e, t, i, n, o, r;
                            this.playerStatus === a.S.READY && (null === (i = null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.load) || void 0 === i || i.call(t), null === (r = null === (o = null === (n = this.publicAPI) || void 0 === n ? void 0 : n.media) || void 0 === o ? void 0 : o.play) || void 0 === r || r.call(o))
                        }, this.renderCCIcon = () => {
                            var e, t;
                            if (null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.hasCaptions) return (0, n.h)("div", {
                                class: "phx-overlay-caption-icon"
                            }, (0, n.h)("svg", {
                                class: "phx-captions-label-icon",
                                "aria-label": w.closedCaptionsAvailable,
                                height: "10",
                                width: "11.25",
                                viewBox: "0 0 11.25 10"
                            }, (0, n.h)("path", {
                                d: "m 10,0 c 0.6875,0 1.25,0.5625 1.25,1.25 v 7.5 C 11.25,9.4375 10.6875,10 10,10 H 1.25 C 0.55625,10 0,9.4375 0,8.75 V 1.25 C 0,0.5625 0.55625,0 1.25,0 Z M 5,4.375 V 3.75 C 5,3.40625 4.71875,3.125 4.375,3.125 H 2.5 c -0.34375,0 -0.625,0.28125 -0.625,0.625 v 2.5 c 0,0.34375 0.28125,0.625 0.625,0.625 H 4.375 C 4.71875,6.875 5,6.59375 5,6.25 V 5.625 H 4.0625 v 0.3125 h -1.25 v -1.875 h 1.25 V 4.375 Z m 4.375,0 V 3.75 C 9.375,3.40625 9.09375,3.125 8.75,3.125 H 6.875 C 6.53125,3.125 6.25,3.40625 6.25,3.75 v 2.5 c 0,0.34375 0.28125,0.625 0.625,0.625 H 8.75 c 0.34375,0 0.625,-0.28125 0.625,-0.625 V 5.625 H 8.4375 v 0.3125 h -1.25 v -1.875 h 1.25 V 4.375 Z"
                            })))
                        }, this.renderLiveLabel = () => (0, n.h)("div", {
                            class: "phx-live-label"
                        }, (0, n.h)("span", null, this.locale.live), this.renderCCIcon()), this.renderUpcomingLabel = () => (0, n.h)("div", {
                            class: "phx-upcoming-label"
                        }, (0, n.h)("div", {
                            class: "label-and-captions"
                        }, (0, n.h)("span", null, `${this.locale.live} ${this.locale.in}`), this.renderCCIcon()), (0, n.h)("div", {
                            class: "upcoming-time"
                        }, this.renderVideoTimeSince())), this.getLiveLabel = () => {
                            if (this.publicAPI.mediaData.pubDate) return this.isLiveNow ? this.renderLiveLabel() : this.renderUpcomingLabel()
                        }, this.getDurationLabel = () => {
                            if (!this.publicAPI.mediaData.duration || this.publicAPI.mediaData.duration < 1) return;
                            const e = (0, a.g)(this.publicAPI.mediaData.duration);
                            return (0, n.h)("div", {
                                class: "phx-duration-label"
                            }, (0, n.h)("span", null, (0, n.h)("span", {
                                class: "a11y"
                            }, "Duration"), e), this.renderCCIcon())
                        }, this.renderVideoTimeStamp = () => {
                            if (this.publicAPI.mediaData.pubDate && this.isLiveNow) return (0, n.h)("div", {
                                class: "phx-video-timestamp"
                            }, this.renderVideoTimeSince())
                        }, this.renderVideoTimeSince = () => {
                            const {
                                pubDate: e,
                                isLive: t
                            } = this.publicAPI.mediaData, i = t && this.isLiveNow;
                            return (0, n.h)("relative-date-time", {
                                pubDate: e,
                                includeSeconds: !0,
                                isLive: i
                            })
                        }, this.renderPlayButtonAndMetadata = () => (0, n.h)("div", {
                            class: "phx-video-timestamp-container"
                        }, (0, n.h)("div", {
                            class: "phx-ready-play-button-container"
                        }, (0, n.h)("svg", {
                            class: "phx-ready-play-button",
                            "aria-label": w.play,
                            role: "presentation",
                            width: "34px",
                            height: "34px",
                            viewBox: "0 0 34 34"
                        }, (0, n.h)("circle", {
                            fill: "#FFFFFF",
                            cx: "16.5",
                            cy: "16.5",
                            r: "16.5"
                        }), (0, n.h)("path", {
                            d: "M12.0627845,9.87071431 L24.510661,16.6074648 C24.6396791,16.677289 24.6876652,16.8384825 24.617841,16.9675006 C24.5925502,17.0142319 24.553825,17.0523041 24.5066704,17.0767967 L12.0587939,23.5423393 C11.9286072,23.6099595 11.768253,23.5592393 11.7006328,23.4290526 C11.6809874,23.3912301 11.6707317,23.3492356 11.6707317,23.3066154 L11.6707317,10.1043222 C11.6707317,9.95762156 11.7896561,9.8386972 11.9363567,9.8386972 C11.9805052,9.8386972 12.0239575,9.84970124 12.0627845,9.87071431 Z",
                            fill: "#000000"
                        }))), this.renderVideoTimeStamp(), (0, n.h)("div", {
                            class: "phx-video-timestamp-label"
                        }, this.publicAPI.mediaData.isLive ? this.getLiveLabel() : this.getDurationLabel())), this.showPlaceHolder = () => {
                            if ("video" !== this.publicAPI.mediaData.format) return !1;
                            switch (this.playerStatus) {
                                case a.S.LOADING:
                                    return !!this.isMediaLoading;
                                case a.S.READY:
                                    return !0;
                                default:
                                    return !1
                            }
                        }, this.clearReadyOverlayInterval = () => {
                            clearInterval(this.readyOverlayInterval)
                        }, this.setIsLiveNow = () => {
                            this.isLiveNow = this.publicAPI.mediaData.pubDate <= Date.now()
                        }, this.onObserverUpdate = e => {
                            this.playerStatus = e.status.to, this.isMediaLoading = e.isMediaLoading
                        }
                    }
                    handleClick() {
                        this.onInitialPlay()
                    }
                    handleKeyDown(e) {
                        e.code === a.K.SPACE && this.onInitialPlay()
                    }
                    updateTimeElapsed() {
                        this.setIsLiveNow(), this.readyOverlayInterval && this.isLiveNow && this.clearReadyOverlayInterval()
                    }
                    connectedCallback() {
                        this.setIsLiveNow(), this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate), this.isLiveNow || (this.readyOverlayInterval = setInterval((() => this.updateTimeElapsed()), a.O))
                    }
                    disconnectedCallback() {
                        this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate), this.clearReadyOverlayInterval()
                    }
                    onMediaDataChange(e, t) {
                        var i, n, a;
                        (null === (i = null === e || void 0 === e ? void 0 : e.mediaData) || void 0 === i ? void 0 : i.thumbnail) !== (null === (n = null === t || void 0 === t ? void 0 : t.mediaData) || void 0 === n ? void 0 : n.thumbnail) && (null === (a = this.thumbnailImageElem) || void 0 === a || a.removeAttribute("src"))
                    }
                    render() {
                        var e, t, i, o;
                        if (!this.showPlaceHolder()) return;
                        const r = this.playerStatus === a.S.LOADING ? " loading" : "",
                            s = null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData) || void 0 === t ? void 0 : t.thumbnail;
                        return (0, n.h)("div", {
                            tabindex: "0",
                            class: `phx-ready-overlay${r}`
                        }, s && (0, n.h)("img", {
                            alt: "",
                            src: s,
                            ref: e => this.thumbnailImageElem = e
                        }), (0, n.h)("div", {
                            class: "phx-ready-overlay-container",
                            "aria-label": this.locale.play
                        }, (0, n.h)("div", {
                            class: "phx-ready-video-info-container"
                        }, (0, n.h)("p", {
                            class: "phx-ready-video-item-title"
                        }, null !== (o = null === (i = this.publicAPI.mediaData) || void 0 === i ? void 0 : i.title) && void 0 !== o ? o : ""), this.renderPlayButtonAndMetadata())))
                    }
                    static get watchers() {
                        return {
                            publicAPI: ["onMediaDataChange"]
                        }
                    }
                };
            k.style = '.phoenix-player .phx-video-ui .phx-ready-overlay{width:100%;height:100%;background-color:rgb(40, 40, 40);color:rgb(220, 220, 220);position:absolute;top:0;left:0;box-sizing:border-box;transition:background-color 0.33s;z-index:1}.phoenix-player .phx-video-ui .phx-ready-overlay.loading{pointer-events:none}.phoenix-player .phx-video-ui .phx-ready-overlay.loading::after{width:100%;height:100%;display:inline-block;content:"";background-color:rgba(0, 0, 0, 0.33);position:absolute}.phoenix-player .phx-video-ui .phx-ready-overlay img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain}.phoenix-player .phx-video-ui .phx-ready-overlay:hover{cursor:pointer}.phoenix-player .phx-video-ui .phx-ready-overlay:hover .phx-ready-overlay-container svg.phx-ready-play-button path,.phoenix-player .phx-video-ui .phx-ready-overlay:hover .phx-ready-overlay-container svg.phx-ready-play-button rect,.phoenix-player .phx-video-ui .phx-ready-overlay:focus .phx-ready-overlay-container svg.phx-ready-play-button path,.phoenix-player .phx-video-ui .phx-ready-overlay:focus .phx-ready-overlay-container svg.phx-ready-play-button rect{fill:#ff1a1a}.phoenix-player .phx-video-ui .phx-ready-overlay:hover .phx-ready-overlay-container .phx-ready-video-item-title,.phoenix-player .phx-video-ui .phx-ready-overlay:focus .phx-ready-overlay-container .phx-ready-video-item-title{text-decoration:underline}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container{position:absolute;bottom:0;left:0;height:100%;width:100%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container{box-sizing:border-box;position:relative;width:100%;padding:10px 20px 20px 20px;background-color:rgba(0, 0, 0, 0.6);display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container::before{width:100%;height:50%;top:-50%;left:0;content:"";position:absolute;background-image:linear-gradient(transparent, rgba(0, 0, 0, 0.6))}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-ready-video-item-title{font-size:0.875rem;font-weight:700;color:#fff;line-height:1.25rem;max-height:70px;margin:0 0 10px 0;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}@media (min-width: 375px){.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-ready-video-item-title{font-size:1rem;line-height:1.4rem}}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;margin:0;line-height:150%}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container>*{padding-right:8px}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-overlay-caption-icon{display:inline-block}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-ready-play-button-container{width:24px;height:24px;float:left}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-ready-play-button-container .phx-ready-play-button{width:100%;height:100%;display:block}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp{color:#fff;font-size:0.8rem;font-weight:700;float:left}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp:after{content:"";border-left:1px solid #fff;margin-left:8px}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp-label{font-size:0.8rem;line-height:1.4;font-weight:700}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp-label .phx-duration-label{color:#fff}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp-label .phx-duration-label .a11y{position:absolute;width:1px;height:1px;margin:-1px;padding:0 !important;border:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;opacity:0 !important}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp-label .phx-duration-label .phx-captions-label-icon{fill:#fff;margin-left:8px;margin-bottom:-1px}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp-label .phx-live-label{box-sizing:border-box;padding:1px 5px;display:inline-block;color:#000;background-color:#ffdc14;text-transform:uppercase}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp-label .phx-live-label .phx-captions-label-icon{fill:#000;margin-left:4px}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp-label .phx-upcoming-label{display:flex;flex-direction:row}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp-label .phx-upcoming-label .label-and-captions{box-sizing:border-box;padding:1px 5px;display:inline-block;color:#000;background-color:#ffdc14;text-transform:uppercase}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp-label .phx-upcoming-label .label-and-captions .captions{fill:#000;margin-left:4px}.phoenix-player .phx-video-ui .phx-ready-overlay .phx-ready-overlay-container .phx-ready-video-info-container .phx-video-timestamp-container .phx-video-timestamp-label .phx-upcoming-label .upcoming-time{box-sizing:border-box;padding:1px 5px;display:inline-block;color:#222222;background-color:#e0e0e0}';
            const T = class {
                constructor(e) {
                    (0, n.r)(this, e), this.recommendationClicked = (0, n.c)(this, "recommendationClicked", 7), this.recommendations = [], this.isVisible = !1, this.playNextCountdown = 10, this.locale = (0, o.L)(), this.onObserverUpdate = e => {
                        var t;
                        this.recommendations = e.recommendations, (null === (t = this.recommendations) || void 0 === t ? void 0 : t.length) && (this.isVisible = !0)
                    }, this.closeRecommendations = e => {
                        null === e || void 0 === e || e.stopPropagation(), this.onCancelPlayNext(), this.isVisible = !1
                    }, this.onClickRecommendedItem = (e, t) => {
                        var i;
                        const n = {
                                name: "media-player",
                                instance: "rec-sys",
                                position: t
                            },
                            a = null !== (i = this.playNextActive) && void 0 !== i && i;
                        this.recommendationClicked.emit({
                            sourceId: e,
                            featureAttribution: n,
                            playNextActive: a
                        })
                    }, this.onCancelPlayNext = () => {
                        clearInterval(this.intervalId), this.maybePlayNext = !1
                    }, this.getRecommendedItemHead = (e, t, i) => (0, n.h)("div", {
                        class: "recommended-item-media"
                    }, (0, n.h)("img", {
                        src: e,
                        alt: ""
                    }), (0, n.h)("div", {
                        class: "recommended-item-overlay"
                    }, (0, n.h)("div", {
                        class: "recommended-play-btn"
                    }, (0, n.h)("svg", {
                        height: "100%",
                        width: "100%",
                        viewBox: "0 0 80 80",
                        focusable: "false",
                        role: "presentation"
                    }, (0, n.h)("path", {
                        class: "background",
                        d: "m0 0v80h80v-80h-80zm30 20 16 10 16 10-16 10-16 10v-20-20z"
                    }), (0, n.h)("path", {
                        class: "foreground",
                        d: "m30.2 20.2c-0.2 4.4-0.0 8.8-0.1 13.3 0.0 8.7-0.0 17.4 0.0 26.2 10.5-6.5 21.0-13.0 31.5-19.6-2.3-1.8-5.0-3.3-7.5-4.9-7.9-4.9-15.9-9.9-23.8-14.9z"
                    }))), (0, n.h)("span", {
                        class: "recommended-item-duration"
                    }, (0, a.g)(t), i && (0, n.h)("span", {
                        class: "recommended-item-cc",
                        "aria-label": this.locale.closedCaptionsAvailable
                    }, "CC")))), this.getRecommendedItemBody = (e, t, i, o) => {
                        const r = this.maybePlayNext ? "play-next-active" : "";
                        return (0, n.h)("div", {
                            class: "recommended-item-info"
                        }, (0, n.h)("div", {
                            class: "recommended-item-title"
                        }, e), (0, n.h)("div", {
                            class: `recommended-item-show-info ${r}`,
                            title: new Date(t).toString()
                        }, o && (0, n.h)("span", {
                            class: "recommended-show-name"
                        }, o), (0, n.h)("span", {
                            class: "recommended-pub-date"
                        }, (0, a.e)(t, !1, i))))
                    }, this.getItemMarkup = (e, t) => {
                        const {
                            sourceId: i,
                            title: a,
                            thumbnail: o,
                            duration: r,
                            isLive: s,
                            showName: l,
                            pubDate: d,
                            hasCaptions: c
                        } = e, p = t + 1, u = "recommended-item", h = `reco-${t}-${e.sourceId}`, m = `${this.locale.playThisVideo} ${a}`, v = () => this.onClickRecommendedItem(i, p), b = this.getRecommendedItemHead(o, r, c), g = this.getRecommendedItemBody(a, d, s, l);
                        return 0 === t && this.maybePlayNext ? (0, n.h)("div", {
                            class: u,
                            id: h
                        }, b, g, (0, n.h)("div", {
                            class: "phx-recommendations-buttons"
                        }, (0, n.h)("button", {
                            type: "button",
                            "aria-label": this.locale.cancel,
                            class: "phx-autoplay-button cancel",
                            onClick: this.onCancelPlayNext,
                            ref: e => this.firstItem = e
                        }, this.locale.cancel), (0, n.h)("button", {
                            type: "button",
                            "aria-label": m,
                            class: "phx-autoplay-button play-now",
                            onClick: v
                        }, (0, n.h)("svg", {
                            fill: "#000000",
                            width: "24px",
                            height: "24px",
                            viewBox: "-60 0 512 512",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, (0, n.h)("path", {
                            d: "M64 96L328 256 64 416 64 96Z"
                        })), `${this.locale.upNextIn} ${this.playNextCountdown}`))) : (0, n.h)("button", {
                            class: u,
                            id: h,
                            "aria-label": m,
                            onClick: v,
                            ref: 0 === t ? e => this.firstItem = e : null
                        }, b, g)
                    }, this.getPlayNextToggle = () => (0, n.h)("custom-toggle", {
                        uniqueId: `recommendations-${this.publicAPI.uid}`,
                        label: this.locale.autoplay,
                        isChecked: this.playNextEnabled
                    }), this.shouldRender = () => {
                        var e;
                        return this.isVisible && !!(null === (e = this.recommendations) || void 0 === e ? void 0 : e.length)
                    }
                }
                connectedCallback() {
                    this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate), this.playNextActive = this.publicAPI.mediaData.playNextActive, this.playNextEnabled = this.publicAPI.localStorageManager.getPlayNextEnabled() && this.playNextActive, this.maybePlayNext = this.playNextEnabled
                }
                disconnectedCallback() {
                    this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate), this.playNextActive = !1
                }
                componentDidLoad() {
                    setTimeout((() => {
                        var e;
                        return null === (e = this.closeButton) || void 0 === e ? void 0 : e.focus()
                    }), 100), this.maybePlayNext && (this.intervalId = setInterval((() => {
                        if (this.playNextCountdown -= 1, this.playNextCountdown < 1) {
                            clearInterval(this.intervalId);
                            const {
                                sourceId: e
                            } = this.recommendations[0];
                            this.onClickRecommendedItem(e, 1)
                        }
                    }), 1e3))
                }
                handleKeyDown(e) {
                    var t, i;
                    e.code === a.K.TAB && (e.shiftKey && document.activeElement === this.firstItem ? (e.preventDefault(), null === (t = this.closeButton) || void 0 === t || t.focus()) : e.shiftKey || document.activeElement !== this.closeButton || (e.preventDefault(), null === (i = this.firstItem) || void 0 === i || i.focus())), e.code === a.K.ESCAPE && this.closeRecommendations()
                }
                handleClick(e) {
                    e.stopPropagation()
                }
                handleChange(e) {
                    e.stopPropagation();
                    const t = e.target;
                    "toggle-switch" === t.name && (this.maybePlayNext && !t.checked && this.onCancelPlayNext(), this.playNextEnabled = t.checked, this.publicAPI.localStorageManager.setPlayNextEnabled(t.checked))
                }
                render() {
                    return this.shouldRender() ? (0, n.h)("div", {
                        class: "phx-recommendations"
                    }, (0, n.h)("div", {
                        class: "phx-recommendations-body"
                    }, (0, n.h)("p", {
                        class: this.maybePlayNext ? "play-next-active" : ""
                    }, this.locale.recommended), (0, n.h)("div", {
                        class: "phx-recommended-items"
                    }, this.recommendations.map(this.getItemMarkup))), this.playNextActive && this.getPlayNextToggle(), (0, n.h)("button", {
                        type: "button",
                        "aria-label": this.locale.close,
                        class: "phx-close-button",
                        onClick: this.closeRecommendations,
                        ref: e => this.closeButton = e
                    }, (0, n.h)("svg", {
                        viewBox: "0 0 24 24",
                        focusable: "false",
                        role: "presentation"
                    }, (0, n.h)("path", {
                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    })))) : null
                }
            };
            T.style = '.phoenix-player .phx-video-ui .phx-recommendations{width:100%;height:100%;background-color:rgba(0, 0, 0, 0.3);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-sizing:border-box;position:absolute;top:0;left:0;line-height:normal;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 12px;font-family:"Open Sans", sans-serif;cursor:default}.phoenix-player .phx-video-ui .phx-recommendations button.phx-close-button{display:inline-block;box-sizing:border-box;appearance:none;-moz-appearance:none;-webkit-appearance:none;position:absolute;top:0;right:0;margin:5px;border-radius:40px;width:40px;height:40px;background-color:transparent;border:none}.phoenix-player .phx-video-ui .phx-recommendations button.phx-close-button svg{display:inline;vertical-align:middle;pointer-events:none;width:20px;height:20px}.phoenix-player .phx-video-ui .phx-recommendations button.phx-close-button svg path{fill:#ffffff}.phoenix-player .phx-video-ui .phx-recommendations button.phx-close-button:hover,.phoenix-player .phx-video-ui .phx-recommendations button.phx-close-button:focus{cursor:pointer;background-color:#545454}.phoenix-player .phx-video-ui .phx-recommendations button.phx-close-button:focus,.phoenix-player .phx-video-ui .phx-recommendations button.phx-close-button:focus-within,.phoenix-player .phx-video-ui .phx-recommendations button.phx-close-button:active{box-shadow:0 0 0 3px #E60606;outline:none}.phoenix-player .phx-video-ui .phx-recommendations button.phx-close-button:focus-visible{outline:none}.phoenix-player .phx-video-ui .phx-recommendations .phx-custom-toggle-container{position:absolute;top:10px;right:48px}.phoenix-player .phx-video-ui .phx-recommendations .phx-custom-toggle-container label span{width:30px;height:15px;margin-left:5px;padding-bottom:1px}.phoenix-player .phx-video-ui .phx-recommendations .phx-custom-toggle-container label span::before{width:12px;height:12px;right:2px}.phoenix-player .phx-video-ui .phx-recommendations .phx-custom-toggle-container input[type=checkbox]+label{outline:none;border:2px solid transparent;border-radius:5px}.phoenix-player .phx-video-ui .phx-recommendations .phx-custom-toggle-container input[type=checkbox]:focus-visible+label{border:2px solid #E60606;background:#3C464B}.phoenix-player .phx-video-ui .phx-recommendations .phx-custom-toggle-container:hover{outline:none;border-radius:5px;background:#3C464B}.phoenix-player .phx-video-ui .phx-recommendations p{align-self:flex-start;color:#ffffff;font-size:0.875rem;line-height:1.25rem;font-weight:bold;margin:0 0 8px 3px}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items{margin:0;padding:0;overflow:hidden;box-sizing:border-box;display:grid;gap:12px;grid-auto-flow:column}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item{grid-column:span 12;display:grid;grid-template-columns:1fr 1fr;padding:12px;background-color:#222222;box-sizing:border-box;margin:3px;border:none;text-align:left}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item:nth-child(n+2){display:none}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media{position:relative;display:flex}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media img{width:100%;aspect-ratio:16/9;object-fit:contain;background-color:#000}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay{box-sizing:border-box;position:absolute;bottom:0;left:0;width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;padding:0 10px}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-play-btn{display:block;height:35px;width:35px;border-radius:50%;margin:0;margin-bottom:8px;padding:0;outline:none;border:0}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-play-btn svg{height:100%;width:100%;border-radius:50%}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-play-btn svg .foreground{fill:#000}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-play-btn svg .background{fill:#ffffff}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-play-btn::-moz-focus-inner{border:0}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-item-duration{background-color:rgba(0, 0, 0, 0.8);color:#ffffff;padding:2px 4px;font-size:0.8rem;line-height:0.8125rem;margin-bottom:10px;box-sizing:border-box;justify-self:end}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-item-cc{background-color:#FFF;color:#000;border-radius:4px;font-weight:bold;line-height:100%;margin-left:5px;padding:1px 2px 1px 1px;font-size:0.6rem;vertical-align:middle}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info{padding-left:16px;color:#ffffff;font-weight:bold;display:inline-block;overflow:hidden}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-title{font-size:0.875rem;max-height:58px;overflow:hidden;line-height:1.14rem;margin-bottom:4px}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info{display:flex;flex-direction:column;flex-wrap:wrap;font-size:0.8rem;line-height:1.04rem;font-weight:400}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info .recommended-pub-date{margin-bottom:2px}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items button.recommended-item:hover{box-shadow:0 0 0 3px #CBCBCB;cursor:pointer}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items button.recommended-item:focus,.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items button.recommended-item:focus-within,.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items button.recommended-item:active{box-shadow:0 0 0 3px #E60606}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items button.recommended-item:focus-visible{outline:none}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items div.recommended-item{cursor:auto}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items div.recommended-item .phx-recommendations-buttons{grid-column:span 2;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-evenly;gap:16px;padding-top:16px;padding-bottom:4px}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items div.recommended-item .phx-recommendations-buttons .phx-autoplay-button{cursor:pointer;min-width:70px;height:40px;font-family:sans-serif;font-weight:700;font-size:0.875rem;padding:8px;border-radius:4px;display:flex;align-items:center;justify-content:center}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items div.recommended-item .phx-recommendations-buttons .phx-autoplay-button.cancel{color:#fff;background-color:#000;border:1px solid #CBCBCB;flex-grow:1}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items div.recommended-item .phx-recommendations-buttons .phx-autoplay-button.cancel:hover{background:#222222}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items div.recommended-item .phx-recommendations-buttons .phx-autoplay-button.play-now{color:#000;background-color:#ffffff;border:1px solid #ffffff;flex-grow:1}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items div.recommended-item .phx-recommendations-buttons .phx-autoplay-button.play-now svg{margin-left:-6px;pointer-events:none}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items div.recommended-item .phx-recommendations-buttons .phx-autoplay-button.play-now:hover{background:#EEE}.phoenix-player .phx-video-ui .phx-recommendations .phx-recommended-items div.recommended-item .phx-recommendations-buttons .phx-autoplay-button:focus{outline:none;border:3px solid #E60606}.phoenix-player.phx-extra-small .phx-video-ui .phx-recommendations p.play-next-active,.phoenix-player.phx-small .phx-video-ui .phx-recommendations p.play-next-active{opacity:0}.phoenix-player.phx-extra-small .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-title,.phoenix-player.phx-small .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-title{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.phoenix-player.phx-extra-small .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info.play-next-active,.phoenix-player.phx-small .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info.play-next-active{display:none}.phoenix-player.phx-extra-small .phx-video-ui .phx-recommendations button.phx-close-button,.phoenix-player.phx-small .phx-video-ui .phx-recommendations button.phx-close-button{padding:0}.phoenix-player.phx-extra-small .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item{grid-template-columns:1fr 1.75fr}.phoenix-player.phx-extra-small .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay{padding:0 6px}.phoenix-player.phx-extra-small .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-play-btn{width:20px;height:20px;margin-bottom:5px}.phoenix-player.phx-extra-small .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-item-duration{margin-bottom:5px}.phoenix-player.phx-extra-small .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info{display:none}.phoenix-player.phx-extra-small .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .phx-recommendations-buttons{padding-top:8px;padding-bottom:0}.phoenix-player.phx-medium .phx-video-ui .phx-recommendations{padding:0 64px}.phoenix-player.phx-medium .phx-video-ui .phx-recommendations button.phx-close-button{top:16px;right:16px}.phoenix-player.phx-medium .phx-video-ui .phx-recommendations .phx-custom-toggle-container{position:absolute;top:26px;right:60px}.phoenix-player.phx-medium .phx-video-ui .phx-recommendations .phx-recommended-items{padding:0}.phoenix-player.phx-medium .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-title{max-height:75px;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}.phoenix-player.phx-large .phx-video-ui .phx-recommendations button.phx-close-button,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations button.phx-close-button{top:16px;right:16px}.phoenix-player.phx-large .phx-video-ui .phx-recommendations p,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations p{margin:0 0 16px 3px;font-size:1rem;line-height:1.25rem;font-weight:700}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-custom-toggle-container,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-custom-toggle-container{position:absolute;top:28px;right:60px}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items{padding:0;gap:24px}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item{width:259px;min-height:286px;grid-column:span 6;display:flex;flex-direction:column;padding:0;border:none}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item:nth-child(n+3),.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item:nth-child(n+3){display:none}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media img,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media img{height:135px;width:259px}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay{padding:0 15px}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-play-btn,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-play-btn{margin-bottom:10px}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-item-duration,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-media .recommended-item-overlay .recommended-item-duration{margin-bottom:18px}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info{padding:16px;display:flex;flex-direction:column;flex:1}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-title,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-title{flex-grow:1;max-height:96px;font-size:0.875rem;line-height:1.1375rem}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info{display:flex;flex-direction:row;justify-content:flex-start;font-size:0.8rem;line-height:1.04rem}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info .recommended-show-name::after,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info .recommended-show-name::after{margin:0 5px;content:"|"}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info .recommended-pub-date,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .recommended-item-info .recommended-item-show-info .recommended-pub-date{margin:0}.phoenix-player.phx-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .phx-recommendations-buttons,.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item .phx-recommendations-buttons{padding-top:0px;padding-bottom:16px;padding-left:16px;padding-right:16px}.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item{grid-column:span 4}.phoenix-player.phx-extra-large .phx-video-ui .phx-recommendations .phx-recommended-items .recommended-item:nth-child(n+3){display:flex}';
            const C = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.locale = (0, o.L)(), this.onUserInteraction = e => {
                            "share-overlay-close" === e.interactionName && (this.shouldHaveFocus = !0)
                        }, this.onObserverUpdate = e => {
                            this.playerStatus = e.status.to
                        }
                    }
                    connectedCallback() {
                        this.shouldHaveFocus = !1, this.publicAPI.userInteractionsObserver.subscribe(this.onUserInteraction), this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                    }
                    disconnectedCallback() {
                        this.publicAPI.userInteractionsObserver.unsubscribe(this.onUserInteraction), this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate)
                    }
                    componentDidUpdate() {
                        var e;
                        this.shouldHaveFocus && (null === (e = this.shareButton) || void 0 === e || e.focus(), this.shouldHaveFocus = !1)
                    }
                    handleClick(e) {
                        var t;
                        this.publicAPI.userInteractionsObserver.notifySubscribers({
                            interactionOwner: "share-btn",
                            interactionName: "share-overlay-open",
                            interactionType: null !== (t = e.constructor.name) && void 0 !== t ? t : ""
                        })
                    }
                    render() {
                        return this.publicAPI.mediaData.shareUrl && this.playerStatus !== a.S.READY ? (0, n.h)("button", {
                            type: "button",
                            class: "phx-share-btn",
                            ref: e => this.shareButton = e
                        }, (0, n.h)("svg", {
                            focusable: "false",
                            role: "presentation",
                            viewBox: "0 0 24 24"
                        }, (0, n.h)("path", {
                            class: "foreground",
                            d: "M7.53 20c-.42 0-.78-.15-1.08-.44-.3-.29-.45-.64-.45-1.07V10.37c0-.41.15-.76.45-1.06.3-.3.66-.44 1.08-.44h1.53c.22 0 .4.07.54.2.14.14.21.3.21.5 0 .2-.07.36-.21.5-.14.14-.32.21-.54.21H7.53v8.15h9.18v-8.15h-1.53c-.22 0-.4-.07-.54-.21-.14-.14-.21-.3-.21-.5 0-.2.07-.36.21-.5.14-.14.32-.21.54-.21h1.53c.42 0 .78.14 1.08.44.3.3.45.65.45 1.07v8.15c0 .41-.15.76-.45 1.06-.3.3-.66.44-1.08.44H7.53zm3.82-13.46l-.69.67c-.15.15-.33.22-.54.22-.2 0-.38-.08-.53-.23-.14-.15-.22-.34-.22-.55 0-.2.08-.39.23-.54L11.58 4.22c.15-.15.33-.22.53-.22.2 0 .38.08.53.22l1.99 1.93c.14.15.23.34.23.55 0 .2-.08.39-.23.54-.15.15-.33.22-.53.22-.2 0-.38-.07-.53-.22l-.67-.67v7.54c0 .2-.07.36-.22.5-.14.14-.32.21-.53.21-.2 0-.38-.07-.53-.21-.15-.14-.22-.3-.22-.5V6.54z"
                        })), (0, n.h)("label", {
                            class: "phx-tooltip"
                        }, this.locale.share)) : null
                    }
                },
                S = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.linkDialogVisible = !1, this.embedDialogVisible = !1, this.isVisible = !1, this.locale = (0, o.L)(), this.onUserInteraction = e => {
                            "share-overlay-open" === e.interactionName && (this.isVisible = !0)
                        }, this.openHref = e => {
                            const t = e.target.dataset.href;
                            t && window.open(t, "_blank")
                        }, this.copyToClipboard = e => {
                            navigator.clipboard.writeText(e)
                        }, this.onClose = e => {
                            var t;
                            this.publicAPI.userInteractionsObserver.notifySubscribers({
                                interactionOwner: "share-overlay",
                                interactionName: "share-overlay-close",
                                interactionType: null !== (t = e.constructor.name) && void 0 !== t ? t : ""
                            }), this.isVisible = !1, this.linkDialogVisible = !1, this.embedDialogVisible = !1
                        }, this.handleShareDialog = e => {
                            e.target === this.linkButton ? (this.embedDialogVisible = !1, this.linkDialogVisible = !this.linkDialogVisible) : (this.linkDialogVisible = !1, this.embedDialogVisible = !this.embedDialogVisible)
                        }
                    }
                    connectedCallback() {
                        this.publicAPI.userInteractionsObserver.subscribe(this.onUserInteraction)
                    }
                    disconnectedCallback() {
                        this.publicAPI.userInteractionsObserver.unsubscribe(this.onUserInteraction)
                    }
                    componentDidUpdate() {
                        var e, t, i, n, a;
                        null === (e = this.closeButton) || void 0 === e || e.focus(), this.linkDialogVisible && (null === (t = this.linkText) || void 0 === t || t.focus(), null === (i = this.linkText) || void 0 === i || i.select()), this.embedDialogVisible && (null === (n = this.embedText) || void 0 === n || n.focus(), null === (a = this.embedText) || void 0 === a || a.select())
                    }
                    onFocusIn(e) {
                        this.focusedElement = e.target
                    }
                    handleKeyDown(e) {
                        var t;
                        e.code === a.K.TAB && (this.focusedElement === this.copyEmbedButton || !this.embedDialogVisible && this.focusedElement === this.embedButton) && (e.preventDefault(), null === (t = this.closeButton) || void 0 === t || t.focus()), e.code === a.K.ESCAPE && this.onClose(e)
                    }
                    handleClick(e) {
                        switch (e.target) {
                            case this.closeButton:
                                this.onClose(e);
                                break;
                            case this.linkButton:
                            case this.embedButton:
                                this.handleShareDialog(e);
                                break;
                            case this.copyLinkButton:
                                this.copyToClipboard(this.linkText.value);
                                break;
                            case this.copyEmbedButton:
                                this.copyToClipboard(this.embedText.value);
                                break;
                            case this.facebookButton:
                            case this.twitterButton:
                            case this.emailButton:
                                this.openHref(e)
                        }
                    }
                    render() {
                        if (!this.publicAPI.mediaData.shareUrl) return null;
                        const e = this.publicAPI.mediaData.shareUrl;
                        return (0, n.h)("div", {
                            class: "phx-share-overlay " + (this.isVisible ? "active" : ""),
                            tabindex: "0"
                        }, (0, n.h)("button", {
                            type: "button",
                            "aria-label": this.locale.close,
                            class: "phx-close-button",
                            ref: e => this.closeButton = e
                        }, (0, n.h)("svg", {
                            viewBox: "0 0 24 24",
                            focusable: "false",
                            role: "presentation"
                        }, (0, n.h)("path", {
                            d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        }))), (0, n.h)("p", null, this.locale.share), (0, n.h)("ul", {
                            class: "sharelinks"
                        }, (0, n.h)("li", null, (0, n.h)("button", {
                            type: "button",
                            class: "button share-icon-link",
                            "aria-label": this.locale.shareLinkLabel,
                            ref: e => this.linkButton = e
                        }, (0, n.h)("div", {
                            class: "icon-wrapper"
                        }, (0, n.h)("svg", {
                            width: "66px",
                            height: "66px",
                            viewBox: "0 0 66 66"
                        }, (0, n.h)("circle", {
                            fill: "#000000",
                            stroke: "#737373",
                            cx: "32",
                            cy: "32",
                            r: "31"
                        }), (0, n.h)("path", {
                            d: "M29.4175039,38.4859969 L28.2544874,39.5838427 C27.2463292,40.5336704 25.6066714,40.5344897 24.5990877,39.5838427 C24.114689,39.1269532 23.8486433,38.5201339 23.8486433,37.8750813 C23.8486433,37.2300286 24.1149764,36.6229363 24.5988004,36.1660468 L28.8796662,32.1288693 C29.7668685,31.2926495 31.4358316,30.0612598 32.652287,31.2079897 C33.2105234,31.7350649 34.112091,31.7315147 34.6663051,31.2011623 C35.2208065,30.67081 35.2173589,29.8135618 34.6591225,29.2870328 C32.5913781,27.3365814 29.5352995,27.6970681 26.8736927,30.2073661 L22.5925396,34.2448167 C21.5654191,35.2140343 21,36.5030472 21,37.8750813 C21,39.2471154 21.5654191,40.5358552 22.5928269,41.5050727 C23.6498272,42.501873 25.0378046,43 26.4263566,43 C27.8151959,43 29.2037479,42.501873 30.2613229,41.5045265 L31.4252013,40.4064077 C31.9831503,39.8798787 31.9863107,39.0229036 31.4318093,38.4922782 C30.8781698,37.9621989 29.9757403,37.9591948 29.4175039,38.4859969 Z M41.406631,22.6222252 C39.1857976,20.5636533 36.080653,20.4520019 34.0247302,22.35759 L32.5750115,23.701969 C32.0167865,24.2196985 32.0133389,25.0616464 32.567829,25.5831334 C33.1223191,26.1046204 34.0238683,26.1075727 34.5820933,25.5898432 L36.0312373,24.2462694 C37.0962606,23.2583159 38.4908175,23.6678832 39.4004111,24.5109046 C39.8853745,24.9599256 40.1517021,25.5565625 40.1517021,26.1905061 C40.1517021,26.824718 39.8850872,27.4213549 39.4009857,27.8703759 L34.8337686,32.1029286 C32.7453807,34.0385767 31.7656858,33.1300675 31.3476634,32.7425084 C30.7894384,32.2247789 29.8881765,32.2279996 29.3336864,32.7492182 C28.7791963,33.2704368 28.7826439,34.1129215 29.3408689,34.6303826 C30.299591,35.5192992 31.3939188,35.96 32.54111,35.96 C33.9457225,35.96 35.4293426,35.2992172 36.8399885,33.9908028 L41.4072056,29.7582501 C42.4340179,28.8057244 43,27.5386425 43,26.1902377 C43,24.8423696 42.4340179,23.5752877 41.406631,22.6222252 Z",
                            id: "Shape-Copy",
                            fill: "#FFFFFF"
                        }))), (0, n.h)("div", null, (0, n.h)("label", {
                            class: "phx-share-btn-label"
                        }, this.locale.linkBtn))), (0, n.h)("div", {
                            class: "phx-share-dialog " + (this.linkDialogVisible ? "active" : "")
                        }, (0, n.h)("input", {
                            type: "text",
                            class: "linktext",
                            value: e,
                            ref: e => this.linkText = e,
                            readonly: !0
                        }), (0, n.h)("input", {
                            type: "button",
                            value: this.locale.copy,
                            "aria-label": this.locale.copyLink,
                            class: "copylink",
                            ref: e => this.copyLinkButton = e
                        }))), (0, n.h)("li", null, (0, n.h)("button", {
                            type: "button",
                            class: "button share-icon-facebook",
                            "aria-label": `${this.locale.shareTo} Facebook`,
                            "data-href": `https://www.facebook.com/sharer/sharer.php?u=${e}`,
                            ref: e => this.facebookButton = e
                        }, (0, n.h)("div", {
                            class: "icon-wrapper"
                        }, (0, n.h)("svg", {
                            width: "66px",
                            height: "66px",
                            viewBox: "0 0 66 66",
                            id: "fb"
                        }, (0, n.h)("circle", {
                            fill: "#000000",
                            stroke: "#737373",
                            cx: "32",
                            cy: "32",
                            r: "31"
                        }), (0, n.h)("path", {
                            d: "M28.6316288,44 L28.6316288,33.265625 L25,33.265625 L25,29 L28.6316288,29 L28.6316288,25.6390625 C28.6316288,21.9875 30.8854167,20 34.1761364,20 C35.7528409,20 37.1070076,20.1171875 37.5,20.16875 L37.5,23.984375 L35.217803,23.984375 C33.4280303,23.984375 33.0823864,24.828125 33.0823864,26.0609375 L33.0823864,29 L37.1212121,29 L36.5672348,33.265625 L33.0823864,33.265625 L33.0823864,44",
                            id: "facebook-copy-2",
                            fill: "#FFFFFF"
                        }))), (0, n.h)("div", null, (0, n.h)("label", {
                            class: "phx-share-btn-label"
                        }, "Facebook")))), (0, n.h)("li", null, (0, n.h)("button", {
                            type: "button",
                            class: "button share-icon-twitter",
                            "aria-label": `${this.locale.shareTo} Twitter`,
                            "data-href": `https://www.twitter.com/intent/tweet?url=${e.replace(/%/g,"%25")}`,
                            ref: e => this.twitterButton = e
                        }, (0, n.h)("div", {
                            class: "icon-wrapper"
                        }, (0, n.h)("svg", {
                            width: "66px",
                            height: "66px",
                            viewBox: "0 0 66 66"
                        }, (0, n.h)("circle", {
                            fill: "#000000",
                            stroke: "#737373",
                            cx: "32",
                            cy: "32",
                            r: "31"
                        }), (0, n.h)("path", {
                            d: "M42.4302634,27.0245533 C42.4461326,27.2450569 42.4461326,27.4656089 42.4461326,27.6861125 C42.4461326,34.4117627 37.2906925,42.1612903 27.8680483,42.1612903 C24.9651073,42.1612903 22.2684171,41.3264506 20,39.8774201 C20.4124528,39.9246432 20.8089875,39.9404003 21.2373095,39.9404003 C23.6325825,39.9404003 25.8375716,39.1371234 27.5983695,37.7667819 C25.3458217,37.7195104 23.458119,36.2546742 22.8077258,34.2385307 C23.1250122,34.2857537 23.4422498,34.3172681 23.7754054,34.3172681 C24.2354169,34.3172681 24.6954773,34.2542394 25.1237505,34.144036 C22.7760362,33.671466 21.0151895,31.6238566 21.0151895,29.1509486 L21.0151895,29.0879684 C21.6972723,29.4659953 22.4904882,29.7022561 23.3311654,29.733722 C21.9510818,28.8201448 21.0469279,27.260814 21.0469279,25.4966884 C21.0469279,24.5516454 21.3006887,23.6853397 21.7448799,22.9292859 C24.2671065,26.0164815 28.0583811,28.0325766 32.3096184,28.2531286 C32.2303212,27.8751017 32.1827136,27.4813661 32.1827136,27.087582 C32.1827136,24.2838702 34.4669999,22 37.3064641,22 C38.781714,22 40.1141899,22.6142877 41.0501311,23.6066023 C42.2080946,23.3860987 43.3184993,22.9608002 44.3020481,22.3780269 C43.9212848,23.5593792 43.1122973,24.5516938 42.0495002,25.1816902 C43.0806077,25.0714869 44.0799769,24.7879061 45,24.3941705 C44.3021457,25.4021938 43.4296325,26.2999653 42.4302634,27.0245533 Z",
                            id: "twitter-copy-2",
                            fill: "#FFFFFF"
                        }))), (0, n.h)("div", null, (0, n.h)("label", {
                            class: "phx-share-btn-label"
                        }, "Twitter")))), (0, n.h)("li", null, (0, n.h)("button", {
                            type: "button",
                            class: "button share-icon-email",
                            "aria-label": this.locale.shareEmail,
                            "data-href": `mailto:?body=${e}`,
                            ref: e => this.emailButton = e
                        }, (0, n.h)("div", {
                            class: "icon-wrapper"
                        }, (0, n.h)("svg", {
                            width: "66px",
                            height: "66px",
                            viewBox: "0 0 66 66"
                        }, (0, n.h)("circle", {
                            fill: "#000000",
                            stroke: "#737373",
                            cx: "32",
                            cy: "32",
                            r: "31"
                        }), (0, n.h)("path", {
                            d: "M40.8,23 L23.2,23 C21.99,23 21.011,23.99 21.011,25.2 L21,38.4 C21,39.61 21.99,40.6 23.2,40.6 L40.8,40.6 C42.01,40.6 43,39.61 43,38.4 L43,25.2 C43,23.99 42.01,23 40.8,23 Z M40.8,27.4 L32,32.9 L23.2,27.4 L23.2,25.2 L32,30.7 L40.8,25.2 L40.8,27.4 Z",
                            id: "email-copy-2",
                            fill: "#FFFFFF"
                        }))), (0, n.h)("div", null, (0, n.h)("label", {
                            class: "phx-share-btn-label"
                        }, this.locale.email)))), (0, n.h)("li", null, (0, n.h)("button", {
                            type: "button",
                            class: "button share-icon-embed",
                            "aria-label": this.locale.embed,
                            ref: e => this.embedButton = e
                        }, (0, n.h)("div", {
                            class: "icon-wrapper"
                        }, (0, n.h)("svg", {
                            width: "66px",
                            height: "66px",
                            viewBox: "0 0 66 66"
                        }, (0, n.h)("circle", {
                            fill: "#000000",
                            stroke: "#737373",
                            cx: "32",
                            cy: "32",
                            r: "31"
                        }), (0, n.h)("path", {
                            d: "M28.73,39.37 L22.06,32.7 L28.73,26.03 L26.7,24 L18,32.7 L26.7,41.4 L28.73,39.37 Z M36.27,39.37 L42.94,32.7 L36.27,26.03 L38.3,24 L47,32.7 L38.3,41.4 L36.27,39.37 L36.27,39.37 Z",
                            id: "embed-copy-3",
                            fill: "#FFFFFF"
                        }))), (0, n.h)("div", null, (0, n.h)("label", {
                            class: "phx-share-btn-label"
                        }, this.locale.embed))), (0, n.h)("div", {
                            class: "phx-share-dialog " + (this.embedDialogVisible ? "active" : "")
                        }, (0, n.h)("input", {
                            type: "text",
                            class: "linktext",
                            value: `<iframe src="//www.cbc.ca/i/phoenix/player/syndicate/?sourceId=${this.publicAPI.mediaData.sourceId}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`,
                            ref: e => this.embedText = e,
                            readonly: !0
                        }), (0, n.h)("input", {
                            type: "button",
                            value: this.locale.copy,
                            "aria-label": this.locale.copyEmbed,
                            class: "copyembedcode",
                            ref: e => this.copyEmbedButton = e
                        })))))
                    }
                };
            S.style = ".phoenix-player .phx-video-ui .phx-share-overlay{display:none;position:absolute;top:0;left:0;box-sizing:border-box;background-color:rgba(0, 0, 0, 0.6);color:white;width:100%;height:100%;z-index:1}.phoenix-player .phx-video-ui .phx-share-overlay.active{display:block}.phoenix-player .phx-video-ui .phx-share-overlay button.phx-close-button{display:inline-block;box-sizing:border-box;appearance:none;-moz-appearance:none;-webkit-appearance:none;position:absolute;top:0;right:0;margin:5px;border-radius:40px;width:40px;height:40px;background-color:transparent;border:none}.phoenix-player .phx-video-ui .phx-share-overlay button.phx-close-button svg{display:inline;vertical-align:middle;pointer-events:none;width:20px;height:20px}.phoenix-player .phx-video-ui .phx-share-overlay button.phx-close-button svg path{fill:#ffffff}.phoenix-player .phx-video-ui .phx-share-overlay button.phx-close-button:hover,.phoenix-player .phx-video-ui .phx-share-overlay button.phx-close-button:focus{cursor:pointer;background-color:#545454}.phoenix-player .phx-video-ui .phx-share-overlay button.phx-close-button:focus,.phoenix-player .phx-video-ui .phx-share-overlay button.phx-close-button:focus-within,.phoenix-player .phx-video-ui .phx-share-overlay button.phx-close-button:active{box-shadow:0 0 0 3px #E60606;outline:none}.phoenix-player .phx-video-ui .phx-share-overlay button.phx-close-button:focus-visible{outline:none}.phoenix-player .phx-video-ui .phx-share-overlay p{font-weight:bold;font-size:calc(1em + 1vw);color:#fff;margin:10% 0 4% 0;text-align:center}.phoenix-player .phx-video-ui .phx-share-overlay ul{display:flex;justify-content:space-evenly;padding:0;text-align:center;white-space:nowrap}.phoenix-player .phx-video-ui .phx-share-overlay li{display:flex}.phoenix-player .phx-video-ui .phx-share-overlay li button{min-width:unset;width:100%;height:100%;margin:0;padding:0;background-color:transparent;border:none;pointer-events:visible;cursor:pointer}.phoenix-player .phx-video-ui .phx-share-overlay li button>div{pointer-events:none}.phoenix-player .phx-video-ui .phx-share-overlay li button div.icon-wrapper{width:100%}.phoenix-player .phx-video-ui .phx-share-overlay li button div.icon-wrapper svg{max-width:50px;max-height:50px}.phoenix-player .phx-video-ui .phx-share-overlay li button:hover,.phoenix-player .phx-video-ui .phx-share-overlay li button:focus{outline:none}.phoenix-player .phx-video-ui .phx-share-overlay li button:hover svg circle,.phoenix-player .phx-video-ui .phx-share-overlay li button:focus svg circle{fill:#2b2b2b}.phoenix-player .phx-video-ui .phx-share-overlay li .phx-share-dialog{display:none;position:absolute;left:10%;top:70%;width:80%;-webkit-animation-duration:0.25s;animation-duration:0.25s;-webkit-animation-name:slideIn;animation-name:slideIn}.phoenix-player .phx-video-ui .phx-share-overlay li .phx-share-dialog.active{display:block;z-index:1}.phoenix-player .phx-video-ui .phx-share-overlay li input{padding:2%;font-size:calc(0.65em + 0.4vw)}.phoenix-player .phx-video-ui .phx-share-overlay li input:focus{outline:2px solid #E60606}.phoenix-player .phx-video-ui .phx-share-overlay li input[type=button]{border-radius:3px;border:1px solid #737373;background-color:black;color:white;cursor:pointer;font-weight:600;max-width:20%}.phoenix-player .phx-video-ui .phx-share-overlay li input[type=text]{width:72%;text-overflow:ellipsis;border-radius:3px;border:1px solid #979797}.phoenix-player .phx-video-ui .phx-share-overlay li .phx-share-btn-label{display:inline;background-color:unset;outline:none;position:relative;padding:unset;box-shadow:unset;line-height:3em;font-weight:bold;color:#fff;font-size:calc(0.65em + 0.4vw);left:auto}.phoenix-player.phx-medium .phx-video-ui .phx-share-overlay button.phx-close-button,.phoenix-player.phx-large .phx-video-ui .phx-share-overlay button.phx-close-button,.phoenix-player.phx-extra-large .phx-video-ui .phx-share-overlay button.phx-close-button{top:16px;right:16px}.phoenix-player.phx-medium .phx-video-ui .phx-share-overlay li button div.icon-wrapper svg,.phoenix-player.phx-large .phx-video-ui .phx-share-overlay li button div.icon-wrapper svg,.phoenix-player.phx-extra-large .phx-video-ui .phx-share-overlay li button div.icon-wrapper svg{max-width:70px;max-height:70px}@-webkit-keyframes slideIn{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%);visibility:visible}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slideIn{0%{-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);visibility:visible}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slideOut{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{visibility:hidden;-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes slideOut{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}100%{visibility:hidden;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}}";
            const P = class {
                constructor(e) {
                    (0, n.r)(this, e), this.shouldShow = !1, this.isLiveMedia = !1, this.upcomingLiveStatus = "", this.countDownMessage = "", this.countDownLabel = "", this.errorMessage = "", this.messageInterval = null, this.locale = (0, o.L)(), this.shouldStartSoon = () => this.publicAPI.mediaData.pubDate - a.F <= Date.now(), this.onStatusLoading = e => {
                        e === a.L.SCHEDULED || !this.shouldStartSoon() && e !== a.L.PLAYING ? this.shouldShow = !0 : this.hide()
                    }, this.onObserverUpdate = e => {
                        if (this.upcomingLiveStatus !== e.upcomingLiveStatus) {
                            switch (e.upcomingLiveStatus) {
                                case a.L.SCHEDULED:
                                    this.startCountdown();
                                    break;
                                case a.L.TIMEDOUT:
                                    this.setErrorMessage();
                                    break;
                                case a.L.LOADING:
                                    this.onStatusLoading(this.upcomingLiveStatus);
                                    break;
                                default:
                                    this.hide()
                            }
                            this.upcomingLiveStatus = e.upcomingLiveStatus
                        }
                    }, this.setMessage = () => {
                        const e = this.publicAPI.mediaData.pubDate - Date.now();
                        let t = `${this.locale.live} ${this.locale.in}`,
                            i = "";
                        e >= a.f ? i = (0, a.e)(this.publicAPI.mediaData.pubDate) : e >= 0 ? i = (0, a.g)(e / a.h) : (t = this.locale.live, i = this.locale.waitingForLiveStream), this.countDownLabel = t, this.countDownMessage = i, this.shouldShow = !0
                    }, this.setErrorMessage = () => {
                        clearInterval(this.messageInterval), this.errorMessage = this.locale.mediaError, this.shouldShow = !0
                    }, this.startCountdown = () => {
                        clearInterval(this.messageInterval), this.messageInterval = setInterval(this.setMessage, a.h)
                    }, this.hide = () => {
                        clearInterval(this.messageInterval), this.shouldShow = !1, this.errorMessage = "", this.countDownLabel = "", this.countDownMessage = ""
                    }, this.renderError = () => this.errorMessage ? (0, n.h)("div", {
                        class: "message"
                    }, this.errorMessage) : null, this.renderCountdown = () => "" === this.countDownLabel || "" === this.countDownMessage || "" !== this.errorMessage ? null : (0, n.h)("div", {
                        class: "countdown"
                    }, (0, n.h)("div", {
                        class: "label"
                    }, (0, n.h)("span", null, this.countDownLabel)), (0, n.h)("div", {
                        class: "time"
                    }, (0, n.h)("span", null, this.countDownMessage)))
                }
                connectedCallback() {
                    this.isLiveMedia = this.publicAPI.mediaData.isLive, this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate)
                }
                disconnectedCallback() {
                    this.hide(), this.publicAPI.mediaStateObserver.unsubscribe(this.onObserverUpdate), this.upcomingLiveStatus = ""
                }
                WatchMediaDataChange() {
                    this.isLiveMedia = this.publicAPI.mediaData.isLive, this.shouldShow = !this.shouldStartSoon()
                }
                render() {
                    if (!this.shouldShow || !this.isLiveMedia) return null;
                    const e = this.publicAPI.mediaData.thumbnail;
                    return (0, n.h)("div", {
                        class: "phx-upcominglive-overlay"
                    }, (0, n.h)("img", {
                        class: "cover-img",
                        src: e,
                        alt: ""
                    }), this.renderError(), this.renderCountdown(), (0, n.h)("div", {
                        class: "phx-metadata"
                    }, (0, n.h)("div", {
                        class: "indicator"
                    }, (0, n.h)("div", {
                        class: "animation-container",
                        role: "presentation"
                    })), (0, n.h)("div", {
                        class: "phx-media-title"
                    }, this.publicAPI.mediaData.title), (0, n.h)("div", {
                        class: "phx-live-startinfo"
                    }, this.locale.live, " ", (0, a.j)(this.publicAPI.mediaData.pubDate), " ", (0, a.k)(this.publicAPI.mediaData.pubDate))))
                }
                static get watchers() {
                    return {
                        publicAPI: ["WatchMediaDataChange"]
                    }
                }
            };
            P.style = '@charset "UTF-8";.phoenix-player .phx-video-ui .phx-upcominglive-overlay{width:100%;height:100%;background-color:#333;color:#CCC;position:absolute;top:0;left:0;z-index:1}.phoenix-player .phx-video-ui .phx-upcominglive-overlay img.cover-img{width:100%;height:100%;object-fit:contain}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .phx-metadata{-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:rgba(0, 0, 0, 0.8);padding:1rem;max-width:66%;box-sizing:border-box;position:absolute;bottom:5%;left:3%;color:#fff}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .phx-metadata .indicator{box-sizing:border-box;padding:1rem;height:100%;width:calc(36px + 2rem);position:absolute;top:0;left:0}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .phx-metadata .indicator .animation-container{margin:0;position:absolute;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%)}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .phx-metadata .indicator .animation-container:after{display:block;overflow:hidden;content:"\u22ef";font-size:36px;line-height:36px;animation:typingEffect 3s steps(3) infinite}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .phx-metadata .phx-media-title,.phoenix-player .phx-video-ui .phx-upcominglive-overlay .phx-metadata .phx-live-startinfo{font-size:0.85rem;box-sizing:border-box;padding-left:calc(36px + 1rem)}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .phx-metadata .phx-media-title{display:none}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .countdown{position:absolute;right:3%;top:5%;font-size:1rem;font-weight:bold;color:#000}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .countdown span{display:inline-block;text-align:center;width:100%}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .countdown div{padding:2px 5px}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .countdown .label{background-color:#ffdc14;text-transform:uppercase}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .countdown .time{background-color:#e0e0e0}.phoenix-player .phx-video-ui .phx-upcominglive-overlay .message{font-size:0.8rem;color:#FFF;padding:0.8rem;background-color:rgba(0, 0, 0, 0.8);position:absolute;top:0;right:0;margin:2rem 2rem 0;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}@keyframes typingEffect{0%{width:0}66%{width:100%}}.phoenix-player.phx-medium .phx-video-ui .phx-upcominglive-overlay .phx-metadata .phx-media-title,.phoenix-player.phx-large .phx-video-ui .phx-upcominglive-overlay .phx-metadata .phx-media-title,.phoenix-player.phx-extra-large .phx-video-ui .phx-upcominglive-overlay .phx-metadata .phx-media-title{display:block;font-weight:bold;padding-bottom:0.5rem}'
        },
        57895: (e, t, i) => {
            i.r(t), i.d(t, {
                custom_toggle: () => a
            });
            var n = i(41632);
            const a = class {
                constructor(e) {
                    (0, n.r)(this, e)
                }
                render() {
                    return (0, n.h)("div", {
                        key: "827fa2efa8f8fea821f46fb36fd57d35647757c8",
                        class: "phx-custom-toggle-container"
                    }, (0, n.h)("input", {
                        key: "9dcbae4464d139c221a54355606de2f3d0025d24",
                        type: "checkbox",
                        name: "toggle-switch",
                        id: `toggle-${this.uniqueId}`,
                        checked: this.isChecked
                    }), (0, n.h)("label", {
                        key: "919ff978e461c7ccf73899ebe5851ba3e76610e1",
                        htmlFor: `toggle-${this.uniqueId}`
                    }, this.label, (0, n.h)("span", {
                        key: "b562ff51c0b838349e68ec96342d9eef7a6e21fa",
                        hidden: !0
                    })))
                }
            };
            a.style = ".phx-custom-toggle-container{color:white;font-family:sans-serif;font-size:0.8rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-shadow:rgba(0, 0, 0, 0.01) 0 0 1px}.phx-custom-toggle-container input[type=checkbox]{position:absolute;opacity:0;width:100%}.phx-custom-toggle-container label{cursor:pointer;display:flex;flex-wrap:wrap;align-items:center;position:relative;justify-content:space-between;font-weight:700;word-wrap:break-word;padding:4px 12px}.phx-custom-toggle-container label span{display:inline-flex;box-sizing:content-box;width:24px;height:12px;position:relative;border-radius:100vw;background-color:#909090;transition:250ms}.phx-custom-toggle-container label span::before{content:\"\";z-index:2;position:absolute;top:50%;left:auto;right:1px;width:10px;height:10px;border-radius:50%;background:white no-repeat center;background-image:none;transform:translate(-120%, -50%);will-change:transform;transition:inherit}.phx-custom-toggle-container input[type=checkbox]:checked+label span{background-color:#fff}.phx-custom-toggle-container input[type=checkbox]:checked+label span::before{transform:translate(0, -50%);background:#e60606 no-repeat center;background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg %3E%3Ccircle cx='5' cy='5' r='5' fill='%23E60606'/%3E%3Cpath d='M4.03787 7.38221L2.08786 5.43407C1.97071 5.31703 1.97071 5.12726 2.08786 5.01021L2.51212 4.58635C2.62927 4.4693 2.81923 4.4693 2.93638 4.58635L4.25 5.8987L7.06362 3.08778C7.18077 2.97074 7.37073 2.97074 7.48788 3.08778L7.91214 3.51164C8.02929 3.62868 8.02929 3.81845 7.91214 3.9355L4.46213 7.38222C4.34497 7.49926 4.15502 7.49926 4.03787 7.38221Z' fill='%23ffffff'/%3E%3C/g%3E%3C/svg%3E\")}.phx-custom-toggle-container input[type=checkbox]:focus-visible+label{outline:none;border:2px solid #e60606}.phx-custom-toggle-container:hover{background:#3c464b}"
        },
        51329: (e, t, i) => {
            i.d(t, {
                L: () => r
            });
            const n = ["en", "fr"],
                a = {
                    en: {
                        audioTracks: "Audio Tracks",
                        captionsOn: "Turn Captions On",
                        captionsOff: "Turn Captions Off",
                        fullscreen: "Toggle fullscreen",
                        gotolive: "Go to Live",
                        live: "Live",
                        pause: "Pause",
                        play: "Play",
                        stop: "Stop",
                        share: "Share",
                        unmute: "Unmute",
                        mute: "Mute",
                        close: "Close",
                        skipForward: "Skip forward 15 seconds",
                        skipBack: "Skip back 15 seconds",
                        linkBtn: "Link",
                        shareLinkLabel: "Link to video",
                        shareTo: "Share to",
                        shareEmail: "Share by email",
                        email: "Email",
                        embed: "Embed",
                        copy: "Copy",
                        copyLink: "Copy link",
                        copyEmbed: "Copy embed code",
                        buffered: "Buffered",
                        seekBar: "Seek slider",
                        volumeLevel: "Volume level",
                        playThisVideo: "Play this video",
                        closedCaptionsAvailable: "Closed-captions available",
                        recommended: "Recommended for You",
                        waitingForLiveStream: "Waiting for live stream",
                        mediaError: "This stream is currently unavailable, it could be over.",
                        ago: "ago",
                        started: "Started",
                        in: "In",
                        now: "now",
                        year: "year",
                        month: "month",
                        day: "day",
                        hour: "hour",
                        minute: "minute",
                        second: "second",
                        advertisement: "Advertisement",
                        ad: "Ad",
                        of: "of",
                        off: "Off",
                        adInProgress: "Playback will start after this advertisement",
                        ctaBeforeLink: "Learn how to ",
                        ctaLinkText: "customize closed captions",
                        ctaAfterLink: " in your system settings.",
                        closedCaptions: "Closed Captions",
                        cancel: "Cancel",
                        autoplay: "Autoplay",
                        upNextIn: "Up next in",
                        moreOptions: "More options",
                        backToPreviousMenu: "Back to previous menu",
                        playbackSpeed: "Playback Speed",
                        slowest: "Slowest: 0.25x",
                        slower: "Slower: 0.5x",
                        slow: "Slow: 0.75x",
                        normal: "Normal: 1x (Default)",
                        slightlyFaster: "Slightly faster: 1.25x",
                        fast: "Fast: 1.5x",
                        faster: "Faster: 1.75x",
                        fastest: "Fastest: 2x"
                    },
                    fr: {
                        audioTracks: "Vid\xe9odescriptions",
                        captionsOn: "Activer les sous-titres cod\xe9s",
                        captionsOff: "D\xe9sactiv\xe9s les sous-titres cod\xe9s",
                        fullscreen: "Mode plein \xe9cran",
                        gotolive: "En Direct",
                        live: "En Direct",
                        pause: "Pause",
                        play: "\xc9couter",
                        stop: "Arr\xeater",
                        share: "Partager",
                        unmute: "D\xe9sactiver le son",
                        mute: "Activer le son",
                        close: "Fermer",
                        skipForward: "Avancer de 15 secondes",
                        skipBack: "Reculer de 15 secondes",
                        linkBtn: "Lien",
                        shareLinkLabel: "Le lien de la vid\xe9o",
                        shareTo: "Partager sur",
                        shareEmail: "Partager par courriel",
                        email: "Courriel",
                        embed: "Int\xe9grer",
                        copy: "Copier",
                        copyLink: "Copier le lien de la vid\xe9o",
                        copyEmbed: "Copier le code pour int\xe9grer la vid\xe9o",
                        buffered: "Tamponn\xe9e",
                        seekBar: "Barre de progression",
                        volumeLevel: "Niveau de volume",
                        playThisVideo: "Regarder la vid\xe9o",
                        closedCaptionsAvailable: "Sous-titres cod\xe9s offerts",
                        recommended: "Recommand\xe9 pour vous",
                        waitingForLiveStream: "En attente de diffusion en direct",
                        mediaError: "Erreur provenant du m\xe9dia",
                        ago: "il y a",
                        started: "Commenc\xe9",
                        in: "En",
                        now: "maintenant",
                        year: "an",
                        month: "mois",
                        day: "jour",
                        hour: "heure",
                        minute: "minute",
                        second: "seconde",
                        advertisement: "Publicit\xe9",
                        ad: "Publicit\xe9",
                        of: "de",
                        off: "D\xe9sactiv\xe9",
                        adInProgress: "La lecture commencera apr\xe8s cette publicit\xe9",
                        ctaBeforeLink: "D\xe9couvrez comment ",
                        ctaLinkText: "personnaliser les sous-titres",
                        ctaAfterLink: " dans les param\xe8tres de votre syst\xe8me.",
                        closedCaptions: "Sous-titres Cod\xe9s",
                        cancel: "Annuler",
                        autoplay: "Lecture automatique",
                        upNextIn: "\xc0 venir dans",
                        moreOptions: "Plus d'options",
                        backToPreviousMenu: "Revenir au menu pr\xe9c\xe9dent",
                        playbackSpeed: "Vitesse de lecture",
                        slowest: "Le plus lent : 0,25x",
                        slower: "Plus lent : 0,5x",
                        slow: "Lent : 0,75x",
                        normal: "Normal : 1x (Par d\xe9faut)",
                        slightlyFaster: "L\xe9g\xe8rement plus rapide : 1,25x",
                        fast: "Rapide : 1,5x",
                        faster: "Plus rapide : 1,75x",
                        fastest: "Le plus rapide: 2x"
                    }
                },
                o = () => {
                    const e = (() => {
                        if ("undefined" === typeof window || "undefined" === typeof window.navigator) return "en";
                        const e = window.navigator.language;
                        if (void 0 !== e && n.includes(e.substring(0, 2))) return e.substring(0, 2);
                        const t = window.navigator.languages;
                        if (t && t.length > 0) {
                            const e = t.find((e => n.includes(e.substring(0, 2))));
                            if (e) return e.substring(0, 2)
                        }
                        return "en"
                    })();
                    return {
                        audioTracks: a[e].audioTracks,
                        captionsOn: a[e].captionsOn,
                        captionsOff: a[e].captionsOff,
                        fullscreen: a[e].fullscreen,
                        gotolive: a[e].gotolive,
                        live: a[e].live,
                        pause: a[e].pause,
                        play: a[e].play,
                        stop: a[e].stop,
                        share: a[e].share,
                        unmute: a[e].unmute,
                        mute: a[e].mute,
                        close: a[e].close,
                        skipForward: a[e].skipForward,
                        skipBack: a[e].skipBack,
                        linkBtn: a[e].linkBtn,
                        shareLinkLabel: a[e].shareLinkLabel,
                        shareTo: a[e].shareTo,
                        shareEmail: a[e].shareEmail,
                        email: a[e].email,
                        embed: a[e].embed,
                        copy: a[e].copy,
                        copyLink: a[e].copyLink,
                        copyEmbed: a[e].copyEmbed,
                        buffered: a[e].buffered,
                        seekBar: a[e].seekBar,
                        volumeLevel: a[e].volumeLevel,
                        playThisVideo: a[e].playThisVideo,
                        closedCaptionsAvailable: a[e].closedCaptionsAvailable,
                        recommended: a[e].recommended,
                        waitingForLiveStream: a[e].waitingForLiveStream,
                        mediaError: a[e].mediaError,
                        ago: a[e].ago,
                        started: a[e].started,
                        in: a[e].in,
                        now: a[e].now,
                        year: a[e].year,
                        month: a[e].month,
                        day: a[e].day,
                        hour: a[e].hour,
                        minute: a[e].minute,
                        second: a[e].second,
                        advertisement: a[e].advertisement,
                        ad: a[e].ad,
                        of: a[e].of,
                        off: a[e].off,
                        adInProgress: a[e].adInProgress,
                        ctaBeforeLink: a[e].ctaBeforeLink,
                        ctaLinkText: a[e].ctaLinkText,
                        ctaAfterLink: a[e].ctaAfterLink,
                        closedCaptions: a[e].closedCaptions,
                        cancel: a[e].cancel,
                        autoplay: a[e].autoplay,
                        upNextIn: a[e].upNextIn,
                        moreOptions: a[e].moreOptions,
                        backToPreviousMenu: a[e].backToPreviousMenu,
                        playbackSpeed: a[e].playbackSpeed,
                        slowest: a[e].slowest,
                        slower: a[e].slower,
                        slow: a[e].slow,
                        normal: a[e].normal,
                        slightlyFaster: a[e].slightlyFaster,
                        fast: a[e].fast,
                        faster: a[e].faster,
                        fastest: a[e].fastest,
                        getLanguage: () => e
                    }
                },
                r = (() => {
                    let e;
                    return () => (e || (e = o()), e)
                })()
        },
        41632: (e, t, i) => {
            i.d(t, {
                F: () => Me,
                H: () => V,
                b: () => Re,
                c: () => W,
                g: () => j,
                h: () => B,
                r: () => u
            });
            const n = !1,
                a = "hydrated",
                o = !0,
                r = !1,
                s = !1,
                l = !0;
            var d = Object.defineProperty,
                c = new WeakMap,
                p = e => c.get(e),
                u = (e, t) => {
                    c.set(t.$lazyInstance$ = e, t)
                },
                h = (e, t) => t in e,
                m = (e, t) => (0, console.error)(e, t),
                v = new Map,
                b = new Map,
                g = "slot-fb{display:contents}slot-fb[hidden]{display:none}",
                x = "undefined" !== typeof window ? window : {},
                A = x.document || {
                    head: {}
                },
                y = {
                    $flags$: 0,
                    $resourcesUrl$: "",
                    jmp: e => e(),
                    raf: e => requestAnimationFrame(e),
                    ael: (e, t, i, n) => e.addEventListener(t, i, n),
                    rel: (e, t, i, n) => e.removeEventListener(t, i, n),
                    ce: (e, t) => new CustomEvent(e, t)
                },
                f = r,
                E = (() => {
                    let e = !1;
                    try {
                        A.addEventListener("e", null, Object.defineProperty({}, "passive", {
                            get() {
                                e = !0
                            }
                        }))
                    } catch (t) {}
                    return e
                })(),
                I = (() => {
                    try {
                        return new CSSStyleSheet, "function" === typeof(new CSSStyleSheet).replaceSync
                    } catch (e) {}
                    return !1
                })(),
                w = !1,
                k = [],
                T = [],
                C = (e, t) => i => {
                    e.push(i), w || (w = !0, t && 4 & y.$flags$ ? D(P) : y.raf(P))
                },
                S = e => {
                    for (let i = 0; i < e.length; i++) try {
                        e[i](performance.now())
                    } catch (t) {
                        m(t)
                    }
                    e.length = 0
                },
                P = () => {
                    S(k), S(T), (w = k.length > 0) && y.raf(P)
                },
                D = e => {
                    return Promise.resolve(t).then(e);
                    var t
                },
                L = C(T, !0),
                R = e => "object" === (e = typeof e) || "function" === e;

            function M(e) {
                var t, i, n;
                return null != (n = null == (i = null == (t = e.head) ? void 0 : t.querySelector('meta[name="csp-nonce"]')) ? void 0 : i.getAttribute("content")) ? n : void 0
            }((e, t) => {
                for (var i in t) d(e, i, {
                    get: t[i],
                    enumerable: !0
                })
            })({}, {
                err: () => _,
                map: () => $,
                ok: () => O,
                unwrap: () => U,
                unwrapErr: () => z
            });
            var O = e => ({
                    isOk: !0,
                    isErr: !1,
                    value: e
                }),
                _ = e => ({
                    isOk: !1,
                    isErr: !0,
                    value: e
                });

            function $(e, t) {
                if (e.isOk) {
                    const i = t(e.value);
                    return i instanceof Promise ? i.then((e => O(e))) : O(i)
                }
                if (e.isErr) {
                    const t = e.value;
                    return _(t)
                }
                throw "should never get here"
            }
            var N, U = e => {
                    if (e.isOk) return e.value;
                    throw e.value
                },
                z = e => {
                    if (e.isErr) return e.value;
                    throw e.value
                },
                B = function(e, t) {
                    let i = null,
                        n = null,
                        a = !1,
                        o = !1;
                    const r = [],
                        s = t => {
                            for (let n = 0; n < t.length; n++) i = t[n], Array.isArray(i) ? s(i) : null != i && "boolean" !== typeof i && ((a = "function" !== typeof e && !R(i)) && (i = String(i)), a && o ? r[r.length - 1].$text$ += i : r.push(a ? F(null, i) : i), o = a)
                        };
                    for (var l = arguments.length, d = new Array(l > 2 ? l - 2 : 0), c = 2; c < l; c++) d[c - 2] = arguments[c];
                    if (s(d), t) {
                        t.key && (n = t.key); {
                            const e = t.className || t.class;
                            e && (t.class = "object" !== typeof e ? e : Object.keys(e).filter((t => e[t])).join(" "))
                        }
                    }
                    if ("function" === typeof e) return e(null === t ? {} : t, r, H);
                    const p = F(e, null);
                    return p.$attrs$ = t, r.length > 0 && (p.$children$ = r), p.$key$ = n, p
                },
                F = (e, t) => {
                    const i = {
                        $flags$: 0,
                        $tag$: e,
                        $text$: t,
                        $elm$: null,
                        $children$: null,
                        $attrs$: null,
                        $key$: null
                    };
                    return i
                },
                V = {},
                H = {
                    forEach: (e, t) => e.map(Y).forEach(t),
                    map: (e, t) => e.map(Y).map(t).map(K)
                },
                Y = e => ({
                    vattrs: e.$attrs$,
                    vchildren: e.$children$,
                    vkey: e.$key$,
                    vname: e.$name$,
                    vtag: e.$tag$,
                    vtext: e.$text$
                }),
                K = e => {
                    if ("function" === typeof e.vtag) {
                        const t = { ...e.vattrs
                        };
                        return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), B(e.vtag, t, ...e.vchildren || [])
                    }
                    const t = F(e.vtag, e.vtext);
                    return t.$attrs$ = e.vattrs, t.$children$ = e.vchildren, t.$key$ = e.vkey, t.$name$ = e.vname, t
                },
                G = (e, t) => null == e || R(e) ? e : 4 & t ? "false" !== e && ("" === e || !!e) : 2 & t ? parseFloat(e) : 1 & t ? String(e) : e,
                j = e => p(e).$hostElement$,
                W = (e, t, i) => {
                    const n = j(e);
                    return {
                        emit: e => q(n, t, {
                            bubbles: !!(4 & i),
                            composed: !!(2 & i),
                            cancelable: !!(1 & i),
                            detail: e
                        })
                    }
                },
                q = (e, t, i) => {
                    const n = y.ce(t, i);
                    return e.dispatchEvent(n), n
                },
                Q = new WeakMap,
                J = e => {
                    const t = e.$cmpMeta$,
                        i = e.$hostElement$,
                        n = (t.$tagName$, () => {});
                    ((e, t, i) => {
                        var n;
                        const a = X(t),
                            o = b.get(a);
                        if (e = 11 === e.nodeType ? e : A, o)
                            if ("string" === typeof o) {
                                e = e.head || e;
                                let i, r = Q.get(e);
                                if (r || Q.set(e, r = new Set), !r.has(a)) {
                                    {
                                        i = document.querySelector(`[sty-id="${a}"]`) || A.createElement("style"), i.innerHTML = o;
                                        const r = null != (n = y.$nonce$) ? n : M(A);
                                        if (null != r && i.setAttribute("nonce", r), !(1 & t.$flags$))
                                            if ("HEAD" === e.nodeName) {
                                                const t = e.querySelectorAll("link[rel=preconnect]"),
                                                    n = t.length > 0 ? t[t.length - 1].nextSibling : e.querySelector("style");
                                                e.insertBefore(i, n)
                                            } else if ("host" in e)
                                            if (I) {
                                                const t = new CSSStyleSheet;
                                                t.replaceSync(o), e.adoptedStyleSheets = [t, ...e.adoptedStyleSheets]
                                            } else {
                                                const t = e.querySelector("style");
                                                t ? t.innerHTML = o + t.innerHTML : e.prepend(i)
                                            }
                                        else e.append(i);
                                        1 & t.$flags$ && "HEAD" !== e.nodeName && e.insertBefore(i, null)
                                    }
                                    4 & t.$flags$ && (i.innerHTML += g), r && r.add(a)
                                }
                            } else e.adoptedStyleSheets.includes(o) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, o])
                    })(i.getRootNode(), t), n()
                },
                X = (e, t) => "sc-" + e.$tagName$,
                Z = (e, t, i, n, a, o) => {
                    if (i !== n) {
                        let s = h(e, t),
                            l = t.toLowerCase();
                        if ("class" === t) {
                            const t = e.classList,
                                a = te(i);
                            let o = te(n);
                            e["s-si"] ? (o.push(e["s-si"]), a.forEach((t => {
                                t.startsWith(e["s-si"]) && o.push(t)
                            })), o = [...new Set(o)], t.add(...o), delete e["s-si"]) : (t.remove(...a.filter((e => e && !o.includes(e)))), t.add(...o.filter((e => e && !a.includes(e)))))
                        } else if ("style" === t) {
                            for (const t in i) n && null != n[t] || (t.includes("-") ? e.style.removeProperty(t) : e.style[t] = "");
                            for (const t in n) i && n[t] === i[t] || (t.includes("-") ? e.style.setProperty(t, n[t]) : e.style[t] = n[t])
                        } else if ("key" === t);
                        else if ("ref" === t) n && n(e);
                        else if (s || "o" !== t[0] || "n" !== t[1]) {
                            const l = R(n);
                            if ((s || l && null !== n) && !a) try {
                                if (e.tagName.includes("-")) e[t] !== n && (e[t] = n);
                                else {
                                    const a = null == n ? "" : n;
                                    "list" === t ? s = !1 : null != i && e[t] == a || ("function" === typeof e.__lookupSetter__(t) ? e[t] = a : e.setAttribute(t, a))
                                }
                            } catch (r) {}
                            null == n || !1 === n ? !1 === n && "" !== e.getAttribute(t) || e.removeAttribute(t) : (!s || 4 & o || a) && !l && (n = !0 === n ? "" : n, e.setAttribute(t, n))
                        } else if (t = "-" === t[2] ? t.slice(3) : h(x, l) ? l.slice(2) : l[2] + t.slice(3), i || n) {
                            const a = t.endsWith(ie);
                            t = t.replace(ne, ""), i && y.rel(e, t, i, a), n && y.ael(e, t, n, a)
                        }
                    }
                },
                ee = /\s/,
                te = e => ("object" === typeof e && "baseVal" in e && (e = e.baseVal), e ? e.split(ee) : []),
                ie = "Capture",
                ne = new RegExp(ie + "$"),
                ae = (e, t, i) => {
                    const n = 11 === t.$elm$.nodeType && t.$elm$.host ? t.$elm$.host : t.$elm$,
                        a = e && e.$attrs$ || {},
                        o = t.$attrs$ || {};
                    for (const r of oe(Object.keys(a))) r in o || Z(n, r, a[r], void 0, i, t.$flags$);
                    for (const r of oe(Object.keys(o))) Z(n, r, a[r], o[r], i, t.$flags$)
                };

            function oe(e) {
                return e.includes("ref") ? [...e.filter((e => "ref" !== e)), "ref"] : e
            }
            var re = !1,
                se = !1,
                le = (e, t, i) => {
                    const n = t.$children$[i];
                    let a, o, r = 0;
                    if (null !== n.$text$) a = n.$elm$ = A.createTextNode(n.$text$);
                    else {
                        if (se || (se = "svg" === n.$tag$), a = n.$elm$ = A.createElementNS(se ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", !re && s && 2 & n.$flags$ ? "slot-fb" : n.$tag$), se && "foreignObject" === n.$tag$ && (se = !1), ae(null, n, se), n.$children$)
                            for (r = 0; r < n.$children$.length; ++r) o = le(e, n, r), o && a.appendChild(o);
                        "svg" === n.$tag$ ? se = !1 : "foreignObject" === a.tagName && (se = !0)
                    }
                    return a["s-hn"] = N, a
                },
                de = (e, t, i, n, a, o) => {
                    let r, s = e;
                    for (; a <= o; ++a) n[a] && (r = le(null, i, a), r && (n[a].$elm$ = r, me(s, r, t)))
                },
                ce = (e, t, i) => {
                    for (let n = t; n <= i; ++n) {
                        const t = e[n];
                        if (t) {
                            const e = t.$elm$;
                            he(t), e && e.remove()
                        }
                    }
                },
                pe = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return e.$tag$ === t.$tag$ && (i ? (i && !e.$key$ && t.$key$ && (e.$key$ = t.$key$), !0) : e.$key$ === t.$key$)
                },
                ue = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    const n = t.$elm$ = e.$elm$,
                        a = e.$children$,
                        o = t.$children$,
                        r = t.$tag$,
                        s = t.$text$;
                    null === s ? (ae(e, t, se = "svg" === r || "foreignObject" !== r && se), null !== a && null !== o ? function(e, t, i, n) {
                        let a, o, r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            s = 0,
                            l = 0,
                            d = 0,
                            c = 0,
                            p = t.length - 1,
                            u = t[0],
                            h = t[p],
                            m = n.length - 1,
                            v = n[0],
                            b = n[m];
                        for (; s <= p && l <= m;)
                            if (null == u) u = t[++s];
                            else if (null == h) h = t[--p];
                        else if (null == v) v = n[++l];
                        else if (null == b) b = n[--m];
                        else if (pe(u, v, r)) ue(u, v, r), u = t[++s], v = n[++l];
                        else if (pe(h, b, r)) ue(h, b, r), h = t[--p], b = n[--m];
                        else if (pe(u, b, r)) ue(u, b, r), me(e, u.$elm$, h.$elm$.nextSibling), u = t[++s], b = n[--m];
                        else if (pe(h, v, r)) ue(h, v, r), me(e, h.$elm$, u.$elm$), h = t[--p], v = n[++l];
                        else {
                            for (d = -1, c = s; c <= p; ++c)
                                if (t[c] && null !== t[c].$key$ && t[c].$key$ === v.$key$) {
                                    d = c;
                                    break
                                }
                            d >= 0 ? (o = t[d], o.$tag$ !== v.$tag$ ? a = le(t && t[l], i, d) : (ue(o, v, r), t[d] = void 0, a = o.$elm$), v = n[++l]) : (a = le(t && t[l], i, l), v = n[++l]), a && me(u.$elm$.parentNode, a, u.$elm$)
                        }
                        s > p ? de(e, null == n[m + 1] ? null : n[m + 1].$elm$, i, n, l, m) : l > m && ce(t, s, p)
                    }(n, a, t, o, i) : null !== o ? (null !== e.$text$ && (n.textContent = ""), de(n, null, t, o, 0, o.length - 1)) : !i && l && null !== a && ce(a, 0, a.length - 1), se && "svg" === r && (se = !1)) : e.$text$ !== s && (n.data = s)
                },
                he = e => {
                    e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(he)
                },
                me = (e, t, i) => null == e ? void 0 : e.insertBefore(t, i),
                ve = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    const n = e.$hostElement$,
                        a = e.$cmpMeta$,
                        o = e.$vnode$ || F(null, null),
                        r = (s = t) && s.$tag$ === V ? t : B(null, null, t);
                    var s;
                    if (N = n.tagName, a.$attrsToReflect$ && (r.$attrs$ = r.$attrs$ || {}, a.$attrsToReflect$.map((e => {
                            let [t, i] = e;
                            return r.$attrs$[i] = n[t]
                        }))), i && r.$attrs$)
                        for (const l of Object.keys(r.$attrs$)) n.hasAttribute(l) && !["key", "ref", "style", "class"].includes(l) && (r.$attrs$[l] = n[l]);
                    r.$tag$ = null, r.$flags$ |= 4, e.$vnode$ = r, r.$elm$ = o.$elm$ = n, re = f, ue(o, r, i)
                },
                be = (e, t) => {
                    if (t && !e.$onRenderResolve$ && t["s-p"]) {
                        const i = t["s-p"].push(new Promise((n => e.$onRenderResolve$ = () => {
                            t["s-p"].splice(i - 1, 1), n()
                        })))
                    }
                },
                ge = (e, t) => {
                    if (e.$flags$ |= 16, 4 & e.$flags$) return void(e.$flags$ |= 512);
                    be(e, e.$ancestorComponent$);
                    return L((() => xe(e, t)))
                },
                xe = (e, t) => {
                    const i = e.$hostElement$,
                        n = (e.$cmpMeta$.$tagName$, () => {}),
                        a = e.$lazyInstance$;
                    if (!a) throw new Error(`Can't render component <${i.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
                    let o;
                    return t && (e.$flags$ |= 256, e.$queuedListeners$ && (e.$queuedListeners$.map((e => {
                        let [t, n] = e;
                        return ke(a, t, n, i)
                    })), e.$queuedListeners$ = void 0), o = ke(a, "componentWillLoad", void 0, i)), o = Ae(o, (() => ke(a, "componentWillRender", void 0, i))), n(), Ae(o, (() => fe(e, a, t)))
                },
                Ae = (e, t) => ye(e) ? e.then(t).catch((e => {
                    console.error(e), t()
                })) : t(),
                ye = e => e instanceof Promise || e && e.then && "function" === typeof e.then,
                fe = async (e, t, i) => {
                    var n;
                    const a = e.$hostElement$,
                        o = (e.$cmpMeta$.$tagName$, () => {}),
                        r = a["s-rc"];
                    i && J(e);
                    const s = (e.$cmpMeta$.$tagName$, () => {});
                    Ee(e, t, a, i), r && (r.map((e => e())), a["s-rc"] = void 0), s(), o(); {
                        const t = null != (n = a["s-p"]) ? n : [],
                            i = () => Ie(e);
                        0 === t.length ? i() : (Promise.all(t).then(i), e.$flags$ |= 4, t.length = 0)
                    }
                },
                Ee = (e, t, i, n) => {
                    try {
                        t = t.render(), e.$flags$ &= -17, e.$flags$ |= 2, ve(e, t, n)
                    } catch (a) {
                        m(a, e.$hostElement$)
                    }
                    return null
                },
                Ie = e => {
                    e.$cmpMeta$.$tagName$;
                    const t = e.$hostElement$,
                        i = () => {},
                        n = e.$lazyInstance$,
                        a = e.$ancestorComponent$;
                    ke(n, "componentDidRender", void 0, t), 64 & e.$flags$ ? (ke(n, "componentDidUpdate", void 0, t), i()) : (e.$flags$ |= 64, Te(t), ke(n, "componentDidLoad", void 0, t), i(), e.$onReadyResolve$(t), a || we()), e.$onInstanceResolve$(t), e.$onRenderResolve$ && (e.$onRenderResolve$(), e.$onRenderResolve$ = void 0), 512 & e.$flags$ && D((() => ge(e, !1))), e.$flags$ &= -517
                },
                we = e => {
                    Te(A.documentElement), D((() => q(x, "appload", {
                        detail: {
                            namespace: "phoenix-player"
                        }
                    })))
                },
                ke = (e, t, i, n) => {
                    if (e && e[t]) try {
                        return e[t](i)
                    } catch (a) {
                        m(a, n)
                    }
                },
                Te = e => {
                    var t;
                    return e.classList.add(null != (t = a) ? t : "hydrated")
                },
                Ce = (e, t, i, n) => {
                    const a = p(e);
                    if (!a) throw new Error(`Couldn't find host element for "${n.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);
                    const o = a.$hostElement$,
                        r = a.$instanceValues$.get(t),
                        s = a.$flags$,
                        l = a.$lazyInstance$;
                    i = G(i, n.$members$[t][0]);
                    const d = Number.isNaN(r) && Number.isNaN(i);
                    if ((!(8 & s) || void 0 === r) && (i !== r && !d) && (a.$instanceValues$.set(t, i), l)) {
                        if (n.$watchers$ && 128 & s) {
                            const e = n.$watchers$[t];
                            e && e.map((e => {
                                try {
                                    l[e](i, r, t)
                                } catch (n) {
                                    m(n, o)
                                }
                            }))
                        }
                        2 === (18 & s) && ge(a, !1)
                    }
                },
                Se = (e, t, i) => {
                    var n, a;
                    const r = e.prototype;
                    if (t.$members$ || t.$watchers$ || e.watchers) {
                        e.watchers && !t.$watchers$ && (t.$watchers$ = e.watchers);
                        const s = Object.entries(null != (n = t.$members$) ? n : {});
                        if (s.map((e => {
                                let [n, [a]] = e;
                                if (31 & a || 2 & i && 32 & a) {
                                    const {
                                        get: e,
                                        set: o
                                    } = Object.getOwnPropertyDescriptor(r, n) || {};
                                    e && (t.$members$[n][0] |= 2048), o && (t.$members$[n][0] |= 4096), (1 & i || !e) && Object.defineProperty(r, n, {
                                        get() {
                                            {
                                                if (0 === (2048 & t.$members$[n][0])) return ((e, t) => p(e).$instanceValues$.get(t))(this, n);
                                                const e = p(this),
                                                    i = e ? e.$lazyInstance$ : r;
                                                if (!i) return;
                                                return i[n]
                                            }
                                        },
                                        configurable: !0,
                                        enumerable: !0
                                    }), Object.defineProperty(r, n, {
                                        set(e) {
                                            const r = p(this);
                                            if (o) {
                                                const i = 32 & a ? this[n] : r.$hostElement$[n];
                                                return "undefined" === typeof i && r.$instanceValues$.get(n) ? e = r.$instanceValues$.get(n) : !r.$instanceValues$.get(n) && i && r.$instanceValues$.set(n, i), o.apply(this, [G(e, a)]), e = 32 & a ? this[n] : r.$hostElement$[n], void Ce(this, n, e, t)
                                            } {
                                                if (0 === (1 & i) || 0 === (4096 & t.$members$[n][0])) return Ce(this, n, e, t), void(1 & i && !r.$lazyInstance$ && r.$onReadyPromise$.then((() => {
                                                    4096 & t.$members$[n][0] && r.$lazyInstance$[n] !== r.$instanceValues$.get(n) && (r.$lazyInstance$[n] = e)
                                                })));
                                                const o = () => {
                                                    const i = r.$lazyInstance$[n];
                                                    !r.$instanceValues$.get(n) && i && r.$instanceValues$.set(n, i), r.$lazyInstance$[n] = G(e, a), Ce(this, n, r.$lazyInstance$[n], t)
                                                };
                                                r.$lazyInstance$ ? o() : r.$onReadyPromise$.then((() => o()))
                                            }
                                        }
                                    })
                                } else 1 & i && 64 & a && Object.defineProperty(r, n, {
                                    value() {
                                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                                        var a;
                                        const o = p(this);
                                        return null == (a = null == o ? void 0 : o.$onInstancePromise$) ? void 0 : a.then((() => {
                                            var e;
                                            return null == (e = o.$lazyInstance$) ? void 0 : e[n](...t)
                                        }))
                                    }
                                })
                            })), 1 & i) {
                            const i = new Map;
                            r.attributeChangedCallback = function(e, n, a) {
                                y.jmp((() => {
                                    var s;
                                    const l = i.get(e);
                                    if (this.hasOwnProperty(l) && o) a = this[l], delete this[l];
                                    else {
                                        if (r.hasOwnProperty(l) && "number" === typeof this[l] && this[l] == a) return;
                                        if (null == l) {
                                            const i = p(this),
                                                o = null == i ? void 0 : i.$flags$;
                                            if (o && !(8 & o) && 128 & o && a !== n) {
                                                const o = i.$lazyInstance$,
                                                    r = null == (s = t.$watchers$) ? void 0 : s[e];
                                                null == r || r.forEach((t => {
                                                    null != o[t] && o[t].call(o, a, n, e)
                                                }))
                                            }
                                            return
                                        }
                                    }
                                    const d = Object.getOwnPropertyDescriptor(r, l);
                                    (a = (null !== a || "boolean" !== typeof this[l]) && a) === this[l] || d.get && !d.set || (this[l] = a)
                                }))
                            }, e.observedAttributes = Array.from(new Set([...Object.keys(null != (a = t.$watchers$) ? a : {}), ...s.filter((e => {
                                let [t, i] = e;
                                return 15 & i[0]
                            })).map((e => {
                                let [n, a] = e;
                                var o;
                                const r = a[1] || n;
                                return i.set(r, n), 512 & a[0] && (null == (o = t.$attrsToReflect$) || o.push([n, r])), r
                            }))]))
                        }
                    }
                    return e
                },
                Pe = async (e, t, a, o) => {
                    let r;
                    if (0 === (32 & t.$flags$)) {
                        t.$flags$ |= 32; {
                            const o = ((e, t, a) => {
                                const o = e.$tagName$.replace(/-/g, "_"),
                                    r = e.$lazyBundleId$;
                                if (!r) return;
                                const s = v.get(r);
                                if (s) return s[o];
                                if (!a || !n) {
                                    const e = e => (v.set(r, e), e[o]);
                                    switch (r) {
                                        case "phoenix-player":
                                            return i.e(1889).then(i.bind(i, 39572)).then(e, m);
                                        case "ad-ui-overlay_3":
                                            return i.e(1889).then(i.bind(i, 82511)).then(e, m);
                                        case "captions-btn_16":
                                            return i.e(1889).then(i.bind(i, 65463)).then(e, m);
                                        case "skip-back-btn_2":
                                            return i.e(1889).then(i.bind(i, 18146)).then(e, m);
                                        case "buffer-bar_10":
                                            return i.e(1889).then(i.bind(i, 20681)).then(e, m);
                                        case "custom-toggle":
                                            return i.e(1889).then(i.bind(i, 57895)).then(e, m);
                                        case "relative-date-time":
                                            return i.e(1889).then(i.bind(i, 59321)).then(e, m);
                                        case "options-menu-back-btn":
                                            return i.e(1889).then(i.bind(i, 39809)).then(e, m)
                                    }
                                }
                                return i(28794)(`./${r}.entry.js`).then((e => (v.set(r, e), e[o])), (e => {
                                    m(e, t.$hostElement$)
                                }))
                            })(a, t);
                            if (o && "then" in o) {
                                const e = () => {};
                                r = await o, e()
                            } else r = o;
                            if (!r) throw new Error(`Constructor for "${a.$tagName$}#${t.$modeName$}" was not found`);
                            r.isProxied || (a.$watchers$ = r.watchers, Se(r, a, 2), r.isProxied = !0);
                            const s = (a.$tagName$, () => {});
                            t.$flags$ |= 8;
                            try {
                                new r(t)
                            } catch (d) {
                                m(d, e)
                            }
                            t.$flags$ &= -9, t.$flags$ |= 128, s(), De(t.$lazyInstance$, e)
                        }
                        if (r && r.style) {
                            let e;
                            "string" === typeof r.style && (e = r.style);
                            const t = X(a);
                            if (!b.has(t)) {
                                const i = (a.$tagName$, () => {});
                                ((e, t, i) => {
                                    let n = b.get(e);
                                    I && i ? (n = n || new CSSStyleSheet, "string" === typeof n ? n = t : n.replaceSync(t)) : n = t, b.set(e, n)
                                })(t, e, !!(1 & a.$flags$)), i()
                            }
                        }
                    }
                    const s = t.$ancestorComponent$,
                        l = () => ge(t, !0);
                    s && s["s-rc"] ? s["s-rc"].push(l) : l()
                },
                De = (e, t) => {
                    ke(e, "connectedCallback", void 0, t)
                },
                Le = (e, t) => {
                    ke(e, "disconnectedCallback", void 0, t || e)
                },
                Re = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var i;
                    const n = () => {},
                        a = [],
                        o = t.exclude || [],
                        r = x.customElements,
                        s = A.head,
                        l = s.querySelector("meta[charset]"),
                        d = A.createElement("style"),
                        u = [];
                    let h, m = !0;
                    Object.assign(y, t), y.$resourcesUrl$ = new URL(t.resourcesUrl || "./", A.baseURI).href;
                    let v = !1;
                    if (e.map((e => {
                            e[1].map((t => {
                                var i;
                                const n = {
                                    $flags$: t[0],
                                    $tagName$: t[1],
                                    $members$: t[2],
                                    $listeners$: t[3]
                                };
                                4 & n.$flags$ && (v = !0), n.$members$ = t[2], n.$listeners$ = t[3], n.$attrsToReflect$ = [], n.$watchers$ = null != (i = t[4]) ? i : {};
                                const s = n.$tagName$,
                                    l = class extends HTMLElement {
                                        constructor(e) {
                                            super(e), this.hasRegisteredEventListeners = !1, ((e, t) => {
                                                const i = {
                                                    $flags$: 0,
                                                    $hostElement$: e,
                                                    $cmpMeta$: t,
                                                    $instanceValues$: new Map
                                                };
                                                i.$onInstancePromise$ = new Promise((e => i.$onInstanceResolve$ = e)), i.$onReadyPromise$ = new Promise((e => i.$onReadyResolve$ = e)), e["s-p"] = [], e["s-rc"] = [], c.set(e, i)
                                            })(e = this, n)
                                        }
                                        connectedCallback() {
                                            const e = p(this);
                                            this.hasRegisteredEventListeners || (this.hasRegisteredEventListeners = !0, Oe(this, e, n.$listeners$)), h && (clearTimeout(h), h = null), m ? u.push(this) : y.jmp((() => (e => {
                                                if (0 === (1 & y.$flags$)) {
                                                    const t = p(e),
                                                        i = t.$cmpMeta$,
                                                        n = (i.$tagName$, () => {});
                                                    if (1 & t.$flags$) Oe(e, t, i.$listeners$), (null == t ? void 0 : t.$lazyInstance$) ? De(t.$lazyInstance$, e) : (null == t ? void 0 : t.$onReadyPromise$) && t.$onReadyPromise$.then((() => De(t.$lazyInstance$, e)));
                                                    else {
                                                        t.$flags$ |= 1; {
                                                            let i = e;
                                                            for (; i = i.parentNode || i.host;)
                                                                if (i["s-p"]) {
                                                                    be(t, t.$ancestorComponent$ = i);
                                                                    break
                                                                }
                                                        }
                                                        i.$members$ && Object.entries(i.$members$).map((t => {
                                                            let [i, [n]] = t;
                                                            if (31 & n && e.hasOwnProperty(i)) {
                                                                const t = e[i];
                                                                delete e[i], e[i] = t
                                                            }
                                                        })), Pe(e, t, i)
                                                    }
                                                    n()
                                                }
                                            })(this)))
                                        }
                                        disconnectedCallback() {
                                            y.jmp((() => (async e => {
                                                if (0 === (1 & y.$flags$)) {
                                                    const t = p(e);
                                                    t.$rmListeners$ && (t.$rmListeners$.map((e => e())), t.$rmListeners$ = void 0), (null == t ? void 0 : t.$lazyInstance$) ? Le(t.$lazyInstance$, e) : (null == t ? void 0 : t.$onReadyPromise$) && t.$onReadyPromise$.then((() => Le(t.$lazyInstance$, e)))
                                                }
                                                Q.has(e) && Q.delete(e), e.shadowRoot && Q.has(e.shadowRoot) && Q.delete(e.shadowRoot)
                                            })(this))), y.raf((() => {
                                                var e;
                                                const t = p(this);
                                                (null == (e = null == t ? void 0 : t.$vnode$) ? void 0 : e.$elm$) instanceof Node && !t.$vnode$.$elm$.isConnected && delete t.$vnode$.$elm$
                                            }))
                                        }
                                        componentOnReady() {
                                            return p(this).$onReadyPromise$
                                        }
                                    };
                                n.$lazyBundleId$ = e[0], o.includes(s) || r.get(s) || (a.push(s), r.define(s, Se(l, n, 1)))
                            }))
                        })), a.length > 0 && (v && (d.textContent += g), d.textContent += a.sort() + "{visibility:hidden}.hydrated{visibility:inherit}", d.innerHTML.length)) {
                        d.setAttribute("data-styles", "");
                        const e = null != (i = y.$nonce$) ? i : M(A);
                        null != e && d.setAttribute("nonce", e), s.insertBefore(d, l ? l.nextSibling : s.firstChild)
                    }
                    m = !1, u.length ? u.map((e => e.connectedCallback())) : y.jmp((() => h = setTimeout(we, 30))), n()
                },
                Me = (e, t) => t,
                Oe = (e, t, i, n) => {
                    i && i.map((i => {
                        let [n, a, o] = i;
                        const r = e,
                            s = _e(t, o),
                            l = $e(n);
                        y.ael(r, a, s, l), (t.$rmListeners$ = t.$rmListeners$ || []).push((() => y.rel(r, a, s, l)))
                    }))
                },
                _e = (e, t) => i => {
                    var n;
                    try {
                        256 & e.$flags$ ? null == (n = e.$lazyInstance$) || n[t](i) : (e.$queuedListeners$ = e.$queuedListeners$ || []).push([t, i])
                    } catch (a) {
                        m(a, e.$hostElement$)
                    }
                },
                $e = e => E ? {
                    passive: 0 !== (1 & e),
                    capture: 0 !== (2 & e)
                } : 0 !== (2 & e)
        },
        28545: (e, t, i) => {
            i.d(t, {
                i: () => a
            });
            var n = i(97456);
            const a = e => {
                var t;
                return (e.to === n.S.ADVERTISING || e.to === n.S.ADVERTISING_PAUSED) && (null === (t = e.data) || void 0 === t ? void 0 : t.adType) === n.d.CLIENTSIDE
            }
        },
        97456: (e, t, i) => {
            i.d(t, {
                E: () => l,
                F: () => y,
                H: () => m,
                I: () => d,
                K: () => p,
                L: () => v,
                O: () => A,
                P: () => b,
                S: () => s,
                V: () => u,
                a: () => h,
                b: () => r,
                c: () => g,
                d: () => c,
                e: () => T,
                f: () => f,
                g: () => I,
                h: () => x,
                i: () => S,
                j: () => k,
                k: () => w,
                l: () => C
            });
            var n = i(51329);
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof i.g ? i.g : "undefined" !== typeof self && self;

            function a(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }
            var o = {
                exports: {}
            };
            ! function(e, t) {
                e.exports = (() => {
                    var e = {
                            936: function(e) {
                                e.exports = (() => {
                                    var e = {
                                            850: function(e) {
                                                e.exports = (() => {
                                                    var e = {
                                                            d: (t, i) => {
                                                                for (var n in i) e.o(i, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                                                                    enumerable: !0,
                                                                    get: i[n]
                                                                })
                                                            },
                                                            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                                                            r: e => {
                                                                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                                                    value: "Module"
                                                                }), Object.defineProperty(e, "__esModule", {
                                                                    value: !0
                                                                })
                                                            }
                                                        },
                                                        t = {};
                                                    e.r(t), e.d(t, {
                                                        detectAdsBlocked: () => i,
                                                        getCdpSegments: () => u,
                                                        getCmpData: () => h,
                                                        getDmpSegments: () => p,
                                                        getFeedCookie: () => o,
                                                        getPPID: () => a,
                                                        getUserCookie: () => r,
                                                        getUserPersonalisation: () => c,
                                                        insertScripts: () => b,
                                                        setPersonalisedTargeting: () => m
                                                    });
                                                    const i = () => !!((() => {
                                                            const e = (() => {
                                                                const e = document.createElement("div");
                                                                return e.setAttribute("class", "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-text adSense adBlock adContent adBanner"), e.setAttribute("style", "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"), e
                                                            })();
                                                            window.document.body.append(e);
                                                            const t = (e => {
                                                                if (null === e.offsetParent || 0 == e.offsetHeight || 0 == e.offsetLeft || 0 == e.offsetTop || 0 == e.offsetWidth || 0 == e.clientHeight || 0 == e.clientWidth) return !0;
                                                                if (void 0 !== window.getComputedStyle) {
                                                                    const t = window.getComputedStyle(e);
                                                                    if (t && ("none" == t.getPropertyValue("display") || "hidden" == t.getPropertyValue("visibility"))) return !0
                                                                }
                                                                return !1
                                                            })(e);
                                                            return e.remove(), t
                                                        })() || (() => {
                                                            let e = !1;
                                                            return document.querySelectorAll("style").forEach((t => {
                                                                e = !!t.innerText.includes(":root topadblock")
                                                            })), e
                                                        })() || "object" == typeof window.navigator.brave && void 0 === window.googletag._loaded_),
                                                        n = "cbc_ppid",
                                                        a = async () => {
                                                            const e = r(),
                                                                t = o(n);
                                                            return "" !== e.id && e !== t && (e => {
                                                                const t = new Date;
                                                                t.setTime(t.getTime() + 31536e6);
                                                                const i = `; expires=${t.toUTCString()}`;
                                                                window.document.cookie = `${n}=${e}${i}; path=/; domain=.cbc.ca`
                                                            })(e.id), "" !== e.id ? await (async e => {
                                                                if (null !== ((window.crypto.subtle || {}).digest || null)) {
                                                                    const t = (new TextEncoder).encode(e),
                                                                        i = await window.crypto.subtle.digest("SHA-256", t);
                                                                    return Array.from(new Uint8Array(i)).map((e => e.toString(16).padStart(2, "0"))).join("")
                                                                }
                                                                return null
                                                            })(e.id) : null
                                                        },
                                                        o = e => {
                                                            const t = window.document.cookie.split(";"),
                                                                i = {
                                                                    name: "",
                                                                    id: ""
                                                                };
                                                            return t.forEach((t => {
                                                                const n = t.split("=");
                                                                if (n[0] && n[0].trim() === e) return i.name = n[0].trim(), i.id = n[1].trim(), i
                                                            })), i
                                                        },
                                                        r = () => {
                                                            const e = ["cbc_plus", n, "cbc_visitor"];
                                                            for (let t = 0; t < e.length; t++) {
                                                                const i = o(e[t]);
                                                                if ("" !== i.id) return i
                                                            }
                                                            return {
                                                                name: "",
                                                                id: ""
                                                            }
                                                        },
                                                        s = "personaliz-CbNGLdPX",
                                                        l = "personaliz-rT2hmC9K",
                                                        d = {
                                                            purposes: {
                                                                "personaliz-CbNGLdPX": {
                                                                    enabled: !0
                                                                },
                                                                "personaliz-rT2hmC9K": {
                                                                    enabled: !0
                                                                }
                                                            },
                                                            vendors: {
                                                                vendor: {
                                                                    id: "",
                                                                    enabled: !0
                                                                }
                                                            }
                                                        },
                                                        c = () => {
                                                            const e = {
                                                                cmpData: {
                                                                    cmpOptIn: !0,
                                                                    contentOptIn: !0,
                                                                    userStatus: d
                                                                },
                                                                cdpSegments: [],
                                                                dmpSegments: []
                                                            };
                                                            e.cmpData = h();
                                                            const t = e.cmpData.cmpOptIn,
                                                                i = e.cmpData.contentOptIn;
                                                            return t && i ? (e.cdpSegments = u(), e.dmpSegments = p()) : t || window.googletag && window.googletag.pubadsReady && window.googletag.setConfig({
                                                                privacyTreatments: {
                                                                    treatments: ["disablePersonalization"]
                                                                }
                                                            }), e
                                                        },
                                                        p = () => {
                                                            let e = [];
                                                            const t = window.lotame_10205 || {};
                                                            return t.getAudiences = t.getAudiences || [], "function" == typeof t.getAudiences ? (e = t.getAudiences(), e) : e
                                                        },
                                                        u = () => {
                                                            let e = [];
                                                            const t = window.blueConicClient || {};
                                                            if (t.getSegments = t.getSegments || [], "function" == typeof t.getSegments) {
                                                                const i = [];
                                                                return t.getSegments().forEach((e => {
                                                                    i.push(e.id)
                                                                })), e = i, e
                                                            }
                                                            return e
                                                        },
                                                        h = () => {
                                                            window.Didomi = window.Didomi || {}, window.Didomi.getCurrentUserStatus = window.Didomi.getCurrentUserStatus || void 0;
                                                            const e = {
                                                                cmpOptIn: !0,
                                                                contentOptIn: !0,
                                                                userStatus: d
                                                            };
                                                            if (void 0 !== window.Didomi.getCurrentUserStatus) {
                                                                const t = window.Didomi.getCurrentUserStatus();
                                                                e.userStatus = t;
                                                                const i = t.purposes,
                                                                    n = i[s].enabled,
                                                                    a = i[l].enabled;
                                                                e.contentOptIn = a;
                                                                const o = Object.values(t.vendors);
                                                                let r = !0;
                                                                if (n)
                                                                    for (const e of o) {
                                                                        const t = window.Didomi.getVendorById(`c:${e.id}`);
                                                                        if (t.legIntPurposeIds && t.legIntPurposeIds.includes(s) && !e.enabled) {
                                                                            if (!a && !t.legIntPurposeIds.includes(l)) {
                                                                                r = !1;
                                                                                break
                                                                            }
                                                                            if (a) {
                                                                                r = !1;
                                                                                break
                                                                            }
                                                                        }
                                                                    }
                                                                e.cmpOptIn = n && r
                                                            }
                                                            return e
                                                        },
                                                        m = (e, t) => {
                                                            const {
                                                                cdpSegments: i,
                                                                dmpSegments: n
                                                            } = e, a = o("ios_a_p");
                                                            if (!new URLSearchParams(t).get("ios_a_p") && "" === a.id) {
                                                                const e = n.concat(i);
                                                                e.length > 0 && window.googletag && window.googletag.pubadsReady && window.googletag.pubads().setTargeting("audienceList", e)
                                                            }
                                                        },
                                                        v = [{
                                                            elementType: "link",
                                                            relType: "preconnect",
                                                            scriptName: "googleTagServicesPreconnect",
                                                            scriptUrl: "https://www.googletagservices.com",
                                                            loadMode: "crossorigin"
                                                        }, {
                                                            elementType: "link",
                                                            relType: "dns-prefetch",
                                                            scriptName: "googleTagServicesPrefetch",
                                                            scriptUrl: "https://www.googletagservices.com",
                                                            loadMode: "crossorigin"
                                                        }, {
                                                            elementType: "link",
                                                            relType: "preconnect",
                                                            scriptName: "adservicePreconnect",
                                                            scriptUrl: "https://adservice.google.ca",
                                                            loadMode: "crossorigin"
                                                        }, {
                                                            elementType: "link",
                                                            relType: "dns-prefetch",
                                                            scriptName: "adservicePrefetch",
                                                            scriptUrl: "https://adservice.google.ca",
                                                            loadMode: "crossorigin"
                                                        }, {
                                                            elementType: "link",
                                                            relType: "preconnect",
                                                            scriptName: "pageadPreconnect",
                                                            scriptUrl: "https://pagead2.googlesyndication.com",
                                                            loadMode: "crossorigin"
                                                        }, {
                                                            elementType: "link",
                                                            relType: "dns-prefetch",
                                                            scriptName: "pageadPrefetch",
                                                            scriptUrl: "https://pagead2.googlesyndication.com",
                                                            loadMode: "crossorigin"
                                                        }, {
                                                            elementType: "link",
                                                            relType: "preconnect",
                                                            scriptName: "securepubadsPreconnect",
                                                            scriptUrl: "https://securepubads.g.doubleclick.net",
                                                            loadMode: "crossorigin"
                                                        }, {
                                                            elementType: "link",
                                                            relType: "dns-prefetch",
                                                            scriptName: "securepubadsPrefetch",
                                                            scriptUrl: "https://securepubads.g.doubleclick.net",
                                                            loadMode: "crossorigin"
                                                        }, {
                                                            elementType: "script",
                                                            scriptName: "gpt",
                                                            scriptUrl: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                                                            loadMode: "async"
                                                        }, {
                                                            elementType: "script",
                                                            scriptName: "adLightning",
                                                            scriptUrl: "https://tagan.adlightning.com/cbc/op.js",
                                                            loadMode: "async"
                                                        }, {
                                                            elementType: "script",
                                                            scriptName: "pbjs",
                                                            scriptUrl: "https://www.cbc.ca/g/stats/js/cbc-prebid.js",
                                                            loadMode: "async"
                                                        }, {
                                                            elementType: "script",
                                                            scriptName: "admiral",
                                                            scriptUrl: "https://www.cbc.ca/g/stats/js/admiral-script.js",
                                                            loadMode: "defer"
                                                        }, {
                                                            elementType: "script",
                                                            scriptName: "contxtful",
                                                            scriptUrl: "//api.receptivity.io/v1/publisher/1Pw320kTdUM9nIw5Vsh5VqQtx/connector/p.js?callback=CONTXTFUL_CALLBACK",
                                                            loadMode: "async"
                                                        }],
                                                        b = function() {
                                                            "undefined" != typeof window && (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v).forEach((e => {
                                                                const t = e.elementType.charAt(0).toUpperCase() + e.elementType.slice(1);
                                                                if (window.document.querySelector(`#${e.scriptName}` + t)) return;
                                                                const i = window.document.querySelector("head"),
                                                                    n = window.document.createElement(`${e.elementType}`);
                                                                "script" === e.elementType ? n.setAttribute("src", `${e.scriptUrl}`) : "link" === e.elementType && (n.setAttribute("rel", `${e.relType}`), n.setAttribute("href", `${e.scriptUrl}`)), n.setAttribute(`${e.loadMode}`, ""), n.setAttribute("id", `${e.scriptName}` + t), null !== i && i.append(n)
                                                            }))
                                                        };
                                                    return t
                                                })()
                                            }
                                        },
                                        t = {};

                                    function i(n) {
                                        var a = t[n];
                                        if (void 0 !== a) return a.exports;
                                        var o = t[n] = {
                                            exports: {}
                                        };
                                        return e[n].call(o.exports, o, o.exports, i), o.exports
                                    }
                                    i.d = (e, t) => {
                                        for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                                            enumerable: !0,
                                            get: t[n]
                                        })
                                    }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
                                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                            value: "Module"
                                        }), Object.defineProperty(e, "__esModule", {
                                            value: !0
                                        })
                                    };
                                    var n = {};
                                    return (() => {
                                        i.r(n), i.d(n, {
                                            getAdUrl: () => p,
                                            getDaiParams: () => u
                                        });
                                        var e = i(850);
                                        const t = "undefined" != typeof window ? document.location.origin + document.location.pathname : "",
                                            a = "web-app",
                                            o = "phoenix",
                                            r = "auto",
                                            s = "undefined" != typeof window ? "" === document.referrer ? "direct" : "indirect" : "",
                                            l = [{
                                                elementType: "script",
                                                scriptName: "casalePrebidHelper",
                                                scriptUrl: "https://js-sec.casalemedia.com/ixpb/ix-prebid-helper.js",
                                                loadMode: "async"
                                            }],
                                            d = t => {
                                                const i = t ? (0, e.getDmpSegments)() : [],
                                                    n = t ? (0, e.getCdpSegments)() : [];
                                                return i.concat(n)
                                            },
                                            c = e => {
                                                var t, i;
                                                window.CBC || (window.CBC = {
                                                    Listen: {
                                                        currentMediaRequest: {
                                                            type: ""
                                                        }
                                                    }
                                                });
                                                let n = void 0 !== (null === (t = window.CBC.Listen) || void 0 === t ? void 0 : t.currentMediaRequest.type) && "" !== (null === (i = window.CBC.Listen) || void 0 === i ? void 0 : i.currentMediaRequest.type) ? "listen" : "feed";
                                                return n = e.includes("/olympics/") ? "olympics" : n, n
                                            },
                                            p = async i => {
                                                const n = await (0, e.getPPID)();
                                                let p = "",
                                                    u = "",
                                                    h = "";
                                                const m = encodeURI(t),
                                                    v = (0, e.getCmpData)(),
                                                    {
                                                        cmpOptIn: b
                                                    } = v,
                                                    g = b ? "0" : "1",
                                                    x = c(i.metadata.adOrder),
                                                    A = d(b).join();
                                                (0, e.insertScripts)(l);
                                                try {
                                                    (() => {
                                                        const e = {
                                                            bidders: ["ix"]
                                                        };
                                                        window.ixPrebidHelper = window.ixPrebidHelper || {
                                                            cmd: []
                                                        }, window.ixPrebidHelper.cmd.push((function() {
                                                            window.ixPrebidHelper.sendUserSync(e)
                                                        }))
                                                    })()
                                                } catch (e) {
                                                    console.log("Failed IX user sync")
                                                }
                                                return i && i.metadata && (p = "https://instream.casalemedia.com/playlist?ix_s=198408&ix_ca=%7B%22protocols%22%3A%5B2%2C3%2C5%2C6%5D%2C%22mimes%22%3A%5B%22video%2Fmp4%22%5D%2C%22apiList%22%3A%5B2%5D%2C%22size%22%3A%22320x240%22%2C%22maxAdDuration%22%3A30%2C%22timeout%22%3A1000%2C%22brandExclusion%22%3A1%7D&ix_vt=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Fads&sz=320x240&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&correlator=[timestamp]&ad_rule=1&cmsid=2673647&iu=5876/", h += "plat=" + o + "&ix_u=" + t + "&bu=" + x + "&device=" + a + "&source=" + s + "&audienceList=" + A, i.metadata.adCategoryExclusion && "" !== i.metadata.adCategoryExclusion && (h += "&excl_cat=" + i.metadata.adCategoryExclusion), document.referrer.split("/").indexOf("amp") > -1 && (h += "&env=amp"), p += i.metadata.adOrder + "&ppid=" + n + "&description_url=" + m + "&url=" + m + "&vid=" + i.metadata.id + "&vpi=0&vpmute=0&vpa=" + r + "&plcmt=1&pp=" + a + "&ppt=" + g + "&cust_params="), u = p + encodeURIComponent(h), u
                                            },
                                            u = async i => {
                                                const n = await (0, e.getPPID)(),
                                                    l = "string" == typeof n ? n : "",
                                                    p = c(i),
                                                    u = (0, e.getCmpData)(),
                                                    {
                                                        cmpOptIn: h
                                                    } = u,
                                                    m = h ? "0" : "1",
                                                    v = d(h).join();
                                                return {
                                                    cust_params: "plat=" + o + "&bu=" + p + "&device=" + a + "&pp=" + a + "&url=" + t + "&source=" + s + "&audienceList=" + v,
                                                    ppid: l,
                                                    descriptionUrl: t,
                                                    vpa: r,
                                                    vpmute: "0",
                                                    npa: m
                                                }
                                            }
                                    })(), n
                                })()
                            },
                            241: (e, t) => {
                                (() => {
                                    var e, i = {
                                            d: (e, t) => {
                                                for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                                                    enumerable: !0,
                                                    get: t[n]
                                                })
                                            },
                                            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                                            r: e => {
                                                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                                    value: "Module"
                                                }), Object.defineProperty(e, "__esModule", {
                                                    value: !0
                                                })
                                            }
                                        },
                                        n = {};
                                    i.r(n), i.d(n, {
                                            GQL_CONTENTITEM_FRAGMENT_FOR_MEDIA: () => o,
                                            default: () => c,
                                            fetchFromGraphQL: () => r,
                                            fetchMediaData: () => s,
                                            fetchRecommendedItems: () => l,
                                            getVersion: () => d,
                                            transformMediaItemToMediaData: () => a
                                        }),
                                        function(e) {
                                            e.DEV = "dev", e.QA = "qa", e.PROD = "prod", e.STG = "stg"
                                        }(e || (e = {}));
                                    const a = e => {
                                            var t, i, n, a, o, r, s, l, d, c, p;
                                            if (!(null == e ? void 0 : e.media)) return null;
                                            const u = {};
                                            return u.sourceId = e.sourceId, u.mediaId = e.mediaId, u.mediaNetId = null !== (i = null === (t = e.media.id) || void 0 === t ? void 0 : t.toString()) && void 0 !== i ? i : null, u.callSign = e.media.callSign, u.source = e.source, u.format = e.type, u.assets = e.media.assets || null, u.adOrder = e.media.adOrder, u.adCategoryExclusion = e.media.adCategoryExclusion, u.isLive = "Live" === e.media.streamType, u.contentArea = e.media.contentArea, u.contentTier = null !== (a = null === (n = e.media.contentTierId) || void 0 === n ? void 0 : n.toString()) && void 0 !== a ? a : null, u.tags = e.tags || [], u.concepts = e.concepts || [], u.duration = e.media.duration, u.showName = null !== (r = null === (o = e.showData) || void 0 === o ? void 0 : o.name) && void 0 !== r ? r : e.showName, u.title = e.title, u.thumbnail = (e => {
                                                var t, i;
                                                let n = null == e ? void 0 : e.url;
                                                const a = null === (i = null === (t = null == e ? void 0 : e.aspects) || void 0 === t ? void 0 : t.ratio16x9) || void 0 === i ? void 0 : i.url;
                                                return a && (n = `${a}Resize%3D1180`), n
                                            })(e.image), u.genre = e.media.genre, u.type = e.media.clipType, u.brandedSponsorName = e.media.brandedSponsorName, u.season = null !== (l = null === (s = e.media.season) || void 0 === s ? void 0 : s.toString()) && void 0 !== l ? l : null, u.episode = null !== (c = null === (d = e.media.episode) || void 0 === d ? void 0 : d.toString()) && void 0 !== c ? c : null, u.region = e.media.region, u.pubDate = parseInt(e.publishedAt), u.sport = null === (p = e.media.sports) || void 0 === p ? void 0 : p.name, u.hasCaptions = e.media.hasCaptions, u.aspectRatio = e.media.aspectRatio, u.shareUrl = `https://www.cbc.ca/player/play/${e.type}/${e.sourceId}`, e.media.chapters && (u.chapters = e.media.chapters), e.media.textTracks && (u.textTracks = e.media.textTracks.map((e => ({
                                                label: e.label,
                                                srclang: e.language,
                                                src: e.src,
                                                kind: e.kind
                                            })))), u
                                        },
                                        o = "\n    sourceId\n    mediaId\n    source\n    title\n    image {\n        url\n        aspects {\n            ratio16x9 {\n                url\n            }\n        }\n    }\n    publishedAt\n    type\n    showData {\n        name\n    }\n    showName\n    tags {\n        type\n        name\n    }\n    concepts {\n        type\n        path\n    }\n    media {\n        id\n        callSign\n        assets {\n            key\n            type\n            options {\n                token\n            }\n        }\n        adOrder\n        adCategoryExclusion\n        streamType\n        contentArea\n        contentTierId\n        duration\n        genre\n        clipType\n        brandedSponsorName\n        season\n        episode\n        region\n        sports {\n            name\n        }\n        hasCaptions\n        aspectRatio\n        textTracks {\n            kind\n            label\n            src\n            language\n        }\n        chapters {\n            name\n            startTime\n        }\n    }\n",
                                        r = async (t, i) => {
                                            const n = (t => {
                                                    let i = ".";
                                                    return t !== e.DEV && t !== e.QA || (i = `.${t}.nm.`), `https://www${i}cbc.ca/${t===e.STG?"gql-stg":"graphql"}`
                                                })(i),
                                                a = {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "X-Cache-By-Country": "true"
                                                    },
                                                    body: JSON.stringify(t)
                                                },
                                                o = await fetch(n, a);
                                            return await o.json()
                                        },
                                        s = async (e, t, i) => {
                                            var n;
                                            if (!e) return null;
                                            let s = null;
                                            const l = ((e, t) => ({
                                                query: `{ contentItem(${e.toString().includes(".")?`sourceId: "${e}"`:`mediaId: ${e}`}${t?`, token: "${t}", workflowState: ALL`:""}) {\n            ${o}\n        }}`
                                            }))(e, i);
                                            try {
                                                const e = null === (n = (await r(l, t)).data) || void 0 === n ? void 0 : n.contentItem;
                                                if (!e) throw new Error("No GQL media item in GraphQL response");
                                                s = a(e)
                                            } catch (e) {
                                                return console.error(e), s
                                            }
                                            return s
                                        },
                                        l = async (e, t, i, n, s) => {
                                            var l, d, c, p;
                                            if (!e) throw new Error("Missing mandatory argument 'algorithmId'.");
                                            const u = Number.isInteger(i) ? i : 2,
                                                h = null == n || n,
                                                m = {
                                                    query: ""
                                                };
                                            if (t) m.query = `{\n            personalizedItems(algorithmId: "${e}", userId: "${t}", allowPersonalized: ${h}, first: ${u}) {\n                nodes {\n                    ${o}\n                }\n                algorithmId\n            }\n        }`;
                                            else {
                                                const t = "rec4you-short-form-news-video" === e ? "short-form-news-video" : "short-form-video";
                                                m.query = `{\n            mlDrivenItems(algorithm: "trending", type: "video", pageSize: ${u}, args: { trendingType: "${t}", allowPersonalized: ${n}} }) {\n                items {\n                    ${o}\n                }\n            }\n        }`
                                            }
                                            let v = [];
                                            try {
                                                const e = await r(m, s),
                                                    i = t ? null === (d = null === (l = null == e ? void 0 : e.data) || void 0 === l ? void 0 : l.personalizedItems) || void 0 === d ? void 0 : d.nodes : null === (p = null === (c = null == e ? void 0 : e.data) || void 0 === c ? void 0 : c.mlDrivenItems) || void 0 === p ? void 0 : p.items;
                                                (null == i ? void 0 : i.length) && (v = i.filter((e => {
                                                    var t, i;
                                                    return null === (i = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.assets) || void 0 === i ? void 0 : i.length
                                                })).map((e => a(e))))
                                            } catch (e) {
                                                console.error(e)
                                            }
                                            return v
                                        },
                                        d = () => "1.8.1",
                                        c = {
                                            fetchMediaData: s,
                                            fetchRecommendedItems: l,
                                            fetchFromGraphQL: r,
                                            getVersion: d,
                                            transformMediaItemToMediaData: a,
                                            GQL_CONTENTITEM_FRAGMENT_FOR_MEDIA: o
                                        };
                                    t.W9 = n.fetchRecommendedItems
                                })()
                            }
                        },
                        t = {};

                    function i(n) {
                        var a = t[n];
                        if (void 0 !== a) return a.exports;
                        var o = t[n] = {
                            exports: {}
                        };
                        return e[n].call(o.exports, o, o.exports, i), o.exports
                    }
                    i.d = (e, t) => {
                        for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: t[n]
                        })
                    }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    };
                    var n = {};
                    return (() => {
                        i.d(n, {
                            default: () => Ie
                        });
                        var e, t = {};
                        i.r(t), i.d(t, {
                                Vu: () => v,
                                ll: () => p,
                                R1: () => h,
                                dm: () => m,
                                XQ: () => u
                            }),
                            function(e) {
                                e[e.OK = 0] = "OK", e[e.ERROR = 1] = "ERROR"
                            }(e || (e = {}));
                        const a = (e, t) => o(e, t, !0),
                            o = async (t, i, n) => {
                                try {
                                    const a = await fetch(t, i);
                                    if (!a.ok) {
                                        const e = new Error;
                                        throw e.name = "FetchError", e.message = "Requesting " + t + "failed with " + a.status + ": " + a.statusText, e
                                    }
                                    const o = n ? await a.json() : await a.text();
                                    return {
                                        status: e.OK,
                                        response: o
                                    }
                                } catch (t) {
                                    return {
                                        status: e.ERROR,
                                        response: t
                                    }
                                }
                            },
                            r = ["qa", "dev"],
                            s = (() => {
                                let t;
                                return () => (t || (t = (() => {
                                    let t = !1,
                                        i = !1;
                                    return {
                                        seed: async n => {
                                            n ? i || (console.warn(`[Phoenix Core] Running in alternate environment mode: ${n}`), i = !0, t = await (async t => {
                                                var i, n;
                                                if (!r.includes(t)) return {};
                                                const o = await a("https://www.cbc.ca/aggregate_api/v1/key-values?key=phoenix.config");
                                                if (o.status === e.ERROR) {
                                                    const e = o.response;
                                                    return console.warn(`[Phoenix] Attempting to fetch settings for env: ${t} failed:`, e.message), {}
                                                }
                                                const s = o.response;
                                                return (null === (i = s.value) || void 0 === i ? void 0 : i.env) ? null === (n = s.value) || void 0 === n ? void 0 : n.env[t] : {}
                                            })(n)) : t = {}
                                        },
                                        get: e => {
                                            if ("boolean" != typeof t && 0 !== Object.keys(t).length) {
                                                const i = t[e] || !1;
                                                return console.warn(`[Phoenix Core] Environment setting using ${i} for ${e}`), i
                                            }
                                            return !1
                                        }
                                    }
                                })()), t)
                            })(),
                            l = "CBC",
                            d = (() => {
                                let e;
                                return t => (e || (e = (e => {
                                    const t = () => {
                                            var e;
                                            return "undefined" != typeof process && !!(null === (e = null === process || void 0 === process ? void 0 : process.env) || void 0 === e ? void 0 : e.PHOENIX_JEST_TEST)
                                        },
                                        i = e => {
                                            var t;
                                            return `[Phoenix ${null!==(t=e.caller)&&void 0!==t?t:"Core"}] ${e.name} -> ${e.message}`
                                        };
                                    let n = e || !1;
                                    return {
                                        debug: e => {
                                            t() || (window.wppPhoenixCoreDebug || n) && console.log(i(e))
                                        },
                                        error: e => {
                                            if (t()) return;
                                            const a = (e => !1 === e.critical)(e);
                                            (!a || window.wppPhoenixCoreDebug || n) && (a ? console.warn(i(e)) : console.error(i(e)))
                                        },
                                        setVerbose: e => {
                                            n = e
                                        }
                                    }
                                })(t)), void 0 !== t && e.setVerbose(t), e)
                            })(),
                            c = new Map([
                                ["flv", "video/x-flv"],
                                ["mp4", "video/mp4"],
                                ["m3u8", "application/x-mpegURL"],
                                ["ts", "video/MP2T"],
                                ["3gp", "video/3gpp"],
                                ["mov", "video/quicktime"],
                                ["avi", "video/x-msvideo"],
                                ["wmv", "video/x-ms-wmv"],
                                ["webm", "video/webm"],
                                ["mp3", "audio/mpeg"],
                                ["wav", "audio/vnd.wav"],
                                ["ogg", "audio/ogg"],
                                ["mid", "audio/mid"],
                                ["aif", "audio/x-aiff"]
                            ]),
                            p = {
                                CRITICAL_ERROR: "CRITICAL_ERROR",
                                BUFFER_UPDATED: "BUFFER_UPDATED",
                                LIVE_SYNC_POSITION_CHANGE: "LIVE_SYNC_POSITION_CHANGE",
                                MEDIA_ASPECT_RATIO_AVAILABLE: "MEDIA_ASPECT_RATIO_AVAILABLE",
                                STATUS_CHANGE: "STATUS_CHANGE",
                                ASSET_LOADED: "ASSET_LOADED",
                                PLAYBACK_INITIALPLAY: "PLAYBACK_INITIALPLAY",
                                PLAYBACK_TIMEUPDATED: "PLAYBACK_TIMEUPDATED",
                                PLAYBACK_THROTTLED_TIMEUPDATED: "PLAYBACK_THROTTLED_TIMEUPDATED",
                                PLAYBACK_PLAYBACKSPEEDCHANGE: "PLAYBACK_PLAYBACKSPEEDCHANGE",
                                PLAYBACK_SEEKING: "PLAYBACK_SEEKING",
                                PLAYBACK_SEEKED: "PLAYBACK_SEEKED",
                                PLAYBACK_VOLUMECHANGE: "PLAYBACK_VOLUMECHANGE",
                                PLAYBACK_MUTEDCHANGE: "PLAYBACK_MUTEDCHANGE",
                                AD_ERRORED: "AD_ERRORED",
                                AD_LOADED: "AD_LOADED",
                                AD_STARTED: "AD_STARTED",
                                AD_COMPLETED: "AD_COMPLETED",
                                AD_BREAK_STARTED: "AD_BREAK_STARTED",
                                AD_BREAK_COMPLETED: "AD_BREAK_COMPLETED",
                                AD_REMAINING_TIME_UPDATED: "AD_REMAINING_TIME_UPDATED",
                                AD_FIRST_QUARTILE: "AD_FIRST_QUARTILE",
                                AD_MIDPOINT: "AD_MIDPOINT",
                                AD_THIRD_QUARTILE: "AD_THIRD_QUARTILE",
                                AD_SKIPPED: "AD_SKIPPED",
                                TEXTTRACK_AVAILABILITY_CHANGE: "TEXTTRACK_AVAILABILITY_CHANGE",
                                TEXTTRACK_ENABLED: "TEXTTRACK_ENABLED",
                                TEXTTRACK_DISABLED: "TEXTTRACK_DISABLED",
                                AUDIOTRACK_AVAILABILITY_CHANGE: "AUDIOTRACK_AVAILABILITY_CHANGE",
                                HLSJS_PARSE_FRAG_METADATA: "HLSJS_PARSE_FRAG_METADATA",
                                CHAPTER_START: "CHAPTER_START",
                                CHAPTER_COMPLETE: "CHAPTER_COMPLETE",
                                UPCOMING_LIVE_UPDATE: "UPCOMING_LIVE_UPDATE",
                                RECOMMENDATIONS_AVAILABLE: "RECOMMENDATIONS_AVAILABLE"
                            },
                            u = {
                                READY: "READY",
                                LOADING: "LOADING",
                                ERROR: "ERROR",
                                PLAYING: "PLAYING",
                                ADVERTISING: "ADVERTISING",
                                ADVERTISING_PAUSED: "ADVERTISING_PAUSED",
                                PAUSED: "PAUSED",
                                ENDED: "ENDED"
                            },
                            h = {
                                CLIENTSIDE: "CLIENTSIDE",
                                DYNAMIC: "DYNAMIC"
                            },
                            m = "[data-name='phoenix-playback-element']",
                            v = "3.23.1",
                            {
                                ll: b,
                                XQ: g,
                                R1: x,
                                Vu: A
                            } = t;
                        var y;
                        ! function(e) {
                            e.subtitles = "subtitles", e.captions = "captions", e.descriptions = "descriptions", e.chapters = "chapters", e.metadata = "metadata"
                        }(y || (y = {}));
                        const f = new Map([
                                ["PLAYER_INJECTION_ERROR", {
                                    name: "PLAYER_INJECTION_ERROR",
                                    message: "The container selector supplied is not accessible",
                                    critical: !0
                                }],
                                ["HLS_JS_NOT_SUPPORTED", {
                                    name: "HLS_JS_NOT_SUPPORTED",
                                    message: "HlsJS library is not supported",
                                    critical: !0
                                }],
                                ["HLS_JS_LOAD_FAILED", {
                                    name: "HLS_JS_LOAD_FAILED",
                                    message: "Failed to load HLSJS library",
                                    critical: !0
                                }],
                                ["HLS_JS_NETWORK_ERROR", {
                                    name: "HLS_JS_NETWORK_ERROR",
                                    message: "A network timeout has prevented us from playing this media",
                                    critical: !0
                                }],
                                ["HLS_JS_MEDIA_ERROR", {
                                    name: "HLS_JS_MEDIA_ERROR",
                                    message: "We are unable to continute playing this media",
                                    critical: !0
                                }],
                                ["HLS_JS_DEFAULT_ERROR", {
                                    name: "HLS_JS_DEFAULT_ERROR",
                                    message: "Technical problems prevent us from playing this media",
                                    critical: !1
                                }],
                                ["TIMEOUT_ERROR", {
                                    name: "TIMEOUT_ERROR",
                                    message: "A media timeout has prevented us from playing this media",
                                    critical: !0
                                }],
                                ["NATIVE_MEDIA_ERROR", {
                                    name: "NATIVE_MEDIA_ERROR",
                                    message: "Unable to load asset natively: ",
                                    critical: !0
                                }],
                                ["NO_COMPATIBLE_SOURCES", {
                                    name: "NO_COMPATIBLE_SOURCES",
                                    message: "None of the given sources can be played",
                                    critical: !0
                                }],
                                ["NO_MEDIA_TO_PLAY", {
                                    name: "NO_MEDIA_TO_PLAY",
                                    message: "Can not play, media was not supplied",
                                    critical: !0
                                }],
                                ["AUTOPLAY_UNSUPPORTED", {
                                    name: "AUTOPLAY_UNSUPPORTED",
                                    message: "Can not autoplay the media",
                                    critical: !1
                                }],
                                ["PLAYER_CONFIG_ERROR", {
                                    name: "PLAYER_CONFIG_ERROR",
                                    message: "Player config requires valid container node",
                                    critical: !0
                                }],
                                ["PLAYER_MEDIA_ERROR_KEY", {
                                    name: "PLAYER_MEDIA_ERROR_KEY",
                                    message: "Player media requires valid key",
                                    critical: !0
                                }],
                                ["PLAYER_MEDIA_ERROR_LOADER", {
                                    name: "PLAYER_MEDIA_ERROR_LOADER",
                                    message: "Player media requires loader to be a function",
                                    critical: !0
                                }],
                                ["PLAYER_MEDIA_ERROR_FORMAT", {
                                    name: "PLAYER_MEDIA_ERROR_FORMAT",
                                    message: "Player media requires a valid format",
                                    critical: !0
                                }],
                                ["PLAYER_MEDIA_ERROR_ASSETPARSERS", {
                                    name: "PLAYER_MEDIA_ERROR_ASSETPARSERS",
                                    message: "Player media 'asset parsers' are required",
                                    critical: !0
                                }]
                            ]),
                            E = "DAIAdsManager",
                            I = async (e, t, i) => {
                                if (null == t ? void 0 : t()) return !0;
                                let n;
                                try {
                                    await w(e, i), n = !0
                                } catch {
                                    n = !1
                                }
                                return n
                            },
                            w = (e, t) => {
                                var i;
                                let n, a = !1;
                                const o = window.document.querySelector(`script[src='${e}']`);
                                o ? (n = o, a = !0) : (n = window.document.createElement("script"), n.setAttribute("type", null !== (i = null == t ? void 0 : t.type) && void 0 !== i ? i : "text/javascript"), n.setAttribute("src", e));
                                const r = new Promise(((e, t) => {
                                    const i = () => {
                                        e()
                                    };
                                    n.addEventListener("load", i), n.addEventListener("error", (() => {
                                        n.removeEventListener("load", i), window.document.getElementsByTagName("head")[0].removeChild(n), t()
                                    }))
                                }));
                                return a || window.document.getElementsByTagName("head")[0].appendChild(n), r
                            },
                            k = new Map([
                                ["hls", "application/x-mpegURL"],
                                ["dash", "application/dash+xml"]
                            ]);
                        var T = i(936);
                        const C = async (e, t, i, n) => {
                                const a = `MacAug ${n}() call took too long!`;
                                return Promise.race([e(t), new Promise(((e, t) => {
                                    setTimeout((() => t(a)), i)
                                }))])
                            },
                            S = () => {
                                var e, t, i, n;
                                return "function" == typeof(null === (n = null === (i = null === (t = null === (e = window.google) || void 0 === e ? void 0 : e.ima) || void 0 === t ? void 0 : t.dai) || void 0 === i ? void 0 : i.api) || void 0 === n ? void 0 : n.StreamManager)
                            },
                            P = "DAILoader",
                            D = new Map([
                                ["simple", async e => ({
                                    asset: await (async e => ({
                                        uri: e,
                                        mimeType: L(e)
                                    }))(e.key)
                                })],
                                ["platform-dai", async (e, t) => {
                                    let i, n, a = null;
                                    const o = d(),
                                        r = await (async (e, t) => {
                                            var r, s, c, p;
                                            if (!t) return null;
                                            try {
                                                const u = e => {
                                                    const t = [h.StreamEvent.Type.LOADED, h.StreamEvent.Type.ERROR],
                                                        n = a => {
                                                            var r;
                                                            const s = h.StreamEvent.Type;
                                                            let d = "";
                                                            switch (a.type) {
                                                                case s.LOADED:
                                                                    i.removeEventListener(t, n), o.debug({
                                                                        caller: l,
                                                                        name: P,
                                                                        message: "Successfully loaded DAI asset"
                                                                    }), e((e => {
                                                                        var t, i;
                                                                        const n = e.getStreamData(),
                                                                            a = null !== (i = null !== (t = k.get(n.manifestFormat.toLowerCase())) && void 0 !== t ? t : L(n.url)) && void 0 !== i ? i : "";
                                                                        return {
                                                                            uri: n.url,
                                                                            mimeType: a
                                                                        }
                                                                    })(a));
                                                                    break;
                                                                case s.ERROR:
                                                                    i.removeEventListener(t, n), d = null !== (r = a.getStreamData().errorMessage) && void 0 !== r ? r : "Unknown error", o.error({
                                                                        caller: l,
                                                                        name: P,
                                                                        message: `Failed to load DAI asset ${d}`,
                                                                        critical: !1
                                                                    }), e(null)
                                                            }
                                                        };
                                                    i.addEventListener(t, n)
                                                };
                                                if (!await I("//imasdk.googleapis.com/js/sdkloader/ima3_dai.js", S)) throw new Error("Failed to load IMA SDK");
                                                o.debug({
                                                    caller: l,
                                                    name: P,
                                                    message: "DAI SDK loaded successfully"
                                                });
                                                const h = (null === (s = null === (r = null === window || void 0 === window ? void 0 : window.google) || void 0 === r ? void 0 : r.ima) || void 0 === s ? void 0 : s.dai).api,
                                                    v = t.coreContainerElement.querySelector(m);
                                                a = t.coreContainerElement.firstChild, i = new h.StreamManager(v, a);
                                                const A = new Promise(u);
                                                n = ((e, t) => {
                                                    var i, n, a, o;
                                                    const r = e => {
                                                            B.style.zIndex = e ? "1" : "-1"
                                                        },
                                                        s = () => {
                                                            e.statusManager.dispatchNewStatus(g.ADVERTISING_PAUSED, {
                                                                adType: x.DYNAMIC
                                                            })
                                                        },
                                                        c = () => {
                                                            e.statusManager.dispatchNewStatus(g.ADVERTISING, {
                                                                adType: x.DYNAMIC
                                                            })
                                                        },
                                                        p = t => {
                                                            const i = t ? "addEventListener" : "removeEventListener";
                                                            O[i](M.ERROR, A), O[i](M.STARTED, y), O[i](M.FIRST_QUARTILE, T), O[i](M.MIDPOINT, C), O[i](M.THIRD_QUARTILE, S), O[i](M.COMPLETE, f), O[i](M.AD_BREAK_STARTED, I), O[i](M.AD_BREAK_ENDED, w), O[i](M.AD_PROGRESS, k), O[i](M.SKIPPED, P), O[i](M.PAUSED, s), O[i](M.RESUMED, c), e.eventDispatcher[i](b.HLSJS_PARSE_FRAG_METADATA, u)
                                                        },
                                                        u = e => {
                                                            e.samples.forEach((e => {
                                                                t.processMetadata("ID3", e.data, e.pts)
                                                            }))
                                                        },
                                                        h = e => {
                                                            const t = e.track;
                                                            "metadata" === (null == t ? void 0 : t.kind) && (U.debug({
                                                                caller: l,
                                                                name: E,
                                                                message: "Metadata track is added"
                                                            }), t.mode = "hidden", t.addEventListener("cuechange", v))
                                                        },
                                                        v = e => {
                                                            const t = e.target;
                                                            if (null == t ? void 0 : t.activeCues)
                                                                for (const i of t.activeCues) {
                                                                    U.debug({
                                                                        caller: l,
                                                                        name: E,
                                                                        message: "Track cues are being parsed"
                                                                    });
                                                                    const e = i.value;
                                                                    (null == e ? void 0 : e.key) && (null == O || O.onTimedMetadata({
                                                                        [e.key]: e.data
                                                                    }))
                                                                }
                                                        },
                                                        A = e => {
                                                            U.error({
                                                                caller: l,
                                                                name: E,
                                                                message: "DAI Ad error",
                                                                critical: !1
                                                            }), R(b.AD_ERRORED, e)
                                                        },
                                                        y = e => {
                                                            var t, i, n, a, o, r, s;
                                                            const d = null === (t = e.getAd) || void 0 === t ? void 0 : t.call(e);
                                                            if (!d) return void U.error({
                                                                name: E,
                                                                message: `Unable to track in-stream Ad! The DAI SDK fired a ${e.type} event with no associated Ad.`,
                                                                critical: !1
                                                            });
                                                            const c = null === (i = d.getAdPodInfo) || void 0 === i ? void 0 : i.call(d),
                                                                p = null === (n = d.getAdId) || void 0 === n ? void 0 : n.call(d),
                                                                u = null === (a = d.getDuration) || void 0 === a ? void 0 : a.call(d),
                                                                h = null === (o = d.getTitle) || void 0 === o ? void 0 : o.call(d),
                                                                m = null === (r = null == c ? void 0 : c.getAdPosition) || void 0 === r ? void 0 : r.call(c),
                                                                v = null === (s = null == c ? void 0 : c.getTotalAds) || void 0 === s ? void 0 : s.call(c);
                                                            U.debug({
                                                                caller: l,
                                                                name: E,
                                                                message: `onAdStarted: ${m} of ${v}`
                                                            }), R(b.AD_LOADED, d), R(b.AD_STARTED, {
                                                                id: p,
                                                                duration: u,
                                                                title: h,
                                                                position: m,
                                                                totalAds: v,
                                                                isAudio: !1
                                                            })
                                                        },
                                                        f = e => {
                                                            var t;
                                                            U.debug({
                                                                caller: l,
                                                                name: E,
                                                                message: "DAI ad completed"
                                                            });
                                                            const i = e.getAd();
                                                            R(b.AD_COMPLETED, null === (t = null == i ? void 0 : i.getAdId) || void 0 === t ? void 0 : t.call(i)), _ = null
                                                        },
                                                        I = () => {
                                                            r(!0), U.debug({
                                                                caller: l,
                                                                name: E,
                                                                message: "DAI ad break started"
                                                            }), e.statusManager.dispatchNewStatus(g.ADVERTISING, {
                                                                adType: x.DYNAMIC
                                                            }), R(b.AD_BREAK_STARTED)
                                                        },
                                                        w = () => {
                                                            r(!1), U.debug({
                                                                caller: l,
                                                                name: E,
                                                                message: "DAI ad break ended"
                                                            }), _ = null, N && clearTimeout(N), N = null, R(b.AD_BREAK_COMPLETED), e.statusManager.dispatchNewStatus(g.PLAYING)
                                                        },
                                                        k = e => {
                                                            const t = e.getStreamData().adProgressData,
                                                                i = t.adBreakDuration,
                                                                n = t.duration,
                                                                a = t.currentTime;
                                                            R(b.AD_REMAINING_TIME_UPDATED, n - a), i !== $ && ($ = i, D()), _ = t
                                                        },
                                                        T = () => {
                                                            R(b.AD_FIRST_QUARTILE)
                                                        },
                                                        C = () => {
                                                            R(b.AD_MIDPOINT)
                                                        },
                                                        S = () => {
                                                            R(b.AD_THIRD_QUARTILE)
                                                        },
                                                        P = () => {
                                                            R(b.AD_SKIPPED)
                                                        },
                                                        D = () => {
                                                            const e = 1e3 * Math.ceil($);
                                                            N && clearTimeout(N), N = null, _ && (N = setTimeout(L, e))
                                                        },
                                                        L = () => {
                                                            U.debug({
                                                                caller: l,
                                                                name: E,
                                                                message: "DAI ad break ended, determined by ad progress data"
                                                            }), N && clearTimeout(N), N = null, w()
                                                        },
                                                        {
                                                            dispatchEvent: R
                                                        } = e.eventDispatcher,
                                                        M = (null === (n = null === (i = null === window || void 0 === window ? void 0 : window.google) || void 0 === i ? void 0 : i.ima) || void 0 === n ? void 0 : n.dai).api.StreamEvent.Type,
                                                        O = t;
                                                    let _, $, N;
                                                    const U = d(),
                                                        z = null === (a = e.coreContainerElement) || void 0 === a ? void 0 : a.querySelector(m),
                                                        B = null === (o = e.coreContainerElement) || void 0 === o ? void 0 : o.firstChild;
                                                    return p(!0), (null == z ? void 0 : z.textTracks) && z.textTracks.addEventListener("addtrack", h), {
                                                        destroy: () => {
                                                            if (p(!1), r(!1), null == z ? void 0 : z.textTracks) {
                                                                z.textTracks.removeEventListener("addtrack", h);
                                                                for (const e of z.textTracks) "metadata" === e.kind && e.removeEventListener("cuechange", v)
                                                            }
                                                        }
                                                    }
                                                })(t, i);
                                                const y = null !== (p = null === (c = t.sourceData) || void 0 === c ? void 0 : c.adOrder) && void 0 !== p ? p : "",
                                                    f = await (async e => {
                                                        var t;
                                                        let i;
                                                        try {
                                                            i = await (async e => C(T.getDaiParams, e, 1e3, "getDaiParams"))(e)
                                                        } catch (e) {
                                                            const i = null !== (t = e.message) && void 0 !== t ? t : e;
                                                            o.error({
                                                                caller: l,
                                                                name: P,
                                                                message: `Error getting adTagParameters: ${i}`,
                                                                critical: !1
                                                            })
                                                        }
                                                        return null != i ? i : null
                                                    })(y),
                                                    w = new h.LiveStreamRequest;
                                                return w.assetKey = e, w.apiKey = "90309C33A86C10147DC061BA9283D5AA9A285B6666AA7915960BE745B99A9D21", f && (w.adTagParameters = f), i.requestStream(w), A
                                            } catch (e) {
                                                return o.error({
                                                    caller: l,
                                                    name: P,
                                                    message: `Error happened loading DAI ${e}`,
                                                    critical: !0
                                                }), null
                                            }
                                        })(e.key, t);
                                    return {
                                        asset: r,
                                        destroy: () => {
                                            for (null == i || i.reset(), null == n || n.destroy(); null == a ? void 0 : a.firstChild;) a.firstChild.remove()
                                        }
                                    }
                                }],
                                ["medianet", async t => {
                                    const i = await (async t => {
                                        var i, n, o;
                                        let r;
                                        (null === (i = null == t ? void 0 : t.options) || void 0 === i ? void 0 : i.token) && (r = {
                                            headers: {
                                                "x-claims-token": t.options.token
                                            }
                                        });
                                        const s = await a(t.key, r);
                                        if (s.status === e.ERROR) return null;
                                        const l = s.response;
                                        if (!l.url || 0 !== l.errorCode) return null;
                                        const d = null === (n = l.params) || void 0 === n ? void 0 : n.find((e => "contentType" === e.name));
                                        return {
                                            uri: l.url,
                                            mimeType: null !== (o = null == d ? void 0 : d.value) && void 0 !== o ? o : "vnd.apple.mpegurl"
                                        }
                                    })(t);
                                    return {
                                        asset: i
                                    }
                                }]
                            ]),
                            L = e => {
                                var t, i;
                                const n = null === (i = null === (t = null == e ? void 0 : e.split("?").shift()) || void 0 === t ? void 0 : t.split("/").pop()) || void 0 === i ? void 0 : i.split(".").pop();
                                return R(n)
                            },
                            R = e => {
                                var t;
                                return e && null !== (t = c.get(e.toLowerCase())) && void 0 !== t ? t : ""
                            },
                            M = e => {
                                if (!(null == e ? void 0 : e.key)) throw f.get("PLAYER_MEDIA_ERROR_KEY");
                                if (void 0 !== e.loader && "function" != typeof e.loader) throw f.get("PLAYER_MEDIA_ERROR_LOADER")
                            },
                            O = e => {
                                if (!(null == e ? void 0 : e.format) || (t = e.format, !["audio", "video"].includes(null === (i = null == t ? void 0 : t.toLowerCase) || void 0 === i ? void 0 : i.call(t)))) return f.get("PLAYER_MEDIA_ERROR_FORMAT");
                                var t, i;
                                if (!Array.isArray(e.assetParsers)) return f.get("PLAYER_MEDIA_ERROR_ASSETPARSERS");
                                if (0 === e.assetParsers.length) return f.get("PLAYER_MEDIA_ERROR_ASSETPARSERS");
                                try {
                                    e.assetParsers.forEach(M)
                                } catch (e) {
                                    return e
                                }
                            },
                            _ = new Map([
                                ["CLIENTSIDE_IMA_SDK_UNAVAILABLE", {
                                    name: "CLIENTSIDE_IMA_SDK_UNAVAILABLE",
                                    message: "Global IMA SDK is not available",
                                    critical: !1
                                }]
                            ]),
                            $ = {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: "0",
                                left: "0",
                                "z-index": "-1"
                            },
                            N = "ClientSideAdManager",
                            U = (e, t) => {
                                const i = e => {
                                        W.style.zIndex = e ? "1" : "-1"
                                    },
                                    n = () => {
                                        if (ie && Z)
                                            for (O.debug({
                                                    name: N,
                                                    message: "Destroy"
                                                }), i(!1), I(!1), q = null, null == Y || Y.removeEventListener(B.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, w), null == Y || Y.removeEventListener(B.AdErrorEvent.Type.AD_ERROR, S), Q.removeEventListener("ended", L, !1), Q.removeEventListener("playing", k, !1), null == Y || Y.destroy(), null == K || K.destroy(), null == H || H.destroy(), clearInterval(j), X = !1, J = !1, ee = !0, Z = !1, ne = !1, ae = !1, F && F !== u.ENDED && (e.statusManager.dispatchNewStatus(u.PLAYING), Q.play()), F = null; null == W ? void 0 : W.firstChild;) W.firstChild.remove()
                                    },
                                    a = e => {
                                        null == K || K.setVolume(.667 * e)
                                    },
                                    o = () => {
                                        M(p.AD_REMAINING_TIME_UPDATED, (null == K ? void 0 : K.getRemainingTime()) || -1)
                                    },
                                    r = e => {
                                        const t = e.getAd();
                                        M(p.AD_LOADED, t)
                                    },
                                    s = e => {
                                        var t, i, n, r, s, l, d;
                                        const c = null === (t = e.getAd) || void 0 === t ? void 0 : t.call(e);
                                        if (!c) return void O.error({
                                            name: N,
                                            message: `Unable to play Ad! The IMA SDK fired a ${e.type} event with no associated Ad.`,
                                            critical: !1
                                        });
                                        const u = null === (i = c.getAdPodInfo) || void 0 === i ? void 0 : i.call(c),
                                            h = null === (n = c.getAdId) || void 0 === n ? void 0 : n.call(c),
                                            m = null === (r = c.getDuration) || void 0 === r ? void 0 : r.call(c),
                                            v = null === (s = c.getTitle) || void 0 === s ? void 0 : s.call(c),
                                            b = null === (l = null == u ? void 0 : u.getAdPosition) || void 0 === l ? void 0 : l.call(u),
                                            g = null === (d = null == u ? void 0 : u.getTotalAds) || void 0 === d ? void 0 : d.call(u);
                                        O.debug({
                                            name: N,
                                            message: `onAdStarted ${b} of ${g}`
                                        }), X = !0;
                                        let x = !1;
                                        try {
                                            x = c.getContentType().indexOf("audio") > -1
                                        } catch {}
                                        Q.muted ? a(0) : a(Q.volume), j = setInterval(o, 500), ee = !1, M(p.AD_STARTED, {
                                            id: h,
                                            duration: m,
                                            title: v,
                                            position: b,
                                            totalAds: g,
                                            isAudio: x
                                        })
                                    },
                                    l = t => {
                                        var i;
                                        const n = t.getAd();
                                        q = null, M(p.AD_COMPLETED, null === (i = null == n ? void 0 : n.getAdId) || void 0 === i ? void 0 : i.call(n)), clearInterval(j), e.statusManager.getStatus().to === u.ADVERTISING_PAUSED && y()
                                    },
                                    c = t => {
                                        M(p.AD_BREAK_COMPLETED), J = !1, X = !1, F = null, i(!1), (e => {
                                            let t = null;
                                            try {
                                                t = e.getAd().getAdPodInfo().getPodIndex()
                                            } catch (e) {
                                                O.error({
                                                    name: N,
                                                    message: `IMA unable to get pod index: ${e}`,
                                                    critical: !1
                                                })
                                            }
                                            return -1 === t
                                        })(t) ? e.statusManager.dispatchNewStatus(u.ENDED) : (e.statusManager.dispatchNewStatus(u.PLAYING), Q.play())
                                    },
                                    m = t => {
                                        var n, a, o, r, s;
                                        J = !0, F = e.statusManager.getStatus().to, e.statusManager.dispatchNewStatus(u.ADVERTISING, {
                                            adType: h.CLIENTSIDE
                                        });
                                        const l = null === (s = null === (o = null === (n = null == t ? void 0 : t.getAd) || void 0 === n ? void 0 : (a = n.call(t)).getAdPodInfo) || void 0 === o ? void 0 : (r = o.call(a)).getPodIndex) || void 0 === s ? void 0 : s.call(r);
                                        M(p.AD_BREAK_STARTED, l), Q.pause(), i(!0)
                                    },
                                    v = () => {
                                        M(p.AD_FIRST_QUARTILE)
                                    },
                                    b = () => {
                                        M(p.AD_MIDPOINT)
                                    },
                                    g = () => {
                                        M(p.AD_THIRD_QUARTILE)
                                    },
                                    x = () => {
                                        M(p.AD_SKIPPED)
                                    },
                                    A = () => {
                                        q = null, e.statusManager.dispatchNewStatus(u.ADVERTISING_PAUSED, {
                                            adType: h.CLIENTSIDE
                                        })
                                    },
                                    y = () => {
                                        e.statusManager.dispatchNewStatus(u.ADVERTISING, {
                                            adType: h.CLIENTSIDE
                                        })
                                    },
                                    f = () => {
                                        ee = !0
                                    },
                                    E = e => {
                                        const t = e.getAdData() || {},
                                            i = Date.now();
                                        q && t.currentTime === q.currentTime ? i - q.timestamp > 6e3 && P("Ad Playback Staled") : q = { ...t,
                                            timestamp: i
                                        }
                                    },
                                    I = e => {
                                        if (!K) return;
                                        const t = e ? "addEventListener" : "removeEventListener";
                                        K[t](z.LOADED, r), K[t](z.STARTED, s), K[t](z.COMPLETE, l), K[t](z.CONTENT_PAUSE_REQUESTED, m), K[t](z.CONTENT_RESUME_REQUESTED, c), K[t](z.FIRST_QUARTILE, v), K[t](z.MIDPOINT, b), K[t](z.THIRD_QUARTILE, g), K[t](z.SKIPPED, x), K[t](z.PAUSED, A), K[t](z.RESUMED, y), K[t](z.ALL_ADS_COMPLETED, f), K[t](z.AD_PROGRESS, E), K[t](B.AdErrorEvent.Type.AD_ERROR, S)
                                    },
                                    w = t => {
                                        O.debug({
                                            name: N,
                                            message: "onAdsManagerLoaded"
                                        }), K && K.destroy(), K = t.getAdsManager(Q, G), Q.muted && a(0), I(!0), ne = !1, e.statusManager.getStatus(), ae && k()
                                    },
                                    k = () => {
                                        if (Z)
                                            if (ne) ae = !0;
                                            else {
                                                O.debug({
                                                    name: N,
                                                    message: "playAds called"
                                                }), ae = !1;
                                                try {
                                                    const {
                                                        width: t,
                                                        height: i
                                                    } = e.sizeManager.getPlayerDimensions();
                                                    K.init(t, i, B.ViewMode.NORMAL), K.start()
                                                } catch (e) {
                                                    P(`IMA ad failed to initialize: ${e.message}`)
                                                }
                                            }
                                    },
                                    S = e => {
                                        let t;
                                        try {
                                            t = e.getError().toString()
                                        } catch {
                                            t = "Unable to parse error message from getError()"
                                        }
                                        P(`Error loading IMA ad: ${t}`)
                                    },
                                    P = e => {
                                        O.error({
                                            name: N,
                                            message: e,
                                            critical: !1
                                        }), M(p.AD_ERRORED), n()
                                    },
                                    D = (t, i) => {
                                        var n;
                                        const a = i ? B.ViewMode.FULLSCREEN : B.ViewMode.NORMAL;
                                        null == K || K.resize(t.width, t.height, a), X || "video" !== (null === (n = e.sourceData) || void 0 === n ? void 0 : n.format) || (J = !1)
                                    },
                                    L = () => {
                                        O.debug({
                                            name: N,
                                            message: "contentComplete"
                                        }), null == Y || Y.contentComplete()
                                    },
                                    R = () => {
                                        var t;
                                        if (ie && !(null === (t = e.sourceData) || void 0 === t ? void 0 : t.isDAI) && (Z && n(), !e.config.imaSdkInactive)) {
                                            O.debug({
                                                name: N,
                                                message: "init"
                                            });
                                            try {
                                                if (!(() => {
                                                        var e;
                                                        return "string" == typeof(null === (e = window.google) || void 0 === e ? void 0 : e.ima.VERSION)
                                                    })()) throw ie = !1, e.coreContainerElement.removeChild(W), _.get("CLIENTSIDE_IMA_SDK_UNAVAILABLE");
                                                (() => {
                                                    var e;
                                                    (null == B ? void 0 : B.AdsLoader) || (B = null === (e = window.google) || void 0 === e ? void 0 : e.ima, z = B.AdEvent.Type, B.settings.setDisableCustomPlaybackForIOS10Plus(!0), G = new B.AdsRenderingSettings, G.restoreCustomPlaybackStateOnAdBreakComplete = !0, G.enablePreloading = !0)
                                                })(), H = new B.AdDisplayContainer(W, U), Y = new B.AdsLoader(H), Y.addEventListener(B.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, w, !1), Y.addEventListener(B.AdErrorEvent.Type.AD_ERROR, S, !1), H.initialize(), Z = !0
                                            } catch (e) {
                                                P(`Error loading/initializing IMA: ${null==e?void 0:e.message}`)
                                            }
                                        }
                                    },
                                    {
                                        dispatchEvent: M
                                    } = e.eventDispatcher,
                                    O = d(),
                                    U = t.get("video");
                                let z, B, F, V, H, Y, K, G, j, W, q, Q = U,
                                    J = !1,
                                    X = !1,
                                    Z = !1,
                                    ee = !0,
                                    te = !1,
                                    ie = !0,
                                    ne = !1,
                                    ae = !1;
                                return W = document.createElement("div"), W.className = "phoenix-advertisement", Object.assign(W.style, $), e.coreContainerElement.insertBefore(W, e.coreContainerElement.firstChild), {
                                    isAdActive: () => J,
                                    allAdsComplete: () => ee,
                                    init: R,
                                    requestAds: async () => {
                                        var i;
                                        if (!ie || !e.sourceData || e.config.imaSdkInactive) return;
                                        if (V = "audio" !== e.sourceData.format || e.sourceData.isLive ? e.sourceData.adUrl ? e.sourceData.adUrl : await (async e => {
                                                var t, i, n;
                                                const a = d();
                                                let o = "";
                                                if (!(null == e ? void 0 : e.sourceId) || !(null == e ? void 0 : e.adOrder)) return a.error({
                                                    caller: "Utils",
                                                    name: "AdUrlGenerator",
                                                    message: "Required mediaData not supplied",
                                                    critical: !1
                                                }), o;
                                                if (e.isDAI) return a.error({
                                                    caller: "Utils",
                                                    name: "AdUrlGenerator",
                                                    message: "Primary asset is DAI",
                                                    critical: !1
                                                }), o;
                                                const r = {
                                                    metadata: {
                                                        id: null !== (t = e.mediaNetId) && void 0 !== t ? t : e.sourceId,
                                                        adOrder: e.adOrder,
                                                        adCategoryExclusion: e.adCategoryExclusion,
                                                        format: null !== (i = e.format) && void 0 !== i ? i : "video",
                                                        isLive: !!e.isLive
                                                    }
                                                };
                                                try {
                                                    o = await (async e => C(T.getAdUrl, e, 1e3, "getAdUrl"))(r)
                                                } catch (e) {
                                                    const t = null !== (n = e.message) && void 0 !== n ? n : e;
                                                    a.error({
                                                        caller: "Utils",
                                                        name: "AdUrlGenerator",
                                                        message: `Error getting Ad url: ${t}`,
                                                        critical: !1
                                                    })
                                                }
                                                return a.debug({
                                                    caller: "Utils",
                                                    name: "AdUrlGenerator",
                                                    message: `AUG returned: ${o}`
                                                }), null != o ? o : ""
                                            })(e.sourceData) : "", !V) return O.debug({
                                            name: N,
                                            message: "requestAds: Missing adUrl"
                                        }), void n();
                                        (() => {
                                            var i;
                                            if (!(null === (i = e.sourceData) || void 0 === i ? void 0 : i.format)) return;
                                            const n = t.get(e.sourceData.format);
                                            Q !== n && (Q = n)
                                        })(), Z || R(), O.debug({
                                            name: N,
                                            message: "Sending Ads request"
                                        });
                                        let a = !1,
                                            o = !!Q.muted;
                                        te && (a = !!e.config.isAutoplayAllowed, o = !!e.config.autoplayRequiresMuted, te = !1), e.sizeManager.subscribe(D);
                                        try {
                                            const e = new B.AdsRequest;
                                            e.setAdWillAutoPlay(a), e.setAdWillPlayMuted(o), e.adTagUrl = V, e.linearAdSlotWidth = 640, e.linearAdSlotHeight = 400, null === (i = null == Y ? void 0 : Y.requestAds) || void 0 === i || i.call(Y, e)
                                        } catch (e) {
                                            O.error({
                                                name: N,
                                                message: `Error requesting an Ad: ${null==e?void 0:e.message}`,
                                                critical: !1
                                            }), n()
                                        }
                                        Q.addEventListener("ended", L, {
                                            once: !0
                                        }), Q.addEventListener("playing", k, {
                                            once: !0
                                        }), ne = !0
                                    },
                                    pause: () => {
                                        X && K.pause()
                                    },
                                    resume: () => {
                                        null == K || K.resume()
                                    },
                                    setVolume: a,
                                    setAutoplayAttempt: () => {
                                        te = !0
                                    },
                                    destroy: n
                                }
                            },
                            z = "HLS",
                            B = new Map([
                                ["vnd.apple.mpegurl", z],
                                ["application/vnd.apple.mpegurl", z],
                                ["application/x-mpegurl", z]
                            ]),
                            F = (e, t) => {
                                const i = (e, i) => {
                                        const n = () => {
                                                r && clearTimeout(r), t.removeEventListener("loadedmetadata", a), t.removeEventListener("error", o)
                                            },
                                            a = () => {
                                                n(), e(null)
                                            },
                                            o = e => {
                                                n();
                                                const t = f.get("NATIVE_MEDIA_ERROR");
                                                (null == t ? void 0 : t.message) && (t.message += e.message), i(t)
                                            },
                                            r = setTimeout((() => {
                                                n();
                                                const e = f.get("TIMEOUT_ERROR");
                                                i(e)
                                            }), 2e4);
                                        t.addEventListener("loadedmetadata", a), t.addEventListener("error", o)
                                    },
                                    n = d();
                                return {
                                    loadAsset: async a => {
                                        var o, r, s, l;
                                        n.debug({
                                            name: "NativeSourceManager",
                                            message: "loadAsset call"
                                        });
                                        const d = new Promise(i);
                                        let c;
                                        c = Number.isInteger(null === (o = e.sourceData) || void 0 === o ? void 0 : o.startTime) ? null === (r = e.sourceData) || void 0 === r ? void 0 : r.startTime : (null === (s = e.sourceData) || void 0 === s ? void 0 : s.hashId) && (null === (l = e.localStorageManager.getMediaById(e.sourceData.hashId)) || void 0 === l ? void 0 : l.currentTime);
                                        const p = c ? "#t=" + c : "";
                                        return t.src = a.uri + p, d
                                    },
                                    destroy: () => {
                                        n.debug({
                                            name: "NativeSourceManager",
                                            message: "Destroy"
                                        })
                                    }
                                }
                            },
                            V = {
                                liveDurationInfinity: !0,
                                fragLoadPolicy: {
                                    default: {
                                        maxTimeToFirstByteMs: 4e3,
                                        maxLoadTimeMs: 5e3,
                                        timeoutRetry: {
                                            maxRetryDelayMs: 0
                                        },
                                        errorRetry: {
                                            maxRetryDelayMs: 4e3
                                        }
                                    }
                                },
                                playlistLoadPolicy: {
                                    default: {
                                        maxTimeToFirstByteMs: 2e3,
                                        maxLoadTimeMs: 3e3,
                                        timeoutRetry: {
                                            maxNumRetry: 1,
                                            retryDelayMs: 0,
                                            maxRetryDelayMs: 0
                                        },
                                        errorRetry: {
                                            maxNumRetry: 1,
                                            retryDelayMs: 500,
                                            maxRetryDelayMs: 2e3
                                        }
                                    }
                                },
                                manifestLoadPolicy: {
                                    default: {
                                        maxTimeToFirstByteMs: 2e3,
                                        maxLoadTimeMs: 1e4,
                                        timeoutRetry: {
                                            maxNumRetry: 2,
                                            retryDelayMs: 0,
                                            maxRetryDelayMs: 0
                                        },
                                        errorRetry: {
                                            maxNumRetry: 1,
                                            retryDelayMs: 1e3,
                                            maxRetryDelayMs: 8e3
                                        }
                                    }
                                }
                            },
                            H = () => {
                                const e = d(),
                                    t = "Hls.js";
                                return {
                                    debug: i => {
                                        e.debug({
                                            caller: t,
                                            name: "debug",
                                            message: i
                                        })
                                    },
                                    log: i => {
                                        e.debug({
                                            caller: t,
                                            name: "log",
                                            message: i
                                        })
                                    },
                                    info: i => {
                                        e.debug({
                                            caller: t,
                                            name: "info",
                                            message: i
                                        })
                                    },
                                    warn: i => {
                                        e.debug({
                                            caller: t,
                                            name: "warn",
                                            message: i
                                        })
                                    },
                                    error: i => {
                                        e.error({
                                            caller: t,
                                            name: "error",
                                            message: i,
                                            critical: !1
                                        })
                                    }
                                }
                            },
                            Y = "HlsJsManager",
                            K = (e, t) => {
                                const i = () => {
                                        m.debug({
                                            name: Y,
                                            message: "Destroy"
                                        }), u && u.isSupported() && h && (c(!1), h.destroy())
                                    },
                                    n = () => {
                                        const e = h.audioTrack;
                                        return h.audioTracks.map((t => ({ ...t,
                                            enabled: t.id === e
                                        })))
                                    },
                                    a = e => {
                                        h.audioTrack = e
                                    },
                                    o = e => {
                                        if (e.fatal) switch (e.type) {
                                            case u.ErrorTypes.NETWORK_ERROR:
                                                return h.startLoad(), f.get("HLS_JS_NETWORK_ERROR");
                                            case u.ErrorTypes.MEDIA_ERROR:
                                                return h.recoverMediaError(), f.get("HLS_JS_MEDIA_ERROR");
                                            default:
                                                return f.get("HLS_JS_DEFAULT_ERROR")
                                        }
                                    },
                                    r = (e, t) => {
                                        let r = 0;
                                        const s = () => {
                                                m.debug({
                                                    name: Y,
                                                    message: "Level loaded successfuly"
                                                }), l();
                                                const t = {
                                                    getAudioTracks: n,
                                                    enableAudioTrack: a,
                                                    events: u.Events,
                                                    on: h.on.bind(h),
                                                    off: h.off.bind(h),
                                                    startLoad: h.startLoad.bind(h),
                                                    handlePlaybackErrors: o
                                                };
                                                e(t)
                                            },
                                            l = () => {
                                                h.off(u.Events.ERROR, d), h.off(u.Events.LEVEL_LOADED, s)
                                            },
                                            d = (e, n) => {
                                                var a, o, s;
                                                n.details !== u.ErrorDetails.MANIFEST_LOAD_ERROR && n.details !== u.ErrorDetails.MANIFEST_PARSING_ERROR && n.details !== u.ErrorDetails.MANIFEST_LOAD_TIMEOUT || (m.debug({
                                                    name: Y,
                                                    message: "Manifest load error"
                                                }), l(), h.destroy(), t({
                                                    name: Y,
                                                    message: `Unable to load manifest. Error details: ${n.details}, code: ${null===(a=n.response)||void 0===a?void 0:a.code}, text: ${null===(o=n.response)||void 0===o?void 0:o.text}`,
                                                    critical: !0
                                                })), n.details === u.ErrorDetails.LEVEL_LOAD_ERROR && 404 === (null === (s = n.response) || void 0 === s ? void 0 : s.code) && (r++, n.fatal && (m.debug({
                                                    name: Y,
                                                    message: `Level load critical error after ${r} attempts.`
                                                }), l(), i(), t({
                                                    name: Y,
                                                    message: "Unable to load a valid hls level, failing asset load.",
                                                    critical: !0
                                                })))
                                            };
                                        h.on(u.Events.ERROR, d), h.on(u.Events.LEVEL_LOADED, s)
                                    },
                                    l = (t, i) => {
                                        e.eventDispatcher.dispatchEvent(p.HLSJS_PARSE_FRAG_METADATA, i)
                                    },
                                    c = e => {
                                        h[e ? "on" : "off"](u.Events.FRAG_PARSING_METADATA, l)
                                    };
                                let u, h;
                                const m = d();
                                m.debug({
                                    name: Y,
                                    message: "Initialize"
                                });
                                const v = (() => {
                                    const e = s().get("HLSJS_URL") || "https://www.cbc.ca/i/phoenix/libs/hls.js@1.5.8/hls.min.js";
                                    return I(e, (() => !!Object.getOwnPropertyDescriptor(window, "Hls")))
                                })();
                                return {
                                    loadAsset: async i => {
                                        try {
                                            return await (async () => {
                                                var t, i, n, a;
                                                const o = await v;
                                                if (!o) {
                                                    const e = f.get("HLS_JS_LOAD_FAILED");
                                                    throw m.error(e), e
                                                }
                                                if (o && !window.Hls.isSupported()) throw f.get("HLS_JS_NOT_SUPPORTED");
                                                m.debug({
                                                    name: Y,
                                                    message: "Create Hls Instance"
                                                }), u = window.Hls;
                                                const r = { ...V,
                                                    debug: !!e.config.debug && H()
                                                };
                                                return Number.isInteger(null === (t = e.sourceData) || void 0 === t ? void 0 : t.startTime) ? r.startPosition = null === (i = e.sourceData) || void 0 === i ? void 0 : i.startTime : (null === (n = e.sourceData) || void 0 === n ? void 0 : n.hashId) && (r.startPosition = null === (a = e.localStorageManager.getMediaById(e.sourceData.hashId)) || void 0 === a ? void 0 : a.currentTime), h = new u(r), null
                                            })(), m.debug({
                                                name: Y,
                                                message: `Load the received source ${i.uri}`
                                            }), c(!0), h.loadSource(i.uri), h.attachMedia(t), new Promise(r)
                                        } catch (e) {
                                            throw null == h || h.destroy(), e
                                        }
                                    },
                                    destroy: i
                                }
                            },
                            G = (e, t) => {
                                const i = d();
                                let n;
                                return {
                                    loadAsset: async a => (i.debug({
                                        name: "HlsSourceManager",
                                        message: "loadAsset call"
                                    }), n = e.initModule(K, t), n.loadAsset(a)),
                                    destroy: () => {
                                        i.debug({
                                            name: "HlsSourceManager",
                                            message: "Destroy"
                                        }), null == n || n.destroy()
                                    }
                                }
                            },
                            j = (e, t) => {
                                const i = e => ({
                                        asset: {
                                            uri: e.key,
                                            mimeType: L(e.key)
                                        }
                                    }),
                                    n = e => !o(e.mimeType) && "" !== t.canPlayType(e.mimeType),
                                    a = async t => {
                                        var n;
                                        const a = null !== (n = null == t ? void 0 : t.loader) && void 0 !== n ? n : i;
                                        m = await a(t, e);
                                        const o = m.asset;
                                        return o ? (l.debug({
                                            name: "MediaSourceManager",
                                            message: `Successfully received an asset ${o.uri}`
                                        }), o) : (l.error({
                                            name: "MediaSourceManager",
                                            message: "Failed to get an asset",
                                            critical: !1
                                        }), null)
                                    },
                                    o = e => !!/(android)/i.test(navigator.userAgent) && B.get(e.toLowerCase()) === z && (l.debug({
                                        name: "MediaSourceManager",
                                        message: "Will not attempt to play natively because current device is Android, and this is HLS media"
                                    }), !0),
                                    r = async t => {
                                        if (l.debug({
                                                name: "MediaSourceManager",
                                                message: `Attempting to load natively asset ${t.uri}`
                                            }), !0 === o(t.mimeType)) return Promise.resolve(!1);
                                        try {
                                            return await c.loadAsset(t), l.debug({
                                                name: "MediaSourceManager",
                                                message: `Successfully loaded asset ${t.uri} natively`
                                            }), e.eventDispatcher.dispatchEvent(p.ASSET_LOADED, t.uri), Promise.resolve(!0)
                                        } catch {
                                            return l.error({
                                                name: "MediaSourceManager",
                                                message: `Failed to load natively asset ${t.uri}`,
                                                critical: !1
                                            }), Promise.resolve(!1)
                                        }
                                    },
                                    s = async t => {
                                        l.debug({
                                            name: "MediaSourceManager",
                                            message: `Attempting to load asset ${t.uri} with HLS`
                                        });
                                        try {
                                            null == h || h.destroy();
                                            const i = await h.loadAsset(t);
                                            return l.debug({
                                                name: "MediaSourceManager",
                                                message: `Successfully loaded asset ${t.uri} with HLS`
                                            }), e.eventDispatcher.dispatchEvent(p.ASSET_LOADED, t.uri), i
                                        } catch {
                                            return l.error({
                                                name: "MediaSourceManager",
                                                message: `Failed to load asset ${t.uri} with HLS`,
                                                critical: !1
                                            }), Promise.resolve(null)
                                        }
                                    },
                                    l = d(),
                                    c = e.initModule(F, t),
                                    h = e.initModule(G, t);
                                let m, v = !1;
                                return {
                                    loadAssets: async () => {
                                        const t = e.sourceData;
                                        if (!(null == t ? void 0 : t.assetParsers) || 0 === (null == t ? void 0 : t.assetParsers.length)) return Promise.reject({
                                            name: "MediaSourceManager",
                                            message: "No media supplied",
                                            critical: !0
                                        });
                                        if (v) return Promise.reject({
                                            name: "MediaSourceManager",
                                            message: "Asset is currently loading",
                                            critical: !1
                                        });
                                        e.statusManager.dispatchNewStatus(u.LOADING), v = !0;
                                        for (let e = 0; e < t.assetParsers.length; e++) {
                                            const o = await a(t.assetParsers[e]);
                                            if (null == o ? void 0 : o.uri) {
                                                if (await r(o)) return v = !1, Promise.resolve(null);
                                                if (!n(o)) {
                                                    const e = await (i = o.mimeType, B.get(i.toLowerCase()) === z ? s : () => Promise.resolve(null))(o);
                                                    if (e) return v = !1, e
                                                }(null == m ? void 0 : m.destroy) && m.destroy()
                                            }
                                        }
                                        var i;
                                        return v = !1, Promise.reject(f.get("NO_COMPATIBLE_SOURCES"))
                                    },
                                    destroy: () => {
                                        c.destroy(), h.destroy(), (null == m ? void 0 : m.destroy) && m.destroy(), v = !1, t.removeAttribute("src"), t.load()
                                    }
                                }
                            },
                            W = (e, t) => function() {
                                return e.isInitialized ? t(...arguments) : t.defaultReturn
                            },
                            q = ["captions", "subtitles"],
                            Q = e => {
                                const t = e => {
                                        const t = e.language || "default",
                                            i = e.label || "inband";
                                        return `${t}-${e.kind}-${i}`
                                    },
                                    i = (e, t) => {
                                        const i = document.createElement("track");
                                        return i.id = "sidecar_" + t, i.src = e.src, i.srclang = e.srclang, i.kind = e.kind, i.label = e.label, i
                                    },
                                    n = t => {
                                        const i = x.get(t);
                                        i && (x.forEach((e => {
                                            [e.custom.mode, e.original.mode].includes("showing") && (e.custom.mode = "hidden", e.original.mode = "hidden")
                                        })), i.custom.mode = "showing", i.original.mode = "showing", e.eventDispatcher.dispatchEvent(p.TEXTTRACK_ENABLED, i.original))
                                    },
                                    a = (e, t) => {
                                        var i;
                                        return {
                                            original: e,
                                            custom: {
                                                id: t,
                                                kind: e.kind,
                                                label: e.label,
                                                srclang: e.language,
                                                mode: null !== (i = e.mode) && void 0 !== i ? i : "hidden"
                                            }
                                        }
                                    },
                                    o = () => {
                                        x.forEach((e => {
                                            e.custom.mode = "hidden", e.original.mode = "hidden"
                                        }))
                                    },
                                    r = e => {
                                        const t = x.get(e);
                                        if (!t) return;
                                        b.debug({
                                            name: "TextTrackManager",
                                            message: `textTrackOn request with valid text track key ${e}`
                                        }), n(e);
                                        const i = {
                                            isShowing: !0,
                                            lang: t.custom.srclang,
                                            kind: t.custom.kind
                                        };
                                        g = i
                                    };
                                r.defaultReturn = void 0;
                                const s = () => {
                                    var t;
                                    b.debug({
                                        name: "TextTrackManager",
                                        message: "textTracksOff request"
                                    }), o();
                                    const i = e.localStorageManager.getTextTracks(),
                                        n = {
                                            isShowing: !1,
                                            lang: null !== (t = null == i ? void 0 : i.lang) && void 0 !== t ? t : "",
                                            kind: null == i ? void 0 : i.kind
                                        };
                                    g = n, e.eventDispatcher.dispatchEvent(p.TEXTTRACK_DISABLED)
                                };
                                s.defaultReturn = void 0;
                                const l = e => g.isShowing && g.lang === e.language && e.kind === g.kind,
                                    c = () => Array.from(x.values()).map((e => e.custom)),
                                    u = e => {
                                        var t;
                                        if (!q.includes(e.kind)) return !1;
                                        const i = "inBandMetadataTrackDispatchType" in e && !!(null === (t = e.cues) || void 0 === t ? void 0 : t.length);
                                        return !!e.language && !!e.label || i
                                    },
                                    h = i => {
                                        if (!i.track || !u(i.track)) return;
                                        const o = i.track;
                                        o.mode = "hidden";
                                        const r = t(o);
                                        x.set(r, a(o, r)), setTimeout((() => {
                                            l(o) && n(r), e.eventDispatcher.dispatchEvent(p.TEXTTRACK_AVAILABILITY_CHANGE, c())
                                        }), 0)
                                    },
                                    m = i => {
                                        if (!i.track) return;
                                        const n = t(i.track);
                                        x.delete(n), e.eventDispatcher.dispatchEvent(p.TEXTTRACK_AVAILABILITY_CHANGE, c())
                                    },
                                    v = () => {
                                        var i;
                                        if (y.removeEventListener("loadedmetadata", v), null == A || A.forEach((e => {
                                                y.appendChild(e)
                                            })), f) {
                                            let o = !1;
                                            for (let e = 0; e < y.textTracks.length; e++) {
                                                const r = y.textTracks[e];
                                                if (u(r) && !r.id.startsWith("sidecar_") && (null === (i = r.cues) || void 0 === i ? void 0 : i.length)) {
                                                    const e = t(r);
                                                    x.has(e) || (r.mode = "hidden", x.set(e, a(r, e)), l(r) && n(e), o = !0)
                                                }
                                            }
                                            o && e.eventDispatcher.dispatchEvent(p.TEXTTRACK_AVAILABILITY_CHANGE, c())
                                        }
                                    },
                                    b = d();
                                let g = e.localStorageManager.getTextTracks() || {
                                    isShowing: !1
                                };
                                const x = new Map;
                                let A, y, f = !1;
                                const E = {
                                    init: t => {
                                        if (!t || "video" !== t.nodeName.toLowerCase()) return;
                                        b.debug({
                                            name: "TextTrackManager",
                                            message: "Initialization"
                                        });
                                        const n = e;
                                        y = t, Array.isArray(n.sourceData.textTracks) && n.sourceData.textTracks.length && (b.debug({
                                            name: "TextTrackManager",
                                            message: "Handle the passed text tracks"
                                        }), A = n.sourceData.textTracks.map(i)), y.addEventListener("loadedmetadata", v), y.textTracks.addEventListener("addtrack", h), y.textTracks.addEventListener("removetrack", m), E.isInitialized = !0
                                    },
                                    isInitialized: !1,
                                    publicAPI: {
                                        textTrackOn: r,
                                        textTracksOff: s
                                    },
                                    destroy: () => {
                                        !1 !== E.isInitialized && (b.debug({
                                            name: "TextTrackManager",
                                            message: "Destroy"
                                        }), o(), y.textTracks.removeEventListener("addtrack", h), y.textTracks.removeEventListener("removetrack", m), null == A || A.forEach((e => {
                                            y.contains(e) && y.removeChild(e)
                                        })), A = [], e.eventDispatcher.dispatchEvent(p.TEXTTRACK_AVAILABILITY_CHANGE, []), x.clear(), E.isInitialized = !1, f = !0)
                                    }
                                };
                                return E.publicAPI.textTrackOn = W(E, r), E.publicAPI.textTracksOff = W(E, s), E
                            },
                            J = (e, t, i) => {
                                const n = () => {
                                        const e = E.getStatus().to;
                                        e !== u.PLAYING && e !== u.ADVERTISING && e !== u.ADVERTISING_PAUSED && E.dispatchNewStatus(u.PLAYING)
                                    },
                                    a = () => {
                                        C.debug({
                                            name: "PlaybackMonitor",
                                            message: "onPlaying"
                                        }), n(), m()
                                    },
                                    o = () => {
                                        R && i(), h(), M = 0
                                    },
                                    r = () => {
                                        E.dispatchNewStatus(u.ERROR), I.dispatchEvent(p.CRITICAL_ERROR, R || f.get("TIMEOUT_ERROR")), h(), i()
                                    },
                                    s = () => {
                                        P && (clearTimeout(P), P = null)
                                    },
                                    l = () => {
                                        S && (clearTimeout(S), S = null, R = null)
                                    },
                                    c = () => {
                                        const e = E.getStatus().to;
                                        if (e === u.ADVERTISING || e === u.ADVERTISING_PAUSED) return l(), void s();
                                        M < t.currentTime ? (l(), s(), n()) : M === t.currentTime && (S || (S = setTimeout(r, w)), !P && (null == L ? void 0 : L.startLoad) && (P = setTimeout((() => {
                                            null == L || L.startLoad()
                                        }), k)), E.dispatchNewStatus(u.LOADING)), M = t.currentTime
                                    },
                                    h = () => {
                                        D && clearInterval(D), S && clearTimeout(S), P && clearTimeout(P), D = null, S = null, P = null, R = null
                                    },
                                    m = () => {
                                        D || (D = setInterval(c, T))
                                    },
                                    v = (e, t) => {
                                        if (!L) return;
                                        C.debug({
                                            name: "PlaybackMonitor",
                                            message: "onHlsError"
                                        });
                                        const i = L.handlePlaybackErrors(t);
                                        (null == i ? void 0 : i.critical) && (R = i)
                                    },
                                    b = () => {
                                        R = f.get("TIMEOUT_ERROR") || null
                                    },
                                    g = () => {
                                        const t = E.getStatus().to;
                                        t !== u.ADVERTISING && t !== u.ADVERTISING_PAUSED && (e.statusManager.dispatchNewStatus(u.PAUSED), h())
                                    },
                                    x = () => {
                                        I.dispatchEvent(p.PLAYBACK_SEEKING)
                                    },
                                    A = () => {
                                        I.dispatchEvent(p.PLAYBACK_SEEKED), I.dispatchEvent(p.PLAYBACK_TIMEUPDATED, {
                                            currentTime: t.currentTime,
                                            duration: t.duration
                                        })
                                    },
                                    y = e => {
                                        const i = e ? "addEventListener" : "removeEventListener";
                                        t[i]("playing", a), t[i]("pause", g), t[i]("ended", o), t[i]("error", b), t[i]("seeking", x), t[i]("seeked", A), L && L[e ? "on" : "off"](L.events.ERROR, v)
                                    },
                                    {
                                        statusManager: E,
                                        eventDispatcher: I
                                    } = e,
                                    w = 35e3,
                                    k = 8e3,
                                    T = 333,
                                    C = d();
                                let S, P, D, L, R, M = 0;
                                return {
                                    init: e => {
                                        y(!1), L = e, y(!0)
                                    },
                                    startMonitoring: m,
                                    stopMonitoring: h,
                                    destroy: () => {
                                        y(!1), h(), M = 0
                                    }
                                }
                            },
                            X = (e, t) => {
                                let i, n;
                                return function a() {
                                    const o = Date.now();
                                    for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++) s[l] = arguments[l];
                                    i = clearTimeout(i), !n || o - n >= t ? (e(...s), n = o) : i = setTimeout(a.bind(null, ...s), t - (o - n))
                                }
                            },
                            Z = (e, t) => ({
                                start: e,
                                end: t
                            }),
                            ee = e => {
                                const t = (e, t) => {
                                        v = t.details.totalduration, t.details.targetduration && (A = 3 * t.details.targetduration)
                                    },
                                    i = e => {
                                        const i = e ? "addEventListener" : "removeEventListener";
                                        if (g[i]("progress", s), g[i]("timeupdate", s), g[i]("timeupdate", o), b && b[e ? "on" : "off"](b.events.LEVEL_LOADED, t), e) {
                                            if (x) return;
                                            x = setInterval(n, 1e3)
                                        } else clearInterval(x), x = null
                                    },
                                    n = (() => {
                                        let e;
                                        return () => {
                                            if (Number.isNaN(g.duration)) return;
                                            if (g.duration !== 1 / 0) return clearInterval(x), void(x = null);
                                            let t;
                                            if (g.seekable.length >= 1) {
                                                const e = g.seekable.end(g.seekable.length - 1);
                                                t = b ? e - A : e
                                            } else t = 1 / 0;
                                            e !== t && (e = t, c(p.LIVE_SYNC_POSITION_CHANGE, e))
                                        }
                                    })(),
                                    a = () => (null == h ? void 0 : h.length) ? g.duration < 1 / 0 ? Z(h.start(0), h.end(0)) : b ? (() => {
                                        if (v <= 120) return Z(0, 0); {
                                            const e = Math.ceil(h.end(0) - v),
                                                t = Math.max(0, e),
                                                i = Math.max(h.end(0), v) - A;
                                            return Z(t, i)
                                        }
                                    })() : (() => {
                                        const e = h.start(0),
                                            t = h.end(0);
                                        return t - e <= 120 || t === 1 / 0 ? Z(0, 0) : Z(e, t - A)
                                    })() : Z(0, 0),
                                    o = () => {
                                        r(), c(p.PLAYBACK_TIMEUPDATED, {
                                            currentTime: g.currentTime,
                                            duration: g.duration
                                        })
                                    },
                                    r = X((() => c(p.PLAYBACK_THROTTLED_TIMEUPDATED, {
                                        currentTime: g.currentTime,
                                        duration: g.duration
                                    })), 1e3),
                                    s = () => {
                                        const e = g.buffered;
                                        if (h = g.seekable, 0 === e.length) return;
                                        if (((e, t) => {
                                                if (!e && !t) return !0;
                                                if (!e || !t) return !1;
                                                if (e.length !== t.length) return !1;
                                                for (let i = 0; i < e.length; i++) {
                                                    if (e.start(i) !== t.start(i)) return !1;
                                                    if (e.end(i) !== t.end(i)) return !1
                                                }
                                                return !0
                                            })(m, e)) return;
                                        m = e;
                                        const t = a();
                                        c(p.BUFFER_UPDATED, {
                                            buffers: e,
                                            seekable: t
                                        })
                                    },
                                    l = () => {
                                        const e = a(),
                                            t = Math.ceil(e.end - e.start);
                                        return 0 !== t && t >= Math.floor(Math.min(A, g.duration))
                                    };
                                l.defaultReturn = !1;
                                const {
                                    dispatchEvent: c
                                } = e.eventDispatcher, u = d();
                                let h, m, v, b, g, x, A;
                                const y = {
                                    init: (e, t) => {
                                        e && void 0 !== t && (u.debug({
                                            name: "BufferManager",
                                            message: "Initialization"
                                        }), A = 24, g = e, b = t, i(!0), y.isInitialized = !0)
                                    },
                                    isInitialized: !1,
                                    publicAPI: {
                                        canSeek: l
                                    },
                                    destroy: () => {
                                        !1 !== y.isInitialized && (u.debug({
                                            name: "BufferManager",
                                            message: "Destroy"
                                        }), i(!1), h = {
                                            length: 0,
                                            start: () => 0,
                                            end: () => 0
                                        }, m = {
                                            length: 0,
                                            start: () => 0,
                                            end: () => 0
                                        }, y.isInitialized = !1)
                                    }
                                };
                                return y.publicAPI.canSeek = W(y, l), y
                            },
                            te = e => {
                                const t = e => {
                                        if (s) s[e ? "on" : "off"](s.events.AUDIO_TRACKS_UPDATED, n);
                                        else if (null == r ? void 0 : r.audioTracks) {
                                            const t = e ? "addEventListener" : "removeEventListener";
                                            r.audioTracks[t]("addtrack", n)
                                        }
                                    },
                                    i = e => e && 0 !== e.length ? e.map((e => ({
                                        id: String(e.id),
                                        name: e.name || e.label,
                                        enabled: void 0 !== e.enabled ? e.enabled : e.default
                                    }))) : [],
                                    n = () => {
                                        s ? l = i(s.getAudioTracks()) : r.audioTracks && (l = i(Array.from(r.audioTracks))), e.eventDispatcher.dispatchEvent(p.AUDIOTRACK_AVAILABILITY_CHANGE, a())
                                    },
                                    a = () => (c.debug({
                                        name: "AudioTracksManager",
                                        message: "Get Audio Tracks"
                                    }), l),
                                    o = e => {
                                        l && 0 !== l.length && l.some((t => t.id === e)) && (c.debug({
                                            name: "AudioTracksManager",
                                            message: `AudioTrackOn request with valid audiotrack id ${e}`
                                        }), l.forEach((t => {
                                            t.enabled = t.id === e
                                        })), s ? s.enableAudioTrack(parseInt(e)) : r.audioTracks && Array.from(r.audioTracks).forEach((t => {
                                            t.enabled = t.id === e
                                        })))
                                    };
                                let r, s, l;
                                o.defaultReturn = void 0;
                                const c = d(),
                                    u = {
                                        init: (e, i) => {
                                            e && void 0 !== i && (c.debug({
                                                name: "AudioTracksManager",
                                                message: "Initialization"
                                            }), r = e, s = i, t(!0), n(), u.isInitialized = !0)
                                        },
                                        isInitialized: !1,
                                        publicAPI: {
                                            audioTrackOn: o
                                        },
                                        destroy: () => {
                                            !1 !== u.isInitialized && (c.debug({
                                                name: "AudioTracksManager",
                                                message: "Destroy"
                                            }), t(!1), l = null, u.isInitialized = !1)
                                        }
                                    };
                                return u.publicAPI.audioTrackOn = W(u, o), u
                            },
                            ie = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                null !== t && (e.muted = t)
                            },
                            ne = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                null !== t && (e.volume = t)
                            },
                            ae = e => {
                                const {
                                    config: t,
                                    localStorageManager: i
                                } = e, n = d();
                                let a, o = !1;
                                return {
                                    applyConfig: e => {
                                        if (e === a) return;
                                        const t = null == a ? void 0 : a.muted,
                                            i = null == a ? void 0 : a.volume;
                                        a = e, ie(e, t), ne(e, i)
                                    },
                                    init: e => {
                                        const r = o || void 0 === t.muted ? i.getMuted() : t.muted,
                                            s = o || void 0 === t.volume ? i.getVolume() : t.volume;
                                        e.forEach((e => {
                                            t.autoPlay && e.setAttribute("autoplay", ""), ie(e, r), ne(e, s), !0 === t.enableBrowserControls && e.setAttribute("controls", "true"), "video" === e.nodeName.toLowerCase() && (e.setAttribute("crossorigin", "anonymous"), a = e)
                                        })), o = !0, n.debug({
                                            name: "MediaElementController",
                                            message: "Configs applied to playback element"
                                        })
                                    },
                                    destroy: () => {
                                        o = !1
                                    }
                                }
                            },
                            oe = e => {
                                const t = () => {
                                    G.debug({
                                        name: "MediaElementController",
                                        message: "pause request"
                                    }), q.isAdActive() ? q.pause() : $.pause()
                                };
                                t.defaultReturn = void 0;
                                const i = () => {
                                    G.debug({
                                        name: "MediaElementController",
                                        message: "stop request"
                                    }), I(), N.destroy(), e.statusManager.dispatchNewStatus(u.READY)
                                };
                                i.defaultReturn = void 0;
                                const n = () => (G.debug({
                                    name: "MediaElementController",
                                    message: "getVolume request"
                                }), $.volume);
                                n.defaultReturn = 0;
                                const a = e => {
                                    G.debug({
                                        name: "MediaElementController",
                                        message: "setVolume request"
                                    }), $.volume = e, q.isAdActive() && q.setVolume(e)
                                };
                                a.defaultReturn = void 0;
                                const o = () => (G.debug({
                                    name: "MediaElementController",
                                    message: "getCurrentTime request"
                                }), $.currentTime);
                                o.defaultReturn = 0;
                                const r = e => {
                                    G.debug({
                                        name: "MediaElementController",
                                        message: "setCurrentTime request"
                                    }), e >= $.duration && (e = $.duration - .5), $.currentTime = e
                                };
                                r.defaultReturn = void 0;
                                const s = () => (G.debug({
                                    name: "MediaElementController",
                                    message: "getDuration request"
                                }), $.duration);
                                s.defaultReturn = 0;
                                const l = () => (G.debug({
                                    name: "MediaElementController",
                                    message: "getMuted request"
                                }), $.muted);
                                l.defaultReturn = !1;
                                const c = t => {
                                    G.debug({
                                        name: "MediaElementController",
                                        message: "setMuted request"
                                    }), t !== $.muted && ($.muted = t, e.eventDispatcher.dispatchEvent(p.PLAYBACK_MUTEDCHANGE, t), q.isAdActive() && q.setVolume(t ? 0 : n()))
                                };
                                c.defaultReturn = void 0;
                                const h = () => (G.debug({
                                    name: "MediaElementController",
                                    message: "getPlaybackRate request"
                                }), $.playbackRate);
                                h.defaultReturn = 1;
                                const m = t => {
                                    G.debug({
                                        name: "MediaElementController",
                                        message: "setPlaybackRate request"
                                    }), $.defaultPlaybackRate = t, $.playbackRate = t, e.eventDispatcher.dispatchEvent(p.PLAYBACK_PLAYBACKSPEEDCHANGE, t)
                                };
                                m.defaultReturn = void 0;
                                const v = t => {
                                        G.debug({
                                            name: "MediaElementController",
                                            message: "setImaSdkInactive request"
                                        }), e.config.imaSdkInactive = "boolean" == typeof t && t
                                    },
                                    b = () => {
                                        F || (F = !0, G.debug({
                                            name: "MediaElementController",
                                            message: "load request"
                                        }), _.forEach((e => {
                                            e.removeAttribute("src"), e.load()
                                        })), q.init())
                                    },
                                    g = () => {
                                        G.debug({
                                            name: "MediaElementController",
                                            message: "unload request"
                                        }), i(), e.sourceData = {
                                            hashId: null,
                                            format: null,
                                            assetParsers: null
                                        }
                                    };
                                g.defaultReturn = void 0;
                                const x = async t => {
                                        G.debug({
                                            name: "MediaElementController",
                                            message: "Play request"
                                        });
                                        try {
                                            if (((t, i) => {
                                                    let n;
                                                    if (!1 === X.isInitialized ? (b(), i ? (n = O(i), n || (C(i), D())) : t ? D() : n = f.get("NO_MEDIA_TO_PLAY")) : i && (k(), b(), n = O(i), n || (C(i), (e => {
                                                            if (B = !1, null === e) return;
                                                            const t = _.get(e);
                                                            t !== $ && ($.setAttribute("hidden", "true"), t.removeAttribute("hidden"), K.applyConfig(t), $ = t)
                                                        })(i.format), T(), e.localStorageManager.initMedia($))), n) throw n
                                                })(null == L ? void 0 : L.sourceData, t), q.isAdActive()) return q.resume(), Promise.resolve();
                                            N.startMonitoring(), B || await A(), await $.play()
                                        } catch (e) {
                                            const i = y(e);
                                            return E(i)
                                        }
                                        return Promise.resolve()
                                    },
                                    A = async () => {
                                        G.debug({
                                            name: "MediaElementController",
                                            message: "InitialPlay call"
                                        }), e.eventDispatcher.dispatchEvent(p.PLAYBACK_INITIALPLAY);
                                        try {
                                            await q.requestAds(), e.sizeManager.init($);
                                            const t = await z.loadAssets();
                                            N.init(t), H.init($, t), Y.init($, t), B = !0, F = !1
                                        } catch (e) {
                                            if (e.critical) return Promise.reject(e)
                                        }
                                        return Promise.resolve()
                                    },
                                    y = e => Object.getOwnPropertyDescriptor(e, "critical") ? e : "NotAllowedError" === e.name || "NotSupportedError" === e.name ? {
                                        critical: !1,
                                        name: "MediaElementController",
                                        message: e.message
                                    } : e,
                                    E = t => (Object.getOwnPropertyDescriptor(t, "critical") && (F = !1, null == q || q.destroy(), null == N || N.stopMonitoring(), !0 === t.critical ? (e.eventDispatcher.dispatchEvent(p.CRITICAL_ERROR, t), e.statusManager.dispatchNewStatus(u.ERROR)) : e.statusManager.dispatchNewStatus(u.READY)), G.error(t), Promise.resolve(t.message)),
                                    I = () => {
                                        v(!1), V.destroy(), H.destroy(), null == Y || Y.destroy(), q.destroy(), z.destroy(), V.init($), B = !1
                                    },
                                    w = () => {
                                        I()
                                    },
                                    k = () => {
                                        e.sizeManager.destroy(), q.destroy(), null == z || z.destroy(), null == N || N.destroy(), V.destroy(), H.destroy(), Y.destroy()
                                    },
                                    T = () => {
                                        N = L.initModule(J, $, w), z = L.initModule(j, $), V.init($)
                                    },
                                    C = t => {
                                        var i;
                                        t !== e.sourceData && (e.sourceData = { ...t,
                                            hashId: (i = t.assetParsers, null === i ? null : function(e) {
                                                let t = 5381,
                                                    i = e.length;
                                                for (; i;) t = 33 * t ^ e.charCodeAt(--i);
                                                return t >>> 0
                                            }(i.reduce(((e, t) => e + t.key), "")))
                                        }, L = e)
                                    },
                                    S = () => {
                                        e.eventDispatcher.dispatchEvent(p.PLAYBACK_VOLUMECHANGE, n())
                                    },
                                    P = () => {
                                        q.allAdsComplete() && e.statusManager.dispatchNewStatus(u.ENDED)
                                    },
                                    D = () => {
                                        var t;
                                        G.debug({
                                            name: "MediaElementController",
                                            message: "Initialization"
                                        }), (null === (t = L.sourceData) || void 0 === t ? void 0 : t.format) && ($ = _.get(L.sourceData.format), e.localStorageManager.initMedia($), T(), G.debug({
                                            name: "MediaElementController",
                                            message: "Removing hidden attribute from playbackElement"
                                        }), $.hasAttribute("hidden") && $.removeAttribute("hidden"), X.isInitialized = !0)
                                    };
                                let L;
                                const R = e.coreContainerElement,
                                    M = e.config,
                                    _ = new Map;
                                let $, N, z, B = !1,
                                    F = !1;
                                const V = e.initModule(Q),
                                    H = e.initModule(ee),
                                    Y = e.initModule(te),
                                    K = e.initModule(ae),
                                    G = d();
                                (() => {
                                    const e = document.createElement("video"),
                                        t = document.createElement("audio");
                                    e.setAttribute("playsinline", ""), e.setAttribute("data-name", "phoenix-playback-element"), e.preload = "metadata", e.style.setProperty("width", "100%"), e.style.setProperty("height", "100%"), e.setAttribute("hidden", "true"), t.setAttribute("hidden", "true"), t.preload = "metadata", e.addEventListener("volumechange", S), t.addEventListener("volumechange", S), e.addEventListener("ended", P), t.addEventListener("ended", P), G.debug({
                                        name: "MediaElementController",
                                        message: "Playback element successfully created"
                                    }), _.set("video", e), _.set("audio", t), K.init([e, t]), $ = e, R.appendChild($), R.appendChild(t)
                                })();
                                const q = U(e, _),
                                    X = {
                                        init: e => {
                                            (e => {
                                                const t = O(e);
                                                return !t || (G.error(t), !1)
                                            })(e) && (M.autoPlay && M.isAutoplayAllowed && (q.setAutoplayAttempt(), b()), C(e), M.autoPlay && (D(), x()))
                                        },
                                        isInitialized: !1,
                                        publicAPI: {
                                            play: x,
                                            load: b,
                                            pause: t,
                                            stop: i,
                                            unload: g,
                                            getVolume: n,
                                            setVolume: a,
                                            getCurrentTime: o,
                                            setCurrentTime: r,
                                            getDuration: s,
                                            getMuted: l,
                                            setMuted: c,
                                            canSeek: H.publicAPI.canSeek,
                                            audioTrackOn: Y.publicAPI.audioTrackOn,
                                            textTrackOn: V.publicAPI.textTrackOn,
                                            textTracksOff: V.publicAPI.textTracksOff,
                                            getPlaybackRate: h,
                                            setPlaybackRate: m,
                                            setImaSdkInactive: v
                                        },
                                        destroy: () => {
                                            var e, t, i, n;
                                            G.debug({
                                                name: "MediaElementController",
                                                message: "Destroy"
                                            }), k(), K.destroy(), _.forEach((e => {
                                                R.removeChild(e)
                                            })), null === (e = _.get("video")) || void 0 === e || e.removeEventListener("volumechange", S), null === (t = _.get("audio")) || void 0 === t || t.removeEventListener("volumechange", S), null === (i = _.get("video")) || void 0 === i || i.removeEventListener("ended", P), null === (n = _.get("audio")) || void 0 === n || n.removeEventListener("ended", P)
                                        }
                                    };
                                return X.publicAPI.play = x, X.publicAPI.load = b, X.publicAPI.pause = W(X, t), X.publicAPI.stop = W(X, i), X.publicAPI.unload = W(X, g), X.publicAPI.getVolume = W(X, n), X.publicAPI.setVolume = W(X, a), X.publicAPI.getCurrentTime = W(X, o), X.publicAPI.setCurrentTime = W(X, r), X.publicAPI.getDuration = W(X, s), X.publicAPI.getMuted = W(X, l), X.publicAPI.setMuted = W(X, c), X.publicAPI.getPlaybackRate = W(X, h), X.publicAPI.setPlaybackRate = W(X, m), X.publicAPI.setImaSdkInactive = v, X
                            },
                            re = () => {
                                const e = d(),
                                    t = Object.values(p),
                                    i = new Map([]);
                                return {
                                    addEventListener: (n, a, o) => {
                                        if (t.includes(n))
                                            if (i.get(n)) {
                                                const e = i.get(n),
                                                    t = null != e ? e : [];
                                                o ? t.unshift(a) : t.push(a), i.set(n, t)
                                            } else {
                                                const e = [a];
                                                i.set(n, e)
                                            }
                                        else e.error({
                                            name: "EventDispatcher",
                                            message: `addEventListener ${n} is not a valid event`,
                                            critical: !1
                                        })
                                    },
                                    removeEventListener: (n, a) => {
                                        if (t.includes(n)) {
                                            const e = i.get(n),
                                                t = null == e ? void 0 : e.filter((e => e !== a));
                                            t ? i.set(n, t) : i.delete(n)
                                        } else e.error({
                                            name: "EventDispatcher",
                                            message: `removeEventListener ${n} is not a valid event`,
                                            critical: !1
                                        })
                                    },
                                    dispatchEvent: (t, n) => {
                                        if (e.debug({
                                                name: "EventDispatcher",
                                                message: `Dispatch event ${t}`
                                            }), t) {
                                            const e = i.get(t);
                                            e && e.forEach((e => {
                                                e(n)
                                            }))
                                        }
                                    },
                                    destroy: () => {
                                        i.clear()
                                    }
                                }
                            },
                            se = e => {
                                const {
                                    eventDispatcher: t
                                } = e, i = {
                                    from: u.READY,
                                    to: u.READY
                                }, n = d();
                                n.debug({
                                    name: "StatusManager",
                                    message: "Initialization"
                                });
                                let a = i;
                                return {
                                    dispatchNewStatus: (e, i) => {
                                        if (a.to === e) return;
                                        const o = {
                                            from: a.to,
                                            to: e
                                        };
                                        i && (o.data = { ...i
                                        }), n.debug({
                                            name: "StatusManager",
                                            message: `Status change from ${o.from} to ${o.to}`
                                        }), t.dispatchEvent(p.STATUS_CHANGE, o), a = o
                                    },
                                    getStatus: () => a,
                                    destroy: () => {
                                        n.debug({
                                            name: "StatusManager",
                                            message: "Destroy"
                                        }), a = i
                                    }
                                }
                            },
                            le = e => {
                                const t = () => {
                                        null == r || r.removeEventListener("playing", t), e.eventDispatcher.dispatchEvent(b.MEDIA_ASPECT_RATIO_AVAILABLE, i(r))
                                    },
                                    i = e => parseFloat((e.videoWidth / e.videoHeight).toFixed(3)),
                                    n = (t, i) => {
                                        o.width = null != t ? t : e.coreContainerElement.offsetWidth, o.height = null != i ? i : e.coreContainerElement.offsetHeight
                                    },
                                    a = document,
                                    o = {
                                        width: 0,
                                        height: 0
                                    };
                                let r;
                                const s = [],
                                    l = new ResizeObserver((t => {
                                        var i;
                                        const r = Array.isArray(t) && (null === (i = t[0]) || void 0 === i ? void 0 : i.contentRect) || {
                                            width: void 0,
                                            height: void 0
                                        };
                                        n(r.width, r.height);
                                        const l = (a.fullscreenElement || a.webkitFullscreenElement || a.mozFullScreenElement || a.msFullscreenElement) === e.externalContainerElement;
                                        s.forEach((e => e(o, l)))
                                    }));
                                return e.coreContainerElement.style.setProperty("position", "relative"), e.coreContainerElement.style.setProperty("width", "100%"), e.coreContainerElement.style.setProperty("height", "100%"), e.coreContainerElement.style.setProperty("overflow", "hidden"), n(), {
                                    subscribe: e => {
                                        s.push(e)
                                    },
                                    init: i => {
                                        l.observe(e.coreContainerElement), r = i, "video" === r.nodeName.toLowerCase() && r.addEventListener("playing", t)
                                    },
                                    getPlayerDimensions: () => o,
                                    destroy: () => {
                                        l.unobserve(e.coreContainerElement), l.disconnect(), null == r || r.removeEventListener("playing", t), r = null
                                    }
                                }
                            },
                            de = "wpp-phoenix-core",
                            ce = e => {
                                const t = () => {
                                        const e = null == y ? void 0 : y.getItem(de);
                                        return e ? JSON.parse(e) : {}
                                    },
                                    i = e => {
                                        if (!y) return;
                                        const i = t();
                                        i.muted = e, r(i)
                                    },
                                    n = () => {
                                        if (!y) return;
                                        const e = t();
                                        e.textTrack && (delete e.textTrack, r(e))
                                    },
                                    a = e => {
                                        if (!y || !e) return;
                                        const i = t();
                                        i.textTrack = {
                                            isShowing: !0,
                                            lang: e.language,
                                            kind: e.kind
                                        }, r(i)
                                    },
                                    o = (e, i, n) => {
                                        if (!y) return;
                                        if (n === 1 / 0 || isNaN(n)) return;
                                        const a = t(),
                                            o = a.media || {};
                                        i / n >= .9 && (i = 0), a.media = Object.assign(o, {
                                            [`${e}`]: {
                                                currentTime: i,
                                                lastModified: Date.now()
                                            }
                                        }), r(a)
                                    },
                                    r = e => {
                                        y && y.setItem(de, JSON.stringify(e))
                                    },
                                    s = t => {
                                        const i = t ? "addEventListener" : "removeEventListener";
                                        b[i]("emptied", l), b[i]("loadedmetadata", d), b[i]("timeupdate", c), b[i]("volumechange", h), b[i]("ended", m), e.eventDispatcher[i](p.TEXTTRACK_ENABLED, a), e.eventDispatcher[i](p.TEXTTRACK_DISABLED, n)
                                    },
                                    l = () => {
                                        o(g.hashId, g.currentTime, g.duration), x = !1
                                    },
                                    d = () => {
                                        null !== v.hashId && (g.hashId = v.hashId, g.duration = b.duration, !1 !== e.config.muted && !0 !== e.config.muted || i(e.config.muted))
                                    },
                                    c = () => {
                                        u()
                                    },
                                    u = X((() => {
                                        g.currentTime = b.currentTime, !x && b.currentTime / b.duration * 100 >= 50 && g.sourceId && ((e, i) => {
                                            if (!y || !e || i) return;
                                            const n = t(),
                                                a = n.watchedIds || [],
                                                o = e.toString();
                                            a.includes(o) || a.push(o), a.length > 10 && a.shift(), n.watchedIds = a, r(n), x = !0
                                        })(g.sourceId, g.isLive)
                                    }), 5e3),
                                    h = () => {
                                        i(b.muted), (e => {
                                            if (!y) return;
                                            const i = t();
                                            i.volume = e, r(i)
                                        })(b.volume)
                                    },
                                    m = () => {
                                        null !== v.hashId && o(v.hashId, 0, b.duration)
                                    };
                                let v, b;
                                const g = {
                                    currentTime: 0,
                                    duration: NaN,
                                    hashId: NaN,
                                    sourceId: "",
                                    isLive: !1
                                };
                                let x = !1,
                                    A = null,
                                    y = window && window.localStorage instanceof Storage ? window.localStorage : null;
                                return y && (() => {
                                    const e = t();
                                    for (const t in e.media) {
                                        const i = e.media[t].lastModified;
                                        i && i < Date.now() - 1728e5 && delete e.media[t]
                                    }
                                    r(e)
                                })(), {
                                    initMedia: t => {
                                        t && e.sourceData && (b = t, v = e.sourceData, s(!0), null !== A && window.removeEventListener("beforeunload", A), A = (() => {
                                            const e = () => {
                                                window.removeEventListener("beforeunload", e), v.hashId && o(v.hashId, b.currentTime, b.duration)
                                            };
                                            return e
                                        })(), window.addEventListener("beforeunload", A))
                                    },
                                    getMediaById: e => {
                                        if (!y) return null;
                                        const i = t();
                                        return i.media && i.media[e] || null
                                    },
                                    getWatchedMediaIds: () => {
                                        if (!y) return [];
                                        const e = t();
                                        return e.watchedIds ? e.watchedIds : []
                                    },
                                    getVolume: () => {
                                        var e;
                                        return y && null !== (e = t().volume) && void 0 !== e ? e : null
                                    },
                                    getMuted: () => {
                                        var e;
                                        return y && null !== (e = t().muted) && void 0 !== e ? e : null
                                    },
                                    getTextTracks: () => y && t().textTrack || null,
                                    getPlayNextEnabled: () => {
                                        var e;
                                        return !y || null === (e = t().playNextEnabled) || void 0 === e || e
                                    },
                                    setPlayNextEnabled: e => {
                                        if (!y || "boolean" != typeof e) return;
                                        const i = t();
                                        i.playNextEnabled = e, r(i)
                                    },
                                    setCurrentMedia: e => {
                                        g.sourceId = e.sourceId, g.isLive = e.isLive
                                    },
                                    destroy: () => {
                                        y = null, A && window.removeEventListener("beforeunload", A), A = null, s(!1)
                                    }
                                }
                            },
                            pe = (e, t) => {
                                const i = {
                                    config: e
                                };
                                var n;
                                i.initModule = (n = i, function(e, t) {
                                    for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) a[o - 2] = arguments[o];
                                    return t ? e(n, t, ...a) : e(n)
                                });
                                const a = d(e.debug);
                                a.debug({
                                    name: "PhoenixCore",
                                    message: "Initialization"
                                }), a.debug({
                                    name: "PhoenixCore",
                                    message: "Version: " + A
                                });
                                const o = i.initModule(re);
                                i.eventDispatcher = o;
                                const r = i.initModule(se);
                                i.statusManager = r;
                                const s = i.initModule(ce);
                                i.localStorageManager = s, (e => {
                                    if (!(null == e ? void 0 : e.containerNode)) throw f.get("PLAYER_CONFIG_ERROR")
                                })(e), a.debug({
                                    name: "PhoenixCore",
                                    message: "Config successfully validated"
                                });
                                const l = (e => {
                                        const t = e.containerNode;
                                        if (!(null == t ? void 0 : t.appendChild)) throw f.get("PLAYER_INJECTION_ERROR");
                                        return t
                                    })(e),
                                    c = document.createElement("div");
                                c.classList.add("phoenix-core-container"), c.setAttribute("data-core-version", A), l.appendChild(c), i.externalContainerElement = l, i.coreContainerElement = c;
                                const p = i.initModule(le);
                                i.sizeManager = p;
                                const u = Math.floor(1e8 + 9e8 * Math.random());
                                a.debug({
                                    name: "PhoenixCore",
                                    message: "Generate uid: " + u
                                });
                                const h = i.initModule(oe);
                                return t && h.init(t), {
                                    uid: u,
                                    destroy: () => {
                                        a.debug({
                                            name: "PhoenixCore",
                                            message: "Destroy"
                                        }), h.destroy(), r.destroy(), s.destroy(), o.destroy()
                                    },
                                    media: h.publicAPI,
                                    on: o.addEventListener,
                                    off: o.removeEventListener,
                                    trigger: o.dispatchEvent,
                                    getStatus: r.getStatus,
                                    localStorageManager: s
                                }
                            },
                            ue = e => {
                                var t, i;
                                if (!e) return;
                                const n = "platform-dai" === (null === (i = null === (t = null == e ? void 0 : e.assets) || void 0 === t ? void 0 : t[0]) || void 0 === i ? void 0 : i.type);
                                return {
                                    assetParsers: (a = e.assets, Array.isArray(a) && 0 !== a.length ? a.reduce(((e, t) => {
                                        var i;
                                        return (null == (i = t) ? void 0 : i.key) && i.type && D.get(i.type) && e.push({
                                            key: t.key,
                                            options: t.options,
                                            loader: D.get(t.type)
                                        }), e
                                    }), []) : []),
                                    format: e.format,
                                    adUrl: e.adUrl,
                                    adOrder: e.adOrder,
                                    adCategoryExclusion: e.adCategoryExclusion,
                                    textTracks: e.textTracks,
                                    startTime: e.startTime,
                                    sourceId: e.sourceId,
                                    mediaNetId: e.mediaNetId,
                                    isLive: e.isLive,
                                    isDAI: n
                                };
                                var a
                            },
                            he = t => {
                                const i = e => {
                                        const i = e ? "on" : "off";
                                        t[i](b.STATUS_CHANGE, o, !0), t[i](b.PLAYBACK_THROTTLED_TIMEUPDATED, s)
                                    },
                                    n = () => {
                                        y = 1, A = !1, x = null
                                    },
                                    o = e => {
                                        e.to === g.ENDED ? (n(), i(!1), t.trigger(b.CHAPTER_COMPLETE)) : e.to === g.READY && n()
                                    },
                                    r = (e, t) => !(!e || !t) && e.startTime === t.startTime && e.endTime === t.endTime && e.programTitle === t.programTitle,
                                    s = (() => {
                                        let e = !1;
                                        return async () => {
                                            const i = t.getStatus().to;
                                            if (!0 === e || i !== g.PLAYING) return;
                                            const n = u();
                                            let a = null;
                                            if (n || (e = !0, a = await c(), x = a, e = !1), !n && !a) return A && t.trigger(b.CHAPTER_COMPLETE), void h();
                                            A && a && (A = !1, t.trigger(b.CHAPTER_COMPLETE));
                                            const o = u();
                                            if (!A && o) {
                                                A = !0;
                                                const e = p(x);
                                                m.debug({
                                                    caller: l,
                                                    name: "ChapterManager - liveRadio",
                                                    message: `Triggering chapter start: ${JSON.stringify(e)}`
                                                }), t.trigger(b.CHAPTER_START, e), y++
                                            }
                                        }
                                    })(),
                                    c = async () => {
                                        try {
                                            const t = await (async t => {
                                                try {
                                                    const i = (e => {
                                                        if (e) return {
                                                            query: `{\n            onNow: linearScheduleOnNow(callSign: "${e}") {\n                programTitle\n                startTime\n                endTime\n                program {\n                    thumbnail\n                }\n            }\n            upNext: linearScheduleUpNext(callSign: "${e}") {\n                programTitle\n                startTime\n                endTime\n                program {\n                    thumbnail\n                }\n            }\n        }`
                                                        }
                                                    })(t);
                                                    if (!i) throw new Error("No GQL query specified");
                                                    const n = await (async t => {
                                                            var i, n;
                                                            const o = {
                                                                    headers: {
                                                                        "Content-Type": "application/json",
                                                                        "X-Cache-By-Country": "true"
                                                                    },
                                                                    method: "POST",
                                                                    body: JSON.stringify(t)
                                                                },
                                                                r = await a("https://www.cbc.ca/graphql", o);
                                                            if (r.status === e.ERROR) {
                                                                const e = null !== (n = null === (i = r.response) || void 0 === i ? void 0 : i.message) && void 0 !== n ? n : "Unknown Error";
                                                                throw new Error(`GQL Fetch Error: ${e}`)
                                                            }
                                                            return r
                                                        })(i),
                                                        o = n.response.data;
                                                    if (!(null == o ? void 0 : o.onNow)) throw new Error("Incorrect onNowNextPayload returned");
                                                    return o
                                                } catch (e) {
                                                    const i = new Error(`Failed to get Live Radio On Now/Next Item: ${e.message}`);
                                                    return Promise.reject(i)
                                                }
                                            })(v);
                                            return (e => {
                                                if (!(null == e ? void 0 : e.onNow) || !(null == e ? void 0 : e.upNext)) return !1;
                                                const t = e.upNext;
                                                return !r(t, x)
                                            })(t) ? r(t.onNow, x) && null !== t.upNext ? t.upNext : t.onNow : null
                                        } catch {
                                            return null
                                        }
                                    },
                                    p = e => {
                                        var i;
                                        return {
                                            length: (e.endTime - e.startTime) / 1e3,
                                            position: y,
                                            startTime: e.startTime,
                                            playhead: t.media.getCurrentTime(),
                                            show: e.programTitle ? e.programTitle : "",
                                            thumbnail: (null === (i = e.program) || void 0 === i ? void 0 : i.thumbnail) ? e.program.thumbnail : ""
                                        }
                                    },
                                    u = () => !(!((null == x ? void 0 : x.programTitle) && (null == x ? void 0 : x.startTime) && (null == x ? void 0 : x.endTime)) || Date.now() >= x.endTime),
                                    h = () => {
                                        n(), i(!1)
                                    },
                                    m = d();
                                let v, x = null,
                                    A = !1,
                                    y = 1;
                                return {
                                    init: e => {
                                        m.debug({
                                            caller: l,
                                            name: "ChapterManager - liveRadio",
                                            message: `Init with callSign ${null==e?void 0:e.callSign}`
                                        }), e.callSign && (v = e.callSign, i(!0))
                                    },
                                    destroy: h
                                }
                            },
                            me = e => {
                                const t = new Date(e),
                                    i = t.getFullYear(),
                                    n = t.getMonth() + 1;
                                return i + "-" + (n < 10 ? "0" + n : n.toString()) + "-" + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate())
                            },
                            ve = e => {
                                const t = Number.parseFloat(e),
                                    i = Number.isNaN(t) ? 0 : t;
                                return Math.round(100 * (i + Number.EPSILON)) / 100
                            },
                            be = e => {
                                const t = t => {
                                        const n = t ? "on" : "off";
                                        e[n](b.STATUS_CHANGE, i), e[n](b.PLAYBACK_TIMEUPDATED, a)
                                    },
                                    i = t => {
                                        h = t.to, t.to === g.ENDED && n(), t.to === g.PLAYING && A && (A = !1, e.on(b.PLAYBACK_TIMEUPDATED, a))
                                    },
                                    n = () => {
                                        e.off(b.PLAYBACK_TIMEUPDATED, a), A = !0, x = !1, v = 0, r(m.length - 1)
                                    },
                                    a = e => {
                                        const {
                                            currentTime: t
                                        } = e, i = p(t);
                                        if (-1 !== i) return x || h !== g.PLAYING ? void(i !== v && (r(v), v = i, o(i))) : (o(i), x = !0, void(v = i));
                                        u.debug({
                                            caller: l,
                                            name: "ChapterManager - default - onTimeUpdated",
                                            message: `Could not determine chapter index for ${t}`
                                        })
                                    },
                                    o = t => {
                                        u.debug({
                                            caller: l,
                                            name: "ChapterManager - default - chapterStart",
                                            message: `Chapter ${t+1} started`
                                        }), e.trigger(b.CHAPTER_START, s(t))
                                    },
                                    r = t => {
                                        u.debug({
                                            caller: l,
                                            name: "ChapterManager - default - chapterComplete",
                                            message: `Chapter ${t+1} ended`
                                        }), e.trigger(b.CHAPTER_COMPLETE)
                                    },
                                    s = t => {
                                        const i = m[t];
                                        return {
                                            length: c(t),
                                            position: t + 1,
                                            startTime: i.startTime,
                                            playhead: e.media.getCurrentTime(),
                                            show: i.name ? i.name : "",
                                            thumbnail: ""
                                        }
                                    },
                                    c = t => {
                                        if (t < 0 || t >= m.length) return -1;
                                        const i = m[t];
                                        let n;
                                        if (t === m.length - 1) {
                                            const t = e.media.getDuration();
                                            n = ve(t) - i.startTime
                                        } else n = m[t + 1].startTime - i.startTime;
                                        return n <= 0 && (n = -1), n
                                    },
                                    p = e => m.findIndex(((t, i, n) => !(e < t.startTime || n[i + 1] && e >= n[i + 1].startTime))),
                                    u = d();
                                let h, m = [],
                                    v = 0,
                                    x = !1,
                                    A = !1;
                                return {
                                    init: i => {
                                        var n;
                                        u.debug({
                                            caller: l,
                                            name: "ChapterManager - default",
                                            message: "Init"
                                        }), (null === (n = null == i ? void 0 : i.chapters) || void 0 === n ? void 0 : n.length) && 0 !== i.chapters.length && (e => !!Array.isArray(e) && !e.some((e => !e.startTime && !e.name)))(i.chapters) ? m = i.chapters : (u.debug({
                                            caller: l,
                                            name: "ChapterManager - default",
                                            message: "Init - invalid chapters supplied"
                                        }), m.push((e => {
                                            var t;
                                            return {
                                                startTime: 0,
                                                name: null !== (t = e.showName) && void 0 !== t ? t : ""
                                            }
                                        })(i))), h = e.getStatus().to, t(!0)
                                    },
                                    destroy: () => {
                                        t(!1)
                                    }
                                }
                            },
                            ge = 6e4,
                            xe = { ...g,
                                SCHEDULED: "SCHEDULED",
                                TIMEDOUT: "TIMEDOUT",
                                CRITICAL_ERROR: "CRITICAL_ERROR"
                            },
                            Ae = 2147483647;
                        var ye = i(241);
                        const fe = (() => {
                                let t;
                                return () => (t || (t = (() => {
                                    let t;
                                    return {
                                        getUser: async () => (t || (t = await (() => {
                                            let t = !1;
                                            const i = s().get("UIE_CURRENT_USER_URL") || "https://uie.data.cbc.ca/v0/current_user",
                                                n = d();
                                            return async () => {
                                                var o, r;
                                                try {
                                                    if (!t) {
                                                        t = !0;
                                                        const s = await a(i);
                                                        if (s.status === e.ERROR) {
                                                            const e = null !== (r = null === (o = s.response) || void 0 === o ? void 0 : o.message) && void 0 !== r ? r : "Unknown Error";
                                                            throw n.debug({
                                                                caller: l,
                                                                name: "User Manager",
                                                                message: e
                                                            }), new Error(e)
                                                        }
                                                    }
                                                    return function() {
                                                        var e, t;
                                                        const i = window.document.cookie.split(";");
                                                        let n, a;
                                                        for (let o = 0; o < i.length; o++) {
                                                            const r = i[o].split("="),
                                                                s = null === (t = null === (e = null == r ? void 0 : r[0]) || void 0 === e ? void 0 : e.trim) || void 0 === t ? void 0 : t.call(e),
                                                                l = {
                                                                    type: s,
                                                                    id: r[1]
                                                                };
                                                            "cbc_plus" === s ? n = l : "cbc_visitor" === s && (a = l)
                                                        }
                                                        return n || a || null
                                                    }()
                                                } catch {
                                                    return null
                                                }
                                            }
                                        })()()), t)
                                    }
                                })()), t)
                            })(),
                            Ee = async (t, i) => {
                                const n = e => {
                                        const t = e.media.play,
                                            i = e.media.stop;
                                        return { ...e.media,
                                            play: async i => {
                                                if (i) {
                                                    p = !1, c = i, a(e);
                                                    const n = ue(i);
                                                    return t(n)
                                                }
                                                return p || a(e), t()
                                            },
                                            stop: () => (p = !1, r(), i())
                                        }
                                    },
                                    a = i => {
                                        if (!c || p) return;
                                        let n, a, r, u, h;
                                        const v = Array.from(m.entries());
                                        (null == v ? void 0 : v.length) ? (n = m.get("ChapterManager"), a = m.get("Analytics"), r = m.get("UpcomingLiveManager"), u = m.get("RecommendationsFetcher"), h = m.get("MediaNetPlaybackLog")) : (n = (e => {
                                            let t;
                                            const i = d();
                                            return {
                                                init: n => {
                                                    n.isLive && n.callSign && "audio" === n.format ? (t = he(e), i.debug({
                                                        caller: l,
                                                        name: "ChapterManager",
                                                        message: "Init Live Radio Chapter Manager"
                                                    })) : (t = be(e), i.debug({
                                                        caller: l,
                                                        name: "ChapterManager",
                                                        message: "Init Default Chapter Manager"
                                                    })), t.init(n)
                                                },
                                                destroy: () => {
                                                    t && t.destroy()
                                                }
                                            }
                                        })(i), a = (e => {
                                            const t = e => e + .5 | 0,
                                                i = t => {
                                                    const i = t ? "on" : "off";
                                                    e[i](b.PLAYBACK_INITIALPLAY, a, !0), e[i](b.STATUS_CHANGE, o, !0), e[i](b.PLAYBACK_TIMEUPDATED, p), e[i](b.AD_BREAK_STARTED, u), e[i](b.AD_BREAK_COMPLETED, h), e[i](b.AD_STARTED, m), e[i](b.AD_COMPLETED, v), e[i](b.PLAYBACK_SEEKING, A), e[i](b.PLAYBACK_SEEKED, y), e[i](b.CHAPTER_START, f), e[i](b.CHAPTER_COMPLETE, E), e[i](b.TEXTTRACK_ENABLED, I), e[i](b.TEXTTRACK_DISABLED, I), e[i](b.AD_ERRORED, x)
                                                },
                                                n = e => {
                                                    var t, i, n;
                                                    const a = (e => {
                                                        var t, i, n, a, o, r, s, l, d;
                                                        const c = null !== (i = null !== (t = e.mediaId) && void 0 !== t ? t : e.sourceId) && void 0 !== i ? i : "",
                                                            p = e.mediaId ? "mediaId" : e.source,
                                                            u = null !== (n = e.feature) && void 0 !== n ? n : {},
                                                            h = {
                                                                uid: null == c ? void 0 : c.toString(),
                                                                source: null != p ? p : "",
                                                                seasonnumber: null !== (a = e.season) && void 0 !== a ? a : "",
                                                                episodenumber: null !== (o = e.episode) && void 0 !== o ? o : "",
                                                                show: e.showName && !e.isLive ? e.showName : "",
                                                                region: null !== (r = e.region) && void 0 !== r ? r : "",
                                                                sport: null !== (s = e.sport) && void 0 !== s ? s : "",
                                                                genre: null !== (l = e.genre) && void 0 !== l ? l : "",
                                                                sponsorname: null !== (d = e.brandedSponsorName) && void 0 !== d ? d : "",
                                                                keywords: {
                                                                    tags: e.tags,
                                                                    concepts: e.concepts
                                                                }
                                                            };
                                                        return Object.keys(u).length && (h.feature = u), h
                                                    })(e);
                                                    return {
                                                        streamtitle: null !== (t = e.title) && void 0 !== t ? t : "",
                                                        audiovideo: e.format,
                                                        contentarea: null !== (i = e.contentArea) && void 0 !== i ? i : "",
                                                        type: null !== (n = e.type) && void 0 !== n ? n : "",
                                                        totalchapters: (null == P ? void 0 : P.isLive) ? "1" : (null == P ? void 0 : P.chapters) && Array.isArray(null == P ? void 0 : P.chapters) && 0 !== (null == P ? void 0 : P.chapters.length) ? P.chapters.length.toString() : "1",
                                                        airDate: e.pubDate ? me(e.pubDate) : "",
                                                        ...a
                                                    }
                                                },
                                                a = () => {
                                                    T.debug({
                                                        caller: l,
                                                        name: "Analytics",
                                                        message: "onInitialPlay"
                                                    }), N = 0, L = !0, w("videoLoad", k, (() => {
                                                        if (P) return {
                                                            streamType: P.isLive ? "live" : "vod",
                                                            playhead: N,
                                                            closedCaptionEnabled: U,
                                                            length: (null == P ? void 0 : P.isLive) ? -1 : e.media.getDuration() ? ve(e.media.getDuration()) : (null == P ? void 0 : P.duration) ? ve(null == P ? void 0 : P.duration) : 0,
                                                            cbcContextVideo: n(P),
                                                            playerContextVideo: {
                                                                liveondemand: P.isLive ? "Live" : "On-Demand",
                                                                pdkplayername: "wpp-phoenix-player"
                                                            }
                                                        }
                                                    })())
                                                },
                                                o = e => {
                                                    switch (e.to) {
                                                        case g.ENDED:
                                                            r();
                                                            break;
                                                        case g.PLAYING:
                                                            if (e.from === g.ADVERTISING) break;
                                                            s();
                                                            break;
                                                        case g.PAUSED:
                                                            c()
                                                    }
                                                },
                                                r = () => {
                                                    M = !0, O = !0, w("chapterComplete", k), w("videoComplete", k), L = !1, R = 0
                                                },
                                                s = () => {
                                                    e.getStatus().from !== g.ADVERTISING && (L || a(), w("videoPlay", k))
                                                },
                                                c = () => {
                                                    w("videoPause", k)
                                                },
                                                p = i => {
                                                    const n = t(i.currentTime);
                                                    if (T.debug({
                                                            caller: l,
                                                            name: "Analytics",
                                                            message: `onTimeUpdated payload ${JSON.stringify(i)} currentPlayhead ${N} roundedCurrentTime ${n}`
                                                        }), n === N) return;
                                                    N = n;
                                                    const a = e.getStatus().to;
                                                    [g.ENDED, g.ERROR, g.PAUSED, g.ADVERTISING_PAUSED].includes(a) || w("updatePlayHead", !k, {
                                                        playhead: N,
                                                        closedCaptionEnabled: U
                                                    })
                                                },
                                                u = e => {
                                                    let t;
                                                    switch ($ && ($ = !1), R++, e) {
                                                        case -1:
                                                            t = "post-roll";
                                                            break;
                                                        case 0:
                                                            t = "pre-roll";
                                                            break;
                                                        default:
                                                            t = "mid-roll-" + e
                                                    }
                                                    w("adBreakStart", k, {
                                                        name: t,
                                                        position: R
                                                    })
                                                },
                                                h = () => {
                                                    1 === R && ($ = !0), w("adBreakComplete", k)
                                                },
                                                m = e => {
                                                    const t = {
                                                        id: e.id,
                                                        length: e.duration,
                                                        position: e.position,
                                                        name: e.title
                                                    };
                                                    w("adStart", !k, t)
                                                },
                                                v = e => {
                                                    w("adComplete", !k, {
                                                        id: e
                                                    })
                                                },
                                                x = () => {
                                                    $ || _ || ($ = !0)
                                                },
                                                A = () => {
                                                    L && w("seekStart", k)
                                                },
                                                y = () => {
                                                    L && w("seekComplete", k)
                                                },
                                                f = async e => {
                                                    const {
                                                        show: t,
                                                        ...i
                                                    } = e, n = i;
                                                    n.length = ve(n.length), (null == P ? void 0 : P.isLive) && P.callSign && "audio" === P.format && (n.cbcContextChapter = {
                                                        show: null != t ? t : ""
                                                    }), await (async () => {
                                                        if (!(null == P ? void 0 : P.adOrder) && !(null == P ? void 0 : P.adUrl) || _) return;
                                                        let e = 0;
                                                        return new Promise((t => {
                                                            S = setInterval((() => {
                                                                e++, 3 !== e || R || (clearInterval(S), t()), $ && (clearInterval(S), t())
                                                            }), 1e3)
                                                        }))
                                                    })(), _ || (_ = !0), w("chapterStart", !k, n)
                                                },
                                                E = () => {
                                                    if (_) return !0 === M ? (M = !1, void(_ = !1)) : void w("chapterComplete", k)
                                                },
                                                I = e => {
                                                    U = !!e
                                                },
                                                w = (i, n, a) => {
                                                    if (!C || !D) return;
                                                    const o = { ...a
                                                    };
                                                    !0 === n && (o.playhead = t(e.media.getCurrentTime()));
                                                    try {
                                                        T.debug({
                                                            caller: l,
                                                            name: "Analytics",
                                                            message: `CBC.APP.SC.VideoHeartbeat.${i}(${D}, ${JSON.stringify(o)})`
                                                        }), C[i].call(window, D, o)
                                                    } catch (e) {
                                                        T.error({
                                                            caller: l,
                                                            name: "Analytics",
                                                            message: `Analytics track error: ${e}`,
                                                            critical: !1
                                                        })
                                                    }
                                                },
                                                k = !0,
                                                T = d();
                                            let C, S, P = null,
                                                D = null,
                                                L = !1,
                                                R = 0,
                                                M = !1,
                                                O = !1,
                                                _ = !1,
                                                $ = !1,
                                                N = 0,
                                                U = !1;
                                            return {
                                                init: e => {
                                                    if (T.debug({
                                                            caller: l,
                                                            name: "Analytics",
                                                            message: "Init"
                                                        }), !C) try {
                                                        C = window.CBC.APP.SC.VideoHeartbeat, D = C.init({
                                                            playerName: "wpp-phoenix-player",
                                                            comScore: !0
                                                        }), M = !1, O = !1
                                                    } catch (e) {
                                                        T.error({
                                                            caller: l,
                                                            name: "Analytics",
                                                            message: `Analytics initialization error: ${e}`,
                                                            critical: !1
                                                        })
                                                    }
                                                    C && i(!0), P = e
                                                },
                                                destroy: () => {
                                                    T.debug({
                                                        caller: l,
                                                        name: "Analytics",
                                                        message: "destroy"
                                                    }), !O && D && C.videoUnload(D), i(!1), clearInterval(S), P = null, L = !1, R = 0, M = !1, O = !1, _ = !1, N = 0, U = !1
                                                }
                                            }
                                        })(i), r = (e => {
                                            const t = () => {
                                                    l && clearTimeout(l), l = null
                                                },
                                                i = () => {
                                                    t(), e.media.play()
                                                },
                                                n = t => {
                                                    d === t && t !== xe.READY || (d = t, e.trigger(b.UPCOMING_LIVE_UPDATE, t))
                                                },
                                                a = e => {
                                                    const {
                                                        READY: i,
                                                        LOADING: a,
                                                        PLAYING: o
                                                    } = xe;
                                                    [i, a, o].includes(e.to) && (n(e.to), t())
                                                },
                                                o = e => {
                                                    "NO_COMPATIBLE_SOURCES" === e.name ? (() => {
                                                        var e;
                                                        t();
                                                        const a = Date.now(),
                                                            o = null !== (e = null == s ? void 0 : s.pubDate) && void 0 !== e ? e : a,
                                                            r = (o - a) / ge;
                                                        let d;
                                                        if (r > 5) {
                                                            const e = o - a - 3e5;
                                                            d = e < Ae ? e : Ae
                                                        } else r < 5 && r > 1 ? d = ge : r <= 1 && r > -15 ? d = 3e4 : r <= -15 && r > -30 ? d = ge : (d = null, n(xe.TIMEDOUT));
                                                        null !== d && (l = setTimeout(i, d), n(xe.SCHEDULED))
                                                    })() : (t(), n(xe.CRITICAL_ERROR))
                                                },
                                                r = t => {
                                                    const i = t ? "on" : "off";
                                                    e[i](b.STATUS_CHANGE, a), e[i](b.CRITICAL_ERROR, o)
                                                };
                                            let s = null,
                                                l = null,
                                                d = "",
                                                c = !1;
                                            return {
                                                init: e => {
                                                    (null == e ? void 0 : e.isLive) && (s = e, r(!0), n(xe.READY), c = !0)
                                                },
                                                destroy: () => {
                                                    c && (s = null, n(xe.READY), r(!1), t(), c = !1)
                                                }
                                            }
                                        })(i), u = (e => {
                                            const t = e => {
                                                    const {
                                                        duration: t,
                                                        currentTime: n
                                                    } = e;
                                                    t - 5 <= n && (h || (h = !0, i()))
                                                },
                                                i = async () => {
                                                    try {
                                                        const t = n(null == c ? void 0 : c.contentArea),
                                                            i = await a(),
                                                            o = await (0, ye.W9)(t, i, 14, !0);
                                                        if (!Array.isArray(o) || 0 === o.length) throw new Error("No recommendations in payload");
                                                        const r = (t => {
                                                            const i = e.localStorageManager.getWatchedMediaIds(),
                                                                n = t.filter((e => !!e.sourceId && !i.includes(e.sourceId)));
                                                            return n.length > 0 ? n : t
                                                        })(o);
                                                        p = r.slice(0, 3), e.trigger(b.RECOMMENDATIONS_AVAILABLE, p)
                                                    } catch (e) {
                                                        s.error({
                                                            caller: l,
                                                            name: "Recommendations Fetcher",
                                                            message: `Recommendations fetch error: ${e}`,
                                                            critical: !1
                                                        })
                                                    }
                                                },
                                                n = e => "News" === e ? "rec4you-short-form-news-video" : "rec4you-short-form-videos",
                                                a = async () => {
                                                    const e = fe(),
                                                        t = await e.getUser();
                                                    return t ? t.id : ""
                                                },
                                                o = e => {
                                                    e.from === g.ENDED && e.to === g.LOADING && h && (h = !1)
                                                },
                                                r = i => {
                                                    const n = i ? "on" : "off";
                                                    e[n](b.PLAYBACK_THROTTLED_TIMEUPDATED, t), e[n](b.STATUS_CHANGE, o)
                                                },
                                                s = d();
                                            let c = null,
                                                p = null,
                                                u = !1,
                                                h = !1;
                                            return {
                                                init: e => {
                                                    (null == e ? void 0 : e.enableRecommendations) && !(null == e ? void 0 : e.isLive) && "video" === (null == e ? void 0 : e.format) && (c = e, r(!0), u = !0)
                                                },
                                                destroy: () => {
                                                    u && (c = null, r(!1), p = null, u = !1, h = !1)
                                                }
                                            }
                                        })(i), h = (t => {
                                            const i = s(),
                                                n = () => {
                                                    const t = null == c ? void 0 : c.assets[0].key,
                                                        n = new URLSearchParams(null == t ? void 0 : t.split("?")[1]).get("idMedia");
                                                    (async t => {
                                                        var n;
                                                        const a = i.get("MEDIA_NET_PLAYBACK_LOG_URL") || "https://services.radio-canada.ca/music/dj/v1/playbacklog",
                                                            s = {
                                                                "Content-Type": "application/json"
                                                            };
                                                        try {
                                                            const i = {
                                                                    headers: s,
                                                                    method: "POST",
                                                                    body: JSON.stringify(t)
                                                                },
                                                                d = await o(a, i);
                                                            if (d.status === e.ERROR) {
                                                                const e = null !== (n = d.response.message) && void 0 !== n ? n : "Unknown Error";
                                                                throw new Error(`Post Error: ${e}`)
                                                            }
                                                            r.debug({
                                                                caller: l,
                                                                name: "MediaNet Playback Log",
                                                                message: `log success: WebRadioId ${u}, UserId: ${null==h?void 0:h.mediaNetUserId}`
                                                            })
                                                        } catch (e) {
                                                            return r.error({
                                                                caller: l,
                                                                name: "MediaNet Playback Log",
                                                                message: `MediaNet Playback Log Error: ${e.message}`,
                                                                critical: !1
                                                            }), null
                                                        }
                                                    })({
                                                        userId: null == h ? void 0 : h.mediaNetUserId,
                                                        trackId: parseInt(n),
                                                        sourceId: 2,
                                                        webRadioId: u
                                                    })
                                                },
                                                a = e => {
                                                    t[e ? "on" : "off"](b.PLAYBACK_INITIALPLAY, n)
                                                },
                                                r = d();
                                            let c = null,
                                                p = null,
                                                u = null,
                                                h = null;
                                            return {
                                                init: (e, t) => {
                                                    var i, n, o, s, d, m;
                                                    h = t, c = e, p = (null === (n = null === (i = null == c ? void 0 : c.assets) || void 0 === i ? void 0 : i[0]) || void 0 === n ? void 0 : n.type) || null, u = null !== (m = null === (d = null === (s = null === (o = null == c ? void 0 : c.assets) || void 0 === o ? void 0 : o[0]) || void 0 === s ? void 0 : s.options) || void 0 === d ? void 0 : d.mediaNetWebRadioId) && void 0 !== m ? m : null, r.debug({
                                                        caller: l,
                                                        name: "MediaNet Playback Log",
                                                        message: `init: WebRadioId ${u}, UserId: ${null==t?void 0:t.mediaNetUserId}`
                                                    }), ((null == h ? void 0 : h.mediaNetUserId) && "medianet" === p && u || (r.error({
                                                        caller: l,
                                                        name: "MediaNet Playback Log",
                                                        message: `failed validation: assetType ${p}, WebRadioId ${u}, UserId: ${null==h?void 0:h.mediaNetUserId}`,
                                                        critical: !1
                                                    }), 0)) && a(!0)
                                                },
                                                destroy: () => {
                                                    c = null, p = null, u = null, h = null, a(!1)
                                                }
                                            }
                                        })(i), m.set("ChapterManager", n), m.set("Analytics", a), m.set("UpcomingLiveManager", r), m.set("RecommendationsFetcher", u), m.set("MediaNetPlaybackLog", h)), null == n || n.destroy(), null == n || n.init(c), null == a || a.destroy(), null == a || a.init(c), null == r || r.destroy(), null == r || r.init(c), null == u || u.destroy(), null == u || u.init(c), null == h || h.destroy(), null == h || h.init(c, t), p = !0, i.localStorageManager.setCurrentMedia(c)
                                    },
                                    r = () => {
                                        const e = Array.from(m.values());
                                        e && e.forEach((e => {
                                            null == e || e.destroy()
                                        })), m.clear()
                                    };
                                let c = null != i ? i : null,
                                    p = !1;
                                const u = ue(i);
                                await (async e => {
                                    const t = (t, n) => {
                                            e.isAutoplayAllowed = t, e.autoplayRequiresMuted = n, t || (e.autoPlay = !1, i.debug({
                                                caller: "Utils",
                                                name: "Autoplay Support",
                                                message: "config.autoPlay was set to false"
                                            }))
                                        },
                                        i = d(),
                                        n = !!(null !== (a = e.muted) && void 0 !== a ? a : (() => {
                                            let e = null;
                                            const t = null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem("wpp-phoenix-core");
                                            if (t) try {
                                                e = JSON.parse(t).muted
                                            } catch (e) {
                                                i.debug({
                                                    caller: "Utils",
                                                    name: "Autoplay Support",
                                                    message: `error with parsing localStorage JSON: ${e}`
                                                })
                                            }
                                            return e
                                        })());
                                    var a;
                                    const o = document.createElement("video");
                                    o.autoplay = !0, o.playsInline = !0, n && (o.volume = 0, o.muted = !0), o.src = "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAJ21kYXQBQCKAo3hQhS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vAAAC8G1vb3YAAABsbXZoZAAAAAAAAAAAAAAAAAAAA+gAAAALAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIadHJhawAAAFx0a2hkAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAALAAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAJGVkdHMAAAAcZWxzdAAAAAAAAAAB////9QAACAAAAQAAAAABkm1kaWEAAAAgbWRoZAAAAAAAAAAAAAAAAAABdwAAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAT1taW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAQFzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAAAAAAAAAAADNlc2RzAAAAAAOAgIAiAAEABICAgBRAFQAAAAAAWtIAAFrSBYCAgAIQCAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAfAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAsAAAAGnNncGQBAAAAcm9sbAAAAAIAAAAB//8AAAAcc2JncAAAAAByb2xsAAAAAQAAAAEAAAABAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ny44My4xMDA=";
                                    try {
                                        await Promise.race([o.play(), new Promise(((e, t) => setTimeout(t, 1500)))]), t(!0, n), i.debug({
                                            caller: "Utils",
                                            name: "Autoplay Support",
                                            message: "Autoplay is supported"
                                        })
                                    } catch (e) {
                                        t(!1, !0), i.debug({
                                            caller: "Utils",
                                            name: "Autoplay Support",
                                            message: "Autoplay is not supported"
                                        })
                                    }
                                })(t);
                                const h = pe(t, u),
                                    m = new Map,
                                    [v, x] = (e => {
                                        const t = e;
                                        return [t, { ...e,
                                            trigger: void 0,
                                            media: n(t)
                                        }]
                                    })(h);
                                return a(v), { ...x,
                                    destroy: () => {
                                        const e = v.destroy;
                                        return p = !1, c = null, r(), e()
                                    }
                                }
                            },
                            Ie = e => {
                                const t = new Map;
                                return {
                                    createPlayer: async (i, n) => {
                                        const a = s();
                                        await a.seed(null == e ? void 0 : e.env), d(i.debug).debug({
                                            name: "Phoenix",
                                            message: "Create Player"
                                        });
                                        const o = await Ee(i, n);
                                        return t.set(o.uid, o), o
                                    },
                                    getPlayers: e => e && t.get(e) || Array.from(t.values()),
                                    destroyPlayer: e => {
                                        var i;
                                        null === (i = t.get(e)) || void 0 === i || i.destroy(), t.delete(e)
                                    }
                                }
                            }
                    })(), n.default
                })()
            }(o);
            const r = a(o.exports);
            var s, l, d;
            ! function(e) {
                e.READY = "READY", e.LOADING = "LOADING", e.ERROR = "ERROR", e.PLAYING = "PLAYING", e.ADVERTISING = "ADVERTISING", e.ADVERTISING_PAUSED = "ADVERTISING_PAUSED", e.PAUSED = "PAUSED", e.ENDED = "ENDED"
            }(s || (s = {})),
            function(e) {
                e.CRITICAL_ERROR = "CRITICAL_ERROR", e.BUFFER_UPDATED = "BUFFER_UPDATED", e.LIVE_SYNC_POSITION_CHANGE = "LIVE_SYNC_POSITION_CHANGE", e.FULL_SCREEN_CHANGE = "FULL_SCREEN_CHANGE", e.MEDIA_ASPECT_RATIO_AVAILABLE = "MEDIA_ASPECT_RATIO_AVAILABLE", e.STATUS_CHANGE = "STATUS_CHANGE", e.ASSET_LOADED = "ASSET_LOADED", e.PLAYBACK_INITIALPLAY = "PLAYBACK_INITIALPLAY", e.PLAYBACK_TIMEUPDATED = "PLAYBACK_TIMEUPDATED", e.PLAYBACK_THROTTLED_TIMEUPDATED = "PLAYBACK_THROTTLED_TIMEUPDATED", e.PLAYBACK_SEEKING = "PLAYBACK_SEEKING", e.PLAYBACK_SEEKED = "PLAYBACK_SEEKED", e.PLAYBACK_VOLUMECHANGE = "PLAYBACK_VOLUMECHANGE", e.PLAYBACK_MUTEDCHANGE = "PLAYBACK_MUTEDCHANGE", e.AD_ERRORED = "AD_ERRORED", e.AD_LOADED = "AD_LOADED", e.AD_STARTED = "AD_STARTED", e.AD_COMPLETED = "AD_COMPLETED", e.AD_BREAK_STARTED = "AD_BREAK_STARTED", e.AD_BREAK_COMPLETED = "AD_BREAK_COMPLETED", e.AD_REMAINING_TIME_UPDATED = "AD_REMAINING_TIME_UPDATED", e.AD_FIRST_QUARTILE = "AD_FIRST_QUARTILE", e.AD_MIDPOINT = "AD_MIDPOINT", e.AD_THIRD_QUARTILE = "AD_THIRD_QUARTILE", e.AD_SKIPPED = "AD_SKIPPED", e.TEXTTRACK_AVAILABILITY_CHANGE = "TEXTTRACK_AVAILABILITY_CHANGE", e.AUDIOTRACK_AVAILABILITY_CHANGE = "AUDIOTRACK_AVAILABILITY_CHANGE", e.HLSJS_PARSE_FRAG_METADATA = "HLSJS_PARSE_FRAG_METADATA", e.CHAPTER_START = "CHAPTER_START", e.CHAPTER_COMPLETE = "CHAPTER_COMPLETE", e.UPCOMING_LIVE_UPDATE = "UPCOMING_LIVE_UPDATE", e.RECOMMENDATIONS_AVAILABLE = "RECOMMENDATIONS_AVAILABLE"
            }(l || (l = {})),
            function(e) {
                e.PLAY = "play", e.PAUSE = "pause", e.STOP = "stop", e.VOLUME_UP = "volume-up", e.VOLUME_DOWN = "volume-down", e.SKIP_FORWARD = "skip-forward", e.SKIP_BACKWARD = "skip-backward", e.HIDDEN = "hidden", e.MUTE = "mute"
            }(d || (d = {}));
            const c = {
                    CLIENTSIDE: "CLIENTSIDE",
                    DYNAMIC: "DYNAMIC"
                },
                p = {
                    SPACE: "Space",
                    ARROWUP: "ArrowUp",
                    ARROWDOWN: "ArrowDown",
                    ARROWRIGHT: "ArrowRight",
                    ARROWLEFT: "ArrowLeft",
                    ENTER: "Enter",
                    ESCAPE: "Escape",
                    TAB: "Tab",
                    KEYM: "KeyM",
                    KEYF: "KeyF",
                    KEYC: "KeyC"
                },
                u = .1,
                h = 5,
                m = 5e3,
                v = Object.assign(Object.assign({}, s), {
                    SCHEDULED: "SCHEDULED",
                    TIMEDOUT: "TIMEDOUT",
                    CRITICAL_ERROR: "CRITICAL_ERROR"
                }),
                b = "2.24.1",
                g = {
                    assets: null,
                    format: null
                },
                x = 1e3,
                A = 6e4,
                y = 3e5,
                f = 864e5,
                E = (0, n.L)(),
                I = e => {
                    if (void 0 === e) return;
                    let t = e >= 0 ? "" : "-";
                    const i = Math.floor(Math.abs(parseFloat(e))),
                        n = Math.floor(i / 3600),
                        a = Math.floor(i / 60 % 60),
                        o = Math.round(i % 60);
                    return n ? (t += n + ":", t += (a < 10 ? "0" + a : a) + ":") : t += a + ":", t += o < 10 ? "0" + o : o, t
                },
                w = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    const i = new Date(e),
                        n = i.getHours(),
                        a = i.getMinutes(),
                        o = i.getSeconds();
                    let r;
                    r = 0 === n ? 12 : n > 0 && n <= 12 ? n : n - 12;
                    const s = n >= 12 ? "pm" : "am";
                    let l = a.toString();
                    a < 10 && (l = "0" + a);
                    let d = o.toString();
                    o < 10 && (d = "0" + o);
                    return r + ":" + l + (t ? ":" + d : s)
                },
                k = e => {
                    const t = new Date(e);
                    return t.toLocaleString(E.getLanguage(), {
                        month: "short"
                    }) + " " + t.getDate() + ", " + t.getFullYear()
                },
                T = (e, t, i) => {
                    const n = Date.now();
                    "string" === typeof e && (e = parseInt(e)), !Number.isNaN(e) && Number.isFinite(e) || (e = n);
                    const a = (e, t) => "fr" === E.getLanguage() ? `${E.ago} ${e} ${t}` : `${e} ${t} ${E.ago}`,
                        o = E.now,
                        r = n < e,
                        s = Math.abs(n - e) / 1e3,
                        l = [{
                            label: E.year,
                            size: 31536e3
                        }, {
                            label: E.month,
                            size: 2592e3
                        }, {
                            label: E.day,
                            size: 86400
                        }, {
                            label: E.hour,
                            size: 3600
                        }, {
                            label: E.minute,
                            size: 60
                        }];
                    let d;
                    t && l.push({
                        label: E.second,
                        size: 1
                    });
                    do {
                        if (d = l[l.indexOf(d) + 1], void 0 === d) return o
                    } while (s < d.size);
                    const c = Math.round(s / d.size),
                        p = d.label + (c > 1 ? "s" : "");
                    return r ? (u = c, h = p, i ? `${E.in} ${u} ${h}` : `${u} ${h}`) : ((e, t) => i ? `${E.started} ${a(e,t)}` : a(e, t))(c, p);
                    var u, h
                },
                C = (e, t) => 10 * Math.round((e - t) / 10),
                S = (e, t) => Math.abs(e - t) <= 40
        },
        39809: (e, t, i) => {
            i.r(t), i.d(t, {
                options_menu_back_btn: () => o
            });
            var n = i(41632),
                a = i(51329);
            const o = class {
                constructor(e) {
                    (0, n.r)(this, e), this.locale = (0, a.L)()
                }
                componentDidLoad() {
                    this.backbutton.focus()
                }
                handleClick() {
                    this.publicAPI.userInteractionsObserver.notifySubscribers({
                        interactionOwner: "options-menu-back-btn",
                        interactionName: "back",
                        interactionType: "click"
                    })
                }
                render() {
                    return (0, n.h)("button", {
                        key: "17fc0d64c6bef11b73cd87602aec659294ce02af",
                        class: "phx-options-menulist-back-button",
                        type: "button",
                        "data-name": "back button",
                        "data-value": "menuback",
                        "aria-label": this.locale.backToPreviousMenu,
                        ref: e => this.backbutton = e
                    }, (0, n.h)("svg", {
                        key: "d3f5b8aedb190fe3b097418203dcceb9612453de",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        focusable: "false",
                        role: "presentation",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, n.h)("rect", {
                        key: "72becdb9c266d5d11fce7dda51ff62828c70ba92",
                        width: "24",
                        height: "24",
                        rx: "12"
                    }), (0, n.h)("path", {
                        key: "a81c4878cb720be45e7a5c703ff9aa985b98cb88",
                        d: "M14.9099 6.70998C14.5199 6.31998 13.8899 6.31998 13.4999 6.70998L8.90993 11.3C8.51993 11.69 8.51993 12.32 8.90993 12.71L13.4999 17.3C13.8899 17.69 14.5199 17.69 14.9099 17.3C15.2999 16.91 15.2999 16.28 14.9099 15.89L11.0299 12L14.9099 8.11998C15.2899 7.72998 15.2899 7.08998 14.9099 6.70998Z",
                        fill: "white"
                    })), (0, n.h)("strong", {
                        key: "a6aeb8672c9770c6492e4ae31817b382bb08f93a"
                    }, this.menuTitle))
                }
            };
            o.style = "button.phx-options-menulist-back-button{display:flex;background:none;width:100%;padding:8px;border:0;border-bottom:1px solid #585858;cursor:pointer}button.phx-options-menulist-back-button>svg{pointer-events:none;border-radius:4px}button.phx-options-menulist-back-button strong{pointer-events:none;color:#fff;font-size:0.8rem;font-weight:700;line-height:24px;margin-left:4px}button.phx-options-menulist-back-button:hover>svg{background-color:#353535}button.phx-options-menulist-back-button:focus{outline:2px solid #EE0000;outline-offset:-1px;border-radius:8px 8px 0 0}"
        },
        39572: (e, t, i) => {
            i.r(t), i.d(t, {
                phoenix_player: () => v
            });
            var n = i(41632),
                a = i(97456),
                o = i(28545);
            i(51329);
            const r = (e, t) => {
                    var i;
                    let n = e;
                    const o = {
                            interactionOwner: null !== (i = t.dataset.ownerName) && void 0 !== i ? i : t.tagName,
                            interactionType: "",
                            interactionName: ""
                        },
                        r = () => {
                            var e, t;
                            return n.getStatus().to !== a.S.PLAYING && (null === (e = n.mediaData) || void 0 === e ? void 0 : e.isLive) && (null === (t = n.mediaData) || void 0 === t ? void 0 : t.pubDate) > Date.now()
                        },
                        s = e => {
                            var t;
                            if ((e => {
                                    var t, i;
                                    return "video" !== (null === (t = n.mediaData) || void 0 === t ? void 0 : t.format) || "DIV" !== e.target.tagName || !!r() || !!(null === (i = e.target.classList) || void 0 === i ? void 0 : i.contains("phx-error-overlay"))
                                })(e)) return;
                            e.preventDefault(), o.interactionName = "", o.interactionType = null !== (t = e.constructor.name) && void 0 !== t ? t : "";
                            const i = n.media.canSeek();
                            switch (n.getStatus().to) {
                                case a.S.PLAYING:
                                case a.S.ADVERTISING:
                                    i ? (n.media.pause(), o.interactionName = a.I.PAUSE) : (n.media.stop(), o.interactionName = a.I.STOP);
                                    break;
                                case a.S.ENDED:
                                case a.S.PAUSED:
                                case a.S.ADVERTISING_PAUSED:
                                    n.media.play(), o.interactionName = a.I.PLAY
                            }
                            o.interactionName && n.userInteractionsObserver.notifySubscribers(Object.assign({}, o))
                        },
                        l = e => {
                            if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.isComposing) && !r()) switch (e.code) {
                                case a.K.SPACE:
                                    s(e);
                                    break;
                                case a.K.ARROWUP:
                                case a.K.ARROWDOWN:
                                    (e => {
                                        var t;
                                        if ("DIV" !== e.target.tagName) return;
                                        e.preventDefault(), o.interactionType = null !== (t = e.constructor.name) && void 0 !== t ? t : "";
                                        const i = e.code === a.K.ARROWUP ? a.V : -a.V,
                                            r = Math.round(10 * (n.media.getVolume() + i)) / 10;
                                        r > 1 || r < 0 || (o.interactionName = i > 0 ? a.I.VOLUME_UP : a.I.VOLUME_DOWN, n.media.setVolume(r), n.userInteractionsObserver.notifySubscribers(Object.assign({}, o)))
                                    })(e);
                                    break;
                                case a.K.ARROWLEFT:
                                case a.K.ARROWRIGHT:
                                    (e => {
                                        var t;
                                        const i = n.getStatus().to;
                                        if ("DIV" !== e.target.tagName || i === a.S.ADVERTISING || i === a.S.ADVERTISING_PAUSED) return;
                                        e.preventDefault(), o.interactionType = null !== (t = e.constructor.name) && void 0 !== t ? t : "";
                                        const r = e.code === a.K.ARROWLEFT ? -a.a : a.a;
                                        let s = n.media.getCurrentTime() + r;
                                        s < 0 && (s = 0), o.interactionName = r > 0 ? a.I.SKIP_FORWARD : a.I.SKIP_BACKWARD, n.media.setCurrentTime(s), n.userInteractionsObserver.notifySubscribers(Object.assign({}, o))
                                    })(e);
                                    break;
                                case a.K.KEYM:
                                    (e => {
                                        var t, i, r;
                                        const s = null === (t = n.media) || void 0 === t ? void 0 : t.getMuted();
                                        o.interactionName = s ? a.I.VOLUME_UP : a.I.MUTE, o.interactionType = null !== (i = e.constructor.name) && void 0 !== i ? i : "", null === (r = n.media) || void 0 === r || r.setMuted(!s), n.userInteractionsObserver.notifySubscribers(Object.assign({}, o))
                                    })(e);
                                    break;
                                case a.K.KEYF:
                                    (e => {
                                        var t;
                                        o.interactionType = null !== (t = e.constructor.name) && void 0 !== t ? t : "", o.interactionName = "toggle-fullscreen", n.userInteractionsObserver.notifySubscribers(Object.assign({}, o))
                                    })(e);
                                    break;
                                case a.K.KEYC:
                                    (e => {
                                        var t;
                                        o.interactionType = null !== (t = e.constructor.name) && void 0 !== t ? t : "", o.interactionName = "toggle-captions", n.userInteractionsObserver.notifySubscribers(Object.assign({}, o))
                                    })(e)
                            }
                        };
                    return t.addEventListener("keydown", l), t.addEventListener("click", s), {
                        setPublicAPI: e => {
                            n = e
                        },
                        destroy: () => {
                            t.removeEventListener("keydown", l), t.removeEventListener("click", s)
                        }
                    }
                },
                s = 344,
                l = 575,
                d = 720,
                c = 960,
                p = e => {
                    let t = 1.778;
                    return e.aspectRatio && !Number.isNaN(e.aspectRatio) && (t = e.aspectRatio), e.useMediaAspectRatio && e.mediaAspectRatio && !Number.isNaN(e.mediaAspectRatio) && (t = e.mediaAspectRatio), t
                },
                u = e => {
                    if (e.height && !Number.isNaN(e.height)) return e.height;
                    const t = p(e);
                    return Math.round(e.width / t)
                },
                h = e => {
                    const t = p(e);
                    return Math.round(e.height * t)
                },
                m = e => {
                    const t = p(e);
                    let i = Math.round(e.containerWidth / t);
                    return e.maxHeight && !Number.isNaN(e.maxHeight) && i > e.maxHeight && (i = e.maxHeight), i
                },
                v = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.statusChanged = (0, n.c)(this, "statusChanged", 7), this.playerInitialized = (0, n.c)(this, "playerInitialized", 7), this.version = a.P, this.isInitialized = !1, this.isAdvertising = !1, this.wasDisconnected = !1, this.onStatusChange = e => {
                            this.playerStatus = e.to, this.statusChanged.emit(e)
                        }, this.onObserverUpdate = e => {
                            var t, i;
                            this.playerStatus !== e.status.to && (this.onStatusChange(e.status), this.isAdvertising = null === (i = null === (t = e.status) || void 0 === t ? void 0 : t.to) || void 0 === i ? void 0 : i.startsWith("ADVER")), this.mediaAspectRatio !== e.aspectRatio && (this.mediaAspectRatio = e.aspectRatio, this.setSize())
                        }, this.initializePlayer = async () => {
                            var e, t;
                            try {
                                const i = (0, a.b)(this.settings),
                                    n = await i.createPlayer(Object.assign(Object.assign({}, this.config), {
                                        containerNode: this.containerNode
                                    }), this.mediaData),
                                    s = (e => {
                                        var t, i;
                                        const n = new Set,
                                            r = {
                                                isMediaLoading: !0,
                                                isSeekable: null !== (t = e.media.canSeek()) && void 0 !== t && t,
                                                currentTime: null !== (i = e.media.getCurrentTime()) && void 0 !== i ? i : null,
                                                duration: null,
                                                seekableRange: {
                                                    start: 0,
                                                    end: 0
                                                },
                                                liveSyncPosition: 0,
                                                isAtLiveEdge: !0,
                                                bufferData: {
                                                    value: 0,
                                                    max: 0
                                                },
                                                status: Object.assign({}, e.getStatus()),
                                                isClientSideAdvertising: !1,
                                                volume: 0,
                                                upcomingLiveStatus: a.L.READY,
                                                recommendations: null,
                                                aspectRatio: null
                                            },
                                            s = () => {
                                                for (const e of n.values()) e(Object.assign({}, r))
                                            },
                                            l = new Map([
                                                [a.E.PLAYBACK_INITIALPLAY, () => {
                                                    r.isMediaLoading = !0, r.duration = null, r.currentTime = e.media.getCurrentTime(), r.isSeekable = e.media.canSeek(), r.volume = e.media.getVolume(), r.recommendations = null, s()
                                                }],
                                                [a.E.LIVE_SYNC_POSITION_CHANGE, e => {
                                                    r.liveSyncPosition = e;
                                                    const t = Math.max(e, r.seekableRange.end);
                                                    r.isAtLiveEdge = (0, a.i)(r.currentTime, t), s()
                                                }],
                                                [a.E.PLAYBACK_TIMEUPDATED, e => {
                                                    r.duration !== e.duration && (r.duration = e.duration);
                                                    const t = Math.max(r.liveSyncPosition, r.seekableRange.end);
                                                    r.isAtLiveEdge = (0, a.i)(e.currentTime, t), r.currentTime = e.currentTime, s()
                                                }],
                                                [a.E.BUFFER_UPDATED, t => {
                                                    const i = e.media.canSeek();
                                                    i !== r.isSeekable && (r.isSeekable = i), r.isMediaLoading && (r.isMediaLoading = !1);
                                                    const n = e.media.getCurrentTime(),
                                                        o = t.seekable,
                                                        l = Object.assign({}, r.bufferData);
                                                    if (i) {
                                                        const e = t.buffers,
                                                            i = Math.max(0, o.end - o.start);
                                                        for (let t = 0; t < (null === e || void 0 === e ? void 0 : e.length); t++) {
                                                            const a = e.start(t),
                                                                o = e.end(t);
                                                            if (n >= a && n <= o) {
                                                                l.value = o, l.max = i;
                                                                break
                                                            }
                                                        }
                                                    }
                                                    const d = Math.max(r.liveSyncPosition, o.end);
                                                    r.isAtLiveEdge = (0, a.i)(n, d), r.currentTime = n, r.seekableRange = o, r.bufferData = l, s()
                                                }],
                                                [a.E.STATUS_CHANGE, e => {
                                                    r.status.to = e.to, r.status.from = e.from, r.status.data = Object.assign({}, e.data), r.isClientSideAdvertising = (0, o.i)(e), s()
                                                }],
                                                [a.E.UPCOMING_LIVE_UPDATE, e => {
                                                    r.upcomingLiveStatus = e, s()
                                                }],
                                                [a.E.PLAYBACK_VOLUMECHANGE, e => {
                                                    r.volume = e, s()
                                                }],
                                                [a.E.RECOMMENDATIONS_AVAILABLE, e => {
                                                    r.recommendations = e, s()
                                                }],
                                                [a.E.MEDIA_ASPECT_RATIO_AVAILABLE, e => {
                                                    r.aspectRatio = e, s()
                                                }]
                                            ]);
                                        return (() => {
                                            for (const [t, i] of l.entries()) e.on(t, i)
                                        })(), {
                                            subscribe: e => {
                                                n.has(e) || (n.add(e), e(Object.assign({}, r)))
                                            },
                                            unsubscribe: e => {
                                                n.delete(e)
                                            },
                                            destroy: () => {
                                                n.clear();
                                                for (const [t, i] of l.entries()) e.off(t, i)
                                            }
                                        }
                                    })(n),
                                    l = (() => {
                                        const e = new Set;
                                        return {
                                            subscribe: t => {
                                                e.add(t)
                                            },
                                            unsubscribe: t => {
                                                e.delete(t)
                                            },
                                            notifySubscribers: t => {
                                                for (const i of e.values()) i(t)
                                            },
                                            destroy: () => {
                                                e.clear()
                                            }
                                        }
                                    })();
                                this.publicAPI = Object.assign(Object.assign({}, n), {
                                    mediaData: this.mediaData,
                                    mediaStateObserver: s,
                                    userInteractionsObserver: l,
                                    controlsConfig: {
                                        hideFullscreenBtn: !1
                                    }
                                }), this.publicAPI.mediaStateObserver.subscribe(this.onObserverUpdate), this.eventsManager = r(this.publicAPI, this.containerNode), this.playerStatus || (this.playerStatus = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.getStatus().to), this.isInitialized = !0, (null === (t = this.config) || void 0 === t ? void 0 : t.debug) && console.log(`[Phoenix Player] PhoenixPlayer -> Version: ${this.version}`)
                            } catch (i) {
                                console.error(`Unable to createPlayer (v${this.version}): `, i)
                            }
                        }, this.onContainerResize = e => {
                            var t, i, n, a, o, r, s, l, d, c;
                            this.containerWidth = (null === (n = null === (i = null === (t = null === e || void 0 === e ? void 0 : e[0]) || void 0 === t ? void 0 : t.contentBoxSize) || void 0 === i ? void 0 : i[0]) || void 0 === n ? void 0 : n.inlineSize) || (null === (o = null === (a = null === e || void 0 === e ? void 0 : e[0]) || void 0 === a ? void 0 : a.contentRect) || void 0 === o ? void 0 : o.width) || 0, this.containerHeight = (null === (l = null === (s = null === (r = null === e || void 0 === e ? void 0 : e[0]) || void 0 === r ? void 0 : r.contentBoxSize) || void 0 === s ? void 0 : s[0]) || void 0 === l ? void 0 : l.blockSize) || (null === (c = null === (d = null === e || void 0 === e ? void 0 : e[0]) || void 0 === d ? void 0 : d.contentRect) || void 0 === c ? void 0 : c.height) || 0, this.setSize()
                        }, this.resizeObserver = "ResizeObserver" in window ? new ResizeObserver(this.onContainerResize) : null, this.getStyle = () => {
                            var e;
                            const t = {};
                            return this.width && (t.width = `${Math.round(this.width)}px`), this.height && "audio" !== (null === (e = this.mediaData) || void 0 === e ? void 0 : e.format) && (t.height = `${Math.round(this.height)}px`), t
                        }, this.getSizeClass = () => this.width < s ? "phx-extra-small" : this.width >= s && this.width < l ? "phx-small" : this.width >= l && this.width < d ? "phx-medium" : this.width >= d && this.width < c ? "phx-large" : this.width >= c ? "phx-extra-large" : "", this.renderAdOverlay = () => {
                            if (this.isAdvertising) return (0, n.h)("div", {
                                class: "phoenix-ad-ui"
                            }, (0, n.h)("ad-ui-overlay", {
                                publicAPI: this.publicAPI
                            }))
                        }, this.renderUI = () => this.isInitialized ? (0, n.h)(n.F, null, (0, n.h)("video-ui", {
                            publicAPI: this.publicAPI,
                            containerNode: this.containerNode
                        }), (0, n.h)("audio-ui", {
                            publicAPI: this.publicAPI
                        })) : null
                    }
                    async play() {
                        var e, t, i;
                        null === (i = null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.play) || void 0 === i || i.call(t)
                    }
                    async load() {
                        var e, t, i, n, o, r;
                        null === (i = null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.load) || void 0 === i || i.call(t), this.publicAPI = Object.assign(Object.assign({}, this.publicAPI), {
                            mediaData: a.c
                        }), null === (o = null === (n = this.resizeObserver) || void 0 === n ? void 0 : n.unobserve) || void 0 === o || o.call(n, null === (r = this.phoenixPlayerNode) || void 0 === r ? void 0 : r.parentElement)
                    }
                    async unload() {
                        var e, t, i;
                        null === (i = null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.unload) || void 0 === i || i.call(t), this.publicAPI = Object.assign(Object.assign({}, this.publicAPI), {
                            mediaData: a.c
                        }), this.eventsManager.setPublicAPI(this.publicAPI)
                    }
                    async stop() {
                        var e, t, i;
                        null === (i = null === (t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.stop) || void 0 === i || i.call(t)
                    }
                    async setAdsInactive(e) {
                        var t, i, n;
                        null === (n = null === (i = null === (t = this.publicAPI) || void 0 === t ? void 0 : t.media) || void 0 === i ? void 0 : i.setImaSdkInactive) || void 0 === n || n.call(i, e)
                    }
                    async updateSizeConfig(e) {
                        const {
                            useMediaAspectRatio: t = this.sizeConfig.useMediaAspectRatio,
                            aspectRatio: i = this.sizeConfig.aspectRatio,
                            width: n = this.sizeConfig.width,
                            height: a = this.sizeConfig.height,
                            maxHeight: o = this.sizeConfig.maxHeight
                        } = e;
                        this.sizeConfig = Object.assign(Object.assign({}, this.sizeConfig), {
                            useMediaAspectRatio: t,
                            aspectRatio: i,
                            width: n,
                            height: a,
                            maxHeight: o
                        }), this.setSize()
                    }
                    async updateControlsConfig(e) {
                        const {
                            hideFullscreenBtn: t
                        } = e || {};
                        this.publicAPI.controlsConfig.hideFullscreenBtn = null !== t && void 0 !== t && t
                    }
                    async destroy() {
                        var e, t, i, n, a, o, r, s;
                        null === (e = this.eventsManager) || void 0 === e || e.destroy(), null === (i = null === (t = this.publicAPI) || void 0 === t ? void 0 : t.mediaStateObserver) || void 0 === i || i.unsubscribe(this.onObserverUpdate), null === (a = null === (n = this.publicAPI) || void 0 === n ? void 0 : n.mediaStateObserver) || void 0 === a || a.destroy(), null === (r = null === (o = this.publicAPI) || void 0 === o ? void 0 : o.userInteractionsObserver) || void 0 === r || r.destroy(), null === (s = this.publicAPI) || void 0 === s || s.destroy()
                    }
                    async componentDidLoad() {
                        await this.initializePlayer()
                    }
                    componentWillRender() {
                        this.setSize()
                    }
                    componentDidRender() {
                        var e;
                        !0 !== this.isInitialized && this.shouldObserveResize() && (null === (e = this.resizeObserver) || void 0 === e || e.observe(this.phoenixPlayerNode.parentElement))
                    }
                    shouldObserveResize() {
                        var e, t;
                        return !((null === (e = this.sizeConfig) || void 0 === e ? void 0 : e.width) || (null === (t = this.sizeConfig) || void 0 === t ? void 0 : t.height))
                    }
                    setVersion() {
                        this.version = a.P
                    }
                    connectedCallback() {
                        var e;
                        this.setVersion();
                        const {
                            useMediaAspectRatio: t = null,
                            aspectRatio: i = null,
                            width: n = null,
                            height: a = null,
                            maxHeight: o = null
                        } = this.config || {};
                        this.sizeConfig = {
                            useMediaAspectRatio: t,
                            aspectRatio: i,
                            width: n,
                            height: a,
                            maxHeight: o
                        }, this.wasDisconnected && (this.wasDisconnected = !1, null === (e = this.resizeObserver) || void 0 === e || e.observe(this.phoenixPlayerNode.parentElement));
                        const r = (e => {
                            const t = getComputedStyle(e),
                                i = e.offsetWidth,
                                n = e.offsetHeight,
                                a = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
                                o = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom);
                            return {
                                width: i - a - (parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth)),
                                height: n - o - (parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth))
                            }
                        })(this.phoenixPlayerNode.parentElement);
                        this.containerHeight = r.height, this.containerWidth = r.width
                    }
                    disconnectedCallback() {
                        var e, t;
                        this.wasDisconnected = !0, null === (e = this.resizeObserver) || void 0 === e || e.unobserve(this.phoenixPlayerNode.parentElement), null === (t = this.resizeObserver) || void 0 === t || t.disconnect()
                    }
                    setSize() {
                        const e = (e => e.width && !Number.isNaN(e.width) ? {
                            width: e.width,
                            height: u(e)
                        } : e.height && !Number.isNaN(e.height) ? {
                            width: h(e),
                            height: e.height
                        } : e.maxHeight || e.aspectRatio || e.useMediaAspectRatio || !e.containerHeight ? {
                            width: e.containerWidth,
                            height: m(e)
                        } : {
                            width: e.containerWidth,
                            height: e.containerHeight
                        })({
                            width: this.sizeConfig.width,
                            height: this.sizeConfig.height,
                            aspectRatio: this.sizeConfig.aspectRatio,
                            useMediaAspectRatio: this.sizeConfig.useMediaAspectRatio,
                            containerWidth: this.containerWidth,
                            containerHeight: this.containerHeight,
                            mediaAspectRatio: this.mediaAspectRatio,
                            maxHeight: this.sizeConfig.maxHeight
                        });
                        e.height !== this.height && (this.height = e.height), e.width !== this.width && (this.width = e.width)
                    }
                    WatchMediaDataChange(e) {
                        var t, i;
                        if (!e) throw new Error("mediaData null or undefined");
                        this.publicAPI = Object.assign(Object.assign({}, this.publicAPI), {
                            mediaData: e
                        }), this.eventsManager.setPublicAPI(this.publicAPI), this.publicAPI.media.play(e), this.shouldObserveResize() ? null === (t = this.resizeObserver) || void 0 === t || t.observe(this.phoenixPlayerNode.parentElement) : null === (i = this.resizeObserver) || void 0 === i || i.unobserve(this.phoenixPlayerNode.parentElement)
                    }
                    WatchIsInitializedChange(e) {
                        this.playerInitialized.emit(e)
                    }
                    WatchVersionChange(e) {
                        if (e !== a.P) throw this.setVersion(), new Error("Property 'version' is read-only!")
                    }
                    render() {
                        var e, t;
                        const i = (null === (e = this.mediaData) || void 0 === e ? void 0 : e.format) ? `phoenix-${null===(t=this.mediaData)||void 0===t?void 0:t.format}` : "",
                            a = this.isAdvertising ? "advertising" : "";
                        return (0, n.h)("div", {
                            key: "366ce58794609be2bb39ff59fdf5ef05be370172",
                            class: `phoenix-player ${i} ${this.getSizeClass()} ${a}`,
                            style: this.getStyle(),
                            "data-owner-name": "phoenix-player-main-node",
                            ref: e => this.containerNode = e,
                            tabindex: "0"
                        }, this.renderUI(), this.renderAdOverlay())
                    }
                    get phoenixPlayerNode() {
                        return (0, n.g)(this)
                    }
                    static get watchers() {
                        return {
                            mediaData: ["WatchMediaDataChange"],
                            isInitialized: ["WatchIsInitializedChange"],
                            version: ["WatchVersionChange"]
                        }
                    }
                };
            v.style = ".phoenix-player{position:relative;display:block;font-family:sans-serif;width:100%;height:100%}.phoenix-player.phoenix-video{background-color:rgb(40, 40, 40);container-type:size;container-name:phoenix-player}.phoenix-player.phoenix-audio .phoenix-core-container{display:none}.phoenix-player.phoenix-audio.advertising .phoenix-core-container,.phoenix-player.phoenix-audio.advertising .phoenix-ad-ui{position:fixed !important;top:auto !important;right:20px !important;bottom:20px !important;left:auto !important;width:640px !important;height:360px !important;overflow:hidden}.phoenix-player.phoenix-audio.advertising .phoenix-core-container{display:block;box-sizing:border-box;border:1px solid black}.phoenix-player.phoenix-audio.advertising .phoenix-ad-ui{pointer-events:none}@media (pointer: coarse), (hover: none){.phoenix-player label.phx-tooltip{position:absolute;width:1px;height:1px;margin:-1px;padding:0 !important;border:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;opacity:0 !important}}"
        },
        59321: (e, t, i) => {
            i.r(t), i.d(t, {
                relative_date_time: () => o
            });
            var n = i(41632),
                a = i(97456);
            i(51329);
            const o = class {
                constructor(e) {
                    (0, n.r)(this, e), this.clearRelativeDateTimeInterval = () => {
                        clearInterval(this.relativeDateTimeInterval)
                    }, this.pubDateIsWithinOneDay = () => Math.abs(Date.now() - this.pubDate) <= a.f
                }
                connectedCallback() {
                    this.updateTimeElapsed(), this.pubDateIsWithinOneDay() && (this.relativeDateTimeInterval = setInterval((() => this.updateTimeElapsed()), a.O))
                }
                disconnectedCallback() {
                    this.clearRelativeDateTimeInterval()
                }
                updateTimeElapsed() {
                    this.relativeDateTime = (0, a.e)(this.pubDate, this.includeSeconds, this.isLive), this.relativeDateTimeInterval && !this.pubDateIsWithinOneDay() && this.clearRelativeDateTimeInterval()
                }
                render() {
                    return (0, n.h)("span", {
                        key: "e576be09a9b5d94c4290c6acf2e083aca2af0280"
                    }, this.relativeDateTime)
                }
            }
        },
        18146: (e, t, i) => {
            i.r(t), i.d(t, {
                skip_back_btn: () => o,
                skip_forward_btn: () => r
            });
            var n = i(41632),
                a = i(51329);
            const o = class {
                constructor(e) {
                    (0, n.r)(this, e), this.locale = (0, a.L)(), this.skipNumberOfSecs = e => {
                        const t = this.publicAPI.media.getCurrentTime() + e;
                        this.publicAPI.media.setCurrentTime(t)
                    }
                }
                handleClick() {
                    this.skipNumberOfSecs(-15)
                }
                render() {
                    var e;
                    const t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData;
                    return (null === t || void 0 === t ? void 0 : t.isLive) ? null : (0, n.h)("button", {
                        type: "button",
                        class: "phx-skip-back-btn"
                    }, (0, n.h)("svg", {
                        class: "skipback-svg",
                        viewBox: "0 0 27 32"
                    }, (0, n.h)("path", {
                        fill: "none",
                        "stroke-width": "2.5",
                        stroke: "#000000",
                        d: "m 1.2785503,17.300016 c 0,6.658278 5.3244743,12.072957 11.9478267,12.218438 0.09095,0.002 0.18216,0.003 0.273596,0.003 0.06556,0 0.131019,-5.15e-4 0.196343,-0.0015 6.582166,-0.103648 11.900831,-5.410861 12.022934,-11.988545 0.0014,-0.07694 0.0022,-0.154047 0.0022,-0.231325 0,-0.09968 -0.0012,-0.199103 -0.0036,-0.298224 C 25.644088,13.92122 24.430426,11.122979 22.482499,9.0126992 20.249536,6.5936251 17.051701,5.07858 13.500007,5.07858"
                    }), (0, n.h)("path", {
                        fill: "#000000",
                        d: "M 13.547417,0 V 10.241378 L 5.123,5.120689 Z"
                    }), (0, n.h)("path", {
                        fill: "#000000",
                        d: "M 11.098438,21.279159 H 9.433567 v -4.55819 l 0.01616,-0.748922 0.02694,-0.818966 -0.309091,0.303155 C 9.050874,15.567659 8.961735,15.648001 8.900158,15.697263 L 7.9949864,16.424633 7.1921845,15.422478 9.7299,13.402004 h 1.368534 z m 5.048492,-5.032328 c 0.761498,0 1.367634,0.21372 1.818426,0.641164 0.450793,0.427445 0.676186,1.012928 0.676186,1.756466 0,0.880033 -0.27119,1.557109 -0.813578,2.03125 -0.542388,0.47414 -1.318242,0.711207 -2.327586,0.711207 -0.876441,0 -1.584049,-0.141881 -2.122845,-0.425647 v -1.438577 c 0.283766,0.150862 0.614222,0.273886 0.991379,0.369073 0.377157,0.09519 0.734553,0.14278 1.072199,0.14278 1.016528,0 1.524784,-0.416663 1.524784,-1.25 0,-0.793826 -0.526216,-1.190733 -1.578664,-1.190733 -0.190374,0 -0.400501,0.01886 -0.630387,0.05657 -0.229887,0.03771 -0.416666,0.07812 -0.560345,0.121228 L 13.533783,17.416009 13.830119,13.402 h 4.27263 v 1.411638 h -2.8125 l -0.145475,1.546336 0.188578,-0.03771 c 0.21911,-0.05029 0.4903,-0.07543 0.813578,-0.07543 z"
                    })), (0, n.h)("label", {
                        class: "phx-tooltip"
                    }, this.locale.skipBack))
                }
            };
            o.style = ".phx-skip-back-btn>svg,.phx-skip-forward-btn>svg{width:25px}.phx-skip-back-btn:hover path,.phx-skip-forward-btn:hover path{fill:#747474}.phx-skip-back-btn:hover path:first-child,.phx-skip-forward-btn:hover path:first-child{fill:transparent;stroke:#747474}";
            const r = class {
                constructor(e) {
                    (0, n.r)(this, e), this.locale = (0, a.L)(), this.skipNumberOfSecs = e => {
                        const t = this.publicAPI.media.getCurrentTime() + e;
                        this.publicAPI.media.setCurrentTime(t)
                    }
                }
                handleClick() {
                    this.skipNumberOfSecs(15)
                }
                render() {
                    var e;
                    const t = null === (e = this.publicAPI) || void 0 === e ? void 0 : e.mediaData;
                    return (null === t || void 0 === t ? void 0 : t.isLive) ? null : (0, n.h)("button", {
                        type: "button",
                        class: "phx-skip-forward-btn"
                    }, (0, n.h)("svg", {
                        class: "skipforward-svg",
                        viewBox: "0 0 27 32"
                    }, (0, n.h)("path", {
                        fill: "none",
                        "stroke-width": "2.5",
                        stroke: "#000000",
                        d: "m 25.72145,17.300016 c 0,6.658278 -5.324474,12.072957 -11.947827,12.218438 -0.09095,0.002 -0.18216,0.003 -0.273596,0.003 -0.06556,0 -0.131019,-5.15e-4 -0.196343,-0.0015 C 6.7215183,29.416306 1.4028533,24.109093 1.2807503,17.531409 c -0.0014,-0.07694 -0.0022,-0.154047 -0.0022,-0.231325 0,-0.09968 0.0012,-0.199103 0.0036,-0.298224 0.073762,-3.08064 1.287424,-5.878881 3.235351,-7.9891608 C 6.7504643,6.5936251 9.9482993,5.07858 13.499993,5.07858"
                    }), (0, n.h)("path", {
                        fill: "#000000",
                        d: "M 13.423,0 V 10.241378 L 21.847417,5.120689 Z"
                    }), (0, n.h)("path", {
                        fill: "#000000",
                        d: "M 11.098438,21.279159 H 9.433567 v -4.55819 l 0.01616,-0.748922 0.02694,-0.818966 -0.309091,0.303155 C 9.050874,15.567659 8.961735,15.648001 8.900158,15.697263 L 7.9949864,16.424633 7.1921845,15.422478 9.7299,13.402004 h 1.368534 z m 5.048492,-5.032328 c 0.761498,0 1.367634,0.21372 1.818426,0.641164 0.450793,0.427445 0.676186,1.012928 0.676186,1.756466 0,0.880033 -0.27119,1.557109 -0.813578,2.03125 -0.542388,0.47414 -1.318242,0.711207 -2.327586,0.711207 -0.876441,0 -1.584049,-0.141881 -2.122845,-0.425647 v -1.438577 c 0.283766,0.150862 0.614222,0.273886 0.991379,0.369073 0.377157,0.09519 0.734553,0.14278 1.072199,0.14278 1.016528,0 1.524784,-0.416663 1.524784,-1.25 0,-0.793826 -0.526216,-1.190733 -1.578664,-1.190733 -0.190374,0 -0.400501,0.01886 -0.630387,0.05657 -0.229887,0.03771 -0.416666,0.07812 -0.560345,0.121228 L 13.533783,17.416009 13.830119,13.402 h 4.27263 v 1.411638 h -2.8125 l -0.145475,1.546336 0.188578,-0.03771 c 0.21911,-0.05029 0.4903,-0.07543 0.813578,-0.07543 z"
                    })), (0, n.h)("label", {
                        class: "phx-tooltip"
                    }, this.locale.skipForward))
                }
            };
            r.style = ".phx-skip-back-btn>svg,.phx-skip-forward-btn>svg{width:25px}.phx-skip-back-btn:hover path,.phx-skip-forward-btn:hover path{fill:#747474}.phx-skip-back-btn:hover path:first-child,.phx-skip-forward-btn:hover path:first-child{fill:transparent;stroke:#747474}"
        },
        66929: (e, t, i) => {
            i.d(t, {
                q: () => a
            });
            var n = i(41632);
            const a = async (e, t) => {
                if ("undefined" !== typeof window) return await void 0, (0, n.b)([
                    ["skip-back-btn_2", [
                        [0, "skip-back-btn", {
                                publicAPI: [16]
                            },
                            [
                                [2, "click", "handleClick"]
                            ]
                        ],
                        [0, "skip-forward-btn", {
                                publicAPI: [16]
                            },
                            [
                                [2, "click", "handleClick"]
                            ]
                        ]
                    ]],
                    ["custom-toggle", [
                        [0, "custom-toggle", {
                            uniqueId: [1, "unique-id"],
                            label: [1],
                            isChecked: [4, "is-checked"]
                        }]
                    ]],
                    ["relative-date-time", [
                        [0, "relative-date-time", {
                            pubDate: [2, "pub-date"],
                            includeSeconds: [4, "include-seconds"],
                            isLive: [4, "is-live"],
                            relativeDateTime: [32]
                        }]
                    ]],
                    ["options-menu-back-btn", [
                        [0, "options-menu-back-btn", {
                                publicAPI: [16],
                                menuTitle: [1, "menu-title"]
                            },
                            [
                                [0, "click", "handleClick"]
                            ]
                        ]
                    ]],
                    ["buffer-bar_10", [
                        [0, "seek-bar", {
                            publicAPI: [16],
                            playerStatus: [32],
                            isSeekable: [32],
                            isClientSideAdvertising: [32]
                        }],
                        [0, "volume-controls", {
                                publicAPI: [16],
                                sliderVisible: [32]
                            },
                            [
                                [0, "focusin", "handleVolumeVisible"],
                                [1, "mouseover", "handleVolumeVisible"],
                                [0, "focusout", "handleVolumeNotVisible"],
                                [1, "mouseout", "handleVolumeNotVisible"]
                            ]
                        ],
                        [0, "options-menu", {
                                publicAPI: [16],
                                menuConfig: [16],
                                ctaConfig: [16]
                            },
                            [
                                [0, "click", "handleClick"],
                                [0, "keydown", "handleKeyDown"]
                            ]
                        ],
                        [0, "currenttime-metadata", {
                            publicAPI: [16],
                            currentTime: [32],
                            isSeekable: [32],
                            duration: [32],
                            isAtLiveEdge: [32],
                            liveSyncPosition: [32]
                        }],
                        [0, "duration-metadata", {
                            publicAPI: [16],
                            isSeekable: [32],
                            duration: [32]
                        }],
                        [0, "play-pause-stop-btn", {
                                publicAPI: [16],
                                isSeekable: [32],
                                playerStatus: [32],
                                isMediaLoading: [32]
                            },
                            [
                                [0, "click", "handleClick"]
                            ]
                        ],
                        [0, "buffer-bar", {
                            publicAPI: [16],
                            isSeekable: [32],
                            bufferDataValue: [32],
                            bufferDataMax: [32]
                        }],
                        [0, "muted-btn", {
                                publicAPI: [16],
                                isMuted: [32],
                                isNoVolume: [32]
                            },
                            [
                                [0, "click", "handleClick"]
                            ]
                        ],
                        [0, "seek-input", {
                            publicAPI: [16],
                            timeTooltipValues: [32],
                            currentTime: [32],
                            isSeekable: [32],
                            seekableRangeStart: [32],
                            seekableRangeEnd: [32]
                        }],
                        [0, "volume-slider", {
                            visibleByParent: [4, "visible-by-parent"],
                            publicAPI: [16],
                            volume: [32]
                        }]
                    ]],
                    ["captions-btn_16", [
                        [0, "control-rack", {
                            publicAPI: [16],
                            playerStatus: [32],
                            isClientAdvertising: [32],
                            isMediaLoading: [32]
                        }],
                        [0, "end-card-overlay", {
                            publicAPI: [16],
                            playerStatus: [32]
                        }],
                        [0, "info-overlay", {
                            mediaData: [16]
                        }],
                        [0, "ready-overlay", {
                                publicAPI: [16],
                                playerStatus: [32],
                                isMediaLoading: [32],
                                isLiveNow: [32]
                            },
                            [
                                [0, "click", "handleClick"],
                                [0, "keydown", "handleKeyDown"]
                            ], {
                                publicAPI: ["onMediaDataChange"]
                            }
                        ],
                        [0, "indicator-overlay", {
                            publicAPI: [16],
                            indicatorType: [32]
                        }],
                        [0, "loading-overlay", {
                            playerStatus: [1, "player-status"]
                        }],
                        [0, "share-overlay", {
                                publicAPI: [16],
                                linkDialogVisible: [32],
                                embedDialogVisible: [32],
                                isVisible: [32]
                            },
                            [
                                [0, "focusin", "onFocusIn"],
                                [0, "keydown", "handleKeyDown"],
                                [0, "click", "handleClick"]
                            ]
                        ],
                        [0, "upcominglive-overlay", {
                            publicAPI: [16],
                            shouldShow: [32],
                            isLiveMedia: [32],
                            upcomingLiveStatus: [32],
                            countDownMessage: [32],
                            countDownLabel: [32],
                            errorMessage: [32]
                        }, null, {
                            publicAPI: ["WatchMediaDataChange"]
                        }],
                        [0, "options-menu-btn", {
                                publicAPI: [16],
                                menuIsOpen: [32],
                                isTextTrackShowing: [32],
                                audioTrackMenuItems: [32],
                                textTrackMenuItems: [32],
                                currentSubMenu: [32],
                                lastSelectedItemId: [32]
                            },
                            [
                                [0, "click", "handleClick"],
                                [0, "keydown", "handleKeyDown"]
                            ], {
                                isTextTrackShowing: ["isTextTrackShowingHandler"]
                            }
                        ],
                        [0, "recommendations-card", {
                                publicAPI: [16],
                                playerStatus: [1, "player-status"],
                                recommendations: [32],
                                isVisible: [32],
                                maybePlayNext: [32],
                                playNextEnabled: [32],
                                playNextCountdown: [32]
                            },
                            [
                                [0, "keydown", "handleKeyDown"],
                                [0, "click", "handleClick"],
                                [0, "change", "handleChange"]
                            ]
                        ],
                        [0, "captions-btn", {
                                publicAPI: [16],
                                hasCaptions: [32],
                                captionsOn: [32]
                            },
                            [
                                [0, "click", "handleClick"]
                            ]
                        ],
                        [0, "error-overlay", {
                            publicAPI: [16],
                            error: [32],
                            liveStreamError: [32]
                        }],
                        [0, "fullscreen-btn", {
                                publicAPI: [16]
                            },
                            [
                                [0, "click", "handleClick"]
                            ]
                        ],
                        [0, "gotolive-btn", {
                                publicAPI: [16],
                                isSeekable: [32],
                                duration: [32],
                                isAtLiveEdge: [32],
                                liveSyncPosition: [32]
                            },
                            [
                                [0, "click", "handleClick"]
                            ]
                        ],
                        [0, "livelabel-metadata", {
                            publicAPI: [16],
                            isSeekable: [32],
                            duration: [32],
                            isAtLiveEdge: [32]
                        }],
                        [0, "share-btn", {
                                publicAPI: [16],
                                playerStatus: [32],
                                shouldHaveFocus: [32]
                            },
                            [
                                [0, "click", "handleClick"]
                            ]
                        ]
                    ]],
                    ["ad-ui-overlay_3", [
                        [0, "video-ui", {
                                publicAPI: [16],
                                containerNode: [16],
                                playerStatus: [32],
                                isUserActive: [32],
                                sizeClass: [32]
                            },
                            [
                                [0, "fullscreenBtnClicked", "onFullscreenBtnClick"]
                            ], {
                                publicAPI: ["watchPropHandler"]
                            }
                        ],
                        [0, "audio-ui", {
                            publicAPI: [16],
                            showName: [32],
                            chapterThumbnail: [32],
                            isClientSideAdvertising: [32]
                        }, null, {
                            publicAPI: ["WatchpublicApiChange"]
                        }],
                        [0, "ad-ui-overlay", {
                            publicAPI: [16],
                            playerStatus: [32],
                            isAdShowing: [32],
                            isClientSideAdvertising: [32],
                            adInfo: [32],
                            adCurrentTime: [32]
                        }]
                    ]],
                    ["phoenix-player", [
                        [0, "phoenix-player", {
                            config: [16],
                            mediaData: [16],
                            settings: [16],
                            version: [1537],
                            playerStatus: [32],
                            publicAPI: [32],
                            isInitialized: [32],
                            isAdvertising: [32],
                            sizeConfig: [32],
                            width: [32],
                            height: [32],
                            mediaAspectRatio: [32],
                            containerWidth: [32],
                            containerHeight: [32],
                            play: [64],
                            load: [64],
                            unload: [64],
                            stop: [64],
                            setAdsInactive: [64],
                            updateSizeConfig: [64],
                            updateControlsConfig: [64],
                            destroy: [64]
                        }, null, {
                            mediaData: ["WatchMediaDataChange"],
                            isInitialized: ["WatchIsInitializedChange"],
                            version: ["WatchVersionChange"]
                        }]
                    ]]
                ], t)
            };
            ! function() {
                if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
                    var e = HTMLElement;
                    window.HTMLElement = function() {
                        return Reflect.construct(e, [], this.constructor)
                    }, HTMLElement.prototype = e.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, e)
                }
            }()
        }
    }
]);
//# sourceMappingURL=../../sourcemaps/oc-vendor-phoenix.8fc09535007f368d3f64.js.map