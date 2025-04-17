! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "61a8498e-ebfe-4336-94e2-9e18e7307370", e._sentryDebugIdIdentifier = "sentry-dbid-61a8498e-ebfe-4336-94e2-9e18e7307370")
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
    ["acc-324"], {
        "acc-47594": function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return i
                },
                t: function() {
                    return r
                }
            });
            var i = "MEMBERSHIP_UPDATE",
                r = "MEMBERSHIP_RESET"
        },
        "acc-260": function(e, t, n) {
            "use strict";
            n.d(t, {
                sn: function() {
                    return i
                },
                O2: function() {
                    return a
                },
                NJ: function() {
                    return r
                }
            });
            var i = n.p + "static/media/appstore.svg",
                r = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0ic3ZnNTEiIHdpZHRoPSIxODAiIGhlaWdodD0iNTMuMzMzIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxODAgNTMuMzMzIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48bWV0YWRhdGEgaWQ9Im1ldGFkYXRhOSI+PHJkZjpSREY+PGNjOldvcmsgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PHBhdGggaWQ9InBhdGgxMSIgZD0ibTE3My4zMyA1My4zMzNoLTE2Ni42NmMtMy42NjY2IDAtNi42NjY1LTIuOTk5OS02LjY2NjUtNi42NjY1di0zOS45OTljMC0zLjY2NjYgMi45OTk5LTYuNjY2NSA2LjY2NjUtNi42NjY1aDE2Ni42NmMzLjY2NjYgMCA2LjY2NjUgMi45OTk5IDYuNjY2NSA2LjY2NjV2MzkuOTk5YzAgMy42NjY2LTIuOTk5OSA2LjY2NjUtNi42NjY1IDYuNjY2NSIgZmlsbD0iIzEwMGYwZCIgc3Ryb2tlLXdpZHRoPSIuMTMzMzMiLz48cGF0aCBpZD0icGF0aDEzIiBkPSJtMTczLjMzIDFlLTNoLTE2Ni42NmMtMy42NjY2IDAtNi42NjY1IDIuOTk5OS02LjY2NjUgNi42NjY1djM5Ljk5OWMwIDMuNjY2NiAyLjk5OTkgNi42NjY1IDYuNjY2NSA2LjY2NjVoMTY2LjY2YzMuNjY2NiAwIDYuNjY2NS0yLjk5OTkgNi42NjY1LTYuNjY2NXYtMzkuOTk5YzAtMy42NjY2LTIuOTk5OS02LjY2NjUtNi42NjY1LTYuNjY2NXptMCAxLjA2NjFjMy4wODc5IDAgNS41OTk5IDIuNTEyNSA1LjU5OTkgNS42MDA0djM5Ljk5OWMwIDMuMDg3OS0yLjUxMTkgNS42MDA0LTUuNTk5OSA1LjYwMDRoLTE2Ni42NmMtMy4wODc5IDAtNS41OTkzLTIuNTEyNS01LjU5OTMtNS42MDA0di0zOS45OTljMC0zLjA4NzkgMi41MTE0LTUuNjAwNCA1LjU5OTMtNS42MDA0aDE2Ni42NiIgZmlsbD0iI2EyYTJhMSIgc3Ryb2tlLXdpZHRoPSIuMTMzMzMiLz48cGF0aCBpZD0icGF0aDM1IiBkPSJtMTQyLjU4IDQwaDIuNDg3OXYtMTYuNjY5aC0yLjQ4Nzl6bTIyLjQwOS0xMC42NjQtMi44NTE5IDcuMjI2NGgtMC4wODUzbC0yLjk1OTktNy4yMjY0aC0yLjY3OTlsNC40Mzk5IDEwLjEtMi41MzE5IDUuNjE4NWgyLjU5NDZsNi44NDEyLTE1LjcxOHptLTE0LjExIDguNzcwNmMtMC44MTMzMSAwLTEuOTUwNi0wLjQwNzg2LTEuOTUwNi0xLjQxNTYgMC0xLjI4NjUgMS40MTYtMS43Nzk3IDIuNjM3My0xLjc3OTcgMS4wOTMzIDAgMS42MDkzIDAuMjM1NDYgMi4yNzMzIDAuNTU3MzItMC4xOTMzMyAxLjU0NDItMS41MjI2IDIuNjM3OS0yLjk1OTkgMi42Mzc5em0wLjMwMTMzLTkuMTM1MmMtMS44MDEzIDAtMy42NjY2IDAuNzkzNzEtNC40Mzg2IDIuNTUyMWwyLjIwOCAwLjkyMTg0YzAuNDcxOTgtMC45MjE4NCAxLjM1MDYtMS4yMjE4IDIuMjczMy0xLjIyMTggMS4yODY2IDAgMi41OTQ2IDAuNzcxMzEgMi42MTU5IDIuMTQ0MnYwLjE3MTMzYy0wLjQ1MDY2LTAuMjU3MzMtMS40MTYtMC42NDMxOC0yLjU5NDYtMC42NDMxOC0yLjM4MTMgMC00LjgwMzkgMS4zMDc3LTQuODAzOSAzLjc1MjQgMCAyLjIzMDIgMS45NTIgMy42NjcxIDQuMTM4NiAzLjY2NzEgMS42NzIgMCAyLjU5NTktMC43NTA1NCAzLjE3MzItMS42MzAxaDAuMDg2N3YxLjI4NzRoMi40MDI2di02LjM5MWMwLTIuOTU5My0yLjIxMDYtNC42MTAzLTUuMDYxMi00LjYxMDN6bS0xNS4zNzYgMi4zOTM3aC0zLjUzODZ2LTUuNzEzM2gzLjUzODZjMS44NiAwIDIuOTE1OSAxLjUzOTYgMi45MTU5IDIuODU2NiAwIDEuMjkxNy0xLjA1NiAyLjg1NjctMi45MTU5IDIuODU2N3ptLTAuMDY0LTguMDMzN2gtNS45NjE0djE2LjY2OWgyLjQ4Njl2LTYuMzE0OWgzLjQ3NDZjMi43NTczIDAgNS40Njc5LTEuOTk1OCA1LjQ2NzktNS4xNzY1IDAtMy4xODAxLTIuNzEwNi01LjE3NjktNS40Njc5LTUuMTc2OXptLTMyLjUwNyAxNC43NzhjLTEuNzE4OCAwLTMuMTU3My0xLjQzOTYtMy4xNTczLTMuNDE1IDAtMS45OTg0IDEuNDM4NS0zLjQ1ODMgMy4xNTczLTMuNDU4MyAxLjY5NjkgMCAzLjAyODYgMS40NiAzLjAyODYgMy40NTgzIDAgMS45NzU0LTEuMzMxNyAzLjQxNS0zLjAyODYgMy40MTV6bTIuODU2Ny03Ljg0MDNoLTAuMDg2Yy0wLjU1ODI2LTAuNjY1NzItMS42MzI4LTEuMjY3Mi0yLjk4NTMtMS4yNjcyLTIuODM1OSAwLTUuNDM0OCAyLjQ5MjEtNS40MzQ4IDUuNjkyNSAwIDMuMTc4NiAyLjU5ODkgNS42NDg4IDUuNDM0OCA1LjY0ODggMS4zNTI1IDAgMi40MjctMC42MDE2IDIuOTg1My0xLjI4ODVoMC4wODZ2MC44MTU1OGMwIDIuMTcwMy0xLjE1OTggMy4zMjk2LTMuMDI4NiAzLjMyOTYtMS41MjQ1IDAtMi40Njk3LTEuMDk1My0yLjg1NjctMi4wMTg4bC0yLjE2OTEgMC45MDIwNmMwLjYyMjM4IDEuNTAzIDIuMjc1OSAzLjM1MSA1LjAyNTkgMy4zNTEgMi45MjE4IDAgNS4zOTItMS43MTg4IDUuMzkyLTUuOTA3N3YtMTAuMTgxaC0yLjM2MzR6bTQuMDgyMiA5LjczMDRoMi40OTA2di0xNi42NjloLTIuNDkwNnptNi4xNjQtNS40OTg4Yy0wLjA2NDEtMi4xOTExIDEuNjk3OC0zLjMwNzggMi45NjQ1LTMuMzA3OCAwLjk4ODUxIDAgMS44MjU0IDAuNDk0MjUgMi4xMDU3IDEuMjAyNnptNy43MzI2LTEuODkwNmMtMC40NzIzOC0xLjI2NjYtMS45MTE0LTMuNjA4Mi00Ljg1NDEtMy42MDgyLTIuOTIxOCAwLTUuMzQ4OCAyLjI5ODMtNS4zNDg4IDUuNjcwNyAwIDMuMTc5MSAyLjQwNjIgNS42NzA3IDUuNjI3NSA1LjY3MDcgMi41OTg5IDAgNC4xMDMxLTEuNTg5IDQuNzI2NC0yLjUxM2wtMS45MzMzLTEuMjg5Yy0wLjY0NDY1IDAuOTQ1MzEtMS41MjQ5IDEuNTY4Mi0yLjc5MzEgMS41NjgyLTEuMjY2NiAwLTIuMTY5Mi0wLjU4MDEyLTIuNzQ4My0xLjcxODZsNy41ODE1LTMuMTM1OXptLTYwLjQwOS0xLjg2ODJ2Mi40MDU3aDUuNzU2NWMtMC4xNzE4NiAxLjM1MzItMC42MjI5MiAyLjM0MTEtMS4zMTA0IDMuMDI4Ni0wLjgzNzk4IDAuODM3NDUtMi4xNDgzIDEuNzYxNC00LjQ0NjIgMS43NjE0LTMuNTQ0MyAwLTYuMzE1LTIuODU2Ny02LjMxNS02LjQwMDlzMi43NzA3LTYuNDAxMyA2LjMxNS02LjQwMTNjMS45MTE4IDAgMy4zMDc3IDAuNzUxOTggNC4zMzg4IDEuNzE4NmwxLjY5NzQtMS42OTczYy0xLjQzOTYtMS4zNzQ1LTMuMzUxLTIuNDI3LTYuMDM2Mi0yLjQyNy00Ljg1NTIgMC04LjkzNjMgMy45NTI0LTguOTM2MyA4LjgwNyAwIDQuODU0MSA0LjA4MTEgOC44MDY2IDguOTM2MyA4LjgwNjYgMi42MjAyIDAgNC41OTY3LTAuODU5MzIgNi4xNDMtMi40NzAyIDEuNTg5Ni0xLjU4OTYgMi4wODM4LTMuODIzNCAyLjA4MzgtNS42MjggMC0wLjU1Nzg1LTAuMDQzMzMtMS4wNzM0LTAuMTI5Mi0xLjUwMzJ6bTE0Ljc3MiA3LjM2NzVjLTEuNzE4OCAwLTMuMjAxLTEuNDE3Ny0zLjIwMS0zLjQzNjggMC0yLjA0MDYgMS40ODIyLTMuNDM2NCAzLjIwMS0zLjQzNjQgMS43MTgxIDAgMy4yMDAzIDEuMzk1OCAzLjIwMDMgMy40MzY0IDAgMi4wMTkxLTEuNDgyMiAzLjQzNjgtMy4yMDAzIDMuNDM2OHptMC05LjEwNzVjLTMuMTM3IDAtNS42OTI3IDIuMzg0Mi01LjY5MjcgNS42NzA3IDAgMy4yNjUgMi41NTU3IDUuNjcwNyA1LjY5MjcgNS42NzA3IDMuMTM1OCAwIDUuNjkyLTIuNDA1NyA1LjY5Mi01LjY3MDcgMC0zLjI4NjUtMi41NTYyLTUuNjcwNy01LjY5Mi01LjY3MDd6bTEyLjQxNyA5LjEwNzVjLTEuNzE3NiAwLTMuMjAwMy0xLjQxNzctMy4yMDAzLTMuNDM2OCAwLTIuMDQwNiAxLjQ4MjgtMy40MzY0IDMuMjAwMy0zLjQzNjQgMS43MTg4IDAgMy4yMDA1IDEuMzk1OCAzLjIwMDUgMy40MzY0IDAgMi4wMTkxLTEuNDgxNyAzLjQzNjgtMy4yMDA1IDMuNDM2OHptMC05LjEwNzVjLTMuMTM1OCAwLTUuNjkxNSAyLjM4NDItNS42OTE1IDUuNjcwNyAwIDMuMjY1IDIuNTU1NyA1LjY3MDcgNS42OTE1IDUuNjcwNyAzLjEzNyAwIDUuNjkyNy0yLjQwNTcgNS42OTI3LTUuNjcwNyAwLTMuMjg2NS0yLjU1NTctNS42NzA3LTUuNjkyNy01LjY3MDciIGZpbGw9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjEzMzMzIi8+PHBhdGggaWQ9InBhdGgzNyIgZD0ibTI3LjYyMiAyNS44OTktMTQuMTk0IDE1LjA2NmM1LjM0ZS00IDAuMDAzMSAwLjAwMTYgMC4wMDU3IDAuMDAyMSAwLjAwODkgMC40MzUzMiAxLjYzNiAxLjkyOTYgMi44NDA2IDMuNzAzIDIuODQwNiAwLjcwODkyIDAgMS4zNzQ1LTAuMTkxNjYgMS45NDUzLTAuNTI4MTJsMC4wNDUzMy0wLjAyNjU2IDE1Ljk3OC05LjIyLTcuNDc5LTguMTQxIiBmaWxsPSIjZWIzMTMxIiBzdHJva2Utd2lkdGg9Ii4xMzMzMyIvPjxwYXRoIGlkPSJwYXRoMzkiIGQ9Im00MS45ODMgMjMuMzM0LTAuMDEzNi0wLjAwOTMtNi44OTgyLTMuOTk5LTcuNzcxNyA2LjkxNTYgNy43OTg3IDcuNzk3NyA2Ljg2MTgtMy45NTkyYzEuMjAzLTAuNjQ5NDUgMi4wMTk3LTEuOTE3NyAyLjAxOTctMy4zODAyIDAtMS40NTItMC44MDU3MS0yLjcxMzktMS45OTY4LTMuMzY1NSIgZmlsbD0iI2Y2YjYwYiIgc3Ryb2tlLXdpZHRoPSIuMTMzMzMiLz48cGF0aCBpZD0icGF0aDQxIiBkPSJtMTMuNDI2IDEyLjM3Yy0wLjA4NTMzIDAuMzE0NjYtMC4xMzAxOCAwLjY0NDI1LTAuMTMwMTggMC45ODY1MXYyNi42MjNjMCAwLjM0MTYyIDAuMDQ0MzIgMC42NzIzMyAwLjEzMDcyIDAuOTg1ODdsMTQuNjg0LTE0LjY4MS0xNC42ODQtMTMuOTE0IiBmaWxsPSIjNTc3OGM1IiBzdHJva2Utd2lkdGg9Ii4xMzMzMyIvPjxwYXRoIGlkPSJwYXRoNDMiIGQ9Im0yNy43MjcgMjYuNjY4IDcuMzQ3My03LjM0NTEtMTUuOTYtOS4yNTM0Yy0wLjU4MDEyLTAuMzQ3NDYtMS4yNTcyLTAuNTQ3OTktMS45ODE3LTAuNTQ3OTktMS43NzM0IDAtMy4yNjk3IDEuMjA2OC0zLjcwNTEgMi44NDQ3LTUuMzRlLTQgMC4wMDE2LTUuMzRlLTQgMC4wMDI3LTUuMzRlLTQgMC4wMDQxbDE0LjMgMTQuMjk4IiBmaWxsPSIjM2JhZDQ5IiBzdHJva2Utd2lkdGg9Ii4xMzMzMyIvPjxwYXRoIGlkPSJwYXRoMzMiIGQ9Im02My4xOTMgMTMuMDQyaC0zLjg4OTV2MC45NjI1MWgyLjkxNDZjLTAuMDc5MiAwLjc4NTQ1LTAuMzkxNzIgMS40MDIxLTAuOTE4NzggMS44NS0wLjUyNzA1IDAuNDQ3OTktMS4yIDAuNjcyOTItMS45OTU4IDAuNjcyOTItMC44NzI5MSAwLTEuNjEyNS0wLjMwNDEzLTIuMjE4Ni0wLjkwODI0LTAuNTkzODUtMC42MTY2NS0wLjg5NTg0LTEuMzc5Mi0wLjg5NTg0LTIuMjk3OSAwLTAuOTE4NjQgMC4zMDE5OS0xLjY4MTIgMC44OTU4NC0yLjI5NzggMC42MDYxMi0wLjYwNDEyIDEuMzQ1Ny0wLjkwNjI0IDIuMjE4Ni0wLjkwNjI0IDAuNDQ3OTkgMCAwLjg3NTA0IDAuMDc3MDcgMS4yNjY2IDAuMjQ1ODYgMC4zOTE3MiAwLjE2ODY2IDAuNzA2MjUgMC40MDQxMiAwLjk1MjExIDAuNzA2MjVsMC43Mzk1OC0wLjczOTU4Yy0wLjMzNTQ2LTAuMzgxMzItMC43NjAzOC0wLjY3MjkyLTEuMjg3Ni0wLjg4NTQ0LTAuNTI3MDUtMC4yMTI1My0xLjA3Ny0wLjMxNDUzLTEuNjcwOC0wLjMxNDUzLTEuMTY0NSAwLTIuMTUxOSAwLjQwNDEyLTIuOTU4MiAxLjIxMDQtMC44MDYyNSAwLjgwODI1LTEuMjEwNCAxLjgwNDEtMS4yMTA0IDIuOTgxMSAwIDEuMTc3IDAuNDA0MTIgMi4xNzUgMS4yMTA0IDIuOTgxMyAwLjgwNjI1IDAuODA2MTEgMS43OTM3IDEuMjEwNCAyLjk1ODIgMS4yMTA0IDEuMjIyOSAwIDIuMTk3OS0wLjM5MTcyIDIuOTQ3OS0xLjE4NzYgMC42NjAzOC0wLjY2MjM4IDAuOTk3ODQtMS41NTgyIDAuOTk3ODQtMi42NzkgMC0wLjE4OTYtMC4wMjI5My0wLjM5MTcyLTAuMDU2MjctMC42MDQyNXptMS41MDY4LTMuNzMzMnY4LjAyNDloNC42ODUydi0wLjk4NTQ0aC0zLjY1NHYtMi41NDU3aDMuMjk1OHYtMC45NjI1MWgtMy4yOTU4di0yLjU0MzdoMy42NTR2LTAuOTg3NTh6bTExLjI1NSAwLjk4NzU4di0wLjk4NzU4aC01LjUxNDV2MC45ODc1OGgyLjI0MTd2Ny4wMzczaDEuMDMxMnYtNy4wMzczem00Ljk5MjUtMC45ODc1OGgtMS4wMzEydjguMDI0OWgxLjAzMTJ6bTYuODA2NiAwLjk4NzU4di0wLjk4NzU4aC01LjUxNDR2MC45ODc1OGgyLjI0MTV2Ny4wMzczaDEuMDMxMnYtNy4wMzczem0xMC40MDYgMC4wNTYyNmMtMC43OTU4NS0wLjgxODc3LTEuNzcwOC0xLjIyMjktMi45MzU0LTEuMjIyOS0xLjE2NjYgMC0yLjE0MTUgMC40MDQxMi0yLjkzNzQgMS4yMTA0LTAuNzk1ODUgMC43OTU4NS0xLjE4NzQgMS43OTM3LTEuMTg3NCAyLjk4MTFzMC4zOTE1OSAyLjE4NTQgMS4xODc0IDIuOTgxM2MwLjc5NTg1IDAuODA2MTEgMS43NzA4IDEuMjEwNCAyLjkzNzQgMS4yMTA0IDEuMTU0MSAwIDIuMTM5NS0wLjQwNDI2IDIuOTM1NC0xLjIxMDQgMC43OTU4NS0wLjc5NTg1IDEuMTg3NC0xLjc5MzggMS4xODc0LTIuOTgxMyAwLTEuMTc3LTAuMzkxNTktMi4xNzI5LTEuMTg3NC0yLjk2ODZ6bS01LjEzMzIgMC42NzA3OGMwLjU5MzcyLTAuNjA0MTIgMS4zMjI5LTAuOTA2MjQgMi4xOTc4LTAuOTA2MjQgMC44NzI5MSAwIDEuNjAyMSAwLjMwMjEzIDIuMTg1NCAwLjkwNjI0IDAuNTkzNzIgMC41OTM3MiAwLjg4NTMxIDEuMzY4NiAwLjg4NTMxIDIuMjk3OCAwIDAuOTMxMzEtMC4yOTE1OSAxLjcwNDEtMC44ODUzMSAyLjI5NzktMC41ODMzMiAwLjYwNDEyLTEuMzEyNSAwLjkwODI0LTIuMTg1NCAwLjkwODI0LTAuODc0OTEgMC0xLjYwNDEtMC4zMDQxMy0yLjE5NzgtMC45MDgyNC0wLjU4MTMyLTAuNjA2MjUtMC44NzI5MS0xLjM2NjYtMC44NzI5MS0yLjI5NzkgMC0wLjkyOTE4IDAuMjkxNTktMS42OTE2IDAuODcyOTEtMi4yOTc4em04Ljc3MDYgMS4zMTI1LTAuMDQzNy0xLjU0OGgwLjA0MzdsNC4wNzkxIDYuNTQ1N2gxLjA3N3YtOC4wMjQ5aC0xLjAzMTJ2NC42OTU3bDAuMDQzNyAxLjU0OGgtMC4wNDM3bC0zLjg5OTktNi4yNDM3aC0xLjI1NjJ2OC4wMjQ5aDEuMDMxMnoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9Ii4yNjY2NiIvPjwvc3ZnPg==",
                a = n.p + "static/media/brandAnimation.gif"
        },
        "acc-65606": function(e, t, n) {
            "use strict";
            var i = n("acc-82200"),
                r = n.n(i),
                a = n("acc-260"),
                s = n("acc-63988"),
                o = function(e) {
                    var t = null;
                    return e.isLoading && (t = (0, s.jsxs)("div", {
                        className: "spinner",
                        "data-testid": "spinner",
                        children: [(0, s.jsx)("span", {
                            children: "Loading..."
                        }), (0, s.jsx)("img", {
                            src: a.O2,
                            alt: "Loading Animation",
                            className: "loadingAnimation"
                        })]
                    })), (0, s.jsx)("div", {
                        className: "loadingIndicator",
                        children: t
                    })
                };
            o.propTypes = {
                isLoading: r().bool
            }, o.defaultProps = {
                isLoading: !1
            }, t.A = o
        },
        "acc-33450": function(e, t, n) {
            "use strict";
            n("acc-21527");
            var i = n("acc-65291"),
                r = n("acc-9089"),
                a = n("acc-65606"),
                s = n("acc-63988");
            t.A = function(e) {
                var t = e.children,
                    n = e.isLoading,
                    o = void 0 === n || n;
                return (0, s.jsx)("div", {
                    children: (0, s.jsx)("div", {
                        id: "account-main",
                        children: (0, s.jsx)(i.A, {
                            container: !0,
                            constrained: "xs",
                            background: "gradient",
                            children: (0, s.jsx)(i.A, {
                                item: !0,
                                panel: !0,
                                children: (0, s.jsx)(r.A, {
                                    container: !0,
                                    justify: "center",
                                    align: "center",
                                    children: (0, s.jsx)(r.A, {
                                        item: !0,
                                        xs: 12,
                                        children: o ? (0, s.jsx)(a.A, {
                                            isLoading: !0
                                        }) : t
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        "acc-65291": function(e, t, n) {
            "use strict";
            n("acc-81675"), n("acc-29390"), n("acc-15718"), n("acc-77450"), n("acc-75855");
            var i = n("acc-64467"),
                r = n("acc-80045"),
                a = n("acc-82200"),
                s = n.n(a),
                o = n("acc-31580"),
                u = n.n(o),
                l = n("acc-63988"),
                c = ["align", "background", "children", "className", "container", "constrained", "item", "justify", "panel", "spacing"];

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, i.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var f = ["none", "xxs", "xs", "sm", "md", "lg", "xl"],
                N = ["stretch", "center", "start", "end"],
                p = function(e) {
                    var t = e.align,
                        n = e.background,
                        a = e.children,
                        s = e.className,
                        o = e.container,
                        g = e.constrained,
                        f = e.item,
                        N = e.justify,
                        p = e.panel,
                        m = e.spacing,
                        M = (0, r.A)(e, c),
                        T = u()(s, (0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)({
                            CssGrid_container: o,
                            CssGrid_item: f
                        }, "CssGrid_bg_".concat(n), n), "CssGrid_constrained_".concat(g), o && g), "CssGrid_spacing_".concat(m), m), "CssGrid_justifyItems_".concat(N), N && o), "CssGrid_justifySelf_".concat(N), N && f), "CssGrid_alignItems_".concat(t), t && o), "CssGrid_alignSelf_".concat(t), t && f), "CssGrid_panel", f && p));
                    return (0, l.jsx)("div", d(d({
                        className: T
                    }, M), {}, {
                        children: a
                    }))
                };
            p.propTypes = {
                align: s().oneOf(N),
                background: s().oneOf(["gradient", "grey", "none", "white"]),
                className: s().string,
                container: s().bool,
                constrained: s().oneOf(f),
                item: s().bool,
                justify: s().oneOf(N),
                panel: s().bool,
                spacing: s().oneOf(f)
            }, t.A = p
        },
        "acc-9089": function(e, t, n) {
            "use strict";
            n("acc-81675"), n("acc-29390"), n("acc-15718"), n("acc-77450"), n("acc-75855");
            var i = n("acc-64467"),
                r = n("acc-80045"),
                a = n("acc-82200"),
                s = n.n(a),
                o = n("acc-31580"),
                u = n.n(o),
                l = n("acc-63988"),
                c = ["auto", "children", "container", "constrained", "item", "xs", "sm", "md", "lg", "xl", "nowrap", "spacing", "justify", "align"];

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, i.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                N = function(e) {
                    var t = e.auto,
                        n = e.children,
                        a = e.container,
                        s = e.constrained,
                        o = e.item,
                        g = e.xs,
                        f = e.sm,
                        N = e.md,
                        p = e.lg,
                        m = e.xl,
                        M = e.nowrap,
                        T = e.spacing,
                        y = e.justify,
                        h = e.align,
                        A = (0, r.A)(e, c),
                        v = u()((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)((0, i.A)({
                            FlexGrid_container: a,
                            FlexGrid_container_constrained: a && s,
                            FlexGrid_nowrap: a && M,
                            FlexGrid_item: o,
                            FlexGrid_item_size_auto: o && t
                        }, "FlexGrid_xs_".concat(g), g), "FlexGrid_sm_".concat(f), f), "FlexGrid_md_".concat(N), N), "FlexGrid_lg_".concat(p), p), "FlexGrid_xl_".concat(m), m), "FlexGrid_spacing_".concat(T), T), "FlexGrid_justifyContent_".concat(y), y && a), "FlexGrid_justifySelf_".concat(y), y && o), "FlexGrid_alignItems_".concat(h), h && a), "FlexGrid_alignSelf_".concat(h), h && o));
                    return (0, l.jsx)("div", d(d({
                        className: v
                    }, A), {}, {
                        children: n
                    }))
                };
            N.propTypes = {
                auto: s().bool,
                container: s().bool,
                constrained: s().bool,
                item: s().bool,
                xs: s().oneOf(f),
                sm: s().oneOf(f),
                md: s().oneOf(f),
                lg: s().oneOf(f),
                xl: s().oneOf(f),
                nowrap: s().bool,
                spacing: s().oneOf(["xs", "sm", "md", "lg", "xl"]),
                justify: s().oneOf(["flex-start", "center", "flex-end", "space-between", "space-around"]),
                align: s().oneOf(["flex-start", "center", "flex-end"]),
                flexDirection: s().oneOf(["row", "row-reverse", "column", "column-reverse"])
            }, t.A = N
        },
        "acc-10615": function(e, t, n) {
            "use strict";
            n.d(t, {
                BF: function() {
                    return T
                },
                Bl: function() {
                    return M
                },
                Bn: function() {
                    return r
                },
                IE: function() {
                    return p
                },
                Iz: function() {
                    return v
                },
                Kp: function() {
                    return h
                },
                LI: function() {
                    return f
                },
                QE: function() {
                    return g
                },
                RY: function() {
                    return w
                },
                Sv: function() {
                    return O
                },
                UK: function() {
                    return L
                },
                Uu: function() {
                    return E
                },
                WC: function() {
                    return x
                },
                Yb: function() {
                    return u
                },
                ZD: function() {
                    return m
                },
                bB: function() {
                    return a
                },
                dT: function() {
                    return I
                },
                e$: function() {
                    return o
                },
                eS: function() {
                    return b
                },
                eu: function() {
                    return N
                },
                ez: function() {
                    return A
                },
                fQ: function() {
                    return k
                },
                kh: function() {
                    return l
                },
                lB: function() {
                    return y
                },
                mE: function() {
                    return c
                },
                n1: function() {
                    return j
                },
                oQ: function() {
                    return z
                },
                pl: function() {
                    return s
                },
                qZ: function() {
                    return P
                },
                qt: function() {
                    return S
                },
                xh: function() {
                    return d
                },
                zS: function() {
                    return D
                }
            });
            var i = n("acc-39423"),
                r = (0, i.AA)("Client.membership.subCentre"),
                a = (0, i.AA)("Client.membership.privacyPath"),
                s = " https://cbchelp.cbc.ca/hc/en-ca/articles/217732637-Can-I-delete-my-CBC-Account-",
                o = "https://gem.cbc.ca/",
                u = "https://gem.cbc.ca/account",
                l = "https://cbchelp.cbc.ca/hc/en-ca",
                c = "/account/login",
                g = "/account/signup",
                d = "/account/success-signup",
                f = "/account/logout",
                N = "/account/profile",
                p = "/account/landing",
                m = "/account/newsletters",
                M = "/account/comments",
                T = "/account/tv",
                y = "/account/privacy",
                h = "https://www.cbc.ca/account/privacy",
                A = "https://cbc.radio-canada.ca/en/vision/governance/terms-of-use-digital-services",
                v = "/account/features",
                j = "/account/emailrequired",
                k = "/account/emaillimit",
                L = "/account/emailchanged",
                w = "/account/apps",
                C = [N, m, M, T, y, L].map((function(e) {
                    return e.replace("/account/", "")
                })),
                I = "/account/(".concat(C.join("|"), ")"),
                D = new RegExp(I),
                O = 1048576,
                E = "1MB",
                x = "membership.chatbot.enable",
                z = "https://i.cbc.ca/1.7249828.1719591067!/fileImage/httpImage/image.png",
                S = "https://play.google.com/store/apps/details?id=ca.cbc.android.cbctv&referrer=utm_source%3DCBCAccountPageParis2024",
                b = "https://apps.apple.com/app/apple-store/id422191503?pt=63436&ct=CBCAccountPageParis2024&mt=8",
                P = [{
                    src: z,
                    title: "CBC Gem: Shows & Live TV",
                    description: "Watch great shows, movies, and live TV, all free. Use our convenient mobile app or search for us on your Connected TV.",
                    alt: "CBC Gem",
                    appLinkAndroid: "https://play.google.com/store/apps/details?id=ca.cbc.android.cbctv&referrer=utm_source%3DCBCAccountPage",
                    appLinkiOS: "https://apps.apple.com/app/apple-store/id422191503?pt=63436&ct=CBCAccountPage&mt=8"
                }, {
                    src: "https://i.cbc.ca/1.7249833.1719591233!/fileImage/httpImage/image.png",
                    title: "CBC News",
                    description: "Listen to live radio from your city or across Canada, along with award-winning podcasts and curated music playlists.",
                    alt: "CBC News",
                    appLinkAndroid: "https://play.google.com/store/apps/details?id=ca.cbc.mobile.android.cbcnewsandroidwebview&referrer=utm_source%3DCBCAccountPage",
                    appLinkiOS: "https://apps.apple.com/app/apple-store/id417988800?pt=63436&ct=CBCAccountPage&mt=8"
                }, {
                    src: "https://i.cbc.ca/1.7249839.1719591292!/fileImage/httpImage/image.png",
                    title: "CBC Listen: Music & Podcasts",
                    description: "Free and easy to use, the CBC News App has all your local and international news with great features like live video, local radio, breaking news alerts, and more.",
                    alt: "CBC Listen",
                    appLinkAndroid: "https://play.google.com/store/apps/details?id=com.nobexinc.cbcradio.rc&referrer=utm_source%3DCBCAccountPage",
                    appLinkiOS: "https://apps.apple.com/app/apple-store/id325946767?pt=63436&ct=CBCAccountPage&mt=8"
                }]
        },
        "acc-68414": function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return r
                }
            });
            var i = n("acc-82284"),
                r = function() {
                    ! function(e) {
                        var t = function() {
                            var t = function() {
                                    for (var t = e.location.hash ? e.location.hash.substr(1).split("&") : [], n = {}, i = 0; i < t.length; i++) {
                                        var r = t[i].split("=");
                                        n[r[0]] = decodeURIComponent(r[1])
                                    }
                                    return n
                                },
                                n = function(t) {
                                    var n = [];
                                    for (var i in t) n.push(i + "=" + encodeURIComponent(t[i]));
                                    e.location.hash = n.join("&")
                                };
                            return {
                                get: function(e) {
                                    var n = t();
                                    return e ? n[e] : n
                                },
                                add: function(e) {
                                    var i = t();
                                    for (var r in e) i[r] = e[r];
                                    n(i)
                                },
                                remove: function(e) {
                                    e = "string" == typeof e ? [e] : e;
                                    for (var i = t(), r = 0; r < e.length; r++) delete i[e[r]];
                                    n(i)
                                },
                                clear: function() {
                                    n({})
                                }
                            }
                        }();
                        e.hash = t
                    }(window);
                    var e = function(e) {
                            return e && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
                        },
                        t = function(e, t, n, i, r, a) {
                            if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
                            var s = "",
                                o = function(e) {
                                    if (e === 1 / 0) return "Fri, 31 Dec 9999 23:59:59 GMT";
                                    var t = new Date;
                                    return t.setTime(t.getTime() + 1e3 * e), t.toGMTString()
                                };
                            if (n) switch (n.constructor) {
                                case Number:
                                    s = "; expires=" + o(n) + n === 1 / 0 ? "" : "; max-age=" + n;
                                    break;
                                case String:
                                    s = "; expires=" + n;
                                    break;
                                case Date:
                                    s = "; expires=" + n.toUTCString()
                            }
                            return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + s + (r ? "; domain=" + r : "") + (i ? "; path=" + i : "") + (a ? "; secure" : ""), !0
                        },
                        n = "https://api.loginradius.com",
                        r = "LRTokenKey",
                        a = {},
                        s = {},
                        o = {
                            906: {
                                Description: "The access token is not valid",
                                ErrorCode: 906,
                                Message: "The LoginRadius access token is invalid, please use the correct or valid access token in order to process this request."
                            },
                            920: {
                                Description: "The provided LoginRadius API key is invalid, please use a valid API key of your LoginRadius account.",
                                ErrorCode: 920,
                                Message: "API key is invalid"
                            },
                            1e3: {
                                Description: "Oops something went wrong, Please try again.",
                                ErrorCode: 1e3,
                                Message: "Oops something went wrong, Please try again."
                            }
                        },
                        u = {};

                    function l(e) {
                        if (!window[e]) return !1;
                        var t = "test",
                            n = window[e];
                        try {
                            return n.setItem(t, "1"), n.removeItem(t), !0
                        } catch (i) {
                            return !1
                        }
                    }

                    function c(t) {
                        return l("localStorage") && null !== localStorage.getItem(t) && void 0 !== localStorage.getItem(t) && "" !== localStorage.getItem(t) ? localStorage.getItem(t) : l("sessionStorage") && null !== sessionStorage.getItem(t) && void 0 !== sessionStorage.getItem(t) && "" !== sessionStorage.getItem(t) ? sessionStorage.getItem(t) : e(t)
                    }
                    u.isauthenticated = !1, u.setLoginCallback = function(e) {
                        u.onlogin = e
                    }, u.oneTouchLoginApi = {}, u.oneTouchLoginApi = {
                        oneTouchLoginByEmail: function(e, t, n, i, r) {
                            if (a.checkJson(e)) return r(a.message("oneTouchLoginByEmailModel"));
                            var s = {};
                            a.isNull(t) || (s.oneTouchLoginEmailTemplate = t), a.isNull(n) || (s.redirecturl = n), a.isNull(i) || (s.welcomeemailtemplate = i);
                            return a.xhttpCall("POST", "identity/v2/auth/onetouchlogin/email", s, e, r)
                        },
                        oneTouchLoginByPhone: function(e, t, n) {
                            if (a.checkJson(e)) return n(a.message("oneTouchLoginByPhoneModel"));
                            var i = {};
                            a.isNull(t) || (i.smsTemplate = t);
                            return a.xhttpCall("POST", "identity/v2/auth/onetouchlogin/phone", i, e, n)
                        },
                        oneTouchLoginOTPVerification: function(e, t, n, i, r) {
                            if (a.isNull(e)) return r(a.message("otp"));
                            if (a.isNull(t)) return r(a.message("phone"));
                            var s = {};
                            s.otp = e, a.isNull(n) || (s.fields = n), a.isNull(i) || (s.smsTemplate = i);
                            var o = {};
                            o.phone = t;
                            return a.xhttpCall("PUT", "identity/v2/auth/onetouchlogin/phone/verify", s, o, r)
                        },
                        oneTouchEmailVerification: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("verificationToken"));
                            var i = {};
                            i.verificationToken = e, a.isNull(t) || (i.welcomeEmailTemplate = t);
                            return a.xhttpCall("GET", "identity/v2/auth/email/onetouchlogin", i, null, n)
                        },
                        oneTouchLoginPing: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("clientGuid"));
                            var i = {};
                            i.clientGuid = e, a.isNull(t) || (i.fields = t);
                            return a.xhttpCall("GET", "identity/v2/auth/login/smartlogin/ping", i, null, n)
                        }
                    }, u.authenticationApi = {}, u.authenticationApi = {
                        getSecurityQuestionsByEmail: function(e, t) {
                            if (a.isNull(e)) return t(a.message("email"));
                            var n = {};
                            n.email = e;
                            return a.xhttpCall("GET", "identity/v2/auth/securityquestion/email", n, null, t)
                        },
                        getSecurityQuestionsByUserName: function(e, t) {
                            if (a.isNull(e)) return t(a.message("userName"));
                            var n = {};
                            n.userName = e;
                            return a.xhttpCall("GET", "identity/v2/auth/securityquestion/username", n, null, t)
                        },
                        getSecurityQuestionsByPhone: function(e, t) {
                            if (a.isNull(e)) return t(a.message("phone"));
                            var n = {};
                            n.phone = e;
                            return a.xhttpCall("GET", "identity/v2/auth/securityquestion/phone", n, null, t)
                        },
                        getSecurityQuestionsByAccessToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "identity/v2/auth/securityquestion/accesstoken", n, null, t)
                        },
                        authValidateAccessToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "identity/v2/auth/access_token/validate", n, null, t)
                        },
                        authInValidateAccessToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e, null !== t && (i.preventRefresh = t);
                            return a.xhttpCall("GET", "identity/v2/auth/access_token/invalidate", i, null, n)
                        },
                        getAccessTokenInfo: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "identity/v2/auth/access_token", n, null, t)
                        },
                        getProfileByAccessToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e, a.isNull(t) || (i.fields = t);
                            return a.xhttpCall("GET", "identity/v2/auth/account", i, null, n)
                        },
                        sendWelcomeEmail: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e, a.isNull(t) || (i.welcomeEmailTemplate = t);
                            return a.xhttpCall("GET", "identity/v2/auth/account/sendwelcomeemail", i, null, n)
                        },
                        updateProfileByAccessToken: function(e, t, n, i, r, s, o, u) {
                            if (a.isNull(e)) return u(a.message("accessToken"));
                            if (a.checkJson(t)) return u(a.message("userProfileUpdateModel"));
                            var l = {};
                            l.access_token = e, a.isNull(n) || (l.emailTemplate = n), a.isNull(i) || (l.fields = i), null !== r && (l.nullSupport = r), a.isNull(s) || (l.smsTemplate = s), a.isNull(o) || (l.verificationUrl = o);
                            return a.xhttpCall("PUT", "identity/v2/auth/account", l, t, u)
                        },
                        deleteAccountWithEmailConfirmation: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            var r = {};
                            r.access_token = e, a.isNull(t) || (r.deleteUrl = t), a.isNull(n) || (r.emailTemplate = n);
                            return a.xhttpCall("DELETE", "identity/v2/auth/account", r, null, i)
                        },
                        deleteAccountByDeleteToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("deletetoken"));
                            var n = {};
                            n.deletetoken = e;
                            return a.xhttpCall("GET", "identity/v2/auth/account/delete", n, null, t)
                        },
                        unlockAccountByToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.checkJson(t)) return n(a.message("unlockProfileModel"));
                            var i = {};
                            i.access_token = e;
                            return a.xhttpCall("PUT", "identity/v2/auth/account/unlock", i, t, n)
                        },
                        checkEmailAvailability: function(e, t) {
                            if (a.isNull(e)) return t(a.message("email"));
                            var n = {};
                            n.email = e;
                            return a.xhttpCall("GET", "identity/v2/auth/email", n, null, t)
                        },
                        verifyEmail: function(e, t, n, i, r) {
                            if (a.isNull(e)) return r(a.message("verificationToken"));
                            var s = {};
                            s.verificationToken = e, a.isNull(t) || (s.fields = t), a.isNull(n) || (s.url = n), a.isNull(i) || (s.welcomeEmailTemplate = i);
                            return a.xhttpCall("GET", "identity/v2/auth/email", s, null, r)
                        },
                        verifyEmailByOTP: function(e, t, n, i, r) {
                            if (a.checkJson(e)) return r(a.message("emailVerificationByOtpModel"));
                            var s = {};
                            a.isNull(t) || (s.fields = t), a.isNull(n) || (s.url = n), a.isNull(i) || (s.welcomeEmailTemplate = i);
                            return a.xhttpCall("PUT", "identity/v2/auth/email", s, e, r)
                        },
                        addEmail: function(e, t, n, i, r, s) {
                            if (a.isNull(e)) return s(a.message("accessToken"));
                            if (a.isNull(t)) return s(a.message("email"));
                            if (a.isNull(n)) return s(a.message("type"));
                            var o = {};
                            o.access_token = e, a.isNull(i) || (o.emailTemplate = i), a.isNull(r) || (o.verificationUrl = r);
                            var u = {};
                            u.email = t, u.type = n;
                            return a.xhttpCall("POST", "identity/v2/auth/email", o, u, s)
                        },
                        removeEmail: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("email"));
                            var i = {};
                            i.access_token = e;
                            var r = {};
                            r.email = t;
                            return a.xhttpCall("DELETE", "identity/v2/auth/email", i, r, n)
                        },
                        loginByEmail: function(e, t, n, i, r, s) {
                            if (a.checkJson(e)) return s(a.message("emailAuthenticationModel"));
                            var o = {};
                            a.isNull(t) || (o.emailTemplate = t), a.isNull(n) || (o.fields = n), a.isNull(i) || (o.loginUrl = i), a.isNull(r) || (o.verificationUrl = r);
                            return a.xhttpCall("POST", "identity/v2/auth/login", o, e, s)
                        },
                        loginByUserName: function(e, t, n, i, r, s) {
                            if (a.checkJson(e)) return s(a.message("userNameAuthenticationModel"));
                            var o = {};
                            a.isNull(t) || (o.emailTemplate = t), a.isNull(n) || (o.fields = n), a.isNull(i) || (o.loginUrl = i), a.isNull(r) || (o.verificationUrl = r);
                            return a.xhttpCall("POST", "identity/v2/auth/login", o, e, s)
                        },
                        forgotPassword: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("email"));
                            if (a.isNull(t)) return i(a.message("resetPasswordUrl"));
                            var r = {};
                            r.resetPasswordUrl = t, a.isNull(n) || (r.emailTemplate = n);
                            var s = {};
                            s.email = e;
                            return a.xhttpCall("POST", "identity/v2/auth/password", r, s, i)
                        },
                        resetPasswordBySecurityAnswerAndEmail: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPasswordBySecurityAnswerAndEmailModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/password/securityanswer", {}, e, t)
                        },
                        resetPasswordBySecurityAnswerAndPhone: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPasswordBySecurityAnswerAndPhoneModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/password/securityanswer", {}, e, t)
                        },
                        resetPasswordBySecurityAnswerAndUserName: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPasswordBySecurityAnswerAndUserNameModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/password/securityanswer", {}, e, t)
                        },
                        resetPasswordByResetToken: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPasswordByResetTokenModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/password/reset", {}, e, t)
                        },
                        resetPasswordByEmailOTP: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPasswordByEmailAndOtpModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/password/reset", {}, e, t)
                        },
                        resetPasswordByOTPAndUserName: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPasswordByUserNameModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/password/reset", {}, e, t)
                        },
                        changePassword: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.isNull(t)) return i(a.message("newPassword"));
                            if (a.isNull(n)) return i(a.message("oldPassword"));
                            var r = {};
                            r.access_token = e;
                            var s = {};
                            s.newPassword = t, s.oldPassword = n;
                            return a.xhttpCall("PUT", "identity/v2/auth/password/change", r, s, i)
                        },
                        unlinkSocialIdentities: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.isNull(t)) return i(a.message("provider"));
                            if (a.isNull(n)) return i(a.message("providerId"));
                            var r = {};
                            r.access_token = e;
                            var s = {};
                            s.provider = t, s.providerId = n;
                            return a.xhttpCall("DELETE", "identity/v2/auth/socialidentity", r, s, i)
                        },
                        linkSocialIdentities: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("candidateToken"));
                            var i = {};
                            i.access_token = e;
                            var r = {};
                            r.candidateToken = t;
                            return a.xhttpCall("POST", "identity/v2/auth/socialidentity", i, r, n)
                        },
                        linkSocialIdentitiesByPing: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("clientGuid"));
                            var i = {};
                            i.access_token = e;
                            var r = {};
                            r.clientGuid = t;
                            return a.xhttpCall("POST", "identity/v2/auth/socialidentity", i, r, n)
                        },
                        setOrChangeUserName: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("username"));
                            var i = {};
                            i.access_token = e;
                            var r = {};
                            r.username = t;
                            return a.xhttpCall("PUT", "identity/v2/auth/username", i, r, n)
                        },
                        checkUserNameAvailability: function(e, t) {
                            if (a.isNull(e)) return t(a.message("username"));
                            var n = {};
                            n.username = e;
                            return a.xhttpCall("GET", "identity/v2/auth/username", n, null, t)
                        },
                        acceptPrivacyPolicy: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e, a.isNull(t) || (i.fields = t);
                            return a.xhttpCall("GET", "identity/v2/auth/privacypolicy/accept", i, null, n)
                        },
                        getPrivacyPolicyHistoryByAccessToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "identity/v2/auth/privacypolicy/history", n, null, t)
                        },
                        userRegistrationByEmail: function(e, t, n, i, r, s, o, u) {
                            if (a.checkJson(e)) return u(a.message("authUserRegistrationModel"));
                            if (a.isNull(t)) return u(a.message("sott"));
                            var l = {};
                            l.sott = t, a.isNull(n) || (l.emailTemplate = n), a.isNull(i) || (l.fields = i), a.isNull(r) || (l.options = r), a.isNull(s) || (l.verificationUrl = s), a.isNull(o) || (l.welcomeEmailTemplate = o);
                            return a.xhttpCall("POST", "identity/v2/auth/register", l, e, u)
                        },
                        userRegistrationByCaptcha: function(e, t, n, i, r, s, o, u) {
                            if (a.checkJson(e)) return u(a.message("authUserRegistrationModelWithCaptcha"));
                            var l = {};
                            a.isNull(t) || (l.emailTemplate = t), a.isNull(n) || (l.fields = n), a.isNull(i) || (l.options = i), a.isNull(r) || (l.smsTemplate = r), a.isNull(s) || (l.verificationUrl = s), a.isNull(o) || (l.welcomeEmailTemplate = o);
                            return a.xhttpCall("POST", "identity/v2/auth/register/captcha", l, e, u)
                        },
                        authResendEmailVerification: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("email"));
                            var r = {};
                            a.isNull(t) || (r.emailTemplate = t), a.isNull(n) || (r.verificationUrl = n);
                            var s = {};
                            s.email = e;
                            return a.xhttpCall("PUT", "identity/v2/auth/register", r, s, i)
                        }
                    }, u.configurationApi = {}, u.configurationApi = {
                        getConfigurations: function(e) {
                            return a.xhttpCall("GET", "ciam/appinfo", {}, null, e)
                        },
                        getServerInfo: function(e, t) {
                            var n = {};
                            null !== e && (n.timeDifference = e);
                            return a.xhttpCall("GET", "identity/v2/serverinfo", n, null, t)
                        }
                    }, u.multiFactorAuthenticationApi = {}, u.multiFactorAuthenticationApi = {
                        mfaConfigureByAccessToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e, a.isNull(t) || (i.smsTemplate2FA = t);
                            return a.xhttpCall("GET", "identity/v2/auth/account/2fa", i, null, n)
                        },
                        mfaUpdateSetting: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.checkJson(t)) return i(a.message("multiFactorAuthModelWithLockout"));
                            var r = {};
                            r.access_token = e, a.isNull(n) || (r.fields = n);
                            return a.xhttpCall("PUT", "identity/v2/auth/account/2fa/verification/otp", r, t, i)
                        },
                        mfaUpdateByAccessToken: function(e, t, n, i, r) {
                            if (a.isNull(e)) return r(a.message("accessToken"));
                            if (a.checkJson(t)) return r(a.message("multiFactorAuthModelByGoogleAuthenticatorCode"));
                            var s = {};
                            s.access_token = e, a.isNull(n) || (s.fields = n), a.isNull(i) || (s.smsTemplate = i);
                            return a.xhttpCall("PUT", "identity/v2/auth/account/2fa/verification/googleauthenticatorcode", s, t, r)
                        },
                        mfaUpdatePhoneNumberByToken: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.isNull(t)) return i(a.message("phoneNo2FA"));
                            var r = {};
                            r.access_token = e, a.isNull(n) || (r.smsTemplate2FA = n);
                            var s = {};
                            s.phoneNo2FA = t;
                            return a.xhttpCall("PUT", "identity/v2/auth/account/2fa", r, s, i)
                        },
                        mfaResetGoogleAuthByToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e;
                            var r = {};
                            r.googleauthenticator = t;
                            return a.xhttpCall("DELETE", "identity/v2/auth/account/2fa/authenticator", i, r, n)
                        },
                        mfaResetSMSAuthByToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e;
                            var r = {};
                            r.otpauthenticator = t;
                            return a.xhttpCall("DELETE", "identity/v2/auth/account/2fa/authenticator", i, r, n)
                        },
                        mfaBackupCodeByAccessToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "identity/v2/auth/account/2fa/backupcode", n, null, t)
                        },
                        mfaResetBackupCodeByAccessToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "identity/v2/auth/account/2fa/backupcode/reset", n, null, t)
                        },
                        mfaLoginByEmail: function(e, t, n, i, r, s, o, u, l) {
                            if (a.isNull(e)) return l(a.message("email"));
                            if (a.isNull(t)) return l(a.message("password"));
                            var c = {};
                            a.isNull(n) || (c.emailTemplate = n), a.isNull(i) || (c.fields = i), a.isNull(r) || (c.loginUrl = r), a.isNull(s) || (c.smsTemplate = s), a.isNull(o) || (c.smsTemplate2FA = o), a.isNull(u) || (c.verificationUrl = u);
                            var g = {};
                            g.email = e, g.password = t;
                            return a.xhttpCall("POST", "identity/v2/auth/login/2fa", c, g, l)
                        },
                        mfaLoginByUserName: function(e, t, n, i, r, s, o, u, l) {
                            if (a.isNull(e)) return l(a.message("password"));
                            if (a.isNull(t)) return l(a.message("username"));
                            var c = {};
                            a.isNull(n) || (c.emailTemplate = n), a.isNull(i) || (c.fields = i), a.isNull(r) || (c.loginUrl = r), a.isNull(s) || (c.smsTemplate = s), a.isNull(o) || (c.smsTemplate2FA = o), a.isNull(u) || (c.verificationUrl = u);
                            var g = {};
                            g.password = e, g.username = t;
                            return a.xhttpCall("POST", "identity/v2/auth/login/2fa", c, g, l)
                        },
                        mfaLoginByPhone: function(e, t, n, i, r, s, o, u, l) {
                            if (a.isNull(e)) return l(a.message("password"));
                            if (a.isNull(t)) return l(a.message("phone"));
                            var c = {};
                            a.isNull(n) || (c.emailTemplate = n), a.isNull(i) || (c.fields = i), a.isNull(r) || (c.loginUrl = r), a.isNull(s) || (c.smsTemplate = s), a.isNull(o) || (c.smsTemplate2FA = o), a.isNull(u) || (c.verificationUrl = u);
                            var g = {};
                            g.password = e, g.phone = t;
                            return a.xhttpCall("POST", "identity/v2/auth/login/2fa", c, g, l)
                        },
                        mfaValidateOTPByPhone: function(e, t, n, i, r) {
                            if (a.checkJson(e)) return r(a.message("multiFactorAuthModelWithLockout"));
                            if (a.isNull(t)) return r(a.message("secondFactorAuthenticationToken"));
                            var s = {};
                            s.secondFactorAuthenticationToken = t, a.isNull(n) || (s.fields = n), a.isNull(i) || (s.smsTemplate2FA = i);
                            return a.xhttpCall("PUT", "identity/v2/auth/login/2fa/verification/otp", s, e, r)
                        },
                        mfaValidateGoogleAuthCode: function(e, t, n, i, r) {
                            if (a.isNull(e)) return r(a.message("googleAuthenticatorCode"));
                            if (a.isNull(t)) return r(a.message("secondFactorAuthenticationToken"));
                            var s = {};
                            s.secondFactorAuthenticationToken = t, a.isNull(n) || (s.fields = n), a.isNull(i) || (s.smsTemplate2FA = i);
                            var o = {};
                            o.googleAuthenticatorCode = e;
                            return a.xhttpCall("PUT", "identity/v2/auth/login/2fa/verification/googleauthenticatorcode", s, o, r)
                        },
                        mfaValidateBackupCode: function(e, t, n, i) {
                            if (a.checkJson(e)) return i(a.message("multiFactorAuthModelByBackupCode"));
                            if (a.isNull(t)) return i(a.message("secondFactorAuthenticationToken"));
                            var r = {};
                            r.secondFactorAuthenticationToken = t, a.isNull(n) || (r.fields = n);
                            return a.xhttpCall("PUT", "identity/v2/auth/login/2fa/verification/backupcode", r, e, i)
                        },
                        mfaUpdatePhoneNumber: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("phoneNo2FA"));
                            if (a.isNull(t)) return i(a.message("secondFactorAuthenticationToken"));
                            var r = {};
                            r.secondFactorAuthenticationToken = t, a.isNull(n) || (r.smsTemplate2FA = n);
                            var s = {};
                            s.phoneNo2FA = e;
                            return a.xhttpCall("PUT", "identity/v2/auth/login/2fa", r, s, i)
                        },
                        mfaResendOTP: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("secondFactorAuthenticationToken"));
                            var i = {};
                            i.secondFactorAuthenticationToken = e, a.isNull(t) || (i.smsTemplate2FA = t);
                            return a.xhttpCall("GET", "identity/v2/auth/login/2fa/resend", i, null, n)
                        }
                    }, u.customObjectApi = {}, u.customObjectApi = {
                        createCustomObjectByToken: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.isNull(t)) return i(a.message("objectName"));
                            if (a.checkJson(n)) return i(a.message("payload"));
                            var r = {};
                            r.access_token = e, r.objectName = t;
                            return a.xhttpCall("POST", "identity/v2/auth/customobject", r, n, i)
                        },
                        updateCustomObjectByToken: function(e, t, n, i, r, s) {
                            if (a.isNull(e)) return s(a.message("accessToken"));
                            if (a.isNull(t)) return s(a.message("objectName"));
                            if (a.isNull(n)) return s(a.message("objectRecordId"));
                            if (a.checkJson(i)) return s(a.message("payload"));
                            var o = {};
                            o.access_token = e, o.objectName = t, null !== r && (o.updateType = r);
                            var u = "identity/v2/auth/customobject/" + n;
                            return a.xhttpCall("PUT", u, o, i, s)
                        },
                        getCustomObjectByToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("objectName"));
                            var i = {};
                            i.access_token = e, i.objectName = t;
                            return a.xhttpCall("GET", "identity/v2/auth/customobject", i, null, n)
                        },
                        getCustomObjectByRecordIDAndToken: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.isNull(t)) return i(a.message("objectName"));
                            if (a.isNull(n)) return i(a.message("objectRecordId"));
                            var r = {};
                            r.access_token = e, r.objectName = t;
                            var s = "identity/v2/auth/customobject/" + n;
                            return a.xhttpCall("GET", s, r, null, i)
                        },
                        deleteCustomObjectByToken: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.isNull(t)) return i(a.message("objectName"));
                            if (a.isNull(n)) return i(a.message("objectRecordId"));
                            var r = {};
                            r.access_token = e, r.objectName = t;
                            var s = "identity/v2/auth/customobject/" + n;
                            return a.xhttpCall("DELETE", s, r, null, i)
                        }
                    }, u.customRegistrationDataApi = {}, u.customRegistrationDataApi = {
                        authGetRegistrationData: function(e, t, n, i, r) {
                            if (a.isNull(e)) return r(a.message("type"));
                            var s = {};
                            null !== t && (s.limit = t), a.isNull(n) || (s.parentId = n), null !== i && (s.skip = i);
                            var o = "identity/v2/auth/registrationdata/" + e;
                            return a.xhttpCall("GET", o, s, null, r)
                        },
                        validateRegistrationDataCode: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("code"));
                            if (a.isNull(t)) return n(a.message("recordId"));
                            var i = {};
                            i.code = e, i.recordId = t;
                            return a.xhttpCall("POST", "identity/v2/auth/registrationdata/validatecode", {}, i, n)
                        }
                    }, u.smartLoginApi = {}, u.smartLoginApi = {
                        smartLoginTokenVerification: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("verificationToken"));
                            var i = {};
                            i.verificationToken = e, a.isNull(t) || (i.welcomeEmailTemplate = t);
                            return a.xhttpCall("GET", "identity/v2/auth/email/smartlogin", i, null, n)
                        },
                        smartLoginByEmail: function(e, t, n, i, r, s) {
                            if (a.isNull(e)) return s(a.message("clientGuid"));
                            if (a.isNull(t)) return s(a.message("email"));
                            var o = {};
                            o.clientGuid = e, o.email = t, a.isNull(n) || (o.redirectUrl = n), a.isNull(i) || (o.smartLoginEmailTemplate = i), a.isNull(r) || (o.welcomeEmailTemplate = r);
                            return a.xhttpCall("GET", "identity/v2/auth/login/smartlogin", o, null, s)
                        },
                        smartLoginByUserName: function(e, t, n, i, r, s) {
                            if (a.isNull(e)) return s(a.message("clientGuid"));
                            if (a.isNull(t)) return s(a.message("username"));
                            var o = {};
                            o.clientGuid = e, o.username = t, a.isNull(n) || (o.redirectUrl = n), a.isNull(i) || (o.smartLoginEmailTemplate = i), a.isNull(r) || (o.welcomeEmailTemplate = r);
                            return a.xhttpCall("GET", "identity/v2/auth/login/smartlogin", o, null, s)
                        },
                        smartLoginPing: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("clientGuid"));
                            var i = {};
                            i.clientGuid = e, a.isNull(t) || (i.fields = t);
                            return a.xhttpCall("GET", "identity/v2/auth/login/smartlogin/ping", i, null, n)
                        }
                    }, u.phoneAuthenticationApi = {}, u.phoneAuthenticationApi = {
                        loginByPhone: function(e, t, n, i, r) {
                            if (a.checkJson(e)) return r(a.message("phoneAuthenticationModel"));
                            var s = {};
                            a.isNull(t) || (s.fields = t), a.isNull(n) || (s.loginUrl = n), a.isNull(i) || (s.smsTemplate = i);
                            return a.xhttpCall("POST", "identity/v2/auth/login", s, e, r)
                        },
                        forgotPasswordByPhoneOTP: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("phone"));
                            var i = {};
                            a.isNull(t) || (i.smsTemplate = t);
                            var r = {};
                            r.phone = e;
                            return a.xhttpCall("POST", "identity/v2/auth/password/otp", i, r, n)
                        },
                        resetPasswordByPhoneOTP: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPasswordByOTPModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/password/otp", {}, e, t)
                        },
                        phoneVerificationByOTP: function(e, t, n, i, r) {
                            if (a.isNull(e)) return r(a.message("otp"));
                            if (a.isNull(t)) return r(a.message("phone"));
                            var s = {};
                            s.otp = e, a.isNull(n) || (s.fields = n), a.isNull(i) || (s.smsTemplate = i);
                            var o = {};
                            o.phone = t;
                            return a.xhttpCall("PUT", "identity/v2/auth/phone/otp", s, o, r)
                        },
                        phoneVerificationOTPByAccessToken: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.isNull(t)) return i(a.message("otp"));
                            var r = {};
                            r.access_token = e, r.otp = t, a.isNull(n) || (r.smsTemplate = n);
                            return a.xhttpCall("PUT", "identity/v2/auth/phone/otp", r, null, i)
                        },
                        phoneResendVerificationOTP: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("phone"));
                            var i = {};
                            a.isNull(t) || (i.smsTemplate = t);
                            var r = {};
                            r.phone = e;
                            return a.xhttpCall("POST", "identity/v2/auth/phone/otp", i, r, n)
                        },
                        phoneResendVerificationOTPByToken: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.isNull(t)) return i(a.message("phone"));
                            var r = {};
                            r.access_token = e, a.isNull(n) || (r.smsTemplate = n);
                            var s = {};
                            s.phone = t;
                            return a.xhttpCall("POST", "identity/v2/auth/phone/otp", r, s, i)
                        },
                        updatePhoneNumber: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.isNull(t)) return i(a.message("phone"));
                            var r = {};
                            r.access_token = e, a.isNull(n) || (r.smsTemplate = n);
                            var s = {};
                            s.phone = t;
                            return a.xhttpCall("PUT", "identity/v2/auth/phone", r, s, i)
                        },
                        checkPhoneNumberAvailability: function(e, t) {
                            if (a.isNull(e)) return t(a.message("phone"));
                            var n = {};
                            n.phone = e;
                            return a.xhttpCall("GET", "identity/v2/auth/phone", n, null, t)
                        },
                        removePhoneIDByAccessToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("DELETE", "identity/v2/auth/phone", n, null, t)
                        },
                        userRegistrationByPhone: function(e, t, n, i, r, s, o, u) {
                            if (a.checkJson(e)) return u(a.message("authUserRegistrationModel"));
                            if (a.isNull(t)) return u(a.message("sott"));
                            var l = {};
                            l.sott = t, a.isNull(n) || (l.fields = n), a.isNull(i) || (l.options = i), a.isNull(r) || (l.smsTemplate = r), a.isNull(s) || (l.verificationUrl = s), a.isNull(o) || (l.welcomeEmailTemplate = o);
                            return a.xhttpCall("POST", "identity/v2/auth/register", l, e, u)
                        }
                    }, u.riskBasedAuthenticationApi = {}, u.riskBasedAuthenticationApi = {
                        rbaLoginByEmail: function(e, t, n, i, r, s, o, u, l, c, g, d, f, N, p, m, M, T, y) {
                            if (a.checkJson(e)) return y(a.message("emailAuthenticationModel"));
                            var h = {};
                            a.isNull(t) || (h.emailTemplate = t), a.isNull(n) || (h.fields = n), a.isNull(i) || (h.loginUrl = i), null !== r && (h.passwordDelegation = r), a.isNull(s) || (h.passwordDelegationApp = s), a.isNull(o) || (h.rbaBrowserEmailTemplate = o), a.isNull(u) || (h.rbaBrowserSmsTemplate = u), a.isNull(l) || (h.rbaCityEmailTemplate = l), a.isNull(c) || (h.rbaCitySmsTemplate = c), a.isNull(g) || (h.rbaCountryEmailTemplate = g), a.isNull(d) || (h.rbaCountrySmsTemplate = d), a.isNull(f) || (h.rbaIpEmailTemplate = f), a.isNull(N) || (h.rbaIpSmsTemplate = N), a.isNull(p) || (h.rbaOneclickEmailTemplate = p), a.isNull(m) || (h.rbaOTPSmsTemplate = m), a.isNull(M) || (h.smsTemplate = M), a.isNull(T) || (h.verificationUrl = T);
                            return a.xhttpCall("POST", "identity/v2/auth/login", h, e, y)
                        },
                        rbaLoginByUserName: function(e, t, n, i, r, s, o, u, l, c, g, d, f, N, p, m, M, T, y) {
                            if (a.checkJson(e)) return y(a.message("userNameAuthenticationModel"));
                            var h = {};
                            a.isNull(t) || (h.emailTemplate = t), a.isNull(n) || (h.fields = n), a.isNull(i) || (h.loginUrl = i), null !== r && (h.passwordDelegation = r), a.isNull(s) || (h.passwordDelegationApp = s), a.isNull(o) || (h.rbaBrowserEmailTemplate = o), a.isNull(u) || (h.rbaBrowserSmsTemplate = u), a.isNull(l) || (h.rbaCityEmailTemplate = l), a.isNull(c) || (h.rbaCitySmsTemplate = c), a.isNull(g) || (h.rbaCountryEmailTemplate = g), a.isNull(d) || (h.rbaCountrySmsTemplate = d), a.isNull(f) || (h.rbaIpEmailTemplate = f), a.isNull(N) || (h.rbaIpSmsTemplate = N), a.isNull(p) || (h.rbaOneclickEmailTemplate = p), a.isNull(m) || (h.rbaOTPSmsTemplate = m), a.isNull(M) || (h.smsTemplate = M), a.isNull(T) || (h.verificationUrl = T);
                            return a.xhttpCall("POST", "identity/v2/auth/login", h, e, y)
                        },
                        rbaLoginByPhone: function(e, t, n, i, r, s, o, u, l, c, g, d, f, N, p, m, M, T, y) {
                            if (a.checkJson(e)) return y(a.message("phoneAuthenticationModel"));
                            var h = {};
                            a.isNull(t) || (h.emailTemplate = t), a.isNull(n) || (h.fields = n), a.isNull(i) || (h.loginUrl = i), null !== r && (h.passwordDelegation = r), a.isNull(s) || (h.passwordDelegationApp = s), a.isNull(o) || (h.rbaBrowserEmailTemplate = o), a.isNull(u) || (h.rbaBrowserSmsTemplate = u), a.isNull(l) || (h.rbaCityEmailTemplate = l), a.isNull(c) || (h.rbaCitySmsTemplate = c), a.isNull(g) || (h.rbaCountryEmailTemplate = g), a.isNull(d) || (h.rbaCountrySmsTemplate = d), a.isNull(f) || (h.rbaIpEmailTemplate = f), a.isNull(N) || (h.rbaIpSmsTemplate = N), a.isNull(p) || (h.rbaOneclickEmailTemplate = p), a.isNull(m) || (h.rbaOTPSmsTemplate = m), a.isNull(M) || (h.smsTemplate = M), a.isNull(T) || (h.verificationUrl = T);
                            return a.xhttpCall("POST", "identity/v2/auth/login", h, e, y)
                        }
                    }, u.passwordLessLoginApi = {}, u.passwordLessLoginApi = {
                        passwordlessLoginPhoneVerification: function(e, t, n, i) {
                            if (a.checkJson(e)) return i(a.message("passwordLessLoginOtpModel"));
                            var r = {};
                            a.isNull(t) || (r.fields = t), a.isNull(n) || (r.smsTemplate = n);
                            return a.xhttpCall("PUT", "identity/v2/auth/login/passwordlesslogin/otp/verify", r, e, i)
                        },
                        passwordlessLoginByPhone: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("phone"));
                            var i = {};
                            i.phone = e, a.isNull(t) || (i.smsTemplate = t);
                            return a.xhttpCall("GET", "identity/v2/auth/login/passwordlesslogin/otp", i, null, n)
                        },
                        passwordlessLoginByEmail: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("email"));
                            var r = {};
                            r.email = e, a.isNull(t) || (r.passwordLessLoginTemplate = t), a.isNull(n) || (r.verificationUrl = n);
                            return a.xhttpCall("GET", "identity/v2/auth/login/passwordlesslogin/email", r, null, i)
                        },
                        passwordlessLoginByUserName: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("username"));
                            var r = {};
                            r.username = e, a.isNull(t) || (r.passwordLessLoginTemplate = t), a.isNull(n) || (r.verificationUrl = n);
                            return a.xhttpCall("GET", "identity/v2/auth/login/passwordlesslogin/email", r, null, i)
                        },
                        passwordlessLoginVerification: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("verificationToken"));
                            var r = {};
                            r.verificationToken = e, a.isNull(t) || (r.fields = t), a.isNull(n) || (r.welcomeEmailTemplate = n);
                            return a.xhttpCall("GET", "identity/v2/auth/login/passwordlesslogin/email/verify", r, null, i)
                        }
                    }, u.pinAuthenticationApi = {}, u.pinAuthenticationApi = {
                        pinLogin: function(e, t, n) {
                            if (a.checkJson(e)) return n(a.message("loginByPINModel"));
                            if (a.isNull(t)) return n(a.message("sessionToken"));
                            var i = {};
                            i.session_token = t;
                            return a.xhttpCall("POST", "identity/v2/auth/login/pin", i, e, n)
                        },
                        sendForgotPINEmailByEmail: function(e, t, n, i) {
                            if (a.checkJson(e)) return i(a.message("forgotPINLinkByEmailModel"));
                            var r = {};
                            a.isNull(t) || (r.emailTemplate = t), a.isNull(n) || (r.resetPINUrl = n);
                            return a.xhttpCall("POST", "identity/v2/auth/pin/forgot/email", r, e, i)
                        },
                        sendForgotPINEmailByUsername: function(e, t, n, i) {
                            if (a.checkJson(e)) return i(a.message("forgotPINLinkByUserNameModel"));
                            var r = {};
                            a.isNull(t) || (r.emailTemplate = t), a.isNull(n) || (r.resetPINUrl = n);
                            return a.xhttpCall("POST", "identity/v2/auth/pin/forgot/username", r, e, i)
                        },
                        resetPINByResetToken: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPINByResetToken"));
                            return a.xhttpCall("PUT", "identity/v2/auth/pin/reset/token", {}, e, t)
                        },
                        resetPINByEmailAndSecurityAnswer: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPINBySecurityQuestionAnswerAndEmailModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/pin/reset/securityanswer/email", {}, e, t)
                        },
                        resetPINByUsernameAndSecurityAnswer: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPINBySecurityQuestionAnswerAndUsernameModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/pin/reset/securityanswer/username", {}, e, t)
                        },
                        resetPINByPhoneAndSecurityAnswer: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPINBySecurityQuestionAnswerAndPhoneModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/pin/reset/securityanswer/phone", {}, e, t)
                        },
                        sendForgotPINSMSByPhone: function(e, t, n) {
                            if (a.checkJson(e)) return n(a.message("forgotPINOtpByPhoneModel"));
                            var i = {};
                            a.isNull(t) || (i.smsTemplate = t);
                            return a.xhttpCall("POST", "identity/v2/auth/pin/forgot/otp", i, e, n)
                        },
                        changePINByAccessToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.checkJson(t)) return n(a.message("changePINModel"));
                            var i = {};
                            i.access_token = e;
                            return a.xhttpCall("PUT", "identity/v2/auth/pin/change", i, t, n)
                        },
                        resetPINByPhoneAndOtp: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPINByPhoneAndOTPModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/pin/reset/otp/phone", {}, e, t)
                        },
                        resetPINByEmailAndOtp: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPINByEmailAndOtpModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/pin/reset/otp/email", {}, e, t)
                        },
                        resetPINByUsernameAndOtp: function(e, t) {
                            if (a.checkJson(e)) return t(a.message("resetPINByUsernameAndOtpModel"));
                            return a.xhttpCall("PUT", "identity/v2/auth/pin/reset/otp/username", {}, e, t)
                        },
                        setPINByPinAuthToken: function(e, t, n) {
                            if (a.checkJson(e)) return n(a.message("pINRequiredModel"));
                            if (a.isNull(t)) return n(a.message("pinAuthToken"));
                            var i = {};
                            i.pinAuthToken = t;
                            return a.xhttpCall("POST", "identity/v2/auth/pin/set/pinauthtoken", i, e, n)
                        },
                        inValidatePinSessionToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("sessionToken"));
                            var n = {};
                            n.session_token = e;
                            return a.xhttpCall("GET", "identity/v2/auth/session_token/invalidate", n, null, t)
                        }
                    }, u.reAuthenticationApi = {}, u.reAuthenticationApi = {
                        mfaReAuthenticate: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e, a.isNull(t) || (i.smsTemplate2FA = t);
                            return a.xhttpCall("GET", "identity/v2/auth/account/reauth/2fa", i, null, n)
                        },
                        mfaReAuthenticateByOTP: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.checkJson(t)) return n(a.message("reauthByOtpModel"));
                            var i = {};
                            i.access_token = e;
                            return a.xhttpCall("PUT", "identity/v2/auth/account/reauth/2fa/otp", i, t, n)
                        },
                        mfaReAuthenticateByBackupCode: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.checkJson(t)) return n(a.message("reauthByBackupCodeModel"));
                            var i = {};
                            i.access_token = e;
                            return a.xhttpCall("PUT", "identity/v2/auth/account/reauth/2fa/backupcode", i, t, n)
                        },
                        mfaReAuthenticateByGoogleAuth: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.checkJson(t)) return n(a.message("reauthByGoogleAuthenticatorCodeModel"));
                            var i = {};
                            i.access_token = e;
                            return a.xhttpCall("PUT", "identity/v2/auth/account/reauth/2fa/googleauthenticatorcode", i, t, n)
                        },
                        mfaReAuthenticateByPassword: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.checkJson(t)) return i(a.message("passwordEventBasedAuthModelWithLockout"));
                            var r = {};
                            r.access_token = e, a.isNull(n) || (r.smsTemplate2FA = n);
                            return a.xhttpCall("PUT", "identity/v2/auth/account/reauth/password", r, t, i)
                        },
                        verifyPINAuthentication: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.checkJson(t)) return i(a.message("pINAuthEventBasedAuthModelWithLockout"));
                            var r = {};
                            r.access_token = e, a.isNull(n) || (r.smsTemplate2FA = n);
                            return a.xhttpCall("PUT", "identity/v2/auth/account/reauth/pin", r, t, i)
                        }
                    }, u.nativeSocialApi = {}, u.nativeSocialApi = {
                        getAccessTokenByFacebookAccessToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("fbAccessToken"));
                            var i = {};
                            i.fb_Access_Token = e, a.isNull(t) || (i.socialAppName = t);
                            return a.xhttpCall("GET", "api/v2/access_token/facebook", i, null, n)
                        },
                        getAccessTokenByTwitterAccessToken: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("twAccessToken"));
                            if (a.isNull(t)) return i(a.message("twTokenSecret"));
                            var r = {};
                            r.tw_Access_Token = e, r.tw_Token_Secret = t, a.isNull(n) || (r.socialAppName = n);
                            return a.xhttpCall("GET", "api/v2/access_token/twitter", r, null, i)
                        },
                        getAccessTokenByGoogleAccessToken: function(e, t, n, i, r) {
                            if (a.isNull(e)) return r(a.message("googleAccessToken"));
                            var s = {};
                            s.google_Access_Token = e, a.isNull(t) || (s.client_id = t), a.isNull(n) || (s.refresh_token = n), a.isNull(i) || (s.socialAppName = i);
                            return a.xhttpCall("GET", "api/v2/access_token/google", s, null, r)
                        },
                        getAccessTokenByGoogleJWTAccessToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("idToken"));
                            var n = {};
                            n.id_Token = e;
                            return a.xhttpCall("GET", "api/v2/access_token/googlejwt", n, null, t)
                        },
                        getAccessTokenByLinkedinAccessToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("lnAccessToken"));
                            var i = {};
                            i.ln_Access_Token = e, a.isNull(t) || (i.socialAppName = t);
                            return a.xhttpCall("GET", "api/v2/access_token/linkedin", i, null, n)
                        },
                        getAccessTokenByFoursquareAccessToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("fsAccessToken"));
                            var n = {};
                            n.fs_Access_Token = e;
                            return a.xhttpCall("GET", "api/v2/access_token/foursquare", n, null, t)
                        },
                        getAccessTokenByAppleIdCode: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("code"));
                            var i = {};
                            i.code = e, a.isNull(t) || (i.socialAppName = t);
                            return a.xhttpCall("GET", "api/v2/access_token/apple", i, null, n)
                        },
                        getAccessTokenByWeChatCode: function(e, t) {
                            if (a.isNull(e)) return t(a.message("code"));
                            var n = {};
                            n.code = e;
                            return a.xhttpCall("GET", "api/v2/access_token/wechat", n, null, t)
                        },
                        getAccessTokenByVkontakteAccessToken: function(e, t) {
                            if (a.isNull(e)) return t(a.message("vkAccessToken"));
                            var n = {};
                            n.vk_access_token = e;
                            return a.xhttpCall("GET", "api/v2/access_token/vkontakte", n, null, t)
                        },
                        getAccessTokenByGoogleAuthCode: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("googleAuthcode"));
                            var i = {};
                            i.google_authcode = e, a.isNull(t) || (i.socialAppName = t);
                            return a.xhttpCall("GET", "api/v2/access_token/google", i, null, n)
                        }
                    }, u.socialApi = {}, u.socialApi = {
                        getAlbums: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "api/v2/album", n, null, t)
                        },
                        getAlbumsWithCursor: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("nextCursor"));
                            var i = {};
                            i.access_token = e, i.nextCursor = t;
                            return a.xhttpCall("GET", "api/v2/album", i, null, n)
                        },
                        getAudios: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "api/v2/audio", n, null, t)
                        },
                        getAudiosWithCursor: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("nextCursor"));
                            var i = {};
                            i.access_token = e, i.nextCursor = t;
                            return a.xhttpCall("GET", "api/v2/audio", i, null, n)
                        },
                        getCheckIns: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "api/v2/checkin", n, null, t)
                        },
                        getCheckInsWithCursor: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("nextCursor"));
                            var i = {};
                            i.access_token = e, i.nextCursor = t;
                            return a.xhttpCall("GET", "api/v2/checkin", i, null, n)
                        },
                        getContacts: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e, a.isNull(t) || (i.nextCursor = t);
                            return a.xhttpCall("GET", "api/v2/contact", i, null, n)
                        },
                        getEvents: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "api/v2/event", n, null, t)
                        },
                        getEventsWithCursor: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("nextCursor"));
                            var i = {};
                            i.access_token = e, i.nextCursor = t;
                            return a.xhttpCall("GET", "api/v2/event", i, null, n)
                        },
                        getFollowings: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "api/v2/following", n, null, t)
                        },
                        getFollowingsWithCursor: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("nextCursor"));
                            var i = {};
                            i.access_token = e, i.nextCursor = t;
                            return a.xhttpCall("GET", "api/v2/following", i, null, n)
                        },
                        getGroups: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "api/v2/group", n, null, t)
                        },
                        getGroupsWithCursor: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("nextCursor"));
                            var i = {};
                            i.access_token = e, i.nextCursor = t;
                            return a.xhttpCall("GET", "api/v2/group", i, null, n)
                        },
                        getLikes: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "api/v2/like", n, null, t)
                        },
                        getLikesWithCursor: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("nextCursor"));
                            var i = {};
                            i.access_token = e, i.nextCursor = t;
                            return a.xhttpCall("GET", "api/v2/like", i, null, n)
                        },
                        getMentions: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "api/v2/mention", n, null, t)
                        },
                        postMessage: function(e, t, n, i, r) {
                            if (a.isNull(e)) return r(a.message("accessToken"));
                            if (a.isNull(t)) return r(a.message("message"));
                            if (a.isNull(n)) return r(a.message("subject"));
                            if (a.isNull(i)) return r(a.message("to"));
                            var s = {};
                            s.access_token = e, s.message = t, s.subject = n, s.to = i;
                            return a.xhttpCall("POST", "api/v2/message", s, null, r)
                        },
                        getPage: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("pageName"));
                            var i = {};
                            i.access_token = e, i.pageName = t;
                            return a.xhttpCall("GET", "api/v2/page", i, null, n)
                        },
                        getPhotos: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("albumId"));
                            var i = {};
                            i.access_token = e, i.albumId = t;
                            return a.xhttpCall("GET", "api/v2/photo", i, null, n)
                        },
                        getPosts: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "api/v2/post", n, null, t)
                        },
                        statusPosting: function(e, t, n, i, r, s, o, u, l) {
                            if (a.isNull(e)) return l(a.message("accessToken"));
                            if (a.isNull(t)) return l(a.message("caption"));
                            if (a.isNull(n)) return l(a.message("description"));
                            if (a.isNull(i)) return l(a.message("imageurl"));
                            if (a.isNull(r)) return l(a.message("status"));
                            if (a.isNull(s)) return l(a.message("title"));
                            if (a.isNull(o)) return l(a.message("url"));
                            var c = {};
                            c.access_token = e, c.caption = t, c.description = n, c.imageurl = i, c.status = r, c.title = s, c.url = o, a.isNull(u) || (c.shorturl = u);
                            return a.xhttpCall("POST", "api/v2/status", c, null, l)
                        },
                        trackableStatusPosting: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.checkJson(t)) return n(a.message("statusModel"));
                            var i = {};
                            i.access_token = e;
                            return a.xhttpCall("POST", "api/v2/status/trackable", i, t, n)
                        },
                        getTrackableStatusStats: function(e, t, n, i, r, s, o, u) {
                            if (a.isNull(e)) return u(a.message("accessToken"));
                            if (a.isNull(t)) return u(a.message("caption"));
                            if (a.isNull(n)) return u(a.message("description"));
                            if (a.isNull(i)) return u(a.message("imageurl"));
                            if (a.isNull(r)) return u(a.message("status"));
                            if (a.isNull(s)) return u(a.message("title"));
                            if (a.isNull(o)) return u(a.message("url"));
                            var l = {};
                            l.access_token = e, l.caption = t, l.description = n, l.imageurl = i, l.status = r, l.title = s, l.url = o;
                            return a.xhttpCall("GET", "api/v2/status/trackable/js", l, null, u)
                        },
                        getSocialUserProfile: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e, a.isNull(t) || (i.fields = t);
                            return a.xhttpCall("GET", "api/v2/userprofile", i, null, n)
                        },
                        getRefreshedSocialUserProfile: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            var i = {};
                            i.access_token = e, a.isNull(t) || (i.fields = t);
                            return a.xhttpCall("GET", "api/v2/userprofile/refresh", i, null, n)
                        },
                        getVideos: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.isNull(t)) return n(a.message("nextCursor"));
                            var i = {};
                            i.access_token = e, i.nextCursor = t;
                            return a.xhttpCall("GET", "api/v2/video", i, null, n)
                        }
                    }, u.consentManagementApi = {}, u.consentManagementApi = {
                        submitConsentByConsentToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("consentToken"));
                            if (a.checkJson(t)) return n(a.message("consentSubmitModel"));
                            var i = {};
                            i.consentToken = e;
                            return a.xhttpCall("POST", "identity/v2/auth/consent", i, t, n)
                        },
                        getConsentLogs: function(e, t) {
                            if (a.isNull(e)) return t(a.message("accessToken"));
                            var n = {};
                            n.access_token = e;
                            return a.xhttpCall("GET", "identity/v2/auth/consent/logs", n, null, t)
                        },
                        submitConsentByAccessToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.checkJson(t)) return n(a.message("consentSubmitModel"));
                            var i = {};
                            i.access_token = e;
                            return a.xhttpCall("POST", "identity/v2/auth/consent/profile", i, t, n)
                        },
                        verifyConsentByAccessToken: function(e, t, n, i) {
                            if (a.isNull(e)) return i(a.message("accessToken"));
                            if (a.isNull(t)) return i(a.message("event"));
                            var r = {};
                            r.access_token = e, r.event = t, r.isCustom = n;
                            return a.xhttpCall("GET", "identity/v2/auth/consent/verify", r, null, i)
                        },
                        updateConsentProfileByAccessToken: function(e, t, n) {
                            if (a.isNull(e)) return n(a.message("accessToken"));
                            if (a.checkJson(t)) return n(a.message("consentUpdateModel"));
                            var i = {};
                            i.access_token = e;
                            return a.xhttpCall("PUT", "identity/v2/auth/consent", i, t, n)
                        }
                    }, u.getToken = function() {
                        return c(r)
                    }, u.getApiKey = function() {
                        if (c("lrApiKey")) return c("lrApiKey");
                        console.log("API Key not found, The API Key needs to be initialized for this API Call")
                    }, a.isNull = function(e) {
                        return !(null !== e && "undefined" !== typeof e && e)
                    }, a._uuidFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, a.checkJson = function(e) {
                        return null === e || void 0 === e || Array.isArray(e) || "object" !== (0, i.A)(e)
                    }, a.message = function(e) {
                        return o[1e3].Description = "The API Request Parameter " + e + " is not Correct or Well Formated", o[1e3]
                    }, a.log = function(e) {
                        s.debugMode && "undefined" !== typeof console && console.error(e)
                    }, a.xhttpCall = function(e, t, i, r, u) {
                        if (s.apiKey)
                            if (a._uuidFormat.test(s.apiKey)) {
                                -1 != t.indexOf("/v2/access_token/") ? i.key = s.apiKey : i.ApiKey = s.apiKey;
                                var l = new XMLHttpRequest;
                                if (l.onreadystatechange = function() {
                                        if (4 == this.readyState && 200 == this.status) {
                                            var e = JSON.parse(l.responseText);
                                            e && e.ErrorCode ? u(e) : u("", e)
                                        }
                                    }, "ciam/appinfo" == t && (n = "https://config.lrcontent.com"), i.access_token) {
                                    var c = i.access_token;
                                    delete i.access_token
                                }
                                if (i.sott) {
                                    var g = i.sott;
                                    delete i.sott
                                }
                                l.open(e, n + "/" + t + "?" + a.makeQuerySting(i)), c && (l.setRequestHeader("authorization", "Bearer " + c), c = ""), g && (l.setRequestHeader("X-LoginRadius-Sott", g), g = ""), l.setRequestHeader("Content-type", "application/json"), l.setRequestHeader("X-Requested-With", "XMLHttpRequest"), l.onerror = function() {
                                    u(o[1e3])
                                }, l.send(JSON.stringify(r))
                            } else a.log("apiKey is not in valid guid format."), u(o[1e3]);
                        else a.log("Please set the LoginRadius ApiKey"), u(o[1e3])
                    }, a.makeQuerySting = function(e) {
                        var t = [];
                        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                        return t.join("&")
                    }, a.addEvent = function(e, t, n) {
                        var i = [];
                        t instanceof Array ? i = t : i.push(t);
                        for (var r = 0; r < i.length; r++) i[r].attachEvent ? i[r].attachEvent("on" + e, (function(e) {
                            n(e)
                        })) : i[r].addEventListener && i[r].addEventListener(e, n, !1)
                    }, a.addEvent("message", window, (function(e) {
                        if (-1 == e.origin.indexOf("hub.loginradius.com")) return;
                        g(e.data)
                    }));
                    var g = function(e) {
                        sessionStorage.setItem(r, e), u.isauthenticated = !0;
                        var t = setInterval((function() {
                            u.onlogin && (u.onlogin(), clearInterval(t))
                        }), 100)
                    };
                    var d = hash.get("lr-token");
                    return d && (window.opener && window.opener.loginradiushtml5passToken ? (window.opener.loginradiushtml5passToken(d), document.write('<style type="text/css">body { display: none !important; } </style>'), window.close()) : window.loginradiushtml5passToken ? window.loginradiushtml5passToken(d) : g(d)), u.initSDK = function(e) {
                        s.apiKey = e.apiKey, s.debugMode = e.debugMode || !1,
                            function(e, n) {
                                var i = !0;
                                l("localStorage") && (localStorage.setItem(e, n), i = !1), l("sessionStorage") && (sessionStorage.setItem(e, n), i = !1), i && t(e, n, "", window.location)
                            }("lrApiKey", e.apiKey)
                    }, u
                }()
        },
        "acc-8064": function(e, t, n) {
            "use strict";
            n.d(t, {
                $h: function() {
                    return a
                },
                IZ: function() {
                    return i
                },
                N3: function() {
                    return r
                }
            });
            var i = function(e) {
                    return /^https?:\/\/.*?cbc(music)?\.ca(:.*?)*\/?(.*?)*/.test(e)
                },
                r = function(e) {
                    return /^cbc[a-zA-Z]*?:\/\/.*?$/.test(e)
                },
                a = function(e) {
                    var t, n = "",
                        a = "Back to CBC.ca";
                    return e.referrer && (i(e.referrer) || r(e.referrer)) && (t = e.referrer, n = r(t) ? t : t.match(/^https?:\/\/([\w-]+\.)+\w+(:\d+)*/)[0], null !== e && void 0 !== e && e.mobile ? a = "Back to CBC App" : e.referrer.includes("gem.cbc.ca") ? a = "Back to CBC Gem" : e.referrer.includes("cbc.ca/listen") || e.referrer.includes("cbclisten.ca") ? (n = e.referrer, a = "Back to CBC Listen") : e.referrer.match(/subscriptions|newsletters/g) ? a = "Back to CBC Newsletters" : e.referrer.includes("ask-cbc") ? a = "Back to Ask CBC" : e.referrer.includes("/local") && (n = e.referrer, a = "Back to Local News")), e.returntotext && (a = "Back to ".concat(e.returntotext)), {
                        backButtonUrl: n,
                        buttonDesc: a
                    }
                }
        },
        "acc-43472": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addEmailForUser: function() {
                    return F
                },
                appendLRTokenToRedirection: function() {
                    return R
                },
                authenticationHOC: function() {
                    return $
                },
                changePassword: function() {
                    return Q
                },
                checkAuthenticatedPage: function() {
                    return P
                },
                checkExplainerPage: function() {
                    return U
                },
                checkVFScriptLoaded: function() {
                    return q
                },
                debugConsole: function() {
                    return re
                },
                emailRegex: function() {
                    return _
                },
                findPrimaryValue: function() {
                    return te
                },
                formatDate: function() {
                    return x
                },
                getMembershipTitleFromPath: function() {
                    return C
                },
                getViafouraMuteList: function() {
                    return V
                },
                initMembershipStore: function() {
                    return ee
                },
                loadLoginRadius: function() {
                    return K
                },
                loginRadiusLoginByEmailPassword: function() {
                    return I
                },
                loginRadiusProfileByAccessToken: function() {
                    return D
                },
                massageBodyObject: function() {
                    return O
                },
                membershipRequest: function() {
                    return E
                },
                openProviderAuth: function() {
                    return H
                },
                parseBirthDate: function() {
                    return z
                },
                postalCodeRegex: function() {
                    return S
                },
                removeIdentifiersFromURL: function() {
                    return B
                },
                renderCallback: function() {
                    return ie
                },
                sendToReferrer: function() {
                    return G
                },
                setGridClassNames: function() {
                    return b
                },
                trackEvent: function() {
                    return Y
                },
                unmuteViafouraUser: function() {
                    return W
                },
                updateViafouraAvatar: function() {
                    return J
                },
                updateViafouraEmailNoticeFreq: function() {
                    return Z
                },
                useScript: function() {
                    return ne
                }
            });
            n("acc-81675"), n("acc-77450");
            var i = n("acc-80296"),
                r = n("acc-82284"),
                a = n("acc-64467"),
                s = (n("acc-36726"), n("acc-29390"), n("acc-64075"), n("acc-15718"), n("acc-43147"), n("acc-75855"), n("acc-62020"), n("acc-21527")),
                o = n("acc-44241"),
                u = n("acc-68983"),
                l = n("acc-76314"),
                c = n.n(l),
                g = n("acc-86176"),
                d = n("acc-73442"),
                f = n("acc-68414"),
                N = n("acc-46205"),
                p = n("acc-10615"),
                m = n("acc-94730"),
                M = n("acc-8064"),
                T = n("acc-47594");

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach((function(t) {
                        (0, a.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var A = function() {
                return {
                    viafouraLogin: !1,
                    isAuthenticated: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    hasUserInitiatedLogin: !1,
                    userProfile: {},
                    community: {},
                    watch: {},
                    newsletters: [],
                    waitingOnCheck: !0,
                    onLoginRedirectRoute: "",
                    showMenu: !1,
                    socialLogin: !1,
                    socialSignUp: !1,
                    evt: "",
                    cevt: "",
                    ce: "",
                    updateEmailFlowError: null,
                    verifySocialFlowError: null,
                    ceoe: "",
                    b2cLogin: !1,
                    authenticationType: null
                }
            };

            function v() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A(),
                    n = arguments.length > 1 ? arguments[1] : void 0;
                switch (n.type) {
                    case T.H:
                        return null !== (e = n.payload) && void 0 !== e && e.userProfile ? h(h(h({}, t), n.payload), {}, {
                            userProfile: h(h({}, n.payload.userProfile), {}, {
                                FirstName: decodeURIComponent(n.payload.userProfile.FirstName),
                                LastName: decodeURIComponent(n.payload.userProfile.LastName),
                                FullName: decodeURIComponent(n.payload.userProfile.FullName)
                            })
                        }) : h(h({}, t), n.payload);
                    case T.t:
                        return A(!1);
                    default:
                        return t
                }
            }
            var j = n("acc-33450"),
                k = n("acc-63988");

            function L(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(n), !0).forEach((function(t) {
                        (0, a.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var C = function(e) {
                    return "CBC Account Centre - ".concat(function(e) {
                        return /^[^?]*\/account\/comments/i.test(e) ? "Comments" : /^[^?]*\/account\/profile/i.test(e) ? "Profile" : /^[^?]*\/account\/newsletters/i.test(e) ? "Newsletters" : /^[^?]*\/account\/tv/i.test(e) ? "CBC Gem" : /^[^?]*\/account\/privacy/i.test(e) ? "Privacy" : /^[^?]*\/account\/emaillimit/i.test(e) ? "Email threshold reached" : /^[^?]*\/account\/logout/i.test(e) ? "Signed out" : /^[^?]*\/account\/resetpassword/i.test(e) ? "Reset Password" : /^[^?]*\/account\/emailrequired/i.test(e) ? "Email Required" : /^[^?]*\/account\/forgotpassword/i.test(e) ? "Forgot Password" : /^[^?]*\/account\/login/i.test(e) ? "Login" : /^[^?]*\/account\/signup/i.test(e) ? "Signup" : /^[^?]*\/account\/success-signup/i.test(e) ? "Signup - Success" : /^[^?]*\/account\/features/i.test(e) ? "Features" : ""
                    }(e))
                },
                I = function(e) {
                    return new Promise((function(t, n) {
                        return f._.authenticationApi.loginByEmail(e, null, null, null, null, (function(e, i) {
                            e ? n(e) : t(i)
                        }))
                    }))
                },
                D = function(e) {
                    return new Promise((function(t, n) {
                        return f._.authenticationApi.getProfileByAccessToken(e, null, (function(e, i) {
                            e ? n(e) : t(i)
                        }))
                    }))
                },
                O = function(e, t) {
                    var n = Object.assign({}, e);
                    if (n.email && (n.Email = [{
                            Type: "Primary",
                            Value: n.email
                        }]), (null === n.BirthDate || "undefined" !== typeof n.BirthDate && /^\d\d?--$/.test(n.BirthDate)) && (n.BirthDate = ""), "undefined" === typeof n.PostalCode || "" !== n.PostalCode && null !== n.PostalCode || "" === t) "undefined" !== typeof n.PostalCode && "" !== n.PostalCode && (n.Addresses = [{
                        Type: "Primary",
                        PostalCode: n.PostalCode
                    }]);
                    else {
                        var i = w(w({}, t), {}, {
                                op: "delete"
                            }),
                            r = w(w({}, t), {}, {
                                PostalCode: ""
                            });
                        n.Addresses = [i, r]
                    }
                    return delete n.PostalCode, delete n.email, delete n.dob_year, delete n.dob_month, delete n.dob_day, n
                },
                E = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return g.request.apply(void 0, t).then((function(e) {
                        return e.status >= 400 ? e.json().then((function(e) {
                            return Promise.reject(e)
                        })) : e
                    })).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        return {
                            data: e
                        }
                    })).catch((function(e) {
                        var n = B(t[0]);
                        throw console.error("Membership Request Error: ", e), new Error("Membership Request: ".concat(n), e)
                    }))
                },
                x = function(e) {
                    return (0, u.A)(new Date(e), "MMM d, yyyy")
                },
                z = function(e) {
                    var t = /(\d{1,2})-(\d{1,2})-(\d{4})/gi.exec(e);
                    return null === t ? {
                        month: "01",
                        day: "",
                        year: ""
                    } : {
                        month: t[1],
                        day: t[2],
                        year: t[3]
                    }
                },
                S = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/i,
                b = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return P(e) || (t.push("grid-wrapper"), t.push("grid-full")), t.join(" ")
                },
                P = function(e) {
                    return p.zS.test(e)
                },
                U = function(e) {
                    return /\/(features)$/.test(e)
                },
                _ = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/g,
                B = function(e) {
                    var t = new URL(e);
                    return t.search = "", t.href = t.href.replaceAll(_, ""), t.href
                },
                Y = function(e) {
                    var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                    if ("function" !== typeof a) throw new Error("Callback must be of type function, but got: " + (0, r.A)(a));
                    if (null !== (t = window.CBC) && void 0 !== t && null !== (t = t.APP) && void 0 !== t && null !== (t = t.SC) && void 0 !== t && null !== (t = t.EventTracker) && void 0 !== t && null !== (n = t.isOn) && void 0 !== n && n.call(t)) {
                        var s = setTimeout((function() {
                            c().error("trackEvent", new Error("Timeout on callback exceeded")), a()
                        }), 3e3);
                        window.CBC.APP.SC.EventTracker.trackEvent(e, w(w({}, i), {}, {
                            app: {
                                name: "membership-web-app"
                            }
                        }), (function() {
                            clearTimeout(s), a()
                        }))
                    } else a()
                },
                G = function(e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    n && ((0, M.IZ)(n) || (0, M.N3)(n)) ? (n = R(e, n), window.location.href = n) : t()
                },
                R = function(e, t) {
                    if (t && e) {
                        var n = (0, m.getSessionToken)();
                        if (n) {
                            var i = new URL(t);
                            return i.searchParams.delete("token"), i.searchParams.append("token", n), "".concat(i.href)
                        }
                        return t
                    }
                    return t
                },
                Q = function(e) {
                    return new Promise((function(t, n) {
                        f._.authenticationApi.changePassword((0, m.getSessionToken)(), e.newpassword, e.oldpassword, (function(e) {
                            e ? n(e) : t()
                        }))
                    }))
                },
                F = function(e, t) {
                    return new Promise((function(n, i) {
                        E("".concat(N.bI, "/add_email"), {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            method: "POST",
                            body: (0, o.stringify)({
                                token: (0, m.getSessionToken)(),
                                email: e,
                                verificationurl: (0, m.locationOrigin)() + p.UK + "?".concat((0, o.stringify)({
                                    ce: e,
                                    ceoe: t
                                })),
                                emailtemplate: N.c_
                            })
                        }).then((function() {
                            return n()
                        })).catch((function(e) {
                            return i("Bad Request" === (null === e || void 0 === e ? void 0 : e.error) ? {
                                ErrorCode: 1e3
                            } : e)
                        }))
                    }))
                },
                J = function(e, t) {
                    return E("".concat(N.Xi, "/users/").concat(e, "?verb=patch"), {
                        method: "POST",
                        body: t,
                        credentials: "include"
                    })
                },
                Z = function(e, t) {
                    return E("".concat(N.Xi, "/users/").concat(e, "?verb=patch"), {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        body: JSON.stringify(t),
                        credentials: "include"
                    })
                },
                V = function(e, t) {
                    E("".concat(N.Xi, "/mutes/").concat(e), {
                        method: "GET",
                        credentials: "include"
                    }).then((function(e) {
                        var n = e.data;
                        t(n)
                    })).catch((function(e) {
                        c().error("getViafouraMuteList", e)
                    }))
                },
                W = function(e, t) {
                    E("".concat(N.Xi, "/mutes/").concat(e), {
                        method: "DELETE",
                        credentials: "include"
                    }).then((function(e) {
                        var n = e.data;
                        t(n)
                    })).catch((function(e) {
                        c().error("unmuteViafouraUser", e)
                    }))
                };
            var H = function(e) {
                    e.preventDefault();
                    var t = e.currentTarget.dataset.kind,
                        n = function(e, t) {
                            var n, i, r, a = (0, o.parse)(null === (n = window.location) || void 0 === n ? void 0 : n.search, {
                                    ignoreQueryPrefix: !0
                                }),
                                s = window.location.pathname,
                                u = s === p.QE ? a.referrer : a.returnto,
                                l = "facebook" === e,
                                c = "apple" === e,
                                g = c && (0, d.isSafari)(),
                                f = "&callbacktype=hash",
                                m = "".concat(window.location.protocol, "//").concat(window.location.host).concat(s).concat(null === (i = window.location) || void 0 === i ? void 0 : i.search);
                            return c && (e = X(e, u, t)), (g || l) && (f += "&is_access_token=true&same_window=true"), m = null !== (r = window.location) && void 0 !== r && r.search ? encodeURIComponent(m) : m, "".concat(N.zo, "?apikey=").concat(N.y$, "&provider=").concat(e, "&callback=").concat(m).concat(f)
                        }(t, e.currentTarget.dataset.feature),
                        i = "facebook" === t,
                        r = "_blank";
                    ("apple" === t && (0, d.isSafari)() || i) && (r = "_parent"), window.open(n, r, "toolbar=0,location=0,menubar=0,width=470,height=680,scrollbars=yes") || console.error("Could not open provider auth")
                },
                X = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return e = N.QH, "false" === n || (t.match(/cbcnews(?:auth)?:\/\//) && (e = N.sl), t.match(/cbcsports(?:auth)?:\/\//) && (e = N.iI), t.match(/cbclisten(?:auth)?:\/\//) && (e = N.GG)), e
                },
                K = function() {
                    return new Promise((function(e, t) {
                        q().then((function() {
                            ! function(e) {
                                try {
                                    window.LRObject = new window.LoginRadiusV2(e), f._.initSDK({
                                        apiKey: e.apiKey,
                                        debugMode: !0
                                    }), window.LR_IS_READY = !0
                                } catch (t) {
                                    console.error("initializeLoginRadiusSDK", t), c().error("initializeLoginRadiusSDK", t)
                                }
                            }({
                                apiKey: N.y$,
                                appName: N.XX
                            }), e()
                        })).catch((function(e) {
                            console.error("loadLoginRadius", e), c().error("loadLoginRadius", e), t(e)
                        }))
                    }))
                },
                q = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15e3;
                    return new Promise((function(t, n) {
                        var i = "https://auth.lrcontent.com/v2/LoginRadiusV2.js",
                            r = 0,
                            a = 0,
                            s = 3,
                            o = function() {
                                a = 0;
                                var u = setInterval((function() {
                                    var l, c, g = document.querySelector("script[src='".concat(i, "']")),
                                        d = "function" === typeof(null === (l = window) || void 0 === l ? void 0 : l.LoginRadiusV2);
                                    if (g && d) return clearInterval(u), re("info", "Loaded LR Viafoura script"), void t();
                                    if (r += 250, (a += 250) >= e)
                                        if (clearInterval(u), s > 0) re("warn", "Retrying script load. Attempts left: ".concat(s)), s--, o();
                                        else {
                                            var f = "LR Viafoura script not loaded within max time, aborting....";
                                            console.error(f), n(f)
                                        }
                                    else if (r !== e / 4 || g) {
                                        if (null !== (c = window) && void 0 !== c && null !== (c = c.LoginRadiusV2) && void 0 !== c && c._isMockFunction) return clearInterval(u), void t();
                                        re("info", "Loading LR Viafoura script")
                                    } else {
                                        var N = document.createElement("script");
                                        N.type = "text/javascript", N.src = i, N.async = !0, N.defer = !0, document.body.appendChild(N), re("info", "Manually creating VF LR script tag")
                                    }
                                }), 250)
                            };
                        o()
                    }))
                },
                $ = function(e) {
                    return (0, s.memo)((function() {
                        var t = (0, s.useState)(!1),
                            n = (0, i.A)(t, 2),
                            r = n[0],
                            a = n[1];
                        return (0, s.useEffect)((function() {
                            window.LR_IS_READY ? a(!0) : K().then((function() {
                                return a(!0)
                            })).catch((function(e) {
                                console.error("LOGINRADIUS ERROR", e), c().error("LOGINRADIUS ERROR", e)
                            }))
                        }), []), r ? (0, k.jsx)(e, {}) : (0, k.jsx)(j.A, {})
                    }))
                },
                ee = function(e) {
                    return function() {
                        return e.injectReducer("membership", v)
                    }
                },
                te = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return e && e[t] ? e[t].find((function(e) {
                        return "Primary" === e.Type
                    })) : n
                },
                ne = function(e, t, n) {
                    (0, s.useEffect)((function() {
                        if (t) {
                            var i = e.map((function(e) {
                                var t = document.createElement("script");
                                return t.src = e.src, e.attributes && Object.keys(e.attributes).forEach((function(n) {
                                    t.setAttribute(n, e.attributes[n])
                                })), t.async = !0, t.onload = function() {
                                    n && n()
                                }, t.onerror = function() {
                                    console.error("Error loading script ".concat(e.src))
                                }, document.head.appendChild(t), t
                            }));
                            return function() {
                                i.forEach((function(e) {
                                    return document.head.removeChild(e)
                                }))
                            }
                        }
                    }), [t, e, n])
                };

            function ie(e, t, n, i, r, a) {
                switch (re("log", "performance metrics for: " + e), re("log", "react started rendering ".concat(e, " at ").concat(r)), re("log", "update committed at ".concat(a)), t) {
                    case "mount":
                        re("log", "initial render time for ".concat(e, ": ").concat(n)), re("log", "Max time taken to render ".concat(e, ": ").concat(i));
                        break;
                    case "update":
                    case "nested-update":
                        re("log", "re-render time for ".concat(e, ": ").concat(n)), re("log", "Max time taken to render ".concat(e, ": ").concat(i))
                }
                re("log", "-----END PERFORMANCE LOGGING FOR ".concat(e.toUpperCase(), "-----"))
            }
            var re = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return "int" === N.A_ && ("group" === e ? console.group(t, n) : "groupEnd" === e ? console.groupEnd() : console.log(t, n)), null
            }
        },
        "acc-42634": function() {}
    }
]);
//# sourceMappingURL=../../sourcemaps/acc-324.81e82bf02c55826315ff.js.map