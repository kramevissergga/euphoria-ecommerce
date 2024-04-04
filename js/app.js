(() => {
    var __webpack_modules__ = {
        144: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", p = "applied", m = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, p, m ], C = function(n, t, e, i) {
                    n && "function" == typeof n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, p), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, m), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, pn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, mn = function(n) {
                    return function(n) {
                        return k(n) === m;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || pn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = pn(n), bn(e).filter(mn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        pn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        pn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function functions_getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spoilers() {
            const spoilersArray = document.querySelectorAll("[data-spoilers]");
            if (spoilersArray.length > 0) {
                document.addEventListener("click", setspoilerAction);
                const spoilersRegular = Array.from(spoilersArray).filter((function(item, index, self) {
                    return !item.dataset.spoilers.split(",")[0];
                }));
                if (spoilersRegular.length) initspoilers(spoilersRegular);
                let mdQueriesArray = dataMediaQueries(spoilersArray, "spoilers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initspoilers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initspoilers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initspoilers(spoilersArray, matchMedia = false) {
                    spoilersArray.forEach((spoilersBlock => {
                        spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spoilersBlock.classList.add("_spoiler-init");
                            initspoilerBody(spoilersBlock);
                        } else {
                            spoilersBlock.classList.remove("_spoiler-init");
                            initspoilerBody(spoilersBlock, false);
                        }
                    }));
                }
                function initspoilerBody(spoilersBlock, hidespoilerBody = true) {
                    let spoilerItems = spoilersBlock.querySelectorAll("details");
                    if (spoilerItems.length) spoilerItems.forEach((spoilerItem => {
                        let spoilerTitle = spoilerItem.querySelector("summary");
                        if (hidespoilerBody) {
                            spoilerTitle.removeAttribute("tabindex");
                            if (!spoilerItem.hasAttribute("data-open")) {
                                spoilerItem.open = false;
                                spoilerTitle.nextElementSibling.hidden = true;
                            } else {
                                spoilerTitle.classList.add("_spoiler-active");
                                spoilerItem.open = true;
                            }
                        } else {
                            spoilerTitle.setAttribute("tabindex", "-1");
                            spoilerTitle.classList.remove("_spoiler-active");
                            spoilerItem.open = true;
                            spoilerTitle.nextElementSibling.hidden = false;
                        }
                    }));
                }
                function setspoilerAction(e) {
                    const el = e.target;
                    if (el.closest("summary") && el.closest("[data-spoilers]")) {
                        e.preventDefault();
                        if (el.closest("[data-spoilers]").classList.contains("_spoiler-init")) {
                            const spoilerTitle = el.closest("summary");
                            const spoilerBlock = spoilerTitle.closest("details");
                            const spoilersBlock = spoilerTitle.closest("[data-spoilers]");
                            const onespoiler = spoilersBlock.hasAttribute("data-one-spoiler");
                            const scrollspoiler = spoilerBlock.hasAttribute("data-spoiler-scroll");
                            const spoilerSpeed = spoilersBlock.dataset.spoilersSpeed ? parseInt(spoilersBlock.dataset.spoilersSpeed) : 500;
                            if (!spoilersBlock.querySelectorAll("._slide").length) {
                                if (onespoiler && !spoilerBlock.open) hidespoilersBody(spoilersBlock);
                                !spoilerBlock.open ? spoilerBlock.open = true : setTimeout((() => {
                                    spoilerBlock.open = false;
                                }), spoilerSpeed);
                                spoilerTitle.classList.toggle("_spoiler-active");
                                _slideToggle(spoilerTitle.nextElementSibling, spoilerSpeed);
                                if (scrollspoiler && spoilerTitle.classList.contains("_spoiler-active")) {
                                    const scrollspoilerValue = spoilerBlock.dataset.spoilerScroll;
                                    const scrollspoilerOffset = +scrollspoilerValue ? +scrollspoilerValue : 0;
                                    const scrollspoilerNoHeader = spoilerBlock.hasAttribute("data-spoiler-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
                                    window.scrollTo({
                                        top: spoilerBlock.offsetTop - (scrollspoilerOffset + scrollspoilerNoHeader),
                                        behavior: "smooth"
                                    });
                                }
                            }
                        }
                        if (el.closest("summary").getAttribute("data-for")) {
                            const inputId = el.closest("summary").getAttribute("data-for");
                            const targetInput = document.getElementById(inputId);
                            if (targetInput && targetInput.type === "radio") targetInput.checked = true;
                        }
                    }
                    if (!el.closest("[data-spoilers]")) {
                        const spoilersClose = document.querySelectorAll("[data-spoiler-close]");
                        if (spoilersClose.length) spoilersClose.forEach((spoilerClose => {
                            const spoilersBlock = spoilerClose.closest("[data-spoilers]");
                            const spoilerCloseBlock = spoilerClose.parentNode;
                            if (spoilersBlock.classList.contains("_spoiler-init")) {
                                const spoilerSpeed = spoilersBlock.dataset.spoilersSpeed ? parseInt(spoilersBlock.dataset.spoilersSpeed) : 500;
                                spoilerClose.classList.remove("_spoiler-active");
                                _slideUp(spoilerClose.nextElementSibling, spoilerSpeed);
                                setTimeout((() => {
                                    spoilerCloseBlock.open = false;
                                }), spoilerSpeed);
                            }
                        }));
                    }
                }
                function hidespoilersBody(spoilersBlock) {
                    const spoilerActiveBlock = spoilersBlock.querySelector("details[open]");
                    if (spoilerActiveBlock && !spoilersBlock.querySelectorAll("._slide").length) {
                        const spoilerActiveTitle = spoilerActiveBlock.querySelector("summary");
                        const spoilerSpeed = spoilersBlock.dataset.spoilersSpeed ? parseInt(spoilersBlock.dataset.spoilersSpeed) : 500;
                        spoilerActiveTitle.classList.remove("_spoiler-active");
                        _slideUp(spoilerActiveTitle.nextElementSibling, spoilerSpeed);
                        setTimeout((() => {
                            spoilerActiveBlock.open = false;
                        }), spoilerSpeed);
                    }
                }
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = functions_getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoiler");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoiler");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) tabsContent.forEach(((tabsContentItem, index) => {
                    tabsTitles[index].setAttribute("data-tabs-title", "");
                    tabsContentItem.setAttribute("data-tabs-item", "");
                    if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                    tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                }));
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".menu-switch")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".menu-switch")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        !function(e) {
            "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.wNumb = e();
        }((function() {
            "use strict";
            var o = [ "decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo" ];
            function w(e) {
                return e.split("").reverse().join("");
            }
            function h(e, t) {
                return e.substring(0, t.length) === t;
            }
            function f(e, t, n) {
                if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t);
            }
            function x(e) {
                return "number" == typeof e && isFinite(e);
            }
            function n(e, t, n, r, i, o, f, u, s, c, a, p) {
                var d, l, h, g = p, v = "", m = "";
                return o && (p = o(p)), !!x(p) && (!1 !== e && 0 === parseFloat(p.toFixed(e)) && (p = 0), 
                p < 0 && (d = !0, p = Math.abs(p)), !1 !== e && (p = function(e, t) {
                    return e = e.toString().split("e"), (+((e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t)))).toString().split("e"))[0] + "e" + (e[1] ? e[1] - t : -t))).toFixed(t);
                }(p, e)), -1 !== (p = p.toString()).indexOf(".") ? (h = (l = p.split("."))[0], n && (v = n + l[1])) : h = p, 
                t && (h = w((h = w(h).match(/.{1,3}/g)).join(w(t)))), d && u && (m += u), r && (m += r), 
                d && s && (m += s), m += h, m += v, i && (m += i), c && (m = c(m, g)), m);
            }
            function r(e, t, n, r, i, o, f, u, s, c, a, p) {
                var d, l = "";
                return a && (p = a(p)), !(!p || "string" != typeof p) && (u && h(p, u) && (p = p.replace(u, ""), 
                d = !0), r && h(p, r) && (p = p.replace(r, "")), s && h(p, s) && (p = p.replace(s, ""), 
                d = !0), i && function(e, t) {
                    return e.slice(-1 * t.length) === t;
                }(p, i) && (p = p.slice(0, -1 * i.length)), t && (p = p.split(t).join("")), n && (p = p.replace(n, ".")), 
                d && (l += "-"), "" !== (l = (l += p).replace(/[^0-9\.\-.]/g, "")) && (l = Number(l), 
                f && (l = f(l)), !!x(l) && l));
            }
            function i(e, t, n) {
                var r, i = [];
                for (r = 0; r < o.length; r += 1) i.push(e[o[r]]);
                return i.push(n), t.apply("", i);
            }
            return function e(t) {
                if (!(this instanceof e)) return new e(t);
                "object" == typeof t && (t = function(e) {
                    var t, n, r, i = {};
                    for (void 0 === e.suffix && (e.suffix = e.postfix), t = 0; t < o.length; t += 1) if (void 0 === (r = e[n = o[t]])) "negative" !== n || i.negativeBefore ? "mark" === n && "." !== i.thousand ? i[n] = "." : i[n] = !1 : i[n] = "-"; else if ("decimals" === n) {
                        if (!(0 <= r && r < 8)) throw new Error(n);
                        i[n] = r;
                    } else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) {
                        if ("function" != typeof r) throw new Error(n);
                        i[n] = r;
                    } else {
                        if ("string" != typeof r) throw new Error(n);
                        i[n] = r;
                    }
                    return f(i, "mark", "thousand"), f(i, "prefix", "negative"), f(i, "prefix", "negativeBefore"), 
                    i;
                }(t), this.to = function(e) {
                    return i(t, n, e);
                }, this.from = function(e) {
                    return i(t, r, e);
                });
            };
        }));
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (modules_flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            modules_flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formQuantity() {
            document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest("[data-quantity-plus]") || targetElement.closest("[data-quantity-minus]")) {
                    const valueElement = targetElement.closest("[data-quantity]").querySelector("[data-quantity-value]");
                    let value = parseInt(valueElement.value);
                    if (targetElement.hasAttribute("data-quantity-plus")) {
                        value++;
                        if (+valueElement.dataset.quantityMax && +valueElement.dataset.quantityMax < value) value = valueElement.dataset.quantityMax;
                    } else {
                        --value;
                        if (+valueElement.dataset.quantityMin) {
                            if (+valueElement.dataset.quantityMin > value) value = valueElement.dataset.quantityMin;
                        } else if (value < 1) value = 1;
                    }
                    targetElement.closest("[data-quantity]").querySelector("[data-quantity-value]").value = value;
                }
            }));
        }
        function formRating() {
            const ratings = document.querySelectorAll("[data-rating]");
            if (ratings) ratings.forEach((rating => {
                const ratingValue = +rating.dataset.ratingValue;
                const ratingSize = +rating.dataset.ratingSize ? +rating.dataset.ratingSize : 5;
                formRatingInit(rating, ratingSize);
                ratingValue ? formRatingSet(rating, ratingValue) : null;
                document.addEventListener("click", formRatingAction);
            }));
            function formRatingAction(e) {
                const targetElement = e.target;
                if (targetElement.closest(".rating__input")) {
                    const currentElement = targetElement.closest(".rating__input");
                    const ratingValue = +currentElement.value;
                    const rating = currentElement.closest(".rating");
                    const ratingSet = rating.dataset.rating === "set";
                    ratingSet ? formRatingGet(rating, ratingValue) : null;
                }
            }
            function formRatingInit(rating, ratingSize) {
                const ratingItemsEl = rating.querySelector(".rating__items");
                let ratingItems = ``;
                for (let index = 0; index < ratingSize; index++) {
                    index === 0 && !ratingItemsEl ? ratingItems += `<div class="rating__items">` : null;
                    ratingItems += `\n\t\t\t\t<label class="rating__item">\n\t\t\t\t\t<input class="rating__input" type="radio" name="rating" value="${index + 1}">\n\t\t\t\t</label>`;
                    index === ratingSize && !ratingItemsEl ? ratingItems += `</div">` : null;
                }
                ratingItemsEl ? ratingItemsEl.insertAdjacentHTML("beforeend", ratingItems) : rating.insertAdjacentHTML("beforeend", ratingItems);
            }
            function formRatingGet(rating, ratingValue) {
                const resultRating = ratingValue;
                formRatingSet(rating, resultRating);
            }
            function formRatingSet(rating, value) {
                const ratingItems = rating.querySelectorAll(".rating__item");
                const resultFullItems = parseInt(value);
                const resultPartItem = value - resultFullItems;
                rating.hasAttribute("data-rating-title") ? rating.title = value : null;
                ratingItems.forEach(((ratingItem, index) => {
                    ratingItem.classList.remove("rating__item--active");
                    ratingItem.querySelector("span") ? ratingItems[index].querySelector("span").remove() : null;
                    if (index <= resultFullItems - 1) ratingItem.classList.add("rating__item--active");
                    if (index === resultFullItems && resultPartItem) ratingItem.insertAdjacentHTML("beforeend", `<span style="width:${resultPartItem * 100}%"></span>`);
                }));
            }
        }
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true,
                    speed: 150
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging(`Прокинувся, построїв селектов: (${selectItems.length})`);
                    } else this.setLogging("Сплю, немає жодного select");
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : this.config.speed;
                this.config.speed = +originalSelect.dataset.speed;
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                originalSelect.dataset.classModif ? selectItem.classList.add(`select--${originalSelect.dataset.classModif}`) : null;
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if (targetType === "click") {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if (targetType === "focusin" || targetType === "focusout") {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                    setTimeout((() => {
                        selectItem.style.zIndex = "";
                    }), originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOpenzIndex = originalSelect.dataset.zIndex ? originalSelect.dataset.zIndex : 3;
                this.setOptionsPosition(selectItem);
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                setTimeout((() => {
                    if (!selectOptions.classList.contains("_slide")) {
                        selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                        _slideToggle(selectOptions, originalSelect.dataset.speed);
                        if (selectItem.classList.contains(this.selectClasses.classSelectOpen)) selectItem.style.zIndex = selectOpenzIndex; else setTimeout((() => {
                            selectItem.style.zIndex = "";
                        }), originalSelect.dataset.speed);
                    }
                }), 0);
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заповніть атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                const selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                const customMaxHeightValue = +originalSelect.dataset.scroll ? +originalSelect.dataset.scroll : null;
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += `<div ${selectOptionsScroll} ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""} class="${this.selectClasses.classSelectOptionsScroll}">`;
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += `</div>`;
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            setOptionsPosition(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectItemScroll = this.getSelectElement(selectItem, this.selectClasses.classSelectOptionsScroll).selectElement;
                const customMaxHeightValue = +originalSelect.dataset.scroll ? `${+originalSelect.dataset.scroll}px` : ``;
                const selectOptionsPosMargin = +originalSelect.dataset.optionsMargin ? +originalSelect.dataset.optionsMargin : 10;
                if (!selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
                    selectOptions.hidden = false;
                    const selectItemScrollHeight = selectItemScroll.offsetHeight ? selectItemScroll.offsetHeight : parseInt(window.getComputedStyle(selectItemScroll).getPropertyValue("max-height"));
                    const selectOptionsHeight = selectOptions.offsetHeight > selectItemScrollHeight ? selectOptions.offsetHeight : selectItemScrollHeight + selectOptions.offsetHeight;
                    const selectOptionsScrollHeight = selectOptionsHeight - selectItemScrollHeight;
                    selectOptions.hidden = true;
                    const selectItemHeight = selectItem.offsetHeight;
                    const selectItemPos = selectItem.getBoundingClientRect().top;
                    const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
                    const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
                    if (selectItemResult < 0) {
                        const newMaxHeightValue = selectOptionsHeight + selectItemResult;
                        if (newMaxHeightValue < 100) {
                            selectItem.classList.add("select--show-top");
                            selectItemScroll.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
                        } else {
                            selectItem.classList.remove("select--show-top");
                            selectItemScroll.style.maxHeight = `${newMaxHeightValue}px`;
                        }
                    }
                } else setTimeout((() => {
                    selectItem.classList.remove("select--show-top");
                    selectItemScroll.style.maxHeight = customMaxHeightValue;
                }), +originalSelect.dataset.speed);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                const selectOptions = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`);
                if (!selectOptions.classList.contains("_slide")) {
                    if (originalSelect.multiple) {
                        optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                        const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                        originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                            originalSelectSelectedItem.removeAttribute("selected");
                        }));
                        const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                        selectSelectedItems.forEach((selectSelectedItems => {
                            originalSelect.querySelector(`option[value = "${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                        }));
                    } else {
                        if (!originalSelect.hasAttribute("data-show-selected")) setTimeout((() => {
                            if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                            optionItem.hidden = true;
                        }), this.config.speed);
                        originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                        this.selectAction(selectItem);
                    }
                    this.setSelectTitleValue(selectItem, originalSelect);
                    this.setSelectChange(originalSelect);
                }
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption} `);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().includes(selectInput.value.toUpperCase())) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? functions_FLS(`[select]: ${message} `) : null;
            }
        }
        modules_flsModules.select = new SelectConstructor({});
        var PipsMode;
        (function(PipsMode) {
            PipsMode["Range"] = "range";
            PipsMode["Steps"] = "steps";
            PipsMode["Positions"] = "positions";
            PipsMode["Count"] = "count";
            PipsMode["Values"] = "values";
        })(PipsMode || (PipsMode = {}));
        var PipsType;
        (function(PipsType) {
            PipsType[PipsType["None"] = -1] = "None";
            PipsType[PipsType["NoValue"] = 0] = "NoValue";
            PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
            PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
        })(PipsType || (PipsType = {}));
        function isValidFormatter(entry) {
            return isValidPartialFormatter(entry) && typeof entry.from === "function";
        }
        function isValidPartialFormatter(entry) {
            return typeof entry === "object" && typeof entry.to === "function";
        }
        function removeElement(el) {
            el.parentElement.removeChild(el);
        }
        function isSet(value) {
            return value !== null && value !== void 0;
        }
        function preventDefault(e) {
            e.preventDefault();
        }
        function unique(array) {
            return array.filter((function(a) {
                return !this[a] ? this[a] = true : false;
            }), {});
        }
        function closest(value, to) {
            return Math.round(value / to) * to;
        }
        function offset(elem, orientation) {
            var rect = elem.getBoundingClientRect();
            var doc = elem.ownerDocument;
            var docElem = doc.documentElement;
            var pageOffset = getPageOffset(doc);
            if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
            return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
        }
        function isNumeric(a) {
            return typeof a === "number" && !isNaN(a) && isFinite(a);
        }
        function addClassFor(element, className, duration) {
            if (duration > 0) {
                addClass(element, className);
                setTimeout((function() {
                    removeClass(element, className);
                }), duration);
            }
        }
        function limit(a) {
            return Math.max(Math.min(a, 100), 0);
        }
        function asArray(a) {
            return Array.isArray(a) ? a : [ a ];
        }
        function countDecimals(numStr) {
            numStr = String(numStr);
            var pieces = numStr.split(".");
            return pieces.length > 1 ? pieces[1].length : 0;
        }
        function addClass(el, className) {
            if (el.classList && !/\s/.test(className)) el.classList.add(className); else el.className += " " + className;
        }
        function removeClass(el, className) {
            if (el.classList && !/\s/.test(className)) el.classList.remove(className); else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
        function hasClass(el, className) {
            return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
        }
        function getPageOffset(doc) {
            var supportPageOffset = window.pageXOffset !== void 0;
            var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
            var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
            var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
            return {
                x,
                y
            };
        }
        function getActions() {
            return window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            };
        }
        function getSupportsPassive() {
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, "passive", {
                    get: function() {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("test", null, opts);
            } catch (e) {}
            return supportsPassive;
        }
        function getSupportsTouchActionNone() {
            return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
        }
        function subRangeRatio(pa, pb) {
            return 100 / (pb - pa);
        }
        function fromPercentage(range, value, startRange) {
            return value * 100 / (range[startRange + 1] - range[startRange]);
        }
        function toPercentage(range, value) {
            return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
        }
        function isPercentage(range, value) {
            return value * (range[1] - range[0]) / 100 + range[0];
        }
        function getJ(value, arr) {
            var j = 1;
            while (value >= arr[j]) j += 1;
            return j;
        }
        function toStepping(xVal, xPct, value) {
            if (value >= xVal.slice(-1)[0]) return 100;
            var j = getJ(value, xVal);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return pa + toPercentage([ va, vb ], value) / subRangeRatio(pa, pb);
        }
        function fromStepping(xVal, xPct, value) {
            if (value >= 100) return xVal.slice(-1)[0];
            var j = getJ(value, xPct);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return isPercentage([ va, vb ], (value - pa) * subRangeRatio(pa, pb));
        }
        function getStep(xPct, xSteps, snap, value) {
            if (value === 100) return value;
            var j = getJ(value, xPct);
            var a = xPct[j - 1];
            var b = xPct[j];
            if (snap) {
                if (value - a > (b - a) / 2) return b;
                return a;
            }
            if (!xSteps[j - 1]) return value;
            return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
        }
        var Spectrum = function() {
            function Spectrum(entry, snap, singleStep) {
                this.xPct = [];
                this.xVal = [];
                this.xSteps = [];
                this.xNumSteps = [];
                this.xHighestCompleteStep = [];
                this.xSteps = [ singleStep || false ];
                this.xNumSteps = [ false ];
                this.snap = snap;
                var index;
                var ordered = [];
                Object.keys(entry).forEach((function(index) {
                    ordered.push([ asArray(entry[index]), index ]);
                }));
                ordered.sort((function(a, b) {
                    return a[0][0] - b[0][0];
                }));
                for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
                this.xNumSteps = this.xSteps.slice(0);
                for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
            }
            Spectrum.prototype.getDistance = function(value) {
                var distances = [];
                for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
                return distances;
            };
            Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
                var xPct_index = 0;
                if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++; else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
                if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
                if (distances === null) distances = [];
                var start_factor;
                var rest_factor = 1;
                var rest_rel_distance = distances[xPct_index];
                var range_pct = 0;
                var rel_range_distance = 0;
                var abs_distance_counter = 0;
                var range_counter = 0;
                if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]); else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
                while (rest_rel_distance > 0) {
                    range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                    if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                        rel_range_distance = range_pct * start_factor;
                        rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                        start_factor = 1;
                    } else {
                        rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
                        rest_factor = 0;
                    }
                    if (direction) {
                        abs_distance_counter -= rel_range_distance;
                        if (this.xPct.length + range_counter >= 1) range_counter--;
                    } else {
                        abs_distance_counter += rel_range_distance;
                        if (this.xPct.length - range_counter >= 1) range_counter++;
                    }
                    rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
                }
                return value + abs_distance_counter;
            };
            Spectrum.prototype.toStepping = function(value) {
                value = toStepping(this.xVal, this.xPct, value);
                return value;
            };
            Spectrum.prototype.fromStepping = function(value) {
                return fromStepping(this.xVal, this.xPct, value);
            };
            Spectrum.prototype.getStep = function(value) {
                value = getStep(this.xPct, this.xSteps, this.snap, value);
                return value;
            };
            Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
                var j = getJ(value, this.xPct);
                if (value === 100 || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
                return (this.xVal[j] - this.xVal[j - 1]) / size;
            };
            Spectrum.prototype.getNearbySteps = function(value) {
                var j = getJ(value, this.xPct);
                return {
                    stepBefore: {
                        startValue: this.xVal[j - 2],
                        step: this.xNumSteps[j - 2],
                        highestStep: this.xHighestCompleteStep[j - 2]
                    },
                    thisStep: {
                        startValue: this.xVal[j - 1],
                        step: this.xNumSteps[j - 1],
                        highestStep: this.xHighestCompleteStep[j - 1]
                    },
                    stepAfter: {
                        startValue: this.xVal[j],
                        step: this.xNumSteps[j],
                        highestStep: this.xHighestCompleteStep[j]
                    }
                };
            };
            Spectrum.prototype.countStepDecimals = function() {
                var stepDecimals = this.xNumSteps.map(countDecimals);
                return Math.max.apply(null, stepDecimals);
            };
            Spectrum.prototype.hasNoSize = function() {
                return this.xVal[0] === this.xVal[this.xVal.length - 1];
            };
            Spectrum.prototype.convert = function(value) {
                return this.getStep(this.toStepping(value));
            };
            Spectrum.prototype.handleEntryPoint = function(index, value) {
                var percentage;
                if (index === "min") percentage = 0; else if (index === "max") percentage = 100; else percentage = parseFloat(index);
                if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                this.xPct.push(percentage);
                this.xVal.push(value[0]);
                var value1 = Number(value[1]);
                if (!percentage) {
                    if (!isNaN(value1)) this.xSteps[0] = value1;
                } else this.xSteps.push(isNaN(value1) ? false : value1);
                this.xHighestCompleteStep.push(0);
            };
            Spectrum.prototype.handleStepPoint = function(i, n) {
                if (!n) return;
                if (this.xVal[i] === this.xVal[i + 1]) {
                    this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                    return;
                }
                this.xSteps[i] = fromPercentage([ this.xVal[i], this.xVal[i + 1] ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
                var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
                var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
                var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
                this.xHighestCompleteStep[i] = step;
            };
            return Spectrum;
        }();
        var defaultFormatter = {
            to: function(value) {
                return value === void 0 ? "" : value.toFixed(2);
            },
            from: Number
        };
        var cssClasses = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub"
        };
        var INTERNAL_EVENT_NS = {
            tooltips: ".__tooltips",
            aria: ".__aria"
        };
        function testStep(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
            parsed.singleStep = entry;
        }
        function testKeyboardPageMultiplier(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
            parsed.keyboardPageMultiplier = entry;
        }
        function testKeyboardMultiplier(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
            parsed.keyboardMultiplier = entry;
        }
        function testKeyboardDefaultStep(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
            parsed.keyboardDefaultStep = entry;
        }
        function testRange(parsed, entry) {
            if (typeof entry !== "object" || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
            if (entry.min === void 0 || entry.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
        }
        function testStart(parsed, entry) {
            entry = asArray(entry);
            if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
            parsed.handles = entry.length;
            parsed.start = entry;
        }
        function testSnap(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
            parsed.snap = entry;
        }
        function testAnimate(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
            parsed.animate = entry;
        }
        function testAnimationDuration(parsed, entry) {
            if (typeof entry !== "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
            parsed.animationDuration = entry;
        }
        function testConnect(parsed, entry) {
            var connect = [ false ];
            var i;
            if (entry === "lower") entry = [ true, false ]; else if (entry === "upper") entry = [ false, true ];
            if (entry === true || entry === false) {
                for (i = 1; i < parsed.handles; i++) connect.push(entry);
                connect.push(false);
            } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); else connect = entry;
            parsed.connect = connect;
        }
        function testOrientation(parsed, entry) {
            switch (entry) {
              case "horizontal":
                parsed.ort = 0;
                break;

              case "vertical":
                parsed.ort = 1;
                break;

              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
        }
        function testMargin(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
            if (entry === 0) return;
            parsed.margin = parsed.spectrum.getDistance(entry);
        }
        function testLimit(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
            parsed.limit = parsed.spectrum.getDistance(entry);
            if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
        function testPadding(parsed, entry) {
            var index;
            if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            if (entry === 0) return;
            if (!Array.isArray(entry)) entry = [ entry, entry ];
            parsed.padding = [ parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1]) ];
            for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            var totalPadding = entry[0] + entry[1];
            var firstValue = parsed.spectrum.xVal[0];
            var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
            if (totalPadding / (lastValue - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
        function testDirection(parsed, entry) {
            switch (entry) {
              case "ltr":
                parsed.dir = 0;
                break;

              case "rtl":
                parsed.dir = 1;
                break;

              default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
            }
        }
        function testBehaviour(parsed, entry) {
            if (typeof entry !== "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            var tap = entry.indexOf("tap") >= 0;
            var drag = entry.indexOf("drag") >= 0;
            var fixed = entry.indexOf("fixed") >= 0;
            var snap = entry.indexOf("snap") >= 0;
            var hover = entry.indexOf("hover") >= 0;
            var unconstrained = entry.indexOf("unconstrained") >= 0;
            var dragAll = entry.indexOf("drag-all") >= 0;
            var smoothSteps = entry.indexOf("smooth-steps") >= 0;
            if (fixed) {
                if (parsed.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                testMargin(parsed, parsed.start[1] - parsed.start[0]);
            }
            if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
            parsed.events = {
                tap: tap || snap,
                drag,
                dragAll,
                smoothSteps,
                fixed,
                snap,
                hover,
                unconstrained
            };
        }
        function testTooltips(parsed, entry) {
            if (entry === false) return;
            if (entry === true || isValidPartialFormatter(entry)) {
                parsed.tooltips = [];
                for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
            } else {
                entry = asArray(entry);
                if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                entry.forEach((function(formatter) {
                    if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }));
                parsed.tooltips = entry;
            }
        }
        function testHandleAttributes(parsed, entry) {
            if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
            parsed.handleAttributes = entry;
        }
        function testAriaFormat(parsed, entry) {
            if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            parsed.ariaFormat = entry;
        }
        function testFormat(parsed, entry) {
            if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
            parsed.format = entry;
        }
        function testKeyboardSupport(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
            parsed.keyboardSupport = entry;
        }
        function testDocumentElement(parsed, entry) {
            parsed.documentElement = entry;
        }
        function testCssPrefix(parsed, entry) {
            if (typeof entry !== "string" && entry !== false) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
            parsed.cssPrefix = entry;
        }
        function testCssClasses(parsed, entry) {
            if (typeof entry !== "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
            if (typeof parsed.cssPrefix === "string") {
                parsed.cssClasses = {};
                Object.keys(entry).forEach((function(key) {
                    parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
                }));
            } else parsed.cssClasses = entry;
        }
        function testOptions(options) {
            var parsed = {
                margin: null,
                limit: null,
                padding: null,
                animate: true,
                animationDuration: 300,
                ariaFormat: defaultFormatter,
                format: defaultFormatter
            };
            var tests = {
                step: {
                    r: false,
                    t: testStep
                },
                keyboardPageMultiplier: {
                    r: false,
                    t: testKeyboardPageMultiplier
                },
                keyboardMultiplier: {
                    r: false,
                    t: testKeyboardMultiplier
                },
                keyboardDefaultStep: {
                    r: false,
                    t: testKeyboardDefaultStep
                },
                start: {
                    r: true,
                    t: testStart
                },
                connect: {
                    r: true,
                    t: testConnect
                },
                direction: {
                    r: true,
                    t: testDirection
                },
                snap: {
                    r: false,
                    t: testSnap
                },
                animate: {
                    r: false,
                    t: testAnimate
                },
                animationDuration: {
                    r: false,
                    t: testAnimationDuration
                },
                range: {
                    r: true,
                    t: testRange
                },
                orientation: {
                    r: false,
                    t: testOrientation
                },
                margin: {
                    r: false,
                    t: testMargin
                },
                limit: {
                    r: false,
                    t: testLimit
                },
                padding: {
                    r: false,
                    t: testPadding
                },
                behaviour: {
                    r: true,
                    t: testBehaviour
                },
                ariaFormat: {
                    r: false,
                    t: testAriaFormat
                },
                format: {
                    r: false,
                    t: testFormat
                },
                tooltips: {
                    r: false,
                    t: testTooltips
                },
                keyboardSupport: {
                    r: true,
                    t: testKeyboardSupport
                },
                documentElement: {
                    r: false,
                    t: testDocumentElement
                },
                cssPrefix: {
                    r: true,
                    t: testCssPrefix
                },
                cssClasses: {
                    r: true,
                    t: testCssClasses
                },
                handleAttributes: {
                    r: false,
                    t: testHandleAttributes
                }
            };
            var defaults = {
                connect: false,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: true,
                cssPrefix: "noUi-",
                cssClasses,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10
            };
            if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
            Object.keys(tests).forEach((function(name) {
                if (!isSet(options[name]) && defaults[name] === void 0) {
                    if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
                    return;
                }
                tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
            }));
            parsed.pips = options.pips;
            var d = document.createElement("div");
            var msPrefix = d.style.msTransform !== void 0;
            var noPrefix = d.style.transform !== void 0;
            parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
            var styles = [ [ "left", "top" ], [ "right", "bottom" ] ];
            parsed.style = styles[parsed.dir][parsed.ort];
            return parsed;
        }
        function scope(target, options, originalOptions) {
            var actions = getActions();
            var supportsTouchActionNone = getSupportsTouchActionNone();
            var supportsPassive = supportsTouchActionNone && getSupportsPassive();
            var scope_Target = target;
            var scope_Base;
            var scope_Handles;
            var scope_Connects;
            var scope_Pips;
            var scope_Tooltips;
            var scope_Spectrum = options.spectrum;
            var scope_Values = [];
            var scope_Locations = [];
            var scope_HandleNumbers = [];
            var scope_ActiveHandlesCount = 0;
            var scope_Events = {};
            var scope_Document = target.ownerDocument;
            var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
            var scope_Body = scope_Document.body;
            var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
            function addNodeTo(addTarget, className) {
                var div = scope_Document.createElement("div");
                if (className) addClass(div, className);
                addTarget.appendChild(div);
                return div;
            }
            function addOrigin(base, handleNumber) {
                var origin = addNodeTo(base, options.cssClasses.origin);
                var handle = addNodeTo(origin, options.cssClasses.handle);
                addNodeTo(handle, options.cssClasses.touchArea);
                handle.setAttribute("data-handle", String(handleNumber));
                if (options.keyboardSupport) {
                    handle.setAttribute("tabindex", "0");
                    handle.addEventListener("keydown", (function(event) {
                        return eventKeydown(event, handleNumber);
                    }));
                }
                if (options.handleAttributes !== void 0) {
                    var attributes_1 = options.handleAttributes[handleNumber];
                    Object.keys(attributes_1).forEach((function(attribute) {
                        handle.setAttribute(attribute, attributes_1[attribute]);
                    }));
                }
                handle.setAttribute("role", "slider");
                handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
                if (handleNumber === 0) addClass(handle, options.cssClasses.handleLower); else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
                origin.handle = handle;
                return origin;
            }
            function addConnect(base, add) {
                if (!add) return false;
                return addNodeTo(base, options.cssClasses.connect);
            }
            function addElements(connectOptions, base) {
                var connectBase = addNodeTo(base, options.cssClasses.connects);
                scope_Handles = [];
                scope_Connects = [];
                scope_Connects.push(addConnect(connectBase, connectOptions[0]));
                for (var i = 0; i < options.handles; i++) {
                    scope_Handles.push(addOrigin(base, i));
                    scope_HandleNumbers[i] = i;
                    scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
                }
            }
            function addSlider(addTarget) {
                addClass(addTarget, options.cssClasses.target);
                if (options.dir === 0) addClass(addTarget, options.cssClasses.ltr); else addClass(addTarget, options.cssClasses.rtl);
                if (options.ort === 0) addClass(addTarget, options.cssClasses.horizontal); else addClass(addTarget, options.cssClasses.vertical);
                var textDirection = getComputedStyle(addTarget).direction;
                if (textDirection === "rtl") addClass(addTarget, options.cssClasses.textDirectionRtl); else addClass(addTarget, options.cssClasses.textDirectionLtr);
                return addNodeTo(addTarget, options.cssClasses.base);
            }
            function addTooltip(handle, handleNumber) {
                if (!options.tooltips || !options.tooltips[handleNumber]) return false;
                return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
            }
            function isSliderDisabled() {
                return scope_Target.hasAttribute("disabled");
            }
            function isHandleDisabled(handleNumber) {
                var handleOrigin = scope_Handles[handleNumber];
                return handleOrigin.hasAttribute("disabled");
            }
            function disable(handleNumber) {
                if (handleNumber !== null && handleNumber !== void 0) {
                    scope_Handles[handleNumber].setAttribute("disabled", "");
                    scope_Handles[handleNumber].handle.removeAttribute("tabindex");
                } else {
                    scope_Target.setAttribute("disabled", "");
                    scope_Handles.forEach((function(handle) {
                        handle.handle.removeAttribute("tabindex");
                    }));
                }
            }
            function enable(handleNumber) {
                if (handleNumber !== null && handleNumber !== void 0) {
                    scope_Handles[handleNumber].removeAttribute("disabled");
                    scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
                } else {
                    scope_Target.removeAttribute("disabled");
                    scope_Handles.forEach((function(handle) {
                        handle.removeAttribute("disabled");
                        handle.handle.setAttribute("tabindex", "0");
                    }));
                }
            }
            function removeTooltips() {
                if (scope_Tooltips) {
                    removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                    scope_Tooltips.forEach((function(tooltip) {
                        if (tooltip) removeElement(tooltip);
                    }));
                    scope_Tooltips = null;
                }
            }
            function tooltips() {
                removeTooltips();
                scope_Tooltips = scope_Handles.map(addTooltip);
                bindEvent("update" + INTERNAL_EVENT_NS.tooltips, (function(values, handleNumber, unencoded) {
                    if (!scope_Tooltips || !options.tooltips) return;
                    if (scope_Tooltips[handleNumber] === false) return;
                    var formattedValue = values[handleNumber];
                    if (options.tooltips[handleNumber] !== true) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                    scope_Tooltips[handleNumber].innerHTML = formattedValue;
                }));
            }
            function aria() {
                removeEvent("update" + INTERNAL_EVENT_NS.aria);
                bindEvent("update" + INTERNAL_EVENT_NS.aria, (function(values, handleNumber, unencoded, tap, positions) {
                    scope_HandleNumbers.forEach((function(index) {
                        var handle = scope_Handles[index];
                        var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                        var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                        var now = positions[index];
                        var text = String(options.ariaFormat.to(unencoded[index]));
                        min = scope_Spectrum.fromStepping(min).toFixed(1);
                        max = scope_Spectrum.fromStepping(max).toFixed(1);
                        now = scope_Spectrum.fromStepping(now).toFixed(1);
                        handle.children[0].setAttribute("aria-valuemin", min);
                        handle.children[0].setAttribute("aria-valuemax", max);
                        handle.children[0].setAttribute("aria-valuenow", now);
                        handle.children[0].setAttribute("aria-valuetext", text);
                    }));
                }));
            }
            function getGroup(pips) {
                if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) return scope_Spectrum.xVal;
                if (pips.mode === PipsMode.Count) {
                    if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                    var interval = pips.values - 1;
                    var spread = 100 / interval;
                    var values = [];
                    while (interval--) values[interval] = interval * spread;
                    values.push(100);
                    return mapToRange(values, pips.stepped);
                }
                if (pips.mode === PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
                if (pips.mode === PipsMode.Values) {
                    if (pips.stepped) return pips.values.map((function(value) {
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    }));
                    return pips.values;
                }
                return [];
            }
            function mapToRange(values, stepped) {
                return values.map((function(value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                }));
            }
            function generateSpread(pips) {
                function safeIncrement(value, increment) {
                    return Number((value + increment).toFixed(7));
                }
                var group = getGroup(pips);
                var indexes = {};
                var firstInRange = scope_Spectrum.xVal[0];
                var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
                var ignoreFirst = false;
                var ignoreLast = false;
                var prevPct = 0;
                group = unique(group.slice().sort((function(a, b) {
                    return a - b;
                })));
                if (group[0] !== firstInRange) {
                    group.unshift(firstInRange);
                    ignoreFirst = true;
                }
                if (group[group.length - 1] !== lastInRange) {
                    group.push(lastInRange);
                    ignoreLast = true;
                }
                group.forEach((function(current, index) {
                    var step;
                    var i;
                    var q;
                    var low = current;
                    var high = group[index + 1];
                    var newPct;
                    var pctDifference;
                    var pctPos;
                    var type;
                    var steps;
                    var realSteps;
                    var stepSize;
                    var isSteps = pips.mode === PipsMode.Steps;
                    if (isSteps) step = scope_Spectrum.xNumSteps[index];
                    if (!step) step = high - low;
                    if (high === void 0) high = low;
                    step = Math.max(step, 1e-7);
                    for (i = low; i <= high; i = safeIncrement(i, step)) {
                        newPct = scope_Spectrum.toStepping(i);
                        pctDifference = newPct - prevPct;
                        steps = pctDifference / (pips.density || 1);
                        realSteps = Math.round(steps);
                        stepSize = pctDifference / realSteps;
                        for (q = 1; q <= realSteps; q += 1) {
                            pctPos = prevPct + q * stepSize;
                            indexes[pctPos.toFixed(5)] = [ scope_Spectrum.fromStepping(pctPos), 0 ];
                        }
                        type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                        if (!index && ignoreFirst && i !== high) type = 0;
                        if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [ i, type ];
                        prevPct = newPct;
                    }
                }));
                return indexes;
            }
            function addMarking(spread, filterFunc, formatter) {
                var _a, _b;
                var element = scope_Document.createElement("div");
                var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, 
                _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, 
                _a);
                var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, 
                _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, 
                _b);
                var valueOrientationClasses = [ options.cssClasses.valueHorizontal, options.cssClasses.valueVertical ];
                var markerOrientationClasses = [ options.cssClasses.markerHorizontal, options.cssClasses.markerVertical ];
                addClass(element, options.cssClasses.pips);
                addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
                function getClasses(type, source) {
                    var a = source === options.cssClasses.value;
                    var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                    var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                    return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
                }
                function addSpread(offset, value, type) {
                    type = filterFunc ? filterFunc(value, type) : type;
                    if (type === PipsType.None) return;
                    var node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.marker);
                    node.style[options.style] = offset + "%";
                    if (type > PipsType.NoValue) {
                        node = addNodeTo(element, false);
                        node.className = getClasses(type, options.cssClasses.value);
                        node.setAttribute("data-value", String(value));
                        node.style[options.style] = offset + "%";
                        node.innerHTML = String(formatter.to(value));
                    }
                }
                Object.keys(spread).forEach((function(offset) {
                    addSpread(offset, spread[offset][0], spread[offset][1]);
                }));
                return element;
            }
            function removePips() {
                if (scope_Pips) {
                    removeElement(scope_Pips);
                    scope_Pips = null;
                }
            }
            function pips(pips) {
                removePips();
                var spread = generateSpread(pips);
                var filter = pips.filter;
                var format = pips.format || {
                    to: function(value) {
                        return String(Math.round(value));
                    }
                };
                scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
                return scope_Pips;
            }
            function baseSize() {
                var rect = scope_Base.getBoundingClientRect();
                var alt = "offset" + [ "Width", "Height" ][options.ort];
                return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
            }
            function attachEvent(events, element, callback, data) {
                var method = function(event) {
                    var e = fixEvent(event, data.pageOffset, data.target || element);
                    if (!e) return false;
                    if (isSliderDisabled() && !data.doNotReject) return false;
                    if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
                    if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) return false;
                    if (data.hover && e.buttons) return false;
                    if (!supportsPassive) e.preventDefault();
                    e.calcPoint = e.points[options.ort];
                    callback(e, data);
                    return;
                };
                var methods = [];
                events.split(" ").forEach((function(eventName) {
                    element.addEventListener(eventName, method, supportsPassive ? {
                        passive: true
                    } : false);
                    methods.push([ eventName, method ]);
                }));
                return methods;
            }
            function fixEvent(e, pageOffset, eventTarget) {
                var touch = e.type.indexOf("touch") === 0;
                var mouse = e.type.indexOf("mouse") === 0;
                var pointer = e.type.indexOf("pointer") === 0;
                var x = 0;
                var y = 0;
                if (e.type.indexOf("MSPointer") === 0) pointer = true;
                if (e.type === "mousedown" && !e.buttons && !e.touches) return false;
                if (touch) {
                    var isTouchOnTarget = function(checkTouch) {
                        var target = checkTouch.target;
                        return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
                    };
                    if (e.type === "touchstart") {
                        var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                        if (targetTouches.length > 1) return false;
                        x = targetTouches[0].pageX;
                        y = targetTouches[0].pageY;
                    } else {
                        var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                        if (!targetTouch) return false;
                        x = targetTouch.pageX;
                        y = targetTouch.pageY;
                    }
                }
                pageOffset = pageOffset || getPageOffset(scope_Document);
                if (mouse || pointer) {
                    x = e.clientX + pageOffset.x;
                    y = e.clientY + pageOffset.y;
                }
                e.pageOffset = pageOffset;
                e.points = [ x, y ];
                e.cursor = mouse || pointer;
                return e;
            }
            function calcPointToPercentage(calcPoint) {
                var location = calcPoint - offset(scope_Base, options.ort);
                var proposal = location * 100 / baseSize();
                proposal = limit(proposal);
                return options.dir ? 100 - proposal : proposal;
            }
            function getClosestHandle(clickedPosition) {
                var smallestDifference = 100;
                var handleNumber = false;
                scope_Handles.forEach((function(handle, index) {
                    if (isHandleDisabled(index)) return;
                    var handlePosition = scope_Locations[index];
                    var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                    var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                    var isCloser = differenceWithThisHandle < smallestDifference;
                    var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                    if (isCloser || isCloserAfter || clickAtEdge) {
                        handleNumber = index;
                        smallestDifference = differenceWithThisHandle;
                    }
                }));
                return handleNumber;
            }
            function documentLeave(event, data) {
                if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) eventEnd(event, data);
            }
            function eventMove(event, data) {
                if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) return eventEnd(event, data);
                var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
                var proposal = movement * 100 / data.baseSize;
                moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
            }
            function eventEnd(event, data) {
                if (data.handle) {
                    removeClass(data.handle, options.cssClasses.active);
                    scope_ActiveHandlesCount -= 1;
                }
                data.listeners.forEach((function(c) {
                    scope_DocumentElement.removeEventListener(c[0], c[1]);
                }));
                if (scope_ActiveHandlesCount === 0) {
                    removeClass(scope_Target, options.cssClasses.drag);
                    setZindex();
                    if (event.cursor) {
                        scope_Body.style.cursor = "";
                        scope_Body.removeEventListener("selectstart", preventDefault);
                    }
                }
                if (options.events.smoothSteps) {
                    data.handleNumbers.forEach((function(handleNumber) {
                        setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                    }));
                    data.handleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                    }));
                }
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("change", handleNumber);
                    fireEvent("set", handleNumber);
                    fireEvent("end", handleNumber);
                }));
            }
            function eventStart(event, data) {
                if (data.handleNumbers.some(isHandleDisabled)) return;
                var handle;
                if (data.handleNumbers.length === 1) {
                    var handleOrigin = scope_Handles[data.handleNumbers[0]];
                    handle = handleOrigin.children[0];
                    scope_ActiveHandlesCount += 1;
                    addClass(handle, options.cssClasses.active);
                }
                event.stopPropagation();
                var listeners = [];
                var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                    target: event.target,
                    handle,
                    connect: data.connect,
                    listeners,
                    startCalcPoint: event.calcPoint,
                    baseSize: baseSize(),
                    pageOffset: event.pageOffset,
                    handleNumbers: data.handleNumbers,
                    buttonsProperty: event.buttons,
                    locations: scope_Locations.slice()
                });
                var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                    target: event.target,
                    handle,
                    listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                    target: event.target,
                    handle,
                    listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
                if (event.cursor) {
                    scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                    if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
                    scope_Body.addEventListener("selectstart", preventDefault, false);
                }
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("start", handleNumber);
                }));
            }
            function eventTap(event) {
                event.stopPropagation();
                var proposal = calcPointToPercentage(event.calcPoint);
                var handleNumber = getClosestHandle(proposal);
                if (handleNumber === false) return;
                if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                setHandle(handleNumber, proposal, true, true);
                setZindex();
                fireEvent("slide", handleNumber, true);
                fireEvent("update", handleNumber, true);
                if (!options.events.snap) {
                    fireEvent("change", handleNumber, true);
                    fireEvent("set", handleNumber, true);
                } else eventStart(event, {
                    handleNumbers: [ handleNumber ]
                });
            }
            function eventHover(event) {
                var proposal = calcPointToPercentage(event.calcPoint);
                var to = scope_Spectrum.getStep(proposal);
                var value = scope_Spectrum.fromStepping(to);
                Object.keys(scope_Events).forEach((function(targetEvent) {
                    if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach((function(callback) {
                        callback.call(scope_Self, value);
                    }));
                }));
            }
            function eventKeydown(event, handleNumber) {
                if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
                var horizontalKeys = [ "Left", "Right" ];
                var verticalKeys = [ "Down", "Up" ];
                var largeStepKeys = [ "PageDown", "PageUp" ];
                var edgeKeys = [ "Home", "End" ];
                if (options.dir && !options.ort) horizontalKeys.reverse(); else if (options.ort && !options.dir) {
                    verticalKeys.reverse();
                    largeStepKeys.reverse();
                }
                var key = event.key.replace("Arrow", "");
                var isLargeDown = key === largeStepKeys[0];
                var isLargeUp = key === largeStepKeys[1];
                var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
                var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
                var isMin = key === edgeKeys[0];
                var isMax = key === edgeKeys[1];
                if (!isDown && !isUp && !isMin && !isMax) return true;
                event.preventDefault();
                var to;
                if (isUp || isDown) {
                    var direction = isDown ? 0 : 1;
                    var steps = getNextStepsForHandle(handleNumber);
                    var step = steps[direction];
                    if (step === null) return false;
                    if (step === false) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                    if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier; else step *= options.keyboardMultiplier;
                    step = Math.max(step, 1e-7);
                    step *= isDown ? -1 : 1;
                    to = scope_Values[handleNumber] + step;
                } else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1]; else to = options.spectrum.xVal[0];
                setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
                fireEvent("slide", handleNumber);
                fireEvent("update", handleNumber);
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                return false;
            }
            function bindSliderEvents(behaviour) {
                if (!behaviour.fixed) scope_Handles.forEach((function(handle, index) {
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [ index ]
                    });
                }));
                if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
                if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
                if (behaviour.drag) scope_Connects.forEach((function(connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) return;
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [ connect ];
                    var handlesToDrag = [ handleBefore, handleAfter ];
                    var handleNumbersToDrag = [ index - 1, index ];
                    addClass(connect, options.cssClasses.draggable);
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach((function(eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect
                        });
                    }));
                }));
            }
            function bindEvent(namespacedEvent, callback) {
                scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
                scope_Events[namespacedEvent].push(callback);
                if (namespacedEvent.split(".")[0] === "update") scope_Handles.forEach((function(a, index) {
                    fireEvent("update", index);
                }));
            }
            function isInternalNamespace(namespace) {
                return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
            }
            function removeEvent(namespacedEvent) {
                var event = namespacedEvent && namespacedEvent.split(".")[0];
                var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
                Object.keys(scope_Events).forEach((function(bind) {
                    var tEvent = bind.split(".")[0];
                    var tNamespace = bind.substring(tEvent.length);
                    if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
                }));
            }
            function fireEvent(eventName, handleNumber, tap) {
                Object.keys(scope_Events).forEach((function(targetEvent) {
                    var eventType = targetEvent.split(".")[0];
                    if (eventName === eventType) scope_Events[targetEvent].forEach((function(callback) {
                        callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                    }));
                }));
            }
            function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
                var distance;
                if (scope_Handles.length > 1 && !options.events.unconstrained) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                        to = Math.max(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                        to = Math.min(to, distance);
                    }
                }
                if (scope_Handles.length > 1 && options.limit) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                        to = Math.min(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                        to = Math.max(to, distance);
                    }
                }
                if (options.padding) {
                    if (handleNumber === 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                        to = Math.max(to, distance);
                    }
                    if (handleNumber === scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                        to = Math.min(to, distance);
                    }
                }
                if (!smoothSteps) to = scope_Spectrum.getStep(to);
                to = limit(to);
                if (to === reference[handleNumber] && !getValue) return false;
                return to;
            }
            function inRuleOrder(v, a) {
                var o = options.ort;
                return (o ? a : v) + ", " + (o ? v : a);
            }
            function moveHandles(upward, proposal, locations, handleNumbers, connect) {
                var proposals = locations.slice();
                var firstHandle = handleNumbers[0];
                var smoothSteps = options.events.smoothSteps;
                var b = [ !upward, upward ];
                var f = [ upward, !upward ];
                handleNumbers = handleNumbers.slice();
                if (upward) handleNumbers.reverse();
                if (handleNumbers.length > 1) handleNumbers.forEach((function(handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    if (to === false) proposal = 0; else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                })); else b = f = [ true ];
                var state = false;
                handleNumbers.forEach((function(handleNumber, o) {
                    state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
                }));
                if (state) {
                    handleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                        fireEvent("slide", handleNumber);
                    }));
                    if (connect != void 0) fireEvent("drag", firstHandle);
                }
            }
            function transformDirection(a, b) {
                return options.dir ? 100 - a - b : a;
            }
            function updateHandlePosition(handleNumber, to) {
                scope_Locations[handleNumber] = to;
                scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
                var translation = transformDirection(to, 0) - scope_DirOffset;
                var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
                scope_Handles[handleNumber].style[options.transformRule] = translateRule;
                updateConnect(handleNumber);
                updateConnect(handleNumber + 1);
            }
            function setZindex() {
                scope_HandleNumbers.forEach((function(handleNumber) {
                    var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                    var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                    scope_Handles[handleNumber].style.zIndex = String(zIndex);
                }));
            }
            function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
                if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
                if (to === false) return false;
                updateHandlePosition(handleNumber, to);
                return true;
            }
            function updateConnect(index) {
                if (!scope_Connects[index]) return;
                var l = 0;
                var h = 100;
                if (index !== 0) l = scope_Locations[index - 1];
                if (index !== scope_Connects.length - 1) h = scope_Locations[index];
                var connectWidth = h - l;
                var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
                var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
                scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
            }
            function resolveToValue(to, handleNumber) {
                if (to === null || to === false || to === void 0) return scope_Locations[handleNumber];
                if (typeof to === "number") to = String(to);
                to = options.format.from(to);
                if (to !== false) to = scope_Spectrum.toStepping(to);
                if (to === false || isNaN(to)) return scope_Locations[handleNumber];
                return to;
            }
            function valueSet(input, fireSetEvent, exactInput) {
                var values = asArray(input);
                var isInit = scope_Locations[0] === void 0;
                fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
                if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                scope_HandleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
                }));
                var i = scope_HandleNumbers.length === 1 ? 0 : 1;
                if (isInit && scope_Spectrum.hasNoSize()) {
                    exactInput = true;
                    scope_Locations[0] = 0;
                    if (scope_HandleNumbers.length > 1) {
                        var space_1 = 100 / (scope_HandleNumbers.length - 1);
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            scope_Locations[handleNumber] = handleNumber * space_1;
                        }));
                    }
                }
                for (;i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                }));
                setZindex();
                scope_HandleNumbers.forEach((function(handleNumber) {
                    fireEvent("update", handleNumber);
                    if (values[handleNumber] !== null && fireSetEvent) fireEvent("set", handleNumber);
                }));
            }
            function valueReset(fireSetEvent) {
                valueSet(options.start, fireSetEvent);
            }
            function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
                handleNumber = Number(handleNumber);
                if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
                setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
                fireEvent("update", handleNumber);
                if (fireSetEvent) fireEvent("set", handleNumber);
            }
            function valueGet(unencoded) {
                if (unencoded === void 0) unencoded = false;
                if (unencoded) return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
                var values = scope_Values.map(options.format.to);
                if (values.length === 1) return values[0];
                return values;
            }
            function destroy() {
                removeEvent(INTERNAL_EVENT_NS.aria);
                removeEvent(INTERNAL_EVENT_NS.tooltips);
                Object.keys(options.cssClasses).forEach((function(key) {
                    removeClass(scope_Target, options.cssClasses[key]);
                }));
                while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
                delete scope_Target.noUiSlider;
            }
            function getNextStepsForHandle(handleNumber) {
                var location = scope_Locations[handleNumber];
                var nearbySteps = scope_Spectrum.getNearbySteps(location);
                var value = scope_Values[handleNumber];
                var increment = nearbySteps.thisStep.step;
                var decrement = null;
                if (options.snap) return [ value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null ];
                if (increment !== false) if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
                if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step; else if (nearbySteps.stepBefore.step === false) decrement = false; else decrement = value - nearbySteps.stepBefore.highestStep;
                if (location === 100) increment = null; else if (location === 0) decrement = null;
                var stepDecimals = scope_Spectrum.countStepDecimals();
                if (increment !== null && increment !== false) increment = Number(increment.toFixed(stepDecimals));
                if (decrement !== null && decrement !== false) decrement = Number(decrement.toFixed(stepDecimals));
                return [ decrement, increment ];
            }
            function getNextSteps() {
                return scope_HandleNumbers.map(getNextStepsForHandle);
            }
            function updateOptions(optionsToUpdate, fireSetEvent) {
                var v = valueGet();
                var updateAble = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips" ];
                updateAble.forEach((function(name) {
                    if (optionsToUpdate[name] !== void 0) originalOptions[name] = optionsToUpdate[name];
                }));
                var newOptions = testOptions(originalOptions);
                updateAble.forEach((function(name) {
                    if (optionsToUpdate[name] !== void 0) options[name] = newOptions[name];
                }));
                scope_Spectrum = newOptions.spectrum;
                options.margin = newOptions.margin;
                options.limit = newOptions.limit;
                options.padding = newOptions.padding;
                if (options.pips) pips(options.pips); else removePips();
                if (options.tooltips) tooltips(); else removeTooltips();
                scope_Locations = [];
                valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
            }
            function setupSlider() {
                scope_Base = addSlider(scope_Target);
                addElements(options.connect, scope_Base);
                bindSliderEvents(options.events);
                valueSet(options.start);
                if (options.pips) pips(options.pips);
                if (options.tooltips) tooltips();
                aria();
            }
            setupSlider();
            var scope_Self = {
                destroy,
                steps: getNextSteps,
                on: bindEvent,
                off: removeEvent,
                get: valueGet,
                set: valueSet,
                setHandle: valueSetHandle,
                reset: valueReset,
                disable,
                enable,
                __moveHandles: function(upward, proposal, handleNumbers) {
                    moveHandles(upward, proposal, scope_Locations, handleNumbers);
                },
                options: originalOptions,
                updateOptions,
                target: scope_Target,
                removePips,
                removeTooltips,
                getPositions: function() {
                    return scope_Locations.slice();
                },
                getTooltips: function() {
                    return scope_Tooltips;
                },
                getOrigins: function() {
                    return scope_Handles;
                },
                pips
            };
            return scope_Self;
        }
        function initialize(target, originalOptions) {
            if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
            if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
            var options = testOptions(originalOptions);
            var api = scope(target, options, originalOptions);
            target.noUiSlider = api;
            return api;
        }
        document.getElementById("slider");
        function rangeInit() {
            const priceSlider = document.querySelector("#range");
            if (priceSlider) {
                priceSlider.getAttribute("data-from");
                priceSlider.getAttribute("data-to");
                initialize(priceSlider, {
                    start: [ 20, 80 ],
                    connect: true,
                    range: {
                        min: 0,
                        max: 100
                    },
                    format: wNumb({
                        decimals: 0,
                        thousand: "",
                        prefix: "$"
                    })
                });
                const priceStart = document.querySelector(".price-filter-catalog__input--min");
                const priceEnd = document.querySelector(".price-filter-catalog__input--max");
                priceStart.addEventListener("change", setPriceValues);
                priceEnd.addEventListener("change", setPriceValues);
                priceSlider.noUiSlider.on("update", (function(values, handle) {
                    priceStart.value = `${values[0]}`;
                    priceEnd.value = `${values[1]}`;
                }));
                function setPriceValues() {
                    let priceStartValue;
                    let priceEndValue;
                    if (priceStart.value != "") priceStartValue = priceStart.value;
                    if (priceEnd.value != "") priceEndValue = priceEnd.value;
                    priceSlider.noUiSlider.set([ priceStartValue, priceEndValue ]);
                    console.log(priceEnd.value);
                }
            }
        }
        rangeInit();
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        /*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */        var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
        var CREATED = 1;
        var MOUNTED = 2;
        var IDLE = 3;
        var MOVING = 4;
        var SCROLLING = 5;
        var DRAGGING = 6;
        var DESTROYED = 7;
        var STATES = {
            CREATED,
            MOUNTED,
            IDLE,
            MOVING,
            SCROLLING,
            DRAGGING,
            DESTROYED
        };
        function empty(array) {
            array.length = 0;
        }
        function slice(arrayLike, start, end) {
            return Array.prototype.slice.call(arrayLike, start, end);
        }
        function apply(func) {
            return func.bind.apply(func, [ null ].concat(slice(arguments, 1)));
        }
        var nextTick = setTimeout;
        var noop = function noop() {};
        function raf(func) {
            return requestAnimationFrame(func);
        }
        function typeOf(type, subject) {
            return typeof subject === type;
        }
        function isObject(subject) {
            return !isNull(subject) && typeOf("object", subject);
        }
        var isArray = Array.isArray;
        var isFunction = apply(typeOf, "function");
        var isString = apply(typeOf, "string");
        var isUndefined = apply(typeOf, "undefined");
        function isNull(subject) {
            return subject === null;
        }
        function isHTMLElement(subject) {
            try {
                return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
            } catch (e) {
                return false;
            }
        }
        function toArray(value) {
            return isArray(value) ? value : [ value ];
        }
        function forEach(values, iteratee) {
            toArray(values).forEach(iteratee);
        }
        function includes(array, value) {
            return array.indexOf(value) > -1;
        }
        function push(array, items) {
            array.push.apply(array, toArray(items));
            return array;
        }
        function toggleClass(elm, classes, add) {
            if (elm) forEach(classes, (function(name) {
                if (name) elm.classList[add ? "add" : "remove"](name);
            }));
        }
        function splide_esm_addClass(elm, classes) {
            toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
        }
        function append(parent, children) {
            forEach(children, parent.appendChild.bind(parent));
        }
        function before(nodes, ref) {
            forEach(nodes, (function(node) {
                var parent = (ref || node).parentNode;
                if (parent) parent.insertBefore(node, ref);
            }));
        }
        function matches(elm, selector) {
            return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
        }
        function children(parent, selector) {
            var children2 = parent ? slice(parent.children) : [];
            return selector ? children2.filter((function(child) {
                return matches(child, selector);
            })) : children2;
        }
        function child(parent, selector) {
            return selector ? children(parent, selector)[0] : parent.firstElementChild;
        }
        var ownKeys = Object.keys;
        function forOwn(object, iteratee, right) {
            if (object) (right ? ownKeys(object).reverse() : ownKeys(object)).forEach((function(key) {
                key !== "__proto__" && iteratee(object[key], key);
            }));
            return object;
        }
        function splide_esm_assign(object) {
            slice(arguments, 1).forEach((function(source) {
                forOwn(source, (function(value, key) {
                    object[key] = source[key];
                }));
            }));
            return object;
        }
        function merge(object) {
            slice(arguments, 1).forEach((function(source) {
                forOwn(source, (function(value, key) {
                    if (isArray(value)) object[key] = value.slice(); else if (isObject(value)) object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value); else object[key] = value;
                }));
            }));
            return object;
        }
        function omit(object, keys) {
            forEach(keys || ownKeys(object), (function(key) {
                delete object[key];
            }));
        }
        function removeAttribute(elms, attrs) {
            forEach(elms, (function(elm) {
                forEach(attrs, (function(attr) {
                    elm && elm.removeAttribute(attr);
                }));
            }));
        }
        function setAttribute(elms, attrs, value) {
            if (isObject(attrs)) forOwn(attrs, (function(value2, name) {
                setAttribute(elms, name, value2);
            })); else forEach(elms, (function(elm) {
                isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
            }));
        }
        function create(tag, attrs, parent) {
            var elm = document.createElement(tag);
            if (attrs) isString(attrs) ? splide_esm_addClass(elm, attrs) : setAttribute(elm, attrs);
            parent && append(parent, elm);
            return elm;
        }
        function style(elm, prop, value) {
            if (isUndefined(value)) return getComputedStyle(elm)[prop];
            if (!isNull(value)) elm.style[prop] = "" + value;
        }
        function display(elm, display2) {
            style(elm, "display", display2);
        }
        function splide_esm_focus(elm) {
            elm["setActive"] && elm["setActive"]() || elm.focus({
                preventScroll: true
            });
        }
        function getAttribute(elm, attr) {
            return elm.getAttribute(attr);
        }
        function splide_esm_hasClass(elm, className) {
            return elm && elm.classList.contains(className);
        }
        function rect(target) {
            return target.getBoundingClientRect();
        }
        function remove(nodes) {
            forEach(nodes, (function(node) {
                if (node && node.parentNode) node.parentNode.removeChild(node);
            }));
        }
        function parseHtml(html) {
            return child((new DOMParser).parseFromString(html, "text/html").body);
        }
        function prevent(e, stopPropagation) {
            e.preventDefault();
            if (stopPropagation) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
        function query(parent, selector) {
            return parent && parent.querySelector(selector);
        }
        function queryAll(parent, selector) {
            return selector ? slice(parent.querySelectorAll(selector)) : [];
        }
        function splide_esm_removeClass(elm, classes) {
            toggleClass(elm, classes, false);
        }
        function timeOf(e) {
            return e.timeStamp;
        }
        function unit(value) {
            return isString(value) ? value : value ? value + "px" : "";
        }
        var PROJECT_CODE = "splide";
        var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
        function assert(condition, message) {
            if (!condition) throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
        }
        var min = Math.min, max = Math.max, floor = Math.floor, ceil = Math.ceil, abs = Math.abs;
        function approximatelyEqual(x, y, epsilon) {
            return abs(x - y) < epsilon;
        }
        function between(number, x, y, exclusive) {
            var minimum = min(x, y);
            var maximum = max(x, y);
            return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
        }
        function clamp(number, x, y) {
            var minimum = min(x, y);
            var maximum = max(x, y);
            return min(max(minimum, number), maximum);
        }
        function sign(x) {
            return +(x > 0) - +(x < 0);
        }
        function camelToKebab(string) {
            return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function format(string, replacements) {
            forEach(replacements, (function(replacement) {
                string = string.replace("%s", "" + replacement);
            }));
            return string;
        }
        function pad(number) {
            return number < 10 ? "0" + number : "" + number;
        }
        var ids = {};
        function uniqueId(prefix) {
            return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
        }
        function EventBinder() {
            var listeners = [];
            function bind(targets, events, callback, options) {
                forEachEvent(targets, events, (function(target, event, namespace) {
                    var isEventTarget = "addEventListener" in target;
                    var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
                    isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
                    listeners.push([ target, event, namespace, callback, remover ]);
                }));
            }
            function unbind(targets, events, callback) {
                forEachEvent(targets, events, (function(target, event, namespace) {
                    listeners = listeners.filter((function(listener) {
                        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
                            listener[4]();
                            return false;
                        }
                        return true;
                    }));
                }));
            }
            function dispatch(target, type, detail) {
                var e;
                var bubbles = true;
                if (typeof CustomEvent === "function") e = new CustomEvent(type, {
                    bubbles,
                    detail
                }); else {
                    e = document.createEvent("CustomEvent");
                    e.initCustomEvent(type, bubbles, false, detail);
                }
                target.dispatchEvent(e);
                return e;
            }
            function forEachEvent(targets, events, iteratee) {
                forEach(targets, (function(target) {
                    target && forEach(events, (function(events2) {
                        events2.split(" ").forEach((function(eventNS) {
                            var fragment = eventNS.split(".");
                            iteratee(target, fragment[0], fragment[1]);
                        }));
                    }));
                }));
            }
            function destroy() {
                listeners.forEach((function(data) {
                    data[4]();
                }));
                empty(listeners);
            }
            return {
                bind,
                unbind,
                dispatch,
                destroy
            };
        }
        var EVENT_MOUNTED = "mounted";
        var EVENT_READY = "ready";
        var EVENT_MOVE = "move";
        var EVENT_MOVED = "moved";
        var EVENT_CLICK = "click";
        var EVENT_ACTIVE = "active";
        var EVENT_INACTIVE = "inactive";
        var EVENT_VISIBLE = "visible";
        var EVENT_HIDDEN = "hidden";
        var EVENT_REFRESH = "refresh";
        var EVENT_UPDATED = "updated";
        var EVENT_RESIZE = "resize";
        var EVENT_RESIZED = "resized";
        var EVENT_DRAG = "drag";
        var EVENT_DRAGGING = "dragging";
        var EVENT_DRAGGED = "dragged";
        var EVENT_SCROLL = "scroll";
        var EVENT_SCROLLED = "scrolled";
        var EVENT_OVERFLOW = "overflow";
        var EVENT_DESTROY = "destroy";
        var EVENT_ARROWS_MOUNTED = "arrows:mounted";
        var EVENT_ARROWS_UPDATED = "arrows:updated";
        var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
        var EVENT_PAGINATION_UPDATED = "pagination:updated";
        var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
        var EVENT_AUTOPLAY_PLAY = "autoplay:play";
        var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
        var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
        var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
        var EVENT_SLIDE_KEYDOWN = "sk";
        var EVENT_SHIFTED = "sh";
        var EVENT_END_INDEX_CHANGED = "ei";
        function EventInterface(Splide2) {
            var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
            var binder = EventBinder();
            function on(events, callback) {
                binder.bind(bus, toArray(events).join(" "), (function(e) {
                    callback.apply(callback, isArray(e.detail) ? e.detail : []);
                }));
            }
            function emit(event) {
                binder.dispatch(bus, event, slice(arguments, 1));
            }
            if (Splide2) Splide2.event.on(EVENT_DESTROY, binder.destroy);
            return splide_esm_assign(binder, {
                bus,
                on,
                off: apply(binder.unbind, bus),
                emit
            });
        }
        function RequestInterval(interval, onInterval, onUpdate, limit) {
            var now = Date.now;
            var startTime;
            var rate = 0;
            var id;
            var paused = true;
            var count = 0;
            function update() {
                if (!paused) {
                    rate = interval ? min((now() - startTime) / interval, 1) : 1;
                    onUpdate && onUpdate(rate);
                    if (rate >= 1) {
                        onInterval();
                        startTime = now();
                        if (limit && ++count >= limit) return pause();
                    }
                    id = raf(update);
                }
            }
            function start(resume) {
                resume || cancel();
                startTime = now() - (resume ? rate * interval : 0);
                paused = false;
                id = raf(update);
            }
            function pause() {
                paused = true;
            }
            function rewind() {
                startTime = now();
                rate = 0;
                if (onUpdate) onUpdate(rate);
            }
            function cancel() {
                id && cancelAnimationFrame(id);
                rate = 0;
                id = 0;
                paused = true;
            }
            function set(time) {
                interval = time;
            }
            function isPaused() {
                return paused;
            }
            return {
                start,
                rewind,
                pause,
                cancel,
                set,
                isPaused
            };
        }
        function State(initialState) {
            var state = initialState;
            function set(value) {
                state = value;
            }
            function is(states) {
                return includes(toArray(states), state);
            }
            return {
                set,
                is
            };
        }
        function Throttle(func, duration) {
            var interval = RequestInterval(duration || 0, func, null, 1);
            return function() {
                interval.isPaused() && interval.start();
            };
        }
        function Media(Splide2, Components2, options) {
            var state = Splide2.state;
            var breakpoints = options.breakpoints || {};
            var reducedMotion = options.reducedMotion || {};
            var binder = EventBinder();
            var queries = [];
            function setup() {
                var isMin = options.mediaQuery === "min";
                ownKeys(breakpoints).sort((function(n, m) {
                    return isMin ? +n - +m : +m - +n;
                })).forEach((function(key) {
                    register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
                }));
                register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
                update();
            }
            function destroy(completely) {
                if (completely) binder.destroy();
            }
            function register(options2, query) {
                var queryList = matchMedia(query);
                binder.bind(queryList, "change", update);
                queries.push([ options2, queryList ]);
            }
            function update() {
                var destroyed = state.is(DESTROYED);
                var direction = options.direction;
                var merged = queries.reduce((function(merged2, entry) {
                    return merge(merged2, entry[1].matches ? entry[0] : {});
                }), {});
                omit(options);
                set(merged);
                if (options.destroy) Splide2.destroy(options.destroy === "completely"); else if (destroyed) {
                    destroy(true);
                    Splide2.mount();
                } else direction !== options.direction && Splide2.refresh();
            }
            function reduce(enable) {
                if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
            }
            function set(opts, base, notify) {
                merge(options, opts);
                base && merge(Object.getPrototypeOf(options), opts);
                if (notify || !state.is(CREATED)) Splide2.emit(EVENT_UPDATED, options);
            }
            return {
                setup,
                destroy,
                reduce,
                set
            };
        }
        var ARROW = "Arrow";
        var ARROW_LEFT = ARROW + "Left";
        var ARROW_RIGHT = ARROW + "Right";
        var ARROW_UP = ARROW + "Up";
        var ARROW_DOWN = ARROW + "Down";
        var RTL = "rtl";
        var TTB = "ttb";
        var ORIENTATION_MAP = {
            width: [ "height" ],
            left: [ "top", "right" ],
            right: [ "bottom", "left" ],
            x: [ "y" ],
            X: [ "Y" ],
            Y: [ "X" ],
            ArrowLeft: [ ARROW_UP, ARROW_RIGHT ],
            ArrowRight: [ ARROW_DOWN, ARROW_LEFT ]
        };
        function Direction(Splide2, Components2, options) {
            function resolve(prop, axisOnly, direction) {
                direction = direction || options.direction;
                var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
                return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, (function(match, offset) {
                    var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
                    return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
                }));
            }
            function orient(value) {
                return value * (options.direction === RTL ? 1 : -1);
            }
            return {
                resolve,
                orient
            };
        }
        var ROLE = "role";
        var TAB_INDEX = "tabindex";
        var DISABLED = "disabled";
        var ARIA_PREFIX = "aria-";
        var ARIA_CONTROLS = ARIA_PREFIX + "controls";
        var ARIA_CURRENT = ARIA_PREFIX + "current";
        var ARIA_SELECTED = ARIA_PREFIX + "selected";
        var ARIA_LABEL = ARIA_PREFIX + "label";
        var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
        var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
        var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
        var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
        var ARIA_LIVE = ARIA_PREFIX + "live";
        var ARIA_BUSY = ARIA_PREFIX + "busy";
        var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
        var ALL_ATTRIBUTES = [ ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION ];
        var CLASS_PREFIX = PROJECT_CODE + "__";
        var STATUS_CLASS_PREFIX = "is-";
        var CLASS_ROOT = PROJECT_CODE;
        var CLASS_TRACK = CLASS_PREFIX + "track";
        var CLASS_LIST = CLASS_PREFIX + "list";
        var CLASS_SLIDE = CLASS_PREFIX + "slide";
        var CLASS_CLONE = CLASS_SLIDE + "--clone";
        var CLASS_CONTAINER = CLASS_SLIDE + "__container";
        var CLASS_ARROWS = CLASS_PREFIX + "arrows";
        var CLASS_ARROW = CLASS_PREFIX + "arrow";
        var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
        var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
        var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
        var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
        var CLASS_PROGRESS = CLASS_PREFIX + "progress";
        var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
        var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
        var CLASS_SPINNER = CLASS_PREFIX + "spinner";
        var CLASS_SR = CLASS_PREFIX + "sr";
        var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
        var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
        var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
        var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
        var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
        var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
        var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
        var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
        var STATUS_CLASSES = [ CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW ];
        var CLASSES = {
            slide: CLASS_SLIDE,
            clone: CLASS_CLONE,
            arrows: CLASS_ARROWS,
            arrow: CLASS_ARROW,
            prev: CLASS_ARROW_PREV,
            next: CLASS_ARROW_NEXT,
            pagination: CLASS_PAGINATION,
            page: CLASS_PAGINATION_PAGE,
            spinner: CLASS_SPINNER
        };
        function splide_esm_closest(from, selector) {
            if (isFunction(from.closest)) return from.closest(selector);
            var elm = from;
            while (elm && elm.nodeType === 1) {
                if (matches(elm, selector)) break;
                elm = elm.parentElement;
            }
            return elm;
        }
        var FRICTION = 5;
        var LOG_INTERVAL = 200;
        var POINTER_DOWN_EVENTS = "touchstart mousedown";
        var POINTER_MOVE_EVENTS = "touchmove mousemove";
        var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
        function Elements(Splide2, Components2, options) {
            var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
            var root = Splide2.root;
            var i18n = options.i18n;
            var elements = {};
            var slides = [];
            var rootClasses = [];
            var trackClasses = [];
            var track;
            var list;
            var isUsingKey;
            function setup() {
                collect();
                init();
                update();
            }
            function mount() {
                on(EVENT_REFRESH, destroy);
                on(EVENT_REFRESH, setup);
                on(EVENT_UPDATED, update);
                bind(document, POINTER_DOWN_EVENTS + " keydown", (function(e) {
                    isUsingKey = e.type === "keydown";
                }), {
                    capture: true
                });
                bind(root, "focusin", (function() {
                    toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
                }));
            }
            function destroy(completely) {
                var attrs = ALL_ATTRIBUTES.concat("style");
                empty(slides);
                splide_esm_removeClass(root, rootClasses);
                splide_esm_removeClass(track, trackClasses);
                removeAttribute([ track, list ], attrs);
                removeAttribute(root, completely ? attrs : [ "style", ARIA_ROLEDESCRIPTION ]);
            }
            function update() {
                splide_esm_removeClass(root, rootClasses);
                splide_esm_removeClass(track, trackClasses);
                rootClasses = getClasses(CLASS_ROOT);
                trackClasses = getClasses(CLASS_TRACK);
                splide_esm_addClass(root, rootClasses);
                splide_esm_addClass(track, trackClasses);
                setAttribute(root, ARIA_LABEL, options.label);
                setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
            }
            function collect() {
                track = find("." + CLASS_TRACK);
                list = child(track, "." + CLASS_LIST);
                assert(track && list, "A track/list element is missing.");
                push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
                forOwn({
                    arrows: CLASS_ARROWS,
                    pagination: CLASS_PAGINATION,
                    prev: CLASS_ARROW_PREV,
                    next: CLASS_ARROW_NEXT,
                    bar: CLASS_PROGRESS_BAR,
                    toggle: CLASS_TOGGLE
                }, (function(className, key) {
                    elements[key] = find("." + className);
                }));
                splide_esm_assign(elements, {
                    root,
                    track,
                    list,
                    slides
                });
            }
            function init() {
                var id = root.id || uniqueId(PROJECT_CODE);
                var role = options.role;
                root.id = id;
                track.id = track.id || id + "-track";
                list.id = list.id || id + "-list";
                if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) setAttribute(root, ROLE, role);
                setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
                setAttribute(list, ROLE, "presentation");
            }
            function find(selector) {
                var elm = query(root, selector);
                return elm && splide_esm_closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
            }
            function getClasses(base) {
                return [ base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE ];
            }
            return splide_esm_assign(elements, {
                setup,
                mount,
                destroy
            });
        }
        var SLIDE = "slide";
        var LOOP = "loop";
        var FADE = "fade";
        function Slide$1(Splide2, index, slideIndex, slide) {
            var event = EventInterface(Splide2);
            var on = event.on, emit = event.emit, bind = event.bind;
            var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
            var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
            var resolve = Components.Direction.resolve;
            var styles = getAttribute(slide, "style");
            var label = getAttribute(slide, ARIA_LABEL);
            var isClone = slideIndex > -1;
            var container = child(slide, "." + CLASS_CONTAINER);
            var destroyed;
            function mount() {
                if (!isClone) {
                    slide.id = root.id + "-slide" + pad(index + 1);
                    setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
                    setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
                    setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [ index + 1, Splide2.length ]));
                }
                listen();
            }
            function listen() {
                bind(slide, "click", apply(emit, EVENT_CLICK, self));
                bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
                on([ EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED ], update);
                on(EVENT_NAVIGATION_MOUNTED, initNavigation);
                if (updateOnMove) on(EVENT_MOVE, onMove);
            }
            function destroy() {
                destroyed = true;
                event.destroy();
                splide_esm_removeClass(slide, STATUS_CLASSES);
                removeAttribute(slide, ALL_ATTRIBUTES);
                setAttribute(slide, "style", styles);
                setAttribute(slide, ARIA_LABEL, label || "");
            }
            function initNavigation() {
                var controls = Splide2.splides.map((function(target) {
                    var Slide2 = target.splide.Components.Slides.getAt(index);
                    return Slide2 ? Slide2.slide.id : "";
                })).join(" ");
                setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
                setAttribute(slide, ARIA_CONTROLS, controls);
                setAttribute(slide, ROLE, slideFocus ? "button" : "");
                slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
            }
            function onMove() {
                if (!destroyed) update();
            }
            function update() {
                if (!destroyed) {
                    var curr = Splide2.index;
                    updateActivity();
                    updateVisibility();
                    toggleClass(slide, CLASS_PREV, index === curr - 1);
                    toggleClass(slide, CLASS_NEXT, index === curr + 1);
                }
            }
            function updateActivity() {
                var active = isActive();
                if (active !== splide_esm_hasClass(slide, CLASS_ACTIVE)) {
                    toggleClass(slide, CLASS_ACTIVE, active);
                    setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
                    emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
                }
            }
            function updateVisibility() {
                var visible = isVisible();
                var hidden = !visible && (!isActive() || isClone);
                if (!Splide2.state.is([ MOVING, SCROLLING ])) setAttribute(slide, ARIA_HIDDEN, hidden || "");
                setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
                if (slideFocus) setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
                if (visible !== splide_esm_hasClass(slide, CLASS_VISIBLE)) {
                    toggleClass(slide, CLASS_VISIBLE, visible);
                    emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
                }
                if (!visible && document.activeElement === slide) {
                    var Slide2 = Components.Slides.getAt(Splide2.index);
                    Slide2 && splide_esm_focus(Slide2.slide);
                }
            }
            function style$1(prop, value, useContainer) {
                style(useContainer && container || slide, prop, value);
            }
            function isActive() {
                var curr = Splide2.index;
                return curr === index || options.cloneStatus && curr === slideIndex;
            }
            function isVisible() {
                if (Splide2.is(FADE)) return isActive();
                var trackRect = rect(Components.Elements.track);
                var slideRect = rect(slide);
                var left = resolve("left", true);
                var right = resolve("right", true);
                return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
            }
            function isWithin(from, distance) {
                var diff = abs(from - index);
                if (!isClone && (options.rewind || Splide2.is(LOOP))) diff = min(diff, Splide2.length - diff);
                return diff <= distance;
            }
            var self = {
                index,
                slideIndex,
                slide,
                container,
                isClone,
                mount,
                destroy,
                update,
                style: style$1,
                isWithin
            };
            return self;
        }
        function Slides(Splide2, Components2, options) {
            var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
            var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
            var Slides2 = [];
            function mount() {
                init();
                on(EVENT_REFRESH, destroy);
                on(EVENT_REFRESH, init);
            }
            function init() {
                slides.forEach((function(slide, index) {
                    register(slide, index, -1);
                }));
            }
            function destroy() {
                forEach$1((function(Slide2) {
                    Slide2.destroy();
                }));
                empty(Slides2);
            }
            function update() {
                forEach$1((function(Slide2) {
                    Slide2.update();
                }));
            }
            function register(slide, index, slideIndex) {
                var object = Slide$1(Splide2, index, slideIndex, slide);
                object.mount();
                Slides2.push(object);
                Slides2.sort((function(Slide1, Slide2) {
                    return Slide1.index - Slide2.index;
                }));
            }
            function get(excludeClones) {
                return excludeClones ? filter((function(Slide2) {
                    return !Slide2.isClone;
                })) : Slides2;
            }
            function getIn(page) {
                var Controller = Components2.Controller;
                var index = Controller.toIndex(page);
                var max = Controller.hasFocus() ? 1 : options.perPage;
                return filter((function(Slide2) {
                    return between(Slide2.index, index, index + max - 1);
                }));
            }
            function getAt(index) {
                return filter(index)[0];
            }
            function add(items, index) {
                forEach(items, (function(slide) {
                    if (isString(slide)) slide = parseHtml(slide);
                    if (isHTMLElement(slide)) {
                        var ref = slides[index];
                        ref ? before(slide, ref) : append(list, slide);
                        splide_esm_addClass(slide, options.classes.slide);
                        observeImages(slide, apply(emit, EVENT_RESIZE));
                    }
                }));
                emit(EVENT_REFRESH);
            }
            function remove$1(matcher) {
                remove(filter(matcher).map((function(Slide2) {
                    return Slide2.slide;
                })));
                emit(EVENT_REFRESH);
            }
            function forEach$1(iteratee, excludeClones) {
                get(excludeClones).forEach(iteratee);
            }
            function filter(matcher) {
                return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
                    return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
                });
            }
            function style(prop, value, useContainer) {
                forEach$1((function(Slide2) {
                    Slide2.style(prop, value, useContainer);
                }));
            }
            function observeImages(elm, callback) {
                var images = queryAll(elm, "img");
                var length = images.length;
                if (length) images.forEach((function(img) {
                    bind(img, "load error", (function() {
                        if (! --length) callback();
                    }));
                })); else callback();
            }
            function getLength(excludeClones) {
                return excludeClones ? slides.length : Slides2.length;
            }
            function isEnough() {
                return Slides2.length > options.perPage;
            }
            return {
                mount,
                destroy,
                update,
                register,
                get,
                getIn,
                getAt,
                add,
                remove: remove$1,
                forEach: forEach$1,
                filter,
                style,
                getLength,
                isEnough
            };
        }
        function Layout(Splide2, Components2, options) {
            var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
            var Slides = Components2.Slides;
            var resolve = Components2.Direction.resolve;
            var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
            var getAt = Slides.getAt, styleSlides = Slides.style;
            var vertical;
            var rootRect;
            var overflow;
            function mount() {
                init();
                bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
                on([ EVENT_UPDATED, EVENT_REFRESH ], init);
                on(EVENT_RESIZE, resize);
            }
            function init() {
                vertical = options.direction === TTB;
                style(root, "maxWidth", unit(options.width));
                style(track, resolve("paddingLeft"), cssPadding(false));
                style(track, resolve("paddingRight"), cssPadding(true));
                resize(true);
            }
            function resize(force) {
                var newRect = rect(root);
                if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
                    style(track, "height", cssTrackHeight());
                    styleSlides(resolve("marginRight"), unit(options.gap));
                    styleSlides("width", cssSlideWidth());
                    styleSlides("height", cssSlideHeight(), true);
                    rootRect = newRect;
                    emit(EVENT_RESIZED);
                    if (overflow !== (overflow = isOverflow())) {
                        toggleClass(root, CLASS_OVERFLOW, overflow);
                        emit(EVENT_OVERFLOW, overflow);
                    }
                }
            }
            function cssPadding(right) {
                var padding = options.padding;
                var prop = resolve(right ? "right" : "left");
                return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
            }
            function cssTrackHeight() {
                var height = "";
                if (vertical) {
                    height = cssHeight();
                    assert(height, "height or heightRatio is missing.");
                    height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
                }
                return height;
            }
            function cssHeight() {
                return unit(options.height || rect(list).width * options.heightRatio);
            }
            function cssSlideWidth() {
                return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
            }
            function cssSlideHeight() {
                return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
            }
            function cssSlideSize() {
                var gap = unit(options.gap);
                return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
            }
            function listSize() {
                return rect(list)[resolve("width")];
            }
            function slideSize(index, withoutGap) {
                var Slide = getAt(index || 0);
                return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
            }
            function totalSize(index, withoutGap) {
                var Slide = getAt(index);
                if (Slide) {
                    var right = rect(Slide.slide)[resolve("right")];
                    var left = rect(list)[resolve("left")];
                    return abs(right - left) + (withoutGap ? 0 : getGap());
                }
                return 0;
            }
            function sliderSize(withoutGap) {
                return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
            }
            function getGap() {
                var Slide = getAt(0);
                return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
            }
            function getPadding(right) {
                return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
            }
            function isOverflow() {
                return Splide2.is(FADE) || sliderSize(true) > listSize();
            }
            return {
                mount,
                resize,
                listSize,
                slideSize,
                sliderSize,
                totalSize,
                getPadding,
                isOverflow
            };
        }
        var MULTIPLIER = 2;
        function Clones(Splide2, Components2, options) {
            var event = EventInterface(Splide2);
            var on = event.on;
            var Elements = Components2.Elements, Slides = Components2.Slides;
            var resolve = Components2.Direction.resolve;
            var clones = [];
            var cloneCount;
            function mount() {
                on(EVENT_REFRESH, remount);
                on([ EVENT_UPDATED, EVENT_RESIZE ], observe);
                if (cloneCount = computeCloneCount()) {
                    generate(cloneCount);
                    Components2.Layout.resize(true);
                }
            }
            function remount() {
                destroy();
                mount();
            }
            function destroy() {
                remove(clones);
                empty(clones);
                event.destroy();
            }
            function observe() {
                var count = computeCloneCount();
                if (cloneCount !== count) if (cloneCount < count || !count) event.emit(EVENT_REFRESH);
            }
            function generate(count) {
                var slides = Slides.get().slice();
                var length = slides.length;
                if (length) {
                    while (slides.length < count) push(slides, slides);
                    push(slides.slice(-count), slides.slice(0, count)).forEach((function(Slide, index) {
                        var isHead = index < count;
                        var clone = cloneDeep(Slide.slide, index);
                        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
                        push(clones, clone);
                        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
                    }));
                }
            }
            function cloneDeep(elm, index) {
                var clone = elm.cloneNode(true);
                splide_esm_addClass(clone, options.classes.clone);
                clone.id = Splide2.root.id + "-clone" + pad(index + 1);
                return clone;
            }
            function computeCloneCount() {
                var clones2 = options.clones;
                if (!Splide2.is(LOOP)) clones2 = 0; else if (isUndefined(clones2)) {
                    var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
                    var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
                    clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
                }
                return clones2;
            }
            return {
                mount,
                destroy
            };
        }
        function Move(Splide2, Components2, options) {
            var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
            var set = Splide2.state.set;
            var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
            var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
            var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
            var Transition;
            function mount() {
                Transition = Components2.Transition;
                on([ EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH ], reposition);
            }
            function reposition() {
                if (!Components2.Controller.isBusy()) {
                    Components2.Scroll.cancel();
                    jump(Splide2.index);
                    Components2.Slides.update();
                }
            }
            function move(dest, index, prev, callback) {
                if (dest !== index && canShift(dest > prev)) {
                    cancel();
                    translate(shift(getPosition(), dest > prev), true);
                }
                set(MOVING);
                emit(EVENT_MOVE, index, prev, dest);
                Transition.start(index, (function() {
                    set(IDLE);
                    emit(EVENT_MOVED, index, prev, dest);
                    callback && callback();
                }));
            }
            function jump(index) {
                translate(toPosition(index, true));
            }
            function translate(position, preventLoop) {
                if (!Splide2.is(FADE)) {
                    var destination = preventLoop ? position : loop(position);
                    style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
                    position !== destination && emit(EVENT_SHIFTED);
                }
            }
            function loop(position) {
                if (Splide2.is(LOOP)) {
                    var index = toIndex(position);
                    var exceededMax = index > Components2.Controller.getEnd();
                    var exceededMin = index < 0;
                    if (exceededMin || exceededMax) position = shift(position, exceededMax);
                }
                return position;
            }
            function shift(position, backwards) {
                var excess = position - getLimit(backwards);
                var size = sliderSize();
                position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
                return position;
            }
            function cancel() {
                translate(getPosition(), true);
                Transition.cancel();
            }
            function toIndex(position) {
                var Slides = Components2.Slides.get();
                var index = 0;
                var minDistance = 1 / 0;
                for (var i = 0; i < Slides.length; i++) {
                    var slideIndex = Slides[i].index;
                    var distance = abs(toPosition(slideIndex, true) - position);
                    if (distance <= minDistance) {
                        minDistance = distance;
                        index = slideIndex;
                    } else break;
                }
                return index;
            }
            function toPosition(index, trimming) {
                var position = orient(totalSize(index - 1) - offset(index));
                return trimming ? trim(position) : position;
            }
            function getPosition() {
                var left = resolve("left");
                return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
            }
            function trim(position) {
                if (options.trimSpace && Splide2.is(SLIDE)) position = clamp(position, 0, orient(sliderSize(true) - listSize()));
                return position;
            }
            function offset(index) {
                var focus = options.focus;
                return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
            }
            function getLimit(max) {
                return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
            }
            function canShift(backwards) {
                var shifted = orient(shift(getPosition(), backwards));
                return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
            }
            function exceededLimit(max, position) {
                position = isUndefined(position) ? getPosition() : position;
                var exceededMin = max !== true && orient(position) < orient(getLimit(false));
                var exceededMax = max !== false && orient(position) > orient(getLimit(true));
                return exceededMin || exceededMax;
            }
            return {
                mount,
                move,
                jump,
                translate,
                shift,
                cancel,
                toIndex,
                toPosition,
                getPosition,
                getLimit,
                exceededLimit,
                reposition
            };
        }
        function Controller(Splide2, Components2, options) {
            var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
            var Move = Components2.Move;
            var getPosition = Move.getPosition, getLimit = Move.getLimit, toPosition = Move.toPosition;
            var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
            var omitEnd = options.omitEnd;
            var isLoop = Splide2.is(LOOP);
            var isSlide = Splide2.is(SLIDE);
            var getNext = apply(getAdjacent, false);
            var getPrev = apply(getAdjacent, true);
            var currIndex = options.start || 0;
            var endIndex;
            var prevIndex = currIndex;
            var slideCount;
            var perMove;
            var perPage;
            function mount() {
                init();
                on([ EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED ], init);
                on(EVENT_RESIZED, onResized);
            }
            function init() {
                slideCount = getLength(true);
                perMove = options.perMove;
                perPage = options.perPage;
                endIndex = getEnd();
                var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
                if (index !== currIndex) {
                    currIndex = index;
                    Move.reposition();
                }
            }
            function onResized() {
                if (endIndex !== getEnd()) emit(EVENT_END_INDEX_CHANGED);
            }
            function go(control, allowSameIndex, callback) {
                if (!isBusy()) {
                    var dest = parse(control);
                    var index = loop(dest);
                    if (index > -1 && (allowSameIndex || index !== currIndex)) {
                        setIndex(index);
                        Move.move(dest, index, prevIndex, callback);
                    }
                }
            }
            function scroll(destination, duration, snap, callback) {
                Components2.Scroll.scroll(destination, duration, snap, (function() {
                    var index = loop(Move.toIndex(getPosition()));
                    setIndex(omitEnd ? min(index, endIndex) : index);
                    callback && callback();
                }));
            }
            function parse(control) {
                var index = currIndex;
                if (isString(control)) {
                    var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
                    if (indicator === "+" || indicator === "-") index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex); else if (indicator === ">") index = number ? toIndex(+number) : getNext(true); else if (indicator === "<") index = getPrev(true);
                } else index = isLoop ? control : clamp(control, 0, endIndex);
                return index;
            }
            function getAdjacent(prev, destination) {
                var number = perMove || (hasFocus() ? 1 : perPage);
                var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
                if (dest === -1 && isSlide) if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) return prev ? 0 : endIndex;
                return destination ? dest : loop(dest);
            }
            function computeDestIndex(dest, from, snapPage) {
                if (isEnough() || hasFocus()) {
                    var index = computeMovableDestIndex(dest);
                    if (index !== dest) {
                        from = dest;
                        dest = index;
                        snapPage = false;
                    }
                    if (dest < 0 || dest > endIndex) if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) dest = toIndex(toPage(dest)); else if (isLoop) dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest; else if (options.rewind) dest = dest < 0 ? endIndex : 0; else dest = -1; else if (snapPage && dest !== from) dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
                } else dest = -1;
                return dest;
            }
            function computeMovableDestIndex(dest) {
                if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
                    var position = getPosition();
                    while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) dest < currIndex ? --dest : ++dest;
                }
                return dest;
            }
            function loop(index) {
                return isLoop ? (index + slideCount) % slideCount || 0 : index;
            }
            function getEnd() {
                var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
                while (omitEnd && end-- > 0) if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
                    end++;
                    break;
                }
                return clamp(end, 0, slideCount - 1);
            }
            function toIndex(page) {
                return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
            }
            function toPage(index) {
                return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
            }
            function toDest(destination) {
                var closest = Move.toIndex(destination);
                return isSlide ? clamp(closest, 0, endIndex) : closest;
            }
            function setIndex(index) {
                if (index !== currIndex) {
                    prevIndex = currIndex;
                    currIndex = index;
                }
            }
            function getIndex(prev) {
                return prev ? prevIndex : currIndex;
            }
            function hasFocus() {
                return !isUndefined(options.focus) || options.isNavigation;
            }
            function isBusy() {
                return Splide2.state.is([ MOVING, SCROLLING ]) && !!options.waitForTransition;
            }
            return {
                mount,
                go,
                scroll,
                getNext,
                getPrev,
                getAdjacent,
                getEnd,
                setIndex,
                getIndex,
                toIndex,
                toPage,
                toDest,
                hasFocus,
                isBusy
            };
        }
        var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
        var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
        var SIZE = 40;
        function Arrows(Splide2, Components2, options) {
            var event = EventInterface(Splide2);
            var on = event.on, bind = event.bind, emit = event.emit;
            var classes = options.classes, i18n = options.i18n;
            var Elements = Components2.Elements, Controller = Components2.Controller;
            var placeholder = Elements.arrows, track = Elements.track;
            var wrapper = placeholder;
            var prev = Elements.prev;
            var next = Elements.next;
            var created;
            var wrapperClasses;
            var arrows = {};
            function mount() {
                init();
                on(EVENT_UPDATED, remount);
            }
            function remount() {
                destroy();
                mount();
            }
            function init() {
                var enabled = options.arrows;
                if (enabled && !(prev && next)) createArrows();
                if (prev && next) {
                    splide_esm_assign(arrows, {
                        prev,
                        next
                    });
                    display(wrapper, enabled ? "" : "none");
                    splide_esm_addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
                    if (enabled) {
                        listen();
                        update();
                        setAttribute([ prev, next ], ARIA_CONTROLS, track.id);
                        emit(EVENT_ARROWS_MOUNTED, prev, next);
                    }
                }
            }
            function destroy() {
                event.destroy();
                splide_esm_removeClass(wrapper, wrapperClasses);
                if (created) {
                    remove(placeholder ? [ prev, next ] : wrapper);
                    prev = next = null;
                } else removeAttribute([ prev, next ], ALL_ATTRIBUTES);
            }
            function listen() {
                on([ EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED ], update);
                bind(next, "click", apply(go, ">"));
                bind(prev, "click", apply(go, "<"));
            }
            function go(control) {
                Controller.go(control, true);
            }
            function createArrows() {
                wrapper = placeholder || create("div", classes.arrows);
                prev = createArrow(true);
                next = createArrow(false);
                created = true;
                append(wrapper, [ prev, next ]);
                !placeholder && before(wrapper, track);
            }
            function createArrow(prev2) {
                var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
                return parseHtml(arrow);
            }
            function update() {
                if (prev && next) {
                    var index = Splide2.index;
                    var prevIndex = Controller.getPrev();
                    var nextIndex = Controller.getNext();
                    var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
                    var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
                    prev.disabled = prevIndex < 0;
                    next.disabled = nextIndex < 0;
                    setAttribute(prev, ARIA_LABEL, prevLabel);
                    setAttribute(next, ARIA_LABEL, nextLabel);
                    emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
                }
            }
            return {
                arrows,
                mount,
                destroy,
                update
            };
        }
        var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
        function Autoplay(Splide2, Components2, options) {
            var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
            var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
            var isPaused = interval.isPaused;
            var Elements = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
            var autoplay = options.autoplay;
            var hovered;
            var focused;
            var stopped = autoplay === "pause";
            function mount() {
                if (autoplay) {
                    listen();
                    toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
                    stopped || play();
                    update();
                }
            }
            function listen() {
                if (options.pauseOnHover) bind(root, "mouseenter mouseleave", (function(e) {
                    hovered = e.type === "mouseenter";
                    autoToggle();
                }));
                if (options.pauseOnFocus) bind(root, "focusin focusout", (function(e) {
                    focused = e.type === "focusin";
                    autoToggle();
                }));
                if (toggle) bind(toggle, "click", (function() {
                    stopped ? play() : pause(true);
                }));
                on([ EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH ], interval.rewind);
                on(EVENT_MOVE, onMove);
            }
            function play() {
                if (isPaused() && Components2.Slides.isEnough()) {
                    interval.start(!options.resetProgress);
                    focused = hovered = stopped = false;
                    update();
                    emit(EVENT_AUTOPLAY_PLAY);
                }
            }
            function pause(stop) {
                if (stop === void 0) stop = true;
                stopped = !!stop;
                update();
                if (!isPaused()) {
                    interval.pause();
                    emit(EVENT_AUTOPLAY_PAUSE);
                }
            }
            function autoToggle() {
                if (!stopped) hovered || focused ? pause(false) : play();
            }
            function update() {
                if (toggle) {
                    toggleClass(toggle, CLASS_ACTIVE, !stopped);
                    setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
                }
            }
            function onAnimationFrame(rate) {
                var bar = Elements.bar;
                bar && style(bar, "width", rate * 100 + "%");
                emit(EVENT_AUTOPLAY_PLAYING, rate);
            }
            function onMove(index) {
                var Slide = Components2.Slides.getAt(index);
                interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
            }
            return {
                mount,
                destroy: interval.cancel,
                play,
                pause,
                isPaused
            };
        }
        function Cover(Splide2, Components2, options) {
            var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
            function mount() {
                if (options.cover) {
                    on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
                    on([ EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH ], apply(cover, true));
                }
            }
            function cover(cover2) {
                Components2.Slides.forEach((function(Slide) {
                    var img = child(Slide.container || Slide.slide, "img");
                    if (img && img.src) toggle(cover2, img, Slide);
                }));
            }
            function toggle(cover2, img, Slide) {
                Slide.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
                display(img, cover2 ? "none" : "");
            }
            return {
                mount,
                destroy: apply(cover, false)
            };
        }
        var BOUNCE_DIFF_THRESHOLD = 10;
        var BOUNCE_DURATION = 600;
        var FRICTION_FACTOR = .6;
        var BASE_VELOCITY = 1.5;
        var MIN_DURATION = 800;
        function Scroll(Splide2, Components2, options) {
            var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
            var set = Splide2.state.set;
            var Move = Components2.Move;
            var getPosition = Move.getPosition, getLimit = Move.getLimit, exceededLimit = Move.exceededLimit, translate = Move.translate;
            var isSlide = Splide2.is(SLIDE);
            var interval;
            var callback;
            var friction = 1;
            function mount() {
                on(EVENT_MOVE, clear);
                on([ EVENT_UPDATED, EVENT_REFRESH ], cancel);
            }
            function scroll(destination, duration, snap, onScrolled, noConstrain) {
                var from = getPosition();
                clear();
                if (snap && (!isSlide || !exceededLimit())) {
                    var size = Components2.Layout.sliderSize();
                    var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
                    destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
                }
                var noDistance = approximatelyEqual(from, destination, 1);
                friction = 1;
                duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
                callback = onScrolled;
                interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
                set(SCROLLING);
                emit(EVENT_SCROLL);
                interval.start();
            }
            function onEnd() {
                set(IDLE);
                callback && callback();
                emit(EVENT_SCROLLED);
            }
            function update(from, to, noConstrain, rate) {
                var position = getPosition();
                var target = from + (to - from) * easing(rate);
                var diff = (target - position) * friction;
                translate(position + diff);
                if (isSlide && !noConstrain && exceededLimit()) {
                    friction *= FRICTION_FACTOR;
                    if (abs(diff) < BOUNCE_DIFF_THRESHOLD) scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
                }
            }
            function clear() {
                if (interval) interval.cancel();
            }
            function cancel() {
                if (interval && !interval.isPaused()) {
                    clear();
                    onEnd();
                }
            }
            function easing(t) {
                var easingFunc = options.easingFunc;
                return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
            }
            return {
                mount,
                destroy: clear,
                scroll,
                cancel
            };
        }
        var SCROLL_LISTENER_OPTIONS = {
            passive: false,
            capture: true
        };
        function Drag(Splide2, Components2, options) {
            var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
            var state = Splide2.state;
            var Move = Components2.Move, Scroll = Components2.Scroll, Controller = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
            var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
            var getPosition = Move.getPosition, exceededLimit = Move.exceededLimit;
            var basePosition;
            var baseEvent;
            var prevBaseEvent;
            var isFree;
            var dragging;
            var exceeded = false;
            var clickPrevented;
            var disabled;
            var target;
            function mount() {
                bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
                bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
                bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
                bind(track, "click", onClick, {
                    capture: true
                });
                bind(track, "dragstart", prevent);
                on([ EVENT_MOUNTED, EVENT_UPDATED ], init);
            }
            function init() {
                var drag = options.drag;
                disable(!drag);
                isFree = drag === "free";
            }
            function onPointerDown(e) {
                clickPrevented = false;
                if (!disabled) {
                    var isTouch = isTouchEvent(e);
                    if (isDraggable(e.target) && (isTouch || !e.button)) if (!Controller.isBusy()) {
                        target = isTouch ? track : window;
                        dragging = state.is([ MOVING, SCROLLING ]);
                        prevBaseEvent = null;
                        bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
                        bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
                        Move.cancel();
                        Scroll.cancel();
                        save(e);
                    } else prevent(e, true);
                }
            }
            function onPointerMove(e) {
                if (!state.is(DRAGGING)) {
                    state.set(DRAGGING);
                    emit(EVENT_DRAG);
                }
                if (e.cancelable) if (dragging) {
                    Move.translate(basePosition + constrain(diffCoord(e)));
                    var expired = diffTime(e) > LOG_INTERVAL;
                    var hasExceeded = exceeded !== (exceeded = exceededLimit());
                    if (expired || hasExceeded) save(e);
                    clickPrevented = true;
                    emit(EVENT_DRAGGING);
                    prevent(e);
                } else if (isSliderDirection(e)) {
                    dragging = shouldStart(e);
                    prevent(e);
                }
            }
            function onPointerUp(e) {
                if (state.is(DRAGGING)) {
                    state.set(IDLE);
                    emit(EVENT_DRAGGED);
                }
                if (dragging) {
                    move(e);
                    prevent(e);
                }
                unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
                unbind(target, POINTER_UP_EVENTS, onPointerUp);
                dragging = false;
            }
            function onClick(e) {
                if (!disabled && clickPrevented) prevent(e, true);
            }
            function save(e) {
                prevBaseEvent = baseEvent;
                baseEvent = e;
                basePosition = getPosition();
            }
            function move(e) {
                var velocity = computeVelocity(e);
                var destination = computeDestination(velocity);
                var rewind = options.rewind && options.rewindByDrag;
                reduce(false);
                if (isFree) Controller.scroll(destination, 0, options.snap); else if (Splide2.is(FADE)) Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+"); else if (Splide2.is(SLIDE) && exceeded && rewind) Controller.go(exceededLimit(true) ? ">" : "<"); else Controller.go(Controller.toDest(destination), true);
                reduce(true);
            }
            function shouldStart(e) {
                var thresholds = options.dragMinThreshold;
                var isObj = isObject(thresholds);
                var mouse = isObj && thresholds.mouse || 0;
                var touch = (isObj ? thresholds.touch : +thresholds) || 10;
                return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
            }
            function isSliderDirection(e) {
                return abs(diffCoord(e)) > abs(diffCoord(e, true));
            }
            function computeVelocity(e) {
                if (Splide2.is(LOOP) || !exceeded) {
                    var time = diffTime(e);
                    if (time && time < LOG_INTERVAL) return diffCoord(e) / time;
                }
                return 0;
            }
            function computeDestination(velocity) {
                return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? 1 / 0 : Components2.Layout.listSize() * (options.flickMaxPages || 1));
            }
            function diffCoord(e, orthogonal) {
                return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
            }
            function diffTime(e) {
                return timeOf(e) - timeOf(getBaseEvent(e));
            }
            function getBaseEvent(e) {
                return baseEvent === e && prevBaseEvent || baseEvent;
            }
            function coordOf(e, orthogonal) {
                return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
            }
            function constrain(diff) {
                return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
            }
            function isDraggable(target2) {
                var noDrag = options.noDrag;
                return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
            }
            function isTouchEvent(e) {
                return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
            }
            function isDragging() {
                return dragging;
            }
            function disable(value) {
                disabled = value;
            }
            return {
                mount,
                disable,
                isDragging
            };
        }
        var NORMALIZATION_MAP = {
            Spacebar: " ",
            Right: ARROW_RIGHT,
            Left: ARROW_LEFT,
            Up: ARROW_UP,
            Down: ARROW_DOWN
        };
        function normalizeKey(key) {
            key = isString(key) ? key : key.key;
            return NORMALIZATION_MAP[key] || key;
        }
        var KEYBOARD_EVENT = "keydown";
        function Keyboard(Splide2, Components2, options) {
            var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
            var root = Splide2.root;
            var resolve = Components2.Direction.resolve;
            var target;
            var disabled;
            function mount() {
                init();
                on(EVENT_UPDATED, destroy);
                on(EVENT_UPDATED, init);
                on(EVENT_MOVE, onMove);
            }
            function init() {
                var keyboard = options.keyboard;
                if (keyboard) {
                    target = keyboard === "global" ? window : root;
                    bind(target, KEYBOARD_EVENT, onKeydown);
                }
            }
            function destroy() {
                unbind(target, KEYBOARD_EVENT);
            }
            function disable(value) {
                disabled = value;
            }
            function onMove() {
                var _disabled = disabled;
                disabled = true;
                nextTick((function() {
                    disabled = _disabled;
                }));
            }
            function onKeydown(e) {
                if (!disabled) {
                    var key = normalizeKey(e);
                    if (key === resolve(ARROW_LEFT)) Splide2.go("<"); else if (key === resolve(ARROW_RIGHT)) Splide2.go(">");
                }
            }
            return {
                mount,
                destroy,
                disable
            };
        }
        var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
        var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
        var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
        function LazyLoad(Splide2, Components2, options) {
            var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
            var isSequential = options.lazyLoad === "sequential";
            var events = [ EVENT_MOVED, EVENT_SCROLLED ];
            var entries = [];
            function mount() {
                if (options.lazyLoad) {
                    init();
                    on(EVENT_REFRESH, init);
                }
            }
            function init() {
                empty(entries);
                register();
                if (isSequential) loadNext(); else {
                    off(events);
                    on(events, check);
                    check();
                }
            }
            function register() {
                Components2.Slides.forEach((function(Slide) {
                    queryAll(Slide.slide, IMAGE_SELECTOR).forEach((function(img) {
                        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
                        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
                        if (src !== img.src || srcset !== img.srcset) {
                            var className = options.classes.spinner;
                            var parent = img.parentElement;
                            var spinner = child(parent, "." + className) || create("span", className, parent);
                            entries.push([ img, Slide, spinner ]);
                            img.src || display(img, "none");
                        }
                    }));
                }));
            }
            function check() {
                entries = entries.filter((function(data) {
                    var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
                    return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
                }));
                entries.length || off(events);
            }
            function load(data) {
                var img = data[0];
                splide_esm_addClass(data[1].slide, CLASS_LOADING);
                bind(img, "load error", apply(onLoad, data));
                setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
                setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
                removeAttribute(img, SRC_DATA_ATTRIBUTE);
                removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
            }
            function onLoad(data, e) {
                var img = data[0], Slide = data[1];
                splide_esm_removeClass(Slide.slide, CLASS_LOADING);
                if (e.type !== "error") {
                    remove(data[2]);
                    display(img, "");
                    emit(EVENT_LAZYLOAD_LOADED, img, Slide);
                    emit(EVENT_RESIZE);
                }
                isSequential && loadNext();
            }
            function loadNext() {
                entries.length && load(entries.shift());
            }
            return {
                mount,
                destroy: apply(empty, entries),
                check
            };
        }
        function Pagination(Splide2, Components2, options) {
            var event = EventInterface(Splide2);
            var on = event.on, emit = event.emit, bind = event.bind;
            var Slides = Components2.Slides, Elements = Components2.Elements, Controller = Components2.Controller;
            var hasFocus = Controller.hasFocus, getIndex = Controller.getIndex, go = Controller.go;
            var resolve = Components2.Direction.resolve;
            var placeholder = Elements.pagination;
            var items = [];
            var list;
            var paginationClasses;
            function mount() {
                destroy();
                on([ EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED ], mount);
                var enabled = options.pagination;
                placeholder && display(placeholder, enabled ? "" : "none");
                if (enabled) {
                    on([ EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED ], update);
                    createPagination();
                    update();
                    emit(EVENT_PAGINATION_MOUNTED, {
                        list,
                        items
                    }, getAt(Splide2.index));
                }
            }
            function destroy() {
                if (list) {
                    remove(placeholder ? slice(list.children) : list);
                    splide_esm_removeClass(list, paginationClasses);
                    empty(items);
                    list = null;
                }
                event.destroy();
            }
            function createPagination() {
                var length = Splide2.length;
                var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
                var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
                list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
                splide_esm_addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
                setAttribute(list, ROLE, "tablist");
                setAttribute(list, ARIA_LABEL, i18n.select);
                setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
                for (var i = 0; i < max; i++) {
                    var li = create("li", null, list);
                    var button = create("button", {
                        class: classes.page,
                        type: "button"
                    }, li);
                    var controls = Slides.getIn(i).map((function(Slide) {
                        return Slide.slide.id;
                    }));
                    var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
                    bind(button, "click", apply(onClick, i));
                    if (options.paginationKeyboard) bind(button, "keydown", apply(onKeydown, i));
                    setAttribute(li, ROLE, "presentation");
                    setAttribute(button, ROLE, "tab");
                    setAttribute(button, ARIA_CONTROLS, controls.join(" "));
                    setAttribute(button, ARIA_LABEL, format(text, i + 1));
                    setAttribute(button, TAB_INDEX, -1);
                    items.push({
                        li,
                        button,
                        page: i
                    });
                }
            }
            function onClick(page) {
                go(">" + page, true);
            }
            function onKeydown(page, e) {
                var length = items.length;
                var key = normalizeKey(e);
                var dir = getDirection();
                var nextPage = -1;
                if (key === resolve(ARROW_RIGHT, false, dir)) nextPage = ++page % length; else if (key === resolve(ARROW_LEFT, false, dir)) nextPage = (--page + length) % length; else if (key === "Home") nextPage = 0; else if (key === "End") nextPage = length - 1;
                var item = items[nextPage];
                if (item) {
                    splide_esm_focus(item.button);
                    go(">" + nextPage);
                    prevent(e, true);
                }
            }
            function getDirection() {
                return options.paginationDirection || options.direction;
            }
            function getAt(index) {
                return items[Controller.toPage(index)];
            }
            function update() {
                var prev = getAt(getIndex(true));
                var curr = getAt(getIndex());
                if (prev) {
                    var button = prev.button;
                    splide_esm_removeClass(button, CLASS_ACTIVE);
                    removeAttribute(button, ARIA_SELECTED);
                    setAttribute(button, TAB_INDEX, -1);
                }
                if (curr) {
                    var _button = curr.button;
                    splide_esm_addClass(_button, CLASS_ACTIVE);
                    setAttribute(_button, ARIA_SELECTED, true);
                    setAttribute(_button, TAB_INDEX, "");
                }
                emit(EVENT_PAGINATION_UPDATED, {
                    list,
                    items
                }, prev, curr);
            }
            return {
                items,
                mount,
                destroy,
                getAt,
                update
            };
        }
        var TRIGGER_KEYS = [ " ", "Enter" ];
        function Sync(Splide2, Components2, options) {
            var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
            var events = [];
            function mount() {
                Splide2.splides.forEach((function(target) {
                    if (!target.isParent) {
                        sync(Splide2, target.splide);
                        sync(target.splide, Splide2);
                    }
                }));
                if (isNavigation) navigate();
            }
            function destroy() {
                events.forEach((function(event) {
                    event.destroy();
                }));
                empty(events);
            }
            function remount() {
                destroy();
                mount();
            }
            function sync(splide, target) {
                var event = EventInterface(splide);
                event.on(EVENT_MOVE, (function(index, prev, dest) {
                    target.go(target.is(LOOP) ? dest : index);
                }));
                events.push(event);
            }
            function navigate() {
                var event = EventInterface(Splide2);
                var on = event.on;
                on(EVENT_CLICK, onClick);
                on(EVENT_SLIDE_KEYDOWN, onKeydown);
                on([ EVENT_MOUNTED, EVENT_UPDATED ], update);
                events.push(event);
                event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
            }
            function update() {
                setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
            }
            function onClick(Slide) {
                Splide2.go(Slide.index);
            }
            function onKeydown(Slide, e) {
                if (includes(TRIGGER_KEYS, normalizeKey(e))) {
                    onClick(Slide);
                    prevent(e);
                }
            }
            return {
                setup: apply(Components2.Media.set, {
                    slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
                }, true),
                mount,
                destroy,
                remount
            };
        }
        function Wheel(Splide2, Components2, options) {
            var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
            var lastTime = 0;
            function mount() {
                if (options.wheel) bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
            }
            function onWheel(e) {
                if (e.cancelable) {
                    var deltaY = e.deltaY;
                    var backwards = deltaY < 0;
                    var timeStamp = timeOf(e);
                    var _min = options.wheelMinThreshold || 0;
                    var sleep = options.wheelSleep || 0;
                    if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
                        Splide2.go(backwards ? "<" : ">");
                        lastTime = timeStamp;
                    }
                    shouldPrevent(backwards) && prevent(e);
                }
            }
            function shouldPrevent(backwards) {
                return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
            }
            return {
                mount
            };
        }
        var SR_REMOVAL_DELAY = 90;
        function Live(Splide2, Components2, options) {
            var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
            var track = Components2.Elements.track;
            var enabled = options.live && !options.isNavigation;
            var sr = create("span", CLASS_SR);
            var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
            function mount() {
                if (enabled) {
                    disable(!Components2.Autoplay.isPaused());
                    setAttribute(track, ARIA_ATOMIC, true);
                    sr.textContent = "…";
                    on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
                    on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
                    on([ EVENT_MOVED, EVENT_SCROLLED ], apply(toggle, true));
                }
            }
            function toggle(active) {
                setAttribute(track, ARIA_BUSY, active);
                if (active) {
                    append(track, sr);
                    interval.start();
                } else {
                    remove(sr);
                    interval.cancel();
                }
            }
            function destroy() {
                removeAttribute(track, [ ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY ]);
                remove(sr);
            }
            function disable(disabled) {
                if (enabled) setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
            }
            return {
                mount,
                disable,
                destroy
            };
        }
        var ComponentConstructors = Object.freeze({
            __proto__: null,
            Media,
            Direction,
            Elements,
            Slides,
            Layout,
            Clones,
            Move,
            Controller,
            Arrows,
            Autoplay,
            Cover,
            Scroll,
            Drag,
            Keyboard,
            LazyLoad,
            Pagination,
            Sync,
            Wheel,
            Live
        });
        var I18N = {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
            slideX: "Go to slide %s",
            pageX: "Go to page %s",
            play: "Start autoplay",
            pause: "Pause autoplay",
            carousel: "carousel",
            slide: "slide",
            select: "Select a slide to show",
            slideLabel: "%s of %s"
        };
        var DEFAULTS = {
            type: "slide",
            role: "region",
            speed: 400,
            perPage: 1,
            cloneStatus: true,
            arrows: true,
            pagination: true,
            paginationKeyboard: true,
            interval: 5e3,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: true,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            drag: true,
            direction: "ltr",
            trimSpace: true,
            focusableNodes: "a, button, textarea, input, select, iframe",
            live: true,
            classes: CLASSES,
            i18n: I18N,
            reducedMotion: {
                speed: 0,
                rewindSpeed: 0,
                autoplay: "pause"
            }
        };
        function Fade(Splide2, Components2, options) {
            var Slides = Components2.Slides;
            function mount() {
                EventInterface(Splide2).on([ EVENT_MOUNTED, EVENT_REFRESH ], init);
            }
            function init() {
                Slides.forEach((function(Slide) {
                    Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
                }));
            }
            function start(index, done) {
                Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
                nextTick(done);
            }
            return {
                mount,
                start,
                cancel: noop
            };
        }
        function Slide(Splide2, Components2, options) {
            var Move = Components2.Move, Controller = Components2.Controller, Scroll = Components2.Scroll;
            var list = Components2.Elements.list;
            var transition = apply(style, list, "transition");
            var endCallback;
            function mount() {
                EventInterface(Splide2).bind(list, "transitionend", (function(e) {
                    if (e.target === list && endCallback) {
                        cancel();
                        endCallback();
                    }
                }));
            }
            function start(index, done) {
                var destination = Move.toPosition(index, true);
                var position = Move.getPosition();
                var speed = getSpeed(index);
                if (abs(destination - position) >= 1 && speed >= 1) if (options.useScroll) Scroll.scroll(destination, speed, false, done); else {
                    transition("transform " + speed + "ms " + options.easing);
                    Move.translate(destination, true);
                    endCallback = done;
                } else {
                    Move.jump(index);
                    done();
                }
            }
            function cancel() {
                transition("");
                Scroll.cancel();
            }
            function getSpeed(index) {
                var rewindSpeed = options.rewindSpeed;
                if (Splide2.is(SLIDE) && rewindSpeed) {
                    var prev = Controller.getIndex(true);
                    var end = Controller.getEnd();
                    if (prev === 0 && index >= end || prev >= end && index === 0) return rewindSpeed;
                }
                return options.speed;
            }
            return {
                mount,
                start,
                cancel
            };
        }
        var _Splide = function() {
            function _Splide(target, options) {
                this.event = EventInterface();
                this.Components = {};
                this.state = State(CREATED);
                this.splides = [];
                this._o = {};
                this._E = {};
                var root = isString(target) ? query(document, target) : target;
                assert(root, root + " is invalid.");
                this.root = root;
                options = merge({
                    label: getAttribute(root, ARIA_LABEL) || "",
                    labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
                }, DEFAULTS, _Splide.defaults, options || {});
                try {
                    merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
                } catch (e) {
                    assert(false, "Invalid JSON");
                }
                this._o = Object.create(merge({}, options));
            }
            var _proto = _Splide.prototype;
            _proto.mount = function mount(Extensions, Transition) {
                var _this = this;
                var state = this.state, Components2 = this.Components;
                assert(state.is([ CREATED, DESTROYED ]), "Already mounted!");
                state.set(CREATED);
                this._C = Components2;
                this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
                this._E = Extensions || this._E;
                var Constructors = splide_esm_assign({}, ComponentConstructors, this._E, {
                    Transition: this._T
                });
                forOwn(Constructors, (function(Component, key) {
                    var component = Component(_this, Components2, _this._o);
                    Components2[key] = component;
                    component.setup && component.setup();
                }));
                forOwn(Components2, (function(component) {
                    component.mount && component.mount();
                }));
                this.emit(EVENT_MOUNTED);
                splide_esm_addClass(this.root, CLASS_INITIALIZED);
                state.set(IDLE);
                this.emit(EVENT_READY);
                return this;
            };
            _proto.sync = function sync(splide) {
                this.splides.push({
                    splide
                });
                splide.splides.push({
                    splide: this,
                    isParent: true
                });
                if (this.state.is(IDLE)) {
                    this._C.Sync.remount();
                    splide.Components.Sync.remount();
                }
                return this;
            };
            _proto.go = function go(control) {
                this._C.Controller.go(control);
                return this;
            };
            _proto.on = function on(events, callback) {
                this.event.on(events, callback);
                return this;
            };
            _proto.off = function off(events) {
                this.event.off(events);
                return this;
            };
            _proto.emit = function emit(event) {
                var _this$event;
                (_this$event = this.event).emit.apply(_this$event, [ event ].concat(slice(arguments, 1)));
                return this;
            };
            _proto.add = function add(slides, index) {
                this._C.Slides.add(slides, index);
                return this;
            };
            _proto.remove = function remove(matcher) {
                this._C.Slides.remove(matcher);
                return this;
            };
            _proto.is = function is(type) {
                return this._o.type === type;
            };
            _proto.refresh = function refresh() {
                this.emit(EVENT_REFRESH);
                return this;
            };
            _proto.destroy = function destroy(completely) {
                if (completely === void 0) completely = true;
                var event = this.event, state = this.state;
                if (state.is(CREATED)) EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely)); else {
                    forOwn(this._C, (function(component) {
                        component.destroy && component.destroy(completely);
                    }), true);
                    event.emit(EVENT_DESTROY);
                    event.destroy();
                    completely && empty(this.splides);
                    state.set(DESTROYED);
                }
                return this;
            };
            _createClass(_Splide, [ {
                key: "options",
                get: function get() {
                    return this._o;
                },
                set: function set(options) {
                    this._C.Media.set(options, true, true);
                }
            }, {
                key: "length",
                get: function get() {
                    return this._C.Slides.getLength(true);
                }
            }, {
                key: "index",
                get: function get() {
                    return this._C.Controller.getIndex();
                }
            } ]);
            return _Splide;
        }();
        var Splide = _Splide;
        Splide.defaults = {};
        Splide.STATES = STATES;
        var CLASS_RENDERED = "is-rendered";
        var RENDERER_DEFAULT_CONFIG = {
            listTag: "ul",
            slideTag: "li"
        };
        var Style = null && function() {
            function Style(id, options) {
                this.styles = {};
                this.id = id;
                this.options = options;
            }
            var _proto2 = Style.prototype;
            _proto2.rule = function rule(selector, prop, value, breakpoint) {
                breakpoint = breakpoint || "default";
                var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
                var styles = selectors[selector] = selectors[selector] || {};
                styles[prop] = value;
            };
            _proto2.build = function build() {
                var _this2 = this;
                var css = "";
                if (this.styles.default) css += this.buildSelectors(this.styles.default);
                Object.keys(this.styles).sort((function(n, m) {
                    return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
                })).forEach((function(breakpoint) {
                    if (breakpoint !== "default") {
                        css += "@media screen and (max-width: " + breakpoint + "px) {";
                        css += _this2.buildSelectors(_this2.styles[breakpoint]);
                        css += "}";
                    }
                }));
                return css;
            };
            _proto2.buildSelectors = function buildSelectors(selectors) {
                var _this3 = this;
                var css = "";
                forOwn(selectors, (function(styles, selector) {
                    selector = ("#" + _this3.id + " " + selector).trim();
                    css += selector + " {";
                    forOwn(styles, (function(value, prop) {
                        if (value || value === 0) css += prop + ": " + value + ";";
                    }));
                    css += "}";
                }));
                return css;
            };
            return Style;
        }();
        null && function() {
            function SplideRenderer(contents, options, config, defaults) {
                this.slides = [];
                this.options = {};
                this.breakpoints = [];
                merge(DEFAULTS, defaults || {});
                merge(merge(this.options, DEFAULTS), options || {});
                this.contents = contents;
                this.config = splide_esm_assign({}, RENDERER_DEFAULT_CONFIG, config || {});
                this.id = this.config.id || uniqueId("splide");
                this.Style = new Style(this.id, this.options);
                this.Direction = Direction(null, null, this.options);
                assert(this.contents.length, "Provide at least 1 content.");
                this.init();
            }
            SplideRenderer.clean = function clean(splide) {
                var _EventInterface14 = EventInterface(splide), on = _EventInterface14.on;
                var root = splide.root;
                var clones = queryAll(root, "." + CLASS_CLONE);
                on(EVENT_MOUNTED, (function() {
                    remove(child(root, "style"));
                }));
                remove(clones);
            };
            var _proto3 = SplideRenderer.prototype;
            _proto3.init = function init() {
                this.parseBreakpoints();
                this.initSlides();
                this.registerRootStyles();
                this.registerTrackStyles();
                this.registerSlideStyles();
                this.registerListStyles();
            };
            _proto3.initSlides = function initSlides() {
                var _this4 = this;
                push(this.slides, this.contents.map((function(content, index) {
                    content = isString(content) ? {
                        html: content
                    } : content;
                    content.styles = content.styles || {};
                    content.attrs = content.attrs || {};
                    _this4.cover(content);
                    var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
                    splide_esm_assign(content.attrs, {
                        class: (classes + " " + (content.attrs.class || "")).trim(),
                        style: _this4.buildStyles(content.styles)
                    });
                    return content;
                })));
                if (this.isLoop()) this.generateClones(this.slides);
            };
            _proto3.registerRootStyles = function registerRootStyles() {
                var _this5 = this;
                this.breakpoints.forEach((function(_ref2) {
                    var width = _ref2[0], options = _ref2[1];
                    _this5.Style.rule(" ", "max-width", unit(options.width), width);
                }));
            };
            _proto3.registerTrackStyles = function registerTrackStyles() {
                var _this6 = this;
                var Style2 = this.Style;
                var selector = "." + CLASS_TRACK;
                this.breakpoints.forEach((function(_ref3) {
                    var width = _ref3[0], options = _ref3[1];
                    Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
                    Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
                    Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
                }));
            };
            _proto3.registerListStyles = function registerListStyles() {
                var _this7 = this;
                var Style2 = this.Style;
                var selector = "." + CLASS_LIST;
                this.breakpoints.forEach((function(_ref4) {
                    var width = _ref4[0], options = _ref4[1];
                    Style2.rule(selector, "transform", _this7.buildTranslate(options), width);
                    if (!_this7.cssSlideHeight(options)) Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
                }));
            };
            _proto3.registerSlideStyles = function registerSlideStyles() {
                var _this8 = this;
                var Style2 = this.Style;
                var selector = "." + CLASS_SLIDE;
                this.breakpoints.forEach((function(_ref5) {
                    var width = _ref5[0], options = _ref5[1];
                    Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
                    Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
                    Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
                    Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
                }));
            };
            _proto3.buildTranslate = function buildTranslate(options) {
                var _this$Direction = this.Direction, resolve = _this$Direction.resolve, orient = _this$Direction.orient;
                var values = [];
                values.push(this.cssOffsetClones(options));
                values.push(this.cssOffsetGaps(options));
                if (this.isCenter(options)) {
                    values.push(this.buildCssValue(orient(-50), "%"));
                    values.push.apply(values, this.cssOffsetCenter(options));
                }
                return values.filter(Boolean).map((function(value) {
                    return "translate" + resolve("X") + "(" + value + ")";
                })).join(" ");
            };
            _proto3.cssOffsetClones = function cssOffsetClones(options) {
                var _this$Direction2 = this.Direction, resolve = _this$Direction2.resolve, orient = _this$Direction2.orient;
                var cloneCount = this.getCloneCount();
                if (this.isFixedWidth(options)) {
                    var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]), value = _this$parseCssValue.value, unit2 = _this$parseCssValue.unit;
                    return this.buildCssValue(orient(value) * cloneCount, unit2);
                }
                var percent = 100 * cloneCount / options.perPage;
                return orient(percent) + "%";
            };
            _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
                var _this$Direction3 = this.Direction, resolve = _this$Direction3.resolve, orient = _this$Direction3.orient;
                if (this.isFixedWidth(options)) {
                    var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]), value = _this$parseCssValue2.value, unit2 = _this$parseCssValue2.unit;
                    return [ this.buildCssValue(orient(value / 2), unit2) ];
                }
                var values = [];
                var perPage = options.perPage, gap = options.gap;
                values.push(orient(50 / perPage) + "%");
                if (gap) {
                    var _this$parseCssValue3 = this.parseCssValue(gap), _value = _this$parseCssValue3.value, _unit = _this$parseCssValue3.unit;
                    var gapOffset = (_value / perPage - _value) / 2;
                    values.push(this.buildCssValue(orient(gapOffset), _unit));
                }
                return values;
            };
            _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
                var cloneCount = this.getCloneCount();
                if (cloneCount && options.gap) {
                    var orient = this.Direction.orient;
                    var _this$parseCssValue4 = this.parseCssValue(options.gap), value = _this$parseCssValue4.value, unit2 = _this$parseCssValue4.unit;
                    if (this.isFixedWidth(options)) return this.buildCssValue(orient(value * cloneCount), unit2);
                    var perPage = options.perPage;
                    var gaps = cloneCount / perPage;
                    return this.buildCssValue(orient(gaps * value), unit2);
                }
                return "";
            };
            _proto3.resolve = function resolve(prop) {
                return camelToKebab(this.Direction.resolve(prop));
            };
            _proto3.cssPadding = function cssPadding(options, right) {
                var padding = options.padding;
                var prop = this.Direction.resolve(right ? "right" : "left", true);
                return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
            };
            _proto3.cssTrackHeight = function cssTrackHeight(options) {
                var height = "";
                if (this.isVertical()) {
                    height = this.cssHeight(options);
                    assert(height, '"height" is missing.');
                    height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
                }
                return height;
            };
            _proto3.cssHeight = function cssHeight(options) {
                return unit(options.height);
            };
            _proto3.cssSlideWidth = function cssSlideWidth(options) {
                return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
            };
            _proto3.cssSlideHeight = function cssSlideHeight(options) {
                return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
            };
            _proto3.cssSlideSize = function cssSlideSize(options) {
                var gap = unit(options.gap);
                return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
            };
            _proto3.cssAspectRatio = function cssAspectRatio(options) {
                var heightRatio = options.heightRatio;
                return heightRatio ? "" + 1 / heightRatio : "";
            };
            _proto3.buildCssValue = function buildCssValue(value, unit2) {
                return "" + value + unit2;
            };
            _proto3.parseCssValue = function parseCssValue(value) {
                if (isString(value)) {
                    var number = parseFloat(value) || 0;
                    var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
                    return {
                        value: number,
                        unit: unit2
                    };
                }
                return {
                    value,
                    unit: "px"
                };
            };
            _proto3.parseBreakpoints = function parseBreakpoints() {
                var _this9 = this;
                var breakpoints = this.options.breakpoints;
                this.breakpoints.push([ "default", this.options ]);
                if (breakpoints) forOwn(breakpoints, (function(options, width) {
                    _this9.breakpoints.push([ width, merge(merge({}, _this9.options), options) ]);
                }));
            };
            _proto3.isFixedWidth = function isFixedWidth(options) {
                return !!options[this.Direction.resolve("fixedWidth")];
            };
            _proto3.isLoop = function isLoop() {
                return this.options.type === LOOP;
            };
            _proto3.isCenter = function isCenter(options) {
                if (options.focus === "center") {
                    if (this.isLoop()) return true;
                    if (this.options.type === SLIDE) return !this.options.trimSpace;
                }
                return false;
            };
            _proto3.isVertical = function isVertical() {
                return this.options.direction === TTB;
            };
            _proto3.buildClasses = function buildClasses() {
                var options = this.options;
                return [ CLASS_ROOT, CLASS_ROOT + "--" + options.type, CLASS_ROOT + "--" + options.direction, options.drag && CLASS_ROOT + "--draggable", options.isNavigation && CLASS_ROOT + "--nav", CLASS_ACTIVE, !this.config.hidden && CLASS_RENDERED ].filter(Boolean).join(" ");
            };
            _proto3.buildAttrs = function buildAttrs(attrs) {
                var attr = "";
                forOwn(attrs, (function(value, key) {
                    attr += value ? " " + camelToKebab(key) + '="' + value + '"' : "";
                }));
                return attr.trim();
            };
            _proto3.buildStyles = function buildStyles(styles) {
                var style = "";
                forOwn(styles, (function(value, key) {
                    style += " " + camelToKebab(key) + ":" + value + ";";
                }));
                return style.trim();
            };
            _proto3.renderSlides = function renderSlides() {
                var _this10 = this;
                var tag = this.config.slideTag;
                return this.slides.map((function(content) {
                    return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
                })).join("");
            };
            _proto3.cover = function cover(content) {
                var styles = content.styles, _content$html = content.html, html = _content$html === void 0 ? "" : _content$html;
                if (this.options.cover && !this.options.lazyLoad) {
                    var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
                    if (src && src[2]) styles.background = "center/cover no-repeat url('" + src[2] + "')";
                }
            };
            _proto3.generateClones = function generateClones(contents) {
                var classes = this.options.classes;
                var count = this.getCloneCount();
                var slides = contents.slice();
                while (slides.length < count) push(slides, slides);
                push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach((function(content, index) {
                    var attrs = splide_esm_assign({}, content.attrs, {
                        class: content.attrs.class + " " + classes.clone
                    });
                    var clone = splide_esm_assign({}, content, {
                        attrs
                    });
                    index < count ? contents.unshift(clone) : contents.push(clone);
                }));
            };
            _proto3.getCloneCount = function getCloneCount() {
                if (this.isLoop()) {
                    var options = this.options;
                    if (options.clones) return options.clones;
                    var perPage = max.apply(void 0, this.breakpoints.map((function(_ref6) {
                        var options2 = _ref6[1];
                        return options2.perPage;
                    })));
                    return perPage * ((options.flickMaxPages || 1) + 1);
                }
                return 0;
            };
            _proto3.renderArrows = function renderArrows() {
                var html = "";
                html += '<div class="' + this.options.classes.arrows + '">';
                html += this.renderArrow(true);
                html += this.renderArrow(false);
                html += "</div>";
                return html;
            };
            _proto3.renderArrow = function renderArrow(prev) {
                var _this$options = this.options, classes = _this$options.classes, i18n = _this$options.i18n;
                var attrs = {
                    class: classes.arrow + " " + (prev ? classes.prev : classes.next),
                    type: "button",
                    ariaLabel: prev ? i18n.prev : i18n.next
                };
                return "<button " + this.buildAttrs(attrs) + '><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '"><path d="' + (this.options.arrowPath || PATH) + '" /></svg></button>';
            };
            _proto3.html = function html() {
                var _this$config = this.config, rootClass = _this$config.rootClass, listTag = _this$config.listTag, arrows = _this$config.arrows, beforeTrack = _this$config.beforeTrack, afterTrack = _this$config.afterTrack, slider = _this$config.slider, beforeSlider = _this$config.beforeSlider, afterSlider = _this$config.afterSlider;
                var html = "";
                html += '<div id="' + this.id + '" class="' + this.buildClasses() + " " + (rootClass || "") + '">';
                html += "<style>" + this.Style.build() + "</style>";
                if (slider) {
                    html += beforeSlider || "";
                    html += '<div class="splide__slider">';
                }
                html += beforeTrack || "";
                if (arrows) html += this.renderArrows();
                html += '<div class="splide__track">';
                html += "<" + listTag + ' class="splide__list">';
                html += this.renderSlides();
                html += "</" + listTag + ">";
                html += "</div>";
                html += afterTrack || "";
                if (slider) {
                    html += "</div>";
                    html += afterSlider || "";
                }
                html += "</div>";
                return html;
            };
        }();
        const heroSlider = document.getElementById("splide-hero");
        if (heroSlider) {
            var splideHero = new Splide("#splide-hero", {
                pagination: true,
                type: `loop`,
                speed: 800,
                autoHeight: true,
                autoplay: true,
                interval: 6e3,
                pauseOnHover: true,
                classes: {
                    pagination: "splide__pagination splide__pagination--hero",
                    page: "splide__pagination-page splide__pagination-page--hero"
                }
            });
            splideHero.mount();
        }
        const sliderNew = document.getElementById("new-splide");
        if (sliderNew) {
            var splideNew = new Splide("#new-splide", {
                type: `loop`,
                speed: 900,
                perPage: 4,
                perMove: 1,
                pagination: false,
                autoHeight: true,
                gap: "2.4375rem",
                breakpoints: {
                    991.98: {
                        perPage: 3,
                        gap: "2rem"
                    },
                    767.98: {
                        perPage: 2,
                        gap: "1.9rem"
                    },
                    500: {
                        perPage: 1.5,
                        gap: "1.5rem"
                    }
                }
            });
            splideNew.mount();
        }
        const feedbackSlider = document.getElementById("feedback-splide");
        if (feedbackSlider) {
            var splideFeedback = new Splide("#feedback-splide", {
                type: `loop`,
                speed: 1e3,
                perPage: 3,
                perMove: 1,
                pagination: true,
                arrows: false,
                autoHeight: true,
                gap: "1.4375rem",
                breakpoints: {
                    991.98: {
                        perPage: 2,
                        gap: "1.2rem"
                    },
                    500: {
                        perPage: 1.5,
                        gap: "1rem"
                    }
                },
                classes: {
                    pagination: "splide__pagination splide__pagination--feedback",
                    page: "splide__pagination-page splide__pagination-page--feedback"
                }
            });
            splideFeedback.mount();
        }
        document.addEventListener("DOMContentLoaded", (function() {}));
        const gallerySliderEl = document.getElementById("gallery-slider");
        const galleryThumbnailsEl = document.getElementById("gallery-thumbnails");
        if (gallerySliderEl && galleryThumbnailsEl) {
            var gallerySlider = new Splide("#gallery-slider", {
                type: "fade",
                pagination: false,
                arrows: false
            });
            var galleryThumbnails = new Splide("#gallery-thumbnails", {
                rewind: true,
                perPage: 3,
                autoHeight: true,
                isNavigation: true,
                gap: 18,
                direction: "ttb",
                height: 269,
                width: "",
                focus: "center",
                pagination: false,
                cover: true,
                dragMinThreshold: {
                    mouse: 4,
                    touch: 10
                }
            });
            var mainSliderImages = gallerySliderEl.querySelectorAll(".slide-gallery__image");
            var thumbnailsList = galleryThumbnailsEl.querySelector(".splide__list");
            mainSliderImages.forEach((function(image) {
                var slide = document.createElement("li");
                slide.classList.add("splide__slide", "thumbnails-slide-gallery");
                var thumbnailImage = document.createElement("img");
                thumbnailImage.src = image.getAttribute("data-src");
                thumbnailImage.alt = image.alt;
                thumbnailImage.classList.add("thumbnails-slide-gallery__image", "ibg");
                slide.appendChild(thumbnailImage);
                thumbnailsList.appendChild(slide);
            }));
            gallerySlider.sync(galleryThumbnails);
            gallerySlider.mount();
            galleryThumbnails.mount();
        }
        var lazyload_min = __webpack_require__(144);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        if (document.querySelector(".lang-switch")) document.addEventListener("click", (function(e) {
            if (e.target.closest(".lang-switch")) document.documentElement.classList.toggle("lang-open");
        }));
        var hideButtons = document.querySelectorAll("[data-hide]");
        if (hideButtons) hideButtons.forEach((function(button) {
            button.addEventListener("click", (function() {
                var inputId = this.dataset.inputId;
                var inputElement = document.getElementById(inputId);
                if (inputElement.type === "text") inputElement.type = "password"; else inputElement.type = "text";
                button.classList.toggle("show");
            }));
        }));
        window["FLS"] = true;
        isWebp();
        menuInit();
        spoilers();
        tabs();
        formQuantity();
        formRating();
    })();
})();