/*! For license information please see ../../../../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [33], {
        528: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n.default
            }));
            var n = r(17);

            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function f(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var i = 0, t = new Array(e.length); i < e.length; i++) t[i] = e[i];
                        return t
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function d() {
                return "undefined" != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys
            }

            function l(e, t) {
                y(e, t), Object.getOwnPropertyNames(t.prototype).forEach((function(r) {
                    y(e.prototype, t.prototype, r)
                })), Object.getOwnPropertyNames(t).forEach((function(r) {
                    y(e, t, r)
                }))
            }

            function y(e, t, r) {
                (r ? Reflect.getOwnMetadataKeys(t, r) : Reflect.getOwnMetadataKeys(t)).forEach((function(n) {
                    var o = r ? Reflect.getOwnMetadata(n, t, r) : Reflect.getOwnMetadata(n, t);
                    r ? Reflect.defineMetadata(n, o, e, r) : Reflect.defineMetadata(n, o, e)
                }))
            }
            var m = {
                __proto__: []
            }
            instanceof Array;

            function v(e, t) {
                var r = t.prototype._init;
                t.prototype._init = function() {
                    var t = this,
                        r = Object.getOwnPropertyNames(e);
                    if (e.$options.props)
                        for (var n in e.$options.props) e.hasOwnProperty(n) || r.push(n);
                    r.forEach((function(r) {
                        Object.defineProperty(t, r, {
                            get: function() {
                                return e[r]
                            },
                            set: function(t) {
                                e[r] = t
                            },
                            configurable: !0
                        })
                    }))
                };
                var data = new t;
                t.prototype._init = r;
                var n = {};
                return Object.keys(data).forEach((function(e) {
                    void 0 !== data[e] && (n[e] = data[e])
                })), n
            }
            var h = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t.name = t.name || e._componentTag || e.name;
                var r = e.prototype;
                Object.getOwnPropertyNames(r).forEach((function(e) {
                    if ("constructor" !== e)
                        if (h.indexOf(e) > -1) t[e] = r[e];
                        else {
                            var n = Object.getOwnPropertyDescriptor(r, e);
                            void 0 !== n.value ? "function" == typeof n.value ? (t.methods || (t.methods = {}))[e] = n.value : (t.mixins || (t.mixins = [])).push({
                                data: function() {
                                    return c({}, e, n.value)
                                }
                            }) : (n.get || n.set) && ((t.computed || (t.computed = {}))[e] = {
                                get: n.get,
                                set: n.set
                            })
                        }
                })), (t.mixins || (t.mixins = [])).push({
                    data: function() {
                        return v(this, e)
                    }
                });
                var o = e.__decorators__;
                o && (o.forEach((function(e) {
                    return e(t)
                })), delete e.__decorators__);
                var f = Object.getPrototypeOf(e.prototype),
                    y = f instanceof n.default ? f.constructor : n.default,
                    m = y.extend(t);
                return P(m, e, y), d() && l(m, e), m
            }
            var w = {
                prototype: !0,
                arguments: !0,
                callee: !0,
                caller: !0
            };

            function P(e, t, r) {
                Object.getOwnPropertyNames(t).forEach((function(n) {
                    if (!w[n]) {
                        var c = Object.getOwnPropertyDescriptor(e, n);
                        if (!c || c.configurable) {
                            var f, d, l = Object.getOwnPropertyDescriptor(t, n);
                            if (!m) {
                                if ("cid" === n) return;
                                var y = Object.getOwnPropertyDescriptor(r, n);
                                if (f = l.value, d = o(f), null != f && ("object" === d || "function" === d) && y && y.value === l.value) return
                            }
                            0, Object.defineProperty(e, n, l)
                        }
                    }
                }))
            }

            function j(e) {
                return "function" == typeof e ? O(e) : function(t) {
                    return O(t, e)
                }
            }
            j.registerHooks = function(e) {
                h.push.apply(h, f(e))
            };
            "undefined" != typeof Reflect && Reflect.getMetadata
        },
        550: function(e, t, r) {
            "use strict";
            var n = r(13),
                o = r(10),
                c = r.n(o),
                f = r(14),
                d = r.n(f),
                l = r(19),
                y = r(23),
                m = r(556),
                v = n.componentFactory.mixin(l.E).create({
                    name: "WebSitePageTemplate",
                    props: {
                        page: c.a.ofType().required
                    },
                    head: function() {
                        var e = Object(y.C)(this.page);
                        return {
                            title: e.title,
                            meta: e.meta
                        }
                    },
                    render: function(e) {
                        if (this.page) return e("div", {
                            class: d()(Object(y.i)(this.page)),
                            attrs: {
                                "data-page-template-type": this.page.pageTemplateType
                            }
                        }, [Object(y.D)(e, m.b, this.page, this.currentSite)]);
                        console.warn("Page is unvailable!")
                    }
                });
            t.a = v
        },
        640: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(16),
                o = r(0),
                c = (r(34), r(528)),
                f = r(2),
                d = r(550),
                l = function e() {
                    Object(o.a)(this, e)
                };
            t.default = c.a.extend({
                name: "Page",
                data: function() {
                    return new l
                },
                asyncData: function(e) {
                    return Object(n.a)(regeneratorRuntime.mark((function t() {
                        var r, n, o, c, d, l, y, m, v;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = e.$api, n = e.$site, o = e.$cookies, c = e.params, d = e.store, l = e.error, t.prev = 1, y = (null == n ? void 0 : n.id) || o.get("siteId") || d.getters.getSiteId, m = f.fc[c.defaultPageType], t.next = 6, r.get(new f.yb({
                                        pageType: m,
                                        siteId: y
                                    }));
                                case 6:
                                    return v = t.sent, d.dispatch("setPage", v), t.abrupt("return", {
                                        page: v
                                    });
                                case 11:
                                    return t.prev = 11, t.t0 = t.catch(1), console.log(t.t0), t.abrupt("return", l({
                                        statusCode: 404,
                                        message: "Page not found"
                                    }));
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 11]
                        ])
                    })))()
                },
                beforeDestroy: function() {
                    this.onClearPage()
                },
                methods: {
                    onClearPage: function() {
                        try {
                            this.page = null, this.$store.dispatch("setPage", this.page)
                        } catch (e) {
                            console.log(e)
                        }
                    }
                },
                render: function(e) {
                    return e(d.a, {
                        attrs: {
                            page: this.page
                        }
                    })
                }
            })
        }
    }
]);