/**
 * segment - A little JavaScript class (without dependencies) to draw and animate SVG path strokes
 * @version v1.0.8
 * @link https://github.com/lmgonzalves/segment
 * @license MIT
 */
function Segment(n, t, e, i) {
    this.path = n, this.length = n.getTotalLength(), this.path.style.strokeDashoffset = 2 * this.length, this.begin = "undefined" != typeof t ? this.valueOf(t) : 0, this.end = "undefined" != typeof e ? this.valueOf(e) : this.length, this.circular = "undefined" !== i ? i : !1, this.timer = null, this.animationTimer = null, this.draw(this.begin, this.end, 0, {circular: this.circular})
}
!function () {
    for (var n, t = function () {
    }, e = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = e.length, r = window.console = window.console || {}; i--;)n = e[i], r[n] || (r[n] = t)
}();
var browsers = {
    init: function () {
        var n = navigator.userAgent;
        browsers.versions.safari && $("html").addClass("safari"), browsers.versions.safari_9 && $("html").addClass("safari_9"), browsers.versions.chrome && $("html").addClass("chrome"), browsers.versions.firefox && $("html").addClass("firefox"), browsers.versions.opera && $("html").addClass("opera"), browsers.versions.ios && $("html").addClass("ios"), browsers.versions.android && $("html").addClass("android"), browsers.versions.wechat && $("html").addClass("wechat"), browsers.versions.ios && (n.match(/OS [3-7]_\d[_\d]* like Mac OS X/i) || browsers.versions.safari && $("html").addClass("ios8"))
    }, versions: function () {
        var n = navigator.userAgent, t = navigator.appVersion;
        return {
            safari: n.match(/Safari/i) && n.match(/Version/i),
            safari_9: n.match(/Safari/i) && n.match(/Version/i) && !n.match(/Version\/[3-8]\./i),
            chrome: n.match(/Chrome/i),
            firefox: n.match(/Firefox/i),
            opera: n.match(/Chrome/i) && n.match(/OPR/i) || n.match(/Opera/i),
            iphone: n.match(/iPhone/i),
            ipad: n.match(/iPad/i),
            ipod: n.match(/iPod/i),
            ios: !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: n.indexOf("Android") > -1 || n.indexOf("Linux") > -1,
            wechat: n.match(/MicroMessenger/i)
        }
    }()
};
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (n, t, e, i, r) {
        return jQuery.easing[jQuery.easing.def](n, t, e, i, r)
    },
    easeInQuad: function (n, t, e, i, r) {
        return i * (t /= r) * t + e
    },
    easeOutQuad: function (n, t, e, i, r) {
        return -i * (t /= r) * (t - 2) + e
    },
    easeInOutQuad: function (n, t, e, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
    },
    easeInCubic: function (n, t, e, i, r) {
        return i * (t /= r) * t * t + e
    },
    easeOutCubic: function (n, t, e, i, r) {
        return i * ((t = t / r - 1) * t * t + 1) + e
    },
    easeInOutCubic: function (n, t, e, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
    },
    easeInQuart: function (n, t, e, i, r) {
        return i * (t /= r) * t * t * t + e
    },
    easeOutQuart: function (n, t, e, i, r) {
        return -i * ((t = t / r - 1) * t * t * t - 1) + e
    },
    easeInOutQuart: function (n, t, e, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
    },
    easeInQuint: function (n, t, e, i, r) {
        return i * (t /= r) * t * t * t * t + e
    },
    easeOutQuint: function (n, t, e, i, r) {
        return i * ((t = t / r - 1) * t * t * t * t + 1) + e
    },
    easeInOutQuint: function (n, t, e, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
    },
    easeInSine: function (n, t, e, i, r) {
        return -i * Math.cos(t / r * (Math.PI / 2)) + i + e
    },
    easeOutSine: function (n, t, e, i, r) {
        return i * Math.sin(t / r * (Math.PI / 2)) + e
    },
    easeInOutSine: function (n, t, e, i, r) {
        return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + e
    },
    easeInExpo: function (n, t, e, i, r) {
        return 0 == t ? e : i * Math.pow(2, 10 * (t / r - 1)) + e
    },
    easeOutExpo: function (n, t, e, i, r) {
        return t == r ? e + i : i * (-Math.pow(2, -10 * t / r) + 1) + e
    },
    easeInOutExpo: function (n, t, e, i, r) {
        return 0 == t ? e : t == r ? e + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (-Math.pow(2, -10 * --t) + 2) + e
    },
    easeInCirc: function (n, t, e, i, r) {
        return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + e
    },
    easeOutCirc: function (n, t, e, i, r) {
        return i * Math.sqrt(1 - (t = t / r - 1) * t) + e
    },
    easeInOutCirc: function (n, t, e, i, r) {
        return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
    },
    easeInElastic: function (n, t, e, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == t)return e;
        if (1 == (t /= r))return e + i;
        if (a || (a = .3 * r), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / s);
        return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + e
    },
    easeOutElastic: function (n, t, e, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == t)return e;
        if (1 == (t /= r))return e + i;
        if (a || (a = .3 * r), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + i + e
    },
    easeInOutElastic: function (n, t, e, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == t)return e;
        if (2 == (t /= r / 2))return e + i;
        if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / s);
        return 1 > t ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + e : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + i + e
    },
    easeInBack: function (n, t, e, i, r, o) {
        return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + e
    },
    easeOutBack: function (n, t, e, i, r, o) {
        return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + e
    },
    easeInOutBack: function (n, t, e, i, r, o) {
        return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * (((o *= 1.525) + 1) * t - o)) + e : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + e
    },
    easeInBounce: function (n, t, e, i, r) {
        return i - jQuery.easing.easeOutBounce(n, r - t, 0, i, r) + e
    },
    easeOutBounce: function (n, t, e, i, r) {
        return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + e : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
    },
    easeInOutBounce: function (n, t, e, i, r) {
        return r / 2 > t ? .5 * jQuery.easing.easeInBounce(n, 2 * t, 0, i, r) + e : .5 * jQuery.easing.easeOutBounce(n, 2 * t - r, 0, i, r) + .5 * i + e
    }
}), !function (n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(n.ease = {})
}(this, function (n) {
    "use strict";
    function t(n, t) {
        return null == n || isNaN(n) ? t : +n
    }

    function e(n, e) {
        n = Math.max(1, t(n, 1)), e = t(e, .3) * S;
        var i = e * Math.asin(1 / n);
        return function (t) {
            return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
        }
    }

    function i(n, e) {
        n = Math.max(1, t(n, 1)), e = t(e, .3) * S;
        var i = e * Math.asin(1 / n);
        return function (t) {
            return n * Math.pow(2, -10 * t) * Math.sin((t - i) / e) + 1
        }
    }

    function r(n, e) {
        n = Math.max(1, t(n, 1)), e = 1.5 * t(e, .3) * S;
        var i = e * Math.asin(1 / n);
        return function (t) {
            return n * ((t = 2 * t - 1) < 0 ? Math.pow(2, 10 * t) * Math.sin((i - t) / e) : Math.pow(2, -10 * t) * Math.sin((t - i) / e) + 2) / 2
        }
    }

    function o(n) {
        return n = t(n, 1.70158), function (t) {
            return t * t * ((n + 1) * t - n)
        }
    }

    function a(n) {
        return n = t(n, 1.70158), function (t) {
            return --t * t * ((n + 1) * t + n) + 1
        }
    }

    function s(n) {
        return n = 1.525 * t(n, 1.70158), function (t) {
            return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
        }
    }

    function u(n) {
        return 1 - h(1 - n)
    }

    function h(n) {
        return E > n ? V * n * n : A > n ? V * (n -= j) * n + T : L > n ? V * (n -= D) * n + B : V * (n -= _) * n + z
    }

    function c(n) {
        return ((n *= 2) <= 1 ? 1 - h(1 - n) : h(n - 1) + 1) / 2
    }

    function l(n) {
        return 1 - Math.sqrt(1 - n * n)
    }

    function f(n) {
        return Math.sqrt(1 - --n * n)
    }

    function d(n) {
        return ((n *= 2) <= 1 ? 1 - Math.sqrt(1 - n * n) : Math.sqrt(1 - (n -= 2) * n) + 1) / 2
    }

    function w(n) {
        return Math.pow(2, 10 * n - 10)
    }

    function m(n) {
        return 1 - Math.pow(2, -10 * n)
    }

    function g(n) {
        return ((n *= 2) <= 1 ? Math.pow(2, 10 * n - 10) : 2 - Math.pow(2, 10 - 10 * n)) / 2
    }

    function p(n) {
        return 1 - Math.cos(n * N)
    }

    function v(n) {
        return Math.sin(n * N)
    }

    function b(n) {
        return (1 - Math.cos(R * n)) / 2
    }

    function M(n) {
        return n * n * n
    }

    function O(n) {
        return --n * n * n + 1
    }

    function y(n) {
        return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2
    }

    function I(n) {
        return n * n
    }

    function x(n) {
        return n * (2 - n)
    }

    function C(n) {
        return ((n *= 2) <= 1 ? n * n : --n * (2 - n) + 1) / 2
    }

    function k(n) {
        return +n
    }

    function P(n) {
        return n = t(n, 3), function (t) {
            return Math.pow(t, n)
        }
    }

    function F(n) {
        return n = t(n, 3), function (t) {
            return 1 - Math.pow(1 - t, n)
        }
    }

    function Q(n) {
        return n = t(n, 3), function (t) {
            return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
        }
    }

    function q(n, t, e) {
        var i = (n += "").indexOf("-");
        return 0 > i && (n += "-in"), arguments.length > 1 && X.hasOwnProperty(n) ? X[n](t, e) : U.hasOwnProperty(n) ? U[n] : k
    }

    var S = 1 / (2 * Math.PI), E = 4 / 11, j = 6 / 11, A = 8 / 11, T = .75, D = 9 / 11, L = 10 / 11, B = .9375, _ = 21 / 22, z = 63 / 64, V = 1 / E / E, R = Math.PI, N = R / 2, U = {
        "linear-in": k,
        "linear-out": k,
        "linear-in-out": k,
        "quad-in": I,
        "quad-out": x,
        "quad-in-out": C,
        "cubic-in": M,
        "cubic-out": O,
        "cubic-in-out": y,
        "poly-in": M,
        "poly-out": O,
        "poly-in-out": y,
        "sin-in": p,
        "sin-out": v,
        "sin-in-out": b,
        "exp-in": w,
        "exp-out": m,
        "exp-in-out": g,
        "circle-in": l,
        "circle-out": f,
        "circle-in-out": d,
        "bounce-in": u,
        "bounce-out": h,
        "bounce-in-out": c,
        "back-in": o(),
        "back-out": a(),
        "back-in-out": s(),
        "elastic-in": e(),
        "elastic-out": i(),
        "elastic-in-out": r()
    }, X = {
        "poly-in": P,
        "poly-out": F,
        "poly-in-out": Q,
        "back-in": o,
        "back-out": a,
        "back-in-out": s,
        "elastic-in": e,
        "elastic-out": i,
        "elastic-in-out": r
    };
    n.ease = q
}), function ($) {
    $.belowthefold = function (n, t) {
        var e = $(window).height() + $(window).scrollTop();
        return e <= $(n).offset().top - t.threshold
    }, $.abovethetop = function (n, t) {
        var e = $(window).scrollTop();
        return e >= $(n).offset().top + $(n).height() - t.threshold
    }, $.rightofscreen = function (n, t) {
        var e = $(window).width() + $(window).scrollLeft();
        return e <= $(n).offset().left - t.threshold
    }, $.leftofscreen = function (n, t) {
        var e = $(window).scrollLeft();
        return e >= $(n).offset().left + $(n).width() - t.threshold
    }, $.inviewport = function (n, t) {
        return !($.rightofscreen(n, {threshold: 0}) || $.leftofscreen(n, {threshold: 0}) || $.belowthefold(n, t) || $.abovethetop(n, {threshold: 0}))
    }, $.extend($.expr[":"], {
        "below-the-fold": function (n, t, e) {
            return $.belowthefold(n, {threshold: 0})
        }, "above-the-top": function (n, t, e) {
            return $.abovethetop(n, {threshold: 0})
        }, "left-of-screen": function (n, t, e) {
            return $.leftofscreen(n, {threshold: 0})
        }, "right-of-screen": function (n, t, e) {
            return $.rightofscreen(n, {threshold: 0})
        }, "in-viewport": function (n, t, e) {
            var i = $(window).width() > 767 ? -100 : -50;
            return $.inviewport(n, {threshold: i})
        }
    })
}(jQuery);
var prevent = {
    init: function () {
        function n(n) {
            n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1
        }

        function t(t) {
            for (var e = ["38", "40"], i = e.length; i--;)if (t.keyCode === e[i])return void n(t)
        }

        function e(t) {
            n(t)
        }

        function i() {
            window.addEventListener && (document.addEventListener("touchmove", n, !1), window.addEventListener("DOMMouseScroll", e, !1)), window.onmousewheel = document.onmousewheel = e, document.onkeydown = t
        }

        function r() {
            window.removeEventListener && (document.removeEventListener("touchmove", n, !1), window.removeEventListener("DOMMouseScroll", e, !1)), window.onmousewheel = document.onmousewheel = document.onkeydown = null
        }

        this.disableScroll = i, this.enableScroll = r
    }
}, su = location.href, ics = !1;
(su.indexOf("file:") > -1 || su.indexOf("localhost") > -1 || su.indexOf("modes") > -1) && (ics = !0);
var animElements = {
    init: function () {
        function n() {
            var n = -1;
            Modernizr.touch && !$("html").hasClass("ios8") && $(".anim_emt").each(function () {
                $(this).offset().top > $(window).height() && $(this).removeClass("anim_emt").css("visibility", "visible")
            });
            var t = Modernizr.touch && !$("html").hasClass("ios8") ? $(".anim_emt:not(.start-animation)") : $(".anim_emt:not(.start-animation):in-viewport");
            t.each(function () {
                function t(n) {
                    setTimeout(function () {
                        e.css({"transition-duration": n, "-webkit-transition-duration": n})
                    }, 200)
                }

                var e = $(this), i = e.css("transition-duration");
                e.hasClass("start-animation") || e.hasClass("animation-triggered") || (e.addClass("animation-triggered"), n++, setTimeout(function () {
                    parseFloat(i) > 0 && (e.css("transition-duration", "0s"), t(i)), e.addClass("start-animation"), e.hasClass("skills") && e.animateSkills()
                }, 200 * n))
            })
        }

        $.fn.animateSkills = function () {
            $(".skill-value", this).each(function () {
                var n = $(this), t = n.data("width");
                n.css({width: t + "%"})
            })
        }, Modernizr.cssanimations && (n(), (!Modernizr.touch || $("html").hasClass("ios8")) && ($(window).scroll(n), $(".scroll-cont").scroll(n)))
    }
};
!function () {
    for (var n = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e)window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
        var e = (new Date).getTime(), i = Math.max(0, 16 - (e - n)), r = window.setTimeout(function () {
            t(e + i)
        }, i);
        return n = e + i, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (n) {
        clearTimeout(n)
    })
}(), Segment.prototype = {
    draw: function (n, t, e, i) {
        if (this.circular = i && i.hasOwnProperty("circular") ? i.circular : !1, e) {
            var r = i && i.hasOwnProperty("delay") ? 1e3 * parseFloat(i.delay) : 0, o = i && i.hasOwnProperty("easing") ? i.easing : null, a = i && i.hasOwnProperty("callback") ? i.callback : null, s = this;
            if (this.stop(), r)return delete i.delay, this.timer = setTimeout(function () {
                s.draw(n, t, e, i)
            }, r), this.timer;
            var u = new Date, h = this.begin, c = this.end, l = this.valueOf(n), f = this.valueOf(t);
            !function d() {
                var n = new Date, t = (n - u) / 1e3, i = t / parseFloat(e), r = i;
                return "function" == typeof o && (r = o(r)), i > 1 ? r = 1 : s.animationTimer = window.requestAnimationFrame(d), s.begin = h + (l - h) * r, s.end = c + (f - c) * r, s.begin = s.begin < 0 && !s.circular ? 0 : s.begin, s.begin = s.begin > s.length && !s.circular ? s.length : s.begin, s.end = s.end < 0 && !s.circular ? 0 : s.end, s.end = s.end > s.length && !s.circular ? s.length : s.end, s.end - s.begin <= s.length && s.end - s.begin > 0 ? s.draw(s.begin, s.end, 0, {circular: s.circular}) : s.circular && s.end - s.begin > s.length ? s.draw(0, s.length, 0, {circular: s.circular}) : s.draw(s.begin + (s.end - s.begin), s.end - (s.end - s.begin), 0, {circular: s.circular}), i > 1 && "function" == typeof a ? a.call(s) : void 0
            }()
        } else this.path.style.strokeDasharray = this.strokeDasharray(n, t)
    }, strokeDasharray: function (n, t) {
        if (this.begin = this.valueOf(n), this.end = this.valueOf(t), this.circular) {
            var e = this.begin > this.end || this.begin < 0 && this.begin < -1 * this.length ? parseInt(this.begin / parseInt(this.length)) : parseInt(this.end / parseInt(this.length));
            0 !== e && (this.begin = this.begin - this.length * e, this.end = this.end - this.length * e)
        }
        if (this.end > this.length) {
            var i = this.end - this.length;
            return [this.length, this.length, i, this.begin - i, this.end - this.begin].join(" ")
        }
        if (this.begin < 0) {
            var r = this.length + this.begin;
            return this.end < 0 ? [this.length, this.length + this.begin, this.end - this.begin, r - this.end, this.end - this.begin, this.length].join(" ") : [this.length, this.length + this.begin, this.end - this.begin, r - this.end, this.length].join(" ")
        }
        return [this.length, this.length + this.begin, this.end - this.begin].join(" ")
    }, valueOf: function (n) {
        var t = parseFloat(n);
        if (("string" == typeof n || n instanceof String) && ~n.indexOf("%")) {
            var e;
            ~n.indexOf("+") ? (e = n.split("+"), t = this.percent(e[0]) + parseFloat(e[1])) : ~n.indexOf("-") ? (e = n.split("-"), t = 3 === e.length ? -this.percent(e[1]) - parseFloat(e[2]) : e[0] ? this.percent(e[0]) - parseFloat(e[1]) : -this.percent(e[1])) : t = this.percent(n)
        }
        return t
    }, stop: function () {
        window.cancelAnimationFrame(this.animationTimer), this.animationTimer = null, clearTimeout(this.timer), this.timer = null
    }, percent: function (n) {
        return parseFloat(n) / 100 * this.length
    }
};