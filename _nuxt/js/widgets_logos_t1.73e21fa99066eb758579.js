(window.webpackJsonp = window.webpackJsonp || []).push([
    [142], {
        541: function(t, e, n) {
            "use strict";
            var o = n(13),
                r = n(10),
                c = n.n(r),
                l = n(139),
                d = o.componentFactory.create({
                    name: "LogosItems",
                    props: {
                        item: c.a.ofType().required,
                        settings: c.a.ofType().required,
                        itemIndex: c.a.ofType().default(0)
                    },
                    render: function(t) {
                        return t("div", {
                            class: "kmb-widget-logo-item"
                        }, [t("div", {
                            class: "kmb-logos-img"
                        }, [t(l.w, {
                            attrs: {
                                value: this.item.image,
                                resize: this.settings.imageResize,
                                imageIndex: this.itemIndex,
                                widgetVariation: this.settings.widgetVariation
                            }
                        })]), t(l.g, {
                            attrs: {
                                value: this.item.button,
                                classNames: "kmb-site-logo-btn"
                            },
                            class: "text-center w-full"
                        })])
                    }
                });
            e.a = d
        },
        953: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetLogosSettingsT1V1", (function() {
                return x
            }));
            n(12);
            var o = n(0),
                r = n(3),
                c = n(11),
                l = n(6),
                d = (n(18), n(13)),
                f = n(10),
                m = n.n(f),
                v = n(14),
                w = n.n(v),
                h = n(32),
                y = n(139),
                k = n(541);

            function T(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(l.a)(t);
                    if (e) {
                        var r = Object(l.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(r.a)(n, t);
                    var e = T(n);

                    function n() {
                        return Object(o.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(h.c),
                S = d.componentFactory.create({
                    props: {
                        widget: m.a.ofType().required,
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1),
                        sliderIndicatorsType: m.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(y.db, {
                            class: "logos logos-t1 logos-t1-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info "
                        }, [t("div", {
                            class: "logos-content"
                        }, [t("div", {
                            class: "kmb-widget-content kmb-widget-logos-title-content text-center kmb-widget-col-2xl-group"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
                        }, [t(y.Z, {
                            attrs: {
                                value: s.title,
                                isEnabledDivider: !1
                            }
                        }), t(y.n, {
                            attrs: {
                                value: s.description
                            },
                            class: "kmb-widget-logos-description"
                        })])]), s.items && t(y.P, {
                            attrs: {
                                navigationType: s.sliderNavigationType,
                                indicatorsType: this.sliderIndicatorsType,
                                indicators: !0,
                                nav: !1,
                                settings: {
                                    itemsToShow: 6,
                                    breakpoints: {
                                        0: {
                                            itemsToShow: 3
                                        },
                                        560: {
                                            itemsToShow: 4
                                        },
                                        780: {
                                            itemsToShow: 5
                                        },
                                        992: {
                                            itemsToShow: 6
                                        }
                                    }
                                }
                            },
                            class: w()("kmb-site-slider-pagination-xl-group kmb-widget-slider-row", {
                                "kmb-widget-slider-row-center": (null === (e = s.items) || void 0 === e ? void 0 : e.length) < 6
                            })
                        }, [s.items.map((function(e, n) {
                            return t(y.Q, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n,
                                class: "kmb-logos-item kmb-widget-col text-center"
                            }, [t(k.a, {
                                attrs: {
                                    item: e,
                                    settings: s,
                                    itemIndex: n
                                }
                            })])
                        }))])])])])])
                    }
                });
            e.default = S
        },
        956: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetLogosSettingsT1V4", (function() {
                return x
            }));
            n(12);
            var o = n(0),
                r = n(3),
                c = n(11),
                l = n(6),
                d = (n(18), n(13)),
                f = n(10),
                m = n.n(f),
                v = n(14),
                w = n.n(v),
                h = n(32),
                y = n(139),
                k = n(541);

            function T(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(l.a)(t);
                    if (e) {
                        var r = Object(l.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(r.a)(n, t);
                    var e = T(n);

                    function n() {
                        return Object(o.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(h.f),
                S = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1),
                        sliderIndicatorsType: m.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(y.db, {
                            class: "logos logos-t1 logos-t1-v4",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info "
                        }, [t("div", {
                            class: "logos-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-content kmb-widget-logos-title-content text-center kmb-widget-col-1xl-group"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
                        }, [t(y.Z, {
                            attrs: {
                                value: s.title,
                                isEnabledDivider: !1
                            }
                        }), t(y.n, {
                            attrs: {
                                value: s.description
                            },
                            class: "kmb-widget-logos-description"
                        })])])]), s.items && t(y.P, {
                            attrs: {
                                navigationType: s.sliderNavigationType,
                                indicatorsType: this.sliderIndicatorsType,
                                indicators: !0,
                                nav: !1,
                                settings: {
                                    itemsToShow: 6,
                                    breakpoints: {
                                        0: {
                                            itemsToShow: 1
                                        },
                                        560: {
                                            itemsToShow: 4
                                        },
                                        992: {
                                            itemsToShow: 6
                                        }
                                    }
                                }
                            },
                            class: w()("kmb-site-slider-pagination-lg-group kmb-widget-xl-slider-row", {
                                "kmb-widget-slider-row-center": (null === (e = s.items) || void 0 === e ? void 0 : e.length) < 6
                            })
                        }, [s.items.map((function(e, n) {
                            return t(y.Q, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n,
                                class: "kmb-widget-xl-col text-center logos-item"
                            }, [t(k.a, {
                                attrs: {
                                    item: e,
                                    itemIndex: n,
                                    settings: s
                                }
                            })])
                        }))])])])])])
                    }
                });
            e.default = S
        },
        958: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetLogosSettingsT1V6", (function() {
                return x
            }));
            n(12);
            var o = n(0),
                r = n(3),
                c = n(11),
                l = n(6),
                d = (n(18), n(13)),
                f = n(10),
                m = n.n(f),
                v = n(14),
                w = n.n(v),
                h = n(32),
                y = n(139),
                k = n(541);

            function T(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(l.a)(t);
                    if (e) {
                        var r = Object(l.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(r.a)(n, t);
                    var e = T(n);

                    function n() {
                        return Object(o.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(h.h),
                S = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1),
                        sliderIndicatorsType: m.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(y.db, {
                            class: "logos logos-t1 logos-t1-v6",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info "
                        }, [t("div", {
                            class: "logos-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-content kmb-widget-logos-title-content text-center kmb-widget-col-1xl-group"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
                        }, [t(y.Z, {
                            attrs: {
                                value: s.title,
                                isEnabledDivider: !1
                            }
                        }), t(y.n, {
                            attrs: {
                                value: s.description
                            },
                            class: "kmb-widget-logos-description"
                        })])])]), s.items && t(y.P, {
                            attrs: {
                                navigationType: s.sliderNavigationType,
                                indicatorsType: this.sliderIndicatorsType,
                                indicators: !0,
                                settings: {
                                    itemsToShow: 6,
                                    breakpoints: {
                                        0: {
                                            itemsToShow: 2
                                        },
                                        560: {
                                            itemsToShow: 4
                                        },
                                        992: {
                                            itemsToShow: 6
                                        }
                                    }
                                }
                            },
                            class: w()("kmb-widget-xl-slider-row kmb-slider-aligin-center-navigation kmb-widget-slider-outside-row", {
                                "kmb-widget-slider-row-center": (null === (e = s.items) || void 0 === e ? void 0 : e.length) < 6
                            })
                        }, [s.items.map((function(e, n) {
                            return t(y.Q, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n,
                                class: "kmb-widget-xl-col text-center logos-item"
                            }, [t(k.a, {
                                attrs: {
                                    item: e,
                                    itemIndex: n,
                                    settings: s
                                }
                            })])
                        }))])])])])])
                    }
                });
            e.default = S
        },
        959: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetLogosSettingsT1V7", (function() {
                return x
            }));
            n(12);
            var o = n(0),
                r = n(3),
                c = n(11),
                l = n(6),
                d = (n(18), n(13)),
                f = n(10),
                m = n.n(f),
                v = n(14),
                w = n.n(v),
                h = n(32),
                y = n(139),
                k = n(541);

            function T(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(l.a)(t);
                    if (e) {
                        var r = Object(l.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(r.a)(n, t);
                    var e = T(n);

                    function n() {
                        return Object(o.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(h.i),
                S = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1),
                        sliderIndicatorsType: m.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(y.db, {
                            class: "logos logos-t1 logos-t1-v7",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame-left"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info "
                        }, [t("div", {
                            class: "logos-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-content kmb-widget-logos-title-content text-center kmb-widget-col-group"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
                        }, [t(y.Z, {
                            attrs: {
                                value: s.title,
                                isEnabledDivider: !1
                            }
                        }), t(y.n, {
                            attrs: {
                                value: s.description
                            },
                            class: "kmb-widget-logos-description"
                        })])])]), s.items && t(y.P, {
                            attrs: {
                                nav: !1,
                                mouseDrag: !0,
                                autoPlay: !0,
                                settings: {
                                    itemsToShow: 5.8,
                                    infiniteScroll: !0,
                                    breakpoints: {
                                        0: {
                                            itemsToShow: 2
                                        },
                                        560: {
                                            itemsToShow: 4
                                        },
                                        992: {
                                            itemsToShow: 5.8
                                        }
                                    }
                                }
                            },
                            class: w()("kmb-site-slider-pagination-lg-group kmb-slider-aligin-center-navigation kmb-widget-slider-outside-row kmb-widget-xl-x-slider-row", {
                                "kmb-widget-slider-row-center": (null === (e = s.items) || void 0 === e ? void 0 : e.length) < 6
                            })
                        }, [s.items.map((function(e, n) {
                            return t(y.Q, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n,
                                class: "kmb-widget-xl-x-col text-center logos-item"
                            }, [t(k.a, {
                                attrs: {
                                    item: e,
                                    itemIndex: n,
                                    settings: s
                                }
                            })])
                        }))])])])])])
                    }
                });
            e.default = S
        }
    }
]);